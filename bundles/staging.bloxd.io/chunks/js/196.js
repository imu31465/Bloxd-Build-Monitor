export const id = 196;
export const ids = [196];
export const modules = {
  34225: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => um,
      e: () => KT,
      h: () => IT,
      j: () => nT,
      m: () => xT,
      q: () => DT,
      t: () => RT,
      w: () => QT,
      z: () => iT
    });
    var hm = fm(23),
      Am = fm(105),
      am = fm(1635),
      xm = fm(4362),
      wm = fm(2898),
      Dm = fm(2900),
      im = fm(37);
    const {
      windows: Rm,
      target: pm,
      stepDown: Em,
      stepUp: om,
      noGain: Om
    } = Dm.b, Ym = 1e3 / 60 * 1.08, qm = 1e3 / 55, jm = 1e3 / 45, Vm = 1e3 / 30 * .92, Im = 1e3 / 30 * 1.08;
    class Km {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(mm, Tm) {
        const fm = mm - this.lastMs;
        this.lastMs = mm;
        const hm = function(mm) {
          if (mm <= 0 || mm > 100) return -1;
          if (mm <= Ym) return 0;
          if (mm >= qm && mm <= jm) return 1;
          return mm >= Vm && mm <= Im ? 2 : -1
        }(fm);
        0 === hm && 2 === this.runBand && Tm && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), hm !== this.runBand && (this.runBand = hm, this.runLength = 0), hm < 0 || ++this.runLength < 3 || (0 === hm ? this.votes60++ : 1 === hm ? (this.votesMid++, this.sumMidMs += fm) : (this.votes30++, Tm && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const Qm = Rm.windowMs,
      nm = Rm.settleMs,
      Jm = Rm.graceMs,
      cm = Rm.minIntervals,
      zm = 1e3 * cm / Qm,
      Zm = Math.floor(1e4 / Qm),
      km = Om.backoffMs,
      bm = Om.maxMs;
    class Sm {
      constructor(mm, Tm) {
        let {
          lowest: fm,
          startStep: hm = 0,
          noGain: Am = null,
          upWait: am = null
        } = Tm;
        this.hooks = mm, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new Km, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = pm.maxFps, this.lowest = fm, this.step = Math.min(hm, fm), this.noGain = Am, this.climbing = this.step > 0;
        const xm = fm + 1;
        this.downUntilMs = new Array(xm).fill(0), this.downBackoffMs = new Array(xm).fill(0), this.noGainFps = new Array(xm).fill(0), this.noGainFps[0] = null === Am ? 0 : Am.fps, this.upFailures = new Array(xm).fill(0), this.upUntilMs = new Array(xm).fill(0), null !== am && am.step >= 0 && am.step < xm && (this.upUntilMs[am.step] = am.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(mm, fm && !hm), !fm) return void this.leave(mm);
        const Am = mm - this.lastFrameMs,
          am = this.resizeStall(mm);
        if (Am > 2e3 && !am && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = mm, this.quietUntilMs = Math.max(this.quietUntilMs, mm + Jm), this.graceUntilMs = mm + Jm, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Am > 500 && (this.hitch(mm), am && (this.slowStartMs = -1)), this.lastFrameMs = mm, mm >= this.quietUntilMs && this.countWindow(mm, Tm, hm) || Tm && mm >= this.graceUntilMs && this.countSlow(mm, hm)
      }
      countWindow(mm, Tm, fm) {
        if (this.windowStartMs < 0) return !!Tm && (this.windowStartMs = mm, this.lastDrawnMs = mm, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = fm, !1);
        if (this.windowMasked ||= fm, !Tm) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, mm - this.lastDrawnMs), this.lastDrawnMs = mm;
        const hm = mm - this.windowStartMs;
        if (hm < Qm) return !1;
        const Am = this.windowIntervals,
          am = 1e3 * Am / hm,
          xm = this.windowHeld,
          wm = this.windowMaxIntervalMs,
          Dm = this.windowMasked;
        if (this.windowStartMs = -1, Am < cm) return !1;
        this.slowStartMs = -1;
        const im = this.targetFps(),
          Rm = am >= im * pm.cleanShare && wm <= pm.cleanMaxIntervalMs && (0 === xm || am >= im);
        return this.decide(am, 1, Rm, am < im * pm.dropShare, Dm, mm), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(pm.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(mm, Tm) {
        if (this.slowStartMs < 0) return this.slowStartMs = mm, this.slowIntervals = 0, void(this.slowMasked = Tm);
        this.slowMasked ||= Tm, this.slowIntervals++;
        const fm = mm - this.slowStartMs;
        if (fm < 1e4) return;
        const hm = 1e3 * this.slowIntervals / fm,
          Am = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(mm, Tm), hm < zm && (this.windowStartMs = -1, this.decide(hm, Zm, !1, !0, Am, mm))
      }
      resizeStall(mm) {
        return this.lastFrameMs - this.resizedMs <= nm && mm - this.lastFrameMs <= 15e3
      }
      paused(mm) {
        this.refresh.frame(mm, !1), mm - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, mm + Jm), this.graceUntilMs = mm + Jm), this.lastFrameMs = mm, this.slowStartMs = -1, this.hitch(mm)
      }
      resized(mm) {
        this.resizedMs = mm, this.hitch(mm)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(mm) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(mm))
      }
      hitch(mm) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, mm + nm)
      }
      left(mm) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const Tm = this.phase;
        "watch" !== Tm.kind && (this.phase = {
          kind: "watch"
        }, "down" === Tm.kind && (this.downUntilMs[Tm.from] = mm + km, this.noGainFps[Tm.from] = 0, 0 === Tm.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, mm + km)
        })), this.setStep(Tm.from, 0, mm, "left"), "up" === Tm.kind && (this.climbed = Tm.fromClimbed))
      }
      decide(mm, Tm, fm, hm, Am, am) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: am,
          step: this.step,
          fps: Math.round(10 * mm) / 10,
          windows: Tm,
          masked: Am,
          dropping: hm
        });
        const xm = this.phase;
        switch (xm.kind) {
          case "watch":
            return void this.watch(mm, Tm, fm, hm, Am, am);
          case "down": {
            if (xm.judged += Tm, xm.fpsSum += mm * Tm, Am || (xm.clean += Tm, xm.cleanFpsSum += mm * Tm), xm.judged < Em.judgeWindows) return;
            const fm = xm.clean > 0 ? xm.cleanFpsSum / xm.clean : xm.fpsSum / xm.judged;
            return void(fm >= xm.fromFps * Em.keepGain ? this.keepDown(xm.from, fm, am) : this.noGainFrom(xm, fm, am))
          }
          case "up":
            return fm ? void(++xm.judged >= om.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: xm.from,
              heldWindows: 0,
              below: xm.fromClimbed
            }, this.record(am, mm, "up_kept"))) : (Am ? (this.watchAt(xm.from), this.setStep(xm.from, mm, am, "spoiled")) : this.failUp(this.step, xm.from, mm, am), void(this.climbed = xm.fromClimbed))
        }
      }
      watch(mm, Tm, fm, hm, Am, am) {
        const xm = this.climbed;
        null !== xm && !hm && !Am && ++xm.heldWindows >= om.heldWindows && (this.climbed = null, this.record(am, mm, "ni"), this.hooks.ni(this.step)), hm ? (this.dropRun += Tm, this.dropRunFpsSum += mm * Tm, this.dropRunMasked ||= Am, Am || (this.dropRunClean += Tm, this.dropRunCleanFpsSum += mm * Tm)) : this.resetDropRun(), Am && fm || (this.cleanRun = fm ? this.cleanRun + 1 : 0);
        const wm = null !== this.climbed ? om : Em;
        if (this.dropRun >= (this.dropRunMasked ? wm.maskedWindows : wm.dropWindows)) {
          const Tm = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            fm = this.dropRunClean >= Em.dropWindows && Tm < this.noGainFps[this.step] * Om.heavierShare;
          this.resetDropRun();
          const hm = this.climbed;
          return void(null !== hm ? (this.failUp(this.step, hm.from, mm, am), this.climbed = hm.below) : this.step < this.lowest && (fm || this.waitOver(am)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Tm,
            early: !this.waitOver(am),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, Tm, am, "down")))
        }
        const Dm = this.step - 1;
        Dm >= 0 && this.cleanRun >= (this.climbing ? om.climbWindows : om.cleanWindows) && am >= this.upUntilMs[Dm] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Dm, mm, am, "up"))
      }
      waitOver(mm) {
        return !(0 === this.step && null !== this.noGain && mm < this.noGain.untilMs) && mm >= this.downUntilMs[this.step]
      }
      keepDown(mm, Tm, fm) {
        this.watchAt(this.step), this.downBackoffMs[mm] = 0, this.noGainFps[mm] = 0, this.record(fm, Tm, "down_kept"), 0 === mm && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.mO(this.step)
      }
      noGainFrom(mm, Tm, fm) {
        var hm, Am;
        let {
          from: am,
          fromFps: xm,
          early: wm
        } = mm;
        const Dm = 0 === am ? null !== (hm = null === (Am = this.noGain) || void 0 === Am ? void 0 : Am.backoffMs) && void 0 !== hm ? hm : 0 : this.downBackoffMs[am],
          im = 0 === Dm ? km : wm ? Dm : Math.min(2 * Dm, bm),
          Rm = Math.max(xm, Tm);
        this.downBackoffMs[am] = im, this.downUntilMs[am] = fm + im, this.noGainFps[am] = Rm, 0 === am && (this.noGain = {
          untilMs: fm + im,
          backoffMs: im,
          fps: Rm
        }, this.hooks.noGain(this.noGain)), this.watchAt(am), this.setStep(am, Tm, fm, "no_gain")
      }
      failUp(mm, Tm, fm, hm) {
        this.climbing = !1;
        const Am = ++this.upFailures[mm],
          am = om.failWaitsMs;
        this.upUntilMs[mm] = hm + am[Math.min(Am, am.length) - 1], this.watchAt(Tm), this.setStep(Tm, fm, hm, "up_failed"), this.hooks.upFailed(mm)
      }
      watchAt(mm) {
        this.phase = {
          kind: "watch"
        }, this.climbed = mm === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(mm, Tm, fm, hm) {
        const Am = mm !== this.step;
        Am && (this.climbed = null), this.step = mm, this.record(fm, Tm, hm), Am && (this.slowStartMs = -1, this.resized(fm), this.hooks.changed(mm))
      }
      record(mm, Tm, fm) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: mm,
          step: this.step,
          fps: Math.round(10 * Tm) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: fm
        })
      }
    }
    var em = fm(34230),
      Nm = fm(3117),
      Gm = fm(34239);
    const Xm = "autoGraphics",
      Pm = 6048e5,
      Hm = "startScale";

    function ym() {
      return (0, wm.W)(hm.c.get("clientEscMenuOptions").pixelScale) * (0, wm.P)()
    }

    function Cm() {
      return (0, wm.A)(ym())
    }

    function rm() {
      const mm = im.g.getItem(Xm);
      return "object" !== typeof mm || null === mm || "string" !== typeof mm.gpu ? null : mm
    }

    function sm(mm) {
      return {
        untilEpochMs: Date.now() + (mm.untilMs - performance.now()),
        backoffMs: mm.backoffMs,
        fps: mm.fps
      }
    }

    function lm(mm) {
      return void 0 === mm || "number" !== typeof mm.fps ? null : {
        untilMs: performance.now() + (mm.untilEpochMs - Date.now()),
        backoffMs: mm.backoffMs,
        fps: mm.fps
      }
    }
    let Mm = null;

    function um() {
      if (null === Mm) {
        const mm = new URLSearchParams(window.location.search).get("msaa");
        Mm = hm.c.get("clientEscMenuOptions").antiAliasing && ("0" === mm || "1" !== mm && !(0, xm.c)("antiAliasing") && (0, Nm.i)())
      }
      return Mm
    }

    function Bm(mm) {
      const Tm = "number" === typeof mm ? Date.now() - mm : -1;
      return Tm >= 0 && Tm < Pm
    }
    let Lm = null;

    function tm() {
      return Lm ??= (0, Am.getDeviceDefaultPixelScale)(), Um(Lm)
    }

    function Um(mm) {
      const Tm = hm.c.get("clientEscMenuOptions");
      return Tm.pixelSmoothing && !(0, xm.c)("pixelScale") && Tm.pixelScale === mm
    }
    let dm = null,
      gm = 0;

    function Wm() {
      if (null === dm || gm !== ym()) {
        var mm;
        gm = ym();
        const Tm = Number(null !== (mm = new URLSearchParams(window.location.search).get(Hm)) && void 0 !== mm ? mm : ""),
          fm = Cm();
        if (Tm > 0 && Tm <= 1) dm = (0, wm.I)(fm, fm[0] / Tm);
        else {
          const mm = rm(),
            Tm = (0, wm.I)(fm, (0, wm.L)(ym())),
            hm = !(0, Nm.n)() && Bm(null === mm || void 0 === mm ? void 0 : mm.heldAt) && (null === mm || void 0 === mm ? void 0 : mm.heldTarget) === ym() ? null === mm || void 0 === mm ? void 0 : mm.heldN : void 0;
          dm = "number" === typeof hm ? Math.min(Tm, (0, wm.I)(fm, hm)) : Tm
        }
      }
      return dm
    }

    function Fm(mm, Tm) {
      var fm;
      const hm = Tm.indexOf(null !== (fm = mm.failedUpN) && void 0 !== fm ? fm : -1);
      return hm >= 0 && Bm(mm.failedUpAt) ? {
        step: hm,
        untilMs: performance.now() + Dm.b.stepUp.failWaitsMs[0]
      } : null
    }
    let mT = null,
      TT = !1,
      fT = "";
    const hT = new Set;

    function AT() {
      for (const mm of hT) mm()
    }

    function aT() {
      return TT ? null : (oT(), null === mT ? (null !== Lm || null !== (0, Am.peekGpuVendor)() ? tm() : Um(1)) ? Wm() : null : tm() ? mT.currentStep() : null)
    }

    function xT() {
      const mm = aT();
      if (null === mm) return null;
      const Tm = Cm(),
        fm = Tm[Math.min(mm, Tm.length - 1)];
      return fm === wT() ? null : fm
    }

    function wT() {
      return (0, wm.E)(hm.c.get("clientEscMenuOptions").pixelScale, (0, wm.P)())
    }

    function DT() {
      return null !== mT && null !== xT()
    }

    function iT(mm) {
      return hT.add(mm), () => {
        hT.delete(mm)
      }
    }

    function RT(mm, Tm, fm) {
      var hm;
      if (null !== mT || TT || (0, Nm.n)()) return;
      const Am = (0, em.d)(mm, Tm, fm);
      null !== Am && (0, Nm.q)(Am.vendor), fT = `${mm}:${(null===Am||void 0===Am?void 0:Am.renderer)||(null===Am||void 0===Am?void 0:Am.vendor)||""}`, (null === (hm = rm()) || void 0 === hm ? void 0 : hm.gpu) !== fT && (im.g.setItem(Xm, {
        gpu: fT
      }), dm = null), ET(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var mm;
          null === (mm = mT) || void 0 === mm || mm.hidden()
        } catch (Tm) {
          QT(), console.error("The quality steps stopped", Tm)
        }
      }))
    }
    let pT = 0;

    function ET() {
      var mm;
      const Tm = null !== (mm = rm()) && void 0 !== mm ? mm : {
          gpu: fT
        },
        fm = Cm();
      pT = ym(), mT = new Sm({
          changed: AT,
          mO: () => {
            OT({
              heldN: void 0
            })
          },
          ni: mm => {
            var Tm;
            const fm = Cm()[mm],
              hm = {
                heldN: fm,
                heldAt: Date.now(),
                heldTarget: ym()
              };
            (null === (Tm = rm()) || void 0 === Tm ? void 0 : Tm.failedUpN) === fm && (hm.failedUpN = void 0), OT(hm)
          },
          upFailed: mm => {
            OT({
              failedUpN: Cm()[mm],
              failedUpAt: Date.now()
            })
          },
          noGain: mm => {
            OT({
              noGain: null === mm ? void 0 : sm(mm)
            })
          }
        }, {
          lowest: fm.length - 1,
          startStep: Wm(),
          noGain: lm(Tm.noGain),
          upWait: Fm(Tm, fm)
        }),
        function(mm) {
          const Tm = {
            get step() {
              return mm.currentStep()
            },
            get n() {
              var mm;
              return null !== (mm = xT()) && void 0 !== mm ? mm : wT()
            },
            get scale() {
              var mm;
              return Cm()[0] / (null !== (mm = xT()) && void 0 !== mm ? mm : wT())
            },
            get msaaOff() {
              return um()
            },
            log: mm.log,
            windows: mm.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Tm,
            configurable: !0
          })
        }(mT), AT()
    }

    function oT() {
      null !== mT && ym() !== pT && (dm = null, ET())
    }

    function OT(mm) {
      im.g.setItem(Xm, {
        ...rm(),
        ...mm,
        gpu: fT
      })
    }
    let YT = 0,
      qT = 0,
      jT = 0,
      VT = !1;

    function IT() {
      YT++
    }

    function KT(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      oT(), null !== mT && (mm - jT >= 1e3 && (VT = YT - qT > Dm.b.sceneChange.meshesPerSecond, qT = YT, jT = mm), Gm.e.isHeld() ? mT.paused(mm) : mT.frame(mm, Tm, fm && !document.hidden && tm(), VT || hm > 0 || (0, am.n)()))
    }

    function QT() {
      if (!TT) {
        TT = !0, null !== mT && (mT = null, OT({
          noGain: void 0
        }));
        try {
          AT()
        } catch (mm) {
          console.error("The quality steps' resize to the player's n failed", mm)
        }
      }
    }

    function nT() {
      var mm;
      null === (mm = mT) || void 0 === mm || mm.resized(performance.now())
    }
  },
  34230: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am
    });
    var hm = fm(105),
      Am = fm(130);

    function am(mm, Tm, fm) {
      if ("webgpu" === mm) return fm ? ((0, hm.seedGpuVendor)(fm), {
        vendor: fm,
        renderer: ""
      }) : null;
      try {
        const fm = "webgl" === mm ? Tm.getContext("webgl2") : Tm.getContext("webgl");
        "webgl" === mm && fm && (0, Am.r)(fm);
        const am = null === fm || void 0 === fm ? void 0 : fm.getExtension("WEBGL_debug_renderer_info");
        if (fm && am) {
          const mm = String(fm.getParameter(am.UNMASKED_VENDOR_WEBGL)),
            Tm = String(fm.getParameter(am.UNMASKED_RENDERER_WEBGL));
          return (0, hm.seedGpuVendor)(mm), (0, Am.y)(mm, Tm), {
            vendor: mm,
            renderer: Tm
          }
        }
        fm && (0, Am.y)(String(fm.getParameter(fm.VENDOR)), String(fm.getParameter(fm.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);