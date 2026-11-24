export const id = 215;
export const ids = [215];
export const modules = {
  36738: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt,
      c: () => qt,
      g: () => Dt
    });
    var Ot = Vt(1883);
    class qt extends Error {
      constructor(tt) {
        super("The game server didn't answer in time"), this.leg = tt, this.name = "SeatRequestTimedOut"
      }
    }
    const Dt = new class {
      constructor() {
        this.count = 0, this.answers = 0, this.waiting = new Set
      }
      get answered() {
        return this.answers
      }
      answer() {
        this.answers++
      }
      add() {
        this.count++;
        for (const tt of this.waiting) tt()
      }
      remove() {
        this.count--
      }
      whenSlow(tt) {
        return this.count > 0 || tt.aborted ? Promise.resolve(!tt.aborted) : new Promise((et => {
          const Vt = () => {
            this.waiting.delete(Vt), et(!tt.aborted)
          };
          this.waiting.add(Vt), tt.addEventListener("abort", Vt, {
            once: !0
          })
        }))
      }
    };
    class mt {
      constructor(tt) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Ot.c(45e3, tt), this.slow = new Ot.c(8e3, (() => {
          this.countedSlow = !0, Dt.add()
        }))
      }
      restart() {
        Dt.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), Dt.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), Dt.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, Dt.remove())
      }
    }
  },
  36498: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      g: () => qt,
      j: () => Dt,
      n: () => mt
    });
    const Ot = 1024,
      qt = 1024 * Ot;

    function Dt(tt) {
      return 2 ** Math.floor(Math.log2(Math.max(1, tt / qt)))
    }

    function mt(tt) {
      return (tt / qt).toFixed(1)
    }
  },
  36720: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      c: () => jt,
      d: () => dt,
      f: () => mt,
      j: () => Ht,
      l: () => Xt,
      o: () => lt
    });
    var Ot = Vt(229);
    const qt = 32 * Vt(36498).g,
      Dt = 6144,
      mt = 4608,
      dt = 512,
      jt = function() {
        const tt = lt(Ot.e.maxChunkHorizAddDistance + 1, Ot.e.maxChunkVertAddDistance + 1);
        let et = tt;
        for (; Qt(et) < tt;) et++;
        return et
      }();

    function Ht(tt) {
      return Math.floor(qt * tt / Dt)
    }

    function Xt(tt) {
      const et = Qt(tt);
      let Vt = Ot.e.maxChunkHorizAddDistance,
        qt = Ot.e.maxChunkVertAddDistance;
      if (lt(Vt + 1, qt + 1) <= et) return null;
      for (; lt(Vt + 1, qt + 1) > et && (Vt > 0 || qt > 0);) Vt > qt ? Vt-- : qt--;
      return {
        horizontal: Vt,
        vertical: qt
      }
    }

    function Qt(tt) {
      return tt - Math.floor(tt / 6)
    }

    function lt(tt, et) {
      const Vt = Math.max(tt, et);
      let Ot = 0;
      for (let qt = -Vt; qt <= Vt; qt++)
        for (let Dt = -Vt; Dt <= Vt; Dt++)
          for (let mt = -Vt; mt <= Vt; mt++) Et(tt, et, qt, Dt, mt) && Ot++;
      return Ot
    }

    function Et(tt, et, Vt, Ot, qt) {
      const Dt = Vt * Vt + qt * qt;
      return tt === et ? Dt + Ot * Ot <= tt * tt : tt > et ? Math.abs(Ot) <= et && Dt + Ot * Ot <= tt * tt : Dt <= tt * tt && Dt + Ot * Ot <= et * et
    }
  },
  36715: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Jt,
      e: () => It,
      g: () => Rt,
      i: () => ct,
      l: () => St
    });
    var Ot = Vt(229),
      qt = Vt(106),
      Dt = Vt(153),
      mt = Vt(332),
      dt = Vt(4511),
      jt = Vt(730),
      Ht = Vt(36720),
      Xt = Vt(36729);
    const Qt = 1048576,
      lt = 1024 * Qt,
      Et = 400 * Qt,
      ft = 147456,
      wt = .5,
      yt = 1.5 * lt,
      Nt = 768 * Qt;

    function Mt(tt) {
      const {
        os: et,
        deviceMemory: Vt
      } = tt;
      if ("ios" === et) switch ((0, mt.e)(tt)) {
        case "ipad_m":
          return {
            footprintBytes: bt(Ht.b), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: Nt, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: yt, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: Nt, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof Vt && Number.isFinite(Vt) && Vt > 0 ? {
        footprintBytes: Vt * lt * wt,
        basis: `memory-${Vt}`,
        namesLimit: !0
      } : "android" === et ? {
        footprintBytes: Nt,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: bt(Ht.f),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function bt(tt) {
      return Et + tt * ft
    }

    function Jt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vt(),
        et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dt.siteUsed;
      if ("android" !== tt.os || "mobileAndroid" === et) return !0;
      const {
        footprintBytes: Vt,
        basis: Ot
      } = Mt(tt);
      return "android" === Ot || Vt > 2 * lt
    }

    function Ct(tt, et, Vt) {
      var qt, Dt;
      let {
        footprintBytes: mt,
        basis: dt,
        namesLimit: jt
      } = Mt(tt);
      if (Vt) {
        const tt = Math.min(mt, bt(Ht.b));
        mt = Et + Math.max(0, tt - Et) / 2, dt += "+killed", jt = !0
      }
      null !== et && bt(et) < mt && (mt = bt(et), dt += "+learned", jt = !0);
      const Xt = function(tt) {
          const et = Math.floor((tt - Et) / ft);
          return Math.min(Ht.b, Math.max(Ht.d, et))
        }(mt),
        Qt = jt && Xt < Ht.b ? Math.min(Xt, Ht.c) : Xt,
        lt = (0, Ht.l)(Qt);
      return {
        footprintBytes: mt,
        shedFootprintBytes: jt ? Math.max(mt, bt(Qt)) : null,
        chunkCap: Qt,
        maxHorizDistance: null !== (qt = null === lt || void 0 === lt ? void 0 : lt.horizontal) && void 0 !== qt ? qt : Ot.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Dt = null === lt || void 0 === lt ? void 0 : lt.vertical) && void 0 !== Dt ? Dt : Ot.e.maxChunkVertAddDistance,
        basis: dt
      }
    }
    let ut = null,
      Kt = null,
      ht = null;

    function vt() {
      return ut ??= {
        os: (0, qt.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, mt.f)()
      }, ut
    }

    function Wt() {
      return Ct(vt(), (0, dt.f)(), (0, jt.C)("wasm").length > 0)
    }

    function St() {
      return ht ??= (0, Xt.q)(Ct(vt(), null, !1).chunkCap), ht
    }

    function ct() {
      return Kt ??= Wt(), Kt
    }

    function Rt() {
      var tt;
      return (null !== (tt = Kt) && void 0 !== tt ? tt : Wt()).basis
    }

    function It(tt, et) {
      return tt.setChunkCap(et.chunkCap)
    }
  },
  36729: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => vt,
      j: () => Jt,
      m: () => Qt,
      n: () => Ct,
      q: () => Nt,
      r: () => Kt,
      t: () => ht
    });
    var Ot = Vt(36498),
      qt = Vt(36720);
    const Dt = 64 * Ot.e,
      mt = 40 * Ot.g,
      dt = 36 * Ot.g,
      jt = 20 * Ot.g,
      Ht = 2 * Ot.g,
      Xt = 5 * Ot.g;

    function Qt(tt) {
      return "footprint" !== tt
    }
    const lt = 2 * Ot.g,
      Et = 4 * Ot.g,
      ft = 35 * Ot.g + lt + Et,
      wt = 6.5 * Ot.g,
      yt = 132.5 * Ot.e;

    function Nt(tt) {
      const et = wt + (0, qt.j)(tt) + tt * yt;
      return Math.ceil((2 * ft + et) / Dt) * Dt
    }
    Nt(qt.b), Ot.g, Ot.g, Ot.g;
    const Mt = {
        targetBytes: mt,
        leastBytes: jt
      },
      bt = {
        targetBytes: dt,
        leastBytes: jt
      };

    function Jt(tt) {
      return {
        targetBytes: tt,
        leastBytes: 0
      }
    }

    function Ct(tt) {
      return tt >= qt.b ? Mt : bt
    }
    const ut = 2 * Dt;

    function Kt(tt, et, Vt) {
      return tt + et + ut > Vt
    }
    const ht = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? tt => {
        requestIdleCallback(tt)
      } : null
    };
    class vt {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ht;
        this.memory = tt, this.readPeakStoredChunks = et, this.onError = Vt, this.clock = Ot, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(tt, et, Vt) {
        this.shedding = {
          shed: tt,
          iE: et,
          readDistanceInUse: Vt
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(tt) {
        this.footprint = tt
      }
      setCeiling(tt) {
        this.ceilingBytes = tt, this.call((() => {
          this.memory.setCeiling(tt)
        }), void 0)
      }
      ceilingMayRefuse(tt, et) {
        var Vt;
        return Kt(this.memory.memoryBytes(), tt, null !== (Vt = this.ceilingBytes) && void 0 !== Vt ? Vt : et)
      }
      reserveAtJoin(tt) {
        let {
          targetBytes: et,
          leastBytes: Vt
        } = tt;
        const Ot = this.memory.memoryBytes(),
          qt = Ot + Vt,
          Dt = Math.max(et + (this.ballastOn() ? Xt : 0), qt),
          mt = this.call((() => this.memory.reserveUpFront(Dt) ? "target" : Dt > qt && this.memory.reserveUpFront(qt) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== mt) {
          const tt = "least" === mt ? `took ${qt} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Dt} bytes was refused at ${Ot} bytes; ${tt}`)
        }
        return this.joinReserveTaken = mt, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== mt && this.shedFor("joinReserve"), "none" !== mt
      }
      afterFrame() {
        if (this.stopped) return;
        const tt = this.clock.now(),
          et = null !== this.stepsHeldUntil && tt >= this.stepsHeldUntil;
        if (et && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && tt >= this.ballastCheckAt && (this.takeBallast(tt), this.stopped)) return;
        const Vt = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Ot = et && "now" === Vt ? "none" : Vt,
          {
            requestIdle: qt
          } = this.clock;
        "now" === Ot || null !== this.pendingSince && tt - this.pendingSince >= 500 ? this.step() : "idle" === Ot && null === this.pendingSince && (null === qt ? this.step() : (this.pendingSince = tt, qt((() => {
          null !== this.pendingSince && this.step()
        })))), tt - this.statsAt >= 1e3 && (this.statsAt = tt, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var tt, et;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (et = this.shedding.readDistanceInUse()) && void 0 !== et ? et : this.distanceInUse);
          null === (tt = this.footprint) || void 0 === tt || tt.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(tt, et) {
        this.noteWorker(`Mesh${tt}`, et)
      }
      meshWorkerGone(tt) {
        this.workerGone(`Mesh${tt}`)
      }
      noteWorldgen(tt) {
        this.noteWorker("Worldgen", tt)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(tt, et) {
        const Vt = this.workers.get(tt);
        null !== Vt && void 0 !== Vt && Vt.gone && (this.replacedRefusals.reserves += Vt.stats.reservesRefused, this.replacedRefusals.allocations += Vt.stats.allocationsRefused), this.workers.set(tt, {
          stats: et,
          gone: !1
        })
      }
      workerGone(tt) {
        const et = this.workers.get(tt);
        et && (et.gone = !0)
      }
      details() {
        var tt, et;
        const Vt = {
          wasmMemoryNow: `${(0,Ot.n)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (Vt.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (Vt.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const qt = this.main;
        if (qt) {
          Vt.wasmMemoryMain = Wt(qt);
          const tt = Math.max(0, qt.peakLiveBytes - this.ballastPeakBytes),
            et = 0 === this.peakStoredChunks ? "-" : (tt / this.peakStoredChunks / Ot.e).toFixed(1);
          Vt.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${et} KiB`
        }
        for (const [Ot, {
            stats: mt,
            gone: dt
          }] of this.workers) Vt[`wasmMemory${Ot}`] = Wt(mt) + (dt ? " (gone)" : "");
        const Dt = null !== (tt = null === (et = this.footprint) || void 0 === et ? void 0 : et.describe()) && void 0 !== tt ? tt : null;
        return null !== Dt && (Vt.wasmMemoryFootprint = Dt), Vt
      }
      pageKillSnapshot() {
        var tt, et, Vt, qt, Dt;
        let mt = (null !== (tt = null === (et = this.main) || void 0 === et ? void 0 : et.reservesRefused) && void 0 !== tt ? tt : 0) + this.replacedRefusals.reserves,
          dt = (null !== (Vt = null === (qt = this.main) || void 0 === qt ? void 0 : qt.allocationsRefused) && void 0 !== Vt ? Vt : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Ot
          }
          of this.workers.values()) mt += Ot.reservesRefused, dt += Ot.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Ot.n)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Ot.n)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: mt,
          refusedAllocations: dt,
          sheds: this.sheds,
          ...null === (Dt = this.footprint) || void 0 === Dt ? void 0 : Dt.snapshot()
        }
      }
      workersMemoryBytes() {
        let tt = 0;
        for (const {
            stats: et,
            gone: Vt
          }
          of this.workers.values()) tt += Vt ? 0 : et.memoryBytes;
        return tt
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Ht)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(tt) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = tt + 1e3;
        const et = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, et)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(tt) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${tt}: frames grow on demand from here`)
      }
      shedFor(tt) {
        const {
          shedding: et
        } = this;
        if (null === et) return;
        this.pendingSince = null;
        const Vt = this.call((() => et.shed(tt)), null);
        this.stopped || (null !== Vt ? (this.sheds++, this.shedCap = Vt, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), et.iE(tt, this.sheds, this.details())) : Qt(tt) && this.stopSteps("nothing is left to shed"))
      }
      call(tt, et) {
        if (this.stopped) return et;
        try {
          return tt()
        } catch (Vt) {
          return this.stop(), this.onError(Vt), et
        }
      }
    }

    function Wt(tt) {
      const et = (tt, et) => `${tt}/${(0,Ot.n)(et)}`;
      return `memory ${(0,Ot.n)(tt.memoryBytes)} live ${(0,Ot.n)(tt.liveBytes)} peak ${(0,Ot.n)(tt.peakLiveBytes)} unused ${(0,Ot.n)(tt.unusedBytes)} ceiling ${(0,Ot.n)(tt.ceilingBytes)} MiB; grows upFront ${et(tt.grows.upFront,tt.grownBytes.upFront)} ahead ${et(tt.grows.ahead,tt.grownBytes.ahead)} inFrame ${et(tt.grows.onDemandInFrame,tt.grownBytes.onDemandInFrame)} other ${et(tt.grows.onDemand,tt.grownBytes.onDemand)}; refused reserves ${tt.reservesRefused} allocations ${tt.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);