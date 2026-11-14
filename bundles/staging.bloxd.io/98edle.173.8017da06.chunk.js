export const id = 173;
export const ids = [173];
export const modules = {
  8097: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR,
      g: () => AW
    });
    var wW = MW(50);
    const CW = new Map,
      zR = WW => `${WW}Chosen`;

    function AW(WW) {
      CW.set(WW, !0), wW.g.setItem(zR(WW), !0)
    }

    function bR(WW) {
      let RW = CW.get(WW);
      return void 0 === RW && (RW = !0 === wW.g.getItem(zR(WW)), CW.set(WW, RW)), RW
    }
  },
  8106: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => vR,
      h: () => PR,
      j: () => oR,
      k: () => JR,
      o: () => CR,
      q: () => AR,
      r: () => yM,
      u: () => IR,
      v: () => bM
    });
    var wW = MW(27),
      CW = MW(116),
      zR = MW(1459),
      AW = MW(8097),
      bR = MW(2178),
      yR = MW(2180),
      NW = MW(50);
    const {
      windows: eW,
      target: BW,
      stepDown: tR,
      stepUp: TW,
      noGain: gR
    } = yR.b, iR = 1e3 / 60 * 1.08, YW = 1e3 / 55, JW = 1e3 / 45, PW = 1e3 / 30 * .92, IW = 1e3 / 30 * 1.08;
    class oW {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(WW) {
        const RW = WW - this.lastMs;
        this.lastMs = WW;
        const MW = function(WW) {
          if (WW <= 0 || WW > 100) return -1;
          if (WW <= iR) return 0;
          if (WW >= YW && WW <= JW) return 1;
          return WW >= PW && WW <= IW ? 2 : -1
        }(RW);
        MW !== this.runBand && (this.runBand = MW, this.runLength = 0), MW < 0 || ++this.runLength < 3 || (0 === MW ? this.votes60++ : 1 === MW ? (this.votesMid++, this.sumMidMs += RW) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const lW = eW.windowMs,
      FW = eW.settleMs,
      fW = eW.graceMs,
      QW = eW.minIntervals,
      rR = 1e3 * QW / lW,
      cR = gR.backoffMs,
      XW = gR.maxMs;
    class jR {
      constructor(WW, RW) {
        let {
          lowest: MW,
          startStep: wW = 0,
          noGain: CW = null,
          upWait: zR = null
        } = RW;
        this.hooks = WW, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new oW, this.wasMeasuring = !1, this.lastFrameMs = -1, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = BW.maxFps, this.lowest = MW, this.step = Math.min(wW, MW), this.noGain = CW, this.climbing = this.step > 0;
        const AW = MW + 1;
        this.downUntilMs = new Array(AW).fill(0), this.downBackoffMs = new Array(AW).fill(0), this.upFailures = new Array(AW).fill(0), this.upUntilMs = new Array(AW).fill(0), null !== zR && zR.step >= 0 && zR.step < AW && (this.upUntilMs[zR.step] = zR.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(WW), MW) {
          if (this.wasMeasuring && WW - this.lastFrameMs > 2e3 && (this.wasMeasuring = !1, this.left(this.lastFrameMs)), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = WW, this.quietUntilMs = Math.max(this.quietUntilMs, WW + fW), this.graceUntilMs = WW + fW, this.windowStartMs = -1, void(this.slowStartMs = -1);
          WW - this.lastFrameMs > 500 && this.hitch(WW), this.lastFrameMs = WW, WW >= this.quietUntilMs && this.countWindow(WW, RW, wW) || RW && WW >= this.graceUntilMs && this.countSlow(WW)
        } else this.wasMeasuring && (this.wasMeasuring = !1, this.left(WW))
      }
      countWindow(WW, RW, MW) {
        if (this.windowStartMs < 0) return !!RW && (this.windowStartMs = WW, this.lastDrawnMs = WW, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = MW, !1);
        if (this.windowMasked ||= MW, !RW) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, WW - this.lastDrawnMs), this.lastDrawnMs = WW;
        const wW = WW - this.windowStartMs;
        if (wW < lW) return !1;
        const CW = this.windowIntervals,
          zR = 1e3 * CW / wW,
          AW = this.windowHeld,
          bR = this.windowMaxIntervalMs,
          yR = this.windowMasked;
        if (this.windowStartMs = -1, CW < QW) return !1;
        this.slowStartMs = -1;
        const NW = this.targetFps(),
          eW = zR >= NW * BW.cleanShare && bR <= BW.cleanMaxIntervalMs && (0 === AW || zR >= NW);
        return this.decide(zR, eW, zR < NW * BW.dropShare, yR, WW), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(BW.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(WW) {
        if (this.slowStartMs < 0) return this.slowStartMs = WW, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const RW = WW - this.slowStartMs;
        if (RW < 1e4) return;
        const MW = 1e3 * this.slowIntervals / RW;
        this.slowStartMs = -1, this.countSlow(WW), MW < rR && (this.windowStartMs = -1, this.decide(MW, !1, !0, !1, WW))
      }
      hitch(WW) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, WW + FW)
      }
      left(WW) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const RW = this.phase;
        "watch" !== RW.kind && (this.phase = {
          kind: "watch"
        }, this.setStep(RW.from, 0, WW, "left"), "up" === RW.kind && (this.climbed = RW.fromClimbed))
      }
      decide(WW, RW, MW, wW, CW) {
        const zR = this.phase;
        switch (zR.kind) {
          case "watch":
            return void this.watch(WW, RW, MW, wW, CW);
          case "down":
            if (zR.judged++, zR.fpsSum += WW, zR.dropped ||= MW, zR.judged < tR.judgeWindows) return;
            return void(!zR.dropped || zR.fpsSum / zR.judged >= zR.fromFps * tR.keepGain ? this.keepDown(zR.from, zR.fpsSum / zR.judged, CW) : this.noGainFrom(zR.from, zR.fromFps, CW));
          case "up":
            return RW ? void(++zR.judged >= TW.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: zR.from,
              heldWindows: 0,
              below: zR.fromClimbed
            }, this.record(CW, WW, "up_kept"))) : (wW ? (this.watchAt(zR.from), this.setStep(zR.from, WW, CW, "spoiled")) : this.failUp(this.step, zR.from, WW, CW), void(this.climbed = zR.fromClimbed))
        }
      }
      watch(WW, RW, MW, wW, CW) {
        const zR = this.climbed;
        if (null !== zR && !MW && !wW && ++zR.heldWindows >= TW.heldWindows && (this.climbed = null, this.record(CW, WW, "mM"), this.hooks.mM(this.step)), MW ? (this.dropRun++, this.dropRunFpsSum += WW, this.dropRunMasked ||= wW) : this.resetDropRun(), wW && RW || (this.cleanRun = RW ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? tR.maskedWindows : tR.dropWindows)) {
          const RW = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const MW = this.climbed;
          return void(null !== MW ? (this.failUp(this.step, MW.from, WW, CW), this.climbed = MW.below) : this.step < this.lowest && this.downAllowed(CW) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: RW,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, WW, CW, "down")))
        }
        const AW = this.step - 1;
        AW >= 0 && this.cleanRun >= (this.climbing ? TW.climbWindows : TW.cleanWindows) && this.upAllowed(AW, CW) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(AW, WW, CW, "up"))
      }
      downAllowed(WW) {
        return !(0 === this.step && null !== this.noGain && WW < this.noGain.untilMs) && WW >= this.downUntilMs[this.step]
      }
      upAllowed(WW, RW) {
        return this.upFailures[WW] <= TW.failWaitsMs.length && RW >= this.upUntilMs[WW]
      }
      keepDown(WW, RW, MW) {
        this.watchAt(this.step), this.downBackoffMs[WW] = 0, this.record(MW, RW, "down_kept"), 0 === WW && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.kept(this.step)
      }
      noGainFrom(WW, RW, MW) {
        var wW, CW;
        const zR = 0 === WW ? null !== (wW = null === (CW = this.noGain) || void 0 === CW ? void 0 : CW.backoffMs) && void 0 !== wW ? wW : 0 : this.downBackoffMs[WW],
          AW = 0 === zR ? cR : Math.min(2 * zR, XW);
        this.downBackoffMs[WW] = AW, this.downUntilMs[WW] = MW + AW, 0 === WW && (this.noGain = {
          untilMs: MW + AW,
          backoffMs: AW
        }, this.hooks.noGain(this.noGain)), this.watchAt(WW), this.setStep(WW, RW, MW, "no_gain")
      }
      failUp(WW, RW, MW, wW) {
        this.climbing = !1;
        const CW = ++this.upFailures[WW];
        this.upUntilMs[WW] = CW <= TW.failWaitsMs.length ? wW + TW.failWaitsMs[CW - 1] : Number.POSITIVE_INFINITY, this.watchAt(RW), this.setStep(RW, MW, wW, "up_failed"), this.hooks.upFailed(WW)
      }
      watchAt(WW) {
        this.phase = {
          kind: "watch"
        }, this.climbed = WW === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(WW, RW, MW, wW) {
        const CW = WW !== this.step;
        CW && (this.climbed = null), this.step = WW, this.record(MW, RW, wW), CW && (this.slowStartMs = -1, this.hitch(MW), this.hooks.changed(WW))
      }
      record(WW, RW, MW) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: WW,
          step: this.step,
          fps: Math.round(10 * RW) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: MW
        })
      }
    }
    var kR = MW(8115),
      aR = MW(8118);
    const sW = "autoGraphics",
      dW = 6048e5,
      pW = "startScale";

    function hW() {
      return (0, bR.A)(wW.b.get("clientEscMenuOptions").pixelScale) * (0, bR.i)()
    }

    function UW() {
      return (0, bR.k)(hW())
    }

    function EW() {
      const WW = NW.g.getItem(sW);
      return "object" !== typeof WW || null === WW || "string" !== typeof WW.gpu ? null : WW
    }

    function VW(WW) {
      return {
        untilEpochMs: Date.now() + (WW.untilMs - performance.now()),
        backoffMs: WW.backoffMs
      }
    }

    function mR(WW) {
      return WW ? {
        untilMs: performance.now() + (WW.untilEpochMs - Date.now()),
        backoffMs: WW.backoffMs
      } : null
    }
    let xR = null;

    function vR() {
      if (null === xR) {
        const WW = new URLSearchParams(window.location.search).get("msaa");
        xR = wW.b.get("clientEscMenuOptions").antiAliasing && ("0" === WW || "1" !== WW && (!(0, AW.d)("antiAliasing") && (0, aR.b)() || function() {
          var WW;
          return KW(null === (WW = EW()) || void 0 === WW ? void 0 : WW.msaaOffAt) && !(0, aR.g)() && uW() && nW()
        }()))
      }
      return xR
    }

    function KW(WW) {
      const RW = "number" === typeof WW ? Date.now() - WW : -1;
      return RW >= 0 && RW < dW
    }

    function uW() {
      return wW.b.get("clientEscMenuOptions").antiAliasing && (0, CW.getDeviceDefaultAA)() && !(0, AW.d)("antiAliasing")
    }
    let OW = null;

    function nW() {
      return OW ??= (0, CW.getDeviceDefaultPixelScale)(), GW(OW)
    }

    function GW(WW) {
      const RW = wW.b.get("clientEscMenuOptions");
      return RW.pixelSmoothing && !(0, AW.d)("pixelScale") && RW.pixelScale === WW
    }
    let LW = null,
      HW = 0;

    function DW() {
      if (null === LW || HW !== hW()) {
        var WW;
        HW = hW();
        const RW = Number(null !== (WW = new URLSearchParams(window.location.search).get(pW)) && void 0 !== WW ? WW : ""),
          MW = UW();
        if (RW > 0 && RW <= 1) LW = (0, bR.s)(MW, MW[0] / RW);
        else {
          const WW = EW(),
            RW = (0, bR.s)(MW, (0, bR.t)(hW())),
            wW = !(0, aR.g)() && KW(null === WW || void 0 === WW ? void 0 : WW.heldAt) && (null === WW || void 0 === WW ? void 0 : WW.heldTarget) === hW() ? null === WW || void 0 === WW ? void 0 : WW.heldN : void 0;
          LW = "number" === typeof wW ? Math.min(RW, (0, bR.s)(MW, wW)) : RW
        }
      }
      return LW
    }

    function qR(WW, RW) {
      var MW;
      const wW = RW.indexOf(null !== (MW = WW.failedUpN) && void 0 !== MW ? MW : -1);
      return wW >= 0 && KW(WW.failedUpAt) ? {
        step: wW,
        untilMs: performance.now() + yR.b.stepUp.failWaitsMs[0]
      } : null
    }
    let ZW = null,
      SW = !1,
      WR = "";
    const RR = new Set;

    function MR() {
      for (const WW of RR) WW()
    }

    function wR() {
      return SW ? null : (tM(), null === ZW ? (null !== OW || null !== (0, CW.peekGpuVendor)() ? nW() : GW(1)) ? DW() : null : nW() ? ZW.currentStep() : null)
    }

    function CR() {
      const WW = wR();
      if (null === WW) return null;
      const RW = UW(),
        MW = RW[Math.min(WW, RW.length - 1)];
      return MW === zM() ? null : MW
    }

    function zM() {
      return (0, bR.r)(wW.b.get("clientEscMenuOptions").pixelScale, (0, bR.i)())
    }

    function AR() {
      return null !== ZW && null !== CR()
    }

    function bM(WW) {
      return RR.add(WW), () => {
        RR.delete(WW)
      }
    }

    function yM(WW, RW, MW) {
      var wW;
      if (null !== ZW || SW || (0, aR.g)()) return;
      NR = vR();
      const CW = (0, kR.b)(WW, RW, MW);
      null !== CW && (0, aR.h)(CW.vendor), WR = `${WW}:${(null===CW||void 0===CW?void 0:CW.renderer)||(null===CW||void 0===CW?void 0:CW.vendor)||""}`, (null === (wW = EW()) || void 0 === wW ? void 0 : wW.gpu) !== WR && (NW.g.setItem(sW, {
        gpu: WR
      }), LW = null), BR()
    }
    let NR = !1,
      eR = 0;

    function BR() {
      var WW;
      const RW = null !== (WW = EW()) && void 0 !== WW ? WW : {
          gpu: WR
        },
        MW = UW();
      eR = hW(), ZW = new jR({
          changed: MR,
          kept: WW => {
            TR(UW()[WW] > zM() && uW() ? {
              msaaOffAt: Date.now(),
              heldN: void 0
            } : {
              heldN: void 0
            })
          },
          mM: WW => {
            var RW;
            const MW = UW()[WW],
              wW = {
                heldN: MW,
                heldAt: Date.now(),
                heldTarget: hW()
              };
            (null === (RW = EW()) || void 0 === RW ? void 0 : RW.failedUpN) === MW && (wW.failedUpN = void 0), TR(MW > zM() || NR ? wW : {
              ...wW,
              msaaOffAt: void 0
            })
          },
          upFailed: WW => {
            TR({
              failedUpN: UW()[WW],
              failedUpAt: Date.now()
            })
          },
          noGain: WW => {
            TR({
              noGain: null === WW ? void 0 : VW(WW)
            })
          }
        }, {
          lowest: MW.length - 1,
          startStep: DW(),
          noGain: mR(RW.noGain),
          upWait: qR(RW, MW)
        }),
        function(WW) {
          const RW = {
            get step() {
              return WW.currentStep()
            },
            get n() {
              var WW;
              return null !== (WW = CR()) && void 0 !== WW ? WW : zM()
            },
            get scale() {
              var WW;
              return UW()[0] / (null !== (WW = CR()) && void 0 !== WW ? WW : zM())
            },
            get msaaOff() {
              return vR()
            },
            log: WW.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: RW,
            configurable: !0
          })
        }(ZW), MR()
    }

    function tM() {
      null !== ZW && hW() !== eR && (LW = null, BR())
    }

    function TR(WW) {
      NW.g.setItem(sW, {
        ...EW(),
        ...WW,
        gpu: WR
      })
    }
    let gM = 0,
      iM = 0,
      YR = !1;

    function JR() {
      gM++
    }

    function PR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      tM(), null !== ZW && (WW - iM >= 1e3 && (YR = gM > yR.b.sceneChange.meshesPerSecond, gM = 0, iM = WW), ZW.frame(WW, RW, MW && !document.hidden && nW(), YR || wW > 0 || (0, zR.o)()))
    }

    function IR() {
      if (!SW) {
        SW = !0, null !== ZW && (ZW = null, TR({
          msaaOffAt: void 0,
          noGain: void 0
        }));
        try {
          MR()
        } catch (WW) {
          console.error("The quality steps' resize to the player's n failed", WW)
        }
      }
    }

    function oR() {
      var WW;
      null === (WW = ZW) || void 0 === WW || WW.hitch(performance.now())
    }
  },
  8115: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(116),
      CW = MW(147);

    function zR(WW, RW, MW) {
      if ("webgpu" === WW) return MW ? ((0, wW.seedGpuVendor)(MW), {
        vendor: MW,
        renderer: ""
      }) : null;
      try {
        const MW = "webgl" === WW ? RW.getContext("webgl2") : RW.getContext("webgl"),
          zR = null === MW || void 0 === MW ? void 0 : MW.getExtension("WEBGL_debug_renderer_info");
        if (MW && zR) {
          const WW = String(MW.getParameter(zR.UNMASKED_VENDOR_WEBGL)),
            RW = String(MW.getParameter(zR.UNMASKED_RENDERER_WEBGL));
          return (0, wW.seedGpuVendor)(WW), (0, CW.o)(WW, RW), {
            vendor: WW,
            renderer: RW
          }
        }
        MW && (0, CW.o)(String(MW.getParameter(MW.VENDOR)), String(MW.getParameter(MW.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);