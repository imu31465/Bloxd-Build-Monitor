export const id = 185;
export const ids = [185];
export const modules = {
  8674: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => lT,
      g: () => Ao,
      j: () => go,
      m: () => ro,
      n: () => wo,
      p: () => zo,
      q: () => Wo,
      r: () => Bo,
      v: () => ho,
      z: () => Xo
    });
    var iT = IT(12),
      zT = IT(90),
      kT = IT(1585),
      WT = IT(3945),
      XT = IT(2494),
      BT = IT(2514),
      FT = IT(26);
    const {
      windows: ST,
      target: DT,
      stepDown: LT,
      stepUp: xT,
      noGain: cT
    } = BT.b, KT = 1e3 / 60 * 1.08, MT = 1e3 / 55, rT = 1e3 / 45, AT = 1e3 / 30 * .92, gT = 1e3 / 30 * 1.08;
    class hT {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(TT) {
        const oT = TT - this.lastMs;
        this.lastMs = TT;
        const IT = function(TT) {
          if (TT <= 0 || TT > 100) return -1;
          if (TT <= KT) return 0;
          if (TT >= MT && TT <= rT) return 1;
          return TT >= AT && TT <= gT ? 2 : -1
        }(oT);
        IT !== this.runBand && (this.runBand = IT, this.runLength = 0), IT < 0 || ++this.runLength < 3 || (0 === IT ? this.votes60++ : 1 === IT ? (this.votesMid++, this.sumMidMs += oT) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const wT = ST.windowMs,
      mT = ST.settleMs,
      eT = ST.graceMs,
      RT = ST.minIntervals,
      uT = 1e3 * RT / wT,
      vT = cT.backoffMs,
      ET = cT.maxMs;
    class fT {
      constructor(TT, oT) {
        let {
          lowest: IT,
          startStep: iT = 0,
          noGain: zT = null,
          upWait: kT = null
        } = oT;
        this.hooks = TT, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new hT, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = DT.maxFps, this.lowest = IT, this.step = Math.min(iT, IT), this.noGain = zT, this.climbing = this.step > 0;
        const WT = IT + 1;
        this.downUntilMs = new Array(WT).fill(0), this.downBackoffMs = new Array(WT).fill(0), this.upFailures = new Array(WT).fill(0), this.upUntilMs = new Array(WT).fill(0), null !== kT && kT.step >= 0 && kT.step < WT && (this.upUntilMs[kT.step] = kT.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(TT), !IT) return void this.leave(TT);
        const zT = TT - this.lastFrameMs,
          kT = this.resizeStall(TT);
        if (zT > 2e3 && !kT && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = TT, this.quietUntilMs = Math.max(this.quietUntilMs, TT + eT), this.graceUntilMs = TT + eT, this.windowStartMs = -1, void(this.slowStartMs = -1);
        zT > 500 && (this.hitch(TT), kT && (this.slowStartMs = -1)), this.lastFrameMs = TT, TT >= this.quietUntilMs && this.countWindow(TT, oT, iT) || oT && TT >= this.graceUntilMs && this.countSlow(TT)
      }
      countWindow(TT, oT, IT) {
        if (this.windowStartMs < 0) return !!oT && (this.windowStartMs = TT, this.lastDrawnMs = TT, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = IT, !1);
        if (this.windowMasked ||= IT, !oT) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, TT - this.lastDrawnMs), this.lastDrawnMs = TT;
        const iT = TT - this.windowStartMs;
        if (iT < wT) return !1;
        const zT = this.windowIntervals,
          kT = 1e3 * zT / iT,
          WT = this.windowHeld,
          XT = this.windowMaxIntervalMs,
          BT = this.windowMasked;
        if (this.windowStartMs = -1, zT < RT) return !1;
        this.slowStartMs = -1;
        const FT = this.targetFps(),
          ST = kT >= FT * DT.cleanShare && XT <= DT.cleanMaxIntervalMs && (0 === WT || kT >= FT);
        return this.decide(kT, ST, kT < FT * DT.dropShare, BT, TT), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(DT.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(TT) {
        if (this.slowStartMs < 0) return this.slowStartMs = TT, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const oT = TT - this.slowStartMs;
        if (oT < 1e4) return;
        const IT = 1e3 * this.slowIntervals / oT;
        this.slowStartMs = -1, this.countSlow(TT), IT < uT && (this.windowStartMs = -1, this.decide(IT, !1, !0, !1, TT))
      }
      resizeStall(TT) {
        return this.lastFrameMs - this.resizedMs <= mT && TT - this.lastFrameMs <= 15e3
      }
      paused(TT) {
        this.refresh.frame(TT), TT - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, TT + eT), this.graceUntilMs = TT + eT), this.lastFrameMs = TT, this.slowStartMs = -1, this.hitch(TT)
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
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, TT + mT)
      }
      left(TT) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const oT = this.phase;
        "watch" !== oT.kind && (this.phase = {
          kind: "watch"
        }, "down" === oT.kind && (this.downUntilMs[oT.from] = Math.max(this.downUntilMs[oT.from], TT + vT)), this.setStep(oT.from, 0, TT, "left"), "up" === oT.kind && (this.climbed = oT.fromClimbed))
      }
      decide(TT, oT, IT, iT, zT) {
        const kT = this.phase;
        switch (kT.kind) {
          case "watch":
            return void this.watch(TT, oT, IT, iT, zT);
          case "down":
            if (kT.judged++, kT.fpsSum += TT, kT.dropped ||= IT, kT.judged < LT.judgeWindows) return;
            return void(!kT.dropped || kT.fpsSum / kT.judged >= kT.fromFps * LT.keepGain ? this.keepDown(kT.from, kT.fpsSum / kT.judged, zT) : this.noGainFrom(kT.from, kT.fromFps, zT));
          case "up":
            return oT ? void(++kT.judged >= xT.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: kT.from,
              heldWindows: 0,
              below: kT.fromClimbed
            }, this.record(zT, TT, "up_kept"))) : (iT ? (this.watchAt(kT.from), this.setStep(kT.from, TT, zT, "spoiled")) : this.failUp(this.step, kT.from, TT, zT), void(this.climbed = kT.fromClimbed))
        }
      }
      watch(TT, oT, IT, iT, zT) {
        const kT = this.climbed;
        if (null !== kT && !IT && !iT && ++kT.heldWindows >= xT.heldWindows && (this.climbed = null, this.record(zT, TT, "kS"), this.hooks.kS(this.step)), IT ? (this.dropRun++, this.dropRunFpsSum += TT, this.dropRunMasked ||= iT) : this.resetDropRun(), iT && oT || (this.cleanRun = oT ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? LT.maskedWindows : LT.dropWindows)) {
          const oT = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const IT = this.climbed;
          return void(null !== IT ? (this.failUp(this.step, IT.from, TT, zT), this.climbed = IT.below) : this.step < this.lowest && this.downAllowed(zT) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: oT,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, TT, zT, "down")))
        }
        const WT = this.step - 1;
        WT >= 0 && this.cleanRun >= (this.climbing ? xT.climbWindows : xT.cleanWindows) && this.upAllowed(WT, zT) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(WT, TT, zT, "up"))
      }
      downAllowed(TT) {
        return !(0 === this.step && null !== this.noGain && TT < this.noGain.untilMs) && TT >= this.downUntilMs[this.step]
      }
      upAllowed(TT, oT) {
        return this.upFailures[TT] <= xT.failWaitsMs.length && oT >= this.upUntilMs[TT]
      }
      keepDown(TT, oT, IT) {
        this.watchAt(this.step), this.downBackoffMs[TT] = 0, this.record(IT, oT, "down_kept"), 0 === TT && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.qx(this.step)
      }
      noGainFrom(TT, oT, IT) {
        var iT, zT;
        const kT = 0 === TT ? null !== (iT = null === (zT = this.noGain) || void 0 === zT ? void 0 : zT.backoffMs) && void 0 !== iT ? iT : 0 : this.downBackoffMs[TT],
          WT = 0 === kT ? vT : Math.min(2 * kT, ET);
        this.downBackoffMs[TT] = WT, this.downUntilMs[TT] = IT + WT, 0 === TT && (this.noGain = {
          untilMs: IT + WT,
          backoffMs: WT
        }, this.hooks.noGain(this.noGain)), this.watchAt(TT), this.setStep(TT, oT, IT, "no_gain")
      }
      failUp(TT, oT, IT, iT) {
        this.climbing = !1;
        const zT = ++this.upFailures[TT];
        this.upUntilMs[TT] = zT <= xT.failWaitsMs.length ? iT + xT.failWaitsMs[zT - 1] : Number.POSITIVE_INFINITY, this.watchAt(oT), this.setStep(oT, IT, iT, "up_failed"), this.hooks.upFailed(TT)
      }
      watchAt(TT) {
        this.phase = {
          kind: "watch"
        }, this.climbed = TT === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(TT, oT, IT, iT) {
        const zT = TT !== this.step;
        zT && (this.climbed = null), this.step = TT, this.record(IT, oT, iT), zT && (this.slowStartMs = -1, this.resized(IT), this.hooks.changed(TT))
      }
      record(TT, oT, IT) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: TT,
          step: this.step,
          fps: Math.round(10 * oT) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: IT
        })
      }
    }
    var CT = IT(8677),
      jT = IT(2679),
      JT = IT(8680);
    const UT = "autoGraphics",
      aT = 6048e5,
      YT = "startScale";

    function QT() {
      return (0, XT.K)(iT.c.get("clientEscMenuOptions").pixelScale) * (0, XT.H)()
    }

    function OT() {
      return (0, XT.r)(QT())
    }

    function HT() {
      const TT = FT.e.getItem(UT);
      return "object" !== typeof TT || null === TT || "string" !== typeof TT.gpu ? null : TT
    }

    function nT(TT) {
      return {
        untilEpochMs: Date.now() + (TT.untilMs - performance.now()),
        backoffMs: TT.backoffMs
      }
    }

    function qT(TT) {
      return TT ? {
        untilMs: performance.now() + (TT.untilEpochMs - Date.now()),
        backoffMs: TT.backoffMs
      } : null
    }
    let ZT = null;

    function lT() {
      if (null === ZT) {
        const TT = new URLSearchParams(window.location.search).get("msaa");
        ZT = iT.c.get("clientEscMenuOptions").antiAliasing && ("0" === TT || "1" !== TT && !(0, WT.e)("antiAliasing") && (0, jT.e)())
      }
      return ZT
    }

    function sT(TT) {
      const oT = "number" === typeof TT ? Date.now() - TT : -1;
      return oT >= 0 && oT < aT
    }
    let tT = null;

    function GT() {
      return tT ??= (0, zT.getDeviceDefaultPixelScale)(), pT(tT)
    }

    function pT(TT) {
      const oT = iT.c.get("clientEscMenuOptions");
      return oT.pixelSmoothing && !(0, WT.e)("pixelScale") && oT.pixelScale === TT
    }
    let bT = null,
      yT = 0;

    function NT() {
      if (null === bT || yT !== QT()) {
        var TT;
        yT = QT();
        const oT = Number(null !== (TT = new URLSearchParams(window.location.search).get(YT)) && void 0 !== TT ? TT : ""),
          IT = OT();
        if (oT > 0 && oT <= 1) bT = (0, XT.B)(IT, IT[0] / oT);
        else {
          const TT = HT(),
            oT = (0, XT.B)(IT, (0, XT.E)(QT())),
            iT = !(0, jT.i)() && sT(null === TT || void 0 === TT ? void 0 : TT.heldAt) && (null === TT || void 0 === TT ? void 0 : TT.heldTarget) === QT() ? null === TT || void 0 === TT ? void 0 : TT.heldN : void 0;
          bT = "number" === typeof iT ? Math.min(oT, (0, XT.B)(IT, iT)) : oT
        }
      }
      return bT
    }

    function PT(TT, oT) {
      var IT;
      const iT = oT.indexOf(null !== (IT = TT.failedUpN) && void 0 !== IT ? IT : -1);
      return iT >= 0 && sT(TT.failedUpAt) ? {
        step: iT,
        untilMs: performance.now() + BT.b.stepUp.failWaitsMs[0]
      } : null
    }
    let dT = null,
      VT = !1,
      To = "";
    const oo = new Set;

    function Io() {
      for (const TT of oo) TT()
    }

    function io() {
      return VT ? null : (Do(), null === dT ? (null !== tT || null !== (0, zT.peekGpuVendor)() ? GT() : pT(1)) ? NT() : null : GT() ? dT.currentStep() : null)
    }

    function zo() {
      const TT = io();
      if (null === TT) return null;
      const oT = OT(),
        IT = oT[Math.min(TT, oT.length - 1)];
      return IT === ko() ? null : IT
    }

    function ko() {
      return (0, XT.x)(iT.c.get("clientEscMenuOptions").pixelScale, (0, XT.H)())
    }

    function Wo() {
      return null !== dT && null !== zo()
    }

    function Xo(TT) {
      return oo.add(TT), () => {
        oo.delete(TT)
      }
    }

    function Bo(TT, oT, IT) {
      var iT;
      if (null !== dT || VT || (0, jT.i)()) return;
      const zT = (0, CT.d)(TT, oT, IT);
      null !== zT && (0, jT.j)(zT.vendor), To = `${TT}:${(null===zT||void 0===zT?void 0:zT.renderer)||(null===zT||void 0===zT?void 0:zT.vendor)||""}`, (null === (iT = HT()) || void 0 === iT ? void 0 : iT.gpu) !== To && (FT.e.setItem(UT, {
        gpu: To
      }), bT = null), So(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var TT;
          null === (TT = dT) || void 0 === TT || TT.hidden()
        } catch (oT) {
          ho(), console.error("The quality steps stopped", oT)
        }
      }))
    }
    let Fo = 0;

    function So() {
      var TT;
      const oT = null !== (TT = HT()) && void 0 !== TT ? TT : {
          gpu: To
        },
        IT = OT();
      Fo = QT(), dT = new fT({
          changed: Io,
          qx: () => {
            Lo({
              heldN: void 0
            })
          },
          kS: TT => {
            var oT;
            const IT = OT()[TT],
              iT = {
                heldN: IT,
                heldAt: Date.now(),
                heldTarget: QT()
              };
            (null === (oT = HT()) || void 0 === oT ? void 0 : oT.failedUpN) === IT && (iT.failedUpN = void 0), Lo(iT)
          },
          upFailed: TT => {
            Lo({
              failedUpN: OT()[TT],
              failedUpAt: Date.now()
            })
          },
          noGain: TT => {
            Lo({
              noGain: null === TT ? void 0 : nT(TT)
            })
          }
        }, {
          lowest: IT.length - 1,
          startStep: NT(),
          noGain: qT(oT.noGain),
          upWait: PT(oT, IT)
        }),
        function(TT) {
          const oT = {
            get step() {
              return TT.currentStep()
            },
            get n() {
              var TT;
              return null !== (TT = zo()) && void 0 !== TT ? TT : ko()
            },
            get scale() {
              var TT;
              return OT()[0] / (null !== (TT = zo()) && void 0 !== TT ? TT : ko())
            },
            get msaaOff() {
              return lT()
            },
            log: TT.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: oT,
            configurable: !0
          })
        }(dT), Io()
    }

    function Do() {
      null !== dT && QT() !== Fo && (bT = null, So())
    }

    function Lo(TT) {
      FT.e.setItem(UT, {
        ...HT(),
        ...TT,
        gpu: To
      })
    }
    let xo = 0,
      co = 0,
      Ko = 0,
      Mo = !1;

    function ro() {
      xo++
    }

    function Ao() {
      return xo
    }

    function go(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Do(), null !== dT && (TT - Ko >= 1e3 && (Mo = xo - co > BT.b.sceneChange.meshesPerSecond, co = xo, Ko = TT), JT.e.isHeld() ? dT.paused(TT) : dT.frame(TT, oT, IT && !document.hidden && GT(), Mo || iT > 0 || (0, kT.t)()))
    }

    function ho() {
      if (!VT) {
        VT = !0, null !== dT && (dT = null, Lo({
          noGain: void 0
        }));
        try {
          Io()
        } catch (TT) {
          console.error("The quality steps' resize to the player's n failed", TT)
        }
      }
    }

    function wo() {
      var TT;
      null === (TT = dT) || void 0 === TT || TT.resized(performance.now())
    }
  },
  8677: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(90),
      zT = IT(134);

    function kT(TT, oT, IT) {
      if ("webgpu" === TT) return IT ? ((0, iT.seedGpuVendor)(IT), {
        vendor: IT,
        renderer: ""
      }) : null;
      try {
        const IT = "webgl" === TT ? oT.getContext("webgl2") : oT.getContext("webgl"),
          kT = null === IT || void 0 === IT ? void 0 : IT.getExtension("WEBGL_debug_renderer_info");
        if (IT && kT) {
          const TT = String(IT.getParameter(kT.UNMASKED_VENDOR_WEBGL)),
            oT = String(IT.getParameter(kT.UNMASKED_RENDERER_WEBGL));
          return (0, iT.seedGpuVendor)(TT), (0, zT.w)(TT, oT), {
            vendor: TT,
            renderer: oT
          }
        }
        IT && (0, zT.w)(String(IT.getParameter(IT.VENDOR)), String(IT.getParameter(IT.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);