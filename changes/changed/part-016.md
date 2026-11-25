# Changed — Bundle Modifications Report (Part 016 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `16 / 56` (**314** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/89.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/89.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b)

#### 40. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L921-L927` → after: `L416-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L416-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L416-L431) · [Before (L921-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L921-L927)

```diff
-         await new Promise(((XQ, wQ) => {
-           const qQ = WQ.transaction(zQ, "readwrite");
-           qQ.objectStore(zQ).delete(QQ), qQ.oncomplete = () => {
-             XQ()
-           }, qQ.onerror = () => {
-             var QQ;
-             wQ(null !== (QQ = qQ.error) && void 0 !== QQ ? QQ : new Error("Failed to clear directory handle"))
+         return function(MM) {
+           const {
+             holder: rM,
+             key: iM,
+             onNamespace: OM,
+             inSecureContext: SM
+           } = MM, jM = rM(), aM = Er(jM, iM);
+           if (!aM) return !(SM && !0 === globalThis.isSecureContext);
+           const PM = cr(aM, MM);
+           if (!Mi(PM, MM)) return !1;
+           if (OM) {
+             const rM = globalThis.WebAssembly;
+             if (rM !== jM && null !== rM && ("object" === typeof rM || "function" === typeof rM)) {
+               const OM = Qr(rM, iM);
+               return OM === PM || void 0 === OM || Mi(OM, MM)
+             }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L929-L931` → after: `L433-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L433-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L433-L436) · [Before (L929-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L929-L931)

```diff
-         }))
-       } finally {
-         WQ.close()
+           return !0
+         }(MM)
+       } catch {
+         return !1
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L934-L941` → after: `L439-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L439-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L439-L442) · [Before (L934-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L934-L941)

```diff
-     async function BQ(QQ) {
-       const WQ = {
-         mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
-       };
-       return "granted" === await QQ.queryPermission(WQ) || "granted" === await QQ.requestPermission(WQ)
-     }
-     async function yQ(QQ) {
-       if (!gQ()) return null;
+ 
+     function ai(MM) {
+       const rM = `wh:${MM.code}`;
+       if ("punished" === MM.tier) return rM;
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L943-L951` → after: `L444-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L444-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L444-L446) · [Before (L943-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L943-L951)

```diff
-         const WQ = await window.showDirectoryPicker({
-           mode: "readwrite"
-         });
-         return await rQ(QQ, WQ), WQ
-       } catch (WQ) {
-         if (function(QQ) {
-             return QQ instanceof DOMException && "AbortError" === QQ.name
-           }(WQ)) return null;
-         throw WQ
+         return `${rM}${cM(Pi(MM))}`
+       } catch {
+         return `${rM}${cM(void 0)}`
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L956` → after: `L451-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L451-L453) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L956)

