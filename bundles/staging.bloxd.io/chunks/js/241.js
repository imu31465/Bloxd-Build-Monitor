export const id = 241;
export const ids = [241];
export const modules = {
  37772: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      e: () => Hb,
      i: () => pb
    });
    var eb = Mb(1848);
    class Hb extends Error {
      constructor(bb) {
        super("The game server didn't answer in time"), this.leg = bb, this.name = "SeatRequestTimedOut"
      }
    }
    const pb = new class {
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
        for (const bb of this.waiting) bb()
      }
      remove() {
        this.count--
      }
      whenSlow(bb) {
        return this.count > 0 || bb.aborted ? Promise.resolve(!bb.aborted) : new Promise((wb => {
          const Mb = () => {
            this.waiting.delete(Mb), wb(!bb.aborted)
          };
          this.waiting.add(Mb), bb.addEventListener("abort", Mb, {
            once: !0
          })
        }))
      }
    };
    class Vb {
      constructor(bb) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new eb.e(45e3, bb), this.slow = new eb.e(8e3, (() => {
          this.countedSlow = !0, pb.add()
        }))
      }
      restart() {
        pb.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), pb.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), pb.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, pb.remove())
      }
    }
  },
  37402: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      c: () => Hb,
      d: () => pb,
      h: () => Vb
    });
    const eb = 1024,
      Hb = 1024 * eb;

    function pb(bb) {
      return 2 ** Math.floor(Math.log2(Math.max(1, bb / Hb)))
    }

    function Vb(bb) {
      return (bb / Hb).toFixed(1)
    }
  },
  37758: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      d: () => lb,
      g: () => gb,
      h: () => Vb,
      l: () => Lb,
      m: () => Ib,
      p: () => Ub
    });
    var eb = Mb(225);
    const Hb = 32 * Mb(37402).c,
      pb = 6144,
      Vb = 4608,
      gb = 512,
      lb = function() {
        const bb = Ub(eb.e.maxChunkHorizAddDistance + 1, eb.e.maxChunkVertAddDistance + 1);
        let wb = bb;
        for (; Ob(wb) < bb;) wb++;
        return wb
      }();

    function Lb(bb) {
      return Math.floor(Hb * bb / pb)
    }

    function Ib(bb) {
      const wb = Ob(bb);
      let Mb = eb.e.maxChunkHorizAddDistance,
        Hb = eb.e.maxChunkVertAddDistance;
      if (Ub(Mb + 1, Hb + 1) <= wb) return null;
      for (; Ub(Mb + 1, Hb + 1) > wb && (Mb > 0 || Hb > 0);) Mb > Hb ? Mb-- : Hb--;
      return {
        horizontal: Mb,
        vertical: Hb
      }
    }

    function Ob(bb) {
      return bb - Math.floor(bb / 6)
    }

    function Ub(bb, wb) {
      const Mb = Math.max(bb, wb);
      let eb = 0;
      for (let Hb = -Mb; Hb <= Mb; Hb++)
        for (let pb = -Mb; pb <= Mb; pb++)
          for (let Vb = -Mb; Vb <= Mb; Vb++) tb(bb, wb, Hb, pb, Vb) && eb++;
      return eb
    }

    function tb(bb, wb, Mb, eb, Hb) {
      const pb = Mb * Mb + Hb * Hb;
      return bb === wb ? pb + eb * eb <= bb * bb : bb > wb ? Math.abs(eb) <= wb && pb + eb * eb <= bb * bb : pb <= bb * bb && pb + eb * eb <= wb * wb
    }
  },
  37754: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => jb,
      d: () => qb,
      g: () => Gb,
      k: () => Qb,
      o: () => fb,
      p: () => vb,
      r: () => Sb
    });
    var eb = Mb(225),
      Hb = Mb(110),
      pb = Mb(160),
      Vb = Mb(330),
      gb = Mb(5222),
      lb = Mb(700),
      Lb = Mb(729),
      Ib = Mb(5226),
      Ob = Mb(5235),
      Ub = Mb(37758),
      tb = Mb(37764);
    const Cb = 1048576,
      Eb = 1024 * Cb,
      Fb = 400 * Cb,
      Bb = 147456,
      sb = .5,
      mb = 2048,
      hb = 1.5 * Eb,
      zb = 768 * Cb;

    function Xb(bb) {
      const {
        os: wb,
        deviceMemory: Mb
      } = bb;
      if ("ios" === wb) switch ((0, Vb.g)(bb)) {
        case "ipad_m":
          return {
            footprintBytes: xb(Ub.b), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: zb, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: hb, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: zb, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof Mb && Number.isFinite(Mb) && Mb > 0 ? {
        footprintBytes: Mb * Eb * sb,
        basis: `memory-${Mb}`,
        namesLimit: !0
      } : "android" === wb ? {
        footprintBytes: zb,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: xb(Ub.h),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function xb(bb) {
      return Fb + bb * Bb
    }

    function jb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yb(),
        wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pb.siteUsed;
      if ("android" !== bb.os || "mobileAndroid" === wb) return !0;
      const {
        footprintBytes: Mb,
        basis: eb
      } = Xb(bb);
      return "android" === eb || Mb > 2 * Eb
    }

    function Kb(bb) {
      const wb = Math.min(bb, xb(Ub.b));
      return Fb + Math.max(0, wb - Fb) / 2
    }

    function rb(bb, wb, Mb) {
      var Hb, pb, Vb, gb;
      let lb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
          footprintBytes: Lb,
          basis: tb,
          namesLimit: Cb
        } = Xb(bb);
      Mb && (Lb = Kb(Lb), tb += "+killed", Cb = !0), null !== wb && xb(wb) < Lb && (Lb = xb(wb), tb += "+learned", Cb = !0), tb += (0, Ob.v)(null !== (Hb = bb.x32) && void 0 !== Hb ? Hb : null) + (0, Ib.h)(null !== (pb = bb.lowRam) && void 0 !== pb ? pb : null), "fix" === bb.x32 && xb(mb) < Lb && (Lb = xb(mb), Cb = !0), lb && (Lb = Kb(Lb), tb += "+refused", Cb = !0);
      const Eb = function(bb) {
          const wb = Math.floor((bb - Fb) / Bb);
          return Math.min(Ub.b, Math.max(Ub.g, wb))
        }(Lb),
        sb = Cb && Eb < Ub.b ? Math.min(Eb, Ub.d) : Eb,
        hb = (0, Ub.m)(sb);
      return {
        footprintBytes: Lb,
        shedFootprintBytes: Cb ? Math.max(Lb, xb(sb)) : null,
        chunkCap: sb,
        maxHorizDistance: null !== (Vb = null === hb || void 0 === hb ? void 0 : hb.horizontal) && void 0 !== Vb ? Vb : eb.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (gb = null === hb || void 0 === hb ? void 0 : hb.vertical) && void 0 !== gb ? gb : eb.e.maxChunkVertAddDistance,
        basis: tb
      }
    }
    let Rb = null,
      Db = null,
      cb = null;

    function Yb() {
      var bb, wb;
      return Rb ??= {
        os: (0, Hb.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Vb.j)()
      }, {
        ...Rb,
        x32: null !== (bb = (0, Ob.r)()) && void 0 !== bb ? bb : void 0,
        lowRam: null !== (wb = (0, Ib.f)()) && void 0 !== wb ? wb : void 0
      }
    }

    function Zb() {
      return rb(Yb(), (0, gb.f)(), (0, lb.P)("wasm").length > 0, Sb())
    }

    function fb() {
      return cb ??= (0, tb.r)(rb(Yb(), null, !1, Sb()).chunkCap), cb
    }
    const Ab = "wasmMemoryRecord",
      Wb = {
        halvedAt: null,
        reloadSpent: !1
      };

    function Jb() {
      let bb = null;
      try {
        var wb;
        bb = JSON.parse(null !== (wb = (0, Lb.l)((0, Lb.r)(), Ab)) && void 0 !== wb ? wb : "null")
      } catch {
        return Wb
      }
      if ("object" !== typeof bb || null === bb) return Wb;
      const {
        halvedAt: Mb,
        reloadSpent: eb
      } = bb;
      return {
        halvedAt: "number" === typeof Mb && Number.isFinite(Mb) ? Mb : null,
        reloadSpent: !0 === eb
      }
    }

    function Sb() {
      return null !== Jb().halvedAt
    }

    function Nb(bb) {
      const wb = (0, Lb.r)(),
        Mb = JSON.stringify(bb);
      try {
        null === wb || void 0 === wb || wb.setItem(Ab, Mb)
      } catch {
        return !1
      }
      return (0, Lb.l)(wb, Ab) === Mb
    }

    function vb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Mb = Jb();
      return null === Mb.halvedAt ? Nb({
        halvedAt: bb,
        reloadSpent: wb
      }) ? (cb = null, Db = null, "halve") : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent") : Mb.reloadSpent ? "spent" : Nb({
        ...Mb,
        reloadSpent: !0
      }) ? "reload" : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent")
    }

    function Qb() {
      return Db ??= Zb(), Db
    }

    function Gb() {
      var bb;
      return (null !== (bb = Db) && void 0 !== bb ? bb : Zb()).basis
    }

    function qb(bb, wb) {
      return bb.setChunkCap(wb.chunkCap)
    }
  },
  37764: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Kb,
      B: () => Ub,
      e: () => rb,
      k: () => zb,
      l: () => Ob,
      n: () => Xb,
      r: () => sb,
      v: () => jb
    });
    var eb = Mb(37402),
      Hb = Mb(37758);
    const pb = 64 * eb.b,
      Vb = 40 * eb.c,
      gb = 36 * eb.c,
      lb = 20 * eb.c,
      Lb = 2 * eb.c,
      Ib = 5 * eb.c;

    function Ob(bb) {
      return "footprint" !== bb && "gcPressure" !== bb
    }

    function Ub(bb) {
      return Ob(bb) ? "wasm memory was refused" : "gcPressure" === bb ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const tb = 2 * eb.c,
      Cb = 4 * eb.c,
      Eb = 35 * eb.c + tb + Cb,
      Fb = 6.5 * eb.c,
      Bb = 132.5 * eb.b;

    function sb(bb) {
      const wb = Fb + (0, Hb.l)(bb) + bb * Bb;
      return Math.ceil((2 * Eb + wb) / pb) * pb
    }
    sb(Hb.b), eb.c, eb.c, eb.c;
    const mb = {
        targetBytes: Vb,
        leastBytes: lb
      },
      hb = {
        targetBytes: gb,
        leastBytes: lb
      };

    function zb(bb) {
      return {
        targetBytes: bb,
        leastBytes: 0
      }
    }

    function Xb(bb) {
      return bb >= Hb.b ? mb : hb
    }
    const xb = 2 * pb;

    function jb(bb, wb, Mb) {
      return bb + wb + xb > Mb
    }
    const Kb = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? bb => {
        requestIdleCallback(bb)
      } : null
    };
    class rb {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Kb;
        this.memory = bb, this.readPeakStoredChunks = wb, this.onError = Mb, this.clock = eb, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(bb, wb, Mb) {
        this.shedding = {
          shed: bb,
          bO: wb,
          readDistanceInUse: Mb
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(bb) {
        this.footprint = bb
      }
      setGcPressure(bb) {
        this.gcPressure = {
          highEpisode: bb,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(bb) {
        this.ceilingBytes = bb, this.call((() => {
          this.memory.setCeiling(bb)
        }), void 0)
      }
      ceilingMayRefuse(bb, wb) {
        var Mb;
        return jb(this.memory.memoryBytes(), bb, null !== (Mb = this.ceilingBytes) && void 0 !== Mb ? Mb : wb)
      }
      reserveAtJoin(bb) {
        let {
          targetBytes: wb,
          leastBytes: Mb
        } = bb;
        const eb = this.memory.memoryBytes(),
          Hb = eb + Mb,
          pb = Math.max(wb + (this.ballastOn() ? Ib : 0), Hb),
          Vb = this.call((() => this.memory.reserveUpFront(pb) ? "target" : pb > Hb && this.memory.reserveUpFront(Hb) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Vb) {
          const bb = "least" === Vb ? `took ${Hb} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${pb} bytes was refused at ${eb} bytes; ${bb}`)
        }
        return this.joinReserveTaken = Vb, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Vb && this.shedFor("joinReserve"), "none" !== Vb
      }
      afterFrame() {
        if (this.stopped) return;
        const bb = this.clock.now(),
          wb = null !== this.stepsHeldUntil && bb >= this.stepsHeldUntil;
        if (wb && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && bb >= this.ballastCheckAt && (this.takeBallast(bb), this.stopped)) return;
        const Mb = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          eb = wb && "now" === Mb ? "none" : Mb,
          {
            requestIdle: Hb
          } = this.clock;
        "now" === eb || null !== this.pendingSince && bb - this.pendingSince >= 500 ? this.step() : "idle" === eb && null === this.pendingSince && (null === Hb ? this.step() : (this.pendingSince = bb, Hb((() => {
          null !== this.pendingSince && this.step()
        })))), bb - this.statsAt >= 1e3 && (this.statsAt = bb, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(bb))
      }
      refreshStats() {
        this.call((() => {
          var bb, wb;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (wb = this.shedding.readDistanceInUse()) && void 0 !== wb ? wb : this.distanceInUse);
          null === (bb = this.footprint) || void 0 === bb || bb.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(bb, wb) {
        this.noteWorker(`Mesh${bb}`, wb)
      }
      meshWorkerGone(bb) {
        this.workerGone(`Mesh${bb}`)
      }
      noteWorldgen(bb) {
        this.noteWorker("Worldgen", bb)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(bb, wb) {
        const Mb = this.workers.get(bb);
        null !== Mb && void 0 !== Mb && Mb.gone && (this.replacedRefusals.reserves += Mb.stats.reservesRefused, this.replacedRefusals.allocations += Mb.stats.allocationsRefused), this.workers.set(bb, {
          stats: wb,
          gone: !1
        })
      }
      workerGone(bb) {
        const wb = this.workers.get(bb);
        wb && (wb.gone = !0)
      }
      details() {
        var bb, wb;
        const Mb = this.memory.memoryBytes(),
          Hb = {
            wasmMemoryNow: `${(0,eb.h)(Mb)} MiB`,
            wasmMemoryMiB: String(Math.floor(Mb / eb.c))
          };
        null !== this.joinReserveTaken && (Hb.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (Hb.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const pb = this.main;
        if (pb) {
          Hb.wasmMemoryMain = Rb(pb);
          const bb = Math.max(0, pb.peakLiveBytes - this.ballastPeakBytes),
            wb = 0 === this.peakStoredChunks ? "-" : (bb / this.peakStoredChunks / eb.b).toFixed(1);
          Hb.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${wb} KiB`
        }
        for (const [eb, {
            stats: gb,
            gone: lb
          }] of this.workers) Hb[`wasmMemory${eb}`] = Rb(gb) + (lb ? " (gone)" : "");
        const Vb = null !== (bb = null === (wb = this.footprint) || void 0 === wb ? void 0 : wb.describe()) && void 0 !== bb ? bb : null;
        return null !== Vb && (Hb.wasmMemoryFootprint = Vb), Hb
      }
      pageKillSnapshot() {
        var bb, wb, Mb, Hb, pb;
        let Vb = (null !== (bb = null === (wb = this.main) || void 0 === wb ? void 0 : wb.reservesRefused) && void 0 !== bb ? bb : 0) + this.replacedRefusals.reserves,
          gb = (null !== (Mb = null === (Hb = this.main) || void 0 === Hb ? void 0 : Hb.allocationsRefused) && void 0 !== Mb ? Mb : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: eb
          }
          of this.workers.values()) Vb += eb.reservesRefused, gb += eb.allocationsRefused;
        return {
          wasmMainMiB: Number((0, eb.h)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, eb.h)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Vb,
          refusedAllocations: gb,
          sheds: this.sheds,
          ...null === (pb = this.footprint) || void 0 === pb ? void 0 : pb.snapshot()
        }
      }
      workersMemoryBytes() {
        let bb = 0;
        for (const {
            stats: wb,
            gone: Mb
          }
          of this.workers.values()) bb += Mb ? 0 : wb.memoryBytes;
        return bb
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(bb) {
        const wb = this.gcPressure;
        if (null === wb) return;
        if (null !== wb.nextAt || "undefined" !== typeof document && document.hidden || (wb.nextAt = bb + 6e4), null === wb.nextAt || bb < wb.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const Mb = wb.highEpisode();
        null !== Mb && Mb !== wb.shedEpisode && (wb.shedEpisode = Mb, wb.nextAt = bb + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Lb)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(bb) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = bb + 1e3;
        const wb = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, wb)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(bb) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${bb}: frames grow on demand from here`)
      }
      shedFor(bb) {
        const {
          shedding: wb
        } = this;
        if (null === wb) return;
        this.pendingSince = null;
        const Mb = this.call((() => wb.shed(bb)), null);
        if (this.stopped) return;
        if (null === Mb) return void(Ob(bb) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = Mb, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const eb = "gcPressure" === bb ? ++this.gcSheds : this.sheds - this.gcSheds;
        wb.bO(bb, eb, this.details())
      }
      call(bb, wb) {
        if (this.stopped) return wb;
        try {
          return bb()
        } catch (Mb) {
          return this.stop(), this.onError(Mb), wb
        }
      }
    }

    function Rb(bb) {
      const wb = (bb, wb) => `${bb}/${(0,eb.h)(wb)}`;
      return `memory ${(0,eb.h)(bb.memoryBytes)} live ${(0,eb.h)(bb.liveBytes)} peak ${(0,eb.h)(bb.peakLiveBytes)} unused ${(0,eb.h)(bb.unusedBytes)} ceiling ${(0,eb.h)(bb.ceilingBytes)} MiB; grows upFront ${wb(bb.grows.upFront,bb.grownBytes.upFront)} ahead ${wb(bb.grows.ahead,bb.grownBytes.ahead)} inFrame ${wb(bb.grows.onDemandInFrame,bb.grownBytes.onDemandInFrame)} other ${wb(bb.grows.onDemand,bb.grownBytes.onDemand)}; refused reserves ${bb.reservesRefused} allocations ${bb.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);