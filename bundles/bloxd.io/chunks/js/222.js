export const id = 222;
export const ids = [222];
export const modules = {
  35159: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => FW,
      e: () => oi,
      h: () => ui,
      k: () => ei,
      m: () => bi,
      q: () => Ui,
      t: () => ki,
      w: () => Mi,
      y: () => di,
      C: () => si
    });
    var mW = OW(248),
      EW = OW(25),
      NW = OW(100),
      PW = OW(1729),
      LW = OW(5129),
      cW = OW(3941),
      wW = OW(3947),
      tW = OW(39);
    const {
      windows: ZW,
      target: xW,
      stepDown: lW,
      stepUp: AW,
      noGain: bW,
      probe: jW
    } = wW.c, UW = 1e3 / 60 * 1.08, kW = 1e3 / 55, sW = 1e3 / 45, MW = 1e3 / 30 * .92, KW = 1e3 / 30 * 1.08;
    class SW {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(WW, iW) {
        const OW = WW - this.lastMs;
        this.lastMs = WW;
        const mW = function(WW) {
          if (WW <= 0 || WW > 100) return -1;
          if (WW <= UW) return 0;
          if (WW >= kW && WW <= sW) return 1;
          return WW >= MW && WW <= KW ? 2 : -1
        }(OW);
        0 === mW && 2 === this.runBand && iW && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), mW !== this.runBand && (this.runBand = mW, this.runLength = 0), mW < 0 || ++this.runLength < 3 || (0 === mW ? this.votes60++ : 1 === mW ? (this.votesMid++, this.sumMidMs += OW) : (this.votes30++, iW && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function YW(WW, iW, OW) {
      const {
        fast: mW,
        masked: EW,
        longFrame: NW,
        paced: PW
      } = WW;
      return !NW && (mW && !PW || iW) ? EW && !OW ? "hold" : "rise" : EW ? WW.dropping ? "break" : "hold" : (NW ? mW || iW : mW && !OW) ? "hold" : "break"
    }
    const yW = ZW.windowMs,
      TW = ZW.settleMs,
      JW = ZW.graceMs,
      hW = ZW.minIntervals,
      HW = 1e3 * hW / yW,
      nW = Math.floor(1e4 / yW),
      uW = bW.backoffMs,
      oW = bW.maxMs;
    class dW {
      constructor(WW, iW) {
        let {
          lowest: OW,
          startStep: mW = 0,
          noGain: EW = null,
          upWait: NW = null,
          probeShare: PW = 0
        } = iW;
        this.hooks = WW, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.probeFailures = void 0, this.probeUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.probeShare = void 0, this.probeQuiet = 0, this.baseFps = new Float64Array(jW.baseWindows), this.baseCount = 0, this.baseNext = 0, this.refresh = new SW, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = xW.maxFps, this.lowest = OW, this.probeShare = PW, this.step = Math.min(mW, OW), this.noGain = EW, this.climbing = this.step > 0;
        const LW = OW + 1;
        this.downUntilMs = new Array(LW).fill(0), this.downBackoffMs = new Array(LW).fill(0), this.noGainFps = new Array(LW).fill(0), this.noGainFps[0] = null === EW ? 0 : EW.fps, this.keptFps = new Array(LW).fill(0), this.lenientUpFps = new Array(LW).fill(0), this.lenientUpAtMs = new Array(LW).fill(0), this.upFailures = new Array(LW).fill(0), this.upUntilMs = new Array(LW).fill(0), this.probeFailures = new Array(LW).fill(0), this.probeUntilMs = new Array(LW).fill(0), null !== NW && NW.step >= 0 && NW.step < LW && (this.upUntilMs[NW.step] = NW.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(WW, OW && !mW), !OW) return void this.leave(WW);
        const EW = WW - this.lastFrameMs,
          NW = this.resizeStall(WW);
        if (EW > 2e3 && !NW && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = WW, this.quietUntilMs = Math.max(this.quietUntilMs, WW + JW), this.graceUntilMs = WW + JW, this.windowStartMs = -1, void(this.slowStartMs = -1);
        EW > 500 && (this.hitch(WW), NW && (this.slowStartMs = -1)), this.lastFrameMs = WW, WW >= this.quietUntilMs && this.countWindow(WW, iW, mW) || iW && WW >= this.graceUntilMs && this.countSlow(WW, mW)
      }
      countWindow(WW, iW, OW) {
        if (this.windowStartMs < 0) return !!iW && (this.windowStartMs = WW, this.lastDrawnMs = WW, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = OW, !1);
        if (this.windowMasked ||= OW, !iW) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, WW - this.lastDrawnMs), this.lastDrawnMs = WW;
        const mW = WW - this.windowStartMs;
        if (mW < yW) return !1;
        const EW = this.windowIntervals,
          NW = 1e3 * EW / mW,
          PW = this.windowHeld,
          LW = this.windowMaxIntervalMs,
          cW = this.windowMasked;
        if (this.windowStartMs = -1, EW < hW) return !1;
        this.slowStartMs = -1;
        const wW = this.targetFps();
        return this.decide(NW, 1, {
          fast: NW >= wW * xW.cleanShare,
          dropping: NW < wW * xW.dropShare,
          masked: cW,
          longFrame: LW > xW.cleanMaxIntervalMs,
          paced: PW > xW.maxHeldFrames && NW < .999 * wW
        }, WW), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(xW.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(WW, iW) {
        if (this.slowStartMs < 0) return this.slowStartMs = WW, this.slowIntervals = 0, void(this.slowMasked = iW);
        this.slowMasked ||= iW, this.slowIntervals++;
        const OW = WW - this.slowStartMs;
        if (OW < 1e4) return;
        const mW = 1e3 * this.slowIntervals / OW,
          EW = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(WW, iW), mW < HW && (this.windowStartMs = -1, this.decide(mW, nW, {
          fast: !1,
          dropping: !0,
          masked: EW,
          longFrame: !1,
          paced: !1
        }, WW))
      }
      resizeStall(WW) {
        return this.lastFrameMs - this.resizedMs <= TW && WW - this.lastFrameMs <= 15e3
      }
      paused(WW) {
        this.refresh.frame(WW, !1), WW - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, WW + JW), this.graceUntilMs = WW + JW), this.lastFrameMs = WW, this.slowStartMs = -1, this.hitch(WW)
      }
      resized(WW) {
        this.resizedMs = WW, this.hitch(WW)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(WW) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(WW))
      }
      hitch(WW) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, WW + TW)
      }
      left(WW) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun();
        const iW = this.phase;
        "watch" !== iW.kind && (this.phase = {
          kind: "watch"
        }, "down" === iW.kind && (this.downUntilMs[iW.from] = WW + uW, this.noGainFps[iW.from] = 0, 0 === iW.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, WW + uW)
        })), this.setStep(iW.from, 0, WW, "left"), "up" === iW.kind && (this.climbed = iW.fromClimbed))
      }
      decide(WW, iW, OW, mW) {
        const {
          dropping: EW,
          masked: NW
        } = OW;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: mW,
          step: this.step,
          fps: Math.round(10 * WW) / 10,
          windows: iW,
          masked: NW,
          dropping: EW
        });
        const PW = this.phase;
        switch (PW.kind) {
          case "watch": {
            NW || 1 !== iW || (this.baseFps[this.baseNext] = WW, this.baseNext = (this.baseNext + 1) % this.baseFps.length, this.baseCount = Math.min(this.baseCount + 1, this.baseFps.length));
            const PW = !EW && this.keptAfterDip(this.step) && WW >= this.keptFps[this.step] * AW.recoverGain;
            return void this.watch(WW, iW, YW(OW, PW, !1), EW, NW, mW)
          }
          case "down": {
            if (PW.judged += iW, PW.fpsSum += WW * iW, PW.minFps = Math.min(PW.minFps, WW), NW || (PW.clean += iW, PW.cleanFpsSum += WW * iW, PW.cleanMinFps = Math.min(PW.cleanMinFps, WW)), PW.judged < lW.judgeWindows) return;
            const OW = PW.clean > 0 ? PW.cleanFpsSum / PW.clean : PW.fpsSum / PW.judged;
            if (OW >= PW.fromFps * lW.keepGain) {
              const WW = PW.clean > 0 ? PW.cleanMinFps : PW.minFps;
              this.keepDown(PW.from, PW.fromFps, OW, Math.min(WW, PW.fromFps * lW.keepGain), mW)
            } else this.noGainFrom(PW, OW, mW);
            return
          }
          case "up": {
            const iW = this.keptAfterDip(PW.from),
              LW = YW(OW, iW && !EW, !0);
            if ("hold" === LW && (PW.maskedHolds += NW ? 1 : 0, ++PW.holds <= AW.trialHoldWindows)) return;
            if ("rise" !== LW) return NW || "hold" === LW && PW.maskedHolds > 0 ? this.spoilTrial(PW, WW, mW) : this.failTrialOf(PW, WW, mW), void(this.climbed = PW.fromClimbed);
            if (PW.fpsSum += WW, NW || (PW.cleanJudged++, PW.cleanFpsSum += WW), ++PW.judged >= AW.trialWindows) {
              const OW = PW.cleanJudged > 0,
                EW = OW ? PW.cleanFpsSum / PW.cleanJudged : PW.fpsSum / PW.judged;
              if (iW && !this.probeBarMet(EW, PW.baseFps)) return OW ? this.failTrialOf(PW, WW, mW) : this.spoilTrial(PW, WW, mW), void(this.climbed = PW.fromClimbed);
              this.watchAt(this.step), this.climbed = {
                from: PW.from,
                heldWindows: 0,
                below: PW.fromClimbed
              }, this.lenientUpFps[this.step] = iW ? PW.fpsSum / PW.judged : 0, this.lenientUpAtMs[this.step] = mW, this.record(mW, WW, "up_kept")
            }
            return
          }
        }
      }
      watch(WW, iW, OW, mW, EW, NW) {
        const PW = this.climbed;
        null !== PW && !mW && !EW && ++PW.heldWindows >= AW.heldWindows && (this.climbed = null, this.record(NW, WW, "BL"), this.hooks.BL(this.step)), mW ? (this.dropRun += iW, this.dropRunFpsSum += WW * iW, this.dropRunMasked ||= EW, EW || (this.dropRunClean += iW, this.dropRunCleanFpsSum += WW * iW)) : this.resetDropRun(), "hold" !== OW && (this.cleanRun = "rise" === OW ? this.cleanRun + 1 : 0), mW ? this.probeQuiet = 0 : EW || this.probeQuiet++;
        const LW = null !== this.climbed ? AW : lW;
        if (this.dropRun >= (this.dropRunMasked ? LW.maskedWindows : LW.dropWindows)) {
          const iW = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            OW = this.dropRunClean >= lW.dropWindows && iW < this.noGainFps[this.step] * bW.heavierShare;
          this.resetDropRun();
          const mW = this.climbed;
          return void(null !== mW ? (this.failUp(this.step, mW.from, WW, NW), this.climbed = mW.below) : this.step < this.lowest && (OW || this.waitOver(NW)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: iW,
            early: !this.waitOver(NW),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, iW, NW, "down")))
        }
        const cW = this.step - 1;
        cW < 0 || NW < this.upUntilMs[cW] || (this.cleanRun >= (this.climbing ? AW.climbWindows : AW.cleanWindows) ? this.tryUp(WW, NW, "up") : this.probeShare > 0 && this.keptAfterDip(this.step) && this.probeQuiet >= jW.windows && this.baseCount > 0 && NW >= this.probeUntilMs[cW] && this.tryUp(WW, NW, "probe"))
      }
      tryUp(WW, iW, OW) {
        const mW = this.probeShare > 0 ? this.baseMedian() : 0;
        this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed,
          baseFps: mW,
          probe: "probe" === OW,
          cleanJudged: 0,
          cleanFpsSum: 0
        }, this.setStep(this.step - 1, WW, iW, OW)
      }
      probeBarMet(WW, iW) {
        return 0 === this.probeShare || 0 === iW || WW >= Math.min(iW, this.lastTargetFps) * this.probeShare
      }
      baseMedian() {
        const WW = Array.from(this.baseFps.subarray(0, this.baseCount)).sort(((WW, iW) => WW - iW)),
          iW = WW.length >> 1;
        return 0 === WW.length ? 0 : WW.length % 2 === 1 ? WW[iW] : (WW[iW - 1] + WW[iW]) / 2
      }
      waitOver(WW) {
        return !(0 === this.step && null !== this.noGain && WW < this.noGain.untilMs) && WW >= this.downUntilMs[this.step]
      }
      keptAfterDip(WW) {
        return this.keptFps[WW] > 0
      }
      keepDown(WW, iW, OW, mW, EW) {
        this.watchAt(this.step), this.keptFps[this.step] = mW;
        const NW = this.lenientUpFps[WW];
        NW > 0 && EW - this.lenientUpAtMs[WW] < AW.lenientFailMs && iW * AW.recoverGain >= NW && this.failTrial(WW, EW), this.downBackoffMs[WW] = 0, this.noGainFps[WW] = 0, this.record(EW, OW, "down_kept"), 0 === WW && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.EZ(this.step)
      }
      noGainFrom(WW, iW, OW) {
        var mW, EW;
        let {
          from: NW,
          fromFps: PW,
          early: LW
        } = WW;
        const cW = 0 === NW ? null !== (mW = null === (EW = this.noGain) || void 0 === EW ? void 0 : EW.backoffMs) && void 0 !== mW ? mW : 0 : this.downBackoffMs[NW],
          wW = 0 === cW ? uW : LW ? cW : Math.min(2 * cW, oW),
          tW = Math.max(PW, iW);
        this.downBackoffMs[NW] = wW, this.downUntilMs[NW] = OW + wW, this.noGainFps[NW] = tW, 0 === NW && (this.noGain = {
          untilMs: OW + wW,
          backoffMs: wW,
          fps: tW
        }, this.hooks.noGain(this.noGain)), this.watchAt(NW), this.setStep(NW, iW, OW, "no_gain")
      }
      spoilTrial(WW, iW, OW) {
        WW.probe && (this.probeUntilMs[this.step] = OW + AW.failWaitsMs[0]), this.watchAt(WW.from), this.setStep(WW.from, iW, OW, "spoiled")
      }
      failTrialOf(WW, iW, OW) {
        if (!WW.probe) return void this.failUp(this.step, WW.from, iW, OW);
        const mW = AW.failWaitsMs;
        this.climbing = !1, this.lenientUpFps[this.step] = 0, this.probeUntilMs[this.step] = OW + mW[Math.min(++this.probeFailures[this.step], mW.length) - 1], this.watchAt(WW.from), this.setStep(WW.from, iW, OW, "up_failed")
      }
      failUp(WW, iW, OW, mW) {
        this.failTrial(WW, mW), this.watchAt(iW), this.setStep(iW, OW, mW, "up_failed")
      }
      failTrial(WW, iW) {
        this.climbing = !1, this.lenientUpFps[WW] = 0;
        const OW = AW.failWaitsMs;
        this.upUntilMs[WW] = iW + OW[Math.min(++this.upFailures[WW], OW.length) - 1], this.hooks.upFailed(WW)
      }
      watchAt(WW) {
        this.phase = {
          kind: "watch"
        }, this.climbed = WW === this.step ? this.climbed : null, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(WW, iW, OW, mW) {
        const EW = WW !== this.step;
        EW && (this.climbed = null, this.baseCount = 0, this.baseNext = 0), this.step = WW, this.record(OW, iW, mW), EW && (this.slowStartMs = -1, this.resized(OW), this.hooks.changed(WW))
      }
      record(WW, iW, OW) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: WW,
          step: this.step,
          fps: Math.round(10 * iW) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: OW
        })
      }
    }
    var eW = OW(35164),
      vW = OW(3953),
      gW = OW(4320),
      DW = OW(35167);
    const VW = "autoGraphics",
      pW = "autoGraphicsProbe",
      fW = 6048e5,
      CW = "startScale";

    function XW() {
      return (0, cW.H)(EW.d.get("clientEscMenuOptions").pixelScale) * (0, cW.F)()
    }

    function BW() {
      return (0, cW.w)(XW())
    }
    let qW = null;

    function RW() {
      if (null === qW) {
        const WW = new URLSearchParams(window.location.search).get("stepProbe"),
          iW = Number(null !== WW && void 0 !== WW ? WW : ""),
          {
            keepShare: OW,
            weakKeepShare: mW
          } = wW.c.probe;
        qW = 1 === iW ? (0, vW.d)() ? mW : OW : iW > .5 && iW < 1 ? iW : 0, null !== WW && 0 !== iW && 0 === qW && console.warn(`?stepProbe=${WW} is not 0, 1 or a share over 0.5 and under 1: the probe is off`)
      }
      return qW
    }

    function GW() {
      return RW() > 0 ? pW : VW
    }

    function IW() {
      const WW = tW.i.getItem(GW());
      return "object" !== typeof WW || null === WW || "string" !== typeof WW.gpu ? null : WW
    }

    function aW(WW) {
      return {
        untilEpochMs: Date.now() + (WW.untilMs - performance.now()),
        backoffMs: WW.backoffMs,
        fps: WW.fps
      }
    }

    function rW(WW) {
      return void 0 === WW || "number" !== typeof WW.fps ? null : {
        untilMs: performance.now() + (WW.untilEpochMs - Date.now()),
        backoffMs: WW.backoffMs,
        fps: WW.fps
      }
    }
    let zW = null;

    function FW() {
      if (null === zW) {
        const WW = new URLSearchParams(window.location.search).get("msaa");
        zW = EW.d.get("clientEscMenuOptions").antiAliasing && ("0" === WW || "1" !== WW && !(0, LW.d)("antiAliasing") && (0, vW.d)())
      }
      return zW
    }

    function QW(WW) {
      const iW = "number" === typeof WW ? Date.now() - WW : -1;
      return iW >= 0 && iW < fW
    }
    let Wi = null;

    function ii() {
      return Wi ??= (0, NW.getDeviceDefaultPixelScale)(), Oi(Wi)
    }

    function Oi(WW) {
      const iW = EW.d.get("clientEscMenuOptions");
      return iW.pixelSmoothing && !(0, LW.d)("pixelScale") && iW.pixelScale === WW
    }
    let mi = null,
      Ei = 0;

    function Ni() {
      if (null === mi || Ei !== XW()) {
        var WW;
        Ei = XW();
        const iW = Number(null !== (WW = new URLSearchParams(window.location.search).get(CW)) && void 0 !== WW ? WW : ""),
          OW = BW();
        if (iW > 0 && iW <= 1) mi = (0, cW.D)(OW, OW[0] / iW);
        else {
          const WW = IW(),
            iW = Pi(OW, XW()),
            mW = !(0, vW.k)() && QW(null === WW || void 0 === WW ? void 0 : WW.heldAt) && (null === WW || void 0 === WW ? void 0 : WW.heldTarget) === XW() ? null === WW || void 0 === WW ? void 0 : WW.heldN : void 0;
          mi = "number" === typeof mW ? Math.min(iW, (0, cW.D)(OW, mW)) : iW
        }
      }
      return mi
    }

    function Pi(WW, iW) {
      return (0, cW.D)(WW, (0, cW.E)(iW))
    }

    function Li(WW, iW, OW) {
      const mW = WW.length - 1;
      return !(0, NW.isMobile)() || RW() > 0 && (0, vW.d)() ? mW : Math.min(mW, Math.max(OW, Pi(WW, iW) + wW.c.pixels.mobileRungsBelowStart))
    }

    function ci(WW, iW) {
      var OW;
      const mW = iW.indexOf(null !== (OW = WW.failedUpN) && void 0 !== OW ? OW : -1);
      return mW >= 0 && QW(WW.failedUpAt) ? {
        step: mW,
        untilMs: performance.now() + wW.c.stepUp.failWaitsMs[0]
      } : null
    }
    let wi = null,
      ti = !1,
      Zi = "";
    const xi = new Set;

    function li() {
      for (const WW of xi) WW()
    }

    function Ai() {
      return ti ? null : (Yi(), null === wi ? (null !== Wi || null !== (0, NW.peekGpuVendor)() ? ii() : Oi(1)) ? Ni() : null : ii() ? wi.currentStep() : null)
    }

    function bi() {
      const WW = Ai();
      if (null === WW) return null;
      const iW = BW(),
        OW = iW[Math.min(WW, iW.length - 1)];
      return OW === ji() ? null : OW
    }

    function ji() {
      return (0, cW.A)(EW.d.get("clientEscMenuOptions").pixelScale, (0, cW.F)())
    }

    function Ui() {
      return null !== wi && null !== bi()
    }

    function ki() {
      if (null === wi) return !1;
      const WW = bi();
      return null !== WW && WW > ji()
    }

    function si(WW) {
      return xi.add(WW), () => {
        xi.delete(WW)
      }
    }

    function Mi(WW, iW, OW) {
      var EW;
      if (null !== wi || ti || (0, vW.k)()) return;
      const NW = (0, eW.d)(WW, iW, OW);
      null !== NW && ((0, vW.l)(NW.vendor), "" !== NW.renderer && (0, mW.r)(NW.vendor, NW.renderer)), Zi = `${WW}:${(null===NW||void 0===NW?void 0:NW.renderer)||(null===NW||void 0===NW?void 0:NW.vendor)||""}`, (null === (EW = IW()) || void 0 === EW ? void 0 : EW.gpu) !== Zi && (tW.i.setItem(GW(), {
        gpu: Zi
      }), mi = null), Si(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var WW;
          null === (WW = wi) || void 0 === WW || WW.hidden()
        } catch (iW) {
          di(), console.error("The quality steps stopped", iW)
        }
      }))
    }
    let Ki = 0;

    function Si() {
      var WW;
      const iW = null !== (WW = IW()) && void 0 !== WW ? WW : {
          gpu: Zi
        },
        OW = BW();
      Ki = XW();
      const mW = Ni();
      wi = new dW({
          changed: li,
          EZ: () => {
            yi({
              heldN: void 0
            })
          },
          BL: WW => {
            var iW;
            const OW = BW()[WW],
              mW = {
                heldN: OW,
                heldAt: Date.now(),
                heldTarget: XW()
              };
            (null === (iW = IW()) || void 0 === iW ? void 0 : iW.failedUpN) === OW && (mW.failedUpN = void 0), yi(mW)
          },
          upFailed: WW => {
            yi({
              failedUpN: BW()[WW],
              failedUpAt: Date.now()
            })
          },
          noGain: WW => {
            yi({
              noGain: null === WW ? void 0 : aW(WW)
            })
          }
        }, {
          lowest: Li(OW, Ki, mW),
          startStep: mW,
          noGain: rW(iW.noGain),
          upWait: ci(iW, OW),
          probeShare: RW()
        }),
        function(WW) {
          const iW = {
            get step() {
              return WW.currentStep()
            },
            get n() {
              var WW;
              return null !== (WW = bi()) && void 0 !== WW ? WW : ji()
            },
            get scale() {
              var WW;
              return BW()[0] / (null !== (WW = bi()) && void 0 !== WW ? WW : ji())
            },
            get msaaOff() {
              return FW()
            },
            get probeShare() {
              return RW()
            },
            log: WW.log,
            windows: WW.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: iW,
            configurable: !0
          })
        }(wi), li()
    }

    function Yi() {
      null !== wi && XW() !== Ki && (mi = null, Si())
    }

    function yi(WW) {
      tW.i.setItem(GW(), {
        ...IW(),
        ...WW,
        gpu: Zi
      })
    }
    let Ti = 0,
      Ji = 0,
      Hi = 0,
      ni = !1;

    function ui() {
      Ti++
    }

    function oi(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Yi(), null !== wi && (WW - Hi >= 1e3 && (ni = Ti - Ji > wW.c.sceneChange.meshesPerSecond, Ji = Ti, Hi = WW), DW.c.isHeld() || gW.b.isHeld() ? wi.paused(WW) : wi.frame(WW, iW, OW && !document.hidden && ii(), ni || mW > 0 || (0, PW.l)()))
    }

    function di() {
      if (!ti) {
        ti = !0, null !== wi && (wi = null, yi({
          noGain: void 0
        }));
        try {
          li()
        } catch (WW) {
          console.error("The quality steps' resize to the player's n failed", WW)
        }
      }
    }

    function ei() {
      var WW;
      null === (WW = wi) || void 0 === WW || WW.resized(performance.now())
    }
  },
  35164: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(100),
      EW = OW(131);

    function NW(WW, iW, OW) {
      if ("webgpu" === WW) return OW ? ((0, mW.seedGpuVendor)(OW), {
        vendor: OW,
        renderer: ""
      }) : null;
      try {
        const OW = "webgl" === WW ? iW.getContext("webgl2") : iW.getContext("webgl");
        "webgl" === WW && OW && (0, EW.A)(OW);
        const NW = null === OW || void 0 === OW ? void 0 : OW.getExtension("WEBGL_debug_renderer_info");
        if (OW && NW) {
          const WW = String(OW.getParameter(NW.UNMASKED_VENDOR_WEBGL)),
            iW = String(OW.getParameter(NW.UNMASKED_RENDERER_WEBGL));
          return (0, mW.seedGpuVendor)(WW), (0, EW.F)(WW, iW), {
            vendor: WW,
            renderer: iW
          }
        }
        OW && (0, EW.F)(String(OW.getParameter(OW.VENDOR)), String(OW.getParameter(OW.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);