export const id = 251;
export const ids = [251];
export const modules = {
  37815: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      e: () => Ir,
      f: () => Er,
      h: () => fr,
      k: () => nr
    });
    var Zr = Qr(692),
      Wr = Qr(1904),
      ar = Qr(5617);
    class jr {
      constructor(rr, Sr) {
        this.width = rr, this.sx = Sr, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(rr * Sr)
      }
      push(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = this.data,
          Zr = this.next * this.width;
        for (let Wr = 0; Wr < this.width; Wr++) Qr[Zr + Wr] = rr[Sr + Wr];
        this.next = (this.next + 1) % this.sx, this.size = Math.min(this.size + 1, this.sx)
      }
      rows() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const Qr = [],
          Zr = (this.next - this.size + this.sx) % this.sx;
        for (let Wr = 0; Wr < this.size; Wr++) {
          const ar = (Zr + Wr) % this.sx * this.width;
          this.data[ar + rr] >= Sr && Qr.push(Array.from(this.data.subarray(ar, ar + this.width)))
        }
        return Qr
      }
      lines() {
        return this.rows().map((rr => rr.join(",")))
      }
    }
    const Ir = 10,
      fr = {
        idle: 0,
        sp: 1,
        tC: 2,
        YC: 3,
        Xh: 4
      },
      Er = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      pr = {
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
      xr = 12e3,
      mr = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Nr = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      Ur = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      tr = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      hr = ["nowMs", "change", "count"];

    function zr(rr) {
      return "js" === rr ? pr.jsClient : pr.wasmClient
    }
    class Yr {
      constructor() {
        this.steps = new jr(Ir, xr), this.events = new jr(Nr.length, xr), this.frames = new jr(Ur.length, xr), this.cameraSets = new jr(ar.i, 256), this.changes = new jr(hr.length, 256)
      }
    }
    const nr = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Nr.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(rr, Sr) {
        this.startedClient = rr, this.startedAtMs = performance.now(), null !== this.rings ? this.change(zr(rr)) : Sr && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(pr.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new Yr, null !== this.startedClient && this.changeAt(this.startedAtMs, zr(this.startedClient), 1))
      }
      step(rr, Sr) {
        var Qr;
        rr[Sr + 6] !== fr.Xh && (null === (Qr = this.rings) || void 0 === Qr || Qr.steps.push(rr, Sr))
      }
      cameraSet(rr, Sr) {
        var Qr;
        null === (Qr = this.rings) || void 0 === Qr || Qr.cameraSets.push(rr, Sr)
      }
      mouseMove(rr, Sr) {
        const Qr = this.rings;
        if (null === Qr) return;
        const Zr = this.sample;
        Zr[0] = rr.timeStamp, Zr[1] = performance.now(), Zr[2] = rr.movementX, Zr[3] = rr.movementY, Zr[4] = Sr ? 1 : 0, Qr.events.push(Zr)
      }
      frame(rr, Sr, Qr, Zr) {
        const Wr = this.rings;
        if (null === Wr || Zr === Er.none) return;
        const ar = this.sample;
        ar[0] = performance.now(), ar[1] = rr, ar[2] = Sr, ar[3] = Qr, ar[4] = Zr, Wr.frames.push(ar)
      }
      change(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), rr, Sr)
      }
      changeAt(rr, Sr, Qr) {
        const Zr = this.rings;
        if (null === Zr) return;
        const Wr = this.sample;
        Wr[0] = rr, Wr[1] = Sr, Wr[2] = Qr, Zr.changes.push(Wr)
      }
      dumpText() {
        var rr, Sr;
        const Qr = this.rings;
        return [`look records (${this.startedClient}): ${mr.join(",")}`, ...null !== (rr = null === Qr || void 0 === Qr ? void 0 : Qr.steps.lines()) && void 0 !== rr ? rr : [], `mousemove events: ${Nr.join(",")}`, ...null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.events.lines()) && void 0 !== Sr ? Sr : []].join("\n")
      }
      toJson(rr, Sr) {
        var Qr;
        const Wr = rr - 6e4,
          ar = this.rings,
          jr = function(rr, Sr) {
            var Qr;
            let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const ar = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.rows(Zr, Wr)) && void 0 !== Qr ? Qr : [];
            return {
              columns: Sr,
              fromMs: 0 === ar.length ? null : ar[0][Zr],
              rows: ar
            }
          };
        return {
          version: Zr.e,
          client: null !== (Qr = this.startedClient) && void 0 !== Qr ? Qr : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: rr,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Ez: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...Sr,
          outcomes: fr,
          frameKinds: Er,
          changes: pr,
          lookSteps: jr(null === ar || void 0 === ar ? void 0 : ar.steps, mr),
          mouseMoves: jr(null === ar || void 0 === ar ? void 0 : ar.events, Nr, 1),
          frames: jr(null === ar || void 0 === ar ? void 0 : ar.frames, Ur),
          cameraSets: jr(null === ar || void 0 === ar ? void 0 : ar.cameraSets, tr),
          pageChanges: jr(null === ar || void 0 === ar ? void 0 : ar.changes, hr)
        }
      }
      save(rr) {
        const Sr = JSON.stringify(this.toJson(performance.now(), rr));
        (0, Wr.c)(new Blob([Sr], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37811: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      LOOK_DEBUG_HEADER: () => pr,
      endLookDebugTake: () => zr,
      noteLookDroppedCopy: () => Yr,
      saveLookCapture: () => nr,
      startLookDebug: () => hr
    });
    var Zr = Qr(5617),
      Wr = Qr(3909),
      ar = Qr(2049);
    const jr = new Map(Object.entries(Zr.k).map((rr => {
      let [Sr, Qr] = rr;
      return [Qr, Sr]
    })));

    function Ir(rr) {
      return (0, ar.B)(rr).toFixed(1)
    }

    function fr(rr, Sr) {
      return `camera set by ${jr.get(rr[Sr+1])}: heading ${`${Ir(rr[Sr+2])} -> ${Ir(rr[Sr+4])}`} deg, pitch ${`${Ir(rr[Sr+3])} -> ${Ir(rr[Sr+5])}`} deg, at ${rr[Sr].toFixed(1)} ms`
    }
    var Er = Qr(37815);
    const pr = 2;

    function xr(rr) {
      return Number.isFinite(rr) ? String(Math.round(10 * rr) / 10) : String(rr)
    }

    function mr(rr) {
      return Number.isFinite(rr) ? rr.toFixed(1) : String(rr)
    }
    class Nr {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.tC = 0, this.pastLimit = 0, this.lockSkips = 0, this.Xh = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.tC > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.tC > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class Ur {
      constructor() {
        var rr = this;
        this.topicOn = (0, Wr.p)("look"), this.remote = (0, Wr.t)(), this.tally = new Nr, this.takes = null, this.started = !1, this.record = function(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (Er.k.step(Sr, Qr), !rr.topicOn) return;
          const Zr = Sr[Qr],
            Wr = Sr[Qr + 1],
            ar = Sr[Qr + 2],
            jr = Sr[Qr + 3],
            Ir = Sr[Qr + 4],
            fr = Sr[Qr + 5],
            pr = Sr[Qr + 6],
            Nr = Sr[Qr + 7],
            Ur = Sr[Qr + 8],
            tr = Sr[Qr + 9],
            hr = rr.tally;
          switch (hr.frames++, pr) {
            case Er.h.idle:
              return void hr.idle++;
            case Er.h.Xh:
              return void hr.Xh++;
            case Er.h.YC:
              return hr.lockSkips++, void(0 === ar && 0 === jr || rr.outlier(`lock skip dropped raw (${xr(ar)}, ${xr(jr)}) at ${mr(Zr)} ms`))
          }
          hr.looked++, Number.isFinite(Wr) && (hr.dtMin = Math.min(hr.dtMin, Wr), hr.dtMax = Math.max(hr.dtMax, Wr), hr.dtSum += Wr, Wr > 0 && (hr.peakRate = Math.max(hr.peakRate, Math.hypot(Ir, fr) / Wr))), hr.raw[0] += ar, hr.raw[1] += jr, hr.turned[0] += Ir, hr.turned[1] += fr;
          const zr = Math.abs(ar) > tr || Math.abs(jr) > tr,
            Yr = `raw (${xr(ar)}, ${xr(jr)}) over ${mr(Wr)} ms, limit ${xr(tr)}, filter v (${Nr.toFixed(3)}, ${Ur.toFixed(3)}) px/ms, at ${mr(Zr)} ms`;
          pr === Er.h.tC ? (hr.tC++, rr.outlier(`spike put right: ${Yr} -> turned (${xr(Ir)}, ${xr(fr)})`)) : zr ? (hr.pastLimit++, rr.outlier(`kept past limit: ${Yr}`)) : Wr > 50 && (hr.longFrames++, rr.remote || rr.outlier(`long frame: ${Yr}, turned in full`))
        }, this.onMouseMove = rr => {
          const Sr = null !== document.pointerLockElement;
          if (Er.k.mouseMove(rr, Sr), !this.topicOn) return;
          const Qr = this.tally,
            {
              movementX: Zr,
              movementY: Wr
            } = rr;
          Qr.events++;
          const ar = Math.max(Math.abs(Zr), Math.abs(Wr));
          Qr.eventMax = Math.max(Qr.eventMax, ar), ar >= 200 && (Qr.bigEvents++, this.eventOutlier(`big mousemove (${Zr}, ${Wr}) at ${mr(rr.timeStamp)} ms, lock ${Sr?"wI":"free"}`))
        }, this.onLockChange = () => {
          const rr = document.pointerLockElement;
          rr ? Er.k.lockGained() : Er.k.change(Er.d.lockLost), this.topicOn && (0, Wr.l)("look", `pointer lock ${rr?`gained (${rr.tagName.toLowerCase()})`:"lost"} at ${mr(performance.now())} ms`)
        }, this.onLockError = () => {
          Er.k.change(Er.d.lockError), this.topicOn && (0, Wr.l)("look", `pointer lock request failed at ${mr(performance.now())} ms`)
        }, this.onVisibility = () => {
          Er.k.change("hidden" === document.visibilityState ? Er.d.hidden : Er.d.visible), this.topicOn && (0, Wr.l)("look", `page ${document.visibilityState} at ${mr(performance.now())} ms`)
        }, this.onFocus = () => {
          Er.k.change(Er.d.focus)
        }, this.onBlur = () => {
          Er.k.change(Er.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const rr = this.tally;
          if (this.tally = new Nr, !rr.moved() || this.remote && !rr.hasEvent()) return;
          const Sr = rr.looked > 0 ? rr.dtSum / rr.looked : NaN,
            Qr = [`${rr.frames} frames (${rr.looked} looked, ${rr.idle} idle${"wasm"===Er.k.client?`, ${rr.Xh} carried`:""})`, `dt avg ${mr(Sr)} min ${mr(rr.dtMin)} max ${mr(rr.dtMax)}, ${rr.longFrames} long`, `${rr.events} mousemoves (max ${xr(rr.eventMax)} px, ${rr.bigEvents} big)`, `raw (${xr(rr.raw[0])}, ${xr(rr.raw[1])}) turned (${xr(rr.turned[0])}, ${xr(rr.turned[1])})`, `peak ${rr.peakRate.toFixed(2)} px/ms`, `put right ${rr.tC}, past limit ${rr.pastLimit}, lock skips ${rr.lockSkips}`, "lock " + (document.pointerLockElement ? "wI" : "free")];
          rr.dropped > 0 && Qr.push(`${rr.dropped} doubled spike copies dropped`), rr.cameraSets > 0 && Qr.push(`${rr.cameraSets} camera sets`), rr.cameraSetsLost > 0 && Qr.push(`${rr.cameraSetsLost} camera set records lost`), rr.lost > 0 && Qr.push(`${rr.lost} records lost`), rr.suppressed > 0 && Qr.push(`${rr.suppressed} outlier lines not shown`), (0, Wr.l)("look", `1s: ${Qr.join("; ")}`)
        }
      }
      start(rr, Sr) {
        if (Er.k.start(rr, null !== document.pointerLockElement), this.takes = Sr, this.topicOn) {
          const {
            screen: Sr
          } = window;
          (0, Wr.l)("look", `start: ${rr} client, dpr ${window.devicePixelRatio}, screen ${Sr.width}x${Sr.height}, pointer lock ${document.pointerLockElement?"wI":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, Wr.i)("look", (() => Er.k.dumpText())))
      }
      outlier(rr) {
        const Sr = this.tally;
        Sr.outliers >= 20 ? Sr.suppressed++ : (Sr.outliers++, (0, Wr.l)("look", rr))
      }
      eventOutlier(rr) {
        const Sr = this.tally;
        Sr.eventLines >= 10 ? Sr.suppressed++ : (Sr.eventLines++, (0, Wr.l)("look", rr))
      }
      takeRecords() {
        if (null === this.takes) return;
        const rr = this.takes.look();
        if (rr.length >= pr) {
          this.counted(Er.d.stepsLost, rr[0]), this.counted(Er.d.droppedCopies, rr[1]);
          for (let Sr = pr; Sr + Er.e <= rr.length; Sr += Er.e) this.record(rr, Sr)
        }
        const Sr = this.takes.cameraSets();
        if (Sr.length >= Zr.e) {
          this.counted(Er.d.cameraSetsLost, Sr[0]);
          for (let rr = Zr.e; rr + Zr.i <= Sr.length; rr += Zr.i) Er.k.cameraSet(Sr, rr), this.topicOn && (this.tally.cameraSets++, this.outlier(fr(Sr, rr)))
        }
      }
      droppedCopy() {
        this.counted(Er.d.droppedCopies, 1)
      }
      counted(rr, Sr) {
        if (0 === Sr) return;
        if (Er.k.change(rr, Sr), !this.topicOn) return;
        const Qr = this.tally;
        rr === Er.d.droppedCopies ? Qr.dropped += Sr : rr === Er.d.stepsLost ? Qr.lost += Sr : Qr.cameraSetsLost += Sr
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let tr = null;

    function hr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return tr ??= new Ur, tr.start(rr, Sr), tr.record
    }

    function zr() {
      var rr;
      null === (rr = tr) || void 0 === rr || rr.endTake()
    }

    function Yr() {
      var rr;
      null === (rr = tr) || void 0 === rr || rr.droppedCopy()
    }
    async function nr(rr) {
      var Sr;
      null === (Sr = tr) || void 0 === Sr || Sr.takeRecords();
      const {
        clientHintsRead: Zr,
        debugDeviceLines: Wr
      } = await Qr.e(35).then((() => Qr(35322)));
      await Zr, Er.k.save({
        ...rr,
        device: Wr()
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);