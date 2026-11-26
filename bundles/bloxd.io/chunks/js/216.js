export const id = 216;
export const ids = [216];
export const modules = {
  34725: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => sB,
      f: () => uO,
      h: () => KO,
      l: () => IO,
      p: () => pO,
      r: () => ZO,
      s: () => NO,
      v: () => WO,
      z: () => mO,
      A: () => RO
    });
    var YB = GB(258),
      DB = GB(16),
      QB = GB(92),
      oB = GB(1699),
      jB = GB(4851),
      yB = GB(3249),
      JB = GB(3255),
      MB = GB(31);
    const {
      windows: PB,
      target: zB,
      stepDown: lB,
      stepUp: pB,
      noGain: qB,
      probe: ZB
    } = JB.d, NB = 1e3 / 60 * 1.08, RB = 1e3 / 55, WB = 1e3 / 45, AB = 1e3 / 30 * .92, VB = 1e3 / 30 * 1.08;
    class SB {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(BB, OB) {
        const GB = BB - this.lastMs;
        this.lastMs = BB;
        const YB = function(BB) {
          if (BB <= 0 || BB > 100) return -1;
          if (BB <= NB) return 0;
          if (BB >= RB && BB <= WB) return 1;
          return BB >= AB && BB <= VB ? 2 : -1
        }(GB);
        0 === YB && 2 === this.runBand && OB && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), YB !== this.runBand && (this.runBand = YB, this.runLength = 0), YB < 0 || ++this.runLength < 3 || (0 === YB ? this.votes60++ : 1 === YB ? (this.votesMid++, this.sumMidMs += GB) : (this.votes30++, OB && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function nB(BB, OB, GB) {
      const {
        fast: YB,
        masked: DB,
        longFrame: QB,
        paced: oB
      } = BB;
      return !QB && (YB && !oB || OB) ? DB && !GB ? "hold" : "rise" : DB ? BB.dropping ? "break" : "hold" : (QB ? YB || OB : YB && !GB) ? "hold" : "break"
    }
    const UB = PB.windowMs,
      fB = PB.settleMs,
      kB = PB.graceMs,
      dB = PB.minIntervals,
      KB = 1e3 * dB / UB,
      uB = Math.floor(1e4 / UB),
      mB = qB.backoffMs,
      IB = qB.maxMs;
    class FB {
      constructor(BB, OB) {
        let {
          lowest: GB,
          startStep: YB = 0,
          noGain: DB = null,
          upWait: QB = null,
          probeShare: oB = 0
        } = OB;
        this.hooks = BB, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.probeFailures = void 0, this.probeUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.probeShare = void 0, this.probeQuiet = 0, this.baseFps = new Float64Array(ZB.baseWindows), this.baseCount = 0, this.baseNext = 0, this.refresh = new SB, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = zB.maxFps, this.lowest = GB, this.probeShare = oB, this.step = Math.min(YB, GB), this.noGain = DB, this.climbing = this.step > 0;
        const jB = GB + 1;
        this.downUntilMs = new Array(jB).fill(0), this.downBackoffMs = new Array(jB).fill(0), this.noGainFps = new Array(jB).fill(0), this.noGainFps[0] = null === DB ? 0 : DB.fps, this.keptFps = new Array(jB).fill(0), this.lenientUpFps = new Array(jB).fill(0), this.lenientUpAtMs = new Array(jB).fill(0), this.upFailures = new Array(jB).fill(0), this.upUntilMs = new Array(jB).fill(0), this.probeFailures = new Array(jB).fill(0), this.probeUntilMs = new Array(jB).fill(0), null !== QB && QB.step >= 0 && QB.step < jB && (this.upUntilMs[QB.step] = QB.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(BB, GB && !YB), !GB) return void this.leave(BB);
        const DB = BB - this.lastFrameMs,
          QB = this.resizeStall(BB);
        if (DB > 2e3 && !QB && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = BB, this.quietUntilMs = Math.max(this.quietUntilMs, BB + kB), this.graceUntilMs = BB + kB, this.windowStartMs = -1, void(this.slowStartMs = -1);
        DB > 500 && (this.hitch(BB), QB && (this.slowStartMs = -1)), this.lastFrameMs = BB, BB >= this.quietUntilMs && this.countWindow(BB, OB, YB) || OB && BB >= this.graceUntilMs && this.countSlow(BB, YB)
      }
      countWindow(BB, OB, GB) {
        if (this.windowStartMs < 0) return !!OB && (this.windowStartMs = BB, this.lastDrawnMs = BB, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = GB, !1);
        if (this.windowMasked ||= GB, !OB) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, BB - this.lastDrawnMs), this.lastDrawnMs = BB;
        const YB = BB - this.windowStartMs;
        if (YB < UB) return !1;
        const DB = this.windowIntervals,
          QB = 1e3 * DB / YB,
          oB = this.windowHeld,
          jB = this.windowMaxIntervalMs,
          yB = this.windowMasked;
        if (this.windowStartMs = -1, DB < dB) return !1;
        this.slowStartMs = -1;
        const JB = this.targetFps();
        return this.decide(QB, 1, {
          fast: QB >= JB * zB.cleanShare,
          dropping: QB < JB * zB.dropShare,
          masked: yB,
          longFrame: jB > zB.cleanMaxIntervalMs,
          paced: oB > zB.maxHeldFrames && QB < .999 * JB
        }, BB), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(zB.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(BB, OB) {
        if (this.slowStartMs < 0) return this.slowStartMs = BB, this.slowIntervals = 0, void(this.slowMasked = OB);
        this.slowMasked ||= OB, this.slowIntervals++;
        const GB = BB - this.slowStartMs;
        if (GB < 1e4) return;
        const YB = 1e3 * this.slowIntervals / GB,
          DB = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(BB, OB), YB < KB && (this.windowStartMs = -1, this.decide(YB, uB, {
          fast: !1,
          dropping: !0,
          masked: DB,
          longFrame: !1,
          paced: !1
        }, BB))
      }
      resizeStall(BB) {
        return this.lastFrameMs - this.resizedMs <= fB && BB - this.lastFrameMs <= 15e3
      }
      paused(BB) {
        this.refresh.frame(BB, !1), BB - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, BB + kB), this.graceUntilMs = BB + kB), this.lastFrameMs = BB, this.slowStartMs = -1, this.hitch(BB)
      }
      resized(BB) {
        this.resizedMs = BB, this.hitch(BB)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(BB) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(BB))
      }
      hitch(BB) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, BB + fB)
      }
      left(BB) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun();
        const OB = this.phase;
        "watch" !== OB.kind && (this.phase = {
          kind: "watch"
        }, "down" === OB.kind && (this.downUntilMs[OB.from] = BB + mB, this.noGainFps[OB.from] = 0, 0 === OB.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, BB + mB)
        })), this.setStep(OB.from, 0, BB, "left"), "up" === OB.kind && (this.climbed = OB.fromClimbed))
      }
      decide(BB, OB, GB, YB) {
        const {
          dropping: DB,
          masked: QB
        } = GB;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: YB,
          step: this.step,
          fps: Math.round(10 * BB) / 10,
          windows: OB,
          masked: QB,
          dropping: DB
        });
        const oB = this.phase;
        switch (oB.kind) {
          case "watch": {
            QB || 1 !== OB || (this.baseFps[this.baseNext] = BB, this.baseNext = (this.baseNext + 1) % this.baseFps.length, this.baseCount = Math.min(this.baseCount + 1, this.baseFps.length));
            const oB = !DB && this.keptAfterDip(this.step) && BB >= this.keptFps[this.step] * pB.recoverGain;
            return void this.watch(BB, OB, nB(GB, oB, !1), DB, QB, YB)
          }
          case "down": {
            if (oB.judged += OB, oB.fpsSum += BB * OB, oB.minFps = Math.min(oB.minFps, BB), QB || (oB.clean += OB, oB.cleanFpsSum += BB * OB, oB.cleanMinFps = Math.min(oB.cleanMinFps, BB)), oB.judged < lB.judgeWindows) return;
            const GB = oB.clean > 0 ? oB.cleanFpsSum / oB.clean : oB.fpsSum / oB.judged;
            if (GB >= oB.fromFps * lB.keepGain) {
              const BB = oB.clean > 0 ? oB.cleanMinFps : oB.minFps;
              this.keepDown(oB.from, oB.fromFps, GB, Math.min(BB, oB.fromFps * lB.keepGain), YB)
            } else this.noGainFrom(oB, GB, YB);
            return
          }
          case "up": {
            const OB = this.keptAfterDip(oB.from),
              jB = nB(GB, OB && !DB, !0);
            if ("hold" === jB && (oB.maskedHolds += QB ? 1 : 0, ++oB.holds <= pB.trialHoldWindows)) return;
            if ("rise" !== jB) return QB || "hold" === jB && oB.maskedHolds > 0 ? this.spoilTrial(oB, BB, YB) : this.failTrialOf(oB, BB, YB), void(this.climbed = oB.fromClimbed);
            if (oB.fpsSum += BB, QB || (oB.cleanJudged++, oB.cleanFpsSum += BB), ++oB.judged >= pB.trialWindows) {
              const GB = oB.cleanJudged > 0,
                DB = GB ? oB.cleanFpsSum / oB.cleanJudged : oB.fpsSum / oB.judged;
              if (OB && !this.probeBarMet(DB, oB.baseFps)) return GB ? this.failTrialOf(oB, BB, YB) : this.spoilTrial(oB, BB, YB), void(this.climbed = oB.fromClimbed);
              this.watchAt(this.step), this.climbed = {
                from: oB.from,
                heldWindows: 0,
                below: oB.fromClimbed
              }, this.lenientUpFps[this.step] = OB ? oB.fpsSum / oB.judged : 0, this.lenientUpAtMs[this.step] = YB, this.record(YB, BB, "up_kept")
            }
            return
          }
        }
      }
      watch(BB, OB, GB, YB, DB, QB) {
        const oB = this.climbed;
        null !== oB && !YB && !DB && ++oB.heldWindows >= pB.heldWindows && (this.climbed = null, this.record(QB, BB, "sJ"), this.hooks.sJ(this.step)), YB ? (this.dropRun += OB, this.dropRunFpsSum += BB * OB, this.dropRunMasked ||= DB, DB || (this.dropRunClean += OB, this.dropRunCleanFpsSum += BB * OB)) : this.resetDropRun(), "hold" !== GB && (this.cleanRun = "rise" === GB ? this.cleanRun + 1 : 0), YB ? this.probeQuiet = 0 : DB || this.probeQuiet++;
        const jB = null !== this.climbed ? pB : lB;
        if (this.dropRun >= (this.dropRunMasked ? jB.maskedWindows : jB.dropWindows)) {
          const OB = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            GB = this.dropRunClean >= lB.dropWindows && OB < this.noGainFps[this.step] * qB.heavierShare;
          this.resetDropRun();
          const YB = this.climbed;
          return void(null !== YB ? (this.failUp(this.step, YB.from, BB, QB), this.climbed = YB.below) : this.step < this.lowest && (GB || this.waitOver(QB)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: OB,
            early: !this.waitOver(QB),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, OB, QB, "down")))
        }
        const yB = this.step - 1;
        yB < 0 || QB < this.upUntilMs[yB] || (this.cleanRun >= (this.climbing ? pB.climbWindows : pB.cleanWindows) ? this.tryUp(BB, QB, "up") : this.probeShare > 0 && this.keptAfterDip(this.step) && this.probeQuiet >= ZB.windows && this.baseCount > 0 && QB >= this.probeUntilMs[yB] && this.tryUp(BB, QB, "probe"))
      }
      tryUp(BB, OB, GB) {
        const YB = this.probeShare > 0 ? this.baseMedian() : 0;
        this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed,
          baseFps: YB,
          probe: "probe" === GB,
          cleanJudged: 0,
          cleanFpsSum: 0
        }, this.setStep(this.step - 1, BB, OB, GB)
      }
      probeBarMet(BB, OB) {
        return 0 === this.probeShare || 0 === OB || BB >= Math.min(OB, this.lastTargetFps) * this.probeShare
      }
      baseMedian() {
        const BB = Array.from(this.baseFps.subarray(0, this.baseCount)).sort(((BB, OB) => BB - OB)),
          OB = BB.length >> 1;
        return 0 === BB.length ? 0 : BB.length % 2 === 1 ? BB[OB] : (BB[OB - 1] + BB[OB]) / 2
      }
      waitOver(BB) {
        return !(0 === this.step && null !== this.noGain && BB < this.noGain.untilMs) && BB >= this.downUntilMs[this.step]
      }
      keptAfterDip(BB) {
        return this.keptFps[BB] > 0
      }
      keepDown(BB, OB, GB, YB, DB) {
        this.watchAt(this.step), this.keptFps[this.step] = YB;
        const QB = this.lenientUpFps[BB];
        QB > 0 && DB - this.lenientUpAtMs[BB] < pB.lenientFailMs && OB * pB.recoverGain >= QB && this.failTrial(BB, DB), this.downBackoffMs[BB] = 0, this.noGainFps[BB] = 0, this.record(DB, GB, "down_kept"), 0 === BB && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.GP(this.step)
      }
      noGainFrom(BB, OB, GB) {
        var YB, DB;
        let {
          from: QB,
          fromFps: oB,
          early: jB
        } = BB;
        const yB = 0 === QB ? null !== (YB = null === (DB = this.noGain) || void 0 === DB ? void 0 : DB.backoffMs) && void 0 !== YB ? YB : 0 : this.downBackoffMs[QB],
          JB = 0 === yB ? mB : jB ? yB : Math.min(2 * yB, IB),
          MB = Math.max(oB, OB);
        this.downBackoffMs[QB] = JB, this.downUntilMs[QB] = GB + JB, this.noGainFps[QB] = MB, 0 === QB && (this.noGain = {
          untilMs: GB + JB,
          backoffMs: JB,
          fps: MB
        }, this.hooks.noGain(this.noGain)), this.watchAt(QB), this.setStep(QB, OB, GB, "no_gain")
      }
      spoilTrial(BB, OB, GB) {
        BB.probe && (this.probeUntilMs[this.step] = GB + pB.failWaitsMs[0]), this.watchAt(BB.from), this.setStep(BB.from, OB, GB, "spoiled")
      }
      failTrialOf(BB, OB, GB) {
        if (!BB.probe) return void this.failUp(this.step, BB.from, OB, GB);
        const YB = pB.failWaitsMs;
        this.climbing = !1, this.lenientUpFps[this.step] = 0, this.probeUntilMs[this.step] = GB + YB[Math.min(++this.probeFailures[this.step], YB.length) - 1], this.watchAt(BB.from), this.setStep(BB.from, OB, GB, "up_failed")
      }
      failUp(BB, OB, GB, YB) {
        this.failTrial(BB, YB), this.watchAt(OB), this.setStep(OB, GB, YB, "up_failed")
      }
      failTrial(BB, OB) {
        this.climbing = !1, this.lenientUpFps[BB] = 0;
        const GB = pB.failWaitsMs;
        this.upUntilMs[BB] = OB + GB[Math.min(++this.upFailures[BB], GB.length) - 1], this.hooks.upFailed(BB)
      }
      watchAt(BB) {
        this.phase = {
          kind: "watch"
        }, this.climbed = BB === this.step ? this.climbed : null, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(BB, OB, GB, YB) {
        const DB = BB !== this.step;
        DB && (this.climbed = null, this.baseCount = 0, this.baseNext = 0), this.step = BB, this.record(GB, OB, YB), DB && (this.slowStartMs = -1, this.resized(GB), this.hooks.changed(BB))
      }
      record(BB, OB, GB) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: BB,
          step: this.step,
          fps: Math.round(10 * OB) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: GB
        })
      }
    }
    var iB = GB(34732),
      LB = GB(3257),
      gB = GB(34737);
    const rB = "autoGraphics",
      XB = "autoGraphicsProbe",
      wB = 6048e5,
      EB = "startScale";

    function cB() {
      return (0, yB.Q)(DB.c.get("clientEscMenuOptions").pixelScale) * (0, yB.L)()
    }

    function hB() {
      return (0, yB.v)(cB())
    }
    let aB = null;

    function eB() {
      if (null === aB) {
        const BB = new URLSearchParams(window.location.search).get("stepProbe"),
          OB = Number(null !== BB && void 0 !== BB ? BB : ""),
          {
            keepShare: GB,
            weakKeepShare: YB
          } = JB.d.probe;
        aB = 1 === OB ? (0, LB.e)() ? YB : GB : OB > .5 && OB < 1 ? OB : 0, null !== BB && 0 !== OB && 0 === aB && console.warn(`?stepProbe=${BB} is not 0, 1 or a share over 0.5 and under 1: the probe is off`)
      }
      return aB
    }

    function TB() {
      return eB() > 0 ? XB : rB
    }

    function bB() {
      const BB = MB.g.getItem(TB());
      return "object" !== typeof BB || null === BB || "string" !== typeof BB.gpu ? null : BB
    }

    function CB(BB) {
      return {
        untilEpochMs: Date.now() + (BB.untilMs - performance.now()),
        backoffMs: BB.backoffMs,
        fps: BB.fps
      }
    }

    function HB(BB) {
      return void 0 === BB || "number" !== typeof BB.fps ? null : {
        untilMs: performance.now() + (BB.untilEpochMs - Date.now()),
        backoffMs: BB.backoffMs,
        fps: BB.fps
      }
    }
    let vB = null;

    function sB() {
      if (null === vB) {
        const BB = new URLSearchParams(window.location.search).get("msaa");
        vB = DB.c.get("clientEscMenuOptions").antiAliasing && ("0" === BB || "1" !== BB && !(0, jB.e)("antiAliasing") && (0, LB.e)())
      }
      return vB
    }

    function xB(BB) {
      const OB = "number" === typeof BB ? Date.now() - BB : -1;
      return OB >= 0 && OB < wB
    }
    let tB = null;

    function BO() {
      return tB ??= (0, QB.getDeviceDefaultPixelScale)(), OO(tB)
    }

    function OO(BB) {
      const OB = DB.c.get("clientEscMenuOptions");
      return OB.pixelSmoothing && !(0, jB.e)("pixelScale") && OB.pixelScale === BB
    }
    let GO = null,
      YO = 0;

    function DO() {
      if (null === GO || YO !== cB()) {
        var BB;
        YO = cB();
        const OB = Number(null !== (BB = new URLSearchParams(window.location.search).get(EB)) && void 0 !== BB ? BB : ""),
          GB = hB();
        if (OB > 0 && OB <= 1) GO = (0, yB.G)(GB, GB[0] / OB);
        else {
          const BB = bB(),
            OB = QO(GB, cB()),
            YB = !(0, LB.j)() && xB(null === BB || void 0 === BB ? void 0 : BB.heldAt) && (null === BB || void 0 === BB ? void 0 : BB.heldTarget) === cB() ? null === BB || void 0 === BB ? void 0 : BB.heldN : void 0;
          GO = "number" === typeof YB ? Math.min(OB, (0, yB.G)(GB, YB)) : OB
        }
      }
      return GO
    }

    function QO(BB, OB) {
      return (0, yB.G)(BB, (0, yB.H)(OB))
    }

    function oO(BB, OB, GB) {
      const YB = BB.length - 1;
      return !(0, QB.isMobile)() || eB() > 0 && (0, LB.e)() ? YB : Math.min(YB, Math.max(GB, QO(BB, OB) + JB.d.pixels.mobileRungsBelowStart))
    }

    function jO(BB, OB) {
      var GB;
      const YB = OB.indexOf(null !== (GB = BB.failedUpN) && void 0 !== GB ? GB : -1);
      return YB >= 0 && xB(BB.failedUpAt) ? {
        step: YB,
        untilMs: performance.now() + JB.d.stepUp.failWaitsMs[0]
      } : null
    }
    let yO = null,
      JO = !1,
      MO = "";
    const PO = new Set;

    function zO() {
      for (const BB of PO) BB()
    }

    function lO() {
      return JO ? null : (SO(), null === yO ? (null !== tB || null !== (0, QB.peekGpuVendor)() ? BO() : OO(1)) ? DO() : null : BO() ? yO.currentStep() : null)
    }

    function pO() {
      const BB = lO();
      if (null === BB) return null;
      const OB = hB(),
        GB = OB[Math.min(BB, OB.length - 1)];
      return GB === qO() ? null : GB
    }

    function qO() {
      return (0, yB.C)(DB.c.get("clientEscMenuOptions").pixelScale, (0, yB.L)())
    }

    function ZO() {
      return null !== yO && null !== pO()
    }

    function NO() {
      if (null === yO) return !1;
      const BB = pO();
      return null !== BB && BB > qO()
    }

    function RO(BB) {
      return PO.add(BB), () => {
        PO.delete(BB)
      }
    }

    function WO(BB, OB, GB) {
      var DB;
      if (null !== yO || JO || (0, LB.j)()) return;
      const QB = (0, iB.b)(BB, OB, GB);
      null !== QB && ((0, LB.n)(QB.vendor), "" !== QB.renderer && (0, YB.q)(QB.vendor, QB.renderer)), MO = `${BB}:${(null===QB||void 0===QB?void 0:QB.renderer)||(null===QB||void 0===QB?void 0:QB.vendor)||""}`, (null === (DB = bB()) || void 0 === DB ? void 0 : DB.gpu) !== MO && (MB.g.setItem(TB(), {
        gpu: MO
      }), GO = null), VO(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var BB;
          null === (BB = yO) || void 0 === BB || BB.hidden()
        } catch (OB) {
          mO(), console.error("The quality steps stopped", OB)
        }
      }))
    }
    let AO = 0;

    function VO() {
      var BB;
      const OB = null !== (BB = bB()) && void 0 !== BB ? BB : {
          gpu: MO
        },
        GB = hB();
      AO = cB();
      const YB = DO();
      yO = new FB({
          changed: zO,
          GP: () => {
            nO({
              heldN: void 0
            })
          },
          sJ: BB => {
            var OB;
            const GB = hB()[BB],
              YB = {
                heldN: GB,
                heldAt: Date.now(),
                heldTarget: cB()
              };
            (null === (OB = bB()) || void 0 === OB ? void 0 : OB.failedUpN) === GB && (YB.failedUpN = void 0), nO(YB)
          },
          upFailed: BB => {
            nO({
              failedUpN: hB()[BB],
              failedUpAt: Date.now()
            })
          },
          noGain: BB => {
            nO({
              noGain: null === BB ? void 0 : CB(BB)
            })
          }
        }, {
          lowest: oO(GB, AO, YB),
          startStep: YB,
          noGain: HB(OB.noGain),
          upWait: jO(OB, GB),
          probeShare: eB()
        }),
        function(BB) {
          const OB = {
            get step() {
              return BB.currentStep()
            },
            get n() {
              var BB;
              return null !== (BB = pO()) && void 0 !== BB ? BB : qO()
            },
            get scale() {
              var BB;
              return hB()[0] / (null !== (BB = pO()) && void 0 !== BB ? BB : qO())
            },
            get msaaOff() {
              return sB()
            },
            get probeShare() {
              return eB()
            },
            log: BB.log,
            windows: BB.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: OB,
            configurable: !0
          })
        }(yO), zO()
    }

    function SO() {
      null !== yO && cB() !== AO && (GO = null, VO())
    }

    function nO(BB) {
      MB.g.setItem(TB(), {
        ...bB(),
        ...BB,
        gpu: MO
      })
    }
    let UO = 0,
      fO = 0,
      kO = 0,
      dO = !1;

    function KO() {
      UO++
    }

    function uO(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      SO(), null !== yO && (BB - kO >= 1e3 && (dO = UO - fO > JB.d.sceneChange.meshesPerSecond, fO = UO, kO = BB), gB.b.isHeld() ? yO.paused(BB) : yO.frame(BB, OB, GB && !document.hidden && BO(), dO || YB > 0 || (0, oB.r)()))
    }

    function mO() {
      if (!JO) {
        JO = !0, null !== yO && (yO = null, nO({
          noGain: void 0
        }));
        try {
          zO()
        } catch (BB) {
          console.error("The quality steps' resize to the player's n failed", BB)
        }
      }
    }

    function IO() {
      var BB;
      null === (BB = yO) || void 0 === BB || BB.resized(performance.now())
    }
  },
  34732: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(92),
      DB = GB(118);

    function QB(BB, OB, GB) {
      if ("webgpu" === BB) return GB ? ((0, YB.seedGpuVendor)(GB), {
        vendor: GB,
        renderer: ""
      }) : null;
      try {
        const GB = "webgl" === BB ? OB.getContext("webgl2") : OB.getContext("webgl");
        "webgl" === BB && GB && (0, DB.G)(GB);
        const QB = null === GB || void 0 === GB ? void 0 : GB.getExtension("WEBGL_debug_renderer_info");
        if (GB && QB) {
          const BB = String(GB.getParameter(QB.UNMASKED_VENDOR_WEBGL)),
            OB = String(GB.getParameter(QB.UNMASKED_RENDERER_WEBGL));
          return (0, YB.seedGpuVendor)(BB), (0, DB.N)(BB, OB), {
            vendor: BB,
            renderer: OB
          }
        }
        GB && (0, DB.N)(String(GB.getParameter(GB.VENDOR)), String(GB.getParameter(GB.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);