export const id = 177;
export const ids = [177];
export const modules = {
  8545: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => JB,
      e: () => lB
    });
    var VB = dB(33);
    const yB = new Map,
      pB = BB => `${BB}Chosen`;

    function lB(BB) {
      yB.set(BB, !0), VB.j.setItem(pB(BB), !0)
    }

    function JB(BB) {
      let TB = yB.get(BB);
      return void 0 === TB && (TB = !0 === VB.j.getItem(pB(BB)), yB.set(BB, TB)), TB
    }
  },
  8552: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => WB,
      d: () => ET,
      h: () => HT,
      l: () => mT,
      m: () => yT,
      n: () => lT,
      p: () => YT,
      q: () => vT,
      r: () => JT
    });
    var VB = dB(21),
      yB = dB(95),
      pB = dB(1507),
      lB = dB(8545),
      JB = dB(2409),
      YB = dB(2427),
      gB = dB(33);
    const {
      windows: oB,
      target: kB,
      stepDown: LB,
      stepUp: OB,
      noGain: DB
    } = YB.b, uB = 1e3 / 60 * 1.08, HB = 1e3 / 55, EB = 1e3 / 45, vB = 1e3 / 30 * .92, mB = 1e3 / 30 * 1.08;
    class iB {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(BB) {
        const TB = BB - this.lastMs;
        this.lastMs = BB;
        const dB = function(BB) {
          if (BB <= 0 || BB > 100) return -1;
          if (BB <= uB) return 0;
          if (BB >= HB && BB <= EB) return 1;
          return BB >= vB && BB <= mB ? 2 : -1
        }(TB);
        dB !== this.runBand && (this.runBand = dB, this.runLength = 0), dB < 0 || ++this.runLength < 3 || (0 === dB ? this.votes60++ : 1 === dB ? (this.votesMid++, this.sumMidMs += TB) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const NB = oB.windowMs,
      tB = oB.settleMs,
      fB = oB.graceMs,
      sB = oB.minIntervals,
      MB = 1e3 * sB / NB,
      zB = DB.backoffMs,
      wB = DB.maxMs;
    class UB {
      constructor(BB, TB) {
        let {
          lowest: dB,
          startStep: VB = 0,
          noGain: yB = null,
          upWait: pB = null
        } = TB;
        this.hooks = BB, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new iB, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = kB.maxFps, this.lowest = dB, this.step = Math.min(VB, dB), this.noGain = yB, this.climbing = this.step > 0;
        const lB = dB + 1;
        this.downUntilMs = new Array(lB).fill(0), this.downBackoffMs = new Array(lB).fill(0), this.upFailures = new Array(lB).fill(0), this.upUntilMs = new Array(lB).fill(0), null !== pB && pB.step >= 0 && pB.step < lB && (this.upUntilMs[pB.step] = pB.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(BB), !dB) return void this.lD(BB);
        const yB = BB - this.lastFrameMs,
          pB = this.resizeStall(BB);
        if (yB > 2e3 && !pB && this.lD(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = BB, this.quietUntilMs = Math.max(this.quietUntilMs, BB + fB), this.graceUntilMs = BB + fB, this.windowStartMs = -1, void(this.slowStartMs = -1);
        yB > 500 && (this.hitch(BB), pB && (this.slowStartMs = -1)), this.lastFrameMs = BB, BB >= this.quietUntilMs && this.countWindow(BB, TB, VB) || TB && BB >= this.graceUntilMs && this.countSlow(BB)
      }
      countWindow(BB, TB, dB) {
        if (this.windowStartMs < 0) return !!TB && (this.windowStartMs = BB, this.lastDrawnMs = BB, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = dB, !1);
        if (this.windowMasked ||= dB, !TB) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, BB - this.lastDrawnMs), this.lastDrawnMs = BB;
        const VB = BB - this.windowStartMs;
        if (VB < NB) return !1;
        const yB = this.windowIntervals,
          pB = 1e3 * yB / VB,
          lB = this.windowHeld,
          JB = this.windowMaxIntervalMs,
          YB = this.windowMasked;
        if (this.windowStartMs = -1, yB < sB) return !1;
        this.slowStartMs = -1;
        const gB = this.targetFps(),
          oB = pB >= gB * kB.cleanShare && JB <= kB.cleanMaxIntervalMs && (0 === lB || pB >= gB);
        return this.decide(pB, oB, pB < gB * kB.dropShare, YB, BB), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(kB.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(BB) {
        if (this.slowStartMs < 0) return this.slowStartMs = BB, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const TB = BB - this.slowStartMs;
        if (TB < 1e4) return;
        const dB = 1e3 * this.slowIntervals / TB;
        this.slowStartMs = -1, this.countSlow(BB), dB < MB && (this.windowStartMs = -1, this.decide(dB, !1, !0, !1, BB))
      }
      resizeStall(BB) {
        return this.lastFrameMs - this.resizedMs <= tB && BB - this.lastFrameMs <= 15e3
      }
      paused(BB) {
        this.refresh.frame(BB), BB - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, BB + fB), this.graceUntilMs = BB + fB), this.lastFrameMs = BB, this.slowStartMs = -1, this.hitch(BB)
      }
      resized(BB) {
        this.resizedMs = BB, this.hitch(BB)
      }
      hidden() {
        this.lD(this.lastFrameMs)
      }
      lD(BB) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(BB))
      }
      hitch(BB) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, BB + tB)
      }
      left(BB) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const TB = this.phase;
        "watch" !== TB.kind && (this.phase = {
          kind: "watch"
        }, "down" === TB.kind && (this.downUntilMs[TB.from] = Math.max(this.downUntilMs[TB.from], BB + zB)), this.setStep(TB.from, 0, BB, "left"), "up" === TB.kind && (this.climbed = TB.fromClimbed))
      }
      decide(BB, TB, dB, VB, yB) {
        const pB = this.phase;
        switch (pB.kind) {
          case "watch":
            return void this.watch(BB, TB, dB, VB, yB);
          case "down":
            if (pB.judged++, pB.fpsSum += BB, pB.dropped ||= dB, pB.judged < LB.judgeWindows) return;
            return void(!pB.dropped || pB.fpsSum / pB.judged >= pB.fromFps * LB.keepGain ? this.keepDown(pB.from, pB.fpsSum / pB.judged, yB) : this.noGainFrom(pB.from, pB.fromFps, yB));
          case "up":
            return TB ? void(++pB.judged >= OB.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: pB.from,
              heldWindows: 0,
              below: pB.fromClimbed
            }, this.record(yB, BB, "up_kept"))) : (VB ? (this.watchAt(pB.from), this.setStep(pB.from, BB, yB, "spoiled")) : this.failUp(this.step, pB.from, BB, yB), void(this.climbed = pB.fromClimbed))
        }
      }
      watch(BB, TB, dB, VB, yB) {
        const pB = this.climbed;
        if (null !== pB && !dB && !VB && ++pB.heldWindows >= OB.heldWindows && (this.climbed = null, this.record(yB, BB, "Dg"), this.hooks.Dg(this.step)), dB ? (this.dropRun++, this.dropRunFpsSum += BB, this.dropRunMasked ||= VB) : this.resetDropRun(), VB && TB || (this.cleanRun = TB ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? LB.maskedWindows : LB.dropWindows)) {
          const TB = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const dB = this.climbed;
          return void(null !== dB ? (this.failUp(this.step, dB.from, BB, yB), this.climbed = dB.below) : this.step < this.lowest && this.downAllowed(yB) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: TB,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, BB, yB, "down")))
        }
        const lB = this.step - 1;
        lB >= 0 && this.cleanRun >= (this.climbing ? OB.climbWindows : OB.cleanWindows) && this.upAllowed(lB, yB) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(lB, BB, yB, "up"))
      }
      downAllowed(BB) {
        return !(0 === this.step && null !== this.noGain && BB < this.noGain.untilMs) && BB >= this.downUntilMs[this.step]
      }
      upAllowed(BB, TB) {
        return this.upFailures[BB] <= OB.failWaitsMs.length && TB >= this.upUntilMs[BB]
      }
      keepDown(BB, TB, dB) {
        this.watchAt(this.step), this.downBackoffMs[BB] = 0, this.record(dB, TB, "down_kept"), 0 === BB && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.RO(this.step)
      }
      noGainFrom(BB, TB, dB) {
        var VB, yB;
        const pB = 0 === BB ? null !== (VB = null === (yB = this.noGain) || void 0 === yB ? void 0 : yB.backoffMs) && void 0 !== VB ? VB : 0 : this.downBackoffMs[BB],
          lB = 0 === pB ? zB : Math.min(2 * pB, wB);
        this.downBackoffMs[BB] = lB, this.downUntilMs[BB] = dB + lB, 0 === BB && (this.noGain = {
          untilMs: dB + lB,
          backoffMs: lB
        }, this.hooks.noGain(this.noGain)), this.watchAt(BB), this.setStep(BB, TB, dB, "no_gain")
      }
      failUp(BB, TB, dB, VB) {
        this.climbing = !1;
        const yB = ++this.upFailures[BB];
        this.upUntilMs[BB] = yB <= OB.failWaitsMs.length ? VB + OB.failWaitsMs[yB - 1] : Number.POSITIVE_INFINITY, this.watchAt(TB), this.setStep(TB, dB, VB, "up_failed"), this.hooks.upFailed(BB)
      }
      watchAt(BB) {
        this.phase = {
          kind: "watch"
        }, this.climbed = BB === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(BB, TB, dB, VB) {
        const yB = BB !== this.step;
        yB && (this.climbed = null), this.step = BB, this.record(dB, TB, VB), yB && (this.slowStartMs = -1, this.resized(dB), this.hooks.changed(BB))
      }
      record(BB, TB, dB) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: BB,
          step: this.step,
          fps: Math.round(10 * TB) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: dB
        })
      }
    }
    var FB = dB(8554),
      KB = dB(2575),
      rB = dB(8556);
    const IB = "autoGraphics",
      cB = 6048e5,
      SB = "startScale";

    function PB() {
      return (0, JB.M)(VB.d.get("clientEscMenuOptions").pixelScale) * (0, JB.G)()
    }

    function QB() {
      return (0, JB.p)(PB())
    }

    function RB() {
      const BB = gB.j.getItem(IB);
      return "object" !== typeof BB || null === BB || "string" !== typeof BB.gpu ? null : BB
    }

    function aB(BB) {
      return {
        untilEpochMs: Date.now() + (BB.untilMs - performance.now()),
        backoffMs: BB.backoffMs
      }
    }

    function ZB(BB) {
      return BB ? {
        untilMs: performance.now() + (BB.untilEpochMs - Date.now()),
        backoffMs: BB.backoffMs
      } : null
    }
    let XB = null;

    function WB() {
      if (null === XB) {
        const BB = new URLSearchParams(window.location.search).get("msaa");
        XB = VB.d.get("clientEscMenuOptions").antiAliasing && ("0" === BB || "1" !== BB && !(0, lB.b)("antiAliasing") && (0, KB.f)())
      }
      return XB
    }

    function hB(BB) {
      const TB = "number" === typeof BB ? Date.now() - BB : -1;
      return TB >= 0 && TB < cB
    }
    let CB = null;

    function GB() {
      return CB ??= (0, yB.getDeviceDefaultPixelScale)(), qB(CB)
    }

    function qB(BB) {
      const TB = VB.d.get("clientEscMenuOptions");
      return TB.pixelSmoothing && !(0, lB.b)("pixelScale") && TB.pixelScale === BB
    }
    let xB = null,
      jB = 0;

    function AB() {
      if (null === xB || jB !== PB()) {
        var BB;
        jB = PB();
        const TB = Number(null !== (BB = new URLSearchParams(window.location.search).get(SB)) && void 0 !== BB ? BB : ""),
          dB = QB();
        if (TB > 0 && TB <= 1) xB = (0, JB.z)(dB, dB[0] / TB);
        else {
          const BB = RB(),
            TB = (0, JB.z)(dB, (0, JB.C)(PB())),
            VB = !(0, KB.n)() && hB(null === BB || void 0 === BB ? void 0 : BB.heldAt) && (null === BB || void 0 === BB ? void 0 : BB.heldTarget) === PB() ? null === BB || void 0 === BB ? void 0 : BB.heldN : void 0;
          xB = "number" === typeof VB ? Math.min(TB, (0, JB.z)(dB, VB)) : TB
        }
      }
      return xB
    }

    function bB(BB, TB) {
      var dB;
      const VB = TB.indexOf(null !== (dB = BB.failedUpN) && void 0 !== dB ? dB : -1);
      return VB >= 0 && hB(BB.failedUpAt) ? {
        step: VB,
        untilMs: performance.now() + YB.b.stepUp.failWaitsMs[0]
      } : null
    }
    let nB = null,
      eB = !1,
      BT = "";
    const TT = new Set;

    function dT() {
      for (const BB of TT) BB()
    }

    function VT() {
      return eB ? null : (kT(), null === nB ? (null !== CB || null !== (0, yB.peekGpuVendor)() ? GB() : qB(1)) ? AB() : null : GB() ? nB.currentStep() : null)
    }

    function yT() {
      const BB = VT();
      if (null === BB) return null;
      const TB = QB(),
        dB = TB[Math.min(BB, TB.length - 1)];
      return dB === pT() ? null : dB
    }

    function pT() {
      return (0, JB.v)(VB.d.get("clientEscMenuOptions").pixelScale, (0, JB.G)())
    }

    function lT() {
      return null !== nB && null !== yT()
    }

    function JT(BB) {
      return TT.add(BB), () => {
        TT.delete(BB)
      }
    }

    function YT(BB, TB, dB) {
      var VB;
      if (null !== nB || eB || (0, KB.n)()) return;
      const yB = (0, FB.d)(BB, TB, dB);
      null !== yB && (0, KB.o)(yB.vendor), BT = `${BB}:${(null===yB||void 0===yB?void 0:yB.renderer)||(null===yB||void 0===yB?void 0:yB.vendor)||""}`, (null === (VB = RB()) || void 0 === VB ? void 0 : VB.gpu) !== BT && (gB.j.setItem(IB, {
        gpu: BT
      }), xB = null), oT(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var BB;
          null === (BB = nB) || void 0 === BB || BB.hidden()
        } catch (TB) {
          vT(), console.error("The quality steps stopped", TB)
        }
      }))
    }
    let gT = 0;

    function oT() {
      var BB;
      const TB = null !== (BB = RB()) && void 0 !== BB ? BB : {
          gpu: BT
        },
        dB = QB();
      gT = PB(), nB = new UB({
          changed: dT,
          RO: () => {
            LT({
              heldN: void 0
            })
          },
          Dg: BB => {
            var TB;
            const dB = QB()[BB],
              VB = {
                heldN: dB,
                heldAt: Date.now(),
                heldTarget: PB()
              };
            (null === (TB = RB()) || void 0 === TB ? void 0 : TB.failedUpN) === dB && (VB.failedUpN = void 0), LT(VB)
          },
          upFailed: BB => {
            LT({
              failedUpN: QB()[BB],
              failedUpAt: Date.now()
            })
          },
          noGain: BB => {
            LT({
              noGain: null === BB ? void 0 : aB(BB)
            })
          }
        }, {
          lowest: dB.length - 1,
          startStep: AB(),
          noGain: ZB(TB.noGain),
          upWait: bB(TB, dB)
        }),
        function(BB) {
          const TB = {
            get step() {
              return BB.currentStep()
            },
            get n() {
              var BB;
              return null !== (BB = yT()) && void 0 !== BB ? BB : pT()
            },
            get scale() {
              var BB;
              return QB()[0] / (null !== (BB = yT()) && void 0 !== BB ? BB : pT())
            },
            get msaaOff() {
              return WB()
            },
            log: BB.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: TB,
            configurable: !0
          })
        }(nB), dT()
    }

    function kT() {
      null !== nB && PB() !== gT && (xB = null, oT())
    }

    function LT(BB) {
      gB.j.setItem(IB, {
        ...RB(),
        ...BB,
        gpu: BT
      })
    }
    let OT = 0,
      DT = 0,
      uT = !1;

    function HT() {
      OT++
    }

    function ET(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      kT(), null !== nB && (BB - DT >= 1e3 && (uT = OT > YB.b.sceneChange.meshesPerSecond, OT = 0, DT = BB), rB.b.isHeld() ? nB.paused(BB) : nB.frame(BB, TB, dB && !document.hidden && GB(), uT || VB > 0 || (0, pB.l)()))
    }

    function vT() {
      if (!eB) {
        eB = !0, null !== nB && (nB = null, LT({
          noGain: void 0
        }));
        try {
          dT()
        } catch (BB) {
          console.error("The quality steps' resize to the player's n failed", BB)
        }
      }
    }

    function mT() {
      var BB;
      null === (BB = nB) || void 0 === BB || BB.resized(performance.now())
    }
  },
  8554: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(95),
      yB = dB(122);

    function pB(BB, TB, dB) {
      if ("webgpu" === BB) return dB ? ((0, VB.seedGpuVendor)(dB), {
        vendor: dB,
        renderer: ""
      }) : null;
      try {
        const dB = "webgl" === BB ? TB.getContext("webgl2") : TB.getContext("webgl"),
          pB = null === dB || void 0 === dB ? void 0 : dB.getExtension("WEBGL_debug_renderer_info");
        if (dB && pB) {
          const BB = String(dB.getParameter(pB.UNMASKED_VENDOR_WEBGL)),
            TB = String(dB.getParameter(pB.UNMASKED_RENDERER_WEBGL));
          return (0, VB.seedGpuVendor)(BB), (0, yB.s)(BB, TB), {
            vendor: BB,
            renderer: TB
          }
        }
        dB && (0, yB.s)(String(dB.getParameter(dB.VENDOR)), String(dB.getParameter(dB.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);