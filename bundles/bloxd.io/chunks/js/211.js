export const id = 211;
export const ids = [211];
export const modules = {
  36503: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS,
      e: () => bS,
      i: () => XS
    });
    var tS = gS(1920);
    class bS extends Error {
      constructor(SS) {
        super("The game server didn't answer in time"), this.leg = SS, this.name = "SeatRequestTimedOut"
      }
    }
    const XS = new class {
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
        for (const SS of this.waiting) SS()
      }
      remove() {
        this.count--
      }
      whenSlow(SS) {
        return this.count > 0 || SS.aborted ? Promise.resolve(!SS.aborted) : new Promise((HS => {
          const gS = () => {
            this.waiting.delete(gS), HS(!SS.aborted)
          };
          this.waiting.add(gS), SS.addEventListener("abort", gS, {
            once: !0
          })
        }))
      }
    };
    class xS {
      constructor(SS) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new tS.d(45e3, SS), this.slow = new tS.d(8e3, (() => {
          this.countedSlow = !0, XS.add()
        }))
      }
      restart() {
        XS.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), XS.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), XS.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, XS.remove())
      }
    }
  },
  36282: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      d: () => bS,
      h: () => XS,
      j: () => xS
    });
    const tS = 1024,
      bS = 1024 * tS;

    function XS(SS) {
      return 2 ** Math.floor(Math.log2(Math.max(1, SS / bS)))
    }

    function xS(SS) {
      return (SS / bS).toFixed(1)
    }
  },
  36493: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      f: () => qS,
      j: () => NS,
      m: () => xS,
      p: () => uS,
      s: () => IS,
      u: () => kS
    });
    var tS = gS(198);
    const bS = 32 * gS(36282).d,
      XS = 6144,
      xS = 4608,
      NS = 512,
      qS = function() {
        const SS = kS(tS.e.maxChunkHorizAddDistance + 1, tS.e.maxChunkVertAddDistance + 1);
        let HS = SS;
        for (; fS(HS) < SS;) HS++;
        return HS
      }();

    function uS(SS) {
      return Math.floor(bS * SS / XS)
    }

    function IS(SS) {
      const HS = fS(SS);
      let gS = tS.e.maxChunkHorizAddDistance,
        bS = tS.e.maxChunkVertAddDistance;
      if (kS(gS + 1, bS + 1) <= HS) return null;
      for (; kS(gS + 1, bS + 1) > HS && (gS > 0 || bS > 0);) gS > bS ? gS-- : bS--;
      return {
        horizontal: gS,
        vertical: bS
      }
    }

    function fS(SS) {
      return SS - Math.floor(SS / 6)
    }

    function kS(SS, HS) {
      const gS = Math.max(SS, HS);
      let tS = 0;
      for (let bS = -gS; bS <= gS; bS++)
        for (let XS = -gS; XS <= gS; XS++)
          for (let xS = -gS; xS <= gS; xS++) aS(SS, HS, bS, XS, xS) && tS++;
      return tS
    }

    function aS(SS, HS, gS, tS, bS) {
      const XS = gS * gS + bS * bS;
      return SS === HS ? XS + tS * tS <= SS * SS : SS > HS ? Math.abs(tS) <= HS && XS + tS * tS <= SS * SS : XS <= SS * SS && XS + tS * tS <= HS * HS
    }
  },
  36485: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => QS,
      e: () => ES,
      i: () => vS,
      m: () => cS,
      o: () => dS
    });
    var tS = gS(198),
      bS = gS(104),
      XS = gS(138),
      xS = gS(321),
      NS = gS(4518),
      qS = gS(703),
      uS = gS(36493),
      IS = gS(36498);
    const fS = 1048576,
      kS = 1024 * fS,
      aS = 400 * fS,
      KS = 147456,
      jS = .5,
      GS = 1.5 * kS,
      CS = 768 * fS;

    function nS(SS) {
      const {
        os: HS,
        deviceMemory: gS
      } = SS;
      if ("ios" === HS) switch ((0, xS.i)(SS)) {
        case "ipad_m":
          return {
            footprintBytes: PS(uS.d), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: CS, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: GS, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: CS, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof gS && Number.isFinite(gS) && gS > 0 ? {
        footprintBytes: gS * kS * jS,
        basis: `memory-${gS}`,
        namesLimit: !0
      } : "android" === HS ? {
        footprintBytes: CS,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: PS(uS.m),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function PS(SS) {
      return aS + SS * KS
    }

    function QS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JS(),
        HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XS.r;
      if ("android" !== SS.os || "mobileAndroid" === HS) return !0;
      const {
        footprintBytes: gS,
        basis: tS
      } = nS(SS);
      return "android" === tS || gS > 2 * kS
    }

    function DS(SS, HS, gS) {
      var bS, XS;
      let {
        footprintBytes: xS,
        basis: NS,
        namesLimit: qS
      } = nS(SS);
      if (gS) {
        const SS = Math.min(xS, PS(uS.d));
        xS = aS + Math.max(0, SS - aS) / 2, NS += "+killed", qS = !0
      }
      null !== HS && PS(HS) < xS && (xS = PS(HS), NS += "+learned", qS = !0);
      const IS = function(SS) {
          const HS = Math.floor((SS - aS) / KS);
          return Math.min(uS.d, Math.max(uS.j, HS))
        }(xS),
        fS = qS && IS < uS.d ? Math.min(IS, uS.f) : IS,
        kS = (0, uS.s)(fS);
      return {
        footprintBytes: xS,
        shedFootprintBytes: qS ? Math.max(xS, PS(fS)) : null,
        chunkCap: fS,
        maxHorizDistance: null !== (bS = null === kS || void 0 === kS ? void 0 : kS.horizontal) && void 0 !== bS ? bS : tS.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (XS = null === kS || void 0 === kS ? void 0 : kS.vertical) && void 0 !== XS ? XS : tS.e.maxChunkVertAddDistance,
        basis: NS
      }
    }
    let wS = null,
      hS = null,
      ZS = null;

    function JS() {
      return wS ??= {
        os: (0, bS.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, xS.k)()
      }, wS
    }

    function OS() {
      return DS(JS(), (0, NS.g)(), (0, qS.P)("wasm").length > 0)
    }

    function dS() {
      return ZS ??= (0, IS.n)(DS(JS(), null, !1).chunkCap), ZS
    }

    function cS() {
      return hS ??= OS(), hS
    }

    function vS() {
      var SS;
      return (null !== (SS = hS) && void 0 !== SS ? SS : OS()).basis
    }

    function ES(SS, HS) {
      return SS.setChunkCap(HS.chunkCap)
    }
  },
  36498: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => JS,
      h: () => QS,
      j: () => fS,
      l: () => DS,
      n: () => CS,
      q: () => hS,
      t: () => ZS
    });
    var tS = gS(36282),
      bS = gS(36493);
    const XS = 64 * tS.b,
      xS = 40 * tS.d,
      NS = 36 * tS.d,
      qS = 20 * tS.d,
      uS = 2 * tS.d,
      IS = 5 * tS.d;

    function fS(SS) {
      return "footprint" !== SS
    }
    const kS = 2 * tS.d,
      aS = 4 * tS.d,
      KS = 35 * tS.d + kS + aS,
      jS = 6.5 * tS.d,
      GS = 132.5 * tS.b;

    function CS(SS) {
      const HS = jS + (0, bS.p)(SS) + SS * GS;
      return Math.ceil((2 * KS + HS) / XS) * XS
    }
    CS(bS.d), tS.d, tS.d, tS.d;
    const nS = {
        targetBytes: xS,
        leastBytes: qS
      },
      PS = {
        targetBytes: NS,
        leastBytes: qS
      };

    function QS(SS) {
      return {
        targetBytes: SS,
        leastBytes: 0
      }
    }

    function DS(SS) {
      return SS >= bS.d ? nS : PS
    }
    const wS = 2 * XS;

    function hS(SS, HS, gS) {
      return SS + HS + wS > gS
    }
    const ZS = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? SS => {
        requestIdleCallback(SS)
      } : null
    };
    class JS {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZS;
        this.memory = SS, this.readPeakStoredChunks = HS, this.onError = gS, this.clock = tS, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(SS, HS, gS) {
        this.shedding = {
          shed: SS,
          tK: HS,
          readDistanceInUse: gS
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(SS) {
        this.footprint = SS
      }
      setCeiling(SS) {
        this.ceilingBytes = SS, this.call((() => {
          this.memory.setCeiling(SS)
        }), void 0)
      }
      ceilingMayRefuse(SS, HS) {
        var gS;
        return hS(this.memory.memoryBytes(), SS, null !== (gS = this.ceilingBytes) && void 0 !== gS ? gS : HS)
      }
      reserveAtJoin(SS) {
        let {
          targetBytes: HS,
          leastBytes: gS
        } = SS;
        const tS = this.memory.memoryBytes(),
          bS = tS + gS,
          XS = Math.max(HS + (this.ballastOn() ? IS : 0), bS),
          xS = this.call((() => this.memory.reserveUpFront(XS) ? "target" : XS > bS && this.memory.reserveUpFront(bS) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== xS) {
          const SS = "least" === xS ? `took ${bS} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${XS} bytes was refused at ${tS} bytes; ${SS}`)
        }
        return this.joinReserveTaken = xS, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== xS && this.shedFor("joinReserve"), "none" !== xS
      }
      afterFrame() {
        if (this.stopped) return;
        const SS = this.clock.now(),
          HS = null !== this.stepsHeldUntil && SS >= this.stepsHeldUntil;
        if (HS && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && SS >= this.ballastCheckAt && (this.takeBallast(SS), this.stopped)) return;
        const gS = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          tS = HS && "now" === gS ? "none" : gS,
          {
            requestIdle: bS
          } = this.clock;
        "now" === tS || null !== this.pendingSince && SS - this.pendingSince >= 500 ? this.step() : "idle" === tS && null === this.pendingSince && (null === bS ? this.step() : (this.pendingSince = SS, bS((() => {
          null !== this.pendingSince && this.step()
        })))), SS - this.statsAt >= 1e3 && (this.statsAt = SS, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var SS, HS;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (HS = this.shedding.readDistanceInUse()) && void 0 !== HS ? HS : this.distanceInUse);
          null === (SS = this.footprint) || void 0 === SS || SS.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(SS, HS) {
        this.noteWorker(`Mesh${SS}`, HS)
      }
      meshWorkerGone(SS) {
        this.workerGone(`Mesh${SS}`)
      }
      noteWorldgen(SS) {
        this.noteWorker("Worldgen", SS)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(SS, HS) {
        const gS = this.workers.get(SS);
        null !== gS && void 0 !== gS && gS.gone && (this.replacedRefusals.reserves += gS.stats.reservesRefused, this.replacedRefusals.allocations += gS.stats.allocationsRefused), this.workers.set(SS, {
          stats: HS,
          gone: !1
        })
      }
      workerGone(SS) {
        const HS = this.workers.get(SS);
        HS && (HS.gone = !0)
      }
      details() {
        var SS, HS;
        const gS = {
          wasmMemoryNow: `${(0,tS.j)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (gS.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (gS.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const bS = this.main;
        if (bS) {
          gS.wasmMemoryMain = OS(bS);
          const SS = Math.max(0, bS.peakLiveBytes - this.ballastPeakBytes),
            HS = 0 === this.peakStoredChunks ? "-" : (SS / this.peakStoredChunks / tS.b).toFixed(1);
          gS.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${HS} KiB`
        }
        for (const [tS, {
            stats: xS,
            gone: NS
          }] of this.workers) gS[`wasmMemory${tS}`] = OS(xS) + (NS ? " (gone)" : "");
        const XS = null !== (SS = null === (HS = this.footprint) || void 0 === HS ? void 0 : HS.describe()) && void 0 !== SS ? SS : null;
        return null !== XS && (gS.wasmMemoryFootprint = XS), gS
      }
      pageKillSnapshot() {
        var SS, HS, gS, bS, XS;
        let xS = (null !== (SS = null === (HS = this.main) || void 0 === HS ? void 0 : HS.reservesRefused) && void 0 !== SS ? SS : 0) + this.replacedRefusals.reserves,
          NS = (null !== (gS = null === (bS = this.main) || void 0 === bS ? void 0 : bS.allocationsRefused) && void 0 !== gS ? gS : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: tS
          }
          of this.workers.values()) xS += tS.reservesRefused, NS += tS.allocationsRefused;
        return {
          wasmMainMiB: Number((0, tS.j)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, tS.j)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: xS,
          refusedAllocations: NS,
          sheds: this.sheds,
          ...null === (XS = this.footprint) || void 0 === XS ? void 0 : XS.snapshot()
        }
      }
      workersMemoryBytes() {
        let SS = 0;
        for (const {
            stats: HS,
            gone: gS
          }
          of this.workers.values()) SS += gS ? 0 : HS.memoryBytes;
        return SS
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(uS)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(SS) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = SS + 1e3;
        const HS = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, HS)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(SS) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${SS}: frames grow on demand from here`)
      }
      shedFor(SS) {
        const {
          shedding: HS
        } = this;
        if (null === HS) return;
        this.pendingSince = null;
        const gS = this.call((() => HS.shed(SS)), null);
        this.stopped || (null !== gS ? (this.sheds++, this.shedCap = gS, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), HS.tK(SS, this.sheds, this.details())) : fS(SS) && this.stopSteps("nothing is left to shed"))
      }
      call(SS, HS) {
        if (this.stopped) return HS;
        try {
          return SS()
        } catch (gS) {
          return this.stop(), this.onError(gS), HS
        }
      }
    }

    function OS(SS) {
      const HS = (SS, HS) => `${SS}/${(0,tS.j)(HS)}`;
      return `memory ${(0,tS.j)(SS.memoryBytes)} live ${(0,tS.j)(SS.liveBytes)} peak ${(0,tS.j)(SS.peakLiveBytes)} unused ${(0,tS.j)(SS.unusedBytes)} ceiling ${(0,tS.j)(SS.ceilingBytes)} MiB; grows upFront ${HS(SS.grows.upFront,SS.grownBytes.upFront)} ahead ${HS(SS.grows.ahead,SS.grownBytes.ahead)} inFrame ${HS(SS.grows.onDemandInFrame,SS.grownBytes.onDemandInFrame)} other ${HS(SS.grows.onDemand,SS.grownBytes.onDemand)}; refused reserves ${SS.reservesRefused} allocations ${SS.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);