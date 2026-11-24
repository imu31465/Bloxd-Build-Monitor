export const id = 215;
export const ids = [215];
export const modules = {
  36568: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      h: () => nB,
      j: () => dB
    });
    var QB = zB(1842);
    class nB extends Error {
      constructor(BB) {
        super("The game server didn't answer in time"), this.leg = BB, this.name = "SeatRequestTimedOut"
      }
    }
    const dB = new class {
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
        return this.count > 0 || BB.aborted ? Promise.resolve(!BB.aborted) : new Promise((jB => {
          const zB = () => {
            this.waiting.delete(zB), jB(!BB.aborted)
          };
          this.waiting.add(zB), BB.addEventListener("abort", zB, {
            once: !0
          })
        }))
      }
    };
    class IB {
      constructor(BB) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new QB.e(45e3, BB), this.slow = new QB.e(8e3, (() => {
          this.countedSlow = !0, dB.add()
        }))
      }
      restart() {
        dB.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), dB.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), dB.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, dB.remove())
      }
    }
  },
  36344: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      f: () => nB,
      i: () => dB,
      m: () => IB
    });
    const QB = 1024,
      nB = 1024 * QB;

    function dB(BB) {
      return 2 ** Math.floor(Math.log2(Math.max(1, BB / nB)))
    }

    function IB(BB) {
      return (BB / nB).toFixed(1)
    }
  },
  36552: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      d: () => uB,
      e: () => NB,
      f: () => IB,
      h: () => UB,
      j: () => aB,
      m: () => rB
    });
    var QB = zB(214);
    const nB = 32 * zB(36344).f,
      dB = 6144,
      IB = 4608,
      NB = 512,
      uB = function() {
        const BB = rB(QB.e.maxChunkHorizAddDistance + 1, QB.e.maxChunkVertAddDistance + 1);
        let jB = BB;
        for (; pB(jB) < BB;) jB++;
        return jB
      }();

    function UB(BB) {
      return Math.floor(nB * BB / dB)
    }

    function aB(BB) {
      const jB = pB(BB);
      let zB = QB.e.maxChunkHorizAddDistance,
        nB = QB.e.maxChunkVertAddDistance;
      if (rB(zB + 1, nB + 1) <= jB) return null;
      for (; rB(zB + 1, nB + 1) > jB && (zB > 0 || nB > 0);) zB > nB ? zB-- : nB--;
      return {
        horizontal: zB,
        vertical: nB
      }
    }

    function pB(BB) {
      return BB - Math.floor(BB / 6)
    }

    function rB(BB, jB) {
      const zB = Math.max(BB, jB);
      let QB = 0;
      for (let nB = -zB; nB <= zB; nB++)
        for (let dB = -zB; dB <= zB; dB++)
          for (let IB = -zB; IB <= zB; IB++) sB(BB, jB, nB, dB, IB) && QB++;
      return QB
    }

    function sB(BB, jB, zB, QB, nB) {
      const dB = zB * zB + nB * nB;
      return BB === jB ? dB + QB * QB <= BB * BB : BB > jB ? Math.abs(QB) <= jB && dB + QB * QB <= BB * BB : dB <= BB * BB && dB + QB * QB <= jB * jB
    }
  },
  36547: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => gB,
      h: () => DB,
      i: () => HB,
      k: () => oB,
      m: () => fB
    });
    var QB = zB(214),
      nB = zB(106),
      dB = zB(145),
      IB = zB(313),
      NB = zB(4508),
      uB = zB(694),
      UB = zB(36552),
      aB = zB(36560);
    const pB = 1048576,
      rB = 1024 * pB,
      sB = 400 * pB,
      JB = 147456,
      mB = .5,
      yB = 1.5 * rB,
      kB = 768 * pB;

    function GB(BB) {
      const {
        os: jB,
        deviceMemory: zB
      } = BB;
      if ("ios" === jB) switch ((0, IB.g)(BB)) {
        case "ipad_m":
          return {
            footprintBytes: LB(UB.b), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: kB, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: yB, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: kB, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof zB && Number.isFinite(zB) && zB > 0 ? {
        footprintBytes: zB * rB * mB,
        basis: `memory-${zB}`,
        namesLimit: !0
      } : "android" === jB ? {
        footprintBytes: kB,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: LB(UB.f),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function LB(BB) {
      return sB + BB * JB
    }

    function gB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iB(),
        jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dB.siteUsed;
      if ("android" !== BB.os || "mobileAndroid" === jB) return !0;
      const {
        footprintBytes: zB,
        basis: QB
      } = GB(BB);
      return "android" === QB || zB > 2 * rB
    }

    function tB(BB, jB, zB) {
      var nB, dB;
      let {
        footprintBytes: IB,
        basis: NB,
        namesLimit: uB
      } = GB(BB);
      if (zB) {
        const BB = Math.min(IB, LB(UB.b));
        IB = sB + Math.max(0, BB - sB) / 2, NB += "+killed", uB = !0
      }
      null !== jB && LB(jB) < IB && (IB = LB(jB), NB += "+learned", uB = !0);
      const aB = function(BB) {
          const jB = Math.floor((BB - sB) / JB);
          return Math.min(UB.b, Math.max(UB.e, jB))
        }(IB),
        pB = uB && aB < UB.b ? Math.min(aB, UB.d) : aB,
        rB = (0, UB.j)(pB);
      return {
        footprintBytes: IB,
        shedFootprintBytes: uB ? Math.max(IB, LB(pB)) : null,
        chunkCap: pB,
        maxHorizDistance: null !== (nB = null === rB || void 0 === rB ? void 0 : rB.horizontal) && void 0 !== nB ? nB : QB.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (dB = null === rB || void 0 === rB ? void 0 : rB.vertical) && void 0 !== dB ? dB : QB.e.maxChunkVertAddDistance,
        basis: NB
      }
    }
    let SB = null,
      MB = null,
      EB = null;

    function iB() {
      return SB ??= {
        os: (0, nB.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, IB.k)()
      }, SB
    }

    function qB() {
      return tB(iB(), (0, NB.g)(), (0, uB.H)("wasm").length > 0)
    }

    function fB() {
      return EB ??= (0, aB.q)(tB(iB(), null, !1).chunkCap), EB
    }

    function oB() {
      return MB ??= qB(), MB
    }

    function HB() {
      var BB;
      return (null !== (BB = MB) && void 0 !== BB ? BB : qB()).basis
    }

    function DB(BB, jB) {
      return BB.setChunkCap(jB.chunkCap)
    }
  },
  36560: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => EB,
      e: () => iB,
      k: () => gB,
      m: () => pB,
      o: () => tB,
      q: () => kB,
      t: () => MB
    });
    var QB = zB(36344),
      nB = zB(36552);
    const dB = 64 * QB.d,
      IB = 40 * QB.f,
      NB = 36 * QB.f,
      uB = 20 * QB.f,
      UB = 2 * QB.f,
      aB = 5 * QB.f;

    function pB(BB) {
      return "footprint" !== BB
    }
    const rB = 2 * QB.f,
      sB = 4 * QB.f,
      JB = 35 * QB.f + rB + sB,
      mB = 6.5 * QB.f,
      yB = 132.5 * QB.d;

    function kB(BB) {
      const jB = mB + (0, nB.h)(BB) + BB * yB;
      return Math.ceil((2 * JB + jB) / dB) * dB
    }
    kB(nB.b), QB.f, QB.f, QB.f;
    const GB = {
        targetBytes: IB,
        leastBytes: uB
      },
      LB = {
        targetBytes: NB,
        leastBytes: uB
      };

    function gB(BB) {
      return {
        targetBytes: BB,
        leastBytes: 0
      }
    }

    function tB(BB) {
      return BB >= nB.b ? GB : LB
    }
    const SB = 2 * dB;

    function MB(BB, jB, zB) {
      return BB + jB + SB > zB
    }
    const EB = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? BB => {
        requestIdleCallback(BB)
      } : null
    };
    class iB {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EB;
        this.memory = BB, this.readPeakStoredChunks = jB, this.onError = zB, this.clock = QB, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(BB, jB, zB) {
        this.shedding = {
          shed: BB,
          JJ: jB,
          readDistanceInUse: zB
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
      ceilingMayRefuse(BB, jB) {
        var zB;
        return MB(this.memory.memoryBytes(), BB, null !== (zB = this.ceilingBytes) && void 0 !== zB ? zB : jB)
      }
      reserveAtJoin(BB) {
        let {
          targetBytes: jB,
          leastBytes: zB
        } = BB;
        const QB = this.memory.memoryBytes(),
          nB = QB + zB,
          dB = Math.max(jB + (this.ballastOn() ? aB : 0), nB),
          IB = this.call((() => this.memory.reserveUpFront(dB) ? "target" : dB > nB && this.memory.reserveUpFront(nB) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== IB) {
          const BB = "least" === IB ? `took ${nB} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${dB} bytes was refused at ${QB} bytes; ${BB}`)
        }
        return this.joinReserveTaken = IB, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== IB && this.shedFor("joinReserve"), "none" !== IB
      }
      afterFrame() {
        if (this.stopped) return;
        const BB = this.clock.now(),
          jB = null !== this.stepsHeldUntil && BB >= this.stepsHeldUntil;
        if (jB && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && BB >= this.ballastCheckAt && (this.takeBallast(BB), this.stopped)) return;
        const zB = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          QB = jB && "now" === zB ? "none" : zB,
          {
            requestIdle: nB
          } = this.clock;
        "now" === QB || null !== this.pendingSince && BB - this.pendingSince >= 500 ? this.step() : "idle" === QB && null === this.pendingSince && (null === nB ? this.step() : (this.pendingSince = BB, nB((() => {
          null !== this.pendingSince && this.step()
        })))), BB - this.statsAt >= 1e3 && (this.statsAt = BB, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var BB, jB;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (jB = this.shedding.readDistanceInUse()) && void 0 !== jB ? jB : this.distanceInUse);
          null === (BB = this.footprint) || void 0 === BB || BB.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(BB, jB) {
        this.noteWorker(`Mesh${BB}`, jB)
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
      noteWorker(BB, jB) {
        const zB = this.workers.get(BB);
        null !== zB && void 0 !== zB && zB.gone && (this.replacedRefusals.reserves += zB.stats.reservesRefused, this.replacedRefusals.allocations += zB.stats.allocationsRefused), this.workers.set(BB, {
          stats: jB,
          gone: !1
        })
      }
      workerGone(BB) {
        const jB = this.workers.get(BB);
        jB && (jB.gone = !0)
      }
      details() {
        var BB, jB;
        const zB = {
          wasmMemoryNow: `${(0,QB.m)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (zB.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (zB.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const nB = this.main;
        if (nB) {
          zB.wasmMemoryMain = qB(nB);
          const BB = Math.max(0, nB.peakLiveBytes - this.ballastPeakBytes),
            jB = 0 === this.peakStoredChunks ? "-" : (BB / this.peakStoredChunks / QB.d).toFixed(1);
          zB.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${jB} KiB`
        }
        for (const [QB, {
            stats: IB,
            gone: NB
          }] of this.workers) zB[`wasmMemory${QB}`] = qB(IB) + (NB ? " (gone)" : "");
        const dB = null !== (BB = null === (jB = this.footprint) || void 0 === jB ? void 0 : jB.describe()) && void 0 !== BB ? BB : null;
        return null !== dB && (zB.wasmMemoryFootprint = dB), zB
      }
      pageKillSnapshot() {
        var BB, jB, zB, nB, dB;
        let IB = (null !== (BB = null === (jB = this.main) || void 0 === jB ? void 0 : jB.reservesRefused) && void 0 !== BB ? BB : 0) + this.replacedRefusals.reserves,
          NB = (null !== (zB = null === (nB = this.main) || void 0 === nB ? void 0 : nB.allocationsRefused) && void 0 !== zB ? zB : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: QB
          }
          of this.workers.values()) IB += QB.reservesRefused, NB += QB.allocationsRefused;
        return {
          wasmMainMiB: Number((0, QB.m)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, QB.m)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: IB,
          refusedAllocations: NB,
          sheds: this.sheds,
          ...null === (dB = this.footprint) || void 0 === dB ? void 0 : dB.snapshot()
        }
      }
      workersMemoryBytes() {
        let BB = 0;
        for (const {
            stats: jB,
            gone: zB
          }
          of this.workers.values()) BB += zB ? 0 : jB.memoryBytes;
        return BB
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(UB)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(BB) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = BB + 1e3;
        const jB = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, jB)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(BB) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${BB}: frames grow on demand from here`)
      }
      shedFor(BB) {
        const {
          shedding: jB
        } = this;
        if (null === jB) return;
        this.pendingSince = null;
        const zB = this.call((() => jB.shed(BB)), null);
        this.stopped || (null !== zB ? (this.sheds++, this.shedCap = zB, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), jB.JJ(BB, this.sheds, this.details())) : pB(BB) && this.stopSteps("nothing is left to shed"))
      }
      call(BB, jB) {
        if (this.stopped) return jB;
        try {
          return BB()
        } catch (zB) {
          return this.stop(), this.onError(zB), jB
        }
      }
    }

    function qB(BB) {
      const jB = (BB, jB) => `${BB}/${(0,QB.m)(jB)}`;
      return `memory ${(0,QB.m)(BB.memoryBytes)} live ${(0,QB.m)(BB.liveBytes)} peak ${(0,QB.m)(BB.peakLiveBytes)} unused ${(0,QB.m)(BB.unusedBytes)} ceiling ${(0,QB.m)(BB.ceilingBytes)} MiB; grows upFront ${jB(BB.grows.upFront,BB.grownBytes.upFront)} ahead ${jB(BB.grows.ahead,BB.grownBytes.ahead)} inFrame ${jB(BB.grows.onDemandInFrame,BB.grownBytes.onDemandInFrame)} other ${jB(BB.grows.onDemand,BB.grownBytes.onDemand)}; refused reserves ${BB.reservesRefused} allocations ${BB.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);