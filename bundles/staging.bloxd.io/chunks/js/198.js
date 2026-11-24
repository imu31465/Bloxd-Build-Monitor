export const id = 198;
export const ids = [198];
export const modules = {
  34179: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => wB,
      f: () => gj,
      g: () => Lj,
      i: () => Sj,
      l: () => Ij,
      o: () => uj,
      s: () => aj,
      v: () => tj,
      y: () => Uj
    });
    var QB = zB(283),
      nB = zB(28),
      dB = zB(106),
      IB = zB(1664),
      NB = zB(4542),
      uB = zB(3004),
      UB = zB(3009),
      aB = zB(41);
    const {
      windows: pB,
      target: rB,
      stepDown: sB,
      stepUp: JB,
      noGain: mB
    } = UB.c, yB = 1e3 / 60 * 1.08, kB = 1e3 / 55, GB = 1e3 / 45, LB = 1e3 / 30 * .92, gB = 1e3 / 30 * 1.08;
    class tB {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(BB, jB) {
        const zB = BB - this.lastMs;
        this.lastMs = BB;
        const QB = function(BB) {
          if (BB <= 0 || BB > 100) return -1;
          if (BB <= yB) return 0;
          if (BB >= kB && BB <= GB) return 1;
          return BB >= LB && BB <= gB ? 2 : -1
        }(zB);
        0 === QB && 2 === this.runBand && jB && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), QB !== this.runBand && (this.runBand = QB, this.runLength = 0), QB < 0 || ++this.runLength < 3 || (0 === QB ? this.votes60++ : 1 === QB ? (this.votesMid++, this.sumMidMs += zB) : (this.votes30++, jB && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const SB = pB.windowMs,
      MB = pB.settleMs,
      EB = pB.graceMs,
      iB = pB.minIntervals,
      qB = 1e3 * iB / SB,
      fB = Math.floor(1e4 / SB),
      oB = mB.backoffMs,
      HB = mB.maxMs;
    class DB {
      constructor(BB, jB) {
        let {
          lowest: zB,
          startStep: QB = 0,
          noGain: nB = null,
          upWait: dB = null
        } = jB;
        this.hooks = BB, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new tB, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = rB.maxFps, this.lowest = zB, this.step = Math.min(QB, zB), this.noGain = nB, this.climbing = this.step > 0;
        const IB = zB + 1;
        this.downUntilMs = new Array(IB).fill(0), this.downBackoffMs = new Array(IB).fill(0), this.noGainFps = new Array(IB).fill(0), this.noGainFps[0] = null === nB ? 0 : nB.fps, this.upFailures = new Array(IB).fill(0), this.upUntilMs = new Array(IB).fill(0), null !== dB && dB.step >= 0 && dB.step < IB && (this.upUntilMs[dB.step] = dB.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(BB, zB && !QB), !zB) return void this.leave(BB);
        const nB = BB - this.lastFrameMs,
          dB = this.resizeStall(BB);
        if (nB > 2e3 && !dB && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = BB, this.quietUntilMs = Math.max(this.quietUntilMs, BB + EB), this.graceUntilMs = BB + EB, this.windowStartMs = -1, void(this.slowStartMs = -1);
        nB > 500 && (this.hitch(BB), dB && (this.slowStartMs = -1)), this.lastFrameMs = BB, BB >= this.quietUntilMs && this.countWindow(BB, jB, QB) || jB && BB >= this.graceUntilMs && this.countSlow(BB, QB)
      }
      countWindow(BB, jB, zB) {
        if (this.windowStartMs < 0) return !!jB && (this.windowStartMs = BB, this.lastDrawnMs = BB, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = zB, !1);
        if (this.windowMasked ||= zB, !jB) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, BB - this.lastDrawnMs), this.lastDrawnMs = BB;
        const QB = BB - this.windowStartMs;
        if (QB < SB) return !1;
        const nB = this.windowIntervals,
          dB = 1e3 * nB / QB,
          IB = this.windowHeld,
          NB = this.windowMaxIntervalMs,
          uB = this.windowMasked;
        if (this.windowStartMs = -1, nB < iB) return !1;
        this.slowStartMs = -1;
        const UB = this.targetFps(),
          aB = dB >= UB * rB.cleanShare && NB <= rB.cleanMaxIntervalMs && (0 === IB || dB >= UB);
        return this.decide(dB, 1, aB, dB < UB * rB.dropShare, uB, BB), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(rB.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(BB, jB) {
        if (this.slowStartMs < 0) return this.slowStartMs = BB, this.slowIntervals = 0, void(this.slowMasked = jB);
        this.slowMasked ||= jB, this.slowIntervals++;
        const zB = BB - this.slowStartMs;
        if (zB < 1e4) return;
        const QB = 1e3 * this.slowIntervals / zB,
          nB = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(BB, jB), QB < qB && (this.windowStartMs = -1, this.decide(QB, fB, !1, !0, nB, BB))
      }
      resizeStall(BB) {
        return this.lastFrameMs - this.resizedMs <= MB && BB - this.lastFrameMs <= 15e3
      }
      paused(BB) {
        this.refresh.frame(BB, !1), BB - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, BB + EB), this.graceUntilMs = BB + EB), this.lastFrameMs = BB, this.slowStartMs = -1, this.hitch(BB)
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
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, BB + MB)
      }
      left(BB) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const jB = this.phase;
        "watch" !== jB.kind && (this.phase = {
          kind: "watch"
        }, "down" === jB.kind && (this.downUntilMs[jB.from] = BB + oB, this.noGainFps[jB.from] = 0, 0 === jB.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, BB + oB)
        })), this.setStep(jB.from, 0, BB, "left"), "up" === jB.kind && (this.climbed = jB.fromClimbed))
      }
      decide(BB, jB, zB, QB, nB, dB) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: dB,
          step: this.step,
          fps: Math.round(10 * BB) / 10,
          windows: jB,
          masked: nB,
          dropping: QB
        });
        const IB = this.phase;
        switch (IB.kind) {
          case "watch":
            return void this.watch(BB, jB, zB, QB, nB, dB);
          case "down": {
            if (IB.judged += jB, IB.fpsSum += BB * jB, nB || (IB.clean += jB, IB.cleanFpsSum += BB * jB), IB.judged < sB.judgeWindows) return;
            const zB = IB.clean > 0 ? IB.cleanFpsSum / IB.clean : IB.fpsSum / IB.judged;
            return void(zB >= IB.fromFps * sB.keepGain ? this.keepDown(IB.from, zB, dB) : this.noGainFrom(IB, zB, dB))
          }
          case "up":
            return zB ? void(++IB.judged >= JB.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: IB.from,
              heldWindows: 0,
              below: IB.fromClimbed
            }, this.record(dB, BB, "up_kept"))) : (nB ? (this.watchAt(IB.from), this.setStep(IB.from, BB, dB, "spoiled")) : this.failUp(this.step, IB.from, BB, dB), void(this.climbed = IB.fromClimbed))
        }
      }
      watch(BB, jB, zB, QB, nB, dB) {
        const IB = this.climbed;
        null !== IB && !QB && !nB && ++IB.heldWindows >= JB.heldWindows && (this.climbed = null, this.record(dB, BB, "DN"), this.hooks.DN(this.step)), QB ? (this.dropRun += jB, this.dropRunFpsSum += BB * jB, this.dropRunMasked ||= nB, nB || (this.dropRunClean += jB, this.dropRunCleanFpsSum += BB * jB)) : this.resetDropRun(), nB && zB || (this.cleanRun = zB ? this.cleanRun + 1 : 0);
        const NB = null !== this.climbed ? JB : sB;
        if (this.dropRun >= (this.dropRunMasked ? NB.maskedWindows : NB.dropWindows)) {
          const jB = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            zB = this.dropRunClean >= sB.dropWindows && jB < this.noGainFps[this.step] * mB.heavierShare;
          this.resetDropRun();
          const QB = this.climbed;
          return void(null !== QB ? (this.failUp(this.step, QB.from, BB, dB), this.climbed = QB.below) : this.step < this.lowest && (zB || this.waitOver(dB)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: jB,
            early: !this.waitOver(dB),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, jB, dB, "down")))
        }
        const uB = this.step - 1;
        uB >= 0 && this.cleanRun >= (this.climbing ? JB.climbWindows : JB.cleanWindows) && dB >= this.upUntilMs[uB] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(uB, BB, dB, "up"))
      }
      waitOver(BB) {
        return !(0 === this.step && null !== this.noGain && BB < this.noGain.untilMs) && BB >= this.downUntilMs[this.step]
      }
      keepDown(BB, jB, zB) {
        this.watchAt(this.step), this.downBackoffMs[BB] = 0, this.noGainFps[BB] = 0, this.record(zB, jB, "down_kept"), 0 === BB && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.Cs(this.step)
      }
      noGainFrom(BB, jB, zB) {
        var QB, nB;
        let {
          from: dB,
          fromFps: IB,
          early: NB
        } = BB;
        const uB = 0 === dB ? null !== (QB = null === (nB = this.noGain) || void 0 === nB ? void 0 : nB.backoffMs) && void 0 !== QB ? QB : 0 : this.downBackoffMs[dB],
          UB = 0 === uB ? oB : NB ? uB : Math.min(2 * uB, HB),
          aB = Math.max(IB, jB);
        this.downBackoffMs[dB] = UB, this.downUntilMs[dB] = zB + UB, this.noGainFps[dB] = aB, 0 === dB && (this.noGain = {
          untilMs: zB + UB,
          backoffMs: UB,
          fps: aB
        }, this.hooks.noGain(this.noGain)), this.watchAt(dB), this.setStep(dB, jB, zB, "no_gain")
      }
      failUp(BB, jB, zB, QB) {
        this.climbing = !1;
        const nB = ++this.upFailures[BB],
          dB = JB.failWaitsMs;
        this.upUntilMs[BB] = QB + dB[Math.min(nB, dB.length) - 1], this.watchAt(jB), this.setStep(jB, zB, QB, "up_failed"), this.hooks.upFailed(BB)
      }
      watchAt(BB) {
        this.phase = {
          kind: "watch"
        }, this.climbed = BB === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(BB, jB, zB, QB) {
        const nB = BB !== this.step;
        nB && (this.climbed = null), this.step = BB, this.record(zB, jB, QB), nB && (this.slowStartMs = -1, this.resized(zB), this.hooks.changed(BB))
      }
      record(BB, jB, zB) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: BB,
          step: this.step,
          fps: Math.round(10 * jB) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: zB
        })
      }
    }
    var FB = zB(34185),
      YB = zB(3228),
      VB = zB(34188);
    const hB = "autoGraphics",
      XB = 6048e5,
      ZB = "startScale";

    function AB() {
      return (0, uB.P)(nB.c.get("clientEscMenuOptions").pixelScale) * (0, uB.L)()
    }

    function TB() {
      return (0, uB.t)(AB())
    }

    function PB() {
      const BB = aB.j.getItem(hB);
      return "object" !== typeof BB || null === BB || "string" !== typeof BB.gpu ? null : BB
    }

    function WB(BB) {
      return {
        untilEpochMs: Date.now() + (BB.untilMs - performance.now()),
        backoffMs: BB.backoffMs,
        fps: BB.fps
      }
    }

    function eB(BB) {
      return void 0 === BB || "number" !== typeof BB.fps ? null : {
        untilMs: performance.now() + (BB.untilEpochMs - Date.now()),
        backoffMs: BB.backoffMs,
        fps: BB.fps
      }
    }
    let lB = null;

    function wB() {
      if (null === lB) {
        const BB = new URLSearchParams(window.location.search).get("msaa");
        lB = nB.c.get("clientEscMenuOptions").antiAliasing && ("0" === BB || "1" !== BB && !(0, NB.c)("antiAliasing") && (0, YB.d)())
      }
      return lB
    }

    function xB(BB) {
      const jB = "number" === typeof BB ? Date.now() - BB : -1;
      return jB >= 0 && jB < XB
    }
    let KB = null;

    function CB() {
      return KB ??= (0, dB.getDeviceDefaultPixelScale)(), cB(KB)
    }

    function cB(BB) {
      const jB = nB.c.get("clientEscMenuOptions");
      return jB.pixelSmoothing && !(0, NB.c)("pixelScale") && jB.pixelScale === BB
    }
    let bB = null,
      vB = 0;

    function RB() {
      if (null === bB || vB !== AB()) {
        var BB;
        vB = AB();
        const jB = Number(null !== (BB = new URLSearchParams(window.location.search).get(ZB)) && void 0 !== BB ? BB : ""),
          zB = TB();
        if (jB > 0 && jB <= 1) bB = (0, uB.I)(zB, zB[0] / jB);
        else {
          const BB = PB(),
            jB = (0, uB.I)(zB, (0, uB.K)(AB())),
            QB = !(0, YB.f)() && xB(null === BB || void 0 === BB ? void 0 : BB.heldAt) && (null === BB || void 0 === BB ? void 0 : BB.heldTarget) === AB() ? null === BB || void 0 === BB ? void 0 : BB.heldN : void 0;
          bB = "number" === typeof QB ? Math.min(jB, (0, uB.I)(zB, QB)) : jB
        }
      }
      return bB
    }

    function OB(BB, jB) {
      var zB;
      const QB = jB.indexOf(null !== (zB = BB.failedUpN) && void 0 !== zB ? zB : -1);
      return QB >= 0 && xB(BB.failedUpAt) ? {
        step: QB,
        untilMs: performance.now() + UB.c.stepUp.failWaitsMs[0]
      } : null
    }
    let Bj = null,
      jj = !1,
      zj = "";
    const Qj = new Set;

    function nj() {
      for (const BB of Qj) BB()
    }

    function dj() {
      return jj ? null : (sj(), null === Bj ? (null !== KB || null !== (0, dB.peekGpuVendor)() ? CB() : cB(1)) ? RB() : null : CB() ? Bj.currentStep() : null)
    }

    function Ij() {
      const BB = dj();
      if (null === BB) return null;
      const jB = TB(),
        zB = jB[Math.min(BB, jB.length - 1)];
      return zB === Nj() ? null : zB
    }

    function Nj() {
      return (0, uB.B)(nB.c.get("clientEscMenuOptions").pixelScale, (0, uB.L)())
    }

    function uj() {
      return null !== Bj && null !== Ij()
    }

    function Uj(BB) {
      return Qj.add(BB), () => {
        Qj.delete(BB)
      }
    }

    function aj(BB, jB, zB) {
      var nB;
      if (null !== Bj || jj || (0, YB.f)()) return;
      const dB = (0, FB.e)(BB, jB, zB);
      null !== dB && ((0, YB.j)(dB.vendor), "" !== dB.renderer && (0, QB.n)(dB.vendor, dB.renderer)), zj = `${BB}:${(null===dB||void 0===dB?void 0:dB.renderer)||(null===dB||void 0===dB?void 0:dB.vendor)||""}`, (null === (nB = PB()) || void 0 === nB ? void 0 : nB.gpu) !== zj && (aB.j.setItem(hB, {
        gpu: zj
      }), bB = null), rj(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var BB;
          null === (BB = Bj) || void 0 === BB || BB.hidden()
        } catch (jB) {
          tj(), console.error("The quality steps stopped", jB)
        }
      }))
    }
    let pj = 0;

    function rj() {
      var BB;
      const jB = null !== (BB = PB()) && void 0 !== BB ? BB : {
          gpu: zj
        },
        zB = TB();
      pj = AB(), Bj = new DB({
          changed: nj,
          Cs: () => {
            Jj({
              heldN: void 0
            })
          },
          DN: BB => {
            var jB;
            const zB = TB()[BB],
              QB = {
                heldN: zB,
                heldAt: Date.now(),
                heldTarget: AB()
              };
            (null === (jB = PB()) || void 0 === jB ? void 0 : jB.failedUpN) === zB && (QB.failedUpN = void 0), Jj(QB)
          },
          upFailed: BB => {
            Jj({
              failedUpN: TB()[BB],
              failedUpAt: Date.now()
            })
          },
          noGain: BB => {
            Jj({
              noGain: null === BB ? void 0 : WB(BB)
            })
          }
        }, {
          lowest: zB.length - 1,
          startStep: RB(),
          noGain: eB(jB.noGain),
          upWait: OB(jB, zB)
        }),
        function(BB) {
          const jB = {
            get step() {
              return BB.currentStep()
            },
            get n() {
              var BB;
              return null !== (BB = Ij()) && void 0 !== BB ? BB : Nj()
            },
            get scale() {
              var BB;
              return TB()[0] / (null !== (BB = Ij()) && void 0 !== BB ? BB : Nj())
            },
            get msaaOff() {
              return wB()
            },
            log: BB.log,
            windows: BB.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: jB,
            configurable: !0
          })
        }(Bj), nj()
    }

    function sj() {
      null !== Bj && AB() !== pj && (bB = null, rj())
    }

    function Jj(BB) {
      aB.j.setItem(hB, {
        ...PB(),
        ...BB,
        gpu: zj
      })
    }
    let mj = 0,
      yj = 0,
      kj = 0,
      Gj = !1;

    function Lj() {
      mj++
    }

    function gj(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      sj(), null !== Bj && (BB - kj >= 1e3 && (Gj = mj - yj > UB.c.sceneChange.meshesPerSecond, yj = mj, kj = BB), VB.c.isHeld() ? Bj.paused(BB) : Bj.frame(BB, jB, zB && !document.hidden && CB(), Gj || QB > 0 || (0, IB.m)()))
    }

    function tj() {
      if (!jj) {
        jj = !0, null !== Bj && (Bj = null, Jj({
          noGain: void 0
        }));
        try {
          nj()
        } catch (BB) {
          console.error("The quality steps' resize to the player's n failed", BB)
        }
      }
    }

    function Sj() {
      var BB;
      null === (BB = Bj) || void 0 === BB || BB.resized(performance.now())
    }
  },
  34185: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(106),
      nB = zB(140);

    function dB(BB, jB, zB) {
      if ("webgpu" === BB) return zB ? ((0, QB.seedGpuVendor)(zB), {
        vendor: zB,
        renderer: ""
      }) : null;
      try {
        const zB = "webgl" === BB ? jB.getContext("webgl2") : jB.getContext("webgl");
        "webgl" === BB && zB && (0, nB.x)(zB);
        const dB = null === zB || void 0 === zB ? void 0 : zB.getExtension("WEBGL_debug_renderer_info");
        if (zB && dB) {
          const BB = String(zB.getParameter(dB.UNMASKED_VENDOR_WEBGL)),
            jB = String(zB.getParameter(dB.UNMASKED_RENDERER_WEBGL));
          return (0, QB.seedGpuVendor)(BB), (0, nB.C)(BB, jB), {
            vendor: BB,
            renderer: jB
          }
        }
        zB && (0, nB.C)(String(zB.getParameter(zB.VENDOR)), String(zB.getParameter(zB.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);