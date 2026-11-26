export const id = 233;
export const ids = [233];
export const modules = {
  37633: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      d: () => YV,
      f: () => UV
    });
    var JV = xV(1900);
    class YV extends Error {
      constructor(VV) {
        super("The game server didn't answer in time"), this.leg = VV, this.name = "SeatRequestTimedOut"
      }
    }
    const UV = new class {
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
        for (const VV of this.waiting) VV()
      }
      remove() {
        this.count--
      }
      whenSlow(VV) {
        return this.count > 0 || VV.aborted ? Promise.resolve(!VV.aborted) : new Promise((eV => {
          const xV = () => {
            this.waiting.delete(xV), eV(!VV.aborted)
          };
          this.waiting.add(xV), VV.addEventListener("abort", xV, {
            once: !0
          })
        }))
      }
    };
    class yV {
      constructor(VV) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new JV.e(45e3, VV), this.slow = new JV.e(8e3, (() => {
          this.countedSlow = !0, UV.add()
        }))
      }
      restart() {
        UV.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), UV.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), UV.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, UV.remove())
      }
    }
  },
  37429: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      h: () => YV,
      i: () => UV,
      l: () => yV
    });
    const JV = 1024,
      YV = 1024 * JV;

    function UV(VV) {
      return 2 ** Math.floor(Math.log2(Math.max(1, VV / YV)))
    }

    function yV(VV) {
      return (VV / YV).toFixed(1)
    }
  },
  37629: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      f: () => QV,
      h: () => pV,
      j: () => yV,
      k: () => nV,
      n: () => wV,
      q: () => vV
    });
    var JV = xV(206);
    const YV = 32 * xV(37429).h,
      UV = 6144,
      yV = 4608,
      pV = 512,
      QV = function() {
        const VV = vV(JV.f.maxChunkHorizAddDistance + 1, JV.f.maxChunkVertAddDistance + 1);
        let eV = VV;
        for (; ZV(eV) < VV;) eV++;
        return eV
      }();

    function nV(VV) {
      return Math.floor(YV * VV / UV)
    }

    function wV(VV) {
      const eV = ZV(VV);
      let xV = JV.f.maxChunkHorizAddDistance,
        YV = JV.f.maxChunkVertAddDistance;
      if (vV(xV + 1, YV + 1) <= eV) return null;
      for (; vV(xV + 1, YV + 1) > eV && (xV > 0 || YV > 0);) xV > YV ? xV-- : YV--;
      return {
        horizontal: xV,
        vertical: YV
      }
    }

    function ZV(VV) {
      return VV - Math.floor(VV / 6)
    }

    function vV(VV, eV) {
      const xV = Math.max(VV, eV);
      let JV = 0;
      for (let YV = -xV; YV <= xV; YV++)
        for (let UV = -xV; UV <= xV; UV++)
          for (let yV = -xV; yV <= xV; yV++) rV(VV, eV, YV, UV, yV) && JV++;
      return JV
    }

    function rV(VV, eV, xV, JV, YV) {
      const UV = xV * xV + YV * YV;
      return VV === eV ? UV + JV * JV <= VV * VV : VV > eV ? Math.abs(JV) <= eV && UV + JV * JV <= VV * VV : UV <= VV * VV && UV + JV * JV <= eV * eV
    }
  },
  37622: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => TV,
      g: () => gV,
      j: () => RV,
      n: () => WV,
      q: () => GV
    });
    var JV = xV(206),
      YV = xV(99),
      UV = xV(138),
      yV = xV(328),
      pV = xV(4839),
      QV = xV(691),
      nV = xV(4846),
      wV = xV(37629),
      ZV = xV(37631);
    const vV = 1048576,
      rV = 1024 * vV,
      kV = 400 * vV,
      bV = 147456,
      EV = .5,
      BV = 2048,
      jV = 1.5 * rV,
      qV = 768 * vV;

    function tV(VV) {
      const {
        os: eV,
        deviceMemory: xV
      } = VV;
      if ("ios" === eV) switch ((0, yV.e)(VV)) {
        case "ipad_m":
          return {
            footprintBytes: FV(wV.b), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: qV, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: jV, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: qV, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof xV && Number.isFinite(xV) && xV > 0 ? {
        footprintBytes: xV * rV * EV,
        basis: `memory-${xV}`,
        namesLimit: !0
      } : "android" === eV ? {
        footprintBytes: qV,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: FV(wV.j),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function FV(VV) {
      return kV + VV * bV
    }

    function TV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MV(),
        eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UV.siteUsed;
      if ("android" !== VV.os || "mobileAndroid" === eV) return !0;
      const {
        footprintBytes: xV,
        basis: JV
      } = tV(VV);
      return "android" === JV || xV > 2 * rV
    }

    function PV(VV, eV, xV) {
      var YV, UV, yV;
      let {
        footprintBytes: pV,
        basis: QV,
        namesLimit: ZV
      } = tV(VV);
      if (xV) {
        const VV = Math.min(pV, FV(wV.b));
        pV = kV + Math.max(0, VV - kV) / 2, QV += "+killed", ZV = !0
      }
      null !== eV && FV(eV) < pV && (pV = FV(eV), QV += "+learned", ZV = !0), QV += (0, nV.m)(null !== (YV = VV.x32) && void 0 !== YV ? YV : null), "fix" === VV.x32 && FV(BV) < pV && (pV = FV(BV), ZV = !0);
      const vV = function(VV) {
          const eV = Math.floor((VV - kV) / bV);
          return Math.min(wV.b, Math.max(wV.h, eV))
        }(pV),
        rV = ZV && vV < wV.b ? Math.min(vV, wV.f) : vV,
        EV = (0, wV.n)(rV);
      return {
        footprintBytes: pV,
        shedFootprintBytes: ZV ? Math.max(pV, FV(rV)) : null,
        chunkCap: rV,
        maxHorizDistance: null !== (UV = null === EV || void 0 === EV ? void 0 : EV.horizontal) && void 0 !== UV ? UV : JV.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (yV = null === EV || void 0 === EV ? void 0 : EV.vertical) && void 0 !== yV ? yV : JV.f.maxChunkVertAddDistance,
        basis: QV
      }
    }
    let AV = null,
      NV = null,
      XV = null;

    function MV() {
      var VV;
      return AV ??= {
        os: (0, YV.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, yV.i)()
      }, {
        ...AV,
        x32: null !== (VV = (0, nV.j)()) && void 0 !== VV ? VV : void 0
      }
    }

    function zV() {
      return PV(MV(), (0, pV.i)(), (0, QV.P)("wasm").length > 0)
    }

    function GV() {
      return XV ??= (0, ZV.p)(PV(MV(), null, !1).chunkCap), XV
    }

    function WV() {
      return NV ??= zV(), NV
    }

    function RV() {
      var VV;
      return (null !== (VV = NV) && void 0 !== VV ? VV : zV()).basis
    }

    function gV(VV, eV) {
      return VV.setChunkCap(eV.chunkCap)
    }
  },
  37631: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => XV,
      h: () => FV,
      l: () => ZV,
      n: () => TV,
      p: () => jV,
      t: () => AV,
      x: () => NV,
      y: () => vV
    });
    var JV = xV(37429),
      YV = xV(37629);
    const UV = 64 * JV.e,
      yV = 40 * JV.h,
      pV = 36 * JV.h,
      QV = 20 * JV.h,
      nV = 2 * JV.h,
      wV = 5 * JV.h;

    function ZV(VV) {
      return "footprint" !== VV && "gcPressure" !== VV
    }

    function vV(VV) {
      return ZV(VV) ? "wasm memory was refused" : "gcPressure" === VV ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const rV = 2 * JV.h,
      kV = 4 * JV.h,
      bV = 35 * JV.h + rV + kV,
      EV = 6.5 * JV.h,
      BV = 132.5 * JV.e;

    function jV(VV) {
      const eV = EV + (0, YV.k)(VV) + VV * BV;
      return Math.ceil((2 * bV + eV) / UV) * UV
    }
    jV(YV.b), JV.h, JV.h, JV.h;
    const qV = {
        targetBytes: yV,
        leastBytes: QV
      },
      tV = {
        targetBytes: pV,
        leastBytes: QV
      };

    function FV(VV) {
      return {
        targetBytes: VV,
        leastBytes: 0
      }
    }

    function TV(VV) {
      return VV >= YV.b ? qV : tV
    }
    const PV = 2 * UV;

    function AV(VV, eV, xV) {
      return VV + eV + PV > xV
    }
    const NV = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? VV => {
        requestIdleCallback(VV)
      } : null
    };
    class XV {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NV;
        this.memory = VV, this.readPeakStoredChunks = eV, this.onError = xV, this.clock = JV, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(VV, eV, xV) {
        this.shedding = {
          shed: VV,
          EZ: eV,
          readDistanceInUse: xV
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(VV) {
        this.footprint = VV
      }
      setGcPressure(VV) {
        this.gcPressure = {
          highEpisode: VV,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(VV) {
        this.ceilingBytes = VV, this.call((() => {
          this.memory.setCeiling(VV)
        }), void 0)
      }
      ceilingMayRefuse(VV, eV) {
        var xV;
        return AV(this.memory.memoryBytes(), VV, null !== (xV = this.ceilingBytes) && void 0 !== xV ? xV : eV)
      }
      reserveAtJoin(VV) {
        let {
          targetBytes: eV,
          leastBytes: xV
        } = VV;
        const JV = this.memory.memoryBytes(),
          YV = JV + xV,
          UV = Math.max(eV + (this.ballastOn() ? wV : 0), YV),
          yV = this.call((() => this.memory.reserveUpFront(UV) ? "target" : UV > YV && this.memory.reserveUpFront(YV) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== yV) {
          const VV = "least" === yV ? `took ${YV} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${UV} bytes was refused at ${JV} bytes; ${VV}`)
        }
        return this.joinReserveTaken = yV, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== yV && this.shedFor("joinReserve"), "none" !== yV
      }
      afterFrame() {
        if (this.stopped) return;
        const VV = this.clock.now(),
          eV = null !== this.stepsHeldUntil && VV >= this.stepsHeldUntil;
        if (eV && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && VV >= this.ballastCheckAt && (this.takeBallast(VV), this.stopped)) return;
        const xV = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          JV = eV && "now" === xV ? "none" : xV,
          {
            requestIdle: YV
          } = this.clock;
        "now" === JV || null !== this.pendingSince && VV - this.pendingSince >= 500 ? this.step() : "idle" === JV && null === this.pendingSince && (null === YV ? this.step() : (this.pendingSince = VV, YV((() => {
          null !== this.pendingSince && this.step()
        })))), VV - this.statsAt >= 1e3 && (this.statsAt = VV, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(VV))
      }
      refreshStats() {
        this.call((() => {
          var VV, eV;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (eV = this.shedding.readDistanceInUse()) && void 0 !== eV ? eV : this.distanceInUse);
          null === (VV = this.footprint) || void 0 === VV || VV.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(VV, eV) {
        this.noteWorker(`Mesh${VV}`, eV)
      }
      meshWorkerGone(VV) {
        this.workerGone(`Mesh${VV}`)
      }
      noteWorldgen(VV) {
        this.noteWorker("Worldgen", VV)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(VV, eV) {
        const xV = this.workers.get(VV);
        null !== xV && void 0 !== xV && xV.gone && (this.replacedRefusals.reserves += xV.stats.reservesRefused, this.replacedRefusals.allocations += xV.stats.allocationsRefused), this.workers.set(VV, {
          stats: eV,
          gone: !1
        })
      }
      workerGone(VV) {
        const eV = this.workers.get(VV);
        eV && (eV.gone = !0)
      }
      details() {
        var VV, eV;
        const xV = this.memory.memoryBytes(),
          YV = {
            wasmMemoryNow: `${(0,JV.l)(xV)} MiB`,
            wasmMemoryMiB: String(Math.floor(xV / JV.h))
          };
        null !== this.joinReserveTaken && (YV.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (YV.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const UV = this.main;
        if (UV) {
          YV.wasmMemoryMain = MV(UV);
          const VV = Math.max(0, UV.peakLiveBytes - this.ballastPeakBytes),
            eV = 0 === this.peakStoredChunks ? "-" : (VV / this.peakStoredChunks / JV.e).toFixed(1);
          YV.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${eV} KiB`
        }
        for (const [JV, {
            stats: pV,
            gone: QV
          }] of this.workers) YV[`wasmMemory${JV}`] = MV(pV) + (QV ? " (gone)" : "");
        const yV = null !== (VV = null === (eV = this.footprint) || void 0 === eV ? void 0 : eV.describe()) && void 0 !== VV ? VV : null;
        return null !== yV && (YV.wasmMemoryFootprint = yV), YV
      }
      pageKillSnapshot() {
        var VV, eV, xV, YV, UV;
        let yV = (null !== (VV = null === (eV = this.main) || void 0 === eV ? void 0 : eV.reservesRefused) && void 0 !== VV ? VV : 0) + this.replacedRefusals.reserves,
          pV = (null !== (xV = null === (YV = this.main) || void 0 === YV ? void 0 : YV.allocationsRefused) && void 0 !== xV ? xV : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: JV
          }
          of this.workers.values()) yV += JV.reservesRefused, pV += JV.allocationsRefused;
        return {
          wasmMainMiB: Number((0, JV.l)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, JV.l)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: yV,
          refusedAllocations: pV,
          sheds: this.sheds,
          ...null === (UV = this.footprint) || void 0 === UV ? void 0 : UV.snapshot()
        }
      }
      workersMemoryBytes() {
        let VV = 0;
        for (const {
            stats: eV,
            gone: xV
          }
          of this.workers.values()) VV += xV ? 0 : eV.memoryBytes;
        return VV
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(VV) {
        const eV = this.gcPressure;
        if (null === eV) return;
        if (null !== eV.nextAt || "undefined" !== typeof document && document.hidden || (eV.nextAt = VV + 6e4), null === eV.nextAt || VV < eV.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const xV = eV.highEpisode();
        null !== xV && xV !== eV.shedEpisode && (eV.shedEpisode = xV, eV.nextAt = VV + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(nV)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(VV) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = VV + 1e3;
        const eV = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, eV)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(VV) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${VV}: frames grow on demand from here`)
      }
      shedFor(VV) {
        const {
          shedding: eV
        } = this;
        if (null === eV) return;
        this.pendingSince = null;
        const xV = this.call((() => eV.shed(VV)), null);
        if (this.stopped) return;
        if (null === xV) return void(ZV(VV) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = xV, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const JV = "gcPressure" === VV ? ++this.gcSheds : this.sheds - this.gcSheds;
        eV.EZ(VV, JV, this.details())
      }
      call(VV, eV) {
        if (this.stopped) return eV;
        try {
          return VV()
        } catch (xV) {
          return this.stop(), this.onError(xV), eV
        }
      }
    }

    function MV(VV) {
      const eV = (VV, eV) => `${VV}/${(0,JV.l)(eV)}`;
      return `memory ${(0,JV.l)(VV.memoryBytes)} live ${(0,JV.l)(VV.liveBytes)} peak ${(0,JV.l)(VV.peakLiveBytes)} unused ${(0,JV.l)(VV.unusedBytes)} ceiling ${(0,JV.l)(VV.ceilingBytes)} MiB; grows upFront ${eV(VV.grows.upFront,VV.grownBytes.upFront)} ahead ${eV(VV.grows.ahead,VV.grownBytes.ahead)} inFrame ${eV(VV.grows.onDemandInFrame,VV.grownBytes.onDemandInFrame)} other ${eV(VV.grows.onDemand,VV.grownBytes.onDemand)}; refused reserves ${VV.reservesRefused} allocations ${VV.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);