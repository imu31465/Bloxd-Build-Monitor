export const id = 187;
export const ids = [187];
export const modules = {
  9013: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => VQ,
      d: () => MF,
      e: () => eF,
      g: () => pF,
      h: () => qF,
      j: () => DF,
      k: () => vF,
      o: () => GF,
      s: () => kF
    });
    var LQ = wQ(17),
      qQ = wQ(96),
      oQ = wQ(1641),
      DQ = wQ(4273),
      kQ = wQ(2706),
      vQ = wQ(2723),
      mQ = wQ(27);
    const {
      windows: uQ,
      target: HQ,
      stepDown: bQ,
      stepUp: YQ,
      noGain: xQ
    } = vQ.b, AQ = 1e3 / 60 * 1.08, tQ = 1e3 / 55, eQ = 1e3 / 45, MQ = 1e3 / 30 * .92, GQ = 1e3 / 30 * 1.08;
    class pQ {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(QQ) {
        const FQ = QQ - this.lastMs;
        this.lastMs = QQ;
        const wQ = function(QQ) {
          if (QQ <= 0 || QQ > 100) return -1;
          if (QQ <= AQ) return 0;
          if (QQ >= tQ && QQ <= eQ) return 1;
          return QQ >= MQ && QQ <= GQ ? 2 : -1
        }(FQ);
        wQ !== this.runBand && (this.runBand = wQ, this.runLength = 0), wQ < 0 || ++this.runLength < 3 || (0 === wQ ? this.votes60++ : 1 === wQ ? (this.votesMid++, this.sumMidMs += FQ) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const cQ = uQ.windowMs,
      CQ = uQ.settleMs,
      SQ = uQ.graceMs,
      iQ = uQ.minIntervals,
      WQ = 1e3 * iQ / cQ,
      RQ = xQ.backoffMs,
      OQ = xQ.maxMs;
    class sQ {
      constructor(QQ, FQ) {
        let {
          lowest: wQ,
          startStep: LQ = 0,
          noGain: qQ = null,
          upWait: oQ = null
        } = FQ;
        this.hooks = QQ, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new pQ, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = HQ.maxFps, this.lowest = wQ, this.step = Math.min(LQ, wQ), this.noGain = qQ, this.climbing = this.step > 0;
        const DQ = wQ + 1;
        this.downUntilMs = new Array(DQ).fill(0), this.downBackoffMs = new Array(DQ).fill(0), this.upFailures = new Array(DQ).fill(0), this.upUntilMs = new Array(DQ).fill(0), null !== oQ && oQ.step >= 0 && oQ.step < DQ && (this.upUntilMs[oQ.step] = oQ.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(QQ), !wQ) return void this.leave(QQ);
        const qQ = QQ - this.lastFrameMs,
          oQ = this.resizeStall(QQ);
        if (qQ > 2e3 && !oQ && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = QQ, this.quietUntilMs = Math.max(this.quietUntilMs, QQ + SQ), this.graceUntilMs = QQ + SQ, this.windowStartMs = -1, void(this.slowStartMs = -1);
        qQ > 500 && (this.hitch(QQ), oQ && (this.slowStartMs = -1)), this.lastFrameMs = QQ, QQ >= this.quietUntilMs && this.countWindow(QQ, FQ, LQ) || FQ && QQ >= this.graceUntilMs && this.countSlow(QQ)
      }
      countWindow(QQ, FQ, wQ) {
        if (this.windowStartMs < 0) return !!FQ && (this.windowStartMs = QQ, this.lastDrawnMs = QQ, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = wQ, !1);
        if (this.windowMasked ||= wQ, !FQ) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, QQ - this.lastDrawnMs), this.lastDrawnMs = QQ;
        const LQ = QQ - this.windowStartMs;
        if (LQ < cQ) return !1;
        const qQ = this.windowIntervals,
          oQ = 1e3 * qQ / LQ,
          DQ = this.windowHeld,
          kQ = this.windowMaxIntervalMs,
          vQ = this.windowMasked;
        if (this.windowStartMs = -1, qQ < iQ) return !1;
        this.slowStartMs = -1;
        const mQ = this.targetFps(),
          uQ = oQ >= mQ * HQ.cleanShare && kQ <= HQ.cleanMaxIntervalMs && (0 === DQ || oQ >= mQ);
        return this.decide(oQ, uQ, oQ < mQ * HQ.dropShare, vQ, QQ), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(HQ.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(QQ) {
        if (this.slowStartMs < 0) return this.slowStartMs = QQ, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const FQ = QQ - this.slowStartMs;
        if (FQ < 1e4) return;
        const wQ = 1e3 * this.slowIntervals / FQ;
        this.slowStartMs = -1, this.countSlow(QQ), wQ < WQ && (this.windowStartMs = -1, this.decide(wQ, !1, !0, !1, QQ))
      }
      resizeStall(QQ) {
        return this.lastFrameMs - this.resizedMs <= CQ && QQ - this.lastFrameMs <= 15e3
      }
      paused(QQ) {
        this.refresh.frame(QQ), QQ - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, QQ + SQ), this.graceUntilMs = QQ + SQ), this.lastFrameMs = QQ, this.slowStartMs = -1, this.hitch(QQ)
      }
      resized(QQ) {
        this.resizedMs = QQ, this.hitch(QQ)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(QQ) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(QQ))
      }
      hitch(QQ) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, QQ + CQ)
      }
      left(QQ) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const FQ = this.phase;
        "watch" !== FQ.kind && (this.phase = {
          kind: "watch"
        }, "down" === FQ.kind && (this.downUntilMs[FQ.from] = Math.max(this.downUntilMs[FQ.from], QQ + RQ)), this.setStep(FQ.from, 0, QQ, "left"), "up" === FQ.kind && (this.climbed = FQ.fromClimbed))
      }
      decide(QQ, FQ, wQ, LQ, qQ) {
        const oQ = this.phase;
        switch (oQ.kind) {
          case "watch":
            return void this.watch(QQ, FQ, wQ, LQ, qQ);
          case "down":
            if (oQ.judged++, oQ.fpsSum += QQ, oQ.dropped ||= wQ, oQ.judged < bQ.judgeWindows) return;
            return void(!oQ.dropped || oQ.fpsSum / oQ.judged >= oQ.fromFps * bQ.keepGain ? this.keepDown(oQ.from, oQ.fpsSum / oQ.judged, qQ) : this.noGainFrom(oQ.from, oQ.fromFps, qQ));
          case "up":
            return FQ ? void(++oQ.judged >= YQ.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: oQ.from,
              heldWindows: 0,
              below: oQ.fromClimbed
            }, this.record(qQ, QQ, "up_kept"))) : (LQ ? (this.watchAt(oQ.from), this.setStep(oQ.from, QQ, qQ, "spoiled")) : this.failUp(this.step, oQ.from, QQ, qQ), void(this.climbed = oQ.fromClimbed))
        }
      }
      watch(QQ, FQ, wQ, LQ, qQ) {
        const oQ = this.climbed;
        if (null !== oQ && !wQ && !LQ && ++oQ.heldWindows >= YQ.heldWindows && (this.climbed = null, this.record(qQ, QQ, "ym"), this.hooks.ym(this.step)), wQ ? (this.dropRun++, this.dropRunFpsSum += QQ, this.dropRunMasked ||= LQ) : this.resetDropRun(), LQ && FQ || (this.cleanRun = FQ ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? bQ.maskedWindows : bQ.dropWindows)) {
          const FQ = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const wQ = this.climbed;
          return void(null !== wQ ? (this.failUp(this.step, wQ.from, QQ, qQ), this.climbed = wQ.below) : this.step < this.lowest && this.downAllowed(qQ) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: FQ,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, QQ, qQ, "down")))
        }
        const DQ = this.step - 1;
        DQ >= 0 && this.cleanRun >= (this.climbing ? YQ.climbWindows : YQ.cleanWindows) && this.upAllowed(DQ, qQ) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(DQ, QQ, qQ, "up"))
      }
      downAllowed(QQ) {
        return !(0 === this.step && null !== this.noGain && QQ < this.noGain.untilMs) && QQ >= this.downUntilMs[this.step]
      }
      upAllowed(QQ, FQ) {
        return this.upFailures[QQ] <= YQ.failWaitsMs.length && FQ >= this.upUntilMs[QQ]
      }
      keepDown(QQ, FQ, wQ) {
        this.watchAt(this.step), this.downBackoffMs[QQ] = 0, this.record(wQ, FQ, "down_kept"), 0 === QQ && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.iY(this.step)
      }
      noGainFrom(QQ, FQ, wQ) {
        var LQ, qQ;
        const oQ = 0 === QQ ? null !== (LQ = null === (qQ = this.noGain) || void 0 === qQ ? void 0 : qQ.backoffMs) && void 0 !== LQ ? LQ : 0 : this.downBackoffMs[QQ],
          DQ = 0 === oQ ? RQ : Math.min(2 * oQ, OQ);
        this.downBackoffMs[QQ] = DQ, this.downUntilMs[QQ] = wQ + DQ, 0 === QQ && (this.noGain = {
          untilMs: wQ + DQ,
          backoffMs: DQ
        }, this.hooks.noGain(this.noGain)), this.watchAt(QQ), this.setStep(QQ, FQ, wQ, "no_gain")
      }
      failUp(QQ, FQ, wQ, LQ) {
        this.climbing = !1;
        const qQ = ++this.upFailures[QQ];
        this.upUntilMs[QQ] = qQ <= YQ.failWaitsMs.length ? LQ + YQ.failWaitsMs[qQ - 1] : Number.POSITIVE_INFINITY, this.watchAt(FQ), this.setStep(FQ, wQ, LQ, "up_failed"), this.hooks.upFailed(QQ)
      }
      watchAt(QQ) {
        this.phase = {
          kind: "watch"
        }, this.climbed = QQ === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(QQ, FQ, wQ, LQ) {
        const qQ = QQ !== this.step;
        qQ && (this.climbed = null), this.step = QQ, this.record(wQ, FQ, LQ), qQ && (this.slowStartMs = -1, this.resized(wQ), this.hooks.changed(QQ))
      }
      record(QQ, FQ, wQ) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: QQ,
          step: this.step,
          fps: Math.round(10 * FQ) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: wQ
        })
      }
    }
    var rQ = wQ(9017),
      IQ = wQ(3009),
      UQ = wQ(9022);
    const NQ = "autoGraphics",
      TQ = 6048e5,
      KQ = "startScale";

    function zQ() {
      return (0, kQ.J)(LQ.c.get("clientEscMenuOptions").pixelScale) * (0, kQ.C)()
    }

    function lQ() {
      return (0, kQ.n)(zQ())
    }

    function jQ() {
      const QQ = mQ.i.getItem(NQ);
      return "object" !== typeof QQ || null === QQ || "string" !== typeof QQ.gpu ? null : QQ
    }

    function aQ(QQ) {
      return {
        untilEpochMs: Date.now() + (QQ.untilMs - performance.now()),
        backoffMs: QQ.backoffMs
      }
    }

    function XQ(QQ) {
      return QQ ? {
        untilMs: performance.now() + (QQ.untilEpochMs - Date.now()),
        backoffMs: QQ.backoffMs
      } : null
    }
    let fQ = null;

    function VQ() {
      if (null === fQ) {
        const QQ = new URLSearchParams(window.location.search).get("msaa");
        fQ = LQ.c.get("clientEscMenuOptions").antiAliasing && ("0" === QQ || "1" !== QQ && !(0, DQ.e)("antiAliasing") && (0, IQ.f)())
      }
      return fQ
    }

    function hQ(QQ) {
      const FQ = "number" === typeof QQ ? Date.now() - QQ : -1;
      return FQ >= 0 && FQ < TQ
    }
    let JQ = null;

    function EQ() {
      return JQ ??= (0, qQ.getDeviceDefaultPixelScale)(), nQ(JQ)
    }

    function nQ(QQ) {
      const FQ = LQ.c.get("clientEscMenuOptions");
      return FQ.pixelSmoothing && !(0, DQ.e)("pixelScale") && FQ.pixelScale === QQ
    }
    let gQ = null,
      PQ = 0;

    function ZQ() {
      if (null === gQ || PQ !== zQ()) {
        var QQ;
        PQ = zQ();
        const FQ = Number(null !== (QQ = new URLSearchParams(window.location.search).get(KQ)) && void 0 !== QQ ? QQ : ""),
          wQ = lQ();
        if (FQ > 0 && FQ <= 1) gQ = (0, kQ.y)(wQ, wQ[0] / FQ);
        else {
          const QQ = jQ(),
            FQ = (0, kQ.y)(wQ, (0, kQ.z)(zQ())),
            LQ = !(0, IQ.l)() && hQ(null === QQ || void 0 === QQ ? void 0 : QQ.heldAt) && (null === QQ || void 0 === QQ ? void 0 : QQ.heldTarget) === zQ() ? null === QQ || void 0 === QQ ? void 0 : QQ.heldN : void 0;
          gQ = "number" === typeof LQ ? Math.min(FQ, (0, kQ.y)(wQ, LQ)) : FQ
        }
      }
      return gQ
    }

    function yQ(QQ, FQ) {
      var wQ;
      const LQ = FQ.indexOf(null !== (wQ = QQ.failedUpN) && void 0 !== wQ ? wQ : -1);
      return LQ >= 0 && hQ(QQ.failedUpAt) ? {
        step: LQ,
        untilMs: performance.now() + vQ.b.stepUp.failWaitsMs[0]
      } : null
    }
    let BQ = null,
      dQ = !1,
      QF = "";
    const FF = new Set;

    function wF() {
      for (const QQ of FF) QQ()
    }

    function LF() {
      return dQ ? null : (HF(), null === BQ ? (null !== JQ || null !== (0, qQ.peekGpuVendor)() ? EQ() : nQ(1)) ? ZQ() : null : EQ() ? BQ.currentStep() : null)
    }

    function qF() {
      const QQ = LF();
      if (null === QQ) return null;
      const FQ = lQ(),
        wQ = FQ[Math.min(QQ, FQ.length - 1)];
      return wQ === oF() ? null : wQ
    }

    function oF() {
      return (0, kQ.s)(LQ.c.get("clientEscMenuOptions").pixelScale, (0, kQ.C)())
    }

    function DF() {
      return null !== BQ && null !== qF()
    }

    function kF(QQ) {
      return FF.add(QQ), () => {
        FF.delete(QQ)
      }
    }

    function vF(QQ, FQ, wQ) {
      var LQ;
      if (null !== BQ || dQ || (0, IQ.l)()) return;
      const qQ = (0, rQ.d)(QQ, FQ, wQ);
      null !== qQ && (0, IQ.p)(qQ.vendor), QF = `${QQ}:${(null===qQ||void 0===qQ?void 0:qQ.renderer)||(null===qQ||void 0===qQ?void 0:qQ.vendor)||""}`, (null === (LQ = jQ()) || void 0 === LQ ? void 0 : LQ.gpu) !== QF && (mQ.i.setItem(NQ, {
        gpu: QF
      }), gQ = null), uF(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var QQ;
          null === (QQ = BQ) || void 0 === QQ || QQ.hidden()
        } catch (FQ) {
          GF(), console.error("The quality steps stopped", FQ)
        }
      }))
    }
    let mF = 0;

    function uF() {
      var QQ;
      const FQ = null !== (QQ = jQ()) && void 0 !== QQ ? QQ : {
          gpu: QF
        },
        wQ = lQ();
      mF = zQ(), BQ = new sQ({
          changed: wF,
          iY: () => {
            bF({
              heldN: void 0
            })
          },
          ym: QQ => {
            var FQ;
            const wQ = lQ()[QQ],
              LQ = {
                heldN: wQ,
                heldAt: Date.now(),
                heldTarget: zQ()
              };
            (null === (FQ = jQ()) || void 0 === FQ ? void 0 : FQ.failedUpN) === wQ && (LQ.failedUpN = void 0), bF(LQ)
          },
          upFailed: QQ => {
            bF({
              failedUpN: lQ()[QQ],
              failedUpAt: Date.now()
            })
          },
          noGain: QQ => {
            bF({
              noGain: null === QQ ? void 0 : aQ(QQ)
            })
          }
        }, {
          lowest: wQ.length - 1,
          startStep: ZQ(),
          noGain: XQ(FQ.noGain),
          upWait: yQ(FQ, wQ)
        }),
        function(QQ) {
          const FQ = {
            get step() {
              return QQ.currentStep()
            },
            get n() {
              var QQ;
              return null !== (QQ = qF()) && void 0 !== QQ ? QQ : oF()
            },
            get scale() {
              var QQ;
              return lQ()[0] / (null !== (QQ = qF()) && void 0 !== QQ ? QQ : oF())
            },
            get msaaOff() {
              return VQ()
            },
            log: QQ.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: FQ,
            configurable: !0
          })
        }(BQ), wF()
    }

    function HF() {
      null !== BQ && zQ() !== mF && (gQ = null, uF())
    }

    function bF(QQ) {
      mQ.i.setItem(NQ, {
        ...jQ(),
        ...QQ,
        gpu: QF
      })
    }
    let YF = 0,
      xF = 0,
      AF = 0,
      tF = !1;

    function eF() {
      YF++
    }

    function MF(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      HF(), null !== BQ && (QQ - AF >= 1e3 && (tF = YF - xF > vQ.b.sceneChange.meshesPerSecond, xF = YF, AF = QQ), UQ.e.isHeld() ? BQ.paused(QQ) : BQ.frame(QQ, FQ, wQ && !document.hidden && EQ(), tF || LQ > 0 || (0, oQ.m)()))
    }

    function GF() {
      if (!dQ) {
        dQ = !0, null !== BQ && (BQ = null, bF({
          noGain: void 0
        }));
        try {
          wF()
        } catch (QQ) {
          console.error("The quality steps' resize to the player's n failed", QQ)
        }
      }
    }

    function pF() {
      var QQ;
      null === (QQ = BQ) || void 0 === QQ || QQ.resized(performance.now())
    }
  },
  9017: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ
    });
    var LQ = wQ(96),
      qQ = wQ(126);

    function oQ(QQ, FQ, wQ) {
      if ("webgpu" === QQ) return wQ ? ((0, LQ.seedGpuVendor)(wQ), {
        vendor: wQ,
        renderer: ""
      }) : null;
      try {
        const wQ = "webgl" === QQ ? FQ.getContext("webgl2") : FQ.getContext("webgl");
        "webgl" === QQ && wQ && (0, qQ.s)(wQ);
        const oQ = null === wQ || void 0 === wQ ? void 0 : wQ.getExtension("WEBGL_debug_renderer_info");
        if (wQ && oQ) {
          const QQ = String(wQ.getParameter(oQ.UNMASKED_VENDOR_WEBGL)),
            FQ = String(wQ.getParameter(oQ.UNMASKED_RENDERER_WEBGL));
          return (0, LQ.seedGpuVendor)(QQ), (0, qQ.x)(QQ, FQ), {
            vendor: QQ,
            renderer: FQ
          }
        }
        wQ && (0, qQ.x)(String(wQ.getParameter(wQ.VENDOR)), String(wQ.getParameter(wQ.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);