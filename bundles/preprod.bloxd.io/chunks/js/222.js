export const id = 222;
export const ids = [222];
export const modules = {
  34959: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => BM,
      h: () => er,
      i: () => Cr,
      l: () => wr,
      p: () => Qr,
      q: () => Lr,
      t: () => Hr,
      v: () => br,
      y: () => mr
    });
    var OM = iM(243),
      SM = iM(19),
      jM = iM(83),
      aM = iM(1717),
      PM = iM(4809),
      nM = iM(3230),
      QM = iM(3235),
      zM = iM(30);
    const {
      windows: LM,
      target: mM,
      stepDown: HM,
      stepUp: hM,
      noGain: JM
    } = QM.c, dM = 1e3 / 60 * 1.08, yM = 1e3 / 55, lM = 1e3 / 45, EM = 1e3 / 30 * .92, UM = 1e3 / 30 * 1.08;
    class GM {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(MM, rM) {
        const iM = MM - this.lastMs;
        this.lastMs = MM;
        const OM = function(MM) {
          if (MM <= 0 || MM > 100) return -1;
          if (MM <= dM) return 0;
          if (MM >= yM && MM <= lM) return 1;
          return MM >= EM && MM <= UM ? 2 : -1
        }(iM);
        0 === OM && 2 === this.runBand && rM && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), OM !== this.runBand && (this.runBand = OM, this.runLength = 0), OM < 0 || ++this.runLength < 3 || (0 === OM ? this.votes60++ : 1 === OM ? (this.votesMid++, this.sumMidMs += iM) : (this.votes30++, rM && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function CM(MM, rM, iM) {
      const {
        fast: OM,
        masked: SM,
        longFrame: jM,
        paced: aM
      } = MM;
      return !jM && (OM && !aM || rM) ? SM && !iM ? "hold" : "rise" : SM ? MM.dropping ? "break" : "hold" : (jM ? OM || rM : OM && !iM) ? "hold" : "break"
    }
    const eM = LM.windowMs,
      bM = LM.settleMs,
      wM = LM.graceMs,
      tM = LM.minIntervals,
      gM = 1e3 * tM / eM,
      uM = Math.floor(1e4 / eM),
      RM = JM.backoffMs,
      pM = JM.maxMs;
    class WM {
      constructor(MM, rM) {
        let {
          lowest: iM,
          startStep: OM = 0,
          noGain: SM = null,
          upWait: jM = null
        } = rM;
        this.hooks = MM, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new GM, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = mM.maxFps, this.lowest = iM, this.step = Math.min(OM, iM), this.noGain = SM, this.climbing = this.step > 0;
        const aM = iM + 1;
        this.downUntilMs = new Array(aM).fill(0), this.downBackoffMs = new Array(aM).fill(0), this.noGainFps = new Array(aM).fill(0), this.noGainFps[0] = null === SM ? 0 : SM.fps, this.keptFps = new Array(aM).fill(0), this.lenientUpFps = new Array(aM).fill(0), this.lenientUpAtMs = new Array(aM).fill(0), this.upFailures = new Array(aM).fill(0), this.upUntilMs = new Array(aM).fill(0), null !== jM && jM.step >= 0 && jM.step < aM && (this.upUntilMs[jM.step] = jM.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(MM, iM && !OM), !iM) return void this.leave(MM);
        const SM = MM - this.lastFrameMs,
          jM = this.resizeStall(MM);
        if (SM > 2e3 && !jM && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = MM, this.quietUntilMs = Math.max(this.quietUntilMs, MM + wM), this.graceUntilMs = MM + wM, this.windowStartMs = -1, void(this.slowStartMs = -1);
        SM > 500 && (this.hitch(MM), jM && (this.slowStartMs = -1)), this.lastFrameMs = MM, MM >= this.quietUntilMs && this.countWindow(MM, rM, OM) || rM && MM >= this.graceUntilMs && this.countSlow(MM, OM)
      }
      countWindow(MM, rM, iM) {
        if (this.windowStartMs < 0) return !!rM && (this.windowStartMs = MM, this.lastDrawnMs = MM, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = iM, !1);
        if (this.windowMasked ||= iM, !rM) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, MM - this.lastDrawnMs), this.lastDrawnMs = MM;
        const OM = MM - this.windowStartMs;
        if (OM < eM) return !1;
        const SM = this.windowIntervals,
          jM = 1e3 * SM / OM,
          aM = this.windowHeld,
          PM = this.windowMaxIntervalMs,
          nM = this.windowMasked;
        if (this.windowStartMs = -1, SM < tM) return !1;
        this.slowStartMs = -1;
        const QM = this.targetFps();
        return this.decide(jM, 1, {
          fast: jM >= QM * mM.cleanShare,
          dropping: jM < QM * mM.dropShare,
          masked: nM,
          longFrame: PM > mM.cleanMaxIntervalMs,
          paced: aM > mM.maxHeldFrames && jM < .999 * QM
        }, MM), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(mM.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(MM, rM) {
        if (this.slowStartMs < 0) return this.slowStartMs = MM, this.slowIntervals = 0, void(this.slowMasked = rM);
        this.slowMasked ||= rM, this.slowIntervals++;
        const iM = MM - this.slowStartMs;
        if (iM < 1e4) return;
        const OM = 1e3 * this.slowIntervals / iM,
          SM = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(MM, rM), OM < gM && (this.windowStartMs = -1, this.decide(OM, uM, {
          fast: !1,
          dropping: !0,
          masked: SM,
          longFrame: !1,
          paced: !1
        }, MM))
      }
      resizeStall(MM) {
        return this.lastFrameMs - this.resizedMs <= bM && MM - this.lastFrameMs <= 15e3
      }
      paused(MM) {
        this.refresh.frame(MM, !1), MM - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, MM + wM), this.graceUntilMs = MM + wM), this.lastFrameMs = MM, this.slowStartMs = -1, this.hitch(MM)
      }
      resized(MM) {
        this.resizedMs = MM, this.hitch(MM)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(MM) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(MM))
      }
      hitch(MM) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, MM + bM)
      }
      left(MM) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const rM = this.phase;
        "watch" !== rM.kind && (this.phase = {
          kind: "watch"
        }, "down" === rM.kind && (this.downUntilMs[rM.from] = MM + RM, this.noGainFps[rM.from] = 0, 0 === rM.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, MM + RM)
        })), this.setStep(rM.from, 0, MM, "left"), "up" === rM.kind && (this.climbed = rM.fromClimbed))
      }
      decide(MM, rM, iM, OM) {
        const {
          dropping: SM,
          masked: jM
        } = iM;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: OM,
          step: this.step,
          fps: Math.round(10 * MM) / 10,
          windows: rM,
          masked: jM,
          dropping: SM
        });
        const aM = this.phase;
        switch (aM.kind) {
          case "watch": {
            const aM = !SM && this.keptAfterDip(this.step) && MM >= this.keptFps[this.step] * hM.recoverGain;
            return void this.watch(MM, rM, CM(iM, aM, !1), SM, jM, OM)
          }
          case "down": {
            if (aM.judged += rM, aM.fpsSum += MM * rM, aM.minFps = Math.min(aM.minFps, MM), jM || (aM.clean += rM, aM.cleanFpsSum += MM * rM, aM.cleanMinFps = Math.min(aM.cleanMinFps, MM)), aM.judged < HM.judgeWindows) return;
            const iM = aM.clean > 0 ? aM.cleanFpsSum / aM.clean : aM.fpsSum / aM.judged;
            if (iM >= aM.fromFps * HM.keepGain) {
              const MM = aM.clean > 0 ? aM.cleanMinFps : aM.minFps;
              this.keepDown(aM.from, aM.fromFps, iM, Math.min(MM, aM.fromFps * HM.keepGain), OM)
            } else this.noGainFrom(aM, iM, OM);
            return
          }
          case "up": {
            const rM = this.keptAfterDip(aM.from),
              PM = CM(iM, rM && !SM, !0);
            if ("hold" === PM && (aM.maskedHolds += jM ? 1 : 0, ++aM.holds <= hM.trialHoldWindows)) return;
            return "rise" !== PM ? (jM || "hold" === PM && aM.maskedHolds > 0 ? (this.watchAt(aM.from), this.setStep(aM.from, MM, OM, "spoiled")) : this.failUp(this.step, aM.from, MM, OM), void(this.climbed = aM.fromClimbed)) : (aM.fpsSum += MM, void(++aM.judged >= hM.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: aM.from,
              heldWindows: 0,
              below: aM.fromClimbed
            }, this.lenientUpFps[this.step] = rM ? aM.fpsSum / aM.judged : 0, this.lenientUpAtMs[this.step] = OM, this.record(OM, MM, "up_kept"))))
          }
        }
      }
      watch(MM, rM, iM, OM, SM, jM) {
        const aM = this.climbed;
        null !== aM && !OM && !SM && ++aM.heldWindows >= hM.heldWindows && (this.climbed = null, this.record(jM, MM, "sQ"), this.hooks.sQ(this.step)), OM ? (this.dropRun += rM, this.dropRunFpsSum += MM * rM, this.dropRunMasked ||= SM, SM || (this.dropRunClean += rM, this.dropRunCleanFpsSum += MM * rM)) : this.resetDropRun(), "hold" !== iM && (this.cleanRun = "rise" === iM ? this.cleanRun + 1 : 0);
        const PM = null !== this.climbed ? hM : HM;
        if (this.dropRun >= (this.dropRunMasked ? PM.maskedWindows : PM.dropWindows)) {
          const rM = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            iM = this.dropRunClean >= HM.dropWindows && rM < this.noGainFps[this.step] * JM.heavierShare;
          this.resetDropRun();
          const OM = this.climbed;
          return void(null !== OM ? (this.failUp(this.step, OM.from, MM, jM), this.climbed = OM.below) : this.step < this.lowest && (iM || this.waitOver(jM)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: rM,
            early: !this.waitOver(jM),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, rM, jM, "down")))
        }
        const nM = this.step - 1;
        nM >= 0 && this.cleanRun >= (this.climbing ? hM.climbWindows : hM.cleanWindows) && jM >= this.upUntilMs[nM] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed
        }, this.setStep(nM, MM, jM, "up"))
      }
      waitOver(MM) {
        return !(0 === this.step && null !== this.noGain && MM < this.noGain.untilMs) && MM >= this.downUntilMs[this.step]
      }
      keptAfterDip(MM) {
        return this.keptFps[MM] > 0
      }
      keepDown(MM, rM, iM, OM, SM) {
        this.watchAt(this.step), this.keptFps[this.step] = OM;
        const jM = this.lenientUpFps[MM];
        jM > 0 && SM - this.lenientUpAtMs[MM] < hM.lenientFailMs && rM * hM.recoverGain >= jM && this.failTrial(MM, SM), this.downBackoffMs[MM] = 0, this.noGainFps[MM] = 0, this.record(SM, iM, "down_kept"), 0 === MM && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.ML(this.step)
      }
      noGainFrom(MM, rM, iM) {
        var OM, SM;
        let {
          from: jM,
          fromFps: aM,
          early: PM
        } = MM;
        const nM = 0 === jM ? null !== (OM = null === (SM = this.noGain) || void 0 === SM ? void 0 : SM.backoffMs) && void 0 !== OM ? OM : 0 : this.downBackoffMs[jM],
          QM = 0 === nM ? RM : PM ? nM : Math.min(2 * nM, pM),
          zM = Math.max(aM, rM);
        this.downBackoffMs[jM] = QM, this.downUntilMs[jM] = iM + QM, this.noGainFps[jM] = zM, 0 === jM && (this.noGain = {
          untilMs: iM + QM,
          backoffMs: QM,
          fps: zM
        }, this.hooks.noGain(this.noGain)), this.watchAt(jM), this.setStep(jM, rM, iM, "no_gain")
      }
      failUp(MM, rM, iM, OM) {
        this.failTrial(MM, OM), this.watchAt(rM), this.setStep(rM, iM, OM, "up_failed")
      }
      failTrial(MM, rM) {
        this.climbing = !1, this.lenientUpFps[MM] = 0;
        const iM = hM.failWaitsMs;
        this.upUntilMs[MM] = rM + iM[Math.min(++this.upFailures[MM], iM.length) - 1], this.hooks.upFailed(MM)
      }
      watchAt(MM) {
        this.phase = {
          kind: "watch"
        }, this.climbed = MM === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(MM, rM, iM, OM) {
        const SM = MM !== this.step;
        SM && (this.climbed = null), this.step = MM, this.record(iM, rM, OM), SM && (this.slowStartMs = -1, this.resized(iM), this.hooks.changed(MM))
      }
      record(MM, rM, iM) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: MM,
          step: this.step,
          fps: Math.round(10 * rM) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: iM
        })
      }
    }
    var sM = iM(34962),
      DM = iM(3511),
      kM = iM(34971);
    const ZM = "autoGraphics",
      oM = 6048e5,
      fM = "startScale";

    function YM() {
      return (0, nM.U)(SM.d.get("clientEscMenuOptions").pixelScale) * (0, nM.O)()
    }

    function NM() {
      return (0, nM.w)(YM())
    }

    function AM() {
      const MM = zM.g.getItem(ZM);
      return "object" !== typeof MM || null === MM || "string" !== typeof MM.gpu ? null : MM
    }

    function xM(MM) {
      return {
        untilEpochMs: Date.now() + (MM.untilMs - performance.now()),
        backoffMs: MM.backoffMs,
        fps: MM.fps
      }
    }

    function vM(MM) {
      return void 0 === MM || "number" !== typeof MM.fps ? null : {
        untilMs: performance.now() + (MM.untilEpochMs - Date.now()),
        backoffMs: MM.backoffMs,
        fps: MM.fps
      }
    }
    let FM = null;

    function BM() {
      if (null === FM) {
        const MM = new URLSearchParams(window.location.search).get("msaa");
        FM = SM.d.get("clientEscMenuOptions").antiAliasing && ("0" === MM || "1" !== MM && !(0, PM.c)("antiAliasing") && (0, DM.d)())
      }
      return FM
    }

    function XM(MM) {
      const rM = "number" === typeof MM ? Date.now() - MM : -1;
      return rM >= 0 && rM < oM
    }
    let IM = null;

    function KM() {
      return IM ??= (0, jM.getDeviceDefaultPixelScale)(), qM(IM)
    }

    function qM(MM) {
      const rM = SM.d.get("clientEscMenuOptions");
      return rM.pixelSmoothing && !(0, PM.c)("pixelScale") && rM.pixelScale === MM
    }
    let TM = null,
      VM = 0;

    function cM() {
      if (null === TM || VM !== YM()) {
        var MM;
        VM = YM();
        const rM = Number(null !== (MM = new URLSearchParams(window.location.search).get(fM)) && void 0 !== MM ? MM : ""),
          iM = NM();
        if (rM > 0 && rM <= 1) TM = (0, nM.G)(iM, iM[0] / rM);
        else {
          const MM = AM(),
            rM = Mr(iM, YM()),
            OM = !(0, DM.j)() && XM(null === MM || void 0 === MM ? void 0 : MM.heldAt) && (null === MM || void 0 === MM ? void 0 : MM.heldTarget) === YM() ? null === MM || void 0 === MM ? void 0 : MM.heldN : void 0;
          TM = "number" === typeof OM ? Math.min(rM, (0, nM.G)(iM, OM)) : rM
        }
      }
      return TM
    }

    function Mr(MM, rM) {
      return (0, nM.G)(MM, (0, nM.K)(rM))
    }

    function rr(MM, rM, iM) {
      const OM = MM.length - 1;
      return (0, jM.isMobile)() ? Math.min(OM, Math.max(iM, Mr(MM, rM) + QM.c.pixels.mobileRungsBelowStart)) : OM
    }

    function ir(MM, rM) {
      var iM;
      const OM = rM.indexOf(null !== (iM = MM.failedUpN) && void 0 !== iM ? iM : -1);
      return OM >= 0 && XM(MM.failedUpAt) ? {
        step: OM,
        untilMs: performance.now() + QM.c.stepUp.failWaitsMs[0]
      } : null
    }
    let Or = null,
      Sr = !1,
      jr = "";
    const ar = new Set;

    function Pr() {
      for (const MM of ar) MM()
    }

    function nr() {
      return Sr ? null : (dr(), null === Or ? (null !== IM || null !== (0, jM.peekGpuVendor)() ? KM() : qM(1)) ? cM() : null : KM() ? Or.currentStep() : null)
    }

    function Qr() {
      const MM = nr();
      if (null === MM) return null;
      const rM = NM(),
        iM = rM[Math.min(MM, rM.length - 1)];
      return iM === zr() ? null : iM
    }

    function zr() {
      return (0, nM.B)(SM.d.get("clientEscMenuOptions").pixelScale, (0, nM.O)())
    }

    function Lr() {
      return null !== Or && null !== Qr()
    }

    function mr(MM) {
      return ar.add(MM), () => {
        ar.delete(MM)
      }
    }

    function Hr(MM, rM, iM) {
      var SM;
      if (null !== Or || Sr || (0, DM.j)()) return;
      const jM = (0, sM.c)(MM, rM, iM);
      null !== jM && ((0, DM.n)(jM.vendor), "" !== jM.renderer && (0, OM.t)(jM.vendor, jM.renderer)), jr = `${MM}:${(null===jM||void 0===jM?void 0:jM.renderer)||(null===jM||void 0===jM?void 0:jM.vendor)||""}`, (null === (SM = AM()) || void 0 === SM ? void 0 : SM.gpu) !== jr && (zM.g.setItem(ZM, {
        gpu: jr
      }), TM = null), Jr(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var MM;
          null === (MM = Or) || void 0 === MM || MM.hidden()
        } catch (rM) {
          br(), console.error("The quality steps stopped", rM)
        }
      }))
    }
    let hr = 0;

    function Jr() {
      var MM;
      const rM = null !== (MM = AM()) && void 0 !== MM ? MM : {
          gpu: jr
        },
        iM = NM();
      hr = YM();
      const OM = cM();
      Or = new WM({
          changed: Pr,
          ML: () => {
            yr({
              heldN: void 0
            })
          },
          sQ: MM => {
            var rM;
            const iM = NM()[MM],
              OM = {
                heldN: iM,
                heldAt: Date.now(),
                heldTarget: YM()
              };
            (null === (rM = AM()) || void 0 === rM ? void 0 : rM.failedUpN) === iM && (OM.failedUpN = void 0), yr(OM)
          },
          upFailed: MM => {
            yr({
              failedUpN: NM()[MM],
              failedUpAt: Date.now()
            })
          },
          noGain: MM => {
            yr({
              noGain: null === MM ? void 0 : xM(MM)
            })
          }
        }, {
          lowest: rr(iM, hr, OM),
          startStep: OM,
          noGain: vM(rM.noGain),
          upWait: ir(rM, iM)
        }),
        function(MM) {
          const rM = {
            get step() {
              return MM.currentStep()
            },
            get n() {
              var MM;
              return null !== (MM = Qr()) && void 0 !== MM ? MM : zr()
            },
            get scale() {
              var MM;
              return NM()[0] / (null !== (MM = Qr()) && void 0 !== MM ? MM : zr())
            },
            get msaaOff() {
              return BM()
            },
            log: MM.log,
            windows: MM.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: rM,
            configurable: !0
          })
        }(Or), Pr()
    }

    function dr() {
      null !== Or && YM() !== hr && (TM = null, Jr())
    }

    function yr(MM) {
      zM.g.setItem(ZM, {
        ...AM(),
        ...MM,
        gpu: jr
      })
    }
    let lr = 0,
      Er = 0,
      Ur = 0,
      Gr = !1;

    function Cr() {
      lr++
    }

    function er(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      dr(), null !== Or && (MM - Ur >= 1e3 && (Gr = lr - Er > QM.c.sceneChange.meshesPerSecond, Er = lr, Ur = MM), kM.c.isHeld() ? Or.paused(MM) : Or.frame(MM, rM, iM && !document.hidden && KM(), Gr || OM > 0 || (0, aM.r)()))
    }

    function br() {
      if (!Sr) {
        Sr = !0, null !== Or && (Or = null, yr({
          noGain: void 0
        }));
        try {
          Pr()
        } catch (MM) {
          console.error("The quality steps' resize to the player's n failed", MM)
        }
      }
    }

    function wr() {
      var MM;
      null === (MM = Or) || void 0 === MM || MM.resized(performance.now())
    }
  },
  34962: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(83),
      SM = iM(114);

    function jM(MM, rM, iM) {
      if ("webgpu" === MM) return iM ? ((0, OM.seedGpuVendor)(iM), {
        vendor: iM,
        renderer: ""
      }) : null;
      try {
        const iM = "webgl" === MM ? rM.getContext("webgl2") : rM.getContext("webgl");
        "webgl" === MM && iM && (0, SM.C)(iM);
        const jM = null === iM || void 0 === iM ? void 0 : iM.getExtension("WEBGL_debug_renderer_info");
        if (iM && jM) {
          const MM = String(iM.getParameter(jM.UNMASKED_VENDOR_WEBGL)),
            rM = String(iM.getParameter(jM.UNMASKED_RENDERER_WEBGL));
          return (0, OM.seedGpuVendor)(MM), (0, SM.I)(MM, rM), {
            vendor: MM,
            renderer: rM
          }
        }
        iM && (0, SM.I)(String(iM.getParameter(iM.VENDOR)), String(iM.getParameter(iM.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);