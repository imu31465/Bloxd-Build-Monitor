export const id = 186;
export const ids = [186];
export const modules = {
  8967: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => dD,
      g: () => NC,
      k: () => gC,
      l: () => vC,
      o: () => mC,
      q: () => pC,
      r: () => fC,
      u: () => QC,
      y: () => XC,
      B: () => bC
    });
    var ID = cD(16),
      pD = cD(90),
      iD = cD(1627),
      fD = cD(4220),
      bD = cD(2675),
      QD = cD(2696),
      wD = cD(36);
    const {
      windows: SD,
      target: BD,
      stepDown: yD,
      stepUp: MD,
      noGain: tD
    } = QD.c, ZD = 1e3 / 60 * 1.08, oD = 1e3 / 55, vD = 1e3 / 45, ND = 1e3 / 30 * .92, gD = 1e3 / 30 * 1.08;
    class XD {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(DD) {
        const CD = DD - this.lastMs;
        this.lastMs = DD;
        const cD = function(DD) {
          if (DD <= 0 || DD > 100) return -1;
          if (DD <= ZD) return 0;
          if (DD >= oD && DD <= vD) return 1;
          return DD >= ND && DD <= gD ? 2 : -1
        }(CD);
        cD !== this.runBand && (this.runBand = cD, this.runLength = 0), cD < 0 || ++this.runLength < 3 || (0 === cD ? this.votes60++ : 1 === cD ? (this.votesMid++, this.sumMidMs += CD) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const mD = SD.windowMs,
      nD = SD.settleMs,
      OD = SD.graceMs,
      PD = SD.minIntervals,
      HD = 1e3 * PD / mD,
      UD = tD.backoffMs,
      xD = tD.maxMs;
    class qD {
      constructor(DD, CD) {
        let {
          lowest: cD,
          startStep: ID = 0,
          noGain: pD = null,
          upWait: iD = null
        } = CD;
        this.hooks = DD, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new XD, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = BD.maxFps, this.lowest = cD, this.step = Math.min(ID, cD), this.noGain = pD, this.climbing = this.step > 0;
        const fD = cD + 1;
        this.downUntilMs = new Array(fD).fill(0), this.downBackoffMs = new Array(fD).fill(0), this.upFailures = new Array(fD).fill(0), this.upUntilMs = new Array(fD).fill(0), null !== iD && iD.step >= 0 && iD.step < fD && (this.upUntilMs[iD.step] = iD.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(DD), !cD) return void this.leave(DD);
        const pD = DD - this.lastFrameMs,
          iD = this.resizeStall(DD);
        if (pD > 2e3 && !iD && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = DD, this.quietUntilMs = Math.max(this.quietUntilMs, DD + OD), this.graceUntilMs = DD + OD, this.windowStartMs = -1, void(this.slowStartMs = -1);
        pD > 500 && (this.hitch(DD), iD && (this.slowStartMs = -1)), this.lastFrameMs = DD, DD >= this.quietUntilMs && this.countWindow(DD, CD, ID) || CD && DD >= this.graceUntilMs && this.countSlow(DD)
      }
      countWindow(DD, CD, cD) {
        if (this.windowStartMs < 0) return !!CD && (this.windowStartMs = DD, this.lastDrawnMs = DD, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = cD, !1);
        if (this.windowMasked ||= cD, !CD) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, DD - this.lastDrawnMs), this.lastDrawnMs = DD;
        const ID = DD - this.windowStartMs;
        if (ID < mD) return !1;
        const pD = this.windowIntervals,
          iD = 1e3 * pD / ID,
          fD = this.windowHeld,
          bD = this.windowMaxIntervalMs,
          QD = this.windowMasked;
        if (this.windowStartMs = -1, pD < PD) return !1;
        this.slowStartMs = -1;
        const wD = this.targetFps(),
          SD = iD >= wD * BD.cleanShare && bD <= BD.cleanMaxIntervalMs && (0 === fD || iD >= wD);
        return this.decide(iD, SD, iD < wD * BD.dropShare, QD, DD), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(BD.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(DD) {
        if (this.slowStartMs < 0) return this.slowStartMs = DD, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const CD = DD - this.slowStartMs;
        if (CD < 1e4) return;
        const cD = 1e3 * this.slowIntervals / CD;
        this.slowStartMs = -1, this.countSlow(DD), cD < HD && (this.windowStartMs = -1, this.decide(cD, !1, !0, !1, DD))
      }
      resizeStall(DD) {
        return this.lastFrameMs - this.resizedMs <= nD && DD - this.lastFrameMs <= 15e3
      }
      paused(DD) {
        this.refresh.frame(DD), DD - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, DD + OD), this.graceUntilMs = DD + OD), this.lastFrameMs = DD, this.slowStartMs = -1, this.hitch(DD)
      }
      resized(DD) {
        this.resizedMs = DD, this.hitch(DD)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(DD) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(DD))
      }
      hitch(DD) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, DD + nD)
      }
      left(DD) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const CD = this.phase;
        "watch" !== CD.kind && (this.phase = {
          kind: "watch"
        }, "down" === CD.kind && (this.downUntilMs[CD.from] = Math.max(this.downUntilMs[CD.from], DD + UD)), this.setStep(CD.from, 0, DD, "left"), "up" === CD.kind && (this.climbed = CD.fromClimbed))
      }
      decide(DD, CD, cD, ID, pD) {
        const iD = this.phase;
        switch (iD.kind) {
          case "watch":
            return void this.watch(DD, CD, cD, ID, pD);
          case "down":
            if (iD.judged++, iD.fpsSum += DD, iD.dropped ||= cD, iD.judged < yD.judgeWindows) return;
            return void(!iD.dropped || iD.fpsSum / iD.judged >= iD.fromFps * yD.keepGain ? this.keepDown(iD.from, iD.fpsSum / iD.judged, pD) : this.noGainFrom(iD.from, iD.fromFps, pD));
          case "up":
            return CD ? void(++iD.judged >= MD.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: iD.from,
              heldWindows: 0,
              below: iD.fromClimbed
            }, this.record(pD, DD, "up_kept"))) : (ID ? (this.watchAt(iD.from), this.setStep(iD.from, DD, pD, "spoiled")) : this.failUp(this.step, iD.from, DD, pD), void(this.climbed = iD.fromClimbed))
        }
      }
      watch(DD, CD, cD, ID, pD) {
        const iD = this.climbed;
        if (null !== iD && !cD && !ID && ++iD.heldWindows >= MD.heldWindows && (this.climbed = null, this.record(pD, DD, "Lb"), this.hooks.Lb(this.step)), cD ? (this.dropRun++, this.dropRunFpsSum += DD, this.dropRunMasked ||= ID) : this.resetDropRun(), ID && CD || (this.cleanRun = CD ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? yD.maskedWindows : yD.dropWindows)) {
          const CD = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const cD = this.climbed;
          return void(null !== cD ? (this.failUp(this.step, cD.from, DD, pD), this.climbed = cD.below) : this.step < this.lowest && this.downAllowed(pD) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: CD,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, DD, pD, "down")))
        }
        const fD = this.step - 1;
        fD >= 0 && this.cleanRun >= (this.climbing ? MD.climbWindows : MD.cleanWindows) && this.upAllowed(fD, pD) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(fD, DD, pD, "up"))
      }
      downAllowed(DD) {
        return !(0 === this.step && null !== this.noGain && DD < this.noGain.untilMs) && DD >= this.downUntilMs[this.step]
      }
      upAllowed(DD, CD) {
        return this.upFailures[DD] <= MD.failWaitsMs.length && CD >= this.upUntilMs[DD]
      }
      keepDown(DD, CD, cD) {
        this.watchAt(this.step), this.downBackoffMs[DD] = 0, this.record(cD, CD, "down_kept"), 0 === DD && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.uM(this.step)
      }
      noGainFrom(DD, CD, cD) {
        var ID, pD;
        const iD = 0 === DD ? null !== (ID = null === (pD = this.noGain) || void 0 === pD ? void 0 : pD.backoffMs) && void 0 !== ID ? ID : 0 : this.downBackoffMs[DD],
          fD = 0 === iD ? UD : Math.min(2 * iD, xD);
        this.downBackoffMs[DD] = fD, this.downUntilMs[DD] = cD + fD, 0 === DD && (this.noGain = {
          untilMs: cD + fD,
          backoffMs: fD
        }, this.hooks.noGain(this.noGain)), this.watchAt(DD), this.setStep(DD, CD, cD, "no_gain")
      }
      failUp(DD, CD, cD, ID) {
        this.climbing = !1;
        const pD = ++this.upFailures[DD];
        this.upUntilMs[DD] = pD <= MD.failWaitsMs.length ? ID + MD.failWaitsMs[pD - 1] : Number.POSITIVE_INFINITY, this.watchAt(CD), this.setStep(CD, cD, ID, "up_failed"), this.hooks.upFailed(DD)
      }
      watchAt(DD) {
        this.phase = {
          kind: "watch"
        }, this.climbed = DD === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(DD, CD, cD, ID) {
        const pD = DD !== this.step;
        pD && (this.climbed = null), this.step = DD, this.record(cD, CD, ID), pD && (this.slowStartMs = -1, this.resized(cD), this.hooks.changed(DD))
      }
      record(DD, CD, cD) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: DD,
          step: this.step,
          fps: Math.round(10 * CD) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: cD
        })
      }
    }
    var JD = cD(8976),
      KD = cD(2908),
      aD = cD(8983);
    const VD = "autoGraphics",
      zD = 6048e5,
      jD = "startScale";

    function lD() {
      return (0, bD.J)(ID.d.get("clientEscMenuOptions").pixelScale) * (0, bD.D)()
    }

    function LD() {
      return (0, bD.n)(lD())
    }

    function TD() {
      const DD = wD.h.getItem(VD);
      return "object" !== typeof DD || null === DD || "string" !== typeof DD.gpu ? null : DD
    }

    function GD(DD) {
      return {
        untilEpochMs: Date.now() + (DD.untilMs - performance.now()),
        backoffMs: DD.backoffMs
      }
    }

    function RD(DD) {
      return DD ? {
        untilMs: performance.now() + (DD.untilEpochMs - Date.now()),
        backoffMs: DD.backoffMs
      } : null
    }
    let kD = null;

    function dD() {
      if (null === kD) {
        const DD = new URLSearchParams(window.location.search).get("msaa");
        kD = ID.d.get("clientEscMenuOptions").antiAliasing && ("0" === DD || "1" !== DD && !(0, fD.d)("antiAliasing") && (0, KD.f)())
      }
      return kD
    }

    function YD(DD) {
      const CD = "number" === typeof DD ? Date.now() - DD : -1;
      return CD >= 0 && CD < zD
    }
    let WD = null;

    function sD() {
      return WD ??= (0, pD.getDeviceDefaultPixelScale)(), ED(WD)
    }

    function ED(DD) {
      const CD = ID.d.get("clientEscMenuOptions");
      return CD.pixelSmoothing && !(0, fD.d)("pixelScale") && CD.pixelScale === DD
    }
    let eD = null,
      uD = 0;

    function hD() {
      if (null === eD || uD !== lD()) {
        var DD;
        uD = lD();
        const CD = Number(null !== (DD = new URLSearchParams(window.location.search).get(jD)) && void 0 !== DD ? DD : ""),
          cD = LD();
        if (CD > 0 && CD <= 1) eD = (0, bD.x)(cD, cD[0] / CD);
        else {
          const DD = TD(),
            CD = (0, bD.x)(cD, (0, bD.B)(lD())),
            ID = !(0, KD.n)() && YD(null === DD || void 0 === DD ? void 0 : DD.heldAt) && (null === DD || void 0 === DD ? void 0 : DD.heldTarget) === lD() ? null === DD || void 0 === DD ? void 0 : DD.heldN : void 0;
          eD = "number" === typeof ID ? Math.min(CD, (0, bD.x)(cD, ID)) : CD
        }
      }
      return eD
    }

    function rD(DD, CD) {
      var cD;
      const ID = CD.indexOf(null !== (cD = DD.failedUpN) && void 0 !== cD ? cD : -1);
      return ID >= 0 && YD(DD.failedUpAt) ? {
        step: ID,
        untilMs: performance.now() + QD.c.stepUp.failWaitsMs[0]
      } : null
    }
    let AD = null,
      FD = !1,
      DC = "";
    const CC = new Set;

    function cC() {
      for (const DD of CC) DD()
    }

    function IC() {
      return FD ? null : (BC(), null === AD ? (null !== WD || null !== (0, pD.peekGpuVendor)() ? sD() : ED(1)) ? hD() : null : sD() ? AD.currentStep() : null)
    }

    function pC() {
      const DD = IC();
      if (null === DD) return null;
      const CD = LD(),
        cD = CD[Math.min(DD, CD.length - 1)];
      return cD === iC() ? null : cD
    }

    function iC() {
      return (0, bD.t)(ID.d.get("clientEscMenuOptions").pixelScale, (0, bD.D)())
    }

    function fC() {
      return null !== AD && null !== pC()
    }

    function bC(DD) {
      return CC.add(DD), () => {
        CC.delete(DD)
      }
    }

    function QC(DD, CD, cD) {
      var ID;
      if (null !== AD || FD || (0, KD.n)()) return;
      const pD = (0, JD.b)(DD, CD, cD);
      null !== pD && (0, KD.q)(pD.vendor), DC = `${DD}:${(null===pD||void 0===pD?void 0:pD.renderer)||(null===pD||void 0===pD?void 0:pD.vendor)||""}`, (null === (ID = TD()) || void 0 === ID ? void 0 : ID.gpu) !== DC && (wD.h.setItem(VD, {
        gpu: DC
      }), eD = null), SC(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var DD;
          null === (DD = AD) || void 0 === DD || DD.hidden()
        } catch (CD) {
          XC(), console.error("The quality steps stopped", CD)
        }
      }))
    }
    let wC = 0;

    function SC() {
      var DD;
      const CD = null !== (DD = TD()) && void 0 !== DD ? DD : {
          gpu: DC
        },
        cD = LD();
      wC = lD(), AD = new qD({
          changed: cC,
          uM: () => {
            yC({
              heldN: void 0
            })
          },
          Lb: DD => {
            var CD;
            const cD = LD()[DD],
              ID = {
                heldN: cD,
                heldAt: Date.now(),
                heldTarget: lD()
              };
            (null === (CD = TD()) || void 0 === CD ? void 0 : CD.failedUpN) === cD && (ID.failedUpN = void 0), yC(ID)
          },
          upFailed: DD => {
            yC({
              failedUpN: LD()[DD],
              failedUpAt: Date.now()
            })
          },
          noGain: DD => {
            yC({
              noGain: null === DD ? void 0 : GD(DD)
            })
          }
        }, {
          lowest: cD.length - 1,
          startStep: hD(),
          noGain: RD(CD.noGain),
          upWait: rD(CD, cD)
        }),
        function(DD) {
          const CD = {
            get step() {
              return DD.currentStep()
            },
            get n() {
              var DD;
              return null !== (DD = pC()) && void 0 !== DD ? DD : iC()
            },
            get scale() {
              var DD;
              return LD()[0] / (null !== (DD = pC()) && void 0 !== DD ? DD : iC())
            },
            get msaaOff() {
              return dD()
            },
            log: DD.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: CD,
            configurable: !0
          })
        }(AD), cC()
    }

    function BC() {
      null !== AD && lD() !== wC && (eD = null, SC())
    }

    function yC(DD) {
      wD.h.setItem(VD, {
        ...TD(),
        ...DD,
        gpu: DC
      })
    }
    let MC = 0,
      tC = 0,
      ZC = 0,
      oC = !1;

    function vC() {
      MC++
    }

    function NC() {
      return MC
    }

    function gC(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      BC(), null !== AD && (DD - ZC >= 1e3 && (oC = MC - tC > QD.c.sceneChange.meshesPerSecond, tC = MC, ZC = DD), aD.b.isHeld() ? AD.paused(DD) : AD.frame(DD, CD, cD && !document.hidden && sD(), oC || ID > 0 || (0, iD.s)()))
    }

    function XC() {
      if (!FD) {
        FD = !0, null !== AD && (AD = null, yC({
          noGain: void 0
        }));
        try {
          cC()
        } catch (DD) {
          console.error("The quality steps' resize to the player's n failed", DD)
        }
      }
    }

    function mC() {
      var DD;
      null === (DD = AD) || void 0 === DD || DD.resized(performance.now())
    }
  },
  8976: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(90),
      pD = cD(116);

    function iD(DD, CD, cD) {
      if ("webgpu" === DD) return cD ? ((0, ID.seedGpuVendor)(cD), {
        vendor: cD,
        renderer: ""
      }) : null;
      try {
        const cD = "webgl" === DD ? CD.getContext("webgl2") : CD.getContext("webgl"),
          iD = null === cD || void 0 === cD ? void 0 : cD.getExtension("WEBGL_debug_renderer_info");
        if (cD && iD) {
          const DD = String(cD.getParameter(iD.UNMASKED_VENDOR_WEBGL)),
            CD = String(cD.getParameter(iD.UNMASKED_RENDERER_WEBGL));
          return (0, ID.seedGpuVendor)(DD), (0, pD.x)(DD, CD), {
            vendor: DD,
            renderer: CD
          }
        }
        cD && (0, pD.x)(String(cD.getParameter(cD.VENDOR)), String(cD.getParameter(cD.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);