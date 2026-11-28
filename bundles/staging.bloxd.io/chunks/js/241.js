export const id = 241;
export const ids = [241];
export const modules = {
  38109: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      i: () => Fd,
      j: () => Rd
    });
    var Wd = md(1786);
    class Fd extends Error {
      constructor(dd) {
        super("The game server didn't answer in time"), this.leg = dd, this.name = "SeatRequestTimedOut"
      }
    }
    const Rd = new class {
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
        for (const dd of this.waiting) dd()
      }
      remove() {
        this.count--
      }
      whenSlow(dd) {
        return this.count > 0 || dd.aborted ? Promise.resolve(!dd.aborted) : new Promise((Od => {
          const md = () => {
            this.waiting.delete(md), Od(!dd.aborted)
          };
          this.waiting.add(md), dd.addEventListener("abort", md, {
            once: !0
          })
        }))
      }
    };
    class Xd {
      constructor(dd) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Wd.c(45e3, dd), this.slow = new Wd.c(8e3, (() => {
          this.countedSlow = !0, Rd.add()
        }))
      }
      restart() {
        Rd.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), Rd.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), Rd.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, Rd.remove())
      }
    }
  },
  37652: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      g: () => Fd,
      i: () => Rd,
      k: () => Xd
    });
    const Wd = 1024,
      Fd = 1024 * Wd;

    function Rd(dd) {
      return 2 ** Math.floor(Math.log2(Math.max(1, dd / Fd)))
    }

    function Xd(dd) {
      return (dd / Fd).toFixed(1)
    }
  },
  38096: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      g: () => hd,
      j: () => Kd,
      l: () => Xd,
      o: () => vd,
      q: () => Qd,
      t: () => od
    });
    var Wd = md(218);
    const Fd = 32 * md(37652).g,
      Rd = 6144,
      Xd = 4608,
      Kd = 512,
      hd = function() {
        const dd = od(Wd.i.maxChunkHorizAddDistance + 1, Wd.i.maxChunkVertAddDistance + 1);
        let Od = dd;
        for (; td(Od) < dd;) Od++;
        return Od
      }();

    function vd(dd) {
      return Math.floor(Fd * dd / Rd)
    }

    function Qd(dd) {
      const Od = td(dd);
      let md = Wd.i.maxChunkHorizAddDistance,
        Fd = Wd.i.maxChunkVertAddDistance;
      if (od(md + 1, Fd + 1) <= Od) return null;
      for (; od(md + 1, Fd + 1) > Od && (md > 0 || Fd > 0);) md > Fd ? md-- : Fd--;
      return {
        horizontal: md,
        vertical: Fd
      }
    }

    function td(dd) {
      return dd - Math.floor(dd / 6)
    }

    function od(dd, Od) {
      const md = Math.max(dd, Od);
      let Wd = 0;
      for (let Fd = -md; Fd <= md; Fd++)
        for (let Rd = -md; Rd <= md; Rd++)
          for (let Xd = -md; Xd <= md; Xd++) Nd(dd, Od, Fd, Rd, Xd) && Wd++;
      return Wd
    }

    function Nd(dd, Od, md, Wd, Fd) {
      const Rd = md * md + Fd * Fd;
      return dd === Od ? Rd + Wd * Wd <= dd * dd : dd > Od ? Math.abs(Wd) <= Od && Rd + Wd * Wd <= dd * dd : Rd <= dd * dd && Rd + Wd * Wd <= Od * Od
    }
  },
  38087: (dd, Od, md) => {
    md.d(Od, {
      c: () => Jd,
      e: () => Dd,
      i: () => jd,
      j: () => cd,
      l: () => Ad,
      o: () => zd,
      p: () => Ld
    });
    var Wd = md(218),
      Fd = md(107),
      Rd = md(151),
      Xd = md(333),
      Kd = md(5038),
      hd = md(739),
      vd = md(759),
      Qd = md(5043),
      td = md(5055),
      od = md(38096),
      Nd = md(38102);
    const qd = 1048576,
      Hd = 1024 * qd,
      yd = 400 * qd,
      bd = 147456,
      Td = .5,
      pd = 2048,
      Yd = 1.5 * Hd,
      gd = 768 * qd;

    function wd(dd) {
      const {
        os: Od,
        deviceMemory: md
      } = dd;
      if ("ios" === Od) switch ((0, Xd.h)(dd)) {
        case "ipad_m":
          return {
            footprintBytes: Ed(od.c), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: gd, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: Yd, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: gd, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof md && Number.isFinite(md) && md > 0 ? {
        footprintBytes: md * Hd * Td,
        basis: `memory-${md}`,
        namesLimit: !0
      } : "android" === Od ? {
        footprintBytes: gd,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: Ed(od.l),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function Ed(dd) {
      return yd + dd * bd
    }

    function Jd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ud(),
        Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rd.siteUsed;
      if ("android" !== dd.os || "mobileAndroid" === Od) return !0;
      const {
        footprintBytes: md,
        basis: Wd
      } = wd(dd);
      return "android" === Wd || md > 2 * Hd
    }

    function Ud(dd) {
      const Od = Math.min(dd, Ed(od.c));
      return yd + Math.max(0, Od - yd) / 2
    }

    function xd(dd, Od, md) {
      var Fd, Rd, Xd, Kd;
      let hd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
          footprintBytes: vd,
          basis: Nd,
          namesLimit: qd
        } = wd(dd);
      md && (vd = Ud(vd), Nd += "+killed", qd = !0), null !== Od && Ed(Od) < vd && (vd = Ed(Od), Nd += "+learned", qd = !0), Nd += (0, td.A)(null !== (Fd = dd.x32) && void 0 !== Fd ? Fd : null) + (0, Qd.l)(null !== (Rd = dd.lowRam) && void 0 !== Rd ? Rd : null), "fix" === dd.x32 && Ed(pd) < vd && (vd = Ed(pd), qd = !0), hd && (vd = Ud(vd), Nd += "+refused", qd = !0);
      const Hd = function(dd) {
          const Od = Math.floor((dd - yd) / bd);
          return Math.min(od.c, Math.max(od.j, Od))
        }(vd),
        Td = qd && Hd < od.c ? Math.min(Hd, od.g) : Hd,
        Yd = (0, od.q)(Td);
      return {
        footprintBytes: vd,
        shedFootprintBytes: qd ? Math.max(vd, Ed(Td)) : null,
        chunkCap: Td,
        maxHorizDistance: null !== (Xd = null === Yd || void 0 === Yd ? void 0 : Yd.horizontal) && void 0 !== Xd ? Xd : Wd.i.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Kd = null === Yd || void 0 === Yd ? void 0 : Yd.vertical) && void 0 !== Kd ? Kd : Wd.i.maxChunkVertAddDistance,
        basis: Nd
      }
    }
    let Bd = null,
      Sd = null,
      sd = null;

    function ud() {
      var dd, Od;
      return Bd ??= {
        os: (0, Fd.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Xd.k)()
      }, {
        ...Bd,
        x32: null !== (dd = (0, td.x)()) && void 0 !== dd ? dd : void 0,
        lowRam: null !== (Od = (0, Qd.i)()) && void 0 !== Od ? Od : void 0
      }
    }

    function Vd() {
      return xd(ud(), (0, Kd.d)(), (0, hd.V)("wasm").length > 0, Ld())
    }

    function Ad() {
      return sd ??= (0, Nd.p)(xd(ud(), null, !1, Ld()).chunkCap), sd
    }
    const rd = "wasmMemoryRecord",
      Gd = {
        halvedAt: null,
        reloadSpent: !1
      };

    function nd() {
      let dd = null;
      try {
        var Od;
        dd = JSON.parse(null !== (Od = (0, vd.n)((0, vd.u)(), rd)) && void 0 !== Od ? Od : "null")
      } catch {
        return Gd
      }
      if ("object" !== typeof dd || null === dd) return Gd;
      const {
        halvedAt: md,
        reloadSpent: Wd
      } = dd;
      return {
        halvedAt: "number" === typeof md && Number.isFinite(md) ? md : null,
        reloadSpent: !0 === Wd
      }
    }

    function Ld() {
      return null !== nd().halvedAt
    }

    function Pd(dd) {
      const Od = (0, vd.u)(),
        md = JSON.stringify(dd);
      try {
        null === Od || void 0 === Od || Od.setItem(rd, md)
      } catch {
        return !1
      }
      return (0, vd.n)(Od, rd) === md
    }

    function zd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const md = nd();
      return null === md.halvedAt ? Pd({
        halvedAt: dd,
        reloadSpent: Od
      }) ? (sd = null, Sd = null, "halve") : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent") : md.reloadSpent ? "spent" : Pd({
        ...md,
        reloadSpent: !0
      }) ? "reload" : (console.warn("[bloxd-wasm-client] the tab's memory record wouldn't keep: no further step"), "spent")
    }

    function cd() {
      return Sd ??= Vd(), Sd
    }

    function jd() {
      var dd;
      return (null !== (dd = Sd) && void 0 !== dd ? dd : Vd()).basis
    }

    function Dd(dd, Od) {
      return dd.setChunkCap(Od.chunkCap)
    }
  },
  38102: (dd, Od, md) => {
    md.d(Od, {
      B: () => Ud,
      E: () => od,
      d: () => xd,
      i: () => gd,
      k: () => td,
      l: () => wd,
      p: () => Td,
      t: () => Jd
    });
    var Wd = md(37652),
      Fd = md(38096);
    const Rd = 64 * Wd.e,
      Xd = 40 * Wd.g,
      Kd = 36 * Wd.g,
      hd = 20 * Wd.g,
      vd = 2 * Wd.g,
      Qd = 5 * Wd.g;

    function td(dd) {
      return "footprint" !== dd && "gcPressure" !== dd
    }

    function od(dd) {
      return td(dd) ? "wasm memory was refused" : "gcPressure" === dd ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
    }
    const Nd = 2 * Wd.g,
      qd = 4 * Wd.g,
      Hd = 35 * Wd.g + Nd + qd,
      yd = 6.5 * Wd.g,
      bd = 132.5 * Wd.e;

    function Td(dd) {
      const Od = yd + (0, Fd.o)(dd) + dd * bd;
      return Math.ceil((2 * Hd + Od) / Rd) * Rd
    }
    Td(Fd.c), Wd.g, Wd.g, Wd.g;
    const pd = {
        targetBytes: Xd,
        leastBytes: hd
      },
      Yd = {
        targetBytes: Kd,
        leastBytes: hd
      };

    function gd(dd) {
      return {
        targetBytes: dd,
        leastBytes: 0
      }
    }

    function wd(dd) {
      return dd >= Fd.c ? pd : Yd
    }
    const Ed = 2 * Rd;

    function Jd(dd, Od, md) {
      return dd + Od + Ed > md
    }
    const Ud = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? dd => {
        requestIdleCallback(dd)
      } : null
    };
    class xd {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ud;
        this.memory = dd, this.readPeakStoredChunks = Od, this.onError = md, this.clock = Wd, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
      }
      setShed(dd, Od, md) {
        this.shedding = {
          shed: dd,
          Wt: Od,
          readDistanceInUse: md
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(dd) {
        this.footprint = dd
      }
      setGcPressure(dd) {
        this.gcPressure = {
          highEpisode: dd,
          shedEpisode: null,
          nextAt: null
        }
      }
      setCeiling(dd) {
        this.ceilingBytes = dd, this.call((() => {
          this.memory.setCeiling(dd)
        }), void 0)
      }
      ceilingMayRefuse(dd, Od) {
        var md;
        return Jd(this.memory.memoryBytes(), dd, null !== (md = this.ceilingBytes) && void 0 !== md ? md : Od)
      }
      reserveAtJoin(dd) {
        let {
          targetBytes: Od,
          leastBytes: md
        } = dd;
        const Wd = this.memory.memoryBytes(),
          Fd = Wd + md,
          Rd = Math.max(Od + (this.ballastOn() ? Qd : 0), Fd),
          Xd = this.call((() => this.memory.reserveUpFront(Rd) ? "target" : Rd > Fd && this.memory.reserveUpFront(Fd) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Xd) {
          const dd = "least" === Xd ? `took ${Fd} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Rd} bytes was refused at ${Wd} bytes; ${dd}`)
        }
        return this.joinReserveTaken = Xd, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Xd && this.shedFor("joinReserve"), "none" !== Xd
      }
      afterFrame() {
        if (this.stopped) return;
        const dd = this.clock.now(),
          Od = null !== this.stepsHeldUntil && dd >= this.stepsHeldUntil;
        if (Od && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && dd >= this.ballastCheckAt && (this.takeBallast(dd), this.stopped)) return;
        const md = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Wd = Od && "now" === md ? "none" : md,
          {
            requestIdle: Fd
          } = this.clock;
        "now" === Wd || null !== this.pendingSince && dd - this.pendingSince >= 500 ? this.step() : "idle" === Wd && null === this.pendingSince && (null === Fd ? this.step() : (this.pendingSince = dd, Fd((() => {
          null !== this.pendingSince && this.step()
        })))), dd - this.statsAt >= 1e3 && (this.statsAt = dd, this.refreshStats(), this.checkFootprint(), this.checkGcPressure(dd))
      }
      refreshStats() {
        this.call((() => {
          var dd, Od;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Od = this.shedding.readDistanceInUse()) && void 0 !== Od ? Od : this.distanceInUse);
          null === (dd = this.footprint) || void 0 === dd || dd.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(dd, Od) {
        this.noteWorker(`Mesh${dd}`, Od)
      }
      meshWorkerGone(dd) {
        this.workerGone(`Mesh${dd}`)
      }
      noteWorldgen(dd) {
        this.noteWorker("Worldgen", dd)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(dd, Od) {
        const md = this.workers.get(dd);
        null !== md && void 0 !== md && md.gone && (this.replacedRefusals.reserves += md.stats.reservesRefused, this.replacedRefusals.allocations += md.stats.allocationsRefused), this.workers.set(dd, {
          stats: Od,
          gone: !1
        })
      }
      workerGone(dd) {
        const Od = this.workers.get(dd);
        Od && (Od.gone = !0)
      }
      details() {
        var dd, Od;
        const md = this.memory.memoryBytes(),
          Fd = {
            wasmMemoryNow: `${(0,Wd.k)(md)} MiB`,
            wasmMemoryMiB: String(Math.floor(md / Wd.g))
          };
        null !== this.joinReserveTaken && (Fd.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (Fd.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Rd = this.main;
        if (Rd) {
          Fd.wasmMemoryMain = Bd(Rd);
          const dd = Math.max(0, Rd.peakLiveBytes - this.ballastPeakBytes),
            Od = 0 === this.peakStoredChunks ? "-" : (dd / this.peakStoredChunks / Wd.e).toFixed(1);
          Fd.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Od} KiB`
        }
        for (const [Wd, {
            stats: Kd,
            gone: hd
          }] of this.workers) Fd[`wasmMemory${Wd}`] = Bd(Kd) + (hd ? " (gone)" : "");
        const Xd = null !== (dd = null === (Od = this.footprint) || void 0 === Od ? void 0 : Od.describe()) && void 0 !== dd ? dd : null;
        return null !== Xd && (Fd.wasmMemoryFootprint = Xd), Fd
      }
      pageKillSnapshot() {
        var dd, Od, md, Fd, Rd;
        let Xd = (null !== (dd = null === (Od = this.main) || void 0 === Od ? void 0 : Od.reservesRefused) && void 0 !== dd ? dd : 0) + this.replacedRefusals.reserves,
          Kd = (null !== (md = null === (Fd = this.main) || void 0 === Fd ? void 0 : Fd.allocationsRefused) && void 0 !== md ? md : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Wd
          }
          of this.workers.values()) Xd += Wd.reservesRefused, Kd += Wd.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Wd.k)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Wd.k)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Xd,
          refusedAllocations: Kd,
          sheds: this.sheds,
          ...null === (Rd = this.footprint) || void 0 === Rd ? void 0 : Rd.snapshot()
        }
      }
      workersMemoryBytes() {
        let dd = 0;
        for (const {
            stats: Od,
            gone: md
          }
          of this.workers.values()) dd += md ? 0 : Od.memoryBytes;
        return dd
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      checkGcPressure(dd) {
        const Od = this.gcPressure;
        if (null === Od) return;
        if (null !== Od.nextAt || "undefined" !== typeof document && document.hidden || (Od.nextAt = dd + 6e4), null === Od.nextAt || dd < Od.nextAt) return;
        if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
        const md = Od.highEpisode();
        null !== md && md !== Od.shedEpisode && (Od.shedEpisode = md, Od.nextAt = dd + 3e4, this.shedFor("gcPressure"))
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(vd)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(dd) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = dd + 1e3;
        const Od = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Od)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(dd) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${dd}: frames grow on demand from here`)
      }
      shedFor(dd) {
        const {
          shedding: Od
        } = this;
        if (null === Od) return;
        this.pendingSince = null;
        const md = this.call((() => Od.shed(dd)), null);
        if (this.stopped) return;
        if (null === md) return void(td(dd) && this.stopSteps("nothing is left to shed"));
        this.sheds++, this.shedCap = md, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
        const Wd = "gcPressure" === dd ? ++this.gcSheds : this.sheds - this.gcSheds;
        Od.Wt(dd, Wd, this.details())
      }
      call(dd, Od) {
        if (this.stopped) return Od;
        try {
          return dd()
        } catch (md) {
          return this.stop(), this.onError(md), Od
        }
      }
    }

    function Bd(dd) {
      const Od = (dd, Od) => `${dd}/${(0,Wd.k)(Od)}`;
      return `memory ${(0,Wd.k)(dd.memoryBytes)} live ${(0,Wd.k)(dd.liveBytes)} peak ${(0,Wd.k)(dd.peakLiveBytes)} unused ${(0,Wd.k)(dd.unusedBytes)} ceiling ${(0,Wd.k)(dd.ceilingBytes)} MiB; grows upFront ${Od(dd.grows.upFront,dd.grownBytes.upFront)} ahead ${Od(dd.grows.ahead,dd.grownBytes.ahead)} inFrame ${Od(dd.grows.onDemandInFrame,dd.grownBytes.onDemandInFrame)} other ${Od(dd.grows.onDemand,dd.grownBytes.onDemand)}; refused reserves ${dd.reservesRefused} allocations ${dd.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);