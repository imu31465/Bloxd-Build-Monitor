export const id = 215;
export const ids = [215];
export const modules = {
  36870: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      g: () => Uu,
      i: () => Zu
    });
    var su = ju(1843);
    class Uu extends Error {
      constructor(uu) {
        super("The game server didn't answer in time"), this.leg = uu, this.name = "SeatRequestTimedOut"
      }
    }
    const Zu = new class {
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
        for (const uu of this.waiting) uu()
      }
      remove() {
        this.count--
      }
      whenSlow(uu) {
        return this.count > 0 || uu.aborted ? Promise.resolve(!uu.aborted) : new Promise((Eu => {
          const ju = () => {
            this.waiting.delete(ju), Eu(!uu.aborted)
          };
          this.waiting.add(ju), uu.addEventListener("abort", ju, {
            once: !0
          })
        }))
      }
    };
    class Xu {
      constructor(uu) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new su.b(45e3, uu), this.slow = new su.b(8e3, (() => {
          this.countedSlow = !0, Zu.add()
        }))
      }
      restart() {
        Zu.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), Zu.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), Zu.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, Zu.remove())
      }
    }
  },
  36675: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      h: () => Uu,
      k: () => Zu,
      m: () => Xu
    });
    const su = 1024,
      Uu = 1024 * su;

    function Zu(uu) {
      return 2 ** Math.floor(Math.log2(Math.max(1, uu / Uu)))
    }

    function Xu(uu) {
      return (uu / Uu).toFixed(1)
    }
  },
  36866: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      f: () => qu,
      g: () => lu,
      k: () => Xu,
      o: () => fu,
      s: () => Cu,
      t: () => cu
    });
    var su = ju(202);
    const Uu = 32 * ju(36675).h,
      Zu = 6144,
      Xu = 4608,
      lu = 512,
      qu = function() {
        const uu = cu(su.e.maxChunkHorizAddDistance + 1, su.e.maxChunkVertAddDistance + 1);
        let Eu = uu;
        for (; bu(Eu) < uu;) Eu++;
        return Eu
      }();

    function fu(uu) {
      return Math.floor(Uu * uu / Zu)
    }

    function Cu(uu) {
      const Eu = bu(uu);
      let ju = su.e.maxChunkHorizAddDistance,
        Uu = su.e.maxChunkVertAddDistance;
      if (cu(ju + 1, Uu + 1) <= Eu) return null;
      for (; cu(ju + 1, Uu + 1) > Eu && (ju > 0 || Uu > 0);) ju > Uu ? ju-- : Uu--;
      return {
        horizontal: ju,
        vertical: Uu
      }
    }

    function bu(uu) {
      return uu - Math.floor(uu / 6)
    }

    function cu(uu, Eu) {
      const ju = Math.max(uu, Eu);
      let su = 0;
      for (let Uu = -ju; Uu <= ju; Uu++)
        for (let Zu = -ju; Zu <= ju; Zu++)
          for (let Xu = -ju; Xu <= ju; Xu++) Nu(uu, Eu, Uu, Zu, Xu) && su++;
      return su
    }

    function Nu(uu, Eu, ju, su, Uu) {
      const Zu = ju * ju + Uu * Uu;
      return uu === Eu ? Zu + su * su <= uu * uu : uu > Eu ? Math.abs(su) <= Eu && Zu + su * su <= uu * uu : Zu <= uu * uu && Zu + su * su <= Eu * Eu
    }
  },
  36860: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => eu,
      g: () => mu,
      h: () => ku,
      k: () => ou,
      o: () => Pu
    });
    var su = ju(202),
      Uu = ju(91),
      Zu = ju(131),
      Xu = ju(293),
      lu = ju(4564),
      qu = ju(687),
      fu = ju(36866),
      Cu = ju(36868);
    const bu = 1048576,
      cu = 1024 * bu,
      Nu = 400 * bu,
      Ou = 147456,
      Yu = .5,
      hu = 1.5 * cu,
      Du = 768 * bu;

    function gu(uu) {
      const {
        os: Eu,
        deviceMemory: ju
      } = uu;
      if ("ios" === Eu) switch ((0, Xu.g)(uu)) {
        case "ipad_m":
          return {
            footprintBytes: Mu(fu.b), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: Du, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: hu, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: Du, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof ju && Number.isFinite(ju) && ju > 0 ? {
        footprintBytes: ju * cu * Yu,
        basis: `memory-${ju}`,
        namesLimit: !0
      } : "android" === Eu ? {
        footprintBytes: Du,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: Mu(fu.k),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function Mu(uu) {
      return Nu + uu * Ou
    }

    function eu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : du(),
        Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zu.siteUsed;
      if ("android" !== uu.os || "mobileAndroid" === Eu) return !0;
      const {
        footprintBytes: ju,
        basis: su
      } = gu(uu);
      return "android" === su || ju > 2 * cu
    }

    function Gu(uu, Eu, ju) {
      var Uu, Zu;
      let {
        footprintBytes: Xu,
        basis: lu,
        namesLimit: qu
      } = gu(uu);
      if (ju) {
        const uu = Math.min(Xu, Mu(fu.b));
        Xu = Nu + Math.max(0, uu - Nu) / 2, lu += "+killed", qu = !0
      }
      null !== Eu && Mu(Eu) < Xu && (Xu = Mu(Eu), lu += "+learned", qu = !0);
      const Cu = function(uu) {
          const Eu = Math.floor((uu - Nu) / Ou);
          return Math.min(fu.b, Math.max(fu.g, Eu))
        }(Xu),
        bu = qu && Cu < fu.b ? Math.min(Cu, fu.f) : Cu,
        cu = (0, fu.s)(bu);
      return {
        footprintBytes: Xu,
        shedFootprintBytes: qu ? Math.max(Xu, Mu(bu)) : null,
        chunkCap: bu,
        maxHorizDistance: null !== (Uu = null === cu || void 0 === cu ? void 0 : cu.horizontal) && void 0 !== Uu ? Uu : su.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Zu = null === cu || void 0 === cu ? void 0 : cu.vertical) && void 0 !== Zu ? Zu : su.e.maxChunkVertAddDistance,
        basis: lu
      }
    }
    let pu = null,
      wu = null,
      Ju = null;

    function du() {
      return pu ??= {
        os: (0, Uu.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Xu.j)()
      }, pu
    }

    function au() {
      return Gu(du(), (0, lu.d)(), (0, qu.y)("wasm").length > 0)
    }

    function Pu() {
      return Ju ??= (0, Cu.p)(Gu(du(), null, !1).chunkCap), Ju
    }

    function ou() {
      return wu ??= au(), wu
    }

    function ku() {
      var uu;
      return (null !== (uu = wu) && void 0 !== uu ? uu : au()).basis
    }

    function mu(uu, Eu) {
      return uu.setChunkCap(Eu.chunkCap)
    }
  },
  36868: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => du,
      j: () => eu,
      l: () => bu,
      n: () => Gu,
      p: () => Du,
      r: () => wu,
      u: () => Ju
    });
    var su = ju(36675),
      Uu = ju(36866);
    const Zu = 64 * su.e,
      Xu = 40 * su.h,
      lu = 36 * su.h,
      qu = 20 * su.h,
      fu = 2 * su.h,
      Cu = 5 * su.h;

    function bu(uu) {
      return "footprint" !== uu
    }
    const cu = 2 * su.h,
      Nu = 4 * su.h,
      Ou = 35 * su.h + cu + Nu,
      Yu = 6.5 * su.h,
      hu = 132.5 * su.e;

    function Du(uu) {
      const Eu = Yu + (0, Uu.o)(uu) + uu * hu;
      return Math.ceil((2 * Ou + Eu) / Zu) * Zu
    }
    Du(Uu.b), su.h, su.h, su.h;
    const gu = {
        targetBytes: Xu,
        leastBytes: qu
      },
      Mu = {
        targetBytes: lu,
        leastBytes: qu
      };

    function eu(uu) {
      return {
        targetBytes: uu,
        leastBytes: 0
      }
    }

    function Gu(uu) {
      return uu >= Uu.b ? gu : Mu
    }
    const pu = 2 * Zu;

    function wu(uu, Eu, ju) {
      return uu + Eu + pu > ju
    }
    const Ju = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? uu => {
        requestIdleCallback(uu)
      } : null
    };
    class du {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ju;
        this.memory = uu, this.readPeakStoredChunks = Eu, this.onError = ju, this.clock = su, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(uu, Eu, ju) {
        this.shedding = {
          shed: uu,
          HN: Eu,
          readDistanceInUse: ju
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(uu) {
        this.footprint = uu
      }
      setCeiling(uu) {
        this.ceilingBytes = uu, this.call((() => {
          this.memory.setCeiling(uu)
        }), void 0)
      }
      ceilingMayRefuse(uu, Eu) {
        var ju;
        return wu(this.memory.memoryBytes(), uu, null !== (ju = this.ceilingBytes) && void 0 !== ju ? ju : Eu)
      }
      reserveAtJoin(uu) {
        let {
          targetBytes: Eu,
          leastBytes: ju
        } = uu;
        const su = this.memory.memoryBytes(),
          Uu = su + ju,
          Zu = Math.max(Eu + (this.ballastOn() ? Cu : 0), Uu),
          Xu = this.call((() => this.memory.reserveUpFront(Zu) ? "target" : Zu > Uu && this.memory.reserveUpFront(Uu) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Xu) {
          const uu = "least" === Xu ? `took ${Uu} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Zu} bytes was refused at ${su} bytes; ${uu}`)
        }
        return this.joinReserveTaken = Xu, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Xu && this.shedFor("joinReserve"), "none" !== Xu
      }
      afterFrame() {
        if (this.stopped) return;
        const uu = this.clock.now(),
          Eu = null !== this.stepsHeldUntil && uu >= this.stepsHeldUntil;
        if (Eu && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && uu >= this.ballastCheckAt && (this.takeBallast(uu), this.stopped)) return;
        const ju = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          su = Eu && "now" === ju ? "none" : ju,
          {
            requestIdle: Uu
          } = this.clock;
        "now" === su || null !== this.pendingSince && uu - this.pendingSince >= 500 ? this.step() : "idle" === su && null === this.pendingSince && (null === Uu ? this.step() : (this.pendingSince = uu, Uu((() => {
          null !== this.pendingSince && this.step()
        })))), uu - this.statsAt >= 1e3 && (this.statsAt = uu, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var uu, Eu;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Eu = this.shedding.readDistanceInUse()) && void 0 !== Eu ? Eu : this.distanceInUse);
          null === (uu = this.footprint) || void 0 === uu || uu.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(uu, Eu) {
        this.noteWorker(`Mesh${uu}`, Eu)
      }
      meshWorkerGone(uu) {
        this.workerGone(`Mesh${uu}`)
      }
      noteWorldgen(uu) {
        this.noteWorker("Worldgen", uu)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(uu, Eu) {
        const ju = this.workers.get(uu);
        null !== ju && void 0 !== ju && ju.gone && (this.replacedRefusals.reserves += ju.stats.reservesRefused, this.replacedRefusals.allocations += ju.stats.allocationsRefused), this.workers.set(uu, {
          stats: Eu,
          gone: !1
        })
      }
      workerGone(uu) {
        const Eu = this.workers.get(uu);
        Eu && (Eu.gone = !0)
      }
      details() {
        var uu, Eu;
        const ju = {
          wasmMemoryNow: `${(0,su.m)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (ju.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (ju.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Uu = this.main;
        if (Uu) {
          ju.wasmMemoryMain = au(Uu);
          const uu = Math.max(0, Uu.peakLiveBytes - this.ballastPeakBytes),
            Eu = 0 === this.peakStoredChunks ? "-" : (uu / this.peakStoredChunks / su.e).toFixed(1);
          ju.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Eu} KiB`
        }
        for (const [su, {
            stats: Xu,
            gone: lu
          }] of this.workers) ju[`wasmMemory${su}`] = au(Xu) + (lu ? " (gone)" : "");
        const Zu = null !== (uu = null === (Eu = this.footprint) || void 0 === Eu ? void 0 : Eu.describe()) && void 0 !== uu ? uu : null;
        return null !== Zu && (ju.wasmMemoryFootprint = Zu), ju
      }
      pageKillSnapshot() {
        var uu, Eu, ju, Uu, Zu;
        let Xu = (null !== (uu = null === (Eu = this.main) || void 0 === Eu ? void 0 : Eu.reservesRefused) && void 0 !== uu ? uu : 0) + this.replacedRefusals.reserves,
          lu = (null !== (ju = null === (Uu = this.main) || void 0 === Uu ? void 0 : Uu.allocationsRefused) && void 0 !== ju ? ju : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: su
          }
          of this.workers.values()) Xu += su.reservesRefused, lu += su.allocationsRefused;
        return {
          wasmMainMiB: Number((0, su.m)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, su.m)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Xu,
          refusedAllocations: lu,
          sheds: this.sheds,
          ...null === (Zu = this.footprint) || void 0 === Zu ? void 0 : Zu.snapshot()
        }
      }
      workersMemoryBytes() {
        let uu = 0;
        for (const {
            stats: Eu,
            gone: ju
          }
          of this.workers.values()) uu += ju ? 0 : Eu.memoryBytes;
        return uu
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(fu)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(uu) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = uu + 1e3;
        const Eu = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Eu)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(uu) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${uu}: frames grow on demand from here`)
      }
      shedFor(uu) {
        const {
          shedding: Eu
        } = this;
        if (null === Eu) return;
        this.pendingSince = null;
        const ju = this.call((() => Eu.shed(uu)), null);
        this.stopped || (null !== ju ? (this.sheds++, this.shedCap = ju, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), Eu.HN(uu, this.sheds, this.details())) : bu(uu) && this.stopSteps("nothing is left to shed"))
      }
      call(uu, Eu) {
        if (this.stopped) return Eu;
        try {
          return uu()
        } catch (ju) {
          return this.stop(), this.onError(ju), Eu
        }
      }
    }

    function au(uu) {
      const Eu = (uu, Eu) => `${uu}/${(0,su.m)(Eu)}`;
      return `memory ${(0,su.m)(uu.memoryBytes)} live ${(0,su.m)(uu.liveBytes)} peak ${(0,su.m)(uu.peakLiveBytes)} unused ${(0,su.m)(uu.unusedBytes)} ceiling ${(0,su.m)(uu.ceilingBytes)} MiB; grows upFront ${Eu(uu.grows.upFront,uu.grownBytes.upFront)} ahead ${Eu(uu.grows.ahead,uu.grownBytes.ahead)} inFrame ${Eu(uu.grows.onDemandInFrame,uu.grownBytes.onDemandInFrame)} other ${Eu(uu.grows.onDemand,uu.grownBytes.onDemand)}; refused reserves ${uu.reservesRefused} allocations ${uu.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);