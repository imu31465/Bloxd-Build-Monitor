# Changed — Bundle Modifications Report (Part 034 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `34 / 69` (**355** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 033](part-033.md) · [Part 035 →](part-035.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/94.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/94.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8)

#### 9. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L54-L58` → after: `L29254-L29265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R29254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L29254-L29265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L29254-L29265) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L54-L58)

```diff
-         if (!zC) return ZC(CC, FC, wC);
-         const WC = ZC(CC).then(FC);
-         return WC.catch((CC => {
-           null === wC || void 0 === wC || wC(CC)
-         })), WC
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

#### 10. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L60-L74` → after: `L29267-L29307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R29267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L29267-L29307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L29267-L29307) · [Before (L60-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L60-L74)

```diff
-     }(0, QC.h)(NC);
-     const gC = wC.Howl.prototype,
-       SC = gC.init;
-     gC.init = function(CC) {
-       return wC.Howler.volume(), bC.ctx && MC(bC.ctx), SC.call(this, CC)
-     };
-     const pC = gC.unload;
-     gC.unload = function() {
-       const CC = this._src,
-         zC = pC.call(this);
-       if ("string" !== typeof CC) return zC;
-       const ZC = nC.get(CC);
-       return void 0 !== ZC && function(CC) {
-         return !bC._howls.some((zC => zC._src === CC || "string" === typeof zC._src && CC.indexOf(zC._src) >= 0))
-       }(CC) && (nC.delete(CC), fC -= ZC), zC
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

#### 11. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L77-L82` → after: `L29310-L38882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R29310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L29310-L38882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L29310-L38882) · [Before (L77-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L77-L82)

```diff
-   4797: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       Howl: () => wC.Howl,
-       Howler: () => wC.Howler,
-       musicOutput: () => pC,
-       readyAudioContext: () => PC
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

#### 12. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L84-L87` → after: `L38884-L38895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R38884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L38884-L38895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L38884-L38895) · [Before (L84-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L84-L87)

```diff
-     var QC, wC = ZC(4801),
-       bC = ZC(3419),
-       nC = ZC(4587);
-     const fC = wC.Howler;
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L96-L100` → after: `L38899-L38903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R38899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L38899-L38903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L38899-L38903) · [Before (L96-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L96-L100)

```diff
-         QC = new AudioContext({
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

#### 14. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L105-L113` → after: `L38906-L38920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R38906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L38906-L38920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L38906-L38920) · [Before (L105-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L105-L113)

```diff
-     fC._mobileUnloaded = !0;
-     const qC = fC.volume.bind(wC.Howler);
-     fC.volume = function() {
-       return oC(), qC(...arguments)
-     };
-     const FC = fC.mute.bind(wC.Howler);
-     fC.mute = CC => (oC(), FC(CC));
-     const WC = wC.Howl.prototype,
-       NC = WC.init;
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

#### 15. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L116-L118` → after: `L38923-L38944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R38923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L38923-L38944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L38923-L38944) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L116-L118)

```diff
-       for (; fC._html5AudioPool.length < fC.html5PoolSize;) {
-         const CC = new Audio;
-         CC._unlocked = !0, fC._releaseHtml5Audio(CC)
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

#### 16. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L128-L145` → after: `L38947-L39026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R38947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L38947-L39026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L38947-L39026) · [Before (L128-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L128-L145)

```diff
-     WC.init = function(CC) {
-       return oC(), NC.call(this, CC)
-     }, (0, nC.h)() && (fC._unlockAudio = () => {
-       const CC = fC.ctx;
-       if (fC._audioUnlocked || !CC) return;
-       fC.autoUnlock = !1;
-       const zC = CC.createBuffer(1, 1, 22050);
-       fC._scratchBuffer = zC;
-       const ZC = new AbortController;
-       let QC = "afterPaint";
-       const wC = () => {
-           var QC;
-           if (fC._audioUnlocked) return;
-           null === (QC = fC._autoResume) || void 0 === QC || QC.call(fC);
-           const wC = CC.createBufferSource();
-           wC.buffer = zC, wC.connect(CC.destination), wC.start(0), CC.resume().catch((() => {})), wC.onended = () => {
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

#### 17. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L147-L150` → after: `L39028-L39075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R39028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L39028-L39075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L39028-L39075) · [Before (L147-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L147-L150)

```diff
-         },
-         oC = () => {
-           MC(), wC()
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

#### 18. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L152-L157` → after: `L39077-L39079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R39077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L39077-L39079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L39077-L39079) · [Before (L152-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L152-L157)

```diff
-           if (MC(), "inTap" === QC) {
-             if ("running" === CC.state) return;
-             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), wC()
-           } else "afterPaint" === QC && (QC = "queued", (0, bC.c)(zC.timeStamp, (() => {
-             QC = "inTap", wC()
-           })))
+           try {
+             qp(Up, Ap, [pp])
+           } catch {}
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L159-L165` → after: `L39081-L39262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R39081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L39081-L39262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L39081-L39262) · [Before (L159-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L159-L165)

```diff
-       for (const bC of ["touchstart", "touchend"]) document.addEventListener(bC, oC, {
-         capture: !0,
-         signal: ZC.signal
-       });
-       for (const bC of nC.c) document.addEventListener(bC, qC, {
-         capture: !0,
-         signal: ZC.signal
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

#### 20. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L168-L169` → after: `L39387-L39388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R39387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L39387-L39388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L39387-L39388) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L168-L169)

```diff
-     let gC = 0;
-     const SC = null === (QC = fC._autoSuspend) || void 0 === QC ? void 0 : QC.bind(wC.Howler);
+     var Op = cp(2963);
+     const op = ["none", "idle", "now"];
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L172-L182` → after: `L39391-L39397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R39391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L39391-L39397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L39391-L39397) · [Before (L172-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L172-L182)

```diff
-       PC();
-       const {
-         ctx: CC,
-         masterGain: zC
-       } = fC;
-       return CC && zC ? {
-         ctx: CC,
-         destination: zC,
-         holdAwake: CC => {
-           var zC, ZC;
-           (gC += CC ? 1 : -1, CC) ? null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC): null === (ZC = fC._autoSuspend) || void 0 === ZC || ZC.call(fC)
+       const pp = () => (0, Op.H)();
+       return {
+         memoryBytes: () => (0, Op.z)().buffer.byteLength,
+         reserveUpFront: ip => pp().kA(ip),
+         reserveAhead: ip => pp().jA(ip),
+         setCeiling: ip => {
+           pp().mA(ip)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L184-L188` → after: `L39399-L39455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R39399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L39399-L39455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L39399-L39455) · [Before (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L184-L188)

```diff
-         wake: () => {
-           var zC;
-           "running" !== CC.state && (null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC), CC.resume().catch((() => {})))
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

#### 23. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L192-L193` → after: `L39469-L39487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R39469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L39469-L39487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L39469-L39487) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L192-L193)

```diff
-       var CC;
-       (fC.volume(), fC.ctx && fC.autoUnlock) && (null === (CC = fC._unlockAudio) || void 0 === CC || CC.call(fC))
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/95.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/95.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372)

#### 1. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/95.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/95.js#L2)

```diff
- export const ids = [93, 94, 95];
+ export const ids = [95];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L4-L222` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/95.js#L4) · [Before (L4-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/95.js#L4-L222)

```diff
-   36502: (CC, zC, ZC) => {
-     function QC(CC, zC, ZC, QC) {
-       return !(ZC && !CC.aimable) && (!zC || CC.gun && "head" !== QC)
-     }
- 
-     function wC(CC) {
-       return Math.max(.1 * CC, 1)
-     }
- 
-     function bC(CC, zC) {
-       return !CC && zC
-     }
-     ZC.d(zC, {
-       c: () => bC,
-       e: () => wC,
-       g: () => QC
- ... (203 more removed lines; see GitHub link above)
+   4974: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L229-L231` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/95.js#L11-L13) · [Before (L229-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/95.js#L229-L231)

```diff
-     var QC, wC = ZC(4801),
-       bC = ZC(3419),
-       nC = ZC(4587);
+     var Op, op = cp(4977),
+       Ip = cp(3546),
+       Sp = cp(4743);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L236` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/95.js#L18) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/95.js#L236)

```diff
-       if (fC.ctx || !fC.usingWebAudio || "undefined" === typeof AudioContext || !(0, nC.h)()) return;
+       if (xp.ctx || !xp.usingWebAudio || "undefined" === typeof AudioContext || !(0, Sp.f)()) return;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L248` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/95.js#L30) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/95.js#L248)

```diff
-       wC.gain.setValueAtTime(fC._muted ? 0 : null !== (CC = fC._volume) && void 0 !== CC ? CC : 1, QC.currentTime), wC.connect(QC.destination), fC.ctx = QC, fC.masterGain = wC, null === (zC = fC._setup) || void 0 === zC || zC.call(fC)
+       op.gain.setValueAtTime(xp._muted ? 0 : null !== (pp = xp._volume) && void 0 !== pp ? pp : 1, Op.currentTime), op.connect(Op.destination), xp.ctx = Op, xp.masterGain = op, null === (ip = xp._setup) || void 0 === ip || ip.call(xp)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L275` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/95.js#L57) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/95.js#L275)

```diff
-     }, (0, nC.h)() && (fC._unlockAudio = () => {
+     }, (0, Sp.f)() && (xp._unlockAudio = () => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L300` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/95.js#L82) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/95.js#L300)

```diff
-           } else "afterPaint" === QC && (QC = "queued", (0, bC.c)(zC.timeStamp, (() => {
+           } else "afterPaint" === Op && (Op = "queued", (0, Ip.e)(ip.timeStamp, (() => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/96.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/96.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/96.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/96.js#L3)

```diff
- export const ids = [96];
+ export const ids = [95, 96];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L5-L68` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/96.js#L4-L40) · [Before (L5-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/96.js#L5-L68)

```diff
-   4801: (CC, zC, ZC) => {
-     var QC;
-     ! function() {
-       var wC = function() {
-         this.init()
-       };
-       wC.prototype = {
-         init: function() {
-           var CC = this || bC;
-           return CC._counter = 1e3, CC._html5AudioPool = [], CC.html5PoolSize = 10, CC._codecs = {}, CC._howls = [], CC._muted = !1, CC._volume = 1, CC._canPlayEvent = "canplaythrough", CC._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, C … [truncated]
-         },
-         volume: function(CC) {
-           var zC = this || bC;
-           if (CC = parseFloat(CC), zC.ctx || MC(), "undefined" !== typeof CC && CC >= 0 && CC <= 1) {
-             if (zC._volume = CC, zC._muted) return zC;
-             zC.usingWebAudio && zC.masterGain.gain.setValueAtTime(CC, bC.ctx.currentTime);
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

#### 3. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L70-L125` → after: `L42-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/96.js#L42-L50) · [Before (L70-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/96.js#L70-L125)

```diff
-             zC = "undefined" !== typeof Audio ? new Audio : null
-           } catch (FC) {
-             return CC
-           }
-           if (!zC || "function" !== typeof zC.canPlayType) return CC;
-           var ZC = zC.canPlayType("audio/mpeg;").replace(/^no$/, ""),
-             QC = CC._navigator ? CC._navigator.userAgent : "",
-             wC = QC.match(/OPR\/([0-6].)/g),
-             nC = wC && parseInt(wC[0].split("/")[1], 10) < 33,
-             fC = -1 !== QC.indexOf("Safari") && -1 === QC.indexOf("Chrome"),
-             oC = QC.match(/Version\/(.*?) /),
-             qC = fC && oC && parseInt(oC[1], 10) < 15;
-           return CC._codecs = {
-             mp3: !(nC || !ZC && !zC.canPlayType("audio/mp3;").replace(/^no$/, "")),
-             mpeg: !!ZC,
-             opus: !!zC.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
- ... (40 more removed lines; see GitHub link above)
+             null === Op || void 0 === Op || Op(pp)
+           } finally {
+             const cp = ip.find((pp => "loaded" === pp._state));
+             void 0 !== cp && "string" === typeof cp._src && function(pp, ip, cp) {
+               var Op;
+               xp += cp - (null !== (Op = Sp.get(ip)) && void 0 !== Op ? Op : 0), Sp.set(ip, cp);
+               const op = Yp.get(pp);
+               void 0 !== op && Lp[op]++
+             }(cp, cp._src, pp.length * pp.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L730-L733` → after: `L54-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L54-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/96.js#L54-L186) · [Before (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/96.js#L730-L733)

```diff
-       void 0 === (QC = function() {
-         return {
-           Howler: bC,
-           Howl: nC
+         if (!ip) return cp(pp, Dp, op);
+         const Ap = cp(pp).then(Dp);
+         return Ap.catch((pp => {
+           null === op || void 0 === op || op(pp)
+         })), Ap
+       }
+     }(0, Op.h)(Pp);
+     const yp = op.Howl.prototype,
+       Up = yp.init;
+     yp.init = function(pp) {
+       return op.Howler.volume(), Ip.ctx && Wp(Ip.ctx), Up.call(this, pp)
+     };
+     const wp = yp.unload;
+     yp.unload = function() {
+       const pp = this._src,
+         ip = wp.call(this);
+ ... (117 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L735-L737` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/96.js#L188-L191) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/96.js#L735-L737)

```diff
-       }.apply(zC, [])) || (CC.exports = QC), zC.Howler = bC, zC.Howl = nC, "undefined" !== typeof ZC.g ? (ZC.g.HowlerGlobal = wC, ZC.g.Howler = bC, ZC.g.Howl = nC, ZC.g.Sound = fC) : "undefined" !== typeof window && (window.HowlerGlobal = wC, window.Howler = bC, window.Howl = nC, … [truncated]
-     }(),
-     function() {
+       } : null
+     }
+ 
+     function vp() {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L739-L893` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/96.js#L193-L195) · [Before (L739-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/96.js#L739-L893)

```diff
-       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(CC) {
-         var zC = this;
-         if (!zC.ctx || !zC.ctx.listener) return zC;
-         for (var ZC = zC._howls.length - 1; ZC >= 0; ZC--) zC._howls[ZC].stereo(CC);
-         return zC
-       }, HowlerGlobal.prototype.pos = function(CC, zC, ZC) {
-         var QC = this;
-         return QC.ctx && QC.ctx.listener ? (zC = "number" !== typeof zC ? QC._pos[1] : zC, ZC = "number" !== typeof ZC ? QC._pos[2] : ZC, "number" !== typeof CC ? QC._pos : (QC._pos = [CC, zC, ZC], "undefined" !== typeof QC.ctx.listener.positionX ? (QC.ctx.listener.positionX.setT … [truncated]
-       }, HowlerGlobal.prototype.orientation = function(CC, zC, ZC, QC, wC, bC) {
-         var nC = this;
-         if (!nC.ctx || !nC.ctx.listener) return nC;
-         var fC = nC._orientation;
-         return zC = "number" !== typeof zC ? fC[1] : zC, ZC = "number" !== typeof ZC ? fC[2] : ZC, QC = "number" !== typeof QC ? fC[3] : QC, wC = "number" !== typeof wC ? fC[4] : wC, bC = "number" !== typeof bC ? fC[5] : bC, "number" !== typeof CC ? fC : (nC._orientation = [CC, z … [truncated]
-       }, Howl.prototype.init = (CC = Howl.prototype.init, function(zC) {
-         var ZC = this;
-         return ZC._orientation = zC.orientation || [1, 0, 0], ZC._stereo = zC.stereo || null, ZC._pos = zC.pos || null, ZC._pannerAttr = {
- ... (139 more removed lines; see GitHub link above)
+       (xp.volume(), xp.ctx && xp.autoUnlock) && (null === (pp = xp._unlockAudio) || void 0 === pp || pp.call(xp))
+     }
+     Up && (xp._autoSuspend = () => yp > 0 ? op.Howler : Up())
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/97.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/97.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/97.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/97.js#L2)

```diff
- export const ids = [97];
+ export const ids = [95, 96, 97];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4` → after: `L4-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/97.js#L4-L61) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/97.js#L4)

```diff
-   4807: (CC, zC, ZC) => {
+   36819: (pp, ip, cp) => {
+     function Op(pp, ip, cp, Op) {
+       return !(cp && !pp.aimable) && (!ip || pp.gun && "head" !== Op)
+     }
+ 
+     function op(pp) {
+       return Math.max(.1 * pp, 1)
+     }
+ 
+     function Ip(pp, ip) {
+       return !pp && ip
+     }
+     cp.d(ip, {
+       d: () => Ip,
+       e: () => op,
+       h: () => Op
+ ... (42 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L6-L16` → after: `L63-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L63-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/97.js#L63-L70) · [Before (L6-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/97.js#L6-L16)

```diff
-       default: () => tC
-     });
-     var QC = ZC(48),
-       wC = ZC(1463),
-       bC = ZC(326),
-       nC = ZC(1178),
-       fC = ZC(1542),
-       oC = ZC(1211),
-       qC = ZC(1479),
-       FC = ZC(1439),
-       WC = ZC(2657);
+       countDecodesAs: () => Ap,
+       decodedAudio: () => Pp
+     });
+     var Op = cp(3363),
+       op = cp(4974);
+     const Ip = op.Howler,
+       Sp = new Map;
+     let xp = 0;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L18-L19` → after: `L72-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L72-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/97.js#L72-L121) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/97.js#L18-L19)

```diff
-       retries: 2,
-       minTimeout: 2e3
+         song: 0,
+         sheet: 0
+       },
+       Yp = new WeakMap,
+       Dp = new WeakSet;
+ 
+     function Ap(pp, ip) {
+       return Yp.set(pp, ip), pp
+     }
+ 
+     function Pp() {
+       return {
+         bytes: xp,
+         songsDecoded: Lp.song,
+         sheetsDecoded: Lp.sheet
+       }
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L21-L47` → after: `L123-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L123-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/97.js#L123-L353) · [Before (L21-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/97.js#L21-L47)

```diff
-     var MC = ZC(1072),
-       gC = ZC(1540),
-       SC = ZC(1076),
-       pC = ZC(1811),
-       PC = ZC(1143),
-       GC = ZC(1169),
-       RC = ZC(3448),
-       AC = ZC(1295),
-       xC = ZC(1388),
-       JC = ZC(1453),
-       IC = ZC(2595),
-       iC = ZC(2612),
-       vC = ZC(4811),
-       eC = ZC(2086),
-       hC = ZC(1002),
-       KC = ZC.n(hC),
- ... (11 more removed lines; see GitHub link above)
+     const wp = yp.unload;
+     yp.unload = function() {
+       const pp = this._src,
+         ip = wp.call(this);
+       if ("string" !== typeof pp) return ip;
+       const cp = Sp.get(pp);
+       return void 0 !== cp && function(pp) {
+         return !Ip._howls.some((ip => ip._src === pp || "string" === typeof ip._src && pp.indexOf(ip._src) >= 0))
+       }(pp) && (Sp.delete(pp), xp -= cp), ip
+     }
+   },
+   36980: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Lp
+     });
+     var Op = cp(25),
+ ... (215 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L50-L70` → after: `L356-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L356-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/97.js#L356-L403) · [Before (L50-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/97.js#L50-L70)

```diff
-       let {
-         icon: zC,
-         label: ZC,
-         value: QC
-       } = CC;
-       return (0, rC.jsxs)("div", {
-         className: "PlayerProfileStat",
-         children: [(0, rC.jsx)(YC.c, {
-           name: zC,
-           className: "PlayerProfileStatIcon"
-         }), (0, rC.jsxs)("div", {
-           className: "PlayerProfileStatText",
-           children: [(0, rC.jsx)("div", {
-             className: "PlayerProfileStatLabel SmallTextLight",
-             children: ZC
-           }), (0, rC.jsx)("div", {
- ... (5 more removed lines; see GitHub link above)
+       return pp.replace(/[_\-\s]*\d+$/, "") || pp
+     }
+ 
+     function op(pp, ip, cp) {
+       return cp <= 0 ? 0 : pp * cp / Math.max(ip, cp)
+     }
+ 
+     function Ip(pp, ip) {
+       const cp = pp.getDurationMs();
+       return cp > 0 ? pp.loudness * Math.max(0, 1 - (ip - pp.startMs) / cp) : 0
+     }
+     class Sp {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
+         this.maxVoices = pp, this.maxPerGroup = ip, this.voices = []
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L74-L145` → after: `L407-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L407-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/97.js#L407-L420) · [Before (L74-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/97.js#L74-L145)

```diff
-       let {
-         profile: zC
-       } = CC;
-       const {
-         t: ZC,
-         selectedLanguage: QC
-       } = (0, PC.y)();
-       let wC = ZC("homePage:profileUnknown");
-       if (zC.lastOnline) {
-         const CC = (0, PC.m)(QC.code, "homePage:profileTimeAgo");
-         wC = ZC("homePage:profileTimeAgo", {
-           time: (0, bC.U)(CC, zC.lastOnline, Date.now())
-         })
-       }
-       let nC = ZC("homePage:profileUnknown");
-       return zC.accountCreatedAt && (nC = new Date(zC.accountCreatedAt).toLocaleDateString(void 0, {
- ... (56 more removed lines; see GitHub link above)
+       pp !== Ip && (Ip = pp, Op.m.GA(op, pp))
+     }
+   },
+   37001: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip,
+       c: () => Sp,
+       g: () => Op
+     });
+     class Op {
+       constructor(pp) {
+         this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = pp
+       }
+       setMultiplierType(pp, ip) {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L147-L419` → after: `L422-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L422-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/97.js#L422-L424) · [Before (L147-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/97.js#L147-L419)

```diff
-         if (yC) return;
-         if (!TC) return void Cz({
-           status: "notFound",
-           playerKey: tC
-         });
-         const zC = "urlId" in TC && (null === (CC = UC.current) || void 0 === CC ? void 0 : CC.urlId) === TC.urlId && BC.current === jC;
-         if (zC && OC.current) return;
-         const ZC = zC ? null : iC.b.peek(jC, TC);
-         let QC = !1;
-         const wC = CC => "loaded" === CC.status && (CC.playerKey === tC || "urlId" in TC && CC.profile.urlId === TC.urlId);
-         return ZC ? (BC.current = jC, OC.current = !1, Cz({
-           status: "loaded",
-           profile: ZC,
-           playerKey: tC
-         }), iC.b.invalidate(TC)) : Cz((CC => wC(CC) ? CC : {
-           status: "loading"
- ... (257 more removed lines; see GitHub link above)
+         this.multipliers[pp] = ip, null === (cp = this._onUpdate) || void 0 === cp || cp.call(this)
+       }
+       removeMultiplier(pp) {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L421-L543` → after: `L426-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L426-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/97.js#L426-L507) · [Before (L421-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/97.js#L421-L543)

```diff
-         if (!wC || !WC) return;
-         FC.NotificationProvider.showInputPopup({
-           title: "homePage:profileSocialLinkEditTitle",
-           textOpts: {
-             title: {
-               platform: pC.name
-             }
-           },
-           prefixText: bC.s[zC],
-           placeholderText: "playBloxd",
-           initialValue: null !== (CC = null === ZC || void 0 === ZC ? void 0 : ZC.handle) && void 0 !== CC ? CC : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: ZC ? "general:remove" : void 0
-         }).getResult().then((async CC => {
-           if ("notificationTornDown" !== CC && null !== CC) try {
- ... (107 more removed lines; see GitHub link above)
+         delete this.multipliers[pp], null === (ip = this._onUpdate) || void 0 === ip || ip.call(this)
+       }
+       getMultiplierType(pp) {
+         return this.multipliers[pp]
+       }
+       getTotalMultipliedVal() {
+         let pp = 1;
+         for (const ip in this.multipliers) pp *= this.multipliers[ip];
+         return pp
+       }
+     }
+     class op {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = pp
+       }
+ ... (66 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/98.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/98.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec)

#### 1. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4-L4770` → after: `L5-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L5-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L5-L168) · [Before (L4-L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4-L4770)

```diff
-   28836: (CC, zC, ZC) => {
-     var QC = {
-       "./Player_Atlas.png": 27876,
-       "./astro_set_1_attachable.png": 27879,
-       "./astro_set_2_attachable.png": 27888,
-       "./astro_set_3_attachable.png": 27893,
-       "./astro_set_4_attachable.png": 27897,
-       "./beaver_lumberjack.png": 27906,
-       "./bee_set_1_attachable.png": 27915,
-       "./bee_set_2_attachable.png": 27923,
-       "./bee_set_3_attachable_blue.png": 27925,
-       "./bee_set_3_attachable_green.png": 27928,
-       "./bee_set_3_attachable_red.png": 27931,
-       "./bee_set_4_attachable.png": 27937,
-       "./capeTextures/cape_cow_cream.png": 27940,
-       "./capeTextures/cape_cow_normal.png": 27949,
- ... (4751 more removed lines; see GitHub link above)
+   4977: (pp, ip, cp) => {
+     var Op;
+     ! function() {
+       var op = function() {
+         this.init()
+       };
+       op.prototype = {
+         init: function() {
+           var pp = this || Ip;
+           return pp._counter = 1e3, pp._html5AudioPool = [], pp.html5PoolSize = 10, pp._codecs = {}, pp._howls = [], pp._muted = !1, pp._volume = 1, pp._canPlayEvent = "canplaythrough", pp._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, p … [truncated]
+         },
+         volume: function(pp) {
+           var ip = this || Ip;
+           if (pp = parseFloat(pp), ip.ctx || Wp(), "undefined" !== typeof pp && pp >= 0 && pp <= 1) {
+             if (ip._volume = pp, ip._muted) return ip;
+             ip.usingWebAudio && ip.masterGain.gain.setValueAtTime(pp, Ip.ctx.currentTime);
+ ... (148 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4772-L4776` → after: `L170-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L170-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L170-L516) · [Before (L4772-L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4772-L4776)

```diff
-         else if (zC === QC.f.LIFEFORM_ATLAS) {
-           let zC;
-           for (const ZC of fC.p)
-             if (CC.startsWith(ZC)) {
-               zC = ZC;
+       Sp.prototype = {
+         init: function(pp) {
+           var ip = this;
+           return Ip.ctx || Wp(), ip._autoplay = pp.autoplay || !1, ip._format = "string" !== typeof pp.format ? pp.format : [pp.format], ip._html5 = pp.html5 || !1, ip._muted = pp.mute || !1, ip._loop = pp.loop || !1, ip._pool = pp.pool || 5, ip._preload = "boolean" !== typeof pp … [truncated]
+             method: pp.xhr && pp.xhr.method ? pp.xhr.method : "GET",
+             headers: pp.xhr && pp.xhr.headers ? pp.xhr.headers : null,
+             withCredentials: !(!pp.xhr || !pp.xhr.withCredentials) && pp.xhr.withCredentials
+           }, ip._duration = 0, ip._state = "unloaded", ip._sounds = [], ip._endTimers = {}, ip._queue = [], ip._playLock = !1, ip._onend = pp.onend ? [{
+             Py: pp.onend
+           }] : [], ip._onfade = pp.onfade ? [{
+             Py: pp.onfade
+           }] : [], ip._onload = pp.onload ? [{
+             Py: pp.onload
+           }] : [], ip._onloaderror = pp.onloaderror ? [{
+             Py: pp.onloaderror
+           }] : [], ip._onplayerror = pp.onplayerror ? [{
+ ... (331 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4778-L4780` → after: `L518-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L518-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L518-L561) · [Before (L4778-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4778-L4780)

```diff
-             } wC = {
-             type: QC.j.BASE64,
-             url: ZC(27101)(`./${zC}/${CC}.png`)
+             } return Lp && op && delete Lp[pp._src], Ip.noAudio = !1, pp._state = "unloaded", pp._sounds = [], pp = null, null
+         },
+         on: function(pp, ip, cp, Op) {
+           var op = this["_on" + pp];
+           return "function" === typeof ip && op.push(Op ? {
+             id: cp,
+             Py: ip,
+             once: Op
+           } : {
+             id: cp,
+             Py: ip
+           }), this
+         },
+         off: function(pp, ip, cp) {
+           var Op = this,
+             op = Op["_on" + pp],
+ ... (28 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4782-L4799` → after: `L563-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L563-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L563-L573) · [Before (L4782-L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4782-L4799)

```diff
-         } else zC === QC.f.PLAYER_ASSET && (wC = {
-           type: QC.j.BASE64,
-           url: ZC(28836)(`./${CC}.png`)
-         })
-       } catch {
-         throw new Error(`Default texture for ${CC} not found`)
-       }
-       return wC
-     }
- 
-     function FC(CC, zC) {
-       let wC;
-       try {
-         if (zC === QC.b.BLOCK) {
-           const zC = ZC(28838)(`./${CC}.glb`);
-           wC = {
- ... (2 more removed lines; see GitHub link above)
+           return ip
+         },
+         _ended: function(pp) {
+           var ip = this,
+             cp = pp._sprite;
+           if (!ip._webAudio && pp._node && !pp._node.paused && !pp._node.ended && pp._node.currentTime < pp._stop) return setTimeout(ip._ended.bind(ip, pp), 100), ip;
+           var Op = !(!pp._loop && !ip._sprite[cp][2]);
+           if (ip._emit("end", pp._id), !ip._webAudio && Op && ip.stop(pp._id, !0).play(pp._id), ip._webAudio && Op) {
+             ip._emit("play", pp._id), pp._seek = pp._start || 0, pp._rateSeek = 0, pp._playStart = Ip.ctx.currentTime;
+             var op = 1e3 * (pp._stop - pp._start) / Math.abs(pp._rate);
+             ip._endTimers[pp._id] = setTimeout(ip._ended.bind(ip, pp), op)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4801-L4809` → after: `L575-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L575-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L575-L585) · [Before (L4801-L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4801-L4809)

```diff
-         } else if (zC === QC.b.ITEM) wC = {
-           type: QC.j.HTTP,
-           url: `${bC.clientSideServerUrls.staticUrl}/models/${CC}.glb`
-         };
-         else if (zC === QC.b.LIFEFORM) {
-           const zC = ZC(33184)(`./${CC}.glb`);
-           wC = {
-             type: QC.j.BASE64,
-             url: zC
+           return ip._webAudio && !Op && (pp.Fk = !0, pp._ended = !0, pp._seek = pp._start || 0, pp._rateSeek = 0, ip._clearTimer(pp._id), ip._cleanBuffer(pp._node), Ip._autoSuspend()), ip._webAudio || Op || ip.stop(pp._id, !0), ip
+         },
+         _clearTimer: function(pp) {
+           var ip = this;
+           if (ip._endTimers[pp]) {
+             if ("function" !== typeof ip._endTimers[pp]) clearTimeout(ip._endTimers[pp]);
+             else {
+               var cp = ip._soundById(pp);
+               cp && cp._node && cp._node.removeEventListener("ended", ip._endTimers[pp], !1)
+             }
+             delete ip._endTimers[pp]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4812-L4833` → after: `L634-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L634-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L634-L642) · [Before (L4812-L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4812-L4833)

```diff
-       } catch {
-         throw new Error(`Default model for ${CC} not found`)
-       }
-       return wC
-     }
- 
-     function WC(CC) {
-       return wC.m[CC]
-     }
-   },
-   33998: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => bC,
-       e: () => fC,
-       h: () => nC,
-       l: () => wC,
- ... (6 more removed lines; see GitHub link above)
+       };
+       var xp = function(pp) {
+         this._parent = pp, this.init()
+       };
+       xp.prototype = {
+         init: function() {
+           var pp = this,
+             ip = pp._parent;
+           return pp._muted = ip._muted, pp._loop = ip._loop, pp._volume = ip._volume, pp._rate = ip._rate, pp._seek = 0, pp.Fk = !0, pp._ended = !0, pp._sprite = "__default", pp._id = ++Ip._counter, ip._sounds.push(pp), pp.create(), pp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4835-L4842` → after: `L644-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L644-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L644-L648) · [Before (L4835-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4835-L4842)

```diff
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
-           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
-           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
-           px: "/textures/skyBoxes/gloomy/_px.jpg",
-           py: "/textures/skyBoxes/gloomy/_py.jpg",
-           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
+         create: function() {
+           var pp = this,
+             ip = pp._parent,
+             cp = Ip._muted || pp._muted || pp._parent._muted ? 0 : pp._volume;
+           return ip._webAudio ? (pp._node = "undefined" === typeof Ip.ctx.createGain ? Ip.ctx.createGainNode() : Ip.ctx.createGain(), pp._node.gain.setValueAtTime(cp, Ip.ctx.currentTime), pp._node.paused = !0, pp._node.connect(Ip.masterGain)) : Ip.noAudio || (pp._node = Ip._obtai … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4844-L4851` → after: `L650-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L650-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L650-L653) · [Before (L4844-L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4844-L4851)

```diff
-         interstellar: {
-           type: "custom",
-           nx: "/textures/skyBoxes/interstellar/_nx.jpg",
-           ny: "/textures/skyBoxes/interstellar/_ny.jpg",
-           nz: "/textures/skyBoxes/interstellar/_nz.jpg",
-           px: "/textures/skyBoxes/interstellar/_px.jpg",
-           py: "/textures/skyBoxes/interstellar/_py.jpg",
-           pz: "/textures/skyBoxes/interstellar/_pz.jpg"
+         reset: function() {
+           var pp = this,
+             ip = pp._parent;
+           return pp._muted = ip._muted, pp._loop = ip._loop, pp._volume = ip._volume, pp._rate = ip._rate, pp._seek = 0, pp._rateSeek = 0, pp.Fk = !0, pp._ended = !0, pp._sprite = "__default", pp._id = ++Ip._counter, pp
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4853-L4860` → after: `L655-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L655-L657) · [Before (L4853-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4853-L4860)

```diff
-         space_blue: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_blue/_nx.jpg",
-           ny: "/textures/skyBoxes/space_blue/_ny.jpg",
-           nz: "/textures/skyBoxes/space_blue/_nz.jpg",
-           px: "/textures/skyBoxes/space_blue/_px.jpg",
-           py: "/textures/skyBoxes/space_blue/_py.jpg",
-           pz: "/textures/skyBoxes/space_blue/_pz.jpg"
+         _errorListener: function() {
+           var pp = this;
+           pp._parent._emit("loaderror", pp._id, pp._node.error ? pp._node.error.code : 0), pp._node.removeEventListener("error", pp._errorFn, !1)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4862-L4869` → after: `L659-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L659-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L659-L664) · [Before (L4862-L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4862-L4869)

```diff
-         space_lightblue: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
-           ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
-           nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
-           px: "/textures/skyBoxes/space_lightblue/_px.jpg",
-           py: "/textures/skyBoxes/space_lightblue/_py.jpg",
-           pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
+         _loadListener: function() {
+           var pp = this,
+             ip = pp._parent;
+           ip._duration = Math.ceil(10 * pp._node.duration) / 10, 0 === Object.keys(ip._sprite).length && (ip._sprite = {
+             __default: [0, 1e3 * ip._duration]
+           }), "loaded" !== ip._state && (ip._state = "loaded", ip._emit("load"), ip._loadQueue()), pp._node.removeEventListener(Ip._canPlayEvent, pp._loadFn, !1)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4871-L4878` → after: `L666-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L666-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L666-L689) · [Before (L4871-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4871-L4878)

```diff
-         space_red: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_red/_nx.jpg",
-           ny: "/textures/skyBoxes/space_red/_ny.jpg",
-           nz: "/textures/skyBoxes/space_red/_nz.jpg",
-           px: "/textures/skyBoxes/space_red/_px.jpg",
-           py: "/textures/skyBoxes/space_red/_py.jpg",
-           pz: "/textures/skyBoxes/space_red/_pz.jpg"
+         _endListener: function() {
+           var pp = this,
+             ip = pp._parent;
+           ip._duration === 1 / 0 && (ip._duration = Math.ceil(10 * pp._node.duration) / 10, ip._sprite.__default[1] === 1 / 0 && (ip._sprite.__default[1] = 1e3 * ip._duration), ip._ended(pp)), pp._node.removeEventListener("ended", pp._endFn, !1)
+         }
+       };
+       var Lp = {},
+         Yp = function(pp) {
+           var ip = pp._src;
+           if (Lp[ip]) return pp._duration = Lp[ip].duration, void Pp(pp);
+           if (/^data:[^;]+;base64,/.test(ip)) {
+             for (var cp = atob(ip.split(",")[1]), Op = new Uint8Array(cp.length), op = 0; op < cp.length; ++op) Op[op] = cp.charCodeAt(op);
+             Ap(Op.buffer, pp)
+           } else {
+             var Ip = new XMLHttpRequest;
+             Ip.open(pp._xhr.method, ip, !0), Ip.withCredentials = pp._xhr.withCredentials, Ip.responseType = "arraybuffer", pp._xhr.headers && Object.keys(pp._xhr.headers).forEach((function(ip) {
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4880-L4887` → after: `L691-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L691-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L691-L696) · [Before (L4880-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4880-L4887)

```diff
-         underwater: {
-           type: "custom",
-           nx: "/textures/skyBoxes/underwater/water.jpg",
-           ny: "/textures/skyBoxes/underwater/water.jpg",
-           nz: "/textures/skyBoxes/underwater/water.jpg",
-           px: "/textures/skyBoxes/underwater/water.jpg",
-           py: "/textures/skyBoxes/underwater/water.jpg",
-           pz: "/textures/skyBoxes/underwater/water.jpg"
+         Dp = function(pp) {
+           try {
+             pp.send()
+           } catch (ip) {
+             pp.onerror()
+           }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4889-L4896` → after: `L698-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L698-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L698-L705) · [Before (L4889-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4889-L4896)

```diff
-         starry: {
-           type: "custom",
-           nx: "/textures/skyBoxes/starry/_nx.jpg",
-           ny: "/textures/skyBoxes/starry/_ny.jpg",
-           nz: "/textures/skyBoxes/starry/_nz.jpg",
-           px: "/textures/skyBoxes/starry/_px.jpg",
-           py: "/textures/skyBoxes/starry/_py.jpg",
-           pz: "/textures/skyBoxes/starry/_pz.jpg"
+         Ap = function(pp, ip) {
+           var cp = function() {
+               ip._emit("loaderror", null, "Decoding audio data failed.")
+             },
+             Op = function(pp) {
+               pp && ip._sounds.length > 0 ? (Lp[ip._src] = pp, Pp(ip, pp)) : cp()
+             };
+           "undefined" !== typeof Promise && 1 === Ip.ctx.decodeAudioData.length ? Ip.ctx.decodeAudioData(pp).then(Op).catch(cp) : Ip.ctx.decodeAudioData(pp, Op, cp)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4898-L4905` → after: `L707-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L707-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L707-L710) · [Before (L4898-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4898-L4905)

```diff
-         space_red_2: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
-           ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
-           nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
-           px: "/textures/skyBoxes/space_red_2/_px.jpg",
-           py: "/textures/skyBoxes/space_red_2/_py.jpg",
-           pz: "/textures/skyBoxes/space_red_2/_pz.jpg"
+         Pp = function(pp, ip) {
+           ip && !pp._duration && (pp._duration = ip.duration), 0 === Object.keys(pp._sprite).length && (pp._sprite = {
+             __default: [0, 1e3 * pp._duration]
+           }), "loaded" !== pp._state && (pp._state = "loaded", pp._emit("load"), pp._loadQueue())
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4907-L4914` → after: `L712-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L712-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L712-L789) · [Before (L4907-L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4907-L4914)

```diff
-         space_white: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_white/_nx.jpg",
-           ny: "/textures/skyBoxes/space_white/_ny.jpg",
-           nz: "/textures/skyBoxes/space_white/_nz.jpg",
-           px: "/textures/skyBoxes/space_white/_px.jpg",
-           py: "/textures/skyBoxes/space_white/_py.jpg",
-           pz: "/textures/skyBoxes/space_white/_pz.jpg"
+         Wp = function() {
+           if (Ip.usingWebAudio) {
+             try {
+               "undefined" !== typeof AudioContext ? Ip.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Ip.ctx = new webkitAudioContext : Ip.usingWebAudio = !1
+             } catch (op) {
+               Ip.usingWebAudio = !1
+             }
+             Ip.ctx || (Ip.usingWebAudio = !1);
+             var pp = /iP(hone|od|ad)/.test(Ip._navigator && Ip._navigator.platform),
+               ip = Ip._navigator && Ip._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
+               cp = ip ? parseInt(ip[1], 10) : null;
+             if (pp && cp && cp < 9) {
+               var Op = /safari/.test(Ip._navigator && Ip._navigator.userAgent.toLowerCase());
+               Ip._navigator && !Op && (Ip.usingWebAudio = !1)
+             }
+             Ip.usingWebAudio && (Ip.masterGain = "undefined" === typeof Ip.ctx.createGain ? Ip.ctx.createGainNode() : Ip.ctx.createGain(), Ip.masterGain.gain.setValueAtTime(Ip._muted ? 0 : Ip._volume, Ip.ctx.currentTime), Ip.masterGain.connect(Ip.ctx.destination)), Ip._setup()
+ ... (62 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4916-L17025` → after: `L791-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L791-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/98.js#L791-L893) · [Before (L4916-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/98.js#L4916-L17025)

```diff
-       },
-       wC = "/textures/dayNight/sun.png",
-       bC = "/textures/dayNight/moon.png",
-       nC = "/textures/dayNight/stars",
-       fC = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
-   },
-   28847: CC => {
-     CC.exports = "data:model/gltf-binary;base64,Z2xURgIAAADIDgAA3AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Mjg4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   28851: CC => {
-     CC.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA0FAAA+AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Njg0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   28860: CC => {
-     CC.exports = "data:model/gltf-binary;base64,Z2xURgIAAABMCwAApAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   28862: CC => {
- ... (12094 more removed lines; see GitHub link above)
+         return Op
+       }, Howl.prototype.pos = function(pp, cp, Op, op) {
+         var Ip = this;
+         if (!Ip._webAudio) return Ip;
+         if ("loaded" !== Ip._state) return Ip._queue.push({
+           event: "pos",
+           action: function() {
+             Ip.pos(pp, cp, Op, op)
+           }
+         }), Ip;
+         if (cp = "number" !== typeof cp ? 0 : cp, Op = "number" !== typeof Op ? -.5 : Op, "undefined" === typeof op) {
+           if ("number" !== typeof pp) return Ip._pos;
+           Ip._pos = [pp, cp, Op]
+         }
+         for (var Sp = Ip._getSoundIds(op), xp = 0; xp < Sp.length; xp++) {
+           var Lp = Ip._soundById(Sp[xp]);
+ ... (87 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/99.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/99.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52)

#### 1. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L2)

```diff
- export const ids = [99, 194];
+ export const ids = [99];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L4)

```diff
-   34033: (CC, zC, ZC) => {
+   4988: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L6)

```diff
-       EverythingMenu: () => rf
+       default: () => Fp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L8-L9` → after: `L8-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L8-L35) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L8-L9)

```diff
-     var QC = ZC(48),
-       wC = ZC(1002),
+     var Op = cp(62),
+       op = cp(1543),
+       Ip = cp(337),
+       Sp = cp(1244),
+       xp = cp(1626),
+       Lp = cp(1284),
+       Yp = cp(1569),
+       Dp = cp(1520),
+       Ap = cp(2749);
+     const Pp = {
+       retries: 2,
+       minTimeout: 2e3
+     };
+     var Wp = cp(1133),
+       yp = cp(1623),
+       Up = cp(1141),
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L11-L16` → after: `L37-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L37-L47) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L11-L16)

```diff
-       nC = ZC(1143),
-       fC = ZC(1013),
-       oC = ZC(1964),
-       qC = ZC(1388),
-       FC = ZC(1072),
-       WC = ZC(1056);
+       Ep = cp(1060),
+       Xp = cp(5e3),
+       lp = cp(25),
+       Qp = cp(1956),
+       Jp = cp(3740),
+       Bp = cp(2057),
+       Np = cp(3680),
+       Tp = cp(104),
+       fp = cp(4648),
+       bp = cp(1112);
+     const hp = [Rp];
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L20-L25` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L51-L53) · [Before (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L20-L25)

```diff
-         items: zC,
-         link: ZC,
-         onClick: QC,
-         selectedItemId: wC,
-         className: NC,
-         padStartsOnTab: MC = !0
+         icon: ip,
+         label: cp,
+         value: Op
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L41-L81` → after: `L56-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L56-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L56-L61) · [Before (L41-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L41-L81)

```diff
-         className: bC()("MenuSideBarBody", NC),
-         "data-pad-tabs": "2",
-         children: [pC.map(((CC, zC) => {
-           var ZC;
-           return (0, WC.jsxs)("div", {
-             className: "MenuSideBarSection",
-             children: [CC.title && (0, WC.jsx)("div", {
-               className: "MenuSideBarSectionTitle",
-               children: gC(CC.title)
-             }), CC.items.map((CC => {
-               var zC;
-               const ZC = !!CC.iconElement || !!CC.faIcon;
-               return (0, WC.jsxs)("div", {
-                 "data-pad-tab": !0,
-                 "data-pad-selected": wC === CC.id ? "true" : void 0,
-                 "data-pad-default-focus": MC && wC === CC.id || void 0,
- ... (25 more removed lines; see GitHub link above)
+         className: "PlayerProfileStat",
+         children: [(0, bp.jsx)(Ep.d, {
+           name: ip,
+           className: "PlayerProfileStatIcon"
+         }), (0, bp.jsxs)("div", {
+           className: "PlayerProfileStatText",
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L83-L86` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L63-L64) · [Before (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L83-L86)

```diff
-             className: "MenuSideBarBodyTabIcon",
-             children: (0, WC.jsx)(fC.c, {
-               name: ZC.faIcon
-             })
+             className: "PlayerProfileStatLabel SmallTextLight",
+             children: cp
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L88-L91` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L66-L67) · [Before (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L88-L91)

```diff
-             children: gC(ZC.title)
-           }), (0, WC.jsx)(fC.c, {
-             name: "arrow-right",
-             className: "MenuSideBarLinkArrow"
+             className: "PlayerProfileStatValue",
+             children: Op
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L112` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L75) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L112)

```diff
-         setApplySettingsCallback: zC
+         profile: ip
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L259-L290` → after: `L80-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L80-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L80-L107) · [Before (L259-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L259-L290)

```diff
-       } = (0, nC.y)(), {
-         userContext: wC
-       } = (0, gC.e)(), {
-         superRankInfo: bC
-       } = wC, fC = CC && ((0, uC.mc)(bC) || wC.ranksMayChange) && (0, sC.purchasesAllowed)(), {
-         accountId: oC,
-         data: qC
-       } = (0, TC.j)(tC.d, fC);
-       if ((0, QC.useEffect)((() => {
-           if (fC) return tC.d.watchAccount(), aC.d.addRefetchListener("billing", (CC => {
-             "reconnected" === CC ? tC.d.refreshAfterReconnect() : tC.d.refresh()
-           }))
-         }), [fC]), !fC || !(0, uC.mc)(bC) || null === qC || oC !== wC.whamm) return null;
-       const FC = function(CC, zC, ZC) {
-         const QC = jC.k[(0, jC.d)(jC.k, zC)],
-           wC = void 0 === QC ? void 0 : (0, yC.d)(CC.entitlements, QC.entitlementId);
- ... (16 more removed lines; see GitHub link above)
+       } = (0, vp.H)();
+       let op = cp("homePage:profileUnknown");
+       if (ip.lastOnline) {
+         const pp = (0, vp.p)(Op.code, "homePage:profileTimeAgo");
+         op = cp("homePage:profileTimeAgo", {
+           time: (0, Ip.cb)(pp, ip.lastOnline, Date.now())
+         })
+       }
+       let Sp = cp("homePage:profileUnknown");
+       return ip.accountCreatedAt && (Sp = new Date(ip.accountCreatedAt).toLocaleDateString(void 0, {
+         year: "numeric",
+         month: "short",
+         day: "numeric"
+       })), (0, bp.jsxs)("div", {
+         className: "PlayerProfileStats",
+         children: [(0, bp.jsx)(ap, {
+ ... (12 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L300-L303` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L111) · [Before (L300-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L300-L303)

```diff
-     function zz(CC) {
-       let {
-         showing: zC
-       } = CC;
+     function Fp() {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L306-L323` → after: `L114-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L114-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L114-L318) · [Before (L306-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L306-L323)

```diff
-       } = (0, nC.y)(), {
-         data: QC,
-         failed: wC
-       } = (0, TC.j)(VC.c, zC);
-       return 0 === (null === QC || void 0 === QC ? void 0 : QC.length) || null === QC && !wC ? null : (0, WC.jsxs)("div", {
-         className: "SettingBox AccountSettingsPaymentHistory",
-         children: [(0, WC.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: ZC("paymentHistory:title")
-         }), null === QC && wC && (0, WC.jsx)("div", {
-           className: "AccountSettingsPaymentHistoryError",
-           children: ZC("paymentHistory:loadFailed")
-         }), null !== QC && (0, WC.jsx)("ul", {
-           className: "PaymentHistoryList",
-           children: QC.map((CC => (0, WC.jsxs)("li", {
-             className: "PaymentHistoryEntry",
- ... (2 more removed lines; see GitHub link above)
+       } = (0, vp.H)(), ip = (0, jp.useNavigatePreserveSearch)(), cp = (0, Wp.h)(), {
+         playerName: Rp,
+         playerUrlName: Mp
+       } = (0, op.A)(), Jp = (0, op.r)(), ap = (0, Sp.f)(Jp.pathname), Fp = ap && ("urlId" in ap ? `urlId:${ap.urlId}` : `name:${ap.lowerCaseName}`), gp = (0, Op.useRef)(Fp);
+       gp.current = Fp;
+       const {
+         userContext: Gp,
+         isUserContextUpdating: rp
+       } = (0, Up.b)(), Zp = (0, Op.useRef)(null), zp = (0, Op.useRef)(null), sp = (0, Op.useRef)(null), Kp = (0, Op.useRef)(!1), Vp = (0, Op.useRef)((0, Ip.Ub)(hp)), [ii, ci] = (0, Op.useState)((() => {
+         const pp = ap && mp.c.peek(Gp, ap);
+         return pp ? {
+           status: "loaded",
+           profile: pp,
+           playerKey: Fp
+         } : {
+           status: "loading"
+ ... (189 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L325` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L320) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L325)

```diff
-               className: "PaymentHistoryEntryText",
+               className: "PlayerProfileGames",
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L327-L330` → after: `L322-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L322-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L322-L338) · [Before (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L327-L330)

```diff
-                 children: (0, Cz.j)(ZC, CC)
-               }), (0, WC.jsxs)("div", {
-                 className: "PaymentHistoryEntryDate",
-                 children: [new Date(CC.at).toLocaleDateString(), "number" === typeof CC.orderId && ` \xb7 ${ZC("paymentHistory:order",{orderId:CC.orderId})}`]
+                 className: "PlayerProfileGamesTitle SmallTextBold",
+                 children: pp("homePage:profileReleasedGames")
+               }), 0 === xi.releasedGames.length && (0, bp.jsx)("div", {
+                 className: "PlayerProfileNoGames",
+                 children: pp("homePage:profileNoReleasedGames")
+               }), xi.releasedGames.length > 0 && (0, bp.jsx)("div", {
+                 className: "PlayerProfileGamesGrid",
+                 children: xi.releasedGames.map((pp => (0, bp.jsx)(Hp.g, {
+                   source: {
+                     type: "preview",
+                     preview: pp
+                   },
+                   gameWidth: "100%",
+                   useLongRatio: !0,
+                   hideFavourites: !0,
+                   entrySource: "other"
+ ... (1 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L333` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L341) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L333)

```diff
-           }, (0, VC.b)(CC))))
+           })]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L337-L368` → after: `L345-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L345-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L345-L359) · [Before (L337-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L337-L368)

```diff
-     var Zz = ZC(1804),
-       Qz = ZC(1187),
-       wz = ZC(1307),
-       bz = ZC(1724),
-       nz = ZC(1149),
-       fz = ZC(1263),
-       oz = ZC(3016);
-     async function qz() {
-       try {
-         return function(CC) {
-           const zC = new Map;
-           for (const {
-               store: ZC,
-               status: QC,
-               autoRenewStatus: wC,
-               managementUrl: bC
- ... (16 more removed lines; see GitHub link above)
+   },
+   5e3: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => wp
+     });
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(4735),
+       Sp = cp(1201),
+       xp = cp(1060),
+       Lp = cp(1480),
+       Yp = cp(1520),
+       Dp = cp(1372),
+       Ap = cp(2568),
+       Pp = cp(1112);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L370-L372` → after: `L361-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L361-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L361-L374) · [Before (L370-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L370-L372)

```diff
-       appStore: {
-         name: "App Store",
-         ...Fz.Vb.appStore
+       youtube: {
+         icon: "youtube",
+         color: "#FF0033",
+         name: "YouTube"
+       },
+       tiktok: {
+         icon: "tiktok",
+         color: "#0F0F0F",
+         name: "TikTok"
+       },
+       instagram: {
+         icon: "instagram",
+         color: "#E1306C",
+         name: "Instagram"
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L374-L376` → after: `L376-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L376-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L376-L379) · [Before (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L374-L376)

```diff
-       googlePlay: {
-         name: "Google Play",
-         ...Fz.Vb.googlePlay
+       twitter: {
+         icon: "x-twitter",
+         color: "#0F0F0F",
+         name: "X"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L378-L380` → after: `L381-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L381-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L381-L384) · [Before (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L378-L380)

```diff
-       discord: {
-         name: "Discord",
-         ...Fz.Vb.discord
+       twitch: {
+         icon: "twitch",
+         color: "#9146FF",
+         name: "Twitch"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L386-L387` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L390) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L386-L387)

```diff
-         warning: zC,
-         subscriptions: ZC
+         platform: ip
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L389-L415` → after: `L392-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L392-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L392-L401) · [Before (L389-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L389-L415)

```diff
-       const {
-         t: QC
-       } = (0, nC.y)();
-       return null !== ZC && 0 === ZC.length ? (0, WC.jsx)(WC.Fragment, {
-         children: QC(zC)
-       }) : (0, WC.jsxs)("div", {
-         className: "DeleteAccountSubtitle",
-         children: [QC(zC), null === ZC && (0, WC.jsx)("div", {
-           className: "DeleteAccountSubtitleNote",
-           children: QC("auth:deleteAccountSubscriptionsLoadFailed")
-         }), null !== ZC && (0, WC.jsxs)(WC.Fragment, {
-           children: [(0, WC.jsx)("div", {
-             className: "DeleteAccountSubtitleNote",
-             children: QC("auth:deleteAccountStoreSubscriptions")
-           }), (0, WC.jsx)(Wz.d, {
-             className: "DeleteAccountSubtitleLinks",
- ... (11 more removed lines; see GitHub link above)
+       const cp = "youtube" === ip;
+       return (0, Pp.jsxs)("span", {
+         className: op()("PlayerProfileSocialLinkIcon", {
+           PlayerProfileSocialLinkIconYoutube: cp
+         }),
+         children: [cp && (0, Pp.jsx)(Ap.d, {
+           variant: "white"
+         }), !cp && (0, Pp.jsx)(xp.d, {
+           name: Wp[ip].icon,
+           kit: "brands"
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L422-L424` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L408-L410) · [Before (L422-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L422-L424)

```diff
-         showing: zC
-       } = CC;
-       const {
+         platform: ip,
+         link: cp,
+         editable: Op,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L426-L515` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L412) · [Before (L426-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L426-L515)

```diff
-         isUserContextUpdating: wC
-       } = (0, gC.e)(), {
-         t: bC
-       } = (0, nC.y)(), [fC, oC] = (0, QC.useState)(!1), [FC, NC] = (0, QC.useState)(null), MC = (0, QC.useRef)(zC);
-       (0, QC.useEffect)((() => (MC.current = zC, () => {
-         MC.current = !1
-       })), [zC]);
-       const SC = wC || fC;
-       return (0, WC.jsxs)("div", {
-         className: "AccountSettingsDeleteAccountButtonContainer",
-         children: [(0, WC.jsxs)(qC.I, {
-           onClick: async function() {
-             if (!fC) {
-               oC(!0);
-               try {
-                 const CC = await async function() {
- ... (74 more removed lines; see GitHub link above)
+         onLinksUpdated: Ap
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L519-L596` → after: `L416-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L416-L417) · [Before (L519-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L519-L596)

```diff
-       } = (0, nC.y)(), {
-         data: QC,
-         failed: wC
-       } = (0, TC.j)(Pz.b, zC), bC = null === QC ? null : (0, Pz.c)(QC);
-       return (0, WC.jsxs)("div", {
-         className: "SettingBox BlockedAndIgnoredPlayers",
-         children: [(0, WC.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: ZC("settingsMenu:blockedAndIgnoredPlayers")
-         }), null === bC && !wC && (0, WC.jsx)(JC.d, {}), null === bC && wC && (0, WC.jsxs)("div", {
-           className: "BlockedAndIgnoredPlayersError",
-           children: [ZC("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, WC.jsx)(qC.g, {
-             className: "SmallTextLight",
-             onClick: () => {
-               Pz.b.refresh()
-             },
- ... (62 more removed lines; see GitHub link above)
+       } = (0, Sp.H)(), wp = Wp[ip];
+       if (!cp && !Op) return null;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L598-L603` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L419) · [Before (L598-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L598-L603)

```diff
-       function Gz(CC) {
-         CC !== RC && ((0, HC.p)(CC) ? (CC = (0, HC.q)(CC), eC(oC("homePage:nameCharacters"))) : eC(null), wz.current && (wz.current.value = CC), AC(CC))
-       }
-       return (0, QC.useEffect)((() => (!0 === ZC ? (clearInterval(bz.current), bz.current = setInterval(SC, 1e3)) : clearInterval(bz.current), () => {
-         clearInterval(bz.current)
-       })), [ZC, SC]), (0, QC.useEffect)((() => {
+       function vp() {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L605-L697` → after: `L421-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L421-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L421-L426) · [Before (L605-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L605-L697)

```diff
-         AC(null !== (CC = pC.getPlayerName()) && void 0 !== CC ? CC : "")
-       }), [pC]), (0, QC.useEffect)((() => {
-         if (!ZC || !pz || GC) return;
-         let CC = !1;
-         return Sz(!0), Nz([]), cC.d.getPlayerProfile(pC, {
-           lowerCaseName: pC.getPlayerName().toLowerCase()
-         }).then((zC => {
-           CC || Nz(zC.socialLinks)
-         })).catch((CC => {
-           console.error("Failed to load social links", CC)
-         })).finally((() => {
-           CC || Sz(!1)
-         })), () => {
-           CC = !0
-         }
-       }), [ZC, pz, GC, pC]), (0, WC.jsxs)("div", {
- ... (77 more removed lines; see GitHub link above)
+         if (!op || !Ap) return;
+         Dp.NotificationProvider.showInputPopup({
+           title: "homePage:profileSocialLinkEditTitle",
+           textOpts: {
+             title: {
+               platform: wp.name
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L714-L849` → after: `L429-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L429-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L429-L455) · [Before (L714-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L714-L849)

```diff
-           checked: (0, BC.l)(NC),
-           disabled: Zz
-         }), pz && (0, WC.jsxs)("div", {
-           className: "SettingBox AccountSettingsSocialLinks",
-           children: [(0, WC.jsx)("div", {
-             className: "AccountSettingsLabel",
-             children: oC("settingsMenu:socialLinks")
-           }), Mz && (0, WC.jsx)(JC.d, {}), !Mz && (0, WC.jsx)(OC.b, {
-             socialLinks: Wz,
-             editable: !0,
-             userContext: pC,
-             onLinksUpdated: Pz
-           })]
-         }), (0, WC.jsxs)("div", {
-           className: "SettingBox",
-           children: [(0, WC.jsx)("div", {
- ... (120 more removed lines; see GitHub link above)
+           prefixText: Ip.u[ip],
+           placeholderText: "playBloxd",
+           initialValue: null !== (pp = null === cp || void 0 === cp ? void 0 : cp.handle) && void 0 !== pp ? pp : "",
+           maxLength: 30,
+           submitText: "general:save",
+           secondaryButtonText: cp ? "general:remove" : void 0
+         }).getResult().then((async pp => {
+           if ("notificationTornDown" !== pp && null !== pp) try {
+             "submit" === pp.type ? await Yp.b.setSocialLink(op, ip, pp.value) : await Yp.b.clearSocialLink(op, ip), Ap()
+           } catch (cp) {
+             console.error("Failed to update social link", cp), Dp.NotificationProvider.showAlertPopup({
+               title: cp.errorMessageForUser,
+               confirmText: "general:ok"
+             })
+           }
+         }))
+ ... (11 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L851-L1016` → after: `L457-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L457-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L457-L464) · [Before (L851-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L851-L1016)

```diff
-             className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
-             children: [(0, WC.jsx)("div", {
-               className: "AccountSettingsDeleteAccountButtonTitle",
-               children: oC(Jz(qz, Fz))
-             }), (0, hC.e)() && (0, WC.jsx)("div", {
-               className: "AccountSettingsDeleteAccountButtonTitle",
-               children: oC("auth:discordActivityKickWarning")
-             }), (0, WC.jsx)(gz, {
-               showing: ZC
-             })]
-           }), (0, WC.jsx)("div", {
-             className: "SettingBox SettingsBoxWarning",
-             children: oC(qz ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
-           })]
-         })]
-       })
- ... (150 more removed lines; see GitHub link above)
+             className: "PlayerProfileSocialLinkMain",
+             children: [(0, Pp.jsx)(yp, {
+               platform: ip
+             }), (0, Pp.jsx)("span", {
+               className: "PlayerProfileSocialLinkText",
+               children: (0, Pp.jsx)("span", {
+                 className: "PlayerProfileSocialLinkName SmallTextBold",
+                 children: pp
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L1018-L1021` → after: `L466-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L466-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L466-L472) · [Before (L1018-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L1018-L1021)

```diff
-             }
-           }), (0, WC.jsx)(IC.b, {
-             label: ZC("settingsMenu:showNewItemIndicator"),
-             checked: wC.showNewItemIndicator,
+             })]
+           }), Op && (0, Pp.jsx)("button", {
+             type: "button",
+             className: "PlayerProfileSocialLinkEditButton",
+             ...(0, Lp.bb)({
+               stopPropagation: !0
+             }),
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L1023-L1060` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L474) · [Before (L1023-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L1023-L1060)

```diff
-               iC.b.setClientEscMenuOptions({
-                 showNewItemIndicator: CC
-               })
-             }
-           })]
-         })
-       })),
-       Ez = (0, QC.memo)((function() {
-         const {
-           t: CC
-         } = (0, nC.y)(), {
-           soundVolume: zC,
-           musicVolume: ZC
-         } = (0, iC.k)(["soundVolume", "musicVolume"]);
-         return (0, WC.jsxs)("div", {
-           className: "SettingsMenuRightInner",
- ... (22 more removed lines; see GitHub link above)
+               pp.stopPropagation(), pp.preventDefault(), vp()
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L1062` → after: `L476-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L476-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L476-L483) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L1062)

```diff
-             format: CC => CC.toFixed(2)
+             children: (0, Pp.jsx)(xp.d, {
+               name: "pen-to-square"
+             })
+           }), !Op && (0, Pp.jsx)("span", {
+             className: "PlayerProfileSocialLinkArrow",
+             children: (0, Pp.jsx)(xp.d, {
+               name: "arrow-up-right-from-square"
+             })
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L1065-L1142` → after: `L486-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L486-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L486-L491) · [Before (L1065-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L1065-L1142)

```diff
-       }));
-     var lz = ZC(676),
-       Xz = ZC(1383),
-       cz = ZC(3600),
-       uz = ZC(34072),
-       rz = ZC(3452);
-     const sz = {
-       app: "notificationSettings:pushTargetsApp",
-       browser: "notificationSettings:pushTargetsBrowser",
-       msnPlay: "notificationSettings:pushTargetsMsnPlay"
-     };
- 
-     function Tz() {
-       const {
-         t: CC
-       } = (0, nC.y)(), zC = (0, rz.e)(), {
- ... (62 more removed lines; see GitHub link above)
+       }
+       return (0, Pp.jsxs)("button", {
+         type: "button",
+         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
+         style: {
+           background: wp.color
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L1144-L1152` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L493-L495) · [Before (L1144-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L1144-L1152)

```diff
-         off: {
-           label: "notificationSettings:friendRequestsOff",
-           info: "notificationSettings:friendRequestsOffInfo"
-         }
-       },
-       Dz = {
-         remindersOn: {
-           label: "dailyDrop:settingReminders",
-           reportAs: "reminders"
+         ...(0, Lp.bb)(),
+         onClick: () => {
+           vp()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L1154-L1232` → after: `L497-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L497-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L497-L506) · [Before (L1154-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L1154-L1232)

```diff
-         hidden: {
-           label: "dailyDrop:settingHide",
-           reportAs: "hidden"
-         }
-       };
- 
-     function jz(CC) {
-       let {
-         setting: zC,
-         value: ZC
-       } = CC;
-       const {
-         t: wC
-       } = (0, nC.y)(), fC = (0, rz.e)(), [oC, qC] = (0, QC.useState)(null), [FC, NC] = (0, QC.useState)(!1), [MC, gC] = (0, QC.useState)(null);
-       return (0, QC.useEffect)((() => {
-         "remindersOn" === zC && (0, uz.e)().then((CC => {
- ... (63 more removed lines; see GitHub link above)
+         children: [(0, Pp.jsx)(yp, {
+           platform: ip
+         }), (0, Pp.jsxs)("span", {
+           className: "PlayerProfileSocialLinkText",
+           children: [(0, Pp.jsx)("span", {
+             className: "PlayerProfileSocialLinkName SmallTextBold",
+             children: wp.name
+           }), (0, Pp.jsx)("span", {
+             className: "PlayerProfileSocialLinkCount SmallTextLight",
+             children: Up("homePage:profileSocialLinkAdd")
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L1234` → after: `L508-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L508-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L508-L513) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L1234)

```diff
-         }), (0, WC.jsx)(Tz, {})]
+         }), (0, Pp.jsx)("span", {
+           className: "PlayerProfileSocialLinkEditButton",
+           children: (0, Pp.jsx)(xp.d, {
+             name: "pen-to-square"
+           })
+         })]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L1282-L1285` → after: `L519-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L519-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L519-L522) · [Before (L1282-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L1282-L1285)

```diff
-         minChunkAddDist: qC,
-         getValue: FC,
-         onChange: NC,
-         setApplySettingsCallback: MC
+         socialLinks: ip,
+         editable: cp = !1,
+         userContext: Op,
+         onLinksUpdated: op
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L1287-L1520` → after: `L524-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L524-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L524-L538) · [Before (L1287-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L1287-L1520)

```diff
-       const {
-         t: gC
-       } = (0, nC.y)(), {
-         clientEscMenuOptions: pC
-       } = (0, iC.k)(["clientEscMenuOptions", "showDistantNametags"]), GC = (0, QC.useRef)(FC("showFog")), RC = (0, QC.useRef)(pC.antiAliasing), AC = (0, QC.useRef)(pC.useWebGpu), [xC, JC] = (0, QC.useState)(null), [eC, hC] = (0, QC.useState)((() => (0, kz.e)(PC.featureFlags.setti … [truncated]
-       (0, QC.useEffect)((() => {
-         let CC = !1;
-         return (0, PC.hasUsableWebGpuAdapter)().then((zC => {
-           CC || JC(zC)
-         })), (0, kz.g)(PC.featureFlags.settings.canUseShaderPacks) && (0, Oz.e)().then((async zC => {
-           const QC = null !== zC && await async function(CC) {
-             const [{
-               isShaderPackActive: zC
-             }, {
-               loadPageShaderPackCompiler: QC
-             }] = await Promise.all([ZC.e(137).then((() => ZC(6658))), Promise.all([ZC.e(77), ZC.e(133), ZC.e(136)]).then((() => ZC(6609)))]);
- ... (218 more removed lines; see GitHub link above)
+       if (!cp && 0 === ip.length) return null;
+       const Sp = new Map(ip.map((pp => [pp.platform, pp]))),
+         xp = cp ? Ip.q : ip.map((pp => pp.platform));
+       return (0, Pp.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, Pp.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: xp.map((pp => (0, Pp.jsx)(Up, {
+             platform: pp,
+             link: Sp.get(pp),
+             editable: cp,
+             userContext: Op,
+             onLinksUpdated: op
+           }, pp)))
+         })
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L10595-L10596` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/99.js#L542-L543) · [Before (L10595-L10596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/99.js#L10595-L10596)

```diff
-   15949: CC => {
-     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
+   4994: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (183 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   40956: (CC, zC, ZC) => {
+   41339: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var QC = ZC(40958),
-       wC = ZC(37849);
-     class bC extends((0, QC.g)(wC.e)) {}(0, QC.i)(wC.e, bC);
-     var nC = ZC(37040);
-     class fC extends((0, QC.g)(nC.f)) {}(0, QC.i)(nC.f, fC);
-     var oC = ZC(37677);
-     class qC extends((0, QC.g)(oC.d)) {}(0, QC.i)(oC.d, qC);
-     var FC = ZC(37290),
-       WC = ZC(40092),
-       NC = ZC(37285);
-     class MC extends((0, QC.g)(NC.d)) {
+     var Op = cp(41345),
+       op = cp(38232);
+     class Ip extends((0, Op.d)(op.d)) {}(0, Op.g)(op.d, Ip);
+     var Sp = cp(37411);
+     class xp extends((0, Op.d)(Sp.h)) {}(0, Op.g)(Sp.h, xp);
+     var Lp = cp(38071);
+     class Yp extends((0, Op.d)(Lp.i)) {}(0, Op.g)(Lp.i, Yp);
+     var Dp = cp(37655),
+       Ap = cp(40459),
+       Pp = cp(37646);
+     class Wp extends((0, Op.d)(Pp.i)) {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L26)

```diff
-         (0, FC.k)(this._material), super.dispose(CC)
+         (0, Dp.i)(this._material), super.dispose(pp)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L28)

```diff
-     }(0, QC.i)(NC.d, MC), (0, NC.f)({
+     }(0, Op.g)(Pp.i, Wp), (0, Pp.j)({
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var gC = ZC(38517);
-     class SC extends((0, QC.g)(gC.c)) {}(0, QC.i)(gC.c, SC);
-     var pC = ZC(38623),
-       PC = ZC(37149),
-       GC = ZC(37973),
-       RC = ZC(37086);
-     class AC extends((0, QC.g)(pC.e)) {}(0, QC.i)(pC.e, AC);
-     class xC extends((0, QC.g)(PC.b)) {}(0, QC.i)(PC.b, xC);
-     class JC extends((0, QC.g)(GC.q)) {}(0, QC.i)(GC.q, JC);
-     class IC extends((0, QC.g)(RC.e)) {}(0, QC.i)(RC.e, IC)
+     var yp = cp(38916);
+     class Up extends((0, Op.d)(yp.g)) {}(0, Op.g)(yp.g, Up);
+     var wp = cp(39014),
+       vp = cp(37496),
+       tp = cp(38352),
+       Hp = cp(37454);
+     class dp extends((0, Op.d)(wp.b)) {}(0, Op.g)(wp.b, dp);
+     class ep extends((0, Op.d)(vp.d)) {}(0, Op.g)(vp.d, ep);
+     class jp extends((0, Op.d)(tp.q)) {}(0, Op.g)(tp.q, jp);
+     class kp extends((0, Op.d)(Hp.d)) {}(0, Op.g)(Hp.d, kp)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   41355: (CC, zC, ZC) => {
+   41801: (pp, ip, cp) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L48-L60` → after: `L48-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L48-L60) · [Before (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L48-L60)

```diff
-     var QC = ZC(41362),
-       wC = (ZC(39791), ZC(40948), ZC(40308), ZC(41375)),
-       bC = ZC(37138),
-       nC = ZC(36961),
-       fC = ZC(41392),
-       oC = ZC(41394),
-       qC = ZC(37083),
-       FC = (ZC(40958), ZC(41402)),
-       WC = ZC(41396),
-       NC = ZC(38548),
-       MC = ZC(41411),
-       gC = ZC(39674),
-       SC = ZC(38529);
+     var Op = cp(41806),
+       op = (cp(40182), cp(41333), cp(40663), cp(41814)),
+       Ip = cp(37479),
+       Sp = cp(37313),
+       xp = cp(41826),
+       Lp = cp(41834),
+       Yp = cp(37448),
+       Dp = (cp(41345), cp(41851)),
+       Ap = cp(41843),
+       Pp = cp(38949),
+       Wp = cp(41860),
+       yp = cp(40062),
+       Up = cp(38938);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L62)

```diff
-       PC = SC.x,
+       vp = Up.o,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L64-L66` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L64-L66) · [Before (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L64-L66)

```diff
-       RC = CC => `gpuParticleSystem[${CC>>2}].${"xyzw"[3&CC]}`,
-       AC = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${SC.d}\n#define COLOR_POSITIONS ${GC(PC.colorPositions)}\n#define COLOR1 ${GC(PC.color1)}\n#define COLOR2 ${GC(PC.color2)}\n#define VELOCITY ${GC(PC.Np)}\n#define REMAP $ … [truncated]
-     gC.b.ShadersStore[`${pC}VertexShader`] = AC, gC.b.ShadersStore[`${pC}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
+       Hp = pp => `gpuParticleSystem[${pp>>2}].${"xyzw"[3&pp]}`,
+       dp = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Up.d}\n#define COLOR_POSITIONS ${tp(vp.colorPositions)}\n#define COLOR1 ${tp(vp.color1)}\n#define COLOR2 ${tp(vp.color2)}\n#define VELOCITY ${tp(vp.tw)}\n#define REMAP $ … [truncated]
+     yp.b.ShadersStore[`${wp}VertexShader`] = dp, yp.b.ShadersStore[`${wp}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L69-L71` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L69-L71) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L69-L71)

```diff
-     var IC = ZC(38523),
-       iC = ZC(41418);
-     class vC extends IC.d {
+     var kp = cp(38930),
+       mp = cp(41864);
+     class Rp extends kp.c {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L73)

```diff
-         super(CC, zC, ZC), this.renderer = ZC, this.sS = QC, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(SC.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(pp, ip, cp), this.renderer = cp, this.pw = Op, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Up.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L80-L82` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L80-L82) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L80-L82)

```diff
-             const CC = Math.floor(bC / SC.n),
-               ZC = Math.min(zC, (CC + 1) * SC.n);
-             QC.texSubImage2D(QC.TEXTURE_2D, 0, bC % SC.n * 4, CC, 4 * (ZC - bC), 1, QC.RGBA_INTEGER, QC.UNSIGNED_INT, wC, bC * SC.e), bC = ZC
+             const pp = Math.floor(Ip / Up.l),
+               cp = Math.min(ip, (pp + 1) * Up.l);
+             Op.texSubImage2D(Op.TEXTURE_2D, 0, Ip % Up.l * 4, pp, 4 * (cp - Ip), 1, Op.RGBA_INTEGER, Op.UNSIGNED_INT, op, Ip * Up.e), Ip = cp
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L86)

```diff
-         const wC = QC.mg();
+         const op = Op.gy();
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L89)

```diff
-           nC = Math.min(bC, SC.n);
+           Sp = Math.min(Ip, Up.l);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L93-L94)

```diff
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.sS.getAnimationRatio() || 1;
-         const zC = this.sS.getFrameId();
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pw.getAnimationRatio() || 1;
+         const ip = this.pw.getFrameId();
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L107-L108)

```diff
-         (0, iC.h)(this, this.uniforms, this.uniformBits, CC);
-         for (const ZC of SC.t) this.uniforms[ZC] = this.uniformBits[ZC];
+         (0, mp.i)(this, this.uniforms, this.uniformBits, pp);
+         for (const cp of Up.n) this.uniforms[cp] = this.uniformBits[cp];
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L110)

```diff
-         (0, iC.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (zC = this.ramp) || void 0 === zC || zC.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = WC.b.CreateRGBATexture(this.rampTexels.texels, SC.k, … [truncated]
+         (0, mp.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ip = this.ramp) || void 0 === ip || ip.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Ap.b.CreateRGBATexture(this.rampTexels.texels, Up.k, … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L120)

```diff
-         this.sS = CC, this.reportFailure = zC, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, MC.b)(), this.engine = CC.mg(), this. … [truncated]
+         this.pw = pp, this.reportFailure = ip, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Wp.c)(), this.engine = pp.gy(), this. … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L123-L126` → after: `L123-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L123-L126) · [Before (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L123-L126)

```diff
-         const ZC = SC.n * this.engine.getCaps().maxTextureSize;
-         zC > ZC && this.warnOnce(`capacity:${CC}`, `particle system ${CC} holds ${ZC} particles, not ${zC}: its records texture's limit`);
-         const QC = new vC(CC, Math.min(zC, ZC), this, this.sS);
-         return this.sS.addParticleSystem(QC), QC
+         const cp = Up.l * this.engine.getCaps().maxTextureSize;
+         ip > cp && this.warnOnce(`capacity:${pp}`, `particle system ${pp} holds ${cp} particles, not ${ip}: its records texture's limit`);
+         const Op = new Rp(pp, Math.min(ip, cp), this, this.pw);
+         return this.pw.addParticleSystem(Op), Op
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L131)

```diff
-         for (const QC of (0, NC.i)(CC.blendMode))
+         for (const Op of (0, Pp.o)(pp.blendMode))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L136)

```diff
-         this.sS._toBeDisposed.push(CC)
+         this.pw._toBeDisposed.push(pp)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L139)

```diff
-         this.sS.removeParticleSystem(CC), CC.releaseGl()
+         this.pw.removeParticleSystem(pp), pp.releaseGl()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L146)

```diff
-           sS: QC,
+           pw: Op,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L152)

```diff
-           fC = null !== (zC = CC.ramp) && void 0 !== zC ? zC : this.whiteRamp;
+           xp = null !== (ip = pp.ramp) && void 0 !== ip ? ip : this.whiteRamp;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L154)

```diff
-         for (const oC of (0, NC.i)(CC.blendMode)) {
+         for (const Lp of (0, Pp.o)(pp.blendMode)) {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L156)

```diff
-           ZC.enableEffect(zC), zC.setTexture("gpuParticleTexture", CC.texture.mirror), zC.setTexture("gpuParticleRampTexture", fC), zC._bindTexture("gpuParticleRecords", CC.records), zC.setMatrix("gpuParticleView", QC.getViewMatrix()), zC.setMatrix("gpuParticleProjection", QC.get … [truncated]
+           cp.enableEffect(ip), ip.setTexture("gpuParticleTexture", pp.texture.mirror), ip.setTexture("gpuParticleRampTexture", xp), ip._bindTexture("gpuParticleRecords", pp.records), ip.setMatrix("gpuParticleView", Op.getViewMatrix()), ip.setMatrix("gpuParticleProjection", Op.get … [truncated]
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L170)

```diff
-             if (zC) return `${QC} ${zC}`
+             if (ip) return `${Op} ${ip}`
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L179)

```diff
-         return CC === NC.e ? this.multiplyEffect : this.effect
+         return pp === Pp.d ? this.multiplyEffect : this.effect
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L184)

```diff
-           this.fail(null !== (ZC = this.gl()) && void 0 !== ZC && ZC.isContextLost() ? eC : function(CC) {
+           this.fail(null !== (cp = this.gl()) && void 0 !== cp && cp.isContextLost() ? qp : function(pp) {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L192-L193` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L192-L193) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L192-L193)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${CC}`), this.reportFailure(CC);
-           for (const CC of this.sS.Ix.slice()) CC instanceof vC && CC.disposeOnStop && CC.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${pp}`), this.reportFailure(pp);
+           for (const pp of this.pw.Wm.slice()) pp instanceof Rp && pp.disposeOnStop && pp.dispose()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L197)

```diff
-     var KC = ZC(39635);
+     var Cp = cp(40024);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211-L227` → after: `L211-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L211-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L211-L227) · [Before (L211-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L211-L227)

```diff
-     var HC = ZC(40031),
-       EC = ZC(40946),
-       lC = ZC(39766),
-       XC = ZC(39984),
-       cC = ZC(39978),
-       uC = ZC(39902),
-       rC = ZC(40992),
-       sC = ZC(37456),
-       TC = ZC(41422),
-       aC = ZC(41429),
-       tC = ZC(41434),
-       DC = ZC(39925),
-       jC = ZC(2837),
-       yC = ZC(37353),
-       LC = ZC(40136),
-       UC = ZC(37423),
- ... (1 more removed lines; see GitHub link above)
+     var Qp = cp(40405),
+       Jp = cp(41325),
+       Bp = cp(40159),
+       Np = cp(40365),
+       Tp = cp(40358),
+       fp = cp(40289),
+       bp = cp(41391),
+       hp = cp(37815),
+       ap = cp(41869),
+       np = cp(41871),
+       Fp = cp(41879),
+       gp = cp(40314),
+       Gp = cp(2949),
+       rp = cp(37713),
+       Zp = cp(40504),
+       zp = cp(37784),
+ ... (1 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L230-L231` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L230-L231) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L230-L231)

```diff
-       if (CC.visibility < 1 || !CC.isVisible || !CC.isEnabled() || CC.metadata[BC.e] || !CC.isReady()) return !0;
-       const zC = CC.Zx;
+       if (pp.visibility < 1 || !pp.isVisible || !pp.isEnabled() || pp.metadata[sp.f] || !pp.isReady()) return !0;
+       const ip = pp.Am;
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L235)

```diff
-           wC = QC.cg();
+           op = Op.Ky();
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L242)

```diff
-         this.MN = CC, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, zC.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.HP = pp, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ip.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L252-L255` → after: `L252-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L252-L255) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L252-L255)

```diff
-           MN: QC
-         } = this, wC = null === (zC = QC.JA) || void 0 === zC ? void 0 : zC.visibility;
-         if (!wC || !CC || QC.Vg.CS) return !1;
-         if (!(QC.fN.fQC[0] >= UC.e)) return !1;
+           HP: Op
+         } = this, op = null === (ip = Op.Zk) || void 0 === ip ? void 0 : ip.visibility;
+         if (!op || !pp || Op.WU.yU) return !1;
+         if (!(Op.WP.FOp[0] >= zp.i)) return !1;
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L258)

```diff
-         const nC = QC.YN,
+         const Sp = Op.BP,
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L261)

```diff
-         return oC[0] = fC.x + nC[0], oC[1] = fC.y + nC[1], oC[2] = fC.z + nC[2], !!wC.eyeClear(oC[0], oC[1], oC[2], CC.minZ, bC, QC.fN) && (this.vis = wC, this.passable.clear(), this.count = 0, !0)
+         return Lp[0] = xp.x + Sp[0], Lp[1] = xp.y + Sp[1], Lp[2] = xp.z + Sp[2], !!op.eyeClear(Lp[0], Lp[1], Lp[2], pp.minZ, Ip, Op.WP) && (this.vis = op, this.passable.clear(), this.count = 0, !0)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L282-L283` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L282-L283) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L282-L283)

```diff
-           fN: fC
-         } = this.MN, [oC, qC] = fC.fQC, FC = null !== ZC && ZC.update(QC[0], QC[1], QC[2], fC.WCC, oC, qC, this.passable);
+           WP: xp
+         } = this.HP, [Lp, Yp] = xp.FOp, Dp = null !== cp && cp.update(Op[0], Op[1], Op[2], xp.epp, Lp, Yp, this.passable);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L294)

```diff
-           DC.i.prototype.push.call(CC, QC)
+           gp.g.prototype.push.call(pp, Op)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L299-L304` → after: `L299-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L299-L304) · [Before (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L299-L304)

```diff
-     var VC = ZC(37404),
-       Cz = ZC(37363),
-       zz = ZC(40110),
-       Zz = ZC(41438),
-       Qz = ZC(40119),
-       wz = ZC(40046);
+     var ii = cp(37769),
+       ci = cp(37723),
+       Oi = cp(40476),
+       oi = cp(41884),
+       Ii = cp(40481),
+       Si = cp(40415);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L319)

```diff
-       const ZC = zC[yC.q],
+       const cp = ip[rp.s],
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L327)

```diff
-       const zC = CC.Zx;
+       const ip = pp.Am;
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L329)

```diff
-         const CC = zC[ZC].cg();
+         const pp = ip[cp].Ky();
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L333)

```diff
-         const CC = zC[ZC].cg();
+         const pp = ip[cp].Ky();
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L343)

```diff
-       if ("function" !== typeof ZC) throw new Error(`terrainDrawState: Babylon has no ${zC} to hook`);
+       if ("function" !== typeof cp) throw new Error(`terrainDrawState: Babylon has no ${ip} to hook`);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L348)

```diff
-       const bC = ZC.fN.WCC,
+       const Ip = cp.WP.epp,
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L352)

```diff
-         qC = new VC.d(bC, CC.mg());
+         Yp = new ii.d(Ip, pp.gy());
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L354)

```diff
-         if (Nz.has(CC) || (Nz.add(CC), CC.onContextLostObservable.add(oz), CC.Yg.add(oz)), Wz) return;
+         if (yi.has(pp) || (yi.add(pp), pp.onContextLostObservable.add(Di), pp.Fy.add(Di)), Wi) return;
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L356)

```diff
-         const zC = Zz.c.prototype,
+         const ip = oi.e.prototype,
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L363-L364` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L363-L364) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L363-L364)

```diff
-         const QC = Mz(wz.d.prototype, "_syncParentEnabledState");
-         Object.assign(wz.d.prototype, {
+         const Op = Ui(Si.b.prototype, "_syncParentEnabledState");
+         Object.assign(Si.b.prototype, {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L373)

```diff
-         const bC = zz.d.prototype,
+         const Ip = Oi.b.prototype,
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L384)

```diff
-       }(CC.mg());
+       }(pp.gy());
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L399-L400` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L399-L400) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L399-L400)

```diff
-             ZC = CC.SQC[0],
-             QC = CC.SQC[1];
+             cp = pp.KOp[0],
+             Op = pp.KOp[1];
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L416)

```diff
-             bC = oC.RM(CC.activeCamera),
+             Ip = Lp.mW(pp.activeCamera),
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L419)

```diff
-             const zC = CC.mg().currentRenderPassId;
+             const ip = pp.gy().currentRenderPassId;
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L436)

```diff
-             if (!LC.b.IsInFrustum(zC.SQC, QC)) continue;
+             if (!Zp.d.IsInFrustum(ip.KOp, Op)) continue;
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L446)

```diff
-                 if (nC && QC[zC] === qC) MC && 1 === wC[zC] && OC(NC) && 0, oC.see(NC, 1 === wC[zC] ? WC : -1);
+                 if (Sp && Op[ip] === Yp) Wp && 1 === op[ip] && Kp(Pp) && 0, Lp.see(Pp, 1 === op[ip] ? Ap : -1);
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L449)

```diff
-                   const CC = !0 === NC.metadata[Cz.l];
+                   const pp = !0 === Pp.metadata[ci.n];
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L453)

```diff
-                 } else bC ? AC(NC, WC, !0 === NC.metadata[Cz.l]) : DC.i.prototype.push.call(ZC, NC)
+                 } else Ip ? dp(Pp, Ap, !0 === Pp.metadata[ci.n]) : gp.g.prototype.push.call(cp, Pp)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L460` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L460) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L460)

```diff
-         const bC = zC.gQC;
+         const Ip = ip.sOp;
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L463)

```diff
-           zC.isEnabled() && DC.i.prototype.push.call(QC, zC)
+           ip.isEnabled() && gp.g.prototype.push.call(Op, ip)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L467-L468` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L467-L468) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L467-L468)

```diff
-         pQC: () => oC.culled,
-         zQC: (CC, zC) => {
+         iop: () => Lp.culled,
+         TOp: (pp, ip) => {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L472)

```diff
-             qC = `${wC}|${fC}|${oC}`;
+             Yp = `${op}|${xp}|${Lp}`;
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L476-L478` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L476-L478) · [Before (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L476-L478)

```diff
-             ZC.wzC([wC * bC - 1, fC * bC - 1, oC * bC - 1], null, CC), FC = Object.assign(QC(CC, bC + 2), {
-               PQC: qC,
-               GQC: 0,
+             cp.uip([op * Ip - 1, xp * Ip - 1, Lp * Ip - 1], null, pp), Dp = Object.assign(Op(pp, Ip + 2), {
+               Oop: Yp,
+               oop: 0,
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L482)

```diff
-             }), RC(FC), MC[FC._noaSlot] = (0, jC.f)(wC, fC, oC), gC[3 * FC._noaSlot] = wC, gC[3 * FC._noaSlot + 1] = fC, gC[3 * FC._noaSlot + 2] = oC, nC.set(qC, FC)
+             }), Hp(Dp), Wp[Dp._noaSlot] = (0, Gp.j)(op, xp, Lp), yp[3 * Dp._noaSlot] = op, yp[3 * Dp._noaSlot + 1] = xp, yp[3 * Dp._noaSlot + 2] = Lp, Sp.set(Yp, Dp)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L484)

```diff
-           FC.GQC++, CC.metadata[yC.s] = FC
+           Dp.oop++, pp.metadata[rp.w] = Dp
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L486-L488` → after: `L486-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L486-L488) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L486-L488)

```diff
-         IH: CC => {
-           const zC = CC.metadata[yC.s];
-           zC && (zC.GQC--, zC.GQC <= 0 && (nC.delete(zC.PQC), pC.push(zC._noaSlot)), CC.metadata[yC.s] = null)
+         xJ: pp => {
+           const ip = pp.metadata[rp.w];
+           ip && (ip.oop--, ip.oop <= 0 && (Sp.delete(ip.Oop), wp.push(ip._noaSlot)), pp.metadata[rp.w] = null)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L490)

```diff
-         MQC: (CC, zC) => {
+         zOp: (pp, ip) => {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L492)

```diff
-             QC = zC.metadata[yC.s];
+             Op = ip.metadata[rp.w];
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L506)

```diff
-         y_: CC => {
+         K9: pp => {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L508-L509` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L508-L509) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L508-L509)

```diff
-             zC.nQC.RQC(CC), zC.bQC.RQC(CC);
-             for (const ZC of zC.SQC) ZC.RQC(CC);
+             ip.nOp.Iop(pp), ip.aOp.Iop(pp);
+             for (const cp of ip.KOp) cp.Iop(pp);
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L531` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L531) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L531)

```diff
-         if (!(CC * (CC >= 0 ? nC : QC) + zC * (zC >= 0 ? fC : wC) + FC * (FC >= 0 ? oC : bC) + ZC[qC + 3] >= 0)) return !1
+         if (!(pp * (pp >= 0 ? Sp : Op) + ip * (ip >= 0 ? xp : op) + Dp * (Dp >= 0 ? Lp : Ip) + cp[Yp + 3] >= 0)) return !1
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L535)

```diff
-     var Pz = ZC(37604);
+     var Hi = cp(37996);
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L538-L541` → after: `L538-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L538-L541) · [Before (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L538-L541)

```diff
-         var ZC = CC.sS;
-         ZC.sZC(new tC.e(ZC));
-         var QC = new TC.c(oC);
-         ZC.xQC = QC, QC.blocks = [];
+         var cp = pp.pw;
+         cp.uOp(new Fp.c(cp));
+         var Op = new ap.d(Lp);
+         cp.xop = Op, Op.blocks = [];
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L544-L546` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L544-L546) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L544-L546)

```diff
-         this.textPlanes = fC, this.pQC = () => wC.pQC(), this.y_ = CC => {
-           FC(QC, CC), wC.y_(CC)
-         }, this.zQC = (zC, ZC, nC) => {
+         this.textPlanes = xp, this.iop = () => op.iop(), this.K9 = pp => {
+           Dp(Op, pp), op.K9(pp)
+         }, this.TOp = (ip, cp, Sp) => {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L548` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L548) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L548)

```diff
-           if (!zC.metadata[yC.q] && !zC.metadata[yC.n]) {
+           if (!ip.metadata[rp.s] && !ip.metadata[rp.l]) {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L550-L551` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L550-L551) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L550-L551)

```diff
-               var oC = QC.gQC;
-               if (zC.metadata[yC.x] && !zC.parent) {
+               var Lp = Op.sOp;
+               if (ip.metadata[rp.B] && !ip.parent) {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L553-L554)

```diff
-                 var FC = zC.WE().IQC;
-                 zC.metadata[yC.y] = FC.center.length() + FC.radius, zC.Hg = !0
+                 var Dp = ip.bJ().Yop;
+                 ip.metadata[rp.C] = Dp.center.length() + Dp.radius, ip.Gy = !0
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L556)

```diff
-               return oC.push(zC), zC.metadata[yC.g] = oC, void(zC.metadata[yC.n] = !0)
+               return Lp.push(ip), ip.metadata[rp.h] = Lp, void(ip.metadata[rp.l] = !0)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L566)

```diff
-               CC.MN.wzC(PC, null, GC), pC = WC(GC, qC), QC.blocks.push(pC), bC[SC] = pC, pC.PQC = SC
+               pp.HP.uip(vp, null, tp), wp = Ap(tp, Yp), Op.blocks.push(wp), Ip[Up] = wp, wp.Oop = Up
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L568)

```diff
-             wC.zQC(zC, nC), wC.MQC(pC, zC), pC.GQC = (pC.GQC || 0) + 1, zC.metadata[yC.q] = pC, zC.metadata[yC.o] = !0, zC.Hg = !0
+             op.TOp(ip, Sp), op.zOp(wp, ip), wp.oop = (wp.oop || 0) + 1, ip.metadata[rp.s] = wp, ip.metadata[rp.o] = !0, ip.Gy = !0
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L570` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L570) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L570)

```diff
-         }, this.IH = CC => {
+         }, this.xJ = pp => {
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L572-L574` → after: `L572-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L572-L574) · [Before (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L572-L574)

```diff
-             CC.metadata[yC.n] && ((0, jC.i)(CC.metadata[yC.g], CC), CC.metadata[yC.n] = !1), CC.metadata[yC.g] === fC && (CC.Hg = !1), CC.metadata[yC.g] = void 0, CC.metadata[yC.y] = void 0;
-             var zC = CC.metadata[yC.q];
-             zC && zC.entries && (CC.metadata[yC.o] && wC.removeEntry(zC, CC), zC.GQC--, zC.GQC <= 0 && (delete bC[zC.PQC], (0, jC.i)(QC.blocks, zC))), wC.IH(CC), CC.metadata[yC.q] = null, CC.metadata[yC.o] = !1
+             pp.metadata[rp.l] && ((0, Gp.l)(pp.metadata[rp.h], pp), pp.metadata[rp.l] = !1), pp.metadata[rp.h] === xp && (pp.Gy = !1), pp.metadata[rp.h] = void 0, pp.metadata[rp.C] = void 0;
+             var ip = pp.metadata[rp.s];
+             ip && ip.entries && (pp.metadata[rp.o] && op.removeEntry(ip, pp), ip.oop--, ip.oop <= 0 && (delete Ip[ip.Oop], (0, Gp.l)(Op.blocks, ip))), op.xJ(pp), pp.metadata[rp.s] = null, pp.metadata[rp.o] = !1
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L576)

```diff
-         }, this.S_ = function(CC) {
+         }, this.h_ = function(pp) {
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L578)

```diff
-           if (CC.metadata[yC.q]) {
+           if (pp.metadata[rp.s]) {
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L580-L581` → after: `L580-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L580-L581) · [Before (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L580-L581)

```diff
-             var ZC = CC.metadata[yC.q];
-             ZC && ZC.entries && (zC ? wC.MQC(ZC, CC) : wC.removeEntry(ZC, CC)), CC.metadata[yC.o] = zC
+             var cp = pp.metadata[rp.s];
+             cp && cp.entries && (ip ? op.zOp(cp, pp) : op.removeEntry(cp, pp)), pp.metadata[rp.o] = ip
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L583-L585` → after: `L583-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L583-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L583-L585) · [Before (L583-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L583-L585)

```diff
-             if (CC.metadata[yC.n] === zC) return;
-             var bC = CC.metadata[yC.g] || QC.gQC;
-             zC ? bC.push(CC) : (0, jC.i)(bC, CC), CC.metadata[yC.n] = zC
+             if (pp.metadata[rp.l] === ip) return;
+             var Ip = pp.metadata[rp.h] || Op.sOp;
+             ip ? Ip.push(pp) : (0, Gp.l)(Ip, pp), pp.metadata[rp.l] = ip
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L589)

```diff
-           qC = zC * CC.MN.fN.WCC,
+           Yp = ip * pp.HP.WP.epp,
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L592)

```diff
-               CC.nQC.RQC(zC), CC.bQC.RQC(zC), CC.SQC.forEach((CC => CC.RQC(zC))), CC.blocks && FC(CC, zC)
+               pp.nOp.Iop(ip), pp.aOp.Iop(ip), pp.KOp.forEach((pp => pp.Iop(ip))), pp.blocks && Dp(pp, ip)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L596-L597` → after: `L596-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L596-L597) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L596-L597)

```diff
-             var ZC = new nC.Eg(CC[0], CC[1], CC[2]),
-               QC = new nC.Eg(CC[0] + zC, CC[1] + zC, CC[2] + zC);
+             var cp = new Sp.Zy(pp[0], pp[1], pp[2]),
+               Op = new Sp.Zy(pp[0] + ip, pp[1] + ip, pp[2] + ip);
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L600)

```diff
-         wC = gz(ZC, QC, CC.MN, WC, ((CC, zC) => {
+         op = wi(cp, Op, pp.HP, Ap, ((pp, ip) => {
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L603)

```diff
-             QC.isEnabled(!1) && ((0, Pz.b)(QC, zC) && DC.i.prototype.push.call(CC, QC))
+             Op.isEnabled(!1) && ((0, Hi.d)(Op, ip) && gp.g.prototype.push.call(pp, Op))
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L613)

```diff
-         Vk: QC,
+         tV: Op,
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L617-L618` → after: `L617-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L617-L618) · [Before (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L617-L618)

```diff
-       } = CC.model.Lk, fC = CC.dQC;
-       fC.position.L_(zC[0], zC[1], zC[2]), fC.rotation.L_(ZC[0], ZC[1], ZC[2]);
+       } = pp.model.wV, xp = pp.vop;
+       xp.position.i5(ip[0], ip[1], ip[2]), xp.rotation.i5(cp[0], cp[1], cp[2]);
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L620)

```diff
-       oC.position.L_(QC[0], QC[1], QC[2]), oC.fov = wC, oC.minZ = bC, oC.maxZ = nC
+       Lp.position.i5(Op[0], Op[1], Op[2]), Lp.fov = op, Lp.minZ = Ip, Lp.maxZ = Sp
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L624` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L624) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L624)

```diff
-       const zC = CC.mg(),
+       const ip = pp.gy(),
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L627)

```diff
-       if (!QC || ZC.fS < 2 || zC.BZC || QC.getParameter(QC.DEPTH_BITS) < 24) return !1;
+       if (!Op || cp.eU < 2 || ip.lOp || Op.getParameter(Op.DEPTH_BITS) < 24) return !1;
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L645-L647` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L645-L647) · [Before (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L645-L647)

```diff
-       return [zC, sC.h].map(((zC, ZC) => {
-         const QC = new wC.e("light", nC.Eg.FromArray(zC), CC);
-         return QC.diffuse = bC.Color3.FromArray([1, 1, 1]), QC.specular = bC.Color3.FromArray([1, 1, 1]), QC.intensity = sC.e[ZC], QC
+       return [ip, hp.f].map(((ip, cp) => {
+         const Op = new op.d("light", Sp.Zy.FromArray(ip), pp);
+         return Op.diffuse = Ip.Color3.FromArray([1, 1, 1]), Op.specular = Ip.Color3.FromArray([1, 1, 1]), Op.intensity = hp.b[cp], Op
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L650)

```diff
-     class Jz extends oC.c {
+     class ki extends Lp.e {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L659)

```diff
-         this.heldTexture = CC, this.particleTexture = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.mirror) && void 0 !== zC ? zC : null
+         this.heldTexture = pp, this.particleTexture = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.mirror) && void 0 !== ip ? ip : null
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L673-L674` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L673-L674) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L673-L674)

```diff
-       gZC: function(CC, zC) {
-         return new YC(CC, zC.FZC, {
+       Zcp: function(pp, ip) {
+         return new Ep(pp, ip.Fcp, {
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L681` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L681) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L681)

```diff
-       EQC: function(CC, zC) {
+       jop: function(pp, ip) {
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L683-L687` → after: `L683-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L683-L687) · [Before (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L683-L687)

```diff
-           const QC = new uC.e(CC.engine);
-           CC.sS = QC, QC.detachControl(), QC.autoClear = !1, cC.b.MIN_RENDERINGGROUPS = -1;
-           for (let bC = cC.b.MIN_RENDERINGGROUPS; bC <= 1; bC++) QC.setRenderingOrder(bC, XC.b.PainterSortCompare, XC.b.PainterSortCompare, XC.b.PainterSortCompare);
-           QC.setRenderingAutoClearDepthStencil(0, !1), lC.b.Enabled = !1, CC.hQC = new Gz(CC, Math.round(zC.KQC)), CC.dQC = new EC.c("camHolder", QC), CC.camera = new HC.d("camera", new nC.Eg(0, 0, 0), QC), CC.camera.parent = CC.dQC, Rz(CC), (0, sC.l)(CC, ((CC, zC, ZC) => (0, rC. … [truncated]
-           const wC = ZC(QC, zC.HQC);
+           const Op = new fp.c(pp.engine);
+           pp.pw = Op, Op.detachControl(), Op.autoClear = !1, Tp.d.MIN_RENDERINGGROUPS = -1;
+           for (let Ip = Tp.d.MIN_RENDERINGGROUPS; Ip <= 1; Ip++) Op.setRenderingOrder(Ip, Np.b.PainterSortCompare, Np.b.PainterSortCompare, Np.b.PainterSortCompare);
+           Op.setRenderingAutoClearDepthStencil(0, !1), Bp.b.Enabled = !1, pp.yop = new di(pp, Math.round(ip.Uop)), pp.vop = new Jp.b("camHolder", Op), pp.camera = new Qp.b("camera", new Sp.Zy(0, 0, 0), Op), pp.camera.parent = pp.vop, ei(pp), (0, hp.i)(pp, ((pp, ip, cp) => (0, bp. … [truncated]
+           const op = cp(Op, ip.uop);
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L689)

```diff
-             wC.some((zC => zC === CC)) || console.error(`Light "${CC.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
+             op.some((ip => ip === pp)) || console.error(`Light "${pp.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L691)

```diff
-         }(CC, zC, xz), Az(CC.sS)
+         }(pp, ip, ji), ui(pp.pw)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L693` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L693) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L693)

```diff
-       YQC: Rz,
+       wop: ei,
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L695)

```diff
-         const wC = CC.sS;
+         const op = pp.pw;
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L698-L699` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L698-L699) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L698-L699)

```diff
-       XQC: function(CC, zC, ZC) {
-         return CC.engine.fS >= 2 && (CC.uQC || (CC.uQC = new hC(CC.sS, CC.rQC)), !CC.uQC.failed) ? CC.uQC.DH(zC, ZC) : new Jz(zC, ZC, CC.sS)
+       Rop: function(pp, ip, cp) {
+         return pp.engine.eU >= 2 && (pp.qop || (pp.qop = new Mp(pp.pw, pp.Mop)), !pp.qop.failed) ? pp.qop.eJ(ip, cp) : new ki(ip, cp, pp.pw)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L701-L703` → after: `L701-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L701-L703) · [Before (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L701-L703)

```diff
-       TQC: function(CC, zC) {
-         CC.sS.Ix.forEach((ZC => {
-           if (ZC instanceof vC) return void ZC.y_(zC, CC.MN.YN);
+       Xop: function(pp, ip) {
+         pp.pw.Wm.forEach((cp => {
+           if (cp instanceof Rp) return void cp.K9(ip, pp.HP.BP);
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L709)

```diff
-             QC.worldOffset.x = -CC.MN.YN[0], QC.worldOffset.y = -CC.MN.YN[1], QC.worldOffset.z = -CC.MN.YN[2]
+             Op.worldOffset.x = -pp.HP.BP[0], Op.worldOffset.y = -pp.HP.BP[1], Op.worldOffset.z = -pp.HP.BP[2]
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L714-L715` → after: `L714-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L714-L715) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L714-L715)

```diff
-         const QC = new fC.d(zC, CC.sS, null, void 0, void 0, !1);
-         return (0, rC.e)(zC, ZC, CC.sS, QC), QC
+         const Op = new xp.b(ip, pp.pw, null, void 0, void 0, !1);
+         return (0, bp.e)(ip, cp, pp.pw, Op), Op
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L717-L719` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L717-L719) · [Before (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L717-L719)

```diff
-       aS: qz,
-       sQC: function(CC, zC) {
-         return Iz.origin.Av(zC.origin), Iz.direction.Av(zC.direction), Iz.length = zC.length, Iz.epsilon = zC.epsilon, Iz.sQC(CC, !1, void 0, !1, void 0, !0).pickedPoint
+       iw: Ai,
+       Eop: function(pp, ip) {
+         return mi.origin.rM(ip.origin), mi.direction.rM(ip.direction), mi.length = ip.length, mi.epsilon = ip.epsilon, mi.Eop(pp, !1, void 0, !1, void 0, !0).pickedPoint
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L723)

```diff
-   40958: (CC, zC, ZC) => {
+   41345: (pp, ip, cp) => {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L726-L727` → after: `L726-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L726-L727) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L726-L727)

```diff
-       g: () => GC,
-       i: () => LC
+       d: () => tp,
+       g: () => Zp
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L729-L742` → after: `L729-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L729-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L729-L742) · [Before (L729-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L729-L742)

```diff
-     var QC = ZC(40092),
-       wC = ZC(40963),
-       bC = ZC(40994),
-       nC = ZC(40968),
-       fC = ZC(37648),
-       oC = ZC(37660),
-       qC = ZC(37666),
-       FC = ZC(37670),
-       WC = ZC(37076),
-       NC = ZC(37083),
-       MC = ZC(40970),
-       gC = ZC(37061),
-       SC = ZC(37063),
-       pC = ZC(37050);
+     var Op = cp(40459),
+       op = cp(41347),
+       Ip = cp(41393),
+       Sp = cp(41353),
+       xp = cp(38045),
+       Lp = cp(38055),
+       Yp = cp(38061),
+       Dp = cp(38064),
+       Ap = cp(37445),
+       Pp = cp(37448),
+       Wp = cp(41359),
+       yp = cp(37433),
+       Up = cp(37436),
+       wp = cp(37421);
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L748)

```diff
-         Qg: CC
+         Py: pp
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L753)

```diff
-       const zC = class extends MC.e {
+       const ip = class extends Wp.c {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L755-L756` → after: `L755-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L755-L756) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L755-L756)

```diff
-             const QC = (0, SC.Y)(zC),
-               wC = QC && (0, SC.x)(QC, CC.name);
+             const Op = (0, Up.$)(ip),
+               op = Op && (0, Up.s)(Op, pp.name);
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L758)

```diff
-             super(zC, CC.name, CC.priority, wC ? wC.defines : CC.defines(...nC), !1), this.featureState = void 0, this.featureState = ZC, this._pluginManager._addPlugin(this), this._enable(!0), (0, SC.B)(this._material, CC, this.featureState, this._pluginDefineNames)
+             super(ip, pp.name, pp.priority, op ? op.defines : pp.defines(...Sp), !1), this.featureState = void 0, this.featureState = cp, this._pluginManager._addPlugin(this), this._enable(!0), (0, Up.v)(this._material, pp, this.featureState, this._pluginDefineNames)
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L764` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L764) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L764)

```diff
-             return CC === pC.e.GLSL || CC === pC.e.WGSL
+             return pp === wp.b.GLSL || pp === wp.b.WGSL
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L782-L784` → after: `L782-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L782-L784) · [Before (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L782-L784)

```diff
-     var AC = ZC(39635),
-       xC = ZC(40977);
-     const JC = new WeakMap;
+     var dp = cp(40024),
+       ep = cp(41367),
+       jp = cp(41375);
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L787-L794` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L787) · [Before (L787-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L787-L794)

```diff
-       let QC = JC.get(ZC);
-       QC || (QC = new Map, JC.set(ZC, QC));
-       const {
-         url: wC
-       } = CC;
-       let bC = QC.get(wC);
-       return bC || (bC = async function(CC, zC, ZC) {
-         var QC;
+       return (0, jp.h)(cp, ip.urls, (() => async function(pp, ip, cp) {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L796-L806` → after: `L789-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L789-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L789-L815) · [Before (L796-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L796-L806)

```diff
-           width: wC,
-           height: bC
-         } = CC.getSize(), fC = Math.round(bC / wC), oC = CC.getInternalTexture(), qC = zC && zC.byteLength === wC * wC * fC * 4 ? zC : null !== (QC = iC.get(oC)) && void 0 !== QC ? QC : CC._readPixelsSync(), FC = new xC.d(qC, wC, wC, fC, AC.d.TEXTUREFORMAT_RGBA, ZC, !0, !1, nC.e. … [truncated]
-         iC.has(oC) || (! function(CC, zC) {
-           const ZC = zC.createRawTexture(new Uint8Array(4), 1, 1, AC.d.TEXTUREFORMAT_RGBA, !1, !1, nC.e.NEAREST_SAMPLINGMODE);
-           CC._hardwareTexture.release(), zC.unbindAllTextures(), ZC._swapAndDie(CC, !1)
-         }(oC, ZC.mg()), iC.set(oC, qC));
-         return FC
-       }(CC, zC, ZC), QC.set(wC, bC), bC.catch((() => {
-         QC.delete(wC)
-       }))), bC
+           width: Op
+         } = pp[0].getSize(), op = pp.map(((pp, cp) => {
+           var op;
+           const Ip = Math.round(pp.getSize().height / Op),
+             Sp = null === ip || void 0 === ip ? void 0 : ip[cp];
+           return {
+             pixels: Sp && Sp.byteLength === Op * Op * Ip * 4 ? Sp : null !== (op = mp.get(pp.getInternalTexture())) && void 0 !== op ? op : pp._readPixelsSync(),
+             layers: Ip
+           }
+         })), Ip = cp.gy().getCaps().texture2DArrayMaxLayerCount, xp = (0, jp.d)(op, Op, Ip).map((pp => {
+           let {
+             pixels: ip,
+             layers: op
+           } = pp;
+           return {
+             atlas: new ep.c(ip, Op, Op, op, dp.d.TEXTUREFORMAT_RGBA, cp, !0, !1, Sp.d.NEAREST_NEAREST_MIPLINEAR),
+ ... (11 more added lines; see GitHub link above)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L809-L810` → after: `L818-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L818-L819) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L809-L810)

```diff
-     var vC = ZC(37673);
-     class eC extends(GC(oC.j)) {
+     var Rp = cp(38069);
+     class qp extends(tp(Lp.f)) {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L812-L813` → after: `L821-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L821-L822) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L812-L813)

```diff
-         super(CC, zC), zC.textures.forEach(((CC, zC) => {
-           CC.mirror.onLoadObservable.add((CC => {
+         super(pp, ip), this.loaded = new Set, this.mirrors = void 0, this.mirrors = ip.textures.map((pp => pp.mirror)), this.mirrors.forEach(((pp, ip) => {
+           pp.onLoadObservable.add((pp => {
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L815` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L824) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L815)

```diff
-               console.error(`Failed to build texture array for atlas ${zC}`, CC)
+               console.error(`Failed to build the texture arrays, at atlas ${ip}`, pp)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L818` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L827) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L818)

```diff
-         })), (0, vC.k)(zC, CC.shaderLanguage)
+         })), (0, Rp.n)(ip, pp.shaderLanguage)
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L827-L828` → after: `L835-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L835-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L835-L839) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L827-L828)

```diff
-           fC = wC.useWebGL2 ? await IC(CC, null !== (ZC = null === (QC = wC.sources.pixels) || void 0 === QC ? void 0 : QC[zC]) && void 0 !== ZC ? ZC : null, this._material.Km()) : null;
-         (0, vC.d)(this._material, wC, zC, fC, bC, Math.round(nC / bC), this._material.shaderLanguage)
+           Ip = this._material.shaderLanguage;
+         if (!cp.useWebGL2) return void(0, Rp.f)(this._material, cp, ip, Op, Math.round(op / Op), Ip);
+         if (this.loaded.add(ip), this.loaded.size < this.mirrors.length) return;
+         const Sp = await kp(this.mirrors, cp.sources, this._material.Gl());
+         (0, Rp.b)(this._material, cp, Sp, Op, Ip)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L831-L839` → after: `L842-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L842-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L842-L850) · [Before (L831-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L831-L839)

```diff
-     var hC = ZC(40985),
-       KC = ZC(40127),
-       YC = ZC(36961),
-       dC = ZC(40988),
-       mC = ZC(40235),
-       HC = ZC(40119),
-       EC = ZC(40946),
-       lC = ZC(37432),
-       XC = ZC(40992);
+     var Mp = cp(41378),
+       Cp = cp(40498),
+       Ep = cp(37313),
+       Xp = cp(41383),
+       lp = cp(40589),
+       Qp = cp(40481),
+       Jp = cp(41325),
+       Bp = cp(37800),
+       Np = cp(41391);
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L850-L852` → after: `L861-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L861-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L861-L863) · [Before (L850-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L850-L852)

```diff
-       Mesh: dC.e,
-       TransformNode: EC.c,
-       gg: hC.c,
+       Mesh: Xp.c,
+       TransformNode: Jp.b,
+       my: Mp.c,
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L855` → after: `L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L866) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L855)

```diff
-       Eg: YC.Eg,
+       Zy: Ep.Zy,
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L858-L859` → after: `L869-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L869-L870) · [Before (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L858-L859)

```diff
-       VertexData: mC.e,
-       MirroredGeometry: XC.d,
+       VertexData: lp.d,
+       MirroredGeometry: Np.b,
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L863-L865` → after: `L874-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L874-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L874-L876) · [Before (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L863-L865)

```diff
-     (0, lC.e)(uC);
-     var rC = ZC(37290);
-     class sC extends(GC(FC.f)) {
+     (0, Bp.g)(fp);
+     var bp = cp(37655);
+     class hp extends(tp(Dp.g)) {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L871-L872` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L882-L883) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L871-L872)

```diff
-           const QC = (0, SC.Y)(CC);
-           QC && (QC.disableLighting = !0, (0, SC.W)(QC))
+           const Op = (0, Up.$)(pp);
+           Op && (Op.disableLighting = !0, (0, Up.Y)(Op))
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L876` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L887) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L876)

```diff
-         (0, rC.k)(this._material), super.dispose(CC)
+         (0, bp.i)(this._material), super.dispose(pp)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L891-L894` → after: `L902-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L902-L905) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L891-L894)

```diff
-     var aC = ZC(37175),
-       tC = ZC(37450);
-     const DC = new RegExp(`^#define ${qC.e}\\s*$`, "m");
-     class jC extends(GC(qC.g)) {
+     var np = cp(37519),
+       Fp = cp(37807);
+     const gp = new RegExp(`^#define ${Yp.b}\\s*$`, "m");
+     class Gp extends(tp(Yp.h)) {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L896` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L907) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L896)

```diff
-         super(CC, zC), this.Sg = !1, zC.ditherOnlyWhileFading && (tC.g.add(CC), this.prewarmDitherTwins(CC))
+         super(pp, ip), this.Ry = !1, ip.ditherOnlyWhileFading && (Fp.d.add(pp), this.prewarmDitherTwins(pp))
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L908` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L919) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L908)

```diff
-           bC && !DC.test(QC.defines) && CC.Km().onAfterRenderObservable.addOnce((() => {
+           Ip && !gp.test(Op.defines) && pp.Gl().onAfterRenderObservable.addOnce((() => {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L914` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L925) · [Before (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L914)

```diff
-         if (this.Sg || CC.GJ()) return !1;
+         if (this.Ry || pp.uR()) return !1;
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L925` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L936) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L925)

```diff
-         this.Sg = !0, super.dispose(CC)
+         this.Ry = !0, super.dispose(pp)
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L933` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L944) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L933)

```diff
-     LC(fC.d, RC), LC(oC.j, eC), LC(qC.g, jC), LC(FC.f, sC), (0, WC.c)({
+     Zp(xp.d, Hp), Zp(Lp.f, qp), Zp(Yp.h, Gp), Zp(Dp.g, hp), (0, Ap.e)({
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L936` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L947) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L936)

```diff
-         return (0, aC.u)(CC, ZC), ZC.detailMap._pluginDefineNames
+         return (0, np.p)(pp, cp), cp.detailMap._pluginDefineNames
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L939` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L950) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L939)

```diff
-         (0, aC.X)(CC.mirror, zC, ZC)
+         (0, np.S)(pp.mirror, ip, cp)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L943` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L954) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L943)

```diff
-         if (!QC) throw new Error(`${zC.feature.name} has no plugin class (registerPluginClass)`);
+         if (!Op) throw new Error(`${ip.feature.name} has no plugin class (registerPluginClass)`);
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L956-L957` → after: `L967-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L967-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L967-L968) · [Before (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L956-L957)

```diff
-           const ZC = new nC.e(QC, zC, wC, bC, fC);
-           return Object.assign(ZC, qC), void(0, NC.L)(CC, ZC)
+           const cp = new Sp.d(Op, ip, op, Ip, xp);
+           return Object.assign(cp, Yp), void(0, Pp.K)(pp, cp)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L962` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L973) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L962)

```diff
-               zC(new Error(`${oC.context}: ${(null===ZC||void 0===ZC?void 0:ZC.message)||CC||"Failed to load texture"}`))
+               ip(new Error(`${Lp.context}: ${(null===cp||void 0===cp?void 0:cp.message)||pp||"Failed to load texture"}`))
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L979-L980` → after: `L990-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L990-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L990-L991) · [Before (L979-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L979-L980)

```diff
-           PC = new nC.e(null, zC, pC);
-         aC.w.set(PC, WC), Object.assign(PC, qC), PC.updateURL(QC, gC);
+           vp = new Sp.d(null, ip, wp);
+         np.t.set(vp, Ap), Object.assign(vp, Yp), vp.updateURL(Op, yp);
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L982` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L993) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L982)

```diff
-         GC && (GC.label = SC), CC.uvSet = PC.coordinatesIndex, CC.matrix.set((0, aC.P)(PC)), (0, NC.L)(CC, PC)
+         tp && (tp.label = Up), pp.uvSet = vp.coordinatesIndex, pp.matrix.set((0, np.L)(vp)), (0, Pp.K)(pp, vp)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L993-L996` → after: `L1004-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1004-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1004-L1007) · [Before (L993-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L993-L996)

```diff
-         } = CC.sampler, FC = qC === (0, NC.y)(fC) ? null : () => {
-           (0, aC.L)(WC, qC)
-         }, WC = new wC.c(QC, zC, null, fC, bC, FC, null, (0, NC.u)(oC));
-         WC.coordinatesMode = nC.e.SKYBOX_MODE, (0, NC.L)(CC, WC)
+         } = pp.sampler, Dp = Yp === (0, Pp.z)(xp) ? null : () => {
+           (0, np.J)(Ap, Yp)
+         }, Ap = new op.b(Op, ip, null, xp, Ip, Dp, null, (0, Pp.w)(Lp));
+         Ap.coordinatesMode = Sp.d.SKYBOX_MODE, (0, Pp.K)(pp, Ap)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1005` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1016) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1005)

```diff
-           wrap: FC = nC.e.CLAMP_ADDRESSMODE
+           wrap: Dp = Sp.d.CLAMP_ADDRESSMODE
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1007` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1018) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1007)

```diff
-         const WC = new bC.d(zC, {
+         const Ap = new Ip.e(ip, {
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1012-L1013` → after: `L1023-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1023-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1023-L1024) · [Before (L1012-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1012-L1013)

```diff
-         const NC = (0, aC.C)(WC);
-         return (0, aC.F)(NC, WC), NC
+         const Pp = (0, np.B)(Ap);
+         return (0, np.D)(Pp, Ap), Pp
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1017` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1028) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1017)

```diff
-   40992: (CC, zC, ZC) => {
+   41391: (pp, ip, cp) => {
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1019` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1030) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1019)

```diff
-       d: () => FC,
+       b: () => Dp,
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1023-L1030` → after: `L1034-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1034-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1034-L1041) · [Before (L1023-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1023-L1030)

```diff
-     var QC = ZC(40985),
-       wC = ZC(39882),
-       bC = ZC(40127),
-       nC = ZC(40244),
-       fC = ZC(40988),
-       oC = ZC(40235),
-       qC = ZC(37339);
-     class FC extends nC.c {
+     var Op = cp(41378),
+       op = cp(40273),
+       Ip = cp(40498),
+       Sp = cp(40593),
+       xp = cp(41383),
+       Lp = cp(40589),
+       Yp = cp(37698);
+     class Dp extends Sp.b {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1038` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1049) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1038)

```diff
-         (0, qC.n)(CC), this.model = CC, null === (zC = this.onLinked) || void 0 === zC || zC.call(this, CC)
+         (0, Yp.m)(pp), this.model = pp, null === (ip = this.onLinked) || void 0 === ip || ip.call(this, pp)
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1065` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1076) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1065)

```diff
-         this.link(new qC.f(CC, zC, this.getTotalVertices(), new Float64Array(ZC.VZC()), new Float64Array(QC.VZC())))
+         this.link(new Yp.f(pp, ip, this.getTotalVertices(), new Float64Array(cp.BOp()), new Float64Array(Op.BOp())))
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1069-L1070` → after: `L1080-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1080-L1081) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1069-L1070)

```diff
-         const zC = new FC(CC, this.Km()),
-           ZC = this.CQC(void 0, !0);
+         const ip = new Dp(pp, this.Gl()),
+           cp = this.NOp(void 0, !0);
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1085-L1086` → after: `L1096-L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1096-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1096-L1097) · [Before (L1085-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1085-L1086)

```diff
-           const NC = CC.getIsInstanced() ? (ZC instanceof Array ? 4 * ZC.length : ZC.byteLength) / FC : this.getTotalVertices(),
-             MC = (0, wC.o)(ZC, fC, oC, qC, FC, NC, !0),
+           const Pp = pp.getIsInstanced() ? (cp instanceof Array ? 4 * cp.length : cp.byteLength) / Dp : this.getTotalVertices(),
+             Wp = (0, op.s)(cp, xp, Lp, Yp, Dp, Pp, !0),
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1095` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1106) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1095)

```diff
-           zC.setVerticesBuffer(new QC.f(this.mg(), MC, bC, gC), NC)
+           ip.setVerticesBuffer(new Op.f(this.gy(), Wp, Ip, yp), Pp)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1100-L1102` → after: `L1111-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1111-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1111-L1113) · [Before (L1100-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1100-L1102)

```diff
-         const oC = CC[0].Km(),
-           qC = new fC.e(CC[0].name + "_merged", oC),
-           WC = new FC(nC.c.RandomId(), oC, void 0, !1, qC);
+         const Lp = pp[0].Gl(),
+           Yp = new xp.c(pp[0].name + "_merged", Lp),
+           Ap = new Dp(Sp.b.RandomId(), Lp, void 0, !1, Yp);
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1104` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1115) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1104)

```diff
-           if (!fC.e.MergeMeshes(CC, zC, ZC, qC, wC, bC)) return qC.dispose(), null
+           if (!xp.c.MergeMeshes(pp, ip, cp, Yp, op, Ip)) return Yp.dispose(), null
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1121` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1132) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1121)

```diff
-         this.model && ((0, qC.x)(this.model), this.model = null)
+         this.model && ((0, Yp.v)(this.model), this.model = null)
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1126` → after: `L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1137) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1126)

```diff
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fC.e(CC, ZC);
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xp.c(pp, cp);
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1135-L1137` → after: `L1146-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1146-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1146-L1148) · [Before (L1135-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1135-L1137)

```diff
-         SC = new oC.e;
-       SC.positions = bC, SC.normals = null !== WC && void 0 !== WC ? WC : null, SC.uvs = null !== NC && void 0 !== NC ? NC : null, SC.indices = MC;
-       const pC = new FC(nC.c.RandomId(), ZC, SC, !1, QC);
+         Up = new Lp.d;
+       Up.positions = Ip, Up.normals = null !== Ap && void 0 !== Ap ? Ap : null, Up.uvs = null !== Pp && void 0 !== Pp ? Pp : null, Up.indices = Wp;
+       const wp = new Dp(Sp.b.RandomId(), cp, Up, !1, Op);
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1148` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1159) · [Before (L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1148)

```diff
-       const wC = new fC.e(CC, ZC),
+       const op = new xp.c(pp, cp),
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1155` → after: `L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1166) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1155)

```diff
-       return Object.assign(new oC.e, {
+       return Object.assign(new Lp.d, {
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1163` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1174) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1163)

```diff
-   41418: (CC, zC, ZC) => {
+   41864: (pp, ip, cp) => {
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1165` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1176) · [Before (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1165)

```diff
-       c: () => pC,
+       d: () => wp,
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1167-L1168` → after: `L1178-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1178-L1179) · [Before (L1167-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1167-L1168)

```diff
-       h: () => nC,
-       j: () => qC
+       i: () => Sp,
+       m: () => Yp
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1170-L1172` → after: `L1181-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1181-L1183) · [Before (L1170-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1170-L1172)

```diff
-     var QC = ZC(37138),
-       wC = ZC(38538),
-       bC = ZC(38529);
+     var Op = cp(37479),
+       op = cp(38942),
+       Ip = cp(38938);
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1175` → after: `L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1186) · [Before (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1175)

```diff
-       const wC = bC.x;
+       const op = Ip.o;
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1183` → after: `L1194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1194) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1183)

```diff
-         zC[wC.colorPositions + bC] = CC.gradient, CC.color1.toArray(zC, wC.color1 + 4 * bC), (null !== (oC = CC.color2) && void 0 !== oC ? oC : CC.color1).toArray(zC, wC.color2 + 4 * bC)
+         ip[op.colorPositions + Ip] = pp.gradient, pp.color1.toArray(ip, op.color1 + 4 * Ip), (null !== (Lp = pp.color2) && void 0 !== Lp ? Lp : pp.color1).toArray(ip, op.color2 + 4 * Ip)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1186` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1197) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1186)

```diff
-         FC = NC(CC, qC, "Np", QC);
+         Dp = Pp(pp, Yp, "tw", Op);
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1188` → after: `L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1199) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1188)

```diff
-       for (let bC = 0; bC < FC; bC++) GC(zC, wC.Np + 4 * bC, qC[MC(qC, bC)]);
+       for (let Ip = 0; Ip < Dp; Ip++) tp(ip, op.tw + 4 * Ip, Yp[Wp(Yp, Ip)]);
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1205` → after: `L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1216) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1205)

```diff
-         for (let ZC = 0; ZC < bC.k; ZC++) wC.k.GetCurrentGradient(ZC / bC.k, CC, ((CC, zC, ZC) => {
+         for (let cp = 0; cp < Ip.k; cp++) op.l.GetCurrentGradient(cp / Ip.k, pp, ((pp, ip, cp) => {
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1222` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1233) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1222)

```diff
-       return zC ? zC.length > bC.d ? (QC(`particleStops:${ZC}`, `GPU particles use the first 2 and last ${bC.d-2} of more than ${bC.d} ${ZC} gradient stops (${CC.name})`), bC.d) : zC.length : 0
+       return ip ? ip.length > Ip.d ? (Op(`particleStops:${cp}`, `GPU particles use the first 2 and last ${Ip.d-2} of more than ${Ip.d} ${cp} gradient stops (${pp.name})`), Ip.d) : ip.length : 0
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1226` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1237) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1226)

```diff
-       return zC < 2 || CC.length <= bC.d ? zC : CC.length - bC.d + zC
+       return ip < 2 || pp.length <= Ip.d ? ip : pp.length - Ip.d + ip
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1228` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1239) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1228)

```diff
-     const gC = new Float32Array(bC.r),
+     const yp = new Float32Array(Ip.m),
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1244` → after: `L1255-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1255-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1255-L1303) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1244)

```diff
-       CC[zC] = ZC.gradient, CC[zC + 1] = ZC.factor1, CC[zC + 2] = null !== (QC = ZC.factor2) && void 0 !== QC ? QC : ZC.factor1
+       pp[ip] = cp.gradient, pp[ip + 1] = cp.factor1, pp[ip + 2] = null !== (Op = cp.factor2) && void 0 !== Op ? Op : cp.factor1
+     }
+   },
+   41375: (pp, ip, cp) => {
+     function Op(pp, ip, cp) {
+       const Op = ip * ip * 4,
+         op = pp[0].layers,
+         Ip = op * (pp.length - 1) + pp[pp.length - 1].layers,
+         Sp = new Uint8Array(Ip * Op);
+       pp.forEach(((ip, cp) => {
+         const Ip = cp + 1 < pp.length ? Math.min(ip.layers, op) : ip.layers;
+         Sp.set(new Uint8Array(ip.pixels.buffer, ip.pixels.byteOffset, Ip * Op), cp * op * Op)
+       }));
+       const xp = Math.max(1, Math.min(Ip, cp || Ip));
+       if (xp === Ip) return [{
+         pixels: Sp,
+ ... (33 more added lines; see GitHub link above)
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1247` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1306) · [Before (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1247)

```diff
-   41411: (CC, zC, ZC) => {
+   41860: (pp, ip, cp) => {
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1256` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1315) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1256)

```diff
-       b: () => QC
+       c: () => Op
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js#L4)

```diff
-   60281: (CC, zC, ZC) => {
+   60729: (pp, ip, cp) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L4)

```diff
-   36279: (CC, zC, ZC) => {
+   36611: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L10)

```diff
-     var QC = ZC(36288);
+     var Op = cp(36618);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L71)

```diff
-     var qC = ZC(36291);
+     var Yp = cp(36622);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L78)

```diff
-       return `${zC}|${ZC}|${CC}`
+       return `${ip}|${cp}|${pp}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L105)

```diff
-         return null !== (wC = await (0, qC.c)(bC, zC, ZC)) && void 0 !== wC ? wC : (await RC(bC, zC, ZC)).toDataURL()
+         return null !== (op = await (0, Yp.d)(Ip, ip, cp)) && void 0 !== op ? op : (await Hp(Ip, ip, cp)).toDataURL()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L116)

```diff
-         const bC = (0, QC.h)(ZC, wC),
+         const Ip = (0, Op.g)(cp, op),
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L138)

```diff
-             rect: zC.cropFaces ? bC : [0, 0, 1, 1],
+             rect: ip.cropFaces ? Ip : [0, 0, 1, 1],
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L143)

```diff
-           PC = QC.g;
+           vp = Op.d;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L150)

```diff
-         return (0, QC.j)(SC, ZC, wC, (CC => 1 === pC[CC])), SC
+         return (0, Op.k)(Up, cp, op, (pp => 1 === wp[pp])), Up
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L156)

```diff
-         return "SlabBlock" === CC ? bC : "StairsBlock" === CC ? nC : wC
+         return "SlabBlock" === pp ? Ip : "StairsBlock" === pp ? Sp : op
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L166)

```diff
-         const zC = await (0, qC.f)(CC),
+         const ip = await (0, Yp.h)(pp),
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L15-L17` → after: `L15-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L15-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L15-L21) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L15-L17)

```diff
-             throw zC.message = "Loading chunk " + wC + " failed after 4 retries.\n(" + nC + ")", zC.request = nC, ZC[wC] = "cache-bust=" + Date.now(), setTimeout((function() {
-               delete QC[wC]
-             }), 0), zC
+             if (ip.message = "Loading chunk " + op + " failed after 4 retries.\n(" + Sp + ")", ip.request = Sp, cp[op] = "cache-bust=" + Date.now(), setTimeout((function() {
+                 delete Op[op]
+               }), 0), "CSS_CHUNK_LOAD_FAILED" === ip.code) {
+               var xp = __webpack_require__.miniCssF(op);
+               ip.message = ip.message.replace("Loading chunk", "Loading CSS chunk").replace(Sp, xp), ip.request = xp
+             }
+             throw ip
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L193` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L197) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L193)

```diff
-     if (void 0 === QC) throw new Error(`no ${ZC} was sent for ${zC.slice(0,100)}`);
+     if (void 0 === Op) throw new Error(`no ${cp} was sent for ${ip.slice(0,100)}`);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L219` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L223) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L219)

```diff
-             zC(null !== (CC = ZC.error) && void 0 !== CC ? CC : new Error("the icon did not encode"))
+             ip(null !== (pp = cp.error) && void 0 !== pp ? pp : new Error("the icon did not encode"))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L286` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L290) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L286)

```diff
-               rect: wC.cropFaces ? bC : [0, 0, 1, 1],
+               rect: op.cropFaces ? Ip : [0, 0, 1, 1],
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L304` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L308) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L304)

```diff
-           return "SlabBlock" === CC ? MC : "StairsBlock" === CC ? gC : NC
+           return "SlabBlock" === pp ? Wp : "StairsBlock" === pp ? yp : Pp
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L4)

```diff
-   36302: (CC, zC, ZC) => {
+   36642: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L6-L21` → after: `L6-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L6-L21) · [Before (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L6-L21)

```diff
-       "./Artisan Bench.json": [41003, 275],
-       "./Aspen Item Pedestal.json": [41009, 276],
-       "./Cedar Item Pedestal.json": [41018, 277],
-       "./Cherry Item Pedestal.json": [41025, 278],
-       "./Furnace.json": [41031, 279],
-       "./Jungle Item Pedestal.json": [41035, 280],
-       "./Mango Item Pedestal.json": [41044, 281],
-       "./Palm Item Pedestal.json": [41047, 282],
-       "./Pear Item Pedestal.json": [41050, 283],
-       "./Pine Item Pedestal.json": [41056, 284],
-       "./Plum Item Pedestal.json": [41062, 285],
-       "./Potion Table.json": [41067, 286],
-       "./Salvaging Table.json": [41070, 287],
-       "./Showcase.json": [41075, 288],
-       "./Spectral Item Pedestal.json": [41082, 289],
-       "./Workbench.json": [41084, 290]
+       "./Artisan Bench.json": [41402, 280],
+       "./Aspen Item Pedestal.json": [41410, 281],
+       "./Cedar Item Pedestal.json": [41418, 282],
+       "./Cherry Item Pedestal.json": [41427, 283],
+       "./Furnace.json": [41432, 284],
+       "./Jungle Item Pedestal.json": [41440, 285],
+       "./Mango Item Pedestal.json": [41446, 286],
+       "./Palm Item Pedestal.json": [41454, 287],
+       "./Pear Item Pedestal.json": [41461, 288],
+       "./Pine Item Pedestal.json": [41467, 289],
+       "./Plum Item Pedestal.json": [41469, 290],
+       "./Potion Table.json": [41478, 291],
+       "./Salvaging Table.json": [41481, 292],
+       "./Showcase.json": [41484, 293],
+       "./Spectral Item Pedestal.json": [41492, 294],
+       "./Workbench.json": [41498, 295]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L33)

```diff
-     wC.keys = () => Object.keys(QC), wC.id = 36302, CC.exports = wC
+     op.keys = () => Object.keys(Op), op.id = 36642, pp.exports = op
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L35)

```diff
-   36297: (CC, zC, ZC) => {
+   36635: (pp, ip, cp) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L40-L42` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L40-L42) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L40-L42)

```diff
-     var QC = ZC(36291),
-       wC = ZC(36288);
-     const bC = ZC(36302),
+     var Op = cp(36622),
+       op = cp(36618);
+     const Ip = cp(36642),
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L79)

```diff
-       return nC.width = zC, nC.height = zC, nC.getContext("2d").putImageData(new ImageData((0, wC.k)(QC, bC, zC, ZC), zC, zC), 0, 0), nC.toDataURL()
+       return Sp.width = ip, Sp.height = ip, Sp.getContext("2d").putImageData(new ImageData((0, op.m)(Op, Ip, ip, cp), ip, ip), 0, 0), Sp.toDataURL()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L83)

```diff
-       const wC = `${zC}|${ZC}|${CC}`;
+       const op = `${ip}|${cp}|${pp}`;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L85)

```diff
-       return bC || (bC = (0, QC.d)(CC, (() => FC(CC)), zC, ZC).then((QC => null !== QC && void 0 !== QC ? QC : WC(CC, zC, ZC))), bC.catch((() => {
+       return Ip || (Ip = (0, Op.f)(pp, (() => Dp(pp)), ip, cp).then((Op => null !== Op && void 0 !== Op ? Op : Ap(pp, ip, cp))), Ip.catch((() => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5)

```diff
-   42435: (CC, zC, ZC) => {
-     CC.exports = ZC.p + "static/media/bloxd_wasm_anim_bg.72dea6b87a87456a5828.wasm"
+   42941: (pp, ip, cp) => {
+     pp.exports = cp.p + "static/media/bloxd_wasm_anim_bg.ab5b80b8d68f5e91c45a.wasm"
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L7)

```diff
-   42432: (CC, zC, ZC) => {
+   42935: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L15-L23` → after: `L15-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23) · [Before (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23)

```diff
-       const nC = GC(CC, hC.XsNz),
-         fC = KC,
-         oC = GC(zC, hC.XsNz),
-         qC = KC,
-         FC = GC(ZC, hC.XsNz),
-         WC = KC,
-         NC = GC(QC, hC.XsNz),
-         gC = KC,
-         SC = GC(wC, hC.XsNz),
+       const Sp = tp(pp, Mp.fgSa),
+         xp = Cp,
+         Lp = tp(ip, Mp.fgSa),
+         Yp = Cp,
+         Dp = tp(cp, Mp.fgSa),
+         Ap = Cp,
+         Pp = tp(Op, Mp.fgSa),
+         yp = Cp,
+         Up = tp(op, Mp.fgSa),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L28)

```diff
-         }(bC, hC.XsNz),
+         }(Ip, Mp.fgSa),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L30)

```diff
-       const JC = hC.JmIP(nC, fC, oC, qC, FC, WC, NC, gC, SC, pC, RC, xC);
+       const jp = Mp.xO7R(Sp, xp, Lp, Yp, Dp, Ap, Pp, yp, Up, wp, Hp, ep);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L33-L39` → after: `L33-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39) · [Before (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39)

```diff
-       return hC.LnDQ(JC[0], 1 * JC[1], 1), vC
-     }
- 
-     function bC(CC, zC) {
-       const ZC = RC(CC, hC.XsNz, hC.l7s8),
-         QC = KC,
-         wC = hC.UdTS(ZC, QC, zC);
+       return Mp.PZPw(jp[0], 1 * jp[1], 1), Rp
+     }
+ 
+     function Ip(pp, ip) {
+       const cp = Hp(pp, Mp.fgSa, Mp.hVwD),
+         Op = Cp,
+         op = Mp.zeZa(cp, Op, ip);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L44)

```diff
-       hC.S3an()
+       Mp.V64H()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L50)

```diff
-         OrUC: {
+         VfU7: {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L52)

```diff
-           xH1Z: function(CC, zC) {
+           spUr: function(pp, ip) {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L55)

```diff
-           I3eF: function(CC, zC) {
+           bBjB: function(pp, ip) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58)

```diff
-               QC = "string" === typeof ZC ? ZC : void 0;
-             var wC = PC(QC) ? 0 : RC(QC, hC.XsNz, hC.l7s8),
+               Op = "string" === typeof cp ? cp : void 0;
+             var op = vp(Op) ? 0 : Hp(Op, Mp.fgSa, Mp.hVwD),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L62)

```diff
-           B5M0: function(CC, zC) {
+           geTR: function(pp, ip) {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L65)

```diff
-           SICw: function(CC, zC) {
+           zT7c: function(pp, ip) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L68)

```diff
-           Rv0u: function(CC) {
+           bQdA: function(pp) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82)

```diff
-       hnC: () => wC,
-       SW: () => bC,
+       Hxp: () => op,
+       dA: () => Ip,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L85)

```diff
-       pW: () => nC
+       eA: () => Sp
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L173)

```diff
-       return eC = CC, hC = CC.exports, vC = zC, qC = null, NC = null, hC.B1Kp(), hC
+       return qp = pp, Mp = pp.exports, Rp = ip, Yp = null, Pp = null, Mp.jq1x(), Mp
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L197)

```diff
-           if (!CC.ok) throw new Error(`failed to fetch Wasm: ${CC.status} ${CC.statusText} fetching '${CC.url}'`);
+           if (!pp.ok) throw new Error(`failed to fetch Wasm: ${pp.status} ${pp.statusText} fetching '${pp.url}'`);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L224-L225` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225)

```diff
-     var HC = ZC(2856),
-       EC = ZC(6616);
+     var Qp = cp(2970),
+       Jp = cp(6762);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L229)

```diff
-         super((0, HC.F)(CC, zC), {
+         super((0, Qp.B)(pp, ip), {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L245)

```diff
-           CC = await (0, HC.I)(new ZC.U(ZC(42435)), (0, EC.e)("bloxd_wasm_anim"))
+           pp = await (0, Qp.C)(new cp.U(cp(42941)), (0, Jp.e)("bloxd_wasm_anim"))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L247)

```diff
-           throw new lC((0, HC.P)(zC), zC)
+           throw new Bp((0, Qp.J)(ip), ip)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L262)

```diff
-         return bC.hnC(Object.entries(CC).flat(), [...zC.mobTypes], [...zC.vehicleTypes], [...zC.mobAiStates], [...zC.playerPoses], "builtIns" in wC ? wC.builtIns : void 0)
+         return Ip.Hxp(Object.entries(pp).flat(), [...ip.mobTypes], [...ip.vehicleTypes], [...ip.mobAiStates], [...ip.playerPoses], "builtIns" in op ? op.builtIns : void 0)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (522 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5)

```diff
-   42416: (CC, zC, ZC) => {
-     CC.exports = ZC.p + "static/media/bloxd_wasm_webgl_bg.e291fcd4e174899e0a2c.wasm"
+   42915: (pp, ip, cp) => {
+     pp.exports = cp.p + "static/media/bloxd_wasm_webgl_bg.5a7acf67a8d13ac5aed9.wasm"
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7)

```diff
-   42411: (CC, zC, ZC) => {
+   42908: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14)

```diff
-       mp: () => wC,
-       fbC: () => bC,
+       hw: () => op,
+       KIp: () => Ip,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16)

```diff
-       SW: () => fC,
+       dA: () => xp,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L19-L39` → after: `L19-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L19-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L40) · [Before (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L39)

```diff
-       pW: () => oC,
-       UZC: () => qC,
-       PW: () => FC,
-       GW: () => WC,
-       RW: () => NC,
-       AW: () => MC,
-       xW: () => gC,
-       JW: () => SC,
-       IW: () => pC,
-       ap: () => PC,
-       hW: () => GC,
-       TZC: () => RC,
-       obC: () => AC,
-       aZC: () => xC,
-       FbC: () => JC,
-       WbC: () => IC,
- ... (5 more removed lines; see GitHub link above)
+       eA: () => Lp,
+       XOp: () => Yp,
+       uA: () => Dp,
+       jA: () => Ap,
+       kA: () => Pp,
+       mA: () => Wp,
+       RA: () => yp,
+       qA: () => Up,
+       MA: () => wp,
+       sw: () => vp,
+       lA: () => tp,
+       kOp: () => Hp,
+       VIp: () => dp,
+       mOp: () => ep,
+       pSp: () => jp,
+       iSp: () => kp,
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L48` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L49) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L48)

```diff
-         iz.lk2I(CC, 0)
+         qi.spmq(pp, 0)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L50-L51` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L51-L52) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L50-L51)

```diff
-       static jZC() {
-         return iz.TulB() >>> 0
+       static MOp() {
+         return qi.uDmS() >>> 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L53-L54` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L54-L55) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L53-L54)

```diff
-       MbC() {
-         return iz.SKzf(this.__wbg_ptr)
+       oSp() {
+         return qi.qpMO(this.__wbg_ptr)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L56-L57` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L57-L58) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L56-L57)

```diff
-       WwC() {
-         return iz.nK2P(this.__wbg_ptr) >>> 0
+       OIp() {
+         return qi.YjFk(this.__wbg_ptr) >>> 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L59-L60` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L60-L61) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L59-L60)

```diff
-       gbC(CC, zC, ZC) {
-         return iz.UNwM(this.__wbg_ptr, CC, zC, ZC) >>> 0
+       ISp(pp, ip, cp) {
+         return qi.Bifo(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L63` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L64) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L63)

```diff
-         return iz.hDXG(this.__wbg_ptr, CC, zC, ZC) >>> 0
+         return qi.slJI(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L65-L66` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L66-L67) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L65-L66)

```diff
-       SbC() {
-         return iz.aPBq(this.__wbg_ptr) >>> 0
+       SSp() {
+         return qi.Foy7(this.__wbg_ptr) >>> 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L68-L69` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L69-L70) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L68-L69)

```diff
-       MwC(CC, zC, ZC, QC, wC, bC, nC) {
-         return iz.VyJk(this.__wbg_ptr, CC, zC, ZC, QC, wC, bC, nC)
+       IIp(pp, ip, cp, Op, op, Ip, Sp) {
+         return qi.oils(this.__wbg_ptr, pp, ip, cp, Op, op, Ip, Sp)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L71-L72` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L72-L73) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L71-L72)

```diff
-       pbC(CC, zC, ZC) {
-         return iz.eHJg(this.__wbg_ptr, CC, zC, ZC) >>> 0
+       xSp(pp, ip, cp) {
+         return qi.qSvO(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L74-L75` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L75-L76) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L74-L75)

```diff
-       PbC() {
-         return iz.qO2u(this.__wbg_ptr) >>> 0
+       LSp() {
+         return qi.bNjQ(this.__wbg_ptr) >>> 0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L77-L78` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L78-L79) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L77-L78)

```diff
-       GbC() {
-         return iz.pPrl(this.__wbg_ptr) >>> 0
+       YSp() {
+         return qi.GHs8(this.__wbg_ptr) >>> 0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L80-L81` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L81-L82) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L80-L81)

```diff
-       AbC() {
-         return iz.diB2(this.__wbg_ptr) >>> 0
+       ASp() {
+         return qi.EIzx(this.__wbg_ptr) >>> 0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L84` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L85) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L84)

```diff
-         return iz.Rb5X(this.__wbg_ptr, CC, zC, ZC) >>> 0
+         return qi.u3Ci(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L86-L87` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L87-L88) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L86-L87)

```diff
-       RwC(CC, zC, ZC) {
-         return iz.ZhrT(this.__wbg_ptr, CC, zC, ZC) >>> 0
+       AIp(pp, ip, cp) {
+         return qi.T56Q(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L89-L90` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L90-L91) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L89-L90)

```diff
-       gwC() {
-         return iz.PFaT(this.__wbg_ptr) >>> 0
+       SIp() {
+         return qi.To8d(this.__wbg_ptr) >>> 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L92-L93` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L93-L94) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L92-L93)

```diff
-       SwC(CC) {
-         return iz.v5rQ(this.__wbg_ptr, CC) >>> 0
+       xIp(pp) {
+         return qi.eqSR(this.__wbg_ptr, pp) >>> 0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L95-L96` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L96-L97) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L95-L96)

```diff
-       pwC(CC, zC, ZC, QC, wC, bC) {
-         return iz.HqY5(this.__wbg_ptr, CC, zC, ZC, QC, wC, bC) >>> 0
+       LIp(pp, ip, cp, Op, op, Ip) {
+         return qi.BSBR(this.__wbg_ptr, pp, ip, cp, Op, op, Ip) >>> 0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L98-L99` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L99-L100) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L98-L99)

```diff
-       NwC() {
-         return iz.YJGx(this.__wbg_ptr) >>> 0
+       oIp() {
+         return qi.KRd0(this.__wbg_ptr) >>> 0
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L101-L102` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L102-L103) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L101-L102)

```diff
-       xbC() {
-         return iz.UVVd(this.__wbg_ptr) >>> 0
+       PSp() {
+         return qi.aSmq(this.__wbg_ptr) >>> 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L104-L105` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L105-L106) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L104-L105)

```diff
-       JbC(CC) {
-         return iz.y9Lt(this.__wbg_ptr, CC) >>> 0
+       WSp(pp) {
+         return qi.PHxq(this.__wbg_ptr, pp) >>> 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L107-L108` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L108-L109) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L107-L108)

```diff
-       xwC(CC) {
-         return iz.qStR(this.__wbg_ptr, CC) >>> 0
+       WIp(pp) {
+         return qi.uwSe(this.__wbg_ptr, pp) >>> 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L110-L111` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L111-L112) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L110-L111)

```diff
-       IbC(CC) {
-         return iz.qqqe(this.__wbg_ptr, CC) >>> 0
+       ySp(pp) {
+         return qi.PTWM(this.__wbg_ptr, pp) >>> 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L113-L114` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L114-L115) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L113-L114)

```diff
-       ibC(CC) {
-         return iz.yLf2(this.__wbg_ptr, CC) >>> 0
+       wSp(pp) {
+         return qi.hmkD(this.__wbg_ptr, pp) >>> 0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L117` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L118) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L117)

```diff
-         return iz.qjZS(this.__wbg_ptr, CC, zC, ZC, QC, wC, bC) >>> 0
+         return qi.sI2t(this.__wbg_ptr, pp, ip, cp, Op, op, Ip) >>> 0
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L119-L120` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L120-L121) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L119-L120)

```diff
-       ebC(CC) {
-         return 0 !== iz.dV0P(this.__wbg_ptr, CC)
+       tSp(pp) {
+         return 0 !== qi.HmDp(this.__wbg_ptr, pp)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L123` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L124) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L123)

```diff
-         return iz.WINh(this.__wbg_ptr) >>> 0
+         return qi.sbAI(this.__wbg_ptr) >>> 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L125-L126` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L126-L127) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L125-L126)

```diff
-       hbC(CC, zC) {
-         return iz.YgC0(this.__wbg_ptr, CC, zC) >>> 0
+       HSp(pp, ip) {
+         return qi.cFdt(this.__wbg_ptr, pp, ip) >>> 0
```
