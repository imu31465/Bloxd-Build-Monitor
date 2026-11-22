# Changed — Bundle Modifications Report (Part 019 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `19 / 47` (**307** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 10. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L545-L549` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L787) · [Before (L545-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L545-L549)

```diff
-       var FQ, wQ;
-       const LQ = QQ.trim().split(/\s+/).length,
-         qQ = new Set((null !== (FQ = QQ.match(mF)) && void 0 !== FQ ? FQ : []).map((QQ => QQ.toLowerCase().replace(/s$/, "")))).size,
-         oQ = (null !== (wQ = QQ.match(uF)) && void 0 !== wQ ? wQ : []).length;
-       return qQ >= 2 && oQ >= 2 || LQ >= 30 && oQ >= 3
+       return 255 & kk
```

#### 11. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L553-L554` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L791) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L553-L554)

```diff
-       const FQ = QQ.split(/\n|\|/).map((QQ => QQ.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((QQ => "" !== QQ)).slice(0, 5).map((QQ => QQ.length > 90 ? `${QQ.slice(0,89).trimEnd()}\u2026` : QQ));
-       return FQ.length >= 2 ? FQ : []
+       return kk >>> 8
```

#### 12. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L559-L594` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L795) · [Before (L559-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L559-L594)

```diff
-       return QQ.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
-     }
- 
-     function AF(QQ) {
-       const FQ = new Set;
-       for (const wQ of QQ.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) FQ.add(wQ[1]);
-       for (const wQ of QQ.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) FQ.add(wQ[1]);
-       return [...FQ]
-     }
- 
-     function tF(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const LQ = new Set(FQ),
-         qQ = new Map;
-       for (const HQ of FQ) {
-         var oQ;
- ... (20 more removed lines; see GitHub link above)
+       return kk + 3 & -4
```

#### 13. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L596-L599` → after: `L797-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L797-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L797-L808) · [Before (L596-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L596-L599)

```diff
-     const eF = {
-         functions: "api",
-         callbacks: "callback",
-         "client options": "clientOption"
+     const ak = 16777216,
+       Wk = 20;
+     const tk = 8,
+       Xk = 8,
+       Bk = 16777216,
+       ck = {
+         JobResult: 1,
+         WorkerStarted: 2,
+         WorkerLost: 3,
+         WorldgenResult: 4,
+         WorldgenStarted: 5,
+         WorldgenLost: 6
```

#### 14. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L603-L604` → after: `L811-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L811-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L811-L815) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L603-L604)

```diff
-         type: "string",
-         description: "A few plain words for the creator on what this change does, under 80 characters"
+         Ok: 0,
+         Refused: 1,
+         Trapped: 2,
+         NotHeld: 3,
+         HeapRefused: 4
```

#### 15. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L607-L610` → after: `L819-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L819-L820) · [Before (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L607-L610)

```diff
-         readOnlyHint: !0,
-         destructiveHint: !1,
-         idempotentHint: !0,
-         openWorldHint: !1
+         Lost: 0,
+         Gone: 1
```

#### 16. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L612-L1078` → after: `L822-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L822-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L822-L828) · [Before (L612-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L612-L1078)

```diff
-       cF = [{
-         name: "write_file",
-         title: "Write a file",
-         description: "Replaces a file with new code, or makes a new file",
-         inputSchema: {
-           type: "object",
-           properties: {
-             path: {
-               type: "string",
-               description: "The file's path, e.g. index.js"
-             },
-             why: GF,
-             content: {
-               type: "string",
-               description: "The whole new file"
-             }
- ... (451 more removed lines; see GitHub link above)
+       gk = {
+         Init: 1,
+         Mesh: 2,
+         WorldgenSeed: 3,
+         Generate: 4,
+         Retire: 5
+       };
```

#### 17. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L1081-L1083` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L831) · [Before (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L1081-L1083)

```diff
-       const FQ = cF.find((FQ => FQ.name === QQ));
-       if (!FQ) throw new Error(`No AI Helper tool ${QQ}`);
-       return FQ
+       return kk === gk.WorldgenSeed || kk === gk.Generate
```

#### 18. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L1085-L1088` → after: `L833-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L833-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L833-L905) · [Before (L1085-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L1085-L1088)

