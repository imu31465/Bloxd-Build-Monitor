export const id = 186;
export const ids = [186];
export const modules = {
  9284: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => RT,
      g: () => Qk,
      k: () => Sk,
      o: () => Nk,
      p: () => ak,
      q: () => Mk,
      s: () => Ok,
      u: () => fk,
      v: () => Dk,
      z: () => yk
    });
    var lT = cT(31),
      MT = cT(118),
      KT = cT(1654),
      OT = cT(4408),
      yT = cT(2819),
      fT = cT(2835),
      xT = cT(47);
    const {
      windows: IT,
      target: AT,
      stepDown: CT,
      stepUp: jT,
      noGain: vT
    } = fT.d, tT = 1e3 / 60 * 1.08, hT = 1e3 / 55, NT = 1e3 / 45, QT = 1e3 / 30 * .92, ST = 1e3 / 30 * 1.08;
    class DT {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(TT) {
        const kT = TT - this.lastMs;
        this.lastMs = TT;
        const cT = function(TT) {
          if (TT <= 0 || TT > 100) return -1;
          if (TT <= tT) return 0;
          if (TT >= hT && TT <= NT) return 1;
          return TT >= QT && TT <= ST ? 2 : -1
        }(kT);
        cT !== this.runBand && (this.runBand = cT, this.runLength = 0), cT < 0 || ++this.runLength < 3 || (0 === cT ? this.votes60++ : 1 === cT ? (this.votesMid++, this.sumMidMs += kT) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const aT = IT.windowMs,
      FT = IT.settleMs,
      rT = IT.graceMs,
      PT = IT.minIntervals,
      wT = 1e3 * PT / aT,
      mT = vT.backoffMs,
      bT = vT.maxMs;
    class zT {
      constructor(TT, kT) {
        let {
          lowest: cT,
          startStep: lT = 0,
          noGain: MT = null,
          upWait: KT = null
        } = kT;
        this.hooks = TT, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new DT, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = AT.maxFps, this.lowest = cT, this.step = Math.min(lT, cT), this.noGain = MT, this.climbing = this.step > 0;
        const OT = cT + 1;
        this.downUntilMs = new Array(OT).fill(0), this.downBackoffMs = new Array(OT).fill(0), this.upFailures = new Array(OT).fill(0), this.upUntilMs = new Array(OT).fill(0), null !== KT && KT.step >= 0 && KT.step < OT && (this.upUntilMs[KT.step] = KT.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(TT), !cT) return void this.leave(TT);
        const MT = TT - this.lastFrameMs,
          KT = this.resizeStall(TT);
        if (MT > 2e3 && !KT && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = TT, this.quietUntilMs = Math.max(this.quietUntilMs, TT + rT), this.graceUntilMs = TT + rT, this.windowStartMs = -1, void(this.slowStartMs = -1);
        MT > 500 && (this.hitch(TT), KT && (this.slowStartMs = -1)), this.lastFrameMs = TT, TT >= this.quietUntilMs && this.countWindow(TT, kT, lT) || kT && TT >= this.graceUntilMs && this.countSlow(TT)
      }
      countWindow(TT, kT, cT) {
        if (this.windowStartMs < 0) return !!kT && (this.windowStartMs = TT, this.lastDrawnMs = TT, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = cT, !1);
        if (this.windowMasked ||= cT, !kT) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, TT - this.lastDrawnMs), this.lastDrawnMs = TT;
        const lT = TT - this.windowStartMs;
        if (lT < aT) return !1;
        const MT = this.windowIntervals,
          KT = 1e3 * MT / lT,
          OT = this.windowHeld,
          yT = this.windowMaxIntervalMs,
          fT = this.windowMasked;
        if (this.windowStartMs = -1, MT < PT) return !1;
        this.slowStartMs = -1;
        const xT = this.targetFps(),
          IT = KT >= xT * AT.cleanShare && yT <= AT.cleanMaxIntervalMs && (0 === OT || KT >= xT);
        return this.decide(KT, IT, KT < xT * AT.dropShare, fT, TT), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(AT.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(TT) {
        if (this.slowStartMs < 0) return this.slowStartMs = TT, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const kT = TT - this.slowStartMs;
        if (kT < 1e4) return;
        const cT = 1e3 * this.slowIntervals / kT;
        this.slowStartMs = -1, this.countSlow(TT), cT < wT && (this.windowStartMs = -1, this.decide(cT, !1, !0, !1, TT))
      }
      resizeStall(TT) {
        return this.lastFrameMs - this.resizedMs <= FT && TT - this.lastFrameMs <= 15e3
      }
      paused(TT) {
        this.refresh.frame(TT), TT - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, TT + rT), this.graceUntilMs = TT + rT), this.lastFrameMs = TT, this.slowStartMs = -1, this.hitch(TT)
      }
      resized(TT) {
        this.resizedMs = TT, this.hitch(TT)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(TT) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(TT))
      }
      hitch(TT) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, TT + FT)
      }
      left(TT) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const kT = this.phase;
        "watch" !== kT.kind && (this.phase = {
          kind: "watch"
        }, "down" === kT.kind && (this.downUntilMs[kT.from] = Math.max(this.downUntilMs[kT.from], TT + mT)), this.setStep(kT.from, 0, TT, "left"), "up" === kT.kind && (this.climbed = kT.fromClimbed))
      }
      decide(TT, kT, cT, lT, MT) {
        const KT = this.phase;
        switch (KT.kind) {
          case "watch":
            return void this.watch(TT, kT, cT, lT, MT);
          case "down":
            if (KT.judged++, KT.fpsSum += TT, KT.dropped ||= cT, KT.judged < CT.judgeWindows) return;
            return void(!KT.dropped || KT.fpsSum / KT.judged >= KT.fromFps * CT.keepGain ? this.keepDown(KT.from, KT.fpsSum / KT.judged, MT) : this.noGainFrom(KT.from, KT.fromFps, MT));
          case "up":
            return kT ? void(++KT.judged >= jT.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: KT.from,
              heldWindows: 0,
              below: KT.fromClimbed
            }, this.record(MT, TT, "up_kept"))) : (lT ? (this.watchAt(KT.from), this.setStep(KT.from, TT, MT, "spoiled")) : this.failUp(this.step, KT.from, TT, MT), void(this.climbed = KT.fromClimbed))
        }
      }
      watch(TT, kT, cT, lT, MT) {
        const KT = this.climbed;
        if (null !== KT && !cT && !lT && ++KT.heldWindows >= jT.heldWindows && (this.climbed = null, this.record(MT, TT, "ty"), this.hooks.ty(this.step)), cT ? (this.dropRun++, this.dropRunFpsSum += TT, this.dropRunMasked ||= lT) : this.resetDropRun(), lT && kT || (this.cleanRun = kT ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? CT.maskedWindows : CT.dropWindows)) {
          const kT = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const cT = this.climbed;
          return void(null !== cT ? (this.failUp(this.step, cT.from, TT, MT), this.climbed = cT.below) : this.step < this.lowest && this.downAllowed(MT) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: kT,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, TT, MT, "down")))
        }
        const OT = this.step - 1;
        OT >= 0 && this.cleanRun >= (this.climbing ? jT.climbWindows : jT.cleanWindows) && this.upAllowed(OT, MT) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(OT, TT, MT, "up"))
      }
      downAllowed(TT) {
        return !(0 === this.step && null !== this.noGain && TT < this.noGain.untilMs) && TT >= this.downUntilMs[this.step]
      }
      upAllowed(TT, kT) {
        return this.upFailures[TT] <= jT.failWaitsMs.length && kT >= this.upUntilMs[TT]
      }
      keepDown(TT, kT, cT) {
        this.watchAt(this.step), this.downBackoffMs[TT] = 0, this.record(cT, kT, "down_kept"), 0 === TT && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.wj(this.step)
      }
      noGainFrom(TT, kT, cT) {
        var lT, MT;
        const KT = 0 === TT ? null !== (lT = null === (MT = this.noGain) || void 0 === MT ? void 0 : MT.backoffMs) && void 0 !== lT ? lT : 0 : this.downBackoffMs[TT],
          OT = 0 === KT ? mT : Math.min(2 * KT, bT);
        this.downBackoffMs[TT] = OT, this.downUntilMs[TT] = cT + OT, 0 === TT && (this.noGain = {
          untilMs: cT + OT,
          backoffMs: OT
        }, this.hooks.noGain(this.noGain)), this.watchAt(TT), this.setStep(TT, kT, cT, "no_gain")
      }
      failUp(TT, kT, cT, lT) {
        this.climbing = !1;
        const MT = ++this.upFailures[TT];
        this.upUntilMs[TT] = MT <= jT.failWaitsMs.length ? lT + jT.failWaitsMs[MT - 1] : Number.POSITIVE_INFINITY, this.watchAt(kT), this.setStep(kT, cT, lT, "up_failed"), this.hooks.upFailed(TT)
      }
      watchAt(TT) {
        this.phase = {
          kind: "watch"
        }, this.climbed = TT === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(TT, kT, cT, lT) {
        const MT = TT !== this.step;
        MT && (this.climbed = null), this.step = TT, this.record(cT, kT, lT), MT && (this.slowStartMs = -1, this.resized(cT), this.hooks.changed(TT))
      }
      record(TT, kT, cT) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: TT,
          step: this.step,
          fps: Math.round(10 * kT) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: cT
        })
      }
    }
    var JT = cT(9288),
      oT = cT(3045),
      HT = cT(9294);
    const eT = "autoGraphics",
      GT = 6048e5,
      VT = "startScale";

    function ET() {
      return (0, yT.A)(lT.e.get("clientEscMenuOptions").pixelScale) * (0, yT.v)()
    }

    function ZT() {
      return (0, yT.i)(ET())
    }

    function uT() {
      const TT = xT.e.getItem(eT);
      return "object" !== typeof TT || null === TT || "string" !== typeof TT.gpu ? null : TT
    }

    function XT(TT) {
      return {
        untilEpochMs: Date.now() + (TT.untilMs - performance.now()),
        backoffMs: TT.backoffMs
      }
    }

    function dT(TT) {
      return TT ? {
        untilMs: performance.now() + (TT.untilEpochMs - Date.now()),
        backoffMs: TT.backoffMs
      } : null
    }
    let LT = null;

    function RT() {
      if (null === LT) {
        const TT = new URLSearchParams(window.location.search).get("msaa");
        LT = lT.e.get("clientEscMenuOptions").antiAliasing && ("0" === TT || "1" !== TT && !(0, OT.b)("antiAliasing") && (0, oT.d)())
      }
      return LT
    }

    function gT(TT) {
      const kT = "number" === typeof TT ? Date.now() - TT : -1;
      return kT >= 0 && kT < GT
    }
    let UT = null;

    function YT() {
      return UT ??= (0, MT.getDeviceDefaultPixelScale)(), BT(UT)
    }

    function BT(TT) {
      const kT = lT.e.get("clientEscMenuOptions");
      return kT.pixelSmoothing && !(0, OT.b)("pixelScale") && kT.pixelScale === TT
    }
    let WT = null,
      nT = 0;

    function pT() {
      if (null === WT || nT !== ET()) {
        var TT;
        nT = ET();
        const kT = Number(null !== (TT = new URLSearchParams(window.location.search).get(VT)) && void 0 !== TT ? TT : ""),
          cT = ZT();
        if (kT > 0 && kT <= 1) WT = (0, yT.r)(cT, cT[0] / kT);
        else {
          const TT = uT(),
            kT = (0, yT.r)(cT, (0, yT.t)(ET())),
            lT = !(0, oT.g)() && gT(null === TT || void 0 === TT ? void 0 : TT.heldAt) && (null === TT || void 0 === TT ? void 0 : TT.heldTarget) === ET() ? null === TT || void 0 === TT ? void 0 : TT.heldN : void 0;
          WT = "number" === typeof lT ? Math.min(kT, (0, yT.r)(cT, lT)) : kT
        }
      }
      return WT
    }

    function iT(TT, kT) {
      var cT;
      const lT = kT.indexOf(null !== (cT = TT.failedUpN) && void 0 !== cT ? cT : -1);
      return lT >= 0 && gT(TT.failedUpAt) ? {
        step: lT,
        untilMs: performance.now() + fT.d.stepUp.failWaitsMs[0]
      } : null
    }
    let qT = null,
      sT = !1,
      Tk = "";
    const kk = new Set;

    function ck() {
      for (const TT of kk) TT()
    }

    function lk() {
      return sT ? null : (Ak(), null === qT ? (null !== UT || null !== (0, MT.peekGpuVendor)() ? YT() : BT(1)) ? pT() : null : YT() ? qT.currentStep() : null)
    }

    function Mk() {
      const TT = lk();
      if (null === TT) return null;
      const kT = ZT(),
        cT = kT[Math.min(TT, kT.length - 1)];
      return cT === Kk() ? null : cT
    }

    function Kk() {
      return (0, yT.l)(lT.e.get("clientEscMenuOptions").pixelScale, (0, yT.v)())
    }

    function Ok() {
      return null !== qT && null !== Mk()
    }

    function yk(TT) {
      return kk.add(TT), () => {
        kk.delete(TT)
      }
    }

    function fk(TT, kT, cT) {
      var lT;
      if (null !== qT || sT || (0, oT.g)()) return;
      const MT = (0, JT.e)(TT, kT, cT);
      null !== MT && (0, oT.h)(MT.vendor), Tk = `${TT}:${(null===MT||void 0===MT?void 0:MT.renderer)||(null===MT||void 0===MT?void 0:MT.vendor)||""}`, (null === (lT = uT()) || void 0 === lT ? void 0 : lT.gpu) !== Tk && (xT.e.setItem(eT, {
        gpu: Tk
      }), WT = null), Ik(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var TT;
          null === (TT = qT) || void 0 === TT || TT.hidden()
        } catch (kT) {
          Dk(), console.error("The quality steps stopped", kT)
        }
      }))
    }
    let xk = 0;

    function Ik() {
      var TT;
      const kT = null !== (TT = uT()) && void 0 !== TT ? TT : {
          gpu: Tk
        },
        cT = ZT();
      xk = ET(), qT = new zT({
          changed: ck,
          wj: () => {
            Ck({
              heldN: void 0
            })
          },
          ty: TT => {
            var kT;
            const cT = ZT()[TT],
              lT = {
                heldN: cT,
                heldAt: Date.now(),
                heldTarget: ET()
              };
            (null === (kT = uT()) || void 0 === kT ? void 0 : kT.failedUpN) === cT && (lT.failedUpN = void 0), Ck(lT)
          },
          upFailed: TT => {
            Ck({
              failedUpN: ZT()[TT],
              failedUpAt: Date.now()
            })
          },
          noGain: TT => {
            Ck({
              noGain: null === TT ? void 0 : XT(TT)
            })
          }
        }, {
          lowest: cT.length - 1,
          startStep: pT(),
          noGain: dT(kT.noGain),
          upWait: iT(kT, cT)
        }),
        function(TT) {
          const kT = {
            get step() {
              return TT.currentStep()
            },
            get n() {
              var TT;
              return null !== (TT = Mk()) && void 0 !== TT ? TT : Kk()
            },
            get scale() {
              var TT;
              return ZT()[0] / (null !== (TT = Mk()) && void 0 !== TT ? TT : Kk())
            },
            get msaaOff() {
              return RT()
            },
            log: TT.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: kT,
            configurable: !0
          })
        }(qT), ck()
    }

    function Ak() {
      null !== qT && ET() !== xk && (WT = null, Ik())
    }

    function Ck(TT) {
      xT.e.setItem(eT, {
        ...uT(),
        ...TT,
        gpu: Tk
      })
    }
    let jk = 0,
      vk = 0,
      tk = 0,
      hk = !1;

    function Nk() {
      jk++
    }

    function Qk() {
      return jk
    }

    function Sk(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Ak(), null !== qT && (TT - tk >= 1e3 && (hk = jk - vk > fT.d.sceneChange.meshesPerSecond, vk = jk, tk = TT), HT.b.isHeld() ? qT.paused(TT) : qT.frame(TT, kT, cT && !document.hidden && YT(), hk || lT > 0 || (0, KT.s)()))
    }

    function Dk() {
      if (!sT) {
        sT = !0, null !== qT && (qT = null, Ck({
          noGain: void 0
        }));
        try {
          ck()
        } catch (TT) {
          console.error("The quality steps' resize to the player's n failed", TT)
        }
      }
    }

    function ak() {
      var TT;
      null === (TT = qT) || void 0 === TT || TT.resized(performance.now())
    }
  },
  9288: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT
    });
    var lT = cT(118),
      MT = cT(150);

    function KT(TT, kT, cT) {
      if ("webgpu" === TT) return cT ? ((0, lT.seedGpuVendor)(cT), {
        vendor: cT,
        renderer: ""
      }) : null;
      try {
        const cT = "webgl" === TT ? kT.getContext("webgl2") : kT.getContext("webgl");
        "webgl" === TT && cT && (0, MT.u)(cT);
        const KT = null === cT || void 0 === cT ? void 0 : cT.getExtension("WEBGL_debug_renderer_info");
        if (cT && KT) {
          const TT = String(cT.getParameter(KT.UNMASKED_VENDOR_WEBGL)),
            kT = String(cT.getParameter(KT.UNMASKED_RENDERER_WEBGL));
          return (0, lT.seedGpuVendor)(TT), (0, MT.A)(TT, kT), {
            vendor: TT,
            renderer: kT
          }
        }
        cT && (0, MT.A)(String(cT.getParameter(cT.VENDOR)), String(cT.getParameter(cT.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);