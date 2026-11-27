export const id = 240;
export const ids = [240];
export const modules = {
  37727: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      c: () => EW,
      d: () => NW
    });
    var mW = OW(1755);
    class EW extends Error {
      constructor(WW) {
        super("The game server didn't answer in time"), this.leg = WW, this.name = "SeatRequestTimedOut"
      }
    }
    const NW = new class {
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
        for (const WW of this.waiting) WW()
      }
      remove() {
        this.count--
      }
      whenSlow(WW) {
        return this.count > 0 || WW.aborted ? Promise.resolve(!WW.aborted) : new Promise((iW => {
          const OW = () => {
            this.waiting.delete(OW), iW(!WW.aborted)
          };
          this.waiting.add(OW), WW.addEventListener("abort", OW, {
            once: !0
          })
        }))
      }
    };
    class PW {
      constructor(WW) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new mW.d(45e3, WW), this.slow = new mW.d(8e3, (() => {
          this.countedSlow = !0, NW.add()
        }))
      }
      restart() {
        NW.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), NW.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), NW.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, NW.remove())
      }
    }
  },
  37260: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      d: () => EW,
      h: () => NW,
      j: () => PW
    });
    const mW = 1024,
      EW = 1024 * mW;

    function NW(WW) {
      return 2 ** Math.floor(Math.log2(Math.max(1, WW / EW)))
    }

    function PW(WW) {
      return (WW / EW).toFixed(1)
    }
  },
  37717: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      h: () => cW,
      j: () => LW,
      l: () => PW,
      n: () => wW,
      o: () => tW,
      r: () => xW
    });
    var mW = OW(182);
    const EW = 32 * OW(37260).d,
      NW = 6144,
      PW = 4608,
      LW = 512,
      cW = function() {
        const WW = xW(mW.f.maxChunkHorizAddDistance + 1, mW.f.maxChunkVertAddDistance + 1);
        let iW = WW;
        for (; ZW(iW) < WW;) iW++;
        return iW
      }();

    function wW(WW) {
      return Math.floor(EW * WW / NW)
    }

    function tW(WW) {
      const iW = ZW(WW);
      let OW = mW.f.maxChunkHorizAddDistance,
        EW = mW.f.maxChunkVertAddDistance;
      if (xW(OW + 1, EW + 1) <= iW) return null;
      for (; xW(OW + 1, EW + 1) > iW && (OW > 0 || EW > 0);) OW > EW ? OW-- : EW--;
      return {
        horizontal: OW,
        vertical: EW
      }
    }

    function ZW(WW) {
      return WW - Math.floor(WW / 6)
    }

    function xW(WW, iW) {
      const OW = Math.max(WW, iW);
      let mW = 0;
      for (let EW = -OW; EW <= OW; EW++)
        for (let NW = -OW; NW <= OW; NW++)
          for (let PW = -OW; PW <= OW; PW++) lW(WW, iW, EW, NW, PW) && mW++;
      return mW
    }

    function lW(WW, iW, OW, mW, EW) {
      const NW = OW * OW + EW * EW;
      return WW === iW ? NW + mW * mW <= WW * WW : WW > iW ? Math.abs(mW) <= iW && NW + mW * mW <= WW * WW : NW <= WW * WW && NW + mW * mW <= iW * iW
    }
  },
  37711: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => yW,
      d: () => XW,
      g: () => CW,
      i: () => fW,
      m: () => dW,
      p: () => pW,
      q: () => DW
    });
    var mW = OW(182),
      EW = OW(100),
      NW = OW(136),
      PW = OW(274),
      LW = OW(5067),
      cW = OW(673),
      wW = OW(696),
      tW = OW(5072),
      ZW = OW(5089),
      xW = OW(37717),
      lW = OW(37724);
    const AW = 1048576,
      bW = 1024 * AW,
      jW = 400 * AW,
      UW = 147456,
      kW = .5,
      sW = 2048,
      MW = 1.5 * bW,
      KW = 768 * AW;

    function SW(WW) {
      const {
        os: iW,
        deviceMemory: OW
      } = WW;
      if ("ios" === iW) switch ((0, PW.h)(WW)) {
        case "ipad_m":
          return {
            footprintBytes: YW(xW.e), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: KW, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: MW, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: KW, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof OW && Number.isFinite(OW) && OW > 0 ? {
        footprintBytes: OW * bW * kW,
        basis: `memory-${OW}`,
        namesLimit: !0
      } : "android" === iW ? {
        footprintBytes: KW,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: YW(xW.l),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function YW(WW) {
      return jW + WW * UW
    }

    function yW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uW(),
        iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NW.siteUsed;
      if ("android" !== WW.os || "mobileAndroid" === iW) return !0;
      const {
        footprintBytes: OW,
        basis: mW
      } = SW(WW);
      return "android" === mW || OW > 2 * bW
    }

    function TW(WW) {
      const iW = Math.min(WW, YW(xW.e));
      return jW + Math.max(0, iW - jW) / 2
    }

    function JW(WW, iW, OW) {
      var EW, NW, PW, LW;
      let cW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
          footprintBytes: wW,
          basis: lW,
          namesLimit: AW
        } = SW(WW);
      OW && (wW = TW(wW), lW += "+killed", AW = !0), null !== iW && YW(iW) < wW && (wW = YW(iW), lW += "+learned", AW = !0), lW += (0, ZW.B)(null !== (EW = WW.x32) && void 0 !== EW ? EW : null) + (0, tW.j)(null !== (NW = WW.lowRam) && void 0 !== NW ? NW : null), "fix" === WW.x32 && YW(sW) < wW && (wW = YW(sW), AW = !0), cW && (wW = TW(wW), lW += "+refused", AW = !0);
      const bW = function(WW) {
          const iW = Math.floor((WW - jW) / UW);
          return Math.min(xW.e, Math.max(xW.j, iW))
        }(wW),
        kW = AW && bW < xW.e ? Math.min(bW, xW.h) : bW,
        MW = (0, xW.o)(kW);
      return {
        footprintBytes: wW,
        shedFootprintBytes: AW ? Math.max(wW, YW(kW)) : null,
        chunkCap: kW,
        maxHorizDistance: null !== (PW = null === MW || void 0 === MW ? void 0 : MW.horizontal) && void 0 !== PW ? PW : mW.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (LW = null === MW || void 0 === MW ? void 0 : MW.vertical) && void 0 !== LW ? LW : mW.f.maxChunkVertAddDistance,
        basis: lW
      }
    }
    let hW = null,
      HW = null,
      nW = null;

    function uW() {
      var WW, iW;
      return hW ??= {
        os: (0, EW.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, PW.j)()
      }, {
        ...hW,
        x32: null !== (WW = (0, ZW.y)()) && void 0 !== WW ? WW : void 0,
        lowRam: null !== (iW = (0, tW.h)()) && void 0 !== iW ? iW : void 0
      }
    }

    function oW() {
      return JW(uW(), (0, LW.e)(), (0, cW.K)("wasm").length > 0, DW())
    }

    function dW() {
      return nW ??= (0, lW.o)(JW(uW(), null, !1, DW()).chunkCap), nW
    }
    const eW = "wasmMemoryRecord",
      vW = {
        halvedAt: null,
        reloadSpent: !1
      };

    function gW() {
      let WW = null;
      try {
        var iW;
        WW = JSON.parse(null !== (iW = (0, wW.p)((0, wW.y)(), eW)) && void 0 !== iW ? iW : "null")
      } catch {
        return vW
      }
      if ("object" !== typeof WW || null === WW) return vW;
      const {
        halvedAt: OW,
        reloadSpent: mW
      } = WW;
      return {
        halvedAt: "number" === typeof OW && Number.isFinite(OW) ? OW : null,
        reloadSpent: !0 === mW
      }
    }

    function DW() {
      return null !== gW().halvedAt
    }

    function VW(WW) {
      const iW = (0, wW.y)(),
        OW = JSON.stringify(WW);
      try {
        null === iW || void 0 === iW || iW.setItem(eW, OW)
      } catch {
        return !1
      }
      return (0, wW.p)(iW, eW) === OW
    }

    function pW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const OW = gW();
      return null === OW.halvedAt ? VW({
        halvedAt: WW,
        reloadSpent: iW
      }) ? (nW = null, HW = null, "halve") : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent") : OW.reloadSpent ? "spent" : VW({
        ...OW,
        reloadSpent: !0
      }) ? "reload" : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent")
    }

    function fW() {
      return HW ??= oW(), HW
    }

    function CW() {
      var WW;
      return (null !== (WW = HW) && void 0 !== WW ? WW : oW()).basis
    }

    function XW(WW, iW) {
      return WW.setChunkCap(iW.chunkCap)
    }
  },
  37724: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => JW,
      f: () => KW,
      h: () => ZW,
      k: () => SW,
      o: () => kW,
      p: () => yW,
      u: () => TW,
      w: () => xW
    });
    var mW = OW(37260),
      EW = OW(37717);
    const NW = 64 * mW.b,
      PW = 40 * mW.d,
      LW = 36 * mW.d,
      cW = 20 * mW.d,
      wW = 2 * mW.d,
      tW = 5 * mW.d;

    function ZW(WW) {
      return "footprint" !== WW && "gcPressure" !== WW
    }

    function xW(WW) {
      return ZW(WW) ? "wasm memory was refused" : "gcPressure" === WW ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const lW = 2 * mW.d,
      AW = 4 * mW.d,
      bW = 35 * mW.d + lW + AW,
      jW = 6.5 * mW.d,
      UW = 132.5 * mW.b;

    function kW(WW) {
      const iW = jW + (0, EW.n)(WW) + WW * UW;
      return Math.ceil((2 * bW + iW) / NW) * NW
    }
    kW(EW.e), mW.d, mW.d, mW.d;
    const sW = {
        targetBytes: PW,
        leastBytes: cW
      },
      MW = {
        targetBytes: LW,
        leastBytes: cW
      };

    function KW(WW) {
      return {
        targetBytes: WW,
        leastBytes: 0
      }
    }

    function SW(WW) {
      return WW >= EW.e ? sW : MW
    }
    const YW = 2 * NW;

    function yW(WW, iW, OW) {
      return WW + iW + YW > OW
    }
    const TW = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? WW => {
        requestIdleCallback(WW)
      } : null
    };
    class JW {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TW;
        this.memory = WW, this.readPeakStoredChunks = iW, this.onError = OW, this.clock = mW, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(WW, iW, OW) {
        this.shedding = {
          shed: WW,
          wZ: iW,
          readDistanceInUse: OW
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(WW) {
        this.footprint = WW
      }
      setGcPressure(WW) {
        this.gcPressure = {
          highEpisode: WW,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(WW) {
        this.ceilingBytes = WW, this.call((() => {
          this.memory.setCeiling(WW)
        }), void 0)
      }
      ceilingMayRefuse(WW, iW) {
        var OW;
        return yW(this.memory.memoryBytes(), WW, null !== (OW = this.ceilingBytes) && void 0 !== OW ? OW : iW)
      }
      reserveAtJoin(WW) {
        let {
          targetBytes: iW,
          leastBytes: OW
        } = WW;
        const mW = this.memory.memoryBytes(),
          EW = mW + OW,
          NW = Math.max(iW + (this.ballastOn() ? tW : 0), EW),
          PW = this.call((() => this.memory.reserveUpFront(NW) ? "target" : NW > EW && this.memory.reserveUpFront(EW) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== PW) {
          const WW = "least" === PW ? `took ${EW} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${NW} bytes was refused at ${mW} bytes; ${WW}`)
        }
        return this.joinReserveTaken = PW, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== PW && this.shedFor("joinReserve"), "none" !== PW
      }
      afterFrame() {
        if (this.stopped) return;
        const WW = this.clock.now(),
          iW = null !== this.stepsHeldUntil && WW >= this.stepsHeldUntil;
        if (iW && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && WW >= this.ballastCheckAt && (this.takeBallast(WW), this.stopped)) return;
        const OW = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          mW = iW && "now" === OW ? "none" : OW,
          {
            requestIdle: EW
          } = this.clock;
        "now" === mW || null !== this.pendingSince && WW - this.pendingSince >= 500 ? this.step() : "idle" === mW && null === this.pendingSince && (null === EW ? this.step() : (this.pendingSince = WW, EW((() => {
          null !== this.pendingSince && this.step()
        })))), WW - this.statsAt >= 1e3 && (this.statsAt = WW, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(WW))
      }
      refreshStats() {
        this.call((() => {
          var WW, iW;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (iW = this.shedding.readDistanceInUse()) && void 0 !== iW ? iW : this.distanceInUse);
          null === (WW = this.footprint) || void 0 === WW || WW.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(WW, iW) {
        this.noteWorker(`Mesh${WW}`, iW)
      }
      meshWorkerGone(WW) {
        this.workerGone(`Mesh${WW}`)
      }
      noteWorldgen(WW) {
        this.noteWorker("Worldgen", WW)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(WW, iW) {
        const OW = this.workers.get(WW);
        null !== OW && void 0 !== OW && OW.gone && (this.replacedRefusals.reserves += OW.stats.reservesRefused, this.replacedRefusals.allocations += OW.stats.allocationsRefused), this.workers.set(WW, {
          stats: iW,
          gone: !1
        })
      }
      workerGone(WW) {
        const iW = this.workers.get(WW);
        iW && (iW.gone = !0)
      }
      details() {
        var WW, iW;
        const OW = this.memory.memoryBytes(),
          EW = {
            wasmMemoryNow: `${(0,mW.j)(OW)} MiB`,
            wasmMemoryMiB: String(Math.floor(OW / mW.d))
          };
        null !== this.joinReserveTaken && (EW.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (EW.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const NW = this.main;
        if (NW) {
          EW.wasmMemoryMain = hW(NW);
          const WW = Math.max(0, NW.peakLiveBytes - this.ballastPeakBytes),
            iW = 0 === this.peakStoredChunks ? "-" : (WW / this.peakStoredChunks / mW.b).toFixed(1);
          EW.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${iW} KiB`
        }
        for (const [mW, {
            stats: LW,
            gone: cW
          }] of this.workers) EW[`wasmMemory${mW}`] = hW(LW) + (cW ? " (gone)" : "");
        const PW = null !== (WW = null === (iW = this.footprint) || void 0 === iW ? void 0 : iW.describe()) && void 0 !== WW ? WW : null;
        return null !== PW && (EW.wasmMemoryFootprint = PW), EW
      }
      pageKillSnapshot() {
        var WW, iW, OW, EW, NW;
        let PW = (null !== (WW = null === (iW = this.main) || void 0 === iW ? void 0 : iW.reservesRefused) && void 0 !== WW ? WW : 0) + this.replacedRefusals.reserves,
          LW = (null !== (OW = null === (EW = this.main) || void 0 === EW ? void 0 : EW.allocationsRefused) && void 0 !== OW ? OW : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: mW
          }
          of this.workers.values()) PW += mW.reservesRefused, LW += mW.allocationsRefused;
        return {
          wasmMainMiB: Number((0, mW.j)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, mW.j)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: PW,
          refusedAllocations: LW,
          sheds: this.sheds,
          ...null === (NW = this.footprint) || void 0 === NW ? void 0 : NW.snapshot()
        }
      }
      workersMemoryBytes() {
        let WW = 0;
        for (const {
            stats: iW,
            gone: OW
          }
          of this.workers.values()) WW += OW ? 0 : iW.memoryBytes;
        return WW
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(WW) {
        const iW = this.gcPressure;
        if (null === iW) return;
        if (null !== iW.nextAt || "undefined" !== typeof document && document.hidden || (iW.nextAt = WW + 6e4), null === iW.nextAt || WW < iW.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const OW = iW.highEpisode();
        null !== OW && OW !== iW.shedEpisode && (iW.shedEpisode = OW, iW.nextAt = WW + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(wW)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(WW) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = WW + 1e3;
        const iW = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, iW)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(WW) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${WW}: frames grow on demand from here`)
      }
      shedFor(WW) {
        const {
          shedding: iW
        } = this;
        if (null === iW) return;
        this.pendingSince = null;
        const OW = this.call((() => iW.shed(WW)), null);
        if (this.stopped) return;
        if (null === OW) return void(ZW(WW) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = OW, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const mW = "gcPressure" === WW ? ++this.gcSheds : this.sheds - this.gcSheds;
        iW.wZ(WW, mW, this.details())
      }
      call(WW, iW) {
        if (this.stopped) return iW;
        try {
          return WW()
        } catch (OW) {
          return this.stop(), this.onError(OW), iW
        }
      }
    }

    function hW(WW) {
      const iW = (WW, iW) => `${WW}/${(0,mW.j)(iW)}`;
      return `memory ${(0,mW.j)(WW.memoryBytes)} live ${(0,mW.j)(WW.liveBytes)} peak ${(0,mW.j)(WW.peakLiveBytes)} unused ${(0,mW.j)(WW.unusedBytes)} ceiling ${(0,mW.j)(WW.ceilingBytes)} MiB; grows upFront ${iW(WW.grows.upFront,WW.grownBytes.upFront)} ahead ${iW(WW.grows.ahead,WW.grownBytes.ahead)} inFrame ${iW(WW.grows.onDemandInFrame,WW.grownBytes.onDemandInFrame)} other ${iW(WW.grows.onDemand,WW.grownBytes.onDemand)}; refused reserves ${WW.reservesRefused} allocations ${WW.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);