```diff
-       return QQ.startsWith(".") || PQ.has(QQ)
+       const rM = Er(MM.holder(), MM.key),
+         iM = void 0 === rM ? void 0 : cr(rM, MM);
+       return MM.onNamespace && !Si() && Mi(iM, MM) ? Qr(globalThis.WebAssembly, MM.key) : iM
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L960-L983` → after: `L457-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L457-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L457-L461) · [Before (L960-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L960-L983)

```diff
-       if (!QQ) return !0;
-       const WQ = QQ.split("/");
-       for (const XQ of WQ)
-         if ("" === XQ || "." === XQ || ".." === XQ) return !1;
-       return !0
-     }
-     async function pQ(QQ, WQ, XQ) {
-       for await (const [TQ, zQ] of QQ.entries()) {
-         if ("directory" === zQ.kind) {
-           if (VQ(TQ)) continue;
-           const QQ = WQ ? `${WQ}/${TQ}` : TQ;
-           if (!DQ(QQ)) continue;
-           await pQ(zQ, QQ, XQ);
-           continue
-         }
-         const QQ = WQ ? `${WQ}/${TQ}` : TQ;
- ... (8 more removed lines; see GitHub link above)
+       if (qr(MM)) return 5;
+       const rM = Mr(MM);
+       return Xr(rM) ? 4 : Kr(MM) ? 3 : fr(rM) ? function(MM) {
+         return sM(ar, sr, [MM])
+       }(rM) ? -1 : rM === kr ? 0 : 1 : 2
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L986-L1048` → after: `L464-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L464-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L464-L468) · [Before (L986-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L986-L1048)

```diff
-     function UQ(QQ) {
-       return !(!QQ || QQ !== QQ.trim() || QQ.startsWith("/") || QQ.includes("\\") || QQ.includes("\0")) && DQ(QQ)
-     }
-     async function bQ(QQ, WQ, XQ) {
-       const wQ = WQ.split("/"),
-         qQ = wQ[wQ.length - 1];
-       let TQ = QQ;
-       for (let zQ = 0; zQ < wQ.length - 1; zQ++) TQ = await TQ.getDirectoryHandle(wQ[zQ], {
-         create: XQ
-       });
-       return {
-         dir: TQ,
-         fileName: qQ
-       }
-     }
-     async function vQ(QQ, WQ, XQ) {
- ... (47 more removed lines; see GitHub link above)
+     function Qi() {
+       const MM = function() {
+         const MM = DM();
+         return eM === lM || eM === EM ? (sM = WM, pM = uM) : sM = aM, MM
+       }();
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1050-L1062` → after: `L470-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L470-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L470-L488) · [Before (L1050-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L1050-L1062)

```diff
-         const XQ = WQ.split("/");
-         let wQ = QQ;
-         for (const QQ of XQ) wQ = await wQ.getDirectoryHandle(QQ);
-         return wQ
-       } catch (XQ) {
-         if (XQ instanceof DOMException && ("NotFoundError" === XQ.name || "NotAllowedError" === XQ.name)) return null;
-         throw XQ
-       }
-     }
-     async function hQ(QQ, WQ) {
-       if ((0, wQ.t)(WQ) || (0, qQ.b)(WQ)) {
-         if ((0, qQ.b)(WQ)) {
-           if (await cQ(QQ, WQ) === sQ) throw new Error(`Refusing to remove a binary schematic: ${WQ}`)
+         if (null === ii || !qr(ii)) {
+           const MM = function() {
+             if (void 0 === Lr) return null;
+             let MM = Si() ? null : "wh:wa";
+             const rM = rM => {
+               null !== rM && (null === MM || ni(rM) > ni(MM)) && (MM = rM)
+             };
+             for (let iM = 0; iM < Ur.length; iM++) {
+               const MM = Ur[iM];
+               void 0 === MM || ji(MM) || rM(ai(MM))
+             }
+             rM((0, rr.l)());
+             for (let iM = 0; iM < tr.length; iM++) {
+               const MM = tr[iM];
+               void 0 === MM || ji(MM) || rM(Rr(MM))
+             }
+ ... (3 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1064` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L490-L491) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L1064)

```diff
-         await aQ(QQ, WQ)
+       } finally {
+         ZM(MM)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1067-L23014` → after: `L494-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L494-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L494-L496) · [Before (L1067-L23014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L1067-L23014)

```diff
-     async function iQ(QQ) {
-       if (QQ.size > 64) return sQ;
-       const WQ = await QQ.text();
-       return Array.from(WQ).some((QQ => {
-         const WQ = QQ.charCodeAt(0);
-         return WQ < 9 || WQ > 13 && WQ < 32 || 65533 === WQ
-       })) ? sQ : WQ
-     }
-     async function cQ(QQ, WQ) {
-       try {
-         const {
-           dir: XQ,
-           fileName: wQ
-         } = await bQ(QQ, WQ, !1);
-         return await iQ(await (await XQ.getFileHandle(wQ)).getFile())
-       } catch (XQ) {
- ... (21932 more removed lines; see GitHub link above)
+ 
+     function zi() {
+       Oi = !0
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L23018-L23422` → after: `L500-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L500-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L500-L504) · [Before (L23018-L23422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L23018-L23422)

```diff
-       return {
-         icon: "face-dizzy",
-         title: "wasmScreens:turnstilePageTitle",
-         help: "wasmScreens:turnstilePageHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:ok",
-         cancel: null
-       }
-     }
- 
-     function FQ(QQ, WQ, XQ) {
-       return {
-         icon: "wifi",
-         title: "wasmScreens:disconnectedTitle",
-         help: XQ ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
- ... (389 more removed lines; see GitHub link above)
+       if (Oi) return "wb";
+       if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Qi(), null !== ii) return ii;
+       if (void 0 === Lr) return "wn:unsupported";
+       const MM = (0, OM.t)();
+       return null === MM ? null : `wn:${MM}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/90.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/90.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L4-L7)

```diff
-   5111: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => GQ,
-       d: () => VQ
+   34915: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       EverythingMenu: () => MQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L9-L19` → after: `L8-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L8-L38) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L9-L19)

```diff
-     var wQ = XQ(1357),
-       qQ = XQ(31);
-     var TQ = XQ(402);
-     var zQ = XQ(663);
-     var sQ = XQ(2506),
-       FQ = XQ(5118),
-       PQ = XQ(5146),
-       gQ = XQ(5153);
-     class JQ {
-       constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
-         this.id = QQ, this.type = WQ, this.parameters = XQ, this.tearDownNotification = wQ, this.onDonePromise = qQ, this.resolveRequest = TQ
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1188),
+       PM = iM(1398),
+       nM = iM(2190),
+       QM = iM(1520),
+       zM = iM(1130),
+       LM = iM(1303);
+ 
+     function mM(MM) {
+       let {
+         items: rM,
+         link: iM,
+         onClick: OM,
+         selectedItemId: SM,
+ ... (15 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L22-L45` → after: `L96-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L96-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L96-L129) · [Before (L22-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L22-L45)

```diff
-     const rQ = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
-     class IQ {
-       constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
-         this.id = QQ, this.type = WQ, this.parameters = XQ, this.resolveRequest = wQ, this.onDonePromise = qQ, this.tearDownNotification = TQ, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.i … [truncated]
-         const zQ = VQ[WQ];
-         if (!zQ) throw console.error(`No QTE implementation registered for type: ${WQ}`), new Error(`No QTE implementation registered for type: ${WQ}`);
-         this.implementation = new zQ(XQ, (QQ => {
-           this.isCompleted = !0, this.resolveRequest(QQ)
-         }), this.tearDownNotification), this.setupInputHandlers()
-       }
-       setupInputHandlers() {
-         this.mouseSub = qQ.k.subscribe("QTEMouseState", (QQ => {
-           let {
-             isDown: WQ
-           } = QQ;
-           this.isCompleted || this.implementation.handleMouseInput(WQ)
- ... (8 more removed lines; see GitHub link above)
+     var HM = iM(2798),
+       hM = iM(1142),
+       JM = iM(2640),
+       dM = iM(3508),
+       yM = iM(83),
+       lM = iM(2039),
+       EM = iM(2385),
+       UM = iM(2389),
+       GM = iM(1763),
+       CM = iM(1396),
+       eM = iM(5401),
+       bM = iM(19),
+       wM = iM(34920);
+ 
+     function tM(MM) {
+       let {
+ ... (18 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L48-L59` → after: `L132-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L132-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L132-L276) · [Before (L48-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L48-L59)

```diff
-       cleanup() {
-         var QQ, WQ;
-         this.mouseSub && (qQ.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (QQ = this.stopInputActions) || void 0 === QQ || QQ.call(this), this.stopInputActions = null, null === (WQ = this.stopShellTicks) || void 0 === WQ || WQ.call(this), this.stopShellTicks = nu … [truncated]
-       }
-       async waitUntilDone() {
-         await this.onDonePromise
-       }
-       getState() {
-         return this.implementation.getState()
-       }
-       tearDown() {
-         this.isCompleted = !0, this.cleanup(), this.implementation.tearDown()
+       return (0, LM.jsxs)("div", {
+         className: "DeveloperToolsCategory",
+         children: [(0, LM.jsx)(eM.c, {
+           label: "Disable Ambient Occlusion",
+           checked: iM.disableAmbientOcclusion,
+           onClick: MM => {
+             bM.d.setClientEscMenuOptions({
+               disableAmbientOcclusion: MM
+             }), rM((() => eM.j))
+           },
+           circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
+         }), wM.devTools.supports("ambientLight") && (0, LM.jsx)(eM.h, {
+           name: "Ambient Lighting Intensity",
+           min: 0,
+           max: 1,
+           step: .01,
+ ... (129 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L62-L80` → after: `L279-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L279-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L279-L305) · [Before (L62-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L62-L80)

```diff
-     const jQ = new wQ.b,
-       BQ = new Map;
-     let yQ = null;
-     const VQ = {
-       progressBar: class {
-         constructor(QQ, WQ, XQ) {
-           var wQ, qQ, TQ, zQ;
-           this.resolveRequest = WQ, this.tearDownNotification = XQ, this.progress = 0, this.OQ = void 0, this.KQ = void 0, this.mQ = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
-           const sQ = QQ;
-           this.OQ = null !== (wQ = sQ.OQ) && void 0 !== wQ ? wQ : .075, this.KQ = null !== (qQ = sQ.KQ) && void 0 !== qQ ? qQ : 1, this.progress = null !== (TQ = sQ.ZQ) && void 0 !== TQ ? TQ : 30, this.mQ = null !== (zQ = sQ.mQ) && void 0 !== zQ && zQ, this.parameters = sQ
-         }
-         handleMouseInput(QQ) {
-           QQ && !this.isCompleted && (this.clickCount++, this.progress += this.KQ, this.progress >= 100 && this.complete(!0))
-         }
-         handleTick() {
-           if (!this.isCompleted)
- ... (3 more removed lines; see GitHub link above)
+ 
+     function TM(MM) {
+       const {
+         t: rM,
+         selectedLanguage: iM
+       } = (0, aM.A)(), {
+         userContext: SM
+       } = (0, hM.b)(), {
+         superRankInfo: jM
+       } = SM, PM = (0, NM.usePurchasesAllowed)(), nM = MM && ((0, fM.zc)(jM) || SM.ranksMayChange) && PM, {
+         accountId: QM,
+         data: zM
+       } = (0, xM.g)(FM.d, nM);
+       if ((0, OM.useEffect)((() => {
+           if (nM) return FM.d.watchAccount(), vM.e.addRefetchListener("billing", (MM => {
+             "reconnected" === MM ? FM.d.refreshAfterReconnect() : FM.d.refresh()
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L82-L83` → after: `L307-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L307-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L307-L344) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L82-L83)

```diff
-         complete(QQ) {
-           this.isCompleted = !0, this.resolveRequest(QQ)
+       }(zM, jM.tier, Date.now());
+       if (null === LM) return null;
+       const mM = LM.renews ? "store:renewsOn" : "store:endsOn",
+         HM = new Date(LM.at).toLocaleDateString((0, aM.n)(iM.code, mM), {
+           year: "numeric",
+           month: "short",
+           day: "numeric"
+         }),
+         JM = (0, NM.getBillingStore)(),
+         dM = null !== JM && (0, AM.k)(JM) ? function(MM, rM) {
+           var iM;
+           const OM = Object.values(MM.subscriptions).find((MM => MM.store === rM && !(0, AM.o)(MM.status)));
+           return void 0 === OM ? null : null !== (iM = OM.managementUrl) && void 0 !== iM ? iM : AM.r[rM]
+         }(zM, JM) : null;
+       return {
+         text: rM(mM, {
+ ... (22 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L85` → after: `L346-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L346-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L346-L412) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L85)

```diff
-         getState() {
+       }) : null
+     }
+     var rr = iM(1440),
+       ir = iM(1217),
+       Or = iM(5282),
+       Sr = iM(1548),
+       jr = iM(4052),
+       ar = iM(2378);
+ 
+     function Pr(MM) {
+       let {
+         showing: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, aM.A)(), {
+ ... (51 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L87-L97` → after: `L414-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L414-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L414-L442) · [Before (L87-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L87-L97)

```diff
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               progress: this.progress,
-               clickCount: this.clickCount
-             },
-             isActive: !0
-           }
-         }
-         tearDown() {
-           this.tearDownNotification()
+             key: "payments:nothingToRestore", failed: !1
+           };
+         case "dismissed":
+           return null
+       }
+     }
+ 
+     function Hr() {
+       const MM = (0, KM.usePageBillingClient)(),
+         {
+           userContext: rM
+         } = (0, hM.b)(),
+         [iM, SM] = (0, OM.useState)(!1),
+         [jM, aM] = (0, OM.useState)(null);
+       return {
+         restoring: iM,
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L100-L107` → after: `L489-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L489-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L489-L713) · [Before (L100-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L100-L107)

```diff
-       timedClick: class {
-         constructor(QQ, WQ, XQ) {
-           var wQ;
-           this.resolveRequest = WQ, this.tearDownNotification = XQ, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = QQ, this.timeWindowMs = null !== (wQ = this.parameters.wW) && void … [truncated]
-         }
-         handleMouseInput(QQ) {
-           if (!QQ || this.isCompleted) return;
-           Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
+       googlePlay: {
+         name: "Google Play",
+         ...Ur.Sb.googlePlay
+       },
+       discord: {
+         name: "Discord",
+         ...Ur.Sb.discord
+       }
+     };
+ 
+     function er(MM) {
+       let {
+         warning: rM,
+         subscriptions: iM
+       } = MM;
+       const {
+ ... (209 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L109-L111` → after: `L715-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L715-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L715-L768) · [Before (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L109-L111)

```diff
-         handleTick() {
-           if (this.isCompleted) return;
-           Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
+       }) : null
+     }
+     const kr = (0, OM.memo)((function(MM) {
+       var rM, iM;
+       let {
+         showing: SM,
+         inGame: nM
+       } = MM;
+       const {
+         t: zM,
+         selectedLanguage: mM
+       } = (0, aM.A)(), {
+         hideSocialLocationFrom: JM
+       } = (0, bM.m)(["hideSocialLocationFrom"]), dM = (0, NM.usePurchasesAllowed)(), lM = Hr(), EM = (0, HM.b)(), {
+         userContext: UM,
+         isUserContextUpdating: wM
+ ... (38 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L113-L114` → after: `L770-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L770-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L770-L1070) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L113-L114)

```diff
-         complete(QQ) {
-           this.isCompleted = !0, this.resolveRequest(QQ)
+       }), [SM, Gr, wM, UM]), (0, LM.jsxs)("div", {
+         className: jM()("SettingsMenuRightInner AccountSettings", {
+           AccountSettingsLocked: nM
+         }),
+         children: [nM && (0, LM.jsx)("div", {
+           className: "AccountSettingsInGameWarning",
+           children: zM("settingsMenu:accountSettingsInGameWarning")
+         }), (0, LM.jsxs)("div", {
+           className: "SettingBox SetAccountNameDiv SmallTextLight",
+           children: [(0, LM.jsxs)("div", {
+             className: "AccountSettingsLabel AccountSettingsNameLabel",
+             children: [zM("homePage:discordNamePopupTitle"), (0, LM.jsxs)(WM.LinkPreserveSearch, {
+               className: "AccountSettingsViewProfile",
+               to: (0, DM.f)({
+                 name: UM.getPlayerName()
+               }),
+ ... (285 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L116-L124` → after: `L1072-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1072-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1072-L1126) · [Before (L116-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L116-L124)

```diff
-         getState() {
-           const QQ = Date.now() - this.startTime,
-             WQ = Math.max(0, this.timeWindowMs - QQ);
-           return {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               timeRemaining: WQ,
-               wW: this.timeWindowMs
+         return nM && (QM = "settingsMenu:showCoordinatesHidden", zM = "settingsMenu:showChunkCoordinatesHidden"), (0, LM.jsxs)("div", {
+           className: "SettingsMenuRightInner",
+           children: [rM && yM.featureFlags.canUseInviteLinks && (0, LM.jsxs)("div", {
+             className: "SettingBox",
+             children: [(0, LM.jsx)("div", {
+               className: "SettingsMenuInviteHeader",
+               children: iM("settingsMenu:inviteLink")
+             }), (0, LM.jsx)(or.e, {})]
+           }), (0, LM.jsxs)("div", {
+             className: "SettingBox",
+             children: [(0, LM.jsx)("div", {
+               className: "SliderText",
+               style: {
+                 marginBottom: "10px"
+               },
+               children: iM("settingsMenu:language")
+ ... (39 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L126-L127` → after: `L1128-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1128-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1128-L1310) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L126-L127)

```diff
-             isActive: !0
-           }
+             disabled: nM
+           }), (0, LM.jsx)(eM.c, {
+             label: iM(zM),
+             checked: SM.showChunkCoordinates,
+             onClick: MM => {
+               bM.d.setClientEscMenuOptions({
+                 showChunkCoordinates: MM
+               })
+             },
+             disabled: nM
+           }), (0, LM.jsx)(eM.c, {
+             label: iM("settingsMenu:showFps"),
+             checked: SM.showFPS,
+             onClick: MM => {
+               bM.d.setClientEscMenuOptions({
+                 showFPS: MM
+ ... (167 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L129-L130` → after: `L1312-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1312-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1312-L1339) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L129-L130)

```diff
-         tearDown() {
-           this.tearDownNotification()
+       }(MM).catch((MM => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", MM), null)))
+     }
+ 
+     function Pi() {
+       return (0, Tr.d)().then((MM => MM.app + MM.browser + MM.msnPlay > 0), (MM => (console.error("Couldn't tell where push notifications reach this account:", MM), !0)))
+     }
+     async function ni(MM) {
+       const rM = (0, ii.A)({
+           remindersOn: !0
+         }),
+         iM = null === MM ? Promise.resolve() : MM(),
+         [OM, SM] = await Promise.allSettled([rM, iM]);
+       "rejected" === OM.status && console.error("Failed to turn on Lucky Skin Block reminders:", OM.reason), "rejected" === SM.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", SM.reason), "rejected" !== OM.status && "rejected" !== SM … [truncated]
+         translationKey: "dailyDrop:remindFailed"
+       })
+     }
+ ... (12 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L133-L170` → after: `L1342-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1342-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1342-L1349) · [Before (L133-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L133-L170)

```diff
-       gravityBar: class {
-         constructor(QQ, WQ, XQ) {
-           var wQ;
-           this.resolveRequest = WQ, this.tearDownNotification = XQ, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirect … [truncated]
-           const qQ = QQ;
-           this.parameters = {
-             ...qQ,
-             sW: TQ.b.clamp(qQ.sW, .05, 1)
-           }, this.progress = null !== (wQ = qQ.ZQ) && void 0 !== wQ ? wQ : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
-         }
-         handleMouseInput(QQ) {
-           this.isMouseDown = QQ
-         }
-         handleTick(QQ) {
-           this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(QQ))
-         }
- ... (22 more removed lines; see GitHub link above)
+       zi = {
+         remindersOn: {
+           label: "dailyDrop:settingReminders",
+           reportAs: "reminders"
+         },
+         hidden: {
+           label: "dailyDrop:settingHide",
+           reportAs: "hidden"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L172-L173` → after: `L1351-L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1351-L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1351-L1389) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L172-L173)

```diff
-         updateProgress(QQ) {
-           this.isMoverInCatchZone() ? this.progress += this.parameters.JW * QQ : this.progress -= this.parameters.rW * QQ, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.mQ && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
+       };
+ 
+     function Li(MM) {
+       let {
+         setting: rM,
+         value: iM
+       } = MM;
+       const {
+         t: SM
+       } = (0, aM.A)(), PM = (0, cr.b)(), [nM, QM] = (0, OM.useState)(null), [zM, mM] = (0, OM.useState)(!1), [HM, hM] = (0, OM.useState)(null);
+       return (0, OM.useEffect)((() => {
+         "remindersOn" === rM && (0, Vr.g)().then((MM => {
+           PM.current && hM((() => MM))
+         }), (MM => {
+           console.error("Couldn't tell whether this device can take push notifications:", MM)
+         }))
+ ... (23 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L175-L176` → after: `L1391-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1391-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1391-L1506) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L175-L176)

```diff
-         complete(QQ) {
-           this.isCompleted = !0, this.resolveRequest(QQ)
+       })
+     }
+     const mi = (0, OM.memo)((function() {
+       const {
+         t: MM
+       } = (0, aM.A)(), {
+         clientEscMenuOptions: rM
+       } = (0, bM.m)(["clientEscMenuOptions"]), {
+         userContext: iM
+       } = (0, hM.b)(), OM = iM.dailyDrop;
+       return (0, LM.jsxs)("div", {
+         className: "SettingsMenuRightInner",
+         children: [yM.featureFlags.useSocialFeatures && (0, LM.jsx)(eM.f, {
+           label: MM("notificationSettings:friendRequests"),
+           options: Kr.c.map((rM => ({
+             value: rM,
+ ... (100 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L178-L187` → after: `L1508-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1508-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1508-L1610) · [Before (L178-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L178-L187)

```diff
-         getState() {
-           return {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               catchZonePosition: this.catchZonePosition,
-               sW: this.parameters.sW,
-               moverPosition: this.moverPosition,
-               progress: this.progress,
-               isCatching: this.isMoverInCatchZone()
+       }), [sM, DM]);
+       const kM = (!(uM && !sM) || !tM) && GM,
+         ZM = function(MM, rM, iM, OM, SM) {
+           return (0, Ei.e)(iM, OM) && !0 === rM ? {
+             translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
+             checked: !0,
+             disabled: !0
+           } : {
+             translationKey: !1 !== rM ? "settingsMenu:newWebGpu" : SM ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
+             checked: MM && !1 !== rM,
+             disabled: !0 !== rM
+           }
+         }(dM.useWebGpu, kM, uM, pM, WM),
+         oM = (dM.useWebGpu || (0, Ei.e)(uM, pM)) && uM && !0 === kM,
+         fM = (0, JM.f)("lightingOverride"),
+         YM = !(0, Ui.J)(fM);
+ ... (87 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L189` → after: `L1612-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1612-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1612-L1655) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L189)

```diff
-             isActive: !0
+             disabled: FM,
+             className: jM()({
+               SettingBoxWarning: Mr
+             })
+           }), (0, LM.jsx)(eM.h, {
+             name: hM("settingsMenu:fogChunkDistance"),
+             min: QM[0],
+             max: Ji.f.maxChunkHorizAddDistance,
+             step: 1,
+             initValue: null !== (PM = dM.fogChunkDistance) && void 0 !== PM ? PM : QM[0],
+             onChange: MM => {
+               bM.d.setClientEscMenuOptions({
+                 fogChunkDistance: MM
+               }), Gi.i.Tz("fogChunkDistanceChanged", MM)
+             },
+             circleInfoText: hM("settingsMenu:fogChunkDistanceInfo"),
+ ... (28 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L191-L194` → after: `L1657-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1657-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1657-L1730) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L191-L194)

```diff
-         }
-         tearDown() {
-           this.tearDownNotification()
-         }
+         }), (0, LM.jsx)(eM.c, {
+           label: hM("settingsMenu:disableViewBobbing"),
+           checked: dM.disableBobbing,
+           onClick: MM => {
+             bM.d.setClientEscMenuOptions({
+               disableBobbing: MM
+             })
+           },
+           circleInfoText: hM("settingsMenu:disableViewBobbingInfo")
+         }), (0, LM.jsx)(eM.c, {
+           label: hM("settingsMenu:antiAliasing"),
+           checked: dM.antiAliasing,
+           onClick: MM => {
+             AM({
+               antiAliasing: MM
+             }), (0, ui.g)("antiAliasing"), bM.d.setClientEscMenuOptions({
+ ... (58 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L196-L217` → after: `L1732-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1732-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1732-L1849) · [Before (L196-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L196-L217)

```diff
-       precisionBar: class {
-         constructor(QQ, WQ, XQ) {
-           var wQ, qQ, zQ, sQ, FQ;
-           this.resolveRequest = WQ, this.tearDownNotification = XQ, this.startTime = void 0, this.speed = void 0, this.jW = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
-           const PQ = QQ;
-           this.parameters = {
-             ...PQ,
-             speed: null !== (wQ = PQ.speed) && void 0 !== wQ ? wQ : .5,
-             jW: TQ.b.clamp(PQ.jW, .05, 1),
-             label: null !== (qQ = PQ.label) && void 0 !== qQ ? qQ : [{
-               str: "Click when the marker is within the green zone."
-             }],
-             icon: null !== (zQ = PQ.icon) && void 0 !== zQ ? zQ : null,
-             scale: null !== (sQ = PQ.scale) && void 0 !== sQ ? sQ : 1,
-             rotation: null !== (FQ = PQ.rotation) && void 0 !== FQ ? FQ : 0
-           }, this.speed = this.parameters.speed, this.jW = this.parameters.jW, this.startTime = Date.now()
- ... (6 more removed lines; see GitHub link above)
+       xi = {
+         color: 0,
+         name: "black"
+       },
+       vi = [Ai, {
+         color: 5046092,
+         name: "green"
+       }, {
+         color: 16776960,
+         name: "yellow"
+       }, {
+         color: 65535,
+         name: "cyan"
+       }, {
+         color: 16731391,
+         name: "pink"
+ ... (102 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L220-L237` → after: `L1860-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1860-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1860-L1873) · [Before (L220-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L220-L237)

```diff
-         handleTick() {
-           this.isCompleted || this.updateMarkerPosition()
-         }
-         updateMarkerPosition() {
-           const QQ = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
-           this.markerPosition = QQ <= .5 ? 2 * QQ : 2 - 2 * QQ
-         }
-         complete(QQ) {
-           this.isCompleted = !0, this.resolveRequest(QQ)
-         }
-         getState() {
-           return this.updateMarkerPosition(), {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               markerPosition: this.markerPosition
- ... (2 more removed lines; see GitHub link above)
+       }, MM), QM = "shapes" === rM.style;
+       return (0, LM.jsxs)(LM.Fragment, {
+         children: [(0, LM.jsx)(eM.f, {
+           label: OM("crosshairSettings:style"),
+           options: [{
+             value: "classic",
+             label: OM("crosshairSettings:styleClassic")
+           }, {
+             value: "shapes",
+             label: OM("crosshairSettings:styleShapes")
+           }],
+           value: rM.style,
+           onChange: MM => {
+             SM("style", MM)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L239-L280` → after: `L1875-L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1875-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1875-L1880) · [Before (L239-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L239-L280)

```diff
-         }
-         tearDown() {
-           this.tearDownNotification()
-         }
-       },
-       rhythmClick: class {
-         constructor(QQ, WQ, XQ) {
-           this.resolveRequest = WQ, this.tearDownNotification = XQ, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = QQ, this.shrinkStartT … [truncated]
-         }
-         handleMouseInput(QQ) {
-           if (!QQ || this.isCompleted) return;
-           const WQ = this.getOuterCircleProgress();
-           if (WQ <= this.parameters.DW && WQ >= -this.parameters.DW) {
-             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.yW) return void this.complete(!0)
-           } else this.handleMiss();
-           this.shrinkStartTime = Date.now()
- ... (26 more removed lines; see GitHub link above)
+         }), (0, LM.jsx)(Ii, {
+           label: OM("crosshairSettings:color"),
+           value: rM.color,
+           swatches: vi,
+           onChange: MM => {
+             SM("color", MM)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L282-L293` → after: `L1882-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1882-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1882-L1901) · [Before (L282-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L282-L293)

```diff
-         }
-         tearDown() {
-           this.tearDownNotification()
-         }
-       }
-     };
- 
-     function DQ() {
-       (0, gQ.i)(sQ.x.Qte, yQ ? sQ.x.Qte : 0), yQ ? qQ.k.mB("qteStateUpdated", yQ.getState()) : qQ.k.mB("qteStateUpdated", {
-         type: null,
-         typeSpecificParameters: null,
-         isActive: !1
+         }), jM("opacity", OM("crosshairSettings:opacity"), Xi), !QM && jM("size", OM("crosshairSettings:size"), Xi), QM && (0, LM.jsxs)("div", {
+           className: "SettingBoxGroup",
+           children: [nM("lines", OM("crosshairSettings:lines")), rM.lines && jM("lineLength", OM("crosshairSettings:lineLength")), rM.lines && jM("lineThickness", OM("crosshairSettings:lineThickness")), rM.lines && jM("gap", OM("crosshairSettings:gap")), rM.lines && nM("tStyle",  … [truncated]
+         }), QM && (0, LM.jsxs)("div", {
+           className: "SettingBoxGroup",
+           children: [nM("dot", OM("crosshairSettings:dot")), rM.dot && jM("dotSize", OM("crosshairSettings:dotSize"))]
+         }), QM && (0, LM.jsxs)("div", {
+           className: "SettingBoxGroup",
+           children: [nM("circle", OM("crosshairSettings:circle")), rM.circle && jM("circleRadius", OM("crosshairSettings:circleRadius")), rM.circle && jM("circleThickness", OM("crosshairSettings:circleThickness"))]
+         }), (0, LM.jsxs)("div", {
+           className: "SettingBoxGroup",
+           children: [jM("outline", OM("crosshairSettings:outline"), (MM => MM > 0 ? Bi(MM) : OM("crosshairSettings:off"))), rM.outline > 0 && (0, LM.jsx)(Ii, {
+             label: OM("crosshairSettings:outlineColor"),
+             value: rM.outlineColor,
+             swatches: Fi,
+             onChange: MM => {
+ ... (4 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L296-L302` → after: `L1904-L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1904-L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1904-L1918) · [Before (L296-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L296-L302)

```diff
-     class pQ {
-       constructor(QQ, WQ) {
-         this.resultPromise = QQ, this.tearDownQTE = WQ
-       }
-       static create(QQ, WQ, XQ) {
-         const wQ = Promise.race([QQ, WQ]);
-         return new pQ(wQ, XQ)
+     var qi = iM(65),
+       Ti = iM(1287),
+       Vi = iM(13457),
+       ci = iM(14650),
+       MO = iM(16014),
+       rO = iM(16502);
+     const iO = ["sky", "grass", "stone", "sand", "snow", "night"],
+       OO = "4rem";
+ 
+     function SO(MM) {
+       return {
+         backgroundImage: `url(${MM})`,
+         backgroundSize: `${OO} ${OO}`,
+         backgroundRepeat: "repeat",
+         imageRendering: "pixelated"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L304-L305` → after: `L1920-L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1920-L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1920-L1944) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L304-L305)

```diff
-       async getResult() {
-         return await this.resultPromise
+     }
+ 
+     function jO(MM) {
+       return {
+         ...(() => {
+           switch (MM) {
+             case "sky":
+               return {
+                 backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
+               };
+             case "grass":
+               return SO(Vi);
+             case "stone":
+               return SO(ci);
+             case "sand":
+               return SO(MO);
+ ... (9 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L308-L316` → after: `L1947-L10056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1947-L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L1947-L10056) · [Before (L308-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L308-L316)

```diff
-     class GQ {
-       static queueQTE(QQ, WQ, XQ) {
-         let wQ, qQ;
-         const TQ = new Promise((QQ => {
-             wQ = QQ
-           })),
-           zQ = new Promise((QQ => {
-             qQ = () => {
-               QQ("qteTornDown")
+ 
+     function aO(MM) {
+       return Object.freeze({
+         ...Ni.e,
+         style: "shapes",
+         outline: 1,
+         lines: !1,
+         ...MM
+       })
+     }
+     const PO = [{
+         id: "default",
+         settings: Ni.e
+       }, {
+         id: "cross",
+         settings: aO({
+ ... (8094 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L318-L347` → after: `L10058-L10087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10058-L10087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10058-L10087) · [Before (L318-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L318-L347)

```diff
-           })),
-           sQ = Promise.race([TQ, zQ]).then((() => {})),
-           FQ = new JQ(QQ, WQ, XQ, qQ, sQ, wQ);
-         return BQ.set(QQ, FQ), jQ.enqueue(FQ), yQ || this.processNextQTE(), pQ.create(TQ, zQ, qQ)
-       }
-       static async processNextQTE() {
-         if (yQ || jQ.mI()) return void(jQ.mI() && yQ && (yQ = null, DQ()));
-         const QQ = await jQ.dequeue();
-         if (!BQ.has(QQ.id)) return void await this.processNextQTE();
-         BQ.delete(QQ.id);
-         const WQ = new IQ(QQ.id, QQ.type, QQ.parameters, QQ.resolveRequest, QQ.onDonePromise, QQ.tearDownNotification);
-         yQ = WQ, DQ();
-         try {
-           await WQ.waitUntilDone()
-         } catch (XQ) {
-           console.error("Error while waiting for QTE to resolve:", XQ.stack)
- ... (14 more removed lines; see GitHub link above)
+           }), [MM]), rM
+         }(LM),
+         dM = (0, jM.useRef)(JM);
+       dM.current = JM;
+       const yM = nM(rM, JM, PM && rM.growOnClick ? HM : 1),
+         lM = function(MM, rM, iM) {
+           const OM = Math.round((MM.left + MM.width / 2) * iM - rM / 2),
+             SM = Math.round((MM.top + MM.height / 2) * iM - rM / 2);
+           return {
+             x: OM / iM - MM.left,
+             y: SM / iM - MM.top
+           }
+         }(hM, yM.cell, JM),
+         EM = (0, aM.i)(rM.color),
+         CM = (0, aM.i)(rM.outlineColor),
+         wM = (0, jM.useRef)(0);
+ ... (14 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L349-L354` → after: `L10089-L10124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10089-L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10089-L10124) · [Before (L349-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L349-L354)

```diff
-       }
-       static reset() {
-         yQ && (yQ.tearDown(), yQ = null), BQ.forEach(((QQ, WQ) => {
-           this.cancelQTE(WQ)
-         })), jQ.emptyQueue(), BQ.clear(), DQ()
-       }
+       }), [zM]);
+       const tM = null !== QM && void 0 !== QM ? QM : wM.current;
+       return (0, mM.jsx)("div", {
+         ref: LM,
+         className: SM()("CrosshairShapes", {
+           CrosshairInPreview: iM,
+           CrosshairInEditor: OM || iM,
+           CrosshairSpreads: void 0 !== zM
+         }),
+         children: (0, mM.jsx)("div", {
+           className: "CrosshairShapesOrigin",
+           style: {
+             left: lM.x,
+             top: lM.y,
+             opacity: rM.opacity / 100
+           },
+ ... (20 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L357` → after: `L10127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10127) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L357)

```diff
-   5118: (QQ, WQ, XQ) => {
+   35003: (MM, rM, iM) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L359-L373` → after: `L10129-L10131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10129-L10131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10129-L10131) · [Before (L359-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L359-L373)

```diff
-       B: () => DQ,
-       F: () => zQ,
-       H: () => sQ,
-       I: () => HQ,
-       d: () => dQ,
-       e: () => GQ,
-       g: () => cQ,
-       h: () => iQ,
-       k: () => VQ,
-       o: () => bQ,
-       s: () => pQ,
-       t: () => UQ,
-       w: () => aQ,
-       x: () => lQ,
-       y: () => hQ
+       b: () => zM,
+       f: () => dM,
+       i: () => JM
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L375-L381` → after: `L10133-L10140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10133-L10140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10133-L10140) · [Before (L375-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L375-L381)

```diff
-     var wQ = XQ(5126);
-     const qQ = {
-       lockPointer: () => !1,
-       unlockPointer: () => {},
-       leaveGame: () => {}
-     };
-     let TQ = qQ;
+     var OM = iM(34989);
+     const SM = "XH1-",
+       jM = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
+       aM = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
+       PM = ["color", "outlineColor"],
+       nM = 1 + 3 * PM.length + aM.length + 1,
+       QM = Math.ceil(8 * nM / Math.log2(62)),
+       zM = SM.length + QM;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L384` → after: `L10143-L10145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10143-L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10143-L10145) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L384)

```diff
-       TQ = null !== QQ && void 0 !== QQ ? QQ : qQ
+       let rM = 90;
+       for (const iM of MM) rM = 31 * rM + iM & 255;
+       return rM
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L387` → after: `L10150-L10159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10150-L10159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10150-L10159) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L387)

```diff
-     function sQ() {
+     function hM(MM, rM) {
+       let iM = 0n;
+       for (const SM of MM) {
+         const MM = mM.indexOf(SM);
+         if (MM < 0) return null;
+         iM = iM * HM + BigInt(MM)
+       }
+       if (iM >> BigInt(8 * rM) !== 0n) return null;
+       const OM = [];
+       for (let SM = 0; SM < rM; SM++) OM.unshift(Number(0xffn & iM)), iM >>= 8n;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L401-L402` → after: `L10164-L10178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10164-L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10164-L10178) · [Before (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L401-L402)

```diff
-       return FQ.add(QQ), () => {
-         FQ.delete(QQ)
+       let rM = "shapes" === MM.style ? 1 : 0;
+       jM.forEach(((iM, OM) => {
+         MM[iM] && (rM |= 1 << OM + 1)
+       }));
+       const iM = [rM];
+       for (const SM of PM) {
+         const rM = (0, OM.f)(SM, MM[SM]);
+         iM.push(rM >> 16 & 255, rM >> 8 & 255, 255 & rM)
+       }
+       for (const SM of aM) {
+         const {
+           min: rM,
+           step: jM
+         } = OM.d[SM];
+         iM.push(Math.round(((0, OM.f)(SM, MM[SM]) - rM) / jM))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L406-L410` → after: `L10189-L10192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10189-L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10189-L10192) · [Before (L406-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L406-L410)

```diff
-     function DQ(QQ, WQ) {
-       for (const wQ of FQ) try {
-         wQ(QQ)
-       } catch (XQ) {
-         WQ(XQ)
+     function dM(MM) {
+       for (const rM of MM.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${QM}})`, "gi"))) {
+         const MM = yM(hM(rM[1], nM));
+         if (MM) return MM
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L415-L416` → after: `L10198-L10214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10198-L10214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10198-L10214) · [Before (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L415-L416)

```diff
-       return PQ.add(QQ), () => {
-         PQ.delete(QQ)
+       if (!MM || MM.length !== nM || LM(MM.slice(0, -1)) !== MM[MM.length - 1]) return null;
+       const rM = MM[0],
+         iM = {
+           ...OM.e,
+           style: 1 & rM ? "shapes" : "classic"
+         };
+       jM.forEach(((MM, OM) => {
+         iM[MM] = 0 !== (rM & 1 << OM + 1)
+       }));
+       let SM = 1;
+       for (const OM of PM) iM[OM] = MM[SM] << 16 | MM[SM + 1] << 8 | MM[SM + 2], SM += 3;
+       for (const jM of aM) {
+         const {
+           min: rM,
+           step: aM
+         } = OM.d[jM];
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L421-L426` → after: `L10309-L10325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10309-L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10309-L10325) · [Before (L421-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L421-L426)

```diff
-       const XQ = gQ < 0 ? 0 : QQ - gQ;
-       gQ = QQ;
-       for (const qQ of PQ) try {
-         qQ(XQ)
-       } catch (wQ) {
-         WQ(wQ)
+       var iM;
+       const {
+         min: jM,
+         max: aM,
+         step: PM
+       } = OM[MM];
+       if (!Number.isFinite(rM)) return SM[MM];
+       const nM = (null !== (iM = String(PM).split(".")[1]) && void 0 !== iM ? iM : "").length,
+         QM = Number((Math.round(rM / PM) * PM).toFixed(nM));
+       return Math.min(aM, Math.max(jM, QM))
+     }
+ 
+     function aM(MM, rM, iM) {
+       const OM = "number" === typeof iM ? jM(rM, iM) : iM;
+       return {
+         ...MM,
+ ... (1 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L431-L433` → after: `L10335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10335) · [Before (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L431-L433)

```diff
-       return JQ.add(QQ), () => {
-         JQ.delete(QQ)
-       }
+       return PM(MM, SM)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L437-L439` → after: `L10339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10339) · [Before (L437-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L437-L439)

```diff
-       return rQ.add(QQ), () => {
-         rQ.delete(QQ)
-       }
+       return `#${MM.toString(16).padStart(6,"0")}`
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L444` → after: `L10343-L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10343-L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10343-L10344) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L444)

```diff
-       vQ += QQ
+       const rM = /^#?([0-9a-f]{6})$/i.exec(MM.trim());
+       return rM ? parseInt(rM[1], 16) : null
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L448-L449` → after: `L10361-L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10361-L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10361-L10366) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L448-L449)

```diff
-       const QQ = vQ;
-       return vQ = 0, QQ
+       if (null === nM) {
+         var MM;
+         const rM = SM.g.getItem(PM);
+         nM = null !== (MM = "string" === typeof rM ? (0, jM.f)(rM) : null) && void 0 !== MM ? MM : aM.e
+       }
+       return nM
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L453-L455` → after: `L10370-L10395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10370-L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10370-L10395) · [Before (L453-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L453-L455)

```diff
-       return BQ.add(QQ), () => {
-         BQ.delete(QQ)
-       }
+       nM = MM, (0, aM.j)(MM) ? SM.g.removeItem(PM) : SM.g.setItem(PM, (0, jM.i)(MM));
+       for (const rM of QM) rM()
+     }
+ 
+     function mM() {
+       const [MM, rM] = (0, OM.useState)(zM);
+       return (0, OM.useEffect)((() => {
+         const MM = () => {
+           rM(zM())
+         };
+         return MM(), iM = MM, QM.add(iM), () => {
+           QM.delete(iM)
+         };
+         var iM
+       }), []), MM
+     }
+ ... (10 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L459-L461` → after: `L10411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10411) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L459-L461)

```diff
-       return yQ.add(QQ), () => {
-         yQ.delete(QQ)
-       }
+       OM = MM
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L465` → after: `L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10415) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L465)

```diff
-       IQ = 0, jQ = 0, gQ = -1
+       return OM
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L469-L472` → after: `L10424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10424) · [Before (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L469-L472)

```diff
-       if ("paced" === QQ) return jQ += WQ, null;
-       if ("drawn" !== QQ && "skipped" !== QQ) return null;
-       const XQ = WQ + jQ;
-       return jQ = 0, XQ
+       return MM && !rM
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L475-L488` → after: `L10436-L10443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10436-L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10436-L10443) · [Before (L475-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L475-L488)

```diff
-     function cQ(QQ, WQ, XQ, qQ) {
-       const TQ = (0, wQ.f)(WQ),
-         zQ = QQ > 0 ? performance.now() : 0;
-       for (let wQ = 0; wQ < QQ; wQ++)
-         for (const QQ of BQ) try {
-           QQ()
-         } catch (sQ) {
-           qQ(sQ)
-         }
-       if (QQ > 0 && dQ(performance.now() - zQ), null !== XQ) {
-         for (const QQ of JQ) try {
-           QQ(XQ)
-         } catch (sQ) {
-           qQ(sQ)
+     function SM() {
+       var MM, rM;
+       return null !== (MM = null === (rM = screen.orientation) || void 0 === rM ? void 0 : rM.type) && void 0 !== MM ? MM : innerWidth > innerHeight ? "landscape" : "portrait"
+     }
+     const jM = new class {
+       constructor() {
+         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
+           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L492-L498` → after: `L10446-L10468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10446-L10468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10446-L10468) · [Before (L492-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L492-L498)

```diff
-       if ("drawn" === WQ) {
-         const QQ = IQ;
-         IQ = 0;
-         for (const WQ of rQ) try {
-           WQ(QQ)
-         } catch (sQ) {
-           qQ(sQ)
+       isHeld() {
+         return this.holding && SM() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+         this.heldOrientation = SM(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, OM.CJ)(new Error("Game view size held for 60 s"))
+         }), 6e4)
+       }
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
+           else {
+             this.holding = !1;
+             for (const MM of this.resizers) MM()
+           }
+         }), 1e3)
+ ... (7 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L501-L504` → after: `L10471-L10474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10471-L10474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10471-L10474) · [Before (L501-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L501-L504)

```diff
-       for (const wQ of yQ) try {
-         wQ(QQ, TQ)
-       } catch (sQ) {
-         qQ(sQ)
+       onRelease(MM) {
+         return this.resizers.add(MM), () => {
+           this.resizers.delete(MM)
+         }
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L508` → after: `L10478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10478) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L508)

```diff
-   5146: (QQ, WQ, XQ) => {
+   34929: (MM, rM, iM) => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L511-L512` → after: `L10481-L10483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10481-L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10481-L10483) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L511-L512)

```diff
-       h: () => TQ,
-       j: () => sQ
+       i: () => QM,
+       j: () => JM,
+       n: () => hM
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L514-L515` → after: `L10485-L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10485-L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10485-L10495) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L514-L515)

```diff
-     var wQ = XQ(2506),
-       qQ = XQ(5148);
+     var OM = iM(143),
+       SM = iM(1279),
+       jM = iM(1202),
+       aM = iM(1144),
+       PM = iM(1826);
+     const nM = {
+       offline: "homePage:onboardingNameNoAccount",
+       outdated: "general:updatedReloading",
+       busy: "homePage:changeNameTooFast",
+       server: "homePage:changeNameFailed"
+     };
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L518-L522` → after: `L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10498) · [Before (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L518-L522)

```diff
-       let {
-         action: WQ,
-         flags: XQ
-       } = QQ;
-       return "mid-fire" === WQ && 0 !== (XQ & wQ.e.AltLeftClick)
+       return nM[MM]
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L527-L529` → after: `L10502-L10511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10502-L10511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10502-L10511) · [Before (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L527-L529)

```diff
-       return zQ.add(QQ), () => {
-         zQ.delete(QQ)
-       }
+       return (0, PM.c)(MM) ? "outdated" : MM instanceof OM.e ? 429 === MM.httpCode ? "busy" : "server" : "offline"
+     }
+ 
+     function LM(MM, rM, iM) {
+       return (0, aM.postJsonWithMetricsCookiesAndJsonResponse)(`${jM.clientSideServerUrls.indexUrl}${rM}`, iM, {
+         retries: 3
+       }, MM.getMetricsCookies()).catch((MM => (console.error("Bad response from the server when trying to change name:", rM, MM), {
+         outcome: "failed",
+         failure: zM(MM)
+       })))
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L533-L542` → after: `L10515-L10560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10515-L10560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10515-L10560) · [Before (L533-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L533-L542)

```diff
-       const WQ = qQ.b[255 & QQ];
-       if (void 0 === WQ) return;
-       const XQ = QQ >>> 8 & 255,
-         TQ = {
-           action: WQ,
-           down: 0 !== (XQ & wQ.e.Down),
-           flags: XQ,
-           press: QQ >>> 16
-         };
-       for (const wQ of zQ) wQ(TQ)
+       return "outcome" in MM && "failed" === MM.outcome
+     }
+ 
+     function HM(MM) {
+       return console.error("Error when trying to get with new name from DB", MM), {
+         outcome: "refused",
+         message: MM
+       }
+     }
+     async function hM(MM) {
+       const rM = await LM(MM, "/index/name/random", {});
+       return mM(rM) ? rM : "err" in rM ? HM(rM.err) : (MM.setPlayerName(rM.name), {
+         outcome: "changed",
+         name: rM.name
+       })
+     }
+ ... (30 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L545` → after: `L10563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10563) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L545)

```diff
-   5148: (QQ, WQ, XQ) => {
+   34956: (MM, rM, iM) => {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L547-L551` → after: `L10565-L10566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10565-L10566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10565-L10566) · [Before (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L547-L551)

```diff
-       b: () => qQ,
-       c: () => TQ,
-       e: () => zQ,
-       i: () => wQ,
-       j: () => sQ
+       d: () => PM,
+       f: () => nM
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L553-L821` → after: `L10568-L10585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10568-L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10568-L10585) · [Before (L553-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L553-L821)

```diff
-     const wQ = {
-         Mouse1: 1,
-         Mouse2: 2,
-         Mouse3: 3,
-         "Alt+Left Click": 4,
-         F2: 5,
-         F4: 6,
-         F5: 7,
-         F8: 8,
-         F9: 9,
-         Digit0: 10,
-         Digit1: 11,
-         Digit2: 12,
-         Digit3: 13,
-         Digit4: 14,
-         Digit5: 15,
- ... (253 more removed lines; see GitHub link above)
+     var OM = iM(19);
+     const SM = 24,
+       jM = "farNametags",
+       aM = 1e5;
+ 
+     function PM() {
+       var MM;
+       return null === (MM = OM.d.get("showDistantNametags")) || void 0 === MM || MM
+     }
+ 
+     function nM() {
+       var MM;
+       return null !== (MM = function() {
+         const MM = new URLSearchParams(window.location.search).get(jM),
+           rM = null === MM || "" === MM ? NaN : Number(MM);
+         return Number.isFinite(rM) && rM >= 0 ? Math.min(rM, aM) : null
+ ... (2 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L823` → after: `L10587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10587) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L823)

```diff
-   5153: (QQ, WQ, XQ) => {
+   34980: (MM, rM, iM) => {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L826-L827` → after: `L10590-L10631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10590-L10631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10590-L10631) · [Before (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L826-L827)

```diff
-       f: () => zQ,
-       i: () => PQ
+       d: () => LM,
+       g: () => zM
+     });
+     var OM = iM(243),
+       SM = iM(83),
+       jM = iM(114),
+       aM = iM(110),
+       PM = iM(650);
+     const nM = new Set(["mali_bifrost"]);
+ 
+     function QM() {
+       if (PM.i) return;
+       const MM = (0, SM.pageOperatingSystem)();
+       if ("android" !== MM && "windows" !== MM || (0, PM.e)("webgl_default")) return;
+       if ("windows" === MM) return MM => "qualcomm" === (0, SM.normaliseGpuVendor)((0, aM.d)(MM).vendor);
+       const rM = (0, jM.o)(),
+ ... (26 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L829-L831` → after: `L10633-L10813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10633-L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10633-L10813) · [Before (L829-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L829-L831)

```diff
-     var wQ = XQ(2506),
-       qQ = XQ(2510);
-     const TQ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);
+     const OM = [{
+       threshold: 10n ** 180n,
+       suffix: "NoQig"
+     }, {
+       threshold: 10n ** 177n,
+       suffix: "OcQig"
+     }, {
+       threshold: 10n ** 174n,
+       suffix: "SpQig"
+     }, {
+       threshold: 10n ** 171n,
+       suffix: "SQig"
+     }, {
+       threshold: 10n ** 168n,
+       suffix: "QiQig"
+     }, {
+ ... (165 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L834` → after: `L10816-L10842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10816-L10842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10816-L10842) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L834)

```diff
-       return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !TQ.has(QQ.type))
+       let rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
+       if ("number" === typeof MM) {
+         if (!Number.isFinite(MM)) return "0";
+         if (Math.abs(MM) < 100) {
+           const rM = MM < 0 ? "-" : "",
+             iM = Math.abs(MM);
+           return iM >= 10 ? `${rM}${iM.toFixed(1).replace(/\.0$/,"")}` : `${rM}${iM.toFixed(2).replace(/\.?0+$/,"")}`
+         }
+         rM = BigInt(Math.floor(MM))
+       } else rM = MM;
+       const SM = rM < 0n ? -rM : rM,
+         jM = rM < 0n ? "-" : "",
+         aM = SM.toString();
+       if (aM.length <= iM) return `${jM}${aM}`;
+       const PM = 3 * Math.floor((aM.length - 1) / 3);
+       if (PM < 3) return `${jM}${aM}`;
+ ... (11 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L838-L841` → after: `L10861-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10861-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10861-L10889) · [Before (L838-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L838-L841)

```diff
-       let WQ = null;
-       const XQ = XQ => {
-           const qQ = zQ(XQ);
-           qQ !== WQ && (WQ = qQ, QQ(wQ.j.UiCapture, wQ.x.Keyboard, 0, 0, qQ ? wQ.x.Keyboard : 0))
+       const rM = Math.abs(MM),
+         iM = MM < 0 ? "-" : "";
+       for (const {
+           threshold: OM,
+           suffix: SM
+         }
+         of jM)
+         if (rM >= OM) {
+           const MM = rM / OM;
+           if (MM >= 1e3) return `${iM}${rM.toExponential(2).replace("e+","e")}`;
+           let jM;
+           return jM = MM >= 100 ? Math.floor(MM).toString() : MM >= 10 ? MM.toFixed(1).replace(/\.0$/, "") : MM.toFixed(2).replace(/\.?0+$/, ""), `${iM}${jM}${SM}`
+         } return `${iM}${rM}`
+     }
+   },
+   35029: (MM, rM, iM) => {
+ ... (13 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L843-L844` → after: `L10891-L10892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10891-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10891-L10892) · [Before (L843-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L843-L844)

```diff
-         qQ = QQ => {
-           XQ(QQ.target)
+         "Attack Speed": {
+           translationKey: "enchantments:attackSpeedDescription"
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L846-L847` → after: `L10894-L10895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10894-L10895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10894-L10895) · [Before (L846-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L846-L847)

```diff
-         TQ = QQ => {
-           XQ(QQ.relatedTarget)
+         "Critical Damage": {
+           translationKey: "enchantments:criticalDamageDescription"
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L849-L850` → after: `L10897-L10898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10897-L10898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10897-L10898) · [Before (L849-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L849-L850)

```diff
-         sQ = () => {
-           XQ(document.activeElement)
+         Protection: {
+           translationKey: "enchantments:protectionDescription"
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L852-L857` → after: `L10900-L10965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10900-L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10900-L10965) · [Before (L852-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L852-L857)

```diff
-         FQ = {
-           capture: !0,
-           passive: !0
-         };
-       return document.addEventListener("focusin", qQ, FQ), document.addEventListener("focusout", TQ, FQ), document.addEventListener("keydown", sQ, FQ), XQ(document.activeElement), () => {
-         document.removeEventListener("focusin", qQ, FQ), document.removeEventListener("focusout", TQ, FQ), document.removeEventListener("keydown", sQ, FQ)
+         Health: {
+           translationKey: "enchantments:healthDescription"
+         },
+         "Health Regen": {
+           translationKey: "enchantments:healthRegenDescription"
+         },
+         "Stomp Damage": {
+           translationKey: "enchantments:stompDamageDescription"
+         },
+         "Knockback Resist": {
+           translationKey: "enchantments:knockbackResistDescription"
+         },
+         "Arrow Speed": {
+           translationKey: "enchantments:arrowSpeedDescription"
+         },
+         "Arrow Damage": {
+ ... (50 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L860` → after: `L10968-L11023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR10968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L10968-L11023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L10968-L11023) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L860)

```diff
-     const FQ = new Map;
+     const PM = {
+       "Wood Enchanting Table": [{
+         min: 1,
+         max: 2
+       }, {
+         min: 3,
+         max: 4
+       }, {
+         min: 5,
+         max: 6
+       }],
+       "Stone Enchanting Table": [{
+         min: 2,
+         max: 4
+       }, {
+         min: 5,
+ ... (40 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L862` → after: `L11025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR11025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L11025) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L862)

```diff
-     function PQ(QQ, WQ) {
+     function QM(MM) {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L864-L868` → after: `L11027-L11064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR11027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L11027-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/90.js#L11027-L11064) · [Before (L864-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/90.js#L864-L868)

```diff
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
-       FQ.set(wQ, (null !== (XQ = FQ.get(wQ)) && void 0 !== XQ ? XQ : 0) & ~QQ | WQ & QQ);
-       let TQ = 0;
-       for (const qQ of FQ.values()) TQ |= qQ;
-       return (0, qQ.C)(QQ, TQ & QQ)
+       return !0 === (null === MM || void 0 === MM || null === (rM = MM.customAttributes) || void 0 === rM ? void 0 : rM.cannotEnchant)
+     }
+ 
+     function zM(MM, rM) {
+       const {
+         max: iM
+       } = PM[MM].at(-1);
+       return rM <= iM
+     }
+ 
+     function LM(MM) {
+       const rM = Math.sin(MM / 80),
+         iM = MM => {
+           if (MM <= 0) return 0;
+           if (MM > 1) return 1;
+           let rM = 0;
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/91.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/91.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L4-L23` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/91.js#L4-L6) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/91.js#L4-L23)

```diff
-   41094: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       B: () => OQ,
-       E: () => uQ,
-       H: () => iQ,
-       L: () => CQ,
-       O: () => hQ,
-       R: () => nQ,
-       U: () => eQ,
-       Y: () => AQ,
-       b: () => xQ,
-       e: () => kQ,
-       h: () => aQ,
-       j: () => YQ,
-       l: () => lQ,
-       p: () => HQ,
- ... (4 more removed lines; see GitHub link above)
+   5109: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       reportCarriedGlLossWait: () => SM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L25-L61` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/91.js#L8) · [Before (L25-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/91.js#L25-L61)

```diff
-     var wQ = XQ(1454),
-       qQ = XQ(31),
-       TQ = XQ(1335),
-       zQ = XQ(2506),
-       sQ = XQ(5153),
-       FQ = XQ(5118);
-     let PQ, gQ = !1,
-       JQ = !1,
-       rQ = !1,
-       IQ = !1;
-     const jQ = 1300,
-       BQ = 3e3;
-     let yQ = 0,
-       VQ = !1,
-       DQ = !1,
-       pQ = 0;
- ... (21 more removed lines; see GitHub link above)
+     var OM = iM(4773);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L64-L68` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/91.js#L11-L14) · [Before (L64-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/91.js#L64-L68)

```diff
-       let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (QQ !== bQ) {
-         bQ = QQ;
-         for (const QQ of [...dQ]) QQ(bQ);
-         WQ && eQ()
+       try {
+         (0, OM.b)(MM.message, MM.code, void 0, {}, {})
+       } catch (rM) {
+         console.warn("Couldn't report the last page's WebGL context wait", rM)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/92.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/92.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L2)

```diff
- export const ids = [92];
+ export const ids = [92, 108];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L4-L63` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L4-L35) · [Before (L4-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L4-L63)

```diff
-   40781: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       startWasmPadGameplay: () => kQ
-     });
-     XQ(40787);
-     var wQ = XQ(40790),
-       qQ = XQ(40802),
-       TQ = XQ(2036),
-       zQ = XQ(40813),
-       sQ = XQ(5140),
-       FQ = XQ(5118),
-       PQ = XQ(40822),
-       gQ = XQ(40829),
-       JQ = XQ(5148),
-       rQ = XQ(40889),
-       IQ = XQ(2510),
- ... (44 more removed lines; see GitHub link above)
+     5233: (MM, rM, iM) => {
+       iM.d(rM, {
+         b: () => dM,
+         e: () => yM
+       });
+       var OM = iM(1116),
+         SM = iM.n(OM),
+         jM = iM(44),
+         aM = iM(1188),
+         PM = iM(5242),
+         nM = iM(2006),
+         QM = iM(2640),
+         zM = iM(5248),
+         LM = iM(1303);
+       const mM = new WeakMap;
+       let HM = 0;
+ ... (16 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L65-L66` → after: `L37-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L37-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L37-L254) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L65-L66)

```diff
-           qQ = () => {
-             XQ = !1, WQ.reset(), wQ(0, 0)
+           children: (0, LM.jsx)(PM.c, {
+             text: "icon" === rM.kind ? `[[${rM.icon}]]` : rM.text
+           })
+         })
+       }
+ 
+       function dM(MM) {
+         let {
+           display: rM
+         } = MM;
+         const {
+           selectedLanguage: iM
+         } = (0, aM.A)(), OM = (0, jM.useMemo)((() => (0, zM.e)((0, zM.i)(rM).plan.pieces)), [rM, iM.code]);
+         return (0, LM.jsxs)("div", {
+           className: SM()("Dialogue", {
+             DialogueAnimateIn: !1 !== rM.animateIn
+ ... (202 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L68-L74` → after: `L256-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L256-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L256-L378) · [Before (L68-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L68-L74)

```diff
-         return {
-           update: (qQ, TQ, FQ) => {
-             XQ || (QQ.discardPending(), XQ = !0);
-             const PQ = (0, BQ.p)(WQ, qQ, TQ, FQ, performance.now());
-             wQ(PQ.yawRadPerSec, PQ.pitchRadPerSec);
-             const gQ = QQ.drainLookDelta();
-             0 === gQ.jR && 0 === gQ.yR || (0, IQ.u)(sQ.G.PadLook, zQ.Zd.Gyro, gQ.jR, gQ.yR, 0)
+           for (const aM of MM.split("\n")) {
+             const MM = aM.match(tM);
+             SM || aM.startsWith("/*") ? (SM || (jM(), iM = void 0), OM.push(aM), SM = !aM.includes("*/")) : MM ? (jM(), iM = {
+               name: MM[1],
+               lines: [...OM, aM]
+             }, OM = []) : iM && (aM.startsWith(" ") || aM.startsWith("\t") || /^[}\])|]/.test(aM)) ? iM.lines.push(aM) : iM && "" !== aM.trim() && (jM(), iM = void 0)
+           }
+           return jM(), rM
+         }
+ 
+         function uM(MM) {
+           return "methods" === MM || "callbacks" === MM || "settings" === MM
+         }
+         const RM = {
+             readme: {
+               icon: "code-block",
+ ... (107 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L76-L87` → after: `L380-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L380-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L380-L404) · [Before (L76-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L76-L87)

```diff
-           release: qQ,
-           uninstall: qQ
-         }
-       },
-       uQ = () => {
-         const QQ = AQ();
-         return null !== QQ && 0 !== (RQ(QQ) & zQ.ae.PadSneakToggled)
-       },
-       LQ = () => {
-         const QQ = (QQ => {
-           const WQ = QQ => function() {
-             return (0, rQ.e)(), QQ(...arguments)
+           pM = {
+             Variations: {
+               icon: "layers",
+               summary: "Alternate versions of a custom game, and matchmaking players between them."
+             },
+             Plugins: {
+               icon: "puzzle",
+               summary: "Reusable first-party World Code features, imported from @plugins."
+             },
+             "Building a SessionBasedGame": {
+               icon: "trophy",
+               summary: "A full team game: lobby, teams, map voting, rounds and a winner."
+             },
+             "Interactable NPCs": {
+               icon: "speech-bubble",
+               summary: "Entities players talk to or use, such as shopkeepers and guards."
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L90-L116` → after: `L553-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L553-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L553-L568) · [Before (L90-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L90-L116)

```diff
-             primaryFireDown: WQ((QQ => (lQ(pQ, zQ.Td.Down | (QQ ? zQ.Td.Repeat : 0)), 0))),
-             primaryFireUp: WQ((() => {
-               iQ(pQ)
-             })),
-             altFireDown: WQ((() => (hQ(GQ), 0))),
-             altFireUp: WQ((() => {
-               iQ(GQ)
-             })),
-             jumpDown: WQ((() => {
-               cQ(bQ)
-             })),
-             specialActionDown: WQ((QQ => {
-               hQ(aQ[QQ])
-             })),
-             specialActionUp: WQ((QQ => {
-               iQ(aQ[QQ])
- ... (11 more removed lines; see GitHub link above)
+             page: OM,
+             anchor: SM
+           }
+         }
+         const vM = {
+           Examples: {
+             pageId: "snippets",
+             anchor: ""
+           },
+           Notes: {
+             pageId: "readme",
+             anchor: "Globals"
+           },
+           "Glossary-of-Referenced-Types": {
+             pageId: "types",
+             anchor: ""
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L125-L128` → after: `L571-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L571-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L571-L610) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L125-L128)

```diff
-         return {
-           bodies: () => QQ,
-           look: CQ(),
-           move: (QQ, XQ) => {
+ 
+         function FM(MM, rM) {
+           let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+           const OM = rM.slug ? `${MM}/${rM.slug}` : MM;
+           return iM ? `${OM}#${iM}` : OM
+         }
+         var BM = iM(5169);
+         const XM = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
+           IM = new Set(["GameApi", "Console", "_TypeOf"]),
+           KM = 4;
+ 
+         function qM(MM) {
+           let rM = MM.length;
+           for (; rM > 0 && "" === MM[rM - 1].trim();) rM--;
+           return MM.slice(0, rM)
+         }
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L130-L137` → after: `L612-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L612-L616) · [Before (L130-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L130-L137)

```diff
-             wQ();
-             const {
-               bits: TQ,
-               flips: sQ
-             } = (QQ => {
-               if (null === QQ) return {
-                 bits: zQ.Xd.Peek,
-                 flips: 0
+             const aM = TM(iM.slice(MM, null !== (jM = OM[rM + 1]) && void 0 !== jM ? jM : iM.length)),
+               PM = {
+                 name: iM[MM].match(XM)[1],
+                 doc: SM,
+                 lines: aM.lines
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L139-L145` → after: `L618-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L618-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L618-L695) · [Before (L139-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L139-L145)

```diff
-               const WQ = QQ.sneakHeld ? zQ.Xd.SneakHeld : 0;
-               return "hold" === QQ.mode ? {
-                 bits: WQ | zQ.Xd.SneakHoldMode,
-                 flips: QQ.sneakTogglePressed ? 1 : 0
-               } : {
-                 bits: WQ,
-                 flips: QQ.sneakPressed || QQ.sneakTogglePressed ? 1 : 0
+             return SM = aM.doc, PM
+           }))
+         }
+ 
+         function cM(MM) {
+           var rM;
+           const iM = MM.match(/^readonly \[([\s\S]*)\]$/);
+           return iM ? null !== (rM = iM[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== rM ? rM : [] : null
+         }
+ 
+         function Mr(MM) {
+           if (!MM.startsWith("{") || !MM.endsWith("}")) return null;
+           const rM = {
+               keys: [],
+               values: []
+             },
+ ... (62 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L147-L154` → after: `L697-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L697-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L697-L1067) · [Before (L147-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L147-L154)

```diff
-             })(XQ);
-             null !== (qQ = AQ()) && void 0 !== qQ && qQ.padMove(QQ.x, QQ.y, QQ.magnitude, QQ.headingOffset, (QQ => zQ.Xd.Active | (QQ.jumpHeld ? zQ.Xd.JumpHeld : 0) | (QQ.jumpPressed ? zQ.Xd.JumpPressed : 0) | (QQ.running ? zQ.Xd.Running : 0) | (QQ.sprintHeld ? zQ.Xd.SprintHeld : … [truncated]
-           },
-           stopMoving: () => {
-             var QQ;
-             WQ && (WQ = !(null !== (QQ = AQ()) && void 0 !== QQ && QQ.padMove(0, 0, 0, 0, 0, 0)), wQ(), XQ = (0, FQ.w)((() => {
-               wQ(), (0, yQ.g)(uQ())
-             })))
+               return SM(), rM
+             }(rM),
+             OM = new Map;
+           for (const SM of rM) IM.has(SM.name) || OM.has(SM.name) || OM.set(SM.name, ir(SM, iM));
+           return OM
+         }
+         let Sr, jr, ar;
+ 
+         function Pr() {
+           return jr ??= function(MM) {
+             const rM = VM(MM).find((MM => "GameApi" === MM.name)),
+               iM = new Map,
+               OM = rM.lines;
+             for (let jM = 0; jM < OM.length; jM++) {
+               var SM;
+               if (!OM[jM].trimStart().startsWith("/**")) continue;
+ ... (355 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L156-L159` → after: `L1069-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1069-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1069-L1078) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L156-L159)

```diff
-           uninstall: wQ,
-           deviceChanged: QQ => {
-             var XQ;
-             "touch" === QQ ? ((0, yQ.g)(!1), null !== (XQ = AQ()) && void 0 !== XQ && XQ.padMove(0, 0, 0, 0, zQ.Xd.EndToggle, 0) && (WQ = !1)) : "gamepad" === QQ && (0, yQ.g)(uQ())
+           timedClick: {
+             kO: 3e3,
+             icon: "fa-solid fa-computer-mouse",
+             label: [{
+               str: "Click to complete the QTE!"
+             }],
+             ZO: !0,
+             scale: 3,
+             rotation: 15,
+             oO: !1
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L161-L164` → after: `L1080-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1080-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1080-L1093) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L161-L164)

```diff
-           hasPlayer: () => null !== AQ(),
-           isPlayerDead: () => {
-             var QQ;
-             return !1 === (null === (QQ = AQ()) || void 0 === QQ ? void 0 : QQ.localPlayerAlive())
+           gravityBar: {
+             uO: 30,
+             YO: .25,
+             AO: 3,
+             xO: .8,
+             gravity: 1,
+             vO: 1.5,
+             FO: 8,
+             BO: 4,
+             WO: !1,
+             description: [{
+               str: "Hold to catch!"
+             }],
+             icon: "Moonfish"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L166-L168` → after: `L1095-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1095-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1095-L1103) · [Before (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L166-L168)

```diff
-           isReplayMode: () => {
-             const QQ = AQ();
-             return null !== QQ && 0 !== (RQ(QQ) & zQ.ae.Replay)
+           precisionBar: {
+             speed: .5,
+             IO: .15,
+             label: [{
+               str: "Click when the marker is within the green zone."
+             }],
+             icon: "",
+             scale: 1,
+             rotation: 0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L170-L172` → after: `L1105-L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1105-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1105-L1127) · [Before (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L170-L172)

```diff
-           isFreeCameraOn: () => {
-             const QQ = AQ();
-             return null !== QQ && 0 !== (RQ(QQ) & zQ.ae.FreeCam)
+           rhythmClick: {
+             qO: 5,
+             VO: 1200,
+             cO: .15,
+             MS: 3,
+             label: [{
+               str: "Click when the circles align!"
+             }],
+             icon: ""
+           }
+         };
+         var or = iM(313),
+           fr = iM(2099);
+ 
+         function Yr(MM) {
+           return MM.startsWith("fa-")
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L174-L175` → after: `L1129-L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1129-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1129-L1285) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L174-L175)

```diff
-           targetsBlock: () => EQ(AQ()),
-           selectedSlotEmpty: () => {
+           Ar = {
+             text: "Text",
+             icon: {
+               icon: "Pixelated Heart"
+             },
+             progressBar: {
+               type: "ProgressBar",
+               progress: .5
+             },
+             keyBinding: {
+               type: "StyledKeyBinding",
+               action: "jump"
+             }
+           };
+ 
+         function xr(MM) {
+ ... (141 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L177-L190` → after: `L1287-L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1287-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1287-L1404) · [Before (L177-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L177-L190)

```diff
-             return !(null !== (QQ = AQ()) && void 0 !== QQ && QQ.items.Ds())
-           },
-           pickBlockAllowed: () => !!TQ.e.get("creative") && !!TQ.e.get("canPickBlocks"),
-           scrollHotbar: QQ => {
-             lQ(zQ.Vd.Hotbar, zQ.Td.Down | (QQ > 0 ? zQ.Td.Next : 0))
-           },
-           hasFullInventory: PQ.k,
-           hasLobbyTab: () => (0, VQ.b)({
-             lobbyLeaderboardInfo: TQ.e.get("lobbyLeaderboardInfo"),
-             lobbyManage: TQ.e.get("lobbyManage")
-           }),
-           contextActionInputs: () => {
-             var QQ, WQ, XQ, wQ;
-             const qQ = AQ();
+             const aM = rM[SM],
+               PM = {
+                 ...MM
+               };
+             if (SM === rM.length - 1) return void 0 === iM ? delete PM[aM] : PM[aM] = iM, PM;
+             const nM = OM(null !== (jM = MM[aM]) && void 0 !== jM ? jM : {}, SM + 1);
+             return 0 === Object.keys(nM).length ? delete PM[aM] : PM[aM] = nM, PM
+           };
+           return function(MM) {
+             const rM = Object.keys(MM);
+             return "string" === typeof MM.str && 1 === rM.length ? MM.str : MM
+           }(OM(Br(MM), 0))
+         }
+ 
+         function Kr(MM, rM) {
+           const iM = xr(MM),
+ ... (102 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L192-L194` → after: `L1406-L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1406-L1407) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L192-L194)

```diff
-               holdingGun: !1 !== (null === qQ || void 0 === qQ ? void 0 : qQ.localPlayerAlive()) && "Gun" === (null === qQ || void 0 === qQ || null === (QQ = qQ.items.Ds()) || void 0 === QQ || null === (WQ = QQ.typeObj) || void 0 === WQ ? void 0 : WQ.type),
-               customButtons: null !== (XQ = TQ.e.get("customButtons")) && void 0 !== XQ ? XQ : null,
-               touchscreenActionButton: null !== (wQ = TQ.e.get("touchscreenActionButton")) && void 0 !== wQ ? wQ : null
+               parts: null,
+               error: OM instanceof SyntaxError ? "This isn't a valid array yet." : OM.message
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L196-L198` → after: `L1409-L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1409-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1409-L1420) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L196-L198)

```diff
-           },
-           pressTouchButton: QQ => {
-             QQ ? hQ(HQ) : iQ(HQ)
+           }
+           if (!Array.isArray(rM)) return {
+             parts: null,
+             error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
+           };
+           const iM = rM.findIndex((MM => !ii(MM)));
+           return -1 !== iM ? {
+             parts: null,
+             error: `Part ${iM+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
+           } : {
+             parts: rM,
+             error: null
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L201-L207` → after: `L1423-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1423-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1423-L1568) · [Before (L201-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L201-L207)

```diff
-       },
-       kQ = () => {
-         const QQ = (0, qQ.d)(LQ()),
-           WQ = (0, wQ.d)(),
-           XQ = null;
-         return () => {
-           QQ(), WQ(), null === XQ || void 0 === XQ || XQ()
+         const Si = 1 / Wr.f.clientTicksPerSecond,
+           ji = 700,
+           ai = {
+             type: null,
+             parameters: null,
+             state: null,
+             isActive: !1
+           },
+           Pi = {
+             progressBar: Zr.progressBar.sO,
+             timedClick: Zr.timedClick.icon,
+             gravityBar: Zr.gravityBar.icon,
+             precisionBar: Zr.precisionBar.icon,
+             rhythmClick: Zr.rhythmClick.icon
+           };
+ 
+ ... (130 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L260-L266` → after: `L1571-L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1571-L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1571-L1599) · [Before (L260-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L260-L266)

```diff
-     function DQ(QQ, WQ) {
-       for (const wQ of FQ) try {
-         wQ(QQ)
-       } catch (XQ) {
-         WQ(XQ)
-       }
-     }
+         function Qi(MM) {
+           let {
+             level: rM,
+             text: iM,
+             anchor: OM,
+             className: SM
+           } = MM;
+           const aM = `h${Math.min(rM,6)}`;
+           return (0, hM.jsxs)(aM, {
+                 id: OM,
+                 className: jM()("DocsHeading", SM),
+                 children: [(0, hM.jsx)(Cr, {
+                       text: iM
+                     }), (0, hM.jsx)("a", {
+                         className: "DocsHeadingAnchor",
+                         href: `#${OM}`,
+ ... (13 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L268-L282` → after: `L1601-L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1601-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1601-L1625) · [Before (L268-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L268-L282)

```diff
-     function pQ(QQ) {
-       return PQ.add(QQ), () => {
-         PQ.delete(QQ)
-       }
-     }
- 
-     function GQ(QQ, WQ) {
-       const XQ = gQ < 0 ? 0 : QQ - gQ;
-       gQ = QQ;
-       for (const qQ of PQ) try {
-         qQ(XQ)
-       } catch (wQ) {
-         WQ(wQ)
-       }
-     }
+                           function Wi(MM) {
+                             const rM = [];
+                             for (const iM of MM) {
+                               const MM = Ri(iM),
+                                 OM = rM.at(-1),
+                                 SM = "table" === iM.kind;
+                               MM ? "names" === (null === OM || void 0 === OM ? void 0 : OM.kind) && OM.isSongs === SM ? OM.names.push(...MM) : rM.push({
+                                 kind: "names",
+                                 names: MM,
+                                 isSongs: SM
+                               }) : rM.push({
+                                 kind: "block",
+                                 block: iM
+                               })
+                             }
+                             return rM
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L284-L288` → after: `L1627-L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1627-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1627-L1630) · [Before (L284-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L284-L288)

```diff
-     function UQ(QQ) {
-       return JQ.add(QQ), () => {
-         JQ.delete(QQ)
-       }
-     }
+                           function Di(MM, rM) {
+                             return `${si[MM]}-${(0,bM.r)(rM)}`
+                           }
+                           const ki = new WeakMap;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L290-L295` → after: `L1632-L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1632-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1632-L1673) · [Before (L290-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L290-L295)

```diff
-     function bQ(QQ) {
-       return rQ.add(QQ), () => {
-         rQ.delete(QQ)
-       }
-     }
-     let vQ = 0;
+                           function Zi(MM, rM, iM) {
+                             let OM = ki.get(rM);
+                             if (!OM) {
+                               OM = new Map;
+                               const iM = new Set;
+                               for (const SM of (0, bM.v)(rM)) {
+                                 const rM = Wi(ti(SM.blocks)).map((rM => {
+                                   if ("block" === rM.kind) return rM;
+                                   return {
+                                     kind: "names",
+                                     names: rM.names.map((rM => {
+                                       var OM, jM;
+                                       const aM = Di(MM, rM.name);
+                                       let PM = aM;
+                                       for (let MM = 2; iM.has(PM); MM++) PM = `${aM}-${MM}`;
+                                       return iM.add(PM), {
+ ... (26 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L297-L299` → after: `L1675-L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1675-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1675-L1701) · [Before (L297-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L297-L299)

```diff
-     function dQ(QQ) {
-       vQ += QQ
-     }
+                           function Ai(MM) {
+                             return Object.hasOwn(Yi.d, MM) ? Yi.d[MM] : null
+                           }
+                           const xi = {
+                             dir1: [-1, -1, -1],
+                             dir2: [1, 1, 1],
+                             texture: "bubble",
+                             minLifeTime: .2,
+                             maxLifeTime: .6,
+                             minEmitPower: 2,
+                             maxEmitPower: 2,
+                             minSize: .25,
+                             maxSize: .35,
+                             manualEmitCount: 20,
+                             gravity: [0, -10, 0],
+                             colorGradients: [{
+ ... (11 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L301-L304` → after: `L1703-L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1703-L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1703-L1705) · [Before (L301-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L301-L304)

```diff
-     function HQ() {
-       const QQ = vQ;
-       return vQ = 0, QQ
-     }
+                           function vi(MM, rM, iM) {
+                             return rM + (iM - rM) * MM()
+                           }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L306-L310` → after: `L1707-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1707-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1707-L1709) · [Before (L306-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L306-L310)

```diff
-     function aQ(QQ) {
-       return BQ.add(QQ), () => {
-         BQ.delete(QQ)
-       }
-     }
+                           function Fi(MM, rM, iM) {
+                             return MM + (rM - MM) * iM
+                           }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L312-L698` → after: `L1711-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1711-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1711-L1713) · [Before (L312-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L312-L698)

```diff
-     function lQ(QQ) {
-       return yQ.add(QQ), () => {
-         yQ.delete(QQ)
-       }
-     }
- 
-     function hQ() {
-       IQ = 0, jQ = 0, gQ = -1
-     }
- 
-     function iQ(QQ, WQ) {
-       if ("paced" === QQ) return jQ += WQ, null;
-       if ("drawn" !== QQ && "skipped" !== QQ) return null;
-       const XQ = WQ + jQ;
-       return jQ = 0, XQ
-     }
- ... (371 more removed lines; see GitHub link above)
+                           function Bi(MM) {
+                             return MM.length > 0 && "timeFraction" in MM[0]
+                           }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L700-L787` → after: `L1715-L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1715-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/92.js#L1715-L7325) · [Before (L700-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/92.js#L700-L787)

```diff
-     function PQ(QQ, WQ) {
-       var XQ;
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
-       FQ.set(wQ, (null !== (XQ = FQ.get(wQ)) && void 0 !== XQ ? XQ : 0) & ~QQ | WQ & QQ);
-       let TQ = 0;
-       for (const qQ of FQ.values()) TQ |= qQ;
-       return (0, qQ.C)(QQ, TQ & QQ)
-     }
-   },
-   37217: (QQ, WQ, XQ) => {
-     function wQ(QQ) {
-       return QQ.includes("Leaf Bed")
-     }
- 
-     function qQ(QQ) {
-       return / Bed(?: Head)?(?:\||$)/.test(QQ) && !wQ(QQ)
- ... (72 more removed lines; see GitHub link above)
+                           function Xi(MM, rM) {
+                             if (0 === MM.colorGradients.length) return [{
+                               at: 0,
+                               colour: [1, 1, 1, 1]
+                             }];
+                             if (!Bi(MM.colorGradients)) {
+                               const iM = MM.colorGradients,
+                                 {
+                                   color: OM
+                                 } = iM[Math.floor(rM() * iM.length) % iM.length];
+                               return [{
+                                 at: 0,
+                                 colour: [OM[0] / 255, OM[1] / 255, OM[2] / 255, 1]
+                               }]
+                             }
+                             return [...MM.colorGradients].sort(((MM, rM) => MM.timeFraction - rM.timeFraction)).map((MM => {
+ ... (5595 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/93.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/93.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L4-L273` → after: `L4-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L4-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L4-L203) · [Before (L4-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L4-L273)

```diff
-   5140: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       $b: () => aQ,
-       A: () => sQ,
-       Ab: () => uQ,
-       C: () => wQ,
-       Cb: () => yQ,
-       F: () => TQ,
-       G: () => GQ,
-       Gb: () => hQ,
-       I: () => mQ,
-       Ib: () => lQ,
-       M: () => JQ,
-       Mb: () => LQ,
-       Nb: () => nQ,
-       Pb: () => fQ,
- ... (254 more removed lines; see GitHub link above)
+   5121: MM => {
+     function rM(MM) {
+       return MM instanceof Map ? MM.clear = MM.delete = MM.set = function() {
+         throw new Error("map is read-only")
+       } : MM instanceof Set && (MM.add = MM.clear = MM.delete = function() {
+         throw new Error("set is read-only")
+       }), Object.freeze(MM), Object.getOwnPropertyNames(MM).forEach((iM => {
+         const OM = MM[iM],
+           SM = typeof OM;
+         "object" !== SM && "function" !== SM || Object.isFrozen(OM) || rM(OM)
+       })), MM
+     }
+     class iM {
+       constructor(MM) {
+         void 0 === MM.data && (MM.data = {}), this.data = MM.data, this.isMatchIgnored = !1
+       }
+ ... (184 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L275-L280` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L205-L206) · [Before (L275-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L275-L280)

```diff
-         Busy: 0,
-         Range: 1,
-         OtherBody: 2,
-         TooLarge: 3,
-         Corrupt: 4,
-         Ended: 5
+         JL: "\\\\[\\s\\S]",
+         relevance: 0
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L288-L296` → after: `L209-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L209-L213) · [Before (L288-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L288-L296)

```diff
-         FilePartDone: 526,
-         FileDone: 527,
-         Control: 528,
-         Prefs: 529,
-         Option: 530,
-         FlyingText: 531,
-         PlayerKilled: 532,
-         Killfeed: 533,
-         Session: 534
+         scope: "string",
+         JL: "'",
+         end: "'",
+         illegal: "\\n",
+         contains: [bM]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L299-L302` → after: `L216-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L216-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L216-L220) · [Before (L299-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L299-L302)

```diff
-         ToggleRecording: 0,
-         SaveClip: 1,
-         ViewerOpened: 2,
-         ViewerClosed: 3
+         scope: "string",
+         JL: '"',
+         end: '"',
+         illegal: "\\n",
+         contains: [bM]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L304-L307` → after: `L222-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L222-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L222-L239) · [Before (L304-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L304-L307)

```diff
-       LQ = {
-         Clip: 0,
-         Recording: 1,
-         Edited: 2
+       gM = function(MM, rM) {
+         const iM = SM({
+           scope: "comment",
+           JL: MM,
+           end: rM,
+           contains: []
+         }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
+         iM.contains.push({
+           scope: "doctag",
+           JL: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
+           end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
+           excludeBegin: !0,
+           relevance: 0
+         });
+         const OM = JM("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
+         return iM.contains.push({
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L310-L325` → after: `L245-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L245-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L245-L247) · [Before (L310-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L310-L325)

```diff
-         RecordingStarted: 0,
-         RecordingStopped: 1,
-         RecordingDiscarded: 2,
-         ClipSaved: 3,
-         ClipEmpty: 4,
-         ClippingNotOn: 5,
-         Disallowed: 6,
-         ClippingOn: 7,
-         ClippingOff: 8,
-         LimitReached: 9,
-         ClipSettingsChanged: 10,
-         SaveBusy: 11,
-         CloseViewerFirst: 12,
-         FileDiscarded: 13,
-         SaveFailed: 14,
-         RecordingTurnedOff: 15
+         scope: "number",
+         JL: GM,
+         relevance: 0
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L328-L331` → after: `L250-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L250-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L250-L252) · [Before (L328-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L328-L331)

```diff
-         Cleared: 0,
-         Text: 1,
-         Int: 2,
-         Double: 3
+         scope: "number",
+         JL: CM,
+         relevance: 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L335-L337` → after: `L255-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L255-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L255-L257) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L335-L337)

```diff
-         FlyingText: 1,
-         PlayerKilled: 2,
-         Killfeed: 3
+         scope: "number",
+         JL: eM,
+         relevance: 0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L340-L344` → after: `L260-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L260-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L260-L268) · [Before (L340-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L340-L344)

```diff
-         None: 0,
-         Paused: 1,
-         Playing: 2,
-         Cropping: 3,
-         Loading: 4
+         scope: "regexp",
+         JL: /\/(?=[^/\n]*\/)/,
+         end: /\/[gimuy]*/,
+         contains: [bM, {
+           JL: /\[/,
+           end: /\]/,
+           relevance: 0,
+           contains: [bM]
+         }]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L348-L351` → after: `L271-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L271-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L271-L273) · [Before (L348-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L348-L351)

```diff
-         UiText: 0,
-         Environment: 6,
-         Hud: 12,
-         Count: 19
+         scope: "title",
+         JL: EM,
+         relevance: 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L355-L366` → after: `L276-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L276-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L276-L278) · [Before (L355-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L355-L366)

```diff
-         SkyTable: 600,
-         SkyImagesReady: 601,
-         SkyTableHeaderBytes: 8,
-         SkyTableEntryBytes: 92,
-         SkyImagesReadyBytes: 32,
-         KindNone: 0,
-         KindCustom: 1,
-         KindEarth: 2,
-         AddedId: 65534,
-         MaxAdded: 32,
-         CubeFaces: 6,
-         Failed: 0
+         scope: "title",
+         JL: UM,
+         relevance: 0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L369-L393` → after: `L281-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L281-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L281-L303) · [Before (L369-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L369-L393)

```diff
-         Bytes: 88,
-         Inclination: 0,
-         Turbidity: 1,
-         Luminance: 2,
-         Rayleigh: 3,
-         MieCoefficient: 4,
-         MieDirectionalG: 5,
-         Distance: 6,
-         Azimuth: 7,
-         Params: 8,
-         SunPosition: 256,
-         CameraOffsetX: 512,
-         CameraOffsetY: 1024,
-         CameraOffsetZ: 2048,
-         Up: 4096,
-         VertexTint: 8192,
- ... (9 more removed lines; see GitHub link above)
+         JL: "\\.\\s*" + UM,
+         relevance: 0
+       };
+     var YM = Object.freeze({
+       __proto__: null,
+       APOS_STRING_MODE: wM,
+       BACKSLASH_ESCAPE: bM,
+       BINARY_NUMBER_MODE: DM,
+       BINARY_NUMBER_RE: eM,
+       COMMENT: gM,
+       C_BLOCK_COMMENT_MODE: RM,
+       C_LINE_COMMENT_MODE: uM,
+       C_NUMBER_MODE: sM,
+       C_NUMBER_RE: CM,
+       END_SAME_AS_BEGIN: function(MM) {
+         return Object.assign(MM, {
+ ... (7 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L395-L551` → after: `L305-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L305-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L305-L312) · [Before (L395-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L395-L551)

```diff
-       ZQ = {
-         None: 0,
-         InputOverCapacity: 1,
-         InputTruncated: 2,
-         InputUnknownKind: 3,
-         InputNonFinite: 4,
-         NetOverCapacity: 16,
-         NetTruncated: 17,
-         NetOversize: 18,
-         NetBadKind: 19,
-         NetConnUnknown: 20,
-         NetConnBackwards: 21,
-         WorkerOverCapacity: 32,
-         WorkerTruncated: 33,
-         WorkerUnknownKind: 34,
-         TimeNonFinite: 48,
- ... (141 more removed lines; see GitHub link above)
+       HASH_COMMENT_MODE: pM,
+       IDENT_RE: EM,
+       MATCH_NOTHING_RE: /\b\B/,
+       METHOD_GUARD: fM,
+       NUMBER_MODE: WM,
+       NUMBER_RE: GM,
+       PHRASAL_WORDS_MODE: {
+         JL: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L553-L577` → after: `L314-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L314-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L314-L328) · [Before (L553-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L553-L577)

```diff
-       OQ = 8,
-       KQ = {
-         GameCodeMessage: 4,
-         NewOtherEntitySettings: 23,
-         NewClientOptions: 37,
-         Chat: 64,
-         UiRequestPopup: 8,
-         TaskProgress: 9,
-         CustomKillfeed: 15,
-         TopRightHelper: 24,
-         NewUiRequest: 51,
-         PlayerKilled: 61,
-         OverShopInfo: 43,
-         ShowShopTutorial: 76,
-         SetCookie: 0,
-         LeaveValues: 85,
- ... (9 more removed lines; see GitHub link above)
+       QUOTE_STRING_MODE: tM,
+       REGEXP_MODE: kM,
+       RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
+       SHEBANG: function() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const rM = /^#![ ]*\//;
+         return MM.binary && (MM.JL = hM(rM, /.*\b/, MM.binary, /\b.*/)), SM({
+           scope: "meta",
+           JL: rM,
+           end: /$/,
+           relevance: 0,
+           "on:begin": (MM, rM) => {
+             0 !== MM.index && rM.ignoreMatch()
+           }
+         }, MM)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L579-L678` → after: `L330-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L330-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L330-L332) · [Before (L579-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L579-L678)

```diff
-       mQ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
-   },
-   5134: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       $: () => wQ.z,
-       $b: () => hQ,
-       $d: () => YQ,
-       A: () => zQ,
-       Ad: () => lQ,
-       Bc: () => TW,
-       Cb: () => wQ.M,
-       Cd: () => wQ.Zb,
-       D: () => RQ,
-       E: () => BW,
-       Fb: () => XW,
-       Fc: () => wQ.fb,
- ... (84 more removed lines; see GitHub link above)
+       TITLE_MODE: ZM,
+       UNDERSCORE_IDENT_RE: UM,
+       UNDERSCORE_TITLE_MODE: oM
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L686-L687` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L335-L336) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L686-L687)

```diff
-     function FQ() {
-       return crypto.getRandomValues(new Uint32Array(sQ))
+     function NM(MM, rM) {
+       "." === MM.input[MM.index - 1] && rM.ignoreMatch()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L709-L710` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L339-L340) · [Before (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L709-L710)

```diff
-     function jQ(QQ) {
-       return (QQ.nametagsHidden ? vQ.NametagsHidden : 0) | (QQ.crouchToggle ? vQ.CrouchToggle : 0) | (QQ.bhopDisabled ? vQ.BhopDisabled : 0) | (QQ.disableBobbing ? vQ.DisableBobbing : 0) | (null !== QQ.ezTowering ? vQ.EzTowering : 0) | ("jump" === QQ.ezTowering ? vQ.EzTowerJump : … [truncated]
+     function AM(MM, rM) {
+       void 0 !== MM.className && (MM.scope = MM.className, delete MM.className)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L748-L754` → after: `L343-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L343-L344) · [Before (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L748-L754)

```diff
-     function UQ(QQ) {
-       const WQ = {
-         off: 0,
-         lit: IQ.CellLight,
-         all: IQ.CellLight | IQ.CellLightUnlit
-       } [QQ.cellLight];
-       return (QQ.showFog ? IQ.ShowFog : 0) | (QQ.lighting ? IQ.Lighting : 0) | (QQ.chunkFade ? IQ.ChunkFade : 0) | WQ
+     function xM(MM, rM) {
+       rM && MM.beginKeywords && (MM.JL = "\\b(" + MM.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", MM.__beforeBegin = NM, MM.keywords = MM.keywords || MM.beginKeywords, delete MM.beginKeywords, void 0 === MM.relevance && (MM.relevance = 0))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L801` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L348) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L801)

```diff
-       return (QQ | WQ << 8) >>> 0
+       Array.isArray(MM.illegal) && (MM.illegal = JM(...MM.illegal))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L804-L805` → after: `L351-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L351-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L351-L355) · [Before (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L804-L805)

```diff
-     function CQ(QQ) {
-       return 255 & QQ
+     function FM(MM, rM) {
+       if (MM.match) {
+         if (MM.JL || MM.end) throw new Error("begin & end are not supported with match");
+         MM.JL = MM.match, delete MM.match
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L808-L809` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L358-L359) · [Before (L808-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L808-L809)

```diff
-     function uQ(QQ) {
-       return QQ >>> 8
+     function BM(MM, rM) {
+       void 0 === MM.relevance && (MM.relevance = 1)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L812-L813` → after: `L376-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L376-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L376-L388) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L812-L813)

```diff
-     function LQ(QQ) {
-       return QQ + 3 & -4
+     function KM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
+       const OM = Object.create(null);
+       return "string" === typeof MM ? SM(iM, MM.split(" ")) : Array.isArray(MM) ? SM(iM, MM) : Object.keys(MM).forEach((function(iM) {
+         Object.assign(OM, KM(MM[iM], rM, iM))
+       })), OM;
+ 
+       function SM(MM, iM) {
+         rM && (iM = iM.map((MM => MM.toLowerCase()))), iM.forEach((function(rM) {
+           const iM = rM.split("|");
+           OM[iM[0]] = [MM, qM(iM[0], iM[1])]
+         }))
+       }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L815-L826` → after: `L390-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L390-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L390-L398) · [Before (L815-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L815-L826)

```diff
-     const kQ = 16777216,
-       fQ = 20;
-     const SQ = 8,
-       tQ = 8,
-       oQ = 16777216,
-       eQ = {
-         JobResult: 1,
-         WorkerStarted: 2,
-         WorkerLost: 3,
-         WorldgenResult: 4,
-         WorldgenStarted: 5,
-         WorldgenLost: 6
+ 
+     function qM(MM, rM) {
+       return rM ? Number(rM) : function(MM) {
+         return IM.includes(MM.toLowerCase())
+       }(MM) ? 0 : 1
+     }
+     const TM = {},
+       VM = MM => {
+         console.error(MM)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L828-L833` → after: `L400-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L400-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L400-L402) · [Before (L828-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L828-L833)

```diff
-       nQ = {
-         Ok: 0,
-         Refused: 1,
-         Trapped: 2,
-         NotHeld: 3,
-         HeapRefused: 4
+       cM = function(MM) {
+         for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
+         console.log(`WARN: ${MM}`, ...iM)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L835-L838` → after: `L404-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L404-L405) · [Before (L835-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L835-L838)

```diff
-       xQ = 16,
-       YQ = {
-         Lost: 0,
-         Gone: 1
+       Mr = (MM, rM) => {
+         TM[`${MM}/${rM}`] || (console.log(`Deprecated as of ${MM}. ${rM}`), TM[`${MM}/${rM}`] = !0)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L840-L846` → after: `L407-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L407-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L407-L418) · [Before (L840-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L840-L846)

```diff
-       NQ = {
-         Init: 1,
-         Mesh: 2,
-         WorldgenSeed: 3,
-         Generate: 4,
-         Retire: 5
-       };
+       rr = new Error;
+ 
+     function ir(MM, rM, iM) {
+       let {
+         key: OM
+       } = iM, SM = 0;
+       const jM = MM[OM],
+         aM = {},
+         PM = {};
+       for (let nM = 1; nM <= rM.length; nM++) PM[nM + SM] = jM[nM], aM[nM + SM] = !0, SM += dM(rM[nM - 1]);
+       MM[OM] = PM, MM[OM]._emit = aM, MM[OM]._multi = !0
+     }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L849` → after: `L421-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L421-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L421-L449) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L849)

```diff
-       return QQ === NQ.WorldgenSeed || QQ === NQ.Generate
+       ! function(MM) {
+         MM.scope && "object" === typeof MM.scope && null !== MM.scope && (MM.beginScope = MM.scope, delete MM.scope)
+       }(MM), "string" === typeof MM.beginScope && (MM.beginScope = {
+           _wrap: MM.beginScope
+         }), "string" === typeof MM.endScope && (MM.endScope = {
+           _wrap: MM.endScope
+         }),
+         function(MM) {
+           if (Array.isArray(MM.JL)) {
+             if (MM.skip || MM.excludeBegin || MM.returnBegin) throw VM("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), rr;
+             if ("object" !== typeof MM.beginScope || null === MM.beginScope) throw VM("beginScope must be object"), rr;
+             ir(MM, MM.JL, {
+               key: "beginScope"
+             }), MM.JL = lM(MM.JL, {
+               joinWith: ""
+             })
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L931-L933` → after: `L453-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L453-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L453-L546) · [Before (L931-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L931-L933)

```diff
-       for (const [WQ, XQ] of Object.entries(wQ.n))
-         if (XQ === QQ) return WQ;
-       return `Unknown${QQ}`
+       function rM(rM, iM) {
+         return new RegExp(zM(rM), "m" + (MM.case_insensitive ? "i" : "") + (MM.unicodeRegex ? "u" : "") + (iM ? "g" : ""))
+       }
+       class iM {
+         constructor() {
+           this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
+         }
+         addRule(MM, rM) {
+           rM.position = this.position++, this.matchIndexes[this.matchAt] = rM, this.regexes.push([rM, MM]), this.matchAt += dM(MM) + 1
+         }
+         compile() {
+           0 === this.regexes.length && (this.exec = () => null);
+           const MM = this.regexes.map((MM => MM[1]));
+           this.matcherRe = rM(lM(MM, {
+             joinWith: "|"
+           }), !0), this.lastIndex = 0
+ ... (78 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L937-L946` → after: `L550-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L550-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L550-L554) · [Before (L937-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L937-L946)

```diff
-       return {
-         status: QQ[wQ.F.Status],
-         lastError: QQ[wQ.F.LastError],
-         lastErrorDetail: QQ[wQ.F.LastErrorDetail],
-         errorCount: QQ[wQ.F.ErrorCount],
-         frameIndex: QQ[wQ.F.FrameIndex],
-         tickIndex: QQ[wQ.F.TickIndex],
-         renderPending: QQ[wQ.F.RenderPending],
-         firstView: QQ[wQ.F.FirstView],
-         chunksCancelled: QQ[wQ.F.ChunksCancelled]
+       return !!MM && (MM.endsWithParent || jr(MM.starts))
+     }
+     class ar extends Error {
+       constructor(MM, rM) {
+         super(MM), this.name = "HTMLInjectionError", this.html = rM
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L950` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L974) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L950)

```diff
-   5126: (QQ, WQ, XQ) => {
+   5115: (MM, rM, iM) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L952-L954` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L976) · [Before (L952-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L952-L954)

```diff
-       b: () => zQ,
-       e: () => TQ,
-       f: () => qQ
+       d: () => OM
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L956` → after: `L978-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L978-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L978-L991) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L956)

```diff
-     var wQ = XQ(5134);
+     const OM = iM(5121)
+   },
+   5125: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => LM
+     });
+     const OM = "[A-Za-z$_][0-9A-Za-z$_]*",
+       SM = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugge … [truncated]
+       jM = ["true", "false", "null", "undefined", "NaN", "Infinity"],
+       aM = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigU … [truncated]
+       PM = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
+       nM = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
+       QM = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
+       zM = [].concat(nM, aM, PM);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L959` → after: `L994-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L994-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L994-L1323) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L959)

```diff
-       return "none" !== QQ
+       const rM = MM.regex,
+         iM = OM,
+         LM = "<>",
+         mM = "</>",
+         HM = {
+           JL: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (MM, rM) => {
+             const iM = MM[0].length + MM.index,
+               OM = MM.input[iM];
+             if ("<" === OM || "," === OM) return void rM.ignoreMatch();
+             let SM;
+             ">" === OM && (((MM, rM) => {
+               let {
+                 after: iM
+               } = rM;
+ ... (314 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L962-L970` → after: `L1339-L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L1339-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L1339-L1668) · [Before (L962-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L962-L970)

```diff
-     function TQ(QQ, WQ) {
-       if (!QQ) return "none";
-       switch (WQ) {
-         case wQ.cb.Drawn:
-           return "drawn";
-         case wQ.cb.Paced:
-           return "paced";
-         default:
-           return "skipped"
+     function LM(MM) {
+       const rM = MM.regex,
+         iM = OM,
+         LM = "<>",
+         mM = "</>",
+         HM = {
+           JL: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (MM, rM) => {
+             const iM = MM[0].length + MM.index,
+               OM = MM.input[iM];
+             if ("<" === OM || "," === OM) return void rM.ignoreMatch();
+             let SM;
+             ">" === OM && (((MM, rM) => {
+               let {
+                 after: iM
+ ... (314 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L975` → after: `L1673-L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L1673-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/93.js#L1673-L1723) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/93.js#L975)

```diff
-       return "drawn" === QQ
+       const rM = MM.regex,
+         iM = LM(MM),
+         aM = OM,
+         PM = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
+         nM = {
+           JL: [/namespace/, /\s+/, MM.IDENT_RE],
+           beginScope: {
+             1: "keyword",
+             3: "title.class"
+           }
+         },
+         mM = {
+           beginKeywords: "interface",
+           end: /\{/,
+           excludeEnd: !0,
+           keywords: {
+ ... (35 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/94.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/94.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L4)

```diff
-   36674: (QQ, WQ, XQ) => {
+   5142: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L7` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L8) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L7)

```diff
-       g: () => sQ,
+       h: () => aM,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L9-L10` → after: `L10-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L10-L15) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L9-L10)

```diff
-       k: () => FQ,
-       m: () => pQ
+       l: () => JM,
+       n: () => PM,
+       q: () => SM,
+       r: () => jM,
+       v: () => hM,
+       z: () => HM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L12-L38` → after: `L17-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L17-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L17-L23) · [Before (L12-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L12-L38)

```diff
-     var wQ = XQ(670),
-       qQ = XQ(1812),
-       TQ = XQ(5140);
-     class zQ {
-       constructor(QQ, WQ) {
-         this.width = QQ, this.yJ = WQ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(QQ * WQ)
-       }
-       push(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const XQ = this.data,
-           wQ = this.next * this.width;
-         for (let qQ = 0; qQ < this.width; qQ++) XQ[wQ + qQ] = QQ[WQ + qQ];
-         this.next = (this.next + 1) % this.yJ, this.size = Math.min(this.size + 1, this.yJ)
-       }
-       rows() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (11 more removed lines; see GitHub link above)
+     const OM = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
+ 
+     function SM(MM) {
+       try {
+         return decodeURIComponent(MM.slice(1))
+       } catch {
+         return MM.slice(1)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L77` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L28) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L77)

```diff
-       return "js" === QQ ? gQ.jsClient : gQ.wasmClient
+       return MM.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L79-L82` → after: `L30-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L30-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L30-L33) · [Before (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L79-L82)

```diff
-     class DQ {
-       constructor() {
-         this.steps = new zQ(sQ, JQ), this.events = new zQ(IQ.length, JQ), this.frames = new zQ(jQ.length, JQ), this.cameraSets = new zQ(TQ.f, 256), this.changes = new zQ(yQ.length, 256)
-       }
+     const aM = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${OM.source}`, "g");
+ 
+     function PM(MM, rM) {
+       return 2 === MM.length ? rM.replace(/^ (.*) $/, "$1") : rM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L84-L122` → after: `L35-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L35-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L35-L68) · [Before (L84-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L84-L122)

```diff
-     const pQ = new class {
-       constructor() {
-         this.rings = null, this.sample = new Float64Array(IQ.length), this.startedClient = null, this.startedAtMs = 0
-       }
-       get client() {
-         return this.startedClient
-       }
-       start(QQ, WQ) {
-         this.startedClient = QQ, this.startedAtMs = performance.now(), null !== this.rings ? this.change(VQ(QQ)) : WQ && this.allocate()
-       }
-       lockGained() {
-         this.allocate(), this.change(gQ.lockGained)
-       }
-       allocate() {
-         null === this.rings && (this.rings = new DQ, null !== this.startedClient && this.changeAt(this.startedAtMs, VQ(this.startedClient), 1))
-       }
- ... (23 more removed lines; see GitHub link above)
+ 
+     function nM(MM) {
+       return "" === MM.trim()
+     }
+ 
+     function QM(MM) {
+       const rM = [];
+       for (const iM of MM.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) rM.length > 0 && rM[rM.length - 1].endsWith("\\") ? rM[rM.length - 1] += `|${iM}` : rM.push(iM);
+       return rM.map((MM => MM.trim().replaceAll("\\|", "|")))
+     }
+     const zM = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;
+ 
+     function LM(MM) {
+       const rM = [],
+         iM = [{
+           indent: -1,
+ ... (18 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L124-L128` → after: `L70-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L70-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L70-L147) · [Before (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L124-L128)

```diff
-       changeAt(QQ, WQ, XQ) {
-         const wQ = this.rings;
-         if (null === wQ) return;
-         const qQ = this.sample;
-         qQ[0] = QQ, qQ[1] = WQ, qQ[2] = XQ, wQ.changes.push(qQ)
+       return rM
+     }
+ 
+     function mM(MM) {
+       const rM = MM.replace(/\r\n/g, "\n").split("\n"),
+         iM = [];
+       let OM = 0;
+       for (; OM < rM.length;) {
+         const MM = rM[OM];
+         if (nM(MM)) {
+           OM++;
+           continue
+         }
+         const SM = MM.match(/^\s*```\s*(\w*)\s*$/);
+         if (SM) {
+           const MM = [];
+ ... (62 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L130-L133` → after: `L149-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L149-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L149-L177) · [Before (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L130-L133)

```diff
-       dumpText() {
-         var QQ, WQ;
-         const XQ = this.rings;
-         return [`look records (${this.startedClient}): ${rQ.join(",")}`, ...null !== (QQ = null === XQ || void 0 === XQ ? void 0 : XQ.steps.lines()) && void 0 !== QQ ? QQ : [], `mousemove events: ${IQ.join(",")}`, ...null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.event … [truncated]
+       return iM
+     }
+ 
+     function HM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
+       const iM = mM(MM);
+       let OM = "";
+       const SM = [],
+         jM = [],
+         aM = new Map;
+       for (const QM of iM) {
+         if ("heading" === QM.kind) {
+           var PM;
+           const MM = (null !== (PM = aM.get(QM.anchor)) && void 0 !== PM ? PM : 0) + 1;
+           aM.set(QM.anchor, MM), MM > 1 && (QM.anchor = `${QM.anchor}-${MM}`)
+         }
+ ... (13 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L135-L172` → after: `L179-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L179-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L179-L183) · [Before (L135-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L135-L172)

```diff
-       toJson(QQ, WQ) {
-         var XQ;
-         const qQ = QQ - 6e4,
-           TQ = this.rings,
-           zQ = function(QQ, WQ) {
-             var XQ;
-             let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-             const TQ = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.rows(wQ, qQ)) && void 0 !== XQ ? XQ : [];
-             return {
-               columns: WQ,
-               fromMs: 0 === TQ.length ? null : TQ[0][wQ],
-               rows: TQ
-             }
-           };
-         return {
-           version: wQ.c,
- ... (22 more removed lines; see GitHub link above)
+       const nM = MM => {
+         for (;
+           "rule" === (null === (rM = MM.at(-1)) || void 0 === rM ? void 0 : rM.kind);) {
+           var rM;
+           MM.pop()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L175-L179` → after: `L193-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L193-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L193-L225) · [Before (L175-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L175-L179)

```diff
-       save(QQ) {
-         const WQ = JSON.stringify(this.toJson(performance.now(), QQ));
-         (0, qQ.e)(new Blob([WQ], {
-           type: "application/json"
-         }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
+     }
+ 
+     function hM(MM) {
+       return [{
+         heading: null,
+         blocks: MM.intro
+       }, ...MM.sections.map((MM => ({
+         heading: MM.heading,
+         blocks: MM.blocks
+       })))]
+     }
+ 
+     function JM(MM) {
+       return MM.flatMap((MM => "code" === MM.kind ? [MM] : "quote" === MM.kind ? JM(MM.blocks) : []))
+     }
+ 
+ ... (17 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L183-L189` → after: `L229-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L229-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L229-L233) · [Before (L183-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L183-L189)

```diff
-   36671: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       LOOK_DEBUG_HEADER: () => gQ,
-       endLookDebugTake: () => VQ,
-       noteLookDroppedCopy: () => DQ,
-       saveLookCapture: () => pQ,
-       startLookDebug: () => yQ
+   6966: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => LM,
+       f: () => aM,
+       h: () => PM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L191-L197` → after: `L235-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L235-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L235-L243) · [Before (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L191-L197)

```diff
-     var wQ = XQ(5140),
-       qQ = XQ(3045),
-       TQ = XQ(1972);
-     const zQ = new Map(Object.entries(wQ.l).map((QQ => {
-       let [WQ, XQ] = QQ;
-       return [XQ, WQ]
-     })));
+     iM(6963);
+     var OM = iM(44),
+       SM = iM(5142),
+       jM = iM(1303);
+     const aM = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;
+ 
+     function PM(MM, rM) {
+       return MM === rM ? MM : `${MM} (${rM})`
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L200` → after: `L246-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L246-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L246-L259) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L200)

```diff
-       return (0, TQ.y)(QQ).toFixed(1)
+       const rM = [];
+       let iM = 0;
+       for (const OM of MM.matchAll(aM)) {
+         OM.index > iM && rM.push(MM.slice(iM, OM.index));
+         const [, SM, aM, nM, QM, zM, LM] = OM;
+         void 0 !== SM ? rM.push(PM(SM, aM)) : void 0 !== nM || void 0 !== QM ? rM.push((0, jM.jsx)("strong", {
+           children: null !== nM && void 0 !== nM ? nM : QM
+         }, OM.index)) : void 0 !== zM ? rM.push((0, jM.jsx)("em", {
+           children: zM
+         }, OM.index)) : rM.push((0, jM.jsx)("code", {
+           children: LM
+         }, OM.index)), iM = OM.index + OM[0].length
+       }
+       return iM < MM.length && rM.push(MM.slice(iM)), rM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L204` → after: `L263-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L263-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L263-L272) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L204)

```diff
-       return `camera set by ${zQ.get(QQ[WQ+1])}: heading ${`${sQ(QQ[WQ+2])} -> ${sQ(QQ[WQ+4])}`} deg, pitch ${`${sQ(QQ[WQ+3])} -> ${sQ(QQ[WQ+5])}`} deg, at ${QQ[WQ].toFixed(1)} ms`
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       const OM = MM.map(((MM, rM) => (0, jM.jsxs)("li", {
+         children: [nM(MM.text), MM.children.length > 0 && QM(MM.children, !1)]
+       }, rM)));
+       return rM ? (0, jM.jsx)("ol", {
+         start: iM,
+         children: OM
+       }) : (0, jM.jsx)("ul", {
+         children: OM
+       })
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L209-L210` → after: `L275-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L275-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L275-L319) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L209-L210)

```diff
-     function JQ(QQ) {
-       return Number.isFinite(QQ) ? String(Math.round(10 * QQ) / 10) : String(QQ)
+     function zM(MM, rM) {
+       switch (MM.kind) {
+         case "heading":
+           return MM.level <= 2 ? (0, jM.jsx)("h3", {
+             children: nM(MM.text)
+           }, rM) : (0, jM.jsx)("h4", {
+             children: nM(MM.text)
+           }, rM);
+         case "paragraph":
+           return (0, jM.jsx)("p", {
+             children: nM(MM.text)
+           }, rM);
+         case "list":
+           return (0, jM.jsx)(OM.Fragment, {
+             children: QM(MM.items, MM.ordered)
+           }, rM);
+ ... (29 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L214` → after: `L323-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L323-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L323-L335) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L214)

```diff
-       return Number.isFinite(QQ) ? QQ.toFixed(1) : String(QQ)
+       let {
+         markdown: rM
+       } = MM, iM = 0;
+       return (0, jM.jsx)("div", {
+         className: "StudioAiAnswerText",
+         children: (0, SM.C)(rM).map(((MM, rM) => {
+           if ("list" !== MM.kind || !MM.ordered) return iM = 0, zM(MM, rM);
+           const SM = iM + 1;
+           return iM += MM.items.length, (0, jM.jsx)(OM.Fragment, {
+             children: QM(MM.items, !0, SM)
+           }, rM)
+         }))
+       })
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L216-L225` → after: `L337-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L337-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L337-L351) · [Before (L216-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L216-L225)

```diff
-     class IQ {
-       constructor() {
-         this.frames = 0, this.looked = 0, this.idle = 0, this.oR = 0, this.pastLimit = 0, this.lockSkips = 0, this.Py = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
-       }
-       moved() {
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.oR > 0 || this.dropped > 0 || this.cameraSets > 0
-       }
-       hasEvent() {
-         return this.oR > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
-       }
+   },
+   6956: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => lM,
+       g: () => EM,
+       c: () => GM,
+       k: () => hM
+     });
+     var OM = iM(1215),
+       SM = iM(6905),
+       jM = iM(5273);
+     const aM = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;
+ 
+     function PM(MM) {
+       return (0, jM.e)(MM, aM, (rM => !/^my/i.test(rM[0]) || !/follow $/i.test(MM.slice(0, rM.index)))).length > 0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L227-L250` → after: `L353-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L353-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L353-L364) · [Before (L227-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L227-L250)

```diff
-     class jQ {
-       constructor() {
-         var QQ = this;
-         this.topicOn = (0, qQ.m)("look"), this.remote = (0, qQ.n)(), this.tally = new IQ, this.takes = null, this.started = !1, this.record = function(WQ) {
-           let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           if (PQ.m.step(WQ, XQ), !QQ.topicOn) return;
-           const wQ = WQ[XQ],
-             qQ = WQ[XQ + 1],
-             TQ = WQ[XQ + 2],
-             zQ = WQ[XQ + 3],
-             sQ = WQ[XQ + 4],
-             FQ = WQ[XQ + 5],
-             gQ = WQ[XQ + 6],
-             IQ = WQ[XQ + 7],
-             jQ = WQ[XQ + 8],
-             BQ = WQ[XQ + 9],
- ... (8 more removed lines; see GitHub link above)
+     const nM = /\byou(?:r|'re|'ll)?\b/i,
+       QM = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so … [truncated]
+       zM = 2;
+ 
+     function LM(MM) {
+       return function(MM) {
+         const rM = [];
+         let iM = !1;
+         for (const OM of MM.split("\n")) {
+           if (/^\s*(```|~~~)/.test(OM)) {
+             iM = !iM;
+             continue
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L252-L292` → after: `L366-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L366-L368) · [Before (L252-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L252-L292)

```diff
-           yQ.looked++, Number.isFinite(qQ) && (yQ.dtMin = Math.min(yQ.dtMin, qQ), yQ.dtMax = Math.max(yQ.dtMax, qQ), yQ.dtSum += qQ, qQ > 0 && (yQ.peakRate = Math.max(yQ.peakRate, Math.hypot(sQ, FQ) / qQ))), yQ.raw[0] += TQ, yQ.raw[1] += zQ, yQ.turned[0] += sQ, yQ.turned[1] += FQ … [truncated]
-           const VQ = Math.abs(TQ) > BQ || Math.abs(zQ) > BQ,
-             DQ = `raw (${JQ(TQ)}, ${JQ(zQ)}) over ${rQ(qQ)} ms, limit ${JQ(BQ)}, filter v (${IQ.toFixed(3)}, ${jQ.toFixed(3)}) px/ms, at ${rQ(wQ)} ms`;
-           gQ === PQ.k.oR ? (yQ.oR++, QQ.outlier(`spike put right: ${DQ} -> turned (${JQ(sQ)}, ${JQ(FQ)})`)) : VQ ? (yQ.pastLimit++, QQ.outlier(`kept past limit: ${DQ}`)) : qQ > 50 && (yQ.longFrames++, QQ.remote || QQ.outlier(`long frame: ${DQ}, turned in full`))
-         }, this.onMouseMove = QQ => {
-           const WQ = null !== document.pointerLockElement;
-           if (PQ.m.mouseMove(QQ, WQ), !this.topicOn) return;
-           const XQ = this.tally,
-             {
-               movementX: wQ,
-               movementY: qQ
-             } = QQ;
-           XQ.events++;
-           const TQ = Math.max(Math.abs(wQ), Math.abs(qQ));
-           XQ.eventMax = Math.max(XQ.eventMax, TQ), TQ >= 200 && (XQ.bigEvents++, this.eventOutlier(`big mousemove (${wQ}, ${qQ}) at ${rQ(QQ.timeStamp)} ms, lock ${WQ?"Ds":"free"}`))
-         }, this.onLockChange = () => {
- ... (25 more removed lines; see GitHub link above)
+           if (iM || /^\s*>/.test(OM)) continue;
+           const MM = OM.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
+           rM.push(...(0, SM.u)(MM))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L294-L305` → after: `L370-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L370-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L370-L395) · [Before (L294-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L294-L305)

```diff
-         this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
-           capture: !0,
-           passive: !0
-         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
-       }
-       outlier(QQ) {
-         const WQ = this.tally;
-         WQ.outliers >= 20 ? WQ.suppressed++ : (WQ.outliers++, (0, qQ.j)("look", QQ))
-       }
-       eventOutlier(QQ) {
-         const WQ = this.tally;
-         WQ.eventLines >= 10 ? WQ.suppressed++ : (WQ.eventLines++, (0, qQ.j)("look", QQ))
+         return rM
+       }(MM).filter((MM => PM(MM) || QM.test(MM) && !nM.test(MM)))
+     }
+     const mM = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       HM = [{
+         name: "Qwen3.6-27B",
+         temperature: .7,
+         reasoningEffort: "none"
+       }, {
+         name: "Qwen3.5-397B-A17B",
+         temperature: .7,
+         reasoningEffort: "none"
+       }, {
+         name: "Mistral-Small-3.2-24B-Instruct-2506",
+         temperature: .15
+       }];
+ ... (10 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L307-L317` → after: `L397-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L397-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L397-L410) · [Before (L307-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L307-L317)

```diff
-       takeRecords() {
-         if (null === this.takes) return;
-         const QQ = this.takes.look();
-         if (QQ.length >= gQ) {
-           this.counted(PQ.d.stepsLost, QQ[0]), this.counted(PQ.d.droppedCopies, QQ[1]);
-           for (let WQ = gQ; WQ + PQ.g <= QQ.length; WQ += PQ.g) this.record(QQ, WQ)
-         }
-         const WQ = this.takes.cameraSets();
-         if (WQ.length >= wQ.c) {
-           this.counted(PQ.d.cameraSetsLost, WQ[0]);
-           for (let QQ = wQ.c; QQ + wQ.f <= WQ.length; QQ += wQ.f) PQ.m.cameraSet(WQ, QQ), this.topicOn && (this.tally.cameraSets++, this.outlier(FQ(WQ, QQ)))
+     }
+ 
+     function lM(MM, rM) {
+       const iM = new AbortController,
+         OM = () => {
+           iM.abort()
+         },
+         SM = setTimeout(OM, MM);
+       return null !== rM && void 0 !== rM && rM.aborted && OM(), null === rM || void 0 === rM || rM.addEventListener("abort", OM, {
+         once: !0
+       }), {
+         signal: iM.signal,
+         clear: () => {
+           clearTimeout(SM), null === rM || void 0 === rM || rM.removeEventListener("abort", OM)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L335-L337` → after: `L415-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L415-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L415-L457) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L335-L337)

```diff
-     function yQ(QQ) {
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return BQ ??= new jQ, BQ.start(QQ, WQ), BQ.record
+     function EM(MM, rM, iM) {
+       return new Promise(((SM, jM) => {
+         const aM = new AbortController,
+           PM = () => {
+             aM.abort(), jM((0, OM.f)(iM))
+           };
+         if (null !== iM && void 0 !== iM && iM.aborted) return void PM();
+         null === iM || void 0 === iM || iM.addEventListener("abort", PM, {
+           once: !0
+         });
+         const nM = HM.map((() => !1));
+         let QM = null;
+         const zM = HM.map((() => !1)),
+           LM = HM.map((() => !1));
+         HM.forEach(((OM, mM) => {
+           const hM = lM(dM, aM.signal);
+ ... (27 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L340-L342` → after: `L460-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L460-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L460-L462) · [Before (L340-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L340-L342)

```diff
-     function VQ() {
-       var QQ;
-       null === (QQ = BQ) || void 0 === QQ || QQ.endTake()
+     function UM(MM) {
+       var rM, iM;
+       return "length" === (null === MM || void 0 === MM || null === (rM = MM.choices) || void 0 === rM || null === (iM = rM[0]) || void 0 === iM ? void 0 : iM.finish_reason)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L344-L347` → after: `L464-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L464-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L464-L475) · [Before (L344-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L344-L347)

```diff
- 
-     function DQ() {
-       var QQ;
-       null === (QQ = BQ) || void 0 === QQ || QQ.droppedCopy()
+     async function GM(MM, rM, iM) {
+       const OM = HM.find((rM => rM.name === MM));
+       if (void 0 === OM) return "failed";
+       const SM = lM(dM, iM);
+       try {
+         const MM = await CM(OM, rM, SM.signal);
+         return null !== MM && "object" === typeof MM ? MM.isCutOff ? (console.warn(`Studio AI: ${OM.name}'s answer was cut off at the token limit`), null) : {
+           text: MM.text
+         } : MM
+       } finally {
+         SM.clear()
+       }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L349-L359` → after: `L477-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L477-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L477-L510) · [Before (L349-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L349-L359)

```diff
-     async function pQ(QQ) {
-       var WQ;
-       null === (WQ = BQ) || void 0 === WQ || WQ.takeRecords();
-       const {
-         clientHintsRead: wQ,
-         debugDeviceLines: qQ
-       } = await XQ.e(30).then((() => XQ(34376)));
-       await wQ, PQ.m.save({
-         ...QQ,
-         device: qQ()
-       })
+     async function CM(MM, rM, iM) {
+       const OM = await fetch(mM, {
+         method: "POST",
+         headers: {
+           "Content-Type": "application/json"
+         },
+         body: JSON.stringify({
+           model: MM.name,
+           messages: rM,
+           max_tokens: JM,
+           temperature: MM.temperature,
+           reasoning_effort: MM.reasoningEffort
+         }),
+         credentials: "omit",
+         referrerPolicy: "no-referrer",
+         signal: iM
+ ... (18 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L362` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L513) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L362)

```diff
-   5140: (QQ, WQ, XQ) => {
+   6905: (MM, rM, iM) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L364-L371` → after: `L515-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L515-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L515-L517) · [Before (L364-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L364-L371)

```diff
-       $b: () => aQ,
-       A: () => sQ,
-       Ab: () => uQ,
-       C: () => wQ,
-       Cb: () => yQ,
-       F: () => TQ,
-       G: () => GQ,
-       Gb: () => hQ,
+       B: () => UM,
+       E: () => CM,
+       H: () => dM,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L379` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L521) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L379)

```diff
-       Sb: () => tQ,
+       S: () => LM,
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L381-L393` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L523-L524) · [Before (L381-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L381-L393)

```diff
-       V: () => PQ,
-       Wb: () => oQ,
-       X: () => UQ,
-       Z: () => FQ,
-       Zb: () => HQ,
-       bb: () => BQ,
-       c: () => DQ,
-       cb: () => jQ,
-       dc: () => YQ,
-       f: () => VQ,
-       fb: () => iQ,
-       fc: () => qQ,
-       gc: () => KQ,
+       W: () => HM,
+       e: () => hM,
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L401-L404` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L528) · [Before (L401-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L401-L404)

```diff
-       q: () => dQ,
-       r: () => NQ,
-       rb: () => EQ,
-       tb: () => xQ,
+       t: () => mM,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L406-L411` → after: `L530-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L530-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L530-L627) · [Before (L406-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L406-L411)

```diff
-       ub: () => eQ,
-       vb: () => SQ,
-       y: () => bQ,
-       yb: () => CQ,
-       z: () => zQ,
-       zb: () => kQ
+       x: () => jM,
+       z: () => SM
+     });
+     var OM = iM(5273);
+     const SM = 2e3,
+       jM = 2e4;
+ 
+     function aM(MM) {
+       return MM.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
+     }
+ 
+     function PM(MM) {
+       return MM.replace(/\$/g, "\\$")
+     }
+     const nM = /[.!?](?=\s|\*|_|$)|\n|$/g;
+ 
+ ... (82 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L413-L938` → after: `L629-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L629-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/94.js#L629-L697) · [Before (L413-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/94.js#L413-L938)

```diff
-     const wQ = 32,
-       qQ = 33.333333333333336,
-       TQ = {
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
- ... (510 more removed lines; see GitHub link above)
+     const SM = OM("\\w$."),
+       jM = OM("\\w.,");
+ 
+     function aM(MM) {
+       return rM => nM(rM, MM)
+     }
+ 
+     function PM(MM) {
+       return rM => !MM.test(rM.input.slice(0, rM.index))
+     }
+ 
+     function nM(MM, rM) {
+       return MM.index > 0 && new RegExp(`[${rM}]`).test(MM.input[MM.index - 1])
+     }
+ 
+     function QM(MM, rM, iM) {
+ ... (53 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/95.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/95.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372)

#### 1. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L2)

```diff
- export const ids = [95, 402];
+ export const ids = [95];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L4-L23` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L4) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L4-L23)

```diff
-   41709: (QQ, WQ, XQ) => {
-     async function wQ(QQ, WQ) {
-       const [{
-         clientSideServerUrls: wQ
-       }, {
-         postJsonWithMetricsCookiesAndJsonResponse: qQ
-       }, {
-         gameBridge: TQ
-       }] = await Promise.all([Promise.resolve().then((() => XQ(1238))), Promise.resolve().then((() => XQ(1165))), Promise.resolve().then((() => XQ(2003)))]), zQ = TQ.latest("connectedGame").websocketUrl;
-       if (!zQ) throw new Error("AI Helper: not connected to a game server");
-       const sQ = `${wQ.getHttpUrlFromWebSocketUrl(zQ)}${QQ}`;
-       return await qQ(sQ, WQ, {
-         retries: 0
-       })
-     }
-     XQ.r(WQ), XQ.d(WQ, {
- ... (4 more removed lines; see GitHub link above)
+   5150: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L25-L49` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L6) · [Before (L25-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L25-L49)

```diff
-       c: () => qQ
-     });
-     var wQ = XQ(1145);
- 
-     function qQ(QQ) {
-       let {
-         href: WQ,
-         children: XQ
-       } = QQ;
-       return (0, wQ.jsxs)("a", {
-         className: "WorldCodeAiExternalLink",
-         href: WQ,
-         target: "_blank",
-         rel: "noreferrer noopener",
-         children: [XQ, " ", (0, wQ.jsx)("span", {
-           "aria-hidden": "true",
- ... (9 more removed lines; see GitHub link above)
+       e: () => JM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L51-L1596` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L8-L17) · [Before (L51-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L51-L1596)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(1081),
-       TQ = XQ.n(qQ),
-       zQ = XQ(1145);
- 
-     function sQ(QQ) {
-       let {
-         title: WQ,
-         children: XQ,
-         isCalm: qQ = !1,
-         isElsewhere: sQ = !1,
-         defaultOpen: FQ = !1,
-         isOpen: PQ,
-         onToggle: gQ,
-         className: JQ
-       } = QQ;
- ... (1530 more removed lines; see GitHub link above)
+     const OM = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
+       SM = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
+       jM = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
+       aM = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
+       PM = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
+       nM = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
+     var QM = iM(5158),
+       zM = iM(5162);
+     const LM = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
+       mM = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L1599-L2010` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L20) · [Before (L1599-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L1599-L2010)

```diff
-       if (!HQ().isPropertyAssignment(QQ) && !HQ().isShorthandPropertyAssignment(QQ)) return null;
-       const WQ = QQ.name;
-       return HQ().isIdentifier(WQ) || HQ().isStringLiteral(WQ) ? WQ.text : null
-     }
- 
-     function hX(QQ, WQ) {
-       return QQ.lastIndexOf("\n", WQ - 1) + 1
-     }
- 
-     function iX(QQ, WQ) {
-       var XQ, wQ;
-       const qQ = QQ.slice(hX(QQ, WQ), WQ);
-       return /^\s*$/.test(qQ) ? qQ : `${null!==(XQ=null===(wQ=/^\s*/.exec(qQ))||void 0===wQ?void 0:wQ[0])&&void 0!==XQ?XQ:""}\t`
-     }
- 
-     function cX(QQ, WQ, XQ) {
- ... (396 more removed lines; see GitHub link above)
+       return MM.split("\n").filter((MM => MM.startsWith("## "))).map((MM => MM.replace(/^## (.+)$/gm, "$1").trim()))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L2014-L2261` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L24) · [Before (L2014-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L2014-L2261)

```diff
-       const {
-         file: WQ
-       } = pX(QQ);
-       return new Set(aX(QQ, WQ).flatMap((QQ => QQ.names)))
-     }
- 
-     function nX(QQ) {
-       const {
-         file: WQ
-       } = pX(QQ), XQ = new Set, wQ = QQ => {
-         HQ().isCallExpression(QQ) && HQ().isIdentifier(QQ.expression) && XQ.add(QQ.expression.text), HQ().forEachChild(QQ, wQ)
-       };
-       return wQ(WQ), XQ
-     }
- 
-     function xX(QQ) {
- ... (232 more removed lines; see GitHub link above)
+       return MM.split("\n").map(((MM, rM) => 0 === rM ? MM.trim() : MM.trim().replace(/^# ?/gm, " "))).join("\n\n")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L2264-L6604` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L27-L29) · [Before (L2264-L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L2264-L6604)

```diff
-         name: "parkour",
-         kind: "game",
-         title: "Parkour / obby",
-         category: "parkour",
-         summary: "A course to the finish, built for you in stages that get harder (or your own course): checkpoint blocks save progress, falling or kill blocks send you back, your time is shown and the best one saved",
-         keywords: ["parkour", "parkor", "obby", "obbie", "obby that gets harder", "checkpoint", "checkpoints", "course", "jumps", "finish", "speedrun", "kill brick", "killbrick", "tower", "tower of hell", "climb", "stage", "stages", "gets harder", "difficulty"],
-         howItPlays: 'With buildCourse (the default) the game builds its own course on the first join: a line of platforms going east from startPosition (or, with courseShape "tower", a climb spiralling up around startPosition, a block higher every jump) in `stages` stages of `jum … [truncated]
-         settings: [{
-           key: "startPosition",
-           kind: "position",
-           value: "[0, 10, 0]",
-           about: "where players start, and go back to with /restart; a built course starts here"
-         }, {
-           key: "buildCourse",
-           kind: "boolean",
-           value: "true",
- ... (4325 more removed lines; see GitHub link above)
+       id: "readme",
+       title: "Getting started",
+       content: '# Getting started\n\nThere are three places to write JavaScript in Bloxd: code blocks, code boards and World Code. Code in any of them controls the game through `api`, in custom games and worlds. Only players who can edit code (the `canEditCode` client option) can … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L6606-L6608` → after: `L31-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L31-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L31-L34) · [Before (L6606-L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L6606-L6608)

```diff
-       name: "gpt-oss-120b",
-       temperature: 1,
-       reasoningEffort: "medium"
+       id: "snippets",
+       title: "Snippets",
+       content: mM,
+       subsections: HM(mM)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L6610-L6613` → after: `L36-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L36-L38) · [Before (L6610-L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L6610-L6613)

```diff
-       name: "Qwen3.5-397B-A17B",
-       temperature: .6,
-       nativeTools: !0,
-       callFormat: "qwenXml"
+       id: "changelog",
+       title: "Changelog",
+       content: '# Changelog\n\nHere you can discover the latest changes to the API.\n\n### 24th November 2026\n- A `"follow"` [`gameCamera`](#clientOptions-gameCamera) takes `anchor: "eye"`, to watch another player through their eyes: it sits at their eye and looks where they loo … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L6615-L15531` → after: `L40-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L40-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L40-L43) · [Before (L6615-L15531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L6615-L15531)

```diff
-       name: "gpt-oss-20b",
-       temperature: 1,
-       reasoningEffort: "high"
-     }];
-     const dT = {
-       name: "Qwen3.6-27B",
-       temperature: .6,
-       nativeTools: !0,
-       callFormat: "qwenXml"
-     };
- 
-     function HT(QQ) {
-       return [...vT, dT].find((WQ => WQ.name === QQ))
-     }
- 
-     function aT(QQ) {
- ... (8901 more removed lines; see GitHub link above)
+       id: "howTo",
+       title: "How-Tos",
+       content: LM,
+       subsections: HM(LM)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L15533-L16783` → after: `L45-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L45-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/95.js#L45-L112) · [Before (L15533-L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/95.js#L15533-L16783)

```diff
-       activeKey: tw,
-       cutShortActions: ow,
-       noticeActions: ew
-     } = function(QQ) {
-       var WQ;
-       let {
-         entries: XQ,
-         busy: wQ,
-         send: qQ,
-         onCheckKey: TQ
-       } = QQ;
-       const {
-         active: zQ
-       } = Ds(), sQ = null === (WQ = XQ.findLast((QQ => "assistant" === QQ.role && !QQ.isNotice))) || void 0 === WQ ? void 0 : WQ.id;
-       return {
-         activeKey: zQ,
- ... (1235 more removed lines; see GitHub link above)
+       id: "apiReference",
+       title: "API Reference",
+       content: nM,
+       subsections: HM(nM)
+     }, {
+       id: "callbacks",
+       title: "Callbacks",
+       content: OM,
+       subsections: HM(OM)
+     }, {
+       id: "clientOptions",
+       title: "Client Options",
+       content: SM,
+       subsections: HM(SM)
+     }, {
+       id: "entitySettings",
+ ... (52 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/96.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/96.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4-L505` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/96.js#L4-L5) · [Before (L4-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/96.js#L4-L505)

```diff
-   41505: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       DOCS_AGENT_PART_CHARS: () => uW.b,
-       DOCS_LLMS_FULL_TXT_PATH: () => uW.f,
-       DOCS_LLMS_TXT_PATH: () => uW.i,
-       DOCS_LLMS_TXT_URL: () => uW.m,
-       ROOT_LLMS_TXT_PATH: () => uW.o,
-       allGamemodeSettings: () => wQ.e,
-       arcadeModeStaticConfig: () => BQ.e,
-       arenaStaticConfig: () => qW,
-       backroomsStaticConfig: () => wW.c,
-       battleBoxStaticConfig: () => FW,
-       bedwarsStaticConfig: () => iQ.b,
-       bloxdAggregatorConfig: () => sQ.c,
-       bloxdPreprodAggregatorConfig: () => FQ.d,
-       bloxdStagingAggregatorConfig: () => PQ.c,
- ... (486 more removed lines; see GitHub link above)
+   5158: MM => {
+     MM.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/97.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/97.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/97.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/97.js#L3)

```diff
- export const ids = [10, 13, 14, 16, 17, 19, 21, 22, 24, 25, 97, 139, 140];
+ export const ids = [97];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L5-L39430` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/97.js#L4-L5) · [Before (L5-L39430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/97.js#L5-L39430)

```diff
-   39554: (QQ, WQ, XQ) => {
-     var wQ = {
-       "./bedwars/bedwarsClient": 39560,
-       "./bridgeBattle/bridgeBattleClient": 39569,
-       "./buildAFactory2/buildAFactory2Client": 38774,
-       "./classic/classicClient": 39571,
-       "./classic/smp2Client": 39578,
-       "./clutch/clutchClient": 39581,
-       "./containmentBreach/containmentBreachClient": 39587,
-       "./cooking/cookingClient": 39702,
-       "./defusal/defusalClient": 39707,
-       "./frontline/frontlineClient": 39712,
-       "./goalRush/goalRushClient": 39715,
-       "./luckyBedwars/luckyBedwarsClient": 39723,
-       "./ninetyNineNights/ninetyNineNightsClient": 39730,
-       "./oneBlock/oneBlockClient": 39735,
- ... (39410 more removed lines; see GitHub link above)
+   5162: MM => {
+     MM.exports = "# Item Names (1537 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/98.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/98.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec)

#### 1. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/98.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/98.js#L4)

```diff
-   5212: (QQ, WQ, XQ) => {
+   5169: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/98.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/98.js#L6-L9)

```diff
-       Howl: () => qQ.Howl,
-       Howler: () => qQ.Howler,
-       musicOutput: () => yQ,
-       readyAudioContext: () => VQ
+       default: () => OM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L11-L122` → after: `L8-L4501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L8-L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/98.js#L8-L4501) · [Before (L11-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/98.js#L11-L122)

```diff
-     var wQ, qQ = XQ(5216),
-       TQ = XQ(3699),
-       zQ = XQ(4969);
-     const sQ = qQ.Howler;
- 
-     function FQ() {
-       var QQ, WQ;
-       if (sQ.ctx || !sQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, zQ.f)()) return;
-       const XQ = navigator.audioSession;
-       let wQ;
-       "auto" === (null === XQ || void 0 === XQ ? void 0 : XQ.type) && (XQ.type = "ambient");
-       try {
-         wQ = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
- ... (96 more removed lines; see GitHub link above)
+     const OM = String.raw`export interface GameApi {
+ 		/** The ID of the player running the code.
+ 		 *
+ 		 * Lobby code usually has nobody running it, so this is null.
+ 		 */
+ 		myId: string | null
+ 		/** The position of the code block or press to code board */
+ 		thisPos: [number, number, number]
+ 		/** The owner of the current custom lobby */
+ 		lobbyOwnerId: string | null
+ 		/**
+  * Get position of a player / entity.
+  * @param entityId
+  */
+ getPosition(entityId: EntityId): Pos
+ /**
+ ... (4478 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/99.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/99.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52)

#### 1. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L2)

```diff
- export const ids = [98, 99];
+ export const ids = [99];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L4-L19` → after: `L4-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L4-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L4-L608) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L4-L19)

```diff
-   36750: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       countDecodesAs: () => JQ,
-       decodedAudio: () => rQ
-     });
-     var wQ = XQ(3196),
-       qQ = XQ(5212);
-     const TQ = qQ.Howler,
-       zQ = new Map;
-     let sQ = 0;
-     const FQ = {
-         song: 0,
-         sheet: 0
-       },
-       PQ = new WeakMap,
-       gQ = new WeakSet;
+   37482: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => NM,
+       c: () => fM
+     });
+     var OM = iM(44),
+       SM = iM(2039),
+       jM = iM(37484),
+       aM = iM.n(jM),
+       PM = iM(4923),
+       nM = iM(2006),
+       QM = iM(1516),
+       zM = iM(83),
+       LM = iM(103),
+       mM = iM(332),
+       HM = iM(1116),
+ ... (589 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L22` → after: `L611-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L611-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L611-L619) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L22)

```diff
-       return PQ.set(QQ, WQ), QQ
+       let {
+         submit: iM,
+         reopen: OM
+       } = rM;
+       null !== nM && clearTimeout(nM), QM = OM, LM({
+         ...MM,
+         startedAt: Date.now(),
+         errors: []
+       }), nM = setTimeout(mM, aM), iM()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L27-L29` → after: `L710-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L710-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L710-L714) · [Before (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L27-L29)

```diff
-         bytes: sQ,
-         songsDecoded: FQ.song,
-         sheetsDecoded: FQ.sheet
+         key: MM,
+         label: `Code block at ${rM.join(", ")}`,
+         codeBlock: !0,
+         pos: rM,
+         canChangePos: iM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L34-L50` → after: `L729-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L729-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L729-L753) · [Before (L34-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L34-L50)

```diff
-       if (gQ.has(QQ)) return;
-       gQ.add(QQ);
-       const WQ = 1 === QQ.decodeAudioData.length,
-         XQ = QQ.decodeAudioData.bind(QQ);
-       QQ.decodeAudioData = (QQ, wQ, qQ) => {
-         const gQ = QQ => {
-           const WQ = TQ._howls.filter((QQ => "loaded" !== QQ._state));
-           try {
-             null === wQ || void 0 === wQ || wQ(QQ)
-           } finally {
-             const XQ = WQ.find((QQ => "loaded" === QQ._state));
-             void 0 !== XQ && "string" === typeof XQ._src && function(QQ, WQ, XQ) {
-               var wQ;
-               sQ += XQ - (null !== (wQ = zQ.get(WQ)) && void 0 !== wQ ? wQ : 0), zQ.set(WQ, XQ);
-               const qQ = PQ.get(QQ);
-               void 0 !== qQ && FQ[qQ]++
- ... (1 more removed lines; see GitHub link above)
+       return MM.trim().toLowerCase().startsWith(SM.toLowerCase())
+     }
+ 
+     function aM(MM) {
+       return MM.trim().slice(SM.length).replace(/^\.?\//, "")
+     }
+   },
+   37816: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => nM,
+       f: () => QM,
+       h: () => PM,
+       j: () => zM
+     });
+     var OM = iM(44),
+       SM = iM(30),
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L52-L58` → after: `L755-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L755-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L755-L759) · [Before (L52-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L52-L58)

```diff
-           return QQ
-         };
-         if (!WQ) return XQ(QQ, gQ, qQ);
-         const JQ = XQ(QQ).then(gQ);
-         return JQ.catch((QQ => {
-           null === qQ || void 0 === qQ || qQ(QQ)
-         })), JQ
+           return this.value
+         }, this.set = MM => {
+           this.value = MM, SM.g.setItem(this.storageKey, MM);
+           for (const rM of this.listeners) rM(MM)
+         }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L60-L74` → after: `L761-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L761-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L761-L776) · [Before (L60-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L60-L74)

```diff
-     }(0, wQ.f)(rQ);
-     const jQ = qQ.Howl.prototype,
-       BQ = jQ.init;
-     jQ.init = function(QQ) {
-       return qQ.Howler.volume(), TQ.ctx && IQ(TQ.ctx), BQ.call(this, QQ)
-     };
-     const yQ = jQ.unload;
-     jQ.unload = function() {
-       const QQ = this._src,
-         WQ = yQ.call(this);
-       if ("string" !== typeof QQ) return WQ;
-       const XQ = zQ.get(QQ);
-       return void 0 !== XQ && function(QQ) {
-         return !TQ._howls.some((WQ => WQ._src === QQ || "string" === typeof WQ._src && QQ.indexOf(WQ._src) >= 0))
-       }(QQ) && (zQ.delete(QQ), sQ -= XQ), WQ
+       subscribe(MM) {
+         return this.listeners.add(MM), () => {
+           this.listeners.delete(MM)
+         }
+       }
+     }
+     const PM = new aM("codeEditorLightMode", !1),
+       nM = new aM("codeEditorAiHints", !0),
+       QM = new aM("codeEditorAiKeySafetyCheck", !0, jM.featureFlags.isOwnTopLevelSite);
+ 
+     function zM(MM) {
+       const [rM, iM] = (0, OM.useState)(MM.get);
+       return (0, OM.useEffect)((() => {
+         const rM = MM.subscribe(iM);
+         return iM(MM.get()), rM
+       }), [MM]), [rM, MM.set]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L77-L82` → after: `L779-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L779-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L779-L796) · [Before (L77-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L77-L82)

```diff
-   5212: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       Howl: () => qQ.Howl,
-       Howler: () => qQ.Howler,
-       musicOutput: () => yQ,
-       readyAudioContext: () => VQ
+   37810: (MM, rM, iM) => {
+     iM.d(rM, {
+       A: () => dM,
+       D: () => UM,
+       F: () => uM,
+       H: () => tM,
+       J: () => mM,
+       N: () => sM,
+       Q: () => bM,
+       S: () => wM,
+       U: () => WM,
+       d: () => hM,
+       g: () => nM,
+       j: () => JM,
+       n: () => gM,
+       q: () => PM,
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L84-L87` → after: `L798-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L798-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L798-L807) · [Before (L84-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L84-L87)

```diff
-     var wQ, qQ = XQ(5216),
-       TQ = XQ(3699),
-       zQ = XQ(4969);
-     const sQ = qQ.Howler;
+     var OM = iM(2638),
+       SM = iM(37807);
+     const jM = "bloxd-world-code-directory-sync",
+       aM = "handles",
+       PM = "[INVALID SCHEMATIC PLACEHOLDER]";
+ 
+     function nM(MM, rM) {
+       return `${MM}::${rM}`
+     }
+     const QM = new Set(["node_modules", ".git"]);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L90-L94` → after: `L810-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L810-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L810-L828) · [Before (L90-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L90-L94)

```diff
-       var QQ, WQ;
-       if (sQ.ctx || !sQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, zQ.f)()) return;
-       const XQ = navigator.audioSession;
-       let wQ;
-       "auto" === (null === XQ || void 0 === XQ ? void 0 : XQ.type) && (XQ.type = "ambient");
+       return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
+     }
+ 
+     function LM() {
+       return new Promise(((MM, rM) => {
+         const iM = indexedDB.open(jM, 1);
+         iM.onupgradeneeded = () => {
+           const MM = iM.result;
+           MM.objectStoreNames.contains(aM) || MM.createObjectStore(aM)
+         }, iM.onsuccess = () => {
+           MM(iM.result)
+         }, iM.onerror = () => {
+           var MM;
+           rM(null !== (MM = iM.error) && void 0 !== MM ? MM : new Error("Failed to open directory sync IndexedDB"))
+         }
+       }))
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L96-L100` → after: `L830-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L830-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L830-L840) · [Before (L96-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L96-L100)

```diff
-         wQ = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
-         return
+         await new Promise(((OM, SM) => {
+           const jM = iM.transaction(aM, "readwrite");
+           jM.objectStore(aM).put(rM, MM), jM.oncomplete = () => {
+             OM()
+           }, jM.onerror = () => {
+             var MM;
+             SM(null !== (MM = jM.error) && void 0 !== MM ? MM : new Error("Failed to store directory handle"))
+           }
+         }))
+       } finally {
+         iM.close()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L105-L145` → after: `L843-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L843-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L843-L853) · [Before (L105-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L105-L145)

```diff
-     sQ._mobileUnloaded = !0;
-     const PQ = sQ.volume.bind(qQ.Howler);
-     sQ.volume = function() {
-       return FQ(), PQ(...arguments)
-     };
-     const gQ = sQ.mute.bind(qQ.Howler);
-     sQ.mute = QQ => (FQ(), gQ(QQ));
-     const JQ = qQ.Howl.prototype,
-       rQ = JQ.init;
- 
-     function IQ() {
-       for (; sQ._html5AudioPool.length < sQ.html5PoolSize;) {
-         const QQ = new Audio;
-         QQ._unlocked = !0, sQ._releaseHtml5Audio(QQ)
-       }
-       for (const WQ of sQ._howls)
- ... (25 more removed lines; see GitHub link above)
+     async function HM(MM) {
+       const rM = await LM();
+       try {
+         return await new Promise(((iM, OM) => {
+           const SM = rM.transaction(aM, "readonly").objectStore(aM).get(MM);
+           SM.onsuccess = () => {
+             var MM;
+             iM(null !== (MM = SM.result) && void 0 !== MM ? MM : null)
+           }, SM.onerror = () => {
+             var MM;
+             OM(null !== (MM = SM.error) && void 0 !== MM ? MM : new Error("Failed to load directory handle"))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L148-L157` → after: `L1049-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L1049-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L1049-L1056) · [Before (L148-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L148-L157)

```diff
-         FQ = () => {
-           IQ(), qQ()
-         },
-         PQ = WQ => {
-           if (IQ(), "inTap" === wQ) {
-             if ("running" === QQ.state) return;
-             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), qQ()
-           } else "afterPaint" === wQ && (wQ = "queued", (0, TQ.c)(WQ.timeStamp, (() => {
-             wQ = "inTap", qQ()
-           })))
+         mM = async () => {
+           if (!PM) try {
+             if (!await JM(MM, "readwrite")) return;
+             const iM = await UM(MM);
+             PM || rM(iM)
+           } catch (iM) {
+             console.error("[WorldCodeDirectorySync] Failed to read watched directory", iM)
+           }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L159-L166` → after: `L1058-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L1058-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L1058-L1082) · [Before (L159-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L159-L166)

```diff
-       for (const TQ of ["touchstart", "touchend"]) document.addEventListener(TQ, FQ, {
-         capture: !0,
-         signal: XQ.signal
-       });
-       for (const TQ of zQ.d) document.addEventListener(TQ, PQ, {
-         capture: !0,
-         signal: XQ.signal
-       })
+       mM();
+       const HM = window.FileSystemObserver;
+       if (HM) try {
+         zM = new HM((() => {
+           LM()
+         })), zM.observe(MM, {
+           recursive: !0
+         })
+       } catch (hM) {
+         console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", hM), zM = null
+       }
+       return zM || (QM = setInterval((() => {
+         LM()
+       }), aM)), () => {
+         PM = !0, nM && clearTimeout(nM), QM && clearInterval(QM), zM && zM.disconnect()
+       }
+ ... (9 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L168-L169` → after: `L1084-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L1084-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L1084-L1101) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L168-L169)

```diff
-     let jQ = 0;
-     const BQ = null === (wQ = sQ._autoSuspend) || void 0 === wQ ? void 0 : wQ.bind(qQ.Howler);
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(3508),
+       PM = iM(313),
+       nM = iM(2640),
+       QM = iM(22),
+       zM = iM(2067),
+       LM = iM(30),
+       mM = iM(2084),
+       HM = iM(19),
+       hM = iM(2088),
+       JM = iM(1464),
+       dM = iM(9419),
+       yM = iM(2111),
+       lM = iM(1188),
+ ... (2 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L174-L186` → after: `L1105-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L1105-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L1105-L1131) · [Before (L174-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L174-L186)

```diff
-         ctx: QQ,
-         masterGain: WQ
-       } = sQ;
-       return QQ && WQ ? {
-         ctx: QQ,
-         destination: WQ,
-         holdAwake: QQ => {
-           var WQ, XQ;
-           (jQ += QQ ? 1 : -1, QQ) ? null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ): null === (XQ = sQ._autoSuspend) || void 0 === XQ || XQ.call(sQ)
-         },
-         wake: () => {
-           var WQ;
-           "running" !== QQ.state && (null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ), QQ.resume().catch((() => {})))
+         loadingOverlayVisible: MM,
+         openInGameMenuName: rM,
+         openEverythingMenuName: iM
+       } = (0, HM.m)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
+       return MM || null !== rM || null !== iM
+     }
+ 
+     function CM(MM, rM, iM) {
+       const SM = (0, OM.useRef)(iM);
+       SM.current = iM;
+       const jM = (0, OM.useRef)({
+         card: MM,
+         ms: 0
+       });
+       (0, OM.useEffect)((() => {
+         if (rM || null === MM) return;
+ ... (11 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L188` → after: `L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L1133) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L188)

```diff
-       } : null
+       }), [rM, MM])
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L192-L193` → after: `L1173-L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L1173-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L1173-L1241) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L192-L193)

```diff
-       var QQ;
-       (sQ.volume(), sQ.ctx && sQ.autoUnlock) && (null === (QQ = sQ._unlockAudio) || void 0 === QQ || QQ.call(sQ))
+       const MM = (0, JM.y)();
+       return (0, EM.jsxs)("div", {
+         className: "KeyControlDiv",
+         children: [(0, EM.jsx)("div", {
+           className: "KeyHeader",
+           children: "Move"
+         }), MM && (0, EM.jsx)(hM.d, {
+           noaAction: "forward"
+         }), !MM && (0, EM.jsxs)(EM.Fragment, {
+           children: [(0, EM.jsx)("div", {
+             className: "WasdKeysTopRow",
+             children: (0, EM.jsx)(hM.d, {
+               noaAction: "forward"
+             })
+           }), (0, EM.jsxs)("div", {
+             className: "WasdKeysBottomRow",
+ ... (53 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L195` → after: `L1243-L23622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L1243-L23622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/99.js#L1243-L23622) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/99.js#L195)

```diff
-     BQ && (sQ._autoSuspend = () => jQ > 0 ? qQ.Howler : BQ())
+ 
+     function gM(MM) {
+       let {
+         showingMovementControls: rM
+       } = MM;
+       const {
+         isTouchScreen: iM
+       } = (0, HM.m)(["isTouchScreen"]), SM = (0, JM.y)(), jM = (0, yM.c)("OpenShop"), [aM, PM] = (0, OM.useState)(!1), hM = `SeenShopControls|${(0,mM.f)("connectedGame",(MM=>MM.gameNameWithVariation))}`, lM = () => (!(0, JM.l)() || null !== (0, dM.e)("OpenShop")) && !LM.g.getItem … [truncated]
+         PM(!1)
+       }), 7e3));
+       (0, OM.useEffect)((() => {
+         let MM;
+         const rM = QM.i.subscribe("showShopTutorial", (() => {
+           lM() && (MM = UM())
+         }));
+         return () => {
+ ... (22364 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (195 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   41335: (QQ, WQ, XQ) => {
+   42227: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var wQ = XQ(41344),
-       qQ = XQ(38293);
-     class TQ extends((0, wQ.i)(qQ.d)) {}(0, wQ.l)(qQ.d, TQ);
-     var zQ = XQ(37456);
-     class sQ extends((0, wQ.i)(zQ.e)) {}(0, wQ.l)(zQ.e, sQ);
-     var FQ = XQ(38129);
-     class PQ extends((0, wQ.i)(FQ.d)) {}(0, wQ.l)(FQ.d, PQ);
-     var gQ = XQ(37698),
-       JQ = XQ(40530),
-       rQ = XQ(37696);
-     class IQ extends((0, wQ.i)(rQ.h)) {
+     var OM = iM(42233),
+       SM = iM(38984);
+     class jM extends((0, OM.i)(SM.d)) {}(0, OM.m)(SM.d, jM);
+     var aM = iM(38275);
+     class PM extends((0, OM.i)(aM.c)) {}(0, OM.m)(aM.c, PM);
+     var nM = iM(38832);
+     class QM extends((0, OM.i)(nM.e)) {}(0, OM.m)(nM.e, QM);
+     var zM = iM(38298),
+       LM = iM(41374),
+       mM = iM(38294);
+     class HM extends((0, OM.i)(mM.e)) {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L23)

```diff
-         super(QQ, WQ, XQ), (0, gQ.j)(QQ)
+         super(MM, rM, iM), (0, zM.k)(MM)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L26)

```diff
-         (0, gQ.n)(this._material), super.dispose(QQ)
+         (0, zM.m)(this._material), super.dispose(MM)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L28)

```diff
-     }(0, wQ.l)(rQ.h, IQ), (0, rQ.i)({
+     }(0, OM.m)(mM.e, HM), (0, mM.f)({
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var jQ = XQ(38966);
-     class BQ extends((0, wQ.i)(jQ.e)) {}(0, wQ.l)(jQ.e, BQ);
-     var yQ = XQ(39081),
-       VQ = XQ(37555),
-       DQ = XQ(38427),
-       pQ = XQ(37500);
-     class GQ extends((0, wQ.i)(yQ.c)) {}(0, wQ.l)(yQ.c, GQ);
-     class UQ extends((0, wQ.i)(VQ.d)) {}(0, wQ.l)(VQ.d, UQ);
-     class bQ extends((0, wQ.i)(DQ.m)) {}(0, wQ.l)(DQ.m, bQ);
-     class vQ extends((0, wQ.i)(pQ.c)) {}(0, wQ.l)(pQ.c, vQ)
+     var hM = iM(39720);
+     class JM extends((0, OM.i)(hM.d)) {}(0, OM.m)(hM.d, JM);
+     var dM = iM(39852),
+       yM = iM(38178),
+       lM = iM(39126),
+       EM = iM(38287);
+     class UM extends((0, OM.i)(dM.c)) {}(0, OM.m)(dM.c, UM);
+     class GM extends((0, OM.i)(yM.b)) {}(0, OM.m)(yM.b, GM);
+     class CM extends((0, OM.i)(lM.i)) {}(0, OM.m)(lM.i, CM);
+     class eM extends((0, OM.i)(EM.c)) {}(0, OM.m)(EM.c, eM)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   41797: (QQ, WQ, XQ) => {
+   44202: (MM, rM, iM) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L48-L60` → after: `L49-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L49-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L49-L61) · [Before (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L48-L60)

```diff
-     var wQ = XQ(41804),
-       qQ = (XQ(40245), XQ(41326), XQ(40732), XQ(41815)),
-       TQ = XQ(37539),
-       zQ = XQ(37367),
-       sQ = XQ(41827),
-       FQ = XQ(41830),
-       PQ = XQ(37492),
-       gQ = (XQ(41344), XQ(41834)),
-       JQ = XQ(41832),
-       rQ = XQ(38991),
-       IQ = XQ(41842),
-       jQ = XQ(40126),
-       BQ = XQ(38979);
+     var OM = iM(44206),
+       SM = (iM(41074), iM(42220), iM(41564), iM(44220)),
+       jM = iM(38167),
+       aM = iM(38034),
+       PM = iM(44235),
+       nM = iM(44237),
+       QM = iM(38233),
+       zM = (iM(42233), iM(44241)),
+       LM = iM(44239),
+       mM = iM(39760),
+       HM = iM(44250),
+       hM = iM(40964),
+       JM = iM(39741);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L63` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L64) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L63)

```diff
-       DQ = BQ.u,
+       lM = JM.z,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L67-L72` → after: `L68-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L68-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L68-L73) · [Before (L67-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L67-L72)

```diff
-       }, ((qQ, TQ) => `(${((QQ,WQ,XQ)=>0===WQ?`${QQ} < 1`:WQ===XQ-1?`${QQ} >= ${WQ}`:`${QQ} == ${WQ}`)(QQ,TQ,WQ)} ? ${XQ(TQ)} : ${wQ})`)).join("\n\t\t+ "),
-       UQ = (QQ, WQ, XQ) => `vec4 ${QQ}(int i) {\n\treturn ${GQ("i",XQ,(QQ=>`gpuParticleSystem[${WQ+QQ}]`),"vec4(0.0)")};\n}\n`,
-       bQ = `\n${UQ("colorPositionsAt",pQ(DQ.colorPositions),BQ.e/4)}\n${UQ("color1At",pQ(DQ.color1),BQ.e)}\n${UQ("color2At",pQ(DQ.color2),BQ.e)}\n${UQ("velocityAt",pQ(DQ.Fy),BQ.e)}\n${UQ("remapStopAt",pQ(DQ.remap),BQ.e)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${GQ("j",4,(Q … [truncated]
-       vQ = (QQ, WQ, XQ, wQ) => QQ ? `${XQ}(${wQ})` : `gpuParticleSystem[${WQ} + ${wQ}]`,
-       dQ = QQ => `gpuParticleSystem[${QQ>>2}].${"xyzw"[3&QQ]}`,
-       HQ = QQ => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${BQ.e}\n#define COLOR_POSITIONS ${pQ(DQ.colorPositions)}\n#define COLOR1 ${pQ(DQ.color1)}\n#define COLOR2 ${pQ(DQ.color2)}\n#define VELOCITY ${pQ(DQ.Fy)}\n#define R … [truncated]
+       }, ((SM, jM) => `(${((MM,rM,iM)=>0===rM?`${MM} < 1`:rM===iM-1?`${MM} >= ${rM}`:`${MM} == ${rM}`)(MM,jM,rM)} ? ${iM(jM)} : ${OM})`)).join("\n\t\t+ "),
+       GM = (MM, rM, iM) => `vec4 ${MM}(int i) {\n\treturn ${UM("i",iM,(MM=>`gpuParticleSystem[${rM+MM}]`),"vec4(0.0)")};\n}\n`,
+       CM = `\n${GM("colorPositionsAt",EM(lM.colorPositions),JM.d/4)}\n${GM("color1At",EM(lM.color1),JM.d)}\n${GM("color2At",EM(lM.color2),JM.d)}\n${GM("velocityAt",EM(lM.dd),JM.d)}\n${GM("remapStopAt",EM(lM.remap),JM.d)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${UM("j",4,(M … [truncated]
+       eM = (MM, rM, iM, OM) => MM ? `${iM}(${OM})` : `gpuParticleSystem[${rM} + ${OM}]`,
+       bM = MM => `gpuParticleSystem[${MM>>2}].${"xyzw"[3&MM]}`,
+       wM = MM => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${JM.d}\n#define COLOR_POSITIONS ${EM(lM.colorPositions)}\n#define COLOR1 ${EM(lM.color1)}\n#define COLOR2 ${EM(lM.color2)}\n#define VELOCITY ${EM(lM.dd)}\n#define R … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L74` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L75) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L74)

```diff
-     jQ.b.ShadersStore[`${yQ}VertexShader`] = HQ(!1), jQ.b.ShadersStore[`${yQ}PixelShader`] = aQ, jQ.b.ShadersStore[`${VQ}VertexShader`] = HQ(!0), jQ.b.ShadersStore[`${VQ}PixelShader`] = aQ;
+     hM.e.ShadersStore[`${dM}VertexShader`] = wM(!1), hM.e.ShadersStore[`${dM}PixelShader`] = tM, hM.e.ShadersStore[`${yM}VertexShader`] = wM(!0), hM.e.ShadersStore[`${yM}PixelShader`] = tM;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L77-L79` → after: `L78-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L78-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L78-L80) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L77-L79)

```diff
-     var iQ = XQ(38972),
-       cQ = XQ(41851);
-     class AQ extends iQ.c {
+     var RM = iM(39733),
+       pM = iM(44259);
+     class WM extends RM.b {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L81` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L82) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L81)

```diff
-         super(QQ, WQ, XQ), this.renderer = XQ, this.cB = wQ, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(BQ.q), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(MM, rM, iM), this.renderer = iM, this.YJ = OM, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(JM.s), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L88-L90` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L89-L91) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L88-L90)

```diff
-             const QQ = Math.floor(TQ / BQ.m),
-               XQ = Math.min(WQ, (QQ + 1) * BQ.m);
-             wQ.texSubImage2D(wQ.TEXTURE_2D, 0, TQ % BQ.m * 4, QQ, 4 * (XQ - TQ), 1, wQ.RGBA_INTEGER, wQ.UNSIGNED_INT, qQ, TQ * BQ.h), TQ = XQ
+             const MM = Math.floor(jM / JM.p),
+               iM = Math.min(rM, (MM + 1) * JM.p);
+             OM.texSubImage2D(OM.TEXTURE_2D, 0, jM % JM.p * 4, MM, 4 * (iM - jM), 1, OM.RGBA_INTEGER, OM.UNSIGNED_INT, SM, jM * JM.g), jM = iM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L94` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L95) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L94)

```diff
-         const qQ = wQ.Uj();
+         const SM = OM.ph();
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L97-L98` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L98-L99) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L97-L98)

```diff
-           zQ = Math.min(TQ, BQ.m);
-         this.records = qQ.createRawTexture(null, 4 * zQ, Math.ceil(TQ / zQ), gQ.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, gQ.b.TEXTURE_NEAREST_SAMPLINGMODE, null, gQ.b.TEXTURETYPE_UNSIGNED_INTEGER)
+           aM = Math.min(jM, JM.p);
+         this.records = SM.createRawTexture(null, 4 * aM, Math.ceil(jM / aM), zM.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, zM.d.TEXTURE_NEAREST_SAMPLINGMODE, null, zM.d.TEXTURETYPE_UNSIGNED_INTEGER)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L101-L102` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L102-L103) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L101-L102)

```diff
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.cB.getAnimationRatio() || 1;
-         const WQ = this.cB.getFrameId();
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.YJ.getAnimationRatio() || 1;
+         const rM = this.YJ.getFrameId();
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L115-L116` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L116-L117) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L115-L116)

```diff
-         (0, cQ.i)(this, this.uniforms, this.uniformBits, QQ);
-         for (const XQ of BQ.t) this.uniforms[XQ] = this.uniformBits[XQ];
+         (0, pM.h)(this, this.uniforms, this.uniformBits, MM);
+         for (const iM of JM.v) this.uniforms[iM] = this.uniformBits[iM];
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L118` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L119) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L118)

```diff
-         (0, cQ.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (WQ = this.ramp) || void 0 === WQ || WQ.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = JQ.b.CreateRGBATexture(this.rampTexels.texels, BQ.l, … [truncated]
+         (0, pM.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (rM = this.ramp) || void 0 === rM || rM.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = LM.e.CreateRGBATexture(this.rampTexels.texels, JM.o, … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L128` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L129) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L128)

```diff
-         this.cB = QQ, this.reportFailure = WQ, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = yQ, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32A … [truncated]
+         this.YJ = MM, this.reportFailure = rM, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = dM, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32A … [truncated]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L131` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L132) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L131)

```diff
-         null === wQ && null !== XQ ? (console.warn(`GPU particles link their fallback here: ${XQ}`), this.reportFailure(XQ, !0)) : null !== wQ && this.fail(wQ === RQ ? RQ : null !== XQ && void 0 !== XQ ? XQ : wQ)
+         null === OM && null !== iM ? (console.warn(`GPU particles link their fallback here: ${iM}`), this.reportFailure(iM, !0)) : null !== OM && this.fail(OM === sM ? sM : null !== iM && void 0 !== iM ? iM : OM)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L134-L137` → after: `L135-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L135-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L135-L138) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L134-L137)

```diff
-         const XQ = BQ.m * this.engine.getCaps().maxTextureSize;
-         WQ > XQ && this.warnOnce(`capacity:${QQ}`, `particle system ${QQ} holds ${XQ} particles, not ${WQ}: its records texture's limit`);
-         const wQ = new AQ(QQ, Math.min(WQ, XQ), this, this.cB);
-         return this.cB.addParticleSystem(wQ), wQ
+         const iM = JM.p * this.engine.getCaps().maxTextureSize;
+         rM > iM && this.warnOnce(`capacity:${MM}`, `particle system ${MM} holds ${iM} particles, not ${rM}: its records texture's limit`);
+         const OM = new WM(MM, Math.min(rM, iM), this, this.YJ);
+         return this.YJ.addParticleSystem(OM), OM
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L142` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L143) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L142)

```diff
-         for (const wQ of (0, rQ.l)(QQ.blendMode))
+         for (const OM of (0, mM.k)(MM.blendMode))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L147` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L148) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L147)

```diff
-         this.cB._toBeDisposed.push(QQ)
+         this.YJ._toBeDisposed.push(MM)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L150` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L151) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L150)

```diff
-         this.cB.removeParticleSystem(QQ), QQ.releaseGl()
+         this.YJ.removeParticleSystem(MM), MM.releaseGl()
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L157` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L158) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L157)

```diff
-           cB: wQ,
+           YJ: OM,
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L163` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L164) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L163)

```diff
-           sQ = null !== (WQ = QQ.ramp) && void 0 !== WQ ? WQ : this.whiteRamp;
+           PM = null !== (rM = MM.ramp) && void 0 !== rM ? rM : this.whiteRamp;
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L165` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L166) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L165)

```diff
-         for (const FQ of (0, rQ.l)(QQ.blendMode)) {
+         for (const nM of (0, mM.k)(MM.blendMode)) {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L167` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L168) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L167)

```diff
-           XQ.enableEffect(WQ), WQ.setTexture("gpuParticleTexture", QQ.texture.mirror), WQ.setTexture("gpuParticleRampTexture", sQ), WQ._bindTexture("gpuParticleRecords", QQ.records), WQ.setMatrix("gpuParticleView", wQ.getViewMatrix()), WQ.setMatrix("gpuParticleProjection", wQ.get … [truncated]
+           iM.enableEffect(rM), rM.setTexture("gpuParticleTexture", MM.texture.mirror), rM.setTexture("gpuParticleRampTexture", PM), rM._bindTexture("gpuParticleRecords", MM.records), rM.setMatrix("gpuParticleView", OM.getViewMatrix()), rM.setMatrix("gpuParticleProjection", OM.get … [truncated]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L169` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L170) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L169)

```diff
-         return XQ.setAlphaMode(gQ.b.ALPHA_DISABLE), zQ
+         return iM.setAlphaMode(zM.d.ALPHA_DISABLE), aM
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L189` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L190) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L189)

```diff
-             if (WQ) return `${wQ} ${WQ}`
+             if (rM) return `${OM} ${rM}`
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L198` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L199) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L198)

```diff
-         return QQ === rQ.c ? this.multiplyEffect : this.effect
+         return MM === mM.e ? this.multiplyEffect : this.effect
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L203` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L204) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L203)

```diff
-           QQ === this.shader && this.programFailed(null !== (wQ = this.gl()) && void 0 !== wQ && wQ.isContextLost() ? RQ : function(QQ) {
+           MM === this.shader && this.programFailed(null !== (OM = this.gl()) && void 0 !== OM && OM.isContextLost() ? sM : function(MM) {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L210` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L211) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L210)

```diff
-         this.linkingPair ? this.pairFailure ??= QQ : this.fail(QQ)
+         this.linkingPair ? this.pairFailure ??= MM : this.fail(MM)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L214-L215` → after: `L215-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L215-L216) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L214-L215)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${QQ}`), this.reportFailure(QQ, !1);
-           for (const QQ of this.cB.KD.slice()) QQ instanceof AQ && QQ.disposeOnStop && QQ.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${MM}`), this.reportFailure(MM, !1);
+           for (const MM of this.YJ.aG.slice()) MM instanceof WM && MM.disposeOnStop && MM.dispose()
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L219-L220` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L220-L221) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L219-L220)

```diff
-     var CQ = XQ(40089);
-     class uQ extends CQ.b {
+     var kM = iM(40931);
+     class ZM extends kM.e {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L233-L249` → after: `L234-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L234-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L234-L250) · [Before (L233-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L233-L249)

```diff
-     var fQ = XQ(40479),
-       SQ = XQ(41320),
-       tQ = XQ(40221),
-       oQ = XQ(40428),
-       eQ = XQ(40422),
-       nQ = XQ(40349),
-       xQ = XQ(41386),
-       YQ = XQ(37874),
-       NQ = XQ(41855),
-       ZQ = XQ(41858),
-       OQ = XQ(41865),
-       KQ = XQ(40371),
-       mQ = XQ(3091),
-       MQ = XQ(37772),
-       QW = XQ(40564),
-       WW = XQ(37837),
- ... (1 more removed lines; see GitHub link above)
+     var YM = iM(41313),
+       NM = iM(42212),
+       AM = iM(41048),
+       xM = iM(41274),
+       vM = iM(41269),
+       FM = iM(41190),
+       BM = iM(42280),
+       XM = iM(38476),
+       IM = iM(44265),
+       KM = iM(44273),
+       qM = iM(44280),
+       TM = iM(41213),
+       VM = iM(3177),
+       cM = iM(38363),
+       Mr = iM(41412),
+       rr = iM(38442),
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L253` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L254) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L253)

```diff
-       const WQ = QQ.ZD;
+       const rM = MM.iG;
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L257` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L258) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L257)

```diff
-           qQ = wQ.lj();
+           SM = OM.Zh();
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L264` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L265) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L264)

```diff
-         this.KJ = QQ, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, WQ.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.Cm = MM, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, rM.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L274-L277` → after: `L275-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L275-L278) · [Before (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L274-L277)

```diff
-           KJ: wQ
-         } = this, qQ = null === (WQ = wQ.RD) || void 0 === WQ ? void 0 : WQ.visibility;
-         if (!qQ || !QQ || wQ.nj.xj) return !1;
-         if (!(wQ.nJ.CwQ[0] >= WW.f)) return !1;
+           Cm: OM
+         } = this, SM = null === (rM = OM.kU) || void 0 === rM ? void 0 : rM.visibility;
+         if (!SM || !MM || OM.CL.MJ) return !1;
+         if (!(OM.uL.GOM[0] >= rr.h)) return !1;
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L280` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L281) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L280)

```diff
-         const zQ = wQ.jr,
+         const aM = OM.Am,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L283` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L284) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L283)

```diff
-         return FQ[0] = sQ.x + zQ[0], FQ[1] = sQ.y + zQ[1], FQ[2] = sQ.z + zQ[2], !!qQ.eyeClear(FQ[0], FQ[1], FQ[2], QQ.minZ, TQ, wQ.nJ) && (this.vis = qQ, this.passable.clear(), this.count = 0, !0)
+         return nM[0] = PM.x + aM[0], nM[1] = PM.y + aM[1], nM[2] = PM.z + aM[2], !!SM.eyeClear(nM[0], nM[1], nM[2], MM.minZ, jM, OM.uL) && (this.vis = SM, this.passable.clear(), this.count = 0, !0)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L304-L305` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L305-L306) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L304-L305)

```diff
-           nJ: sQ
-         } = this.KJ, [FQ, PQ] = sQ.CwQ, gQ = null !== XQ && XQ.update(wQ[0], wQ[1], wQ[2], sQ.iQQ, FQ, PQ, this.passable);
+           uL: PM
+         } = this.Cm, [nM, QM] = PM.GOM, zM = null !== iM && iM.update(OM[0], OM[1], OM[2], PM.hL, nM, QM, this.passable);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L321-L326` → after: `L322-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L322-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L322-L327) · [Before (L321-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L321-L326)

```diff
-     var TW = XQ(37820),
-       zW = XQ(37783),
-       sW = XQ(40551),
-       FW = XQ(41870),
-       PW = XQ(40555),
-       gW = XQ(40491);
+     var jr = iM(38423),
+       ar = iM(38375),
+       Pr = iM(41397),
+       nr = iM(44287),
+       Qr = iM(41400),
+       zr = iM(41328);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L340-L341` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L341-L342) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L340-L341)

```diff
-       if (!WQ || !0 !== WQ[MQ.m]) return;
-       const XQ = WQ[MQ.u],
+       if (!rM || !0 !== rM[cM.q]) return;
+       const iM = rM[cM.t],
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L349` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L350) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L349)

```diff
-       const WQ = QQ.ZD;
+       const rM = MM.iG;
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L351` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L352) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L351)

```diff
-         const QQ = WQ[XQ].lj();
+         const MM = rM[iM].Zh();
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L355` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L356) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L355)

```diff
-         const QQ = WQ[XQ].lj();
+         const MM = rM[iM].Zh();
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L365` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L366) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L365)

```diff
-       if ("function" !== typeof XQ) throw new Error(`terrainDrawState: Babylon has no ${WQ} to hook`);
+       if ("function" !== typeof iM) throw new Error(`terrainDrawState: Babylon has no ${rM} to hook`);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L370` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L371) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L370)

```diff
-       const TQ = XQ.nJ.iQQ,
+       const jM = iM.uL.hL,
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L374` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L375) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L374)

```diff
-         PQ = new TW.c(TQ, QQ.Uj());
+         QM = new jr.b(jM, MM.ph());
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L376` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L377) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L376)

```diff
-         if (DW.has(QQ) || (DW.add(QQ), QQ.onContextLostObservable.add(jW), QQ.Gj.add(jW)), VW) return;
+         if (lr.has(MM) || (lr.add(MM), MM.onContextLostObservable.add(hr), MM.Rh.add(hr)), yr) return;
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L378` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L379) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L378)

```diff
-         const WQ = FW.c.prototype,
+         const rM = nr.b.prototype,
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L385-L386` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L386-L387) · [Before (L385-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L385-L386)

```diff
-         const wQ = pW(gW.e.prototype, "_syncParentEnabledState");
-         Object.assign(gW.e.prototype, {
+         const OM = Er(zr.d.prototype, "_syncParentEnabledState");
+         Object.assign(zr.d.prototype, {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L391-L392` → after: `L392-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L392-L393) · [Before (L391-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L391-L392)

```diff
-         const qQ = pW(PW.b.prototype, "resetDrawCache");
-         PW.b.prototype.resetDrawCache = function(QQ, WQ) {
+         const SM = Er(Qr.e.prototype, "resetDrawCache");
+         Qr.e.prototype.resetDrawCache = function(MM, rM) {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L395` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L396) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L395)

```diff
-         const TQ = sW.b.prototype,
+         const jM = Pr.c.prototype,
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L406` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L407) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L406)

```diff
-       }(QQ.Uj());
+       }(MM.ph());
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L421-L422` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L422-L423) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L421-L422)

```diff
-             XQ = QQ.owQ[0],
-             wQ = QQ.owQ[1];
+             iM = MM.ROM[0],
+             OM = MM.ROM[1];
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L438` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L439) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L438)

```diff
-             TQ = FQ.gI(QQ.activeCamera),
+             jM = nM.JL(MM.activeCamera),
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L441` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L442) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L441)

```diff
-             const WQ = QQ.Uj().currentRenderPassId;
+             const rM = MM.ph().currentRenderPassId;
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L458` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L459) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L458)

```diff
-             if (!QW.b.IsInFrustum(WQ.owQ, wQ)) continue;
+             if (!Mr.e.IsInFrustum(rM.ROM, OM)) continue;
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L468` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L469) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L468)

```diff
-                 if (zQ && wQ[WQ] === PQ) IQ && 1 === qQ[WQ] && wW(rQ) && 0, FQ.see(rQ, 1 === qQ[WQ] ? JQ : -1);
+                 if (aM && OM[rM] === QM) HM && 1 === SM[rM] && Or(mM) && 0, nM.see(mM, 1 === SM[rM] ? LM : -1);
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L471` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L472) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L471)

```diff
-                   const QQ = !0 === rQ.metadata[zW.k];
+                   const MM = !0 === mM.metadata[ar.q];
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L475` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L476) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L475)

```diff
-                 } else TQ ? GQ(rQ, JQ, !0 === rQ.metadata[zW.k]) : KQ.e.prototype.push.call(XQ, rQ)
+                 } else jM ? UM(mM, LM, !0 === mM.metadata[ar.q]) : TM.e.prototype.push.call(iM, mM)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L482` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L483) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L482)

```diff
-         const TQ = WQ.twQ;
+         const jM = rM.uOM;
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L489-L490` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L490-L491) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L489-L490)

```diff
-         ewQ: () => FQ.culled,
-         hwQ: (QQ, WQ) => {
+         pOM: () => nM.culled,
+         JOM: (MM, rM) => {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L494` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L495) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L494)

```diff
-             PQ = `${qQ}|${sQ}|${FQ}`;
+             QM = `${SM}|${PM}|${nM}`;
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L498-L500` → after: `L499-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L499-L501) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L498-L500)

```diff
-             XQ.dWQ([qQ * TQ - 1, sQ * TQ - 1, FQ * TQ - 1], null, QQ), gQ = Object.assign(wQ(QQ, TQ + 2), {
-               nwQ: PQ,
-               xwQ: 0,
+             iM.ErM([SM * jM - 1, PM * jM - 1, nM * jM - 1], null, MM), zM = Object.assign(OM(MM, jM + 2), {
+               WOM: QM,
+               sOM: 0,
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L504` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L505) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L504)

```diff
-             }), pQ(gQ), IQ[gQ._noaSlot] = (0, mQ.i)(qQ, sQ, FQ), jQ[3 * gQ._noaSlot] = qQ, jQ[3 * gQ._noaSlot + 1] = sQ, jQ[3 * gQ._noaSlot + 2] = FQ, zQ.set(PQ, gQ)
+             }), EM(zM), HM[zM._noaSlot] = (0, VM.k)(SM, PM, nM), hM[3 * zM._noaSlot] = SM, hM[3 * zM._noaSlot + 1] = PM, hM[3 * zM._noaSlot + 2] = nM, aM.set(QM, zM)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L506` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L507) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L506)

```diff
-           gQ.xwQ++, QQ.metadata[MQ.x] = gQ
+           zM.sOM++, MM.metadata[cM.x] = zM
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L508` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L509) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L508)

```diff
-         ZE: QQ => {
+         Fk: MM => {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L510` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L511) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L510)

```diff
-           WQ && (WQ.xwQ--, WQ.xwQ <= 0 && (zQ.delete(WQ.nwQ), yQ.push(WQ._noaSlot)), QQ.metadata[MQ.x] = null)
+           rM && (rM.sOM--, rM.sOM <= 0 && (aM.delete(rM.WOM), dM.push(rM._noaSlot)), MM.metadata[cM.x] = null)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L512` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L513) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L512)

```diff
-         SwQ: (QQ, WQ) => {
+         gOM: (MM, rM) => {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L528` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L529) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L528)

```diff
-         WQQ: QQ => {
+         rMM: MM => {
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L530-L531` → after: `L531-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L531-L532) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L530-L531)

```diff
-             WQ.EwQ.YwQ(QQ), WQ.RwQ.YwQ(QQ);
-             for (const XQ of WQ.owQ) XQ.YwQ(QQ);
+             rM.UOM.kOM(MM), rM.EOM.kOM(MM);
+             for (const iM of rM.ROM) iM.kOM(MM);
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L553` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L554) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L553)

```diff
-         if (!(QQ * (QQ >= 0 ? zQ : wQ) + WQ * (WQ >= 0 ? sQ : qQ) + gQ * (gQ >= 0 ? FQ : TQ) + XQ[PQ + 3] >= 0)) return !1
+         if (!(MM * (MM >= 0 ? aM : OM) + rM * (rM >= 0 ? PM : SM) + zM * (zM >= 0 ? nM : jM) + iM[QM + 3] >= 0)) return !1
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L557` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L558) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L557)

```diff
-     var vW = XQ(38049);
+     var er = iM(38749);
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L560-L563` → after: `L561-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L561-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L561-L564) · [Before (L560-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L560-L563)

```diff
-         var XQ = QQ.cB;
-         XQ.rwQ(new OQ.b(XQ));
-         var wQ = new NQ.d(FQ);
-         XQ.ZwQ = wQ, wQ.blocks = [];
+         var iM = MM.YJ;
+         iM.MOM(new qM.c(iM));
+         var OM = new IM.c(nM);
+         iM.oOM = OM, OM.blocks = [];
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L566-L568` → after: `L567-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L567-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L567-L569) · [Before (L566-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L566-L568)

```diff
-         this.textPlanes = sQ, this.ewQ = () => qQ.ewQ(), this.WQQ = QQ => {
-           gQ(wQ, QQ), qQ.WQQ(QQ)
-         }, this.hwQ = (WQ, XQ, zQ) => {
+         this.textPlanes = PM, this.pOM = () => SM.pOM(), this.rMM = MM => {
+           zM(OM, MM), SM.rMM(MM)
+         }, this.JOM = (rM, iM, aM) => {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L570` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L571) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L570)

```diff
-           if (!WQ.metadata[MQ.u] && !WQ.metadata[MQ.l]) {
+           if (!rM.metadata[cM.t] && !rM.metadata[cM.n]) {
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L572` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L573) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L572)

```diff
-               var FQ = wQ.twQ;
+               var nM = OM.uOM;
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L575-L576` → after: `L576-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L576-L577) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L575-L576)

```diff
-                 var gQ = WQ.uC().mwQ;
-                 WQ.metadata[MQ.F] = gQ.center.length() + gQ.radius, WQ.bj = !0
+                 var zM = rM.aY().YOM;
+                 rM.metadata[cM.E] = zM.center.length() + zM.radius, rM.Wh = !0
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L578` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L579) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L578)

```diff
-               return FQ.push(WQ), WQ.metadata[MQ.g] = FQ, void(WQ.metadata[MQ.l] = !0)
+               return nM.push(rM), rM.metadata[cM.i] = nM, void(rM.metadata[cM.n] = !0)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L588` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L589) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L588)

```diff
-               QQ.KJ.dWQ(VQ, null, DQ), yQ = JQ(DQ, PQ), wQ.blocks.push(yQ), TQ[BQ] = yQ, yQ.nwQ = BQ
+               MM.Cm.ErM(yM, null, lM), dM = LM(lM, QM), OM.blocks.push(dM), jM[JM] = dM, dM.WOM = JM
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L590` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L591) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L590)

```diff
-             qQ.hwQ(WQ, zQ), qQ.SwQ(yQ, WQ), yQ.xwQ = (yQ.xwQ || 0) + 1, WQ.metadata[MQ.u] = yQ, WQ.metadata[MQ.m] = !0, WQ.bj = !0
+             SM.JOM(rM, aM), SM.gOM(dM, rM), dM.sOM = (dM.sOM || 0) + 1, rM.metadata[cM.t] = dM, rM.metadata[cM.q] = !0, rM.Wh = !0
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L592` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L593) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L592)

```diff
-         }, this.ZE = QQ => {
+         }, this.Fk = MM => {
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L594-L596` → after: `L595-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L595-L597) · [Before (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L594-L596)

```diff
-             QQ.metadata[MQ.l] && ((0, mQ.o)(QQ.metadata[MQ.g], QQ), QQ.metadata[MQ.l] = !1), QQ.metadata[MQ.g] === sQ && (QQ.bj = !1), QQ.metadata[MQ.g] = void 0, QQ.metadata[MQ.F] = void 0;
-             var WQ = QQ.metadata[MQ.u];
-             WQ && WQ.entries && (QQ.metadata[MQ.m] && qQ.removeEntry(WQ, QQ), WQ.xwQ--, WQ.xwQ <= 0 && (delete TQ[WQ.nwQ], (0, mQ.o)(wQ.blocks, WQ))), qQ.ZE(QQ), QQ.metadata[MQ.u] = null, QQ.metadata[MQ.m] = !1
+             MM.metadata[cM.n] && ((0, VM.o)(MM.metadata[cM.i], MM), MM.metadata[cM.n] = !1), MM.metadata[cM.i] === PM && (MM.Wh = !1), MM.metadata[cM.i] = void 0, MM.metadata[cM.E] = void 0;
+             var rM = MM.metadata[cM.t];
+             rM && rM.entries && (MM.metadata[cM.q] && SM.removeEntry(rM, MM), rM.sOM--, rM.sOM <= 0 && (delete jM[rM.WOM], (0, VM.o)(OM.blocks, rM))), SM.Fk(MM), MM.metadata[cM.t] = null, MM.metadata[cM.q] = !1
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L598` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L599) · [Before (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L598)

```diff
-         }, this.o_ = function(QQ) {
+         }, this.E_ = function(MM) {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L600-L603` → after: `L601-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L601-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L601-L604) · [Before (L600-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L600-L603)

```diff
-           if (QQ.metadata[MQ.u]) {
-             if (QQ.metadata[MQ.m] === WQ) return;
-             var XQ = QQ.metadata[MQ.u];
-             XQ && XQ.entries && (WQ ? qQ.SwQ(XQ, QQ) : qQ.removeEntry(XQ, QQ)), QQ.metadata[MQ.m] = WQ
+           if (MM.metadata[cM.t]) {
+             if (MM.metadata[cM.q] === rM) return;
+             var iM = MM.metadata[cM.t];
+             iM && iM.entries && (rM ? SM.gOM(iM, MM) : SM.removeEntry(iM, MM)), MM.metadata[cM.q] = rM
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L605-L607` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L606-L608) · [Before (L605-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L605-L607)

```diff
-             if (QQ.metadata[MQ.l] === WQ) return;
-             var TQ = QQ.metadata[MQ.g] || wQ.twQ;
-             WQ ? TQ.push(QQ) : (0, mQ.o)(TQ, QQ), QQ.metadata[MQ.l] = WQ
+             if (MM.metadata[cM.n] === rM) return;
+             var jM = MM.metadata[cM.i] || OM.uOM;
+             rM ? jM.push(MM) : (0, VM.o)(jM, MM), MM.metadata[cM.n] = rM
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L611` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L612) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L611)

```diff
-           PQ = WQ * QQ.KJ.nJ.iQQ,
+           QM = rM * MM.Cm.uL.hL,
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L614` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L615) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L614)

```diff
-               QQ.EwQ.YwQ(WQ), QQ.RwQ.YwQ(WQ), QQ.owQ.forEach((QQ => QQ.YwQ(WQ))), QQ.blocks && gQ(QQ, WQ)
+               MM.UOM.kOM(rM), MM.EOM.kOM(rM), MM.ROM.forEach((MM => MM.kOM(rM))), MM.blocks && zM(MM, rM)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L618-L619` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L619-L620) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L618-L619)

```diff
-             var XQ = new zQ.vj(QQ[0], QQ[1], QQ[2]),
-               wQ = new zQ.vj(QQ[0] + WQ, QQ[1] + WQ, QQ[2] + WQ);
+             var iM = new aM.sh(MM[0], MM[1], MM[2]),
+               OM = new aM.sh(MM[0] + rM, MM[1] + rM, MM[2] + rM);
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L622` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L623) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L622)

```diff
-         qQ = GW(XQ, wQ, QQ.KJ, JQ, ((QQ, WQ) => {
+         SM = Ur(iM, OM, MM.Cm, LM, ((MM, rM) => {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L625` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L626) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L625)

```diff
-             wQ.isEnabled(!1) && ((0, vW.e)(wQ, WQ) && KQ.e.prototype.push.call(QQ, wQ))
+             OM.isEnabled(!1) && ((0, er.b)(OM, rM) && TM.e.prototype.push.call(MM, OM))
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L635` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L636) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L635)

```diff
-         Km: wQ,
+         yV: OM,
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L639-L640` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L640-L641) · [Before (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L639-L640)

```diff
-       } = QQ.model.Zm, sQ = QQ.zqQ;
-       sQ.position.XQQ(WQ[0], WQ[1], WQ[2]), sQ.rotation.XQQ(XQ[0], XQ[1], XQ[2]);
+       } = MM.model.JV, PM = MM.IOM;
+       PM.position.iMM(rM[0], rM[1], rM[2]), PM.rotation.iMM(iM[0], iM[1], iM[2]);
```
