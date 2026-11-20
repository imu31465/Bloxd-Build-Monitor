export const id = 187;
export const ids = [187];
export const modules = {
  9191: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Rq,
      g: () => HE,
      j: () => jE,
      k: () => PE,
      n: () => lE,
      p: () => mE,
      s: () => AE,
      t: () => oE,
      x: () => xE
    });
    var Yq = gq(24),
      lq = gq(96),
      Oq = gq(1622),
      mq = gq(4248),
      xq = gq(2700),
      Aq = gq(2714),
      cq = gq(38);
    const {
      windows: uq,
      target: Bq,
      stepDown: Wq,
      stepUp: Nq,
      noGain: aq
    } = Aq.d, Vq = 1e3 / 60 * 1.08, dq = 1e3 / 55, jq = 1e3 / 45, Hq = 1e3 / 30 * .92, oq = 1e3 / 30 * 1.08;
    class Pq {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(qq) {
        const Eq = qq - this.lastMs;
        this.lastMs = qq;
        const gq = function(qq) {
          if (qq <= 0 || qq > 100) return -1;
          if (qq <= Vq) return 0;
          if (qq >= dq && qq <= jq) return 1;
          return qq >= Hq && qq <= oq ? 2 : -1
        }(Eq);
        gq !== this.runBand && (this.runBand = gq, this.runLength = 0), gq < 0 || ++this.runLength < 3 || (0 === gq ? this.votes60++ : 1 === gq ? (this.votesMid++, this.sumMidMs += Eq) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const Qq = uq.windowMs,
      yq = uq.settleMs,
      tq = uq.graceMs,
      rq = uq.minIntervals,
      vq = 1e3 * rq / Qq,
      hq = aq.backoffMs,
      nq = aq.maxMs;
    class bq {
      constructor(qq, Eq) {
        let {
          lowest: gq,
          startStep: Yq = 0,
          noGain: lq = null,
          upWait: Oq = null
        } = Eq;
        this.hooks = qq, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new Pq, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = Bq.maxFps, this.lowest = gq, this.step = Math.min(Yq, gq), this.noGain = lq, this.climbing = this.step > 0;
        const mq = gq + 1;
        this.downUntilMs = new Array(mq).fill(0), this.downBackoffMs = new Array(mq).fill(0), this.upFailures = new Array(mq).fill(0), this.upUntilMs = new Array(mq).fill(0), null !== Oq && Oq.step >= 0 && Oq.step < mq && (this.upUntilMs[Oq.step] = Oq.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(qq), !gq) return void this.leave(qq);
        const lq = qq - this.lastFrameMs,
          Oq = this.resizeStall(qq);
        if (lq > 2e3 && !Oq && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = qq, this.quietUntilMs = Math.max(this.quietUntilMs, qq + tq), this.graceUntilMs = qq + tq, this.windowStartMs = -1, void(this.slowStartMs = -1);
        lq > 500 && (this.hitch(qq), Oq && (this.slowStartMs = -1)), this.lastFrameMs = qq, qq >= this.quietUntilMs && this.countWindow(qq, Eq, Yq) || Eq && qq >= this.graceUntilMs && this.countSlow(qq)
      }
      countWindow(qq, Eq, gq) {
        if (this.windowStartMs < 0) return !!Eq && (this.windowStartMs = qq, this.lastDrawnMs = qq, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = gq, !1);
        if (this.windowMasked ||= gq, !Eq) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, qq - this.lastDrawnMs), this.lastDrawnMs = qq;
        const Yq = qq - this.windowStartMs;
        if (Yq < Qq) return !1;
        const lq = this.windowIntervals,
          Oq = 1e3 * lq / Yq,
          mq = this.windowHeld,
          xq = this.windowMaxIntervalMs,
          Aq = this.windowMasked;
        if (this.windowStartMs = -1, lq < rq) return !1;
        this.slowStartMs = -1;
        const cq = this.targetFps(),
          uq = Oq >= cq * Bq.cleanShare && xq <= Bq.cleanMaxIntervalMs && (0 === mq || Oq >= cq);
        return this.decide(Oq, uq, Oq < cq * Bq.dropShare, Aq, qq), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Bq.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(qq) {
        if (this.slowStartMs < 0) return this.slowStartMs = qq, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const Eq = qq - this.slowStartMs;
        if (Eq < 1e4) return;
        const gq = 1e3 * this.slowIntervals / Eq;
        this.slowStartMs = -1, this.countSlow(qq), gq < vq && (this.windowStartMs = -1, this.decide(gq, !1, !0, !1, qq))
      }
      resizeStall(qq) {
        return this.lastFrameMs - this.resizedMs <= yq && qq - this.lastFrameMs <= 15e3
      }
      paused(qq) {
        this.refresh.frame(qq), qq - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, qq + tq), this.graceUntilMs = qq + tq), this.lastFrameMs = qq, this.slowStartMs = -1, this.hitch(qq)
      }
      resized(qq) {
        this.resizedMs = qq, this.hitch(qq)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(qq) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(qq))
      }
      hitch(qq) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, qq + yq)
      }
      left(qq) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const Eq = this.phase;
        "watch" !== Eq.kind && (this.phase = {
          kind: "watch"
        }, "down" === Eq.kind && (this.downUntilMs[Eq.from] = Math.max(this.downUntilMs[Eq.from], qq + hq)), this.setStep(Eq.from, 0, qq, "left"), "up" === Eq.kind && (this.climbed = Eq.fromClimbed))
      }
      decide(qq, Eq, gq, Yq, lq) {
        const Oq = this.phase;
        switch (Oq.kind) {
          case "watch":
            return void this.watch(qq, Eq, gq, Yq, lq);
          case "down":
            if (Oq.judged++, Oq.fpsSum += qq, Oq.dropped ||= gq, Oq.judged < Wq.judgeWindows) return;
            return void(!Oq.dropped || Oq.fpsSum / Oq.judged >= Oq.fromFps * Wq.keepGain ? this.keepDown(Oq.from, Oq.fpsSum / Oq.judged, lq) : this.noGainFrom(Oq.from, Oq.fromFps, lq));
          case "up":
            return Eq ? void(++Oq.judged >= Nq.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: Oq.from,
              heldWindows: 0,
              below: Oq.fromClimbed
            }, this.record(lq, qq, "up_kept"))) : (Yq ? (this.watchAt(Oq.from), this.setStep(Oq.from, qq, lq, "spoiled")) : this.failUp(this.step, Oq.from, qq, lq), void(this.climbed = Oq.fromClimbed))
        }
      }
      watch(qq, Eq, gq, Yq, lq) {
        const Oq = this.climbed;
        if (null !== Oq && !gq && !Yq && ++Oq.heldWindows >= Nq.heldWindows && (this.climbed = null, this.record(lq, qq, "Fc"), this.hooks.Fc(this.step)), gq ? (this.dropRun++, this.dropRunFpsSum += qq, this.dropRunMasked ||= Yq) : this.resetDropRun(), Yq && Eq || (this.cleanRun = Eq ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? Wq.maskedWindows : Wq.dropWindows)) {
          const Eq = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const gq = this.climbed;
          return void(null !== gq ? (this.failUp(this.step, gq.from, qq, lq), this.climbed = gq.below) : this.step < this.lowest && this.downAllowed(lq) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Eq,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, qq, lq, "down")))
        }
        const mq = this.step - 1;
        mq >= 0 && this.cleanRun >= (this.climbing ? Nq.climbWindows : Nq.cleanWindows) && this.upAllowed(mq, lq) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(mq, qq, lq, "up"))
      }
      downAllowed(qq) {
        return !(0 === this.step && null !== this.noGain && qq < this.noGain.untilMs) && qq >= this.downUntilMs[this.step]
      }
      upAllowed(qq, Eq) {
        return this.upFailures[qq] <= Nq.failWaitsMs.length && Eq >= this.upUntilMs[qq]
      }
      keepDown(qq, Eq, gq) {
        this.watchAt(this.step), this.downBackoffMs[qq] = 0, this.record(gq, Eq, "down_kept"), 0 === qq && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.jN(this.step)
      }
      noGainFrom(qq, Eq, gq) {
        var Yq, lq;
        const Oq = 0 === qq ? null !== (Yq = null === (lq = this.noGain) || void 0 === lq ? void 0 : lq.backoffMs) && void 0 !== Yq ? Yq : 0 : this.downBackoffMs[qq],
          mq = 0 === Oq ? hq : Math.min(2 * Oq, nq);
        this.downBackoffMs[qq] = mq, this.downUntilMs[qq] = gq + mq, 0 === qq && (this.noGain = {
          untilMs: gq + mq,
          backoffMs: mq
        }, this.hooks.noGain(this.noGain)), this.watchAt(qq), this.setStep(qq, Eq, gq, "no_gain")
      }
      failUp(qq, Eq, gq, Yq) {
        this.climbing = !1;
        const lq = ++this.upFailures[qq];
        this.upUntilMs[qq] = lq <= Nq.failWaitsMs.length ? Yq + Nq.failWaitsMs[lq - 1] : Number.POSITIVE_INFINITY, this.watchAt(Eq), this.setStep(Eq, gq, Yq, "up_failed"), this.hooks.upFailed(qq)
      }
      watchAt(qq) {
        this.phase = {
          kind: "watch"
        }, this.climbed = qq === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(qq, Eq, gq, Yq) {
        const lq = qq !== this.step;
        lq && (this.climbed = null), this.step = qq, this.record(gq, Eq, Yq), lq && (this.slowStartMs = -1, this.resized(gq), this.hooks.changed(qq))
      }
      record(qq, Eq, gq) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: qq,
          step: this.step,
          fps: Math.round(10 * Eq) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: gq
        })
      }
    }
    var iq = gq(9197),
      Zq = gq(3027),
      fq = gq(9200);
    const Mq = "autoGraphics",
      Tq = 6048e5,
      zq = "startScale";

    function Sq() {
      return (0, xq.F)(Yq.b.get("clientEscMenuOptions").pixelScale) * (0, xq.B)()
    }

    function pq() {
      return (0, xq.r)(Sq())
    }

    function Gq() {
      const qq = cq.i.getItem(Mq);
      return "object" !== typeof qq || null === qq || "string" !== typeof qq.gpu ? null : qq
    }

    function Lq(qq) {
      return {
        untilEpochMs: Date.now() + (qq.untilMs - performance.now()),
        backoffMs: qq.backoffMs
      }
    }

    function Jq(qq) {
      return qq ? {
        untilMs: performance.now() + (qq.untilEpochMs - Date.now()),
        backoffMs: qq.backoffMs
      } : null
    }
    let kq = null;

    function Rq() {
      if (null === kq) {
        const qq = new URLSearchParams(window.location.search).get("msaa");
        kq = Yq.b.get("clientEscMenuOptions").antiAliasing && ("0" === qq || "1" !== qq && !(0, mq.d)("antiAliasing") && (0, Zq.f)())
      }
      return kq
    }

    function Uq(qq) {
      const Eq = "number" === typeof qq ? Date.now() - qq : -1;
      return Eq >= 0 && Eq < Tq
    }
    let Fq = null;

    function sq() {
      return Fq ??= (0, lq.getDeviceDefaultPixelScale)(), Xq(Fq)
    }

    function Xq(qq) {
      const Eq = Yq.b.get("clientEscMenuOptions");
      return Eq.pixelSmoothing && !(0, mq.d)("pixelScale") && Eq.pixelScale === qq
    }
    let wq = null,
      Kq = 0;

    function Cq() {
      if (null === wq || Kq !== Sq()) {
        var qq;
        Kq = Sq();
        const Eq = Number(null !== (qq = new URLSearchParams(window.location.search).get(zq)) && void 0 !== qq ? qq : ""),
          gq = pq();
        if (Eq > 0 && Eq <= 1) wq = (0, xq.y)(gq, gq[0] / Eq);
        else {
          const qq = Gq(),
            Eq = (0, xq.y)(gq, (0, xq.z)(Sq())),
            Yq = !(0, Zq.l)() && Uq(null === qq || void 0 === qq ? void 0 : qq.heldAt) && (null === qq || void 0 === qq ? void 0 : qq.heldTarget) === Sq() ? null === qq || void 0 === qq ? void 0 : qq.heldN : void 0;
          wq = "number" === typeof Yq ? Math.min(Eq, (0, xq.y)(gq, Yq)) : Eq
        }
      }
      return wq
    }

    function Iq(qq, Eq) {
      var gq;
      const Yq = Eq.indexOf(null !== (gq = qq.failedUpN) && void 0 !== gq ? gq : -1);
      return Yq >= 0 && Uq(qq.failedUpAt) ? {
        step: Yq,
        untilMs: performance.now() + Aq.d.stepUp.failWaitsMs[0]
      } : null
    }
    let eq = null,
      Dq = !1,
      qE = "";
    const EE = new Set;

    function gE() {
      for (const qq of EE) qq()
    }

    function YE() {
      return Dq ? null : (BE(), null === eq ? (null !== Fq || null !== (0, lq.peekGpuVendor)() ? sq() : Xq(1)) ? Cq() : null : sq() ? eq.currentStep() : null)
    }

    function lE() {
      const qq = YE();
      if (null === qq) return null;
      const Eq = pq(),
        gq = Eq[Math.min(qq, Eq.length - 1)];
      return gq === OE() ? null : gq
    }

    function OE() {
      return (0, xq.t)(Yq.b.get("clientEscMenuOptions").pixelScale, (0, xq.B)())
    }

    function mE() {
      return null !== eq && null !== lE()
    }

    function xE(qq) {
      return EE.add(qq), () => {
        EE.delete(qq)
      }
    }

    function AE(qq, Eq, gq) {
      var Yq;
      if (null !== eq || Dq || (0, Zq.l)()) return;
      const lq = (0, iq.c)(qq, Eq, gq);
      null !== lq && (0, Zq.o)(lq.vendor), qE = `${qq}:${(null===lq||void 0===lq?void 0:lq.renderer)||(null===lq||void 0===lq?void 0:lq.vendor)||""}`, (null === (Yq = Gq()) || void 0 === Yq ? void 0 : Yq.gpu) !== qE && (cq.i.setItem(Mq, {
        gpu: qE
      }), wq = null), uE(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var qq;
          null === (qq = eq) || void 0 === qq || qq.hidden()
        } catch (Eq) {
          oE(), console.error("The quality steps stopped", Eq)
        }
      }))
    }
    let cE = 0;

    function uE() {
      var qq;
      const Eq = null !== (qq = Gq()) && void 0 !== qq ? qq : {
          gpu: qE
        },
        gq = pq();
      cE = Sq(), eq = new bq({
          changed: gE,
          jN: () => {
            WE({
              heldN: void 0
            })
          },
          Fc: qq => {
            var Eq;
            const gq = pq()[qq],
              Yq = {
                heldN: gq,
                heldAt: Date.now(),
                heldTarget: Sq()
              };
            (null === (Eq = Gq()) || void 0 === Eq ? void 0 : Eq.failedUpN) === gq && (Yq.failedUpN = void 0), WE(Yq)
          },
          upFailed: qq => {
            WE({
              failedUpN: pq()[qq],
              failedUpAt: Date.now()
            })
          },
          noGain: qq => {
            WE({
              noGain: null === qq ? void 0 : Lq(qq)
            })
          }
        }, {
          lowest: gq.length - 1,
          startStep: Cq(),
          noGain: Jq(Eq.noGain),
          upWait: Iq(Eq, gq)
        }),
        function(qq) {
          const Eq = {
            get step() {
              return qq.currentStep()
            },
            get n() {
              var qq;
              return null !== (qq = lE()) && void 0 !== qq ? qq : OE()
            },
            get scale() {
              var qq;
              return pq()[0] / (null !== (qq = lE()) && void 0 !== qq ? qq : OE())
            },
            get msaaOff() {
              return Rq()
            },
            log: qq.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Eq,
            configurable: !0
          })
        }(eq), gE()
    }

    function BE() {
      null !== eq && Sq() !== cE && (wq = null, uE())
    }

    function WE(qq) {
      cq.i.setItem(Mq, {
        ...Gq(),
        ...qq,
        gpu: qE
      })
    }
    let NE = 0,
      aE = 0,
      VE = 0,
      dE = !1;

    function jE() {
      NE++
    }

    function HE(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      BE(), null !== eq && (qq - VE >= 1e3 && (dE = NE - aE > Aq.d.sceneChange.meshesPerSecond, aE = NE, VE = qq), fq.d.isHeld() ? eq.paused(qq) : eq.frame(qq, Eq, gq && !document.hidden && sq(), dE || Yq > 0 || (0, Oq.p)()))
    }

    function oE() {
      if (!Dq) {
        Dq = !0, null !== eq && (eq = null, WE({
          noGain: void 0
        }));
        try {
          gE()
        } catch (qq) {
          console.error("The quality steps' resize to the player's n failed", qq)
        }
      }
    }

    function PE() {
      var qq;
      null === (qq = eq) || void 0 === qq || qq.resized(performance.now())
    }
  },
  9197: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq
    });
    var Yq = gq(96),
      lq = gq(128);

    function Oq(qq, Eq, gq) {
      if ("webgpu" === qq) return gq ? ((0, Yq.seedGpuVendor)(gq), {
        vendor: gq,
        renderer: ""
      }) : null;
      try {
        const gq = "webgl" === qq ? Eq.getContext("webgl2") : Eq.getContext("webgl");
        "webgl" === qq && gq && (0, lq.x)(gq);
        const Oq = null === gq || void 0 === gq ? void 0 : gq.getExtension("WEBGL_debug_renderer_info");
        if (gq && Oq) {
          const qq = String(gq.getParameter(Oq.UNMASKED_VENDOR_WEBGL)),
            Eq = String(gq.getParameter(Oq.UNMASKED_RENDERER_WEBGL));
          return (0, Yq.seedGpuVendor)(qq), (0, lq.B)(qq, Eq), {
            vendor: qq,
            renderer: Eq
          }
        }
        gq && (0, lq.B)(String(gq.getParameter(gq.VENDOR)), String(gq.getParameter(gq.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);