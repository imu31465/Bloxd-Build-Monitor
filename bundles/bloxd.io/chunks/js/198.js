export const id = 198;
export const ids = [198];
export const modules = {
  34317: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Yt,
      g: () => Je,
      h: () => be,
      j: () => ue,
      n: () => de,
      o: () => He,
      q: () => Qe,
      t: () => Ce,
      x: () => Xe
    });
    var Ot = Vt(312),
      qt = Vt(26),
      Dt = Vt(106),
      mt = Vt(1732),
      dt = Vt(4563),
      jt = Vt(2984),
      Ht = Vt(2987),
      Xt = Vt(39);
    const {
      windows: Qt,
      target: lt,
      stepDown: Et,
      stepUp: ft,
      noGain: wt
    } = Ht.e, yt = 1e3 / 60 * 1.08, Nt = 1e3 / 55, Mt = 1e3 / 45, bt = 1e3 / 30 * .92, Jt = 1e3 / 30 * 1.08;
    class Ct {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(tt, et) {
        const Vt = tt - this.lastMs;
        this.lastMs = tt;
        const Ot = function(tt) {
          if (tt <= 0 || tt > 100) return -1;
          if (tt <= yt) return 0;
          if (tt >= Nt && tt <= Mt) return 1;
          return tt >= bt && tt <= Jt ? 2 : -1
        }(Vt);
        0 === Ot && 2 === this.runBand && et && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), Ot !== this.runBand && (this.runBand = Ot, this.runLength = 0), Ot < 0 || ++this.runLength < 3 || (0 === Ot ? this.votes60++ : 1 === Ot ? (this.votesMid++, this.sumMidMs += Vt) : (this.votes30++, et && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const ut = Qt.windowMs,
      Kt = Qt.settleMs,
      ht = Qt.graceMs,
      vt = Qt.minIntervals,
      Wt = 1e3 * vt / ut,
      St = Math.floor(1e4 / ut),
      ct = wt.backoffMs,
      Rt = wt.maxMs;
    class It {
      constructor(tt, et) {
        let {
          lowest: Vt,
          startStep: Ot = 0,
          noGain: qt = null,
          upWait: Dt = null
        } = et;
        this.hooks = tt, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new Ct, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = lt.maxFps, this.lowest = Vt, this.step = Math.min(Ot, Vt), this.noGain = qt, this.climbing = this.step > 0;
        const mt = Vt + 1;
        this.downUntilMs = new Array(mt).fill(0), this.downBackoffMs = new Array(mt).fill(0), this.noGainFps = new Array(mt).fill(0), this.noGainFps[0] = null === qt ? 0 : qt.fps, this.upFailures = new Array(mt).fill(0), this.upUntilMs = new Array(mt).fill(0), null !== Dt && Dt.step >= 0 && Dt.step < mt && (this.upUntilMs[Dt.step] = Dt.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(tt, Vt && !Ot), !Vt) return void this.leave(tt);
        const qt = tt - this.lastFrameMs,
          Dt = this.resizeStall(tt);
        if (qt > 2e3 && !Dt && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = tt, this.quietUntilMs = Math.max(this.quietUntilMs, tt + ht), this.graceUntilMs = tt + ht, this.windowStartMs = -1, void(this.slowStartMs = -1);
        qt > 500 && (this.hitch(tt), Dt && (this.slowStartMs = -1)), this.lastFrameMs = tt, tt >= this.quietUntilMs && this.countWindow(tt, et, Ot) || et && tt >= this.graceUntilMs && this.countSlow(tt, Ot)
      }
      countWindow(tt, et, Vt) {
        if (this.windowStartMs < 0) return !!et && (this.windowStartMs = tt, this.lastDrawnMs = tt, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = Vt, !1);
        if (this.windowMasked ||= Vt, !et) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, tt - this.lastDrawnMs), this.lastDrawnMs = tt;
        const Ot = tt - this.windowStartMs;
        if (Ot < ut) return !1;
        const qt = this.windowIntervals,
          Dt = 1e3 * qt / Ot,
          mt = this.windowHeld,
          dt = this.windowMaxIntervalMs,
          jt = this.windowMasked;
        if (this.windowStartMs = -1, qt < vt) return !1;
        this.slowStartMs = -1;
        const Ht = this.targetFps(),
          Xt = Dt >= Ht * lt.cleanShare && dt <= lt.cleanMaxIntervalMs && (0 === mt || Dt >= Ht);
        return this.decide(Dt, 1, Xt, Dt < Ht * lt.dropShare, jt, tt), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(lt.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(tt, et) {
        if (this.slowStartMs < 0) return this.slowStartMs = tt, this.slowIntervals = 0, void(this.slowMasked = et);
        this.slowMasked ||= et, this.slowIntervals++;
        const Vt = tt - this.slowStartMs;
        if (Vt < 1e4) return;
        const Ot = 1e3 * this.slowIntervals / Vt,
          qt = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(tt, et), Ot < Wt && (this.windowStartMs = -1, this.decide(Ot, St, !1, !0, qt, tt))
      }
      resizeStall(tt) {
        return this.lastFrameMs - this.resizedMs <= Kt && tt - this.lastFrameMs <= 15e3
      }
      paused(tt) {
        this.refresh.frame(tt, !1), tt - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, tt + ht), this.graceUntilMs = tt + ht), this.lastFrameMs = tt, this.slowStartMs = -1, this.hitch(tt)
      }
      resized(tt) {
        this.resizedMs = tt, this.hitch(tt)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(tt) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(tt))
      }
      hitch(tt) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, tt + Kt)
      }
      left(tt) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const et = this.phase;
        "watch" !== et.kind && (this.phase = {
          kind: "watch"
        }, "down" === et.kind && (this.downUntilMs[et.from] = tt + ct, this.noGainFps[et.from] = 0, 0 === et.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, tt + ct)
        })), this.setStep(et.from, 0, tt, "left"), "up" === et.kind && (this.climbed = et.fromClimbed))
      }
      decide(tt, et, Vt, Ot, qt, Dt) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: Dt,
          step: this.step,
          fps: Math.round(10 * tt) / 10,
          windows: et,
          masked: qt,
          dropping: Ot
        });
        const mt = this.phase;
        switch (mt.kind) {
          case "watch":
            return void this.watch(tt, et, Vt, Ot, qt, Dt);
          case "down": {
            if (mt.judged += et, mt.fpsSum += tt * et, qt || (mt.clean += et, mt.cleanFpsSum += tt * et), mt.judged < Et.judgeWindows) return;
            const Vt = mt.clean > 0 ? mt.cleanFpsSum / mt.clean : mt.fpsSum / mt.judged;
            return void(Vt >= mt.fromFps * Et.keepGain ? this.keepDown(mt.from, Vt, Dt) : this.noGainFrom(mt, Vt, Dt))
          }
          case "up":
            return Vt ? void(++mt.judged >= ft.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: mt.from,
              heldWindows: 0,
              below: mt.fromClimbed
            }, this.record(Dt, tt, "up_kept"))) : (qt ? (this.watchAt(mt.from), this.setStep(mt.from, tt, Dt, "spoiled")) : this.failUp(this.step, mt.from, tt, Dt), void(this.climbed = mt.fromClimbed))
        }
      }
      watch(tt, et, Vt, Ot, qt, Dt) {
        const mt = this.climbed;
        null !== mt && !Ot && !qt && ++mt.heldWindows >= ft.heldWindows && (this.climbed = null, this.record(Dt, tt, "Pd"), this.hooks.Pd(this.step)), Ot ? (this.dropRun += et, this.dropRunFpsSum += tt * et, this.dropRunMasked ||= qt, qt || (this.dropRunClean += et, this.dropRunCleanFpsSum += tt * et)) : this.resetDropRun(), qt && Vt || (this.cleanRun = Vt ? this.cleanRun + 1 : 0);
        const dt = null !== this.climbed ? ft : Et;
        if (this.dropRun >= (this.dropRunMasked ? dt.maskedWindows : dt.dropWindows)) {
          const et = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            Vt = this.dropRunClean >= Et.dropWindows && et < this.noGainFps[this.step] * wt.heavierShare;
          this.resetDropRun();
          const Ot = this.climbed;
          return void(null !== Ot ? (this.failUp(this.step, Ot.from, tt, Dt), this.climbed = Ot.below) : this.step < this.lowest && (Vt || this.waitOver(Dt)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: et,
            early: !this.waitOver(Dt),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, et, Dt, "down")))
        }
        const jt = this.step - 1;
        jt >= 0 && this.cleanRun >= (this.climbing ? ft.climbWindows : ft.cleanWindows) && Dt >= this.upUntilMs[jt] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(jt, tt, Dt, "up"))
      }
      waitOver(tt) {
        return !(0 === this.step && null !== this.noGain && tt < this.noGain.untilMs) && tt >= this.downUntilMs[this.step]
      }
      keepDown(tt, et, Vt) {
        this.watchAt(this.step), this.downBackoffMs[tt] = 0, this.noGainFps[tt] = 0, this.record(Vt, et, "down_kept"), 0 === tt && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.hE(this.step)
      }
      noGainFrom(tt, et, Vt) {
        var Ot, qt;
        let {
          from: Dt,
          fromFps: mt,
          early: dt
        } = tt;
        const jt = 0 === Dt ? null !== (Ot = null === (qt = this.noGain) || void 0 === qt ? void 0 : qt.backoffMs) && void 0 !== Ot ? Ot : 0 : this.downBackoffMs[Dt],
          Ht = 0 === jt ? ct : dt ? jt : Math.min(2 * jt, Rt),
          Xt = Math.max(mt, et);
        this.downBackoffMs[Dt] = Ht, this.downUntilMs[Dt] = Vt + Ht, this.noGainFps[Dt] = Xt, 0 === Dt && (this.noGain = {
          untilMs: Vt + Ht,
          backoffMs: Ht,
          fps: Xt
        }, this.hooks.noGain(this.noGain)), this.watchAt(Dt), this.setStep(Dt, et, Vt, "no_gain")
      }
      failUp(tt, et, Vt, Ot) {
        this.climbing = !1;
        const qt = ++this.upFailures[tt],
          Dt = ft.failWaitsMs;
        this.upUntilMs[tt] = Ot + Dt[Math.min(qt, Dt.length) - 1], this.watchAt(et), this.setStep(et, Vt, Ot, "up_failed"), this.hooks.upFailed(tt)
      }
      watchAt(tt) {
        this.phase = {
          kind: "watch"
        }, this.climbed = tt === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(tt, et, Vt, Ot) {
        const qt = tt !== this.step;
        qt && (this.climbed = null), this.step = tt, this.record(Vt, et, Ot), qt && (this.slowStartMs = -1, this.resized(Vt), this.hooks.changed(tt))
      }
      record(tt, et, Vt) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: tt,
          step: this.step,
          fps: Math.round(10 * et) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: Vt
        })
      }
    }
    var Pt = Vt(34323),
      Zt = Vt(3179),
      Lt = Vt(34326);
    const Ft = "autoGraphics",
      kt = 6048e5,
      Gt = "startScale";

    function zt() {
      return (0, jt.M)(qt.b.get("clientEscMenuOptions").pixelScale) * (0, jt.E)()
    }

    function ot() {
      return (0, jt.t)(zt())
    }

    function rt() {
      const tt = Xt.e.getItem(Ft);
      return "object" !== typeof tt || null === tt || "string" !== typeof tt.gpu ? null : tt
    }

    function Ut(tt) {
      return {
        untilEpochMs: Date.now() + (tt.untilMs - performance.now()),
        backoffMs: tt.backoffMs,
        fps: tt.fps
      }
    }

    function At(tt) {
      return void 0 === tt || "number" !== typeof tt.fps ? null : {
        untilMs: performance.now() + (tt.untilEpochMs - Date.now()),
        backoffMs: tt.backoffMs,
        fps: tt.fps
      }
    }
    let it = null;

    function Yt() {
      if (null === it) {
        const tt = new URLSearchParams(window.location.search).get("msaa");
        it = qt.b.get("clientEscMenuOptions").antiAliasing && ("0" === tt || "1" !== tt && !(0, dt.c)("antiAliasing") && (0, Zt.e)())
      }
      return it
    }

    function Bt(tt) {
      const et = "number" === typeof tt ? Date.now() - tt : -1;
      return et >= 0 && et < kt
    }
    let pt = null;

    function xt() {
      return pt ??= (0, Dt.getDeviceDefaultPixelScale)(), Tt(pt)
    }

    function Tt(tt) {
      const et = qt.b.get("clientEscMenuOptions");
      return et.pixelSmoothing && !(0, dt.c)("pixelScale") && et.pixelScale === tt
    }
    let gt = null,
      st = 0;

    function nt() {
      if (null === gt || st !== zt()) {
        var tt;
        st = zt();
        const et = Number(null !== (tt = new URLSearchParams(window.location.search).get(Gt)) && void 0 !== tt ? tt : ""),
          Vt = ot();
        if (et > 0 && et <= 1) gt = (0, jt.A)(Vt, Vt[0] / et);
        else {
          const tt = rt(),
            et = (0, jt.A)(Vt, (0, jt.D)(zt())),
            Ot = !(0, Zt.i)() && Bt(null === tt || void 0 === tt ? void 0 : tt.heldAt) && (null === tt || void 0 === tt ? void 0 : tt.heldTarget) === zt() ? null === tt || void 0 === tt ? void 0 : tt.heldN : void 0;
          gt = "number" === typeof Ot ? Math.min(et, (0, jt.A)(Vt, Ot)) : et
        }
      }
      return gt
    }

    function te(tt, et) {
      var Vt;
      const Ot = et.indexOf(null !== (Vt = tt.failedUpN) && void 0 !== Vt ? Vt : -1);
      return Ot >= 0 && Bt(tt.failedUpAt) ? {
        step: Ot,
        untilMs: performance.now() + Ht.e.stepUp.failWaitsMs[0]
      } : null
    }
    let ee = null,
      Ve = !1,
      Oe = "";
    const qe = new Set;

    function De() {
      for (const tt of qe) tt()
    }

    function me() {
      return Ve ? null : (fe(), null === ee ? (null !== pt || null !== (0, Dt.peekGpuVendor)() ? xt() : Tt(1)) ? nt() : null : xt() ? ee.currentStep() : null)
    }

    function de() {
      const tt = me();
      if (null === tt) return null;
      const et = ot(),
        Vt = et[Math.min(tt, et.length - 1)];
      return Vt === je() ? null : Vt
    }

    function je() {
      return (0, jt.w)(qt.b.get("clientEscMenuOptions").pixelScale, (0, jt.E)())
    }

    function He() {
      return null !== ee && null !== de()
    }

    function Xe(tt) {
      return qe.add(tt), () => {
        qe.delete(tt)
      }
    }

    function Qe(tt, et, Vt) {
      var qt;
      if (null !== ee || Ve || (0, Zt.i)()) return;
      const Dt = (0, Pt.b)(tt, et, Vt);
      null !== Dt && ((0, Zt.l)(Dt.vendor), "" !== Dt.renderer && (0, Ot.q)(Dt.vendor, Dt.renderer)), Oe = `${tt}:${(null===Dt||void 0===Dt?void 0:Dt.renderer)||(null===Dt||void 0===Dt?void 0:Dt.vendor)||""}`, (null === (qt = rt()) || void 0 === qt ? void 0 : qt.gpu) !== Oe && (Xt.e.setItem(Ft, {
        gpu: Oe
      }), gt = null), Ee(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var tt;
          null === (tt = ee) || void 0 === tt || tt.hidden()
        } catch (et) {
          Ce(), console.error("The quality steps stopped", et)
        }
      }))
    }
    let le = 0;

    function Ee() {
      var tt;
      const et = null !== (tt = rt()) && void 0 !== tt ? tt : {
          gpu: Oe
        },
        Vt = ot();
      le = zt(), ee = new It({
          changed: De,
          hE: () => {
            we({
              heldN: void 0
            })
          },
          Pd: tt => {
            var et;
            const Vt = ot()[tt],
              Ot = {
                heldN: Vt,
                heldAt: Date.now(),
                heldTarget: zt()
              };
            (null === (et = rt()) || void 0 === et ? void 0 : et.failedUpN) === Vt && (Ot.failedUpN = void 0), we(Ot)
          },
          upFailed: tt => {
            we({
              failedUpN: ot()[tt],
              failedUpAt: Date.now()
            })
          },
          noGain: tt => {
            we({
              noGain: null === tt ? void 0 : Ut(tt)
            })
          }
        }, {
          lowest: Vt.length - 1,
          startStep: nt(),
          noGain: At(et.noGain),
          upWait: te(et, Vt)
        }),
        function(tt) {
          const et = {
            get step() {
              return tt.currentStep()
            },
            get n() {
              var tt;
              return null !== (tt = de()) && void 0 !== tt ? tt : je()
            },
            get scale() {
              var tt;
              return ot()[0] / (null !== (tt = de()) && void 0 !== tt ? tt : je())
            },
            get msaaOff() {
              return Yt()
            },
            log: tt.log,
            windows: tt.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: et,
            configurable: !0
          })
        }(ee), De()
    }

    function fe() {
      null !== ee && zt() !== le && (gt = null, Ee())
    }

    function we(tt) {
      Xt.e.setItem(Ft, {
        ...rt(),
        ...tt,
        gpu: Oe
      })
    }
    let ye = 0,
      Ne = 0,
      ae = 0,
      Me = !1;

    function be() {
      ye++
    }

    function Je(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      fe(), null !== ee && (tt - ae >= 1e3 && (Me = ye - Ne > Ht.e.sceneChange.meshesPerSecond, Ne = ye, ae = tt), Lt.e.isHeld() ? ee.paused(tt) : ee.frame(tt, et, Vt && !document.hidden && xt(), Me || Ot > 0 || (0, mt.q)()))
    }

    function Ce() {
      if (!Ve) {
        Ve = !0, null !== ee && (ee = null, we({
          noGain: void 0
        }));
        try {
          De()
        } catch (tt) {
          console.error("The quality steps' resize to the player's n failed", tt)
        }
      }
    }

    function ue() {
      var tt;
      null === (tt = ee) || void 0 === tt || tt.resized(performance.now())
    }
  },
  34323: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(106),
      qt = Vt(146);

    function Dt(tt, et, Vt) {
      if ("webgpu" === tt) return Vt ? ((0, Ot.seedGpuVendor)(Vt), {
        vendor: Vt,
        renderer: ""
      }) : null;
      try {
        const Vt = "webgl" === tt ? et.getContext("webgl2") : et.getContext("webgl");
        "webgl" === tt && Vt && (0, qt.E)(Vt);
        const Dt = null === Vt || void 0 === Vt ? void 0 : Vt.getExtension("WEBGL_debug_renderer_info");
        if (Vt && Dt) {
          const tt = String(Vt.getParameter(Dt.UNMASKED_VENDOR_WEBGL)),
            et = String(Vt.getParameter(Dt.UNMASKED_RENDERER_WEBGL));
          return (0, Ot.seedGpuVendor)(tt), (0, qt.K)(tt, et), {
            vendor: tt,
            renderer: et
          }
        }
        Vt && (0, qt.K)(String(Vt.getParameter(Vt.VENDOR)), String(Vt.getParameter(Vt.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);