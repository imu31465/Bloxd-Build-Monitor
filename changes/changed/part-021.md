# Changed — Bundle Modifications Report (Part 021 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `21 / 56` (**358** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 020](part-020.md) · [Part 022 →](part-022.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/94.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/94.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8)

#### 13. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38894-L38904` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L210) · [Before (L38894-L38904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38894-L38904)

```diff
-       return pp.pathname.slice(pp.pathname.lastIndexOf("/") + 1)
-     }
- 
-     function Pp() {
-       try {
-         if ("undefined" === typeof localStorage) return null;
-         const pp = JSON.parse(localStorage.getItem(Yp) ?? "[]");
-         return Array.isArray(pp) ? pp.filter((pp => "string" === typeof pp)) : []
-       } catch (pp) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", pp), null
-       }
+       return Number.isFinite(QQ) ? String(Math.round(10 * QQ) / 10) : String(QQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38922-L38923` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L213-L214) · [Before (L38922-L38923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38922-L38923)

```diff
-     function jp() {
-       return dp && !ep
+     function rQ(QQ) {
+       return Number.isFinite(QQ) ? QQ.toFixed(1) : String(QQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38929-L38935` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L218) · [Before (L38929-L38935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38929-L38935)

```diff
-         if (jp()) try {
-           this.worker = Rp(), Wp(vp, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
-         }
+         this.frames = 0, this.looked = 0, this.idle = 0, this.oR = 0, this.pastLimit = 0, this.lockSkips = 0, this.Py = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38937-L38940` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L220-L221) · [Before (L38937-L38940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38937-L38940)

```diff
-       take() {
-         const pp = this.worker;
-         if (this.worker = null, null !== pp && this.failed) throw Wp(wp, pp, []), new Error("it did not run");
-         return pp
+       moved() {
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.oR > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38942-L38944` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L223-L224) · [Before (L38942-L38944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38942-L38944)

```diff
-       stop() {
-         const pp = this.worker;
-         this.worker = null, null !== pp && Wp(wp, pp, [])
+       hasEvent() {
+         return this.oR > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38948-L38955` → after: `L228-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L228-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L228-L284) · [Before (L38948-L38955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38948-L38955)

```diff
-       decoded;
-       worker;
-       reject;
-       constructor(pp, ip, cp, Op, Ip) {
-         try {
-           this.worker = Ip?.take() ?? Rp()
-         } catch (Yp) {
-           throw ep = !0, new Error(`The zstd decoder's worker did not start: ${(0,xp.f)(Yp)}`)
+       constructor() {
+         var QQ = this;
+         this.topicOn = (0, qQ.m)("look"), this.remote = (0, qQ.n)(), this.tally = new IQ, this.takes = null, this.started = !1, this.record = function(WQ) {
+           let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           if (PQ.m.step(WQ, XQ), !QQ.topicOn) return;
+           const wQ = WQ[XQ],
+             qQ = WQ[XQ + 1],
+             TQ = WQ[XQ + 2],
+             zQ = WQ[XQ + 3],
+             sQ = WQ[XQ + 4],
+             FQ = WQ[XQ + 5],
+             gQ = WQ[XQ + 6],
+             IQ = WQ[XQ + 7],
+             jQ = WQ[XQ + 8],
+             BQ = WQ[XQ + 9],
+             yQ = QQ.tally;
+ ... (41 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38987-L38994` → after: `L287-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L287-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L287-L297) · [Before (L38987-L38994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38987-L38994)

```diff
-       end() {
-         Wp(Up, this.worker, [null])
-       }
-       markWorkerFailed() {
-         ep = !0
-       }
-       fail(pp) {
-         this.reject(pp), this.terminate()
+       start(QQ, WQ) {
+         if (PQ.m.start(QQ, null !== document.pointerLockElement), this.takes = WQ, this.topicOn) {
+           const {
+             screen: WQ
+           } = window;
+           (0, qQ.j)("look", `start: ${QQ} client, dpr ${window.devicePixelRatio}, screen ${WQ.width}x${WQ.height}, pointer lock ${document.pointerLockElement?"Ds":"free"}`)
+         }
+         this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
+           capture: !0,
+           passive: !0
+         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38996-L38997` → after: `L299-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L299-L301) · [Before (L38996-L38997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38996-L38997)

```diff
-       terminate() {
-         Wp(wp, this.worker, [])
+       outlier(QQ) {
+         const WQ = this.tally;
+         WQ.outliers >= 20 ? WQ.suppressed++ : (WQ.outliers++, (0, qQ.j)("look", QQ))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38999-L39094` → after: `L303-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L303-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L303-L305) · [Before (L38999-L39094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38999-L39094)

```diff
-     }
- 
-     function Rp() {
-       if (globalThis.Worker !== yp) throw new Error("Worker is not the one the page loaded with");
-       return new Worker(new URL(cp.p + cp.u(68), cp.b), {
-         name: "wasmZstdDecoder",
-         type: "module"
-       })
-     }
-     const qp = Reflect.apply,
-       Mp = ArrayBuffer,
-       Cp = "undefined" === typeof Response ? void 0 : Response,
-       Ep = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       Xp = function() {
-         let pp;
-         void 0 !== Ep && new Ep({
- ... (80 more removed lines; see GitHub link above)
+       eventOutlier(QQ) {
+         const WQ = this.tally;
+         WQ.eventLines >= 10 ? WQ.suppressed++ : (WQ.eventLines++, (0, qQ.j)("look", QQ))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39096-L39148` → after: `L307-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L307-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L307-L312) · [Before (L39096-L39148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39096-L39148)

```diff
-       const ep = pp => {
-         Hp.fail(pp), void 0 !== dp && Jp(dp)
-       };
-       let jp = !1;
-       cp.addEventListener("abort", (() => {
-         jp && Hp.markWorkerFailed(), ep(new Error(`${pp} stalled`))
-       }), {
-         once: !0
-       }), (0, op.u)(Pp, (() => {}), ep);
-       try {
-         let Sp;
-         try {
-           Sp = await fetch(pp, {
-             signal: cp
-           })
-         } catch (Rp) {
- ... (37 more removed lines; see GitHub link above)
+       takeRecords() {
+         if (null === this.takes) return;
+         const QQ = this.takes.look();
+         if (QQ.length >= gQ) {
+           this.counted(PQ.d.stepsLost, QQ[0]), this.counted(PQ.d.droppedCopies, QQ[1]);
+           for (let WQ = gQ; WQ + PQ.g <= QQ.length; WQ += PQ.g) this.record(QQ, WQ)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39150-L39180` → after: `L314-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L314-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L314-L317) · [Before (L39150-L39180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39150-L39180)

```diff
-         if (jp = !0, Hp.end(), await Hp.decoded, Ip(), vp !== ip) throw new Error(`${pp} ended before its module did`)
-       } catch (Rp) {
-         throw wp(Rp), ep(Rp), Rp
-       }
-       Hp.terminate();
-       try {
-         qp(yp, Ap, [])
-       } catch {}
-       const kp = await Pp;
-       return void 0 !== Sp && await (0, Lp.t)(pp, new Lp.k(Dp), {
-         sha256: Sp.sha256,
-         onMismatch: () => {}
-       }), kp
-     }
- 
-     function Jp(pp) {
- ... (15 more removed lines; see GitHub link above)
+         const WQ = this.takes.cameraSets();
+         if (WQ.length >= wQ.c) {
+           this.counted(PQ.d.cameraSetsLost, WQ[0]);
+           for (let QQ = wQ.c; QQ + wQ.f <= WQ.length; QQ += wQ.f) PQ.m.cameraSet(WQ, QQ), this.topicOn && (this.tally.cameraSets++, this.outlier(FQ(WQ, QQ)))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39233-L39241` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L320-L321) · [Before (L39233-L39241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39233-L39241)

```diff
-       var Yp;
-       return null !== Sp ? hp(Sp, "cold-worker") : hp(await ap(pp, ip, cp), "cold-wasm")
-     }
- 
-     function hp(pp, ip) {
-       return {
-         __proto__: null,
-         module: pp,
-         path: ip
+       droppedCopy() {
+         this.counted(PQ.d.droppedCopies, 1)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39243-L39272` → after: `L323-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L323-L327) · [Before (L39243-L39272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39243-L39272)

```diff
-     }
- 
-     function ap(pp, ip, cp) {
-       return void 0 === fp(pp.name) ? (0, Lp.C)(pp.url(), ip, cp) : (0, Lp.C)(pp.url(), ip, {
-         ...cp,
-         hideThen: !0,
-         onDownloaded: () => {
-           ! function(pp) {
-             const ip = Pp();
-             if (null === ip) return;
-             const cp = Ap(pp),
-               Op = ip.filter((pp => pp !== cp));
-             Op.push(cp);
-             try {
-               localStorage.setItem(Yp, JSON.stringify(Op.slice(-Dp)))
-             } catch (op) {
- ... (14 more removed lines; see GitHub link above)
+       counted(QQ, WQ) {
+         if (0 === WQ) return;
+         if (PQ.m.change(QQ, WQ), !this.topicOn) return;
+         const XQ = this.tally;
+         QQ === PQ.d.droppedCopies ? XQ.dropped += WQ : QQ === PQ.d.stepsLost ? XQ.lost += WQ : XQ.cameraSetsLost += WQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39274-L39336` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L329-L330) · [Before (L39274-L39336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39274-L39336)

```diff
-     }
-     let Fp = null,
-       gp = !1;
-     const Gp = new Map,
-       rp = new Map;
- 
-     function Zp(pp, ip, cp) {
-       return null === Fp ? Fp = sp(pp, ip, cp?.memoryMaximumBytes) : pp !== Fp.build ? console.warn(`Bloxd wasm: ${pp.name} was asked for after ${Fp.build.name} started loading, which this thread keeps`) : ip.name !== Fp.workers.name && console.warn(`Bloxd wasm: ${ip.name} was as … [truncated]
-     }
- 
-     function zp(pp, ip) {
-       if (null !== Fp) return (0, op.f)([]);
-       const cp = pp.filter((pp => !Gp.has(pp.name))).map((pp => {
-         const cp = new AbortController,
-           Op = {
-             compiled: ap(pp, (0, Ip.e)(pp.name), {
- ... (47 more removed lines; see GitHub link above)
+       endTake() {
+         this.takeRecords(), this.takes = null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39341` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L336-L337) · [Before (L39341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39341)

```diff
-       return rp.get(pp)
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       return BQ ??= new jQ, BQ.start(QQ, WQ), BQ.record
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39344-L39380` → after: `L340-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L340-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L340-L342) · [Before (L39344-L39380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39344-L39380)

```diff
-     function Vp(pp) {
-       const ip = performance.now(),
-         cp = Gp.get(pp.name);
-       Gp.delete(pp.name);
-       const Op = !0 === cp?.downloaded ? cp : void 0;
-       return void 0 !== cp && void 0 === Op && cp.cancel.abort(), (0, op.j)(((cp, Ip) => {
-         const Sp = (Op, op) => {
-             rp.set(pp.name, {
-               path: op,
-               ms: performance.now() - ip
-             }), cp(Op)
-           },
-           xp = () => {
-             (0, op.u)(ci(pp), (pp => {
-               let {
-                 module: ip,
- ... (21 more removed lines; see GitHub link above)
+     function VQ() {
+       var QQ;
+       null === (QQ = BQ) || void 0 === QQ || QQ.endTake()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39391-L39425` → after: `L346-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L346-L347) · [Before (L39391-L39425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39391-L39425)

```diff
-       const pp = () => (0, Op.H)();
-       return {
-         memoryBytes: () => (0, Op.z)().buffer.byteLength,
-         reserveUpFront: ip => pp().kA(ip),
-         reserveAhead: ip => pp().jA(ip),
-         setCeiling: ip => {
-           pp().mA(ip)
-         },
-         lowWater: () => op[pp().uA()] ?? "none",
-         stats: () => function(pp) {
-           const ip = new Uint32Array((0, Op.z)().buffer, pp, 17),
-             cp = pp => ip[pp] ?? 0,
-             op = pp => ({
-               upFront: cp(pp),
-               ahead: cp(pp + 1),
-               onDemandInFrame: cp(pp + 2),
- ... (19 more removed lines; see GitHub link above)
+       var QQ;
+       null === (QQ = BQ) || void 0 === QQ || QQ.droppedCopy()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39427-L39455` → after: `L349-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L349-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L349-L359) · [Before (L39427-L39455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39427-L39455)

```diff
-   },
-   6762: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(2970);
-     const op = {
-       bloxd_wasm: () => "b2340e61a7d448277a389ebeac9c8ae332a7699b283661cfa159ae4f9b5e0b46",
-       bloxd_wasm_client: () => "fc04a63668a4bc6b8108c23defb833287279306fc25451198e7e46db490160bc",
-       bloxd_wasm_workers: () => "97593e648fa195611cb0537edc597de1fb35e0ff06c7ba452104e324f7e81a2a",
-       bloxd_wasm_models: () => "2bf3307bf44a828cd7c420818a0ed5b061472ebe327b277c5eba216bf14f6d21",
-       bloxd_wasm_webgpu: () => "bb0d39b71cbd62566055f119cdde94768780e27f37f323027d63e6b3a5a43b04",
-       bloxd_wasm_webgl: () => "9b5a782f90a35f11a25813cfef777f781fa19f7f35be550f5ba3ccd789c15381",
-       bloxd_wasm_webgl1: () => "53c64fa3997d454ee8786274e88a96df2e92e734612cf00e45f3b10812d8ed86",
-       bloxd_wasm_replay: () => "6da56602c0cf1eac0fee1a30eb3409cd19788e1cf0bf82c91f41e9dc2ec26a17",
-       bloxd_wasm_recorder: () => "f89c2afc61048a96a7ea68674c418202687a5df82028a7c7506a545f43cf8a00",
- ... (13 more removed lines; see GitHub link above)
+     async function pQ(QQ) {
+       var WQ;
+       null === (WQ = BQ) || void 0 === WQ || WQ.takeRecords();
+       const {
+         clientHintsRead: wQ,
+         debugDeviceLines: qQ
+       } = await XQ.e(30).then((() => XQ(34376)));
+       await wQ, PQ.m.save({
+         ...QQ,
+         device: qQ()
+       })
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39458` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L362) · [Before (L39458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39458)

```diff
-   6788: (pp, ip, cp) => {
+   5140: (QQ, WQ, XQ) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39460-L39461` → after: `L364-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L364-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L364-L389) · [Before (L39460-L39461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39460-L39461)

```diff
-       d: () => Op,
-       e: () => Sp,
+       $b: () => aQ,
+       A: () => sQ,
+       Ab: () => uQ,
+       C: () => wQ,
+       Cb: () => yQ,
+       F: () => TQ,
+       G: () => GQ,
+       Gb: () => hQ,
+       I: () => mQ,
+       Ib: () => lQ,
+       M: () => JQ,
+       Mb: () => LQ,
+       Nb: () => nQ,
+       Pb: () => fQ,
+       Q: () => rQ,
+       Sb: () => tQ,
+ ... (10 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L39463-L39488` → after: `L391-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L391-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L391-L937) · [Before (L39463-L39488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L39463-L39488)

```diff
-       h: () => op,
-       i: () => Ip
-     });
-     const Op = ["terrain", "liquid", "model"];
- 
-     function op() {
-       const pp = [];
-       for (const ip of [!1, !0])
-         for (const cp of Op) pp.push({
-           strict: ip,
-           program: cp
-         });
-       return pp
-     }
- 
-     function Ip(pp) {
- ... (10 more removed lines; see GitHub link above)
+       fb: () => iQ,
+       fc: () => qQ,
+       gc: () => KQ,
+       i: () => OQ,
+       jb: () => AQ,
+       l: () => pQ,
+       mb: () => RQ,
+       n: () => ZQ,
+       nb: () => cQ,
+       p: () => IQ,
+       q: () => dQ,
+       r: () => NQ,
+       rb: () => EQ,
+       tb: () => xQ,
+       u: () => vQ,
+       ub: () => eQ,
+ ... (531 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/95.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/95.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372)

#### 1. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L2)

```diff
- export const ids = [95];
+ export const ids = [95, 402];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L4` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L4-L18) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L4)

```diff
-   4974: (pp, ip, cp) => {
+   41709: (QQ, WQ, XQ) => {
+     async function wQ(QQ, WQ) {
+       const [{
+         clientSideServerUrls: wQ
+       }, {
+         postJsonWithMetricsCookiesAndJsonResponse: qQ
+       }, {
+         gameBridge: TQ
+       }] = await Promise.all([Promise.resolve().then((() => XQ(1238))), Promise.resolve().then((() => XQ(1165))), Promise.resolve().then((() => XQ(2003)))]), zQ = TQ.latest("connectedGame").websocketUrl;
+       if (!zQ) throw new Error("AI Helper: not connected to a game server");
+       const sQ = `${wQ.getHttpUrlFromWebSocketUrl(zQ)}${QQ}`;
+       return await qQ(sQ, WQ, {
+         retries: 0
+       })
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L6-L9` → after: `L20-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L20-L25) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L6-L9)

```diff
-       Howl: () => op.Howl,
-       Howler: () => op.Howler,
-       musicOutput: () => wp,
-       readyAudioContext: () => vp
+       postToGameServer: () => wQ
+     })
+   },
+   6923: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => qQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L11-L14` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L27) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L11-L14)

```diff
-     var Op, op = cp(4977),
-       Ip = cp(3546),
-       Sp = cp(4743);
-     const xp = op.Howler;
+     var wQ = XQ(1145);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L16-L19` → after: `L29-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L29-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L29-L101) · [Before (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L16-L19)

```diff
-     function Lp() {
-       var pp, ip;
-       if (xp.ctx || !xp.usingWebAudio || "undefined" === typeof AudioContext || !(0, Sp.f)()) return;
-       const cp = navigator.audioSession;
+     function qQ(QQ) {
+       let {
+         href: WQ,
+         children: XQ
+       } = QQ;
+       return (0, wQ.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: WQ,
+         target: "_blank",
+         rel: "noreferrer noopener",
+         children: [XQ, " ", (0, wQ.jsx)("span", {
+           "aria-hidden": "true",
+           children: "\u2197"
+         })]
+       })
+     }
+ ... (57 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L23-L25` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L104-L106) · [Before (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L23-L25)

```diff
-         Op = new AudioContext({
-           sampleRate: 44100
-         })
+         const QQ = /^docs\//i.test(WQ) ? `${yQ.d}/` : `${yQ.d}/docs/`,
+           wQ = WQ.toLowerCase().replace(/^www\./, "").startsWith(`${pQ}/`);
+         XQ = new URL(wQ ? `https://${WQ}` : WQ, QQ)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L27` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L108) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L27)

```diff
-         return
+         return null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L29-L30` → after: `L110-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L110-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L110-L112) · [Before (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L29-L30)

```diff
-       const op = Op.createGain();
-       op.gain.setValueAtTime(xp._muted ? 0 : null !== (pp = xp._volume) && void 0 !== pp ? pp : 1, Op.currentTime), op.connect(Op.destination), xp.ctx = Op, xp.masterGain = op, null === (ip = xp._setup) || void 0 === ip || ip.call(xp)
+       if ("https:" !== XQ.protocol && "http:" !== XQ.protocol || XQ.host !== pQ && XQ.host !== `www.${pQ}`) return null;
+       const wQ = XQ.pathname.toLowerCase();
+       return UQ(wQ) || null !== (0, VQ.D)(wQ) ? wQ : (0, VQ.A)(wQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L42-L52` → after: `L115-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L115-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L115-L155) · [Before (L42-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L42-L52)

```diff
-     function Wp() {
-       for (; xp._html5AudioPool.length < xp.html5PoolSize;) {
-         const pp = new Audio;
-         pp._unlocked = !0, xp._releaseHtml5Audio(pp)
-       }
-       for (const ip of xp._howls)
-         if (!ip._webAudio)
-           for (const cp of ip._getSoundIds()) {
-             var pp;
-             const Op = null === (pp = ip._soundById(cp)) || void 0 === pp ? void 0 : pp._node;
-             Op && !Op._unlocked && (Op._unlocked = !0, Op.load())
+     function UQ(QQ) {
+       return QQ === VQ.i || QQ === VQ.o
+     }
+ 
+     function bQ(QQ) {
+       const WQ = GQ(QQ);
+       return null === WQ ? QQ : `${yQ.d}${WQ}`
+     }
+     var vQ = XQ(243),
+       dQ = XQ(41631),
+       HQ = XQ.n(dQ);
+ 
+     function aQ(QQ) {
+       const WQ = [];
+       let XQ = 0;
+       return QQ.split("\n").forEach(((QQ, wQ) => {
+ ... (25 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L55-L72` → after: `L164-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L164-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L164-L368) · [Before (L55-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L55-L72)

```diff
-     Ap.init = function(pp) {
-       return Lp(), Pp.call(this, pp)
-     }, (0, Sp.f)() && (xp._unlockAudio = () => {
-       const pp = xp.ctx;
-       if (xp._audioUnlocked || !pp) return;
-       xp.autoUnlock = !1;
-       const ip = pp.createBuffer(1, 1, 22050);
-       xp._scratchBuffer = ip;
-       const cp = new AbortController;
-       let Op = "afterPaint";
-       const op = () => {
-           var Op;
-           if (xp._audioUnlocked) return;
-           null === (Op = xp._autoResume) || void 0 === Op || Op.call(xp);
-           const op = pp.createBufferSource();
-           op.buffer = ip, op.connect(pp.destination), op.start(0), pp.resume().catch((() => {})), op.onended = () => {
- ... (2 more removed lines; see GitHub link above)
+ 
+     function iQ(QQ, WQ) {
+       if ("" === WQ.trim()) return null;
+       const XQ = aQ(QQ),
+         wQ = function(QQ) {
+           return QQ.split("\n").map((QQ => QQ.trim())).filter(((QQ, WQ, XQ) => "" !== QQ || WQ > 0 && WQ < XQ.length - 1))
+         }(WQ),
+         qQ = hQ(XQ, wQ, (QQ => QQ.trim()));
+       if (null !== qQ) return {
+         from: qQ.from,
+         to: qQ.to,
+         isLoose: !qQ.isOnly
+       };
+       const TQ = QQ => QQ.trim().replace(/;+$/, ""),
+         zQ = hQ(XQ, wQ.map(TQ), TQ);
+       if (null !== zQ) {
+ ... (189 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L74-L84` → after: `L370-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L370-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L370-L372) · [Before (L74-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L74-L84)

```diff
-         },
-         Lp = () => {
-           Wp(), op()
-         },
-         Yp = ip => {
-           if (Wp(), "inTap" === Op) {
-             if ("running" === pp.state) return;
-             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), op()
-           } else "afterPaint" === Op && (Op = "queued", (0, Ip.e)(ip.timeStamp, (() => {
-             Op = "inTap", op()
-           })))
+           HQ().forEachChild(qQ, (QQ => {
+             wQ(QQ, !1)
+           }))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L86-L96` → after: `L374-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L374-L379) · [Before (L86-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L86-L96)

```diff
-       for (const Ip of ["touchstart", "touchend"]) document.addEventListener(Ip, Lp, {
-         capture: !0,
-         signal: cp.signal
-       });
-       for (const Ip of Sp.c) document.addEventListener(Ip, Yp, {
-         capture: !0,
-         signal: cp.signal
-       })
-     });
-     let yp = 0;
-     const Up = null === (Op = xp._autoSuspend) || void 0 === Op ? void 0 : Op.bind(op.Howler);
+       for (const qQ of WQ.statements) wQ(qQ, !0);
+       return {
+         functions: XQ,
+         hasErrors: tQ(WQ)
+       }
+     }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L98-L102` → after: `L381-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L381-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L381-L423) · [Before (L98-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L98-L102)

```diff
-     function wp() {
-       vp();
-       const {
-         ctx: pp,
-         masterGain: ip
+     function eQ(QQ) {
+       return oQ(QQ).functions
+     }
+ 
+     function nQ(QQ) {
+       return QQ.trim().replace(/^(?:callback:|function\s+)/, "").replace(/\s*\(.*$/s, "").trim()
+     }
+ 
+     function xQ(QQ, WQ) {
+       var XQ;
+       const wQ = QQ.filter((QQ => QQ.name === WQ)),
+         qQ = wQ.filter((QQ => !QQ.isProperty)),
+         TQ = qQ.length > 0 ? qQ : wQ;
+       return null !== (XQ = TQ.find((QQ => QQ.topLevel))) && void 0 !== XQ ? XQ : TQ[0]
+     }
+ 
+ ... (27 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L104-L109` → after: `L425-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L425-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L425-L856) · [Before (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L104-L109)

```diff
-       return pp && ip ? {
-         ctx: pp,
-         destination: ip,
-         holdAwake: pp => {
-           var ip, cp;
-           (yp += pp ? 1 : -1, pp) ? null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp): null === (cp = xp._autoSuspend) || void 0 === cp || cp.call(xp)
+       const sQ = TQ.some((QQ => QQ.from > XQ.from && QQ.to <= XQ.to && !wQ.some((WQ => WQ.name === QQ.name))));
+       if (zQ && sQ) return null;
+       const FQ = /^\s*(?:\/\/|\/\*)/.test(qQ) ? XQ.commentFrom : XQ.from;
+       return QQ.slice(0, FQ) + RQ(QQ.slice(FQ, XQ.to), qQ.trim(), EQ(QQ.slice(XQ.to))) + QQ.slice(XQ.to)
+     }
+ 
+     function mQ(QQ, WQ, XQ, wQ, qQ) {
+       const TQ = wQ.trim();
+       if (TQ.includes("\n") || !TQ.endsWith("{")) return null;
+       const zQ = oQ(QQ),
+         sQ = zQ.functions.find((wQ => wQ.topLevel && MQ(QQ, wQ.from) <= WQ && XQ < wQ.to && !QQ.slice(wQ.from, XQ).includes("\n"))),
+         FQ = oQ(qQ),
+         PQ = FQ.functions.filter((QQ => QQ.topLevel)),
+         gQ = !FQ.hasErrors && (1 === PQ.length || PQ.some((QQ => QQ.name === (null === sQ || void 0 === sQ ? void 0 : sQ.name)))),
+         JQ = 1 === PQ.length && PQ[0].name !== (null === sQ || void 0 === sQ ? void 0 : sQ.name) ? PQ[0].name : void 0,
+         rQ = void 0 === JQ ? void 0 : zQ.functions.find((QQ => QQ.topLevel && QQ.name === JQ));
+ ... (416 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L111` → after: `L858-L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L858-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L858-L1152) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L111)

```diff
-         wake: () => {
+         annotations: {
+           readOnlyHint: !1,
+           destructiveHint: !1,
+           idempotentHint: !0,
+           openWorldHint: !1
+         }
+       }, {
+         name: "ask_creator",
+         title: "Ask you a question",
+         description: "Asks the creator one multiple-choice question instead of changing code, only when the request is too unclear to build anything sensible. Never asks for personal details",
+         inputSchema: {
+           type: "object",
+           properties: {
+             question: {
+               type: "string",
+               description: "One short question"
+ ... (279 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L113` → after: `L1154-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L1154-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L1154-L1174) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L113)

```diff
-           "running" !== pp.state && (null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp), pp.resume().catch((() => {})))
+           const QQ = CW(FQ[1]);
+           if (null === QQ) continue;
+           const PQ = {};
+           for (const XQ of FQ[2].matchAll(WQ)) {
+             var zQ, sQ;
+             PQ[null !== (zQ = XQ[1]) && void 0 !== zQ ? zQ : XQ[2]] = null !== (sQ = XQ[3]) && void 0 !== sQ ? sQ : XQ[4]
+           }(null === (TQ = qQ) || void 0 === TQ ? void 0 : TQ.call.name) === QQ && "" === XQ.slice(qQ.index + qQ.call.source.length, FQ.index).trim() ? wQ[wQ.length - 1] = {
+             call: {
+               name: QQ,
+               args: PQ,
+               source: XQ.slice(qQ.index, FQ.index + FQ[0].length)
+             },
+             index: qQ.index
+           } : wQ.push({
+             call: {
+               name: QQ,
+ ... (5 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L115` → after: `L1176-L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L1176-L1177) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L115)

```diff
-       } : null
+         return wQ
+       }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L118` → after: `L1180-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L1180-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L1180-L1482) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L118)

```diff
-     function vp() {
+     function LW(QQ) {
+       return QQ.replace(/\\(["\\nt])/g, ((QQ, WQ) => "n" === WQ ? "\n" : "t" === WQ ? "\t" : WQ))
+     }
+ 
+     function kW(QQ) {
+       let WQ = null !== QQ && void 0 !== QQ ? QQ : {};
+       if ("string" === typeof WQ) try {
+         WQ = JSON.parse("" === WQ ? "{}" : WQ)
+       } catch {
+         return null
+       }
+       if ("object" !== typeof WQ || null === WQ) return null;
+       const XQ = {};
+       for (const [wQ, qQ] of Object.entries(WQ)) "string" === typeof qQ ? XQ[wQ] = EW.has(wQ) && RW.test(qQ) && !qQ.includes("\n") ? LW(qQ) : qQ : "boolean" === typeof qQ || "number" === typeof qQ ? XQ[wQ] = String(qQ) : "object" !== typeof qQ || null === qQ || Array.isArray(qQ)  … [truncated]
+       return XQ
+     }
+ ... (287 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L120` → after: `L1484-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L1484-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L1484-L1495) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L120)

```diff
-       (xp.volume(), xp.ctx && xp.autoUnlock) && (null === (pp = xp._unlockAudio) || void 0 === pp || pp.call(xp))
+       const XQ = HQ().createSourceFile("worldCode.js", QQ, HQ().ScriptTarget.Latest, !0, HQ().ScriptKind.JS),
+         {
+           parseDiagnostics: wQ
+         } = XQ;
+       return {
+         file: XQ,
+         hasErrors: (null !== (WQ = null === wQ || void 0 === wQ ? void 0 : wQ.length) && void 0 !== WQ ? WQ : 0) > 0
+       }
+     }
+ 
+     function GX(QQ) {
+       return void 0 !== QQ && (HQ().isFunctionExpression(QQ) || HQ().isArrowFunction(QQ))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L122` → after: `L1497-L16783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L1497-L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/95.js#L1497-L16783) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/95.js#L122)

```diff
-     Up && (xp._autoSuspend = () => yp > 0 ? op.Howler : Up())
+ 
+     function UX(QQ) {
+       if (HQ().isFunctionDeclaration(QQ) && QQ.name) return {
+         NI: QQ,
+         nameNode: QQ.name
+       };
+       if (HQ().isVariableStatement(QQ) && 1 === QQ.declarationList.declarations.length) {
+         const WQ = QQ.declarationList.declarations[0],
+           XQ = WQ.initializer && bX(WQ.initializer);
+         if (HQ().isIdentifier(WQ.name) && GX(XQ)) return {
+           NI: XQ,
+           nameNode: WQ.name
+         }
+       }
+       const WQ = vX(QQ),
+         XQ = WQ && bX(WQ.value);
+ ... (15271 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/96.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/96.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/96.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/96.js#L2)

```diff
- export const ids = [95, 96];
+ export const ids = [96];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/96.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/96.js#L4)

```diff
-   36654: (pp, ip, cp) => {
+   41505: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L6-L7` → after: `L6-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L6-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/96.js#L6-L130) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/96.js#L6-L7)

```diff
-       countDecodesAs: () => Ap,
-       decodedAudio: () => Pp
+       DOCS_AGENT_PART_CHARS: () => uW.b,
+       DOCS_LLMS_FULL_TXT_PATH: () => uW.f,
+       DOCS_LLMS_TXT_PATH: () => uW.i,
+       DOCS_LLMS_TXT_URL: () => uW.m,
+       ROOT_LLMS_TXT_PATH: () => uW.o,
+       allGamemodeSettings: () => wQ.e,
+       arcadeModeStaticConfig: () => BQ.e,
+       arenaStaticConfig: () => qW,
+       backroomsStaticConfig: () => wW.c,
+       battleBoxStaticConfig: () => FW,
+       bedwarsStaticConfig: () => iQ.b,
+       bloxdAggregatorConfig: () => sQ.c,
+       bloxdPreprodAggregatorConfig: () => FQ.d,
+       bloxdStagingAggregatorConfig: () => PQ.c,
+       bridgeBattleStaticConfig: () => SQ.c,
+       captureTheFlagStaticConfig: () => IW,
+ ... (109 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L9-L13` → after: `L132-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L132-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/96.js#L132-L188) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/96.js#L9-L13)

```diff
-     var Op = cp(3363),
-       op = cp(4974);
-     const Ip = op.Howler,
-       Sp = new Map;
-     let xp = 0;
+     var wQ = XQ(814);
+ 
+     function qQ(QQ) {
+       var WQ, XQ;
+       return null !== (WQ = null === (XQ = (0, wQ.j)(QQ)) || void 0 === XQ ? void 0 : XQ.defaultListedVariation) && void 0 !== WQ ? WQ : QQ
+     }
+     var TQ = XQ(1046),
+       zQ = XQ(1064),
+       sQ = XQ(806),
+       FQ = XQ(798),
+       PQ = XQ(803),
+       gQ = XQ(789),
+       JQ = XQ(781),
+       rQ = XQ(819),
+       IQ = XQ(843),
+       jQ = XQ(827),
+ ... (41 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L15-L19` → after: `L190-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L190-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/96.js#L190-L480) · [Before (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/96.js#L15-L19)

```diff
-         song: 0,
-         sheet: 0
-       },
-       Yp = new WeakMap,
-       Dp = new WeakSet;
+         type: "Arena",
+         title: "Battle Arena",
+         description: "Fight for glory in a 2v2v2v2v2v2v2v2 arena!",
+         smallPicture: "battle_arena",
+         thumbnailUseLongRatio: !1,
+         badges: [{
+           type: "limitedTimeGame"
+         }],
+         useRejoinLastLobbyButton: !1,
+         additionalMetaTags: [],
+         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+       },
+       TW = {
+         type: "Arena",
+         title: "Goldrush",
+         description: "Who is the best miner?\nMine gold and deposit it at your spawn, but beware of others killing you",
+ ... (275 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L22-L29` → after: `L483-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L483-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/96.js#L483-L491) · [Before (L22-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/96.js#L22-L29)

```diff
-       return Yp.set(pp, ip), pp
-     }
- 
-     function Pp() {
-       return {
-         bytes: xp,
-         songsDecoded: Lp.song,
-         sheetsDecoded: Lp.sheet
+       return `/docs/${PQ(QQ)}/${WQ+1}.md`
+     }
+     const rQ = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
+ 
+     function IQ(QQ) {
+       const WQ = rQ.exec(QQ);
+       return null === WQ ? null : {
+         name: WQ[1],
+         part: void 0 === WQ[2] ? null : Number(WQ[2])
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L32-L195` → after: `L494-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L494-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/96.js#L494-L505) · [Before (L32-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/96.js#L32-L195)

```diff
- 
-     function Wp(pp) {
-       if (Dp.has(pp)) return;
-       Dp.add(pp);
-       const ip = 1 === pp.decodeAudioData.length,
-         cp = pp.decodeAudioData.bind(pp);
-       pp.decodeAudioData = (pp, Op, op) => {
-         const Dp = pp => {
-           const ip = Ip._howls.filter((pp => "loaded" !== pp._state));
-           try {
-             null === Op || void 0 === Op || Op(pp)
-           } finally {
-             const cp = ip.find((pp => "loaded" === pp._state));
-             void 0 !== cp && "string" === typeof cp._src && function(pp, ip, cp) {
-               var Op;
-               xp += cp - (null !== (Op = Sp.get(ip)) && void 0 !== Op ? Op : 0), Sp.set(ip, cp);
- ... (148 more removed lines; see GitHub link above)
+     const jQ = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+ 
+     function BQ(QQ) {
+       const WQ = jQ.exec(QQ);
+       if (null === WQ) return null;
+       const [, XQ = "", wQ] = WQ;
+       return void 0 === wQ ? gQ(XQ) : JQ(XQ, Number(wQ) - 1)
+     }
+ 
+     function yQ(QQ) {
+       return `/docsHtml/${PQ(QQ)}.html`
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/97.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/97.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L2)

```diff
- export const ids = [95, 96, 97];
+ export const ids = [10, 13, 14, 16, 17, 19, 21, 22, 24, 25, 97, 139, 140];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4-L7` → after: `L5-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L5-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L5-L26) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L4-L7)

```diff
-   36819: (pp, ip, cp) => {
-     function Op(pp, ip, cp, Op) {
-       return !(cp && !pp.aimable) && (!ip || pp.gun && "head" !== Op)
-     }
+   39554: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./bedwars/bedwarsClient": 39560,
+       "./bridgeBattle/bridgeBattleClient": 39569,
+       "./buildAFactory2/buildAFactory2Client": 38774,
+       "./classic/classicClient": 39571,
+       "./classic/smp2Client": 39578,
+       "./clutch/clutchClient": 39581,
+       "./containmentBreach/containmentBreachClient": 39587,
+       "./cooking/cookingClient": 39702,
+       "./defusal/defusalClient": 39707,
+       "./frontline/frontlineClient": 39712,
+       "./goalRush/goalRushClient": 39715,
+       "./luckyBedwars/luckyBedwarsClient": 39723,
+       "./ninetyNineNights/ninetyNineNightsClient": 39730,
+       "./oneBlock/oneBlockClient": 39735,
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L10` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L29) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L10)

```diff
-       return Math.max(.1 * pp, 1)
+       return TQ(QQ).then(XQ)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L13-L14` → after: `L32-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L32-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L32-L39) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L13-L14)

```diff
-     function Ip(pp, ip) {
-       return !pp && ip
+     function TQ(QQ) {
+       return Promise.resolve().then((() => {
+         if (!XQ.o(wQ, QQ)) {
+           var WQ = new Error("Cannot find module '" + QQ + "'");
+           throw WQ.code = "MODULE_NOT_FOUND", WQ
+         }
+         return wQ[QQ]
+       }))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L16-L20` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L41) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L16-L20)

```diff
-     cp.d(ip, {
-       d: () => Ip,
-       e: () => op,
-       h: () => Op
-     })
+     qQ.keys = () => Object.keys(wQ), qQ.resolve = TQ, qQ.id = 39554, QQ.exports = qQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L22-L41` → after: `L43-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L43-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L43-L81) · [Before (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L22-L41)

```diff
-   36828: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => xp,
-       i: () => Sp
-     });
-     let Op = null;
-     const op = {
-         crosshairAccuracy: [],
-         turnDamageIndicators: []
-       },
-       Ip = {
-         crosshairAccuracy: pp => {
-           const ip = op.crosshairAccuracy.at(-1);
-           ip ? ip.hook(pp) : Op = pp
-         },
-         turnDamageIndicators: pp => {
- ... (4 more removed lines; see GitHub link above)
+   39097: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./animator.ts": 37358,
+       "./autoRemoveMesh.ts": 39105,
+       "./autoRotate.js": 39058,
+       "./bullet.js": 39110,
+       "./cameraShake.ts": 39114,
+       "./cape.ts": 39065,
+       "./crouchingHandler.ts": 39120,
+       "./doOnFirstTick.ts": 39116,
+       "./entityMultilineText.ts": 39122,
+       "./entityName.ts": 39150,
+       "./flashingMeshOverlay.js": 39161,
+       "./floating.ts": 39174,
+       "./forcedCameraTransition.ts": 39176,
+       "./fourLeggedMesh.ts": 39052,
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L43-L54` → after: `L83-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L83-L85) · [Before (L43-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L43-L54)

```diff
-     function Sp(pp, ip) {
-       const cp = {
-           hook: ip
-         },
-         Sp = op[pp];
-       if (Sp.push(cp), "crosshairAccuracy" === pp && null !== Op) {
-         const pp = Op;
-         Op = null, Ip.crosshairAccuracy(pp)
-       }
-       return () => {
-         const pp = Sp.indexOf(cp); - 1 !== pp && Sp.splice(pp, 1)
-       }
+     function qQ(QQ) {
+       var WQ = TQ(QQ);
+       return XQ(WQ)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L57-L58` → after: `L88-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L88-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L88-L93) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L57-L58)

```diff
-     function xp() {
-       return Ip
+     function TQ(QQ) {
+       if (!XQ.o(wQ, QQ)) {
+         var WQ = new Error("Cannot find module '" + QQ + "'");
+         throw WQ.code = "MODULE_NOT_FOUND", WQ
+       }
+       return wQ[QQ]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L61-L76` → after: `L99-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L99-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L99-L112) · [Before (L61-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L61-L76)

```diff
-   36654: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       countDecodesAs: () => Ap,
-       decodedAudio: () => Pp
-     });
-     var Op = cp(3363),
-       op = cp(4974);
-     const Ip = op.Howler,
-       Sp = new Map;
-     let xp = 0;
-     const Lp = {
-         song: 0,
-         sheet: 0
-       },
-       Yp = new WeakMap,
-       Dp = new WeakSet;
+   39085: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./cape_cow_cream.png": 28325,
+       "./cape_cow_normal.png": 28327,
+       "./cape_creator_level1.png": 28335,
+       "./cape_creator_level2.png": 28337,
+       "./cape_creator_level3.png": 28343,
+       "./cape_none.png": 28352,
+       "./cape_pig.png": 28358,
+       "./cape_sheep.png": 28360,
+       "./cape_super.png": 28368,
+       "./cape_super_inverted.png": 28376,
+       "./cape_youtuber.png": 28380
+     };
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L78-L79` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L114-L116) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L78-L79)

```diff
-     function Ap(pp, ip) {
-       return Yp.set(pp, ip), pp
+     function qQ(QQ) {
+       var WQ = TQ(QQ);
+       return XQ(WQ)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L82-L86` → after: `L119-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L119-L122) · [Before (L82-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L82-L86)

```diff
-     function Pp() {
-       return {
-         bytes: xp,
-         songsDecoded: Lp.song,
-         sheetsDecoded: Lp.sheet
+     function TQ(QQ) {
+       if (!XQ.o(wQ, QQ)) {
+         var WQ = new Error("Cannot find module '" + QQ + "'");
+         throw WQ.code = "MODULE_NOT_FOUND", WQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L91-L115` → after: `L155-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L155-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L155-L162) · [Before (L91-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L91-L115)

```diff
-       if (Dp.has(pp)) return;
-       Dp.add(pp);
-       const ip = 1 === pp.decodeAudioData.length,
-         cp = pp.decodeAudioData.bind(pp);
-       pp.decodeAudioData = (pp, Op, op) => {
-         const Dp = pp => {
-           const ip = Ip._howls.filter((pp => "loaded" !== pp._state));
-           try {
-             null === Op || void 0 === Op || Op(pp)
-           } finally {
-             const cp = ip.find((pp => "loaded" === pp._state));
-             void 0 !== cp && "string" === typeof cp._src && function(pp, ip, cp) {
-               var Op;
-               xp += cp - (null !== (Op = Sp.get(ip)) && void 0 !== Op ? Op : 0), Sp.set(ip, cp);
-               const op = Yp.get(pp);
-               void 0 !== op && Lp[op]++
- ... (9 more removed lines; see GitHub link above)
+       var WQ = TQ(QQ);
+       return XQ(WQ)
+     }
+ 
+     function TQ(QQ) {
+       if (!XQ.o(wQ, QQ)) {
+         var WQ = new Error("Cannot find module '" + QQ + "'");
+         throw WQ.code = "MODULE_NOT_FOUND", WQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L117-L131` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L164) · [Before (L117-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L117-L131)

```diff
-     }(0, Op.h)(Pp);
-     const yp = op.Howl.prototype,
-       Up = yp.init;
-     yp.init = function(pp) {
-       return op.Howler.volume(), Ip.ctx && Wp(Ip.ctx), Up.call(this, pp)
-     };
-     const wp = yp.unload;
-     yp.unload = function() {
-       const pp = this._src,
-         ip = wp.call(this);
-       if ("string" !== typeof pp) return ip;
-       const cp = Sp.get(pp);
-       return void 0 !== cp && function(pp) {
-         return !Ip._howls.some((ip => ip._src === pp || "string" === typeof ip._src && pp.indexOf(ip._src) >= 0))
-       }(pp) && (Sp.delete(pp), xp -= cp), ip
+       return wQ[QQ]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L134-L188` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L170-L171) · [Before (L134-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L134-L188)

```diff
-   36980: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Lp
-     });
-     var Op = cp(25),
-       op = cp(36948),
-       Ip = cp(4437),
-       Sp = cp(36986),
-       xp = cp(4974);
-     const Lp = function(pp) {
-       const ip = new Set;
-       return cp => {
-         var Op;
-         const Ip = null === (Op = [...op.b].find((pp => {
-           let [, ip] = pp;
-           return ip.includes(cp)
- ... (39 more removed lines; see GitHub link above)
+   39844: () => {
+     "undefined" === typeof window || window.global || (window.global = window.globalThis || {})
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L190-L197` → after: `L173-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L173-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L173-L216) · [Before (L190-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L190-L197)

```diff
-   36986: (pp, ip, cp) => {
-     async function Op(pp) {
-       const ip = await fetch(pp, {
-         priority: "low"
-       });
-       if (!ip.ok) throw new Error(`Fetching ${pp} failed: HTTP ${ip.status}`);
-       const cp = ip.body.getReader();
-       for (; !(await cp.read()).done;);
+   39856: (QQ, WQ, XQ) => {
+     var wQ = [],
+       qQ = [],
+       TQ = [],
+       zQ = [],
+       sQ = [],
+       FQ = [],
+       PQ = [],
+       gQ = [],
+       JQ = [],
+       rQ = [],
+       IQ = [],
+       jQ = [],
+       BQ = XQ(9589).d,
+       yQ = 1e-5,
+       VQ = [0, 0, 0],
+ ... (28 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L199-L207` → after: `L218-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L218-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L218-L221) · [Before (L199-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L199-L207)

```diff
-     cp.d(ip, {
-       c: () => Op
-     })
-   },
-   36950: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => op
-     });
-     const Op = ["end", "stop", "playerror"];
+     var aQ = 1 / 0,
+       lQ = -1,
+       hQ = !1,
+       iQ = yQ;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L209-L215` → after: `L223-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L223-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L223-L249) · [Before (L209-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L209-L215)

```diff
-     function op(pp, ip) {
-       const cp = () => {
-         if (function(pp) {
-             return "loaded" === pp.state() && !pp.playing() && !pp._playLock
-           }(pp)) {
-           for (const ip of Op) pp.off(ip, cp);
-           pp.unload(), ip()
+     function cQ(QQ, WQ, XQ, PQ) {
+       var JQ = Math.sqrt(QQ[0] * QQ[0] + QQ[1] * QQ[1] + QQ[2] * QQ[2]);
+       if (0 === JQ) return JQ;
+       for (var rQ = 0; rQ < 3; rQ++) {
+         var IQ = QQ[rQ] >= 0,
+           jQ = IQ ? 1 : -1;
+         zQ[rQ] = jQ;
+         var BQ = IQ ? XQ[rQ] : WQ[rQ],
+           yQ = IQ ? WQ[rQ] : XQ[rQ];
+         wQ[rQ] = yQ;
+         var VQ = Math.floor(BQ - jQ * PQ);
+         qQ[rQ] = VQ, TQ[rQ] = Math.floor(yQ + jQ * PQ);
+         var DQ = QQ[rQ] / JQ;
+         gQ[rQ] = DQ;
+         var pQ = Math.abs(1 / DQ);
+         sQ[rQ] = pQ;
+ ... (11 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L217-L219` → after: `L251-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L251-L253) · [Before (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L217-L219)

```diff
-       };
-       for (const op of Op) pp.on(op, cp);
-       cp()
+         return pQ[0] = PQ, PQ < 0 ? -1 : FQ
+       }(QQ, WQ, XQ, wQ, qQ, TQ, zQ, iQ);
+       sQ >= 0 && sQ < aQ && (aQ = sQ, lQ = pQ[0], hQ = !0)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L234-L248` → after: `L256-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L256-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L256-L260) · [Before (L234-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L234-L248)

```diff
-     function Lp() {
-       var pp, ip;
-       if (xp.ctx || !xp.usingWebAudio || "undefined" === typeof AudioContext || !(0, Sp.f)()) return;
-       const cp = navigator.audioSession;
-       let Op;
-       "auto" === (null === cp || void 0 === cp ? void 0 : cp.type) && (cp.type = "ambient");
-       try {
-         Op = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
-         return
-       }
-       const op = Op.createGain();
-       op.gain.setValueAtTime(xp._muted ? 0 : null !== (pp = xp._volume) && void 0 !== pp ? pp : 1, Op.currentTime), op.connect(Op.destination), xp.ctx = Op, xp.masterGain = op, null === (ip = xp._setup) || void 0 === ip || ip.call(xp)
+     function RQ(QQ, WQ, XQ, wQ) {
+       for (var qQ = 0; qQ < dQ; qQ++)
+         if (GQ[qQ] === WQ && UQ[qQ] === XQ && bQ[qQ] === wQ) return vQ[qQ];
+       var TQ = QQ(WQ, XQ, wQ);
+       return dQ < 32 && (GQ[dQ] = WQ, UQ[dQ] = XQ, bQ[dQ] = wQ, vQ[dQ] = TQ, dQ++), TQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L260-L270` → after: `L263-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L263-L268) · [Before (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L260-L270)

```diff
-     function Wp() {
-       for (; xp._html5AudioPool.length < xp.html5PoolSize;) {
-         const pp = new Audio;
-         pp._unlocked = !0, xp._releaseHtml5Audio(pp)
-       }
-       for (const ip of xp._howls)
-         if (!ip._webAudio)
-           for (const cp of ip._getSoundIds()) {
-             var pp;
-             const Op = null === (pp = ip._soundById(cp)) || void 0 === pp ? void 0 : pp._node;
-             Op && !Op._unlocked && (Op._unlocked = !0, Op.load())
+     function EQ(QQ, WQ, XQ, wQ) {
+       for (var sQ = zQ[0], FQ = zQ[1], PQ = zQ[2], gQ = qQ[0] + sQ, JQ = qQ[1] + FQ, rQ = qQ[2] + PQ, IQ = TQ[0]; IQ != gQ; IQ += sQ)
+         for (var jQ = TQ[1]; jQ != JQ; jQ += FQ)
+           for (var BQ = TQ[2]; BQ != rQ; BQ += PQ) {
+             var yQ = RQ(QQ, IQ, jQ, BQ);
+             Array.isArray(yQ) && AQ(yQ, IQ, jQ, BQ, WQ, XQ, wQ)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L273-L290` → after: `L271-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L271-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L271-L280) · [Before (L273-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L273-L290)

```diff
-     Ap.init = function(pp) {
-       return Lp(), Pp.call(this, pp)
-     }, (0, Sp.f)() && (xp._unlockAudio = () => {
-       const pp = xp.ctx;
-       if (xp._audioUnlocked || !pp) return;
-       xp.autoUnlock = !1;
-       const ip = pp.createBuffer(1, 1, 22050);
-       xp._scratchBuffer = ip;
-       const cp = new AbortController;
-       let Op = "afterPaint";
-       const op = () => {
-           var Op;
-           if (xp._audioUnlocked) return;
-           null === (Op = xp._autoResume) || void 0 === Op || Op.call(xp);
-           const op = pp.createBufferSource();
-           op.buffer = ip, op.connect(pp.destination), op.start(0), pp.resume().catch((() => {})), op.onended = () => {
- ... (2 more removed lines; see GitHub link above)
+ 
+     function CQ(QQ, WQ, XQ, wQ, sQ, FQ) {
+       for (var PQ = zQ[0], gQ = 0 === WQ ? qQ[0] : TQ[0], JQ = qQ[0] + PQ, rQ = zQ[1], IQ = 1 === WQ ? qQ[1] : TQ[1], jQ = qQ[1] + rQ, BQ = zQ[2], yQ = 2 === WQ ? qQ[2] : TQ[2], VQ = qQ[2] + BQ, DQ = gQ; DQ != JQ; DQ += PQ)
+         for (var pQ = IQ; pQ != jQ; pQ += rQ)
+           for (var GQ = yQ; GQ != VQ; GQ += BQ) {
+             var UQ = QQ(DQ, pQ, GQ);
+             if (!1 !== UQ && null !== UQ && void 0 !== UQ) {
+               if (!Array.isArray(UQ)) return XQ <= aQ && (aQ = XQ, lQ = WQ, hQ = !1), !0;
+               AQ(UQ, DQ, pQ, GQ, wQ, sQ, FQ)
+             }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L292-L314` → after: `L282-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L282-L284) · [Before (L292-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L292-L314)

```diff
-         },
-         Lp = () => {
-           Wp(), op()
-         },
-         Yp = ip => {
-           if (Wp(), "inTap" === Op) {
-             if ("running" === pp.state) return;
-             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), op()
-           } else "afterPaint" === Op && (Op = "queued", (0, Ip.e)(ip.timeStamp, (() => {
-             Op = "inTap", op()
-           })))
-         };
-       for (const Ip of ["touchstart", "touchend"]) document.addEventListener(Ip, Lp, {
-         capture: !0,
-         signal: cp.signal
-       });
- ... (7 more removed lines; see GitHub link above)
+       return !1
+     }
+     var uQ = 1e8;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L316-L331` → after: `L286-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L286-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L286-L325) · [Before (L316-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L316-L331)

```diff
-     function wp() {
-       vp();
-       const {
-         ctx: pp,
-         masterGain: ip
-       } = xp;
-       return pp && ip ? {
-         ctx: pp,
-         destination: ip,
-         holdAwake: pp => {
-           var ip, cp;
-           (yp += pp ? 1 : -1, pp) ? null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp): null === (cp = xp._autoSuspend) || void 0 === cp || cp.call(xp)
-         },
-         wake: () => {
-           var ip;
-           "running" !== pp.state && (null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp), pp.resume().catch((() => {})))
+     function LQ(QQ, WQ, XQ, VQ, DQ, pQ) {
+       var GQ = PQ,
+         UQ = JQ,
+         bQ = rQ,
+         vQ = jQ;
+       kQ(WQ, XQ), pQ || (pQ = yQ);
+       var HQ = function(QQ, WQ, XQ, PQ, JQ, rQ) {
+         var jQ = wQ,
+           yQ = TQ,
+           VQ = zQ,
+           DQ = FQ,
+           pQ = gQ,
+           GQ = 0,
+           UQ = 0,
+           bQ = 0,
+           vQ = 0;
+ ... (24 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L333` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L327-L334) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L333)

```diff
-       } : null
+         for (GQ += HQ, vQ = 0; vQ < 3; vQ++) PQ[vQ] += XQ[vQ], JQ[vQ] += XQ[vQ];
+         return GQ
+       }(QQ, VQ, GQ, UQ, bQ, pQ);
+       if (!DQ) {
+         for (var AQ = 0; AQ < 3; AQ++) vQ[AQ] = XQ[AQ] > 0 ? bQ[AQ] - WQ.max[AQ] : UQ[AQ] - WQ.base[AQ];
+         WQ.translate(vQ)
+       }
+       return HQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L336-L338` → after: `L337-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L337-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L337-L343) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L336-L338)

```diff
-     function vp() {
-       var pp;
-       (xp.volume(), xp.ctx && xp.autoUnlock) && (null === (pp = xp._unlockAudio) || void 0 === pp || pp.call(xp))
+     function kQ(QQ, WQ) {
+       for (var XQ = PQ, wQ = JQ, qQ = rQ, TQ = 0; TQ < 3; TQ++) XQ[TQ] = +WQ[TQ], qQ[TQ] = +QQ.max[TQ], wQ[TQ] = +QQ.base[TQ];
+       for (var zQ = 0; zQ < 3; zQ++) {
+         if (!(Number.isFinite(XQ[zQ]) && Math.abs(XQ[zQ]) <= uQ)) throw fQ("dir", XQ, zQ);
+         if (!(Number.isFinite(wQ[zQ]) && Math.abs(wQ[zQ]) <= uQ)) throw fQ("base", wQ, zQ);
+         if (!(Number.isFinite(qQ[zQ]) && Math.abs(qQ[zQ]) <= uQ)) throw fQ("max", qQ, zQ)
+       }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L340-L346` → after: `L345-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L345-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L345-L349) · [Before (L340-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L340-L346)

```diff
-     Up && (xp._autoSuspend = () => yp > 0 ? op.Howler : Up())
-   },
-   36974: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Op
-     });
-     const Op = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
+ 
+     function fQ(QQ, WQ, XQ) {
+       return new Error("BLOXD VOXEL-SWEEP: non-terminating sweep rejected - " + QQ + "[" + XQ + "]=" + WQ[XQ] + " " + QQ + "=[" + WQ[0] + "," + WQ[1] + "," + WQ[2] + "]")
+     }
+     LQ.checkInput = kQ, QQ.exports = LQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L348` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L351) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L348)

```diff
-   36965: (pp, ip, cp) => {
+   39907: (QQ, WQ, XQ) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L350-L352` → after: `L353-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L353-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L353-L355) · [Before (L350-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L350-L352)

```diff
-       b: () => Sp,
-       c: () => op,
-       f: () => Op
+       d: () => FQ,
+       f: () => TQ,
+       i: () => qQ
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L355-L356` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L359-L360) · [Before (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L355-L356)

```diff
-     function Op(pp) {
-       return pp.replace(/[_\-\s]*\d+$/, "") || pp
+     function qQ(QQ, WQ) {
+       return [Math.floor(QQ[0] / WQ) * WQ, Math.floor(QQ[1] / WQ) * WQ, Math.floor(QQ[2] / WQ) * WQ]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L359-L360` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L363-L365) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L359-L360)

```diff
-     function op(pp, ip, cp) {
-       return cp <= 0 ? 0 : pp * cp / Math.max(ip, cp)
+     function TQ(QQ) {
+       const WQ = (null !== QQ && void 0 !== QQ ? QQ : "").match(/-?\d+(?:\.\d+)?/g);
+       return WQ && WQ.length >= 3 ? [Number(WQ[0]), Number(WQ[1]), Number(WQ[2])] : null
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L364-L365` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L369) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L364-L365)

```diff
-       const cp = pp.getDurationMs();
-       return cp > 0 ? pp.loudness * Math.max(0, 1 - (ip - pp.startMs) / cp) : 0
+       return QQ === WQ ? String(QQ) : `${QQ}-${WQ}`
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L367-L376` → after: `L371-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L371-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L371-L393) · [Before (L367-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L367-L376)

```diff
-     class Sp {
-       constructor() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
-           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
-         this.maxVoices = pp, this.maxPerGroup = ip, this.voices = []
-       }
-       admit(pp) {
-         if (this.voices = this.voices.filter((pp => pp.isAlive())), null !== pp.group) {
-           const ip = this.voices.filter((ip => ip.group === pp.group));
-           if (ip.length >= this.maxPerGroup && !this.dropLeastWorth(ip, pp)) return !1
+ 
+     function sQ(QQ, WQ, XQ, wQ) {
+       const qQ = [];
+       let TQ = new Map;
+       for (let zQ = QQ[2]; zQ < QQ[2] + WQ; zQ++) {
+         const sQ = new Map;
+         let FQ = QQ[0];
+         for (; FQ < QQ[0] + WQ;) {
+           const qQ = wQ(FQ, XQ, zQ);
+           let PQ = FQ;
+           for (; PQ + 1 < QQ[0] + WQ && wQ(PQ + 1, XQ, zQ) === qQ;) PQ++;
+           if (null !== qQ) {
+             const QQ = `${FQ} ${PQ} ${qQ}`,
+               WQ = TQ.get(QQ);
+             WQ ? (WQ.z1 = zQ, TQ.delete(QQ), sQ.set(QQ, WQ)) : sQ.set(QQ, {
+               x0: FQ,
+ ... (7 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L378` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L395) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L378)

```diff
-         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, pp)) && (this.voices.push(pp), !0)
+         qQ.push(...TQ.values()), TQ = sQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L380-L386` → after: `L397-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L397-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L397-L423) · [Before (L380-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L380-L386)

```diff
-       dropLeastWorth(pp, ip) {
-         let cp = null,
-           Op = 1 / 0;
-         for (const op of pp) {
-           if (!op.canStop()) continue;
-           const pp = Ip(op, ip.startMs);
-           pp < Op && (cp = op, Op = pp)
+       return qQ.push(...TQ.values()), qQ.sort(((QQ, WQ) => QQ.z0 - WQ.z0 || QQ.x0 - WQ.x0)).map((QQ => `x${zQ(QQ.x0,QQ.x1)} z${zQ(QQ.z0,QQ.z1)} ${QQ.name}`))
+     }
+ 
+     function FQ(QQ, WQ, XQ, qQ) {
+       let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wQ;
+       const FQ = [QQ[0] + WQ - 1, QQ[1] + WQ - 1, QQ[2] + WQ - 1],
+         PQ = null !== qQ && qQ.every(((WQ, XQ) => Math.floor(WQ) >= QQ[XQ] && Math.floor(WQ) <= FQ[XQ])),
+         gQ = [`The chunk from ${QQ.join(" ")} to ${FQ.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+       null !== qQ && gQ.push(`The player's feet are at ${qQ.map(Math.floor).join(" ")}, ${PQ?"in this chunk":"outside this chunk"}.`);
+       const JQ = [];
+       for (let wQ = QQ[1]; wQ <= FQ[1]; wQ++) {
+         const qQ = sQ(QQ, WQ, wQ, XQ).join("; "),
+           TQ = JQ[JQ.length - 1];
+         (null === TQ || void 0 === TQ ? void 0 : TQ.boxes) === qQ ? TQ.to = wQ : JQ.push({
+           from: wQ,
+           to: wQ,
+ ... (11 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L388` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L425) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L388)

```diff
-         return !(!cp || ip.loudness < Op) && (this.voices.splice(this.voices.indexOf(cp), 1), cp.stop(), !0)
+         gQ.push(QQ)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L392` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L430) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L392)

```diff
-   36783: (pp, ip, cp) => {
+   39911: (QQ, WQ, XQ) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L398-L400` → after: `L435-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L435-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L435-L455) · [Before (L398-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L398-L400)

```diff
-     var Op = cp(34);
-     const op = "touchSprintChanged";
-     let Ip = !0;
+     const wQ = "The world isn't loaded, so no blocks can be seen.",
+       qQ = "The world isn't loaded, so nothing in it can be seen."
+   },
+   37169: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => dQ,
+       g: () => bQ,
+       h: () => vQ,
+       i: () => jQ
+     });
+     var wQ = XQ(1081),
+       qQ = XQ.n(wQ),
+       TQ = XQ(61),
+       zQ = XQ(78),
+       sQ = XQ(1421),
+       FQ = XQ(1507),
+ ... (5 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L402-L403` → after: `L457-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L457-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L457-L666) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L402-L403)

```diff
-     function Sp() {
-       return Ip
+     function jQ(QQ) {
+       const [WQ, XQ] = (0, TQ.useState)((() => (0, rQ.p)(QQ)));
+       return (0, TQ.useEffect)((() => (XQ((0, rQ.p)(QQ)), (0, rQ.G)((() => {
+         XQ((0, rQ.p)(QQ))
+       })))), [QQ]), WQ
+     }
+ 
+     function BQ(QQ, WQ) {
+       "function" === typeof QQ ? QQ(WQ) : QQ && (QQ.current = WQ)
+     }
+ 
+     function yQ(QQ) {
+       let {
+         tutorial: WQ,
+         step: XQ,
+         enabled: wQ = !0
+ ... (194 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L407` → after: `L696-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L696-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L696-L707) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L407)

```diff
-       pp !== Ip && (Ip = pp, Op.m.GA(op, pp))
+       const WQ = yQ(QQ),
+         XQ = (0, TQ.useRef)(null);
+       return DQ(QQ, WQ, XQ, null), WQ ? (0, zQ.createPortal)((0, IQ.jsx)("div", {
+         className: "TutorialCentreBackdrop",
+         children: (0, IQ.jsx)("div", {
+           ref: XQ,
+           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
+           children: (0, IQ.jsx)(pQ, {
+             ...QQ
+           })
+         })
+       }), (0, PQ.g)()) : null
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L410` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L710) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L410)

```diff
-   37001: (pp, ip, cp) => {
+   39542: (QQ, WQ, XQ) => {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L412-L414` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L712) · [Before (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L412-L414)

```diff
-       b: () => Ip,
-       c: () => Sp,
-       g: () => Op
+       d: () => iQ
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L416-L435` → after: `L714-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L714-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L714-L725) · [Before (L416-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L416-L435)

```diff
-     class Op {
-       constructor(pp) {
-         this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = pp
-       }
-       setMultiplierType(pp, ip) {
-         var cp;
-         this.multipliers[pp] = ip, null === (cp = this._onUpdate) || void 0 === cp || cp.call(this)
-       }
-       removeMultiplier(pp) {
-         var ip;
-         delete this.multipliers[pp], null === (ip = this._onUpdate) || void 0 === ip || ip.call(this)
-       }
-       getMultiplierType(pp) {
-         return this.multipliers[pp]
-       }
-       getTotalMultipliedVal() {
- ... (4 more removed lines; see GitHub link above)
+     var wQ = XQ(1812),
+       qQ = XQ(1404),
+       TQ = XQ(61),
+       zQ = XQ(1081),
+       sQ = XQ.n(zQ),
+       FQ = XQ(1507),
+       PQ = XQ(105);
+     const gQ = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
+       JQ = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];
+ 
+     function rQ(QQ) {
+       return "webm" === QQ ? gQ : JQ
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L437-L447` → after: `L727-L38881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L727-L38881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L727-L38881) · [Before (L437-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L437-L447)

```diff
-     class op {
-       constructor() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = pp
-       }
-       setBooleanType(pp, ip) {
-         const cp = this._getTotalBooleanVal();
-         this.booleans[pp] = !!ip;
-         const Op = this.getTotalBooleanVal();
-         var op;
-         Op !== cp && (null === (op = this._onUpdate) || void 0 === op || op.call(this, Op, this.booleans));
+ 
+     function IQ(QQ) {
+       for (const WQ of QQ)
+         if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(WQ)) return WQ;
+       return null
+     }
+ 
+     function jQ(QQ) {
+       return null !== IQ(rQ(QQ))
+     }
+     var BQ = XQ(1145);
+     const yQ = [{
+       id: "webm",
+       label: "WebM",
+       description: "Usually less screen tearing, but may not play in all media players."
+     }, {
+ ... (38139 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L450-L456` → after: `L38884-L38924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R38884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L38884-L38924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L38884-L38924) · [Before (L450-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L450-L456)

```diff
-       removeBoolean(pp) {
-         const ip = this._getTotalBooleanVal();
-         delete this.booleans[pp];
-         const cp = this._getTotalBooleanVal();
-         var Op;
-         null !== cp && cp !== ip && (null === (Op = this._onUpdate) || void 0 === Op || Op.call(this, cp, this.booleans));
-         return null !== cp && void 0 !== cp && cp
+       stop() {
+         const QQ = this.worker;
+         this.worker = null, null !== QQ && IQ(yQ, QQ, [])
+       }
+     }
+     class dQ {
+       decoded;
+       worker;
+       reject;
+       constructor(QQ, WQ, XQ, wQ, TQ) {
+         try {
+           this.worker = TQ?.take() ?? HQ()
+         } catch (PQ) {
+           throw UQ = !0, new Error(`The zstd decoder's worker did not start: ${(0,sQ.g)(PQ)}`)
+         }
+         const zQ = this.worker;
+ ... (25 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L458-L459` → after: `L38926-L38927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R38926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L38926-L38927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L38926-L38927) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L458-L459)

```diff
-       getBooleanType(pp) {
-         return this.booleans[pp]
+       push(QQ) {
+         IQ(BQ, this.worker, [QQ, [IQ(pQ, QQ, [])]])
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L461-L462` → after: `L38929-L38930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R38929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L38929-L38930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L38929-L38930) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L461-L462)

```diff
-       getTotalBooleanVal() {
-         throw new Error("This is an abstract class, use BooleanAndCombinator")
+       end() {
+         IQ(BQ, this.worker, [null])
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L464-L466` → after: `L38932-L38936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R38932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L38932-L38936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L38932-L38936) · [Before (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L464-L466)

```diff
-       forceUpdate() {
-         var pp;
-         null === (pp = this._onUpdate) || void 0 === pp || pp.call(this, this.getTotalBooleanVal(), this.booleans)
+       markWorkerFailed() {
+         UQ = !0
+       }
+       fail(QQ) {
+         this.reject(QQ), this.terminate()
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L468-L469` → after: `L38938-L38939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R38938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L38938-L38939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L38938-L38939) · [Before (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L468-L469)

```diff
-       _getTotalBooleanVal() {
-         throw new Error("This is an abstract class, use BooleanAndCombinator")
+       terminate() {
+         IQ(yQ, this.worker, [])
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L472-L475` → after: `L38942-L38972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R38942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L38942-L38972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L38942-L38972) · [Before (L472-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L472-L475)

```diff
-     class Ip extends op {
-       getTotalBooleanVal() {
-         const pp = this._getTotalBooleanVal();
-         if (null === pp) throw new Error("Should not be gotten before at least 1 type has been initialised");
+ 
+     function HQ() {
+       if (globalThis.Worker !== jQ) throw new Error("Worker is not the one the page loaded with");
+       return new Worker(new URL(XQ.p + XQ.u(70), XQ.b), {
+         name: "wasmZstdDecoder",
+         type: "module"
+       })
+     }
+     const aQ = Reflect.apply,
+       lQ = ArrayBuffer,
+       hQ = "undefined" === typeof Response ? void 0 : Response,
+       iQ = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
+       cQ = function() {
+         let QQ;
+         void 0 !== iQ && new iQ({
+           __proto__: null,
+ ... (15 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L478-L482` → after: `L39038-L39094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R39038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L39038-L39094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L39038-L39094) · [Before (L478-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L478-L482)

```diff
-       _getTotalBooleanVal() {
-         let pp = !1,
-           ip = !0;
-         for (const cp in this.booleans) pp = !0, ip &&= this.booleans[cp];
-         return pp ? ip : null
+       const UQ = QQ => {
+         pQ.fail(QQ), void 0 !== GQ && EQ(GQ)
+       };
+       let bQ = !1;
+       XQ.addEventListener("abort", (() => {
+         bQ && pQ.markWorkerFailed(), UQ(new Error(`${QQ} stalled`))
+       }), {
+         once: !0
+       }), (0, qQ.v)(rQ, (() => {}), UQ);
+       try {
+         let zQ;
+         try {
+           zQ = await fetch(QQ, {
+             signal: XQ
+           })
+         } catch (HQ) {
+ ... (41 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L485-L488` → after: `L39106-L39123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R39106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L39106-L39123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L39106-L39123) · [Before (L485-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L485-L488)

```diff
-     class Sp extends op {
-       getTotalBooleanVal() {
-         const pp = this._getTotalBooleanVal();
-         if (null === pp) throw new Error("Should not be gotten before at least 1 type has been initialised");
+ 
+     function EQ(QQ) {
+       try {
+         (0, FQ.V)(QQ.cancel())
+       } catch {}
+     }
+     const CQ = ".zst.bin",
+       uQ = 1e3;
+     let LQ = null;
+ 
+     function kQ(QQ) {
+       return LQ ??= function() {
+         const QQ = new Map,
+           WQ = "bloxd_wasm_webgpu:5139786,bloxd_wasm_webgl:5519906,bloxd_wasm_webgl1:4855035,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3715459";
+         for (const XQ of WQ?.split(",") ?? []) {
+           const [WQ = "", wQ] = XQ.split(":"), qQ = Number(wQ);
+ ... (2 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L491-L495` → after: `L39175-L39278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R39175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L39175-L39278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L39175-L39278) · [Before (L491-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L491-L495)

```diff
-       _getTotalBooleanVal() {
-         let pp = !1,
-           ip = !1;
-         for (const cp in this.booleans) pp = !0, ip ||= this.booleans[cp];
-         return pp ? ip : null
+       var PQ;
+       return null !== zQ ? SQ(zQ, "cold-worker") : SQ(await tQ(QQ, WQ, XQ), "cold-wasm")
+     }
+ 
+     function SQ(QQ, WQ) {
+       return {
+         __proto__: null,
+         module: QQ,
+         path: WQ
+       }
+     }
+ 
+     function tQ(QQ, WQ, XQ) {
+       return void 0 === kQ(QQ.name) ? (0, FQ.H)(QQ.url(), WQ, XQ) : (0, FQ.H)(QQ.url(), WQ, {
+         ...XQ,
+         hideThen: !0,
+ ... (88 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L499` → after: `L39325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R39325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L39325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L39325) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L499)

```diff
-   36994: (pp, ip, cp) => {
+   39002: (QQ, WQ, XQ) => {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L501-L503` → after: `L39327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R39327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L39327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L39327) · [Before (L501-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L501-L503)

```diff
-       e: () => Ip,
-       g: () => Op,
-       k: () => op
+       c: () => TQ
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L505-L507` → after: `L39329-L39430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R39329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L39329-L39430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/97.js#L39329-L39430) · [Before (L505-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/97.js#L505-L507)

```diff
-     const Op = 15,
-       op = 3,
-       Ip = 30
+     var wQ = XQ(3107);
+     const qQ = ["none", "idle", "now"];
+ 
+     function TQ() {
+       const QQ = () => (0, wQ.B)();
+       return {
+         memoryBytes: () => (0, wQ.w)().buffer.byteLength,
+         reserveUpFront: WQ => QQ().wJ(WQ),
+         reserveAhead: WQ => QQ().XJ(WQ),
+         setCeiling: WQ => {
+           QQ().qJ(WQ)
+         },
+         lowWater: () => qQ[QQ().WJ()] ?? "none",
+         stats: () => function(QQ) {
+           const WQ = new Uint32Array((0, wQ.w)().buffer, QQ, 17),
+             XQ = QQ => WQ[QQ] ?? 0,
+ ... (86 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/98.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/98.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec)

#### 1. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L5-L728` → after: `L4-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/98.js#L4-L84) · [Before (L5-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/98.js#L5-L728)

```diff
-   4977: (pp, ip, cp) => {
-     var Op;
-     ! function() {
-       var op = function() {
-         this.init()
-       };
-       op.prototype = {
-         init: function() {
-           var pp = this || Ip;
-           return pp._counter = 1e3, pp._html5AudioPool = [], pp.html5PoolSize = 10, pp._codecs = {}, pp._howls = [], pp._muted = !1, pp._volume = 1, pp._canPlayEvent = "canplaythrough", pp._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, p … [truncated]
-         },
-         volume: function(pp) {
-           var ip = this || Ip;
-           if (pp = parseFloat(pp), ip.ctx || Wp(), "undefined" !== typeof pp && pp >= 0 && pp <= 1) {
-             if (ip._volume = pp, ip._muted) return ip;
-             ip.usingWebAudio && ip.masterGain.gain.setValueAtTime(pp, Ip.ctx.currentTime);
- ... (708 more removed lines; see GitHub link above)
+   5212: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       Howl: () => qQ.Howl,
+       Howler: () => qQ.Howler,
+       musicOutput: () => yQ,
+       readyAudioContext: () => VQ
+     });
+     var wQ, qQ = XQ(5216),
+       TQ = XQ(3699),
+       zQ = XQ(4969);
+     const sQ = qQ.Howler;
+ 
+     function FQ() {
+       var QQ, WQ;
+       if (sQ.ctx || !sQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, zQ.f)()) return;
+       const XQ = navigator.audioSession;
+ ... (65 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L730-L733` → after: `L86-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L86-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/98.js#L86-L113) · [Before (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/98.js#L730-L733)

```diff
-       void 0 === (Op = function() {
-         return {
-           Howler: Ip,
-           Howl: Sp
+       for (const TQ of ["touchstart", "touchend"]) document.addEventListener(TQ, FQ, {
+         capture: !0,
+         signal: XQ.signal
+       });
+       for (const TQ of zQ.d) document.addEventListener(TQ, PQ, {
+         capture: !0,
+         signal: XQ.signal
+       })
+     });
+     let jQ = 0;
+     const BQ = null === (wQ = sQ._autoSuspend) || void 0 === wQ ? void 0 : wQ.bind(qQ.Howler);
+ 
+     function yQ() {
+       VQ();
+       const {
+         ctx: QQ,
+ ... (12 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L735-L737` → after: `L115-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L115-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/98.js#L115-L118) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/98.js#L735-L737)

```diff
-       }.apply(ip, [])) || (pp.exports = Op), ip.Howler = Ip, ip.Howl = Sp, "undefined" !== typeof cp.g ? (cp.g.HowlerGlobal = op, cp.g.Howler = Ip, cp.g.Howl = Sp, cp.g.Sound = xp) : "undefined" !== typeof window && (window.HowlerGlobal = op, window.Howler = Ip, window.Howl = Sp, … [truncated]
-     }(),
-     function() {
+       } : null
+     }
+ 
+     function VQ() {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L739-L893` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/98.js#L120-L122) · [Before (L739-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/98.js#L739-L893)

```diff
-       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(pp) {
-         var ip = this;
-         if (!ip.ctx || !ip.ctx.listener) return ip;
-         for (var cp = ip._howls.length - 1; cp >= 0; cp--) ip._howls[cp].stereo(pp);
-         return ip
-       }, HowlerGlobal.prototype.pos = function(pp, ip, cp) {
-         var Op = this;
-         return Op.ctx && Op.ctx.listener ? (ip = "number" !== typeof ip ? Op._pos[1] : ip, cp = "number" !== typeof cp ? Op._pos[2] : cp, "number" !== typeof pp ? Op._pos : (Op._pos = [pp, ip, cp], "undefined" !== typeof Op.ctx.listener.positionX ? (Op.ctx.listener.positionX.setT … [truncated]
-       }, HowlerGlobal.prototype.orientation = function(pp, ip, cp, Op, op, Ip) {
-         var Sp = this;
-         if (!Sp.ctx || !Sp.ctx.listener) return Sp;
-         var xp = Sp._orientation;
-         return ip = "number" !== typeof ip ? xp[1] : ip, cp = "number" !== typeof cp ? xp[2] : cp, Op = "number" !== typeof Op ? xp[3] : Op, op = "number" !== typeof op ? xp[4] : op, Ip = "number" !== typeof Ip ? xp[5] : Ip, "number" !== typeof pp ? xp : (Sp._orientation = [pp, i … [truncated]
-       }, Howl.prototype.init = (pp = Howl.prototype.init, function(ip) {
-         var cp = this;
-         return cp._orientation = ip.orientation || [1, 0, 0], cp._stereo = ip.stereo || null, cp._pos = ip.pos || null, cp._pannerAttr = {
- ... (139 more removed lines; see GitHub link above)
+       (sQ.volume(), sQ.ctx && sQ.autoUnlock) && (null === (QQ = sQ._unlockAudio) || void 0 === QQ || QQ.call(sQ))
+     }
+     BQ && (sQ._autoSuspend = () => jQ > 0 ? qQ.Howler : BQ())
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/99.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/99.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52)

#### 1. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L2)

```diff
- export const ids = [99];
+ export const ids = [98, 99];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L4)

```diff
-   4988: (pp, ip, cp) => {
+   36750: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L6)

```diff
-       default: () => Fp
+       countDecodesAs: () => JQ,
+       decodedAudio: () => rQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L8-L16` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L9-L13) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L8-L16)

```diff
-     var Op = cp(62),
-       op = cp(1543),
-       Ip = cp(337),
-       Sp = cp(1244),
-       xp = cp(1626),
-       Lp = cp(1284),
-       Yp = cp(1569),
-       Dp = cp(1520),
-       Ap = cp(2749);
+     var wQ = XQ(3196),
+       qQ = XQ(5212);
+     const TQ = qQ.Howler,
+       zQ = new Map;
+     let sQ = 0;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L18-L47` → after: `L15-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L15-L19) · [Before (L18-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L18-L47)

```diff
-       retries: 2,
-       minTimeout: 2e3
-     };
-     var Wp = cp(1133),
-       yp = cp(1623),
-       Up = cp(1141),
-       wp = cp(1929),
-       vp = cp(1201),
-       tp = cp(1234),
-       Hp = cp(3581),
-       dp = cp(1361),
-       ep = cp(1480),
-       jp = cp(1538),
-       kp = cp(2690),
-       mp = cp(2700),
-       Rp = cp(4994),
- ... (14 more removed lines; see GitHub link above)
+         song: 0,
+         sheet: 0
+       },
+       PQ = new WeakMap,
+       gQ = new WeakSet;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L49-L70` → after: `L21-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L21-L30) · [Before (L49-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L49-L70)

```diff
-     function ap(pp) {
-       let {
-         icon: ip,
-         label: cp,
-         value: Op
-       } = pp;
-       return (0, bp.jsxs)("div", {
-         className: "PlayerProfileStat",
-         children: [(0, bp.jsx)(Ep.d, {
-           name: ip,
-           className: "PlayerProfileStatIcon"
-         }), (0, bp.jsxs)("div", {
-           className: "PlayerProfileStatText",
-           children: [(0, bp.jsx)("div", {
-             className: "PlayerProfileStatLabel SmallTextLight",
-             children: cp
- ... (6 more removed lines; see GitHub link above)
+     function JQ(QQ, WQ) {
+       return PQ.set(QQ, WQ), QQ
+     }
+ 
+     function rQ() {
+       return {
+         bytes: sQ,
+         songsDecoded: FQ.song,
+         sheetsDecoded: FQ.sheet
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L74-L75` → after: `L34-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L34-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L34-L175) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L74-L75)

```diff
-       let {
-         profile: ip
+       if (gQ.has(QQ)) return;
+       gQ.add(QQ);
+       const WQ = 1 === QQ.decodeAudioData.length,
+         XQ = QQ.decodeAudioData.bind(QQ);
+       QQ.decodeAudioData = (QQ, wQ, qQ) => {
+         const gQ = QQ => {
+           const WQ = TQ._howls.filter((QQ => "loaded" !== QQ._state));
+           try {
+             null === wQ || void 0 === wQ || wQ(QQ)
+           } finally {
+             const XQ = WQ.find((QQ => "loaded" === QQ._state));
+             void 0 !== XQ && "string" === typeof XQ._src && function(QQ, WQ, XQ) {
+               var wQ;
+               sQ += XQ - (null !== (wQ = zQ.get(WQ)) && void 0 !== wQ ? wQ : 0), zQ.set(WQ, XQ);
+               const qQ = PQ.get(QQ);
+               void 0 !== qQ && FQ[qQ]++
+ ... (126 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L77-L108` → after: `L177-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L177-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L177-L188) · [Before (L77-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L77-L108)

```diff
-       const {
-         t: cp,
-         selectedLanguage: Op
-       } = (0, vp.H)();
-       let op = cp("homePage:profileUnknown");
-       if (ip.lastOnline) {
-         const pp = (0, vp.p)(Op.code, "homePage:profileTimeAgo");
-         op = cp("homePage:profileTimeAgo", {
-           time: (0, Ip.cb)(pp, ip.lastOnline, Date.now())
-         })
-       }
-       let Sp = cp("homePage:profileUnknown");
-       return ip.accountCreatedAt && (Sp = new Date(ip.accountCreatedAt).toLocaleDateString(void 0, {
-         year: "numeric",
-         month: "short",
-         day: "numeric"
- ... (16 more removed lines; see GitHub link above)
+       return QQ && WQ ? {
+         ctx: QQ,
+         destination: WQ,
+         holdAwake: QQ => {
+           var WQ, XQ;
+           (jQ += QQ ? 1 : -1, QQ) ? null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ): null === (XQ = sQ._autoSuspend) || void 0 === XQ || XQ.call(sQ)
+         },
+         wake: () => {
+           var WQ;
+           "running" !== QQ.state && (null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ), QQ.resume().catch((() => {})))
+         }
+       } : null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L112-L343` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L192-L193) · [Before (L112-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L112-L343)

```diff
-       const {
-         t: pp
-       } = (0, vp.H)(), ip = (0, jp.useNavigatePreserveSearch)(), cp = (0, Wp.h)(), {
-         playerName: Rp,
-         playerUrlName: Mp
-       } = (0, op.A)(), Jp = (0, op.r)(), ap = (0, Sp.f)(Jp.pathname), Fp = ap && ("urlId" in ap ? `urlId:${ap.urlId}` : `name:${ap.lowerCaseName}`), gp = (0, Op.useRef)(Fp);
-       gp.current = Fp;
-       const {
-         userContext: Gp,
-         isUserContextUpdating: rp
-       } = (0, Up.b)(), Zp = (0, Op.useRef)(null), zp = (0, Op.useRef)(null), sp = (0, Op.useRef)(null), Kp = (0, Op.useRef)(!1), Vp = (0, Op.useRef)((0, Ip.Ub)(hp)), [ii, ci] = (0, Op.useState)((() => {
-         const pp = ap && mp.c.peek(Gp, ap);
-         return pp ? {
-           status: "loaded",
-           profile: pp,
-           playerKey: Fp
- ... (216 more removed lines; see GitHub link above)
+       var QQ;
+       (sQ.volume(), sQ.ctx && sQ.autoUnlock) && (null === (QQ = sQ._unlockAudio) || void 0 === QQ || QQ.call(sQ))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L345-L543` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/99.js#L195) · [Before (L345-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/99.js#L345-L543)

```diff
-   },
-   5e3: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => wp
-     });
-     var Op = cp(1049),
-       op = cp.n(Op),
-       Ip = cp(4735),
-       Sp = cp(1201),
-       xp = cp(1060),
-       Lp = cp(1480),
-       Yp = cp(1520),
-       Dp = cp(1372),
-       Ap = cp(2568),
-       Pp = cp(1112);
-     const Wp = {
- ... (183 more removed lines; see GitHub link above)
+     BQ && (sQ._autoSuspend = () => jQ > 0 ? qQ.Howler : BQ())
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (203 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   41339: (pp, ip, cp) => {
+   41335: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var Op = cp(41345),
-       op = cp(38232);
-     class Ip extends((0, Op.d)(op.d)) {}(0, Op.g)(op.d, Ip);
-     var Sp = cp(37411);
-     class xp extends((0, Op.d)(Sp.h)) {}(0, Op.g)(Sp.h, xp);
-     var Lp = cp(38071);
-     class Yp extends((0, Op.d)(Lp.i)) {}(0, Op.g)(Lp.i, Yp);
-     var Dp = cp(37655),
-       Ap = cp(40459),
-       Pp = cp(37646);
-     class Wp extends((0, Op.d)(Pp.i)) {
+     var wQ = XQ(41344),
+       qQ = XQ(38293);
+     class TQ extends((0, wQ.i)(qQ.d)) {}(0, wQ.l)(qQ.d, TQ);
+     var zQ = XQ(37456);
+     class sQ extends((0, wQ.i)(zQ.e)) {}(0, wQ.l)(zQ.e, sQ);
+     var FQ = XQ(38129);
+     class PQ extends((0, wQ.i)(FQ.d)) {}(0, wQ.l)(FQ.d, PQ);
+     var gQ = XQ(37698),
+       JQ = XQ(40530),
+       rQ = XQ(37696);
+     class IQ extends((0, wQ.i)(rQ.h)) {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L23)

```diff
-         super(pp, ip, cp), (0, Dp.g)(pp)
+         super(QQ, WQ, XQ), (0, gQ.j)(QQ)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L26)

```diff
-         (0, Dp.i)(this._material), super.dispose(pp)
+         (0, gQ.n)(this._material), super.dispose(QQ)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28-L29` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L28-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L28-L29)

```diff
-     }(0, Op.g)(Pp.i, Wp), (0, Pp.j)({
-       disableUnusedSpecularTerm: Op.c,
+     }(0, wQ.l)(rQ.h, IQ), (0, rQ.i)({
+       disableUnusedSpecularTerm: wQ.e,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var yp = cp(38916);
-     class Up extends((0, Op.d)(yp.g)) {}(0, Op.g)(yp.g, Up);
-     var wp = cp(39014),
-       vp = cp(37496),
-       tp = cp(38352),
-       Hp = cp(37454);
-     class dp extends((0, Op.d)(wp.b)) {}(0, Op.g)(wp.b, dp);
-     class ep extends((0, Op.d)(vp.d)) {}(0, Op.g)(vp.d, ep);
-     class jp extends((0, Op.d)(tp.q)) {}(0, Op.g)(tp.q, jp);
-     class kp extends((0, Op.d)(Hp.d)) {}(0, Op.g)(Hp.d, kp)
+     var jQ = XQ(38966);
+     class BQ extends((0, wQ.i)(jQ.e)) {}(0, wQ.l)(jQ.e, BQ);
+     var yQ = XQ(39081),
+       VQ = XQ(37555),
+       DQ = XQ(38427),
+       pQ = XQ(37500);
+     class GQ extends((0, wQ.i)(yQ.c)) {}(0, wQ.l)(yQ.c, GQ);
+     class UQ extends((0, wQ.i)(VQ.d)) {}(0, wQ.l)(VQ.d, UQ);
+     class bQ extends((0, wQ.i)(DQ.m)) {}(0, wQ.l)(DQ.m, bQ);
+     class vQ extends((0, wQ.i)(pQ.c)) {}(0, wQ.l)(pQ.c, vQ)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   41801: (pp, ip, cp) => {
+   41797: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L48-L60` → after: `L48-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L48-L60) · [Before (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L48-L60)

```diff
-     var Op = cp(41806),
-       op = (cp(40182), cp(41333), cp(40663), cp(41814)),
-       Ip = cp(37479),
-       Sp = cp(37313),
-       xp = cp(41826),
-       Lp = cp(41834),
-       Yp = cp(37448),
-       Dp = (cp(41345), cp(41851)),
-       Ap = cp(41843),
-       Pp = cp(38949),
-       Wp = cp(41860),
-       yp = cp(40062),
-       Up = cp(38938);
+     var wQ = XQ(41804),
+       qQ = (XQ(40245), XQ(41326), XQ(40732), XQ(41815)),
+       TQ = XQ(37539),
+       zQ = XQ(37367),
+       sQ = XQ(41827),
+       FQ = XQ(41830),
+       PQ = XQ(37492),
+       gQ = (XQ(41344), XQ(41834)),
+       JQ = XQ(41832),
+       rQ = XQ(38991),
+       IQ = XQ(41842),
+       jQ = XQ(40126),
+       BQ = XQ(38979);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L62` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L62-L63) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L62)

```diff
-       vp = Up.o,
+       VQ = "gpuParticlesSummed",
+       DQ = BQ.u,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L64-L66` → after: `L65-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L65-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L65-L74) · [Before (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L64-L66)

```diff
-       Hp = pp => `gpuParticleSystem[${pp>>2}].${"xyzw"[3&pp]}`,
-       dp = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Up.d}\n#define COLOR_POSITIONS ${tp(vp.colorPositions)}\n#define COLOR1 ${tp(vp.color1)}\n#define COLOR2 ${tp(vp.color2)}\n#define VELOCITY ${tp(vp.tw)}\n#define REMAP $ … [truncated]
-     yp.b.ShadersStore[`${wp}VertexShader`] = dp, yp.b.ShadersStore[`${wp}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
+       GQ = (QQ, WQ, XQ, wQ) => Array.from({
+         length: WQ
+       }, ((qQ, TQ) => `(${((QQ,WQ,XQ)=>0===WQ?`${QQ} < 1`:WQ===XQ-1?`${QQ} >= ${WQ}`:`${QQ} == ${WQ}`)(QQ,TQ,WQ)} ? ${XQ(TQ)} : ${wQ})`)).join("\n\t\t+ "),
+       UQ = (QQ, WQ, XQ) => `vec4 ${QQ}(int i) {\n\treturn ${GQ("i",XQ,(QQ=>`gpuParticleSystem[${WQ+QQ}]`),"vec4(0.0)")};\n}\n`,
+       bQ = `\n${UQ("colorPositionsAt",pQ(DQ.colorPositions),BQ.e/4)}\n${UQ("color1At",pQ(DQ.color1),BQ.e)}\n${UQ("color2At",pQ(DQ.color2),BQ.e)}\n${UQ("velocityAt",pQ(DQ.Fy),BQ.e)}\n${UQ("remapStopAt",pQ(DQ.remap),BQ.e)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${GQ("j",4,(Q … [truncated]
+       vQ = (QQ, WQ, XQ, wQ) => QQ ? `${XQ}(${wQ})` : `gpuParticleSystem[${WQ} + ${wQ}]`,
+       dQ = QQ => `gpuParticleSystem[${QQ>>2}].${"xyzw"[3&QQ]}`,
+       HQ = QQ => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${BQ.e}\n#define COLOR_POSITIONS ${pQ(DQ.colorPositions)}\n#define COLOR1 ${pQ(DQ.color1)}\n#define COLOR2 ${pQ(DQ.color2)}\n#define VELOCITY ${pQ(DQ.Fy)}\n#define R … [truncated]
+       aQ = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuPart … [truncated]
+     jQ.b.ShadersStore[`${yQ}VertexShader`] = HQ(!1), jQ.b.ShadersStore[`${yQ}PixelShader`] = aQ, jQ.b.ShadersStore[`${VQ}VertexShader`] = HQ(!0), jQ.b.ShadersStore[`${VQ}PixelShader`] = aQ;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L69-L70` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L77-L78) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L69-L70)

```diff
-     var kp = cp(38930),
-       mp = cp(41864);
+     var iQ = XQ(38972),
+       cQ = XQ(41851);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L73` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L81) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L73)

```diff
-         super(pp, ip, cp), this.renderer = cp, this.pw = Op, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Up.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(QQ, WQ, XQ), this.renderer = XQ, this.cB = wQ, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(BQ.q), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L80-L82` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L88-L90) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L80-L82)

```diff
-             const pp = Math.floor(Ip / Up.l),
-               cp = Math.min(ip, (pp + 1) * Up.l);
-             Op.texSubImage2D(Op.TEXTURE_2D, 0, Ip % Up.l * 4, pp, 4 * (cp - Ip), 1, Op.RGBA_INTEGER, Op.UNSIGNED_INT, op, Ip * Up.e), Ip = cp
+             const QQ = Math.floor(TQ / BQ.m),
+               XQ = Math.min(WQ, (QQ + 1) * BQ.m);
+             wQ.texSubImage2D(wQ.TEXTURE_2D, 0, TQ % BQ.m * 4, QQ, 4 * (XQ - TQ), 1, wQ.RGBA_INTEGER, wQ.UNSIGNED_INT, qQ, TQ * BQ.h), TQ = XQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L86` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L94) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L86)

```diff
-         const op = Op.gy();
+         const qQ = wQ.Uj();
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L89-L90` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L97-L98) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L89-L90)

```diff
-           Sp = Math.min(Ip, Up.l);
-         this.records = op.createRawTexture(null, 4 * Sp, Math.ceil(Ip / Sp), Dp.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Dp.d.TEXTURE_NEAREST_SAMPLINGMODE, null, Dp.d.TEXTURETYPE_UNSIGNED_INTEGER)
+           zQ = Math.min(TQ, BQ.m);
+         this.records = qQ.createRawTexture(null, 4 * zQ, Math.ceil(TQ / zQ), gQ.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, gQ.b.TEXTURE_NEAREST_SAMPLINGMODE, null, gQ.b.TEXTURETYPE_UNSIGNED_INTEGER)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L93-L94` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L101-L102) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L93-L94)

```diff
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pw.getAnimationRatio() || 1;
-         const ip = this.pw.getFrameId();
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.cB.getAnimationRatio() || 1;
+         const WQ = this.cB.getFrameId();
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L108` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L116) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L108)

```diff
-         for (const cp of Up.n) this.uniforms[cp] = this.uniformBits[cp];
+         for (const XQ of BQ.t) this.uniforms[XQ] = this.uniformBits[XQ];
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L110` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L118) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L110)

```diff
-         (0, mp.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ip = this.ramp) || void 0 === ip || ip.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Ap.b.CreateRGBATexture(this.rampTexels.texels, Up.k, … [truncated]
+         (0, cQ.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (WQ = this.ramp) || void 0 === WQ || WQ.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = JQ.b.CreateRGBATexture(this.rampTexels.texels, BQ.l, … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L120` → after: `L128-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L128-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L128-L131) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L120)

```diff
-         this.pw = pp, this.reportFailure = ip, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Wp.c)(), this.engine = pp.gy(), this. … [truncated]
+         this.cB = QQ, this.reportFailure = WQ, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = yQ, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32A … [truncated]
+         const XQ = this.linkPair(yQ),
+           wQ = null !== XQ && XQ !== RQ ? this.linkPair(VQ) : XQ;
+         null === wQ && null !== XQ ? (console.warn(`GPU particles link their fallback here: ${XQ}`), this.reportFailure(XQ, !0)) : null !== wQ && this.fail(wQ === RQ ? RQ : null !== XQ && void 0 !== XQ ? XQ : wQ)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L123-L126` → after: `L134-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L134-L137) · [Before (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L123-L126)

```diff
-         const cp = Up.l * this.engine.getCaps().maxTextureSize;
-         ip > cp && this.warnOnce(`capacity:${pp}`, `particle system ${pp} holds ${cp} particles, not ${ip}: its records texture's limit`);
-         const Op = new Rp(pp, Math.min(ip, cp), this, this.pw);
-         return this.pw.addParticleSystem(Op), Op
+         const XQ = BQ.m * this.engine.getCaps().maxTextureSize;
+         WQ > XQ && this.warnOnce(`capacity:${QQ}`, `particle system ${QQ} holds ${XQ} particles, not ${WQ}: its records texture's limit`);
+         const wQ = new AQ(QQ, Math.min(WQ, XQ), this, this.cB);
+         return this.cB.addParticleSystem(wQ), wQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L131` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L142) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L131)

```diff
-         for (const Op of (0, Pp.o)(pp.blendMode))
+         for (const wQ of (0, rQ.l)(QQ.blendMode))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L136` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L147) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L136)

```diff
-         this.pw._toBeDisposed.push(pp)
+         this.cB._toBeDisposed.push(QQ)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L139` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L150) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L139)

```diff
-         this.pw.removeParticleSystem(pp), pp.releaseGl()
+         this.cB.removeParticleSystem(QQ), QQ.releaseGl()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L146` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L157) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L146)

```diff
-           pw: Op,
+           cB: wQ,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L152` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L163) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L152)

```diff
-           xp = null !== (ip = pp.ramp) && void 0 !== ip ? ip : this.whiteRamp;
+           sQ = null !== (WQ = QQ.ramp) && void 0 !== WQ ? WQ : this.whiteRamp;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L154` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L165) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L154)

```diff
-         for (const Lp of (0, Pp.o)(pp.blendMode)) {
+         for (const FQ of (0, rQ.l)(QQ.blendMode)) {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L156` → after: `L167-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L167-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L167-L176) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L156)

```diff
-           cp.enableEffect(ip), ip.setTexture("gpuParticleTexture", pp.texture.mirror), ip.setTexture("gpuParticleRampTexture", xp), ip._bindTexture("gpuParticleRecords", pp.records), ip.setMatrix("gpuParticleView", Op.getViewMatrix()), ip.setMatrix("gpuParticleProjection", Op.get … [truncated]
+           XQ.enableEffect(WQ), WQ.setTexture("gpuParticleTexture", QQ.texture.mirror), WQ.setTexture("gpuParticleRampTexture", sQ), WQ._bindTexture("gpuParticleRecords", QQ.records), WQ.setMatrix("gpuParticleView", wQ.getViewMatrix()), WQ.setMatrix("gpuParticleProjection", wQ.get … [truncated]
+         }
+         return XQ.setAlphaMode(gQ.b.ALPHA_DISABLE), zQ
+       }
+       linkPair(QQ) {
+         this.shader = QQ, this.pairFailure = null, this.linkingPair = !0;
+         try {
+           return this.effect = this.createEffect(QQ, ""), this.multiplyEffect = this.createEffect(QQ, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
+         } finally {
+           this.linkingPair = !1
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L163` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L182) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L163)

```diff
-         !this.failed && cp && (!ip || ip.isParallelCompiled && !ip.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : ip.isParallelCompiled && ip.program && (cp.g … [truncated]
+         XQ && null === this.pairFailure && (!WQ || WQ.isParallelCompiled && !WQ.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : WQ.isParallelCompiled && WQ.pro … [truncated]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L170` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L189) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L170)

```diff
-             if (ip) return `${Op} ${ip}`
+             if (WQ) return `${wQ} ${WQ}`
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L179` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L198) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L179)

```diff
-         return pp === Pp.d ? this.multiplyEffect : this.effect
+         return QQ === rQ.c ? this.multiplyEffect : this.effect
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L181` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L200) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L181)

```diff
-       createEffect(pp) {
+       createEffect(QQ, WQ) {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L184` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L203) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L184)

```diff
-           this.fail(null !== (cp = this.gl()) && void 0 !== cp && cp.isContextLost() ? qp : function(pp) {
+           QQ === this.shader && this.programFailed(null !== (wQ = this.gl()) && void 0 !== wQ && wQ.isContextLost() ? RQ : function(QQ) {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L192-L193` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L214-L215) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L192-L193)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${pp}`), this.reportFailure(pp);
-           for (const pp of this.pw.Wm.slice()) pp instanceof Rp && pp.disposeOnStop && pp.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${QQ}`), this.reportFailure(QQ, !1);
+           for (const QQ of this.cB.KD.slice()) QQ instanceof AQ && QQ.disposeOnStop && QQ.dispose()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L197-L198` → after: `L219-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L219-L220) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L197-L198)

```diff
-     var Cp = cp(40024);
-     class Ep extends Cp.d {
+     var CQ = XQ(40089);
+     class uQ extends CQ.b {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211-L227` → after: `L233-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L233-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L233-L249) · [Before (L211-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L211-L227)

```diff
-     var Qp = cp(40405),
-       Jp = cp(41325),
-       Bp = cp(40159),
-       Np = cp(40365),
-       Tp = cp(40358),
-       fp = cp(40289),
-       bp = cp(41391),
-       hp = cp(37815),
-       ap = cp(41869),
-       np = cp(41871),
-       Fp = cp(41879),
-       gp = cp(40314),
-       Gp = cp(2949),
-       rp = cp(37713),
-       Zp = cp(40504),
-       zp = cp(37784),
- ... (1 more removed lines; see GitHub link above)
+     var fQ = XQ(40479),
+       SQ = XQ(41320),
+       tQ = XQ(40221),
+       oQ = XQ(40428),
+       eQ = XQ(40422),
+       nQ = XQ(40349),
+       xQ = XQ(41386),
+       YQ = XQ(37874),
+       NQ = XQ(41855),
+       ZQ = XQ(41858),
+       OQ = XQ(41865),
+       KQ = XQ(40371),
+       mQ = XQ(3091),
+       MQ = XQ(37772),
+       QW = XQ(40564),
+       WW = XQ(37837),
+ ... (1 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L231` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L253) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L231)

```diff
-       const ip = pp.Am;
+       const WQ = QQ.ZD;
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L235` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L257) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L235)

```diff
-           op = Op.Ky();
+           qQ = wQ.lj();
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L242` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L264) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L242)

```diff
-         this.HP = pp, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ip.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.KJ = QQ, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, WQ.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L252-L255` → after: `L274-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L274-L277) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L252-L255)

```diff
-           HP: Op
-         } = this, op = null === (ip = Op.Zk) || void 0 === ip ? void 0 : ip.visibility;
-         if (!op || !pp || Op.WU.yU) return !1;
-         if (!(Op.WP.FOp[0] >= zp.i)) return !1;
+           KJ: wQ
+         } = this, qQ = null === (WQ = wQ.RD) || void 0 === WQ ? void 0 : WQ.visibility;
+         if (!qQ || !QQ || wQ.nj.xj) return !1;
+         if (!(wQ.nJ.CwQ[0] >= WW.f)) return !1;
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L258` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L280) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L258)

```diff
-         const Sp = Op.BP,
+         const zQ = wQ.jr,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L261` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L283) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L261)

```diff
-         return Lp[0] = xp.x + Sp[0], Lp[1] = xp.y + Sp[1], Lp[2] = xp.z + Sp[2], !!op.eyeClear(Lp[0], Lp[1], Lp[2], pp.minZ, Ip, Op.WP) && (this.vis = op, this.passable.clear(), this.count = 0, !0)
+         return FQ[0] = sQ.x + zQ[0], FQ[1] = sQ.y + zQ[1], FQ[2] = sQ.z + zQ[2], !!qQ.eyeClear(FQ[0], FQ[1], FQ[2], QQ.minZ, TQ, wQ.nJ) && (this.vis = qQ, this.passable.clear(), this.count = 0, !0)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L282-L283` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L304-L305) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L282-L283)

```diff
-           WP: xp
-         } = this.HP, [Lp, Yp] = xp.FOp, Dp = null !== cp && cp.update(Op[0], Op[1], Op[2], xp.epp, Lp, Yp, this.passable);
+           nJ: sQ
+         } = this.KJ, [FQ, PQ] = sQ.CwQ, gQ = null !== XQ && XQ.update(wQ[0], wQ[1], wQ[2], sQ.iQQ, FQ, PQ, this.passable);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L294` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L316) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L294)

```diff
-           gp.g.prototype.push.call(pp, Op)
+           KQ.e.prototype.push.call(QQ, wQ)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L299-L304` → after: `L321-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L321-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L321-L326) · [Before (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L299-L304)

```diff
-     var ii = cp(37769),
-       ci = cp(37723),
-       Oi = cp(40476),
-       oi = cp(41884),
-       Ii = cp(40481),
-       Si = cp(40415);
+     var TW = XQ(37820),
+       zW = XQ(37783),
+       sW = XQ(40551),
+       FW = XQ(41870),
+       PW = XQ(40555),
+       gW = XQ(40491);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L318-L319` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L340-L341) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L318-L319)

```diff
-       if (!ip || !0 !== ip[rp.o]) return;
-       const cp = ip[rp.s],
+       if (!WQ || !0 !== WQ[MQ.m]) return;
+       const XQ = WQ[MQ.u],
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L327` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L349) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L327)

```diff
-       const ip = pp.Am;
+       const WQ = QQ.ZD;
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L329` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L351) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L329)

```diff
-         const pp = ip[cp].Ky();
+         const QQ = WQ[XQ].lj();
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L333` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L355) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L333)

```diff
-         const pp = ip[cp].Ky();
+         const QQ = WQ[XQ].lj();
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L343` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L365) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L343)

```diff
-       if ("function" !== typeof cp) throw new Error(`terrainDrawState: Babylon has no ${ip} to hook`);
+       if ("function" !== typeof XQ) throw new Error(`terrainDrawState: Babylon has no ${WQ} to hook`);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L348` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L370) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L348)

```diff
-       const Ip = cp.WP.epp,
+       const TQ = XQ.nJ.iQQ,
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L352` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L374) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L352)

```diff
-         Yp = new ii.d(Ip, pp.gy());
+         PQ = new TW.c(TQ, QQ.Uj());
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L354` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L376) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L354)

```diff
-         if (yi.has(pp) || (yi.add(pp), pp.onContextLostObservable.add(Di), pp.Fy.add(Di)), Wi) return;
+         if (DW.has(QQ) || (DW.add(QQ), QQ.onContextLostObservable.add(jW), QQ.Gj.add(jW)), VW) return;
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L356` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L378) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L356)

```diff
-         const ip = oi.e.prototype,
+         const WQ = FW.c.prototype,
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L363-L364` → after: `L385-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L385-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L385-L386) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L363-L364)

```diff
-         const Op = Ui(Si.b.prototype, "_syncParentEnabledState");
-         Object.assign(Si.b.prototype, {
+         const wQ = pW(gW.e.prototype, "_syncParentEnabledState");
+         Object.assign(gW.e.prototype, {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L369-L370` → after: `L391-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L391-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L391-L392) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L369-L370)

```diff
-         const op = Ui(Ii.d.prototype, "resetDrawCache");
-         Ii.d.prototype.resetDrawCache = function(pp, ip) {
+         const qQ = pW(PW.b.prototype, "resetDrawCache");
+         PW.b.prototype.resetDrawCache = function(QQ, WQ) {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L384` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L406) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L384)

```diff
-       }(pp.gy());
+       }(QQ.Uj());
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L399-L400` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L421-L422) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L399-L400)

```diff
-             cp = pp.KOp[0],
-             Op = pp.KOp[1];
+             XQ = QQ.owQ[0],
+             wQ = QQ.owQ[1];
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L416` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L438) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L416)

```diff
-             Ip = Lp.mW(pp.activeCamera),
+             TQ = FQ.gI(QQ.activeCamera),
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L419` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L441) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L419)

```diff
-             const ip = pp.gy().currentRenderPassId;
+             const WQ = QQ.Uj().currentRenderPassId;
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L436` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L458) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L436)

```diff
-             if (!Zp.d.IsInFrustum(ip.KOp, Op)) continue;
+             if (!QW.b.IsInFrustum(WQ.owQ, wQ)) continue;
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L446` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L468) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L446)

```diff
-                 if (Sp && Op[ip] === Yp) Wp && 1 === op[ip] && Kp(Pp) && 0, Lp.see(Pp, 1 === op[ip] ? Ap : -1);
+                 if (zQ && wQ[WQ] === PQ) IQ && 1 === qQ[WQ] && wW(rQ) && 0, FQ.see(rQ, 1 === qQ[WQ] ? JQ : -1);
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L449` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L471) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L449)

```diff
-                   const pp = !0 === Pp.metadata[ci.n];
+                   const QQ = !0 === rQ.metadata[zW.k];
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L453` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L475) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L453)

```diff
-                 } else Ip ? dp(Pp, Ap, !0 === Pp.metadata[ci.n]) : gp.g.prototype.push.call(cp, Pp)
+                 } else TQ ? GQ(rQ, JQ, !0 === rQ.metadata[zW.k]) : KQ.e.prototype.push.call(XQ, rQ)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L460` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L482) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L460)

```diff
-         const Ip = ip.sOp;
+         const TQ = WQ.twQ;
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L463` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L485) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L463)

```diff
-           ip.isEnabled() && gp.g.prototype.push.call(Op, ip)
+           WQ.isEnabled() && KQ.e.prototype.push.call(wQ, WQ)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L467-L468` → after: `L489-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L489-L490) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L467-L468)

```diff
-         iop: () => Lp.culled,
-         TOp: (pp, ip) => {
+         ewQ: () => FQ.culled,
+         hwQ: (QQ, WQ) => {
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L472` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L494) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L472)

```diff
-             Yp = `${op}|${xp}|${Lp}`;
+             PQ = `${qQ}|${sQ}|${FQ}`;
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L476-L478` → after: `L498-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L498-L500) · [Before (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L476-L478)

```diff
-             cp.uip([op * Ip - 1, xp * Ip - 1, Lp * Ip - 1], null, pp), Dp = Object.assign(Op(pp, Ip + 2), {
-               Oop: Yp,
-               oop: 0,
+             XQ.dWQ([qQ * TQ - 1, sQ * TQ - 1, FQ * TQ - 1], null, QQ), gQ = Object.assign(wQ(QQ, TQ + 2), {
+               nwQ: PQ,
+               xwQ: 0,
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L482` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L504) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L482)

```diff
-             }), Hp(Dp), Wp[Dp._noaSlot] = (0, Gp.j)(op, xp, Lp), yp[3 * Dp._noaSlot] = op, yp[3 * Dp._noaSlot + 1] = xp, yp[3 * Dp._noaSlot + 2] = Lp, Sp.set(Yp, Dp)
+             }), pQ(gQ), IQ[gQ._noaSlot] = (0, mQ.i)(qQ, sQ, FQ), jQ[3 * gQ._noaSlot] = qQ, jQ[3 * gQ._noaSlot + 1] = sQ, jQ[3 * gQ._noaSlot + 2] = FQ, zQ.set(PQ, gQ)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L484` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L506) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L484)

```diff
-           Dp.oop++, pp.metadata[rp.w] = Dp
+           gQ.xwQ++, QQ.metadata[MQ.x] = gQ
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L486-L488` → after: `L508-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L508-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L508-L510) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L486-L488)

```diff
-         xJ: pp => {
-           const ip = pp.metadata[rp.w];
-           ip && (ip.oop--, ip.oop <= 0 && (Sp.delete(ip.Oop), wp.push(ip._noaSlot)), pp.metadata[rp.w] = null)
+         ZE: QQ => {
+           const WQ = QQ.metadata[MQ.x];
+           WQ && (WQ.xwQ--, WQ.xwQ <= 0 && (zQ.delete(WQ.nwQ), yQ.push(WQ._noaSlot)), QQ.metadata[MQ.x] = null)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L490` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L512) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L490)

```diff
-         zOp: (pp, ip) => {
+         SwQ: (QQ, WQ) => {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L492` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L514) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L492)

```diff
-             Op = ip.metadata[rp.w];
+             wQ = WQ.metadata[MQ.x];
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L506` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L528) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L506)

```diff
-         K9: pp => {
+         WQQ: QQ => {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L508-L509` → after: `L530-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L530-L531) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L508-L509)

```diff
-             ip.nOp.Iop(pp), ip.aOp.Iop(pp);
-             for (const cp of ip.KOp) cp.Iop(pp);
+             WQ.EwQ.YwQ(QQ), WQ.RwQ.YwQ(QQ);
+             for (const XQ of WQ.owQ) XQ.YwQ(QQ);
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L531` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L553) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L531)

```diff
-         if (!(pp * (pp >= 0 ? Sp : Op) + ip * (ip >= 0 ? xp : op) + Dp * (Dp >= 0 ? Lp : Ip) + cp[Yp + 3] >= 0)) return !1
+         if (!(QQ * (QQ >= 0 ? zQ : wQ) + WQ * (WQ >= 0 ? sQ : qQ) + gQ * (gQ >= 0 ? FQ : TQ) + XQ[PQ + 3] >= 0)) return !1
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L535` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L557) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L535)

```diff
-     var Hi = cp(37996);
+     var vW = XQ(38049);
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L538-L539` → after: `L560-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L560-L561) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L538-L539)

```diff
-         var cp = pp.pw;
-         cp.uOp(new Fp.c(cp));
+         var XQ = QQ.cB;
+         XQ.rwQ(new OQ.b(XQ));
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L541` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L563) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L541)

```diff
-         cp.xop = Op, Op.blocks = [];
+         XQ.ZwQ = wQ, wQ.blocks = [];
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L544-L546` → after: `L566-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L566-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L566-L568) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L544-L546)

```diff
-         this.textPlanes = xp, this.iop = () => op.iop(), this.K9 = pp => {
-           Dp(Op, pp), op.K9(pp)
-         }, this.TOp = (ip, cp, Sp) => {
+         this.textPlanes = sQ, this.ewQ = () => qQ.ewQ(), this.WQQ = QQ => {
+           gQ(wQ, QQ), qQ.WQQ(QQ)
+         }, this.hwQ = (WQ, XQ, zQ) => {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L548` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L570) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L548)

```diff
-           if (!ip.metadata[rp.s] && !ip.metadata[rp.l]) {
+           if (!WQ.metadata[MQ.u] && !WQ.metadata[MQ.l]) {
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L550` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L572) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L550)

```diff
-               var Lp = Op.sOp;
+               var FQ = wQ.twQ;
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L553-L554` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L575-L576) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L553-L554)

```diff
-                 var Dp = ip.bJ().Yop;
-                 ip.metadata[rp.C] = Dp.center.length() + Dp.radius, ip.Gy = !0
+                 var gQ = WQ.uC().mwQ;
+                 WQ.metadata[MQ.F] = gQ.center.length() + gQ.radius, WQ.bj = !0
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L556` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L578) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L556)

```diff
-               return Lp.push(ip), ip.metadata[rp.h] = Lp, void(ip.metadata[rp.l] = !0)
+               return FQ.push(WQ), WQ.metadata[MQ.g] = FQ, void(WQ.metadata[MQ.l] = !0)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L566` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L588) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L566)

```diff
-               pp.HP.uip(vp, null, tp), wp = Ap(tp, Yp), Op.blocks.push(wp), Ip[Up] = wp, wp.Oop = Up
+               QQ.KJ.dWQ(VQ, null, DQ), yQ = JQ(DQ, PQ), wQ.blocks.push(yQ), TQ[BQ] = yQ, yQ.nwQ = BQ
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L568` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L590) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L568)

```diff
-             op.TOp(ip, Sp), op.zOp(wp, ip), wp.oop = (wp.oop || 0) + 1, ip.metadata[rp.s] = wp, ip.metadata[rp.o] = !0, ip.Gy = !0
+             qQ.hwQ(WQ, zQ), qQ.SwQ(yQ, WQ), yQ.xwQ = (yQ.xwQ || 0) + 1, WQ.metadata[MQ.u] = yQ, WQ.metadata[MQ.m] = !0, WQ.bj = !0
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L570` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L592) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L570)

```diff
-         }, this.xJ = pp => {
+         }, this.ZE = QQ => {
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L572-L574` → after: `L594-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L594-L596) · [Before (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L572-L574)

```diff
-             pp.metadata[rp.l] && ((0, Gp.l)(pp.metadata[rp.h], pp), pp.metadata[rp.l] = !1), pp.metadata[rp.h] === xp && (pp.Gy = !1), pp.metadata[rp.h] = void 0, pp.metadata[rp.C] = void 0;
-             var ip = pp.metadata[rp.s];
-             ip && ip.entries && (pp.metadata[rp.o] && op.removeEntry(ip, pp), ip.oop--, ip.oop <= 0 && (delete Ip[ip.Oop], (0, Gp.l)(Op.blocks, ip))), op.xJ(pp), pp.metadata[rp.s] = null, pp.metadata[rp.o] = !1
+             QQ.metadata[MQ.l] && ((0, mQ.o)(QQ.metadata[MQ.g], QQ), QQ.metadata[MQ.l] = !1), QQ.metadata[MQ.g] === sQ && (QQ.bj = !1), QQ.metadata[MQ.g] = void 0, QQ.metadata[MQ.F] = void 0;
+             var WQ = QQ.metadata[MQ.u];
+             WQ && WQ.entries && (QQ.metadata[MQ.m] && qQ.removeEntry(WQ, QQ), WQ.xwQ--, WQ.xwQ <= 0 && (delete TQ[WQ.nwQ], (0, mQ.o)(wQ.blocks, WQ))), qQ.ZE(QQ), QQ.metadata[MQ.u] = null, QQ.metadata[MQ.m] = !1
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L576` → after: `L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L598) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L576)

```diff
-         }, this.h_ = function(pp) {
+         }, this.o_ = function(QQ) {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L578-L581` → after: `L600-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L600-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L600-L603) · [Before (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L578-L581)

```diff
-           if (pp.metadata[rp.s]) {
-             if (pp.metadata[rp.o] === ip) return;
-             var cp = pp.metadata[rp.s];
-             cp && cp.entries && (ip ? op.zOp(cp, pp) : op.removeEntry(cp, pp)), pp.metadata[rp.o] = ip
+           if (QQ.metadata[MQ.u]) {
+             if (QQ.metadata[MQ.m] === WQ) return;
+             var XQ = QQ.metadata[MQ.u];
+             XQ && XQ.entries && (WQ ? qQ.SwQ(XQ, QQ) : qQ.removeEntry(XQ, QQ)), QQ.metadata[MQ.m] = WQ
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L584-L585` → after: `L606-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L606-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L606-L607) · [Before (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L584-L585)

```diff
-             var Ip = pp.metadata[rp.h] || Op.sOp;
-             ip ? Ip.push(pp) : (0, Gp.l)(Ip, pp), pp.metadata[rp.l] = ip
+             var TQ = QQ.metadata[MQ.g] || wQ.twQ;
+             WQ ? TQ.push(QQ) : (0, mQ.o)(TQ, QQ), QQ.metadata[MQ.l] = WQ
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L589` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L611) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L589)

```diff
-           Yp = ip * pp.HP.WP.epp,
+           PQ = WQ * QQ.KJ.nJ.iQQ,
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L592` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L614) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L592)

```diff
-               pp.nOp.Iop(ip), pp.aOp.Iop(ip), pp.KOp.forEach((pp => pp.Iop(ip))), pp.blocks && Dp(pp, ip)
+               QQ.EwQ.YwQ(WQ), QQ.RwQ.YwQ(WQ), QQ.owQ.forEach((QQ => QQ.YwQ(WQ))), QQ.blocks && gQ(QQ, WQ)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L596-L597` → after: `L618-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L618-L619) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L596-L597)

```diff
-             var cp = new Sp.Zy(pp[0], pp[1], pp[2]),
-               Op = new Sp.Zy(pp[0] + ip, pp[1] + ip, pp[2] + ip);
+             var XQ = new zQ.vj(QQ[0], QQ[1], QQ[2]),
+               wQ = new zQ.vj(QQ[0] + WQ, QQ[1] + WQ, QQ[2] + WQ);
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L600` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L622) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L600)

```diff
-         op = wi(cp, Op, pp.HP, Ap, ((pp, ip) => {
+         qQ = GW(XQ, wQ, QQ.KJ, JQ, ((QQ, WQ) => {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L603` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L625) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L603)

```diff
-             Op.isEnabled(!1) && ((0, Hi.d)(Op, ip) && gp.g.prototype.push.call(pp, Op))
+             wQ.isEnabled(!1) && ((0, vW.e)(wQ, WQ) && KQ.e.prototype.push.call(QQ, wQ))
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L613` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L635) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L613)

```diff
-         tV: Op,
+         Km: wQ,
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L617-L618` → after: `L639-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L639-L640) · [Before (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L617-L618)

```diff
-       } = pp.model.wV, xp = pp.vop;
-       xp.position.i5(ip[0], ip[1], ip[2]), xp.rotation.i5(cp[0], cp[1], cp[2]);
+       } = QQ.model.Zm, sQ = QQ.zqQ;
+       sQ.position.XQQ(WQ[0], WQ[1], WQ[2]), sQ.rotation.XQQ(XQ[0], XQ[1], XQ[2]);
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L620` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L642) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L620)

```diff
-       Lp.position.i5(Op[0], Op[1], Op[2]), Lp.fov = op, Lp.minZ = Ip, Lp.maxZ = Sp
+       FQ.position.XQQ(wQ[0], wQ[1], wQ[2]), FQ.fov = qQ, FQ.minZ = TQ, FQ.maxZ = zQ
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L624` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L646) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L624)

```diff
-       const ip = pp.gy(),
+       const WQ = QQ.Uj(),
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L627` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L649) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L627)

```diff
-       if (!Op || cp.eU < 2 || ip.lOp || Op.getParameter(Op.DEPTH_BITS) < 24) return !1;
+       if (!wQ || XQ.Mj < 2 || WQ.vwQ || wQ.getParameter(wQ.DEPTH_BITS) < 24) return !1;
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L631` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L653) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L631)

```diff
-         xp = Np.b.prototype.render;
+         sQ = oQ.e.prototype.render;
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L640` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L662) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L640)

```diff
-         pp ? xp.call(this, pp, cp, op, Sp, Lp, Yp, Ap, Pp, Wp) : (ip.setAlphaMode(Dp.d.ALPHA_DISABLE), xp.call(this, null, !1, !1, Sp, Lp, Yp, Ap, !1), Ip._empty || (Op.depthRange(1, 1), xp.call(Ip, null, cp, op, Sp, Lp, Yp, Ap, Pp, Wp), Op.depthRange(0, 1)), xp.call(this, null,  … [truncated]
+         QQ ? sQ.call(this, QQ, XQ, qQ, zQ, FQ, PQ, JQ, rQ, IQ) : (WQ.setAlphaMode(gQ.b.ALPHA_DISABLE), sQ.call(this, null, !1, !1, zQ, FQ, PQ, JQ, !1), TQ._empty || (wQ.depthRange(1, 1), sQ.call(TQ, null, XQ, qQ, zQ, FQ, PQ, JQ, rQ, IQ), wQ.depthRange(0, 1)), sQ.call(this, null,  … [truncated]
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L645-L647` → after: `L667-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L667-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L667-L669) · [Before (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L645-L647)

```diff
-       return [ip, hp.f].map(((ip, cp) => {
-         const Op = new op.d("light", Sp.Zy.FromArray(ip), pp);
-         return Op.diffuse = Ip.Color3.FromArray([1, 1, 1]), Op.specular = Ip.Color3.FromArray([1, 1, 1]), Op.intensity = hp.b[cp], Op
+       return [WQ, YQ.g].map(((WQ, XQ) => {
+         const wQ = new qQ.e("light", zQ.vj.FromArray(WQ), QQ);
+         return wQ.diffuse = TQ.Color3.FromArray([1, 1, 1]), wQ.specular = TQ.Color3.FromArray([1, 1, 1]), wQ.intensity = YQ.d[XQ], wQ
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L650` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L672) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L650)

```diff
-     class ki extends Lp.e {
+     class hW extends FQ.c {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L659` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L681) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L659)

```diff
-         this.heldTexture = pp, this.particleTexture = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.mirror) && void 0 !== ip ? ip : null
+         this.heldTexture = QQ, this.particleTexture = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.mirror) && void 0 !== WQ ? WQ : null
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L668` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L690) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L668)

```diff
-         pp && (this.particleTexture = null, (0, Yp.C)(this.heldTexture), this.heldTexture = null), super.dispose(pp, ip, cp)
+         QQ && (this.particleTexture = null, (0, PQ.I)(this.heldTexture), this.heldTexture = null), super.dispose(QQ, WQ, XQ)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L671` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L693) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L671)

```diff
-     const mi = Op.c.Zero();
+     const iW = wQ.e.Zero();
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L673-L674` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L695-L696) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L673-L674)

