export const id = 211;
export const ids = [211];
export const modules = {
  36369: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC,
      f: () => wC,
      g: () => bC
    });
    var QC = ZC(1724);
    class wC extends Error {
      constructor(CC) {
        super("The game server didn't answer in time"), this.leg = CC, this.name = "SeatRequestTimedOut"
      }
    }
    const bC = new class {
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
        for (const CC of this.waiting) CC()
      }
      remove() {
        this.count--
      }
      whenSlow(CC) {
        return this.count > 0 || CC.aborted ? Promise.resolve(!CC.aborted) : new Promise((zC => {
          const ZC = () => {
            this.waiting.delete(ZC), zC(!CC.aborted)
          };
          this.waiting.add(ZC), CC.addEventListener("abort", ZC, {
            once: !0
          })
        }))
      }
    };
    class nC {
      constructor(CC) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new QC.d(45e3, CC), this.slow = new QC.d(8e3, (() => {
          this.countedSlow = !0, bC.add()
        }))
      }
      restart() {
        bC.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), bC.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), bC.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, bC.remove())
      }
    }
  },
  36175: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      d: () => wC,
      g: () => bC,
      h: () => nC
    });
    const QC = 1024,
      wC = 1024 * QC;

    function bC(CC) {
      return 2 ** Math.floor(Math.log2(Math.max(1, CC / wC)))
    }

    function nC(CC) {
      return (CC / wC).toFixed(1)
    }
  },
  36351: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC,
      c: () => oC,
      d: () => fC,
      f: () => nC,
      j: () => qC,
      n: () => FC,
      p: () => NC
    });
    var QC = ZC(184);
    const wC = 32 * ZC(36175).d,
      bC = 6144,
      nC = 4608,
      fC = 512,
      oC = function() {
        const CC = NC(QC.f.maxChunkHorizAddDistance + 1, QC.f.maxChunkVertAddDistance + 1);
        let zC = CC;
        for (; WC(zC) < CC;) zC++;
        return zC
      }();

    function qC(CC) {
      return Math.floor(wC * CC / bC)
    }

    function FC(CC) {
      const zC = WC(CC);
      let ZC = QC.f.maxChunkHorizAddDistance,
        wC = QC.f.maxChunkVertAddDistance;
      if (NC(ZC + 1, wC + 1) <= zC) return null;
      for (; NC(ZC + 1, wC + 1) > zC && (ZC > 0 || wC > 0);) ZC > wC ? ZC-- : wC--;
      return {
        horizontal: ZC,
        vertical: wC
      }
    }

    function WC(CC) {
      return CC - Math.floor(CC / 6)
    }

    function NC(CC, zC) {
      const ZC = Math.max(CC, zC);
      let QC = 0;
      for (let wC = -ZC; wC <= ZC; wC++)
        for (let bC = -ZC; bC <= ZC; bC++)
          for (let nC = -ZC; nC <= ZC; nC++) MC(CC, zC, wC, bC, nC) && QC++;
      return QC
    }

    function MC(CC, zC, ZC, QC, wC) {
      const bC = ZC * ZC + wC * wC;
      return CC === zC ? bC + QC * QC <= CC * CC : CC > zC ? Math.abs(QC) <= zC && bC + QC * QC <= CC * CC : bC <= CC * CC && bC + QC * QC <= zC * zC
    }
  },
  36348: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => hC,
      c: () => eC,
      e: () => vC,
      h: () => iC
    });
    var QC = ZC(184),
      wC = ZC(77),
      bC = ZC(270),
      nC = ZC(4324),
      fC = ZC(618),
      oC = ZC(36351),
      qC = ZC(36360);
    const FC = 1048576,
      WC = 1024 * FC,
      NC = 400 * FC,
      MC = 147456,
      gC = .5,
      SC = 1.5 * WC,
      pC = 768 * FC;

    function PC(CC) {
      return NC + CC * MC
    }

    function GC(CC, zC, ZC) {
      var wC, nC;
      let {
        footprintBytes: fC,
        basis: qC,
        namesLimit: FC
      } = function(CC) {
        const {
          os: zC,
          deviceMemory: ZC
        } = CC;
        if ("ios" === zC) switch ((0, bC.e)(CC)) {
          case "ipad_m":
            return {
              footprintBytes: PC(oC.b), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: pC, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: SC, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: pC, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof ZC && Number.isFinite(ZC) && ZC > 0 ? {
          footprintBytes: ZC * WC * gC,
          basis: `memory-${ZC}`,
          namesLimit: !0
        } : "android" === zC ? {
          footprintBytes: pC,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: PC(oC.f),
          basis: "unreported",
          namesLimit: !1
        }
      }(CC);
      if (ZC) {
        const CC = Math.min(fC, PC(oC.b));
        fC = NC + Math.max(0, CC - NC) / 2, qC += "+killed", FC = !0
      }
      null !== zC && PC(zC) < fC && (fC = PC(zC), qC += "+learned", FC = !0);
      const GC = function(CC) {
          const zC = Math.floor((CC - NC) / MC);
          return Math.min(oC.b, Math.max(oC.d, zC))
        }(fC),
        RC = FC && GC < oC.b ? Math.min(GC, oC.c) : GC,
        AC = (0, oC.n)(RC);
      return {
        footprintBytes: fC,
        shedFootprintBytes: FC ? Math.max(fC, PC(RC)) : null,
        chunkCap: RC,
        maxHorizDistance: null !== (wC = null === AC || void 0 === AC ? void 0 : AC.horizontal) && void 0 !== wC ? wC : QC.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (nC = null === AC || void 0 === AC ? void 0 : AC.vertical) && void 0 !== nC ? nC : QC.f.maxChunkVertAddDistance,
        basis: qC
      }
    }
    let RC = null,
      AC = null,
      xC = null;

    function JC() {
      return RC ??= {
        os: (0, wC.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, bC.f)()
      }, RC
    }

    function IC() {
      return GC(JC(), (0, nC.g)(), (0, fC.J)("wasm").length > 0)
    }

    function iC() {
      return xC ??= (0, qC.p)(GC(JC(), null, !1).chunkCap), xC
    }

    function vC() {
      return AC ??= IC(), AC
    }

    function eC() {
      var CC;
      return (null !== (CC = AC) && void 0 !== CC ? CC : IC()).basis
    }

    function hC(CC, zC) {
      return CC.setChunkCap(zC.chunkCap)
    }
  },
  36360: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => vC,
      j: () => AC,
      l: () => WC,
      n: () => xC,
      p: () => PC,
      t: () => IC,
      z: () => iC
    });
    var QC = ZC(36175),
      wC = ZC(36351);
    const bC = 64 * QC.c,
      nC = 40 * QC.d,
      fC = 36 * QC.d,
      oC = 20 * QC.d,
      qC = 2 * QC.d,
      FC = 5 * QC.d;

    function WC(CC) {
      return "footprint" !== CC
    }
    const NC = 2 * QC.d,
      MC = 4 * QC.d,
      gC = 35 * QC.d + NC + MC,
      SC = 6.5 * QC.d,
      pC = 132.5 * QC.c;

    function PC(CC) {
      const zC = SC + (0, wC.j)(CC) + CC * pC;
      return Math.ceil((2 * gC + zC) / bC) * bC
    }
    PC(wC.b), QC.d, QC.d, QC.d;
    const GC = {
        targetBytes: nC,
        leastBytes: oC
      },
      RC = {
        targetBytes: fC,
        leastBytes: oC
      };

    function AC(CC) {
      return {
        targetBytes: CC,
        leastBytes: 0
      }
    }

    function xC(CC) {
      return CC >= wC.b ? GC : RC
    }
    const JC = 2 * bC;

    function IC(CC, zC, ZC) {
      return CC + zC + JC > ZC
    }
    const iC = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? CC => {
        requestIdleCallback(CC)
      } : null
    };
    class vC {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iC;
        this.memory = CC, this.readPeakStoredChunks = zC, this.onError = ZC, this.clock = QC, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(CC, zC, ZC) {
        this.shedding = {
          shed: CC,
          Cg: zC,
          readDistanceInUse: ZC
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(CC) {
        this.footprint = CC
      }
      setCeiling(CC) {
        this.ceilingBytes = CC, this.call((() => {
          this.memory.setCeiling(CC)
        }), void 0)
      }
      ceilingMayRefuse(CC, zC) {
        var ZC;
        return IC(this.memory.memoryBytes(), CC, null !== (ZC = this.ceilingBytes) && void 0 !== ZC ? ZC : zC)
      }
      reserveAtJoin(CC) {
        let {
          targetBytes: zC,
          leastBytes: ZC
        } = CC;
        const QC = this.memory.memoryBytes(),
          wC = QC + ZC,
          bC = Math.max(zC + (this.ballastOn() ? FC : 0), wC),
          nC = this.call((() => this.memory.reserveUpFront(bC) ? "target" : bC > wC && this.memory.reserveUpFront(wC) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== nC) {
          const CC = "least" === nC ? `took ${wC} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${bC} bytes was refused at ${QC} bytes; ${CC}`)
        }
        return this.joinReserveTaken = nC, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== nC && this.shedFor("joinReserve"), "none" !== nC
      }
      afterFrame() {
        if (this.stopped) return;
        const CC = this.clock.now(),
          zC = null !== this.stepsHeldUntil && CC >= this.stepsHeldUntil;
        if (zC && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && CC >= this.ballastCheckAt && (this.takeBallast(CC), this.stopped)) return;
        const ZC = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          QC = zC && "now" === ZC ? "none" : ZC,
          {
            requestIdle: wC
          } = this.clock;
        "now" === QC || null !== this.pendingSince && CC - this.pendingSince >= 500 ? this.step() : "idle" === QC && null === this.pendingSince && (null === wC ? this.step() : (this.pendingSince = CC, wC((() => {
          null !== this.pendingSince && this.step()
        })))), CC - this.statsAt >= 1e3 && (this.statsAt = CC, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var CC, zC;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (zC = this.shedding.readDistanceInUse()) && void 0 !== zC ? zC : this.distanceInUse);
          null === (CC = this.footprint) || void 0 === CC || CC.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(CC, zC) {
        this.noteWorker(`Mesh${CC}`, zC)
      }
      meshWorkerGone(CC) {
        this.workerGone(`Mesh${CC}`)
      }
      noteWorldgen(CC) {
        this.noteWorker("Worldgen", CC)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(CC, zC) {
        const ZC = this.workers.get(CC);
        null !== ZC && void 0 !== ZC && ZC.gone && (this.replacedRefusals.reserves += ZC.stats.reservesRefused, this.replacedRefusals.allocations += ZC.stats.allocationsRefused), this.workers.set(CC, {
          stats: zC,
          gone: !1
        })
      }
      workerGone(CC) {
        const zC = this.workers.get(CC);
        zC && (zC.gone = !0)
      }
      details() {
        var CC, zC;
        const ZC = {
          wasmMemoryNow: `${(0,QC.h)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (ZC.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (ZC.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const wC = this.main;
        if (wC) {
          ZC.wasmMemoryMain = eC(wC);
          const CC = Math.max(0, wC.peakLiveBytes - this.ballastPeakBytes),
            zC = 0 === this.peakStoredChunks ? "-" : (CC / this.peakStoredChunks / QC.c).toFixed(1);
          ZC.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${zC} KiB`
        }
        for (const [QC, {
            stats: nC,
            gone: fC
          }] of this.workers) ZC[`wasmMemory${QC}`] = eC(nC) + (fC ? " (gone)" : "");
        const bC = null !== (CC = null === (zC = this.footprint) || void 0 === zC ? void 0 : zC.describe()) && void 0 !== CC ? CC : null;
        return null !== bC && (ZC.wasmMemoryFootprint = bC), ZC
      }
      pageKillSnapshot() {
        var CC, zC, ZC, wC, bC;
        let nC = (null !== (CC = null === (zC = this.main) || void 0 === zC ? void 0 : zC.reservesRefused) && void 0 !== CC ? CC : 0) + this.replacedRefusals.reserves,
          fC = (null !== (ZC = null === (wC = this.main) || void 0 === wC ? void 0 : wC.allocationsRefused) && void 0 !== ZC ? ZC : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: QC
          }
          of this.workers.values()) nC += QC.reservesRefused, fC += QC.allocationsRefused;
        return {
          wasmMainMiB: Number((0, QC.h)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, QC.h)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: nC,
          refusedAllocations: fC,
          sheds: this.sheds,
          ...null === (bC = this.footprint) || void 0 === bC ? void 0 : bC.snapshot()
        }
      }
      workersMemoryBytes() {
        let CC = 0;
        for (const {
            stats: zC,
            gone: ZC
          }
          of this.workers.values()) CC += ZC ? 0 : zC.memoryBytes;
        return CC
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(qC)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(CC) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = CC + 1e3;
        const zC = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, zC)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(CC) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${CC}: frames grow on demand from here`)
      }
      shedFor(CC) {
        const {
          shedding: zC
        } = this;
        if (null === zC) return;
        this.pendingSince = null;
        const ZC = this.call((() => zC.shed(CC)), null);
        this.stopped || (null !== ZC ? (this.sheds++, this.shedCap = ZC, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), zC.Cg(CC, this.sheds, this.details())) : WC(CC) && this.stopSteps("nothing is left to shed"))
      }
      call(CC, zC) {
        if (this.stopped) return zC;
        try {
          return CC()
        } catch (ZC) {
          return this.stop(), this.onError(ZC), zC
        }
      }
    }

    function eC(CC) {
      const zC = (CC, zC) => `${CC}/${(0,QC.h)(zC)}`;
      return `memory ${(0,QC.h)(CC.memoryBytes)} live ${(0,QC.h)(CC.liveBytes)} peak ${(0,QC.h)(CC.peakLiveBytes)} unused ${(0,QC.h)(CC.unusedBytes)} ceiling ${(0,QC.h)(CC.ceilingBytes)} MiB; grows upFront ${zC(CC.grows.upFront,CC.grownBytes.upFront)} ahead ${zC(CC.grows.ahead,CC.grownBytes.ahead)} inFrame ${zC(CC.grows.onDemandInFrame,CC.grownBytes.onDemandInFrame)} other ${zC(CC.grows.onDemand,CC.grownBytes.onDemand)}; refused reserves ${CC.reservesRefused} allocations ${CC.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);