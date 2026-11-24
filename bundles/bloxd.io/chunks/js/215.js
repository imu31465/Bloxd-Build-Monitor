export const id = 215;
export const ids = [215];
export const modules = {
  36565: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT,
      d: () => zT,
      g: () => MT
    });
    var WT = mT(1926);
    class zT extends Error {
      constructor(TT) {
        super("The game server didn't answer in time"), this.leg = TT, this.name = "SeatRequestTimedOut"
      }
    }
    const MT = new class {
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
        for (const TT of this.waiting) TT()
      }
      remove() {
        this.count--
      }
      whenSlow(TT) {
        return this.count > 0 || TT.aborted ? Promise.resolve(!TT.aborted) : new Promise((UT => {
          const mT = () => {
            this.waiting.delete(mT), UT(!TT.aborted)
          };
          this.waiting.add(mT), TT.addEventListener("abort", mT, {
            once: !0
          })
        }))
      }
    };
    class gT {
      constructor(TT) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new WT.c(45e3, TT), this.slow = new WT.c(8e3, (() => {
          this.countedSlow = !0, MT.add()
        }))
      }
      restart() {
        MT.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), MT.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), MT.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, MT.remove())
      }
    }
  },
  36356: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      d: () => zT,
      e: () => MT,
      f: () => gT
    });
    const WT = 1024,
      zT = 1024 * WT;

    function MT(TT) {
      return 2 ** Math.floor(Math.log2(Math.max(1, TT / zT)))
    }

    function gT(TT) {
      return (TT / zT).toFixed(1)
    }
  },
  36550: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      g: () => HT,
      h: () => nT,
      j: () => gT,
      n: () => kT,
      p: () => jT,
      t: () => LT
    });
    var WT = mT(208);
    const zT = 32 * mT(36356).d,
      MT = 6144,
      gT = 4608,
      nT = 512,
      HT = function() {
        const TT = LT(WT.f.maxChunkHorizAddDistance + 1, WT.f.maxChunkVertAddDistance + 1);
        let UT = TT;
        for (; lT(UT) < TT;) UT++;
        return UT
      }();

    function kT(TT) {
      return Math.floor(zT * TT / MT)
    }

    function jT(TT) {
      const UT = lT(TT);
      let mT = WT.f.maxChunkHorizAddDistance,
        zT = WT.f.maxChunkVertAddDistance;
      if (LT(mT + 1, zT + 1) <= UT) return null;
      for (; LT(mT + 1, zT + 1) > UT && (mT > 0 || zT > 0);) mT > zT ? mT-- : zT--;
      return {
        horizontal: mT,
        vertical: zT
      }
    }

    function lT(TT) {
      return TT - Math.floor(TT / 6)
    }

    function LT(TT, UT) {
      const mT = Math.max(TT, UT);
      let WT = 0;
      for (let zT = -mT; zT <= mT; zT++)
        for (let MT = -mT; MT <= mT; MT++)
          for (let gT = -mT; gT <= mT; gT++) pT(TT, UT, zT, MT, gT) && WT++;
      return WT
    }

    function pT(TT, UT, mT, WT, zT) {
      const MT = mT * mT + zT * zT;
      return TT === UT ? MT + WT * WT <= TT * TT : TT > UT ? Math.abs(WT) <= UT && MT + WT * WT <= TT * TT : MT <= TT * TT && MT + WT * WT <= UT * UT
    }
  },
  36546: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => iT,
      e: () => aT,
      g: () => tT,
      k: () => wT,
      n: () => dT
    });
    var WT = mT(208),
      zT = mT(102),
      MT = mT(133),
      gT = mT(305),
      nT = mT(4506),
      HT = mT(684),
      kT = mT(36550),
      jT = mT(36557);
    const lT = 1048576,
      LT = 1024 * lT,
      pT = 400 * lT,
      BT = 147456,
      ZT = .5,
      cT = 1.5 * LT,
      vT = 768 * lT;

    function fT(TT) {
      const {
        os: UT,
        deviceMemory: mT
      } = TT;
      if ("ios" === UT) switch ((0, gT.f)(TT)) {
        case "ipad_m":
          return {
            footprintBytes: qT(kT.c), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: vT, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: cT, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: vT, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof mT && Number.isFinite(mT) && mT > 0 ? {
        footprintBytes: mT * LT * ZT,
        basis: `memory-${mT}`,
        namesLimit: !0
      } : "android" === UT ? {
        footprintBytes: vT,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: qT(kT.j),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function qT(TT) {
      return pT + TT * BT
    }

    function iT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JT(),
        UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT.siteUsed;
      if ("android" !== TT.os || "mobileAndroid" === UT) return !0;
      const {
        footprintBytes: mT,
        basis: WT
      } = fT(TT);
      return "android" === WT || mT > 2 * LT
    }

    function bT(TT, UT, mT) {
      var zT, MT;
      let {
        footprintBytes: gT,
        basis: nT,
        namesLimit: HT
      } = fT(TT);
      if (mT) {
        const TT = Math.min(gT, qT(kT.c));
        gT = pT + Math.max(0, TT - pT) / 2, nT += "+killed", HT = !0
      }
      null !== UT && qT(UT) < gT && (gT = qT(UT), nT += "+learned", HT = !0);
      const jT = function(TT) {
          const UT = Math.floor((TT - pT) / BT);
          return Math.min(kT.c, Math.max(kT.h, UT))
        }(gT),
        lT = HT && jT < kT.c ? Math.min(jT, kT.g) : jT,
        LT = (0, kT.p)(lT);
      return {
        footprintBytes: gT,
        shedFootprintBytes: HT ? Math.max(gT, qT(lT)) : null,
        chunkCap: lT,
        maxHorizDistance: null !== (zT = null === LT || void 0 === LT ? void 0 : LT.horizontal) && void 0 !== zT ? zT : WT.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (MT = null === LT || void 0 === LT ? void 0 : LT.vertical) && void 0 !== MT ? MT : WT.f.maxChunkVertAddDistance,
        basis: nT
      }
    }
    let OT = null,
      eT = null,
      YT = null;

    function JT() {
      return OT ??= {
        os: (0, zT.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, gT.i)()
      }, OT
    }

    function xT() {
      return bT(JT(), (0, nT.g)(), (0, HT.B)("wasm").length > 0)
    }

    function dT() {
      return YT ??= (0, jT.t)(bT(JT(), null, !1).chunkCap), YT
    }

    function wT() {
      return eT ??= xT(), eT
    }

    function tT() {
      var TT;
      return (null !== (TT = eT) && void 0 !== TT ? TT : xT()).basis
    }

    function aT(TT, UT) {
      return TT.setChunkCap(UT.chunkCap)
    }
  },
  36557: (TT, UT, mT) => {
    mT.d(UT, {
      F: () => YT,
      e: () => JT,
      k: () => iT,
      o: () => lT,
      p: () => bT,
      t: () => vT,
      x: () => eT
    });
    var WT = mT(36356),
      zT = mT(36550);
    const MT = 64 * WT.b,
      gT = 40 * WT.d,
      nT = 36 * WT.d,
      HT = 20 * WT.d,
      kT = 2 * WT.d,
      jT = 5 * WT.d;

    function lT(TT) {
      return "footprint" !== TT
    }
    const LT = 2 * WT.d,
      pT = 4 * WT.d,
      BT = 35 * WT.d + LT + pT,
      ZT = 6.5 * WT.d,
      cT = 132.5 * WT.b;

    function vT(TT) {
      const UT = ZT + (0, zT.n)(TT) + TT * cT;
      return Math.ceil((2 * BT + UT) / MT) * MT
    }
    vT(zT.c), WT.d, WT.d, WT.d;
    const fT = {
        targetBytes: gT,
        leastBytes: HT
      },
      qT = {
        targetBytes: nT,
        leastBytes: HT
      };

    function iT(TT) {
      return {
        targetBytes: TT,
        leastBytes: 0
      }
    }

    function bT(TT) {
      return TT >= zT.c ? fT : qT
    }
    const OT = 2 * MT;

    function eT(TT, UT, mT) {
      return TT + UT + OT > mT
    }
    const YT = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? TT => {
        requestIdleCallback(TT)
      } : null
    };
    class JT {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YT;
        this.memory = TT, this.readPeakStoredChunks = UT, this.onError = mT, this.clock = WT, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(TT, UT, mT) {
        this.shedding = {
          shed: TT,
          Gp: UT,
          readDistanceInUse: mT
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(TT) {
        this.footprint = TT
      }
      setCeiling(TT) {
        this.ceilingBytes = TT, this.call((() => {
          this.memory.setCeiling(TT)
        }), void 0)
      }
      ceilingMayRefuse(TT, UT) {
        var mT;
        return eT(this.memory.memoryBytes(), TT, null !== (mT = this.ceilingBytes) && void 0 !== mT ? mT : UT)
      }
      reserveAtJoin(TT) {
        let {
          targetBytes: UT,
          leastBytes: mT
        } = TT;
        const WT = this.memory.memoryBytes(),
          zT = WT + mT,
          MT = Math.max(UT + (this.ballastOn() ? jT : 0), zT),
          gT = this.call((() => this.memory.reserveUpFront(MT) ? "target" : MT > zT && this.memory.reserveUpFront(zT) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== gT) {
          const TT = "least" === gT ? `took ${zT} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${MT} bytes was refused at ${WT} bytes; ${TT}`)
        }
        return this.joinReserveTaken = gT, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== gT && this.shedFor("joinReserve"), "none" !== gT
      }
      afterFrame() {
        if (this.stopped) return;
        const TT = this.clock.now(),
          UT = null !== this.stepsHeldUntil && TT >= this.stepsHeldUntil;
        if (UT && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && TT >= this.ballastCheckAt && (this.takeBallast(TT), this.stopped)) return;
        const mT = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          WT = UT && "now" === mT ? "none" : mT,
          {
            requestIdle: zT
          } = this.clock;
        "now" === WT || null !== this.pendingSince && TT - this.pendingSince >= 500 ? this.step() : "idle" === WT && null === this.pendingSince && (null === zT ? this.step() : (this.pendingSince = TT, zT((() => {
          null !== this.pendingSince && this.step()
        })))), TT - this.statsAt >= 1e3 && (this.statsAt = TT, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var TT, UT;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (UT = this.shedding.readDistanceInUse()) && void 0 !== UT ? UT : this.distanceInUse);
          null === (TT = this.footprint) || void 0 === TT || TT.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(TT, UT) {
        this.noteWorker(`Mesh${TT}`, UT)
      }
      meshWorkerGone(TT) {
        this.workerGone(`Mesh${TT}`)
      }
      noteWorldgen(TT) {
        this.noteWorker("Worldgen", TT)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(TT, UT) {
        const mT = this.workers.get(TT);
        null !== mT && void 0 !== mT && mT.gone && (this.replacedRefusals.reserves += mT.stats.reservesRefused, this.replacedRefusals.allocations += mT.stats.allocationsRefused), this.workers.set(TT, {
          stats: UT,
          gone: !1
        })
      }
      workerGone(TT) {
        const UT = this.workers.get(TT);
        UT && (UT.gone = !0)
      }
      details() {
        var TT, UT;
        const mT = {
          wasmMemoryNow: `${(0,WT.f)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (mT.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (mT.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const zT = this.main;
        if (zT) {
          mT.wasmMemoryMain = xT(zT);
          const TT = Math.max(0, zT.peakLiveBytes - this.ballastPeakBytes),
            UT = 0 === this.peakStoredChunks ? "-" : (TT / this.peakStoredChunks / WT.b).toFixed(1);
          mT.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${UT} KiB`
        }
        for (const [WT, {
            stats: gT,
            gone: nT
          }] of this.workers) mT[`wasmMemory${WT}`] = xT(gT) + (nT ? " (gone)" : "");
        const MT = null !== (TT = null === (UT = this.footprint) || void 0 === UT ? void 0 : UT.describe()) && void 0 !== TT ? TT : null;
        return null !== MT && (mT.wasmMemoryFootprint = MT), mT
      }
      pageKillSnapshot() {
        var TT, UT, mT, zT, MT;
        let gT = (null !== (TT = null === (UT = this.main) || void 0 === UT ? void 0 : UT.reservesRefused) && void 0 !== TT ? TT : 0) + this.replacedRefusals.reserves,
          nT = (null !== (mT = null === (zT = this.main) || void 0 === zT ? void 0 : zT.allocationsRefused) && void 0 !== mT ? mT : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: WT
          }
          of this.workers.values()) gT += WT.reservesRefused, nT += WT.allocationsRefused;
        return {
          wasmMainMiB: Number((0, WT.f)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, WT.f)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: gT,
          refusedAllocations: nT,
          sheds: this.sheds,
          ...null === (MT = this.footprint) || void 0 === MT ? void 0 : MT.snapshot()
        }
      }
      workersMemoryBytes() {
        let TT = 0;
        for (const {
            stats: UT,
            gone: mT
          }
          of this.workers.values()) TT += mT ? 0 : UT.memoryBytes;
        return TT
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(kT)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(TT) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = TT + 1e3;
        const UT = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, UT)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(TT) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${TT}: frames grow on demand from here`)
      }
      shedFor(TT) {
        const {
          shedding: UT
        } = this;
        if (null === UT) return;
        this.pendingSince = null;
        const mT = this.call((() => UT.shed(TT)), null);
        this.stopped || (null !== mT ? (this.sheds++, this.shedCap = mT, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), UT.Gp(TT, this.sheds, this.details())) : lT(TT) && this.stopSteps("nothing is left to shed"))
      }
      call(TT, UT) {
        if (this.stopped) return UT;
        try {
          return TT()
        } catch (mT) {
          return this.stop(), this.onError(mT), UT
        }
      }
    }

    function xT(TT) {
      const UT = (TT, UT) => `${TT}/${(0,WT.f)(UT)}`;
      return `memory ${(0,WT.f)(TT.memoryBytes)} live ${(0,WT.f)(TT.liveBytes)} peak ${(0,WT.f)(TT.peakLiveBytes)} unused ${(0,WT.f)(TT.unusedBytes)} ceiling ${(0,WT.f)(TT.ceilingBytes)} MiB; grows upFront ${UT(TT.grows.upFront,TT.grownBytes.upFront)} ahead ${UT(TT.grows.ahead,TT.grownBytes.ahead)} inFrame ${UT(TT.grows.onDemandInFrame,TT.grownBytes.onDemandInFrame)} other ${UT(TT.grows.onDemand,TT.grownBytes.onDemand)}; refused reserves ${TT.reservesRefused} allocations ${TT.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);