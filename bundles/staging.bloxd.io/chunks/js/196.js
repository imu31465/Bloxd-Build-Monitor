export const id = 196;
export const ids = [196];
export const modules = {
  34166: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => BS,
      f: () => PH,
      g: () => nH,
      k: () => DH,
      l: () => XH,
      n: () => NH,
      o: () => uH,
      r: () => QH,
      u: () => qH
    });
    var tS = gS(24),
      bS = gS(104),
      XS = gS(1733),
      xS = gS(4547),
      NS = gS(3058),
      qS = gS(3064),
      uS = gS(45);
    const {
      windows: IS,
      target: fS,
      stepDown: kS,
      stepUp: aS,
      noGain: KS
    } = qS.b, jS = 1e3 / 60 * 1.08, GS = 1e3 / 55, CS = 1e3 / 45, nS = 1e3 / 30 * .92, PS = 1e3 / 30 * 1.08;
    class QS {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(SS, HS) {
        const gS = SS - this.lastMs;
        this.lastMs = SS;
        const tS = function(SS) {
          if (SS <= 0 || SS > 100) return -1;
          if (SS <= jS) return 0;
          if (SS >= GS && SS <= CS) return 1;
          return SS >= nS && SS <= PS ? 2 : -1
        }(gS);
        0 === tS && 2 === this.runBand && HS && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), tS !== this.runBand && (this.runBand = tS, this.runLength = 0), tS < 0 || ++this.runLength < 3 || (0 === tS ? this.votes60++ : 1 === tS ? (this.votesMid++, this.sumMidMs += gS) : (this.votes30++, HS && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const DS = IS.windowMs,
      wS = IS.settleMs,
      hS = IS.graceMs,
      ZS = IS.minIntervals,
      JS = 1e3 * ZS / DS,
      OS = Math.floor(1e4 / DS),
      dS = KS.backoffMs,
      cS = KS.maxMs;
    class vS {
      constructor(SS, HS) {
        let {
          lowest: gS,
          startStep: tS = 0,
          noGain: bS = null,
          upWait: XS = null
        } = HS;
        this.hooks = SS, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new QS, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = fS.maxFps, this.lowest = gS, this.step = Math.min(tS, gS), this.noGain = bS, this.climbing = this.step > 0;
        const xS = gS + 1;
        this.downUntilMs = new Array(xS).fill(0), this.downBackoffMs = new Array(xS).fill(0), this.noGainFps = new Array(xS).fill(0), this.noGainFps[0] = null === bS ? 0 : bS.fps, this.upFailures = new Array(xS).fill(0), this.upUntilMs = new Array(xS).fill(0), null !== XS && XS.step >= 0 && XS.step < xS && (this.upUntilMs[XS.step] = XS.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(SS, gS && !tS), !gS) return void this.leave(SS);
        const bS = SS - this.lastFrameMs,
          XS = this.resizeStall(SS);
        if (bS > 2e3 && !XS && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = SS, this.quietUntilMs = Math.max(this.quietUntilMs, SS + hS), this.graceUntilMs = SS + hS, this.windowStartMs = -1, void(this.slowStartMs = -1);
        bS > 500 && (this.hitch(SS), XS && (this.slowStartMs = -1)), this.lastFrameMs = SS, SS >= this.quietUntilMs && this.countWindow(SS, HS, tS) || HS && SS >= this.graceUntilMs && this.countSlow(SS, tS)
      }
      countWindow(SS, HS, gS) {
        if (this.windowStartMs < 0) return !!HS && (this.windowStartMs = SS, this.lastDrawnMs = SS, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = gS, !1);
        if (this.windowMasked ||= gS, !HS) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, SS - this.lastDrawnMs), this.lastDrawnMs = SS;
        const tS = SS - this.windowStartMs;
        if (tS < DS) return !1;
        const bS = this.windowIntervals,
          XS = 1e3 * bS / tS,
          xS = this.windowHeld,
          NS = this.windowMaxIntervalMs,
          qS = this.windowMasked;
        if (this.windowStartMs = -1, bS < ZS) return !1;
        this.slowStartMs = -1;
        const uS = this.targetFps(),
          IS = XS >= uS * fS.cleanShare && NS <= fS.cleanMaxIntervalMs && (0 === xS || XS >= uS);
        return this.decide(XS, 1, IS, XS < uS * fS.dropShare, qS, SS), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(fS.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(SS, HS) {
        if (this.slowStartMs < 0) return this.slowStartMs = SS, this.slowIntervals = 0, void(this.slowMasked = HS);
        this.slowMasked ||= HS, this.slowIntervals++;
        const gS = SS - this.slowStartMs;
        if (gS < 1e4) return;
        const tS = 1e3 * this.slowIntervals / gS,
          bS = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(SS, HS), tS < JS && (this.windowStartMs = -1, this.decide(tS, OS, !1, !0, bS, SS))
      }
      resizeStall(SS) {
        return this.lastFrameMs - this.resizedMs <= wS && SS - this.lastFrameMs <= 15e3
      }
      paused(SS) {
        this.refresh.frame(SS, !1), SS - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, SS + hS), this.graceUntilMs = SS + hS), this.lastFrameMs = SS, this.slowStartMs = -1, this.hitch(SS)
      }
      resized(SS) {
        this.resizedMs = SS, this.hitch(SS)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(SS) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(SS))
      }
      hitch(SS) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, SS + wS)
      }
      left(SS) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const HS = this.phase;
        "watch" !== HS.kind && (this.phase = {
          kind: "watch"
        }, "down" === HS.kind && (this.downUntilMs[HS.from] = SS + dS, this.noGainFps[HS.from] = 0, 0 === HS.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, SS + dS)
        })), this.setStep(HS.from, 0, SS, "left"), "up" === HS.kind && (this.climbed = HS.fromClimbed))
      }
      decide(SS, HS, gS, tS, bS, XS) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: XS,
          step: this.step,
          fps: Math.round(10 * SS) / 10,
          windows: HS,
          masked: bS,
          dropping: tS
        });
        const xS = this.phase;
        switch (xS.kind) {
          case "watch":
            return void this.watch(SS, HS, gS, tS, bS, XS);
          case "down": {
            if (xS.judged += HS, xS.fpsSum += SS * HS, bS || (xS.clean += HS, xS.cleanFpsSum += SS * HS), xS.judged < kS.judgeWindows) return;
            const gS = xS.clean > 0 ? xS.cleanFpsSum / xS.clean : xS.fpsSum / xS.judged;
            return void(gS >= xS.fromFps * kS.keepGain ? this.keepDown(xS.from, gS, XS) : this.noGainFrom(xS, gS, XS))
          }
          case "up":
            return gS ? void(++xS.judged >= aS.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: xS.from,
              heldWindows: 0,
              below: xS.fromClimbed
            }, this.record(XS, SS, "up_kept"))) : (bS ? (this.watchAt(xS.from), this.setStep(xS.from, SS, XS, "spoiled")) : this.failUp(this.step, xS.from, SS, XS), void(this.climbed = xS.fromClimbed))
        }
      }
      watch(SS, HS, gS, tS, bS, XS) {
        const xS = this.climbed;
        null !== xS && !tS && !bS && ++xS.heldWindows >= aS.heldWindows && (this.climbed = null, this.record(XS, SS, "Ku"), this.hooks.Ku(this.step)), tS ? (this.dropRun += HS, this.dropRunFpsSum += SS * HS, this.dropRunMasked ||= bS, bS || (this.dropRunClean += HS, this.dropRunCleanFpsSum += SS * HS)) : this.resetDropRun(), bS && gS || (this.cleanRun = gS ? this.cleanRun + 1 : 0);
        const NS = null !== this.climbed ? aS : kS;
        if (this.dropRun >= (this.dropRunMasked ? NS.maskedWindows : NS.dropWindows)) {
          const HS = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            gS = this.dropRunClean >= kS.dropWindows && HS < this.noGainFps[this.step] * KS.heavierShare;
          this.resetDropRun();
          const tS = this.climbed;
          return void(null !== tS ? (this.failUp(this.step, tS.from, SS, XS), this.climbed = tS.below) : this.step < this.lowest && (gS || this.waitOver(XS)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: HS,
            early: !this.waitOver(XS),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, HS, XS, "down")))
        }
        const qS = this.step - 1;
        qS >= 0 && this.cleanRun >= (this.climbing ? aS.climbWindows : aS.cleanWindows) && XS >= this.upUntilMs[qS] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(qS, SS, XS, "up"))
      }
      waitOver(SS) {
        return !(0 === this.step && null !== this.noGain && SS < this.noGain.untilMs) && SS >= this.downUntilMs[this.step]
      }
      keepDown(SS, HS, gS) {
        this.watchAt(this.step), this.downBackoffMs[SS] = 0, this.noGainFps[SS] = 0, this.record(gS, HS, "down_kept"), 0 === SS && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.ia(this.step)
      }
      noGainFrom(SS, HS, gS) {
        var tS, bS;
        let {
          from: XS,
          fromFps: xS,
          early: NS
        } = SS;
        const qS = 0 === XS ? null !== (tS = null === (bS = this.noGain) || void 0 === bS ? void 0 : bS.backoffMs) && void 0 !== tS ? tS : 0 : this.downBackoffMs[XS],
          uS = 0 === qS ? dS : NS ? qS : Math.min(2 * qS, cS),
          IS = Math.max(xS, HS);
        this.downBackoffMs[XS] = uS, this.downUntilMs[XS] = gS + uS, this.noGainFps[XS] = IS, 0 === XS && (this.noGain = {
          untilMs: gS + uS,
          backoffMs: uS,
          fps: IS
        }, this.hooks.noGain(this.noGain)), this.watchAt(XS), this.setStep(XS, HS, gS, "no_gain")
      }
      failUp(SS, HS, gS, tS) {
        this.climbing = !1;
        const bS = ++this.upFailures[SS],
          XS = aS.failWaitsMs;
        this.upUntilMs[SS] = tS + XS[Math.min(bS, XS.length) - 1], this.watchAt(HS), this.setStep(HS, gS, tS, "up_failed"), this.hooks.upFailed(SS)
      }
      watchAt(SS) {
        this.phase = {
          kind: "watch"
        }, this.climbed = SS === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(SS, HS, gS, tS) {
        const bS = SS !== this.step;
        bS && (this.climbed = null), this.step = SS, this.record(gS, HS, tS), bS && (this.slowStartMs = -1, this.resized(gS), this.hooks.changed(SS))
      }
      record(SS, HS, gS) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: SS,
          step: this.step,
          fps: Math.round(10 * HS) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: gS
        })
      }
    }
    var ES = gS(34173),
      LS = gS(3285),
      YS = gS(34180);
    const AS = "autoGraphics",
      yS = 6048e5,
      VS = "startScale";

    function iS() {
      return (0, NS.M)(tS.b.get("clientEscMenuOptions").pixelScale) * (0, NS.H)()
    }

    function WS() {
      return (0, NS.t)(iS())
    }

    function zS() {
      const SS = uS.g.getItem(AS);
      return "object" !== typeof SS || null === SS || "string" !== typeof SS.gpu ? null : SS
    }

    function US(SS) {
      return {
        untilEpochMs: Date.now() + (SS.untilMs - performance.now()),
        backoffMs: SS.backoffMs,
        fps: SS.fps
      }
    }

    function pS(SS) {
      return void 0 === SS || "number" !== typeof SS.fps ? null : {
        untilMs: performance.now() + (SS.untilEpochMs - Date.now()),
        backoffMs: SS.backoffMs,
        fps: SS.fps
      }
    }
    let sS = null;

    function BS() {
      if (null === sS) {
        const SS = new URLSearchParams(window.location.search).get("msaa");
        sS = tS.b.get("clientEscMenuOptions").antiAliasing && ("0" === SS || "1" !== SS && !(0, xS.e)("antiAliasing") && (0, LS.c)())
      }
      return sS
    }

    function MS(SS) {
      const HS = "number" === typeof SS ? Date.now() - SS : -1;
      return HS >= 0 && HS < yS
    }
    let FS = null;

    function RS() {
      return FS ??= (0, bS.getDeviceDefaultPixelScale)(), TS(FS)
    }

    function TS(SS) {
      const HS = tS.b.get("clientEscMenuOptions");
      return HS.pixelSmoothing && !(0, xS.e)("pixelScale") && HS.pixelScale === SS
    }
    let oS = null,
      lS = 0;

    function mS() {
      if (null === oS || lS !== iS()) {
        var SS;
        lS = iS();
        const HS = Number(null !== (SS = new URLSearchParams(window.location.search).get(VS)) && void 0 !== SS ? SS : ""),
          gS = WS();
        if (HS > 0 && HS <= 1) oS = (0, NS.F)(gS, gS[0] / HS);
        else {
          const SS = zS(),
            HS = (0, NS.F)(gS, (0, NS.G)(iS())),
            tS = !(0, LS.k)() && MS(null === SS || void 0 === SS ? void 0 : SS.heldAt) && (null === SS || void 0 === SS ? void 0 : SS.heldTarget) === iS() ? null === SS || void 0 === SS ? void 0 : SS.heldN : void 0;
          oS = "number" === typeof tS ? Math.min(HS, (0, NS.F)(gS, tS)) : HS
        }
      }
      return oS
    }

    function eS(SS, HS) {
      var gS;
      const tS = HS.indexOf(null !== (gS = SS.failedUpN) && void 0 !== gS ? gS : -1);
      return tS >= 0 && MS(SS.failedUpAt) ? {
        step: tS,
        untilMs: performance.now() + qS.b.stepUp.failWaitsMs[0]
      } : null
    }
    let rS = null,
      SH = !1,
      HH = "";
    const gH = new Set;

    function tH() {
      for (const SS of gH) SS()
    }

    function bH() {
      return SH ? null : (kH(), null === rS ? (null !== FS || null !== (0, bS.peekGpuVendor)() ? RS() : TS(1)) ? mS() : null : RS() ? rS.currentStep() : null)
    }

    function XH() {
      const SS = bH();
      if (null === SS) return null;
      const HS = WS(),
        gS = HS[Math.min(SS, HS.length - 1)];
      return gS === xH() ? null : gS
    }

    function xH() {
      return (0, NS.y)(tS.b.get("clientEscMenuOptions").pixelScale, (0, NS.H)())
    }

    function NH() {
      return null !== rS && null !== XH()
    }

    function qH(SS) {
      return gH.add(SS), () => {
        gH.delete(SS)
      }
    }

    function uH(SS, HS, gS) {
      var tS;
      if (null !== rS || SH || (0, LS.k)()) return;
      const bS = (0, ES.e)(SS, HS, gS);
      null !== bS && (0, LS.n)(bS.vendor), HH = `${SS}:${(null===bS||void 0===bS?void 0:bS.renderer)||(null===bS||void 0===bS?void 0:bS.vendor)||""}`, (null === (tS = zS()) || void 0 === tS ? void 0 : tS.gpu) !== HH && (uS.g.setItem(AS, {
        gpu: HH
      }), oS = null), fH(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var SS;
          null === (SS = rS) || void 0 === SS || SS.hidden()
        } catch (HS) {
          QH(), console.error("The quality steps stopped", HS)
        }
      }))
    }
    let IH = 0;

    function fH() {
      var SS;
      const HS = null !== (SS = zS()) && void 0 !== SS ? SS : {
          gpu: HH
        },
        gS = WS();
      IH = iS(), rS = new vS({
          changed: tH,
          ia: () => {
            aH({
              heldN: void 0
            })
          },
          Ku: SS => {
            var HS;
            const gS = WS()[SS],
              tS = {
                heldN: gS,
                heldAt: Date.now(),
                heldTarget: iS()
              };
            (null === (HS = zS()) || void 0 === HS ? void 0 : HS.failedUpN) === gS && (tS.failedUpN = void 0), aH(tS)
          },
          upFailed: SS => {
            aH({
              failedUpN: WS()[SS],
              failedUpAt: Date.now()
            })
          },
          noGain: SS => {
            aH({
              noGain: null === SS ? void 0 : US(SS)
            })
          }
        }, {
          lowest: gS.length - 1,
          startStep: mS(),
          noGain: pS(HS.noGain),
          upWait: eS(HS, gS)
        }),
        function(SS) {
          const HS = {
            get step() {
              return SS.currentStep()
            },
            get n() {
              var SS;
              return null !== (SS = XH()) && void 0 !== SS ? SS : xH()
            },
            get scale() {
              var SS;
              return WS()[0] / (null !== (SS = XH()) && void 0 !== SS ? SS : xH())
            },
            get msaaOff() {
              return BS()
            },
            log: SS.log,
            windows: SS.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: HS,
            configurable: !0
          })
        }(rS), tH()
    }

    function kH() {
      null !== rS && iS() !== IH && (oS = null, fH())
    }

    function aH(SS) {
      uS.g.setItem(AS, {
        ...zS(),
        ...SS,
        gpu: HH
      })
    }
    let KH = 0,
      jH = 0,
      GH = 0,
      CH = !1;

    function nH() {
      KH++
    }

    function PH(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      kH(), null !== rS && (SS - GH >= 1e3 && (CH = KH - jH > qS.b.sceneChange.meshesPerSecond, jH = KH, GH = SS), YS.d.isHeld() ? rS.paused(SS) : rS.frame(SS, HS, gS && !document.hidden && RS(), CH || tS > 0 || (0, XS.l)()))
    }

    function QH() {
      if (!SH) {
        SH = !0, null !== rS && (rS = null, aH({
          noGain: void 0
        }));
        try {
          tH()
        } catch (SS) {
          console.error("The quality steps' resize to the player's n failed", SS)
        }
      }
    }

    function DH() {
      var SS;
      null === (SS = rS) || void 0 === SS || SS.resized(performance.now())
    }
  },
  34173: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = gS(104),
      bS = gS(129);

    function XS(SS, HS, gS) {
      if ("webgpu" === SS) return gS ? ((0, tS.seedGpuVendor)(gS), {
        vendor: gS,
        renderer: ""
      }) : null;
      try {
        const gS = "webgl" === SS ? HS.getContext("webgl2") : HS.getContext("webgl");
        "webgl" === SS && gS && (0, bS.o)(gS);
        const XS = null === gS || void 0 === gS ? void 0 : gS.getExtension("WEBGL_debug_renderer_info");
        if (gS && XS) {
          const SS = String(gS.getParameter(XS.UNMASKED_VENDOR_WEBGL)),
            HS = String(gS.getParameter(XS.UNMASKED_RENDERER_WEBGL));
          return (0, tS.seedGpuVendor)(SS), (0, bS.u)(SS, HS), {
            vendor: SS,
            renderer: HS
          }
        }
        gS && (0, bS.u)(String(gS.getParameter(gS.VENDOR)), String(gS.getParameter(gS.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);