```diff
-       Zcp: function(pp, ip) {
-         return new Ep(pp, ip.Fcp, {
+       fXQ: function(QQ, WQ) {
+         return new uQ(QQ, WQ.CXQ, {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L681` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L703) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L681)

```diff
-       jop: function(pp, ip) {
+       gqQ: function(QQ, WQ) {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L684-L687` → after: `L706-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L706-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L706-L709) · [Before (L684-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L684-L687)

```diff
-           pp.pw = Op, Op.detachControl(), Op.autoClear = !1, Tp.d.MIN_RENDERINGGROUPS = -1;
-           for (let Ip = Tp.d.MIN_RENDERINGGROUPS; Ip <= 1; Ip++) Op.setRenderingOrder(Ip, Np.b.PainterSortCompare, Np.b.PainterSortCompare, Np.b.PainterSortCompare);
-           Op.setRenderingAutoClearDepthStencil(0, !1), Bp.b.Enabled = !1, pp.yop = new di(pp, Math.round(ip.Uop)), pp.vop = new Jp.b("camHolder", Op), pp.camera = new Qp.b("camera", new Sp.Zy(0, 0, 0), Op), pp.camera.parent = pp.vop, ei(pp), (0, hp.i)(pp, ((pp, ip, cp) => (0, bp. … [truncated]
-           const op = cp(Op, ip.uop);
+           QQ.cB = wQ, wQ.detachControl(), wQ.autoClear = !1, eQ.e.MIN_RENDERINGGROUPS = -1;
+           for (let TQ = eQ.e.MIN_RENDERINGGROUPS; TQ <= 1; TQ++) wQ.setRenderingOrder(TQ, oQ.e.PainterSortCompare, oQ.e.PainterSortCompare, oQ.e.PainterSortCompare);
+           wQ.setRenderingAutoClearDepthStencil(0, !1), tQ.d.Enabled = !1, QQ.wqQ = new dW(QQ, Math.round(WQ.qqQ)), QQ.zqQ = new SQ.b("camHolder", wQ), QQ.camera = new fQ.c("camera", new zQ.vj(0, 0, 0), wQ), QQ.camera.parent = QQ.zqQ, HW(QQ), (0, YQ.k)(QQ, ((QQ, WQ, XQ) => (0, xQ. … [truncated]
+           const qQ = XQ(wQ, WQ.PqQ);
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L689` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L711) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L689)

```diff
-             op.some((ip => ip === pp)) || console.error(`Light "${pp.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
+             qQ.some((WQ => WQ === QQ)) || console.error(`Light "${QQ.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L691` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L713) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L691)

```diff
-         }(pp, ip, ji), ui(pp.pw)
+         }(QQ, WQ, lW), aW(QQ.cB)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L693` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L715) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L693)

```diff
-       wop: ei,
+       TqQ: HW,
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L695` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L717) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L695)

```diff
-         const op = pp.pw;
+         const qQ = QQ.cB;
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L698-L699` → after: `L720-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L720-L721) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L698-L699)

```diff
-       Rop: function(pp, ip, cp) {
-         return pp.engine.eU >= 2 && (pp.qop || (pp.qop = new Mp(pp.pw, pp.Mop)), !pp.qop.failed) ? pp.qop.eJ(ip, cp) : new ki(ip, cp, pp.pw)
+       rqQ: function(QQ, WQ, XQ) {
+         return QQ.engine.Mj >= 2 && (QQ.IqQ || (QQ.IqQ = new EQ(QQ.cB, QQ.jqQ)), !QQ.IqQ.failed) ? QQ.IqQ.rC(WQ, XQ) : new hW(WQ, XQ, QQ.cB)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L701-L703` → after: `L723-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L723-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L723-L725) · [Before (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L701-L703)

```diff
-       Xop: function(pp, ip) {
-         pp.pw.Wm.forEach((cp => {
-           if (cp instanceof Rp) return void cp.K9(ip, pp.HP.BP);
+       yqQ: function(QQ, WQ) {
+         QQ.cB.KD.forEach((XQ => {
+           if (XQ instanceof AQ) return void XQ.WQQ(WQ, QQ.KJ.jr);
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L709` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L731) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L709)

```diff
-             Op.worldOffset.x = -pp.HP.BP[0], Op.worldOffset.y = -pp.HP.BP[1], Op.worldOffset.z = -pp.HP.BP[2]
+             wQ.worldOffset.x = -QQ.KJ.jr[0], wQ.worldOffset.y = -QQ.KJ.jr[1], wQ.worldOffset.z = -QQ.KJ.jr[2]
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L714-L715` → after: `L736-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L736-L737) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L714-L715)

```diff
-         const Op = new xp.b(ip, pp.pw, null, void 0, void 0, !1);
-         return (0, bp.e)(ip, cp, pp.pw, Op), Op
+         const wQ = new sQ.d(WQ, QQ.cB, null, void 0, void 0, !1);
+         return (0, xQ.f)(WQ, XQ, QQ.cB, wQ), wQ
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L717-L719` → after: `L739-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L739-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L739-L741) · [Before (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L717-L719)

```diff
-       iw: Ai,
-       Eop: function(pp, ip) {
-         return mi.origin.rM(ip.origin), mi.direction.rM(ip.direction), mi.length = ip.length, mi.epsilon = ip.epsilon, mi.Eop(pp, !1, void 0, !1, void 0, !0).pickedPoint
+       AB: BW,
+       BqQ: function(QQ, WQ) {
+         return iW.origin.WH(WQ.origin), iW.direction.WH(WQ.direction), iW.length = WQ.length, iW.epsilon = WQ.epsilon, iW.BqQ(QQ, !1, void 0, !1, void 0, !0).pickedPoint
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L723` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L745) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L723)

```diff
-   41345: (pp, ip, cp) => {
+   41344: (QQ, WQ, XQ) => {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L725-L727` → after: `L747-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L747-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L747-L749) · [Before (L725-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L725-L727)

```diff
-       c: () => ap,
-       d: () => tp,
-       g: () => Zp
+       e: () => tQ,
+       i: () => DQ,
+       l: () => NQ
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L729-L742` → after: `L751-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L751-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L751-L764) · [Before (L729-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L729-L742)

```diff
-     var Op = cp(40459),
-       op = cp(41347),
-       Ip = cp(41393),
-       Sp = cp(41353),
-       xp = cp(38045),
-       Lp = cp(38055),
-       Yp = cp(38061),
-       Dp = cp(38064),
-       Ap = cp(37445),
-       Pp = cp(37448),
-       Wp = cp(41359),
-       yp = cp(37433),
-       Up = cp(37436),
-       wp = cp(37421);
+     var wQ = XQ(40530),
+       qQ = XQ(41348),
+       TQ = XQ(41394),
+       zQ = XQ(41354),
+       sQ = XQ(38094),
+       FQ = XQ(38107),
+       PQ = XQ(38114),
+       gQ = XQ(38116),
+       JQ = XQ(37490),
+       rQ = XQ(37492),
+       IQ = XQ(41357),
+       jQ = XQ(37477),
+       BQ = XQ(37480),
+       yQ = XQ(37468);
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L748` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L770) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L748)

