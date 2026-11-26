export const id = 212;
export const ids = [212];
export const modules = {
  34798: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => lU,
      f: () => WX,
      i: () => PX,
      k: () => LX,
      l: () => DX,
      m: () => YX,
      q: () => NX,
      r: () => pX,
      u: () => dX,
      w: () => IX
    });
    var cU = zU(281),
      yU = zU(27),
      QU = zU(97),
      AU = zU(1680),
      FU = zU(4848),
      oU = zU(3203),
      DU = zU(3212),
      EU = zU(42);
    const {
      windows: YU,
      target: NU,
      stepDown: IU,
      stepUp: pU,
      noGain: aU
    } = DU.b, tU = 1e3 / 60 * 1.08, gU = 1e3 / 55, kU = 1e3 / 45, GU = 1e3 / 30 * .92, BU = 1e3 / 30 * 1.08;
    class ZU {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(UU, XU) {
        const zU = UU - this.lastMs;
        this.lastMs = UU;
        const cU = function(UU) {
          if (UU <= 0 || UU > 100) return -1;
          if (UU <= tU) return 0;
          if (UU >= gU && UU <= kU) return 1;
          return UU >= GU && UU <= BU ? 2 : -1
        }(zU);
        0 === cU && 2 === this.runBand && XU && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), cU !== this.runBand && (this.runBand = cU, this.runLength = 0), cU < 0 || ++this.runLength < 3 || (0 === cU ? this.votes60++ : 1 === cU ? (this.votesMid++, this.sumMidMs += zU) : (this.votes30++, XU && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function RU(UU, XU, zU) {
      const {
        fast: cU,
        masked: yU,
        longFrame: QU,
        paced: AU
      } = UU;
      return !QU && (cU && !AU || XU) ? yU && !zU ? "hold" : "rise" : yU ? UU.dropping ? "break" : "hold" : (QU ? cU || XU : cU && !zU) ? "hold" : "break"
    }
    const PU = YU.windowMs,
      WU = YU.settleMs,
      dU = YU.graceMs,
      LU = YU.minIntervals,
      eU = 1e3 * LU / PU,
      CU = Math.floor(1e4 / PU),
      wU = aU.backoffMs,
      qU = aU.maxMs;
    class OU {
      constructor(UU, XU) {
        let {
          lowest: zU,
          startStep: cU = 0,
          noGain: yU = null,
          upWait: QU = null
        } = XU;
        this.hooks = UU, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new ZU, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = NU.maxFps, this.lowest = zU, this.step = Math.min(cU, zU), this.noGain = yU, this.climbing = this.step > 0;
        const AU = zU + 1;
        this.downUntilMs = new Array(AU).fill(0), this.downBackoffMs = new Array(AU).fill(0), this.noGainFps = new Array(AU).fill(0), this.noGainFps[0] = null === yU ? 0 : yU.fps, this.keptFps = new Array(AU).fill(0), this.lenientUpFps = new Array(AU).fill(0), this.lenientUpAtMs = new Array(AU).fill(0), this.upFailures = new Array(AU).fill(0), this.upUntilMs = new Array(AU).fill(0), null !== QU && QU.step >= 0 && QU.step < AU && (this.upUntilMs[QU.step] = QU.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(UU, zU && !cU), !zU) return void this.leave(UU);
        const yU = UU - this.lastFrameMs,
          QU = this.resizeStall(UU);
        if (yU > 2e3 && !QU && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = UU, this.quietUntilMs = Math.max(this.quietUntilMs, UU + dU), this.graceUntilMs = UU + dU, this.windowStartMs = -1, void(this.slowStartMs = -1);
        yU > 500 && (this.hitch(UU), QU && (this.slowStartMs = -1)), this.lastFrameMs = UU, UU >= this.quietUntilMs && this.countWindow(UU, XU, cU) || XU && UU >= this.graceUntilMs && this.countSlow(UU, cU)
      }
      countWindow(UU, XU, zU) {
        if (this.windowStartMs < 0) return !!XU && (this.windowStartMs = UU, this.lastDrawnMs = UU, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = zU, !1);
        if (this.windowMasked ||= zU, !XU) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, UU - this.lastDrawnMs), this.lastDrawnMs = UU;
        const cU = UU - this.windowStartMs;
        if (cU < PU) return !1;
        const yU = this.windowIntervals,
          QU = 1e3 * yU / cU,
          AU = this.windowHeld,
          FU = this.windowMaxIntervalMs,
          oU = this.windowMasked;
        if (this.windowStartMs = -1, yU < LU) return !1;
        this.slowStartMs = -1;
        const DU = this.targetFps();
        return this.decide(QU, 1, {
          fast: QU >= DU * NU.cleanShare,
          dropping: QU < DU * NU.dropShare,
          masked: oU,
          longFrame: FU > NU.cleanMaxIntervalMs,
          paced: AU > NU.maxHeldFrames && QU < .999 * DU
        }, UU), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(NU.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(UU, XU) {
        if (this.slowStartMs < 0) return this.slowStartMs = UU, this.slowIntervals = 0, void(this.slowMasked = XU);
        this.slowMasked ||= XU, this.slowIntervals++;
        const zU = UU - this.slowStartMs;
        if (zU < 1e4) return;
        const cU = 1e3 * this.slowIntervals / zU,
          yU = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(UU, XU), cU < eU && (this.windowStartMs = -1, this.decide(cU, CU, {
          fast: !1,
          dropping: !0,
          masked: yU,
          longFrame: !1,
          paced: !1
        }, UU))
      }
      resizeStall(UU) {
        return this.lastFrameMs - this.resizedMs <= WU && UU - this.lastFrameMs <= 15e3
      }
      paused(UU) {
        this.refresh.frame(UU, !1), UU - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, UU + dU), this.graceUntilMs = UU + dU), this.lastFrameMs = UU, this.slowStartMs = -1, this.hitch(UU)
      }
      resized(UU) {
        this.resizedMs = UU, this.hitch(UU)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(UU) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(UU))
      }
      hitch(UU) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, UU + WU)
      }
      left(UU) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const XU = this.phase;
        "watch" !== XU.kind && (this.phase = {
          kind: "watch"
        }, "down" === XU.kind && (this.downUntilMs[XU.from] = UU + wU, this.noGainFps[XU.from] = 0, 0 === XU.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, UU + wU)
        })), this.setStep(XU.from, 0, UU, "left"), "up" === XU.kind && (this.climbed = XU.fromClimbed))
      }
      decide(UU, XU, zU, cU) {
        const {
          dropping: yU,
          masked: QU
        } = zU;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: cU,
          step: this.step,
          fps: Math.round(10 * UU) / 10,
          windows: XU,
          masked: QU,
          dropping: yU
        });
        const AU = this.phase;
        switch (AU.kind) {
          case "watch": {
            const AU = !yU && this.keptAfterDip(this.step) && UU >= this.keptFps[this.step] * pU.recoverGain;
            return void this.watch(UU, XU, RU(zU, AU, !1), yU, QU, cU)
          }
          case "down": {
            if (AU.judged += XU, AU.fpsSum += UU * XU, AU.minFps = Math.min(AU.minFps, UU), QU || (AU.clean += XU, AU.cleanFpsSum += UU * XU, AU.cleanMinFps = Math.min(AU.cleanMinFps, UU)), AU.judged < IU.judgeWindows) return;
            const zU = AU.clean > 0 ? AU.cleanFpsSum / AU.clean : AU.fpsSum / AU.judged;
            if (zU >= AU.fromFps * IU.keepGain) {
              const UU = AU.clean > 0 ? AU.cleanMinFps : AU.minFps;
              this.keepDown(AU.from, AU.fromFps, zU, Math.min(UU, AU.fromFps * IU.keepGain), cU)
            } else this.noGainFrom(AU, zU, cU);
            return
          }
          case "up": {
            const XU = this.keptAfterDip(AU.from),
              FU = RU(zU, XU && !yU, !0);
            if ("hold" === FU && (AU.maskedHolds += QU ? 1 : 0, ++AU.holds <= pU.trialHoldWindows)) return;
            return "rise" !== FU ? (QU || "hold" === FU && AU.maskedHolds > 0 ? (this.watchAt(AU.from), this.setStep(AU.from, UU, cU, "spoiled")) : this.failUp(this.step, AU.from, UU, cU), void(this.climbed = AU.fromClimbed)) : (AU.fpsSum += UU, void(++AU.judged >= pU.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: AU.from,
              heldWindows: 0,
              below: AU.fromClimbed
            }, this.lenientUpFps[this.step] = XU ? AU.fpsSum / AU.judged : 0, this.lenientUpAtMs[this.step] = cU, this.record(cU, UU, "up_kept"))))
          }
        }
      }
      watch(UU, XU, zU, cU, yU, QU) {
        const AU = this.climbed;
        null !== AU && !cU && !yU && ++AU.heldWindows >= pU.heldWindows && (this.climbed = null, this.record(QU, UU, "uD"), this.hooks.uD(this.step)), cU ? (this.dropRun += XU, this.dropRunFpsSum += UU * XU, this.dropRunMasked ||= yU, yU || (this.dropRunClean += XU, this.dropRunCleanFpsSum += UU * XU)) : this.resetDropRun(), "hold" !== zU && (this.cleanRun = "rise" === zU ? this.cleanRun + 1 : 0);
        const FU = null !== this.climbed ? pU : IU;
        if (this.dropRun >= (this.dropRunMasked ? FU.maskedWindows : FU.dropWindows)) {
          const XU = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            zU = this.dropRunClean >= IU.dropWindows && XU < this.noGainFps[this.step] * aU.heavierShare;
          this.resetDropRun();
          const cU = this.climbed;
          return void(null !== cU ? (this.failUp(this.step, cU.from, UU, QU), this.climbed = cU.below) : this.step < this.lowest && (zU || this.waitOver(QU)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: XU,
            early: !this.waitOver(QU),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, XU, QU, "down")))
        }
        const oU = this.step - 1;
        oU >= 0 && this.cleanRun >= (this.climbing ? pU.climbWindows : pU.cleanWindows) && QU >= this.upUntilMs[oU] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed
        }, this.setStep(oU, UU, QU, "up"))
      }
      waitOver(UU) {
        return !(0 === this.step && null !== this.noGain && UU < this.noGain.untilMs) && UU >= this.downUntilMs[this.step]
      }
      keptAfterDip(UU) {
        return this.keptFps[UU] > 0
      }
      keepDown(UU, XU, zU, cU, yU) {
        this.watchAt(this.step), this.keptFps[this.step] = cU;
        const QU = this.lenientUpFps[UU];
        QU > 0 && yU - this.lenientUpAtMs[UU] < pU.lenientFailMs && XU * pU.recoverGain >= QU && this.failTrial(UU, yU), this.downBackoffMs[UU] = 0, this.noGainFps[UU] = 0, this.record(yU, zU, "down_kept"), 0 === UU && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.cY(this.step)
      }
      noGainFrom(UU, XU, zU) {
        var cU, yU;
        let {
          from: QU,
          fromFps: AU,
          early: FU
        } = UU;
        const oU = 0 === QU ? null !== (cU = null === (yU = this.noGain) || void 0 === yU ? void 0 : yU.backoffMs) && void 0 !== cU ? cU : 0 : this.downBackoffMs[QU],
          DU = 0 === oU ? wU : FU ? oU : Math.min(2 * oU, qU),
          EU = Math.max(AU, XU);
        this.downBackoffMs[QU] = DU, this.downUntilMs[QU] = zU + DU, this.noGainFps[QU] = EU, 0 === QU && (this.noGain = {
          untilMs: zU + DU,
          backoffMs: DU,
          fps: EU
        }, this.hooks.noGain(this.noGain)), this.watchAt(QU), this.setStep(QU, XU, zU, "no_gain")
      }
      failUp(UU, XU, zU, cU) {
        this.failTrial(UU, cU), this.watchAt(XU), this.setStep(XU, zU, cU, "up_failed")
      }
      failTrial(UU, XU) {
        this.climbing = !1, this.lenientUpFps[UU] = 0;
        const zU = pU.failWaitsMs;
        this.upUntilMs[UU] = XU + zU[Math.min(++this.upFailures[UU], zU.length) - 1], this.hooks.upFailed(UU)
      }
      watchAt(UU) {
        this.phase = {
          kind: "watch"
        }, this.climbed = UU === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(UU, XU, zU, cU) {
        const yU = UU !== this.step;
        yU && (this.climbed = null), this.step = UU, this.record(zU, XU, cU), yU && (this.slowStartMs = -1, this.resized(zU), this.hooks.changed(UU))
      }
      record(UU, XU, zU) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: UU,
          step: this.step,
          fps: Math.round(10 * XU) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: zU
        })
      }
    }
    var SU = zU(34807),
      rU = zU(3217),
      uU = zU(34809);
    const fU = "autoGraphics",
      iU = 6048e5,
      HU = "startScale";

    function MU() {
      return (0, oU.K)(yU.e.get("clientEscMenuOptions").pixelScale) * (0, oU.G)()
    }

    function vU() {
      return (0, oU.p)(MU())
    }

    function VU() {
      const UU = EU.k.getItem(fU);
      return "object" !== typeof UU || null === UU || "string" !== typeof UU.gpu ? null : UU
    }

    function sU(UU) {
      return {
        untilEpochMs: Date.now() + (UU.untilMs - performance.now()),
        backoffMs: UU.backoffMs,
        fps: UU.fps
      }
    }

    function nU(UU) {
      return void 0 === UU || "number" !== typeof UU.fps ? null : {
        untilMs: performance.now() + (UU.untilEpochMs - Date.now()),
        backoffMs: UU.backoffMs,
        fps: UU.fps
      }
    }
    let mU = null;

    function lU() {
      if (null === mU) {
        const UU = new URLSearchParams(window.location.search).get("msaa");
        mU = yU.e.get("clientEscMenuOptions").antiAliasing && ("0" === UU || "1" !== UU && !(0, FU.d)("antiAliasing") && (0, rU.f)())
      }
      return mU
    }

    function xU(UU) {
      const XU = "number" === typeof UU ? Date.now() - UU : -1;
      return XU >= 0 && XU < iU
    }
    let JU = null;

    function jU() {
      return JU ??= (0, QU.getDeviceDefaultPixelScale)(), KU(JU)
    }

    function KU(UU) {
      const XU = yU.e.get("clientEscMenuOptions");
      return XU.pixelSmoothing && !(0, FU.d)("pixelScale") && XU.pixelScale === UU
    }
    let bU = null,
      TU = 0;

    function hU() {
      if (null === bU || TU !== MU()) {
        var UU;
        TU = MU();
        const XU = Number(null !== (UU = new URLSearchParams(window.location.search).get(HU)) && void 0 !== UU ? UU : ""),
          zU = vU();
        if (XU > 0 && XU <= 1) bU = (0, oU.B)(zU, zU[0] / XU);
        else {
          const UU = VU(),
            XU = UX(zU, MU()),
            cU = !(0, rU.k)() && xU(null === UU || void 0 === UU ? void 0 : UU.heldAt) && (null === UU || void 0 === UU ? void 0 : UU.heldTarget) === MU() ? null === UU || void 0 === UU ? void 0 : UU.heldN : void 0;
          bU = "number" === typeof cU ? Math.min(XU, (0, oU.B)(zU, cU)) : XU
        }
      }
      return bU
    }

    function UX(UU, XU) {
      return (0, oU.B)(UU, (0, oU.E)(XU))
    }

    function XX(UU, XU, zU) {
      const cU = UU.length - 1;
      return (0, QU.isMobile)() ? Math.min(cU, Math.max(zU, UX(UU, XU) + DU.b.pixels.mobileRungsBelowStart)) : cU
    }

    function zX(UU, XU) {
      var zU;
      const cU = XU.indexOf(null !== (zU = UU.failedUpN) && void 0 !== zU ? zU : -1);
      return cU >= 0 && xU(UU.failedUpAt) ? {
        step: cU,
        untilMs: performance.now() + DU.b.stepUp.failWaitsMs[0]
      } : null
    }
    let cX = null,
      yX = !1,
      QX = "";
    const AX = new Set;

    function FX() {
      for (const UU of AX) UU()
    }

    function oX() {
      return yX ? null : (gX(), null === cX ? (null !== JU || null !== (0, QU.peekGpuVendor)() ? jU() : KU(1)) ? hU() : null : jU() ? cX.currentStep() : null)
    }

    function DX() {
      const UU = oX();
      if (null === UU) return null;
      const XU = vU(),
        zU = XU[Math.min(UU, XU.length - 1)];
      return zU === EX() ? null : zU
    }

    function EX() {
      return (0, oU.w)(yU.e.get("clientEscMenuOptions").pixelScale, (0, oU.G)())
    }

    function YX() {
      return null !== cX && null !== DX()
    }

    function NX() {
      if (null === cX) return !1;
      const UU = DX();
      return null !== UU && UU > EX()
    }

    function IX(UU) {
      return AX.add(UU), () => {
        AX.delete(UU)
      }
    }

    function pX(UU, XU, zU) {
      var yU;
      if (null !== cX || yX || (0, rU.k)()) return;
      const QU = (0, SU.c)(UU, XU, zU);
      null !== QU && ((0, rU.o)(QU.vendor), "" !== QU.renderer && (0, cU.n)(QU.vendor, QU.renderer)), QX = `${UU}:${(null===QU||void 0===QU?void 0:QU.renderer)||(null===QU||void 0===QU?void 0:QU.vendor)||""}`, (null === (yU = VU()) || void 0 === yU ? void 0 : yU.gpu) !== QX && (EU.k.setItem(fU, {
        gpu: QX
      }), bU = null), tX(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var UU;
          null === (UU = cX) || void 0 === UU || UU.hidden()
        } catch (XU) {
          dX(), console.error("The quality steps stopped", XU)
        }
      }))
    }
    let aX = 0;

    function tX() {
      var UU;
      const XU = null !== (UU = VU()) && void 0 !== UU ? UU : {
          gpu: QX
        },
        zU = vU();
      aX = MU();
      const cU = hU();
      cX = new OU({
          changed: FX,
          cY: () => {
            kX({
              heldN: void 0
            })
          },
          uD: UU => {
            var XU;
            const zU = vU()[UU],
              cU = {
                heldN: zU,
                heldAt: Date.now(),
                heldTarget: MU()
              };
            (null === (XU = VU()) || void 0 === XU ? void 0 : XU.failedUpN) === zU && (cU.failedUpN = void 0), kX(cU)
          },
          upFailed: UU => {
            kX({
              failedUpN: vU()[UU],
              failedUpAt: Date.now()
            })
          },
          noGain: UU => {
            kX({
              noGain: null === UU ? void 0 : sU(UU)
            })
          }
        }, {
          lowest: XX(zU, aX, cU),
          startStep: cU,
          noGain: nU(XU.noGain),
          upWait: zX(XU, zU)
        }),
        function(UU) {
          const XU = {
            get step() {
              return UU.currentStep()
            },
            get n() {
              var UU;
              return null !== (UU = DX()) && void 0 !== UU ? UU : EX()
            },
            get scale() {
              var UU;
              return vU()[0] / (null !== (UU = DX()) && void 0 !== UU ? UU : EX())
            },
            get msaaOff() {
              return lU()
            },
            log: UU.log,
            windows: UU.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: XU,
            configurable: !0
          })
        }(cX), FX()
    }

    function gX() {
      null !== cX && MU() !== aX && (bU = null, tX())
    }

    function kX(UU) {
      EU.k.setItem(fU, {
        ...VU(),
        ...UU,
        gpu: QX
      })
    }
    let GX = 0,
      BX = 0,
      ZX = 0,
      RX = !1;

    function PX() {
      GX++
    }

    function WX(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      gX(), null !== cX && (UU - ZX >= 1e3 && (RX = GX - BX > DU.b.sceneChange.meshesPerSecond, BX = GX, ZX = UU), uU.c.isHeld() ? cX.paused(UU) : cX.frame(UU, XU, zU && !document.hidden && jU(), RX || cU > 0 || (0, AU.p)()))
    }

    function dX() {
      if (!yX) {
        yX = !0, null !== cX && (cX = null, kX({
          noGain: void 0
        }));
        try {
          FX()
        } catch (UU) {
          console.error("The quality steps' resize to the player's n failed", UU)
        }
      }
    }

    function LX() {
      var UU;
      null === (UU = cX) || void 0 === UU || UU.resized(performance.now())
    }
  },
  34807: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(97),
      yU = zU(134);

    function QU(UU, XU, zU) {
      if ("webgpu" === UU) return zU ? ((0, cU.seedGpuVendor)(zU), {
        vendor: zU,
        renderer: ""
      }) : null;
      try {
        const zU = "webgl" === UU ? XU.getContext("webgl2") : XU.getContext("webgl");
        "webgl" === UU && zU && (0, yU.C)(zU);
        const QU = null === zU || void 0 === zU ? void 0 : zU.getExtension("WEBGL_debug_renderer_info");
        if (zU && QU) {
          const UU = String(zU.getParameter(QU.UNMASKED_VENDOR_WEBGL)),
            XU = String(zU.getParameter(QU.UNMASKED_RENDERER_WEBGL));
          return (0, cU.seedGpuVendor)(UU), (0, yU.H)(UU, XU), {
            vendor: UU,
            renderer: XU
          }
        }
        zU && (0, yU.H)(String(zU.getParameter(zU.VENDOR)), String(zU.getParameter(zU.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);