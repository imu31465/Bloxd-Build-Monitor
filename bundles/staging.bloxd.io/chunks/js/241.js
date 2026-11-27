export const id = 241;
export const ids = [241];
export const modules = {
  38018: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr,
      c: () => Wr,
      d: () => ar
    });
    var Zr = Qr(1783);
    class Wr extends Error {
      constructor(rr) {
        super("The game server didn't answer in time"), this.leg = rr, this.name = "SeatRequestTimedOut"
      }
    }
    const ar = new class {
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
        for (const rr of this.waiting) rr()
      }
      remove() {
        this.count--
      }
      whenSlow(rr) {
        return this.count > 0 || rr.aborted ? Promise.resolve(!rr.aborted) : new Promise((Sr => {
          const Qr = () => {
            this.waiting.delete(Qr), Sr(!rr.aborted)
          };
          this.waiting.add(Qr), rr.addEventListener("abort", Qr, {
            once: !0
          })
        }))
      }
    };
    class jr {
      constructor(rr) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Zr.b(45e3, rr), this.slow = new Zr.b(8e3, (() => {
          this.countedSlow = !0, ar.add()
        }))
      }
      restart() {
        ar.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), ar.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), ar.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, ar.remove())
      }
    }
  },
  37522: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      f: () => Wr,
      i: () => ar,
      m: () => jr
    });
    const Zr = 1024,
      Wr = 1024 * Zr;

    function ar(rr) {
      return 2 ** Math.floor(Math.log2(Math.max(1, rr / Wr)))
    }

    function jr(rr) {
      return (rr / Wr).toFixed(1)
    }
  },
  38008: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => fr,
      i: () => Ir,
      k: () => jr,
      m: () => Er,
      p: () => pr,
      t: () => mr
    });
    var Zr = Qr(208);
    const Wr = 32 * Qr(37522).f,
      ar = 6144,
      jr = 4608,
      Ir = 512,
      fr = function() {
        const rr = mr(Zr.i.maxChunkHorizAddDistance + 1, Zr.i.maxChunkVertAddDistance + 1);
        let Sr = rr;
        for (; xr(Sr) < rr;) Sr++;
        return Sr
      }();

    function Er(rr) {
      return Math.floor(Wr * rr / ar)
    }

    function pr(rr) {
      const Sr = xr(rr);
      let Qr = Zr.i.maxChunkHorizAddDistance,
        Wr = Zr.i.maxChunkVertAddDistance;
      if (mr(Qr + 1, Wr + 1) <= Sr) return null;
      for (; mr(Qr + 1, Wr + 1) > Sr && (Qr > 0 || Wr > 0);) Qr > Wr ? Qr-- : Wr--;
      return {
        horizontal: Qr,
        vertical: Wr
      }
    }

    function xr(rr) {
      return rr - Math.floor(rr / 6)
    }

    function mr(rr, Sr) {
      const Qr = Math.max(rr, Sr);
      let Zr = 0;
      for (let Wr = -Qr; Wr <= Qr; Wr++)
        for (let ar = -Qr; ar <= Qr; ar++)
          for (let jr = -Qr; jr <= Qr; jr++) Nr(rr, Sr, Wr, ar, jr) && Zr++;
      return Zr
    }

    function Nr(rr, Sr, Qr, Zr, Wr) {
      const ar = Qr * Qr + Wr * Wr;
      return rr === Sr ? ar + Zr * Zr <= rr * rr : rr > Sr ? Math.abs(Zr) <= Sr && ar + Zr * Zr <= rr * rr : ar <= rr * rr && ar + Zr * Zr <= Sr * Sr
    }
  },
  38006: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Tr,
      f: () => ir,
      j: () => Vr,
      l: () => Ar,
      o: () => qr,
      r: () => kr,
      v: () => Mr
    });
    var Zr = Qr(208),
      Wr = Qr(109),
      ar = Qr(139),
      jr = Qr(317),
      Ir = Qr(5095),
      fr = Qr(719),
      Er = Qr(741),
      pr = Qr(5104),
      xr = Qr(5116),
      mr = Qr(38008),
      Nr = Qr(38011);
    const Ur = 1048576,
      tr = 1024 * Ur,
      hr = 400 * Ur,
      zr = 147456,
      Yr = .5,
      nr = 2048,
      er = 1.5 * tr,
      Kr = 768 * Ur;

    function yr(rr) {
      const {
        os: Sr,
        deviceMemory: Qr
      } = rr;
      if ("ios" === Sr) switch ((0, jr.f)(rr)) {
        case "ipad_m":
          return {
            footprintBytes: Br(mr.d), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: Kr, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: er, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: Kr, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof Qr && Number.isFinite(Qr) && Qr > 0 ? {
        footprintBytes: Qr * tr * Yr,
        basis: `memory-${Qr}`,
        namesLimit: !0
      } : "android" === Sr ? {
        footprintBytes: Kr,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: Br(mr.k),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function Br(rr) {
      return hr + rr * zr
    }

    function Tr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pr(),
        Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ar.siteUsed;
      if ("android" !== rr.os || "mobileAndroid" === Sr) return !0;
      const {
        footprintBytes: Qr,
        basis: Zr
      } = yr(rr);
      return "android" === Zr || Qr > 2 * tr
    }

    function vr(rr) {
      const Sr = Math.min(rr, Br(mr.d));
      return hr + Math.max(0, Sr - hr) / 2
    }

    function Or(rr, Sr, Qr) {
      var Wr, ar, jr, Ir;
      let fr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
          footprintBytes: Er,
          basis: Nr,
          namesLimit: Ur
        } = yr(rr);
      Qr && (Er = vr(Er), Nr += "+killed", Ur = !0), null !== Sr && Br(Sr) < Er && (Er = Br(Sr), Nr += "+learned", Ur = !0), Nr += (0, xr.G)(null !== (Wr = rr.x32) && void 0 !== Wr ? Wr : null) + (0, pr.j)(null !== (ar = rr.lowRam) && void 0 !== ar ? ar : null), "fix" === rr.x32 && Br(nr) < Er && (Er = Br(nr), Ur = !0), fr && (Er = vr(Er), Nr += "+refused", Ur = !0);
      const tr = function(rr) {
          const Sr = Math.floor((rr - hr) / zr);
          return Math.min(mr.d, Math.max(mr.i, Sr))
        }(Er),
        Yr = Ur && tr < mr.d ? Math.min(tr, mr.f) : tr,
        er = (0, mr.p)(Yr);
      return {
        footprintBytes: Er,
        shedFootprintBytes: Ur ? Math.max(Er, Br(Yr)) : null,
        chunkCap: Yr,
        maxHorizDistance: null !== (jr = null === er || void 0 === er ? void 0 : er.horizontal) && void 0 !== jr ? jr : Zr.i.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Ir = null === er || void 0 === er ? void 0 : er.vertical) && void 0 !== Ir ? Ir : Zr.i.maxChunkVertAddDistance,
        basis: Nr
      }
    }
    let Lr = null,
      lr = null,
      Xr = null;

    function Pr() {
      var rr, Sr;
      return Lr ??= {
        os: (0, Wr.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, jr.g)()
      }, {
        ...Lr,
        x32: null !== (rr = (0, xr.C)()) && void 0 !== rr ? rr : void 0,
        lowRam: null !== (Sr = (0, pr.f)()) && void 0 !== Sr ? Sr : void 0
      }
    }

    function Hr() {
      return Or(Pr(), (0, Ir.f)(), (0, fr.S)("wasm").length > 0, Mr())
    }

    function qr() {
      return Xr ??= (0, Nr.q)(Or(Pr(), null, !1, Mr()).chunkCap), Xr
    }
    const Rr = "wasmMemoryRecord",
      gr = {
        halvedAt: null,
        reloadSpent: !1
      };

    function Cr() {
      let rr = null;
      try {
        var Sr;
        rr = JSON.parse(null !== (Sr = (0, Er.p)((0, Er.x)(), Rr)) && void 0 !== Sr ? Sr : "null")
      } catch {
        return gr
      }
      if ("object" !== typeof rr || null === rr) return gr;
      const {
        halvedAt: Qr,
        reloadSpent: Zr
      } = rr;
      return {
        halvedAt: "number" === typeof Qr && Number.isFinite(Qr) ? Qr : null,
        reloadSpent: !0 === Zr
      }
    }

    function Mr() {
      return null !== Cr().halvedAt
    }

    function Gr(rr) {
      const Sr = (0, Er.x)(),
        Qr = JSON.stringify(rr);
      try {
        null === Sr || void 0 === Sr || Sr.setItem(Rr, Qr)
      } catch {
        return !1
      }
      return (0, Er.p)(Sr, Rr) === Qr
    }

    function kr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Qr = Cr();
      return null === Qr.halvedAt ? Gr({
        halvedAt: rr,
        reloadSpent: Sr
      }) ? (Xr = null, lr = null, "halve") : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent") : Qr.reloadSpent ? "spent" : Gr({
        ...Qr,
        reloadSpent: !0
      }) ? "reload" : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent")
    }

    function Ar() {
      return lr ??= Hr(), lr
    }

    function Vr() {
      var rr;
      return (null !== (rr = lr) && void 0 !== rr ? rr : Hr()).basis
    }

    function ir(rr, Sr) {
      return rr.setChunkCap(Sr.chunkCap)
    }
  },
  38011: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Or,
      i: () => Kr,
      m: () => xr,
      n: () => yr,
      q: () => Yr,
      r: () => Tr,
      x: () => vr,
      y: () => mr
    });
    var Zr = Qr(37522),
      Wr = Qr(38008);
    const ar = 64 * Zr.e,
      jr = 40 * Zr.f,
      Ir = 36 * Zr.f,
      fr = 20 * Zr.f,
      Er = 2 * Zr.f,
      pr = 5 * Zr.f;

    function xr(rr) {
      return "footprint" !== rr && "gcPressure" !== rr
    }

    function mr(rr) {
      return xr(rr) ? "wasm memory was refused" : "gcPressure" === rr ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const Nr = 2 * Zr.f,
      Ur = 4 * Zr.f,
      tr = 35 * Zr.f + Nr + Ur,
      hr = 6.5 * Zr.f,
      zr = 132.5 * Zr.e;

    function Yr(rr) {
      const Sr = hr + (0, Wr.m)(rr) + rr * zr;
      return Math.ceil((2 * tr + Sr) / ar) * ar
    }
    Yr(Wr.d), Zr.f, Zr.f, Zr.f;
    const nr = {
        targetBytes: jr,
        leastBytes: fr
      },
      er = {
        targetBytes: Ir,
        leastBytes: fr
      };

    function Kr(rr) {
      return {
        targetBytes: rr,
        leastBytes: 0
      }
    }

    function yr(rr) {
      return rr >= Wr.d ? nr : er
    }
    const Br = 2 * ar;

    function Tr(rr, Sr, Qr) {
      return rr + Sr + Br > Qr
    }
    const vr = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? rr => {
        requestIdleCallback(rr)
      } : null
    };
    class Or {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vr;
        this.memory = rr, this.readPeakStoredChunks = Sr, this.onError = Qr, this.clock = Zr, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(rr, Sr, Qr) {
        this.shedding = {
          shed: rr,
          jx: Sr,
          readDistanceInUse: Qr
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(rr) {
        this.footprint = rr
      }
      setGcPressure(rr) {
        this.gcPressure = {
          highEpisode: rr,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(rr) {
        this.ceilingBytes = rr, this.call((() => {
          this.memory.setCeiling(rr)
        }), void 0)
      }
      ceilingMayRefuse(rr, Sr) {
        var Qr;
        return Tr(this.memory.memoryBytes(), rr, null !== (Qr = this.ceilingBytes) && void 0 !== Qr ? Qr : Sr)
      }
      reserveAtJoin(rr) {
        let {
          targetBytes: Sr,
          leastBytes: Qr
        } = rr;
        const Zr = this.memory.memoryBytes(),
          Wr = Zr + Qr,
          ar = Math.max(Sr + (this.ballastOn() ? pr : 0), Wr),
          jr = this.call((() => this.memory.reserveUpFront(ar) ? "target" : ar > Wr && this.memory.reserveUpFront(Wr) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== jr) {
          const rr = "least" === jr ? `took ${Wr} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${ar} bytes was refused at ${Zr} bytes; ${rr}`)
        }
        return this.joinReserveTaken = jr, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== jr && this.shedFor("joinReserve"), "none" !== jr
      }
      afterFrame() {
        if (this.stopped) return;
        const rr = this.clock.now(),
          Sr = null !== this.stepsHeldUntil && rr >= this.stepsHeldUntil;
        if (Sr && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && rr >= this.ballastCheckAt && (this.takeBallast(rr), this.stopped)) return;
        const Qr = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Zr = Sr && "now" === Qr ? "none" : Qr,
          {
            requestIdle: Wr
          } = this.clock;
        "now" === Zr || null !== this.pendingSince && rr - this.pendingSince >= 500 ? this.step() : "idle" === Zr && null === this.pendingSince && (null === Wr ? this.step() : (this.pendingSince = rr, Wr((() => {
          null !== this.pendingSince && this.step()
        })))), rr - this.statsAt >= 1e3 && (this.statsAt = rr, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(rr))
      }
      refreshStats() {
        this.call((() => {
          var rr, Sr;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Sr = this.shedding.readDistanceInUse()) && void 0 !== Sr ? Sr : this.distanceInUse);
          null === (rr = this.footprint) || void 0 === rr || rr.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(rr, Sr) {
        this.noteWorker(`Mesh${rr}`, Sr)
      }
      meshWorkerGone(rr) {
        this.workerGone(`Mesh${rr}`)
      }
      noteWorldgen(rr) {
        this.noteWorker("Worldgen", rr)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(rr, Sr) {
        const Qr = this.workers.get(rr);
        null !== Qr && void 0 !== Qr && Qr.gone && (this.replacedRefusals.reserves += Qr.stats.reservesRefused, this.replacedRefusals.allocations += Qr.stats.allocationsRefused), this.workers.set(rr, {
          stats: Sr,
          gone: !1
        })
      }
      workerGone(rr) {
        const Sr = this.workers.get(rr);
        Sr && (Sr.gone = !0)
      }
      details() {
        var rr, Sr;
        const Qr = this.memory.memoryBytes(),
          Wr = {
            wasmMemoryNow: `${(0,Zr.m)(Qr)} MiB`,
            wasmMemoryMiB: String(Math.floor(Qr / Zr.f))
          };
        null !== this.joinReserveTaken && (Wr.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (Wr.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const ar = this.main;
        if (ar) {
          Wr.wasmMemoryMain = Lr(ar);
          const rr = Math.max(0, ar.peakLiveBytes - this.ballastPeakBytes),
            Sr = 0 === this.peakStoredChunks ? "-" : (rr / this.peakStoredChunks / Zr.e).toFixed(1);
          Wr.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Sr} KiB`
        }
        for (const [Zr, {
            stats: Ir,
            gone: fr
          }] of this.workers) Wr[`wasmMemory${Zr}`] = Lr(Ir) + (fr ? " (gone)" : "");
        const jr = null !== (rr = null === (Sr = this.footprint) || void 0 === Sr ? void 0 : Sr.describe()) && void 0 !== rr ? rr : null;
        return null !== jr && (Wr.wasmMemoryFootprint = jr), Wr
      }
      pageKillSnapshot() {
        var rr, Sr, Qr, Wr, ar;
        let jr = (null !== (rr = null === (Sr = this.main) || void 0 === Sr ? void 0 : Sr.reservesRefused) && void 0 !== rr ? rr : 0) + this.replacedRefusals.reserves,
          Ir = (null !== (Qr = null === (Wr = this.main) || void 0 === Wr ? void 0 : Wr.allocationsRefused) && void 0 !== Qr ? Qr : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Zr
          }
          of this.workers.values()) jr += Zr.reservesRefused, Ir += Zr.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Zr.m)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Zr.m)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: jr,
          refusedAllocations: Ir,
          sheds: this.sheds,
          ...null === (ar = this.footprint) || void 0 === ar ? void 0 : ar.snapshot()
        }
      }
      workersMemoryBytes() {
        let rr = 0;
        for (const {
            stats: Sr,
            gone: Qr
          }
          of this.workers.values()) rr += Qr ? 0 : Sr.memoryBytes;
        return rr
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(rr) {
        const Sr = this.gcPressure;
        if (null === Sr) return;
        if (null !== Sr.nextAt || "undefined" !== typeof document && document.hidden || (Sr.nextAt = rr + 6e4), null === Sr.nextAt || rr < Sr.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const Qr = Sr.highEpisode();
        null !== Qr && Qr !== Sr.shedEpisode && (Sr.shedEpisode = Qr, Sr.nextAt = rr + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Er)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(rr) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = rr + 1e3;
        const Sr = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Sr)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(rr) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${rr}: frames grow on demand from here`)
      }
      shedFor(rr) {
        const {
          shedding: Sr
        } = this;
        if (null === Sr) return;
        this.pendingSince = null;
        const Qr = this.call((() => Sr.shed(rr)), null);
        if (this.stopped) return;
        if (null === Qr) return void(xr(rr) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = Qr, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const Zr = "gcPressure" === rr ? ++this.gcSheds : this.sheds - this.gcSheds;
        Sr.jx(rr, Zr, this.details())
      }
      call(rr, Sr) {
        if (this.stopped) return Sr;
        try {
          return rr()
        } catch (Qr) {
          return this.stop(), this.onError(Qr), Sr
        }
      }
    }

    function Lr(rr) {
      const Sr = (rr, Sr) => `${rr}/${(0,Zr.m)(Sr)}`;
      return `memory ${(0,Zr.m)(rr.memoryBytes)} live ${(0,Zr.m)(rr.liveBytes)} peak ${(0,Zr.m)(rr.peakLiveBytes)} unused ${(0,Zr.m)(rr.unusedBytes)} ceiling ${(0,Zr.m)(rr.ceilingBytes)} MiB; grows upFront ${Sr(rr.grows.upFront,rr.grownBytes.upFront)} ahead ${Sr(rr.grows.ahead,rr.grownBytes.ahead)} inFrame ${Sr(rr.grows.onDemandInFrame,rr.grownBytes.onDemandInFrame)} other ${Sr(rr.grows.onDemand,rr.grownBytes.onDemand)}; refused reserves ${rr.reservesRefused} allocations ${rr.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);