```diff
-         Py: pp
+         NI: QQ
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L753` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L775) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L753)

```diff
-       const ip = class extends Wp.c {
+       const WQ = class extends IQ.b {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L755-L756` → after: `L777-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L777-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L777-L778) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L755-L756)

```diff
-             const Op = (0, Up.$)(ip),
-               op = Op && (0, Up.s)(Op, pp.name);
+             const wQ = (0, BQ._)(WQ),
+               qQ = wQ && (0, BQ.u)(wQ, QQ.name);
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L758` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L780) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L758)

```diff
-             super(ip, pp.name, pp.priority, op ? op.defines : pp.defines(...Sp), !1), this.featureState = void 0, this.featureState = cp, this._pluginManager._addPlugin(this), this._enable(!0), (0, Up.v)(this._material, pp, this.featureState, this._pluginDefineNames)
+             super(WQ, QQ.name, QQ.priority, qQ ? qQ.defines : QQ.defines(...zQ), !1), this.featureState = void 0, this.featureState = XQ, this._pluginManager._addPlugin(this), this._enable(!0), (0, BQ.y)(this._material, QQ, this.featureState, this._pluginDefineNames)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L767-L768` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L789-L790) · [Before (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L767-L768)

```diff
-         cp = (0, yp.l)(pp);
-       for (const [Op, op] of Object.entries(yp.e)) {
+         XQ = (0, jQ.g)(QQ);
+       for (const [wQ, qQ] of Object.entries(jQ.d)) {
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L782-L784` → after: `L804-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L804-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L804-L806) · [Before (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L782-L784)

```diff
-     var dp = cp(40024),
-       ep = cp(41367),
-       jp = cp(41375);
+     var GQ = XQ(40089),
+       UQ = XQ(41364),
+       bQ = XQ(41366);
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L787` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L809) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L787)

