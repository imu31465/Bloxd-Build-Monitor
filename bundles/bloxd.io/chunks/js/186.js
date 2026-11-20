export const id = 186;
export const ids = [186];
export const modules = {
  8973: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Zu,
      g: () => jR,
      k: () => HR,
      m: () => WR,
      p: () => bR,
      r: () => KR,
      s: () => mR,
      u: () => NR,
      y: () => dR,
      C: () => JR
    });
    var Eu = yu(27),
      Ku = yu(106),
      Qu = yu(1583),
      mu = yu(4185),
      Ju = yu(2662),
      Nu = yu(2679),
      Xu = yu(47);
    const {
      windows: Vu,
      target: ru,
      stepDown: Bu,
      stepUp: xu,
      noGain: Su
    } = Nu.c, pu = 1e3 / 60 * 1.08, Tu = 1e3 / 55, Wu = 1e3 / 45, ju = 1e3 / 30 * .92, Hu = 1e3 / 30 * 1.08;
    class du {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(uu) {
        const Ru = uu - this.lastMs;
        this.lastMs = uu;
        const yu = function(uu) {
          if (uu <= 0 || uu > 100) return -1;
          if (uu <= pu) return 0;
          if (uu >= Tu && uu <= Wu) return 1;
          return uu >= ju && uu <= Hu ? 2 : -1
        }(Ru);
        yu !== this.runBand && (this.runBand = yu, this.runLength = 0), yu < 0 || ++this.runLength < 3 || (0 === yu ? this.votes60++ : 1 === yu ? (this.votesMid++, this.sumMidMs += Ru) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const bu = Vu.windowMs,
      Cu = Vu.settleMs,
      ku = Vu.graceMs,
      eu = Vu.minIntervals,
      Au = 1e3 * eu / bu,
      Du = Su.backoffMs,
      Mu = Su.maxMs;
    class Iu {
      constructor(uu, Ru) {
        let {
          lowest: yu,
          startStep: Eu = 0,
          noGain: Ku = null,
          upWait: Qu = null
        } = Ru;
        this.hooks = uu, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new du, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = ru.maxFps, this.lowest = yu, this.step = Math.min(Eu, yu), this.noGain = Ku, this.climbing = this.step > 0;
        const mu = yu + 1;
        this.downUntilMs = new Array(mu).fill(0), this.downBackoffMs = new Array(mu).fill(0), this.upFailures = new Array(mu).fill(0), this.upUntilMs = new Array(mu).fill(0), null !== Qu && Qu.step >= 0 && Qu.step < mu && (this.upUntilMs[Qu.step] = Qu.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(uu), !yu) return void this.leave(uu);
        const Ku = uu - this.lastFrameMs,
          Qu = this.resizeStall(uu);
        if (Ku > 2e3 && !Qu && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = uu, this.quietUntilMs = Math.max(this.quietUntilMs, uu + ku), this.graceUntilMs = uu + ku, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Ku > 500 && (this.hitch(uu), Qu && (this.slowStartMs = -1)), this.lastFrameMs = uu, uu >= this.quietUntilMs && this.countWindow(uu, Ru, Eu) || Ru && uu >= this.graceUntilMs && this.countSlow(uu)
      }
      countWindow(uu, Ru, yu) {
        if (this.windowStartMs < 0) return !!Ru && (this.windowStartMs = uu, this.lastDrawnMs = uu, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = yu, !1);
        if (this.windowMasked ||= yu, !Ru) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, uu - this.lastDrawnMs), this.lastDrawnMs = uu;
        const Eu = uu - this.windowStartMs;
        if (Eu < bu) return !1;
        const Ku = this.windowIntervals,
          Qu = 1e3 * Ku / Eu,
          mu = this.windowHeld,
          Ju = this.windowMaxIntervalMs,
          Nu = this.windowMasked;
        if (this.windowStartMs = -1, Ku < eu) return !1;
        this.slowStartMs = -1;
        const Xu = this.targetFps(),
          Vu = Qu >= Xu * ru.cleanShare && Ju <= ru.cleanMaxIntervalMs && (0 === mu || Qu >= Xu);
        return this.decide(Qu, Vu, Qu < Xu * ru.dropShare, Nu, uu), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(ru.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(uu) {
        if (this.slowStartMs < 0) return this.slowStartMs = uu, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const Ru = uu - this.slowStartMs;
        if (Ru < 1e4) return;
        const yu = 1e3 * this.slowIntervals / Ru;
        this.slowStartMs = -1, this.countSlow(uu), yu < Au && (this.windowStartMs = -1, this.decide(yu, !1, !0, !1, uu))
      }
      resizeStall(uu) {
        return this.lastFrameMs - this.resizedMs <= Cu && uu - this.lastFrameMs <= 15e3
      }
      paused(uu) {
        this.refresh.frame(uu), uu - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, uu + ku), this.graceUntilMs = uu + ku), this.lastFrameMs = uu, this.slowStartMs = -1, this.hitch(uu)
      }
      resized(uu) {
        this.resizedMs = uu, this.hitch(uu)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(uu) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(uu))
      }
      hitch(uu) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, uu + Cu)
      }
      left(uu) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const Ru = this.phase;
        "watch" !== Ru.kind && (this.phase = {
          kind: "watch"
        }, "down" === Ru.kind && (this.downUntilMs[Ru.from] = Math.max(this.downUntilMs[Ru.from], uu + Du)), this.setStep(Ru.from, 0, uu, "left"), "up" === Ru.kind && (this.climbed = Ru.fromClimbed))
      }
      decide(uu, Ru, yu, Eu, Ku) {
        const Qu = this.phase;
        switch (Qu.kind) {
          case "watch":
            return void this.watch(uu, Ru, yu, Eu, Ku);
          case "down":
            if (Qu.judged++, Qu.fpsSum += uu, Qu.dropped ||= yu, Qu.judged < Bu.judgeWindows) return;
            return void(!Qu.dropped || Qu.fpsSum / Qu.judged >= Qu.fromFps * Bu.keepGain ? this.keepDown(Qu.from, Qu.fpsSum / Qu.judged, Ku) : this.noGainFrom(Qu.from, Qu.fromFps, Ku));
          case "up":
            return Ru ? void(++Qu.judged >= xu.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: Qu.from,
              heldWindows: 0,
              below: Qu.fromClimbed
            }, this.record(Ku, uu, "up_kept"))) : (Eu ? (this.watchAt(Qu.from), this.setStep(Qu.from, uu, Ku, "spoiled")) : this.failUp(this.step, Qu.from, uu, Ku), void(this.climbed = Qu.fromClimbed))
        }
      }
      watch(uu, Ru, yu, Eu, Ku) {
        const Qu = this.climbed;
        if (null !== Qu && !yu && !Eu && ++Qu.heldWindows >= xu.heldWindows && (this.climbed = null, this.record(Ku, uu, "jJ"), this.hooks.jJ(this.step)), yu ? (this.dropRun++, this.dropRunFpsSum += uu, this.dropRunMasked ||= Eu) : this.resetDropRun(), Eu && Ru || (this.cleanRun = Ru ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? Bu.maskedWindows : Bu.dropWindows)) {
          const Ru = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const yu = this.climbed;
          return void(null !== yu ? (this.failUp(this.step, yu.from, uu, Ku), this.climbed = yu.below) : this.step < this.lowest && this.downAllowed(Ku) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Ru,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, uu, Ku, "down")))
        }
        const mu = this.step - 1;
        mu >= 0 && this.cleanRun >= (this.climbing ? xu.climbWindows : xu.cleanWindows) && this.upAllowed(mu, Ku) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(mu, uu, Ku, "up"))
      }
      downAllowed(uu) {
        return !(0 === this.step && null !== this.noGain && uu < this.noGain.untilMs) && uu >= this.downUntilMs[this.step]
      }
      upAllowed(uu, Ru) {
        return this.upFailures[uu] <= xu.failWaitsMs.length && Ru >= this.upUntilMs[uu]
      }
      keepDown(uu, Ru, yu) {
        this.watchAt(this.step), this.downBackoffMs[uu] = 0, this.record(yu, Ru, "down_kept"), 0 === uu && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.kx(this.step)
      }
      noGainFrom(uu, Ru, yu) {
        var Eu, Ku;
        const Qu = 0 === uu ? null !== (Eu = null === (Ku = this.noGain) || void 0 === Ku ? void 0 : Ku.backoffMs) && void 0 !== Eu ? Eu : 0 : this.downBackoffMs[uu],
          mu = 0 === Qu ? Du : Math.min(2 * Qu, Mu);
        this.downBackoffMs[uu] = mu, this.downUntilMs[uu] = yu + mu, 0 === uu && (this.noGain = {
          untilMs: yu + mu,
          backoffMs: mu
        }, this.hooks.noGain(this.noGain)), this.watchAt(uu), this.setStep(uu, Ru, yu, "no_gain")
      }
      failUp(uu, Ru, yu, Eu) {
        this.climbing = !1;
        const Ku = ++this.upFailures[uu];
        this.upUntilMs[uu] = Ku <= xu.failWaitsMs.length ? Eu + xu.failWaitsMs[Ku - 1] : Number.POSITIVE_INFINITY, this.watchAt(Ru), this.setStep(Ru, yu, Eu, "up_failed"), this.hooks.upFailed(uu)
      }
      watchAt(uu) {
        this.phase = {
          kind: "watch"
        }, this.climbed = uu === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(uu, Ru, yu, Eu) {
        const Ku = uu !== this.step;
        Ku && (this.climbed = null), this.step = uu, this.record(yu, Ru, Eu), Ku && (this.slowStartMs = -1, this.resized(yu), this.hooks.changed(uu))
      }
      record(uu, Ru, yu) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: uu,
          step: this.step,
          fps: Math.round(10 * Ru) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: yu
        })
      }
    }
    var Gu = yu(8977),
      Uu = yu(2896),
      nu = yu(8984);
    const su = "autoGraphics",
      tu = 6048e5,
      lu = "startScale";

    function gu() {
      return (0, Ju.F)(Eu.d.get("clientEscMenuOptions").pixelScale) * (0, Ju.A)()
    }

    function cu() {
      return (0, Ju.p)(gu())
    }

    function Lu() {
      const uu = Xu.i.getItem(su);
      return "object" !== typeof uu || null === uu || "string" !== typeof uu.gpu ? null : uu
    }

    function zu(uu) {
      return {
        untilEpochMs: Date.now() + (uu.untilMs - performance.now()),
        backoffMs: uu.backoffMs
      }
    }

    function Fu(uu) {
      return uu ? {
        untilMs: performance.now() + (uu.untilEpochMs - Date.now()),
        backoffMs: uu.backoffMs
      } : null
    }
    let wu = null;

    function Zu() {
      if (null === wu) {
        const uu = new URLSearchParams(window.location.search).get("msaa");
        wu = Eu.d.get("clientEscMenuOptions").antiAliasing && ("0" === uu || "1" !== uu && !(0, mu.c)("antiAliasing") && (0, Uu.g)())
      }
      return wu
    }

    function hu(uu) {
      const Ru = "number" === typeof uu ? Date.now() - uu : -1;
      return Ru >= 0 && Ru < tu
    }
    let Pu = null;

    function iu() {
      return Pu ??= (0, Ku.getDeviceDefaultPixelScale)(), Yu(Pu)
    }

    function Yu(uu) {
      const Ru = Eu.d.get("clientEscMenuOptions");
      return Ru.pixelSmoothing && !(0, mu.c)("pixelScale") && Ru.pixelScale === uu
    }
    let ou = null,
      qu = 0;

    function Ou() {
      if (null === ou || qu !== gu()) {
        var uu;
        qu = gu();
        const Ru = Number(null !== (uu = new URLSearchParams(window.location.search).get(lu)) && void 0 !== uu ? uu : ""),
          yu = cu();
        if (Ru > 0 && Ru <= 1) ou = (0, Ju.y)(yu, yu[0] / Ru);
        else {
          const uu = Lu(),
            Ru = (0, Ju.y)(yu, (0, Ju.z)(gu())),
            Eu = !(0, Uu.j)() && hu(null === uu || void 0 === uu ? void 0 : uu.heldAt) && (null === uu || void 0 === uu ? void 0 : uu.heldTarget) === gu() ? null === uu || void 0 === uu ? void 0 : uu.heldN : void 0;
          ou = "number" === typeof Eu ? Math.min(Ru, (0, Ju.y)(yu, Eu)) : Ru
        }
      }
      return ou
    }

    function vu(uu, Ru) {
      var yu;
      const Eu = Ru.indexOf(null !== (yu = uu.failedUpN) && void 0 !== yu ? yu : -1);
      return Eu >= 0 && hu(uu.failedUpAt) ? {
        step: Eu,
        untilMs: performance.now() + Nu.c.stepUp.failWaitsMs[0]
      } : null
    }
    let au = null,
      fu = !1,
      uR = "";
    const RR = new Set;

    function yR() {
      for (const uu of RR) uu()
    }

    function ER() {
      return fu ? null : (rR(), null === au ? (null !== Pu || null !== (0, Ku.peekGpuVendor)() ? iu() : Yu(1)) ? Ou() : null : iu() ? au.currentStep() : null)
    }

    function KR() {
      const uu = ER();
      if (null === uu) return null;
      const Ru = cu(),
        yu = Ru[Math.min(uu, Ru.length - 1)];
      return yu === QR() ? null : yu
    }

    function QR() {
      return (0, Ju.w)(Eu.d.get("clientEscMenuOptions").pixelScale, (0, Ju.A)())
    }

    function mR() {
      return null !== au && null !== KR()
    }

    function JR(uu) {
      return RR.add(uu), () => {
        RR.delete(uu)
      }
    }

    function NR(uu, Ru, yu) {
      var Eu;
      if (null !== au || fu || (0, Uu.j)()) return;
      const Ku = (0, Gu.d)(uu, Ru, yu);
      null !== Ku && (0, Uu.m)(Ku.vendor), uR = `${uu}:${(null===Ku||void 0===Ku?void 0:Ku.renderer)||(null===Ku||void 0===Ku?void 0:Ku.vendor)||""}`, (null === (Eu = Lu()) || void 0 === Eu ? void 0 : Eu.gpu) !== uR && (Xu.i.setItem(su, {
        gpu: uR
      }), ou = null), VR(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var uu;
          null === (uu = au) || void 0 === uu || uu.hidden()
        } catch (Ru) {
          dR(), console.error("The quality steps stopped", Ru)
        }
      }))
    }
    let XR = 0;

    function VR() {
      var uu;
      const Ru = null !== (uu = Lu()) && void 0 !== uu ? uu : {
          gpu: uR
        },
        yu = cu();
      XR = gu(), au = new Iu({
          changed: yR,
          kx: () => {
            BR({
              heldN: void 0
            })
          },
          jJ: uu => {
            var Ru;
            const yu = cu()[uu],
              Eu = {
                heldN: yu,
                heldAt: Date.now(),
                heldTarget: gu()
              };
            (null === (Ru = Lu()) || void 0 === Ru ? void 0 : Ru.failedUpN) === yu && (Eu.failedUpN = void 0), BR(Eu)
          },
          upFailed: uu => {
            BR({
              failedUpN: cu()[uu],
              failedUpAt: Date.now()
            })
          },
          noGain: uu => {
            BR({
              noGain: null === uu ? void 0 : zu(uu)
            })
          }
        }, {
          lowest: yu.length - 1,
          startStep: Ou(),
          noGain: Fu(Ru.noGain),
          upWait: vu(Ru, yu)
        }),
        function(uu) {
          const Ru = {
            get step() {
              return uu.currentStep()
            },
            get n() {
              var uu;
              return null !== (uu = KR()) && void 0 !== uu ? uu : QR()
            },
            get scale() {
              var uu;
              return cu()[0] / (null !== (uu = KR()) && void 0 !== uu ? uu : QR())
            },
            get msaaOff() {
              return Zu()
            },
            log: uu.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Ru,
            configurable: !0
          })
        }(au), yR()
    }

    function rR() {
      null !== au && gu() !== XR && (ou = null, VR())
    }

    function BR(uu) {
      Xu.i.setItem(su, {
        ...Lu(),
        ...uu,
        gpu: uR
      })
    }
    let xR = 0,
      SR = 0,
      pR = 0,
      TR = !1;

    function WR() {
      xR++
    }

    function jR() {
      return xR
    }

    function HR(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      rR(), null !== au && (uu - pR >= 1e3 && (TR = xR - SR > Nu.c.sceneChange.meshesPerSecond, SR = xR, pR = uu), nu.e.isHeld() ? au.paused(uu) : au.frame(uu, Ru, yu && !document.hidden && iu(), TR || Eu > 0 || (0, Qu.p)()))
    }

    function dR() {
      if (!fu) {
        fu = !0, null !== au && (au = null, BR({
          noGain: void 0
        }));
        try {
          yR()
        } catch (uu) {
          console.error("The quality steps' resize to the player's n failed", uu)
        }
      }
    }

    function bR() {
      var uu;
      null === (uu = au) || void 0 === uu || uu.resized(performance.now())
    }
  },
  8977: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(106),
      Ku = yu(143);

    function Qu(uu, Ru, yu) {
      if ("webgpu" === uu) return yu ? ((0, Eu.seedGpuVendor)(yu), {
        vendor: yu,
        renderer: ""
      }) : null;
      try {
        const yu = "webgl" === uu ? Ru.getContext("webgl2") : Ru.getContext("webgl"),
          Qu = null === yu || void 0 === yu ? void 0 : yu.getExtension("WEBGL_debug_renderer_info");
        if (yu && Qu) {
          const uu = String(yu.getParameter(Qu.UNMASKED_VENDOR_WEBGL)),
            Ru = String(yu.getParameter(Qu.UNMASKED_RENDERER_WEBGL));
          return (0, Eu.seedGpuVendor)(uu), (0, Ku.t)(uu, Ru), {
            vendor: uu,
            renderer: Ru
          }
        }
        yu && (0, Ku.t)(String(yu.getParameter(yu.VENDOR)), String(yu.getParameter(yu.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);