```diff
-     const iF = cF.map((QQ => QQ.name)).filter((QQ => "plan" !== QQ && "remember" !== QQ)).join("|"),
-       WF = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       RF = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${iF})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
-       OF = /[.!?](?=[ \t]|[A-Z]|$)|\n|$/g;
+     const Nk = 4,
+       Rk = 99,
+       Jk = {
+         PAIRS_MAX: 16,
+         FIXED_WORDS: 2,
+         PAIR_WORDS: 2,
+         WORDS_MAX: 34
+       },
+       ke = {
+         BYTES: 12,
+         WEBGPU: 1,
+         GL: 2,
+         WEBGPU_LOSSES_MAX: 2,
+         LOST: 0,
+         PIPELINE_FAILED: 1,
+         RESTORE_LOST: 2
+ ... (57 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L1091-L1092` → after: `L908-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L908-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L908-L910) · [Before (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L1091-L1092)

```diff
-       const FQ = QQ.trim();
-       return RF.some((QQ => QQ.test(FQ)))
+       for (const [ek, ik] of Object.entries(Dk.p))
+         if (ik === kk) return ek;
+       return `Unknown${kk}`
```

#### 20. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L1114-L1148` → after: `L914-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L914-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L914-L923) · [Before (L1114-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L1114-L1148)

```diff
-       const FQ = "string" === typeof QQ ? QQ.split(/[./:]/).pop() : void 0;
-       return function(QQ) {
-         return cF.some((FQ => FQ.name === QQ))
-       }(FQ) ? FQ : null
-     }
- 
-     function TF(QQ, FQ) {
-       return wQ => {
-         const LQ = [];
-         let qQ;
-         for (const vQ of wQ.matchAll(QQ)) {
-           var oQ;
-           const QQ = NF(vQ[1]);
-           if (null === QQ) continue;
-           const mQ = {};
-           for (const wQ of vQ[2].matchAll(FQ)) {
- ... (19 more removed lines; see GitHub link above)
+       return {
+         status: kk[Dk.L.Status],
+         lastError: kk[Dk.L.LastError],
+         lastErrorDetail: kk[Dk.L.LastErrorDetail],
+         errorCount: kk[Dk.L.ErrorCount],
+         frameIndex: kk[Dk.L.FrameIndex],
+         tickIndex: kk[Dk.L.TickIndex],
+         renderPending: kk[Dk.L.RenderPending],
+         firstView: kk[Dk.L.FirstView],
+         chunksCancelled: kk[Dk.L.ChunksCancelled]
```

#### 21. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L1153-L1179` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L936) · [Before (L1153-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L1153-L1179)

```diff
-       return QQ.replace(/\\(["\\nt])/g, ((QQ, FQ) => "n" === FQ ? "\n" : "t" === FQ ? "\t" : FQ))
-     }
- 
-     function zF(QQ) {
-       let FQ = null !== QQ && void 0 !== QQ ? QQ : {};
-       if ("string" === typeof FQ) try {
-         FQ = JSON.parse("" === FQ ? "{}" : FQ)
-       } catch {
-         return null
-       }
-       if ("object" !== typeof FQ || null === FQ) return null;
-       const wQ = {};
-       for (const [LQ, qQ] of Object.entries(FQ)) "string" === typeof qQ ? wQ[LQ] = UF.has(LQ) && IF.test(qQ) && !qQ.includes("\n") ? KF(qQ) : qQ : "boolean" === typeof qQ || "number" === typeof qQ ? wQ[LQ] = String(qQ) : "object" !== typeof qQ || null === qQ || Array.isArray(qQ)  … [truncated]
-       return wQ
-     }
- 
- ... (11 more removed lines; see GitHub link above)
+       return "none" !== kk
```

#### 22. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L1183-L1249` → after: `L940-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L940-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L940-L947) · [Before (L1183-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L1183-L1249)

```diff
-       let wQ = QQ;
-       for (const {
-           call: LQ,
-           index: qQ
-         }
-         of FQ) wQ = wQ.slice(0, qQ) + " ".repeat(LQ.source.length) + wQ.slice(qQ + LQ.source.length);
-       return wQ
-     }
-     const aF = new RegExp(`\\b(${cF.map((QQ=>QQ.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
-     const XF = {
-         formatCall: (QQ, FQ) => {
-           const wQ = Object.fromEntries(Object.entries(FQ).filter((QQ => {
-             let [, FQ] = QQ;
-             return void 0 !== FQ
-           })));
-           return `${QQ}(${JSON.stringify(wQ)})`
- ... (51 more removed lines; see GitHub link above)
+       if (!kk) return "none";
+       switch (ek) {
+         case Dk.nb.Drawn:
+           return "drawn";
+         case Dk.nb.Paced:
+           return "paced";
+         default:
+           return "skipped"
```

#### 23. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L1261-L1280` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/89.js#L952) · [Before (L1261-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/89.js#L1261-L1280)

```diff
-       const FQ = [];
-       let wQ = QQ.indexOf("{");
-       for (; - 1 !== wQ;) {
-         const LQ = lF(QQ, wQ);
-         let qQ = [];
-         if (null !== LQ) try {
-           qQ = hF(JSON.parse(QQ.slice(wQ, LQ)))
-         } catch {}
-         if (null !== LQ && qQ.length > 0) {
-           const oQ = QQ.slice(wQ, LQ);
-           FQ.push(...qQ.map((QQ => ({
-             call: {
-               ...QQ,
-               source: oQ
-             },
-             index: wQ
- ... (4 more removed lines; see GitHub link above)
+       return "drawn" === kk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 1. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L4` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L4-L23) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L4)

```diff
-   40660: (QQ, FQ, wQ) => {
+   41041: (kk, ek, ik) => {
+     async function Dk(kk, ek) {
+       const [{
+         clientSideServerUrls: Dk
+       }, {
+         postJsonWithMetricsCookiesAndJsonResponse: fk
+       }, {
+         gameBridge: Sk
+       }] = await Promise.all([Promise.resolve().then((() => ik(1177))), Promise.resolve().then((() => ik(1104))), Promise.resolve().then((() => ik(1893)))]), bk = Sk.latest("connectedGame").websocketUrl;
+       if (!bk) throw new Error("AI Helper: not connected to a game server");
+       const rk = `${Dk.getHttpUrlFromWebSocketUrl(bk)}${kk}`;
+       return await fk(rk, ek, {
+         retries: 0
+       })
+     }
+     ik.r(ek), ik.d(ek, {
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6-L129` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L25-L26) · [Before (L6-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L6-L129)

```diff
-       DOCS_AGENT_PART_CHARS: () => zF.b,
-       DOCS_LLMS_FULL_TXT_PATH: () => zF.f,
-       DOCS_LLMS_TXT_PATH: () => zF.i,
-       DOCS_LLMS_TXT_URL: () => zF.j,
-       ROOT_LLMS_TXT_PATH: () => zF.m,
-       allGamemodeSettings: () => LQ.e,
-       arcadeModeStaticConfig: () => AQ.b,
-       arenaStaticConfig: () => qF,
-       backroomsStaticConfig: () => LF.b,
-       battleBoxStaticConfig: () => vF,
-       bedwarsStaticConfig: () => rQ.b,
-       bloxdAggregatorConfig: () => kQ.e,
-       bloxdPreprodAggregatorConfig: () => vQ.c,
-       bloxdStagingAggregatorConfig: () => mQ.e,
-       bridgeBattleStaticConfig: () => XQ.e,
-       captureTheFlagStaticConfig: () => YF,
- ... (108 more removed lines; see GitHub link above)
+       WorldCodeAiPanel: () => Px,
+       default: () => mx
```

#### 3. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L131` → after: `L28-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L28-L542) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L131)

```diff
-     var LQ = wQ(745);
+     var Dk = ik(60),
+       fk = ik(1021),
+       Sk = ik.n(fk),
+       bk = ik(1066);
+ 
+     function rk(kk) {
+       let {
+         title: ek,
+         children: ik,
+         isCalm: fk = !1,
+         isElsewhere: rk = !1,
+         defaultOpen: Pk = !1,
+         isOpen: mk,
+         onToggle: Mk,
+         className: Kk
+       } = kk;
+ ... (499 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L135-L187` → after: `L546-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L546-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L546-L595) · [Before (L135-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L135-L187)

```diff
-       return null !== (FQ = null === (wQ = (0, LQ.l)(QQ)) || void 0 === wQ ? void 0 : wQ.defaultListedVariation) && void 0 !== FQ ? FQ : QQ
-     }
-     var oQ = wQ(1030),
-       DQ = wQ(1053),
-       kQ = wQ(742),
-       vQ = wQ(736),
-       mQ = wQ(739),
-       uQ = wQ(732),
-       HQ = wQ(723),
-       bQ = wQ(749),
-       YQ = wQ(779),
-       xQ = wQ(753),
-       AQ = wQ(761),
-       tQ = wQ(767),
-       eQ = wQ(773),
-       MQ = wQ(786),
- ... (37 more removed lines; see GitHub link above)
+       const Dk = kk.trim().split(/\s+/).length,
+         fk = new Set((null !== (ek = kk.match(Me)) && void 0 !== ek ? ek : []).map((kk => kk.toLowerCase().replace(/s$/, "")))).size,
+         Sk = (null !== (ik = kk.match(Ke)) && void 0 !== ik ? ik : []).length;
+       return fk >= 2 && Sk >= 2 || Dk >= 30 && Sk >= 3
+     }
+ 
+     function ne(kk) {
+       const ek = kk.split(/\n|\|/).map((kk => kk.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((kk => "" !== kk)).slice(0, 5).map((kk => kk.length > 90 ? `${kk.slice(0,89).trimEnd()}\u2026` : kk));
+       return ek.length >= 2 ? ek : []
+     }
+     var Ue = ik(4813);
+ 
+     function He(kk) {
+       return kk.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
+     }
+ 
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L189-L298` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L597-L599) · [Before (L189-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L189-L298)

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
-       oF = {
-         type: "Arena",
-         title: "Goldrush",
-         description: "Who is the best miner?\nMine gold and deposit it at your spawn, but beware of others killing you",
- ... (94 more removed lines; see GitHub link above)
+         functions: "api",
+         callbacks: "callback",
+         "client options": "clientOption"
```

#### 6. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L301-L317` → after: `L603-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L603-L604) · [Before (L301-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L301-L317)

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

#### 7. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L320-L330` → after: `L607-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L607-L610) · [Before (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L320-L330)

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

#### 8. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L332-L410` → after: `L612-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L612-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L612-L1073) · [Before (L332-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L332-L410)

```diff
-       xF = {
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
-       AF = {
-         type: "Parkour",
-         title: "Parkour Builder",
-         description: "Race through a parkour map with a twist - each round, you get to add a new block to the course!",
-         smallPicture: "uchThumbnail",
- ... (63 more removed lines; see GitHub link above)
+       Ce = [{
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
+             why: Ye,
+             content: {
+               type: "string",
+               description: "The whole new file"
+             }
+ ... (446 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L412-L413` → after: `L1075-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1075-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1075-L1077) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L412-L413)

```diff
-     function OF(QQ, FQ, wQ) {
-       return `<${QQ}><h2>${(0,WF.g)(FQ)}</h2>${wQ}</${QQ}>`
+     function Ae(kk) {
+       var ek;
+       return !0 === (null === (ek = je(kk)._meta) || void 0 === ek ? void 0 : ek.isLookup)
```

#### 10. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L417` → after: `L1081-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1081-L1083) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L417)

```diff
-       return QQ.map((QQ => `<p>${(0,WF.g)(QQ)}</p>`)).join("")
+       const ek = Ce.find((ek => ek.name === kk));
+       if (!ek) throw new Error(`No AI Helper tool ${kk}`);
+       return ek
```

#### 11. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L421` → after: `L1091-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1091-L1092) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L421)

```diff
-       return `<ul>${QQ.map((QQ=>`<li>${QQ}</li>`)).join("")}</ul>`
+       const ek = kk.trim();
+       return Ve.some((kk => kk.test(ek)))
```

#### 12. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L424-L425` → after: `L1095-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1095-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1095-L1108) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L424-L425)

```diff
-     function IF(QQ) {
-       return rF(QQ.map(WF.g))
+     function qe(kk, ek) {
+       const ik = kk.replace(de, "");
+       return ek ? function(kk) {
+         const ek = kk.indexOf("```"),
+           ik = -1 === ek ? kk : kk.slice(0, ek);
+         let Dk = -1,
+           fk = -1,
+           Sk = 0;
+         for (const bk of ik.matchAll(Fe)) {
+           const kk = bk.index + bk[0].length;
+           ue(ik.slice(Sk, kk)) && (Dk = -1 === Dk ? Sk : Dk, fk = kk), Sk = kk
+         }
+         return -1 === fk ? kk : "" !== ik.slice(fk).trim() ? kk.slice(fk).trimStart() : `${kk.slice(0,Dk).trimEnd()}\n${kk.slice(ik.length)}`.trim()
+       }(ik) : "" !== ik.trim() ? ik : kk
```

#### 13. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L428-L433` → after: `L1113-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1113-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1113-L1117) · [Before (L428-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L428-L433)

```diff
-     function UF(QQ, FQ) {
-       return rF(QQ.similarGames.map((QQ => {
-         var wQ, qQ;
-         const oQ = null !== (wQ = null === (qQ = RF.e[QQ]) || void 0 === qQ ? void 0 : qQ.name) && void 0 !== wQ ? wQ : FQ(LQ.e[QQ].title);
-         return `<a href="${(0,WF.g)((0,WF.B)(QQ))}">${(0,WF.g)(oQ)}</a>`
-       })))
+     function Qe(kk) {
+       const ek = "string" === typeof kk ? kk.split(/[./:]/).pop() : void 0;
+       return function(kk) {
+         return Ce.some((ek => ek.name === kk))
+       }(ek) ? ek : null
```

#### 14. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L435-L447` → after: `L1119-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1119-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1119-L1149) · [Before (L435-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L435-L447)

```diff
-     async function NF(QQ, FQ) {
-       const wQ = (0, WF.G)(QQ);
-       if (!wQ) return null;
-       const LQ = await (0, RF.i)(wQ),
-         qQ = (0, RF.g)(LQ),
-         oQ = LQ.faq.map((QQ => {
-           let {
-             question: FQ,
-             answer: wQ
-           } = QQ;
-           return `<h3>${(0,WF.g)(FQ)}</h3><p>${(0,WF.g)(wQ)}</p>`
-         })).join("");
-       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,WF.g)(LQ.name)}</h1><p>${(0,WF.g)(LQ.description)}</p></header>`,OF("section",qQ.whatIs,sF(LQ.whatIs)),OF("section",qQ.howToPlay,sF(LQ.howToPlay)) … [truncated]
+ 
+     function ve(kk, ek) {
+       return ik => {
+         const Dk = [];
+         let fk;
+         for (const Pk of ik.matchAll(kk)) {
+           var Sk;
+           const kk = Qe(Pk[1]);
+           if (null === kk) continue;
+           const mk = {};
+           for (const ik of Pk[2].matchAll(ek)) {
+             var bk, rk;
+             mk[null !== (bk = ik[1]) && void 0 !== bk ? bk : ik[2]] = null !== (rk = ik[3]) && void 0 !== rk ? rk : ik[4]
+           }(null === (Sk = fk) || void 0 === Sk ? void 0 : Sk.call.name) === kk && "" === ik.slice(fk.index + fk.call.source.length, Pk.index).trim() ? Dk[Dk.length - 1] = {
+             call: {
+               name: kk,
+ ... (15 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L474` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1153) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L474)

```diff
-       return QQ || "index"
+       return kk.replace(/\\(["\\nt])/g, ((kk, ek) => "n" === ek ? "\n" : "t" === ek ? "\t" : ek))
```

#### 16. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L478` → after: `L1157-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1157-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1157-L1179) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L478)

```diff
-       return `/docs/${mQ(QQ)}.md`
+       let ek = null !== kk && void 0 !== kk ? kk : {};
+       if ("string" === typeof ek) try {
+         ek = JSON.parse("" === ek ? "{}" : ek)
+       } catch {
+         return null
+       }
+       if ("object" !== typeof ek || null === ek) return null;
+       const ik = {};
+       for (const [Dk, fk] of Object.entries(ek)) "string" === typeof fk ? ik[Dk] = ze.has(Dk) && Ie.test(fk) && !fk.includes("\n") ? Ee(fk) : fk : "boolean" === typeof fk || "number" === typeof fk ? ik[Dk] = String(fk) : "object" !== typeof fk || null === fk || Array.isArray(fk)  … [truncated]
+       return ik
+     }
+ 
+     function ae(kk, ek) {
+       let ik = 0,
+         Dk = !1;
+       for (let fk = ek; fk < kk.length; fk++) {
+ ... (7 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L482` → after: `L1183-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1183-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1183-L1189) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L482)

```diff
-       return `/docs/${mQ(QQ)}/${FQ+1}.md`
+       let ik = kk;
+       for (const {
+           call: Dk,
+           index: fk
+         }
+         of ek) ik = ik.slice(0, fk) + " ".repeat(Dk.source.length) + ik.slice(fk + Dk.source.length);
+       return ik
```

#### 18. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L484` → after: `L1191-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1191-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1191-L1206) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L484)

```diff
-     const bQ = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
+     const te = new RegExp(`\\b(${Ce.map((kk=>kk.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const Xe = {
+         formatCall: (kk, ek) => {
+           const ik = Object.fromEntries(Object.entries(ek).filter((kk => {
+             let [, ek] = kk;
+             return void 0 !== ek
+           })));
+           return `${kk}(${JSON.stringify(ik)})`
+         },
+         declareTools: kk => kk,
+         callStyle: "Make each call with function calling, its code in full: never write a call, or the code it carries, in your answer's words or in a code fence.",
+         fileResult: (kk, ek, ik) => `<file path="${kk}"${ik?' open_in_editor="true"':""}>\n${ek}\n</file>`,
+         editFailure: (kk, ek) => `${kk} failed: ${ek}`,
+         lookupResult: (kk, ek, ik) => `${kk} ${ek}:\n${ik}`
+       },
+       Be = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;
```

#### 19. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L487-L490` → after: `L1209-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1209-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1209-L1386) · [Before (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L487-L490)

```diff
-       const FQ = bQ.exec(QQ);
-       return null === FQ ? null : {
-         name: FQ[1],
-         part: void 0 === FQ[2] ? null : Number(FQ[2])
+       const ek = [];
+       for (const fk of kk.matchAll(Be)) {
+         const Sk = Qe(fk[1]),
+           bk = fk.index + fk[0].length,
+           rk = ae(kk, bk),
+           Pk = null === rk ? null : he(kk.slice(bk, rk));
+         if (null !== Sk && null !== rk && null !== Pk) {
+           var ik, Dk;
+           const bk = null !== (ik = null === (Dk = kk.slice(rk).match(/^\s*<\|call\|>/)) || void 0 === Dk ? void 0 : Dk[0]) && void 0 !== ik ? ik : "";
+           ek.push({
+             call: {
+               name: Sk,
+               args: Pk,
+               source: kk.slice(fk.index, rk + bk.length)
+             },
+             index: fk.index
+ ... (162 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L493` → after: `L1389-L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1389-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1389-L1407) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L493)

```diff
-     const xQ = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+ 
+     function xi(kk, ek) {
+       const ik = [];
+       for (const Dk of function(kk) {
+           const ek = ii(kk),
+             ik = ei.filter((kk => kk !== ek));
+           return [ki[ek], ...kk === ek ? [] : [ki[kk]], ...ik.map((kk => ki[kk])), ce, oe]
+         }(ek)) ik.push(...Dk(We(kk, ik)));
+       return ik.map((kk => {
+         let {
+           call: ek
+         } = kk;
+         return ek
+       }))
+     }
+ 
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L496-L499` → after: `L1410-L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1410-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1410-L1432) · [Before (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L496-L499)

```diff
-       const FQ = xQ.exec(QQ);
-       if (null === FQ) return null;
-       const [, wQ = "", LQ] = FQ;
-       return void 0 === LQ ? uQ(wQ) : HQ(wQ, Number(LQ) - 1)
+       return function(kk) {
+         const ek = [...kk.matchAll(ri)],
+           ik = [];
+         let Dk = 0;
+         for (; Dk < ek.length;) {
+           const fk = ek[Dk],
+             Sk = ek.at(Dk + 1);
+           void 0 !== Sk && "```" === Sk[0] ? (Pi.test(kk.slice(fk.index + fk[0].length, Sk.index)) && ik.push({
+             from: fk.index,
+             to: Sk.index + Sk[0].length
+           }), Dk += 2) : (ik.push({
+             from: fk.index,
+             to: fk.index + fk[0].length
+           }), Dk++)
+         }
+         let fk = kk;
+ ... (7 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L503` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/90.js#L1436) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/90.js#L503)

```diff
-       return `/docsHtml/${mQ(QQ)}.html`
+       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(kk)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 1. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L3)

```diff
- export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 91];
+ export const ids = [91];
```

#### 2. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5-L196` → after: `L4-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L4-L131) · [Before (L5-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L5-L196)

```diff
-   39080: () => {
-     "undefined" === typeof window || window.global || (window.global = window.globalThis || {})
-   },
-   39095: (QQ, FQ, wQ) => {
-     var LQ = [],
-       qQ = [],
-       oQ = [],
-       DQ = [],
-       kQ = [],
-       vQ = [],
-       mQ = [],
-       uQ = [],
-       HQ = [],
-       bQ = [],
-       YQ = [],
-       xQ = [],
- ... (176 more removed lines; see GitHub link above)
+   40842: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       DOCS_AGENT_PART_CHARS: () => he.d,
+       DOCS_LLMS_FULL_TXT_PATH: () => he.g,
+       DOCS_LLMS_TXT_PATH: () => he.i,
+       DOCS_LLMS_TXT_URL: () => he.j,
+       ROOT_LLMS_TXT_PATH: () => he.n,
+       allGamemodeSettings: () => Dk.d,
+       arcadeModeStaticConfig: () => Hk.b,
+       arenaStaticConfig: () => Se,
+       backroomsStaticConfig: () => fe.d,
+       battleBoxStaticConfig: () => me,
+       bedwarsStaticConfig: () => uk.c,
+       bloxdAggregatorConfig: () => rk.e,
+       bloxdPreprodAggregatorConfig: () => Pk.c,
+       bloxdStagingAggregatorConfig: () => mk.d,
+ ... (112 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L199-L289` → after: `L134-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L134-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L134-L410) · [Before (L199-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L199-L289)

```diff
-       const FQ = (null !== QQ && void 0 !== QQ ? QQ : "").match(/-?\d+(?:\.\d+)?/g);
-       return FQ && FQ.length >= 3 ? [Number(FQ[0]), Number(FQ[1]), Number(FQ[2])] : null
-     }
- 
-     function DQ(QQ, FQ) {
-       return QQ === FQ ? String(QQ) : `${QQ}-${FQ}`
-     }
- 
-     function kQ(QQ, FQ, wQ, LQ) {
-       const qQ = [];
-       let oQ = new Map;
-       for (let DQ = QQ[2]; DQ < QQ[2] + FQ; DQ++) {
-         const kQ = new Map;
-         let vQ = QQ[0];
-         for (; vQ < QQ[0] + FQ;) {
-           const qQ = LQ(vQ, wQ, DQ);
- ... (75 more removed lines; see GitHub link above)
+       var ek, ik;
+       return null !== (ek = null === (ik = (0, Dk.l)(kk)) || void 0 === ik ? void 0 : ik.defaultListedVariation) && void 0 !== ek ? ek : kk
+     }
+     var Sk = ik(987),
+       bk = ik(1012),
+       rk = ik(736),
+       Pk = ik(730),
+       mk = ik(733),
+       Mk = ik(721),
+       Kk = ik(718),
+       xk = ik(747),
+       nk = ik(769),
+       Uk = ik(751),
+       Hk = ik(755),
+       wk = ik(760),
+       lk = ik(767),
+ ... (261 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L291-L294` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L412-L413) · [Before (L291-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L291-L294)

```diff
-     function YQ(QQ) {
-       for (const FQ of QQ)
-         if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(FQ)) return FQ;
-       return null
+     function Fe(kk, ek, ik) {
+       return `<${kk}><h2>${(0,de.h)(ek)}</h2>${ik}</${kk}>`
```

#### 5. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L298-L312` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L417) · [Before (L298-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L298-L312)

```diff
-       return null !== YQ(bQ(QQ))
-     }
-     var AQ = wQ(1107);
-     const tQ = [{
-       id: "webm",
-       label: "WebM",
-       description: "Usually less screen tearing, but may not play in all media players."
-     }, {
-       id: "mp4",
-       label: "MP4",
-       description: "Works in more players, but may show graphical glitches on some devices."
-     }];
- 
-     function eQ() {
-       return xQ("webm") ? "webm" : xQ("mp4") ? "mp4" : "webm"
+       return kk.map((kk => `<p>${(0,de.h)(kk)}</p>`)).join("")
```

#### 6. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L316-L346` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L421) · [Before (L316-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L316-L346)

```diff
-       let {
-         cards: FQ
-       } = QQ;
-       return (0, AQ.jsx)("div", {
-         className: "ReplayVideoExportOptionCards",
-         children: FQ.map((QQ => (0, AQ.jsxs)("div", {
-           className: "ReplayVideoExportOptionColumn",
-           children: [(0, AQ.jsx)("div", {
-             className: kQ()("ReplayVideoExportOptionCard", {
-               Selected: QQ.selected,
-               Disabled: QQ.disabled
-             }),
-             onClick: () => {
-               QQ.disabled || QQ.onSelect()
-             },
-             children: (0, AQ.jsxs)("div", {
- ... (15 more removed lines; see GitHub link above)
+       return `<ul>${kk.map((kk=>`<li>${kk}</li>`)).join("")}</ul>`
```

#### 7. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L469-L503` → after: `L424-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L424-L425) · [Before (L469-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L469-L503)

```diff
-     function iQ() {
-       return function() {
-         const QQ = (0, CQ.b)();
-         for (const {
-             group: FQ,
-             dataAttr: wQ
-           }
-           of cQ.g)
-           if (wQ && QQ[FQ]) return !0;
-         return !1
-       }() ? function() {
-         var QQ;
-         return "function" === typeof(null === (QQ = navigator.mediaDevices) || void 0 === QQ ? void 0 : QQ.getDisplayMedia)
-       }() ? {
-         canIncludeUi: !0,
-         includeUiDisabledReason: null
- ... (19 more removed lines; see GitHub link above)
+     function Ie(kk) {
+       return qe(kk.map(de.h))
```

#### 8. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L508-L509` → after: `L428-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L428-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L428-L433) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L508-L509)

```diff
-     function sQ(QQ) {
-       QQ.holdInput(!1), (0, RQ.e)(!1)
+     function ze(kk, ek) {
+       return qe(kk.similarGames.map((kk => {
+         var ik, fk;
+         const Sk = null !== (ik = null === (fk = Ve.d[kk]) || void 0 === fk ? void 0 : fk.name) && void 0 !== ik ? ik : ek(Dk.d[kk].title);
+         return `<a href="${(0,de.h)((0,de.y)(kk))}">${(0,de.h)(Sk)}</a>`
+       })))
```

#### 9. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L511-L524` → after: `L435-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L435-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L435-L440) · [Before (L511-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L511-L524)

```diff
-     async function rQ(QQ) {
-       var FQ, wQ;
-       if ((0, RQ.d)() || OQ) return;
-       const oQ = QQ();
-       if (!oQ) return;
-       OQ = !0;
-       let DQ = null;
-       const kQ = oQ.playbackMarkInTick,
-         {
-           canIncludeUi: vQ,
-           includeUiDisabledReason: mQ
-         } = iQ();
-       try {
-         DQ = await async function(QQ) {
+     async function Qe(kk, ek) {
+       const ik = (0, de.E)(kk);
+       if (!ik) return null;
+       const Dk = await (0, Ve.g)(ik),
+         fk = (0, Ve.f)(Dk),
+         Sk = Dk.faq.map((kk => {
```

#### 10. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L526-L528` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L442-L443) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L526-L528)

```diff
-             hasPlaybackMark: FQ,
-             canIncludeUi: wQ,
-             includeUiDisabledReason: LQ
+             question: ek,
+             answer: ik
```

#### 11. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L530-L750` → after: `L445-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L445-L447) · [Before (L530-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L530-L750)

```diff
-           const oQ = {
-               options: null
-             },
-             DQ = qQ.NotificationProvider.showCustomPopup({
-               body: QQ => (0, AQ.jsx)(GQ, {
-                 hasPlaybackMark: FQ,
-                 canIncludeUi: wQ,
-                 includeUiDisabledReason: LQ,
-                 selectionRef: oQ,
-                 closePopup: QQ
-               }),
-               disableExitButton: !0,
-               disablePressBackgroundToClose: !0,
-               unlockPointerKey: "replayVideoExportOptions"
-             });
-           return "notificationTornDown" === await DQ.getResult() ? null : oQ.options
- ... (205 more removed lines; see GitHub link above)
+           return `<h3>${(0,de.h)(ek)}</h3><p>${(0,de.h)(ik)}</p>`
+         })).join("");
+       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,de.h)(Dk.name)}</h1><p>${(0,de.h)(Dk.description)}</p></header>`,Fe("section",fk.whatIs,ue(Dk.whatIs)),Fe("section",fk.howToPlay,ue(Dk.howToPlay)) … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L753` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L453) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L753)

```diff
-   39126: (QQ, FQ, wQ) => {
+   4759: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L755` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L455) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L755)

```diff
-       c: () => bQ,
+       B: () => nk,
```

#### 14. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L757` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L457-L458) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L757)

```diff
-       h: () => mQ,
+       g: () => Pk,
+       i: () => Sk,
```

#### 15. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L759` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L460) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L759)

```diff
-       m: () => vQ,
+       n: () => rk,
```

#### 16. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L761` → after: `L462-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L462-L463) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L761)

```diff
-       u: () => uQ,
+       r: () => Mk,
+       t: () => Kk,
```

#### 17. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L764-L2025` → after: `L466-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L466-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L466-L471) · [Before (L764-L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L764-L2025)

```diff
-     var LQ = wQ(1911),
-       qQ = wQ(22),
-       oQ = wQ(1919);
-     const DQ = (0, oQ.n)((function() {
-         var QQ, FQ, wQ, qQ;
-         return {
-           health: null !== (QQ = LQ.b.get("_health")) && void 0 !== QQ ? QQ : null,
-           maxHealth: null !== (FQ = LQ.b.get("_totalMaxHealth")) && void 0 !== FQ ? FQ : null,
-           shield: null !== (wQ = LQ.b.get("_shield")) && void 0 !== wQ ? wQ : null,
-           maxShield: null !== (qQ = LQ.b.get("maxShield")) && void 0 !== qQ ? qQ : null
-         }
-       }), [], (0, oQ.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
-       kQ = [{
-         canFly: !1,
-         flying: !1
-       }, {
- ... (1246 more removed lines; see GitHub link above)
+     var Dk = ik(1557);
+     const fk = 24e3,
+       Sk = "/docs/llms.txt",
+       bk = `${Dk.c}${Sk}`,
+       rk = "/llms.txt",
+       Pk = "/docs/llms-full.txt";
```

#### 18. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2028-L2034` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L474) · [Before (L2028-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L2028-L2034)

```diff
-       if (Number.isNaN(QQ)) return "NaN";
-       if (!Number.isFinite(QQ)) return QQ > 0 ? "inf" : "-inf";
-       if (0 === QQ) return Object.is(QQ, -0) ? "-0.0" : "0.0";
-       const FQ = Math.abs(QQ);
-       if (FQ >= 1e16 || FQ < 1e-4) return QQ.toExponential().replace("e+", "e");
-       const wQ = String(QQ);
-       return wQ.includes(".") ? wQ : wQ + ".0"
+       return kk || "index"
```

#### 19. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2038-L2040` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L478) · [Before (L2038-L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L2038-L2040)

```diff
-       const FQ = ["dir", "base", "max", "left"][QQ[0]],
-         wQ = [QQ[2], QQ[3], QQ[4]].map(Ww).join(", ");
-       return "voxel sweep rejected a move it would never finish: " + FQ + "[" + QQ[1] + "] of [" + wQ + "]"
+       return `/docs/${mk(kk)}.md`
```

#### 20. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2044` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L482) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L2044)

```diff
-       return QQ ? FQ : 0
+       return `/docs/${mk(kk)}/${ek+1}.md`
```

#### 21. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2048-L2067` → after: `L487-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L487-L490) · [Before (L2048-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L2048-L2067)

```diff
-       const FQ = Ow(QQ.vV, 1) | Ow(QQ.oV, 2) | Ow(QQ.preventFallOffEdge, 4) | Ow(QQ.alwaysApplyHorizFriction, 8) | Ow(QQ.slideOnCollision, 16) | Ow(QQ.rolledBackLastTick, 32) | Ow(QQ.depenetrate, 64) | Ow(QQ.inFluid, ow) | Ow(QQ.ob, Dw) | Ow(QQ.kb, 512) | Ow(QQ.wakeInFluid, vw),
-         wQ = QQ.mV;
-       return null === wQ ? FQ : "number" === typeof wQ ? FQ | kw : null
-     }
- 
-     function rw(QQ, FQ, wQ, LQ, qQ) {
-       const oQ = Hw(wQ),
-         DQ = bw(wQ),
-         kQ = QQ[oQ + Qw];
-       LQ.ratioInFluid = QQ[oQ + 8], LQ._sleepFrameCount = QQ[oQ + 9];
-       const vQ = LQ.resting;
-       vQ[0] = QQ[oQ + dF], vQ[1] = QQ[oQ + dF + 1], vQ[2] = QQ[oQ + dF + 2], Iw(LQ, "inFluid", kQ & ow), Iw(LQ, "rolledBackLastTick", 32 & kQ);
-       const mQ = LQ.hH;
-       if (mQ) {
-         const {
-           base: QQ,
- ... (4 more removed lines; see GitHub link above)
+       const ek = xk.exec(kk);
+       return null === ek ? null : {
+         name: ek[1],
+         part: void 0 === ek[2] ? null : Number(ek[2])
```

#### 22. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2083-L2085` → after: `L496-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L496-L499) · [Before (L2083-L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L2083-L2085)

```diff
-       var FQ;
-       const wQ = Nw(QQ);
-       return 65536 * (null !== (FQ = QQ.cV) && void 0 !== FQ ? FQ : 0) + wQ
+       const ek = Uk.exec(kk);
+       if (null === ek) return null;
+       const [, ik = "", Dk] = ek;
+       return void 0 === Dk ? Mk(ik) : Kk(ik, Number(Dk) - 1)
```

#### 23. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2089-L35321` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/91.js#L503) · [Before (L2089-L35321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/91.js#L2089-L35321)

```diff
-       return Math.max(QQ.LY.length, QQ.FY.length)
-     }
- 
-     function Tw(QQ, FQ) {
-       const wQ = new Uint8Array(QQ + 1),
-         LQ = new Uint32Array(QQ + 2),
-         qQ = [];
-       for (let oQ = 0; oQ <= QQ; oQ++) {
-         const QQ = FQ(oQ);
-         if (wQ[oQ] = Kw(QQ), Array.isArray(QQ)) {
-           if (QQ.length % 6 !== 0) return null;
-           for (const FQ of QQ) {
-             if ("number" !== typeof FQ) return null;
-             qQ.push(FQ)
-           }
-         }
- ... (33217 more removed lines; see GitHub link above)
+       return `/docsHtml/${mk(kk)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 1. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L2)

```diff
- export const ids = [92];
+ export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 92, 135];
```

#### 2. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4-L9` → after: `L5-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L5-L439) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L4-L9)

```diff
-   4694: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       Howl: () => qQ.Howl,
-       Howler: () => qQ.Howler,
-       musicOutput: () => xQ,
-       readyAudioContext: () => AQ
+   38823: (kk, ek, ik) => {
+     var Dk = {
+       "./bedwars/bedwarsClient": 38832,
+       "./bridgeBattle/bridgeBattleClient": 38838,
+       "./buildAFactory2/buildAFactory2Client": 38073,
+       "./classic/classicClient": 38847,
+       "./clutch/clutchClient": 38850,
+       "./containmentBreach/containmentBreachClient": 38859,
+       "./cooking/cookingClient": 38993,
+       "./defusal/defusalClient": 38996,
+       "./frontline/frontlineClient": 39003,
+       "./goalRush/goalRushClient": 39006,
+       "./luckyBedwars/luckyBedwarsClient": 39009,
+       "./ninetyNineNights/ninetyNineNightsClient": 39012,
+       "./oneBlock/oneBlockClient": 39018,
+       "./plots/plotsClient": 39021,
+ ... (419 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11-L13` → after: `L441-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L441-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L441-L631) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L11-L13)

```diff
-     var LQ, qQ = wQ(4702),
-       oQ = wQ(4494);
-     const DQ = qQ.Howler;
+     var Dk = ik(1706),
+       fk = ik(1333),
+       Sk = ik(60),
+       bk = ik(1021),
+       rk = ik.n(bk),
+       Pk = ik(1410),
+       mk = ik(99);
+     const Mk = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
+       Kk = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];
+ 
+     function xk(kk) {
+       return "webm" === kk ? Mk : Kk
+     }
+ 
+     function nk(kk) {
+       for (const ek of kk)
+ ... (175 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L17-L20` → after: `L677-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L677-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L677-L686) · [Before (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L17-L20)

```diff
-       if (DQ.ctx || !DQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, oQ.i)()) return;
-       const wQ = navigator.audioSession;
-       let LQ;
-       "auto" === (null === wQ || void 0 === wQ ? void 0 : wQ.type) && (wQ.type = "ambient");
+       if ((0, dk.c)() || Vk) return;
+       const Sk = kk();
+       if (!Sk) return;
+       Vk = !0;
+       let bk = null;
+       const rk = Sk.playbackMarkInTick,
+         {
+           canIncludeUi: Pk,
+           includeUiDisabledReason: mk
+         } = jk();
```

#### 5. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22-L23` → after: `L688-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L688-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L688-L713) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L22-L23)

```diff
-         LQ = new AudioContext({
-           sampleRate: 44100
+         bk = await async function(kk) {
+           let {
+             hasPlaybackMark: ek,
+             canIncludeUi: ik,
+             includeUiDisabledReason: Dk
+           } = kk;
+           const Sk = {
+               options: null
+             },
+             bk = fk.NotificationProvider.showCustomPopup({
+               body: kk => (0, Hk.jsx)(yk, {
+                 hasPlaybackMark: ek,
+                 canIncludeUi: ik,
+                 includeUiDisabledReason: Dk,
+                 selectionRef: Sk,
+                 closePopup: kk
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25-L26` → after: `L715-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L715-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L715-L842) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L25-L26)

```diff
-       } catch {
-         return
+       } finally {
+         Vk = !1
+       }
+       if (!bk) return;
+       const Mk = null !== (ek = null === (ik = Sk.startFailure) || void 0 === ik ? void 0 : ik.call(Sk)) && void 0 !== ek ? ek : null;
+       if (null !== Mk) return void fk.NotificationProvider.showAlertPopup({
+         title: "Video export failed",
+         subtitle: Mk
+       });
+       if (! function(kk) {
+           return !(0, dk.c)() && ((0, dk.f)(!0), kk.holdInput(!0), !0)
+         }(Sk)) return;
+       let Kk = null;
+       try {
+         Kk = await sk(bk.includeUi, (() => Sk.canvas()), Sk.uF)
+       } catch (qk) {
+ ... (112 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L31-L44` → after: `L845-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L845-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L845-L856) · [Before (L31-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L31-L44)

```diff
-     DQ._mobileUnloaded = !0;
-     const vQ = DQ.volume.bind(qQ.Howler);
-     DQ.volume = function() {
-       return kQ(), vQ(...arguments)
-     };
-     const mQ = DQ.mute.bind(qQ.Howler);
-     DQ.mute = QQ => (kQ(), mQ(QQ));
-     const uQ = qQ.Howl.prototype,
-       HQ = uQ.init;
-     uQ.init = function(QQ) {
-       return kQ(), HQ.call(this, QQ)
-     };
-     let bQ = 0;
-     const YQ = null === (LQ = DQ._autoSuspend) || void 0 === LQ ? void 0 : LQ.bind(qQ.Howler);
+   },
+   4791: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Mk,
+       f: () => Kk
+     });
+     var Dk = ik(4799),
+       fk = ik(22);
+     const Sk = .25,
+       bk = .85,
+       rk = .02,
+       Pk = .01;
```

#### 8. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L46-L47` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L858) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L46-L47)

```diff
-     function xQ() {
-       AQ();
+     function mk(kk, ek, ik, Dk, fk, Sk, rk) {
```

#### 9. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L49-L55` → after: `L860-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L860-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L860-L1212) · [Before (L49-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L49-L55)

```diff
-         ctx: QQ,
-         masterGain: FQ
-       } = DQ;
-       return QQ && FQ ? {
-         ctx: QQ,
-         destination: FQ,
-         holdAwake: QQ => {
+         waveform: Pk,
+         pitchHz: mk,
+         attackMs: Mk,
+         releaseMs: Kk,
+         lowpassHz: xk
+       } = ik, nk = fk + Dk.durationMs / 1e3, Uk = mk * 2 ** (Dk.semitones / 12), Hk = kk.createOscillator();
+       Hk.type = Pk, Hk.frequency.setValueAtTime(Uk, fk), Hk.frequency.exponentialRampToValueAtTime(Uk * 2 ** (Dk.glideSemitones / 12), nk);
+       const wk = fk + Math.min(Mk, Dk.durationMs) / 1e3,
+         lk = kk.createGain();
+       lk.gain.setValueAtTime(0, fk), lk.gain.linearRampToValueAtTime(Sk, wk), lk.gain.linearRampToValueAtTime(Sk * bk, Math.max(wk, nk - Kk / 1e3)), lk.gain.linearRampToValueAtTime(0, nk);
+       const pk = [Hk];
+       if (null !== xk) {
+         const ek = kk.createBiquadFilter();
+         ek.type = "lowpass", ek.frequency.value = xk, pk.push(ek)
+       }
+       pk.push(lk, ek);
+ ... (337 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L57` → after: `L1214-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1214-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L1214-L1253) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L57)

```diff
-           (bQ += QQ ? 1 : -1, QQ) ? null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ): null === (wQ = DQ._autoSuspend) || void 0 === wQ || wQ.call(DQ)
+           return !Dk(kk) || ik(kk).length > 0 ? null : `${null!==(ek=null===(fk=kk.material)||void 0===fk?void 0:fk.uniqueId)&&void 0!==ek?ek:"none"} ${kk.getVerticesDataKinds().sort().join(",")}`
+         };
+       ! function(kk, ek, ik) {
+         const Dk = new Set,
+           fk = kk => {
+             for (const ik of kk) Dk.add(ik.name.toLowerCase()), fk(ek(ik))
+           };
+         fk(kk);
+         const Sk = new Set,
+           bk = new Map,
+           rk = [],
+           Pk = kk => {
+             var ek;
+             const ik = kk.toLowerCase();
+             let fk, Sk = null !== (ek = bk.get(ik)) && void 0 !== ek ? ek : 1;
+             do {
+ ... (24 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L59` → after: `L1255-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1255-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L1255-L1262) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L59)

```diff
-         wake: () => {
+         rk = ik(kk).map(bk);
+       return null === ek || 1 !== Sk.size ? Se(rk) : be(rk, ek)
+     }
+     const me = new WeakMap;
+ 
+     function Me(kk, ek, ik) {
+       const Dk = Ok.h.itemsClient[ek],
+         fk = function(kk) {
```

#### 12. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L61` → after: `L1264-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1264-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L1264-L1358) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L61)

```diff
-           "running" !== QQ.state && (null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ), QQ.resume().catch((() => {})))
+           const ik = (0, Nk.u)(kk);
+           if (null !== ik) return Jk.g.enabled && Jk.g.hasAnimation(ik) ? {
+             vehicleType: ik,
+             moved: Jk.g.bonesMoved(ik)
+           } : null;
+           const Dk = null === (ek = Mk.g[kk]) || void 0 === ek ? void 0 : ek.meshEntityBones;
+           return null !== Dk && void 0 !== Dk && Dk.length ? {
+             vehicleType: null,
+             moved: new Set(Dk)
+           } : null
+         }(ek);
+       if (null === fk || void 0 === Dk) return null;
+       const Sk = kk.yH.ku;
+       let bk = me.get(Sk);
+       bk || (bk = new Map, me.set(Sk, bk));
+       let rk = bk.get(ek);
+ ... (79 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L63` → after: `L1360-L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1360-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L1360-L2022) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L63)

```diff
-       } : null
+       }
+     }
+ 
+     function Ke(kk) {
+       return kk.flatMap((kk => {
+         var ek;
+         return "string" === typeof kk ? [kk] : [kk.nodeName, ...Ke(null !== (ek = kk.children) && void 0 !== ek ? ek : [])]
+       }))
+     }
+ 
+     function xe(kk, ek, ik) {
+       ek.name = `${ik}SkeletalVehicleMat`;
+       const Dk = (0, dk.Y)(ek);
+       (0, dk.J)(Dk), (0, fe.c)(ek, (() => {
+         (0, De.c)(Dk, kk), (0, ck.e)(Dk, !0)
+       })), (0, fe.g)(ek)
+ ... (647 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L68` → after: `L2087-L36163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2087-L36163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/92.js#L2087-L36163) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/92.js#L68)

```diff
-       (DQ.volume(), DQ.ctx && DQ.autoUnlock) && (null === (QQ = DQ._unlockAudio) || void 0 === QQ || QQ.call(DQ))
+       let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : oe;
+       const bk = performance.now(),
+         rk = Sk.get(kk);
+       if (void 0 !== rk && bk - rk < 6e4) return;
+       Sk.set(kk, bk);
+       const Pk = ek();
+       Dk && console.error(Pk), null === (fk = ik.CU) || void 0 === fk || fk.call(ik, Pk)
+     }
+ 
+     function Re(kk) {
+       return "failed" !== kk.getBloxdWasmStatus()
+     }
+ 
+     function Je(kk, ek) {
+       if (Re(kk)) try {
+         ek.free()
+ ... (34061 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/93.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/93.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b)

#### 1. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/93.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/93.js#L2)

```diff
- export const ids = [92, 93];
+ export const ids = [93];
```

#### 2. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L4-L92` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/93.js#L4) · [Before (L4-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/93.js#L4-L92)

```diff
-   36082: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       countDecodesAs: () => HQ,
-       decodedAudio: () => bQ
-     });
-     var LQ = wQ(36086),
-       qQ = wQ(4694);
-     const oQ = qQ.Howler,
-       DQ = new Map;
-     let kQ = 0;
-     const vQ = {
-         song: 0,
-         sheet: 0
-       },
-       mQ = new WeakMap,
-       uQ = new WeakSet;
- ... (73 more removed lines; see GitHub link above)
+   4799: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L99-L100` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/93.js#L11-L13) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/93.js#L99-L100)

```diff
-     var LQ, qQ = wQ(4702),
-       oQ = wQ(4494);
+     var Dk, fk = ik(4804),
+       Sk = ik(3521),
+       bk = ik(4583);
```

#### 4. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L117` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/93.js#L30) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/93.js#L117)

```diff
-       qQ.gain.setValueAtTime(DQ._muted ? 0 : null !== (QQ = DQ._volume) && void 0 !== QQ ? QQ : 1, LQ.currentTime), qQ.connect(LQ.destination), DQ.ctx = LQ, DQ.masterGain = qQ, null === (FQ = DQ._setup) || void 0 === FQ || FQ.call(DQ)
+       fk.gain.setValueAtTime(rk._muted ? 0 : null !== (kk = rk._volume) && void 0 !== kk ? kk : 1, Dk.currentTime), fk.connect(Dk.destination), rk.ctx = Dk, rk.masterGain = fk, null === (ek = rk._setup) || void 0 === ek || ek.call(rk)
```

#### 5. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L130` → after: `L57-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L57-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/93.js#L57-L94) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/93.js#L130)

```diff
-     };
+     }, (0, bk.i)() && (rk._unlockAudio = () => {
+       const kk = rk.ctx;
+       if (rk._audioUnlocked || !kk) return;
+       rk.autoUnlock = !1;
+       const ek = kk.createBuffer(1, 1, 22050);
+       rk._scratchBuffer = ek;
+       const ik = new AbortController;
+       let Dk = "afterPaint";
+       const fk = () => {
+           var Dk;
+           if (rk._audioUnlocked) return;
+           null === (Dk = rk._autoResume) || void 0 === Dk || Dk.call(rk);
+           const fk = kk.createBufferSource();
+           fk.buffer = ek, fk.connect(kk.destination), fk.start(0), kk.resume().catch((() => {})), fk.onended = () => {
+             fk.disconnect(0), rk._audioUnlocked = !0, ik.abort();
+             for (const kk of rk._howls) kk._emit("unlock")
+ ... (22 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 1. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/94.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/94.js#L2)

```diff
- export const ids = [92, 93, 94];
+ export const ids = [93, 94];
```

#### 2. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L4-L61` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/94.js#L4) · [Before (L4-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/94.js#L4-L61)

```diff
-   36242: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ, wQ, LQ) {
-       return !(wQ && !QQ.aimable) && (!FQ || QQ.gun && "head" !== LQ)
-     }
- 
-     function qQ(QQ) {
-       return Math.max(.1 * QQ, 1)
-     }
- 
-     function oQ(QQ, FQ) {
-       return !QQ && FQ
-     }
-     wQ.d(FQ, {
-       c: () => oQ,
-       f: () => qQ,
-       j: () => LQ
- ... (42 more removed lines; see GitHub link above)
+   35966: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L66-L67` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/94.js#L9-L10) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/94.js#L66-L67)

```diff
-     var LQ = wQ(36086),
-       qQ = wQ(4694);
+     var Dk = ik(3224),
+       fk = ik(4799);
```

#### 4. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L104` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/94.js#L47) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/94.js#L104)

```diff
-               kQ += wQ - (null !== (LQ = DQ.get(FQ)) && void 0 !== LQ ? LQ : 0), DQ.set(FQ, wQ);
+               rk += ik - (null !== (Dk = bk.get(ek)) && void 0 !== Dk ? Dk : 0), bk.set(ek, ik);
```

#### 5. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L117` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/94.js#L60) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/94.js#L117)

```diff
-     }(0, LQ.c)(bQ);
+     }(0, Dk.d)(xk);
```

#### 6. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L134-L237` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/94.js#L77) · [Before (L134-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/94.js#L134-L237)

```diff
-   36086: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => oQ,
-       c: () => qQ
-     });
-     let LQ = null;
- 
-     function qQ(QQ) {
-       LQ = QQ
-     }
- 
-     function oQ() {
-       return null === LQ ? null : LQ()
-     }
-   },
-   36415: (QQ, FQ, wQ) => {
- ... (88 more removed lines; see GitHub link above)
+   4799: (kk, ek, ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L244-L245` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/94.js#L84-L86) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/94.js#L244-L245)

```diff
-     var LQ, qQ = wQ(4702),
-       oQ = wQ(4494);
+     var Dk, fk = ik(4804),
+       Sk = ik(3521),
+       bk = ik(4583);
```

#### 8. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L262` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/94.js#L103) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/94.js#L262)

```diff
-       qQ.gain.setValueAtTime(DQ._muted ? 0 : null !== (QQ = DQ._volume) && void 0 !== QQ ? QQ : 1, LQ.currentTime), qQ.connect(LQ.destination), DQ.ctx = LQ, DQ.masterGain = qQ, null === (FQ = DQ._setup) || void 0 === FQ || FQ.call(DQ)
+       fk.gain.setValueAtTime(rk._muted ? 0 : null !== (kk = rk._volume) && void 0 !== kk ? kk : 1, Dk.currentTime), fk.connect(Dk.destination), rk.ctx = Dk, rk.masterGain = fk, null === (ek = rk._setup) || void 0 === ek || ek.call(rk)
```

#### 9. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L275` → after: `L130-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L130-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/94.js#L130-L167) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/94.js#L275)

```diff
-     };
+     }, (0, bk.i)() && (rk._unlockAudio = () => {
+       const kk = rk.ctx;
+       if (rk._audioUnlocked || !kk) return;
+       rk.autoUnlock = !1;
+       const ek = kk.createBuffer(1, 1, 22050);
+       rk._scratchBuffer = ek;
+       const ik = new AbortController;
+       let Dk = "afterPaint";
+       const fk = () => {
+           var Dk;
+           if (rk._audioUnlocked) return;
+           null === (Dk = rk._autoResume) || void 0 === Dk || Dk.call(rk);
+           const fk = kk.createBufferSource();
+           fk.buffer = ek, fk.connect(kk.destination), fk.start(0), kk.resume().catch((() => {})), fk.onended = () => {
+             fk.disconnect(0), rk._audioUnlocked = !0, ik.abort();
+             for (const kk of rk._howls) kk._emit("unlock")
+ ... (22 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/95.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/95.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557)

#### 1. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L3)

```diff
- export const ids = [95];
+ export const ids = [93, 94, 95];
```

#### 2. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L5-L9` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L4-L40) · [Before (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L5-L9)

```diff
-   4702: (QQ, FQ, wQ) => {
-     var LQ;
-     ! function() {
-       var qQ = function() {
-         this.init()
+   36164: (kk, ek, ik) => {
+     function Dk(kk, ek, ik, Dk) {
+       return !(ik && !kk.aimable) && (!ek || kk.gun && "head" !== Dk)
+     }
+ 
+     function fk(kk) {
+       return Math.max(.1 * kk, 1)
+     }
+ 
+     function Sk(kk, ek) {
+       return !kk && ek
+     }
+     ik.d(ek, {
+       b: () => Sk,
+       d: () => fk,
+       f: () => Dk
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L11-L68` → after: `L42-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L42-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L42-L97) · [Before (L11-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L11-L68)

```diff
-       qQ.prototype = {
-         init: function() {
-           var QQ = this || oQ;
-           return QQ._counter = 1e3, QQ._html5AudioPool = [], QQ.html5PoolSize = 10, QQ._codecs = {}, QQ._howls = [], QQ._muted = !1, QQ._volume = 1, QQ._canPlayEvent = "canplaythrough", QQ._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, Q … [truncated]
-         },
-         volume: function(QQ) {
-           var FQ = this || oQ;
-           if (QQ = parseFloat(QQ), FQ.ctx || YQ(), "undefined" !== typeof QQ && QQ >= 0 && QQ <= 1) {
-             if (FQ._volume = QQ, FQ._muted) return FQ;
-             FQ.usingWebAudio && FQ.masterGain.gain.setValueAtTime(QQ, oQ.ctx.currentTime);
-             for (var wQ = 0; wQ < FQ._howls.length; wQ++)
-               if (!FQ._howls[wQ]._webAudio)
-                 for (var LQ = FQ._howls[wQ]._getSoundIds(), qQ = 0; qQ < LQ.length; qQ++) {
-                   var DQ = FQ._howls[wQ]._soundById(LQ[qQ]);
-                   DQ && DQ._node && (DQ._node.volume = DQ._volume * QQ)
-                 }
- ... (42 more removed lines; see GitHub link above)
+ 
+     function bk(kk, ek) {
+       const ik = {
+           hook: ek
+         },
+         bk = fk[kk];
+       if (bk.push(ik), "crosshairAccuracy" === kk && null !== Dk) {
+         const kk = Dk;
+         Dk = null, Sk.crosshairAccuracy(kk)
+       }
+       return () => {
+         const kk = bk.indexOf(ik); - 1 !== kk && bk.splice(kk, 1)
+       }
+     }
+ 
+     function rk() {
+ ... (40 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L70-L155` → after: `L99-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L99-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L99-L107) · [Before (L70-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L70-L155)

```diff
-             FQ = "undefined" !== typeof Audio ? new Audio : null
-           } catch (uQ) {
-             return QQ
-           }
-           if (!FQ || "function" !== typeof FQ.canPlayType) return QQ;
-           var wQ = FQ.canPlayType("audio/mpeg;").replace(/^no$/, ""),
-             LQ = QQ._navigator ? QQ._navigator.userAgent : "",
-             qQ = LQ.match(/OPR\/([0-6].)/g),
-             DQ = qQ && parseInt(qQ[0].split("/")[1], 10) < 33,
-             kQ = -1 !== LQ.indexOf("Safari") && -1 === LQ.indexOf("Chrome"),
-             vQ = LQ.match(/Version\/(.*?) /),
-             mQ = kQ && vQ && parseInt(vQ[1], 10) < 15;
-           return QQ._codecs = {
-             mp3: !(DQ || !wQ && !FQ.canPlayType("audio/mp3;").replace(/^no$/, "")),
-             mpeg: !!wQ,
-             opus: !!FQ.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
- ... (70 more removed lines; see GitHub link above)
+             null === Dk || void 0 === Dk || Dk(kk)
+           } finally {
+             const ik = ek.find((kk => "loaded" === kk._state));
+             void 0 !== ik && "string" === typeof ik._src && function(kk, ek, ik) {
+               var Dk;
+               rk += ik - (null !== (Dk = bk.get(ek)) && void 0 !== Dk ? Dk : 0), bk.set(ek, ik);
+               const fk = mk.get(kk);
+               void 0 !== fk && Pk[fk]++
+             }(ik, ik._src, kk.length * kk.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
```

#### 5. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L157-L168` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L109) · [Before (L157-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L157-L168)

```diff
-         },
-         _autoResume: function() {
-           var QQ = this;
-           if (QQ.ctx && "undefined" !== typeof QQ.ctx.resume && oQ.usingWebAudio) return "running" === QQ.state && "interrupted" !== QQ.ctx.state && QQ._suspendTimer ? (clearTimeout(QQ._suspendTimer), QQ._suspendTimer = null) : "suspended" === QQ.state || "running" === QQ.state & … [truncated]
-             QQ.state = "running";
-             for (var FQ = 0; FQ < QQ._howls.length; FQ++) QQ._howls[FQ]._emit("resume")
-           })), QQ._suspendTimer && (clearTimeout(QQ._suspendTimer), QQ._suspendTimer = null)) : "suspending" === QQ.state && (QQ._resumeAfterSuspend = !0), QQ
-         }
-       };
-       var oQ = new qQ,
-         DQ = function(QQ) {
-           QQ.src && 0 !== QQ.src.length ? this.init(QQ) : console.error("An array of source files must be passed with any new Howl.")
+           return kk
```

#### 6. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L170-L266` → after: `L111-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L111-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L111-L167) · [Before (L170-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L170-L266)

```diff
-       DQ.prototype = {
-         init: function(QQ) {
-           var FQ = this;
-           return oQ.ctx || YQ(), FQ._autoplay = QQ.autoplay || !1, FQ._format = "string" !== typeof QQ.format ? QQ.format : [QQ.format], FQ._html5 = QQ.html5 || !1, FQ._muted = QQ.mute || !1, FQ._loop = QQ.loop || !1, FQ._pool = QQ.pool || 5, FQ._preload = "boolean" !== typeof QQ … [truncated]
-             method: QQ.xhr && QQ.xhr.method ? QQ.xhr.method : "GET",
-             headers: QQ.xhr && QQ.xhr.headers ? QQ.xhr.headers : null,
-             withCredentials: !(!QQ.xhr || !QQ.xhr.withCredentials) && QQ.xhr.withCredentials
-           }, FQ._duration = 0, FQ._state = "unloaded", FQ._sounds = [], FQ._endTimers = {}, FQ._queue = [], FQ._playLock = !1, FQ._onend = QQ.onend ? [{
-             gY: QQ.onend
-           }] : [], FQ._onfade = QQ.onfade ? [{
-             gY: QQ.onfade
-           }] : [], FQ._onload = QQ.onload ? [{
-             gY: QQ.onload
-           }] : [], FQ._onloaderror = QQ.onloaderror ? [{
-             gY: QQ.onloaderror
-           }] : [], FQ._onplayerror = QQ.onplayerror ? [{
- ... (81 more removed lines; see GitHub link above)
+         if (!ek) return ik(kk, Mk, fk);
+         const Kk = ik(kk).then(Mk);
+         return Kk.catch((kk => {
+           null === fk || void 0 === fk || fk(kk)
+         })), Kk
+       }
+     }(0, Dk.d)(xk);
+     const Uk = fk.Howl.prototype,
+       Hk = Uk.init;
+     Uk.init = function(kk) {
+       return fk.Howler.volume(), Sk.ctx && nk(Sk.ctx), Hk.call(this, kk)
+     };
+     const wk = Uk.unload;
+     Uk.unload = function() {
+       const kk = this._src,
+         ek = wk.call(this);
+ ... (41 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L268-L669` → after: `L169-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L169-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L169-L215) · [Before (L268-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L268-L669)

```diff
-           if (!(mQ >= YQ)) {
-             var AQ = kQ._node;
-             if (wQ._webAudio) {
-               var tQ = function() {
-                 wQ._playLock = !1, xQ(), wQ._refreshBuffer(kQ);
-                 var QQ = kQ._muted || wQ._muted ? 0 : kQ._volume;
-                 AQ.gain.setValueAtTime(QQ, oQ.ctx.currentTime), kQ._playStart = oQ.ctx.currentTime, "undefined" === typeof AQ.bufferSource.start ? kQ._loop ? AQ.bufferSource.noteGrainOn(0, mQ, 86400) : AQ.bufferSource.noteGrainOn(0, mQ, uQ) : kQ._loop ? AQ.bufferSource.start(0, m … [truncated]
-                   wQ._emit("play", kQ._id), wQ._loadQueue()
-                 }), 0)
-               };
-               "running" === oQ.state && "interrupted" !== oQ.ctx.state ? tQ() : (wQ._playLock = !0, wQ.once("resume", tQ), wQ._clearTimer(kQ._id))
-             } else {
-               var eQ = function() {
-                 AQ.currentTime = mQ, AQ.muted = kQ._muted || wQ._muted || oQ._muted || AQ.muted, AQ.volume = kQ._volume * oQ.volume(), AQ.playbackRate = kQ._rate;
-                 try {
-                   var LQ = AQ.play();
- ... (386 more removed lines; see GitHub link above)
+           bk(0)
+         }(fk.e.get(Sk).filter((kk => kk !== ik)).flatMap((ek => {
+           const ik = (Dk = (0, fk.j)(ek).src, Sk = kk.canPlay, Dk.find((kk => {
+             var ek;
+             const ik = null === (ek = /\.([^.]+)$/.exec(kk.split("?", 1)[0])) || void 0 === ek ? void 0 : ek[1];
+             return void 0 !== ik && Sk(ik.toLowerCase())
+           })));
+           var Dk, Sk;
+           return void 0 === ik ? [] : [ik]
+         })), kk)
+       }
+     }({
+       afterJoin: kk => {
+         (0, Sk.e)(Dk.b.get("gameState"), kk)
+       },
+       joining: () => (0, Sk.i)(Dk.b.get("gameState")),
+ ... (31 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L672-L688` → after: `L218-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L218-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L218-L270) · [Before (L672-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L672-L688)

```diff
-       var vQ = {},
-         mQ = function(QQ) {
-           var FQ = QQ._src;
-           if (vQ[FQ]) return QQ._duration = vQ[FQ].duration, void bQ(QQ);
-           if (/^data:[^;]+;base64,/.test(FQ)) {
-             for (var wQ = atob(FQ.split(",")[1]), LQ = new Uint8Array(wQ.length), qQ = 0; qQ < wQ.length; ++qQ) LQ[qQ] = wQ.charCodeAt(qQ);
-             HQ(LQ.buffer, QQ)
-           } else {
-             var oQ = new XMLHttpRequest;
-             oQ.open(QQ._xhr.method, FQ, !0), oQ.withCredentials = QQ._xhr.withCredentials, oQ.responseType = "arraybuffer", QQ._xhr.headers && Object.keys(QQ._xhr.headers).forEach((function(FQ) {
-               oQ.setRequestHeader(FQ, QQ._xhr.headers[FQ])
-             })), oQ.onload = function() {
-               var FQ = (oQ.status + "")[0];
-               "0" === FQ || "2" === FQ || "3" === FQ ? HQ(oQ.response, QQ) : QQ._emit("loaderror", null, "Failed loading audio file with status: " + oQ.status + ".")
-             }, oQ.onerror = function() {
-               QQ._webAudio && (QQ._html5 = !0, QQ._webAudio = !1, QQ._sounds = [], delete vQ[FQ], QQ.load())
- ... (1 more removed lines; see GitHub link above)
+       for (const fk of Dk) kk.on(fk, ik);
+       ik()
+     }
+   },
+   4799: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       Howl: () => fk.Howl,
+       Howler: () => fk.Howler,
+       musicOutput: () => wk,
+       readyAudioContext: () => lk
+     });
+     var Dk, fk = ik(4804),
+       Sk = ik(3521),
+       bk = ik(4583);
+     const rk = fk.Howler;
+ 
+ ... (37 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L690-L695` → after: `L272-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L272-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L272-L290) · [Before (L690-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L690-L695)

```diff
-         },
-         uQ = function(QQ) {
-           try {
-             QQ.send()
-           } catch (FQ) {
-             QQ.onerror()
+     }
+     Kk.init = function(kk) {
+       return Pk(), xk.call(this, kk)
+     }, (0, bk.i)() && (rk._unlockAudio = () => {
+       const kk = rk.ctx;
+       if (rk._audioUnlocked || !kk) return;
+       rk.autoUnlock = !1;
+       const ek = kk.createBuffer(1, 1, 22050);
+       rk._scratchBuffer = ek;
+       const ik = new AbortController;
+       let Dk = "afterPaint";
+       const fk = () => {
+           var Dk;
+           if (rk._audioUnlocked) return;
+           null === (Dk = rk._autoResume) || void 0 === Dk || Dk.call(rk);
+           const fk = kk.createBufferSource();
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L698-L705` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L293-L294) · [Before (L698-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L698-L705)

```diff
-         HQ = function(QQ, FQ) {
-           var wQ = function() {
-               FQ._emit("loaderror", null, "Decoding audio data failed.")
-             },
-             LQ = function(QQ) {
-               QQ && FQ._sounds.length > 0 ? (vQ[FQ._src] = QQ, bQ(FQ, QQ)) : wQ()
-             };
-           "undefined" !== typeof Promise && 1 === oQ.ctx.decodeAudioData.length ? oQ.ctx.decodeAudioData(QQ).then(LQ).catch(wQ) : oQ.ctx.decodeAudioData(QQ, LQ, wQ)
+         Pk = () => {
+           nk(), fk()
```

#### 11. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L707-L728` → after: `L296-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L296-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L296-L302) · [Before (L707-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L707-L728)

```diff
-         bQ = function(QQ, FQ) {
-           FQ && !QQ._duration && (QQ._duration = FQ.duration), 0 === Object.keys(QQ._sprite).length && (QQ._sprite = {
-             __default: [0, 1e3 * QQ._duration]
-           }), "loaded" !== QQ._state && (QQ._state = "loaded", QQ._emit("load"), QQ._loadQueue())
-         },
-         YQ = function() {
-           if (oQ.usingWebAudio) {
-             try {
-               "undefined" !== typeof AudioContext ? oQ.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? oQ.ctx = new webkitAudioContext : oQ.usingWebAudio = !1
-             } catch (qQ) {
-               oQ.usingWebAudio = !1
-             }
-             oQ.ctx || (oQ.usingWebAudio = !1);
-             var QQ = /iP(hone|od|ad)/.test(oQ._navigator && oQ._navigator.platform),
-               FQ = oQ._navigator && oQ._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
-               wQ = FQ ? parseInt(FQ[1], 10) : null;
- ... (6 more removed lines; see GitHub link above)
+         mk = ek => {
+           if (nk(), "inTap" === Dk) {
+             if ("running" === kk.state) return;
+             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), fk()
+           } else "afterPaint" === Dk && (Dk = "queued", (0, Sk.d)(ek.timeStamp, (() => {
+             Dk = "inTap", fk()
+           })))
```

#### 12. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L730-L733` → after: `L304-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L304-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L304-L331) · [Before (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L730-L733)

```diff
-       void 0 === (LQ = function() {
-         return {
-           Howler: oQ,
-           Howl: DQ
+       for (const Sk of ["touchstart", "touchend"]) document.addEventListener(Sk, Pk, {
+         capture: !0,
+         signal: ik.signal
+       });
+       for (const Sk of bk.e) document.addEventListener(Sk, mk, {
+         capture: !0,
+         signal: ik.signal
+       })
+     });
+     let Uk = 0;
+     const Hk = null === (Dk = rk._autoSuspend) || void 0 === Dk ? void 0 : Dk.bind(fk.Howler);
+ 
+     function wk() {
+       lk();
+       const {
+         ctx: kk,
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L735-L737` → after: `L333-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L333-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L333-L336) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L735-L737)

```diff
-       }.apply(FQ, [])) || (QQ.exports = LQ), FQ.Howler = oQ, FQ.Howl = DQ, "undefined" !== typeof wQ.g ? (wQ.g.HowlerGlobal = qQ, wQ.g.Howler = oQ, wQ.g.Howl = DQ, wQ.g.Sound = kQ) : "undefined" !== typeof window && (window.HowlerGlobal = qQ, window.Howler = oQ, window.Howl = DQ, … [truncated]
-     }(),
-     function() {
+       } : null
+     }
+ 
+     function lk() {
```

#### 14. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L739-L782` → after: `L338-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L338-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L338-L376) · [Before (L739-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L739-L782)

```diff
-       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(QQ) {
-         var FQ = this;
-         if (!FQ.ctx || !FQ.ctx.listener) return FQ;
-         for (var wQ = FQ._howls.length - 1; wQ >= 0; wQ--) FQ._howls[wQ].stereo(QQ);
-         return FQ
-       }, HowlerGlobal.prototype.pos = function(QQ, FQ, wQ) {
-         var LQ = this;
-         return LQ.ctx && LQ.ctx.listener ? (FQ = "number" !== typeof FQ ? LQ._pos[1] : FQ, wQ = "number" !== typeof wQ ? LQ._pos[2] : wQ, "number" !== typeof QQ ? LQ._pos : (LQ._pos = [QQ, FQ, wQ], "undefined" !== typeof LQ.ctx.listener.positionX ? (LQ.ctx.listener.positionX.setT … [truncated]
-       }, HowlerGlobal.prototype.orientation = function(QQ, FQ, wQ, LQ, qQ, oQ) {
-         var DQ = this;
-         if (!DQ.ctx || !DQ.ctx.listener) return DQ;
-         var kQ = DQ._orientation;
-         return FQ = "number" !== typeof FQ ? kQ[1] : FQ, wQ = "number" !== typeof wQ ? kQ[2] : wQ, LQ = "number" !== typeof LQ ? kQ[3] : LQ, qQ = "number" !== typeof qQ ? kQ[4] : qQ, oQ = "number" !== typeof oQ ? kQ[5] : oQ, "number" !== typeof QQ ? kQ : (DQ._orientation = [QQ, F … [truncated]
-       }, Howl.prototype.init = (QQ = Howl.prototype.init, function(FQ) {
-         var wQ = this;
-         return wQ._orientation = FQ.orientation || [1, 0, 0], wQ._stereo = FQ.stereo || null, wQ._pos = FQ.pos || null, wQ._pannerAttr = {
- ... (28 more removed lines; see GitHub link above)
+       (rk.volume(), rk.ctx && rk.autoUnlock) && (null === (kk = rk._unlockAudio) || void 0 === kk || kk.call(rk))
+     }
+     Hk && (rk._autoSuspend = () => Uk > 0 ? fk.Howler : Hk())
+   },
+   36354: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk
+     });
+     const Dk = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
+   },
+   36351: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk,
+       d: () => fk,
+       e: () => Dk
+     });
+ ... (23 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L784-L789` → after: `L378-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L378-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L378-L386) · [Before (L784-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L784-L789)

```diff
-         for (var oQ = LQ._getSoundIds(wQ), DQ = 0; DQ < oQ.length; DQ++) {
-           var kQ = LQ._soundById(oQ[DQ]);
-           if (kQ) {
-             if ("number" !== typeof QQ) return kQ._stereo;
-             kQ._stereo = QQ, kQ._pos = [QQ, 0, 0], kQ._node && (kQ._pannerAttr.panningModel = "equalpower", kQ._panner && kQ._panner.pan || FQ(kQ, qQ), "spatial" === qQ ? "undefined" !== typeof kQ._panner.positionX ? (kQ._panner.positionX.setValueAtTime(QQ, Howler.ctx.currentTime … [truncated]
-           }
+         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, kk)) && (this.voices.push(kk), !0)
+       }
+       dropLeastWorth(kk, ek) {
+         let ik = null,
+           Dk = 1 / 0;
+         for (const fk of kk) {
+           if (!fk.canStop()) continue;
+           const kk = Sk(fk, ek.startMs);
+           kk < Dk && (ik = fk, Dk = kk)
```

#### 16. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L792-L811` → after: `L417-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L417-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L417-L429) · [Before (L792-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L792-L811)

```diff
-       }, Howl.prototype.pos = function(QQ, wQ, LQ, qQ) {
-         var oQ = this;
-         if (!oQ._webAudio) return oQ;
-         if ("loaded" !== oQ._state) return oQ._queue.push({
-           event: "pos",
-           action: function() {
-             oQ.pos(QQ, wQ, LQ, qQ)
-           }
-         }), oQ;
-         if (wQ = "number" !== typeof wQ ? 0 : wQ, LQ = "number" !== typeof LQ ? -.5 : LQ, "undefined" === typeof qQ) {
-           if ("number" !== typeof QQ) return oQ._pos;
-           oQ._pos = [QQ, wQ, LQ]
-         }
-         for (var DQ = oQ._getSoundIds(qQ), kQ = 0; kQ < DQ.length; kQ++) {
-           var vQ = oQ._soundById(DQ[kQ]);
-           if (vQ) {
- ... (4 more removed lines; see GitHub link above)
+       }
+     }
+     class fk {
+       constructor() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = kk
+       }
+       setBooleanType(kk, ek) {
+         const ik = this._getTotalBooleanVal();
+         this.booleans[kk] = !!ek;
+         const Dk = this.getTotalBooleanVal();
+         var fk;
+         Dk !== ik && (null === (fk = this._onUpdate) || void 0 === fk || fk.call(this, Dk, this.booleans));
```

#### 17. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L813-L832` → after: `L431-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L431-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L431-L457) · [Before (L813-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L813-L832)

```diff
-       }, Howl.prototype.orientation = function(QQ, wQ, LQ, qQ) {
-         var oQ = this;
-         if (!oQ._webAudio) return oQ;
-         if ("loaded" !== oQ._state) return oQ._queue.push({
-           event: "orientation",
-           action: function() {
-             oQ.orientation(QQ, wQ, LQ, qQ)
-           }
-         }), oQ;
-         if (wQ = "number" !== typeof wQ ? oQ._orientation[1] : wQ, LQ = "number" !== typeof LQ ? oQ._orientation[2] : LQ, "undefined" === typeof qQ) {
-           if ("number" !== typeof QQ) return oQ._orientation;
-           oQ._orientation = [QQ, wQ, LQ]
-         }
-         for (var DQ = oQ._getSoundIds(qQ), kQ = 0; kQ < DQ.length; kQ++) {
-           var vQ = oQ._soundById(DQ[kQ]);
-           if (vQ) {
- ... (4 more removed lines; see GitHub link above)
+       }
+       removeBoolean(kk) {
+         const ek = this._getTotalBooleanVal();
+         delete this.booleans[kk];
+         const ik = this._getTotalBooleanVal();
+         var Dk;
+         null !== ik && ik !== ek && (null === (Dk = this._onUpdate) || void 0 === Dk || Dk.call(this, ik, this.booleans));
+         return null !== ik && void 0 !== ik && ik
+       }
+       getBooleanType(kk) {
+         return this.booleans[kk]
+       }
+       getTotalBooleanVal() {
+         throw new Error("This is an abstract class, use BooleanAndCombinator")
+       }
+       forceUpdate() {
+ ... (11 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L893` → after: `L460-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L460-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/95.js#L460-L489) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/95.js#L893)

```diff
-     }()
+       _getTotalBooleanVal() {
+         let kk = !1,
+           ek = !0;
+         for (const ik in this.booleans) kk = !0, ek &&= this.booleans[ik];
+         return kk ? ek : null
+       }
+     }
+     class bk extends fk {
+       getTotalBooleanVal() {
+         const kk = this._getTotalBooleanVal();
+         if (null === kk) throw new Error("Should not be gotten before at least 1 type has been initialised");
+         return kk
+       }
+       _getTotalBooleanVal() {
+         let kk = !1,
+           ek = !1;
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/96.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/96.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926)

#### 1. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L4-L143` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L5-L9) · [Before (L4-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L4-L143)

```diff
-   4713: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => hQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1515),
-       oQ = wQ(317),
-       DQ = wQ(1246),
-       kQ = wQ(1612),
-       vQ = wQ(1282),
-       mQ = wQ(1539),
-       uQ = wQ(1489),
-       HQ = wQ(2574);
-     const bQ = {
-       retries: 2,
-       minTimeout: 2e3
- ... (124 more removed lines; see GitHub link above)
+   4804: (kk, ek, ik) => {
+     var Dk;
+     ! function() {
+       var fk = function() {
+         this.init()
```

#### 2. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L145-L166` → after: `L11-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L11-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L11-L60) · [Before (L145-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L145-L166)

```diff
-       (0, jQ.c)(LF), (0, LQ.useEffect)((() => {
-         var QQ;
-         if (nQ) return;
-         if (!fQ) return void QF({
-           status: "notFound",
-           playerKey: hQ
-         });
-         const FQ = "urlId" in fQ && (null === (QQ = PQ.current) || void 0 === QQ ? void 0 : QQ.urlId) === fQ.urlId && ZQ.current === EQ;
-         if (FQ && yQ.current) return;
-         const wQ = FQ ? null : iQ.e.peek(EQ, fQ);
-         let LQ = !1;
-         const qQ = QQ => "loaded" === QQ.status && (QQ.playerKey === hQ || "urlId" in fQ && QQ.profile.urlId === fQ.urlId);
-         return wQ ? (ZQ.current = EQ, yQ.current = !1, QF({
-           status: "loaded",
-           profile: wQ,
-           playerKey: hQ
- ... (6 more removed lines; see GitHub link above)
+       fk.prototype = {
+         init: function() {
+           var kk = this || Sk;
+           return kk._counter = 1e3, kk._html5AudioPool = [], kk.html5PoolSize = 10, kk._codecs = {}, kk._howls = [], kk._muted = !1, kk._volume = 1, kk._canPlayEvent = "canplaythrough", kk._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, k … [truncated]
+         },
+         volume: function(kk) {
+           var ek = this || Sk;
+           if (kk = parseFloat(kk), ek.ctx || nk(), "undefined" !== typeof kk && kk >= 0 && kk <= 1) {
+             if (ek._volume = kk, ek._muted) return ek;
+             ek.usingWebAudio && ek.masterGain.gain.setValueAtTime(kk, Sk.ctx.currentTime);
+             for (var ik = 0; ik < ek._howls.length; ik++)
+               if (!ek._howls[ik]._webAudio)
+                 for (var Dk = ek._howls[ik]._getSoundIds(), fk = 0; fk < Dk.length; fk++) {
+                   var bk = ek._howls[ik]._soundById(Dk[fk]);
+                   bk && bk._node && (bk._node.volume = bk._volume * kk)
+                 }
+ ... (34 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L168-L171` → after: `L62-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L62-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L62-L70) · [Before (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L168-L171)

```diff
-             return {
-               status: "loaded",
-               profile: await uQ.b.getPlayerProfile(QQ, FQ, bQ)
-             }
+             (new Audio).muted && (kk.noAudio = !0)
+           } catch (ek) {}
+           return kk.noAudio || kk._setupCodecs(), kk
+         },
+         _setupCodecs: function() {
+           var kk = this || Sk,
+             ek = null;
+           try {
+             ek = "undefined" !== typeof Audio ? new Audio : null
```

#### 4. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L173-L177` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L72) · [Before (L173-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L173-L177)

```diff
-             return (0, HQ.d)(wQ) ? {
-               status: "notFound"
-             } : (console.error("Failed to load user profile", wQ), {
-               status: "failed"
-             })
+             return kk
```

#### 5. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L179-L202` → after: `L74-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L74-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L74-L125) · [Before (L179-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L179-L202)

```diff
-         }(EQ, fQ).then((QQ => {
-           LQ || ("loaded" === QQ.status && (ZQ.current = EQ, yQ.current = !0), QF((FQ => "failed" === QQ.status && qQ(FQ) ? FQ : {
-             ...QQ,
-             playerKey: hQ
-           })))
-         })), () => {
-           LQ = !0
-         }
-       }), [nQ, hQ, EQ, FF]);
-       const qF = "loading" === dQ.status || dQ.playerKey === hQ || "loaded" === dQ.status && !!fQ && "urlId" in fQ && dQ.profile.urlId === fQ.urlId ? dQ : {
-           status: "loading"
-         },
-         oF = "loaded" === qF.status ? qF.profile : null,
-         DF = "loading" === qF.status ? null : function(QQ) {
-           if ("loaded" === QQ.status) {
-             const {
- ... (8 more removed lines; see GitHub link above)
+           if (!ek || "function" !== typeof ek.canPlayType) return kk;
+           var ik = ek.canPlayType("audio/mpeg;").replace(/^no$/, ""),
+             Dk = kk._navigator ? kk._navigator.userAgent : "",
+             fk = Dk.match(/OPR\/([0-6].)/g),
+             bk = fk && parseInt(fk[0].split("/")[1], 10) < 33,
+             rk = -1 !== Dk.indexOf("Safari") && -1 === Dk.indexOf("Chrome"),
+             Pk = Dk.match(/Version\/(.*?) /),
+             mk = rk && Pk && parseInt(Pk[1], 10) < 15;
+           return kk._codecs = {
+             mp3: !(bk || !ik && !ek.canPlayType("audio/mp3;").replace(/^no$/, "")),
+             mpeg: !!ik,
+             opus: !!ek.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
+             ogg: !!ek.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             oga: !!ek.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             wav: !!(ek.canPlayType('audio/wav; codecs="1"') || ek.canPlayType("audio/wav")).replace(/^no$/, ""),
+             aac: !!ek.canPlayType("audio/aac;").replace(/^no$/, ""),
+ ... (36 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L204-L239` → after: `L127-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L127-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L127-L163) · [Before (L204-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L204-L239)

```diff
-           return "notFound" === QQ.status ? (0, mQ.cb)() : null
-         }(qF),
-         kF = null !== oF && void 0 !== oF && oF.urlId ? (0, DQ.e)({
-           urlId: oF.urlId,
-           name: oF.player.name
-         }) : null;
-       (0, xQ.h)(kF);
-       const vF = null !== oF && void 0 !== oF && oF.player.cosmetics.profileEffect ? RQ.d[oF.player.cosmetics.profileEffect] : void 0,
-         mF = null !== oF && !nQ && EQ.getPlayerName().toLowerCase() === oF.player.name.toLowerCase(),
-         uF = (0, KQ.d)(null === oF || void 0 === oF ? void 0 : oF.player.name),
-         HF = mF && EQ.playerHasRank("youtuber");
-       PQ.current = oF;
-       const bF = (0, LQ.useCallback)((() => {
-           fQ && (iQ.e.invalidate(fQ), iQ.e.get(EQ, fQ).then((QQ => {
-             JQ.current === hQ && (yQ.current = !0, QF({
-               status: "loaded",
- ... (20 more removed lines; see GitHub link above)
+         },
+         _obtainHtml5Audio: function() {
+           var kk = this || Sk;
+           if (kk._html5AudioPool.length) return kk._html5AudioPool.pop();
+           var ek = (new Audio).play();
+           return ek && "undefined" !== typeof Promise && (ek instanceof Promise || "function" === typeof ek.then) && ek.catch((function() {
+             console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
+           })), new Audio
+         },
+         _releaseHtml5Audio: function(kk) {
+           var ek = this || Sk;
+           return kk._unlocked && ek._html5AudioPool.push(kk), ek
+         },
+         _autoSuspend: function() {
+           var kk = this;
+           if (kk.autoSuspend && kk.ctx && "undefined" !== typeof kk.ctx.suspend && Sk.usingWebAudio) {
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L241-L252` → after: `L165-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L165-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L165-L206) · [Before (L241-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L241-L252)

```diff
-       }), [oF, YF]), (0, aQ.jsxs)("div", {
-         className: sQ()("PlayerProfile", {
-           PlayerProfilePortrait: wQ
-         }),
-         children: [DF && (0, aQ.jsx)(kQ.c, {
-           meta: DF
-         }), (0, aQ.jsxs)("div", {
-           className: "PlayerProfileBackgroundContainer",
-           children: [vF && (0, aQ.jsx)(vF, {}), !vF && (0, aQ.jsx)("div", {
-             className: "PlayerProfileBackground",
-             style: {
-               backgroundImage: `url(${BQ.current})`
+       };
+       var Sk = new fk,
+         bk = function(kk) {
+           kk.src && 0 !== kk.src.length ? this.init(kk) : console.error("An array of source files must be passed with any new Howl.")
+         };
+       bk.prototype = {
+         init: function(kk) {
+           var ek = this;
+           return Sk.ctx || nk(), ek._autoplay = kk.autoplay || !1, ek._format = "string" !== typeof kk.format ? kk.format : [kk.format], ek._html5 = kk.html5 || !1, ek._muted = kk.mute || !1, ek._loop = kk.loop || !1, ek._pool = kk.pool || 5, ek._preload = "boolean" !== typeof kk … [truncated]
+             method: kk.xhr && kk.xhr.method ? kk.xhr.method : "GET",
+             headers: kk.xhr && kk.xhr.headers ? kk.xhr.headers : null,
+             withCredentials: !(!kk.xhr || !kk.xhr.withCredentials) && kk.xhr.withCredentials
+           }, ek._duration = 0, ek._state = "unloaded", ek._sounds = [], ek._endTimers = {}, ek._queue = [], ek._playLock = !1, ek._onend = kk.onend ? [{
+             sU: kk.onend
+           }] : [], ek._onfade = kk.onfade ? [{
+             sU: kk.onfade
+ ... (26 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L254-L426` → after: `L208-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L208-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L208-L228) · [Before (L254-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L254-L426)

```diff
-           })]
-         }), (0, aQ.jsxs)("div", {
-           className: "PlayerProfileHeader",
-           children: [(0, aQ.jsx)(cQ.b, {
-             onClick: LF,
-             children: QQ("general:back")
-           }), oF && !nQ && !mF && lQ.featureFlags.useSocialFeatures && (0, aQ.jsx)("div", {
-             className: "PlayerProfileExclusionActions",
-             children: (0, aQ.jsx)(zQ.b, {
-               playerName: oF.player.name,
-               className: "SmallTextLight"
-             })
-           })]
-         }), "loading" === qF.status && (0, aQ.jsx)("div", {
-           className: "PlayerProfileCentredMessage",
-           children: (0, aQ.jsx)(pQ.c, {})
- ... (157 more removed lines; see GitHub link above)
+           }), ek._preload && "none" !== ek._preload && ek.load(), ek
+         },
+         load: function() {
+           var kk = this,
+             ek = null;
+           if (Sk.noAudio) kk._emit("loaderror", null, "No audio support.");
+           else {
+             "string" === typeof kk._src && (kk._src = [kk._src]);
+             for (var ik = 0; ik < kk._src.length; ik++) {
+               var Dk, fk;
+               if (kk._format && kk._format[ik]) Dk = kk._format[ik];
+               else {
+                 if ("string" !== typeof(fk = kk._src[ik])) {
+                   kk._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
+                   continue
+                 }(Dk = /^data:audio\/([^;,]+);/i.exec(fk)) || (Dk = /\.([^.]+)$/.exec(fk.split("?", 1)[0])), Dk && (Dk = Dk[1].toLowerCase())
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L428-L437` → after: `L230-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L230-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L230-L693) · [Before (L428-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L428-L437)

```diff
-           },
-           prefixText: oQ.v[FQ],
-           placeholderText: "playBloxd",
-           initialValue: null !== (QQ = null === wQ || void 0 === wQ ? void 0 : wQ.handle) && void 0 !== QQ ? QQ : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: wQ ? "general:remove" : void 0
-         }).getResult().then((async QQ => {
-           if ("notificationTornDown" !== QQ && null !== QQ) try {
-             "submit" === QQ.type ? await mQ.b.setSocialLink(qQ, FQ, QQ.value) : await mQ.b.clearSocialLink(qQ, FQ), HQ()
+             if (ek) return kk._src = ek, kk._state = "loading", "https:" === window.location.protocol && "http:" === ek.slice(0, 5) && (kk._html5 = !0, kk._webAudio = !1), new rk(kk), kk._webAudio && mk(kk), kk;
+             kk._emit("loaderror", null, "No codec support for selected audio sources.")
+           }
+         },
+         play: function(kk, ek) {
+           var ik = this,
+             Dk = null;
+           if ("number" === typeof kk) Dk = kk, kk = null;
+           else {
+             if ("string" === typeof kk && "loaded" === ik._state && !ik._sprite[kk]) return null;
+             if ("undefined" === typeof kk && (kk = "__default", !ik._playLock)) {
+               for (var fk = 0, bk = 0; bk < ik._sounds.length; bk++) ik._sounds[bk].FY && !ik._sounds[bk]._ended && (fk++, Dk = ik._sounds[bk]._id);
+               1 === fk ? kk = null : Dk = null
+             }
+           }
+           var rk = Dk ? ik._soundById(Dk) : ik._inactiveSound();
+ ... (448 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L439-L442` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L695) · [Before (L439-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L439-L442)

```diff
-             console.error("Failed to update social link", wQ), uQ.NotificationProvider.showAlertPopup({
-               title: wQ.errorMessageForUser,
-               confirmText: "general:ok"
-             })
+             kk.onerror()
```

#### 11. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L444-L474` → after: `L697-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L697-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L697-L700) · [Before (L444-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L444-L474)

```diff
-         }))
-       }
-       if (wQ) {
-         const QQ = `@${wQ.handle}`;
-         return (0, bQ.jsxs)("a", {
-           className: "PlayerProfileSocialLink",
-           style: {
-             background: tQ.color
-           },
-           href: wQ.profileUrl,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: [(0, bQ.jsxs)("div", {
-             className: "PlayerProfileSocialLinkMain",
-             children: [(0, bQ.jsx)(xQ, {
-               platform: FQ
- ... (15 more removed lines; see GitHub link above)
+         },
+         Kk = function(kk, ek) {
+           var ik = function() {
+               ek._emit("loaderror", null, "Decoding audio data failed.")
```

#### 12. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L476-L511` → after: `L702-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L702-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L702-L858) · [Before (L476-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L476-L511)

```diff
-             children: (0, bQ.jsx)(kQ.c, {
-               name: "pen-to-square"
-             })
-           }), !LQ && (0, bQ.jsx)("span", {
-             className: "PlayerProfileSocialLinkArrow",
-             children: (0, bQ.jsx)(kQ.c, {
-               name: "arrow-up-right-from-square"
-             })
-           })]
-         })
-       }
-       return (0, bQ.jsxs)("button", {
-         type: "button",
-         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
-         style: {
-           background: tQ.color
- ... (20 more removed lines; see GitHub link above)
+             Dk = function(kk) {
+               kk && ek._sounds.length > 0 ? (Pk[ek._src] = kk, xk(ek, kk)) : ik()
+             };
+           "undefined" !== typeof Promise && 1 === Sk.ctx.decodeAudioData.length ? Sk.ctx.decodeAudioData(kk).then(Dk).catch(ik) : Sk.ctx.decodeAudioData(kk, Dk, ik)
+         },
+         xk = function(kk, ek) {
+           ek && !kk._duration && (kk._duration = ek.duration), 0 === Object.keys(kk._sprite).length && (kk._sprite = {
+             __default: [0, 1e3 * kk._duration]
+           }), "loaded" !== kk._state && (kk._state = "loaded", kk._emit("load"), kk._loadQueue())
+         },
+         nk = function() {
+           if (Sk.usingWebAudio) {
+             try {
+               "undefined" !== typeof AudioContext ? Sk.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Sk.ctx = new webkitAudioContext : Sk.usingWebAudio = !1
+             } catch (fk) {
+               Sk.usingWebAudio = !1
+ ... (141 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L513-L543` → after: `L860-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L860-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/96.js#L860-L893) · [Before (L513-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/96.js#L513-L543)

```diff
-         })]
-       })
-     }
- 
-     function tQ(QQ) {
-       let {
-         socialLinks: FQ,
-         editable: wQ = !1,
-         userContext: LQ,
-         onLinksUpdated: qQ
-       } = QQ;
-       if (!wQ && 0 === FQ.length) return null;
-       const DQ = new Map(FQ.map((QQ => [QQ.platform, QQ]))),
-         kQ = wQ ? oQ.t : FQ.map((QQ => QQ.platform));
-       return (0, bQ.jsx)("div", {
-         className: "PlayerProfileSocialLinks",
- ... (15 more removed lines; see GitHub link above)
+         } else 2 === Sk.length && (kk = Sk[0], ik = parseInt(Sk[1], 10));
+         for (var bk = fk._getSoundIds(ik), rk = 0; rk < bk.length; rk++)
+           if (Dk = fk._soundById(bk[rk])) {
+             var Pk = Dk._pannerAttr;
+             Pk = {
+               coneInnerAngle: "undefined" !== typeof kk.coneInnerAngle ? kk.coneInnerAngle : Pk.coneInnerAngle,
+               coneOuterAngle: "undefined" !== typeof kk.coneOuterAngle ? kk.coneOuterAngle : Pk.coneOuterAngle,
+               coneOuterGain: "undefined" !== typeof kk.coneOuterGain ? kk.coneOuterGain : Pk.coneOuterGain,
+               distanceModel: "undefined" !== typeof kk.distanceModel ? kk.distanceModel : Pk.distanceModel,
+               maxDistance: "undefined" !== typeof kk.maxDistance ? kk.maxDistance : Pk.maxDistance,
+               refDistance: "undefined" !== typeof kk.refDistance ? kk.refDistance : Pk.refDistance,
+               rolloffFactor: "undefined" !== typeof kk.rolloffFactor ? kk.rolloffFactor : Pk.rolloffFactor,
+               panningModel: "undefined" !== typeof kk.panningModel ? kk.panningModel : Pk.panningModel
+             };
+             var mk = Dk._panner;
+             mk ? (mk.coneInnerAngle = Pk.coneInnerAngle, mk.coneOuterAngle = Pk.coneOuterAngle, mk.coneOuterGain = Pk.coneOuterGain, mk.distanceModel = Pk.distanceModel, mk.maxDistance = Pk.maxDistance, mk.refDistance = Pk.refDistance, mk.rolloffFactor = Pk.rolloffFactor, mk.pann … [truncated]
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/97.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/97.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8)

#### 1. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L4)

```diff
-   9192: (QQ, FQ, wQ) => {
+   4815: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L6-L10)

```diff
-       blockMetadata: () => DQ.h,
-       getDefaultModel: () => uQ,
-       getDefaultSkyBox: () => HQ,
-       getDefaultTexture: () => mQ,
-       textureNameToIndex: () => DQ.v
+       default: () => ck
```

#### 3. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L12-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L8-L16) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L12-L16)

```diff
-     var LQ = wQ(3053),
-       qQ = wQ(33921),
-       oQ = wQ(1213),
-       DQ = wQ(9195),
-       kQ = wQ(617);
+     var Dk = ik(60),
+       fk = ik(1496),
+       Sk = ik(314),
+       bk = ik(1216),
+       rk = ik(1587),
+       Pk = ik(1248),
+       mk = ik(1519),
+       Mk = ik(1459),
+       Kk = ik(2613);
```

#### 4. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L18-L19)

```diff
-       block: QQ => wQ(9311)(`./${QQ}.png`),
-       item: QQ => wQ(17093)(`./${QQ}.png`)
+       retries: 2,
+       minTimeout: 2e3
```

#### 5. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L22-L49` → after: `L49-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L49-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L49-L85) · [Before (L22-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L22-L49)

```diff
-     function mQ(QQ, FQ) {
-       let qQ;
-       try {
-         if (FQ === LQ.d.BLOCK) qQ = {
-           type: LQ.f.BASE64,
-           url: vQ.block(QQ)
-         };
-         else if (FQ === LQ.d.ITEM) qQ = {
-           type: LQ.f.BASE64,
-           url: vQ.item(QQ)
-         };
-         else if (FQ === LQ.d.ICON) qQ = {
-           type: LQ.f.BASE64,
-           url: wQ(26520)(`./${QQ}.png`)
-         };
-         else if (FQ === LQ.d.LIFEFORM_ATLAS) {
- ... (12 more removed lines; see GitHub link above)
+     function Xk(kk) {
+       let {
+         icon: ek,
+         label: ik,
+         value: Dk
+       } = kk;
+       return (0, Wk.jsxs)("div", {
+         className: "PlayerProfileStat",
+         children: [(0, Wk.jsx)(uk.d, {
+           name: ek,
+           className: "PlayerProfileStatIcon"
+         }), (0, Wk.jsxs)("div", {
+           className: "PlayerProfileStatText",
+           children: [(0, Wk.jsx)("div", {
+             className: "PlayerProfileStatLabel SmallTextLight",
+             children: ik
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L54` → after: `L88-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L88-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L88-L108) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L54)

```diff
-       return qQ
+       let bk = ik("homePage:profileUnknown");
+       return ek.accountCreatedAt && (bk = new Date(ek.accountCreatedAt).toLocaleDateString(void 0, {
+         year: "numeric",
+         month: "short",
+         day: "numeric"
+       })), (0, Wk.jsxs)("div", {
+         className: "PlayerProfileStats",
+         children: [(0, Wk.jsx)(Xk, {
+           icon: "hourglass",
+           label: ik("homePage:profileTimePlayed"),
+           value: (0, Qk.e)(ek.totalPlayMinutes)
+         }), (0, Wk.jsx)(Xk, {
+           icon: "wifi",
+           label: ik("homePage:profileLastOnline"),
+           value: fk
+         }), (0, Wk.jsx)(Xk, {
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L57-L64` → after: `L111-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L111-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L111-L177) · [Before (L57-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L57-L64)

```diff
-     function uQ(QQ, FQ) {
-       let qQ;
-       try {
-         if (FQ === LQ.b.BLOCK) {
-           const FQ = wQ(28737)(`./${QQ}.glb`);
-           qQ = {
-             type: LQ.f.BASE64,
-             url: FQ
+     function ck() {
+       const {
+         t: kk
+       } = (0, lk.D)(), ek = (0, Ck.useNavigatePreserveSearch)(), ik = (0, nk.k)(), {
+         playerName: sk,
+         playerUrlName: Vk
+       } = (0, fk.y)(), Qk = (0, fk.p)(), Xk = (0, bk.e)(Qk.pathname), ck = Xk && ("urlId" in Xk ? `urlId:${Xk.urlId}` : `name:${Xk.lowerCaseName}`), Tk = (0, Dk.useRef)(ck);
+       Tk.current = ck;
+       const {
+         userContext: Zk,
+         isUserContextUpdating: Ok
+       } = (0, Hk.d)(), gk = (0, Dk.useRef)(null), Gk = (0, Dk.useRef)(null), Nk = (0, Dk.useRef)(null), Rk = (0, Dk.useRef)(!1), Jk = (0, Dk.useRef)((0, Sk.Nb)(tk)), [ke, ee] = (0, Dk.useState)((() => {
+         const kk = Xk && jk.c.peek(Zk, Xk);
+         return kk ? {
+           status: "loaded",
+           profile: kk,
+ ... (51 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L66-L74` → after: `L179-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L179-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L179-L202) · [Before (L66-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L66-L74)

```diff
-         } else if (FQ === LQ.b.ITEM) qQ = {
-           type: LQ.f.HTTP,
-           url: `${oQ.clientSideServerUrls.staticUrl}/models/${QQ}.glb`
-         };
-         else if (FQ === LQ.b.LIFEFORM) {
-           const FQ = wQ(33135)(`./${QQ}.glb`);
-           qQ = {
-             type: LQ.f.BASE64,
-             url: FQ
+         }(Zk, Xk).then((kk => {
+           Dk || ("loaded" === kk.status && (Nk.current = Zk, Rk.current = !0), ee((ek => "failed" === kk.status && fk(ek) ? ek : {
+             ...kk,
+             playerKey: ck
+           })))
+         })), () => {
+           Dk = !0
+         }
+       }), [Ok, ck, Zk, ie]);
+       const Se = "loading" === ke.status || ke.playerKey === ck || "loaded" === ke.status && !!Xk && "urlId" in Xk && ke.profile.urlId === Xk.urlId ? ke : {
+           status: "loading"
+         },
+         be = "loaded" === Se.status ? Se.profile : null,
+         re = "loading" === Se.status ? null : function(kk) {
+           if ("loaded" === kk.status) {
+             const {
+ ... (8 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L77-L84` → after: `L241-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L241-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L241-L343) · [Before (L77-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L77-L84)

```diff
-       } catch {
-         throw new Error(`Default model for ${QQ} not found`)
-       }
-       return qQ
-     }
- 
-     function HQ(QQ) {
-       return qQ.k[QQ]
+       }), [be, Ue]), (0, Wk.jsxs)("div", {
+         className: Fk()("PlayerProfile", {
+           PlayerProfilePortrait: ik
+         }),
+         children: [re && (0, Wk.jsx)(rk.e, {
+           meta: re
+         }), (0, Wk.jsxs)("div", {
+           className: "PlayerProfileBackgroundContainer",
+           children: [me && (0, Wk.jsx)(me, {}), !me && (0, Wk.jsx)("div", {
+             className: "PlayerProfileBackground",
+             style: {
+               backgroundImage: `url(${Jk.current})`
+             }
+           })]
+         }), (0, Wk.jsxs)("div", {
+           className: "PlayerProfileHeader",
+ ... (87 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L87` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L346) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L87)

```diff
-   33921: (QQ, FQ, wQ) => {
+   4823: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L89-L93` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L348) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L89-L93)

```diff
-       c: () => oQ,
-       e: () => kQ,
-       g: () => DQ,
-       h: () => qQ,
-       k: () => LQ
+       c: () => wk
```

#### 12. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L96-L180` → after: `L361-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L361-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L361-L364) · [Before (L96-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L96-L180)

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
- ... (69 more removed lines; see GitHub link above)
+       youtube: {
+         icon: "youtube",
+         color: "#FF0033",
+         name: "YouTube"
```

#### 13. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L182-L795` → after: `L366-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L366-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L366-L384) · [Before (L182-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L182-L795)

```diff
-       qQ = "/textures/dayNight/sun.png",
-       oQ = "/textures/dayNight/moon.png",
-       DQ = "/textures/dayNight/stars",
-       kQ = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
-   },
-   28728: (QQ, FQ, wQ) => {
-     var LQ = {
-       "./Player_Atlas.png": 27818,
-       "./astro_set_1_attachable.png": 27826,
-       "./astro_set_2_attachable.png": 27828,
-       "./astro_set_3_attachable.png": 27832,
-       "./astro_set_4_attachable.png": 27840,
-       "./beaver_lumberjack.png": 27846,
-       "./bee_set_1_attachable.png": 27851,
-       "./bee_set_2_attachable.png": 27859,
-       "./bee_set_3_attachable_blue.png": 27864,
- ... (598 more removed lines; see GitHub link above)
+       tiktok: {
+         icon: "tiktok",
+         color: "#0F0F0F",
+         name: "TikTok"
+       },
+       instagram: {
+         icon: "instagram",
+         color: "#E1306C",
+         name: "Instagram"
+       },
+       twitter: {
+         icon: "x-twitter",
+         color: "#0F0F0F",
+         name: "X"
+       },
+       twitch: {
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L1612-L1621` → after: `L389-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L389-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L389-L403) · [Before (L1612-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L1612-L1621)

```diff
-       var FQ = oQ(QQ);
-       return wQ(FQ)
-     }
- 
-     function oQ(QQ) {
-       if (!wQ.o(LQ, QQ)) {
-         var FQ = new Error("Cannot find module '" + QQ + "'");
-         throw FQ.code = "MODULE_NOT_FOUND", FQ
-       }
-       return LQ[QQ]
+       let {
+         platform: ek
+       } = kk;
+       const ik = "youtube" === ek;
+       return (0, xk.jsxs)("span", {
+         className: fk()("PlayerProfileSocialLinkIcon", {
+           PlayerProfileSocialLinkIconYoutube: ik
+         }),
+         children: [ik && (0, xk.jsx)(Kk.e, {
+           variant: "white"
+         }), !ik && (0, xk.jsx)(rk.d, {
+           name: nk[ek].icon,
+           kit: "brands"
+         })]
+       })
```

#### 15. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L3046-L3048` → after: `L407-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L407-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L407-L417) · [Before (L3046-L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L3046-L3048)

```diff
-       var FQ = oQ(QQ);
-       return wQ(FQ)
-     }
+       let {
+         platform: ek,
+         link: ik,
+         editable: Dk,
+         userContext: fk,
+         onLinksUpdated: Kk
+       } = kk;
+       const {
+         t: Hk
+       } = (0, bk.D)(), wk = nk[ek];
+       if (!ik && !Dk) return null;
```

#### 16. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L3050-L3053` → after: `L419-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L419-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L419-L444) · [Before (L3050-L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L3050-L3053)

```diff
-     function oQ(QQ) {
-       if (!wQ.o(LQ, QQ)) {
-         var FQ = new Error("Cannot find module '" + QQ + "'");
-         throw FQ.code = "MODULE_NOT_FOUND", FQ
+       function lk() {
+         var kk;
+         if (!fk || !Kk) return;
+         Mk.NotificationProvider.showInputPopup({
+           title: "homePage:profileSocialLinkEditTitle",
+           textOpts: {
+             title: {
+               platform: wk.name
+             }
+           },
+           prefixText: Sk.x[ek],
+           placeholderText: "playBloxd",
+           initialValue: null !== (kk = null === ik || void 0 === ik ? void 0 : ik.handle) && void 0 !== kk ? kk : "",
+           maxLength: 30,
+           submitText: "general:save",
+           secondaryButtonText: ik ? "general:remove" : void 0
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L3055-L3169` → after: `L446-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L446-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L446-L485) · [Before (L3055-L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L3055-L3169)

```diff
-       return LQ[QQ]
-     }
-     qQ.keys = function() {
-       return Object.keys(LQ)
-     }, qQ.resolve = oQ, QQ.exports = qQ, qQ.id = 9311
-   },
-   26520: (QQ, FQ, wQ) => {
-     var LQ = {
-       "./Air Walk.png": 26529,
-       "./Antlers Bonus.png": 26536,
-       "./Arrow Damage Enchantment.png": 26542,
-       "./Arrow Speed Enchantment.png": 26545,
-       "./Attack Speed Enchantment.png": 26548,
-       "./Blindness.png": 26552,
-       "./Boating.png": 26558,
-       "./Bounciness.png": 26560,
- ... (99 more removed lines; see GitHub link above)
+       if (ik) {
+         const kk = `@${ik.handle}`;
+         return (0, xk.jsxs)("a", {
+           className: "PlayerProfileSocialLink",
+           style: {
+             background: wk.color
+           },
+           href: ik.profileUrl,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: [(0, xk.jsxs)("div", {
+             className: "PlayerProfileSocialLinkMain",
+             children: [(0, xk.jsx)(Uk, {
+               platform: ek
+             }), (0, xk.jsx)("span", {
+               className: "PlayerProfileSocialLinkText",
+ ... (24 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L3171-L4908` → after: `L487-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L487-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L487-L514) · [Before (L3171-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L3171-L4908)

```diff
-       return LQ[QQ]
-     }
-     qQ.keys = function() {
-       return Object.keys(LQ)
-     }, qQ.resolve = oQ, QQ.exports = qQ, qQ.id = 26520
-   },
-   17093: (QQ, FQ, wQ) => {
-     var LQ = {
-       "./67.png": 17099,
-       "./67_projectile_base.png": 17106,
-       "./67_projectile_boosted.png": 17110,
-       "./AK-47.png": 17114,
-       "./AWP.png": 17116,
-       "./Block-19.png": 17118,
-       "./DMR.png": 17127,
-       "./Deagle.png": 17134,
- ... (1722 more removed lines; see GitHub link above)
+       return (0, xk.jsxs)("button", {
+         type: "button",
+         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
+         style: {
+           background: wk.color
+         },
+         ...(0, Pk.db)(),
+         onClick: () => {
+           lk()
+         },
+         children: [(0, xk.jsx)(Uk, {
+           platform: ek
+         }), (0, xk.jsxs)("span", {
+           className: "PlayerProfileSocialLinkText",
+           children: [(0, xk.jsx)("span", {
+             className: "PlayerProfileSocialLinkName SmallTextBold",
+ ... (12 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L4912-L4916` → after: `L518-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L518-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L518-L539) · [Before (L4912-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L4912-L4916)

```diff
-       if (!wQ.o(LQ, QQ)) {
-         var FQ = new Error("Cannot find module '" + QQ + "'");
-         throw FQ.code = "MODULE_NOT_FOUND", FQ
-       }
-       return LQ[QQ]
+       let {
+         socialLinks: ek,
+         editable: ik = !1,
+         userContext: Dk,
+         onLinksUpdated: fk
+       } = kk;
+       if (!ik && 0 === ek.length) return null;
+       const bk = new Map(ek.map((kk => [kk.platform, kk]))),
+         rk = ik ? Sk.w : ek.map((kk => kk.platform));
+       return (0, xk.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, xk.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: rk.map((kk => (0, xk.jsx)(Hk, {
+             platform: kk,
+             link: bk.get(kk),
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L5435-L17025` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/97.js#L542-L543) · [Before (L5435-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/97.js#L5435-L17025)

```diff
-   29684: QQ => {
-     QQ.exports = "data:model/gltf-binary;base64,Z2xURgIAAAC4CAAAGAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MzZ9LHsidHlwZSI6IlZFQzMiLCJjb21wb25lbnRUeXBlIjo1 … [truncated]
-   },
-   29692: QQ => {
-     QQ.exports = "data:model/gltf-binary;base64,Z2xURgIAAACwCQAAHAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MTA4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   29697: QQ => {
-     QQ.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA8CQAAGAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NzJ9LHsidHlwZSI6IlZFQzMiLCJjb21wb25lbnRUeXBlIjo1 … [truncated]
-   },
-   29706: QQ => {
-     QQ.exports = "data:model/gltf-binary;base64,Z2xURgIAAAAACAAAdAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjI4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   29715: QQ => {
-     QQ.exports = "data:model/gltf-binary;base64,Z2xURgIAAACUCwAAQAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NjU0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   29720: QQ => {
- ... (11575 more removed lines; see GitHub link above)
+   4817: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/98.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/98.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1)

#### 1. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2)

```diff
- export const ids = [98, 186];
+ export const ids = [98];
```

#### 2. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L4-L16` → after: `L4-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4-L110) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L4-L16)

```diff
-   8973: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       EverythingMenu: () => uk
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1070),
-       oQ = wQ.n(qQ),
-       DQ = wQ(1207),
-       kQ = wQ(1079),
-       vQ = wQ(2028),
-       mQ = wQ(1451),
-       uQ = wQ(1130),
-       HQ = wQ(1107);
+   28453: (kk, ek, ik) => {
+     var Dk = {
+       "./Player_Atlas.png": 27515,
+       "./astro_set_1_attachable.png": 27521,
+       "./astro_set_2_attachable.png": 27523,
+       "./astro_set_3_attachable.png": 27529,
+       "./astro_set_4_attachable.png": 27538,
+       "./beaver_lumberjack.png": 27543,
+       "./bee_set_1_attachable.png": 27548,
+       "./bee_set_2_attachable.png": 27550,
+       "./bee_set_3_attachable_blue.png": 27557,
+       "./bee_set_3_attachable_green.png": 27562,
+       "./bee_set_3_attachable_red.png": 27565,
+       "./bee_set_4_attachable.png": 27570,
+       "./capeTextures/cape_cow_cream.png": 27576,
+       "./capeTextures/cape_cow_normal.png": 27581,
+ ... (91 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L19-L94` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L113-L114) · [Before (L19-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L19-L94)

```diff
-       let {
-         items: FQ,
-         link: wQ,
-         onClick: LQ,
-         selectedItemId: qQ,
-         className: bQ,
-         padStartsOnTab: YQ = !0
-       } = QQ;
-       const {
-         t: xQ
-       } = (0, DQ.y)(), AQ = (0, uQ.i)(), tQ = [];
-       for (const oQ of FQ) {
-         var eQ;
-         const QQ = tQ[tQ.length - 1];
-         var MQ;
-         if (QQ && QQ.title === (null !== (eQ = oQ.section) && void 0 !== eQ ? eQ : null)) QQ.items.push(oQ);
- ... (60 more removed lines; see GitHub link above)
+       var ek = Sk(kk);
+       return ik(ek)
```

#### 4. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L111-L130` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L118-L120) · [Before (L111-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L111-L130)

```diff
-       let {
-         setApplySettingsCallback: FQ
-       } = QQ;
-       const {
-         clientEscMenuOptions: wQ
-       } = (0, iQ.l)(["clientEscMenuOptions"]), [qQ, oQ] = (0, LQ.useState)(!1), [DQ, kQ] = (0, LQ.useState)(!1), [vQ, uQ] = (0, LQ.useState)(6400), [bQ, YQ] = (0, LQ.useState)(3600), [xQ, AQ] = (0, LQ.useState)(!1), [tQ, eQ] = (0, LQ.useState)(!1);
- 
-       function MQ(QQ) {
-         const FQ = "screenshot" === QQ ? kQ : oQ;
-         FQ(!0);
-         const wQ = xQ ? "normals" : tQ ? "depth" : null;
-         WQ.devTools.downloadScene(QQ, {
-           width: vQ,
-           height: bQ,
-           colouring: wQ
-         }).catch((QQ => {
- ... (4 more removed lines; see GitHub link above)
+       if (!ik.o(Dk, kk)) {
+         var ek = new Error("Cannot find module '" + kk + "'");
+         throw ek.code = "MODULE_NOT_FOUND", ek
```

#### 5. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L132-L233` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L122) · [Before (L132-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L132-L233)

```diff
-       return (0, HQ.jsxs)("div", {
-         className: "DeveloperToolsCategory",
-         children: [(0, HQ.jsx)(SQ.e, {
-           label: "Disable Ambient Occlusion",
-           checked: wQ.disableAmbientOcclusion,
-           onClick: QQ => {
-             iQ.c.setClientEscMenuOptions({
-               disableAmbientOcclusion: QQ
-             }), FQ((() => SQ.h))
-           },
-           circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
-         }), WQ.devTools.supports("ambientLight") && (0, HQ.jsx)(SQ.g, {
-           name: "Ambient Lighting Intensity",
-           min: 0,
-           max: 1,
-           step: .01,
- ... (86 more removed lines; see GitHub link above)
+       return Dk[kk]
```

#### 6. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L235-L253` → after: `L124-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L124-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L124-L271) · [Before (L235-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L235-L253)

```diff
-     var OQ = wQ(134),
-       sQ = wQ(1147),
-       rQ = wQ(1213),
-       IQ = wQ(2913),
-       UQ = wQ(1503),
-       NQ = wQ(1282),
-       TQ = wQ(1246),
-       KQ = wQ(2974),
-       zQ = wQ(2001),
-       lQ = wQ(1489),
-       jQ = wQ(317),
-       aQ = wQ(2188),
-       XQ = wQ(2197),
-       fQ = wQ(2598),
-       VQ = wQ(1645),
-       hQ = wQ(2955),
- ... (3 more removed lines; see GitHub link above)
+     fk.keys = function() {
+       return Object.keys(Dk)
+     }, fk.resolve = Sk, kk.exports = fk, fk.id = 28453
+   },
+   32823: (kk, ek, ik) => {
+     var Dk = {
+       "./67/67_Model.glb": 32831,
+       "./67/67_Reconstructed.glb": 32840,
+       "./Armour Collector/Armour Collector_Model.glb": 32842,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 32850,
+       "./Bear/Bear_Model.glb": 32855,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 32864,
+       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 32870,
+       "./Camel/Camel_Model.glb": 32877,
+       "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 32879,
+       "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 32884,
+ ... (132 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L256-L291` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L274-L275) · [Before (L256-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L256-L291)

```diff
-       const {
-         t: FQ,
-         selectedLanguage: wQ
-       } = (0, DQ.y)(), {
-         userContext: qQ
-       } = (0, xQ.e)(), {
-         superRankInfo: oQ
-       } = qQ, kQ = QQ && ((0, jQ.Bc)(oQ) || qQ.ranksMayChange) && (0, XQ.purchasesAllowed)(), {
-         accountId: vQ,
-         data: mQ
-       } = (0, fQ.h)(hQ.c, kQ);
-       if ((0, LQ.useEffect)((() => {
-           if (kQ) return hQ.c.watchAccount(), VQ.e.addRefetchListener("billing", (QQ => {
-             "reconnected" === QQ ? hQ.c.refreshAfterReconnect() : hQ.c.refresh()
-           }))
-         }), [kQ]), !kQ || !(0, jQ.Bc)(oQ) || null === mQ || vQ !== qQ.whamm) return null;
- ... (20 more removed lines; see GitHub link above)
+       var ek = Sk(kk);
+       return ik(ek)
```

#### 8. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L301-L363` → after: `L279-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L279-L281) · [Before (L301-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L301-L363)

```diff
-       let {
-         showing: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, DQ.y)(), {
-         data: LQ,
-         failed: qQ
-       } = (0, fQ.h)(dQ.f, FQ);
-       return 0 === (null === LQ || void 0 === LQ ? void 0 : LQ.length) || null === LQ && !qQ ? null : (0, HQ.jsxs)("div", {
-         className: "SettingBox AccountSettingsPaymentHistory",
-         children: [(0, HQ.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: wQ("paymentHistory:title")
-         }), null === LQ && qQ && (0, HQ.jsx)("div", {
-           className: "AccountSettingsPaymentHistoryError",
- ... (47 more removed lines; see GitHub link above)
+       if (!ik.o(Dk, kk)) {
+         var ek = new Error("Cannot find module '" + kk + "'");
+         throw ek.code = "MODULE_NOT_FOUND", ek
```

#### 9. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L366-L380` → after: `L285-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L285-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L285-L601) · [Before (L366-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L366-L380)

```diff
-     var mF = wQ(307),
-       uF = wQ(2424);
-     const HF = {
-       appStore: {
-         name: "App Store",
-         ...mF.Ub.appStore
-       },
-       googlePlay: {
-         name: "Google Play",
-         ...mF.Ub.googlePlay
-       },
-       discord: {
-         name: "Discord",
-         ...mF.Ub.discord
-       }
+     fk.keys = function() {
+       return Object.keys(Dk)
+     }, fk.resolve = Sk, kk.exports = fk, fk.id = 32823
+   },
+   26738: (kk, ek, ik) => {
+     var Dk = {
+       "./67/67_Atlas.png": 26742,
+       "./67/variations/0_67_default.png": 26749,
+       "./Armour Collector/Armour Collector_Atlas.png": 26757,
+       "./Armour Collector/variations/0_armour collector_default.png": 26760,
+       "./Bear/BearSaddle_Atlas.png": 26767,
+       "./Bear/Bear_Atlas.png": 26772,
+       "./Bear/variations/0_bear_default.png": 26774,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 26783,
+       "./Bobino Musculino/variations/0_bobino musculino_default.png": 26789,
+       "./Camel/CamelSaddle_Atlas.png": 26796,
+ ... (301 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L384-L494` → after: `L605-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L605-L606) · [Before (L384-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L384-L494)

```diff
-       let {
-         warning: FQ,
-         subscriptions: wQ
-       } = QQ;
-       const {
-         t: LQ
-       } = (0, DQ.y)();
-       return null !== wQ && 0 === wQ.length ? (0, HQ.jsx)(HQ.Fragment, {
-         children: LQ(FQ)
-       }) : (0, HQ.jsxs)("div", {
-         className: "DeleteAccountSubtitle",
-         children: [LQ(FQ), null === wQ && (0, HQ.jsx)("div", {
-           className: "DeleteAccountSubtitleNote",
-           children: LQ("auth:deleteAccountSubscriptionsLoadFailed")
-         }), null !== wQ && (0, HQ.jsxs)(HQ.Fragment, {
-           children: [(0, HQ.jsx)("div", {
- ... (95 more removed lines; see GitHub link above)
+       var ek = Sk(kk);
+       return ik(ek)
```

#### 11. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L501-L586` → after: `L610-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L610-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L610-L612) · [Before (L501-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L501-L586)

```diff
-       let {
-         showing: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, DQ.y)(), {
-         data: LQ,
-         failed: qQ
-       } = (0, fQ.h)(xF.c, FQ), oQ = null === LQ ? null : (0, xF.d)(LQ);
-       return (0, HQ.jsxs)("div", {
-         className: "SettingBox BlockedAndIgnoredPlayers",
-         children: [(0, HQ.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: wQ("settingsMenu:blockedAndIgnoredPlayers")
-         }), null === oQ && !qQ && (0, HQ.jsx)(CQ.c, {}), null === oQ && qQ && (0, HQ.jsxs)("div", {
-           className: "BlockedAndIgnoredPlayersError",
- ... (70 more removed lines; see GitHub link above)
+       if (!ik.o(Dk, kk)) {
+         var ek = new Error("Cannot find module '" + kk + "'");
+         throw ek.code = "MODULE_NOT_FOUND", ek
```

#### 12. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L588-L868` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L614) · [Before (L588-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L588-L868)

```diff
-       return (0, LQ.useEffect)((() => (!0 === wQ ? (clearInterval(oF.current), oF.current = setInterval(AQ, 1e3)) : clearInterval(oF.current), () => {
-         clearInterval(oF.current)
-       })), [wQ, AQ]), (0, LQ.useEffect)((() => {
-         var QQ;
-         pQ(null !== (QQ = tQ.getPlayerName()) && void 0 !== QQ ? QQ : "")
-       }), [tQ]), (0, LQ.useEffect)((() => {
-         if (!wQ || !tF || MQ) return;
-         let QQ = !1;
-         return AF(!0), bF([]), lQ.b.getPlayerProfile(tQ, {
-           lowerCaseName: tQ.getPlayerName().toLowerCase()
-         }).then((FQ => {
-           QQ || bF(FQ.socialLinks)
-         })).catch((QQ => {
-           console.error("Failed to load social links", QQ)
-         })).finally((() => {
-           QQ || AF(!1)
- ... (265 more removed lines; see GitHub link above)
+       return Dk[kk]
```

#### 13. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L870-L1055` → after: `L616-L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L616-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L616-L1425) · [Before (L870-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L870-L1055)

```diff
-     var pF = wQ(8995),
-       cF = wQ(3029),
-       CF = wQ(1265),
-       SF = wQ(1440);
-     const iF = (0, LQ.memo)((function(QQ) {
-         let {
-           inGame: FQ
-         } = QQ;
-         const {
-           t: wQ,
-           selectedLanguage: LQ
-         } = (0, DQ.y)(), {
-           clientEscMenuOptions: qQ,
-           showDebugOverlay: oQ
-         } = (0, iQ.l)(["clientEscMenuOptions", "showDebugOverlay"]), kQ = (0, AQ.l)("hideCoordinates");
-         let vQ = "settingsMenu:showCoordinates",
- ... (170 more removed lines; see GitHub link above)
+     fk.keys = function() {
+       return Object.keys(Dk)
+     }, fk.resolve = Sk, kk.exports = fk, fk.id = 26738
+   },
+   28461: (kk, ek, ik) => {
+     var Dk = {
+       "./2_block.glb": 28464,
+       "./67.glb": 28471,
+       "./Artisan Bench.glb": 28473,
+       "./Aspen Door.glb": 28480,
+       "./Aspen Item Pedestal.glb": 28487,
+       "./Aspen Ladder.glb": 28496,
+       "./Aspen Trapdoor.glb": 28498,
+       "./Black Banner.glb": 28507,
+       "./Black Bed.glb": 28515,
+       "./Black Directional Arrow.glb": 28523,
+ ... (794 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L1637-L1642` → after: `L1429-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1429-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L1429-L1430) · [Before (L1637-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L1637-L1642)

```diff
-       return {
-         backgroundImage: `url(${QQ})`,
-         backgroundSize: `${iw} ${iw}`,
-         backgroundRepeat: "repeat",
-         imageRendering: "pixelated"
-       }
+       var ek = Sk(kk);
+       return ik(ek)
```

#### 15. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L1646-L1667` → after: `L1434-L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1434-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L1434-L1436) · [Before (L1646-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L1646-L1667)

```diff
-       return {
-         ...(() => {
-           switch (QQ) {
-             case "sky":
-               return {
-                 backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
-               };
-             case "grass":
-               return Ww(Mw);
-             case "stone":
-               return Ww(Gw);
-             case "sand":
-               return Ww(pw);
-             case "snow":
-               return Ww(Cw);
-             case "night":
- ... (6 more removed lines; see GitHub link above)
+       if (!ik.o(Dk, kk)) {
+         var ek = new Error("Cannot find module '" + kk + "'");
+         throw ek.code = "MODULE_NOT_FOUND", ek
```

#### 16. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L1672-L1804` → after: `L2863-L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2863-L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L2863-L2864) · [Before (L1672-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L1672-L1804)

```diff
-       return Object.freeze({
-         ...kw.e,
-         style: "shapes",
-         outline: 1,
-         lines: !1,
-         ...QQ
-       })
-     }
-     const sw = [{
-         id: "default",
-         settings: kw.e
-       }, {
-         id: "cross",
-         settings: Ow({
-           color: 5046092,
-           lines: !0,
- ... (117 more removed lines; see GitHub link above)
+       var ek = Sk(kk);
+       return ik(ek)
```

#### 17. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L1808-L1896` → after: `L2868-L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2868-L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L2868-L2870) · [Before (L1808-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L1808-L1896)

```diff
-       let {
-         settings: FQ,
-         touch: wQ,
-         backdrop: LQ,
-         onChange: qQ
-       } = QQ;
-       const {
-         t: kQ
-       } = (0, DQ.y)(), vQ = function(QQ) {
-         var FQ;
-         return null !== (FQ = sw.find((FQ => (0, kw.n)(FQ.settings, QQ, rw)))) && void 0 !== FQ ? FQ : null
-       }(FQ);
-       return (0, HQ.jsx)("div", {
-         className: "CrosshairPresets",
-         role: "radiogroup",
-         "aria-label": kQ("crosshairSettings:presets"),
- ... (73 more removed lines; see GitHub link above)
+       if (!ik.o(Dk, kk)) {
+         var ek = new Error("Cannot find module '" + kk + "'");
+         throw ek.code = "MODULE_NOT_FOUND", ek
```

#### 18. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L1899-L2391` → after: `L2874-L2975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2874-L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L2874-L2975) · [Before (L1899-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L1899-L2391)

```diff
- 
-     function lw(QQ) {
-       let {
-         settings: FQ,
-         touch: wQ,
-         backdrop: LQ,
-         className: qQ,
-         children: DQ,
-         label: kQ
-       } = QQ;
-       const vQ = zw(FQ, ".CrosshairStageControls");
-       return (0, HQ.jsxs)("div", {
-         className: oQ()("CrosshairStage", qQ),
-         style: Rw(LQ),
-         ...vQ.handlers,
-         children: [(0, HQ.jsx)("div", {
- ... (477 more removed lines; see GitHub link above)
+     fk.keys = function() {
+       return Object.keys(Dk)
+     }, fk.resolve = Sk, kk.exports = fk, fk.id = 9120
+   },
+   26184: (kk, ek, ik) => {
+     var Dk = {
+       "./Air Walk.png": 26188,
+       "./Antlers Bonus.png": 26191,
+       "./Arrow Damage Enchantment.png": 26196,
+       "./Arrow Speed Enchantment.png": 26198,
+       "./Attack Speed Enchantment.png": 26200,
+       "./Blindness.png": 26209,
+       "./Boating.png": 26218,
+       "./Bounciness.png": 26227,
+       "./Brain Rot.png": 26232,
+       "./Break Speed Enchantment.png": 26237,
+ ... (86 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2418` → after: `L2979-L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2979-L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L2979-L2980) · [Before (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2418)

```diff
-       return QQ ? "general" : "account"
+       var ek = Sk(kk);
+       return ik(ek)
```

#### 20. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2605-L2641` → after: `L2984-L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2984-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L2984-L2988) · [Before (L2605-L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2605-L2641)

```diff
-       let {
-         show: FQ
-       } = QQ;
-       const {
-         userContext: wQ
-       } = (0, xQ.e)(), [qQ, oQ] = (0, LQ.useState)("characters");
-       if (!FQ) return null;
-       const DQ = YL.filter((QQ => "cape" !== QQ && "nameColour" !== QQ || wQ.getPlayerRanks().includes("super") || (0, XQ.purchasesAllowed)())).map((QQ => ({
-         id: QQ,
-         faIcon: mF.C[QQ],
-         title: mF.E[QQ],
-         redDot: !1
-       })));
-       return (0, HQ.jsxs)("div", {
-         className: "Menu CharCustomisation",
-         children: [(0, HQ.jsx)("div", {
- ... (21 more removed lines; see GitHub link above)
+       if (!ik.o(Dk, kk)) {
+         var ek = new Error("Cannot find module '" + kk + "'");
+         throw ek.code = "MODULE_NOT_FOUND", ek
+       }
+       return Dk[kk]
```

#### 21. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2643-L2661` → after: `L2990-L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2990-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L2990-L4721) · [Before (L2643-L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2643-L2661)

```diff
-     var tL = wQ(1464),
-       eL = wQ(1467),
-       ML = wQ(9094),
-       GL = wQ(4376),
-       pL = wQ(3282),
-       cL = wQ(3331),
-       CL = wQ(9127),
-       SL = wQ(8523),
-       iL = wQ(9103),
-       WL = wQ(9116),
-       RL = wQ(1887),
-       OL = wQ(1873),
-       sL = wQ(4737),
-       rL = wQ(1276),
-       IL = wQ(1237),
-       UL = wQ(1668),
- ... (3 more removed lines; see GitHub link above)
+     fk.keys = function() {
+       return Object.keys(Dk)
+     }, fk.resolve = Sk, kk.exports = fk, fk.id = 26184
+   },
+   16829: (kk, ek, ik) => {
+     var Dk = {
+       "./67.png": 16837,
+       "./67_projectile_base.png": 16840,
+       "./67_projectile_boosted.png": 16845,
+       "./AK-47.png": 16847,
+       "./AWP.png": 16853,
+       "./Block-19.png": 16862,
+       "./DMR.png": 16868,
+       "./Deagle.png": 16871,
+       "./Double-barreled.png": 16877,
+       "./FMR.png": 16885,
+ ... (1716 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2664-L2668` → after: `L4724-L4725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4724-L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4724-L4725) · [Before (L2664-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2664-L2668)

```diff
-       return QQ ? Object.keys(QQ).sort(((FQ, wQ) => {
-         var LQ, qQ, oQ, DQ;
-         const kQ = (null !== (LQ = null === (qQ = QQ[wQ]) || void 0 === qQ ? void 0 : qQ.sortPriority) && void 0 !== LQ ? LQ : 0) - (null !== (oQ = null === (DQ = QQ[FQ]) || void 0 === DQ ? void 0 : DQ.sortPriority) && void 0 !== oQ ? oQ : 0);
-         return 0 !== kQ ? kQ : FQ.localeCompare(wQ)
-       })) : []
+       var ek = Sk(kk);
+       return ik(ek)
```

#### 23. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2685-L2693` → after: `L4729-L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4729-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4729-L4733) · [Before (L2685-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2685-L2693)

```diff
-       for (const {
-           threshold: FQ,
-           suffix: wQ
-         }
-         of lL)
-         if (QQ >= FQ) {
-           const LQ = QQ / FQ;
-           return LQ >= 100 ? `${Math.floor(LQ)}${wQ}` : LQ >= 10 ? `${LQ.toFixed(1).replace(/\.0$/,"")}${wQ}` : `${LQ.toFixed(2).replace(/\.?0+$/,"")}${wQ}`
-         } return String(QQ)
+       if (!ik.o(Dk, kk)) {
+         var ek = new Error("Cannot find module '" + kk + "'");
+         throw ek.code = "MODULE_NOT_FOUND", ek
+       }
+       return Dk[kk]
```

#### 24. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2695` → after: `L4735-L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4735-L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4735-L4751) · [Before (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2695)

```diff
-     var aL = wQ(4867);
+     fk.keys = function() {
+       return Object.keys(Dk)
+     }, fk.resolve = Sk, kk.exports = fk, fk.id = 16829
+   },
+   9011: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       blockMetadata: () => bk.g,
+       getDefaultModel: () => Mk,
+       getDefaultSkyBox: () => Kk,
+       getDefaultTexture: () => mk,
+       textureNameToIndex: () => bk.s
+     });
+     var Dk = ik(3139),
+       fk = ik(33615),
+       Sk = ik(1177),
+       bk = ik(9020),
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2697-L2802` → after: `L4753-L4755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4753-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4753-L4755) · [Before (L2697-L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2697-L2802)

```diff
-         normal: "0.8em",
-         big: "1em"
-       },
-       fL = (0, LQ.memo)((function(QQ) {
-         let {
-           item: FQ,
-           amount: wQ = 0,
-           size: LQ = "normal",
-           tier: qQ = null
-         } = QQ;
-         return (0, HQ.jsx)("div", {
-           className: oQ()("SmpSlot", `SmpSlot-${LQ}`),
-           children: FQ && (0, HQ.jsx)(RL.e, {
-             itemName: FQ,
-             amount: wQ > 1 ? wQ : 0,
-             amountFontSize: XL[LQ],
- ... (90 more removed lines; see GitHub link above)
+       block: kk => ik(9120)(`./${kk}.png`),
+       item: kk => ik(16829)(`./${kk}.png`)
+     };
```

#### 26. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2804-L2845` → after: `L4757-L4762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4757-L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4757-L4762) · [Before (L2804-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2804-L2845)

```diff
-     function PL(QQ) {
-       let {
-         value: FQ,
-         onChange: wQ,
-         min: qQ = 1,
-         max: oQ,
-         step: DQ = 1,
-         label: kQ
-       } = QQ;
-       const vQ = (0, LQ.useRef)(null),
-         mQ = (0, LQ.useRef)(FQ);
-       mQ.current = FQ;
-       const [uQ, bQ] = (0, LQ.useState)(null), YQ = QQ => Math.max(qQ, Math.min(oQ, Math.floor(QQ))), xQ = QQ => {
-         const FQ = mQ.current,
-           LQ = "function" === typeof DQ ? DQ(FQ, QQ) : DQ,
-           qQ = YQ(FQ + LQ * QQ);
- ... (26 more removed lines; see GitHub link above)
+     function mk(kk, ek) {
+       let fk;
+       try {
+         if (ek === Dk.f.BLOCK) fk = {
+           type: Dk.g.BASE64,
+           url: Pk.block(kk)
```

#### 27. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2847-L2878` → after: `L4764-L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4764-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4764-L4780) · [Before (L2847-L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2847-L2878)

```diff
-         return QQ.addEventListener("blur", FQ), () => {
-           QQ.removeEventListener("blur", FQ)
-         }
-       }), []);
-       const AQ = QQ => (0, HQ.jsx)("button", {
-         type: "button",
-         className: "SmpStepButton",
-         "aria-label": `${QQ>0?"More":"Less"} ${kQ}`,
-         disabled: QQ > 0 ? FQ >= oQ : FQ <= qQ,
-         onPointerDown: FQ => {
-           0 === FQ.button && (xQ(QQ), bQ(QQ))
-         },
-         onKeyDown: FQ => {
-           "Enter" !== FQ.key && " " !== FQ.key || xQ(QQ)
-         },
-         onContextMenu: QQ => {
- ... (16 more removed lines; see GitHub link above)
+         else if (ek === Dk.f.ITEM) fk = {
+           type: Dk.g.BASE64,
+           url: Pk.item(kk)
+         };
+         else if (ek === Dk.f.ICON) fk = {
+           type: Dk.g.BASE64,
+           url: ik(26184)(`./${kk}.png`)
+         };
+         else if (ek === Dk.f.LIFEFORM_ATLAS) {
+           let ek;
+           for (const ik of rk.m)
+             if (kk.startsWith(ik)) {
+               ek = ik;
+               break
+             } fk = {
+             type: Dk.g.BASE64,
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2880-L2907` → after: `L4782-L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4782-L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4782-L4784) · [Before (L2880-L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2880-L2907)

```diff
-         }), AQ(1)]
-       })
-     }
- 
-     function ZL(QQ) {
-       return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, QQ))) - 1))
-     }
-     var yL = wQ(9125),
-       BL = wQ(1254);
-     const dL = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
-     BL.A, jQ.Kc.length;
-     new Map;
-     var Qq = wQ(3149);
- 
-     function Fq(QQ, FQ) {
-       var wQ;
- ... (12 more removed lines; see GitHub link above)
+         } else ek === Dk.f.PLAYER_ASSET && (fk = {
+           type: Dk.g.BASE64,
+           url: ik(28453)(`./${kk}.png`)
```

#### 29. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2914-L2984` → after: `L4793-L4799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4793-L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4793-L4799) · [Before (L2914-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2914-L2984)

```diff
-       var wQ;
-       return null !== (wQ = wq(QQ, FQ)[0]) && void 0 !== wQ ? wQ : null
-     }
-     const qq = "50% 0% 50% 0%",
-       oq = [{
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
+       let fk;
+       try {
+         if (ek === Dk.c.BLOCK) {
+           const ek = ik(28461)(`./${kk}.glb`);
+           fk = {
+             type: Dk.g.BASE64,
+             url: ek
```

#### 30. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2986` → after: `L4801-L4803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4801-L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4801-L4803) · [Before (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2986)

```diff
-           return !0
+         } else if (ek === Dk.c.ITEM) fk = {
+           type: Dk.g.HTTP,
+           url: `${Sk.clientSideServerUrls.staticUrl}/models/${kk}.glb`
```

#### 31. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2988-L3048` → after: `L4805-L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4805-L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4805-L4809) · [Before (L2988-L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L2988-L3048)

```diff
-       return QQ.filter((QQ => DQ(QQ.lowerLabel) || DQ(QQ.lowerName)))
-     }
- 
-     function uq(QQ, FQ) {
-       var wQ;
-       return null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ[FQ]) && void 0 !== wQ ? wQ : FQ
-     }
- 
-     function Hq(QQ, FQ) {
-       const wQ = QQ.userInput;
-       return void 0 !== FQ && "dropdown" === (null === wQ || void 0 === wQ ? void 0 : wQ.type) && wQ.dropdownOptions.map(SL.f).includes(FQ) ? FQ : function(QQ) {
-         const FQ = QQ.userInput;
-         if ("dropdown" !== (null === FQ || void 0 === FQ ? void 0 : FQ.type) || 0 === FQ.dropdownOptions.length) return null;
-         const wQ = FQ.dropdownOptions.map(SL.f);
-         return FQ.initialValue && wQ.includes(FQ.initialValue) ? FQ.initialValue : wQ[wQ.length - 1]
-       }(QQ)
- ... (45 more removed lines; see GitHub link above)
+         else if (ek === Dk.c.LIFEFORM) {
+           const ek = ik(32823)(`./${kk}.glb`);
+           fk = {
+             type: Dk.g.BASE64,
+             url: ek
```

#### 32. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L3137-L3184` → after: `L4812-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4812-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4812-L4813) · [Before (L3137-L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L3137-L3184)

```diff
-       }(QQ, FQ), kQ = (0, LQ.useMemo)((() => function() {
-         var QQ;
-         let FQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
-           wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
-           LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         const qQ = `${(0,Qq.f)()}\x1f${FQ.join("\x1e")}\x1f${wQ.join("\x1e")}\x1f${JSON.stringify(LQ)}`;
-         if ((null === (QQ = vq) || void 0 === QQ ? void 0 : QQ.key) === qQ) return vq.items;
-         const oQ = new Set(wQ),
-           DQ = new Set,
-           kQ = [],
-           vQ = (QQ, FQ) => {
-             var wQ;
-             if (!QQ || DQ.has(QQ) || oQ.has(QQ)) return;
-             DQ.add(QQ);
-             const qQ = null !== (wQ = LQ[QQ]) && void 0 !== wQ ? wQ : QQ;
-             kQ.push({
- ... (32 more removed lines; see GitHub link above)
+       } catch {
+         throw new Error(`Default model for ${kk} not found`)
```

#### 33. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L3189-L3455` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4819) · [Before (L3189-L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L3189-L3455)

```diff
-       let {
-         browser: FQ,
-         children: wQ
-       } = QQ;
-       const {
-         t: LQ
-       } = (0, DQ.y)(), qQ = xq();
-       return (0, HQ.jsxs)("div", {
-         className: "SmpTopBar",
-         children: [(0, HQ.jsx)("div", {
-           className: "SmpSearch",
-           children: (0, HQ.jsx)(cQ.b, {
-             className: "SmpSearchInput",
-             placeholderText: LQ("smpShop:searchPlaceholder"),
-             defaultValue: FQ.query,
-             onValueChange: QQ => {
- ... (251 more removed lines; see GitHub link above)
+       return fk.p[kk]
```

#### 34. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L3457-L4782` → after: `L4821-L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4821-L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4821-L4833) · [Before (L3457-L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L3457-L4782)

```diff
-     const sq = [1, 10, 100],
-       rq = [1, 10, 100, 999];
- 
-     function Iq(QQ) {
-       var FQ, wQ, qQ, vQ, uQ, bQ, YQ, xQ, AQ, tQ;
-       const {
-         t: eQ
-       } = (0, DQ.y)(), MQ = xq(), {
-         creator: GQ,
-         mode: pQ
-       } = QQ, [CQ, SQ] = (0, LQ.useState)(null !== (FQ = null === GQ || void 0 === GQ ? void 0 : GQ.meta.item) && void 0 !== FQ ? FQ : null), [iQ, WQ] = (0, LQ.useState)(1), [RQ, OQ] = (0, LQ.useState)(0), [sQ, rQ] = (0, LQ.useState)(""), [IQ, UQ] = (0, LQ.useState)(0), NQ = (0,  … [truncated]
-       (0, LQ.useEffect)((() => {
-         QQ.searching || null === lQ || lQ === NQ.current || (NQ.current = lQ, TQ.current = !1, SQ(lQ), OQ(0), WQ("list" === pQ ? Math.max(1, jQ) : 1))
-       }), [lQ, QQ.searching]);
-       const aQ = !!GQ && !!CQ && GQ.meta.item === CQ,
-         XQ = aQ ? GQ.meta.owned : null !== (vQ = null === (uQ = QQ.inventory) || void 0 === uQ || null === (bQ = uQ.find((QQ => QQ.item === CQ))) || void 0 === bQ ? void 0 : bQ.quantity) && void 0 !== vQ ? vQ : 0,
- ... (1310 more removed lines; see GitHub link above)
+   },
+   33615: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Sk,
+       f: () => rk,
+       i: () => bk,
+       m: () => fk,
+       p: () => Dk
+     });
+     const Dk = {
+         default: {
+           type: "earth",
+           vertexTint: [137, 207, 240]
```

#### 35. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L4784-L4842` → after: `L4835-L4842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4835-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4835-L4842) · [Before (L4784-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L4784-L4842)

```diff
-         fQ = QQ => {
-           xQ((FQ => XQ(FQ, QQ)))
-         };
-       (0, OF.g)(NL.k, (() => {
-         xQ((QQ => {
-           const FQ = (0, NL.o)(zL(QQ.shopInfo), QQ.selectedCategoryKey, (FQ => (0, NL.h)(QQ.shopInfo[FQ].items)));
-           return FQ === QQ.selectedCategoryKey ? QQ : XQ(QQ, FQ)
-         }))
-       })), (0, OF.g)("showShopFromServer", (QQ => {
-         let {
-           toggle: FQ,
-           Xw: wQ
-         } = QQ;
-         wQ && fQ(wQ), 0 === Object.keys(YQ.shopInfo).length || FQ && qQ ? iQ.c.set({
-           openEverythingMenuName: null
-         }) : iQ.c.set({
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

#### 36. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L4844-L4980` → after: `L4844-L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4844-L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4844-L4851) · [Before (L4844-L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L4844-L4980)

```diff
-         EQ = (QQ, FQ) => {
-           var wQ, LQ, qQ;
-           const DQ = gq(hQ, QQ),
-             kQ = YQ.shopInfo[hQ].items[QQ],
-             uQ = YQ.userInputsPerItem[DQ],
-             bQ = (0, SL.c)(kQ, uQ),
-             xQ = JQ(kQ, bQ),
-             AQ = kQ.enchant,
-             tQ = AQ ? (0, jQ.ub)(null !== (wQ = kQ.customTitle) && void 0 !== wQ ? wQ : QQ, {
-               colour: jQ.pb[AQ.tier]
-             }) : null !== (LQ = kQ.customTitle) && void 0 !== LQ ? LQ : QQ,
-             eQ = FQ => {
-               const wQ = null !== FQ && void 0 !== FQ ? FQ : uQ,
-                 LQ = void 0 !== FQ ? (0, SL.c)(kQ, FQ) : bQ;
-               JQ(kQ, LQ) && null !== wQ && aQ(QQ, kQ, FQ);
-               let qQ = YQ.redDotInfo;
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

#### 37. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L4982-L5100` → after: `L4853-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4853-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4853-L4860) · [Before (L4982-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L4982-L5100)

```diff
-         nQ = function(QQ) {
-           for (const FQ in QQ)
-             if (QQ[FQ].smp) return !0;
-           return !1
-         }(YQ.shopInfo),
-         gQ = Fq(YQ.shopInfo, hQ);
-       return (0, HQ.jsx)(pL.b, {
-         className: "Menu ShopBody",
-         show: qQ,
-         children: 0 !== Object.keys(YQ.shopInfo).length && (0, HQ.jsxs)(HQ.Fragment, {
-           children: [(0, HQ.jsxs)("div", {
-             className: "MenuSideBar",
-             children: [(0, HQ.jsx)(bQ, {
-               items: zL(YQ.shopInfo).map((QQ => {
-                 var FQ;
-                 return {
- ... (103 more removed lines; see GitHub link above)
+         space_blue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_blue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_blue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_blue/_nz.jpg",
+           px: "/textures/skyBoxes/space_blue/_px.jpg",
+           py: "/textures/skyBoxes/space_blue/_py.jpg",
+           pz: "/textures/skyBoxes/space_blue/_pz.jpg"
```

#### 38. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L5102-L5114` → after: `L4862-L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4862-L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4862-L4869) · [Before (L5102-L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L5102-L5114)

```diff
-         children: (0, HQ.jsx)(sL.d, {
-           game: {
-             schematicId: oQ
-           }
-         })
-       });
-       var vQ, mQ;
-       if ((0, RL.g)(qQ)) return (0, HQ.jsx)("div", {
-         className: "ShopBlock",
-         style: {
-           minWidth: `${wQ}rem`,
-           height: "0",
-           minHeight: `${LQ}rem`
+         space_lightblue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
+           px: "/textures/skyBoxes/space_lightblue/_px.jpg",
+           py: "/textures/skyBoxes/space_lightblue/_py.jpg",
+           pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
```

#### 39. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L5116-L5151` → after: `L4871-L4878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4871-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4871-L4878) · [Before (L5116-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L5116-L5151)

```diff
-         children: (0, HQ.jsx)(RL.e, {
-           itemName: qQ,
-           amount: null !== (vQ = FQ.amount) && void 0 !== vQ ? vQ : 0,
-           amountFontSize: LQ / 4 + "rem",
-           enchantmentTier: null === (mQ = FQ.enchant) || void 0 === mQ ? void 0 : mQ.tier
-         })
-       });
-       const uQ = qQ.slice(-4);
-       return ".jpg" === uQ || ".png" === uQ ? (0, HQ.jsx)(Bq, {
-         image: qQ,
-         minWidth: wQ
-       }) : (0, HQ.jsx)(kQ.c, {
-         name: qQ,
-         className: "SelectedItemImage",
-         style: {
-           color: DQ
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

#### 40. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L5153-L5465` → after: `L4880-L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4880-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4880-L4887) · [Before (L5153-L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L5153-L5465)

```diff
-         src: `/textures/games/${(0,jQ.Wb)(LQ)}/${FQ}`,
-         alt: FQ,
-         draggable: !1
-       })
-     }
- 
-     function dq(QQ) {
-       let {
-         item: FQ,
-         cost: wQ,
-         currencyAmounts: LQ
-       } = QQ;
-       const qQ = !isNaN(wQ) && 0 !== wQ && Pq(LQ, FQ.currency);
-       let oQ = null;
-       return FQ.buyButtonText ? oQ = FQ.buyButtonText : qQ ? (oQ = wQ, FQ.sell && (oQ = -1 * wQ), oQ = oQ.toString()) : 0 === wQ ? oQ = "Free" : FQ.isRewardedAd && (oQ = "Watch ad"), (0, VF.F)(oQ) || " " === oQ ? null : (0, HQ.jsxs)("div", {
-         className: "BuyItemCostAndIcon",
- ... (297 more removed lines; see GitHub link above)
+         underwater: {
+           type: "custom",
+           nx: "/textures/skyBoxes/underwater/water.jpg",
+           ny: "/textures/skyBoxes/underwater/water.jpg",
+           nz: "/textures/skyBoxes/underwater/water.jpg",
+           px: "/textures/skyBoxes/underwater/water.jpg",
+           py: "/textures/skyBoxes/underwater/water.jpg",
+           pz: "/textures/skyBoxes/underwater/water.jpg"
```

#### 41. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L5467-L5474` → after: `L4889-L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4889-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4889-L4896) · [Before (L5467-L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L5467-L5474)

```diff
-         choose: function(QQ, FQ) {
-           xQ(), qQ(QQ), DQ("typed" === FQ ? "search" : "prefilled" === FQ ? "prefilled" : "suggestion"), vQ({
-             name: QQ,
-             source: FQ
-           }), "typed" !== FQ && "prefilled" !== FQ && (0, BQ.reportAnalyticsClick)({
-             id: "store.gift_recipient",
-             value: FQ
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

#### 42. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L5476-L5477` → after: `L4898-L4905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4898-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4898-L4905) · [Before (L5476-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L5476-L5477)

```diff
-         clear: function() {
-           xQ(), qQ(""), DQ("search"), vQ(null)
+         space_red_2: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
+           px: "/textures/skyBoxes/space_red_2/_px.jpg",
+           py: "/textures/skyBoxes/space_red_2/_py.jpg",
+           pz: "/textures/skyBoxes/space_red_2/_pz.jpg"
```

#### 43. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L5479-L5843` → after: `L4907-L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4907-L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4907-L4914) · [Before (L5479-L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L5479-L5843)

```diff
-         recordGift: function(QQ, FQ) {
-           ! function(QQ) {
-             Co.delete(QQ.toLowerCase())
-           }(QQ), uQ((wQ => {
-             if (!wQ || wQ.name.toLowerCase() !== QQ.toLowerCase() || !0 !== wQ.result.giftRecipientFound || "superRank" === FQ) return wQ;
-             const LQ = wQ.result.giftRecipientOwnedPacks;
-             return {
-               ...wQ,
-               result: {
-                 ...wQ.result,
-                 giftRecipientOwnedPacks: LQ.includes(FQ) ? LQ : [...LQ, FQ]
-               }
-             }
-           }))
-         }
-       }
- ... (349 more removed lines; see GitHub link above)
+         space_white: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_white/_nx.jpg",
+           ny: "/textures/skyBoxes/space_white/_ny.jpg",
+           nz: "/textures/skyBoxes/space_white/_nz.jpg",
+           px: "/textures/skyBoxes/space_white/_px.jpg",
+           py: "/textures/skyBoxes/space_white/_py.jpg",
+           pz: "/textures/skyBoxes/space_white/_pz.jpg"
```

#### 44. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L6288-L7670` → after: `L4917-L16881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4917-L16881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L4917-L16881) · [Before (L6288-L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L6288-L7670)

```diff
-       cD = new Set(["wildSpirits"]);
- 
-     function CD(QQ) {
-       var FQ;
-       let {
-         tile: wQ,
-         design: qQ,
-         canGoLive: vQ,
-         live: mQ,
-         busy: uQ,
-         highlight: bQ,
-         onLiveStart: YQ,
-         onLiveEnd: xQ,
-         onOpen: AQ,
-         onAct: tQ,
-         onNeedRecipient: eQ,
- ... (1367 more removed lines; see GitHub link above)
+       fk = "/textures/dayNight/sun.png",
+       Sk = "/textures/dayNight/moon.png",
+       bk = "/textures/dayNight/stars",
+       rk = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
+   },
+   28464: kk => {
+     kk.exports = "data:model/gltf-binary;base64,Z2xURgIAAADIDgAA3AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Mjg4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   28471: kk => {
+     kk.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA0FAAA+AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Njg0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   28473: kk => {
+     kk.exports = "data:model/gltf-binary;base64,Z2xURgIAAABMCwAApAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   28480: kk => {
+     kk.exports = "data:model/gltf-binary;base64,Z2xURgIAAABsBwAA8AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+ ... (11949 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L7672-L7720` → after: `L16883-L16884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16883-L16884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16883-L16884) · [Before (L7672-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L7672-L7720)

```diff
-   9103: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => oQ
-     });
-     var LQ = wQ(317),
-       qQ = wQ(9110);
- 
-     function oQ(QQ, FQ, wQ) {
-       const oQ = Object.entries(FQ).sort(((QQ, FQ) => FQ[1] - QQ[1])),
-         DQ = (0, LQ.ub)(QQ);
-       DQ.push(QQ ? "\n\n" : "\n");
-       for (const [qQ, xQ] of oQ) {
-         var kQ, vQ, mQ;
-         const QQ = null !== (kQ = null === wQ || void 0 === wQ || null === (vQ = wQ[qQ]) || void 0 === vQ ? void 0 : vQ.icon) && void 0 !== kQ ? kQ : `${qQ} Enchantment`;
-         DQ.push({
-           icon: QQ,
- ... (33 more removed lines; see GitHub link above)
+   25930: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAElJREFUGJVjYKAl+A/FWPlMyCoPHDgAVwBlM2BVKCgoiJWNoRAfgCn8f/HiRYb379/DJd6/f89w8eJFmFMYGJEcjg8wEpAnAwAAXrQYaLXGJNEAAAAASUVORK5CYII="
```

#### 46. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L7722-L8021` → after: `L16886-L16887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16886-L16887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16886-L16887) · [Before (L7722-L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L7722-L8021)

```diff
-   9116: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => mQ,
-       f: () => MQ,
-       j: () => tQ,
-       m: () => vQ,
-       n: () => eQ,
-       o: () => uQ,
-       p: () => bQ,
-       q: () => AQ,
-       s: () => HQ
-     });
-     var LQ = wQ(307),
-       qQ = wQ(619),
-       oQ = wQ(317),
-       DQ = wQ(4112),
- ... (284 more removed lines; see GitHub link above)
+   25936: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAElJREFUGJVjYCASMOIQ/4+uBl3hfwYGBoapRW5wgey+XRjq/tdEmf+fWuT2H6oBGaOahqQImxOIU8SExzOMhBRiKMKmAMNNJAMA3aoc6izMGqMAAAAASUVORK5CYII="
```

#### 47. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8023-L8119` → after: `L16889-L16890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16889-L16890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16889-L16890) · [Before (L8023-L8119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8023-L8119)

```diff
-   8995: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => YQ,
-       d: () => xQ,
-       g: () => AQ
-     });
-     var LQ = wQ(1451),
-       qQ = wQ(53),
-       oQ = wQ(1326),
-       DQ = wQ(4376),
-       kQ = wQ(2276),
-       vQ = wQ(1207),
-       mQ = wQ(96),
-       uQ = wQ(1927),
-       HQ = wQ(1348),
-       bQ = wQ(1107);
- ... (81 more removed lines; see GitHub link above)
+   25942: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYCASMELp/4TUscBYuZmZDAwMDAyTp09nmFrkBleR3bcLRcf/3MzM/1CT0TGqQhiuiTJHVoCpcGqRG1wxMhummAmbw2Hu+v8fYSA2hf9hihgZGeGC6MGDLbgYGUgBAK6tK4y/VDhYAAAAAElFTkSuQmCC"
```

#### 48. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8121-L8354` → after: `L16892-L16893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16892-L16893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16892-L16893) · [Before (L8121-L8354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8121-L8354)

```diff
-   9091: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => mQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1070),
-       oQ = wQ.n(qQ),
-       DQ = wQ(1927),
-       kQ = wQ(1107);
- 
-     function vQ(QQ) {
-       const FQ = Math.floor(QQ / 3600),
-         wQ = Math.floor(QQ % 3600 / 60),
-         LQ = Math.floor(QQ % 60),
-         qQ = `${wQ.toString().padStart(2,"0")}:${LQ.toString().padStart(2,"0")}`;
-       return FQ > 0 ? `${FQ}:${qQ}` : qQ
- ... (218 more removed lines; see GitHub link above)
+   25945: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAG5JREFUGJWNkMEJgDAMRV9dyg06hBsU8dKzM3iR4i4u9z1oS9pSMBBCkkd+EvhpblBXy7hBkxQ9AOtxA7gK3EIA4LyuTnlqKwZyTSyyxfdltnm9fIreNmwuQJ10hr8jkLqhnZT0UgI0+mOZnA96AIdzLQp2ax3XAAAAAElFTkSuQmCC … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8356-L8373` → after: `L16895-L16896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16895-L16896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16895-L16896) · [Before (L8356-L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8356-L8373)

```diff
-   9094: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => oQ
-     });
-     var LQ = wQ(4380),
-       qQ = wQ(4388);
- 
-     function oQ(QQ) {
-       let {
-         children: FQ,
-         showing: wQ,
-         globallyUniqueKey: oQ,
-         alwaysMountChildren: DQ = !1,
-         doGameplayStartStopOnShow: kQ = !0,
-         keepsMovement: vQ = !1
-       } = QQ;
- ... (2 more removed lines; see GitHub link above)
+   25954: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAG5JREFUGJWNj7ENgDAMBM8sxQYMwQYWSpOaGeiyDMs9BaA4ECRcxfb58w8/yz7mejL2saTkCYBl2wFsiMvkTnKPQP+75K5L+VaP72YgQOs8Pg8qWPLUKIVegBqPVwBFj5Jq9E5qOxlhZi/wZSceHjQHMAauCiMVAAAAAElFTkSuQmCC … [truncated]
```

#### 50. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8375-L8392` → after: `L16898-L16899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16898-L16899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16898-L16899) · [Before (L8375-L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8375-L8392)

```diff
-   9149: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => oQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(3451);
- 
-     function oQ() {
-       const [QQ, FQ] = (0, LQ.useState)(!1);
-       return (0, LQ.useLayoutEffect)((() => {
-         let QQ = !0;
-         return (0, qQ.d)().then((() => {
-           QQ && FQ(!0)
-         })), () => {
-           QQ = !1
-         }
- ... (2 more removed lines; see GitHub link above)
+   25961: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAF5JREFUGJWNjrENADEIA53Xj5Edsn/nFejZgSo13zwRUSIlbkDGOgNcqvzTT94Tm4iAZAScJERkJN+Mr7VCVdF7X6oHsbW2HLMXxALAd6T4eao2s11wrj6ppN0vMmd9U+YcBwRrO08AAAAASUVORK5CYII="
```

#### 51. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8394-L8407` → after: `L16901-L16902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16901-L16902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16901-L16902) · [Before (L8394-L8407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8394-L8407)

```diff
-   6386: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => oQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(27);
- 
-     function oQ(QQ, FQ) {
-       var wQ;
-       const [oQ, DQ] = (0, LQ.useState)(null !== (wQ = qQ.i.getItem(QQ)) && void 0 !== wQ ? wQ : FQ);
-       return [oQ, FQ => {
-         qQ.i.setItem(QQ, FQ), DQ(FQ)
-       }]
-     }
+   25964: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHZJREFUGJVjYCASMOIQ/4+uBpvC/2u6ghgYGBgYnj37xJA3YQ8DAwMDIxMuRQwMDAxSUnxwNorCYGslnG5EVvjf3lSJ4dmzT3CBkLJ1cOexIOu6duMlg5aGOMPyjRcY1h69h9UP/2uizP9DffsfXRJFISEFRAMARWgf0inTdnYAAAAA … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8409-L8732` → after: `L16904-L16905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16904-L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16904-L16905) · [Before (L8409-L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8409-L8732)

```diff
-   9067: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => AQ,
-       c: () => xQ
-     });
-     wQ(9074);
-     var LQ = wQ(1070),
-       qQ = wQ.n(LQ),
-       oQ = wQ(53),
-       DQ = wQ(9037);
- 
-     function kQ(QQ, FQ) {
-       return Math.max(1, Math.round(QQ * FQ))
-     }
- 
-     function vQ(QQ, FQ) {
- ... (308 more removed lines; see GitHub link above)
+   25972: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJBJREFUGJWNjjEOgkAURN9acAAusPUaei/hGai1sfEEXoFGakoTOsId7I3UFrYcwGYsdDcsaGC6mbw/f2ChDICkjzFG/zgDYNOER/9S3bQ8L8eIOFRdKARQ3bQqcidA3gNy6010GKDT1kaQB1fjMdnuzK3cA9Ddr5PNKnIXmnwzIJsm … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8734-L8824` → after: `L16907-L16908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16907-L16908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16907-L16908) · [Before (L8734-L8824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8734-L8824)

```diff
-   9078: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => uQ,
-       h: () => tQ,
-       k: () => AQ
-     });
-     var LQ = wQ(9037);
-     const qQ = "XH1-",
-       oQ = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       DQ = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       kQ = ["color", "outlineColor"],
-       vQ = 1 + 3 * kQ.length + DQ.length + 1,
-       mQ = Math.ceil(8 * vQ / Math.log2(62)),
-       uQ = qQ.length + mQ;
- 
-     function HQ(QQ) {
- ... (75 more removed lines; see GitHub link above)
+   25974: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJWN0C0OgDAMgNFvCZfhBNwAQXA4xPwECDSnGCHzeBzhKhynCBhhEH6aNK14bdLCz1B7lS8X+a4yBoDOOayOD1EPSzAhlTGybxZAxmn2fQh9tmXyDq2OD9w3abAdIDrrcZoBKPJsmxZBqe3eAHpwRXB/z9O7FH9jBRTyMcJ5 … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8826-L8952` → after: `L16910-L16911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16910-L16911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16910-L16911) · [Before (L8826-L8952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8826-L8952)

```diff
-   9037: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => LQ,
-       e: () => qQ,
-       g: () => oQ,
-       k: () => mQ,
-       l: () => vQ,
-       m: () => uQ,
-       n: () => kQ,
-       p: () => DQ
-     });
-     const LQ = {
-         opacity: {
-           min: 5,
-           max: 100,
-           step: 1
- ... (111 more removed lines; see GitHub link above)
+   25982: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJVJREFUGJWNjjEOgkAURN8awwG4wNZr7L2D2c6e2oqGE3AFGntKEjqyV6G2oPUANkOhS4Ks0Z/8Yibvz3z4cwyApJcwRt84A2DzjPvjqX4ITF21Isp2XAIB1A9BTeEEKGpA7nACYB/Jqaso25Ha22T3LmUerzcu/pw8UFM49UNYKmtv … [truncated]
```

#### 55. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8954-L8992` → after: `L16913-L16938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16913-L16938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16913-L16938) · [Before (L8954-L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8954-L8992)

```diff
-   9082: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => HQ,
-       d: () => bQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(27),
-       oQ = wQ(9078),
-       DQ = wQ(9037);
-     const kQ = "crosshairCode";
-     let vQ = null;
-     const mQ = new Set;
- 
-     function uQ() {
-       if (null === vQ) {
-         var QQ;
- ... (23 more removed lines; see GitHub link above)
+   25986: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJBJREFUGJWNj70NwjAUhD+jKANkAddhAZbIDIyQjjrKCozg8rXOHFCmjOioKClojgI5YBRETnrS3eneH6yEA5D0Es7pV84B+KrkcnsomjENXZZowzgPBFA003FfC1DSgOrtDoAiJaehow0jfeMXd2/WPlN8img281M4AHC/nrOG7L5U … [truncated]
+   },
+   25988: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJWNj7sNg0AQRN9ZiAJo4GLcgJugBpdAC4gWXALhpkcfhITImSOHDpyMA+tsH2DBSCvtjJ72AzvlACS9jXP6xzkAX+Rc708FM6a+SYi6Gz8DARTMdDmXAhQ9oPJ4AiCL5NQ31N1IW/nV3Ye9z2S/JpgtgMdtSHxyX6y28rH/ … [truncated]
+   },
+   25994: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAEJJREFUGJVjYKAn+A/FDAwMDAxMuBSt6QpCEcCm8P+kAhfC1k0qcPm/pisIxVoMRRkeuoQV1USZ/0f3AFaFhBQQDQAtZBsBoq6pfwAAAABJRU5ErkJggg=="
+   },
+   25997: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVklEQVR4nGNgZGRkIAYzoAn8R8MM2BT+f3RlPxi/e3YLjBmRFJOs8D8ehWDFcIXr+sIwFILEMBTOqfACSzTU1IAxiA0Sw2piiqMhCsZqIgGMEY44AxwA7mx0I/qrwkoAAAAASUVORK5CYII="
+   },
+   26e3: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAD5JREFUGJVjYKA2YITS/wmpY4KxLl68yHDx4kUGXHwmZG3v37/HykZRiC6BLoZiooODA1Y2AwN2z+AToyIAACt9GYvk9AI1AAAAAElFTkSuQmCC"
+   },
+   26003: kk => {
+ ... (10 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L8994-L9135` → after: `L16940-L16941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16940-L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16940-L16941) · [Before (L8994-L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L8994-L9135)

```diff
-   8651: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return {
-         x: (QQ.left + QQ.right) / 2,
-         y: (QQ.top + QQ.bottom) / 2
-       }
-     }
- 
-     function qQ(QQ) {
-       return 0 === QQ.length ? null : QQ.reduce(((QQ, FQ) => ({
-         left: Math.min(QQ.left, FQ.left),
-         top: Math.min(QQ.top, FQ.top),
-         right: Math.max(QQ.right, FQ.right),
-         bottom: Math.max(QQ.bottom, FQ.bottom)
-       })))
-     }
- ... (126 more removed lines; see GitHub link above)
+   26023: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHFJREFUGJVjYKAQ/A+2VvrPwMDwHybAiE3Rmq4ghmfPPjFISfExhJStY2BgYGBkQlcVbK0EV/Ts2SeGYGslBgYGBgYMhWuP3oMrkpLiY1h79B52t2V46P7H5kYURTVR5jgl4YomFbgQVMQAVUBQEVEAAJ8cKoYguSGpAAAAAElFTkSu … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9137-L9143` → after: `L16943-L16944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16943-L16944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16943-L16944) · [Before (L9137-L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9137-L9143)

```diff
-   8414: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => qQ,
-       f: () => LQ
-     });
-     const LQ = "controllerOpenKeyboard",
-       qQ = "controllerKeyboardVisible"
+   26030: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAEVJREFUGJVjYCASMOKR+4+sjgmXokkFLgyTClzgArgUMly78ZKgc/5neOj+h1r9H6eimihzvAqIVzSpwIWgIgZC7iEJAAAMlxpWTWYUkwAAAABJRU5ErkJggg=="
```

#### 58. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9145-L9149` → after: `L16946-L16947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16946-L16947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16946-L16947) · [Before (L9145-L9149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9145-L9149)

```diff
-   8986: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ
-     });
-     const LQ = new Set(["chunkBorders"])
+   26034: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAIVJREFUGJVjYCASMCKx/+NTA1P4/8jWCoZvH74wcAnwMDAwMMDZNt4dDAwMDIwsMG3fPnxheHr7BQM/PxsDAwMDw8ePvxikVSXgxjIR60aYQka36Clwkz5+/MXAwMDAABVDcSPcQ1OKvRkYGBgYcnq3osij+NrK1hFF17HD+7GaiDd4 … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9151-L9197` → after: `L16949-L16950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16949-L16950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16949-L16950) · [Before (L9151-L9197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9151-L9197)

```diff
-   8978: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       ALL_DEV_TOOLS: () => DQ,
-       coreDevTools: () => mQ,
-       devTools: () => vQ
-     });
-     var LQ = wQ(634),
-       qQ = wQ(1314),
-       oQ = wQ(8986);
-     const DQ = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function kQ() {
-       const {
-         noaDevTools: QQ
-       } = await wQ.e(231).then((() => wQ(40475)));
-       return QQ
-     }
- ... (31 more removed lines; see GitHub link above)
+   26039: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYCASMCKx/+NTw4is6MDSDgZZKSG4isfP3jE4RFegGPi/Jsr8P1QDHN/dPwvGZmCCqRQT42WoiTLH5iQM8B/NnSgmsmDxyH8GBgaGu/tnMTx+9g4uCFPIUBNlziAmxsvAwMDAoGfqwsDAwIDiEUYsJmIEDUkAANxRJq39 … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9199-L9330` → after: `L16952-L16953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16952-L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16952-L16953) · [Before (L9199-L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9199-L9330)

```diff
-   9142: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ,
-       d: () => qQ,
-       g: () => uQ
-     });
-     var LQ = wQ(1560);
- 
-     function qQ(QQ) {
-       var FQ;
-       return {
-         ...DQ.store,
-         yaw: DQ.store.yaw + (null !== (FQ = LQ.e[QQ].previewYaw) && void 0 !== FQ ? FQ : 0)
-       }
-     }
-     const oQ = {
- ... (116 more removed lines; see GitHub link above)
+   26048: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAFVJREFUGJVjYCASMCKx/+ORQ1U4tcgNzsnu24Uiz4JuxfMXH7FazYTLTTVR5ijOYUST/4+kiKFl2Ulsahj+10SZ/4cqhmEM8H9qkRtOSXQrCSoiCgAAk0QaJvW1tvAAAAAASUVORK5CYII="
```

#### 61. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9332-L9366` → after: `L16955-L16956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16955-L16956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16955-L16956) · [Before (L9332-L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9332-L9366)

```diff
-   9137: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => LQ.b,
-       c: () => LQ.d,
-       d: () => LQ.g
-     });
-     var LQ = wQ(9142);
-     class qQ {
-       constructor(QQ) {
-         this.load = QQ, this.loaded = null, this.loading = null
-       }
-       run(QQ) {
-         return null !== this.loaded ? QQ(this.loaded) : (this.loading ??= this.load().then((QQ => (this.loaded = QQ, QQ)), (QQ => {
-           throw this.loading = null, QQ
-         })), this.loading.then(QQ))
-       }
- ... (19 more removed lines; see GitHub link above)
+   26057: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAADxJREFUGJVjYCASMKLx/+OSQ+b8n1rkBudk9+3CZhDcNDiuiTKHsXECZEU4Ff6fWuRG2CSqKWIg5B6SAADfTh/v5gI5YgAAAABJRU5ErkJggg=="
```

#### 62. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9368-L9379` → after: `L16958-L16959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16958-L16959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16958-L16959) · [Before (L9368-L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9368-L9379)

```diff
-   6485: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ,
-       f: () => oQ
-     });
-     var LQ = wQ(27);
-     const qQ = "shaderPack";
-     async function oQ() {
-       var QQ;
-       let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (QQ = await LQ.h.getItem(qQ, FQ)) && void 0 !== QQ ? QQ : null
-     }
+   26059: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAR0lEQVR4nGNgoCX4D8VYASNM0ZGtFWCGjXcHVjUsMN63D1/A9JRibwY1I0W4KrfoKSBbGOEKYSCndytcAzcvJ1FuxOtmOgIARkcT/4g+r8UAAAAASUVORK5CYII="
```

#### 63. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9381-L9387` → after: `L16961-L16962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16961-L16962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16961-L16962) · [Before (L9381-L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9381-L9387)

```diff
-   9001: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ) {
-       return QQ && !FQ
-     }
-     wQ.d(FQ, {
-       e: () => LQ
-     })
+   26062: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAF1JREFUGJVjYCASMKLx/+OSR1b4f2qRG4qq7L5d2Axj+I+Ma6LM/08tcoPxGZjQrGFkYGBgqIkyZ2hZdhLFFCYGVPB/apEbhiJ0hf+nFrnhdBeyIrh70NyM1SOUAwDuYiHjdCJOsgAAAABJRU5ErkJggg=="
```

#### 64. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9389-L9435` → after: `L16964-L16965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16964-L16965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16964-L16965) · [Before (L9389-L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9389-L9435)

```diff
-   9022: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => oQ
-     });
-     var LQ = wQ(1087);
- 
-     function qQ() {
-       var QQ, FQ;
-       return null !== (QQ = null === (FQ = screen.orientation) || void 0 === FQ ? void 0 : FQ.type) && void 0 !== QQ ? QQ : innerWidth > innerHeight ? "landscape" : "portrait"
-     }
-     const oQ = new class {
-       constructor() {
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
-       }
- ... (31 more removed lines; see GitHub link above)
+   26066: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE5JREFUGJVjYCASMOIQ/4+ujgWboqlFbnBOdt8uBgYGBgYmbIqev/jI8PzFRxQJdIWMMBMIgf81Ueb/oSb/x+JWuLXIkkQpwm0lMYqIAgBYxCFvlh8iNwAAAABJRU5ErkJggg=="
```

#### 65. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9437-L9510` → after: `L16967-L16968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16967-L16968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16967-L16968) · [Before (L9437-L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9437-L9510)

```diff
-   8644: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => kQ,
-       f: () => vQ
-     });
-     var LQ = wQ(17),
-       qQ = wQ(1339),
-       oQ = wQ(96);
-     const DQ = {
-       blockMined: {
-         pattern: [18],
-         priority: 1,
-         minGapMs: 120
-       },
-       hitLanded: {
-         pattern: [20],
- ... (58 more removed lines; see GitHub link above)
+   26072: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAFdJREFUGJVjYCASMOKR+4+sjgmXoqlFbgxTi9zgAtgU/kdWgG413BpkRdl9u+Bq4CbWRJkzMDAwMDx/8RFDEYaVNVHm/6Gm/8emAEURkmLsCpEk8SokCABqByCJOIXmgQAAAABJRU5ErkJggg=="
```

#### 66. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9512-L9561` → after: `L16970-L16971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16970-L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16970-L16971) · [Before (L9512-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9512-L9561)

```diff
-   8997: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => YQ,
-       d: () => bQ
-     });
-     var LQ = wQ(17),
-       qQ = wQ(1694),
-       oQ = wQ(27),
-       DQ = wQ(1362),
-       kQ = wQ(3542),
-       vQ = wQ(1471),
-       mQ = wQ(1395);
-     const uQ = 2592e5,
-       HQ = "notificationOptInLastPromptedAt";
-     async function bQ() {
-       var QQ;
- ... (34 more removed lines; see GitHub link above)
+   26080: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAMxSURBVFiF1ZdNSBRhGMd/fuzOzq46ukiJxB7yIATSrUt08GY3I4JOoR08GHTp0KlrUCCd8hCCEnYSOkRQdEgkkUSpQCSEkhJXU2y/3F1ndN3tsL6vM7vv7FdW9Jxmnhme/+/5v8+7+w78z2EYRs4wjNzv … [truncated]
```

#### 67. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9563-L9585` → after: `L16973-L16974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16973-L16974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16973-L16974) · [Before (L9563-L9585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9563-L9585)

```diff
-   9004: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => kQ,
-       g: () => vQ
-     });
-     var LQ = wQ(17);
-     const qQ = 24,
-       oQ = "farNametags",
-       DQ = 1e5;
- 
-     function kQ() {
-       var QQ;
-       return null === (QQ = LQ.c.get("showDistantNametags")) || void 0 === QQ || QQ
-     }
- 
-     function vQ() {
- ... (7 more removed lines; see GitHub link above)
+   26088: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAClJREFUGJVjYKAS+A/FDEz4FP3//5+wSadKT8FNGyyKoC4n6HqiFBEFAHyUIg2rIQYUAAAAAElFTkSuQmCC"
```

#### 68. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9587-L9833` → after: `L16976-L16977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16976-L16977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16976-L16977) · [Before (L9587-L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9587-L9833)

```diff
-   9127: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => qQ,
-       d: () => DQ
-     });
-     const LQ = [{
-       threshold: 10n ** 180n,
-       suffix: "NoQig"
-     }, {
-       threshold: 10n ** 177n,
-       suffix: "OcQig"
-     }, {
-       threshold: 10n ** 174n,
-       suffix: "SpQig"
-     }, {
-       threshold: 10n ** 171n,
- ... (231 more removed lines; see GitHub link above)
+   26095: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAW0lEQVR4nGNgwA7+QzGMzcCETdGBw8cZFixbB2eDaGwKwSAhKgiFz4LNtAePnzNATWJYt3E7hkK4onPnLqCbyMiITdGkniawJLJKkBsJKkLxNT5FKJ5ACjfKAAAopTtqRlgRmAAAAABJRU5ErkJggg=="
```

#### 69. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L9835-L10035` → after: `L16979-L16980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16979-L16980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16979-L16980) · [Before (L9835-L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L9835-L10035)

```diff
-   9110: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => uQ,
-       d: () => bQ,
-       e: () => HQ,
-       g: () => DQ,
-       k: () => mQ,
-       l: () => vQ
-     });
-     var LQ = wQ(317);
-     const qQ = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
-       oQ = {
-         Damage: {
-           translationKey: "enchantments:damageDescription"
-         },
-         "Attack Speed": {
- ... (185 more removed lines; see GitHub link above)
+   26097: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 70. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L10037-L10066` → after: `L16982-L16983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16982-L16983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16982-L16983) · [Before (L10037-L10066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L10037-L10066)

```diff
-   8523: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ) {
-       return !QQ.hidden && (FQ || !QQ.isRewardedAd)
-     }
- 
-     function qQ(QQ) {
-       return "object" === typeof QQ ? QQ.option : QQ
-     }
- 
-     function oQ(QQ, FQ) {
-       var wQ;
-       if ("dropdown" === (null === (wQ = QQ.userInput) || void 0 === wQ ? void 0 : wQ.type) && "object" === typeof QQ.userInput.dropdownOptions[0]) {
-         for (const wQ of QQ.userInput.dropdownOptions)
-           if (qQ(wQ) === FQ) return "object" === typeof wQ ? wQ.cost : QQ.cost;
-         console.error("Didn't find matching option for dropdown item. Item:", QQ, "input:", FQ)
-       }
- ... (14 more removed lines; see GitHub link above)
+   26100: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 71. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L10068-L10070` → after: `L16985-L16986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16985-L16986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16985-L16986) · [Before (L10068-L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L10068-L10070)

```diff
-   9074: () => {},
-   9046: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC … [truncated]
+   26106: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANUlEQVR4nGNgwAT/oRgv+P//xfz//y874FX8H6YIhhlwKEZRRBWFKIqJ8hAximAKiQbkmwgAbqlC6CbMsIMAAAAASUVORK5CYII="
```

#### 72. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L10072-L10073` → after: `L16988-L16989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16988-L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16988-L16989) · [Before (L10072-L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L10072-L10073)

```diff
-   9048: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
+   26110: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkUrDlYUUchQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ttIjx4Lgf7+497t4BQq3EVNM3AaiaZSSiETGdWRX9r+jGAHzox4jETD2WXEzBdXzdw8PXuzDP … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L10075-L10076` → after: `L16991-L16992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16991-L16992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16991-L16992) · [Before (L10075-L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L10075-L10076)

```diff
-   9053: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5E … [truncated]
+   26116: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAElJREFUGJVjYKAA/IdiFMCEVeVlBwZ0xTCF/9FNQlfMCBOHSmAARt0DDAwMDIxYrcaqAclqdDfCTcOl+f//yw5YfY6hkBhFOAEA/0YaM1Y8FzcAAAAASUVORK5CYII="
```

#### 74. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L10078-L10079` → after: `L16994-L17025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R16994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L16994-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/98.js#L16994-L17025) · [Before (L10078-L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/98.js#L10078-L10079)

```diff
-   9058: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
+   26122: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAe0lEQVR4nGNgoBD8JwEzoPP//385H4IvO+DEMA2/XxmAMapmPBphmn+/Mvj/eZUKGCM0E9AI0/wZqhFFMwzj1PxyPk7NMIDdAGh4wOQ/49CMYgixoY0M/j9asOD/OQkJDIzLJoIaCWn+j6wR3bkENZ/DbQNhJxOjaPAA … [truncated]
+   },
+   26124: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGhJREFUGJVjYCASMOKR+4+sjgmXov9XPRn+X/UkaMr/pIzC/2imopgCk/z//6onMh/uxv/YrPn77SUDi+k5BgYGBkYWZEGj1H8MDAwMDOdmM8HZMADzDCNUJwMDAwMDMhufZ/5jYRMPAHtSLUeUdSEOAAAAAElFTkSuQmCC"
+   },
+   26128: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
+   },
+   26134: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
+   },
+   26139: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
+   },
+   26145: kk => {
+ ... (16 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/99.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/99.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae)

#### 1. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L2)

```diff
- export const ids = [99];
+ export const ids = [99, 196];
```

#### 2. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L4)

```diff
-   4727: (QQ, FQ, wQ) => {
+   33655: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L6)

```diff
-       default: () => pQ
+       EverythingMenu: () => nr
```

#### 4. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8-L22` → after: `L8-L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L8-L1689) · [Before (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L8-L22)

```diff
-     var LQ = wQ(1515),
-       qQ = wQ(53),
-       oQ = wQ(1207),
-       DQ = wQ(1140),
-       kQ = wQ(1130),
-       vQ = wQ(2034),
-       mQ = wQ(1503),
-       uQ = wQ(1348),
-       HQ = wQ(1124),
-       bQ = wQ(17),
-       YQ = wQ(1451),
-       xQ = wQ(1079),
-       AQ = wQ(2469),
-       tQ = wQ(1532),
-       eQ = wQ(1107);
+     var Dk = ik(60),
+       fk = ik(1021),
+       Sk = ik.n(fk),
+       bk = ik(1172),
+       rk = ik(1033),
+       Pk = ik(2037),
+       mk = ik(1410),
+       Mk = ik(1085),
+       Kk = ik(1066);
+ 
+     function xk(kk) {
+       let {
+         items: ek,
+         link: ik,
+         onClick: Dk,
+         selectedItemId: fk,
+ ... (1666 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L24-L26` → after: `L1691-L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L1691-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L1691-L1718) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L24-L26)

```diff
-         id: "myGames",
-         icon: "joystick",
-         title: "studio:myGames"
+         id: "default",
+         settings: Mi.h
+       }, {
+         id: "cross",
+         settings: qi({
+           color: 5046092,
+           lines: !0,
+           lineLength: 7,
+           lineThickness: 2,
+           gap: 3
+         })
+       }, {
+         id: "crossDot",
+         settings: qi({
+           color: 65535,
+           lines: !0,
+ ... (12 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L28-L30` → after: `L1720-L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L1720-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L1720-L1746) · [Before (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L28-L30)

```diff
-         id: "leaderboard",
-         icon: "trophy",
-         title: "studio:leaderboard"
+         id: "circle",
+         settings: qi({
+           circle: !0,
+           circleRadius: 12,
+           circleThickness: 1.5,
+           dot: !0,
+           dotSize: 2
+         })
+       }, {
+         id: "tShape",
+         settings: qi({
+           color: 16731391,
+           lines: !0,
+           lineLength: 7,
+           lineThickness: 2,
+           gap: 3,
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L32-L34` → after: `L1748-L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L1748-L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L1748-L1755) · [Before (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L32-L34)

```diff
-         id: "docs",
-         icon: "file-lines",
-         title: "general:docs"
+         id: "bold",
+         settings: qi({
+           lines: !0,
+           lineLength: 10,
+           lineThickness: 3,
+           gap: 0,
+           outline: 1.5
+         })
```

#### 8. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L36-L40` → after: `L1757-L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L1757-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L1757-L1758) · [Before (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L36-L40)

```diff
-       GQ = {
-         myGames: "/studio",
-         leaderboard: "/studio/leaderboard",
-         docs: "/studio/docs"
-       };
+       zi = ["growOnClick", "forGuns"];
+     var Qi = ik(33735);
```

#### 9. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L42` → after: `L1760-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L1760-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L1760-L1790) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L42)

```diff
-     function pQ() {
+     function vi(kk) {
+       let {
+         label: ek,
+         selected: ik,
+         onClick: Dk,
+         className: fk,
+         style: bk,
+         children: rk
+       } = kk;
+       return (0, Kk.jsx)("button", {
+         type: "button",
+         role: "radio",
+         "aria-checked": ik,
+         title: ek,
+         "aria-label": ek,
+         "data-pad-focusable": !0,
+ ... (15 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L45-L59` → after: `L1793-L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR1793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L1793-L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L1793-L1890) · [Before (L45-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L45-L59)

```diff
-       } = (0, oQ.y)(), FQ = (0, mQ.useNavigatePreserveSearch)(), wQ = (0, LQ.r)(), {
-         isUserContextUpdating: pQ
-       } = (0, DQ.e)(), cQ = (0, vQ.c)(), CQ = (0, kQ.i)(), SQ = (iQ = wQ.pathname).startsWith(tQ.t) ? null : iQ.startsWith(GQ.docs) ? "docs" : iQ.startsWith(GQ.leaderboard) ? "leaderboard" : "myGames";
-       var iQ;
-       const WQ = function(QQ) {
-         if (!QQ.startsWith(tQ.t)) return {
-           title: "studio:leaveStudio",
-           icon: "left-from-bracket",
-           to: "/"
-         };
-         const FQ = (0, mQ.getPreviousLocation)();
-         return {
-           title: "general:back",
-           icon: "arrow-left",
-           to: null !== FQ && FQ.startsWith(GQ.myGames) ? -1 : GQ.myGames
+       } = (0, bk.D)();
+       return (0, Kk.jsxs)("div", {
+         className: "CrosshairBackdrops",
+         role: "radiogroup",
+         "aria-label": fk("crosshairSettings:background"),
+         children: [Dk && (0, Kk.jsx)(vi, {
+           label: fk("crosshairSettings:bg_game"),
+           selected: Dk.selected,
+           onClick: Dk.onSelect,
+           className: "CrosshairGameSwatch",
+           children: (0, Kk.jsx)(rk.d, {
+             name: "cube"
+           })
+         }), di.map((kk => (0, Kk.jsx)(vi, {
+           label: fk(`crosshairSettings:bg_${kk}`),
+           selected: !(null !== Dk && void 0 !== Dk && Dk.selected) && kk === ek,
+ ... (82 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L61-L71` → after: `L1892-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L1892-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L1892-L2001) · [Before (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L61-L71)

```diff
-       }(wQ.pathname);
-       return (0, qQ.useEffect)((() => {
-         bQ.c.set({
-           gameState: "studio",
-           openEverythingMenuName: null
-         })
-       }), []), (0, eQ.jsxs)("div", {
-         className: "StudioLayout AnimFadeIn",
-         children: [cQ && (0, eQ.jsx)("aside", {
-           className: "StudioLayoutLeft",
-           children: (0, eQ.jsx)(AQ.e, {})
+       }), [bk]);
+       const mk = ik || bk;
+       return {
+         view: {
+           pressed: mk,
+           spread: mk && kk.forGuns && !kk.growOnClick ? 6 : 0
+         },
+         handlers: {
+           onPointerDown: kk => {
+             !kk.target.closest(ek) && (0, Wi.c)(kk.currentTarget, kk.pointerId) && fk(!0)
+           },
+           onPointerUp: Sk,
+           onPointerCancel: Sk,
+           onLostPointerCapture: Sk
+         }
+       }
+ ... (94 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L73` → after: `L2003-L2005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L2003-L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L2003-L2005) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L73)

```diff
-           className: "StudioLayoutRight",
+           className: Sk()("CrosshairFullScreenPanel", {
+             Collapsed: !Lk
+           }),
```

#### 13. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L75-L82` → after: `L2007-L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L2007-L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L2007-L2143) · [Before (L75-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L75-L82)

```diff
-             className: "StudioTop",
-             children: [(0, eQ.jsx)(HQ.b, {
-               show: !0,
-               socialBarIsDocked: cQ
-             }), (0, eQ.jsxs)("nav", {
-               className: "StudioNav",
-               children: [(0, eQ.jsx)(YQ.b, {
-                 icon: WQ.icon,
+             className: "CrosshairFullScreenBar",
+             children: [(0, Kk.jsx)(Ei, {
+               backdrop: fk,
+               onChange: kk => {
+                 yk(!1), Pk(kk)
+               },
+               game: Mk ? {
+                 selected: Yk,
+                 onSelect: () => {
+                   yk(!0)
+                 }
+               } : void 0
+             }), (0, Kk.jsx)(mk.X, {
+               className: "CrosshairPanelToggle",
+               ariaLabel: Uk(Lk ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
+               onClick: () => {
+ ... (121 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L84` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L2145) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L84)

```diff
-                   FQ(WQ.to)
+                   wk(!0)
```

#### 15. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L86-L98` → after: `L2147-L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L2147-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L2147-L2239) · [Before (L86-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L86-L98)

```diff
-                 children: QQ(WQ.title)
-               }), (0, eQ.jsx)("div", {
-                 className: "StudioNavTabs",
-                 children: MQ.map((wQ => (0, eQ.jsxs)(YQ.L, {
-                   active: SQ === wQ.id,
-                   href: GQ[wQ.id],
-                   onClick: () => {
-                     FQ(GQ[wQ.id])
-                   },
-                   children: [(0, eQ.jsx)(xQ.c, {
-                     name: wQ.icon
-                   }), !CQ && QQ(wQ.title)]
-                 }, wQ.id)))
+                 children: [(0, Kk.jsx)(rk.d, {
+                   name: "expand"
+                 }), " ", ik("crosshairSettings:fullScreen")]
+               })]
+             })
+           })
+         }), (0, Kk.jsx)("div", {
+           className: "SettingBox",
+           children: (0, Kk.jsx)(ai, {
+             settings: Mk,
+             touch: fk,
+             backdrop: xk,
+             onChange: Oi.b
+           })
+         }), (0, Kk.jsx)(Zi, {
+           settings: Mk,
+ ... (77 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L101-L108` → after: `L2290-L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L2290-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/99.js#L2290-L2310) · [Before (L101-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/99.js#L101-L108)

```diff
-           }), (0, eQ.jsxs)("main", {
-             className: "StudioBottom",
-             children: [pQ && (0, eQ.jsx)("div", {
-               className: "StudioCentredMessage",
-               children: (0, eQ.jsx)(uQ.c, {})
-             }), !pQ && (0, eQ.jsx)("div", {
-               className: "StudioContent",
-               children: (0, eQ.jsx)(LQ.i, {})
+           }), kk.enableClipping && !fk && Uk && !ek && (0, Kk.jsx)("div", {
+             className: "ReplayViewerCategoryHint",
+             children: "Clip buffer is filling \u2014 play for a moment, then save."
+           }), ek && (0, Kk.jsx)("div", {
+             className: "ReplayViewerCategoryHint",
+             children: "Clipping pauses while a full recording is active."
+           })]
+         }), (0, Kk.jsxs)("div", {
+           className: "SettingBox",
+           children: [(0, Kk.jsxs)(mk.f, {
+             className: "ReplayViewerCategoryButton",
+             onClick: function() {
+               (0, iD.j)(!0), jk.b.set({
+                 openEverythingMenuName: null
+               })
+             },
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/babylon-backend.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/babylon-backend.js` (185 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d)

#### 1. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   40532: (QQ, FQ, wQ) => {
+   40705: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var LQ = wQ(40535),
-       qQ = wQ(37557);
-     class oQ extends((0, LQ.h)(qQ.c)) {}(0, LQ.j)(qQ.c, oQ);
-     var DQ = wQ(36782);
-     class kQ extends((0, LQ.h)(DQ.f)) {}(0, LQ.j)(DQ.f, kQ);
-     var vQ = wQ(37401);
-     class mQ extends((0, LQ.h)(vQ.e)) {}(0, LQ.j)(vQ.e, mQ);
-     var uQ = wQ(37019),
-       HQ = wQ(39692),
-       bQ = wQ(37016);
-     class YQ extends((0, LQ.h)(bQ.h)) {
+     var Dk = ik(40707),
+       fk = ik(37599);
+     class Sk extends((0, Dk.g)(fk.e)) {}(0, Dk.j)(fk.e, Sk);
+     var bk = ik(36761);
+     class rk extends((0, Dk.g)(bk.f)) {}(0, Dk.j)(bk.f, rk);
+     var Pk = ik(37451);
+     class mk extends((0, Dk.g)(Pk.h)) {}(0, Dk.j)(Pk.h, mk);
+     var Mk = ik(37028),
+       Kk = ik(39829),
+       xk = ik(37020);
+     class nk extends((0, Dk.g)(xk.e)) {
```

#### 3. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L23)

```diff
-         super(QQ, FQ, wQ), (0, uQ.e)(QQ)
+         super(kk, ek, ik), (0, Mk.j)(kk)
```

#### 4. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L26)

```diff
-         (0, uQ.g)(this._material), super.dispose(QQ)
+         (0, Mk.m)(this._material), super.dispose(kk)
```

#### 5. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L28)

```diff
-     }(0, LQ.j)(bQ.h, YQ), (0, bQ.j)({
+     }(0, Dk.j)(xk.e, nk), (0, xk.h)({
```

#### 6. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var xQ = wQ(38220);
-     class AQ extends((0, LQ.h)(xQ.e)) {}(0, LQ.j)(xQ.e, AQ);
-     var tQ = wQ(38328),
-       eQ = wQ(36881),
-       MQ = wQ(37678),
-       GQ = wQ(36831);
-     class pQ extends((0, LQ.h)(tQ.e)) {}(0, LQ.j)(tQ.e, pQ);
-     class cQ extends((0, LQ.h)(eQ.d)) {}(0, LQ.j)(eQ.d, cQ);
-     class CQ extends((0, LQ.h)(MQ.o)) {}(0, LQ.j)(MQ.o, CQ);
-     class SQ extends((0, LQ.h)(GQ.b)) {}(0, LQ.j)(GQ.b, SQ)
+     var Uk = ik(38279);
+     class Hk extends((0, Dk.g)(Uk.e)) {}(0, Dk.j)(Uk.e, Hk);
+     var wk = ik(38371),
+       lk = ik(36883),
+       pk = ik(37717),
+       yk = ik(36826);
+     class Yk extends((0, Dk.g)(wk.d)) {}(0, Dk.j)(wk.d, Yk);
+     class Lk extends((0, Dk.g)(lk.c)) {}(0, Dk.j)(lk.c, Lk);
+     class Ck extends((0, Dk.g)(pk.o)) {}(0, Dk.j)(pk.o, Ck);
+     class Ak extends((0, Dk.g)(yk.d)) {}(0, Dk.j)(yk.d, Ak)
```

#### 7. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   40965: (QQ, FQ, wQ) => {
+   41114: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L48-L61` → after: `L48-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L48-L60) · [Before (L48-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L48-L61)

```diff
-     var LQ = wQ(40970),
-       qQ = (wQ(39380), wQ(40526), wQ(39906), wQ(40981)),
-       oQ = wQ(39211),
-       DQ = wQ(36870),
-       kQ = wQ(36688),
-       vQ = wQ(40988),
-       mQ = wQ(40992),
-       uQ = wQ(36822),
-       HQ = (wQ(40535), wQ(41005)),
-       bQ = wQ(40998),
-       YQ = wQ(38247),
-       xQ = wQ(41008),
-       AQ = wQ(39251),
-       tQ = wQ(38230);
+     var Dk = ik(41122),
+       fk = (ik(39552), ik(40701), ik(40055), ik(41138)),
+       Sk = ik(36868),
+       bk = ik(36690),
+       rk = ik(41151),
+       Pk = ik(41155),
+       mk = ik(36821),
+       Mk = (ik(40707), ik(41166)),
+       Kk = ik(41162),
+       xk = ik(38299),
+       nk = ik(41171),
+       Uk = ik(39412),
+       Hk = ik(38287);
```

#### 9. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L63` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L62) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L63)

```diff
-       MQ = tQ.y,
+       lk = Hk.t,
```

#### 10. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L65-L67` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L64-L66) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L65-L67)

```diff
-       pQ = QQ => `gpuParticleSystem[${QQ>>2}].${"xyzw"[3&QQ]}`,
-       cQ = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${tQ.e}\n#define COLOR_POSITIONS ${GQ(MQ.colorPositions)}\n#define COLOR1 ${GQ(MQ.color1)}\n#define COLOR2 ${GQ(MQ.color2)}\n#define VELOCITY ${GQ(MQ.Qt)}\n#define REMAP $ … [truncated]
-     AQ.c.ShadersStore[`${eQ}VertexShader`] = cQ, AQ.c.ShadersStore[`${eQ}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
+       yk = kk => `gpuParticleSystem[${kk>>2}].${"xyzw"[3&kk]}`,
+       Yk = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Hk.b}\n#define COLOR_POSITIONS ${pk(lk.colorPositions)}\n#define COLOR1 ${pk(lk.color1)}\n#define COLOR2 ${pk(lk.color2)}\n#define VELOCITY ${pk(lk.Cw)}\n#define REMAP $ … [truncated]
+     Uk.d.ShadersStore[`${wk}VertexShader`] = Yk, Uk.d.ShadersStore[`${wk}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L70-L72` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L69-L71) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L70-L72)

```diff
-     var iQ = wQ(38222),
-       WQ = wQ(41015);
-     class RQ extends iQ.e {
+     var Ak = ik(38282),
+       jk = ik(41177);
+     class sk extends Ak.b {
```

#### 12. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L74` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L73) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L74)

```diff
-         super(QQ, FQ, wQ), this.renderer = wQ, this.lA = LQ, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(tQ.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(kk, ek, ik), this.renderer = ik, this.bw = Dk, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Hk.p), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L87` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L86) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L87)

```diff
-         const qQ = LQ.Wx();
+         const fk = Dk.JU();
```

#### 14. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L91` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L90) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L91)

```diff
-         this.records = qQ.createRawTexture(null, 4 * DQ, Math.ceil(oQ / DQ), HQ.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, HQ.d.TEXTURE_NEAREST_SAMPLINGMODE, null, HQ.d.TEXTURETYPE_UNSIGNED_INTEGER)
+         this.records = fk.createRawTexture(null, 4 * bk, Math.ceil(Sk / bk), Mk.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Mk.c.TEXTURE_NEAREST_SAMPLINGMODE, null, Mk.c.TEXTURETYPE_UNSIGNED_INTEGER)
```

#### 15. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L94-L95` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L93-L94) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L94-L95)

```diff
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lA.getAnimationRatio() || 1;
-         const FQ = this.lA.getFrameId();
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.bw.getAnimationRatio() || 1;
+         const ek = this.bw.getFrameId();
```

#### 16. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L108-L109` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L107-L108) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L108-L109)

```diff
-         (0, WQ.e)(this, this.uniforms, this.uniformBits, QQ);
-         for (const wQ of tQ.u) this.uniforms[wQ] = this.uniformBits[wQ];
+         (0, jk.j)(this, this.uniforms, this.uniformBits, kk);
+         for (const ik of Hk.s) this.uniforms[ik] = this.uniformBits[ik];
```

#### 17. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L111` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L110) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L111)

```diff
-         (0, WQ.g)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (FQ = this.ramp) || void 0 === FQ || FQ.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = bQ.c.CreateRGBATexture(this.rampTexels.texels, tQ.k, … [truncated]
+         (0, jk.n)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ek = this.ramp) || void 0 === ek || ek.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Kk.c.CreateRGBATexture(this.rampTexels.texels, Hk.k, … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L119-L120` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L119-L120) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L119-L120)

```diff
-       constructor(QQ) {
-         this.lA = QQ, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, xQ.b)(), this.engine = QQ.Wx(), this.effect = this.createEffec … [truncated]
+       constructor(kk, ek) {
+         this.bw = kk, this.reportFailure = ek, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, nk.d)(), this.engine = kk.JU(), this. … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L124-L126` → after: `L124-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L124-L126) · [Before (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L124-L126)

```diff
-         FQ > wQ && this.warnOnce(`capacity:${QQ}`, `particle system ${QQ} holds ${wQ} particles, not ${FQ}: its records texture's limit`);
-         const LQ = new RQ(QQ, Math.min(FQ, wQ), this, this.lA);
-         return this.lA.addParticleSystem(LQ), LQ
+         ek > ik && this.warnOnce(`capacity:${kk}`, `particle system ${kk} holds ${ik} particles, not ${ek}: its records texture's limit`);
+         const Dk = new sk(kk, Math.min(ek, ik), this, this.bw);
+         return this.bw.addParticleSystem(Dk), Dk
```

#### 20. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L131)

```diff
-         for (const LQ of (0, YQ.l)(QQ.blendMode))
+         for (const Dk of (0, xk.m)(kk.blendMode))
```

#### 21. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L136)

```diff
-         this.lA._toBeDisposed.push(QQ)
+         this.bw._toBeDisposed.push(kk)
```

#### 22. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L139)

```diff
-         this.lA.removeParticleSystem(QQ), QQ.releaseGl()
+         this.bw.removeParticleSystem(kk), kk.releaseGl()
```

#### 23. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L146)

```diff
-           lA: LQ,
+           bw: Dk,
```

#### 24. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L152)

```diff
-           kQ = null !== (FQ = QQ.ramp) && void 0 !== FQ ? FQ : this.whiteRamp;
+           rk = null !== (ek = kk.ramp) && void 0 !== ek ? ek : this.whiteRamp;
```

#### 25. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L154)

```diff
-         for (const vQ of (0, YQ.l)(QQ.blendMode)) {
+         for (const Pk of (0, xk.m)(kk.blendMode)) {
```

#### 26. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L156)

```diff
-           wQ.enableEffect(FQ), FQ.setTexture("gpuParticleTexture", QQ.texture.mirror), FQ.setTexture("gpuParticleRampTexture", kQ), FQ._bindTexture("gpuParticleRecords", QQ.records), FQ.setMatrix("gpuParticleView", LQ.getViewMatrix()), FQ.setMatrix("gpuParticleProjection", LQ.get … [truncated]
+           ik.enableEffect(ek), ek.setTexture("gpuParticleTexture", kk.texture.mirror), ek.setTexture("gpuParticleRampTexture", rk), ek._bindTexture("gpuParticleRecords", kk.records), ek.setMatrix("gpuParticleView", Dk.getViewMatrix()), ek.setMatrix("gpuParticleProjection", Dk.get … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L158)

```diff
-         return wQ.setAlphaMode(HQ.d.ALPHA_DISABLE), DQ
+         return ik.setAlphaMode(Mk.c.ALPHA_DISABLE), bk
```

#### 28. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L162-L163` → after: `L162-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L162-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L162-L176) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L162-L163)

```diff
-           wQ = this.engine._gl;
-         !this.failed && wQ && (!FQ || FQ.isParallelCompiled && !FQ.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : FQ.isParallelCompiled && FQ.program && (wQ.g … [truncated]
+           ik = this.gl();
+         !this.failed && ik && (!ek || ek.isParallelCompiled && !ek.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : ek.isParallelCompiled && ek.program && (ik.g … [truncated]
+           if (kk.isContextLost()) return dk;
+           for (const [Dk, fk] of [
+               ["VERTEX SHADER", ek.vertexShader],
+               ["FRAGMENT SHADER", ek.fragmentShader]
+             ]) {
+             const ek = fk && !kk.getShaderParameter(fk, kk.COMPILE_STATUS) ? kk.getShaderInfoLog(fk) : null;
+             if (ek) return `${Dk} ${ek}`
+           }
+           return kk.getProgramInfoLog(ik) || "a program did not link"
+         }(ik, ek, ek.program))))
+       }
+       gl() {
+         return this.engine._gl
```

#### 29. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L166` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L179) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L166)

```diff
-         return QQ === YQ.e ? this.multiplyEffect : this.effect
+         return kk === xk.c ? this.multiplyEffect : this.effect
```

#### 30. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L170` → after: `L183-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L183-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L183-L187) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L170)

```diff
-           this.fail(FQ)
+           var ik;
+           this.fail(null !== (ik = this.gl()) && void 0 !== ik && ik.isContextLost() ? dk : function(kk) {
+             const ek = kk.split("\n    at ")[0];
+             return /^\S*@\S*:\d+:\d+/.test(ek) ? "a program failed, its log not in this browser's stack" : ek.replace(/^Error: /, "")
+           }(ek))
```

#### 31. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L175-L176` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L192-L193) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L175-L176)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${QQ}`);
-           for (const QQ of this.lA.fC.slice()) QQ instanceof RQ && QQ.disposeOnStop && QQ.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${kk}`), this.reportFailure(kk);
+           for (const kk of this.bw.ZY.slice()) kk instanceof sk && kk.disposeOnStop && kk.dispose()
```

#### 32. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L180-L191` → after: `L197-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L197-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L197-L222) · [Before (L180-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L180-L191)

```diff
-     var sQ = wQ(39625),
-       rQ = wQ(40518),
-       IQ = wQ(39352),
-       UQ = wQ(39582),
-       NQ = wQ(39574),
-       TQ = wQ(39491),
-       KQ = wQ(40571),
-       zQ = wQ(37172),
-       lQ = wQ(41021),
-       jQ = wQ(41027),
-       aQ = wQ(41033),
-       XQ = wQ(39518),
+     var Fk = ik(39377);
+     class uk extends Fk.d {
+       createEffect() {
+         const kk = super.createEffect(...arguments);
+         return Ik(kk), qk.has(kk) || (qk.add(kk), kk.onCompileObservable.add((() => {
+           Ik(kk)
+         }))), kk
+       }
+     }
+     const qk = new WeakSet;
+ 
+     function Ik(kk) {
+       kk._vertexSourceCodeBeforeMigration = "", kk._fragmentSourceCodeBeforeMigration = ""
+     }
+     var zk = ik(39774),
+       Qk = ik(40693),
+ ... (10 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L193-L196` → after: `L224-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L224-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L224-L227) · [Before (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L193-L196)

```diff
-       VQ = wQ(37082),
-       hQ = wQ(39736),
-       JQ = wQ(37145),
-       EQ = wQ(37100);
+       Ok = ik(37083),
+       gk = ik(39894),
+       Gk = ik(37174),
+       Nk = ik(37109);
```

#### 34. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L199-L200` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L230-L231) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L199-L200)

```diff
-       if (QQ.visibility < 1 || !QQ.isVisible || !QQ.isEnabled() || QQ.metadata[EQ.e] || !QQ.isReady()) return !0;
-       const FQ = QQ.lC;
+       if (kk.visibility < 1 || !kk.isVisible || !kk.isEnabled() || kk.metadata[Nk.f] || !kk.isReady()) return !0;
+       const ek = kk.TY;
```

#### 35. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L204` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L235) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L204)

```diff
-           qQ = LQ.Ux();
+           fk = Dk.fH();
```

#### 36. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L242) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L211)

```diff
-         this.dH = QQ, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, FQ.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.Lx = kk, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ek.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 37. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L221-L224` → after: `L252-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L252-L255) · [Before (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L221-L224)

```diff
-           dH: LQ
-         } = this, qQ = null === (FQ = LQ.RC) || void 0 === FQ ? void 0 : FQ.visibility;
-         if (!qQ || !QQ || LQ.Zx.yx) return !1;
-         if (!(LQ.nH.KLQ[0] >= JQ.h)) return !1;
+           Lx: Dk
+         } = this, fk = null === (ek = Dk.qY) || void 0 === ek ? void 0 : ek.visibility;
+         if (!fk || !kk || Dk.yH.YH) return !1;
+         if (!(Dk.Ux.kDk[0] >= Gk.i)) return !1;
```

#### 38. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L227` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L258) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L227)

```diff
-         const DQ = LQ.Mb,
+         const bk = Dk.Xx,
```

#### 39. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L230` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L261) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L230)

```diff
-         return vQ[0] = kQ.x + DQ[0], vQ[1] = kQ.y + DQ[1], vQ[2] = kQ.z + DQ[2], !!qQ.eyeClear(vQ[0], vQ[1], vQ[2], QQ.minZ, oQ, LQ.nH) && (this.vis = qQ, this.passable.clear(), this.count = 0, !0)
+         return Pk[0] = rk.x + bk[0], Pk[1] = rk.y + bk[1], Pk[2] = rk.z + bk[2], !!fk.eyeClear(Pk[0], Pk[1], Pk[2], kk.minZ, Sk, Dk.Ux) && (this.vis = fk, this.passable.clear(), this.count = 0, !0)
```

#### 40. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L251-L252` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L282-L283) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L251-L252)

```diff
-           nH: kQ
-         } = this.dH, [vQ, mQ] = kQ.KLQ, uQ = null !== wQ && wQ.update(LQ[0], LQ[1], LQ[2], kQ.KQQ, vQ, mQ, this.passable);
+           Ux: rk
+         } = this.Lx, [Pk, mk] = rk.kDk, Mk = null !== ik && ik.update(Dk[0], Dk[1], Dk[2], rk.kkk, Pk, mk, this.passable);
```

#### 41. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L263` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L294) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L263)

```diff
-           XQ.d.prototype.push.call(QQ, LQ)
+           Tk.h.prototype.push.call(kk, Dk)
```

#### 42. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L268-L273` → after: `L299-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L299-L304) · [Before (L268-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L268-L273)

```diff
-     var PQ = wQ(37129),
-       ZQ = wQ(37093),
-       yQ = wQ(39717),
-       BQ = wQ(41039),
-       dQ = wQ(39725),
-       QF = wQ(39650);
+     var ke = ik(37160),
+       ee = ik(37095),
+       ie = ik(39861),
+       De = ik(41196),
+       fe = ik(39870),
+       Se = ik(39787);
```

#### 43. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L287-L288` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L318-L319) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L287-L288)

```diff
-       if (!FQ || !0 !== FQ[VQ.s]) return;
-       const wQ = FQ[VQ.y],
+       if (!ek || !0 !== ek[Ok.m]) return;
+       const ik = ek[Ok.s],
```

#### 44. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L296` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L327) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L296)

```diff
-       const FQ = QQ.lC;
+       const ek = kk.TY;
```

#### 45. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L298` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L329) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L298)

```diff
-         const QQ = FQ[wQ].Ux();
+         const kk = ek[ik].fH();
```

#### 46. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L302` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L333) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L302)

```diff
-         const QQ = FQ[wQ].Ux();
+         const kk = ek[ik].fH();
```

#### 47. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L312` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L343) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L312)

```diff
-       if ("function" !== typeof wQ) throw new Error(`terrainDrawState: Babylon has no ${FQ} to hook`);
+       if ("function" !== typeof ik) throw new Error(`terrainDrawState: Babylon has no ${ek} to hook`);
```

#### 48. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L317` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L348) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L317)

```diff
-       const oQ = wQ.nH.KQQ,
+       const Sk = ik.Ux.kkk,
```

#### 49. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L321` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L352) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L321)

```diff
-         mQ = new PQ.b(oQ, QQ.Wx());
+         mk = new ke.c(Sk, kk.JU());
```

#### 50. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L323` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L354) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L323)

```diff
-         if (vF.has(QQ) || (vF.add(QQ), QQ.onContextLostObservable.add(qF), QQ.onContextRestoredObservable.add(qF)), kF) return;
+         if (ne.has(kk) || (ne.add(kk), kk.onContextLostObservable.add(me), kk.RU.add(me)), xe) return;
```

#### 51. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L325` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L356) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L325)

```diff
-         const FQ = BQ.e.prototype,
+         const ek = De.d.prototype,
```

#### 52. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L332-L333` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L363-L364) · [Before (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L332-L333)

```diff
-         const LQ = mF(QF.c.prototype, "_syncParentEnabledState");
-         Object.assign(QF.c.prototype, {
+         const Dk = Ue(Se.b.prototype, "_syncParentEnabledState");
+         Object.assign(Se.b.prototype, {
```

#### 53. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L338-L339` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L369-L370) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L338-L339)

```diff
-         const qQ = mF(dQ.c.prototype, "resetDrawCache");
-         dQ.c.prototype.resetDrawCache = function(QQ, FQ) {
+         const fk = Ue(fe.e.prototype, "resetDrawCache");
+         fe.e.prototype.resetDrawCache = function(kk, ek) {
```

#### 54. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L342` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L373) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L342)

```diff
-         const oQ = yQ.d.prototype,
+         const Sk = ie.e.prototype,
```

#### 55. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L353` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L384) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L353)

```diff
-       }(QQ.Wx());
+       }(kk.JU());
```

#### 56. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L368-L369` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L399-L400) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L368-L369)

```diff
-             wQ = QQ.hLQ[0],
-             LQ = QQ.hLQ[1];
+             ik = kk.rDk[0],
+             Dk = kk.rDk[1];
```

#### 57. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L385` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L416) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L385)

```diff
-             oQ = vQ.mY(QQ.activeCamera),
+             Sk = Pk.tn(kk.activeCamera),
```

#### 58. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L388` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L419) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L388)

```diff
-             const FQ = QQ.Wx().currentRenderPassId;
+             const ek = kk.JU().currentRenderPassId;
```

#### 59. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L405` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L436) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L405)

```diff
-             if (!hQ.e.IsInFrustum(FQ.hLQ, LQ)) continue;
+             if (!gk.e.IsInFrustum(ek.rDk, Dk)) continue;
```

#### 60. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L415` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L446) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L415)

```diff
-                 if (DQ && LQ[FQ] === mQ) YQ && 1 === qQ[FQ] && nQ(bQ) && 0, vQ.see(bQ, 1 === qQ[FQ] ? HQ : -1);
+                 if (bk && Dk[ek] === mk) nk && 1 === fk[ek] && Rk(xk) && 0, Pk.see(xk, 1 === fk[ek] ? Kk : -1);
```

#### 61. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L418` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L449) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L418)

```diff
-                   const QQ = !0 === bQ.metadata[ZQ.i];
+                   const kk = !0 === xk.metadata[ee.m];
```

#### 62. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L422` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L453) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L422)

```diff
-                 } else oQ ? pQ(bQ, HQ, !0 === bQ.metadata[ZQ.i]) : XQ.d.prototype.push.call(wQ, bQ)
+                 } else Sk ? Yk(xk, Kk, !0 === xk.metadata[ee.m]) : Tk.h.prototype.push.call(ik, xk)
```

#### 63. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L429` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L460) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L429)

```diff
-         const oQ = FQ.fLQ;
+         const Sk = ek.bDk;
```

#### 64. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L432` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L463) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L432)

```diff
-           FQ.isEnabled() && XQ.d.prototype.push.call(LQ, FQ)
+           ek.isEnabled() && Tk.h.prototype.push.call(Dk, ek)
```

#### 65. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L436-L437` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L467-L468) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L436-L437)

```diff
-         JLQ: () => vQ.culled,
-         sLQ: (QQ, FQ) => {
+         PDk: () => Pk.culled,
+         Zik: (kk, ek) => {
```

#### 66. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L441` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L472) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L441)

```diff
-             mQ = `${qQ}|${kQ}|${vQ}`;
+             mk = `${fk}|${rk}|${Pk}`;
```

#### 67. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L445-L447` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L476-L478) · [Before (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L445-L447)

```diff
-             wQ.OFQ([qQ * oQ - 1, kQ * oQ - 1, vQ * oQ - 1], null, QQ), uQ = Object.assign(LQ(QQ, oQ + 2), {
-               ELQ: mQ,
-               nLQ: 0,
+             ik.Zkk([fk * Sk - 1, rk * Sk - 1, Pk * Sk - 1], null, kk), Mk = Object.assign(Dk(kk, Sk + 2), {
+               mDk: mk,
+               MDk: 0,
```

#### 68. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L451` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L482) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L451)

```diff
-             }), GQ(uQ), YQ[uQ._noaSlot] = (0, fQ.i)(qQ, kQ, vQ), xQ[3 * uQ._noaSlot] = qQ, xQ[3 * uQ._noaSlot + 1] = kQ, xQ[3 * uQ._noaSlot + 2] = vQ, DQ.set(mQ, uQ)
+             }), yk(Mk), nk[Mk._noaSlot] = (0, Zk.e)(fk, rk, Pk), Uk[3 * Mk._noaSlot] = fk, Uk[3 * Mk._noaSlot + 1] = rk, Uk[3 * Mk._noaSlot + 2] = Pk, bk.set(mk, Mk)
```

#### 69. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L453` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L484) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L453)

```diff
-           uQ.nLQ++, QQ.metadata[VQ.C] = uQ
+           Mk.MDk++, kk.metadata[Ok.t] = Mk
```

#### 70. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L455-L457` → after: `L486-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L486-L488) · [Before (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L455-L457)

```diff
-         yN: QQ => {
-           const FQ = QQ.metadata[VQ.C];
-           FQ && (FQ.nLQ--, FQ.nLQ <= 0 && (DQ.delete(FQ.ELQ), tQ.push(FQ._noaSlot)), QQ.metadata[VQ.C] = null)
+         Tu: kk => {
+           const ek = kk.metadata[Ok.t];
+           ek && (ek.MDk--, ek.MDk <= 0 && (bk.delete(ek.mDk), wk.push(ek._noaSlot)), kk.metadata[Ok.t] = null)
```

#### 71. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L459` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L490) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L459)

```diff
-         XLQ: (QQ, FQ) => {
+         SDk: (kk, ek) => {
```

#### 72. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L461` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L492) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L461)

```diff
-             LQ = FQ.metadata[VQ.C];
+             Dk = ek.metadata[Ok.t];
```

#### 73. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L475` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L506) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L475)

```diff
-         kQQ: QQ => {
+         T6: kk => {
```

#### 74. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L477-L478` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L508-L509) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L477-L478)

```diff
-             FQ.TLQ.gLQ(QQ), FQ.NLQ.gLQ(QQ);
-             for (const wQ of FQ.hLQ) wQ.gLQ(QQ);
+             ek.Jik.KDk(kk), ek.Rik.KDk(kk);
+             for (const ik of ek.rDk) ik.KDk(kk);
```

#### 75. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L500` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L531) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L500)

```diff
-         if (!(QQ * (QQ >= 0 ? DQ : LQ) + FQ * (FQ >= 0 ? kQ : qQ) + uQ * (uQ >= 0 ? vQ : oQ) + wQ[mQ + 3] >= 0)) return !1
+         if (!(kk * (kk >= 0 ? bk : Dk) + ek * (ek >= 0 ? rk : fk) + Mk * (Mk >= 0 ? Pk : Sk) + ik[mk + 3] >= 0)) return !1
```

#### 76. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L504` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L535) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L504)

```diff
-     var YF = wQ(37333);
+     var pe = ik(37377);
```

#### 77. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L507-L510` → after: `L538-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L538-L541) · [Before (L507-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L507-L510)

```diff
-         var wQ = QQ.lA;
-         wQ.HLQ(new aQ.b(wQ));
-         var LQ = new lQ.e(vQ);
-         wQ.ZLQ = LQ, LQ.blocks = [];
+         var ik = kk.bw;
+         ik.qik(new ck.b(ik));
+         var Dk = new Xk.c(Pk);
+         ik.nDk = Dk, Dk.blocks = [];
```

#### 78. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L513-L515` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L544-L546) · [Before (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L513-L515)

```diff
-         this.textPlanes = DQ, this.JLQ = () => qQ.JLQ(), this.kQQ = QQ => {
-           uQ(LQ, QQ), qQ.kQQ(QQ)
-         }, this.sLQ = (FQ, wQ, kQ) => {
+         this.textPlanes = rk, this.PDk = () => fk.PDk(), this.T6 = kk => {
+           Mk(Dk, kk), fk.T6(kk)
+         }, this.Zik = (ek, ik, bk) => {
```

#### 79. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L517` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/babylon-backend.js#L548) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/babylon-backend.js#L517)

```diff
-           if (!FQ.metadata[VQ.y] && !FQ.metadata[VQ.q]) {
+           if (!ek.metadata[Ok.s] && !ek.metadata[Ok.k]) {
```
