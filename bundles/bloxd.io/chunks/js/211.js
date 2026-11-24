export const id = 211;
export const ids = [211];
export const modules = {
  36486: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      f: () => Tk,
      g: () => ik
    });
    var Xk = Ik(1729);
    class Tk extends Error {
      constructor(kk) {
        super("The game server didn't answer in time"), this.leg = kk, this.name = "SeatRequestTimedOut"
      }
    }
    const ik = new class {
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
        for (const kk of this.waiting) kk()
      }
      remove() {
        this.count--
      }
      whenSlow(kk) {
        return this.count > 0 || kk.aborted ? Promise.resolve(!kk.aborted) : new Promise((Fk => {
          const Ik = () => {
            this.waiting.delete(Ik), Fk(!kk.aborted)
          };
          this.waiting.add(Ik), kk.addEventListener("abort", Ik, {
            once: !0
          })
        }))
      }
    };
    class yk {
      constructor(kk) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Xk.c(45e3, kk), this.slow = new Xk.c(8e3, (() => {
          this.countedSlow = !0, ik.add()
        }))
      }
      restart() {
        ik.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), ik.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), ik.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, ik.remove())
      }
    }
  },
  36245: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk,
      h: () => Tk,
      k: () => ik,
      m: () => yk
    });
    const Xk = 1024,
      Tk = 1024 * Xk;

    function ik(kk) {
      return 2 ** Math.floor(Math.log2(Math.max(1, kk / Tk)))
    }

    function yk(kk) {
      return (kk / Tk).toFixed(1)
    }
  },
  36474: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      g: () => ak,
      h: () => lk,
      k: () => yk,
      n: () => qk,
      r: () => Lk,
      s: () => Zk
    });
    var Xk = Ik(187);
    const Tk = 32 * Ik(36245).h,
      ik = 6144,
      yk = 4608,
      lk = 512,
      ak = function() {
        const kk = Zk(Xk.f.maxChunkHorizAddDistance + 1, Xk.f.maxChunkVertAddDistance + 1);
        let Fk = kk;
        for (; tk(Fk) < kk;) Fk++;
        return Fk
      }();

    function qk(kk) {
      return Math.floor(Tk * kk / ik)
    }

    function Lk(kk) {
      const Fk = tk(kk);
      let Ik = Xk.f.maxChunkHorizAddDistance,
        Tk = Xk.f.maxChunkVertAddDistance;
      if (Zk(Ik + 1, Tk + 1) <= Fk) return null;
      for (; Zk(Ik + 1, Tk + 1) > Fk && (Ik > 0 || Tk > 0);) Ik > Tk ? Ik-- : Tk--;
      return {
        horizontal: Ik,
        vertical: Tk
      }
    }

    function tk(kk) {
      return kk - Math.floor(kk / 6)
    }

    function Zk(kk, Fk) {
      const Ik = Math.max(kk, Fk);
      let Xk = 0;
      for (let Tk = -Ik; Tk <= Ik; Tk++)
        for (let ik = -Ik; ik <= Ik; ik++)
          for (let yk = -Ik; yk <= Ik; yk++) jk(kk, Fk, Tk, ik, yk) && Xk++;
      return Xk
    }

    function jk(kk, Fk, Ik, Xk, Tk) {
      const ik = Ik * Ik + Tk * Tk;
      return kk === Fk ? ik + Xk * Xk <= kk * kk : kk > Fk ? Math.abs(Xk) <= Fk && ik + Xk * Xk <= kk * kk : ik <= kk * kk && ik + Xk * Xk <= Fk * Fk
    }
  },
  36466: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Kk,
      g: () => Gk,
      h: () => nk,
      i: () => Ok,
      m: () => Ek
    });
    var Xk = Ik(187),
      Tk = Ik(95),
      ik = Ik(129),
      yk = Ik(284),
      lk = Ik(4371),
      ak = Ik(650),
      qk = Ik(36474),
      Lk = Ik(36479);
    const tk = 1048576,
      Zk = 1024 * tk,
      jk = 400 * tk,
      ek = 147456,
      wk = .5,
      Hk = 1.5 * Zk,
      Jk = 768 * tk;

    function xk(kk) {
      const {
        os: Fk,
        deviceMemory: Ik
      } = kk;
      if ("ios" === Fk) switch ((0, yk.e)(kk)) {
        case "ipad_m":
          return {
            footprintBytes: Pk(qk.c), basis: "ipad-m", namesLimit: !1
          };
        case "ipad":
          return {
            footprintBytes: Jk, basis: "ipad", namesLimit: !0
          };
        case "iphone_6gb":
          return {
            footprintBytes: Hk, basis: "iphone-6gb", namesLimit: !0
          };
        case "iphone":
          return {
            footprintBytes: Jk, basis: "iphone", namesLimit: !0
          }
      }
      return "number" === typeof Ik && Number.isFinite(Ik) && Ik > 0 ? {
        footprintBytes: Ik * Zk * wk,
        basis: `memory-${Ik}`,
        namesLimit: !0
      } : "android" === Fk ? {
        footprintBytes: Jk,
        basis: "android",
        namesLimit: !0
      } : {
        footprintBytes: Pk(qk.k),
        basis: "unreported",
        namesLimit: !1
      }
    }

    function Pk(kk) {
      return jk + kk * ek
    }

    function Kk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sk(),
        Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ik.v;
      if ("android" !== kk.os || "mobileAndroid" === Fk) return !0;
      const {
        footprintBytes: Ik,
        basis: Xk
      } = xk(kk);
      return "android" === Xk || Ik > 2 * Zk
    }

    function Qk(kk, Fk, Ik) {
      var Tk, ik;
      let {
        footprintBytes: yk,
        basis: lk,
        namesLimit: ak
      } = xk(kk);
      if (Ik) {
        const kk = Math.min(yk, Pk(qk.c));
        yk = jk + Math.max(0, kk - jk) / 2, lk += "+killed", ak = !0
      }
      null !== Fk && Pk(Fk) < yk && (yk = Pk(Fk), lk += "+learned", ak = !0);
      const Lk = function(kk) {
          const Fk = Math.floor((kk - jk) / ek);
          return Math.min(qk.c, Math.max(qk.h, Fk))
        }(yk),
        tk = ak && Lk < qk.c ? Math.min(Lk, qk.g) : Lk,
        Zk = (0, qk.r)(tk);
      return {
        footprintBytes: yk,
        shedFootprintBytes: ak ? Math.max(yk, Pk(tk)) : null,
        chunkCap: tk,
        maxHorizDistance: null !== (Tk = null === Zk || void 0 === Zk ? void 0 : Zk.horizontal) && void 0 !== Tk ? Tk : Xk.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (ik = null === Zk || void 0 === Zk ? void 0 : Zk.vertical) && void 0 !== ik ? ik : Xk.f.maxChunkVertAddDistance,
        basis: lk
      }
    }
    let sk = null,
      Vk = null,
      zk = null;

    function Sk() {
      return sk ??= {
        os: (0, Tk.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, yk.i)()
      }, sk
    }

    function vk() {
      return Qk(Sk(), (0, lk.f)(), (0, ak.G)("wasm").length > 0)
    }

    function Ek() {
      return zk ??= (0, Lk.i)(Qk(Sk(), null, !1).chunkCap), zk
    }

    function Ok() {
      return Vk ??= vk(), Vk
    }

    function nk() {
      var kk;
      return (null !== (kk = Vk) && void 0 !== kk ? kk : vk()).basis
    }

    function Gk(kk, Fk) {
      return kk.setChunkCap(Fk.chunkCap)
    }
  },
  36479: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Sk,
      f: () => Kk,
      g: () => tk,
      h: () => Qk,
      i: () => Jk,
      l: () => Vk,
      s: () => zk
    });
    var Xk = Ik(36245),
      Tk = Ik(36474);
    const ik = 64 * Xk.e,
      yk = 40 * Xk.h,
      lk = 36 * Xk.h,
      ak = 20 * Xk.h,
      qk = 2 * Xk.h,
      Lk = 5 * Xk.h;

    function tk(kk) {
      return "footprint" !== kk
    }
    const Zk = 2 * Xk.h,
      jk = 4 * Xk.h,
      ek = 35 * Xk.h + Zk + jk,
      wk = 6.5 * Xk.h,
      Hk = 132.5 * Xk.e;

    function Jk(kk) {
      const Fk = wk + (0, Tk.n)(kk) + kk * Hk;
      return Math.ceil((2 * ek + Fk) / ik) * ik
    }
    Jk(Tk.c), Xk.h, Xk.h, Xk.h;
    const xk = {
        targetBytes: yk,
        leastBytes: ak
      },
      Pk = {
        targetBytes: lk,
        leastBytes: ak
      };

    function Kk(kk) {
      return {
        targetBytes: kk,
        leastBytes: 0
      }
    }

    function Qk(kk) {
      return kk >= Tk.c ? xk : Pk
    }
    const sk = 2 * ik;

    function Vk(kk, Fk, Ik) {
      return kk + Fk + sk > Ik
    }
    const zk = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? kk => {
        requestIdleCallback(kk)
      } : null
    };
    class Sk {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zk;
        this.memory = kk, this.readPeakStoredChunks = Fk, this.onError = Ik, this.clock = Xk, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(kk, Fk, Ik) {
        this.shedding = {
          shed: kk,
          Mj: Fk,
          readDistanceInUse: Ik
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(kk) {
        this.footprint = kk
      }
      setCeiling(kk) {
        this.ceilingBytes = kk, this.call((() => {
          this.memory.setCeiling(kk)
        }), void 0)
      }
      ceilingMayRefuse(kk, Fk) {
        var Ik;
        return Vk(this.memory.memoryBytes(), kk, null !== (Ik = this.ceilingBytes) && void 0 !== Ik ? Ik : Fk)
      }
      reserveAtJoin(kk) {
        let {
          targetBytes: Fk,
          leastBytes: Ik
        } = kk;
        const Xk = this.memory.memoryBytes(),
          Tk = Xk + Ik,
          ik = Math.max(Fk + (this.ballastOn() ? Lk : 0), Tk),
          yk = this.call((() => this.memory.reserveUpFront(ik) ? "target" : ik > Tk && this.memory.reserveUpFront(Tk) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== yk) {
          const kk = "least" === yk ? `took ${Tk} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${ik} bytes was refused at ${Xk} bytes; ${kk}`)
        }
        return this.joinReserveTaken = yk, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== yk && this.shedFor("joinReserve"), "none" !== yk
      }
      afterFrame() {
        if (this.stopped) return;
        const kk = this.clock.now(),
          Fk = null !== this.stepsHeldUntil && kk >= this.stepsHeldUntil;
        if (Fk && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && kk >= this.ballastCheckAt && (this.takeBallast(kk), this.stopped)) return;
        const Ik = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Xk = Fk && "now" === Ik ? "none" : Ik,
          {
            requestIdle: Tk
          } = this.clock;
        "now" === Xk || null !== this.pendingSince && kk - this.pendingSince >= 500 ? this.step() : "idle" === Xk && null === this.pendingSince && (null === Tk ? this.step() : (this.pendingSince = kk, Tk((() => {
          null !== this.pendingSince && this.step()
        })))), kk - this.statsAt >= 1e3 && (this.statsAt = kk, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var kk, Fk;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Fk = this.shedding.readDistanceInUse()) && void 0 !== Fk ? Fk : this.distanceInUse);
          null === (kk = this.footprint) || void 0 === kk || kk.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(kk, Fk) {
        this.noteWorker(`Mesh${kk}`, Fk)
      }
      meshWorkerGone(kk) {
        this.workerGone(`Mesh${kk}`)
      }
      noteWorldgen(kk) {
        this.noteWorker("Worldgen", kk)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(kk, Fk) {
        const Ik = this.workers.get(kk);
        null !== Ik && void 0 !== Ik && Ik.gone && (this.replacedRefusals.reserves += Ik.stats.reservesRefused, this.replacedRefusals.allocations += Ik.stats.allocationsRefused), this.workers.set(kk, {
          stats: Fk,
          gone: !1
        })
      }
      workerGone(kk) {
        const Fk = this.workers.get(kk);
        Fk && (Fk.gone = !0)
      }
      details() {
        var kk, Fk;
        const Ik = {
          wasmMemoryNow: `${(0,Xk.m)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (Ik.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (Ik.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Tk = this.main;
        if (Tk) {
          Ik.wasmMemoryMain = vk(Tk);
          const kk = Math.max(0, Tk.peakLiveBytes - this.ballastPeakBytes),
            Fk = 0 === this.peakStoredChunks ? "-" : (kk / this.peakStoredChunks / Xk.e).toFixed(1);
          Ik.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Fk} KiB`
        }
        for (const [Xk, {
            stats: yk,
            gone: lk
          }] of this.workers) Ik[`wasmMemory${Xk}`] = vk(yk) + (lk ? " (gone)" : "");
        const ik = null !== (kk = null === (Fk = this.footprint) || void 0 === Fk ? void 0 : Fk.describe()) && void 0 !== kk ? kk : null;
        return null !== ik && (Ik.wasmMemoryFootprint = ik), Ik
      }
      pageKillSnapshot() {
        var kk, Fk, Ik, Tk, ik;
        let yk = (null !== (kk = null === (Fk = this.main) || void 0 === Fk ? void 0 : Fk.reservesRefused) && void 0 !== kk ? kk : 0) + this.replacedRefusals.reserves,
          lk = (null !== (Ik = null === (Tk = this.main) || void 0 === Tk ? void 0 : Tk.allocationsRefused) && void 0 !== Ik ? Ik : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Xk
          }
          of this.workers.values()) yk += Xk.reservesRefused, lk += Xk.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Xk.m)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Xk.m)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: yk,
          refusedAllocations: lk,
          sheds: this.sheds,
          ...null === (ik = this.footprint) || void 0 === ik ? void 0 : ik.snapshot()
        }
      }
      workersMemoryBytes() {
        let kk = 0;
        for (const {
            stats: Fk,
            gone: Ik
          }
          of this.workers.values()) kk += Ik ? 0 : Fk.memoryBytes;
        return kk
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(qk)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(kk) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = kk + 1e3;
        const Fk = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Fk)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(kk) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${kk}: frames grow on demand from here`)
      }
      shedFor(kk) {
        const {
          shedding: Fk
        } = this;
        if (null === Fk) return;
        this.pendingSince = null;
        const Ik = this.call((() => Fk.shed(kk)), null);
        this.stopped || (null !== Ik ? (this.sheds++, this.shedCap = Ik, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), Fk.Mj(kk, this.sheds, this.details())) : tk(kk) && this.stopSteps("nothing is left to shed"))
      }
      call(kk, Fk) {
        if (this.stopped) return Fk;
        try {
          return kk()
        } catch (Ik) {
          return this.stop(), this.onError(Ik), Fk
        }
      }
    }

    function vk(kk) {
      const Fk = (kk, Fk) => `${kk}/${(0,Xk.m)(Fk)}`;
      return `memory ${(0,Xk.m)(kk.memoryBytes)} live ${(0,Xk.m)(kk.liveBytes)} peak ${(0,Xk.m)(kk.peakLiveBytes)} unused ${(0,Xk.m)(kk.unusedBytes)} ceiling ${(0,Xk.m)(kk.ceilingBytes)} MiB; grows upFront ${Fk(kk.grows.upFront,kk.grownBytes.upFront)} ahead ${Fk(kk.grows.ahead,kk.grownBytes.ahead)} inFrame ${Fk(kk.grows.onDemandInFrame,kk.grownBytes.onDemandInFrame)} other ${Fk(kk.grows.onDemand,kk.grownBytes.onDemand)}; refused reserves ${kk.reservesRefused} allocations ${kk.allocationsRefused}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);