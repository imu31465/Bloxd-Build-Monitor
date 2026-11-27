# Changed — Bundle Modifications Report (Part 052 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `52 / 126` (**356** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/290.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/290.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b)

#### 10. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L63-L74` → after: `L220-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L220-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L220-L234) · [Before (L63-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L63-L74)

```diff
-       let GR;
-       switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
-         case 1:
-           GR = qR(RR);
-           break;
-         case 2:
-           GR = uR(RR);
-           break;
-         default:
-           GR = ZR(RR)
-       }
-       return Math.min(GR, JR)
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       if (Array.isArray(rr)) {
+         for (let Wr = 0; Wr < Sr; Wr++)
+           if (rr[Qr + Wr] - Zr > 65535) return !0;
+         return !1
+       }
+       return 4 === rr.BYTES_PER_ELEMENT
+     }
+ 
+     function Nr(rr) {
+       const Sr = rr.buffer;
+       if (Sr instanceof ArrayBuffer) return rr;
+       const Qr = new ArrayBuffer(rr.byteLength);
+       return new Uint8Array(Qr).set(new Uint8Array(Sr, rr.byteOffset, rr.byteLength)), Qr
```

#### 11. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L84` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L237) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L84)

```diff
-   41616: (RR, JR, GR) => {
+   41775: (rr, Sr, Qr) => {
```

#### 12. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L87-L88` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L241-L242) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L87-L88)

```diff
-       e: () => CR,
-       h: () => nR,
+       j: () => Br,
+       g: () => Hr,
```

#### 13. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L105-L115` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L246-L247) · [Before (L105-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L105-L115)

```diff
-       static get BaseUrl() {
-         return wR.e.BaseUrl
-       }
-       static set BaseUrl(RR) {
-         wR.e.BaseUrl = RR
-       }
-       static get CleanUrl() {
-         return wR.e.CleanUrl
-       }
-       static set CleanUrl(RR) {
-         wR.e.CleanUrl = RR
+       constructor() {
+         this.children = []
```

#### 14. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L117-L148` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L249-L250) · [Before (L117-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L117-L148)

```diff
-       static IsAbsoluteUrl(RR) {
-         return 0 === RR.indexOf("//") || -1 !== RR.indexOf("://") && (-1 !== RR.indexOf(".") && (-1 !== RR.indexOf("/") && (!(RR.indexOf(":") > RR.indexOf("/")) && (RR.indexOf("://") < RR.indexOf(".") || (0 === RR.indexOf("data:") || 0 === RR.indexOf("blob:"))))))
-       }
-       static set ScriptBaseUrl(RR) {
-         wR.e.ScriptBaseUrl = RR
-       }
-       static get ScriptBaseUrl() {
-         return wR.e.ScriptBaseUrl
-       }
-       static set CDNBaseUrl(RR) {
-         yR.ScriptBaseUrl = RR, yR.AssetBaseUrl = RR
-       }
-       static set ScriptPreprocessUrl(RR) {
-         wR.e.ScriptPreprocessUrl = RR
-       }
-       static get ScriptPreprocessUrl() {
- ... (16 more removed lines; see GitHub link above)
+       isValid(rr) {
+         return !0
```

#### 15. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L150-L151` → after: `L252-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L252-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L252-L274) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L150-L151)

```diff
-       static set UseFallbackTexture(RR) {
-         KR.c.UseFallbackTexture = RR
+       process(rr, Sr, Qr) {
+         let Zr = "";
+         if (this.line) {
+           let Qr = this.line;
+           const Wr = Sr.processor;
+           if (Wr) {
+             Wr.lineProcessor && (Qr = Wr.lineProcessor(Qr, Sr.isFragment, Sr.processingContext));
+             const Zr = Sr.processor?.attributeKeywordName ?? "attribute",
+               ar = Sr.isFragment && Sr.processor?.varyingFragmentKeywordName ? Sr.processor?.varyingFragmentKeywordName : !Sr.isFragment && Sr.processor?.varyingVertexKeywordName ? Sr.processor?.varyingVertexKeywordName : "varying";
+             if (!Sr.isFragment && Wr.attributeProcessor && this.line.startsWith(Zr)) Qr = Wr.attributeProcessor(this.line, rr, Sr.processingContext);
+             else if (Wr.varyingProcessor && (Wr.varyingCheck?.(this.line, Sr.isFragment) || !Wr.varyingCheck && this.line.startsWith(ar))) Qr = Wr.varyingProcessor(this.line, Sr.isFragment, rr, Sr.processingContext);
+             else if (Wr.uniformProcessor && Wr.uniformRegexp && Wr.uniformRegexp.test(this.line)) Sr.lookForClosingBracketForUniformBuffer || (Qr = Wr.uniformProcessor(this.line, Sr.isFragment, rr, Sr.processingContext));
+             else if (Wr.uniformBufferProcessor && Wr.uniformBufferRegexp && Wr.uniformBufferRegexp.test(this.line)) Sr.lookForClosingBracketForUniformBuffer || (Qr = Wr.uniformBufferProcessor(this.line, Sr.isFragment, Sr.processingContext), Sr.lookForClosingBracketForUniformBuffe … [truncated]
+             else if (Wr.textureProcessor && Wr.textureRegexp && Wr.textureRegexp.test(this.line)) Qr = Wr.textureProcessor(this.line, Sr.isFragment, rr, Sr.processingContext);
+             else if ((Wr.uniformProcessor || Wr.uniformBufferProcessor) && this.line.startsWith("uniform") && !Sr.lookForClosingBracketForUniformBuffer) {
+               /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Wr.uniformProcessor && (Qr = Wr.uniformProcessor(this.line, Sr.isFragment, rr, Sr.processingContext)) : Wr.uniformBufferProcessor && (Qr = Wr.uniformBufferProcessor(this.line, Sr.isFragment,  … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L153-L154` → after: `L276-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L276-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L276-L311) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L153-L154)

```diff
-       static get RegisteredExternalClasses() {
-         return eR.b.RegisteredExternalClasses
+     }
+     class Wr {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(rr) {
+         this._lines.length = 0;
+         for (const Sr of rr) {
+           if (!Sr || "\r" === Sr) continue;
+           if ("#" === Sr[0]) {
+ ... (20 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L156-L157` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L313-L320) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L156-L157)

```diff
-       static set RegisteredExternalClasses(RR) {
-         eR.b.RegisteredExternalClasses = RR
+     }
+     class ar extends Zr {
+       process(rr, Sr, Qr) {
+         for (let Zr = 0; Zr < this.children.length; Zr++) {
+           const Wr = this.children[Zr];
+           if (Wr.isValid(rr)) return Wr.process(rr, Sr, Qr)
+         }
+         return ""
```

#### 18. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L159-L160` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L322-L325) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L159-L160)

```diff
-       static get fallbackTexture() {
-         return KR.c.FallbackTexture
+     }
+     class jr extends Zr {
+       isValid(rr) {
+         return this.testExpression.isTrue(rr)
```

#### 19. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L162-L163` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L327-L330) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L162-L163)

```diff
-       static set fallbackTexture(RR) {
-         KR.c.FallbackTexture = RR
+     }
+     class Ir {
+       isTrue(rr) {
+         return !0
```

#### 20. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L165-L167` → after: `L332-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L332-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L332-L375) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L165-L167)

```diff
-       static FetchToRef(RR, JR, GR, yR, tR, uR) {
-         const ZR = 4 * ((Math.abs(RR) * GR % GR | 0) + (Math.abs(JR) * yR % yR | 0) * GR);
-         uR.r = tR[ZR] / 255, uR.g = tR[ZR + 1] / 255, uR.b = tR[ZR + 2] / 255, uR.a = tR[ZR + 3] / 255
+       static postfixToInfix(rr) {
+         const Sr = [];
+         for (const Qr of rr)
+           if (void 0 === Ir._OperatorPriority[Qr]) Sr.push(Qr);
+           else {
+             const rr = Sr[Sr.length - 1],
+               Zr = Sr[Sr.length - 2];
+             Sr.length -= 2, Sr.push(`(${Zr}${Qr}${rr})`)
+           } return Sr[Sr.length - 1]
+       }
+       static infixToPostfix(rr) {
+         const Sr = Ir._InfixToPostfixCache.get(rr);
+         if (Sr) return Sr.accessTime = Date.now(), Sr.result;
+         if (!rr.includes("&&") && !rr.includes("||") && !rr.includes(")") && !rr.includes("(")) return [rr];
+         const Qr = [];
+         let Zr = -1;
+ ... (28 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L169-L170` → after: `L377-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L377-L379) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L169-L170)

```diff
-       static Mix(RR, JR, GR) {
-         return 0
+       static ClearCache() {
+         const rr = Array.from(Ir._InfixToPostfixCache.entries()).sort(((rr, Sr) => rr[1].accessTime - Sr[1].accessTime));
+         for (let Sr = 0; Sr < Ir.InfixToPostfixCacheCleanupSize; Sr++) Ir._InfixToPostfixCache.delete(rr[Sr][0])
```

#### 22. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L172-L173` → after: `L381-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L381-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L381-L391) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L172-L173)

```diff
-       static Instantiate(RR) {
-         return eR.b.Instantiate(RR)
+     }
+     Ir.InfixToPostfixCacheLimitSize = 5e4, Ir.InfixToPostfixCacheCleanupSize = 25e3, Ir._InfixToPostfixCache = new Map, Ir._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+     }, Ir._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
+     class fr extends Ir {
+       constructor(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         super(), this.define = rr, this.not = Sr
```

#### 23. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L175-L176` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L393-L395) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L175-L176)

```diff
-       static SetImmediate(RR) {
-         rR.e.SetImmediate(RR)
+       isTrue(rr) {
+         let Sr = void 0 !== rr[this.define];
+         return this.not && (Sr = !Sr), Sr
```

#### 24. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L178-L179` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L397-L400) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L178-L179)

```diff
-       static IsExponentOfTwo(RR) {
-         return !0
+     }
+     class Er extends Ir {
+       isTrue(rr) {
+         return this.leftOperand.isTrue(rr) || this.rightOperand.isTrue(rr)
```

#### 25. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L181-L182` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L402-L405) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L181-L182)

```diff
-       static FloatRound(RR) {
-         return Math.fround(RR)
+     }
+     class pr extends Ir {
+       isTrue(rr) {
+         return this.leftOperand.isTrue(rr) && this.rightOperand.isTrue(rr)
```

#### 26. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L184-L186` → after: `L407-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L407-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L407-L439) · [Before (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L184-L186)

```diff
-       static GetFilename(RR) {
-         const JR = RR.lastIndexOf("/");
-         return JR < 0 ? RR : RR.substring(JR + 1)
+     }
+     class xr extends Ir {
+       constructor(rr, Sr, Qr) {
+         super(), this.define = rr, this.operand = Sr, this.testValue = Qr
+       }
+       toString() {
+         return `${this.define} ${this.operand} ${this.testValue}`
+       }
+       isTrue(rr) {
+         let Sr = !1;
+         const Qr = parseInt(void 0 != rr[this.define] ? rr[this.define] : this.define),
+           Zr = parseInt(void 0 != rr[this.testValue] ? rr[this.testValue] : this.testValue);
+         if (isNaN(Qr) || isNaN(Zr)) return !1;
+         switch (this.operand) {
+           case ">":
+             Sr = Qr > Zr;
+ ... (17 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L188-L191` → after: `L441-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L441-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L441-L485) · [Before (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L188-L191)

```diff
-       static GetFolderPath(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const GR = RR.lastIndexOf("/");
-         return GR < 0 ? JR ? RR : "" : RR.substring(0, GR + 1)
+     }
+     var mr = Qr(41769),
+       Nr = Qr(41764);
+     const Ur = /defined\s*?\((.+?)\)/g,
+       tr = /defined\s*?\[(.+?)\]/g,
+       hr = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       zr = /__decl__/,
+       Yr = /light\{X\}.(\w*)/g,
+       nr = /\{X\}/g,
+       er = [],
+       Kr = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function yr(rr) {
+       rr.processor && rr.processor.initializeShaders && rr.processor.initializeShaders(rr.processingContext)
+     }
+ 
+ ... (29 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L193-L194` → after: `L487-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L487-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L487-L537) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L193-L194)

```diff
-       static ToDegrees(RR) {
-         return 180 * RR / Math.PI
+     }
+ 
+     function vr(rr) {
+       const Sr = /defined\((.+)\)/.exec(rr);
+       if (Sr && Sr.length) return new fr(Sr[1].trim(), "!" === rr[0]);
+       const Qr = ["==", "!=", ">=", "<=", "<", ">"];
+       let Zr = "",
+         Wr = 0;
+       for (Zr of Qr)
+         if (Wr = rr.indexOf(Zr), Wr > -1) break;
+       if (-1 === Wr) return new fr(rr);
+       const ar = rr.substring(0, Wr).trim(),
+         jr = rr.substring(Wr + Zr.length).trim();
+       return new xr(ar, Zr, jr)
+     }
+ 
+ ... (35 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L196-L197` → after: `L539-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L539-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L539-L582) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L196-L197)

```diff
-       static ToRadians(RR) {
-         return RR * Math.PI / 180
+     }
+ 
+     function lr(rr, Sr, Qr) {
+       for (; rr.canRead;) {
+         rr.lineIndex++;
+         const Wr = rr.currentLine;
+         if (Wr.indexOf("#") >= 0) {
+           const Zr = Kr.exec(Wr);
+           if (Zr && Zr.length) {
+             switch (Zr[0]) {
+               case "#ifdef": {
+                 const Zr = new ar;
+                 Sr.children.push(Zr);
+                 const jr = Or(Wr, 6);
+                 Zr.children.push(jr), Lr(rr, Zr, jr, Qr);
+                 break
+ ... (28 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L199-L203` → after: `L584-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L584-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L584-L598) · [Before (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L199-L203)

```diff
-       static SmoothAngleChange(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
-         const yR = this.ToRadians(RR),
-           tR = this.ToRadians(JR);
-         return this.ToDegrees(Math.atan2((1 - GR) * Math.sin(tR) + GR * Math.sin(yR), (1 - GR) * Math.cos(tR) + GR * Math.cos(yR)))
+       return !1
+     }
+ 
+     function Xr(rr, Sr, Qr, ar) {
+       const jr = new Zr,
+         Ir = new Wr;
+       return Ir.lineIndex = -1, Ir.lines = rr.split("\n"), lr(Ir, jr, ar), jr.process(Sr, Qr, ar)
+     }
+ 
+     function Pr(rr, Sr) {
+       const Qr = rr.defines,
+         Zr = {};
+       for (const Wr of Qr) {
+         const rr = Wr.replace("#define", "").replace(";", "").trim().split(" ");
+         Zr[rr[0]] = rr.length > 1 ? rr[1] : ""
```

#### 31. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L205-L206` → after: `L600-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L600-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L600-L643) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L205-L206)

```diff
-       static MakeArray(RR, JR) {
-         return !0 === JR || void 0 !== RR && null != RR ? Array.isArray(RR) ? RR : [RR] : null
+       return 0 === rr.processor?.shaderLanguage && (Zr.GL_ES = "true"), Zr.__VERSION__ = rr.version, Zr[rr.platformName] = "true", (0, Nr.i)(Zr, Sr?.isNDCHalfZRange, Sr?.JZr, Sr?.useExactSrgbConversions), Zr
+     }
+ 
+     function Hr(rr, Sr, Qr) {
+       let Zr;
+       for (er.length = 0; null !== (Zr = hr.exec(rr));) er.push(Zr);
+       let Wr = [rr],
+         ar = !1;
+       for (const Ir of er) {
+         let rr = Ir[1];
+         if (-1 !== rr.indexOf("__decl__") && (rr = rr.replace(zr, ""), Sr.supportsUniformBuffers && (rr = rr.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), rr += "Declaration"), !Sr.includesShadersStore[rr]) {
+           const Zr = Sr.shadersRepository + "ShadersInclude/" + rr + ".fx";
+           return void qr.loadFile(Zr, (Zr => {
+             Sr.includesShadersStore[rr] = Zr, Hr(Wr.join(""), Sr, Qr)
+           }))
+         } {
+ ... (28 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L208-L209` → after: `L645-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L645-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L645-L651) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L208-L209)

```diff
-       static GetPointerPrefix(RR) {
-         return (0, uR.m)() && !window.PointerEvent ? "mouse" : "pointer"
+       er.length = 0;
+       const jr = Wr.join("");
+       ar ? Hr(jr.toString(), Sr, Qr) : Qr(jr)
+     }
+     const qr = {
+       loadFile: (rr, Sr, Qr, Zr, Wr, ar) => {
+         throw (0, mr.l)("FileTools")
```

#### 33. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L211-L212` → after: `L653-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L653-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L653-L680) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L211-L212)

```diff
-       static SetCorsBehavior(RR, JR) {
-         (0, wR.A)(RR, JR)
+     }
+   },
+   41764: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Wr,
+       f: () => ar,
+       i: () => Ir,
+       k: () => jr,
+       m: () => fr
+     });
+     var Zr = Qr(41769);
+     const Wr = {};
+ 
+     function ar(rr, Sr) {
+       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Sr ? Sr + "\n" : "") + rr
+     }
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L214-L215` → after: `L682-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L682-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L682-L724) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L214-L215)

```diff
-       static SetReferrerPolicyBehavior(RR, JR) {
-         JR.referrerPolicy = RR
+     }
+ 
+     function fr(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         Zr = arguments.length > 3 ? arguments[3] : void 0;
+       switch (rr) {
+         case 3: {
+           const rr = new Int8Array(Sr);
+           return Zr && rr.set(new Int8Array(Zr)), rr
+         }
+         case 0: {
+           const rr = new Uint8Array(Sr);
+           return Zr && rr.set(new Uint8Array(Zr)), rr
+         }
+         case 4: {
+           const rr = "number" !== typeof Sr ? new Int16Array(Sr) : new Int16Array(Qr ? Sr / 2 : Sr);
+ ... (27 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L217-L218` → after: `L726-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L726-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L726-L773) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L217-L218)

```diff
-       static get PreprocessUrl() {
-         return wR.e.PreprocessUrl
+       const Wr = new Uint8Array(Sr);
+       return Zr && Wr.set(new Uint8Array(Zr)), Wr
+     }
+   },
+   41769: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Er,
+       g: () => pr,
+       h: () => fr,
+       l: () => Wr
+     });
+     const Zr = {};
+ 
+     function Wr(rr) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Zr[rr]) return Zr[rr] = !0, `${rr} needs to be imported before as it contains a side-effect required by your code.`
+     }
+ ... (32 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L220-L221` → after: `L775-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L775-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L775-L822) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L220-L221)

```diff
-       static set PreprocessUrl(RR) {
-         wR.e.PreprocessUrl = RR
+     }
+   },
+   41749: (rr, Sr, Qr) => {
+     function Zr() {
+       return "undefined" !== typeof window
+     }
+ 
+     function Wr() {
+       return "undefined" !== typeof navigator
+     }
+ 
+     function ar() {
+       return "undefined" !== typeof document
+     }
+ 
+     function jr(rr) {
+ ... (32 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L223-L224` → after: `L824-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L824-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L824-L855) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L223-L224)

```diff
-       static LoadImage(RR, JR, GR, yR, tR, uR) {
-         return (0, wR.q)(RR, JR, GR, yR, tR, uR)
+     }
+   },
+   41898: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Pr,
+       e: () => nr,
+       g: () => Or,
+       j: () => lr,
+       n: () => Tr,
+       q: () => yr,
+       t: () => Br,
+       x: () => Cr,
+       A: () => vr,
+       E: () => er
+     });
+     var Zr = Qr(41906),
+ ... (16 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L226-L227` → after: `L857-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L857-L860) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L226-L227)

```diff
-       static LoadFile(RR, JR, GR, yR, tR, uR) {
-         return (0, wR.m)(RR, JR, GR, yR, tR, uR)
+     }
+     class zr extends Ir.i {
+       constructor(rr, Sr) {
+         super(rr, Ir.e.RequestFileError), this.request = Sr, this.name = "RequestFileError", Ir.d._setPrototypeOf(this, zr.prototype)
```

#### 39. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L229-L237` → after: `L862-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L862-L865) · [Before (L229-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L229-L237)

```diff
-       static async LoadFileAsync(RR) {
-         let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         return await new Promise(((GR, yR) => {
-           (0, wR.m)(RR, (RR => {
-             GR(RR)
-           }), void 0, void 0, JR, ((RR, JR) => {
-             yR(JR)
-           }))
-         }))
+     }
+     class Yr extends Ir.i {
+       constructor(rr, Sr) {
+         super(rr, Ir.e.ReadFileError), this.file = Sr, this.name = "ReadFileError", Ir.d._setPrototypeOf(this, Yr.prototype)
```

