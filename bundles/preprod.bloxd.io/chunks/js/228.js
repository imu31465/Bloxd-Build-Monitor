export const id = 228;
export const ids = [228];
export const modules = {
  37201: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      c: () => yU,
      e: () => QU
    });
    var cU = zU(1877);
    class yU extends Error {
      constructor(UU) {
        super("The game server didn't answer in time"), this.leg = UU, this.name = "SeatRequestTimedOut"
      }
    }
    const QU = new class {
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
        for (const UU of this.waiting) UU()
      }
      remove() {
        this.count--
      }
      whenSlow(UU) {
        return this.count > 0 || UU.aborted ? Promise.resolve(!UU.aborted) : new Promise((XU => {
          const zU = () => {
            this.waiting.delete(zU), XU(!UU.aborted)
          };
          this.waiting.add(zU), UU.addEventListener("abort", zU, {
            once: !0
          })
        }))
      }
    };
    class AU {
      constructor(UU) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new cU.d(45e3, UU), this.slow = new cU.d(8e3, (() => {
          this.countedSlow = !0, QU.add()
        }))
      }
      restart() {
        QU.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), QU.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), QU.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, QU.remove())
      }
    }
  },
  36977: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU,
      f: () => yU,
      g: () => QU,
      i: () => AU
    });
    const cU = 1024,
      yU = 1024 * cU;

    function QU(UU) {
      return 2 ** Math.floor(Math.log2(Math.max(1, UU / yU)))
    }

    function AU(UU) {
      return (UU / yU).toFixed(1)
    }
  },
  37188: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      g: () => oU,
      j: () => FU,
      m: () => AU,
      p: () => DU,
      s: () => EU,
      t: () => NU
    });
    var cU = zU(212);
    const yU = 32 * zU(36977).f,
      QU = 6144,
      AU = 4608,
      FU = 512,
      oU = function() {
        const UU = NU(cU.f.maxChunkHorizAddDistance + 1, cU.f.maxChunkVertAddDistance + 1);
        let XU = UU;
        for (; YU(XU) < UU;) XU++;
        return XU
      }();

    function DU(UU) {
      return Math.floor(yU * UU / QU)
    }

    function EU(UU) {
      const XU = YU(UU);
      let zU = cU.f.maxChunkHorizAddDistance,
        yU = cU.f.maxChunkVertAddDistance;
      if (NU(zU + 1, yU + 1) <= XU) return null;
      for (; NU(zU + 1, yU + 1) > XU && (zU > 0 || yU > 0);) zU > yU ? zU-- : yU--;
      return {
        horizontal: zU,
        vertical: yU
      }
    }

    function YU(UU) {
      return UU - Math.floor(UU / 6)
    }

    function NU(UU, XU) {
      const zU = Math.max(UU, XU);
      let cU = 0;
      for (let yU = -zU; yU <= zU; yU++)
        for (let QU = -zU; QU <= zU; QU++)
          for (let AU = -zU; AU <= zU; AU++) IU(UU, XU, yU, QU, AU) && cU++;
      return cU
    }

    function IU(UU, XU, zU, cU, yU) {
      const QU = zU * zU + yU * yU;
      return UU === XU ? QU + cU * cU <= UU * UU : UU > XU ? Math.abs(cU) <= XU && QU + cU * cU <= UU * UU : QU <= UU * UU && QU + cU * cU <= XU * XU
    }
  },
  37186: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => WU,
      d: () => sU,
      h: () => VU,
      j: () => vU,
      k: () => SU,
      l: () => MU,
      n: () => iU
    });
    var cU = zU(212),
      yU = zU(97),
      QU = zU(142),
      AU = zU(298),
      FU = zU(4796),
      oU = zU(691),
      DU = zU(722),
      EU = zU(4800),
      YU = zU(4809),
      NU = zU(37188),
      IU = zU(37197);
    const pU = 1048576,
      aU = 1024 * pU,
      tU = 400 * pU,
      gU = 147456,
      kU = .5,
      GU = 2048,
      BU = 1.5 * aU,
      ZU = 768 * pU;

    function RU(UU) {
      const {
        os: XU,
        deviceMemory: zU
      } = UU;
      if ("ios" === XU) switch ((0, AU.c)(UU)) {
        case "ipad_m":
          return {
            footprintBytes: PU(NU.d), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: ZU, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: BU, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: ZU, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof zU && Number.isFinite(zU) && zU > 0 ? {
        footprintBytes: zU * aU * kU,
        basis: `memory-${zU}`,
        namesLimit: !0
      } : "android" === XU ? {
        footprintBytes: ZU,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: PU(NU.m),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function PU(UU) {
      return tU + UU * gU
    }

    function WU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qU(),
        XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QU.siteUsed;
      if ("android" !== UU.os || "mobileAndroid" === XU) return !0;
      const {
        footprintBytes: zU,
        basis: cU
      } = RU(UU);
      return "android" === cU || zU > 2 * aU
    }

    function dU(UU) {
      const XU = Math.min(UU, PU(NU.d));
      return tU + Math.max(0, XU - tU) / 2
    }

    function LU(UU, XU, zU) {
      var yU, QU, AU, FU;
      let oU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
          footprintBytes: DU,
          basis: IU,
          namesLimit: pU
        } = RU(UU);
      zU && (DU = dU(DU), IU += "+killed", pU = !0), null !== XU && PU(XU) < DU && (DU = PU(XU), IU += "+learned", pU = !0), IU += (0, YU.F)(null !== (yU = UU.x32) && void 0 !== yU ? yU : null) + (0, EU.h)(null !== (QU = UU.lowRam) && void 0 !== QU ? QU : null), "fix" === UU.x32 && PU(GU) < DU && (DU = PU(GU), pU = !0), oU && (DU = dU(DU), IU += "+refused", pU = !0);
      const aU = function(UU) {
          const XU = Math.floor((UU - tU) / gU);
          return Math.min(NU.d, Math.max(NU.j, XU))
        }(DU),
        kU = pU && aU < NU.d ? Math.min(aU, NU.g) : aU,
        BU = (0, NU.s)(kU);
      return {
        footprintBytes: DU,
        shedFootprintBytes: pU ? Math.max(DU, PU(kU)) : null,
        chunkCap: kU,
        maxHorizDistance: null !== (AU = null === BU || void 0 === BU ? void 0 : BU.horizontal) && void 0 !== AU ? AU : cU.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (FU = null === BU || void 0 === BU ? void 0 : BU.vertical) && void 0 !== FU ? FU : cU.f.maxChunkVertAddDistance,
        basis: IU
      }
    }
    let eU = null,
      CU = null,
      wU = null;

    function qU() {
      var UU, XU;
      return eU ??= {
        os: (0, yU.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, AU.f)()
      }, {
        ...eU,
        x32: null !== (UU = (0, YU.B)()) && void 0 !== UU ? UU : void 0,
        lowRam: null !== (XU = (0, EU.e)()) && void 0 !== XU ? XU : void 0
      }
    }

    function OU() {
      return LU(qU(), (0, FU.f)(), (0, oU.V)("wasm").length > 0, iU())
    }

    function SU() {
      return wU ??= (0, IU.r)(LU(qU(), null, !1, iU()).chunkCap), wU
    }
    const rU = "wasmMemoryRecord",
      uU = {
        halvedAt: null,
        reloadSpent: !1
      };

    function fU() {
      let UU = null;
      try {
        var XU;
        UU = JSON.parse(null !== (XU = (0, DU.p)((0, DU.w)(), rU)) && void 0 !== XU ? XU : "null")
      } catch {
        return uU
      }
      if ("object" !== typeof UU || null === UU) return uU;
      const {
        halvedAt: zU,
        reloadSpent: cU
      } = UU;
      return {
        halvedAt: "number" === typeof zU && Number.isFinite(zU) ? zU : null,
        reloadSpent: !0 === cU
      }
    }

    function iU() {
      return null !== fU().halvedAt
    }

    function HU(UU) {
      const XU = (0, DU.w)(),
        zU = JSON.stringify(UU);
      try {
        null === XU || void 0 === XU || XU.setItem(rU, zU)
      } catch {
        return !1
      }
      return (0, DU.p)(XU, rU) === zU
    }

    function MU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const zU = fU();
      return null === zU.halvedAt ? HU({
        halvedAt: UU,
        reloadSpent: XU
      }) ? (wU = null, CU = null, "halve") : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: on as the JS client"), "js") : zU.reloadSpent ? "js" : HU({
        ...zU,
        reloadSpent: !0
      }) ? "reload" : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: on as the JS client"), "js")
    }

    function vU() {
      return CU ??= OU(), CU
    }

    function VU() {
      var UU;
      return (null !== (UU = CU) && void 0 !== UU ? UU : OU()).basis
    }

    function sU(UU, XU) {
      return UU.setChunkCap(XU.chunkCap)
    }
  },
  37197: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => LU,
      j: () => ZU,
      k: () => YU,
      o: () => RU,
      r: () => kU,
      t: () => WU,
      x: () => dU,
      z: () => NU
    });
    var cU = zU(36977),
      yU = zU(37188);
    const QU = 64 * cU.e,
      AU = 40 * cU.f,
      FU = 36 * cU.f,
      oU = 20 * cU.f,
      DU = 2 * cU.f,
      EU = 5 * cU.f;

    function YU(UU) {
      return "footprint" !== UU && "gcPressure" !== UU
    }

    function NU(UU) {
      return YU(UU) ? "wasm memory was refused" : "gcPressure" === UU ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const IU = 2 * cU.f,
      pU = 4 * cU.f,
      aU = 35 * cU.f + IU + pU,
      tU = 6.5 * cU.f,
      gU = 132.5 * cU.e;

    function kU(UU) {
      const XU = tU + (0, yU.p)(UU) + UU * gU;
      return Math.ceil((2 * aU + XU) / QU) * QU
    }
    kU(yU.d), cU.f, cU.f, cU.f;
    const GU = {
        targetBytes: AU,
        leastBytes: oU
      },
      BU = {
        targetBytes: FU,
        leastBytes: oU
      };

    function ZU(UU) {
      return {
        targetBytes: UU,
        leastBytes: 0
      }
    }

    function RU(UU) {
      return UU >= yU.d ? GU : BU
    }
    const PU = 2 * QU;

    function WU(UU, XU, zU) {
      return UU + XU + PU > zU
    }
    const dU = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? UU => {
        requestIdleCallback(UU)
      } : null
    };
    class LU {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dU;
        this.memory = UU, this.readPeakStoredChunks = XU, this.onError = zU, this.clock = cU, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(UU, XU, zU) {
        this.shedding = {
          shed: UU,
          oY: XU,
          readDistanceInUse: zU
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(UU) {
        this.footprint = UU
      }
      setGcPressure(UU) {
        this.gcPressure = {
          highEpisode: UU,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(UU) {
        this.ceilingBytes = UU, this.call((() => {
          this.memory.setCeiling(UU)
        }), void 0)
      }
      ceilingMayRefuse(UU, XU) {
        var zU;
        return WU(this.memory.memoryBytes(), UU, null !== (zU = this.ceilingBytes) && void 0 !== zU ? zU : XU)
      }
      reserveAtJoin(UU) {
        let {
          targetBytes: XU,
          leastBytes: zU
        } = UU;
        const cU = this.memory.memoryBytes(),
          yU = cU + zU,
          QU = Math.max(XU + (this.ballastOn() ? EU : 0), yU),
          AU = this.call((() => this.memory.reserveUpFront(QU) ? "target" : QU > yU && this.memory.reserveUpFront(yU) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== AU) {
          const UU = "least" === AU ? `took ${yU} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${QU} bytes was refused at ${cU} bytes; ${UU}`)
        }
        return this.joinReserveTaken = AU, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== AU && this.shedFor("joinReserve"), "none" !== AU
      }
      afterFrame() {
        if (this.stopped) return;
        const UU = this.clock.now(),
          XU = null !== this.stepsHeldUntil && UU >= this.stepsHeldUntil;
        if (XU && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && UU >= this.ballastCheckAt && (this.takeBallast(UU), this.stopped)) return;
        const zU = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          cU = XU && "now" === zU ? "none" : zU,
          {
            requestIdle: yU
          } = this.clock;
        "now" === cU || null !== this.pendingSince && UU - this.pendingSince >= 500 ? this.step() : "idle" === cU && null === this.pendingSince && (null === yU ? this.step() : (this.pendingSince = UU, yU((() => {
          null !== this.pendingSince && this.step()
        })))), UU - this.statsAt >= 1e3 && (this.statsAt = UU, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(UU))
      }
      refreshStats() {
        this.call((() => {
          var UU, XU;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (XU = this.shedding.readDistanceInUse()) && void 0 !== XU ? XU : this.distanceInUse);
          null === (UU = this.footprint) || void 0 === UU || UU.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(UU, XU) {
        this.noteWorker(`Mesh${UU}`, XU)
      }
      meshWorkerGone(UU) {
        this.workerGone(`Mesh${UU}`)
      }
      noteWorldgen(UU) {
        this.noteWorker("Worldgen", UU)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(UU, XU) {
        const zU = this.workers.get(UU);
        null !== zU && void 0 !== zU && zU.gone && (this.replacedRefusals.reserves += zU.stats.reservesRefused, this.replacedRefusals.allocations += zU.stats.allocationsRefused), this.workers.set(UU, {
          stats: XU,
          gone: !1
        })
      }
      workerGone(UU) {
        const XU = this.workers.get(UU);
        XU && (XU.gone = !0)
      }
      details() {
        var UU, XU;
        const zU = this.memory.memoryBytes(),
          yU = {
            wasmMemoryNow: `${(0,cU.i)(zU)} MiB`,
            wasmMemoryMiB: String(Math.floor(zU / cU.f))
          };
        null !== this.joinReserveTaken && (yU.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (yU.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const QU = this.main;
        if (QU) {
          yU.wasmMemoryMain = eU(QU);
          const UU = Math.max(0, QU.peakLiveBytes - this.ballastPeakBytes),
            XU = 0 === this.peakStoredChunks ? "-" : (UU / this.peakStoredChunks / cU.e).toFixed(1);
          yU.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${XU} KiB`
        }
        for (const [cU, {
            stats: FU,
            gone: oU
          }] of this.workers) yU[`wasmMemory${cU}`] = eU(FU) + (oU ? " (gone)" : "");
        const AU = null !== (UU = null === (XU = this.footprint) || void 0 === XU ? void 0 : XU.describe()) && void 0 !== UU ? UU : null;
        return null !== AU && (yU.wasmMemoryFootprint = AU), yU
      }
      pageKillSnapshot() {
        var UU, XU, zU, yU, QU;
        let AU = (null !== (UU = null === (XU = this.main) || void 0 === XU ? void 0 : XU.reservesRefused) && void 0 !== UU ? UU : 0) + this.replacedRefusals.reserves,
          FU = (null !== (zU = null === (yU = this.main) || void 0 === yU ? void 0 : yU.allocationsRefused) && void 0 !== zU ? zU : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: cU
          }
          of this.workers.values()) AU += cU.reservesRefused, FU += cU.allocationsRefused;
        return {
          wasmMainMiB: Number((0, cU.i)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, cU.i)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: AU,
          refusedAllocations: FU,
          sheds: this.sheds,
          ...null === (QU = this.footprint) || void 0 === QU ? void 0 : QU.snapshot()
        }
      }
      workersMemoryBytes() {
        let UU = 0;
        for (const {
            stats: XU,
            gone: zU
          }
          of this.workers.values()) UU += zU ? 0 : XU.memoryBytes;
        return UU
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(UU) {
        const XU = this.gcPressure;
        if (null === XU) return;
        if (null !== XU.nextAt || "undefined" !== typeof document && document.hidden || (XU.nextAt = UU + 6e4), null === XU.nextAt || UU < XU.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const zU = XU.highEpisode();
        null !== zU && zU !== XU.shedEpisode && (XU.shedEpisode = zU, XU.nextAt = UU + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(DU)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(UU) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = UU + 1e3;
        const XU = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, XU)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(UU) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${UU}: frames grow on demand from here`)
      }
      shedFor(UU) {
        const {
          shedding: XU
        } = this;
        if (null === XU) return;
        this.pendingSince = null;
        const zU = this.call((() => XU.shed(UU)), null);
        if (this.stopped) return;
        if (null === zU) return void(YU(UU) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = zU, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const cU = "gcPressure" === UU ? ++this.gcSheds : this.sheds - this.gcSheds;
        XU.oY(UU, cU, this.details())
      }
      call(UU, XU) {
        if (this.stopped) return XU;
        try {
          return UU()
        } catch (zU) {
          return this.stop(), this.onError(zU), XU
        }
      }
    }

    function eU(UU) {
      const XU = (UU, XU) => `${UU}/${(0,cU.i)(XU)}`;
      return `memory ${(0,cU.i)(UU.memoryBytes)} live ${(0,cU.i)(UU.liveBytes)} peak ${(0,cU.i)(UU.peakLiveBytes)} unused ${(0,cU.i)(UU.unusedBytes)} ceiling ${(0,cU.i)(UU.ceilingBytes)} MiB; grows upFront ${XU(UU.grows.upFront,UU.grownBytes.upFront)} ahead ${XU(UU.grows.ahead,UU.grownBytes.ahead)} inFrame ${XU(UU.grows.onDemandInFrame,UU.grownBytes.onDemandInFrame)} other ${XU(UU.grows.onDemand,UU.grownBytes.onDemand)}; refused reserves ${UU.reservesRefused} allocations ${UU.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);