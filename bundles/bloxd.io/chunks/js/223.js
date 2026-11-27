export const id = 223;
export const ids = [223];
export const modules = {
  35386: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => sr,
      f: () => PS,
      i: () => XS,
      k: () => qS,
      n: () => tS,
      r: () => zS,
      t: () => YS,
      w: () => eS,
      z: () => HS,
      A: () => nS
    });
    var Zr = Qr(285),
      Wr = Qr(26),
      ar = Qr(109),
      jr = Qr(1758),
      Ir = Qr(5157),
      fr = Qr(3995),
      Er = Qr(3998),
      pr = Qr(43);
    const {
      windows: xr,
      target: mr,
      stepDown: Nr,
      stepUp: Ur,
      noGain: tr,
      probe: hr
    } = Er.b, zr = 1e3 / 60 * 1.08, Yr = 1e3 / 55, nr = 1e3 / 45, er = 1e3 / 30 * .92, Kr = 1e3 / 30 * 1.08;
    class yr {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(rr, Sr) {
        const Qr = rr - this.lastMs;
        this.lastMs = rr;
        const Zr = function(rr) {
          if (rr <= 0 || rr > 100) return -1;
          if (rr <= zr) return 0;
          if (rr >= Yr && rr <= nr) return 1;
          return rr >= er && rr <= Kr ? 2 : -1
        }(Qr);
        0 === Zr && 2 === this.runBand && Sr && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), Zr !== this.runBand && (this.runBand = Zr, this.runLength = 0), Zr < 0 || ++this.runLength < 3 || (0 === Zr ? this.votes60++ : 1 === Zr ? (this.votesMid++, this.sumMidMs += Qr) : (this.votes30++, Sr && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function Br(rr, Sr, Qr) {
      const {
        fast: Zr,
        masked: Wr,
        longFrame: ar,
        paced: jr
      } = rr;
      return !ar && (Zr && !jr || Sr) ? Wr && !Qr ? "hold" : "rise" : Wr ? rr.dropping ? "break" : "hold" : (ar ? Zr || Sr : Zr && !Qr) ? "hold" : "break"
    }
    const Tr = xr.windowMs,
      vr = xr.settleMs,
      Or = xr.graceMs,
      Lr = xr.minIntervals,
      lr = 1e3 * Lr / Tr,
      Xr = Math.floor(1e4 / Tr),
      Pr = tr.backoffMs,
      Hr = tr.maxMs;
    class qr {
      constructor(rr, Sr) {
        let {
          lowest: Qr,
          startStep: Zr = 0,
          noGain: Wr = null,
          upWait: ar = null,
          probeShare: jr = 0
        } = Sr;
        this.hooks = rr, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.probeFailures = void 0, this.probeUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.probeShare = void 0, this.probeQuiet = 0, this.baseFps = new Float64Array(hr.baseWindows), this.baseCount = 0, this.baseNext = 0, this.refresh = new yr, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = mr.maxFps, this.lowest = Qr, this.probeShare = jr, this.step = Math.min(Zr, Qr), this.noGain = Wr, this.climbing = this.step > 0;
        const Ir = Qr + 1;
        this.downUntilMs = new Array(Ir).fill(0), this.downBackoffMs = new Array(Ir).fill(0), this.noGainFps = new Array(Ir).fill(0), this.noGainFps[0] = null === Wr ? 0 : Wr.fps, this.keptFps = new Array(Ir).fill(0), this.lenientUpFps = new Array(Ir).fill(0), this.lenientUpAtMs = new Array(Ir).fill(0), this.upFailures = new Array(Ir).fill(0), this.upUntilMs = new Array(Ir).fill(0), this.probeFailures = new Array(Ir).fill(0), this.probeUntilMs = new Array(Ir).fill(0), null !== ar && ar.step >= 0 && ar.step < Ir && (this.upUntilMs[ar.step] = ar.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(rr, Qr && !Zr), !Qr) return void this.leave(rr);
        const Wr = rr - this.lastFrameMs,
          ar = this.resizeStall(rr);
        if (Wr > 2e3 && !ar && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = rr, this.quietUntilMs = Math.max(this.quietUntilMs, rr + Or), this.graceUntilMs = rr + Or, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Wr > 500 && (this.hitch(rr), ar && (this.slowStartMs = -1)), this.lastFrameMs = rr, rr >= this.quietUntilMs && this.countWindow(rr, Sr, Zr) || Sr && rr >= this.graceUntilMs && this.countSlow(rr, Zr)
      }
      countWindow(rr, Sr, Qr) {
        if (this.windowStartMs < 0) return !!Sr && (this.windowStartMs = rr, this.lastDrawnMs = rr, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = Qr, !1);
        if (this.windowMasked ||= Qr, !Sr) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, rr - this.lastDrawnMs), this.lastDrawnMs = rr;
        const Zr = rr - this.windowStartMs;
        if (Zr < Tr) return !1;
        const Wr = this.windowIntervals,
          ar = 1e3 * Wr / Zr,
          jr = this.windowHeld,
          Ir = this.windowMaxIntervalMs,
          fr = this.windowMasked;
        if (this.windowStartMs = -1, Wr < Lr) return !1;
        this.slowStartMs = -1;
        const Er = this.targetFps();
        return this.decide(ar, 1, {
          fast: ar >= Er * mr.cleanShare,
          dropping: ar < Er * mr.dropShare,
          masked: fr,
          longFrame: Ir > mr.cleanMaxIntervalMs,
          paced: jr > mr.maxHeldFrames && ar < .999 * Er
        }, rr), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(mr.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(rr, Sr) {
        if (this.slowStartMs < 0) return this.slowStartMs = rr, this.slowIntervals = 0, void(this.slowMasked = Sr);
        this.slowMasked ||= Sr, this.slowIntervals++;
        const Qr = rr - this.slowStartMs;
        if (Qr < 1e4) return;
        const Zr = 1e3 * this.slowIntervals / Qr,
          Wr = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(rr, Sr), Zr < lr && (this.windowStartMs = -1, this.decide(Zr, Xr, {
          fast: !1,
          dropping: !0,
          masked: Wr,
          longFrame: !1,
          paced: !1
        }, rr))
      }
      resizeStall(rr) {
        return this.lastFrameMs - this.resizedMs <= vr && rr - this.lastFrameMs <= 15e3
      }
      paused(rr) {
        this.refresh.frame(rr, !1), rr - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, rr + Or), this.graceUntilMs = rr + Or), this.lastFrameMs = rr, this.slowStartMs = -1, this.hitch(rr)
      }
      resized(rr) {
        this.resizedMs = rr, this.hitch(rr)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(rr) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(rr))
      }
      hitch(rr) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, rr + vr)
      }
      left(rr) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun();
        const Sr = this.phase;
        "watch" !== Sr.kind && (this.phase = {
          kind: "watch"
        }, "down" === Sr.kind && (this.downUntilMs[Sr.from] = rr + Pr, this.noGainFps[Sr.from] = 0, 0 === Sr.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, rr + Pr)
        })), this.setStep(Sr.from, 0, rr, "left"), "up" === Sr.kind && (this.climbed = Sr.fromClimbed))
      }
      decide(rr, Sr, Qr, Zr) {
        const {
          dropping: Wr,
          masked: ar
        } = Qr;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: Zr,
          step: this.step,
          fps: Math.round(10 * rr) / 10,
          windows: Sr,
          masked: ar,
          dropping: Wr
        });
        const jr = this.phase;
        switch (jr.kind) {
          case "watch": {
            ar || 1 !== Sr || (this.baseFps[this.baseNext] = rr, this.baseNext = (this.baseNext + 1) % this.baseFps.length, this.baseCount = Math.min(this.baseCount + 1, this.baseFps.length));
            const jr = !Wr && this.keptAfterDip(this.step) && rr >= this.keptFps[this.step] * Ur.recoverGain;
            return void this.watch(rr, Sr, Br(Qr, jr, !1), Wr, ar, Zr)
          }
          case "down": {
            if (jr.judged += Sr, jr.fpsSum += rr * Sr, jr.minFps = Math.min(jr.minFps, rr), ar || (jr.clean += Sr, jr.cleanFpsSum += rr * Sr, jr.cleanMinFps = Math.min(jr.cleanMinFps, rr)), jr.judged < Nr.judgeWindows) return;
            const Qr = jr.clean > 0 ? jr.cleanFpsSum / jr.clean : jr.fpsSum / jr.judged;
            if (Qr >= jr.fromFps * Nr.keepGain) {
              const rr = jr.clean > 0 ? jr.cleanMinFps : jr.minFps;
              this.keepDown(jr.from, jr.fromFps, Qr, Math.min(rr, jr.fromFps * Nr.keepGain), Zr)
            } else this.noGainFrom(jr, Qr, Zr);
            return
          }
          case "up": {
            const Sr = this.keptAfterDip(jr.from),
              Ir = Br(Qr, Sr && !Wr, !0);
            if ("hold" === Ir && (jr.maskedHolds += ar ? 1 : 0, ++jr.holds <= Ur.trialHoldWindows)) return;
            if ("rise" !== Ir) return ar || "hold" === Ir && jr.maskedHolds > 0 ? this.spoilTrial(jr, rr, Zr) : this.failTrialOf(jr, rr, Zr), void(this.climbed = jr.fromClimbed);
            if (jr.fpsSum += rr, ar || (jr.cleanJudged++, jr.cleanFpsSum += rr), ++jr.judged >= Ur.trialWindows) {
              const Qr = jr.cleanJudged > 0,
                Wr = Qr ? jr.cleanFpsSum / jr.cleanJudged : jr.fpsSum / jr.judged;
              if (Sr && !this.probeBarMet(Wr, jr.baseFps)) return Qr ? this.failTrialOf(jr, rr, Zr) : this.spoilTrial(jr, rr, Zr), void(this.climbed = jr.fromClimbed);
              this.watchAt(this.step), this.climbed = {
                from: jr.from,
                heldWindows: 0,
                below: jr.fromClimbed
              }, this.lenientUpFps[this.step] = Sr ? jr.fpsSum / jr.judged : 0, this.lenientUpAtMs[this.step] = Zr, this.record(Zr, rr, "up_kept")
            }
            return
          }
        }
      }
      watch(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = this.climbed;
        null !== jr && !Zr && !Wr && ++jr.heldWindows >= Ur.heldWindows && (this.climbed = null, this.record(ar, rr, "wI"), this.hooks.wI(this.step)), Zr ? (this.dropRun += Sr, this.dropRunFpsSum += rr * Sr, this.dropRunMasked ||= Wr, Wr || (this.dropRunClean += Sr, this.dropRunCleanFpsSum += rr * Sr)) : this.resetDropRun(), "hold" !== Qr && (this.cleanRun = "rise" === Qr ? this.cleanRun + 1 : 0), Zr ? this.probeQuiet = 0 : Wr || this.probeQuiet++;
        const Ir = null !== this.climbed ? Ur : Nr;
        if (this.dropRun >= (this.dropRunMasked ? Ir.maskedWindows : Ir.dropWindows)) {
          const Sr = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            Qr = this.dropRunClean >= Nr.dropWindows && Sr < this.noGainFps[this.step] * tr.heavierShare;
          this.resetDropRun();
          const Zr = this.climbed;
          return void(null !== Zr ? (this.failUp(this.step, Zr.from, rr, ar), this.climbed = Zr.below) : this.step < this.lowest && (Qr || this.waitOver(ar)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Sr,
            early: !this.waitOver(ar),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, Sr, ar, "down")))
        }
        const fr = this.step - 1;
        fr < 0 || ar < this.upUntilMs[fr] || (this.cleanRun >= (this.climbing ? Ur.climbWindows : Ur.cleanWindows) ? this.tryUp(rr, ar, "up") : this.probeShare > 0 && this.keptAfterDip(this.step) && this.probeQuiet >= hr.windows && this.baseCount > 0 && ar >= this.probeUntilMs[fr] && this.tryUp(rr, ar, "probe"))
      }
      tryUp(rr, Sr, Qr) {
        const Zr = this.probeShare > 0 ? this.baseMedian() : 0;
        this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed,
          baseFps: Zr,
          probe: "probe" === Qr,
          cleanJudged: 0,
          cleanFpsSum: 0
        }, this.setStep(this.step - 1, rr, Sr, Qr)
      }
      probeBarMet(rr, Sr) {
        return 0 === this.probeShare || 0 === Sr || rr >= Math.min(Sr, this.lastTargetFps) * this.probeShare
      }
      baseMedian() {
        const rr = Array.from(this.baseFps.subarray(0, this.baseCount)).sort(((rr, Sr) => rr - Sr)),
          Sr = rr.length >> 1;
        return 0 === rr.length ? 0 : rr.length % 2 === 1 ? rr[Sr] : (rr[Sr - 1] + rr[Sr]) / 2
      }
      waitOver(rr) {
        return !(0 === this.step && null !== this.noGain && rr < this.noGain.untilMs) && rr >= this.downUntilMs[this.step]
      }
      keptAfterDip(rr) {
        return this.keptFps[rr] > 0
      }
      keepDown(rr, Sr, Qr, Zr, Wr) {
        this.watchAt(this.step), this.keptFps[this.step] = Zr;
        const ar = this.lenientUpFps[rr];
        ar > 0 && Wr - this.lenientUpAtMs[rr] < Ur.lenientFailMs && Sr * Ur.recoverGain >= ar && this.failTrial(rr, Wr), this.downBackoffMs[rr] = 0, this.noGainFps[rr] = 0, this.record(Wr, Qr, "down_kept"), 0 === rr && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.sp(this.step)
      }
      noGainFrom(rr, Sr, Qr) {
        var Zr, Wr;
        let {
          from: ar,
          fromFps: jr,
          early: Ir
        } = rr;
        const fr = 0 === ar ? null !== (Zr = null === (Wr = this.noGain) || void 0 === Wr ? void 0 : Wr.backoffMs) && void 0 !== Zr ? Zr : 0 : this.downBackoffMs[ar],
          Er = 0 === fr ? Pr : Ir ? fr : Math.min(2 * fr, Hr),
          pr = Math.max(jr, Sr);
        this.downBackoffMs[ar] = Er, this.downUntilMs[ar] = Qr + Er, this.noGainFps[ar] = pr, 0 === ar && (this.noGain = {
          untilMs: Qr + Er,
          backoffMs: Er,
          fps: pr
        }, this.hooks.noGain(this.noGain)), this.watchAt(ar), this.setStep(ar, Sr, Qr, "no_gain")
      }
      spoilTrial(rr, Sr, Qr) {
        rr.probe && (this.probeUntilMs[this.step] = Qr + Ur.failWaitsMs[0]), this.watchAt(rr.from), this.setStep(rr.from, Sr, Qr, "spoiled")
      }
      failTrialOf(rr, Sr, Qr) {
        if (!rr.probe) return void this.failUp(this.step, rr.from, Sr, Qr);
        const Zr = Ur.failWaitsMs;
        this.climbing = !1, this.lenientUpFps[this.step] = 0, this.probeUntilMs[this.step] = Qr + Zr[Math.min(++this.probeFailures[this.step], Zr.length) - 1], this.watchAt(rr.from), this.setStep(rr.from, Sr, Qr, "up_failed")
      }
      failUp(rr, Sr, Qr, Zr) {
        this.failTrial(rr, Zr), this.watchAt(Sr), this.setStep(Sr, Qr, Zr, "up_failed")
      }
      failTrial(rr, Sr) {
        this.climbing = !1, this.lenientUpFps[rr] = 0;
        const Qr = Ur.failWaitsMs;
        this.upUntilMs[rr] = Sr + Qr[Math.min(++this.upFailures[rr], Qr.length) - 1], this.hooks.upFailed(rr)
      }
      watchAt(rr) {
        this.phase = {
          kind: "watch"
        }, this.climbed = rr === this.step ? this.climbed : null, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(rr, Sr, Qr, Zr) {
        const Wr = rr !== this.step;
        Wr && (this.climbed = null, this.baseCount = 0, this.baseNext = 0), this.step = rr, this.record(Qr, Sr, Zr), Wr && (this.slowStartMs = -1, this.resized(Qr), this.hooks.changed(rr))
      }
      record(rr, Sr, Qr) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: rr,
          step: this.step,
          fps: Math.round(10 * Sr) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: Qr
        })
      }
    }
    var Rr = Qr(35392),
      gr = Qr(4001),
      Cr = Qr(4344),
      Mr = Qr(35399);
    const Gr = "autoGraphics",
      kr = "autoGraphicsProbe",
      Ar = 6048e5,
      Vr = "startScale";

    function ir() {
      return (0, fr.L)(Wr.c.get("clientEscMenuOptions").pixelScale) * (0, fr.J)()
    }

    function wr() {
      return (0, fr.r)(ir())
    }
    let cr = null;

    function Fr() {
      if (null === cr) {
        const rr = new URLSearchParams(window.location.search).get("stepProbe"),
          Sr = Number(null !== rr && void 0 !== rr ? rr : ""),
          {
            keepShare: Qr,
            weakKeepShare: Zr
          } = Er.b.probe;
        cr = 1 === Sr ? (0, gr.i)() ? Zr : Qr : Sr > .5 && Sr < 1 ? Sr : 0, null !== rr && 0 !== Sr && 0 === cr && console.warn(`?stepProbe=${rr} is not 0, 1 or a share over 0.5 and under 1: the probe is off`)
      }
      return cr
    }

    function or() {
      return Fr() > 0 ? kr : Gr
    }

    function br() {
      const rr = pr.j.getItem(or());
      return "object" !== typeof rr || null === rr || "string" !== typeof rr.gpu ? null : rr
    }

    function Jr(rr) {
      return {
        untilEpochMs: Date.now() + (rr.untilMs - performance.now()),
        backoffMs: rr.backoffMs,
        fps: rr.fps
      }
    }

    function Dr(rr) {
      return void 0 === rr || "number" !== typeof rr.fps ? null : {
        untilMs: performance.now() + (rr.untilEpochMs - Date.now()),
        backoffMs: rr.backoffMs,
        fps: rr.fps
      }
    }
    let dr = null;

    function sr() {
      if (null === dr) {
        const rr = new URLSearchParams(window.location.search).get("msaa");
        dr = Wr.c.get("clientEscMenuOptions").antiAliasing && ("0" === rr || "1" !== rr && !(0, Ir.b)("antiAliasing") && (0, gr.i)())
      }
      return dr
    }

    function ur(rr) {
      const Sr = "number" === typeof rr ? Date.now() - rr : -1;
      return Sr >= 0 && Sr < Ar
    }
    let rS = null;

    function SS() {
      return rS ??= (0, ar.getDeviceDefaultPixelScale)(), QS(rS)
    }

    function QS(rr) {
      const Sr = Wr.c.get("clientEscMenuOptions");
      return Sr.pixelSmoothing && !(0, Ir.b)("pixelScale") && Sr.pixelScale === rr
    }
    let ZS = null,
      WS = 0;

    function aS() {
      if (null === ZS || WS !== ir()) {
        var rr;
        WS = ir();
        const Sr = Number(null !== (rr = new URLSearchParams(window.location.search).get(Vr)) && void 0 !== rr ? rr : ""),
          Qr = wr();
        if (Sr > 0 && Sr <= 1) ZS = (0, fr.C)(Qr, Qr[0] / Sr);
        else {
          const rr = br(),
            Sr = jS(Qr, ir()),
            Zr = !(0, gr.o)() && ur(null === rr || void 0 === rr ? void 0 : rr.heldAt) && (null === rr || void 0 === rr ? void 0 : rr.heldTarget) === ir() ? null === rr || void 0 === rr ? void 0 : rr.heldN : void 0;
          ZS = "number" === typeof Zr ? Math.min(Sr, (0, fr.C)(Qr, Zr)) : Sr
        }
      }
      return ZS
    }

    function jS(rr, Sr) {
      return (0, fr.C)(rr, (0, fr.G)(Sr))
    }

    function IS(rr, Sr, Qr) {
      const Zr = rr.length - 1;
      return !(0, ar.isMobile)() || Fr() > 0 && (0, gr.i)() ? Zr : Math.min(Zr, Math.max(Qr, jS(rr, Sr) + Er.b.pixels.mobileRungsBelowStart))
    }

    function fS(rr, Sr) {
      var Qr;
      const Zr = Sr.indexOf(null !== (Qr = rr.failedUpN) && void 0 !== Qr ? Qr : -1);
      return Zr >= 0 && ur(rr.failedUpAt) ? {
        step: Zr,
        untilMs: performance.now() + Er.b.stepUp.failWaitsMs[0]
      } : null
    }
    let ES = null,
      pS = !1,
      xS = "";
    const mS = new Set;

    function NS() {
      for (const rr of mS) rr()
    }

    function US() {
      return pS ? null : (BS(), null === ES ? (null !== rS || null !== (0, ar.peekGpuVendor)() ? SS() : QS(1)) ? aS() : null : SS() ? ES.currentStep() : null)
    }

    function tS() {
      const rr = US();
      if (null === rr) return null;
      const Sr = wr(),
        Qr = Sr[Math.min(rr, Sr.length - 1)];
      return Qr === hS() ? null : Qr
    }

    function hS() {
      return (0, fr.y)(Wr.c.get("clientEscMenuOptions").pixelScale, (0, fr.J)())
    }

    function zS() {
      return null !== ES && null !== tS()
    }

    function YS() {
      if (null === ES) return !1;
      const rr = tS();
      return null !== rr && rr > hS()
    }

    function nS(rr) {
      return mS.add(rr), () => {
        mS.delete(rr)
      }
    }

    function eS(rr, Sr, Qr) {
      var Wr;
      if (null !== ES || pS || (0, gr.o)()) return;
      const ar = (0, Rr.d)(rr, Sr, Qr);
      null !== ar && ((0, gr.q)(ar.vendor), "" !== ar.renderer && (0, Zr.o)(ar.vendor, ar.renderer)), xS = `${rr}:${(null===ar||void 0===ar?void 0:ar.renderer)||(null===ar||void 0===ar?void 0:ar.vendor)||""}`, (null === (Wr = br()) || void 0 === Wr ? void 0 : Wr.gpu) !== xS && (pr.j.setItem(or(), {
        gpu: xS
      }), ZS = null), yS(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var rr;
          null === (rr = ES) || void 0 === rr || rr.hidden()
        } catch (Sr) {
          HS(), console.error("The quality steps stopped", Sr)
        }
      }))
    }
    let KS = 0;

    function yS() {
      var rr;
      const Sr = null !== (rr = br()) && void 0 !== rr ? rr : {
          gpu: xS
        },
        Qr = wr();
      KS = ir();
      const Zr = aS();
      ES = new qr({
          changed: NS,
          sp: () => {
            TS({
              heldN: void 0
            })
          },
          wI: rr => {
            var Sr;
            const Qr = wr()[rr],
              Zr = {
                heldN: Qr,
                heldAt: Date.now(),
                heldTarget: ir()
              };
            (null === (Sr = br()) || void 0 === Sr ? void 0 : Sr.failedUpN) === Qr && (Zr.failedUpN = void 0), TS(Zr)
          },
          upFailed: rr => {
            TS({
              failedUpN: wr()[rr],
              failedUpAt: Date.now()
            })
          },
          noGain: rr => {
            TS({
              noGain: null === rr ? void 0 : Jr(rr)
            })
          }
        }, {
          lowest: IS(Qr, KS, Zr),
          startStep: Zr,
          noGain: Dr(Sr.noGain),
          upWait: fS(Sr, Qr),
          probeShare: Fr()
        }),
        function(rr) {
          const Sr = {
            get step() {
              return rr.currentStep()
            },
            get n() {
              var rr;
              return null !== (rr = tS()) && void 0 !== rr ? rr : hS()
            },
            get scale() {
              var rr;
              return wr()[0] / (null !== (rr = tS()) && void 0 !== rr ? rr : hS())
            },
            get msaaOff() {
              return sr()
            },
            get probeShare() {
              return Fr()
            },
            log: rr.log,
            windows: rr.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Sr,
            configurable: !0
          })
        }(ES), NS()
    }

    function BS() {
      null !== ES && ir() !== KS && (ZS = null, yS())
    }

    function TS(rr) {
      pr.j.setItem(or(), {
        ...br(),
        ...rr,
        gpu: xS
      })
    }
    let vS = 0,
      OS = 0,
      LS = 0,
      lS = !1;

    function XS() {
      vS++
    }

    function PS(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      BS(), null !== ES && (rr - LS >= 1e3 && (lS = vS - OS > Er.b.sceneChange.meshesPerSecond, OS = vS, LS = rr), Mr.d.isHeld() || Cr.e.isHeld() ? ES.paused(rr) : ES.frame(rr, Sr, Qr && !document.hidden && SS(), lS || Zr > 0 || (0, jr.l)()))
    }

    function HS() {
      if (!pS) {
        pS = !0, null !== ES && (ES = null, TS({
          noGain: void 0
        }));
        try {
          NS()
        } catch (rr) {
          console.error("The quality steps' resize to the player's n failed", rr)
        }
      }
    }

    function qS() {
      var rr;
      null === (rr = ES) || void 0 === rr || rr.resized(performance.now())
    }
  },
  35392: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(109),
      Wr = Qr(135);

    function ar(rr, Sr, Qr) {
      if ("webgpu" === rr) return Qr ? ((0, Zr.seedGpuVendor)(Qr), {
        vendor: Qr,
        renderer: ""
      }) : null;
      try {
        const Qr = "webgl" === rr ? Sr.getContext("webgl2") : Sr.getContext("webgl");
        "webgl" === rr && Qr && (0, Wr.G)(Qr);
        const ar = null === Qr || void 0 === Qr ? void 0 : Qr.getExtension("WEBGL_debug_renderer_info");
        if (Qr && ar) {
          const rr = String(Qr.getParameter(ar.UNMASKED_VENDOR_WEBGL)),
            Sr = String(Qr.getParameter(ar.UNMASKED_RENDERER_WEBGL));
          return (0, Zr.seedGpuVendor)(rr), (0, Wr.M)(rr, Sr), {
            vendor: rr,
            renderer: Sr
          }
        }
        Qr && (0, Wr.M)(String(Qr.getParameter(Qr.VENDOR)), String(Qr.getParameter(Qr.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);