export const id = 173;
export const ids = [173];
export const modules = {
  8172: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => bW,
      g: () => hF
    });
    var CF = SF(33);
    const AF = new Map,
      uF = FF => `${FF}Chosen`;

    function hF(FF) {
      AF.set(FF, !0), CF.h.setItem(uF(FF), !0)
    }

    function bW(FF) {
      let WF = AF.get(FF);
      return void 0 === WF && (WF = !0 === CF.h.getItem(uF(FF)), AF.set(FF, WF)), WF
    }
  },
  8178: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => nF,
      e: () => TW,
      g: () => kS,
      i: () => tS,
      l: () => AW,
      m: () => hW,
      q: () => dW,
      t: () => aS,
      w: () => bS
    });
    var CF = SF(11),
      AF = SF(89),
      uF = SF(1475),
      hF = SF(8172),
      bW = SF(2205),
      dF = SF(2207),
      PF = SF(33);
    const {
      windows: RF,
      target: iW,
      stepDown: eF,
      stepUp: EF,
      noGain: QF
    } = dF.d, rW = 1e3 / 60 * 1.08, gW = 1e3 / 55, tW = 1e3 / 45, TF = 1e3 / 30 * .92, aW = 1e3 / 30 * 1.08;
    class kW {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(FF) {
        const WF = FF - this.lastMs;
        this.lastMs = FF;
        const SF = function(FF) {
          if (FF <= 0 || FF > 100) return -1;
          if (FF <= rW) return 0;
          if (FF >= gW && FF <= tW) return 1;
          return FF >= TF && FF <= aW ? 2 : -1
        }(WF);
        SF !== this.runBand && (this.runBand = SF, this.runLength = 0), SF < 0 || ++this.runLength < 3 || (0 === SF ? this.votes60++ : 1 === SF ? (this.votesMid++, this.sumMidMs += WF) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const qW = RF.windowMs,
      VF = RF.settleMs,
      NF = RF.graceMs,
      DF = RF.minIntervals,
      LF = 1e3 * DF / qW,
      mW = QF.backoffMs,
      OF = QF.maxMs;
    class xW {
      constructor(FF, WF) {
        let {
          lowest: SF,
          startStep: CF = 0,
          noGain: AF = null,
          upWait: uF = null
        } = WF;
        this.hooks = FF, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new kW, this.wasMeasuring = !1, this.lastFrameMs = -1, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = iW.maxFps, this.lowest = SF, this.step = Math.min(CF, SF), this.noGain = AF, this.climbing = this.step > 0;
        const hF = SF + 1;
        this.downUntilMs = new Array(hF).fill(0), this.downBackoffMs = new Array(hF).fill(0), this.upFailures = new Array(hF).fill(0), this.upUntilMs = new Array(hF).fill(0), null !== uF && uF.step >= 0 && uF.step < hF && (this.upUntilMs[uF.step] = uF.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(FF), SF) {
          if (this.wasMeasuring && FF - this.lastFrameMs > 2e3 && (this.wasMeasuring = !1, this.left(this.lastFrameMs)), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = FF, this.quietUntilMs = Math.max(this.quietUntilMs, FF + NF), this.graceUntilMs = FF + NF, this.windowStartMs = -1, void(this.slowStartMs = -1);
          FF - this.lastFrameMs > 500 && this.hitch(FF), this.lastFrameMs = FF, FF >= this.quietUntilMs && this.countWindow(FF, WF, CF) || WF && FF >= this.graceUntilMs && this.countSlow(FF)
        } else this.wasMeasuring && (this.wasMeasuring = !1, this.left(FF))
      }
      countWindow(FF, WF, SF) {
        if (this.windowStartMs < 0) return !!WF && (this.windowStartMs = FF, this.lastDrawnMs = FF, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = SF, !1);
        if (this.windowMasked ||= SF, !WF) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, FF - this.lastDrawnMs), this.lastDrawnMs = FF;
        const CF = FF - this.windowStartMs;
        if (CF < qW) return !1;
        const AF = this.windowIntervals,
          uF = 1e3 * AF / CF,
          hF = this.windowHeld,
          bW = this.windowMaxIntervalMs,
          dF = this.windowMasked;
        if (this.windowStartMs = -1, AF < DF) return !1;
        this.slowStartMs = -1;
        const PF = this.targetFps(),
          RF = uF >= PF * iW.cleanShare && bW <= iW.cleanMaxIntervalMs && (0 === hF || uF >= PF);
        return this.decide(uF, RF, uF < PF * iW.dropShare, dF, FF), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(iW.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(FF) {
        if (this.slowStartMs < 0) return this.slowStartMs = FF, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const WF = FF - this.slowStartMs;
        if (WF < 1e4) return;
        const SF = 1e3 * this.slowIntervals / WF;
        this.slowStartMs = -1, this.countSlow(FF), SF < LF && (this.windowStartMs = -1, this.decide(SF, !1, !0, !1, FF))
      }
      hitch(FF) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, FF + VF)
      }
      left(FF) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const WF = this.phase;
        "watch" !== WF.kind && (this.phase = {
          kind: "watch"
        }, this.setStep(WF.from, 0, FF, "left"), "up" === WF.kind && (this.climbed = WF.fromClimbed))
      }
      decide(FF, WF, SF, CF, AF) {
        const uF = this.phase;
        switch (uF.kind) {
          case "watch":
            return void this.watch(FF, WF, SF, CF, AF);
          case "down":
            if (uF.judged++, uF.fpsSum += FF, uF.dropped ||= SF, uF.judged < eF.judgeWindows) return;
            return void(!uF.dropped || uF.fpsSum / uF.judged >= uF.fromFps * eF.keepGain ? this.keepDown(uF.from, uF.fpsSum / uF.judged, AF) : this.noGainFrom(uF.from, uF.fromFps, AF));
          case "up":
            return WF ? void(++uF.judged >= EF.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: uF.from,
              heldWindows: 0,
              below: uF.fromClimbed
            }, this.record(AF, FF, "up_kept"))) : (CF ? (this.watchAt(uF.from), this.setStep(uF.from, FF, AF, "spoiled")) : this.failUp(this.step, uF.from, FF, AF), void(this.climbed = uF.fromClimbed))
        }
      }
      watch(FF, WF, SF, CF, AF) {
        const uF = this.climbed;
        if (null !== uF && !SF && !CF && ++uF.heldWindows >= EF.heldWindows && (this.climbed = null, this.record(AF, FF, "yS"), this.hooks.yS(this.step)), SF ? (this.dropRun++, this.dropRunFpsSum += FF, this.dropRunMasked ||= CF) : this.resetDropRun(), CF && WF || (this.cleanRun = WF ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? eF.maskedWindows : eF.dropWindows)) {
          const WF = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const SF = this.climbed;
          return void(null !== SF ? (this.failUp(this.step, SF.from, FF, AF), this.climbed = SF.below) : this.step < this.lowest && this.downAllowed(AF) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: WF,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, FF, AF, "down")))
        }
        const hF = this.step - 1;
        hF >= 0 && this.cleanRun >= (this.climbing ? EF.climbWindows : EF.cleanWindows) && this.upAllowed(hF, AF) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(hF, FF, AF, "up"))
      }
      downAllowed(FF) {
        return !(0 === this.step && null !== this.noGain && FF < this.noGain.untilMs) && FF >= this.downUntilMs[this.step]
      }
      upAllowed(FF, WF) {
        return this.upFailures[FF] <= EF.failWaitsMs.length && WF >= this.upUntilMs[FF]
      }
      keepDown(FF, WF, SF) {
        this.watchAt(this.step), this.downBackoffMs[FF] = 0, this.record(SF, WF, "down_kept"), 0 === FF && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.kept(this.step)
      }
      noGainFrom(FF, WF, SF) {
        var CF, AF;
        const uF = 0 === FF ? null !== (CF = null === (AF = this.noGain) || void 0 === AF ? void 0 : AF.backoffMs) && void 0 !== CF ? CF : 0 : this.downBackoffMs[FF],
          hF = 0 === uF ? mW : Math.min(2 * uF, OF);
        this.downBackoffMs[FF] = hF, this.downUntilMs[FF] = SF + hF, 0 === FF && (this.noGain = {
          untilMs: SF + hF,
          backoffMs: hF
        }, this.hooks.noGain(this.noGain)), this.watchAt(FF), this.setStep(FF, WF, SF, "no_gain")
      }
      failUp(FF, WF, SF, CF) {
        this.climbing = !1;
        const AF = ++this.upFailures[FF];
        this.upUntilMs[FF] = AF <= EF.failWaitsMs.length ? CF + EF.failWaitsMs[AF - 1] : Number.POSITIVE_INFINITY, this.watchAt(WF), this.setStep(WF, SF, CF, "up_failed"), this.hooks.upFailed(FF)
      }
      watchAt(FF) {
        this.phase = {
          kind: "watch"
        }, this.climbed = FF === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(FF, WF, SF, CF) {
        const AF = FF !== this.step;
        AF && (this.climbed = null), this.step = FF, this.record(SF, WF, CF), AF && (this.slowStartMs = -1, this.hitch(SF), this.hooks.changed(FF))
      }
      record(FF, WF, SF) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: FF,
          step: this.step,
          fps: Math.round(10 * WF) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: SF
        })
      }
    }
    var ZF = SF(8187),
      oF = SF(8189);
    const YF = "autoGraphics",
      MF = 6048e5,
      cW = "startScale";

    function GF() {
      return (0, bW.H)(CF.b.get("clientEscMenuOptions").pixelScale) * (0, bW.l)()
    }

    function zW() {
      return (0, bW.q)(GF())
    }

    function IF() {
      const FF = PF.h.getItem(YF);
      return "object" !== typeof FF || null === FF || "string" !== typeof FF.gpu ? null : FF
    }

    function fF(FF) {
      return {
        untilEpochMs: Date.now() + (FF.untilMs - performance.now()),
        backoffMs: FF.backoffMs
      }
    }

    function yW(FF) {
      return FF ? {
        untilMs: performance.now() + (FF.untilEpochMs - Date.now()),
        backoffMs: FF.backoffMs
      } : null
    }
    let sF = null;

    function nF() {
      if (null === sF) {
        const FF = new URLSearchParams(window.location.search).get("msaa");
        sF = CF.b.get("clientEscMenuOptions").antiAliasing && ("0" === FF || "1" !== FF && (!(0, hF.d)("antiAliasing") && (0, oF.b)() || function() {
          var FF;
          return HF(null === (FF = IF()) || void 0 === FF ? void 0 : FF.msaaOffAt) && !(0, oF.f)() && KF() && XF()
        }()))
      }
      return sF
    }

    function HF(FF) {
      const WF = "number" === typeof FF ? Date.now() - FF : -1;
      return WF >= 0 && WF < MF
    }

    function KF() {
      return CF.b.get("clientEscMenuOptions").antiAliasing && (0, AF.getDeviceDefaultAA)() && !(0, hF.d)("antiAliasing")
    }
    let wF = null;

    function XF() {
      return wF ??= (0, AF.getDeviceDefaultPixelScale)(), UF(wF)
    }

    function UF(FF) {
      const WF = CF.b.get("clientEscMenuOptions");
      return WF.pixelSmoothing && !(0, hF.d)("pixelScale") && WF.pixelScale === FF
    }
    let BF = null,
      jW = 0;

    function vW() {
      if (null === BF || jW !== GF()) {
        var FF;
        jW = GF();
        const WF = Number(null !== (FF = new URLSearchParams(window.location.search).get(cW)) && void 0 !== FF ? FF : ""),
          SF = zW();
        if (WF > 0 && WF <= 1) BF = (0, bW.z)(SF, SF[0] / WF);
        else {
          const FF = IF(),
            WF = (0, bW.z)(SF, (0, bW.C)(GF())),
            CF = !(0, oF.f)() && HF(null === FF || void 0 === FF ? void 0 : FF.heldAt) && (null === FF || void 0 === FF ? void 0 : FF.heldTarget) === GF() ? null === FF || void 0 === FF ? void 0 : FF.heldN : void 0;
          BF = "number" === typeof CF ? Math.min(WF, (0, bW.z)(SF, CF)) : WF
        }
      }
      return BF
    }

    function JF(FF, WF) {
      var SF;
      const CF = WF.indexOf(null !== (SF = FF.failedUpN) && void 0 !== SF ? SF : -1);
      return CF >= 0 && HF(FF.failedUpAt) ? {
        step: CF,
        untilMs: performance.now() + dF.d.stepUp.failWaitsMs[0]
      } : null
    }
    let pF = null,
      lF = !1,
      FW = "";
    const WW = new Set;

    function SW() {
      for (const FF of WW) FF()
    }

    function CW() {
      return lF ? null : (eW(), null === pF ? (null !== wF || null !== (0, AF.peekGpuVendor)() ? XF() : UF(1)) ? vW() : null : XF() ? pF.currentStep() : null)
    }

    function AW() {
      const FF = CW();
      if (null === FF) return null;
      const WF = zW(),
        SF = WF[Math.min(FF, WF.length - 1)];
      return SF === uW() ? null : SF
    }

    function uW() {
      return (0, bW.w)(CF.b.get("clientEscMenuOptions").pixelScale, (0, bW.l)())
    }

    function hW() {
      return null !== pF && null !== AW()
    }

    function bS(FF) {
      return WW.add(FF), () => {
        WW.delete(FF)
      }
    }

    function dW(FF, WF, SF) {
      var CF;
      if (null !== pF || lF || (0, oF.f)()) return;
      PW = nF();
      const AF = (0, ZF.c)(FF, WF, SF);
      null !== AF && (0, oF.h)(AF.vendor), FW = `${FF}:${(null===AF||void 0===AF?void 0:AF.renderer)||(null===AF||void 0===AF?void 0:AF.vendor)||""}`, (null === (CF = IF()) || void 0 === CF ? void 0 : CF.gpu) !== FW && (PF.h.setItem(YF, {
        gpu: FW
      }), BF = null), iS()
    }
    let PW = !1,
      RW = 0;

    function iS() {
      var FF;
      const WF = null !== (FF = IF()) && void 0 !== FF ? FF : {
          gpu: FW
        },
        SF = zW();
      RW = GF(), pF = new xW({
          changed: SW,
          kept: FF => {
            EW(zW()[FF] > uW() && KF() ? {
              msaaOffAt: Date.now(),
              heldN: void 0
            } : {
              heldN: void 0
            })
          },
          yS: FF => {
            var WF;
            const SF = zW()[FF],
              CF = {
                heldN: SF,
                heldAt: Date.now(),
                heldTarget: GF()
              };
            (null === (WF = IF()) || void 0 === WF ? void 0 : WF.failedUpN) === SF && (CF.failedUpN = void 0), EW(SF > uW() || PW ? CF : {
              ...CF,
              msaaOffAt: void 0
            })
          },
          upFailed: FF => {
            EW({
              failedUpN: zW()[FF],
              failedUpAt: Date.now()
            })
          },
          noGain: FF => {
            EW({
              noGain: null === FF ? void 0 : fF(FF)
            })
          }
        }, {
          lowest: SF.length - 1,
          startStep: vW(),
          noGain: yW(WF.noGain),
          upWait: JF(WF, SF)
        }),
        function(FF) {
          const WF = {
            get step() {
              return FF.currentStep()
            },
            get n() {
              var FF;
              return null !== (FF = AW()) && void 0 !== FF ? FF : uW()
            },
            get scale() {
              var FF;
              return zW()[0] / (null !== (FF = AW()) && void 0 !== FF ? FF : uW())
            },
            get msaaOff() {
              return nF()
            },
            log: FF.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: WF,
            configurable: !0
          })
        }(pF), SW()
    }

    function eW() {
      null !== pF && GF() !== RW && (BF = null, iS())
    }

    function EW(FF) {
      PF.h.setItem(YF, {
        ...IF(),
        ...FF,
        gpu: FW
      })
    }
    let QW = 0,
      rS = 0,
      gS = !1;

    function tS() {
      QW++
    }

    function TW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      eW(), null !== pF && (FF - rS >= 1e3 && (gS = QW > dF.d.sceneChange.meshesPerSecond, QW = 0, rS = FF), pF.frame(FF, WF, SF && !document.hidden && XF(), gS || CF > 0 || (0, uF.l)()))
    }

    function aS() {
      if (!lF) {
        lF = !0, null !== pF && (pF = null, EW({
          msaaOffAt: void 0,
          noGain: void 0
        }));
        try {
          SW()
        } catch (FF) {
          console.error("The quality steps' resize to the player's n failed", FF)
        }
      }
    }

    function kS() {
      var FF;
      null === (FF = pF) || void 0 === FF || FF.hitch(performance.now())
    }
  },
  8187: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(89),
      AF = SF(127);

    function uF(FF, WF, SF) {
      if ("webgpu" === FF) return SF ? ((0, CF.seedGpuVendor)(SF), {
        vendor: SF,
        renderer: ""
      }) : null;
      try {
        const SF = "webgl" === FF ? WF.getContext("webgl2") : WF.getContext("webgl"),
          uF = null === SF || void 0 === SF ? void 0 : SF.getExtension("WEBGL_debug_renderer_info");
        if (SF && uF) {
          const FF = String(SF.getParameter(uF.UNMASKED_VENDOR_WEBGL)),
            WF = String(SF.getParameter(uF.UNMASKED_RENDERER_WEBGL));
          return (0, CF.seedGpuVendor)(FF), (0, AF.s)(FF, WF), {
            vendor: FF,
            renderer: WF
          }
        }
        SF && (0, AF.s)(String(SF.getParameter(SF.VENDOR)), String(SF.getParameter(SF.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);