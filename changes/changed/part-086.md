# Changed — Bundle Modifications Report (Part 086 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `86 / 140` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 085](part-085.md) · [Part 087 →](part-087.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (933 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 323. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6765` → after: `L6765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6765) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6765)

```diff
-       null !== Ik && void 0 !== Ik && Ik.aborted && yk(), null === Ik || void 0 === Ik || Ik.addEventListener("abort", yk, {
+       null !== gS && void 0 !== gS && gS.aborted && xS(), null === gS || void 0 === gS || gS.addEventListener("abort", xS, {
```

#### 324. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6768-L6782` → after: `L6768-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6768-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6768-L6782) · [Before (L6768-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6768-L6782)

```diff
-       const lk = kk.map((() => {})),
-         ak = kk.map((() => {}));
-       let qk = null;
-       const Lk = kk => void 0 !== kk && ("" !== Ri(kk.answer).trim() || !0 === kk.isCalling);
-       let tk = () => {};
-       kk.forEach(((kk, Ik) => {
-         const yk = (0, xk.c)(Qi, ik[Ik].signal);
-         ui(kk, xi(Fk, kk), yk.signal, (kk => {
-           ak[Ik] = kk, null === qk && Lk(kk) && (qk = Ik), qk === Ik && (null === Xk || void 0 === Xk || Xk(kk))
-         }), Tk).catch((Fk => {
-           if (ik[Ik].signal.aborted) return "failed";
-           const Xk = yk.signal.aborted;
-           return console.warn(`World Code AI: ${kk.name} ${Xk?"took longer than 240 s":"couldn't be reached"}`, Fk), qi.Mj(kk.name, Xk ? "timeout" : "network"), Xk ? "timeout" : "failed"
-         })).then((kk => {
-           yk.clear(), lk[Ik] = kk, qk !== Ik || Ui(kk) || (qk = null), tk()
+       const NS = SS.map((() => {})),
+         qS = SS.map((() => {}));
+       let uS = null;
+       const IS = SS => void 0 !== SS && ("" !== yX(SS.answer).trim() || !0 === SS.isCalling);
+       let fS = () => {};
+       SS.forEach(((SS, gS) => {
+         const xS = (0, nS.d)(DX, XS[gS].signal);
+         YX(SS, nX(HS, SS), xS.signal, (SS => {
+           qS[gS] = SS, null === uS && IS(SS) && (uS = gS), uS === gS && (null === tS || void 0 === tS || tS(SS))
+         }), bS).catch((HS => {
+           if (XS[gS].signal.aborted) return "failed";
+           const tS = xS.signal.aborted;
+           return console.warn(`World Code AI: ${SS.name} ${tS?"took longer than 240 s":"couldn't be reached"}`, HS), uX.tK(SS.name, tS ? "timeout" : "network"), tS ? "timeout" : "failed"
+         })).then((SS => {
+           xS.clear(), NS[gS] = SS, uS !== gS || VX(SS) || (uS = null), fS()
```

#### 325. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6785-L6790` → after: `L6785-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6785-L6790) · [Before (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6785-L6790)

```diff
-       const Zk = () => {
-         var kk;
-         if (null !== qk) {
-           const kk = lk[qk];
-           return Ui(kk) ? {
-             reply: kk
+       const kS = () => {
+         var SS;
+         if (null !== uS) {
+           const SS = NS[uS];
+           return VX(SS) ? {
+             reply: SS
```

#### 326. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6793-L6795` → after: `L6793-L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6793-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6793-L6795) · [Before (L6793-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6793-L6795)

```diff
-         const Fk = lk.find(Ui);
-         if (Fk) return {
-           reply: Fk
+         const HS = NS.find(VX);
+         if (HS) return {
+           reply: HS
```

#### 327. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6797-L6798` → after: `L6797-L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6797-L6798) · [Before (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6797-L6798)

```diff
-         if (!lk.includes(void 0)) return {
-           reply: null !== (kk = lk.find(Gi)) && void 0 !== kk ? kk : null
+         if (!NS.includes(void 0)) return {
+           reply: null !== (SS = NS.find(LX)) && void 0 !== SS ? SS : null
```

#### 328. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6801-L6805` → after: `L6801-L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6801-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6801-L6805) · [Before (L6801-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6801-L6805)

```diff
-           const kk = lk.findIndex(((kk, Fk) => void 0 === kk && Lk(ak[Fk])));
-           if (-1 !== kk) {
-             qk = kk;
-             const Fk = ak[kk];
-             Fk && (null === Xk || void 0 === Xk || Xk(Fk))
+           const SS = NS.findIndex(((SS, HS) => void 0 === SS && IS(qS[HS])));
+           if (-1 !== SS) {
+             uS = SS;
+             const HS = qS[SS];
+             HS && (null === tS || void 0 === tS || tS(HS))
```

#### 329. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6811-L6814` → after: `L6811-L6814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6811-L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6811-L6814) · [Before (L6811-L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6811-L6814)

```diff
-           if (null !== Ik && void 0 !== Ik && Ik.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const kk = Zk();
-           if (kk) {
-             const Fk = lk.filter((kk => "string" === typeof kk));
+           if (null !== gS && void 0 !== gS && gS.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const SS = kS();
+           if (SS) {
+             const HS = NS.filter((SS => "string" === typeof SS));
```

#### 330. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6816-L6817` → after: `L6816-L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6816-L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6816-L6817) · [Before (L6816-L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6816-L6817)

```diff
-               reply: kk.reply,
-               failures: Fk
+               reply: SS.reply,
+               failures: HS
```

#### 331. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6820-L6821` → after: `L6820-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6820-L6821) · [Before (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6820-L6821)

```diff
-           await new Promise((kk => {
-             tk = kk
+           await new Promise((SS => {
+             fS = SS
```

#### 332. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6825-L6844` → after: `L6825-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6825-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6825-L6844) · [Before (L6825-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6825-L6844)

```diff
-         null === Ik || void 0 === Ik || Ik.removeEventListener("abort", yk), yk()
-       }
-     }
- 
-     function Ni() {
-       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const Fk = Ii.firstFreeAt(ji.map((kk => kk.name)), kk);
-       return Xi(Fk - kk) ? kk : Fk
-     }
-     async function ci(kk) {
-       var Fk;
-       let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const Xk = Date.now(),
-         Tk = null !== (Fk = Ik.models) && void 0 !== Fk ? Fk : ji,
-         ik = void 0 === Ik.models ? function(kk, Fk) {
-           let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
- ... (4 more removed lines; see GitHub link above)
+         null === gS || void 0 === gS || gS.removeEventListener("abort", xS), xS()
+       }
+     }
+ 
+     function WX() {
+       let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const HS = gX.firstFreeAt(aX.map((SS => SS.name)), SS);
+       return tX(HS - SS) ? SS : HS
+     }
+     async function zX(SS) {
+       var HS;
+       let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const tS = Date.now(),
+         bS = null !== (HS = gS.models) && void 0 !== HS ? HS : aX,
+         XS = void 0 === gS.models ? function(SS, HS) {
+           let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+ ... (4 more added lines; see GitHub link above)
```

#### 333. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6846-L6848` → after: `L6846-L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6846-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6846-L6848) · [Before (L6846-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6846-L6848)

```diff
-                 model: Fk
-               } = kk;
-               return Fk
+                 model: HS
+               } = SS;
+               return HS
```

#### 334. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6850-L6861` → after: `L6850-L6861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6850-L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6850-L6861) · [Before (L6850-L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6850-L6861)

```diff
-             Tk = [...Xk.filter((kk => Fk(kk))), ...Xk.filter((kk => !Fk(kk)))],
-             ik = [];
-           for (let yk = 0; yk < Tk.length; yk += 2) ik.push(Tk.slice(yk, yk + 2));
-           return ik
-         }(Tk, (kk => Ii.freeAt(kk.name) <= Xk)) : Tk.map((kk => [kk])),
-         yk = [];
-       for (const ak of ik) {
-         const Fk = await Ci(ak, kk, Ik.signal, Ik.onProgress, Ik.tools);
-         if (null !== Fk.reply) {
-           const Tk = ak.find((kk => {
-             var Ik;
-             return kk.name === (null === (Ik = Fk.reply) || void 0 === Ik ? void 0 : Ik.model)
+             bS = [...tS.filter((SS => HS(SS))), ...tS.filter((SS => !HS(SS)))],
+             XS = [];
+           for (let xS = 0; xS < bS.length; xS += 2) XS.push(bS.slice(xS, xS + 2));
+           return XS
+         }(bS, (SS => gX.freeAt(SS.name) <= tS)) : bS.map((SS => [SS])),
+         xS = [];
+       for (const qS of XS) {
+         const HS = await iX(qS, SS, gS.signal, gS.onProgress, gS.tools);
+         if (null !== HS.reply) {
+           const bS = qS.find((SS => {
+             var gS;
+             return SS.name === (null === (gS = HS.reply) || void 0 === gS ? void 0 : gS.model)
```

#### 335. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6864-L6865` → after: `L6864-L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6864-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6864-L6865) · [Before (L6864-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6864-L6865)

```diff
-             ...Tk && !1 !== Ik.canNudge ? await Bi(Tk, xi(kk, Tk), Fk.reply, Ik.signal, Ik.onProgress, Ik.tools) : Fk.reply,
-             ms: Date.now() - Xk
+             ...bS && !1 !== gS.canNudge ? await sX(bS, nX(SS, bS), HS.reply, gS.signal, gS.onProgress, gS.tools) : HS.reply,
+             ms: Date.now() - tS
```

#### 336. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6868` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6868) · [Before (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6868)

```diff
-         yk.push(...Fk.failures)
+         xS.push(...HS.failures)
```

#### 337. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6870-L6871` → after: `L6870-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6870-L6871) · [Before (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6870-L6871)

```diff
-       const lk = si.find((kk => yk.includes(kk)));
-       throw new Vi(null !== lk && void 0 !== lk ? lk : "failed")
+       const NS = wX.find((SS => xS.includes(SS)));
+       throw new hX(null !== NS && void 0 !== NS ? NS : "failed")
```

#### 338. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6873` → after: `L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6873) · [Before (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6873)

```diff
-     const Wi = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const UX = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 339. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6875-L6877` → after: `L6875-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6875-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6875-L6877) · [Before (L6875-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6875-L6877)

```diff
-     function fi(kk) {
-       const Fk = kk.trim();
-       return Fk.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(Fk) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(Fk) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function pX(SS) {
+       const HS = SS.trim();
+       return HS.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(HS) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(HS) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 340. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6884` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6884) · [Before (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6884)

```diff
-         }(Ik, null !== (yk = kk.callFormat) && void 0 !== yk ? yk : "simple")) return Ik;
+         }(gS, null !== (xS = SS.callFormat) && void 0 !== xS ? xS : "simple")) return gS;
```

#### 341. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6892` → after: `L6892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6892) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6892)

```diff
-         qk = (0, xk.c)(lk, Xk);
+         uS = (0, nS.d)(NS, tS);
```

#### 342. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6895` → after: `L6895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6895) · [Before (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6895)

```diff
-         return Gi(Fk) && "" !== Fk.answer.trim() ? Fk : Ik
+         return LX(HS) && "" !== HS.answer.trim() ? HS : gS
```

#### 343. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6898` → after: `L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6898) · [Before (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6898)

```diff
-         return qi.Mj(kk.name, qk.signal.aborted ? "timeout" : "network"), Ik
+         return uX.tK(SS.name, uS.signal.aborted ? "timeout" : "network"), gS
```

#### 344. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6933` → after: `L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6933) · [Before (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6933)

```diff
-       const Xk = (0, xk.c)(2e4, Ik);
+       const tS = (0, nS.d)(2e4, gS);
```

#### 345. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6951-L6952` → after: `L6951-L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6951-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6951-L6952) · [Before (L6951-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6951-L6952)

```diff
-         if (yi(kk, Ik), 429 === Ik.status) return qi.Mj(kk, Ik), "busy";
-         if (!Ik.ok) return qi.Mj(kk, Ik), null;
+         if (xX(SS, gS), 429 === gS.status) return uX.tK(SS, gS), "busy";
+         if (!gS.ok) return uX.tK(SS, gS), null;
```

#### 346. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6954` → after: `L6954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6954) · [Before (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6954)

```diff
-           qk = String(null !== (Tk = null === (ik = ak.choices) || void 0 === ik || null === (yk = ik[0]) || void 0 === yk || null === (lk = yk.message) || void 0 === lk ? void 0 : lk.content) && void 0 !== Tk ? Tk : "");
+           uS = String(null !== (bS = null === (XS = qS.choices) || void 0 === XS || null === (xS = XS[0]) || void 0 === xS || null === (NS = xS.message) || void 0 === NS ? void 0 : NS.content) && void 0 !== bS ? bS : "");
```

#### 347. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6958` → after: `L6958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6958) · [Before (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6958)

```diff
-           }(qk) ? qk : null
+           }(uS) ? uS : null
```

#### 348. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6961` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6961) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6961)

```diff
-         return qi.Mj(kk, Xk.signal.aborted ? "timeout" : "network"), null
+         return uX.tK(SS, tS.signal.aborted ? "timeout" : "network"), null
```

#### 349. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6966` → after: `L6966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6966) · [Before (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6966)

```diff
-     var ri = Ik(41);
+     var oX = gS(45);
```

#### 350. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6970-L6971` → after: `L6970-L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6970-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6970-L6971) · [Before (L6970-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6970-L6971)

```diff
-       const kk = ri.j.getItem(Di);
-       return null !== kk && "object" === typeof kk ? kk : {}
+       const SS = oX.g.getItem(lX);
+       return null !== SS && "object" === typeof SS ? SS : {}
```

#### 351. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6981` → after: `L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6981) · [Before (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6981)

```diff
-         return null === this.player ? null : null !== (kk = null !== (Fk = this.unsaved.get(this.player)) && void 0 !== Fk ? Fk : Mi()[this.player]) && void 0 !== kk ? kk : null
+         return null === this.player ? null : null !== (SS = null !== (HS = this.unsaved.get(this.player)) && void 0 !== HS ? HS : mX()[this.player]) && void 0 !== SS ? SS : null
```

#### 352. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6992-L6993` → after: `L6992-L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6992-L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6992-L6993) · [Before (L6992-L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6992-L6993)

```diff
-           } = await Promise.resolve().then((() => Ik(1120)));
-           return null !== (kk = null === (Fk = Xk.peekCurrentUserContext()) || void 0 === Fk ? void 0 : Fk.whamm) && void 0 !== kk ? kk : null
+           } = await Promise.resolve().then((() => gS(1216)));
+           return null !== (SS = null === (HS = tS.peekCurrentUserContext()) || void 0 === HS ? void 0 : HS.whamm) && void 0 !== SS ? SS : null
```

#### 353. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6998` → after: `L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L6998) · [Before (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L6998)

```diff
-         null !== this.player && (ri.j.setItem(Di, {
+         null !== this.player && (oX.g.setItem(lX, {
```

#### 354. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7021` → after: `L7021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7021) · [Before (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7021)

```diff
-       const Ik = `\n[... ${kk.length-Fk} more characters cut]`;
+       const gS = `\n[... ${SS.length-HS} more characters cut]`;
```

#### 355. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7026-L7027` → after: `L7026-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7026-L7027) · [Before (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7026-L7027)

```diff
-     var ay = Ik(633),
-       qy = Ik(4360);
+     var xx = gS(687),
+       Nx = gS(4508);
```

#### 356. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7064` → after: `L7064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7064) · [Before (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7064)

```diff
-         this.Mj = kk, this.chatId = (0, qy.c)(12), this.open = new Map
+         this.tK = SS, this.chatId = (0, Nx.e)(12), this.open = new Map
```

#### 357. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7068` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7068) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7068)

```diff
-         Ik && (clearTimeout(Ik.timer), Fk || (this.open.delete(kk), this.send(Ik.Mj)))
+         gS && (clearTimeout(gS.timer), HS || (this.open.delete(SS), this.send(gS.tK)))
```

#### 358. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7073` → after: `L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7073) · [Before (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7073)

```diff
-         if (Xk) return void(Xk.Mj.responses.length < iy && Xk.Mj.responses.push(Zy(Ik)));
+         if (tS) return void(tS.tK.responses.length < tx && tS.tK.responses.push(Ix(gS)));
```

#### 359. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7076` → after: `L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7076) · [Before (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7076)

```diff
-           Mj: Tk
+           tK: bS
```

#### 360. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7086` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7086) · [Before (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7086)

```diff
-           this.open.delete(kk), this.send(Fk.Mj)
+           this.open.delete(SS), this.send(HS.tK)
```

#### 361. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7092` → after: `L7092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7092) · [Before (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7092)

```diff
-         })(kk) && this.Mj(kk)
+         })(SS) && this.tK(SS)
```

#### 362. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7107` → after: `L7107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7107) · [Before (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7107)

```diff
-             Mj: Fk
+             tK: HS
```

#### 363. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7118)

```diff
-       "yes" === kk && Ik.length > 0 && Py(Ik.map((kk => kk.Mj)))
+       "yes" === SS && gS.length > 0 && Cx(gS.map((SS => SS.tK)))
```

#### 364. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7121` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7121) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7121)

```diff
-       const Fk = Promise.resolve().then((() => Ik(41480)));
+       const HS = Promise.resolve().then((() => gS(41487)));
```

#### 365. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7131-L7132` → after: `L7131-L7132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7131-L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7131-L7132) · [Before (L7131-L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7131-L7132)

```diff
-     var Ky = Ik(337),
-       Qy = Ik(149);
+     var nx = gS(387),
+       Px = gS(160);
```

#### 366. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7189` → after: `L7189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7189) · [Before (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7189)

