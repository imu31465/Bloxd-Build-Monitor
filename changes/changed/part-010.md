# Changed — Bundle Modifications Report (Part 010 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `10 / 56` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 32. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L489` → after: `L747-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L747-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L747-L770) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L489)

```diff
-       return !!QQ && QQ.backFaceCulling && (0 === QQ.transparencyMode || 1 === QQ.transparencyMode)
+       return MM instanceof RangeError && /call stack/i.test(MM.message) || MM instanceof Error && "InternalError" === MM.name && /recursion/i.test(MM.message)
+     }
+     const jM = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
+ 
+     function aM(MM) {
+       var rM;
+       return MM instanceof WebAssembly.RuntimeError || MM instanceof OM || SM(MM) && jM.test(null !== (rM = MM.stack) && void 0 !== rM ? rM : "")
+     }
+ 
+     function PM(MM, rM) {
+       if (aM(MM)) throw MM;
+       console.error(rM, MM)
+     }
+ 
+     function nM(MM, rM, iM, SM, jM) {
+       if (rM % SM !== 0 || rM + iM > MM.byteLength) throw new OM(`${jM}: ${iM} bytes at ${rM}, ${SM}-aligned, outside ${MM.byteLength} bytes of memory`)
+ ... (8 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L492` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L773) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L492)

```diff
-   37829: (QQ, WQ, XQ) => {
+   41677: (MM, rM, iM) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L496-L498` → after: `L779-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L779-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L779-L783) · [Before (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L496-L498)

```diff
-       k: () => gQ,
-       o: () => PQ,
-       r: () => jQ
+       i: () => mM,
+       m: () => HM,
+       p: () => zM,
+       r: () => LM,
+       t: () => hM
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L500-L507` → after: `L785-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L785-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L785-L790) · [Before (L500-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L500-L507)

```diff
-     var wQ = XQ(37816);
-     const qQ = 1 / 16,
-       TQ = 1 / 64,
-       zQ = 2048;
-     wQ.l;
- 
-     function sQ(QQ, WQ, XQ) {
-       return Math.min(Math.abs(QQ[0] * WQ), Math.abs(QQ[5] * XQ)) / 2
+     class OM extends Error {
+       constructor(MM) {
+         super(`the join's code did not load: ${MM instanceof Error?MM.message:String(MM)}`, {
+           cause: MM
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === MM || void 0 === MM ? void 0 : MM.request
+       }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L511` → after: `L799-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L799-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L799-L803) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L511)

