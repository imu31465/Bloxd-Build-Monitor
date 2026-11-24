export const id = 211;
export const ids = [211];
export const modules = {
  36573: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      e: () => Am,
      i: () => am
    });
    var hm = fm(1782);
    class Am extends Error {
      constructor(mm) {
        super("The game server didn't answer in time"), this.leg = mm, this.name = "SeatRequestTimedOut"
      }
    }
    const am = new class {
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
        for (const mm of this.waiting) mm()
      }
      remove() {
        this.count--
      }
      whenSlow(mm) {
        return this.count > 0 || mm.aborted ? Promise.resolve(!mm.aborted) : new Promise((Tm => {
          const fm = () => {
            this.waiting.delete(fm), Tm(!mm.aborted)
          };
          this.waiting.add(fm), mm.addEventListener("abort", fm, {
            once: !0
          })
        }))
      }
    };
    class xm {
      constructor(mm) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new hm.c(45e3, mm), this.slow = new hm.c(8e3, (() => {
          this.countedSlow = !0, am.add()
        }))
      }
      restart() {
        am.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), am.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), am.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, am.remove())
      }
    }
  },
  36355: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      g: () => Am,
      h: () => am,
      i: () => xm
    });
    const hm = 1024,
      Am = 1024 * hm;

    function am(mm) {
      return 2 ** Math.floor(Math.log2(Math.max(1, mm / Am)))
    }

    function xm(mm) {
      return (mm / Am).toFixed(1)
    }
  },
  36557: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      f: () => Dm,
      h: () => wm,
      l: () => xm,
      p: () => im,
      t: () => Rm,
      u: () => Em
    });
    var hm = fm(198);
    const Am = 32 * fm(36355).g,
      am = 6144,
      xm = 4608,
      wm = 512,
      Dm = function() {
        const mm = Em(hm.f.maxChunkHorizAddDistance + 1, hm.f.maxChunkVertAddDistance + 1);
        let Tm = mm;
        for (; pm(Tm) < mm;) Tm++;
        return Tm
      }();

    function im(mm) {
      return Math.floor(Am * mm / am)
    }

    function Rm(mm) {
      const Tm = pm(mm);
      let fm = hm.f.maxChunkHorizAddDistance,
        Am = hm.f.maxChunkVertAddDistance;
      if (Em(fm + 1, Am + 1) <= Tm) return null;
      for (; Em(fm + 1, Am + 1) > Tm && (fm > 0 || Am > 0);) fm > Am ? fm-- : Am--;
      return {
        horizontal: fm,
        vertical: Am
      }
    }

    function pm(mm) {
      return mm - Math.floor(mm / 6)
    }

    function Em(mm, Tm) {
      const fm = Math.max(mm, Tm);
      let hm = 0;
      for (let Am = -fm; Am <= fm; Am++)
        for (let am = -fm; am <= fm; am++)
          for (let xm = -fm; xm <= fm; xm++) om(mm, Tm, Am, am, xm) && hm++;
      return hm
    }

    function om(mm, Tm, fm, hm, Am) {
      const am = fm * fm + Am * Am;
      return mm === Tm ? am + hm * hm <= mm * mm : mm > Tm ? Math.abs(hm) <= Tm && am + hm * hm <= mm * mm : am <= mm * mm && am + hm * hm <= Tm * Tm
    }
  },
  36554: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Km,
      f: () => em,
      g: () => Sm,
      j: () => bm,
      k: () => km
    });
    var hm = fm(198),
      Am = fm(105),
      am = fm(135),
      xm = fm(307),
      wm = fm(4331),
      Dm = fm(677),
      im = fm(36557),
      Rm = fm(36564);
    const pm = 1048576,
      Em = 1024 * pm,
      om = 400 * pm,
      Om = 147456,
      Ym = .5,
      qm = 1.5 * Em,
      jm = 768 * pm;

    function Vm(mm) {
      const {
        os: Tm,
        deviceMemory: fm
      } = mm;
      if ("ios" === Tm) switch ((0, xm.g)(mm)) {
        case "ipad_m":
          return {
            footprintBytes: Im(im.d), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: jm, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: qm, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: jm, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof fm && Number.isFinite(fm) && fm > 0 ? {
        footprintBytes: fm * Em * Ym,
        basis: `memory-${fm}`,
        namesLimit: !0
      } : "android" === Tm ? {
        footprintBytes: jm,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: Im(im.l),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function Im(mm) {
      return om + mm * Om
    }

    function Km() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zm(),
        Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : am.q;
      if ("android" !== mm.os || "mobileAndroid" === Tm) return !0;
      const {
        footprintBytes: fm,
        basis: hm
      } = Vm(mm);
      return "android" === hm || fm > 2 * Em
    }

    function Qm(mm, Tm, fm) {
      var Am, am;
      let {
        footprintBytes: xm,
        basis: wm,
        namesLimit: Dm
      } = Vm(mm);
      if (fm) {
        const mm = Math.min(xm, Im(im.d));
        xm = om + Math.max(0, mm - om) / 2, wm += "+killed", Dm = !0
      }
      null !== Tm && Im(Tm) < xm && (xm = Im(Tm), wm += "+learned", Dm = !0);
      const Rm = function(mm) {
          const Tm = Math.floor((mm - om) / Om);
          return Math.min(im.d, Math.max(im.h, Tm))
        }(xm),
        pm = Dm && Rm < im.d ? Math.min(Rm, im.f) : Rm,
        Em = (0, im.t)(pm);
      return {
        footprintBytes: xm,
        shedFootprintBytes: Dm ? Math.max(xm, Im(pm)) : null,
        chunkCap: pm,
        maxHorizDistance: null !== (Am = null === Em || void 0 === Em ? void 0 : Em.horizontal) && void 0 !== Am ? Am : hm.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (am = null === Em || void 0 === Em ? void 0 : Em.vertical) && void 0 !== am ? am : hm.f.maxChunkVertAddDistance,
        basis: wm
      }
    }
    let nm = null,
      Jm = null,
      cm = null;

    function zm() {
      return nm ??= {
        os: (0, Am.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, xm.h)()
      }, nm
    }

    function Zm() {
      return Qm(zm(), (0, wm.e)(), (0, Dm.B)("wasm").length > 0)
    }

    function km() {
      return cm ??= (0, Rm.s)(Qm(zm(), null, !1).chunkCap), cm
    }

    function bm() {
      return Jm ??= Zm(), Jm
    }

    function Sm() {
      var mm;
      return (null !== (mm = Jm) && void 0 !== mm ? mm : Zm()).basis
    }

    function em(mm, Tm) {
      return mm.setChunkCap(Tm.chunkCap)
    }
  },
  36564: (mm, Tm, fm) => {
    fm.d(Tm, {
      C: () => cm,
      b: () => zm,
      i: () => Km,
      m: () => pm,
      p: () => Qm,
      s: () => jm,
      w: () => Jm
    });
    var hm = fm(36355),
      Am = fm(36557);
    const am = 64 * hm.e,
      xm = 40 * hm.g,
      wm = 36 * hm.g,
      Dm = 20 * hm.g,
      im = 2 * hm.g,
      Rm = 5 * hm.g;

    function pm(mm) {
      return "footprint" !== mm
    }
    const Em = 2 * hm.g,
      om = 4 * hm.g,
      Om = 35 * hm.g + Em + om,
      Ym = 6.5 * hm.g,
      qm = 132.5 * hm.e;

    function jm(mm) {
      const Tm = Ym + (0, Am.p)(mm) + mm * qm;
      return Math.ceil((2 * Om + Tm) / am) * am
    }
    jm(Am.d), hm.g, hm.g, hm.g;
    const Vm = {
        targetBytes: xm,
        leastBytes: Dm
      },
      Im = {
        targetBytes: wm,
        leastBytes: Dm
      };

    function Km(mm) {
      return {
        targetBytes: mm,
        leastBytes: 0
      }
    }

    function Qm(mm) {
      return mm >= Am.d ? Vm : Im
    }
    const nm = 2 * am;

    function Jm(mm, Tm, fm) {
      return mm + Tm + nm > fm
    }
    const cm = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? mm => {
        requestIdleCallback(mm)
      } : null
    };
    class zm {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cm;
        this.memory = mm, this.readPeakStoredChunks = Tm, this.onError = fm, this.clock = hm, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(mm, Tm, fm) {
        this.shedding = {
          shed: mm,
          IO: Tm,
          readDistanceInUse: fm
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(mm) {
        this.footprint = mm
      }
      setCeiling(mm) {
        this.ceilingBytes = mm, this.call((() => {
          this.memory.setCeiling(mm)
        }), void 0)
      }
      ceilingMayRefuse(mm, Tm) {
        var fm;
        return Jm(this.memory.memoryBytes(), mm, null !== (fm = this.ceilingBytes) && void 0 !== fm ? fm : Tm)
      }
      reserveAtJoin(mm) {
        let {
          targetBytes: Tm,
          leastBytes: fm
        } = mm;
        const hm = this.memory.memoryBytes(),
          Am = hm + fm,
          am = Math.max(Tm + (this.ballastOn() ? Rm : 0), Am),
          xm = this.call((() => this.memory.reserveUpFront(am) ? "target" : am > Am && this.memory.reserveUpFront(Am) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== xm) {
          const mm = "least" === xm ? `took ${Am} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${am} bytes was refused at ${hm} bytes; ${mm}`)
        }
        return this.joinReserveTaken = xm, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== xm && this.shedFor("joinReserve"), "none" !== xm
      }
      afterFrame() {
        if (this.stopped) return;
        const mm = this.clock.now(),
          Tm = null !== this.stepsHeldUntil && mm >= this.stepsHeldUntil;
        if (Tm && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && mm >= this.ballastCheckAt && (this.takeBallast(mm), this.stopped)) return;
        const fm = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          hm = Tm && "now" === fm ? "none" : fm,
          {
            requestIdle: Am
          } = this.clock;
        "now" === hm || null !== this.pendingSince && mm - this.pendingSince >= 500 ? this.step() : "idle" === hm && null === this.pendingSince && (null === Am ? this.step() : (this.pendingSince = mm, Am((() => {
          null !== this.pendingSince && this.step()
        })))), mm - this.statsAt >= 1e3 && (this.statsAt = mm, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var mm, Tm;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Tm = this.shedding.readDistanceInUse()) && void 0 !== Tm ? Tm : this.distanceInUse);
          null === (mm = this.footprint) || void 0 === mm || mm.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(mm, Tm) {
        this.noteWorker(`Mesh${mm}`, Tm)
      }
      meshWorkerGone(mm) {
        this.workerGone(`Mesh${mm}`)
      }
      noteWorldgen(mm) {
        this.noteWorker("Worldgen", mm)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(mm, Tm) {
        const fm = this.workers.get(mm);
        null !== fm && void 0 !== fm && fm.gone && (this.replacedRefusals.reserves += fm.stats.reservesRefused, this.replacedRefusals.allocations += fm.stats.allocationsRefused), this.workers.set(mm, {
          stats: Tm,
          gone: !1
        })
      }
      workerGone(mm) {
        const Tm = this.workers.get(mm);
        Tm && (Tm.gone = !0)
      }
      details() {
        var mm, Tm;
        const fm = {
          wasmMemoryNow: `${(0,hm.i)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (fm.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (fm.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Am = this.main;
        if (Am) {
          fm.wasmMemoryMain = Zm(Am);
          const mm = Math.max(0, Am.peakLiveBytes - this.ballastPeakBytes),
            Tm = 0 === this.peakStoredChunks ? "-" : (mm / this.peakStoredChunks / hm.e).toFixed(1);
          fm.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Tm} KiB`
        }
        for (const [hm, {
            stats: xm,
            gone: wm
          }] of this.workers) fm[`wasmMemory${hm}`] = Zm(xm) + (wm ? " (gone)" : "");
        const am = null !== (mm = null === (Tm = this.footprint) || void 0 === Tm ? void 0 : Tm.describe()) && void 0 !== mm ? mm : null;
        return null !== am && (fm.wasmMemoryFootprint = am), fm
      }
      pageKillSnapshot() {
        var mm, Tm, fm, Am, am;
        let xm = (null !== (mm = null === (Tm = this.main) || void 0 === Tm ? void 0 : Tm.reservesRefused) && void 0 !== mm ? mm : 0) + this.replacedRefusals.reserves,
          wm = (null !== (fm = null === (Am = this.main) || void 0 === Am ? void 0 : Am.allocationsRefused) && void 0 !== fm ? fm : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: hm
          }
          of this.workers.values()) xm += hm.reservesRefused, wm += hm.allocationsRefused;
        return {
          wasmMainMiB: Number((0, hm.i)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, hm.i)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: xm,
          refusedAllocations: wm,
          sheds: this.sheds,
          ...null === (am = this.footprint) || void 0 === am ? void 0 : am.snapshot()
        }
      }
      workersMemoryBytes() {
        let mm = 0;
        for (const {
            stats: Tm,
            gone: fm
          }
          of this.workers.values()) mm += fm ? 0 : Tm.memoryBytes;
        return mm
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(im)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(mm) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = mm + 1e3;
        const Tm = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Tm)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(mm) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${mm}: frames grow on demand from here`)
      }
      shedFor(mm) {
        const {
          shedding: Tm
        } = this;
        if (null === Tm) return;
        this.pendingSince = null;
        const fm = this.call((() => Tm.shed(mm)), null);
        this.stopped || (null !== fm ? (this.sheds++, this.shedCap = fm, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), Tm.IO(mm, this.sheds, this.details())) : pm(mm) && this.stopSteps("nothing is left to shed"))
      }
      call(mm, Tm) {
        if (this.stopped) return Tm;
        try {
          return mm()
        } catch (fm) {
          return this.stop(), this.onError(fm), Tm
        }
      }
    }

    function Zm(mm) {
      const Tm = (mm, Tm) => `${mm}/${(0,hm.i)(Tm)}`;
      return `memory ${(0,hm.i)(mm.memoryBytes)} live ${(0,hm.i)(mm.liveBytes)} peak ${(0,hm.i)(mm.peakLiveBytes)} unused ${(0,hm.i)(mm.unusedBytes)} ceiling ${(0,hm.i)(mm.ceilingBytes)} MiB; grows upFront ${Tm(mm.grows.upFront,mm.grownBytes.upFront)} ahead ${Tm(mm.grows.ahead,mm.grownBytes.ahead)} inFrame ${Tm(mm.grows.onDemandInFrame,mm.grownBytes.onDemandInFrame)} other ${Tm(mm.grows.onDemand,mm.grownBytes.onDemand)}; refused reserves ${mm.reservesRefused} allocations ${mm.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);