```diff
-       return "https:" !== Fk.protocol && ("http:" !== Fk.protocol || !Ik) || Fk.username || Fk.password || Fk.search ? null : `${Fk.origin}${Fk.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== HS.protocol && ("http:" !== HS.protocol || !gS) || HS.username || HS.password || HS.search ? null : `${HS.origin}${HS.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 367. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7198` → after: `L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7198) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7198)

```diff
-         super(`AI key request: ${kk}`), this.problem = kk, this.retryAfterMs = Fk, this.status = Ik, this.detail = Xk
+         super(`AI key request: ${SS}`), this.problem = SS, this.retryAfterMs = HS, this.status = gS, this.detail = tS
```

#### 368. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7203` → after: `L7203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7203) · [Before (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7203)

```diff
-       return ("" === Fk ? kk : kk.split(Fk).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === HS ? SS : SS.split(HS).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 369. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7210` → after: `L7210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7210) · [Before (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7210)

```diff
-           return `${Ik} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${gS} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 370. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7214` → after: `L7214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7214) · [Before (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7214)

```diff
-           return `${Ik} can't find that model. Check its name.`;
+           return `${gS} can't find that model. Check its name.`;
```

#### 371. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7216` → after: `L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7216) · [Before (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7216)

```diff
-           return "anthropic" === Fk ? "Claude didn't accept your key: check it, or make a new one." : "custom" === Fk ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === HS ? "Claude didn't accept your key: check it, or make a new one." : "custom" === HS ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 372. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7218` → after: `L7218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7218) · [Before (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7218)

```diff
-           return "custom" === Fk ? "That server stopped your key for now: it has used all it can." : `${Ik} stopped your key for now: it has used all it can. Check it on ${Ik}'s website.`;
+           return "custom" === HS ? "That server stopped your key for now: it has used all it can." : `${gS} stopped your key for now: it has used all it can. Check it on ${gS}'s website.`;
```

#### 373. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7220` → after: `L7220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7220) · [Before (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7220)

```diff
-           return `${Ik} doesn't work from where you are.`;
+           return `${gS} doesn't work from where you are.`;
```

#### 374. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7224` → after: `L7224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7224) · [Before (L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7224)

```diff
-           return `${Ik} had a problem with that. Try again in a minute.`
+           return `${gS} had a problem with that. Try again in a minute.`
```

#### 375. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7250` → after: `L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7250) · [Before (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7250)

```diff
-         }(Fk)) throw new Error(`AI key request to an unknown host for ${kk}`);
+         }(HS)) throw new Error(`AI key request to an unknown host for ${SS}`);
```

#### 376. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7259` → after: `L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7259) · [Before (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7259)

```diff
-         throw console.warn(`AI key request: ${kk} answered ${Tk.status}`), new Oy(function(kk, Fk, Ik) {
+         throw console.warn(`AI key request: ${SS} answered ${bS.status}`), new dx(function(SS, HS, gS) {
```

#### 377. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7266` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7266) · [Before (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7266)

```diff
-           return Number.isFinite(Ik) ? 1e3 * Ik : Math.max(0, Date.parse(Fk) - Date.now()) || void 0
+           return Number.isFinite(gS) ? 1e3 * gS : Math.max(0, Date.parse(HS) - Date.now()) || void 0
```

#### 378. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7273` → after: `L7273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7273) · [Before (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7273)

```diff
-             Ik = "string" === typeof Tk ? Tk : kk
+             gS = "string" === typeof bS ? bS : SS
```

#### 379. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7287)

```diff
-       const Xk = (0, xk.c)(kk, Fk);
+       const tS = (0, nS.d)(SS, HS);
```

#### 380. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7322` → after: `L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7322) · [Before (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7322)

```diff
-         LXk: yk,
+         gtS: xS,
```

#### 381. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7330` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7330) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7330)

```diff
-         const yk = null !== (Ik = null === (Xk = kk.match(/```/g)) || void 0 === Xk ? void 0 : Xk.length) && void 0 !== Ik ? Ik : 0,
+         const xS = null !== (gS = null === (tS = SS.match(/```/g)) || void 0 === tS ? void 0 : tS.length) && void 0 !== gS ? gS : 0,
```

#### 382. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7343` → after: `L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7343) · [Before (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7343)

```diff
-         written: lk ? tk : void 0,
+         written: NS ? fS : void 0,
```

#### 383. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7355` → after: `L7355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7355) · [Before (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7355)

```diff
-       const Xk = null !== (Ik = Fk.tools) && void 0 !== Ik ? Ik : [];
+       const tS = null !== (gS = HS.tools) && void 0 !== gS ? gS : [];
```

#### 384. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7406` → after: `L7406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7406) · [Before (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7406)

```diff
-             models: (null !== (Fk = (await Ik.json()).data) && void 0 !== Fk ? Fk : []).map((kk => ({
+             models: (null !== (HS = (await gS.json()).data) && void 0 !== HS ? HS : []).map((SS => ({
```

#### 385. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7433` → after: `L7433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7433) · [Before (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7433)

```diff
-           return await Oi(null !== (Tk = ik.body) && void 0 !== Tk ? Tk : new ReadableStream, (Fk => {
+           return await vX(null !== (bS = XS.body) && void 0 !== bS ? bS : new ReadableStream, (HS => {
```

#### 386. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7438-L7439` → after: `L7438-L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7438-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7438-L7439) · [Before (L7438-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7438-L7439)

```diff
-             lk += null !== (Tk = null !== (ik = null === Jk || void 0 === Jk || null === (tk = Jk.delta) || void 0 === tk ? void 0 : tk.reasoning) && void 0 !== ik ? ik : null === Jk || void 0 === Jk || null === (Zk = Jk.delta) || void 0 === Zk ? void 0 : Zk.reasoning_content) && … [truncated]
-             for (const kk of null !== (xk = null === Jk || void 0 === Jk || null === (Pk = Jk.delta) || void 0 === Pk ? void 0 : Pk.tool_calls) && void 0 !== xk ? xk : []) {
+             NS += null !== (bS = null !== (XS = null === CS || void 0 === CS || null === (fS = CS.delta) || void 0 === fS ? void 0 : fS.reasoning) && void 0 !== XS ? XS : null === CS || void 0 === CS || null === (kS = CS.delta) || void 0 === kS ? void 0 : kS.reasoning_content) && … [truncated]
+             for (const SS of null !== (nS = null === CS || void 0 === CS || null === (PS = CS.delta) || void 0 === PS ? void 0 : PS.tool_calls) && void 0 !== nS ? nS : []) {
```

#### 387. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7452` → after: `L7452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7452) · [Before (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7452)

```diff
-             LXk: ak,
+             gtS: qS,
```

#### 388. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7472` → after: `L7472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7472) · [Before (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7472)

```diff
-         return await Cy(uy, kk, (async kk => Uy("openrouter", `${sy.openrouter.baseUrl}/key`, {
+         return await Vx(Lx, SS, (async SS => yx("openrouter", `${Qx.openrouter.baseUrl}/key`, {
```

#### 389. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7493` → after: `L7493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7493) · [Before (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7493)

```diff
-             models: (null !== (Fk = (await Ik.json()).data) && void 0 !== Fk ? Fk : []).map((kk => ({
+             models: (null !== (HS = (await gS.json()).data) && void 0 !== HS ? HS : []).map((SS => ({
```

#### 390. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7526` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7526) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7526)

```diff
-           await Oi(null !== (ik = yk.body) && void 0 !== ik ? ik : new ReadableStream, (Fk => {
+           await vX(null !== (XS = xS.body) && void 0 !== XS ? XS : new ReadableStream, (HS => {
```

#### 391. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7531-L7532` → after: `L7531-L7532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7531-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7531-L7532) · [Before (L7531-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7531-L7532)

```diff
-             if ("content_block_start" === ik.type && "tool_use" === (null === (Xk = ik.content_block) || void 0 === Xk ? void 0 : Xk.type)) tk.set(null !== (jk = ik.index) && void 0 !== jk ? jk : tk.size, {
-               name: null !== (ek = ik.content_block.name) && void 0 !== ek ? ek : "",
+             if ("content_block_start" === XS.type && "tool_use" === (null === (tS = XS.content_block) || void 0 === tS ? void 0 : tS.type)) fS.set(null !== (aS = XS.index) && void 0 !== aS ? aS : fS.size, {
+               name: null !== (KS = XS.content_block.name) && void 0 !== KS ? KS : "",
```

#### 392. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7537-L7538` → after: `L7537-L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7537-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7537-L7538) · [Before (L7537-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7537-L7538)

```diff
-               lk += null !== (wk = null === (Hk = ik.delta) || void 0 === Hk ? void 0 : Hk.text) && void 0 !== wk ? wk : "", ak += null !== (Jk = null === (xk = ik.delta) || void 0 === xk ? void 0 : xk.thinking) && void 0 !== Jk ? Jk : "";
-               const kk = tk.get(null !== (Pk = ik.index) && void 0 !== Pk ? Pk : -1);
+               NS += null !== (jS = null === (GS = XS.delta) || void 0 === GS ? void 0 : GS.text) && void 0 !== jS ? jS : "", qS += null !== (CS = null === (nS = XS.delta) || void 0 === nS ? void 0 : nS.thinking) && void 0 !== CS ? CS : "";
+               const SS = fS.get(null !== (PS = XS.index) && void 0 !== PS ? PS : -1);
```

#### 393. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7540` → after: `L7540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7540) · [Before (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7540)

```diff
-               if (kk && "input_json_delta" === (null === (Kk = ik.delta) || void 0 === Kk ? void 0 : Kk.type)) kk.args += null !== (Qk = ik.delta.partial_json) && void 0 !== Qk ? Qk : ""
+               if (SS && "input_json_delta" === (null === (QS = XS.delta) || void 0 === QS ? void 0 : QS.type)) SS.args += null !== (DS = XS.delta.partial_json) && void 0 !== DS ? DS : ""
```

#### 394. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7556` → after: `L7556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7556) · [Before (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7556)

```diff
-             LXk: qk,
+             gtS: uS,
```

#### 395. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7582` → after: `L7582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7582) · [Before (L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7582)

```diff
-             models: (null !== (Fk = (await Ik.json()).models) && void 0 !== Fk ? Fk : []).filter((kk => {
+             models: (null !== (HS = (await gS.json()).models) && void 0 !== HS ? HS : []).filter((SS => {
```

#### 396. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7605` → after: `L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7605) · [Before (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7605)

```diff
-           const yk = await Uy("gemini", `${this.baseUrl}/models/${encodeURIComponent(kk)}:streamGenerateContent?alt=sse`, {
+           const xS = await yx("gemini", `${this.baseUrl}/models/${encodeURIComponent(SS)}:streamGenerateContent?alt=sse`, {
```

#### 397. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7624` → after: `L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7624) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7624)

```diff
-           return await Oi(null !== (ik = yk.body) && void 0 !== ik ? ik : new ReadableStream, (Fk => {
+           return await vX(null !== (XS = xS.body) && void 0 !== XS ? XS : new ReadableStream, (HS => {
```

#### 398. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7628` → after: `L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7628) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7628)

```diff
-             for (const kk of null !== (jk = null === Zk || void 0 === Zk || null === (ek = Zk.content) || void 0 === ek ? void 0 : ek.parts) && void 0 !== jk ? jk : []) {
+             for (const SS of null !== (aS = null === kS || void 0 === kS || null === (KS = kS.content) || void 0 === KS ? void 0 : KS.parts) && void 0 !== aS ? aS : []) {
```

#### 399. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7631-L7632` → after: `L7631-L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7631-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7631-L7632) · [Before (L7631-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7631-L7632)

```diff
-                 name: null !== (wk = kk.functionCall.name) && void 0 !== wk ? wk : "",
-                 args: JSON.stringify(null !== (Hk = kk.functionCall.args) && void 0 !== Hk ? Hk : {})
+                 name: null !== (jS = SS.functionCall.name) && void 0 !== jS ? jS : "",
+                 args: JSON.stringify(null !== (GS = SS.functionCall.args) && void 0 !== GS ? GS : {})
```

#### 400. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7636` → after: `L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7636) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7636)

```diff
-                 ak += null !== (Jk = kk.text) && void 0 !== Jk ? Jk : ""
+                 qS += null !== (CS = SS.text) && void 0 !== CS ? CS : ""
```

#### 401. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7639)

```diff
-                 lk += null !== (xk = kk.text) && void 0 !== xk ? xk : ""
+                 NS += null !== (nS = SS.text) && void 0 !== nS ? nS : ""
```

#### 402. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7651` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7651) · [Before (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7651)

```diff
-             LXk: qk,
+             gtS: uS,
```

#### 403. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7676` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7676) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7676)

```diff
-           return new By("custom", null !== Ik && void 0 !== Ik ? Ik : "", Fk)
+           return new px("custom", null !== gS && void 0 !== gS ? gS : "", HS)
```

#### 404. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7804` → after: `L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7804) · [Before (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7804)

```diff
-         name: null !== (Xk = null === Tk || void 0 === Tk ? void 0 : Tk.name) && void 0 !== Xk ? Xk : Fk,
+         name: null !== (tS = null === bS || void 0 === bS ? void 0 : bS.name) && void 0 !== tS ? tS : HS,
```

#### 405. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7828` → after: `L7828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7828) · [Before (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7828)

```diff
-       return null !== (Fk = kk.find((kk => "smart" === kk.tier))) && void 0 !== Fk ? Fk : kk[0]
+       return null !== (HS = SS.find((SS => "smart" === SS.tier))) && void 0 !== HS ? HS : SS[0]
```

#### 406. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7834` → after: `L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7834) · [Before (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7834)

```diff
-       return null !== (Fk = kk.name) && void 0 !== Fk ? Fk : Ey(kk.provider, kk.baseUrl, Ik)
+       return null !== (HS = SS.name) && void 0 !== HS ? HS : Ox(SS.provider, SS.baseUrl, gS)
```

#### 407. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7851` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7851) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7851)

```diff
-         return new URL(null !== (Fk = kk.baseUrl) && void 0 !== Fk ? Fk : "").protocol.startsWith("http")
+         return new URL(null !== (HS = SS.baseUrl) && void 0 !== HS ? HS : "").protocol.startsWith("http")
```

#### 408. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7861` → after: `L7861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7861) · [Before (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7861)

```diff
-         return console.warn(`AI Helper: no ${kk}`, Fk), null
+         return console.warn(`AI Helper: no ${SS}`, HS), null
```

#### 409. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7873)

```diff
-         this.state = null !== Xk && void 0 !== Xk && Xk.remember ? null !== Tk && void 0 !== Tk && Tk.remember ? Tk : {
+         this.state = null !== tS && void 0 !== tS && tS.remember ? null !== bS && void 0 !== bS && bS.remember ? bS : {
```

#### 410. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7876` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7876) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7876)

```diff
-         } : null !== (Ik = null !== Xk && void 0 !== Xk ? Xk : Tk) && void 0 !== Ik ? Ik : Tl, this.ownsRemembered = this.state.remember && null !== Tk
+         } : null !== (gS = null !== tS && void 0 !== tS ? tS : bS) && void 0 !== gS ? gS : gN, this.ownsRemembered = this.state.remember && null !== bS
```

#### 411. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7893-L7894` → after: `L7893-L7894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7893-L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7893-L7894) · [Before (L7893-L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7893-L7894)

```diff
-           lk = "custom" !== kk.provider ? kk.provider : null !== (Xk = null === yk || void 0 === yk ? void 0 : yk.id) && void 0 !== Xk ? Xk : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           ak = void 0 === Fk ? Fl(kk.models) : null !== (Tk = kk.models.find((kk => kk.id === Fk))) && void 0 !== Tk ? Tk : kk.models[0],
+           NS = "custom" !== SS.provider ? SS.provider : null !== (tS = null === xS || void 0 === xS ? void 0 : xS.id) && void 0 !== tS ? tS : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           qS = void 0 === HS ? rx(SS.models) : null !== (bS = SS.models.find((SS => SS.id === HS))) && void 0 !== bS ? bS : SS.models[0],
```

#### 412. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7909` → after: `L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7909) · [Before (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7909)

```diff
-           jk = Zk ? this.state.keys.filter((kk => kk.id !== lk)).map((kk => kk.id === Ik ? Lk : kk)) : tk ? [...this.state.keys, Lk] : this.state.keys.map((kk => kk.id === lk ? Lk : kk)),
+           aS = kS ? this.state.keys.filter((SS => SS.id !== NS)).map((SS => SS.id === gS ? IS : SS)) : fS ? [...this.state.keys, IS] : this.state.keys.map((SS => SS.id === NS ? IS : SS)),
```

#### 413. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7928` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L7928) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L7928)

```diff
-             return "" === Ik ? Tk : {
+             return "" === gS ? bS : {
```

#### 414. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8023` → after: `L8023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8023) · [Before (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8023)

```diff
-           Xk = (null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.keys) && void 0 !== Fk ? Fk : []).filter((kk => this.state.keys.every((Fk => !il(Fk, kk)))));
+           tS = (null !== (HS = null === gS || void 0 === gS ? void 0 : gS.keys) && void 0 !== HS ? HS : []).filter((SS => this.state.keys.every((HS => !tN(HS, SS)))));
```

#### 415. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8067` → after: `L8067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8067) · [Before (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8067)

```diff
-           return Array.isArray(Fk.keys) && Fk.keys.every(yl) ? Fk : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(HS.keys) && HS.keys.every(bN) ? HS : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 416. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8109` → after: `L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8109) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8109)

```diff
-       const lk = null !== (Ik = null === yk || void 0 === yk ? void 0 : yk.trim()) && void 0 !== Ik ? Ik : "";
+       const NS = null !== (gS = null === xS || void 0 === xS ? void 0 : xS.trim()) && void 0 !== gS ? gS : "";
```

#### 417. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8139` → after: `L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8139) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8139)

```diff
-               return 0 !== (null !== (Ik = null === (Xk = Fk.tools) || void 0 === Xk ? void 0 : Xk.length) && void 0 !== Ik ? Ik : 0) && kk instanceof Oy && "failed" === kk.problem && (400 === kk.status || 404 === kk.status && /\btool/i.test(null !== (Tk = kk.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (gS = null === (tS = HS.tools) || void 0 === tS ? void 0 : tS.length) && void 0 !== gS ? gS : 0) && SS instanceof dx && "failed" === SS.problem && (400 === SS.status || 404 === SS.status && /\btool/i.test(null !== (bS = SS.detail) && void 0 != … [truncated]
```

#### 418. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8154` → after: `L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8154) · [Before (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8154)

```diff
-         return await (ak = Math.min(null !== (yk = null !== (lk = tk.retryAfterMs) && void 0 !== lk ? lk : Ik.retryWaitMs) && void 0 !== yk ? yk : 3e3, 2e4), qk = Ik.signal, new Promise(((kk, Fk) => {
+         return await (qS = Math.min(null !== (xS = null !== (NS = fS.retryAfterMs) && void 0 !== NS ? NS : gS.retryWaitMs) && void 0 !== xS ? xS : 3e3, 2e4), uS = gS.signal, new Promise(((SS, HS) => {
```

#### 419. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8166` → after: `L8166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8166) · [Before (L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8166)

```diff
-     var Zl = Ik(3588);
+     var IN = gS(3768);
```

#### 420. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8283` → after: `L8283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8283) · [Before (L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8283)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${Ol((null!==(Fk=kk.availableFrom)&&void 0!==Fk?Fk:Ik)-Ik)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${dN((null!==(HS=SS.availableFrom)&&void 0!==HS?HS:gS)-gS)} to go.`;
```

#### 421. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8285` → after: `L8285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8285) · [Before (L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8285)

```diff
-           return kk.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(kk,Fk){const Ik=Math.ceil((kk-Fk)/36e5);if(Ik<=24)return Ik<=1?"within the hour":`in ${Ik} hours`;return`in ${Ol(kk-Fk)}`}(kk.resetsAt,Ik)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return SS.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(SS,HS){const gS=Math.ceil((SS-HS)/36e5);if(gS<=24)return gS<=1?"within the hour":`in ${gS} hours`;return`in ${dN(SS-HS)}`}(SS.resetsAt,gS)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 422. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8316` → after: `L8316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8316) · [Before (L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8316)

```diff
-       return `Usage left: ${kk.left}`
+       return `Usage left: ${SS.left}`
```

#### 423. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8320-L8321` → after: `L8320-L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8320-L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8320-L8321) · [Before (L8320-L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8320-L8321)

```diff
-       const Fk = Math.max(1, Math.ceil(kk / Ky.i));
-       return 1 === Fk ? "1 day" : `${Fk} days`
+       const HS = Math.max(1, Math.ceil(SS / nx.h));
+       return 1 === HS ? "1 day" : `${HS} days`
```

#### 424. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8326` → after: `L8326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8326) · [Before (L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8326)

```diff
-       if (Ik) return `${Ik} Bot.xd is answering instead.`;
+       if (gS) return `${gS} Bot.xd is answering instead.`;
```

#### 425. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8345` → after: `L8345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8345) · [Before (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8345)

```diff
-           return kk.messages.length > 12 || kk.messages.some((kk => kk.content.length > YT)) || (null !== (Fk = null === (Ik = kk.toolsJson) || void 0 === Ik ? void 0 : Ik.length) && void 0 !== Fk ? Fk : 0) > 1e5 || (null !== (Xk = null === (Tk = kk.request) || void 0 === Tk ? vo … [truncated]
+           return SS.messages.length > 12 || SS.messages.some((SS => SS.content.length > Fb)) || (null !== (HS = null === (gS = SS.toolsJson) || void 0 === gS ? void 0 : gS.length) && void 0 !== HS ? HS : 0) > 1e5 || (null !== (tS = null === (bS = SS.request) || void 0 === bS ? vo … [truncated]
```

#### 426. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8370-L8372` → after: `L8370-L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8370-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8370-L8372) · [Before (L8370-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8370-L8372)

```diff
-     var ul = Ik(34),
-       bl = Ik(25),
-       Rl = Ik(2190);
+     var LN = gS(31),
+       YN = gS(24),
+       AN = gS(2387);
```

#### 427. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8376` → after: `L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8376) · [Before (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8376)

```diff
-       Ul ??= Promise.resolve().then((() => Ik(2207))), Ul.then((kk => {
+       yN ??= Promise.resolve().then((() => gS(2398))), yN.then((SS => {
```

#### 428. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8398` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8398) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8398)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => Ik(1324))), Ik.e(354).then((() => Ik(61295)))]);
+         }] = await Promise.all([Promise.resolve().then((() => gS(1435))), gS.e(354).then((() => gS(61347)))]);
```

#### 429. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8405` → after: `L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8405) · [Before (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8405)

```diff
-                   ul.g.GL("OpenStoreFromCodeEditor"), (0, Rl.m)({
+                   LN.k.cj("OpenStoreFromCodeEditor"), (0, AN.r)({
```

#### 430. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8410-L8411` → after: `L8410-L8411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8410-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8410-L8411) · [Before (L8410-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8410-L8411)

```diff
-                   const kk = ul.g.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === bl.d.get("openEverythingMenuName") && (ul.g.unsubscribe(kk), Pl.refresh())
+                   const SS = LN.k.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === YN.b.get("openEverythingMenuName") && (LN.k.unsubscribe(SS), CN.refresh())
```

#### 431. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8594` → after: `L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8594) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8594)

```diff
-       return kk.length > 4 && kk.endsWith("ies") ? `${kk.slice(0,-3)}y` : kk.length > 3 && kk.endsWith("s") && !kk.endsWith("ss") ? kk.slice(0, -1) : kk
+       return SS.length > 4 && SS.endsWith("ies") ? `${SS.slice(0,-3)}y` : SS.length > 3 && SS.endsWith("s") && !SS.endsWith("ss") ? SS.slice(0, -1) : SS
```

#### 432. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8610` → after: `L8610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8610) · [Before (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8610)

```diff
-         Tk = Dl(Fk ? kk : (0, eF.s)(kk, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, eF.l, (() => "projectRequire"))),
+         bS = lN(HS ? SS : (0, aH.v)(SS, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, aH.m, (() => "projectRequire"))),
```

#### 433. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8613` → after: `L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8613) · [Before (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8613)

```diff
-         for (const Tk of (0, eF.e)(kk, /(global|window|document|process|require)\b\s*[.([]/g, eF.l)) Xk.has(Tk[1]) || ik.has(Tk[1]) || (Xk.add(Tk[1]), Ik.push(`Line ${Fk+1} uses "${Tk[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const bS of (0, aH.f)(SS, /(global|window|document|process|require)\b\s*[.([]/g, aH.m)) tS.has(bS[1]) || XS.has(bS[1]) || (tS.add(bS[1]), gS.push(`Line ${HS+1} uses "${bS[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 434. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8628` → after: `L8628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8628) · [Before (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8628)

```diff
-         const jk = [null !== (ik = Fk[Xk - 2]) && void 0 !== ik ? ik : "", null !== (yk = Fk[Xk - 1]) && void 0 !== yk ? yk : "", kk.slice(0, qk)].join(" ");
+         const aS = [null !== (XS = HS[tS - 2]) && void 0 !== XS ? XS : "", null !== (xS = HS[tS - 1]) && void 0 !== xS ? xS : "", SS.slice(0, uS)].join(" ");
```

#### 435. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8630-L8631` → after: `L8630-L8631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8630-L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8630-L8631) · [Before (L8630-L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8630-L8631)

```diff
-         const ek = null !== (lk = null === (ak = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(tk)) || void 0 === ak ? void 0 : ak[1]) && void 0 !== lk ? lk : "coins";
-         Ik.push(`Line ${Xk+1} sets the saved "${ek}" back to ${Zk} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${ek}") is null.`)
+         const KS = null !== (NS = null === (qS = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(fS)) || void 0 === qS ? void 0 : qS[1]) && void 0 !== NS ? NS : "coins";
+         gS.push(`Line ${tS+1} sets the saved "${KS}" back to ${kS} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${KS}") is null.`)
```

#### 436. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8637` → after: `L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8637) · [Before (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8637)

```diff
-       const Xk = null !== (Fk = null === (Ik = kk.split("### Parameters:")[1]) || void 0 === Ik ? void 0 : Ik.split("###")[0]) && void 0 !== Fk ? Fk : "",
+       const tS = null !== (HS = null === (gS = SS.split("### Parameters:")[1]) || void 0 === gS ? void 0 : gS.split("###")[0]) && void 0 !== HS ? HS : "",
```

#### 437. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8685-L8687` → after: `L8685-L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8685-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8685-L8687) · [Before (L8685-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8685-L8687)

```diff
-         Tk = `\\((?:[^()]*[\\s,])?${Xk}(?![\\w$])[^()]*\\)`,
-         ik = new RegExp(`(?:const|let|var)\\s+${Xk}(?![\\w$])|${Xk}\\s*(?:\\+?=(?![=>])|=>)|${Tk}\\s*=>|function\\s*[\\w$]*\\s*${Tk}`, "g");
-       return 1 === (0, eF.e)(kk, ik, eF.l).length ? null === (Ik = new RegExp(`\\b(?:const|let|var)\\s+${Xk}\\s*=\\s*${Xa}\\s*(?:;|//|$)`, "m").exec(kk)) || void 0 === Ik ? void 0 : Ik[1] : void 0
+         bS = `\\((?:[^()]*[\\s,])?${tS}(?![\\w$])[^()]*\\)`,
+         XS = new RegExp(`(?:const|let|var)\\s+${tS}(?![\\w$])|${tS}\\s*(?:\\+?=(?![=>])|=>)|${bS}\\s*=>|function\\s*[\\w$]*\\s*${bS}`, "g");
+       return 1 === (0, aH.f)(SS, XS, aH.m).length ? null === (gS = new RegExp(`\\b(?:const|let|var)\\s+${tS}\\s*=\\s*${Hq}\\s*(?:;|//|$)`, "m").exec(SS)) || void 0 === gS ? void 0 : gS[1] : void 0
```

#### 438. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8696-L8697` → after: `L8696-L8697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8696-L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8696-L8697) · [Before (L8696-L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8696-L8697)

```diff
-           Xk = -1 === Ik ? Fk : Fk.slice(0, Ik + 1);
-         return Xk.length > 110 ? `${Xk.slice(0,107)}...` : Xk
+           tS = -1 === gS ? HS : HS.slice(0, gS + 1);
+         return tS.length > 110 ? `${tS.slice(0,107)}...` : tS
```

#### 439. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8699` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8699) · [Before (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8699)

```diff
-       return Xk = "api" === kk ? `api.${Fk}(${Ia(Ik).join(", ")})${Tk?` \u2014 ${Tk}`:""}` : "callback" === kk ? `${Fk}(${Ia(Ik).join(", ")})${Tk?` \u2014 ${Tk}`:""}` : "clientOption" === kk ? `${Fk}: ${function(kk){var Fk,Ik;return null!==(Fk=null===(Ik=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return tS = "api" === SS ? `api.${HS}(${Sq(gS).join(", ")})${bS?` \u2014 ${bS}`:""}` : "callback" === SS ? `${HS}(${Sq(gS).join(", ")})${bS?` \u2014 ${bS}`:""}` : "clientOption" === SS ? `${HS}: ${function(SS){var HS,gS;return null!==(HS=null===(gS=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 440. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8701` → after: `L8701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8701) · [Before (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8701)

```diff
-         Fk.map((kk => `"${kk}"`)).join(" or ")
+         HS.map((SS => `"${SS}"`)).join(" or ")
```

#### 441. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8703` → after: `L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8703) · [Before (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8703)

```diff
-       The closest name is "${Fk[0]}", which may be something
+       The closest name is "${HS[0]}", which may be something
```

#### 442. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8705)

```diff
-       `}function La(kk){return kk.split("\n").slice(1).map((kk=>kk.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((kk=>""!==kk&&!kk.startsWith("#")))}class ta{constructor(kk){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function qq(SS){return SS.split("\n").slice(1).map((SS=>SS.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((SS=>""!==SS&&!SS.startsWith("#")))}class uq{constructor(SS){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 443. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8709` → after: `L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8709) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8709)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();Fk.push({name:Ik,text:Tk})}return Fk}(Ik))Fk.push(ya(kk,Xk,Tk))};Ik("api",kk.apiReference),Ik("callback",kk.callbacks),Ik("clientOption",kk.clientOptions),Ik("snippet",kk.snippets),Ik("howTo",kk.howTo);const Xk=function(){const kk … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();HS.push({name:gS,text:bS})}return HS}(gS))HS.push(bq(SS,tS,bS))};gS("api",SS.apiReference),gS("callback",SS.callbacks),gS("clientOption",SS.clientOptions),gS("snippet",SS.snippets),gS("howTo",SS.howTo);const tS=function(){const SS … [truncated]
```

#### 444. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8720-L8721` → after: `L8720-L8721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8720-L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8720-L8721) · [Before (L8720-L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8720-L8721)

```diff
-       n\ nUsage: \`${kk.signature}\`\n\n\`\`\`js\n${kk.example}\n\`\`\``)),
-   Fk = jX.map((kk => `## ${kk.name}\nPrefab (${kk.kind}, ${kk.category}): put in with use_prefab. ${EX(kk,!1)}`));
+       n\ nUsage: \`${SS.signature}\`\n\n\`\`\`js\n${SS.example}\n\`\`\``)),
+   HS = kt.map((SS => `## ${SS.name}\nPrefab (${SS.kind}, ${SS.category}): put in with use_prefab. ${ct(SS,!1)}`));
```

#### 445. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8723-L8724` → after: `L8723-L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8723-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8723-L8724) · [Before (L8723-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8723-L8724)

```diff
-     helpers: `# Ready-made functions\n\n${kk.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${Fk.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${SS.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${HS.join("\n\n")}\n`
```

#### 446. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8732)

```diff
-     this.wordCounts.set(kk, (null !== (Tk = this.wordCounts.get(kk)) && void 0 !== Tk ? Tk : 0) + 1)
+     this.wordCounts.set(SS, (null !== (bS = this.wordCounts.get(SS)) && void 0 !== bS ? bS : 0) + 1)
```

#### 447. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8737` → after: `L8737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8737) · [Before (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8737)

```diff
-   const Xk = null !== (Fk = null === (Ik = kk.split("## Mob Variations")[1]) || void 0 === Ik ? void 0 : Ik.split("```")[1]) && void 0 !== Fk ? Fk : "",
+   const tS = null !== (HS = null === (gS = SS.split("## Mob Variations")[1]) || void 0 === gS ? void 0 : gS.split("```")[1]) && void 0 !== HS ? HS : "",
```

#### 448. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8760` → after: `L8760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8760) · [Before (L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8760)

```diff
-       return null !== (Fk = kk[1]) && void 0 !== Fk ? Fk : kk[2]
+       return null !== (HS = SS[1]) && void 0 !== HS ? HS : SS[2]
```

#### 449. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8767` → after: `L8767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8767) · [Before (L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8767)

```diff
-     for (const Tk of (0, eF.e)(kk, /([\w$]+)\s*\(/g, eF.l)) {
+     for (const bS of (0, aH.f)(SS, /([\w$]+)\s*\(/g, aH.m)) {
```

#### 450. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8771` → after: `L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8771) · [Before (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8771)

```diff
-       ik.has(yk) || Xk.has(yk) || lk || "api" !== (null === (Ik = this.byName.get(yk)) || void 0 === Ik ? void 0 : Ik.kind) || ik.set(yk, `Line ${Fk+1} calls ${yk} without "api.", so it throws there. Did you mean api.${yk}?`)
+       XS.has(xS) || tS.has(xS) || NS || "api" !== (null === (gS = this.byName.get(xS)) || void 0 === gS ? void 0 : gS.kind) || XS.set(xS, `Line ${HS+1} calls ${xS} without "api.", so it throws there. Did you mean api.${xS}?`)
```

#### 451. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8780-L8781` → after: `L8780-L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8780-L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8780-L8781) · [Before (L8780-L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8780-L8781)

```diff
-     const Fk = this.find(kk.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((kk => "api" === kk.kind)).slice(0, 2).map((kk => `api.${kk.name}`));
-     return `api.${kk} doesn't exist.${Fk.length?` Did you mean ${Fk.join(" or ")}?`:""}`
+     const HS = this.find(SS.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((SS => "api" === SS.kind)).slice(0, 2).map((SS => `api.${SS.name}`));
+     return `api.${SS} doesn't exist.${HS.length?` Did you mean ${HS.join(" or ")}?`:""}`
```

#### 452. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8801` → after: `L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8801) · [Before (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8801)

```diff
-         Zk = tk ? null === (ak = new RegExp(`(?:^|[{,])\\s*${tk.replaceAll("$","\\$")}\\s*:\\s*${Xa}`, "m").exec(kk)) || void 0 === ak ? void 0 : ak[1] : void 0,
+         kS = fS ? null === (qS = new RegExp(`(?:^|[{,])\\s*${fS.replaceAll("$","\\$")}\\s*:\\s*${Hq}`, "m").exec(SS)) || void 0 === qS ? void 0 : qS[1] : void 0,
```

#### 453. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8803-L8804` → after: `L8803-L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8803-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8803-L8804) · [Before (L8803-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8803-L8804)

```diff
-         ek = null !== (qk = null === (Lk = new RegExp(`\\?\\s*${Xa}\\s*:\\s*${Xa}$`).exec(Xk)) || void 0 === Lk ? void 0 : Lk.slice(1)) && void 0 !== qk ? qk : [];
-       for (const kk of [null !== (wk = null !== Zk && void 0 !== Zk ? Zk : jk) && void 0 !== wk ? wk : Xk, ...ek]) {
+         KS = null !== (uS = null === (IS = new RegExp(`\\?\\s*${Hq}\\s*:\\s*${Hq}$`).exec(tS)) || void 0 === IS ? void 0 : IS.slice(1)) && void 0 !== uS ? uS : [];
+       for (const SS of [null !== (jS = null !== kS && void 0 !== kS ? kS : aS) && void 0 !== jS ? jS : tS, ...KS]) {
```

#### 454. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8812` → after: `L8812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8812) · [Before (L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8812)

```diff
-   return [...Ik].map((kk => `"${kk}" isn't an item or block name.${qa(this.suggestNames(kk))}`))
+   return [...gS].map((SS => `"${SS}" isn't an item or block name.${Nq(this.suggestNames(SS))}`))
```

#### 455. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8827` → after: `L8827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8827) · [Before (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8827)

```diff
-       return `"${Fk}" isn't a block or item name, so comparing with it is never true. Did you mean "${Ik}"?`
+       return `"${HS}" isn't a block or item name, so comparing with it is never true. Did you mean "${gS}"?`
```

#### 456. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8832-L8833` → after: `L8832-L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8832-L8833) · [Before (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8832-L8833)

```diff
-       Ik = this.blockNames.has(Fk) || !this.itemAndBlockNames.includes(Fk) ? void 0 : [`Block of ${Fk}`, `${Fk} Block`].find((kk => this.blockNames.has(kk)));
-     !Ik || kk.includes(`"${Ik}"`) || kk.includes(`'${Ik}'`) || yk.set(Fk, Ik)
+       gS = this.blockNames.has(HS) || !this.itemAndBlockNames.includes(HS) ? void 0 : [`Block of ${HS}`, `${HS} Block`].find((SS => this.blockNames.has(SS)));
+     !gS || SS.includes(`"${gS}"`) || SS.includes(`'${gS}'`) || xS.set(HS, gS)
```

#### 457. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8837` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8837) · [Before (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8837)

```diff
-     return `"${Fk}" is an item, not a block, so no block is ever called that. Did you mean "${Ik}"?`
+     return `"${HS}" is an item, not a block, so no block is ever called that. Did you mean "${gS}"?`
```

#### 458. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8854-L8855` → after: `L8854-L8855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8854-L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8854-L8855) · [Before (L8854-L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8854-L8855)

```diff
-       } : Xk.names.length > 0 || Xk.isDecided ? Xk : {
-         names: Ik.length <= 2 ? Ik : [],
+       } : tS.names.length > 0 || tS.isDecided ? tS : {
+         names: gS.length <= 2 ? gS : [],
```

#### 459. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8859` → after: `L8859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8859) · [Before (L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8859)

```diff
-     return `"${kk}" isn't a block or item name, so comparing a block with it is never true.${qa(Tk)}`
+     return `"${SS}" isn't a block or item name, so comparing a block with it is never true.${Nq(bS)}`
```

#### 460. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8874-L8875` → after: `L8874-L8875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8874-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8874-L8875) · [Before (L8874-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8874-L8875)

```diff
-           name: null !== (Tk = Ik[1]) && void 0 !== Tk ? Tk : Ik[2],
-           body: kk.slice(Ik.index, null !== (ik = null === (yk = Fk[Xk + 1]) || void 0 === yk ? void 0 : yk.index) && void 0 !== ik ? ik : kk.length)
+           name: null !== (bS = gS[1]) && void 0 !== bS ? bS : gS[2],
+           body: SS.slice(gS.index, null !== (XS = null === (xS = HS[tS + 1]) || void 0 === xS ? void 0 : xS.index) && void 0 !== XS ? XS : SS.length)
```

#### 461. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8883` → after: `L8883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8883) · [Before (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8883)

```diff
-         if (kk.text.includes(`"${Xk}"`)) continue;
+         if (SS.text.includes(`"${tS}"`)) continue;
```

#### 462. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8885-L8886` → after: `L8885-L8886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8885-L8886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8885-L8886) · [Before (L8885-L8886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8885-L8886)

```diff
-           yk = ik.length > 0 ? `Did you mean ${ik.map((kk=>`"${kk}"`)).join(" or ")}?` : /Return false/i.test(kk.text) ? `To stop it, return false instead of "${Xk}".` : "Check Show Docs for what it can return.";
-         Fk.add(`${Ik} can't use "${Xk}" to stop anything. ${yk}`)
+           xS = XS.length > 0 ? `Did you mean ${XS.map((SS=>`"${SS}"`)).join(" or ")}?` : /Return false/i.test(SS.text) ? `To stop it, return false instead of "${tS}".` : "Check Show Docs for what it can return.";
+         HS.add(`${gS} can't use "${tS}" to stop anything. ${xS}`)
```

#### 463. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8908` → after: `L8908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8908) · [Before (L8908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8908)

```diff
-     ik = null !== (Fk = this.namesByLowerCase.get(Ik)) && void 0 !== Fk ? Fk : this.namesByLowerCase.get(Tk);
+     XS = null !== (HS = this.namesByLowerCase.get(gS)) && void 0 !== HS ? HS : this.namesByLowerCase.get(bS);
```

#### 464. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8940` → after: `L8940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8940) · [Before (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8940)

```diff
-       kk && Xk.set(kk, (null !== (Ik = Xk.get(kk)) && void 0 !== Ik ? Ik : 0) + Fk)
+       SS && tS.set(SS, (null !== (gS = tS.get(SS)) && void 0 !== gS ? gS : 0) + HS)
```

#### 465. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8946` → after: `L8946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8946) · [Before (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8946)

```diff
-   for (const tk of `${kk}\n${Fk}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const fS of `${SS}\n${HS}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 466. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8948` → after: `L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8948) · [Before (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8948)

```diff
-     Tk(this.byName.get(null !== (lk = null !== (ak = tk[1]) && void 0 !== ak ? ak : tk[2]) && void 0 !== lk ? lk : tk[3]), tk[1] || tk[2] ? 4 : 2)
+     bS(this.byName.get(null !== (NS = null !== (qS = fS[1]) && void 0 !== qS ? qS : fS[2]) && void 0 !== NS ? NS : fS[3]), fS[1] || fS[2] ? 4 : 2)
```

#### 467. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8950` → after: `L8950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8950) · [Before (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8950)

```diff
-   for (const tk of (0, eF.e)(Fk, /([A-Za-z_$][\w$]*)\s*\(/g, eF.l)) {
+   for (const fS of (0, aH.f)(HS, /([A-Za-z_$][\w$]*)\s*\(/g, aH.m)) {
```

#### 468. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8959-L8960` → after: `L8959-L8960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8959-L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8959-L8960) · [Before (L8959-L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8959-L8960)

```diff
-       const Ik = 1 / Math.log2(2 + (null !== (Lk = this.wordCounts.get(Fk)) && void 0 !== Lk ? Lk : 0));
-       tk.nameWords.has(Fk) ? kk += 3 * Ik : tk.textWords.has(Fk) && (kk += Ik)
+       const gS = 1 / Math.log2(2 + (null !== (IS = this.wordCounts.get(HS)) && void 0 !== IS ? IS : 0));
+       fS.nameWords.has(HS) ? SS += 3 * gS : fS.textWords.has(HS) && (SS += gS)
```

#### 469. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8976` → after: `L8976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L8976) · [Before (L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L8976)

```diff
-   return null !== (Fk = null !== (Ik = this.byName.get(Xk)) && void 0 !== Ik ? Ik : this.sections.find((kk => kk.name.toLowerCase() === Tk))) && void 0 !== Fk ? Fk : null
+   return null !== (HS = null !== (gS = this.byName.get(tS)) && void 0 !== gS ? gS : this.sections.find((SS => SS.name.toLowerCase() === bS))) && void 0 !== HS ? HS : null
```

#### 470. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9013` → after: `L9013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9013) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9013)

```diff
-         Xk = new RegExp(`(^|[^\\w$.])${Ik}\\s*\\(`),
+         tS = new RegExp(`(^|[^\\w$.])${gS}\\s*\\(`),
```

#### 471. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9039` → after: `L9039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9039) · [Before (L9039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9039)

```diff
-         when: `in ${Ik[1]}`,
+         when: `in ${gS[1]}`,
```

#### 472. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9046` → after: `L9046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9046) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9046)

```diff
-     lk = ik && Fk ? ` ${ik}` : "",
+     NS = XS && HS ? ` ${XS}` : "",
```

#### 473. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9050-L9051` → after: `L9050-L9051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9050-L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9050-L9051) · [Before (L9050-L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9050-L9051)

```diff
-     const kk = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (qk = null === (Lk = Tk[0]) || void 0 === Lk ? void 0 : Lk.trim()) && void 0 !== qk ? qk : ""),
-       Fk = null === (tk = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (Zk = null === (jk = Tk[1]) || void 0 === jk ? void 0 : jk.trim()) && void 0 !== Zk ? Zk : "")) || void 0 === tk ? void 0 : tk[1],
+     const SS = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (uS = null === (IS = bS[0]) || void 0 === IS ? void 0 : IS.trim()) && void 0 !== uS ? uS : ""),
+       HS = null === (fS = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (kS = null === (aS = bS[1]) || void 0 === aS ? void 0 : aS.trim()) && void 0 !== kS ? kS : "")) || void 0 === fS ? void 0 : fS[1],
```

#### 474. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9054` → after: `L9054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9054) · [Before (L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9054)

```diff
-         return /^(a|an|the)\s/i.test(Fk) || !/^[a-z]/i.test(Fk) ? Fk : `${/^[aeiou]/i.test(Fk)?"an":"a"} ${Fk}`
+         return /^(a|an|the)\s/i.test(HS) || !/^[a-z]/i.test(HS) ? HS : `${/^[aeiou]/i.test(HS)?"an":"a"} ${HS}`
```

#### 475. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9056` → after: `L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9056) · [Before (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9056)

```diff
-     return Ik && null !== kk && void 0 !== kk && kk[3] ? `api.${ak[1]} needs ${Ik}, but it got ${kk[3]}${lk}.` : kk ? `api.${ak[1]} couldn't use its ${ek=Number(kk[1]),1===ek?"first":2===ek?"second":3===ek?"third":4===ek?"fourth":`#${ek}`} argument${lk}.${Ik?` It needs ${Ik}.`:"" … [truncated]
+     return gS && null !== SS && void 0 !== SS && SS[3] ? `api.${qS[1]} needs ${gS}, but it got ${SS[3]}${NS}.` : SS ? `api.${qS[1]} couldn't use its ${KS=Number(SS[1]),1===KS?"first":2===KS?"second":3===KS?"third":4===KS?"fourth":`#${KS}`} argument${NS}.${gS?` It needs ${gS}.`:"" … [truncated]
```

#### 476. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9060` → after: `L9060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9060) · [Before (L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9060)

```diff
-   if (wk) return wk[1] ? `${wk[1]} isn't a function${lk}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${lk}. Check each name it calls is spelt exactly right.`;
+   if (jS) return jS[1] ? `${jS[1]} isn't a function${NS}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${NS}. Check each name it calls is spelt exactly right.`;
```

#### 477. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9062` → after: `L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9062) · [Before (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9062)

```diff
-   if (Hk) return `${Hk[1]} isn't defined${lk}. Check the spelling, or create it before using it.`;
+   if (GS) return `${GS[1]} isn't defined${NS}. Check the spelling, or create it before using it.`;
```

#### 478. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9066-L9067` → after: `L9066-L9067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9066-L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9066-L9067) · [Before (L9066-L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9066-L9067)

```diff
-     const kk = null !== (xk = Jk[1]) && void 0 !== xk ? xk : Jk[3];
-     return `Your code tried to read${kk?` .${kk}`:" something"} from ${Jk[2]}${lk}: a value it expected wasn't there.`
+     const SS = null !== (nS = CS[1]) && void 0 !== nS ? nS : CS[3];
+     return `Your code tried to read${SS?` .${SS}`:" something"} from ${CS[2]}${NS}: a value it expected wasn't there.`
```

#### 479. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9069` → after: `L9069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9069) · [Before (L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9069)

```diff
-   return `Your code hit an error${lk}: ${yk.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${NS}: ${xS.replace(/^\w*Error:\s*/,"")}`
```

#### 480. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9148` → after: `L9148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9148) · [Before (L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9148)

```diff
-   return kk.replaceAll(`"${Fk}"`, `"${Ik}"`).replaceAll(`'${Fk}'`, `'${Ik}'`)
+   return SS.replaceAll(`"${HS}"`, `"${gS}"`).replaceAll(`'${HS}'`, `'${gS}'`)
```

#### 481. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9152)

```diff
-   const Ik = kk => Sk().isIdentifier(kk) ? kk.text === Fk : kk.elements.some((kk => !Sk().isOmittedExpression(kk) && Ik(kk.name))),
+   const gS = SS => JS().isIdentifier(SS) ? SS.text === HS : SS.elements.some((SS => !JS().isOmittedExpression(SS) && gS(SS.name))),
```

#### 482. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9165` → after: `L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9165) · [Before (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9165)

```diff
-       return (null === kk || void 0 === kk || null === (Ik = kk.name) || void 0 === Ik ? void 0 : Ik.text) === Fk || void 0 !== Xk && (Sk().isNamespaceImport(Xk) ? Xk.name.text === Fk : Xk.elements.some((kk => kk.name.text === Fk)))
+       return (null === SS || void 0 === SS || null === (gS = SS.name) || void 0 === gS ? void 0 : gS.text) === HS || void 0 !== tS && (JS().isNamespaceImport(tS) ? tS.name.text === HS : tS.elements.some((SS => SS.name.text === HS)))
```

#### 483. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9179` → after: `L9179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9179) · [Before (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9179)

```diff
-             text: `${Ik}${Fk}${Ik}`
+             text: `${gS}${HS}${gS}`
```

#### 484. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9191` → after: `L9191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9191) · [Before (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9191)

```diff
-                 edit: ik(Tk, Sk().isShorthandPropertyAssignment(kk) ? `${Xk}: ${Ik}` : Xk),
+                 edit: XS(bS, JS().isShorthandPropertyAssignment(SS) ? `${tS}: ${gS}` : tS),
```

#### 485. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9193` → after: `L9193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9193) · [Before (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9193)

```diff
-                 Gj: lk
+                 ia: NS
```

#### 486. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9206` → after: `L9206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9206) · [Before (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9206)

```diff
-         return nI(kk, yk.flatMap((kk => kk.depth !== Fk || kk.Gj ? [] : [kk.edit])))
+         return vg(SS, xS.flatMap((SS => SS.depth !== HS || SS.ia ? [] : [SS.edit])))
```

#### 487. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9244` → after: `L9244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9244) · [Before (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9244)

```diff
-               text: Sk().isShorthandPropertyAssignment(qk) ? `${Fk}: ${Ik}` : Ik
+               text: JS().isShorthandPropertyAssignment(uS) ? `${HS}: ${gS}` : gS
```

#### 488. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9254-L9255` → after: `L9254-L9255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9254-L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9254-L9255) · [Before (L9254-L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9254-L9255)

```diff
-       const Fk = `(["'])${function(kk){return kk.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(Ik)}\\1`;
-       return ("comparedBlock" === Tk ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${Fk}`, `${Fk}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${Fk}`, `${Fk}\\s*[!=]==?`, `\\bcase\\s+${Fk}\\s*:`, `\\.includes\\(\\s*${Fk}\\s*\\)`]).reduce(((kk, Fk) => kk.replace(new RegExp(Fk, "g"), … [truncated]
+       const HS = `(["'])${function(SS){return SS.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(gS)}\\1`;
+       return ("comparedBlock" === bS ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${HS}`, `${HS}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${HS}`, `${HS}\\s*[!=]==?`, `\\bcase\\s+${HS}\\s*:`, `\\.includes\\(\\s*${HS}\\s*\\)`]).reduce(((SS, HS) => SS.replace(new RegExp(HS, "g"), … [truncated]
```

#### 489. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9265` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9265) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9265)

```diff
-   return "export" === kk.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === kk.kind ? `The null given to ${kk.method} is gone.` : `"${kk.from}" is now "${kk.to}".`
+   return "export" === SS.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === SS.kind ? `The null given to ${SS.method} is gone.` : `"${SS.from}" is now "${SS.to}".`
```

#### 490. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9267)

```diff
- var Ga = Ik(41468);
+ var vq = gS(41465);
```

#### 491. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9324` → after: `L9324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9324) · [Before (L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9324)

```diff
-       return Tk ? `${Xk} didn't accept your key: it may be wrong or deleted.` : `${Xk} didn't accept your key: it may be wrong or deleted. Check it on ${Xk}'s website.`;
+       return bS ? `${tS} didn't accept your key: it may be wrong or deleted.` : `${tS} didn't accept your key: it may be wrong or deleted. Check it on ${tS}'s website.`;
```

#### 492. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9326` → after: `L9326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9326) · [Before (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9326)

```diff
-       return Tk ? `${Xk} stopped your key for now: it has used all it can.` : `${Xk} stopped your key for now: it has used all it can. Check it on ${Xk}'s website.`;
+       return bS ? `${tS} stopped your key for now: it has used all it can.` : `${tS} stopped your key for now: it has used all it can. Check it on ${tS}'s website.`;
```

#### 493. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9328` → after: `L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9328) · [Before (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9328)

```diff
-       return `Too many requests to ${Ik} right now. Wait a minute and try again.`;
+       return `Too many requests to ${gS} right now. Wait a minute and try again.`;
```

#### 494. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9330` → after: `L9330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9330) · [Before (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9330)

```diff
-       return `${Xk} can't find ${Ik}. Pick another model, or press Check for new models in AI settings.`;
+       return `${tS} can't find ${gS}. Pick another model, or press Check for new models in AI settings.`;
```

#### 495. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9332` → after: `L9332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9332) · [Before (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9332)

```diff
-       return `${Ik} took too long to answer.`;
+       return `${gS} took too long to answer.`;
```

#### 496. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9334` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9334) · [Before (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9334)

```diff
-       return Tk ? `Couldn't reach ${Xk}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${Xk}. Check your internet and your key.`;
+       return bS ? `Couldn't reach ${tS}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${tS}. Check your internet and your key.`;
```

#### 497. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9336` → after: `L9336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9336) · [Before (L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9336)

```diff
-       return `${Xk} doesn't work from where you are.`;
+       return `${tS} doesn't work from where you are.`;
```

#### 498. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9340` → after: `L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9340) · [Before (L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9340)

```diff
-       return `${Ik} can't be used right now. Try again in a minute.`
+       return `${gS} can't be used right now. Try again in a minute.`
```

#### 499. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9352` → after: `L9352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9352) · [Before (L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9352)

```diff
-       return `Not answered: ${Xk} didn't accept your key.`;
+       return `Not answered: ${tS} didn't accept your key.`;
```

#### 500. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9354` → after: `L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9354) · [Before (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9354)

```diff
-       return `Not answered: ${Xk} couldn't find ${Ik}.`;
+       return `Not answered: ${tS} couldn't find ${gS}.`;
```

#### 501. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9356` → after: `L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9356) · [Before (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9356)

```diff
-       return `Not answered: ${Xk} stopped your key for now.`;
+       return `Not answered: ${tS} stopped your key for now.`;
```

#### 502. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9358` → after: `L9358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9358) · [Before (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9358)

```diff
-       return `Not answered: too many requests to ${Ik}.`;
+       return `Not answered: too many requests to ${gS}.`;
```

#### 503. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9360)

```diff
-       return `Not answered: ${Ik} took too long.`;
+       return `Not answered: ${gS} took too long.`;
```

#### 504. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9362` → after: `L9362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9362) · [Before (L9362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9362)

```diff
-       return `Not answered: couldn't reach ${Xk}.`;
+       return `Not answered: couldn't reach ${tS}.`;
```

#### 505. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9364` → after: `L9364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9364) · [Before (L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9364)

```diff
-       return `Not answered: ${Xk} doesn't work from where you are.`;
+       return `Not answered: ${tS} doesn't work from where you are.`;
```

#### 506. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9368` → after: `L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9368) · [Before (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9368)

```diff
-       return `Not answered: ${Ik} couldn't be used.`
+       return `Not answered: ${gS} couldn't be used.`
```

#### 507. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9386` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9386) · [Before (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9386)

```diff
-       ...Ga.e,
+       ...vq.d,
```

#### 508. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9519` → after: `L9519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9519) · [Before (L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9519)

```diff
-       return "" === kk ? "no key needed" : kk.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === Fk ? `key \u2026${kk.slice(-4)}` : `${(null!==(Ik=null===(Xk=/^[a-zA-Z]+-/.exec(kk))||void 0===Xk?void 0:Xk[0])&&void 0!==Ik?Ik:kk.slice(0,4)).slice(0,6)}\u2026${kk.slice(-4)}`
+       return "" === SS ? "no key needed" : SS.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === HS ? `key \u2026${SS.slice(-4)}` : `${(null!==(gS=null===(tS=/^[a-zA-Z]+-/.exec(SS))||void 0===tS?void 0:tS[0])&&void 0!==gS?gS:SS.slice(0,4)).slice(0,6)}\u2026${SS.slice(-4)}`
```

#### 509. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9541` → after: `L9541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9541) · [Before (L9541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9541)

```diff
-         "aria-label": `Edit ${ik} key`,
+         "aria-label": `Edit ${XS} key`,
```

#### 510. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9546` → after: `L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9546) · [Before (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9546)

```diff
-         "aria-label": `Rename ${ik} key`,
+         "aria-label": `Rename ${XS} key`,
```

#### 511. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9567` → after: `L9567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9567) · [Before (L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9567)

```diff
-     Jk = `${Zk}-${null!==(Fk=null===Lk||void 0===Lk?void 0:Lk.keyId)&&void 0!==Fk?Fk:"botxd"}-${null!==(Ik=null===Lk||void 0===Lk?void 0:Lk.modelId)&&void 0!==Ik?Ik:"botxd"}`.replace(/[^\w-]/g, "_"),
+     CS = `${kS}-${null!==(HS=null===IS||void 0===IS?void 0:IS.keyId)&&void 0!==HS?HS:"botxd"}-${null!==(gS=null===IS||void 0===IS?void 0:IS.modelId)&&void 0!==gS?gS:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 512. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9571-L9573` → after: `L9571-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9571-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9571-L9573) · [Before (L9571-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9571-L9573)

```diff
-     "data-key-id": null !== (Tk = null === Lk || void 0 === Lk ? void 0 : Lk.keyId) && void 0 !== Tk ? Tk : "botxd",
-     "data-model-id": null !== (lk = null === Lk || void 0 === Lk ? void 0 : Lk.modelId) && void 0 !== lk ? lk : "botxd",
-     title: null !== wk && void 0 !== wk ? wk : void 0,
+     "data-key-id": null !== (bS = null === IS || void 0 === IS ? void 0 : IS.keyId) && void 0 !== bS ? bS : "botxd",
+     "data-model-id": null !== (NS = null === IS || void 0 === IS ? void 0 : IS.modelId) && void 0 !== NS ? NS : "botxd",
+     title: null !== jS && void 0 !== jS ? jS : void 0,
```

#### 513. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9581` → after: `L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9581) · [Before (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9581)

```diff
-       "aria-describedby": qk ? Jk : void 0,
+       "aria-describedby": uS ? CS : void 0,
```

#### 514. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9608` → after: `L9608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9608) · [Before (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9608)

```diff
-     iG: ak,
+     pE: qS,
```

#### 515. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9631)

```diff
-           at: null !== (Ik = kk.usedAt) && void 0 !== Ik ? Ik : 0,
+           at: null !== (gS = SS.usedAt) && void 0 !== gS ? gS : 0,
```

#### 516. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9654` → after: `L9654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9654) · [Before (L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9654)

```diff
-     nk = `${Fk}-model`,
+     vS = `${HS}-model`,
```

#### 517. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9667` → after: `L9667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9667) · [Before (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9667)

```diff
-       }, null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.modelId) && void 0 !== Xk ? Xk : "botxd")
+       }, null !== (tS = null === gS || void 0 === gS ? void 0 : gS.modelId) && void 0 !== tS ? tS : "botxd")
```

#### 518. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9675` → after: `L9675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9675) · [Before (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9675)

```diff
-       hint: null !== Jk && void 0 !== Jk ? Jk : `Bloxd's better AI. ${Hk.status?El(Hk.status):""}`.trim(),
+       hint: null !== CS && void 0 !== CS ? CS : `Bloxd's better AI. ${GS.status?ON(GS.status):""}`.trim(),
```

#### 519. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9681` → after: `L9681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9681) · [Before (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9681)

```diff
-         Jl(null !== (kk = null === (Fk = Hk.status) || void 0 === Fk ? void 0 : Fk.provider) && void 0 !== kk ? kk : "ovh") && Pl.rZ()
+         jN(null !== (SS = null === (HS = GS.status) || void 0 === HS ? void 0 : HS.provider) && void 0 !== SS ? SS : "ovh") && CN.Sa()
```

#### 520. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9686` → after: `L9686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9686) · [Before (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9686)

```diff
-           if (Jl(null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.provider) && void 0 !== Fk ? Fk : "ovh")) return Pl.rZ(), !0;
+           if (jN(null !== (HS = null === SS || void 0 === SS ? void 0 : SS.provider) && void 0 !== HS ? HS : "ovh")) return CN.Sa(), !0;
```

#### 521. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9694` → after: `L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9694) · [Before (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9694)

```diff
-             }] = await Promise.all([Promise.resolve().then((() => Ik(1324))), Ik.e(355).then((() => Ik(61302)))]), Xk = kk.showPromptPopup({
+             }] = await Promise.all([Promise.resolve().then((() => gS(1435))), gS.e(355).then((() => gS(61356)))]), tS = SS.showPromptPopup({
```

#### 522. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9705` → after: `L9705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9705) · [Before (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9705)

```diff
-             }(), Pl.rZ(), !0)
+             }(), CN.Sa(), !0)
```

#### 523. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9718-L9719` → after: `L9718-L9719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9718-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9718-L9719) · [Before (L9718-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9718-L9719)

```diff
-         nk = Jk ? null !== (Fk = kk.models.find((Fk => Fk.id === kk.usedModelId))) && void 0 !== Fk ? Fk : Fl(kk.models) : void 0,
-         pk = null !== (Ik = null === (Xk = sk[kk.id]) || void 0 === Xk ? void 0 : Xk.trim().toLowerCase()) && void 0 !== Ik ? Ik : "",
+         vS = CS ? null !== (HS = SS.models.find((HS => HS.id === SS.usedModelId))) && void 0 !== HS ? HS : rx(SS.models) : void 0,
+         LS = null !== (gS = null === (tS = wS[SS.id]) || void 0 === tS ? void 0 : tS.trim().toLowerCase()) && void 0 !== gS ? gS : "",
```

#### 524. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9732` → after: `L9732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9732) · [Before (L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9732)

```diff
-             keyName: null !== (Tk = kk.name) && void 0 !== Tk ? Tk : "",
+             keyName: null !== (bS = SS.name) && void 0 !== bS ? bS : "",
```

#### 525. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9748` → after: `L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9748) · [Before (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9748)

```diff
-             "aria-label": `Check ${Hk} for new models`,
+             "aria-label": `Check ${GS} for new models`,
```

#### 526. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9756` → after: `L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9756) · [Before (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9756)

```diff
-             "aria-label": `Remove ${Hk} key`,
+             "aria-label": `Remove ${GS} key`,
```

#### 527. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9764` → after: `L9764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9764) · [Before (L9764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9764)

```diff
-             "aria-label": `Remove ${Hk} key?`,
+             "aria-label": `Remove ${GS} key?`,
```

#### 528. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9770` → after: `L9770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9770) · [Before (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9770)

```diff
-               "aria-label": `Yes, remove ${Hk} key`,
+               "aria-label": `Yes, remove ${GS} key`,
```

#### 529. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9777` → after: `L9777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9777) · [Before (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9777)

```diff
-               "aria-label": `No, keep ${Hk} key`,
+               "aria-label": `No, keep ${GS} key`,
```

#### 530. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9791-L9793` → after: `L9791-L9793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9791-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9791-L9793) · [Before (L9791-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9791-L9793)

```diff
-           "aria-label": `Find a model from ${Hk}`,
-           placeholder: `Find a model (${kk.models.length})`,
-           value: null !== (ek = sk[kk.id]) && void 0 !== ek ? ek : "",
+           "aria-label": `Find a model from ${GS}`,
+           placeholder: `Find a model (${SS.models.length})`,
+           value: null !== (KS = wS[SS.id]) && void 0 !== KS ? KS : "",
```

#### 531. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9809` → after: `L9809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9809) · [Before (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9809)

```diff
-           "aria-label": `Show all ${Hk} models`,
+           "aria-label": `Show all ${GS} models`,
```

#### 532. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9845` → after: `L9845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9845) · [Before (L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9845)

```diff
-         children: Fk ? Tk : ik
+         children: HS ? bS : XS
```

#### 533. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9965` → after: `L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L9965) · [Before (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L9965)

```diff
-           children: [1 === lk.length ? "Forget your key" : `Forget all ${lk.length} keys`, " in this browser?", (0, yk.jsx)("button", {
+           children: [1 === NS.length ? "Forget your key" : `Forget all ${NS.length} keys`, " in this browser?", (0, xS.jsx)("button", {
```

#### 534. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10029` → after: `L10029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10029) · [Before (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10029)

```diff
-                 text: `${Fk} listed no models, so your models stay as they were.`
+                 text: `${HS} listed no models, so your models stay as they were.`
```

#### 535. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10035` → after: `L10035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10035) · [Before (L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10035)

```diff
-                 text: `${Fk}'s models are up to date.`
+                 text: `${HS}'s models are up to date.`
```

#### 536. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10049` → after: `L10049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10049) · [Before (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10049)

```diff
-         iG: kk => {
+         pE: SS => {
```

#### 537. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10104` → after: `L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10104) · [Before (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10104)

```diff
-         null === (Ik = null !== Xk && void 0 !== Xk ? Xk : lk.current) || void 0 === Ik || Ik.scrollIntoView({
+         null === (gS = null !== tS && void 0 !== tS ? tS : NS.current) || void 0 === gS || gS.scrollIntoView({
```

#### 538. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10124` → after: `L10124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10124) · [Before (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10124)

```diff
-         children: ak ? `An API key works like a password for ${ak.shortName}'s AI (it isn't your ${ak.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: qS ? `An API key works like a password for ${qS.shortName}'s AI (it isn't your ${qS.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 539. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10126` → after: `L10126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10126) · [Before (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10126)

```diff
-         children: ["You make it on ", ak ? `${ak.shortName}'s website` : (0, yk.jsx)(iq, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", qS ? `${qS.shortName}'s website` : (0, xS.jsx)(tu, {}), ", and see how much you've used or delete it there."]
```

#### 540. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10128` → after: `L10128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10128) · [Before (L10128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10128)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (Fk = null === ak || void 0 === ak ? void 0 : ak.shortName) && void 0 !== Fk ? Fk : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (HS = null === qS || void 0 === qS ? void 0 : qS.shortName) && void 0 !== HS ? HS : "that company", ", never to Bloxd."]
```

#### 541. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10187` → after: `L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10187) · [Before (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10187)

```diff
-   } = ql(), [Zk, jk] = (0, Xk.useState)(null !== (Fk = null === ak || void 0 === ak ? void 0 : ak.provider) && void 0 !== Fk ? Fk : null), [ek, wk] = (0, Xk.useState)(!!ak), [Hk, Jk] = (0, Xk.useState)(""), xk = null !== (Ik = null === ak || void 0 === ak ? void 0 : ak.key) && vo … [truncated]
+   } = NN(), [kS, aS] = (0, tS.useState)(null !== (HS = null === qS || void 0 === qS ? void 0 : qS.provider) && void 0 !== HS ? HS : null), [KS, jS] = (0, tS.useState)(!!qS), [GS, CS] = (0, tS.useState)(""), nS = null !== (gS = null === qS || void 0 === qS ? void 0 : qS.key) && vo … [truncated]
```

#### 542. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10189` → after: `L10189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10189) · [Before (L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10189)

```diff
-     return kk === (null === ak || void 0 === ak ? void 0 : ak.provider) && ("custom" !== kk || (null !== (Fk = vy(Qk)) && void 0 !== Fk ? Fk : "") === (null !== (Ik = ak.baseUrl) && void 0 !== Ik ? Ik : ""))
+     return SS === (null === qS || void 0 === qS ? void 0 : qS.provider) && ("custom" !== SS || (null !== (HS = Jx(DS)) && void 0 !== HS ? HS : "") === (null !== (gS = qS.baseUrl) && void 0 !== gS ? gS : ""))
```

#### 543. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10192-L10193` → after: `L10192-L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10192-L10193) · [Before (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10192-L10193)

```diff
-     return "" === Fk && "" !== xk && Vk(kk) ? xk : Fk
-   }, [vk, Ek] = (0, Xk.useState)(""), [Ok, nk] = (0, Xk.useState)(null !== (ik = null === ak || void 0 === ak ? void 0 : ak.name) && void 0 !== ik ? ik : ""), [Gk, pk] = (0, Xk.useState)(!1), [uk, bk] = (0, Xk.useState)(null), [Rk, Uk] = (0, Xk.useState)(""), [Ck, Nk] = (0, Xk.us … [truncated]
+     return "" === HS && "" !== nS && hS(SS) ? nS : HS
+   }, [OS, dS] = (0, tS.useState)(""), [cS, vS] = (0, tS.useState)(null !== (XS = null === qS || void 0 === qS ? void 0 : qS.name) && void 0 !== XS ? XS : ""), [ES, LS] = (0, tS.useState)(!1), [YS, AS] = (0, tS.useState)(null), [yS, VS] = (0, tS.useState)(""), [iS, WS] = (0, tS.us … [truncated]
```

#### 544. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10224` → after: `L10224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10224) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10224)

```diff
-           baseUrl: "custom" === Zk && null !== (kk = vy(Qk)) && void 0 !== kk ? kk : void 0,
+           baseUrl: "custom" === kS && null !== (SS = Jx(DS)) && void 0 !== SS ? SS : void 0,
```

#### 545. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10231` → after: `L10231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10231) · [Before (L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10231)

```diff
-         const Ik = null !== Zk && void 0 !== Zk ? Zk : oy(Fk),
+         const gS = null !== kS && void 0 !== kS ? kS : Zx(HS),
```

#### 546. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10246-L10247` → after: `L10246-L10247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10246-L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10246-L10247) · [Before (L10246-L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10246-L10247)

```diff
-             baseUrl: null !== Tk && void 0 !== Tk ? Tk : void 0,
-             modelName: Gk ? vk : void 0
+             baseUrl: null !== bS && void 0 !== bS ? bS : void 0,
+             modelName: ES ? OS : void 0
```

#### 547. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10253` → after: `L10253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10253) · [Before (L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10253)

```diff
-           Uk(null !== (yk = null === (lk = null !== qk && void 0 !== qk ? qk : Fl(kk)) || void 0 === lk ? void 0 : lk.id) && void 0 !== yk ? yk : "")
+           VS(null !== (xS = null === (NS = null !== uS && void 0 !== uS ? uS : rx(SS)) || void 0 === NS ? void 0 : NS.id) && void 0 !== xS ? xS : "")
```

#### 548. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10259-L10260` → after: `L10259-L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10259-L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10259-L10260) · [Before (L10259-L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10259-L10260)

```diff
-           const yk = "badKey" !== Tk || ek ? "" : ` If it isn't from ${sy[Ik].shortName}, pick the company it's from.`;
-           Wk(`${Gy(Tk,Ik)}${yk}`)
+           const xS = "badKey" !== bS || KS ? "" : ` If it isn't from ${Qx[gS].shortName}, pick the company it's from.`;
+           US(`${vx(bS,gS)}${xS}`)
```

#### 549. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10270` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10270) · [Before (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10270)

```diff
-         value: null !== Zk && void 0 !== Zk ? Zk : "",
+         value: null !== kS && void 0 !== kS ? kS : "",
```

#### 550. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10298` → after: `L10298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10298) · [Before (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10298)

```diff
-       }), (!ak || Qk !== (null !== (lk = ak.baseUrl) && void 0 !== lk ? lk : "")) && (0, yk.jsx)(lq, {})]
+       }), (!qS || DS !== (null !== (NS = qS.baseUrl) && void 0 !== NS ? NS : "")) && (0, xS.jsx)(Xu, {})]
```

#### 551. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10370` → after: `L10370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10370) · [Before (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10370)

```diff
-           keyId: null !== Zk && void 0 !== Zk ? Zk : "",
+           keyId: null !== kS && void 0 !== kS ? kS : "",
```

#### 552. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10394` → after: `L10394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10394) · [Before (L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10394)

```diff
-         placeholder: Zk && "custom" !== Zk ? `Like My ${sy[Zk].shortName}` : "Like Home server",
+         placeholder: kS && "custom" !== kS ? `Like My ${Qx[kS].shortName}` : "Like Home server",
```

#### 553. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10420` → after: `L10420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10420) · [Before (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10420)

```diff
-         children: Ck ? dk ? "Testing the connection\u2026" : "Testing your key\u2026" : hk ? `Save and use ${hk.name}` : dk ? "Test connection" : "Test key"
+         children: iS ? BS ? "Testing the connection\u2026" : "Testing your key\u2026" : oS ? `Save and use ${oS.name}` : BS ? "Test connection" : "Test key"
```

#### 554. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10425-L10427` → after: `L10425-L10427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10425-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10425-L10427) · [Before (L10425-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10425-L10427)

```diff
- var Lq = Ik(1179),
-   tq = Ik(36927),
-   Zq = Ik(36920);
+ var qu = gS(1281),
+   uu = gS(36908),
+   Iu = gS(36906);
```

#### 555. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10438` → after: `L10438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10438) · [Before (L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10438)

```diff
-   } = (0, Lq.y)();
+   } = (0, qu.F)();
```

#### 556. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10442` → after: `L10442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10442) · [Before (L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10442)

```diff
-     text: ik(`codeEditorAiTutorial:${Fk}`),
+     text: XS(`codeEditorAiTutorial:${HS}`),
```

#### 557. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10490` → after: `L10490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10490) · [Before (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10490)

```diff
-   return kk.model.name.toLowerCase().startsWith(Fk.toLowerCase()) ? kk.model.name : `${Fk} \xb7 ${kk.model.name}`
+   return SS.model.name.toLowerCase().startsWith(HS.toLowerCase()) ? SS.model.name : `${HS} \xb7 ${SS.model.name}`
```

#### 558. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10540` → after: `L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10540) · [Before (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10540)

```diff
-     Pk = xk ? "Bot.xd (free) \xb7 once" : qk ? Hq(qk) : tk ? jl : "Bot.xd (free)";
+     PS = nS ? "Bot.xd (free) \xb7 once" : uS ? Ku(uS) : fS ? fN : "Bot.xd (free)";
```

#### 559. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10552` → after: `L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10552) · [Before (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10552)

```diff
-       "aria-label": `AI model: ${Pk}`,
+       "aria-label": `AI model: ${PS}`,
```

#### 560. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10570` → after: `L10570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10570) · [Before (L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10570)

```diff
-         title: `Allow AI to make edits to my code is ${Ik?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${gS?"on":"off"}, in AI settings`,
```

#### 561. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10638` → after: `L10638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10638) · [Before (L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10638)

```diff
-       Ik(null !== (Fk = kk.error) && void 0 !== Fk ? Fk : new Error("IndexedDB transaction failed"))
+       gS(null !== (HS = SS.error) && void 0 !== HS ? HS : new Error("IndexedDB transaction failed"))
```

#### 562. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10641` → after: `L10641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10641) · [Before (L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10641)

```diff
-       Ik(null !== (Fk = kk.error) && void 0 !== Fk ? Fk : new Error("IndexedDB transaction aborted"))
+       gS(null !== (HS = SS.error) && void 0 !== HS ? HS : new Error("IndexedDB transaction aborted"))
```

#### 563. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10645` → after: `L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10645) · [Before (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10645)

```diff
- var Kq = Ik(36950);
+ var nu = gS(36944);
```

#### 564. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10676` → after: `L10676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10676) · [Before (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10676)

```diff
-           if (Fk) return kk.includes(`"${Fk}"`) ? `"${Fk}"` : kk.includes(Fk) ? Fk : void 0
+           if (HS) return SS.includes(`"${HS}"`) ? `"${HS}"` : SS.includes(HS) ? HS : void 0
```

#### 565. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10680` → after: `L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10680) · [Before (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10680)

```diff
-         className: ik()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${kk.kind}`, Xk && "WorldCodeAiDiff-marked"),
+         className: XS()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${SS.kind}`, tS && "WorldCodeAiDiff-marked"),
```

#### 566. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10743` → after: `L10743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10743) · [Before (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10743)

```diff
-   return Tk(kk) === Tk(Fk) ? Xk : Tk(kk) === Tk(Fk - 864e5) ? `yesterday ${Xk}` : function(kk, Fk) {
+   return bS(SS) === bS(HS) ? tS : bS(SS) === bS(HS - 864e5) ? `yesterday ${tS}` : function(SS, HS) {
```

#### 567. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10746` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10746) · [Before (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10746)

```diff
-     if (Ik < 60) return `${Ik} min ago`;
+     if (gS < 60) return `${gS} min ago`;
```

#### 568. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10748` → after: `L10748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10748) · [Before (L10748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10748)

```diff
-     if (Xk < 24) return `${Xk} h ago`;
+     if (tS < 24) return `${tS} h ago`;
```

#### 569. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10750` → after: `L10750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10750) · [Before (L10750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10750)

```diff
-     return 1 === Tk ? "1 day ago" : `${Tk} days ago`
+     return 1 === bS ? "1 day ago" : `${bS} days ago`
```

#### 570. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10757-L10758` → after: `L10757-L10758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10757-L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10757-L10758) · [Before (L10757-L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10757-L10758)

```diff
-     const ik = null !== (Xk = kk.files[Ik]) && void 0 !== Xk ? Xk : "";
-     return (null !== (Tk = Fk[Ik]) && void 0 !== Tk ? Tk : "") === ik ? [] : [{
+     const XS = null !== (tS = SS.files[gS]) && void 0 !== tS ? tS : "";
+     return (null !== (bS = HS[gS]) && void 0 !== bS ? bS : "") === XS ? [] : [{
```

#### 571. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10770` → after: `L10770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10770) · [Before (L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10770)

```diff
-   return `${(Xk>Fk/2?Ik.slice(0,Xk):Ik).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(tS>HS/2?gS.slice(0,tS):gS).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 572. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10781` → after: `L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10781) · [Before (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10781)

```diff
-   const [qk, Lk] = (0, Xk.useState)(!1), [tk, Zk] = (0, Xk.useState)(!1), jk = Fk.did ? `Before: ${Fk.did}` : Fk.label, ek = vq(jk), wk = Fk.did && Fk.label.startsWith('Before "') ? Fk.label.slice(7) : null, Hk = null === wk ? null : vq(wk, 50), Jk = null !== Hk && null !== wk && … [truncated]
+   const [uS, IS] = (0, tS.useState)(!1), [fS, kS] = (0, tS.useState)(!1), aS = HS.did ? `Before: ${HS.did}` : HS.label, KS = Ju(aS), jS = HS.did && HS.label.startsWith('Before "') ? HS.label.slice(7) : null, GS = null === jS ? null : Ju(jS, 50), CS = null !== GS && null !== jS && … [truncated]
```

#### 573. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10806-L10807` → after: `L10806-L10807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10806-L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10806-L10807) · [Before (L10806-L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10806-L10807)

```diff
-     const ik = null !== (Xk = Fk.files[kk]) && void 0 !== Xk ? Xk : "",
-       yk = null !== (Tk = Ik[kk]) && void 0 !== Tk ? Tk : "";
+     const XS = null !== (tS = HS.files[SS]) && void 0 !== tS ? tS : "",
+       xS = null !== (bS = gS[SS]) && void 0 !== bS ? bS : "";
```

#### 574. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10821` → after: `L10821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10821) · [Before (L10821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10821)

```diff
-         children: [tk || !ek ? jk : ek, (ek || Jk) && (0, yk.jsx)("button", {
+         children: [fS || !KS ? aS : KS, (KS || CS) && (0, xS.jsx)("button", {
```

#### 575. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10833` → after: `L10833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10833) · [Before (L10833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10833)

```diff
-           children: ["You asked: ", tk || !Jk ? wk : Jk]
+           children: ["You asked: ", fS || !CS ? jS : CS]
```

#### 576. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10914` → after: `L10914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10914) · [Before (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10914)

```diff
-     mJ: Tk,
+     EQ: bS,
```

#### 577. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10938` → after: `L10938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L10938) · [Before (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L10938)

```diff
-           "aria-label": `Delete note: ${kk}`,
+           "aria-label": `Delete note: ${SS}`,
```

#### 578. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11077` → after: `L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11077) · [Before (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11077)

```diff
-       }, `${Fk}:${kk}`)))
+       }, `${HS}:${SS}`)))
```

#### 579. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11080` → after: `L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11080) · [Before (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11080)

```diff
-       children: ["Apply ", Ik - Xk > 1 ? `steps ${Xk+1} to ${Ik}` : `step ${Ik}`, " to your code and try it, then build step ", Ik + 1, "."]
+       children: ["Apply ", gS - tS > 1 ? `steps ${tS+1} to ${gS}` : `step ${gS}`, " to your code and try it, then build step ", gS + 1, "."]
```

#### 580. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11082` → after: `L11082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11082) · [Before (L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11082)

```diff
-       ...Ga.e,
+       ...vq.d,
```

#### 581. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11087` → after: `L11087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11087) · [Before (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11087)

```diff
-       children: Xk < Ik ? `Build step ${Ik+1} anyway` : `Build step ${Ik+1}`
+       children: tS < gS ? `Build step ${gS+1} anyway` : `Build step ${gS+1}`
```

#### 582. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11099` → after: `L11099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11099) · [Before (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11099)

```diff
-   return `${kk}\n\nYou asked me: "${Fk}" ${null===Ik?"I don't mind: choose what works best.":`My answer: ${Ik.replace(/\.$/,"")}.`} Build it now, without asking again.`
+   return `${SS}\n\nYou asked me: "${HS}" ${null===gS?"I don't mind: choose what works best.":`My answer: ${gS.replace(/\.$/,"")}.`} Build it now, without asking again.`
```

#### 583. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11118-L11119` → after: `L11118-L11119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11118-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11118-L11119) · [Before (L11118-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11118-L11119)

```diff
-           ...Ga.e,
-           key: `${Fk}:${kk}`,
+           ...vq.d,
+           key: `${HS}:${SS}`,
```

#### 584. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11152` → after: `L11152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11152) · [Before (L11152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11152)

```diff
-         ...Ga.e,
+         ...vq.d,
```

#### 585. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11325` → after: `L11325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11325) · [Before (L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11325)

```diff
-       Qk = null !== Pk && void 0 !== Pk ? Pk : Tk;
+       DS = null !== PS && void 0 !== PS ? PS : bS;
```

#### 586. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11329-L11331` → after: `L11329-L11331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11329-L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11329-L11331) · [Before (L11329-L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11329-L11331)

```diff
-       raw: null !== (ak = null === Kk || void 0 === Kk ? void 0 : Kk.text) && void 0 !== ak ? ak : "",
-       start: null !== (qk = null === Kk || void 0 === Kk ? void 0 : Kk.start) && void 0 !== qk ? qk : 0,
-       end: null !== (Lk = null === Kk || void 0 === Kk ? void 0 : Kk.end) && void 0 !== Lk ? Lk : 0,
+       raw: null !== (qS = null === QS || void 0 === QS ? void 0 : QS.text) && void 0 !== qS ? qS : "",
+       start: null !== (uS = null === QS || void 0 === QS ? void 0 : QS.start) && void 0 !== uS ? uS : 0,
+       end: null !== (IS = null === QS || void 0 === QS ? void 0 : QS.end) && void 0 !== IS ? IS : 0,
```

#### 587. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11374` → after: `L11374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11374) · [Before (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11374)

```diff
-     ik = Ik, Tk = `${yk=Ik.includes(kk)&&!Ik.includes(Xk)?Xk:kk}${ik.slice(0,200).replace(/\\/g,"\\\\").replace('"'===yk?/"/g:/'/g,`\\${yk}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
+     XS = gS, bS = `${xS=gS.includes(SS)&&!gS.includes(tS)?tS:SS}${XS.slice(0,200).replace(/\\/g,"\\\\").replace('"'===xS?/"/g:/'/g,`\\${xS}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
```

#### 588. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11383)

```diff
-     const Ik = Math.min(3, (null !== (Fk = String(kk).split(".")[1]) && void 0 !== Fk ? Fk : "").length);
+     const gS = Math.min(3, (null !== (HS = String(SS).split(".")[1]) && void 0 !== HS ? HS : "").length);
```

#### 589. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11398` → after: `L11398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11398) · [Before (L11398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11398)

```diff
-   return "boolean" === typeof kk ? kk ? "on" : "off" : "number" === typeof kk ? String(kk) : kk.length > 20 ? `\u201c${kk.slice(0,19)}\u2026\u201d` : `\u201c${kk}\u201d`
+   return "boolean" === typeof SS ? SS ? "on" : "off" : "number" === typeof SS ? String(SS) : SS.length > 20 ? `\u201c${SS.slice(0,19)}\u2026\u201d` : `\u201c${SS}\u201d`
```

#### 590. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11403` → after: `L11403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11403) · [Before (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11403)

```diff
-   if (0 === kk.length) return `Before ${Fk} settings`;
+   if (0 === SS.length) return `Before ${HS} settings`;
```

#### 591. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11405-L11407` → after: `L11405-L11407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11405-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11405-L11407) · [Before (L11405-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11405-L11407)

```diff
-     Xk = kk.slice(0, Ik).map((kk => `${kk.name} ${kk.from} \u2192 ${kk.to}`)),
-     Tk = kk.length > Ik ? ` and ${kk.length-Ik} more` : "";
-   return `Before ${Fk} settings: ${Xk.join(", ")}${Tk}`
+     tS = SS.slice(0, gS).map((SS => `${SS.name} ${SS.from} \u2192 ${SS.to}`)),
+     bS = SS.length > gS ? ` and ${SS.length-gS} more` : "";
+   return `Before ${HS} settings: ${tS.join(", ")}${bS}`
```

#### 592. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11415` → after: `L11415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11415) · [Before (L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11415)

```diff
-     Fk.add(null !== (Ik = null !== (Xk = Tk[1]) && void 0 !== Xk ? Xk : Tk[2]) && void 0 !== Ik ? Ik : Tk[3])
+     HS.add(null !== (gS = null !== (tS = bS[1]) && void 0 !== tS ? tS : bS[2]) && void 0 !== gS ? gS : bS[3])
```

#### 593. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11458` → after: `L11458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11458) · [Before (L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11458)

```diff
-     const ik = null !== (Tk = mq.get(Fk)) && void 0 !== Tk ? Tk : [];
+     const XS = null !== (bS = Ru.get(HS)) && void 0 !== bS ? bS : [];
```

#### 594. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11510` → after: `L11510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11510) · [Before (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11510)

```diff
-   return null !== (Fk = kL.get(kk)) && void 0 !== Fk ? Fk : "CONFIG" === kk ? "Settings" : void 0
+   return null !== (HS = eu.get(SS)) && void 0 !== HS ? HS : "CONFIG" === SS ? "Settings" : void 0
```

#### 595. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11536)

```diff
-         name: void 0 === ik ? null : null !== (Tk = aL(ik)) && void 0 !== Tk ? Tk : null,
+         name: void 0 === XS ? null : null !== (bS = xI(XS)) && void 0 !== bS ? bS : null,
```

#### 596. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11588` → after: `L11588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11588) · [Before (L11588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11588)

```diff
-   return lk.every((kk => TL(kk.removed) && TL(kk.added))) ? lk : [kk]
+   return NS.every((SS => gI(SS.removed) && gI(SS.added))) ? NS : [SS]
```

#### 597. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11640` → after: `L11640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11640) · [Before (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11640)

```diff
-   return Xk ? null !== (Fk = null !== (Ik = Xk[1]) && void 0 !== Ik ? Ik : Xk[2]) && void 0 !== Fk ? Fk : Xk[3] : void 0
+   return tS ? null !== (HS = null !== (gS = tS[1]) && void 0 !== gS ? gS : tS[2]) && void 0 !== HS ? HS : tS[3] : void 0
```

#### 598. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11668` → after: `L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11668) · [Before (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11668)

```diff
-   return kk.length <= 1 ? null !== (Fk = kk[0]) && void 0 !== Fk ? Fk : "" : `${kk.slice(0,-1).join(", ")} and ${kk[kk.length-1]}`
+   return SS.length <= 1 ? null !== (HS = SS[0]) && void 0 !== HS ? HS : "" : `${SS.slice(0,-1).join(", ")} and ${SS[SS.length-1]}`
```

#### 599. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11683` → after: `L11683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11683) · [Before (L11683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11683)

```diff
-     return (0, eF.e)(Fk, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, eF.l).map((kk => kk[0])).filter((kk => !wL.has(kk)))
+     return (0, aH.f)(HS, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, aH.m).map((SS => SS[0])).filter((SS => !aI.has(SS)))
```

#### 600. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11689` → after: `L11689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11689) · [Before (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11689)

```diff
-   const Xk = (null !== (Ik = kk.parts) && void 0 !== Ik ? Ik : []).map((kk => {
+   const tS = (null !== (gS = SS.parts) && void 0 !== gS ? gS : []).map((SS => {
```

#### 601. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11737` → after: `L11737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11737) · [Before (L11737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11737)

```diff
-               return Ik ? [null !== (Fk = Ik[1]) && void 0 !== Fk ? Fk : Ik[2]] : []
+               return gS ? [null !== (HS = gS[1]) && void 0 !== HS ? HS : gS[2]] : []
```

#### 602. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11741` → after: `L11741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11741) · [Before (L11741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11741)

```diff
-               return tk.has(kk) ? `"${Fk}"` : Fk
+               return fS.has(SS) ? `"${HS}"` : HS
```

#### 603. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11749` → after: `L11749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11749) · [Before (L11749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11749)

```diff
-                   return null !== (Fk = ak.get(kk)) && void 0 !== Fk ? Fk : kk
+                   return null !== (HS = qS.get(SS)) && void 0 !== HS ? HS : SS
```

#### 604. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11752` → after: `L11752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11752) · [Before (L11752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11752)

```diff
-               Fk = [ik.length > 0 ? `${kk(ik)} \u2014 changed` : "", yk.length > 0 ? `${kk(yk)} \u2014 added` : "", lk.length > 0 ? `${kk(lk)} \u2014 taken out` : ""].filter(Boolean),
+               HS = [XS.length > 0 ? `${SS(XS)} \u2014 changed` : "", xS.length > 0 ? `${SS(xS)} \u2014 added` : "", NS.length > 0 ? `${SS(NS)} \u2014 taken out` : ""].filter(Boolean),
```

#### 605. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11763` → after: `L11763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11763) · [Before (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11763)

```diff
-           const ek = [ik.length > 0 ? `changes ${ZL(ik.map(Zk))}` : "", yk.length > 0 ? `adds ${ZL(yk.map(Zk))}` : "", lk.length > 0 ? `takes out ${ZL(lk.map(Zk))}` : ""].filter(Boolean);
+           const KS = [XS.length > 0 ? `changes ${II(XS.map(kS))}` : "", xS.length > 0 ? `adds ${II(xS.map(kS))}` : "", NS.length > 0 ? `takes out ${II(NS.map(kS))}` : ""].filter(Boolean);
```

#### 606. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11779` → after: `L11779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11779) · [Before (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11779)

```diff
-                 named: `${Ik} \u2014 changed`,
+                 named: `${gS} \u2014 changed`,
```

#### 607. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11785` → after: `L11785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11785) · [Before (L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11785)

```diff
-                 named: `Changes ${/\bfunction\b|=>/.test(kk)?`"${jL(Fk)}"`:jL(Fk)}`,
+                 named: `Changes ${/\bfunction\b|=>/.test(SS)?`"${fI(HS)}"`:fI(HS)}`,
```

#### 608. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11794` → after: `L11794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11794) · [Before (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11794)

```diff
-             named: 0 === kk.added.length ? `Takes out lines from line ${Ik}` : `Changes line ${Ik}`,
+             named: 0 === SS.added.length ? `Takes out lines from line ${gS}` : `Changes line ${gS}`,
```

#### 609. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11819` → after: `L11819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11819) · [Before (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11819)

```diff
-           return Xk[Fk] && null !== (Ik = kk.uses) && void 0 !== Ik ? Ik : []
+           return tS[HS] && null !== (gS = SS.uses) && void 0 !== gS ? gS : []
```

#### 610. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11823` → after: `L11823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11823) · [Before (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11823)

```diff
-           return Xk[Fk] || (null !== (Ik = kk.uses) && void 0 !== Ik ? Ik : []).some((kk => Tk.has(kk)))
+           return tS[HS] || (null !== (gS = SS.uses) && void 0 !== gS ? gS : []).some((SS => bS.has(SS)))
```

#### 611. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11830` → after: `L11830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11830) · [Before (L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11830)

```diff
-           const Xk = (null !== (lk = kk.takesOut) && void 0 !== lk ? lk : []).filter((kk => ("CONFIG" === kk || mq.has(kk)) && !yk.has(kk)));
+           const tS = (null !== (NS = SS.takesOut) && void 0 !== NS ? NS : []).filter((SS => ("CONFIG" === SS || Ru.has(SS)) && !xS.has(SS)));
```

#### 612. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11834` → after: `L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11834) · [Before (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11834)

```diff
-           }, Fk, Ik) || void 0 !== kk.why && Dq(Ik, rq(kk.why)) || (null !== (ak = kk.removedUses) && void 0 !== ak ? ak : []).some((kk => Tk.has(kk))) ? void 0 : "takesOut"
+           }, HS, gS) || void 0 !== SS.why && lu(gS, ou(SS.why)) || (null !== (qS = SS.removedUses) && void 0 !== qS ? qS : []).some((SS => bS.has(SS))) ? void 0 : "takesOut"
```

#### 613. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11853` → after: `L11853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11853) · [Before (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11853)

```diff
-         Lk = !Tk && qk ? qk : Ik,
+         IS = !bS && uS ? uS : gS,
```

#### 614. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11870` → after: `L11870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11870) · [Before (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11870)

```diff
-       return `${null!==(Fk=kk.also)&&void 0!==Fk?Fk:""}|${kk.label}|${null!==(Ik=kk.detail)&&void 0!==Ik?Ik:""}`
+       return `${null!==(HS=SS.also)&&void 0!==HS?HS:""}|${SS.label}|${null!==(gS=SS.detail)&&void 0!==gS?gS:""}`
```

#### 615. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11879` → after: `L11879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11879) · [Before (L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11879)

```diff
-       label: `${Ik.label} (line ${Fk})`
+       label: `${gS.label} (line ${HS})`
```

#### 616. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11907` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11907) · [Before (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11907)

```diff
-       return (0, eF.e)(kk, sL, VL).map((kk => [kk.index, kk.index + kk[0].length]))
+       return (0, aH.f)(SS, QI, DI).map((SS => [SS.index, SS.index + SS[0].length]))
```

#### 617. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11914` → after: `L11914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11914) · [Before (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11914)

```diff
-   for (const ik of kk.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${PL})\\b`, "g"))) {
+   for (const XS of SS.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${CI})\\b`, "g"))) {
```

#### 618. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11924` → after: `L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11924) · [Before (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11924)

```diff
-         words: `${ik[2]?"It also":"This"} ${xL[ik[3]]}`
+         words: `${XS[2]?"It also":"This"} ${GI[XS[3]]}`
```

#### 619. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11926` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11926) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11926)

```diff
-       for (const kk of ak.matchAll(new RegExp(`\\b(and|then|also) (${PL})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) Ik(Tk + kk.index) || Xk.push({
+       for (const SS of qS.matchAll(new RegExp(`\\b(and|then|also) (${CI})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) gS(bS + SS.index) || tS.push({
```

#### 620. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11929` → after: `L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11929) · [Before (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11929)

```diff
-         words: `${kk[1]} ${xL[kk[2]]}`
+         words: `${SS[1]} ${GI[SS[2]]}`
```

#### 621. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11942` → after: `L11942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11942) · [Before (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11942)

```diff
-       words: `will ${Tk=ik[1],"has"===Tk?"have":Tk.endsWith("ies")?`${Tk.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(Tk)?Tk.slice(0,-2):Tk.slice(0,-1)}`
+       words: `will ${bS=XS[1],"has"===bS?"have":bS.endsWith("ies")?`${bS.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(bS)?bS.slice(0,-2):bS.slice(0,-1)}`
```

#### 622. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11976` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L11976) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L11976)

```diff
-   }, Jk = `WorldCodeAiSetting-${Fk}-${Ik.key}`;
+   }, CS = `WorldCodeAiSetting-${HS}-${gS.key}`;
```

#### 623. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12004` → after: `L12004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12004) · [Before (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12004)

```diff
-         "aria-label": `Less ${tk}`,
+         "aria-label": `Less ${fS}`,
```

#### 624. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12016` → after: `L12016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12016) · [Before (L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12016)

```diff
-         value: null !== lk && void 0 !== lk ? lk : String(Ik.value),
+         value: null !== NS && void 0 !== NS ? NS : String(gS.value),
```

#### 625. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12027` → after: `L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12027) · [Before (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12027)

```diff
-         "aria-label": `More ${tk}`,
+         "aria-label": `More ${fS}`,
```

#### 626. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12115` → after: `L12115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12115) · [Before (L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12115)

```diff
-   if (kk > 9e4) return `It starts in about ${Math.ceil(kk/6e4)} minutes.`;
+   if (SS > 9e4) return `It starts in about ${Math.ceil(SS/6e4)} minutes.`;
```

#### 627. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12118` → after: `L12118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12118) · [Before (L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12118)

```diff
-   return Fk >= 60 ? "It starts in about a minute." : `It starts in about ${Fk} seconds.`
+   return HS >= 60 ? "It starts in about a minute." : `It starts in about ${HS} seconds.`
```

#### 628. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12120` → after: `L12120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12120) · [Before (L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12120)

```diff
- var GL = Ik(1199);
+ var vI = gS(1290);
```

#### 629. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12126` → after: `L12126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12126) · [Before (L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12126)

```diff
-     Ik.set(Tk, (null !== (Xk = Ik.get(Tk)) && void 0 !== Xk ? Xk : 0) + 1)
+     gS.set(bS, (null !== (tS = gS.get(bS)) && void 0 !== tS ? tS : 0) + 1)
```

#### 630. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12130` → after: `L12130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12130) · [Before (L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12130)

```diff
-     const Xk = null !== (Fk = Ik.get(kk)) && void 0 !== Fk ? Fk : 0;
+     const tS = null !== (HS = gS.get(SS)) && void 0 !== HS ? HS : 0;
```

#### 631. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12137` → after: `L12137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12137) · [Before (L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12137)

```diff
-     if (null !== Fk && void 0 !== Fk && Fk.aborted) return void Xk((0, GL.e)(Fk));
+     if (null !== HS && void 0 !== HS && HS.aborted) return void tS((0, vI.c)(HS));
```

#### 632. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12140` → after: `L12140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12140) · [Before (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12140)

```diff
-       clearTimeout(Tk), Xk((0, GL.e)(Fk))
+       clearTimeout(bS), tS((0, vI.c)(HS))
```

#### 633. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12157` → after: `L12157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12157) · [Before (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12157)

```diff
-     const qk = null !== (yk = lk.find((kk => Ii.freeAt(kk) <= Date.now()))) && void 0 !== yk ? yk : lk[0],
+     const uS = null !== (xS = NS.find((SS => gX.freeAt(SS) <= Date.now()))) && void 0 !== xS ? xS : NS[0],
```

#### 634. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12174` → after: `L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12174) · [Before (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12174)

```diff
-       return [...null !== (Fk = kk.why) && void 0 !== Fk ? Fk : [], ...(null !== (Ik = kk.parts) && void 0 !== Ik ? Ik : []).map((kk => kk.why)), ...pL(kk.before, kk.after)]
+       return [...null !== (HS = SS.why) && void 0 !== HS ? HS : [], ...(null !== (gS = SS.parts) && void 0 !== gS ? gS : []).map((SS => SS.why)), ...EI(SS.before, SS.after)]
```

#### 635. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12185` → after: `L12185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12185) · [Before (L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12185)

```diff
-           Xk = kk > 6e3 ? kk : bT;
+           tS = SS > 6e3 ? SS : yb;
```

#### 636. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12199-L12201` → after: `L12199-L12201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12199-L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12199-L12201) · [Before (L12199-L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12199-L12201)

```diff
-   const Xk = Fk && null !== (Ik = kk[Fk]) && void 0 !== Ik ? Ik : [],
-     Tk = Xk.length >= 2 ? Xk : Object.values(kk).flat();
-   return Tk.length < 2 ? "Usually under a minute." : `Usually ${function(kk){const Fk=Math.max(5,5*Math.round(kk/5e3));if(Fk<60)return`about ${Fk} seconds`;const Ik=10*Math.round(kk/1e4),Xk=Math.floor(Ik/60),Tk=Ik%60,ik=`${Xk} ${1===Xk?"minute":"minutes"}`;return 0===Tk?`about ${ … [truncated]
+   const tS = HS && null !== (gS = SS[HS]) && void 0 !== gS ? gS : [],
+     bS = tS.length >= 2 ? tS : Object.values(SS).flat();
+   return bS.length < 2 ? "Usually under a minute." : `Usually ${function(SS){const HS=Math.max(5,5*Math.round(SS/5e3));if(HS<60)return`about ${HS} seconds`;const gS=10*Math.round(SS/1e4),tS=Math.floor(gS/60),bS=gS%60,XS=`${tS} ${1===tS?"minute":"minutes"}`;return 0===bS?`about ${ … [truncated]
```

#### 637. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12203` → after: `L12203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12203) · [Before (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12203)

```diff
- var NL = Ik(36958);
+ var iI = gS(36953);
```

#### 638. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12220` → after: `L12220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12220) · [Before (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12220)

```diff
-   return `Moving to ${kk} code\u2026`
+   return `Moving to ${SS} code\u2026`
```

#### 639. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12224` → after: `L12224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12224) · [Before (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12224)

```diff
-   return kk.fromLine === kk.toLine ? `line ${kk.fromLine}` : `lines ${kk.fromLine}-${kk.toLine}`
+   return SS.fromLine === SS.toLine ? `line ${SS.fromLine}` : `lines ${SS.fromLine}-${SS.toLine}`
```

#### 640. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12228-L12229` → after: `L12228-L12229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12228-L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12228-L12229) · [Before (L12228-L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12228-L12229)

```diff
-   const Fk = kk.text.length > 4e3 ? `${kk.text.slice(0,4e3)}\n...` : kk.text;
-   return `The part I picked (${kk.path}, ${BL(kk)}):\n\`\`\`\n${Fk}\n\`\`\``
+   const HS = SS.text.length > 4e3 ? `${SS.text.slice(0,4e3)}\n...` : SS.text;
+   return `The part I picked (${SS.path}, ${pI(SS)}):\n\`\`\`\n${HS}\n\`\`\``
```

#### 641. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12236` → after: `L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12236) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12236)

```diff
-       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${dL(kk)}`;
+       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${sI(SS)}`;
```

#### 642. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12238` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12238) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12238)

```diff
-       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${dL(kk)}`;
+       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${sI(SS)}`;
```

#### 643. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12240` → after: `L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12240) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12240)

```diff
-       return `${Fk.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${dL(kk)}`
+       return `${HS.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${sI(SS)}`
```

#### 644. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12249` → after: `L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12249) · [Before (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12249)

```diff
-       return `Explain ${Ik}`;
+       return `Explain ${gS}`;
```

#### 645. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12251` → after: `L12251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12251) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12251)

```diff
-       return `Fix ${Ik}`;
+       return `Fix ${gS}`;
```

#### 646. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12253` → after: `L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12253) · [Before (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12253)

```diff
-       return `${Fk.trim()} (${Ik})`
+       return `${HS.trim()} (${gS})`
```

#### 647. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12256-L12259` → after: `L12256-L12259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12256-L12259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12256-L12259) · [Before (L12256-L12259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12256-L12259)

```diff
- var gL = Ik(41385),
-   mL = Ik(4761),
-   hL = Ik(41369),
-   rL = Ik(41383),
+ var FI = gS(41390),
+   RI = gS(4887),
+   TI = gS(41372),
+   oI = gS(41381),
```

#### 648. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12286` → after: `L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12286) · [Before (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12286)

```diff
-     Ik = gL.e(gL.c(Tk), [...Tk.keys()], Sk(), {
+     gS = FI.i(FI.e(bS), [...bS.keys()], JS(), {
```

#### 649. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12308` → after: `L12308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12308) · [Before (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12308)

```diff
-   return Tk(kk), Xk && YI(Xk, kk) ? Xk : void 0
+   return bS(SS), tS && Mg(tS, SS) ? tS : void 0
```

#### 650. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12327` → after: `L12327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12327) · [Before (L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12327)

```diff
-   if (Xk) return `"${Xk}"`;
+   if (tS) return `"${tS}"`;
```

#### 651. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12332)

```diff
-   if (Tk.length > 0) return Tk.slice(0, 2).map((kk => `"${kk}"`)).join(" or ");
+   if (bS.length > 0) return bS.slice(0, 2).map((SS => `"${SS}"`)).join(" or ");
```

#### 652. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12342` → after: `L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12342) · [Before (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12342)

```diff
-   return yk ? `"${yk.option}"` : void 0
+   return xS ? `"${xS.option}"` : void 0
```

#### 653. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12368-L12369` → after: `L12368-L12369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12368-L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12368-L12369) · [Before (L12368-L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12368-L12369)

```diff
-       Ik = null !== (Lk = null === (tk = kk.split("\n")[Fk]) || void 0 === tk ? void 0 : tk.trim()) && void 0 !== Lk ? Lk : "",
-       Xk = Ik.length > 40 ? `${Ik.slice(0,37)}...` : Ik,
+       gS = null !== (IS = null === (fS = SS.split("\n")[HS]) || void 0 === fS ? void 0 : fS.trim()) && void 0 !== IS ? IS : "",
+       tS = gS.length > 40 ? `${gS.slice(0,37)}...` : gS,
```

#### 654. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12371` → after: `L12371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12371) · [Before (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12371)

```diff
-     ak.add(`Line ${Fk+1} stops all of this code from running: "${Xk}" (${Tk}).`)
+     qS.add(`Line ${HS+1} stops all of this code from running: "${tS}" (${bS}).`)
```

#### 655. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12379-L12381` → after: `L12379-L12381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12379-L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12379-L12381) · [Before (L12379-L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12379-L12381)

```diff
-         Ik = null !== (sk = null === (zk = kk.split("\n")[Fk]) || void 0 === zk ? void 0 : zk.trim()) && void 0 !== sk ? sk : "",
-         Xk = Ik.length > 40 ? `${Ik.slice(0,37)}...` : Ik;
-       ak.add(`Line ${Fk+1} never runs: "${Xk}" comes after a return, which ends the function first.`);
+         gS = null !== (wS = null === (ZS = SS.split("\n")[HS]) || void 0 === ZS ? void 0 : ZS.trim()) && void 0 !== wS ? wS : "",
+         tS = gS.length > 40 ? `${gS.slice(0,37)}...` : gS;
+       qS.add(`Line ${HS+1} never runs: "${tS}" comes after a return, which ends the function first.`);
```

#### 656. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12386` → after: `L12386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12386) · [Before (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12386)

```diff
-       const Fk = Nk.start + (null !== (vk = Nk.length) && void 0 !== vk ? vk : 0),
+       const HS = WS.start + (null !== (OS = WS.length) && void 0 !== OS ? OS : 0),
```

#### 657. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12389` → after: `L12389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12389) · [Before (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12389)

```diff
-         Tk = new RegExp(`^${Ik.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(kk),
+         bS = new RegExp(`^${gS.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(SS),
```

#### 658. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12392-L12393` → after: `L12392-L12393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12392-L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12392-L12393) · [Before (L12392-L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12392-L12393)

```diff
-         Lk = new RegExp(`//\\s*(?:const|let|var)\\s+${Ik.replaceAll("$","\\$")}\\b`).test(kk),
-         tk = new RegExp(`typeof\\s+${Ik.replaceAll("$","\\$")}\\b`).test(kk);
+         IS = new RegExp(`//\\s*(?:const|let|var)\\s+${gS.replaceAll("$","\\$")}\\b`).test(SS),
+         fS = new RegExp(`typeof\\s+${gS.replaceAll("$","\\$")}\\b`).test(SS);
```

#### 659. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12398` → after: `L12398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12398) · [Before (L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12398)

```diff
-       ak.add(ek ? `Line ${jk+1} uses "${Ik}", which is never set, so it throws there. Did you mean "${ek}"?` : `Line ${jk+1} uses "${Ik}", which isn't set there, so it throws when that line runs.`);
+       qS.add(KS ? `Line ${aS+1} uses "${gS}", which is never set, so it throws there. Did you mean "${KS}"?` : `Line ${aS+1} uses "${gS}", which isn't set there, so it throws when that line runs.`);
```

#### 660. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12404` → after: `L12404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12404) · [Before (L12404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12404)

```diff
-     const Ik = Nk.start + (null !== (jk = Nk.length) && void 0 !== jk ? jk : 0),
+     const gS = WS.start + (null !== (aS = WS.length) && void 0 !== aS ? aS : 0),
```

#### 661. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12411` → after: `L12411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12411) · [Before (L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12411)

```diff
-       ck = tk.length > 40 ? `${tk.slice(0,37)}...` : tk;
+       zS = fS.length > 40 ? `${fS.slice(0,37)}...` : fS;
```

#### 662. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12415-L12417` → after: `L12415-L12417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12415-L12417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12415-L12417) · [Before (L12415-L12417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12415-L12417)

```diff
-         Ik = null !== (Ok = null === kk || void 0 === kk || null === (nk = kk[1]) || void 0 === nk ? void 0 : nk.replace("-", " to ")) && void 0 !== Ok ? Ok : "a different number of",
-         Tk = Number(null !== (Gk = null === kk || void 0 === kk ? void 0 : kk[2]) && void 0 !== Gk ? Gk : Xk.arguments.length);
-       ak.add(`${ik} needs ${Ik} ${"1"===Ik?"value":"values"}, but this line gives it ${Tk}.`);
+         gS = null !== (cS = null === SS || void 0 === SS || null === (vS = SS[1]) || void 0 === vS ? void 0 : vS.replace("-", " to ")) && void 0 !== cS ? cS : "a different number of",
+         bS = Number(null !== (ES = null === SS || void 0 === SS ? void 0 : SS[2]) && void 0 !== ES ? ES : tS.arguments.length);
+       qS.add(`${XS} needs ${gS} ${"1"===gS?"value":"values"}, but this line gives it ${bS}.`);
```

#### 663. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12426` → after: `L12426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12426) · [Before (L12426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12426)

```diff
-         qk = (null !== (pk = null === kk || void 0 === kk ? void 0 : kk.properties) && void 0 !== pk ? pk : []).flatMap((kk => kk.name && (Sk().isIdentifier(kk.name) || Sk().isStringLiteral(kk.name)) ? [{
+         uS = (null !== (LS = null === SS || void 0 === SS ? void 0 : SS.properties) && void 0 !== LS ? LS : []).flatMap((SS => SS.name && (JS().isIdentifier(SS.name) || JS().isStringLiteral(SS.name)) ? [{
```

#### 664. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12430` → after: `L12430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12430) · [Before (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12430)

```diff
-         Lk = null !== (uk = null === (bk = Fk.match(/'([^']*)' does not exist/)) || void 0 === bk ? void 0 : bk[1]) && void 0 !== uk ? uk : ck,
+         IS = null !== (YS = null === (AS = HS.match(/'([^']*)' does not exist/)) || void 0 === AS ? void 0 : AS[1]) && void 0 !== YS ? YS : zS,
```

#### 665. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12432` → after: `L12432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12432) · [Before (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12432)

```diff
-         Zk = tk.length > 0 ? tk : [{
+         kS = fS.length > 0 ? fS : [{
```

#### 666. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12436)

```diff
-         jk = Ik ? ` It takes ${mI(lk,Ik)}.` : " Check Show Docs for its settings.";
+         aS = gS ? ` It takes ${Tg(NS,gS)}.` : " Check Show Docs for its settings.";
```

#### 667. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12442-L12443` → after: `L12442-L12443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12442-L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12442-L12443) · [Before (L12442-L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12442-L12443)

```diff
-         const kk = (0, Vk.d)(dl, Fk),
-           Ik = void 0 !== kk && yk.includes(kk) && !qk.some((Ik => Ik.name === kk || Ik.name !== Fk && (0, Vk.d)(dl, Ik.name) === kk));
+         const SS = (0, hS.c)(sN, HS),
+           gS = void 0 !== SS && xS.includes(SS) && !uS.some((gS => gS.name === SS || gS.name !== HS && (0, hS.c)(sN, gS.name) === SS));
```

#### 668. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12445` → after: `L12445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12445) · [Before (L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12445)

```diff
-         void 0 !== Tk && lk.getTypeAtLocation(Tk).getCallSignatures().length > 0 || yk.includes(Fk) || (Xk = Ik ? `"${kk}"` : qt(Fk, yk)), ak.add(`${ik} has no setting called "${Fk}".${Xk?` Did you mean ${Xk}?`:jk}`)
+         void 0 !== bS && NS.getTypeAtLocation(bS).getCallSignatures().length > 0 || xS.includes(HS) || (tS = gS ? `"${SS}"` : xf(HS, xS)), qS.add(`${XS} has no setting called "${HS}".${tS?` Did you mean ${tS}?`:aS}`)
```

#### 669. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12449` → after: `L12449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12449) · [Before (L12449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12449)

```diff
-     const Wk = null !== (ek = null === Lk || void 0 === Lk ? void 0 : Lk.initializer) && void 0 !== ek ? ek : Tk,
+     const US = null !== (KS = null === IS || void 0 === IS ? void 0 : IS.initializer) && void 0 !== KS ? KS : bS,
```

#### 670. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12453` → after: `L12453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12453) · [Before (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12453)

```diff
-       Yk = null !== (wk = null === Wk || void 0 === Wk ? void 0 : Wk.getText(yk)) && void 0 !== wk ? wk : tk,
+       MS = null !== (jS = null === US || void 0 === US ? void 0 : US.getText(xS)) && void 0 !== jS ? jS : fS,
```

#### 671. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12457` → after: `L12457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12457) · [Before (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12457)

```diff
-       const Fk = null === (Rk = new RegExp(`(?:^|[{,])\\s*${Ak.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(kk)) || void 0 === Rk ? void 0 : Rk[2];
+       const HS = null === (yS = new RegExp(`(?:^|[{,])\\s*${FS.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(SS)) || void 0 === yS ? void 0 : yS[2];
```

#### 672. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12460` → after: `L12460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12460) · [Before (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12460)

```diff
-         ak.add(`${ik} has no ${dk} called "${Fk}" (${Yk}).${kk?` Did you mean ${kk}?`:""}`)
+         qS.add(`${XS} has no ${BS} called "${HS}" (${MS}).${SS?` Did you mean ${SS}?`:""}`)
```

#### 673. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12466)

```diff
-       const kk = Wk && Sk().isStringLiteral(Wk) ? Wk : void 0,
+       const SS = US && JS().isStringLiteral(US) ? US : void 0,
```

#### 674. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12468-L12469` → after: `L12468-L12469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12468-L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12468-L12469) · [Before (L12468-L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12468-L12469)

```diff
-         Ik = kk && !Lk ? `${ik} has no ${dk} called ${Uk=ck,Uk.startsWith('"')?Uk:`"${Uk}"`}.` : `${ik} can't take ${ck} there.`;
-       ak.add(`${Ik}${Fk?` Did you mean ${Fk}?`:" Check Show Docs for what it takes."}`);
+         gS = SS && !IS ? `${XS} has no ${BS} called ${VS=zS,VS.startsWith('"')?VS:`"${VS}"`}.` : `${XS} can't take ${zS} there.`;
+       qS.add(`${gS}${HS?` Did you mean ${HS}?`:" Check Show Docs for what it takes."}`);
```

#### 675. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12474` → after: `L12474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12474) · [Before (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12474)

```diff
-       ak.add(`${ik} needs ${gk} in ${ck}: it takes ${mI(lk,fk)}.`);
+       qS.add(`${XS} needs ${RS} in ${zS}: it takes ${Tg(NS,pS)}.`);
```

#### 676. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12478` → after: `L12478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12478) · [Before (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12478)

```diff
-       ak.add(`${ik} can't take ${ck} there: it takes ${mI(lk,fk)}.`);
+       qS.add(`${XS} can't take ${zS} there: it takes ${Tg(NS,pS)}.`);
```

#### 677. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12484` → after: `L12484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12484) · [Before (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12484)

```diff
-       ak.add(`${ik} needs settings in { } there${kk?`, like ${kk}`:""}, not ${ck}.`);
+       qS.add(`${XS} needs settings in { } there${SS?`, like ${SS}`:""}, not ${zS}.`);
```

#### 678. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12489` → after: `L12489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12489) · [Before (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12489)

```diff
-       Dk = null !== (Pk = null === (Kk = lk.getResolvedSignature(Xk)) || void 0 === Kk || null === (Qk = Kk.parameters[rk]) || void 0 === Qk ? void 0 : Qk.name) && void 0 !== Pk ? Pk : "that part",
+       mS = null !== (PS = null === (QS = NS.getResolvedSignature(tS)) || void 0 === QS || null === (DS = QS.parameters[lS]) || void 0 === DS ? void 0 : DS.name) && void 0 !== PS ? PS : "that part",
```

#### 679. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12492` → after: `L12492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12492) · [Before (L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12492)

```diff
-     "string" === hk ? ak.add(`${ik} needs ${Dk} as text, but ${ck} is ${kF} here.`) : "number" === hk ? ak.add(`${ik} needs ${Dk} as a number, but ${ck} is ${kF} here.`) : ak.add(`${ik} can't take ${ck} there${fk?`: it takes ${mI(lk,fk)}`:". Check Show Docs for what it takes"}.`)
+     "string" === oS ? qS.add(`${XS} needs ${mS} as text, but ${zS} is ${rS} here.`) : "number" === oS ? qS.add(`${XS} needs ${mS} as a number, but ${zS} is ${rS} here.`) : qS.add(`${XS} can't take ${zS} there${pS?`: it takes ${Tg(NS,pS)}`:". Check Show Docs for what it takes"}.`)
```

#### 680. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12507` → after: `L12507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12507) · [Before (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12507)

```diff
-       ik = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk[1]) && void 0 !== Ik ? Ik : null === kk || void 0 === kk ? void 0 : kk[2];
+       XS = null !== (gS = null === SS || void 0 === SS ? void 0 : SS[1]) && void 0 !== gS ? gS : null === SS || void 0 === SS ? void 0 : SS[2];
```

#### 681. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12509` → after: `L12509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12509) · [Before (L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12509)

```diff
-     if (ik) Fk.set(ik, (null !== (Xk = Fk.get(ik)) && void 0 !== Xk ? Xk : 0) + 1)
+     if (XS) HS.set(XS, (null !== (tS = HS.get(XS)) && void 0 !== tS ? tS : 0) + 1)
```

#### 682. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12513` → after: `L12513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12513) · [Before (L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12513)

```diff
-     return Ik > 1 ? [`${Fk} is in the code ${Ik} times, so only the last one runs. Put them together in one ${Fk}.`] : []
+     return gS > 1 ? [`${HS} is in the code ${gS} times, so only the last one runs. Put them together in one ${HS}.`] : []
```

#### 683. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12522` → after: `L12522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12522) · [Before (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12522)

```diff
-       const Xk = null !== (Fk = null === (Ik = yk[kk]) || void 0 === Ik ? void 0 : Ik.trim()) && void 0 !== Fk ? Fk : "";
+       const tS = null !== (HS = null === (gS = xS[SS]) || void 0 === gS ? void 0 : gS.trim()) && void 0 !== HS ? HS : "";
```

#### 684. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12525` → after: `L12525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12525) · [Before (L12525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12525)

```diff
-         text: Xk.length > 50 ? `${Xk.slice(0,47)}...` : Xk
+         text: tS.length > 50 ? `${tS.slice(0,47)}...` : tS
```

#### 685. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12533` → after: `L12533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12533) · [Before (L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12533)

```diff
-       Fk = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${kk}\\s*\\(|^${kk}\\s*=`),
+       HS = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${SS}\\s*\\(|^${SS}\\s*=`),
```

#### 686. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12537` → after: `L12537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12537) · [Before (L12537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12537)

```diff
-   const Lk = null !== (Ik = null === (Xk = /"([^"]+)"/.exec(kk)) || void 0 === Xk ? void 0 : Xk[1]) && void 0 !== Ik ? Ik : null === (Tk = /^api\.[\w$]+/.exec(kk)) || void 0 === Tk ? void 0 : Tk[0];
+   const IS = null !== (gS = null === (tS = /"([^"]+)"/.exec(SS)) || void 0 === tS ? void 0 : tS[1]) && void 0 !== gS ? gS : null === (bS = /^api\.[\w$]+/.exec(SS)) || void 0 === bS ? void 0 : bS[0];
```

#### 687. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12541` → after: `L12541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12541) · [Before (L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12541)

```diff
-     jk = null !== (ik = Zk.find((kk => !tk.has(yk[kk])))) && void 0 !== ik ? ik : Zk[0];
+     aS = null !== (XS = kS.find((SS => !fS.has(xS[SS])))) && void 0 !== XS ? XS : kS[0];
```

#### 688. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12586` → after: `L12586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12586) · [Before (L12586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12586)

```diff
-     return [`Line ${Fk.getLineAndCharacterOfPosition(kk.at).line+1} uses "CONFIG.${kk.name}", but CONFIG has no ${kk.name}, so it is undefined there. Add ${kk.name} to CONFIG.`]
+     return [`Line ${HS.getLineAndCharacterOfPosition(SS.at).line+1} uses "CONFIG.${SS.name}", but CONFIG has no ${SS.name}, so it is undefined there. Add ${SS.name} to CONFIG.`]
```

#### 689. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12592` → after: `L12592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12592) · [Before (L12592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12592)

```diff
-   const Xk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== Fk.path && (0, wk.e)(Fk.path)),
+   const tS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== HS.path && (0, jS.f)(HS.path)),
```

#### 690. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12626` → after: `L12626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12626) · [Before (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12626)

```diff
-           Ik(null !== (kk = Tk.error) && void 0 !== kk ? kk : new Error("IndexedDB didn't open"))
+           gS(null !== (SS = bS.error) && void 0 !== SS ? SS : new Error("IndexedDB didn't open"))
```

#### 691. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12675` → after: `L12675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12675) · [Before (L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12675)

```diff
-           ak = Ik(void 0 === qk.result ? Xk : qk.result), lk.put(ak, Fk)
+           qS = gS(void 0 === uS.result ? tS : uS.result), NS.put(qS, HS)
```

#### 692. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12679` → after: `L12679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12679) · [Before (L12679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12679)

```diff
-   }(ri.g),
+   }(oX.e),
```

#### 693. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12682` → after: `L12682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12682) · [Before (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12682)

```diff
-       this.store = kk, this.signal = Fk, this.Gj = new Map
+       this.store = SS, this.signal = HS, this.ia = new Map
```

#### 694. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12689-L12690` → after: `L12689-L12690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12689-L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12689-L12690) · [Before (L12689-L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12689-L12690)

```diff
-         this.Gj.set(kk, Xk), Xk.then(Fk)
-       }))) && void 0 !== Ik ? Ik : () => {}
+         this.ia.set(SS, tS), tS.then(HS)
+       }))) && void 0 !== gS ? gS : () => {}
```

#### 695. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12719` → after: `L12719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12719) · [Before (L12719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12719)

```diff
-       this.Gj.set(kk, yk.then((kk => {
+       this.ia.set(SS, xS.then((SS => {
```

#### 696. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12738` → after: `L12738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12738) · [Before (L12738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12738)

```diff
-       this.Gj.set(kk, Xk.then((kk => {
+       this.ia.set(SS, tS.then((SS => {
```

#### 697. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12755` → after: `L12755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12755) · [Before (L12755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12755)

```diff
-           snapshots: await this.store.update(this.storeKey(kk), (kk => Fk(Vq(kk) ? kk : null))),
+           snapshots: await this.store.update(this.storeKey(SS), (SS => HS(Du(SS) ? SS : null))),
```

#### 698. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12766` → after: `L12766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12766) · [Before (L12766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12766)

```diff
-       return this.store.getItem(this.storeKey(kk)).then((kk => Vq(kk) ? kk : null)).catch((() => null))
+       return this.store.getItem(this.storeKey(SS)).then((SS => Du(SS) ? SS : null)).catch((() => null))
```

#### 699. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12769-L12770` → after: `L12769-L12770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12769-L12770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12769-L12770) · [Before (L12769-L12770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12769-L12770)

```diff
-       let Fk = this.Gj.get(kk);
-       return Fk || (Fk = this.store.getItem(this.storeKey(kk)).then((kk => Vq(kk) ? kk : [])).catch((() => [])), this.Gj.set(kk, Fk)), Fk
+       let HS = this.ia.get(SS);
+       return HS || (HS = this.store.getItem(this.storeKey(SS)).then((SS => Du(SS) ? SS : [])).catch((() => [])), this.ia.set(SS, HS)), HS
```

#### 700. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12773` → after: `L12773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12773) · [Before (L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12773)

```diff
-       return `worldCodeAiHistory:${kk}`
+       return `worldCodeAiHistory:${SS}`
```

#### 701. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12778` → after: `L12778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12778) · [Before (L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12778)

```diff
-       this.store = kk, this.signal = Fk, this.Gj = new Map
+       this.store = SS, this.signal = HS, this.ia = new Map
```

#### 702. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12786` → after: `L12786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12786) · [Before (L12786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12786)

```diff
-           return null !== (Ik = await this.read(kk)) && void 0 !== Ik ? Ik : Fk
+           return null !== (gS = await this.read(SS)) && void 0 !== gS ? gS : HS
```

#### 703. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12788-L12789` → after: `L12788-L12789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12788-L12789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12788-L12789) · [Before (L12788-L12789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12788-L12789)

```diff
-         this.Gj.set(kk, Xk), Xk.then(Fk)
-       }))) && void 0 !== Ik ? Ik : () => {}
+         this.ia.set(SS, tS), tS.then(HS)
+       }))) && void 0 !== gS ? gS : () => {}
```

#### 704. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12795` → after: `L12795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12795) · [Before (L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12795)

```diff
-       return this.update(kk, (kk => kk.includes(Fk) || kk.length >= 8 ? kk : [...kk, Fk]))
+       return this.update(SS, (SS => SS.includes(HS) || SS.length >= 8 ? SS : [...SS, HS]))
```

#### 705. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12807` → after: `L12807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12807) · [Before (L12807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12807)

```diff
-         const Tk = Fk(null !== (Xk = await this.read(kk)) && void 0 !== Xk ? Xk : Ik);
+         const bS = HS(null !== (tS = await this.read(SS)) && void 0 !== tS ? tS : gS);
```

#### 706. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12810` → after: `L12810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12810) · [Before (L12810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12810)

```diff
-       this.Gj.set(kk, Xk);
+       this.ia.set(SS, tS);
```

#### 707. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12818-L12819` → after: `L12818-L12819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12818-L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12818-L12819) · [Before (L12818-L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12818-L12819)

```diff
-       let Fk = this.Gj.get(kk);
-       return Fk || (Fk = this.read(kk).then((kk => null !== kk && void 0 !== kk ? kk : [])), this.Gj.set(kk, Fk)), Fk
+       let HS = this.ia.get(SS);
+       return HS || (HS = this.read(SS).then((SS => null !== SS && void 0 !== SS ? SS : [])), this.ia.set(SS, HS)), HS
```

#### 708. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12822` → after: `L12822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12822) · [Before (L12822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12822)

```diff
-       return `worldCodeAiNotes:${kk}`
+       return `worldCodeAiNotes:${SS}`
```

#### 709. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12834` → after: `L12834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12834) · [Before (L12834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12834)

```diff
-         return null !== (Fk = null === (Ik = Tk(kk)) || void 0 === Ik ? void 0 : Ik.content) && void 0 !== Fk ? Fk : ""
+         return null !== (HS = null === (gS = bS(SS)) || void 0 === gS ? void 0 : gS.content) && void 0 !== HS ? HS : ""
```

#### 710. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12842-L12843` → after: `L12842-L12843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12842-L12843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12842-L12843) · [Before (L12842-L12843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12842-L12843)

```diff
-       itemNames: null !== (kk = null === (Fk = Tk("itemNames")) || void 0 === Fk ? void 0 : Fk.raw) && void 0 !== kk ? kk : "",
-       blockNames: null !== (Ik = null === (Xk = Tk("blockNames")) || void 0 === Xk ? void 0 : Xk.raw) && void 0 !== Ik ? Ik : "",
+       itemNames: null !== (SS = null === (HS = bS("itemNames")) || void 0 === HS ? void 0 : HS.raw) && void 0 !== SS ? SS : "",
+       blockNames: null !== (gS = null === (tS = bS("blockNames")) || void 0 === tS ? void 0 : tS.raw) && void 0 !== gS ? gS : "",
```

#### 711. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12885` → after: `L12885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12885) · [Before (L12885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12885)

```diff
-       ...Ga.e,
+       ...vq.d,
```

#### 712. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12926` → after: `L12926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12926) · [Before (L12926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12926)

```diff
-   return Object.entries(null !== (Ik = kk.leftFiles) && void 0 !== Ik ? Ik : {}).every((kk => {
+   return Object.entries(null !== (gS = SS.leftFiles) && void 0 !== gS ? gS : {}).every((SS => {
```

#### 713. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12929` → after: `L12929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12929) · [Before (L12929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12929)

```diff
-     return (null !== (Ik = Fk[Xk]) && void 0 !== Ik ? Ik : "") === Tk
+     return (null !== (gS = HS[tS]) && void 0 !== gS ? gS : "") === bS
```

#### 714. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12934` → after: `L12934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12934) · [Before (L12934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12934)

```diff
- function ht(kk) {
+ function of(SS) {
```

#### 715. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12938-L12939` → after: `L12938-L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12938-L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12938-L12939) · [Before (L12938-L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12938-L12939)

```diff
-     return Ik.length > 0 && Ik.every((kk => void 0 !== kk && (void 0 === Fk || Fk.some((Fk => Oa(Fk, [kk]) !== Fk))))) ? Ik : void 0
-   }(null !== (Fk = kk.warnings) && void 0 !== Fk ? Fk : [], kk.changes.map((kk => kk.after)))
+     return gS.length > 0 && gS.every((SS => void 0 !== SS && (void 0 === HS || HS.some((HS => dq(HS, [SS]) !== HS))))) ? gS : void 0
+   }(null !== (HS = SS.warnings) && void 0 !== HS ? HS : [], SS.changes.map((SS => SS.after)))
```

#### 716. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12965` → after: `L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12965) · [Before (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12965)

```diff
-     bk = null !== (Fk = Zk.warnings) && void 0 !== Fk ? Fk : [],
+     AS = null !== (HS = kS.warnings) && void 0 !== HS ? HS : [],
```

#### 717. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12968` → after: `L12968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12968) · [Before (L12968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12968)

```diff
-     Ck = null !== (Ik = null === (Tk = Zk.swappedTo) || void 0 === Tk ? void 0 : Tk[0]) && void 0 !== Ik ? Ik : Rk ? null !== (ak = null === (qk = /"([^"]+)"/.exec(bk[0])) || void 0 === qk ? void 0 : qk[1]) && void 0 !== ak ? ak : null === (Lk = /^api\.[\w$]+/.exec(bk[0])) || voi … [truncated]
+     iS = null !== (gS = null === (bS = kS.swappedTo) || void 0 === bS ? void 0 : bS[0]) && void 0 !== gS ? gS : yS ? null !== (qS = null === (uS = /"([^"]+)"/.exec(AS[0])) || void 0 === uS ? void 0 : uS[1]) && void 0 !== qS ? qS : null === (IS = /^api\.[\w$]+/.exec(AS[0])) || voi … [truncated]
```

#### 718. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12973` → after: `L12973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12973) · [Before (L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12973)

```diff
-       return new Map((null !== (kk = Zk.warnings) && void 0 !== kk ? kk : []).map((kk => [kk, 1 === Zk.changes.length && Fk ? et(kk, Fk) : void 0])))
+       return new Map((null !== (SS = kS.warnings) && void 0 !== SS ? SS : []).map((SS => [SS, 1 === kS.changes.length && HS ? ff(SS, HS) : void 0])))
```

#### 719. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12977` → after: `L12977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12977) · [Before (L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12977)

```diff
-       return null !== (Fk = null === (Ik = ck.get(kk)) || void 0 === Ik ? void 0 : Ik.line) && void 0 !== Fk ? Fk : kk
+       return null !== (HS = null === (gS = zS.get(SS)) || void 0 === gS ? void 0 : gS.line) && void 0 !== HS ? HS : SS
```

#### 720. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12980` → after: `L12980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12980) · [Before (L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12980)

```diff
-     Bk = (0, Xk.useMemo)((() => Rk && void 0 !== ht(Zk)), [Rk, Zk]),
+     sS = (0, tS.useMemo)((() => yS && void 0 !== of(kS)), [yS, kS]),
```

#### 721. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12986` → after: `L12986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12986) · [Before (L12986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12986)

```diff
-     Yk((kk => 0 === kk.size ? kk : new Set))
+     MS((SS => 0 === SS.size ? SS : new Set))
```

#### 722. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12998` → after: `L12998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L12998) · [Before (L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L12998)

```diff
-         const Ik = new Set((null !== (Fk = mk.get(kk.path)) && void 0 !== Fk ? Fk : []).filter((Fk => !dk.has(`${kk.path}:${Fk.index}`))).map((kk => kk.index))),
+         const gS = new Set((null !== (HS = TS.get(SS.path)) && void 0 !== HS ? HS : []).filter((HS => !BS.has(`${SS.path}:${HS.index}`))).map((SS => SS.index))),
```

#### 723. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13004` → after: `L13004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13004) · [Before (L13004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13004)

```diff
-             return `${Xk.join("\n")}${Tk}`
+             return `${tS.join("\n")}${bS}`
```

#### 724. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13026` → after: `L13026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13026) · [Before (L13026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13026)

```diff
-       title: TF ? `Editing code: ${iF}` : `Code change: ${iF}`,
+       title: tH ? `Editing code: ${bH}` : `Code change: ${bH}`,
```

#### 725. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13046` → after: `L13046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13046) · [Before (L13046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13046)

```diff
-           }(IF ? null !== (Fk = IF.find((Fk => Fk.path === kk.path))) && void 0 !== Fk ? Fk : {
+           }(HH ? null !== (HS = HH.find((HS => HS.path === SS.path))) && void 0 !== HS ? HS : {
```

#### 726. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13049` → after: `L13049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13049) · [Before (L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13049)

```diff
-           } : kk), ik = null !== (Ik = mk.get(kk.path)) && void 0 !== Ik ? Ik : [], lk = "offered" !== Ok && "applied" !== Ok || "" === kk.before ? [] : function(kk, Fk) {
+           } : SS), XS = null !== (gS = TS.get(SS.path)) && void 0 !== gS ? gS : [], NS = "offered" !== cS && "applied" !== cS || "" === SS.before ? [] : function(SS, HS) {
```

#### 727. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13062` → after: `L13062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13062) · [Before (L13062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13062)

```diff
-                 children: 1 === Xk ? "1 line added" : `${Xk} lines added`
+                 children: 1 === tS ? "1 line added" : `${tS} lines added`
```

#### 728. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13070-L13072` → after: `L13070-L13072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13070-L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13070-L13072) · [Before (L13070-L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13070-L13072)

```diff
-                 const Ik = `${kk.path}:${Fk.index}`,
-                   Xk = [Fk.added.length > 0 ? `+${Fk.added.length}` : "", Fk.removed.length > 0 ? `\u2212${Fk.removed.length}` : ""].filter(Boolean).join(" "),
-                   Tk = [Fk.added.length > 0 ? `${Fk.added.length} ${1===Fk.added.length?"line":"lines"} added` : "", Fk.removed.length > 0 ? `${Fk.removed.length} taken out` : ""].filter(Boolean).join(", ");
+                 const gS = `${SS.path}:${HS.index}`,
+                   tS = [HS.added.length > 0 ? `+${HS.added.length}` : "", HS.removed.length > 0 ? `\u2212${HS.removed.length}` : ""].filter(Boolean).join(" "),
+                   bS = [HS.added.length > 0 ? `${HS.added.length} ${1===HS.added.length?"line":"lines"} added` : "", HS.removed.length > 0 ? `${HS.removed.length} taken out` : ""].filter(Boolean).join(", ");
```

#### 729. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13098` → after: `L13098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13098) · [Before (L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13098)

```diff
-                       children: `${Xk} ${Fk.added.length+Fk.removed.length===1?"line":"lines"}`
+                       children: `${tS} ${HS.added.length+HS.removed.length===1?"line":"lines"}`
```

#### 730. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13114` → after: `L13114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13114) · [Before (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13114)

```diff
-               children: Dk ? `Hide the ${ik.length} parts` : `Show the ${ik.length} parts that went in`
+               children: mS ? `Hide the ${XS.length} parts` : `Show the ${XS.length} parts that went in`
```

#### 731. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13127` → after: `L13127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13127) · [Before (L13127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13127)

```diff
-               }, `${kk.path}:${Fk.index}`)))
+               }, `${SS.path}:${HS.index}`)))
```

#### 732. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13137` → after: `L13137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13137) · [Before (L13137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13137)

```diff
-                 const Ik = null !== (Fk = FL(kk)) && void 0 !== Fk ? Fk : jL(kk);
+                 const gS = null !== (HS = ru(SS)) && void 0 !== HS ? HS : fI(SS);
```

#### 733. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13139` → after: `L13139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13139) · [Before (L13139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13139)

```diff
-               })).join(", "), lk.length > 6 ? ` and ${lk.length-6} more` : "", ".", " ", (0, yk.jsx)("code", {
+               })).join(", "), NS.length > 6 ? ` and ${NS.length-6} more` : "", ".", " ", (0, xS.jsx)("code", {
```

#### 734. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13164-L13165` → after: `L13164-L13165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13164-L13165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13164-L13165) · [Before (L13164-L13165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13164-L13165)

```diff
-           children: Nk ? 1 === Wk ? `${fk?`Line ${fk.line}`:"This line"} ${Uk?"will":"would"} never work:` : `${Wk} lines ${Uk?"will":"would"} never work:` : 1 === Wk ? `${fk?`Line ${fk.line}`:"This line"} ${Uk?"will":"would"} break:` : `${Wk} lines ${Uk?"will":"would"} break:`
-         }), (pk ? bk : bk.slice(0, 1)).map(((kk, Fk, Ik) => {
+           children: WS ? 1 === US ? `${pS?`Line ${pS.line}`:"This line"} ${VS?"will":"would"} never work:` : `${US} lines ${VS?"will":"would"} never work:` : 1 === US ? `${pS?`Line ${pS.line}`:"This line"} ${VS?"will":"would"} break:` : `${US} lines ${VS?"will":"would"} break:`
+         }), (LS ? AS : AS.slice(0, 1)).map(((SS, HS, gS) => {
```

#### 735. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13172` → after: `L13172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/90.js#L13172) · [Before (L13172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/90.js#L13172)

```diff
-               children: [Wk > 1 && `Line ${ik.line}: `, (0, yk.jsx)("code", {
+               children: [US > 1 && `Line ${XS.line}: `, (0, xS.jsx)("code", {
```
