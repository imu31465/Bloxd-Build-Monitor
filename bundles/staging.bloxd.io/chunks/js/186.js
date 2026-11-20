export const id = 186;
export const ids = [186];
export const modules = {
  8822: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => tb,
      e: () => Za,
      h: () => Da,
      j: () => ya,
      k: () => xa,
      m: () => Ma,
      p: () => Ea,
      t: () => Ba,
      v: () => za,
      x: () => Ya
    });
    var Ab = Ub(19),
      Mb = Ub(101),
      Tb = Ub(1548),
      Eb = Ub(4095),
      Yb = Ub(2579),
      Bb = Ub(2592),
      eb = Ub(31);
    const {
      windows: vb,
      target: Lb,
      stepDown: Pb,
      stepUp: Xb,
      noGain: jb
    } = Bb.d, Rb = 1e3 / 60 * 1.08, kb = 1e3 / 55, yb = 1e3 / 45, Zb = 1e3 / 30 * .92, Db = 1e3 / 30 * 1.08;
    class zb {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(bb) {
        const ab = bb - this.lastMs;
        this.lastMs = bb;
        const Ub = function(bb) {
          if (bb <= 0 || bb > 100) return -1;
          if (bb <= Rb) return 0;
          if (bb >= kb && bb <= yb) return 1;
          return bb >= Zb && bb <= Db ? 2 : -1
        }(ab);
        Ub !== this.runBand && (this.runBand = Ub, this.runLength = 0), Ub < 0 || ++this.runLength < 3 || (0 === Ub ? this.votes60++ : 1 === Ub ? (this.votesMid++, this.sumMidMs += ab) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const xb = vb.windowMs,
      ib = vb.settleMs,
      fb = vb.graceMs,
      mb = vb.minIntervals,
      pb = 1e3 * mb / xb,
      Nb = jb.backoffMs,
      Wb = jb.maxMs;
    class Hb {
      constructor(bb, ab) {
        let {
          lowest: Ub,
          startStep: Ab = 0,
          noGain: Mb = null,
          upWait: Tb = null
        } = ab;
        this.hooks = bb, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new zb, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = Lb.maxFps, this.lowest = Ub, this.step = Math.min(Ab, Ub), this.noGain = Mb, this.climbing = this.step > 0;
        const Eb = Ub + 1;
        this.downUntilMs = new Array(Eb).fill(0), this.downBackoffMs = new Array(Eb).fill(0), this.upFailures = new Array(Eb).fill(0), this.upUntilMs = new Array(Eb).fill(0), null !== Tb && Tb.step >= 0 && Tb.step < Eb && (this.upUntilMs[Tb.step] = Tb.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(bb), !Ub) return void this.leave(bb);
        const Mb = bb - this.lastFrameMs,
          Tb = this.resizeStall(bb);
        if (Mb > 2e3 && !Tb && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = bb, this.quietUntilMs = Math.max(this.quietUntilMs, bb + fb), this.graceUntilMs = bb + fb, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Mb > 500 && (this.hitch(bb), Tb && (this.slowStartMs = -1)), this.lastFrameMs = bb, bb >= this.quietUntilMs && this.countWindow(bb, ab, Ab) || ab && bb >= this.graceUntilMs && this.countSlow(bb)
      }
      countWindow(bb, ab, Ub) {
        if (this.windowStartMs < 0) return !!ab && (this.windowStartMs = bb, this.lastDrawnMs = bb, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = Ub, !1);
        if (this.windowMasked ||= Ub, !ab) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, bb - this.lastDrawnMs), this.lastDrawnMs = bb;
        const Ab = bb - this.windowStartMs;
        if (Ab < xb) return !1;
        const Mb = this.windowIntervals,
          Tb = 1e3 * Mb / Ab,
          Eb = this.windowHeld,
          Yb = this.windowMaxIntervalMs,
          Bb = this.windowMasked;
        if (this.windowStartMs = -1, Mb < mb) return !1;
        this.slowStartMs = -1;
        const eb = this.targetFps(),
          vb = Tb >= eb * Lb.cleanShare && Yb <= Lb.cleanMaxIntervalMs && (0 === Eb || Tb >= eb);
        return this.decide(Tb, vb, Tb < eb * Lb.dropShare, Bb, bb), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Lb.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(bb) {
        if (this.slowStartMs < 0) return this.slowStartMs = bb, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const ab = bb - this.slowStartMs;
        if (ab < 1e4) return;
        const Ub = 1e3 * this.slowIntervals / ab;
        this.slowStartMs = -1, this.countSlow(bb), Ub < pb && (this.windowStartMs = -1, this.decide(Ub, !1, !0, !1, bb))
      }
      resizeStall(bb) {
        return this.lastFrameMs - this.resizedMs <= ib && bb - this.lastFrameMs <= 15e3
      }
      paused(bb) {
        this.refresh.frame(bb), bb - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, bb + fb), this.graceUntilMs = bb + fb), this.lastFrameMs = bb, this.slowStartMs = -1, this.hitch(bb)
      }
      resized(bb) {
        this.resizedMs = bb, this.hitch(bb)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(bb) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(bb))
      }
      hitch(bb) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, bb + ib)
      }
      left(bb) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const ab = this.phase;
        "watch" !== ab.kind && (this.phase = {
          kind: "watch"
        }, "down" === ab.kind && (this.downUntilMs[ab.from] = Math.max(this.downUntilMs[ab.from], bb + Nb)), this.setStep(ab.from, 0, bb, "left"), "up" === ab.kind && (this.climbed = ab.fromClimbed))
      }
      decide(bb, ab, Ub, Ab, Mb) {
        const Tb = this.phase;
        switch (Tb.kind) {
          case "watch":
            return void this.watch(bb, ab, Ub, Ab, Mb);
          case "down":
            if (Tb.judged++, Tb.fpsSum += bb, Tb.dropped ||= Ub, Tb.judged < Pb.judgeWindows) return;
            return void(!Tb.dropped || Tb.fpsSum / Tb.judged >= Tb.fromFps * Pb.keepGain ? this.keepDown(Tb.from, Tb.fpsSum / Tb.judged, Mb) : this.noGainFrom(Tb.from, Tb.fromFps, Mb));
          case "up":
            return ab ? void(++Tb.judged >= Xb.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: Tb.from,
              heldWindows: 0,
              below: Tb.fromClimbed
            }, this.record(Mb, bb, "up_kept"))) : (Ab ? (this.watchAt(Tb.from), this.setStep(Tb.from, bb, Mb, "spoiled")) : this.failUp(this.step, Tb.from, bb, Mb), void(this.climbed = Tb.fromClimbed))
        }
      }
      watch(bb, ab, Ub, Ab, Mb) {
        const Tb = this.climbed;
        if (null !== Tb && !Ub && !Ab && ++Tb.heldWindows >= Xb.heldWindows && (this.climbed = null, this.record(Mb, bb, "PY"), this.hooks.PY(this.step)), Ub ? (this.dropRun++, this.dropRunFpsSum += bb, this.dropRunMasked ||= Ab) : this.resetDropRun(), Ab && ab || (this.cleanRun = ab ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? Pb.maskedWindows : Pb.dropWindows)) {
          const ab = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const Ub = this.climbed;
          return void(null !== Ub ? (this.failUp(this.step, Ub.from, bb, Mb), this.climbed = Ub.below) : this.step < this.lowest && this.downAllowed(Mb) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: ab,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, bb, Mb, "down")))
        }
        const Eb = this.step - 1;
        Eb >= 0 && this.cleanRun >= (this.climbing ? Xb.climbWindows : Xb.cleanWindows) && this.upAllowed(Eb, Mb) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Eb, bb, Mb, "up"))
      }
      downAllowed(bb) {
        return !(0 === this.step && null !== this.noGain && bb < this.noGain.untilMs) && bb >= this.downUntilMs[this.step]
      }
      upAllowed(bb, ab) {
        return this.upFailures[bb] <= Xb.failWaitsMs.length && ab >= this.upUntilMs[bb]
      }
      keepDown(bb, ab, Ub) {
        this.watchAt(this.step), this.downBackoffMs[bb] = 0, this.record(Ub, ab, "down_kept"), 0 === bb && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.RX(this.step)
      }
      noGainFrom(bb, ab, Ub) {
        var Ab, Mb;
        const Tb = 0 === bb ? null !== (Ab = null === (Mb = this.noGain) || void 0 === Mb ? void 0 : Mb.backoffMs) && void 0 !== Ab ? Ab : 0 : this.downBackoffMs[bb],
          Eb = 0 === Tb ? Nb : Math.min(2 * Tb, Wb);
        this.downBackoffMs[bb] = Eb, this.downUntilMs[bb] = Ub + Eb, 0 === bb && (this.noGain = {
          untilMs: Ub + Eb,
          backoffMs: Eb
        }, this.hooks.noGain(this.noGain)), this.watchAt(bb), this.setStep(bb, ab, Ub, "no_gain")
      }
      failUp(bb, ab, Ub, Ab) {
        this.climbing = !1;
        const Mb = ++this.upFailures[bb];
        this.upUntilMs[bb] = Mb <= Xb.failWaitsMs.length ? Ab + Xb.failWaitsMs[Mb - 1] : Number.POSITIVE_INFINITY, this.watchAt(ab), this.setStep(ab, Ub, Ab, "up_failed"), this.hooks.upFailed(bb)
      }
      watchAt(bb) {
        this.phase = {
          kind: "watch"
        }, this.climbed = bb === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(bb, ab, Ub, Ab) {
        const Mb = bb !== this.step;
        Mb && (this.climbed = null), this.step = bb, this.record(Ub, ab, Ab), Mb && (this.slowStartMs = -1, this.resized(Ub), this.hooks.changed(bb))
      }
      record(bb, ab, Ub) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: bb,
          step: this.step,
          fps: Math.round(10 * ab) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: Ub
        })
      }
    }
    var Ib = Ub(8829),
      db = Ub(2829),
      Fb = Ub(8834);
    const hb = "autoGraphics",
      Gb = 6048e5,
      Qb = "startScale";

    function qb() {
      return (0, Yb.P)(Ab.c.get("clientEscMenuOptions").pixelScale) * (0, Yb.N)()
    }

    function ub() {
      return (0, Yb.q)(qb())
    }

    function rb() {
      const bb = eb.f.getItem(hb);
      return "object" !== typeof bb || null === bb || "string" !== typeof bb.gpu ? null : bb
    }

    function Kb(bb) {
      return {
        untilEpochMs: Date.now() + (bb.untilMs - performance.now()),
        backoffMs: bb.backoffMs
      }
    }

    function ob(bb) {
      return bb ? {
        untilMs: performance.now() + (bb.untilEpochMs - Date.now()),
        backoffMs: bb.backoffMs
      } : null
    }
    let lb = null;

    function tb() {
      if (null === lb) {
        const bb = new URLSearchParams(window.location.search).get("msaa");
        lb = Ab.c.get("clientEscMenuOptions").antiAliasing && ("0" === bb || "1" !== bb && !(0, Eb.c)("antiAliasing") && (0, db.f)())
      }
      return lb
    }

    function wb(bb) {
      const ab = "number" === typeof bb ? Date.now() - bb : -1;
      return ab >= 0 && ab < Gb
    }
    let sb = null;

    function gb() {
      return sb ??= (0, Mb.getDeviceDefaultPixelScale)(), Cb(sb)
    }

    function Cb(bb) {
      const ab = Ab.c.get("clientEscMenuOptions");
      return ab.pixelSmoothing && !(0, Eb.c)("pixelScale") && ab.pixelScale === bb
    }
    let Vb = null,
      Ob = 0;

    function cb() {
      if (null === Vb || Ob !== qb()) {
        var bb;
        Ob = qb();
        const ab = Number(null !== (bb = new URLSearchParams(window.location.search).get(Qb)) && void 0 !== bb ? bb : ""),
          Ub = ub();
        if (ab > 0 && ab <= 1) Vb = (0, Yb.F)(Ub, Ub[0] / ab);
        else {
          const bb = rb(),
            ab = (0, Yb.F)(Ub, (0, Yb.J)(qb())),
            Ab = !(0, db.k)() && wb(null === bb || void 0 === bb ? void 0 : bb.heldAt) && (null === bb || void 0 === bb ? void 0 : bb.heldTarget) === qb() ? null === bb || void 0 === bb ? void 0 : bb.heldN : void 0;
          Vb = "number" === typeof Ab ? Math.min(ab, (0, Yb.F)(Ub, Ab)) : ab
        }
      }
      return Vb
    }

    function Jb(bb, ab) {
      var Ub;
      const Ab = ab.indexOf(null !== (Ub = bb.failedUpN) && void 0 !== Ub ? Ub : -1);
      return Ab >= 0 && wb(bb.failedUpAt) ? {
        step: Ab,
        untilMs: performance.now() + Bb.d.stepUp.failWaitsMs[0]
      } : null
    }
    let nb = null,
      Sb = !1,
      ba = "";
    const aa = new Set;

    function Ua() {
      for (const bb of aa) bb()
    }

    function Aa() {
      return Sb ? null : (La(), null === nb ? (null !== sb || null !== (0, Mb.peekGpuVendor)() ? gb() : Cb(1)) ? cb() : null : gb() ? nb.currentStep() : null)
    }

    function Ma() {
      const bb = Aa();
      if (null === bb) return null;
      const ab = ub(),
        Ub = ab[Math.min(bb, ab.length - 1)];
      return Ub === Ta() ? null : Ub
    }

    function Ta() {
      return (0, Yb.x)(Ab.c.get("clientEscMenuOptions").pixelScale, (0, Yb.N)())
    }

    function Ea() {
      return null !== nb && null !== Ma()
    }

    function Ya(bb) {
      return aa.add(bb), () => {
        aa.delete(bb)
      }
    }

    function Ba(bb, ab, Ub) {
      var Ab;
      if (null !== nb || Sb || (0, db.k)()) return;
      const Mb = (0, Ib.d)(bb, ab, Ub);
      null !== Mb && (0, db.n)(Mb.vendor), ba = `${bb}:${(null===Mb||void 0===Mb?void 0:Mb.renderer)||(null===Mb||void 0===Mb?void 0:Mb.vendor)||""}`, (null === (Ab = rb()) || void 0 === Ab ? void 0 : Ab.gpu) !== ba && (eb.f.setItem(hb, {
        gpu: ba
      }), Vb = null), va(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var bb;
          null === (bb = nb) || void 0 === bb || bb.hidden()
        } catch (ab) {
          za(), console.error("The quality steps stopped", ab)
        }
      }))
    }
    let ea = 0;

    function va() {
      var bb;
      const ab = null !== (bb = rb()) && void 0 !== bb ? bb : {
          gpu: ba
        },
        Ub = ub();
      ea = qb(), nb = new Hb({
          changed: Ua,
          RX: () => {
            Pa({
              heldN: void 0
            })
          },
          PY: bb => {
            var ab;
            const Ub = ub()[bb],
              Ab = {
                heldN: Ub,
                heldAt: Date.now(),
                heldTarget: qb()
              };
            (null === (ab = rb()) || void 0 === ab ? void 0 : ab.failedUpN) === Ub && (Ab.failedUpN = void 0), Pa(Ab)
          },
          upFailed: bb => {
            Pa({
              failedUpN: ub()[bb],
              failedUpAt: Date.now()
            })
          },
          noGain: bb => {
            Pa({
              noGain: null === bb ? void 0 : Kb(bb)
            })
          }
        }, {
          lowest: Ub.length - 1,
          startStep: cb(),
          noGain: ob(ab.noGain),
          upWait: Jb(ab, Ub)
        }),
        function(bb) {
          const ab = {
            get step() {
              return bb.currentStep()
            },
            get n() {
              var bb;
              return null !== (bb = Ma()) && void 0 !== bb ? bb : Ta()
            },
            get scale() {
              var bb;
              return ub()[0] / (null !== (bb = Ma()) && void 0 !== bb ? bb : Ta())
            },
            get msaaOff() {
              return tb()
            },
            log: bb.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: ab,
            configurable: !0
          })
        }(nb), Ua()
    }

    function La() {
      null !== nb && qb() !== ea && (Vb = null, va())
    }

    function Pa(bb) {
      eb.f.setItem(hb, {
        ...rb(),
        ...bb,
        gpu: ba
      })
    }
    let Xa = 0,
      ja = 0,
      Ra = 0,
      ka = !1;

    function ya() {
      Xa++
    }

    function Za() {
      return Xa
    }

    function Da(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      La(), null !== nb && (bb - Ra >= 1e3 && (ka = Xa - ja > Bb.d.sceneChange.meshesPerSecond, ja = Xa, Ra = bb), Fb.b.isHeld() ? nb.paused(bb) : nb.frame(bb, ab, Ub && !document.hidden && gb(), ka || Ab > 0 || (0, Tb.o)()))
    }

    function za() {
      if (!Sb) {
        Sb = !0, null !== nb && (nb = null, Pa({
          noGain: void 0
        }));
        try {
          Ua()
        } catch (bb) {
          console.error("The quality steps' resize to the player's n failed", bb)
        }
      }
    }

    function xa() {
      var bb;
      null === (bb = nb) || void 0 === bb || bb.resized(performance.now())
    }
  },
  8829: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(101),
      Mb = Ub(131);

    function Tb(bb, ab, Ub) {
      if ("webgpu" === bb) return Ub ? ((0, Ab.seedGpuVendor)(Ub), {
        vendor: Ub,
        renderer: ""
      }) : null;
      try {
        const Ub = "webgl" === bb ? ab.getContext("webgl2") : ab.getContext("webgl"),
          Tb = null === Ub || void 0 === Ub ? void 0 : Ub.getExtension("WEBGL_debug_renderer_info");
        if (Ub && Tb) {
          const bb = String(Ub.getParameter(Tb.UNMASKED_VENDOR_WEBGL)),
            ab = String(Ub.getParameter(Tb.UNMASKED_RENDERER_WEBGL));
          return (0, Ab.seedGpuVendor)(bb), (0, Mb.o)(bb, ab), {
            vendor: bb,
            renderer: ab
          }
        }
        Ub && (0, Mb.o)(String(Ub.getParameter(Ub.VENDOR)), String(Ub.getParameter(Ub.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);