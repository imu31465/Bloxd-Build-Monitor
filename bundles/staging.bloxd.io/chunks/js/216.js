export const id = 216;
export const ids = [216];
export const modules = {
  34798: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ge,
      c: () => Ai,
      e: () => Pi,
      g: () => Vi,
      h: () => fi,
      l: () => Xi,
      n: () => zi,
      r: () => Ei,
      t: () => Yi,
      x: () => Bi
    });
    var ye = He(260),
      be = He(18),
      Me = He(97),
      Ke = He(1620),
      Ue = He(4820),
      Fe = He(3128),
      Je = He(3134),
      oe = He(35);
    const {
      windows: Re,
      target: ke,
      stepDown: qe,
      stepUp: fe,
      noGain: Te,
      probe: pe
    } = Je.e, Xe = 1e3 / 60 * 1.08, ze = 1e3 / 55, Be = 1e3 / 45, Ee = 1e3 / 30 * .92, ge = 1e3 / 30 * 1.08;
    class Oe {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(ee, ie) {
        const He = ee - this.lastMs;
        this.lastMs = ee;
        const ye = function(ee) {
          if (ee <= 0 || ee > 100) return -1;
          if (ee <= Xe) return 0;
          if (ee >= ze && ee <= Be) return 1;
          return ee >= Ee && ee <= ge ? 2 : -1
        }(He);
        0 === ye && 2 === this.runBand && ie && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), ye !== this.runBand && (this.runBand = ye, this.runLength = 0), ye < 0 || ++this.runLength < 3 || (0 === ye ? this.votes60++ : 1 === ye ? (this.votesMid++, this.sumMidMs += He) : (this.votes30++, ie && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function de(ee, ie, He) {
      const {
        fast: ye,
        masked: be,
        longFrame: Me,
        paced: Ke
      } = ee;
      return !Me && (ye && !Ke || ie) ? be && !He ? "hold" : "rise" : be ? ee.dropping ? "break" : "hold" : (Me ? ye || ie : ye && !He) ? "hold" : "break"
    }
    const We = Re.windowMs,
      te = Re.settleMs,
      Ze = Re.graceMs,
      we = Re.minIntervals,
      De = 1e3 * we / We,
      Pe = Math.floor(1e4 / We),
      Ae = Te.backoffMs,
      Ye = Te.maxMs;
    class Ve {
      constructor(ee, ie) {
        let {
          lowest: He,
          startStep: ye = 0,
          noGain: be = null,
          upWait: Me = null,
          probeShare: Ke = 0
        } = ie;
        this.hooks = ee, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.probeFailures = void 0, this.probeUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.probeShare = void 0, this.probeQuiet = 0, this.baseFps = new Float64Array(pe.baseWindows), this.baseCount = 0, this.baseNext = 0, this.refresh = new Oe, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = ke.maxFps, this.lowest = He, this.probeShare = Ke, this.step = Math.min(ye, He), this.noGain = be, this.climbing = this.step > 0;
        const Ue = He + 1;
        this.downUntilMs = new Array(Ue).fill(0), this.downBackoffMs = new Array(Ue).fill(0), this.noGainFps = new Array(Ue).fill(0), this.noGainFps[0] = null === be ? 0 : be.fps, this.keptFps = new Array(Ue).fill(0), this.lenientUpFps = new Array(Ue).fill(0), this.lenientUpAtMs = new Array(Ue).fill(0), this.upFailures = new Array(Ue).fill(0), this.upUntilMs = new Array(Ue).fill(0), this.probeFailures = new Array(Ue).fill(0), this.probeUntilMs = new Array(Ue).fill(0), null !== Me && Me.step >= 0 && Me.step < Ue && (this.upUntilMs[Me.step] = Me.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(ee, He && !ye), !He) return void this.leave(ee);
        const be = ee - this.lastFrameMs,
          Me = this.resizeStall(ee);
        if (be > 2e3 && !Me && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = ee, this.quietUntilMs = Math.max(this.quietUntilMs, ee + Ze), this.graceUntilMs = ee + Ze, this.windowStartMs = -1, void(this.slowStartMs = -1);
        be > 500 && (this.hitch(ee), Me && (this.slowStartMs = -1)), this.lastFrameMs = ee, ee >= this.quietUntilMs && this.countWindow(ee, ie, ye) || ie && ee >= this.graceUntilMs && this.countSlow(ee, ye)
      }
      countWindow(ee, ie, He) {
        if (this.windowStartMs < 0) return !!ie && (this.windowStartMs = ee, this.lastDrawnMs = ee, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = He, !1);
        if (this.windowMasked ||= He, !ie) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, ee - this.lastDrawnMs), this.lastDrawnMs = ee;
        const ye = ee - this.windowStartMs;
        if (ye < We) return !1;
        const be = this.windowIntervals,
          Me = 1e3 * be / ye,
          Ke = this.windowHeld,
          Ue = this.windowMaxIntervalMs,
          Fe = this.windowMasked;
        if (this.windowStartMs = -1, be < we) return !1;
        this.slowStartMs = -1;
        const Je = this.targetFps();
        return this.decide(Me, 1, {
          fast: Me >= Je * ke.cleanShare,
          dropping: Me < Je * ke.dropShare,
          masked: Fe,
          longFrame: Ue > ke.cleanMaxIntervalMs,
          paced: Ke > ke.maxHeldFrames && Me < .999 * Je
        }, ee), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(ke.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(ee, ie) {
        if (this.slowStartMs < 0) return this.slowStartMs = ee, this.slowIntervals = 0, void(this.slowMasked = ie);
        this.slowMasked ||= ie, this.slowIntervals++;
        const He = ee - this.slowStartMs;
        if (He < 1e4) return;
        const ye = 1e3 * this.slowIntervals / He,
          be = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(ee, ie), ye < De && (this.windowStartMs = -1, this.decide(ye, Pe, {
          fast: !1,
          dropping: !0,
          masked: be,
          longFrame: !1,
          paced: !1
        }, ee))
      }
      resizeStall(ee) {
        return this.lastFrameMs - this.resizedMs <= te && ee - this.lastFrameMs <= 15e3
      }
      paused(ee) {
        this.refresh.frame(ee, !1), ee - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, ee + Ze), this.graceUntilMs = ee + Ze), this.lastFrameMs = ee, this.slowStartMs = -1, this.hitch(ee)
      }
      resized(ee) {
        this.resizedMs = ee, this.hitch(ee)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(ee) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(ee))
      }
      hitch(ee) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, ee + te)
      }
      left(ee) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun();
        const ie = this.phase;
        "watch" !== ie.kind && (this.phase = {
          kind: "watch"
        }, "down" === ie.kind && (this.downUntilMs[ie.from] = ee + Ae, this.noGainFps[ie.from] = 0, 0 === ie.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, ee + Ae)
        })), this.setStep(ie.from, 0, ee, "left"), "up" === ie.kind && (this.climbed = ie.fromClimbed))
      }
      decide(ee, ie, He, ye) {
        const {
          dropping: be,
          masked: Me
        } = He;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: ye,
          step: this.step,
          fps: Math.round(10 * ee) / 10,
          windows: ie,
          masked: Me,
          dropping: be
        });
        const Ke = this.phase;
        switch (Ke.kind) {
          case "watch": {
            Me || 1 !== ie || (this.baseFps[this.baseNext] = ee, this.baseNext = (this.baseNext + 1) % this.baseFps.length, this.baseCount = Math.min(this.baseCount + 1, this.baseFps.length));
            const Ke = !be && this.keptAfterDip(this.step) && ee >= this.keptFps[this.step] * fe.recoverGain;
            return void this.watch(ee, ie, de(He, Ke, !1), be, Me, ye)
          }
          case "down": {
            if (Ke.judged += ie, Ke.fpsSum += ee * ie, Ke.minFps = Math.min(Ke.minFps, ee), Me || (Ke.clean += ie, Ke.cleanFpsSum += ee * ie, Ke.cleanMinFps = Math.min(Ke.cleanMinFps, ee)), Ke.judged < qe.judgeWindows) return;
            const He = Ke.clean > 0 ? Ke.cleanFpsSum / Ke.clean : Ke.fpsSum / Ke.judged;
            if (He >= Ke.fromFps * qe.keepGain) {
              const ee = Ke.clean > 0 ? Ke.cleanMinFps : Ke.minFps;
              this.keepDown(Ke.from, Ke.fromFps, He, Math.min(ee, Ke.fromFps * qe.keepGain), ye)
            } else this.noGainFrom(Ke, He, ye);
            return
          }
          case "up": {
            const ie = this.keptAfterDip(Ke.from),
              Ue = de(He, ie && !be, !0);
            if ("hold" === Ue && (Ke.maskedHolds += Me ? 1 : 0, ++Ke.holds <= fe.trialHoldWindows)) return;
            if ("rise" !== Ue) return Me || "hold" === Ue && Ke.maskedHolds > 0 ? this.spoilTrial(Ke, ee, ye) : this.failTrialOf(Ke, ee, ye), void(this.climbed = Ke.fromClimbed);
            if (Ke.fpsSum += ee, Me || (Ke.cleanJudged++, Ke.cleanFpsSum += ee), ++Ke.judged >= fe.trialWindows) {
              const He = Ke.cleanJudged > 0,
                be = He ? Ke.cleanFpsSum / Ke.cleanJudged : Ke.fpsSum / Ke.judged;
              if (ie && !this.probeBarMet(be, Ke.baseFps)) return He ? this.failTrialOf(Ke, ee, ye) : this.spoilTrial(Ke, ee, ye), void(this.climbed = Ke.fromClimbed);
              this.watchAt(this.step), this.climbed = {
                from: Ke.from,
                heldWindows: 0,
                below: Ke.fromClimbed
              }, this.lenientUpFps[this.step] = ie ? Ke.fpsSum / Ke.judged : 0, this.lenientUpAtMs[this.step] = ye, this.record(ye, ee, "up_kept")
            }
            return
          }
        }
      }
      watch(ee, ie, He, ye, be, Me) {
        const Ke = this.climbed;
        null !== Ke && !ye && !be && ++Ke.heldWindows >= fe.heldWindows && (this.climbed = null, this.record(Me, ee, "lJ"), this.hooks.lJ(this.step)), ye ? (this.dropRun += ie, this.dropRunFpsSum += ee * ie, this.dropRunMasked ||= be, be || (this.dropRunClean += ie, this.dropRunCleanFpsSum += ee * ie)) : this.resetDropRun(), "hold" !== He && (this.cleanRun = "rise" === He ? this.cleanRun + 1 : 0), ye ? this.probeQuiet = 0 : be || this.probeQuiet++;
        const Ue = null !== this.climbed ? fe : qe;
        if (this.dropRun >= (this.dropRunMasked ? Ue.maskedWindows : Ue.dropWindows)) {
          const ie = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            He = this.dropRunClean >= qe.dropWindows && ie < this.noGainFps[this.step] * Te.heavierShare;
          this.resetDropRun();
          const ye = this.climbed;
          return void(null !== ye ? (this.failUp(this.step, ye.from, ee, Me), this.climbed = ye.below) : this.step < this.lowest && (He || this.waitOver(Me)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: ie,
            early: !this.waitOver(Me),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, ie, Me, "down")))
        }
        const Fe = this.step - 1;
        Fe < 0 || Me < this.upUntilMs[Fe] || (this.cleanRun >= (this.climbing ? fe.climbWindows : fe.cleanWindows) ? this.tryUp(ee, Me, "up") : this.probeShare > 0 && this.keptAfterDip(this.step) && this.probeQuiet >= pe.windows && this.baseCount > 0 && Me >= this.probeUntilMs[Fe] && this.tryUp(ee, Me, "probe"))
      }
      tryUp(ee, ie, He) {
        const ye = this.probeShare > 0 ? this.baseMedian() : 0;
        this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed,
          baseFps: ye,
          probe: "probe" === He,
          cleanJudged: 0,
          cleanFpsSum: 0
        }, this.setStep(this.step - 1, ee, ie, He)
      }
      probeBarMet(ee, ie) {
        return 0 === this.probeShare || 0 === ie || ee >= Math.min(ie, this.lastTargetFps) * this.probeShare
      }
      baseMedian() {
        const ee = Array.from(this.baseFps.subarray(0, this.baseCount)).sort(((ee, ie) => ee - ie)),
          ie = ee.length >> 1;
        return 0 === ee.length ? 0 : ee.length % 2 === 1 ? ee[ie] : (ee[ie - 1] + ee[ie]) / 2
      }
      waitOver(ee) {
        return !(0 === this.step && null !== this.noGain && ee < this.noGain.untilMs) && ee >= this.downUntilMs[this.step]
      }
      keptAfterDip(ee) {
        return this.keptFps[ee] > 0
      }
      keepDown(ee, ie, He, ye, be) {
        this.watchAt(this.step), this.keptFps[this.step] = ye;
        const Me = this.lenientUpFps[ee];
        Me > 0 && be - this.lenientUpAtMs[ee] < fe.lenientFailMs && ie * fe.recoverGain >= Me && this.failTrial(ee, be), this.downBackoffMs[ee] = 0, this.noGainFps[ee] = 0, this.record(be, He, "down_kept"), 0 === ee && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.KR(this.step)
      }
      noGainFrom(ee, ie, He) {
        var ye, be;
        let {
          from: Me,
          fromFps: Ke,
          early: Ue
        } = ee;
        const Fe = 0 === Me ? null !== (ye = null === (be = this.noGain) || void 0 === be ? void 0 : be.backoffMs) && void 0 !== ye ? ye : 0 : this.downBackoffMs[Me],
          Je = 0 === Fe ? Ae : Ue ? Fe : Math.min(2 * Fe, Ye),
          oe = Math.max(Ke, ie);
        this.downBackoffMs[Me] = Je, this.downUntilMs[Me] = He + Je, this.noGainFps[Me] = oe, 0 === Me && (this.noGain = {
          untilMs: He + Je,
          backoffMs: Je,
          fps: oe
        }, this.hooks.noGain(this.noGain)), this.watchAt(Me), this.setStep(Me, ie, He, "no_gain")
      }
      spoilTrial(ee, ie, He) {
        ee.probe && (this.probeUntilMs[this.step] = He + fe.failWaitsMs[0]), this.watchAt(ee.from), this.setStep(ee.from, ie, He, "spoiled")
      }
      failTrialOf(ee, ie, He) {
        if (!ee.probe) return void this.failUp(this.step, ee.from, ie, He);
        const ye = fe.failWaitsMs;
        this.climbing = !1, this.lenientUpFps[this.step] = 0, this.probeUntilMs[this.step] = He + ye[Math.min(++this.probeFailures[this.step], ye.length) - 1], this.watchAt(ee.from), this.setStep(ee.from, ie, He, "up_failed")
      }
      failUp(ee, ie, He, ye) {
        this.failTrial(ee, ye), this.watchAt(ie), this.setStep(ie, He, ye, "up_failed")
      }
      failTrial(ee, ie) {
        this.climbing = !1, this.lenientUpFps[ee] = 0;
        const He = fe.failWaitsMs;
        this.upUntilMs[ee] = ie + He[Math.min(++this.upFailures[ee], He.length) - 1], this.hooks.upFailed(ee)
      }
      watchAt(ee) {
        this.phase = {
          kind: "watch"
        }, this.climbed = ee === this.step ? this.climbed : null, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(ee, ie, He, ye) {
        const be = ee !== this.step;
        be && (this.climbed = null, this.baseCount = 0, this.baseNext = 0), this.step = ee, this.record(He, ie, ye), be && (this.slowStartMs = -1, this.resized(He), this.hooks.changed(ee))
      }
      record(ee, ie, He) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: ee,
          step: this.step,
          fps: Math.round(10 * ie) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: He
        })
      }
    }
    var ae = He(34802),
      ce = He(3136),
      xe = He(34807);
    const Le = "autoGraphics",
      Ce = "autoGraphicsProbe",
      ve = 6048e5,
      ue = "startScale";

    function me() {
      return (0, Fe.P)(be.e.get("clientEscMenuOptions").pixelScale) * (0, Fe.L)()
    }

    function le() {
      return (0, Fe.v)(me())
    }
    let Se = null;

    function ne() {
      if (null === Se) {
        const ee = new URLSearchParams(window.location.search).get("stepProbe"),
          ie = Number(null !== ee && void 0 !== ee ? ee : ""),
          {
            keepShare: He,
            weakKeepShare: ye
          } = Je.e.probe;
        Se = 1 === ie ? (0, ce.f)() ? ye : He : ie > .5 && ie < 1 ? ie : 0, null !== ee && 0 !== ie && 0 === Se && console.warn(`?stepProbe=${ee} is not 0, 1 or a share over 0.5 and under 1: the probe is off`)
      }
      return Se
    }

    function je() {
      return ne() > 0 ? Ce : Le
    }

    function se() {
      const ee = oe.i.getItem(je());
      return "object" !== typeof ee || null === ee || "string" !== typeof ee.gpu ? null : ee
    }

    function Ie(ee) {
      return {
        untilEpochMs: Date.now() + (ee.untilMs - performance.now()),
        backoffMs: ee.backoffMs,
        fps: ee.fps
      }
    }

    function he(ee) {
      return void 0 === ee || "number" !== typeof ee.fps ? null : {
        untilMs: performance.now() + (ee.untilEpochMs - Date.now()),
        backoffMs: ee.backoffMs,
        fps: ee.fps
      }
    }
    let Ne = null;

    function Ge() {
      if (null === Ne) {
        const ee = new URLSearchParams(window.location.search).get("msaa");
        Ne = be.e.get("clientEscMenuOptions").antiAliasing && ("0" === ee || "1" !== ee && !(0, Ue.e)("antiAliasing") && (0, ce.f)())
      }
      return Ne
    }

    function re(ee) {
      const ie = "number" === typeof ee ? Date.now() - ee : -1;
      return ie >= 0 && ie < ve
    }
    let Qe = null;

    function ei() {
      return Qe ??= (0, Me.getDeviceDefaultPixelScale)(), ii(Qe)
    }

    function ii(ee) {
      const ie = be.e.get("clientEscMenuOptions");
      return ie.pixelSmoothing && !(0, Ue.e)("pixelScale") && ie.pixelScale === ee
    }
    let Hi = null,
      yi = 0;

    function bi() {
      if (null === Hi || yi !== me()) {
        var ee;
        yi = me();
        const ie = Number(null !== (ee = new URLSearchParams(window.location.search).get(ue)) && void 0 !== ee ? ee : ""),
          He = le();
        if (ie > 0 && ie <= 1) Hi = (0, Fe.F)(He, He[0] / ie);
        else {
          const ee = se(),
            ie = Mi(He, me()),
            ye = !(0, ce.i)() && re(null === ee || void 0 === ee ? void 0 : ee.heldAt) && (null === ee || void 0 === ee ? void 0 : ee.heldTarget) === me() ? null === ee || void 0 === ee ? void 0 : ee.heldN : void 0;
          Hi = "number" === typeof ye ? Math.min(ie, (0, Fe.F)(He, ye)) : ie
        }
      }
      return Hi
    }

    function Mi(ee, ie) {
      return (0, Fe.F)(ee, (0, Fe.H)(ie))
    }

    function Ki(ee, ie, He) {
      const ye = ee.length - 1;
      return !(0, Me.isMobile)() || ne() > 0 && (0, ce.f)() ? ye : Math.min(ye, Math.max(He, Mi(ee, ie) + Je.e.pixels.mobileRungsBelowStart))
    }

    function Ui(ee, ie) {
      var He;
      const ye = ie.indexOf(null !== (He = ee.failedUpN) && void 0 !== He ? He : -1);
      return ye >= 0 && re(ee.failedUpAt) ? {
        step: ye,
        untilMs: performance.now() + Je.e.stepUp.failWaitsMs[0]
      } : null
    }
    let Fi = null,
      Ji = !1,
      oi = "";
    const Ri = new Set;

    function ki() {
      for (const ee of Ri) ee()
    }

    function qi() {
      return Ji ? null : (di(), null === Fi ? (null !== Qe || null !== (0, Me.peekGpuVendor)() ? ei() : ii(1)) ? bi() : null : ei() ? Fi.currentStep() : null)
    }

    function fi() {
      const ee = qi();
      if (null === ee) return null;
      const ie = le(),
        He = ie[Math.min(ee, ie.length - 1)];
      return He === Ti() ? null : He
    }

    function Ti() {
      return (0, Fe.z)(be.e.get("clientEscMenuOptions").pixelScale, (0, Fe.L)())
    }

    function Xi() {
      return null !== Fi && null !== fi()
    }

    function zi() {
      if (null === Fi) return !1;
      const ee = fi();
      return null !== ee && ee > Ti()
    }

    function Bi(ee) {
      return Ri.add(ee), () => {
        Ri.delete(ee)
      }
    }

    function Ei(ee, ie, He) {
      var be;
      if (null !== Fi || Ji || (0, ce.i)()) return;
      const Me = (0, ae.d)(ee, ie, He);
      null !== Me && ((0, ce.j)(Me.vendor), "" !== Me.renderer && (0, ye.l)(Me.vendor, Me.renderer)), oi = `${ee}:${(null===Me||void 0===Me?void 0:Me.renderer)||(null===Me||void 0===Me?void 0:Me.vendor)||""}`, (null === (be = se()) || void 0 === be ? void 0 : be.gpu) !== oi && (oe.i.setItem(je(), {
        gpu: oi
      }), Hi = null), Oi(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var ee;
          null === (ee = Fi) || void 0 === ee || ee.hidden()
        } catch (ie) {
          Yi(), console.error("The quality steps stopped", ie)
        }
      }))
    }
    let gi = 0;

    function Oi() {
      var ee;
      const ie = null !== (ee = se()) && void 0 !== ee ? ee : {
          gpu: oi
        },
        He = le();
      gi = me();
      const ye = bi();
      Fi = new Ve({
          changed: ki,
          KR: () => {
            Wi({
              heldN: void 0
            })
          },
          lJ: ee => {
            var ie;
            const He = le()[ee],
              ye = {
                heldN: He,
                heldAt: Date.now(),
                heldTarget: me()
              };
            (null === (ie = se()) || void 0 === ie ? void 0 : ie.failedUpN) === He && (ye.failedUpN = void 0), Wi(ye)
          },
          upFailed: ee => {
            Wi({
              failedUpN: le()[ee],
              failedUpAt: Date.now()
            })
          },
          noGain: ee => {
            Wi({
              noGain: null === ee ? void 0 : Ie(ee)
            })
          }
        }, {
          lowest: Ki(He, gi, ye),
          startStep: ye,
          noGain: he(ie.noGain),
          upWait: Ui(ie, He),
          probeShare: ne()
        }),
        function(ee) {
          const ie = {
            get step() {
              return ee.currentStep()
            },
            get n() {
              var ee;
              return null !== (ee = fi()) && void 0 !== ee ? ee : Ti()
            },
            get scale() {
              var ee;
              return le()[0] / (null !== (ee = fi()) && void 0 !== ee ? ee : Ti())
            },
            get msaaOff() {
              return Ge()
            },
            get probeShare() {
              return ne()
            },
            log: ee.log,
            windows: ee.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: ie,
            configurable: !0
          })
        }(Fi), ki()
    }

    function di() {
      null !== Fi && me() !== gi && (Hi = null, Oi())
    }

    function Wi(ee) {
      oe.i.setItem(je(), {
        ...se(),
        ...ee,
        gpu: oi
      })
    }
    let ti = 0,
      Zi = 0,
      wi = 0,
      Di = !1;

    function Pi() {
      ti++
    }

    function Ai(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      di(), null !== Fi && (ee - wi >= 1e3 && (Di = ti - Zi > Je.e.sceneChange.meshesPerSecond, Zi = ti, wi = ee), xe.c.isHeld() ? Fi.paused(ee) : Fi.frame(ee, ie, He && !document.hidden && ei(), Di || ye > 0 || (0, Ke.o)()))
    }

    function Yi() {
      if (!Ji) {
        Ji = !0, null !== Fi && (Fi = null, Wi({
          noGain: void 0
        }));
        try {
          ki()
        } catch (ee) {
          console.error("The quality steps' resize to the player's n failed", ee)
        }
      }
    }

    function Vi() {
      var ee;
      null === (ee = Fi) || void 0 === ee || ee.resized(performance.now())
    }
  },
  34802: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me
    });
    var ye = He(97),
      be = He(123);

    function Me(ee, ie, He) {
      if ("webgpu" === ee) return He ? ((0, ye.seedGpuVendor)(He), {
        vendor: He,
        renderer: ""
      }) : null;
      try {
        const He = "webgl" === ee ? ie.getContext("webgl2") : ie.getContext("webgl");
        "webgl" === ee && He && (0, be.I)(He);
        const Me = null === He || void 0 === He ? void 0 : He.getExtension("WEBGL_debug_renderer_info");
        if (He && Me) {
          const ee = String(He.getParameter(Me.UNMASKED_VENDOR_WEBGL)),
            ie = String(He.getParameter(Me.UNMASKED_RENDERER_WEBGL));
          return (0, ye.seedGpuVendor)(ee), (0, be.Q)(ee, ie), {
            vendor: ee,
            renderer: ie
          }
        }
        He && (0, be.Q)(String(He.getParameter(He.VENDOR)), String(He.getParameter(He.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);