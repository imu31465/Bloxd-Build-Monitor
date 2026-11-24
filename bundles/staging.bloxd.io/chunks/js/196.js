export const id = 196;
export const ids = [196];
export const modules = {
  34158: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => eD,
      f: () => Mz,
      i: () => nz,
      j: () => Jz,
      n: () => Kz,
      q: () => Lz,
      u: () => gz,
      y: () => Oz,
      B: () => cz
    });
    var pD = wD(20),
      sD = wD(103),
      KD = wD(1648),
      rD = wD(4454),
      LD = wD(2890),
      cD = wD(2894),
      gD = wD(35);
    const {
      windows: RD,
      target: AD,
      stepDown: UD,
      stepUp: fD,
      noGain: ID
    } = cD.b, BD = 1e3 / 60 * 1.08, GD = 1e3 / 55, hD = 1e3 / 45, nD = 1e3 / 30 * .92, MD = 1e3 / 30 * 1.08;
    class OD {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(DD, zD) {
        const wD = DD - this.lastMs;
        this.lastMs = DD;
        const pD = function(DD) {
          if (DD <= 0 || DD > 100) return -1;
          if (DD <= BD) return 0;
          if (DD >= GD && DD <= hD) return 1;
          return DD >= nD && DD <= MD ? 2 : -1
        }(wD);
        0 === pD && 2 === this.runBand && zD && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), pD !== this.runBand && (this.runBand = pD, this.runLength = 0), pD < 0 || ++this.runLength < 3 || (0 === pD ? this.votes60++ : 1 === pD ? (this.votesMid++, this.sumMidMs += wD) : (this.votes30++, zD && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const JD = RD.windowMs,
      ED = RD.settleMs,
      QD = RD.graceMs,
      XD = RD.minIntervals,
      VD = 1e3 * XD / JD,
      PD = Math.floor(1e4 / JD),
      CD = ID.backoffMs,
      xD = ID.maxMs;
    class TD {
      constructor(DD, zD) {
        let {
          lowest: wD,
          startStep: pD = 0,
          noGain: sD = null,
          upWait: KD = null
        } = zD;
        this.hooks = DD, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new OD, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = AD.maxFps, this.lowest = wD, this.step = Math.min(pD, wD), this.noGain = sD, this.climbing = this.step > 0;
        const rD = wD + 1;
        this.downUntilMs = new Array(rD).fill(0), this.downBackoffMs = new Array(rD).fill(0), this.noGainFps = new Array(rD).fill(0), this.noGainFps[0] = null === sD ? 0 : sD.fps, this.upFailures = new Array(rD).fill(0), this.upUntilMs = new Array(rD).fill(0), null !== KD && KD.step >= 0 && KD.step < rD && (this.upUntilMs[KD.step] = KD.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(DD, wD && !pD), !wD) return void this.leave(DD);
        const sD = DD - this.lastFrameMs,
          KD = this.resizeStall(DD);
        if (sD > 2e3 && !KD && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = DD, this.quietUntilMs = Math.max(this.quietUntilMs, DD + QD), this.graceUntilMs = DD + QD, this.windowStartMs = -1, void(this.slowStartMs = -1);
        sD > 500 && (this.hitch(DD), KD && (this.slowStartMs = -1)), this.lastFrameMs = DD, DD >= this.quietUntilMs && this.countWindow(DD, zD, pD) || zD && DD >= this.graceUntilMs && this.countSlow(DD, pD)
      }
      countWindow(DD, zD, wD) {
        if (this.windowStartMs < 0) return !!zD && (this.windowStartMs = DD, this.lastDrawnMs = DD, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = wD, !1);
        if (this.windowMasked ||= wD, !zD) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, DD - this.lastDrawnMs), this.lastDrawnMs = DD;
        const pD = DD - this.windowStartMs;
        if (pD < JD) return !1;
        const sD = this.windowIntervals,
          KD = 1e3 * sD / pD,
          rD = this.windowHeld,
          LD = this.windowMaxIntervalMs,
          cD = this.windowMasked;
        if (this.windowStartMs = -1, sD < XD) return !1;
        this.slowStartMs = -1;
        const gD = this.targetFps(),
          RD = KD >= gD * AD.cleanShare && LD <= AD.cleanMaxIntervalMs && (0 === rD || KD >= gD);
        return this.decide(KD, 1, RD, KD < gD * AD.dropShare, cD, DD), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(AD.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(DD, zD) {
        if (this.slowStartMs < 0) return this.slowStartMs = DD, this.slowIntervals = 0, void(this.slowMasked = zD);
        this.slowMasked ||= zD, this.slowIntervals++;
        const wD = DD - this.slowStartMs;
        if (wD < 1e4) return;
        const pD = 1e3 * this.slowIntervals / wD,
          sD = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(DD, zD), pD < VD && (this.windowStartMs = -1, this.decide(pD, PD, !1, !0, sD, DD))
      }
      resizeStall(DD) {
        return this.lastFrameMs - this.resizedMs <= ED && DD - this.lastFrameMs <= 15e3
      }
      paused(DD) {
        this.refresh.frame(DD, !1), DD - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, DD + QD), this.graceUntilMs = DD + QD), this.lastFrameMs = DD, this.slowStartMs = -1, this.hitch(DD)
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
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, DD + ED)
      }
      left(DD) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const zD = this.phase;
        "watch" !== zD.kind && (this.phase = {
          kind: "watch"
        }, "down" === zD.kind && (this.downUntilMs[zD.from] = DD + CD, this.noGainFps[zD.from] = 0, 0 === zD.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, DD + CD)
        })), this.setStep(zD.from, 0, DD, "left"), "up" === zD.kind && (this.climbed = zD.fromClimbed))
      }
      decide(DD, zD, wD, pD, sD, KD) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: KD,
          step: this.step,
          fps: Math.round(10 * DD) / 10,
          windows: zD,
          masked: sD,
          dropping: pD
        });
        const rD = this.phase;
        switch (rD.kind) {
          case "watch":
            return void this.watch(DD, zD, wD, pD, sD, KD);
          case "down": {
            if (rD.judged += zD, rD.fpsSum += DD * zD, sD || (rD.clean += zD, rD.cleanFpsSum += DD * zD), rD.judged < UD.judgeWindows) return;
            const wD = rD.clean > 0 ? rD.cleanFpsSum / rD.clean : rD.fpsSum / rD.judged;
            return void(wD >= rD.fromFps * UD.keepGain ? this.keepDown(rD.from, wD, KD) : this.noGainFrom(rD, wD, KD))
          }
          case "up":
            return wD ? void(++rD.judged >= fD.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: rD.from,
              heldWindows: 0,
              below: rD.fromClimbed
            }, this.record(KD, DD, "up_kept"))) : (sD ? (this.watchAt(rD.from), this.setStep(rD.from, DD, KD, "spoiled")) : this.failUp(this.step, rD.from, DD, KD), void(this.climbed = rD.fromClimbed))
        }
      }
      watch(DD, zD, wD, pD, sD, KD) {
        const rD = this.climbed;
        null !== rD && !pD && !sD && ++rD.heldWindows >= fD.heldWindows && (this.climbed = null, this.record(KD, DD, "Qg"), this.hooks.Qg(this.step)), pD ? (this.dropRun += zD, this.dropRunFpsSum += DD * zD, this.dropRunMasked ||= sD, sD || (this.dropRunClean += zD, this.dropRunCleanFpsSum += DD * zD)) : this.resetDropRun(), sD && wD || (this.cleanRun = wD ? this.cleanRun + 1 : 0);
        const LD = null !== this.climbed ? fD : UD;
        if (this.dropRun >= (this.dropRunMasked ? LD.maskedWindows : LD.dropWindows)) {
          const zD = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            wD = this.dropRunClean >= UD.dropWindows && zD < this.noGainFps[this.step] * ID.heavierShare;
          this.resetDropRun();
          const pD = this.climbed;
          return void(null !== pD ? (this.failUp(this.step, pD.from, DD, KD), this.climbed = pD.below) : this.step < this.lowest && (wD || this.waitOver(KD)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: zD,
            early: !this.waitOver(KD),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, zD, KD, "down")))
        }
        const cD = this.step - 1;
        cD >= 0 && this.cleanRun >= (this.climbing ? fD.climbWindows : fD.cleanWindows) && KD >= this.upUntilMs[cD] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(cD, DD, KD, "up"))
      }
      waitOver(DD) {
        return !(0 === this.step && null !== this.noGain && DD < this.noGain.untilMs) && DD >= this.downUntilMs[this.step]
      }
      keepDown(DD, zD, wD) {
        this.watchAt(this.step), this.downBackoffMs[DD] = 0, this.noGainFps[DD] = 0, this.record(wD, zD, "down_kept"), 0 === DD && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.Nf(this.step)
      }
      noGainFrom(DD, zD, wD) {
        var pD, sD;
        let {
          from: KD,
          fromFps: rD,
          early: LD
        } = DD;
        const cD = 0 === KD ? null !== (pD = null === (sD = this.noGain) || void 0 === sD ? void 0 : sD.backoffMs) && void 0 !== pD ? pD : 0 : this.downBackoffMs[KD],
          gD = 0 === cD ? CD : LD ? cD : Math.min(2 * cD, xD),
          RD = Math.max(rD, zD);
        this.downBackoffMs[KD] = gD, this.downUntilMs[KD] = wD + gD, this.noGainFps[KD] = RD, 0 === KD && (this.noGain = {
          untilMs: wD + gD,
          backoffMs: gD,
          fps: RD
        }, this.hooks.noGain(this.noGain)), this.watchAt(KD), this.setStep(KD, zD, wD, "no_gain")
      }
      failUp(DD, zD, wD, pD) {
        this.climbing = !1;
        const sD = ++this.upFailures[DD],
          KD = fD.failWaitsMs;
        this.upUntilMs[DD] = pD + KD[Math.min(sD, KD.length) - 1], this.watchAt(zD), this.setStep(zD, wD, pD, "up_failed"), this.hooks.upFailed(DD)
      }
      watchAt(DD) {
        this.phase = {
          kind: "watch"
        }, this.climbed = DD === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(DD, zD, wD, pD) {
        const sD = DD !== this.step;
        sD && (this.climbed = null), this.step = DD, this.record(wD, zD, pD), sD && (this.slowStartMs = -1, this.resized(wD), this.hooks.changed(DD))
      }
      record(DD, zD, wD) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: DD,
          step: this.step,
          fps: Math.round(10 * zD) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: wD
        })
      }
    }
    var bD = wD(34167),
      jD = wD(3098),
      dD = wD(34172);
    const SD = "autoGraphics",
      iD = 6048e5,
      lD = "startScale";

    function WD() {
      return (0, LD.P)(pD.e.get("clientEscMenuOptions").pixelScale) * (0, LD.K)()
    }

    function ND() {
      return (0, LD.y)(WD())
    }

    function ZD() {
      const DD = gD.h.getItem(SD);
      return "object" !== typeof DD || null === DD || "string" !== typeof DD.gpu ? null : DD
    }

    function yD(DD) {
      return {
        untilEpochMs: Date.now() + (DD.untilMs - performance.now()),
        backoffMs: DD.backoffMs,
        fps: DD.fps
      }
    }

    function kD(DD) {
      return void 0 === DD || "number" !== typeof DD.fps ? null : {
        untilMs: performance.now() + (DD.untilEpochMs - Date.now()),
        backoffMs: DD.backoffMs,
        fps: DD.fps
      }
    }
    let mD = null;

    function eD() {
      if (null === mD) {
        const DD = new URLSearchParams(window.location.search).get("msaa");
        mD = pD.e.get("clientEscMenuOptions").antiAliasing && ("0" === DD || "1" !== DD && !(0, rD.b)("antiAliasing") && (0, jD.e)())
      }
      return mD
    }

    function oD(DD) {
      const zD = "number" === typeof DD ? Date.now() - DD : -1;
      return zD >= 0 && zD < iD
    }
    let aD = null;

    function uD() {
      return aD ??= (0, sD.getDeviceDefaultPixelScale)(), vD(aD)
    }

    function vD(DD) {
      const zD = pD.e.get("clientEscMenuOptions");
      return zD.pixelSmoothing && !(0, rD.b)("pixelScale") && zD.pixelScale === DD
    }
    let tD = null,
      FD = 0;

    function YD() {
      if (null === tD || FD !== WD()) {
        var DD;
        FD = WD();
        const zD = Number(null !== (DD = new URLSearchParams(window.location.search).get(lD)) && void 0 !== DD ? DD : ""),
          wD = ND();
        if (zD > 0 && zD <= 1) tD = (0, LD.F)(wD, wD[0] / zD);
        else {
          const DD = ZD(),
            zD = (0, LD.F)(wD, (0, LD.I)(WD())),
            pD = !(0, jD.i)() && oD(null === DD || void 0 === DD ? void 0 : DD.heldAt) && (null === DD || void 0 === DD ? void 0 : DD.heldTarget) === WD() ? null === DD || void 0 === DD ? void 0 : DD.heldN : void 0;
          tD = "number" === typeof pD ? Math.min(zD, (0, LD.F)(wD, pD)) : zD
        }
      }
      return tD
    }

    function HD(DD, zD) {
      var wD;
      const pD = zD.indexOf(null !== (wD = DD.failedUpN) && void 0 !== wD ? wD : -1);
      return pD >= 0 && oD(DD.failedUpAt) ? {
        step: pD,
        untilMs: performance.now() + cD.b.stepUp.failWaitsMs[0]
      } : null
    }
    let qD = null,
      Dz = !1,
      zz = "";
    const wz = new Set;

    function pz() {
      for (const DD of wz) DD()
    }

    function sz() {
      return Dz ? null : (Uz(), null === qD ? (null !== aD || null !== (0, sD.peekGpuVendor)() ? uD() : vD(1)) ? YD() : null : uD() ? qD.currentStep() : null)
    }

    function Kz() {
      const DD = sz();
      if (null === DD) return null;
      const zD = ND(),
        wD = zD[Math.min(DD, zD.length - 1)];
      return wD === rz() ? null : wD
    }

    function rz() {
      return (0, LD.B)(pD.e.get("clientEscMenuOptions").pixelScale, (0, LD.K)())
    }

    function Lz() {
      return null !== qD && null !== Kz()
    }

    function cz(DD) {
      return wz.add(DD), () => {
        wz.delete(DD)
      }
    }

    function gz(DD, zD, wD) {
      var pD;
      if (null !== qD || Dz || (0, jD.i)()) return;
      const sD = (0, bD.e)(DD, zD, wD);
      null !== sD && (0, jD.m)(sD.vendor), zz = `${DD}:${(null===sD||void 0===sD?void 0:sD.renderer)||(null===sD||void 0===sD?void 0:sD.vendor)||""}`, (null === (pD = ZD()) || void 0 === pD ? void 0 : pD.gpu) !== zz && (gD.h.setItem(SD, {
        gpu: zz
      }), tD = null), Az(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var DD;
          null === (DD = qD) || void 0 === DD || DD.hidden()
        } catch (zD) {
          Oz(), console.error("The quality steps stopped", zD)
        }
      }))
    }
    let Rz = 0;

    function Az() {
      var DD;
      const zD = null !== (DD = ZD()) && void 0 !== DD ? DD : {
          gpu: zz
        },
        wD = ND();
      Rz = WD(), qD = new TD({
          changed: pz,
          Nf: () => {
            fz({
              heldN: void 0
            })
          },
          Qg: DD => {
            var zD;
            const wD = ND()[DD],
              pD = {
                heldN: wD,
                heldAt: Date.now(),
                heldTarget: WD()
              };
            (null === (zD = ZD()) || void 0 === zD ? void 0 : zD.failedUpN) === wD && (pD.failedUpN = void 0), fz(pD)
          },
          upFailed: DD => {
            fz({
              failedUpN: ND()[DD],
              failedUpAt: Date.now()
            })
          },
          noGain: DD => {
            fz({
              noGain: null === DD ? void 0 : yD(DD)
            })
          }
        }, {
          lowest: wD.length - 1,
          startStep: YD(),
          noGain: kD(zD.noGain),
          upWait: HD(zD, wD)
        }),
        function(DD) {
          const zD = {
            get step() {
              return DD.currentStep()
            },
            get n() {
              var DD;
              return null !== (DD = Kz()) && void 0 !== DD ? DD : rz()
            },
            get scale() {
              var DD;
              return ND()[0] / (null !== (DD = Kz()) && void 0 !== DD ? DD : rz())
            },
            get msaaOff() {
              return eD()
            },
            log: DD.log,
            windows: DD.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: zD,
            configurable: !0
          })
        }(qD), pz()
    }

    function Uz() {
      null !== qD && WD() !== Rz && (tD = null, Az())
    }

    function fz(DD) {
      gD.h.setItem(SD, {
        ...ZD(),
        ...DD,
        gpu: zz
      })
    }
    let Iz = 0,
      Bz = 0,
      Gz = 0,
      hz = !1;

    function nz() {
      Iz++
    }

    function Mz(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Uz(), null !== qD && (DD - Gz >= 1e3 && (hz = Iz - Bz > cD.b.sceneChange.meshesPerSecond, Bz = Iz, Gz = DD), dD.c.isHeld() ? qD.paused(DD) : qD.frame(DD, zD, wD && !document.hidden && uD(), hz || pD > 0 || (0, KD.q)()))
    }

    function Oz() {
      if (!Dz) {
        Dz = !0, null !== qD && (qD = null, fz({
          noGain: void 0
        }));
        try {
          pz()
        } catch (DD) {
          console.error("The quality steps' resize to the player's n failed", DD)
        }
      }
    }

    function Jz() {
      var DD;
      null === (DD = qD) || void 0 === DD || DD.resized(performance.now())
    }
  },
  34167: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(103),
      sD = wD(125);

    function KD(DD, zD, wD) {
      if ("webgpu" === DD) return wD ? ((0, pD.seedGpuVendor)(wD), {
        vendor: wD,
        renderer: ""
      }) : null;
      try {
        const wD = "webgl" === DD ? zD.getContext("webgl2") : zD.getContext("webgl");
        "webgl" === DD && wD && (0, sD.w)(wD);
        const KD = null === wD || void 0 === wD ? void 0 : wD.getExtension("WEBGL_debug_renderer_info");
        if (wD && KD) {
          const DD = String(wD.getParameter(KD.UNMASKED_VENDOR_WEBGL)),
            zD = String(wD.getParameter(KD.UNMASKED_RENDERER_WEBGL));
          return (0, pD.seedGpuVendor)(DD), (0, sD.B)(DD, zD), {
            vendor: DD,
            renderer: zD
          }
        }
        wD && (0, sD.B)(String(wD.getParameter(wD.VENDOR)), String(wD.getParameter(wD.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);