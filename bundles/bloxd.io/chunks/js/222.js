export const id = 222;
export const ids = [222];
export const modules = {
  35072: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => sR,
      d: () => OJ,
      g: () => vJ,
      i: () => NJ,
      k: () => aJ,
      m: () => nJ,
      p: () => UJ,
      s: () => AJ,
      t: () => xJ,
      v: () => WJ
    });
    var yR = GR(279),
      tR = GR(25),
      uR = GR(103),
      ZR = GR(1800),
      qR = GR(5224),
      iR = GR(4044),
      fR = GR(4048),
      VR = GR(46);
    const {
      windows: KR,
      target: wR,
      stepDown: rR,
      stepUp: eR,
      noGain: aR,
      probe: LR
    } = fR.d, nR = 1e3 / 60 * 1.08, UR = 1e3 / 55, WR = 1e3 / 45, AR = 1e3 / 30 * .92, CR = 1e3 / 30 * 1.08;
    class XR {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(RR, JR) {
        const GR = RR - this.lastMs;
        this.lastMs = RR;
        const yR = function(RR) {
          if (RR <= 0 || RR > 100) return -1;
          if (RR <= nR) return 0;
          if (RR >= UR && RR <= WR) return 1;
          return RR >= AR && RR <= CR ? 2 : -1
        }(GR);
        0 === yR && 2 === this.runBand && JR && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), yR !== this.runBand && (this.runBand = yR, this.runLength = 0), yR < 0 || ++this.runLength < 3 || (0 === yR ? this.votes60++ : 1 === yR ? (this.votesMid++, this.sumMidMs += GR) : (this.votes30++, JR && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function MR(RR, JR, GR) {
      const {
        fast: yR,
        masked: tR,
        longFrame: uR,
        paced: ZR
      } = RR;
      return !uR && (yR && !ZR || JR) ? tR && !GR ? "hold" : "rise" : tR ? RR.dropping ? "break" : "hold" : (uR ? yR || JR : yR && !GR) ? "hold" : "break"
    }
    const BR = KR.windowMs,
      lR = KR.settleMs,
      pR = KR.graceMs,
      gR = KR.minIntervals,
      bR = 1e3 * gR / BR,
      vR = Math.floor(1e4 / BR),
      OR = aR.backoffMs,
      xR = aR.maxMs;
    class NR {
      constructor(RR, JR) {
        let {
          lowest: GR,
          startStep: yR = 0,
          noGain: tR = null,
          upWait: uR = null,
          probeShare: ZR = 0
        } = JR;
        this.hooks = RR, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.probeFailures = void 0, this.probeUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.probeShare = void 0, this.probeQuiet = 0, this.baseFps = new Float64Array(LR.baseWindows), this.baseCount = 0, this.baseNext = 0, this.refresh = new XR, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = wR.maxFps, this.lowest = GR, this.probeShare = ZR, this.step = Math.min(yR, GR), this.noGain = tR, this.climbing = this.step > 0;
        const qR = GR + 1;
        this.downUntilMs = new Array(qR).fill(0), this.downBackoffMs = new Array(qR).fill(0), this.noGainFps = new Array(qR).fill(0), this.noGainFps[0] = null === tR ? 0 : tR.fps, this.keptFps = new Array(qR).fill(0), this.lenientUpFps = new Array(qR).fill(0), this.lenientUpAtMs = new Array(qR).fill(0), this.upFailures = new Array(qR).fill(0), this.upUntilMs = new Array(qR).fill(0), this.probeFailures = new Array(qR).fill(0), this.probeUntilMs = new Array(qR).fill(0), null !== uR && uR.step >= 0 && uR.step < qR && (this.upUntilMs[uR.step] = uR.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(RR, GR && !yR), !GR) return void this.leave(RR);
        const tR = RR - this.lastFrameMs,
          uR = this.resizeStall(RR);
        if (tR > 2e3 && !uR && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = RR, this.quietUntilMs = Math.max(this.quietUntilMs, RR + pR), this.graceUntilMs = RR + pR, this.windowStartMs = -1, void(this.slowStartMs = -1);
        tR > 500 && (this.hitch(RR), uR && (this.slowStartMs = -1)), this.lastFrameMs = RR, RR >= this.quietUntilMs && this.countWindow(RR, JR, yR) || JR && RR >= this.graceUntilMs && this.countSlow(RR, yR)
      }
      countWindow(RR, JR, GR) {
        if (this.windowStartMs < 0) return !!JR && (this.windowStartMs = RR, this.lastDrawnMs = RR, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = GR, !1);
        if (this.windowMasked ||= GR, !JR) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, RR - this.lastDrawnMs), this.lastDrawnMs = RR;
        const yR = RR - this.windowStartMs;
        if (yR < BR) return !1;
        const tR = this.windowIntervals,
          uR = 1e3 * tR / yR,
          ZR = this.windowHeld,
          qR = this.windowMaxIntervalMs,
          iR = this.windowMasked;
        if (this.windowStartMs = -1, tR < gR) return !1;
        this.slowStartMs = -1;
        const fR = this.targetFps();
        return this.decide(uR, 1, {
          fast: uR >= fR * wR.cleanShare,
          dropping: uR < fR * wR.dropShare,
          masked: iR,
          longFrame: qR > wR.cleanMaxIntervalMs,
          paced: ZR > wR.maxHeldFrames && uR < .999 * fR
        }, RR), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(wR.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(RR, JR) {
        if (this.slowStartMs < 0) return this.slowStartMs = RR, this.slowIntervals = 0, void(this.slowMasked = JR);
        this.slowMasked ||= JR, this.slowIntervals++;
        const GR = RR - this.slowStartMs;
        if (GR < 1e4) return;
        const yR = 1e3 * this.slowIntervals / GR,
          tR = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(RR, JR), yR < bR && (this.windowStartMs = -1, this.decide(yR, vR, {
          fast: !1,
          dropping: !0,
          masked: tR,
          longFrame: !1,
          paced: !1
        }, RR))
      }
      resizeStall(RR) {
        return this.lastFrameMs - this.resizedMs <= lR && RR - this.lastFrameMs <= 15e3
      }
      paused(RR) {
        this.refresh.frame(RR, !1), RR - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, RR + pR), this.graceUntilMs = RR + pR), this.lastFrameMs = RR, this.slowStartMs = -1, this.hitch(RR)
      }
      resized(RR) {
        this.resizedMs = RR, this.hitch(RR)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(RR) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(RR))
      }
      hitch(RR) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, RR + lR)
      }
      left(RR) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun();
        const JR = this.phase;
        "watch" !== JR.kind && (this.phase = {
          kind: "watch"
        }, "down" === JR.kind && (this.downUntilMs[JR.from] = RR + OR, this.noGainFps[JR.from] = 0, 0 === JR.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, RR + OR)
        })), this.setStep(JR.from, 0, RR, "left"), "up" === JR.kind && (this.climbed = JR.fromClimbed))
      }
      decide(RR, JR, GR, yR) {
        const {
          dropping: tR,
          masked: uR
        } = GR;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: yR,
          step: this.step,
          fps: Math.round(10 * RR) / 10,
          windows: JR,
          masked: uR,
          dropping: tR
        });
        const ZR = this.phase;
        switch (ZR.kind) {
          case "watch": {
            uR || 1 !== JR || (this.baseFps[this.baseNext] = RR, this.baseNext = (this.baseNext + 1) % this.baseFps.length, this.baseCount = Math.min(this.baseCount + 1, this.baseFps.length));
            const ZR = !tR && this.keptAfterDip(this.step) && RR >= this.keptFps[this.step] * eR.recoverGain;
            return void this.watch(RR, JR, MR(GR, ZR, !1), tR, uR, yR)
          }
          case "down": {
            if (ZR.judged += JR, ZR.fpsSum += RR * JR, ZR.minFps = Math.min(ZR.minFps, RR), uR || (ZR.clean += JR, ZR.cleanFpsSum += RR * JR, ZR.cleanMinFps = Math.min(ZR.cleanMinFps, RR)), ZR.judged < rR.judgeWindows) return;
            const GR = ZR.clean > 0 ? ZR.cleanFpsSum / ZR.clean : ZR.fpsSum / ZR.judged;
            if (GR >= ZR.fromFps * rR.keepGain) {
              const RR = ZR.clean > 0 ? ZR.cleanMinFps : ZR.minFps;
              this.keepDown(ZR.from, ZR.fromFps, GR, Math.min(RR, ZR.fromFps * rR.keepGain), yR)
            } else this.noGainFrom(ZR, GR, yR);
            return
          }
          case "up": {
            const JR = this.keptAfterDip(ZR.from),
              qR = MR(GR, JR && !tR, !0);
            if ("hold" === qR && (ZR.maskedHolds += uR ? 1 : 0, ++ZR.holds <= eR.trialHoldWindows)) return;
            if ("rise" !== qR) return uR || "hold" === qR && ZR.maskedHolds > 0 ? this.spoilTrial(ZR, RR, yR) : this.failTrialOf(ZR, RR, yR), void(this.climbed = ZR.fromClimbed);
            if (ZR.fpsSum += RR, uR || (ZR.cleanJudged++, ZR.cleanFpsSum += RR), ++ZR.judged >= eR.trialWindows) {
              const GR = ZR.cleanJudged > 0,
                tR = GR ? ZR.cleanFpsSum / ZR.cleanJudged : ZR.fpsSum / ZR.judged;
              if (JR && !this.probeBarMet(tR, ZR.baseFps)) return GR ? this.failTrialOf(ZR, RR, yR) : this.spoilTrial(ZR, RR, yR), void(this.climbed = ZR.fromClimbed);
              this.watchAt(this.step), this.climbed = {
                from: ZR.from,
                heldWindows: 0,
                below: ZR.fromClimbed
              }, this.lenientUpFps[this.step] = JR ? ZR.fpsSum / ZR.judged : 0, this.lenientUpAtMs[this.step] = yR, this.record(yR, RR, "up_kept")
            }
            return
          }
        }
      }
      watch(RR, JR, GR, yR, tR, uR) {
        const ZR = this.climbed;
        null !== ZR && !yR && !tR && ++ZR.heldWindows >= eR.heldWindows && (this.climbed = null, this.record(uR, RR, "Qq"), this.hooks.Qq(this.step)), yR ? (this.dropRun += JR, this.dropRunFpsSum += RR * JR, this.dropRunMasked ||= tR, tR || (this.dropRunClean += JR, this.dropRunCleanFpsSum += RR * JR)) : this.resetDropRun(), "hold" !== GR && (this.cleanRun = "rise" === GR ? this.cleanRun + 1 : 0), yR ? this.probeQuiet = 0 : tR || this.probeQuiet++;
        const qR = null !== this.climbed ? eR : rR;
        if (this.dropRun >= (this.dropRunMasked ? qR.maskedWindows : qR.dropWindows)) {
          const JR = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            GR = this.dropRunClean >= rR.dropWindows && JR < this.noGainFps[this.step] * aR.heavierShare;
          this.resetDropRun();
          const yR = this.climbed;
          return void(null !== yR ? (this.failUp(this.step, yR.from, RR, uR), this.climbed = yR.below) : this.step < this.lowest && (GR || this.waitOver(uR)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: JR,
            early: !this.waitOver(uR),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, JR, uR, "down")))
        }
        const iR = this.step - 1;
        iR < 0 || uR < this.upUntilMs[iR] || (this.cleanRun >= (this.climbing ? eR.climbWindows : eR.cleanWindows) ? this.tryUp(RR, uR, "up") : this.probeShare > 0 && this.keptAfterDip(this.step) && this.probeQuiet >= LR.windows && this.baseCount > 0 && uR >= this.probeUntilMs[iR] && this.tryUp(RR, uR, "probe"))
      }
      tryUp(RR, JR, GR) {
        const yR = this.probeShare > 0 ? this.baseMedian() : 0;
        this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed,
          baseFps: yR,
          probe: "probe" === GR,
          cleanJudged: 0,
          cleanFpsSum: 0
        }, this.setStep(this.step - 1, RR, JR, GR)
      }
      probeBarMet(RR, JR) {
        return 0 === this.probeShare || 0 === JR || RR >= Math.min(JR, this.lastTargetFps) * this.probeShare
      }
      baseMedian() {
        const RR = Array.from(this.baseFps.subarray(0, this.baseCount)).sort(((RR, JR) => RR - JR)),
          JR = RR.length >> 1;
        return 0 === RR.length ? 0 : RR.length % 2 === 1 ? RR[JR] : (RR[JR - 1] + RR[JR]) / 2
      }
      waitOver(RR) {
        return !(0 === this.step && null !== this.noGain && RR < this.noGain.untilMs) && RR >= this.downUntilMs[this.step]
      }
      keptAfterDip(RR) {
        return this.keptFps[RR] > 0
      }
      keepDown(RR, JR, GR, yR, tR) {
        this.watchAt(this.step), this.keptFps[this.step] = yR;
        const uR = this.lenientUpFps[RR];
        uR > 0 && tR - this.lenientUpAtMs[RR] < eR.lenientFailMs && JR * eR.recoverGain >= uR && this.failTrial(RR, tR), this.downBackoffMs[RR] = 0, this.noGainFps[RR] = 0, this.record(tR, GR, "down_kept"), 0 === RR && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.tK(this.step)
      }
      noGainFrom(RR, JR, GR) {
        var yR, tR;
        let {
          from: uR,
          fromFps: ZR,
          early: qR
        } = RR;
        const iR = 0 === uR ? null !== (yR = null === (tR = this.noGain) || void 0 === tR ? void 0 : tR.backoffMs) && void 0 !== yR ? yR : 0 : this.downBackoffMs[uR],
          fR = 0 === iR ? OR : qR ? iR : Math.min(2 * iR, xR),
          VR = Math.max(ZR, JR);
        this.downBackoffMs[uR] = fR, this.downUntilMs[uR] = GR + fR, this.noGainFps[uR] = VR, 0 === uR && (this.noGain = {
          untilMs: GR + fR,
          backoffMs: fR,
          fps: VR
        }, this.hooks.noGain(this.noGain)), this.watchAt(uR), this.setStep(uR, JR, GR, "no_gain")
      }
      spoilTrial(RR, JR, GR) {
        RR.probe && (this.probeUntilMs[this.step] = GR + eR.failWaitsMs[0]), this.watchAt(RR.from), this.setStep(RR.from, JR, GR, "spoiled")
      }
      failTrialOf(RR, JR, GR) {
        if (!RR.probe) return void this.failUp(this.step, RR.from, JR, GR);
        const yR = eR.failWaitsMs;
        this.climbing = !1, this.lenientUpFps[this.step] = 0, this.probeUntilMs[this.step] = GR + yR[Math.min(++this.probeFailures[this.step], yR.length) - 1], this.watchAt(RR.from), this.setStep(RR.from, JR, GR, "up_failed")
      }
      failUp(RR, JR, GR, yR) {
        this.failTrial(RR, yR), this.watchAt(JR), this.setStep(JR, GR, yR, "up_failed")
      }
      failTrial(RR, JR) {
        this.climbing = !1, this.lenientUpFps[RR] = 0;
        const GR = eR.failWaitsMs;
        this.upUntilMs[RR] = JR + GR[Math.min(++this.upFailures[RR], GR.length) - 1], this.hooks.upFailed(RR)
      }
      watchAt(RR) {
        this.phase = {
          kind: "watch"
        }, this.climbed = RR === this.step ? this.climbed : null, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(RR, JR, GR, yR) {
        const tR = RR !== this.step;
        tR && (this.climbed = null, this.baseCount = 0, this.baseNext = 0), this.step = RR, this.record(GR, JR, yR), tR && (this.slowStartMs = -1, this.resized(GR), this.hooks.changed(RR))
      }
      record(RR, JR, GR) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: RR,
          step: this.step,
          fps: Math.round(10 * JR) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: GR
        })
      }
    }
    var DR = GR(35081),
      HR = GR(4051),
      oR = GR(4403),
      cR = GR(35085);
    const PR = "autoGraphics",
      IR = "autoGraphicsProbe",
      mR = 6048e5,
      zR = "startScale";

    function SR() {
      return (0, iR.H)(tR.d.get("clientEscMenuOptions").pixelScale) * (0, iR.E)()
    }

    function jR() {
      return (0, iR.r)(SR())
    }
    let dR = null;

    function ER() {
      if (null === dR) {
        const RR = new URLSearchParams(window.location.search).get("stepProbe"),
          JR = Number(null !== RR && void 0 !== RR ? RR : ""),
          {
            keepShare: GR,
            weakKeepShare: yR
          } = fR.d.probe;
        dR = 1 === JR ? (0, HR.f)() ? yR : GR : JR > .5 && JR < 1 ? JR : 0, null !== RR && 0 !== JR && 0 === dR && console.warn(`?stepProbe=${RR} is not 0, 1 or a share over 0.5 and under 1: the probe is off`)
      }
      return dR
    }

    function YR() {
      return ER() > 0 ? IR : PR
    }

    function kR() {
      const RR = VR.i.getItem(YR());
      return "object" !== typeof RR || null === RR || "string" !== typeof RR.gpu ? null : RR
    }

    function QR(RR) {
      return {
        untilEpochMs: Date.now() + (RR.untilMs - performance.now()),
        backoffMs: RR.backoffMs,
        fps: RR.fps
      }
    }

    function FR(RR) {
      return void 0 === RR || "number" !== typeof RR.fps ? null : {
        untilMs: performance.now() + (RR.untilEpochMs - Date.now()),
        backoffMs: RR.backoffMs,
        fps: RR.fps
      }
    }
    let TR = null;

    function sR() {
      if (null === TR) {
        const RR = new URLSearchParams(window.location.search).get("msaa");
        TR = tR.d.get("clientEscMenuOptions").antiAliasing && ("0" === RR || "1" !== RR && !(0, qR.e)("antiAliasing") && (0, HR.f)())
      }
      return TR
    }

    function hR(RR) {
      const JR = "number" === typeof RR ? Date.now() - RR : -1;
      return JR >= 0 && JR < mR
    }
    let RJ = null;

    function JJ() {
      return RJ ??= (0, uR.getDeviceDefaultPixelScale)(), GJ(RJ)
    }

    function GJ(RR) {
      const JR = tR.d.get("clientEscMenuOptions");
      return JR.pixelSmoothing && !(0, qR.e)("pixelScale") && JR.pixelScale === RR
    }
    let yJ = null,
      tJ = 0;

    function uJ() {
      if (null === yJ || tJ !== SR()) {
        var RR;
        tJ = SR();
        const JR = Number(null !== (RR = new URLSearchParams(window.location.search).get(zR)) && void 0 !== RR ? RR : ""),
          GR = jR();
        if (JR > 0 && JR <= 1) yJ = (0, iR.A)(GR, GR[0] / JR);
        else {
          const RR = kR(),
            JR = ZJ(GR, SR()),
            yR = !(0, HR.m)() && hR(null === RR || void 0 === RR ? void 0 : RR.heldAt) && (null === RR || void 0 === RR ? void 0 : RR.heldTarget) === SR() ? null === RR || void 0 === RR ? void 0 : RR.heldN : void 0;
          yJ = "number" === typeof yR ? Math.min(JR, (0, iR.A)(GR, yR)) : JR
        }
      }
      return yJ
    }

    function ZJ(RR, JR) {
      return (0, iR.A)(RR, (0, iR.B)(JR))
    }

    function qJ(RR, JR, GR) {
      const yR = RR.length - 1;
      return !(0, uR.isMobile)() || ER() > 0 && (0, HR.f)() ? yR : Math.min(yR, Math.max(GR, ZJ(RR, JR) + fR.d.pixels.mobileRungsBelowStart))
    }

    function iJ(RR, JR) {
      var GR;
      const yR = JR.indexOf(null !== (GR = RR.failedUpN) && void 0 !== GR ? GR : -1);
      return yR >= 0 && hR(RR.failedUpAt) ? {
        step: yR,
        untilMs: performance.now() + fR.d.stepUp.failWaitsMs[0]
      } : null
    }
    let fJ = null,
      VJ = !1,
      KJ = "";
    const wJ = new Set;

    function rJ() {
      for (const RR of wJ) RR()
    }

    function eJ() {
      return VJ ? null : (MJ(), null === fJ ? (null !== RJ || null !== (0, uR.peekGpuVendor)() ? JJ() : GJ(1)) ? uJ() : null : JJ() ? fJ.currentStep() : null)
    }

    function aJ() {
      const RR = eJ();
      if (null === RR) return null;
      const JR = jR(),
        GR = JR[Math.min(RR, JR.length - 1)];
      return GR === LJ() ? null : GR
    }

    function LJ() {
      return (0, iR.v)(tR.d.get("clientEscMenuOptions").pixelScale, (0, iR.E)())
    }

    function nJ() {
      return null !== fJ && null !== aJ()
    }

    function UJ() {
      if (null === fJ) return !1;
      const RR = aJ();
      return null !== RR && RR > LJ()
    }

    function WJ(RR) {
      return wJ.add(RR), () => {
        wJ.delete(RR)
      }
    }

    function AJ(RR, JR, GR) {
      var tR;
      if (null !== fJ || VJ || (0, HR.m)()) return;
      const uR = (0, DR.c)(RR, JR, GR);
      null !== uR && ((0, HR.o)(uR.vendor), "" !== uR.renderer && (0, yR.r)(uR.vendor, uR.renderer)), KJ = `${RR}:${(null===uR||void 0===uR?void 0:uR.renderer)||(null===uR||void 0===uR?void 0:uR.vendor)||""}`, (null === (tR = kR()) || void 0 === tR ? void 0 : tR.gpu) !== KJ && (VR.i.setItem(YR(), {
        gpu: KJ
      }), yJ = null), XJ(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var RR;
          null === (RR = fJ) || void 0 === RR || RR.hidden()
        } catch (JR) {
          xJ(), console.error("The quality steps stopped", JR)
        }
      }))
    }
    let CJ = 0;

    function XJ() {
      var RR;
      const JR = null !== (RR = kR()) && void 0 !== RR ? RR : {
          gpu: KJ
        },
        GR = jR();
      CJ = SR();
      const yR = uJ();
      fJ = new NR({
          changed: rJ,
          tK: () => {
            BJ({
              heldN: void 0
            })
          },
          Qq: RR => {
            var JR;
            const GR = jR()[RR],
              yR = {
                heldN: GR,
                heldAt: Date.now(),
                heldTarget: SR()
              };
            (null === (JR = kR()) || void 0 === JR ? void 0 : JR.failedUpN) === GR && (yR.failedUpN = void 0), BJ(yR)
          },
          upFailed: RR => {
            BJ({
              failedUpN: jR()[RR],
              failedUpAt: Date.now()
            })
          },
          noGain: RR => {
            BJ({
              noGain: null === RR ? void 0 : QR(RR)
            })
          }
        }, {
          lowest: qJ(GR, CJ, yR),
          startStep: yR,
          noGain: FR(JR.noGain),
          upWait: iJ(JR, GR),
          probeShare: ER()
        }),
        function(RR) {
          const JR = {
            get step() {
              return RR.currentStep()
            },
            get n() {
              var RR;
              return null !== (RR = aJ()) && void 0 !== RR ? RR : LJ()
            },
            get scale() {
              var RR;
              return jR()[0] / (null !== (RR = aJ()) && void 0 !== RR ? RR : LJ())
            },
            get msaaOff() {
              return sR()
            },
            get probeShare() {
              return ER()
            },
            log: RR.log,
            windows: RR.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: JR,
            configurable: !0
          })
        }(fJ), rJ()
    }

    function MJ() {
      null !== fJ && SR() !== CJ && (yJ = null, XJ())
    }

    function BJ(RR) {
      VR.i.setItem(YR(), {
        ...kR(),
        ...RR,
        gpu: KJ
      })
    }
    let lJ = 0,
      pJ = 0,
      gJ = 0,
      bJ = !1;

    function vJ() {
      lJ++
    }

    function OJ(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      MJ(), null !== fJ && (RR - gJ >= 1e3 && (bJ = lJ - pJ > fR.d.sceneChange.meshesPerSecond, pJ = lJ, gJ = RR), cR.c.isHeld() || oR.d.isHeld() ? fJ.paused(RR) : fJ.frame(RR, JR, GR && !document.hidden && JJ(), bJ || yR > 0 || (0, ZR.o)()))
    }

    function xJ() {
      if (!VJ) {
        VJ = !0, null !== fJ && (fJ = null, BJ({
          noGain: void 0
        }));
        try {
          rJ()
        } catch (RR) {
          console.error("The quality steps' resize to the player's n failed", RR)
        }
      }
    }

    function NJ() {
      var RR;
      null === (RR = fJ) || void 0 === RR || RR.resized(performance.now())
    }
  },
  35081: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR
    });
    var yR = GR(103),
      tR = GR(132);

    function uR(RR, JR, GR) {
      if ("webgpu" === RR) return GR ? ((0, yR.seedGpuVendor)(GR), {
        vendor: GR,
        renderer: ""
      }) : null;
      try {
        const GR = "webgl" === RR ? JR.getContext("webgl2") : JR.getContext("webgl");
        "webgl" === RR && GR && (0, tR.C)(GR);
        const uR = null === GR || void 0 === GR ? void 0 : GR.getExtension("WEBGL_debug_renderer_info");
        if (GR && uR) {
          const RR = String(GR.getParameter(uR.UNMASKED_VENDOR_WEBGL)),
            JR = String(GR.getParameter(uR.UNMASKED_RENDERER_WEBGL));
          return (0, yR.seedGpuVendor)(RR), (0, tR.F)(RR, JR), {
            vendor: RR,
            renderer: JR
          }
        }
        GR && (0, tR.F)(String(GR.getParameter(GR.VENDOR)), String(GR.getParameter(GR.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);