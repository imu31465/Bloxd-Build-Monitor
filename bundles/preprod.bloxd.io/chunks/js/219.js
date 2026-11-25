export const id = 219;
export const ids = [219];
export const modules = {
  36795: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      f: () => qQ,
      g: () => TQ
    });
    var wQ = XQ(1854);
    class qQ extends Error {
      constructor(QQ) {
        super("The game server didn't answer in time"), this.leg = QQ, this.name = "SeatRequestTimedOut"
      }
    }
    const TQ = new class {
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
        for (const QQ of this.waiting) QQ()
      }
      remove() {
        this.count--
      }
      whenSlow(QQ) {
        return this.count > 0 || QQ.aborted ? Promise.resolve(!QQ.aborted) : new Promise((WQ => {
          const XQ = () => {
            this.waiting.delete(XQ), WQ(!QQ.aborted)
          };
          this.waiting.add(XQ), QQ.addEventListener("abort", XQ, {
            once: !0
          })
        }))
      }
    };
    class zQ {
      constructor(QQ) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new wQ.e(45e3, QQ), this.slow = new wQ.e(8e3, (() => {
          this.countedSlow = !0, TQ.add()
        }))
      }
      restart() {
        TQ.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), TQ.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), TQ.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, TQ.remove())
      }
    }
  },
  36559: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      g: () => qQ,
      j: () => TQ,
      n: () => zQ
    });
    const wQ = 1024,
      qQ = 1024 * wQ;

    function TQ(QQ) {
      return 2 ** Math.floor(Math.log2(Math.max(1, QQ / qQ)))
    }

    function zQ(QQ) {
      return (QQ / qQ).toFixed(1)
    }
  },
  36785: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      f: () => FQ,
      h: () => sQ,
      i: () => zQ,
      l: () => PQ,
      o: () => gQ,
      s: () => rQ
    });
    var wQ = XQ(231);
    const qQ = 32 * XQ(36559).g,
      TQ = 6144,
      zQ = 4608,
      sQ = 512,
      FQ = function() {
        const QQ = rQ(wQ.h.maxChunkHorizAddDistance + 1, wQ.h.maxChunkVertAddDistance + 1);
        let WQ = QQ;
        for (; JQ(WQ) < QQ;) WQ++;
        return WQ
      }();

    function PQ(QQ) {
      return Math.floor(qQ * QQ / TQ)
    }

    function gQ(QQ) {
      const WQ = JQ(QQ);
      let XQ = wQ.h.maxChunkHorizAddDistance,
        qQ = wQ.h.maxChunkVertAddDistance;
      if (rQ(XQ + 1, qQ + 1) <= WQ) return null;
      for (; rQ(XQ + 1, qQ + 1) > WQ && (XQ > 0 || qQ > 0);) XQ > qQ ? XQ-- : qQ--;
      return {
        horizontal: XQ,
        vertical: qQ
      }
    }

    function JQ(QQ) {
      return QQ - Math.floor(QQ / 6)
    }

    function rQ(QQ, WQ) {
      const XQ = Math.max(QQ, WQ);
      let wQ = 0;
      for (let qQ = -XQ; qQ <= XQ; qQ++)
        for (let TQ = -XQ; TQ <= XQ; TQ++)
          for (let zQ = -XQ; zQ <= XQ; zQ++) IQ(QQ, WQ, qQ, TQ, zQ) && wQ++;
      return wQ
    }

    function IQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = XQ * XQ + qQ * qQ;
      return QQ === WQ ? TQ + wQ * wQ <= QQ * QQ : QQ > WQ ? Math.abs(wQ) <= WQ && TQ + wQ * wQ <= QQ * QQ : TQ <= QQ * QQ && TQ + wQ * wQ <= WQ * WQ
    }
  },
  36777: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => bQ,
      f: () => RQ,
      i: () => AQ,
      j: () => cQ,
      m: () => iQ
    });
    var wQ = XQ(231),
      qQ = XQ(105),
      TQ = XQ(158),
      zQ = XQ(333),
      sQ = XQ(4703),
      FQ = XQ(693),
      PQ = XQ(4710),
      gQ = XQ(36785),
      JQ = XQ(36788);
    const rQ = 1048576,
      IQ = 1024 * rQ,
      jQ = 400 * rQ,
      BQ = 147456,
      yQ = .5,
      VQ = 2048,
      DQ = 1.5 * IQ,
      pQ = 768 * rQ;

    function GQ(QQ) {
      const {
        os: WQ,
        deviceMemory: XQ
      } = QQ;
      if ("ios" === WQ) switch ((0, zQ.i)(QQ)) {
        case "ipad_m":
          return {
            footprintBytes: UQ(gQ.d), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: pQ, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: DQ, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: pQ, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof XQ && Number.isFinite(XQ) && XQ > 0 ? {
        footprintBytes: XQ * IQ * yQ,
        basis: `memory-${XQ}`,
        namesLimit: !0
      } : "android" === WQ ? {
        footprintBytes: pQ,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: UQ(gQ.i),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function UQ(QQ) {
      return jQ + QQ * BQ
    }

    function bQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lQ(),
        WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TQ.siteUsed;
      if ("android" !== QQ.os || "mobileAndroid" === WQ) return !0;
      const {
        footprintBytes: XQ,
        basis: wQ
      } = GQ(QQ);
      return "android" === wQ || XQ > 2 * IQ
    }

    function vQ(QQ, WQ, XQ) {
      var qQ, TQ, zQ;
      let {
        footprintBytes: sQ,
        basis: FQ,
        namesLimit: JQ
      } = GQ(QQ);
      if (XQ) {
        const QQ = Math.min(sQ, UQ(gQ.d));
        sQ = jQ + Math.max(0, QQ - jQ) / 2, FQ += "+killed", JQ = !0
      }
      null !== WQ && UQ(WQ) < sQ && (sQ = UQ(WQ), FQ += "+learned", JQ = !0), FQ += (0, PQ.u)(null !== (qQ = QQ.x32) && void 0 !== qQ ? qQ : null), "fix" === QQ.x32 && UQ(VQ) < sQ && (sQ = UQ(VQ), JQ = !0);
      const rQ = function(QQ) {
          const WQ = Math.floor((QQ - jQ) / BQ);
          return Math.min(gQ.d, Math.max(gQ.h, WQ))
        }(sQ),
        IQ = JQ && rQ < gQ.d ? Math.min(rQ, gQ.f) : rQ,
        yQ = (0, gQ.o)(IQ);
      return {
        footprintBytes: sQ,
        shedFootprintBytes: JQ ? Math.max(sQ, UQ(IQ)) : null,
        chunkCap: IQ,
        maxHorizDistance: null !== (TQ = null === yQ || void 0 === yQ ? void 0 : yQ.horizontal) && void 0 !== TQ ? TQ : wQ.h.maxChunkHorizAddDistance,
        maxVertDistance: null !== (zQ = null === yQ || void 0 === yQ ? void 0 : yQ.vertical) && void 0 !== zQ ? zQ : wQ.h.maxChunkVertAddDistance,
        basis: FQ
      }
    }
    let dQ = null,
      HQ = null,
      aQ = null;

    function lQ() {
      var QQ;
      return dQ ??= {
        os: (0, qQ.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, zQ.m)()
      }, {
        ...dQ,
        x32: null !== (QQ = (0, PQ.r)()) && void 0 !== QQ ? QQ : void 0
      }
    }

    function hQ() {
      return vQ(lQ(), (0, sQ.e)(), (0, FQ.I)("wasm").length > 0)
    }

    function iQ() {
      return aQ ??= (0, JQ.o)(vQ(lQ(), null, !1).chunkCap), aQ
    }

    function cQ() {
      return HQ ??= hQ(), HQ
    }

    function AQ() {
      var QQ;
      return (null !== (QQ = HQ) && void 0 !== QQ ? QQ : hQ()).basis
    }

    function RQ(QQ, WQ) {
      return QQ.setChunkCap(WQ.chunkCap)
    }
  },
  36788: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => aQ,
      e: () => UQ,
      g: () => JQ,
      k: () => bQ,
      o: () => DQ,
      q: () => dQ,
      v: () => HQ,
      z: () => rQ
    });
    var wQ = XQ(36559),
      qQ = XQ(36785);
    const TQ = 64 * wQ.d,
      zQ = 40 * wQ.g,
      sQ = 36 * wQ.g,
      FQ = 20 * wQ.g,
      PQ = 2 * wQ.g,
      gQ = 5 * wQ.g;

    function JQ(QQ) {
      return "footprint" !== QQ && "gcPressure" !== QQ
    }

    function rQ(QQ) {
      return JQ(QQ) ? "wasm memory was refused" : "gcPressure" === QQ ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const IQ = 2 * wQ.g,
      jQ = 4 * wQ.g,
      BQ = 35 * wQ.g + IQ + jQ,
      yQ = 6.5 * wQ.g,
      VQ = 132.5 * wQ.d;

    function DQ(QQ) {
      const WQ = yQ + (0, qQ.l)(QQ) + QQ * VQ;
      return Math.ceil((2 * BQ + WQ) / TQ) * TQ
    }
    DQ(qQ.d), wQ.g, wQ.g, wQ.g;
    const pQ = {
        targetBytes: zQ,
        leastBytes: FQ
      },
      GQ = {
        targetBytes: sQ,
        leastBytes: FQ
      };

    function UQ(QQ) {
      return {
        targetBytes: QQ,
        leastBytes: 0
      }
    }

    function bQ(QQ) {
      return QQ >= qQ.d ? pQ : GQ
    }
    const vQ = 2 * TQ;

    function dQ(QQ, WQ, XQ) {
      return QQ + WQ + vQ > XQ
    }
    const HQ = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? QQ => {
        requestIdleCallback(QQ)
      } : null
    };
    class aQ {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HQ;
        this.memory = QQ, this.readPeakStoredChunks = WQ, this.onError = XQ, this.clock = wQ, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(QQ, WQ, XQ) {
        this.shedding = {
          shed: QQ,
          nI: WQ,
          readDistanceInUse: XQ
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(QQ) {
        this.footprint = QQ
      }
      setGcPressure(QQ) {
        this.gcPressure = {
          highEpisode: QQ,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(QQ) {
        this.ceilingBytes = QQ, this.call((() => {
          this.memory.setCeiling(QQ)
        }), void 0)
      }
      ceilingMayRefuse(QQ, WQ) {
        var XQ;
        return dQ(this.memory.memoryBytes(), QQ, null !== (XQ = this.ceilingBytes) && void 0 !== XQ ? XQ : WQ)
      }
      reserveAtJoin(QQ) {
        let {
          targetBytes: WQ,
          leastBytes: XQ
        } = QQ;
        const wQ = this.memory.memoryBytes(),
          qQ = wQ + XQ,
          TQ = Math.max(WQ + (this.ballastOn() ? gQ : 0), qQ),
          zQ = this.call((() => this.memory.reserveUpFront(TQ) ? "target" : TQ > qQ && this.memory.reserveUpFront(qQ) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== zQ) {
          const QQ = "least" === zQ ? `took ${qQ} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${TQ} bytes was refused at ${wQ} bytes; ${QQ}`)
        }
        return this.joinReserveTaken = zQ, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== zQ && this.shedFor("joinReserve"), "none" !== zQ
      }
      afterFrame() {
        if (this.stopped) return;
        const QQ = this.clock.now(),
          WQ = null !== this.stepsHeldUntil && QQ >= this.stepsHeldUntil;
        if (WQ && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && QQ >= this.ballastCheckAt && (this.takeBallast(QQ), this.stopped)) return;
        const XQ = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          wQ = WQ && "now" === XQ ? "none" : XQ,
          {
            requestIdle: qQ
          } = this.clock;
        "now" === wQ || null !== this.pendingSince && QQ - this.pendingSince >= 500 ? this.step() : "idle" === wQ && null === this.pendingSince && (null === qQ ? this.step() : (this.pendingSince = QQ, qQ((() => {
          null !== this.pendingSince && this.step()
        })))), QQ - this.statsAt >= 1e3 && (this.statsAt = QQ, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(QQ))
      }
      refreshStats() {
        this.call((() => {
          var QQ, WQ;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (WQ = this.shedding.readDistanceInUse()) && void 0 !== WQ ? WQ : this.distanceInUse);
          null === (QQ = this.footprint) || void 0 === QQ || QQ.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(QQ, WQ) {
        this.noteWorker(`Mesh${QQ}`, WQ)
      }
      meshWorkerGone(QQ) {
        this.workerGone(`Mesh${QQ}`)
      }
      noteWorldgen(QQ) {
        this.noteWorker("Worldgen", QQ)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(QQ, WQ) {
        const XQ = this.workers.get(QQ);
        null !== XQ && void 0 !== XQ && XQ.gone && (this.replacedRefusals.reserves += XQ.stats.reservesRefused, this.replacedRefusals.allocations += XQ.stats.allocationsRefused), this.workers.set(QQ, {
          stats: WQ,
          gone: !1
        })
      }
      workerGone(QQ) {
        const WQ = this.workers.get(QQ);
        WQ && (WQ.gone = !0)
      }
      details() {
        var QQ, WQ;
        const XQ = this.memory.memoryBytes(),
          qQ = {
            wasmMemoryNow: `${(0,wQ.n)(XQ)} MiB`,
            wasmMemoryMiB: String(Math.floor(XQ / wQ.g))
          };
        null !== this.joinReserveTaken && (qQ.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (qQ.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const TQ = this.main;
        if (TQ) {
          qQ.wasmMemoryMain = lQ(TQ);
          const QQ = Math.max(0, TQ.peakLiveBytes - this.ballastPeakBytes),
            WQ = 0 === this.peakStoredChunks ? "-" : (QQ / this.peakStoredChunks / wQ.d).toFixed(1);
          qQ.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${WQ} KiB`
        }
        for (const [wQ, {
            stats: sQ,
            gone: FQ
          }] of this.workers) qQ[`wasmMemory${wQ}`] = lQ(sQ) + (FQ ? " (gone)" : "");
        const zQ = null !== (QQ = null === (WQ = this.footprint) || void 0 === WQ ? void 0 : WQ.describe()) && void 0 !== QQ ? QQ : null;
        return null !== zQ && (qQ.wasmMemoryFootprint = zQ), qQ
      }
      pageKillSnapshot() {
        var QQ, WQ, XQ, qQ, TQ;
        let zQ = (null !== (QQ = null === (WQ = this.main) || void 0 === WQ ? void 0 : WQ.reservesRefused) && void 0 !== QQ ? QQ : 0) + this.replacedRefusals.reserves,
          sQ = (null !== (XQ = null === (qQ = this.main) || void 0 === qQ ? void 0 : qQ.allocationsRefused) && void 0 !== XQ ? XQ : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: wQ
          }
          of this.workers.values()) zQ += wQ.reservesRefused, sQ += wQ.allocationsRefused;
        return {
          wasmMainMiB: Number((0, wQ.n)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, wQ.n)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: zQ,
          refusedAllocations: sQ,
          sheds: this.sheds,
          ...null === (TQ = this.footprint) || void 0 === TQ ? void 0 : TQ.snapshot()
        }
      }
      workersMemoryBytes() {
        let QQ = 0;
        for (const {
            stats: WQ,
            gone: XQ
          }
          of this.workers.values()) QQ += XQ ? 0 : WQ.memoryBytes;
        return QQ
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(QQ) {
        const WQ = this.gcPressure;
        if (null === WQ) return;
        if (null !== WQ.nextAt || "undefined" !== typeof document && document.hidden || (WQ.nextAt = QQ + 6e4), null === WQ.nextAt || QQ < WQ.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const XQ = WQ.highEpisode();
        null !== XQ && XQ !== WQ.shedEpisode && (WQ.shedEpisode = XQ, WQ.nextAt = QQ + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(PQ)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(QQ) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = QQ + 1e3;
        const WQ = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, WQ)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(QQ) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${QQ}: frames grow on demand from here`)
      }
      shedFor(QQ) {
        const {
          shedding: WQ
        } = this;
        if (null === WQ) return;
        this.pendingSince = null;
        const XQ = this.call((() => WQ.shed(QQ)), null);
        if (this.stopped) return;
        if (null === XQ) return void(JQ(QQ) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = XQ, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const wQ = "gcPressure" === QQ ? ++this.gcSheds : this.sheds - this.gcSheds;
        WQ.nI(QQ, wQ, this.details())
      }
      call(QQ, WQ) {
        if (this.stopped) return WQ;
        try {
          return QQ()
        } catch (XQ) {
          return this.stop(), this.onError(XQ), WQ
        }
      }
    }

    function lQ(QQ) {
      const WQ = (QQ, WQ) => `${QQ}/${(0,wQ.n)(WQ)}`;
      return `memory ${(0,wQ.n)(QQ.memoryBytes)} live ${(0,wQ.n)(QQ.liveBytes)} peak ${(0,wQ.n)(QQ.peakLiveBytes)} unused ${(0,wQ.n)(QQ.unusedBytes)} ceiling ${(0,wQ.n)(QQ.ceilingBytes)} MiB; grows upFront ${WQ(QQ.grows.upFront,QQ.grownBytes.upFront)} ahead ${WQ(QQ.grows.ahead,QQ.grownBytes.ahead)} inFrame ${WQ(QQ.grows.onDemandInFrame,QQ.grownBytes.onDemandInFrame)} other ${WQ(QQ.grows.onDemand,QQ.grownBytes.onDemand)}; refused reserves ${QQ.reservesRefused} allocations ${QQ.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);