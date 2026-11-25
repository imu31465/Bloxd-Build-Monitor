export const id = 198;
export const ids = [198];
export const modules = {
  34110: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => AB,
      i: () => dI,
      m: () => WI,
      n: () => QI,
      q: () => GI,
      t: () => kI,
      w: () => nI,
      y: () => CI,
      B: () => cI
    });
    var TB = ZB(273),
      JB = ZB(20),
      oB = ZB(105),
      GB = ZB(1711),
      vB = ZB(4610),
      kB = ZB(3071),
      cB = ZB(3080),
      nB = ZB(36);
    const {
      windows: hB,
      target: zB,
      stepDown: FB,
      stepUp: NB,
      noGain: gB
    } = cB.e, qB = 1e3 / 60 * 1.08, yB = 1e3 / 55, UB = 1e3 / 45, WB = 1e3 / 30 * .92, dB = 1e3 / 30 * 1.08;
    class CB {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(BB, IB) {
        const ZB = BB - this.lastMs;
        this.lastMs = BB;
        const TB = function(BB) {
          if (BB <= 0 || BB > 100) return -1;
          if (BB <= qB) return 0;
          if (BB >= yB && BB <= UB) return 1;
          return BB >= WB && BB <= dB ? 2 : -1
        }(ZB);
        0 === TB && 2 === this.runBand && IB && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), TB !== this.runBand && (this.runBand = TB, this.runLength = 0), TB < 0 || ++this.runLength < 3 || (0 === TB ? this.votes60++ : 1 === TB ? (this.votesMid++, this.sumMidMs += ZB) : (this.votes30++, IB && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const QB = hB.windowMs,
      sB = hB.settleMs,
      wB = hB.graceMs,
      OB = hB.minIntervals,
      YB = 1e3 * OB / QB,
      iB = Math.floor(1e4 / QB),
      pB = gB.backoffMs,
      aB = gB.maxMs;
    class HB {
      constructor(BB, IB) {
        let {
          lowest: ZB,
          startStep: TB = 0,
          noGain: JB = null,
          upWait: oB = null
        } = IB;
        this.hooks = BB, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new CB, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = zB.maxFps, this.lowest = ZB, this.step = Math.min(TB, ZB), this.noGain = JB, this.climbing = this.step > 0;
        const GB = ZB + 1;
        this.downUntilMs = new Array(GB).fill(0), this.downBackoffMs = new Array(GB).fill(0), this.noGainFps = new Array(GB).fill(0), this.noGainFps[0] = null === JB ? 0 : JB.fps, this.upFailures = new Array(GB).fill(0), this.upUntilMs = new Array(GB).fill(0), null !== oB && oB.step >= 0 && oB.step < GB && (this.upUntilMs[oB.step] = oB.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(BB, ZB && !TB), !ZB) return void this.leave(BB);
        const JB = BB - this.lastFrameMs,
          oB = this.resizeStall(BB);
        if (JB > 2e3 && !oB && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = BB, this.quietUntilMs = Math.max(this.quietUntilMs, BB + wB), this.graceUntilMs = BB + wB, this.windowStartMs = -1, void(this.slowStartMs = -1);
        JB > 500 && (this.hitch(BB), oB && (this.slowStartMs = -1)), this.lastFrameMs = BB, BB >= this.quietUntilMs && this.countWindow(BB, IB, TB) || IB && BB >= this.graceUntilMs && this.countSlow(BB, TB)
      }
      countWindow(BB, IB, ZB) {
        if (this.windowStartMs < 0) return !!IB && (this.windowStartMs = BB, this.lastDrawnMs = BB, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = ZB, !1);
        if (this.windowMasked ||= ZB, !IB) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, BB - this.lastDrawnMs), this.lastDrawnMs = BB;
        const TB = BB - this.windowStartMs;
        if (TB < QB) return !1;
        const JB = this.windowIntervals,
          oB = 1e3 * JB / TB,
          GB = this.windowHeld,
          vB = this.windowMaxIntervalMs,
          kB = this.windowMasked;
        if (this.windowStartMs = -1, JB < OB) return !1;
        this.slowStartMs = -1;
        const cB = this.targetFps(),
          nB = oB >= cB * zB.cleanShare && vB <= zB.cleanMaxIntervalMs && (0 === GB || oB >= cB);
        return this.decide(oB, 1, nB, oB < cB * zB.dropShare, kB, BB), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(zB.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(BB, IB) {
        if (this.slowStartMs < 0) return this.slowStartMs = BB, this.slowIntervals = 0, void(this.slowMasked = IB);
        this.slowMasked ||= IB, this.slowIntervals++;
        const ZB = BB - this.slowStartMs;
        if (ZB < 1e4) return;
        const TB = 1e3 * this.slowIntervals / ZB,
          JB = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(BB, IB), TB < YB && (this.windowStartMs = -1, this.decide(TB, iB, !1, !0, JB, BB))
      }
      resizeStall(BB) {
        return this.lastFrameMs - this.resizedMs <= sB && BB - this.lastFrameMs <= 15e3
      }
      paused(BB) {
        this.refresh.frame(BB, !1), BB - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, BB + wB), this.graceUntilMs = BB + wB), this.lastFrameMs = BB, this.slowStartMs = -1, this.hitch(BB)
      }
      resized(BB) {
        this.resizedMs = BB, this.hitch(BB)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(BB) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(BB))
      }
      hitch(BB) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, BB + sB)
      }
      left(BB) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const IB = this.phase;
        "watch" !== IB.kind && (this.phase = {
          kind: "watch"
        }, "down" === IB.kind && (this.downUntilMs[IB.from] = BB + pB, this.noGainFps[IB.from] = 0, 0 === IB.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, BB + pB)
        })), this.setStep(IB.from, 0, BB, "left"), "up" === IB.kind && (this.climbed = IB.fromClimbed))
      }
      decide(BB, IB, ZB, TB, JB, oB) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: oB,
          step: this.step,
          fps: Math.round(10 * BB) / 10,
          windows: IB,
          masked: JB,
          dropping: TB
        });
        const GB = this.phase;
        switch (GB.kind) {
          case "watch":
            return void this.watch(BB, IB, ZB, TB, JB, oB);
          case "down": {
            if (GB.judged += IB, GB.fpsSum += BB * IB, JB || (GB.clean += IB, GB.cleanFpsSum += BB * IB), GB.judged < FB.judgeWindows) return;
            const ZB = GB.clean > 0 ? GB.cleanFpsSum / GB.clean : GB.fpsSum / GB.judged;
            return void(ZB >= GB.fromFps * FB.keepGain ? this.keepDown(GB.from, ZB, oB) : this.noGainFrom(GB, ZB, oB))
          }
          case "up":
            return ZB ? void(++GB.judged >= NB.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: GB.from,
              heldWindows: 0,
              below: GB.fromClimbed
            }, this.record(oB, BB, "up_kept"))) : (JB ? (this.watchAt(GB.from), this.setStep(GB.from, BB, oB, "spoiled")) : this.failUp(this.step, GB.from, BB, oB), void(this.climbed = GB.fromClimbed))
        }
      }
      watch(BB, IB, ZB, TB, JB, oB) {
        const GB = this.climbed;
        null !== GB && !TB && !JB && ++GB.heldWindows >= NB.heldWindows && (this.climbed = null, this.record(oB, BB, "sv"), this.hooks.sv(this.step)), TB ? (this.dropRun += IB, this.dropRunFpsSum += BB * IB, this.dropRunMasked ||= JB, JB || (this.dropRunClean += IB, this.dropRunCleanFpsSum += BB * IB)) : this.resetDropRun(), JB && ZB || (this.cleanRun = ZB ? this.cleanRun + 1 : 0);
        const vB = null !== this.climbed ? NB : FB;
        if (this.dropRun >= (this.dropRunMasked ? vB.maskedWindows : vB.dropWindows)) {
          const IB = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            ZB = this.dropRunClean >= FB.dropWindows && IB < this.noGainFps[this.step] * gB.heavierShare;
          this.resetDropRun();
          const TB = this.climbed;
          return void(null !== TB ? (this.failUp(this.step, TB.from, BB, oB), this.climbed = TB.below) : this.step < this.lowest && (ZB || this.waitOver(oB)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: IB,
            early: !this.waitOver(oB),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, IB, oB, "down")))
        }
        const kB = this.step - 1;
        kB >= 0 && this.cleanRun >= (this.climbing ? NB.climbWindows : NB.cleanWindows) && oB >= this.upUntilMs[kB] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(kB, BB, oB, "up"))
      }
      waitOver(BB) {
        return !(0 === this.step && null !== this.noGain && BB < this.noGain.untilMs) && BB >= this.downUntilMs[this.step]
      }
      keepDown(BB, IB, ZB) {
        this.watchAt(this.step), this.downBackoffMs[BB] = 0, this.noGainFps[BB] = 0, this.record(ZB, IB, "down_kept"), 0 === BB && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.XF(this.step)
      }
      noGainFrom(BB, IB, ZB) {
        var TB, JB;
        let {
          from: oB,
          fromFps: GB,
          early: vB
        } = BB;
        const kB = 0 === oB ? null !== (TB = null === (JB = this.noGain) || void 0 === JB ? void 0 : JB.backoffMs) && void 0 !== TB ? TB : 0 : this.downBackoffMs[oB],
          cB = 0 === kB ? pB : vB ? kB : Math.min(2 * kB, aB),
          nB = Math.max(GB, IB);
        this.downBackoffMs[oB] = cB, this.downUntilMs[oB] = ZB + cB, this.noGainFps[oB] = nB, 0 === oB && (this.noGain = {
          untilMs: ZB + cB,
          backoffMs: cB,
          fps: nB
        }, this.hooks.noGain(this.noGain)), this.watchAt(oB), this.setStep(oB, IB, ZB, "no_gain")
      }
      failUp(BB, IB, ZB, TB) {
        this.climbing = !1;
        const JB = ++this.upFailures[BB],
          oB = NB.failWaitsMs;
        this.upUntilMs[BB] = TB + oB[Math.min(JB, oB.length) - 1], this.watchAt(IB), this.setStep(IB, ZB, TB, "up_failed"), this.hooks.upFailed(BB)
      }
      watchAt(BB) {
        this.phase = {
          kind: "watch"
        }, this.climbed = BB === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(BB, IB, ZB, TB) {
        const JB = BB !== this.step;
        JB && (this.climbed = null), this.step = BB, this.record(ZB, IB, TB), JB && (this.slowStartMs = -1, this.resized(ZB), this.hooks.changed(BB))
      }
      record(BB, IB, ZB) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: BB,
          step: this.step,
          fps: Math.round(10 * IB) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: ZB
        })
      }
    }
    var MB = ZB(34118),
      jB = ZB(3281),
      PB = ZB(34126);
    const RB = "autoGraphics",
      rB = 6048e5,
      mB = "startScale";

    function XB() {
      return (0, kB.T)(JB.d.get("clientEscMenuOptions").pixelScale) * (0, kB.P)()
    }

    function LB() {
      return (0, kB.z)(XB())
    }

    function eB() {
      const BB = nB.m.getItem(RB);
      return "object" !== typeof BB || null === BB || "string" !== typeof BB.gpu ? null : BB
    }

    function uB(BB) {
      return {
        untilEpochMs: Date.now() + (BB.untilMs - performance.now()),
        backoffMs: BB.backoffMs,
        fps: BB.fps
      }
    }

    function fB(BB) {
      return void 0 === BB || "number" !== typeof BB.fps ? null : {
        untilMs: performance.now() + (BB.untilEpochMs - Date.now()),
        backoffMs: BB.backoffMs,
        fps: BB.fps
      }
    }
    let lB = null;

    function AB() {
      if (null === lB) {
        const BB = new URLSearchParams(window.location.search).get("msaa");
        lB = JB.d.get("clientEscMenuOptions").antiAliasing && ("0" === BB || "1" !== BB && !(0, vB.d)("antiAliasing") && (0, jB.g)())
      }
      return lB
    }

    function tB(BB) {
      const IB = "number" === typeof BB ? Date.now() - BB : -1;
      return IB >= 0 && IB < rB
    }
    let bB = null;

    function xB() {
      return bB ??= (0, oB.getDeviceDefaultPixelScale)(), EB(bB)
    }

    function EB(BB) {
      const IB = JB.d.get("clientEscMenuOptions");
      return IB.pixelSmoothing && !(0, vB.d)("pixelScale") && IB.pixelScale === BB
    }
    let DB = null,
      KB = 0;

    function VB() {
      if (null === DB || KB !== XB()) {
        var BB;
        KB = XB();
        const IB = Number(null !== (BB = new URLSearchParams(window.location.search).get(mB)) && void 0 !== BB ? BB : ""),
          ZB = LB();
        if (IB > 0 && IB <= 1) DB = (0, kB.J)(ZB, ZB[0] / IB);
        else {
          const BB = eB(),
            IB = (0, kB.J)(ZB, (0, kB.L)(XB())),
            TB = !(0, jB.k)() && tB(null === BB || void 0 === BB ? void 0 : BB.heldAt) && (null === BB || void 0 === BB ? void 0 : BB.heldTarget) === XB() ? null === BB || void 0 === BB ? void 0 : BB.heldN : void 0;
          DB = "number" === typeof TB ? Math.min(IB, (0, kB.J)(ZB, TB)) : IB
        }
      }
      return DB
    }

    function SB(BB, IB) {
      var ZB;
      const TB = IB.indexOf(null !== (ZB = BB.failedUpN) && void 0 !== ZB ? ZB : -1);
      return TB >= 0 && tB(BB.failedUpAt) ? {
        step: TB,
        untilMs: performance.now() + cB.e.stepUp.failWaitsMs[0]
      } : null
    }
    let BI = null,
      II = !1,
      ZI = "";
    const TI = new Set;

    function JI() {
      for (const BB of TI) BB()
    }

    function oI() {
      return II ? null : (FI(), null === BI ? (null !== bB || null !== (0, oB.peekGpuVendor)() ? xB() : EB(1)) ? VB() : null : xB() ? BI.currentStep() : null)
    }

    function GI() {
      const BB = oI();
      if (null === BB) return null;
      const IB = LB(),
        ZB = IB[Math.min(BB, IB.length - 1)];
      return ZB === vI() ? null : ZB
    }

    function vI() {
      return (0, kB.E)(JB.d.get("clientEscMenuOptions").pixelScale, (0, kB.P)())
    }

    function kI() {
      return null !== BI && null !== GI()
    }

    function cI(BB) {
      return TI.add(BB), () => {
        TI.delete(BB)
      }
    }

    function nI(BB, IB, ZB) {
      var JB;
      if (null !== BI || II || (0, jB.k)()) return;
      const oB = (0, MB.e)(BB, IB, ZB);
      null !== oB && ((0, jB.n)(oB.vendor), "" !== oB.renderer && (0, TB.m)(oB.vendor, oB.renderer)), ZI = `${BB}:${(null===oB||void 0===oB?void 0:oB.renderer)||(null===oB||void 0===oB?void 0:oB.vendor)||""}`, (null === (JB = eB()) || void 0 === JB ? void 0 : JB.gpu) !== ZI && (nB.m.setItem(RB, {
        gpu: ZI
      }), DB = null), zI(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var BB;
          null === (BB = BI) || void 0 === BB || BB.hidden()
        } catch (IB) {
          CI(), console.error("The quality steps stopped", IB)
        }
      }))
    }
    let hI = 0;

    function zI() {
      var BB;
      const IB = null !== (BB = eB()) && void 0 !== BB ? BB : {
          gpu: ZI
        },
        ZB = LB();
      hI = XB(), BI = new HB({
          changed: JI,
          XF: () => {
            NI({
              heldN: void 0
            })
          },
          sv: BB => {
            var IB;
            const ZB = LB()[BB],
              TB = {
                heldN: ZB,
                heldAt: Date.now(),
                heldTarget: XB()
              };
            (null === (IB = eB()) || void 0 === IB ? void 0 : IB.failedUpN) === ZB && (TB.failedUpN = void 0), NI(TB)
          },
          upFailed: BB => {
            NI({
              failedUpN: LB()[BB],
              failedUpAt: Date.now()
            })
          },
          noGain: BB => {
            NI({
              noGain: null === BB ? void 0 : uB(BB)
            })
          }
        }, {
          lowest: ZB.length - 1,
          startStep: VB(),
          noGain: fB(IB.noGain),
          upWait: SB(IB, ZB)
        }),
        function(BB) {
          const IB = {
            get step() {
              return BB.currentStep()
            },
            get n() {
              var BB;
              return null !== (BB = GI()) && void 0 !== BB ? BB : vI()
            },
            get scale() {
              var BB;
              return LB()[0] / (null !== (BB = GI()) && void 0 !== BB ? BB : vI())
            },
            get msaaOff() {
              return AB()
            },
            log: BB.log,
            windows: BB.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: IB,
            configurable: !0
          })
        }(BI), JI()
    }

    function FI() {
      null !== BI && XB() !== hI && (DB = null, zI())
    }

    function NI(BB) {
      nB.m.setItem(RB, {
        ...eB(),
        ...BB,
        gpu: ZI
      })
    }
    let gI = 0,
      qI = 0,
      yI = 0,
      UI = !1;

    function WI() {
      gI++
    }

    function dI(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      FI(), null !== BI && (BB - yI >= 1e3 && (UI = gI - qI > cB.e.sceneChange.meshesPerSecond, qI = gI, yI = BB), PB.c.isHeld() ? BI.paused(BB) : BI.frame(BB, IB, ZB && !document.hidden && xB(), UI || TB > 0 || (0, GB.n)()))
    }

    function CI() {
      if (!II) {
        II = !0, null !== BI && (BI = null, NI({
          noGain: void 0
        }));
        try {
          JI()
        } catch (BB) {
          console.error("The quality steps' resize to the player's n failed", BB)
        }
      }
    }

    function QI() {
      var BB;
      null === (BB = BI) || void 0 === BB || BB.resized(performance.now())
    }
  },
  34118: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(105),
      JB = ZB(138);

    function oB(BB, IB, ZB) {
      if ("webgpu" === BB) return ZB ? ((0, TB.seedGpuVendor)(ZB), {
        vendor: ZB,
        renderer: ""
      }) : null;
      try {
        const ZB = "webgl" === BB ? IB.getContext("webgl2") : IB.getContext("webgl");
        "webgl" === BB && ZB && (0, JB.u)(ZB);
        const oB = null === ZB || void 0 === ZB ? void 0 : ZB.getExtension("WEBGL_debug_renderer_info");
        if (ZB && oB) {
          const BB = String(ZB.getParameter(oB.UNMASKED_VENDOR_WEBGL)),
            IB = String(ZB.getParameter(oB.UNMASKED_RENDERER_WEBGL));
          return (0, TB.seedGpuVendor)(BB), (0, JB.A)(BB, IB), {
            vendor: BB,
            renderer: IB
          }
        }
        ZB && (0, JB.A)(String(ZB.getParameter(ZB.VENDOR)), String(ZB.getParameter(ZB.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);