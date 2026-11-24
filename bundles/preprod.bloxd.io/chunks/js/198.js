export const id = 198;
export const ids = [198];
export const modules = {
  34364: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => gp,
      h: () => ui,
      l: () => ei,
      p: () => ki,
      r: () => Li,
      v: () => Di,
      w: () => Pi,
      y: () => ji,
      C: () => Ai
    });
    var Op = cp(259),
      op = cp(25),
      Ip = cp(104),
      Sp = cp(1650),
      xp = cp(4515),
      Lp = cp(2993),
      Yp = cp(3e3),
      Dp = cp(44);
    const {
      windows: Ap,
      target: Pp,
      stepDown: Wp,
      stepUp: yp,
      noGain: Up
    } = Yp.d, wp = 1e3 / 60 * 1.08, vp = 1e3 / 55, tp = 1e3 / 45, Hp = 1e3 / 30 * .92, dp = 1e3 / 30 * 1.08;
    class ep {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(pp, ip) {
        const cp = pp - this.lastMs;
        this.lastMs = pp;
        const Op = function(pp) {
          if (pp <= 0 || pp > 100) return -1;
          if (pp <= wp) return 0;
          if (pp >= vp && pp <= tp) return 1;
          return pp >= Hp && pp <= dp ? 2 : -1
        }(cp);
        0 === Op && 2 === this.runBand && ip && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), Op !== this.runBand && (this.runBand = Op, this.runLength = 0), Op < 0 || ++this.runLength < 3 || (0 === Op ? this.votes60++ : 1 === Op ? (this.votesMid++, this.sumMidMs += cp) : (this.votes30++, ip && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const jp = Ap.windowMs,
      kp = Ap.settleMs,
      mp = Ap.graceMs,
      Rp = Ap.minIntervals,
      qp = 1e3 * Rp / jp,
      Mp = Math.floor(1e4 / jp),
      Cp = Up.backoffMs,
      Ep = Up.maxMs;
    class Xp {
      constructor(pp, ip) {
        let {
          lowest: cp,
          startStep: Op = 0,
          noGain: op = null,
          upWait: Ip = null
        } = ip;
        this.hooks = pp, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new ep, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = Pp.maxFps, this.lowest = cp, this.step = Math.min(Op, cp), this.noGain = op, this.climbing = this.step > 0;
        const Sp = cp + 1;
        this.downUntilMs = new Array(Sp).fill(0), this.downBackoffMs = new Array(Sp).fill(0), this.noGainFps = new Array(Sp).fill(0), this.noGainFps[0] = null === op ? 0 : op.fps, this.upFailures = new Array(Sp).fill(0), this.upUntilMs = new Array(Sp).fill(0), null !== Ip && Ip.step >= 0 && Ip.step < Sp && (this.upUntilMs[Ip.step] = Ip.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(pp, cp && !Op), !cp) return void this.leave(pp);
        const op = pp - this.lastFrameMs,
          Ip = this.resizeStall(pp);
        if (op > 2e3 && !Ip && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = pp, this.quietUntilMs = Math.max(this.quietUntilMs, pp + mp), this.graceUntilMs = pp + mp, this.windowStartMs = -1, void(this.slowStartMs = -1);
        op > 500 && (this.hitch(pp), Ip && (this.slowStartMs = -1)), this.lastFrameMs = pp, pp >= this.quietUntilMs && this.countWindow(pp, ip, Op) || ip && pp >= this.graceUntilMs && this.countSlow(pp, Op)
      }
      countWindow(pp, ip, cp) {
        if (this.windowStartMs < 0) return !!ip && (this.windowStartMs = pp, this.lastDrawnMs = pp, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = cp, !1);
        if (this.windowMasked ||= cp, !ip) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, pp - this.lastDrawnMs), this.lastDrawnMs = pp;
        const Op = pp - this.windowStartMs;
        if (Op < jp) return !1;
        const op = this.windowIntervals,
          Ip = 1e3 * op / Op,
          Sp = this.windowHeld,
          xp = this.windowMaxIntervalMs,
          Lp = this.windowMasked;
        if (this.windowStartMs = -1, op < Rp) return !1;
        this.slowStartMs = -1;
        const Yp = this.targetFps(),
          Dp = Ip >= Yp * Pp.cleanShare && xp <= Pp.cleanMaxIntervalMs && (0 === Sp || Ip >= Yp);
        return this.decide(Ip, 1, Dp, Ip < Yp * Pp.dropShare, Lp, pp), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Pp.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(pp, ip) {
        if (this.slowStartMs < 0) return this.slowStartMs = pp, this.slowIntervals = 0, void(this.slowMasked = ip);
        this.slowMasked ||= ip, this.slowIntervals++;
        const cp = pp - this.slowStartMs;
        if (cp < 1e4) return;
        const Op = 1e3 * this.slowIntervals / cp,
          op = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(pp, ip), Op < qp && (this.windowStartMs = -1, this.decide(Op, Mp, !1, !0, op, pp))
      }
      resizeStall(pp) {
        return this.lastFrameMs - this.resizedMs <= kp && pp - this.lastFrameMs <= 15e3
      }
      paused(pp) {
        this.refresh.frame(pp, !1), pp - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, pp + mp), this.graceUntilMs = pp + mp), this.lastFrameMs = pp, this.slowStartMs = -1, this.hitch(pp)
      }
      resized(pp) {
        this.resizedMs = pp, this.hitch(pp)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(pp) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(pp))
      }
      hitch(pp) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, pp + kp)
      }
      left(pp) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const ip = this.phase;
        "watch" !== ip.kind && (this.phase = {
          kind: "watch"
        }, "down" === ip.kind && (this.downUntilMs[ip.from] = pp + Cp, this.noGainFps[ip.from] = 0, 0 === ip.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, pp + Cp)
        })), this.setStep(ip.from, 0, pp, "left"), "up" === ip.kind && (this.climbed = ip.fromClimbed))
      }
      decide(pp, ip, cp, Op, op, Ip) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: Ip,
          step: this.step,
          fps: Math.round(10 * pp) / 10,
          windows: ip,
          masked: op,
          dropping: Op
        });
        const Sp = this.phase;
        switch (Sp.kind) {
          case "watch":
            return void this.watch(pp, ip, cp, Op, op, Ip);
          case "down": {
            if (Sp.judged += ip, Sp.fpsSum += pp * ip, op || (Sp.clean += ip, Sp.cleanFpsSum += pp * ip), Sp.judged < Wp.judgeWindows) return;
            const cp = Sp.clean > 0 ? Sp.cleanFpsSum / Sp.clean : Sp.fpsSum / Sp.judged;
            return void(cp >= Sp.fromFps * Wp.keepGain ? this.keepDown(Sp.from, cp, Ip) : this.noGainFrom(Sp, cp, Ip))
          }
          case "up":
            return cp ? void(++Sp.judged >= yp.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: Sp.from,
              heldWindows: 0,
              below: Sp.fromClimbed
            }, this.record(Ip, pp, "up_kept"))) : (op ? (this.watchAt(Sp.from), this.setStep(Sp.from, pp, Ip, "spoiled")) : this.failUp(this.step, Sp.from, pp, Ip), void(this.climbed = Sp.fromClimbed))
        }
      }
      watch(pp, ip, cp, Op, op, Ip) {
        const Sp = this.climbed;
        null !== Sp && !Op && !op && ++Sp.heldWindows >= yp.heldWindows && (this.climbed = null, this.record(Ip, pp, "sx"), this.hooks.sx(this.step)), Op ? (this.dropRun += ip, this.dropRunFpsSum += pp * ip, this.dropRunMasked ||= op, op || (this.dropRunClean += ip, this.dropRunCleanFpsSum += pp * ip)) : this.resetDropRun(), op && cp || (this.cleanRun = cp ? this.cleanRun + 1 : 0);
        const xp = null !== this.climbed ? yp : Wp;
        if (this.dropRun >= (this.dropRunMasked ? xp.maskedWindows : xp.dropWindows)) {
          const ip = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            cp = this.dropRunClean >= Wp.dropWindows && ip < this.noGainFps[this.step] * Up.heavierShare;
          this.resetDropRun();
          const Op = this.climbed;
          return void(null !== Op ? (this.failUp(this.step, Op.from, pp, Ip), this.climbed = Op.below) : this.step < this.lowest && (cp || this.waitOver(Ip)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: ip,
            early: !this.waitOver(Ip),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, ip, Ip, "down")))
        }
        const Lp = this.step - 1;
        Lp >= 0 && this.cleanRun >= (this.climbing ? yp.climbWindows : yp.cleanWindows) && Ip >= this.upUntilMs[Lp] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Lp, pp, Ip, "up"))
      }
      waitOver(pp) {
        return !(0 === this.step && null !== this.noGain && pp < this.noGain.untilMs) && pp >= this.downUntilMs[this.step]
      }
      keepDown(pp, ip, cp) {
        this.watchAt(this.step), this.downBackoffMs[pp] = 0, this.noGainFps[pp] = 0, this.record(cp, ip, "down_kept"), 0 === pp && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.aW(this.step)
      }
      noGainFrom(pp, ip, cp) {
        var Op, op;
        let {
          from: Ip,
          fromFps: Sp,
          early: xp
        } = pp;
        const Lp = 0 === Ip ? null !== (Op = null === (op = this.noGain) || void 0 === op ? void 0 : op.backoffMs) && void 0 !== Op ? Op : 0 : this.downBackoffMs[Ip],
          Yp = 0 === Lp ? Cp : xp ? Lp : Math.min(2 * Lp, Ep),
          Dp = Math.max(Sp, ip);
        this.downBackoffMs[Ip] = Yp, this.downUntilMs[Ip] = cp + Yp, this.noGainFps[Ip] = Dp, 0 === Ip && (this.noGain = {
          untilMs: cp + Yp,
          backoffMs: Yp,
          fps: Dp
        }, this.hooks.noGain(this.noGain)), this.watchAt(Ip), this.setStep(Ip, ip, cp, "no_gain")
      }
      failUp(pp, ip, cp, Op) {
        this.climbing = !1;
        const op = ++this.upFailures[pp],
          Ip = yp.failWaitsMs;
        this.upUntilMs[pp] = Op + Ip[Math.min(op, Ip.length) - 1], this.watchAt(ip), this.setStep(ip, cp, Op, "up_failed"), this.hooks.upFailed(pp)
      }
      watchAt(pp) {
        this.phase = {
          kind: "watch"
        }, this.climbed = pp === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(pp, ip, cp, Op) {
        const op = pp !== this.step;
        op && (this.climbed = null), this.step = pp, this.record(cp, ip, Op), op && (this.slowStartMs = -1, this.resized(cp), this.hooks.changed(pp))
      }
      record(pp, ip, cp) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: pp,
          step: this.step,
          fps: Math.round(10 * ip) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: cp
        })
      }
    }
    var lp = cp(34367),
      Qp = cp(3211),
      Jp = cp(34375);
    const Bp = "autoGraphics",
      Np = 6048e5,
      Tp = "startScale";

    function fp() {
      return (0, Lp.G)(op.c.get("clientEscMenuOptions").pixelScale) * (0, Lp.C)()
    }

    function bp() {
      return (0, Lp.s)(fp())
    }

    function hp() {
      const pp = Dp.h.getItem(Bp);
      return "object" !== typeof pp || null === pp || "string" !== typeof pp.gpu ? null : pp
    }

    function ap(pp) {
      return {
        untilEpochMs: Date.now() + (pp.untilMs - performance.now()),
        backoffMs: pp.backoffMs,
        fps: pp.fps
      }
    }

    function np(pp) {
      return void 0 === pp || "number" !== typeof pp.fps ? null : {
        untilMs: performance.now() + (pp.untilEpochMs - Date.now()),
        backoffMs: pp.backoffMs,
        fps: pp.fps
      }
    }
    let Fp = null;

    function gp() {
      if (null === Fp) {
        const pp = new URLSearchParams(window.location.search).get("msaa");
        Fp = op.c.get("clientEscMenuOptions").antiAliasing && ("0" === pp || "1" !== pp && !(0, xp.c)("antiAliasing") && (0, Qp.e)())
      }
      return Fp
    }

    function Gp(pp) {
      const ip = "number" === typeof pp ? Date.now() - pp : -1;
      return ip >= 0 && ip < Np
    }
    let rp = null;

    function Zp() {
      return rp ??= (0, Ip.getDeviceDefaultPixelScale)(), zp(rp)
    }

    function zp(pp) {
      const ip = op.c.get("clientEscMenuOptions");
      return ip.pixelSmoothing && !(0, xp.c)("pixelScale") && ip.pixelScale === pp
    }
    let sp = null,
      Kp = 0;

    function Vp() {
      if (null === sp || Kp !== fp()) {
        var pp;
        Kp = fp();
        const ip = Number(null !== (pp = new URLSearchParams(window.location.search).get(Tp)) && void 0 !== pp ? pp : ""),
          cp = bp();
        if (ip > 0 && ip <= 1) sp = (0, Lp.z)(cp, cp[0] / ip);
        else {
          const pp = hp(),
            ip = (0, Lp.z)(cp, (0, Lp.A)(fp())),
            Op = !(0, Qp.g)() && Gp(null === pp || void 0 === pp ? void 0 : pp.heldAt) && (null === pp || void 0 === pp ? void 0 : pp.heldTarget) === fp() ? null === pp || void 0 === pp ? void 0 : pp.heldN : void 0;
          sp = "number" === typeof Op ? Math.min(ip, (0, Lp.z)(cp, Op)) : ip
        }
      }
      return sp
    }

    function ii(pp, ip) {
      var cp;
      const Op = ip.indexOf(null !== (cp = pp.failedUpN) && void 0 !== cp ? cp : -1);
      return Op >= 0 && Gp(pp.failedUpAt) ? {
        step: Op,
        untilMs: performance.now() + Yp.d.stepUp.failWaitsMs[0]
      } : null
    }
    let ci = null,
      Oi = !1,
      oi = "";
    const Ii = new Set;

    function Si() {
      for (const pp of Ii) pp()
    }

    function xi() {
      return Oi ? null : (Ui(), null === ci ? (null !== rp || null !== (0, Ip.peekGpuVendor)() ? Zp() : zp(1)) ? Vp() : null : Zp() ? ci.currentStep() : null)
    }

    function Li() {
      const pp = xi();
      if (null === pp) return null;
      const ip = bp(),
        cp = ip[Math.min(pp, ip.length - 1)];
      return cp === Yi() ? null : cp
    }

    function Yi() {
      return (0, Lp.x)(op.c.get("clientEscMenuOptions").pixelScale, (0, Lp.C)())
    }

    function Di() {
      return null !== ci && null !== Li()
    }

    function Ai(pp) {
      return Ii.add(pp), () => {
        Ii.delete(pp)
      }
    }

    function Pi(pp, ip, cp) {
      var op;
      if (null !== ci || Oi || (0, Qp.g)()) return;
      const Ip = (0, lp.d)(pp, ip, cp);
      null !== Ip && ((0, Qp.j)(Ip.vendor), "" !== Ip.renderer && (0, Op.l)(Ip.vendor, Ip.renderer)), oi = `${pp}:${(null===Ip||void 0===Ip?void 0:Ip.renderer)||(null===Ip||void 0===Ip?void 0:Ip.vendor)||""}`, (null === (op = hp()) || void 0 === op ? void 0 : op.gpu) !== oi && (Dp.h.setItem(Bp, {
        gpu: oi
      }), sp = null), yi(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var pp;
          null === (pp = ci) || void 0 === pp || pp.hidden()
        } catch (ip) {
          ji(), console.error("The quality steps stopped", ip)
        }
      }))
    }
    let Wi = 0;

    function yi() {
      var pp;
      const ip = null !== (pp = hp()) && void 0 !== pp ? pp : {
          gpu: oi
        },
        cp = bp();
      Wi = fp(), ci = new Xp({
          changed: Si,
          aW: () => {
            wi({
              heldN: void 0
            })
          },
          sx: pp => {
            var ip;
            const cp = bp()[pp],
              Op = {
                heldN: cp,
                heldAt: Date.now(),
                heldTarget: fp()
              };
            (null === (ip = hp()) || void 0 === ip ? void 0 : ip.failedUpN) === cp && (Op.failedUpN = void 0), wi(Op)
          },
          upFailed: pp => {
            wi({
              failedUpN: bp()[pp],
              failedUpAt: Date.now()
            })
          },
          noGain: pp => {
            wi({
              noGain: null === pp ? void 0 : ap(pp)
            })
          }
        }, {
          lowest: cp.length - 1,
          startStep: Vp(),
          noGain: np(ip.noGain),
          upWait: ii(ip, cp)
        }),
        function(pp) {
          const ip = {
            get step() {
              return pp.currentStep()
            },
            get n() {
              var pp;
              return null !== (pp = Li()) && void 0 !== pp ? pp : Yi()
            },
            get scale() {
              var pp;
              return bp()[0] / (null !== (pp = Li()) && void 0 !== pp ? pp : Yi())
            },
            get msaaOff() {
              return gp()
            },
            log: pp.log,
            windows: pp.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: ip,
            configurable: !0
          })
        }(ci), Si()
    }

    function Ui() {
      null !== ci && fp() !== Wi && (sp = null, yi())
    }

    function wi(pp) {
      Dp.h.setItem(Bp, {
        ...hp(),
        ...pp,
        gpu: oi
      })
    }
    let vi = 0,
      ti = 0,
      Hi = 0,
      di = !1;

    function ei() {
      vi++
    }

    function ui(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Ui(), null !== ci && (pp - Hi >= 1e3 && (di = vi - ti > Yp.d.sceneChange.meshesPerSecond, ti = vi, Hi = pp), Jp.c.isHeld() ? ci.paused(pp) : ci.frame(pp, ip, cp && !document.hidden && Zp(), di || Op > 0 || (0, Sp.l)()))
    }

    function ji() {
      if (!Oi) {
        Oi = !0, null !== ci && (ci = null, wi({
          noGain: void 0
        }));
        try {
          Si()
        } catch (pp) {
          console.error("The quality steps' resize to the player's n failed", pp)
        }
      }
    }

    function ki() {
      var pp;
      null === (pp = ci) || void 0 === pp || pp.resized(performance.now())
    }
  },
  34367: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(104),
      op = cp(129);

    function Ip(pp, ip, cp) {
      if ("webgpu" === pp) return cp ? ((0, Op.seedGpuVendor)(cp), {
        vendor: cp,
        renderer: ""
      }) : null;
      try {
        const cp = "webgl" === pp ? ip.getContext("webgl2") : ip.getContext("webgl");
        "webgl" === pp && cp && (0, op.z)(cp);
        const Ip = null === cp || void 0 === cp ? void 0 : cp.getExtension("WEBGL_debug_renderer_info");
        if (cp && Ip) {
          const pp = String(cp.getParameter(Ip.UNMASKED_VENDOR_WEBGL)),
            ip = String(cp.getParameter(Ip.UNMASKED_RENDERER_WEBGL));
          return (0, Op.seedGpuVendor)(pp), (0, op.F)(pp, ip), {
            vendor: pp,
            renderer: ip
          }
        }
        cp && (0, op.F)(String(cp.getParameter(cp.VENDOR)), String(cp.getParameter(cp.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);