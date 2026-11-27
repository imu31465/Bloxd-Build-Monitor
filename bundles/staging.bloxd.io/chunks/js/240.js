export const id = 240;
export const ids = [240];
export const modules = {
  37640: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      g: () => tR,
      j: () => uR
    });
    var yR = GR(1825);
    class tR extends Error {
      constructor(RR) {
        super("The game server didn't answer in time"), this.leg = RR, this.name = "SeatRequestTimedOut"
      }
    }
    const uR = new class {
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
        for (const RR of this.waiting) RR()
      }
      remove() {
        this.count--
      }
      whenSlow(RR) {
        return this.count > 0 || RR.aborted ? Promise.resolve(!RR.aborted) : new Promise((JR => {
          const GR = () => {
            this.waiting.delete(GR), JR(!RR.aborted)
          };
          this.waiting.add(GR), RR.addEventListener("abort", GR, {
            once: !0
          })
        }))
      }
    };
    class ZR {
      constructor(RR) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new yR.e(45e3, RR), this.slow = new yR.e(8e3, (() => {
          this.countedSlow = !0, uR.add()
        }))
      }
      restart() {
        uR.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), uR.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), uR.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, uR.remove())
      }
    }
  },
  37178: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      f: () => tR,
      g: () => uR,
      k: () => ZR
    });
    const yR = 1024,
      tR = 1024 * yR;

    function uR(RR) {
      return 2 ** Math.floor(Math.log2(Math.max(1, RR / tR)))
    }

    function ZR(RR) {
      return (RR / tR).toFixed(1)
    }
  },
  37627: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      f: () => iR,
      j: () => qR,
      l: () => ZR,
      m: () => fR,
      n: () => VR,
      o: () => wR
    });
    var yR = GR(203);
    const tR = 32 * GR(37178).f,
      uR = 6144,
      ZR = 4608,
      qR = 512,
      iR = function() {
        const RR = wR(yR.g.maxChunkHorizAddDistance + 1, yR.g.maxChunkVertAddDistance + 1);
        let JR = RR;
        for (; KR(JR) < RR;) JR++;
        return JR
      }();

    function fR(RR) {
      return Math.floor(tR * RR / uR)
    }

    function VR(RR) {
      const JR = KR(RR);
      let GR = yR.g.maxChunkHorizAddDistance,
        tR = yR.g.maxChunkVertAddDistance;
      if (wR(GR + 1, tR + 1) <= JR) return null;
      for (; wR(GR + 1, tR + 1) > JR && (GR > 0 || tR > 0);) GR > tR ? GR-- : tR--;
      return {
        horizontal: GR,
        vertical: tR
      }
    }

    function KR(RR) {
      return RR - Math.floor(RR / 6)
    }

    function wR(RR, JR) {
      const GR = Math.max(RR, JR);
      let yR = 0;
      for (let tR = -GR; tR <= GR; tR++)
        for (let uR = -GR; uR <= GR; uR++)
          for (let ZR = -GR; ZR <= GR; ZR++) rR(RR, JR, tR, uR, ZR) && yR++;
      return yR
    }

    function rR(RR, JR, GR, yR, tR) {
      const uR = GR * GR + tR * tR;
      return RR === JR ? uR + yR * yR <= RR * RR : RR > JR ? Math.abs(yR) <= JR && uR + yR * yR <= RR * RR : uR <= RR * RR && uR + yR * yR <= JR * JR
    }
  },
  37622: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => BR,
      i: () => SR,
      k: () => zR,
      n: () => mR,
      r: () => NR,
      t: () => IR,
      u: () => cR
    });
    var yR = GR(203),
      tR = GR(103),
      uR = GR(134),
      ZR = GR(304),
      qR = GR(5174),
      iR = GR(715),
      fR = GR(741),
      VR = GR(5180),
      KR = GR(5191),
      wR = GR(37627),
      rR = GR(37633);
    const eR = 1048576,
      aR = 1024 * eR,
      LR = 400 * eR,
      nR = 147456,
      UR = .5,
      WR = 2048,
      AR = 1.5 * aR,
      CR = 768 * eR;

    function XR(RR) {
      const {
        os: JR,
        deviceMemory: GR
      } = RR;
      if ("ios" === JR) switch ((0, ZR.e)(RR)) {
        case "ipad_m":
          return {
            footprintBytes: MR(wR.c), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: CR, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: AR, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: CR, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof GR && Number.isFinite(GR) && GR > 0 ? {
        footprintBytes: GR * aR * UR,
        basis: `memory-${GR}`,
        namesLimit: !0
      } : "android" === JR ? {
        footprintBytes: CR,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: MR(wR.l),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function MR(RR) {
      return LR + RR * nR
    }

    function BR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OR(),
        JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uR.siteUsed;
      if ("android" !== RR.os || "mobileAndroid" === JR) return !0;
      const {
        footprintBytes: GR,
        basis: yR
      } = XR(RR);
      return "android" === yR || GR > 2 * aR
    }

    function lR(RR) {
      const JR = Math.min(RR, MR(wR.c));
      return LR + Math.max(0, JR - LR) / 2
    }

    function pR(RR, JR, GR) {
      var tR, uR, ZR, qR;
      let iR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
          footprintBytes: fR,
          basis: rR,
          namesLimit: eR
        } = XR(RR);
      GR && (fR = lR(fR), rR += "+killed", eR = !0), null !== JR && MR(JR) < fR && (fR = MR(JR), rR += "+learned", eR = !0), rR += (0, KR.G)(null !== (tR = RR.x32) && void 0 !== tR ? tR : null) + (0, VR.g)(null !== (uR = RR.lowRam) && void 0 !== uR ? uR : null), "fix" === RR.x32 && MR(WR) < fR && (fR = MR(WR), eR = !0), iR && (fR = lR(fR), rR += "+refused", eR = !0);
      const aR = function(RR) {
          const JR = Math.floor((RR - LR) / nR);
          return Math.min(wR.c, Math.max(wR.j, JR))
        }(fR),
        UR = eR && aR < wR.c ? Math.min(aR, wR.f) : aR,
        AR = (0, wR.n)(UR);
      return {
        footprintBytes: fR,
        shedFootprintBytes: eR ? Math.max(fR, MR(UR)) : null,
        chunkCap: UR,
        maxHorizDistance: null !== (ZR = null === AR || void 0 === AR ? void 0 : AR.horizontal) && void 0 !== ZR ? ZR : yR.g.maxChunkHorizAddDistance,
        maxVertDistance: null !== (qR = null === AR || void 0 === AR ? void 0 : AR.vertical) && void 0 !== qR ? qR : yR.g.maxChunkVertAddDistance,
        basis: rR
      }
    }
    let gR = null,
      bR = null,
      vR = null;

    function OR() {
      var RR, JR;
      return gR ??= {
        os: (0, tR.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, ZR.g)()
      }, {
        ...gR,
        x32: null !== (RR = (0, KR.C)()) && void 0 !== RR ? RR : void 0,
        lowRam: null !== (JR = (0, VR.e)()) && void 0 !== JR ? JR : void 0
      }
    }

    function xR() {
      return pR(OR(), (0, qR.e)(), (0, iR.E)("wasm").length > 0, cR())
    }

    function NR() {
      return vR ??= (0, rR.s)(pR(OR(), null, !1, cR()).chunkCap), vR
    }
    const DR = "wasmMemoryRecord",
      HR = {
        halvedAt: null,
        reloadSpent: !1
      };

    function oR() {
      let RR = null;
      try {
        var JR;
        RR = JSON.parse(null !== (JR = (0, fR.o)((0, fR.t)(), DR)) && void 0 !== JR ? JR : "null")
      } catch {
        return HR
      }
      if ("object" !== typeof RR || null === RR) return HR;
      const {
        halvedAt: GR,
        reloadSpent: yR
      } = RR;
      return {
        halvedAt: "number" === typeof GR && Number.isFinite(GR) ? GR : null,
        reloadSpent: !0 === yR
      }
    }

    function cR() {
      return null !== oR().halvedAt
    }

    function PR(RR) {
      const JR = (0, fR.t)(),
        GR = JSON.stringify(RR);
      try {
        null === JR || void 0 === JR || JR.setItem(DR, GR)
      } catch {
        return !1
      }
      return (0, fR.o)(JR, DR) === GR
    }

    function IR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const GR = oR();
      return null === GR.halvedAt ? PR({
        halvedAt: RR,
        reloadSpent: JR
      }) ? (vR = null, bR = null, "halve") : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent") : GR.reloadSpent ? "spent" : PR({
        ...GR,
        reloadSpent: !0
      }) ? "reload" : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent")
    }

    function mR() {
      return bR ??= xR(), bR
    }

    function zR() {
      var RR;
      return (null !== (RR = bR) && void 0 !== RR ? RR : xR()).basis
    }

    function SR(RR, JR) {
      return RR.setChunkCap(JR.chunkCap)
    }
  },
  37633: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => lR,
      D: () => wR,
      e: () => pR,
      k: () => CR,
      o: () => KR,
      p: () => XR,
      s: () => UR,
      v: () => BR
    });
    var yR = GR(37178),
      tR = GR(37627);
    const uR = 64 * yR.b,
      ZR = 40 * yR.f,
      qR = 36 * yR.f,
      iR = 20 * yR.f,
      fR = 2 * yR.f,
      VR = 5 * yR.f;

    function KR(RR) {
      return "footprint" !== RR && "gcPressure" !== RR
    }

    function wR(RR) {
      return KR(RR) ? "wasm memory was refused" : "gcPressure" === RR ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const rR = 2 * yR.f,
      eR = 4 * yR.f,
      aR = 35 * yR.f + rR + eR,
      LR = 6.5 * yR.f,
      nR = 132.5 * yR.b;

    function UR(RR) {
      const JR = LR + (0, tR.m)(RR) + RR * nR;
      return Math.ceil((2 * aR + JR) / uR) * uR
    }
    UR(tR.c), yR.f, yR.f, yR.f;
    const WR = {
        targetBytes: ZR,
        leastBytes: iR
      },
      AR = {
        targetBytes: qR,
        leastBytes: iR
      };

    function CR(RR) {
      return {
        targetBytes: RR,
        leastBytes: 0
      }
    }

    function XR(RR) {
      return RR >= tR.c ? WR : AR
    }
    const MR = 2 * uR;

    function BR(RR, JR, GR) {
      return RR + JR + MR > GR
    }
    const lR = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? RR => {
        requestIdleCallback(RR)
      } : null
    };
    class pR {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lR;
        this.memory = RR, this.readPeakStoredChunks = JR, this.onError = GR, this.clock = yR, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(RR, JR, GR) {
        this.shedding = {
          shed: RR,
          fK: JR,
          readDistanceInUse: GR
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(RR) {
        this.footprint = RR
      }
      setGcPressure(RR) {
        this.gcPressure = {
          highEpisode: RR,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(RR) {
        this.ceilingBytes = RR, this.call((() => {
          this.memory.setCeiling(RR)
        }), void 0)
      }
      ceilingMayRefuse(RR, JR) {
        var GR;
        return BR(this.memory.memoryBytes(), RR, null !== (GR = this.ceilingBytes) && void 0 !== GR ? GR : JR)
      }
      reserveAtJoin(RR) {
        let {
          targetBytes: JR,
          leastBytes: GR
        } = RR;
        const yR = this.memory.memoryBytes(),
          tR = yR + GR,
          uR = Math.max(JR + (this.ballastOn() ? VR : 0), tR),
          ZR = this.call((() => this.memory.reserveUpFront(uR) ? "target" : uR > tR && this.memory.reserveUpFront(tR) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== ZR) {
          const RR = "least" === ZR ? `took ${tR} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${uR} bytes was refused at ${yR} bytes; ${RR}`)
        }
        return this.joinReserveTaken = ZR, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== ZR && this.shedFor("joinReserve"), "none" !== ZR
      }
      afterFrame() {
        if (this.stopped) return;
        const RR = this.clock.now(),
          JR = null !== this.stepsHeldUntil && RR >= this.stepsHeldUntil;
        if (JR && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && RR >= this.ballastCheckAt && (this.takeBallast(RR), this.stopped)) return;
        const GR = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          yR = JR && "now" === GR ? "none" : GR,
          {
            requestIdle: tR
          } = this.clock;
        "now" === yR || null !== this.pendingSince && RR - this.pendingSince >= 500 ? this.step() : "idle" === yR && null === this.pendingSince && (null === tR ? this.step() : (this.pendingSince = RR, tR((() => {
          null !== this.pendingSince && this.step()
        })))), RR - this.statsAt >= 1e3 && (this.statsAt = RR, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(RR))
      }
      refreshStats() {
        this.call((() => {
          var RR, JR;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (JR = this.shedding.readDistanceInUse()) && void 0 !== JR ? JR : this.distanceInUse);
          null === (RR = this.footprint) || void 0 === RR || RR.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(RR, JR) {
        this.noteWorker(`Mesh${RR}`, JR)
      }
      meshWorkerGone(RR) {
        this.workerGone(`Mesh${RR}`)
      }
      noteWorldgen(RR) {
        this.noteWorker("Worldgen", RR)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(RR, JR) {
        const GR = this.workers.get(RR);
        null !== GR && void 0 !== GR && GR.gone && (this.replacedRefusals.reserves += GR.stats.reservesRefused, this.replacedRefusals.allocations += GR.stats.allocationsRefused), this.workers.set(RR, {
          stats: JR,
          gone: !1
        })
      }
      workerGone(RR) {
        const JR = this.workers.get(RR);
        JR && (JR.gone = !0)
      }
      details() {
        var RR, JR;
        const GR = this.memory.memoryBytes(),
          tR = {
            wasmMemoryNow: `${(0,yR.k)(GR)} MiB`,
            wasmMemoryMiB: String(Math.floor(GR / yR.f))
          };
        null !== this.joinReserveTaken && (tR.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (tR.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const uR = this.main;
        if (uR) {
          tR.wasmMemoryMain = gR(uR);
          const RR = Math.max(0, uR.peakLiveBytes - this.ballastPeakBytes),
            JR = 0 === this.peakStoredChunks ? "-" : (RR / this.peakStoredChunks / yR.b).toFixed(1);
          tR.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${JR} KiB`
        }
        for (const [yR, {
            stats: qR,
            gone: iR
          }] of this.workers) tR[`wasmMemory${yR}`] = gR(qR) + (iR ? " (gone)" : "");
        const ZR = null !== (RR = null === (JR = this.footprint) || void 0 === JR ? void 0 : JR.describe()) && void 0 !== RR ? RR : null;
        return null !== ZR && (tR.wasmMemoryFootprint = ZR), tR
      }
      pageKillSnapshot() {
        var RR, JR, GR, tR, uR;
        let ZR = (null !== (RR = null === (JR = this.main) || void 0 === JR ? void 0 : JR.reservesRefused) && void 0 !== RR ? RR : 0) + this.replacedRefusals.reserves,
          qR = (null !== (GR = null === (tR = this.main) || void 0 === tR ? void 0 : tR.allocationsRefused) && void 0 !== GR ? GR : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: yR
          }
          of this.workers.values()) ZR += yR.reservesRefused, qR += yR.allocationsRefused;
        return {
          wasmMainMiB: Number((0, yR.k)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, yR.k)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: ZR,
          refusedAllocations: qR,
          sheds: this.sheds,
          ...null === (uR = this.footprint) || void 0 === uR ? void 0 : uR.snapshot()
        }
      }
      workersMemoryBytes() {
        let RR = 0;
        for (const {
            stats: JR,
            gone: GR
          }
          of this.workers.values()) RR += GR ? 0 : JR.memoryBytes;
        return RR
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(RR) {
        const JR = this.gcPressure;
        if (null === JR) return;
        if (null !== JR.nextAt || "undefined" !== typeof document && document.hidden || (JR.nextAt = RR + 6e4), null === JR.nextAt || RR < JR.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const GR = JR.highEpisode();
        null !== GR && GR !== JR.shedEpisode && (JR.shedEpisode = GR, JR.nextAt = RR + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(fR)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(RR) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = RR + 1e3;
        const JR = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, JR)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(RR) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${RR}: frames grow on demand from here`)
      }
      shedFor(RR) {
        const {
          shedding: JR
        } = this;
        if (null === JR) return;
        this.pendingSince = null;
        const GR = this.call((() => JR.shed(RR)), null);
        if (this.stopped) return;
        if (null === GR) return void(KR(RR) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = GR, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const yR = "gcPressure" === RR ? ++this.gcSheds : this.sheds - this.gcSheds;
        JR.fK(RR, yR, this.details())
      }
      call(RR, JR) {
        if (this.stopped) return JR;
        try {
          return RR()
        } catch (GR) {
          return this.stop(), this.onError(GR), JR
        }
      }
    }

    function gR(RR) {
      const JR = (RR, JR) => `${RR}/${(0,yR.k)(JR)}`;
      return `memory ${(0,yR.k)(RR.memoryBytes)} live ${(0,yR.k)(RR.liveBytes)} peak ${(0,yR.k)(RR.peakLiveBytes)} unused ${(0,yR.k)(RR.unusedBytes)} ceiling ${(0,yR.k)(RR.ceilingBytes)} MiB; grows upFront ${JR(RR.grows.upFront,RR.grownBytes.upFront)} ahead ${JR(RR.grows.ahead,RR.grownBytes.ahead)} inFrame ${JR(RR.grows.onDemandInFrame,RR.grownBytes.onDemandInFrame)} other ${JR(RR.grows.onDemand,RR.grownBytes.onDemand)}; refused reserves ${RR.reservesRefused} allocations ${RR.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);