export const id = 223;
export const ids = [223];
export const modules = {
  35270: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Tb,
      f: () => Zw,
      i: () => Yw,
      j: () => Aw,
      n: () => Ew,
      o: () => Bw,
      r: () => sw,
      u: () => hw,
      w: () => fw,
      z: () => mw
    });
    var eb = Mb(309),
      Hb = Mb(26),
      pb = Mb(110),
      Vb = Mb(1821),
      gb = Mb(5273),
      lb = Mb(4139),
      Lb = Mb(4145),
      Ib = Mb(43);
    const {
      windows: Ob,
      target: Ub,
      stepDown: tb,
      stepUp: Cb,
      noGain: Eb,
      probe: Fb
    } = Lb.d, Bb = 1e3 / 60 * 1.08, sb = 1e3 / 55, mb = 1e3 / 45, hb = 1e3 / 30 * .92, zb = 1e3 / 30 * 1.08;
    class Xb {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(bb, wb) {
        const Mb = bb - this.lastMs;
        this.lastMs = bb;
        const eb = function(bb) {
          if (bb <= 0 || bb > 100) return -1;
          if (bb <= Bb) return 0;
          if (bb >= sb && bb <= mb) return 1;
          return bb >= hb && bb <= zb ? 2 : -1
        }(Mb);
        0 === eb && 2 === this.runBand && wb && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), eb !== this.runBand && (this.runBand = eb, this.runLength = 0), eb < 0 || ++this.runLength < 3 || (0 === eb ? this.votes60++ : 1 === eb ? (this.votesMid++, this.sumMidMs += Mb) : (this.votes30++, wb && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function xb(bb, wb, Mb) {
      const {
        fast: eb,
        masked: Hb,
        longFrame: pb,
        paced: Vb
      } = bb;
      return !pb && (eb && !Vb || wb) ? Hb && !Mb ? "hold" : "rise" : Hb ? bb.dropping ? "break" : "hold" : (pb ? eb || wb : eb && !Mb) ? "hold" : "break"
    }
    const jb = Ob.windowMs,
      Kb = Ob.settleMs,
      rb = Ob.graceMs,
      Rb = Ob.minIntervals,
      Db = 1e3 * Rb / jb,
      cb = Math.floor(1e4 / jb),
      Yb = Eb.backoffMs,
      Zb = Eb.maxMs;
    class fb {
      constructor(bb, wb) {
        let {
          lowest: Mb,
          startStep: eb = 0,
          noGain: Hb = null,
          upWait: pb = null,
          probeShare: Vb = 0
        } = wb;
        this.hooks = bb, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.probeFailures = void 0, this.probeUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.probeShare = void 0, this.probeQuiet = 0, this.baseFps = new Float64Array(Fb.baseWindows), this.baseCount = 0, this.baseNext = 0, this.refresh = new Xb, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = Ub.maxFps, this.lowest = Mb, this.probeShare = Vb, this.step = Math.min(eb, Mb), this.noGain = Hb, this.climbing = this.step > 0;
        const gb = Mb + 1;
        this.downUntilMs = new Array(gb).fill(0), this.downBackoffMs = new Array(gb).fill(0), this.noGainFps = new Array(gb).fill(0), this.noGainFps[0] = null === Hb ? 0 : Hb.fps, this.keptFps = new Array(gb).fill(0), this.lenientUpFps = new Array(gb).fill(0), this.lenientUpAtMs = new Array(gb).fill(0), this.upFailures = new Array(gb).fill(0), this.upUntilMs = new Array(gb).fill(0), this.probeFailures = new Array(gb).fill(0), this.probeUntilMs = new Array(gb).fill(0), null !== pb && pb.step >= 0 && pb.step < gb && (this.upUntilMs[pb.step] = pb.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(bb, Mb && !eb), !Mb) return void this.leave(bb);
        const Hb = bb - this.lastFrameMs,
          pb = this.resizeStall(bb);
        if (Hb > 2e3 && !pb && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = bb, this.quietUntilMs = Math.max(this.quietUntilMs, bb + rb), this.graceUntilMs = bb + rb, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Hb > 500 && (this.hitch(bb), pb && (this.slowStartMs = -1)), this.lastFrameMs = bb, bb >= this.quietUntilMs && this.countWindow(bb, wb, eb) || wb && bb >= this.graceUntilMs && this.countSlow(bb, eb)
      }
      countWindow(bb, wb, Mb) {
        if (this.windowStartMs < 0) return !!wb && (this.windowStartMs = bb, this.lastDrawnMs = bb, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = Mb, !1);
        if (this.windowMasked ||= Mb, !wb) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, bb - this.lastDrawnMs), this.lastDrawnMs = bb;
        const eb = bb - this.windowStartMs;
        if (eb < jb) return !1;
        const Hb = this.windowIntervals,
          pb = 1e3 * Hb / eb,
          Vb = this.windowHeld,
          gb = this.windowMaxIntervalMs,
          lb = this.windowMasked;
        if (this.windowStartMs = -1, Hb < Rb) return !1;
        this.slowStartMs = -1;
        const Lb = this.targetFps();
        return this.decide(pb, 1, {
          fast: pb >= Lb * Ub.cleanShare,
          dropping: pb < Lb * Ub.dropShare,
          masked: lb,
          longFrame: gb > Ub.cleanMaxIntervalMs,
          paced: Vb > Ub.maxHeldFrames && pb < .999 * Lb
        }, bb), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Ub.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(bb, wb) {
        if (this.slowStartMs < 0) return this.slowStartMs = bb, this.slowIntervals = 0, void(this.slowMasked = wb);
        this.slowMasked ||= wb, this.slowIntervals++;
        const Mb = bb - this.slowStartMs;
        if (Mb < 1e4) return;
        const eb = 1e3 * this.slowIntervals / Mb,
          Hb = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(bb, wb), eb < Db && (this.windowStartMs = -1, this.decide(eb, cb, {
          fast: !1,
          dropping: !0,
          masked: Hb,
          longFrame: !1,
          paced: !1
        }, bb))
      }
      resizeStall(bb) {
        return this.lastFrameMs - this.resizedMs <= Kb && bb - this.lastFrameMs <= 15e3
      }
      paused(bb) {
        this.refresh.frame(bb, !1), bb - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, bb + rb), this.graceUntilMs = bb + rb), this.lastFrameMs = bb, this.slowStartMs = -1, this.hitch(bb)
      }
      resized(bb) {
        this.resizedMs = bb, this.hitch(bb)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(bb) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(bb))
      }
      hitch(bb) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, bb + Kb)
      }
      left(bb) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun();
        const wb = this.phase;
        "watch" !== wb.kind && (this.phase = {
          kind: "watch"
        }, "down" === wb.kind && (this.downUntilMs[wb.from] = bb + Yb, this.noGainFps[wb.from] = 0, 0 === wb.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, bb + Yb)
        })), this.setStep(wb.from, 0, bb, "left"), "up" === wb.kind && (this.climbed = wb.fromClimbed))
      }
      decide(bb, wb, Mb, eb) {
        const {
          dropping: Hb,
          masked: pb
        } = Mb;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: eb,
          step: this.step,
          fps: Math.round(10 * bb) / 10,
          windows: wb,
          masked: pb,
          dropping: Hb
        });
        const Vb = this.phase;
        switch (Vb.kind) {
          case "watch": {
            pb || 1 !== wb || (this.baseFps[this.baseNext] = bb, this.baseNext = (this.baseNext + 1) % this.baseFps.length, this.baseCount = Math.min(this.baseCount + 1, this.baseFps.length));
            const Vb = !Hb && this.keptAfterDip(this.step) && bb >= this.keptFps[this.step] * Cb.recoverGain;
            return void this.watch(bb, wb, xb(Mb, Vb, !1), Hb, pb, eb)
          }
          case "down": {
            if (Vb.judged += wb, Vb.fpsSum += bb * wb, Vb.minFps = Math.min(Vb.minFps, bb), pb || (Vb.clean += wb, Vb.cleanFpsSum += bb * wb, Vb.cleanMinFps = Math.min(Vb.cleanMinFps, bb)), Vb.judged < tb.judgeWindows) return;
            const Mb = Vb.clean > 0 ? Vb.cleanFpsSum / Vb.clean : Vb.fpsSum / Vb.judged;
            if (Mb >= Vb.fromFps * tb.keepGain) {
              const bb = Vb.clean > 0 ? Vb.cleanMinFps : Vb.minFps;
              this.keepDown(Vb.from, Vb.fromFps, Mb, Math.min(bb, Vb.fromFps * tb.keepGain), eb)
            } else this.noGainFrom(Vb, Mb, eb);
            return
          }
          case "up": {
            const wb = this.keptAfterDip(Vb.from),
              gb = xb(Mb, wb && !Hb, !0);
            if ("hold" === gb && (Vb.maskedHolds += pb ? 1 : 0, ++Vb.holds <= Cb.trialHoldWindows)) return;
            if ("rise" !== gb) return pb || "hold" === gb && Vb.maskedHolds > 0 ? this.spoilTrial(Vb, bb, eb) : this.failTrialOf(Vb, bb, eb), void(this.climbed = Vb.fromClimbed);
            if (Vb.fpsSum += bb, pb || (Vb.cleanJudged++, Vb.cleanFpsSum += bb), ++Vb.judged >= Cb.trialWindows) {
              const Mb = Vb.cleanJudged > 0,
                Hb = Mb ? Vb.cleanFpsSum / Vb.cleanJudged : Vb.fpsSum / Vb.judged;
              if (wb && !this.probeBarMet(Hb, Vb.baseFps)) return Mb ? this.failTrialOf(Vb, bb, eb) : this.spoilTrial(Vb, bb, eb), void(this.climbed = Vb.fromClimbed);
              this.watchAt(this.step), this.climbed = {
                from: Vb.from,
                heldWindows: 0,
                below: Vb.fromClimbed
              }, this.lenientUpFps[this.step] = wb ? Vb.fpsSum / Vb.judged : 0, this.lenientUpAtMs[this.step] = eb, this.record(eb, bb, "up_kept")
            }
            return
          }
        }
      }
      watch(bb, wb, Mb, eb, Hb, pb) {
        const Vb = this.climbed;
        null !== Vb && !eb && !Hb && ++Vb.heldWindows >= Cb.heldWindows && (this.climbed = null, this.record(pb, bb, "dg"), this.hooks.dg(this.step)), eb ? (this.dropRun += wb, this.dropRunFpsSum += bb * wb, this.dropRunMasked ||= Hb, Hb || (this.dropRunClean += wb, this.dropRunCleanFpsSum += bb * wb)) : this.resetDropRun(), "hold" !== Mb && (this.cleanRun = "rise" === Mb ? this.cleanRun + 1 : 0), eb ? this.probeQuiet = 0 : Hb || this.probeQuiet++;
        const gb = null !== this.climbed ? Cb : tb;
        if (this.dropRun >= (this.dropRunMasked ? gb.maskedWindows : gb.dropWindows)) {
          const wb = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            Mb = this.dropRunClean >= tb.dropWindows && wb < this.noGainFps[this.step] * Eb.heavierShare;
          this.resetDropRun();
          const eb = this.climbed;
          return void(null !== eb ? (this.failUp(this.step, eb.from, bb, pb), this.climbed = eb.below) : this.step < this.lowest && (Mb || this.waitOver(pb)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: wb,
            early: !this.waitOver(pb),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, wb, pb, "down")))
        }
        const lb = this.step - 1;
        lb < 0 || pb < this.upUntilMs[lb] || (this.cleanRun >= (this.climbing ? Cb.climbWindows : Cb.cleanWindows) ? this.tryUp(bb, pb, "up") : this.probeShare > 0 && this.keptAfterDip(this.step) && this.probeQuiet >= Fb.windows && this.baseCount > 0 && pb >= this.probeUntilMs[lb] && this.tryUp(bb, pb, "probe"))
      }
      tryUp(bb, wb, Mb) {
        const eb = this.probeShare > 0 ? this.baseMedian() : 0;
        this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed,
          baseFps: eb,
          probe: "probe" === Mb,
          cleanJudged: 0,
          cleanFpsSum: 0
        }, this.setStep(this.step - 1, bb, wb, Mb)
      }
      probeBarMet(bb, wb) {
        return 0 === this.probeShare || 0 === wb || bb >= Math.min(wb, this.lastTargetFps) * this.probeShare
      }
      baseMedian() {
        const bb = Array.from(this.baseFps.subarray(0, this.baseCount)).sort(((bb, wb) => bb - wb)),
          wb = bb.length >> 1;
        return 0 === bb.length ? 0 : bb.length % 2 === 1 ? bb[wb] : (bb[wb - 1] + bb[wb]) / 2
      }
      waitOver(bb) {
        return !(0 === this.step && null !== this.noGain && bb < this.noGain.untilMs) && bb >= this.downUntilMs[this.step]
      }
      keptAfterDip(bb) {
        return this.keptFps[bb] > 0
      }
      keepDown(bb, wb, Mb, eb, Hb) {
        this.watchAt(this.step), this.keptFps[this.step] = eb;
        const pb = this.lenientUpFps[bb];
        pb > 0 && Hb - this.lenientUpAtMs[bb] < Cb.lenientFailMs && wb * Cb.recoverGain >= pb && this.failTrial(bb, Hb), this.downBackoffMs[bb] = 0, this.noGainFps[bb] = 0, this.record(Hb, Mb, "down_kept"), 0 === bb && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.nI(this.step)
      }
      noGainFrom(bb, wb, Mb) {
        var eb, Hb;
        let {
          from: pb,
          fromFps: Vb,
          early: gb
        } = bb;
        const lb = 0 === pb ? null !== (eb = null === (Hb = this.noGain) || void 0 === Hb ? void 0 : Hb.backoffMs) && void 0 !== eb ? eb : 0 : this.downBackoffMs[pb],
          Lb = 0 === lb ? Yb : gb ? lb : Math.min(2 * lb, Zb),
          Ib = Math.max(Vb, wb);
        this.downBackoffMs[pb] = Lb, this.downUntilMs[pb] = Mb + Lb, this.noGainFps[pb] = Ib, 0 === pb && (this.noGain = {
          untilMs: Mb + Lb,
          backoffMs: Lb,
          fps: Ib
        }, this.hooks.noGain(this.noGain)), this.watchAt(pb), this.setStep(pb, wb, Mb, "no_gain")
      }
      spoilTrial(bb, wb, Mb) {
        bb.probe && (this.probeUntilMs[this.step] = Mb + Cb.failWaitsMs[0]), this.watchAt(bb.from), this.setStep(bb.from, wb, Mb, "spoiled")
      }
      failTrialOf(bb, wb, Mb) {
        if (!bb.probe) return void this.failUp(this.step, bb.from, wb, Mb);
        const eb = Cb.failWaitsMs;
        this.climbing = !1, this.lenientUpFps[this.step] = 0, this.probeUntilMs[this.step] = Mb + eb[Math.min(++this.probeFailures[this.step], eb.length) - 1], this.watchAt(bb.from), this.setStep(bb.from, wb, Mb, "up_failed")
      }
      failUp(bb, wb, Mb, eb) {
        this.failTrial(bb, eb), this.watchAt(wb), this.setStep(wb, Mb, eb, "up_failed")
      }
      failTrial(bb, wb) {
        this.climbing = !1, this.lenientUpFps[bb] = 0;
        const Mb = Cb.failWaitsMs;
        this.upUntilMs[bb] = wb + Mb[Math.min(++this.upFailures[bb], Mb.length) - 1], this.hooks.upFailed(bb)
      }
      watchAt(bb) {
        this.phase = {
          kind: "watch"
        }, this.climbed = bb === this.step ? this.climbed : null, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(bb, wb, Mb, eb) {
        const Hb = bb !== this.step;
        Hb && (this.climbed = null, this.baseCount = 0, this.baseNext = 0), this.step = bb, this.record(Mb, wb, eb), Hb && (this.slowStartMs = -1, this.resized(Mb), this.hooks.changed(bb))
      }
      record(bb, wb, Mb) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: bb,
          step: this.step,
          fps: Math.round(10 * wb) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: Mb
        })
      }
    }
    var Ab = Mb(35276),
      Wb = Mb(4151),
      Jb = Mb(4505),
      Sb = Mb(35281);
    const Nb = "autoGraphics",
      vb = "autoGraphicsProbe",
      Qb = 6048e5,
      Gb = "startScale";

    function qb() {
      return (0, lb.N)(Hb.c.get("clientEscMenuOptions").pixelScale) * (0, lb.J)()
    }

    function ab() {
      return (0, lb.r)(qb())
    }
    let ib = null;

    function ub() {
      if (null === ib) {
        const bb = new URLSearchParams(window.location.search).get("stepProbe"),
          wb = Number(null !== bb && void 0 !== bb ? bb : ""),
          {
            keepShare: Mb,
            weakKeepShare: eb
          } = Lb.d.probe;
        ib = 1 === wb ? (0, Wb.g)() ? eb : Mb : wb > .5 && wb < 1 ? wb : 0, null !== bb && 0 !== wb && 0 === ib && console.warn(`?stepProbe=${bb} is not 0, 1 or a share over 0.5 and under 1: the probe is off`)
      }
      return ib
    }

    function db() {
      return ub() > 0 ? vb : Nb
    }

    function Pb() {
      const bb = Ib.i.getItem(db());
      return "object" !== typeof bb || null === bb || "string" !== typeof bb.gpu ? null : bb
    }

    function nb(bb) {
      return {
        untilEpochMs: Date.now() + (bb.untilMs - performance.now()),
        backoffMs: bb.backoffMs,
        fps: bb.fps
      }
    }

    function yb(bb) {
      return void 0 === bb || "number" !== typeof bb.fps ? null : {
        untilMs: performance.now() + (bb.untilEpochMs - Date.now()),
        backoffMs: bb.backoffMs,
        fps: bb.fps
      }
    }
    let ob = null;

    function Tb() {
      if (null === ob) {
        const bb = new URLSearchParams(window.location.search).get("msaa");
        ob = Hb.c.get("clientEscMenuOptions").antiAliasing && ("0" === bb || "1" !== bb && !(0, gb.d)("antiAliasing") && (0, Wb.g)())
      }
      return ob
    }

    function kb(bb) {
      const wb = "number" === typeof bb ? Date.now() - bb : -1;
      return wb >= 0 && wb < Qb
    }
    let bw = null;

    function ww() {
      return bw ??= (0, pb.getDeviceDefaultPixelScale)(), Mw(bw)
    }

    function Mw(bb) {
      const wb = Hb.c.get("clientEscMenuOptions");
      return wb.pixelSmoothing && !(0, gb.d)("pixelScale") && wb.pixelScale === bb
    }
    let ew = null,
      Hw = 0;

    function pw() {
      if (null === ew || Hw !== qb()) {
        var bb;
        Hw = qb();
        const wb = Number(null !== (bb = new URLSearchParams(window.location.search).get(Gb)) && void 0 !== bb ? bb : ""),
          Mb = ab();
        if (wb > 0 && wb <= 1) ew = (0, lb.D)(Mb, Mb[0] / wb);
        else {
          const bb = Pb(),
            wb = Vw(Mb, qb()),
            eb = !(0, Wb.n)() && kb(null === bb || void 0 === bb ? void 0 : bb.heldAt) && (null === bb || void 0 === bb ? void 0 : bb.heldTarget) === qb() ? null === bb || void 0 === bb ? void 0 : bb.heldN : void 0;
          ew = "number" === typeof eb ? Math.min(wb, (0, lb.D)(Mb, eb)) : wb
        }
      }
      return ew
    }

    function Vw(bb, wb) {
      return (0, lb.D)(bb, (0, lb.F)(wb))
    }

    function gw(bb, wb, Mb) {
      const eb = bb.length - 1;
      return !(0, pb.isMobile)() || ub() > 0 && (0, Wb.g)() ? eb : Math.min(eb, Math.max(Mb, Vw(bb, wb) + Lb.d.pixels.mobileRungsBelowStart))
    }

    function lw(bb, wb) {
      var Mb;
      const eb = wb.indexOf(null !== (Mb = bb.failedUpN) && void 0 !== Mb ? Mb : -1);
      return eb >= 0 && kb(bb.failedUpAt) ? {
        step: eb,
        untilMs: performance.now() + Lb.d.stepUp.failWaitsMs[0]
      } : null
    }
    let Lw = null,
      Iw = !1,
      Ow = "";
    const Uw = new Set;

    function tw() {
      for (const bb of Uw) bb()
    }

    function Cw() {
      return Iw ? null : (xw(), null === Lw ? (null !== bw || null !== (0, pb.peekGpuVendor)() ? ww() : Mw(1)) ? pw() : null : ww() ? Lw.currentStep() : null)
    }

    function Ew() {
      const bb = Cw();
      if (null === bb) return null;
      const wb = ab(),
        Mb = wb[Math.min(bb, wb.length - 1)];
      return Mb === Fw() ? null : Mb
    }

    function Fw() {
      return (0, lb.x)(Hb.c.get("clientEscMenuOptions").pixelScale, (0, lb.J)())
    }

    function Bw() {
      return null !== Lw && null !== Ew()
    }

    function sw() {
      if (null === Lw) return !1;
      const bb = Ew();
      return null !== bb && bb > Fw()
    }

    function mw(bb) {
      return Uw.add(bb), () => {
        Uw.delete(bb)
      }
    }

    function hw(bb, wb, Mb) {
      var Hb;
      if (null !== Lw || Iw || (0, Wb.n)()) return;
      const pb = (0, Ab.d)(bb, wb, Mb);
      null !== pb && ((0, Wb.q)(pb.vendor), "" !== pb.renderer && (0, eb.v)(pb.vendor, pb.renderer)), Ow = `${bb}:${(null===pb||void 0===pb?void 0:pb.renderer)||(null===pb||void 0===pb?void 0:pb.vendor)||""}`, (null === (Hb = Pb()) || void 0 === Hb ? void 0 : Hb.gpu) !== Ow && (Ib.i.setItem(db(), {
        gpu: Ow
      }), ew = null), Xw(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var bb;
          null === (bb = Lw) || void 0 === bb || bb.hidden()
        } catch (wb) {
          fw(), console.error("The quality steps stopped", wb)
        }
      }))
    }
    let zw = 0;

    function Xw() {
      var bb;
      const wb = null !== (bb = Pb()) && void 0 !== bb ? bb : {
          gpu: Ow
        },
        Mb = ab();
      zw = qb();
      const eb = pw();
      Lw = new fb({
          changed: tw,
          nI: () => {
            jw({
              heldN: void 0
            })
          },
          dg: bb => {
            var wb;
            const Mb = ab()[bb],
              eb = {
                heldN: Mb,
                heldAt: Date.now(),
                heldTarget: qb()
              };
            (null === (wb = Pb()) || void 0 === wb ? void 0 : wb.failedUpN) === Mb && (eb.failedUpN = void 0), jw(eb)
          },
          upFailed: bb => {
            jw({
              failedUpN: ab()[bb],
              failedUpAt: Date.now()
            })
          },
          noGain: bb => {
            jw({
              noGain: null === bb ? void 0 : nb(bb)
            })
          }
        }, {
          lowest: gw(Mb, zw, eb),
          startStep: eb,
          noGain: yb(wb.noGain),
          upWait: lw(wb, Mb),
          probeShare: ub()
        }),
        function(bb) {
          const wb = {
            get step() {
              return bb.currentStep()
            },
            get n() {
              var bb;
              return null !== (bb = Ew()) && void 0 !== bb ? bb : Fw()
            },
            get scale() {
              var bb;
              return ab()[0] / (null !== (bb = Ew()) && void 0 !== bb ? bb : Fw())
            },
            get msaaOff() {
              return Tb()
            },
            get probeShare() {
              return ub()
            },
            log: bb.log,
            windows: bb.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: wb,
            configurable: !0
          })
        }(Lw), tw()
    }

    function xw() {
      null !== Lw && qb() !== zw && (ew = null, Xw())
    }

    function jw(bb) {
      Ib.i.setItem(db(), {
        ...Pb(),
        ...bb,
        gpu: Ow
      })
    }
    let Kw = 0,
      rw = 0,
      Rw = 0,
      Dw = !1;

    function Yw() {
      Kw++
    }

    function Zw(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      xw(), null !== Lw && (bb - Rw >= 1e3 && (Dw = Kw - rw > Lb.d.sceneChange.meshesPerSecond, rw = Kw, Rw = bb), Sb.e.isHeld() || Jb.d.isHeld() ? Lw.paused(bb) : Lw.frame(bb, wb, Mb && !document.hidden && ww(), Dw || eb > 0 || (0, Vb.q)()))
    }

    function fw() {
      if (!Iw) {
        Iw = !0, null !== Lw && (Lw = null, jw({
          noGain: void 0
        }));
        try {
          tw()
        } catch (bb) {
          console.error("The quality steps' resize to the player's n failed", bb)
        }
      }
    }

    function Aw() {
      var bb;
      null === (bb = Lw) || void 0 === bb || bb.resized(performance.now())
    }
  },
  35276: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb
    });
    var eb = Mb(110),
      Hb = Mb(153);

    function pb(bb, wb, Mb) {
      if ("webgpu" === bb) return Mb ? ((0, eb.seedGpuVendor)(Mb), {
        vendor: Mb,
        renderer: ""
      }) : null;
      try {
        const Mb = "webgl" === bb ? wb.getContext("webgl2") : wb.getContext("webgl");
        "webgl" === bb && Mb && (0, Hb.B)(Mb);
        const pb = null === Mb || void 0 === Mb ? void 0 : Mb.getExtension("WEBGL_debug_renderer_info");
        if (Mb && pb) {
          const bb = String(Mb.getParameter(pb.UNMASKED_VENDOR_WEBGL)),
            wb = String(Mb.getParameter(pb.UNMASKED_RENDERER_WEBGL));
          return (0, eb.seedGpuVendor)(bb), (0, Hb.H)(bb, wb), {
            vendor: bb,
            renderer: wb
          }
        }
        Mb && (0, Hb.H)(String(Mb.getParameter(Mb.VENDOR)), String(Mb.getParameter(Mb.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);