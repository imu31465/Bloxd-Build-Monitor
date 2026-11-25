export const id = 215;
export const ids = [215];
export const modules = {
  36826: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      g: () => SG,
      h: () => LG
    });
    var wG = ZG(1775);
    class SG extends Error {
      constructor(GG) {
        super("The game server didn't answer in time"), this.leg = GG, this.name = "SeatRequestTimedOut"
      }
    }
    const LG = new class {
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
        for (const GG of this.waiting) GG()
      }
      remove() {
        this.count--
      }
      whenSlow(GG) {
        return this.count > 0 || GG.aborted ? Promise.resolve(!GG.aborted) : new Promise((bG => {
          const ZG = () => {
            this.waiting.delete(ZG), bG(!GG.aborted)
          };
          this.waiting.add(ZG), GG.addEventListener("abort", ZG, {
            once: !0
          })
        }))
      }
    };
    class yG {
      constructor(GG) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new wG.d(45e3, GG), this.slow = new wG.d(8e3, (() => {
          this.countedSlow = !0, LG.add()
        }))
      }
      restart() {
        LG.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), LG.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), LG.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, LG.remove())
      }
    }
  },
  36599: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      h: () => SG,
      i: () => LG,
      l: () => yG
    });
    const wG = 1024,
      SG = 1024 * wG;

    function LG(GG) {
      return 2 ** Math.floor(Math.log2(Math.max(1, GG / SG)))
    }

    function yG(GG) {
      return (GG / SG).toFixed(1)
    }
  },
  36816: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      d: () => UG,
      g: () => kG,
      h: () => yG,
      k: () => YG,
      n: () => VG,
      q: () => fG
    });
    var wG = ZG(188);
    const SG = 32 * ZG(36599).h,
      LG = 6144,
      yG = 4608,
      kG = 512,
      UG = function() {
        const GG = fG(wG.d.maxChunkHorizAddDistance + 1, wG.d.maxChunkVertAddDistance + 1);
        let bG = GG;
        for (; pG(bG) < GG;) bG++;
        return bG
      }();

    function YG(GG) {
      return Math.floor(SG * GG / LG)
    }

    function VG(GG) {
      const bG = pG(GG);
      let ZG = wG.d.maxChunkHorizAddDistance,
        SG = wG.d.maxChunkVertAddDistance;
      if (fG(ZG + 1, SG + 1) <= bG) return null;
      for (; fG(ZG + 1, SG + 1) > bG && (ZG > 0 || SG > 0);) ZG > SG ? ZG-- : SG--;
      return {
        horizontal: ZG,
        vertical: SG
      }
    }

    function pG(GG) {
      return GG - Math.floor(GG / 6)
    }

    function fG(GG, bG) {
      const ZG = Math.max(GG, bG);
      let wG = 0;
      for (let SG = -ZG; SG <= ZG; SG++)
        for (let LG = -ZG; LG <= ZG; LG++)
          for (let yG = -ZG; yG <= ZG; yG++) QG(GG, bG, SG, LG, yG) && wG++;
      return wG
    }

    function QG(GG, bG, ZG, wG, SG) {
      const LG = ZG * ZG + SG * SG;
      return GG === bG ? LG + wG * wG <= GG * GG : GG > bG ? Math.abs(wG) <= bG && LG + wG * wG <= GG * GG : LG <= GG * GG && LG + wG * wG <= bG * bG
    }
  },
  36810: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => EG,
      g: () => vG,
      j: () => FG,
      n: () => IG,
      o: () => mG
    });
    var wG = ZG(188),
      SG = ZG(80),
      LG = ZG(116),
      yG = ZG(293),
      kG = ZG(4415),
      UG = ZG(636),
      YG = ZG(36816),
      VG = ZG(36820);
    const pG = 1048576,
      fG = 1024 * pG,
      QG = 400 * pG,
      KG = 147456,
      hG = .5,
      dG = 1.5 * fG,
      JG = 768 * pG;

    function rG(GG) {
      const {
        os: bG,
        deviceMemory: ZG
      } = GG;
      if ("ios" === bG) switch ((0, yG.g)(GG)) {
        case "ipad_m":
          return {
            footprintBytes: zG(YG.b), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: JG, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: dG, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: JG, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof ZG && Number.isFinite(ZG) && ZG > 0 ? {
        footprintBytes: ZG * fG * hG,
        basis: `memory-${ZG}`,
        namesLimit: !0
      } : "android" === bG ? {
        footprintBytes: JG,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: zG(YG.h),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function zG(GG) {
      return QG + GG * KG
    }

    function EG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CG(),
        bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LG.siteUsed;
      if ("android" !== GG.os || "mobileAndroid" === bG) return !0;
      const {
        footprintBytes: ZG,
        basis: wG
      } = rG(GG);
      return "android" === wG || ZG > 2 * fG
    }

    function oG(GG, bG, ZG) {
      var SG, LG;
      let {
        footprintBytes: yG,
        basis: kG,
        namesLimit: UG
      } = rG(GG);
      if (ZG) {
        const GG = Math.min(yG, zG(YG.b));
        yG = QG + Math.max(0, GG - QG) / 2, kG += "+killed", UG = !0
      }
      null !== bG && zG(bG) < yG && (yG = zG(bG), kG += "+learned", UG = !0);
      const VG = function(GG) {
          const bG = Math.floor((GG - QG) / KG);
          return Math.min(YG.b, Math.max(YG.g, bG))
        }(yG),
        pG = UG && VG < YG.b ? Math.min(VG, YG.d) : VG,
        fG = (0, YG.n)(pG);
      return {
        footprintBytes: yG,
        shedFootprintBytes: UG ? Math.max(yG, zG(pG)) : null,
        chunkCap: pG,
        maxHorizDistance: null !== (SG = null === fG || void 0 === fG ? void 0 : fG.horizontal) && void 0 !== SG ? SG : wG.d.maxChunkHorizAddDistance,
        maxVertDistance: null !== (LG = null === fG || void 0 === fG ? void 0 : fG.vertical) && void 0 !== LG ? LG : wG.d.maxChunkVertAddDistance,
        basis: kG
      }
    }
    let XG = null,
      uG = null,
      iG = null;

    function CG() {
      return XG ??= {
        os: (0, SG.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, yG.j)()
      }, XG
    }

    function WG() {
      return oG(CG(), (0, kG.f)(), (0, UG.H)("wasm").length > 0)
    }

    function mG() {
      return iG ??= (0, VG.o)(oG(CG(), null, !1).chunkCap), iG
    }

    function IG() {
      return uG ??= WG(), uG
    }

    function FG() {
      var GG;
      return (null !== (GG = uG) && void 0 !== GG ? GG : WG()).basis
    }

    function vG(GG, bG) {
      return GG.setChunkCap(bG.chunkCap)
    }
  },
  36820: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => CG,
      j: () => EG,
      k: () => pG,
      m: () => oG,
      o: () => JG,
      r: () => uG,
      t: () => iG
    });
    var wG = ZG(36599),
      SG = ZG(36816);
    const LG = 64 * wG.e,
      yG = 40 * wG.h,
      kG = 36 * wG.h,
      UG = 20 * wG.h,
      YG = 2 * wG.h,
      VG = 5 * wG.h;

    function pG(GG) {
      return "footprint" !== GG
    }
    const fG = 2 * wG.h,
      QG = 4 * wG.h,
      KG = 35 * wG.h + fG + QG,
      hG = 6.5 * wG.h,
      dG = 132.5 * wG.e;

    function JG(GG) {
      const bG = hG + (0, SG.k)(GG) + GG * dG;
      return Math.ceil((2 * KG + bG) / LG) * LG
    }
    JG(SG.b), wG.h, wG.h, wG.h;
    const rG = {
        targetBytes: yG,
        leastBytes: UG
      },
      zG = {
        targetBytes: kG,
        leastBytes: UG
      };

    function EG(GG) {
      return {
        targetBytes: GG,
        leastBytes: 0
      }
    }

    function oG(GG) {
      return GG >= SG.b ? rG : zG
    }
    const XG = 2 * LG;

    function uG(GG, bG, ZG) {
      return GG + bG + XG > ZG
    }
    const iG = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? GG => {
        requestIdleCallback(GG)
      } : null
    };
    class CG {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iG;
        this.memory = GG, this.readPeakStoredChunks = bG, this.onError = ZG, this.clock = wG, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(GG, bG, ZG) {
        this.shedding = {
          shed: GG,
          NQ: bG,
          readDistanceInUse: ZG
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(GG) {
        this.footprint = GG
      }
      setCeiling(GG) {
        this.ceilingBytes = GG, this.call((() => {
          this.memory.setCeiling(GG)
        }), void 0)
      }
      ceilingMayRefuse(GG, bG) {
        var ZG;
        return uG(this.memory.memoryBytes(), GG, null !== (ZG = this.ceilingBytes) && void 0 !== ZG ? ZG : bG)
      }
      reserveAtJoin(GG) {
        let {
          targetBytes: bG,
          leastBytes: ZG
        } = GG;
        const wG = this.memory.memoryBytes(),
          SG = wG + ZG,
          LG = Math.max(bG + (this.ballastOn() ? VG : 0), SG),
          yG = this.call((() => this.memory.reserveUpFront(LG) ? "target" : LG > SG && this.memory.reserveUpFront(SG) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== yG) {
          const GG = "least" === yG ? `took ${SG} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${LG} bytes was refused at ${wG} bytes; ${GG}`)
        }
        return this.joinReserveTaken = yG, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== yG && this.shedFor("joinReserve"), "none" !== yG
      }
      afterFrame() {
        if (this.stopped) return;
        const GG = this.clock.now(),
          bG = null !== this.stepsHeldUntil && GG >= this.stepsHeldUntil;
        if (bG && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && GG >= this.ballastCheckAt && (this.takeBallast(GG), this.stopped)) return;
        const ZG = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          wG = bG && "now" === ZG ? "none" : ZG,
          {
            requestIdle: SG
          } = this.clock;
        "now" === wG || null !== this.pendingSince && GG - this.pendingSince >= 500 ? this.step() : "idle" === wG && null === this.pendingSince && (null === SG ? this.step() : (this.pendingSince = GG, SG((() => {
          null !== this.pendingSince && this.step()
        })))), GG - this.statsAt >= 1e3 && (this.statsAt = GG, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var GG, bG;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (bG = this.shedding.readDistanceInUse()) && void 0 !== bG ? bG : this.distanceInUse);
          null === (GG = this.footprint) || void 0 === GG || GG.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(GG, bG) {
        this.noteWorker(`Mesh${GG}`, bG)
      }
      meshWorkerGone(GG) {
        this.workerGone(`Mesh${GG}`)
      }
      noteWorldgen(GG) {
        this.noteWorker("Worldgen", GG)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(GG, bG) {
        const ZG = this.workers.get(GG);
        null !== ZG && void 0 !== ZG && ZG.gone && (this.replacedRefusals.reserves += ZG.stats.reservesRefused, this.replacedRefusals.allocations += ZG.stats.allocationsRefused), this.workers.set(GG, {
          stats: bG,
          gone: !1
        })
      }
      workerGone(GG) {
        const bG = this.workers.get(GG);
        bG && (bG.gone = !0)
      }
      details() {
        var GG, bG;
        const ZG = {
          wasmMemoryNow: `${(0,wG.l)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (ZG.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (ZG.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const SG = this.main;
        if (SG) {
          ZG.wasmMemoryMain = WG(SG);
          const GG = Math.max(0, SG.peakLiveBytes - this.ballastPeakBytes),
            bG = 0 === this.peakStoredChunks ? "-" : (GG / this.peakStoredChunks / wG.e).toFixed(1);
          ZG.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${bG} KiB`
        }
        for (const [wG, {
            stats: yG,
            gone: kG
          }] of this.workers) ZG[`wasmMemory${wG}`] = WG(yG) + (kG ? " (gone)" : "");
        const LG = null !== (GG = null === (bG = this.footprint) || void 0 === bG ? void 0 : bG.describe()) && void 0 !== GG ? GG : null;
        return null !== LG && (ZG.wasmMemoryFootprint = LG), ZG
      }
      pageKillSnapshot() {
        var GG, bG, ZG, SG, LG;
        let yG = (null !== (GG = null === (bG = this.main) || void 0 === bG ? void 0 : bG.reservesRefused) && void 0 !== GG ? GG : 0) + this.replacedRefusals.reserves,
          kG = (null !== (ZG = null === (SG = this.main) || void 0 === SG ? void 0 : SG.allocationsRefused) && void 0 !== ZG ? ZG : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: wG
          }
          of this.workers.values()) yG += wG.reservesRefused, kG += wG.allocationsRefused;
        return {
          wasmMainMiB: Number((0, wG.l)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, wG.l)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: yG,
          refusedAllocations: kG,
          sheds: this.sheds,
          ...null === (LG = this.footprint) || void 0 === LG ? void 0 : LG.snapshot()
        }
      }
      workersMemoryBytes() {
        let GG = 0;
        for (const {
            stats: bG,
            gone: ZG
          }
          of this.workers.values()) GG += ZG ? 0 : bG.memoryBytes;
        return GG
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(YG)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(GG) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = GG + 1e3;
        const bG = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, bG)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(GG) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${GG}: frames grow on demand from here`)
      }
      shedFor(GG) {
        const {
          shedding: bG
        } = this;
        if (null === bG) return;
        this.pendingSince = null;
        const ZG = this.call((() => bG.shed(GG)), null);
        this.stopped || (null !== ZG ? (this.sheds++, this.shedCap = ZG, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), bG.NQ(GG, this.sheds, this.details())) : pG(GG) && this.stopSteps("nothing is left to shed"))
      }
      call(GG, bG) {
        if (this.stopped) return bG;
        try {
          return GG()
        } catch (ZG) {
          return this.stop(), this.onError(ZG), bG
        }
      }
    }

    function WG(GG) {
      const bG = (GG, bG) => `${GG}/${(0,wG.l)(bG)}`;
      return `memory ${(0,wG.l)(GG.memoryBytes)} live ${(0,wG.l)(GG.liveBytes)} peak ${(0,wG.l)(GG.peakLiveBytes)} unused ${(0,wG.l)(GG.unusedBytes)} ceiling ${(0,wG.l)(GG.ceilingBytes)} MiB; grows upFront ${bG(GG.grows.upFront,GG.grownBytes.upFront)} ahead ${bG(GG.grows.ahead,GG.grownBytes.ahead)} inFrame ${bG(GG.grows.onDemandInFrame,GG.grownBytes.onDemandInFrame)} other ${bG(GG.grows.onDemand,GG.grownBytes.onDemand)}; refused reserves ${GG.reservesRefused} allocations ${GG.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);