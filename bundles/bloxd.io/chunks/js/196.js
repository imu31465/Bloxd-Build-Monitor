export const id = 196;
export const ids = [196];
export const modules = {
  34095: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => dk,
      f: () => KF,
      j: () => PF,
      l: () => sF,
      m: () => yF,
      n: () => aF,
      o: () => LF,
      s: () => QF,
      v: () => qF
    });
    var Xk = Ik(25),
      Tk = Ik(95),
      ik = Ik(1580),
      yk = Ik(4402),
      lk = Ik(2830),
      ak = Ik(2835),
      qk = Ik(41);
    const {
      windows: Lk,
      target: tk,
      stepDown: Zk,
      stepUp: jk,
      noGain: ek
    } = ak.e, wk = 1e3 / 60 * 1.08, Hk = 1e3 / 55, Jk = 1e3 / 45, xk = 1e3 / 30 * .92, Pk = 1e3 / 30 * 1.08;
    class Kk {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(kk, Fk) {
        const Ik = kk - this.lastMs;
        this.lastMs = kk;
        const Xk = function(kk) {
          if (kk <= 0 || kk > 100) return -1;
          if (kk <= wk) return 0;
          if (kk >= Hk && kk <= Jk) return 1;
          return kk >= xk && kk <= Pk ? 2 : -1
        }(Ik);
        0 === Xk && 2 === this.runBand && Fk && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), Xk !== this.runBand && (this.runBand = Xk, this.runLength = 0), Xk < 0 || ++this.runLength < 3 || (0 === Xk ? this.votes60++ : 1 === Xk ? (this.votesMid++, this.sumMidMs += Ik) : (this.votes30++, Fk && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const Qk = Lk.windowMs,
      sk = Lk.settleMs,
      Vk = Lk.graceMs,
      zk = Lk.minIntervals,
      Sk = 1e3 * zk / Qk,
      vk = Math.floor(1e4 / Qk),
      Ek = ek.backoffMs,
      Ok = ek.maxMs;
    class nk {
      constructor(kk, Fk) {
        let {
          lowest: Ik,
          startStep: Xk = 0,
          noGain: Tk = null,
          upWait: ik = null
        } = Fk;
        this.hooks = kk, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new Kk, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = tk.maxFps, this.lowest = Ik, this.step = Math.min(Xk, Ik), this.noGain = Tk, this.climbing = this.step > 0;
        const yk = Ik + 1;
        this.downUntilMs = new Array(yk).fill(0), this.downBackoffMs = new Array(yk).fill(0), this.noGainFps = new Array(yk).fill(0), this.noGainFps[0] = null === Tk ? 0 : Tk.fps, this.upFailures = new Array(yk).fill(0), this.upUntilMs = new Array(yk).fill(0), null !== ik && ik.step >= 0 && ik.step < yk && (this.upUntilMs[ik.step] = ik.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(kk, Ik && !Xk), !Ik) return void this.leave(kk);
        const Tk = kk - this.lastFrameMs,
          ik = this.resizeStall(kk);
        if (Tk > 2e3 && !ik && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = kk, this.quietUntilMs = Math.max(this.quietUntilMs, kk + Vk), this.graceUntilMs = kk + Vk, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Tk > 500 && (this.hitch(kk), ik && (this.slowStartMs = -1)), this.lastFrameMs = kk, kk >= this.quietUntilMs && this.countWindow(kk, Fk, Xk) || Fk && kk >= this.graceUntilMs && this.countSlow(kk, Xk)
      }
      countWindow(kk, Fk, Ik) {
        if (this.windowStartMs < 0) return !!Fk && (this.windowStartMs = kk, this.lastDrawnMs = kk, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = Ik, !1);
        if (this.windowMasked ||= Ik, !Fk) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, kk - this.lastDrawnMs), this.lastDrawnMs = kk;
        const Xk = kk - this.windowStartMs;
        if (Xk < Qk) return !1;
        const Tk = this.windowIntervals,
          ik = 1e3 * Tk / Xk,
          yk = this.windowHeld,
          lk = this.windowMaxIntervalMs,
          ak = this.windowMasked;
        if (this.windowStartMs = -1, Tk < zk) return !1;
        this.slowStartMs = -1;
        const qk = this.targetFps(),
          Lk = ik >= qk * tk.cleanShare && lk <= tk.cleanMaxIntervalMs && (0 === yk || ik >= qk);
        return this.decide(ik, 1, Lk, ik < qk * tk.dropShare, ak, kk), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(tk.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(kk, Fk) {
        if (this.slowStartMs < 0) return this.slowStartMs = kk, this.slowIntervals = 0, void(this.slowMasked = Fk);
        this.slowMasked ||= Fk, this.slowIntervals++;
        const Ik = kk - this.slowStartMs;
        if (Ik < 1e4) return;
        const Xk = 1e3 * this.slowIntervals / Ik,
          Tk = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(kk, Fk), Xk < Sk && (this.windowStartMs = -1, this.decide(Xk, vk, !1, !0, Tk, kk))
      }
      resizeStall(kk) {
        return this.lastFrameMs - this.resizedMs <= sk && kk - this.lastFrameMs <= 15e3
      }
      paused(kk) {
        this.refresh.frame(kk, !1), kk - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, kk + Vk), this.graceUntilMs = kk + Vk), this.lastFrameMs = kk, this.slowStartMs = -1, this.hitch(kk)
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
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, kk + sk)
      }
      left(kk) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const Fk = this.phase;
        "watch" !== Fk.kind && (this.phase = {
          kind: "watch"
        }, "down" === Fk.kind && (this.downUntilMs[Fk.from] = kk + Ek, this.noGainFps[Fk.from] = 0, 0 === Fk.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, kk + Ek)
        })), this.setStep(Fk.from, 0, kk, "left"), "up" === Fk.kind && (this.climbed = Fk.fromClimbed))
      }
      decide(kk, Fk, Ik, Xk, Tk, ik) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: ik,
          step: this.step,
          fps: Math.round(10 * kk) / 10,
          windows: Fk,
          masked: Tk,
          dropping: Xk
        });
        const yk = this.phase;
        switch (yk.kind) {
          case "watch":
            return void this.watch(kk, Fk, Ik, Xk, Tk, ik);
          case "down": {
            if (yk.judged += Fk, yk.fpsSum += kk * Fk, Tk || (yk.clean += Fk, yk.cleanFpsSum += kk * Fk), yk.judged < Zk.judgeWindows) return;
            const Ik = yk.clean > 0 ? yk.cleanFpsSum / yk.clean : yk.fpsSum / yk.judged;
            return void(Ik >= yk.fromFps * Zk.keepGain ? this.keepDown(yk.from, Ik, ik) : this.noGainFrom(yk, Ik, ik))
          }
          case "up":
            return Ik ? void(++yk.judged >= jk.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: yk.from,
              heldWindows: 0,
              below: yk.fromClimbed
            }, this.record(ik, kk, "up_kept"))) : (Tk ? (this.watchAt(yk.from), this.setStep(yk.from, kk, ik, "spoiled")) : this.failUp(this.step, yk.from, kk, ik), void(this.climbed = yk.fromClimbed))
        }
      }
      watch(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = this.climbed;
        null !== yk && !Xk && !Tk && ++yk.heldWindows >= jk.heldWindows && (this.climbed = null, this.record(ik, kk, "eq"), this.hooks.eq(this.step)), Xk ? (this.dropRun += Fk, this.dropRunFpsSum += kk * Fk, this.dropRunMasked ||= Tk, Tk || (this.dropRunClean += Fk, this.dropRunCleanFpsSum += kk * Fk)) : this.resetDropRun(), Tk && Ik || (this.cleanRun = Ik ? this.cleanRun + 1 : 0);
        const lk = null !== this.climbed ? jk : Zk;
        if (this.dropRun >= (this.dropRunMasked ? lk.maskedWindows : lk.dropWindows)) {
          const Fk = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            Ik = this.dropRunClean >= Zk.dropWindows && Fk < this.noGainFps[this.step] * ek.heavierShare;
          this.resetDropRun();
          const Xk = this.climbed;
          return void(null !== Xk ? (this.failUp(this.step, Xk.from, kk, ik), this.climbed = Xk.below) : this.step < this.lowest && (Ik || this.waitOver(ik)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Fk,
            early: !this.waitOver(ik),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, Fk, ik, "down")))
        }
        const ak = this.step - 1;
        ak >= 0 && this.cleanRun >= (this.climbing ? jk.climbWindows : jk.cleanWindows) && ik >= this.upUntilMs[ak] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(ak, kk, ik, "up"))
      }
      waitOver(kk) {
        return !(0 === this.step && null !== this.noGain && kk < this.noGain.untilMs) && kk >= this.downUntilMs[this.step]
      }
      keepDown(kk, Fk, Ik) {
        this.watchAt(this.step), this.downBackoffMs[kk] = 0, this.noGainFps[kk] = 0, this.record(Ik, Fk, "down_kept"), 0 === kk && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.Gj(this.step)
      }
      noGainFrom(kk, Fk, Ik) {
        var Xk, Tk;
        let {
          from: ik,
          fromFps: yk,
          early: lk
        } = kk;
        const ak = 0 === ik ? null !== (Xk = null === (Tk = this.noGain) || void 0 === Tk ? void 0 : Tk.backoffMs) && void 0 !== Xk ? Xk : 0 : this.downBackoffMs[ik],
          qk = 0 === ak ? Ek : lk ? ak : Math.min(2 * ak, Ok),
          Lk = Math.max(yk, Fk);
        this.downBackoffMs[ik] = qk, this.downUntilMs[ik] = Ik + qk, this.noGainFps[ik] = Lk, 0 === ik && (this.noGain = {
          untilMs: Ik + qk,
          backoffMs: qk,
          fps: Lk
        }, this.hooks.noGain(this.noGain)), this.watchAt(ik), this.setStep(ik, Fk, Ik, "no_gain")
      }
      failUp(kk, Fk, Ik, Xk) {
        this.climbing = !1;
        const Tk = ++this.upFailures[kk],
          ik = jk.failWaitsMs;
        this.upUntilMs[kk] = Xk + ik[Math.min(Tk, ik.length) - 1], this.watchAt(Fk), this.setStep(Fk, Ik, Xk, "up_failed"), this.hooks.upFailed(kk)
      }
      watchAt(kk) {
        this.phase = {
          kind: "watch"
        }, this.climbed = kk === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(kk, Fk, Ik, Xk) {
        const Tk = kk !== this.step;
        Tk && (this.climbed = null), this.step = kk, this.record(Ik, Fk, Xk), Tk && (this.slowStartMs = -1, this.resized(Ik), this.hooks.changed(kk))
      }
      record(kk, Fk, Ik) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: kk,
          step: this.step,
          fps: Math.round(10 * Fk) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: Ik
        })
      }
    }
    var Gk = Ik(34104),
      pk = Ik(3047),
      uk = Ik(34111);
    const bk = "autoGraphics",
      Rk = 6048e5,
      Uk = "startScale";

    function Ck() {
      return (0, lk.R)(Xk.d.get("clientEscMenuOptions").pixelScale) * (0, lk.L)()
    }

    function Nk() {
      return (0, lk.t)(Ck())
    }

    function ck() {
      const kk = qk.j.getItem(bk);
      return "object" !== typeof kk || null === kk || "string" !== typeof kk.gpu ? null : kk
    }

    function Wk(kk) {
      return {
        untilEpochMs: Date.now() + (kk.untilMs - performance.now()),
        backoffMs: kk.backoffMs,
        fps: kk.fps
      }
    }

    function fk(kk) {
      return void 0 === kk || "number" !== typeof kk.fps ? null : {
        untilMs: performance.now() + (kk.untilEpochMs - Date.now()),
        backoffMs: kk.backoffMs,
        fps: kk.fps
      }
    }
    let Bk = null;

    function dk() {
      if (null === Bk) {
        const kk = new URLSearchParams(window.location.search).get("msaa");
        Bk = Xk.d.get("clientEscMenuOptions").antiAliasing && ("0" === kk || "1" !== kk && !(0, yk.e)("antiAliasing") && (0, pk.i)())
      }
      return Bk
    }

    function Yk(kk) {
      const Fk = "number" === typeof kk ? Date.now() - kk : -1;
      return Fk >= 0 && Fk < Rk
    }
    let Ak = null;

    function gk() {
      return Ak ??= (0, Tk.getDeviceDefaultPixelScale)(), mk(Ak)
    }

    function mk(kk) {
      const Fk = Xk.d.get("clientEscMenuOptions");
      return Fk.pixelSmoothing && !(0, yk.e)("pixelScale") && Fk.pixelScale === kk
    }
    let hk = null,
      rk = 0;

    function Dk() {
      if (null === hk || rk !== Ck()) {
        var kk;
        rk = Ck();
        const Fk = Number(null !== (kk = new URLSearchParams(window.location.search).get(Uk)) && void 0 !== kk ? kk : ""),
          Ik = Nk();
        if (Fk > 0 && Fk <= 1) hk = (0, lk.H)(Ik, Ik[0] / Fk);
        else {
          const kk = ck(),
            Fk = (0, lk.H)(Ik, (0, lk.K)(Ck())),
            Xk = !(0, pk.m)() && Yk(null === kk || void 0 === kk ? void 0 : kk.heldAt) && (null === kk || void 0 === kk ? void 0 : kk.heldTarget) === Ck() ? null === kk || void 0 === kk ? void 0 : kk.heldN : void 0;
          hk = "number" === typeof Xk ? Math.min(Fk, (0, lk.H)(Ik, Xk)) : Fk
        }
      }
      return hk
    }

    function Mk(kk, Fk) {
      var Ik;
      const Xk = Fk.indexOf(null !== (Ik = kk.failedUpN) && void 0 !== Ik ? Ik : -1);
      return Xk >= 0 && Yk(kk.failedUpAt) ? {
        step: Xk,
        untilMs: performance.now() + ak.e.stepUp.failWaitsMs[0]
      } : null
    }
    let kF = null,
      FF = !1,
      IF = "";
    const XF = new Set;

    function TF() {
      for (const kk of XF) kk()
    }

    function iF() {
      return FF ? null : (jF(), null === kF ? (null !== Ak || null !== (0, Tk.peekGpuVendor)() ? gk() : mk(1)) ? Dk() : null : gk() ? kF.currentStep() : null)
    }

    function yF() {
      const kk = iF();
      if (null === kk) return null;
      const Fk = Nk(),
        Ik = Fk[Math.min(kk, Fk.length - 1)];
      return Ik === lF() ? null : Ik
    }

    function lF() {
      return (0, lk.B)(Xk.d.get("clientEscMenuOptions").pixelScale, (0, lk.L)())
    }

    function aF() {
      return null !== kF && null !== yF()
    }

    function qF(kk) {
      return XF.add(kk), () => {
        XF.delete(kk)
      }
    }

    function LF(kk, Fk, Ik) {
      var Xk;
      if (null !== kF || FF || (0, pk.m)()) return;
      const Tk = (0, Gk.d)(kk, Fk, Ik);
      null !== Tk && (0, pk.q)(Tk.vendor), IF = `${kk}:${(null===Tk||void 0===Tk?void 0:Tk.renderer)||(null===Tk||void 0===Tk?void 0:Tk.vendor)||""}`, (null === (Xk = ck()) || void 0 === Xk ? void 0 : Xk.gpu) !== IF && (qk.j.setItem(bk, {
        gpu: IF
      }), hk = null), ZF(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var kk;
          null === (kk = kF) || void 0 === kk || kk.hidden()
        } catch (Fk) {
          QF(), console.error("The quality steps stopped", Fk)
        }
      }))
    }
    let tF = 0;

    function ZF() {
      var kk;
      const Fk = null !== (kk = ck()) && void 0 !== kk ? kk : {
          gpu: IF
        },
        Ik = Nk();
      tF = Ck(), kF = new nk({
          changed: TF,
          Gj: () => {
            eF({
              heldN: void 0
            })
          },
          eq: kk => {
            var Fk;
            const Ik = Nk()[kk],
              Xk = {
                heldN: Ik,
                heldAt: Date.now(),
                heldTarget: Ck()
              };
            (null === (Fk = ck()) || void 0 === Fk ? void 0 : Fk.failedUpN) === Ik && (Xk.failedUpN = void 0), eF(Xk)
          },
          upFailed: kk => {
            eF({
              failedUpN: Nk()[kk],
              failedUpAt: Date.now()
            })
          },
          noGain: kk => {
            eF({
              noGain: null === kk ? void 0 : Wk(kk)
            })
          }
        }, {
          lowest: Ik.length - 1,
          startStep: Dk(),
          noGain: fk(Fk.noGain),
          upWait: Mk(Fk, Ik)
        }),
        function(kk) {
          const Fk = {
            get step() {
              return kk.currentStep()
            },
            get n() {
              var kk;
              return null !== (kk = yF()) && void 0 !== kk ? kk : lF()
            },
            get scale() {
              var kk;
              return Nk()[0] / (null !== (kk = yF()) && void 0 !== kk ? kk : lF())
            },
            get msaaOff() {
              return dk()
            },
            log: kk.log,
            windows: kk.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Fk,
            configurable: !0
          })
        }(kF), TF()
    }

    function jF() {
      null !== kF && Ck() !== tF && (hk = null, ZF())
    }

    function eF(kk) {
      qk.j.setItem(bk, {
        ...ck(),
        ...kk,
        gpu: IF
      })
    }
    let wF = 0,
      HF = 0,
      JF = 0,
      xF = !1;

    function PF() {
      wF++
    }

    function KF(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      jF(), null !== kF && (kk - JF >= 1e3 && (xF = wF - HF > ak.e.sceneChange.meshesPerSecond, HF = wF, JF = kk), uk.c.isHeld() ? kF.paused(kk) : kF.frame(kk, Fk, Ik && !document.hidden && gk(), xF || Xk > 0 || (0, ik.p)()))
    }

    function QF() {
      if (!FF) {
        FF = !0, null !== kF && (kF = null, eF({
          noGain: void 0
        }));
        try {
          TF()
        } catch (kk) {
          console.error("The quality steps' resize to the player's n failed", kk)
        }
      }
    }

    function sF() {
      var kk;
      null === (kk = kF) || void 0 === kk || kk.resized(performance.now())
    }
  },
  34104: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik
    });
    var Xk = Ik(95),
      Tk = Ik(123);

    function ik(kk, Fk, Ik) {
      if ("webgpu" === kk) return Ik ? ((0, Xk.seedGpuVendor)(Ik), {
        vendor: Ik,
        renderer: ""
      }) : null;
      try {
        const Ik = "webgl" === kk ? Fk.getContext("webgl2") : Fk.getContext("webgl");
        "webgl" === kk && Ik && (0, Tk.w)(Ik);
        const ik = null === Ik || void 0 === Ik ? void 0 : Ik.getExtension("WEBGL_debug_renderer_info");
        if (Ik && ik) {
          const kk = String(Ik.getParameter(ik.UNMASKED_VENDOR_WEBGL)),
            Fk = String(Ik.getParameter(ik.UNMASKED_RENDERER_WEBGL));
          return (0, Xk.seedGpuVendor)(kk), (0, Tk.A)(kk, Fk), {
            vendor: kk,
            renderer: Fk
          }
        }
        Ik && (0, Tk.A)(String(Ik.getParameter(Ik.VENDOR)), String(Ik.getParameter(Ik.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);