export const id = 186;
export const ids = [186];
export const modules = {
  8926: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Ck,
      e: () => vF,
      h: () => iF,
      j: () => WF,
      k: () => oF,
      l: () => aF,
      m: () => bF,
      p: () => dF,
      s: () => YF,
      w: () => wF
    });
    var Rk = Bk(22),
      tk = Bk(98),
      ak = Bk(1585),
      Xk = Bk(4163),
      bk = Bk(2660),
      wk = Bk(2677),
      dk = Bk(42);
    const {
      windows: sk,
      target: Vk,
      stepDown: Jk,
      stepUp: Ak,
      noGain: ek
    } = wk.e, yk = 1e3 / 60 * 1.08, fk = 1e3 / 55, mk = 1e3 / 45, Wk = 1e3 / 30 * .92, vk = 1e3 / 30 * 1.08;
    class ik {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(kk) {
        const Fk = kk - this.lastMs;
        this.lastMs = kk;
        const Bk = function(kk) {
          if (kk <= 0 || kk > 100) return -1;
          if (kk <= yk) return 0;
          if (kk >= fk && kk <= mk) return 1;
          return kk >= Wk && kk <= vk ? 2 : -1
        }(Fk);
        Bk !== this.runBand && (this.runBand = Bk, this.runLength = 0), Bk < 0 || ++this.runLength < 3 || (0 === Bk ? this.votes60++ : 1 === Bk ? (this.votesMid++, this.sumMidMs += Fk) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const Yk = sk.windowMs,
      Lk = sk.settleMs,
      Ok = sk.graceMs,
      Ek = sk.minIntervals,
      Sk = 1e3 * Ek / Yk,
      Nk = ek.backoffMs,
      Hk = ek.maxMs;
    class uk {
      constructor(kk, Fk) {
        let {
          lowest: Bk,
          startStep: Rk = 0,
          noGain: tk = null,
          upWait: ak = null
        } = Fk;
        this.hooks = kk, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new ik, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = Vk.maxFps, this.lowest = Bk, this.step = Math.min(Rk, Bk), this.noGain = tk, this.climbing = this.step > 0;
        const Xk = Bk + 1;
        this.downUntilMs = new Array(Xk).fill(0), this.downBackoffMs = new Array(Xk).fill(0), this.upFailures = new Array(Xk).fill(0), this.upUntilMs = new Array(Xk).fill(0), null !== ak && ak.step >= 0 && ak.step < Xk && (this.upUntilMs[ak.step] = ak.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(kk), !Bk) return void this.leave(kk);
        const tk = kk - this.lastFrameMs,
          ak = this.resizeStall(kk);
        if (tk > 2e3 && !ak && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = kk, this.quietUntilMs = Math.max(this.quietUntilMs, kk + Ok), this.graceUntilMs = kk + Ok, this.windowStartMs = -1, void(this.slowStartMs = -1);
        tk > 500 && (this.hitch(kk), ak && (this.slowStartMs = -1)), this.lastFrameMs = kk, kk >= this.quietUntilMs && this.countWindow(kk, Fk, Rk) || Fk && kk >= this.graceUntilMs && this.countSlow(kk)
      }
      countWindow(kk, Fk, Bk) {
        if (this.windowStartMs < 0) return !!Fk && (this.windowStartMs = kk, this.lastDrawnMs = kk, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = Bk, !1);
        if (this.windowMasked ||= Bk, !Fk) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, kk - this.lastDrawnMs), this.lastDrawnMs = kk;
        const Rk = kk - this.windowStartMs;
        if (Rk < Yk) return !1;
        const tk = this.windowIntervals,
          ak = 1e3 * tk / Rk,
          Xk = this.windowHeld,
          bk = this.windowMaxIntervalMs,
          wk = this.windowMasked;
        if (this.windowStartMs = -1, tk < Ek) return !1;
        this.slowStartMs = -1;
        const dk = this.targetFps(),
          sk = ak >= dk * Vk.cleanShare && bk <= Vk.cleanMaxIntervalMs && (0 === Xk || ak >= dk);
        return this.decide(ak, sk, ak < dk * Vk.dropShare, wk, kk), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Vk.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(kk) {
        if (this.slowStartMs < 0) return this.slowStartMs = kk, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const Fk = kk - this.slowStartMs;
        if (Fk < 1e4) return;
        const Bk = 1e3 * this.slowIntervals / Fk;
        this.slowStartMs = -1, this.countSlow(kk), Bk < Sk && (this.windowStartMs = -1, this.decide(Bk, !1, !0, !1, kk))
      }
      resizeStall(kk) {
        return this.lastFrameMs - this.resizedMs <= Lk && kk - this.lastFrameMs <= 15e3
      }
      paused(kk) {
        this.refresh.frame(kk), kk - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, kk + Ok), this.graceUntilMs = kk + Ok), this.lastFrameMs = kk, this.slowStartMs = -1, this.hitch(kk)
      }
      resized(kk) {
        this.resizedMs = kk, this.hitch(kk)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(kk) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(kk))
      }
      hitch(kk) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, kk + Lk)
      }
      left(kk) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const Fk = this.phase;
        "watch" !== Fk.kind && (this.phase = {
          kind: "watch"
        }, "down" === Fk.kind && (this.downUntilMs[Fk.from] = Math.max(this.downUntilMs[Fk.from], kk + Nk)), this.setStep(Fk.from, 0, kk, "left"), "up" === Fk.kind && (this.climbed = Fk.fromClimbed))
      }
      decide(kk, Fk, Bk, Rk, tk) {
        const ak = this.phase;
        switch (ak.kind) {
          case "watch":
            return void this.watch(kk, Fk, Bk, Rk, tk);
          case "down":
            if (ak.judged++, ak.fpsSum += kk, ak.dropped ||= Bk, ak.judged < Jk.judgeWindows) return;
            return void(!ak.dropped || ak.fpsSum / ak.judged >= ak.fromFps * Jk.keepGain ? this.keepDown(ak.from, ak.fpsSum / ak.judged, tk) : this.noGainFrom(ak.from, ak.fromFps, tk));
          case "up":
            return Fk ? void(++ak.judged >= Ak.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: ak.from,
              heldWindows: 0,
              below: ak.fromClimbed
            }, this.record(tk, kk, "up_kept"))) : (Rk ? (this.watchAt(ak.from), this.setStep(ak.from, kk, tk, "spoiled")) : this.failUp(this.step, ak.from, kk, tk), void(this.climbed = ak.fromClimbed))
        }
      }
      watch(kk, Fk, Bk, Rk, tk) {
        const ak = this.climbed;
        if (null !== ak && !Bk && !Rk && ++ak.heldWindows >= Ak.heldWindows && (this.climbed = null, this.record(tk, kk, "Hb"), this.hooks.Hb(this.step)), Bk ? (this.dropRun++, this.dropRunFpsSum += kk, this.dropRunMasked ||= Rk) : this.resetDropRun(), Rk && Fk || (this.cleanRun = Fk ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? Jk.maskedWindows : Jk.dropWindows)) {
          const Fk = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const Bk = this.climbed;
          return void(null !== Bk ? (this.failUp(this.step, Bk.from, kk, tk), this.climbed = Bk.below) : this.step < this.lowest && this.downAllowed(tk) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Fk,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, kk, tk, "down")))
        }
        const Xk = this.step - 1;
        Xk >= 0 && this.cleanRun >= (this.climbing ? Ak.climbWindows : Ak.cleanWindows) && this.upAllowed(Xk, tk) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Xk, kk, tk, "up"))
      }
      downAllowed(kk) {
        return !(0 === this.step && null !== this.noGain && kk < this.noGain.untilMs) && kk >= this.downUntilMs[this.step]
      }
      upAllowed(kk, Fk) {
        return this.upFailures[kk] <= Ak.failWaitsMs.length && Fk >= this.upUntilMs[kk]
      }
      keepDown(kk, Fk, Bk) {
        this.watchAt(this.step), this.downBackoffMs[kk] = 0, this.record(Bk, Fk, "down_kept"), 0 === kk && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.lA(this.step)
      }
      noGainFrom(kk, Fk, Bk) {
        var Rk, tk;
        const ak = 0 === kk ? null !== (Rk = null === (tk = this.noGain) || void 0 === tk ? void 0 : tk.backoffMs) && void 0 !== Rk ? Rk : 0 : this.downBackoffMs[kk],
          Xk = 0 === ak ? Nk : Math.min(2 * ak, Hk);
        this.downBackoffMs[kk] = Xk, this.downUntilMs[kk] = Bk + Xk, 0 === kk && (this.noGain = {
          untilMs: Bk + Xk,
          backoffMs: Xk
        }, this.hooks.noGain(this.noGain)), this.watchAt(kk), this.setStep(kk, Fk, Bk, "no_gain")
      }
      failUp(kk, Fk, Bk, Rk) {
        this.climbing = !1;
        const tk = ++this.upFailures[kk];
        this.upUntilMs[kk] = tk <= Ak.failWaitsMs.length ? Rk + Ak.failWaitsMs[tk - 1] : Number.POSITIVE_INFINITY, this.watchAt(Fk), this.setStep(Fk, Bk, Rk, "up_failed"), this.hooks.upFailed(kk)
      }
      watchAt(kk) {
        this.phase = {
          kind: "watch"
        }, this.climbed = kk === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(kk, Fk, Bk, Rk) {
        const tk = kk !== this.step;
        tk && (this.climbed = null), this.step = kk, this.record(Bk, Fk, Rk), tk && (this.slowStartMs = -1, this.resized(Bk), this.hooks.changed(kk))
      }
      record(kk, Fk, Bk) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: kk,
          step: this.step,
          fps: Math.round(10 * Fk) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: Bk
        })
      }
    }
    var Mk = Bk(8932),
      gk = Bk(2906),
      Uk = Bk(8939);
    const ck = "autoGraphics",
      Gk = 6048e5,
      Tk = "startScale";

    function rk() {
      return (0, bk.H)(Rk.c.get("clientEscMenuOptions").pixelScale) * (0, bk.C)()
    }

    function Dk() {
      return (0, bk.m)(rk())
    }

    function zk() {
      const kk = dk.i.getItem(ck);
      return "object" !== typeof kk || null === kk || "string" !== typeof kk.gpu ? null : kk
    }

    function Pk(kk) {
      return {
        untilEpochMs: Date.now() + (kk.untilMs - performance.now()),
        backoffMs: kk.backoffMs
      }
    }

    function hk(kk) {
      return kk ? {
        untilMs: performance.now() + (kk.untilEpochMs - Date.now()),
        backoffMs: kk.backoffMs
      } : null
    }
    let qk = null;

    function Ck() {
      if (null === qk) {
        const kk = new URLSearchParams(window.location.search).get("msaa");
        qk = Rk.c.get("clientEscMenuOptions").antiAliasing && ("0" === kk || "1" !== kk && !(0, Xk.c)("antiAliasing") && (0, gk.h)())
      }
      return qk
    }

    function Zk(kk) {
      const Fk = "number" === typeof kk ? Date.now() - kk : -1;
      return Fk >= 0 && Fk < Gk
    }
    let pk = null;

    function Kk() {
      return pk ??= (0, tk.getDeviceDefaultPixelScale)(), xk(pk)
    }

    function xk(kk) {
      const Fk = Rk.c.get("clientEscMenuOptions");
      return Fk.pixelSmoothing && !(0, Xk.c)("pixelScale") && Fk.pixelScale === kk
    }
    let jk = null,
      lk = 0;

    function nk() {
      if (null === jk || lk !== rk()) {
        var kk;
        lk = rk();
        const Fk = Number(null !== (kk = new URLSearchParams(window.location.search).get(Tk)) && void 0 !== kk ? kk : ""),
          Bk = Dk();
        if (Fk > 0 && Fk <= 1) jk = (0, bk.z)(Bk, Bk[0] / Fk);
        else {
          const kk = zk(),
            Fk = (0, bk.z)(Bk, (0, bk.A)(rk())),
            Rk = !(0, gk.k)() && Zk(null === kk || void 0 === kk ? void 0 : kk.heldAt) && (null === kk || void 0 === kk ? void 0 : kk.heldTarget) === rk() ? null === kk || void 0 === kk ? void 0 : kk.heldN : void 0;
          jk = "number" === typeof Rk ? Math.min(Fk, (0, bk.z)(Bk, Rk)) : Fk
        }
      }
      return jk
    }

    function Ik(kk, Fk) {
      var Bk;
      const Rk = Fk.indexOf(null !== (Bk = kk.failedUpN) && void 0 !== Bk ? Bk : -1);
      return Rk >= 0 && Zk(kk.failedUpAt) ? {
        step: Rk,
        untilMs: performance.now() + wk.e.stepUp.failWaitsMs[0]
      } : null
    }
    let Qk = null,
      kF = !1,
      FF = "";
    const BF = new Set;

    function RF() {
      for (const kk of BF) kk()
    }

    function tF() {
      return kF ? null : (JF(), null === Qk ? (null !== pk || null !== (0, tk.peekGpuVendor)() ? Kk() : xk(1)) ? nk() : null : Kk() ? Qk.currentStep() : null)
    }

    function aF() {
      const kk = tF();
      if (null === kk) return null;
      const Fk = Dk(),
        Bk = Fk[Math.min(kk, Fk.length - 1)];
      return Bk === XF() ? null : Bk
    }

    function XF() {
      return (0, bk.s)(Rk.c.get("clientEscMenuOptions").pixelScale, (0, bk.C)())
    }

    function bF() {
      return null !== Qk && null !== aF()
    }

    function wF(kk) {
      return BF.add(kk), () => {
        BF.delete(kk)
      }
    }

    function dF(kk, Fk, Bk) {
      var Rk;
      if (null !== Qk || kF || (0, gk.k)()) return;
      const tk = (0, Mk.c)(kk, Fk, Bk);
      null !== tk && (0, gk.n)(tk.vendor), FF = `${kk}:${(null===tk||void 0===tk?void 0:tk.renderer)||(null===tk||void 0===tk?void 0:tk.vendor)||""}`, (null === (Rk = zk()) || void 0 === Rk ? void 0 : Rk.gpu) !== FF && (dk.i.setItem(ck, {
        gpu: FF
      }), jk = null), VF(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var kk;
          null === (kk = Qk) || void 0 === kk || kk.hidden()
        } catch (Fk) {
          YF(), console.error("The quality steps stopped", Fk)
        }
      }))
    }
    let sF = 0;

    function VF() {
      var kk;
      const Fk = null !== (kk = zk()) && void 0 !== kk ? kk : {
          gpu: FF
        },
        Bk = Dk();
      sF = rk(), Qk = new uk({
          changed: RF,
          lA: () => {
            AF({
              heldN: void 0
            })
          },
          Hb: kk => {
            var Fk;
            const Bk = Dk()[kk],
              Rk = {
                heldN: Bk,
                heldAt: Date.now(),
                heldTarget: rk()
              };
            (null === (Fk = zk()) || void 0 === Fk ? void 0 : Fk.failedUpN) === Bk && (Rk.failedUpN = void 0), AF(Rk)
          },
          upFailed: kk => {
            AF({
              failedUpN: Dk()[kk],
              failedUpAt: Date.now()
            })
          },
          noGain: kk => {
            AF({
              noGain: null === kk ? void 0 : Pk(kk)
            })
          }
        }, {
          lowest: Bk.length - 1,
          startStep: nk(),
          noGain: hk(Fk.noGain),
          upWait: Ik(Fk, Bk)
        }),
        function(kk) {
          const Fk = {
            get step() {
              return kk.currentStep()
            },
            get n() {
              var kk;
              return null !== (kk = aF()) && void 0 !== kk ? kk : XF()
            },
            get scale() {
              var kk;
              return Dk()[0] / (null !== (kk = aF()) && void 0 !== kk ? kk : XF())
            },
            get msaaOff() {
              return Ck()
            },
            log: kk.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Fk,
            configurable: !0
          })
        }(Qk), RF()
    }

    function JF() {
      null !== Qk && rk() !== sF && (jk = null, VF())
    }

    function AF(kk) {
      dk.i.setItem(ck, {
        ...zk(),
        ...kk,
        gpu: FF
      })
    }
    let eF = 0,
      yF = 0,
      fF = 0,
      mF = !1;

    function WF() {
      eF++
    }

    function vF() {
      return eF
    }

    function iF(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      JF(), null !== Qk && (kk - fF >= 1e3 && (mF = eF - yF > wk.e.sceneChange.meshesPerSecond, yF = eF, fF = kk), Uk.b.isHeld() ? Qk.paused(kk) : Qk.frame(kk, Fk, Bk && !document.hidden && Kk(), mF || Rk > 0 || (0, ak.s)()))
    }

    function YF() {
      if (!kF) {
        kF = !0, null !== Qk && (Qk = null, AF({
          noGain: void 0
        }));
        try {
          RF()
        } catch (kk) {
          console.error("The quality steps' resize to the player's n failed", kk)
        }
      }
    }

    function oF() {
      var kk;
      null === (kk = Qk) || void 0 === kk || kk.resized(performance.now())
    }
  },
  8932: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(98),
      tk = Bk(130);

    function ak(kk, Fk, Bk) {
      if ("webgpu" === kk) return Bk ? ((0, Rk.seedGpuVendor)(Bk), {
        vendor: Bk,
        renderer: ""
      }) : null;
      try {
        const Bk = "webgl" === kk ? Fk.getContext("webgl2") : Fk.getContext("webgl"),
          ak = null === Bk || void 0 === Bk ? void 0 : Bk.getExtension("WEBGL_debug_renderer_info");
        if (Bk && ak) {
          const kk = String(Bk.getParameter(ak.UNMASKED_VENDOR_WEBGL)),
            Fk = String(Bk.getParameter(ak.UNMASKED_RENDERER_WEBGL));
          return (0, Rk.seedGpuVendor)(kk), (0, tk.t)(kk, Fk), {
            vendor: kk,
            renderer: Fk
          }
        }
        Bk && (0, tk.t)(String(Bk.getParameter(Bk.VENDOR)), String(Bk.getParameter(Bk.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);