```diff
-       return (0, jp.h)(cp, ip.urls, (() => async function(pp, ip, cp) {
+       return (0, bQ.f)(XQ, WQ.urls, (() => async function(QQ, WQ, XQ) {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L795` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L817) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L795)

```diff
-             pixels: Sp && Sp.byteLength === Op * Op * Ip * 4 ? Sp : null !== (op = mp.get(pp.getInternalTexture())) && void 0 !== op ? op : pp._readPixelsSync(),
+             pixels: zQ && zQ.byteLength === wQ * wQ * TQ * 4 ? zQ : null !== (qQ = dQ.get(QQ.getInternalTexture())) && void 0 !== qQ ? qQ : QQ._readPixelsSync(),
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L798` → after: `L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L820) · [Before (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L798)

```diff
-         })), Ip = cp.gy().getCaps().texture2DArrayMaxLayerCount, xp = (0, jp.d)(op, Op, Ip).map((pp => {
+         })), TQ = XQ.Uj().getCaps().texture2DArrayMaxLayerCount, sQ = (0, bQ.b)(qQ, wQ, TQ).map((QQ => {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L804` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L826) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L804)

```diff
-             atlas: new ep.c(ip, Op, Op, op, dp.d.TEXTUREFORMAT_RGBA, cp, !0, !1, Sp.d.NEAREST_NEAREST_MIPLINEAR),
+             atlas: new UQ.d(WQ, wQ, wQ, qQ, GQ.b.TEXTUREFORMAT_RGBA, XQ, !0, !1, zQ.e.NEAREST_NEAREST_MIPLINEAR),
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L811` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L833) · [Before (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L811)

```diff
-             const cp = ip.createRawTexture(new Uint8Array(4), 1, 1, dp.d.TEXTUREFORMAT_RGBA, !1, !1, Sp.d.NEAREST_SAMPLINGMODE);
+             const XQ = WQ.createRawTexture(new Uint8Array(4), 1, 1, GQ.b.TEXTUREFORMAT_RGBA, !1, !1, zQ.e.NEAREST_SAMPLINGMODE);
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L813` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L835) · [Before (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L813)

```diff
-           }(Op, cp.gy()), mp.set(Op, op[ip].pixels))
+           }(wQ, XQ.Uj()), dQ.set(wQ, qQ[WQ].pixels))
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L818-L819` → after: `L840-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L840-L841) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L818-L819)

