export const id = 216;
export const ids = [216];
export const modules = {
  34915: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => iH,
      i: () => IB,
      k: () => oB,
      m: () => lB,
      n: () => uB,
      q: () => WB,
      s: () => MB,
      v: () => vB,
      x: () => fB,
      z: () => xB
    });
    var AH = LH(241),
      rH = LH(15),
      SH = LH(81),
      hH = LH(1659),
      tH = LH(4835),
      zH = LH(3195),
      CH = LH(3200),
      EH = LH(30);
    const {
      windows: XH,
      target: GH,
      stepDown: YH,
      stepUp: uH,
      noGain: QH,
      probe: WH
    } = CH.b, MH = 1e3 / 60 * 1.08, xH = 1e3 / 55, vH = 1e3 / 45, PH = 1e3 / 30 * .92, TH = 1e3 / 30 * 1.08;
    class UH {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(HH, BH) {
        const LH = HH - this.lastMs;
        this.lastMs = HH;
        const AH = function(HH) {
          if (HH <= 0 || HH > 100) return -1;
          if (HH <= MH) return 0;
          if (HH >= xH && HH <= vH) return 1;
          return HH >= PH && HH <= TH ? 2 : -1
        }(LH);
        0 === AH && 2 === this.runBand && BH && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), AH !== this.runBand && (this.runBand = AH, this.runLength = 0), AH < 0 || ++this.runLength < 3 || (0 === AH ? this.votes60++ : 1 === AH ? (this.votesMid++, this.sumMidMs += LH) : (this.votes30++, BH && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function VH(HH, BH, LH) {
      const {
        fast: AH,
        masked: rH,
        longFrame: SH,
        paced: hH
      } = HH;
      return !SH && (AH && !hH || BH) ? rH && !LH ? "hold" : "rise" : rH ? HH.dropping ? "break" : "hold" : (SH ? AH || BH : AH && !LH) ? "hold" : "break"
    }
    const OH = XH.windowMs,
      bH = XH.settleMs,
      kH = XH.graceMs,
      mH = XH.minIntervals,
      oH = 1e3 * mH / OH,
      IH = Math.floor(1e4 / OH),
      fH = QH.backoffMs,
      lH = QH.maxMs;
    class KH {
      constructor(HH, BH) {
        let {
          lowest: LH,
          startStep: AH = 0,
          noGain: rH = null,
          upWait: SH = null,
          probeShare: hH = 0
        } = BH;
        this.hooks = HH, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.probeFailures = void 0, this.probeUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.probeShare = void 0, this.probeQuiet = 0, this.baseFps = new Float64Array(WH.baseWindows), this.baseCount = 0, this.baseNext = 0, this.refresh = new UH, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = GH.maxFps, this.lowest = LH, this.probeShare = hH, this.step = Math.min(AH, LH), this.noGain = rH, this.climbing = this.step > 0;
        const tH = LH + 1;
        this.downUntilMs = new Array(tH).fill(0), this.downBackoffMs = new Array(tH).fill(0), this.noGainFps = new Array(tH).fill(0), this.noGainFps[0] = null === rH ? 0 : rH.fps, this.keptFps = new Array(tH).fill(0), this.lenientUpFps = new Array(tH).fill(0), this.lenientUpAtMs = new Array(tH).fill(0), this.upFailures = new Array(tH).fill(0), this.upUntilMs = new Array(tH).fill(0), this.probeFailures = new Array(tH).fill(0), this.probeUntilMs = new Array(tH).fill(0), null !== SH && SH.step >= 0 && SH.step < tH && (this.upUntilMs[SH.step] = SH.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(HH, LH && !AH), !LH) return void this.leave(HH);
        const rH = HH - this.lastFrameMs,
          SH = this.resizeStall(HH);
        if (rH > 2e3 && !SH && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = HH, this.quietUntilMs = Math.max(this.quietUntilMs, HH + kH), this.graceUntilMs = HH + kH, this.windowStartMs = -1, void(this.slowStartMs = -1);
        rH > 500 && (this.hitch(HH), SH && (this.slowStartMs = -1)), this.lastFrameMs = HH, HH >= this.quietUntilMs && this.countWindow(HH, BH, AH) || BH && HH >= this.graceUntilMs && this.countSlow(HH, AH)
      }
      countWindow(HH, BH, LH) {
        if (this.windowStartMs < 0) return !!BH && (this.windowStartMs = HH, this.lastDrawnMs = HH, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = LH, !1);
        if (this.windowMasked ||= LH, !BH) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, HH - this.lastDrawnMs), this.lastDrawnMs = HH;
        const AH = HH - this.windowStartMs;
        if (AH < OH) return !1;
        const rH = this.windowIntervals,
          SH = 1e3 * rH / AH,
          hH = this.windowHeld,
          tH = this.windowMaxIntervalMs,
          zH = this.windowMasked;
        if (this.windowStartMs = -1, rH < mH) return !1;
        this.slowStartMs = -1;
        const CH = this.targetFps();
        return this.decide(SH, 1, {
          fast: SH >= CH * GH.cleanShare,
          dropping: SH < CH * GH.dropShare,
          masked: zH,
          longFrame: tH > GH.cleanMaxIntervalMs,
          paced: hH > GH.maxHeldFrames && SH < .999 * CH
        }, HH), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(GH.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(HH, BH) {
        if (this.slowStartMs < 0) return this.slowStartMs = HH, this.slowIntervals = 0, void(this.slowMasked = BH);
        this.slowMasked ||= BH, this.slowIntervals++;
        const LH = HH - this.slowStartMs;
        if (LH < 1e4) return;
        const AH = 1e3 * this.slowIntervals / LH,
          rH = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(HH, BH), AH < oH && (this.windowStartMs = -1, this.decide(AH, IH, {
          fast: !1,
          dropping: !0,
          masked: rH,
          longFrame: !1,
          paced: !1
        }, HH))
      }
      resizeStall(HH) {
        return this.lastFrameMs - this.resizedMs <= bH && HH - this.lastFrameMs <= 15e3
      }
      paused(HH) {
        this.refresh.frame(HH, !1), HH - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, HH + kH), this.graceUntilMs = HH + kH), this.lastFrameMs = HH, this.slowStartMs = -1, this.hitch(HH)
      }
      resized(HH) {
        this.resizedMs = HH, this.hitch(HH)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(HH) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(HH))
      }
      hitch(HH) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, HH + bH)
      }
      left(HH) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun();
        const BH = this.phase;
        "watch" !== BH.kind && (this.phase = {
          kind: "watch"
        }, "down" === BH.kind && (this.downUntilMs[BH.from] = HH + fH, this.noGainFps[BH.from] = 0, 0 === BH.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, HH + fH)
        })), this.setStep(BH.from, 0, HH, "left"), "up" === BH.kind && (this.climbed = BH.fromClimbed))
      }
      decide(HH, BH, LH, AH) {
        const {
          dropping: rH,
          masked: SH
        } = LH;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: AH,
          step: this.step,
          fps: Math.round(10 * HH) / 10,
          windows: BH,
          masked: SH,
          dropping: rH
        });
        const hH = this.phase;
        switch (hH.kind) {
          case "watch": {
            SH || 1 !== BH || (this.baseFps[this.baseNext] = HH, this.baseNext = (this.baseNext + 1) % this.baseFps.length, this.baseCount = Math.min(this.baseCount + 1, this.baseFps.length));
            const hH = !rH && this.keptAfterDip(this.step) && HH >= this.keptFps[this.step] * uH.recoverGain;
            return void this.watch(HH, BH, VH(LH, hH, !1), rH, SH, AH)
          }
          case "down": {
            if (hH.judged += BH, hH.fpsSum += HH * BH, hH.minFps = Math.min(hH.minFps, HH), SH || (hH.clean += BH, hH.cleanFpsSum += HH * BH, hH.cleanMinFps = Math.min(hH.cleanMinFps, HH)), hH.judged < YH.judgeWindows) return;
            const LH = hH.clean > 0 ? hH.cleanFpsSum / hH.clean : hH.fpsSum / hH.judged;
            if (LH >= hH.fromFps * YH.keepGain) {
              const HH = hH.clean > 0 ? hH.cleanMinFps : hH.minFps;
              this.keepDown(hH.from, hH.fromFps, LH, Math.min(HH, hH.fromFps * YH.keepGain), AH)
            } else this.noGainFrom(hH, LH, AH);
            return
          }
          case "up": {
            const BH = this.keptAfterDip(hH.from),
              tH = VH(LH, BH && !rH, !0);
            if ("hold" === tH && (hH.maskedHolds += SH ? 1 : 0, ++hH.holds <= uH.trialHoldWindows)) return;
            if ("rise" !== tH) return SH || "hold" === tH && hH.maskedHolds > 0 ? this.spoilTrial(hH, HH, AH) : this.failTrialOf(hH, HH, AH), void(this.climbed = hH.fromClimbed);
            if (hH.fpsSum += HH, SH || (hH.cleanJudged++, hH.cleanFpsSum += HH), ++hH.judged >= uH.trialWindows) {
              const LH = hH.cleanJudged > 0,
                rH = LH ? hH.cleanFpsSum / hH.cleanJudged : hH.fpsSum / hH.judged;
              if (BH && !this.probeBarMet(rH, hH.baseFps)) return LH ? this.failTrialOf(hH, HH, AH) : this.spoilTrial(hH, HH, AH), void(this.climbed = hH.fromClimbed);
              this.watchAt(this.step), this.climbed = {
                from: hH.from,
                heldWindows: 0,
                below: hH.fromClimbed
              }, this.lenientUpFps[this.step] = BH ? hH.fpsSum / hH.judged : 0, this.lenientUpAtMs[this.step] = AH, this.record(AH, HH, "up_kept")
            }
            return
          }
        }
      }
      watch(HH, BH, LH, AH, rH, SH) {
        const hH = this.climbed;
        null !== hH && !AH && !rH && ++hH.heldWindows >= uH.heldWindows && (this.climbed = null, this.record(SH, HH, "LX"), this.hooks.LX(this.step)), AH ? (this.dropRun += BH, this.dropRunFpsSum += HH * BH, this.dropRunMasked ||= rH, rH || (this.dropRunClean += BH, this.dropRunCleanFpsSum += HH * BH)) : this.resetDropRun(), "hold" !== LH && (this.cleanRun = "rise" === LH ? this.cleanRun + 1 : 0), AH ? this.probeQuiet = 0 : rH || this.probeQuiet++;
        const tH = null !== this.climbed ? uH : YH;
        if (this.dropRun >= (this.dropRunMasked ? tH.maskedWindows : tH.dropWindows)) {
          const BH = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            LH = this.dropRunClean >= YH.dropWindows && BH < this.noGainFps[this.step] * QH.heavierShare;
          this.resetDropRun();
          const AH = this.climbed;
          return void(null !== AH ? (this.failUp(this.step, AH.from, HH, SH), this.climbed = AH.below) : this.step < this.lowest && (LH || this.waitOver(SH)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: BH,
            early: !this.waitOver(SH),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, BH, SH, "down")))
        }
        const zH = this.step - 1;
        zH < 0 || SH < this.upUntilMs[zH] || (this.cleanRun >= (this.climbing ? uH.climbWindows : uH.cleanWindows) ? this.tryUp(HH, SH, "up") : this.probeShare > 0 && this.keptAfterDip(this.step) && this.probeQuiet >= WH.windows && this.baseCount > 0 && SH >= this.probeUntilMs[zH] && this.tryUp(HH, SH, "probe"))
      }
      tryUp(HH, BH, LH) {
        const AH = this.probeShare > 0 ? this.baseMedian() : 0;
        this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed,
          baseFps: AH,
          probe: "probe" === LH,
          cleanJudged: 0,
          cleanFpsSum: 0
        }, this.setStep(this.step - 1, HH, BH, LH)
      }
      probeBarMet(HH, BH) {
        return 0 === this.probeShare || 0 === BH || HH >= Math.min(BH, this.lastTargetFps) * this.probeShare
      }
      baseMedian() {
        const HH = Array.from(this.baseFps.subarray(0, this.baseCount)).sort(((HH, BH) => HH - BH)),
          BH = HH.length >> 1;
        return 0 === HH.length ? 0 : HH.length % 2 === 1 ? HH[BH] : (HH[BH - 1] + HH[BH]) / 2
      }
      waitOver(HH) {
        return !(0 === this.step && null !== this.noGain && HH < this.noGain.untilMs) && HH >= this.downUntilMs[this.step]
      }
      keptAfterDip(HH) {
        return this.keptFps[HH] > 0
      }
      keepDown(HH, BH, LH, AH, rH) {
        this.watchAt(this.step), this.keptFps[this.step] = AH;
        const SH = this.lenientUpFps[HH];
        SH > 0 && rH - this.lenientUpAtMs[HH] < uH.lenientFailMs && BH * uH.recoverGain >= SH && this.failTrial(HH, rH), this.downBackoffMs[HH] = 0, this.noGainFps[HH] = 0, this.record(rH, LH, "down_kept"), 0 === HH && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.hX(this.step)
      }
      noGainFrom(HH, BH, LH) {
        var AH, rH;
        let {
          from: SH,
          fromFps: hH,
          early: tH
        } = HH;
        const zH = 0 === SH ? null !== (AH = null === (rH = this.noGain) || void 0 === rH ? void 0 : rH.backoffMs) && void 0 !== AH ? AH : 0 : this.downBackoffMs[SH],
          CH = 0 === zH ? fH : tH ? zH : Math.min(2 * zH, lH),
          EH = Math.max(hH, BH);
        this.downBackoffMs[SH] = CH, this.downUntilMs[SH] = LH + CH, this.noGainFps[SH] = EH, 0 === SH && (this.noGain = {
          untilMs: LH + CH,
          backoffMs: CH,
          fps: EH
        }, this.hooks.noGain(this.noGain)), this.watchAt(SH), this.setStep(SH, BH, LH, "no_gain")
      }
      spoilTrial(HH, BH, LH) {
        HH.probe && (this.probeUntilMs[this.step] = LH + uH.failWaitsMs[0]), this.watchAt(HH.from), this.setStep(HH.from, BH, LH, "spoiled")
      }
      failTrialOf(HH, BH, LH) {
        if (!HH.probe) return void this.failUp(this.step, HH.from, BH, LH);
        const AH = uH.failWaitsMs;
        this.climbing = !1, this.lenientUpFps[this.step] = 0, this.probeUntilMs[this.step] = LH + AH[Math.min(++this.probeFailures[this.step], AH.length) - 1], this.watchAt(HH.from), this.setStep(HH.from, BH, LH, "up_failed")
      }
      failUp(HH, BH, LH, AH) {
        this.failTrial(HH, AH), this.watchAt(BH), this.setStep(BH, LH, AH, "up_failed")
      }
      failTrial(HH, BH) {
        this.climbing = !1, this.lenientUpFps[HH] = 0;
        const LH = uH.failWaitsMs;
        this.upUntilMs[HH] = BH + LH[Math.min(++this.upFailures[HH], LH.length) - 1], this.hooks.upFailed(HH)
      }
      watchAt(HH) {
        this.phase = {
          kind: "watch"
        }, this.climbed = HH === this.step ? this.climbed : null, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(HH, BH, LH, AH) {
        const rH = HH !== this.step;
        rH && (this.climbed = null, this.baseCount = 0, this.baseNext = 0), this.step = HH, this.record(LH, BH, AH), rH && (this.slowStartMs = -1, this.resized(LH), this.hooks.changed(HH))
      }
      record(HH, BH, LH) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: HH,
          step: this.step,
          fps: Math.round(10 * BH) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: LH
        })
      }
    }
    var cH = LH(34924),
      eH = LH(3206),
      qH = LH(34929);
    const gH = "autoGraphics",
      NH = "autoGraphicsProbe",
      RH = 6048e5,
      jH = "startScale";

    function nH() {
      return (0, zH.U)(rH.c.get("clientEscMenuOptions").pixelScale) * (0, zH.O)()
    }

    function FH() {
      return (0, zH.x)(nH())
    }
    let DH = null;

    function wH() {
      if (null === DH) {
        const HH = new URLSearchParams(window.location.search).get("stepProbe"),
          BH = Number(null !== HH && void 0 !== HH ? HH : ""),
          {
            keepShare: LH,
            weakKeepShare: AH
          } = CH.b.probe;
        DH = 1 === BH ? (0, eH.h)() ? AH : LH : BH > .5 && BH < 1 ? BH : 0, null !== HH && 0 !== BH && 0 === DH && console.warn(`?stepProbe=${HH} is not 0, 1 or a share over 0.5 and under 1: the probe is off`)
      }
      return DH
    }

    function ZH() {
      return wH() > 0 ? NH : gH
    }

    function dH() {
      const HH = EH.e.getItem(ZH());
      return "object" !== typeof HH || null === HH || "string" !== typeof HH.gpu ? null : HH
    }

    function aH(HH) {
      return {
        untilEpochMs: Date.now() + (HH.untilMs - performance.now()),
        backoffMs: HH.backoffMs,
        fps: HH.fps
      }
    }

    function sH(HH) {
      return void 0 === HH || "number" !== typeof HH.fps ? null : {
        untilMs: performance.now() + (HH.untilEpochMs - Date.now()),
        backoffMs: HH.backoffMs,
        fps: HH.fps
      }
    }
    let JH = null;

    function iH() {
      if (null === JH) {
        const HH = new URLSearchParams(window.location.search).get("msaa");
        JH = rH.c.get("clientEscMenuOptions").antiAliasing && ("0" === HH || "1" !== HH && !(0, tH.e)("antiAliasing") && (0, eH.h)())
      }
      return JH
    }

    function pH(HH) {
      const BH = "number" === typeof HH ? Date.now() - HH : -1;
      return BH >= 0 && BH < RH
    }
    let yH = null;

    function HB() {
      return yH ??= (0, SH.getDeviceDefaultPixelScale)(), BB(yH)
    }

    function BB(HH) {
      const BH = rH.c.get("clientEscMenuOptions");
      return BH.pixelSmoothing && !(0, tH.e)("pixelScale") && BH.pixelScale === HH
    }
    let LB = null,
      AB = 0;

    function rB() {
      if (null === LB || AB !== nH()) {
        var HH;
        AB = nH();
        const BH = Number(null !== (HH = new URLSearchParams(window.location.search).get(jH)) && void 0 !== HH ? HH : ""),
          LH = FH();
        if (BH > 0 && BH <= 1) LB = (0, zH.I)(LH, LH[0] / BH);
        else {
          const HH = dH(),
            BH = SB(LH, nH()),
            AH = !(0, eH.m)() && pH(null === HH || void 0 === HH ? void 0 : HH.heldAt) && (null === HH || void 0 === HH ? void 0 : HH.heldTarget) === nH() ? null === HH || void 0 === HH ? void 0 : HH.heldN : void 0;
          LB = "number" === typeof AH ? Math.min(BH, (0, zH.I)(LH, AH)) : BH
        }
      }
      return LB
    }

    function SB(HH, BH) {
      return (0, zH.I)(HH, (0, zH.M)(BH))
    }

    function hB(HH, BH, LH) {
      const AH = HH.length - 1;
      return !(0, SH.isMobile)() || wH() > 0 && (0, eH.h)() ? AH : Math.min(AH, Math.max(LH, SB(HH, BH) + CH.b.pixels.mobileRungsBelowStart))
    }

    function tB(HH, BH) {
      var LH;
      const AH = BH.indexOf(null !== (LH = HH.failedUpN) && void 0 !== LH ? LH : -1);
      return AH >= 0 && pH(HH.failedUpAt) ? {
        step: AH,
        untilMs: performance.now() + CH.b.stepUp.failWaitsMs[0]
      } : null
    }
    let zB = null,
      CB = !1,
      EB = "";
    const XB = new Set;

    function GB() {
      for (const HH of XB) HH()
    }

    function YB() {
      return CB ? null : (UB(), null === zB ? (null !== yH || null !== (0, SH.peekGpuVendor)() ? HB() : BB(1)) ? rB() : null : HB() ? zB.currentStep() : null)
    }

    function uB() {
      const HH = YB();
      if (null === HH) return null;
      const BH = FH(),
        LH = BH[Math.min(HH, BH.length - 1)];
      return LH === QB() ? null : LH
    }

    function QB() {
      return (0, zH.E)(rH.c.get("clientEscMenuOptions").pixelScale, (0, zH.O)())
    }

    function WB() {
      return null !== zB && null !== uB()
    }

    function MB() {
      if (null === zB) return !1;
      const HH = uB();
      return null !== HH && HH > QB()
    }

    function xB(HH) {
      return XB.add(HH), () => {
        XB.delete(HH)
      }
    }

    function vB(HH, BH, LH) {
      var rH;
      if (null !== zB || CB || (0, eH.m)()) return;
      const SH = (0, cH.b)(HH, BH, LH);
      null !== SH && ((0, eH.n)(SH.vendor), "" !== SH.renderer && (0, AH.t)(SH.vendor, SH.renderer)), EB = `${HH}:${(null===SH||void 0===SH?void 0:SH.renderer)||(null===SH||void 0===SH?void 0:SH.vendor)||""}`, (null === (rH = dH()) || void 0 === rH ? void 0 : rH.gpu) !== EB && (EH.e.setItem(ZH(), {
        gpu: EB
      }), LB = null), TB(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var HH;
          null === (HH = zB) || void 0 === HH || HH.hidden()
        } catch (BH) {
          fB(), console.error("The quality steps stopped", BH)
        }
      }))
    }
    let PB = 0;

    function TB() {
      var HH;
      const BH = null !== (HH = dH()) && void 0 !== HH ? HH : {
          gpu: EB
        },
        LH = FH();
      PB = nH();
      const AH = rB();
      zB = new KH({
          changed: GB,
          hX: () => {
            VB({
              heldN: void 0
            })
          },
          LX: HH => {
            var BH;
            const LH = FH()[HH],
              AH = {
                heldN: LH,
                heldAt: Date.now(),
                heldTarget: nH()
              };
            (null === (BH = dH()) || void 0 === BH ? void 0 : BH.failedUpN) === LH && (AH.failedUpN = void 0), VB(AH)
          },
          upFailed: HH => {
            VB({
              failedUpN: FH()[HH],
              failedUpAt: Date.now()
            })
          },
          noGain: HH => {
            VB({
              noGain: null === HH ? void 0 : aH(HH)
            })
          }
        }, {
          lowest: hB(LH, PB, AH),
          startStep: AH,
          noGain: sH(BH.noGain),
          upWait: tB(BH, LH),
          probeShare: wH()
        }),
        function(HH) {
          const BH = {
            get step() {
              return HH.currentStep()
            },
            get n() {
              var HH;
              return null !== (HH = uB()) && void 0 !== HH ? HH : QB()
            },
            get scale() {
              var HH;
              return FH()[0] / (null !== (HH = uB()) && void 0 !== HH ? HH : QB())
            },
            get msaaOff() {
              return iH()
            },
            get probeShare() {
              return wH()
            },
            log: HH.log,
            windows: HH.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: BH,
            configurable: !0
          })
        }(zB), GB()
    }

    function UB() {
      null !== zB && nH() !== PB && (LB = null, TB())
    }

    function VB(HH) {
      EH.e.setItem(ZH(), {
        ...dH(),
        ...HH,
        gpu: EB
      })
    }
    let OB = 0,
      bB = 0,
      kB = 0,
      mB = !1;

    function oB() {
      OB++
    }

    function IB(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      UB(), null !== zB && (HH - kB >= 1e3 && (mB = OB - bB > CH.b.sceneChange.meshesPerSecond, bB = OB, kB = HH), qH.e.isHeld() ? zB.paused(HH) : zB.frame(HH, BH, LH && !document.hidden && HB(), mB || AH > 0 || (0, hH.t)()))
    }

    function fB() {
      if (!CB) {
        CB = !0, null !== zB && (zB = null, VB({
          noGain: void 0
        }));
        try {
          GB()
        } catch (HH) {
          console.error("The quality steps' resize to the player's n failed", HH)
        }
      }
    }

    function lB() {
      var HH;
      null === (HH = zB) || void 0 === HH || HH.resized(performance.now())
    }
  },
  34924: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH
    });
    var AH = LH(81),
      rH = LH(114);

    function SH(HH, BH, LH) {
      if ("webgpu" === HH) return LH ? ((0, AH.seedGpuVendor)(LH), {
        vendor: LH,
        renderer: ""
      }) : null;
      try {
        const LH = "webgl" === HH ? BH.getContext("webgl2") : BH.getContext("webgl");
        "webgl" === HH && LH && (0, rH.F)(LH);
        const SH = null === LH || void 0 === LH ? void 0 : LH.getExtension("WEBGL_debug_renderer_info");
        if (LH && SH) {
          const HH = String(LH.getParameter(SH.UNMASKED_VENDOR_WEBGL)),
            BH = String(LH.getParameter(SH.UNMASKED_RENDERER_WEBGL));
          return (0, AH.seedGpuVendor)(HH), (0, rH.L)(HH, BH), {
            vendor: HH,
            renderer: BH
          }
        }
        LH && (0, rH.L)(String(LH.getParameter(LH.VENDOR)), String(LH.getParameter(LH.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);