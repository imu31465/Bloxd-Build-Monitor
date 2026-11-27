export const id = 234;
export const ids = [234];
export const modules = {
  37286: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => be,
      h: () => Me
    });
    var ye = He(1851);
    class be extends Error {
      constructor(ee) {
        super("The game server didn't answer in time"), this.leg = ee, this.name = "SeatRequestTimedOut"
      }
    }
    const Me = new class {
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
        for (const ee of this.waiting) ee()
      }
      remove() {
        this.count--
      }
      whenSlow(ee) {
        return this.count > 0 || ee.aborted ? Promise.resolve(!ee.aborted) : new Promise((ie => {
          const He = () => {
            this.waiting.delete(He), ie(!ee.aborted)
          };
          this.waiting.add(He), ee.addEventListener("abort", He, {
            once: !0
          })
        }))
      }
    };
    class Ke {
      constructor(ee) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new ye.e(45e3, ee), this.slow = new ye.e(8e3, (() => {
          this.countedSlow = !0, Me.add()
        }))
      }
      restart() {
        Me.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), Me.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), Me.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, Me.remove())
      }
    }
  },
  36956: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      g: () => be,
      k: () => Me,
      m: () => Ke
    });
    const ye = 1024,
      be = 1024 * ye;

    function Me(ee) {
      return 2 ** Math.floor(Math.log2(Math.max(1, ee / be)))
    }

    function Ke(ee) {
      return (ee / be).toFixed(1)
    }
  },
  37272: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      d: () => Fe,
      g: () => Ue,
      k: () => Ke,
      o: () => Je,
      q: () => oe,
      s: () => ke
    });
    var ye = He(186);
    const be = 32 * He(36956).g,
      Me = 6144,
      Ke = 4608,
      Ue = 512,
      Fe = function() {
        const ee = ke(ye.g.maxChunkHorizAddDistance + 1, ye.g.maxChunkVertAddDistance + 1);
        let ie = ee;
        for (; Re(ie) < ee;) ie++;
        return ie
      }();

    function Je(ee) {
      return Math.floor(be * ee / Me)
    }

    function oe(ee) {
      const ie = Re(ee);
      let He = ye.g.maxChunkHorizAddDistance,
        be = ye.g.maxChunkVertAddDistance;
      if (ke(He + 1, be + 1) <= ie) return null;
      for (; ke(He + 1, be + 1) > ie && (He > 0 || be > 0);) He > be ? He-- : be--;
      return {
        horizontal: He,
        vertical: be
      }
    }

    function Re(ee) {
      return ee - Math.floor(ee / 6)
    }

    function ke(ee, ie) {
      const He = Math.max(ee, ie);
      let ye = 0;
      for (let be = -He; be <= He; be++)
        for (let Me = -He; Me <= He; Me++)
          for (let Ke = -He; Ke <= He; Ke++) qe(ee, ie, be, Me, Ke) && ye++;
      return ye
    }

    function qe(ee, ie, He, ye, be) {
      const Me = He * He + be * be;
      return ee === ie ? Me + ye * ye <= ee * ee : ee > ie ? Math.abs(ye) <= ie && Me + ye * ye <= ee * ee : Me <= ee * ee && Me + ye * ye <= ie * ie
    }
  },
  37266: (ee, ie, He) => {
    He.d(ie, {
      e: () => We,
      h: () => le,
      k: () => me,
      n: () => ue,
      r: () => Ve,
      u: () => ve,
      x: () => Le
    });
    var ye = He(186),
      be = He(97),
      Me = He(125),
      Ke = He(288),
      Ue = He(4763),
      Fe = He(649),
      Je = He(670),
      oe = He(4771),
      Re = He(4781),
      ke = He(37272),
      qe = He(37281);
    const fe = 1048576,
      Te = 1024 * fe,
      pe = 400 * fe,
      Xe = 147456,
      ze = .5,
      Be = 2048,
      Ee = 1.5 * Te,
      ge = 768 * fe;

    function Oe(ee) {
      const {
        os: ie,
        deviceMemory: He
      } = ee;
      if ("ios" === ie) switch ((0, Ke.f)(ee)) {
        case "ipad_m":
          return {
            footprintBytes: de(ke.b), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: ge, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: Ee, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: ge, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof He && Number.isFinite(He) && He > 0 ? {
        footprintBytes: He * Te * ze,
        basis: `memory-${He}`,
        namesLimit: !0
      } : "android" === ie ? {
        footprintBytes: ge,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: de(ke.k),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function de(ee) {
      return pe + ee * Xe
    }

    function We() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae(),
        ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Me.siteUsed;
      if ("android" !== ee.os || "mobileAndroid" === ie) return !0;
      const {
        footprintBytes: He,
        basis: ye
      } = Oe(ee);
      return "android" === ye || He > 2 * Te
    }

    function te(ee) {
      const ie = Math.min(ee, de(ke.b));
      return pe + Math.max(0, ie - pe) / 2
    }

    function Ze(ee, ie, He) {
      var be, Me, Ke, Ue;
      let Fe = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
          footprintBytes: Je,
          basis: qe,
          namesLimit: fe
        } = Oe(ee);
      He && (Je = te(Je), qe += "+killed", fe = !0), null !== ie && de(ie) < Je && (Je = de(ie), qe += "+learned", fe = !0), qe += (0, Re.y)(null !== (be = ee.x32) && void 0 !== be ? be : null) + (0, oe.k)(null !== (Me = ee.lowRam) && void 0 !== Me ? Me : null), "fix" === ee.x32 && de(Be) < Je && (Je = de(Be), fe = !0), Fe && (Je = te(Je), qe += "+refused", fe = !0);
      const Te = function(ee) {
          const ie = Math.floor((ee - pe) / Xe);
          return Math.min(ke.b, Math.max(ke.g, ie))
        }(Je),
        ze = fe && Te < ke.b ? Math.min(Te, ke.d) : Te,
        Ee = (0, ke.q)(ze);
      return {
        footprintBytes: Je,
        shedFootprintBytes: fe ? Math.max(Je, de(ze)) : null,
        chunkCap: ze,
        maxHorizDistance: null !== (Ke = null === Ee || void 0 === Ee ? void 0 : Ee.horizontal) && void 0 !== Ke ? Ke : ye.g.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Ue = null === Ee || void 0 === Ee ? void 0 : Ee.vertical) && void 0 !== Ue ? Ue : ye.g.maxChunkVertAddDistance,
        basis: qe
      }
    }
    let we = null,
      De = null,
      Pe = null;

    function Ae() {
      var ee, ie;
      return we ??= {
        os: (0, be.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Ke.i)()
      }, {
        ...we,
        x32: null !== (ee = (0, Re.w)()) && void 0 !== ee ? ee : void 0,
        lowRam: null !== (ie = (0, oe.g)()) && void 0 !== ie ? ie : void 0
      }
    }

    function Ye() {
      return Ze(Ae(), (0, Ue.h)(), (0, Fe.J)("wasm").length > 0, Le())
    }

    function Ve() {
      return Pe ??= (0, qe.k)(Ze(Ae(), null, !1, Le()).chunkCap), Pe
    }
    const ae = "wasmMemoryRecord",
      ce = {
        halvedAt: null,
        reloadSpent: !1
      };

    function xe() {
      let ee = null;
      try {
        var ie;
        ee = JSON.parse(null !== (ie = (0, Je.k)((0, Je.o)(), ae)) && void 0 !== ie ? ie : "null")
      } catch {
        return ce
      }
      if ("object" !== typeof ee || null === ee) return ce;
      const {
        halvedAt: He,
        reloadSpent: ye
      } = ee;
      return {
        halvedAt: "number" === typeof He && Number.isFinite(He) ? He : null,
        reloadSpent: !0 === ye
      }
    }

    function Le() {
      return null !== xe().halvedAt
    }

    function Ce(ee) {
      const ie = (0, Je.o)(),
        He = JSON.stringify(ee);
      try {
        null === ie || void 0 === ie || ie.setItem(ae, He)
      } catch {
        return !1
      }
      return (0, Je.k)(ie, ae) === He
    }

    function ve() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const He = xe();
      return null === He.halvedAt ? Ce({
        halvedAt: ee,
        reloadSpent: ie
      }) ? (Pe = null, De = null, "halve") : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent") : He.reloadSpent ? "spent" : Ce({
        ...He,
        reloadSpent: !0
      }) ? "reload" : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent")
    }

    function ue() {
      return De ??= Ye(), De
    }

    function me() {
      var ee;
      return (null !== (ee = De) && void 0 !== ee ? ee : Ye()).basis
    }

    function le(ee, ie) {
      return ee.setChunkCap(ie.chunkCap)
    }
  },
  37281: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ze,
      h: () => ge,
      i: () => Re,
      j: () => Oe,
      k: () => ze,
      l: () => We,
      q: () => te,
      u: () => ke
    });
    var ye = He(36956),
      be = He(37272);
    const Me = 64 * ye.d,
      Ke = 40 * ye.g,
      Ue = 36 * ye.g,
      Fe = 20 * ye.g,
      Je = 2 * ye.g,
      oe = 5 * ye.g;

    function Re(ee) {
      return "footprint" !== ee && "gcPressure" !== ee
    }

    function ke(ee) {
      return Re(ee) ? "wasm memory was refused" : "gcPressure" === ee ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const qe = 2 * ye.g,
      fe = 4 * ye.g,
      Te = 35 * ye.g + qe + fe,
      pe = 6.5 * ye.g,
      Xe = 132.5 * ye.d;

    function ze(ee) {
      const ie = pe + (0, be.o)(ee) + ee * Xe;
      return Math.ceil((2 * Te + ie) / Me) * Me
    }
    ze(be.b), ye.g, ye.g, ye.g;
    const Be = {
        targetBytes: Ke,
        leastBytes: Fe
      },
      Ee = {
        targetBytes: Ue,
        leastBytes: Fe
      };

    function ge(ee) {
      return {
        targetBytes: ee,
        leastBytes: 0
      }
    }

    function Oe(ee) {
      return ee >= be.b ? Be : Ee
    }
    const de = 2 * Me;

    function We(ee, ie, He) {
      return ee + ie + de > He
    }
    const te = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? ee => {
        requestIdleCallback(ee)
      } : null
    };
    class Ze {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : te;
        this.memory = ee, this.readPeakStoredChunks = ie, this.onError = He, this.clock = ye, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(ee, ie, He) {
        this.shedding = {
          shed: ee,
          RR: ie,
          readDistanceInUse: He
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(ee) {
        this.footprint = ee
      }
      setGcPressure(ee) {
        this.gcPressure = {
          highEpisode: ee,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(ee) {
        this.ceilingBytes = ee, this.call((() => {
          this.memory.setCeiling(ee)
        }), void 0)
      }
      ceilingMayRefuse(ee, ie) {
        var He;
        return We(this.memory.memoryBytes(), ee, null !== (He = this.ceilingBytes) && void 0 !== He ? He : ie)
      }
      reserveAtJoin(ee) {
        let {
          targetBytes: ie,
          leastBytes: He
        } = ee;
        const ye = this.memory.memoryBytes(),
          be = ye + He,
          Me = Math.max(ie + (this.ballastOn() ? oe : 0), be),
          Ke = this.call((() => this.memory.reserveUpFront(Me) ? "target" : Me > be && this.memory.reserveUpFront(be) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Ke) {
          const ee = "least" === Ke ? `took ${be} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Me} bytes was refused at ${ye} bytes; ${ee}`)
        }
        return this.joinReserveTaken = Ke, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Ke && this.shedFor("joinReserve"), "none" !== Ke
      }
      afterFrame() {
        if (this.stopped) return;
        const ee = this.clock.now(),
          ie = null !== this.stepsHeldUntil && ee >= this.stepsHeldUntil;
        if (ie && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && ee >= this.ballastCheckAt && (this.takeBallast(ee), this.stopped)) return;
        const He = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          ye = ie && "now" === He ? "none" : He,
          {
            requestIdle: be
          } = this.clock;
        "now" === ye || null !== this.pendingSince && ee - this.pendingSince >= 500 ? this.step() : "idle" === ye && null === this.pendingSince && (null === be ? this.step() : (this.pendingSince = ee, be((() => {
          null !== this.pendingSince && this.step()
        })))), ee - this.statsAt >= 1e3 && (this.statsAt = ee, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(ee))
      }
      refreshStats() {
        this.call((() => {
          var ee, ie;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (ie = this.shedding.readDistanceInUse()) && void 0 !== ie ? ie : this.distanceInUse);
          null === (ee = this.footprint) || void 0 === ee || ee.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(ee, ie) {
        this.noteWorker(`Mesh${ee}`, ie)
      }
      meshWorkerGone(ee) {
        this.workerGone(`Mesh${ee}`)
      }
      noteWorldgen(ee) {
        this.noteWorker("Worldgen", ee)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(ee, ie) {
        const He = this.workers.get(ee);
        null !== He && void 0 !== He && He.gone && (this.replacedRefusals.reserves += He.stats.reservesRefused, this.replacedRefusals.allocations += He.stats.allocationsRefused), this.workers.set(ee, {
          stats: ie,
          gone: !1
        })
      }
      workerGone(ee) {
        const ie = this.workers.get(ee);
        ie && (ie.gone = !0)
      }
      details() {
        var ee, ie;
        const He = this.memory.memoryBytes(),
          be = {
            wasmMemoryNow: `${(0,ye.m)(He)} MiB`,
            wasmMemoryMiB: String(Math.floor(He / ye.g))
          };
        null !== this.joinReserveTaken && (be.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (be.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Me = this.main;
        if (Me) {
          be.wasmMemoryMain = we(Me);
          const ee = Math.max(0, Me.peakLiveBytes - this.ballastPeakBytes),
            ie = 0 === this.peakStoredChunks ? "-" : (ee / this.peakStoredChunks / ye.d).toFixed(1);
          be.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${ie} KiB`
        }
        for (const [ye, {
            stats: Ue,
            gone: Fe
          }] of this.workers) be[`wasmMemory${ye}`] = we(Ue) + (Fe ? " (gone)" : "");
        const Ke = null !== (ee = null === (ie = this.footprint) || void 0 === ie ? void 0 : ie.describe()) && void 0 !== ee ? ee : null;
        return null !== Ke && (be.wasmMemoryFootprint = Ke), be
      }
      pageKillSnapshot() {
        var ee, ie, He, be, Me;
        let Ke = (null !== (ee = null === (ie = this.main) || void 0 === ie ? void 0 : ie.reservesRefused) && void 0 !== ee ? ee : 0) + this.replacedRefusals.reserves,
          Ue = (null !== (He = null === (be = this.main) || void 0 === be ? void 0 : be.allocationsRefused) && void 0 !== He ? He : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: ye
          }
          of this.workers.values()) Ke += ye.reservesRefused, Ue += ye.allocationsRefused;
        return {
          wasmMainMiB: Number((0, ye.m)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, ye.m)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Ke,
          refusedAllocations: Ue,
          sheds: this.sheds,
          ...null === (Me = this.footprint) || void 0 === Me ? void 0 : Me.snapshot()
        }
      }
      workersMemoryBytes() {
        let ee = 0;
        for (const {
            stats: ie,
            gone: He
          }
          of this.workers.values()) ee += He ? 0 : ie.memoryBytes;
        return ee
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(ee) {
        const ie = this.gcPressure;
        if (null === ie) return;
        if (null !== ie.nextAt || "undefined" !== typeof document && document.hidden || (ie.nextAt = ee + 6e4), null === ie.nextAt || ee < ie.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const He = ie.highEpisode();
        null !== He && He !== ie.shedEpisode && (ie.shedEpisode = He, ie.nextAt = ee + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Je)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(ee) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = ee + 1e3;
        const ie = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, ie)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(ee) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${ee}: frames grow on demand from here`)
      }
      shedFor(ee) {
        const {
          shedding: ie
        } = this;
        if (null === ie) return;
        this.pendingSince = null;
        const He = this.call((() => ie.shed(ee)), null);
        if (this.stopped) return;
        if (null === He) return void(Re(ee) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = He, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const ye = "gcPressure" === ee ? ++this.gcSheds : this.sheds - this.gcSheds;
        ie.RR(ee, ye, this.details())
      }
      call(ee, ie) {
        if (this.stopped) return ie;
        try {
          return ee()
        } catch (He) {
          return this.stop(), this.onError(He), ie
        }
      }
    }

    function we(ee) {
      const ie = (ee, ie) => `${ee}/${(0,ye.m)(ie)}`;
      return `memory ${(0,ye.m)(ee.memoryBytes)} live ${(0,ye.m)(ee.liveBytes)} peak ${(0,ye.m)(ee.peakLiveBytes)} unused ${(0,ye.m)(ee.unusedBytes)} ceiling ${(0,ye.m)(ee.ceilingBytes)} MiB; grows upFront ${ie(ee.grows.upFront,ee.grownBytes.upFront)} ahead ${ie(ee.grows.ahead,ee.grownBytes.ahead)} inFrame ${ie(ee.grows.onDemandInFrame,ee.grownBytes.onDemandInFrame)} other ${ie(ee.grows.onDemand,ee.grownBytes.onDemand)}; refused reserves ${ee.reservesRefused} allocations ${ee.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);