```diff
-     var Rp = cp(38069);
-     class qp extends(tp(Lp.f)) {
+     var HQ = XQ(38125);
+     class aQ extends(DQ(FQ.h)) {
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L824` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L846) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L824)

```diff
-               console.error(`Failed to build the texture arrays, at atlas ${ip}`, pp)
+               console.error(`Failed to build the texture arrays, at atlas ${WQ}`, QQ)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L827` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L849) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L827)

```diff
-         })), (0, Rp.n)(ip, pp.shaderLanguage)
+         })), (0, HQ.j)(WQ, QQ.shaderLanguage)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L836` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L858) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L836)

```diff
-         if (!cp.useWebGL2) return void(0, Rp.f)(this._material, cp, ip, Op, Math.round(op / Op), Ip);
+         if (!XQ.useWebGL2) return void(0, HQ.g)(this._material, XQ, WQ, wQ, Math.round(qQ / wQ), TQ);
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L838-L839` → after: `L860-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L860-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L860-L861) · [Before (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L838-L839)

```diff
-         const Sp = await kp(this.mirrors, cp.sources, this._material.Gl());
-         (0, Rp.b)(this._material, cp, Sp, Op, Ip)
+         const zQ = await vQ(this.mirrors, XQ.sources, this._material.sE());
+         (0, HQ.d)(this._material, XQ, zQ, wQ, TQ)
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L842-L851` → after: `L864-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L864-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L864-L873) · [Before (L842-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L842-L851)

```diff
-     var Mp = cp(41378),
-       Cp = cp(40498),
-       Ep = cp(37313),
-       Xp = cp(41383),
-       lp = cp(40589),
-       Qp = cp(40481),
-       Jp = cp(41325),
-       Bp = cp(37800),
-       Np = cp(41391);
-     class Tp extends Mp.c {
+     var lQ = XQ(41373),
+       hQ = XQ(40561),
+       iQ = XQ(37367),
+       cQ = XQ(41379),
+       AQ = XQ(40661),
+       RQ = XQ(40555),
+       EQ = XQ(41320),
+       CQ = XQ(37855),
+       uQ = XQ(41386);
+     class LQ extends lQ.b {
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L861` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L883) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L861)

