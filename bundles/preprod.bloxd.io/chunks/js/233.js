export const id = 233;
export const ids = [233];
export const modules = {
  37437: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      i: () => SM,
      k: () => jM
    });
    var OM = iM(1899);
    class SM extends Error {
      constructor(MM) {
        super("The game server didn't answer in time"), this.leg = MM, this.name = "SeatRequestTimedOut"
      }
    }
    const jM = new class {
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
        for (const MM of this.waiting) MM()
      }
      remove() {
        this.count--
      }
      whenSlow(MM) {
        return this.count > 0 || MM.aborted ? Promise.resolve(!MM.aborted) : new Promise((rM => {
          const iM = () => {
            this.waiting.delete(iM), rM(!MM.aborted)
          };
          this.waiting.add(iM), MM.addEventListener("abort", iM, {
            once: !0
          })
        }))
      }
    };
    class aM {
      constructor(MM) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new OM.e(45e3, MM), this.slow = new OM.e(8e3, (() => {
          this.countedSlow = !0, jM.add()
        }))
      }
      restart() {
        jM.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), jM.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), jM.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, jM.remove())
      }
    }
  },
  37223: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      e: () => SM,
      h: () => jM,
      l: () => aM
    });
    const OM = 1024,
      SM = 1024 * OM;

    function jM(MM) {
      return 2 ** Math.floor(Math.log2(Math.max(1, MM / SM)))
    }

    function aM(MM) {
      return (MM / SM).toFixed(1)
    }
  },
  37426: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      d: () => nM,
      f: () => PM,
      i: () => aM,
      m: () => QM,
      q: () => zM,
      t: () => mM
    });
    var OM = iM(181);
    const SM = 32 * iM(37223).e,
      jM = 6144,
      aM = 4608,
      PM = 512,
      nM = function() {
        const MM = mM(OM.f.maxChunkHorizAddDistance + 1, OM.f.maxChunkVertAddDistance + 1);
        let rM = MM;
        for (; LM(rM) < MM;) rM++;
        return rM
      }();

    function QM(MM) {
      return Math.floor(SM * MM / jM)
    }

    function zM(MM) {
      const rM = LM(MM);
      let iM = OM.f.maxChunkHorizAddDistance,
        SM = OM.f.maxChunkVertAddDistance;
      if (mM(iM + 1, SM + 1) <= rM) return null;
      for (; mM(iM + 1, SM + 1) > rM && (iM > 0 || SM > 0);) iM > SM ? iM-- : SM--;
      return {
        horizontal: iM,
        vertical: SM
      }
    }

    function LM(MM) {
      return MM - Math.floor(MM / 6)
    }

    function mM(MM, rM) {
      const iM = Math.max(MM, rM);
      let OM = 0;
      for (let SM = -iM; SM <= iM; SM++)
        for (let jM = -iM; jM <= iM; jM++)
          for (let aM = -iM; aM <= iM; aM++) HM(MM, rM, SM, jM, aM) && OM++;
      return OM
    }

    function HM(MM, rM, iM, OM, SM) {
      const jM = iM * iM + SM * SM;
      return MM === rM ? jM + OM * OM <= MM * MM : MM > rM ? Math.abs(OM) <= rM && jM + OM * OM <= MM * MM : jM <= MM * MM && jM + OM * OM <= rM * rM
    }
  },
  37422: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => CM,
      d: () => sM,
      f: () => WM,
      g: () => pM,
      j: () => RM
    });
    var OM = iM(181),
      SM = iM(83),
      jM = iM(119),
      aM = iM(275),
      PM = iM(4759),
      nM = iM(665),
      QM = iM(4765),
      zM = iM(37426),
      LM = iM(37428);
    const mM = 1048576,
      HM = 1024 * mM,
      hM = 400 * mM,
      JM = 147456,
      dM = .5,
      yM = 2048,
      lM = 1.5 * HM,
      EM = 768 * mM;

    function UM(MM) {
      const {
        os: rM,
        deviceMemory: iM
      } = MM;
      if ("ios" === rM) switch ((0, aM.d)(MM)) {
        case "ipad_m":
          return {
            footprintBytes: GM(zM.c), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: EM, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: lM, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: EM, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof iM && Number.isFinite(iM) && iM > 0 ? {
        footprintBytes: iM * HM * dM,
        basis: `memory-${iM}`,
        namesLimit: !0
      } : "android" === rM ? {
        footprintBytes: EM,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: GM(zM.i),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function GM(MM) {
      return hM + MM * JM
    }

    function CM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gM(),
        rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jM.siteUsed;
      if ("android" !== MM.os || "mobileAndroid" === rM) return !0;
      const {
        footprintBytes: iM,
        basis: OM
      } = UM(MM);
      return "android" === OM || iM > 2 * HM
    }

    function eM(MM, rM, iM) {
      var SM, jM, aM;
      let {
        footprintBytes: PM,
        basis: nM,
        namesLimit: LM
      } = UM(MM);
      if (iM) {
        const MM = Math.min(PM, GM(zM.c));
        PM = hM + Math.max(0, MM - hM) / 2, nM += "+killed", LM = !0
      }
      null !== rM && GM(rM) < PM && (PM = GM(rM), nM += "+learned", LM = !0), nM += (0, QM.j)(null !== (SM = MM.x32) && void 0 !== SM ? SM : null), "fix" === MM.x32 && GM(yM) < PM && (PM = GM(yM), LM = !0);
      const mM = function(MM) {
          const rM = Math.floor((MM - hM) / JM);
          return Math.min(zM.c, Math.max(zM.f, rM))
        }(PM),
        HM = LM && mM < zM.c ? Math.min(mM, zM.d) : mM,
        dM = (0, zM.q)(HM);
      return {
        footprintBytes: PM,
        shedFootprintBytes: LM ? Math.max(PM, GM(HM)) : null,
        chunkCap: HM,
        maxHorizDistance: null !== (jM = null === dM || void 0 === dM ? void 0 : dM.horizontal) && void 0 !== jM ? jM : OM.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (aM = null === dM || void 0 === dM ? void 0 : dM.vertical) && void 0 !== aM ? aM : OM.f.maxChunkVertAddDistance,
        basis: nM
      }
    }
    let bM = null,
      wM = null,
      tM = null;

    function gM() {
      var MM;
      return bM ??= {
        os: (0, SM.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, aM.f)()
      }, {
        ...bM,
        x32: null !== (MM = (0, QM.h)()) && void 0 !== MM ? MM : void 0
      }
    }

    function uM() {
      return eM(gM(), (0, PM.e)(), (0, nM.C)("wasm").length > 0)
    }

    function RM() {
      return tM ??= (0, LM.t)(eM(gM(), null, !1).chunkCap), tM
    }

    function pM() {
      return wM ??= uM(), wM
    }

    function WM() {
      var MM;
      return (null !== (MM = wM) && void 0 !== MM ? MM : uM()).basis
    }

    function sM(MM, rM) {
      return MM.setChunkCap(rM.chunkCap)
    }
  },
  37428: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => wM,
      E: () => mM,
      b: () => tM,
      i: () => GM,
      l: () => LM,
      p: () => CM,
      t: () => lM,
      x: () => bM
    });
    var OM = iM(37223),
      SM = iM(37426);
    const jM = 64 * OM.b,
      aM = 40 * OM.e,
      PM = 36 * OM.e,
      nM = 20 * OM.e,
      QM = 2 * OM.e,
      zM = 5 * OM.e;

    function LM(MM) {
      return "footprint" !== MM && "gcPressure" !== MM
    }

    function mM(MM) {
      return LM(MM) ? "wasm memory was refused" : "gcPressure" === MM ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const HM = 2 * OM.e,
      hM = 4 * OM.e,
      JM = 35 * OM.e + HM + hM,
      dM = 6.5 * OM.e,
      yM = 132.5 * OM.b;

    function lM(MM) {
      const rM = dM + (0, SM.m)(MM) + MM * yM;
      return Math.ceil((2 * JM + rM) / jM) * jM
    }
    lM(SM.c), OM.e, OM.e, OM.e;
    const EM = {
        targetBytes: aM,
        leastBytes: nM
      },
      UM = {
        targetBytes: PM,
        leastBytes: nM
      };

    function GM(MM) {
      return {
        targetBytes: MM,
        leastBytes: 0
      }
    }

    function CM(MM) {
      return MM >= SM.c ? EM : UM
    }
    const eM = 2 * jM;

    function bM(MM, rM, iM) {
      return MM + rM + eM > iM
    }
    const wM = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? MM => {
        requestIdleCallback(MM)
      } : null
    };
    class tM {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wM;
        this.memory = MM, this.readPeakStoredChunks = rM, this.onError = iM, this.clock = OM, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(MM, rM, iM) {
        this.shedding = {
          shed: MM,
          aL: rM,
          readDistanceInUse: iM
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(MM) {
        this.footprint = MM
      }
      setGcPressure(MM) {
        this.gcPressure = {
          highEpisode: MM,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(MM) {
        this.ceilingBytes = MM, this.call((() => {
          this.memory.setCeiling(MM)
        }), void 0)
      }
      ceilingMayRefuse(MM, rM) {
        var iM;
        return bM(this.memory.memoryBytes(), MM, null !== (iM = this.ceilingBytes) && void 0 !== iM ? iM : rM)
      }
      reserveAtJoin(MM) {
        let {
          targetBytes: rM,
          leastBytes: iM
        } = MM;
        const OM = this.memory.memoryBytes(),
          SM = OM + iM,
          jM = Math.max(rM + (this.ballastOn() ? zM : 0), SM),
          aM = this.call((() => this.memory.reserveUpFront(jM) ? "target" : jM > SM && this.memory.reserveUpFront(SM) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== aM) {
          const MM = "least" === aM ? `took ${SM} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${jM} bytes was refused at ${OM} bytes; ${MM}`)
        }
        return this.joinReserveTaken = aM, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== aM && this.shedFor("joinReserve"), "none" !== aM
      }
      afterFrame() {
        if (this.stopped) return;
        const MM = this.clock.now(),
          rM = null !== this.stepsHeldUntil && MM >= this.stepsHeldUntil;
        if (rM && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && MM >= this.ballastCheckAt && (this.takeBallast(MM), this.stopped)) return;
        const iM = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          OM = rM && "now" === iM ? "none" : iM,
          {
            requestIdle: SM
          } = this.clock;
        "now" === OM || null !== this.pendingSince && MM - this.pendingSince >= 500 ? this.step() : "idle" === OM && null === this.pendingSince && (null === SM ? this.step() : (this.pendingSince = MM, SM((() => {
          null !== this.pendingSince && this.step()
        })))), MM - this.statsAt >= 1e3 && (this.statsAt = MM, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(MM))
      }
      refreshStats() {
        this.call((() => {
          var MM, rM;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (rM = this.shedding.readDistanceInUse()) && void 0 !== rM ? rM : this.distanceInUse);
          null === (MM = this.footprint) || void 0 === MM || MM.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(MM, rM) {
        this.noteWorker(`Mesh${MM}`, rM)
      }
      meshWorkerGone(MM) {
        this.workerGone(`Mesh${MM}`)
      }
      noteWorldgen(MM) {
        this.noteWorker("Worldgen", MM)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(MM, rM) {
        const iM = this.workers.get(MM);
        null !== iM && void 0 !== iM && iM.gone && (this.replacedRefusals.reserves += iM.stats.reservesRefused, this.replacedRefusals.allocations += iM.stats.allocationsRefused), this.workers.set(MM, {
          stats: rM,
          gone: !1
        })
      }
      workerGone(MM) {
        const rM = this.workers.get(MM);
        rM && (rM.gone = !0)
      }
      details() {
        var MM, rM;
        const iM = this.memory.memoryBytes(),
          SM = {
            wasmMemoryNow: `${(0,OM.l)(iM)} MiB`,
            wasmMemoryMiB: String(Math.floor(iM / OM.e))
          };
        null !== this.joinReserveTaken && (SM.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (SM.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const jM = this.main;
        if (jM) {
          SM.wasmMemoryMain = gM(jM);
          const MM = Math.max(0, jM.peakLiveBytes - this.ballastPeakBytes),
            rM = 0 === this.peakStoredChunks ? "-" : (MM / this.peakStoredChunks / OM.b).toFixed(1);
          SM.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${rM} KiB`
        }
        for (const [OM, {
            stats: PM,
            gone: nM
          }] of this.workers) SM[`wasmMemory${OM}`] = gM(PM) + (nM ? " (gone)" : "");
        const aM = null !== (MM = null === (rM = this.footprint) || void 0 === rM ? void 0 : rM.describe()) && void 0 !== MM ? MM : null;
        return null !== aM && (SM.wasmMemoryFootprint = aM), SM
      }
      pageKillSnapshot() {
        var MM, rM, iM, SM, jM;
        let aM = (null !== (MM = null === (rM = this.main) || void 0 === rM ? void 0 : rM.reservesRefused) && void 0 !== MM ? MM : 0) + this.replacedRefusals.reserves,
          PM = (null !== (iM = null === (SM = this.main) || void 0 === SM ? void 0 : SM.allocationsRefused) && void 0 !== iM ? iM : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: OM
          }
          of this.workers.values()) aM += OM.reservesRefused, PM += OM.allocationsRefused;
        return {
          wasmMainMiB: Number((0, OM.l)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, OM.l)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: aM,
          refusedAllocations: PM,
          sheds: this.sheds,
          ...null === (jM = this.footprint) || void 0 === jM ? void 0 : jM.snapshot()
        }
      }
      workersMemoryBytes() {
        let MM = 0;
        for (const {
            stats: rM,
            gone: iM
          }
          of this.workers.values()) MM += iM ? 0 : rM.memoryBytes;
        return MM
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(MM) {
        const rM = this.gcPressure;
        if (null === rM) return;
        if (null !== rM.nextAt || "undefined" !== typeof document && document.hidden || (rM.nextAt = MM + 6e4), null === rM.nextAt || MM < rM.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const iM = rM.highEpisode();
        null !== iM && iM !== rM.shedEpisode && (rM.shedEpisode = iM, rM.nextAt = MM + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(QM)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(MM) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = MM + 1e3;
        const rM = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, rM)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(MM) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${MM}: frames grow on demand from here`)
      }
      shedFor(MM) {
        const {
          shedding: rM
        } = this;
        if (null === rM) return;
        this.pendingSince = null;
        const iM = this.call((() => rM.shed(MM)), null);
        if (this.stopped) return;
        if (null === iM) return void(LM(MM) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = iM, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const OM = "gcPressure" === MM ? ++this.gcSheds : this.sheds - this.gcSheds;
        rM.aL(MM, OM, this.details())
      }
      call(MM, rM) {
        if (this.stopped) return rM;
        try {
          return MM()
        } catch (iM) {
          return this.stop(), this.onError(iM), rM
        }
      }
    }

    function gM(MM) {
      const rM = (MM, rM) => `${MM}/${(0,OM.l)(rM)}`;
      return `memory ${(0,OM.l)(MM.memoryBytes)} live ${(0,OM.l)(MM.liveBytes)} peak ${(0,OM.l)(MM.peakLiveBytes)} unused ${(0,OM.l)(MM.unusedBytes)} ceiling ${(0,OM.l)(MM.ceilingBytes)} MiB; grows upFront ${rM(MM.grows.upFront,MM.grownBytes.upFront)} ahead ${rM(MM.grows.ahead,MM.grownBytes.ahead)} inFrame ${rM(MM.grows.onDemandInFrame,MM.grownBytes.onDemandInFrame)} other ${rM(MM.grows.onDemand,MM.grownBytes.onDemand)}; refused reserves ${MM.reservesRefused} allocations ${MM.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);