#### 40. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L239-L243` → after: `L867-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L867-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L867-L914) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L239-L243)

```diff
-       static GetAssetUrl(RR) {
-         if (!RR) return "";
-         if (yR.AssetBaseUrl && RR.startsWith(yR._DefaultAssetsUrl)) {
-           const JR = yR.AssetBaseUrl.endsWith("/") ? yR.AssetBaseUrl.slice(0, -1) : yR.AssetBaseUrl;
-           return RR.replace(yR._DefaultAssetsUrl, JR)
+     }
+     const nr = {
+         DefaultRetryStrategy: class {
+           static ExponentialBackoff() {
+             let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
+               Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
+             return (Qr, Zr, Wr) => 0 !== Zr.status || Wr >= rr || -1 !== Qr.indexOf("file:") ? -1 : Math.pow(2, Wr) * Sr
+           }
+         }.ExponentialBackoff(),
+         BaseUrl: "",
+         CorsBehavior: "anonymous",
+         PreprocessUrl: rr => rr,
+         ScriptBaseUrl: "",
+         ScriptPreprocessUrl: rr => rr,
+         CleanUrl: rr => rr = rr.replace(/#/gm, "%23")
+       },
+ ... (32 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L245-L269` → after: `L916-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L916-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L916-L928) · [Before (L245-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L245-L269)

```diff
-         return RR
-       }
-       static GetBabylonScriptURL(RR, JR) {
-         if (!RR) return "";
-         if (RR.startsWith(yR._DefaultCdnUrl))
-           if (yR.ScriptBaseUrl) {
-             const JR = yR.ScriptBaseUrl.endsWith("/") ? yR.ScriptBaseUrl.slice(0, -1) : yR.ScriptBaseUrl;
-             RR = RR.replace(yR._DefaultCdnUrl, JR)
-           } else if (yR._CdnVersion) {
-           const JR = `${yR._DefaultCdnUrl}/v${yR._CdnVersion}`;
-           RR.startsWith(JR) || (RR = RR.replace(yR._DefaultCdnUrl, JR))
-         }
-         return RR = yR.ScriptPreprocessUrl(RR), JR && !yR.IsAbsoluteUrl(RR) && (RR = yR.GetAbsoluteUrl(RR)), RR
-       }
-       static LoadBabylonScript(RR, JR, GR, tR) {
-         RR = yR.GetBabylonScriptURL(RR), yR.LoadScript(RR, JR, GR)
- ... (9 more removed lines; see GitHub link above)
+         let mr = !1;
+         if (rr instanceof ArrayBuffer || ArrayBuffer.isView(rr))
+           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
+             let Sr;
+             Sr = rr instanceof ArrayBuffer ? rr : (0, Ur.h)(rr), ar = URL.createObjectURL(new Blob([Sr], {
+               type: Ir
+             })), mr = !0
+           } else ar = `data:${Ir};base64,` + (0, fr.d)(rr);
+         else rr instanceof Blob ? (ar = URL.createObjectURL(rr), mr = !0) : (ar = nr.CleanUrl(rr), ar = nr.PreprocessUrl(ar));
+         const Nr = Sr => {
+           if (Qr) {
+             const Zr = ar || rr.toString();
+             Qr(`Error while trying to load image: ${0===Zr.indexOf("http")||Zr.length<=128?Zr:Zr.slice(0,128)+"..."}`, Sr)
```

#### 42. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L271-L278` → after: `L930-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L930-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L930-L941) · [Before (L271-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L271-L278)

```diff
-           yR.LoadFile(RR, (RR => {
-             try {
-               Function(RR).apply(null), JR && JR()
-             } catch (yR) {
-               GR && GR("LoadScript Error", yR)
-             }
-           }), void 0, void 0, !1, ((RR, JR) => {
-             GR && GR("LoadScript Error", JR)
+         };
+         if (xr?._features.forceBitmapOverHTMLImageElement) return Tr(ar, (Zr => {
+           xr.createImageBitmap(new Blob([Zr], {
+             type: Ir
+           }), {
+             premultiplyAlpha: "none",
+             colorSpaceConversion: "none",
+             ...pr
+           }).then((rr => {
+             Sr(rr), mr && URL.revokeObjectURL(ar)
+           })).catch((Sr => {
+             Qr && Qr("Error while trying to load image: " + rr, Sr)
```

#### 43. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L281-L288` → after: `L951-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L951-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L951-L961) · [Before (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L281-L288)

```diff
-       }
-       static _LoadScriptWeb(RR, JR, GR, yR) {
-         let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if ("function" === typeof importScripts) {
-           try {
-             importScripts(RR), JR && JR()
-           } catch (iR) {
-             GR?.(`Unable to load script '${RR}' in worker`, iR)
+         er(ar, tr);
+         const hr = [],
+           zr = () => {
+             for (const rr of hr) rr.target.removeEventListener(rr.name, rr.handler);
+             hr.length = 0
+           };
+         hr.push({
+           target: tr,
+           name: "load",
+           handler: () => {
+             zr(), Sr(tr), mr && tr.src && URL.revokeObjectURL(tr.src)
```

#### 44. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L290-L310` → after: `L963-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L963-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L963-L1020) · [Before (L290-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L290-L310)

```diff
-           return
-         }
-         if (!(0, uR.m)()) return void GR?.(`Cannot load script '${RR}' outside of a window or a worker`);
-         const ZR = document.getElementsByTagName("head")[0],
-           qR = document.createElement("script");
-         tR ? (qR.setAttribute("type", "module"), qR.innerText = RR) : (qR.setAttribute("type", "text/javascript"), qR.setAttribute("src", RR)), yR && (qR.id = yR), qR.onload = () => {
-           JR && JR()
-         }, qR.onerror = JR => {
-           GR && GR(`Unable to load script '${RR}'`, JR)
-         }, ZR.appendChild(qR)
-       }
-       static async LoadScriptAsync(RR, JR) {
-         return await new Promise(((GR, yR) => {
-           this.LoadScript(RR, (() => {
-             GR()
-           }), ((RR, JR) => {
- ... (5 more removed lines; see GitHub link above)
+         }), hr.push({
+           target: tr,
+           name: "error",
+           handler: rr => {
+             zr(), Nr(rr), mr && tr.src && URL.revokeObjectURL(tr.src)
+           }
+         }), hr.push({
+           target: document,
+           name: "securitypolicyviolation",
+           handler: rr => {
+             if (rr.blockedURI !== tr.src || "jx" === rr.disposition) return;
+             zr();
+             const Sr = new Error(`CSP violation of policy ${rr.effectiveDirective} ${rr.blockedURI}. Current policy is ${rr.originalPolicy}`);
+             Er.b.UseFallbackTexture = !1, Nr(Sr), mr && tr.src && URL.revokeObjectURL(tr.src), tr.src = ""
+           }
+         }), (() => {
+ ... (42 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L313` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1023) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L313)

```diff
-             onCompleteObservable: new tR.b,
+             onCompleteObservable: new ar.d,
```

#### 46. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L316-L318` → after: `L1026-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1026-L1028) · [Before (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L316-L318)

```diff
-         return yR.onloadend = () => {
-           uR.onCompleteObservable.notifyObservers(uR)
-         }, yR.onload = RR => {
+         return jr.onloadend = () => Ir.onCompleteObservable.notifyObservers(Ir), Wr && (jr.onerror = () => {
+           Wr(new Yr(`Unable to read ${rr.name}`, rr))
+         }), jr.onload = rr => {
```

#### 47. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L320-L347` → after: `L1030-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1030-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1030-L1041) · [Before (L320-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L320-L347)

```diff
-         }, yR.onprogress = GR, yR.readAsDataURL(RR), uR
-       }
-       static ReadFile(RR, JR, GR, yR, tR) {
-         return (0, wR.t)(RR, JR, GR, yR, tR)
-       }
-       static FileAsURL(RR) {
-         const JR = new Blob([RR]);
-         return window.URL.createObjectURL(JR)
-       }
-       static Format(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-         return RR.toFixed(JR)
-       }
-       static DeepCopy(RR, JR, GR, yR) {
-         qR.b.DeepCopy(RR, JR, GR, yR)
-       }
- ... (12 more removed lines; see GitHub link above)
+         }, Qr && (jr.onprogress = Qr), Zr ? jr.readAsArrayBuffer(rr) : jr.readAsText(rr), Ir
+       },
+       Tr = (rr, Sr, Qr, Zr, Wr, fr, Er) => {
+         if (rr.name) return Br(rr, Sr, Qr, Wr, fr ? rr => {
+           fr(void 0, rr)
+         } : void 0);
+         const pr = rr;
+         if (-1 !== pr.indexOf("file:")) {
+           let rr = decodeURIComponent(pr.substring(5).toLowerCase());
+           0 === rr.indexOf("./") && (rr = rr.substring(2));
+           const Zr = jr.FilesToLoad[rr];
+           if (Zr) return Br(Zr, Sr, Qr, Wr, fr ? rr => fr(void 0, new hr(rr.message, rr.file)) : void 0)
```

#### 48. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L349-L353` → after: `L1043-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1043-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1043-L1051) · [Before (L349-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L349-L353)

```diff
-       }
-       static UnregisterTopRootEvents(RR, JR) {
-         for (let yR = 0; yR < JR.length; yR++) {
-           const tR = JR[yR];
-           RR.removeEventListener(tR.name, tR.handler);
+         const {
+           match: xr,
+           type: Ur
+         } = Xr(pr);
+         if (xr) {
+           const rr = {
+             onCompleteObservable: new ar.d,
+             abort: () => () => {}
+           };
```

#### 49. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L355-L356` → after: `L1053-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1053-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1053-L1060) · [Before (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L355-L356)

```diff
-             RR.parent && RR.parent.removeEventListener(tR.name, tR.handler)
-           } catch (GR) {}
+             const rr = Wr ? Pr(pr) : Hr(pr);
+             Sr(rr, void 0, Ur)
+           } catch (Ir) {
+             fr ? fr(void 0, Ir) : mr.c.Error(Ir.message || "Failed to parse the Data URL")
+           }
+           return Nr.d.SetImmediate((() => {
+             rr.onCompleteObservable.notifyObservers(rr)
+           })), rr
```

#### 50. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L359-L387` → after: `L1339-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1339-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1339-L1345) · [Before (L359-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L359-L387)

```diff
-       static async DumpFramebuffer(RR, JR, GR, yR) {
-         throw (0, fR.j)("DumpTools")
-       }
-       static DumpData(RR, JR, GR, yR) {
-         throw (0, fR.j)("DumpTools")
-       }
-       static async DumpDataAsync(RR, JR, GR) {
-         throw (0, fR.j)("DumpTools")
-       }
-       static _IsOffScreenCanvas(RR) {
-         return void 0 !== RR.convertToBlob
-       }
-       static ToBlob(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           tR = arguments.length > 3 ? arguments[3] : void 0;
-         yR._IsOffScreenCanvas(RR) || RR.toBlob || (RR.toBlob = function(RR, JR, GR) {
- ... (13 more removed lines; see GitHub link above)
+     }
+ 
+     function ar(rr, Sr, Qr) {
+       try {
+         if (rr()) return Sr(), !0
+       } catch (Zr) {
+         return Qr?.(Zr), !0
```

#### 51. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L389-L423` → after: `L1347-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1347-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1347-L1391) · [Before (L389-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L389-L423)

```diff
-       static DownloadBlob(RR, JR) {
-         if ("download" in document.createElement("a")) {
-           if (!JR) {
-             const RR = new Date;
-             JR = "screenshot_" + ((RR.getFullYear() + "-" + (RR.getMonth() + 1)).slice(2) + "-" + RR.getDate() + "_" + RR.getHours() + "-" + ("0" + RR.getMinutes()).slice(-2)) + ".png"
-           }
-           yR.Download(RR, JR)
-         } else if (RR && "undefined" !== typeof URL) {
-           const JR = URL.createObjectURL(RR),
-             GR = window.open("");
-           if (!GR) return;
-           const yR = GR.document.createElement("img");
-           yR.onload = function() {
-             URL.revokeObjectURL(JR)
-           }, yR.src = JR, GR.document.body.appendChild(yR)
-         }
- ... (19 more removed lines; see GitHub link above)
+       return !1
+     }
+     const jr = function(rr, Sr, Qr) {
+       let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+         jr = arguments.length > 6 ? arguments[6] : void 0;
+       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && ar(rr, Sr, Qr)) return null;
+       const Ir = setInterval((() => {
+         ar(rr, Sr, Qr) ? clearInterval(Ir) : (Wr -= Zr, Wr < 0 && (clearInterval(Ir), Qr?.(new Error("Operation timed out after maximum retries. " + (jr || "")), !0)))
+       }), Zr);
+       return () => clearInterval(Ir)
+     }
+   },
+   41906: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Zr
+ ... (29 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L425-L444` → after: `L1393-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1393-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1393-L1402) · [Before (L425-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L425-L444)

```diff
-         } else this.ToBlob(RR, (function(RR) {
-           RR && yR.DownloadBlob(RR, tR), JR && JR("")
-         }), GR, uR)
-       }
-       static Download(RR, JR) {
-         if ("undefined" === typeof URL) return;
-         const GR = window.URL.createObjectURL(RR),
-           yR = document.createElement("a");
-         document.body.appendChild(yR), yR.style.display = "none", yR.href = GR, yR.download = JR, yR.addEventListener("click", (() => {
-           yR.parentElement && yR.parentElement.removeChild(yR)
-         })), yR.click(), window.URL.revokeObjectURL(GR)
-       }
-       static BackCompatCameraNoPreventDefault(RR) {
-         return "boolean" === typeof RR[0] ? RR[0] : "boolean" === typeof RR[1] && RR[1]
-       }
-       static CreateScreenshot(RR, JR, GR, yR) {
- ... (4 more removed lines; see GitHub link above)
+         };
+         for (const Wr of Zr.CustomRequestModifiers) {
+           if (Zr._ShouldSkipRequestModifications(rr)) break;
+           const Sr = Wr(Qr, rr);
+           "string" === typeof Sr && (rr = Sr)
+         }
+         return {
+           url: rr,
+           headers: Sr
+         }
```

#### 53. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L446-L447` → after: `L1404-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1404-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1404-L1440) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L446-L447)

```diff
-       static CreateScreenshotUsingRenderTarget(RR, JR, GR, yR) {
-         throw (0, fR.j)("ScreenshotTools")
+       static async FetchAsync(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const Qr = Sr.method ?? "GET";
+         if ("undefined" !== typeof fetch) {
+           const {
+             url: Wr,
+             headers: ar
+           } = Zr._CollectCustomizations(Zr._CleanUrl(rr), Sr.headers ?? {});
+           return await fetch(Wr, {
+             method: Qr,
+             headers: ar,
+             body: Sr.body ?? void 0
+           })
+         }
+         return await new Promise(((Wr, ar) => {
+           const jr = new Zr;
+ ... (21 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L449-L450` → after: `L1442-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1442-L1443) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L449-L450)

```diff
-       static async CreateScreenshotUsingRenderTargetAsync(RR, JR, GR) {
-         throw (0, fR.j)("ScreenshotTools")
+       get requestURL() {
+         return this._requestURL
```

#### 55. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L452-L453` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1445-L1446) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L452-L453)

```diff
-       static RandomId() {
-         return (0, aR.c)()
+       get onprogress() {
+         return this._xhr.onprogress
```

#### 56. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L455-L456` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1448-L1449) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L455-L456)

```diff
-       static IsBase64(RR) {
-         return (0, wR.l)(RR)
+       set onprogress(rr) {
+         this._xhr.onprogress = rr
```

#### 57. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L458-L459` → after: `L1451-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1451-L1452) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L458-L459)

```diff
-       static DecodeBase64(RR) {
-         return (0, wR.d)(RR)
+       get readyState() {
+         return this._xhr.readyState
```

#### 58. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L461-L462` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1454-L1455) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L461-L462)

```diff
-       static get errorsCount() {
-         return ZR.c.errorsCount
+       get status() {
+         return this._xhr.status
```

#### 59. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L464-L465` → after: `L1457-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1457-L1458) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L464-L465)

```diff
-       static Log(RR) {
-         ZR.c.Log(RR)
+       get statusText() {
+         return this._xhr.statusText
```

#### 60. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L467-L468` → after: `L1460-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1460-L1461) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L467-L468)

```diff
-       static Warn(RR) {
-         ZR.c.Warn(RR)
+       get response() {
+         return this._xhr.response
```

#### 61. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L470-L471` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1463-L1464) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L470-L471)

```diff
-       static Error(RR) {
-         ZR.c.Error(RR)
+       get responseURL() {
+         return this._xhr.responseURL
```

#### 62. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L473-L474` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1466-L1467) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L473-L474)

```diff
-       static get LogCache() {
-         return ZR.c.LogCache
+       get responseText() {
+         return this._xhr.responseText
```

#### 63. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L476-L477` → after: `L1469-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1469-L1470) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L476-L477)

```diff
-       static ClearLogCache() {
-         ZR.c.ClearLogCache()
+       get responseType() {
+         return this._xhr.responseType
```

#### 64. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L479-L480` → after: `L1472-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1472-L1473) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L479-L480)

```diff
-       static set LogLevels(RR) {
-         ZR.c.LogLevels = RR
+       set responseType(rr) {
+         this._xhr.responseType = rr
```

#### 65. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L482-L483` → after: `L1475-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1475-L1476) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L482-L483)

```diff
-       static set PerformanceLogLevel(RR) {
-         (RR & yR.PerformanceUserMarkLogLevel) !== yR.PerformanceUserMarkLogLevel ? (RR & yR.PerformanceConsoleLogLevel) !== yR.PerformanceConsoleLogLevel ? (yR.StartPerformanceCounter = yR._StartPerformanceCounterDisabled, yR.EndPerformanceCounter = yR._EndPerformanceCounterDisab … [truncated]
+       get timeout() {
+         return this._xhr.timeout
```

#### 66. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L485-L493` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1478-L1479) · [Before (L485-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L485-L493)

```diff
-       static _StartPerformanceCounterDisabled(RR, JR) {}
-       static _EndPerformanceCounterDisabled(RR, JR) {}
-       static _StartUserMark(RR) {
-         let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!yR._Performance) {
-           if (!(0, uR.m)()) return;
-           yR._Performance = window.performance
-         }
-         JR && yR._Performance.mark && yR._Performance.mark(RR + "-Begin")
+       set timeout(rr) {
+         this._xhr.timeout = rr
```

#### 67. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L495-L496` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1481-L1482) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L495-L496)

```diff
-       static _EndUserMark(RR) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && yR._Performance.mark && (yR._Performance.mark(RR + "-End"), yR._Performance.measure(RR, RR + "-Begin", RR + "-End"))
+       addEventListener(rr, Sr, Qr) {
+         this._xhr.addEventListener(rr, Sr, Qr)
```

#### 68. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L498-L500` → after: `L1484-L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1484-L1485) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L498-L500)

```diff
-       static _StartPerformanceConsole(RR) {
-         let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         JR && (yR._StartUserMark(RR, JR), console.time && console.time(RR))
+       removeEventListener(rr, Sr, Qr) {
+         this._xhr.removeEventListener(rr, Sr, Qr)
```

#### 69. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L502-L504` → after: `L1487-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1487-L1488) · [Before (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L502-L504)

```diff
-       static _EndPerformanceConsole(RR) {
-         let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         JR && (yR._EndUserMark(RR, JR), console.timeEnd(RR))
+       abort() {
+         this._xhr.abort()
```

#### 70. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L506-L512` → after: `L1490-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1490-L1491) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L506-L512)

```diff
-       static _StartMarkNative(RR) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
-           if (yR._NativePerformanceCounterHandles.has(RR)) yR.Warn(`Performance counter with name ${RR} is already started.`);
-           else {
-             const JR = _native.startPerformanceCounter(RR);
-             yR._NativePerformanceCounterHandles.set(RR, JR)
-           }
+       send(rr) {
+         this._xhr.send(rr)
```

#### 71. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L514-L518` → after: `L1493-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1493-L1499) · [Before (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L514-L518)

```diff
-       static _EndMarkNative(RR) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
-           const JR = yR._NativePerformanceCounterHandles.get(RR);
-           JR ? (_native.endPerformanceCounter(JR), yR._NativePerformanceCounterHandles.delete(RR)) : yR.Warn(`Performance counter with name ${RR} was not started.`)
-         }
+       open(rr, Sr, Qr) {
+         const {
+           url: Wr,
+           headers: ar
+         } = Zr._CollectCustomizations(Sr, Qr);
+         this._requestURL = Zr._CleanUrl(Wr), this._xhr.open(rr, this._requestURL, !0);
+         for (const Zr in ar) this._xhr.setRequestHeader(Zr, ar[Zr])
```

#### 72. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L520-L521` → after: `L1501-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1501-L1502) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L520-L521)

```diff
-       static get Now() {
-         return iR.b.Now
+       setRequestHeader(rr, Sr) {
+         this._xhr.setRequestHeader(rr, Sr)
```

#### 73. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L523-L533` → after: `L1504-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L1504-L1505) · [Before (L523-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L523-L533)

```diff
-       static GetClassName(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GR = null;
-         if (!JR && RR.getClassName) GR = RR.getClassName();
-         else {
-           if (RR instanceof Object) {
-             GR = (JR ? RR : Object.getPrototypeOf(RR)).constructor.__bjsclassName__
-           }
-           GR || (GR = typeof RR)
-         }
-         return GR
+       getResponseHeader(rr) {
+         return this._xhr.getResponseHeader(rr)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/291.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/291.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4)

#### 1. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L4)

```diff
-   41972: (RR, JR, GR) => {
+   41955: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L8` → after: `L8-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L8-L22) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L8)

```diff
-     let yR = !1
+     var Zr = Qr(40246),
+       Wr = Qr(38609);
+     class ar {
+       static Instantiate(rr) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[rr]) return this.RegisteredExternalClasses[rr];
+         const Sr = (0, Wr.d)(rr);
+         if (Sr) return Sr;
+         Zr.c.Warn(rr + " not found, you may have missed an import.");
+         const Qr = rr.split(".");
+         let ar = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let Zr = 0, Wr = Qr.length; Zr < Wr; Zr++) ar = ar[Qr[Zr]];
+         return "function" !== typeof ar ? null : ar
+       }
+     }
+     ar.RegisteredExternalClasses = {}
```

#### 3. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L10` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L24) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L10)

```diff
-   41514: (RR, JR, GR) => {
+   41787: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L14-L20` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L28) · [Before (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L14-L20)

```diff
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(38233),
-       ZR = GR(38204),
-       qR = GR(38224),
-       iR = GR(39062),
-       fR = GR(41534);
+     var Zr = Qr(41749);
```

#### 5. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L22-L23` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L30-L31) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L22-L23)

```diff
-       get wrapU() {
-         return this._wrapU
+       static get Now() {
+         return (0, Zr.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
```

#### 6. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L25-L26` → after: `L33-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L33-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L33-L106) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L25-L26)

```diff
-       set wrapU(RR) {
-         this._wrapU = RR
+     }
+   },
+   41818: (rr, Sr, Qr) => {
+     function Zr(rr) {
+       let Sr = 1;
+       do {
+         Sr *= 2
+       } while (Sr < rr);
+       return Sr === rr
+     }
+ 
+     function Wr(rr, Sr, Qr) {
+       return rr * (1 - Qr) + Sr * Qr
+     }
+ 
+     function ar(rr) {
+ ... (58 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L28-L29` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L108-L109) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L28-L29)

```diff
-       get wrapV() {
-         return this._wrapV
+       static set BaseUrl(rr) {
+         mr.e.BaseUrl = rr
```

#### 8. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L31-L32` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L111-L112) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L31-L32)

```diff
-       set wrapV(RR) {
-         this._wrapV = RR
+       static get CleanUrl() {
+         return mr.e.CleanUrl
```

#### 9. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L34-L35` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L114-L115) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L34-L35)

```diff
-       get coordinatesMode() {
-         return 0
+       static set CleanUrl(rr) {
+         mr.e.CleanUrl = rr
```

#### 10. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L37-L38` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L117-L118) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L37-L38)

```diff
-       get isCube() {
-         return !!this._texture && this._texture.isCube
+       static IsAbsoluteUrl(rr) {
+         return 0 === rr.indexOf("//") || -1 !== rr.indexOf("://") && (-1 !== rr.indexOf(".") && (-1 !== rr.indexOf("/") && (!(rr.indexOf(":") > rr.indexOf("/")) && (rr.indexOf("://") < rr.indexOf(".") || (0 === rr.indexOf("data:") || 0 === rr.indexOf("blob:"))))))
```

#### 11. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L40-L41` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L120-L121) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L40-L41)

```diff
-       set isCube(RR) {
-         this._texture && (this._texture.isCube = RR)
+       static set ScriptBaseUrl(rr) {
+         mr.e.ScriptBaseUrl = rr
```

#### 12. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L43-L44` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L123-L124) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L43-L44)

```diff
-       get is3D() {
-         return !!this._texture && this._texture.is3D
+       static get ScriptBaseUrl() {
+         return mr.e.ScriptBaseUrl
```

#### 13. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L46-L47` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L126-L127) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L46-L47)

```diff
-       set is3D(RR) {
-         this._texture && (this._texture.is3D = RR)
+       static set CDNBaseUrl(rr) {
+         Zr.ScriptBaseUrl = rr, Zr.AssetBaseUrl = rr
```

#### 14. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L49-L50` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L129-L130) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L49-L50)

```diff
-       get is2DArray() {
-         return !!this._texture && this._texture.is2DArray
+       static set ScriptPreprocessUrl(rr) {
+         mr.e.ScriptPreprocessUrl = rr
```

#### 15. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L52-L53` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L132-L133) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L52-L53)

```diff
-       set is2DArray(RR) {
-         this._texture && (this._texture.is2DArray = RR)
+       static get ScriptPreprocessUrl() {
+         return mr.e.ScriptPreprocessUrl
```

#### 16. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L55-L56` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L135-L136) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L55-L56)

```diff
-       getClassName() {
-         return "ThinTexture"
+       static get DefaultRetryStrategy() {
+         return mr.e.DefaultRetryStrategy
```

#### 17. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L58-L59` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L138-L139) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L58-L59)

```diff
-       static _IsRenderTargetWrapper(RR) {
-         return void 0 !== RR?.shareDepth
+       static set DefaultRetryStrategy(rr) {
+         mr.e.DefaultRetryStrategy = rr
```

#### 18. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L61-L62` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L141-L142) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L61-L62)

```diff
-       constructor(RR) {
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = fR.b.Zero(), this._cachedBaseSize = fR.b.Zero(), this._initialSamplingMode = 2, this._texture = VR. … [truncated]
+       static get CorsBehavior() {
+         return mr.e.CorsBehavior
```

#### 19. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L64-L65` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L144-L145) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L64-L65)

```diff
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+       static set CorsBehavior(rr) {
+         mr.e.CorsBehavior = rr
```

#### 20. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L67-L69` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L147-L148) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+       static get UseFallbackTexture() {
+         return xr.b.UseFallbackTexture
```

#### 21. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L71-L76` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L150-L151) · [Before (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L71-L76)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
-         }
-         return this._cachedSize
+       static set UseFallbackTexture(rr) {
+         xr.b.UseFallbackTexture = rr
```

#### 22. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L78-L79` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L153-L154) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L78-L79)

```diff
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+       static get RegisteredExternalClasses() {
+         return Ur.d.RegisteredExternalClasses
```

#### 23. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L81-L82` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L156-L157) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+       static set RegisteredExternalClasses(rr) {
+         Ur.d.RegisteredExternalClasses = rr
```

#### 24. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L84-L86` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L159-L160) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L84-L86)

```diff
-       updateSamplingMode(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(RR, this._texture, this._texture.generateMipMaps && JR)
+       static get fallbackTexture() {
+         return xr.b.FallbackTexture
```

#### 25. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L88-L89` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L162-L163) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       static set fallbackTexture(rr) {
+         xr.b.FallbackTexture = rr
```

#### 26. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L91-L92` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L165-L167) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L91-L92)

```diff
-       dispose() {
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+       static FetchToRef(rr, Sr, Qr, Zr, Wr, ar) {
+         const jr = 4 * ((Math.abs(rr) * Qr % Qr | 0) + (Math.abs(Sr) * Zr % Zr | 0) * Qr);
+         ar.r = Wr[jr] / 255, ar.g = Wr[jr + 1] / 255, ar.b = Wr[jr + 2] / 255, ar.a = Wr[jr + 3] / 255
```

#### 27. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L94-L286` → after: `L169-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L169-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L169-L269) · [Before (L94-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L94-L286)

```diff
-     }
-     var KR, wR = GR(41542),
-       rR = GR(41407);
-     let eR = (() => {
-       var RR;
-       let JR, GR, fR, KR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR, NR, DR, HR = VR,
-         oR = [],
-         cR = [],
-         PR = [],
-         IR = [],
-         mR = [],
-         zR = [],
-         SR = [],
-         jR = [],
-         dR = [],
-         ER = [],
- ... (177 more removed lines; see GitHub link above)
+       static Mix(rr, Sr, Qr) {
+         return 0
+       }
+       static Instantiate(rr) {
+         return Ur.d.Instantiate(rr)
+       }
+       static SetImmediate(rr) {
+         Nr.d.SetImmediate(rr)
+       }
+       static IsExponentOfTwo(rr) {
+         return !0
+       }
+       static FloatRound(rr) {
+         return Math.fround(rr)
+       }
+       static GetFilename(rr) {
+ ... (85 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L288-L302` → after: `L271-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L271-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L271-L279) · [Before (L288-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L288-L302)

```diff
-           return null
-         }
-         _rebuild() {}
-         clone() {
-           return null
-         }
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
-         }
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           const RR = this.jH();
-           RR && RR.markAllMaterialsAsDirty(1)
+           Zr.LoadFile(rr, (rr => {
+             try {
+               Function(rr).apply(null), Sr && Sr()
+             } catch (Zr) {
+               Qr && Qr("LoadScript Error", Zr)
+             }
+           }), void 0, void 0, !1, ((rr, Sr) => {
+             Qr && Qr("LoadScript Error", Sr)
+           }))
```

#### 29. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L304-L320` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L281-L284) · [Before (L304-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L304-L320)

```diff
-         readPixels() {
-           let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-             uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-             ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
-             qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
-             iR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
-           if (!this._texture) return null;
-           const fR = this._getEngine();
-           if (!fR) return null;
-           const VR = this.getSize();
-           let KR = VR.width,
-             wR = VR.height;
- ... (1 more removed lines; see GitHub link above)
+       }
+       static _LoadScriptWeb(rr, Sr, Qr, Zr) {
+         let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
```

#### 30. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L322` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L286) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L322)

```diff
-             return this._texture.isCube || this._texture.is2DArray ? fR._readTexturePixels(this._texture, qR, iR, RR, JR, GR, yR, tR, uR, ZR) : fR._readTexturePixels(this._texture, qR, iR, -1, JR, GR, yR, tR, uR, ZR)
+             importScripts(rr), Sr && Sr()
```

#### 31. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L324` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L288) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L324)

```diff
-             return null
+             Qr?.(`Unable to load script '${rr}' in worker`, fr)
```

#### 32. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L326-L339` → after: `L290-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L290-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L290-L344) · [Before (L326-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L326-L339)

```diff
-         }
-         _readPixelsSync() {
-           let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-           if (!this._texture) return null;
-           const uR = this.getSize();
-           let ZR = uR.width,
-             qR = uR.height;
-           const iR = this._getEngine();
-           if (!iR) return null;
-           0 != JR && (ZR /= Math.pow(2, JR), qR /= Math.pow(2, JR), ZR = Math.round(ZR), qR = Math.round(qR));
+           return
+         }
+         if (!(0, ar.m)()) return void Qr?.(`Cannot load script '${rr}' outside of a window or a worker`);
+         const jr = document.getElementsByTagName("head")[0],
+           Ir = document.createElement("script");
+         Wr ? (Ir.setAttribute("type", "module"), Ir.innerText = rr) : (Ir.setAttribute("type", "text/javascript"), Ir.setAttribute("src", rr)), Zr && (Ir.id = Zr), Ir.onload = () => {
+           Sr && Sr()
+         }, Ir.onerror = Sr => {
+           Qr && Qr(`Unable to load script '${rr}'`, Sr)
+         }, jr.appendChild(Ir)
+       }
+       static async LoadScriptAsync(rr, Sr) {
+         return await new Promise(((Qr, Zr) => {
+           this.LoadScript(rr, (() => {
+             Qr()
+           }), ((rr, Sr) => {
+ ... (39 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L341-L364` → after: `L346-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L346-L347) · [Before (L341-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L341-L364)

```diff
-             return this._texture.isCube ? iR._readTexturePixelsSync(this._texture, ZR, qR, RR, JR, GR, yR, tR) : iR._readTexturePixelsSync(this._texture, ZR, qR, -1, JR, GR, yR, tR)
-           } catch (fR) {
-             return null
-           }
-         }
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
-         }
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
-         }
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
-         }
-         dispose() {
-           if (this._scene) {
- ... (8 more removed lines; see GitHub link above)
+             window.parent && window.parent.addEventListener(Wr.name, Wr.handler, !1)
+           } catch (Qr) {}
```

#### 34. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L366-L941` → after: `L349-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L349-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L349-L393) · [Before (L366-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L366-L941)

```diff
-         serialize() {
-           let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !RR) return null;
-           const JR = wR.c.Serialize(this);
-           return wR.c.AppendSerializedAnimations(this, JR), JR
-         }
-         static WhenAllReady(RR, JR) {
-           let GR = RR.length;
-           if (0 !== GR)
-             for (let yR = 0; yR < RR.length; yR++) {
-               const tR = RR[yR];
-               if (tR.isReady()) 0 === --GR && JR();
-               else {
-                 const RR = tR.onLoadObservable;
-                 RR ? RR.addOnce((() => {
-                   0 === --GR && JR()
- ... (560 more removed lines; see GitHub link above)
+       }
+       static UnregisterTopRootEvents(rr, Sr) {
+         for (let Zr = 0; Zr < Sr.length; Zr++) {
+           const Wr = Sr[Zr];
+           rr.removeEventListener(Wr.name, Wr.handler);
+           try {
+             rr.parent && rr.parent.removeEventListener(Wr.name, Wr.handler)
+           } catch (Qr) {}
+         }
+       }
+       static async DumpFramebuffer(rr, Sr, Qr, Zr) {
+         throw (0, Er.l)("DumpTools")
+       }
+       static DumpData(rr, Sr, Qr, Zr) {
+         throw (0, Er.l)("DumpTools")
+       }
+ ... (29 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L943-L988` → after: `L395-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L395-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L395-L419) · [Before (L943-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L943-L988)

```diff
-           static Parse(JR, GR, yR) {
-             if (JR.customType) {
-               const RR = KR.b.Instantiate(JR.customType).Parse(JR, GR, yR);
-               return JR.samplingMode && RR.updateSamplingMode && RR._samplingMode && RR._samplingMode !== JR.samplingMode && RR.updateSamplingMode(JR.samplingMode), RR
-             }
-             if (JR.isCube && !JR.isRenderTarget) return RR._CubeTextureParser(JR, GR, yR);
-             const tR = void 0 !== JR.internalTextureUniqueId;
-             if (!JR.name && !JR.isRenderTarget && !tR) return null;
-             let uR;
-             if (tR) {
-               const RR = GR.ke().getLoadedTexturesCache();
-               for (const GR of RR)
-                 if (GR.uniqueId === JR.internalTextureUniqueId) {
-                   uR = GR;
-                   break
-                 }
- ... (30 more removed lines; see GitHub link above)
+           Zr.Download(rr, Sr)
+         } else if (rr && "undefined" !== typeof URL) {
+           const Sr = URL.createObjectURL(rr),
+             Qr = window.open("");
+           if (!Qr) return;
+           const Zr = Qr.document.createElement("img");
+           Zr.onload = function() {
+             URL.revokeObjectURL(Sr)
+           }, Zr.src = Sr, Qr.document.body.appendChild(Zr)
+         }
+       }
+       static EncodeScreenshotCanvasData(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           Wr = arguments.length > 3 ? arguments[3] : void 0,
+           ar = arguments.length > 4 ? arguments[4] : void 0;
+         if ("string" !== typeof Wr && Sr) {
+ ... (9 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L990-L1032` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L421-L423) · [Before (L990-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L990-L1032)

```diff
-               if (JR.isVideo) {
-                 const uR = RR._CreateVideoTexture(yR + (JR.url || JR.name), yR + (JR.src || JR.url), GR, tR, JR.invertY, JR.samplingMode, JR.settings || {});
-                 return ZR(uR), uR
-               } {
-                 let qR;
-                 if ("string" === typeof JR.base64String && JR.base64String && !uR) {
-                   const yR = {
-                       buffer: JR.base64String,
-                       noMipmap: !tR,
-                       invertY: JR.invertY,
-                       samplingMode: JR.samplingMode,
-                       useSRGBBuffer: JR._useSRGBBuffer ?? !1,
-                       creationFlags: JR._creationFlags ?? 0,
-                       onLoad: () => {
-                         ZR(qR)
-                       }
- ... (27 more removed lines; see GitHub link above)
+             }));
+             const Wr = rr.toDataURL(Qr, ar);
+             Sr(Wr)
```

#### 37. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1034-L1240` → after: `L425-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L425-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L425-L438) · [Before (L1034-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1034-L1240)

```diff
-           static LoadFromDataString(JR, GR, yR) {
-             let tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               uR = arguments.length > 4 ? arguments[4] : void 0,
-               ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-               qR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : RR.TRILINEAR_SAMPLINGMODE,
-               iR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               fR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-               VR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
-               KR = arguments.length > 10 ? arguments[10] : void 0,
-               wR = arguments.length > 11 ? arguments[11] : void 0;
-             return "data:" !== JR.substring(0, 5) && (JR = "data:" + JR), new RR(JR, yR, uR, ZR, qR, iR, fR, GR, tR, VR, void 0, void 0, KR, wR)
-           }
-         }, (() => {
-           const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(vR[Symbol.metadata] ?? null) : void 0;
-           JR = [(0, tR.H)()], GR = [(0, tR.H)()], eR = [(0, tR.H)()], WR = [(0, tR.H)()], AR = [(0, tR.H)()], CR = [(0, tR.H)()], XR = [(0, tR.H)()], MR = [(0, tR.H)()], BR = [(0, tR.H)()], lR = [(0, tR.H)()], pR = [(0, tR.H)()], gR = [(0, tR.H)()], bR = [(0, tR.H)()], (0, yR.l)( … [truncated]
-             kind: "getter",
- ... (191 more removed lines; see GitHub link above)
+         } else this.ToBlob(rr, (function(rr) {
+           rr && Zr.DownloadBlob(rr, Wr), Sr && Sr("")
+         }), Qr, ar)
+       }
+       static Download(rr, Sr) {
+         if ("undefined" === typeof URL) return;
+         const Qr = window.URL.createObjectURL(rr),
+           Zr = document.createElement("a");
+         document.body.appendChild(Zr), Zr.style.display = "none", Zr.href = Qr, Zr.download = Sr, Zr.addEventListener("click", (() => {
+           Zr.parentElement && Zr.parentElement.removeChild(Zr)
+         })), Zr.click(), window.URL.revokeObjectURL(Qr)
+       }
+       static BackCompatCameraNoPreventDefault(rr) {
+         return "boolean" === typeof rr[0] ? rr[0] : "boolean" === typeof rr[1] && rr[1]
```

#### 38. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1242-L1243` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L440-L441) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1242-L1243)

```diff
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
+       static CreateScreenshot(rr, Sr, Qr, Zr) {
+         throw (0, Er.l)("ScreenshotTools")
```

#### 39. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1245-L1246` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L443-L444) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1245-L1246)

```diff
-       getClassName() {
-         return "Size"
+       static async CreateScreenshotAsync(rr, Sr, Qr) {
+         throw (0, Er.l)("ScreenshotTools")
```

#### 40. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1248-L1250` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L446-L447) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1248-L1250)

```diff
-       getHashCode() {
-         let RR = 0 | this.width;
-         return RR = 397 * RR ^ this.height, RR
+       static CreateScreenshotUsingRenderTarget(rr, Sr, Qr, Zr) {
+         throw (0, Er.l)("ScreenshotTools")
```

#### 41. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1252-L1253` → after: `L449-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L449-L450) · [Before (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1252-L1253)

```diff
-       vN(RR) {
-         this.width = RR.width, this.height = RR.height
+       static async CreateScreenshotUsingRenderTargetAsync(rr, Sr, Qr) {
+         throw (0, Er.l)("ScreenshotTools")
```

#### 42. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1255-L1256` → after: `L452-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L452-L453) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1255-L1256)

```diff
-       VJR(RR, JR) {
-         return this.width = RR, this.height = JR, this
+       static RandomId() {
+         return (0, tr.b)()
```

#### 43. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1258-L1259` → after: `L455-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L455-L456) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1258-L1259)

```diff
-       set(RR, JR) {
-         return this.VJR(RR, JR)
+       static IsBase64(rr) {
+         return (0, mr.j)(rr)
```

#### 44. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1261-L1262` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L458-L459) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1261-L1262)

```diff
-       multiplyByFloats(RR, JR) {
-         return new yR(this.width * RR, this.height * JR)
+       static DecodeBase64(rr) {
+         return (0, mr.b)(rr)
```

#### 45. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1264-L1265` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L461-L462) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1264-L1265)

```diff
-       clone() {
-         return new yR(this.width, this.height)
+       static get errorsCount() {
+         return jr.c.errorsCount
```

#### 46. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1267-L1268` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L464-L465) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1267-L1268)

```diff
-       equals(RR) {
-         return !!RR && (this.width === RR.width && this.height === RR.height)
+       static Log(rr) {
+         jr.c.Log(rr)
```

#### 47. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1270-L1271` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L467-L468) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1270-L1271)

```diff
-       get surface() {
-         return this.width * this.height
+       static Warn(rr) {
+         jr.c.Warn(rr)
```

#### 48. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1273-L1274` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L470-L471) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1273-L1274)

```diff
-       static Zero() {
-         return new yR(0, 0)
+       static Error(rr) {
+         jr.c.Error(rr)
```

#### 49. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1276-L1277` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L473-L474) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1276-L1277)

```diff
-       add(RR) {
-         return new yR(this.width + RR.width, this.height + RR.height)
+       static get LogCache() {
+         return jr.c.LogCache
```

#### 50. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1279-L1280` → after: `L476-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L476-L477) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1279-L1280)

```diff
-       subtract(RR) {
-         return new yR(this.width - RR.width, this.height - RR.height)
+       static ClearLogCache() {
+         jr.c.ClearLogCache()
```

#### 51. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1282-L1283` → after: `L479-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L479-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L479-L493) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1282-L1283)

```diff
-       scale(RR) {
-         return new yR(this.width * RR, this.height * RR)
+       static set LogLevels(rr) {
+         jr.c.LogLevels = rr
+       }
+       static set PerformanceLogLevel(rr) {
+         (rr & Zr.PerformanceUserMarkLogLevel) !== Zr.PerformanceUserMarkLogLevel ? (rr & Zr.PerformanceConsoleLogLevel) !== Zr.PerformanceConsoleLogLevel ? (Zr.StartPerformanceCounter = Zr._StartPerformanceCounterDisabled, Zr.EndPerformanceCounter = Zr._EndPerformanceCounterDisab … [truncated]
+       }
+       static _StartPerformanceCounterDisabled(rr, Sr) {}
+       static _EndPerformanceCounterDisabled(rr, Sr) {}
+       static _StartUserMark(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!Zr._Performance) {
+           if (!(0, ar.m)()) return;
+           Zr._Performance = window.performance
+         }
+         Sr && Zr._Performance.mark && Zr._Performance.mark(rr + "-Begin")
```

#### 52. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1285-L1288` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/291.js#L495-L496) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/291.js#L1285-L1288)

```diff
-       static Lerp(RR, JR, GR) {
-         const tR = RR.width + (JR.width - RR.width) * GR,
-           uR = RR.height + (JR.height - RR.height) * GR;
-         return new yR(tR, uR)
+       static _EndUserMark(rr) {
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Zr._Performance.mark && (Zr._Performance.mark(rr + "-End"), Zr._Performance.measure(rr, rr + "-Begin", rr + "-End"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/292.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/292.js` (94 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76)

#### 1. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L4)

```diff
-   41764: (RR, JR, GR) => {
+   42275: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L6-L7` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L6-L12) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L6-L7)

```diff
-       e: () => ZR,
-       i: () => qR
+       b: () => Zr
+     });
+     let Zr = !1
+   },
+   41865: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Ur
```

#### 3. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L9-L12` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L14-L20) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L9-L12)

```diff
-     var yR = GR(39914),
-       tR = GR(41542),
-       uR = GR(41732),
-       ZR = {};
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(38595),
+       jr = Qr(38560),
+       Ir = Qr(38587),
+       fr = Qr(39405),
+       Er = Qr(41882);
```

#### 4. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L14-L15` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L22-L23) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L14-L15)

```diff
-       constructor(RR) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = RR, this.checkInputs = () => {}
+       get wrapU() {
+         return this._wrapU
```

#### 5. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L17-L19` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L25-L26) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L17-L19)

```diff
-       add(RR) {
-         const JR = RR.getSimpleName();
-         this.attached[JR] ? yR.c.Warn("camera input of type " + JR + " already exists on camera") : (this.attached[JR] = RR, RR.camera = this.camera, RR.checkInputs && (this.checkInputs = this._addCheckInputs(RR.checkInputs.bind(RR))), this.attachedToElement && RR.attachControl(t … [truncated]
+       set wrapU(rr) {
+         this._wrapU = rr
```

#### 6. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L21-L25` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L28-L29) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L21-L25)

```diff
-       remove(RR) {
-         for (const JR in this.attached) {
-           const GR = this.attached[JR];
-           if (GR === RR) return GR.detachControl(), GR.camera = null, delete this.attached[JR], void this.rebuildInputCheck()
-         }
+       get wrapV() {
+         return this._wrapV
```

#### 7. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L27-L31` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L31-L32) · [Before (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L27-L31)

```diff
-       removeByType(RR) {
-         for (const JR in this.attached) {
-           const GR = this.attached[JR];
-           GR.getClassName() === RR && (GR.detachControl(), GR.camera = null, delete this.attached[JR], this.rebuildInputCheck())
-         }
+       set wrapV(rr) {
+         this._wrapV = rr
```

#### 8. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L33-L37` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L34-L35) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L33-L37)

```diff
-       _addCheckInputs(RR) {
-         const JR = this.checkInputs;
-         return () => {
-           JR(), RR()
-         }
+       get coordinatesMode() {
+         return 0
```

#### 9. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L39-L40` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L37-L38) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L39-L40)

```diff
-       attachInput(RR) {
-         this.attachedToElement && RR.attachControl(this.noPreventDefault)
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 10. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L42-L47` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L40-L41) · [Before (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L42-L47)

```diff
-       attachElement() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           RR = !uR.b.ForceAttachControlToAlwaysPreventDefault && RR, this.attachedToElement = !0, this.noPreventDefault = RR;
-           for (const JR in this.attached) this.attached[JR].attachControl(RR)
-         }
+       set isCube(rr) {
+         this._texture && (this._texture.isCube = rr)
```

#### 11. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L49-L52` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L43-L44) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L49-L52)

```diff
-       detachElement() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const JR in this.attached) this.attached[JR].detachControl(), RR && (this.attached[JR].camera = null);
-         this.attachedToElement = !1
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 12. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L54-L59` → after: `L46-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L46-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L46-L56) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L54-L59)

```diff
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const RR in this.attached) {
-           const JR = this.attached[RR];
-           JR.checkInputs && (this.checkInputs = this._addCheckInputs(JR.checkInputs.bind(JR)))
-         }
+       set is3D(rr) {
+         this._texture && (this._texture.is3D = rr)
+       }
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
+       }
+       set is2DArray(rr) {
+         this._texture && (this._texture.is2DArray = rr)
+       }
+       getClassName() {
+         return "ThinTexture"
```

#### 13. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L61-L62` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L58-L59) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L61-L62)

```diff
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       static _IsRenderTargetWrapper(rr) {
+         return void 0 !== rr?.shareDepth
```

#### 14. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L64-L69` → after: `L61-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L61-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L61-L74) · [Before (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L64-L69)

```diff
-       serialize(RR) {
-         const JR = {};
-         for (const GR in this.attached) {
-           const RR = this.attached[GR],
-             yR = tR.c.Serialize(RR);
-           JR[RR.getClassName()] = yR
+       constructor(rr) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Er.b.Zero(), this._cachedBaseSize = Er.b.Zero(), this._initialSamplingMode = 2, this._texture = pr. … [truncated]
+       }
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+       }
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
+       }
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
```

#### 15. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L71` → after: `L76-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L76-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L76-L89) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L71)

```diff
-         RR.inputsmgr = JR
+         return this._cachedSize
+       }
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+       }
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+       }
+       updateSamplingMode(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(rr, this._texture, this._texture.generateMipMaps && Sr)
+       }
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 16. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L73-L77` → after: `L91-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L91-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L91-L284) · [Before (L73-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L73-L77)

```diff
-       parse(RR) {
-         const JR = RR.inputsmgr;
-         if (JR) {
-           this.clear();
-           for (const RR in JR) {
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
+       }
+     }
+     var xr, mr = Qr(41889),
+       Nr = Qr(41769);
+     let Ur = (() => {
+       var rr;
+       let Sr, Qr, Er, xr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, Rr, gr = pr,
+         Cr = [],
+         Mr = [],
+         Gr = [],
+         kr = [],
+         Ar = [],
+         Vr = [],
+         ir = [],
+ ... (178 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L79-L83` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L286) · [Before (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L79-L83)

```diff
-             if (GR) {
-               const yR = JR[RR],
-                 uR = tR.c.Parse((() => new GR), yR, null);
-               this.add(uR)
-             }
+             if ((void 0 === Wr || Ir === jr._useSRGBBuffer) && (void 0 === Zr || Zr === jr.invertY) && jr.url === rr && jr.generateMipMaps === !Sr && (!Qr || Qr === jr.samplingMode) && (void 0 === ar || ar === jr.isCube)) return jr.incrementReferences(), jr
```

#### 18. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L85-L90` → after: `L288-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L288-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L288-L361) · [Before (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L85-L90)

```diff
-         } else
-           for (const GR in this.attached) {
-             const JR = ZR[this.attached[GR].getClassName()];
-             if (JR) {
-               const yR = tR.c.Parse((() => new JR), RR, null);
-               this.remove(this.attached[GR]), this.add(yR)
+           return null
+         }
+         _rebuild() {}
+         clone() {
+           return null
+         }
+         get textureType() {
+           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
+         }
+         get textureFormat() {
+           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
+         }
+         _markAllSubMeshesAsTexturesDirty() {
+           const rr = this.eC();
+           rr && rr.markAllMaterialsAsDirty(1)
+         }
+ ... (58 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L93-L94` → after: `L364-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L364-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L364-L694) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L93-L94)

```diff
-       }
-     }
+           this.lC.notifyObservers(this), this.lC.clear(), this.metadata = null, super.dispose()
+         }
+         serialize() {
+           let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !rr) return null;
+           const Sr = mr.e.Serialize(this);
+           return mr.e.AppendSerializedAnimations(this, Sr), Sr
+         }
+         static WhenAllReady(rr, Sr) {
+           let Qr = rr.length;
+           if (0 !== Qr)
+             for (let Zr = 0; Zr < rr.length; Zr++) {
+               const Wr = rr[Zr];
+               if (Wr.isReady()) 0 === --Qr && Sr();
+               else {
+                 const rr = Wr.onLoadObservable;
+ ... (315 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L96` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L696) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L96)

```diff
-   42677: (RR, JR, GR) => {
+   42310: (rr, Sr, Qr) => {
```

#### 21. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L98` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L698-L699) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L98)

```diff
-       d: () => WR
+       d: () => Kr,
+       f: () => nr
```

#### 22. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L100-L115` → after: `L701-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L701-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L701-L757) · [Before (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L100-L115)

```diff
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(41415),
-       ZR = GR(38204),
-       qR = GR(41514),
-       iR = GR(42011),
-       fR = GR(38253),
-       VR = GR(38233),
-       KR = GR(41542),
-       wR = GR(41364),
-       rR = GR(39914),
-       eR = GR(41564),
-       aR = GR(39062),
-       LR = GR(41607);
-     var nR = GR(41418);
-     let UR = !1;
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(38595),
+       jr = Qr(38560),
+       Ir = Qr(41865),
+       fr = Qr(38609),
+       Er = Qr(41769),
+       pr = Qr(41781),
+       xr = Qr(41955),
+       mr = Qr(39264),
+       Nr = Qr(41917);
+ 
+     function Ur(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const Zr = Sr.width,
+         Wr = Sr.height;
+ ... (41 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L118` → after: `L760-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L760-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L760-L770) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L118)

```diff
-         let JR, GR, fR, WR, AR, CR, XR, MR, BR, lR = qR.c,
+         let Sr, Qr, Ur, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr = Ir.b,
+           Pr = [],
+           Hr = [],
+           qr = [],
+           Rr = [],
+           gr = [],
+           Cr = [],
+           Mr = [],
+           Gr = [],
+           kr = [],
+           Ar = [],
```

#### 24. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L135-L139` → after: `L787-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L787-L789) · [Before (L135-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L135-L139)

```diff
-           set boundingBoxSize(RR) {
-             if (this._boundingBoxSize && this._boundingBoxSize.equals(RR)) return;
-             this._boundingBoxSize = RR;
-             const JR = this.jH();
-             JR && JR.markAllMaterialsAsDirty(1)
+           static _CreateVideoTexture(Sr, Qr, Zr) {
+             arguments.length > 5 && void 0 !== arguments[5] || rr.TRILINEAR_SAMPLINGMODE;
+             throw (0, Er.l)("VideoTexture")
```

#### 25. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L141-L142` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L791-L792) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L141-L142)

```diff
-           get boundingBoxSize() {
-             return this._boundingBoxSize
+           get noMipmap() {
+             return this._noMipmap
```

#### 26. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L144-L145` → after: `L794-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L794-L795) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L144-L145)

```diff
-           set rotationY(RR) {
-             this._rotationY = RR, this.setReflectionTextureMatrix(ZR.e.RotationY(this._rotationY))
+           get mimeType() {
+             return this._mimeType
```

#### 27. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L147-L148` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L797-L798) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L147-L148)

```diff
-           get rotationY() {
-             return this._rotationY
+           set isBlocking(rr) {
+             this._isBlocking = rr
```

#### 28. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L150-L151` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L800-L801) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L150-L151)

```diff
-           get noMipmap() {
-             return this._noMipmap
+           get isBlocking() {
+             return this._isBlocking
```

#### 29. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L153-L154` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L803-L804) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L153-L154)

```diff
-           get forcedExtension() {
-             return this._forcedExtension
+           get invertY() {
+             return this._invertY
```

#### 30. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L156-L159` → after: `L806-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L806-L807) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L156-L159)

```diff
-           constructor(RR, JR) {
-             let GR, tR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               uR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               qR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+           constructor(Sr, Qr, Wr, jr) {
+             let Ir, fr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rr.TRILINEAR_SAMPLINGMODE,
```

#### 31. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L162` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L810) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L162)

```diff
-               WR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
+               mr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
```

#### 32. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L164-L233` → after: `L812-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L812-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L812-L837) · [Before (L164-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L164-L233)

```diff
-               CR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
-               XR = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
-               MR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
-               BR = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
-               lR = arguments.length > 13 ? arguments[13] : void 0,
-               SR = arguments.length > 14 ? arguments[14] : void 0;
-             super(JR), this._delayedOnLoad = (0, yR.m)(this, pR), this.onLoadObservable = new VR.b, this.url = (0, yR.m)(this, gR, void 0), this.boundingBoxPosition = ((0, yR.m)(this, bR), (0, yR.m)(this, vR, ZR.r.Zero())), this._boundingBoxSize = (0, yR.m)(this, OR), this._rotat … [truncated]
-               let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-               this._loadFile(RR, (RR => {
-                 GR[JR] = RR, GR._internalCount++, 6 === GR._internalCount && yR(GR)
-               }), void 0, void 0, !0, ((RR, JR) => {
-                 tR && RR && tR(RR.status + " " + RR.statusText, JR)
-               }))
-             }, nR.c.prototype._cascadeLoadFiles = function(RR, JR, GR) {
-               let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-               const tR = [];
- ... (54 more removed lines; see GitHub link above)
+               Ur = arguments.length > 9 ? arguments[9] : void 0,
+               tr = arguments.length > 10 ? arguments[10] : void 0,
+               hr = arguments.length > 11 ? arguments[11] : void 0,
+               Yr = arguments.length > 12 ? arguments[12] : void 0,
+               nr = arguments.length > 13 ? arguments[13] : void 0;
+             super(Qr), this.url = ((0, Zr.m)(this, Pr), (0, Zr.m)(this, Hr, null)), this.uOffset = ((0, Zr.m)(this, qr), (0, Zr.m)(this, Rr, 0)), this.vOffset = ((0, Zr.m)(this, gr), (0, Zr.m)(this, Cr, 0)), this.uScale = ((0, Zr.m)(this, Mr), (0, Zr.m)(this, Gr, 1)), this.vScale … [truncated]
+             let er = !1,
+               Kr = null,
+               yr = !0;
+             "object" === typeof Wr && null !== Wr ? (Ir = Wr.noMipmap ?? !1, jr = Wr.invertY ?? !zr.b, fr = Wr.samplingMode ?? rr.TRILINEAR_SAMPLINGMODE, Er = Wr.onLoad ?? null, xr = Wr.onError ?? null, mr = Wr.buffer ?? null, Nr = Wr.deleteBuffer ?? !1, Ur = Wr.format, tr = Wr.m … [truncated]
+             const Br = this.eC(),
+               Tr = this._getEngine();
+             if (!Tr) return;
+             Tr.onBeforeTextureInitObservable.notifyObservers(this);
+             const vr = () => {
+                 this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this. … [truncated]
+ ... (10 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L235-L238` → after: `L839-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L839-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L839-L842) · [Before (L235-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L235-L238)

```diff
-                 if (!GR || 0 === GR.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
-                 this._cascadeLoadImgs(JR, WR, ((RR, JR) => {
-                   aR && aR(RR, JR)
-                 }), GR, MR)
+                 const rr = this._texture.onLoadedObservable.add(vr);
+                 this._texture.onErrorObservable.add((Sr => {
+                   Or(Sr.message, Sr.exception), this._texture?.onLoadedObservable.remove(rr)
+                 }))
```

#### 34. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L240-L246` → after: `L844-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L844-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L844-L852) · [Before (L240-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L240-L246)

```diff
-               return this._internalTexturesCache.push(WR), WR
-             }), this.name = RR, this.url = RR, this._noMipmap = uR, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = ZR.e.Identity(), this.coordinatesMode = iR.f.CUBIC_MODE;
-             let jR = null;
-             null === tR || Array.isArray(tR) ? (this._noMipmap = uR, this._format = WR, this._createPolynomials = XR, GR = tR, this._loaderOptions = lR, this._useSRGBBuffer = SR, this._lodScale = MR, this._lodOffset = BR) : (GR = tR.extensions ?? null, this._noMipmap = tR.noMipma … [truncated]
-           }
-           getClassName() {
-             return "CubeTexture"
+             else if (Br && Br.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = vr, this._delayedOnError = Or;
+             else {
+               try {
+                 this._texture = Tr.createTexture(this.url, Ir, this._invertY, Br, fr, vr, Or, this._buffer, void 0, this._format, this._forcedExtension, tr, hr, Yr, er)
+               } catch (Lr) {
+                 throw Or("error loading", Lr), Lr
+               }
+               Nr && (this._buffer = null)
+             }
```

#### 35. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L250-L268` → after: `L856-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L856-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L856-L862) · [Before (L250-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L250-L268)

```diff
-               GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-               uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-               qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               iR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
-             this.name && !this.name.startsWith("data:") || (this.name = RR), this.url = RR, JR && (this._forcedExtension = JR);
-             const fR = RR.lastIndexOf("."),
-               VR = JR || (fR > -1 ? RR.substring(fR).toLowerCase() : ""),
-               KR = 0 === VR.indexOf(".dds"),
-               wR = 0 === VR.indexOf(".env"),
-               rR = 0 === VR.indexOf(".basis");
-             if (wR ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = yR, yR && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), qR) this._files = qR;
-             else if (rR || wR || KR || uR || (uR = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, uR) {
-               for (let JR = 0; JR < uR.length; JR++) this._files.push(RR + uR[JR]);
- ... (3 more removed lines; see GitHub link above)
+               Qr = arguments.length > 2 ? arguments[2] : void 0,
+               Zr = arguments.length > 3 ? arguments[3] : void 0;
+             this.url && (this.releaseInternalTexture(), this.eC().markAllMaterialsAsDirty(1, (rr => rr.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = rr), this.url = rr, this._buffer = Sr, this._forcedExtension = Zr, this.delayLoadState = 4;
+             const Wr = this._delayedOnLoad;
+             this._delayedOnLoad = () => {
+               Wr ? Wr() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Qr && Qr()
+             }, this.delayLoad()
```

#### 36. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L270-L271` → after: `L864-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L864-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L864-L881) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L270-L271)

```diff
-           delayLoad(RR) {
-             4 === this.delayLoadState && (RR && (this._forcedExtension = RR), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
+           delayLoad() {
+             if (4 !== this.delayLoadState) return;
+             const rr = this.eC();
+             if (!rr) return;
+             let Sr = this.url;
+             !Sr && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Sr = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Sr, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+           }
+           _prepareRowForTextureGeneration(rr, Sr, Qr, Zr) {
+             rr *= this._cachedUScale, Sr *= this._cachedVScale, rr -= this.uRotationCenter * this._cachedUScale, Sr -= this.vRotationCenter * this._cachedVScale, Qr -= this.wRotationCenter, jr.u.TransformCoordinatesFromFloatsToRef(rr, Sr, Qr, this._rowGenerationMatrix, Zr), Zr.x  … [truncated]
+           }
+           getTextureMatrix() {
+             let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+             if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * rr === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && t … [truncated]
+             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * rr, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
+             const Sr = this.eC();
+             if (!Sr) return this._cachedTextureMatrix;
+ ... (2 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L274` → after: `L884-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L884-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L884-L905) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L274)

```diff
-             return this._textureMatrix
+             const Sr = this.eC();
+             if (!Sr) return this._cachedReflectionTextureMatrix;
+             if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
+               if (this.coordinatesMode !== rr.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
+               if (this._cachedReflectionProjectionMatrixId === Sr.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
+             }
+             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = jr.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = jr.d.Zero());
+             const Qr = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
+             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
+               case rr.PLANAR_MODE:
+                 jr.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
+                 break;
+               case rr.PROJECTION_MODE: {
+                 jr.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
+                 const rr = Sr.getProjectionMatrix();
+                 this._cachedReflectionProjectionMatrixId = rr.updateFlag, rr.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
+ ... (6 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L276-L282` → after: `L907-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L907-L922) · [Before (L276-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L276-L282)

```diff
-           setReflectionTextureMatrix(RR) {
-             if (RR.updateFlag === this._textureMatrix.updateFlag) return;
-             if (RR.isIdentity() !== this._textureMatrix.isIdentity() && this.jH()?.markAllMaterialsAsDirty(1, (RR => -1 !== RR.getActiveTextures().indexOf(this))), this._textureMatrix = RR, !this.jH()?.useRightHandedSystem) return;
-             const JR = ZR.l.Fe[0],
-               GR = ZR.l.Quaternion[0],
-               yR = ZR.l.Fe[1];
-             this._textureMatrix.decompose(JR, GR, yR), GR.z *= -1, GR.w *= -1, ZR.e.ComposeToRef(JR, GR, yR, this._textureMatrixRefraction)
+           clone() {
+             const Sr = {
+               noMipmap: this._noMipmap,
+               invertY: this._invertY,
+               samplingMode: this.samplingMode,
+               onLoad: void 0,
+               onError: void 0,
+               buffer: this._texture ? this._texture._buffer : void 0,
+               deleteBuffer: this._deleteBuffer,
+               format: this.textureFormat,
+               mimeType: this.mimeType,
+               loaderOptions: this._loaderOptions,
+               creationFlags: this._creationFlags,
+               useSRGBBuffer: this._useSRGBBuffer
+             };
+             return Yr.e.Clone((() => new rr(this._texture ? this._texture.url : null, this.eC(), Sr)), this)
```

#### 39. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L284-L285` → after: `L924-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L924-L935) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L284-L285)

```diff
-           getRefractionTextureMatrix() {
-             return this.jH()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
+           serialize() {
+             const Sr = this.name;
+             rr.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
+             const Qr = super.serialize(rr._SerializeInternalTextureUniqueId);
+             if (!Qr) return null;
+             if (rr.SerializeBuffers || rr.ForceSerializeBuffers)
+               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) Qr.base64String = this._buffer, Qr.name = Qr.name.replace("data:", "");
+               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
+               const rr = this.mimeType || "image/png";
+               Qr.base64String = `data:${rr};base64,${(0,Nr.d)(this._buffer)}`
+             } else(rr.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (Qr.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? tr(this) : hr(this));
+             return Qr.invertY = this._invertY, Qr.samplingMode = this.samplingMode, Qr._creationFlags = this._creationFlags, Qr._useSRGBBuffer = this._useSRGBBuffer, rr._SerializeInternalTextureUniqueId && (Qr.internalTextureUniqueId = this._texture?.uniqueId), Qr.internalTexture … [truncated]
```

#### 40. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L287-L302` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L937-L938) · [Before (L287-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L287-L302)

```diff
-           _loadTexture() {
-             let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-               JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-             const GR = this.jH(),
-               yR = this._texture;
-             this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
-             const tR = () => {
-                 this.onLoadObservable.notifyObservers(this), yR && (yR.dispose(), this.jH()?.markAllMaterialsAsDirty(1)), RR && RR()
-               },
-               ZR = (RR, GR) => {
-                 this._loadingError = !0, this._errorObject = {
-                   message: RR,
-                   exception: GR
-                 }, JR && JR(RR, GR), iR.f.OnTextureLoadErrorObservable.notifyObservers(this)
-               };
-             this._texture ? this._texture.isReady ? uR.e.SetImmediate((() => tR())) : this._texture.onLoadedObservable.add((() => tR())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, GR, this._lodScale, this._lodOffset, RR, ZR, th … [truncated]
+           getClassName() {
+             return "Texture"
```

#### 41. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L304-L311` → after: `L940-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L940-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L940-L1044) · [Before (L304-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L304-L311)

```diff
-           clone() {
-             let JR = 0;
-             const GR = this.irradianceTexture,
-               yR = KR.c.Clone((() => {
-                 const GR = new RR(this.url, this.jH() || this._getEngine(), this._extensions, this._noMipmap, this._files);
-                 return JR = GR.uniqueId, GR
-               }), this);
-             return yR.uniqueId = JR, GR && !this.irradianceTexture && (this.irradianceTexture = GR), yR
+           dispose() {
+             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+           }
+           static Parse(Sr, Qr, Zr) {
+             if (Sr.customType) {
+               const rr = xr.d.Instantiate(Sr.customType).Parse(Sr, Qr, Zr);
+               return Sr.samplingMode && rr.updateSamplingMode && rr._samplingMode && rr._samplingMode !== Sr.samplingMode && rr.updateSamplingMode(Sr.samplingMode), rr
+             }
+             if (Sr.isCube && !Sr.isRenderTarget) return rr._CubeTextureParser(Sr, Qr, Zr);
+             const Wr = void 0 !== Sr.internalTextureUniqueId;
+             if (!Sr.name && !Sr.isRenderTarget && !Wr) return null;
+             let ar;
+             if (Wr) {
+               const rr = Qr.MU().getLoadedTexturesCache();
+               for (const Qr of rr)
+                 if (Qr.uniqueId === Sr.internalTextureUniqueId) {
+ ... (89 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L315` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1048) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L315)

```diff
-           JR = [(0, tR.H)()], GR = [(0, tR.G)()], fR = [(0, tR.G)()], WR = [(0, tR.H)("rotationY")], AR = [(0, tR.H)("files")], CR = [(0, tR.H)("forcedExtension")], XR = [(0, tR.H)("extensions")], MR = [(0, tR.u)("textureMatrix")], BR = [(0, tR.u)("textureMatrixRefraction")], (0, … [truncated]
+           Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], nr = [(0, Wr.G)()], er = [(0, Wr.G)()], Kr = [(0, Wr.G)()], yr = [(0, Wr.G)()], Br = [(0, Wr.G)()], Tr = [(0, Wr.G)()], vr = [(0, Wr.G)()], Or = [(0, Wr.G)()], Lr = [(0, Wr.G)()], lr = [(0, Wr.G)()], (0, Zr.k)( … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L317` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1050) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L317)

```diff
-             name: "boundingBoxSize",
+             name: "isBlocking",
```

#### 44. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L321-L322` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1054-L1055) · [Before (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L321-L322)

```diff
-               has: RR => "boundingBoxSize" in RR,
-               get: RR => RR.boundingBoxSize
+               has: rr => "isBlocking" in rr,
+               get: rr => rr.isBlocking
```

#### 45. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L325-L327` → after: `L1058-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1058-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1058-L1060) · [Before (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L325-L327)

```diff
-           }, null, pR), (0, yR.l)(RR, null, WR, {
-             kind: "setter",
-             name: "rotationY",
+           }, null, Pr), (0, Zr.k)(null, null, Sr, {
+             kind: "field",
+             name: "url",
```

#### 46. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L331` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1064-L1065) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L331)

```diff
-               has: RR => "rotationY" in RR,
+               has: rr => "url" in rr,
+               get: rr => rr.url,
```

#### 47. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L333` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1067) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L333)

```diff
-                 RR.rotationY = JR
+                 rr.url = Sr
```

#### 48. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L337` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1071) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L337)

```diff
-           }, null, pR), (0, yR.l)(null, null, JR, {
+           }, Hr, qr), (0, Zr.k)(null, null, Qr, {
```

#### 49. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L339` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1073) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L339)

```diff
-             name: "url",
+             name: "uOffset",
```

#### 50. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L343-L344` → after: `L1077-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1077-L1078) · [Before (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L343-L344)

```diff
-               has: RR => "url" in RR,
-               get: RR => RR.url,
+               has: rr => "uOffset" in rr,
+               get: rr => rr.uOffset,
```

#### 51. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L346` → after: `L1080-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1080-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1080-L1093) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L346)

```diff
-                 RR.url = JR
+                 rr.uOffset = Sr
+               }
+             },
+             metadata: ar
+           }, Rr, gr), (0, Zr.k)(null, null, Ur, {
+             kind: "field",
+             name: "vOffset",
+             static: !1,
+             private: !1,
+             access: {
+               has: rr => "vOffset" in rr,
+               get: rr => rr.vOffset,
+               set: (rr, Sr) => {
+                 rr.vOffset = Sr
```

#### 52. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L350` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1097) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L350)

```diff
-           }, gR, bR), (0, yR.l)(null, null, GR, {
+           }, Cr, Mr), (0, Zr.k)(null, null, nr, {
```

#### 53. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L352` → after: `L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1099) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L352)

```diff
-             name: "boundingBoxPosition",
+             name: "uScale",
```

#### 54. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L356-L357` → after: `L1103-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1103-L1104) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L356-L357)

```diff
-               has: RR => "boundingBoxPosition" in RR,
-               get: RR => RR.boundingBoxPosition,
+               has: rr => "uScale" in rr,
+               get: rr => rr.uScale,
```

#### 55. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L359` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1106) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L359)

```diff
-                 RR.boundingBoxPosition = JR
+                 rr.uScale = Sr
```

#### 56. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L363` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1110) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L363)

```diff
-           }, vR, OR), (0, yR.l)(null, null, AR, {
+           }, Gr, kr), (0, Zr.k)(null, null, er, {
```

#### 57. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L365` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1112) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L365)

```diff
-             name: "_files",
+             name: "vScale",
```

#### 58. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L369-L370` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1116-L1117) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L369-L370)

```diff
-               has: RR => "_files" in RR,
-               get: RR => RR._files,
+               has: rr => "vScale" in rr,
+               get: rr => rr.vScale,
```

#### 59. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L372` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1119) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L372)

```diff
-                 RR._files = JR
+                 rr.vScale = Sr
```

#### 60. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L376` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1123) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L376)

```diff
-           }, xR, NR), (0, yR.l)(null, null, CR, {
+           }, Ar, Vr), (0, Zr.k)(null, null, Kr, {
```

#### 61. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L378` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1125) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L378)

```diff
-             name: "_forcedExtension",
+             name: "uAng",
```

#### 62. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L382-L383` → after: `L1129-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1129-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1129-L1130) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L382-L383)

```diff
-               has: RR => "_forcedExtension" in RR,
-               get: RR => RR._forcedExtension,
+               has: rr => "uAng" in rr,
+               get: rr => rr.uAng,
```

#### 63. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L385` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1132) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L385)

```diff
-                 RR._forcedExtension = JR
+                 rr.uAng = Sr
```

#### 64. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L389` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1136) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L389)

```diff
-           }, DR, HR), (0, yR.l)(null, null, XR, {
+           }, ir, wr), (0, Zr.k)(null, null, yr, {
```

#### 65. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L391` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1138) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L391)

```diff
-             name: "_extensions",
+             name: "vAng",
```

#### 66. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L395-L396` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1142-L1143) · [Before (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L395-L396)

```diff
-               has: RR => "_extensions" in RR,
-               get: RR => RR._extensions,
+               has: rr => "vAng" in rr,
+               get: rr => rr.vAng,
```

#### 67. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L398` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1145) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L398)

```diff
-                 RR._extensions = JR
+                 rr.vAng = Sr
```

#### 68. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L402` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1149) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L402)

```diff
-           }, oR, cR), (0, yR.l)(null, null, MR, {
+           }, cr, Fr), (0, Zr.k)(null, null, Br, {
```

#### 69. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L404` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1151) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L404)

```diff
-             name: "_textureMatrix",
+             name: "wAng",
```

#### 70. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L408-L409` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1155-L1156) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L408-L409)

```diff
-               has: RR => "_textureMatrix" in RR,
-               get: RR => RR._textureMatrix,
+               has: rr => "wAng" in rr,
+               get: rr => rr.wAng,
```

#### 71. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L411` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1158) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L411)

```diff
-                 RR._textureMatrix = JR
+                 rr.wAng = Sr
```

#### 72. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L415` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1162) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L415)

```diff
-           }, PR, IR), (0, yR.l)(null, null, BR, {
+           }, or, br), (0, Zr.k)(null, null, Tr, {
```

#### 73. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L417` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1164) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L417)

```diff
-             name: "_textureMatrixRefraction",
+             name: "uRotationCenter",
```

#### 74. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L421-L422` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1168-L1169) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L421-L422)

```diff
-               has: RR => "_textureMatrixRefraction" in RR,
-               get: RR => RR._textureMatrixRefraction,
+               has: rr => "uRotationCenter" in rr,
+               get: rr => rr.uRotationCenter,
```

#### 75. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L424` → after: `L1171-L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1171-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1171-L1210) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L424)

```diff
-                 RR._textureMatrixRefraction = JR
+                 rr.uRotationCenter = Sr
+               }
+             },
+             metadata: ar
+           }, Jr, Dr), (0, Zr.k)(null, null, vr, {
+             kind: "field",
+             name: "vRotationCenter",
+             static: !1,
+             private: !1,
+             access: {
+               has: rr => "vRotationCenter" in rr,
+               get: rr => rr.vRotationCenter,
+               set: (rr, Sr) => {
+                 rr.vRotationCenter = Sr
+               }
+             },
+ ... (24 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L434` → after: `L1220-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1220-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1220-L1226) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L434)

```diff
-         })(), RR
+         })(), rr.SerializeBuffers = !0, rr.ForceSerializeBuffers = !1, rr.OnTextureLoadErrorObservable = new ar.d, rr._SerializeInternalTextureUniqueId = !1, rr._CubeTextureParser = (rr, Sr, Qr) => {
+           throw (0, Er.l)("CubeTexture")
+         }, rr._CreateMirror = (rr, Sr, Qr, Zr) => {
+           throw (0, Er.l)("MirrorTexture")
+         }, rr._CreateRenderTargetTexture = (rr, Sr, Qr, Zr, Wr) => {
+           throw (0, Er.l)("RenderTargetTexture")
+         }, rr.NEAREST_SAMPLINGMODE = 1, rr.NEAREST_NEAREST_MIPLINEAR = 8, rr.BILINEAR_SAMPLINGMODE = 2, rr.LINEAR_LINEAR_MIPNEAREST = 11, rr.TRILINEAR_SAMPLINGMODE = 3, rr.LINEAR_LINEAR_MIPLINEAR = 3, rr.NEAREST_NEAREST_MIPNEAREST = 4, rr.NEAREST_LINEAR_MIPNEAREST = 5, rr.NEAREST … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L438-L464` → after: `L1230-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1230-L1231) · [Before (L438-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L438-L464)

```diff
-     function CR(RR, JR, GR) {
-       let yR = "";
-       for (const tR of RR) yR += tR;
-       return new WR(yR, JR, null, GR, RR)
-     }
- 
-     function XR(RR, JR) {
-       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-         yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const tR = JR.useDelayedTextureLoading;
-       JR.useDelayedTextureLoading = !1;
-       const uR = new WR(RR, JR, null, !1, null, null, null, void 0, !0, GR, yR);
-       return JR.useDelayedTextureLoading = tR, uR
-     }
- 
-     function MR(RR, JR, GR) {
- ... (11 more removed lines; see GitHub link above)
+     function Kr() {
+       er || (er = !0, (0, fr.e)("BABYLON.Texture", nr), Yr.e._TextureParser = nr.Parse)
```

#### 78. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L468` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1234) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L468)

```diff
-   42722: (RR, JR, GR) => {
+   41882: (rr, Sr, Qr) => {
```

#### 79. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L472-L517` → after: `L1238-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1238-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1238-L1240) · [Before (L472-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L472-L517)

```diff
-     var yR = GR(39914),
-       tR = GR(42011),
-       uR = GR(41449),
-       ZR = GR(41375),
-       qR = GR(41364);
-     let iR = !1;
-     class fR extends tR.f {
-       constructor(RR, JR, GR) {
-         let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           fR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
-           VR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
-           KR = arguments.length > 6 ? arguments[6] : void 0;
-         const wR = !GR || GR._isScene;
-         super(null, wR ? GR : GR?.tL, wR ? !yR : GR, KR, fR, void 0, void 0, void 0, void 0, VR), iR || (iR = !0, ZR.ThinEngine.prototype.createDynamicTexture = function(RR, JR, GR, yR) {
-           const tR = new qR.b(this, 4);
-           return tR.baseWidth = RR, tR.baseHeight = JR, GR && (RR = this.needPOTTextures ? (0, uR.e)(RR, this._caps.maxTextureSize) : RR, JR = this.needPOTTextures ? (0, uR.e)(JR, this._caps.maxTextureSize) : JR), tR.width = RR, tR.height = JR, tR.isReady = !1, tR.generateMipMaps … [truncated]
- ... (30 more removed lines; see GitHub link above)
+     class Zr {
+       constructor(rr, Sr) {
+         this.width = rr, this.height = Sr
```

#### 80. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L519-L520` → after: `L1242-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1242-L1243) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L519-L520)

```diff
-       _recreate(RR) {
-         this._canvas.width = RR.width, this._canvas.height = RR.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(RR.width, RR.height, this._generateMipMaps, this.samplingMode)
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
```

#### 81. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L522-L528` → after: `L1245-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1245-L1246) · [Before (L522-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L522-L528)

```diff
-       scale(RR) {
-         const JR = this.getSize();
-         JR.width *= RR, JR.height *= RR, this._recreate(JR)
-       }
-       scaleTo(RR, JR) {
-         const GR = this.getSize();
-         GR.width = RR, GR.height = JR, this._recreate(GR)
+       getClassName() {
+         return "Size"
```

#### 82. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L530-L531` → after: `L1248-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1248-L1250) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L530-L531)

```diff
-       getContext() {
-         return this._context
+       getHashCode() {
+         let rr = 0 | this.width;
+         return rr = 397 * rr ^ this.height, rr
```

#### 83. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L533-L535` → after: `L1252-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1252-L1253) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L533-L535)

```diff
-       clear(RR) {
-         const JR = this.getSize();
-         RR && (this._context.fillStyle = RR), this._context.clearRect(0, 0, JR.width, JR.height)
+       iH(rr) {
+         this.width = rr.width, this.height = rr.height
```

#### 84. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L537-L540` → after: `L1255-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1255-L1256) · [Before (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L537-L540)

```diff
-       update(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === RR || RR, JR, this._format || void 0, void 0, GR)
+       Hrr(rr, Sr) {
+         return this.width = rr, this.height = Sr, this
```

#### 85. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L542-L553` → after: `L1258-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1258-L1259) · [Before (L542-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L542-L553)

```diff
-       drawText(RR, JR, GR, yR, tR, uR, ZR) {
-         let qR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
-         const iR = this.getSize();
-         if (uR && (this._context.fillStyle = uR, this._context.fillRect(0, 0, iR.width, iR.height)), this._context.font = yR, null === JR || void 0 === JR) {
-           const GR = this._context.measureText(RR);
-           JR = (iR.width - GR.width) / 2
-         }
-         if (null === GR || void 0 === GR) {
-           const RR = parseInt(yR.replace(/\D/g, ""));
-           GR = iR.height / 2 + RR / 3.65
-         }
-         this._context.fillStyle = tR || "", this._context.fillText(RR, JR, GR), qR && this.update(ZR)
+       set(rr, Sr) {
+         return this.Hrr(rr, Sr)
```

#### 86. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L555-L556` → after: `L1261-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1261-L1262) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L555-L556)

```diff
-       dispose() {
-         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
+       multiplyByFloats(rr, Sr) {
+         return new Zr(this.width * rr, this.height * Sr)
```

#### 87. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L559-L563` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1265) · [Before (L559-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L559-L563)

```diff
-         const RR = this.jH();
-         if (!RR) return this;
-         const JR = this.getSize(),
-           GR = new fR(this.name, JR, RR, this._generateMipMaps);
-         return GR.hasAlpha = this.hasAlpha, GR.level = this.level, GR.wrapU = this.wrapU, GR.wrapV = this.wrapV, GR
+         return new Zr(this.width, this.height)
```

#### 88. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L565-L569` → after: `L1267-L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1267-L1268) · [Before (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L565-L569)

```diff
-       serialize() {
-         const RR = this.jH();
-         RR && !RR.isReady() && yR.c.Warn("The scene must be ready before serializing the dynamic texture");
-         const JR = super.serialize();
-         return fR._IsCanvasElement(this._canvas) && (JR.base64String = this._canvas.toDataURL()), JR.invertY = this._invertY, JR.samplingMode = this.samplingMode, JR
+       equals(rr) {
+         return !!rr && (this.width === rr.width && this.height === rr.height)
```

#### 89. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L571-L572` → after: `L1270-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1270-L1271) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L571-L572)

```diff
-       static _IsCanvasElement(RR) {
-         return void 0 !== RR.toDataURL
+       get surface() {
+         return this.width * this.height
```

#### 90. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L574-L586` → after: `L1273-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1273-L1274) · [Before (L574-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L574-L586)

```diff
-       _rebuild() {
-         this.update()
-       }
-     }
-   },
-   42697: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => tR
-     });
-     var yR = GR(42011);
-     class tR extends yR.f {
-       get depth() {
-         return this._depth
+       static Zero() {
+         return new Zr(0, 0)
```

#### 91. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L588-L595` → after: `L1276-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1276-L1277) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L588-L595)

```diff
-       constructor(RR, JR, GR, tR, uR, ZR) {
-         let qR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           iR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           fR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : yR.f.TRILINEAR_SAMPLINGMODE,
-           VR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           KR = arguments.length > 10 ? arguments[10] : void 0,
-           wR = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, ZR, !qR, iR), this.format = uR, this._texture = ZR.ke().createRawTexture2DArray(RR, JR, GR, tR, uR, qR, iR, fR, null, VR, KR ?? 0, wR), this._depth = tR, this.is2DArray = !0
+       add(rr) {
+         return new Zr(this.width + rr.width, this.height + rr.height)
```

#### 92. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L597-L598` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1279-L1280) · [Before (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L597-L598)

```diff
-       update(RR) {
-         this.updateMipLevel(RR, 0)
+       subtract(rr) {
+         return new Zr(this.width - rr.width, this.height - rr.height)
```

#### 93. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L600-L601` → after: `L1282-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1282-L1283) · [Before (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L600-L601)

```diff
-       updateMipLevel(RR, JR) {
-         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, RR, this._texture.format, this._texture.invertY, null, this._texture.type, JR)
+       scale(rr) {
+         return new Zr(this.width * rr, this.height * rr)
```

#### 94. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L603-L604` → after: `L1285-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/292.js#L1285-L1288) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/292.js#L603-L604)

```diff
-       static CreateRGBATexture(RR, JR, GR, yR, uR) {
-         return new tR(RR, JR, GR, yR, 5, uR, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
+       static Lerp(rr, Sr, Qr) {
+         const Wr = rr.width + (Sr.width - rr.width) * Qr,
+           ar = rr.height + (Sr.height - rr.height) * Qr;
+         return new Zr(Wr, ar)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/293.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/293.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663)

#### 1. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L4)

```diff
-   41719: (RR, JR, GR) => {
+   42080: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L6)

```diff
-       e: () => pR
+       c: () => jr,
+       f: () => Ir
```

#### 3. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L8-L747` → after: `L9-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L9-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L9-L24) · [Before (L8-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L8-L747)

```diff
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(38204),
-       ZR = GR(41723),
-       qR = GR(41764),
-       iR = GR(41705),
-       fR = GR(41616);
-     let VR = (() => {
-       var RR;
-       let JR, GR, ZR, qR, VR, KR, wR, rR, eR, aR, LR, nR = [],
-         UR = [],
-         WR = [],
-         AR = [],
-         CR = [],
-         XR = [],
-         MR = [],
- ... (724 more removed lines; see GitHub link above)
+     var Zr = Qr(40246),
+       Wr = Qr(41889),
+       ar = Qr(42057),
+       jr = {};
+     class Ir {
+       constructor(rr) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = rr, this.checkInputs = () => {}
+       }
+       add(rr) {
+         const Sr = rr.getSimpleName();
+         this.attached[Sr] ? Zr.c.Warn("camera input of type " + Sr + " already exists on camera") : (this.attached[Sr] = rr, rr.camera = this.camera, rr.checkInputs && (this.checkInputs = this._addCheckInputs(rr.checkInputs.bind(rr))), this.attachedToElement && rr.attachControl(t … [truncated]
+       }
+       remove(rr) {
+         for (const Sr in this.attached) {
+           const Qr = this.attached[Sr];
+           if (Qr === rr) return Qr.detachControl(), Qr.camera = null, delete this.attached[Sr], void this.rebuildInputCheck()
```

#### 4. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L749-L750` → after: `L26-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L26-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L26-L30) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L749-L750)

```diff
-         getClassName() {
-           return "FreeCameraTouchInput"
+       }
+       removeByType(rr) {
+         for (const Sr in this.attached) {
+           const Qr = this.attached[Sr];
+           Qr.getClassName() === rr && (Qr.detachControl(), Qr.camera = null, delete this.attached[Sr], this.rebuildInputCheck())
```

#### 5. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L752-L753` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L32-L36) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L752-L753)

```diff
-         getSimpleName() {
-           return "touch"
+       }
+       _addCheckInputs(rr) {
+         const Sr = this.checkInputs;
+         return () => {
+           Sr(), rr()
```

#### 6. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L797-L798` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L39-L40) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L797-L798)

```diff
-       addKeyboard() {
-         return this.add(new VR), this
+       attachInput(rr) {
+         this.attachedToElement && rr.attachControl(this.noPreventDefault)
```

#### 7. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L800-L802` → after: `L42-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L42-L47) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L800-L802)

```diff
-       addMouse() {
-         let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         return this._mouseInput || (this._mouseInput = new rR(RR), this.add(this._mouseInput)), this
+       attachElement() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           rr = !ar.d.ForceAttachControlToAlwaysPreventDefault && rr, this.attachedToElement = !0, this.noPreventDefault = rr;
+           for (const Sr in this.attached) this.attached[Sr].attachControl(rr)
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L804-L805` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L49-L52) · [Before (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L804-L805)

```diff
-       removeMouse() {
-         return this._mouseInput && this.remove(this._mouseInput), this
+       detachElement() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const Sr in this.attached) this.attached[Sr].detachControl(), rr && (this.attached[Sr].camera = null);
+         this.attachedToElement = !1
```

#### 9. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L807-L808` → after: `L54-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L54-L59) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L807-L808)

```diff
-       addMouseWheel() {
-         return this._mouseWheelInput || (this._mouseWheelInput = new nR, this.add(this._mouseWheelInput)), this
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const rr in this.attached) {
+           const Sr = this.attached[rr];
+           Sr.checkInputs && (this.checkInputs = this._addCheckInputs(Sr.checkInputs.bind(Sr)))
+         }
```

#### 10. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L810-L811` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L61-L62) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L810-L811)

```diff
-       removeMouseWheel() {
-         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
```

#### 11. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L813-L814` → after: `L64-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L64-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L64-L71) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L813-L814)

```diff
-       addTouch() {
-         return this.add(new UR), this
+       serialize(rr) {
+         const Sr = {};
+         for (const Qr in this.attached) {
+           const rr = this.attached[Qr],
+             Zr = Wr.e.Serialize(rr);
+           Sr[rr.getClassName()] = Zr
+         }
+         rr.inputsmgr = Sr
```

#### 12. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L816-L817` → after: `L73-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L73-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L73-L92) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L816-L817)

```diff
-       clear() {
-         super.clear(), this._mouseInput = null
+       parse(rr) {
+         const Sr = rr.inputsmgr;
+         if (Sr) {
+           this.clear();
+           for (const rr in Sr) {
+             const Qr = jr[rr];
+             if (Qr) {
+               const Zr = Sr[rr],
+                 ar = Wr.e.Parse((() => new Qr), Zr, null);
+               this.add(ar)
+             }
+           }
+         } else
+           for (const Qr in this.attached) {
+             const Sr = jr[this.attached[Qr].getClassName()];
+             if (Sr) {
+ ... (4 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L819-L821` → after: `L94-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L94-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L94-L115) · [Before (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L819-L821)

```diff
-     }(WR = MR.prototype).addDeviceOrientation ?? (WR.addDeviceOrientation = (0, XR.f)("FreeCameraInputsManager", "addDeviceOrientation")), (AR = MR.prototype).addVirtualJoystick ?? (AR.addVirtualJoystick = (0, XR.f)("FreeCameraInputsManager", "addVirtualJoystick")), (CR = MR.prot … [truncated]
-     var BR = GR(41418),
-       lR = GR(38253);
+     }
+   },
+   43001: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => nr
+     });
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(41781),
+       jr = Qr(38560),
+       Ir = Qr(41865),
+       fr = Qr(42310),
+       Er = Qr(38609),
+       pr = Qr(38595),
+       xr = Qr(41889),
+       mr = Qr(41731),
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L824` → after: `L118-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L118-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L118-L125) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L824)

```diff
-         let JR, GR, qR, iR, VR = ZR.f,
+         let Sr, Qr, Er, nr, er, Kr, yr, Br, Tr, vr = Ir.b,
+           Or = [],
+           Lr = [],
+           lr = [],
+           Xr = [],
+           Pr = [],
+           Hr = [],
+           qr = [],
```

#### 15. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L834-L965` → after: `L135-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L135-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L135-L243) · [Before (L834-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L834-L965)

```diff
-           get angularSensibility() {
-             const RR = this.inputs.attached.mouse;
-             return RR ? RR.angularSensibility : 0
-           }
-           set angularSensibility(RR) {
-             const JR = this.inputs.attached.mouse;
-             JR && (JR.angularSensibility = RR)
-           }
-           get keysUp() {
-             const RR = this.inputs.attached.keyboard;
-             return RR ? RR.keysUp : []
-           }
-           set keysUp(RR) {
-             const JR = this.inputs.attached.keyboard;
-             JR && (JR.keysUp = RR)
-           }
- ... (116 more removed lines; see GitHub link above)
+           set boundingBoxSize(rr) {
+             if (this._boundingBoxSize && this._boundingBoxSize.equals(rr)) return;
+             this._boundingBoxSize = rr;
+             const Sr = this.eC();
+             Sr && Sr.markAllMaterialsAsDirty(1)
+           }
+           get boundingBoxSize() {
+             return this._boundingBoxSize
+           }
+           set rotationY(rr) {
+             this._rotationY = rr, this.setReflectionTextureMatrix(jr.d.RotationY(this._rotationY))
+           }
+           get rotationY() {
+             return this._rotationY
+           }
+           get noMipmap() {
+ ... (93 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L968` → after: `L246-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L246-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L246-L311) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L968)

```diff
-             return "FreeCamera"
+             return "CubeTexture"
+           }
+           updateURL(rr) {
+             let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+               Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               fr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
+             this.name && !this.name.startsWith("data:") || (this.name = rr), this.url = rr, Sr && (this._forcedExtension = Sr);
+             const Er = rr.lastIndexOf("."),
+               pr = Sr || (Er > -1 ? rr.substring(Er).toLowerCase() : ""),
+               xr = 0 === pr.indexOf(".dds"),
+               mr = 0 === pr.indexOf(".env"),
+ ... (50 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L972` → after: `L315-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L315-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L315-L337) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L972)

```diff
-           JR = [(0, tR.G)()], GR = [(0, tR.G)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
+           Sr = [(0, Wr.G)()], Qr = [(0, Wr.C)()], Er = [(0, Wr.C)()], nr = [(0, Wr.G)("rotationY")], er = [(0, Wr.G)("files")], Kr = [(0, Wr.G)("forcedExtension")], yr = [(0, Wr.G)("extensions")], Br = [(0, Wr.s)("textureMatrix")], Tr = [(0, Wr.s)("textureMatrixRefraction")], (0, … [truncated]
+             kind: "getter",
+             name: "boundingBoxSize",
+             static: !1,
+             private: !1,
+             access: {
+               has: rr => "boundingBoxSize" in rr,
+               get: rr => rr.boundingBoxSize
+             },
+             metadata: ar
+           }, null, Or), (0, Zr.k)(rr, null, nr, {
+             kind: "setter",
+             name: "rotationY",
+             static: !1,
+             private: !1,
+             access: {
+ ... (7 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L974` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L339) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L974)

```diff
-             name: "ellipsoid",
+             name: "url",
```

#### 19. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L978-L979` → after: `L343-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L343-L344) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L978-L979)

```diff
-               has: RR => "ellipsoid" in RR,
-               get: RR => RR.ellipsoid,
+               has: rr => "url" in rr,
+               get: rr => rr.url,
```

#### 20. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L981` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L346) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L981)

```diff
-                 RR.ellipsoid = JR
+                 rr.url = Sr
```

#### 21. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L985` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L350) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L985)

```diff
-           }, KR, wR), (0, yR.l)(null, null, GR, {
+           }, Lr, lr), (0, Zr.k)(null, null, Qr, {
```

#### 22. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L987` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L352) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L987)

```diff
-             name: "ellipsoidOffset",
+             name: "boundingBoxPosition",
```

#### 23. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L991-L992` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L356-L357) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L991-L992)

```diff
-               has: RR => "ellipsoidOffset" in RR,
-               get: RR => RR.ellipsoidOffset,
+               has: rr => "boundingBoxPosition" in rr,
+               get: rr => rr.boundingBoxPosition,
```

#### 24. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L994` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L359) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L994)

```diff
-                 RR.ellipsoidOffset = JR
+                 rr.boundingBoxPosition = Sr
```

#### 25. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L998` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L363) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L998)

```diff
-           }, rR, eR), (0, yR.l)(null, null, qR, {
+           }, Xr, Pr), (0, Zr.k)(null, null, er, {
```

#### 26. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1000` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L365) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L1000)

```diff
-             name: "checkCollisions",
+             name: "_files",
```

#### 27. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1004-L1005` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L369-L370) · [Before (L1004-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L1004-L1005)

```diff
-               has: RR => "checkCollisions" in RR,
-               get: RR => RR.checkCollisions,
+               has: rr => "_files" in rr,
+               get: rr => rr._files,
```

#### 28. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1007` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L372) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L1007)

```diff
-                 RR.checkCollisions = JR
+                 rr._files = Sr
```

#### 29. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1011` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L376) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L1011)

```diff
-           }, aR, LR), (0, yR.l)(null, null, iR, {
+           }, Hr, qr), (0, Zr.k)(null, null, Kr, {
```

#### 30. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1013` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L378) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L1013)

```diff
-             name: "applyGravity",
+             name: "_forcedExtension",
```

#### 31. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1017-L1018` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L382-L383) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L1017-L1018)

```diff
-               has: RR => "applyGravity" in RR,
-               get: RR => RR.applyGravity,
+               has: rr => "_forcedExtension" in rr,
+               get: rr => rr._forcedExtension,
```

#### 32. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1020` → after: `L385-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L385-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L385-L424) · [Before (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L1020)

```diff
-                 RR.applyGravity = JR
+                 rr._forcedExtension = Sr
+               }
+             },
+             metadata: ar
+           }, Rr, gr), (0, Zr.k)(null, null, yr, {
+             kind: "field",
+             name: "_extensions",
+             static: !1,
+             private: !1,
+             access: {
+               has: rr => "_extensions" in rr,
+               get: rr => rr._extensions,
+               set: (rr, Sr) => {
+                 rr._extensions = Sr
+               }
+             },
+ ... (24 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1033` → after: `L437-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L437-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/293.js#L437-L620) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/293.js#L1033)

```diff
-     gR || (gR = !0, (0, lR.f)("BABYLON.FreeCamera", pR))
+ 
+     function Kr(rr, Sr, Qr) {
+       let Zr = "";
+       for (const Wr of rr) Zr += Wr;
+       return new nr(Zr, Sr, null, Qr, rr)
+     }
+ 
+     function yr(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+         Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const Wr = Sr.useDelayedTextureLoading;
+       Sr.useDelayedTextureLoading = !1;
+       const ar = new nr(rr, Sr, null, !1, null, null, null, void 0, !0, Qr, Zr);
+       return Sr.useDelayedTextureLoading = Wr, ar
+     }
+ 
+ ... (168 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/294.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/294.js` (103 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b)

#### 1. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L4)

```diff
-   41777: (RR, JR, GR) => {
+   42047: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L6)

```diff
-       c: () => wR
+       b: () => Or
```

#### 3. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L8-L16` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L8-L14) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L8-L16)

```diff
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(38204),
-       ZR = GR(38331),
-       qR = GR(41741),
-       iR = GR(41650),
-       fR = GR(38253),
-       VR = GR(41715),
-       KR = GR(41542);
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(38560),
+       jr = Qr(42052),
+       Ir = Qr(42080),
+       fr = Qr(42031),
+       Er = Qr(41950);
```

#### 4. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L18-L19` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L16-L17) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L18-L19)

```diff
-       var RR, JR;
-       let GR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR = qR.d,
+       var rr;
+       let Sr, Qr, jr, Ir, pr, xr, mr, Nr, Ur, tr, hr, zr = [],
```

#### 5. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L41-L125` → after: `L39-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L39-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L39-L76) · [Before (L41-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L41-L125)

```diff
-       return RR = class extends BR {
-         get range() {
-           return this._range
-         }
-         set range(RR) {
-           this._range = RR, this._inverseSquaredRange = 1 / (this.range * this.range)
-         }
-         get intensityMode() {
-           return this._intensityMode
-         }
-         set intensityMode(RR) {
-           this._intensityMode = RR, this._computePhotometricScale()
-         }
-         get radius() {
-           return this._radius
-         }
- ... (69 more removed lines; see GitHub link above)
+       return rr = class {
+         constructor() {
+           this.keysUp = (0, Zr.m)(this, zr, [38]), this.keysUpward = ((0, Zr.m)(this, Yr), (0, Zr.m)(this, nr, [33])), this.keysDown = ((0, Zr.m)(this, er), (0, Zr.m)(this, Kr, [40])), this.keysDownward = ((0, Zr.m)(this, yr), (0, Zr.m)(this, Br, [34])), this.keysLeft = ((0, Zr.m … [truncated]
+         }
+         attachControl(rr) {
+           rr = Er.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.eC(), this._engine = this._scene.MU(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Sr => {
+             const Qr = Sr.event;
+             if (!Qr.metaKey)
+               if (Sr.type === fr.e.KEYDOWN) {
+                 if (-1 !== this.keysUp.indexOf(Qr.keyCode) || -1 !== this.keysDown.indexOf(Qr.keyCode) || -1 !== this.keysLeft.indexOf(Qr.keyCode) || -1 !== this.keysRight.indexOf(Qr.keyCode) || -1 !== this.keysUpward.indexOf(Qr.keyCode) || -1 !== this.keysDownward.indexOf(Qr.key … [truncated]
+                   -1 === this._keys.indexOf(Qr.keyCode) && this._keys.push(Qr.keyCode), rr || Qr.preventDefault()
+                 }
+               } else if (-1 !== this.keysUp.indexOf(Qr.keyCode) || -1 !== this.keysDown.indexOf(Qr.keyCode) || -1 !== this.keysLeft.indexOf(Qr.keyCode) || -1 !== this.keysRight.indexOf(Qr.keyCode) || -1 !== this.keysUpward.indexOf(Qr.keyCode) || -1 !== this.keysDownward.indexOf(Q … [truncated]
+               const Sr = this._keys.indexOf(Qr.keyCode);
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L130-L295` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L80) · [Before (L130-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L130-L295)

```diff
-           return "Light"
-         }
-         toString(RR) {
-           let JR = "Name: " + this.name;
-           if (JR += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
-             for (let GR = 0; GR < this.animations.length; GR++) JR += ", animation[0]: " + this.animations[GR].toString(RR);
-           return JR
-         }
-         _syncParentEnabledState() {
-           super._syncParentEnabledState(), this.oB() || this._resyncMeshes()
-         }
-         JA(RR) {
-           super.JA(RR), this._resyncMeshes()
-         }
-         getShadowGenerator() {
-           let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
- ... (150 more removed lines; see GitHub link above)
+           return "FreeCameraKeyboardMoveInput"
```

#### 7. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L297-L299` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L82-L83) · [Before (L297-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L297-L299)

```diff
-         _reorderLightsInScene() {
-           const RR = this.jH();
-           0 != this._renderPriority && (RR.requireLightSorting = !0), this.jH().sortLightsByPriority()
+         _onLostFocus() {
+           this._keys.length = 0
```

#### 8. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L301-L302` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L85-L86) · [Before (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L301-L302)

```diff
-         areLightTexturesReady() {
-           return !0
+         getSimpleName() {
+           return "keyboard"
```

#### 9. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L304-L305` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L88-L90) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L304-L305)

```diff
-         _isReady() {
-           return !0
+         _getLocalRotation() {
+           const rr = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * rr
```

#### 10. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L307-L311` → after: `L92-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L92-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L92-L96) · [Before (L307-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L307-L311)

```diff
-       }, JR = new WeakMap, (() => {
-         const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(BR[Symbol.metadata] ?? null) : void 0;
-         GR = [(0, tR.k)()], wR = [(0, tR.k)()], rR = [(0, tR.H)()], eR = [(0, tR.H)()], aR = [(0, tR.H)()], LR = [(0, tR.H)()], nR = [(0, tR.H)()], UR = [(0, tR.H)()], WR = [(0, tR.d)("_reorderLightsInScene")], AR = [(0, tR.H)("shadowEnabled")], CR = [(0, tR.H)("excludeWithLayerM … [truncated]
-           kind: "getter",
-           name: "range",
+       }, (() => {
+         const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], jr = [(0, Wr.G)()], Ir = [(0, Wr.G)()], pr = [(0, Wr.G)()], xr = [(0, Wr.G)()], mr = [(0, Wr.G)()], Nr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], tr = [(0, Wr.G)()], hr = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
+           kind: "field",
+           name: "keysUp",
```

#### 11. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L315-L316` → after: `L100-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L100-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L100-L104) · [Before (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L315-L316)

```diff
-             has: RR => "range" in RR,
-             get: RR => RR.range
+             has: rr => "keysUp" in rr,
+             get: rr => rr.keysUp,
+             set: (rr, Sr) => {
+               rr.keysUp = Sr
+             }
```

#### 12. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L319-L321` → after: `L107-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L107-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L107-L109) · [Before (L319-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L319-L321)

```diff
-         }, null, lR), (0, yR.l)(RR, null, LR, {
-           kind: "getter",
-           name: "intensityMode",
+         }, zr, Yr), (0, Zr.k)(null, null, Qr, {
+           kind: "field",
+           name: "keysUpward",
```

#### 13. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L325-L326` → after: `L113-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L113-L117) · [Before (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L325-L326)

```diff
-             has: RR => "intensityMode" in RR,
-             get: RR => RR.intensityMode
+             has: rr => "keysUpward" in rr,
+             get: rr => rr.keysUpward,
+             set: (rr, Sr) => {
+               rr.keysUpward = Sr
+             }
```

#### 14. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L329-L331` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L120-L122) · [Before (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L329-L331)

```diff
-         }, null, lR), (0, yR.l)(RR, null, nR, {
-           kind: "getter",
-           name: "radius",
+         }, nr, er), (0, Zr.k)(null, null, jr, {
+           kind: "field",
+           name: "keysDown",
```

#### 15. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L335-L336` → after: `L126-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L126-L130) · [Before (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L335-L336)

```diff
-             has: RR => "radius" in RR,
-             get: RR => RR.radius
+             has: rr => "keysDown" in rr,
+             get: rr => rr.keysDown,
+             set: (rr, Sr) => {
+               rr.keysDown = Sr
+             }
```

#### 16. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L339-L341` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L133-L135) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L339-L341)

```diff
-         }, null, lR), (0, yR.l)(RR, null, WR, {
-           kind: "accessor",
-           name: "renderPriority",
+         }, Kr, yr), (0, Zr.k)(null, null, Ir, {
+           kind: "field",
+           name: "keysDownward",
```

#### 17. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L345-L346` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L139-L140) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L345-L346)

```diff
-             has: RR => "renderPriority" in RR,
-             get: RR => RR.renderPriority,
+             has: rr => "keysDownward" in rr,
+             get: rr => rr.keysDownward,
```

#### 18. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L348` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L142) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L348)

```diff
-               RR.renderPriority = JR
+               rr.keysDownward = Sr
```

#### 19. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L352` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L146) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L352)

```diff
-         }, cR, PR), (0, yR.l)(null, null, GR, {
+         }, Br, Tr), (0, Zr.k)(null, null, pr, {
```

#### 20. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L354` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L148) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L354)

```diff
-           name: "diffuse",
+           name: "keysLeft",
```

#### 21. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L358-L359` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L152-L153) · [Before (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L358-L359)

```diff
-             has: RR => "diffuse" in RR,
-             get: RR => RR.diffuse,
+             has: rr => "keysLeft" in rr,
+             get: rr => rr.keysLeft,
```

#### 22. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L361` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L155) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L361)

```diff
-               RR.diffuse = JR
+               rr.keysLeft = Sr
```

#### 23. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L365` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L159) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L365)

```diff
-         }, pR, gR), (0, yR.l)(null, null, wR, {
+         }, vr, Or), (0, Zr.k)(null, null, xr, {
```

#### 24. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L367` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L161) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L367)

```diff
-           name: "specular",
+           name: "keysRight",
```

#### 25. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L371-L372` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L165-L166) · [Before (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L371-L372)

```diff
-             has: RR => "specular" in RR,
-             get: RR => RR.specular,
+             has: rr => "keysRight" in rr,
+             get: rr => rr.keysRight,
```

#### 26. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L374` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L168) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L374)

```diff
-               RR.specular = JR
+               rr.keysRight = Sr
```

#### 27. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L378` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L172) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L378)

```diff
-         }, bR, vR), (0, yR.l)(null, null, rR, {
+         }, Lr, lr), (0, Zr.k)(null, null, mr, {
```

#### 28. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L380` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L174) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L380)

```diff
-           name: "falloffType",
+           name: "rotationSpeed",
```

#### 29. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L384-L385` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L178-L179) · [Before (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L384-L385)

```diff
-             has: RR => "falloffType" in RR,
-             get: RR => RR.falloffType,
+             has: rr => "rotationSpeed" in rr,
+             get: rr => rr.rotationSpeed,
```

#### 30. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L387` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L181) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L387)

```diff
-               RR.falloffType = JR
+               rr.rotationSpeed = Sr
```

#### 31. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L391` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L185) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L391)

```diff
-         }, OR, xR), (0, yR.l)(null, null, eR, {
+         }, Xr, Pr), (0, Zr.k)(null, null, Nr, {
```

#### 32. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L393` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L187) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L393)

```diff
-           name: "intensity",
+           name: "keysRotateLeft",
```

#### 33. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L397-L398` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L191-L192) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L397-L398)

```diff
-             has: RR => "intensity" in RR,
-             get: RR => RR.intensity,
+             has: rr => "keysRotateLeft" in rr,
+             get: rr => rr.keysRotateLeft,
```

#### 34. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L400` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L194) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L400)

```diff
-               RR.intensity = JR
+               rr.keysRotateLeft = Sr
```

#### 35. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L404` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L198) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L404)

```diff
-         }, NR, DR), (0, yR.l)(null, null, UR, {
+         }, Hr, qr), (0, Zr.k)(null, null, Ur, {
```

#### 36. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L406` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L200) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L406)

```diff
-           name: "_renderPriority",
+           name: "keysRotateRight",
```

#### 37. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L410-L411` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L204-L205) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L410-L411)

```diff
-             has: RR => "_renderPriority" in RR,
-             get: RR => RR._renderPriority,
+             has: rr => "keysRotateRight" in rr,
+             get: rr => rr.keysRotateRight,
```

#### 38. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L413` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L207) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L413)

```diff
-               RR._renderPriority = JR
+               rr.keysRotateRight = Sr
```

#### 39. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L417` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L211) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L417)

```diff
-         }, HR, oR), (0, yR.l)(null, null, AR, {
+         }, Rr, gr), (0, Zr.k)(null, null, tr, {
```

#### 40. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L419` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L213) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L419)

```diff
-           name: "_shadowEnabled",
+           name: "keysRotateUp",
```

#### 41. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L423-L424` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L217-L218) · [Before (L423-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L423-L424)

```diff
-             has: RR => "_shadowEnabled" in RR,
-             get: RR => RR._shadowEnabled,
+             has: rr => "keysRotateUp" in rr,
+             get: rr => rr.keysRotateUp,
```

#### 42. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L426` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L220) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L426)

```diff
-               RR._shadowEnabled = JR
+               rr.keysRotateUp = Sr
```

#### 43. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L430` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L224) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L430)

```diff
-         }, IR, mR), (0, yR.l)(null, null, CR, {
+         }, Cr, Mr), (0, Zr.k)(null, null, hr, {
```

#### 44. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L432` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L226) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L432)

```diff
-           name: "_excludeWithLayerMask",
+           name: "keysRotateDown",
```

#### 45. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L436-L437` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L230-L231) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L436-L437)

```diff
-             has: RR => "_excludeWithLayerMask" in RR,
-             get: RR => RR._excludeWithLayerMask,
+             has: rr => "keysRotateDown" in rr,
+             get: rr => rr.keysRotateDown,
```

#### 46. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L439` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L233) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L439)

```diff
-               RR._excludeWithLayerMask = JR
+               rr.keysRotateDown = Sr
```

#### 47. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L443` → after: `L237-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L237-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L237-L333) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L443)

```diff
-         }, zR, SR), (0, yR.l)(null, null, XR, {
+         }, Gr, kr), ar && Object.defineProperty(rr, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: ar
+         })
+       })(), rr
+     })();
+     Ir.c.FreeCameraKeyboardMoveInput = pr;
+     var xr = Qr(38595),
+       mr = Qr(42028);
+     let Nr = (() => {
+       var rr;
+       let Sr, Qr, ar = [],
+         jr = [],
+         Ir = [],
+ ... (81 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L445` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L335) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L445)

```diff
-           name: "_includeOnlyWithLayerMask",
+           name: "buttons",
```

#### 49. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L449-L450` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L339-L340) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L449-L450)

```diff
-             has: RR => "_includeOnlyWithLayerMask" in RR,
-             get: RR => RR._includeOnlyWithLayerMask,
+             has: rr => "buttons" in rr,
+             get: rr => rr.buttons,
```

#### 50. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L452` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L342) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L452)

```diff
-               RR._includeOnlyWithLayerMask = JR
+               rr.buttons = Sr
```

#### 51. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L456` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L346) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L456)

```diff
-         }, jR, dR), (0, yR.l)(null, null, MR, {
+         }, ar, jr), (0, Zr.k)(null, null, Qr, {
```

#### 52. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L458` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L348) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L458)

```diff
-           name: "_lightmapMode",
+           name: "angularSensibility",
```

#### 53. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L462-L463` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L352-L353) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L462-L463)

```diff
-             has: RR => "_lightmapMode" in RR,
-             get: RR => RR._lightmapMode,
+             has: rr => "angularSensibility" in rr,
+             get: rr => rr.angularSensibility,
```

#### 54. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L465` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L355) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L465)

```diff
-               RR._lightmapMode = JR
+               rr.angularSensibility = Sr
```

#### 55. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L475-L493` → after: `L365-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L365-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L365-L368) · [Before (L475-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L475-L493)

```diff
-       })(), RR.FALLOFF_DEFAULT = VR.c.FALLOFF_DEFAULT, RR.FALLOFF_PHYSICAL = VR.c.FALLOFF_PHYSICAL, RR.FALLOFF_GLTF = VR.c.FALLOFF_GLTF, RR.FALLOFF_STANDARD = VR.c.FALLOFF_STANDARD, RR.LIGHTMAP_DEFAULT = VR.c.LIGHTMAP_DEFAULT, RR.LIGHTMAP_SPECULAR = VR.c.LIGHTMAP_SPECULAR, RR.LIG … [truncated]
-     })()
-   },
-   41741: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => KR
-     });
-     var yR = GR(41520),
-       tR = GR(38204),
-       uR = GR(41524),
-       ZR = GR(38233),
-       qR = GR(38224),
-       iR = GR(41407),
-       fR = GR(41542);
-     class VR {
-       constructor() {
- ... (3 more removed lines; see GitHub link above)
+       })(), rr
+     })();
+     Ir.c.FreeCameraMouseInput = Nr;
+     var Ur = Qr(42036);
```

#### 56. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L496-L500` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L371) · [Before (L496-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L496-L500)

```diff
-       let JR, GR, KR, wR, rR, eR = [],
-         aR = [],
-         LR = [],
-         nR = [],
-         UR = [],
+       let Sr, Qr, ar, jr = [],
```

#### 57. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L507-L569` → after: `L378-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L378-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L378-L397) · [Before (L507-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L507-L569)

```diff
-         static AddNodeConstructor(RR, JR) {
-           this._NodeConstructors[RR] = JR
-         }
-         static Construct(RR, JR, GR, yR) {
-           const tR = this._NodeConstructors[RR];
-           return tR ? tR(JR, GR, yR) : null
-         }
-         set accessibilityTag(RR) {
-           this._accessibilityTag = RR, this.onAccessibilityTagChangedObservable.notifyObservers(RR)
-         }
-         get accessibilityTag() {
-           return this._accessibilityTag
-         }
-         get doNotSerialize() {
-           return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
-         }
- ... (47 more removed lines; see GitHub link above)
+         constructor() {
+           this.wheelPrecisionX = (0, Zr.m)(this, jr, 3), this.wheelPrecisionY = ((0, Zr.m)(this, Ir), (0, Zr.m)(this, fr, 3)), this.wheelPrecisionZ = ((0, Zr.m)(this, pr), (0, Zr.m)(this, Nr, 3)), this.onChangedObservable = ((0, Zr.m)(this, tr), new xr.d), this._wheelDeltaX = 0,  … [truncated]
+         }
+         attachControl(rr) {
+           rr = Er.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Sr => {
+             if (Sr.type !== mr.b.POINTERWHEEL) return;
+             const Qr = Sr.event,
+               Zr = Qr.deltaMode === Ur.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
+             this._wheelDeltaX += this.wheelPrecisionX * Zr * Qr.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Zr * Qr.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Zr * Qr.deltaZ / this._normalize, Qr.preventDefault && (rr || Qr.pre … [truncated]
+           }, this._observer = this.camera.eC()._inputManager._addCameraPointerObserver(this._wheel, mr.b.POINTERWHEEL)
+         }
+         detachControl() {
+           this._observer && (this.camera.eC()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+         }
+         checkInputs() {
+           this.onChangedObservable.notifyObservers({
+ ... (4 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L572` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L400) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L572)

