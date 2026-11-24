export const id = 211;
export const ids = [211];
export const modules = {
  36486: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      c: () => sD,
      g: () => KD
    });
    var pD = wD(1797);
    class sD extends Error {
      constructor(DD) {
        super("The game server didn't answer in time"), this.leg = DD, this.name = "SeatRequestTimedOut"
      }
    }
    const KD = new class {
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
        for (const DD of this.waiting) DD()
      }
      remove() {
        this.count--
      }
      whenSlow(DD) {
        return this.count > 0 || DD.aborted ? Promise.resolve(!DD.aborted) : new Promise((zD => {
          const wD = () => {
            this.waiting.delete(wD), zD(!DD.aborted)
          };
          this.waiting.add(wD), DD.addEventListener("abort", wD, {
            once: !0
          })
        }))
      }
    };
    class rD {
      constructor(DD) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new pD.d(45e3, DD), this.slow = new pD.d(8e3, (() => {
          this.countedSlow = !0, KD.add()
        }))
      }
      restart() {
        KD.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), KD.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), KD.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, KD.remove())
      }
    }
  },
  36248: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD,
      f: () => sD,
      h: () => KD,
      i: () => rD
    });
    const pD = 1024,
      sD = 1024 * pD;

    function KD(DD) {
      return 2 ** Math.floor(Math.log2(Math.max(1, DD / sD)))
    }

    function rD(DD) {
      return (DD / sD).toFixed(1)
    }
  },
  36476: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD,
      g: () => cD,
      i: () => LD,
      j: () => rD,
      k: () => gD,
      o: () => RD,
      q: () => UD
    });
    var pD = wD(197);
    const sD = 32 * wD(36248).f,
      KD = 6144,
      rD = 4608,
      LD = 512,
      cD = function() {
        const DD = UD(pD.f.maxChunkHorizAddDistance + 1, pD.f.maxChunkVertAddDistance + 1);
        let zD = DD;
        for (; AD(zD) < DD;) zD++;
        return zD
      }();

    function gD(DD) {
      return Math.floor(sD * DD / KD)
    }

    function RD(DD) {
      const zD = AD(DD);
      let wD = pD.f.maxChunkHorizAddDistance,
        sD = pD.f.maxChunkVertAddDistance;
      if (UD(wD + 1, sD + 1) <= zD) return null;
      for (; UD(wD + 1, sD + 1) > zD && (wD > 0 || sD > 0);) wD > sD ? wD-- : sD--;
      return {
        horizontal: wD,
        vertical: sD
      }
    }

    function AD(DD) {
      return DD - Math.floor(DD / 6)
    }

    function UD(DD, zD) {
      const wD = Math.max(DD, zD);
      let pD = 0;
      for (let sD = -wD; sD <= wD; sD++)
        for (let KD = -wD; KD <= wD; KD++)
          for (let rD = -wD; rD <= wD; rD++) fD(DD, zD, sD, KD, rD) && pD++;
      return pD
    }

    function fD(DD, zD, wD, pD, sD) {
      const KD = wD * wD + sD * sD;
      return DD === zD ? KD + pD * pD <= DD * DD : DD > zD ? Math.abs(pD) <= zD && KD + pD * pD <= DD * DD : KD <= DD * DD && KD + pD * pD <= zD * zD
    }
  },
  36473: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => OD,
      f: () => bD,
      i: () => TD,
      m: () => xD,
      o: () => CD
    });
    var pD = wD(197),
      sD = wD(103),
      KD = wD(128),
      rD = wD(300),
      LD = wD(4423),
      cD = wD(640),
      gD = wD(36476),
      RD = wD(36483);
    const AD = 1048576,
      UD = 1024 * AD,
      fD = 400 * AD,
      ID = 147456,
      BD = .5,
      GD = 1.5 * UD,
      hD = 768 * AD;

    function nD(DD) {
      const {
        os: zD,
        deviceMemory: wD
      } = DD;
      if ("ios" === zD) switch ((0, rD.g)(DD)) {
        case "ipad_m":
          return {
            footprintBytes: MD(gD.d), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: hD, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: GD, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: hD, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof wD && Number.isFinite(wD) && wD > 0 ? {
        footprintBytes: wD * UD * BD,
        basis: `memory-${wD}`,
        namesLimit: !0
      } : "android" === zD ? {
        footprintBytes: hD,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: MD(gD.j),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function MD(DD) {
      return fD + DD * ID
    }

    function OD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VD(),
        zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KD.v;
      if ("android" !== DD.os || "mobileAndroid" === zD) return !0;
      const {
        footprintBytes: wD,
        basis: pD
      } = nD(DD);
      return "android" === pD || wD > 2 * UD
    }

    function JD(DD, zD, wD) {
      var sD, KD;
      let {
        footprintBytes: rD,
        basis: LD,
        namesLimit: cD
      } = nD(DD);
      if (wD) {
        const DD = Math.min(rD, MD(gD.d));
        rD = fD + Math.max(0, DD - fD) / 2, LD += "+killed", cD = !0
      }
      null !== zD && MD(zD) < rD && (rD = MD(zD), LD += "+learned", cD = !0);
      const RD = function(DD) {
          const zD = Math.floor((DD - fD) / ID);
          return Math.min(gD.d, Math.max(gD.i, zD))
        }(rD),
        AD = cD && RD < gD.d ? Math.min(RD, gD.g) : RD,
        UD = (0, gD.o)(AD);
      return {
        footprintBytes: rD,
        shedFootprintBytes: cD ? Math.max(rD, MD(AD)) : null,
        chunkCap: AD,
        maxHorizDistance: null !== (sD = null === UD || void 0 === UD ? void 0 : UD.horizontal) && void 0 !== sD ? sD : pD.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (KD = null === UD || void 0 === UD ? void 0 : UD.vertical) && void 0 !== KD ? KD : pD.f.maxChunkVertAddDistance,
        basis: LD
      }
    }
    let ED = null,
      QD = null,
      XD = null;

    function VD() {
      return ED ??= {
        os: (0, sD.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, rD.j)()
      }, ED
    }

    function PD() {
      return JD(VD(), (0, LD.f)(), (0, cD.K)("wasm").length > 0)
    }

    function CD() {
      return XD ??= (0, RD.q)(JD(VD(), null, !1).chunkCap), XD
    }

    function xD() {
      return QD ??= PD(), QD
    }

    function TD() {
      var DD;
      return (null !== (DD = QD) && void 0 !== DD ? DD : PD()).basis
    }

    function bD(DD, zD) {
      return DD.setChunkCap(zD.chunkCap)
    }
  },
  36483: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => VD,
      g: () => OD,
      k: () => AD,
      n: () => JD,
      q: () => hD,
      r: () => QD,
      x: () => XD
    });
    var pD = wD(36248),
      sD = wD(36476);
    const KD = 64 * pD.d,
      rD = 40 * pD.f,
      LD = 36 * pD.f,
      cD = 20 * pD.f,
      gD = 2 * pD.f,
      RD = 5 * pD.f;

    function AD(DD) {
      return "footprint" !== DD
    }
    const UD = 2 * pD.f,
      fD = 4 * pD.f,
      ID = 35 * pD.f + UD + fD,
      BD = 6.5 * pD.f,
      GD = 132.5 * pD.d;

    function hD(DD) {
      const zD = BD + (0, sD.k)(DD) + DD * GD;
      return Math.ceil((2 * ID + zD) / KD) * KD
    }
    hD(sD.d), pD.f, pD.f, pD.f;
    const nD = {
        targetBytes: rD,
        leastBytes: cD
      },
      MD = {
        targetBytes: LD,
        leastBytes: cD
      };

    function OD(DD) {
      return {
        targetBytes: DD,
        leastBytes: 0
      }
    }

    function JD(DD) {
      return DD >= sD.d ? nD : MD
    }
    const ED = 2 * KD;

    function QD(DD, zD, wD) {
      return DD + zD + ED > wD
    }
    const XD = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? DD => {
        requestIdleCallback(DD)
      } : null
    };
    class VD {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : XD;
        this.memory = DD, this.readPeakStoredChunks = zD, this.onError = wD, this.clock = pD, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(DD, zD, wD) {
        this.shedding = {
          shed: DD,
          sI: zD,
          readDistanceInUse: wD
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(DD) {
        this.footprint = DD
      }
      setCeiling(DD) {
        this.ceilingBytes = DD, this.call((() => {
          this.memory.setCeiling(DD)
        }), void 0)
      }
      ceilingMayRefuse(DD, zD) {
        var wD;
        return QD(this.memory.memoryBytes(), DD, null !== (wD = this.ceilingBytes) && void 0 !== wD ? wD : zD)
      }
      reserveAtJoin(DD) {
        let {
          targetBytes: zD,
          leastBytes: wD
        } = DD;
        const pD = this.memory.memoryBytes(),
          sD = pD + wD,
          KD = Math.max(zD + (this.ballastOn() ? RD : 0), sD),
          rD = this.call((() => this.memory.reserveUpFront(KD) ? "target" : KD > sD && this.memory.reserveUpFront(sD) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== rD) {
          const DD = "least" === rD ? `took ${sD} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${KD} bytes was refused at ${pD} bytes; ${DD}`)
        }
        return this.joinReserveTaken = rD, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== rD && this.shedFor("joinReserve"), "none" !== rD
      }
      afterFrame() {
        if (this.stopped) return;
        const DD = this.clock.now(),
          zD = null !== this.stepsHeldUntil && DD >= this.stepsHeldUntil;
        if (zD && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && DD >= this.ballastCheckAt && (this.takeBallast(DD), this.stopped)) return;
        const wD = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          pD = zD && "now" === wD ? "none" : wD,
          {
            requestIdle: sD
          } = this.clock;
        "now" === pD || null !== this.pendingSince && DD - this.pendingSince >= 500 ? this.step() : "idle" === pD && null === this.pendingSince && (null === sD ? this.step() : (this.pendingSince = DD, sD((() => {
          null !== this.pendingSince && this.step()
        })))), DD - this.statsAt >= 1e3 && (this.statsAt = DD, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var DD, zD;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (zD = this.shedding.readDistanceInUse()) && void 0 !== zD ? zD : this.distanceInUse);
          null === (DD = this.footprint) || void 0 === DD || DD.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(DD, zD) {
        this.noteWorker(`Mesh${DD}`, zD)
      }
      meshWorkerGone(DD) {
        this.workerGone(`Mesh${DD}`)
      }
      noteWorldgen(DD) {
        this.noteWorker("Worldgen", DD)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(DD, zD) {
        const wD = this.workers.get(DD);
        null !== wD && void 0 !== wD && wD.gone && (this.replacedRefusals.reserves += wD.stats.reservesRefused, this.replacedRefusals.allocations += wD.stats.allocationsRefused), this.workers.set(DD, {
          stats: zD,
          gone: !1
        })
      }
      workerGone(DD) {
        const zD = this.workers.get(DD);
        zD && (zD.gone = !0)
      }
      details() {
        var DD, zD;
        const wD = {
          wasmMemoryNow: `${(0,pD.i)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (wD.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (wD.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const sD = this.main;
        if (sD) {
          wD.wasmMemoryMain = PD(sD);
          const DD = Math.max(0, sD.peakLiveBytes - this.ballastPeakBytes),
            zD = 0 === this.peakStoredChunks ? "-" : (DD / this.peakStoredChunks / pD.d).toFixed(1);
          wD.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${zD} KiB`
        }
        for (const [pD, {
            stats: rD,
            gone: LD
          }] of this.workers) wD[`wasmMemory${pD}`] = PD(rD) + (LD ? " (gone)" : "");
        const KD = null !== (DD = null === (zD = this.footprint) || void 0 === zD ? void 0 : zD.describe()) && void 0 !== DD ? DD : null;
        return null !== KD && (wD.wasmMemoryFootprint = KD), wD
      }
      pageKillSnapshot() {
        var DD, zD, wD, sD, KD;
        let rD = (null !== (DD = null === (zD = this.main) || void 0 === zD ? void 0 : zD.reservesRefused) && void 0 !== DD ? DD : 0) + this.replacedRefusals.reserves,
          LD = (null !== (wD = null === (sD = this.main) || void 0 === sD ? void 0 : sD.allocationsRefused) && void 0 !== wD ? wD : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: pD
          }
          of this.workers.values()) rD += pD.reservesRefused, LD += pD.allocationsRefused;
        return {
          wasmMainMiB: Number((0, pD.i)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, pD.i)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: rD,
          refusedAllocations: LD,
          sheds: this.sheds,
          ...null === (KD = this.footprint) || void 0 === KD ? void 0 : KD.snapshot()
        }
      }
      workersMemoryBytes() {
        let DD = 0;
        for (const {
            stats: zD,
            gone: wD
          }
          of this.workers.values()) DD += wD ? 0 : zD.memoryBytes;
        return DD
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(gD)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(DD) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = DD + 1e3;
        const zD = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, zD)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(DD) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${DD}: frames grow on demand from here`)
      }
      shedFor(DD) {
        const {
          shedding: zD
        } = this;
        if (null === zD) return;
        this.pendingSince = null;
        const wD = this.call((() => zD.shed(DD)), null);
        this.stopped || (null !== wD ? (this.sheds++, this.shedCap = wD, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), zD.sI(DD, this.sheds, this.details())) : AD(DD) && this.stopSteps("nothing is left to shed"))
      }
      call(DD, zD) {
        if (this.stopped) return zD;
        try {
          return DD()
        } catch (wD) {
          return this.stop(), this.onError(wD), zD
        }
      }
    }

    function PD(DD) {
      const zD = (DD, zD) => `${DD}/${(0,pD.i)(zD)}`;
      return `memory ${(0,pD.i)(DD.memoryBytes)} live ${(0,pD.i)(DD.liveBytes)} peak ${(0,pD.i)(DD.peakLiveBytes)} unused ${(0,pD.i)(DD.unusedBytes)} ceiling ${(0,pD.i)(DD.ceilingBytes)} MiB; grows upFront ${zD(DD.grows.upFront,DD.grownBytes.upFront)} ahead ${zD(DD.grows.ahead,DD.grownBytes.ahead)} inFrame ${zD(DD.grows.onDemandInFrame,DD.grownBytes.onDemandInFrame)} other ${zD(DD.grows.onDemand,DD.grownBytes.onDemand)}; refused reserves ${DD.reservesRefused} allocations ${DD.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);