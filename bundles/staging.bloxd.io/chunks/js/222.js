export const id = 222;
export const ids = [222];
export const modules = {
  35247: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => KV,
      d: () => Pe,
      h: () => Te,
      l: () => Ne,
      m: () => ne,
      n: () => Ze,
      o: () => re,
      s: () => Ae,
      v: () => ve
    });
    var JV = xV(296),
      YV = xV(27),
      UV = xV(99),
      yV = xV(1725),
      pV = xV(4895),
      QV = xV(3239),
      nV = xV(3242),
      wV = xV(40);
    const {
      windows: ZV,
      target: vV,
      stepDown: rV,
      stepUp: kV,
      noGain: bV
    } = nV.d, EV = 1e3 / 60 * 1.08, BV = 1e3 / 55, jV = 1e3 / 45, qV = 1e3 / 30 * .92, tV = 1e3 / 30 * 1.08;
    class FV {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(VV, eV) {
        const xV = VV - this.lastMs;
        this.lastMs = VV;
        const JV = function(VV) {
          if (VV <= 0 || VV > 100) return -1;
          if (VV <= EV) return 0;
          if (VV >= BV && VV <= jV) return 1;
          return VV >= qV && VV <= tV ? 2 : -1
        }(xV);
        0 === JV && 2 === this.runBand && eV && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), JV !== this.runBand && (this.runBand = JV, this.runLength = 0), JV < 0 || ++this.runLength < 3 || (0 === JV ? this.votes60++ : 1 === JV ? (this.votesMid++, this.sumMidMs += xV) : (this.votes30++, eV && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function TV(VV, eV, xV) {
      const {
        fast: JV,
        masked: YV,
        longFrame: UV,
        paced: yV
      } = VV;
      return !UV && (JV && !yV || eV) ? YV && !xV ? "hold" : "rise" : YV ? VV.dropping ? "break" : "hold" : (UV ? JV || eV : JV && !xV) ? "hold" : "break"
    }
    const PV = ZV.windowMs,
      AV = ZV.settleMs,
      NV = ZV.graceMs,
      XV = ZV.minIntervals,
      MV = 1e3 * XV / PV,
      zV = Math.floor(1e4 / PV),
      GV = bV.backoffMs,
      WV = bV.maxMs;
    class RV {
      constructor(VV, eV) {
        let {
          lowest: xV,
          startStep: JV = 0,
          noGain: YV = null,
          upWait: UV = null
        } = eV;
        this.hooks = VV, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new FV, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = vV.maxFps, this.lowest = xV, this.step = Math.min(JV, xV), this.noGain = YV, this.climbing = this.step > 0;
        const yV = xV + 1;
        this.downUntilMs = new Array(yV).fill(0), this.downBackoffMs = new Array(yV).fill(0), this.noGainFps = new Array(yV).fill(0), this.noGainFps[0] = null === YV ? 0 : YV.fps, this.keptFps = new Array(yV).fill(0), this.lenientUpFps = new Array(yV).fill(0), this.lenientUpAtMs = new Array(yV).fill(0), this.upFailures = new Array(yV).fill(0), this.upUntilMs = new Array(yV).fill(0), null !== UV && UV.step >= 0 && UV.step < yV && (this.upUntilMs[UV.step] = UV.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(VV, xV && !JV), !xV) return void this.leave(VV);
        const YV = VV - this.lastFrameMs,
          UV = this.resizeStall(VV);
        if (YV > 2e3 && !UV && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = VV, this.quietUntilMs = Math.max(this.quietUntilMs, VV + NV), this.graceUntilMs = VV + NV, this.windowStartMs = -1, void(this.slowStartMs = -1);
        YV > 500 && (this.hitch(VV), UV && (this.slowStartMs = -1)), this.lastFrameMs = VV, VV >= this.quietUntilMs && this.countWindow(VV, eV, JV) || eV && VV >= this.graceUntilMs && this.countSlow(VV, JV)
      }
      countWindow(VV, eV, xV) {
        if (this.windowStartMs < 0) return !!eV && (this.windowStartMs = VV, this.lastDrawnMs = VV, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = xV, !1);
        if (this.windowMasked ||= xV, !eV) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, VV - this.lastDrawnMs), this.lastDrawnMs = VV;
        const JV = VV - this.windowStartMs;
        if (JV < PV) return !1;
        const YV = this.windowIntervals,
          UV = 1e3 * YV / JV,
          yV = this.windowHeld,
          pV = this.windowMaxIntervalMs,
          QV = this.windowMasked;
        if (this.windowStartMs = -1, YV < XV) return !1;
        this.slowStartMs = -1;
        const nV = this.targetFps();
        return this.decide(UV, 1, {
          fast: UV >= nV * vV.cleanShare,
          dropping: UV < nV * vV.dropShare,
          masked: QV,
          longFrame: pV > vV.cleanMaxIntervalMs,
          paced: yV > vV.maxHeldFrames && UV < .999 * nV
        }, VV), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(vV.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(VV, eV) {
        if (this.slowStartMs < 0) return this.slowStartMs = VV, this.slowIntervals = 0, void(this.slowMasked = eV);
        this.slowMasked ||= eV, this.slowIntervals++;
        const xV = VV - this.slowStartMs;
        if (xV < 1e4) return;
        const JV = 1e3 * this.slowIntervals / xV,
          YV = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(VV, eV), JV < MV && (this.windowStartMs = -1, this.decide(JV, zV, {
          fast: !1,
          dropping: !0,
          masked: YV,
          longFrame: !1,
          paced: !1
        }, VV))
      }
      resizeStall(VV) {
        return this.lastFrameMs - this.resizedMs <= AV && VV - this.lastFrameMs <= 15e3
      }
      paused(VV) {
        this.refresh.frame(VV, !1), VV - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, VV + NV), this.graceUntilMs = VV + NV), this.lastFrameMs = VV, this.slowStartMs = -1, this.hitch(VV)
      }
      resized(VV) {
        this.resizedMs = VV, this.hitch(VV)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(VV) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(VV))
      }
      hitch(VV) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, VV + AV)
      }
      left(VV) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const eV = this.phase;
        "watch" !== eV.kind && (this.phase = {
          kind: "watch"
        }, "down" === eV.kind && (this.downUntilMs[eV.from] = VV + GV, this.noGainFps[eV.from] = 0, 0 === eV.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, VV + GV)
        })), this.setStep(eV.from, 0, VV, "left"), "up" === eV.kind && (this.climbed = eV.fromClimbed))
      }
      decide(VV, eV, xV, JV) {
        const {
          dropping: YV,
          masked: UV
        } = xV;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: JV,
          step: this.step,
          fps: Math.round(10 * VV) / 10,
          windows: eV,
          masked: UV,
          dropping: YV
        });
        const yV = this.phase;
        switch (yV.kind) {
          case "watch": {
            const yV = !YV && this.keptAfterDip(this.step) && VV >= this.keptFps[this.step] * kV.recoverGain;
            return void this.watch(VV, eV, TV(xV, yV, !1), YV, UV, JV)
          }
          case "down": {
            if (yV.judged += eV, yV.fpsSum += VV * eV, yV.minFps = Math.min(yV.minFps, VV), UV || (yV.clean += eV, yV.cleanFpsSum += VV * eV, yV.cleanMinFps = Math.min(yV.cleanMinFps, VV)), yV.judged < rV.judgeWindows) return;
            const xV = yV.clean > 0 ? yV.cleanFpsSum / yV.clean : yV.fpsSum / yV.judged;
            if (xV >= yV.fromFps * rV.keepGain) {
              const VV = yV.clean > 0 ? yV.cleanMinFps : yV.minFps;
              this.keepDown(yV.from, yV.fromFps, xV, Math.min(VV, yV.fromFps * rV.keepGain), JV)
            } else this.noGainFrom(yV, xV, JV);
            return
          }
          case "up": {
            const eV = this.keptAfterDip(yV.from),
              pV = TV(xV, eV && !YV, !0);
            if ("hold" === pV && (yV.maskedHolds += UV ? 1 : 0, ++yV.holds <= kV.trialHoldWindows)) return;
            return "rise" !== pV ? (UV || "hold" === pV && yV.maskedHolds > 0 ? (this.watchAt(yV.from), this.setStep(yV.from, VV, JV, "spoiled")) : this.failUp(this.step, yV.from, VV, JV), void(this.climbed = yV.fromClimbed)) : (yV.fpsSum += VV, void(++yV.judged >= kV.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: yV.from,
              heldWindows: 0,
              below: yV.fromClimbed
            }, this.lenientUpFps[this.step] = eV ? yV.fpsSum / yV.judged : 0, this.lenientUpAtMs[this.step] = JV, this.record(JV, VV, "up_kept"))))
          }
        }
      }
      watch(VV, eV, xV, JV, YV, UV) {
        const yV = this.climbed;
        null !== yV && !JV && !YV && ++yV.heldWindows >= kV.heldWindows && (this.climbed = null, this.record(UV, VV, "hn"), this.hooks.hn(this.step)), JV ? (this.dropRun += eV, this.dropRunFpsSum += VV * eV, this.dropRunMasked ||= YV, YV || (this.dropRunClean += eV, this.dropRunCleanFpsSum += VV * eV)) : this.resetDropRun(), "hold" !== xV && (this.cleanRun = "rise" === xV ? this.cleanRun + 1 : 0);
        const pV = null !== this.climbed ? kV : rV;
        if (this.dropRun >= (this.dropRunMasked ? pV.maskedWindows : pV.dropWindows)) {
          const eV = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            xV = this.dropRunClean >= rV.dropWindows && eV < this.noGainFps[this.step] * bV.heavierShare;
          this.resetDropRun();
          const JV = this.climbed;
          return void(null !== JV ? (this.failUp(this.step, JV.from, VV, UV), this.climbed = JV.below) : this.step < this.lowest && (xV || this.waitOver(UV)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: eV,
            early: !this.waitOver(UV),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, eV, UV, "down")))
        }
        const QV = this.step - 1;
        QV >= 0 && this.cleanRun >= (this.climbing ? kV.climbWindows : kV.cleanWindows) && UV >= this.upUntilMs[QV] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed
        }, this.setStep(QV, VV, UV, "up"))
      }
      waitOver(VV) {
        return !(0 === this.step && null !== this.noGain && VV < this.noGain.untilMs) && VV >= this.downUntilMs[this.step]
      }
      keptAfterDip(VV) {
        return this.keptFps[VV] > 0
      }
      keepDown(VV, eV, xV, JV, YV) {
        this.watchAt(this.step), this.keptFps[this.step] = JV;
        const UV = this.lenientUpFps[VV];
        UV > 0 && YV - this.lenientUpAtMs[VV] < kV.lenientFailMs && eV * kV.recoverGain >= UV && this.failTrial(VV, YV), this.downBackoffMs[VV] = 0, this.noGainFps[VV] = 0, this.record(YV, xV, "down_kept"), 0 === VV && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.ZZ(this.step)
      }
      noGainFrom(VV, eV, xV) {
        var JV, YV;
        let {
          from: UV,
          fromFps: yV,
          early: pV
        } = VV;
        const QV = 0 === UV ? null !== (JV = null === (YV = this.noGain) || void 0 === YV ? void 0 : YV.backoffMs) && void 0 !== JV ? JV : 0 : this.downBackoffMs[UV],
          nV = 0 === QV ? GV : pV ? QV : Math.min(2 * QV, WV),
          wV = Math.max(yV, eV);
        this.downBackoffMs[UV] = nV, this.downUntilMs[UV] = xV + nV, this.noGainFps[UV] = wV, 0 === UV && (this.noGain = {
          untilMs: xV + nV,
          backoffMs: nV,
          fps: wV
        }, this.hooks.noGain(this.noGain)), this.watchAt(UV), this.setStep(UV, eV, xV, "no_gain")
      }
      failUp(VV, eV, xV, JV) {
        this.failTrial(VV, JV), this.watchAt(eV), this.setStep(eV, xV, JV, "up_failed")
      }
      failTrial(VV, eV) {
        this.climbing = !1, this.lenientUpFps[VV] = 0;
        const xV = kV.failWaitsMs;
        this.upUntilMs[VV] = eV + xV[Math.min(++this.upFailures[VV], xV.length) - 1], this.hooks.upFailed(VV)
      }
      watchAt(VV) {
        this.phase = {
          kind: "watch"
        }, this.climbed = VV === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(VV, eV, xV, JV) {
        const YV = VV !== this.step;
        YV && (this.climbed = null), this.step = VV, this.record(xV, eV, JV), YV && (this.slowStartMs = -1, this.resized(xV), this.hooks.changed(VV))
      }
      record(VV, eV, xV) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: VV,
          step: this.step,
          fps: Math.round(10 * eV) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: xV
        })
      }
    }
    var gV = xV(35249),
      DV = xV(3535),
      iV = xV(35251);
    const CV = "autoGraphics",
      aV = 6048e5,
      oV = "startScale";

    function cV() {
      return (0, QV.N)(YV.b.get("clientEscMenuOptions").pixelScale) * (0, QV.K)()
    }

    function hV() {
      return (0, QV.w)(cV())
    }

    function lV() {
      const VV = wV.m.getItem(CV);
      return "object" !== typeof VV || null === VV || "string" !== typeof VV.gpu ? null : VV
    }

    function LV(VV) {
      return {
        untilEpochMs: Date.now() + (VV.untilMs - performance.now()),
        backoffMs: VV.backoffMs,
        fps: VV.fps
      }
    }

    function fV(VV) {
      return void 0 === VV || "number" !== typeof VV.fps ? null : {
        untilMs: performance.now() + (VV.untilEpochMs - Date.now()),
        backoffMs: VV.backoffMs,
        fps: VV.fps
      }
    }
    let mV = null;

    function KV() {
      if (null === mV) {
        const VV = new URLSearchParams(window.location.search).get("msaa");
        mV = YV.b.get("clientEscMenuOptions").antiAliasing && ("0" === VV || "1" !== VV && !(0, pV.e)("antiAliasing") && (0, DV.h)())
      }
      return mV
    }

    function HV(VV) {
      const eV = "number" === typeof VV ? Date.now() - VV : -1;
      return eV >= 0 && eV < aV
    }
    let uV = null;

    function sV() {
      return uV ??= (0, UV.getDeviceDefaultPixelScale)(), SV(uV)
    }

    function SV(VV) {
      const eV = YV.b.get("clientEscMenuOptions");
      return eV.pixelSmoothing && !(0, pV.e)("pixelScale") && eV.pixelScale === VV
    }
    let IV = null,
      dV = 0;

    function OV() {
      if (null === IV || dV !== cV()) {
        var VV;
        dV = cV();
        const eV = Number(null !== (VV = new URLSearchParams(window.location.search).get(oV)) && void 0 !== VV ? VV : ""),
          xV = hV();
        if (eV > 0 && eV <= 1) IV = (0, QV.F)(xV, xV[0] / eV);
        else {
          const VV = lV(),
            eV = Ve(xV, cV()),
            JV = !(0, DV.n)() && HV(null === VV || void 0 === VV ? void 0 : VV.heldAt) && (null === VV || void 0 === VV ? void 0 : VV.heldTarget) === cV() ? null === VV || void 0 === VV ? void 0 : VV.heldN : void 0;
          IV = "number" === typeof JV ? Math.min(eV, (0, QV.F)(xV, JV)) : eV
        }
      }
      return IV
    }

    function Ve(VV, eV) {
      return (0, QV.F)(VV, (0, QV.I)(eV))
    }

    function ee(VV, eV, xV) {
      const JV = VV.length - 1;
      return (0, UV.isMobile)() ? Math.min(JV, Math.max(xV, Ve(VV, eV) + nV.d.pixels.mobileRungsBelowStart)) : JV
    }

    function xe(VV, eV) {
      var xV;
      const JV = eV.indexOf(null !== (xV = VV.failedUpN) && void 0 !== xV ? xV : -1);
      return JV >= 0 && HV(VV.failedUpAt) ? {
        step: JV,
        untilMs: performance.now() + nV.d.stepUp.failWaitsMs[0]
      } : null
    }
    let Je = null,
      Ye = !1,
      Ue = "";
    const ye = new Set;

    function pe() {
      for (const VV of ye) VV()
    }

    function Qe() {
      return Ye ? null : (Ee(), null === Je ? (null !== uV || null !== (0, UV.peekGpuVendor)() ? sV() : SV(1)) ? OV() : null : sV() ? Je.currentStep() : null)
    }

    function ne() {
      const VV = Qe();
      if (null === VV) return null;
      const eV = hV(),
        xV = eV[Math.min(VV, eV.length - 1)];
      return xV === we() ? null : xV
    }

    function we() {
      return (0, QV.A)(YV.b.get("clientEscMenuOptions").pixelScale, (0, QV.K)())
    }

    function Ze() {
      return null !== Je && null !== ne()
    }

    function ve(VV) {
      return ye.add(VV), () => {
        ye.delete(VV)
      }
    }

    function re(VV, eV, xV) {
      var YV;
      if (null !== Je || Ye || (0, DV.n)()) return;
      const UV = (0, gV.c)(VV, eV, xV);
      null !== UV && ((0, DV.p)(UV.vendor), "" !== UV.renderer && (0, JV.o)(UV.vendor, UV.renderer)), Ue = `${VV}:${(null===UV||void 0===UV?void 0:UV.renderer)||(null===UV||void 0===UV?void 0:UV.vendor)||""}`, (null === (YV = lV()) || void 0 === YV ? void 0 : YV.gpu) !== Ue && (wV.m.setItem(CV, {
        gpu: Ue
      }), IV = null), be(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var VV;
          null === (VV = Je) || void 0 === VV || VV.hidden()
        } catch (eV) {
          Ae(), console.error("The quality steps stopped", eV)
        }
      }))
    }
    let ke = 0;

    function be() {
      var VV;
      const eV = null !== (VV = lV()) && void 0 !== VV ? VV : {
          gpu: Ue
        },
        xV = hV();
      ke = cV();
      const JV = OV();
      Je = new RV({
          changed: pe,
          ZZ: () => {
            Be({
              heldN: void 0
            })
          },
          hn: VV => {
            var eV;
            const xV = hV()[VV],
              JV = {
                heldN: xV,
                heldAt: Date.now(),
                heldTarget: cV()
              };
            (null === (eV = lV()) || void 0 === eV ? void 0 : eV.failedUpN) === xV && (JV.failedUpN = void 0), Be(JV)
          },
          upFailed: VV => {
            Be({
              failedUpN: hV()[VV],
              failedUpAt: Date.now()
            })
          },
          noGain: VV => {
            Be({
              noGain: null === VV ? void 0 : LV(VV)
            })
          }
        }, {
          lowest: ee(xV, ke, JV),
          startStep: JV,
          noGain: fV(eV.noGain),
          upWait: xe(eV, xV)
        }),
        function(VV) {
          const eV = {
            get step() {
              return VV.currentStep()
            },
            get n() {
              var VV;
              return null !== (VV = ne()) && void 0 !== VV ? VV : we()
            },
            get scale() {
              var VV;
              return hV()[0] / (null !== (VV = ne()) && void 0 !== VV ? VV : we())
            },
            get msaaOff() {
              return KV()
            },
            log: VV.log,
            windows: VV.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: eV,
            configurable: !0
          })
        }(Je), pe()
    }

    function Ee() {
      null !== Je && cV() !== ke && (IV = null, be())
    }

    function Be(VV) {
      wV.m.setItem(CV, {
        ...lV(),
        ...VV,
        gpu: Ue
      })
    }
    let je = 0,
      qe = 0,
      te = 0,
      Fe = !1;

    function Te() {
      je++
    }

    function Pe(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Ee(), null !== Je && (VV - te >= 1e3 && (Fe = je - qe > nV.d.sceneChange.meshesPerSecond, qe = je, te = VV), iV.e.isHeld() ? Je.paused(VV) : Je.frame(VV, eV, xV && !document.hidden && sV(), Fe || JV > 0 || (0, yV.n)()))
    }

    function Ae() {
      if (!Ye) {
        Ye = !0, null !== Je && (Je = null, Be({
          noGain: void 0
        }));
        try {
          pe()
        } catch (VV) {
          console.error("The quality steps' resize to the player's n failed", VV)
        }
      }
    }

    function Ne() {
      var VV;
      null === (VV = Je) || void 0 === VV || VV.resized(performance.now())
    }
  },
  35249: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(99),
      YV = xV(134);

    function UV(VV, eV, xV) {
      if ("webgpu" === VV) return xV ? ((0, JV.seedGpuVendor)(xV), {
        vendor: xV,
        renderer: ""
      }) : null;
      try {
        const xV = "webgl" === VV ? eV.getContext("webgl2") : eV.getContext("webgl");
        "webgl" === VV && xV && (0, YV.E)(xV);
        const UV = null === xV || void 0 === xV ? void 0 : xV.getExtension("WEBGL_debug_renderer_info");
        if (xV && UV) {
          const VV = String(xV.getParameter(UV.UNMASKED_VENDOR_WEBGL)),
            eV = String(xV.getParameter(UV.UNMASKED_RENDERER_WEBGL));
          return (0, JV.seedGpuVendor)(VV), (0, YV.J)(VV, eV), {
            vendor: VV,
            renderer: eV
          }
        }
        xV && (0, YV.J)(String(xV.getParameter(xV.VENDOR)), String(xV.getParameter(xV.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);