```diff
-       Mesh: Xp.c,
+       Mesh: cQ.b,
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L863` → after: `L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L885) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L863)

```diff
-       my: Mp.c,
+       Tj: lQ.b,
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L865-L866` → after: `L887-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L887-L888) · [Before (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L865-L866)

```diff
-       BoundingInfo: Cp.d,
-       Zy: Ep.Zy,
+       BoundingInfo: hQ.e,
+       vj: iQ.vj,
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L868-L869` → after: `L890-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L890-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L890-L891) · [Before (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L868-L869)

```diff
-       SubMesh: Qp.d,
-       VertexData: lp.d,
+       SubMesh: RQ.b,
+       VertexData: AQ.e,
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L871-L872` → after: `L893-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L893-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L893-L894) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L871-L872)

```diff
-       meshFromArrays: Np.e,
-       plainMeshFromArrays: Np.f
+       meshFromArrays: uQ.f,
+       plainMeshFromArrays: uQ.h
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L874-L876` → after: `L896-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L896-L898) · [Before (L874-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L874-L876)

```diff
-     (0, Bp.g)(fp);
-     var bp = cp(37655);
-     class hp extends(tp(Dp.g)) {
+     (0, CQ.f)(kQ);
+     var fQ = XQ(37698);
+     class SQ extends(DQ(gQ.k)) {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L882-L884` → after: `L904-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L904-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L904-L906) · [Before (L882-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L882-L884)

```diff
-           const Op = (0, Up.$)(pp);
-           Op && (Op.disableLighting = !0, (0, Up.Y)(Op))
-         }(0, bp.g)(pp)
+           const wQ = (0, BQ._)(QQ);
+           wQ && (wQ.disableLighting = !0, (0, BQ.Z)(wQ))
+         }(0, fQ.j)(QQ)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L887` → after: `L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L909) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L887)

```diff
-         (0, bp.i)(this._material), super.dispose(pp)
+         (0, fQ.n)(this._material), super.dispose(QQ)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L899` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L921) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L899)

```diff
-     }(0, Dp.d)({
+     }(0, gQ.i)({
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L902-L905` → after: `L924-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L924-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L924-L927) · [Before (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L902-L905)

```diff
-     var np = cp(37519),
-       Fp = cp(37807);
-     const gp = new RegExp(`^#define ${Yp.b}\\s*$`, "m");
-     class Gp extends(tp(Yp.h)) {
+     var oQ = XQ(37582),
+       eQ = XQ(37866);
+     const nQ = new RegExp(`^#define ${PQ.d}\\s*$`, "m");
+     class xQ extends(DQ(PQ.i)) {
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L907` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L929) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L907)

```diff
-         super(pp, ip), this.Ry = !1, ip.ditherOnlyWhileFading && (Fp.d.add(pp), this.prewarmDitherTwins(pp))
+         super(QQ, WQ), this.zj = !1, WQ.ditherOnlyWhileFading && (eQ.e.add(QQ), this.prewarmDitherTwins(QQ))
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L919` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L941) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L919)

```diff
-           Ip && !gp.test(Op.defines) && pp.Gl().onAfterRenderObservable.addOnce((() => {
+           TQ && !nQ.test(wQ.defines) && QQ.sE().onAfterRenderObservable.addOnce((() => {
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L925-L926` → after: `L947-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L947-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L947-L948) · [Before (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L925-L926)

```diff
-         if (this.Ry || pp.uR()) return !1;
-         const ip = new Qp.d(0, 0, 0, 0, 0, pp, void 0, !1, !1);
+         if (this.zj || QQ.rG()) return !1;
+         const WQ = new RQ.b(0, 0, 0, 0, 0, QQ, void 0, !1, !1);
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L936` → after: `L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L958) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L936)

```diff
-         this.Ry = !0, super.dispose(pp)
+         this.zj = !0, super.dispose(QQ)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L944` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L966) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L944)

```diff
-     Zp(xp.d, Hp), Zp(Lp.f, qp), Zp(Yp.h, Gp), Zp(Dp.g, hp), (0, Ap.e)({
+     NQ(sQ.d, pQ), NQ(FQ.h, aQ), NQ(PQ.i, xQ), NQ(gQ.k, SQ), (0, JQ.e)({
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L947` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L969) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L947)

```diff
-         return (0, np.p)(pp, cp), cp.detailMap._pluginDefineNames
+         return (0, oQ.r)(QQ, XQ), XQ.detailMap._pluginDefineNames
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L950` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L972) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L950)

```diff
-         (0, np.S)(pp.mirror, ip, cp)
+         (0, oQ._)(QQ.mirror, WQ, XQ)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L954` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L976) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L954)

```diff
-         if (!Op) throw new Error(`${ip.feature.name} has no plugin class (registerPluginClass)`);
+         if (!wQ) throw new Error(`${WQ.feature.name} has no plugin class (registerPluginClass)`);
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L967-L968` → after: `L989-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L989-L990) · [Before (L967-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L967-L968)

```diff
-           const cp = new Sp.d(Op, ip, op, Ip, xp);
-           return Object.assign(cp, Yp), void(0, Pp.K)(pp, cp)
+           const XQ = new zQ.e(wQ, WQ, qQ, TQ, sQ);
+           return Object.assign(XQ, PQ), void(0, rQ.N)(QQ, XQ)
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L973` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L995) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L973)

```diff
-               ip(new Error(`${Lp.context}: ${(null===cp||void 0===cp?void 0:cp.message)||pp||"Failed to load texture"}`))
+               WQ(new Error(`${FQ.context}: ${(null===XQ||void 0===XQ?void 0:XQ.message)||QQ||"Failed to load texture"}`))
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L990-L991` → after: `L1012-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1012-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1012-L1013) · [Before (L990-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L990-L991)

```diff
-           vp = new Sp.d(null, ip, wp);
-         np.t.set(vp, Ap), Object.assign(vp, Yp), vp.updateURL(Op, yp);
+           VQ = new zQ.e(null, WQ, yQ);
+         oQ.u.set(VQ, JQ), Object.assign(VQ, PQ), VQ.updateURL(wQ, jQ);
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L993` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1015) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L993)

```diff
-         tp && (tp.label = Up), pp.uvSet = vp.coordinatesIndex, pp.matrix.set((0, np.L)(vp)), (0, Pp.K)(pp, vp)
+         DQ && (DQ.label = BQ), QQ.uvSet = VQ.coordinatesIndex, QQ.matrix.set((0, oQ.T)(VQ)), (0, rQ.N)(QQ, VQ)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1004-L1007` → after: `L1026-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1026-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1026-L1029) · [Before (L1004-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1004-L1007)

```diff
-         } = pp.sampler, Dp = Yp === (0, Pp.z)(xp) ? null : () => {
-           (0, np.J)(Ap, Yp)
-         }, Ap = new op.b(Op, ip, null, xp, Ip, Dp, null, (0, Pp.w)(Lp));
-         Ap.coordinatesMode = Sp.d.SKYBOX_MODE, (0, Pp.K)(pp, Ap)
+         } = QQ.sampler, gQ = PQ === (0, rQ.E)(sQ) ? null : () => {
+           (0, oQ.S)(JQ, PQ)
+         }, JQ = new qQ.b(wQ, WQ, null, sQ, TQ, gQ, null, (0, rQ.A)(FQ));
+         JQ.coordinatesMode = zQ.e.SKYBOX_MODE, (0, rQ.N)(QQ, JQ)
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1016` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1038) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1016)

```diff
-           wrap: Dp = Sp.d.CLAMP_ADDRESSMODE
+           wrap: gQ = zQ.e.CLAMP_ADDRESSMODE
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1018` → after: `L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1040) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1018)

```diff
-         const Ap = new Ip.e(ip, {
+         const JQ = new TQ.b(WQ, {
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1023-L1024` → after: `L1045-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1045-L1046) · [Before (L1023-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1023-L1024)

```diff
-         const Pp = (0, np.B)(Ap);
-         return (0, np.D)(Pp, Ap), Pp
+         const rQ = (0, oQ.F)(JQ);
+         return (0, oQ.J)(rQ, JQ), rQ
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1028` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1050) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1028)

```diff
-   41391: (pp, ip, cp) => {
+   41386: (QQ, WQ, XQ) => {
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1031-L1032` → after: `L1053-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1053-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1053-L1054) · [Before (L1031-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1031-L1032)

```diff
-       e: () => Ap,
-       f: () => Pp
+       f: () => JQ,
+       h: () => rQ
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1034-L1041` → after: `L1056-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1056-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1056-L1063) · [Before (L1034-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1034-L1041)

```diff
-     var Op = cp(41378),
-       op = cp(40273),
-       Ip = cp(40498),
-       Sp = cp(40593),
-       xp = cp(41383),
-       Lp = cp(40589),
-       Yp = cp(37698);
-     class Dp extends Sp.b {
+     var wQ = XQ(41373),
+       qQ = XQ(40331),
+       TQ = XQ(40561),
+       zQ = XQ(40670),
+       sQ = XQ(41379),
+       FQ = XQ(40661),
+       PQ = XQ(37762);
+     class gQ extends zQ.d {
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1049` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1071) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1049)

```diff
-         (0, Yp.m)(pp), this.model = pp, null === (ip = this.onLinked) || void 0 === ip || ip.call(this, pp)
+         (0, PQ.o)(QQ), this.model = QQ, null === (WQ = this.onLinked) || void 0 === WQ || WQ.call(this, QQ)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1076` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1098) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1076)

```diff
-         this.link(new Yp.f(pp, ip, this.getTotalVertices(), new Float64Array(cp.BOp()), new Float64Array(Op.BOp())))
+         this.link(new PQ.g(QQ, WQ, this.getTotalVertices(), new Float64Array(XQ.awQ()), new Float64Array(wQ.awQ())))
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1080-L1081` → after: `L1102-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1102-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1102-L1103) · [Before (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1080-L1081)

```diff
-         const ip = new Dp(pp, this.Gl()),
-           cp = this.NOp(void 0, !0);
+         const WQ = new gQ(QQ, this.sE()),
+           XQ = this.lwQ(void 0, !0);
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1096-L1097` → after: `L1118-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1118-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1118-L1119) · [Before (L1096-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1096-L1097)

```diff
-           const Pp = pp.getIsInstanced() ? (cp instanceof Array ? 4 * cp.length : cp.byteLength) / Dp : this.getTotalVertices(),
-             Wp = (0, op.s)(cp, xp, Lp, Yp, Dp, Pp, !0),
+           const rQ = QQ.getIsInstanced() ? (XQ instanceof Array ? 4 * XQ.length : XQ.byteLength) / gQ : this.getTotalVertices(),
+             IQ = (0, qQ.w)(XQ, sQ, FQ, PQ, gQ, rQ, !0),
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1106` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1128) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1106)

```diff
-           ip.setVerticesBuffer(new Op.f(this.gy(), Wp, Ip, yp), Pp)
+           WQ.setVerticesBuffer(new wQ.f(this.Uj(), IQ, TQ, jQ), rQ)
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1108` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1130) · [Before (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1108)

```diff
-         return ip._updatable = Sp, ip._boundingInfo = new Ip.d(this.extend.minimum, this.extend.maximum), ip.relink(), ip
+         return WQ._updatable = zQ, WQ._boundingInfo = new TQ.e(this.extend.minimum, this.extend.maximum), WQ.relink(), WQ
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1111-L1113` → after: `L1133-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1133-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1133-L1135) · [Before (L1111-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1111-L1113)

```diff
-         const Lp = pp[0].Gl(),
-           Yp = new xp.c(pp[0].name + "_merged", Lp),
-           Ap = new Dp(Sp.b.RandomId(), Lp, void 0, !1, Yp);
+         const FQ = QQ[0].sE(),
+           PQ = new sQ.b(QQ[0].name + "_merged", FQ),
+           JQ = new gQ(zQ.d.RandomId(), FQ, void 0, !1, PQ);
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1115` → after: `L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1137) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1115)

```diff
-           if (!xp.c.MergeMeshes(pp, ip, cp, Yp, op, Ip)) return Yp.dispose(), null
+           if (!sQ.b.MergeMeshes(QQ, WQ, XQ, PQ, qQ, TQ)) return PQ.dispose(), null
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1132` → after: `L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1154) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1132)

```diff
-         this.model && ((0, Yp.v)(this.model), this.model = null)
+         this.model && ((0, PQ.u)(this.model), this.model = null)
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1137-L1138` → after: `L1159-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1159-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1159-L1160) · [Before (L1137-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1137-L1138)

```diff
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xp.c(pp, cp);
-       const op = (0, Yp.j)(ip),
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new sQ.b(QQ, XQ);
+       const qQ = (0, PQ.m)(WQ),
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1146-L1148` → after: `L1168-L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1168-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1168-L1170) · [Before (L1146-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1146-L1148)

```diff
-         Up = new Lp.d;
-       Up.positions = Ip, Up.normals = null !== Ap && void 0 !== Ap ? Ap : null, Up.uvs = null !== Pp && void 0 !== Pp ? Pp : null, Up.indices = Wp;
-       const wp = new Dp(Sp.b.RandomId(), cp, Up, !1, Op);
+         BQ = new FQ.e;
+       BQ.positions = TQ, BQ.normals = null !== JQ && void 0 !== JQ ? JQ : null, BQ.uvs = null !== rQ && void 0 !== rQ ? rQ : null, BQ.indices = IQ;
+       const yQ = new gQ(zQ.d.RandomId(), XQ, BQ, !1, wQ);
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1159` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1181) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1159)

```diff
-       const op = new xp.c(pp, cp),
+       const qQ = new sQ.b(QQ, XQ),
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1166` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1188) · [Before (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1166)

```diff
-       return Object.assign(new Lp.d, {
+       return Object.assign(new FQ.e, {
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1174` → after: `L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1196) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1174)

```diff
-   41864: (pp, ip, cp) => {
+   41851: (QQ, WQ, XQ) => {
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1176-L1177` → after: `L1198-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1198-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1198-L1199) · [Before (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1176-L1177)

```diff
-       d: () => wp,
-       e: () => xp,
+       b: () => yQ,
+       f: () => sQ,
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1179` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1201) · [Before (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1179)

```diff
-       m: () => Yp
+       j: () => PQ
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1181-L1183` → after: `L1203-L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1203-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1203-L1205) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1181-L1183)

```diff
-     var Op = cp(37479),
-       op = cp(38942),
-       Ip = cp(38938);
+     var wQ = XQ(37539),
+       qQ = XQ(38986),
+       TQ = XQ(38979);
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1186` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1208) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1186)

```diff
-       const op = Ip.o;
+       const qQ = TQ.u;
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1194` → after: `L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1216) · [Before (L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1194)

```diff
-         ip[op.colorPositions + Ip] = pp.gradient, pp.color1.toArray(ip, op.color1 + 4 * Ip), (null !== (Lp = pp.color2) && void 0 !== Lp ? Lp : pp.color1).toArray(ip, op.color2 + 4 * Ip)
+         WQ[qQ.colorPositions + TQ] = QQ.gradient, QQ.color1.toArray(WQ, qQ.color1 + 4 * TQ), (null !== (FQ = QQ.color2) && void 0 !== FQ ? FQ : QQ.color1).toArray(WQ, qQ.color2 + 4 * TQ)
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1197` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1219) · [Before (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1197)

```diff
-         Dp = Pp(pp, Yp, "tw", Op);
+         gQ = rQ(QQ, PQ, "Fy", wQ);
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1199` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1221) · [Before (L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1199)

```diff
-       for (let Ip = 0; Ip < Dp; Ip++) tp(ip, op.tw + 4 * Ip, Yp[Wp(Yp, Ip)]);
+       for (let TQ = 0; TQ < gQ; TQ++) DQ(WQ, qQ.Fy + 4 * TQ, PQ[IQ(PQ, TQ)]);
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1209` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1231) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1209)

```diff
-         texels: new Uint8Array(4 * Ip.k)
+         texels: new Uint8Array(4 * TQ.l)
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1216` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1238) · [Before (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1216)

```diff
-         for (let cp = 0; cp < Ip.k; cp++) op.l.GetCurrentGradient(cp / Ip.k, pp, ((pp, ip, cp) => {
+         for (let XQ = 0; XQ < TQ.l; XQ++) qQ.l.GetCurrentGradient(XQ / TQ.l, QQ, ((QQ, WQ, XQ) => {
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1233` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1255) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1233)

```diff
-       return ip ? ip.length > Ip.d ? (Op(`particleStops:${cp}`, `GPU particles use the first 2 and last ${Ip.d-2} of more than ${Ip.d} ${cp} gradient stops (${pp.name})`), Ip.d) : ip.length : 0
+       return WQ ? WQ.length > TQ.e ? (wQ(`particleStops:${XQ}`, `GPU particles use the first 2 and last ${TQ.e-2} of more than ${TQ.e} ${XQ} gradient stops (${QQ.name})`), TQ.e) : WQ.length : 0
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1237` → after: `L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1259) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1237)

```diff
-       return ip < 2 || pp.length <= Ip.d ? ip : pp.length - Ip.d + ip
+       return WQ < 2 || QQ.length <= TQ.e ? WQ : QQ.length - TQ.e + WQ
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1239` → after: `L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1261) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1239)

```diff
-     const yp = new Float32Array(Ip.m),
+     const jQ = new Float32Array(TQ.q),
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1255` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1277) · [Before (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1255)

```diff
-       pp[ip] = cp.gradient, pp[ip + 1] = cp.factor1, pp[ip + 2] = null !== (Op = cp.factor2) && void 0 !== Op ? Op : cp.factor1
+       QQ[WQ] = XQ.gradient, QQ[WQ + 1] = XQ.factor1, QQ[WQ + 2] = null !== (wQ = XQ.factor2) && void 0 !== wQ ? wQ : XQ.factor1
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1258` → after: `L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1280) · [Before (L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1258)

```diff
-   41375: (pp, ip, cp) => {
+   41366: (QQ, WQ, XQ) => {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1284-L1285` → after: `L1306-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1306-L1307) · [Before (L1284-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1284-L1285)

```diff
-       d: () => Op,
-       h: () => Ip
+       b: () => wQ,
+       f: () => TQ
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1291` → after: `L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1313) · [Before (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1291)

```diff
-       const Sp = null !== (Op = op.get(pp)) && void 0 !== Op ? Op : new Map;
+       const zQ = null !== (wQ = qQ.get(QQ)) && void 0 !== wQ ? wQ : new Map;
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1293` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1315) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1293)

```diff
-       const xp = null !== (Ip = Sp.get(ip[0])) && void 0 !== Ip ? Ip : [];
+       const sQ = null !== (TQ = zQ.get(WQ[0])) && void 0 !== TQ ? TQ : [];
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1306` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1328) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1306)

```diff
-   41860: (pp, ip, cp) => {
+   41842: (QQ, WQ, XQ) => {
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1315` → after: `L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1337) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1315)

```diff
-       c: () => Op
+       e: () => wQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js#L4)

```diff
-   60729: (pp, ip, cp) => {
+   60865: (QQ, WQ, XQ) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L4)

```diff
-   36611: (pp, ip, cp) => {
+   36698: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L10)

```diff
-     var Op = cp(36618);
+     var wQ = XQ(36703);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L71)

```diff
-     var Yp = cp(36622);
+     var PQ = XQ(36711);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L78)

```diff
-       return `${ip}|${cp}|${pp}`
+       return `${WQ}|${XQ}|${QQ}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L105)

```diff
-         return null !== (op = await (0, Yp.d)(Ip, ip, cp)) && void 0 !== op ? op : (await Hp(Ip, ip, cp)).toDataURL()
+         return null !== (qQ = await (0, PQ.e)(TQ, WQ, XQ)) && void 0 !== qQ ? qQ : (await pQ(TQ, WQ, XQ)).toDataURL()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L116-L119` → after: `L116-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L116-L119) · [Before (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L116-L119)

```diff
-         const Ip = (0, Op.g)(cp, op),
-           Sp = Ip * Op.c.across,
-           xp = Ip * Op.c.down,
-           Yp = Ip * Op.c.up,
+         const TQ = (0, wQ.f)(XQ, qQ),
+           zQ = TQ * wQ.b.across,
+           sQ = TQ * wQ.b.down,
+           PQ = TQ * wQ.b.up,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L138)

```diff
-             rect: ip.cropFaces ? Ip : [0, 0, 1, 1],
+             rect: WQ.cropFaces ? TQ : [0, 0, 1, 1],
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L150)

```diff
-         return (0, Op.k)(Up, cp, op, (pp => 1 === wp[pp])), Up
+         return (0, wQ.i)(BQ, XQ, qQ, (QQ => 1 === yQ[QQ])), BQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L156)

