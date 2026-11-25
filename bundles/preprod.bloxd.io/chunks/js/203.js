export const id = 203;
export const ids = [203];
export const modules = {
  34443: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => xQ,
      f: () => vW,
      i: () => bW,
      m: () => HW,
      n: () => PW,
      r: () => JW,
      v: () => IW,
      x: () => dW,
      A: () => rW
    });
    var wQ = XQ(307),
      qQ = XQ(26),
      TQ = XQ(105),
      zQ = XQ(1698),
      sQ = XQ(4744),
      FQ = XQ(3146),
      PQ = XQ(3152),
      gQ = XQ(43);
    const {
      windows: JQ,
      target: rQ,
      stepDown: IQ,
      stepUp: jQ,
      noGain: BQ
    } = PQ.c, yQ = 1e3 / 60 * 1.08, VQ = 1e3 / 55, DQ = 1e3 / 45, pQ = 1e3 / 30 * .92, GQ = 1e3 / 30 * 1.08;
    class UQ {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(QQ, WQ) {
        const XQ = QQ - this.lastMs;
        this.lastMs = QQ;
        const wQ = function(QQ) {
          if (QQ <= 0 || QQ > 100) return -1;
          if (QQ <= yQ) return 0;
          if (QQ >= VQ && QQ <= DQ) return 1;
          return QQ >= pQ && QQ <= GQ ? 2 : -1
        }(XQ);
        0 === wQ && 2 === this.runBand && WQ && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), wQ !== this.runBand && (this.runBand = wQ, this.runLength = 0), wQ < 0 || ++this.runLength < 3 || (0 === wQ ? this.votes60++ : 1 === wQ ? (this.votesMid++, this.sumMidMs += XQ) : (this.votes30++, WQ && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }

    function bQ(QQ, WQ, XQ) {
      const {
        fast: wQ,
        masked: qQ,
        longFrame: TQ,
        paced: zQ
      } = QQ;
      return !TQ && (wQ && !zQ || WQ) ? qQ && !XQ ? "hold" : "rise" : qQ ? QQ.dropping ? "break" : "hold" : (TQ ? wQ || WQ : wQ && !XQ) ? "hold" : "break"
    }
    const vQ = JQ.windowMs,
      dQ = JQ.settleMs,
      HQ = JQ.graceMs,
      aQ = JQ.minIntervals,
      lQ = 1e3 * aQ / vQ,
      hQ = Math.floor(1e4 / vQ),
      iQ = BQ.backoffMs,
      cQ = BQ.maxMs;
    class AQ {
      constructor(QQ, WQ) {
        let {
          lowest: XQ,
          startStep: wQ = 0,
          noGain: qQ = null,
          upWait: TQ = null
        } = WQ;
        this.hooks = QQ, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new UQ, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = rQ.maxFps, this.lowest = XQ, this.step = Math.min(wQ, XQ), this.noGain = qQ, this.climbing = this.step > 0;
        const zQ = XQ + 1;
        this.downUntilMs = new Array(zQ).fill(0), this.downBackoffMs = new Array(zQ).fill(0), this.noGainFps = new Array(zQ).fill(0), this.noGainFps[0] = null === qQ ? 0 : qQ.fps, this.keptFps = new Array(zQ).fill(0), this.lenientUpFps = new Array(zQ).fill(0), this.lenientUpAtMs = new Array(zQ).fill(0), this.upFailures = new Array(zQ).fill(0), this.upUntilMs = new Array(zQ).fill(0), null !== TQ && TQ.step >= 0 && TQ.step < zQ && (this.upUntilMs[TQ.step] = TQ.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(QQ, XQ && !wQ), !XQ) return void this.leave(QQ);
        const qQ = QQ - this.lastFrameMs,
          TQ = this.resizeStall(QQ);
        if (qQ > 2e3 && !TQ && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = QQ, this.quietUntilMs = Math.max(this.quietUntilMs, QQ + HQ), this.graceUntilMs = QQ + HQ, this.windowStartMs = -1, void(this.slowStartMs = -1);
        qQ > 500 && (this.hitch(QQ), TQ && (this.slowStartMs = -1)), this.lastFrameMs = QQ, QQ >= this.quietUntilMs && this.countWindow(QQ, WQ, wQ) || WQ && QQ >= this.graceUntilMs && this.countSlow(QQ, wQ)
      }
      countWindow(QQ, WQ, XQ) {
        if (this.windowStartMs < 0) return !!WQ && (this.windowStartMs = QQ, this.lastDrawnMs = QQ, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = XQ, !1);
        if (this.windowMasked ||= XQ, !WQ) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, QQ - this.lastDrawnMs), this.lastDrawnMs = QQ;
        const wQ = QQ - this.windowStartMs;
        if (wQ < vQ) return !1;
        const qQ = this.windowIntervals,
          TQ = 1e3 * qQ / wQ,
          zQ = this.windowHeld,
          sQ = this.windowMaxIntervalMs,
          FQ = this.windowMasked;
        if (this.windowStartMs = -1, qQ < aQ) return !1;
        this.slowStartMs = -1;
        const PQ = this.targetFps();
        return this.decide(TQ, 1, {
          fast: TQ >= PQ * rQ.cleanShare,
          dropping: TQ < PQ * rQ.dropShare,
          masked: FQ,
          longFrame: sQ > rQ.cleanMaxIntervalMs,
          paced: zQ > rQ.maxHeldFrames && TQ < .999 * PQ
        }, QQ), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(rQ.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(QQ, WQ) {
        if (this.slowStartMs < 0) return this.slowStartMs = QQ, this.slowIntervals = 0, void(this.slowMasked = WQ);
        this.slowMasked ||= WQ, this.slowIntervals++;
        const XQ = QQ - this.slowStartMs;
        if (XQ < 1e4) return;
        const wQ = 1e3 * this.slowIntervals / XQ,
          qQ = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(QQ, WQ), wQ < lQ && (this.windowStartMs = -1, this.decide(wQ, hQ, {
          fast: !1,
          dropping: !0,
          masked: qQ,
          longFrame: !1,
          paced: !1
        }, QQ))
      }
      resizeStall(QQ) {
        return this.lastFrameMs - this.resizedMs <= dQ && QQ - this.lastFrameMs <= 15e3
      }
      paused(QQ) {
        this.refresh.frame(QQ, !1), QQ - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, QQ + HQ), this.graceUntilMs = QQ + HQ), this.lastFrameMs = QQ, this.slowStartMs = -1, this.hitch(QQ)
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
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, QQ + dQ)
      }
      left(QQ) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const WQ = this.phase;
        "watch" !== WQ.kind && (this.phase = {
          kind: "watch"
        }, "down" === WQ.kind && (this.downUntilMs[WQ.from] = QQ + iQ, this.noGainFps[WQ.from] = 0, 0 === WQ.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, QQ + iQ)
        })), this.setStep(WQ.from, 0, QQ, "left"), "up" === WQ.kind && (this.climbed = WQ.fromClimbed))
      }
      decide(QQ, WQ, XQ, wQ) {
        const {
          dropping: qQ,
          masked: TQ
        } = XQ;
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: wQ,
          step: this.step,
          fps: Math.round(10 * QQ) / 10,
          windows: WQ,
          masked: TQ,
          dropping: qQ
        });
        const zQ = this.phase;
        switch (zQ.kind) {
          case "watch": {
            const zQ = !qQ && this.keptAfterDip(this.step) && QQ >= this.keptFps[this.step] * jQ.recoverGain;
            return void this.watch(QQ, WQ, bQ(XQ, zQ, !1), qQ, TQ, wQ)
          }
          case "down": {
            if (zQ.judged += WQ, zQ.fpsSum += QQ * WQ, zQ.minFps = Math.min(zQ.minFps, QQ), TQ || (zQ.clean += WQ, zQ.cleanFpsSum += QQ * WQ, zQ.cleanMinFps = Math.min(zQ.cleanMinFps, QQ)), zQ.judged < IQ.judgeWindows) return;
            const XQ = zQ.clean > 0 ? zQ.cleanFpsSum / zQ.clean : zQ.fpsSum / zQ.judged;
            if (XQ >= zQ.fromFps * IQ.keepGain) {
              const QQ = zQ.clean > 0 ? zQ.cleanMinFps : zQ.minFps;
              this.keepDown(zQ.from, zQ.fromFps, XQ, Math.min(QQ, zQ.fromFps * IQ.keepGain), wQ)
            } else this.noGainFrom(zQ, XQ, wQ);
            return
          }
          case "up": {
            const WQ = this.keptAfterDip(zQ.from),
              sQ = bQ(XQ, WQ && !qQ, !0);
            if ("hold" === sQ && (zQ.maskedHolds += TQ ? 1 : 0, ++zQ.holds <= jQ.trialHoldWindows)) return;
            return "rise" !== sQ ? (TQ || "hold" === sQ && zQ.maskedHolds > 0 ? (this.watchAt(zQ.from), this.setStep(zQ.from, QQ, wQ, "spoiled")) : this.failUp(this.step, zQ.from, QQ, wQ), void(this.climbed = zQ.fromClimbed)) : (zQ.fpsSum += QQ, void(++zQ.judged >= jQ.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: zQ.from,
              heldWindows: 0,
              below: zQ.fromClimbed
            }, this.lenientUpFps[this.step] = WQ ? zQ.fpsSum / zQ.judged : 0, this.lenientUpAtMs[this.step] = wQ, this.record(wQ, QQ, "up_kept"))))
          }
        }
      }
      watch(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = this.climbed;
        null !== zQ && !wQ && !qQ && ++zQ.heldWindows >= jQ.heldWindows && (this.climbed = null, this.record(TQ, QQ, "Ds"), this.hooks.Ds(this.step)), wQ ? (this.dropRun += WQ, this.dropRunFpsSum += QQ * WQ, this.dropRunMasked ||= qQ, qQ || (this.dropRunClean += WQ, this.dropRunCleanFpsSum += QQ * WQ)) : this.resetDropRun(), "hold" !== XQ && (this.cleanRun = "rise" === XQ ? this.cleanRun + 1 : 0);
        const sQ = null !== this.climbed ? jQ : IQ;
        if (this.dropRun >= (this.dropRunMasked ? sQ.maskedWindows : sQ.dropWindows)) {
          const WQ = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            XQ = this.dropRunClean >= IQ.dropWindows && WQ < this.noGainFps[this.step] * BQ.heavierShare;
          this.resetDropRun();
          const wQ = this.climbed;
          return void(null !== wQ ? (this.failUp(this.step, wQ.from, QQ, TQ), this.climbed = wQ.below) : this.step < this.lowest && (XQ || this.waitOver(TQ)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: WQ,
            early: !this.waitOver(TQ),
            judged: 0,
            fpsSum: 0,
            minFps: 1 / 0,
            clean: 0,
            cleanFpsSum: 0,
            cleanMinFps: 1 / 0
          }, this.setStep(this.step + 1, WQ, TQ, "down")))
        }
        const FQ = this.step - 1;
        FQ >= 0 && this.cleanRun >= (this.climbing ? jQ.climbWindows : jQ.cleanWindows) && TQ >= this.upUntilMs[FQ] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fpsSum: 0,
          holds: 0,
          maskedHolds: 0,
          fromClimbed: this.climbed
        }, this.setStep(FQ, QQ, TQ, "up"))
      }
      waitOver(QQ) {
        return !(0 === this.step && null !== this.noGain && QQ < this.noGain.untilMs) && QQ >= this.downUntilMs[this.step]
      }
      keptAfterDip(QQ) {
        return this.keptFps[QQ] > 0
      }
      keepDown(QQ, WQ, XQ, wQ, qQ) {
        this.watchAt(this.step), this.keptFps[this.step] = wQ;
        const TQ = this.lenientUpFps[QQ];
        TQ > 0 && qQ - this.lenientUpAtMs[QQ] < jQ.lenientFailMs && WQ * jQ.recoverGain >= TQ && this.failTrial(QQ, qQ), this.downBackoffMs[QQ] = 0, this.noGainFps[QQ] = 0, this.record(qQ, XQ, "down_kept"), 0 === QQ && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.HI(this.step)
      }
      noGainFrom(QQ, WQ, XQ) {
        var wQ, qQ;
        let {
          from: TQ,
          fromFps: zQ,
          early: sQ
        } = QQ;
        const FQ = 0 === TQ ? null !== (wQ = null === (qQ = this.noGain) || void 0 === qQ ? void 0 : qQ.backoffMs) && void 0 !== wQ ? wQ : 0 : this.downBackoffMs[TQ],
          PQ = 0 === FQ ? iQ : sQ ? FQ : Math.min(2 * FQ, cQ),
          gQ = Math.max(zQ, WQ);
        this.downBackoffMs[TQ] = PQ, this.downUntilMs[TQ] = XQ + PQ, this.noGainFps[TQ] = gQ, 0 === TQ && (this.noGain = {
          untilMs: XQ + PQ,
          backoffMs: PQ,
          fps: gQ
        }, this.hooks.noGain(this.noGain)), this.watchAt(TQ), this.setStep(TQ, WQ, XQ, "no_gain")
      }
      failUp(QQ, WQ, XQ, wQ) {
        this.failTrial(QQ, wQ), this.watchAt(WQ), this.setStep(WQ, XQ, wQ, "up_failed")
      }
      failTrial(QQ, WQ) {
        this.climbing = !1, this.lenientUpFps[QQ] = 0;
        const XQ = jQ.failWaitsMs;
        this.upUntilMs[QQ] = WQ + XQ[Math.min(++this.upFailures[QQ], XQ.length) - 1], this.hooks.upFailed(QQ)
      }
      watchAt(QQ) {
        this.phase = {
          kind: "watch"
        }, this.climbed = QQ === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(QQ, WQ, XQ, wQ) {
        const qQ = QQ !== this.step;
        qQ && (this.climbed = null), this.step = QQ, this.record(XQ, WQ, wQ), qQ && (this.slowStartMs = -1, this.resized(XQ), this.hooks.changed(QQ))
      }
      record(QQ, WQ, XQ) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: QQ,
          step: this.step,
          fps: Math.round(10 * WQ) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: XQ
        })
      }
    }
    var RQ = XQ(34448),
      EQ = XQ(3381),
      CQ = XQ(34455);
    const uQ = "autoGraphics",
      LQ = 6048e5,
      kQ = "startScale";

    function fQ() {
      return (0, FQ.P)(qQ.b.get("clientEscMenuOptions").pixelScale) * (0, FQ.J)()
    }

    function SQ() {
      return (0, FQ.v)(fQ())
    }

    function tQ() {
      const QQ = gQ.i.getItem(uQ);
      return "object" !== typeof QQ || null === QQ || "string" !== typeof QQ.gpu ? null : QQ
    }

    function oQ(QQ) {
      return {
        untilEpochMs: Date.now() + (QQ.untilMs - performance.now()),
        backoffMs: QQ.backoffMs,
        fps: QQ.fps
      }
    }

    function eQ(QQ) {
      return void 0 === QQ || "number" !== typeof QQ.fps ? null : {
        untilMs: performance.now() + (QQ.untilEpochMs - Date.now()),
        backoffMs: QQ.backoffMs,
        fps: QQ.fps
      }
    }
    let nQ = null;

    function xQ() {
      if (null === nQ) {
        const QQ = new URLSearchParams(window.location.search).get("msaa");
        nQ = qQ.b.get("clientEscMenuOptions").antiAliasing && ("0" === QQ || "1" !== QQ && !(0, sQ.c)("antiAliasing") && (0, EQ.e)())
      }
      return nQ
    }

    function YQ(QQ) {
      const WQ = "number" === typeof QQ ? Date.now() - QQ : -1;
      return WQ >= 0 && WQ < LQ
    }
    let NQ = null;

    function ZQ() {
      return NQ ??= (0, TQ.getDeviceDefaultPixelScale)(), OQ(NQ)
    }

    function OQ(QQ) {
      const WQ = qQ.b.get("clientEscMenuOptions");
      return WQ.pixelSmoothing && !(0, sQ.c)("pixelScale") && WQ.pixelScale === QQ
    }
    let KQ = null,
      mQ = 0;

    function MQ() {
      if (null === KQ || mQ !== fQ()) {
        var QQ;
        mQ = fQ();
        const WQ = Number(null !== (QQ = new URLSearchParams(window.location.search).get(kQ)) && void 0 !== QQ ? QQ : ""),
          XQ = SQ();
        if (WQ > 0 && WQ <= 1) KQ = (0, FQ.F)(XQ, XQ[0] / WQ);
        else {
          const QQ = tQ(),
            WQ = QW(XQ, fQ()),
            wQ = !(0, EQ.k)() && YQ(null === QQ || void 0 === QQ ? void 0 : QQ.heldAt) && (null === QQ || void 0 === QQ ? void 0 : QQ.heldTarget) === fQ() ? null === QQ || void 0 === QQ ? void 0 : QQ.heldN : void 0;
          KQ = "number" === typeof wQ ? Math.min(WQ, (0, FQ.F)(XQ, wQ)) : WQ
        }
      }
      return KQ
    }

    function QW(QQ, WQ) {
      return (0, FQ.F)(QQ, (0, FQ.G)(WQ))
    }

    function WW(QQ, WQ, XQ) {
      const wQ = QQ.length - 1;
      return (0, TQ.isMobile)() ? Math.min(wQ, Math.max(XQ, QW(QQ, WQ) + PQ.c.pixels.mobileRungsBelowStart)) : wQ
    }

    function XW(QQ, WQ) {
      var XQ;
      const wQ = WQ.indexOf(null !== (XQ = QQ.failedUpN) && void 0 !== XQ ? XQ : -1);
      return wQ >= 0 && YQ(QQ.failedUpAt) ? {
        step: wQ,
        untilMs: performance.now() + PQ.c.stepUp.failWaitsMs[0]
      } : null
    }
    let wW = null,
      qW = !1,
      TW = "";
    const zW = new Set;

    function sW() {
      for (const QQ of zW) QQ()
    }

    function FW() {
      return qW ? null : (yW(), null === wW ? (null !== NQ || null !== (0, TQ.peekGpuVendor)() ? ZQ() : OQ(1)) ? MQ() : null : ZQ() ? wW.currentStep() : null)
    }

    function PW() {
      const QQ = FW();
      if (null === QQ) return null;
      const WQ = SQ(),
        XQ = WQ[Math.min(QQ, WQ.length - 1)];
      return XQ === gW() ? null : XQ
    }

    function gW() {
      return (0, FQ.y)(qQ.b.get("clientEscMenuOptions").pixelScale, (0, FQ.J)())
    }

    function JW() {
      return null !== wW && null !== PW()
    }

    function rW(QQ) {
      return zW.add(QQ), () => {
        zW.delete(QQ)
      }
    }

    function IW(QQ, WQ, XQ) {
      var qQ;
      if (null !== wW || qW || (0, EQ.k)()) return;
      const TQ = (0, RQ.b)(QQ, WQ, XQ);
      null !== TQ && ((0, EQ.l)(TQ.vendor), "" !== TQ.renderer && (0, wQ.k)(TQ.vendor, TQ.renderer)), TW = `${QQ}:${(null===TQ||void 0===TQ?void 0:TQ.renderer)||(null===TQ||void 0===TQ?void 0:TQ.vendor)||""}`, (null === (qQ = tQ()) || void 0 === qQ ? void 0 : qQ.gpu) !== TW && (gQ.i.setItem(uQ, {
        gpu: TW
      }), KQ = null), BW(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var QQ;
          null === (QQ = wW) || void 0 === QQ || QQ.hidden()
        } catch (WQ) {
          dW(), console.error("The quality steps stopped", WQ)
        }
      }))
    }
    let jW = 0;

    function BW() {
      var QQ;
      const WQ = null !== (QQ = tQ()) && void 0 !== QQ ? QQ : {
          gpu: TW
        },
        XQ = SQ();
      jW = fQ();
      const wQ = MQ();
      wW = new AQ({
          changed: sW,
          HI: () => {
            VW({
              heldN: void 0
            })
          },
          Ds: QQ => {
            var WQ;
            const XQ = SQ()[QQ],
              wQ = {
                heldN: XQ,
                heldAt: Date.now(),
                heldTarget: fQ()
              };
            (null === (WQ = tQ()) || void 0 === WQ ? void 0 : WQ.failedUpN) === XQ && (wQ.failedUpN = void 0), VW(wQ)
          },
          upFailed: QQ => {
            VW({
              failedUpN: SQ()[QQ],
              failedUpAt: Date.now()
            })
          },
          noGain: QQ => {
            VW({
              noGain: null === QQ ? void 0 : oQ(QQ)
            })
          }
        }, {
          lowest: WW(XQ, jW, wQ),
          startStep: wQ,
          noGain: eQ(WQ.noGain),
          upWait: XW(WQ, XQ)
        }),
        function(QQ) {
          const WQ = {
            get step() {
              return QQ.currentStep()
            },
            get n() {
              var QQ;
              return null !== (QQ = PW()) && void 0 !== QQ ? QQ : gW()
            },
            get scale() {
              var QQ;
              return SQ()[0] / (null !== (QQ = PW()) && void 0 !== QQ ? QQ : gW())
            },
            get msaaOff() {
              return xQ()
            },
            log: QQ.log,
            windows: QQ.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: WQ,
            configurable: !0
          })
        }(wW), sW()
    }

    function yW() {
      null !== wW && fQ() !== jW && (KQ = null, BW())
    }

    function VW(QQ) {
      gQ.i.setItem(uQ, {
        ...tQ(),
        ...QQ,
        gpu: TW
      })
    }
    let DW = 0,
      pW = 0,
      GW = 0,
      UW = !1;

    function bW() {
      DW++
    }

    function vW(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      yW(), null !== wW && (QQ - GW >= 1e3 && (UW = DW - pW > PQ.c.sceneChange.meshesPerSecond, pW = DW, GW = QQ), CQ.c.isHeld() ? wW.paused(QQ) : wW.frame(QQ, WQ, XQ && !document.hidden && ZQ(), UW || wQ > 0 || (0, zQ.r)()))
    }

    function dW() {
      if (!qW) {
        qW = !0, null !== wW && (wW = null, VW({
          noGain: void 0
        }));
        try {
          sW()
        } catch (QQ) {
          console.error("The quality steps' resize to the player's n failed", QQ)
        }
      }
    }

    function HW() {
      var QQ;
      null === (QQ = wW) || void 0 === QQ || QQ.resized(performance.now())
    }
  },
  34448: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ
    });
    var wQ = XQ(105),
      qQ = XQ(150);

    function TQ(QQ, WQ, XQ) {
      if ("webgpu" === QQ) return XQ ? ((0, wQ.seedGpuVendor)(XQ), {
        vendor: XQ,
        renderer: ""
      }) : null;
      try {
        const XQ = "webgl" === QQ ? WQ.getContext("webgl2") : WQ.getContext("webgl");
        "webgl" === QQ && XQ && (0, qQ.D)(XQ);
        const TQ = null === XQ || void 0 === XQ ? void 0 : XQ.getExtension("WEBGL_debug_renderer_info");
        if (XQ && TQ) {
          const QQ = String(XQ.getParameter(TQ.UNMASKED_VENDOR_WEBGL)),
            WQ = String(XQ.getParameter(TQ.UNMASKED_RENDERER_WEBGL));
          return (0, wQ.seedGpuVendor)(QQ), (0, qQ.I)(QQ, WQ), {
            vendor: QQ,
            renderer: WQ
          }
        }
        XQ && (0, qQ.I)(String(XQ.getParameter(XQ.VENDOR)), String(XQ.getParameter(XQ.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);