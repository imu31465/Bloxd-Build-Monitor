export const id = 187;
export const ids = [187];
export const modules = {
  9e3: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => qb,
      g: () => lu,
      i: () => Au,
      k: () => Wu,
      o: () => Ou,
      r: () => Uu,
      t: () => Yu,
      v: () => Ku,
      z: () => Lu
    });
    var Bb = hb(13),
      Ob = hb(86),
      Gb = hb(1537),
      Ub = hb(4185),
      Lb = hb(2594),
      Yb = hb(2608),
      Sb = hb(29);
    const {
      windows: ab,
      target: Hb,
      stepDown: wb,
      stepUp: Zb,
      noGain: Xb
    } = Yb.b, pb = 1e3 / 60 * 1.08, ob = 1e3 / 55, Ab = 1e3 / 45, lb = 1e3 / 30 * .92, Kb = 1e3 / 30 * 1.08;
    class Wb {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(bb) {
        const ub = bb - this.lastMs;
        this.lastMs = bb;
        const hb = function(bb) {
          if (bb <= 0 || bb > 100) return -1;
          if (bb <= pb) return 0;
          if (bb >= ob && bb <= Ab) return 1;
          return bb >= lb && bb <= Kb ? 2 : -1
        }(ub);
        hb !== this.runBand && (this.runBand = hb, this.runLength = 0), hb < 0 || ++this.runLength < 3 || (0 === hb ? this.votes60++ : 1 === hb ? (this.votesMid++, this.sumMidMs += ub) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const Cb = ab.windowMs,
      db = ab.settleMs,
      rb = ab.graceMs,
      jb = ab.minIntervals,
      nb = 1e3 * jb / Cb,
      Db = Xb.backoffMs,
      xb = Xb.maxMs;
    class zb {
      constructor(bb, ub) {
        let {
          lowest: hb,
          startStep: Bb = 0,
          noGain: Ob = null,
          upWait: Gb = null
        } = ub;
        this.hooks = bb, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new Wb, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = Hb.maxFps, this.lowest = hb, this.step = Math.min(Bb, hb), this.noGain = Ob, this.climbing = this.step > 0;
        const Ub = hb + 1;
        this.downUntilMs = new Array(Ub).fill(0), this.downBackoffMs = new Array(Ub).fill(0), this.upFailures = new Array(Ub).fill(0), this.upUntilMs = new Array(Ub).fill(0), null !== Gb && Gb.step >= 0 && Gb.step < Ub && (this.upUntilMs[Gb.step] = Gb.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(bb), !hb) return void this.leave(bb);
        const Ob = bb - this.lastFrameMs,
          Gb = this.resizeStall(bb);
        if (Ob > 2e3 && !Gb && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = bb, this.quietUntilMs = Math.max(this.quietUntilMs, bb + rb), this.graceUntilMs = bb + rb, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Ob > 500 && (this.hitch(bb), Gb && (this.slowStartMs = -1)), this.lastFrameMs = bb, bb >= this.quietUntilMs && this.countWindow(bb, ub, Bb) || ub && bb >= this.graceUntilMs && this.countSlow(bb)
      }
      countWindow(bb, ub, hb) {
        if (this.windowStartMs < 0) return !!ub && (this.windowStartMs = bb, this.lastDrawnMs = bb, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = hb, !1);
        if (this.windowMasked ||= hb, !ub) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, bb - this.lastDrawnMs), this.lastDrawnMs = bb;
        const Bb = bb - this.windowStartMs;
        if (Bb < Cb) return !1;
        const Ob = this.windowIntervals,
          Gb = 1e3 * Ob / Bb,
          Ub = this.windowHeld,
          Lb = this.windowMaxIntervalMs,
          Yb = this.windowMasked;
        if (this.windowStartMs = -1, Ob < jb) return !1;
        this.slowStartMs = -1;
        const Sb = this.targetFps(),
          ab = Gb >= Sb * Hb.cleanShare && Lb <= Hb.cleanMaxIntervalMs && (0 === Ub || Gb >= Sb);
        return this.decide(Gb, ab, Gb < Sb * Hb.dropShare, Yb, bb), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Hb.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(bb) {
        if (this.slowStartMs < 0) return this.slowStartMs = bb, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const ub = bb - this.slowStartMs;
        if (ub < 1e4) return;
        const hb = 1e3 * this.slowIntervals / ub;
        this.slowStartMs = -1, this.countSlow(bb), hb < nb && (this.windowStartMs = -1, this.decide(hb, !1, !0, !1, bb))
      }
      resizeStall(bb) {
        return this.lastFrameMs - this.resizedMs <= db && bb - this.lastFrameMs <= 15e3
      }
      paused(bb) {
        this.refresh.frame(bb), bb - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, bb + rb), this.graceUntilMs = bb + rb), this.lastFrameMs = bb, this.slowStartMs = -1, this.hitch(bb)
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
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, bb + db)
      }
      left(bb) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const ub = this.phase;
        "watch" !== ub.kind && (this.phase = {
          kind: "watch"
        }, "down" === ub.kind && (this.downUntilMs[ub.from] = Math.max(this.downUntilMs[ub.from], bb + Db)), this.setStep(ub.from, 0, bb, "left"), "up" === ub.kind && (this.climbed = ub.fromClimbed))
      }
      decide(bb, ub, hb, Bb, Ob) {
        const Gb = this.phase;
        switch (Gb.kind) {
          case "watch":
            return void this.watch(bb, ub, hb, Bb, Ob);
          case "down":
            if (Gb.judged++, Gb.fpsSum += bb, Gb.dropped ||= hb, Gb.judged < wb.judgeWindows) return;
            return void(!Gb.dropped || Gb.fpsSum / Gb.judged >= Gb.fromFps * wb.keepGain ? this.keepDown(Gb.from, Gb.fpsSum / Gb.judged, Ob) : this.noGainFrom(Gb.from, Gb.fromFps, Ob));
          case "up":
            return ub ? void(++Gb.judged >= Zb.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: Gb.from,
              heldWindows: 0,
              below: Gb.fromClimbed
            }, this.record(Ob, bb, "up_kept"))) : (Bb ? (this.watchAt(Gb.from), this.setStep(Gb.from, bb, Ob, "spoiled")) : this.failUp(this.step, Gb.from, bb, Ob), void(this.climbed = Gb.fromClimbed))
        }
      }
      watch(bb, ub, hb, Bb, Ob) {
        const Gb = this.climbed;
        if (null !== Gb && !hb && !Bb && ++Gb.heldWindows >= Zb.heldWindows && (this.climbed = null, this.record(Ob, bb, "MS"), this.hooks.MS(this.step)), hb ? (this.dropRun++, this.dropRunFpsSum += bb, this.dropRunMasked ||= Bb) : this.resetDropRun(), Bb && ub || (this.cleanRun = ub ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? wb.maskedWindows : wb.dropWindows)) {
          const ub = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const hb = this.climbed;
          return void(null !== hb ? (this.failUp(this.step, hb.from, bb, Ob), this.climbed = hb.below) : this.step < this.lowest && this.downAllowed(Ob) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: ub,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, bb, Ob, "down")))
        }
        const Ub = this.step - 1;
        Ub >= 0 && this.cleanRun >= (this.climbing ? Zb.climbWindows : Zb.cleanWindows) && this.upAllowed(Ub, Ob) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Ub, bb, Ob, "up"))
      }
      downAllowed(bb) {
        return !(0 === this.step && null !== this.noGain && bb < this.noGain.untilMs) && bb >= this.downUntilMs[this.step]
      }
      upAllowed(bb, ub) {
        return this.upFailures[bb] <= Zb.failWaitsMs.length && ub >= this.upUntilMs[bb]
      }
      keepDown(bb, ub, hb) {
        this.watchAt(this.step), this.downBackoffMs[bb] = 0, this.record(hb, ub, "down_kept"), 0 === bb && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.HZ(this.step)
      }
      noGainFrom(bb, ub, hb) {
        var Bb, Ob;
        const Gb = 0 === bb ? null !== (Bb = null === (Ob = this.noGain) || void 0 === Ob ? void 0 : Ob.backoffMs) && void 0 !== Bb ? Bb : 0 : this.downBackoffMs[bb],
          Ub = 0 === Gb ? Db : Math.min(2 * Gb, xb);
        this.downBackoffMs[bb] = Ub, this.downUntilMs[bb] = hb + Ub, 0 === bb && (this.noGain = {
          untilMs: hb + Ub,
          backoffMs: Ub
        }, this.hooks.noGain(this.noGain)), this.watchAt(bb), this.setStep(bb, ub, hb, "no_gain")
      }
      failUp(bb, ub, hb, Bb) {
        this.climbing = !1;
        const Ob = ++this.upFailures[bb];
        this.upUntilMs[bb] = Ob <= Zb.failWaitsMs.length ? Bb + Zb.failWaitsMs[Ob - 1] : Number.POSITIVE_INFINITY, this.watchAt(ub), this.setStep(ub, hb, Bb, "up_failed"), this.hooks.upFailed(bb)
      }
      watchAt(bb) {
        this.phase = {
          kind: "watch"
        }, this.climbed = bb === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(bb, ub, hb, Bb) {
        const Ob = bb !== this.step;
        Ob && (this.climbed = null), this.step = bb, this.record(hb, ub, Bb), Ob && (this.slowStartMs = -1, this.resized(hb), this.hooks.changed(bb))
      }
      record(bb, ub, hb) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: bb,
          step: this.step,
          fps: Math.round(10 * ub) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: hb
        })
      }
    }
    var gb = hb(9008),
      ib = hb(2911),
      vb = hb(9016);
    const tb = "autoGraphics",
      Jb = 6048e5,
      eb = "startScale";

    function Nb() {
      return (0, Lb.I)(Bb.d.get("clientEscMenuOptions").pixelScale) * (0, Lb.C)()
    }

    function sb() {
      return (0, Lb.p)(Nb())
    }

    function Mb() {
      const bb = Sb.j.getItem(tb);
      return "object" !== typeof bb || null === bb || "string" !== typeof bb.gpu ? null : bb
    }

    function mb(bb) {
      return {
        untilEpochMs: Date.now() + (bb.untilMs - performance.now()),
        backoffMs: bb.backoffMs
      }
    }

    function Ib(bb) {
      return bb ? {
        untilMs: performance.now() + (bb.untilEpochMs - Date.now()),
        backoffMs: bb.backoffMs
      } : null
    }
    let Pb = null;

    function qb() {
      if (null === Pb) {
        const bb = new URLSearchParams(window.location.search).get("msaa");
        Pb = Bb.d.get("clientEscMenuOptions").antiAliasing && ("0" === bb || "1" !== bb && !(0, Ub.d)("antiAliasing") && (0, ib.d)())
      }
      return Pb
    }

    function Eb(bb) {
      const ub = "number" === typeof bb ? Date.now() - bb : -1;
      return ub >= 0 && ub < Jb
    }
    let yb = null;

    function Vb() {
      return yb ??= (0, Ob.getDeviceDefaultPixelScale)(), Fb(yb)
    }

    function Fb(bb) {
      const ub = Bb.d.get("clientEscMenuOptions");
      return ub.pixelSmoothing && !(0, Ub.d)("pixelScale") && ub.pixelScale === bb
    }
    let fb = null,
      kb = 0;

    function Tb() {
      if (null === fb || kb !== Nb()) {
        var bb;
        kb = Nb();
        const ub = Number(null !== (bb = new URLSearchParams(window.location.search).get(eb)) && void 0 !== bb ? bb : ""),
          hb = sb();
        if (ub > 0 && ub <= 1) fb = (0, Lb.A)(hb, hb[0] / ub);
        else {
          const bb = Mb(),
            ub = (0, Lb.A)(hb, (0, Lb.B)(Nb())),
            Bb = !(0, ib.j)() && Eb(null === bb || void 0 === bb ? void 0 : bb.heldAt) && (null === bb || void 0 === bb ? void 0 : bb.heldTarget) === Nb() ? null === bb || void 0 === bb ? void 0 : bb.heldN : void 0;
          fb = "number" === typeof Bb ? Math.min(ub, (0, Lb.A)(hb, Bb)) : ub
        }
      }
      return fb
    }

    function cb(bb, ub) {
      var hb;
      const Bb = ub.indexOf(null !== (hb = bb.failedUpN) && void 0 !== hb ? hb : -1);
      return Bb >= 0 && Eb(bb.failedUpAt) ? {
        step: Bb,
        untilMs: performance.now() + Yb.b.stepUp.failWaitsMs[0]
      } : null
    }
    let Qb = null,
      Rb = !1,
      bu = "";
    const uu = new Set;

    function hu() {
      for (const bb of uu) bb()
    }

    function Bu() {
      return Rb ? null : (Hu(), null === Qb ? (null !== yb || null !== (0, Ob.peekGpuVendor)() ? Vb() : Fb(1)) ? Tb() : null : Vb() ? Qb.currentStep() : null)
    }

    function Ou() {
      const bb = Bu();
      if (null === bb) return null;
      const ub = sb(),
        hb = ub[Math.min(bb, ub.length - 1)];
      return hb === Gu() ? null : hb
    }

    function Gu() {
      return (0, Lb.w)(Bb.d.get("clientEscMenuOptions").pixelScale, (0, Lb.C)())
    }

    function Uu() {
      return null !== Qb && null !== Ou()
    }

    function Lu(bb) {
      return uu.add(bb), () => {
        uu.delete(bb)
      }
    }

    function Yu(bb, ub, hb) {
      var Bb;
      if (null !== Qb || Rb || (0, ib.j)()) return;
      const Ob = (0, gb.c)(bb, ub, hb);
      null !== Ob && (0, ib.l)(Ob.vendor), bu = `${bb}:${(null===Ob||void 0===Ob?void 0:Ob.renderer)||(null===Ob||void 0===Ob?void 0:Ob.vendor)||""}`, (null === (Bb = Mb()) || void 0 === Bb ? void 0 : Bb.gpu) !== bu && (Sb.j.setItem(tb, {
        gpu: bu
      }), fb = null), au(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var bb;
          null === (bb = Qb) || void 0 === bb || bb.hidden()
        } catch (ub) {
          Ku(), console.error("The quality steps stopped", ub)
        }
      }))
    }
    let Su = 0;

    function au() {
      var bb;
      const ub = null !== (bb = Mb()) && void 0 !== bb ? bb : {
          gpu: bu
        },
        hb = sb();
      Su = Nb(), Qb = new zb({
          changed: hu,
          HZ: () => {
            wu({
              heldN: void 0
            })
          },
          MS: bb => {
            var ub;
            const hb = sb()[bb],
              Bb = {
                heldN: hb,
                heldAt: Date.now(),
                heldTarget: Nb()
              };
            (null === (ub = Mb()) || void 0 === ub ? void 0 : ub.failedUpN) === hb && (Bb.failedUpN = void 0), wu(Bb)
          },
          upFailed: bb => {
            wu({
              failedUpN: sb()[bb],
              failedUpAt: Date.now()
            })
          },
          noGain: bb => {
            wu({
              noGain: null === bb ? void 0 : mb(bb)
            })
          }
        }, {
          lowest: hb.length - 1,
          startStep: Tb(),
          noGain: Ib(ub.noGain),
          upWait: cb(ub, hb)
        }),
        function(bb) {
          const ub = {
            get step() {
              return bb.currentStep()
            },
            get n() {
              var bb;
              return null !== (bb = Ou()) && void 0 !== bb ? bb : Gu()
            },
            get scale() {
              var bb;
              return sb()[0] / (null !== (bb = Ou()) && void 0 !== bb ? bb : Gu())
            },
            get msaaOff() {
              return qb()
            },
            log: bb.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: ub,
            configurable: !0
          })
        }(Qb), hu()
    }

    function Hu() {
      null !== Qb && Nb() !== Su && (fb = null, au())
    }

    function wu(bb) {
      Sb.j.setItem(tb, {
        ...Mb(),
        ...bb,
        gpu: bu
      })
    }
    let Zu = 0,
      Xu = 0,
      pu = 0,
      ou = !1;

    function Au() {
      Zu++
    }

    function lu(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Hu(), null !== Qb && (bb - pu >= 1e3 && (ou = Zu - Xu > Yb.b.sceneChange.meshesPerSecond, Xu = Zu, pu = bb), vb.b.isHeld() ? Qb.paused(bb) : Qb.frame(bb, ub, hb && !document.hidden && Vb(), ou || Bb > 0 || (0, Gb.q)()))
    }

    function Ku() {
      if (!Rb) {
        Rb = !0, null !== Qb && (Qb = null, wu({
          noGain: void 0
        }));
        try {
          hu()
        } catch (bb) {
          console.error("The quality steps' resize to the player's n failed", bb)
        }
      }
    }

    function Wu() {
      var bb;
      null === (bb = Qb) || void 0 === bb || bb.resized(performance.now())
    }
  },
  9008: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(86),
      Ob = hb(113);

    function Gb(bb, ub, hb) {
      if ("webgpu" === bb) return hb ? ((0, Bb.seedGpuVendor)(hb), {
        vendor: hb,
        renderer: ""
      }) : null;
      try {
        const hb = "webgl" === bb ? ub.getContext("webgl2") : ub.getContext("webgl");
        "webgl" === bb && hb && (0, Ob.v)(hb);
        const Gb = null === hb || void 0 === hb ? void 0 : hb.getExtension("WEBGL_debug_renderer_info");
        if (hb && Gb) {
          const bb = String(hb.getParameter(Gb.UNMASKED_VENDOR_WEBGL)),
            ub = String(hb.getParameter(Gb.UNMASKED_RENDERER_WEBGL));
          return (0, Bb.seedGpuVendor)(bb), (0, Ob.C)(bb, ub), {
            vendor: bb,
            renderer: ub
          }
        }
        hb && (0, Ob.C)(String(hb.getParameter(hb.VENDOR)), String(hb.getParameter(hb.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);