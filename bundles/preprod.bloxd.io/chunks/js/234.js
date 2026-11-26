export const id = 234;
export const ids = [234];
export const modules = {
  37160: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      d: () => DB,
      g: () => QB
    });
    var YB = GB(1896);
    class DB extends Error {
      constructor(BB) {
        super("The game server didn't answer in time"), this.leg = BB, this.name = "SeatRequestTimedOut"
      }
    }
    const QB = new class {
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
        return this.count > 0 || BB.aborted ? Promise.resolve(!BB.aborted) : new Promise((OB => {
          const GB = () => {
            this.waiting.delete(GB), OB(!BB.aborted)
          };
          this.waiting.add(GB), BB.addEventListener("abort", GB, {
            once: !0
          })
        }))
      }
    };
    class oB {
      constructor(BB) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new YB.c(45e3, BB), this.slow = new YB.c(8e3, (() => {
          this.countedSlow = !0, QB.add()
        }))
      }
      restart() {
        QB.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), QB.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), QB.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, QB.remove())
      }
    }
  },
  36874: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      h: () => DB,
      l: () => QB,
      p: () => oB
    });
    const YB = 1024,
      DB = 1024 * YB;

    function QB(BB) {
      return 2 ** Math.floor(Math.log2(Math.max(1, BB / DB)))
    }

    function oB(BB) {
      return (BB / DB).toFixed(1)
    }
  },
  37149: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      g: () => yB,
      h: () => jB,
      k: () => oB,
      o: () => JB,
      r: () => MB,
      u: () => zB
    });
    var YB = GB(192);
    const DB = 32 * GB(36874).h,
      QB = 6144,
      oB = 4608,
      jB = 512,
      yB = function() {
        const BB = zB(YB.f.maxChunkHorizAddDistance + 1, YB.f.maxChunkVertAddDistance + 1);
        let OB = BB;
        for (; PB(OB) < BB;) OB++;
        return OB
      }();

    function JB(BB) {
      return Math.floor(DB * BB / QB)
    }

    function MB(BB) {
      const OB = PB(BB);
      let GB = YB.f.maxChunkHorizAddDistance,
        DB = YB.f.maxChunkVertAddDistance;
      if (zB(GB + 1, DB + 1) <= OB) return null;
      for (; zB(GB + 1, DB + 1) > OB && (GB > 0 || DB > 0);) GB > DB ? GB-- : DB--;
      return {
        horizontal: GB,
        vertical: DB
      }
    }

    function PB(BB) {
      return BB - Math.floor(BB / 6)
    }

    function zB(BB, OB) {
      const GB = Math.max(BB, OB);
      let YB = 0;
      for (let DB = -GB; DB <= GB; DB++)
        for (let QB = -GB; QB <= GB; QB++)
          for (let oB = -GB; oB <= GB; oB++) lB(BB, OB, DB, QB, oB) && YB++;
      return YB
    }

    function lB(BB, OB, GB, YB, DB) {
      const QB = GB * GB + DB * DB;
      return BB === OB ? QB + YB * YB <= BB * BB : BB > OB ? Math.abs(YB) <= OB && QB + YB * YB <= BB * BB : QB <= BB * BB && QB + YB * YB <= OB * OB
    }
  },
  37142: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => UB,
      f: () => hB,
      j: () => cB,
      l: () => EB,
      o: () => FB,
      p: () => wB,
      s: () => rB
    });
    var YB = GB(192),
      DB = GB(92),
      QB = GB(120),
      oB = GB(286),
      jB = GB(4804),
      yB = GB(670),
      JB = GB(689),
      MB = GB(4808),
      PB = GB(4820),
      zB = GB(37149),
      lB = GB(37154);
    const pB = 1048576,
      qB = 1024 * pB,
      ZB = 400 * pB,
      NB = 147456,
      RB = .5,
      WB = 2048,
      AB = 1.5 * qB,
      VB = 768 * pB;

    function SB(BB) {
      const {
        os: OB,
        deviceMemory: GB
      } = BB;
      if ("ios" === OB) switch ((0, oB.h)(BB)) {
        case "ipad_m":
          return {
            footprintBytes: nB(zB.c), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: VB, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: AB, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: VB, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof GB && Number.isFinite(GB) && GB > 0 ? {
        footprintBytes: GB * qB * RB,
        basis: `memory-${GB}`,
        namesLimit: !0
      } : "android" === OB ? {
        footprintBytes: VB,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: nB(zB.k),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function nB(BB) {
      return ZB + BB * NB
    }

    function UB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mB(),
        OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QB.siteUsed;
      if ("android" !== BB.os || "mobileAndroid" === OB) return !0;
      const {
        footprintBytes: GB,
        basis: YB
      } = SB(BB);
      return "android" === YB || GB > 2 * qB
    }

    function fB(BB) {
      const OB = Math.min(BB, nB(zB.c));
      return ZB + Math.max(0, OB - ZB) / 2
    }

    function kB(BB, OB, GB) {
      var DB, QB, oB, jB;
      let yB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
          footprintBytes: JB,
          basis: lB,
          namesLimit: pB
        } = SB(BB);
      GB && (JB = fB(JB), lB += "+killed", pB = !0), null !== OB && nB(OB) < JB && (JB = nB(OB), lB += "+learned", pB = !0), lB += (0, PB.E)(null !== (DB = BB.x32) && void 0 !== DB ? DB : null) + (0, MB.f)(null !== (QB = BB.lowRam) && void 0 !== QB ? QB : null), "fix" === BB.x32 && nB(WB) < JB && (JB = nB(WB), pB = !0), yB && (JB = fB(JB), lB += "+refused", pB = !0);
      const qB = function(BB) {
          const OB = Math.floor((BB - ZB) / NB);
          return Math.min(zB.c, Math.max(zB.h, OB))
        }(JB),
        RB = pB && qB < zB.c ? Math.min(qB, zB.g) : qB,
        AB = (0, zB.r)(RB);
      return {
        footprintBytes: JB,
        shedFootprintBytes: pB ? Math.max(JB, nB(RB)) : null,
        chunkCap: RB,
        maxHorizDistance: null !== (oB = null === AB || void 0 === AB ? void 0 : AB.horizontal) && void 0 !== oB ? oB : YB.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (jB = null === AB || void 0 === AB ? void 0 : AB.vertical) && void 0 !== jB ? jB : YB.f.maxChunkVertAddDistance,
        basis: lB
      }
    }
    let dB = null,
      KB = null,
      uB = null;

    function mB() {
      var BB, OB;
      return dB ??= {
        os: (0, DB.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, oB.k)()
      }, {
        ...dB,
        x32: null !== (BB = (0, PB.A)()) && void 0 !== BB ? BB : void 0,
        lowRam: null !== (OB = (0, MB.d)()) && void 0 !== OB ? OB : void 0
      }
    }

    function IB() {
      return kB(mB(), (0, jB.g)(), (0, yB.J)("wasm").length > 0, rB())
    }

    function FB() {
      return uB ??= (0, lB.n)(kB(mB(), null, !1, rB()).chunkCap), uB
    }
    const iB = "wasmMemoryRecord",
      LB = {
        halvedAt: null,
        reloadSpent: !1
      };

    function gB() {
      let BB = null;
      try {
        var OB;
        BB = JSON.parse(null !== (OB = (0, JB.f)((0, JB.p)(), iB)) && void 0 !== OB ? OB : "null")
      } catch {
        return LB
      }
      if ("object" !== typeof BB || null === BB) return LB;
      const {
        halvedAt: GB,
        reloadSpent: YB
      } = BB;
      return {
        halvedAt: "number" === typeof GB && Number.isFinite(GB) ? GB : null,
        reloadSpent: !0 === YB
      }
    }

    function rB() {
      return null !== gB().halvedAt
    }

    function XB(BB) {
      const OB = (0, JB.p)(),
        GB = JSON.stringify(BB);
      try {
        null === OB || void 0 === OB || OB.setItem(iB, GB)
      } catch {
        return !1
      }
      return (0, JB.f)(OB, iB) === GB
    }

    function wB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const GB = gB();
      return null === GB.halvedAt ? XB({
        halvedAt: BB,
        reloadSpent: OB
      }) ? (uB = null, KB = null, "halve") : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent") : GB.reloadSpent ? "spent" : XB({
        ...GB,
        reloadSpent: !0
      }) ? "reload" : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent")
    }

    function EB() {
      return KB ??= IB(), KB
    }

    function cB() {
      var BB;
      return (null !== (BB = KB) && void 0 !== BB ? BB : IB()).basis
    }

    function hB(BB, OB) {
      return BB.setChunkCap(OB.chunkCap)
    }
  },
  37154: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => zB,
      e: () => kB,
      j: () => VB,
      l: () => PB,
      m: () => SB,
      n: () => RB,
      q: () => UB,
      x: () => fB
    });
    var YB = GB(36874),
      DB = GB(37149);
    const QB = 64 * YB.e,
      oB = 40 * YB.h,
      jB = 36 * YB.h,
      yB = 20 * YB.h,
      JB = 2 * YB.h,
      MB = 5 * YB.h;

    function PB(BB) {
      return "footprint" !== BB && "gcPressure" !== BB
    }

    function zB(BB) {
      return PB(BB) ? "wasm memory was refused" : "gcPressure" === BB ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const lB = 2 * YB.h,
      pB = 4 * YB.h,
      qB = 35 * YB.h + lB + pB,
      ZB = 6.5 * YB.h,
      NB = 132.5 * YB.e;

    function RB(BB) {
      const OB = ZB + (0, DB.o)(BB) + BB * NB;
      return Math.ceil((2 * qB + OB) / QB) * QB
    }
    RB(DB.c), YB.h, YB.h, YB.h;
    const WB = {
        targetBytes: oB,
        leastBytes: yB
      },
      AB = {
        targetBytes: jB,
        leastBytes: yB
      };

    function VB(BB) {
      return {
        targetBytes: BB,
        leastBytes: 0
      }
    }

    function SB(BB) {
      return BB >= DB.c ? WB : AB
    }
    const nB = 2 * QB;

    function UB(BB, OB, GB) {
      return BB + OB + nB > GB
    }
    const fB = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? BB => {
        requestIdleCallback(BB)
      } : null
    };
    class kB {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fB;
        this.memory = BB, this.readPeakStoredChunks = OB, this.onError = GB, this.clock = YB, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(BB, OB, GB) {
        this.shedding = {
          shed: BB,
          jP: OB,
          readDistanceInUse: GB
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(BB) {
        this.footprint = BB
      }
      setGcPressure(BB) {
        this.gcPressure = {
          highEpisode: BB,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(BB) {
        this.ceilingBytes = BB, this.call((() => {
          this.memory.setCeiling(BB)
        }), void 0)
      }
      ceilingMayRefuse(BB, OB) {
        var GB;
        return UB(this.memory.memoryBytes(), BB, null !== (GB = this.ceilingBytes) && void 0 !== GB ? GB : OB)
      }
      reserveAtJoin(BB) {
        let {
          targetBytes: OB,
          leastBytes: GB
        } = BB;
        const YB = this.memory.memoryBytes(),
          DB = YB + GB,
          QB = Math.max(OB + (this.ballastOn() ? MB : 0), DB),
          oB = this.call((() => this.memory.reserveUpFront(QB) ? "target" : QB > DB && this.memory.reserveUpFront(DB) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== oB) {
          const BB = "least" === oB ? `took ${DB} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${QB} bytes was refused at ${YB} bytes; ${BB}`)
        }
        return this.joinReserveTaken = oB, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== oB && this.shedFor("joinReserve"), "none" !== oB
      }
      afterFrame() {
        if (this.stopped) return;
        const BB = this.clock.now(),
          OB = null !== this.stepsHeldUntil && BB >= this.stepsHeldUntil;
        if (OB && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && BB >= this.ballastCheckAt && (this.takeBallast(BB), this.stopped)) return;
        const GB = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          YB = OB && "now" === GB ? "none" : GB,
          {
            requestIdle: DB
          } = this.clock;
        "now" === YB || null !== this.pendingSince && BB - this.pendingSince >= 500 ? this.step() : "idle" === YB && null === this.pendingSince && (null === DB ? this.step() : (this.pendingSince = BB, DB((() => {
          null !== this.pendingSince && this.step()
        })))), BB - this.statsAt >= 1e3 && (this.statsAt = BB, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(BB))
      }
      refreshStats() {
        this.call((() => {
          var BB, OB;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (OB = this.shedding.readDistanceInUse()) && void 0 !== OB ? OB : this.distanceInUse);
          null === (BB = this.footprint) || void 0 === BB || BB.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(BB, OB) {
        this.noteWorker(`Mesh${BB}`, OB)
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
      noteWorker(BB, OB) {
        const GB = this.workers.get(BB);
        null !== GB && void 0 !== GB && GB.gone && (this.replacedRefusals.reserves += GB.stats.reservesRefused, this.replacedRefusals.allocations += GB.stats.allocationsRefused), this.workers.set(BB, {
          stats: OB,
          gone: !1
        })
      }
      workerGone(BB) {
        const OB = this.workers.get(BB);
        OB && (OB.gone = !0)
      }
      details() {
        var BB, OB;
        const GB = this.memory.memoryBytes(),
          DB = {
            wasmMemoryNow: `${(0,YB.p)(GB)} MiB`,
            wasmMemoryMiB: String(Math.floor(GB / YB.h))
          };
        null !== this.joinReserveTaken && (DB.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (DB.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const QB = this.main;
        if (QB) {
          DB.wasmMemoryMain = dB(QB);
          const BB = Math.max(0, QB.peakLiveBytes - this.ballastPeakBytes),
            OB = 0 === this.peakStoredChunks ? "-" : (BB / this.peakStoredChunks / YB.e).toFixed(1);
          DB.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${OB} KiB`
        }
        for (const [YB, {
            stats: jB,
            gone: yB
          }] of this.workers) DB[`wasmMemory${YB}`] = dB(jB) + (yB ? " (gone)" : "");
        const oB = null !== (BB = null === (OB = this.footprint) || void 0 === OB ? void 0 : OB.describe()) && void 0 !== BB ? BB : null;
        return null !== oB && (DB.wasmMemoryFootprint = oB), DB
      }
      pageKillSnapshot() {
        var BB, OB, GB, DB, QB;
        let oB = (null !== (BB = null === (OB = this.main) || void 0 === OB ? void 0 : OB.reservesRefused) && void 0 !== BB ? BB : 0) + this.replacedRefusals.reserves,
          jB = (null !== (GB = null === (DB = this.main) || void 0 === DB ? void 0 : DB.allocationsRefused) && void 0 !== GB ? GB : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: YB
          }
          of this.workers.values()) oB += YB.reservesRefused, jB += YB.allocationsRefused;
        return {
          wasmMainMiB: Number((0, YB.p)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, YB.p)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: oB,
          refusedAllocations: jB,
          sheds: this.sheds,
          ...null === (QB = this.footprint) || void 0 === QB ? void 0 : QB.snapshot()
        }
      }
      workersMemoryBytes() {
        let BB = 0;
        for (const {
            stats: OB,
            gone: GB
          }
          of this.workers.values()) BB += GB ? 0 : OB.memoryBytes;
        return BB
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(BB) {
        const OB = this.gcPressure;
        if (null === OB) return;
        if (null !== OB.nextAt || "undefined" !== typeof document && document.hidden || (OB.nextAt = BB + 6e4), null === OB.nextAt || BB < OB.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const GB = OB.highEpisode();
        null !== GB && GB !== OB.shedEpisode && (OB.shedEpisode = GB, OB.nextAt = BB + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(JB)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(BB) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = BB + 1e3;
        const OB = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, OB)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(BB) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${BB}: frames grow on demand from here`)
      }
      shedFor(BB) {
        const {
          shedding: OB
        } = this;
        if (null === OB) return;
        this.pendingSince = null;
        const GB = this.call((() => OB.shed(BB)), null);
        if (this.stopped) return;
        if (null === GB) return void(PB(BB) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = GB, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const YB = "gcPressure" === BB ? ++this.gcSheds : this.sheds - this.gcSheds;
        OB.jP(BB, YB, this.details())
      }
      call(BB, OB) {
        if (this.stopped) return OB;
        try {
          return BB()
        } catch (GB) {
          return this.stop(), this.onError(GB), OB
        }
      }
    }

    function dB(BB) {
      const OB = (BB, OB) => `${BB}/${(0,YB.p)(OB)}`;
      return `memory ${(0,YB.p)(BB.memoryBytes)} live ${(0,YB.p)(BB.liveBytes)} peak ${(0,YB.p)(BB.peakLiveBytes)} unused ${(0,YB.p)(BB.unusedBytes)} ceiling ${(0,YB.p)(BB.ceilingBytes)} MiB; grows upFront ${OB(BB.grows.upFront,BB.grownBytes.upFront)} ahead ${OB(BB.grows.ahead,BB.grownBytes.ahead)} inFrame ${OB(BB.grows.onDemandInFrame,BB.grownBytes.onDemandInFrame)} other ${OB(BB.grows.onDemand,BB.grownBytes.onDemand)}; refused reserves ${BB.reservesRefused} allocations ${BB.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);