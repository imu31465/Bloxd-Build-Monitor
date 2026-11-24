export const id = 198;
export const ids = [198];
export const modules = {
  34206: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => ST,
      d: () => iU,
      e: () => qU,
      g: () => OU,
      i: () => gU,
      m: () => HU,
      p: () => jU,
      q: () => bU,
      u: () => kU
    });
    var WT = mT(280),
      zT = mT(25),
      MT = mT(102),
      gT = mT(1752),
      nT = mT(4539),
      HT = mT(3032),
      kT = mT(3038),
      jT = mT(44);
    const {
      windows: lT,
      target: LT,
      stepDown: pT,
      stepUp: BT,
      noGain: ZT
    } = kT.b, cT = 1e3 / 60 * 1.08, vT = 1e3 / 55, fT = 1e3 / 45, qT = 1e3 / 30 * .92, iT = 1e3 / 30 * 1.08;
    class bT {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(TT, UT) {
        const mT = TT - this.lastMs;
        this.lastMs = TT;
        const WT = function(TT) {
          if (TT <= 0 || TT > 100) return -1;
          if (TT <= cT) return 0;
          if (TT >= vT && TT <= fT) return 1;
          return TT >= qT && TT <= iT ? 2 : -1
        }(mT);
        0 === WT && 2 === this.runBand && UT && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), WT !== this.runBand && (this.runBand = WT, this.runLength = 0), WT < 0 || ++this.runLength < 3 || (0 === WT ? this.votes60++ : 1 === WT ? (this.votesMid++, this.sumMidMs += mT) : (this.votes30++, UT && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const OT = lT.windowMs,
      eT = lT.settleMs,
      YT = lT.graceMs,
      JT = lT.minIntervals,
      xT = 1e3 * JT / OT,
      dT = Math.floor(1e4 / OT),
      wT = ZT.backoffMs,
      tT = ZT.maxMs;
    class aT {
      constructor(TT, UT) {
        let {
          lowest: mT,
          startStep: WT = 0,
          noGain: zT = null,
          upWait: MT = null
        } = UT;
        this.hooks = TT, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new bT, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = LT.maxFps, this.lowest = mT, this.step = Math.min(WT, mT), this.noGain = zT, this.climbing = this.step > 0;
        const gT = mT + 1;
        this.downUntilMs = new Array(gT).fill(0), this.downBackoffMs = new Array(gT).fill(0), this.noGainFps = new Array(gT).fill(0), this.noGainFps[0] = null === zT ? 0 : zT.fps, this.upFailures = new Array(gT).fill(0), this.upUntilMs = new Array(gT).fill(0), null !== MT && MT.step >= 0 && MT.step < gT && (this.upUntilMs[MT.step] = MT.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(TT, mT && !WT), !mT) return void this.leave(TT);
        const zT = TT - this.lastFrameMs,
          MT = this.resizeStall(TT);
        if (zT > 2e3 && !MT && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = TT, this.quietUntilMs = Math.max(this.quietUntilMs, TT + YT), this.graceUntilMs = TT + YT, this.windowStartMs = -1, void(this.slowStartMs = -1);
        zT > 500 && (this.hitch(TT), MT && (this.slowStartMs = -1)), this.lastFrameMs = TT, TT >= this.quietUntilMs && this.countWindow(TT, UT, WT) || UT && TT >= this.graceUntilMs && this.countSlow(TT, WT)
      }
      countWindow(TT, UT, mT) {
        if (this.windowStartMs < 0) return !!UT && (this.windowStartMs = TT, this.lastDrawnMs = TT, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = mT, !1);
        if (this.windowMasked ||= mT, !UT) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, TT - this.lastDrawnMs), this.lastDrawnMs = TT;
        const WT = TT - this.windowStartMs;
        if (WT < OT) return !1;
        const zT = this.windowIntervals,
          MT = 1e3 * zT / WT,
          gT = this.windowHeld,
          nT = this.windowMaxIntervalMs,
          HT = this.windowMasked;
        if (this.windowStartMs = -1, zT < JT) return !1;
        this.slowStartMs = -1;
        const kT = this.targetFps(),
          jT = MT >= kT * LT.cleanShare && nT <= LT.cleanMaxIntervalMs && (0 === gT || MT >= kT);
        return this.decide(MT, 1, jT, MT < kT * LT.dropShare, HT, TT), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(LT.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(TT, UT) {
        if (this.slowStartMs < 0) return this.slowStartMs = TT, this.slowIntervals = 0, void(this.slowMasked = UT);
        this.slowMasked ||= UT, this.slowIntervals++;
        const mT = TT - this.slowStartMs;
        if (mT < 1e4) return;
        const WT = 1e3 * this.slowIntervals / mT,
          zT = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(TT, UT), WT < xT && (this.windowStartMs = -1, this.decide(WT, dT, !1, !0, zT, TT))
      }
      resizeStall(TT) {
        return this.lastFrameMs - this.resizedMs <= eT && TT - this.lastFrameMs <= 15e3
      }
      paused(TT) {
        this.refresh.frame(TT, !1), TT - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, TT + YT), this.graceUntilMs = TT + YT), this.lastFrameMs = TT, this.slowStartMs = -1, this.hitch(TT)
      }
      resized(TT) {
        this.resizedMs = TT, this.hitch(TT)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(TT) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(TT))
      }
      hitch(TT) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, TT + eT)
      }
      left(TT) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const UT = this.phase;
        "watch" !== UT.kind && (this.phase = {
          kind: "watch"
        }, "down" === UT.kind && (this.downUntilMs[UT.from] = TT + wT, this.noGainFps[UT.from] = 0, 0 === UT.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, TT + wT)
        })), this.setStep(UT.from, 0, TT, "left"), "up" === UT.kind && (this.climbed = UT.fromClimbed))
      }
      decide(TT, UT, mT, WT, zT, MT) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: MT,
          step: this.step,
          fps: Math.round(10 * TT) / 10,
          windows: UT,
          masked: zT,
          dropping: WT
        });
        const gT = this.phase;
        switch (gT.kind) {
          case "watch":
            return void this.watch(TT, UT, mT, WT, zT, MT);
          case "down": {
            if (gT.judged += UT, gT.fpsSum += TT * UT, zT || (gT.clean += UT, gT.cleanFpsSum += TT * UT), gT.judged < pT.judgeWindows) return;
            const mT = gT.clean > 0 ? gT.cleanFpsSum / gT.clean : gT.fpsSum / gT.judged;
            return void(mT >= gT.fromFps * pT.keepGain ? this.keepDown(gT.from, mT, MT) : this.noGainFrom(gT, mT, MT))
          }
          case "up":
            return mT ? void(++gT.judged >= BT.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: gT.from,
              heldWindows: 0,
              below: gT.fromClimbed
            }, this.record(MT, TT, "up_kept"))) : (zT ? (this.watchAt(gT.from), this.setStep(gT.from, TT, MT, "spoiled")) : this.failUp(this.step, gT.from, TT, MT), void(this.climbed = gT.fromClimbed))
        }
      }
      watch(TT, UT, mT, WT, zT, MT) {
        const gT = this.climbed;
        null !== gT && !WT && !zT && ++gT.heldWindows >= BT.heldWindows && (this.climbed = null, this.record(MT, TT, "fn"), this.hooks.fn(this.step)), WT ? (this.dropRun += UT, this.dropRunFpsSum += TT * UT, this.dropRunMasked ||= zT, zT || (this.dropRunClean += UT, this.dropRunCleanFpsSum += TT * UT)) : this.resetDropRun(), zT && mT || (this.cleanRun = mT ? this.cleanRun + 1 : 0);
        const nT = null !== this.climbed ? BT : pT;
        if (this.dropRun >= (this.dropRunMasked ? nT.maskedWindows : nT.dropWindows)) {
          const UT = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            mT = this.dropRunClean >= pT.dropWindows && UT < this.noGainFps[this.step] * ZT.heavierShare;
          this.resetDropRun();
          const WT = this.climbed;
          return void(null !== WT ? (this.failUp(this.step, WT.from, TT, MT), this.climbed = WT.below) : this.step < this.lowest && (mT || this.waitOver(MT)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: UT,
            early: !this.waitOver(MT),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, UT, MT, "down")))
        }
        const HT = this.step - 1;
        HT >= 0 && this.cleanRun >= (this.climbing ? BT.climbWindows : BT.cleanWindows) && MT >= this.upUntilMs[HT] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(HT, TT, MT, "up"))
      }
      waitOver(TT) {
        return !(0 === this.step && null !== this.noGain && TT < this.noGain.untilMs) && TT >= this.downUntilMs[this.step]
      }
      keepDown(TT, UT, mT) {
        this.watchAt(this.step), this.downBackoffMs[TT] = 0, this.noGainFps[TT] = 0, this.record(mT, UT, "down_kept"), 0 === TT && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.Jp(this.step)
      }
      noGainFrom(TT, UT, mT) {
        var WT, zT;
        let {
          from: MT,
          fromFps: gT,
          early: nT
        } = TT;
        const HT = 0 === MT ? null !== (WT = null === (zT = this.noGain) || void 0 === zT ? void 0 : zT.backoffMs) && void 0 !== WT ? WT : 0 : this.downBackoffMs[MT],
          kT = 0 === HT ? wT : nT ? HT : Math.min(2 * HT, tT),
          jT = Math.max(gT, UT);
        this.downBackoffMs[MT] = kT, this.downUntilMs[MT] = mT + kT, this.noGainFps[MT] = jT, 0 === MT && (this.noGain = {
          untilMs: mT + kT,
          backoffMs: kT,
          fps: jT
        }, this.hooks.noGain(this.noGain)), this.watchAt(MT), this.setStep(MT, UT, mT, "no_gain")
      }
      failUp(TT, UT, mT, WT) {
        this.climbing = !1;
        const zT = ++this.upFailures[TT],
          MT = BT.failWaitsMs;
        this.upUntilMs[TT] = WT + MT[Math.min(zT, MT.length) - 1], this.watchAt(UT), this.setStep(UT, mT, WT, "up_failed"), this.hooks.upFailed(TT)
      }
      watchAt(TT) {
        this.phase = {
          kind: "watch"
        }, this.climbed = TT === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(TT, UT, mT, WT) {
        const zT = TT !== this.step;
        zT && (this.climbed = null), this.step = TT, this.record(mT, UT, WT), zT && (this.slowStartMs = -1, this.resized(mT), this.hooks.changed(TT))
      }
      record(TT, UT, mT) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: TT,
          step: this.step,
          fps: Math.round(10 * UT) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: mT
        })
      }
    }
    var yT = mT(34208),
      XT = mT(3247),
      IT = mT(34215);
    const QT = "autoGraphics",
      sT = 6048e5,
      FT = "startScale";

    function PT() {
      return (0, HT.M)(zT.b.get("clientEscMenuOptions").pixelScale) * (0, HT.H)()
    }

    function VT() {
      return (0, HT.t)(PT())
    }

    function uT() {
      const TT = jT.l.getItem(QT);
      return "object" !== typeof TT || null === TT || "string" !== typeof TT.gpu ? null : TT
    }

    function CT(TT) {
      return {
        untilEpochMs: Date.now() + (TT.untilMs - performance.now()),
        backoffMs: TT.backoffMs,
        fps: TT.fps
      }
    }

    function rT(TT) {
      return void 0 === TT || "number" !== typeof TT.fps ? null : {
        untilMs: performance.now() + (TT.untilEpochMs - Date.now()),
        backoffMs: TT.backoffMs,
        fps: TT.fps
      }
    }
    let KT = null;

    function ST() {
      if (null === KT) {
        const TT = new URLSearchParams(window.location.search).get("msaa");
        KT = zT.b.get("clientEscMenuOptions").antiAliasing && ("0" === TT || "1" !== TT && !(0, nT.d)("antiAliasing") && (0, XT.g)())
      }
      return KT
    }

    function GT(TT) {
      const UT = "number" === typeof TT ? Date.now() - TT : -1;
      return UT >= 0 && UT < sT
    }
    let NT = null;

    function ET() {
      return NT ??= (0, MT.getDeviceDefaultPixelScale)(), hT(NT)
    }

    function hT(TT) {
      const UT = zT.b.get("clientEscMenuOptions");
      return UT.pixelSmoothing && !(0, nT.d)("pixelScale") && UT.pixelScale === TT
    }
    let DT = null,
      oT = 0;

    function AT() {
      if (null === DT || oT !== PT()) {
        var TT;
        oT = PT();
        const UT = Number(null !== (TT = new URLSearchParams(window.location.search).get(FT)) && void 0 !== TT ? TT : ""),
          mT = VT();
        if (UT > 0 && UT <= 1) DT = (0, HT.A)(mT, mT[0] / UT);
        else {
          const TT = uT(),
            UT = (0, HT.A)(mT, (0, HT.D)(PT())),
            WT = !(0, XT.l)() && GT(null === TT || void 0 === TT ? void 0 : TT.heldAt) && (null === TT || void 0 === TT ? void 0 : TT.heldTarget) === PT() ? null === TT || void 0 === TT ? void 0 : TT.heldN : void 0;
          DT = "number" === typeof WT ? Math.min(UT, (0, HT.A)(mT, WT)) : UT
        }
      }
      return DT
    }

    function RT(TT, UT) {
      var mT;
      const WT = UT.indexOf(null !== (mT = TT.failedUpN) && void 0 !== mT ? mT : -1);
      return WT >= 0 && GT(TT.failedUpAt) ? {
        step: WT,
        untilMs: performance.now() + kT.b.stepUp.failWaitsMs[0]
      } : null
    }
    let TU = null,
      UU = !1,
      mU = "";
    const WU = new Set;

    function zU() {
      for (const TT of WU) TT()
    }

    function MU() {
      return UU ? null : (pU(), null === TU ? (null !== NT || null !== (0, MT.peekGpuVendor)() ? ET() : hT(1)) ? AT() : null : ET() ? TU.currentStep() : null)
    }

    function gU() {
      const TT = MU();
      if (null === TT) return null;
      const UT = VT(),
        mT = UT[Math.min(TT, UT.length - 1)];
      return mT === nU() ? null : mT
    }

    function nU() {
      return (0, HT.x)(zT.b.get("clientEscMenuOptions").pixelScale, (0, HT.H)())
    }

    function HU() {
      return null !== TU && null !== gU()
    }

    function kU(TT) {
      return WU.add(TT), () => {
        WU.delete(TT)
      }
    }

    function jU(TT, UT, mT) {
      var zT;
      if (null !== TU || UU || (0, XT.l)()) return;
      const MT = (0, yT.e)(TT, UT, mT);
      null !== MT && ((0, XT.m)(MT.vendor), "" !== MT.renderer && (0, WT.r)(MT.vendor, MT.renderer)), mU = `${TT}:${(null===MT||void 0===MT?void 0:MT.renderer)||(null===MT||void 0===MT?void 0:MT.vendor)||""}`, (null === (zT = uT()) || void 0 === zT ? void 0 : zT.gpu) !== mU && (jT.l.setItem(QT, {
        gpu: mU
      }), DT = null), LU(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var TT;
          null === (TT = TU) || void 0 === TT || TT.hidden()
        } catch (UT) {
          bU(), console.error("The quality steps stopped", UT)
        }
      }))
    }
    let lU = 0;

    function LU() {
      var TT;
      const UT = null !== (TT = uT()) && void 0 !== TT ? TT : {
          gpu: mU
        },
        mT = VT();
      lU = PT(), TU = new aT({
          changed: zU,
          Jp: () => {
            BU({
              heldN: void 0
            })
          },
          fn: TT => {
            var UT;
            const mT = VT()[TT],
              WT = {
                heldN: mT,
                heldAt: Date.now(),
                heldTarget: PT()
              };
            (null === (UT = uT()) || void 0 === UT ? void 0 : UT.failedUpN) === mT && (WT.failedUpN = void 0), BU(WT)
          },
          upFailed: TT => {
            BU({
              failedUpN: VT()[TT],
              failedUpAt: Date.now()
            })
          },
          noGain: TT => {
            BU({
              noGain: null === TT ? void 0 : CT(TT)
            })
          }
        }, {
          lowest: mT.length - 1,
          startStep: AT(),
          noGain: rT(UT.noGain),
          upWait: RT(UT, mT)
        }),
        function(TT) {
          const UT = {
            get step() {
              return TT.currentStep()
            },
            get n() {
              var TT;
              return null !== (TT = gU()) && void 0 !== TT ? TT : nU()
            },
            get scale() {
              var TT;
              return VT()[0] / (null !== (TT = gU()) && void 0 !== TT ? TT : nU())
            },
            get msaaOff() {
              return ST()
            },
            log: TT.log,
            windows: TT.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: UT,
            configurable: !0
          })
        }(TU), zU()
    }

    function pU() {
      null !== TU && PT() !== lU && (DT = null, LU())
    }

    function BU(TT) {
      jT.l.setItem(QT, {
        ...uT(),
        ...TT,
        gpu: mU
      })
    }
    let ZU = 0,
      cU = 0,
      vU = 0,
      fU = !1;

    function qU() {
      ZU++
    }

    function iU(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      pU(), null !== TU && (TT - vU >= 1e3 && (fU = ZU - cU > kT.b.sceneChange.meshesPerSecond, cU = ZU, vU = TT), IT.e.isHeld() ? TU.paused(TT) : TU.frame(TT, UT, mT && !document.hidden && ET(), fU || WT > 0 || (0, gT.l)()))
    }

    function bU() {
      if (!UU) {
        UU = !0, null !== TU && (TU = null, BU({
          noGain: void 0
        }));
        try {
          zU()
        } catch (TT) {
          console.error("The quality steps' resize to the player's n failed", TT)
        }
      }
    }

    function OU() {
      var TT;
      null === (TT = TU) || void 0 === TT || TT.resized(performance.now())
    }
  },
  34208: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(102),
      zT = mT(130);

    function MT(TT, UT, mT) {
      if ("webgpu" === TT) return mT ? ((0, WT.seedGpuVendor)(mT), {
        vendor: mT,
        renderer: ""
      }) : null;
      try {
        const mT = "webgl" === TT ? UT.getContext("webgl2") : UT.getContext("webgl");
        "webgl" === TT && mT && (0, zT.v)(mT);
        const MT = null === mT || void 0 === mT ? void 0 : mT.getExtension("WEBGL_debug_renderer_info");
        if (mT && MT) {
          const TT = String(mT.getParameter(MT.UNMASKED_VENDOR_WEBGL)),
            UT = String(mT.getParameter(MT.UNMASKED_RENDERER_WEBGL));
          return (0, WT.seedGpuVendor)(TT), (0, zT.z)(TT, UT), {
            vendor: TT,
            renderer: UT
          }
        }
        mT && (0, zT.z)(String(mT.getParameter(mT.VENDOR)), String(mT.getParameter(mT.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);