```diff
-         return "SlabBlock" === pp ? Ip : "StairsBlock" === pp ? Sp : op
+         return "SlabBlock" === QQ ? TQ : "StairsBlock" === QQ ? zQ : qQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L166)

```diff
-         const ip = await (0, Yp.h)(pp),
+         const WQ = await (0, PQ.i)(QQ),
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L197)

```diff
-     if (void 0 === Op) throw new Error(`no ${cp} was sent for ${ip.slice(0,100)}`);
+     if (void 0 === wQ) throw new Error(`no ${XQ} was sent for ${WQ.slice(0,100)}`);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L223)

```diff
-             ip(null !== (pp = cp.error) && void 0 !== pp ? pp : new Error("the icon did not encode"))
+             WQ(null !== (QQ = XQ.error) && void 0 !== QQ ? QQ : new Error("the icon did not encode"))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L290)

```diff
-               rect: op.cropFaces ? Ip : [0, 0, 1, 1],
+               rect: qQ.cropFaces ? TQ : [0, 0, 1, 1],
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L308)

```diff
-           return "SlabBlock" === pp ? Wp : "StairsBlock" === pp ? yp : Pp
+           return "SlabBlock" === QQ ? IQ : "StairsBlock" === QQ ? jQ : rQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L4)

```diff
-   36642: (pp, ip, cp) => {
+   36726: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L6-L21` → after: `L6-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L6-L21) · [Before (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L6-L21)

```diff
-       "./Artisan Bench.json": [41402, 280],
-       "./Aspen Item Pedestal.json": [41410, 281],
-       "./Cedar Item Pedestal.json": [41418, 282],
-       "./Cherry Item Pedestal.json": [41427, 283],
-       "./Furnace.json": [41432, 284],
-       "./Jungle Item Pedestal.json": [41440, 285],
-       "./Mango Item Pedestal.json": [41446, 286],
-       "./Palm Item Pedestal.json": [41454, 287],
-       "./Pear Item Pedestal.json": [41461, 288],
-       "./Pine Item Pedestal.json": [41467, 289],
-       "./Plum Item Pedestal.json": [41469, 290],
-       "./Potion Table.json": [41478, 291],
-       "./Salvaging Table.json": [41481, 292],
-       "./Showcase.json": [41484, 293],
-       "./Spectral Item Pedestal.json": [41492, 294],
-       "./Workbench.json": [41498, 295]
+       "./Artisan Bench.json": [41417, 284],
+       "./Aspen Item Pedestal.json": [41426, 285],
+       "./Cedar Item Pedestal.json": [41431, 286],
+       "./Cherry Item Pedestal.json": [41440, 287],
+       "./Furnace.json": [41447, 288],
+       "./Jungle Item Pedestal.json": [41449, 289],
+       "./Mango Item Pedestal.json": [41452, 290],
+       "./Palm Item Pedestal.json": [41459, 291],
+       "./Pear Item Pedestal.json": [41462, 292],
+       "./Pine Item Pedestal.json": [41468, 293],
+       "./Plum Item Pedestal.json": [41473, 294],
+       "./Potion Table.json": [41475, 295],
+       "./Salvaging Table.json": [41477, 296],
+       "./Showcase.json": [41481, 297],
+       "./Spectral Item Pedestal.json": [41490, 298],
+       "./Workbench.json": [41496, 299]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L33)

