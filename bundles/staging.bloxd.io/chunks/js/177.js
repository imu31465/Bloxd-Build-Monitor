export const id = 177;
export const ids = [177];
export const modules = {
  8511: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ,
      e: () => XJ
    });
    var FJ = ZJ(29);
    const UJ = new Map,
      eJ = JJ => `${JJ}Chosen`;

    function XJ(JJ) {
      UJ.set(JJ, !0), FJ.j.setItem(eJ(JJ), !0)
    }

    function AJ(JJ) {
      let cJ = UJ.get(JJ);
      return void 0 === cJ && (cJ = !0 === FJ.j.getItem(eJ(JJ)), UJ.set(JJ, cJ)), cJ
    }
  },
  8526: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => TJ,
      f: () => xc,
      g: () => fc,
      h: () => vc,
      j: () => Uc,
      n: () => Xc,
      p: () => qc,
      s: () => rc,
      t: () => Ac
    });
    var FJ = ZJ(13),
      UJ = ZJ(80),
      eJ = ZJ(1528),
      XJ = ZJ(8511),
      AJ = ZJ(2431),
      qJ = ZJ(2442),
      jJ = ZJ(29);
    const {
      windows: YJ,
      target: hJ,
      stepDown: DJ,
      stepUp: sJ,
      noGain: nJ
    } = qJ.e, GJ = 1e3 / 60 * 1.08, fJ = 1e3 / 55, xJ = 1e3 / 45, rJ = 1e3 / 30 * .92, vJ = 1e3 / 30 * 1.08;
    class mJ {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(JJ) {
        const cJ = JJ - this.lastMs;
        this.lastMs = JJ;
        const ZJ = function(JJ) {
          if (JJ <= 0 || JJ > 100) return -1;
          if (JJ <= GJ) return 0;
          if (JJ >= fJ && JJ <= xJ) return 1;
          return JJ >= rJ && JJ <= vJ ? 2 : -1
        }(cJ);
        ZJ !== this.runBand && (this.runBand = ZJ, this.runLength = 0), ZJ < 0 || ++this.runLength < 3 || (0 === ZJ ? this.votes60++ : 1 === ZJ ? (this.votesMid++, this.sumMidMs += cJ) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const QJ = YJ.windowMs,
      EJ = YJ.settleMs,
      VJ = YJ.graceMs,
      KJ = YJ.minIntervals,
      yJ = 1e3 * KJ / QJ,
      SJ = nJ.backoffMs,
      IJ = nJ.maxMs;
    class MJ {
      constructor(JJ, cJ) {
        let {
          lowest: ZJ,
          startStep: FJ = 0,
          noGain: UJ = null,
          upWait: eJ = null
        } = cJ;
        this.hooks = JJ, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new mJ, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = hJ.maxFps, this.lowest = ZJ, this.step = Math.min(FJ, ZJ), this.noGain = UJ, this.climbing = this.step > 0;
        const XJ = ZJ + 1;
        this.downUntilMs = new Array(XJ).fill(0), this.downBackoffMs = new Array(XJ).fill(0), this.upFailures = new Array(XJ).fill(0), this.upUntilMs = new Array(XJ).fill(0), null !== eJ && eJ.step >= 0 && eJ.step < XJ && (this.upUntilMs[eJ.step] = eJ.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(JJ), !ZJ) return void this.cn(JJ);
        const UJ = JJ - this.lastFrameMs,
          eJ = this.resizeStall(JJ);
        if (UJ > 2e3 && !eJ && this.cn(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = JJ, this.quietUntilMs = Math.max(this.quietUntilMs, JJ + VJ), this.graceUntilMs = JJ + VJ, this.windowStartMs = -1, void(this.slowStartMs = -1);
        UJ > 500 && (this.hitch(JJ), eJ && (this.slowStartMs = -1)), this.lastFrameMs = JJ, JJ >= this.quietUntilMs && this.countWindow(JJ, cJ, FJ) || cJ && JJ >= this.graceUntilMs && this.countSlow(JJ)
      }
      countWindow(JJ, cJ, ZJ) {
        if (this.windowStartMs < 0) return !!cJ && (this.windowStartMs = JJ, this.lastDrawnMs = JJ, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = ZJ, !1);
        if (this.windowMasked ||= ZJ, !cJ) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, JJ - this.lastDrawnMs), this.lastDrawnMs = JJ;
        const FJ = JJ - this.windowStartMs;
        if (FJ < QJ) return !1;
        const UJ = this.windowIntervals,
          eJ = 1e3 * UJ / FJ,
          XJ = this.windowHeld,
          AJ = this.windowMaxIntervalMs,
          qJ = this.windowMasked;
        if (this.windowStartMs = -1, UJ < KJ) return !1;
        this.slowStartMs = -1;
        const jJ = this.targetFps(),
          YJ = eJ >= jJ * hJ.cleanShare && AJ <= hJ.cleanMaxIntervalMs && (0 === XJ || eJ >= jJ);
        return this.decide(eJ, YJ, eJ < jJ * hJ.dropShare, qJ, JJ), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(hJ.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(JJ) {
        if (this.slowStartMs < 0) return this.slowStartMs = JJ, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const cJ = JJ - this.slowStartMs;
        if (cJ < 1e4) return;
        const ZJ = 1e3 * this.slowIntervals / cJ;
        this.slowStartMs = -1, this.countSlow(JJ), ZJ < yJ && (this.windowStartMs = -1, this.decide(ZJ, !1, !0, !1, JJ))
      }
      resizeStall(JJ) {
        return this.lastFrameMs - this.resizedMs <= EJ && JJ - this.lastFrameMs <= 15e3
      }
      paused(JJ) {
        this.refresh.frame(JJ), JJ - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, JJ + VJ), this.graceUntilMs = JJ + VJ), this.lastFrameMs = JJ, this.slowStartMs = -1, this.hitch(JJ)
      }
      resized(JJ) {
        this.resizedMs = JJ, this.hitch(JJ)
      }
      hidden() {
        this.cn(this.lastFrameMs)
      }
      cn(JJ) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(JJ))
      }
      hitch(JJ) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, JJ + EJ)
      }
      left(JJ) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const cJ = this.phase;
        "watch" !== cJ.kind && (this.phase = {
          kind: "watch"
        }, "down" === cJ.kind && (this.downUntilMs[cJ.from] = Math.max(this.downUntilMs[cJ.from], JJ + SJ)), this.setStep(cJ.from, 0, JJ, "left"), "up" === cJ.kind && (this.climbed = cJ.fromClimbed))
      }
      decide(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = this.phase;
        switch (eJ.kind) {
          case "watch":
            return void this.watch(JJ, cJ, ZJ, FJ, UJ);
          case "down":
            if (eJ.judged++, eJ.fpsSum += JJ, eJ.dropped ||= ZJ, eJ.judged < DJ.judgeWindows) return;
            return void(!eJ.dropped || eJ.fpsSum / eJ.judged >= eJ.fromFps * DJ.keepGain ? this.keepDown(eJ.from, eJ.fpsSum / eJ.judged, UJ) : this.noGainFrom(eJ.from, eJ.fromFps, UJ));
          case "up":
            return cJ ? void(++eJ.judged >= sJ.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: eJ.from,
              heldWindows: 0,
              below: eJ.fromClimbed
            }, this.record(UJ, JJ, "up_kept"))) : (FJ ? (this.watchAt(eJ.from), this.setStep(eJ.from, JJ, UJ, "spoiled")) : this.failUp(this.step, eJ.from, JJ, UJ), void(this.climbed = eJ.fromClimbed))
        }
      }
      watch(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = this.climbed;
        if (null !== eJ && !ZJ && !FJ && ++eJ.heldWindows >= sJ.heldWindows && (this.climbed = null, this.record(UJ, JJ, "hj"), this.hooks.hj(this.step)), ZJ ? (this.dropRun++, this.dropRunFpsSum += JJ, this.dropRunMasked ||= FJ) : this.resetDropRun(), FJ && cJ || (this.cleanRun = cJ ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? DJ.maskedWindows : DJ.dropWindows)) {
          const cJ = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const ZJ = this.climbed;
          return void(null !== ZJ ? (this.failUp(this.step, ZJ.from, JJ, UJ), this.climbed = ZJ.below) : this.step < this.lowest && this.downAllowed(UJ) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: cJ,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, JJ, UJ, "down")))
        }
        const XJ = this.step - 1;
        XJ >= 0 && this.cleanRun >= (this.climbing ? sJ.climbWindows : sJ.cleanWindows) && this.upAllowed(XJ, UJ) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(XJ, JJ, UJ, "up"))
      }
      downAllowed(JJ) {
        return !(0 === this.step && null !== this.noGain && JJ < this.noGain.untilMs) && JJ >= this.downUntilMs[this.step]
      }
      upAllowed(JJ, cJ) {
        return this.upFailures[JJ] <= sJ.failWaitsMs.length && cJ >= this.upUntilMs[JJ]
      }
      keepDown(JJ, cJ, ZJ) {
        this.watchAt(this.step), this.downBackoffMs[JJ] = 0, this.record(ZJ, cJ, "down_kept"), 0 === JJ && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.ys(this.step)
      }
      noGainFrom(JJ, cJ, ZJ) {
        var FJ, UJ;
        const eJ = 0 === JJ ? null !== (FJ = null === (UJ = this.noGain) || void 0 === UJ ? void 0 : UJ.backoffMs) && void 0 !== FJ ? FJ : 0 : this.downBackoffMs[JJ],
          XJ = 0 === eJ ? SJ : Math.min(2 * eJ, IJ);
        this.downBackoffMs[JJ] = XJ, this.downUntilMs[JJ] = ZJ + XJ, 0 === JJ && (this.noGain = {
          untilMs: ZJ + XJ,
          backoffMs: XJ
        }, this.hooks.noGain(this.noGain)), this.watchAt(JJ), this.setStep(JJ, cJ, ZJ, "no_gain")
      }
      failUp(JJ, cJ, ZJ, FJ) {
        this.climbing = !1;
        const UJ = ++this.upFailures[JJ];
        this.upUntilMs[JJ] = UJ <= sJ.failWaitsMs.length ? FJ + sJ.failWaitsMs[UJ - 1] : Number.POSITIVE_INFINITY, this.watchAt(cJ), this.setStep(cJ, ZJ, FJ, "up_failed"), this.hooks.upFailed(JJ)
      }
      watchAt(JJ) {
        this.phase = {
          kind: "watch"
        }, this.climbed = JJ === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(JJ, cJ, ZJ, FJ) {
        const UJ = JJ !== this.step;
        UJ && (this.climbed = null), this.step = JJ, this.record(ZJ, cJ, FJ), UJ && (this.slowStartMs = -1, this.resized(ZJ), this.hooks.changed(JJ))
      }
      record(JJ, cJ, ZJ) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: JJ,
          step: this.step,
          fps: Math.round(10 * cJ) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: ZJ
        })
      }
    }
    var bJ = ZJ(8532),
      wJ = ZJ(2601),
      WJ = ZJ(8541);
    const gJ = "autoGraphics",
      HJ = 6048e5,
      PJ = "startScale";

    function kJ() {
      return (0, AJ.E)(FJ.d.get("clientEscMenuOptions").pixelScale) * (0, AJ.A)()
    }

    function pJ() {
      return (0, AJ.r)(kJ())
    }

    function dJ() {
      const JJ = jJ.j.getItem(gJ);
      return "object" !== typeof JJ || null === JJ || "string" !== typeof JJ.gpu ? null : JJ
    }

    function zJ(JJ) {
      return {
        untilEpochMs: Date.now() + (JJ.untilMs - performance.now()),
        backoffMs: JJ.backoffMs
      }
    }

    function NJ(JJ) {
      return JJ ? {
        untilMs: performance.now() + (JJ.untilEpochMs - Date.now()),
        backoffMs: JJ.backoffMs
      } : null
    }
    let OJ = null;

    function TJ() {
      if (null === OJ) {
        const JJ = new URLSearchParams(window.location.search).get("msaa");
        OJ = FJ.d.get("clientEscMenuOptions").antiAliasing && ("0" === JJ || "1" !== JJ && !(0, XJ.c)("antiAliasing") && (0, wJ.i)())
      }
      return OJ
    }

    function CJ(JJ) {
      const cJ = "number" === typeof JJ ? Date.now() - JJ : -1;
      return cJ >= 0 && cJ < HJ
    }
    let uJ = null;

    function iJ() {
      return uJ ??= (0, UJ.getDeviceDefaultPixelScale)(), RJ(uJ)
    }

    function RJ(JJ) {
      const cJ = FJ.d.get("clientEscMenuOptions");
      return cJ.pixelSmoothing && !(0, XJ.c)("pixelScale") && cJ.pixelScale === JJ
    }
    let LJ = null,
      aJ = 0;

    function BJ() {
      if (null === LJ || aJ !== kJ()) {
        var JJ;
        aJ = kJ();
        const cJ = Number(null !== (JJ = new URLSearchParams(window.location.search).get(PJ)) && void 0 !== JJ ? JJ : ""),
          ZJ = pJ();
        if (cJ > 0 && cJ <= 1) LJ = (0, AJ.w)(ZJ, ZJ[0] / cJ);
        else {
          const JJ = dJ(),
            cJ = (0, AJ.w)(ZJ, (0, AJ.z)(kJ())),
            FJ = !(0, wJ.n)() && CJ(null === JJ || void 0 === JJ ? void 0 : JJ.heldAt) && (null === JJ || void 0 === JJ ? void 0 : JJ.heldTarget) === kJ() ? null === JJ || void 0 === JJ ? void 0 : JJ.heldN : void 0;
          LJ = "number" === typeof FJ ? Math.min(cJ, (0, AJ.w)(ZJ, FJ)) : cJ
        }
      }
      return LJ
    }

    function tJ(JJ, cJ) {
      var ZJ;
      const FJ = cJ.indexOf(null !== (ZJ = JJ.failedUpN) && void 0 !== ZJ ? ZJ : -1);
      return FJ >= 0 && CJ(JJ.failedUpAt) ? {
        step: FJ,
        untilMs: performance.now() + qJ.e.stepUp.failWaitsMs[0]
      } : null
    }
    let oJ = null,
      lJ = !1,
      Jc = "";
    const cc = new Set;

    function Zc() {
      for (const JJ of cc) JJ()
    }

    function Fc() {
      return lJ ? null : (hc(), null === oJ ? (null !== uJ || null !== (0, UJ.peekGpuVendor)() ? iJ() : RJ(1)) ? BJ() : null : iJ() ? oJ.currentStep() : null)
    }

    function Uc() {
      const JJ = Fc();
      if (null === JJ) return null;
      const cJ = pJ(),
        ZJ = cJ[Math.min(JJ, cJ.length - 1)];
      return ZJ === ec() ? null : ZJ
    }

    function ec() {
      return (0, AJ.u)(FJ.d.get("clientEscMenuOptions").pixelScale, (0, AJ.A)())
    }

    function Xc() {
      return null !== oJ && null !== Uc()
    }

    function Ac(JJ) {
      return cc.add(JJ), () => {
        cc.delete(JJ)
      }
    }

    function qc(JJ, cJ, ZJ) {
      var FJ;
      if (null !== oJ || lJ || (0, wJ.n)()) return;
      const UJ = (0, bJ.b)(JJ, cJ, ZJ);
      null !== UJ && (0, wJ.r)(UJ.vendor), Jc = `${JJ}:${(null===UJ||void 0===UJ?void 0:UJ.renderer)||(null===UJ||void 0===UJ?void 0:UJ.vendor)||""}`, (null === (FJ = dJ()) || void 0 === FJ ? void 0 : FJ.gpu) !== Jc && (jJ.j.setItem(gJ, {
        gpu: Jc
      }), LJ = null), Yc(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var JJ;
          null === (JJ = oJ) || void 0 === JJ || JJ.hidden()
        } catch (cJ) {
          rc(), console.error("The quality steps stopped", cJ)
        }
      }))
    }
    let jc = 0;

    function Yc() {
      var JJ;
      const cJ = null !== (JJ = dJ()) && void 0 !== JJ ? JJ : {
          gpu: Jc
        },
        ZJ = pJ();
      jc = kJ(), oJ = new MJ({
          changed: Zc,
          ys: () => {
            Dc({
              heldN: void 0
            })
          },
          hj: JJ => {
            var cJ;
            const ZJ = pJ()[JJ],
              FJ = {
                heldN: ZJ,
                heldAt: Date.now(),
                heldTarget: kJ()
              };
            (null === (cJ = dJ()) || void 0 === cJ ? void 0 : cJ.failedUpN) === ZJ && (FJ.failedUpN = void 0), Dc(FJ)
          },
          upFailed: JJ => {
            Dc({
              failedUpN: pJ()[JJ],
              failedUpAt: Date.now()
            })
          },
          noGain: JJ => {
            Dc({
              noGain: null === JJ ? void 0 : zJ(JJ)
            })
          }
        }, {
          lowest: ZJ.length - 1,
          startStep: BJ(),
          noGain: NJ(cJ.noGain),
          upWait: tJ(cJ, ZJ)
        }),
        function(JJ) {
          const cJ = {
            get step() {
              return JJ.currentStep()
            },
            get n() {
              var JJ;
              return null !== (JJ = Uc()) && void 0 !== JJ ? JJ : ec()
            },
            get scale() {
              var JJ;
              return pJ()[0] / (null !== (JJ = Uc()) && void 0 !== JJ ? JJ : ec())
            },
            get msaaOff() {
              return TJ()
            },
            log: JJ.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: cJ,
            configurable: !0
          })
        }(oJ), Zc()
    }

    function hc() {
      null !== oJ && kJ() !== jc && (LJ = null, Yc())
    }

    function Dc(JJ) {
      jJ.j.setItem(gJ, {
        ...dJ(),
        ...JJ,
        gpu: Jc
      })
    }
    let sc = 0,
      nc = 0,
      Gc = !1;

    function fc() {
      sc++
    }

    function xc(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      hc(), null !== oJ && (JJ - nc >= 1e3 && (Gc = sc > qJ.e.sceneChange.meshesPerSecond, sc = 0, nc = JJ), WJ.c.isHeld() ? oJ.paused(JJ) : oJ.frame(JJ, cJ, ZJ && !document.hidden && iJ(), Gc || FJ > 0 || (0, eJ.l)()))
    }

    function rc() {
      if (!lJ) {
        lJ = !0, null !== oJ && (oJ = null, Dc({
          noGain: void 0
        }));
        try {
          Zc()
        } catch (JJ) {
          console.error("The quality steps' resize to the player's n failed", JJ)
        }
      }
    }

    function vc() {
      var JJ;
      null === (JJ = oJ) || void 0 === JJ || JJ.resized(performance.now())
    }
  },
  8532: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ
    });
    var FJ = ZJ(80),
      UJ = ZJ(101);

    function eJ(JJ, cJ, ZJ) {
      if ("webgpu" === JJ) return ZJ ? ((0, FJ.seedGpuVendor)(ZJ), {
        vendor: ZJ,
        renderer: ""
      }) : null;
      try {
        const ZJ = "webgl" === JJ ? cJ.getContext("webgl2") : cJ.getContext("webgl"),
          eJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.getExtension("WEBGL_debug_renderer_info");
        if (ZJ && eJ) {
          const JJ = String(ZJ.getParameter(eJ.UNMASKED_VENDOR_WEBGL)),
            cJ = String(ZJ.getParameter(eJ.UNMASKED_RENDERER_WEBGL));
          return (0, FJ.seedGpuVendor)(JJ), (0, UJ.y)(JJ, cJ), {
            vendor: JJ,
            renderer: cJ
          }
        }
        ZJ && (0, UJ.y)(String(ZJ.getParameter(ZJ.VENDOR)), String(ZJ.getParameter(ZJ.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);