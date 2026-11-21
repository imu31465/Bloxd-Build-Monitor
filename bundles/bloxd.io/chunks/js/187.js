export const id = 187;
export const ids = [187];
export const modules = {
  9162: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => cd,
      g: () => GJ,
      j: () => IJ,
      k: () => xJ,
      o: () => WJ,
      p: () => ZJ,
      r: () => CJ,
      v: () => vJ,
      y: () => gJ
    });
    var pd = kd(22),
      Nd = kd(95),
      Wd = kd(1670),
      Pd = kd(4269),
      Zd = kd(2656),
      gd = kd(2675),
      Cd = kd(33);
    const {
      windows: Kd,
      target: od,
      stepDown: ld,
      stepUp: Qd,
      noGain: Ld
    } = gd.e, Od = 1e3 / 60 * 1.08, ed = 1e3 / 55, Rd = 1e3 / 45, Id = 1e3 / 30 * .92, Gd = 1e3 / 30 * 1.08;
    class vd {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(dd) {
        const Jd = dd - this.lastMs;
        this.lastMs = dd;
        const kd = function(dd) {
          if (dd <= 0 || dd > 100) return -1;
          if (dd <= Od) return 0;
          if (dd >= ed && dd <= Rd) return 1;
          return dd >= Id && dd <= Gd ? 2 : -1
        }(Jd);
        kd !== this.runBand && (this.runBand = kd, this.runLength = 0), kd < 0 || ++this.runLength < 3 || (0 === kd ? this.votes60++ : 1 === kd ? (this.votesMid++, this.sumMidMs += Jd) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const xd = Kd.windowMs,
      qd = Kd.settleMs,
      Bd = Kd.graceMs,
      sd = Kd.minIntervals,
      ad = 1e3 * sd / xd,
      Md = Ld.backoffMs,
      Fd = Ld.maxMs;
    class Yd {
      constructor(dd, Jd) {
        let {
          lowest: kd,
          startStep: pd = 0,
          noGain: Nd = null,
          upWait: Wd = null
        } = Jd;
        this.hooks = dd, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new vd, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = od.maxFps, this.lowest = kd, this.step = Math.min(pd, kd), this.noGain = Nd, this.climbing = this.step > 0;
        const Pd = kd + 1;
        this.downUntilMs = new Array(Pd).fill(0), this.downBackoffMs = new Array(Pd).fill(0), this.upFailures = new Array(Pd).fill(0), this.upUntilMs = new Array(Pd).fill(0), null !== Wd && Wd.step >= 0 && Wd.step < Pd && (this.upUntilMs[Wd.step] = Wd.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(dd), !kd) return void this.leave(dd);
        const Nd = dd - this.lastFrameMs,
          Wd = this.resizeStall(dd);
        if (Nd > 2e3 && !Wd && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = dd, this.quietUntilMs = Math.max(this.quietUntilMs, dd + Bd), this.graceUntilMs = dd + Bd, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Nd > 500 && (this.hitch(dd), Wd && (this.slowStartMs = -1)), this.lastFrameMs = dd, dd >= this.quietUntilMs && this.countWindow(dd, Jd, pd) || Jd && dd >= this.graceUntilMs && this.countSlow(dd)
      }
      countWindow(dd, Jd, kd) {
        if (this.windowStartMs < 0) return !!Jd && (this.windowStartMs = dd, this.lastDrawnMs = dd, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = kd, !1);
        if (this.windowMasked ||= kd, !Jd) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, dd - this.lastDrawnMs), this.lastDrawnMs = dd;
        const pd = dd - this.windowStartMs;
        if (pd < xd) return !1;
        const Nd = this.windowIntervals,
          Wd = 1e3 * Nd / pd,
          Pd = this.windowHeld,
          Zd = this.windowMaxIntervalMs,
          gd = this.windowMasked;
        if (this.windowStartMs = -1, Nd < sd) return !1;
        this.slowStartMs = -1;
        const Cd = this.targetFps(),
          Kd = Wd >= Cd * od.cleanShare && Zd <= od.cleanMaxIntervalMs && (0 === Pd || Wd >= Cd);
        return this.decide(Wd, Kd, Wd < Cd * od.dropShare, gd, dd), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(od.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(dd) {
        if (this.slowStartMs < 0) return this.slowStartMs = dd, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const Jd = dd - this.slowStartMs;
        if (Jd < 1e4) return;
        const kd = 1e3 * this.slowIntervals / Jd;
        this.slowStartMs = -1, this.countSlow(dd), kd < ad && (this.windowStartMs = -1, this.decide(kd, !1, !0, !1, dd))
      }
      resizeStall(dd) {
        return this.lastFrameMs - this.resizedMs <= qd && dd - this.lastFrameMs <= 15e3
      }
      paused(dd) {
        this.refresh.frame(dd), dd - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, dd + Bd), this.graceUntilMs = dd + Bd), this.lastFrameMs = dd, this.slowStartMs = -1, this.hitch(dd)
      }
      resized(dd) {
        this.resizedMs = dd, this.hitch(dd)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(dd) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(dd))
      }
      hitch(dd) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, dd + qd)
      }
      left(dd) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const Jd = this.phase;
        "watch" !== Jd.kind && (this.phase = {
          kind: "watch"
        }, "down" === Jd.kind && (this.downUntilMs[Jd.from] = Math.max(this.downUntilMs[Jd.from], dd + Md)), this.setStep(Jd.from, 0, dd, "left"), "up" === Jd.kind && (this.climbed = Jd.fromClimbed))
      }
      decide(dd, Jd, kd, pd, Nd) {
        const Wd = this.phase;
        switch (Wd.kind) {
          case "watch":
            return void this.watch(dd, Jd, kd, pd, Nd);
          case "down":
            if (Wd.judged++, Wd.fpsSum += dd, Wd.dropped ||= kd, Wd.judged < ld.judgeWindows) return;
            return void(!Wd.dropped || Wd.fpsSum / Wd.judged >= Wd.fromFps * ld.keepGain ? this.keepDown(Wd.from, Wd.fpsSum / Wd.judged, Nd) : this.noGainFrom(Wd.from, Wd.fromFps, Nd));
          case "up":
            return Jd ? void(++Wd.judged >= Qd.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: Wd.from,
              heldWindows: 0,
              below: Wd.fromClimbed
            }, this.record(Nd, dd, "up_kept"))) : (pd ? (this.watchAt(Wd.from), this.setStep(Wd.from, dd, Nd, "spoiled")) : this.failUp(this.step, Wd.from, dd, Nd), void(this.climbed = Wd.fromClimbed))
        }
      }
      watch(dd, Jd, kd, pd, Nd) {
        const Wd = this.climbed;
        if (null !== Wd && !kd && !pd && ++Wd.heldWindows >= Qd.heldWindows && (this.climbed = null, this.record(Nd, dd, "EC"), this.hooks.EC(this.step)), kd ? (this.dropRun++, this.dropRunFpsSum += dd, this.dropRunMasked ||= pd) : this.resetDropRun(), pd && Jd || (this.cleanRun = Jd ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? ld.maskedWindows : ld.dropWindows)) {
          const Jd = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const kd = this.climbed;
          return void(null !== kd ? (this.failUp(this.step, kd.from, dd, Nd), this.climbed = kd.below) : this.step < this.lowest && this.downAllowed(Nd) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Jd,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, dd, Nd, "down")))
        }
        const Pd = this.step - 1;
        Pd >= 0 && this.cleanRun >= (this.climbing ? Qd.climbWindows : Qd.cleanWindows) && this.upAllowed(Pd, Nd) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Pd, dd, Nd, "up"))
      }
      downAllowed(dd) {
        return !(0 === this.step && null !== this.noGain && dd < this.noGain.untilMs) && dd >= this.downUntilMs[this.step]
      }
      upAllowed(dd, Jd) {
        return this.upFailures[dd] <= Qd.failWaitsMs.length && Jd >= this.upUntilMs[dd]
      }
      keepDown(dd, Jd, kd) {
        this.watchAt(this.step), this.downBackoffMs[dd] = 0, this.record(kd, Jd, "down_kept"), 0 === dd && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.qQ(this.step)
      }
      noGainFrom(dd, Jd, kd) {
        var pd, Nd;
        const Wd = 0 === dd ? null !== (pd = null === (Nd = this.noGain) || void 0 === Nd ? void 0 : Nd.backoffMs) && void 0 !== pd ? pd : 0 : this.downBackoffMs[dd],
          Pd = 0 === Wd ? Md : Math.min(2 * Wd, Fd);
        this.downBackoffMs[dd] = Pd, this.downUntilMs[dd] = kd + Pd, 0 === dd && (this.noGain = {
          untilMs: kd + Pd,
          backoffMs: Pd
        }, this.hooks.noGain(this.noGain)), this.watchAt(dd), this.setStep(dd, Jd, kd, "no_gain")
      }
      failUp(dd, Jd, kd, pd) {
        this.climbing = !1;
        const Nd = ++this.upFailures[dd];
        this.upUntilMs[dd] = Nd <= Qd.failWaitsMs.length ? pd + Qd.failWaitsMs[Nd - 1] : Number.POSITIVE_INFINITY, this.watchAt(Jd), this.setStep(Jd, kd, pd, "up_failed"), this.hooks.upFailed(dd)
      }
      watchAt(dd) {
        this.phase = {
          kind: "watch"
        }, this.climbed = dd === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(dd, Jd, kd, pd) {
        const Nd = dd !== this.step;
        Nd && (this.climbed = null), this.step = dd, this.record(kd, Jd, pd), Nd && (this.slowStartMs = -1, this.resized(kd), this.hooks.changed(dd))
      }
      record(dd, Jd, kd) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: dd,
          step: this.step,
          fps: Math.round(10 * Jd) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: kd
        })
      }
    }
    var md = kd(9165),
      bd = kd(2980),
      Sd = kd(9169);
    const jd = "autoGraphics",
      Xd = 6048e5,
      fd = "startScale";

    function nd() {
      return (0, Zd.E)(pd.d.get("clientEscMenuOptions").pixelScale) * (0, Zd.z)()
    }

    function Ud() {
      return (0, Zd.l)(nd())
    }

    function yd() {
      const dd = Cd.i.getItem(jd);
      return "object" !== typeof dd || null === dd || "string" !== typeof dd.gpu ? null : dd
    }

    function Dd(dd) {
      return {
        untilEpochMs: Date.now() + (dd.untilMs - performance.now()),
        backoffMs: dd.backoffMs
      }
    }

    function Td(dd) {
      return dd ? {
        untilMs: performance.now() + (dd.untilEpochMs - Date.now()),
        backoffMs: dd.backoffMs
      } : null
    }
    let Ed = null;

    function cd() {
      if (null === Ed) {
        const dd = new URLSearchParams(window.location.search).get("msaa");
        Ed = pd.d.get("clientEscMenuOptions").antiAliasing && ("0" === dd || "1" !== dd && !(0, Pd.c)("antiAliasing") && (0, bd.f)())
      }
      return Ed
    }

    function hd(dd) {
      const Jd = "number" === typeof dd ? Date.now() - dd : -1;
      return Jd >= 0 && Jd < Xd
    }
    let rd = null;

    function ud() {
      return rd ??= (0, Nd.getDeviceDefaultPixelScale)(), td(rd)
    }

    function td(dd) {
      const Jd = pd.d.get("clientEscMenuOptions");
      return Jd.pixelSmoothing && !(0, Pd.c)("pixelScale") && Jd.pixelScale === dd
    }
    let Vd = null,
      zd = 0;

    function Hd() {
      if (null === Vd || zd !== nd()) {
        var dd;
        zd = nd();
        const Jd = Number(null !== (dd = new URLSearchParams(window.location.search).get(fd)) && void 0 !== dd ? dd : ""),
          kd = Ud();
        if (Jd > 0 && Jd <= 1) Vd = (0, Zd.v)(kd, kd[0] / Jd);
        else {
          const dd = yd(),
            Jd = (0, Zd.v)(kd, (0, Zd.w)(nd())),
            pd = !(0, bd.j)() && hd(null === dd || void 0 === dd ? void 0 : dd.heldAt) && (null === dd || void 0 === dd ? void 0 : dd.heldTarget) === nd() ? null === dd || void 0 === dd ? void 0 : dd.heldN : void 0;
          Vd = "number" === typeof pd ? Math.min(Jd, (0, Zd.v)(kd, pd)) : Jd
        }
      }
      return Vd
    }

    function wd(dd, Jd) {
      var kd;
      const pd = Jd.indexOf(null !== (kd = dd.failedUpN) && void 0 !== kd ? kd : -1);
      return pd >= 0 && hd(dd.failedUpAt) ? {
        step: pd,
        untilMs: performance.now() + gd.e.stepUp.failWaitsMs[0]
      } : null
    }
    let Ad = null,
      dJ = !1,
      JJ = "";
    const kJ = new Set;

    function pJ() {
      for (const dd of kJ) dd()
    }

    function NJ() {
      return dJ ? null : (lJ(), null === Ad ? (null !== rd || null !== (0, Nd.peekGpuVendor)() ? ud() : td(1)) ? Hd() : null : ud() ? Ad.currentStep() : null)
    }

    function WJ() {
      const dd = NJ();
      if (null === dd) return null;
      const Jd = Ud(),
        kd = Jd[Math.min(dd, Jd.length - 1)];
      return kd === PJ() ? null : kd
    }

    function PJ() {
      return (0, Zd.p)(pd.d.get("clientEscMenuOptions").pixelScale, (0, Zd.z)())
    }

    function ZJ() {
      return null !== Ad && null !== WJ()
    }

    function gJ(dd) {
      return kJ.add(dd), () => {
        kJ.delete(dd)
      }
    }

    function CJ(dd, Jd, kd) {
      var pd;
      if (null !== Ad || dJ || (0, bd.j)()) return;
      const Nd = (0, md.d)(dd, Jd, kd);
      null !== Nd && (0, bd.m)(Nd.vendor), JJ = `${dd}:${(null===Nd||void 0===Nd?void 0:Nd.renderer)||(null===Nd||void 0===Nd?void 0:Nd.vendor)||""}`, (null === (pd = yd()) || void 0 === pd ? void 0 : pd.gpu) !== JJ && (Cd.i.setItem(jd, {
        gpu: JJ
      }), Vd = null), oJ(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var dd;
          null === (dd = Ad) || void 0 === dd || dd.hidden()
        } catch (Jd) {
          vJ(), console.error("The quality steps stopped", Jd)
        }
      }))
    }
    let KJ = 0;

    function oJ() {
      var dd;
      const Jd = null !== (dd = yd()) && void 0 !== dd ? dd : {
          gpu: JJ
        },
        kd = Ud();
      KJ = nd(), Ad = new Yd({
          changed: pJ,
          qQ: () => {
            QJ({
              heldN: void 0
            })
          },
          EC: dd => {
            var Jd;
            const kd = Ud()[dd],
              pd = {
                heldN: kd,
                heldAt: Date.now(),
                heldTarget: nd()
              };
            (null === (Jd = yd()) || void 0 === Jd ? void 0 : Jd.failedUpN) === kd && (pd.failedUpN = void 0), QJ(pd)
          },
          upFailed: dd => {
            QJ({
              failedUpN: Ud()[dd],
              failedUpAt: Date.now()
            })
          },
          noGain: dd => {
            QJ({
              noGain: null === dd ? void 0 : Dd(dd)
            })
          }
        }, {
          lowest: kd.length - 1,
          startStep: Hd(),
          noGain: Td(Jd.noGain),
          upWait: wd(Jd, kd)
        }),
        function(dd) {
          const Jd = {
            get step() {
              return dd.currentStep()
            },
            get n() {
              var dd;
              return null !== (dd = WJ()) && void 0 !== dd ? dd : PJ()
            },
            get scale() {
              var dd;
              return Ud()[0] / (null !== (dd = WJ()) && void 0 !== dd ? dd : PJ())
            },
            get msaaOff() {
              return cd()
            },
            log: dd.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Jd,
            configurable: !0
          })
        }(Ad), pJ()
    }

    function lJ() {
      null !== Ad && nd() !== KJ && (Vd = null, oJ())
    }

    function QJ(dd) {
      Cd.i.setItem(jd, {
        ...yd(),
        ...dd,
        gpu: JJ
      })
    }
    let LJ = 0,
      OJ = 0,
      eJ = 0,
      RJ = !1;

    function IJ() {
      LJ++
    }

    function GJ(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      lJ(), null !== Ad && (dd - eJ >= 1e3 && (RJ = LJ - OJ > gd.e.sceneChange.meshesPerSecond, OJ = LJ, eJ = dd), Sd.d.isHeld() ? Ad.paused(dd) : Ad.frame(dd, Jd, kd && !document.hidden && ud(), RJ || pd > 0 || (0, Wd.n)()))
    }

    function vJ() {
      if (!dJ) {
        dJ = !0, null !== Ad && (Ad = null, QJ({
          noGain: void 0
        }));
        try {
          pJ()
        } catch (dd) {
          console.error("The quality steps' resize to the player's n failed", dd)
        }
      }
    }

    function xJ() {
      var dd;
      null === (dd = Ad) || void 0 === dd || dd.resized(performance.now())
    }
  },
  9165: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(95),
      Nd = kd(119);

    function Wd(dd, Jd, kd) {
      if ("webgpu" === dd) return kd ? ((0, pd.seedGpuVendor)(kd), {
        vendor: kd,
        renderer: ""
      }) : null;
      try {
        const kd = "webgl" === dd ? Jd.getContext("webgl2") : Jd.getContext("webgl");
        "webgl" === dd && kd && (0, Nd.u)(kd);
        const Wd = null === kd || void 0 === kd ? void 0 : kd.getExtension("WEBGL_debug_renderer_info");
        if (kd && Wd) {
          const dd = String(kd.getParameter(Wd.UNMASKED_VENDOR_WEBGL)),
            Jd = String(kd.getParameter(Wd.UNMASKED_RENDERER_WEBGL));
          return (0, pd.seedGpuVendor)(dd), (0, Nd.B)(dd, Jd), {
            vendor: dd,
            renderer: Jd
          }
        }
        kd && (0, Nd.B)(String(kd.getParameter(kd.VENDOR)), String(kd.getParameter(kd.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);