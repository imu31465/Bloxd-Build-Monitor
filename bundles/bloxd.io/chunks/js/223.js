export const id = 223;
export const ids = [223];
export const modules = {
  35471: (dd, Od, md) => {
    md.d(Od, {
      d: () => dO,
      f: () => VO,
      j: () => uO,
      k: () => AO,
      m: () => bO,
      n: () => pO,
      o: () => YO,
      s: () => wO,
      w: () => iO,
      A: () => gO
    });
    var Wd = md(310),
      Fd = md(29),
      Rd = md(107),
      Xd = md(1765),
      Kd = md(5099),
      hd = md(3973),
      vd = md(3976),
      Qd = md(46);
    const {
      windows: td,
      target: od,
      stepDown: Nd,
      stepUp: qd,
      noGain: Hd,
      probe: yd
    } = vd.e, bd = 1e3 / 60 * 1.08, Td = 1e3 / 55, pd = 1e3 / 45, Yd = 1e3 / 30 * .92, gd = 1e3 / 30 * 1.08;
    class wd {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(dd, Od) {
        const md = dd - this.lastMs;
        this.lastMs = dd;
        const Wd = function(dd) {
          if (dd <= 0 || dd > 100) return -1;
          if (dd <= bd) return 0;
          if (dd >= Td && dd <= pd) return 1;
          return dd >= Yd && dd <= gd ? 2 : -1
        }(md);
        0 === Wd && 2 === this.runBand && Od && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), Wd !== this.runBand && (this.runBand = Wd, this.runLength = 0), Wd < 0 || ++this.runLength < 3 || (0 === Wd ? this.votes60++ : 1 === Wd ? (this.votesMid++, this.sumMidMs += md) : (this.votes30++, Od && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function Ed(dd, Od, md) {
      const {
        fast: Wd,
        masked: Fd,
        longFrame: Rd,
        paced: Xd
      } = dd;
      return !Rd && (Wd && !Xd || Od) ? Fd && !md ? "hold" : "rise" : Fd ? dd.dropping ? "break" : "hold" : (Rd ? Wd || Od : Wd && !md) ? "hold" : "break"
    }
    const Jd = td.windowMs,
      Ud = td.settleMs,
      xd = td.graceMs,
      Bd = td.minIntervals,
      Sd = 1e3 * Bd / Jd,
      sd = Math.floor(1e4 / Jd),
      ud = Hd.backoffMs,
      Vd = Hd.maxMs;
    class Ad {
      constructor(dd, Od) {
        let {
          lowest: md,
          startStep: Wd = 0,
          noGain: Fd = null,
          upWait: Rd = null,
          probeShare: Xd = 0
        } = Od;
        this.hooks = dd, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.probeFailures = void 0, this.probeUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.probeShare = void 0, this.probeQuiet = 0, this.baseFps = new Float64Array(yd.baseWindows), this.baseCount = 0, this.baseNext = 0, this.refresh = new wd, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = od.maxFps, this.lowest = md, this.probeShare = Xd, this.step = Math.min(Wd, md), this.noGain = Fd, this.climbing = this.step > 0;
        const Kd = md + 1;
        this.downUntilMs = new Array(Kd).fill(0), this.downBackoffMs = new Array(Kd).fill(0), this.noGainFps = new Array(Kd).fill(0), this.noGainFps[0] = null === Fd ? 0 : Fd.fps, this.keptFps = new Array(Kd).fill(0), this.lenientUpFps = new Array(Kd).fill(0), this.lenientUpAtMs = new Array(Kd).fill(0), this.upFailures = new Array(Kd).fill(0), this.upUntilMs = new Array(Kd).fill(0), this.probeFailures = new Array(Kd).fill(0), this.probeUntilMs = new Array(Kd).fill(0), null !== Rd && Rd.step >= 0 && Rd.step < Kd && (this.upUntilMs[Rd.step] = Rd.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(dd, md && !Wd), !md) return void this.leave(dd);
        const Fd = dd - this.lastFrameMs,
          Rd = this.resizeStall(dd);
        if (Fd > 2e3 && !Rd && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = dd, this.quietUntilMs = Math.max(this.quietUntilMs, dd + xd), this.graceUntilMs = dd + xd, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Fd > 500 && (this.hitch(dd), Rd && (this.slowStartMs = -1)), this.lastFrameMs = dd, dd >= this.quietUntilMs && this.countWindow(dd, Od, Wd) || Od && dd >= this.graceUntilMs && this.countSlow(dd, Wd)
      }
      countWindow(dd, Od, md) {
        if (this.windowStartMs < 0) return !!Od && (this.windowStartMs = dd, this.lastDrawnMs = dd, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = md, !1);
        if (this.windowMasked ||= md, !Od) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, dd - this.lastDrawnMs), this.lastDrawnMs = dd;
        const Wd = dd - this.windowStartMs;
        if (Wd < Jd) return !1;
        const Fd = this.windowIntervals,
          Rd = 1e3 * Fd / Wd,
          Xd = this.windowHeld,
          Kd = this.windowMaxIntervalMs,
          hd = this.windowMasked;
        if (this.windowStartMs = -1, Fd < Bd) return !1;
        this.slowStartMs = -1;
        const vd = this.targetFps();
        return this.decide(Rd, 1, {
          fast: Rd >= vd * od.cleanShare,
          dropping: Rd < vd * od.dropShare,
          masked: hd,
          longFrame: Kd > od.cleanMaxIntervalMs,
          paced: Xd > od.maxHeldFrames && Rd < .999 * vd
        }, dd), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(od.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(dd, Od) {
        if (this.slowStartMs < 0) return this.slowStartMs = dd, this.slowIntervals = 0, void(this.slowMasked = Od);
        this.slowMasked ||= Od, this.slowIntervals++;
        const md = dd - this.slowStartMs;
        if (md < 1e4) return;
        const Wd = 1e3 * this.slowIntervals / md,
          Fd = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(dd, Od), Wd < Sd && (this.windowStartMs = -1, this.decide(Wd, sd, {
          fast: !1,
          dropping: !0,
          masked: Fd,
          longFrame: !1,
          paced: !1
        }, dd))
      }
      resizeStall(dd) {
        return this.lastFrameMs - this.resizedMs <= Ud && dd - this.lastFrameMs <= 15e3
      }
      paused(dd) {
        this.refresh.frame(dd, !1), dd - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, dd + xd), this.graceUntilMs = dd + xd), this.lastFrameMs = dd, this.slowStartMs = -1, this.hitch(dd)
      }
      resized(dd) {
        this.resizedMs = dd, this.hitch(dd)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(dd) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(dd))
      }
      hitch(dd) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, dd + Ud)
      }
      left(dd) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun();
        const Od = this.phase;
        "watch" !== Od.kind && (this.phase = {
          kind: "watch"
        }, "down" === Od.kind && (this.downUntilMs[Od.from] = dd + ud, this.noGainFps[Od.from] = 0, 0 === Od.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, dd + ud)
        })), this.setStep(Od.from, 0, dd, "left"), "up" === Od.kind && (this.climbed = Od.fromClimbed))
      }
      decide(dd, Od, md, Wd) {
        const {
          dropping: Fd,
          masked: Rd
        } = md;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: Wd,
          step: this.step,
          fps: Math.round(10 * dd) / 10,
          windows: Od,
          masked: Rd,
          dropping: Fd
        });
        const Xd = this.phase;
        switch (Xd.kind) {
          case "watch": {
            Rd || 1 !== Od || (this.baseFps[this.baseNext] = dd, this.baseNext = (this.baseNext + 1) % this.baseFps.length, this.baseCount = Math.min(this.baseCount + 1, this.baseFps.length));
            const Xd = !Fd && this.keptAfterDip(this.step) && dd >= this.keptFps[this.step] * qd.recoverGain;
            return void this.watch(dd, Od, Ed(md, Xd, !1), Fd, Rd, Wd)
          }
          case "down": {
            if (Xd.judged += Od, Xd.fpsSum += dd * Od, Xd.minFps = Math.min(Xd.minFps, dd), Rd || (Xd.clean += Od, Xd.cleanFpsSum += dd * Od, Xd.cleanMinFps = Math.min(Xd.cleanMinFps, dd)), Xd.judged < Nd.judgeWindows) return;
            const md = Xd.clean > 0 ? Xd.cleanFpsSum / Xd.clean : Xd.fpsSum / Xd.judged;
            if (md >= Xd.fromFps * Nd.keepGain) {
              const dd = Xd.clean > 0 ? Xd.cleanMinFps : Xd.minFps;
              this.keepDown(Xd.from, Xd.fromFps, md, Math.min(dd, Xd.fromFps * Nd.keepGain), Wd)
            } else this.noGainFrom(Xd, md, Wd);
            return
          }
          case "up": {
            const Od = this.keptAfterDip(Xd.from),
              Kd = Ed(md, Od && !Fd, !0);
            if ("hold" === Kd && (Xd.maskedHolds += Rd ? 1 : 0, ++Xd.holds <= qd.trialHoldWindows)) return;
            if ("rise" !== Kd) return Rd || "hold" === Kd && Xd.maskedHolds > 0 ? this.spoilTrial(Xd, dd, Wd) : this.failTrialOf(Xd, dd, Wd), void(this.climbed = Xd.fromClimbed);
            if (Xd.fpsSum += dd, Rd || (Xd.cleanJudged++, Xd.cleanFpsSum += dd), ++Xd.judged >= qd.trialWindows) {
              const md = Xd.cleanJudged > 0,
                Fd = md ? Xd.cleanFpsSum / Xd.cleanJudged : Xd.fpsSum / Xd.judged;
              if (Od && !this.probeBarMet(Fd, Xd.baseFps)) return md ? this.failTrialOf(Xd, dd, Wd) : this.spoilTrial(Xd, dd, Wd), void(this.climbed = Xd.fromClimbed);
              this.watchAt(this.step), this.climbed = {
                from: Xd.from,
                heldWindows: 0,
                below: Xd.fromClimbed
              }, this.lenientUpFps[this.step] = Od ? Xd.fpsSum / Xd.judged : 0, this.lenientUpAtMs[this.step] = Wd, this.record(Wd, dd, "up_kept")
            }
            return
          }
        }
      }
      watch(dd, Od, md, Wd, Fd, Rd) {
        const Xd = this.climbed;
        null !== Xd && !Wd && !Fd && ++Xd.heldWindows >= qd.heldWindows && (this.climbed = null, this.record(Rd, dd, "jK"), this.hooks.jK(this.step)), Wd ? (this.dropRun += Od, this.dropRunFpsSum += dd * Od, this.dropRunMasked ||= Fd, Fd || (this.dropRunClean += Od, this.dropRunCleanFpsSum += dd * Od)) : this.resetDropRun(), "hold" !== md && (this.cleanRun = "rise" === md ? this.cleanRun + 1 : 0), Wd ? this.probeQuiet = 0 : Fd || this.probeQuiet++;
        const Kd = null !== this.climbed ? qd : Nd;
        if (this.dropRun >= (this.dropRunMasked ? Kd.maskedWindows : Kd.dropWindows)) {
          const Od = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            md = this.dropRunClean >= Nd.dropWindows && Od < this.noGainFps[this.step] * Hd.heavierShare;
          this.resetDropRun();
          const Wd = this.climbed;
          return void(null !== Wd ? (this.failUp(this.step, Wd.from, dd, Rd), this.climbed = Wd.below) : this.step < this.lowest && (md || this.waitOver(Rd)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Od,
            early: !this.waitOver(Rd),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, Od, Rd, "down")))
        }
        const hd = this.step - 1;
        hd < 0 || Rd < this.upUntilMs[hd] || (this.cleanRun >= (this.climbing ? qd.climbWindows : qd.cleanWindows) ? this.tryUp(dd, Rd, "up") : this.probeShare > 0 && this.keptAfterDip(this.step) && this.probeQuiet >= yd.windows && this.baseCount > 0 && Rd >= this.probeUntilMs[hd] && this.tryUp(dd, Rd, "probe"))
      }
      tryUp(dd, Od, md) {
        const Wd = this.probeShare > 0 ? this.baseMedian() : 0;
        this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed,
          baseFps: Wd,
          probe: "probe" === md,
          cleanJudged: 0,
          cleanFpsSum: 0
        }, this.setStep(this.step - 1, dd, Od, md)
      }
      probeBarMet(dd, Od) {
        return 0 === this.probeShare || 0 === Od || dd >= Math.min(Od, this.lastTargetFps) * this.probeShare
      }
      baseMedian() {
        const dd = Array.from(this.baseFps.subarray(0, this.baseCount)).sort(((dd, Od) => dd - Od)),
          Od = dd.length >> 1;
        return 0 === dd.length ? 0 : dd.length % 2 === 1 ? dd[Od] : (dd[Od - 1] + dd[Od]) / 2
      }
      waitOver(dd) {
        return !(0 === this.step && null !== this.noGain && dd < this.noGain.untilMs) && dd >= this.downUntilMs[this.step]
      }
      keptAfterDip(dd) {
        return this.keptFps[dd] > 0
      }
      keepDown(dd, Od, md, Wd, Fd) {
        this.watchAt(this.step), this.keptFps[this.step] = Wd;
        const Rd = this.lenientUpFps[dd];
        Rd > 0 && Fd - this.lenientUpAtMs[dd] < qd.lenientFailMs && Od * qd.recoverGain >= Rd && this.failTrial(dd, Fd), this.downBackoffMs[dd] = 0, this.noGainFps[dd] = 0, this.record(Fd, md, "down_kept"), 0 === dd && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.kQ(this.step)
      }
      noGainFrom(dd, Od, md) {
        var Wd, Fd;
        let {
          from: Rd,
          fromFps: Xd,
          early: Kd
        } = dd;
        const hd = 0 === Rd ? null !== (Wd = null === (Fd = this.noGain) || void 0 === Fd ? void 0 : Fd.backoffMs) && void 0 !== Wd ? Wd : 0 : this.downBackoffMs[Rd],
          vd = 0 === hd ? ud : Kd ? hd : Math.min(2 * hd, Vd),
          Qd = Math.max(Xd, Od);
        this.downBackoffMs[Rd] = vd, this.downUntilMs[Rd] = md + vd, this.noGainFps[Rd] = Qd, 0 === Rd && (this.noGain = {
          untilMs: md + vd,
          backoffMs: vd,
          fps: Qd
        }, this.hooks.noGain(this.noGain)), this.watchAt(Rd), this.setStep(Rd, Od, md, "no_gain")
      }
      spoilTrial(dd, Od, md) {
        dd.probe && (this.probeUntilMs[this.step] = md + qd.failWaitsMs[0]), this.watchAt(dd.from), this.setStep(dd.from, Od, md, "spoiled")
      }
      failTrialOf(dd, Od, md) {
        if (!dd.probe) return void this.failUp(this.step, dd.from, Od, md);
        const Wd = qd.failWaitsMs;
        this.climbing = !1, this.lenientUpFps[this.step] = 0, this.probeUntilMs[this.step] = md + Wd[Math.min(++this.probeFailures[this.step], Wd.length) - 1], this.watchAt(dd.from), this.setStep(dd.from, Od, md, "up_failed")
      }
      failUp(dd, Od, md, Wd) {
        this.failTrial(dd, Wd), this.watchAt(Od), this.setStep(Od, md, Wd, "up_failed")
      }
      failTrial(dd, Od) {
        this.climbing = !1, this.lenientUpFps[dd] = 0;
        const md = qd.failWaitsMs;
        this.upUntilMs[dd] = Od + md[Math.min(++this.upFailures[dd], md.length) - 1], this.hooks.upFailed(dd)
      }
      watchAt(dd) {
        this.phase = {
          kind: "watch"
        }, this.climbed = dd === this.step ? this.climbed : null, this.cleanRun = 0, this.probeQuiet = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(dd, Od, md, Wd) {
        const Fd = dd !== this.step;
        Fd && (this.climbed = null, this.baseCount = 0, this.baseNext = 0), this.step = dd, this.record(md, Od, Wd), Fd && (this.slowStartMs = -1, this.resized(md), this.hooks.changed(dd))
      }
      record(dd, Od, md) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: dd,
          step: this.step,
          fps: Math.round(10 * Od) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: md
        })
      }
    }
    var rd = md(35473),
      Gd = md(3984),
      nd = md(4347),
      Ld = md(35482);
    const Pd = "autoGraphics",
      zd = "autoGraphicsProbe",
      cd = 6048e5,
      jd = "startScale";

    function Dd() {
      return (0, hd.R)(Fd.e.get("clientEscMenuOptions").pixelScale) * (0, hd.K)()
    }

    function ed() {
      return (0, hd.s)(Dd())
    }
    let Id = null;

    function ld() {
      if (null === Id) {
        const dd = new URLSearchParams(window.location.search).get("stepProbe"),
          Od = Number(null !== dd && void 0 !== dd ? dd : ""),
          {
            keepShare: md,
            weakKeepShare: Wd
          } = vd.e.probe;
        Id = 1 === Od ? (0, Gd.f)() ? Wd : md : Od > .5 && Od < 1 ? Od : 0, null !== dd && 0 !== Od && 0 === Id && console.warn(`?stepProbe=${dd} is not 0, 1 or a share over 0.5 and under 1: the probe is off`)
      }
      return Id
    }

    function Cd() {
      return ld() > 0 ? zd : Pd
    }

    function Zd() {
      const dd = Qd.k.getItem(Cd());
      return "object" !== typeof dd || null === dd || "string" !== typeof dd.gpu ? null : dd
    }

    function kd(dd) {
      return {
        untilEpochMs: Date.now() + (dd.untilMs - performance.now()),
        backoffMs: dd.backoffMs,
        fps: dd.fps
      }
    }

    function fd(dd) {
      return void 0 === dd || "number" !== typeof dd.fps ? null : {
        untilMs: performance.now() + (dd.untilEpochMs - Date.now()),
        backoffMs: dd.backoffMs,
        fps: dd.fps
      }
    }
    let Md = null;

    function dO() {
      if (null === Md) {
        const dd = new URLSearchParams(window.location.search).get("msaa");
        Md = Fd.e.get("clientEscMenuOptions").antiAliasing && ("0" === dd || "1" !== dd && !(0, Kd.e)("antiAliasing") && (0, Gd.f)())
      }
      return Md
    }

    function OO(dd) {
      const Od = "number" === typeof dd ? Date.now() - dd : -1;
      return Od >= 0 && Od < cd
    }
    let mO = null;

    function WO() {
      return mO ??= (0, Rd.getDeviceDefaultPixelScale)(), FO(mO)
    }

    function FO(dd) {
      const Od = Fd.e.get("clientEscMenuOptions");
      return Od.pixelSmoothing && !(0, Kd.e)("pixelScale") && Od.pixelScale === dd
    }
    let RO = null,
      XO = 0;

    function KO() {
      if (null === RO || XO !== Dd()) {
        var dd;
        XO = Dd();
        const Od = Number(null !== (dd = new URLSearchParams(window.location.search).get(jd)) && void 0 !== dd ? dd : ""),
          md = ed();
        if (Od > 0 && Od <= 1) RO = (0, hd.E)(md, md[0] / Od);
        else {
          const dd = Zd(),
            Od = hO(md, Dd()),
            Wd = !(0, Gd.j)() && OO(null === dd || void 0 === dd ? void 0 : dd.heldAt) && (null === dd || void 0 === dd ? void 0 : dd.heldTarget) === Dd() ? null === dd || void 0 === dd ? void 0 : dd.heldN : void 0;
          RO = "number" === typeof Wd ? Math.min(Od, (0, hd.E)(md, Wd)) : Od
        }
      }
      return RO
    }

    function hO(dd, Od) {
      return (0, hd.E)(dd, (0, hd.G)(Od))
    }

    function vO(dd, Od, md) {
      const Wd = dd.length - 1;
      return !(0, Rd.isMobile)() || ld() > 0 && (0, Gd.f)() ? Wd : Math.min(Wd, Math.max(md, hO(dd, Od) + vd.e.pixels.mobileRungsBelowStart))
    }

    function QO(dd, Od) {
      var md;
      const Wd = Od.indexOf(null !== (md = dd.failedUpN) && void 0 !== md ? md : -1);
      return Wd >= 0 && OO(dd.failedUpAt) ? {
        step: Wd,
        untilMs: performance.now() + vd.e.stepUp.failWaitsMs[0]
      } : null
    }
    let tO = null,
      oO = !1,
      NO = "";
    const qO = new Set;

    function HO() {
      for (const dd of qO) dd()
    }

    function yO() {
      return oO ? null : (JO(), null === tO ? (null !== mO || null !== (0, Rd.peekGpuVendor)() ? WO() : FO(1)) ? KO() : null : WO() ? tO.currentStep() : null)
    }

    function bO() {
      const dd = yO();
      if (null === dd) return null;
      const Od = ed(),
        md = Od[Math.min(dd, Od.length - 1)];
      return md === TO() ? null : md
    }

    function TO() {
      return (0, hd.y)(Fd.e.get("clientEscMenuOptions").pixelScale, (0, hd.K)())
    }

    function pO() {
      return null !== tO && null !== bO()
    }

    function YO() {
      if (null === tO) return !1;
      const dd = bO();
      return null !== dd && dd > TO()
    }

    function gO(dd) {
      return qO.add(dd), () => {
        qO.delete(dd)
      }
    }

    function wO(dd, Od, md) {
      var Fd;
      if (null !== tO || oO || (0, Gd.j)()) return;
      const Rd = (0, rd.e)(dd, Od, md);
      null !== Rd && ((0, Gd.n)(Rd.vendor), "" !== Rd.renderer && (0, Wd.u)(Rd.vendor, Rd.renderer)), NO = `${dd}:${(null===Rd||void 0===Rd?void 0:Rd.renderer)||(null===Rd||void 0===Rd?void 0:Rd.vendor)||""}`, (null === (Fd = Zd()) || void 0 === Fd ? void 0 : Fd.gpu) !== NO && (Qd.k.setItem(Cd(), {
        gpu: NO
      }), RO = null), EO(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var dd;
          null === (dd = tO) || void 0 === dd || dd.hidden()
        } catch (Od) {
          iO(), console.error("The quality steps stopped", Od)
        }
      }))
    }
    let aO = 0;

    function EO() {
      var dd;
      const Od = null !== (dd = Zd()) && void 0 !== dd ? dd : {
          gpu: NO
        },
        md = ed();
      aO = Dd();
      const Wd = KO();
      tO = new Ad({
          changed: HO,
          kQ: () => {
            UO({
              heldN: void 0
            })
          },
          jK: dd => {
            var Od;
            const md = ed()[dd],
              Wd = {
                heldN: md,
                heldAt: Date.now(),
                heldTarget: Dd()
              };
            (null === (Od = Zd()) || void 0 === Od ? void 0 : Od.failedUpN) === md && (Wd.failedUpN = void 0), UO(Wd)
          },
          upFailed: dd => {
            UO({
              failedUpN: ed()[dd],
              failedUpAt: Date.now()
            })
          },
          noGain: dd => {
            UO({
              noGain: null === dd ? void 0 : kd(dd)
            })
          }
        }, {
          lowest: vO(md, aO, Wd),
          startStep: Wd,
          noGain: fd(Od.noGain),
          upWait: QO(Od, md),
          probeShare: ld()
        }),
        function(dd) {
          const Od = {
            get step() {
              return dd.currentStep()
            },
            get n() {
              var dd;
              return null !== (dd = bO()) && void 0 !== dd ? dd : TO()
            },
            get scale() {
              var dd;
              return ed()[0] / (null !== (dd = bO()) && void 0 !== dd ? dd : TO())
            },
            get msaaOff() {
              return dO()
            },
            get probeShare() {
              return ld()
            },
            log: dd.log,
            windows: dd.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Od,
            configurable: !0
          })
        }(tO), HO()
    }

    function JO() {
      null !== tO && Dd() !== aO && (RO = null, EO())
    }

    function UO(dd) {
      Qd.k.setItem(Cd(), {
        ...Zd(),
        ...dd,
        gpu: NO
      })
    }
    let xO = 0,
      BO = 0,
      SO = 0,
      sO = !1;

    function uO() {
      xO++
    }

    function VO(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      JO(), null !== tO && (dd - SO >= 1e3 && (sO = xO - BO > vd.e.sceneChange.meshesPerSecond, BO = xO, SO = dd), Ld.d.isHeld() || nd.e.isHeld() ? tO.paused(dd) : tO.frame(dd, Od, md && !document.hidden && WO(), sO || Wd > 0 || (0, Xd.m)()))
    }

    function iO() {
      if (!oO) {
        oO = !0, null !== tO && (tO = null, UO({
          noGain: void 0
        }));
        try {
          HO()
        } catch (dd) {
          console.error("The quality steps' resize to the player's n failed", dd)
        }
      }
    }

    function AO() {
      var dd;
      null === (dd = tO) || void 0 === dd || dd.resized(performance.now())
    }
  },
  35473: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd
    });
    var Wd = md(107),
      Fd = md(145);

    function Rd(dd, Od, md) {
      if ("webgpu" === dd) return md ? ((0, Wd.seedGpuVendor)(md), {
        vendor: md,
        renderer: ""
      }) : null;
      try {
        const md = "webgl" === dd ? Od.getContext("webgl2") : Od.getContext("webgl");
        "webgl" === dd && md && (0, Fd.E)(md);
        const Rd = null === md || void 0 === md ? void 0 : md.getExtension("WEBGL_debug_renderer_info");
        if (md && Rd) {
          const dd = String(md.getParameter(Rd.UNMASKED_VENDOR_WEBGL)),
            Od = String(md.getParameter(Rd.UNMASKED_RENDERER_WEBGL));
          return (0, Wd.seedGpuVendor)(dd), (0, Fd.J)(dd, Od), {
            vendor: dd,
            renderer: Od
          }
        }
        md && (0, Fd.J)(String(md.getParameter(md.VENDOR)), String(md.getParameter(md.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);