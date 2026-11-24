export const id = 215;
export const ids = [215];
export const modules = {
  36516: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      f: () => JB,
      h: () => oB
    });
    var TB = ZB(1860);
    class JB extends Error {
      constructor(BB) {
        super("The game server didn't answer in time"), this.leg = BB, this.name = "SeatRequestTimedOut"
      }
    }
    const oB = new class {
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
        for (const BB of this.waiting) BB()
      }
      remove() {
        this.count--
      }
      whenSlow(BB) {
        return this.count > 0 || BB.aborted ? Promise.resolve(!BB.aborted) : new Promise((IB => {
          const ZB = () => {
            this.waiting.delete(ZB), IB(!BB.aborted)
          };
          this.waiting.add(ZB), BB.addEventListener("abort", ZB, {
            once: !0
          })
        }))
      }
    };
    class GB {
      constructor(BB) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new TB.b(45e3, BB), this.slow = new TB.b(8e3, (() => {
          this.countedSlow = !0, oB.add()
        }))
      }
      restart() {
        oB.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), oB.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), oB.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, oB.remove())
      }
    }
  },
  36294: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      d: () => JB,
      e: () => oB,
      i: () => GB
    });
    const TB = 1024,
      JB = 1024 * TB;

    function oB(BB) {
      return 2 ** Math.floor(Math.log2(Math.max(1, BB / JB)))
    }

    function GB(BB) {
      return (BB / JB).toFixed(1)
    }
  },
  36506: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB,
      e: () => kB,
      g: () => vB,
      k: () => GB,
      n: () => cB,
      r: () => nB,
      u: () => zB
    });
    var TB = ZB(201);
    const JB = 32 * ZB(36294).d,
      oB = 6144,
      GB = 4608,
      vB = 512,
      kB = function() {
        const BB = zB(TB.f.maxChunkHorizAddDistance + 1, TB.f.maxChunkVertAddDistance + 1);
        let IB = BB;
        for (; hB(IB) < BB;) IB++;
        return IB
      }();

    function cB(BB) {
      return Math.floor(JB * BB / oB)
    }

    function nB(BB) {
      const IB = hB(BB);
      let ZB = TB.f.maxChunkHorizAddDistance,
        JB = TB.f.maxChunkVertAddDistance;
      if (zB(ZB + 1, JB + 1) <= IB) return null;
      for (; zB(ZB + 1, JB + 1) > IB && (ZB > 0 || JB > 0);) ZB > JB ? ZB-- : JB--;
      return {
        horizontal: ZB,
        vertical: JB
      }
    }

    function hB(BB) {
      return BB - Math.floor(BB / 6)
    }

    function zB(BB, IB) {
      const ZB = Math.max(BB, IB);
      let TB = 0;
      for (let JB = -ZB; JB <= ZB; JB++)
        for (let oB = -ZB; oB <= ZB; oB++)
          for (let GB = -ZB; GB <= ZB; GB++) FB(BB, IB, JB, oB, GB) && TB++;
      return TB
    }

    function FB(BB, IB, ZB, TB, JB) {
      const oB = ZB * ZB + JB * JB;
      return BB === IB ? oB + TB * TB <= BB * BB : BB > IB ? Math.abs(TB) <= IB && oB + TB * TB <= BB * BB : oB <= BB * BB && oB + TB * TB <= IB * IB
    }
  },
  36501: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => dB,
      e: () => HB,
      h: () => aB,
      l: () => pB,
      o: () => iB
    });
    var TB = ZB(201),
      JB = ZB(105),
      oB = ZB(140),
      GB = ZB(302),
      vB = ZB(4575),
      kB = ZB(688),
      cB = ZB(36506),
      nB = ZB(36509);
    const hB = 1048576,
      zB = 1024 * hB,
      FB = 400 * hB,
      NB = 147456,
      gB = .5,
      qB = 1.5 * zB,
      yB = 768 * hB;

    function UB(BB) {
      const {
        os: IB,
        deviceMemory: ZB
      } = BB;
      if ("ios" === IB) switch ((0, GB.d)(BB)) {
        case "ipad_m":
          return {
            footprintBytes: WB(cB.c), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: yB, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: qB, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: yB, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof ZB && Number.isFinite(ZB) && ZB > 0 ? {
        footprintBytes: ZB * zB * gB,
        basis: `memory-${ZB}`,
        namesLimit: !0
      } : "android" === IB ? {
        footprintBytes: yB,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: WB(cB.k),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function WB(BB) {
      return FB + BB * NB
    }

    function dB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OB(),
        IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.siteUsed;
      if ("android" !== BB.os || "mobileAndroid" === IB) return !0;
      const {
        footprintBytes: ZB,
        basis: TB
      } = UB(BB);
      return "android" === TB || ZB > 2 * zB
    }

    function CB(BB, IB, ZB) {
      var JB, oB;
      let {
        footprintBytes: GB,
        basis: vB,
        namesLimit: kB
      } = UB(BB);
      if (ZB) {
        const BB = Math.min(GB, WB(cB.c));
        GB = FB + Math.max(0, BB - FB) / 2, vB += "+killed", kB = !0
      }
      null !== IB && WB(IB) < GB && (GB = WB(IB), vB += "+learned", kB = !0);
      const nB = function(BB) {
          const IB = Math.floor((BB - FB) / NB);
          return Math.min(cB.c, Math.max(cB.g, IB))
        }(GB),
        hB = kB && nB < cB.c ? Math.min(nB, cB.e) : nB,
        zB = (0, cB.r)(hB);
      return {
        footprintBytes: GB,
        shedFootprintBytes: kB ? Math.max(GB, WB(hB)) : null,
        chunkCap: hB,
        maxHorizDistance: null !== (JB = null === zB || void 0 === zB ? void 0 : zB.horizontal) && void 0 !== JB ? JB : TB.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (oB = null === zB || void 0 === zB ? void 0 : zB.vertical) && void 0 !== oB ? oB : TB.f.maxChunkVertAddDistance,
        basis: vB
      }
    }
    let QB = null,
      sB = null,
      wB = null;

    function OB() {
      return QB ??= {
        os: (0, JB.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, GB.f)()
      }, QB
    }

    function YB() {
      return CB(OB(), (0, vB.e)(), (0, kB.C)("wasm").length > 0)
    }

    function iB() {
      return wB ??= (0, nB.n)(CB(OB(), null, !1).chunkCap), wB
    }

    function pB() {
      return sB ??= YB(), sB
    }

    function aB() {
      var BB;
      return (null !== (BB = sB) && void 0 !== BB ? BB : YB()).basis
    }

    function HB(BB, IB) {
      return BB.setChunkCap(IB.chunkCap)
    }
  },
  36509: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => OB,
      i: () => dB,
      l: () => hB,
      m: () => CB,
      n: () => yB,
      o: () => sB,
      t: () => wB
    });
    var TB = ZB(36294),
      JB = ZB(36506);
    const oB = 64 * TB.b,
      GB = 40 * TB.d,
      vB = 36 * TB.d,
      kB = 20 * TB.d,
      cB = 2 * TB.d,
      nB = 5 * TB.d;

    function hB(BB) {
      return "footprint" !== BB
    }
    const zB = 2 * TB.d,
      FB = 4 * TB.d,
      NB = 35 * TB.d + zB + FB,
      gB = 6.5 * TB.d,
      qB = 132.5 * TB.b;

    function yB(BB) {
      const IB = gB + (0, JB.n)(BB) + BB * qB;
      return Math.ceil((2 * NB + IB) / oB) * oB
    }
    yB(JB.c), TB.d, TB.d, TB.d;
    const UB = {
        targetBytes: GB,
        leastBytes: kB
      },
      WB = {
        targetBytes: vB,
        leastBytes: kB
      };

    function dB(BB) {
      return {
        targetBytes: BB,
        leastBytes: 0
      }
    }

    function CB(BB) {
      return BB >= JB.c ? UB : WB
    }
    const QB = 2 * oB;

    function sB(BB, IB, ZB) {
      return BB + IB + QB > ZB
    }
    const wB = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? BB => {
        requestIdleCallback(BB)
      } : null
    };
    class OB {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wB;
        this.memory = BB, this.readPeakStoredChunks = IB, this.onError = ZB, this.clock = TB, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(BB, IB, ZB) {
        this.shedding = {
          shed: BB,
          JN: IB,
          readDistanceInUse: ZB
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(BB) {
        this.footprint = BB
      }
      setCeiling(BB) {
        this.ceilingBytes = BB, this.call((() => {
          this.memory.setCeiling(BB)
        }), void 0)
      }
      ceilingMayRefuse(BB, IB) {
        var ZB;
        return sB(this.memory.memoryBytes(), BB, null !== (ZB = this.ceilingBytes) && void 0 !== ZB ? ZB : IB)
      }
      reserveAtJoin(BB) {
        let {
          targetBytes: IB,
          leastBytes: ZB
        } = BB;
        const TB = this.memory.memoryBytes(),
          JB = TB + ZB,
          oB = Math.max(IB + (this.ballastOn() ? nB : 0), JB),
          GB = this.call((() => this.memory.reserveUpFront(oB) ? "target" : oB > JB && this.memory.reserveUpFront(JB) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== GB) {
          const BB = "least" === GB ? `took ${JB} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${oB} bytes was refused at ${TB} bytes; ${BB}`)
        }
        return this.joinReserveTaken = GB, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== GB && this.shedFor("joinReserve"), "none" !== GB
      }
      afterFrame() {
        if (this.stopped) return;
        const BB = this.clock.now(),
          IB = null !== this.stepsHeldUntil && BB >= this.stepsHeldUntil;
        if (IB && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && BB >= this.ballastCheckAt && (this.takeBallast(BB), this.stopped)) return;
        const ZB = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          TB = IB && "now" === ZB ? "none" : ZB,
          {
            requestIdle: JB
          } = this.clock;
        "now" === TB || null !== this.pendingSince && BB - this.pendingSince >= 500 ? this.step() : "idle" === TB && null === this.pendingSince && (null === JB ? this.step() : (this.pendingSince = BB, JB((() => {
          null !== this.pendingSince && this.step()
        })))), BB - this.statsAt >= 1e3 && (this.statsAt = BB, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var BB, IB;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (IB = this.shedding.readDistanceInUse()) && void 0 !== IB ? IB : this.distanceInUse);
          null === (BB = this.footprint) || void 0 === BB || BB.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(BB, IB) {
        this.noteWorker(`Mesh${BB}`, IB)
      }
      meshWorkerGone(BB) {
        this.workerGone(`Mesh${BB}`)
      }
      noteWorldgen(BB) {
        this.noteWorker("Worldgen", BB)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(BB, IB) {
        const ZB = this.workers.get(BB);
        null !== ZB && void 0 !== ZB && ZB.gone && (this.replacedRefusals.reserves += ZB.stats.reservesRefused, this.replacedRefusals.allocations += ZB.stats.allocationsRefused), this.workers.set(BB, {
          stats: IB,
          gone: !1
        })
      }
      workerGone(BB) {
        const IB = this.workers.get(BB);
        IB && (IB.gone = !0)
      }
      details() {
        var BB, IB;
        const ZB = {
          wasmMemoryNow: `${(0,TB.i)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (ZB.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (ZB.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const JB = this.main;
        if (JB) {
          ZB.wasmMemoryMain = YB(JB);
          const BB = Math.max(0, JB.peakLiveBytes - this.ballastPeakBytes),
            IB = 0 === this.peakStoredChunks ? "-" : (BB / this.peakStoredChunks / TB.b).toFixed(1);
          ZB.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${IB} KiB`
        }
        for (const [TB, {
            stats: GB,
            gone: vB
          }] of this.workers) ZB[`wasmMemory${TB}`] = YB(GB) + (vB ? " (gone)" : "");
        const oB = null !== (BB = null === (IB = this.footprint) || void 0 === IB ? void 0 : IB.describe()) && void 0 !== BB ? BB : null;
        return null !== oB && (ZB.wasmMemoryFootprint = oB), ZB
      }
      pageKillSnapshot() {
        var BB, IB, ZB, JB, oB;
        let GB = (null !== (BB = null === (IB = this.main) || void 0 === IB ? void 0 : IB.reservesRefused) && void 0 !== BB ? BB : 0) + this.replacedRefusals.reserves,
          vB = (null !== (ZB = null === (JB = this.main) || void 0 === JB ? void 0 : JB.allocationsRefused) && void 0 !== ZB ? ZB : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: TB
          }
          of this.workers.values()) GB += TB.reservesRefused, vB += TB.allocationsRefused;
        return {
          wasmMainMiB: Number((0, TB.i)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, TB.i)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: GB,
          refusedAllocations: vB,
          sheds: this.sheds,
          ...null === (oB = this.footprint) || void 0 === oB ? void 0 : oB.snapshot()
        }
      }
      workersMemoryBytes() {
        let BB = 0;
        for (const {
            stats: IB,
            gone: ZB
          }
          of this.workers.values()) BB += ZB ? 0 : IB.memoryBytes;
        return BB
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(cB)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(BB) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = BB + 1e3;
        const IB = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, IB)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(BB) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${BB}: frames grow on demand from here`)
      }
      shedFor(BB) {
        const {
          shedding: IB
        } = this;
        if (null === IB) return;
        this.pendingSince = null;
        const ZB = this.call((() => IB.shed(BB)), null);
        this.stopped || (null !== ZB ? (this.sheds++, this.shedCap = ZB, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), IB.JN(BB, this.sheds, this.details())) : hB(BB) && this.stopSteps("nothing is left to shed"))
      }
      call(BB, IB) {
        if (this.stopped) return IB;
        try {
          return BB()
        } catch (ZB) {
          return this.stop(), this.onError(ZB), IB
        }
      }
    }

    function YB(BB) {
      const IB = (BB, IB) => `${BB}/${(0,TB.i)(IB)}`;
      return `memory ${(0,TB.i)(BB.memoryBytes)} live ${(0,TB.i)(BB.liveBytes)} peak ${(0,TB.i)(BB.peakLiveBytes)} unused ${(0,TB.i)(BB.unusedBytes)} ceiling ${(0,TB.i)(BB.ceilingBytes)} MiB; grows upFront ${IB(BB.grows.upFront,BB.grownBytes.upFront)} ahead ${IB(BB.grows.ahead,BB.grownBytes.ahead)} inFrame ${IB(BB.grows.onDemandInFrame,BB.grownBytes.onDemandInFrame)} other ${IB(BB.grows.onDemand,BB.grownBytes.onDemand)}; refused reserves ${BB.reservesRefused} allocations ${BB.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);