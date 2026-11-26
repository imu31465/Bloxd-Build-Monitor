export const id = 234;
export const ids = [234];
export const modules = {
  37366: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      c: () => rH,
      f: () => SH
    });
    var AH = LH(1863);
    class rH extends Error {
      constructor(HH) {
        super("The game server didn't answer in time"), this.leg = HH, this.name = "SeatRequestTimedOut"
      }
    }
    const SH = new class {
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
        for (const HH of this.waiting) HH()
      }
      remove() {
        this.count--
      }
      whenSlow(HH) {
        return this.count > 0 || HH.aborted ? Promise.resolve(!HH.aborted) : new Promise((BH => {
          const LH = () => {
            this.waiting.delete(LH), BH(!HH.aborted)
          };
          this.waiting.add(LH), HH.addEventListener("abort", LH, {
            once: !0
          })
        }))
      }
    };
    class hH {
      constructor(HH) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new AH.b(45e3, HH), this.slow = new AH.b(8e3, (() => {
          this.countedSlow = !0, SH.add()
        }))
      }
      restart() {
        SH.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), SH.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), SH.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, SH.remove())
      }
    }
  },
  37030: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      g: () => rH,
      j: () => SH,
      l: () => hH
    });
    const AH = 1024,
      rH = 1024 * AH;

    function SH(HH) {
      return 2 ** Math.floor(Math.log2(Math.max(1, HH / rH)))
    }

    function hH(HH) {
      return (HH / rH).toFixed(1)
    }
  },
  37351: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      d: () => zH,
      f: () => tH,
      h: () => hH,
      l: () => CH,
      n: () => EH,
      p: () => GH
    });
    var AH = LH(176);
    const rH = 32 * LH(37030).g,
      SH = 6144,
      hH = 4608,
      tH = 512,
      zH = function() {
        const HH = GH(AH.g.maxChunkHorizAddDistance + 1, AH.g.maxChunkVertAddDistance + 1);
        let BH = HH;
        for (; XH(BH) < HH;) BH++;
        return BH
      }();

    function CH(HH) {
      return Math.floor(rH * HH / SH)
    }

    function EH(HH) {
      const BH = XH(HH);
      let LH = AH.g.maxChunkHorizAddDistance,
        rH = AH.g.maxChunkVertAddDistance;
      if (GH(LH + 1, rH + 1) <= BH) return null;
      for (; GH(LH + 1, rH + 1) > BH && (LH > 0 || rH > 0);) LH > rH ? LH-- : rH--;
      return {
        horizontal: LH,
        vertical: rH
      }
    }

    function XH(HH) {
      return HH - Math.floor(HH / 6)
    }

    function GH(HH, BH) {
      const LH = Math.max(HH, BH);
      let AH = 0;
      for (let rH = -LH; rH <= LH; rH++)
        for (let SH = -LH; SH <= LH; SH++)
          for (let hH = -LH; hH <= LH; hH++) YH(HH, BH, rH, SH, hH) && AH++;
      return AH
    }

    function YH(HH, BH, LH, AH, rH) {
      const SH = LH * LH + rH * rH;
      return HH === BH ? SH + AH * AH <= HH * HH : HH > BH ? Math.abs(AH) <= BH && SH + AH * AH <= HH * HH : SH <= HH * HH && SH + AH * AH <= BH * BH
    }
  },
  37347: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => OH,
      d: () => FH,
      f: () => nH,
      g: () => jH,
      k: () => KH,
      o: () => RH,
      p: () => gH
    });
    var AH = LH(176),
      rH = LH(81),
      SH = LH(120),
      hH = LH(277),
      tH = LH(4780),
      zH = LH(644),
      CH = LH(669),
      EH = LH(4786),
      XH = LH(4802),
      GH = LH(37351),
      YH = LH(37358);
    const uH = 1048576,
      QH = 1024 * uH,
      WH = 400 * uH,
      MH = 147456,
      xH = .5,
      vH = 2048,
      PH = 1.5 * QH,
      TH = 768 * uH;

    function UH(HH) {
      const {
        os: BH,
        deviceMemory: LH
      } = HH;
      if ("ios" === BH) switch ((0, hH.g)(HH)) {
        case "ipad_m":
          return {
            footprintBytes: VH(GH.b), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: TH, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: PH, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: TH, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof LH && Number.isFinite(LH) && LH > 0 ? {
        footprintBytes: LH * QH * xH,
        basis: `memory-${LH}`,
        namesLimit: !0
      } : "android" === BH ? {
        footprintBytes: TH,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: VH(GH.h),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function VH(HH) {
      return WH + HH * MH
    }

    function OH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fH(),
        BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SH.siteUsed;
      if ("android" !== HH.os || "mobileAndroid" === BH) return !0;
      const {
        footprintBytes: LH,
        basis: AH
      } = UH(HH);
      return "android" === AH || LH > 2 * QH
    }

    function bH(HH) {
      const BH = Math.min(HH, VH(GH.b));
      return WH + Math.max(0, BH - WH) / 2
    }

    function kH(HH, BH, LH) {
      var rH, SH, hH, tH;
      let zH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
          footprintBytes: CH,
          basis: YH,
          namesLimit: uH
        } = UH(HH);
      LH && (CH = bH(CH), YH += "+killed", uH = !0), null !== BH && VH(BH) < CH && (CH = VH(BH), YH += "+learned", uH = !0), YH += (0, XH.v)(null !== (rH = HH.x32) && void 0 !== rH ? rH : null) + (0, EH.h)(null !== (SH = HH.lowRam) && void 0 !== SH ? SH : null), "fix" === HH.x32 && VH(vH) < CH && (CH = VH(vH), uH = !0), zH && (CH = bH(CH), YH += "+refused", uH = !0);
      const QH = function(HH) {
          const BH = Math.floor((HH - WH) / MH);
          return Math.min(GH.b, Math.max(GH.f, BH))
        }(CH),
        xH = uH && QH < GH.b ? Math.min(QH, GH.d) : QH,
        PH = (0, GH.n)(xH);
      return {
        footprintBytes: CH,
        shedFootprintBytes: uH ? Math.max(CH, VH(xH)) : null,
        chunkCap: xH,
        maxHorizDistance: null !== (hH = null === PH || void 0 === PH ? void 0 : PH.horizontal) && void 0 !== hH ? hH : AH.g.maxChunkHorizAddDistance,
        maxVertDistance: null !== (tH = null === PH || void 0 === PH ? void 0 : PH.vertical) && void 0 !== tH ? tH : AH.g.maxChunkVertAddDistance,
        basis: YH
      }
    }
    let mH = null,
      oH = null,
      IH = null;

    function fH() {
      var HH, BH;
      return mH ??= {
        os: (0, rH.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, hH.h)()
      }, {
        ...mH,
        x32: null !== (HH = (0, XH.u)()) && void 0 !== HH ? HH : void 0,
        lowRam: null !== (BH = (0, EH.e)()) && void 0 !== BH ? BH : void 0
      }
    }

    function lH() {
      return kH(fH(), (0, tH.g)(), (0, zH.M)("wasm").length > 0, gH())
    }

    function KH() {
      return IH ??= (0, YH.o)(kH(fH(), null, !1, gH()).chunkCap), IH
    }
    const cH = "wasmMemoryRecord",
      eH = {
        halvedAt: null,
        reloadSpent: !1
      };

    function qH() {
      let HH = null;
      try {
        var BH;
        HH = JSON.parse(null !== (BH = (0, CH.o)((0, CH.v)(), cH)) && void 0 !== BH ? BH : "null")
      } catch {
        return eH
      }
      if ("object" !== typeof HH || null === HH) return eH;
      const {
        halvedAt: LH,
        reloadSpent: AH
      } = HH;
      return {
        halvedAt: "number" === typeof LH && Number.isFinite(LH) ? LH : null,
        reloadSpent: !0 === AH
      }
    }

    function gH() {
      return null !== qH().halvedAt
    }

    function NH(HH) {
      const BH = (0, CH.v)(),
        LH = JSON.stringify(HH);
      try {
        null === BH || void 0 === BH || BH.setItem(cH, LH)
      } catch {
        return !1
      }
      return (0, CH.o)(BH, cH) === LH
    }

    function RH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const LH = qH();
      return null === LH.halvedAt ? NH({
        halvedAt: HH,
        reloadSpent: BH
      }) ? (IH = null, oH = null, "halve") : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent") : LH.reloadSpent ? "spent" : NH({
        ...LH,
        reloadSpent: !0
      }) ? "reload" : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent")
    }

    function jH() {
      return oH ??= lH(), oH
    }

    function nH() {
      var HH;
      return (null !== (HH = oH) && void 0 !== HH ? HH : lH()).basis
    }

    function FH(HH, BH) {
      return HH.setChunkCap(BH.chunkCap)
    }
  },
  37358: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => kH,
      g: () => TH,
      j: () => XH,
      n: () => UH,
      o: () => xH,
      r: () => OH,
      w: () => bH,
      z: () => GH
    });
    var AH = LH(37030),
      rH = LH(37351);
    const SH = 64 * AH.c,
      hH = 40 * AH.g,
      tH = 36 * AH.g,
      zH = 20 * AH.g,
      CH = 2 * AH.g,
      EH = 5 * AH.g;

    function XH(HH) {
      return "footprint" !== HH && "gcPressure" !== HH
    }

    function GH(HH) {
      return XH(HH) ? "wasm memory was refused" : "gcPressure" === HH ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const YH = 2 * AH.g,
      uH = 4 * AH.g,
      QH = 35 * AH.g + YH + uH,
      WH = 6.5 * AH.g,
      MH = 132.5 * AH.c;

    function xH(HH) {
      const BH = WH + (0, rH.l)(HH) + HH * MH;
      return Math.ceil((2 * QH + BH) / SH) * SH
    }
    xH(rH.b), AH.g, AH.g, AH.g;
    const vH = {
        targetBytes: hH,
        leastBytes: zH
      },
      PH = {
        targetBytes: tH,
        leastBytes: zH
      };

    function TH(HH) {
      return {
        targetBytes: HH,
        leastBytes: 0
      }
    }

    function UH(HH) {
      return HH >= rH.b ? vH : PH
    }
    const VH = 2 * SH;

    function OH(HH, BH, LH) {
      return HH + BH + VH > LH
    }
    const bH = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? HH => {
        requestIdleCallback(HH)
      } : null
    };
    class kH {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bH;
        this.memory = HH, this.readPeakStoredChunks = BH, this.onError = LH, this.clock = AH, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(HH, BH, LH) {
        this.shedding = {
          shed: HH,
          XX: BH,
          readDistanceInUse: LH
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(HH) {
        this.footprint = HH
      }
      setGcPressure(HH) {
        this.gcPressure = {
          highEpisode: HH,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(HH) {
        this.ceilingBytes = HH, this.call((() => {
          this.memory.setCeiling(HH)
        }), void 0)
      }
      ceilingMayRefuse(HH, BH) {
        var LH;
        return OH(this.memory.memoryBytes(), HH, null !== (LH = this.ceilingBytes) && void 0 !== LH ? LH : BH)
      }
      reserveAtJoin(HH) {
        let {
          targetBytes: BH,
          leastBytes: LH
        } = HH;
        const AH = this.memory.memoryBytes(),
          rH = AH + LH,
          SH = Math.max(BH + (this.ballastOn() ? EH : 0), rH),
          hH = this.call((() => this.memory.reserveUpFront(SH) ? "target" : SH > rH && this.memory.reserveUpFront(rH) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== hH) {
          const HH = "least" === hH ? `took ${rH} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${SH} bytes was refused at ${AH} bytes; ${HH}`)
        }
        return this.joinReserveTaken = hH, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== hH && this.shedFor("joinReserve"), "none" !== hH
      }
      afterFrame() {
        if (this.stopped) return;
        const HH = this.clock.now(),
          BH = null !== this.stepsHeldUntil && HH >= this.stepsHeldUntil;
        if (BH && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && HH >= this.ballastCheckAt && (this.takeBallast(HH), this.stopped)) return;
        const LH = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          AH = BH && "now" === LH ? "none" : LH,
          {
            requestIdle: rH
          } = this.clock;
        "now" === AH || null !== this.pendingSince && HH - this.pendingSince >= 500 ? this.step() : "idle" === AH && null === this.pendingSince && (null === rH ? this.step() : (this.pendingSince = HH, rH((() => {
          null !== this.pendingSince && this.step()
        })))), HH - this.statsAt >= 1e3 && (this.statsAt = HH, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(HH))
      }
      refreshStats() {
        this.call((() => {
          var HH, BH;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (BH = this.shedding.readDistanceInUse()) && void 0 !== BH ? BH : this.distanceInUse);
          null === (HH = this.footprint) || void 0 === HH || HH.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(HH, BH) {
        this.noteWorker(`Mesh${HH}`, BH)
      }
      meshWorkerGone(HH) {
        this.workerGone(`Mesh${HH}`)
      }
      noteWorldgen(HH) {
        this.noteWorker("Worldgen", HH)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(HH, BH) {
        const LH = this.workers.get(HH);
        null !== LH && void 0 !== LH && LH.gone && (this.replacedRefusals.reserves += LH.stats.reservesRefused, this.replacedRefusals.allocations += LH.stats.allocationsRefused), this.workers.set(HH, {
          stats: BH,
          gone: !1
        })
      }
      workerGone(HH) {
        const BH = this.workers.get(HH);
        BH && (BH.gone = !0)
      }
      details() {
        var HH, BH;
        const LH = this.memory.memoryBytes(),
          rH = {
            wasmMemoryNow: `${(0,AH.l)(LH)} MiB`,
            wasmMemoryMiB: String(Math.floor(LH / AH.g))
          };
        null !== this.joinReserveTaken && (rH.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (rH.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const SH = this.main;
        if (SH) {
          rH.wasmMemoryMain = mH(SH);
          const HH = Math.max(0, SH.peakLiveBytes - this.ballastPeakBytes),
            BH = 0 === this.peakStoredChunks ? "-" : (HH / this.peakStoredChunks / AH.c).toFixed(1);
          rH.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${BH} KiB`
        }
        for (const [AH, {
            stats: tH,
            gone: zH
          }] of this.workers) rH[`wasmMemory${AH}`] = mH(tH) + (zH ? " (gone)" : "");
        const hH = null !== (HH = null === (BH = this.footprint) || void 0 === BH ? void 0 : BH.describe()) && void 0 !== HH ? HH : null;
        return null !== hH && (rH.wasmMemoryFootprint = hH), rH
      }
      pageKillSnapshot() {
        var HH, BH, LH, rH, SH;
        let hH = (null !== (HH = null === (BH = this.main) || void 0 === BH ? void 0 : BH.reservesRefused) && void 0 !== HH ? HH : 0) + this.replacedRefusals.reserves,
          tH = (null !== (LH = null === (rH = this.main) || void 0 === rH ? void 0 : rH.allocationsRefused) && void 0 !== LH ? LH : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: AH
          }
          of this.workers.values()) hH += AH.reservesRefused, tH += AH.allocationsRefused;
        return {
          wasmMainMiB: Number((0, AH.l)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, AH.l)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: hH,
          refusedAllocations: tH,
          sheds: this.sheds,
          ...null === (SH = this.footprint) || void 0 === SH ? void 0 : SH.snapshot()
        }
      }
      workersMemoryBytes() {
        let HH = 0;
        for (const {
            stats: BH,
            gone: LH
          }
          of this.workers.values()) HH += LH ? 0 : BH.memoryBytes;
        return HH
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(HH) {
        const BH = this.gcPressure;
        if (null === BH) return;
        if (null !== BH.nextAt || "undefined" !== typeof document && document.hidden || (BH.nextAt = HH + 6e4), null === BH.nextAt || HH < BH.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const LH = BH.highEpisode();
        null !== LH && LH !== BH.shedEpisode && (BH.shedEpisode = LH, BH.nextAt = HH + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(CH)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(HH) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = HH + 1e3;
        const BH = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, BH)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(HH) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${HH}: frames grow on demand from here`)
      }
      shedFor(HH) {
        const {
          shedding: BH
        } = this;
        if (null === BH) return;
        this.pendingSince = null;
        const LH = this.call((() => BH.shed(HH)), null);
        if (this.stopped) return;
        if (null === LH) return void(XH(HH) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = LH, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const AH = "gcPressure" === HH ? ++this.gcSheds : this.sheds - this.gcSheds;
        BH.XX(HH, AH, this.details())
      }
      call(HH, BH) {
        if (this.stopped) return BH;
        try {
          return HH()
        } catch (LH) {
          return this.stop(), this.onError(LH), BH
        }
      }
    }

    function mH(HH) {
      const BH = (HH, BH) => `${HH}/${(0,AH.l)(BH)}`;
      return `memory ${(0,AH.l)(HH.memoryBytes)} live ${(0,AH.l)(HH.liveBytes)} peak ${(0,AH.l)(HH.peakLiveBytes)} unused ${(0,AH.l)(HH.unusedBytes)} ceiling ${(0,AH.l)(HH.ceilingBytes)} MiB; grows upFront ${BH(HH.grows.upFront,HH.grownBytes.upFront)} ahead ${BH(HH.grows.ahead,HH.grownBytes.ahead)} inFrame ${BH(HH.grows.onDemandInFrame,HH.grownBytes.onDemandInFrame)} other ${BH(HH.grows.onDemand,HH.grownBytes.onDemand)}; refused reserves ${HH.reservesRefused} allocations ${HH.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);