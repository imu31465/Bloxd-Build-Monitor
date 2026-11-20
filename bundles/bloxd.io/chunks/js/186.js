export const id = 186;
export const ids = [186];
export const modules = {
  8910: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => kU,
      d: () => WR,
      f: () => fR,
      g: () => eR,
      j: () => mR,
      m: () => pR,
      o: () => PR,
      r: () => qR,
      s: () => xR,
      v: () => TR
    });
    var tU = gU(21),
      pU = gU(96),
      EU = gU(1567),
      PU = gU(4082),
      TU = gU(2581),
      qU = gU(2600),
      KU = gU(34);
    const {
      windows: cU,
      target: GU,
      stepDown: jU,
      stepUp: uU,
      noGain: CU
    } = qU.d, hU = 1e3 / 60 * 1.08, QU = 1e3 / 55, eU = 1e3 / 45, WU = 1e3 / 30 * .92, fU = 1e3 / 30 * 1.08;
    class xU {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(UU) {
        const RU = UU - this.lastMs;
        this.lastMs = UU;
        const gU = function(UU) {
          if (UU <= 0 || UU > 100) return -1;
          if (UU <= hU) return 0;
          if (UU >= QU && UU <= eU) return 1;
          return UU >= WU && UU <= fU ? 2 : -1
        }(RU);
        gU !== this.runBand && (this.runBand = gU, this.runLength = 0), gU < 0 || ++this.runLength < 3 || (0 === gU ? this.votes60++ : 1 === gU ? (this.votesMid++, this.sumMidMs += RU) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const mU = cU.windowMs,
      IU = cU.settleMs,
      JU = cU.graceMs,
      wU = cU.minIntervals,
      nU = 1e3 * wU / mU,
      bU = CU.backoffMs,
      oU = CU.maxMs;
    class ZU {
      constructor(UU, RU) {
        let {
          lowest: gU,
          startStep: tU = 0,
          noGain: pU = null,
          upWait: EU = null
        } = RU;
        this.hooks = UU, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new xU, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = GU.maxFps, this.lowest = gU, this.step = Math.min(tU, gU), this.noGain = pU, this.climbing = this.step > 0;
        const PU = gU + 1;
        this.downUntilMs = new Array(PU).fill(0), this.downBackoffMs = new Array(PU).fill(0), this.upFailures = new Array(PU).fill(0), this.upUntilMs = new Array(PU).fill(0), null !== EU && EU.step >= 0 && EU.step < PU && (this.upUntilMs[EU.step] = EU.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(UU), !gU) return void this.leave(UU);
        const pU = UU - this.lastFrameMs,
          EU = this.resizeStall(UU);
        if (pU > 2e3 && !EU && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = UU, this.quietUntilMs = Math.max(this.quietUntilMs, UU + JU), this.graceUntilMs = UU + JU, this.windowStartMs = -1, void(this.slowStartMs = -1);
        pU > 500 && (this.hitch(UU), EU && (this.slowStartMs = -1)), this.lastFrameMs = UU, UU >= this.quietUntilMs && this.countWindow(UU, RU, tU) || RU && UU >= this.graceUntilMs && this.countSlow(UU)
      }
      countWindow(UU, RU, gU) {
        if (this.windowStartMs < 0) return !!RU && (this.windowStartMs = UU, this.lastDrawnMs = UU, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = gU, !1);
        if (this.windowMasked ||= gU, !RU) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, UU - this.lastDrawnMs), this.lastDrawnMs = UU;
        const tU = UU - this.windowStartMs;
        if (tU < mU) return !1;
        const pU = this.windowIntervals,
          EU = 1e3 * pU / tU,
          PU = this.windowHeld,
          TU = this.windowMaxIntervalMs,
          qU = this.windowMasked;
        if (this.windowStartMs = -1, pU < wU) return !1;
        this.slowStartMs = -1;
        const KU = this.targetFps(),
          cU = EU >= KU * GU.cleanShare && TU <= GU.cleanMaxIntervalMs && (0 === PU || EU >= KU);
        return this.decide(EU, cU, EU < KU * GU.dropShare, qU, UU), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(GU.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(UU) {
        if (this.slowStartMs < 0) return this.slowStartMs = UU, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const RU = UU - this.slowStartMs;
        if (RU < 1e4) return;
        const gU = 1e3 * this.slowIntervals / RU;
        this.slowStartMs = -1, this.countSlow(UU), gU < nU && (this.windowStartMs = -1, this.decide(gU, !1, !0, !1, UU))
      }
      resizeStall(UU) {
        return this.lastFrameMs - this.resizedMs <= IU && UU - this.lastFrameMs <= 15e3
      }
      paused(UU) {
        this.refresh.frame(UU), UU - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, UU + JU), this.graceUntilMs = UU + JU), this.lastFrameMs = UU, this.slowStartMs = -1, this.hitch(UU)
      }
      resized(UU) {
        this.resizedMs = UU, this.hitch(UU)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(UU) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(UU))
      }
      hitch(UU) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, UU + IU)
      }
      left(UU) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const RU = this.phase;
        "watch" !== RU.kind && (this.phase = {
          kind: "watch"
        }, "down" === RU.kind && (this.downUntilMs[RU.from] = Math.max(this.downUntilMs[RU.from], UU + bU)), this.setStep(RU.from, 0, UU, "left"), "up" === RU.kind && (this.climbed = RU.fromClimbed))
      }
      decide(UU, RU, gU, tU, pU) {
        const EU = this.phase;
        switch (EU.kind) {
          case "watch":
            return void this.watch(UU, RU, gU, tU, pU);
          case "down":
            if (EU.judged++, EU.fpsSum += UU, EU.dropped ||= gU, EU.judged < jU.judgeWindows) return;
            return void(!EU.dropped || EU.fpsSum / EU.judged >= EU.fromFps * jU.keepGain ? this.keepDown(EU.from, EU.fpsSum / EU.judged, pU) : this.noGainFrom(EU.from, EU.fromFps, pU));
          case "up":
            return RU ? void(++EU.judged >= uU.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: EU.from,
              heldWindows: 0,
              below: EU.fromClimbed
            }, this.record(pU, UU, "up_kept"))) : (tU ? (this.watchAt(EU.from), this.setStep(EU.from, UU, pU, "spoiled")) : this.failUp(this.step, EU.from, UU, pU), void(this.climbed = EU.fromClimbed))
        }
      }
      watch(UU, RU, gU, tU, pU) {
        const EU = this.climbed;
        if (null !== EU && !gU && !tU && ++EU.heldWindows >= uU.heldWindows && (this.climbed = null, this.record(pU, UU, "WT"), this.hooks.WT(this.step)), gU ? (this.dropRun++, this.dropRunFpsSum += UU, this.dropRunMasked ||= tU) : this.resetDropRun(), tU && RU || (this.cleanRun = RU ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? jU.maskedWindows : jU.dropWindows)) {
          const RU = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const gU = this.climbed;
          return void(null !== gU ? (this.failUp(this.step, gU.from, UU, pU), this.climbed = gU.below) : this.step < this.lowest && this.downAllowed(pU) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: RU,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, UU, pU, "down")))
        }
        const PU = this.step - 1;
        PU >= 0 && this.cleanRun >= (this.climbing ? uU.climbWindows : uU.cleanWindows) && this.upAllowed(PU, pU) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(PU, UU, pU, "up"))
      }
      downAllowed(UU) {
        return !(0 === this.step && null !== this.noGain && UU < this.noGain.untilMs) && UU >= this.downUntilMs[this.step]
      }
      upAllowed(UU, RU) {
        return this.upFailures[UU] <= uU.failWaitsMs.length && RU >= this.upUntilMs[UU]
      }
      keepDown(UU, RU, gU) {
        this.watchAt(this.step), this.downBackoffMs[UU] = 0, this.record(gU, RU, "down_kept"), 0 === UU && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.xu(this.step)
      }
      noGainFrom(UU, RU, gU) {
        var tU, pU;
        const EU = 0 === UU ? null !== (tU = null === (pU = this.noGain) || void 0 === pU ? void 0 : pU.backoffMs) && void 0 !== tU ? tU : 0 : this.downBackoffMs[UU],
          PU = 0 === EU ? bU : Math.min(2 * EU, oU);
        this.downBackoffMs[UU] = PU, this.downUntilMs[UU] = gU + PU, 0 === UU && (this.noGain = {
          untilMs: gU + PU,
          backoffMs: PU
        }, this.hooks.noGain(this.noGain)), this.watchAt(UU), this.setStep(UU, RU, gU, "no_gain")
      }
      failUp(UU, RU, gU, tU) {
        this.climbing = !1;
        const pU = ++this.upFailures[UU];
        this.upUntilMs[UU] = pU <= uU.failWaitsMs.length ? tU + uU.failWaitsMs[pU - 1] : Number.POSITIVE_INFINITY, this.watchAt(RU), this.setStep(RU, gU, tU, "up_failed"), this.hooks.upFailed(UU)
      }
      watchAt(UU) {
        this.phase = {
          kind: "watch"
        }, this.climbed = UU === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(UU, RU, gU, tU) {
        const pU = UU !== this.step;
        pU && (this.climbed = null), this.step = UU, this.record(gU, RU, tU), pU && (this.slowStartMs = -1, this.resized(gU), this.hooks.changed(UU))
      }
      record(UU, RU, gU) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: UU,
          step: this.step,
          fps: Math.round(10 * RU) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: gU
        })
      }
    }
    var aU = gU(8915),
      YU = gU(2811),
      BU = gU(8919);
    const VU = "autoGraphics",
      rU = 6048e5,
      XU = "startScale";

    function vU() {
      return (0, TU.z)(tU.b.get("clientEscMenuOptions").pixelScale) * (0, TU.v)()
    }

    function dU() {
      return (0, TU.k)(vU())
    }

    function HU() {
      const UU = KU.k.getItem(VU);
      return "object" !== typeof UU || null === UU || "string" !== typeof UU.gpu ? null : UU
    }

    function SU(UU) {
      return {
        untilEpochMs: Date.now() + (UU.untilMs - performance.now()),
        backoffMs: UU.backoffMs
      }
    }

    function sU(UU) {
      return UU ? {
        untilMs: performance.now() + (UU.untilEpochMs - Date.now()),
        backoffMs: UU.backoffMs
      } : null
    }
    let yU = null;

    function kU() {
      if (null === yU) {
        const UU = new URLSearchParams(window.location.search).get("msaa");
        yU = tU.b.get("clientEscMenuOptions").antiAliasing && ("0" === UU || "1" !== UU && !(0, PU.c)("antiAliasing") && (0, YU.i)())
      }
      return yU
    }

    function FU(UU) {
      const RU = "number" === typeof UU ? Date.now() - UU : -1;
      return RU >= 0 && RU < rU
    }
    let iU = null;

    function AU() {
      return iU ??= (0, pU.getDeviceDefaultPixelScale)(), zU(iU)
    }

    function zU(UU) {
      const RU = tU.b.get("clientEscMenuOptions");
      return RU.pixelSmoothing && !(0, PU.c)("pixelScale") && RU.pixelScale === UU
    }
    let MU = null,
      DU = 0;

    function LU() {
      if (null === MU || DU !== vU()) {
        var UU;
        DU = vU();
        const RU = Number(null !== (UU = new URLSearchParams(window.location.search).get(XU)) && void 0 !== UU ? UU : ""),
          gU = dU();
        if (RU > 0 && RU <= 1) MU = (0, TU.q)(gU, gU[0] / RU);
        else {
          const UU = HU(),
            RU = (0, TU.q)(gU, (0, TU.s)(vU())),
            tU = !(0, YU.k)() && FU(null === UU || void 0 === UU ? void 0 : UU.heldAt) && (null === UU || void 0 === UU ? void 0 : UU.heldTarget) === vU() ? null === UU || void 0 === UU ? void 0 : UU.heldN : void 0;
          MU = "number" === typeof tU ? Math.min(RU, (0, TU.q)(gU, tU)) : RU
        }
      }
      return MU
    }

    function NU(UU, RU) {
      var gU;
      const tU = RU.indexOf(null !== (gU = UU.failedUpN) && void 0 !== gU ? gU : -1);
      return tU >= 0 && FU(UU.failedUpAt) ? {
        step: tU,
        untilMs: performance.now() + qU.d.stepUp.failWaitsMs[0]
      } : null
    }
    let lU = null,
      OU = !1,
      UR = "";
    const RR = new Set;

    function gR() {
      for (const UU of RR) UU()
    }

    function tR() {
      return OU ? null : (GR(), null === lU ? (null !== iU || null !== (0, pU.peekGpuVendor)() ? AU() : zU(1)) ? LU() : null : AU() ? lU.currentStep() : null)
    }

    function pR() {
      const UU = tR();
      if (null === UU) return null;
      const RU = dU(),
        gU = RU[Math.min(UU, RU.length - 1)];
      return gU === ER() ? null : gU
    }

    function ER() {
      return (0, TU.o)(tU.b.get("clientEscMenuOptions").pixelScale, (0, TU.v)())
    }

    function PR() {
      return null !== lU && null !== pR()
    }

    function TR(UU) {
      return RR.add(UU), () => {
        RR.delete(UU)
      }
    }

    function qR(UU, RU, gU) {
      var tU;
      if (null !== lU || OU || (0, YU.k)()) return;
      const pU = (0, aU.d)(UU, RU, gU);
      null !== pU && (0, YU.n)(pU.vendor), UR = `${UU}:${(null===pU||void 0===pU?void 0:pU.renderer)||(null===pU||void 0===pU?void 0:pU.vendor)||""}`, (null === (tU = HU()) || void 0 === tU ? void 0 : tU.gpu) !== UR && (KU.k.setItem(VU, {
        gpu: UR
      }), MU = null), cR(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var UU;
          null === (UU = lU) || void 0 === UU || UU.hidden()
        } catch (RU) {
          xR(), console.error("The quality steps stopped", RU)
        }
      }))
    }
    let KR = 0;

    function cR() {
      var UU;
      const RU = null !== (UU = HU()) && void 0 !== UU ? UU : {
          gpu: UR
        },
        gU = dU();
      KR = vU(), lU = new ZU({
          changed: gR,
          xu: () => {
            jR({
              heldN: void 0
            })
          },
          WT: UU => {
            var RU;
            const gU = dU()[UU],
              tU = {
                heldN: gU,
                heldAt: Date.now(),
                heldTarget: vU()
              };
            (null === (RU = HU()) || void 0 === RU ? void 0 : RU.failedUpN) === gU && (tU.failedUpN = void 0), jR(tU)
          },
          upFailed: UU => {
            jR({
              failedUpN: dU()[UU],
              failedUpAt: Date.now()
            })
          },
          noGain: UU => {
            jR({
              noGain: null === UU ? void 0 : SU(UU)
            })
          }
        }, {
          lowest: gU.length - 1,
          startStep: LU(),
          noGain: sU(RU.noGain),
          upWait: NU(RU, gU)
        }),
        function(UU) {
          const RU = {
            get step() {
              return UU.currentStep()
            },
            get n() {
              var UU;
              return null !== (UU = pR()) && void 0 !== UU ? UU : ER()
            },
            get scale() {
              var UU;
              return dU()[0] / (null !== (UU = pR()) && void 0 !== UU ? UU : ER())
            },
            get msaaOff() {
              return kU()
            },
            log: UU.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: RU,
            configurable: !0
          })
        }(lU), gR()
    }

    function GR() {
      null !== lU && vU() !== KR && (MU = null, cR())
    }

    function jR(UU) {
      KU.k.setItem(VU, {
        ...HU(),
        ...UU,
        gpu: UR
      })
    }
    let uR = 0,
      CR = 0,
      hR = 0,
      QR = !1;

    function eR() {
      uR++
    }

    function WR() {
      return uR
    }

    function fR(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      GR(), null !== lU && (UU - hR >= 1e3 && (QR = uR - CR > qU.d.sceneChange.meshesPerSecond, CR = uR, hR = UU), BU.c.isHeld() ? lU.paused(UU) : lU.frame(UU, RU, gU && !document.hidden && AU(), QR || tU > 0 || (0, EU.q)()))
    }

    function xR() {
      if (!OU) {
        OU = !0, null !== lU && (lU = null, jR({
          noGain: void 0
        }));
        try {
          gR()
        } catch (UU) {
          console.error("The quality steps' resize to the player's n failed", UU)
        }
      }
    }

    function mR() {
      var UU;
      null === (UU = lU) || void 0 === UU || UU.resized(performance.now())
    }
  },
  8915: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(96),
      pU = gU(131);

    function EU(UU, RU, gU) {
      if ("webgpu" === UU) return gU ? ((0, tU.seedGpuVendor)(gU), {
        vendor: gU,
        renderer: ""
      }) : null;
      try {
        const gU = "webgl" === UU ? RU.getContext("webgl2") : RU.getContext("webgl"),
          EU = null === gU || void 0 === gU ? void 0 : gU.getExtension("WEBGL_debug_renderer_info");
        if (gU && EU) {
          const UU = String(gU.getParameter(EU.UNMASKED_VENDOR_WEBGL)),
            RU = String(gU.getParameter(EU.UNMASKED_RENDERER_WEBGL));
          return (0, tU.seedGpuVendor)(UU), (0, pU.u)(UU, RU), {
            vendor: UU,
            renderer: RU
          }
        }
        gU && (0, pU.u)(String(gU.getParameter(gU.VENDOR)), String(gU.getParameter(gU.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);