```diff
-       return qQ + TQ * QQ * QQ / WQ
+       try {
+         MM(rM)
+       } catch (iM) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", iM)
+       }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L514-L538` → after: `L806-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L806-L808) · [Before (L514-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L514-L538)

```diff
-     function PQ(QQ, WQ, XQ, qQ, TQ) {
-       const zQ = wQ.o;
-       return gQ(QQ[zQ], QQ[zQ + 1], QQ[zQ + 2], QQ[zQ + 3], QQ[zQ + 4], QQ[zQ + 5], WQ, XQ, qQ, TQ)
-     }
- 
-     function gQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
-       return (zQ <= QQ - PQ ? 0 : 1) | (zQ >= WQ + PQ ? 0 : 2) | (sQ <= XQ - PQ ? 0 : 4) | (sQ >= wQ + PQ ? 0 : 8) | (FQ <= qQ - PQ ? 0 : 16) | (FQ >= TQ + PQ ? 0 : 32)
-     }
-     const JQ = (() => {
-         const QQ = [];
-         for (let WQ = 0; WQ < wQ.s.length; WQ++) {
-           let XQ = 0;
-           for (let qQ = WQ + 1; qQ <= wQ.s.length; qQ++) {
-             const TQ = 1 << wQ.s[qQ - 1];
-             if (XQ & TQ) break;
-             XQ |= TQ, QQ.push({
- ... (9 more removed lines; see GitHub link above)
+     function zM() {
+       return nM
+     }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L540-L542` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L810-L811) · [Before (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L540-L542)

```diff
-     function IQ(QQ, WQ) {
-       const XQ = wQ.h[WQ];
-       return QQ[XQ + 1] - QQ[XQ]
+     function LM(MM) {
+       PM.push(MM), null !== nM && QM(MM, nM)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L545-L572` → after: `L814-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L814-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L814-L828) · [Before (L545-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L545-L572)

```diff
-     function jQ(QQ, WQ, XQ) {
-       let qQ = 0;
-       for (let zQ = 0; zQ < wQ.l; zQ++) IQ(QQ, zQ) > 0 && (qQ |= 1 << zQ);
-       if (0 === (WQ &= qQ)) return 0;
-       if (WQ === qQ) return XQ[0] = 0, XQ[1] = QQ[wQ.d], 1;
-       let TQ = null,
-         sQ = 1 / 0;
-       for (const PQ of function(QQ) {
-           let WQ = rQ[QQ];
-           if (WQ) return WQ;
-           const XQ = new Map,
-             wQ = (QQ, WQ) => {
-               const wQ = 4 * QQ + WQ.length / 2;
-               XQ.has(wQ) || XQ.set(wQ, {
-                 pX: QQ,
-                 windows: WQ
- ... (12 more removed lines; see GitHub link above)
+     function mM(MM) {
+       return SM ??= Promise.all([iM.e(84), iM.e(111), iM.e(86), iM.e(244), iM.e(89), iM.e(245), iM.e(224), iM.e(109), iM.e(264), iM.e(296), iM.e(48), iM.e(213), iM.e(232), iM.e(222), iM.e(205), iM.e(206), iM.e(170), iM.e(101), iM.e(134), iM.e(272), iM.e(68)]).then((() => iM(45248 … [truncated]
+         rM.loadAudio(MM), nM = rM;
+         for (const MM of PM) QM(MM, rM);
+         return rM
+       })).catch((MM => {
+         throw SM = null, MM
+       })), SM
+     }
+     async function HM(MM, rM) {
+       try {
+         const iM = await mM(MM);
+         await iM.loadClientGame(rM)
+       } catch (iM) {
+         throw new OM(iM)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L574-L577` → after: `L830-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L830-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L830-L835) · [Before (L574-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L574-L577)

```diff
-       const FQ = TQ.windows;
-       for (let wQ = 0; wQ < FQ.length; wQ += 2) {
-         const WQ = QQ[FQ[wQ]];
-         XQ[wQ] = WQ, XQ[wQ + 1] = QQ[FQ[wQ + 1]] - WQ
+     }
+ 
+     function hM(MM, rM) {
+       jM = {
+         running: MM,
+         shell: rM
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L579` → after: `L837-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L837-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/246.js#L837-L855) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/246.js#L579)

```diff
-       return FQ.length / 2
+     }
+ 
+     function JM() {
+       return aM
+     }
+     async function dM(MM) {
+       const rM = jM;
+       if ((null === rM || void 0 === rM ? void 0 : rM.running) !== MM) throw new Error("the core's session has ended");
+       const iM = await mM(rM.shell.audio).catch((MM => {
+         throw new OM(MM)
+       }));
+       if (null !== aM) return aM;
+       if (jM !== rM || MM.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (aM = iM.startGameHost(MM, rM.shell), null === aM) throw new Error("the core's shared tables didn't read, so the game can't start");
+       return aM
+     }
+ ... (3 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/247.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/247.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L2)

```diff
- export const ids = [247, 248];
+ export const ids = [247];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L4)

```diff
-   40519: (QQ, WQ, XQ) => {
+   37852: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L6-L7)

```diff
-       e: () => gQ,
-       f: () => rQ
+       c: () => GM,
+       d: () => UM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L9-L92` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L9-L26) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L9-L92)

```diff
-     var wQ = XQ(40260),
-       qQ = XQ(40268),
-       TQ = XQ(37370),
-       zQ = XQ(37546),
-       sQ = XQ(40525),
-       FQ = XQ(40491),
-       PQ = XQ(37418);
-     let gQ = (() => {
-         var QQ;
-         let WQ, XQ, FQ = sQ.d,
-           PQ = [],
-           gQ = [],
-           JQ = [],
-           rQ = [];
-         return QQ = class extends FQ {
-           constructor(QQ, WQ, XQ, qQ) {
- ... (68 more removed lines; see GitHub link above)
+     var OM = iM(4589),
+       SM = iM(1516),
+       jM = iM(44),
+       aM = iM(6944),
+       PM = iM(4581),
+       nM = iM(1313),
+       QM = iM(2039),
+       zM = iM(2006),
+       LM = iM(1520),
+       mM = iM(1188),
+       HM = iM(37855),
+       hM = iM(1116),
+       JM = iM.n(hM),
+       dM = iM(1360),
+       yM = iM(1398),
+       lM = iM(1287),
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L95-L243` → after: `L29-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L29-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L29-L35) · [Before (L95-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L95-L243)

```diff
-       JQ || (JQ = !0, FQ.e.AddNodeConstructor("Light_Type_3", ((QQ, WQ) => () => new gQ(QQ, TQ.s.Zero(), WQ))), (0, PQ.d)("BABYLON.HemisphericLight", gQ))
-     }
-   },
-   38041: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => qQ
-     });
-     var wQ = XQ(38047);
-     class qQ {
-       static GetPlanes(QQ) {
-         const WQ = [];
-         for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
-         return qQ.GetPlanesToRef(QQ, WQ), WQ
-       }
-       static GetNearPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
- ... (133 more removed lines; see GitHub link above)
+       const {
+         t: MM
+       } = (0, mM.A)(), [rM, iM] = (0, jM.useState)(!1), [hM, GM] = (0, jM.useState)(null), [eM, bM] = (0, jM.useState)(1), [wM, tM] = (0, jM.useState)(!1), [gM, uM] = (0, jM.useState)(!1), RM = (0, jM.useRef)(0), pM = (0, jM.useRef)(!1), WM = (0, jM.useRef)(!1), sM = (0, jM.useRe … [truncated]
+ 
+       function kM() {
+         const MM = null !== hM && void 0 !== hM ? hM : "Rested Speed";
+         QM.gameBridge.send("wakeUp", gM ? MM : null), DM.current = null, iM(!1), GM(null), bM(1), tM(!1), uM(!1)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L245-L284` → after: `L37-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L37-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L37-L46) · [Before (L245-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L245-L284)

```diff
-     }
-   },
-   38947: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => TQ
-     });
-     var wQ = XQ(38956);
-     const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
-       ...QQ
-     } : null : QQ.clone(WQ) : null;
-     class TQ {
-       static DeepCopy(QQ, WQ, XQ, TQ) {
-         let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const sQ = function(QQ) {
-           const WQ = [];
-           do {
- ... (24 more removed lines; see GitHub link above)
+ 
+       function ZM() {
+         return !wM && (kM(), !0)
+       }
+       return (0, SM.d)("PlayerPhysicsTypeUpdate", (MM => {
+         MM !== DM.current && (DM.current = MM, MM === aM.n.SLEEPING ? (WM.current || (RM.current = QM.gameBridge.lookup("cameraZoom", null), WM.current = !0), pM.current = !0, QM.gameBridge.send("setCameraZoom", 3), iM(!0), bM(function() {
+           for (const MM of QM.gameBridge.lookup("blocksStandingOn", null)) {
+             if (HM.c.leafBeds.includes(MM)) return console.log(`Found leaf bed: ${MM}`), 1;
+             if (HM.c.woolBeds.includes(MM)) return console.log(`Found woold bed: ${MM}`), 2;
+             if (HM.c.strongBeds.includes(MM)) return console.log(`Found strong bed ${MM}`), 3
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L286-L287` → after: `L48-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L48-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L48-L139) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L286-L287)

```diff
-         }
-       }
+           return 1
+         }())) : (WM.current = !1, iM(!1), GM(null), bM(1)))
+       })), (0, jM.useEffect)((() => () => {
+         (0, nM.v)(UM)
+       }), []), (0, jM.useEffect)((() => {
+         rM ? (0, nM.z)(UM) : ((0, nM.v)(UM), pM.current && (QM.gameBridge.send("setCameraZoom", RM.current), pM.current = !1))
+       }), [rM]), (0, lM.v)("overlay", sM, ZM, rM), (0, EM.jsx)(OM.d, {
+         className: "SleepingOverlay",
+         "data-camera-keeper": "",
+         in: rM,
+         timeout: 300,
+         nodeRef: sM,
+         unmountOnExit: !0,
+         children: (0, EM.jsx)("div", {
+           ref: sM,
+           onClick: MM => {
+ ... (76 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L290-L296` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L161) · [Before (L290-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L290-L296)

```diff
-   38191: (QQ, WQ, XQ) => {
-     function wQ() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
-         const WQ = 16 * Math.random() | 0;
-         return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
-       }))
-     }
+   41656: (MM, rM, iM) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L306-L318` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L189-L190) · [Before (L306-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L306-L318)

```diff
-       static _CheckLimit(QQ, WQ) {
-         let XQ = wQ._LogLimitOutputs[QQ];
-         return XQ ? XQ.current++ : (XQ = {
-           limit: WQ,
-           current: 1
-         }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
-       }
-       static _GenerateLimitMessage(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const XQ = wQ._LogLimitOutputs[QQ];
-         if (!XQ || !wQ.MessageLimitReached) return;
-         const qQ = this._Levels[WQ];
-         XQ.current === XQ.limit && wQ[qQ.name](wQ.MessageLimitReached.replace(/%LIMIT%/g, "" + XQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
+       constructor() {
+         this.lostAtMs = null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L320-L321` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L192-L193) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L320-L321)

```diff
-       static _AddLogEntry(QQ) {
-         wQ._LogCache = QQ + wQ._LogCache, wQ.OnNewCacheEntry && wQ.OnNewCacheEntry(QQ)
+       update(MM, rM) {
+         return MM ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= rM, rM - this.lostAtMs >= 250)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L323-L416` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L195-L196) · [Before (L323-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L323-L416)

```diff
-       static _FormatMessage(QQ) {
-         const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
-           XQ = new Date;
-         return "[" + WQ(XQ.getHours()) + ":" + WQ(XQ.getMinutes()) + ":" + WQ(XQ.getSeconds()) + "]: " + QQ
-       }
-       static _LogDisabled(QQ, WQ) {}
-       static _LogEnabled() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           WQ = arguments.length > 1 ? arguments[1] : void 0,
-           XQ = arguments.length > 2 ? arguments[2] : void 0;
-         const qQ = Array.isArray(WQ) ? WQ[0] : WQ;
-         if (void 0 !== XQ && !wQ._CheckLimit(qQ, XQ)) return;
-         const TQ = wQ._FormatMessage(qQ),
-           zQ = this._Levels[QQ],
-           sQ = Array.isArray(WQ) ? WQ.slice(1) : [];
-         zQ.logFunc && zQ.logFunc("BJS - " + TQ, ...sQ);
- ... (78 more removed lines; see GitHub link above)
+       reset() {
+         this.lostAtMs = null
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L458-L531` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L200-L201) · [Before (L458-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L458-L531)

```diff
-       constructor(QQ, WQ, XQ) {
-         this.name = QQ, this._parentTask = WQ, this._context = XQ, this.disabled = !1
-       }
-       setInitializeFunc(QQ) {
-         this._initFunc = QQ
-       }
-       setExecuteFunc(QQ) {
-         this._executeFunc = QQ
-       }
-       _execute() {
-         this.disabled || this._executeFunc(this._context)
-       }
-       _initialize() {
-         this._initFunc?.(this._context)
-       }
-       _isValid() {
- ... (58 more removed lines; see GitHub link above)
+       constructor(MM, rM) {
+         this.press = MM, this.release = rM, this.downAtMs = null, this.token = null, this.latched = !1
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L533-L536` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L203-L205) · [Before (L533-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L533-L536)

```diff
-       setOutputLayerAndFaceIndices(QQ) {
-         const WQ = this.frameGraphRenderTarget.renderTargetWrapper;
-         if (WQ)
-           for (const XQ of QQ) WQ.setLayerAndFaceIndex(XQ.targetIndex, XQ.layerIndex, XQ.faceIndex)
+       update(MM, rM, iM, OM) {
+         if (MM && null === this.downAtMs) return this.downAtMs = iM, this.latched = OM, void(this.token = this.press(OM));
+         null !== this.downAtMs && (this.latched ? MM && this.end() : !rM && iM - this.downAtMs >= 40 && this.end())
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L538-L539` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L207-L208) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L538-L539)

```diff
-       _initialize() {
-         this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
+       isLatched() {
+         return null !== this.downAtMs && this.latched
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L541-L542` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L210-L211) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L541-L542)

```diff
-       _execute() {
-         this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
+       unlatch() {
+         this.latched = !1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L544-L546` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L213-L214) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L544-L546)

```diff
-       _isValid() {
-         const QQ = super._isValid();
-         return QQ || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
+       cancel() {
+         null !== this.downAtMs && this.end()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L548-L549` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L216-L218) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L548-L549)

```diff
-       _dispose() {
-         this._frameGraphRenderTarget?.dispose()
+       end() {
+         const MM = this.token;
+         this.downAtMs = null, this.token = null, this.latched = !1, this.release(MM)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L552-L628` → after: `L221-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L221-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L221-L286) · [Before (L552-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L552-L628)

```diff
-     var UQ = XQ(37399);
-     class bQ {
-       get name() {
-         return this._name
-       }
-       set name(QQ) {
-         this._name = QQ
-       }
-       get disabled() {
-         return this._disabled
-       }
-       set disabled(QQ) {
-         this._disabled = QQ
-       }
-       get passes() {
-         return this._passes
- ... (61 more removed lines; see GitHub link above)
+     const uM = {
+         kind: "specialAction",
+         action: "SpecialAction2"
+       },
+       RM = MM => {
+         let rM = null;
+         const iM = new wM.c,
+           OM = () => {
+             rM && (((MM, rM, iM) => {
+               switch (iM.kind) {
+                 case "reload":
+                   return void rM.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void rM.specialActionUp(iM.action);
+                 case "customButton":
+                   return void GM.gameBridge.send("pressCustomButton", {
+ ... (50 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L633-L640` → after: `L289-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L289-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L289-L310) · [Before (L633-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L633-L640)

```diff
-       }
-       _execute() {
-         const QQ = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
-         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const WQ of QQ) WQ._execute()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
+       };
+     var pM = iM(8717);
+     var WM = iM(41652),
+       sM = iM(9353),
+       DM = iM(8767),
+       kM = iM(9442);
+     var ZM = iM(41650),
+       oM = iM(9451),
+       fM = iM(41665),
+       YM = iM(9425),
+       NM = iM(9357),
+       AM = iM(9362),
+       xM = iM(9364),
+       vM = iM(9264),
+       FM = iM(9331);
+     const BM = () => vM.c[(0, mM.j)().tapHoldTime].wheelMs,
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L642-L650` → after: `L312-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L312-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L312-L491) · [Before (L642-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L642-L650)

```diff
-         this.onAfterTaskExecute.notifyObservers(this)
-       }
-       _initializePasses() {
-         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const QQ of this._passes) QQ._initialize();
-           for (const QQ of this._passesDisabled) QQ._initialize()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
+       }), (MM => {
+         let {
+           bodies: rM,
+           press: OM
+         } = MM;
+         iM(rM, OM)
+       })),
+       KM = {
+         running: !1,
+         latchedAtMs: -1 / 0
+       },
+       qM = MM => {
+         const rM = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+ ... (164 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L653-L701` → after: `L494-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L494-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L494-L524) · [Before (L653-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L653-L701)

```diff
-       _checkSameRenderTarget(QQ, WQ) {
-         if (null === QQ || null === WQ) return QQ === WQ;
-         if (QQ.length !== WQ.length) return !1;
-         for (let XQ = 0; XQ < QQ.length; XQ++)
-           if (QQ[XQ] !== WQ[XQ]) return !1;
-         return !0
-       }
-     }
-     class vQ extends bQ {
-       get alphaMode() {
-         return this.postProcess.alphaMode
-       }
-       set alphaMode(QQ) {
-         this.postProcess.alphaMode = QQ
-       }
-       get drawWrapper() {
- ... (33 more removed lines; see GitHub link above)
+   },
+   41652: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => hM,
+       d: () => dM,
+       h: () => HM
+     });
+     var OM = iM(1313),
+       SM = iM(4613),
+       jM = iM(9383),
+       aM = iM(37852),
+       PM = iM(1818),
+       nM = iM(1181),
+       QM = iM(8792),
+       zM = iM(9324),
+       LM = iM(9408);
+ ... (15 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L716-L727` → after: `L527-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L527-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L527-L550) · [Before (L716-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L716-L727)

```diff
-       record() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           WQ = arguments.length > 1 ? arguments[1] : void 0,
-           XQ = arguments.length > 2 ? arguments[2] : void 0;
-         const wQ = super.record(QQ, WQ, XQ);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, wQ
-       }
-     }
-     var HQ = XQ(42070);
-     class aQ extends vQ {
-       constructor(QQ, WQ, XQ) {
-         super(QQ, WQ, XQ || new HQ.g(QQ, WQ.engine))
+   },
+   41650: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => SM,
+       f: () => nM,
+       h: () => PM,
+       i: () => zM,
+       l: () => aM,
+       n: () => jM,
+       o: () => QM,
+       s: () => LM
+     });
+     var OM = iM(8723);
+     class SM {
+       constructor() {
+         this.fullTiltSinceMs = null
+ ... (8 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L729-L730` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L552-L553) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L729-L730)

```diff
-       getClassName() {
-         return "FrameGraphPassTask"
+       reset() {
+         this.fullTiltSinceMs = null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L733-L743` → after: `L556-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L556-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L556-L582) · [Before (L733-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L733-L743)

```diff
-     var lQ = XQ(40355),
-       hQ = XQ(40436),
-       iQ = XQ(40402),
-       cQ = XQ(40519),
-       AQ = XQ(37546);
-     class RQ {
-       getRenderCamera(QQ) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let WQ;
-           return WQ = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, QQ && WQ && WQ.isRigCamera ? WQ.rigParent : WQ
+     const jM = (MM, rM, iM, SM, jM) => {
+         let aM = 1;
+         return "boost" === iM.lookCurve ? aM = MM.update(rM, iM, jM) : MM.reset(),
+           function(MM, rM) {
+             let {
+               yawBoost: iM = 1,
+               aiming: SM = !1
+             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+             const jM = (0, OM.h)((0, OM.i)(MM, rM.lookDeadzone), rM.lookCurve),
+               aM = 220 * Math.PI / 180,
+               PM = SM ? rM.aimLookSensitivity / 100 : 1,
+               nM = rM.lookSensitivityX / 100 * PM,
+               QM = rM.lookSensitivityY / 100 * PM;
+             return {
+               yawRadPerSec: jM.x * aM * nM * iM * (rM.invertLookX ? -1 : 1),
+               pitchRadPerSec: jM.y * aM * .7 * QM * (rM.invertLookY ? -1 : 1)
+ ... (11 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L745-L812` → after: `L584-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L584-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L584-L600) · [Before (L745-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L745-L812)

```diff
-       }
-       setRenderCamera(QQ) {
-         this._renderCamera = QQ
-       }
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new cQ.e("shared gizmo light", new PQ.s(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = AQ.b.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == RQ._DefaultUtilityLayer ? RQ._CreateDefaultUtilityLayerFromScene(FQ.d.LastCreatedScene) : RQ._DefaultUtilityLayer
-       }
-       static _CreateDefaultUtilityLayerFromScene(QQ) {
-         return RQ._DefaultUtilityLayer = new RQ(QQ), RQ._DefaultUtilityLayer.originalScene.yE.addOnce((() => {
-           RQ._DefaultUtilityLayer = null
-         })), RQ._DefaultUtilityLayer
-       }
-       static get DefaultKeepDepthUtilityLayer() {
- ... (52 more removed lines; see GitHub link above)
+       },
+       PM = (MM, rM) => rM ? {
+         move: MM.rightStick,
+         look: MM.leftStick
+       } : {
+         move: MM.leftStick,
+         look: MM.rightStick
+       },
+       nM = (MM, rM) => {
+         const iM = (0, OM.i)(MM, rM),
+           SM = Math.min(1, Math.hypot(iM.x, iM.y));
+         return {
+           magnitude: SM,
+           speed: Math.min(1, SM / .8),
+           headingOffset: 0 === SM ? 0 : Math.atan2(iM.x, -iM.y),
+           x: iM.x,
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L827-L828` → after: `L603-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L603-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L603-L628) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L827-L828)

```diff
-       FindMainObjectRenderer: function(QQ) {
-         return QQ.findMainObjectRenderer()
+       QM = (MM, rM) => {
+         let {
+           sprintPressed: iM,
+           magnitude: OM,
+           autoSprint: SM,
+           nowMs: jM
+         } = rM;
+         const aM = iM ? jM : MM.latchedAtMs,
+           PM = (MM => {
+             let {
+               running: rM,
+               magnitude: iM,
+               sprintPressed: OM,
+               autoSprint: SM
+             } = MM;
+             return !(iM < .5) && (!!OM || !!(SM && iM >= .9) || rM)
+ ... (10 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L830-L842` → after: `L630-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L630-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L630-L665) · [Before (L830-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L830-L842)

```diff
-       CreateUtilityLayerRenderer: function(QQ) {
-         let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const XQ = QQ.cB,
-           wQ = new RQ(XQ, WQ, !0);
-         wQ.utilityLayerScene.activeCamera = XQ.activeCamera;
-         let qQ = EQ.FindMainCamera(XQ.frameGraph);
-         !qQ && XQ.cameras.length > 0 && (qQ = XQ.cameras[0]), qQ && (wQ.setRenderCamera(qQ), wQ.utilityLayerScene.activeCamera = qQ);
-         const TQ = XQ.onAfterRenderObservable.add((() => {
-           wQ.render()
-         }));
-         return wQ.utilityLayerScene.yE.addOnce((() => {
-           XQ.onAfterRenderObservable.remove(TQ)
-         })), wQ
+       zM = (MM, rM, iM) => iM && MM.gyroAiming && "button" === MM.gyroActivation && MM.gyroButton !== rM ? MM.gyroButton : null,
+       LM = (MM, rM) => rM ? {
+         ...MM,
+         isHeld: iM => iM !== rM && MM.isHeld(iM),
+         wasPressed: iM => iM !== rM && MM.wasPressed(iM),
+         wasReleased: iM => iM !== rM && MM.wasReleased(iM),
+         value: iM => iM === rM ? 0 : MM.value(iM)
+       } : MM
+   },
+   41665: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => SM,
+       e: () => OM
+     });
+     const OM = MM => {
+       let {
+ ... (20 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L845-L862` → after: `L668-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L668-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L668-L682) · [Before (L845-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L845-L862)

```diff
-     let CQ = null;
- 
-     function uQ(QQ, WQ, XQ, wQ) {
-       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         zQ = arguments.length > 6 ? arguments[6] : void 0,
-         sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-       const {
-         height: PQ,
-         width: gQ
-       } = oQ(QQ, WQ, XQ);
-       if (!PQ || !gQ) return void rQ.b.Error("Invalid 'size' parameter !");
-       const JQ = WQ.sE();
-       let jQ = JQ.activeCamera !== WQ;
-       if (JQ.frameGraph) {
- ... (2 more removed lines; see GitHub link above)
+     class SM {
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+       }
+       lostToPadScreen() {
+         this.regainPending = !0
+       }
+       filter(MM, rM) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = rM, this.graceEndsMs = rM + 500);
+         const iM = rM < this.graceEndsMs;
+         return iM && (MM.sneakPressed || MM.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, rM + 300))), MM.sneakHeld ? iM && MM.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: MM.sneakHeld && !this.ignoringHeld,
+           sneakPressed: MM.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: MM.sneakTogglePressed && !iM
+         }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L900-L1024` → after: `L685-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L685-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L685-L709) · [Before (L900-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L900-L1024)

```diff
-     async function kQ(QQ, WQ, XQ, wQ) {
-       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         TQ = arguments.length > 5 ? arguments[5] : void 0,
-         zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return await new Promise((sQ => {
-         uQ(QQ, WQ, {
-           width: XQ,
-           height: wQ
-         }, (() => {
-           sQ()
-         }), qQ, !0, TQ, zQ)
-       }))
-     }
- 
-     function fQ(QQ, WQ, TQ, zQ) {
-       let sQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
- ... (109 more removed lines; see GitHub link above)
+   },
+   41640: (MM, rM, iM) => {
+     iM(9451)
+   },
+   41642: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => EM
+     });
+     var OM = iM(22),
+       SM = iM(9383),
+       jM = iM(9400),
+       aM = iM(8731),
+       PM = iM(8776),
+       nM = iM(8743),
+       QM = iM(41650),
+       zM = iM(41652),
+ ... (9 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1026-L1040` → after: `L711-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L711-L712) · [Before (L1026-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L1026-L1040)

```diff
-         GQ = FQ || jQ.DumpData,
-         UQ = QQ.tasks,
-         bQ = UQ.length,
-         vQ = QQ.pausedExecution,
-         HQ = JQ.getCaps().parallelShaderCompile;
-       rQ.setBackBufferTextures(0, 0, {
-         size: pQ,
-         options: {
-           createMipMaps: !1,
-           samples: qQ,
-           types: [0],
-           formats: [5],
-           useSRGBBuffers: [!1],
-           creationFlags: [0],
-           labels: ["screenshot color"]
+         commit: MM => {
+           OM.i.Tz("requestEmoteWheelPadCommit", MM)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1042` → after: `L714-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L714-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L714-L716) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L1042)

```diff
-         sizeIsPercentage: !1
+         close: () => {
+           OM.i.Tz("requestEmoteWheelClose")
+         }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1044-L1052` → after: `L718-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L718-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L718-L721) · [Before (L1044-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L1044-L1052)

```diff
-         size: pQ,
-         options: {
-           createMipMaps: !1,
-           samples: qQ,
-           types: [0],
-           formats: [JQ.isStencilEnable ? 13 : 14],
-           useSRGBBuffers: [!1],
-           creationFlags: [0],
-           labels: ["screenshot depth"]
+         isOpen: HM.c,
+         openButton: () => (0, aM.m)("chat"),
+         aim: MM => {
+           OM.i.Tz(HM.e, MM)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1054-L1066` → after: `L723-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L723-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L723-L761) · [Before (L1054-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L1054-L1066)

```diff
-         sizeIsPercentage: !1
-       });
-       let lQ = VQ;
-       if (TQ) {
-         const WQ = new dQ("fxaa", QQ);
-         WQ.sourceTexture = lQ, lQ = WQ.outputTexture, QQ.addTask(WQ)
-       }
-       if (yQ !== BQ || DQ !== IQ) {
-         const WQ = new aQ("pass", QQ);
-         WQ.sourceTexture = lQ, WQ.targetTexture = QQ.textureManager.createRenderTargetTexture("pass_output", {
-           size: {
-             width: yQ,
-             height: DQ
+         commit: MM => {
+           OM.i.Tz(HM.j, MM)
+         },
+         close: () => {
+           OM.i.Tz(HM.h)
+         },
+         keptOpenBy: [zM.c]
+       }, {
+         isOpen: hM.s,
+         openButton: () => (0, aM.m)("actionButton"),
+         aim: MM => {
+           OM.i.Tz(hM.b, MM)
+         },
+         commit: MM => {
+           OM.i.Tz(hM.j, MM)
+         },
+ ... (23 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1068-L1074` → after: `L763-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L763-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L763-L774) · [Before (L1068-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L1068-L1074)

```diff
-           options: {
-             createMipMaps: !1,
-             types: [0],
-             formats: [5],
-             samples: 1,
-             labels: ["screenshot_final_texture"],
-             useSRGBBuffers: [!1]
+           onFrame: OM => {
+             var SM;
+             const mM = dM();
+             if (!mM) return;
+             if (null !== (0, LM.b)([...zM.h, ...null !== (SM = mM.keptOpenBy) && void 0 !== SM ? SM : []])) return void mM.close();
+             const HM = mM.openButton(),
+               hM = (0, QM.h)(OM.frame, (0, nM.j)().swapSticks),
+               JM = yM(mM) ? hM.move : hM.look;
+             MM !== mM ? (MM = mM, rM = !lM(OM, HM) || Math.hypot(JM.x, JM.y) >= jM.E, iM = !1) : iM && (iM = !1, lM(OM, HM) && (rM = !1)), mM.aim(JM);
+             const EM = (0, aM.m)("menuConfirm"),
+               UM = (0, aM.m)("menuBack");
+             return OM.wasPressed(UM) ? (PM.d.consumeButton(UM), void mM.close()) : OM.wasPressed(EM) || OM.wasPressed(HM) ? (PM.d.consumeButton(EM), PM.d.consumeButton(HM), void mM.commit(!1)) : void(rM && lM(OM, HM) && (rM = !1, mM.commit(!0)))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1076-L1108` → after: `L776-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L776-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/247.js#L776-L779) · [Before (L1076-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/247.js#L1076-L1108)

```diff
-           sizeIsPercentage: !1
-         }), lQ = WQ.outputTexture, QQ.addTask(WQ)
-       }
-       const hQ = EQ.FindMainObjectRenderer(QQ);
-       let iQ = null;
-       hQ && (iQ = hQ.camera, hQ.camera = WQ), JQ.getCaps().parallelShaderCompile = void 0, await QQ.buildAsync();
-       const cQ = gQ ?? (rQ.hasHistoryTextures ? 32 : 1);
-       for (let jQ = 0; jQ < cQ; ++jQ) QQ.execute();
-       QQ.pausedExecution = !0, JQ.getCaps().parallelShaderCompile = HQ;
-       for (let jQ = bQ; jQ < UQ.length; ++jQ) QQ.tasks[jQ].dispose();
-       QQ.tasks.length = bQ, hQ && iQ && (hQ.camera = iQ);
-       const AQ = QQ.textureManager.getTextureFromHandle(lQ);
-       return AQ.incrementReferences(), rQ.resetBackBufferTextures(), await QQ.buildAsync(), QQ.pausedExecution = vQ, new Promise((QQ => {
-         JQ._readTexturePixels(AQ, yQ, DQ, -1, 0, null, !0, !1, 0, 0).then((async WQ => {
-           AQ.dispose(), GQ(yQ, DQ, WQ, PQ ? void 0 : WQ => QQ(WQ), wQ, zQ, !0, void 0, sQ), PQ && QQ(null)
-         }))
- ... (17 more removed lines; see GitHub link above)
+           onDeactivate: () => {
+             iM = null !== MM && dM() === MM, iM || (MM = null, rM = !1)
+           }
+         })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/248.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/248.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016)

#### 1. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L4)

```diff
-   38041: (QQ, WQ, XQ) => {
+   39471: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L6)

```diff
-       e: () => qQ
+       d: () => hM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L8-L46` → after: `L8-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L8-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L8-L610) · [Before (L8-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L8-L46)

```diff
-     var wQ = XQ(38047);
-     class qQ {
-       static GetPlanes(QQ) {
-         const WQ = [];
-         for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
-         return qQ.GetPlanesToRef(QQ, WQ), WQ
-       }
-       static GetNearPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
-       }
-       static GetFarPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
-       }
-       static GetLeftPlaneToRef(QQ, WQ) {
- ... (23 more removed lines; see GitHub link above)
+     var OM = iM(181),
+       SM = iM(38623);
+     const jM = 1.2,
+       aM = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         vz: .5,
+ ... (587 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L49` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L613) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L49)

```diff
-   38047: (QQ, WQ, XQ) => {
+   38005: (MM, rM, iM) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L51` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L615) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L51)

```diff
-       b: () => qQ
+       e: () => OM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L53-L129` → after: `L617-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L617-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L617-L773) · [Before (L53-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L53-L129)

```diff
-     var wQ = XQ(37370);
-     class qQ {
-       constructor(QQ, WQ, XQ, qQ) {
-         this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
-       }
-       awQ() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let QQ = this.normal.getHashCode();
- ... (61 more removed lines; see GitHub link above)
+     const OM = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (141 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L134` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L777) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L134)

```diff
-   38947: (QQ, WQ, XQ) => {
+   38627: (MM, rM, iM) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L136` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L779) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L136)

```diff
-       d: () => TQ
+       b: () => aM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L138-L174` → after: `L781-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L781-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L781-L800) · [Before (L138-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L138-L174)

```diff
-     var wQ = XQ(38956);
-     const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
-       ...QQ
-     } : null : QQ.clone(WQ) : null;
-     class TQ {
-       static DeepCopy(QQ, WQ, XQ, TQ) {
-         let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const sQ = function(QQ) {
-           const WQ = [];
-           do {
-             const XQ = Object.getOwnPropertyNames(QQ);
-             for (const QQ of XQ) - 1 === WQ.indexOf(QQ) && WQ.push(QQ)
-           } while (QQ = Object.getPrototypeOf(QQ));
-           return WQ
-         }(QQ);
-         for (const PQ of sQ) {
- ... (21 more removed lines; see GitHub link above)
+     var OM = iM(347),
+       SM = iM.n(OM),
+       jM = iM(2e3);
+     let aM;
+     var PM, nM, QM, zM, LM, mM, HM, hM, JM;
+     const dM = [2, 0, 1, 8, "c", "a", 9, 7, 5, 38, "d", 255, "length", "undefined", void 0, "e", 70, 71, 63, 6, "fromCodePoint", 12, "push", 3, null, 111, 18, "i", 91, 19, 8191, 88, 13, 14, 4, "b", 53, 116, 127, 128, 129, 130, 124, 125, 126, 131, 132, 133, 120, 121, 122, 123, 139 … [truncated]
+ 
+     function yM(...MM) {
+       return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
+         for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = '1@8"=]$}/w4?3vaC+hHkLBm{|%YuI`ZVWje!5tAoE*nXpb6#dD;G.FlT>yQNJs&9K<2,fcU):Pxi7MRgr_z(0qO[^~S', MM[dM[0]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[0]].length, MM[dM[10]] = [], MM[dM[8]] = dM[1], MM[-dM[9]] = dM[1], MM[dM[7]] = -dM … [truncated]
+           if (MM[dM[6]] = MM[dM[5]].indexOf(MM[dM[0]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
+             if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[6]];
+             else {
+               RM(MM[dM[7]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[-dM[9]], MM[-dM[9]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+               do {
+                 RM(MM[dM[10]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[-dM[9]] -= dM[3])
+ ... (4 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L176-L177` → after: `L802-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L802-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L802-L868) · [Before (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L176-L177)

```diff
-   },
-   38191: (QQ, WQ, XQ) => {
+ 
+     function lM(...MM) {
+       return MM[dM[12]] = dM[2], typeof zM !== dM[13] && zM ? (new zM).decode(new LM(MM[dM[1]])) : typeof mM !== dM[13] && mM ? mM.from(MM[dM[1]]).toString("utf-8") : JM(MM[dM[1]])
+     }
+ 
+     function EM(...MM) {
+       if (MM[dM[12]] = dM[23], MM[dM[1]] === yM(109)) return MM[dM[2]] + MM[dM[0]]
+     }
+ 
+     function UM() {}
+     RM(PM = {}, nM = ['?D{Phci}ew"g(NLEat;/', ".elVDf0|5ljg1u/k*E;:;z{`]KZ}S_qEd$g.L", 'P{IxB;F}%L=g%]xoMfbIKd#vky/uQD^Iz"KPgT+/X&PD$][mlbaVBNL8', 'K"3`SyF@~&0;_5J5~PG/Pg]_83:IX8', "!Gw:<Fw_JaM>Vzhuz$,]_71Q&H[`D:<{[<1uwJY56Ca:?)]VAx&.9Q63=wl", "*3.`DM*qMFcIzD%IclXxJM@FFKZg.+bYwfY … [truncated]
+       var MM, rM, iM, OM = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+ ... (51 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L179-L182` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L870) · [Before (L179-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L179-L182)

```diff
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
-         const WQ = 16 * Math.random() | 0;
-         return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
-       }))
+       RM = function() {}
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L184-L208` → after: `L872-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L872-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L872-L885) · [Before (L184-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L184-L208)

```diff
-     XQ.d(WQ, {
-       d: () => wQ
-     })
-   },
-   38956: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => wQ
-     });
-     class wQ {
-       static _CheckLimit(QQ, WQ) {
-         let XQ = wQ._LogLimitOutputs[QQ];
-         return XQ ? XQ.current++ : (XQ = {
-           limit: WQ,
-           current: 1
-         }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
-       }
- ... (9 more removed lines; see GitHub link above)
+     aM = (...MM) => {
+       function rM(...MM) {
+         return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
+           for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = 'H*$:?M[)p#!,m18e3V>TLRDuBa%fS<"+cE/X];@{vQs.G5=~0P7U4yYtICA&blZ`F9n2jKz_}NidW|^wJgrxq(6oOhk', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[35]].length, MM[dM[34]] = [], MM[dM[8]] = dM[1], MM[dM[36]] = dM[1], MM[dM[7]] = … [truncated]
+             if (MM[dM[27]] = MM[dM[5]].indexOf(MM[dM[35]][MM[dM[3]]]), MM[dM[27]] !== -dM[2])
+               if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[27]];
+               else {
+                 RM(MM[dM[7]] += MM[dM[27]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[dM[36]], MM[dM[36]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+                 do {
+                   RM(MM[dM[34]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[36]] -= dM[3])
+                 } while (MM[dM[36]] > dM[7]);
+                 MM[dM[7]] = -dM[2]
+               } return MM[dM[7]] > -dM[2] && MM[dM[34]].push((MM[dM[8]] | MM[dM[7]] << MM[dM[36]]) & dM[11]), lM(MM[dM[34]])
+         }(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L210-L233` → after: `L887-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L887-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L887-L942) · [Before (L210-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L210-L233)

```diff
-       static _FormatMessage(QQ) {
-         const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
-           XQ = new Date;
-         return "[" + WQ(XQ.getHours()) + ":" + WQ(XQ.getMinutes()) + ":" + WQ(XQ.getSeconds()) + "]: " + QQ
-       }
-       static _LogDisabled(QQ, WQ) {}
-       static _LogEnabled() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           WQ = arguments.length > 1 ? arguments[1] : void 0,
-           XQ = arguments.length > 2 ? arguments[2] : void 0;
-         const qQ = Array.isArray(WQ) ? WQ[0] : WQ;
-         if (void 0 !== XQ && !wQ._CheckLimit(qQ, XQ)) return;
-         const TQ = wQ._FormatMessage(qQ),
-           zQ = this._Levels[QQ],
-           sQ = Array.isArray(WQ) ? WQ.slice(1) : [];
-         zQ.logFunc && zQ.logFunc("BJS - " + TQ, ...sQ);
- ... (8 more removed lines; see GitHub link above)
+       MM[dM[12]] = dM[3];
+       const iM = MM[dM[1]][rM(dM[37])][rM(117) + rM(118) + rM(119)](MM[dM[2]]);
+       MM[dM[3]] = MM[dM[1]][rM(dM[37])][rM(dM[48]) + rM(dM[49]) + rM(dM[50]) + rM(dM[51])](iM);
+       const OM = MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[39]) + rM(dM[40]) + rM(dM[41]) + dM[15]) : MM[dM[3]][rM(dM[39]) + rM(dM[40]) + rM(dM[41]) + dM[15]],
+         aM = MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[45]) + rM(dM[46]) + rM(dM[47])) : MM[dM[3]][rM(dM[45]) + rM(dM[46]) + rM(dM[47])];
+       RM(SM()[rM(134)](GM, dM[1], dM[1], MM[dM[8]]), SM().Md(GM, GM, SM()[rM(135)], MM[dM[23]].heading), SM()[rM(136)](gM, MM[dM[34]].dd), gM[dM[2]] = dM[1]);
+       const QM = MM[dM[0]][rM(137) + rM(138)]();
+       if (RM(MM[dM[3]] = MM[dM[1]][rM(dM[37])][rM(dM[48]) + rM(dM[49]) + rM(dM[50]) + rM(dM[51])](iM), MM[dM[69]] = MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[52]) + rM(dM[53])) : MM[dM[3]][rM(dM[52]) + rM(dM[5 … [truncated]
+         function hM(...MM) {
+           for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = 'O9aUzm=lwpHkZA3D|7r*^Kc{Fn0P?NT!E1#4d8"QJuy`(gBV5><2.o}xLWC_i+~bv6S,&f:@Y$)]%/hs[Ij;GtReqXM', MM[-dM[58]] = "" + (MM[dM[1]] || ""), MM[dM[23]] = MM[-dM[58]].length, MM[-dM[61]] = [], MM[dM[8]] = dM[1], MM[dM[50]] = dM[1], MM[dM[6 … [truncated]
+             if (MM[dM[6]] = MM[dM[5]].indexOf(MM[-dM[58]][MM[dM[59]]]), MM[dM[6]] !== -dM[2])
+               if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
+               else {
+                 RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[60]] << MM[dM[50]], MM[dM[50]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+                 do {
+                   RM(MM[-dM[61]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[50]] -= dM[3])
+ ... (40 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L235-L241` → after: `L944-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L944-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/248.js#L944-L979) · [Before (L235-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/248.js#L235-L241)

```diff
-       static set LogLevels(QQ) {
-         wQ.Log = wQ._LogDisabled, wQ.Warn = wQ._LogDisabled, wQ.Error = wQ._LogDisabled;
-         const WQ = [wQ.MessageLogLevel, wQ.WarningLogLevel, wQ.ErrorLogLevel];
-         for (const XQ of WQ)
-           if ((QQ & XQ) === XQ) {
-             const QQ = this._Levels[XQ];
-             wQ[QQ.name] = wQ._LogEnabled.bind(wQ, XQ)
+       const zM = wM;
+       RM(SM()[rM(153)](zM, GM, gM), zM[dM[2]] = dM[1], MM[dM[64]] = SM()[rM(154)](zM)), QM || (MM[dM[64]] *= MM[dM[69]]);
+       const LM = MM[dM[19]][rM(155) + rM(156) + rM(157)],
+         mM = LM ? Math[rM(158)](LM, MM[dM[64]]) : MM[dM[64]];
+       SM()[rM(159) + rM(160)](zM, zM);
+       const HM = MM[dM[7]] !== dM[24] && void 0 !== MM[dM[7]] ? MM[dM[7]] : MM[dM[19]][rM(161) + rM(162) + rM(163) + rM(164)];
+       if (mM > dM[1]) {
+         function kM(...MM) {
+           for (RM(MM[dM[12]] = dM[2], MM[dM[71]] = 'D4z|5u8(*F{n}h21?@&Lk!iPQ"Y)M+l7X3sSZvVEJ`9y>6%Tp~NmC.:BWU^AwxfcaoHKg,/q$e[dRIt#0G_O;<j]rb=', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[-dM[72]] = MM[dM[35]].length, MM[dM[10]] = [], MM[dM[8]] = dM[1], MM[dM[19]] = dM[1], MM[dM[60 … [truncated]
+             if (MM[dM[6]] = MM[dM[71]].indexOf(MM[dM[35]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
+               if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
+               else {
+                 RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[60]] << MM[dM[19]], MM[dM[19]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+                 do {
+                   RM(MM[dM[10]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[19]] -= dM[3])
+                 } while (MM[dM[19]] > dM[7]);
+ ... (20 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/249.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/249.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/249.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/249.js#L2)

```diff
- export const ids = [248, 249];
+ export const ids = [249];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/249.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/249.js#L4)

```diff
-   61529: (QQ, WQ, XQ) => {
+   40906: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L6-L11` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/249.js#L6-L10) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/249.js#L6-L11)

```diff
-       RegisterShaderMaterial: () => wQ.c,
-       ShaderMaterial: () => wQ.t,
-       ShaderMaterialCreateFromSnippetAsync: () => wQ.g,
-       ShaderMaterialParse: () => wQ.r,
-       ShaderMaterialParseFromFileAsync: () => wQ.j,
-       ShaderMaterialParseFromSnippetAsync: () => wQ.n
+       getBlockFaces: () => mM,
+       getIngameIconUrl: () => JM,
+       getItemIconUrl: () => hM,
+       getItemTextureUrl: () => HM,
+       getParticleTextureUrl: () => dM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L13-L14` → after: `L12-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L12-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/249.js#L12-L73) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/249.js#L13-L14)

```diff
-     var wQ = XQ(40717);
-     (0, wQ.c)()
+     var OM = iM(4843),
+       SM = iM(37975),
+       jM = iM(9810),
+       aM = iM(3571);
+     const PM = new Set,
+       nM = new Set;
+     let QM = null;
+ 
+     function zM(MM) {
+       PM.has(MM) || (PM.add(MM), nM.add(MM), QM ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${nM.size} names`, [...nM]), nM.clear(), QM = null
+       }), 1e3))
+     }
+ 
+     function LM(MM, rM) {
+       try {
+ ... (46 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L16` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/249.js#L75) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/249.js#L16)

```diff
-   38041: (QQ, WQ, XQ) => {
+   38005: (MM, rM, iM) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L20-L25` → after: `L79-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L79-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/249.js#L79-L235) · [Before (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/249.js#L20-L25)

```diff
-     var wQ = XQ(38047);
-     class qQ {
-       static GetPlanes(QQ) {
-         const WQ = [];
-         for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
-         return qQ.GetPlanesToRef(QQ, WQ), WQ
+     const OM = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (141 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L27-L269` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/249.js#L237) · [Before (L27-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/249.js#L27-L269)

```diff
-       static GetNearPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
-       }
-       static GetFarPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
-       }
-       static GetLeftPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] + XQ[0], WQ.normal.y = XQ[7] + XQ[4], WQ.normal.z = XQ[11] + XQ[8], WQ.d = XQ[15] + XQ[12], WQ.normalize()
-       }
-       static GetRightPlaneToRef(QQ, WQ) {
-         const XQ = QQ.m;
-         WQ.normal.x = XQ[3] - XQ[0], WQ.normal.y = XQ[7] - XQ[4], WQ.normal.z = XQ[11] - XQ[8], WQ.d = XQ[15] - XQ[12], WQ.normalize()
-       }
- ... (227 more removed lines; see GitHub link above)
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/250.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/250.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L4)

```diff
-   38084: (QQ, WQ, XQ) => {
+   38044: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L7` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L7-L8) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L7)

```diff
-       g: () => zQ
+       f: () => OM,
+       h: () => SM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L9-L3407` → after: `L10-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L10-L15) · [Before (L9-L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L9-L3407)

```diff
-     var wQ = XQ(9608),
-       qQ = XQ(9580),
-       TQ = XQ(402);
-     const zQ = {
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
- ... (3383 more removed lines; see GitHub link above)
+     const OM = 1 / 2.2,
+       SM = 2.2;
+     Math.sqrt(5);
+     let jM = .001
+   },
+   38074: (MM, rM, iM) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3409-L3566` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L17) · [Before (L3409-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3409-L3566)

```diff
-       return {
-         [`${QQ} Banner`]: {
-           positions: [{
-             block: `${QQ} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${QQ} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
-         },
-         [`${QQ} Banner|meta|rot2|bot`]: {
-           positions: [{
- ... (142 more removed lines; see GitHub link above)
+       return parseInt(MM.toString().replace(/\W/g, ""))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3569-L3664` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L20-L22) · [Before (L3569-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3569-L3664)

```diff
-     function FQ(QQ) {
-       const WQ = (0, TQ.Qb)(QQ);
-       return {
-         [WQ]: {
-           positions: [{
-             block: WQ,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${WQ} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_${WQ} Top Right`,
- ... (80 more removed lines; see GitHub link above)
+     function SM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(MM - rM) <= iM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3667-L3743` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L25-L27) · [Before (L3667-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3667-L3743)

```diff
-     function PQ(QQ) {
-       const WQ = `_${QQ} Back`,
-         XQ = `_${QQ} Dish`;
-       return {
-         [QQ]: {
-           positions: [{
-             block: QQ,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: WQ,
-             x: 0,
-             y: 0,
-             z: -1
-           }, {
- ... (61 more removed lines; see GitHub link above)
+     function jM(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return MM < rM - OM || MM > iM + OM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3746-L3767` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L30-L31) · [Before (L3746-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3746-L3767)

```diff
-     function gQ(QQ) {
-       const WQ = `Small ${QQ} Pod`;
-       return {
-         [WQ]: {
-           positions: [{
-             block: WQ,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${QQ} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_Small ${QQ} Pod Top`,
- ... (6 more removed lines; see GitHub link above)
+     function aM(MM, rM) {
+       return MM === rM ? MM : Math.random() * (rM - MM) + MM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3769-L3772` → after: `L33-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L33-L35) · [Before (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3769-L3772)

```diff
-     for (const rQ in zQ) {
-       for (const QQ of zQ[rQ].positions)
-         if (QQ.id = qQ.h[QQ.block].id, rQ === QQ.block && (0 !== QQ.x || 0 !== QQ.y || 0 !== QQ.z)) throw new Error(`Multiblock "${rQ}" has main block "${QQ.block}" at non-origin position (${QQ.x}, ${QQ.y}, ${QQ.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       zQ[qQ.h[rQ].id] = zQ[rQ]
+ 
+     function PM(MM, rM, iM) {
+       return MM + (rM - MM) * iM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3808-L3810` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L38-L40) · [Before (L3808-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3808-L3810)

```diff
-     function sQ(QQ) {
-       const WQ = wQ.h[QQ];
-       return !!WQ && QQ !== wQ.e && !WQ.model && !WQ.XI && !1 !== WQ.solid && !WQ.Xy
+     function nM(MM, rM, iM) {
+       let OM = dM(rM - MM, 360);
+       return OM > 180 && (OM -= 360), MM + OM * mM(iM)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3812-L3836` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L42-L45) · [Before (L3812-L3836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3812-L3836)

```diff
-     class FQ {
-       constructor(QQ) {
-         this.model = QQ, this.reshapeOffsets = [...zQ, [0, -1, 0]]
-       }
-       handles(QQ) {
-         const WQ = wQ.h[QQ];
-         return (null === WQ || void 0 === WQ ? void 0 : WQ.model) === this.model && void 0 !== WQ.attachedTop
-       }
-       affects(QQ) {
-         return this.handles(QQ) || sQ(QQ) || (0, TQ.w)(wQ.h[QQ])
-       }
-       shape(QQ, WQ, XQ, zQ, FQ) {
-         let PQ = this.handles(QQ(WQ, XQ + 1, zQ)) ? qQ.i : 0;
-         return qQ.t.forEach(((FQ, gQ) => {
-           let {
-             dx: JQ,
- ... (9 more removed lines; see GitHub link above)
+ 
+     function QM(MM, rM, iM) {
+       let OM;
+       return OM = MM != rM ? mM((iM - MM) / (rM - MM)) : 0, OM
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3838-L3868` → after: `L47-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L47-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L47-L56) · [Before (L3838-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3838-L3868)

```diff
-   },
-   38277: (QQ, WQ, XQ) => {
-     function wQ(QQ, WQ) {
-       var XQ;
-       WQ || (WQ = {});
-       const wQ = null !== (XQ = WQ.customAttributes) && void 0 !== XQ ? XQ : {};
-       var qQ, TQ, zQ;
-       "Gun" === (null === QQ || void 0 === QQ ? void 0 : QQ.type) && (wQ.shotsLeft = null !== (qQ = null !== (TQ = wQ.shotsLeft) && void 0 !== TQ ? TQ : null === (zQ = wQ.gunStats) || void 0 === zQ ? void 0 : zQ.clipSize) && void 0 !== qQ ? qQ : QQ.clipSize);
-       if (wQ.enchantmentTier && (wQ.enchantmentTier = wQ.enchantmentTier.toString()), wQ.enchantments)
-         for (const JQ in wQ.enchantments) {
-           const QQ = wQ.enchantments[JQ];
-           if ("number" !== typeof QQ) {
-             const WQ = parseInt(QQ);
-             isNaN(WQ) || WQ < 0 ? wQ.enchantments[JQ] = void 0 : wQ.enchantments[JQ] = WQ > 1e9 ? 1e9 : WQ
-           }
-         }
- ... (15 more removed lines; see GitHub link above)
+ 
+     function zM(MM, rM, iM, OM, SM) {
+       const jM = SM * SM,
+         aM = SM * jM;
+       return MM * (2 * aM - 3 * jM + 1) + iM * (-2 * aM + 3 * jM) + rM * (aM - 2 * jM + SM) + OM * (aM - jM)
+     }
+ 
+     function LM(MM, rM, iM, OM, SM) {
+       const jM = SM * SM;
+       return 6 * (jM - SM) * MM + (3 * jM - 4 * SM + 1) * rM + 6 * (-jM + SM) * iM + (3 * jM - 2 * SM) * OM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3889` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L60-L62) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3889)

```diff
-       return zQ <= QQ && QQ <= sQ
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(iM, Math.max(rM, MM))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3898-L3899` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L66) · [Before (L3898-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3898-L3899)

```diff
-       var WQ, XQ;
-       return "string" === typeof(null === QQ || void 0 === QQ || null === (WQ = QQ.persisted) || void 0 === WQ || null === (XQ = WQ.shared) || void 0 === XQ ? void 0 : XQ.text)
+       return MM -= 2 * Math.PI * Math.floor((MM + Math.PI) / (2 * Math.PI))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3903` → after: `L70-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L70-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L70-L84) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3903)

```diff
-       return yQ(QQ) && "" !== QQ.persisted.shared.text.trim()
+       const rM = MM.toString(16);
+       return MM <= 15 ? ("0" + rM).toUpperCase() : rM.toUpperCase()
+     }
+ 
+     function JM(MM) {
+       if (Math.log2) return Math.floor(Math.log2(MM));
+       if (MM < 0) return NaN;
+       if (0 === MM) return -1 / 0;
+       let rM = 0;
+       if (MM < 1) {
+         for (; MM < 1;) rM++, MM *= 2;
+         rM = -rM
+       } else if (MM > 1)
+         for (; MM > 1;) rM++, MM = Math.floor(MM / 2);
+       return rM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3907-L3909` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L88) · [Before (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3907-L3909)

```diff
-       let [XQ, , wQ] = WQ;
-       const [TQ, , zQ] = qQ.s[QQ][IQ];
-       return XQ * TQ + wQ * zQ
+       return MM - Math.floor(MM / rM) * rM
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3913` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L92) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3913)

```diff
-       return XQ[1] - WQ[1] || DQ(QQ, WQ) - DQ(QQ, XQ)
+       return (MM - rM) / (iM - rM)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3916-L3921` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L95-L96) · [Before (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3916-L3921)

```diff
-     function GQ(QQ, WQ, XQ, TQ, sQ) {
-       var FQ;
-       let gQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ(WQ[0], WQ[1], WQ[2]);
-       if (!(PQ[gQ - zQ] & 1 << XQ)) return null;
-       const [JQ, rQ, IQ] = qQ.s[sQ][XQ], jQ = [WQ[0] + JQ, WQ[1] + rQ, WQ[2] + IQ], BQ = QQ(jQ[0], jQ[1], jQ[2]), yQ = null === (FQ = wQ.h[BQ]) || void 0 === FQ ? void 0 : FQ.meta;
-       return (null === yQ || void 0 === yQ ? void 0 : yQ.rootId) === TQ && yQ.rot === sQ && PQ[BQ - zQ] & 1 << (1 ^ XQ) ? jQ : null
+     function lM(MM, rM, iM) {
+       return MM * (iM - rM) + rM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3924-L3949` → after: `L99-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L99-L101) · [Before (L3924-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3924-L3949)

```diff
-     function UQ(QQ, WQ, XQ, TQ) {
-       const zQ = QQ(WQ, XQ, TQ);
-       if (!FQ(zQ)) return null;
-       const {
-         rootId: sQ,
-         rot: PQ
-       } = wQ.h[zQ].meta, JQ = (WQ, XQ) => {
-         let wQ = WQ,
-           qQ = 1;
-         for (let TQ = GQ(QQ, wQ, XQ, sQ, PQ); TQ && qQ < gQ; TQ = GQ(QQ, wQ, XQ, sQ, PQ)) wQ = TQ, qQ++;
-         return {
-           end: wQ,
-           cells: qQ
-         }
-       }, yQ = JQ(JQ([WQ, XQ, TQ], rQ).end, jQ).end, VQ = JQ(yQ, IQ).cells, [DQ, , pQ] = qQ.s[PQ][IQ];
-       let UQ = 1;
- ... (10 more removed lines; see GitHub link above)
+     function EM(MM, rM) {
+       let iM = dM(rM - MM, 360);
+       return iM > 180 && (iM -= 360), iM
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3953-L3966` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L105-L106) · [Before (L3953-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3953-L3966)

```diff
-       for (const XQ of function(QQ) {
-           let {
-             anchor: WQ,
-             rot: XQ,
-             width: wQ,
-             height: TQ
-           } = QQ;
-           const [zQ, , sQ] = qQ.s[XQ][IQ], FQ = [];
-           for (let qQ = 0; qQ < TQ; qQ++)
-             for (let QQ = 0; QQ < wQ; QQ++) FQ.push([WQ[0] + zQ * QQ, WQ[1] - qQ, WQ[2] + sQ * QQ]);
-           return FQ
-         }(QQ))
-         if (yQ(WQ(XQ[0], XQ[1], XQ[2]))) return XQ;
-       return null
+       const iM = dM(MM, 2 * rM);
+       return rM - Math.abs(iM - rM)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3969-L3996` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L109-L111) · [Before (L3969-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3969-L3996)

```diff
-     function vQ(QQ, WQ, XQ, qQ, TQ) {
-       const zQ = QQ(XQ, qQ, TQ);
-       if (!FQ(zQ)) return null;
-       const {
-         rootId: sQ,
-         rot: PQ
-       } = wQ.h[zQ].meta, gQ = [
-         [XQ, qQ, TQ]
-       ], rQ = new Set([gQ[0].join()]);
-       let IQ = gQ[0],
-         jQ = null;
-       for (let wQ = 0; wQ < gQ.length; wQ++) {
-         const XQ = gQ[wQ];
-         if (pQ(PQ, XQ, IQ) < 0 && (IQ = XQ), yQ(WQ(XQ[0], XQ[1], XQ[2]))) {
-           const WQ = UQ(QQ, XQ[0], XQ[1], XQ[2]);
-           (!jQ || pQ(PQ, WQ.anchor, jQ.anchor) < 0) && (jQ = WQ)
- ... (12 more removed lines; see GitHub link above)
+     function GM(MM, rM, iM) {
+       let OM = mM(iM);
+       return OM = -2 * OM * OM * OM + 3 * OM * OM, rM * OM + MM * (1 - OM)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L3999-L4010` → after: `L114-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L114-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L114-L207) · [Before (L3999-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L3999-L4010)

```diff
-     function dQ(QQ, WQ, XQ, zQ, sQ) {
-       if (null !== XQ && FQ(XQ)) {
-         const {
-           rootName: QQ,
-           rot: WQ
-         } = wQ.h[XQ].meta;
-         if (qQ.s[WQ].some((QQ => {
-             let [WQ, XQ, wQ] = QQ;
-             return WQ === zQ[0] && XQ === zQ[1] && wQ === zQ[2]
-           }))) return {
-           root: QQ,
-           rot: WQ
+     function CM(MM, rM, iM) {
+       let OM;
+       return OM = Math.abs(rM - MM) <= iM ? rM : MM + Math.sign(rM - MM) * iM, OM
+     }
+ 
+     function eM(MM, rM, iM) {
+       const OM = EM(MM, rM);
+       let SM;
+       return SM = -iM < OM && OM < iM ? rM : CM(MM, rM = MM + OM, iM), SM
+     }
+ 
+     function bM(MM, rM, iM) {
+       return (MM - rM) / (iM - rM)
+     }
+ 
+     function wM(MM, rM, iM) {
+ ... (78 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4012-L4016` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L209-L211) · [Before (L4012-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L4012-L4016)

```diff
-       }
-       const [PQ, gQ] = qQ.i[sQ], JQ = QQ(WQ[0] - PQ, WQ[1], WQ[2] - gQ);
-       return {
-         root: (0, TQ.f)(JQ) ? qQ.w : qQ.t,
-         rot: sQ
+       }(MM, iM, rM)));
+       return () => {
+         for (const MM of iM) MM?.()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4020` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L215) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L4020)

```diff
-   38512: (QQ, WQ, XQ) => {
+   38085: (MM, rM, iM) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4022-L4025` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L217-L218) · [Before (L4022-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L4022-L4025)

```diff
-       c: () => TQ,
-       f: () => zQ,
-       j: () => qQ,
-       m: () => sQ
+       b: () => jM,
+       e: () => SM
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4027-L4029` → after: `L220-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L220-L224) · [Before (L4027-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L4027-L4029)

```diff
-     var wQ = XQ(407);
-     const qQ = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...XQ(658).p.map((QQ => `${QQ} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
-       TQ = ["Obby RPG"];
+     const OM = {};
+ 
+     function SM(MM, rM) {
+       OM[MM] = rM
+     }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4032-L4039` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/250.js#L227) · [Before (L4032-L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/250.js#L4032-L4039)

```diff
-       const WQ = QQ.indexOf("|");
-       return -1 === WQ ? {
-         item: QQ,
-         clientPredictedThrower: null
-       } : {
-         item: QQ.slice(0, WQ),
-         clientPredictedThrower: QQ.slice(WQ + 1)
-       }
+       return OM[MM]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/251.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/251.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L2)

```diff
- export const ids = [251];
+ export const ids = [251, 258];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L4-L35` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L5-L7) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L4-L35)

```diff
-   38344: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => PQ,
-       h: () => wQ,
-       i: () => sQ,
-       m: () => qQ,
-       q: () => zQ,
-       s: () => TQ
-     });
-     const wQ = 1.001,
-       qQ = .501,
-       TQ = .025,
-       zQ = .75,
-       sQ = .08,
-       FQ = 4;
- 
- ... (16 more removed lines; see GitHub link above)
+   39285: MM => {
+     MM.exports = function(MM) {
+       return null != MM && null != MM.constructor && "function" === typeof MM.constructor.isBuffer && MM.constructor.isBuffer(MM)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L38-L56` → after: `L10-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L10-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L10-L25) · [Before (L38-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L38-L56)

```diff
-   38711: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       A: () => UQ,
-       B: () => GQ,
-       D: () => rQ,
-       E: () => BQ,
-       G: () => VQ,
-       J: () => qQ,
-       d: () => gQ,
-       f: () => FQ,
-       i: () => pQ,
-       k: () => PQ,
-       l: () => sQ,
-       n: () => zQ,
-       o: () => TQ,
-       r: () => vQ,
- ... (3 more removed lines; see GitHub link above)
+   39276: (MM, rM, iM) => {
+     var OM = iM(39280),
+       SM = iM(39283),
+       jM = iM(39285);
+     iM.g.__TYPEDARRAY_POOL || (iM.g.__TYPEDARRAY_POOL = {
+       UINT8: SM([32, 0]),
+       UINT16: SM([32, 0]),
+       UINT32: SM([32, 0]),
+       INT8: SM([32, 0]),
+       INT16: SM([32, 0]),
+       INT32: SM([32, 0]),
+       FLOAT: SM([32, 0]),
+       DOUBLE: SM([32, 0]),
+       DATA: SM([32, 0]),
+       UINT8C: SM([32, 0]),
+       BUFFER: SM([32, 0])
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L58` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L27-L31) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L58)

```diff
-     var wQ = XQ(9664);
+     var aM = "undefined" !== typeof Uint8ClampedArray,
+       PM = iM.g.__TYPEDARRAY_POOL;
+     PM.UINT8C || (PM.UINT8C = SM([32, 0])), PM.BUFFER || (PM.BUFFER = SM([32, 0]));
+     var nM = PM.DATA,
+       QM = PM.BUFFER;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L61` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L34-L38) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L61)

```diff
-       return Math.floor(QQ).toLocaleString("en-US")
+       if (MM) {
+         var rM = MM.length || MM.byteLength,
+           iM = OM.log2(rM);
+         nM[iM].push(MM)
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L72-L83` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L42-L46) · [Before (L72-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L72-L83)

```diff
-       const WQ = QQ.split("|")[0];
-       return (0, wQ.n)(WQ) ? WQ === wQ.d ? "cryo" : "water" : null
-     }
-     const IQ = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 1, 0],
-         [0, -1, 0],
-         [0, 0, 1],
-         [0, 0, -1]
-       ],
-       jQ = 63;
+       MM = OM.nextPow2(MM);
+       var rM = OM.log2(MM),
+         iM = nM[rM];
+       return iM.length > 0 ? iM.pop() : new ArrayBuffer(MM)
+     }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L86-L103` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L49) · [Before (L86-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L86-L103)

```diff
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const XQ = WQ ? function(QQ, WQ, XQ) {
-         const wQ = IQ.findIndex((wQ => {
-           let [qQ, TQ, zQ] = wQ;
-           return qQ === QQ && TQ === WQ && zQ === XQ
-         }));
-         return wQ < 0 ? 0 : 1 << wQ
-       }(WQ[0], WQ[1], WQ[2]) : 0;
-       return "maker" === QQ ? {
-         kind: QQ,
-         faces: XQ
-       } : "user" === QQ ? {
-         kind: QQ,
-         faces: jQ & ~XQ
-       } : {
-         kind: QQ,
- ... (2 more removed lines; see GitHub link above)
+       return new Uint8Array(LM(MM), 0, MM)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L107` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L53) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L107)

```diff
-       return "pipe" === QQ || "tank" === QQ || "maker" === QQ
+       return new Uint16Array(LM(2 * MM), 0, MM)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L110-L166` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L56-L58) · [Before (L110-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L110-L166)

```diff
-     function VQ(QQ, WQ, XQ) {
-       return 0 !== (QQ.faces & 1 << XQ) && 0 !== (WQ.faces & 1 << (1 ^ XQ)) && (yQ(QQ.kind) || yQ(WQ.kind))
-     }
-     const DQ = (QQ, WQ, XQ, wQ) => ({
-         input: QQ,
-         inputAmount: wQ,
-         output: WQ,
-         outputAmount: XQ
-       }),
-       pQ = {
-         Condenser: {
-           kind: "Condenser",
-           opMs: 2e3,
-           inputSlot: null,
-           fuelSlot: null,
-           outputSlots: [],
- ... (41 more removed lines; see GitHub link above)
+     function hM(MM) {
+       return new Uint32Array(LM(4 * MM), 0, MM)
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L168-L169` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L60-L61) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L168-L169)

```diff
-     function GQ(QQ, WQ) {
-       return 1e3 * (null !== WQ && void 0 !== WQ ? WQ : 0) / QQ.opMs
+     function JM(MM) {
+       return new Int8Array(LM(MM), 0, MM)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L173-L175` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L65) · [Before (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L173-L175)

```diff
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       const XQ = GQ(pQ["Coolant Mixer"], JQ) * WQ;
-       return QQ <= 0 ? 0 : Math.ceil(QQ / XQ - 1e-9)
+       return new Int16Array(LM(2 * MM), 0, MM)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L207-L208` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L69) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L207-L208)

```diff
-       let [WQ, XQ] = QQ;
-       return [-XQ, WQ]
+       return new Int32Array(LM(4 * MM), 0, MM)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L211-L212` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L72-L73) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L211-L212)

```diff
-     function JQ(QQ, WQ) {
-       return QQ[0] === WQ[0] && QQ[1] === WQ[1]
+     function lM(MM) {
+       return new Float32Array(LM(4 * MM), 0, MM)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L215-L216` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L76-L77) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L215-L216)

```diff
-     function rQ(QQ, WQ) {
-       return QQ[0] * WQ[0] + QQ[1] * WQ[1] === 0
+     function EM(MM) {
+       return new Float64Array(LM(8 * MM), 0, MM)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L226-L241` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L80-L82) · [Before (L226-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L226-L241)

```diff
-     function BQ(QQ, WQ, XQ, wQ, qQ) {
-       return WQ < jQ.p || WQ >= jQ.p + jQ.s || Math.floor(QQ / jQ.y) === Math.floor(wQ / jQ.y) && Math.floor(XQ / jQ.y) === Math.floor(qQ / jQ.y)
-     }
-     const yQ = "Splitter",
-       VQ = "Sorting Gate",
-       DQ = new Set(jQ.L),
-       pQ = new Set([...jQ.L, "Belt Loader", "Fast Loader", VQ]),
-       GQ = new Set(jQ.w),
-       UQ = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 0, 1],
-         [0, 0, -1],
-         [0, 1, 0],
-         [0, -1, 0]
-       ];
+     function UM(MM) {
+       return aM ? new Uint8ClampedArray(LM(MM), 0, MM) : mM(MM)
+     }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L245` → after: `L153-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L153-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L153-L212) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L245)

```diff
-       return null !== (WQ = null === (XQ = wQ.h[QQ]) || void 0 === XQ ? void 0 : XQ.meta.rootName) && void 0 !== WQ ? WQ : ""
+       return rM = (MM > 65535) << 4, rM |= iM = ((MM >>>= rM) > 255) << 3, rM |= iM = ((MM >>>= iM) > 15) << 2, (rM |= iM = ((MM >>>= iM) > 3) << 1) | (MM >>>= iM) >> 1
+     }, rM.log10 = function(MM) {
+       return MM >= 1e9 ? 9 : MM >= 1e8 ? 8 : MM >= 1e7 ? 7 : MM >= 1e6 ? 6 : MM >= 1e5 ? 5 : MM >= 1e4 ? 4 : MM >= 1e3 ? 3 : MM >= 100 ? 2 : MM >= 10 ? 1 : 0
+     }, rM.popCount = function(MM) {
+       return 16843009 * ((MM = (858993459 & (MM -= MM >>> 1 & 1431655765)) + (MM >>> 2 & 858993459)) + (MM >>> 4) & 252645135) >>> 24
+     }, rM.countTrailingZeros = iM, rM.nextPow2 = function(MM) {
+       return MM += 0 === MM, --MM, MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) + 1
+     }, rM.prevPow2 = function(MM) {
+       return MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) - (MM >>> 1)
+     }, rM.parity = function(MM) {
+       return MM ^= MM >>> 16, MM ^= MM >>> 8, MM ^= MM >>> 4, 27030 >>> (MM &= 15) & 1
+     };
+     var OM = new Array(256);
+     ! function(MM) {
+       for (var rM = 0; rM < 256; ++rM) {
+         var iM = rM,
+ ... (44 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L248-L249` → after: `L215-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L215-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L215-L223) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L248-L249)

```diff
-     function vQ(QQ) {
-       return bQ(QQ) === jQ.k && (0, jQ._)(wQ.h[QQ].name)
+     function nM(MM, rM, iM, OM) {
+       for (var SM = 0, jM = 0, aM = 0, nM = MM.length; aM < nM; ++aM) {
+         var QM = MM[aM];
+         if (!PM(rM, QM)) {
+           for (var zM = 0; zM < 2 * rM; ++zM) iM[SM++] = QM[zM];
+           OM[jM++] = aM
+         }
+       }
+       return jM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L251-L258` → after: `L225-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L225-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L225-L263) · [Before (L251-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L251-L258)

```diff
-     var dQ = XQ(9625),
-       HQ = XQ(9648);
-     const aQ = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1]
-     ];
+ 
+     function QM(MM, rM, iM, OM) {
+       var PM = MM.length,
+         QM = rM.length;
+       if (!(PM <= 0 || QM <= 0)) {
+         var zM = MM[0].length >>> 1;
+         if (!(zM <= 0)) {
+           var LM, mM = SM.mallocDouble(2 * zM * PM),
+             HM = SM.mallocInt32(PM);
+           if ((PM = nM(MM, zM, mM, HM)) > 0) {
+             if (1 === zM && OM) jM.init(PM), LM = jM.sweepComplete(zM, iM, 0, PM, mM, HM, 0, PM, mM, HM);
+             else {
+               var hM = SM.mallocDouble(2 * zM * QM),
+                 JM = SM.mallocInt32(QM);
+               (QM = nM(rM, zM, hM, JM)) > 0 && (jM.init(PM + QM), LM = 1 === zM ? jM.sweepBipartite(zM, iM, 0, PM, mM, HM, 0, QM, hM, JM) : aM(zM, iM, OM, PM, mM, HM, QM, hM, JM), SM.free(hM), SM.free(JM))
+             }
+ ... (23 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L261-L265` → after: `L266-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L266-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L266-L364) · [Before (L261-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L261-L265)

```diff
-       var WQ, XQ;
-       const qQ = null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta;
-       return (null === qQ || void 0 === qQ ? void 0 : qQ.rootName) !== HQ.l ? null : {
-         rot: null !== (XQ = qQ.rot) && void 0 !== XQ ? XQ : 1,
-         half: (0, HQ.g)(qQ.rootName, qQ.metaStr)
+       var rM = "bruteForce" + (MM ? "Full" : "Partial"),
+         OM = [],
+         aM = mM.slice();
+       MM || aM.splice(3, 0, SM);
+       var PM = ["function " + rM + "(" + aM.join() + "){"];
+ 
+       function nM(rM, SM) {
+         var aM = function(MM, rM, OM) {
+           var SM = "bruteForce" + (MM ? "Red" : "Blue") + (rM ? "Flip" : "") + (OM ? "Full" : ""),
+             aM = ["function ", SM, "(", mM.join(), "){", "var ", jM, "=2*", iM, ";"],
+             PM = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
+             nM = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (OM ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
+           return MM ? aM.push(PM, "Q", ":", nM) : aM.push(nM, "Q", ":", PM), OM ? aM.push("if(y1<x0||x1<y0)continue;") : rM ? aM.push("if(y0<=x0||x1<y0)continue;") : aM.push("if(y0<x0||x1<y0)continue;"), aM.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
+             name: SM,
+             code: aM.join("")
+           }
+ ... (83 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L270` → after: `L537-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L537-L540) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L270)

```diff
-       return lQ(QQ(WQ, XQ, wQ))
+       rM *= 2, iM *= 2;
+       var SM = OM[MM *= 2],
+         jM = OM[MM + 1];
+       OM[MM] = OM[rM], OM[MM + 1] = OM[rM + 1], OM[rM] = OM[iM], OM[rM + 1] = OM[iM + 1], OM[iM] = SM, OM[iM + 1] = jM
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L274-L307` → after: `L544-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L544-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L544-L579) · [Before (L274-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L274-L307)

```diff
-       let {
-         rot: TQ,
-         half: zQ
-       } = qQ;
-       const [sQ, FQ] = (0, HQ.k)(TQ, zQ), PQ = hQ(QQ, WQ + sQ, XQ, wQ + FQ);
-       return null !== PQ && PQ.rot === TQ && PQ.half === HQ.p[zQ]
-     }
-     var cQ = XQ(38703);
-     const AQ = [new class {
-       constructor() {
-         this.reshapeOffsets = IQ
-       }
-       handles(QQ) {
-         var WQ;
-         return "Stairs" === (null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.model)
-       }
- ... (18 more removed lines; see GitHub link above)
+       rM *= 2, SM[MM *= 2] = SM[rM], SM[rM] = iM, SM[MM + 1] = SM[rM + 1], SM[rM + 1] = OM
+     }
+ 
+     function PM(MM, rM, iM) {
+       rM *= 2;
+       var OM = iM[MM *= 2],
+         SM = iM[rM];
+       return !(OM < SM) && (OM !== SM || iM[MM + 1] > iM[rM + 1])
+     }
+ 
+     function nM(MM, rM, iM, OM) {
+       var SM = OM[MM *= 2];
+       return SM < rM || SM === rM && OM[MM + 1] < iM
+     }
+ 
+     function QM(MM, zM, LM) {
+ ... (20 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L309-L327` → after: `L581-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L581-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L581-L590) · [Before (L309-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L309-L327)

```diff
-       stairsAt(QQ, WQ, XQ, wQ) {
-         const qQ = QQ(WQ, XQ, wQ);
-         return this.handles(qQ) ? this.stairsOf(qQ) : null
-       }
-       cornerAt(QQ, WQ, XQ, wQ, qQ) {
-         let {
-           rot: TQ,
-           half: zQ
-         } = qQ;
-         const sQ = PQ[TQ],
-           FQ = qQ => {
-             let [sQ, FQ] = qQ;
-             const PQ = this.stairsAt(QQ, WQ + sQ, XQ, wQ + FQ);
-             return null !== PQ && PQ.rot === TQ && PQ.half === zQ
-           },
-           IQ = this.stairsAt(QQ, WQ + sQ[0], XQ, wQ + sQ[1]);
- ... (3 more removed lines; see GitHub link above)
+       SM(dM, MM, LM), SM(yM, zM, LM);
+       for (var AM = eM; AM <= bM; ++AM)
+         if (nM(AM, tM, gM, LM)) AM !== eM && OM(AM, eM, LM), ++eM;
+         else if (!nM(AM, uM, RM, LM))
+         for (;;) {
+           if (nM(bM, uM, RM, LM)) {
+             nM(bM, tM, gM, LM) ? (jM(AM, eM, bM, LM), ++eM, --bM) : (OM(AM, bM, LM), --bM);
+             break
+           }
+           if (--bM < AM) break
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L329-L332` → after: `L592-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L592-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L592-L769) · [Before (L329-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L329-L332)

```diff
-         const jQ = this.stairsAt(QQ, WQ - sQ[0], XQ, wQ - sQ[1]);
-         if (null !== jQ && jQ.half === zQ) {
-           const QQ = PQ[jQ.rot];
-           if (rQ(sQ, QQ) && !FQ(QQ)) return JQ(QQ, gQ(sQ)) ? "innerLeft" : "innerRight"
+       aM(MM, eM - 1, tM, gM, LM), aM(zM, bM + 1, uM, RM, LM), eM - 2 - MM <= rM ? iM(MM, eM - 2, LM) : QM(MM, eM - 2, LM), zM - (bM + 2) <= rM ? iM(bM + 2, zM, LM) : QM(bM + 2, zM, LM), bM - eM <= rM ? iM(eM, bM, LM) : QM(eM, bM, LM)
+     }
+   },
+   39288: (MM, rM, iM) => {
+     MM.exports = {
+       init: function(MM) {
+         var rM = SM.nextPow2(MM);
+         nM.length < rM && (OM.free(nM), nM = OM.mallocInt32(rM));
+         QM.length < rM && (OM.free(QM), QM = OM.mallocInt32(rM));
+         zM.length < rM && (OM.free(zM), zM = OM.mallocInt32(rM));
+         LM.length < rM && (OM.free(LM), LM = OM.mallocInt32(rM));
+         mM.length < rM && (OM.free(mM), mM = OM.mallocInt32(rM));
+         HM.length < rM && (OM.free(HM), HM = OM.mallocInt32(rM));
+         var iM = 8 * rM;
+         hM.length < iM && (OM.free(hM), hM = OM.mallocDouble(iM))
+       },
+ ... (162 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L336-L338` → after: `L772-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L772-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L772-L817) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L336-L338)

```diff
-     }, new class {
-       constructor() {
-         this.reshapeOffsets = TQ, this.rootIds = new Set(qQ.f.map((QQ => (0, wQ.k)(QQ))))
+     };
+     var OM = iM(39276),
+       SM = iM(39280),
+       jM = iM(39294),
+       aM = 1 << 28,
+       PM = 1024,
+       nM = OM.mallocInt32(PM),
+       QM = OM.mallocInt32(PM),
+       zM = OM.mallocInt32(PM),
+       LM = OM.mallocInt32(PM),
+       mM = OM.mallocInt32(PM),
+       HM = OM.mallocInt32(PM),
+       hM = OM.mallocDouble(8192);
+ 
+     function JM(MM, rM, iM, OM) {
+       var SM = rM[OM],
+ ... (30 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L340-L343` → after: `L819-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L819-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L819-L843) · [Before (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L340-L343)

```diff
-       handles(QQ) {
-         var WQ;
-         const XQ = null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta;
-         return void 0 !== XQ && this.rootIds.has(XQ.rootId)
+       return []
+     }
+   },
+   39240: (MM, rM, iM) => {
+     MM.exports = function() {
+       var MM = this;
+       this.components = {}, this.comps = this.components;
+       var rM = this.components,
+         iM = 1,
+         SM = {},
+         jM = [],
+         aM = [],
+         PM = {
+           timeout: !1,
+           removals: [],
+           multiComps: []
+ ... (9 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L345-L346` → after: `L845-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L845-L847) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L345-L346)

```diff
-       affects(QQ) {
-         return this.handles(QQ)
+ 
+       function QM() {
+         PM.timeout || (PM.timeout = !0, setTimeout(zM, 1))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L348-L349` → after: `L849-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L849-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L849-L851) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L348-L349)

```diff
-       placedBy(QQ) {
-         return wQ.h[QQ].meta.rootName === qQ.j ? null : qQ.j
+ 
+       function zM() {
+         PM.timeout = !1, LM()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L351-L386` → after: `L853-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L853-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L853-L864) · [Before (L351-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L351-L386)

```diff
-       shape(QQ, WQ, XQ, TQ, zQ) {
-         const {
-           rootId: sQ,
-           rootName: FQ,
-           rot: PQ
-         } = wQ.h[zQ].meta;
-         let gQ = 0;
-         return qQ.s[PQ].forEach(((qQ, zQ) => {
-           var FQ;
-           let [JQ, rQ, IQ] = qQ;
-           const jQ = null === (FQ = wQ.h[QQ(WQ + JQ, XQ + rQ, TQ + IQ)]) || void 0 === FQ ? void 0 : FQ.meta;
-           (null === jQ || void 0 === jQ ? void 0 : jQ.rootId) === sQ && jQ.rot === PQ && (gQ |= 1 << zQ)
-         })), (0, wQ.k)((0, qQ.d)(FQ, PQ, gQ))
-       }
-     }, ...zQ.b.map((QQ => new sQ.e(QQ))), new class {
-       constructor() {
- ... (20 more removed lines; see GitHub link above)
+ 
+       function LM() {
+         PM.multiComps.length && function(MM) {
+           for (var rM = 0; rM < MM.length; rM++) {
+             var {
+               entID: iM,
+               data: OM
+             } = MM[rM], SM = OM.hash[iM];
+             if (SM) {
+               for (var jM = 0; jM < SM.length; jM++) SM[jM] || (SM.splice(jM, 1), jM--);
+               0 === SM.length && (OM.remove(iM), PM.removals.push(OM))
+             }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L388-L438` → after: `L866-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L866-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L866-L971) · [Before (L388-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L388-L438)

```diff
-           return (0, wQ.k)((0, jQ.gb)(TQ, !1))
-         }(QQ, WQ, XQ, qQ, FQ) : (0, wQ.k)((0, jQ.P)(sQ, FQ, function(QQ, WQ, XQ, qQ, TQ) {
-           const [zQ, sQ] = jQ.g[TQ - 1], FQ = (TQ, zQ) => function(QQ, WQ, XQ) {
-             var qQ;
-             const TQ = null === (qQ = wQ.h[QQ]) || void 0 === qQ ? void 0 : qQ.meta;
-             if (!TQ) return !1;
-             const zQ = TQ.rootName,
-               sQ = pQ.has(zQ) || vQ(QQ);
-             if (!sQ && !GQ.has(zQ) && zQ !== yQ) return !1;
-             const [FQ, PQ] = jQ.g[TQ.rot - 1];
-             if (sQ && FQ === -WQ && PQ === -XQ) return !0;
-             if (GQ.has(zQ)) return FQ === WQ && PQ === XQ;
-             const gQ = wQ.h[QQ].name;
-             return (zQ === yQ ? (0, jQ.db)(gQ, FQ, PQ) : zQ === VQ ? [(0, jQ.T)(gQ, FQ, PQ)] : []).some((QQ => {
-               let [wQ, qQ] = QQ;
-               return wQ === -WQ && qQ === -XQ
- ... (35 more removed lines; see GitHub link above)
+           MM.length = 0
+         }(PM.multiComps), PM.removals.length && function(MM) {
+           for (var rM = 0; rM < MM.length; rM++) {
+             MM[rM].flush()
+           }
+           MM.length = 0
+         }(PM.removals)
+       }
+       this.yJ = SM, this._systems = jM, this._renderSystems = aM, this.iK = function(rM) {
+         var OM = iM++;
+         return Array.isArray(rM) && rM.forEach((rM => MM.eZ(OM, rM))), OM
+       }, this.deleteEntity = function(rM) {
+         return Object.keys(SM).forEach((MM => {
+           SM[MM].hash[rM] && nM(rM, MM)
+         })), MM
+       }, this.IrM = function(MM) {
+ ... (90 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L440` → after: `L973-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L973-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L973-L1012) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L440)

```diff
-         return null
+         return MM
+       }, this.removeMultiComponent = function(iM, OM, jM) {
+         var aM = rM[OM],
+           nM = SM[OM];
+         if (!nM) throw new Error(`Unknown component: ${OM}.`);
+         if (!aM.multi) throw new Error("removeMultiComponent called on non-multi component");
+         return function(MM, rM, iM, OM) {
+           var SM = iM.hash[MM];
+           if (SM) {
+             var jM = SM[OM];
+             jM && (SM[OM] = null, rM.vW && rM.vW(MM, jM), PM.multiComps.push({
+               entID: MM,
+               data: iM
+             }), QM())
+           }
+         }(iM, aM, nM, jM), MM
+ ... (24 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L442-L446` → after: `L1014-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1014-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1014-L1024) · [Before (L442-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L442-L446)

```diff
-       reshapedHalf(QQ, WQ, XQ, wQ, qQ) {
-         if (null !== qQ.half && iQ(QQ, WQ, XQ, wQ, qQ)) return qQ.half;
-         for (const TQ of ["right", "left"]) {
-           const [zQ, sQ] = (0, HQ.k)(qQ.rot, TQ), FQ = hQ(QQ, WQ + zQ, XQ, wQ + sQ);
-           if (null !== FQ && FQ.rot === qQ.rot && FQ.half === HQ.p[TQ]) return TQ
+       remove(MM) {
+         var rM = this._map[MM];
+         this.hash[MM] = null, this.list[rM] = null, this._pendingRemovals.push(MM)
+       }
+       dispose() {
+         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
+       }
+       flush() {
+         for (var MM = 0; MM < this._pendingRemovals.length; MM++) {
+           var iM = this._pendingRemovals[MM];
+           null === this.hash[iM] && rM(this, iM)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L448` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1026) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L448)

```diff
-         return null
+         this._pendingRemovals.length = 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L450` → after: `L1028-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1028-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1028-L1069) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L450)

```diff
-     }, new cQ.b];
+     }
+   },
+   39027: (MM, rM, iM) => {
+     MM = iM.nmd(MM);
+     var OM = "__lodash_hash_undefined__",
+       SM = 9007199254740991,
+       jM = "[object Arguments]",
+       aM = "[object Boolean]",
+       PM = "[object Date]",
+       nM = "[object Function]",
+       QM = "[object GeneratorFunction]",
+       zM = "[object Map]",
+       LM = "[object Number]",
+       mM = "[object Object]",
+       HM = "[object Promise]",
+       hM = "[object RegExp]",
+ ... (26 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L452-L455` → after: `L1071-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1071-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1071-L1082) · [Before (L452-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L452-L455)

```diff
-     function RQ(QQ, WQ, XQ, wQ, qQ) {
-       let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       for (const zQ of AQ)
-         if (zQ.handles(qQ)) return zQ.shape(QQ, WQ, XQ, wQ, qQ, TQ);
+     function AM(MM, rM) {
+       return MM.set(rM[0], rM[1]), MM
+     }
+ 
+     function xM(MM, rM) {
+       return MM.add(rM), MM
+     }
+ 
+     function vM(MM, rM, iM, OM) {
+       var SM = -1,
+         jM = MM ? MM.length : 0;
+       for (OM && jM && (iM = MM[++SM]); ++SM < jM;) iM = rM(iM, MM[SM], SM, MM);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L460-L462` → after: `L1087-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1087-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1087-L1156) · [Before (L460-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L460-L462)

```diff
-       for (const wQ of AQ) {
-         var WQ, XQ;
-         if (wQ.handles(QQ)) return null !== (WQ = null === (XQ = wQ.placedBy) || void 0 === XQ ? void 0 : XQ.call(wQ, QQ)) && void 0 !== WQ ? WQ : null
+       var rM = !1;
+       if (null != MM && "function" != typeof MM.toString) try {
+         rM = !!(MM + "")
+       } catch (iM) {}
+       return rM
+     }
+ 
+     function BM(MM) {
+       var rM = -1,
+         iM = Array(MM.size);
+       return MM.forEach((function(MM, OM) {
+         iM[++rM] = [OM, MM]
+       })), iM
+     }
+ 
+     function XM(MM, rM) {
+ ... (54 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L466-L481` → after: `L1159-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1159-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1159-L1197) · [Before (L466-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L466-L481)

```diff
-   },
-   38703: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => HQ,
-       c: () => GQ,
-       g: () => pQ
-     });
-     var wQ = XQ(9580),
-       qQ = XQ(9608),
-       TQ = XQ(9664),
-       zQ = XQ(38711),
-       sQ = XQ(9660);
-     const FQ = (0, zQ.E)("pipe"),
-       PQ = (0, zQ.E)("tank"),
-       gQ = (0, zQ.E)("port"),
-       JQ = "Reactor Port";
+ 
+     function ur(MM) {
+       var rM = -1,
+         iM = MM ? MM.length : 0;
+       for (this.clear(); ++rM < iM;) {
+         var OM = MM[rM];
+         this.set(OM[0], OM[1])
+       }
+     }
+ 
+     function Rr(MM) {
+       var rM = -1,
+         iM = MM ? MM.length : 0;
+       for (this.clear(); ++rM < iM;) {
+         var OM = MM[rM];
+         this.set(OM[0], OM[1])
+ ... (23 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L484-L487` → after: `L1200-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1200-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1200-L1297) · [Before (L484-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L484-L487)

```diff
-       const wQ = new Set([TQ.g, TQ.d, JQ, ...WQ, ...XQ, ...QQ ? [zQ.k] : []]);
-       return {
-         makers: new Set(WQ),
-         roots: wQ
+       var OM = MM[rM];
+       rr.call(MM, rM) && Xr(OM, iM) && (void 0 !== iM || rM in MM) || (MM[rM] = iM)
+     }
+ 
+     function Dr(MM, rM) {
+       for (var iM = MM.length; iM--;)
+         if (Xr(MM[iM][0], rM)) return iM;
+       return -1
+     }
+ 
+     function kr(MM, rM, iM, OM, SM, HM, lM) {
+       var WM;
+       if (OM && (WM = HM ? OM(MM, SM, HM, lM) : OM(MM)), void 0 !== WM) return WM;
+       if (!Vr(MM)) return MM;
+       var sM = Ir(MM);
+       if (sM) {
+ ... (82 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L513-L522` → after: `L1319-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1319-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1319-L1325) · [Before (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L513-L522)

```diff
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
-       const XQ = wQ.h[QQ],
-         qQ = null === XQ || void 0 === XQ ? void 0 : XQ.meta.rootName,
-         rQ = IQ[WQ];
-       if (!qQ || !rQ.roots.has(qQ)) return null;
-       if ((0, TQ.n)(qQ)) return (0, zQ.D)(XQ.name) === WQ ? FQ : null;
-       if (qQ === zQ.k) return PQ;
-       if (qQ === JQ) return XQ.name.endsWith("|Water") ? gQ : null;
-       const [jQ, BQ] = sQ.g[(XQ.meta.rot || 1) - 1];
-       return (0, zQ.E)(rQ.makers.has(qQ) ? "maker" : "user", [-jQ, 0, -BQ])
+       return !(!Vr(MM) || (rM = MM, cM && cM in rM)) && (Tr(MM) || FM(MM) ? Or : WM).test(Br(MM));
+       var rM
+     }
+ 
+     function or(MM) {
+       var rM = new MM.constructor(MM.byteLength);
+       return new ar(rM).set(new ar(MM)), rM
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L526-L536` → after: `L1329-L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1329-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1329-L1423) · [Before (L526-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L526-L536)

```diff
-       let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
-       const {
-         makers: sQ
-       } = IQ[TQ];
-       return yQ.some(((PQ, gQ) => {
-         var JQ, rQ;
-         let [IQ, jQ, BQ] = PQ;
-         const yQ = QQ(WQ + IQ, XQ + jQ, qQ + BQ),
-           pQ = DQ(yQ, TQ);
-         return null !== pQ && sQ.has(null !== (JQ = null === (rQ = wQ.h[yQ]) || void 0 === rQ ? void 0 : rQ.meta.rootName) && void 0 !== JQ ? JQ : "") && !(0, zQ.G)(FQ, pQ, VQ[gQ])
-       }))
+       iM || (iM = {});
+       for (var SM = -1, jM = rM.length; ++SM < jM;) {
+         var aM = rM[SM],
+           PM = OM ? OM(iM[aM], MM[aM], aM, iM, MM) : void 0;
+         sr(iM, aM, void 0 === PM ? MM[aM] : PM)
+       }
+       return iM
+     }
+ 
+     function Yr(MM, rM) {
+       var iM = MM.__data__;
+       return function(MM) {
+         var rM = typeof MM;
+         return "string" == rM || "number" == rM || "symbol" == rM || "boolean" == rM ? "__proto__" !== MM : null === MM
+       }(rM) ? iM["string" == typeof rM ? "string" : "hash"] : iM.map
+     }
+ ... (79 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L540-L541` → after: `L1427-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1427-L1428) · [Before (L540-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L540-L541)

```diff
-       const WQ = wQ.h[QQ];
-       return WQ ? (0, zQ.D)(WQ.name) : null
+       var rM = MM && MM.constructor;
+       return MM === ("function" == typeof rM && rM.prototype || TM)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L546-L560` → after: `L1432-L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1432-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1432-L1441) · [Before (L546-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L546-L560)

```diff
-       if (!UQ) {
-         UQ = new Map;
-         for (const QQ of ["water", "cryo"])
-           for (let WQ = 0; WQ < 64; WQ++)
-             for (const XQ of [!1, !0]) UQ.set((0, TQ.p)(QQ, WQ, XQ), {
-               XI: QQ,
-               mask: WQ,
-               full: XQ
-             })
-       }
-       return UQ.get(QQ)
-     }
-     const vQ = new Map(Array.from({
-       length: TQ.k + 1
-     }, ((QQ, WQ) => [(0, TQ.q)(WQ), WQ])));
+       if (null != MM) {
+         try {
+           return Mr.call(MM)
+         } catch (rM) {}
+         try {
+           return MM + ""
+         } catch (rM) {}
+       }
+       return ""
+     }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L562-L573` → after: `L1443-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1443-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1443-L1468) · [Before (L562-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L562-L573)

```diff
-     function dQ(QQ, WQ, XQ, qQ, TQ, zQ) {
-       return yQ.some(((sQ, FQ) => {
-         var PQ, gQ, JQ;
-         let [rQ, IQ, jQ] = sQ;
-         if (0 === (zQ >> FQ & 1)) return !1;
-         const BQ = null !== (PQ = null === (gQ = wQ.h[QQ(WQ + rQ, XQ + IQ, qQ + jQ)]) || void 0 === gQ ? void 0 : gQ.name) && void 0 !== PQ ? PQ : "",
-           yQ = bQ(BQ);
-         return yQ ? yQ.XI === TQ && yQ.full : (null !== (JQ = function(QQ) {
-           var WQ;
-           return null !== (WQ = vQ.get(QQ)) && void 0 !== WQ ? WQ : null
-         }(BQ)) && void 0 !== JQ ? JQ : 0) > 0
-       }))
+     function Xr(MM, rM) {
+       return MM === rM || MM !== MM && rM !== rM
+     }(hr && xr(new hr(new ArrayBuffer(1))) != UM || Jr && xr(new Jr) != zM || dr && xr(dr.resolve()) != HM || yr && xr(new yr) != JM || lr && xr(new lr) != lM) && (xr = function(MM) {
+       var rM = ir.call(MM),
+         iM = rM == mM ? MM.constructor : void 0,
+         OM = iM ? Br(iM) : void 0;
+       if (OM) switch (OM) {
+         case Ur:
+           return UM;
+         case Gr:
+           return zM;
+         case Cr:
+           return HM;
+         case er:
+           return JM;
+         case br:
+ ... (10 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L576-L613` → after: `L1621-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1621-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1621-L1656) · [Before (L576-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L576-L613)

```diff
-       constructor() {
-         this.reshapeOffsets = yQ
-       }
-       handles(QQ) {
-         return null !== GQ(QQ)
-       }
-       affects(QQ) {
-         var WQ, XQ;
-         return jQ.has(null !== (WQ = null === (XQ = wQ.h[QQ]) || void 0 === XQ ? void 0 : XQ.meta.rootName) && void 0 !== WQ ? WQ : "")
-       }
-       placedBy(QQ) {
-         var WQ;
-         return (null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta.rootName) === TQ.d ? TQ.g : null
-       }
-       shape(QQ, WQ, XQ, qQ, sQ, PQ) {
-         var gQ, JQ, rQ;
- ... (22 more removed lines; see GitHub link above)
+       static GetPlanes(MM) {
+         const rM = [];
+         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
+         return SM.GetPlanesToRef(MM, rM), rM
+       }
+       static GetNearPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
+       }
+       static GetFarPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
+       }
+       static GetLeftPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[0], rM.normal.y = iM[7] + iM[4], rM.normal.z = iM[11] + iM[8], rM.d = iM[15] + iM[12], rM.normalize()
+ ... (20 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L617` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1660) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L617)

```diff
-   38473: (QQ, WQ, XQ) => {
+   38744: (MM, rM, iM) => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L619-L620` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1662) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L619-L620)

```diff
-       d: () => wQ,
-       h: () => TQ
+       d: () => SM
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L622-L644` → after: `L1664-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1664-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/251.js#L1664-L1774) · [Before (L622-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/251.js#L622-L644)

```diff
-     const wQ = ["Chest", "Loot Chest", "Moonstone Chest"],
-       qQ = [{
-         name: "Workbench",
-         exactMatch: !0
-       }, {
-         name: "Furnace",
-         exactMatch: !0
-       }, {
-         name: "Artisan Bench",
-         exactMatch: !0
-       }, {
-         name: "Potion Table",
-         exactMatch: !0
-       }, {
-         name: "Salvaging Table",
-         exactMatch: !0
- ... (7 more removed lines; see GitHub link above)
+     var OM = iM(38040);
+     class SM {
+       constructor(MM, rM, iM, SM) {
+         this.normal = new OM.q(MM, rM, iM), this.d = SM
+       }
+       HOM() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let MM = this.normal.getHashCode();
+ ... (95 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/252.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/252.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L2)

```diff
- export const ids = [252];
+ export const ids = [252, 258, 262];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4-L1543` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L4) · [Before (L4-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4-L1543)

```diff
-   39373: (QQ, WQ, XQ) => {
-     function wQ(QQ) {
-       return !(!QQ.lobbyLeaderboardInfo && !QQ.lobbyManage)
-     }
-     XQ.d(WQ, {
-       b: () => wQ
-     })
-   },
-   39301: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => TQ
-     });
-     var wQ = XQ(31),
-       qQ = XQ(2036);
- 
-     function TQ(QQ) {
- ... (1524 more removed lines; see GitHub link above)
+   41354: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1548-L2756` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L9-L12) · [Before (L1548-L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L1548-L2756)

```diff
-     var wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ, oQ, eQ, nQ, xQ, YQ, NQ, ZQ, OQ, KQ, mQ, MQ, QW, WW, XW, wW, qW, TW, zW, sW, FW, PW, gW, JW, rW, IW, jW, BW, yW, VW, DW,  … [truncated]
-       MW = XQ(37434),
-       QX = XQ(39259),
-       WX = XQ(39264),
-       XX = XQ(9499),
-       wX = XQ(658),
-       qX = XQ(651),
-       TX = XQ(37091);
-     let zX = (wQ = (0, XX.type)("number"), qQ = (0, XX.type)("number"), TQ = (0, XX.type)("number"), zQ = (0, XX.type)("number"), sQ = (0, XX.type)("number"), FQ = (0, XX.type)("number"), PQ = (0, XX.type)("string"), gQ = class extends XX.Schema {
-         constructor() {
-           super(...arguments), (0, QX.b)(this, "id", JQ, this), (0, QX.b)(this, "amount", rQ, this), (0, QX.b)(this, "x", IQ, this), (0, QX.b)(this, "y", jQ, this), (0, QX.b)(this, "z", BQ, this), (0, QX.b)(this, "size", yQ, this), (0, QX.b)(this, "attributes", VQ, this)
-         }
-       }, JQ = (0, WX.e)(gQ.prototype, "id", [wQ], {
-         configurable: !0,
-         enumerable: !0,
-         writable: !0,
- ... (1193 more removed lines; see GitHub link above)
+     var OM = iM(39711),
+       SM = iM(41121),
+       jM = iM(41323),
+       aM = {};
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2759-L2905` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L15) · [Before (L2759-L2905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L2759-L2905)

```diff
-         this.storeForMs = QQ, this.clicks = new UQ.e
-       }
-       click() {
-         this.clicks.enqueue(Date.now());
-         const QQ = Date.now() - this.storeForMs;
-         for (; this.clicks.size > 0 && this.clicks.peek() < QQ;) this.clicks.dequeue()
-       }
-       getNumClicksInMs(QQ) {
-         let WQ = 0;
-         return this.clicks.forEach((XQ => {
-           XQ > Date.now() - QQ && WQ++
-         })), WQ
-       }
-       getMaxClickSeparationInMs(QQ) {
-         if (0 === this.clicks.size) return this.storeForMs;
-         let WQ = 0,
- ... (131 more removed lines; see GitHub link above)
+         this.attachedToElement = !1, this.attached = {}, this.camera = MM, this.checkInputs = () => {}
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2907-L2921` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L17-L19) · [Before (L2907-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L2907-L2921)

```diff
-       qW(QQ.inputs.down), qW(QQ.inputs.up);
-       for (const wQ of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
-         const WQ = (WQ, XQ) => {
-           var qQ, TQ;
-           if (wW()) {
-             var zQ;
-             const qQ = XW[wQ];
-             var sQ, FQ;
-             if (qQ) null === (sQ = (0, lQ.d)().client) || void 0 === sQ || null === (FQ = sQ.freeCameraController) || void 0 === FQ || FQ.handlefreeCamKeyPress(qQ, WQ, XQ);
-             return void(XQ || null !== (zQ = (0, lQ.d)().client) && void 0 !== zQ && zQ.isReplayMode() || (QQ.rD.PXQ()[wQ] = !1))
-           }
-           if (null !== (qQ = (0, lQ.d)().client) && void 0 !== qQ && null !== (TQ = qQ.freeCameraController) && void 0 !== TQ && TQ.isKeyPressOverriden(WQ)) return;
-           QQ.rD.PXQ()[wQ] = XQ
-         };
-         QQ.inputs.down.on(wQ, (QQ => WQ(QQ, !0))), QQ.inputs.up.on(wQ, (QQ => WQ(QQ, !1)))
+       add(MM) {
+         const rM = MM.getSimpleName();
+         this.attached[rM] ? OM.e.Warn("camera input of type " + rM + " already exists on camera") : (this.attached[rM] = MM, MM.camera = this.camera, MM.checkInputs && (this.checkInputs = this._addCheckInputs(MM.checkInputs.bind(MM))), this.attachedToElement && MM.attachControl(t … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2923-L3086` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L21-L24) · [Before (L2923-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L2923-L3086)

```diff
-       QQ.inputs.down.on("crouch", (() => {
-         if (wW()) return;
-         if (!QQ.zD.canCrouch) return;
-         const WQ = QQ.rD.PXQ();
-         aQ.b.get("clientEscMenuOptions").crouchIsToggle && (WQ.crouchToggled = !WQ.crouchToggled && !WQ.padSneakToggled), WQ.padSneakToggled = !1
-       }));
-       const XQ = () => {
-         const QQ = WQ();
-         QQ.isGun() && QQ.inaccuracyCalculator.jump()
-       };
-       QQ.inputs.down.on("jump", (QQ => {
-         wW() || (XQ(), jW(QQ))
-       }));
-       for (const wQ of pQ.j) QQ.inputs.down.on(wQ, (QQ => {
-         var WQ, XQ;
-         null !== (WQ = (0, lQ.d)().client) && void 0 !== WQ && null !== (XQ = WQ.freeCameraController) && void 0 !== XQ && XQ.handlefreeCamKeyPress(wQ, QQ, !0) && (QQ.preventDefault(), QQ.stopPropagation())
- ... (148 more removed lines; see GitHub link above)
+       remove(MM) {
+         for (const rM in this.attached) {
+           const iM = this.attached[rM];
+           if (iM === MM) return iM.detachControl(), iM.camera = null, delete this.attached[rM], void this.rebuildInputCheck()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3098-L3534` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L27-L30) · [Before (L3098-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3098-L3534)

```diff
-       rW = {
-         primaryFireDown: VW((QQ => {
-           const WQ = AQ.press();
-           return AQ.owns(WQ) && (rQ = Date.now(), UQ(!1, !1), QQ && cQ.start()), WQ
-         })),
-         primaryFireUp: VW((QQ => {
-           AQ.release(QQ)
-         })),
-         altFireDown: VW((() => {
-           const QQ = uQ.press();
-           return uQ.owns(QQ) && CQ(), QQ
-         })),
-         altFireUp: VW((QQ => {
-           uQ.release(QQ)
-         })),
-         jumpDown: VW(XQ),
- ... (421 more removed lines; see GitHub link above)
+       removeByType(MM) {
+         for (const rM in this.attached) {
+           const iM = this.attached[rM];
+           iM.getClassName() === MM && (iM.detachControl(), iM.camera = null, delete this.attached[rM], this.rebuildInputCheck())
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3536-L3580` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L32-L36) · [Before (L3536-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3536-L3580)

```diff
-         return QQ[-aW[8]]
-       }, BW = (...QQ) => {
-         QQ[aW[13]] = aW[1],
-           function(...QQ) {
-             return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
-               for (cW(QQ[aW[13]] = aW[2], QQ[aW[2]] = '1}O0@96H":<am=bCe(c5RSDEY+#vogTJ*BNrxwyi)_u!fKI?~Un7dj3QA`kpMt{PZ8zX.G2W4,/VF[sL%|ql]>^;&h$', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[14]].length, QQ[aW[94]] = [], QQ[aW[39]] = aW[1], QQ[-aW[93]] = aW[1], QQ[a … [truncated]
-                 if (QQ[-aW[92]] = QQ[aW[2]].indexOf(QQ[aW[14]][QQ[aW[3]]]), QQ[-aW[92]] !== -aW[2])
-                   if (QQ[aW[34]] < aW[1]) QQ[aW[34]] = QQ[-aW[92]];
-                   else {
-                     cW(QQ[aW[34]] += QQ[-aW[92]] * aW[30], QQ[aW[39]] |= QQ[aW[34]] << QQ[-aW[93]], QQ[-aW[93]] += (QQ[aW[34]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
-                     do {
-                       cW(QQ[aW[94]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[-aW[93]] -= aW[11])
-                     } while (QQ[-aW[93]] > aW[25]);
-                     QQ[aW[34]] = -aW[2]
-                   } return QQ[aW[34]] > -aW[2] && QQ[aW[94]].push((QQ[aW[39]] | QQ[aW[34]] << QQ[-aW[93]]) & aW[12]), lW(QQ[aW[94]])
-             }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
- ... (29 more removed lines; see GitHub link above)
+       }
+       _addCheckInputs(MM) {
+         const rM = this.checkInputs;
+         return () => {
+           rM(), MM()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3582-L3653` → after: `L38-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L38-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L38-L82) · [Before (L3582-L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3582-L3653)

```diff
-         if (WQ(aW[76]) + "k" in iW && function(...QQ) {
-             cW(QQ[aW[13]] = aW[1], QQ[aW[28]] = function(...WQ) {
-               return WQ[aW[13]] = aW[14], QQ[aW[4]]({}, WQ[aW[1]], WQ[aW[2]])
-             }, QQ[aW[4]] = function(...WQ) {
-               if (cW(WQ[aW[13]] = aW[20], WQ[aW[99]] = {}), WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] !== aW[18]) return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]];
-               if (WQ[aW[2]] === WQ[aW[14]]) return aW[95];
-               for (WQ[aW[16]] = aW[1]; WQ[aW[16]] < WQ[aW[2]].length; WQ[aW[16]]++) WQ[aW[99]][WQ[aW[2]][WQ[aW[16]]]] === aW[18] && (WQ[aW[99]][WQ[aW[2]][WQ[aW[16]]]] = aW[1]), WQ[aW[99]][WQ[aW[14]][WQ[aW[16]]]] === aW[18] && (WQ[aW[99]][WQ[aW[14]][WQ[aW[16]]]] = aW[1]), cW(WQ[aW … [truncated]
-               for (WQ[aW[39]] in WQ[aW[99]])
-                 if (WQ[aW[99]][WQ[aW[39]]] !== aW[1]) return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] = aW[90], aW[90];
-               for (WQ[aW[10]] = aW[2]; WQ[aW[10]] < WQ[aW[2]].length; WQ[aW[10]]++)
-                 if (QQ[aW[4]](WQ[aW[1]], WQ[aW[2]].substr(aW[1], WQ[aW[10]]), WQ[aW[14]].substr(aW[1], WQ[aW[10]])) && QQ[aW[4]](WQ[aW[1]], WQ[aW[2]].substr(WQ[aW[10]]), WQ[aW[14]].substr(WQ[aW[10]])) || QQ[aW[4]](WQ[aW[1]], WQ[aW[2]].substr(aW[1], WQ[aW[10]]), WQ[aW[14]].substr( … [truncated]
-               return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] = aW[90], aW[90]
-             }, console.log(QQ[aW[28]]))
-           }(), (arguments[WQ(129)] > aW[2] && arguments[aW[2]] !== aW[18] ? arguments[aW[2]] : aW[90]) && (aW[1], xQ[aW[44]])(QQ)) return;
-         const XQ = window[WQ(130)];
-         if (typeof XQ !== WQ(aW[104]) + "on" || QQ instanceof XQ || (aW[1], LQ.G)(QQ)) {
- ... (56 more removed lines; see GitHub link above)
+       }
+       attachInput(MM) {
+         this.attachedToElement && MM.attachControl(this.noPreventDefault)
+       }
+       attachElement() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           MM = !jM.b.ForceAttachControlToAlwaysPreventDefault && MM, this.attachedToElement = !0, this.noPreventDefault = MM;
+           for (const rM in this.attached) this.attached[rM].attachControl(MM)
+         }
+       }
+       detachElement() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const rM in this.attached) this.attached[rM].detachControl(), MM && (this.attached[rM].camera = null);
+         this.attachedToElement = !1
+       }
+ ... (29 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3656-L3732` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L85-L90) · [Before (L3656-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3656-L3732)

```diff
-           if (qQ(aW[60]) in iW && TQ(), QQ[qQ(139) + qQ(140)] === aW[90])(aW[1], JQ[aW[10]])("2 " + (aW[1], rQ[aW[10]])(QQ));
-           else {
-             function zQ(...QQ) {
-               function WQ(...QQ) {
-                 return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
-                   for (cW(QQ[aW[13]] = aW[2], QQ[aW[5]] = 'x3!:PeSZ0J=y4ir#6C&wkc~%R1G,{F/vMnOBDuN}j>5p`(H*t$I<Lb7Yq@89|mA"QgTzodEsf;_.U2aW^)h?[V]K+lX', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[14]].length, QQ[aW[10]] = [], QQ[aW[39]] = aW[1], QQ[aW[23]] = aW[1], Q … [truncated]
-                     if (QQ[aW[6]] = QQ[aW[5]].indexOf(QQ[aW[14]][QQ[aW[3]]]), QQ[aW[6]] !== -aW[2])
-                       if (QQ[aW[109]] < aW[1]) QQ[aW[109]] = QQ[aW[6]];
-                       else {
-                         cW(QQ[aW[109]] += QQ[aW[6]] * aW[30], QQ[aW[39]] |= QQ[aW[109]] << QQ[aW[23]], QQ[aW[23]] += (QQ[aW[109]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
-                         do {
-                           cW(QQ[aW[10]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[23]] -= aW[11])
-                         } while (QQ[aW[23]] > aW[25]);
-                         QQ[aW[109]] = -aW[2]
-                       } return QQ[aW[109]] > -aW[2] && QQ[aW[10]].push((QQ[aW[39]] | QQ[aW[109]] << QQ[aW[23]]) & aW[12]), lW(QQ[aW[10]])
-                 }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
- ... (61 more removed lines; see GitHub link above)
+         } else
+           for (const iM in this.attached) {
+             const rM = aM[this.attached[iM].getClassName()];
+             if (rM) {
+               const OM = SM.b.Parse((() => new rM), MM, null);
+               this.remove(this.attached[iM]), this.add(OM)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3735-L3833` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L93) · [Before (L3735-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3735-L3833)

```diff
-         } else {
-           function gQ(...QQ) {
-             for (cW(QQ[aW[13]] = aW[2], QQ[aW[100]] = 'BTW~8&s(h7_yJpfNKM:9Cjo+HnS|Zrat3iX%5F).L]}cbOA@!RxU`{DYeQI<EG#l"6w4?[P>1qgkVdm,^v02*=u$z/;', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[14]].length, QQ[aW[16]] = [], QQ[aW[39]] = aW[1], QQ[aW[44]] = aW[1], QQ[aW … [truncated]
-               if (QQ[aW[6]] = QQ[aW[100]].indexOf(QQ[aW[14]][QQ[aW[11]]]), QQ[aW[6]] !== -aW[2])
-                 if (QQ[aW[35]] < aW[1]) QQ[aW[35]] = QQ[aW[6]];
-                 else {
-                   cW(QQ[aW[35]] += QQ[aW[6]] * aW[30], QQ[aW[39]] |= QQ[aW[35]] << QQ[aW[44]], QQ[aW[44]] += (QQ[aW[35]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
-                   do {
-                     cW(QQ[aW[16]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[44]] -= aW[11])
-                   } while (QQ[aW[44]] > aW[25]);
-                   QQ[aW[35]] = -aW[2]
-                 } return QQ[aW[35]] > -aW[2] && QQ[aW[16]].push((QQ[aW[39]] | QQ[aW[35]] << QQ[aW[44]]) & aW[12]), lW(QQ[aW[16]])
-           }
- 
-           function IQ(...QQ) {
-             return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = gQ(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
- ... (83 more removed lines; see GitHub link above)
+       }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3844` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L96) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3844)

```diff
-   39358: (QQ, WQ, XQ) => {
+   41358: (MM, rM, iM) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3846` → after: `L98-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L98-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L98-L105) · [Before (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3846)

```diff
-       b: () => TQ,
+       e: () => OM.d
+     });
+     var OM = iM(41362);
+     (0, OM.e)()
+   },
+   41362: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => zM,
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3849-L3850` → after: `L108-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L108-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L108-L191) · [Before (L3849-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3849-L3850)

```diff
-     var wQ = XQ(38713);
-     let qQ = !1;
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(38173),
+       PM = iM(41366),
+       nM = iM(41328),
+       QM = iM(38085);
+     let zM = (() => {
+         var MM;
+         let rM, iM, nM = PM.d,
+           QM = [],
+           zM = [],
+           LM = [],
+           mM = [];
+         return MM = class extends nM {
+           constructor(MM, rM, iM, SM) {
+ ... (68 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3853-L3857` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L194) · [Before (L3853-L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3853-L3857)

```diff
-       return qQ
-     }
- 
-     function zQ(QQ) {
-       qQ = QQ, QQ ? wQ.h.setMultiplierType("emoteWheel", 0) : wQ.h.removeMultiplier("emoteWheel")
+       LM || (LM = !0, nM.d.AddNodeConstructor("Light_Type_3", ((MM, rM) => () => new zM(MM, jM.q.Zero(), rM))), (0, QM.e)("BABYLON.HemisphericLight", zM))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3860-L3863` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L197) · [Before (L3860-L3863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3860-L3863)

```diff
-   39370: (QQ, WQ, XQ) => {
-     function wQ(QQ) {
-       return Boolean(QQ.zD.useInventory && QQ.zD.useFullInventory && QQ.rD.LWQ(QQ.RC))
-     }
+   38167: (MM, rM, iM) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3865-L3866` → after: `L199-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L199-L203) · [Before (L3865-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3865-L3866)

```diff
-       b: () => wQ
-     })
+       Color3: () => OM.d,
+       d: () => OM.h
+     });
+     var OM = iM(38173);
+     (0, OM.i)()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3868` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L205) · [Before (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3868)

```diff
-   39267: (QQ, WQ, XQ) => {
+   38740: (MM, rM, iM) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3870-L3871` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L207) · [Before (L3870-L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3870-L3871)

```diff
-       d: () => TQ,
-       h: () => qQ
+       d: () => SM
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3873-L3878` → after: `L209-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L209-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L209-L246) · [Before (L3873-L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3873-L3878)

```diff
-     var wQ = XQ(37428);
- 
-     function qQ(QQ, WQ) {
-       return {
-         replayedClipName: QQ,
-         replayedClipAgeSeconds: WQ
+     var OM = iM(38744);
+     class SM {
+       static GetPlanes(MM) {
+         const rM = [];
+         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
+         return SM.GetPlanesToRef(MM, rM), rM
+       }
+       static GetNearPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
+       }
+       static GetFarPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
+       }
+       static GetLeftPlaneToRef(MM, rM) {
+ ... (22 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3902` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L250) · [Before (L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3902)

```diff
-   39363: (QQ, WQ, XQ) => {
+   38744: (MM, rM, iM) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3904` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L252) · [Before (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3904)

```diff
-       b: () => gQ
+       d: () => SM
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3906-L3917` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L254) · [Before (L3906-L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3906-L3917)

```diff
-     var wQ = XQ(38660),
-       qQ = XQ(402),
-       TQ = XQ(2997);
- 
-     function zQ() {
-       var QQ, WQ, XQ, wQ;
-       const zQ = (0, TQ.f)(),
-         sQ = null !== (QQ = null === (WQ = zQ.rD.EWQ(zQ.RC)) || void 0 === WQ ? void 0 : WQ.selectedItem) && void 0 !== QQ ? QQ : null,
-         FQ = sQ ? (0, TQ.d)().getItemStat(zQ.RC, sQ.name, "attackCooldownMs") : null,
-         PQ = (0, qQ.cd)(FQ, null === sQ || void 0 === sQ || null === (XQ = sQ.attributes.customAttributes) || void 0 === XQ || null === (wQ = XQ.enchantments) || void 0 === wQ ? void 0 : wQ["Attack Speed"]);
-       return Math.max(56, Math.ceil((PQ + 30) / 3))
-     }
+     var OM = iM(38040);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3919-L3920` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L256-L257) · [Before (L3919-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3919-L3920)

```diff
-       constructor(QQ, WQ) {
-         this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [QQ], this.dueMs = QQ, this.intervalMs = WQ
+       constructor(MM, rM, iM, SM) {
+         this.normal = new OM.q(MM, rM, iM), this.d = SM
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3922-L3926` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L259-L260) · [Before (L3922-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3922-L3926)

```diff
-       spacedBy(QQ, WQ) {
-         if (QQ === this.intervalMs) return this;
-         const XQ = this.tries[this.tries.length - 1],
-           wQ = new sQ(XQ, QQ);
-         return wQ.dueMs = Math.max(XQ, WQ - QQ), wQ
+       HOM() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3928-L3930` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L262-L263) · [Before (L3928-L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3928-L3930)

```diff
-       nextDueMs() {
-         const QQ = this.tries[this.tries.length - 1];
-         return Math.max(QQ + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
+       clone() {
+         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3932-L3933` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L265-L266) · [Before (L3932-L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3932-L3933)

```diff
-       noteTry(QQ, WQ) {
-         this.tries.push(QQ), this.tries.length > 3 && this.tries.shift(), this.dueMs = WQ
+       getClassName() {
+         return "Plane"
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3935-L3954` → after: `L268-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L268-L270) · [Before (L3935-L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3935-L3954)

```diff
-     }
-     var FQ = XQ(39358),
-       PQ = XQ(1335);
-     class gQ {
-       constructor() {
-         this.timer = null, this.tries = new sQ(0, 0), this.check = () => {
-           const QQ = Date.now(),
-             WQ = this.tries.spacedBy(zQ(), QQ),
-             XQ = WQ.nextDueMs();
-           if (QQ < XQ) this.schedule();
-           else {
-             if (WQ.noteTry(QQ, XQ), this.tries = WQ, (0, PQ.A)() && !(0, FQ.b)()) {
-               var qQ, sQ;
-               (0, wQ.c)();
-               const QQ = (0, TQ.f)();
-               null === (qQ = QQ.rD.XXQ(QQ.RC)) || void 0 === qQ || null === (sQ = qQ.Qp) || void 0 === sQ || sQ.repeatAttack()
- ... (4 more removed lines; see GitHub link above)
+       getHashCode() {
+         let MM = this.normal.getHashCode();
+         return MM = 397 * MM ^ this.d, MM
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3956-L3958` → after: `L272-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L272-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L272-L306) · [Before (L3956-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3956-L3958)

```diff
-       start() {
-         var QQ;
-         null === (QQ = gQ.running) || void 0 === QQ || QQ.stop(), gQ.running = this, this.tries = new sQ(Date.now(), zQ()), this.schedule()
+       normalize() {
+         const MM = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let rM = 0;
+         return 0 !== MM && (rM = 1 / MM), this.normal.x *= rM, this.normal.y *= rM, this.normal.z *= rM, this.d *= rM, this
+       }
+       transform(MM) {
+         const rM = SM._TmpMatrix;
+         MM.invertToRef(rM);
+         const iM = rM.m,
+           OM = this.normal.x,
+           jM = this.normal.y,
+           aM = this.normal.z,
+           PM = this.d,
+           nM = OM * iM[0] + jM * iM[1] + aM * iM[2] + PM * iM[3],
+           QM = OM * iM[4] + jM * iM[5] + aM * iM[6] + PM * iM[7],
+           zM = OM * iM[8] + jM * iM[9] + aM * iM[10] + PM * iM[11],
+ ... (19 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3960-L3962` → after: `L308-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L308-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L308-L312) · [Before (L3960-L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3960-L3962)

```diff
-       static stopRunning() {
-         var QQ;
-         null === (QQ = gQ.running) || void 0 === QQ || QQ.stop()
+       isFrontFacingTo(MM, rM) {
+         return OM.q.Dot(this.normal, MM) <= rM
+       }
+       signedDistanceTo(MM) {
+         return OM.q.Dot(MM, this.normal) + this.d
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3964-L3965` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L314-L315) · [Before (L3964-L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3964-L3965)

```diff
-       stop() {
-         clearTimeout(this.timer), this.timer = null, gQ.running === this && (gQ.running = null)
+       static FromArray(MM) {
+         return new SM(MM[0], MM[1], MM[2], MM[3])
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3967-L3970` → after: `L317-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L317-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L317-L330) · [Before (L3967-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3967-L3970)

```diff
-       schedule() {
-         const QQ = Date.now(),
-           WQ = this.tries.spacedBy(zQ(), QQ).nextDueMs() - QQ;
-         this.timer = setTimeout(this.check, Math.min(WQ, 100))
+       static FromPoints(MM, rM, iM) {
+         const OM = new SM(0, 0, 0, 0);
+         return OM.copyFromPoints(MM, rM, iM), OM
+       }
+       static FromPositionAndNormal(MM, rM) {
+         const iM = new SM(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(MM, rM, iM)
+       }
+       static FromPositionAndNormalToRef(MM, rM, iM) {
+         return iM.normal.jR(rM), iM.normal.normalize(), iM.d = -MM.dot(iM.normal), iM
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(MM, rM, iM) {
+         const SM = -(rM.x * MM.x + rM.y * MM.y + rM.z * MM.z);
+         return OM.q.Dot(iM, rM) + SM
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3973` → after: `L333-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L333-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L333-L346) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3973)

```diff
-     gQ.running = null
+     SM._TmpMatrix = OM.d.Identity()
+   },
+   38034: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       Matrix: () => OM.d,
+       Quaternion: () => OM.h,
+       RegisterMathVector: () => OM.i,
+       TmpVectors: () => OM.l,
+       Vector2: () => OM.o,
+       sh: () => OM.q,
+       Vector4: () => OM.u
+     });
+     var OM = iM(38040);
+     (0, OM.i)()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3975` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L348) · [Before (L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3975)

```diff
-   39274: (QQ, WQ, XQ) => {
+   39078: (MM, rM, iM) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3977-L3982` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L350) · [Before (L3977-L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3977-L3982)

```diff
-       e: () => jQ,
-       f: () => gQ,
-       i: () => IQ,
-       j: () => rQ,
-       l: () => BQ,
-       n: () => JQ
+       e: () => OM
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L3984-L4003` → after: `L352-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L352-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L352-L363) · [Before (L3984-L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L3984-L4003)

```diff
-     var wQ = XQ(39279),
-       qQ = XQ(37509),
-       TQ = XQ(3907),
-       zQ = XQ(2010),
-       sQ = XQ(31),
-       FQ = XQ(2997);
-     const PQ = new wQ.c;
- 
-     function gQ() {
-       return PQ
-     }
- 
-     function JQ() {
-       PQ.clear()
-     }
- 
- ... (4 more removed lines; see GitHub link above)
+     class OM {
+       constructor(MM, rM, iM, OM) {
+         this.x = MM, this.y = rM, this.width = iM, this.height = OM
+       }
+       toGlobal(MM, rM) {
+         return new OM(this.x * MM, this.y * rM, this.width * MM, this.height * rM)
+       }
+       toGlobalToRef(MM, rM, iM) {
+         return iM.x = this.x * MM, iM.y = this.y * rM, iM.width = this.width * MM, iM.height = this.height * rM, this
+       }
+       clone() {
+         return new OM(this.x, this.y, this.width, this.height)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4038` → after: `L378-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L378-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L378-L390) · [Before (L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4038)

```diff
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PQ.getSettings(QQ);
+       let rM = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const iM = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         jM = [],
+         nM = MM.width || MM.size || 1,
+         QM = MM.height || MM.size || 1,
+         zM = MM.depth || MM.size || 1,
+         LM = MM.wrap || !1;
+       let mM = void 0 === MM.topBaseAt ? 1 : MM.topBaseAt,
+         HM = void 0 === MM.bottomBaseAt ? 0 : MM.bottomBaseAt;
+       mM = (mM + 4) % 4, HM = (HM + 4) % 4;
+       let hM = [2, 0, 3, 1][mM],
+         JM = [2, 0, 1, 3][HM],
+         dM = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4040-L4041` → after: `L392-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L392-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L392-L425) · [Before (L4040-L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4040-L4041)

```diff
-         (0, qQ.i)(QQ);
-         for (const XQ in WQ)(0, qQ.e)(QQ, XQ, WQ[XQ])
+         rM = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], dM = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+         let MM = [
+             [1, 1, 1],
+             [-1, 1, 1],
+             [-1, 1, -1],
+             [1, 1, -1]
+           ],
+           iM = [
+             [-1, -1, 1],
+             [1, -1, 1],
+             [1, -1, -1],
+             [-1, -1, -1]
+           ];
+         const OM = [17, 18, 19, 16],
+           SM = [22, 23, 20, 21];
+         for (; hM > 0;) MM.unshift(MM.pop()), OM.unshift(OM.pop()), hM--;
+ ... (18 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4046-L4047` → after: `L431-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L431-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L431-L444) · [Before (L4046-L4047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4046-L4047)

```diff
-       return QQ === (0, FQ.f)().mQQ || (0, FQ.d)().client.hasEntity(QQ)
-     }(0, TQ.onGameReset)(JQ)
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const OM = new jM.d(MM, iM);
+       rM.sideOrientation = jM.d._GetDefaultSideOrientation(rM.sideOrientation), OM._originalBuilderSideOrientation = rM.sideOrientation;
+       return nM(rM).applyToMesh(OM, rM.updatable), OM
+     }
+     let zM = !1;
+     zM || (zM = !0, aM.d.CreateBox = nM, jM.d.CreateBox = function(MM, rM) {
+       return QM(MM, {
+         size: rM,
+         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
+         updatable: arguments.length > 3 ? arguments[3] : void 0
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     })
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4049` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L446) · [Before (L4049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4049)

```diff
-   38371: (QQ, WQ, XQ) => {
+   41543: (MM, rM, iM) => {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4051-L4055` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L448) · [Before (L4051-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4051-L4055)

```diff
-       d: () => aQ,
-       f: () => bQ,
-       g: () => dQ,
-       k: () => HQ,
-       m: () => lQ
+       b: () => LM
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4057-L4078` → after: `L450-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L450-L455) · [Before (L4057-L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4057-L4078)

```diff
-     var wQ = XQ(37367),
-       qQ = XQ(38377),
-       TQ = XQ(416),
-       zQ = XQ.n(TQ),
-       sQ = XQ(3673);
-     const FQ = new wQ.vj,
-       PQ = new wQ.vj,
-       gQ = new wQ.vj,
-       JQ = new wQ.vj,
-       rQ = new wQ.vj,
-       IQ = [0, 0, 0],
-       jQ = {
-         x: 0,
-         y: 0
-       },
-       BQ = new wQ.vj(1, 0, 0),
- ... (6 more removed lines; see GitHub link above)
+     var OM = iM(38040),
+       SM = iM(41502),
+       jM = iM(41508),
+       aM = iM(41546),
+       PM = iM(41250),
+       nM = iM(39711);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4080-L4091` → after: `L457-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L457-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L457-L483) · [Before (L4080-L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4080-L4091)

```diff
-     function bQ(QQ, WQ) {
-       var XQ, qQ;
-       const TQ = vQ(QQ, WQ);
-       if (TQ) {
-         const QQ = TQ.x,
-           WQ = TQ.y,
-           XQ = QQ - 50,
-           wQ = WQ - 50;
-         return Math.abs(XQ) <= sQ.b && Math.abs(wQ) <= (0, sQ.k)() ? {
-           x: QQ,
-           y: WQ
-         } : iQ(XQ, wQ)
+     function QM(MM) {
+       const rM = [],
+         iM = [],
+         OM = MM.lines,
+         SM = MM.colors,
+         aM = [];
+       let PM = 0;
+       for (let jM = 0; jM < OM.length; jM++) {
+         const MM = OM[jM];
+         for (let OM = 0; OM < MM.length; OM++) {
+           const {
+             x: nM,
+             y: QM,
+             z: zM
+           } = MM[OM];
+           if (iM.push(nM, QM, zM), SM) {
+ ... (11 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4093-L4116` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L485-L486) · [Before (L4093-L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4093-L4116)

```diff
-       gQ.XQQ(WQ[0], WQ[1], WQ[2]),
-         function(QQ) {
-           const WQ = QQ.nj.KXQ(),
-             XQ = WQ ? wQ.Matrix.FromArrayToRef(WQ.worldMatrix, 0, pQ) : QQ.nj.sE().activeCamera.getWorldMatrix();
-           wQ.vj.TransformNormalToRef(BQ, XQ, JQ), JQ.normalize(), wQ.vj.TransformNormalToRef(yQ, XQ, rQ), rQ.normalize()
-         }(QQ);
-       const zQ = wQ.vj.Dot(gQ, JQ);
-       let FQ = -wQ.vj.Dot(gQ, rQ);
-       Math.abs(zQ) < .001 && Math.abs(FQ) < .001 && (FQ = -1);
-       const PQ = null !== (XQ = null === (qQ = QQ.nj.KXQ()) || void 0 === qQ ? void 0 : qQ.projectionMatrix) && void 0 !== XQ ? XQ : QQ.nj.sE().activeCamera.getProjectionMatrix().m;
-       return iQ(zQ * PQ[0], FQ * PQ[5])
-     }
- 
-     function vQ(QQ, WQ) {
-       const XQ = QQ.nj.sE(),
-         qQ = XQ.Uj(),
- ... (8 more removed lines; see GitHub link above)
+       const nM = new jM.d;
+       return nM.indices = rM, nM.positions = iM, SM && (nM.colors = aM), nM
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4119-L4120` → after: `L489-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L489-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L489-L507) · [Before (L4119-L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4119-L4120)

```diff
-     function dQ(QQ, WQ) {
-       return bQ(QQ, hQ(QQ, WQ))
+     function zM(MM) {
+       const rM = MM.dashSize || 3,
+         iM = MM.gapSize || 1,
+         SM = MM.dashNb || 200,
+         aM = MM.points,
+         PM = [],
+         nM = [],
+         QM = OM.q.Zero();
+       let zM, LM, mM, HM = 0,
+         hM = 0;
+       for (mM = 0; mM < aM.length - 1; mM++) aM[mM + 1].subtractToRef(aM[mM], QM), HM += QM.length();
+       const JM = HM / SM,
+         dM = rM * JM / (rM + iM);
+       for (mM = 0; mM < aM.length - 1; mM++) {
+         aM[mM + 1].subtractToRef(aM[mM], QM), zM = Math.floor(QM.length() / JM), QM.normalize();
+         for (let MM = 0; MM < zM; MM++) LM = JM * MM, PM.push(aM[mM].x + LM * QM.x, aM[mM].y + LM * QM.y, aM[mM].z + LM * QM.z), PM.push(aM[mM].x + (LM + dM) * QM.x, aM[mM].y + (LM + dM) * QM.y, aM[mM].z + (LM + dM) * QM.z), nM.push(hM, hM + 1), hM += 2
+ ... (3 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4124-L4127` → after: `L511-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L511-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L511-L525) · [Before (L4124-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4124-L4127)

```diff
-       const XQ = vQ(QQ, hQ(QQ, WQ));
-       return XQ && {
-         x: XQ.x,
-         y: XQ.y
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const OM = rM.instance,
+         SM = rM.lines,
+         jM = rM.colors;
+       if (OM) {
+         const MM = OM.getVerticesData(PM.j.PositionKind);
+         let rM, iM;
+         jM && (rM = OM.getVerticesData(PM.j.ColorKind));
+         let aM = 0,
+           nM = 0;
+         for (let OM = 0; OM < SM.length; OM++) {
+           const PM = SM[OM];
+           for (let SM = 0; SM < PM.length; SM++) MM[aM] = PM[SM].x, MM[aM + 1] = PM[SM].y, MM[aM + 2] = PM[SM].z, jM && rM && (iM = jM[OM], rM[nM] = iM[SM].r, rM[nM + 1] = iM[SM].g, rM[nM + 2] = iM[SM].b, rM[nM + 3] = iM[SM].a, nM += 4), aM += 3
+         }
+         return OM.updateVerticesData(PM.j.PositionKind, MM, !1, !1), jM && rM && OM.updateVerticesData(PM.j.ColorKind, rM, !1, !1), OM.refreshBoundingInfo(), OM
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4129-L4141` → after: `L527-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L527-L529) · [Before (L4129-L4141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4129-L4141)

```diff
-     }
- 
-     function aQ(QQ) {
-       var WQ, XQ;
-       return 1 / (null !== (WQ = null === (XQ = QQ.nj.KXQ()) || void 0 === XQ ? void 0 : XQ.projectionMatrix[0]) && void 0 !== WQ ? WQ : QQ.nj.sE().activeCamera.getProjectionMatrix().m[0])
-     }
- 
-     function lQ(QQ, WQ, XQ) {
-       const wQ = QQ.nj.KXQ(),
-         qQ = wQ ? wQ.worldMatrix : QQ.nj.sE().activeCamera.getWorldMatrix().m,
-         TQ = QQ.jr;
-       for (let zQ = 0; zQ < 3; zQ++) WQ[zQ] = qQ[12 + zQ] + TQ[zQ], XQ[zQ] = qQ[8 + zQ];
-       zQ().normalize(XQ, XQ)
+       const nM = !!jM,
+         zM = new aM.c(MM, iM, null, void 0, void 0, nM, rM.useVertexAlpha, rM.material);
+       return QM(rM).applyToMesh(zM, rM.updatable), zM
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4145-L4148` → after: `L533-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L533-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L533-L542) · [Before (L4145-L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4145-L4148)

```diff
-       const XQ = QQ.jr,
-         wQ = QQ.nj.KXQ(),
-         qQ = wQ ? GQ.XQQ(wQ.eye[0], wQ.eye[1], wQ.eye[2]) : QQ.nj.camera.globalPosition;
-       return IQ[0] = WQ[0] - XQ[0] - qQ.x, IQ[1] = WQ[1] - XQ[1] - qQ.y, IQ[2] = WQ[2] - XQ[2] - qQ.z, zQ().normalize(IQ, IQ), IQ
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const OM = rM.colors ? [rM.colors] : null;
+       return LM(MM, {
+         lines: [rM.points],
+         updatable: rM.updatable,
+         instance: rM.instance,
+         colors: OM,
+         useVertexAlpha: rM.useVertexAlpha,
+         material: rM.material
+       }, iM)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4152` → after: `L546-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L546-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L546-L568) · [Before (L4152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4152)

```diff
-       return (0, sQ.e)(QQ, WQ, sQ.b, (0, sQ.k)())
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const jM = rM.points,
+         PM = rM.instance,
+         QM = rM.gapSize || 1,
+         LM = rM.dashSize || 3;
+       if (PM) {
+         const MM = MM => {
+           const rM = OM.q.Zero(),
+             iM = MM.length / 6;
+           let SM, aM, nM, QM, zM = 0,
+             LM = 0;
+           for (nM = 0; nM < jM.length - 1; nM++) jM[nM + 1].subtractToRef(jM[nM], rM), zM += rM.length();
+           const mM = zM / iM,
+             HM = PM._creationDataStorage.dashSize,
+             hM = HM * mM / (HM + PM._creationDataStorage.gapSize);
+           for (nM = 0; nM < jM.length - 1; nM++)
+ ... (7 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4155` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L588) · [Before (L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4155)

```diff
-   39255: (QQ, WQ, XQ) => {
+   41546: (MM, rM, iM) => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4159-L4200` → after: `L593-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L593-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L593-L624) · [Before (L4159-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4159-L4200)

```diff
-     var wQ = XQ(231),
-       qQ = XQ(416),
-       TQ = XQ.n(qQ),
-       zQ = XQ(37047),
-       sQ = XQ(37049),
-       FQ = XQ(2997);
-     const PQ = wQ.h.xy * wQ.h.playerEyeToHeightRatio,
-       gQ = 250,
-       JQ = 1.1,
-       rQ = new class {
-         constructor() {
-           this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
-         }
-         add(QQ, WQ) {
-           this.entities.set(QQ, WQ)
-         }
- ... (26 more removed lines; see GitHub link above)
+     var OM, SM, jM = iM(38173),
+       aM = iM(41250),
+       PM = iM(41502),
+       nM = iM(41553),
+       QM = iM(41397),
+       zM = iM(41556),
+       LM = iM(40990);
+     class mM extends PM.d {
+       _isShaderMaterial(MM) {
+         return !!MM && "ShaderMaterial" === MM.getClassName()
+       }
+       constructor(MM) {
+         let rM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           OM = arguments.length > 5 ? arguments[5] : void 0,
+           SM = arguments.length > 6 ? arguments[6] : void 0,
+           PM = arguments.length > 7 ? arguments[7] : void 0;
+ ... (16 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4202-L4216` → after: `L626-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L626-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L626-L681) · [Before (L4202-L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4202-L4216)

```diff
-         scan() {
-           const QQ = (0, FQ.f)();
-           if (!QQ) return;
-           const WQ = QQ.rD.xV(QQ.RC);
-           if (WQ)
-             for (const [XQ, wQ] of this.entities) {
-               if (!QQ.rD.OQQ(XQ, "position")) continue;
-               const qQ = QQ.rD.xV(XQ),
-                 zQ = TQ().sqrDist(WQ, qQ),
-                 sQ = this.playing.get(XQ);
-               if (sQ) {
-                 const QQ = wQ.maxHearDist * JQ;
-                 zQ > QQ * QQ ? this.stopEntity(XQ) : TQ().equals(qQ, sQ.lastPos) || (sQ.sound.setPosition([qQ[0], qQ[1] + PQ, qQ[2]]), TQ().copy(sQ.lastPos, qQ))
-               } else zQ <= wQ.maxHearDist * wQ.maxHearDist && this.startEntity(XQ, wQ, qQ)
-             }
+       }
+       getClassName() {
+         return "LinesMesh"
+       }
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
+       }
+       set material(MM) {
+         const rM = this.material;
+         if (rM === MM) return;
+         const iM = rM && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(MM), iM && rM?.dispose()
+       }
+       _setInternalMaterial(MM) {
+         this._setMaterial(MM), this.material && (this.material.fillMode = QM.c.LineListDrawMode, this.material.disableLighting = !0)
+       }
+ ... (40 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4230-L4239` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L693-L700) · [Before (L4230-L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4230-L4239)

```diff
- 
-     function TQ(QQ, WQ) {
-       "refetchCode" !== QQ ? "Plugin|MobAiPlugin|ShowPetUi" !== QQ ? Promise.all([XQ.e(111), XQ.e(112), XQ.e(107), XQ.e(109), XQ.e(222)]).then((() => XQ(41986))).then((XQ => {
-         let {
-           runClientGameMessage: wQ
-         } = XQ;
-         wQ(QQ, WQ)
-       })).catch((WQ => {
-         console.error(`Game message ${QQ} failed`, WQ)
-       })) : wQ.k.mB("showPetUi", WQ) : wQ.k.mB("refetchCode")
+     mM.ForceGLSL = !1;
+     class HM extends nM.e {
+       constructor(MM, rM) {
+         super(MM, rM), this.intersectionThreshold = rM.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4242` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L708) · [Before (L4242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4242)

```diff
-   39289: (QQ, WQ, XQ) => {
+   39705: (MM, rM, iM) => {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4246-L4262` → after: `L712-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L712-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L712-L748) · [Before (L4246-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4246-L4262)

```diff
-     var wQ = XQ(1257),
-       qQ = XQ(1384),
-       TQ = XQ(26),
-       zQ = XQ(1360),
-       sQ = XQ(1376),
-       FQ = XQ(1567),
-       PQ = XQ(36775);
- 
-     function gQ(QQ) {
-       let {
-         Cq: WQ,
-         uq: XQ
-       } = QQ;
-       const gQ = null !== WQ && void 0 !== WQ ? WQ : (0, sQ.e)().gameNameWithVariation;
-       (0, wQ.F)(gQ) && ((0, PQ.n)(), (0, zQ.Z)((() => {
-         console.log("Received matchmaking order from game server to game", WQ), (0, TQ.m)("inGameReplay"), (0, FQ.navigatePreserveSearch)((0, qQ.c)(gQ, null !== XQ && void 0 !== XQ ? XQ : void 0))
- ... (1 more removed lines; see GitHub link above)
+     var OM = iM(39711);
+     const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
+       ...MM
+     } : null : MM.clone(rM) : null;
+     class jM {
+       static DeepCopy(MM, rM, iM, jM) {
+         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const PM = function(MM) {
+           const rM = [];
+           do {
+             const iM = Object.getOwnPropertyNames(MM);
+             for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
+           } while (MM = Object.getPrototypeOf(MM));
+           return rM
+         }(MM);
+         for (const QM of PM) {
+ ... (21 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4265-L4288` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L751) · [Before (L4265-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4265-L4288)

```diff
-   39287: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => FQ,
-       i: () => zQ,
-       l: () => sQ,
-       o: () => PQ
-     });
-     var wQ = XQ(31),
-       qQ = XQ(1404);
-     const TQ = new Map;
- 
-     function zQ(QQ, WQ) {
-       wQ.k.mB("newUiRequest", {
-         id: QQ,
-         clientParameters: WQ
-       }, !0)
- ... (8 more removed lines; see GitHub link above)
+   38885: (MM, rM, iM) => {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4290-L4304` → after: `L753-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L753-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L753-L755) · [Before (L4290-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4290-L4304)

```diff
-       wQ.k.mB("clearUiRequests");
-       for (const QQ of TQ.values()) QQ.tearDownNotification();
-       TQ.clear()
-     }
- 
-     function PQ(QQ, WQ, XQ, wQ) {
-       const zQ = qQ.NotificationProvider.showPromptPopup({
-         title: WQ,
-         confirmText: "general:yes",
-         cancelText: "general:no",
-         destructive: XQ,
-         unlockPointerKey: "uiRequestPopup"
-       });
-       TQ.set(QQ, zQ), zQ.getResult().then((WQ => {
-         TQ.delete(QQ), "notificationTornDown" !== WQ && wQ(WQ)
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
+         const rM = 16 * Math.random() | 0;
+         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4308` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L762) · [Before (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4308)

```diff
-   39279: (QQ, WQ, XQ) => {
+   39711: (MM, rM, iM) => {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4310` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L764) · [Before (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4310)

```diff
-       c: () => wQ
+       e: () => OM
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4313-L4368` → after: `L767-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L767-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L767-L831) · [Before (L4313-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4313-L4368)

```diff
-       constructor() {
-         this.members = new Map
-       }
-       apply(QQ) {
-         const WQ = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const wQ of QQ.uQ) {
-           let QQ = this.members.get(wQ.LQ);
-           if (QQ || (QQ = {
-               name: null,
-               settings: {}
-             }, this.members.set(wQ.LQ, QQ), WQ.added.push(wQ.LQ)), null !== wQ.kQ && (QQ.name = wQ.kQ), null !== wQ.fQ || wQ.SQ.length > 0) {
-             const XQ = null === wQ.fQ ? {} : JSON.parse(wQ.fQ);
- ... (40 more removed lines; see GitHub link above)
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
+       }
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
+       }
+       static _AddLogEntry(MM) {
+         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
+ ... (49 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4370` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L833) · [Before (L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4370)

```diff
-   39311: (QQ, WQ, XQ) => {
+   41190: (MM, rM, iM) => {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4372-L4373` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L835) · [Before (L4372-L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4372-L4373)

```diff
-       b: () => wQ,
-       f: () => qQ
+       b: () => OM.d
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4375-L4383` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/252.js#L837-L838) · [Before (L4375-L4383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/252.js#L4375-L4383)

```diff
-     const wQ = ["description", "label"];
- 
-     function qQ(QQ) {
-       const WQ = QQ.type;
-       return {
-         type: WQ,
-         params: QQ[WQ]
-       }
-     }
+     var OM = iM(41196);
+     (0, OM.b)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/253.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/253.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L2)

```diff
- export const ids = [253];
+ export const ids = [253, 258];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L4)

```diff
-   41305: (QQ, WQ, XQ) => {
+   44485: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L6-L8)

```diff
-       e: () => zQ,
-       i: () => gQ,
-       l: () => PQ
+       d: () => aM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L10-L14` → after: `L8-L14098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L8-L14098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L8-L14098) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L10-L14)

```diff
-     var wQ, qQ = XQ(37404),
-       TQ = XQ(37370);
-     ! function(QQ) {
-       QQ[QQ.CW = 0] = "CW", QQ[QQ.CCW = 1] = "CCW"
-     }(wQ || (wQ = {}));
+     var OM = iM(44412),
+       SM = iM(41091);
+     let jM = !1;
+ 
+     function aM() {
+       jM || (jM = !0, SM.c.prototype._sphericalPolynomialTargetSize = 0, SM.c.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(SM.c.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = OM.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = MM, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+ ... (14075 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L16-L20` → after: `L14100-L14103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14100-L14103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14100-L14103) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L16-L20)

```diff
-       static Interpolate(QQ, WQ, XQ, wQ, qQ) {
-         if (0 === QQ) return 0;
-         const TQ = 1 - 3 * wQ + 3 * WQ,
-           zQ = 3 * wQ - 6 * WQ,
-           sQ = 3 * WQ;
+       static Export(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           iM = arguments.length > 2 ? arguments[2] : void 0;
+         if (!MM || 0 === MM.bones.length) throw new Error("Invalid or empty skeleton provided");
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L22-L24` → after: `L14105-L14160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14105-L14160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14105-L14160) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L22-L24)

```diff
-         for (let PQ = 0; PQ < 5; PQ++) {
-           const WQ = FQ * FQ;
-           FQ -= (TQ * (WQ * FQ) + zQ * WQ + sQ * FQ - QQ) * (1 / (3 * TQ * WQ + 2 * zQ * FQ + sQ)), FQ = Math.min(1, Math.max(0, FQ))
+         rM && 0 !== rM.length || (OM = MM.animations.map((MM => MM.name)));
+         let SM = null;
+         for (const QM of OM) {
+           const rM = MM.getAnimationRange(QM);
+           rM && (SM = SM ? new ta.d("animation-range", Math.min(SM.from, rM.from), Math.max(SM.to, rM.to)) : rM)
+         }
+         if (!SM && (MM.animations.length > 0 && (SM = MM.getAnimationRange(MM.animations[0].name)), !SM)) throw new Error("No animation range found in skeleton");
+         const jM = iM || 1 / (MM.animations[0]?.framePerSecond || 30),
+           aM = this._BuildBoneHierarchy(MM, OM);
+         let PM = 0;
+         for (const QM of aM) QM.positionKeys.length > 0 && (PM = Math.max(PM, QM.positionKeys.length)), QM.rotationKeys.length > 0 && (PM = Math.max(PM, QM.rotationKeys.length));
+         0 === PM && (PM = Math.floor((SM.to - SM.from) / jM) + 1);
+         let nM = "";
+         return nM += "HIERARCHY\n", nM += this._ExportHierarchy(aM, 0), nM += "MOTION\n", nM += `Frames: ${PM}\n`, nM += `Frame Time: ${jM.toFixed(6)}\n`, nM += this._ExportMotionData(aM, PM, 0, OM), nM
+       }
+       static _BuildBoneHierarchy(MM, rM) {
+ ... (40 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L26` → after: `L14162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14162) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L26)

```diff
-         return 3 * Math.pow(1 - FQ, 2) * FQ * XQ + 3 * (1 - FQ) * Math.pow(FQ, 2) * qQ + Math.pow(FQ, 3)
+         return iM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L28-L31` → after: `L14164-L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14164-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14164-L14200) · [Before (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L28-L31)

```diff
-     }
-     class sQ {
-       constructor(QQ) {
-         this._radians = QQ, this._radians < 0 && (this._radians += 2 * Math.PI)
+       static _IsEndSite(MM) {
+         return 0 === MM.children.length
+       }
+       static _GetBoneOffset(MM) {
+         try {
+           if (!MM.getParent()) return MM.getRestMatrix().getTranslation();
+           return MM.getLocalMatrix().getTranslation()
+         } catch (rM) {
+           return OM.sh.Zero()
+         }
+       }
+       static _ExportMotionData(MM, rM, iM, OM) {
+         let SM = "";
+         for (let jM = 0; jM < rM; jM++) {
+           const rM = [];
+           this._CollectFrameValues(MM, jM + iM, rM, OM), SM += rM.map((MM => MM.toFixed(6))).join(" ") + "\n"
+ ... (21 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L33-L34` → after: `L14202-L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14202-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14202-L14204) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L33-L34)

```diff
-       degrees() {
-         return 180 * this._radians / Math.PI
+       static _GetRotationAtFrameIndex(MM, rM) {
+         if (0 === MM.length) return OM.Quaternion.Identity();
+         return MM[Math.max(0, Math.min(rM, MM.length - 1))].value.clone()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L36-L37` → after: `L14206-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14206-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14206-L14212) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L36-L37)

```diff
-       radians() {
-         return this._radians
+       static _QuaternionToEuler(MM) {
+         const rM = new OM.Matrix;
+         MM.toRotationMatrix(rM);
+         const iM = rM.m;
+         let jM, aM, PM;
+         const nM = Math.sqrt(iM[0] * iM[0] + iM[1] * iM[1]);
+         return nM > ki.d ? (jM = Math.atan2(iM[6], iM[10]), aM = Math.atan2(-iM[2], nM), PM = Math.atan2(iM[1], iM[0])) : (jM = Math.atan2(-iM[9], iM[5]), aM = Math.atan2(-iM[2], nM), PM = 0), new OM.sh(SM.Tools.ToDegrees(jM), SM.Tools.ToDegrees(aM), SM.Tools.ToDegrees(PM))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L39-L42` → after: `L14214-L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14214-L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14214-L14228) · [Before (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L39-L42)

```diff
-       static BetweenTwoPoints(QQ, WQ) {
-         const XQ = WQ.subtract(QQ),
-           wQ = Math.atan2(XQ.y, XQ.x);
-         return new sQ(wQ)
+     }
+ 
+     function ua(MM) {
+       return "string" === typeof MM?.name
+     }
+     const Ra = Symbol("__xml:meta$__"),
+       pa = Symbol("__xml:name$__");
+ 
+     function Wa(MM, rM) {
+       Object.prototype.hasOwnProperty.call(MM.metadata, Ra) || (MM.metadata[Ra] = []), MM.metadata[Ra].push(rM)
+     }
+ 
+     function sa(MM) {
+       return (rM, iM) => {
+         rM[pa] = MM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L44-L51` → after: `L14230-L14294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14230-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14230-L14294) · [Before (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L44-L51)

```diff
-       static BetweenTwoVectors(QQ, WQ) {
-         let XQ = QQ.lengthSquared() * WQ.lengthSquared();
-         if (0 === XQ) return new sQ(Math.PI / 2);
-         XQ = Math.sqrt(XQ);
-         let wQ = QQ.dot(WQ) / XQ;
-         wQ = (0, qQ.Clamp)(wQ, -1, 1);
-         const TQ = Math.acos(wQ);
-         return new sQ(TQ)
+     }
+ 
+     function Da() {
+       return (MM, rM) => Wa(rM, {
+         kind: "none",
+         prop: String(rM.name),
+         ignore: !0
+       })
+     }
+ 
+     function ka(MM) {
+       return (rM, iM) => Wa(iM, {
+         kind: "attr",
+         prop: String(iM.name),
+         ...MM
+       })
+ ... (49 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L53-L54` → after: `L14296-L14322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14296-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14296-L14322) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L53-L54)

```diff
-       static FromRadians(QQ) {
-         return new sQ(QQ)
+     }
+ 
+     function Aa(MM, rM) {
+       return rM ? `${rM}:${MM}` : MM
+     }
+     const xa = Object.freeze({
+         eps: 1e-6,
+         maxDecimalsCap: 15,
+         trimTrailingZeros: !0,
+         allowScientific: !1,
+         snapNearZero: !0
+       }),
+       va = Object.freeze({
+         number: xa
+       });
+ 
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L56-L57` → after: `L14324-L14328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14324-L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14324-L14328) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L56-L57)

```diff
-       static FromDegrees(QQ) {
-         return new sQ(QQ * Math.PI / 180)
+     }
+ 
+     function Ba(MM) {
+       return {
+         number: Fa(MM?.number)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L61-L71` → after: `L14332-L14350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14332-L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14332-L14350) · [Before (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L61-L71)

```diff
-       constructor(QQ, WQ, XQ) {
-         this.startPoint = QQ, this.midPoint = WQ, this.endPoint = XQ;
-         const wQ = Math.pow(WQ.x, 2) + Math.pow(WQ.y, 2),
-           qQ = (Math.pow(QQ.x, 2) + Math.pow(QQ.y, 2) - wQ) / 2,
-           zQ = (wQ - Math.pow(XQ.x, 2) - Math.pow(XQ.y, 2)) / 2,
-           FQ = (QQ.x - WQ.x) * (WQ.y - XQ.y) - (WQ.x - XQ.x) * (QQ.y - WQ.y);
-         this.centerPoint = new TQ.q((qQ * (WQ.y - XQ.y) - zQ * (QQ.y - WQ.y)) / FQ, ((QQ.x - WQ.x) * zQ - (WQ.x - XQ.x) * qQ) / FQ), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = sQ.BetweenTwoPoints(this.centerPoint, this.startPoint);
-         const PQ = this.startAngle.degrees();
-         let gQ = sQ.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
-           JQ = sQ.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
-         gQ - PQ > 180 && (gQ -= 360), gQ - PQ < -180 && (gQ += 360), JQ - gQ > 180 && (JQ -= 360), JQ - gQ < -180 && (JQ += 360), this.orientation = gQ - PQ < 0 ? 0 : 1, this.angle = sQ.FromDegrees(0 === this.orientation ? PQ - JQ : JQ - PQ)
+       constructor(MM) {
+         if (this.o = MM, this._o = MM.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
+       }
+       toString(MM) {
+         if (!Number.isFinite(MM)) throw new Error(`Cannot format non-finite number: ${MM}`);
+         const rM = this._o,
+           iM = this._clampInt(rM.maxDecimalsCap ?? 15, 0, 20),
+           OM = rM.trimTrailingZeros ?? !0,
+           SM = rM.snapNearZero ?? !0,
+           jM = rM.zeroThreshold ?? rM.eps,
+           aM = 1 / rM.eps;
+         let PM, nM = Math.round(MM * aM) / aM;
+         if (Object.is(nM, -0) && (nM = 0), SM && Math.abs(nM) <= jM && (nM = 0), PM = void 0 !== rM.fixedDecimals ? this._clampInt(rM.fixedDecimals, 0, iM) : this._clampInt(Math.ceil(-Math.log10(rM.eps)), 0, iM), rM.allowScientific, 0 === PM) return String(Math.trunc(nM));
+         let QM = nM.toFixed(PM);
+         if (OM && void 0 === rM.fixedDecimals && (QM = QM.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(QM)) throw new Error(`Scientific notation not allowed in XML output: ${QM}`);
+         return QM
+ ... (3 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L76-L98` → after: `L14371-L14375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14371-L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14371-L14375) · [Before (L76-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L76-L98)

```diff
-         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new TQ.q(QQ, WQ))
-       }
-       addLineTo(QQ, WQ) {
-         if (this.closed) return this;
-         const XQ = new TQ.q(QQ, WQ),
-           wQ = this._points[this._points.length - 1];
-         return this._points.push(XQ), this._length += XQ.subtract(wQ).length(), this
-       }
-       addArcTo(QQ, WQ, XQ, wQ) {
-         let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
-         if (this.closed) return this;
-         const zQ = this._points[this._points.length - 1],
-           sQ = new TQ.q(QQ, WQ),
-           PQ = new TQ.q(XQ, wQ),
-           gQ = new FQ(zQ, sQ, PQ);
-         let JQ = gQ.angle.radians() / qQ;
- ... (7 more removed lines; see GitHub link above)
+         this._ns = new Map, this._prefixCount = 0, this._builder = MM, this._format = Ba(rM), this._nFmt = new Xa(this._format)
+       }
+       withNamespace() {
+         for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
+         for (const OM of rM) this._assignNamespace(OM);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L101-L110` → after: `L14378-L14390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14378-L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14378-L14390) · [Before (L101-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L101-L110)

```diff
-       addQuadraticCurveTo(QQ, WQ, XQ, wQ) {
-         let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
-         if (this.closed) return this;
-         const TQ = (QQ, WQ, XQ, wQ) => (1 - QQ) * (1 - QQ) * WQ + 2 * QQ * (1 - QQ) * XQ + QQ * QQ * wQ,
-           zQ = this._points[this._points.length - 1];
-         for (let sQ = 0; sQ <= qQ; sQ++) {
-           const FQ = sQ / qQ,
-             PQ = TQ(FQ, zQ.x, QQ, XQ),
-             gQ = TQ(FQ, zQ.y, WQ, wQ);
-           this.addLineTo(PQ, gQ)
+       serialize(MM, rM) {
+         if (!(rM = rM ?? fa(MM))) throw new Error("can not find name for given object");
+         const iM = Na(rM);
+         iM.ns && this._assignNamespace(iM.ns, "xmlns"), this._gatherNamespaces(MM, new WeakSet);
+         const OM = this._builder.ele(null, iM.name);
+         for (const [SM, jM] of Array.from(this._ns.entries())) OM.att("xmlns", jM, SM);
+         this._writeObjectContent(OM, MM, (new WeakSet).add(MM)), this._builder.end()
+       }
+       _writeObject(MM, rM, iM) {
+         if (iM.has(rM)) return;
+         if (iM.add(rM), Array.isArray(rM)) {
+           for (const OM of rM) Ta(OM) || (Ka(OM) ? this._builder.text(OM) : this._writeObject(MM, OM, iM));
+           return
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L112` → after: `L14392-L14397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14392-L14397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14392-L14397) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L112)

```diff
-         return this
+         const OM = fa(rM);
+         if (!OM) return;
+         const SM = Na(OM),
+           jM = this._getPrefix(SM),
+           aM = Aa(SM.name, jM);
+         MM.ele(null, aM), this._writeObjectContent(MM, rM, iM), this._builder.end()
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L114-L123` → after: `L14399-L14402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14399-L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14399-L14402) · [Before (L114-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L114-L123)

```diff
-       addBezierCurveTo(QQ, WQ, XQ, wQ, qQ, TQ) {
-         let zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
-         if (this.closed) return this;
-         const sQ = (QQ, WQ, XQ, wQ, qQ) => (1 - QQ) * (1 - QQ) * (1 - QQ) * WQ + 3 * QQ * (1 - QQ) * (1 - QQ) * XQ + 3 * QQ * QQ * (1 - QQ) * wQ + QQ * QQ * QQ * qQ,
-           FQ = this._points[this._points.length - 1];
-         for (let PQ = 0; PQ <= zQ; PQ++) {
-           const gQ = PQ / zQ,
-             JQ = sQ(gQ, FQ.x, QQ, XQ, qQ),
-             rQ = sQ(gQ, FQ.y, WQ, wQ, TQ);
-           this.addLineTo(JQ, rQ)
+       _getPrefix(MM) {
+         if (MM.ns) {
+           const rM = this._ns.get(MM.ns.toLowerCase());
+           if ("xmlns" !== rM) return rM
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L127-L142` → after: `L14405-L14438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14405-L14438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14405-L14438) · [Before (L127-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L127-L142)

```diff
-       isPointInside(QQ) {
-         let WQ = !1;
-         const XQ = this._points.length;
-         for (let wQ = XQ - 1, qQ = 0; qQ < XQ; wQ = qQ++) {
-           let XQ = this._points[wQ],
-             TQ = this._points[qQ],
-             zQ = TQ.x - XQ.x,
-             sQ = TQ.y - XQ.y;
-           if (Math.abs(sQ) > Number.EPSILON) {
-             if (sQ < 0 && (XQ = this._points[qQ], zQ = -zQ, TQ = this._points[wQ], sQ = -sQ), QQ.y < XQ.y || QQ.y > TQ.y) continue;
-             if (QQ.y === XQ.y && QQ.x === XQ.x) return !0;
-             {
-               const wQ = sQ * (QQ.x - XQ.x) - zQ * (QQ.y - XQ.y);
-               if (0 === wQ) return !0;
-               if (wQ < 0) continue;
-               WQ = !WQ
+       _writeObjectContent(MM, rM, iM) {
+         const OM = oa(rM) ?? [],
+           SM = new Map;
+         for (const aM of OM) {
+           const MM = SM.get(aM.prop) ?? [];
+           MM.push(aM), SM.set(aM.prop, MM)
+         }
+         const jM = Object.keys(rM).sort(((MM, rM) => {
+           const iM = (SM.get(MM) ?? []).some((MM => "attr" === MM.kind));
+           return iM === (SM.get(rM) ?? []).some((MM => "attr" === MM.kind)) ? 0 : iM ? -1 : 1
+         }));
+         for (const aM of jM) {
+           const OM = rM[aM];
+           if (null === OM || void 0 === OM) continue;
+           const jM = SM.get(aM);
+           if (jM) {
+ ... (18 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L144-L147` → after: `L14440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14440) · [Before (L144-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L144-L147)

```diff
-           } else {
-             if (QQ.y !== XQ.y) continue;
-             if (TQ.x <= QQ.x && QQ.x <= XQ.x || XQ.x <= QQ.x && QQ.x <= TQ.x) return !0
-           }
+           } else Ta(OM) || (Ka(OM) ? this._builder.text(OM) : this._writeObject(MM, OM, iM))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L151-L152` → after: `L14443-L14468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14443-L14468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14443-L14468) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L151-L152)

```diff
-       close() {
-         return this.closed = !0, this
+       _gatherNamespaces(MM, rM) {
+         if (rM.has(MM)) return;
+         if (rM.add(MM), Array.isArray(MM)) {
+           for (const iM of MM) qa(iM) || this._gatherNamespaces(iM, rM);
+           return
+         }
+         const iM = fa(MM);
+         iM && this._assignNamespace(iM);
+         const OM = oa(MM) ?? [],
+           SM = new Map;
+         for (const aM of OM) {
+           const MM = SM.get(aM.prop) ?? [];
+           MM.push(aM), SM.set(aM.prop, MM)
+         }
+         const jM = [];
+         for (const aM of Object.keys(MM)) {
+ ... (10 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L154-L158` → after: `L14470-L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14470-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14470-L14477) · [Before (L154-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L154-L158)

```diff
-       length() {
-         let QQ = this._length;
-         if (this.closed) {
-           const WQ = this._points[this._points.length - 1];
-           QQ += this._points[0].subtract(WQ).length()
+       _assignNamespace(MM, rM) {
+         const iM = Na(MM);
+         if (iM?.ns) {
+           const MM = iM.ns.toLowerCase();
+           this._ns.get(MM) || this._ns.set(MM, rM ?? this._buildNsPrefix(MM))
+         } else if ("xmlns" === rM) {
+           const MM = iM.name.toLowerCase();
+           this._ns.get(MM) || this._ns.set(MM, rM ?? this._buildNsPrefix(MM))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L162-L166` → after: `L14492-L14501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14492-L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14492-L14501) · [Before (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L162-L166)

```diff
-       area() {
-         const QQ = this._points.length;
-         let WQ = 0;
-         for (let XQ = QQ - 1, wQ = 0; wQ < QQ; XQ = wQ++) WQ += this._points[XQ].x * this._points[wQ].y - this._points[wQ].x * this._points[XQ].y;
-         return .5 * WQ
+     }
+     class ca {}
+     var MP;
+     ca.OpenTag = "<", ca.CloseTag = ">", ca.Slash = "/", ca.Question = "?", ca.Quote = '"', ca.Equal = "=", ca.Space = " ", ca.Semicolon = ":", ca.Dec = "<?xml", ca.Xml = "xml", ca.Xmlns = "xmlns", ca.Xsi = "xsi", ca.VersionKeyword = "version", ca.EncodingKeyword = "encoding", ca … [truncated]
+       function(MM) {
+         MM[MM.Declaration = 0] = "Declaration", MM[MM.Tag = 1] = "Tag", MM[MM.Attribute = 2] = "Attribute", MM[MM.Text = 3] = "Text"
+       }(MP || (MP = {}));
+     class rP {
+       constructor(MM) {
+         this._ctxStack = [], this._d = 0, this._w = MM
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L168-L169` → after: `L14503-L14504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14503-L14504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14503-L14504) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L168-L169)

```diff
-       getPoints() {
-         return this._points
+       dec(MM, rM, iM) {
+         return this._w.write(ca.Dec), this._writeAttStr(ca.VersionKeyword, MM), rM && this._writeAttStr(ca.EncodingKeyword, rM), void 0 !== iM && this._writeAttStr(ca.StandaloneKeyword, iM ? "yes" : "no"), this._w.write(ca.Question, ca.CloseTag), this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L171-L183` → after: `L14506-L14515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14506-L14515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14506-L14515) · [Before (L171-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L171-L183)

```diff
-       getPointAtLengthPosition(QQ) {
-         if (QQ < 0 || QQ > 1) return TQ.q.Zero();
-         const WQ = QQ * this.length();
-         let XQ = 0;
-         for (let wQ = 0; wQ < this._points.length; wQ++) {
-           const QQ = (wQ + 1) % this._points.length,
-             qQ = this._points[wQ],
-             zQ = this._points[QQ].subtract(qQ),
-             sQ = zQ.length() + XQ;
-           if (WQ >= XQ && WQ <= sQ) {
-             const QQ = zQ.normalize(),
-               wQ = WQ - XQ;
-             return new TQ.q(qQ.x + QQ.x * wQ, qQ.y + QQ.y * wQ)
+       att(MM, rM, iM) {
+         const OM = this._peekContext();
+         if (!OM) throw new Error("att() without open element");
+         if (OM.closed) throw new Error(`att() after start tag closed for <${OM.name}>`);
+         if (this._isXmlnsDecl(MM, rM)) {
+           if (rM === ca.Xmlns) OM.defaultNs = iM, this._registerNamespace(OM, "", iM), this._writeAttStr(ca.Xmlns, iM);
+           else if (MM) this._registerNamespace(OM, rM, iM), this._writeAttStr(`${MM}:${rM}`, iM);
+           else {
+             const MM = rM.slice(6);
+             this._registerNamespace(OM, MM, iM), this._writeAttStr(rM, iM)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L185` → after: `L14517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14517) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L185)

```diff
-           XQ = sQ
+           return OM.lastToken = MP.Attribute, this
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L187` → after: `L14519-L14523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14519-L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14519-L14523) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L187)

```diff
-         return TQ.q.Zero()
+         let SM = rM;
+         if (MM) {
+           SM = `${this._ensurePrefixDeclared(OM,MM)}:${rM}`
+         }
+         return OM.lastToken = MP.Attribute, this._writeAttStr(SM, iM), this
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L189-L190` → after: `L14525-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14525-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14525-L14601) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L189-L190)

```diff
-       static StartingAt(QQ, WQ) {
-         return new PQ(QQ, WQ)
+       ele(MM, rM) {
+         const iM = this._peekContext();
+         iM && this._closeOpenTagIfNeeded(iM);
+         let OM = rM;
+         if (MM) {
+           OM = `${this._lookupPrefix(MM)??MM}:${rM}`
+         }
+         return this._pushContext(OM, ++this._d), this._w.write(ca.OpenTag, OM), this
+       }
+       text(MM) {
+         const rM = this._peekContext();
+         if (!rM) throw new Error("text() without open element");
+         return this._closeOpenTagIfNeeded(rM), rM.lastToken = MP.Text, this._w.write(this._escText(MM)), this
+       }
+       end() {
+         const MM = this._popContext();
+ ... (61 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L194-L199` → after: `L14610-L14611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14610-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14610-L14611) · [Before (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L194-L199)

```diff
-       static CreateQuadraticBezier(QQ, WQ, XQ, wQ) {
-         wQ = wQ > 2 ? wQ : 3;
-         const qQ = [],
-           zQ = (QQ, WQ, XQ, wQ) => (1 - QQ) * (1 - QQ) * WQ + 2 * QQ * (1 - QQ) * XQ + QQ * QQ * wQ;
-         for (let sQ = 0; sQ <= wQ; sQ++) qQ.push(new TQ.s(zQ(sQ / wQ, QQ.x, WQ.x, XQ.x), zQ(sQ / wQ, QQ.y, WQ.y, XQ.y), zQ(sQ / wQ, QQ.z, WQ.z, XQ.z)));
-         return new gQ(qQ)
+       constructor() {
+         this.count = 0, this._chunks = []
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L201-L206` → after: `L14613-L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14613-L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14613-L14617) · [Before (L201-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L201-L206)

```diff
-       static CreateCubicBezier(QQ, WQ, XQ, wQ, qQ) {
-         qQ = qQ > 3 ? qQ : 4;
-         const zQ = [],
-           sQ = (QQ, WQ, XQ, wQ, qQ) => (1 - QQ) * (1 - QQ) * (1 - QQ) * WQ + 3 * QQ * (1 - QQ) * (1 - QQ) * XQ + 3 * QQ * QQ * (1 - QQ) * wQ + QQ * QQ * QQ * qQ;
-         for (let FQ = 0; FQ <= qQ; FQ++) zQ.push(new TQ.s(sQ(FQ / qQ, QQ.x, WQ.x, XQ.x, wQ.x), sQ(FQ / qQ, QQ.y, WQ.y, XQ.y, wQ.y), sQ(FQ / qQ, QQ.z, WQ.z, XQ.z, wQ.z)));
-         return new gQ(zQ)
+       write() {
+         for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
+         if (0 === rM.length) return this;
+         const OM = rM.join("");
+         return this._chunks.push(OM), this.count += OM.length, this
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L208-L212` → after: `L14619-L14620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14619-L14620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14619-L14620) · [Before (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L208-L212)

```diff
-       static CreateHermiteSpline(QQ, WQ, XQ, wQ, qQ) {
-         const zQ = [],
-           sQ = 1 / qQ;
-         for (let FQ = 0; FQ <= qQ; FQ++) zQ.push(TQ.s.Hermite(QQ, WQ, XQ, wQ, FQ * sQ));
-         return new gQ(zQ)
+       toString() {
+         return this._chunks.join("")
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L214-L222` → after: `L14622-L14689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14622-L14689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14622-L14689) · [Before (L214-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L214-L222)

```diff
-       static CreateCatmullRomSpline(QQ, WQ, XQ) {
-         const wQ = [],
-           qQ = 1 / WQ;
-         let zQ = 0;
-         if (XQ) {
-           const XQ = QQ.length;
-           for (let sQ = 0; sQ < XQ; sQ++) {
-             zQ = 0;
-             for (let FQ = 0; FQ < WQ; FQ++) wQ.push(TQ.s.CatmullRom(QQ[sQ % XQ], QQ[(sQ + 1) % XQ], QQ[(sQ + 2) % XQ], QQ[(sQ + 3) % XQ], zQ)), zQ += qQ
+       clear() {
+         this._chunks = [], this.count = 0
+       }
+     }
+     class OP {
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         this._sink = MM, this._opts = rM, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
+       }
+       write() {
+         for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
+         if (0 === rM.length) return this;
+         const OM = rM.join("");
+         if (0 === OM.length) return this;
+         this._pending += OM, this._pendingChars += OM.length;
+         const SM = this._opts.flushChars ?? 65536;
+ ... (52 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L224-L231` → after: `L14691-L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14691-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14691-L14816) · [Before (L224-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L224-L231)

```diff
-           wQ.push(wQ[0])
-         } else {
-           const XQ = [];
-           XQ.push(QQ[0].clone()), XQ.push(...QQ), XQ.push(QQ[QQ.length - 1].clone());
-           let sQ = 0;
-           for (; sQ < XQ.length - 3; sQ++) {
-             zQ = 0;
-             for (let QQ = 0; QQ < WQ; QQ++) wQ.push(TQ.s.CatmullRom(XQ[sQ], XQ[sQ + 1], XQ[sQ + 2], XQ[sQ + 3], zQ)), zQ += qQ
+         };
+         return (0, wM.p)(rM, "ThreeMfContentTypes"), (() => {
+           const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+           (0, wM.i)(null, MM = {
+             value: rM
+           }, iM, {
+             kind: "class",
+             name: rM.name,
+             metadata: SM
+           }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
+             enumerable: !0,
+             configurable: !0,
+             writable: !0,
+             value: SM
+           }), (0, wM.m)(rM, OM)
+         })(), rM
+ ... (110 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L233` → after: `L14818-L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR14818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L14818-L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L14818-L15959) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L233)

```diff
-           sQ--, wQ.push(TQ.s.CatmullRom(XQ[sQ], XQ[sQ + 1], XQ[sQ + 2], XQ[sQ + 3], zQ))
+         };
+         return (0, wM.p)(rM, "ThreeMfRelationship"), (() => {
+           const HM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+           iM = [ka({
+             name: "Id"
+           })], OM = [ka({
+             name: "Type"
+           })], SM = [ka({
+             name: "Target"
+           })], (0, wM.i)(null, null, iM, {
+             kind: "field",
+             name: "id",
+             static: !1,
+             private: !1,
+             access: {
+               has: MM => "id" in MM,
+ ... (1126 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L235` → after: `L15961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR15961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L15961) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L235)

```diff
-         return new gQ(wQ)
+         return `#${iM}${OM}${SM}`
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L237-L269` → after: `L15963-L16015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR15963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L15963-L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L15963-L16015) · [Before (L237-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L237-L269)

```diff
-       static ArcThru3Points(QQ, WQ, XQ) {
-         let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
-           qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         const sQ = [],
-           FQ = WQ.subtract(QQ),
-           PQ = XQ.subtract(WQ),
-           JQ = QQ.subtract(XQ),
-           rQ = TQ.s.Cross(FQ, PQ),
-           IQ = rQ.length();
-         if (IQ < Math.pow(10, -8)) return new gQ(sQ);
-         const jQ = FQ.lengthSquared(),
-           BQ = PQ.lengthSquared(),
-           yQ = JQ.lengthSquared(),
-           VQ = rQ.lengthSquared(),
-           DQ = .5 * FQ.length() * PQ.length() * JQ.length() / IQ,
- ... (17 more removed lines; see GitHub link above)
+     }
+     class BP {
+       constructor() {
+         this._model = new bP, this._objects = new Map
+       }
+       withMetaData(MM, rM, iM, OM) {
+         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new wP(MM, rM, iM, OM)), this
+       }
+       withMaterial(MM) {
+         return MM instanceof FP && (MM = MM.build()), MM && (this._model.resources = this._model.resources ?? new gP, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(MM)), this
+       }
+       withMesh(MM) {
+         return MM instanceof vP && (MM = MM.build()), this._model.resources = this._model.resources ?? new gP, this._model.resources.object.push(MM), this
+       }
+       withComponents(MM) {
+         return MM instanceof xP && (MM = MM.build()), this._model.resources = this._model.resources ?? new gP, this._model.resources.object.push(MM), this
+ ... (37 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L271` → after: `L16017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16017) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L271)

```diff
-         return new gQ(sQ)
+         return new GP(this._cts, this._rs, this._m)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L274` → after: `L16022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16022) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L274)

```diff
-         this._length = 0, this._points = QQ, this._length = this._computeLength(QQ)
+         this._o = MM
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L276-L277` → after: `L16024-L16025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16024-L16025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16024-L16025) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L276-L277)

```diff
-       getPoints() {
-         return this._points
+       get options() {
+         return this._o
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L279-L280` → after: `L16027-L16051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16027-L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16027-L16051) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L279-L280)

```diff
-       length() {
-         return this._length
+       async serializeAsync(MM) {
+         const rM = await this.ensureZipLibReadyAsync();
+         if (!rM) return;
+         const iM = rM.Zip,
+           OM = rM.ZipDeflate;
+         if (!iM || !OM) throw new Error("fflate Zip / ZipDeflate not available");
+         const SM = function(MM, rM, iM) {
+           const SM = new OM(rM, {
+             level: 6
+           });
+           MM.add(SM);
+           const jM = function(MM) {
+               return {
+                 push: (rM, iM) => MM.push(rM, iM)
+               }
+             }(SM),
+ ... (9 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L282-L287` → after: `L16053-L16058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16053-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16053-L16058) · [Before (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L282-L287)

```diff
-       continue (QQ) {
-         const WQ = this._points[this._points.length - 1],
-           XQ = this._points.slice(),
-           wQ = QQ.getPoints();
-         for (let qQ = 1; qQ < wQ.length; qQ++) XQ.push(wQ[qQ].subtract(wQ[0]).add(WQ));
-         return new gQ(XQ)
+       toDocument() {
+         const MM = (new BP).withUnit(this._o?.unit ?? aP.millimeter);
+         if (this.options.metadata)
+           for (const SM in this.options.metadata) MM.withMetaData(SM, this.options.metadata[SM]);
+         for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
+         return (new XP).withModel(this.toModel(MM, ...iM)).build()
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L289` → after: `L16060-L16069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16060-L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16060-L16069) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L289)

```diff
-       _computeLength(QQ) {
+     }
+     class KP {
+       static async SerializeToMemoryAsync(MM) {
+         const rM = new Array;
+         let iM = 0;
+         for (var OM = arguments.length, SM = new Array(OM > 1 ? OM - 1 : 0), jM = 1; jM < OM; jM++) SM[jM - 1] = arguments[jM];
+         if (await MM.serializeAsync((function(MM, OM, SM) {
+             rM.push(OM), iM += OM.length
+           }), ...SM), !iM) return;
+         const aM = new Uint8Array(iM);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L291` → after: `L16071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16071) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L291)

```diff
-         for (let XQ = 1; XQ < QQ.length; XQ++) WQ += QQ[XQ].subtract(QQ[XQ - 1]).length();
+         for (const nM of rM) aM.set(nM, PM), PM += nM.length;
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L295-L303` → after: `L16075-L16076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16075-L16076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16075-L16076) · [Before (L295-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L295-L303)

```diff
-   },
-   38947: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => TQ
-     });
-     var wQ = XQ(38956);
-     const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
-       ...QQ
-     } : null : QQ.clone(WQ) : null;
+     class qP {}
+     qP.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L305-L333` → after: `L16078-L16171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16078-L16171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16078-L16171) · [Before (L305-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L305-L333)

```diff
-       static DeepCopy(QQ, WQ, XQ, TQ) {
-         let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const sQ = function(QQ) {
-           const WQ = [];
-           do {
-             const XQ = Object.getOwnPropertyNames(QQ);
-             for (const QQ of XQ) - 1 === WQ.indexOf(QQ) && WQ.push(QQ)
-           } while (QQ = Object.getPrototypeOf(QQ));
-           return WQ
-         }(QQ);
-         for (const PQ of sQ) {
-           if ("_" === PQ[0] && (!TQ || -1 === TQ.indexOf(PQ))) continue;
-           if (PQ.endsWith("Observable")) continue;
-           if (XQ && -1 !== XQ.indexOf(PQ)) continue;
-           const sQ = QQ[PQ],
-             gQ = typeof sQ;
- ... (13 more removed lines; see GitHub link above)
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
+           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+         this._from = MM, this._to = rM, this._step = iM, this._i = MM
+       }
+       next() {
+         if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
+         const MM = this._i;
+         return this._i += this._step, MM
+       }
+       reset() {
+         return this._i = this._from, this
+       }
+     }
+     class VP extends IP {
+ ... (78 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L338-L408` → after: `L16194-L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR16194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L16194-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/253.js#L16194-L16197) · [Before (L338-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/253.js#L338-L408)

```diff
-   },
-   38956: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => wQ
-     });
-     class wQ {
-       static _CheckLimit(QQ, WQ) {
-         let XQ = wQ._LogLimitOutputs[QQ];
-         return XQ ? XQ.current++ : (XQ = {
-           limit: WQ,
-           current: 1
-         }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
-       }
-       static _GenerateLimitMessage(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const XQ = wQ._LogLimitOutputs[QQ];
- ... (55 more removed lines; see GitHub link above)
+     VP.DefaultOptions = {
+       unit: aP.meter,
+       exportInstances: !1
+     }, VP._PositionKind = "position", VP._R_BJS_TO_3MF = fM.d.RotationX(Math.PI / 2).multiply(fM.d.Scaling(1, -1, 1))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/254.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/254.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L4-L17` → after: `L4-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L4-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L4-L46) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L4-L17)

```diff
-   39085: (QQ, WQ, XQ) => {
-     var wQ = {
-       "./cape_cow_cream.png": 28325,
-       "./cape_cow_normal.png": 28327,
-       "./cape_creator_level1.png": 28335,
-       "./cape_creator_level2.png": 28337,
-       "./cape_creator_level3.png": 28343,
-       "./cape_none.png": 28352,
-       "./cape_pig.png": 28358,
-       "./cape_sheep.png": 28360,
-       "./cape_super.png": 28368,
-       "./cape_super_inverted.png": 28376,
-       "./cape_youtuber.png": 28380
-     };
+   38064: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => SM
+     });
+     var OM = iM(38068);
+     class SM {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     SM.Instances = [], SM.OnEnginesDisposedObservable = new OM.d, SM._LastCreatedScene = null, SM.UseFallbackTexture = !0, SM.FallbackTexture = ""
+   },
+   38056: (MM, rM, iM) => {
+ ... (27 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L20-L21` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L49) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L20-L21)

```diff
-       var WQ = TQ(QQ);
-       return XQ(WQ)
+       MM.updateFlag = OM._UpdateFlagSeed++
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L24-L27` → after: `L52-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L52-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L52-L1964) · [Before (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L24-L27)

```diff
-     function TQ(QQ) {
-       if (!XQ.o(wQ, QQ)) {
-         var WQ = new Error("Cannot find module '" + QQ + "'");
-         throw WQ.code = "MODULE_NOT_FOUND", WQ
+     function jM(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const SM = MM.HOM(),
+         jM = rM.HOM(),
+         aM = SM[0],
+         PM = SM[1],
+         nM = SM[2],
+         QM = SM[3],
+         zM = SM[4],
+         LM = SM[5],
+         mM = SM[6],
+         HM = SM[7],
+         hM = SM[8],
+         JM = SM[9],
+         dM = SM[10],
+         yM = SM[11],
+ ... (1897 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L29-L67` → after: `L1966-L2262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1966-L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L1966-L2262) · [Before (L29-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L29-L67)

```diff
-       return wQ[QQ]
-     }
-     qQ.keys = function() {
-       return Object.keys(wQ)
-     }, qQ.resolve = TQ, QQ.exports = qQ, qQ.id = 39085
-   },
-   41401: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       openCharacterPreview: () => NQ
-     });
-     var wQ = XQ(38385),
-       qQ = XQ(2997),
-       TQ = XQ(646),
-       zQ = XQ(37437),
-       sQ = XQ(2318),
-       FQ = XQ(37428),
- ... (23 more removed lines; see GitHub link above)
+       toString() {
+         return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
+       }
+       toArray() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (!MM) return this._m;
+         const iM = this._m;
+         for (let OM = 0; OM < 16; OM++) MM[rM + OM] = iM[OM];
+         return this
+       }
+       HOM() {
+         return this._m
+       }
+       cz(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+ ... (281 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L69` → after: `L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2264) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L69)

```diff
-           this.nodes[XQ].rotationQuaternion.set(WQ[QQ], WQ[QQ + 1], WQ[QQ + 2], WQ[QQ + 3])
+           rM.x = this._m[iM + 0], rM.y = this._m[iM + 1], rM.z = this._m[iM + 2], rM.w = this._m[iM + 3]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L72-L157` → after: `L2268-L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2268-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2268-L2269) · [Before (L72-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L72-L157)

```diff
-     }
- 
-     function vQ(QQ) {
-       QQ.unfreezeWorldMatrix();
-       for (const WQ of QQ.getChildren()) vQ(WQ)
-     }
- 
-     function dQ(QQ, WQ) {
-       QQ.isVisible = WQ;
-       for (const XQ of QQ.getChildMeshes()) XQ.isVisible = WQ
-     }
-     class HQ {
-       constructor(QQ, WQ, XQ) {
-         this.cB = QQ, this.thinInstMgr = WQ, this.lE = XQ, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
-       }
-       loadModel(QQ, WQ, XQ) {
- ... (70 more removed lines; see GitHub link above)
+       setRow(MM, rM) {
+         return this.setRowFromFloats(MM, rM.x, rM.y, rM.z, rM.w)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L159-L160` → after: `L2271-L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2271-L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2271-L2273) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L159-L160)

```diff
-       writePoses(QQ) {
-         for (const WQ of this.shownBones) WQ.write(QQ)
+       transpose() {
+         const MM = new JM;
+         return JM.TransposeToRef(this, MM), MM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L162-L234` → after: `L2275-L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2275-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2275-L2443) · [Before (L162-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L162-L234)

```diff
-     }
-     var aQ = XQ(37451),
-       lQ = (XQ(41326), XQ(40732), XQ(41335), XQ(34548)),
-       hQ = XQ(41409);
-     let iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ;
-     const SQ = document.createElement("canvas");
-     async function tQ() {
-       await new Promise((QQ => {
-         setTimeout((() => {
-           QQ()
-         }), 100)
-       }))
-     }
-     SQ.classList.add("CharCustomisationPreviewCanvas");
-     const oQ = {};
- 
- ... (57 more removed lines; see GitHub link above)
+       transposeToRef(MM) {
+         return JM.TransposeToRef(this, MM), MM
+       }
+       setRowFromFloats(MM, rM, iM, OM, SM) {
+         if (MM < 0 || MM > 3) return this;
+         const jM = 4 * MM;
+         return this._m[jM + 0] = rM, this._m[jM + 1] = iM, this._m[jM + 2] = OM, this._m[jM + 3] = SM, this.markAsUpdated(), this
+       }
+       scale(MM) {
+         const rM = new JM;
+         return this.scaleToRef(MM, rM), rM
+       }
+       scaleToRef(MM, rM) {
+         for (let iM = 0; iM < 16; iM++) rM._m[iM] = this._m[iM] * MM;
+         return rM.markAsUpdated(), rM
+       }
+ ... (153 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L236-L240` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2445) · [Before (L236-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L236-L240)

```diff
-         oQ[QQ] && (await oQ[QQ], await tQ()), await AQ.whenReadyAsync(), await new Promise((QQ => {
-           AQ.onAfterRenderObservable.addOnce((() => {
-             QQ()
-           }))
-         }))
+         return aM[12] = 0, aM[13] = 0, aM[14] = 0, aM[15] = 1, iM.markAsUpdated(), iM
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L242-L243` → after: `L2447-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2447-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2447-L2449) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L242-L243)

```diff
-       setOrbit(QQ) {
-         YQ(QQ)
+       static RotationYawPitchRoll(MM, rM, iM) {
+         const OM = new JM;
+         return JM.RotationYawPitchRollToRef(MM, rM, iM, OM), OM
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L245-L246` → after: `L2451-L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2451-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2451-L2452) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L245-L246)

```diff
-       resetCamera() {
-         cQ.inertialAlphaOffset = 0, cQ.inertialBetaOffset = 0, cQ.inertialRadiusOffset = 0, YQ(lQ.b[this.framing])
+       static RotationYawPitchRollToRef(MM, rM, iM, OM) {
+         return hM.RotationYawPitchRollToRef(MM, rM, iM, dM.Quaternion[0]), dM.Quaternion[0].toRotationMatrix(OM), OM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L248-L249` → after: `L2454-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2454-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2454-L2456) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L248-L249)

```diff
-       resize(QQ, WQ) {
-         eQ(QQ, WQ)
+       static Scaling(MM, rM, iM) {
+         const OM = new JM;
+         return JM.ScalingToRef(MM, rM, iM, OM), OM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L251-L252` → after: `L2458-L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2458-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2458-L2733) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L251-L252)

```diff
-       close() {
-         this.closed || (this.closed = !0, nQ--, 0 === nQ && iQ.stopRenderLoop())
+       static ScalingToRef(MM, rM, iM, OM) {
+         return JM.FromValuesToRef(MM, 0, 0, 0, 0, rM, 0, 0, 0, 0, iM, 0, 0, 0, 0, 1, OM), OM._updateIdentityStatus(1 === MM && 1 === rM && 1 === iM), OM
+       }
+       static Translation(MM, rM, iM) {
+         const OM = new JM;
+         return JM.TranslationToRef(MM, rM, iM, OM), OM
+       }
+       static TranslationToRef(MM, rM, iM, OM) {
+         return JM.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, MM, rM, iM, 1, OM), OM._updateIdentityStatus(0 === MM && 0 === rM && 0 === iM), OM
+       }
+       static Lerp(MM, rM, iM) {
+         const OM = new JM;
+         return JM.LerpToRef(MM, rM, iM, OM), OM
+       }
+       static LerpToRef(MM, rM, iM, OM) {
+         const SM = OM._m,
+ ... (260 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L256-L335` → after: `L2744-L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2744-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2744-L2750) · [Before (L256-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L256-L335)

```diff
-     function YQ(QQ) {
-       let {
-         yaw: WQ,
-         pitch: XQ,
-         radius: wQ,
-         target: qQ
-       } = QQ;
-       cQ.alpha = WQ, cQ.beta = XQ, wQ && (cQ.radius = wQ), qQ && cQ.target.set(qQ[0], qQ[1], qQ[2])
-     }
- 
-     function NQ(QQ, WQ) {
-       return QQ.appendChild(SQ), iQ || function() {
-         iQ = new PQ.b(SQ, !0, {
-           preserveDrawingBuffer: !0
-         });
-         const QQ = (0, qQ.f)();
- ... (64 more removed lines; see GitHub link above)
+     function UM() {
+       EM || (EM = !0, Object.defineProperties(LM.prototype, {
+         dimension: {
+           value: [2]
+         },
+         rank: {
+           value: 1
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L337-L355` → after: `L2752-L2754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2752-L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2752-L2754) · [Before (L337-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L337-L355)

```diff
-       },
-       rQ = {
-         name: "Cape",
-         className: "CapeMaterialPlugin",
-         priority: 200,
-         defines: (QQ, WQ) => ({
-           ...(0, wQ.b)("CAPE"),
-           BLOXD_CAPE_BONES: `${QQ}`,
-           BLOXD_CAPE_MAX_Y: (0, qQ.ob)(WQ)
-         }),
-         getUniforms(QQ) {
-           return (0, TQ.d)(function(QQ) {
-             const WQ = [];
-             for (let XQ = 0; XQ < QQ; XQ++) WQ.push({
-               name: `skele${XQ}`,
-               type: "highp vec3"
- ... (3 more removed lines; see GitHub link above)
+       }), Object.defineProperties(mM.prototype, {
+         dimension: {
+           value: [3]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L357-L358` → after: `L2756-L2761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2756-L2761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2756-L2761) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L357-L358)

```diff
-         bind(QQ) {
-           for (let WQ = 0; WQ < this.skeleLen; WQ++) QQ.updateVector3(`skele${WQ}`, JQ.gXQ(this.skele, 3 * WQ))
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(HM.prototype, {
+         dimension: {
+           value: [4]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L360-L361` → after: `L2763-L2768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2763-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2763-L2768) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L360-L361)

```diff
-         uniformsVersion() {
-           return this.bonesVersion
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(hM.prototype, {
+         dimension: {
+           value: [4]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L363-L368` → after: `L2770-L2771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2770-L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2770-L2771) · [Before (L363-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L363-L368)

```diff
-         getCustomCode(QQ, WQ) {
-           return "vertex" !== QQ ? null : {
-             CUSTOM_VERTEX_DEFINITIONS: FQ(WQ),
-             CUSTOM_VERTEX_UPDATE_POSITION: PQ(WQ, this.skeleLen),
-             CUSTOM_VERTEX_UPDATE_NORMAL: gQ(WQ)
-           }
+         rank: {
+           value: 1
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L370-L399` → after: `L2773-L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2773-L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2773-L2775) · [Before (L370-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L370-L399)

```diff
-       };
-     (0, zQ.i)(rQ)
-   },
-   38966: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => gQ,
-       e: () => JQ
-     });
-     var wQ = XQ(37462),
-       qQ = XQ(37715),
-       TQ = XQ(37468),
-       zQ = XQ(37477);
-     const sQ = "bloxdTextLodBias",
-       FQ = [{
-         name: sQ,
-         type: "float"
- ... (14 more removed lines; see GitHub link above)
+       }), Object.defineProperties(JM.prototype, {
+         dimension: {
+           value: [4, 4]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L401-L411` → after: `L2777-L2778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2777-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2777-L2778) · [Before (L401-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L401-L411)

```diff
-         uniformsVersion: () => 0,
-         getCustomCode(QQ, WQ) {
-           if ("fragment" !== QQ) return null;
-           const XQ = (0, TQ.H)(WQ, `vec4 ${PQ}(sampler2D s, vec2 uv, float bias)`, `fn ${PQ}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
-             wQ = (0, TQ.H)(WQ, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
-             qQ = `${(0,TQ.T)(WQ,"vDiffuseUV")} + uvOffset`,
-             zQ = (0, TQ.H)(WQ, `${PQ}(diffuseSampler, ${qQ}, ${(0,TQ.Jb)(WQ,sQ)})`, `${PQ}(diffuseSampler, diffuseSamplerSampler, ${qQ}, ${(0,TQ.Jb)(WQ,sQ)})`);
-           return {
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${XQ} {\n\t\t\t\t\t${(0,TQ.A)(WQ,"vec4","texel",wQ)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,TQ … [truncated]
-             [(0, TQ.C)(WQ)]: `baseColor = ${zQ};`
-           }
+         rank: {
+           value: 2
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L413-L465` → after: `L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2780) · [Before (L413-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L413-L465)

```diff
-       };
-     (0, zQ.i)(JQ)
-   },
-   41335: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       CapeMaterialPlugin: () => GQ,
-       HueTintMaterialPlugin: () => UQ,
-       LifeformMaterialPlugin: () => bQ,
-       OverlayMaterialPlugin: () => vQ
-     });
-     var wQ = XQ(41344),
-       qQ = XQ(38293);
-     class TQ extends((0, wQ.i)(qQ.d)) {}(0, wQ.l)(qQ.d, TQ);
-     var zQ = XQ(37456);
-     class sQ extends((0, wQ.i)(zQ.e)) {}(0, wQ.l)(zQ.e, sQ);
-     var FQ = XQ(38129);
- ... (37 more removed lines; see GitHub link above)
+       }), (0, QM.e)("BABYLON.Vector2", LM), (0, QM.e)("BABYLON.Vector3", mM), (0, QM.e)("BABYLON.Vector4", HM), (0, QM.e)("BABYLON.Matrix", JM))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L468` → after: `L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2783) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L468)

```diff
-   41344: (QQ, WQ, XQ) => {
+   38068: (MM, rM, iM) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L470-L472` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2785) · [Before (L470-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L470-L472)

```diff
-       e: () => tQ,
-       i: () => DQ,
-       l: () => NQ
+       d: () => aM
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L474-L522` → after: `L2787-L2799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2787-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2787-L2799) · [Before (L474-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L474-L522)

```diff
-     var wQ = XQ(40530),
-       qQ = XQ(41348),
-       TQ = XQ(41394),
-       zQ = XQ(41354),
-       sQ = XQ(38094),
-       FQ = XQ(38107),
-       PQ = XQ(38114),
-       gQ = XQ(38116),
-       JQ = XQ(37490),
-       rQ = XQ(37492),
-       IQ = XQ(41357),
-       jQ = XQ(37477),
-       BQ = XQ(37480),
-       yQ = XQ(37468);
- 
-     function VQ(QQ, WQ) {
- ... (33 more removed lines; see GitHub link above)
+     const OM = "undefined" !== typeof WeakRef;
+     class SM {
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           iM = arguments.length > 2 ? arguments[2] : void 0,
+           OM = arguments.length > 3 ? arguments[3] : void 0;
+         this.initialize(MM, rM, iM, OM)
+       }
+       initialize(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           iM = arguments.length > 2 ? arguments[2] : void 0,
+           OM = arguments.length > 3 ? arguments[3] : void 0;
+         return this.mask = MM, this.skipNextObservers = rM, this.target = iM, this.currentTarget = OM, this
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L562-L564` → after: `L2802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2802) · [Before (L562-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L562-L564)

```diff
-     const dQ = new WeakMap;
-     var HQ = XQ(38125);
-     class aQ extends(DQ(FQ.h)) {
+     class jM {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L566-L584` → after: `L2804-L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2804-L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2804-L2805) · [Before (L566-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L566-L584)

```diff
-         super(QQ, WQ), this.loaded = new Set, this.mirrors = void 0, this.mirrors = WQ.textures.map((QQ => QQ.mirror)), this.mirrors.forEach(((QQ, WQ) => {
-           QQ.onLoadObservable.add((QQ => {
-             this.setTextureArrayData(QQ, WQ).catch((QQ => {
-               console.error(`Failed to build the texture arrays, at atlas ${WQ}`, QQ)
-             }))
-           }))
-         })), (0, HQ.j)(WQ, QQ.shaderLanguage)
-       }
-       async setTextureArrayData(QQ, WQ) {
-         const XQ = this.featureState,
-           {
-             width: wQ,
-             height: qQ
-           } = QQ.getSize(),
-           TQ = this._material.shaderLanguage;
-         if (!XQ.useWebGL2) return void(0, HQ.g)(this._material, XQ, WQ, wQ, Math.round(qQ / wQ), TQ);
- ... (3 more removed lines; see GitHub link above)
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         this.callback = MM, this.mask = rM, this.scope = iM, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L586-L602` → after: `L2807-L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2807-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2807-L2809) · [Before (L586-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L586-L602)

```diff
-     }
-     var lQ = XQ(41373),
-       hQ = XQ(40561),
-       iQ = XQ(37367),
-       cQ = XQ(41379),
-       AQ = XQ(40661),
-       RQ = XQ(40555),
-       EQ = XQ(41320),
-       CQ = XQ(37855),
-       uQ = XQ(41386);
-     class LQ extends lQ.b {
-       getData() {
-         return null
-       }
-       _rebuild() {}
-       restore() {
- ... (1 more removed lines; see GitHub link above)
+       remove() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._remove && this._remove(MM)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L605-L629` → after: `L2812-L2820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2812-L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2812-L2820) · [Before (L605-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L605-L629)

```diff
-     const kQ = {
-       Mesh: cQ.b,
-       TransformNode: EQ.b,
-       Tj: lQ.b,
-       VertexBuffer: lQ.f,
-       BoundingInfo: hQ.e,
-       vj: iQ.vj,
-       ArenaBuffer: LQ,
-       SubMesh: RQ.b,
-       VertexData: AQ.e,
-       MirroredGeometry: uQ.b,
-       meshFromArrays: uQ.f,
-       plainMeshFromArrays: uQ.h
-     };
-     (0, CQ.f)(kQ);
-     var fQ = XQ(37698);
- ... (9 more removed lines; see GitHub link above)
+     class aM {
+       static FromPromise(MM, rM) {
+         const iM = new aM;
+         return MM.then((MM => {
+           iM.notifyObservers(MM)
+         })).catch((MM => {
+           if (!rM) throw MM;
+           rM.notifyObservers(MM)
+         })), iM
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L631-L632` → after: `L2822-L2823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2822-L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2822-L2823) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L631-L632)

```diff
-       dispose(QQ) {
-         (0, fQ.n)(this._material), super.dispose(QQ)
+       get observers() {
+         return this._observers
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L634-L678` → after: `L2825-L2827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2825-L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2825-L2827) · [Before (L634-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L634-L678)

```diff
-     }
- 
-     function tQ(QQ, WQ) {
-       if (!(WQ instanceof wQ.StandardMaterial) || WQ.specularTexture) return;
-       const {
-         r: XQ,
-         g: qQ,
-         b: TQ
-       } = WQ.specularColor;
-       0 === XQ && 0 === qQ && 0 === TQ && (QQ.SPECULARTERM = !1)
-     }(0, gQ.i)({
-       disableUnusedSpecularTerm: tQ
-     });
-     var oQ = XQ(37582),
-       eQ = XQ(37866);
-     const nQ = new RegExp(`^#define ${PQ.d}\\s*$`, "m");
- ... (29 more removed lines; see GitHub link above)
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.notifyIfTriggered = rM, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new SM(0), MM && (this._onObserverAdded = MM)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L680-L681` → after: `L2829-L2842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2829-L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2829-L2842) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L680-L681)

```diff
-       dispose(QQ) {
-         this.zj = !0, super.dispose(QQ)
+       add(MM) {
+         let rM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           iM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if (!MM) return null;
+         const SM = new jM(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
+         SM.unregisterOnNextCall = iM, rM ? this._observers.unshift(SM) : this._observers.push(SM), this._onObserverAdded && this._onObserverAdded(SM), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(SM, this._lastNotifiedValue);
+         const aM = OM ? new WeakRef(this) : {
+           deref: () => this
+         };
+         return SM._remove = function() {
+           let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           const rM = aM.deref();
+           rM && (MM ? rM.remove(SM) : rM._remove(SM))
+         }, SM
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L683-L862` → after: `L2844-L2855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2844-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2844-L2855) · [Before (L683-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L683-L862)

```diff
-     }
-     const YQ = new Map;
- 
-     function NQ(QQ, WQ) {
-       YQ.set(QQ, WQ)
-     }
-     NQ(sQ.d, pQ), NQ(FQ.h, aQ), NQ(PQ.i, xQ), NQ(gQ.k, SQ), (0, JQ.e)({
-       create: (QQ, WQ) => {
-         const XQ = new wQ.StandardMaterial(QQ.name, WQ);
-         return (0, oQ.r)(QQ, XQ), XQ.detailMap._pluginDefineNames
-       },
-       write: (QQ, WQ, XQ) => {
-         (0, oQ._)(QQ.mirror, WQ, XQ)
-       },
-       addFeature: (QQ, WQ, XQ) => {
-         const wQ = YQ.get(WQ.feature);
- ... (164 more removed lines; see GitHub link above)
+       addOnce(MM) {
+         return this.add(MM, void 0, void 0, void 0, !0)
+       }
+       remove(MM) {
+         if (!MM) return !1;
+         MM._remove = null;
+         return -1 !== this._observers.indexOf(MM) && (this._deferUnregister(MM), !0)
+       }
+       removeCallback(MM, rM) {
+         for (let iM = 0; iM < this._observers.length; iM++) {
+           const OM = this._observers[iM];
+           if (!OM._willBeUnregistered && (OM.callback === MM && (!rM || rM === OM.scope))) return this._deferUnregister(OM), !0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L864` → after: `L2857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2857) · [Before (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L864)

```diff
-         return JQ.relink(), PQ
+         return !1
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L866-L867` → after: `L2859-L2862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2859-L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2859-L2862) · [Before (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L866-L867)

```diff
-       removeVerticesData(QQ) {
-         this.releaseUnlessInstanced(QQ), super.removeVerticesData(QQ)
+       _deferUnregister(MM) {
+         MM._willBeUnregistered || (this._numObserversMarkedAsDeleted++, MM.unregisterOnNextCall = !1, MM._willBeUnregistered = !0, setTimeout((() => {
+           this._remove(MM)
+         }), 0))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L869-L870` → after: `L2864-L2868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2864-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2864-L2868) · [Before (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L869-L870)

```diff
-       dispose() {
-         this.release(), super.dispose()
+       _remove(MM) {
+         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!MM) return !1;
+         const iM = this._observers.indexOf(MM);
+         return -1 !== iM && (rM && this._numObserversMarkedAsDeleted--, this._observers.splice(iM, 1), !0)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L872-L874` → after: `L2870-L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2870-L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2870-L2871) · [Before (L872-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L872-L874)

```diff
-       releaseUnlessInstanced(QQ) {
-         var WQ;
-         QQ && null !== (WQ = this.getVertexBuffer(QQ)) && void 0 !== WQ && WQ.getIsInstanced() || this.release()
+       makeObserverTopPriority(MM) {
+         this._remove(MM, !1), this._observers.unshift(MM)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L876-L877` → after: `L2873-L2874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2873-L2874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2873-L2874) · [Before (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L876-L877)

```diff
-       release() {
-         this.model && ((0, PQ.u)(this.model), this.model = null)
+       makeObserverBottomPriority(MM) {
+         this._remove(MM, !1), this._observers.push(MM)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L879-L896` → after: `L2876-L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2876-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2876-L2900) · [Before (L879-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L879-L896)

```diff
-     }
- 
-     function JQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new sQ.b(QQ, XQ);
-       const qQ = (0, PQ.m)(WQ),
-         {
-           positions: TQ,
-           normals: JQ,
-           uvs: rQ,
-           indices: IQ,
-           named: jQ = {}
-         } = WQ,
-         BQ = new FQ.e;
-       BQ.positions = TQ, BQ.normals = null !== JQ && void 0 !== JQ ? JQ : null, BQ.uvs = null !== rQ && void 0 !== rQ ? rQ : null, BQ.indices = IQ;
-       const yQ = new gQ(zQ.d.RandomId(), XQ, BQ, !1, wQ);
-       for (const {
- ... (2 more removed lines; see GitHub link above)
+       notifyObservers(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           iM = arguments.length > 2 ? arguments[2] : void 0,
+           OM = arguments.length > 3 ? arguments[3] : void 0,
+           SM = arguments.length > 4 ? arguments[4] : void 0;
+         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = MM), !this._observers.length) return !0;
+         const jM = this._eventState;
+         jM.mask = rM, jM.target = iM, jM.currentTarget = OM, jM.skipNextObservers = !1, jM.lastReturnValue = MM, jM.userInfo = SM;
+         for (const aM of this._observers)
+           if (!aM._willBeUnregistered && (aM.mask & rM && (aM.unregisterOnNextCall && this._deferUnregister(aM), aM.scope ? jM.lastReturnValue = aM.callback.apply(aM.scope, [MM, jM]) : jM.lastReturnValue = aM.callback(MM, jM)), jM.skipNextObservers)) return !1;
+         return !0
+       }
+       notifyObserver(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = rM), MM._willBeUnregistered) return;
+         const OM = this._eventState;
+ ... (9 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L898-L964` → after: `L2902-L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2902-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/254.js#L2902-L2916) · [Before (L898-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/254.js#L898-L964)

```diff
-         of qQ.vertexAttributes) zQ in jQ && wQ.setVerticesData(zQ, jQ[zQ], !1, sQ);
-       return yQ.link(qQ), wQ
-     }
- 
-     function rQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const qQ = new sQ.b(QQ, XQ),
-         {
-           positions: TQ,
-           normals: zQ,
-           uvs: PQ,
-           indices: gQ
-         } = WQ;
-       return Object.assign(new FQ.e, {
-         positions: TQ,
-         normals: zQ,
- ... (51 more removed lines; see GitHub link above)
+         this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
+       }
+       cleanLastNotifiedState() {
+         this._hasNotified = !1, this._lastNotifiedValue = void 0
+       }
+       clone() {
+         const MM = new aM;
+         return MM._observers = this._observers.slice(0), MM
+       }
+       hasSpecificMask() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
+         for (const rM of this._observers)
+           if (rM.mask & MM || rM.mask === MM) return !0;
+         return !1
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/255.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/255.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L4-L8` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L4-L9) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L4-L8)

```diff
-   41294: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       openMobLineupPreview: () => SQ,
-       openMobPreview: () => fQ,
-       openPetPreview: () => tQ
+   38173: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => LM,
+       h: () => mM,
+       i: () => JM,
+       j: () => HM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L10-L57` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L11-L14) · [Before (L10-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L10-L57)

```diff
-     var wQ = XQ(40089),
-       qQ = XQ(40349),
-       TQ = XQ(41298),
-       zQ = XQ(37539),
-       sQ = XQ(37367),
-       FQ = XQ(40517),
-       PQ = XQ(41320),
-       gQ = XQ(38756),
-       JQ = XQ(37451),
-       rQ = XQ(37428),
-       IQ = XQ(37358),
-       jQ = XQ(38654),
-       BQ = XQ(38647),
-       yQ = XQ(38385),
-       VQ = XQ(38438),
-       DQ = XQ(38415),
- ... (32 more removed lines; see GitHub link above)
+     var OM = iM(38048),
+       SM = iM(38044),
+       jM = iM(38074),
+       aM = iM(38085);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L60-L62` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L17) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L60-L62)

```diff
-       return hQ[QQ] ??= (0, yQ.x)(QQ, cQ().cB, !0).catch((WQ => {
-         throw delete hQ[QQ], WQ
-       })), hQ[QQ]
+       return Math.pow(MM, SM.h)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L66-L69` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L21) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L66-L69)

```diff
-       let WQ = iQ.get(QQ);
-       return WQ || (WQ = pQ.z[QQ].loadModel(cQ().cB, !1).then((QQ => (QQ.UH(!1), QQ)), (WQ => {
-         throw iQ.delete(QQ), WQ
-       })), iQ.set(QQ, WQ)), WQ
+       return MM <= .04045 ? .0773993808 * MM : Math.pow(.947867299 * (MM + .055), 2.4)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L73-L130` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L25) · [Before (L73-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L73-L130)

```diff
-       var WQ, XQ, wQ;
-       let {
-         mobType: qQ,
-         variation: TQ,
-         animation: zQ
-       } = QQ, FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, bQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const HQ = null !== (WQ = null === FQ || void 0 === FQ ? void 0 : FQ.size) && void 0 !== WQ ? WQ : 1,
-         aQ = null !== (XQ = null === FQ || void 0 === FQ ? void 0 : FQ.cosmetics) && void 0 !== XQ ? XQ : [],
-         lQ = null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.Qp) && void 0 !== wQ ? wQ : null;
-       let hQ = !1,
-         iQ = null,
-         EQ = null;
-       const {
-         engine: CQ,
-         cB: uQ
-       } = cQ(), LQ = uQ.onBeforeRenderObservable.add((() => {
- ... (42 more removed lines; see GitHub link above)
+       return Math.pow(MM, SM.f)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L134-L160` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L29) · [Before (L134-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L134-L160)

```diff
-       let {
-         mobType: WQ,
-         variation: XQ,
-         metaInfo: wQ,
-         tamed: qQ
-       } = QQ, TQ = !1, zQ = null, sQ = 0;
-       const FQ = (0, GQ.f)(),
-         PQ = FQ.nj.aE,
-         gQ = QQ => {
-           sQ += aQ * (QQ / 1e3) % (2 * Math.PI), PQ.setRotationEulerY(zQ, sQ)
-         };
-       return AQ(WQ).then((QQ => {
-         if (TQ) return;
-         zQ = (0, yQ.l)(WQ, HQ, !0, !0), PQ.setPosition(zQ, 0, -HQ, 0), QQ.meshApi.updateVariation(zQ, WQ, XQ);
-         const sQ = {
-           wool: "Sheared" !== wQ,
- ... (11 more removed lines; see GitHub link above)
+       return MM <= .0031308 ? 12.92 * MM : 1.055 * Math.pow(MM, .41666) - .055
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L163-L187` → after: `L32-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L32-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L32-L324) · [Before (L163-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L163-L187)

```diff
-       constructor(QQ, WQ) {
-         this.place = WQ, this.remove = null;
-         const {
-           engine: XQ,
-           cB: wQ,
-           canvas: qQ
-         } = cQ();
-         QQ.appendChild(qQ), XQ.resize(), XQ.runRenderLoop((() => {
-           wQ.render()
-         }))
-       }
-       show(QQ) {
-         var WQ;
-         null === (WQ = this.remove) || void 0 === WQ || WQ.call(this), this.remove = this.place(QQ)
-       }
-       resize(QQ, WQ) {
- ... (9 more removed lines; see GitHub link above)
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = MM, this.g = rM, this.b = iM
+       }
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
+       }
+       getClassName() {
+         return "Color3"
+       }
+       getHashCode() {
+         let MM = 255 * this.r | 0;
+         return MM = 397 * MM ^ 255 * this.g, MM = 397 * MM ^ 255 * this.b, MM
+       }
+ ... (277 more added lines; see GitHub link above)
```