```diff
-     op.keys = () => Object.keys(Op), op.id = 36642, pp.exports = op
+     qQ.keys = () => Object.keys(wQ), qQ.id = 36726, QQ.exports = qQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L35)

```diff
-   36635: (pp, ip, cp) => {
+   36718: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L40-L42` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L40-L42) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L40-L42)

```diff
-     var Op = cp(36622),
-       op = cp(36618);
-     const Ip = cp(36642),
+     var wQ = XQ(36711),
+       qQ = XQ(36703);
+     const TQ = XQ(36726),
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L79)

```diff
-       return Sp.width = ip, Sp.height = ip, Sp.getContext("2d").putImageData(new ImageData((0, op.m)(Op, Ip, ip, cp), ip, ip), 0, 0), Sp.toDataURL()
+       return zQ.width = WQ, zQ.height = WQ, zQ.getContext("2d").putImageData(new ImageData((0, qQ.k)(wQ, TQ, WQ, XQ), WQ, WQ), 0, 0), zQ.toDataURL()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L83)

```diff
-       const op = `${ip}|${cp}|${pp}`;
+       const qQ = `${WQ}|${XQ}|${QQ}`;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L85)

```diff
-       return Ip || (Ip = (0, Op.f)(pp, (() => Dp(pp)), ip, cp).then((Op => null !== Op && void 0 !== Op ? Op : Ap(pp, ip, cp))), Ip.catch((() => {
+       return TQ || (TQ = (0, wQ.h)(QQ, (() => gQ(QQ)), WQ, XQ).then((wQ => null !== wQ && void 0 !== wQ ? wQ : JQ(QQ, WQ, XQ))), TQ.catch((() => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5)

```diff
-   42941: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/bloxd_wasm_anim_bg.ab5b80b8d68f5e91c45a.wasm"
+   42939: (QQ, WQ, XQ) => {
+     QQ.exports = XQ.p + "static/media/bloxd_wasm_anim_bg.3f3ecba3f9397299db2a.wasm"
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L7)

```diff
-   42935: (pp, ip, cp) => {
+   42932: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L15-L23` → after: `L15-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23) · [Before (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23)

```diff
-       const Sp = tp(pp, Mp.fgSa),
-         xp = Cp,
-         Lp = tp(ip, Mp.fgSa),
-         Yp = Cp,
-         Dp = tp(cp, Mp.fgSa),
-         Ap = Cp,
-         Pp = tp(Op, Mp.fgSa),
-         yp = Cp,
-         Up = tp(op, Mp.fgSa),
+       const zQ = DQ(QQ, lQ.IpKS),
+         sQ = hQ,
+         FQ = DQ(WQ, lQ.IpKS),
+         PQ = hQ,
+         gQ = DQ(XQ, lQ.IpKS),
+         JQ = hQ,
+         rQ = DQ(wQ, lQ.IpKS),
+         jQ = hQ,
+         BQ = DQ(qQ, lQ.IpKS),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L28)

```diff
-         }(Ip, Mp.fgSa),
+         }(TQ, lQ.IpKS),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L30)

```diff
-       const jp = Mp.xO7R(Sp, xp, Lp, Yp, Dp, Ap, Pp, yp, Up, wp, Hp, ep);
+       const bQ = lQ.MLNA(zQ, sQ, FQ, PQ, gQ, JQ, rQ, jQ, BQ, yQ, pQ, UQ);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L33-L39` → after: `L33-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39) · [Before (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39)

```diff
-       return Mp.PZPw(jp[0], 1 * jp[1], 1), Rp
-     }
- 
-     function Ip(pp, ip) {
-       const cp = Hp(pp, Mp.fgSa, Mp.hVwD),
-         Op = Cp,
-         op = Mp.zeZa(cp, Op, ip);
+       return lQ.oiMR(bQ[0], 1 * bQ[1], 1), HQ
+     }
+ 
+     function TQ(QQ, WQ) {
+       const XQ = pQ(QQ, lQ.IpKS, lQ.SFjA),
+         wQ = hQ,
+         qQ = lQ.QR60(XQ, wQ, WQ);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L44)

```diff
-       Mp.V64H()
+       lQ.WfDt()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L50)

```diff
-         VfU7: {
+         te92: {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L52)

```diff
-           spUr: function(pp, ip) {
+           wqTb: function(QQ, WQ) {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L55)

```diff
-           bBjB: function(pp, ip) {
+           aShM: function(QQ, WQ) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58)

```diff
-               Op = "string" === typeof cp ? cp : void 0;
-             var op = vp(Op) ? 0 : Hp(Op, Mp.fgSa, Mp.hVwD),
+               wQ = "string" === typeof XQ ? XQ : void 0;
+             var qQ = VQ(wQ) ? 0 : pQ(wQ, lQ.IpKS, lQ.SFjA),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L62)

```diff
-           geTR: function(pp, ip) {
+           QFwo: function(QQ, WQ) {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L65)

```diff
-           zT7c: function(pp, ip) {
+           MNGJ: function(QQ, WQ) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L68)

```diff
-           bQdA: function(pp) {
+           gpXD: function(QQ) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82)

```diff
-       Hxp: () => op,
-       dA: () => Ip,
+       zsQ: () => qQ,
+       Mg: () => TQ,
```
