export const id = 215;
export const ids = [215];
export const modules = {
  36689: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      f: () => op,
      g: () => Ip
    });
    var Op = cp(1819);
    class op extends Error {
      constructor(pp) {
        super("The game server didn't answer in time"), this.leg = pp, this.name = "SeatRequestTimedOut"
      }
    }
    const Ip = new class {
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
        for (const pp of this.waiting) pp()
      }
      remove() {
        this.count--
      }
      whenSlow(pp) {
        return this.count > 0 || pp.aborted ? Promise.resolve(!pp.aborted) : new Promise((ip => {
          const cp = () => {
            this.waiting.delete(cp), ip(!pp.aborted)
          };
          this.waiting.add(cp), pp.addEventListener("abort", cp, {
            once: !0
          })
        }))
      }
    };
    class Sp {
      constructor(pp) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Op.e(45e3, pp), this.slow = new Op.e(8e3, (() => {
          this.countedSlow = !0, Ip.add()
        }))
      }
      restart() {
        Ip.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), Ip.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), Ip.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, Ip.remove())
      }
    }
  },
  36481: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      c: () => op,
      e: () => Ip,
      g: () => Sp
    });
    const Op = 1024,
      op = 1024 * Op;

    function Ip(pp) {
      return 2 ** Math.floor(Math.log2(Math.max(1, pp / op)))
    }

    function Sp(pp) {
      return (pp / op).toFixed(1)
    }
  },
  36682: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      g: () => Lp,
      i: () => xp,
      k: () => Sp,
      n: () => Yp,
      o: () => Dp,
      r: () => Pp
    });
    var Op = cp(195);
    const op = 32 * cp(36481).c,
      Ip = 6144,
      Sp = 4608,
      xp = 512,
      Lp = function() {
        const pp = Pp(Op.g.maxChunkHorizAddDistance + 1, Op.g.maxChunkVertAddDistance + 1);
        let ip = pp;
        for (; Ap(ip) < pp;) ip++;
        return ip
      }();

    function Yp(pp) {
      return Math.floor(op * pp / Ip)
    }

    function Dp(pp) {
      const ip = Ap(pp);
      let cp = Op.g.maxChunkHorizAddDistance,
        op = Op.g.maxChunkVertAddDistance;
      if (Pp(cp + 1, op + 1) <= ip) return null;
      for (; Pp(cp + 1, op + 1) > ip && (cp > 0 || op > 0);) cp > op ? cp-- : op--;
      return {
        horizontal: cp,
        vertical: op
      }
    }

    function Ap(pp) {
      return pp - Math.floor(pp / 6)
    }

    function Pp(pp, ip) {
      const cp = Math.max(pp, ip);
      let Op = 0;
      for (let op = -cp; op <= cp; op++)
        for (let Ip = -cp; Ip <= cp; Ip++)
          for (let Sp = -cp; Sp <= cp; Sp++) Wp(pp, ip, op, Ip, Sp) && Op++;
      return Op
    }

    function Wp(pp, ip, cp, Op, op) {
      const Ip = cp * cp + op * op;
      return pp === ip ? Ip + Op * Op <= pp * pp : pp > ip ? Math.abs(Op) <= ip && Ip + Op * Op <= pp * pp : Ip <= pp * pp && Ip + Op * Op <= ip * ip
    }
  },
  36679: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => dp,
      g: () => Xp,
      j: () => Ep,
      m: () => Cp,
      p: () => Mp
    });
    var Op = cp(195),
      op = cp(104),
      Ip = cp(131),
      Sp = cp(291),
      xp = cp(4485),
      Lp = cp(659),
      Yp = cp(36682),
      Dp = cp(36686);
    const Ap = 1048576,
      Pp = 1024 * Ap,
      Wp = 400 * Ap,
      yp = 147456,
      Up = .5,
      wp = 1.5 * Pp,
      vp = 768 * Ap;

    function tp(pp) {
      const {
        os: ip,
        deviceMemory: cp
      } = pp;
      if ("ios" === ip) switch ((0, Sp.i)(pp)) {
        case "ipad_m":
          return {
            footprintBytes: Hp(Yp.d), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: vp, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: wp, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: vp, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof cp && Number.isFinite(cp) && cp > 0 ? {
        footprintBytes: cp * Pp * Up,
        basis: `memory-${cp}`,
        namesLimit: !0
      } : "android" === ip ? {
        footprintBytes: vp,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: Hp(Yp.k),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function Hp(pp) {
      return Wp + pp * yp
    }

    function dp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rp(),
        ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ip.siteUsed;
      if ("android" !== pp.os || "mobileAndroid" === ip) return !0;
      const {
        footprintBytes: cp,
        basis: Op
      } = tp(pp);
      return "android" === Op || cp > 2 * Pp
    }

    function ep(pp, ip, cp) {
      var op, Ip;
      let {
        footprintBytes: Sp,
        basis: xp,
        namesLimit: Lp
      } = tp(pp);
      if (cp) {
        const pp = Math.min(Sp, Hp(Yp.d));
        Sp = Wp + Math.max(0, pp - Wp) / 2, xp += "+killed", Lp = !0
      }
      null !== ip && Hp(ip) < Sp && (Sp = Hp(ip), xp += "+learned", Lp = !0);
      const Dp = function(pp) {
          const ip = Math.floor((pp - Wp) / yp);
          return Math.min(Yp.d, Math.max(Yp.i, ip))
        }(Sp),
        Ap = Lp && Dp < Yp.d ? Math.min(Dp, Yp.g) : Dp,
        Pp = (0, Yp.o)(Ap);
      return {
        footprintBytes: Sp,
        shedFootprintBytes: Lp ? Math.max(Sp, Hp(Ap)) : null,
        chunkCap: Ap,
        maxHorizDistance: null !== (op = null === Pp || void 0 === Pp ? void 0 : Pp.horizontal) && void 0 !== op ? op : Op.g.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Ip = null === Pp || void 0 === Pp ? void 0 : Pp.vertical) && void 0 !== Ip ? Ip : Op.g.maxChunkVertAddDistance,
        basis: xp
      }
    }
    let jp = null,
      kp = null,
      mp = null;

    function Rp() {
      return jp ??= {
        os: (0, op.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Sp.l)()
      }, jp
    }

    function qp() {
      return ep(Rp(), (0, xp.f)(), (0, Lp.J)("wasm").length > 0)
    }

    function Mp() {
      return mp ??= (0, Dp.p)(ep(Rp(), null, !1).chunkCap), mp
    }

    function Cp() {
      return kp ??= qp(), kp
    }

    function Ep() {
      var pp;
      return (null !== (pp = kp) && void 0 !== pp ? pp : qp()).basis
    }

    function Xp(pp, ip) {
      return pp.setChunkCap(ip.chunkCap)
    }
  },
  36686: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Rp,
      j: () => dp,
      k: () => Ap,
      o: () => ep,
      p: () => vp,
      t: () => kp,
      v: () => mp
    });
    var Op = cp(36481),
      op = cp(36682);
    const Ip = 64 * Op.b,
      Sp = 40 * Op.c,
      xp = 36 * Op.c,
      Lp = 20 * Op.c,
      Yp = 2 * Op.c,
      Dp = 5 * Op.c;

    function Ap(pp) {
      return "footprint" !== pp
    }
    const Pp = 2 * Op.c,
      Wp = 4 * Op.c,
      yp = 35 * Op.c + Pp + Wp,
      Up = 6.5 * Op.c,
      wp = 132.5 * Op.b;

    function vp(pp) {
      const ip = Up + (0, op.n)(pp) + pp * wp;
      return Math.ceil((2 * yp + ip) / Ip) * Ip
    }
    vp(op.d), Op.c, Op.c, Op.c;
    const tp = {
        targetBytes: Sp,
        leastBytes: Lp
      },
      Hp = {
        targetBytes: xp,
        leastBytes: Lp
      };

    function dp(pp) {
      return {
        targetBytes: pp,
        leastBytes: 0
      }
    }

    function ep(pp) {
      return pp >= op.d ? tp : Hp
    }
    const jp = 2 * Ip;

    function kp(pp, ip, cp) {
      return pp + ip + jp > cp
    }
    const mp = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? pp => {
        requestIdleCallback(pp)
      } : null
    };
    class Rp {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mp;
        this.memory = pp, this.readPeakStoredChunks = ip, this.onError = cp, this.clock = Op, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(pp, ip, cp) {
        this.shedding = {
          shed: pp,
          Yy: ip,
          readDistanceInUse: cp
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(pp) {
        this.footprint = pp
      }
      setCeiling(pp) {
        this.ceilingBytes = pp, this.call((() => {
          this.memory.setCeiling(pp)
        }), void 0)
      }
      ceilingMayRefuse(pp, ip) {
        var cp;
        return kp(this.memory.memoryBytes(), pp, null !== (cp = this.ceilingBytes) && void 0 !== cp ? cp : ip)
      }
      reserveAtJoin(pp) {
        let {
          targetBytes: ip,
          leastBytes: cp
        } = pp;
        const Op = this.memory.memoryBytes(),
          op = Op + cp,
          Ip = Math.max(ip + (this.ballastOn() ? Dp : 0), op),
          Sp = this.call((() => this.memory.reserveUpFront(Ip) ? "target" : Ip > op && this.memory.reserveUpFront(op) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Sp) {
          const pp = "least" === Sp ? `took ${op} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Ip} bytes was refused at ${Op} bytes; ${pp}`)
        }
        return this.joinReserveTaken = Sp, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Sp && this.shedFor("joinReserve"), "none" !== Sp
      }
      afterFrame() {
        if (this.stopped) return;
        const pp = this.clock.now(),
          ip = null !== this.stepsHeldUntil && pp >= this.stepsHeldUntil;
        if (ip && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && pp >= this.ballastCheckAt && (this.takeBallast(pp), this.stopped)) return;
        const cp = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Op = ip && "now" === cp ? "none" : cp,
          {
            requestIdle: op
          } = this.clock;
        "now" === Op || null !== this.pendingSince && pp - this.pendingSince >= 500 ? this.step() : "idle" === Op && null === this.pendingSince && (null === op ? this.step() : (this.pendingSince = pp, op((() => {
          null !== this.pendingSince && this.step()
        })))), pp - this.statsAt >= 1e3 && (this.statsAt = pp, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var pp, ip;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (ip = this.shedding.readDistanceInUse()) && void 0 !== ip ? ip : this.distanceInUse);
          null === (pp = this.footprint) || void 0 === pp || pp.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(pp, ip) {
        this.noteWorker(`Mesh${pp}`, ip)
      }
      meshWorkerGone(pp) {
        this.workerGone(`Mesh${pp}`)
      }
      noteWorldgen(pp) {
        this.noteWorker("Worldgen", pp)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(pp, ip) {
        const cp = this.workers.get(pp);
        null !== cp && void 0 !== cp && cp.gone && (this.replacedRefusals.reserves += cp.stats.reservesRefused, this.replacedRefusals.allocations += cp.stats.allocationsRefused), this.workers.set(pp, {
          stats: ip,
          gone: !1
        })
      }
      workerGone(pp) {
        const ip = this.workers.get(pp);
        ip && (ip.gone = !0)
      }
      details() {
        var pp, ip;
        const cp = {
          wasmMemoryNow: `${(0,Op.g)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (cp.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (cp.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const op = this.main;
        if (op) {
          cp.wasmMemoryMain = qp(op);
          const pp = Math.max(0, op.peakLiveBytes - this.ballastPeakBytes),
            ip = 0 === this.peakStoredChunks ? "-" : (pp / this.peakStoredChunks / Op.b).toFixed(1);
          cp.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${ip} KiB`
        }
        for (const [Op, {
            stats: Sp,
            gone: xp
          }] of this.workers) cp[`wasmMemory${Op}`] = qp(Sp) + (xp ? " (gone)" : "");
        const Ip = null !== (pp = null === (ip = this.footprint) || void 0 === ip ? void 0 : ip.describe()) && void 0 !== pp ? pp : null;
        return null !== Ip && (cp.wasmMemoryFootprint = Ip), cp
      }
      pageKillSnapshot() {
        var pp, ip, cp, op, Ip;
        let Sp = (null !== (pp = null === (ip = this.main) || void 0 === ip ? void 0 : ip.reservesRefused) && void 0 !== pp ? pp : 0) + this.replacedRefusals.reserves,
          xp = (null !== (cp = null === (op = this.main) || void 0 === op ? void 0 : op.allocationsRefused) && void 0 !== cp ? cp : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Op
          }
          of this.workers.values()) Sp += Op.reservesRefused, xp += Op.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Op.g)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Op.g)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Sp,
          refusedAllocations: xp,
          sheds: this.sheds,
          ...null === (Ip = this.footprint) || void 0 === Ip ? void 0 : Ip.snapshot()
        }
      }
      workersMemoryBytes() {
        let pp = 0;
        for (const {
            stats: ip,
            gone: cp
          }
          of this.workers.values()) pp += cp ? 0 : ip.memoryBytes;
        return pp
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Yp)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(pp) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = pp + 1e3;
        const ip = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, ip)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(pp) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${pp}: frames grow on demand from here`)
      }
      shedFor(pp) {
        const {
          shedding: ip
        } = this;
        if (null === ip) return;
        this.pendingSince = null;
        const cp = this.call((() => ip.shed(pp)), null);
        this.stopped || (null !== cp ? (this.sheds++, this.shedCap = cp, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), ip.Yy(pp, this.sheds, this.details())) : Ap(pp) && this.stopSteps("nothing is left to shed"))
      }
      call(pp, ip) {
        if (this.stopped) return ip;
        try {
          return pp()
        } catch (cp) {
          return this.stop(), this.onError(cp), ip
        }
      }
    }

    function qp(pp) {
      const ip = (pp, ip) => `${pp}/${(0,Op.g)(ip)}`;
      return `memory ${(0,Op.g)(pp.memoryBytes)} live ${(0,Op.g)(pp.liveBytes)} peak ${(0,Op.g)(pp.peakLiveBytes)} unused ${(0,Op.g)(pp.unusedBytes)} ceiling ${(0,Op.g)(pp.ceilingBytes)} MiB; grows upFront ${ip(pp.grows.upFront,pp.grownBytes.upFront)} ahead ${ip(pp.grows.ahead,pp.grownBytes.ahead)} inFrame ${ip(pp.grows.onDemandInFrame,pp.grownBytes.onDemandInFrame)} other ${ip(pp.grows.onDemand,pp.grownBytes.onDemand)}; refused reserves ${pp.reservesRefused} allocations ${pp.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);