export const id = 196;
export const ids = [196];
export const modules = {
  34091: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => tC,
      d: () => Rz,
      f: () => Gz,
      h: () => xz,
      l: () => bz,
      p: () => fz,
      t: () => qz,
      u: () => Az,
      v: () => oz
    });
    var QC = ZC(20),
      wC = ZC(77),
      bC = ZC(1557),
      nC = ZC(4346),
      fC = ZC(2894),
      oC = ZC(2903),
      qC = ZC(38);
    const {
      windows: FC,
      target: WC,
      stepDown: NC,
      stepUp: MC,
      noGain: gC
    } = oC.d, SC = 1e3 / 60 * 1.08, pC = 1e3 / 55, PC = 1e3 / 45, GC = 1e3 / 30 * .92, RC = 1e3 / 30 * 1.08;
    class AC {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(CC, zC) {
        const ZC = CC - this.lastMs;
        this.lastMs = CC;
        const QC = function(CC) {
          if (CC <= 0 || CC > 100) return -1;
          if (CC <= SC) return 0;
          if (CC >= pC && CC <= PC) return 1;
          return CC >= GC && CC <= RC ? 2 : -1
        }(ZC);
        0 === QC && 2 === this.runBand && zC && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), QC !== this.runBand && (this.runBand = QC, this.runLength = 0), QC < 0 || ++this.runLength < 3 || (0 === QC ? this.votes60++ : 1 === QC ? (this.votesMid++, this.sumMidMs += ZC) : (this.votes30++, zC && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const xC = FC.windowMs,
      JC = FC.settleMs,
      IC = FC.graceMs,
      iC = FC.minIntervals,
      vC = 1e3 * iC / xC,
      eC = Math.floor(1e4 / xC),
      hC = gC.backoffMs,
      KC = gC.maxMs;
    class YC {
      constructor(CC, zC) {
        let {
          lowest: ZC,
          startStep: QC = 0,
          noGain: wC = null,
          upWait: bC = null
        } = zC;
        this.hooks = CC, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new AC, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = WC.maxFps, this.lowest = ZC, this.step = Math.min(QC, ZC), this.noGain = wC, this.climbing = this.step > 0;
        const nC = ZC + 1;
        this.downUntilMs = new Array(nC).fill(0), this.downBackoffMs = new Array(nC).fill(0), this.noGainFps = new Array(nC).fill(0), this.noGainFps[0] = null === wC ? 0 : wC.fps, this.upFailures = new Array(nC).fill(0), this.upUntilMs = new Array(nC).fill(0), null !== bC && bC.step >= 0 && bC.step < nC && (this.upUntilMs[bC.step] = bC.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(CC, ZC && !QC), !ZC) return void this.leave(CC);
        const wC = CC - this.lastFrameMs,
          bC = this.resizeStall(CC);
        if (wC > 2e3 && !bC && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = CC, this.quietUntilMs = Math.max(this.quietUntilMs, CC + IC), this.graceUntilMs = CC + IC, this.windowStartMs = -1, void(this.slowStartMs = -1);
        wC > 500 && (this.hitch(CC), bC && (this.slowStartMs = -1)), this.lastFrameMs = CC, CC >= this.quietUntilMs && this.countWindow(CC, zC, QC) || zC && CC >= this.graceUntilMs && this.countSlow(CC, QC)
      }
      countWindow(CC, zC, ZC) {
        if (this.windowStartMs < 0) return !!zC && (this.windowStartMs = CC, this.lastDrawnMs = CC, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = ZC, !1);
        if (this.windowMasked ||= ZC, !zC) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, CC - this.lastDrawnMs), this.lastDrawnMs = CC;
        const QC = CC - this.windowStartMs;
        if (QC < xC) return !1;
        const wC = this.windowIntervals,
          bC = 1e3 * wC / QC,
          nC = this.windowHeld,
          fC = this.windowMaxIntervalMs,
          oC = this.windowMasked;
        if (this.windowStartMs = -1, wC < iC) return !1;
        this.slowStartMs = -1;
        const qC = this.targetFps(),
          FC = bC >= qC * WC.cleanShare && fC <= WC.cleanMaxIntervalMs && (0 === nC || bC >= qC);
        return this.decide(bC, 1, FC, bC < qC * WC.dropShare, oC, CC), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(WC.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(CC, zC) {
        if (this.slowStartMs < 0) return this.slowStartMs = CC, this.slowIntervals = 0, void(this.slowMasked = zC);
        this.slowMasked ||= zC, this.slowIntervals++;
        const ZC = CC - this.slowStartMs;
        if (ZC < 1e4) return;
        const QC = 1e3 * this.slowIntervals / ZC,
          wC = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(CC, zC), QC < vC && (this.windowStartMs = -1, this.decide(QC, eC, !1, !0, wC, CC))
      }
      resizeStall(CC) {
        return this.lastFrameMs - this.resizedMs <= JC && CC - this.lastFrameMs <= 15e3
      }
      paused(CC) {
        this.refresh.frame(CC, !1), CC - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, CC + IC), this.graceUntilMs = CC + IC), this.lastFrameMs = CC, this.slowStartMs = -1, this.hitch(CC)
      }
      resized(CC) {
        this.resizedMs = CC, this.hitch(CC)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(CC) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(CC))
      }
      hitch(CC) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, CC + JC)
      }
      left(CC) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const zC = this.phase;
        "watch" !== zC.kind && (this.phase = {
          kind: "watch"
        }, "down" === zC.kind && (this.downUntilMs[zC.from] = CC + hC, this.noGainFps[zC.from] = 0, 0 === zC.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, CC + hC)
        })), this.setStep(zC.from, 0, CC, "left"), "up" === zC.kind && (this.climbed = zC.fromClimbed))
      }
      decide(CC, zC, ZC, QC, wC, bC) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: bC,
          step: this.step,
          fps: Math.round(10 * CC) / 10,
          windows: zC,
          masked: wC,
          dropping: QC
        });
        const nC = this.phase;
        switch (nC.kind) {
          case "watch":
            return void this.watch(CC, zC, ZC, QC, wC, bC);
          case "down": {
            if (nC.judged += zC, nC.fpsSum += CC * zC, wC || (nC.clean += zC, nC.cleanFpsSum += CC * zC), nC.judged < NC.judgeWindows) return;
            const ZC = nC.clean > 0 ? nC.cleanFpsSum / nC.clean : nC.fpsSum / nC.judged;
            return void(ZC >= nC.fromFps * NC.keepGain ? this.keepDown(nC.from, ZC, bC) : this.noGainFrom(nC, ZC, bC))
          }
          case "up":
            return ZC ? void(++nC.judged >= MC.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: nC.from,
              heldWindows: 0,
              below: nC.fromClimbed
            }, this.record(bC, CC, "up_kept"))) : (wC ? (this.watchAt(nC.from), this.setStep(nC.from, CC, bC, "spoiled")) : this.failUp(this.step, nC.from, CC, bC), void(this.climbed = nC.fromClimbed))
        }
      }
      watch(CC, zC, ZC, QC, wC, bC) {
        const nC = this.climbed;
        null !== nC && !QC && !wC && ++nC.heldWindows >= MC.heldWindows && (this.climbed = null, this.record(bC, CC, "vq"), this.hooks.vq(this.step)), QC ? (this.dropRun += zC, this.dropRunFpsSum += CC * zC, this.dropRunMasked ||= wC, wC || (this.dropRunClean += zC, this.dropRunCleanFpsSum += CC * zC)) : this.resetDropRun(), wC && ZC || (this.cleanRun = ZC ? this.cleanRun + 1 : 0);
        const fC = null !== this.climbed ? MC : NC;
        if (this.dropRun >= (this.dropRunMasked ? fC.maskedWindows : fC.dropWindows)) {
          const zC = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            ZC = this.dropRunClean >= NC.dropWindows && zC < this.noGainFps[this.step] * gC.heavierShare;
          this.resetDropRun();
          const QC = this.climbed;
          return void(null !== QC ? (this.failUp(this.step, QC.from, CC, bC), this.climbed = QC.below) : this.step < this.lowest && (ZC || this.waitOver(bC)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: zC,
            early: !this.waitOver(bC),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, zC, bC, "down")))
        }
        const oC = this.step - 1;
        oC >= 0 && this.cleanRun >= (this.climbing ? MC.climbWindows : MC.cleanWindows) && bC >= this.upUntilMs[oC] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(oC, CC, bC, "up"))
      }
      waitOver(CC) {
        return !(0 === this.step && null !== this.noGain && CC < this.noGain.untilMs) && CC >= this.downUntilMs[this.step]
      }
      keepDown(CC, zC, ZC) {
        this.watchAt(this.step), this.downBackoffMs[CC] = 0, this.noGainFps[CC] = 0, this.record(ZC, zC, "down_kept"), 0 === CC && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.lM(this.step)
      }
      noGainFrom(CC, zC, ZC) {
        var QC, wC;
        let {
          from: bC,
          fromFps: nC,
          early: fC
        } = CC;
        const oC = 0 === bC ? null !== (QC = null === (wC = this.noGain) || void 0 === wC ? void 0 : wC.backoffMs) && void 0 !== QC ? QC : 0 : this.downBackoffMs[bC],
          qC = 0 === oC ? hC : fC ? oC : Math.min(2 * oC, KC),
          FC = Math.max(nC, zC);
        this.downBackoffMs[bC] = qC, this.downUntilMs[bC] = ZC + qC, this.noGainFps[bC] = FC, 0 === bC && (this.noGain = {
          untilMs: ZC + qC,
          backoffMs: qC,
          fps: FC
        }, this.hooks.noGain(this.noGain)), this.watchAt(bC), this.setStep(bC, zC, ZC, "no_gain")
      }
      failUp(CC, zC, ZC, QC) {
        this.climbing = !1;
        const wC = ++this.upFailures[CC],
          bC = MC.failWaitsMs;
        this.upUntilMs[CC] = QC + bC[Math.min(wC, bC.length) - 1], this.watchAt(zC), this.setStep(zC, ZC, QC, "up_failed"), this.hooks.upFailed(CC)
      }
      watchAt(CC) {
        this.phase = {
          kind: "watch"
        }, this.climbed = CC === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(CC, zC, ZC, QC) {
        const wC = CC !== this.step;
        wC && (this.climbed = null), this.step = CC, this.record(ZC, zC, QC), wC && (this.slowStartMs = -1, this.resized(ZC), this.hooks.changed(CC))
      }
      record(CC, zC, ZC) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: CC,
          step: this.step,
          fps: Math.round(10 * zC) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: ZC
        })
      }
    }
    var dC = ZC(34100),
      mC = ZC(3101),
      HC = ZC(34102);
    const EC = "autoGraphics",
      lC = 6048e5,
      XC = "startScale";

    function cC() {
      return (0, fC.M)(QC.b.get("clientEscMenuOptions").pixelScale) * (0, fC.J)()
    }

    function uC() {
      return (0, fC.y)(cC())
    }

    function rC() {
      const CC = qC.i.getItem(EC);
      return "object" !== typeof CC || null === CC || "string" !== typeof CC.gpu ? null : CC
    }

    function sC(CC) {
      return {
        untilEpochMs: Date.now() + (CC.untilMs - performance.now()),
        backoffMs: CC.backoffMs,
        fps: CC.fps
      }
    }

    function TC(CC) {
      return void 0 === CC || "number" !== typeof CC.fps ? null : {
        untilMs: performance.now() + (CC.untilEpochMs - Date.now()),
        backoffMs: CC.backoffMs,
        fps: CC.fps
      }
    }
    let aC = null;

    function tC() {
      if (null === aC) {
        const CC = new URLSearchParams(window.location.search).get("msaa");
        aC = QC.b.get("clientEscMenuOptions").antiAliasing && ("0" === CC || "1" !== CC && !(0, nC.b)("antiAliasing") && (0, mC.g)())
      }
      return aC
    }

    function DC(CC) {
      const zC = "number" === typeof CC ? Date.now() - CC : -1;
      return zC >= 0 && zC < lC
    }
    let jC = null;

    function yC() {
      return jC ??= (0, wC.getDeviceDefaultPixelScale)(), LC(jC)
    }

    function LC(CC) {
      const zC = QC.b.get("clientEscMenuOptions");
      return zC.pixelSmoothing && !(0, nC.b)("pixelScale") && zC.pixelScale === CC
    }
    let UC = null,
      BC = 0;

    function OC() {
      if (null === UC || BC !== cC()) {
        var CC;
        BC = cC();
        const zC = Number(null !== (CC = new URLSearchParams(window.location.search).get(XC)) && void 0 !== CC ? CC : ""),
          ZC = uC();
        if (zC > 0 && zC <= 1) UC = (0, fC.E)(ZC, ZC[0] / zC);
        else {
          const CC = rC(),
            zC = (0, fC.E)(ZC, (0, fC.H)(cC())),
            QC = !(0, mC.l)() && DC(null === CC || void 0 === CC ? void 0 : CC.heldAt) && (null === CC || void 0 === CC ? void 0 : CC.heldTarget) === cC() ? null === CC || void 0 === CC ? void 0 : CC.heldN : void 0;
          UC = "number" === typeof QC ? Math.min(zC, (0, fC.E)(ZC, QC)) : zC
        }
      }
      return UC
    }

    function kC(CC, zC) {
      var ZC;
      const QC = zC.indexOf(null !== (ZC = CC.failedUpN) && void 0 !== ZC ? ZC : -1);
      return QC >= 0 && DC(CC.failedUpAt) ? {
        step: QC,
        untilMs: performance.now() + oC.d.stepUp.failWaitsMs[0]
      } : null
    }
    let VC = null,
      Cz = !1,
      zz = "";
    const Zz = new Set;

    function Qz() {
      for (const CC of Zz) CC()
    }

    function wz() {
      return Cz ? null : (Nz(), null === VC ? (null !== jC || null !== (0, wC.peekGpuVendor)() ? yC() : LC(1)) ? OC() : null : yC() ? VC.currentStep() : null)
    }

    function bz() {
      const CC = wz();
      if (null === CC) return null;
      const zC = uC(),
        ZC = zC[Math.min(CC, zC.length - 1)];
      return ZC === nz() ? null : ZC
    }

    function nz() {
      return (0, fC.B)(QC.b.get("clientEscMenuOptions").pixelScale, (0, fC.J)())
    }

    function fz() {
      return null !== VC && null !== bz()
    }

    function oz(CC) {
      return Zz.add(CC), () => {
        Zz.delete(CC)
      }
    }

    function qz(CC, zC, ZC) {
      var QC;
      if (null !== VC || Cz || (0, mC.l)()) return;
      const wC = (0, dC.d)(CC, zC, ZC);
      null !== wC && (0, mC.p)(wC.vendor), zz = `${CC}:${(null===wC||void 0===wC?void 0:wC.renderer)||(null===wC||void 0===wC?void 0:wC.vendor)||""}`, (null === (QC = rC()) || void 0 === QC ? void 0 : QC.gpu) !== zz && (qC.i.setItem(EC, {
        gpu: zz
      }), UC = null), Wz(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var CC;
          null === (CC = VC) || void 0 === CC || CC.hidden()
        } catch (zC) {
          Az(), console.error("The quality steps stopped", zC)
        }
      }))
    }
    let Fz = 0;

    function Wz() {
      var CC;
      const zC = null !== (CC = rC()) && void 0 !== CC ? CC : {
          gpu: zz
        },
        ZC = uC();
      Fz = cC(), VC = new YC({
          changed: Qz,
          lM: () => {
            Mz({
              heldN: void 0
            })
          },
          vq: CC => {
            var zC;
            const ZC = uC()[CC],
              QC = {
                heldN: ZC,
                heldAt: Date.now(),
                heldTarget: cC()
              };
            (null === (zC = rC()) || void 0 === zC ? void 0 : zC.failedUpN) === ZC && (QC.failedUpN = void 0), Mz(QC)
          },
          upFailed: CC => {
            Mz({
              failedUpN: uC()[CC],
              failedUpAt: Date.now()
            })
          },
          noGain: CC => {
            Mz({
              noGain: null === CC ? void 0 : sC(CC)
            })
          }
        }, {
          lowest: ZC.length - 1,
          startStep: OC(),
          noGain: TC(zC.noGain),
          upWait: kC(zC, ZC)
        }),
        function(CC) {
          const zC = {
            get step() {
              return CC.currentStep()
            },
            get n() {
              var CC;
              return null !== (CC = bz()) && void 0 !== CC ? CC : nz()
            },
            get scale() {
              var CC;
              return uC()[0] / (null !== (CC = bz()) && void 0 !== CC ? CC : nz())
            },
            get msaaOff() {
              return tC()
            },
            log: CC.log,
            windows: CC.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: zC,
            configurable: !0
          })
        }(VC), Qz()
    }

    function Nz() {
      null !== VC && cC() !== Fz && (UC = null, Wz())
    }

    function Mz(CC) {
      qC.i.setItem(EC, {
        ...rC(),
        ...CC,
        gpu: zz
      })
    }
    let gz = 0,
      Sz = 0,
      pz = 0,
      Pz = !1;

    function Gz() {
      gz++
    }

    function Rz(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Nz(), null !== VC && (CC - pz >= 1e3 && (Pz = gz - Sz > oC.d.sceneChange.meshesPerSecond, Sz = gz, pz = CC), HC.d.isHeld() ? VC.paused(CC) : VC.frame(CC, zC, ZC && !document.hidden && yC(), Pz || QC > 0 || (0, bC.s)()))
    }

    function Az() {
      if (!Cz) {
        Cz = !0, null !== VC && (VC = null, Mz({
          noGain: void 0
        }));
        try {
          Qz()
        } catch (CC) {
          console.error("The quality steps' resize to the player's n failed", CC)
        }
      }
    }

    function xz() {
      var CC;
      null === (CC = VC) || void 0 === CC || CC.resized(performance.now())
    }
  },
  34100: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(77),
      wC = ZC(107);

    function bC(CC, zC, ZC) {
      if ("webgpu" === CC) return ZC ? ((0, QC.seedGpuVendor)(ZC), {
        vendor: ZC,
        renderer: ""
      }) : null;
      try {
        const ZC = "webgl" === CC ? zC.getContext("webgl2") : zC.getContext("webgl");
        "webgl" === CC && ZC && (0, wC.v)(ZC);
        const bC = null === ZC || void 0 === ZC ? void 0 : ZC.getExtension("WEBGL_debug_renderer_info");
        if (ZC && bC) {
          const CC = String(ZC.getParameter(bC.UNMASKED_VENDOR_WEBGL)),
            zC = String(ZC.getParameter(bC.UNMASKED_RENDERER_WEBGL));
          return (0, QC.seedGpuVendor)(CC), (0, wC.z)(CC, zC), {
            vendor: CC,
            renderer: zC
          }
        }
        ZC && (0, wC.z)(String(ZC.getParameter(ZC.VENDOR)), String(ZC.getParameter(ZC.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);