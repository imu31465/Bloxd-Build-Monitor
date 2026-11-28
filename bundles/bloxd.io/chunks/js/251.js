export const id = 251;
export const ids = [251];
export const modules = {
  37602: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ib,
      e: () => gb,
      g: () => Lb,
      j: () => lb,
      l: () => mb
    });
    var eb = Mb(667),
      Hb = Mb(1980),
      pb = Mb(5685);
    class Vb {
      constructor(bb, wb) {
        this.width = bb, this.qO = wb, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(bb * wb)
      }
      push(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = this.data,
          eb = this.next * this.width;
        for (let Hb = 0; Hb < this.width; Hb++) Mb[eb + Hb] = bb[wb + Hb];
        this.next = (this.next + 1) % this.qO, this.size = Math.min(this.size + 1, this.qO)
      }
      rows() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const Mb = [],
          eb = (this.next - this.size + this.qO) % this.qO;
        for (let Hb = 0; Hb < this.size; Hb++) {
          const pb = (eb + Hb) % this.qO * this.width;
          this.data[pb + bb] >= wb && Mb.push(Array.from(this.data.subarray(pb, pb + this.width)))
        }
        return Mb
      }
      lines() {
        return this.rows().map((bb => bb.join(",")))
      }
    }
    const gb = 10,
      lb = {
        idle: 0,
        nI: 1,
        OJ: 2,
        xJ: 3,
        tF: 4
      },
      Lb = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Ib = {
        lockGained: 1,
        lockLost: 2,
        lockError: 3,
        visible: 4,
        hidden: 5,
        focus: 6,
        blur: 7,
        jsClient: 8,
        wasmClient: 9,
        droppedCopies: 10,
        stepsLost: 11,
        cameraSetsLost: 12
      },
      Ob = 12e3,
      Ub = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      tb = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      Cb = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Eb = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      Fb = ["nowMs", "change", "count"];

    function Bb(bb) {
      return "js" === bb ? Ib.jsClient : Ib.wasmClient
    }
    class sb {
      constructor() {
        this.steps = new Vb(gb, Ob), this.events = new Vb(tb.length, Ob), this.frames = new Vb(Cb.length, Ob), this.cameraSets = new Vb(pb.f, 256), this.changes = new Vb(Fb.length, 256)
      }
    }
    const mb = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(tb.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(bb, wb) {
        this.startedClient = bb, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Bb(bb)) : wb && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Ib.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new sb, null !== this.startedClient && this.changeAt(this.startedAtMs, Bb(this.startedClient), 1))
      }
      step(bb, wb) {
        var Mb;
        bb[wb + 6] !== lb.tF && (null === (Mb = this.rings) || void 0 === Mb || Mb.steps.push(bb, wb))
      }
      cameraSet(bb, wb) {
        var Mb;
        null === (Mb = this.rings) || void 0 === Mb || Mb.cameraSets.push(bb, wb)
      }
      mouseMove(bb, wb) {
        const Mb = this.rings;
        if (null === Mb) return;
        const eb = this.sample;
        eb[0] = bb.timeStamp, eb[1] = performance.now(), eb[2] = bb.movementX, eb[3] = bb.movementY, eb[4] = wb ? 1 : 0, Mb.events.push(eb)
      }
      frame(bb, wb, Mb, eb) {
        const Hb = this.rings;
        if (null === Hb || eb === Lb.none) return;
        const pb = this.sample;
        pb[0] = performance.now(), pb[1] = bb, pb[2] = wb, pb[3] = Mb, pb[4] = eb, Hb.frames.push(pb)
      }
      change(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), bb, wb)
      }
      changeAt(bb, wb, Mb) {
        const eb = this.rings;
        if (null === eb) return;
        const Hb = this.sample;
        Hb[0] = bb, Hb[1] = wb, Hb[2] = Mb, eb.changes.push(Hb)
      }
      dumpText() {
        var bb, wb;
        const Mb = this.rings;
        return [`look records (${this.startedClient}): ${Ub.join(",")}`, ...null !== (bb = null === Mb || void 0 === Mb ? void 0 : Mb.steps.lines()) && void 0 !== bb ? bb : [], `mousemove events: ${tb.join(",")}`, ...null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.events.lines()) && void 0 !== wb ? wb : []].join("\n")
      }
      toJson(bb, wb) {
        var Mb;
        const Hb = bb - 6e4,
          pb = this.rings,
          Vb = function(bb, wb) {
            var Mb;
            let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const pb = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.rows(eb, Hb)) && void 0 !== Mb ? Mb : [];
            return {
              columns: wb,
              fromMs: 0 === pb.length ? null : pb[0][eb],
              rows: pb
            }
          };
        return {
          version: eb.e,
          client: null !== (Mb = this.startedClient) && void 0 !== Mb ? Mb : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: bb,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          uF: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...wb,
          outcomes: lb,
          frameKinds: Lb,
          changes: Ib,
          lookSteps: Vb(null === pb || void 0 === pb ? void 0 : pb.steps, Ub),
          mouseMoves: Vb(null === pb || void 0 === pb ? void 0 : pb.events, tb, 1),
          frames: Vb(null === pb || void 0 === pb ? void 0 : pb.frames, Cb),
          cameraSets: Vb(null === pb || void 0 === pb ? void 0 : pb.cameraSets, Eb),
          pageChanges: Vb(null === pb || void 0 === pb ? void 0 : pb.changes, Fb)
        }
      }
      save(bb) {
        const wb = JSON.stringify(this.toJson(performance.now(), bb));
        (0, Hb.d)(new Blob([wb], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37593: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      LOOK_DEBUG_HEADER: () => Ib,
      endLookDebugTake: () => Bb,
      noteLookDroppedCopy: () => sb,
      saveLookCapture: () => mb,
      startLookDebug: () => Fb
    });
    var eb = Mb(5685),
      Hb = Mb(4060),
      pb = Mb(2107);
    const Vb = new Map(Object.entries(eb.m).map((bb => {
      let [wb, Mb] = bb;
      return [Mb, wb]
    })));

    function gb(bb) {
      return (0, pb.E)(bb).toFixed(1)
    }

    function lb(bb, wb) {
      return `camera set by ${Vb.get(bb[wb+1])}: heading ${`${gb(bb[wb+2])} -> ${gb(bb[wb+4])}`} deg, pitch ${`${gb(bb[wb+3])} -> ${gb(bb[wb+5])}`} deg, at ${bb[wb].toFixed(1)} ms`
    }
    var Lb = Mb(37602);
    const Ib = 2;

    function Ob(bb) {
      return Number.isFinite(bb) ? String(Math.round(10 * bb) / 10) : String(bb)
    }

    function Ub(bb) {
      return Number.isFinite(bb) ? bb.toFixed(1) : String(bb)
    }
    class tb {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.OJ = 0, this.pastLimit = 0, this.lockSkips = 0, this.tF = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.OJ > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.OJ > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class Cb {
      constructor() {
        var bb = this;
        this.topicOn = (0, Hb.m)("look"), this.remote = (0, Hb.n)(), this.tally = new tb, this.takes = null, this.started = !1, this.record = function(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (Lb.l.step(wb, Mb), !bb.topicOn) return;
          const eb = wb[Mb],
            Hb = wb[Mb + 1],
            pb = wb[Mb + 2],
            Vb = wb[Mb + 3],
            gb = wb[Mb + 4],
            lb = wb[Mb + 5],
            Ib = wb[Mb + 6],
            tb = wb[Mb + 7],
            Cb = wb[Mb + 8],
            Eb = wb[Mb + 9],
            Fb = bb.tally;
          switch (Fb.frames++, Ib) {
            case Lb.j.idle:
              return void Fb.idle++;
            case Lb.j.tF:
              return void Fb.tF++;
            case Lb.j.xJ:
              return Fb.lockSkips++, void(0 === pb && 0 === Vb || bb.outlier(`lock skip dropped raw (${Ob(pb)}, ${Ob(Vb)}) at ${Ub(eb)} ms`))
          }
          Fb.looked++, Number.isFinite(Hb) && (Fb.dtMin = Math.min(Fb.dtMin, Hb), Fb.dtMax = Math.max(Fb.dtMax, Hb), Fb.dtSum += Hb, Hb > 0 && (Fb.peakRate = Math.max(Fb.peakRate, Math.hypot(gb, lb) / Hb))), Fb.raw[0] += pb, Fb.raw[1] += Vb, Fb.turned[0] += gb, Fb.turned[1] += lb;
          const Bb = Math.abs(pb) > Eb || Math.abs(Vb) > Eb,
            sb = `raw (${Ob(pb)}, ${Ob(Vb)}) over ${Ub(Hb)} ms, limit ${Ob(Eb)}, filter v (${tb.toFixed(3)}, ${Cb.toFixed(3)}) px/ms, at ${Ub(eb)} ms`;
          Ib === Lb.j.OJ ? (Fb.OJ++, bb.outlier(`spike put right: ${sb} -> turned (${Ob(gb)}, ${Ob(lb)})`)) : Bb ? (Fb.pastLimit++, bb.outlier(`kept past limit: ${sb}`)) : Hb > 50 && (Fb.longFrames++, bb.remote || bb.outlier(`long frame: ${sb}, turned in full`))
        }, this.onMouseMove = bb => {
          const wb = null !== document.pointerLockElement;
          if (Lb.l.mouseMove(bb, wb), !this.topicOn) return;
          const Mb = this.tally,
            {
              movementX: eb,
              movementY: Hb
            } = bb;
          Mb.events++;
          const pb = Math.max(Math.abs(eb), Math.abs(Hb));
          Mb.eventMax = Math.max(Mb.eventMax, pb), pb >= 200 && (Mb.bigEvents++, this.eventOutlier(`big mousemove (${eb}, ${Hb}) at ${Ub(bb.timeStamp)} ms, lock ${wb?"dg":"free"}`))
        }, this.onLockChange = () => {
          const bb = document.pointerLockElement;
          bb ? Lb.l.lockGained() : Lb.l.change(Lb.c.lockLost), this.topicOn && (0, Hb.j)("look", `pointer lock ${bb?`gained (${bb.tagName.toLowerCase()})`:"lost"} at ${Ub(performance.now())} ms`)
        }, this.onLockError = () => {
          Lb.l.change(Lb.c.lockError), this.topicOn && (0, Hb.j)("look", `pointer lock request failed at ${Ub(performance.now())} ms`)
        }, this.onVisibility = () => {
          Lb.l.change("hidden" === document.visibilityState ? Lb.c.hidden : Lb.c.visible), this.topicOn && (0, Hb.j)("look", `page ${document.visibilityState} at ${Ub(performance.now())} ms`)
        }, this.onFocus = () => {
          Lb.l.change(Lb.c.focus)
        }, this.onBlur = () => {
          Lb.l.change(Lb.c.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const bb = this.tally;
          if (this.tally = new tb, !bb.moved() || this.remote && !bb.hasEvent()) return;
          const wb = bb.looked > 0 ? bb.dtSum / bb.looked : NaN,
            Mb = [`${bb.frames} frames (${bb.looked} looked, ${bb.idle} idle${"wasm"===Lb.l.client?`, ${bb.tF} carried`:""})`, `dt avg ${Ub(wb)} min ${Ub(bb.dtMin)} max ${Ub(bb.dtMax)}, ${bb.longFrames} long`, `${bb.events} mousemoves (max ${Ob(bb.eventMax)} px, ${bb.bigEvents} big)`, `raw (${Ob(bb.raw[0])}, ${Ob(bb.raw[1])}) turned (${Ob(bb.turned[0])}, ${Ob(bb.turned[1])})`, `peak ${bb.peakRate.toFixed(2)} px/ms`, `put right ${bb.OJ}, past limit ${bb.pastLimit}, lock skips ${bb.lockSkips}`, "lock " + (document.pointerLockElement ? "dg" : "free")];
          bb.dropped > 0 && Mb.push(`${bb.dropped} doubled spike copies dropped`), bb.cameraSets > 0 && Mb.push(`${bb.cameraSets} camera sets`), bb.cameraSetsLost > 0 && Mb.push(`${bb.cameraSetsLost} camera set records lost`), bb.lost > 0 && Mb.push(`${bb.lost} records lost`), bb.suppressed > 0 && Mb.push(`${bb.suppressed} outlier lines not shown`), (0, Hb.j)("look", `1s: ${Mb.join("; ")}`)
        }
      }
      start(bb, wb) {
        if (Lb.l.start(bb, null !== document.pointerLockElement), this.takes = wb, this.topicOn) {
          const {
            screen: wb
          } = window;
          (0, Hb.j)("look", `start: ${bb} client, dpr ${window.devicePixelRatio}, screen ${wb.width}x${wb.height}, pointer lock ${document.pointerLockElement?"dg":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, Hb.h)("look", (() => Lb.l.dumpText())))
      }
      outlier(bb) {
        const wb = this.tally;
        wb.outliers >= 20 ? wb.suppressed++ : (wb.outliers++, (0, Hb.j)("look", bb))
      }
      eventOutlier(bb) {
        const wb = this.tally;
        wb.eventLines >= 10 ? wb.suppressed++ : (wb.eventLines++, (0, Hb.j)("look", bb))
      }
      takeRecords() {
        if (null === this.takes) return;
        const bb = this.takes.look();
        if (bb.length >= Ib) {
          this.counted(Lb.c.stepsLost, bb[0]), this.counted(Lb.c.droppedCopies, bb[1]);
          for (let wb = Ib; wb + Lb.e <= bb.length; wb += Lb.e) this.record(bb, wb)
        }
        const wb = this.takes.cameraSets();
        if (wb.length >= eb.b) {
          this.counted(Lb.c.cameraSetsLost, wb[0]);
          for (let bb = eb.b; bb + eb.f <= wb.length; bb += eb.f) Lb.l.cameraSet(wb, bb), this.topicOn && (this.tally.cameraSets++, this.outlier(lb(wb, bb)))
        }
      }
      droppedCopy() {
        this.counted(Lb.c.droppedCopies, 1)
      }
      counted(bb, wb) {
        if (0 === wb) return;
        if (Lb.l.change(bb, wb), !this.topicOn) return;
        const Mb = this.tally;
        bb === Lb.c.droppedCopies ? Mb.dropped += wb : bb === Lb.c.stepsLost ? Mb.lost += wb : Mb.cameraSetsLost += wb
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let Eb = null;

    function Fb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Eb ??= new Cb, Eb.start(bb, wb), Eb.record
    }

    function Bb() {
      var bb;
      null === (bb = Eb) || void 0 === bb || bb.endTake()
    }

    function sb() {
      var bb;
      null === (bb = Eb) || void 0 === bb || bb.droppedCopy()
    }
    async function mb(bb) {
      var wb;
      null === (wb = Eb) || void 0 === wb || wb.takeRecords();
      const {
        clientHintsRead: eb,
        debugDeviceLines: Hb
      } = await Mb.e(35).then((() => Mb(35197)));
      await eb, Lb.l.save({
        ...bb,
        device: Hb()
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);