```diff
-           return "Node"
+           return "BaseCameraMouseWheelInput"
```

#### 59. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L574-L575` → after: `L402-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L402-L403) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L574-L575)

```diff
-         set onDispose(RR) {
-           this._onDisposeObserver && this.YH.remove(this._onDisposeObserver), this._onDisposeObserver = this.YH.add(RR)
+         getSimpleName() {
+           return "mousewheel"
```

#### 60. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L577-L585` → after: `L405-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L405-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L405-L464) · [Before (L577-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L577-L585)

```diff
-         get onEnabledStateChangedObservable() {
-           return this._nodeDataStorage._onEnabledStateChangedObservable
-         }
-         get onEffectiveEnabledStateChangedObservable() {
-           var RR;
-           return (RR = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (RR._onEffectiveEnabledStateChangedObservable = new ZR.b)
-         }
-         get onClonedObservable() {
-           return this._nodeDataStorage._onClonedObservable
+       }, (() => {
+         const Er = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
+           kind: "field",
+           name: "wheelPrecisionX",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "wheelPrecisionX" in rr,
+             get: rr => rr.wheelPrecisionX,
+             set: (rr, Sr) => {
+               rr.wheelPrecisionX = Sr
+             }
+           },
+           metadata: Er
+         }, jr, Ir), (0, Zr.k)(null, null, Qr, {
+ ... (44 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L587-L590` → after: `L466-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L466-L467) · [Before (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L587-L590)

```diff
-         constructor(RR) {
-           let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-             GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-           this._isDirty = !1, this._nodeDataStorage = new VR, this.name = (0, yR.m)(this, eR, void 0), this.id = ((0, yR.m)(this, aR), (0, yR.m)(this, LR, void 0)), this.uniqueId = ((0, yR.m)(this, nR), (0, yR.m)(this, UR, void 0)), this.state = ((0, yR.m)(this, WR), (0, yR.m)(th … [truncated]
+         getClassName() {
+           return "FreeCameraMouseWheelInput"
```

#### 62. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L592-L593` → after: `L469-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L469-L470) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L592-L593)

```diff
-         jH() {
-           return this._scene
+         set wheelXMoveRelative(rr) {
+           null === rr && this._wheelXAction !== hr.MoveRelative || (this._wheelXAction = hr.MoveRelative, this._wheelXActionCoordinate = rr)
```

#### 63. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L595-L596` → after: `L472-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L472-L473) · [Before (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L595-L596)

```diff
-         ke() {
-           return this._scene.ke()
+         get wheelXMoveRelative() {
+           return this._wheelXAction !== hr.MoveRelative ? null : this._wheelXActionCoordinate
```

#### 64. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L598-L602` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L475-L476) · [Before (L598-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L598-L602)

```diff
-         addBehavior(RR) {
-           let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           return -1 !== this._behaviors.indexOf(RR) || (RR.init(), this._scene.isLoading && !JR ? this._scene.onDataLoadedObservable.addOnce((() => {
-             this._behaviors.includes(RR) && RR.attach(this)
-           })) : RR.attach(this), this._behaviors.push(RR)), this
+         set wheelYMoveRelative(rr) {
+           null === rr && this._wheelYAction !== hr.MoveRelative || (this._wheelYAction = hr.MoveRelative, this._wheelYActionCoordinate = rr)
```

#### 65. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L604-L606` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L478-L479) · [Before (L604-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L604-L606)

```diff
-         removeBehavior(RR) {
-           const JR = this._behaviors.indexOf(RR);
-           return -1 === JR || (this._behaviors.splice(JR, 1), RR.detach()), this
+         get wheelYMoveRelative() {
+           return this._wheelYAction !== hr.MoveRelative ? null : this._wheelYActionCoordinate
```

#### 66. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L608-L609` → after: `L481-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L481-L482) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L608-L609)

```diff
-         get behaviors() {
-           return this._behaviors
+         set wheelZMoveRelative(rr) {
+           null === rr && this._wheelZAction !== hr.MoveRelative || (this._wheelZAction = hr.MoveRelative, this._wheelZActionCoordinate = rr)
```

#### 67. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L611-L614` → after: `L484-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L484-L485) · [Before (L611-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L611-L614)

```diff
-         getBehaviorByName(RR) {
-           for (const JR of this._behaviors)
-             if (JR.name === RR) return JR;
-           return null
+         get wheelZMoveRelative() {
+           return this._wheelZAction !== hr.MoveRelative ? null : this._wheelZActionCoordinate
```

#### 68. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L616-L617` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L487-L488) · [Before (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L616-L617)

```diff
-         getWorldMatrix() {
-           return this._currentRenderId !== this._scene.getRenderId() && this.computeWorldMatrix(), this._worldMatrix
+         set wheelXRotateRelative(rr) {
+           null === rr && this._wheelXAction !== hr.RotateRelative || (this._wheelXAction = hr.RotateRelative, this._wheelXActionCoordinate = rr)
```

#### 69. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L619-L620` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L490-L491) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L619-L620)

```diff
-         _getWorldMatrixDeterminant() {
-           return this._worldMatrixDeterminantIsDirty && (this._worldMatrixDeterminantIsDirty = !1, this._worldMatrixDeterminant = this._worldMatrix.determinant()), this._worldMatrixDeterminant
+         get wheelXRotateRelative() {
+           return this._wheelXAction !== hr.RotateRelative ? null : this._wheelXActionCoordinate
```

#### 70. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L622-L623` → after: `L493-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L493-L494) · [Before (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L622-L623)

```diff
-         get worldMatrixFromCache() {
-           return this._worldMatrix
+         set wheelYRotateRelative(rr) {
+           null === rr && this._wheelYAction !== hr.RotateRelative || (this._wheelYAction = hr.RotateRelative, this._wheelYActionCoordinate = rr)
```

#### 71. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L625-L626` → after: `L496-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L496-L497) · [Before (L625-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L625-L626)

```diff
-         _initCache() {
-           this._cache = {}
+         get wheelYRotateRelative() {
+           return this._wheelYAction !== hr.RotateRelative ? null : this._wheelYActionCoordinate
```

#### 72. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L628-L629` → after: `L499-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L499-L500) · [Before (L628-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L628-L629)

```diff
-         updateCache(RR) {
-           !RR && this.isSynchronized() || this._updateCache()
+         set wheelZRotateRelative(rr) {
+           null === rr && this._wheelZAction !== hr.RotateRelative || (this._wheelZAction = hr.RotateRelative, this._wheelZActionCoordinate = rr)
```

#### 73. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L631-L632` → after: `L502-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L502-L503) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L631-L632)

```diff
-         _getActionManagerForTrigger(RR) {
-           return this.parent ? this.parent._getActionManagerForTrigger(RR, !1) : null
+         get wheelZRotateRelative() {
+           return this._wheelZAction !== hr.RotateRelative ? null : this._wheelZActionCoordinate
```

#### 74. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L634-L636` → after: `L505-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L505-L506) · [Before (L634-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L634-L636)

```diff
-         _updateCache(RR) {}
-         _isSynchronized() {
-           return !0
+         set wheelXMoveScene(rr) {
+           null === rr && this._wheelXAction !== hr.MoveScene || (this._wheelXAction = hr.MoveScene, this._wheelXActionCoordinate = rr)
```

#### 75. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L638-L639` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L508-L509) · [Before (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L638-L639)

```diff
-         _markSyncedWithParent() {
-           this._parentNode && (this._parentUpdateId = this._parentNode._childUpdateId)
+         get wheelXMoveScene() {
+           return this._wheelXAction !== hr.MoveScene ? null : this._wheelXActionCoordinate
```

#### 76. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L641-L642` → after: `L511-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L511-L512) · [Before (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L641-L642)

```diff
-         isSynchronizedWithParent() {
-           return !this._parentNode || !this._parentNode._isDirty && this._parentUpdateId === this._parentNode._childUpdateId && this._parentNode.isSynchronized()
+         set wheelYMoveScene(rr) {
+           null === rr && this._wheelYAction !== hr.MoveScene || (this._wheelYAction = hr.MoveScene, this._wheelYActionCoordinate = rr)
```

#### 77. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L644-L645` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L514-L515) · [Before (L644-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L644-L645)

```diff
-         isSynchronized() {
-           return !(this._parentNode && !this.isSynchronizedWithParent()) && this._isSynchronized()
+         get wheelYMoveScene() {
+           return this._wheelYAction !== hr.MoveScene ? null : this._wheelYActionCoordinate
```

#### 78. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L647-L648` → after: `L517-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L517-L518) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L647-L648)

```diff
-         isReady() {
-           return this._nodeDataStorage._isReady
+         set wheelZMoveScene(rr) {
+           null === rr && this._wheelZAction !== hr.MoveScene || (this._wheelZAction = hr.MoveScene, this._wheelZActionCoordinate = rr)
```

#### 79. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L650-L651` → after: `L520-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L520-L521) · [Before (L650-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L650-L651)

```diff
-         hGR(RR) {
-           return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
+         get wheelZMoveScene() {
+           return this._wheelZAction !== hr.MoveScene ? null : this._wheelZActionCoordinate
```

#### 80. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L653-L654` → after: `L523-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L523-L529) · [Before (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L653-L654)

```diff
-         isEnabled() {
-           return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
+         checkInputs() {
+           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
+           this._moveRelative.Srr(0), this._rotateRelative.Srr(0), this._moveScene.Srr(0), this._updateCamera(), this.camera.eC().useRightHandedSystem && (this._moveRelative.z *= -1);
+           const rr = ar.d.Zero();
+           this.camera.getViewMatrix().invertToRef(rr);
+           const Sr = ar.u.Zero();
+           ar.u.TransformNormalToRef(this._moveRelative, rr, Sr), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Sr), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
```

#### 81. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L656-L658` → after: `L531-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L531-L532) · [Before (L656-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L656-L658)

```diff
-         _hasEffectiveEnabledStateObservers() {
-           const RR = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
-           return !!RR && RR.hasObservers()
+         _updateCamera() {
+           this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._whee … [truncated]
```

#### 82. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L660-L667` → after: `L534-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L534-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L534-L546) · [Before (L660-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L660-L667)

```diff
-         _syncParentEnabledState() {
-           const RR = this._hasEffectiveEnabledStateObservers(),
-             JR = RR ? this.isEnabled() : null;
-           if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
-             for (const GR of this._children) GR._syncParentEnabledState();
-           if (RR) {
-             const RR = this.isEnabled();
-             RR !== JR && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(RR)
+         _updateCameraProperty(rr, Sr, Qr) {
+           if (0 === rr) return;
+           if (null === Sr || null === Qr) return;
+           let Zr = null;
+           switch (Sr) {
+             case hr.MoveRelative:
+               Zr = this._moveRelative;
+               break;
+             case hr.RotateRelative:
+               Zr = this._rotateRelative;
+               break;
+             case hr.MoveScene:
+               Zr = this._moveScene
```

#### 83. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L669-L676` → after: `L548-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L548-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L548-L556) · [Before (L669-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L669-L676)

```diff
-         }
-         JA(RR) {
-           if (this._nodeDataStorage._isEnabled === RR) return;
-           const JR = this._hasEffectiveEnabledStateObservers(),
-             GR = JR ? this.isEnabled() : null;
-           if (this._nodeDataStorage._isEnabled = RR, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(RR), JR) {
-             const RR = this.isEnabled();
-             RR !== GR && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(RR)
+           switch (Qr) {
+             case 0:
+               Zr.set(rr, 0, 0);
+               break;
+             case 1:
+               Zr.set(0, rr, 0);
+               break;
+             case 2:
+               Zr.set(0, 0, rr)
```

#### 84. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L679-L775` → after: `L559-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L559-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L559-L569) · [Before (L679-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L679-L775)

```diff
-         isDescendantOf(RR) {
-           return !!this.parent && (this.parent === RR || this.parent.isDescendantOf(RR))
-         }
-         _getDescendants(RR) {
-           let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             GR = arguments.length > 2 ? arguments[2] : void 0;
-           if (this._children)
-             for (let yR = 0; yR < this._children.length; yR++) {
-               const tR = this._children[yR];
-               GR && !GR(tR) || RR.push(tR), JR || tR._getDescendants(RR, !1, GR)
-             }
-         }
-         getDescendants(RR, JR) {
-           const GR = [];
-           return this._getDescendants(GR, RR, JR), GR
-         }
- ... (81 more removed lines; see GitHub link above)
+       }, (() => {
+         const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nr[Symbol.metadata] ?? null) : void 0;
+         Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], jr = [(0, Wr.G)()], Ir = [(0, Wr.G)()], fr = [(0, Wr.G)()], Er = [(0, Wr.G)()], pr = [(0, Wr.G)()], xr = [(0, Wr.G)()], mr = [(0, Wr.G)()], (0, Zr.k)(rr, null, Sr, {
+           kind: "setter",
+           name: "wheelXMoveRelative",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "wheelXMoveRelative" in rr,
+             set: (rr, Sr) => {
+               rr.wheelXMoveRelative = Sr
```

#### 85. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L777-L796` → after: `L571-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L571-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L571-L581) · [Before (L777-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L777-L796)

```diff
-         }
-         getHierarchyBoundingVectors() {
-           let RR, JR, GR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-             yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           this.jH().incrementRenderId(), this.computeWorldMatrix(!0);
-           const uR = this;
-           if (uR.Tm && uR.XM) {
-             const GR = uR.Tm();
-             RR = GR.boundingBox.minimumWorld.clone(), JR = GR.boundingBox.maximumWorld.clone()
-           } else RR = new tR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), JR = new tR.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-           if (GR) {
-             const GR = this.getDescendants(!1);
-             for (const uR of GR) {
-               const GR = uR;
-               if (GR.computeWorldMatrix(!0), yR && !yR(GR)) continue;
-               if (!GR.Tm || 0 === GR.getTotalVertices()) continue;
- ... (4 more removed lines; see GitHub link above)
+           },
+           metadata: ar
+         }, null, Ur), (0, Zr.k)(rr, null, Qr, {
+           kind: "setter",
+           name: "wheelYMoveRelative",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "wheelYMoveRelative" in rr,
+             set: (rr, Sr) => {
+               rr.wheelYMoveRelative = Sr
```

#### 86. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L798-L808` → after: `L583-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L583-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L583-L587) · [Before (L798-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L798-L808)

```diff
-           }
-           return {
-             min: RR,
-             max: JR
-           }
-         }
-       }, (() => {
-         const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         JR = [(0, uR.H)()], GR = [(0, uR.H)()], KR = [(0, uR.H)()], wR = [(0, uR.H)()], rR = [(0, uR.H)()], (0, yR.l)(null, null, JR, {
-           kind: "field",
-           name: "name",
+           },
+           metadata: ar
+         }, null, Ur), (0, Zr.k)(rr, null, jr, {
+           kind: "setter",
+           name: "wheelZMoveRelative",
```

#### 87. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L812-L813` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L591) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L812-L813)

```diff
-             has: RR => "name" in RR,
-             get: RR => RR.name,
+             has: rr => "wheelZMoveRelative" in rr,
```

#### 88. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L815` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L593) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L815)

```diff
-               RR.name = JR
+               rr.wheelZMoveRelative = Sr
```

#### 89. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L819-L821` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L597-L599) · [Before (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L819-L821)

```diff
-         }, eR, aR), (0, yR.l)(null, null, GR, {
-           kind: "field",
-           name: "id",
+         }, null, Ur), (0, Zr.k)(rr, null, Ir, {
+           kind: "setter",
+           name: "wheelXRotateRelative",
```

#### 90. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L825-L826` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L603) · [Before (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L825-L826)

```diff
-             has: RR => "id" in RR,
-             get: RR => RR.id,
+             has: rr => "wheelXRotateRelative" in rr,
```

#### 91. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L828` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L605) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L828)

```diff
-               RR.id = JR
+               rr.wheelXRotateRelative = Sr
```

#### 92. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L832-L834` → after: `L609-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L609-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L609-L647) · [Before (L832-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L832-L834)

```diff
-         }, LR, nR), (0, yR.l)(null, null, KR, {
-           kind: "field",
-           name: "uniqueId",
+         }, null, Ur), (0, Zr.k)(rr, null, fr, {
+           kind: "setter",
+           name: "wheelYRotateRelative",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "wheelYRotateRelative" in rr,
+             set: (rr, Sr) => {
+               rr.wheelYRotateRelative = Sr
+             }
+           },
+           metadata: ar
+         }, null, Ur), (0, Zr.k)(rr, null, Er, {
+           kind: "setter",
+           name: "wheelZRotateRelative",
+           static: !1,
+ ... (23 more added lines; see GitHub link above)
```

#### 93. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L838-L839` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L651) · [Before (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L838-L839)

```diff
-             has: RR => "uniqueId" in RR,
-             get: RR => RR.uniqueId,
+             has: rr => "wheelYMoveScene" in rr,
```

#### 94. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L841` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L653) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L841)

```diff
-               RR.uniqueId = JR
+               rr.wheelYMoveScene = Sr
```

#### 95. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L845` → after: `L657-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L657-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L657-L757) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L845)

```diff
-         }, UR, WR), (0, yR.l)(null, null, wR, {
+         }, null, Ur), (0, Zr.k)(rr, null, mr, {
+           kind: "setter",
+           name: "wheelZMoveScene",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "wheelZMoveScene" in rr,
+             set: (rr, Sr) => {
+               rr.wheelZMoveScene = Sr
+             }
+           },
+           metadata: ar
+         }, null, Ur), ar && Object.defineProperty(rr, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+ ... (85 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L847` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L759) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L847)

```diff
-           name: "state",
+           name: "touchAngularSensibility",
```

#### 97. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L851-L852` → after: `L763-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L763-L764) · [Before (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L851-L852)

```diff
-             has: RR => "state" in RR,
-             get: RR => RR.state,
+             has: rr => "touchAngularSensibility" in rr,
+             get: rr => rr.touchAngularSensibility,
```

#### 98. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L854` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L766) · [Before (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L854)

```diff
-               RR.state = JR
+               rr.touchAngularSensibility = Sr
```

#### 99. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L858` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L770) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L858)

```diff
-         }, AR, CR), (0, yR.l)(null, null, rR, {
+         }, jr, Ir), (0, Zr.k)(null, null, Qr, {
```

#### 100. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L860` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L772) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L860)

```diff
-           name: "metadata",
+           name: "touchMoveSensibility",
```

#### 101. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L864-L865` → after: `L776-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L776-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L776-L777) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L864-L865)

```diff
-             has: RR => "metadata" in RR,
-             get: RR => RR.metadata,
+             has: rr => "touchMoveSensibility" in rr,
+             get: rr => rr.touchMoveSensibility,
```

#### 102. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L867` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L779) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L867)

```diff
-               RR.metadata = JR
+               rr.touchMoveSensibility = Sr
```

#### 103. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L877-L880` → after: `L789-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L789-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/294.js#L789-L1033) · [Before (L877-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/294.js#L877-L880)

```diff
-       })(), RR._AnimationRangeFactory = (RR, JR, GR) => {
-         throw (0, iR.j)("AnimationRange")
-       }, RR._NodeConstructors = {}, RR
-     })()
+       })(), rr
+     })();
+     Ir.c.FreeCameraTouchInput = Yr;
+     var nr, er, Kr, yr = Qr(41769);
+     class Br extends Ir.f {
+       constructor(rr) {
+         super(rr), this._mouseInput = null, this._mouseWheelInput = null
+       }
+       addKeyboard() {
+         return this.add(new pr), this
+       }
+       addMouse() {
+         let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return this._mouseInput || (this._mouseInput = new Nr(rr), this.add(this._mouseInput)), this
+       }
+       removeMouse() {
+ ... (229 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 1. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L4)

```diff
-   42623: (RR, JR, GR) => {
+   42094: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L8-L358` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L8-L16) · [Before (L8-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L8-L358)

```diff
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(38233),
-       ZR = GR(38204),
-       qR = GR(38239),
-       iR = GR(41741),
-       fR = GR(41941),
-       VR = GR(41701),
-       KR = GR(41425),
-       wR = GR(38213);
-     class rR {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
-       }
-       get name() {
-         return "AutoRotation"
- ... (335 more removed lines; see GitHub link above)
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(38560),
+       jr = Qr(38684),
+       Ir = Qr(42060),
+       fr = Qr(41987),
+       Er = Qr(38609),
+       pr = Qr(42044),
+       xr = Qr(41889);
```

#### 3. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L360-L756` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L18-L20) · [Before (L360-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L360-L756)

```diff
-         var RR;
-         let JR, GR = [],
-           uR = [];
-         return RR = class {
-           constructor() {
-             this._currentMousePointerIdDown = -1, this.buttons = (0, yR.m)(this, GR, [0, 1, 2]), this._pointerInput = (0, yR.m)(this, uR)
-           }
-           attachControl(RR) {
-             RR = CR.h.BackCompatCameraNoPreventDefault(arguments);
-             const JR = this.camera.ke(),
-               GR = JR.getInputElement();
-             let yR = 0,
-               tR = null;
-             this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = uR => {
-               const ZR = uR.event,
-                 qR = "touch" === ZR.pointerType;
- ... (381 more removed lines; see GitHub link above)
+       var rr, Sr;
+       let Qr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr = Ir.c,
+         vr = [],
```

#### 4. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L777-L845` → after: `L41-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L41-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L41-L162) · [Before (L777-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L777-L845)

```diff
-       return RR = class {
-         constructor() {
-           this.camera = (0, yR.m)(this, aR), this.keysUp = (0, yR.m)(this, LR, [38]), this.keysDown = ((0, yR.m)(this, nR), (0, yR.m)(this, UR, [40])), this.keysLeft = ((0, yR.m)(this, WR), (0, yR.m)(this, AR, [37])), this.keysRight = ((0, yR.m)(this, XR), (0, yR.m)(this, MR, [39 … [truncated]
-             ctrl: !1,
-             alt: !1
-           }, this._keyboardConditions = {
-             modifiers: this._keyboardModifiers
-           }, this._rotateDirection = new ZR.n, this._panDirection = new ZR.n
-         }
-         get useAltToZoom() {
-           return this._useAltToZoom
-         }
-         set useAltToZoom(RR) {
-           this._useAltToZoom = RR, this._applyUseAltToZoomToInputMap()
-         }
-         _applyUseAltToZoomToInputMap() {
- ... (53 more removed lines; see GitHub link above)
+       return rr = class extends Tr {
+         get range() {
+           return this._range
+         }
+         set range(rr) {
+           this._range = rr, this._inverseSquaredRange = 1 / (this.range * this.range)
+         }
+         get intensityMode() {
+           return this._intensityMode
+         }
+         set intensityMode(rr) {
+           this._intensityMode = rr, this._computePhotometricScale()
+         }
+         get radius() {
+           return this._radius
+         }
+ ... (106 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L847` → after: `L164-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L164-L168) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L847)

```diff
-             0 === GR.x && 0 === GR.y || (GR.normalize().scaleInPlace(tR), JR.handlers.rotate(GR.x, GR.y)), 0 === yR.x && 0 === yR.y || (yR.normalize().scaleInPlace(uR), JR.handlers.pan(yR.x, yR.y))
+             this._shadowGenerators = null
+           }
+           if (this.eC().stopAnimation(this), this._parentContainer) {
+             const rr = this._parentContainer.lights.indexOf(this);
+             rr > -1 && this._parentContainer.lights.splice(rr, 1), this._parentContainer = null
```

#### 6. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L850-L851` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L173-L174) · [Before (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L850-L851)

```diff
-         getClassName() {
-           return "ArcRotateCameraKeyboardMoveInput"
+         getTypeID() {
+           return 0
```

#### 7. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L853-L854` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L176-L177) · [Before (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L853-L854)

```diff
-         getSimpleName() {
-           return "keyboard"
+         getScaledIntensity() {
+           return this._photometricScale * this.intensity
```

#### 8. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L856-L858` → after: `L179-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L179-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L179-L309) · [Before (L856-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L856-L858)

```diff
-       }, (() => {
-         const ZR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], VR = [(0, tR.H)()], KR = [(0, tR.H)()], wR = [(0, tR.H)()], rR = [(0, tR.H)()], eR = [(0, tR.H)()], (0, yR.l)(RR, null, eR, {
+         clone(Sr) {
+           let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           const Zr = rr.GetConstructorFromName(this.getTypeID(), Sr, this.eC());
+           if (!Zr) return null;
+           const Wr = xr.e.Clone(Zr, this);
+           return Sr && (Wr.name = Sr), Qr && (Wr.parent = Qr), Wr.VK(this.isEnabled()), this.onClonedObservable.notifyObservers(Wr), Wr
+         }
+         serialize() {
+           const rr = xr.e.Serialize(this);
+           if (rr.uniqueId = this.uniqueId, rr.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(rr), this.excludedMeshes.length > 0) {
+             rr.excludedMeshesIds = [];
+             for (const Sr of this.excludedMeshes) rr.excludedMeshesIds.push(Sr.id)
+           }
+           if (this.includedOnlyMeshes.length > 0) {
+             rr.includedOnlyMeshesIds = [];
+             for (const Sr of this.includedOnlyMeshes) rr.includedOnlyMeshesIds.push(Sr.id)
+ ... (115 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L860` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L311) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L860)

```diff
-           name: "useAltToZoom",
+           name: "range",
```

#### 10. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L864-L865` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L315-L316) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L864-L865)

```diff
-             has: RR => "useAltToZoom" in RR,
-             get: RR => RR.useAltToZoom
+             has: rr => "range" in rr,
+             get: rr => rr.range
```
