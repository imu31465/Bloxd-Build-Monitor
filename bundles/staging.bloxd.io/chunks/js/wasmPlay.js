export const id = 61;
export const ids = [61];
export const modules = {
  39408: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      e: () => MT
    });
    const lT = "The world isn't loaded, so no blocks can be seen.",
      MT = "The world isn't loaded, so nothing in it can be seen."
  },
  4673: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(2853);
    const yT = 3e4,
      fT = 1e3;

    function xT() {
      return "visible" === document.visibilityState && "inGame" === lT.e.get("gameState") && (0, KT.q)()
    }

    function IT(TT, kT) {
      (0, OT.q)() || function(TT, kT, cT) {
        let lT = 0;
        const MT = setInterval((() => {
          kT() && (lT += fT, lT >= TT && (clearInterval(MT), cT()))
        }), fT)
      }(yT, xT, (() => {
        kT().then((() => {
          TT(`saved for the player after ${yT/1e3} s of play`), (0, OT.y)(), MT.k.nt("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  9210: (TT, kT, cT) => {
    function lT(TT, kT) {
      return 0 === TT.length ? 0 : TT[Math.min(TT.length - 1, Math.floor(kT * TT.length))]
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  38906: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => tT,
      h: () => hT,
      k: () => vT
    });
    var lT = cT(2853);
    const MT = 0,
      KT = 2,
      OT = 3,
      yT = 4;
    class fT {
      constructor(TT, kT) {
        this.width = TT, this.DA = kT, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(TT * kT)
      }
      push(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let lT = 0; lT < this.width; lT++) cT[lT] = TT[kT + lT];
        return this.next = (this.next + 1) % this.DA, this.size = Math.min(this.size + 1, this.DA), cT
      }
      lines() {
        const TT = [],
          kT = (this.next - this.size + this.DA) % this.DA;
        for (let cT = 0; cT < this.size; cT++) {
          const lT = (kT + cT) % this.DA * this.width;
          TT.push(Array.from(this.data.subarray(lT, lT + this.width)).join(","))
        }
        return TT
      }
    }

    function xT(TT) {
      return Number.isFinite(TT) ? String(Math.round(10 * TT) / 10) : String(TT)
    }

    function IT(TT) {
      return Number.isFinite(TT) ? TT.toFixed(1) : String(TT)
    }
    class AT {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.ZE = 0, this.pastLimit = 0, this.lockSkips = 0, this.yh = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class CT {
      constructor() {
        var TT = this;
        this.tally = new AT, this.records = new fT(10, 3600), this.events = new fT(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [lT, fT, AT, CT, jT, vT, tT, hT, NT, QT] = TT.records.push(kT, cT), ST = TT.tally;
          switch (ST.frames++, tT) {
            case MT:
              return void ST.idle++;
            case yT:
              return void ST.yh++;
            case OT:
              return ST.lockSkips++, void(0 === AT && 0 === CT || TT.outlier(`lock skip dropped raw (${xT(AT)}, ${xT(CT)}) at ${IT(lT)} ms`))
          }
          ST.looked++, Number.isFinite(fT) && (ST.dtMin = Math.min(ST.dtMin, fT), ST.dtMax = Math.max(ST.dtMax, fT), ST.dtSum += fT, fT > 0 && (ST.peakRate = Math.max(ST.peakRate, Math.hypot(jT, vT) / fT))), ST.raw[0] += AT, ST.raw[1] += CT, ST.turned[0] += jT, ST.turned[1] += vT;
          const DT = Math.abs(AT) > QT || Math.abs(CT) > QT,
            aT = `raw (${xT(AT)}, ${xT(CT)}) over ${IT(fT)} ms, limit ${xT(QT)}, filter v (${hT.toFixed(3)}, ${NT.toFixed(3)}) px/ms, at ${IT(lT)} ms`;
          tT === KT ? (ST.ZE++, TT.outlier(`spike put right: ${aT} -> turned (${xT(jT)}, ${xT(vT)})`)) : DT ? (ST.pastLimit++, TT.outlier(`kept past limit: ${aT}`)) : fT > 50 && (ST.longFrames++, TT.outlier(`long frame: ${aT}, turned in full`))
        }, this.onMouseMove = TT => {
          const kT = this.tally,
            {
              movementX: cT,
              movementY: lT
            } = TT;
          kT.events++;
          const MT = Math.max(Math.abs(cT), Math.abs(lT));
          kT.eventMax = Math.max(kT.eventMax, MT);
          const KT = null !== document.pointerLockElement,
            OT = this.event;
          OT[0] = TT.timeStamp, OT[1] = cT, OT[2] = lT, OT[3] = KT ? 1 : 0, this.events.push(OT), MT >= 200 && (kT.bigEvents++, this.eventOutlier(`big mousemove (${cT}, ${lT}) at ${IT(TT.timeStamp)} ms, lock ${KT?"ty":"free"}`))
        }, this.onLockChange = () => {
          const TT = document.pointerLockElement;
          (0, lT.k)("look", `pointer lock ${TT?`gained (${TT.tagName.toLowerCase()})`:"lost"} at ${IT(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, lT.k)("look", `pointer lock request failed at ${IT(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, lT.k)("look", `page ${document.visibilityState} at ${IT(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const TT = this.tally;
          if (this.tally = new AT, 0 === TT.events && 0 === TT.raw[0] && 0 === TT.raw[1] && 0 === TT.lockSkips && 0 === TT.ZE && 0 === TT.dropped) return;
          const kT = TT.looked > 0 ? TT.dtSum / TT.looked : NaN,
            cT = [`${TT.frames} frames (${TT.looked} looked, ${TT.idle} idle${"wasm"===this.client?`, ${TT.yh} carried`:""})`, `dt avg ${IT(kT)} min ${IT(TT.dtMin)} max ${IT(TT.dtMax)}, ${TT.longFrames} long`, `${TT.events} mousemoves (max ${xT(TT.eventMax)} px, ${TT.bigEvents} big)`, `raw (${xT(TT.raw[0])}, ${xT(TT.raw[1])}) turned (${xT(TT.turned[0])}, ${xT(TT.turned[1])})`, `peak ${TT.peakRate.toFixed(2)} px/ms`, `put right ${TT.ZE}, past limit ${TT.pastLimit}, lock skips ${TT.lockSkips}`, "lock " + (document.pointerLockElement ? "ty" : "free")];
          TT.dropped > 0 && cT.push(`${TT.dropped} doubled spike copies dropped`), TT.lost > 0 && cT.push(`${TT.lost} records lost`), TT.suppressed > 0 && cT.push(`${TT.suppressed} outlier lines not shown`), (0, lT.k)("look", `1s: ${cT.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(TT, kT) {
        this.client = TT, this.take = kT;
        const {
          screen: cT
        } = window;
        (0, lT.k)("look", `start: ${TT} client, dpr ${window.devicePixelRatio}, screen ${cT.width}x${cT.height}, pointer lock ${document.pointerLockElement?"ty":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, lT.j)("look", this.dump))
      }
      outlier(TT) {
        const kT = this.tally;
        kT.outliers >= 20 ? kT.suppressed++ : (kT.outliers++, (0, lT.k)("look", TT))
      }
      eventOutlier(TT) {
        const kT = this.tally;
        kT.eventLines >= 10 ? kT.suppressed++ : (kT.eventLines++, (0, lT.k)("look", TT))
      }
      takeRecords() {
        var TT;
        const kT = null === (TT = this.take) || void 0 === TT ? void 0 : TT.call(this);
        if (kT && kT.length >= 2) {
          this.tally.lost += kT[0], this.tally.dropped += kT[1];
          for (let TT = 2; TT + 10 <= kT.length; TT += 10) this.record(kT, TT)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let jT = null;

    function vT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return jT ??= new CT, jT.start(TT, kT), jT.record
    }

    function tT() {
      var TT;
      null === (TT = jT) || void 0 === TT || TT.endTake()
    }

    function hT() {
      var TT;
      null === (TT = jT) || void 0 === TT || TT.droppedCopy()
    }
  },
  37794: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT,
      g: () => IT,
      i: () => DT,
      k: () => ST,
      m: () => QT
    });
    var lT = cT(4673),
      MT = cT(9210),
      KT = cT(2853);
    const OT = 20,
      yT = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "DA", "jobMs"];

    function fT(TT) {
      return [...TT].sort(((TT, kT) => TT - kT))
    }
    const xT = [];

    function IT(TT, kT, cT) {
      return `${TT},${kT},${cT}`
    }
    class AT {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(TT, kT) {
        var cT;
        const lT = null !== (cT = this.pending.get(TT)) && void 0 !== cT ? cT : [];
        lT.push({
          editAt: kT,
          meshJobId: 0
        }), this.pending.set(TT, lT)
      }
      frame(TT) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, TT - this.lastFrameAt)), this.lastFrameAt = TT, this.frames++, TT - this.windowStart >= 1e3 && this.summarise(TT)
      }
      sent(TT, kT, cT, lT, MT, KT, OT) {
        this.jobs.set(kT, {
          sentAt: OT,
          receivedAt: 0,
          ahead: cT,
          inFlight: lT,
          DA: MT,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, cT), this.maxCapacity = Math.max(this.maxCapacity, MT);
        for (const fT of null !== (yT = this.pending.get(TT)) && void 0 !== yT ? yT : []) {
          var yT;
          KT.includes(fT.meshJobId) || (fT.meshJobId = kT)
        }
      }
      received(TT, kT, cT) {
        const lT = this.jobs.get(TT);
        void 0 !== lT && (this.roundTrips.push(cT - lT.sentAt), lT.receivedAt = cT, lT.jobMs = kT)
      }
      failed(TT) {
        this.jobs.delete(TT)
      }
      reassign(TT, kT, cT) {
        this.jobs.delete(kT);
        for (const MT of null !== (lT = this.pending.get(TT)) && void 0 !== lT ? lT : []) {
          var lT;
          MT.meshJobId === kT && (MT.meshJobId = cT)
        }
      }
      applied(TT, kT, cT) {
        const lT = this.jobs.get(kT);
        this.jobs.delete(kT), void 0 !== lT && this.show(TT, lT, cT, (TT => TT.meshJobId === kT))
      }
      emptied(TT, kT) {
        const cT = {
          sentAt: kT,
          receivedAt: kT,
          ahead: 0,
          inFlight: 0,
          DA: 0,
          jobMs: 0
        };
        this.show(TT, cT, kT, (() => !0))
      }
      show(TT, kT, cT, lT) {
        const MT = this.pending.get(TT);
        if (!MT) return;
        const KT = MT.filter((MT => !lT(MT) || (this.record(TT, MT.editAt, kT, cT), !1)));
        KT.length > 0 ? this.pending.set(TT, KT) : this.pending.delete(TT)
      }
      Yj(TT) {
        this.reported += TT, this === jT && this.reported >= OT && null !== vT && (vT(), vT = null)
      }
      record(TT, kT, cT, lT) {
        const MT = {
          totalMs: lT - kT,
          slotMs: cT.sentAt - kT,
          workerMs: cT.receivedAt - cT.sentAt,
          applyMs: lT - cT.receivedAt,
          ahead: cT.ahead,
          inFlight: cT.inFlight,
          DA: cT.DA,
          jobMs: cT.jobMs
        };
        if (this.edits[this.nextEdit] = MT, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(MT.totalMs), this.Yj(1), MT.totalMs < 100 || ++this.outliers > 5) return;
        const OT = TT => Math.round(TT);
        (0, KT.k)("remesh", `slow edit (${TT}) shown in ${OT(MT.totalMs)} ms: slot ${OT(MT.slotMs)}, worker ${OT(MT.workerMs)} (${MT.ahead} ahead, ${MT.inFlight}/${MT.DA} in flight; job ${OT(MT.jobMs)}), apply ${OT(MT.applyMs)}`)
      }
      summarise(TT) {
        const kT = (TT - this.windowStart) / 1e3;
        for (const [cT, lT] of this.pending) {
          const kT = lT.filter((kT => TT - kT.editAt <= 1e4));
          this.gaveUp += lT.length - kT.length, this.Yj(lT.length - kT.length), kT.length > 0 ? this.pending.set(cT, kT) : this.pending.delete(cT)
        }
        for (const [cT, lT] of this.jobs) TT - lT.sentAt > (lT.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(cT);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const TT = fT(this.roundTrips),
            cT = fT(this.windowEdits),
            lT = Math.max(0, this.outliers - 5);
          (0, KT.k)("remesh", `${Math.round(this.frames/kT)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,MT.b)(TT,.5))} max ${Math.round((0,MT.b)(TT,1))} ms | ${cT.length} edits shown, p50 ${Math.round((0,MT.b)(cT,.5))} max ${Math.round((0,MT.b)(cT,1))} ms${lT>0?`, ${lT} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = TT, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const TT = yT.map((TT => {
          const kT = fT(this.edits.map((kT => kT[TT])));
          return `${TT}: p50 ${Math.round((0,MT.b)(kT,.5))} p90 ${Math.round((0,MT.b)(kT,.9))} max ${Math.round((0,MT.b)(kT,1))}`
        }));
        return [`${this.edits.length} edits`, ...TT].join("\n")
      }
      dump() {
        const TT = this.edits.map((TT => yT.map((kT => Math.round(10 * TT[kT]) / 10)).join(",")));
        return [this.stats(), yT.join(","), ...TT].join("\n")
      }
    }
    class CT {
      constructor(TT, kT) {
        this.log = TT, this.cC = kT
      }
      edit(TT, kT, cT) {
        const [lT, MT, KT] = this.cC.pA.fcT(TT, kT, cT), OT = this.cC.pA.ft.xt(lT, MT, KT);
        OT && OT.Ot && this.log.edit(IT(lT, MT, KT), performance.now())
      }
      sent(TT, kT, cT, lT, MT) {
        this.log.sent(IT(TT.i, TT.j, TT.k), kT, cT, lT, MT, xT, performance.now())
      }
      received(TT) {
        this.log.received(TT.meshJobId, TT.jobMs, performance.now())
      }
      failed(TT) {
        this.log.failed(TT)
      }
      applied(TT, kT) {
        this.log.applied(IT(TT.i, TT.j, TT.k), kT, performance.now())
      }
    }
    let jT = null,
      vT = null,
      tT = !1,
      hT = null;

    function NT() {
      return new Promise((TT => {
        null !== jT && jT.reported >= OT ? TT() : vT = TT
      }))
    }

    function QT() {
      const TT = new AT;
      return jT = TT, (0, KT.j)("remesh", (() => TT.dump())), (0, KT.e)("remeshStats", (() => {
        console.log(TT.stats())
      })), tT || (tT = !0, (0, lT.c)((TT => {
        (0, KT.k)("remesh", TT)
      }), NT)), TT
    }

    function ST(TT) {
      const kT = QT();
      hT = new CT(kT, TT), TT.bS.meshProbe = hT, TT.on("beforeRender", (() => {
        kT.frame(performance.now())
      }))
    }

    function DT(TT, kT, cT) {
      var lT;
      null === (lT = hT) || void 0 === lT || lT.edit(TT, kT, cT)
    }
  },
  9242: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    const lT = new Set(["chunkBorders"])
  },
  9403: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      d: () => MT,
      f: () => IT
    });
    var lT = cT(1578);

    function MT(TT) {
      var kT;
      return {
        ...OT.store,
        yaw: OT.store.yaw + (null !== (kT = lT.c[TT].previewYaw) && void 0 !== kT ? kT : 0)
      }
    }
    const KT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      OT = {
        player: KT,
        store: {
          ...KT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function yT(TT, kT) {
      TT instanceof Promise ? TT.then(kT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : kT(TT)
    }
    class fT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var kT;
        this.view = TT, null === (kT = this.opened) || void 0 === kT || kT.show(TT)
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class xT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, kT;
        return null !== (TT = null === (kT = this.opened) || void 0 === kT ? void 0 : kT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, kT) {
        var cT;
        null === (cT = this.opened) || void 0 === cT || cT.setCosmetic(TT, kT)
      }
      playEmote(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.playEmote(TT)
      }
      setOrbit(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.setOrbit(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var kT;
        await this.ready, await (null === (kT = this.opened) || void 0 === kT ? void 0 : kT.untilDrawn(TT))
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const IT = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(TT) {
        this.host = TT
      }
      setDefaultHost(TT) {
        this.makeDefault = TT
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(TT) {
        return new fT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new fT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new fT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, kT) {
        return new xT(this.current().openCharacter(TT, kT))
      }
    }
  },
  39042: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => AT,
      d: () => CT
    });
    var lT = cT(184),
      MT = cT(211),
      KT = cT(1508),
      OT = cT(2891),
      yT = cT(1518),
      fT = cT(36284),
      xT = cT(651),
      IT = cT(39e3);

    function AT(TT) {
      (0, OT.e)("matchmake_failed", TT, lT.g[lT.g.SHADER_PACK])
    }
    async function CT(TT, kT) {
      var cT;
      const lT = null === (cT = await IT.shaderPackPage.preload()) || void 0 === cT ? void 0 : cT.listing,
        OT = (0, fT.c)();
      lT && null !== OT && await yT.d.reportShaderPackSession(TT, {
        packId: lT.packId,
        sourceHash: lT.sourceHash,
        game: (0, KT.d)(kT, MT.y, "other"),
        playSessionId: OT,
        visitSessionId: (0, xT.d)()
      })
    }
  },
  38859: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT
    });
    var lT = cT(36),
      MT = cT(1292),
      KT = cT(3402);
    const OT = "Reconnecting";
    class yT {
      constructor(TT) {
        this.hooks = TT, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = TT => {
          TT.persisted || this.leave()
        }, this.controller = new KT.e((kT => TT.reconnect(kT)), {
          isSessionLive: () => !this.ended && TT.isLive(),
          onPhaseChanged: TT => {
            this.onPhaseChanged(TT)
          },
          onReconnected: kT => {
            TT.onReconnected(kT)
          },
          onGaveUp: kT => {
            !this.ended && TT.isLive() && TT.onGaveUp(this.sessionBased, kT)
          }
        })
      }
      onInitialInfo(TT, kT) {
        this.graceMs = TT, this.sessionBased = kT
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(TT) {
        this.ended || this.controller.onConnectionLost(TT, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const TT = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          kT = this.controller.heldToken;
        this.end(), TT && "" !== kT && this.hooks.releaseSeat(kT)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(TT) {
        const kT = "frozen" === TT || "resuming" === TT;
        kT !== this.stopped && (this.stopped = kT, this.hooks.freeze(kT));
        const cT = "frozen" === TT || "resuming" === TT && this.frozen;
        cT && !this.frozen ? (0, MT.p)(OT) : !cT && this.frozen && (0, MT.o)(OT), this.frozen = cT, this.setListening("connected" !== TT), lT.k.nt(KT.p, cT ? "frozen" : TT)
      }
      setListening(TT) {
        TT !== this.listening && (this.listening = TT, TT ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38861: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    class lT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = TT, this.now = kT, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const TT = this.now(),
            kT = TT - this.lastCheckAt <= 2e3;
          this.lastCheckAt = TT;
          const cT = "visible" === document.visibilityState;
          !cT || kT && this.wasVisible || (this.resumedAt = TT), this.wasVisible = cT, cT && TT - this.lastHeardAt > 12e3 && TT - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = kT(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  9294: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(1082);

    function MT() {
      var TT, kT;
      return null !== (TT = null === (kT = screen.orientation) || void 0 === kT ? void 0 : kT.type) && void 0 !== TT ? TT : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const KT = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && MT() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = MT(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, lT.vt)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const TT of this.resizers) TT()
          }
        }), 1e3)
      }
      heldSizer(TT) {
        let kT = !1;
        return () => {
          if (kT && this.isHeld()) return null;
          const cT = TT();
          return kT ||= null !== cT, cT
        }
      }
      onRelease(TT) {
        return this.resizers.add(TT), () => {
          this.resizers.delete(TT)
        }
      }
    }
  },
  39031: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT
    });
    let lT = !1;
    async function MT(TT, kT) {
      if (!lT) {
        lT = !0;
        try {
          const [{
            reloadBloxd: lT
          }, {
            NotificationProvider: MT
          }] = await Promise.all([Promise.resolve().then((() => cT(1741))), Promise.resolve().then((() => cT(1363)))]);
          if (!TT || !0 === await MT.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void lT(kT)
        } catch (MT) {
          console.error("Leaving the replay failed", MT)
        }
        lT = !1
      }
    }
  },
  38875: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT,
      e: () => IT
    });
    var lT = cT(1730),
      MT = cT(218),
      KT = cT(1710),
      OT = cT(1790),
      yT = cT(1202),
      fT = cT(1136);
    async function xT(TT, kT) {
      return function(TT) {
        return "object" === typeof TT && null !== TT && TT.code === MT.c.VpnIp.code
      }(kT) && function(TT) {
        return KT.c.supports("appCheck") && TT.isLoggedIn() && !TT.hasTriedAppAttestation()
      }(TT) && await async function(TT) {
        try {
          const {
            token: kT
          } = await (0, OT.d)(), {
            "3PSIDMCPP": cT
          } = await (0, fT.postJsonWithMetricsCookiesAndJsonResponse)(`${yT.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: kT
          }, {
            retries: 0
          }, TT.getMetricsCookies());
          return TT.setAppAttestedAuthJwt(cT), !0
        } catch (kT) {
          return kT instanceof lT.d && "failed" === kT.code ? (console.warn("The app couldn't get an App Check token:", kT), TT.markAppAttestationTried()) : console.error("Failed to attest the app:", kT), !1
        }
      }(TT)
    }
    async function IT(TT, kT) {
      try {
        return await kT()
      } catch (cT) {
        if (!await xT(TT, cT)) throw cT
      }
      return kT()
    }
  },
  40665: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT
    });
    var lT = cT(1758);
    const MT = 33177600,
      KT = 3e4;
    let OT = !1;

    function yT(TT, kT, cT) {
      if (!TT.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (OT) return Promise.reject(new Error("A screenshot is already being taken"));
      OT = !0;
      const lT = function(TT, kT, cT) {
        const lT = Math.max(1, TT),
          KT = Math.max(1, kT),
          OT = Math.min(1, cT / Math.max(lT, KT), Math.sqrt(MT / (lT * KT)));
        return {
          width: Math.max(1, Math.floor(lT * OT)),
          height: Math.max(1, Math.floor(KT * OT))
        }
      }(kT, cT, TT.maxTextureSize);
      return TT.resize(lT.width, lT.height), new Promise(((kT, cT) => {
        let lT, MT = 2,
          yT = null;
        const fT = () => {
          var kT;
          OT = !1, null === (kT = yT) || void 0 === kT || kT(), clearTimeout(lT), TT.restoreSize()
        };
        lT = setTimeout((() => {
          fT(), cT(new Error("No frame was drawn to capture"))
        }), KT), yT = TT.onFrameDrawn((() => {
          if (MT--, MT > 0) return;
          const {
            canvas: lT
          } = TT, KT = {
            width: lT.width,
            height: lT.height
          };
          try {
            lT.toBlob((TT => {
              TT ? kT({
                blob: TT,
                ...KT
              }) : cT(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (OT) {
            cT(OT)
          } finally {
            fT()
          }
        }))
      }))
    }
    async function fT(TT, kT, cT) {
      try {
        const MT = await yT(TT, kT, cT);
        (0, lT.b)(MT.blob, `bloxd-screenshot-${MT.width}x${MT.height}-${Date.now()}.png`)
      } catch (MT) {
        console.error("Error taking screenshot:", MT)
      }
    }
  },
  39412: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => xT
    });
    var lT = cT(1710),
      MT = cT(118),
      KT = cT(159),
      OT = cT(36247),
      yT = cT(645),
      fT = cT(1734);

    function xT(TT) {
      var kT, cT, fT, xT;
      const AT = (0, OT.e)();
      return {
        game: TT,
        os: (0, MT.getOperatingSystem)(),
        decodedAudioMiB: null === AT ? null : (0, yT.M)(AT.bytes),
        songsDecoded: null !== (kT = null === AT || void 0 === AT ? void 0 : AT.songsDecoded) && void 0 !== kT ? kT : null,
        sheetsDecoded: null !== (cT = null === AT || void 0 === AT ? void 0 : AT.sheetsDecoded) && void 0 !== cT ? cT : null,
        siteUsed: KT.u,
        appVersion: (null === (fT = lT.c.appHello) || void 0 === fT ? void 0 : fT.appVersion) || null,
        appBuild: (null === (xT = lT.c.appHello) || void 0 === xT ? void 0 : xT.build) || null,
        msSinceVideoAd: IT()
      }
    }

    function IT() {
      if ((0, fT.c)()) return 0;
      const TT = (0, fT.b)();
      return null === TT ? null : Math.round(performance.now() - TT.endedAt)
    }(0, fT.k)(yT.J)
  },
  36247: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      f: () => MT
    });
    let lT = null;

    function MT(TT) {
      lT = TT
    }

    function KT() {
      return null === lT ? null : lT()
    }
  },
  38868: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT,
      e: () => IT
    });
    var lT = cT(218),
      MT = cT(1828),
      KT = cT(1833),
      OT = cT(8924);
    const yT = [250, 500, 1e3, 2e3, 1250],
      fT = 406;

    function xT(TT) {
      if ("object" !== typeof TT || null === TT) return !1;
      const {
        code: kT,
        message: cT
      } = TT, MT = lT.c.duplicateLobbyNameError;
      return (kT === MT.code || kT === fT) && (cT === MT.text || cT === MT.text + lT.k)
    }
    async function IT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MT.e;
      for (let MT = 0;; MT++) {
        let OT;
        (0, KT.l)(kT);
        try {
          return await TT()
        } catch (lT) {
          if (OT = yT[MT], void 0 === OT || !xT(lT)) throw lT
        }
        await cT(OT, kT)
      }
    }
    const AT = new Set([lT.c.duplicateLobbyNameError.code, lT.c.lobbyCantBeCreated.code, lT.c.roomDisposedEarlyError.code, lT.c.roomDisposedLateError.code, lT.c.serverRoomLimitReached.code]);

    function CT(TT) {
      if (xT(TT)) return !0;
      const kT = (0, OT.f)(TT);
      return "number" === typeof kT && AT.has(kT)
    }
  },
  8924: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      f: () => OT,
      j: () => yT,
      l: () => xT,
      n: () => fT
    });
    var lT = cT(218),
      MT = cT(4611);

    function KT(TT) {
      return OT(TT) === lT.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function OT(TT) {
      return "object" === typeof TT && null !== TT ? TT.code : void 0
    }

    function yT(TT) {
      var kT;
      return null !== (kT = Object.keys(MT.d).find((kT => MT.d[kT] === TT))) && void 0 !== kT ? kT : null
    }

    function fT(TT) {
      return "notWhitelisted" === TT ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const xT = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38963: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(328),
      MT = cT(159),
      KT = cT(47);

    function OT() {
      KT.e.setItem(lT.yb, KT.e.getItem(lT.yb) + 1), (0, MT.m)() && KT.e.setItem(lT.ub, KT.e.getItem(lT.ub) + 1)
    }
  },
  36278: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => QT,
      f: () => ST
    });
    var lT = cT(1018),
      MT = cT(623),
      KT = cT(339),
      OT = cT(1020),
      yT = cT(636),
      fT = cT(666),
      xT = cT(4508),
      IT = cT(118),
      AT = cT(159),
      CT = cT(1741),
      jT = cT(133),
      vT = cT(36284),
      tT = cT(47),
      hT = cT(651),
      NT = cT(36293);

    function QT() {
      var TT, kT;
      return [...null !== (TT = navigator.languages) && void 0 !== TT ? TT : [null !== (kT = navigator.language) && void 0 !== kT ? kT : "none"], "en-gb"]
    }

    function ST(TT, kT, cT, ST, DT) {
      const aT = (0, lT.j)(kT) ? (0, lT.n)(kT) : null,
        FT = {
          cookies: (0, CT.getAllCookiesForGameNameWithVariation)(kT),
          isMobile: (0, IT.isMobile)(),
          isUsingCustomGameTexturePack: null !== aT && DT(aT),
          generalCookies: {
            joinDiscord: !!tT.e.getItem("DiscordPressed"),
            newGo: xT.c,
            ...TT.getMetricsCookies(),
            trafficCode: ST,
            compliance: IT.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, IT.getBrowserName)(),
            version: (0, IT.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, IT.getPlatformType)(),
            deviceType: (0, jT.b)()
          },
          isLoggedIn: TT.isLoggedIn(),
          lobbyName: cT,
          languages: QT(),
          version: MT.d,
          siteUsed: AT.u,
          subsiteUsed: AT.D,
          playSessionId: (0, vT.i)(kT),
          visitSessionId: (0, hT.d)(),
          clientReason: yT.k.reason,
          budgetBasis: (0, NT.i)(),
          ...null !== fT.q && {
            diagClaim: fT.q.claimId
          }
        };
      return null !== aT && (0, KT.Ac)(aT) ? (FT.lobbyName = (0, lT.g)(aT, (0, lT.k)(kT), cT), {
        roomName: `classic_${OT.g}`,
        joinOptions: FT
      }) : {
        roomName: kT,
        joinOptions: FT
      }
    }
  },
  40290: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT
    });
    var lT = cT(39408);

    function MT(TT) {
      return {
        current: () => TT,
        watch: () => () => {}
      }
    }

    function KT() {}
    const OT = Object.freeze([0, 0, 0]),
      yT = {
        states: {
          health: MT({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: MT({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: MT({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: MT({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: MT({}),
          creativeVisibility: MT({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: MT(null),
          heldItemAim: MT({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: MT(!1),
          gliderBoostFuel: MT(0),
          flight: MT({
            canFly: !1,
            flying: !1
          }),
          crafting: MT({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: MT({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: MT({}),
          fullInventory: MT(!1),
          crosshairTarget: MT({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: MT(!0),
          freeCamera: MT({
            allowed: !1,
            movesFly: !1
          }),
          replay: MT(null),
          replayEdits: MT(null),
          replayRecorder: MT({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: MT(!1)
        },
        events: {
          hotbarSlotRequested: {
            watch: () => () => {}
          },
          hotbarScrolled: {
            watch: () => () => {}
          },
          hotbarDropRequested: {
            watch: () => () => {}
          },
          inventoryDropRequested: {
            watch: () => () => {}
          },
          numberKeyPressed: {
            watch: () => () => {}
          },
          chestToggled: {
            watch: () => () => {}
          },
          chestRefreshed: {
            watch: () => () => {}
          },
          inventorySynced: {
            watch: () => () => {}
          },
          enchantingTableOpened: {
            watch: () => () => {}
          },
          cosmeticsUpdated: {
            watch: () => () => {}
          },
          shotDamageToShow: {
            watch: () => () => {}
          },
          boardEditRequested: {
            watch: () => () => {}
          },
          kill: {
            watch: () => () => {}
          },
          chatReceived: {
            watch: () => () => {}
          },
          ironChestOpenRequested: {
            watch: () => () => {}
          },
          localEffectUpdated: {
            watch: () => () => {}
          },
          localPlayerAliveSet: {
            watch: () => () => {}
          },
          replayUiActionRequested: {
            watch: () => () => {}
          },
          replayViewerRequested: {
            watch: () => () => {}
          }
        },
        commands: {
          selectHotbarSlot: KT,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: KT,
          setInventoryOpen: KT,
          changeIronChestPasskey: KT,
          dragReplayCamera: KT,
          applyTemporaryThirdPerson: KT,
          holdEmoteWheel: KT,
          recordFlyingMiddleText: KT,
          focusCrafting: KT,
          craftRecipe: () => ({
            ky: 0,
            oI: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: KT,
          setShopOpen: KT,
          buyShopItem: KT,
          lobbyManage: KT,
          sendChatMessage: KT,
          ignorePlayer: KT,
          reportPlayer: KT,
          reportWorldCodeChat: KT,
          requestDiscordReportKey: KT,
          reportLobbyOrGame: KT,
          playEmote: KT,
          updateMyCosmetic: KT,
          writeOnBoard: KT,
          writeBook: KT,
          writeNameTag: KT,
          setCustomLobbyBlock: KT,
          openIronChest: KT,
          sendCodeCollab: KT,
          clickCodeBlock: KT,
          bindCustomButtonKeys: KT,
          pressCustomButton: KT,
          moveReplayFreecam: KT,
          holdReplayFreecamVertical: KT,
          respawn: KT,
          wakeUp: KT,
          requestLeaderboard: KT,
          completeTask: KT,
          setServerCookie: KT,
          answerUiRequest: KT,
          chooseRewardedAd: KT,
          setCameraZoom: KT,
          setFreeCameraMovesFly: KT,
          setBlockHighlight: KT,
          setCrosshairInteractPrompt: KT,
          setLookSensitivity: KT,
          replayAction: KT,
          setReplayPlaying: KT,
          seekReplay: KT,
          setReplayCameraMode: KT,
          syncReplayCameraMode: KT,
          setReplayCameraKeyframe: KT,
          moveReplayCameraKeyframe: KT,
          deleteReplayCameraKeyframes: KT,
          setReplayPlaybackMark: KT,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: KT,
          exportReplayVideo: KT,
          toggleRecording: KT,
          saveClip: KT,
          setRecorderPrefs: KT,
          setReplayViewerOpen: KT
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => lT.d,
          worldCodeAiGameState: () => lT.e
        },
        lookups: {
          localPos: () => OT,
          targetedBlockPos: () => null,
          blockAtViewPoint: () => null,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          freeCameraPos: () => null,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  36293: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => FT,
      i: () => aT,
      k: () => DT
    });
    var lT = cT(218),
      MT = cT(118),
      KT = cT(2865),
      OT = cT(4394),
      yT = cT(645),
      fT = cT(36299);
    const xT = 1048576,
      IT = 1024 * xT,
      AT = 400 * xT,
      CT = 147456,
      jT = .5,
      vT = 1.5 * IT,
      tT = 768 * xT;

    function hT(TT) {
      return AT + TT * CT
    }

    function NT(TT, kT, cT) {
      var MT, OT;
      let {
        footprintBytes: yT,
        basis: xT,
        namesLimit: NT
      } = function(TT) {
        const {
          os: kT,
          deviceMemory: cT
        } = TT;
        if ("ios" === kT) switch ((0, KT.g)(TT)) {
          case "ipad_m":
            return {
              footprintBytes: hT(fT.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: tT, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: vT, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: tT, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof cT && Number.isFinite(cT) && cT > 0 ? {
          footprintBytes: cT * IT * jT,
          basis: `memory-${cT}`,
          namesLimit: !0
        } : "android" === kT ? {
          footprintBytes: tT,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: hT(fT.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(TT);
      if (cT) {
        const TT = Math.min(yT, hT(fT.d));
        yT = AT + Math.max(0, TT - AT) / 2, xT += "+killed", NT = !0
      }
      null !== kT && hT(kT) < yT && (yT = hT(kT), xT += "+learned", NT = !0);
      const QT = function(TT) {
          const kT = Math.floor((TT - AT) / CT);
          return Math.min(fT.d, Math.max(fT.g, kT))
        }(yT),
        ST = (0, fT.r)(QT);
      return {
        footprintBytes: yT,
        shedFootprintBytes: NT ? Math.max(yT, hT(QT)) : null,
        chunkCap: QT,
        maxHorizDistance: null !== (MT = null === ST || void 0 === ST ? void 0 : ST.horizontal) && void 0 !== MT ? MT : lT.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (OT = null === ST || void 0 === ST ? void 0 : ST.vertical) && void 0 !== OT ? OT : lT.f.maxChunkVertAddDistance,
        basis: xT
      }
    }
    let QT = null;

    function ST() {
      return NT({
        os: (0, MT.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, KT.h)()
      }, (0, OT.g)(), (0, yT.F)("wasm").length > 0)
    }

    function DT() {
      return QT ??= ST(), QT
    }

    function aT() {
      var TT;
      return (null !== (TT = QT) && void 0 !== TT ? TT : ST()).basis
    }

    function FT(TT, kT) {
      return TT.setChunkCap(kT.chunkCap)
    }
  },
  40658: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      f: () => KT
    });
    var lT = cT(3092),
      MT = cT(1018);

    function KT(TT, kT) {
      return null !== TT.gameSource && (0, lT.p)(kT, TT.gameSource)
    }

    function OT(TT, kT) {
      if (null === TT.gameSource || "" === TT.gameSource || null === kT) return !0;
      const cT = (0, MT.j)(kT) ? (0, MT.n)(kT) : null;
      return null !== cT && KT(TT, cT)
    }
  },
  40636: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT
    });
    var lT = cT(606),
      MT = cT(40644),
      KT = cT(40603);
    async function OT(TT) {
      const kT = await (0, MT.j)({
        Helmet: cT(37816),
        Chestplate: cT(37825),
        Gauntlets: cT(37843),
        Leggings: cT(37834),
        Boots: cT(37837)
      } [lT.b[TT]]);
      try {
        return (0, KT.o)(kT)
      } finally {
        kT.close()
      }
    }
    const yT = new class {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT.l;
        this.decode = TT, this.register = kT, this.decoded = new Map
      }
      warm() {
        for (let TT = 0; TT < lT.b.length; TT++) this.part(TT).catch((kT => {
          console.warn(`The grayscale armour ${lT.b[TT]} image didn't decode ahead of use`, kT)
        }))
      }
      async load(TT, kT) {
        const {
          width: cT,
          height: KT,
          pixels: OT
        } = await this.part(TT), yT = new ImageData(function(TT, kT) {
          const cT = new Uint8ClampedArray(TT.length);
          for (let lT = 0; lT < TT.length; lT += 4) cT[lT] = Math.round(TT[lT] * kT[0] / 255), cT[lT + 1] = Math.round(TT[lT + 1] * kT[1] / 255), cT[lT + 2] = Math.round(TT[lT + 2] * kT[2] / 255), cT[lT + 3] = TT[lT + 3];
          return cT
        }(OT, function(TT) {
          return [TT >>> 16 & 255, TT >>> 8 & 255, 255 & TT]
        }(kT)), cT, KT);
        let fT;
        try {
          fT = await createImageBitmap(yT, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (xT) {
          throw new MT.e("decode", `grayscale armour ${lT.b[TT]}`, {
            cause: xT
          })
        }
        return {
          id: this.register(fT),
          width: cT,
          height: KT
        }
      }
      part(TT) {
        const kT = this.decoded.get(TT);
        if (void 0 !== kT) return kT;
        const cT = this.decode(TT).catch((kT => {
          throw this.decoded.delete(TT), kT instanceof MT.e ? kT : new MT.e("decode", `grayscale armour ${lT.b[TT]}`, {
            cause: kT
          })
        }));
        return this.decoded.set(TT, cT), cT
      }
    }
  },
  40631: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      f: () => hT,
      h: () => IT,
      j: () => AT,
      n: () => tT
    });
    var lT = cT(40583),
      MT = cT(40636),
      KT = cT(40644);
    const OT = 396,
      yT = 1,
      fT = 2,
      xT = 3,
      IT = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8,
        GreyscaleArmour: 9
      },
      AT = {
        File: 0,
        Item: 1
      },
      CT = 0,
      jT = 1,
      vT = 2;

    function tT(TT) {
      const kT = (0, lT.p)();
      kT.catch((() => {}));
      let MT = null;
      return {
        glbUrl: TT,
        lifeformAtlasUrl: async TT => (await kT).lifeformAtlasUrl(TT),
        armourAtlasUrl: async () => (await cT.e(201).then((() => cT(34029)))).armourAtlasUrl,
        capeUrl: async TT => (await kT).capeUrl(TT),
        attachmentImageUrl: async TT => (await kT).attachmentImageUrl(TT),
        blockImageUrl: async TT => (await kT).blockImageUrl(TT),
        groupAtlasUrl: async TT => (await kT).groupAtlasUrl(TT),
        particleTextureUrl: async TT => (await kT).particleTextureUrl(TT),
        particleItemUrl: async TT => (MT ??= cT.e(38).then((() => cT(51086))).catch((TT => {
          throw MT = null, TT
        })), (await MT).particleItemUrl(TT))
      }
    }
    class hT {
      constructor(TT, kT) {
        var cT, OT, yT, fT;
        let xT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = TT, this.onFailure = kT, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.yv = !1, this.load = null !== (cT = xT.load) && void 0 !== cT ? cT : (TT, kT) => (0, KT.k)(TT, xT.fetchImage, kT), this.release = null !== (OT = xT.release) && void 0 !== OT ? OT : KT.o, this.fetchFile = null !== (yT = xT.fetchFile) && void 0 !== yT ? yT : TT => (0, lT.h)(TT), this.greyscaleArmour = null !== (fT = xT.greyscaleArmour) && void 0 !== fT ? fT : MT.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(TT, kT) {
        this.glbWrittenImages.set(TT, rT(kT))
      }
      glbTaken(TT, kT) {
        const cT = this.glbWrittenImages.get(TT);
        this.glbWrittenImages.delete(TT), kT && this.setGlbImages(TT, void 0 !== cT && cT.length > 0 ? cT : void 0)
      }
      setGlbImages(TT, kT) {
        var cT;
        this.glbTakenCount.set(TT, (null !== (cT = this.glbTakenCount.get(TT)) && void 0 !== cT ? cT : 0) + 1), void 0 === kT ? this.glbImages.delete(TT) : this.glbImages.set(TT, kT);
        const lT = [];
        for (const {
            key: MT
          }
          of this.loading.values()) MT.kind === IT.Glb && MT.word === TT && lT.push(MT);
        for (let MT = this.ready.length - 1; MT >= 0; MT--) {
          const {
            key: kT,
            id: cT
          } = this.ready[MT];
          kT.kind === IT.Glb && kT.word === TT && (this.ready.splice(MT, 1), null !== cT && (this.answered.delete(cT), this.release(cT)), lT.push(kT))
        }
        this.loadAgain(lT)
      }
      onEvent(TT) {
        if (this.yv) return;
        const kT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
        for (let cT = 0; cT + 8 <= TT.byteLength; cT += 8) {
          const TT = kT.getUint8(cT),
            lT = kT.getUint32(cT + 4, !0);
          if (TT === xT) {
            this.answered.delete(lT), this.release(lT);
            continue
          }
          const MT = {
            kind: kT.getUint8(cT + 1),
            index: kT.getUint8(cT + 2),
            word: lT
          };
          TT === yT ? this.want(MT) : TT === fT && this.loading.delete(NT(MT))
        }
      }
      reload(TT, kT) {
        const cT = cT => TT.includes(cT.kind) && (void 0 === kT || kT(cT)),
          lT = new Map;
        for (const MT of this.answered.values()) cT(MT) && lT.set(NT(MT), MT);
        for (const [MT, {
            key: KT
          }] of this.loading) cT(KT) && lT.set(MT, KT);
        this.loadAgain(lT.values())
      }
      loadAgain(TT) {
        for (const kT of TT) this.loading.delete(NT(kT)), this.want(kT)
      }
      drain(TT) {
        if (null !== TT)
          for (; this.ready.length > 0;) {
            if (!TT(OT, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.yv = !0, this.loading.clear(), this.ready.length = 0;
        for (const TT of this.answered.keys()) this.release(TT);
        this.answered.clear()
      }
      want(TT) {
        const kT = NT(TT);
        if (this.loading.has(kT)) return;
        const cT = {
          key: TT
        };
        this.loading.set(kT, cT), this.loadKey(TT).then((lT => {
          this.yv || this.loading.get(kT) !== cT ? this.release(lT.id) : (this.loading.delete(kT), this.answered.set(lT.id, TT), this.ready.push({
            record: ST(TT, CT, lT),
            key: TT,
            id: lT.id
          }))
        }), (lT => {
          if (this.yv || this.loading.get(kT) !== cT) return;
          this.loading.delete(kT), this.onFailure({
            key: TT,
            error: lT
          });
          const MT = lT instanceof KT.e && "decode" === lT.stage ? jT : vT;
          this.ready.push({
            record: ST(TT, MT, null),
            key: TT,
            id: null
          })
        }))
      }
      async loadKey(TT) {
        switch (TT.kind) {
          case IT.Glb:
            return this.load(await this.glbImage(TT), "none");
          case IT.LifeformAtlas:
            return this.load(QT(await this.sources.lifeformAtlasUrl(TT.word), TT), "none");
          case IT.ArmourAtlas:
            return this.load(QT(await this.sources.armourAtlasUrl(), TT), "none");
          case IT.Cape:
            return this.load(QT(await this.sources.capeUrl(TT.word), TT), "none");
          case IT.AttachmentImage:
            return this.load(QT(await this.sources.attachmentImageUrl(TT.word), TT), "none");
          case IT.GroupAtlas:
            return this.load(QT(await this.sources.groupAtlasUrl(TT.word), TT), "none");
          case IT.BlockImage:
            return this.load(QT(await this.sources.blockImageUrl(TT.word), TT), "none");
          case IT.Particle: {
            const kT = await (TT.index === AT.Item ? this.sources.particleItemUrl(TT.word) : this.sources.particleTextureUrl(TT.word));
            return this.load(QT(kT, TT), "flipY")
          }
          case IT.GreyscaleArmour:
            return this.greyscaleArmour.load(TT.index, TT.word);
          default:
            throw new KT.e("fetch", `image kind ${TT.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(TT) {
        var kT;
        let cT = this.glbImages.get(TT.word);
        if (void 0 === cT) {
          const kT = this.glbTakenCount.get(TT.word),
            lT = QT(await this.sources.glbUrl(TT.word), TT);
          try {
            cT = rT(await this.fetchFile(lT))
          } catch (MT) {
            throw new KT.e("fetch", lT, {
              cause: MT
            })
          }
          this.glbTakenCount.get(TT.word) === kT && this.glbImages.set(TT.word, cT)
        }
        const lT = null === (kT = cT) || void 0 === kT ? void 0 : kT[TT.index];
        if (!lT) throw new KT.e("decode", `image ${TT.index} of file ${2147483647&TT.word}`, {
          cause: null
        });
        return lT
      }
    }

    function NT(TT) {
      let {
        kind: kT,
        index: cT,
        word: lT
      } = TT;
      return `${kT}:${cT}:${lT}`
    }

    function QT(TT, kT) {
      if (null === TT) throw new KT.e("fetch", `no URL for image ${NT(kT)}`, {
        cause: null
      });
      return TT
    }

    function ST(TT, kT, cT) {
      var lT, MT, KT;
      const OT = new Uint8Array(16),
        yT = new DataView(OT.buffer);
      return yT.setUint8(0, TT.kind), yT.setUint8(1, TT.index), yT.setUint8(2, kT), yT.setUint32(4, TT.word, !0), yT.setUint32(8, null !== (lT = null === cT || void 0 === cT ? void 0 : cT.id) && void 0 !== lT ? lT : 0, !0), yT.setUint16(12, Math.min(null !== (MT = null === cT || void 0 === cT ? void 0 : cT.width) && void 0 !== MT ? MT : 0, 65535), !0), yT.setUint16(14, Math.min(null !== (KT = null === cT || void 0 === cT ? void 0 : cT.height) && void 0 !== KT ? KT : 0, 65535), !0), OT
    }
    const DT = 1179937895,
      aT = 1313821514,
      FT = 5130562;

    function rT(TT) {
      var kT;
      const cT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      if (TT.byteLength < 20 || cT.getUint32(0, !0) !== DT || cT.getUint32(16, !0) !== aT) return [];
      let lT, MT = 20 + cT.getUint32(12, !0);
      try {
        lT = JSON.parse((new TextDecoder).decode(TT.subarray(20, MT)))
      } catch {
        return []
      }
      for (; MT + 8 <= TT.byteLength && cT.getUint32(MT + 4, !0) !== FT;) MT += 8 + cT.getUint32(MT, !0);
      const KT = null !== (kT = lT.images) && void 0 !== kT ? kT : [];
      if (0 === KT.length || MT + 8 > TT.byteLength) return KT.map((() => null));
      const OT = TT.subarray(MT + 8, Math.min(TT.byteLength, MT + 8 + cT.getUint32(MT, !0)));
      return KT.map((TT => {
        var kT, cT, MT;
        const KT = void 0 === TT.bufferView || null === (kT = lT.bufferViews) || void 0 === kT ? void 0 : kT[TT.bufferView];
        if (!KT || 0 !== (null !== (cT = KT.buffer) && void 0 !== cT ? cT : 0) || void 0 === KT.byteLength) return null;
        const yT = null !== (MT = KT.byteOffset) && void 0 !== MT ? MT : 0,
          fT = yT + KT.byteLength;
        return fT <= OT.byteLength ? OT.slice(yT, fT) : null
      }))
    }
  },
  40298: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      f: () => KT,
      h: () => MT
    });
    let lT = null;

    function MT(TT) {
      lT = TT
    }

    function KT(TT) {
      lT === TT && (lT = null)
    }

    function OT() {
      var TT;
      null === (TT = lT) || void 0 === TT || TT()
    }
  },
  36414: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      h: () => CT,
      i: () => NT,
      m: () => xT
    });
    var lT = cT(31),
      MT = cT(2435),
      KT = cT(2443),
      OT = cT(2452),
      yT = cT(2526),
      fT = cT(36);

    function xT(TT, kT) {
      return (!(0, OT.e)() || 0 === TT && 0 === kT) && (0, KT.y)(MT.g.Joystick, 0, TT, kT, 0)
    }
    const IT = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function AT(TT) {
      return TT.classList.contains("TouchKeyHit") && jT() ? null : TT.firstElementChild
    }

    function CT(TT) {
      return TT.classList.contains("TouchKeyHit") && !TT.classList.contains("CanvasZone") ? {
        whole: !jT(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: vT(AT(TT))
      }
    }

    function jT() {
      return document.documentElement.classList.contains(yT.e)
    }

    function vT(TT) {
      return !(TT instanceof HTMLElement) || TT.offsetWidth <= 0 || TT.offsetHeight <= 0 ? null : {
        width: TT.offsetWidth,
        height: TT.offsetHeight
      }
    }

    function tT(TT, kT) {
      const cT = TT => Math.min(65535, Math.round(4 * TT));
      return (cT(TT) | cT(kT) << 16) >>> 0
    }

    function hT(TT) {
      return {
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2,
        radius: Math.min(TT.width, TT.height) / 2
      }
    }
    const NT = new class {
      constructor(TT) {
        this.write = TT, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        kT ? this.elements.set(TT, {
          element: kT,
          hidden: cT
        }) : this.elements.delete(TT), this.measureOne(TT)
      }
      measure() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = TT.left, this.canvasTop = TT.top;
        for (const kT of this.elements.keys()) this.measureOne(kT)
      }
      hitZone(TT, kT) {
        let cT = null,
          lT = 1;
        for (const MT of this.elements.keys()) {
          const KT = this.shown(MT);
          if (!KT) continue;
          const {
            rect: OT,
            element: yT
          } = KT, fT = hT(OT), xT = Math.max(0, OT.width / 2 - fT.radius), IT = Math.max(0, OT.height / 2 - fT.radius), CT = Math.max(0, Math.abs(TT - fT.x) - xT), jT = Math.max(0, Math.abs(kT - fT.y) - IT), tT = yT.firstElementChild;
          let NT = Math.hypot(CT, jT) / fT.radius;
          const QT = vT(AT(yT));
          QT && (NT = Math.min(NT, Math.max(2 * Math.abs(TT - fT.x) / QT.width, 2 * Math.abs(kT - fT.y) / QT.height))), NT < lT && (cT = {
            code: MT,
            element: yT,
            key: tT,
            ...fT
          }, lT = NT)
        }
        return cT
      }
      measureOne(TT) {
        const kT = this.shown(TT);
        if (!kT) return void this.write(MT.g.TouchZone, TT, 0, 0, 0);
        const {
          rect: cT,
          element: lT
        } = kT, KT = hT(cT);
        this.write(MT.g.TouchZone, TT, KT.x - this.canvasLeft, KT.y - this.canvasTop, tT(cT.width, cT.height));
        const OT = vT(AT(lT));
        this.write(MT.g.TouchZone, 256 | TT, 0, 0, OT ? tT(OT.width, OT.height) : 0)
      }
      shown(TT) {
        const kT = this.elements.get(TT),
          cT = lT.e.get("worldPanelHud");
        if (!kT || kT.hidden || "none" === cT) return null;
        const MT = kT.element.getBoundingClientRect();
        return MT.width <= 0 || MT.height <= 0 ? null : {
          rect: MT,
          element: kT.element
        }
      }
    }(KT.y);
    (0, fT.m)(yT.c, (() => {
      NT.measure()
    }))
  },
  40515: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT,
      d: () => xT
    });
    var lT = cT(40524),
      MT = cT(38875),
      KT = cT(36278),
      OT = cT(40461),
      yT = cT(40497);
    const fT = lT.b.timeForPlayerToConnect - 1e4;
    async function xT(TT, kT, cT, lT) {
      let fT;
      try {
        fT = await TT.getTrafficCode()
      } catch (vT) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", vT), new yT.w(vT)
      }
      const {
        gameNameWithVariation: xT,
        lobbyName: IT
      } = kT, AT = () => {
        const kT = (0, KT.f)(TT, xT, IT, fT, (TT => {
          var kT;
          return null !== (kT = null === cT || void 0 === cT ? void 0 : cT.isUsingCustomGameTexturePack(TT)) && void 0 !== kT && kT
        }));
        kT.joinOptions.wasmClient = !0;
        const MT = (0, OT.O)();
        return null !== MT && (kT.joinOptions.renderBackend = MT), kT.joinOptions.joinAdHold = lT, kT
      }, {
        roomName: CT,
        joinOptions: jT
      } = AT();
      return {
        endpoint: kT.endpoint,
        roomName: CT,
        joinOptions: jT,
        session: {
          gameNameWithVariation: xT,
          lobbyName: IT,
          playerDbId: TT.whamm
        },
        optionsAfterRefusal: async kT => await (0, MT.c)(TT, kT) ? AT().joinOptions : null
      }
    }
  },
  4988: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      f: () => OT
    });
    var lT = cT(3092),
      MT = cT(4991);
    let KT = null;

    function OT(TT, kT) {
      KT = {
        pack: TT.metaData.id === lT.d ? null : TT,
        prompt: kT
      }
    }

    function yT(TT, kT) {
      const cT = KT;
      null !== cT && (0, MT.d)(cT.pack, TT) && (KT = null, kT && cT.prompt())
    }
  },
  40649: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      f: () => KT,
      h: () => AT,
      j: () => OT
    });
    var lT = cT(40631),
      MT = cT(40583);
    const KT = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(TT) {
        this.change((() => {
          this.page = TT
        }))
      }
      setSessionFiles(TT) {
        const kT = void 0 !== this.session && void 0 === TT;
        if (this.change((() => {
            this.session = TT
          })), kT)
          for (const cT of [...this.pageListeners]) cT()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(TT) {
        return this.pageListeners.add(TT), () => {
          this.pageListeners.delete(TT)
        }
      }
      setFollower(TT) {
        this.follower = TT, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const TT of [...this.wantedListeners]) TT();
        this.startFollower()
      }
      onWanted(TT) {
        return this.wantedListeners.add(TT), () => {
          this.wantedListeners.delete(TT)
        }
      }
      onChange(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      startFollower() {
        const TT = this.follower;
        this.isWanted && null !== TT && (this.follower = null, TT((() => {
          this.follower = TT
        })))
      }
      change(TT) {
        const kT = this.current;
        if (TT(), this.current !== kT)
          for (const cT of this.listeners) cT()
      }
    };

    function OT(TT, kT) {
      return {
        ...TT,
        armourAtlasUrl: () => {
          var cT, lT;
          return null !== (cT = null === (lT = kT()) || void 0 === lT ? void 0 : lT.armourAtlasUrl()) && void 0 !== cT ? cT : TT.armourAtlasUrl()
        },
        lifeformAtlasUrl: cT => fT(kT(), (TT => TT.LIFEFORM_ATLAS_PATHS[cT]), (() => TT.lifeformAtlasUrl(cT))),
        groupAtlasUrl: cT => fT(kT(), (TT => TT.GROUP_ATLAS_PATHS[cT]), (() => TT.groupAtlasUrl(cT))),
        particleItemUrl: lT => xT(kT(), (async () => {
          const TT = await cT.e(38).then((() => cT(51086))).catch((() => null));
          return (null === TT || void 0 === TT ? void 0 : TT.particleItemSprite(lT)) || null
        }), (() => TT.particleItemUrl(lT))),
        blockImageUrl: cT => xT(kT(), (async () => {
          var TT, kT;
          return null !== (TT = null === (kT = await yT()) || void 0 === kT ? void 0 : kT.blockImageName(cT)) && void 0 !== TT ? TT : null
        }), (() => TT.blockImageUrl(cT)))
      }
    }

    function yT() {
      return (0, MT.p)().catch((() => null))
    }

    function fT(TT, kT, cT) {
      return xT(TT, (async () => {
        var TT;
        const cT = await yT(),
          lT = null === cT ? null : kT(cT),
          MT = null !== (TT = null === lT || void 0 === lT ? void 0 : lT.slice(lT.lastIndexOf("/") + 1)) && void 0 !== TT ? TT : null;
        return "Player_Atlas" === MT ? null : MT
      }), cT)
    }
    async function xT(TT, kT, cT) {
      if (null !== TT) {
        const cT = await kT(),
          lT = null === cT ? null : TT.textureUrl(cT);
        if (null !== lT) return lT
      }
      return cT()
    }
    const IT = 0;

    function AT(TT) {
      const kT = [lT.h.ArmourAtlas, lT.h.LifeformAtlas, lT.h.GroupAtlas, lT.h.BlockImage, lT.h.Particle];
      TT.reload(kT, (TT => {
        switch (TT.kind) {
          case lT.h.Particle:
            return TT.index === lT.j.Item;
          case lT.h.LifeformAtlas:
            return TT.word !== IT;
          default:
            return !0
        }
      }))
    }
  },
  40526: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT,
      c: () => yT,
      d: () => OT,
      f: () => MT,
      j: () => KT
    });
    const lT = 1e3;

    function MT() {
      fT((() => {
        window.location.reload()
      }))
    }

    function KT() {
      return new Promise((() => {}))
    }

    function OT(TT) {
      fT((() => {
        window.location.replace(TT(window.location.href))
      }))
    }

    function yT(TT) {
      Promise.resolve().then((() => cT(127))).then((kT => {
        let {
          currentUrl: cT
        } = kT;
        OT((() => cT.mergeSearchParamsInto(TT)))
      }), (() => {
        OT((() => TT))
      }))
    }

    function fT(TT) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => cT(1741))).then((kT => {
        let {
          prepareForUnloadWithoutConfirmation: cT
        } = kT;
        try {
          cT()
        } catch (lT) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", lT), window.onbeforeunload = null
        }
        TT()
      }), (() => {
        window.onbeforeunload = null, TT()
      })) : TT()
    }
  },
  4991: (TT, kT, cT) => {
    function lT(TT, kT) {
      return MT(TT, kT)
    }

    function MT(TT, kT) {
      if (TT === kT) return !0;
      if ("object" !== typeof TT || "object" !== typeof kT || null === TT || null === kT || Array.isArray(TT) !== Array.isArray(kT)) return !1;
      const cT = TT,
        lT = kT,
        KT = Object.keys(cT);
      return KT.length === Object.keys(lT).length && KT.every((TT => Object.prototype.hasOwnProperty.call(lT, TT) && MT(cT[TT], lT[TT])))
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  40555: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => rT,
      d: () => aT,
      e: () => hT,
      g: () => tT
    });
    var lT = cT(1828),
      MT = cT(1833),
      KT = cT(38868),
      OT = cT(38879),
      yT = cT(1792),
      fT = cT(40494),
      xT = cT(40497);
    const IT = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      AT = 3,
      CT = [500, 1500];

    function jT(TT) {
      const kT = new URL(TT);
      return {
        secure: "https:" === kT.protocol || "wss:" === kT.protocol,
        host: kT.host,
        pathname: kT.pathname.replace(/\/+$/, ""),
        search: kT.searchParams.toString()
      }
    }

    function vT(TT, kT, cT) {
      const {
        secure: lT,
        host: MT,
        pathname: KT,
        search: OT
      } = jT(TT);
      return `${lT?"https":"http"}://${MT}${KT}/matchmake/${kT}/${encodeURIComponent(cT)}${OT?`?${OT}`:""}`
    }

    function tT(TT, kT) {
      var cT;
      const lT = null !== (cT = kT.protocol) && void 0 !== cT ? cT : "ws";
      if ("ws" !== lT) throw new Error(`seat reservation asks for the ${lT} transport`);
      const {
        secure: MT,
        host: KT,
        pathname: OT,
        search: yT
      } = jT(TT), fT = new URLSearchParams(yT);
      fT.append("sessionId", kT.sessionId), kT.reconnectionToken && fT.append("reconnectionToken", kT.reconnectionToken);
      return `${MT?"wss":"ws"}://${kT.room.publicAddress||`${KT}${OT}`}/${kT.room.processId}/${kT.room.roomId}?${fT.toString()}`
    }
    async function hT(TT, kT, cT) {
      var fT;
      let IT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const jT = null !== (fT = IT.sleep) && void 0 !== fT ? fT : lT.e,
        tT = new MT.c(IT.signal),
        hT = new yT.d(OT.c, (() => {
          (0, MT.f)(tT.controller, new OT.f)
        })),
        {
          signal: DT
        } = tT;
      try {
        return await (0, KT.e)((() => async function(TT, kT, cT, lT) {
          var KT;
          const {
            signal: OT,
            sleep: yT
          } = lT, fT = vT(TT, "joinOrCreate", kT), IT = JSON.stringify(cT);
          let jT = null;
          for (let vT = 0; vT < AT; vT++) {
            var tT;
            if (vT > 0) await yT(null !== (tT = CT[vT - 1]) && void 0 !== tT ? tT : 1500, OT);
            let TT;
            (0, MT.l)(OT);
            try {
              TT = await QT(fT, IT, lT)
            } catch (hT) {
              (0, MT.l)(OT), jT = NT(hT);
              continue
            }
            const {
              response: kT,
              answer: cT,
              refusal: KT,
              lost: AT
            } = TT;
            if (null === AT) {
              if (null !== KT) throw ST(KT, cT);
              if (kT.ok && null !== cT && PT(cT)) return cT;
              jT = new xT.t(`seat request answered HTTP ${kT.status}${null===cT?" without JSON":" without a seat"}`, !1)
            } else jT = NT(AT.error)
          }
          throw null !== (KT = jT) && void 0 !== KT ? KT : new xT.t("seat request made no attempt", !1)
        }(TT, kT, cT, {
          ...IT,
          signal: DT,
          sleep: jT
        })), DT, jT)
      } finally {
        hT.stop(), tT.unfollow()
      }
    }

    function NT(TT) {
      return new xT.t(TT instanceof Error ? TT.message : String(TT), !0, TT)
    }
    async function QT(TT, kT, cT) {
      var lT;
      const {
        signal: KT
      } = cT, OT = null !== (lT = cT.fetch) && void 0 !== lT ? lT : fetch, yT = await OT(TT, {
        method: "POST",
        headers: {
          ...IT,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: kT,
        credentials: "include",
        signal: KT
      }), {
        answer: fT,
        lost: xT
      } = await async function(TT) {
        try {
          const kT = await TT.json();
          return {
            answer: "object" === typeof kT && null !== kT ? kT : null,
            lost: null
          }
        } catch (kT) {
          return {
            answer: null,
            lost: kT instanceof SyntaxError ? null : {
              error: kT
            }
          }
        }
      }(yT), AT = null !== fT && "string" === typeof fT.error ? fT.error : null;
      var CT;
      null !== AT && (null === (CT = cT.onRefusal) || void 0 === CT || CT.call(cT));
      return (0, MT.l)(KT), {
        response: yT,
        answer: fT,
        refusal: AT,
        lost: xT
      }
    }

    function ST(TT, kT) {
      return new xT.l(TT, "number" === typeof(null === kT || void 0 === kT ? void 0 : kT.code) ? kT.code : 0, (0, fT.t)(TT).text)
    }
    class DT extends Error {
      constructor(TT, kT) {
        super(TT), this.code = kT, this.name = "SeatHttpError"
      }
    }
    async function aT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: MT,
        answer: KT,
        refusal: OT,
        lost: yT
      } = await QT(vT(TT, "reconnect", kT), JSON.stringify({
        reconnectionToken: cT
      }), lT);
      if (null !== yT) throw yT.error;
      if (!MT.ok) {
        const TT = null !== KT && "number" === typeof KT.code && 0 !== KT.code ? KT.code : MT.status;
        throw new DT(`the seat's reconnect was refused: ${null!==OT&&void 0!==OT?OT:`HTTP ${MT.status}`}`, TT)
      }
      if (null !== OT) throw ST(OT, KT);
      if (null === KT || !PT(KT)) throw new Error("the seat's reconnect answered " + (null === KT ? "without JSON" : "without a seat"));
      return {
        ...KT,
        reconnectionToken: cT
      }
    }
    const FT = 10;

    function rT(TT) {
      if (TT.byteLength < 2 || TT[0] !== FT) return null;
      const kT = 2 + TT[1];
      return kT > TT.byteLength ? null : (new TextDecoder).decode(TT.subarray(2, kT))
    }

    function PT(TT) {
      const kT = TT.room;
      return "string" === typeof TT.sessionId && "object" === typeof kT && null !== kT && "string" === typeof kT.roomId && "string" === typeof kT.processId && "string" === typeof kT.name
    }
  },
  40219: (TT, kT, cT) => {
    cT.d(kT, {
      $: () => FT,
      B: () => DT,
      F: () => aT,
      I: () => hT,
      K: () => mT,
      M: () => HT,
      Q: () => vT,
      S: () => GT,
      W: () => QT,
      X: () => NT,
      Y: () => ST,
      b: () => MT,
      e: () => eT,
      g: () => oT,
      h: () => jT,
      i: () => tT,
      k: () => zT,
      n: () => PT,
      p: () => bT,
      q: () => wT,
      t: () => rT,
      x: () => JT
    });
    var lT = cT(2927);
    const MT = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function KT(TT, kT) {
      return !ArrayBuffer.isView(TT) || TT instanceof DataView ? Array.isArray(TT) ? TT.map((TT => kT(TT))) : TT : Array.from(TT, (TT => kT(TT)))
    }

    function OT(TT) {
      if ("string" !== typeof TT) return TT;
      for (let kT = 0; kT < TT.length; kT++) {
        const cT = TT.charCodeAt(kT);
        if (cT >= 55296 && cT <= 57343) return fT.decode(yT.encode(TT))
      }
      return TT
    }
    const yT = new TextEncoder,
      fT = new TextDecoder;

    function xT(TT) {
      return TT
    }
    let IT;

    function AT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [OT(TT.dO), OT(TT.LO)]
    }

    function CT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [KT(TT.sl, xT), KT(TT.CO, xT)]
    }

    function jT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.vI), OT(kT.tI)];
      var kT
    }

    function vT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [kT.id, kT.xI];
      var kT
    }

    function tT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [kT.jl, OT(kT.vl), kT.tl, OT(kT.Ql), kT.Fl, kT.rl, kT.HO, OT(kT.eO), OT(kT.GO)];
      var kT
    }

    function hT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [KT(kT.Lx, xT), kT.Rx];
      var kT
    }

    function NT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [KT(kT.MI, (TT => OT(TT))), OT(kT.KI), kT.OI];
      var kT
    }

    function QT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [KT(kT.gx, xT), OT(kT.Ux), kT.Yx];
      var kT
    }

    function ST(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.Qc), OT(kT.Sc)];
      var kT
    }

    function DT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.xy)];
      var kT
    }

    function aT(TT) {
      return OT(TT)
    }

    function FT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.uO), OT(kT.XO), OT(kT.dO), OT(kT.LO)];
      var kT
    }

    function rT(TT) {
      return AT(TT)
    }

    function PT(TT) {
      return AT(TT)
    }

    function wT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.XI)];
      var kT
    }

    function mT(TT) {
      return TT
    }

    function bT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.cI), OT(kT.lI)];
      var kT
    }

    function zT(TT) {
      return OT(TT)
    }

    function JT(TT) {
      return CT(TT)
    }

    function oT(TT) {
      return CT(TT)
    }

    function HT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.yI)];
      var kT
    }

    function eT(TT) {
      return (IT ??= (0, lT.e)().map((TT => TT.name)), IT).map((kT => {
        return "string" === typeof(cT = TT[kT]) ? OT(cT) : KT(cT, xT);
        var cT
      }))
    }

    function GT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [kT.dI, kT.LI, kT.RI];
      var kT
    }
  },
  40653: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(40658),
      MT = cT(40649);
    const KT = new class {
      constructor(TT) {
        this.pack = TT, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, TT.onWanted((() => {
          this.release()
        }))
      }
      setGame(TT) {
        if (void 0 === TT && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const kT = this.inGame();
        if (this.game = TT, this.update(), this.inGame() !== kT)
          for (const cT of this.gameListeners) cT()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(TT) {
        return this.gameListeners.add(TT), () => {
          this.gameListeners.delete(TT)
        }
      }
      unwantedLeave(TT) {
        TT && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(TT) {
        null !== TT && TT === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const TT = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, TT && this.setGame(void 0)
      }
      setSettled(TT) {
        this.settle = TT, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, lT.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(MT.f)
  },
  40489: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      followPageUiPack: () => ux,
      packForGame: () => Zx,
      playWasmGame: () => ix,
      prefetchWasmPreviews: () => ny,
      setGamePackConfirm: () => lx,
      startWasmPlay: () => gx,
      startWasmPreviews: () => Wy
    });
    var lT = cT(218),
      MT = cT(1252),
      KT = cT(184),
      OT = cT(38888),
      yT = cT(1953),
      fT = cT(36),
      xT = cT(4663),
      IT = cT(1316),
      AT = cT(1734),
      CT = cT(1327),
      jT = cT(39031),
      vT = cT(1303),
      tT = cT(39042),
      hT = cT(38963),
      NT = cT(36284),
      QT = cT(38868),
      ST = cT(8924),
      DT = cT(38879),
      aT = cT(40318),
      FT = cT(4748),
      rT = cT(40215),
      PT = cT(40290),
      wT = cT(40219);
    const mT = {
      states: {
        health: !0,
        aura: !0,
        hotbar: !0,
        heldItemAim: !0,
        crouching: !0,
        flight: !0,
        gliderBoostFuel: !0,
        crosshairTarget: !0,
        inventory: !0,
        crafting: !0,
        stationItems: !0,
        itemInfo: !0,
        creativeVisibility: !0,
        fullInventory: !0,
        replay: !0,
        replayEdits: !0,
        replayRecorder: !0,
        replayVideoExporting: !0,
        players: !0,
        lobbyLeaderboardRows: !0,
        freeCamera: !0
      },
      events: {
        hotbarSlotRequested: !0,
        hotbarScrolled: !0,
        numberKeyPressed: !0,
        shotDamageToShow: !0,
        chatReceived: !0,
        chestToggled: !0,
        chestRefreshed: !0,
        inventorySynced: !0,
        inventoryDropRequested: !0,
        enchantingTableOpened: !0,
        localEffectUpdated: !0,
        kill: !0,
        replayUiActionRequested: !0,
        replayViewerRequested: !0,
        cosmeticsUpdated: !0,
        boardEditRequested: !0,
        ironChestOpenRequested: !0
      },
      commands: {
        clickCodeBlock: !0,
        selectHotbarSlot: !0,
        setCrosshairInteractPrompt: !0,
        sendChatMessage: !0,
        removeInventoryItem: !0,
        swapInventorySlots: !0,
        moveInventoryItem: !0,
        quickMoveInventoryItem: !0,
        setInventoryOpen: !0,
        closeChest: !0,
        focusCrafting: !0,
        craftRecipe: !0,
        salvageItem: !0,
        enchantItem: !0,
        changeIronChestPasskey: !0,
        openIronChest: !0,
        completeTask: !0,
        setServerCookie: !0,
        answerUiRequest: !0,
        requestLeaderboard: !0,
        chooseRewardedAd: !0,
        ignorePlayer: !0,
        reportPlayer: !0,
        reportWorldCodeChat: !0,
        requestDiscordReportKey: !0,
        reportLobbyOrGame: !0,
        updateMyCosmetic: !0,
        holdEmoteWheel: !0,
        writeOnBoard: !0,
        writeBook: !0,
        writeNameTag: !0,
        setCustomLobbyBlock: !0,
        sendCodeCollab: !0,
        replayAction: !0,
        setReplayPlaying: !0,
        seekReplay: !0,
        setReplayCameraMode: !0,
        syncReplayCameraMode: !0,
        setReplayCameraKeyframe: !0,
        moveReplayCameraKeyframe: !0,
        deleteReplayCameraKeyframes: !0,
        setReplayPlaybackMark: !0,
        cropReplay: !0,
        holdReplayForShaderPackFailure: !0,
        exportReplayVideo: !0,
        toggleRecording: !0,
        saveClip: !0,
        setRecorderPrefs: !0,
        setReplayViewerOpen: !0,
        recordFlyingMiddleText: !0,
        dragReplayCamera: !0,
        moveReplayFreecam: !0,
        holdReplayFreecamVertical: !0,
        setShopOpen: !0,
        buyShopItem: !0,
        setFreeCameraMovesFly: !0,
        setBlockHighlight: !0,
        lobbyManage: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        targetedBlockPos: !0,
        blockAtViewPoint: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0,
        freeCameraPos: !0
      }
    };

    function bT(TT) {
      const kT = {
        ...PT.b[TT]
      };
      for (const cT of Object.keys(mT[TT])) delete kT[cT];
      return kT
    }

    function zT() {
      var TT, kT;
      return null === (TT = null === (kT = (0, rT.g)()) || void 0 === kT ? void 0 : kT.localPlayerAlive()) || void 0 === TT || TT
    }

    function JT() {
      var TT, kT;
      return null !== (TT = null === (kT = (0, rT.g)()) || void 0 === kT ? void 0 : kT.localDeaths()) && void 0 !== TT ? TT : null
    }
    const oT = {
        current: zT,
        watch: TT => {
          let kT = zT(),
            cT = JT();
          return (0, FT.s)((() => {
            const lT = zT(),
              MT = JT(),
              KT = null !== MT && null !== cT && MT !== cT;
            cT = MT, KT ? (kT || TT(!0), TT(!1), lT && TT(!0), kT = lT) : lT !== kT && (kT = lT, TT(lT))
          }))
        }
      },
      HT = {
        states: {
          ...bT("states"),
          localPlayerAlive: oT
        },
        events: {
          ...bT("events"),
          localPlayerAliveSet: {
            watch: oT.watch
          }
        },
        commands: {
          ...bT("commands"),
          respawn: () => {
            var TT;
            null === (TT = (0, rT.g)()) || void 0 === TT || TT.respawn()
          },
          playEmote: TT => {
            var kT;
            null === (kT = (0, rT.g)()) || void 0 === kT || kT.send(wT.b.PlayEmote, (0, wT.B)({
              xy: TT
            }))
          },
          applyTemporaryThirdPerson: TT => {
            var kT;
            let {
              durationMs: cT
            } = TT;
            null === (kT = (0, rT.g)()) || void 0 === kT || kT.thirdPersonFor(cT)
          },
          bindCustomButtonKeys: TT => {
            var kT;
            null === (kT = (0, rT.g)()) || void 0 === kT || kT.bindCustomButtonKeys(TT)
          },
          pressCustomButton: TT => {
            var kT;
            let {
              id: cT,
              down: lT
            } = TT;
            null === (kT = (0, rT.g)()) || void 0 === kT || kT.pressCustomButton(cT, lT)
          },
          setLookSensitivity: () => {},
          wakeUp: TT => {
            const kT = (0, wT.M)({
                yI: TT
              }),
              cT = () => {
                const TT = (0, rT.g)();
                return !(null !== TT && void 0 !== TT && TT.isSessionLive) || TT.send(wT.b.StopSleeping, kT)
              };
            if (!cT()) {
              const TT = (0, FT.s)((() => {
                cT() && TT()
              }))
            }
          },
          setCameraZoom: TT => {
            var kT;
            null === (kT = (0, rT.g)()) || void 0 === kT || kT.setCameraZoom(TT)
          }
        },
        queries: bT("queries"),
        lookups: {
          ...bT("lookups"),
          cameraZoom: () => {
            var TT, kT;
            return null !== (TT = null === (kT = (0, rT.g)()) || void 0 === kT ? void 0 : kT.cameraZoom()) && void 0 !== TT ? TT : 0
          }
        }
      };
    var eT = cT(40494),
      GT = cT(40497),
      VT = cT(40503),
      ET = cT(40515),
      ZT = cT(1265),
      uT = cT(127),
      XT = cT(4508),
      dT = cT(3710),
      LT = cT(1183);
    const RT = {
      Xx: () => (0, ZT.c)(),
      inbuiltOverwritten: () => XT.g,
      reflectApplyHit: () => LT.b,
      definerHit: () => uT.currentUrl.c,
      emitReplaced: () => (0, fT.c)(),
      confirmMesh: () => (0, dT.c)(),
      confirmMeshHitStack: () => (0, dT.d)()
    };
    var gT = cT(40505),
      UT = cT(40526);
    var YT = cT(31),
      BT = cT(1960),
      WT = cT(2009),
      nT = cT(1663),
      pT = cT(2056),
      iT = cT(1195),
      qT = cT(1261),
      sT = cT(40477);

    function Tk() {
      return qT.f.get().getCurrentLanguageCode()
    }

    function kk(TT) {
      const kT = () => {
        TT({
          translate: (TT, kT) => (0, iT.t)(Tk(), TT, kT),
          keyBindingText: TT => {
            const kT = (0, WT.w)(TT, YT.e.get("isTouchScreen"));
            return null !== kT ? (0, iT.w)(Tk(), kT.translationKey, kT.params) : (0, WT.q)((0, WT.u)(TT))
          },
          isFriend: pT.g,
          hiddenNames: BT.c.shown,
          loadsFontRest: (0, sT.c)(Tk())
        })
      };
      let cT = !1;
      const lT = () => {
          const TT = Tk();
          (0, iT.j)(TT).then((() => {
            cT || TT !== Tk() || kT()
          }))
        },
        MT = () => nT.b.getSocialState().friends.map((TT => TT.name.toLowerCase())).sort().join(" ");
      let KT = MT();
      kT(), lT();
      const OT = [(0, qT.j)((() => {
        kT(), lT()
      })), (0, fT.m)("customBindingsChanged", kT), (0, fT.m)("appManagerUpdated|isTouchScreen", kT), (0, pT.d)((() => {
        const TT = MT();
        TT !== KT && (KT = TT, kT())
      })), BT.c.subscribe(kT)];
      return () => {
        cT = !0;
        for (const TT of OT) TT()
      }
    }
    var ck = cT(623),
      lk = cT(1018),
      Mk = cT(1982),
      Kk = cT(328),
      Ok = cT(3679),
      yk = cT(36113),
      fk = cT(3684),
      xk = cT(38561),
      Ik = cT(4681),
      Ak = cT(40409),
      Ck = cT(666),
      jk = cT(636),
      vk = cT(685),
      tk = cT(694),
      hk = cT(1974),
      Nk = cT(3713),
      Qk = cT(3210);
    let Sk = null;
    var Dk = cT(1202),
      ak = cT(1833),
      Fk = cT(4413),
      rk = cT(3378),
      Pk = cT(63),
      wk = cT(326),
      mk = cT(307),
      bk = cT(40339),
      zk = cT(4755);
    var Jk = cT(40528);
    class Hk {
      constructor(TT, kT) {
        this.showView = TT, this.holdForAd = kT
      }
      pointerUnlockRequestsChanged() {
        (0, bk.z)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, bk.o)())
        }]
      }
      setGameViewShown(TT) {
        this.showView(TT)
      }
      setGameView(TT) {
        (0, Jk.n)(TT)
      }
      videoAdHold(TT, kT) {
        this.holdForAd(TT, kT)
      }
    }
    class ek {
      leave(TT) {
        ! function(TT) {
          if (null !== (0, CT.b)().websocketUrl) try {
            (0, FT.G)().leaveGame(TT)
          } finally {
            (0, CT.l)({
              websocketUrl: null
            })
          }
        }(TT)
      }
      isReplay() {
        return !1
      }
    }
    class Gk {
      watchFrameStarts(TT) {
        return (0, FT.n)(TT)
      }
      watchFrames(TT) {
        return (0, FT.m)(TT)
      }
      watchTicks(TT) {
        return (0, FT.s)(TT)
      }
    }
    var Vk = cT(40536);

    function Ek(TT) {
      return TT >= 0 ? Math.min(1, TT) : 0
    }

    function Zk(TT, kT) {
      const {
        fade: cT
      } = TT;
      return null === cT || kT - cT.at >= cT.ms ? TT.volume : cT.from + (TT.volume - cT.from) * Math.max(0, (kT - cT.at) / cT.ms)
    }

    function uk(TT) {
      const kT = Object.entries(TT),
        cT = new Uint32Array(kT.length);
      let lT = 0;
      for (const [OT, [, yT]] of kT.entries()) cT[OT] = yT.length, lT += yT.length;
      const MT = new Float64Array(3 * lT);
      let KT = 0;
      for (const [, OT] of kT)
        for (const TT of OT) MT.set(TT, KT), KT += 3;
      return {
        blocks: kT.map((TT => {
          let [kT] = TT;
          return kT
        })).join("\0"),
        counts: cT,
        values: MT
      }
    }
    class Xk {
      constructor(TT, kT) {
        this.core = TT, this.warn = kT, this.latest = 0
      }
      async feed() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dk;
        const kT = ++this.latest;
        let cT;
        try {
          cT = await TT()
        } catch (lT) {
          return void(this.core.isStopped || kT !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", lT))
        }
        kT === this.latest && (this.core.setBlockColours(cT) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function dk() {
      return uk((await cT.e(201).then((() => cT(34029)))).averageColors)
    }
    var Lk = cT(4761),
      Rk = cT(4769),
      gk = cT(40273),
      Uk = cT(36077),
      Yk = cT(40465),
      Bk = cT(608),
      Wk = cT(36855),
      nk = cT(606),
      pk = cT(339),
      ik = cT(40440);
    const qk = [3e4, 12e4, 3e5];
    class sk extends Error {}
    const Tc = {
      mobTypes: Bk.o,
      vehicleTypes: Wk.b,
      mobAiStates: Bk.n,
      playerPoses: nk.o
    };
    var kc = cT(40426),
      cc = cT(40542),
      lc = cT(40550),
      Mc = cT(40553),
      Kc = cT(3402),
      Oc = cT(38859),
      yc = cT(4787),
      fc = cT(2435);
    const xc = fc.s.KeysDisabled | fc.s.LookFrozen | fc.s.ClicksSuppressed,
      Ic = Kc.h;
    var Ac = (0, Mc.e)("resumingConn");
    class Cc {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = TT, this.now = kT, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Ac, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Oc.b({
          reconnect: TT => this.reconnect(TT),
          isLive: () => TT.isLive(),
          onReconnected: kT => {
            this.landed = kT, TT.onReconnected(kT), this.landIfResumed()
          },
          onGaveUp: (kT, cT) => {
            this.abortAttempt(), TT.onGaveUp(kT, cT)
          },
          freeze: kT => {
            TT.ZD(kT), (0, yc.h)(xc, kT ? xc : 0, "reconnectFreeze")
          },
          releaseSeat: TT => {
            this.releaseSeat(TT)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, lc.c)(this, Ac)[Ac]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(TT) {
        let {
          conn: kT,
          graceMs: cT,
          sessionBased: lT,
          replayOffer: MT
        } = TT;
        this.session.onInitialInfo(cT, lT), this.isResuming() && (this.initialInfoConn = kT, this.initialInfoOffer = MT, this.landIfResumed())
      }
      onResumeComplete(TT) {
        0 !== TT && (TT === (0, lc.c)(this, Ac)[Ac] ? ((0, lc.c)(this, Ac)[Ac] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = TT))
      }
      onDropped(TT) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, lc.c)(this, Ac)[Ac] = 0, this.session.onConnectionLost(TT)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, lc.c)(this, Ac)[Ac] = 0, this.session.end()
      }
      reconnect(TT) {
        const kT = this.attempt;
        if (null !== kT && this.awaitingJoinRoom(kT)) return kT.result;
        this.abortAttempt();
        const cT = new AbortController,
          lT = this.drops,
          MT = {
            attachedAt: null
          },
          KT = this.shell.reconnect(TT, cT.signal, (() => {
            MT.attachedAt = this.now()
          })).then((TT => {
            if (this.clearAttempt(OT), this.drops !== lT) throw new Error("the resumed room dropped before its attempt settled");
            return TT
          }), (TT => {
            throw this.clearAttempt(OT), TT
          })),
          OT = {
            abort: cT,
            socket: MT,
            result: KT
          };
        return this.attempt = OT, KT
      }
      clearAttempt(TT) {
        this.attempt === TT && (this.attempt = null)
      }
      abortAttempt() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const kT = this.attempt;
        this.attempt = null, null === kT || void 0 === kT || kT.abort.abort(TT)
      }
      awaitingJoinRoom(TT) {
        const kT = TT.socket.attachedAt;
        return null !== kT && this.now() - kT < Ic
      }
      releaseSeat(TT) {
        const kT = this.attempt,
          cT = null !== kT && this.awaitingJoinRoom(kT);
        this.abortAttempt(new GT.r), cT || this.shell.releaseSeat(TT)
      }
      landIfResumed() {
        const TT = this.landed;
        if (null !== TT && TT.conn === this.initialInfoConn) {
          const kT = this.initialInfoOffer && this.completedEarlyConn !== TT.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !kT) return void this.session.onResumed();
          (0, lc.c)(this, Ac)[Ac] = TT.conn, this.session.onResuming()
        }
      }
    }
    var jc = cT(38861),
      vc = cT(40555),
      tc = cT(36299),
      hc = cT(36293),
      Nc = cT(4988),
      Qc = cT(4405),
      Sc = cT(3198),
      Dc = cT(40365),
      ac = cT(645),
      Fc = cT(39412),
      rc = cT(4481),
      Pc = cT(47),
      wc = cT(40557),
      mc = cT(40599),
      bc = cT(4432),
      zc = cT(2443),
      Jc = cT(1654),
      oc = cT(1685),
      Hc = cT(1292),
      ec = cT(133),
      Gc = cT(2826),
      Vc = cT(2452),
      Ec = cT(4782);
    const Zc = new Set([Lk.rb.KeyDown, Lk.rb.MouseMove, Lk.rb.MouseDown, Lk.rb.Wheel, Lk.rb.TouchStart, Lk.rb.TouchMove]);

    function uc(TT) {
      return (TT.shiftKey ? Lk.Hb.Shift : 0) | (TT.ctrlKey ? Lk.Hb.Ctrl : 0) | (TT.altKey ? Lk.Hb.Alt : 0) | (TT.metaKey ? Lk.Hb.Meta : 0) | ("repeat" in TT && TT.repeat ? Lk.Hb.Repeat : 0) | (TT.isTrusted ? 0 : Lk.Hb.Untrusted)
    }

    function Xc(TT) {
      return "touchOnly" !== (0, ec.b)() && "function" === typeof TT.requestPointerLock
    }

    function dc(TT) {
      return 0 === TT.button ? TT.altKey ? Ec.k["Alt+Left Click"] : Ec.k.Mouse1 : 1 === TT.button ? Ec.k.Mouse2 : Ec.k.Mouse3
    }
    const Lc = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Rc = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      gc = 32768,
      Uc = 1;

    function Yc(TT) {
      return Math.min(Math.max(Math.round(TT), 0), 65535)
    }

    function Bc(TT, kT, cT) {
      const lT = [],
        MT = (TT, kT, cT, MT) => {
          const KT = TT => {
            (0, oc.w)(TT) || cT(TT)
          };
          TT.addEventListener(kT, KT, MT), lT.push((() => {
            TT.removeEventListener(kT, KT, MT)
          }))
        },
        KT = {
          capture: !0,
          passive: !0
        },
        OT = (TT, cT, lT, MT, KT) => (!(0, Vc.e)() || !Zc.has(TT)) && (kT(TT, cT, lT, MT, KT), !0),
        yT = () => document.pointerLockElement === TT,
        fT = (0, Gc.e)(),
        xT = TT => {
          TT.ctrlKey && cT.ctrlCombosAreGames() && !(0, yc.f)(TT.target) && TT.preventDefault()
        },
        IT = (TT, lT, MT) => {
          cT.inspect(TT, lT, !1), kT(Lk.rb.KeyUp, lT, 0, 0, (0, zc.w)(MT, TT.timeStamp)), cT.keyReleased(lT)
        },
        AT = new Map,
        CT = (TT, kT, cT) => TT[cT] || ("AltRight" === kT || "ControlLeft" === kT) && TT.getModifierState("AltGraph"),
        jT = new Map,
        vT = () => {
          AT.clear(), jT.clear()
        },
        tT = TT => {
          if (document.hasFocus())
            for (const [kT, cT] of jT) jT.delete(kT), CT(TT, kT, cT) || (AT.delete(kT), IT(TT, Ec.k[kT], uc(TT)))
        };
      TT.tabIndex = -1;
      let hT = 0,
        NT = 0;
      const QT = () => {
        const kT = TT.getBoundingClientRect();
        hT = kT.left, NT = kT.top
      };
      let ST = "mouse";
      const DT = () => !yT() && ("mouse" === ST || !cT.touchUiShown()),
        aT = (TT, kT, cT) => {
          const lT = (Yc(TT.clientX - hT) | Yc(TT.clientY - NT) << 16) >>> 0;
          OT(Lk.rb.MouseMove, Lk.Jb.Point, kT, cT, lT)
        };
      let FT = !1,
        rT = 0;
      const PT = () => {
        FT && (FT = !1, cT.viewShown() && (0, bk.O)())
      };
      lT.push((() => {
        clearTimeout(rT)
      })), MT(window, "keydown", (TT => {
        "Escape" === TT.key ? (0, bk.E)(!0) : TT.repeat || (0, yc.f)(TT.target) || (FT = !0, clearTimeout(rT), rT = window.setTimeout(PT, 0))
      }), KT), MT(window, "keydown", (TT => {
        PT(), xT(TT), tT(TT);
        const kT = Ec.k[TT.code];
        if ("number" !== typeof kT || !cT.viewShown()) return;
        const lT = (0, yc.f)(TT.target);
        lT || !cT.prevents(kT) && !Lc.has(TT.code) || TT.preventDefault(), TT.repeat || cT.inspect(TT, kT, !0), OT(Lk.rb.KeyDown, kT, 0, 0, (0, zc.w)(uc(TT), TT.timeStamp)) && AT.set(TT.code, kT), lT || cT.keyPressed(kT)
      }), {
        capture: !1,
        passive: !1
      }), MT(window, "keyup", (TT => {
        "Escape" === TT.key && (0, bk.E)(!1), xT(TT), AT.delete(TT.code), jT.delete(TT.code), tT(TT);
        const kT = Ec.k[TT.code];
        "number" === typeof kT && IT(TT, kT, uc(TT))
      }), {
        capture: !0,
        passive: !1
      }), MT(window, "mousemove", (TT => {
        "mouse" === ST && DT() ? aT(TT, TT.movementX, TT.movementY) : yT() ? OT(Lk.rb.MouseMove, Lk.Jb.Stamped, TT.movementX, TT.movementY, (0, zc.w)(0, TT.timeStamp)) : OT(Lk.rb.MouseMove, 0, TT.movementX, TT.movementY, 0)
      }), KT);
      let wT = 0,
        mT = 0;
      const bT = [];
      let zT = !1,
        JT = !1;
      MT(TT, "mousedown", (TT => {
        if ((0, Vc.e)()) return;
        tT(TT);
        const lT = 1 << TT.button;
        if (!yT() && (0, bk.K)() && (0, bk.g)() && (JT = !0, !zT)) return void(wT |= lT);
        wT &= ~lT;
        const MT = TT.button <= 2 ? dc(TT) : void 0;
        void 0 !== MT && (bT[TT.button] = MT, cT.inspect(TT, MT, !0)), DT() && aT(TT, 0, 0), kT(Lk.rb.MouseDown, TT.button, TT.clientX, TT.clientY, (0, zc.w)(uc(TT), TT.timeStamp)), mT |= lT, void 0 !== MT && cT.keyPressed(MT)
      }), KT), MT(window, "mouseup", (TT => {
        var lT;
        tT(TT);
        const MT = 1 << TT.button,
          KT = 0 !== (wT & ~mT & MT);
        if (wT &= ~MT, mT &= ~MT, KT) return;
        const OT = TT.button <= 2 ? null !== (lT = bT[TT.button]) && void 0 !== lT ? lT : dc(TT) : void 0;
        void 0 !== OT && cT.inspect(TT, OT, !1), kT(Lk.rb.MouseUp, TT.button, TT.clientX, TT.clientY, (0, zc.w)(uc(TT), TT.timeStamp)), void 0 !== OT && cT.keyReleased(OT)
      }), KT), MT(TT, "contextmenu", (TT => {
        TT.preventDefault()
      }), {
        passive: !1
      });
      const oT = TT => {
        (yT() || (0, bk.m)() && (0, Hc.q)()) && (TT.ctrlKey || fT && !document.fullscreenElement) && TT.preventDefault()
      };
      MT(TT, "wheel", (TT => {
        oT(TT), tT(TT), OT(Lk.rb.Wheel, TT.deltaMode, TT.deltaX, TT.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const HT = {
          capture: !0,
          passive: !1
        },
        eT = TT => {
          TT ? window.addEventListener("wheel", oT, HT) : window.removeEventListener("wheel", oT, HT)
        };
      eT((0, bk.m)()), lT.push((0, bk.v)(eT)), lT.push((() => {
        eT(!1)
      }));
      const GT = new Map,
        VT = new Set,
        ET = TT => {
          const kT = "stylus" === TT.touchType;
          for (const cT of GT.values())
            if (!cT.touched && (kT || Math.abs(TT.clientX - cT.x) <= Uc && Math.abs(TT.clientY - cT.y) <= Uc)) return cT.touched = !0, !0;
          return !1
        },
        ZT = TT => 32767 & TT,
        uT = new Set,
        XT = TT => cT => {
          const lT = (0, zc.w)(uc(cT), cT.timeStamp);
          TT !== Lk.rb.TouchStart && TT !== Lk.rb.TouchMove || ((TT, cT) => {
            const lT = TT.touches;
            if (lT)
              for (const MT of uT) {
                let TT = !1;
                for (let kT = 0; kT < lT.length && !TT; kT++) TT = ZT(lT[kT].identifier) === MT;
                TT || (uT.delete(MT), kT(Lk.rb.TouchCancel, MT, 0, 0, cT))
              }
          })(cT, lT);
          const MT = cT.changedTouches;
          for (let kT = 0; kT < MT.length; kT++) {
            const cT = MT[kT];
            if (TT === Lk.rb.TouchStart && ET(cT) && VT.add(cT.identifier), VT.has(cT.identifier)) {
              TT !== Lk.rb.TouchEnd && TT !== Lk.rb.TouchCancel || VT.delete(cT.identifier);
              continue
            }
            const KT = ZT(cT.identifier),
              yT = OT(TT, KT, cT.clientX - hT, cT.clientY - NT, lT);
            TT === Lk.rb.TouchStart ? yT && uT.add(KT) : TT !== Lk.rb.TouchMove && uT.delete(KT)
          }
        },
        dT = XT(Lk.rb.TouchStart);
      MT(TT, "touchstart", (TT => {
        TT.preventDefault(), (0, Vc.e)() || (cT.touchStarting(), dT(TT))
      }), {
        passive: !1
      }), MT(TT, "touchmove", XT(Lk.rb.TouchMove), KT), MT(TT, "touchend", XT(Lk.rb.TouchEnd), KT), MT(TT, "touchcancel", XT(Lk.rb.TouchCancel), KT);
      const LT = TT => gc | 32767 & TT,
        RT = (TT, kT) => {
          OT(TT, LT(kT.pointerId), kT.clientX - hT, kT.clientY - NT, (0, zc.w)(uc(kT), kT.timeStamp))
        };
      MT(window, "pointerdown", (kT => {
        ST = kT.pointerType, "mouse" === kT.pointerType && kT.target !== TT && cT.viewShown() && (0, bk.Q)()
      }), KT), MT(TT, "pointerdown", (TT => {
        "pen" === TT.pointerType && 0 === TT.button && (0, bk.m)() && (0, Hc.q)() && (TT.preventDefault(), (0, Vc.e)() || (GT.set(TT.pointerId, {
          x: TT.clientX,
          y: TT.clientY,
          touched: !1
        }), cT.touchStarting(), RT(Lk.rb.TouchStart, TT)))
      }), {
        passive: !1
      }), MT(window, "pointermove", (TT => {
        ST = TT.pointerType, GT.has(TT.pointerId) && RT(Lk.rb.TouchMove, TT), "mouse" !== TT.pointerType && DT() && aT(TT, 0, 0)
      }), KT);
      const gT = TT => kT => {
        GT.delete(kT.pointerId) && RT(TT, kT)
      };
      MT(window, "pointerup", gT(Lk.rb.TouchEnd), KT), MT(window, "pointercancel", gT(Lk.rb.TouchCancel), KT);
      let UT = 0;
      const YT = () => {
          UT = 0, QT(), cT.resized()
        },
        BT = () => {
          const TT = cT.sizeCanvas();
          null !== TT && kT(Lk.rb.Resize, 0, TT.cssWidth, TT.cssHeight, (0, zc.k)(TT.renderScale)), QT(), cT.resized(), 0 === UT && (UT = requestAnimationFrame(YT))
        };
      MT(window, "resize", BT, KT), lT.push(cT.watchRenderScale(BT)), lT.push((() => {
        cancelAnimationFrame(UT)
      })), MT(window, "focus", (TT => {
        TT.isTrusted && (kT(Lk.rb.Focus, 0, 0, 0, 0), cT.viewShown() && (0, bk.Q)())
      }), {
        passive: !0
      });
      const WT = () => {
          (0, bk.E)(!1), wT = 0
        },
        nT = () => {
          uT.clear(), GT.clear(), VT.clear()
        };
      let pT = 0,
        iT = 0;
      MT(window, "blur", (lT => {
        WT(), (0, bk.l)();
        for (const TT of AT.keys()) {
          const kT = Rc.get(TT);
          void 0 !== kT && jT.set(TT, kT)
        }
        lT.isTrusted && ((TT => {
          for (const [cT, lT] of GT) kT(Lk.rb.TouchCancel, LT(cT), lT.x, lT.y, (0, zc.w)(0, TT));
          GT.clear()
        })(lT.timeStamp), kT(Lk.rb.Blur, Lk.n.KeepTouches, 0, 0, 0)), fT && lT.isTrusted && (clearTimeout(iT), iT = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const TT of AT.values()) IT(lT, TT, 0);
            vT()
          }
        }), 0)), clearTimeout(pT), pT = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Hc.q)() && cT.viewShown() && TT.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), lT.push((() => {
        clearTimeout(pT), clearTimeout(iT)
      })), MT(window, "mousedown", (kT => {
        fT && kT.isTrusted && !document.hasFocus() && (0, Hc.q)() && cT.viewShown() && (window.focus(), TT.focus({
          preventScroll: !0
        }))
      }), KT), MT(document, "visibilitychange", (() => {
        document.hidden ? (kT(Lk.rb.Blur, 0, 0, 0, 0), nT()) : document.hasFocus() && kT(Lk.rb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), lT.push((0, Vc.k)((() => {
        WT(), kT(Lk.rb.Blur, Lk.n.Release, 0, 0, 0), cT.keysReleased(), vT(), mT = 0, nT(), kT(Lk.rb.Joystick, 0, 0, 0, 0), document.hasFocus() && kT(Lk.rb.Focus, 0, 0, 0, 0)
      })));
      const qT = !cT.canLock(),
        sT = () => qT && !(0, bk.m)() ? Lk.bc.Lockless : Lk.bc.Released,
        Tk = () => {
          yT() && (zT = !1, JT = !1), kT(Lk.rb.PointerLock, yT() ? Lk.bc.Locked : sT(), 0, 0, 0), (0, bk.J)(yT())
        };
      return MT(document, "pointerlockchange", Tk, {
        passive: !0
      }), MT(document, "pointerlockerror", (() => {
        zT ||= JT, JT = !1, (0, bk.s)()
      }), {
        passive: !0
      }), qT && lT.push((0, bk.v)((() => {
        kT(Lk.rb.PointerLock, sT(), 0, 0, 0)
      }))), BT(), kT(document.hasFocus() ? Lk.rb.Focus : Lk.rb.Blur, 0, 0, 0, 0), Tk(), () => {
        for (const TT of lT.splice(0)) TT()
      }
    }
    var Wc = cT(9294),
      nc = cT(9284),
      pc = cT(2018);
    const ic = new Map(Ec.e.map(((TT, kT) => [TT, kT]))),
      qc = ["jump", "primary-fire", "alt-fire"],
      sc = ["primary-fire", "alt-fire"];

    function Tl(TT) {
      return `${pc.b}${TT}`
    }
    const kl = ["forward", "backward", "left", "right", "sprint", "jump"];

    function cl(TT) {
      const kT = [];
      for (const cT of TT) {
        const TT = "string" === typeof cT ? Ec.k[cT] : void 0;
        "number" === typeof TT && kT.push(TT)
      }
      return kT
    }
    class ll {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [TT, kT] of Object.entries(Ec.i)) this.keys.set(TT, kT);
        this.updateKeySets()
      }
      prevents(TT) {
        return this.preventKeys.has(TT)
      }
      moves(TT) {
        return this.movementKeys.has(TT)
      }
      checks(TT, kT) {
        return (kT ? this.checkedDown : this.checkedUp).has(TT)
      }
      sync(TT, kT) {
        for (const [cT, lT] of this.keys) {
          const MT = TT(Tl(cT)),
            KT = Array.isArray(MT) ? cl(MT) : Ec.i[cT];
          (KT.length !== lT.length || KT.some(((TT, kT) => TT !== lT[kT]))) && this.bind(cT, KT, kT)
        }
      }
      bind(TT, kT, cT) {
        const lT = ic.get(TT);
        if (void 0 !== lT) {
          cT(Lk.rb.Binding, 0, 0, 0, lT | Lk.m.Clear << 8);
          for (const KT of [...kT, ...null !== (MT = Ec.j[TT]) && void 0 !== MT ? MT : []]) {
            var MT;
            cT(Lk.rb.Binding, KT, 0, 0, lT | Lk.m.Add << 8)
          }
          this.keys.set(TT, kT), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const lT of Ec.l)
          for (const kT of null !== (TT = this.keys.get(Ec.e[lT])) && void 0 !== TT ? TT : []) {
            var TT;
            this.preventKeys.add(kT)
          }
        this.movementKeys.clear();
        for (const lT of kl)
          for (const TT of null !== (kT = this.keys.get(lT)) && void 0 !== kT ? kT : []) {
            var kT;
            this.movementKeys.add(TT)
          }
        for (const [lT, MT] of [
            [this.checkedDown, qc],
            [this.checkedUp, sc]
          ]) {
          lT.clear();
          for (const TT of MT)
            for (const kT of null !== (cT = this.keys.get(TT)) && void 0 !== cT ? cT : []) {
              var cT;
              lT.add(kT)
            }
        }
      }
    }
    var Ml = cT(4773),
      Kl = cT(36414);
    const Ol = "[bloxd-wasm-client]";

    function yl() {
      return "inGame" === YT.e.get("gameState") && !(0, Jc.u)()
    }
    let fl = null;

    function xl(TT, kT) {
      fl && kT.writePendingInput() && fl.push(function(TT, kT) {
        let cT = "";
        for (const lT of kT) cT += lT.toString(16).padStart(2, "0");
        return cT ? `${TT} ${cT}` : String(TT)
      }(TT, kT.rings.input.written()))
    }
    const Il = [];

    function Al(TT, kT, cT, lT) {
      TT === Lk.W.InputAction && lT === Lk.mb && Il.push(kT.getUint32(cT, !0))
    }
    var Cl = cT(40622),
      jl = cT(1199),
      vl = cT(36674);
    const tl = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: jl.wasmScreens
    };

    function hl(TT) {
      var kT, cT;
      let lT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [MT, KT] = TT.split(":");
      return (null !== (kT = null === (cT = tl[MT]) || void 0 === cT ? void 0 : cT[KT]) && void 0 !== kT ? kT : TT).replace(/\{\{(\w+)\}\}/g, ((TT, kT) => {
        var cT;
        return null !== (cT = lT[kT]) && void 0 !== cT ? cT : TT
      }))
    }

    function Nl(TT, kT) {
      (0, bc.d)();
      const cT = document.createElement("div");
      cT.setAttribute("role", "alertdialog"), cT.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const lT = document.createElement("div");
      lT.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const MT = document.createElement("h2");
      MT.textContent = hl(TT.title);
      const KT = document.createElement("p");
      if (KT.textContent = hl(TT.help, TT.helpValues), KT.style.whiteSpace = "pre-line", lT.append(MT, KT), TT.discordLink) {
        const TT = document.createElement("a");
        TT.href = vl.e, TT.target = "_blank", TT.rel = "noreferrer", TT.style.color = "#8ab4ff", TT.textContent = hl("wasmScreens:reportOnDiscord"), lT.append(TT)
      }
      const OT = document.createElement("div");
      return OT.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", lT.append(OT), cT.append(lT), document.body.append(cT), new Promise((lT => {
        const MT = TT => {
            null === kT || void 0 === kT || kT.removeEventListener("abort", KT), cT.remove(), lT(TT)
          },
          KT = () => {
            MT(!1)
          };
        null === kT || void 0 === kT || kT.addEventListener("abort", KT, {
          once: !0
        });
        const yT = (TT, kT) => {
          const cT = document.createElement("button");
          cT.textContent = hl(TT), cT.style.cssText = "padding:0.5rem 1.25rem;font:inherit", cT.addEventListener("click", (() => {
            MT(kT)
          })), OT.append(cT)
        };
        null !== TT.cancel && yT(TT.cancel, !1), yT(TT.confirm, !0)
      }))
    }
    var Ql = cT(40458);
    const Sl = 6e4,
      Dl = 3e5;
    var al = cT(3606);
    var Fl = cT(40348),
      rl = cT(649),
      Pl = cT(15);

    function wl(TT, kT) {
      const cT = Pl.gb.encode(kT);
      ! function(TT, kT) {
        let cT = kT >= 0 ? 2 * kT : 2 * -kT - 1;
        for (; cT >= 128;) TT.push(cT % 128 | 128), cT = Math.floor(cT / 128);
        TT.push(cT)
      }(TT, cT.length);
      for (const lT of cT) TT.push(lT)
    }
    let ml, bl, zl;
    (() => {
      const TT = [0, "r", "resolv", "e", "then", "postCo", "okies", 3, "length", 1, null, 2, 8, 16, 177, "c", "heA8yo", "U", 512, "b", "012345", void 0, "d", 15, 180, "f", 4, 6, 69, 82, 80, 174, 1023, "a", 63, 128, 12, 255, 187, 53, 32, 5, 24, 7, 18, 10, 19, 127, 64, 65535, 87, 120, !1, !0, "g", 217, 23, 77];

      function kT() {}
      const lT = (TT[0], Pl[TT[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        MT = (TT[0], Pl[TT[1]])("QkFCWUxPTg=="),
        KT = (TT[0], Pl[TT[1]])("QW5kZXNpdGU="),
        OT = (TT[0], Pl[TT[1]])("U21vb3RoIEdyYW5pdGU="),
        yT = (TT[0], Pl[TT[1]])("RGlvcml0ZQ=="),
        fT = async (kT, lT, MT, KT) => {
          const [{
            clientSideServerUrls: OT
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: yT
          }] = await Promise.all([Promise[TT[2] + TT[3]]()[TT[4]]((() => cT(1202))), Promise[TT[2] + TT[3]]()[TT[4]]((() => cT(1136)))]), fT = OT.getHttpUrlFromWebSocketUrl(kT.endpoint), xT = kT[TT[5] + TT[6]] === TT[10] ? TT[21] : await kT[TT[5] + TT[6]]();
          await yT("" + fT + lT, MT, {
            retries: KT
          }, xT)
        };
      ml = async (cT, lT) => {
        const KT = function(TT, kT, cT, lT) {
          const MT = [];
          wl(MT, TT), wl(MT, kT), wl(MT, cT);
          for (const KT of lT) MT.push(KT);
          return MT
        }(cT.game, cT.lobby, (TT[0], rl[TT[22]])(), lT);
        try {
          await fT(cT, "/persisted/keep-alive", {
            type: "Ov",
            data: KT
          }, TT[7])
        } catch (MT) {
          function yT(...kT) {
            var cT;
            IT(kT[TT[8]] = TT[0], cT = function(...kT) {
              IT(kT[TT[8]] = TT[9], this.DA = kT[TT[0]], this.length = TT[0], this.map = {}, this.head = TT[10], this.tail = TT[10])
            }, cT.prototype.get = function(...kT) {
              var cT;
              return IT(kT[TT[8]] = TT[9], cT = this.map[kT[TT[0]]]), cT ? (this.remove(cT), this.insert(cT.key, cT.val), cT.val) : -TT[9]
            }, cT.prototype.put = function(...kT) {
              IT(kT[TT[8]] = TT[11], this.map[kT[TT[0]]] ? (this.remove(this.map[kT[TT[0]]]), this.insert(kT[TT[0]], kT[TT[9]])) : this.length === this.DA ? (this.remove(this.head), this.insert(kT[TT[0]], kT[TT[9]])) : (this.insert(kT[TT[0]], kT[TT[9]]), this.length++))
            }, cT.prototype.remove = function(...kT) {
              IT(kT[TT[8]] = TT[9], kT[TT[9]] = kT[TT[0]].prev, kT[TT[11]] = kT[TT[0]].next), kT[TT[11]] && (kT[TT[11]].prev = kT[TT[9]]), kT[TT[9]] && (kT[TT[9]].next = kT[TT[11]]), this.head === kT[TT[0]] && (this.head = kT[TT[11]]), this.tail === kT[TT[0]] && (this.tail = kT[TT[9]]), delete this.map[kT[TT[0]].key]
            }, cT.prototype.insert = function(...kT) {
              IT(kT[TT[8]] = TT[11], kT[TT[11]] = new List(kT[TT[0]], kT[TT[9]]), this.tail ? (this.tail.next = kT[TT[11]], kT[TT[11]].prev = this.tail, this.tail = kT[TT[11]]) : (this.tail = kT[TT[11]], this.head = kT[TT[11]]), this.map[kT[TT[0]]] = kT[TT[11]])
            }, console.log(cT))
          }
          "B4ZBHgh" in kT && yT(), console.warn(MT)
        }
      };
      const xT = (...cT) => (cT[TT[8]] = TT[11], "bX_P3uk" in kT && function(...kT) {
        IT(kT[TT[8]] = TT[0], kT[-TT[50]] = function(...kT) {
          function cT(...kT) {
            return kT[TT[8]] = TT[9], fT(OT(CT(kT[TT[0]])))
          }

          function lT(...kT) {
            return kT[TT[8]] = TT[11], fT(yT(CT(kT[TT[0]]), CT(kT[TT[9]])))
          }

          function MT(...kT) {
            return kT[TT[8]] = TT[11], xT(yT(CT(kT[TT[0]]), CT(kT[TT[9]])))
          }

          function KT(...kT) {
            return kT[TT[8]] = TT[7], AT(yT(CT(kT[TT[0]]), CT(kT[TT[9]])), kT[TT[11]])
          }

          function OT(...kT) {
            return kT[TT[8]] = TT[9], vT(rT(jT(kT[TT[0]]), kT[TT[0]].length * TT[12]))
          }

          function yT(...kT) {
            IT(kT[TT[8]] = TT[11], kT[TT[11]] = jT(kT[TT[0]])), kT[TT[11]].length > TT[13] && (kT[TT[11]] = rT(kT[TT[11]], kT[TT[0]].length * TT[12]));
            var cT = Array(TT[13]),
              lT = Array(TT[13]);
            for (kT[-TT[14]] = TT[0]; kT[-TT[14]] < TT[13]; kT[-TT[14]]++) IT(cT[kT[-TT[14]]] = 909522486 ^ kT[TT[11]][kT[-TT[14]]], lT[kT[-TT[14]]] = 1549556828 ^ kT[TT[11]][kT[-TT[14]]]);
            return kT[TT[15]] = rT(cT.concat(jT(kT[TT[9]])), TT[18] + kT[TT[9]].length * TT[12]), vT(rT(lT.concat(kT[TT[15]]), function(...kT) {
              if (kT[TT[8]] = TT[7], kT[TT[0]] === TT[16] + TT[17]) return kT[TT[9]] + kT[TT[11]]
            }(TT[16] + TT[17], TT[18], 256)))
          }

          function fT(...cT) {
            cT[TT[8]] = TT[9];
            try {
              kT[TT[19]]
            } catch (lT) {
              kT[TT[19]] = TT[0]
            }
            for (IT(cT[TT[9]] = kT[TT[19]] ? TT[20] + "6789ABCDEF" : TT[20] + "6789abcdef", cT[TT[19]] = "", cT[TT[7]] = TT[21]), cT[TT[22]] = TT[0]; cT[TT[22]] < cT[TT[0]].length; cT[TT[22]]++) IT(cT[TT[7]] = cT[TT[0]].charCodeAt(cT[TT[22]]), cT[TT[19]] += cT[TT[9]].charAt(cT[TT[7]] >>> TT[26] & TT[23]) + cT[TT[9]].charAt(cT[TT[7]] & TT[23]));
            return cT[TT[19]]
          }

          function xT(...cT) {
            cT[TT[8]] = TT[9];
            try {
              kT[TT[15]]
            } catch (lT) {
              kT[TT[15]] = ""
            }
            for (IT(cT[-TT[28]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cT[TT[11]] = "", cT[-TT[24]] = cT[TT[0]].length), cT[TT[22]] = TT[0]; cT[TT[22]] < cT[-TT[24]]; cT[TT[22]] += TT[7])
              for (cT[TT[27]] = cT[TT[0]].charCodeAt(cT[TT[22]]) << TT[13] | (cT[TT[22]] + TT[9] < cT[-TT[24]] ? cT[TT[0]].charCodeAt(cT[TT[22]] + TT[9]) << TT[12] : TT[0]) | (cT[TT[22]] + TT[11] < cT[-TT[24]] ? cT[TT[0]].charCodeAt(cT[TT[22]] + TT[11]) : TT[0]), cT[TT[25]] = TT[0]; cT[TT[25]] < TT[26]; cT[TT[25]]++) cT[TT[22]] * TT[12] + cT[TT[25]] * TT[27] > cT[TT[0]].length * TT[12] ? cT[TT[11]] += kT[TT[15]] : cT[TT[11]] += cT[-TT[28]].charAt(cT[TT[27]] >>> TT[27] * (TT[7] - cT[TT[25]]) & TT[34]);
            return cT[TT[11]]
          }

          function AT(...kT) {
            var cT, lT, MT, KT;
            for (IT(kT[TT[8]] = TT[11], kT[TT[30]] = kT[TT[9]].length, kT[TT[19]] = Array()), kT[-TT[29]] = Array(Math.ceil(kT[TT[0]].length / TT[11])), cT = TT[0]; cT < kT[-TT[29]].length; cT++) kT[-TT[29]][cT] = kT[TT[0]].charCodeAt(cT * TT[11]) << TT[12] | kT[TT[0]].charCodeAt(cT * TT[11] + TT[9]);
            for (; kT[-TT[29]].length > TT[0];) {
              for (IT(KT = Array(), MT = TT[0]), cT = TT[0]; cT < kT[-TT[29]].length; cT++) IT(MT = (MT << TT[13]) + kT[-TT[29]][cT], lT = Math.floor(MT / kT[TT[30]]), MT -= lT * kT[TT[30]]), (KT.length > TT[0] || lT > TT[0]) && (KT[KT.length] = lT);
              IT(kT[TT[19]][kT[TT[19]].length] = MT, kT[-TT[29]] = KT)
            }
            for (kT[TT[22]] = "", cT = kT[TT[19]].length - TT[9]; cT >= TT[0]; cT--) kT[TT[22]] += kT[TT[9]].charAt(kT[TT[19]][cT]);
            for (kT[-TT[31]] = Math.ceil(kT[TT[0]].length * TT[12] / (Math.log(kT[TT[9]].length) / Math.log(TT[11]))), cT = kT[TT[22]].length; cT < kT[-TT[31]]; cT++) kT[TT[22]] = kT[TT[9]][TT[0]] + kT[TT[22]];
            return kT[TT[22]]
          }

          function CT(...kT) {
            var cT, lT;
            for (IT(kT[TT[8]] = TT[9], kT[TT[33]] = "", kT[TT[11]] = -TT[9]); ++kT[TT[11]] < kT[TT[0]].length;) IT(cT = kT[TT[0]].charCodeAt(kT[TT[11]]), lT = kT[TT[11]] + TT[9] < kT[TT[0]].length ? kT[TT[0]].charCodeAt(kT[TT[11]] + TT[9]) : TT[0]), 55296 <= cT && cT <= 56319 && 56320 <= lT && lT <= 57343 && IT(cT = 65536 + ((cT & TT[32]) << TT[45]) + (lT & TT[32]), kT[TT[11]]++), cT <= TT[47] ? kT[TT[33]] += String.fromCharCode(cT) : cT <= 2047 ? kT[TT[33]] += String.fromCharCode(192 | cT >>> TT[27] & 31, TT[35] | cT & TT[34]) : cT <= TT[49] ? kT[TT[33]] += String.fromCharCode(224 | cT >>> TT[36] & TT[23], TT[35] | cT >>> TT[27] & TT[34], TT[35] | cT & TT[34]) : cT <= 2097151 && (kT[TT[33]] += String.fromCharCode(240 | cT >>> TT[44] & TT[43], TT[35] | cT >>> TT[36] & TT[34], TT[35] | cT >>> TT[27] & TT[34], TT[35] | cT & TT[34]));
            return kT[TT[33]]
          }

          function jT(...kT) {
            for (IT(kT[TT[8]] = TT[9], kT[TT[38]] = Array(kT[TT[0]].length >> TT[11])), kT[TT[19]] = TT[0]; kT[TT[19]] < kT[TT[38]].length; kT[TT[19]]++) kT[TT[38]][kT[TT[19]]] = TT[0];
            for (kT[TT[19]] = TT[0]; kT[TT[19]] < kT[TT[0]].length * TT[12]; kT[TT[19]] += TT[12]) kT[TT[38]][kT[TT[19]] >> TT[41]] |= (kT[TT[0]].charCodeAt(kT[TT[19]] / TT[12]) & TT[37]) << TT[42] - kT[TT[19]] % TT[40];
            return kT[TT[38]]
          }

          function vT(...kT) {
            for (IT(kT[TT[8]] = TT[9], kT[TT[9]] = ""), kT[TT[39]] = TT[0]; kT[TT[39]] < kT[TT[0]].length * TT[40]; kT[TT[39]] += TT[12]) kT[TT[9]] += String.fromCharCode(kT[TT[0]][kT[TT[39]] >> TT[41]] >>> TT[42] - kT[TT[39]] % TT[40] & TT[37]);
            return kT[TT[9]]
          }

          function tT(...kT) {
            return kT[TT[8]] = TT[11], kT[TT[0]] >>> kT[TT[9]] | kT[TT[0]] << TT[40] - kT[TT[9]]
          }

          function hT(...kT) {
            return kT[TT[8]] = TT[11], kT[TT[0]] >>> kT[TT[9]]
          }

          function NT(...kT) {
            return kT[TT[8]] = TT[7], kT[TT[0]] & kT[TT[9]] ^ ~kT[TT[0]] & kT[TT[11]]
          }

          function QT(...kT) {
            return kT[TT[8]] = TT[7], kT[TT[0]] & kT[TT[9]] ^ kT[TT[0]] & kT[TT[11]] ^ kT[TT[9]] & kT[TT[11]]
          }

          function ST(...kT) {
            return kT[TT[8]] = TT[9], tT(kT[TT[0]], TT[11]) ^ tT(kT[TT[0]], 13) ^ tT(kT[TT[0]], 22)
          }

          function DT(...kT) {
            return kT[TT[8]] = TT[9], tT(kT[TT[0]], TT[27]) ^ tT(kT[TT[0]], 11) ^ tT(kT[TT[0]], 25)
          }

          function aT(...kT) {
            return kT[TT[8]] = TT[9], tT(kT[TT[0]], TT[43]) ^ tT(kT[TT[0]], TT[44]) ^ hT(kT[TT[0]], TT[7])
          }

          function FT(...kT) {
            return kT[TT[8]] = TT[9], tT(kT[TT[0]], 17) ^ tT(kT[TT[0]], TT[46]) ^ hT(kT[TT[0]], TT[45])
          }

          function rT(...cT) {
            var lT, MT, KT, OT, yT, fT, xT, AT, CT, jT, vT, tT;
            for (IT(cT[TT[8]] = TT[11], cT[TT[11]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), cT[TT[47]] = new Array(TT[48])), IT(cT[TT[0]][cT[TT[9]] >> TT[41]] |= TT[35] << TT[42] - cT[TT[9]] % TT[40], cT[TT[0]][(cT[TT[9]] + TT[48] >> 9 << TT[26]) + TT[23]] = cT[TT[9]]), CT = TT[0]; CT < cT[TT[0]].length; CT += TT[13]) {
              for (IT(lT = cT[TT[11]][TT[0]], MT = cT[TT[11]][TT[9]], KT = cT[TT[11]][TT[11]], OT = cT[TT[11]][TT[7]], yT = cT[TT[11]][TT[26]], fT = cT[TT[11]][TT[41]], xT = cT[TT[11]][TT[27]], AT = cT[TT[11]][TT[43]]), jT = TT[0]; jT < TT[48]; jT++) IT(jT < TT[13] ? cT[TT[47]][jT] = cT[TT[0]][jT + CT] : cT[TT[47]][jT] = PT(PT(PT(FT(cT[TT[47]][jT - TT[11]]), cT[TT[47]][jT - TT[43]]), aT(cT[TT[47]][jT - TT[23]])), cT[TT[47]][jT - TT[13]]), vT = PT(PT(PT(PT(AT, DT(yT)), NT(yT, fT, xT)), kT[TT[11]][jT]), cT[TT[47]][jT]), tT = PT(ST(lT), QT(lT, MT, KT)), AT = xT, xT = fT, fT = yT, yT = PT(OT, vT), OT = KT, KT = MT, MT = lT, lT = PT(vT, tT));
              IT(cT[TT[11]][TT[0]] = PT(lT, cT[TT[11]][TT[0]]), cT[TT[11]][TT[9]] = PT(MT, cT[TT[11]][TT[9]]), cT[TT[11]][TT[11]] = PT(KT, cT[TT[11]][TT[11]]), cT[TT[11]][TT[7]] = PT(OT, cT[TT[11]][TT[7]]), cT[TT[11]][TT[26]] = PT(yT, cT[TT[11]][TT[26]]), cT[TT[11]][TT[41]] = PT(fT, cT[TT[11]][TT[41]]), cT[TT[11]][TT[27]] = PT(xT, cT[TT[11]][TT[27]]), cT[TT[11]][TT[43]] = PT(AT, cT[TT[11]][TT[43]]))
            }
            return cT[TT[11]]
          }

          function PT(...kT) {
            return IT(kT[TT[8]] = TT[11], kT[TT[33]] = (kT[TT[0]] & TT[49]) + (kT[TT[9]] & TT[49]), kT[TT[19]] = (kT[TT[0]] >> TT[13]) + (kT[TT[9]] >> TT[13]) + (kT[TT[33]] >> TT[13])), kT[TT[19]] << TT[13] | kT[TT[33]] & TT[49]
          }
          return IT(kT[TT[8]] = TT[0], kT[TT[19]] = TT[0], kT[TT[15]] = ""), kT[TT[11]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
            hex: cT,
            b64: MT,
            any: KT,
            hex_hmac: lT,
            b64_hmac: MT,
            any_hmac: KT
          }
        }(), console.log(kT[-TT[50]]))
      }(), Object.getOwnPropertyDescriptor(cT[TT[0]], cT[TT[9]]));

      function IT() {
        IT = function() {}
      }
      bl = () => {
        if ((TT[0], Pl.O)(), xT(navigator, lT) !== TT[21]) {
          function cT(...kT) {
            IT(kT[TT[8]] = TT[0], kT[TT[33]] = function(...cT) {
              return cT[TT[8]] = TT[11], kT[TT[19]]({}, cT[TT[0]], cT[TT[9]])
            }, kT[TT[19]] = function(...cT) {
              if (IT(cT[TT[8]] = TT[7], cT[TT[7]] = {}), cT[TT[0]][cT[TT[9]] + cT[TT[11]]] !== TT[21]) return cT[TT[0]][cT[TT[9]] + cT[TT[11]]];
              if (cT[TT[9]] === cT[TT[11]]) return TT[53];
              for (cT[-TT[51]] = TT[0]; cT[-TT[51]] < cT[TT[9]].length; cT[-TT[51]]++) cT[TT[7]][cT[TT[9]][cT[-TT[51]]]] === TT[21] && (cT[TT[7]][cT[TT[9]][cT[-TT[51]]]] = TT[0]), cT[TT[7]][cT[TT[11]][cT[-TT[51]]]] === TT[21] && (cT[TT[7]][cT[TT[11]][cT[-TT[51]]]] = TT[0]), IT(cT[TT[7]][cT[TT[9]][cT[-TT[51]]]]++, cT[TT[7]][cT[TT[11]][cT[-TT[51]]]]--);
              for (cT[TT[41]] in cT[TT[7]])
                if (cT[TT[7]][cT[TT[41]]] !== TT[0]) return cT[TT[0]][cT[TT[9]] + cT[TT[11]]] = TT[52], TT[52];
              for (cT[TT[44]] = TT[9]; cT[TT[44]] < cT[TT[9]].length; cT[TT[44]]++)
                if (kT[TT[19]](cT[TT[0]], cT[TT[9]].substr(TT[0], cT[TT[44]]), cT[TT[11]].substr(TT[0], cT[TT[44]])) && kT[TT[19]](cT[TT[0]], cT[TT[9]].substr(cT[TT[44]]), cT[TT[11]].substr(cT[TT[44]])) || kT[TT[19]](cT[TT[0]], cT[TT[9]].substr(TT[0], cT[TT[44]]), cT[TT[11]].substr(cT[TT[11]].length - cT[TT[44]])) && kT[TT[19]](cT[TT[0]], cT[TT[9]].substr(cT[TT[44]]), cT[TT[11]].substr(TT[0], cT[TT[11]].length - cT[TT[44]]))) return cT[TT[0]][cT[TT[9]] + cT[TT[11]]] = TT[53], TT[53];
              return cT[TT[0]][cT[TT[9]] + cT[TT[11]]] = TT[52], TT[52]
            }, console.log(kT[TT[33]]))
          }
          return "gTVrUqJ" in kT && cT(), KT
        }
        return xT(window, MT) === TT[21] ? OT : yT
      }, zl = async cT => {
        try {
          function lT(...kT) {
            IT(kT[TT[8]] = TT[0], kT[TT[33]] = function(...kT) {
              for (IT(kT[TT[8]] = TT[9], kT[TT[33]] = TT[0], kT[TT[19]] = {}, kT[TT[15]] = TT[0], kT[TT[56]] = TT[0], kT[-TT[57]] = TT[0], kT[TT[55]] = kT[TT[0]].length), kT[TT[54]] = TT[0]; kT[TT[54]] < kT[TT[55]]; kT[TT[54]]++) {
                for (IT(kT[TT[19]] = {}, kT[TT[15]] = TT[0], kT[TT[56]] = TT[9]), kT[TT[12]] = kT[TT[54]] + TT[9]; kT[TT[12]] < kT[TT[55]]; kT[TT[12]]++) kT[TT[0]][kT[TT[54]]].x !== kT[TT[0]][kT[TT[12]]].x || kT[TT[0]][kT[TT[54]]].y !== kT[TT[0]][kT[TT[12]]].y ? (kT[TT[0]][kT[TT[54]]].y === kT[TT[0]][kT[TT[12]]].y ? kT[-TT[57]] = Number.MAX_SAFE_INTEGER : kT[-TT[57]] = (kT[TT[0]][kT[TT[54]]].x - kT[TT[0]][kT[TT[12]]].x) / (kT[TT[0]][kT[TT[54]]].y - kT[TT[0]][kT[TT[12]]].y), kT[TT[19]][kT[-TT[57]]] || (kT[TT[19]][kT[-TT[57]]] = TT[0]), IT(kT[TT[19]][kT[-TT[57]]]++, kT[TT[15]] = Math.max(kT[TT[15]], kT[TT[19]][kT[-TT[57]]]))) : kT[TT[56]]++;
                IT(kT[TT[15]] += kT[TT[56]], kT[TT[33]] = Math.max(kT[TT[33]], kT[TT[15]]))
              }
              return kT[TT[33]]
            }, console.log(kT[TT[33]]))
          }
          "HsnJwS" + TT[17] in kT && lT();
          const MT = bl();
          await fT(cT, "/images/" + MT + ".png", {
            block: MT
          }, TT[0])
        } catch {}
      }
    })();
    var Jl = cT(40524),
      ol = cT(1828);
    const Hl = 1e3 * Jl.b.seatReservationSeconds - 3e3;
    class el {
      constructor(TT) {
        var kT, cT, lT, MT;
        let KT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (kT = KT.wallNow) && void 0 !== kT ? kT : Date.now, this.monoNow = null !== (cT = KT.monoNow) && void 0 !== cT ? cT : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (lT = KT.sleep) && void 0 !== lT ? lT : ol.e, this.follow = new ak.c(KT.signal);
        const OT = null !== (MT = KT.fetch) && void 0 !== MT ? MT : fetch;
        this.seat = (0, vc.e)(TT.endpoint, TT.roomName, TT.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (TT, kT) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), OT(TT, kT)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          this.follow.unfollow(), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          this.follow.unfollow(), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(TT) {
        if ("rematched" === this.use) return;
        (0, ak.l)(TT);
        const kT = "pending" !== this.request,
          cT = () => {
            this.abort((0, ak.e)(TT))
          };
        let lT;
        null === TT || void 0 === TT || TT.addEventListener("abort", cT, {
          once: !0
        });
        try {
          lT = await this.seat
        } catch (MT) {
          if ((0, ak.l)(TT), !kT) throw MT;
          return void(this.use = "lost")
        } finally {
          null === TT || void 0 === TT || TT.removeEventListener("abort", cT)
        }
        if ((0, ak.l)(TT), !(this.ageMs() > Hl)) return this.use = "taken", lT;
        this.use = "renewed"
      }
      async reserveInstead(TT, kT) {
        try {
          return await TT()
        } catch (cT) {
          const MT = this.holdLeftMs();
          if (!(cT instanceof GT.l) || cT.code !== lT.c.duplicateLobbyNameError.code || 0 === MT) throw cT;
          return await this.sleep(MT + 500, kT), TT()
        }
      }
      release() {
        const {
          request: TT,
          use: kT
        } = this, cT = this.holdsNoSeat();
        return this.abort(), "taken" === kT || cT ? null : {
          unused: "unused" === kT ? "abandoned" : kT,
          answered: "answered" === TT,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var TT;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const kT = null !== (TT = this.answeredAt) && void 0 !== TT ? TT : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          cT = Math.max(this.wallNow() - kT.wall, this.monoNow() - kT.mono);
        return Math.max(0, 1e3 * Jl.b.seatReservationSeconds - cT)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(TT) {
        (0, ak.f)(this.follow.controller, TT)
      }
    }
    var Gl = cT(1915),
      Vl = cT(40627);
    const El = new Uint8Array(0);
    class Zl {
      constructor(TT) {
        if (this.options = TT, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === TT.module) return this.stopped = !0, void TT.fail("no wasm module for the meshing workers");
        TT.loadWorkers().then((TT => {
          let {
            create: kT,
            count: cT
          } = TT;
          if (!this.stopped) {
            this.createWorker = kT;
            for (let TT = 0; TT < cT; TT++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let TT = 0; TT < cT; TT++) this.start(TT)
          }
        }), (TT => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", TT))
        }))
      }
      take(TT, kT, cT) {
        const lT = this.slots[kT];
        if (TT === Lk.Md.Retire) {
          var MT, KT, OT;
          if (lT && !lT.gone) null === (MT = lT.worker) || void 0 === MT || MT.terminate(), lT.worker = null, lT.started = !1, null === (KT = (OT = this.options).onMemoryGone) || void 0 === KT || KT.call(OT, kT), this.giveUp(kT, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const yT = null === lT || void 0 === lT ? void 0 : lT.worker;
        if (!yT || !lT.started) return;
        const fT = cT.byteLength;
        let xT = null;
        TT === Lk.Md.Mesh && lT.heapRetries > 0 && (lT.heapRetries--, xT = this.pooled(fT, !0)), xT ??= this.buffer(fT), new Uint8Array(xT, 0, fT).set(cT), yT.postMessage({
          type: "job",
          kind: TT,
          bytes: xT,
          len: fT
        }, [xT])
      }
      takeFailedMeshJobs() {
        const TT = this.failedJobs;
        return this.failedJobs = 0, TT
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const kT of this.slots) {
          var TT;
          ul(kT), null === (TT = kT.worker) || void 0 === TT || TT.terminate(), kT.worker = null, kT.started = !1
        }
      }
      start(TT) {
        const kT = this.slots[TT],
          {
            module: cT
          } = this.options,
          lT = this.createWorker;
        if (this.stopped || kT.gone || null === cT || null === lT) return;
        if (kT.startsWithoutResult >= 3) return void this.giveUp(TT, "failed to start 3 times in a row", "no meshing worker would start");
        let MT;
        kT.startsWithoutResult++;
        try {
          MT = lT()
        } catch (KT) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${TT} did not start`, KT), void this.start(TT)
        }
        kT.worker = MT, MT.onmessage = cT => {
          let {
            data: lT
          } = cT;
          kT.worker === MT && this.onReply(TT, lT)
        }, MT.onmessageerror = () => {
          kT.worker === MT && this.lose(TT, "a reply could not be read")
        }, MT.onerror = cT => {
          cT.preventDefault(), kT.worker === MT && this.lose(TT, cT.message || "its script failed")
        };
        try {
          MT.postMessage({
            type: "start",
            module: cT
          })
        } catch (KT) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${TT} could not be sent the module`, KT), MT.terminate(), kT.worker = null, void this.start(TT)
        }
        kT.watch = new Vl.g(Vl.c, (kT => {
          this.lose(TT, (0, Vl.h)(kT), (() => {
            this.options.onStartTimeout(kT)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(TT, kT) {
        const cT = this.slots[TT];
        switch (kT.type) {
          case "started":
            ul(cT), cT.started = !0, this.options.write(0, Lk.Id.WorkerStarted, 0, TT, 0, El);
            break;
          case "lost":
            this.lose(TT, kT.reason);
            break;
          case "memory":
            var lT, MT;
            null === (lT = (MT = this.options).onMemoryStats) || void 0 === lT || lT.call(MT, TT, kT.stats);
            break;
          case "result": {
            const lT = kT.status === Lk.vb.Trapped;
            if (0 !== kT.jobId) {
              if (lT) this.countFailedJob(kT.outOfMemory, "light_trap", kT.trap);
              else if (cT.startsWithoutResult = 0, cT.trapsWithoutResult = 0, kT.status === Lk.vb.Refused) {
                const cT = function(TT) {
                  if (TT.byteLength < 32) return "(no reason)";
                  const kT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength),
                    cT = Math.min(kT.getUint32(28, !0), TT.byteLength - 28 - 4);
                  return (new TextDecoder).decode(TT.subarray(32, 32 + cT)).slice(0, 200)
                }(new Uint8Array(kT.bytes, 0, kT.len));
                this.countFailedJob(Uk.d.test(cT), "light_refused_input", cT), this.logRefusal(TT, cT)
              }
              kT.status === Lk.vb.HeapRefused && (cT.heapRetries = Math.min(cT.heapRetries + 1, 4), this.logHeapRefusal(TT))
            }
            if (this.options.write(kT.jobId, Lk.Id.JobResult, kT.status, TT, kT.workerUs, new Uint8Array(kT.bytes, 0, kT.len)), this.recycle(kT.bytes), kT.spare && this.recycle(kT.spare), !lT) break;
            if (cT.startsWithoutResult = 0, 0 === kT.jobId) {
              this.lose(TT, `the tables trapped its wasm: ${kT.trap}`);
              break
            }
            cT.trapsWithoutResult++;
            const MT = cT.trapsWithoutResult > 6;
            cT.gone ||= MT, this.lose(TT, `a job trapped its wasm: ${kT.trap}`), MT && this.giveUp(TT, `trapped ${cT.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(TT, kT, cT) {
        if (TT) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(kT) || (this.faultsReported.add(kT), this.options.onLightFault(kT, cT));
        this.failedJobs++
      }
      logRefusal(TT, kT) {
        var cT;
        !this.refusals.has(kT) && this.refusals.size >= 16 && (kT = "(other reasons)");
        const lT = (null !== (cT = this.refusals.get(kT)) && void 0 !== cT ? cT : 0) + 1;
        this.refusals.set(kT, lT), (0, Gl.y)(lT) && console.warn(`[bloxd-wasm-client] meshing worker ${TT} refused a chunk (${lT} so far for this reason): ${kT}`)
      }
      logHeapRefusal(TT) {
        this.heapRefusals++, (0, Gl.y)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${TT} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(TT, kT, cT) {
        const lT = this.slots[TT];
        if (lT.gone = !0, lT.goneFor = {
            why: kT,
            failure: cT
          }, console.warn(`[bloxd-wasm-client] meshing worker ${TT} ${kT}: giving up on it`), this.slots.every((TT => TT.gone))) {
          this.stop();
          const TT = new Set(this.slots.map((TT => {
              var kT;
              return null === (kT = TT.goneFor) || void 0 === kT ? void 0 : kT.failure
            }))),
            kT = this.slots.map(((TT, kT) => {
              var cT, lT;
              return `worker ${kT} ${null!==(cT=null===(lT=TT.goneFor)||void 0===lT?void 0:lT.why)&&void 0!==cT?cT:"went"}`
            }));
          this.options.fail(1 === TT.size ? cT : `no meshing worker is left (${kT.join(", ")})`)
        }
      }
      lose(TT, kT, cT) {
        var lT, MT, KT;
        const OT = this.slots[TT];
        console.warn(`[bloxd-wasm-client] meshing worker ${TT} was lost: ${kT}`), ul(OT), null === (lT = OT.worker) || void 0 === lT || lT.terminate(), OT.worker = null, OT.heapRetries = 0, null === (MT = (KT = this.options).onMemoryGone) || void 0 === MT || MT.call(KT, TT), this.stopped || (cT ? cT() : this.options.onWorkerLost(kT), OT.started && (OT.started = !1, this.options.write(0, Lk.Id.WorkerLost, 0, TT, 0, El)), this.start(TT))
      }
      buffer(TT) {
        var kT;
        return null !== (kT = this.pooled(TT)) && void 0 !== kT ? kT : new ArrayBuffer(Math.max(16384, TT))
      }
      pooled(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = -1;
        for (let MT = 0; MT < this.pool.length; MT++) {
          const lT = this.pool[MT].byteLength;
          lT >= TT && (cT < 0 || (kT ? lT > this.pool[cT].byteLength : lT < this.pool[cT].byteLength)) && (cT = MT)
        }
        if (cT < 0) return null;
        const lT = this.pool[cT];
        return this.pool[cT] = this.pool[this.pool.length - 1], this.pool.pop(), lT
      }
      recycle(TT) {
        this.pool.length < 4 * this.slots.length && TT.byteLength > 0 && TT.byteLength <= 1048576 && this.pool.push(TT)
      }
    }

    function ul(TT) {
      var kT;
      null === (kT = TT.watch) || void 0 === kT || kT.cancel(), TT.watch = null
    }
    var Xl = cT(38928),
      dl = cT(40562),
      Ll = cT(40631),
      Rl = cT(40636),
      gl = (cT(40443), cT(40644)),
      Ul = cT(40603);

    function Yl(TT) {
      const kT = new Uint8Array(TT.length >> 2);
      for (let cT = 0; cT < kT.length; cT++) kT[cT] = TT[4 * cT + 3];
      return kT
    }
    async function Bl(TT) {
      const kT = await (0, gl.j)(TT);
      try {
        const {
          width: TT,
          height: cT,
          pixels: lT
        } = (0, Ul.o)(kT);
        return {
          width: TT,
          height: cT,
          alpha: Yl(lT)
        }
      } finally {
        kT.close()
      }
    }
    class Wl {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bl;
        this.session = TT, this.sources = kT, this.warn = cT, this.load = lT, this.nextPoll = 0, this.yv = !1, this.warned = new Set
      }
      drain(TT) {
        if (TT < this.nextPoll) return;
        this.nextPoll = TT + 250;
        const kT = this.session.sunShadowWantedTextures();
        if (kT)
          for (let cT = 0; cT + 1 < kT.length; cT += 2) this.hand(kT[cT], kT[cT + 1]);
        for (const cT of this.session.takeSunShadowWarnings()) this.warn(cT)
      }
      dispose() {
        this.yv = !0
      }
      async hand(TT, kT) {
        var cT, lT, MT, KT, OT;
        let yT, fT = null;
        try {
          if (fT = await this.sources.blockImageUrl(TT), null === fT) throw new Error(`block image ${TT} has no URL`);
          yT = await this.load(fT)
        } catch (IT) {
          var xT;
          const kT = null !== (xT = fT) && void 0 !== xT ? xT : `block image ${TT}`;
          this.warned.has(kT) || (this.warned.add(kT), this.warn(`sun shadow plane texture ${kT} didn't load: its blocks cast no shadow`, IT))
        }
        this.yv || this.session.setSunShadowTexture(TT, kT, null !== (cT = null === (lT = yT) || void 0 === lT ? void 0 : lT.width) && void 0 !== cT ? cT : 0, null !== (MT = null === (KT = yT) || void 0 === KT ? void 0 : KT.height) && void 0 !== MT ? MT : 0, null === (OT = yT) || void 0 === OT ? void 0 : OT.alpha)
      }
    }
    var nl = cT(40380),
      pl = cT(40577),
      il = cT(40649),
      ql = cT(40653),
      sl = cT(40583),
      TM = cT(40590),
      kM = cT(9403),
      cM = cT(9242),
      lM = cT(40665);
    const MM = 8192,
      KM = new Set;
    const OM = new Set([...cM.c, "sceneDownload"]);
    var yM = cT(40461),
      fM = cT(40321);
    const xM = new Uint8Array(0);
    let IM = null;

    function AM(TT) {
      return {
        aux: Lk.Xb.AdStart | (TT ? Lk.Xb.PreventMovement : 0),
        payload: xM
      }
    }
    var CM = cT(2819),
      jM = cT(2821);
    const vM = "__bloxdSceneCapture";
    var tM = cT(1805),
      hM = cT(2884);
    let NM = null,
      QM = null,
      SM = null,
      DM = !1;

    function aM() {
      NM ??= performance.now()
    }
    var FM = cT(40669);
    class rM {
      constructor(TT) {
        var kT, cT;
        this.host = TT, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((TT => {
          this.landRequest = TT
        })), this.follow = TT => {
          let kT = TT;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const TT = null === this.requested && null !== kT;
            var cT;
            TT && (null === (cT = kT) || void 0 === cT || cT(null));
            const lT = await this.landing;
            var MT;
            null === lT && TT || (null === (MT = kT) || void 0 === MT || MT(lT))
          })), () => {
            kT = null
          }
        }, this.startRead = (cT = TT.store, cT.keys().then((TT => ({
          own: TT.includes(Sc.d),
          oneShot: TT.includes(Sc.h)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((TT => {
          let {
            own: kT,
            oneShot: cT
          } = TT;
          this.oneShotStored = cT, (kT || cT) && this.request()
        })), this.channel = (null !== (kT = TT.openChannel) && void 0 !== kT ? kT : Sc.z)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var TT;
        if (null !== this.requested) return this.requested;
        null === (TT = this.channel) || void 0 === TT || TT.close(), this.channel = null;
        const kT = this.oneShotStored;
        return this.requested = function(TT, kT, cT) {
          return new Promise((kT => {
            kT(TT())
          })).catch((TT => (null !== kT && (0, Sc.t)(kT), cT(TT), null)))
        }((() => this.host.load(kT).then((TT => (TT.setGamePackConfirm(this.confirm), this.landed = TT, TT)))), kT ? this.host.store : null, this.host.Yj), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var TT;
          return null !== (TT = this.requested) && void 0 !== TT ? TT : null
        }))
      }
      setGamePackConfirm(TT) {
        var kT;
        this.confirm = TT, null === (kT = this.landed) || void 0 === kT || kT.setGamePackConfirm(TT)
      }
    }
    var PM = cT(36085);
    const wM = 216 * PM.g,
      mM = 92 * PM.d,
      bM = 64 * PM.g,
      zM = 16 * PM.g;

    function JM() {
      var TT, kT;
      return null !== (TT = null === (kT = performance.memory) || void 0 === kT ? void 0 : kT.YF) && void 0 !== TT ? TT : null
    }
    class oM {
      constructor(TT, kT) {
        this.budgetBytes = TT, this.reads = kT, this.estimate = null, this.shedAt = null
      }
      read(TT) {
        var kT;
        const cT = this.reads.storedChunks(),
          lT = this.reads.gpuBytes(),
          MT = Math.max(null !== (kT = this.reads.jsHeapBytes()) && void 0 !== kT ? kT : 0, bM),
          KT = wM + TT + MT + lT + cT * mM;
        this.estimate = {
          wasmBytes: TT,
          jsHeapBytes: MT,
          gpuBytes: lT,
          storedChunks: cT,
          totalBytes: KT
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: TT,
          budgetBytes: kT,
          shedAt: cT
        } = this;
        return !(null === TT || null === kT || TT.totalBytes < kT || null !== cT && TT.totalBytes < cT + zM) && (this.shedAt = TT.totalBytes, !0)
      }
      describe() {
        const {
          estimate: TT,
          budgetBytes: kT
        } = this;
        return null === TT ? null : `estimate ${(0,PM.m)(TT.totalBytes)} MiB of budget ${null===kT?"none":(0,PM.m)(kT)}: wasm ${(0,PM.m)(TT.wasmBytes)} js ${(0,PM.m)(TT.jsHeapBytes)} gpu ${(0,PM.m)(TT.gpuBytes)} chunks ${TT.storedChunks}`
      }
      snapshot() {
        const {
          estimate: TT,
          budgetBytes: kT
        } = this;
        return {
          ...null === TT ? {} : {
            footprintMiB: Number((0, PM.m)(TT.totalBytes)),
            gpuMiB: Number((0, PM.m)(TT.gpuBytes)),
            storedChunks: TT.storedChunks
          },
          footprintBudgetMiB: null === kT ? -1 : Number((0, PM.m)(kT))
        }
      }
    }
    var HM = cT(2853),
      eM = cT(4499),
      GM = cT(38906),
      VM = cT(37794);
    const EM = Rk.P + 1,
      ZM = 4096 * EM;
    class uM {
      constructor(TT, kT) {
        this.log = TT, this.take = kT, this.ty = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(TT, kT) {
        const cT = this.take();
        cT.length >= Rk.O && cT[0] > 0 && (0, HM.k)("remesh", `${cT[0]} core records lost to a full log`);
        const lT = this.ty;
        for (let MT = Rk.O; MT + Rk.P <= cT.length; MT += Rk.P) {
          for (let TT = MT; TT < MT + Rk.P; TT++) lT.push(cT[TT]);
          lT.push(TT)
        }
        if (kT || !(lT.length < ZM)) {
          for (let kT = 0; kT < lT.length; kT += EM) this.feed(kT, TT);
          lT.length = 0, kT && this.log.frame(TT)
        }
      }
      feed(TT, kT) {
        var cT;
        const lT = this.ty,
          MT = (0, VM.g)(lT[TT + 1], lT[TT + 2], lT[TT + 3]),
          KT = lT[TT + 4],
          OT = lT[TT + Rk.P];
        switch (lT[TT]) {
          case Rk.vb.Edit:
            this.log.edit(MT, OT);
            break;
          case Rk.vb.Sent:
            this.latest.set(MT, KT), this.log.sent(MT, KT, lT[TT + 5], lT[TT + 6], lT[TT + 7], null !== (cT = this.unshown.get(MT)) && void 0 !== cT ? cT : VM.e, OT);
            break;
          case Rk.vb.Done: {
            this.log.received(KT, lT[TT + 5] / 1e3, OT);
            const kT = this.unshown.get(MT);
            void 0 === kT ? this.unshown.set(MT, [KT]) : kT.push(KT);
            break
          }
          case Rk.vb.Failed: {
            const TT = this.latest.get(MT);
            void 0 !== TT && TT !== KT ? this.log.reassign(MT, KT, TT) : this.log.failed(KT), this.ended(MT, KT);
            break
          }
          case Rk.vb.Shown:
            this.log.applied(MT, KT, kT), this.ended(MT, KT);
            break;
          case Rk.vb.Replaced:
            this.log.reassign(MT, KT, lT[TT + 5]), this.ended(MT, KT);
            break;
          case Rk.vb.Emptied:
            this.log.emptied(MT, kT);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${lT[TT]}`)
        }
      }
      ended(TT, kT) {
        this.latest.get(TT) === kT && this.latest.delete(TT);
        const cT = this.unshown.get(TT);
        if (void 0 === cT) return;
        const lT = cT.indexOf(kT);
        lT >= 0 && cT.splice(lT, 1), 0 === cT.length && this.unshown.delete(TT)
      }
    }
    let XM = null;
    var dM = cT(3179);
    const LM = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      RM = new Set(["creativeFlat", "skyGrid"]);
    const gM = new Uint8Array(0);
    class UM {
      constructor(TT) {
        this.options = TT, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.ty = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== TT.module ? TT.write(0, Lk.Id.WorldgenStarted, 0, 0, gM) : this.giveUp()
      }
      take(TT, kT) {
        if (!(this.gone || null === this.worker && null === this.ty))
          if (TT === Lk.Md.WorldgenSeed) {
            const TT = 0 === kT.byteLength ? null : this.options.decodeSettings(kT);
            null === TT ? this.release() : function(TT, kT) {
              if ((null === TT || void 0 === TT ? void 0 : TT.byteLength) !== kT.byteLength) return !1;
              for (let cT = 0; cT < TT.byteLength; cT++)
                if (TT[cT] !== kT[cT]) return !1;
              return !0
            }(this.seed, kT) || (this.seed = kT.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: TT
            }, []), null !== TT ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (TT === Lk.Md.Generate) {
          var cT;
          const TT = new DataView(kT.buffer, kT.byteOffset, Lk.Fd),
            lT = null !== (cT = this.pool.pop()) && void 0 !== cT ? cT : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: TT.getUint32(0, !0),
            x: TT.getInt32(4, !0),
            y: TT.getInt32(8, !0),
            z: TT.getInt32(12, !0),
            bytes: lT
          }, [lT])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stop() {
        var TT;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (TT = this.worker) || void 0 === TT || TT.terminate(), this.worker = null
      }
      post(TT, kT) {
        var cT;
        null !== this.ty ? this.ty.push({
          message: TT,
          transfer: kT
        }) : null === (cT = this.worker) || void 0 === cT || cT.postMessage(TT, kT)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.ty ??= [])
      }
      endWorker() {
        var TT, kT, cT;
        this.endWatch(), null === (TT = this.worker) || void 0 === TT || TT.terminate(), this.worker = null, null === (kT = (cT = this.options).onMemoryGone) || void 0 === kT || kT.call(cT)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((TT => {
          this.createWorker = TT, this.wanted && this.start()
        }), (TT => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(TT))
        })))
      }
      start() {
        const {
          module: TT
        } = this.options, kT = this.createWorker;
        if (this.gone || null === TT || null === kT) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let cT;
        this.startsWithoutResult++;
        try {
          cT = kT()
        } catch (MT) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", MT), this.lastLoss = `it did not start (${String(MT)})`, void this.start()
        }
        this.worker = cT, cT.onmessage = TT => {
          let {
            data: kT
          } = TT;
          this.worker === cT && this.onReply(cT, kT)
        }, cT.onerror = TT => {
          TT.preventDefault(), this.worker === cT && this.lose(TT.message || "its script failed")
        };
        try {
          cT.postMessage({
            type: "start",
            module: TT,
            vv: lT.f.vv
          })
        } catch (MT) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", MT), this.lastLoss = `it could not be sent the module (${String(MT)})`, cT.terminate(), this.worker = null, void this.start()
        }
        this.watch = new Vl.g(Vl.f, (TT => {
          this.lose((0, Vl.h)(TT), (() => {
            this.options.onStartTimeout(TT)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(TT, kT) {
        switch (kT.type) {
          case "started": {
            this.endWatch();
            const kT = this.ty;
            if (null === kT) {
              this.options.write(0, Lk.Id.WorldgenStarted, 0, 0, gM);
              break
            }
            this.ty = null;
            for (const {
                message: cT,
                transfer: lT
              }
              of kT) TT.postMessage(cT, lT);
            break
          }
          case "lost":
            this.lose(kT.reason);
            break;
          case "memory":
            var cT, lT;
            null === (cT = (lT = this.options).onMemoryStats) || void 0 === cT || cT.call(lT, kT.stats);
            break;
          case "result":
            kT.status !== Lk.vb.Trapped && (this.startsWithoutResult = 0), this.options.write(kT.ticket, Lk.Id.WorldgenResult, kT.status, kT.workerUs, new Uint8Array(kT.bytes, 0, kT.len)), this.recycle(kT.bytes), kT.spare && this.recycle(kT.spare)
        }
      }
      lose(TT, kT) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${TT}`), this.lastLoss = TT, this.endWorker(), this.gone || (kT ? kT() : this.options.onWorkerLost(TT), this.dropHeld(), this.ty = null, this.options.write(0, Lk.Id.WorldgenLost, Lk.Od.Lost, 0, gM), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Lk.Id.WorldgenLost, Lk.Od.Gone, 0, gM)
      }
      endWatch() {
        var TT;
        null === (TT = this.watch) || void 0 === TT || TT.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.ty) {
          for (const {
              message: TT
            }
            of this.ty) "generate" === TT.type && this.recycle(TT.bytes);
          this.ty.length = 0
        }
      }
      recycle(TT) {
        this.pool.length < 16 && TT.byteLength > 0 && TT.byteLength <= 16384 && this.pool.push(TT)
      }
    }
    var YM = cT(37611),
      BM = cT(3704),
      WM = cT(40298),
      nM = cT(40675),
      pM = cT(40547);
    const iM = /[(@\s]([^\s(@]+)$/,
      qM = /:\d/;

    function sM(TT, kT) {
      for (let cT = 0; cT + kT.length <= TT.length; cT++) {
        let lT = 0;
        for (; lT < kT.length && TT[cT + lT] === kT[lT];) lT++;
        if (lT === kT.length) return cT
      }
      return -1
    }

    function TK(TT) {
      return "(" === TT || ")" === TT || "@" === TT || "," === TT || " " === TT || "\t" === TT
    }

    function kK(TT, kT) {
      let cT = kT;
      for (; cT > 0 && !TK(TT[cT - 1]);) cT--;
      let lT = kT;
      for (; lT < TT.length && !TK(TT[lT]);) lT++;
      let MT = "";
      for (let KT = cT; KT < lT; KT++) MT += TT[KT];
      return MT
    }

    function cK(TT, kT) {
      var cT;
      const lT = /[^\n]+/g,
        MT = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        KT = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let OT = null,
        yT = null,
        fT = (0, Pl.l)(Pl.W, lT, [TT]);
      for (; null !== fT;) {
        const cT = (0, Pl.l)(Pl.W, MT, [fT[0]]),
          xT = null === kT ? -1 : sM(fT[0], kT);
        if (-1 !== xT) {
          if (null !== cT) return cT[0];
          const TT = kK(fT[0], xT),
            kT = (0, Pl.l)(Pl.W, iM, [fT[0]]),
            lT = null !== (0, Pl.l)(Pl.W, qM, [TT]) ? TT : null === kT ? null : kT[1],
            MT = null === lT ? null : (0, Pl.l)(Pl.W, KT, [lT]);
          if (null !== MT && "" !== MT[1]) return MT[1]
        }
        null !== cT && (null === OT ? OT = cT[0] : null === yT && cT[0] !== OT && (yT = cT[0])), fT = (0, Pl.l)(Pl.W, lT, [TT])
      }
      return null !== (cT = yT) && void 0 !== cT ? cT : null === OT ? "none" : "own"
    }
    const lK = (TT, kT) => TT.includes(kT),
      MK = TT => {
        try {
          return TT()
        } catch {
          return !1
        }
      },
      KK = -1,
      OK = TT => {
        try {
          return TT()
        } catch {
          return KK
        }
      };

    function yK(TT, kT) {
      return {
        probe: (cT, lT, MT) => {
          try {
            return ((cT, lT, MT) => {
              switch (cT) {
                case Lk.ec.StackCheck:
                  return kT.stackCheck() ? 1 : 0;
                case Lk.ec.ConfirmMesh:
                  return kT.confirmMesh();
                case Lk.ec.IndexPassReplaced:
                  return kT.indexPassReplaced() ? 1 : 0;
                case Lk.ec.ProductSubChanged:
                  return kT.productSubChanged() ? 1 : 0;
                case Lk.ec.RenderStatus:
                  return kT.fO();
                case Lk.ec.Held:
                  return kT.ty();
                case Lk.ec.PlayerKilledSubs:
                  return kT.playerKilledSubs();
                case Lk.eb: {
                  const cT = kT.getComplete();
                  return null === cT ? 0 : (0, Pl.l)(Pl.z, Pl.gb, [cT, new Pl.d((0, Pl.L)(TT()), lT, MT)]).written
                }
                default:
                  return 0
              }
            })(cT, lT, MT)
          } catch {
            return Lk.$b
          }
        }
      }
    }
    class fK {
      constructor(TT) {
        this.write = TT, this.flagsWritten = 0, this.written = (0, Pl.p)(null)
      }
      UA(TT) {
        let {
          flags: kT,
          values: cT
        } = TT;
        for (let lT = 0; lT < cT.length; lT++) this.value(cT[lT][0], cT[lT][1]);
        this.setFlags(kT | Lk.e.Ready)
      }
      value(TT, kT) {
        this.written[TT] !== kT && this.write(TT, kT, 0) && (this.written[TT] = kT)
      }
      setFlags(TT) {
        const kT = TT & ~this.flagsWritten;
        0 !== kT && this.write(Lk.i.Flags, kT, kT) && (this.flagsWritten |= kT)
      }
      originStackHit() {
        return this.write(Lk.i.Flags, Lk.e.OriginStackHit, Lk.e.OriginStackHit)
      }
    }
    const xK = {
        InputListeners: 0,
        InputWriter: 1,
        CoreFrame: 2,
        GlueFrame: 3,
        SocketSend: 4,
        AddEventListener: 5,
        DispatchEvent: 6,
        RequestAnimationFrame: 7,
        PerformanceNow: 8,
        DateNow: 9
      },
      IK = 1e3;

    function AK(TT, kT) {
      const cT = new fK(kT);
      let lT = !1;
      cT.UA(TT.UA());
      const MT = (0, Pl._)((() => {
          cT.UA(TT.UA())
        }), IK),
        KT = () => {
          TT.checks.stackCheck() && (lT = !0)
        };
      (0, nM.i)(KT);
      const OT = () => {
        const kT = TT.checkPadCall();
        0 !== kT && cT.setFlags(kT)
      };
      return (0, WM.h)(OT), {
        onInput: kT => {
          (function(TT) {
            switch (TT) {
              case Lk.rb.KeyDown:
              case Lk.rb.KeyUp:
              case Lk.rb.MouseDown:
              case Lk.rb.MouseUp:
              case Lk.rb.Wheel:
              case Lk.rb.TouchStart:
              case Lk.rb.TouchEnd:
              case Lk.rb.TouchButton:
              case Lk.rb.PadAction:
                return !0;
              default:
                return !1
            }
          })(kT) && TT.checks.stackCheck() && (lT = !0)
        },
        onSend: KT,
        beforeFrame: () => {
          lT && cT.originStackHit() && (lT = !1)
        },
        onEvent: kT => {
          const lT = TT.checkEvent(kT);
          cT.value(Lk.i.ProbeUsedProp, TT.usedProp()), 0 !== lT && cT.setFlags(lT)
        },
        stop: () => {
          (0, Pl.$)(MT), (0, nM.f)(KT), (0, WM.f)(OT)
        }
      }
    }
    let CK;
    const jK = ["length", 0, 1, 2, !1, void 0, null, 3, "r", "c3RhY2", "cw==", 1e5, "a", 33554432, 67108864, 55, "b", "c", 4, "d", "f", "string", "stack", "name", 154, 8, 16, 182, 23, "X4nHe0", 512, 211, "012345", 120, 15, 6, 104, 1023, 63, 128, 12, 255, 135, 215, 176, 32, 5, 24, 7, 18, 10, 19, 64, 102, 65535, 183, !0, "__GLOB", "AL__HE", "LPERS_", "_", 33, 110, 210, "p", "abc", 909522486, 1549556828, 256, "6789AB", "CDEF", "6789ab", "cdef", 21, "ABCDEFGHIJK", "LMNOPQRSTUV", "WXYZabcdefg", "hijklmnopqr", "stuvwxyz012", "3456789+/", 238, 173, 223, 55296, 56319, 56320, 57343, 65536, 127, 204, 2047, 192, 31, 224, 2097151, 240, 13, 22, 11, 25, 17, 28, 34, 39, 14, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 9, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", "l", 65, 126, 100, "j", "Q", "?", "return U[c[c[d(-199)]-b(205)]]||V[ae(", "b(166))];case T.o[c[c[c[d(-199)]+d(-1", "74)]-(c[b(119)]-(c[d(-199)]-163))]+ae", "(b(146))](0)==b(167)?d(-130):-d(-144)", 145, "=", ";", 169, "e", " ", "m", "functi", "on", 93, 42, "protot", "ype", "decode", 69, "I=", "eTR5bm", "o", "t", "v", "q", "D", "H", "vd", "s", "chEven", "dispat", "now", 60, 177, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "k", "u", "None", 107, "En", "i", "tOverw", "ritten", "plete"];

    function vK(...TT) {
      if (TT[jK[0]] = jK[7], TT[jK[1]] === jK[29]) return TT[jK[2]] + TT[jK[3]]
    }

    function tK() {}

    function hK() {
      hK = function() {}
    }
    CK = function(TT) {
      let kT = arguments[jK[0]] > jK[2] && arguments[jK[2]] !== jK[5] ? arguments[jK[2]] : () => jK[6],
        cT = arguments[jK[0]] > jK[3] && arguments[jK[3]] !== jK[5] ? arguments[jK[3]] : jK[6],
        lT = arguments[jK[0]] > jK[7] && arguments[jK[7]] !== jK[5] ? arguments[jK[7]] : "";
      const MT = window,
        KT = (jK[1], Pl[jK[8]])("RXJyb3" + jK[214]),
        OT = (jK[1], Pl[jK[8]])(jK[9] + "s="),
        yT = (jK[1], Pl[jK[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        xT = (jK[1], Pl[jK[8]])(jK[9] + "tUcmFjZUxpbWl0"),
        IT = (jK[1], Pl[jK[8]])("bmF0aXZl"),
        AT = [(jK[1], Pl[jK[8]])("bWFpbi5qcw=="), (jK[1], Pl[jK[8]])("aW5kZXguanM="), (jK[1], Pl[jK[8]])("dXNlcnNjcmlwdA=="), (jK[1], Pl[jK[8]])("Y29udGVudC5q" + jK[10]), (jK[1], Pl[jK[8]])("b3B0aW9ucy5q" + jK[10]), (jK[1], Pl[jK[8]])("cG9wdXAuanM="), (jK[1], Pl[jK[8]])("LnVzZXIuanM="), (jK[1], Pl[jK[8]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        CT = (...TT) => {
          TT[jK[0]] = jK[2];
          const kT = MT[KT],
            cT = kT;
          cT[xT] < jK[11] && (cT[xT] = jK[11]);
          const lT = "string" === typeof(CT = (new kT)[OT]) ? CT : `${CT}`,
            fT = {},
            IT = cT[yT];
          var CT;
          if (typeof IT === jK[206] + jK[207]) {
            function tT(...TT) {
              TT[jK[0]] = jK[1]
            }
            "seRGk5M" in tK && tT(), (jK[1], Pl[jK[188]])(IT, kT, [fT])
          }
          const jT = fT[OT],
            vT = TT[jK[1]] ? AT[jK[0]] : AT[jK[0]] - jK[2];
          for (let hT = jK[1]; hT < vT; hT++) {
            function NT(...TT) {
              function kT(...TT) {
                return TT[jK[0]] = jK[2], TT[jK[1]][jK[2]] * jK[14] + (TT[jK[1]][jK[1]] < jK[1] ? jK[13] | TT[jK[1]][jK[1]] : TT[jK[1]][jK[1]])
              }

              function cT(...TT) {
                switch (TT[jK[0]] = jK[2], ((TT[jK[1]] & jK[13]) !== jK[1]) * jK[2] + (TT[jK[1]] < jK[1]) * jK[3]) {
                  case jK[1]:
                    return [TT[jK[1]] % jK[13], Math.trunc(TT[jK[1]] / jK[14])];
                  case jK[2]:
                    return [TT[jK[1]] % jK[13] - jK[13], Math.trunc(TT[jK[1]] / jK[14]) + jK[2]];
                  case jK[3]:
                    return [((TT[jK[1]] + jK[13]) % jK[13] + jK[13]) % jK[13], Math.round(TT[jK[1]] / jK[14])];
                  case jK[7]:
                    return [TT[jK[1]] % jK[13], Math.trunc(TT[jK[1]] / jK[14])]
                }
              }
              TT[jK[0]] = jK[1], hK(TT[-jK[15]] = kT([jK[3], jK[18]]), TT[jK[16]] = kT([jK[2], jK[3]]), TT[jK[17]] = TT[-jK[15]] + TT[jK[16]], TT[jK[19]] = TT[jK[17]] - TT[jK[16]], TT[jK[18]] = TT[jK[19]] * jK[3], TT[jK[20]] = TT[jK[18]] / jK[3], console.log(cT(TT[jK[17]])), console.log(cT(TT[jK[19]])), console.log(cT(TT[jK[18]])), console.log(cT(TT[jK[20]])))
            }
            if ("A7Kag0" in tK && NT(), lK(lT, AT[hT])) return {
              [jK[22]]: lT,
              [jK[23]]: AT[hT]
            };
            if (typeof jT === jK[21] && lK(jT, AT[hT])) return {
              [jK[22]]: jT,
              [jK[23]]: AT[hT]
            }
          }
          return jK[6]
        },
        jT = (...TT) => (TT[jK[0]] = jK[2], "foGSvP" + jK[221] in tK && function(...TT) {
          hK(TT[jK[0]] = jK[1], TT[jK[24]] = function(TT) {
            var kT, cT, lT, MT, KT = TT.length;
            for (hK(kT = [], cT = jK[1]), lT = jK[1]; lT < KT; lT++) kT.push(lT !== jK[1] && TT[lT] > TT[lT - jK[2]] ? kT[lT - jK[2]] + jK[2] : jK[2]);
            for (MT = KT - jK[2]; MT >= jK[1]; MT--) MT !== KT - jK[2] && TT[MT] > TT[MT + jK[2]] && (kT[MT] = Math.max(kT[MT], kT[MT + jK[2]] + jK[2])), cT += kT[MT];
            return cT
          }, console.log(TT[jK[24]]))
        }(), CT(TT[jK[1]]) !== jK[6]);
      let vT = jK[6],
        tT = jK[6],
        hT = jK[6];
      const NT = (...TT) => {
        TT[jK[0]] = jK[2], "OnqCbo" in tK && function(...TT) {
          TT[jK[0]] = jK[1]
        }();
        try {
          return TT[jK[1]]()
        } catch {
          function kT() {
            var TT = function(...TT) {
              function cT(TT, kT) {
                return OT(MT(yT(TT), yT(kT)))
              }

              function lT(...TT) {
                return TT[jK[0]] = jK[7],
                  function(TT, kT) {
                    var cT, lT, MT, KT, OT, yT, fT, xT, IT = kT.length;
                    for (cT = Array(), lT = Array(Math.ceil(TT.length / jK[3])), OT = jK[1]; OT < lT.length; OT++) lT[OT] = TT.charCodeAt(OT * jK[3]) << jK[25] | TT.charCodeAt(OT * jK[3] + jK[2]);
                    for (; lT.length > jK[1];) {
                      for (hK(xT = Array(), fT = jK[1]), OT = jK[1]; OT < lT.length; OT++) hK(fT = (fT << jK[26]) + lT[OT], yT = Math.floor(fT / IT), fT -= yT * IT), (xT.length > jK[1] || yT > jK[1]) && (xT[xT.length] = yT);
                      hK(cT[cT.length] = fT, lT = xT)
                    }
                    for (MT = "", OT = cT.length - jK[2]; OT >= jK[1]; OT--) MT += kT.charAt(cT[OT]);
                    for (KT = Math.ceil(TT.length * jK[25] / (Math.log(kT.length) / Math.log(jK[3]))), OT = MT.length; OT < KT; OT++) MT = kT[jK[1]] + MT;
                    return MT
                  }(MT(yT(TT[jK[1]]), yT(TT[jK[2]])), TT[jK[3]])
              }

              function MT(...TT) {
                hK(TT[jK[0]] = jK[3], TT[jK[3]] = fT(TT[jK[1]])), TT[jK[3]].length > jK[26] && (TT[jK[3]] = QT(TT[jK[3]], TT[jK[1]].length * jK[25]));
                var kT = Array(jK[26]),
                  cT = Array(jK[26]);
                for (TT[jK[27]] = jK[1]; TT[jK[27]] < jK[26]; TT[jK[27]]++) hK(kT[TT[jK[27]]] = TT[jK[3]][TT[jK[27]]] ^ jK[66], cT[TT[jK[27]]] = TT[jK[3]][TT[jK[27]]] ^ jK[67]);
                return TT[-jK[28]] = QT(kT.concat(fT(TT[jK[2]])), jK[30] + TT[jK[2]].length * jK[25]), xT(QT(cT.concat(TT[-jK[28]]), vK(jK[29], jK[30], jK[68])))
              }

              function KT(...cT) {
                cT[jK[0]] = jK[2];
                try {
                  TT[jK[31]]
                } catch (kT) {
                  TT[jK[31]] = jK[1]
                }
                for (hK(cT[jK[12]] = TT[jK[31]] ? jK[32] + jK[69] + jK[70] : jK[32] + jK[71] + jK[72], cT[jK[16]] = "", cT[jK[7]] = jK[5]), cT[jK[33]] = jK[1]; cT[jK[33]] < cT[jK[1]].length; cT[jK[33]]++) hK(cT[jK[7]] = cT[jK[1]].charCodeAt(cT[jK[33]]), cT[jK[16]] += cT[jK[12]].charAt(cT[jK[7]] >>> jK[18] & jK[34]) + cT[jK[12]].charAt(cT[jK[7]] & jK[34]));
                return cT[jK[16]]
              }

              function OT(kT) {
                var cT, lT, KT, OT;
                try {
                  TT[jK[16]]
                } catch (MT) {
                  TT[jK[16]] = ""
                }
                for (hK(cT = jK[74] + jK[75] + jK[76] + jK[77] + jK[78] + jK[79], lT = "", KT = kT.length), OT = jK[1]; OT < KT; OT += jK[7]) {
                  var yT, fT = kT.charCodeAt(OT) << jK[26] | (OT + jK[2] < KT ? kT.charCodeAt(OT + jK[2]) << jK[25] : jK[1]) | (OT + jK[3] < KT ? kT.charCodeAt(OT + jK[3]) : jK[1]);
                  for (yT = jK[1]; yT < jK[18]; yT++) OT * jK[25] + yT * jK[35] > kT.length * jK[25] ? lT += TT[jK[16]] : lT += cT.charAt(fT >>> jK[35] * (jK[7] - yT) & jK[38])
                }
                return lT
              }

              function yT(...TT) {
                var kT, cT;
                for (hK(TT[jK[0]] = jK[2], TT[jK[2]] = "", TT[jK[36]] = -jK[2]); ++TT[jK[36]] < TT[jK[1]].length;) hK(kT = TT[jK[1]].charCodeAt(TT[jK[36]]), cT = TT[jK[36]] + jK[2] < TT[jK[1]].length ? TT[jK[1]].charCodeAt(TT[jK[36]] + jK[2]) : jK[1]), jK[83] <= kT && kT <= jK[84] && jK[85] <= cT && cT <= jK[86] && hK(kT = jK[87] + ((kT & jK[37]) << jK[50]) + (cT & jK[37]), TT[jK[36]]++), kT <= jK[88] ? TT[jK[2]] += String.fromCharCode(kT) : kT <= jK[90] ? TT[jK[2]] += String.fromCharCode(jK[91] | kT >>> jK[35] & jK[92], jK[39] | kT & jK[38]) : kT <= jK[54] ? TT[jK[2]] += String.fromCharCode(jK[93] | kT >>> jK[40] & jK[34], jK[39] | kT >>> jK[35] & jK[38], jK[39] | kT & jK[38]) : kT <= jK[94] && (TT[jK[2]] += String.fromCharCode(jK[95] | kT >>> jK[49] & jK[48], jK[39] | kT >>> jK[40] & jK[38], jK[39] | kT >>> jK[35] & jK[38], jK[39] | kT & jK[38]));
                return TT[jK[2]]
              }

              function fT(...TT) {
                for (hK(TT[jK[0]] = jK[2], TT[jK[2]] = Array(TT[jK[1]].length >> jK[3])), TT[-jK[44]] = jK[1]; TT[-jK[44]] < TT[jK[2]].length; TT[-jK[44]]++) TT[jK[2]][TT[-jK[44]]] = jK[1];
                for (TT[-jK[44]] = jK[1]; TT[-jK[44]] < TT[jK[1]].length * jK[25]; TT[-jK[44]] += jK[25]) TT[jK[2]][TT[-jK[44]] >> jK[46]] |= (TT[jK[1]].charCodeAt(TT[-jK[44]] / jK[25]) & jK[41]) << jK[47] - TT[-jK[44]] % jK[45];
                return TT[jK[2]]
              }

              function xT(TT) {
                var kT, cT = "";
                for (kT = jK[1]; kT < TT.length * jK[45]; kT += jK[25]) cT += String.fromCharCode(TT[kT >> jK[46]] >>> jK[47] - kT % jK[45] & jK[41]);
                return cT
              }

              function IT(...TT) {
                return TT[jK[0]] = jK[3], TT[jK[1]] >>> TT[jK[2]] | TT[jK[1]] << jK[45] - TT[jK[2]]
              }

              function AT(...TT) {
                return TT[jK[0]] = jK[3], TT[jK[1]] >>> TT[jK[2]]
              }

              function CT(...TT) {
                return TT[jK[0]] = jK[7], TT[jK[1]] & TT[jK[2]] ^ ~TT[jK[1]] & TT[jK[3]]
              }

              function jT(...TT) {
                return TT[jK[0]] = jK[7], TT[jK[1]] & TT[jK[2]] ^ TT[jK[1]] & TT[jK[3]] ^ TT[jK[2]] & TT[jK[3]]
              }

              function vT(...TT) {
                return TT[jK[0]] = jK[2], IT(TT[jK[1]], jK[3]) ^ IT(TT[jK[1]], jK[96]) ^ IT(TT[jK[1]], jK[97])
              }

              function tT(...TT) {
                return TT[jK[0]] = jK[2], IT(TT[jK[1]], jK[35]) ^ IT(TT[jK[1]], jK[98]) ^ IT(TT[jK[1]], jK[99])
              }

              function hT(...TT) {
                return TT[jK[0]] = jK[2], IT(TT[jK[1]], jK[48]) ^ IT(TT[jK[1]], jK[49]) ^ AT(TT[jK[1]], jK[7])
              }

              function NT(TT) {
                return IT(TT, jK[100]) ^ IT(TT, jK[51]) ^ AT(TT, jK[50])
              }

              function QT(...kT) {
                var cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, QT, DT;
                for (hK(kT[jK[0]] = jK[3], kT[jK[12]] = new Array(jK[171], -jK[172], jK[173], -jK[174], jK[175], -jK[176], jK[177], jK[178]), kT[-jK[53]] = new Array(jK[52])), hK(kT[jK[1]][kT[jK[2]] >> jK[46]] |= jK[39] << jK[47] - kT[jK[2]] % jK[45], kT[jK[1]][(kT[jK[2]] + jK[52] >> jK[179] << jK[18]) + jK[34]] = kT[jK[2]]), IT = jK[1]; IT < kT[jK[1]].length; IT += jK[26]) {
                  for (hK(cT = kT[jK[12]][jK[1]], lT = kT[jK[12]][jK[2]], MT = kT[jK[12]][jK[3]], KT = kT[jK[12]][jK[7]], OT = kT[jK[12]][jK[18]], yT = kT[jK[12]][jK[46]], fT = kT[jK[12]][jK[35]], xT = kT[jK[12]][jK[48]]), AT = jK[1]; AT < jK[52]; AT++) hK(AT < jK[26] ? kT[-jK[53]][AT] = kT[jK[1]][AT + IT] : kT[-jK[53]][AT] = ST(ST(ST(NT(kT[-jK[53]][AT - jK[3]]), kT[-jK[53]][AT - jK[48]]), hT(kT[-jK[53]][AT - jK[34]])), kT[-jK[53]][AT - jK[26]]), QT = ST(ST(ST(ST(xT, tT(OT)), CT(OT, yT, fT)), TT[jK[3]][AT]), kT[-jK[53]][AT]), DT = ST(vT(cT), jT(cT, lT, MT)), xT = fT, fT = yT, yT = OT, OT = ST(KT, QT), KT = MT, MT = lT, lT = cT, cT = ST(QT, DT));
                  hK(kT[jK[12]][jK[1]] = ST(cT, kT[jK[12]][jK[1]]), kT[jK[12]][jK[2]] = ST(lT, kT[jK[12]][jK[2]]), kT[jK[12]][jK[3]] = ST(MT, kT[jK[12]][jK[3]]), kT[jK[12]][jK[7]] = ST(KT, kT[jK[12]][jK[7]]), kT[jK[12]][jK[18]] = ST(OT, kT[jK[12]][jK[18]]), kT[jK[12]][jK[46]] = ST(yT, kT[jK[12]][jK[46]]), kT[jK[12]][jK[35]] = ST(fT, kT[jK[12]][jK[35]]), kT[jK[12]][jK[48]] = ST(xT, kT[jK[12]][jK[48]]))
                }
                return kT[jK[12]]
              }

              function ST(...TT) {
                return hK(TT[jK[0]] = jK[3], TT[jK[55]] = (TT[jK[1]] & jK[54]) + (TT[jK[2]] & jK[54]), TT[-jK[52]] = (TT[jK[1]] >> jK[26]) + (TT[jK[2]] >> jK[26]) + (TT[jK[55]] >> jK[26])), TT[-jK[52]] << jK[26] | TT[jK[55]] & jK[54]
              }
              return hK(TT[jK[0]] = jK[1], TT[jK[31]] = jK[1], TT[jK[16]] = ""), TT[jK[3]] = new Array(jK[107], jK[108], -jK[109], -jK[110], jK[111], jK[112], -jK[113], -jK[114], -jK[115], jK[116], jK[117], jK[118], jK[119], -jK[120], -jK[121], -jK[122], -jK[123], -jK[124], jK[125], jK[126], jK[127], jK[128], jK[129], jK[130], -jK[131], -jK[132], -jK[133], -jK[134], -jK[135], -jK[136], jK[137], jK[138], jK[139], jK[140], jK[141], jK[142], jK[143], jK[144], -jK[145], -jK[146], -jK[147], -jK[148], -jK[149], -jK[150], -jK[151], -jK[152], -jK[153], jK[154], jK[155], jK[156], jK[157], jK[158], jK[159], jK[160], jK[161], jK[162], jK[163], jK[164], -jK[165], -jK[166], -jK[167], -jK[168], -jK[169], -jK[170]), {
                hex: function(...TT) {
                  return TT[jK[0]] = jK[2], KT(function(...TT) {
                    return TT[jK[0]] = jK[2], xT(QT(fT(TT[jK[1]]), TT[jK[1]].length * jK[25]))
                  }(yT(TT[jK[1]])))
                },
                b64: cT,
                any: lT,
                hex_hmac: function(...TT) {
                  return TT[jK[0]] = jK[3], KT(MT(yT(TT[jK[1]]), yT(TT[jK[2]])))
                },
                b64_hmac: cT,
                any_hmac: lT
              }
            }();
            console.log(TT)
          }
          return "Nipv8N9" in tK && kT(), jK[56]
        }
      };
      let QT = jK[4];
      const ST = (...TT) => {
          TT[jK[0]] = jK[1], "OKKI35" in tK && function() {
            function TT(...TT) {
              TT[jK[0]] = jK[2];
              const kT = {};
              for (let cT of TT[jK[1]].replace(/[^w]/g, "").toLowerCase()) kT[cT] = kT[cT] + jK[2] || jK[2];
              return kT
            }

            function kT(...TT) {
              TT[jK[0]] = jK[3];
              const kT = buildCharMap(TT[jK[1]]),
                cT = buildCharMap(TT[jK[2]]);
              for (let lT in kT)
                if (kT[lT] !== cT[lT]) return jK[4];
              return Object.keys(kT).length !== Object.keys(cT).length ? jK[4] : jK[56]
            }

            function cT(...TT) {
              TT[jK[0]] = jK[2];
              return lT(TT[jK[1]]) !== 1 / 0
            }

            function lT(...TT) {
              if (TT[jK[0]] = jK[2], !TT[jK[1]]) return -jK[2];
              const kT = lT(TT[jK[1]].left),
                cT = lT(TT[jK[1]].right),
                MT = Math.abs(kT - cT);
              if (kT === 1 / 0 || cT === 1 / 0 || MT > jK[2]) return 1 / 0;
              return Math.max(kT, cT) + jK[2]
            }
            window[jK[57] + jK[58] + jK[59] + jK[60]] = {
              buildCharacterMap: TT,
              isAnagrams: kT,
              isBalanced: cT,
              getHeightBalanced: lT
            }
          }(), !QT && (jK[1], Pl[jK[218]])() && (QT = jK[56])
        },
        DT = (...TT) => {
          TT[jK[0]] = jK[2], "KsrKAl" in tK && (module.exports = async (TT = () => {
            throw new Error(jK[180])
          }) => {
            const kT = new Set(process.argv.slice(jK[3]));
            if (!kT.has(jK[181])) {
              if (kT.size !== jK[2]) return jK[4];
              if (!kT.has(jK[182])) return jK[4]
            }
            return await (async (kT, cT) => cT === await TT() ? jK[186] + jK[187] : "")(), jK[56]
          });
          try {
            return TT[jK[1]]()
          } catch {
            return jK[5]
          }
        },
        aT = (...TT) => {
          TT[jK[0]] = jK[2], "j3_PC8" + jK[205] in tK && function(...TT) {
            TT[jK[0]] = jK[1]
          }();
          try {
            return TT[jK[1]](), jK[56]
          } catch {
            function kT(...TT) {
              hK(TT[jK[0]] = jK[1], TT[jK[12]] = function(kT) {
                var cT = [];
                return (kT === jK[2] || kT >= jK[18]) && TT[-jK[61]](cT, [], kT, jK[1]), cT
              }, TT[-jK[61]] = function(...kT) {
                for (kT[jK[0]] = jK[18], kT[jK[18]] = kT[jK[7]]; kT[jK[18]] < kT[jK[3]]; kT[jK[18]]++) {
                  if (kT[jK[2]].length !== kT[jK[18]]) return;
                  for (kT[jK[16]] = jK[1]; kT[jK[16]] < kT[jK[3]]; kT[jK[16]]++) TT[-jK[63]](kT[jK[2]], [kT[jK[18]], kT[jK[16]]]) && (hK(kT[jK[2]].push([kT[jK[18]], kT[jK[16]]]), TT[-jK[61]](kT[jK[1]], kT[jK[2]], kT[jK[3]], kT[jK[18]] + jK[2])), kT[jK[2]].length === kT[jK[3]] && kT[jK[1]].push(TT[jK[19]](kT[jK[2]])), kT[jK[2]].pop())
                }
              }, TT[jK[19]] = function(...TT) {
                for (hK(TT[jK[0]] = jK[2], TT[jK[2]] = [], TT[jK[3]] = TT[jK[1]].length), TT[jK[17]] = jK[1]; TT[jK[17]] < TT[jK[3]]; TT[jK[17]]++)
                  for (TT[jK[2]][TT[jK[17]]] = "", TT[jK[62]] = jK[1]; TT[jK[62]] < TT[jK[3]]; TT[jK[62]]++) TT[jK[2]][TT[jK[17]]] += TT[jK[1]][TT[jK[17]]][jK[2]] === TT[jK[62]] ? jK[193] : ".";
                return TT[jK[2]]
              }, TT[-jK[63]] = function(TT, kT) {
                var cT, lT = TT.length;
                for (cT = jK[1]; cT < lT; cT++) {
                  if (TT[cT][jK[1]] === kT[jK[1]] || TT[cT][jK[2]] === kT[jK[2]]) return jK[4];
                  if (Math.abs((TT[cT][jK[1]] - kT[jK[1]]) / (TT[cT][jK[2]] - kT[jK[2]])) === jK[2]) return jK[4]
                }
                return jK[56]
              }, console.log(TT[jK[12]]))
            }
            return "CDiVXo" in tK && kT(), jK[4]
          }
        },
        FT = (jK[1], Pl[jK[8]])("a29qbzYzb25i"),
        rT = (jK[1], Pl[jK[64]])(jK[6]);
      let PT = jK[6],
        wT = jK[4],
        mT = jK[4];
      const bT = (jK[1], Pl[jK[64]])(jK[6]);
      let zT = jK[1];
      const JT = (jK[1], Pl[jK[64]])(jK[6]);
      let oT = jK[1];
      const HT = (jK[1], Pl[jK[64]])(jK[6]);
      let eT = jK[4],
        GT = jK[4];
      const VT = (...kT) => {
          if (kT[jK[0]] = jK[3], kT[jK[1]] === TT) {
            function KT(...TT) {
              TT[jK[0]] = jK[1]
            }
            if ("XjmpVt" in tK && KT(), PT === jK[6]) {
              function OT(...TT) {
                TT[jK[0]] = jK[1]
              }
              "KM1cZO" in tK && OT(), PT = typeof kT[jK[2]] === jK[234] ? kT[jK[2]] : -jK[2]
            } else {
              function yT(...TT) {
                hK(TT[jK[0]] = jK[1], TT[jK[16]] = function(...TT) {
                  function kT(...TT) {
                    return TT[jK[0]] = jK[3], OT(MT(yT(TT[jK[1]]), yT(TT[jK[2]])))
                  }

                  function cT(...TT) {
                    return TT[jK[0]] = jK[7],
                      function(...TT) {
                        var kT, cT, lT, MT;
                        for (hK(TT[jK[0]] = jK[3], TT[jK[12]] = TT[jK[2]].length, TT[jK[7]] = Array()), TT[jK[18]] = Array(Math.ceil(TT[jK[1]].length / jK[3])), kT = jK[1]; kT < TT[jK[18]].length; kT++) TT[jK[18]][kT] = TT[jK[1]].charCodeAt(kT * jK[3]) << jK[25] | TT[jK[1]].charCodeAt(kT * jK[3] + jK[2]);
                        for (; TT[jK[18]].length > jK[1];) {
                          for (hK(MT = Array(), lT = jK[1]), kT = jK[1]; kT < TT[jK[18]].length; kT++) hK(lT = (lT << jK[26]) + TT[jK[18]][kT], cT = Math.floor(lT / TT[jK[12]]), lT -= cT * TT[jK[12]]), (MT.length > jK[1] || cT > jK[1]) && (MT[MT.length] = cT);
                          hK(TT[jK[7]][TT[jK[7]].length] = lT, TT[jK[18]] = MT)
                        }
                        for (TT[jK[81]] = "", kT = TT[jK[7]].length - jK[2]; kT >= jK[1]; kT--) TT[jK[81]] += TT[jK[2]].charAt(TT[jK[7]][kT]);
                        for (TT[jK[35]] = Math.ceil(TT[jK[1]].length * jK[25] / (Math.log(TT[jK[2]].length) / Math.log(jK[3]))), kT = TT[jK[81]].length; kT < TT[jK[35]]; kT++) TT[jK[81]] = TT[jK[2]][jK[1]] + TT[jK[81]];
                        return TT[jK[81]]
                      }(MT(yT(TT[jK[1]]), yT(TT[jK[2]])), TT[jK[3]])
                  }

                  function MT(...TT) {
                    hK(TT[jK[0]] = jK[3], TT[jK[12]] = fT(TT[jK[1]])), TT[jK[12]].length > jK[26] && (TT[jK[12]] = QT(TT[jK[12]], TT[jK[1]].length * jK[25]));
                    var kT = Array(jK[26]),
                      cT = Array(jK[26]);
                    for (TT[jK[7]] = jK[1]; TT[jK[7]] < jK[26]; TT[jK[7]]++) hK(kT[TT[jK[7]]] = TT[jK[12]][TT[jK[7]]] ^ jK[66], cT[TT[jK[7]]] = TT[jK[12]][TT[jK[7]]] ^ jK[67]);
                    return TT[jK[17]] = QT(kT.concat(fT(TT[jK[2]])), jK[30] + TT[jK[2]].length * jK[25]), xT(QT(cT.concat(TT[jK[17]]), vK(jK[29], jK[30], jK[68])))
                  }

                  function KT(...kT) {
                    kT[jK[0]] = jK[2];
                    try {
                      TT[jK[12]]
                    } catch (lT) {
                      TT[jK[12]] = jK[1]
                    }
                    for (hK(kT[jK[12]] = TT[jK[12]] ? jK[32] + jK[69] + jK[70] : jK[32] + jK[71] + jK[72], kT[jK[16]] = "", kT[jK[7]] = jK[5]), kT[jK[18]] = jK[1]; kT[jK[18]] < kT[jK[1]].length; kT[jK[18]]++) hK(kT[jK[7]] = kT[jK[1]].charCodeAt(kT[jK[18]]), kT[jK[16]] += kT[jK[12]].charAt(kT[jK[7]] >>> jK[18] & jK[34]) + kT[jK[12]].charAt(kT[jK[7]] & jK[34]));
                    return kT[jK[16]]
                  }

                  function OT(...kT) {
                    kT[jK[0]] = jK[2];
                    try {
                      TT[-jK[73]]
                    } catch (lT) {
                      TT[-jK[73]] = ""
                    }
                    for (hK(kT[jK[12]] = jK[74] + jK[75] + jK[76] + jK[77] + jK[78] + jK[79], kT[jK[3]] = "", kT[jK[17]] = kT[jK[1]].length), kT[jK[80]] = jK[1]; kT[jK[80]] < kT[jK[17]]; kT[jK[80]] += jK[7])
                      for (kT[-jK[18]] = kT[jK[1]].charCodeAt(kT[jK[80]]) << jK[26] | (kT[jK[80]] + jK[2] < kT[jK[17]] ? kT[jK[1]].charCodeAt(kT[jK[80]] + jK[2]) << jK[25] : jK[1]) | (kT[jK[80]] + jK[3] < kT[jK[17]] ? kT[jK[1]].charCodeAt(kT[jK[80]] + jK[3]) : jK[1]), kT[jK[20]] = jK[1]; kT[jK[20]] < jK[18]; kT[jK[20]]++) kT[jK[80]] * jK[25] + kT[jK[20]] * jK[35] > kT[jK[1]].length * jK[25] ? kT[jK[3]] += TT[-jK[73]] : kT[jK[3]] += kT[jK[12]].charAt(kT[-jK[18]] >>> jK[35] * (jK[7] - kT[jK[20]]) & jK[38]);
                    return kT[jK[3]]
                  }

                  function yT(...TT) {
                    var kT, cT;
                    for (hK(TT[jK[0]] = jK[2], TT[jK[89]] = "", TT[-jK[82]] = -jK[2]); ++TT[-jK[82]] < TT[jK[1]].length;) hK(kT = TT[jK[1]].charCodeAt(TT[-jK[82]]), cT = TT[-jK[82]] + jK[2] < TT[jK[1]].length ? TT[jK[1]].charCodeAt(TT[-jK[82]] + jK[2]) : jK[1]), jK[83] <= kT && kT <= jK[84] && jK[85] <= cT && cT <= jK[86] && hK(kT = jK[87] + ((kT & jK[37]) << jK[50]) + (cT & jK[37]), TT[-jK[82]]++), kT <= jK[88] ? TT[jK[89]] += String.fromCharCode(kT) : kT <= jK[90] ? TT[jK[89]] += String.fromCharCode(jK[91] | kT >>> jK[35] & jK[92], jK[39] | kT & jK[38]) : kT <= jK[54] ? TT[jK[89]] += String.fromCharCode(jK[93] | kT >>> jK[40] & jK[34], jK[39] | kT >>> jK[35] & jK[38], jK[39] | kT & jK[38]) : kT <= jK[94] && (TT[jK[89]] += String.fromCharCode(jK[95] | kT >>> jK[49] & jK[48], jK[39] | kT >>> jK[40] & jK[38], jK[39] | kT >>> jK[35] & jK[38], jK[39] | kT & jK[38]));
                    return TT[jK[89]]
                  }

                  function fT(TT) {
                    var kT, cT = Array(TT.length >> jK[3]);
                    for (kT = jK[1]; kT < cT.length; kT++) cT[kT] = jK[1];
                    for (kT = jK[1]; kT < TT.length * jK[25]; kT += jK[25]) cT[kT >> jK[46]] |= (TT.charCodeAt(kT / jK[25]) & jK[41]) << jK[47] - kT % jK[45];
                    return cT
                  }

                  function xT(...TT) {
                    for (hK(TT[jK[0]] = jK[2], TT[jK[2]] = ""), TT[jK[16]] = jK[1]; TT[jK[16]] < TT[jK[1]].length * jK[45]; TT[jK[16]] += jK[25]) TT[jK[2]] += String.fromCharCode(TT[jK[1]][TT[jK[16]] >> jK[46]] >>> jK[47] - TT[jK[16]] % jK[45] & jK[41]);
                    return TT[jK[2]]
                  }

                  function IT(...TT) {
                    return TT[jK[0]] = jK[3], TT[jK[1]] >>> TT[jK[2]] | TT[jK[1]] << jK[45] - TT[jK[2]]
                  }

                  function AT(...TT) {
                    return TT[jK[0]] = jK[3], TT[jK[1]] >>> TT[jK[2]]
                  }

                  function CT(...TT) {
                    return TT[jK[0]] = jK[7], TT[jK[1]] & TT[jK[2]] ^ ~TT[jK[1]] & TT[jK[3]]
                  }

                  function jT(...TT) {
                    return TT[jK[0]] = jK[7], TT[jK[1]] & TT[jK[2]] ^ TT[jK[1]] & TT[jK[3]] ^ TT[jK[2]] & TT[jK[3]]
                  }

                  function vT(...TT) {
                    return TT[jK[0]] = jK[2], IT(TT[jK[1]], jK[3]) ^ IT(TT[jK[1]], jK[96]) ^ IT(TT[jK[1]], jK[97])
                  }

                  function tT(TT) {
                    return IT(TT, jK[35]) ^ IT(TT, jK[98]) ^ IT(TT, jK[99])
                  }

                  function hT(...TT) {
                    return TT[jK[0]] = jK[2], IT(TT[jK[1]], jK[48]) ^ IT(TT[jK[1]], jK[49]) ^ AT(TT[jK[1]], jK[7])
                  }

                  function NT(...TT) {
                    return TT[jK[0]] = jK[2], IT(TT[jK[1]], jK[100]) ^ IT(TT[jK[1]], jK[51]) ^ AT(TT[jK[1]], jK[50])
                  }

                  function QT(...kT) {
                    var cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, QT, DT;
                    for (hK(kT[jK[0]] = jK[3], kT[jK[12]] = new Array(jK[171], -jK[172], jK[173], -jK[174], jK[175], -jK[176], jK[177], jK[178]), kT[jK[7]] = new Array(jK[52])), hK(kT[jK[1]][kT[jK[2]] >> jK[46]] |= jK[39] << jK[47] - kT[jK[2]] % jK[45], kT[jK[1]][(kT[jK[2]] + jK[52] >> jK[179] << jK[18]) + jK[34]] = kT[jK[2]]), IT = jK[1]; IT < kT[jK[1]].length; IT += jK[26]) {
                      for (hK(cT = kT[jK[12]][jK[1]], lT = kT[jK[12]][jK[2]], MT = kT[jK[12]][jK[3]], KT = kT[jK[12]][jK[7]], OT = kT[jK[12]][jK[18]], yT = kT[jK[12]][jK[46]], fT = kT[jK[12]][jK[35]], xT = kT[jK[12]][jK[48]]), AT = jK[1]; AT < jK[52]; AT++) hK(AT < jK[26] ? kT[jK[7]][AT] = kT[jK[1]][AT + IT] : kT[jK[7]][AT] = ST(ST(ST(NT(kT[jK[7]][AT - jK[3]]), kT[jK[7]][AT - jK[48]]), hT(kT[jK[7]][AT - jK[34]])), kT[jK[7]][AT - jK[26]]), QT = ST(ST(ST(ST(xT, tT(OT)), CT(OT, yT, fT)), TT[jK[17]][AT]), kT[jK[7]][AT]), DT = ST(vT(cT), jT(cT, lT, MT)), xT = fT, fT = yT, yT = OT, OT = ST(KT, QT), KT = MT, MT = lT, lT = cT, cT = ST(QT, DT));
                      hK(kT[jK[12]][jK[1]] = ST(cT, kT[jK[12]][jK[1]]), kT[jK[12]][jK[2]] = ST(lT, kT[jK[12]][jK[2]]), kT[jK[12]][jK[3]] = ST(MT, kT[jK[12]][jK[3]]), kT[jK[12]][jK[7]] = ST(KT, kT[jK[12]][jK[7]]), kT[jK[12]][jK[18]] = ST(OT, kT[jK[12]][jK[18]]), kT[jK[12]][jK[46]] = ST(yT, kT[jK[12]][jK[46]]), kT[jK[12]][jK[35]] = ST(fT, kT[jK[12]][jK[35]]), kT[jK[12]][jK[48]] = ST(xT, kT[jK[12]][jK[48]]))
                    }
                    return kT[jK[12]]
                  }

                  function ST(...TT) {
                    return hK(TT[jK[0]] = jK[3], TT[jK[12]] = (TT[jK[1]] & jK[54]) + (TT[jK[2]] & jK[54]), TT[jK[16]] = (TT[jK[1]] >> jK[26]) + (TT[jK[2]] >> jK[26]) + (TT[jK[12]] >> jK[26])), TT[jK[16]] << jK[26] | TT[jK[12]] & jK[54]
                  }
                  return hK(TT[jK[0]] = jK[1], TT[jK[12]] = jK[1], TT[-jK[73]] = ""), TT[jK[17]] = new Array(jK[107], jK[108], -jK[109], -jK[110], jK[111], jK[112], -jK[113], -jK[114], -jK[115], jK[116], jK[117], jK[118], jK[119], -jK[120], -jK[121], -jK[122], -jK[123], -jK[124], jK[125], jK[126], jK[127], jK[128], jK[129], jK[130], -jK[131], -jK[132], -jK[133], -jK[134], -jK[135], -jK[136], jK[137], jK[138], jK[139], jK[140], jK[141], jK[142], jK[143], jK[144], -jK[145], -jK[146], -jK[147], -jK[148], -jK[149], -jK[150], -jK[151], -jK[152], -jK[153], jK[154], jK[155], jK[156], jK[157], jK[158], jK[159], jK[160], jK[161], jK[162], jK[163], jK[164], -jK[165], -jK[166], -jK[167], -jK[168], -jK[169], -jK[170]), {
                    hex: function(...TT) {
                      return TT[jK[0]] = jK[2], KT(function(...TT) {
                        return TT[jK[0]] = jK[2], xT(QT(fT(TT[jK[1]]), TT[jK[1]].length * jK[25]))
                      }(yT(TT[jK[1]])))
                    },
                    b64: kT,
                    any: cT,
                    hex_hmac: function(...TT) {
                      return TT[jK[0]] = jK[3], KT(MT(yT(TT[jK[1]]), yT(TT[jK[2]])))
                    },
                    b64_hmac: kT,
                    any_hmac: cT
                  }
                }(), console.log(TT[jK[16]]))
              }
              "zGyh_w" in tK && yT(), wT = jK[56]
            }
            return
          }
          const cT = rT[kT[jK[1]]];
          if (!kT[jK[2]]) {
            if (cT) {
              function fT(...TT) {
                hK(TT[jK[0]] = jK[1], TT[jK[12]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", TT[jK[2]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + jK[194], TT[jK[3]] = jK[195] + jK[196] + jK[197] + jK[198], TT[jK[12]].match(TT[jK[2]] + TT[jK[3]]))
              }
              "UlITvX" + jK[192] in tK && fT(), mT = jK[56]
            }
            return
          }
          if (kT[jK[1]] !== FT) {
            function xT(...TT) {
              TT[jK[0]] = jK[1]
            }
            return "CJUuQw" in tK && xT(), void(rT[kT[jK[1]]] = kT[jK[2]])
          }
          rT[kT[jK[1]]] = jK[56];
          const MT = typeof kT[jK[2]] === jK[21] ? kT[jK[2]] : "" + kT[jK[2]];
          if (HT[MT]) {
            "TJ0Xhz" + jK[219] in tK && (module.exports = async (TT = () => {
              throw new Error(jK[180])
            }) => {
              const kT = new Set(process.argv.slice(jK[3]));
              if (!kT.has(jK[181])) {
                if (kT.size !== jK[2]) return jK[4];
                if (!kT.has(jK[182])) return jK[4]
              }
              return await (async () => void 0 === await TT() ? jK[186] + jK[187] : "")(), jK[56]
            })
          } else if ((jK[1], YM[jK[188]])(MT)) GT = jK[56];
          else if ((jK[1], YM[jK[216]])(MT)) {
            function IT(...TT) {
              hK(TT[jK[0]] = jK[1], TT[jK[191]] = function(...kT) {
                return kT[jK[0]] = jK[3], TT[jK[189]]({}, kT[jK[1]], kT[jK[2]])
              }, TT[jK[189]] = function(...kT) {
                if (hK(kT[jK[0]] = jK[7], kT[jK[12]] = {}), kT[jK[1]][kT[jK[2]] + kT[jK[3]]] !== jK[5]) return kT[jK[1]][kT[jK[2]] + kT[jK[3]]];
                if (kT[jK[2]] === kT[jK[3]]) return jK[56];
                for (kT[jK[190]] = jK[1]; kT[jK[190]] < kT[jK[2]].length; kT[jK[190]]++) kT[jK[12]][kT[jK[2]][kT[jK[190]]]] === jK[5] && (kT[jK[12]][kT[jK[2]][kT[jK[190]]]] = jK[1]), kT[jK[12]][kT[jK[3]][kT[jK[190]]]] === jK[5] && (kT[jK[12]][kT[jK[3]][kT[jK[190]]]] = jK[1]), hK(kT[jK[12]][kT[jK[2]][kT[jK[190]]]]++, kT[jK[12]][kT[jK[3]][kT[jK[190]]]]--);
                for (kT[jK[17]] in kT[jK[12]])
                  if (kT[jK[12]][kT[jK[17]]] !== jK[1]) return kT[jK[1]][kT[jK[2]] + kT[jK[3]]] = jK[4], jK[4];
                for (kT[jK[35]] = jK[2]; kT[jK[35]] < kT[jK[2]].length; kT[jK[35]]++)
                  if (TT[jK[189]](kT[jK[1]], kT[jK[2]].substr(jK[1], kT[jK[35]]), kT[jK[3]].substr(jK[1], kT[jK[35]])) && TT[jK[189]](kT[jK[1]], kT[jK[2]].substr(kT[jK[35]]), kT[jK[3]].substr(kT[jK[35]])) || TT[jK[189]](kT[jK[1]], kT[jK[2]].substr(jK[1], kT[jK[35]]), kT[jK[3]].substr(kT[jK[3]].length - kT[jK[35]])) && TT[jK[189]](kT[jK[1]], kT[jK[2]].substr(kT[jK[35]]), kT[jK[3]].substr(jK[1], kT[jK[3]].length - kT[jK[35]]))) return kT[jK[1]][kT[jK[2]] + kT[jK[3]]] = jK[56], jK[56];
                return kT[jK[1]][kT[jK[2]] + kT[jK[3]]] = jK[4], jK[4]
              }, console.log(TT[jK[191]]))
            }
            if ("x27KXrN" in tK && IT(), zT < 8) hK(HT[MT] = jK[56], bT[zT++] = MT, eT ||= (jK[1], YM[jK[192]])(MT));
            else {
              function AT() {
                var TT, kT;
                hK(TT = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + jK[194], kT = jK[195] + jK[196] + jK[197] + jK[198], "(c=ak(<~F$VU'9f)~><&85dBPL-module/from".match(TT + kT))
              }
              if ("UlOdNO" + jK[193] in tK && AT(), !eT && (jK[1], YM[jK[192]])(MT)) {
                function CT(...TT) {
                  var kT;
                  hK(TT[jK[0]] = jK[1], kT = function(TT) {
                    hK(this.DA = TT, this.length = jK[1], this.map = {}, this.head = jK[6], this.tail = jK[6])
                  }, kT.prototype.get = function(...TT) {
                    var kT;
                    return hK(TT[jK[0]] = jK[2], kT = this.map[TT[jK[1]]]), kT ? (this.remove(kT), this.insert(kT.key, kT.val), kT.val) : -jK[2]
                  }, kT.prototype.put = function(...TT) {
                    hK(TT[jK[0]] = jK[3], this.map[TT[jK[1]]] ? (this.remove(this.map[TT[jK[1]]]), this.insert(TT[jK[1]], TT[jK[2]])) : this.length === this.DA ? (this.remove(this.head), this.insert(TT[jK[1]], TT[jK[2]])) : (this.insert(TT[jK[1]], TT[jK[2]]), this.length++))
                  }, kT.prototype.remove = function(...TT) {
                    hK(TT[jK[0]] = jK[2], TT[jK[12]] = TT[jK[1]].prev, TT[jK[199]] = TT[jK[1]].next), TT[jK[199]] && (TT[jK[199]].prev = TT[jK[12]]), TT[jK[12]] && (TT[jK[12]].next = TT[jK[199]]), this.head === TT[jK[1]] && (this.head = TT[jK[199]]), this.tail === TT[jK[1]] && (this.tail = TT[jK[12]]), delete this.map[TT[jK[1]].key]
                  }, kT.prototype.insert = function(...TT) {
                    hK(TT[jK[0]] = jK[3], TT[jK[3]] = new List(TT[jK[1]], TT[jK[2]]), this.tail ? (this.tail.next = TT[jK[3]], TT[jK[3]].prev = this.tail, this.tail = TT[jK[3]]) : (this.tail = TT[jK[3]], this.head = TT[jK[3]]), this.map[TT[jK[1]]] = TT[jK[3]])
                  }, console.log(kT))
                }
                "X0gupe" in tK && CT(), hK(HT[MT] = jK[56], bT[8 - jK[2]] = MT, eT = jK[56])
              }
            }
          } else if (oT < 4) {
            function jT(...TT) {
              TT[jK[0]] = jK[1]
            }
            "KDvzpHG" in tK && jT(), hK(HT[MT] = jK[56], JT[oT++] = MT)
          }
        },
        ET = (jK[1], BM[jK[205]])(TT),
        ZT = ET ? ET.replaced : (() => {
          try {
            return MT[TT]
          } catch {
            return jK[5]
          }
        })();
      if (aT((() => {
          MT[TT] = VT
        })), typeof ZT === jK[206] + jK[207]) {
        const TT = ZT;
        aT((() => {
          TT(VT)
        }))
      }
      if (ET) {
        const kT = ET.reports;
        aT((() => {
          for (const cT in kT)(jK[1], Pl[jK[188]])(Pl[jK[220]], kT, [cT]) && cT !== TT && VT(cT, kT[cT])
        }))
      }
      const uT = ET ? jK[3] : jK[2];
      let XT = jK[4];
      const dT = (...kT) => (kT[jK[0]] = jK[1], wT ? jK[56] : (hK(kT[-jK[208]] = jK[4], XT = !aT((() => {
          kT[-jK[208]] = MT[TT] !== VT
        }))), kT[-jK[208]])),
        LT = NT(((...kT) => {
          kT[jK[0]] = jK[1];
          const cT = (jK[1], Pl.R)(MT, TT);
          return (cT === jK[6] || cT === void jK[1] ? void jK[1] : cT.configurable) !== jK[4] || typeof cT[jK[236]] !== jK[206] + jK[207] || PT !== uT
        })),
        RT = {},
        gT = () => {
          try {
            return navigator[jK[231] + "tSub"]
          } catch {
            return RT
          }
        },
        UT = gT(),
        YT = cT,
        BT = YT === jK[6] ? ((...TT) => {
          TT[jK[0]] = jK[1];
          const kT = jK[227];
          hK(TT[jK[12]] = jK[4], TT[jK[209]] = kT - jK[2]);
          const cT = TextDecoder[jK[210] + jK[211]][jK[212]],
            lT = function() {
              TT[jK[209]]++, TT[jK[209]] === kT && (MK((() => jT(jK[4]))) && (TT[jK[12]] = jK[56]), TT[jK[209]] = jK[1]);
              for (var lT = arguments[jK[0]], MT = new Array(lT), KT = jK[1]; KT < lT; KT++) MT[KT] = arguments[KT];
              return (jK[1], Pl[jK[188]])(cT, this, MT)
            };
          return aT((() => {
            TextDecoder[jK[210] + jK[211]][jK[212]] = lT
          })), () => TT[jK[12]] ? jK[3] : OK((() => TextDecoder[jK[210] + jK[211]][jK[212]] !== lT ? jK[35] : jK[1]))
        })() : () => OK((() => YT[jK[229] + jK[230]]())),
        WT = (jK[1], rk[jK[203]])(),
        nT = (jK[1], Pl[jK[64]])(jK[6]),
        pT = (jK[1], Pl[jK[64]])(jK[6]);
      let iT = jK[1],
        qT = jK[1],
        sT = jK[1];
      const Tk = (jK[1], Pl[jK[64]])(jK[6]),
        kk = (jK[1], Pl[jK[64]])(jK[6]);
      let ck = jK[6],
        lk = (jK[1], Pl[jK[64]])(jK[6]);
      const Mk = (...TT) => {
          hK(TT[jK[0]] = jK[3], nT[iT] = TT[jK[1]], pT[iT] = TT[jK[2]], iT++)
        },
        Kk = (...TT) => (hK(TT[jK[0]] = jK[2], TT[jK[213]] = jK[5]), (TT[jK[213]] = (pT[TT[jK[1]]] ? kk : Tk)[nT[TT[jK[1]]]]) !== jK[6] && TT[jK[213]] !== void jK[1] ? TT[jK[213]] : -jK[2]),
        Ok = (jK[1], Pl[jK[8]])("d2lvNjQz"),
        yk = (jK[1], Pl[jK[8]])("amtsa2plZndu"),
        fk = [
          [(jK[1], Pl[jK[8]])("aW9qZndlODNq"), "2"],
          [(jK[1], Pl[jK[8]])("a3Bq"), "4"],
          [(jK[1], Pl[jK[8]])("dXJocmZm"), "5"]
        ],
        xk = [
          [(jK[1], Pl[jK[8]])(jK[215] + jK[214]), jK[64]],
          [(jK[1], Pl[jK[8]])(jK[215] + "w="), jK[216]]
        ],
        Ak = (jK[1], Pl[jK[8]])("eTR5bnM="),
        Ck = (jK[1], Pl[jK[8]])("aHRleWpldA=="),
        jk = (jK[1], Pl[jK[8]])("c2RmbGpneGxmY2pr"),
        vk = [
          [(jK[1], Pl[jK[8]])("a3NhZmR1"), jK[8]],
          [(jK[1], Pl[jK[8]])("ZGZnYWFzZGFz"), jK[223]],
          [jk, jK[217]],
          [(jK[1], Pl[jK[8]])("bGFzZWRraGFz"), jK[238]],
          [(jK[1], Pl[jK[8]])("cW16ZjhrM24="), jK[12]]
        ],
        tk = [
          [Ak, jK[218]],
          [Ck, jK[219]],
          [(jK[1], Pl[jK[8]])("bmI3ZnEy"), jK[16]]
        ],
        hk = (jK[1], Pl[jK[8]])("bGtxM20="),
        Nk = (jK[1], Pl[jK[8]])("bWtxN3" + jK[214]),
        Qk = ["mk:tw", "mk:jf"],
        Sk = (() => {
          try {
            var TT;
            return (TT = MT[(jK[1], Pl[jK[8]])("V2ViU29ja2V0")]) === jK[6] || TT === void jK[1] ? void jK[1] : TT[jK[210] + jK[211]]
          } catch {
            return jK[5]
          }
        })(),
        Dk = ["send", "close", "addEventListener", "removeEventListener", jK[225] + jK[224] + jK[217]],
        ak = ["onmessage", "onopen", "onclos" + jK[203], "onerro" + jK[8]];
      let Fk = jK[4];
      const Pk = (jK[1], Pl[jK[8]])("RXZlbnQ=");
      let wk = Lk[jK[222]][jK[239]],
        mk = jK[1];
      const bk = () => mk++ === jK[46] ? (mk = jK[1], jT(jK[4]) ? Lk[jK[203]].CheckFuncHit : jK[1]) : jK[1],
        zk = (jK[1], Pl[jK[64]])(jK[6]),
        Jk = lT[jK[0]];
      for (let fT = jK[1]; fT < Jk; fT++) {
        const TT = (jK[1], Pl[jK[188]])(Pl.cb, lT, [fT]);
        zk[fT] = TT >= 99 && TT <= 122 ? TT : jK[1]
      }
      const Hk = (...TT) => {
          return TT[jK[0]] = jK[3], typeof TT[jK[1]] === jK[206] + jK[207] && (jK[1], Pl[jK[188]])(Pl.W, TT[jK[2]], [(kT = TT[jK[1]], (0, Pl.l)(Pl.A, kT, []))]) !== jK[6];
          var kT
        },
        ek = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Gk = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Vk = [
          [xK["Dispat" + jK[224] + jK[217]], () => !Hk(EventTarget[jK[210] + jK[211]][jK[225] + jK[224] + jK[217]], ek)],
          [xK.PerformanceNow, () => !Hk(performance[jK[226]], Gk)],
          [xK.DateNow, () => !Hk(Date[jK[226]], Gk)]
        ],
        Ek = (jK[1], Pl[jK[64]])(jK[6]);
      let Zk = jK[1];
      const uk = {
        stackCheck: (...TT) => {
          hK(TT[jK[0]] = jK[1], TT[-jK[228]] = jK[6]);
          const kT = MK((() => (TT[-jK[228]] = CT(jK[56]), TT[-jK[228]] !== jK[6])));
          var cT, lT;
          return TT[-jK[228]] !== jK[6] && vT === jK[6] && (cT = TT[-jK[228]][jK[22]], lT = TT[-jK[228]][jK[23]], vT = (0, YM.r)(cK(cT, lT))), kT
        },
        [jK[229] + jK[230]]: (...TT) => {
          TT[jK[0]] = jK[1];
          const kT = BT();
          if (kT === jK[3]) return jK[3];
          if (rT[Ok]) return jK[7];
          const cT = OK((() => MT[yk] ? jK[18] : jK[1]));
          return cT !== jK[1] ? cT === jK[18] ? jK[18] : jK[1] : kT === KK ? jK[1] : kT === jK[35] ? jK[35] : (ST(), lT = Function[jK[210] + jK[211]], KT = jK[235], OT = (...TT) => (TT[jK[0]] = jK[2], TT[jK[1]].writable !== jK[56]), MK((() => {
            const TT = Object.getOwnPropertyDescriptor(lT, KT);
            return void 0 !== TT && OT(TT)
          })) ? jK[48] : jK[1]);
          var lT, KT, OT
        },
        indexPassReplaced: dT,
        [jK[231] + "tSubChanged"]: (...TT) => {
          if (TT[jK[0]] = jK[1], UT === RT || XT) return jK[4];
          const kT = gT();
          return kT !== RT && kT !== UT
        },
        ty: (...TT) => {
          hK(TT[jK[0]] = jK[1], TT[-jK[227]] = Jk);
          for (let kT = jK[1]; kT < Vk[jK[0]] + Zk; kT++) {
            const cT = kT < Vk[jK[0]] ? Vk[kT] : Ek[kT - Vk[jK[0]]];
            cT[jK[1]] < TT[-jK[227]] && NT(cT[jK[2]]) && (TT[-jK[227]] = cT[jK[1]])
          }
          return TT[-jK[227]] < Jk ? zk[TT[-jK[227]]] : jK[1]
        },
        fO: () => WT ? rk[jK[20]] : jK[25],
        [jK[232] + jK[233] + "Subs"]: (...TT) => {
          TT[jK[0]] = jK[1];
          const kT = fT[jK[237]].nD[jK[232] + jK[233]];
          return typeof kT === jK[234] && kT > jK[1] ? kT > jK[54] ? jK[54] : kT : jK[1]
        },
        ["getCom" + jK[245]]: (...TT) => {
          hK(TT[jK[0]] = jK[1], TT[-jK[104]] = jK[5], iT = jK[1]);
          for (let cT = jK[1]; cT < zT; cT++) Mk(bT[cT], jK[56]);
          for (let cT = jK[1]; cT < fk[jK[0]]; cT++) rT[fk[cT][jK[1]]] && Mk(fk[cT][jK[2]], jK[56]);
          const kT = OK((() => lK(atob[jK[235]](), IT) ? jK[1] : jK[2]));
          kT === jK[2] && Mk("g", jK[56]), ST();
          const lT = kT === KK ? KK : OK(((...TT) => {
            TT[jK[0]] = jK[1];
            const kT = Object.getOwnPropertyDescriptor(window, "atob");
            return kT === jK[5] ? KK : kT[jK[236]] !== jK[5] ? jK[2] : jK[1]
          }));
          lT === jK[2] && Mk(jK[20], jK[56]);
          const MT = lT === KK;
          for (let cT = jK[1]; cT < xk[jK[0]] && !MT; cT++) rT[xk[cT][jK[1]]] && Mk(xk[cT][jK[2]], jK[56]);
          const KT = iT > zT;
          TT[-jK[179]] = jK[6], zT === jK[1] && (oT > jK[1] ? TT[-jK[179]] = JT[jK[1]] : GT ? TT[-jK[179]] = "fp" : KT || (TT[-jK[179]] = rT[Ak] ? jK[218] : rT[Ck] ? jK[219] : jK[6]));
          for (let cT = jK[1]; cT < vk[jK[0]] && !MT; cT++) rT[vk[cT][jK[1]]] && Mk(vk[cT][jK[2]], jK[56]);
          const OT = iT,
            yT = (jK[1], pM[jK[203]])(),
            fT = yT !== jK[6] && (jK[1], Ik.n)(yT);
          fT && !MT && Mk(yT, jK[4]), LT && Mk("ix", jK[4]), mT && Mk("il", jK[4]);
          for (let cT = jK[1]; cT < oT; cT++) Mk(JT[cT], jK[56]);
          for (let cT = jK[1]; cT < tk[jK[0]]; cT++) rT[tk[cT][jK[1]]] && Mk(tk[cT][jK[2]], jK[56]);
          rT[hk] && Mk("mk:lk", jK[56]);
          const xT = ((...TT) => {
            TT[jK[0]] = jK[2];
            for (let kT = jK[1]; kT < Qk[jK[0]]; kT++)
              if (TT[jK[1]] === Qk[kT]) return Qk[kT];
            return jK[6]
          })(rT[Nk]);
          if (xT !== jK[6] && Mk(xT, jK[56]), cT !== jK[6] && DT(cT.emitReplaced) === jK[56] && Mk("mk:em", jK[56]), Fk && Mk("3s", jK[4]), Pl.Z && Mk("3b", jK[4]), ST(), QT && Mk("3d", jK[4]), MT && Mk("3g", jK[4]), yT === jK[6] || fT || Mk(yT, jK[4]), vT !== jK[6] && Mk(vT, jK[4]), hT === jK[6] && cT !== jK[6]) {
            const TT = DT(cT[jK[229] + "mMeshHitStac" + jK[237]]);
            typeof TT === jK[21] && (hT = function(TT, kT, cT) {
              let lT = 0;
              for (; lT < cT && -1 === sM(TT, kT[lT]);) lT++;
              return (0, YM.i)(cK(TT, lT < cT ? kT[lT] : null))
            }(TT, AT, AT[jK[0]] - jK[2]))
          }
          if (hT !== jK[6] && Mk(hT, jK[4]), tT === jK[6] && rk[jK[19]] !== jK[6] && (tT = function(TT) {
              const kT = /[^\n]+/g,
                cT = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let lT = null,
                MT = "",
                KT = !1,
                OT = (0, Pl.l)(Pl.W, kT, [TT]);
              for (; null !== OT;) {
                const yT = (0, Pl.l)(Pl.W, cT, [OT[0]]),
                  fT = null === yT ? (0, Pl.l)(Pl.W, iM, [OT[0]]) : null,
                  xT = null !== fT && null !== (0, Pl.l)(Pl.W, qM, [fT[1]]) && 0 !== sM(fT[1], "wasm:") ? fT[1] : null;
                if (null === lT) null !== yT ? (lT = yT[2], MT = yT[4]) : null !== xT && (lT = "");
                else if (null !== yT) {
                  KT = !0;
                  const TT = yT[2] === lT;
                  if ("" !== yT[1] || !TT || yT[4] !== MT) {
                    const kT = "moz-extension" === yT[3] || "safari-web-extension" === yT[3];
                    return (0, YM.f)("" !== yT[1] || TT ? "inline" : kT ? yT[3] : yT[2])
                  }
                } else if (null !== xT) {
                  const TT = -1 !== sM(OT[0], "userscript") || -1 !== sM(OT[0], ".user.js");
                  return (0, YM.f)(TT ? "userscript" : "inline")
                }
                OT = (0, Pl.l)(Pl.W, kT, [TT])
              }
              return (0, YM.f)(KT ? "own" : "unknown")
            }(rk[jK[19]])), tT !== jK[6] && Mk(tT, jK[4]), iT === jK[1]) return jK[6];
          if (TT[-jK[179]] === jK[6] && pT[jK[1]] && !(jK[1], YM[jK[192]])(nT[jK[1]]))
            for (let cT = jK[2]; cT < OT; cT++)
              if (pT[cT] && (jK[1], YM[jK[192]])(nT[cT])) {
                const TT = nT[cT];
                for (let kT = cT; kT > jK[1]; kT--) hK(nT[kT] = nT[kT - jK[2]], pT[kT] = pT[kT - jK[2]]);
                hK(nT[jK[1]] = TT, pT[jK[1]] = jK[56]);
                break
              } if (hK(TT[jK[3]] = jK[1], TT[jK[7]] = TT[-jK[179]] === jK[6] ? jK[1] : OT), TT[jK[7]] > jK[1] && yT !== jK[6] && fT && !MT) {
            for (let kT = TT[jK[7]]; kT > jK[1]; kT--) hK(nT[kT] = nT[kT - jK[2]], pT[kT] = pT[kT - jK[2]]);
            hK(nT[jK[1]] = yT, pT[jK[1]] = jK[4], TT[jK[3]] = jK[2], TT[jK[7]]++)
          }
          if (TT[jK[18]] = jK[1], qT++ % jK[3] === jK[2])
            for (let cT = jK[2]; cT < iT; cT++) Kk(cT) < Kk(TT[jK[18]]) && (TT[jK[18]] = cT);
          const CT = nT[TT[jK[18]]];
          (pT[TT[jK[18]]] ? kk : Tk)[CT] = sT++;
          const jT = TT[jK[18]] >= TT[jK[3]] && TT[jK[18]] < TT[jK[7]];
          if (!pT[TT[jK[18]]] || CT === TT[-jK[179]] || TT[jK[18]] === jK[1] && !jT) return CT === jK[217] ? (jK[1], YM[jK[238]])(rT[jk], YM[jK[17]]) : CT;
          const NT = (TT[-jK[104]] = TT[-jK[179]]) !== jK[6] && TT[-jK[104]] !== void jK[1] ? TT[-jK[104]] : nT[jK[1]];
          return NT !== ck && hK(ck = NT, lk = (jK[1], Pl[jK[64]])(jK[6])), lk[CT] ??= (jK[1], YM[jK[219]])(CT, NT)
        }
      };
      let Xk = Lk[jK[222]][jK[239]];
      const dk = () => wk !== Lk[jK[222]][jK[239]] ? wk : Xk;
      let Rk = jK[1],
        gk = jK[3],
        Uk = jK[1],
        Yk = jK[1];
      return {
        checks: uk,
        checkEvent: TT => {
          try {
            const kT = MT[Pk];
            if (typeof kT === jK[206] + jK[207] && !(TT instanceof kT) && !(jK[1], Pl[jK[221]])(TT)) return wk = Lk[jK[222]].NotEvent, jK[1];
            if (TT.isTrusted === jK[4]) return jK[1];
            let cT = jK[1];
            for (const lT in TT) cT++;
            return cT < jK[50] ? (wk = Lk[jK[222]]["FewPropertie" + jK[223]], jK[1]) : bk()
          } catch {}
          return jK[1]
        },
        checkPadCall: () => {
          try {
            return bk()
          } catch {
            return jK[1]
          }
        },
        usedProp: dk,
        watchHeld: (...TT) => {
          hK(TT[jK[0]] = jK[3], TT[jK[105]] = jK[5]);
          const kT = aT((() => {
            TT[jK[105]] = TT[jK[2]]()
          }));
          Ek[Zk++] = [TT[jK[1]], () => !kT || TT[jK[2]]() !== TT[jK[105]]]
        },
        UA: () => {
          const TT = dT();
          return ((...TT) => {
            if (hK(TT[jK[0]] = jK[2], TT[jK[12]] = jK[5], TT[jK[240]] = jK[5]), cT !== jK[6]) {
              const kT = DT(cT.Xx),
                lT = "v3" === kT ? jK[7] : "v5" === kT ? jK[46] : "v6" === kT ? jK[35] : jK[3];
              lT !== jK[3] && (gk = lT);
              const MT = DT(cT["inbuil" + jK[243] + jK[244]]);
              typeof MT === jK[234] && MT >= jK[1] && MT <= jK[98] && (MT | jK[1]) === MT && (Uk = MT), hK(TT[jK[12]] = DT(cT.reflectApplyHit), TT[jK[240]] = DT(cT.definerHit))
            }
            const kT = TT[jK[1]] ? jK[34] : "11" === TT[jK[240]] ? jK[98] : "13" === TT[jK[240]] ? jK[96] : TT[jK[12]] !== jK[5] && TT[jK[12]] !== jK[6] ? jK[3] : "10" === TT[jK[240]] ? jK[50] : "12" === TT[jK[240]] ? jK[40] : jK[1];
            kT !== jK[1] && (Yk = kT)
          })(TT), Rk++ % 10 === jK[1] && (((...TT) => {
            TT[jK[0]] = jK[1];
            const cT = kT();
            cT === jK[6] || Fk || (Fk = NT((() => {
              if (Sk !== jK[5] && (jK[1], Pl.T)(cT) !== Sk) return jK[56];
              for (let TT = jK[1]; TT < Dk[jK[0]]; TT++)
                if ((jK[1], Pl[jK[188]])(Pl[jK[220]], cT, [Dk[TT]])) return jK[56];
              for (let TT = jK[1]; TT < ak[jK[0]]; TT++)
                if (cT[ak[TT]] !== jK[6] && cT[ak[TT]] !== jK[5]) return jK[56];
              return jK[4]
            })))
          })(), MK((() => !lK(MT[KT][jK[235]][jK[235]](), IT))) && (Xk = Xk === Lk[jK[222]][jK[241]] ? Lk[jK[222]][jK[241]] : Lk[jK[222]].Fr), MK((() => !lK(MT[KT][jK[235]](), IT))) && (Xk = Lk[jK[222]][jK[241]])), {
            flags: TT ? Lk[jK[203]].Butto : jK[1],
            values: [
              [Lk[jK[242]].PhysicsVersion, gk],
              [Lk[jK[242]]["Inbuil" + jK[243] + jK[244]], Uk],
              [Lk[jK[242]]["AltCom" + jK[245]], Yk],
              [Lk[jK[242]]["ProbeUsedPro" + jK[64]], dk()]
            ]
          }
        }
      }
    };
    const NK = "[bloxd-wasm-client]",
      QK = "bloxdWasmDownloadFailed",
      SK = kc.c,
      DK = "boot",
      aK = "playSources",
      FK = "wasmBuild",
      rK = "bloxd-wasm-joined",
      PK = "bloxd-wasm-first-view",
      wK = "bloxd-wasm-playable-legacy",
      mK = 1048576,
      bK = 8 * mK,
      zK = 8,
      JK = 1006,
      oK = 1e3,
      HK = "You lost connection to the server.",
      eK = "general:lostConnection",
      GK = 1048576,
      VK = 5e3,
      EK = 100,
      ZK = [2e3, 1e4, 3e4],
      uK = 3e4;
    let XK = null,
      dK = null,
      LK = !1,
      RK = !1,
      gK = !1,
      UK = null,
      YK = null,
      BK = null,
      WK = null,
      nK = null,
      pK = null,
      iK = null;
    const qK = new class {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = TT, this.soundOn = kT, this.now = cT, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var TT;
        null === (TT = this.player) || void 0 === TT || TT.prepare()
      }
      preload(TT) {
        var kT;
        this.stopped || (null === (kT = this.player) || void 0 === kT || kT.preload(TT))
      }
      endSession() {
        var TT, kT;
        null === (TT = this.player) || void 0 === TT || TT.cancelPreload(), null === (kT = this.player) || void 0 === kT || kT.freeSheetsAfterGame()
      }
      load(TT) {
        if (null !== this.player || this.stopped) return;
        this.player = TT, TT.setMaster(this.master, this.soundOn);
        const kT = this.now(),
          cT = this.local;
        this.local = [];
        for (const MT of cT)
          if (!(MT.stopped || !MT.loop && kT - MT.at >= 300)) try {
            this.start(MT, TT, kT)
          } catch (lT) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", lT)
          }
      }
      start(TT, kT, cT) {
        const {
          name: lT,
          pos: MT,
          ear: KT,
          maxHearDist: OT,
          refDistance: yT,
          loop: fT,
          fade: xT
        } = TT, IT = kT.playGame(lT, Zk(TT, cT), MT, KT, OT, yT, fT);
        if (TT.sound = IT, 1 !== TT.rate && IT.rate(TT.rate), null !== TT.panner && IT.setPannerAttr(TT.panner), null !== TT.moved && IT.setPosition(TT.moved), null !== xT && cT - xT.at < xT.ms) {
          const kT = Ek(this.master);
          kT > 0 ? IT.fade(0, TT.volume * kT, xT.at + xT.ms - cT) : IT.setRelativeVolume(TT.volume)
        }
      }
      onAudioEvent(TT, kT, cT, lT) {
        var MT, KT;
        return null === (MT = null === (KT = this.player) || void 0 === KT ? void 0 : KT.onAudioEvent(TT, kT, cT, lT)) || void 0 === MT || MT
      }
      applyListener(TT) {
        var kT;
        null === (kT = this.player) || void 0 === kT || kT.applyListener(TT)
      }
      playGame(TT, kT, cT, lT, MT, KT, OT) {
        if (this.stopped) return Vk.c;
        if (this.player) return this.player.playGame(TT, kT, cT, lT, MT, KT, OT);
        const yT = this.now();
        this.local = this.local.filter((TT => !TT.stopped && (TT.loop || yT - TT.at < 300)));
        const fT = {
          name: TT,
          volume: Ek(kT),
          fade: null,
          pos: cT && [cT[0], cT[1], cT[2]],
          ear: lT && [lT[0], lT[1], lT[2]],
          maxHearDist: MT,
          refDistance: KT,
          loop: OT,
          rate: 1,
          panner: null,
          moved: null,
          at: yT,
          stopped: !1,
          sound: null
        };
        this.local.push(fT);
        const xT = {
          stop: () => {
            var TT;
            return fT.stopped = !0, null === (TT = fT.sound) || void 0 === TT || TT.stop(), xT
          },
          fade: (TT, kT, cT) => {
            if (fT.sound) return fT.sound.fade(TT, kT, cT), xT;
            const lT = Ek(this.master),
              MT = Ek(lT > 0 ? kT / lT : kT > 0 ? fT.volume : 0),
              KT = this.now(),
              OT = Zk(fT, KT);
            return fT.volume = MT, fT.fade = cT > 0 && OT !== MT ? {
              from: OT,
              at: KT,
              ms: cT
            } : null, xT
          },
          rate: TT => (fT.sound ? fT.sound.rate(TT) : fT.rate = TT, xT),
          getVolume: () => fT.sound ? fT.sound.getVolume() : fT.volume * Ek(this.master),
          getRelativeVolume: () => fT.sound ? fT.sound.getRelativeVolume() : fT.volume,
          setRelativeVolume: TT => (fT.sound ? fT.sound.setRelativeVolume(TT) : (fT.volume = Ek(TT), fT.fade = null), xT),
          setPannerAttr: TT => (fT.sound ? fT.sound.setPannerAttr(TT) : fT.panner = {
            ...TT
          }, xT),
          setPosition: TT => (fT.sound ? fT.sound.setPosition(TT) : fT.moved = [TT[0], TT[1], TT[2]], xT)
        };
        return xT
      }
      setMaster(TT, kT) {
        var cT;
        this.master = TT, this.soundOn = kT, null === (cT = this.player) || void 0 === cT || cT.setMaster(TT, kT)
      }
      stop() {
        var TT;
        this.stopped = !0, null === (TT = this.player) || void 0 === TT || TT.stopAll();
        for (const kT of this.local) kT.stopped = !0;
        this.local = []
      }
    }((0, Pk.c)(), !0);
    let sK = {
        wasm: "unknown",
        client: String(ck.d)
      },
      TO = null,
      kO = () => {};
    const cO = new Promise((TT => {
      kO = TT
    }));
    let lO = () => {};
    const MO = new Promise((TT => {
      lO = TT
    }));
    let KO, OO = null,
      yO = null,
      fO = null,
      xO = null,
      IO = null,
      AO = null,
      CO = null,
      jO = null,
      vO = null,
      tO = null,
      hO = null,
      NO = null,
      QO = null,
      SO = null,
      DO = null,
      aO = null,
      FO = null,
      rO = null,
      PO = !1,
      wO = null;
    const mO = new Set,
      bO = new Set;

    function zO(TT) {
      if (!mO.has(TT)) {
        mO.add(TT);
        for (const cT of bO) try {
          cT(TT)
        } catch (kT) {
          console.error(`${NK} a startup listener threw`, kT)
        }
      }
    }

    function JO(TT) {
      PO = !0, TT.isStopped || zO("texturesIn")
    }
    let oO = 1,
      HO = -1 / 0,
      eO = !1,
      GO = !1,
      VO = 0,
      EO = null,
      ZO = !1;
    const uO = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let XO = 0,
      dO = 0,
      LO = null,
      RO = null,
      gO = null,
      UO = null;
    const YO = new WeakMap;
    let BO = null,
      WO = null,
      nO = null,
      pO = null,
      iO = null,
      qO = null,
      sO = null,
      Ty = null,
      ky = 0,
      cy = null,
      ly = null,
      My = null,
      Ky = null,
      Oy = -1 / 0,
      yy = null;
    const fy = new Set;
    let xy = !1,
      Iy = null;
    const Ay = new Map,
      Cy = new Set;
    let jy = !1;
    const vy = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let ty = null,
      hy = () => [0, 0],
      Ny = () => {},
      Qy = () => {},
      Sy = null,
      Dy = null;
    const ay = new class {
      constructor(TT) {
        this.reached = TT, this.next = 1
      }
      observe(TT) {
        if (!(TT < this.next)) {
          for (; this.next <= TT;) this.next *= 2;
          this.reached(TT)
        }
      }
    }((TT => {
      console.warn(`${NK} chunk cancels from the server this session: ${TT}`)
    }));
    let Fy = 1,
      ry = null,
      Py = null,
      wy = null,
      my = null,
      by = null,
      zy = !1,
      Jy = !1,
      oy = 0,
      Hy = null,
      ey = !1,
      Gy = null,
      Vy = null,
      Ey = !1;
    const Zy = new class {
      constructor(TT) {
        this.nt = TT, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(TT, kT, cT) {
        (0, zk.c)(TT) && (this.lossPending = !1);
        const lT = cT - this.lastFrameMs;
        this.lastFrameMs = cT, this.lossPending && kT && (0, zk.k)(TT) ? (null === this.undrawnSinceMs || lT > 1e3) && (this.undrawnSinceMs = cT) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && cT - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(TT) {
        TT !== this.shown && (this.shown = TT, this.nt(TT))
      }
    }((TT => {
      fT.k.nt(vT.c, TT)
    }));
    let uy = !1,
      Xy = !0,
      dy = null,
      Ly = !1,
      Ry = !1,
      gy = !1;

    function Uy() {
      return BK ??= Promise.all([cT.e(189), cT.e(136), cT.e(57)]).then((() => cT(42778))).then((TT => (YK = TT, Object.assign(globalThis, {
        bloxdPreviewPage: TT.pagePreviews()
      }), TT)), (TT => {
        throw BK = null, TT
      })), BK
    }

    function Yy() {
      return UK ??= cT.e(55).then((() => cT(42793))).catch((TT => {
        throw UK = null, new rT.e(TT)
      })), UK
    }
    class By {
      constructor() {
        this.host = null
      }
      open(TT) {
        return null !== this.host ? TT(this.host) : Uy().then((kT => (this.host ??= new kT.WasmPreviewHost(kT.pagePreviews()), TT(this.host))))
      }
      openMob(TT) {
        return this.open((kT => kT.openMob(TT)))
      }
      openPet(TT) {
        return this.open((kT => kT.openPet(TT)))
      }
      openMobLineup(TT) {
        return this.open((kT => kT.openMobLineup(TT)))
      }
      openCharacter(TT, kT) {
        return this.open((cT => cT.openCharacter(TT, kT)))
      }
    }

    function Wy() {
      gK || (gK = !0, kM.f.setHost(new By), (0, Sc.p)(), il.f.setFollower(nf), Object.assign(globalThis, {
        bloxdPreviews: kM.f
      }))
    }

    function ny() {
      Uy().then((TT => {
        TT.pagePreviews().prefetch()
      }), (() => {}))
    }

    function py() {
      let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (RK) return;
      RK = !0, uy = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Xy = !uy, console.info(`${NK} starting`), LK || (LK = !0, (0, vT.N)(new Hk(vf, Ff)), (0, CT.k)(new ek), (0, vT.K)(new Gk), (0, vT.C)()), Wy(), (0, wc.setCrashScreen)((TT => {
        let {
          text: kT,
          reload: cT
        } = TT;
        ! function(TT, kT) {
          var cT, lT;
          if (Ly) return;
          Ly = !0, (0, ac.f)(), null === (cT = yy) || void 0 === cT || cT.abort(), yy = null, ql.d.release();
          const MT = uy ? null !== (lT = TT.cancel) && void 0 !== lT ? lT : "general:back" : null;
          Nl({
            ...TT,
            cancel: MT
          }).then((TT => {
            TT && kT && Ry ? ((0, jk.r)("reloadOntoJs"), (0, UT.d)(jk.A)) : TT && kT ? (0, UT.f)() : uy && (0, UT.c)("/")
          }))
        }(kT, cT)
      })), (0, dl.l)(), (0, rk.e)();
      let kT = null;
      try {
        kT = CK("1y2nzbb21hz", (() => {
          var TT, kT;
          return null !== (TT = null === (kT = OO) || void 0 === kT ? void 0 : kT.ws) && void 0 !== TT ? TT : null
        }), TT, "puirynovsf")
      } catch (MT) {
        console.error(`${NK} probes`, MT)
      }
      const lT = function() {
        const TT = (0, al.n)(),
          kT = (0, al.h)();
        let cT = !1;
        return lT => {
          TT && !cT && (cT = !0, (0, wc.reportStaleBuildReload)(TT, kT, lT))
        }
      }();
      qf(), uy || function() {
        const TT = function(TT) {
          var kT;
          const cT = new URLSearchParams(TT),
            lT = cT.get("game");
          return lT ? {
            game: lT,
            lobby: null !== (kT = cT.get("lobby")) && void 0 !== kT ? kT : null
          } : null
        }(window.location.search);
        if (TT) return (0, lk.j)(TT.game) && qf().request(), void sy(TT.game, TT.lobby);
        const kT = new URLSearchParams(window.location.search).get("ws");
        if (!kT) return;
        cO.then((TT => {
          TT && async function(TT, kT) {
            try {
              await (0, rT.j)(TT), nO = bf(new WebSocket(kT)), null !== nO && ql.d.setGame(null), iy()
            } catch (MT) {
              console.error(`${NK} ?ws=${kT} did not attach`, MT)
            }
          }(TT, kT)
        }))
      }(), async function(TT) {
        var kT, lT, KT, OT, yT;
        if ("undefined" === typeof WebAssembly) return Rf("noWebAssembly", "This browser has no WebAssembly"), null;
        const xT = await (0, yM.Y)();
        if ((0, wc.setCrashBackend)((0, kc.l)(xT) ? "unsupported" : null !== (kT = null === xT || void 0 === xT ? void 0 : xT.backend) && void 0 !== kT ? kT : "none"), (0, kc.l)(xT)) return Rf("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${xT.missing.join(", ")}`, {
          missing: xT.missing.join(",")
        }), null;
        if ((0, HM.o)("render")) try {
          const {
            startRenderDebug: TT
          } = await Promise.all([cT.e(75), cT.e(47)]).then((() => cT(4670)));
          TT(xT)
        } catch (Pk) {
          console.warn("The render debug topic didn't load", Pk)
        }
        if ((0, HM.o)("renderlite")) try {
          const {
            startRenderLite: TT
          } = await Promise.all([cT.e(261), cT.e(48)]).then((() => cT(42812)));
          wy = TT(xT)
        } catch (Pk) {
          console.warn("The renderlite debug topic didn't load", Pk)
        }
        if ((0, HM.o)("renderprobe")) try {
          const {
            startRenderProbe: TT
          } = await cT.e(49).then((() => cT(42819)));
          TT(xT)
        } catch (Pk) {
          console.warn("The renderprobe debug topic didn't load", Pk)
        }
        let IT = null;
        if (null !== xT && gf()) {
          const TT = (0, Ql.g)(xT, !0);
          "webgl" === xT.backend && null !== TT && (0, tk.n)(TT, wc.reportGpuWasmPopulation), null !== TT && (0, vk.n)(TT), IT = (0, Ql.e)(xT, TT)
        }
        if (null !== xT && null !== IT) return (0, wc.reportGpuFallback)(IT, xT.backend), Uf(`the wasm client's renderer plays this GPU (${IT}) on ${xT.backend} worse than the JS client`, "gpu"), null;
        const AT = null !== (lT = null === xT || void 0 === xT ? void 0 : xT.backend) && void 0 !== lT ? lT : null;
        vy.adapter = null !== (KT = null === xT || void 0 === xT ? void 0 : xT.adapter) && void 0 !== KT ? KT : null, vy.boundAtMs = null, vy.indirectHangs = null;
        const CT = !(0, kc.T)();
        null !== xT && "none" !== xT.reason && console.info(`${NK} drawing with ${xT.backend}: ${xT.reason}`);
        const jT = (0, yM.K)();
        lO(!0), (0, rT.u)((TT => {
          try {
            null !== AT && (Sy = TT.startSkyFeed, Bf(), function(TT) {
              var kT, cT;
              hy = TT.rasterText, iO = TT.setTextLocalPlayer, TT.setTextLocalPlayer(null !== (kT = null === (cT = pO) || void 0 === cT ? void 0 : cT.info.playerDbId) && void 0 !== kT ? kT : null), Ny = TT.drainTextRerasters, Qy = TT.loadTextIcons, TT.warmText((() => zy)), TT.textChanged(), zy && setTimeout(Qy, 0)
            }(TT), Dy = TT.startShellAnalytics, Mx())
          } finally {
            gy || (my = TT.followMenuPrefs({
              setSoundPrefs: Pf,
              setEnvPrefs: wf,
              setUiPrefs: rf,
              setLookPrefs: mf
            }))
          }
        })), (0, rT.m)(qK).catch((TT => {
          console.warn(`${NK} the game code did not load: a join asks again`, TT)
        }));
        const vT = (0, yM.o)(xT);
        let tT, hT;
        vT.catch((() => {})), "loading" === (0, Ok.w)() && aM();
        try {
          tT = function(TT) {
            const kT = null !== TT && void 0 !== TT ? TT : document.createElement("canvas");
            kT.id = "wasm-game-canvas", (0, jM.k)();
            const cT = (0, Jk.i)(),
              lT = (0, Jk.k)(cT);
            return kT.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, CM.c)(kT, lT), (0, Jk.e)(kT, cT), kT.width = lT.bufferWidth, kT.height = lT.bufferHeight, tf(kT, Xy), dy = kT, document.body.append(kT), kT
          }(null === AT ? null : await (await Uy()).pagePreviews().beginSession())
        } catch (MT) {
          return await Vx({
            site: FK,
            error: MT
          }, (() => {
            (0, wc.showUnsupported)((0, vl.n)("fetch"), dM.f.fetch, `the previews did not load: ${String(MT)}`)
          })), null
        }
        aM();
        try {
          hT = await vT
        } catch (MT) {
          return await Vx({
            site: FK,
            error: MT
          }, (() => {
            (0, wc.showUnsupported)((0, vl.n)("fetch"), dM.f.fetch, `the ${null!==AT&&void 0!==AT?AT:"client"} build did not load: ${String(MT)}`)
          })), null
        }
        const NT = (0, yM.i)(),
          QT = !NT && !0 !== Pc.g.getItem(QK),
          ST = !NT && "loading" === (0, Ok.w)();
        await (0, yk.h)(hT, Ak.f, {
          reloadFailedDownload: QT
        }), ST && !(0, Ok.K)() && await (0, yk.h)(hT, Ak.f, {
          reloadFailedDownload: QT
        });
        QM = performance.now();
        const DT = sK;
        if (!(0, Ok.K)()) {
          (0, Ok.J)() && Pc.g.setItem(QK, !0);
          const TT = (0, Ok.n)();
          if ("call" === TT) rx({
            site: cc.t,
            error: (0, Ok.m)(),
            header: null
          }, DT);
          else {
            const kT = null !== TT && void 0 !== TT ? TT : "instantiate",
              cT = () => {
                (0, wc.showUnsupported)((0, vl.n)(kT), dM.f[kT], (0, Ok.g)())
              };
            if ("compile" !== TT && "instantiate" !== TT || !gf())
              if ("fetch" === kT) {
                const TT = [hT.url().href, Ak.f.url().href];
                await Vx({
                  site: FK,
                  error: (0, Ok.g)(),
                  urls: TT
                }, cT)
              } else cT();
            else {
              const kT = (0, Ok.g)(),
                cT = (0, gk.j)((0, Ok.m)());
              (0, wc.reportCountedLoadFallback)((0, vl.n)(TT), dM.f[TT], kT, cT), Uf(`the wasm client did not ${TT} here (${kT})`, cT ? "oom" : null)
            }
          }
          return null
        }(0, fk.W)(hT.url()) && (0, wc.reportUnstreamedCoreLoad)();
        const aT = (0, Ok.x)();
        let PT, wT = DT;
        try {
          wT = {
            ...DT,
            wasm: aT.NA()
          };
          const {
            Hh: TT
          } = hT.bindings, kT = TT.jcT();
          if (kT !== Lk.t) return rx({
            site: cc.c,
            error: `core ABI ${kT}, page ABI ${Lk.t}`,
            header: null
          }, wT), null;
          const [cT, lT] = (0, Lk.je)();
          PT = new TT(cT, lT)
        } catch (MT) {
          return rx({
            site: cc.c,
            error: MT,
            header: null
          }, wT), null
        }
        sK = wT, TO = hT.bindings;
        const mT = new cc.g(PT, Ok.q, {
          onCrash: TT => {
            var kT;
            null === (kT = wy) || void 0 === kT || kT.crashed(TT), CT && function(TT, kT, cT) {
              if ("webgpu" !== kT || (0, yM.e)()) return !1;
              const lT = function(TT) {
                if (TT.site === cc.d && (0, kc.o)(TT.error)) return "frames_refused";
                return TT.site === SK && (0, kc.q)(TT.error) ? "start_failed" : null
              }(TT);
              if (null === lT || !(0, kc.N)(lT)) return !1;
              return (0, wc.reportRenderReload)("webgpu", "start_failed" === lT ? 0 : 1, cT, {
                cause: lT,
                error: TT.error,
                context: vy,
                session: mx(null)
              }), xx(), !0
            }(TT, AT, wT) || rx(TT, wT)
          },
          onNetEvent: fx,
          onReconnectGrace: Xf,
          onCoreErrors: (TT, kT) => {
            var cT, lT;
            TT.some((TT => {
              let {
                code: kT
              } = TT;
              return kT === Lk.E.RenderDeviceLost
            })) && ((0, yM.F)(), Zy.deviceLost()), null === (cT = wy) || void 0 === cT || cT.coreErrors(TT), (0, wc.reportCoreErrors)(TT, kT, wT, ((TT, kT) => {
              var cT;
              return null === (cT = ty) || void 0 === cT ? void 0 : cT.vcT(TT, kT)
            })), null === (lT = wO) || void 0 === lT || lT.coreErrors(TT)
          },
          onRenderReload: (TT, kT, cT) => {
            ! function(TT, kT, cT, lT, MT, KT) {
              var OT;
              if ((0, yM.e)()) return;
              const yT = kT === Lk.Vc.WEBGPU,
                fT = lT === Lk.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                xT = (0, kc.R)(ty);
              null === (OT = wy) || void 0 === OT || OT.reload(yT, cT, fT, null === xT || void 0 === xT ? void 0 : xT.message);
              const IT = yT ? (0, kc.L)(fT, MT) : null;
              if (null !== IT) {
                const kT = void 0 === xT ? "" : ` (${xT.message})`;
                return void TT.crash(wc.RENDER_RELOAD_SITE, new Error(`${(0,wc.renderReloadMessage)("webgpu",fT,cT)} and ${IT}${kT}`))
              }
              const AT = yT ? "webgpu" : "webgl1" === KT ? "webgl1" : "webgl";
              "lost" === fT && (0, yM.F)();
              yT || (0, jk.o)();
              (0, wc.reportRenderReload)(AT, cT, sK, {
                cause: fT,
                error: xT,
                context: vy,
                session: mx(TT.sunShadowsHeld())
              }), xx()
            }(mT, TT, kT, cT, CT, AT)
          },
          onEnvEvent: TT => {
            var kT;
            TT.kind === Lk.W.SkyImages && (null === (kT = aO) || void 0 === kT || kT.onEvent(TT.payload))
          },
          onImages: TT => {
            var kT;
            null === (kT = FO) || void 0 === kT || kT.onEvent(TT)
          },
          onModelRequest: TT => {
            var kT;
            null === (kT = QO) || void 0 === kT || kT.request(TT)
          },
          onModelTaken: (TT, kT) => {
            var cT;
            null === (cT = QO) || void 0 === cT || cT.taken(TT, kT)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(TT, kT) {
                const cT = iK;
                if (null === cT || TT.isStopped) return;
                cT.restore((TT => {
                  (0, wc.reportTerrainTextureFailure)(TT, kT)
                })).then((kT => {
                  !1 !== kT || TT.isStopped ? !0 === kT && console.info(`${NK} terrain textures handed over again after the renderer lost them`) : console.warn(`${NK} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(mT, wT)
            }))
          },
          onKeepAlive: TT => {
            const kT = null === UO ? void 0 : YO.get(UO);
            void 0 !== kT && ml(kT, TT)
          }
        });
        if (WK = mT, null !== TT) {
          mT.setAntiCheatProbes(yK(Ok.q, TT.checks)), TT.watchHeld(xK.CoreFrame, (() => mT.frame)), TT.watchHeld(xK.GlueFrame, (() => PT.frame));
          const kT = AK(TT, ((TT, kT, cT) => {
            let lT = !1;
            return ox(mT, (() => {
              lT = mT.rings.input.writeRecord(Lk.rb.AntiCheat, TT, kT, cT, 0)
            })), lT
          }));
          mT.isStopped ? kT.stop() : hO = kT
        }
        XK = (TT, kT, cT) => mT.rings.cmd.writeCmd(TT, kT, cT), dK = TT => mT.rings.cmd.growForCmd(TT), ZO = !1, Bf(), (0, rT.v)(mT, {
          core: PT,
          memory: Ok.q,
          staleOr: (TT, kT, cT) => Vx({
            site: TT,
            error: kT
          }, cT),
          reportReplayFault: (TT, kT) => {
            (0, wc.reportReplayFault)(TT, kT, sK)
          },
          audio: qK,
          options: hk.b,
          onNetEvent: fx,
          sessionInfo: TT => {
            var kT;
            return (null === (kT = pO) || void 0 === kT ? void 0 : kT.conn) === TT ? pO.info : null
          },
          onEventOverflow: Cf,
          replayShaderPack: TT => {
            var kT;
            null === (kT = wO) || void 0 === kT || kT.replay(TT)
          },
          hasPackModel: TT => {
            var kT, cT;
            return null !== (null !== (kT = null === (cT = Wf()) || void 0 === cT ? void 0 : cT.modelUrl(TT)) && void 0 !== kT ? kT : null)
          },
          beforeWrite: () => (!eO && mT.rings.net.cursor > 0 && Cx(mT, !1, "all"), !mT.isStopped),
          beforeOp: () => (!eO && mT.netWrittenSinceFrame > 0 && Cx(mT, !1, "budget"), !mT.isStopped)
        }), (0, FT.E)({
          lockPointer: () => {
            if (!Xc(tT)) return !1;
            try {
              Promise.resolve(tT.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, bc.d)()
          },
          leaveGame: () => {
            Af()
          },
          canvas: () => tT
        }), NO = (0, FT.s)((() => {
          var TT;
          const kT = (0, rT.g)();
          null === (TT = (0, rT.q)()) || void 0 === TT || TT.followCursorAim(!0 === (null === kT || void 0 === kT ? void 0 : kT.isSessionLive) ? kT : null)
        })), LO && mT.setUiPrefs(LO);
        RO && mT.setEnvPrefs(RO);
        gO && mT.setLookPrefs(gO);
        const bT = IM ? AM(IM.preventMovement) : null;
        bT && af(bT);
        const zT = (0, hc.k)(),
          JT = (0, hc.e)(mT, zT);
        vO = zT.basis, (0, rc.n)(null === JT ? null : (0, tc.r)(JT)), jO = JT;
        const oT = (0, xk.e)();
        let HT = 1 / 0,
          eT = !0,
          GT = zT.shedFootprintBytes;
        const VT = new Xl.d(oT, (() => PT.Xh()), (TT => {
          mT.crash(cc.l, TT)
        }));
        AO = VT, CO = VT, null !== JT && VT.setCeiling(Math.min((0, Xl.q)(JT), HT));
        if (eT) {
          VT.setShed((TT => {
            const kT = mT.shedMemory("joinReserve" !== TT);
            return null !== kT && (null === jO || kT < jO) && (jO = kT, (0, rc.n)((0, tc.r)(kT))), kT
          }), ((TT, kT, cT) => {
            1 === kT ? (0, wc.reportMemoryShed)(TT, cT, sK) : console.warn(`${NK} wasm memory: shed again (${TT}): shed ${kT}`, cT.wasmMemoryShed)
          }), (() => mT.addDistanceInUse()));
          const TT = (0, kc.D)(aT);
          VT.setFootprint(new oM(GT, {
            storedChunks: () => PT.tcT(),
            gpuBytes: () => {
              var kT;
              return null !== (kT = null === TT || void 0 === TT ? void 0 : TT.hcT()) && void 0 !== kT ? kT : 0
            },
            jsHeapBytes: JM
          }))
        }
        window.addEventListener("pagehide", (() => {
          AO === VT && (VT.refreshStats(), Jx(VT))
        })), window.addEventListener("pagehide", Ix), window.addEventListener("pagehide", Ax), !1;
        const [ET, ZT] = (0, Qc.g)();
        by = (0, Dc.c)((TT => mT.setChunkAddDistance(TT.horizontal, TT.vertical)), {
          horizontal: ET,
          vertical: ZT
        }), mT.setAmbientOcclusion(!0 !== Pc.e.getItem("disableAmbientOcclusion")), mT.setPoseLod(!0 !== Pc.e.getItem(Kk.M)), (0, HM.o)("look") && (mT.setDebugLog(Lk.K.Look, !0), (0, GM.k)("wasm", (() => mT.takeDebugLog(Lk.K.Look))));
        (0, HM.o)("remesh") && (mT.setDebugLog(Lk.K.Remesh, !0), uT = () => mT.takeDebugLog(Lk.K.Remesh), XM = new uM((0, VM.m)(), uT));
        var uT;
        const XT = function(TT, kT, cT, lT) {
          const MT = new ll,
            KT = TT => Pc.e.getItem(TT);
          MT.sync(KT, kT), (0, bk.R)();
          const OT = (0, fT.m)("customBindingsChanged", (() => {
            MT.sync(KT, kT)
          }));
          (0, zc.s)(kT);
          const yT = new Set,
            xT = (0, FT.s)((() => {
              var TT;
              yT.size > 0 && yl() && !0 === (null === (TT = (0, rT.g)()) || void 0 === TT ? void 0 : TT.localPlayerAlive()) && fT.k.nt("usedKeyboard")
            })),
            IT = Wc.b.heldSizer((() => (0, Jk.q)(TT))),
            AT = Bc(TT, kT, {
              prevents: TT => MT.prevents(TT),
              keyPressed: TT => {
                MT.moves(TT) && (yT.add(TT), yl() && fT.k.nt("usedKeyboard"))
              },
              keyReleased: TT => {
                yT.delete(TT)
              },
              keysReleased: () => {
                yT.clear()
              },
              resized: () => {
                Kl.i.measure(TT.getBoundingClientRect()), (0, nc.p)()
              },
              sizeCanvas: IT,
              watchRenderScale: kT => {
                const cT = (0, Jk.u)(TT, kT),
                  lT = Wc.b.onRelease(kT);
                return () => {
                  cT(), lT()
                }
              },
              touchStarting: () => {
                Kl.i.measure(TT.getBoundingClientRect())
              },
              viewShown: cT,
              touchUiShown: () => YT.e.get("isTouchScreen"),
              ctrlCombosAreGames: yl,
              inspect: (TT, kT, cT) => {
                MT.checks(kT, cT) && lT(TT)
              },
              canLock: () => Xc(TT)
            }),
            CT = (0, yc.d)(kT);
          return () => {
            OT(), xT(), (0, zc.s)(null), CT(), AT()
          }
        }(tT, ((TT, kT, cT, lT, MT) => {
          var KT;
          ox(mT, (() => {
            mT.rings.input.writeRecord(TT, kT, cT, lT, MT)
          })), null === (KT = hO) || void 0 === KT || KT.onInput(TT), !GO && (0, Cl.f)(TT, MT) && (0, Cl.d)((() => {
            WK !== mT || gy || mT.isStopped || !Qx() || Cx(mT, !1, "budget", !1)
          }))
        }), (() => Xy), (TT => {
          var kT;
          null === (kT = hO) || void 0 === kT || kT.onEvent(TT)
        }));
        if (mT.isStopped) return XT(), null;
        yO = XT;
        const dT = () => !mT.isStopped && !Ly;
        if (mT.isStopped) return null;
        (0, Ok.O)((() => {
          "call" === (0, Ok.n)() && mT.crash(cc.t, (0, Ok.m)())
        }));
        const LT = (0, cc.I)(mT.rings.worker, (() => {
          Cx(mT, !1, "budget")
        }));
        fO = function(TT, kT) {
          return Hx().then((TT => {
            let {
              prefetchWorldgenWorker: kT
            } = TT;
            kT()
          }), (() => {})), new UM({
            module: (0, Ok.u)(),
            decodeSettings: TT => {
              const kT = (0, rT.q)();
              if (null === kT) throw new Error("no game code to decode the world-gen seed with");
              return kT.decodeMapSettings(TT)
            },
            loadWorker: ex,
            onMapWithoutWorldgen: () => {
              Gx((TT => {
                let {
                  stopWorldgenWorkerPrefetch: kT
                } = TT;
                kT()
              }))
            },
            onLoadFailed: TT => {
              (0, wc.reportWorldgenLoadFailure)(TT, sK)
            },
            onWorkerLost: TT => {
              (0, wc.reportWorkerLost)(cc.B, TT, sK)
            },
            onStartTimeout: TT => {
              (0, wc.reportWorkerStartTimeout)(cc.B, TT, sK)
            },
            onGaveUp: TT => {
              (0, wc.reportWorldgenGaveUp)(TT, sK)
            },
            onMemoryStats: TT => {
              var kT;
              null === (kT = AO) || void 0 === kT || kT.noteWorldgen(TT)
            },
            onMemoryGone: () => {
              var TT;
              null === (TT = AO) || void 0 === TT || TT.worldgenGone()
            },
            write: (cT, lT, MT, KT, OT) => {
              ox(TT, (() => {
                TT.rings.worker.writeWorkerRecord(cT, lT, MT, 0, KT, OT) || TT.crash(cc.B, `a world-gen record of kind ${lT} did not fit the worker-in ring`)
              })), kT()
            }
          })
        }(mT, LT), IO = function(TT, kT) {
          return new Zl({
            module: (0, Ok.u)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: TT
              }, kT] = await Promise.all([cT.e(40).then((() => cT(42864))), Promise.resolve().then((() => cT(118))).then((TT => {
                let {
                  isMobile: kT
                } = TT;
                return kT()
              }), (() => !1))]);
              return {
                create: TT,
                count: (0, Fk.e)(navigator.hardwareConcurrency, kT)
              }
            },
            write: (cT, lT, MT, KT, OT, yT) => {
              (0, nc.o)(), ox(TT, (() => {
                TT.rings.worker.writeWorkerRecord(cT, lT, MT, KT, OT, yT) || TT.crash(cc.p, `a meshing record of kind ${lT} did not fit the worker-in ring`)
              })), kT()
            },
            onWorkerLost: TT => {
              (0, wc.reportWorkerLost)(cc.p, TT, sK)
            },
            onLightFault: (TT, kT) => {
              (0, wc.reportLightFault)(TT, kT, sK)
            },
            onStartTimeout: TT => {
              (0, wc.reportWorkerStartTimeout)(cc.p, TT, sK)
            },
            onMemoryStats: (TT, kT) => {
              var cT;
              null === (cT = AO) || void 0 === cT || cT.noteMeshWorker(TT, kT)
            },
            onMemoryGone: TT => {
              var kT;
              null === (kT = AO) || void 0 === kT || kT.meshWorkerGone(TT)
            },
            fail: (kT, cT) => {
              const lT = () => {
                TT.crash(cc.p, void 0 === cT ? kT : new Error(kT, {
                  cause: cT
                }))
              };
              void 0 !== cT ? Vx({
                site: cc.p,
                error: cT
              }, lT) : lT()
            }
          })
        }(mT, LT);
        const RT = (0, sl.q)(Dk.clientSideServerUrls.staticUrl, {
            onTableFailed: TT => {
              Vx({
                site: wc.MODEL_FEED_SITE,
                error: TT
              }, (() => {}), dT)
            },
            packUrl: TT => {
              var kT, cT;
              return null !== (kT = null === (cT = Wf()) || void 0 === cT ? void 0 : cT.modelUrl(TT)) && void 0 !== kT ? kT : null
            }
          }),
          BT = function(TT, kT, cT) {
            const lT = cT => {
              var lT, MT;
              return null !== (lT = null === (MT = kT()) || void 0 === MT ? void 0 : MT.drawnUrl(cT)) && void 0 !== lT ? lT : TT.url(cT)
            };
            return (0, il.j)((0, Ll.n)(lT), cT)
          }(RT, (() => QO), Wf),
          WT = new Ll.f(BT, (TT => {
            console.warn(`${NK} image ${TT.key.kind}:${TT.key.index}:${TT.key.word} failed`, TT.error)
          }));
        FO = WT, rO = new Wl(mT, BT, ((TT, kT) => {
          void 0 === kT ? console.warn(`${NK} ${TT}`) : pf(TT, kT)
        }));
        const nT = new pl.i(RT, function(TT, kT) {
          let lT = !1,
            MT = null,
            KT = null;
          const OT = {
              onUnavailable: (cT, lT) => {
                KT ??= Vx({
                  site: wc.MODEL_POOL_SITE,
                  error: cT,
                  urls: lT
                }, (() => {
                  (0, wc.reportModelPoolFailure)(cT, TT)
                }), kT)
              },
              onDecoderFailed: (cT, lT) => {
                const MT = () => {
                  (0, wc.reportDracoDecoderFailure)(cT, TT)
                };
                void 0 !== lT ? Vx({
                  site: wc.MODEL_POOL_SITE,
                  error: cT,
                  urls: lT
                }, MT, kT) : MT()
              },
              onWorkerLost: kT => {
                (0, wc.reportWorkerLost)(wc.MODEL_POOL_SITE, kT, TT)
              },
              onModuleRetry: (kT, cT) => {
                (0, wc.reportModelsModuleRetry)(kT, cT, TT)
              }
            },
            yT = cT.e(42).then((() => cT(42867))).then((TT => {
              let {
                pageModelPool: kT
              } = TT;
              if (lT) return null;
              const cT = kT(OT);
              return MT = cT.unlisten, SO = cT.pool, cT.pool
            }), (TT => (lT || OT.onUnavailable(TT, void 0), null)));
          return DO = () => {
            var TT;
            lT = !0, null === (TT = MT) || void 0 === TT || TT(), SO = null
          }, (TT, kT) => yT.then((cT => {
            var lT;
            return null !== (lT = null === cT || void 0 === cT ? void 0 : cT.build(TT, kT)) && void 0 !== lT ? lT : (0, TM.o)(TT, "the model workers did not load")
          })).then((TT => null !== KT && (0, TM.k)(TT) ? KT.then((() => TT)) : TT))
        }(wT, dT), (TT => {
          TT.startup ? (Fx(), Vx({
            site: wc.MODEL_FEED_SITE,
            error: TT.error,
            urls: "" === TT.url ? void 0 : [TT.url]
          }, (() => {
            (0, wc.reportModelFailure)(TT, wT)
          }))) : (0, wc.reportModelFailure)(TT, wT)
        }), {
          onWritten: (TT, kT) => {
            WT.glbWritten(TT, kT)
          },
          onTaken: (TT, kT) => {
            WT.glbTaken(TT, kT)
          },
          onPackFileFailed: (TT, kT) => {
            console.warn(`${NK} the texture pack's model file ${TT} failed: the shipped one loads`, kT)
          }
        });
        QO = nT;
        const pT = new Ul.f(mT);
        iK = pT, pT.swap((TT => {
          const kT = () => {
            (0, wc.reportTerrainTextureFailure)(TT, wT)
          };
          if (zy) return void kT();
          const cT = () => !zy,
            lT = null === TT.url ? void 0 : [TT.url];
          Vx({
            site: cc.A,
            error: TT.error,
            urls: lT
          }, kT, cT)
        })).then((TT => {
          null !== TT && (TT || mT.isStopped || console.warn(`${NK} the core refused the terrain textures: terrain draws untextured`), JO(mT))
        }));
        const iT = new Xk(mT, ((TT, kT) => {
          console.warn(`${NK} ${TT}`, ...void 0 === kT ? [] : [kT])
        }));
        iT.feed(), null !== AT && function(TT, kT, lT, MT, KT, OT) {
          let yT = null,
            fT = null,
            xT = !1;
          const IT = {
            textures: null,
            stop: () => {
              var TT, kT;
              xT = !0, null === (TT = fT) || void 0 === TT || TT(), null === (kT = yT) || void 0 === kT || kT(), ql.d.setSettled(null), null !== TO && qy.clear(TO)
            }
          };
          pK = IT, fT = qf().follow((fT => {
            null !== fT && Promise.all([cT.e(193), cT.e(45)]).then((() => cT(42825))).then((cT => {
              let {
                PackTextures: AT
              } = cT;
              if (xT || TT.isStopped) return;
              const CT = new AT({
                feed: fT,
                terrain: kT,
                backend: lT,
                stopped: () => TT.isStopped,
                landed: () => {
                  JO(TT)
                },
                packSwapped: () => {
                  (0, il.h)(MT), OT.feed((() => async function(TT) {
                    const kT = null === TT ? null : await TT.averageColours;
                    return null === kT ? dk() : uk(kT)
                  }(CT.assets))), (0, nl.k)(CT.files()), KT.refresh().then((TT => {
                    null !== TT && console.info(`${NK} texture pack models: ${TT.resent} of ${TT.delivered} files written again, ${TT.refetched} refetched`)
                  }))
                },
                settled: (TT, kT, cT) => {
                  var lT;
                  (ql.d.setSettled({
                    state: TT,
                    files: kT
                  }), null === TT.gameSource && (0, Nc.d)(TT.pack, cT), cT) || function(TT) {
                    const kT = TO;
                    null !== kT && qy.apply(kT, TT).then((kT => {
                      kT && TT && console.info(`${NK} the texture pack's animations are in (${Object.keys(TT).length} files)`)
                    }))
                  }(null === (lT = TT.pack) || void 0 === lT ? void 0 : lT.animations)
                },
                settling: () => {
                  ql.d.setSettled(null)
                },
                warn: pf,
                maxTextureSize: () => Promise.resolve((0, kc.X)(document.createElement("canvas")))
              });
              IT.textures = CT, yT = CT.start()
            }), (TT => {
              console.warn(`${NK} the texture pack's terrain didn't load: the built atlas stays`, TT)
            }))
          }))
        }(mT, pT, AT, WT, nT, iT);
        const qT = () => {
            mT.setTextureLayers("")
          },
          sT = TT => {
            (Sk ??= cT.e(51).then((() => cT(42869))).then((TT => {
              let {
                TEXTURE_NAMES: kT
              } = TT;
              return kT
            }), (TT => {
              throw Sk = null, TT
            })), Sk).then((TT => {
              mT.setTextureLayers(TT) || mT.isStopped || (console.warn(`${NK} the core refused the texture names: textured Boxes draw textureNotFound`), qT())
            }), (kT => {
              if (mT.isStopped) return;
              const [cT, ...lT] = TT;
              void 0 === cT ? Vx({
                site: wc.TEXTURE_NAMES_SITE,
                error: kT
              }, (() => {
                console.warn(`${NK} the texture names didn't load, so textured Boxes draw textureNotFound`, kT), qT()
              }), dT) : setTimeout((() => {
                sT(lT)
              }), cT)
            }))
          };
        if (sT(ZK), null !== AT && !await async function(TT, kT, cT, lT, KT, OT) {
            var yT;
            const fT = (0, kc.D)(cT);
            if (null === fT) return TT.crash(SK, new Error(`this ${lT} build has no openRenderer`)), !1;
            let xT;
            ty = fT;
            try {
              var IT, AT, CT, jT;
              const MT = null !== (IT = null === (AT = YK) || void 0 === AT ? void 0 : AT.pagePreviews()) && void 0 !== IT ? IT : null,
                yT = null !== (CT = null === (jT = YK) || void 0 === jT ? void 0 : jT.previewModule(cT)) && void 0 !== CT ? CT : null;
              if (null === MT || null === yT) {
                null === MT || void 0 === MT || MT.endSession(!1), xT = (0, Jk.i)().sampleCount, await (0, kc.f)(kT, fT, OT, Yf, xT, await KT);
                const TT = (0, kc.i)(cT);
                null === TT && console.warn(`${NK} this ${lT} build has no image registry: sky and model images won't show`), (0, gl.g)(TT)
              } else {
                (0, yM.e)() && await (0, UT.j)();
                const cT = (0, yM.S)();
                if (null !== cT) {
                  const kT = (0, kc.R)(fT);
                  return TT.crash(wc.RENDER_RELOAD_SITE, new Error(`${cT}${void 0===kT?"":` (${kT.message})`}`)), !1
                }
                xT = await MT.bindSession(yT, kT, (async TT => (0, kc.s)(fT, SK, OT, TT, Yf, await KT)))
              }
            } catch (MT) {
              return TT.crash(SK, MT), !1
            }(function(TT, kT) {
              const cT = TT,
                {
                  requestCapture: lT,
                  takeCapture: MT
                } = cT;
              if ("function" !== typeof lT || "function" !== typeof MT) return;
              const KT = {
                request() {
                  lT.call(cT, kT)
                },
                take() {
                  var TT;
                  return null !== (TT = MT.call(cT)) && void 0 !== TT ? TT : null
                }
              };
              window[vM] = KT
            })(kT, xT), Fy = xT, jy = !0;
            const vT = performance.now();
            return vy.boundAtMs = null !== (yT = (0, yM.V)()) && void 0 !== yT ? yT : vT, vy.indirectHangs = (0, yM.H)(), console.info(`${NK} ${lT} renderer bound at ${Math.round(vT)} ms`), !TT.isStopped
          }(mT, PT, aT, AT, jT, tT)) return null;
        if (null !== AT) {
          var Tk, kk, ck;
          (0, Ik.B)(AT);
          const TT = () => !mT.isStopped && Nx();
          cT.e(185).then((() => cT(9233))).then((kT => {
            let {
              devTools: cT
            } = kT;
            mT.isStopped || cT.setHost(function(TT) {
              return {
                tools: OM,
                async downloadScene(kT, cT) {
                  let {
                    width: lT,
                    height: MT,
                    colouring: KT
                  } = cT;
                  "screenshot" === kT && null === KT ? await (0, lM.c)(TT, lT, MT) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(TT, kT) {
              return {
                canvas: TT,
                maxTextureSize: MM,
                drawing: kT,
                resize: (TT, kT) => {
                  (0, zc.y)(Lk.rb.Resize, 0, TT, kT, (0, zc.k)(1))
                },
                restoreSize: () => {
                  const kT = (0, Jk.q)(TT);
                  null !== kT && (0, zc.y)(Lk.rb.Resize, 0, kT.cssWidth, kT.cssHeight, (0, zc.k)(kT.renderScale))
                },
                onFrameDrawn: TT => (KM.add(TT), () => {
                  KM.delete(TT)
                })
              }
            }(tT, TT)))
          }), (TT => {
            console.warn(`${NK} the developer tools didn't load: no captures this session`, TT)
          }));
          const kT = "webgpu" === AT && null !== (Tk = null === xT || void 0 === xT || null === (kk = xT.adapter) || void 0 === kk ? void 0 : kk.vendor) && void 0 !== Tk ? Tk : null;
          ry = {
            backend: AT,
            canvas: tT,
            fallbackReason: null !== (ck = null === xT || void 0 === xT ? void 0 : xT.reason) && void 0 !== ck ? ck : null,
            adapterVendor: kT
          }, Mx();
          try {
            (0, nc.u)(AT, tT, kT)
          } catch (MT) {
            (0, nc.v)(), console.error(`${NK} the quality steps didn't start`, MT)
          }
        }
        const {
          storagePullBreaks: lk,
          splitPassBreaks: Mk
        } = await jT;
        Mk && console.warn(`${NK} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Ck = lk ? gT.d : (0, gT.f)(xT, (0, mk.g)());
        if ((0, HM.o)("webgpuloss")) {
          var Nk, Qk;
          const TT = {
            backend: AT,
            reason: null !== (Nk = null === xT || void 0 === xT ? void 0 : xT.reason) && void 0 !== Nk ? Nk : null,
            source: null !== (Qk = null === xT || void 0 === xT ? void 0 : xT.source) && void 0 !== Qk ? Qk : null,
            storagePullBreaks: lk,
            noWebGpu: Ck.messageKey
          };
          (0, eM.d)((kT => {
            kT.noteWasmPick(TT)
          }))
        }
        const ak = "webgpu" === AT && !lk;
        if (wO = (0, gT.i)(ak ? mT : null, ak && null !== (OT = null === (yT = YK) || void 0 === yT ? void 0 : yT.pagePreviews().Bj) && void 0 !== OT ? OT : null, Ck, pf), gy) return null;
        if (VT.reserveAtJoin((0, Xl.n)(null !== JT && void 0 !== JT ? JT : tc.g)), mT.isStopped) return null;
        const rk = TT => {
          if (null !== Py) try {
            Py.animationFrame(TT)
          } catch (MT) {
            yx(MT)
          }
          if (function(TT, kT) {
              return kT && !gy && !GO && Qx() && Nx() && TT.framePaces(performance.now())
            }(mT, Xy)) return mT.writePendingInput(), (0, FT.g)(TT, jx), Kx(!1, TT), void requestAnimationFrame(rk);
          Cx(mT, Xy, "budget") && ((0, zk.k)(mT.lastFrameKind) && Nx() && (0, FT.g)(TT, jx), Kx(Xy && Ey, TT), Zy.frame(mT.lastFrameKind, Xy && Nx(), TT), Px(mT), VT.afterFrame(), requestAnimationFrame(rk))
        };
        requestAnimationFrame(rk);
        return function(TT) {
          if (TT.has("inputLog") && (0, Ml.h)((TT => {
              let {
                action: kT,
                down: cT,
                press: lT
              } = TT;
              console.info(`${Ol} input ${kT} ${cT?"down":"up"} press ${lT} at ${performance.now().toFixed(1)}`)
            })), TT.has("inputDump")) {
            const TT = [];
            fl = TT, Object.assign(window, {
              bloxdInputDump: () => TT.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), tO = function(TT, kT) {
          let cT = null;
          const lT = () => {
              null !== cT && (clearInterval(cT), cT = null)
            },
            MT = () => {
              document.hidden ? cT ??= setInterval((() => {
                Cx(TT, !1, "budget") ? (Px(TT), kT.afterFrame()) : lT()
              }), EK) : lT()
            };
          return document.addEventListener("visibilitychange", MT), MT(), () => {
            lT(), document.removeEventListener("visibilitychange", MT)
          }
        }(mT, VT), mT
      }(kT).then((TT => {
        var kT;
        (lT(sK), lO(null !== TT), null !== TT && (SM = performance.now()), kO(TT), null === TT) ? null === (kT = YK) || void 0 === kT || kT.pagePreviews().endSession(null === (0, Ok.n)()): zO("booted")
      }), (TT => {
        lT(sK), lO(!1), kO(null), rx({
          site: DK,
          error: TT,
          header: null
        }, sK)
      }))
    }

    function iy() {
      const TT = TO;
      null !== TT && Uy().then((kT => {
        let {
          pageBuiltInAnimationPack: cT
        } = kT;
        cT().provide(TT)
      }), (TT => {
        console.warn(`${NK} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, TT)
      }))
    }
    const qy = new class {
      constructor(TT) {
        this.deps = TT, this.latest = 0, this.ty = null
      }
      apply(TT, kT) {
        return this.load(TT, kT, 0)
      }
      async load(TT, kT, cT) {
        var lT;
        const MT = ++this.latest,
          KT = this.deps.compiler;
        if (void 0 === kT || null === kT || "object" !== typeof kT || 0 === Object.keys(kT).length || null === KT) return this.drop(TT), !1;
        if ((null === (lT = this.ty) || void 0 === lT ? void 0 : lT.module) === TT && (0, pk.de)(this.ty.files, kT)) return !1;
        try {
          const [cT, lT] = await Promise.all([KT(), this.deps.builtIns()]);
          if (MT !== this.latest) return !1;
          const OT = await cT(kT, Tc, {
            builtIns: lT
          });
          if (MT !== this.latest) return !1;
          const yT = this.call(TT, OT);
          if (void 0 === yT) throw new sk("the compiled animations didn't read against the built-in pack");
          return this.ty = {
              module: TT,
              files: kT
            },
            function(TT) {
              for (let kT = 0; kT + 2 < TT.length; kT += 3) {
                ("error" === TT[kT] ? console.error : console.warn)(`Animation for the texture pack: ${TT[kT+1]}: ${TT[kT+2]}`)
              }
            }(yT), !0
        } catch (yT) {
          var OT;
          if (MT !== this.latest) return !1;
          this.drop(TT), 0 === cT && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", yT);
          const lT = (null !== (OT = this.deps.retryAfterMs) && void 0 !== OT ? OT : qk)[cT];
          return void 0 === lT || yT instanceof sk || (0, ik.i)(TT) || setTimeout((() => {
            MT === this.latest && this.load(TT, kT, cT + 1)
          }), lT), !1
        }
      }
      call(TT, kT) {
        try {
          return TT.CcT(kT)
        } catch (cT) {
          throw (0, ik.m)(TT, cT), cT
        }
      }
      clear(TT) {
        this.latest++, this.drop(TT)
      }
      drop(TT) {
        const kT = this.ty;
        if (this.ty = null, (null === kT || void 0 === kT ? void 0 : kT.module) === TT && !(0, ik.i)(TT)) try {
          this.call(TT, null)
        } catch {}
      }
    }({
      compiler: Yk.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: TT
        } = await Uy();
        return TT().whenSet()
      },
      warn: pf
    });
    async function sy(TT, kT) {
      let lT = !1;
      await Tf({
        matchmake: async () => {
          const {
            guestJoinTarget: MT,
            guestJoinWithPack: KT
          } = await cT.e(343).then((() => cT(42796)));
          return lT ? MT(TT, kT, Tx()) : (lT = !0, KT(TT, kT, (kT => kx(TT, kT)), Tx))
        },
        onFailure: TT => {
          (0, wc.showJoinFailure)(TT, sK)
        },
        rejoin: hf,
        invalidateTrafficCode: Nf
      })
    }
    async function Tf(TT) {
      let {
        matchmake: kT,
        onFailure: cT,
        rejoin: MT,
        invalidateTrafficCode: KT,
        pageReady: OT,
        signal: yT
      } = TT;
      const fT = () => !0 === (null === yT || void 0 === yT ? void 0 : yT.aborted);
      let xT;
      const IT = ql.d.rejoinHold();
      WO = null;
      const AT = (0, ac.P)("wasm", zx);
      let CT = !1,
        jT = performance.now();
      try {
        if (!await MO) return {
          kind: "stopped"
        };
        if (fT()) return {
          kind: "KT"
        };
        Yy().catch((() => {}));
        let TT = await kT();
        var tT, hT;
        if (jT = performance.now(), !fT()) bx(null !== (tT = null === (hT = TT.target.session) || void 0 === hT ? void 0 : hT.gameNameWithVariation) && void 0 !== tT ? tT : null);
        const cT = () => performance.now() - TT.matchedAt <= TT.freshMs,
          lT = lf(TT.target).catch((() => {}));
        cT() && !fT() && (xT = new el(TT.target, {
          signal: yT
        }));
        const KT = performance.now();
        if (null === await cO) return {
          kind: "stopped"
        };
        var NT, QT;
        if (function(TT) {
            var kT, cT;
            if (tM.c.markGameEngineConstructed(), DM) return;
            DM = !0;
            const lT = Math.max(TT, null !== (kT = NM) && void 0 !== kT ? kT : TT);
            (0, hM.g)("ready", Math.max(0, (null !== (cT = QM) && void 0 !== cT ? cT : lT) - lT) / 1e3)
          }(KT), !fT())
          if (null !== QM && null !== SM ? ((0, vT.l)("wasm_loaded", QM), (0, vT.l)("wasm_core_ready", SM)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), TT.target.session && function(TT) {
              const kT = (0, pk.Lb)(TT);
              return "classic" !== kT ? LM.has(kT) : !(0, lk.j)(TT) && !RM.has((0, pk.Gb)(TT))
            }(TT.target.session.gameNameWithVariation)) null === (NT = fO) || void 0 === NT || NT.prestart();
        if (await lT, !cT() && !fT()) null === (QT = xT) || void 0 === QT || QT.rematched(), TT = await kT(), jT = performance.now();
        if (fT()) return {
          kind: "KT"
        };
        const IT = await async function(TT) {
          var kT, cT, lT;
          let {
            signal: MT,
            rejoin: KT = null,
            early: OT,
            pageReady: yT
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== MT && void 0 !== MT && MT.aborted) throw new DOMException("the join was left", "AbortError");
          const fT = (xT = ly, IT = performance.now(), null !== xT && IT - xT < Sl);
          var xT, IT;
          ly = null;
          const AT = new AbortController,
            CT = null !== (kT = null === (cT = TT.session) || void 0 === cT ? void 0 : cT.gameNameWithVariation) && void 0 !== kT ? kT : null;
          bx(CT), Of({
            controller: AT,
            game: CT
          }), My = null, null === (lT = yy) || void 0 === lT || lT.abort(), yy = null, xy = !1, Iy = null, Ay.clear();
          const jT = () => {
            (0, ak.f)(AT, (0, ak.e)(MT))
          };
          null === MT || void 0 === MT || MT.addEventListener("abort", jT, {
            once: !0
          });
          try {
            var tT, hT, NT;
            const kT = await cO;
            if (null === kT || kT.isStopped || gy) throw new Error("no core is running to join a game with");
            if (TT.session && null !== wO) {
              const kT = await Mf(wO.join(TT.session.gameNameWithVariation), AT.signal);
              if ((0, HM.o)("webgpuloss")) {
                const cT = TT.session.gameNameWithVariation,
                  lT = wO.couldntRunInJoinedGame();
                (0, eM.d)((TT => TT.noteWasmJoin(cT, kT, lT)))
              }
              if (null !== kT) throw new gT.e(kT)
            }
            const [, , , {
              joinRoom: cT
            }] = await Mf(Promise.all([(0, rT.j)(kT), lf(TT), null === yT || void 0 === yT ? void 0 : yT(), Yy()]), AT.signal), lT = TT.session, MT = lT ? {
              ...Df,
              attachSocket: kT => {
                const cT = bf(kT, TT.endpoint);
                var MT;
                null !== cT && (pO = {
                  conn: cT,
                  info: lT
                }, null === (MT = iO) || void 0 === MT || MT(lT.playerDbId));
                return cT
              }
            } : Df, xT = await cT(MT, TT, {
              signal: AT.signal,
              early: OT
            }).catch((TT => {
              throw function(TT) {
                if (!(TT instanceof GT.d)) return TT;
                if ("roomError" === TT.stage && null !== Iy) return kf(new GT.d(TT.message, TT.stage, TT.code, Iy), TT);
                const kT = "closed" === TT.stage && null !== Ky ? Ay.get(Ky.conn) : void 0;
                return void 0 === kT ? TT : kf(new GT.d(TT.message, TT.stage, kT.code), TT)
              }(TT)
            }));
            if (BO !== AT) throw xT.leave(), new DOMException("the join was left", "AbortError");
            ff(xT), null === (tT = IO) || void 0 === tT || tT.newGame();
            const IT = function(TT) {
              var kT, cT;
              const {
                session: lT
              } = TT, MT = void 0 === lT ? TT.joinOptions.lobbyName : lT.lobbyName;
              return {
                endpoint: TT.endpoint,
                game: null !== (kT = null === lT || void 0 === lT ? void 0 : lT.gameNameWithVariation) && void 0 !== kT ? kT : TT.roomName,
                lobby: String(null !== MT && void 0 !== MT ? MT : null),
                postCookies: null !== (cT = TT.postCookies) && void 0 !== cT ? cT : null
              }
            }(TT);
            YO.set(xT, IT), zl(IT);
            const CT = performance.now(),
              jT = {
                conn: xT.conn,
                rejoin: KT,
                game: null !== (hT = null === (NT = TT.session) || void 0 === NT ? void 0 : NT.gameNameWithVariation) && void 0 !== hT ? hT : "",
                joinedAt: CT,
                rejoinedAt: fT ? CT : null,
                overflow: null
              };
            qO = jT,
              function(TT, kT) {
                Ef();
                const cT = {
                  endpoint: kT,
                  roomId: TT.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Cc({
                    reconnect: (TT, kT, lT) => async function(TT, kT, cT, lT) {
                      const {
                        roomId: MT,
                        roomToken: KT
                      } = uf(TT, kT), OT = WK;
                      if (null === OT || OT.isStopped || gy) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: yT
                      } = await Mf(Yy(), cT), fT = {
                        ...Df,
                        attachSocket: kT => sO !== TT || 0 === TT.heldConn ? (kT.close(), null) : bf(kT, TT.endpoint, !0)
                      };
                      return yT(fT, TT.endpoint, MT, KT, {
                        signal: cT,
                        onAttached: lT
                      })
                    }(cT, TT, kT, lT),
                    releaseSeat: TT => {
                      !async function(TT, kT) {
                        const {
                          roomId: cT,
                          roomToken: lT
                        } = uf(TT, kT);
                        try {
                          const {
                            leaveHeldSeat: kT
                          } = await Yy();
                          await kT(TT.endpoint, cT, lT)
                        } catch (MT) {
                          console.warn(`${NK} the held seat of a game left while it reconnected couldn't be released`, MT)
                        }
                      }(cT, TT)
                    },
                    isLive: () => sO === cT && null !== qO && !gy,
                    ZD: TT => {
                      cy = TT, Vf()
                    },
                    onReconnected: TT => {
                      ! function(TT) {
                        const kT = UO;
                        if (null !== kT && kT !== TT) {
                          const cT = YO.get(kT);
                          void 0 !== cT && YO.set(TT, cT), Vy === kT && (Vy = TT), kT.detach()
                        }
                        ff(TT)
                      }(TT)
                    },
                    onGaveUp: (TT, kT) => {
                      ! function(TT, kT, cT) {
                        var lT, MT;
                        console.warn(`${NK} gave up reconnecting (${cT.reason}, ${cT.attempts} attempts)`, cT.lastError), (0, wc.reportReconnectGaveUp)(cT, sK);
                        const KT = null !== (lT = null === (MT = qO) || void 0 === MT ? void 0 : MT.rejoin) && void 0 !== lT ? lT : null;
                        Zf(TT, "gaveUp"), If();
                        const OT = {
                          code: TT.dropCode,
                          name: null,
                          reason: HK,
                          canReconnect: !kT,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Sf(OT, kT ? null : KT, !1, {
                          reasonKey: eK,
                          canPlayAgain: kT
                        })
                      }(cT, TT, kT)
                    }
                  })
                };
                sO = cT, null !== Ty && Ty.conn === TT.conn && cT.resume.onInitialInfo(Ty)
              }(xT, TT.endpoint), performance.mark(rK), (0, vT.l)("wasm_joined", CT), setTimeout((() => {
                UO === xT && (0, vT.d)()
              }), 0), iy(), console.info(`${NK} joined ${TT.roomName} as ${xT.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const QT = My;
            My = null, null !== QT && jf(jT, QT.mask, QT.frames);
            const ST = Ay.get(xT.conn);
            return Ay.clear(), void 0 !== ST && (ff(null), Qf(xT.conn, ST.code, ST.reason)), xT
          } finally {
            var QT;
            null === MT || void 0 === MT || MT.removeEventListener("abort", jT), BO === AT && yf(UO, null), (null === (QT = Ky) || void 0 === QT ? void 0 : QT.join) === AT && (Ky = null)
          }
        }(TT.target, {
          signal: yT,
          rejoin: MT(TT.target),
          early: xT,
          pageReady: OT
        });
        return CT = !0, {
          kind: "joined",
          game: IT
        }
      } catch (DT) {
        if (DT instanceof DOMException && "AbortError" === DT.name || fT()) return {
          kind: "KT"
        };
        if (gy) return {
          kind: "stopped"
        };
        if (xy && (xy = !1, await KT().catch((TT => {
            console.warn(`${NK} the cached traffic code could not be dropped`, TT)
          }))), null === await cO) return {
          kind: "stopped"
        };
        if (DT instanceof gT.e) return cT(DT, performance.now() - jT), {
          kind: "failed",
          error: DT,
          reloading: !1
        };
        if (DT instanceof GT.d && DT.code === lT.c.wasmClientNotAllowed.code && uy) return Uf("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: DT,
          reloading: !0
        };
        const TT = DT instanceof GT.d && DT.code === lT.c.outdatedVersion.code,
          kT = () => null === UO,
          MT = await Vx({
            site: wc.JOIN_SITE,
            error: DT,
            outdated: TT
          }, (() => {
            cT(DT, performance.now() - jT)
          }), kT);
        return {
          kind: "failed",
          error: DT,
          reloading: MT
        }
      } finally {
        var ST;
        CT || AT.end(), ql.d.releaseHold(IT);
        const TT = null === (ST = xT) || void 0 === ST ? void 0 : ST.release();
        TT && (0, wc.reportUnusedSeat)(TT, sK)
      }
    }

    function kf(TT, kT) {
      return TT.stack = kT.stack, TT
    }

    function lf(TT) {
      return TT.session ? (0, rT.p)(qK, TT.session.gameNameWithVariation) : Promise.resolve()
    }

    function Mf(TT, kT) {
      return (0, ak.l)(kT), new Promise(((cT, lT) => {
        const MT = () => {
          lT((0, ak.e)(kT))
        };
        kT.addEventListener("abort", MT, {
          once: !0
        }), TT.then((TT => {
          kT.removeEventListener("abort", MT), cT(TT)
        }), (TT => {
          kT.removeEventListener("abort", MT), lT(TT)
        }))
      }))
    }

    function Kf() {
      Of(null)
    }

    function Of(TT) {
      var kT, cT, lT;
      (function() {
        const TT = sO;
        null !== TT && Zf(TT, "left")
      }(), null === OO || OO.left) || (OO.left = !0, null === (lT = (0, rT.g)()) || void 0 === lT || lT.socketLeft(), (0, CT.l)({
        websocketUrl: null
      }));
      BO && (0, ak.f)(BO, new DOMException("the join was left", "AbortError")), If(null !== TT), null === (kT = wO) || void 0 === kT || kT.leave();
      const MT = UO;
      null !== TT && ql.d.setGame(TT.game), yf(null, null !== (cT = null === TT || void 0 === TT ? void 0 : TT.controller) && void 0 !== cT ? cT : null), null === MT || void 0 === MT || MT.leave(), xf(0), (0, Nk.c)()
    }

    function yf(TT, kT) {
      UO = TT, BO = kT, null === UO && null === BO && ql.d.setGame(void 0)
    }

    function ff(TT) {
      yf(TT, BO)
    }

    function xf(TT) {
      const kT = WK;
      return null !== XK && !gy && null !== kT && !kT.isStopped && (!!XK(GT.h, 0, (0, GT.z)(TT)) && (ZO = !0, 0 === TT || GO || Cx(kT, !1, "all"), !0))
    }

    function If() {
      var TT, kT;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, ac.f)();
      const cT = null !== (TT = null === (kT = qO) || void 0 === kT ? void 0 : kT.overflow) && void 0 !== TT ? TT : null;
      qO = null, null !== cT && (0, wc.reportEventOverflow)(cT, sK)
    }

    function Af() {
      null !== UO || null !== BO ? Kf() : zf()
    }

    function Cf(TT, kT) {
      console.warn(`${NK} the event buffer refused records in ${kT} frames (categories ${TT})`), gy || (null !== qO ? jf(qO, TT, kT) : null !== BO && function(TT, kT, cT) {
        var lT;
        const MT = function(TT, kT) {
          return null === TT ? "drop" : TT.activated ? "keep" : 0 !== (kT & Rk.q.NetSession) ? "fail" : "drop"
        }((null === (lT = Ky) || void 0 === lT ? void 0 : lT.join) === TT ? Ky : null, kT);
        "keep" === MT ? My = {
          mask: kT,
          frames: cT
        } : "fail" === MT && (0, ak.f)(TT, new Error("the join's net session was lost to an event overflow"))
      }(BO, TT, kT))
    }

    function jf(TT, kT, cT) {
      const lT = TT.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      lT.frames += cT, lT.acks++, lT.mask |= kT;
      const MT = function(TT, kT, cT) {
        if (0 === (TT & Rk.q.NetSession)) return "none";
        const lT = null !== kT.rejoinedAt && cT - kT.rejoinedAt < Dl;
        return null === kT.rejoin || lT ? "fail" : "rejoin"
      }(kT, TT, performance.now());
      "none" !== MT && queueMicrotask((() => {
        if (qO !== TT) return;
        const kT = "rejoin" === MT && performance.now() - Oy >= eT.f;
        lT.outcome = kT ? "rejoined" : "failed", Sf(function(TT, kT) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: TT,
            automaticallyReconnect: kT,
            requiresRefresh: !1
          }
        }(null !== TT.rejoin, kT), TT.rejoin, kT), Kf(), kT && (ly = performance.now())
      }))
    }

    function vf(TT) {
      Xy = TT, dy && tf(dy, TT)
    }

    function tf(TT, kT) {
      TT.style.visibility = kT ? "visible" : "hidden"
    }

    function hf(TT) {
      var kT;
      const cT = TT.roomName,
        lT = null !== (kT = TT.joinOptions.lobbyName) && void 0 !== kT ? kT : null;
      return () => {
        sy(cT, lT)
      }
    }

    function Nf() {
      return cT.e(343).then((() => cT(42796))).then((TT => {
        let {
          invalidateGuestTrafficCode: kT
        } = TT;
        return kT()
      })).catch((TT => {
        console.warn(`${NK} the cached traffic code could not be dropped`, TT)
      }))
    }

    function Qf(TT, kT, cT) {
      var MT, KT;
      let OT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (gy) return;
      if ((null === (MT = qO) || void 0 === MT ? void 0 : MT.conn) !== TT) return void(null !== BO && Ay.set(TT, {
        code: kT,
        reason: cT
      }));
      const {
        rejoin: yT,
        game: fT,
        joinedAt: xT
      } = qO;
      If(), Ef();
      const IT = (0, eT.n)(kT, (0, Fl.i)(TT));
      if (console.info(`${NK} the game's connection closed with code ${kT} (${null!==(KT=IT.name)&&void 0!==KT?KT:"unrecognised"})`), kT === lT.c.gameOrPluginKick.code || OT || (0, wc.reportDisconnect)(IT, sK, {
          closeReason: cT,
          sinceJoinedMs: performance.now() - xT,
          game: fT
        }), IT.requiresRefresh) {
        const TT = "outdatedVersion" === IT.name,
          cT = new Error(`the game's connection closed with code ${kT}`),
          lT = () => null === qO && null === BO;
        return void Vx({
          site: wc.JOIN_SITE,
          error: cT,
          outdated: TT
        }, (() => {
          lT() && Sf(IT, null, !1)
        }), lT)
      }
      const AT = IT.canReconnect ? yT : null,
        CT = null !== AT && IT.automaticallyReconnect && performance.now() - Oy >= eT.f;
      Sf(IT, AT, CT)
    }

    function Sf(TT, kT, cT) {
      var lT;
      let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (Ly) return;
      ql.d.unwantedLeave(cT && null !== kT && 0 === fy.size), null === (lT = yy) || void 0 === lT || lT.abort();
      const KT = new AbortController;
      yy = KT;
      const OT = null === kT ? null : () => {
        KT.signal.aborted || (KT.abort(), kT())
      };
      if (cT && null !== OT) {
        Oy = performance.now();
        const TT = setTimeout(OT, eT.c);
        KT.signal.addEventListener("abort", (() => {
          clearTimeout(TT)
        }))
      }
      const yT = {
        code: TT.code,
        name: TT.name,
        reason: TT.reason,
        reasonKey: MT.reasonKey,
        reconnect: OT,
        reconnecting: cT,
        requiresRefresh: TT.requiresRefresh,
        canPlayAgain: MT.canPlayAgain
      };
      if (fy.size > 0)
        for (const xT of [...fy]) try {
          xT(yT)
        } catch (fT) {
          console.error(`${NK} an unwanted-leave listener threw`, fT)
        } else Nl((0, vl.g)(TT, null !== OT, cT), KT.signal).then((kT => {
          kT && (null !== OT ? OT() : TT.requiresRefresh && (0, UT.f)())
        }))
    }
    const Df = {
      attachSocket: TT => bf(TT),
      onConnection: TT => (Cy.add(TT), () => {
        Cy.delete(TT)
      }),
      sendRaw: (TT, kT) => {
        const cT = OO;
        return null !== cT && cT.conn === TT && ax(cT, kT)
      },
      leaveRoom: xf,
      closeSocket: TT => {
        var kT;
        (null === (kT = OO) || void 0 === kT ? void 0 : kT.conn) === TT && zf()
      },
      flushNet: Jf
    };

    function af(TT) {
      var kT;
      let {
        aux: cT,
        payload: lT
      } = TT;
      null === (kT = WK) || void 0 === kT || kT.queueOptions(cT, lT)
    }

    function Ff(TT, kT) {
      af(function(TT, kT) {
        return IM = TT ? {
          preventMovement: kT
        } : null, TT ? AM(kT) : {
          aux: Lk.Xb.AdEnd,
          payload: xM
        }
      }(TT, kT))
    }

    function rf(TT) {
      var kT;
      LO = TT, null === (kT = WK) || void 0 === kT || kT.setUiPrefs(TT)
    }

    function Pf(TT, kT) {
      qK.setMaster(TT, kT)
    }

    function wf(TT) {
      var kT;
      RO = TT, null === (kT = WK) || void 0 === kT || kT.setEnvPrefs(TT)
    }

    function mf(TT) {
      var kT;
      gO = TT, null === (kT = WK) || void 0 === kT || kT.setLookPrefs(TT)
    }

    function bf(TT) {
      var kT;
      let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(TT.url).origin,
        lT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (TT.readyState === WebSocket.CLOSING || TT.readyState === WebSocket.CLOSED) return console.warn(`${NK} a closing or closed socket can't be attached`), null;
      const MT = WK;
      if (!MT || MT.isStopped) return console.warn(`${NK} no core is running to attach a socket to`), TT.close(), null;
      if (null === (0, rT.g)()) return console.warn(`${NK} the game has not started to attach a socket to`), TT.close(), null;
      if (oO > Lk.r) return console.warn(`${NK} this core has attached all the sockets it can; reload to play on`), TT.close(), null;
      if (ZO && !GO && (Cx(MT, !1, "all"), MT.isStopped || gy)) return TT.close(), null;
      zf();
      const KT = oO++;
      if (!Lf(MT, "open", KT, lT ? Lk.Ub.Resume : 0)) return TT.close(), null;
      lT || hk.b.reset(), Ky = null === BO ? null : {
        join: BO,
        conn: KT,
        activated: !1
      }, TT.binaryType = "arraybuffer";
      const OT = new jc.c((() => {
          ! function(TT, kT) {
            if (OO !== kT || TT.isStopped || null === ef(kT, JK)) return;
            kT.detach(), OO = null, Hf(TT, kT, JK, "", !0), kT.ws.close()
          }(MT, yT)
        })),
        yT = {
          ws: TT,
          conn: KT,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: lT,
          token: null,
          detach: () => {
            OT.dispose(), TT.removeEventListener("message", fT), TT.removeEventListener("open", xT), TT.removeEventListener("close", IT)
          }
        },
        fT = TT => {
          if (TT.data instanceof ArrayBuffer) {
            var kT;
            const cT = new Uint8Array(TT.data);
            OT.heard(), yT.token = null !== (kT = (0, vc.b)(cT)) && void 0 !== kT ? kT : yT.token,
              function(TT, kT, cT) {
                ox(TT, (() => {
                  TT.rings.net.writeFrame(kT, cT) || TT.crash(cc.q, `a socket frame of ${cT.byteLength} bytes did not fit the net-in ring`)
                }));
                const lT = TT.rings.net.cursor >= bK;
                (lT || TT.netWrittenSinceFrame >= mK || document.hidden && performance.now() - HO >= EK) && Cx(TT, !1, "budget")
              }(MT, KT, cT)
          }
        },
        xT = () => {
          lT || (0, vT.l)("wasm_socket_open", performance.now());
          for (const kT of yT.pending.splice(0)) TT.send(kT);
          yT.pendingBytes = 0
        },
        IT = TT => {
          if (OO === yT && MT.rings.net.cursor > 0 && Cx(MT, !1, "all"), OO === yT) {
            if (yT.detach(), OO = null, Hf(MT, yT, TT.code, TT.reason) || of(MT, yT)) return;
            Lf(MT, "close", KT), Gf(KT, yT.left), Qf(KT, TT.code, TT.reason)
          }
        };
      return TT.addEventListener("message", fT), TT.addEventListener("open", xT), TT.addEventListener("close", IT), OO = yT, null === (kT = (0, rT.g)()) || void 0 === kT || kT.socketAttached(KT), (0, CT.l)({
        websocketUrl: cT
      }), KT
    }

    function zf() {
      const TT = OO;
      if (!TT) return;
      const kT = WK,
        cT = TT.resume;
      cT && (Jf(), OO !== TT) || (OO = null, TT.detach(), TT.ws.close(), null !== kT && (of(kT, TT) || cT && Hf(kT, TT, oK)) || (null !== kT && Lf(kT, "close", TT.conn), Gf(TT.conn, TT.left)))
    }

    function Jf() {
      const TT = WK;
      null !== TT && !TT.isStopped && !gy && !GO && TT.rings.net.cursor > 0 && Cx(TT, !1, "all")
    }

    function of(TT, kT) {
      var cT;
      if (!kT.resume) return !1;
      const lT = sO;
      return null !== lT && null !== kT.token && "" !== kT.token && (lT.pendingHold = {
        conn: kT.conn,
        token: `${lT.roomId}:${kT.token}`
      }), Lf(TT, "close", kT.conn), null === (cT = (0, rT.g)()) || void 0 === cT || cT.socketDetached(kT.conn), !0
    }

    function Hf(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const KT = ef(kT, cT);
      if (null === KT) return !1;
      const {
        ty: OT,
        token: yT,
        game: fT,
        joinedAt: xT
      } = KT;
      if (!Lf(TT, "close", kT.conn, Lk.w.Held)) return !0;
      console.warn(`${NK} the game's connection ${MT?"went silent":`dropped with code ${cT}`}, holding it`);
      const IT = {
        closeReason: lT,
        sinceJoinedMs: performance.now() - xT,
        game: fT
      };
      return (0, wc.reportDisconnect)((0, eT.n)(cT), sK, IT, MT ? "silent" : void 0), OT.heldConn = kT.conn, OT.dropCode = cT, OT.pendingHold = {
        conn: kT.conn,
        token: `${OT.roomId}:${yT}`
      }, GO || Cx(TT, !1, "all"), !0
    }

    function ef(TT, kT) {
      const cT = sO,
        MT = qO,
        KT = TT.token;
      return null === cT || null === MT || gy || TT.left || MT.conn !== TT.conn || null === KT || "" === KT ? null : (0, lT.i)(kT) && cT.resume.canHoldSeat() ? {
        ty: cT,
        token: KT,
        game: MT.game,
        joinedAt: MT.joinedAt
      } : null
    }

    function Gf(TT, kT) {
      var cT;
      null === (cT = (0, rT.g)()) || void 0 === cT || cT.closeGame(TT), (0, fM.c)().close(TT), kT || (0, CT.l)({
        websocketUrl: null
      })
    }

    function Vf() {
      const TT = cy;
      if (null === TT) return;
      const kT = (0, rT.g)();
      gy || null === kT || kT.ZD(TT) ? cy = null : performance.now() - uO.pause >= VK && (uO.pause = performance.now(), console.warn(`${NK} the cmd ring had no room for SetPaused(${TT}): written before the next frame`))
    }

    function Ef() {
      const TT = sO;
      sO = null, null === TT || void 0 === TT || TT.resume.dispose()
    }

    function Zf(TT, kT) {
      var cT, lT;
      const {
        heldConn: MT
      } = TT, KT = TT.resume.resumingConn;
      TT.heldConn = 0, TT.pendingHold = null, sO === TT && (sO = null), "left" === kT ? TT.resume.leave() : TT.resume.dispose(), 0 === ky || (null === (cT = OO) || void 0 === cT ? void 0 : cT.conn) !== ky || "left" === kT && (null === (lT = UO) || void 0 === lT ? void 0 : lT.conn) === ky || df(ky), "gaveUp" === kT && 0 !== KT && df(KT), 0 !== MT && "refused" !== kT && (console.info(`${NK} the game held through its drop ${"left"===kT?"was left":"is given up"}`), null === WK || WK.isStopped || Lf(WK, "close", MT), Gf(MT, !1))
    }

    function uf(TT, kT) {
      const cT = kT.indexOf(":");
      return {
        roomId: cT < 0 ? TT.roomId : kT.slice(0, cT),
        roomToken: kT.slice(cT + 1)
      }
    }

    function Xf(TT) {
      var kT;
      Ty = TT, TT.conn === ky && (ky = 0);
      const cT = sO;
      null !== cT && (null === (kT = qO) || void 0 === kT ? void 0 : kT.conn) === TT.conn && cT.resume.onInitialInfo(TT)
    }

    function df(TT) {
      var kT;
      const cT = OO;
      (null === cT || void 0 === cT ? void 0 : cT.conn) === TT && (cT.left = !0, null === (kT = (0, rT.g)()) || void 0 === kT || kT.socketLeft(), (0, CT.l)({
        websocketUrl: null
      }), xf(TT) ? setTimeout((() => {
        OO === cT && zf()
      }), GT.e) : zf())
    }

    function Lf(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        MT = !1;
      return ox(TT, (() => {
        const {
          net: KT
        } = TT.rings;
        MT = "open" === kT ? KT.writeOpen(cT, lT) : KT.writeClose(cT, lT), MT || TT.crash(cc.q, `a socket ${kT} did not fit the net-in ring`)
      })), MT
    }

    function Rf(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (gf()) {
        const lT = "browser" === TT && (0, yM.bb)() ? "blockedAfterLoss" : "unsupported";
        return (0, wc.reportUnsupportedFallback)(TT, lT, kT, cT), void Uf(`the wasm client can't run here (${kT}; ${lT})`, lT)
      }(0, wc.showUnsupported)(TT, "unsupported", kT, cT)
    }

    function gf() {
      return uy && "wasm" !== (0, jk.g)(window.location.search)
    }

    function Uf(TT, kT) {
      console.warn(`${NK} ${TT}: reloading on the JS client`), null !== kT && (0, jk.u)(kT), (0, jk.r)(null === kT ? "reloadOntoJs" : "decline");
      const cT = () => {
        (0, UT.d)(jk.A)
      };
      (0, wc.flushCrashReports)(UT.b).then(cT, cT)
    }

    function Yf(TT, kT, cT, lT) {
      return hy(TT, kT, cT, lT)
    }

    function Bf() {
      null === Sy || null === WK || WK.isStopped || gy || null !== aO || null === XK || (aO = Sy(XK, pf, qf().follow))
    }

    function Wf() {
      var TT, kT, cT;
      return null !== (TT = null === (kT = pK) || void 0 === kT || null === (cT = kT.textures) || void 0 === cT ? void 0 : cT.files()) && void 0 !== TT ? TT : null
    }

    function nf(TT) {
      qf().follow((kT => {
        null !== kT && Promise.all([Promise.all([cT.e(193), cT.e(45)]).then((() => cT(42847))), (0, yM.Y)()]).then((TT => {
          let [{
            followPagePackFiles: cT
          }, lT] = TT;
          const MT = null === lT || (0, kc.l)(lT) ? "webgl" : lT.backend;
          cT(kT, il.f, MT, (TT => {
            il.f.setPageFiles(TT)
          }), pf)
        }), (kT => {
          console.warn(`${NK} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, kT), TT()
        }))
      }))
    }

    function pf(TT, kT) {
      console.warn(`${NK} ${TT}`, kT)
    }

    function qf() {
      return nK ??= new rM({
        load: TT => Promise.all([cT.e(193), cT.e(52)]).then((() => cT(42855))).then((kT => {
          let {
            startPageTexturePackFeed: cT
          } = kT;
          return cT(pf, TT)
        })),
        store: Pc.d,
        Yj: TT => {
          cO.then((() => {
            (0, wc.reportTexturePackFeedLoadFailure)(TT, sK)
          }))
        }
      }), nK
    }
    const sf = TT => qf().follow(TT);

    function Tx() {
      return qf().loaded()
    }
    const kx = function(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          MT = 0;
        return async function(KT, OT) {
          let yT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const fT = ++MT,
            xT = lT() + kT,
            IT = await
          function(TT, kT) {
            let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((lT => {
              const MT = setTimeout((() => {
                lT(null), TT.then((TT => {
                  null !== TT && (TT.joinedWithout(), cT(TT))
                }))
              }), kT);
              TT.then((TT => {
                clearTimeout(MT), lT(TT)
              }))
            }))
          }(TT(KT), kT, (TT => {
            fT === MT && yT() && OT(TT, lT() + kT).catch((TT => {
              cT("the texture pack step after the join failed", TT)
            }))
          }));
          return null === IT ? null : OT(IT, xT)
        }
      }((TT => (0, lk.j)(TT) ? qf().request() : qf().forJoin()), FM.d, pf),
      cx = function(TT, kT) {
        let cT = !1;
        return {
          setGamePackConfirm: TT => {
            cT = null !== TT, kT(TT)
          },
          packStep: (kT, lT, MT) => TT(kT, lT, (() => cT && MT()))
        }
      }(kx, (TT => {
        qf().setGamePackConfirm(TT)
      }));

    function lx(TT) {
      cx.setGamePackConfirm(TT)
    }

    function Mx() {
      if (gy || null !== Py || null === Dy || null === ry) return;
      const {
        backend: TT,
        canvas: kT,
        fallbackReason: cT,
        adapterVendor: lT
      } = ry, MT = Dy;
      Dy = null;
      try {
        Py = MT({
          backend: TT,
          canvas: kT,
          fallbackReason: cT,
          adapterVendor: lT,
          joinedGame: () => gy ? null : UO,
          inGame: Ox,
          shaderPackReach: () => {
            var TT, kT;
            return null !== (TT = null === (kT = wO) || void 0 === kT ? void 0 : kT.reachInJoinedGame()) && void 0 !== TT ? TT : null
          },
          msaa: () => Fy > 1,
          writeCmd: (TT, kT, cT) => null !== XK && XK(TT, kT, cT),
          takeFailedMeshJobs: () => {
            var TT, kT;
            return null !== (TT = null === (kT = IO) || void 0 === kT ? void 0 : kT.takeFailedMeshJobs()) && void 0 !== TT ? TT : 0
          },
          mainStalled: (TT, kT) => {
            (0, wc.reportMainStall)(TT, kT, sK)
          }
        })
      } catch (KT) {
        console.error(`${NK} the frame telemetry didn't start`, KT)
      }
    }

    function Kx(TT, kT) {
      try {
        var cT, lT, MT;
        const KT = jy && null !== (cT = null === (lT = WK) || void 0 === lT || null === (MT = lT.lastHeader) || void 0 === MT ? void 0 : MT.renderPending) && void 0 !== cT ? cT : 0;
        (0, nc.k)(kT, TT, Ox() && !(null !== IM), KT)
      } catch (KT) {
        (0, nc.v)(), console.error(`${NK} the quality steps stopped`, KT)
      }
    }

    function Ox() {
      return null !== UO && Vy === UO && !gy
    }

    function yx(TT) {
      const kT = Py;
      Py = null;
      try {
        null === kT || void 0 === kT || kT.stop()
      } catch {}
      console.error(`${NK} the frame telemetry threw: it stops`, TT)
    }

    function fx(TT) {
      var kT, cT, lT, MT;
      if ((0, fM.c)().fire(TT), "message" === TT.type) {
        if (VO++, TT.vI === Lk.Dc.ERROR && null !== BO) {
          var KT;
          const {
            text: kT,
            dropsCache: cT
          } = (0, eT.t)((new TextDecoder).decode(TT.payload));
          xy ||= cT, (null === (KT = Ky) || void 0 === KT ? void 0 : KT.conn) === TT.conn && (Iy = kT)
        } else if (TT.vI === Rk.Xb.ResumeComplete) {
          var OT;
          null === (OT = sO) || void 0 === OT || OT.resume.onResumeComplete(TT.conn)
        }
        return
      }
      TT.phase === Lk.x.Left ? EO = TT.conn : TT.phase === Lk.x.Activated && (null === (kT = Ky) || void 0 === kT ? void 0 : kT.conn) === TT.conn ? Ky.activated = !0 : TT.phase === Lk.x.Resumed ? function(TT) {
        var kT, cT;
        ky = TT;
        const lT = sO;
        if (null === lT || 0 === lT.heldConn || (null === (kT = OO) || void 0 === kT ? void 0 : kT.conn) !== TT || !OO.resume || null === qO) return;
        console.info(`${NK} the game resumed on conn ${TT}, waiting for its InitialInfo`);
        const MT = lT.heldConn;
        lT.heldConn = 0, OO.resume = !1, qO.conn = TT, (null === (cT = pO) || void 0 === cT ? void 0 : cT.conn) === MT && (pO = {
          conn: TT,
          info: pO.info
        }), hk.b.apply({
          shopInfo: null,
          _shopVersion: Mk.e
        })
      }(TT.conn) : TT.phase === Lk.x.Held ? function(TT) {
        var kT;
        const cT = sO,
          lT = null !== (kT = null === cT || void 0 === cT ? void 0 : cT.pendingHold) && void 0 !== kT ? kT : null;
        if (null !== cT && null !== lT && lT.conn === TT) return cT.pendingHold = null, cT.heldConn = TT, ky = 0, console.warn(`${NK} the core holds the game, reconnecting`), void cT.resume.onDropped(lT.token);
        if (TT === ky) {
          ky = 0;
          const kT = WK;
          null === kT || kT.isStopped || (console.info(`${NK} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Lf(kT, "close", TT))
        }
      }(TT.conn) : TT.phase === Lk.x.Closed && (null === (cT = sO) || void 0 === cT || null === (lT = cT.pendingHold) || void 0 === lT ? void 0 : lT.conn) === TT.conn && (sO.heldConn === TT.conn ? function(TT) {
        const kT = TT.heldConn,
          cT = TT.dropCode;
        Zf(TT, "refused"), console.info(`${NK} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          Gf(kT, !1), Qf(kT, cT, "", !0)
        }))
      }(sO) : sO.pendingHold = null);
      const yT = Object.keys(Lk.x).find((kT => Lk.x[kT] === TT.phase)),
        fT = 0 === TT.code ? "" : ` (code ${TT.code})`;
      console.info(`${NK} conn ${TT.conn}: ${null!==yT&&void 0!==yT?yT:TT.phase}${fT}, ${VO} raw messages so far`), (null === (MT = UO) || void 0 === MT ? void 0 : MT.conn) !== TT.conn || TT.phase !== Lk.x.Left && TT.phase !== Lk.x.Closed || ff(null), nO !== TT.conn || TT.phase !== Lk.x.Left && TT.phase !== Lk.x.Closed || (nO = null, null === UO && null === BO && ql.d.setGame(void 0));
      for (const IT of [...Cy]) try {
        IT(TT.conn, TT.phase, TT.code)
      } catch (xT) {
        (0, gk.p)(xT, `${NK} a connection listener threw`)
      }
    }

    function xx() {
      (0, yM.v)(), queueMicrotask((() => {
        try {
          Fx()
        } catch (TT) {
          console.warn(`${NK} stopping before the reload threw`, TT)
        }(0, wc.flushCrashReports)(UT.b).then(UT.f, UT.f)
      }))
    }

    function Ix() {
      const TT = WK;
      null === TT || TT.isStopped || null === OO || GO || !TT.hasPendingCommands() || Cx(TT, !1, "budget")
    }

    function Ax(TT) {
      var kT;
      const cT = UO;
      TT.persisted || null === cT || (null === (kT = OO) || void 0 === kT ? void 0 : kT.conn) !== cT.conn || OO.left || cT.leave()
    }

    function Cx(TT, kT, lT) {
      let MT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const KT = GO;
      GO = !0;
      try {
        return function(TT, kT, lT, MT) {
          var KT, OT, yT, fT;
          if (gy) return !1;
          if (ox(TT, vx), gy || TT.isStopped) return !1;
          Sx() && zO("modelsIn");
          Vf(), HO = performance.now(), EO = null, ZO = !1, (0, FT.J)(), null === (KT = hO) || void 0 === KT || KT.beforeFrame(), xl(HO, TT), (0, FT.A)(HO, tx), eO = !0;
          const xT = kT && Qx();
          let IT;
          try {
            IT = TT.frame(HO, xT, lT)
          } finally {
            eO = !1
          }
          if (!IT) return !1;
          ay.observe(null !== (OT = null === (yT = TT.lastHeader) || void 0 === yT ? void 0 : yT.chunksCancelled) && void 0 !== OT ? OT : 0);
          const AT = TT.lastFrameKind,
            CT = (0, zk.c)(AT);
          (function(TT) {
            null !== XM && XM.afterFrame(performance.now(), TT)
          })(CT), null === (fT = wy) || void 0 === fT || fT.frame(TT, HO, AT), kT && (Ey = CT);
          CT && (0, wk.b)(HO);
          if (null !== Py) try {
            Py.frameRan(TT, HO, performance.now(), AT)
          } catch (tT) {
            yx(tT)
          }
          "drawn" === AT && Nx() && function() {
            for (const TT of [...KM]) TT()
          }();
          TT.forEachNetOut(Dx);
          const jT = OO;
          null !== EO && (null === jT || void 0 === jT ? void 0 : jT.conn) === EO && ax(jT, GT.j);
          (function(TT) {
            var kT;
            if (zy) return;
            null === Hy && Qx() && (Hy = performance.now());
            if (null === BO && null === UO) return;
            null === Hy || ey || (ey = !0, (0, vT.l)("wasm_startup_loaded", Hy));
            let cT = 0;
            null !== UO ? cT = -1 : !0 === (null === (kT = Ky) || void 0 === kT ? void 0 : kT.activated) && (cT = ~Rk.H.TerrainDrawn);
            const lT = TT.headerWord(Rk.B.LoadSteps) & cT & ~oy;
            if (0 === lT) return;
            oy |= lT;
            const MT = performance.now();
            for (const [KT, OT] of Object.entries(hx)) 0 !== (lT & Rk.H[KT]) && (0, vT.l)(OT, MT)
          })(TT), kT && function(TT) {
            var kT, lT, MT;
            if (null === UO || !Qx()) return;
            null === Gy || Vy === UO && !Gy.frame(HO, 0 !== (TT.headerWord(Rk.B.LoadSteps) & Rk.H.TerrainDrawn)) || (Gy = null);
            const KT = TT.lastHeader,
              OT = !jy || 0 === (null === KT || void 0 === KT ? void 0 : KT.renderPending);
            !Jy && OT && (Jy = !0, performance.mark(wK));
            if (Vy === UO) return;
            const yT = null !== (kT = null === KT || void 0 === KT ? void 0 : KT.firstView) && void 0 !== kT ? kT : Lk._.NotYet;
            if (jy && yT === Lk._.NotYet) return;
            if (zy && (!0 !== (null === (lT = (0, rT.g)()) || void 0 === lT ? void 0 : lT.isSessionLive) || !OT)) return;
            Vy = UO;
            const fT = UO;
            if (setTimeout((() => {
                UO === fT && (0, vT.g)()
              }), 0), null === (MT = wO) || void 0 === MT || MT.playable(), function() {
                clearTimeout(KO), KO = setTimeout((() => {
                  Ox() && Gx((TT => {
                    let {
                      prefetchWorldgenWorker: kT
                    } = TT;
                    kT()
                  }))
                }), uK)
              }(), zy) return;
            zy = !0, performance.mark(PK), (0, HM.o)("render") && Promise.all([cT.e(75), cT.e(47)]).then((() => cT(4670))).then((TT => {
              let {
                renderDebugPlayable: kT
              } = TT;
              kT()
            }), (TT => {
              console.warn("The render debug topic didn't load", TT)
            }));
            const xT = Math.round(performance.now());
            if (jy && yT !== Lk._.Drawn) {
              const kT = yT === Lk._.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${NK} playable at ${xT} ms on the first view's ${kT} backstop: it wasn't drawn whole in time`), (0, vT.l)("wasm_view_backstop", xT, kT), "long" === kT) {
                var IT, AT;
                const kT = null !== (IT = null === (AT = qO) || void 0 === AT ? void 0 : AT.game) && void 0 !== IT ? IT : "";
                Gy = new mc.c((() => {
                  const cT = (0, rT.g)(),
                    lT = (0, rT.q)(),
                    MT = null === cT || null === lT ? null : lT.readDrawCensus(cT.api);
                  (0, wc.reportFirstViewNoTerrain)(kT, (0, mc.i)(TT.headerWord(Rk.B.LoadSteps), MT), MT, sK), (0, Ck.w)("noTerrain")
                }))
              }
            } else console.info(`${NK} playable at ${xT} ms${jy?"":" (no renderer)"}`);
            setTimeout(Qy, 0), (0, Qk.f)().catch((TT => {
              console.error(`${NK} item sprites didn't load, so item particles show the missing texture`, TT)
            })), Rl.b.warm()
          }(TT);
          (0, cc.G)(TT, {
            worldgen: fO,
            mesh: IO
          }),
          function(TT) {
            TT.forEachEvent(Al);
            for (const kT of Il) try {
              (0, Ml.c)(kT)
            } catch (tT) {
              if ((0, gk.g)(tT)) {
                TT.crashOn(cc.h, tT);
                break
              }
              console.error(`${Ol} an input action listener threw`, tT)
            }
            Il.length = 0
          }(TT), MT && (0, bk.d)();
          return !TT.isStopped
        }(TT, kT, "all" === lT || TT.rings.net.cursor >= bK || TT.netKeptFrames >= zK, MT)
      } finally {
        GO = KT
      }
    }

    function jx(TT) {
      console.error(`${NK} a frame-start listener threw`, TT)
    }

    function vx() {
      var TT, kT, cT, lT;
      null === (TT = QO) || void 0 === TT || TT.drain(XK, dK), null === (kT = FO) || void 0 === kT || kT.drain(XK), null === (cT = rO) || void 0 === cT || cT.drain(performance.now()), Ny(XK), null === (lT = aO) || void 0 === lT || lT.drain()
    }

    function tx(TT) {
      console.error(`${NK} a before-frame listener threw`, TT)
    }
    const hx = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Nx() {
      return jy && Qx()
    }

    function Qx() {
      return PO && Sx()
    }

    function Sx() {
      return null === QO || QO.startupDone
    }

    function Dx(TT, kT) {
      const cT = OO;
      (null === cT || void 0 === cT ? void 0 : cT.conn) === TT ? ax(cT, kT) : dO++
    }

    function ax(TT, kT) {
      const {
        ws: cT
      } = TT;
      return cT.readyState === WebSocket.OPEN ? (cT.send(kT), !0) : cT.readyState === WebSocket.CONNECTING && TT.pendingBytes + kT.byteLength <= GK ? (TT.pending.push(kT.slice()), TT.pendingBytes += kT.byteLength, !0) : (dO++, !1)
    }

    function Fx() {
      var TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT;
      gy = !0, Zy.stop(), (0, GM.e)(), XM = null, Ef(), (0, FT.G)().unlockPointer(), (0, FT.E)(null), null === (TT = NO) || void 0 === TT || TT(), NO = null, null === (kT = (0, rT.q)()) || void 0 === kT || kT.followCursorAim(null), (0, bk.B)(), (0, rT.f)(), qK.stop(), null === (cT = my) || void 0 === cT || cT(), my = null, null === (lT = by) || void 0 === lT || lT(), by = null, null === (MT = Py) || void 0 === MT || MT.stop(), Py = null, (0, zc.s)(null), null === (KT = yO) || void 0 === KT || KT(), yO = null, null === (OT = fO) || void 0 === OT || OT.stop(), fO = null, null === (yT = IO) || void 0 === yT || yT.stop(), IO = null, null !== (fT = pK) && void 0 !== fT && null !== (xT = fT.textures) && void 0 !== xT && xT.assets && (0, nl.k)(null), null === (IT = pK) || void 0 === IT || IT.stop(), pK = null, iK = null;
      const NT = AO;
      AO = null, NT && (NT.stop(), Jx(NT)), null === (AT = FO) || void 0 === AT || AT.dispose(), FO = null, null === (CT = rO) || void 0 === CT || CT.dispose(), rO = null, QO = null, null === (jT = DO) || void 0 === jT || jT(), DO = null, null === (vT = tO) || void 0 === vT || vT(), tO = null, null === (tT = hO) || void 0 === tT || tT.stop(), hO = null, Kf(), ql.d.release(), zf();
      const QT = aO;
      aO = null;
      try {
        null === QT || void 0 === QT || QT.dispose()
      } catch (ST) {
        console.warn(`${NK} the sky's images didn't release`, ST)
      }(0, gl.g)(null), null === (hT = YK) || void 0 === hT || hT.pagePreviews().endSession(null === (0, Ok.n)())
    }

    function rx(TT, kT) {
      var cT, lT;
      const MT = null !== (cT = null === (lT = AO) || void 0 === lT ? void 0 : lT.details()) && void 0 !== cT ? cT : {},
        KT = TT.site === SK || TT.site === DK || TT.site === wc.RENDER_RELOAD_SITE || TT.site === aK ? TT.error instanceof WebAssembly.RuntimeError || TT.error instanceof ik.d : !(0, kc.o)(TT.error) && (0, cc.D)(TT);
      KT && TT.error instanceof Error && (0, Ok.M)(TT.error);
      const OT = KT || TT.site === cc.t ? (0, wc.readTrap)(TT.error) : null,
        yT = null !== OT && (0, Uk.g)(OT.kind, OT.refusedBytes) ? OT.refusedBytes : 0,
        fT = null === CO ? (0, Xl.u)(function() {
          try {
            return (0, Ok.q)().buffer.byteLength
          } catch {
            return 0
          }
        }(), yT, null) : CO.ceilingMayRefuse(yT),
        xT = yT > 0 && !fT && gf();
      var IT;
      if (xT && ((0, jk.u)("oom"), (0, jk.r)("decline"), Ry = !0), Fx(), (0, yM.e)()) return console.warn(`${NK} the session stopped at ${TT.site} as the page reloads`, TT.error), void((0, kc.o)(TT.error) || (null === (IT = TT.header) || void 0 === IT ? void 0 : IT.lastError) === Lk.E.CoreBusy || (0, wc.reportStoppedCore)(TT, kT, OT, {
        memoryDetails: MT,
        declined: xT
      }));
      (0, wc.showCrash)(TT, kT, OT, {
        memoryDetails: MT,
        declined: xT
      })
    }

    function Px(TT) {
      const {
        input: kT,
        net: cT,
        worker: lT
      } = TT.rings, MT = TT.optionsDropped, KT = kT.dropped + MT + cT.dropped + lT.dropped + dO;
      KT !== XO && function(TT, kT) {
        const cT = performance.now();
        return !(cT - uO[TT] < VK) && (uO[TT] = cT, console.warn(`${NK} ${kT}`), !0)
      }("dropped", `${KT} records dropped so far (input ${kT.dropped}, options ${MT}, net ${cT.dropped}, worker ${lT.dropped}, net-out ${dO})`) && (XO = KT)
    }

    function wx() {
      var TT, kT;
      const cT = (0, Dc.b)();
      if (null === cT) return null;
      const lT = (0, rc.s)(cT);
      return {
        ...lT,
        horizontal: Math.min(lT.horizontal, null !== (TT = null === (kT = AO) || void 0 === kT ? void 0 : kT.shedDistanceInUse()) && void 0 !== TT ? TT : 1 / 0)
      }
    }

    function mx(TT) {
      var kT, cT;
      return {
        samples: jy ? Fy : null,
        sunShadows: TT,
        renderDistance: null !== (kT = null === (cT = wx()) || void 0 === cT ? void 0 : cT.horizontal) && void 0 !== kT ? kT : null
      }
    }

    function bx(TT) {
      WO = TT, (0, ac.J)()
    }

    function zx() {
      var TT, kT, cT;
      const lT = wx();
      return {
        ...null === (TT = AO) || void 0 === TT ? void 0 : TT.pageKillSnapshot(),
        renderDistance: null !== (kT = null === lT || void 0 === lT ? void 0 : lT.horizontal) && void 0 !== kT ? kT : null,
        renderDistanceVertical: null !== (cT = null === lT || void 0 === lT ? void 0 : lT.vertical) && void 0 !== cT ? cT : null,
        chunkCap: jO,
        budgetBasis: vO,
        renderBackend: (0, yM.O)(),
        ...(0, Fc.d)(WO)
      }
    }

    function Jx(TT) {
      console.info(`${NK} wasm memory at the session's end`, TT.details())
    }

    function ox(TT, kT) {
      if (!TT.isStopped) try {
        kT()
      } catch (cT) {
        TT.crash(cc.x, cT)
      }
    }

    function Hx() {
      return xO ??= cT.e(69).then((() => cT(42859))).catch((TT => {
        throw xO = null, TT
      })), xO
    }
    async function ex() {
      const {
        createWorldgenWorker: TT,
        worldgenWorkerReady: kT
      } = await Hx();
      return await kT(), TT
    }

    function Gx(TT) {
      var kT;
      null === (kT = xO) || void 0 === kT || kT.then(TT, (() => {}))
    }

    function Vx(TT, kT, cT) {
      return async function(TT, kT, cT) {
        let {
          stop: lT,
          stillWanted: MT
        } = cT;
        const KT = await (0, al.j)(TT, {
          stillWanted: MT,
          beforeReload: async () => {
            lT(), await (0, wc.flushCrashReports)(UT.b)
          },
          reload: UT.f
        });
        return KT || kT(), KT
      }(TT, kT, {
        stop: Fx,
        stillWanted: cT
      })
    }
    let Ex = !1;

    function Zx() {
      return Ex = !0, async function(TT, kT, lT) {
        const {
          gamePackSource: MT
        } = await cT.e(344).then((() => cT(42804)));
        await cx.packStep(TT, ((cT, lT) => cT.packForGame(TT, MT(kT), lT)), lT)
      }(...arguments)
    }

    function ux(TT) {
      ! function(TT, kT) {
        TT((TT => {
          null === TT || void 0 === TT || TT.subscribe((TT => {
            let {
              pack: cT,
              gameSource: lT
            } = TT;
            kT(null === lT || null === cT ? null : {
              pack: cT,
              source: "" === lT ? null : lT
            })
          }))
        }))
      }(sf, TT)
    }
    let Xx = !1,
      dx = null,
      Lx = !1,
      Rx = !1;

    function gx() {
      var TT;
      Xx || (Xx = !0, py("play", RT), (0, CT.k)(new cI), yT.gameBridge.attach(HT), px().catch((() => {})), (0, rT.u)((TT => {
        kk(TT.setTextHost)
      })), TT = Bx, fy.add(TT), function(TT) {
        for (const kT of mO) TT(kT);
        bO.add(TT)
      }((TT => {
        Yx(Ux[TT])
      })))
    }
    const Ux = {
      booted: KT.g.INITIALISE_NOA,
      texturesIn: KT.g.REGISTRATION,
      modelsIn: KT.g.SETUP_LIFEFORMS
    };

    function Yx(TT) {
      fT.k.nt("matchmakeAndPlayStepCompleted", {
        step: TT,
        totalSubSteps: 1
      })
    }

    function Bx(TT) {
      if (!Lx) return;
      const {
        gameNameWithVariation: kT,
        lobbyName: cT
      } = (0, CT.b)();
      if (TT.code === lT.c.serverUpdating.code) return (new cI).leaveLive(), void nx(kT, cT);
      fT.k.nt("unwantedLeftGame", {
        reason: Wx(TT),
        requiresRefresh: TT.requiresRefresh,
        canReconnect: null !== TT.reconnect,
        automaticallyReconnect: TT.reconnecting,
        canPlayAgain: TT.canPlayAgain,
        gameNameWithVariation: kT,
        lobbyName: cT
      }), (new cI).leaveLive()
    }

    function Wx(TT) {
      return null !== TT.reasonKey ? {
        translationKey: TT.reasonKey
      } : "gameOrPluginKick" === TT.name ? TT.reason : `You have disconnected from the server.\n${TT.reason}`
    }

    function nx(TT, kT) {
      var lT;
      lT = (0, xT.u)(TT, kT), Promise.resolve().then((() => cT(1530))).then((TT => {
        let {
          navigatePreserveSearch: kT
        } = TT;
        kT(lT)
      })).catch((TT => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", TT), (0, UT.c)(lT)
      }))
    }

    function px() {
      return dx ??= Promise.all([cT.e(70), cT.e(73), cT.e(72), cT.e(71), cT.e(84), cT.e(261), cT.e(199), cT.e(217), cT.e(239), cT.e(212), cT.e(46)]).then((() => cT(40311))).then((TT => {
        try {
          TT.attachPlayGameSources()
        } catch (kT) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", kT),
            function(TT) {
              cO.then((kT => {
                null === kT || kT.isStopped || gy ? console.warn(`${NK} the play sources threw as they attached, after the client stopped`, TT) : rx({
                  site: aK,
                  error: TT,
                  header: null
                }, sK)
              }))
            }(kT), kT
        }
      }), (TT => {
        throw dx = null, new rT.e(TT)
      })), dx
    }
    async function ix(TT, kT) {
      gx(), Ex = !0, Lx = !0;
      let cT = {
          place: TT.place,
          matchedAt: TT.matchedAt
        },
        OT = TT.place.gameNameWithVariation;
      const yT = (0, AT.c)();
      let fT = null;
      const xT = await Tf({
        matchmake: async () => {
          let kT = cT;
          if (cT = null, null === kT) {
            const cT = await TT.rematch();
            if (cT.isError()) throw fT = cT.asError().forward(), new Error(cT.asError().message);
            kT = {
              place: cT.getValue(),
              matchedAt: performance.now()
            }
          }
          OT = kT.place.gameNameWithVariation;
          return {
            target: await (0, ET.d)(TT.userContext, kT.place, Tx(), yT),
            matchedAt: kT.matchedAt,
            freshMs: ET.c
          }
        },
        pageReady: px,
        onFailure: (TT, kT) => {
          null === fT && function(TT, kT) {
            (0, wc.reportPageJoinFailure)(TT, sK, kT)
          }(TT, {
            sinceJoinStartMs: kT,
            game: OT
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => TT.userContext.invalidateTrafficCode(),
        signal: kT
      });
      switch (xT.kind) {
        case "joined":
          if (yT) {
            const {
              game: TT
            } = xT;
            (0, AT.l)((() => {
              TT.endJoinAd() && (0, vT.j)()
            }))
          }
          return Rx || (Rx = !0, (0, hT.d)()), Lx ? (Yx(KT.g.CONNECT_TO_GAME_SERVER), Yx(KT.g.SHADER_PACK), function() {
            var TT, kT;
            return null !== (TT = null === (kT = wO) || void 0 === kT ? void 0 : kT.runsInJoinedGame()) && void 0 !== TT && TT
          }() && (0, tT.d)(TT.userContext, OT).catch((TT => {
            console.error("Failed to report the shader pack session", TT)
          })), function() {
            const TT = function() {
              var TT, kT;
              return null !== (TT = null === (kT = wO) || void 0 === kT ? void 0 : kT.couldntRunInJoinedGame()) && void 0 !== TT ? TT : null
            }();
            null !== TT && (0, tT.b)(TT)
          }(), MT.d.value(void 0)) : kI("The server ended the game as it joined");
        case "failed":
          if (!xT.reloading) {
            if (null !== fT) return fT;
            if ((xT.error instanceof GT.l || xT.error instanceof GT.d) && xT.error.code === lT.c.serverUpdating.code) {
              if (kT.aborted) return kI("Left the game while it loaded");
              const {
                gameNameWithVariation: TT,
                lobbyName: cT
              } = (0, CT.b)();
              return nx(TT, cT), kI("The server is updating")
            }
            return xT.error instanceof gT.e ? MT.d.errorWithCode(xT.error.messageKey, KT.g.SHADER_PACK, {
              severity: "medium"
            }) : MT.d.errorWithCode(function(TT) {
              if (TT instanceof GT.w || TT instanceof DT.f) return TT.message;
              if (qx(TT)) return (0, eT.r)(TT.code, TT.serverText);
              return eT.j
            }(xT.error), KT.g.CONNECT_TO_GAME_SERVER, {
              error: sx(xT.error) ? xT.error : void 0,
              severity: TI(xT.error),
              gameServerUnreachable: (0, VT.c)(xT.error),
              rematch: (0, QT.d)(xT.error),
              gameRefused: (0, ST.b)(xT.error)
            })
          }
          return kI("Reloading into the new build");
        case "stopped":
          return kI("The game client stopped, and shows why");
        case "KT":
          return kI("Left the game while it loaded")
      }
    }

    function qx(TT) {
      return TT instanceof GT.l || TT instanceof GT.d && "attach" !== TT.stage
    }

    function sx(TT) {
      return !(TT instanceof GT.w) && !qx(TT) && void 0 === (0, VT.c)(TT)
    }

    function TI(TT) {
      return qx(TT) ? TT instanceof GT.d && (0, eT.n)(TT.code).requiresRefresh ? "medium" : "low" : sx(TT) || TT instanceof GT.w ? "medium" : "low"
    }

    function kI(TT) {
      return MT.d.errorWithCode(TT, KT.g.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        KT: !0
      })
    }
    class cI {
      leave(TT) {
        if ((0, aT.d)()) {
          var kT, cT;
          if ((0, OT.e)()) return;
          (0, jT.b)(!0 === (null === (kT = (0, aT.h)()) || void 0 === kT || null === (cT = kT.currentViewer) || void 0 === cT ? void 0 : cT.unsavedChanges), TT)
        } else this.leaveLive()
      }
      leaveLive() {
        var TT;
        Ex && (null === (TT = Tx()) || void 0 === TT || TT.endGamePack());
        if (!Lx) return;
        Lx = !1, (0, NT.e)();
        try {
          var kT;
          null === (kT = (0, rT.q)()) || void 0 === kT || kT.clearWasmCameraScreen()
        } catch (lT) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", lT)
        }
        const {
          gameNameWithVariation: cT
        } = (0, CT.b)();
        try {
          Af()
        } finally {
          (0, CT.l)({
            websocketUrl: null
          }), fT.k.nt("leaveGame", {
            gameNameWithVariation: cT
          }), (0, IT.J)()
        }
      }
      isReplay() {
        return (0, aT.d)()
      }
    }
  },
  40627: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      f: () => lT,
      g: () => yT,
      h: () => OT
    });
    const lT = 12e4,
      MT = 3e4,
      KT = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: TT => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", TT), () => {
          document.removeEventListener("visibilitychange", TT)
        })
      };

    function OT(TT) {
      return `it sent no start within ${Math.round(TT)} ms`
    }
    class yT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : KT;
        this.timeoutMs = TT, this.onTimeout = kT, this.now = cT, this.visibility = lT, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = lT.listen((() => {
          this.onVisibility()
        })), lT.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const TT = this.step;
        return null === TT ? 0 : Math.min(this.now() - TT.at, TT.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const TT = this.timeoutMs - this.counted;
        if (TT <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const kT = Math.min(TT, 5e3);
        this.step = {
          at: this.now(),
          ms: kT
        }, this.arm(kT, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(TT, kT) {
        this.timer = setTimeout((() => {
          this.timer = null, kT()
        }), TT)
      }
    }
  },
  37611: (TT, kT, cT) => {
    function lT(TT) {
      return "string" !== typeof TT || 2 !== TT.length && ":" !== TT[2] ? null : TT[0] + TT[1]
    }
    cT.d(kT, {
      c: () => hT,
      f: () => DT,
      i: () => aT,
      j: () => yT,
      l: () => OT,
      o: () => KT,
      q: () => fT,
      r: () => NT,
      u: () => tT
    });
    const MT = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function KT(TT) {
      if (function(TT) {
          for (let kT = 0; kT < MT.length; kT++)
            if (TT === MT[kT]) return !0;
          return !1
        }(TT)) return !1;
      const kT = lT(TT);
      return "op" === kT || "ep" === kT || "wi" === kT || "pp" === kT || "fp:call" === TT || "fp:t" === TT
    }

    function OT(TT) {
      return "fp" === lT(TT) && !KT(TT)
    }

    function yT(TT) {
      if ("string" !== typeof TT) return !1;
      return "o" === TT[0] && "p" === TT[1] && (2 === TT.length || ":" === TT[2]) || "fp:call" === TT || "2" === TT || "t" === TT || "a" === TT
    }

    function fT(TT, kT) {
      return `~${function(TT){return TT.length<2?TT:":"===TT[1]?TT[0]:TT[0]+TT[1]}(kT)}~${TT}`
    }
    const xT = 200;

    function IT(TT) {
      let kT = TT.length - 1;
      for (let cT = 0; cT < 2; cT++) {
        const cT = kT;
        for (; kT >= 0 && TT[kT] >= "0" && TT[kT] <= "9";) kT--;
        if (kT < 0 || kT === cT || ":" !== TT[kT]) return -1;
        kT--
      }
      return kT + 1
    }

    function AT(TT) {
      return "unknown" === TT || IT(TT) >= 0
    }

    function CT(TT, kT) {
      return TT[kT] >= "\ud800" && TT[kT] <= "\udbff" && kT + 1 < TT.length && TT[kT + 1] >= "\udc00" && TT[kT + 1] <= "\udfff" ? 2 : 1
    }

    function jT(TT, kT, cT) {
      return 2 === cT ? 4 : TT[kT] <= "\x7f" ? 1 : TT[kT] <= "\u07ff" ? 2 : 3
    }

    function vT(TT, kT, cT) {
      let lT = 0;
      for (; lT < kT;) {
        const kT = CT(TT, lT),
          MT = jT(TT, lT, kT);
        if (MT > cT) break;
        cT -= MT, lT += kT
      }
      return lT
    }

    function tT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof TT || TT.length > xT || !AT(TT)) return "t";
      let cT = 2;
      for (let yT = 0; yT < TT.length;) {
        const kT = CT(TT, yT);
        cT += jT(TT, yT, kT), yT += kT
      }
      if (cT <= kT) return `t ${TT}`;
      const lT = IT(TT),
        MT = kT - 2 - (TT.length - lT);
      if (MT < 0) return "t";
      const KT = vT(TT, lT, MT);
      let OT = "t ";
      for (let yT = 0; yT < KT; yT++) OT += TT[yT];
      for (let yT = lT; yT < TT.length; yT++) OT += TT[yT];
      return OT
    }
    const hT = 62;

    function NT(TT) {
      let kT = "so:";
      const cT = vT(TT, TT.length, hT - kT.length);
      for (let lT = 0; lT < cT; lT++) kT += TT[lT];
      return kT
    }
    const QT = "BABYLON ",
      ST = "DECODE ";

    function DT(TT) {
      return NT(QT + TT)
    }

    function aT(TT) {
      return NT(ST + TT)
    }
  },
  40524: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    const lT = {
      roomsPerServerMax: 30,
      timeForPlayerToConnect: 3e4,
      seatReservationSeconds: 15,
      healthWindowMs: 3e5,
      minAttemptsForRoomHealthWindow: 6,
      minAttemptsForServerHealthWindow: 20,
      minAttemptsForEmptyServerHealthWindow: 6,
      playerTimeoutThreshold: .8,
      gameServerMatchmakingHeartbeatInterval: 2e3,
      gameServerMatchmakingAnalyticsHeartbeatInterval: 1e4,
      SetRoomsHeartbeatBackoffMultiplier: 1.5,
      SetRoomsHeartbeatMaxInterval: 1e4,
      AnalyticsHeartbeatBackoffMultiplier: 1.2,
      AnalyticsHeartbeatMaxInterval: 3e4,
      defaultSubtractionFromMaxPlayersForSoftCap: 2,
      saveExpectedPlayersEvery: 1e4,
      unregisterFrozenGameServersIntervalMs: 1e3,
      gameServerFrozenThresholdMs: 3e4,
      matchmakingSkipsDrainingLobbies: !0,
      minNotDrainingShareToSkipDrainingLobbies: .5,
      drainingSessionLobbyFillMs: 3e5
    }
  },
  37837: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37825: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37843: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37816: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37834: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38561: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT
    });
    var lT = cT(3679);
    const MT = ["none", "idle", "now"];

    function KT() {
      const TT = () => (0, lT.x)();
      return {
        memoryBytes: () => (0, lT.q)().buffer.byteLength,
        reserveUpFront: kT => TT().yA(kT),
        reserveAhead: kT => TT().OA(kT),
        setCeiling: kT => {
          TT().fA(kT)
        },
        lowWater: () => MT[TT().KA()] ?? "none",
        stats: () => function(TT) {
          const kT = new Uint32Array((0, lT.q)().buffer, TT, 17),
            cT = TT => kT[TT] ?? 0,
            MT = TT => ({
              upFront: cT(TT),
              ahead: cT(TT + 1),
              onDemandInFrame: cT(TT + 2),
              onDemand: cT(TT + 3)
            });
          return {
            memoryBytes: cT(0),
            initialBytes: cT(1),
            liveBytes: cT(2),
            peakLiveBytes: cT(3),
            headroomBytes: cT(4),
            unusedBytes: cT(5),
            ceilingBytes: cT(6),
            reservesRefused: cT(7),
            grows: MT(8),
            grownBytes: MT(12),
            allocationsRefused: cT(16)
          }
        }(TT().xA()),
        takeBallast: () => TT().IA(),
        takePressure: () => TT().AA()
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);