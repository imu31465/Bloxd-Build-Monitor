export const id = 185;
export const ids = [185];
export const modules = {
  8667: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => XY,
      d: () => Er,
      f: () => mr,
      j: () => Wr,
      l: () => Sr,
      n: () => Ar,
      q: () => Rr,
      r: () => gr,
      u: () => Vr,
      w: () => Or
    });
    var FY = DY(19),
      AY = DY(99),
      IY = DY(1619),
      RY = DY(3967),
      OY = DY(2523),
      gY = DY(2535),
      aY = DY(40);
    const {
      windows: vY,
      target: uY,
      stepDown: sY,
      stepUp: iY,
      noGain: yY
    } = gY.d, QY = 1e3 / 60 * 1.08, oY = 1e3 / 55, WY = 1e3 / 45, EY = 1e3 / 30 * .92, mY = 1e3 / 30 * 1.08;
    class VY {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(YY) {
        const rY = YY - this.lastMs;
        this.lastMs = YY;
        const DY = function(YY) {
          if (YY <= 0 || YY > 100) return -1;
          if (YY <= QY) return 0;
          if (YY >= oY && YY <= WY) return 1;
          return YY >= EY && YY <= mY ? 2 : -1
        }(rY);
        DY !== this.runBand && (this.runBand = DY, this.runLength = 0), DY < 0 || ++this.runLength < 3 || (0 === DY ? this.votes60++ : 1 === DY ? (this.votesMid++, this.sumMidMs += rY) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const SY = vY.windowMs,
      lY = vY.settleMs,
      TY = vY.graceMs,
      eY = vY.minIntervals,
      NY = 1e3 * eY / SY,
      BY = yY.backoffMs,
      cY = yY.maxMs;
    class KY {
      constructor(YY, rY) {
        let {
          lowest: DY,
          startStep: FY = 0,
          noGain: AY = null,
          upWait: IY = null
        } = rY;
        this.hooks = YY, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new VY, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = uY.maxFps, this.lowest = DY, this.step = Math.min(FY, DY), this.noGain = AY, this.climbing = this.step > 0;
        const RY = DY + 1;
        this.downUntilMs = new Array(RY).fill(0), this.downBackoffMs = new Array(RY).fill(0), this.upFailures = new Array(RY).fill(0), this.upUntilMs = new Array(RY).fill(0), null !== IY && IY.step >= 0 && IY.step < RY && (this.upUntilMs[IY.step] = IY.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(YY), !DY) return void this.leave(YY);
        const AY = YY - this.lastFrameMs,
          IY = this.resizeStall(YY);
        if (AY > 2e3 && !IY && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = YY, this.quietUntilMs = Math.max(this.quietUntilMs, YY + TY), this.graceUntilMs = YY + TY, this.windowStartMs = -1, void(this.slowStartMs = -1);
        AY > 500 && (this.hitch(YY), IY && (this.slowStartMs = -1)), this.lastFrameMs = YY, YY >= this.quietUntilMs && this.countWindow(YY, rY, FY) || rY && YY >= this.graceUntilMs && this.countSlow(YY)
      }
      countWindow(YY, rY, DY) {
        if (this.windowStartMs < 0) return !!rY && (this.windowStartMs = YY, this.lastDrawnMs = YY, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = DY, !1);
        if (this.windowMasked ||= DY, !rY) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, YY - this.lastDrawnMs), this.lastDrawnMs = YY;
        const FY = YY - this.windowStartMs;
        if (FY < SY) return !1;
        const AY = this.windowIntervals,
          IY = 1e3 * AY / FY,
          RY = this.windowHeld,
          OY = this.windowMaxIntervalMs,
          gY = this.windowMasked;
        if (this.windowStartMs = -1, AY < eY) return !1;
        this.slowStartMs = -1;
        const aY = this.targetFps(),
          vY = IY >= aY * uY.cleanShare && OY <= uY.cleanMaxIntervalMs && (0 === RY || IY >= aY);
        return this.decide(IY, vY, IY < aY * uY.dropShare, gY, YY), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(uY.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(YY) {
        if (this.slowStartMs < 0) return this.slowStartMs = YY, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const rY = YY - this.slowStartMs;
        if (rY < 1e4) return;
        const DY = 1e3 * this.slowIntervals / rY;
        this.slowStartMs = -1, this.countSlow(YY), DY < NY && (this.windowStartMs = -1, this.decide(DY, !1, !0, !1, YY))
      }
      resizeStall(YY) {
        return this.lastFrameMs - this.resizedMs <= lY && YY - this.lastFrameMs <= 15e3
      }
      paused(YY) {
        this.refresh.frame(YY), YY - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, YY + TY), this.graceUntilMs = YY + TY), this.lastFrameMs = YY, this.slowStartMs = -1, this.hitch(YY)
      }
      resized(YY) {
        this.resizedMs = YY, this.hitch(YY)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(YY) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(YY))
      }
      hitch(YY) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, YY + lY)
      }
      left(YY) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const rY = this.phase;
        "watch" !== rY.kind && (this.phase = {
          kind: "watch"
        }, "down" === rY.kind && (this.downUntilMs[rY.from] = Math.max(this.downUntilMs[rY.from], YY + BY)), this.setStep(rY.from, 0, YY, "left"), "up" === rY.kind && (this.climbed = rY.fromClimbed))
      }
      decide(YY, rY, DY, FY, AY) {
        const IY = this.phase;
        switch (IY.kind) {
          case "watch":
            return void this.watch(YY, rY, DY, FY, AY);
          case "down":
            if (IY.judged++, IY.fpsSum += YY, IY.dropped ||= DY, IY.judged < sY.judgeWindows) return;
            return void(!IY.dropped || IY.fpsSum / IY.judged >= IY.fromFps * sY.keepGain ? this.keepDown(IY.from, IY.fpsSum / IY.judged, AY) : this.noGainFrom(IY.from, IY.fromFps, AY));
          case "up":
            return rY ? void(++IY.judged >= iY.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: IY.from,
              heldWindows: 0,
              below: IY.fromClimbed
            }, this.record(AY, YY, "up_kept"))) : (FY ? (this.watchAt(IY.from), this.setStep(IY.from, YY, AY, "spoiled")) : this.failUp(this.step, IY.from, YY, AY), void(this.climbed = IY.fromClimbed))
        }
      }
      watch(YY, rY, DY, FY, AY) {
        const IY = this.climbed;
        if (null !== IY && !DY && !FY && ++IY.heldWindows >= iY.heldWindows && (this.climbed = null, this.record(AY, YY, "ja"), this.hooks.ja(this.step)), DY ? (this.dropRun++, this.dropRunFpsSum += YY, this.dropRunMasked ||= FY) : this.resetDropRun(), FY && rY || (this.cleanRun = rY ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? sY.maskedWindows : sY.dropWindows)) {
          const rY = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const DY = this.climbed;
          return void(null !== DY ? (this.failUp(this.step, DY.from, YY, AY), this.climbed = DY.below) : this.step < this.lowest && this.downAllowed(AY) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: rY,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, YY, AY, "down")))
        }
        const RY = this.step - 1;
        RY >= 0 && this.cleanRun >= (this.climbing ? iY.climbWindows : iY.cleanWindows) && this.upAllowed(RY, AY) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(RY, YY, AY, "up"))
      }
      downAllowed(YY) {
        return !(0 === this.step && null !== this.noGain && YY < this.noGain.untilMs) && YY >= this.downUntilMs[this.step]
      }
      upAllowed(YY, rY) {
        return this.upFailures[YY] <= iY.failWaitsMs.length && rY >= this.upUntilMs[YY]
      }
      keepDown(YY, rY, DY) {
        this.watchAt(this.step), this.downBackoffMs[YY] = 0, this.record(DY, rY, "down_kept"), 0 === YY && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.Mi(this.step)
      }
      noGainFrom(YY, rY, DY) {
        var FY, AY;
        const IY = 0 === YY ? null !== (FY = null === (AY = this.noGain) || void 0 === AY ? void 0 : AY.backoffMs) && void 0 !== FY ? FY : 0 : this.downBackoffMs[YY],
          RY = 0 === IY ? BY : Math.min(2 * IY, cY);
        this.downBackoffMs[YY] = RY, this.downUntilMs[YY] = DY + RY, 0 === YY && (this.noGain = {
          untilMs: DY + RY,
          backoffMs: RY
        }, this.hooks.noGain(this.noGain)), this.watchAt(YY), this.setStep(YY, rY, DY, "no_gain")
      }
      failUp(YY, rY, DY, FY) {
        this.climbing = !1;
        const AY = ++this.upFailures[YY];
        this.upUntilMs[YY] = AY <= iY.failWaitsMs.length ? FY + iY.failWaitsMs[AY - 1] : Number.POSITIVE_INFINITY, this.watchAt(rY), this.setStep(rY, DY, FY, "up_failed"), this.hooks.upFailed(YY)
      }
      watchAt(YY) {
        this.phase = {
          kind: "watch"
        }, this.climbed = YY === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(YY, rY, DY, FY) {
        const AY = YY !== this.step;
        AY && (this.climbed = null), this.step = YY, this.record(DY, rY, FY), AY && (this.slowStartMs = -1, this.resized(DY), this.hooks.changed(YY))
      }
      record(YY, rY, DY) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: YY,
          step: this.step,
          fps: Math.round(10 * rY) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: DY
        })
      }
    }
    var HY = DY(8669),
      zY = DY(2707),
      ZY = DY(8677);
    const CY = "autoGraphics",
      fY = 6048e5,
      jY = "startScale";

    function hY() {
      return (0, OY.K)(FY.b.get("clientEscMenuOptions").pixelScale) * (0, OY.H)()
    }

    function dY() {
      return (0, OY.r)(hY())
    }

    function JY() {
      const YY = aY.m.getItem(CY);
      return "object" !== typeof YY || null === YY || "string" !== typeof YY.gpu ? null : YY
    }

    function MY(YY) {
      return {
        untilEpochMs: Date.now() + (YY.untilMs - performance.now()),
        backoffMs: YY.backoffMs
      }
    }

    function wY(YY) {
      return YY ? {
        untilMs: performance.now() + (YY.untilEpochMs - Date.now()),
        backoffMs: YY.backoffMs
      } : null
    }
    let bY = null;

    function XY() {
      if (null === bY) {
        const YY = new URLSearchParams(window.location.search).get("msaa");
        bY = FY.b.get("clientEscMenuOptions").antiAliasing && ("0" === YY || "1" !== YY && !(0, RY.e)("antiAliasing") && (0, zY.d)())
      }
      return bY
    }

    function qY(YY) {
      const rY = "number" === typeof YY ? Date.now() - YY : -1;
      return rY >= 0 && rY < fY
    }
    let pY = null;

    function kY() {
      return pY ??= (0, AY.getDeviceDefaultPixelScale)(), GY(pY)
    }

    function GY(YY) {
      const rY = FY.b.get("clientEscMenuOptions");
      return rY.pixelSmoothing && !(0, RY.e)("pixelScale") && rY.pixelScale === YY
    }
    let xY = null,
      nY = 0;

    function PY() {
      if (null === xY || nY !== hY()) {
        var YY;
        nY = hY();
        const rY = Number(null !== (YY = new URLSearchParams(window.location.search).get(jY)) && void 0 !== YY ? YY : ""),
          DY = dY();
        if (rY > 0 && rY <= 1) xY = (0, OY.F)(DY, DY[0] / rY);
        else {
          const YY = JY(),
            rY = (0, OY.F)(DY, (0, OY.G)(hY())),
            FY = !(0, zY.i)() && qY(null === YY || void 0 === YY ? void 0 : YY.heldAt) && (null === YY || void 0 === YY ? void 0 : YY.heldTarget) === hY() ? null === YY || void 0 === YY ? void 0 : YY.heldN : void 0;
          xY = "number" === typeof FY ? Math.min(rY, (0, OY.F)(DY, FY)) : rY
        }
      }
      return xY
    }

    function UY(YY, rY) {
      var DY;
      const FY = rY.indexOf(null !== (DY = YY.failedUpN) && void 0 !== DY ? DY : -1);
      return FY >= 0 && qY(YY.failedUpAt) ? {
        step: FY,
        untilMs: performance.now() + gY.d.stepUp.failWaitsMs[0]
      } : null
    }
    let LY = null,
      tY = !1,
      Yr = "";
    const rr = new Set;

    function Dr() {
      for (const YY of rr) YY()
    }

    function Fr() {
      return tY ? null : (ur(), null === LY ? (null !== pY || null !== (0, AY.peekGpuVendor)() ? kY() : GY(1)) ? PY() : null : kY() ? LY.currentStep() : null)
    }

    function Ar() {
      const YY = Fr();
      if (null === YY) return null;
      const rY = dY(),
        DY = rY[Math.min(YY, rY.length - 1)];
      return DY === Ir() ? null : DY
    }

    function Ir() {
      return (0, OY.y)(FY.b.get("clientEscMenuOptions").pixelScale, (0, OY.H)())
    }

    function Rr() {
      return null !== LY && null !== Ar()
    }

    function Or(YY) {
      return rr.add(YY), () => {
        rr.delete(YY)
      }
    }

    function gr(YY, rY, DY) {
      var FY;
      if (null !== LY || tY || (0, zY.i)()) return;
      const AY = (0, HY.c)(YY, rY, DY);
      null !== AY && (0, zY.k)(AY.vendor), Yr = `${YY}:${(null===AY||void 0===AY?void 0:AY.renderer)||(null===AY||void 0===AY?void 0:AY.vendor)||""}`, (null === (FY = JY()) || void 0 === FY ? void 0 : FY.gpu) !== Yr && (aY.m.setItem(CY, {
        gpu: Yr
      }), xY = null), vr(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var YY;
          null === (YY = LY) || void 0 === YY || YY.hidden()
        } catch (rY) {
          Vr(), console.error("The quality steps stopped", rY)
        }
      }))
    }
    let ar = 0;

    function vr() {
      var YY;
      const rY = null !== (YY = JY()) && void 0 !== YY ? YY : {
          gpu: Yr
        },
        DY = dY();
      ar = hY(), LY = new KY({
          changed: Dr,
          Mi: () => {
            sr({
              heldN: void 0
            })
          },
          ja: YY => {
            var rY;
            const DY = dY()[YY],
              FY = {
                heldN: DY,
                heldAt: Date.now(),
                heldTarget: hY()
              };
            (null === (rY = JY()) || void 0 === rY ? void 0 : rY.failedUpN) === DY && (FY.failedUpN = void 0), sr(FY)
          },
          upFailed: YY => {
            sr({
              failedUpN: dY()[YY],
              failedUpAt: Date.now()
            })
          },
          noGain: YY => {
            sr({
              noGain: null === YY ? void 0 : MY(YY)
            })
          }
        }, {
          lowest: DY.length - 1,
          startStep: PY(),
          noGain: wY(rY.noGain),
          upWait: UY(rY, DY)
        }),
        function(YY) {
          const rY = {
            get step() {
              return YY.currentStep()
            },
            get n() {
              var YY;
              return null !== (YY = Ar()) && void 0 !== YY ? YY : Ir()
            },
            get scale() {
              var YY;
              return dY()[0] / (null !== (YY = Ar()) && void 0 !== YY ? YY : Ir())
            },
            get msaaOff() {
              return XY()
            },
            log: YY.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: rY,
            configurable: !0
          })
        }(LY), Dr()
    }

    function ur() {
      null !== LY && hY() !== ar && (xY = null, vr())
    }

    function sr(YY) {
      aY.m.setItem(CY, {
        ...JY(),
        ...YY,
        gpu: Yr
      })
    }
    let ir = 0,
      yr = 0,
      Qr = 0,
      or = !1;

    function Wr() {
      ir++
    }

    function Er() {
      return ir
    }

    function mr(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ur(), null !== LY && (YY - Qr >= 1e3 && (or = ir - yr > gY.d.sceneChange.meshesPerSecond, yr = ir, Qr = YY), ZY.c.isHeld() ? LY.paused(YY) : LY.frame(YY, rY, DY && !document.hidden && kY(), or || FY > 0 || (0, IY.p)()))
    }

    function Vr() {
      if (!tY) {
        tY = !0, null !== LY && (LY = null, sr({
          noGain: void 0
        }));
        try {
          Dr()
        } catch (YY) {
          console.error("The quality steps' resize to the player's n failed", YY)
        }
      }
    }

    function Sr() {
      var YY;
      null === (YY = LY) || void 0 === YY || YY.resized(performance.now())
    }
  },
  8669: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(99),
      AY = DY(138);

    function IY(YY, rY, DY) {
      if ("webgpu" === YY) return DY ? ((0, FY.seedGpuVendor)(DY), {
        vendor: DY,
        renderer: ""
      }) : null;
      try {
        const DY = "webgl" === YY ? rY.getContext("webgl2") : rY.getContext("webgl"),
          IY = null === DY || void 0 === DY ? void 0 : DY.getExtension("WEBGL_debug_renderer_info");
        if (DY && IY) {
          const YY = String(DY.getParameter(IY.UNMASKED_VENDOR_WEBGL)),
            rY = String(DY.getParameter(IY.UNMASKED_RENDERER_WEBGL));
          return (0, FY.seedGpuVendor)(YY), (0, AY.z)(YY, rY), {
            vendor: YY,
            renderer: rY
          }
        }
        DY && (0, AY.z)(String(DY.getParameter(DY.VENDOR)), String(DY.getParameter(DY.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);