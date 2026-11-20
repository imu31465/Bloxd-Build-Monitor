export const id = 186;
export const ids = [186];
export const modules = {
  8849: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ab,
      f: () => Cc,
      h: () => Nc,
      i: () => ec,
      j: () => Lc,
      l: () => Wc,
      p: () => Tc,
      s: () => Ic,
      t: () => Vc,
      u: () => Uc
    });
    var kb = sb(19),
      Wb = sb(117),
      ab = sb(1626),
      Tb = sb(4167),
      Ub = sb(2644),
      Ib = sb(2661),
      Hb = sb(37);
    const {
      windows: fb,
      target: Mb,
      stepDown: Xb,
      stepUp: nb,
      noGain: mb
    } = Ib.c, lb = 1e3 / 60 * 1.08, Qb = 1e3 / 55, eb = 1e3 / 45, Cb = 1e3 / 30 * .92, Nb = 1e3 / 30 * 1.08;
    class Vb {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(bb) {
        const cb = bb - this.lastMs;
        this.lastMs = bb;
        const sb = function(bb) {
          if (bb <= 0 || bb > 100) return -1;
          if (bb <= lb) return 0;
          if (bb >= Qb && bb <= eb) return 1;
          return bb >= Cb && bb <= Nb ? 2 : -1
        }(cb);
        sb !== this.runBand && (this.runBand = sb, this.runLength = 0), sb < 0 || ++this.runLength < 3 || (0 === sb ? this.votes60++ : 1 === sb ? (this.votesMid++, this.sumMidMs += cb) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const Lb = fb.windowMs,
      ub = fb.settleMs,
      Yb = fb.graceMs,
      hb = fb.minIntervals,
      Jb = 1e3 * hb / Lb,
      gb = mb.backoffMs,
      Bb = mb.maxMs;
    class tb {
      constructor(bb, cb) {
        let {
          lowest: sb,
          startStep: kb = 0,
          noGain: Wb = null,
          upWait: ab = null
        } = cb;
        this.hooks = bb, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new Vb, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = Mb.maxFps, this.lowest = sb, this.step = Math.min(kb, sb), this.noGain = Wb, this.climbing = this.step > 0;
        const Tb = sb + 1;
        this.downUntilMs = new Array(Tb).fill(0), this.downBackoffMs = new Array(Tb).fill(0), this.upFailures = new Array(Tb).fill(0), this.upUntilMs = new Array(Tb).fill(0), null !== ab && ab.step >= 0 && ab.step < Tb && (this.upUntilMs[ab.step] = ab.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(bb), !sb) return void this.leave(bb);
        const Wb = bb - this.lastFrameMs,
          ab = this.resizeStall(bb);
        if (Wb > 2e3 && !ab && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = bb, this.quietUntilMs = Math.max(this.quietUntilMs, bb + Yb), this.graceUntilMs = bb + Yb, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Wb > 500 && (this.hitch(bb), ab && (this.slowStartMs = -1)), this.lastFrameMs = bb, bb >= this.quietUntilMs && this.countWindow(bb, cb, kb) || cb && bb >= this.graceUntilMs && this.countSlow(bb)
      }
      countWindow(bb, cb, sb) {
        if (this.windowStartMs < 0) return !!cb && (this.windowStartMs = bb, this.lastDrawnMs = bb, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = sb, !1);
        if (this.windowMasked ||= sb, !cb) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, bb - this.lastDrawnMs), this.lastDrawnMs = bb;
        const kb = bb - this.windowStartMs;
        if (kb < Lb) return !1;
        const Wb = this.windowIntervals,
          ab = 1e3 * Wb / kb,
          Tb = this.windowHeld,
          Ub = this.windowMaxIntervalMs,
          Ib = this.windowMasked;
        if (this.windowStartMs = -1, Wb < hb) return !1;
        this.slowStartMs = -1;
        const Hb = this.targetFps(),
          fb = ab >= Hb * Mb.cleanShare && Ub <= Mb.cleanMaxIntervalMs && (0 === Tb || ab >= Hb);
        return this.decide(ab, fb, ab < Hb * Mb.dropShare, Ib, bb), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Mb.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(bb) {
        if (this.slowStartMs < 0) return this.slowStartMs = bb, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const cb = bb - this.slowStartMs;
        if (cb < 1e4) return;
        const sb = 1e3 * this.slowIntervals / cb;
        this.slowStartMs = -1, this.countSlow(bb), sb < Jb && (this.windowStartMs = -1, this.decide(sb, !1, !0, !1, bb))
      }
      resizeStall(bb) {
        return this.lastFrameMs - this.resizedMs <= ub && bb - this.lastFrameMs <= 15e3
      }
      paused(bb) {
        this.refresh.frame(bb), bb - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, bb + Yb), this.graceUntilMs = bb + Yb), this.lastFrameMs = bb, this.slowStartMs = -1, this.hitch(bb)
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
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, bb + ub)
      }
      left(bb) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const cb = this.phase;
        "watch" !== cb.kind && (this.phase = {
          kind: "watch"
        }, "down" === cb.kind && (this.downUntilMs[cb.from] = Math.max(this.downUntilMs[cb.from], bb + gb)), this.setStep(cb.from, 0, bb, "left"), "up" === cb.kind && (this.climbed = cb.fromClimbed))
      }
      decide(bb, cb, sb, kb, Wb) {
        const ab = this.phase;
        switch (ab.kind) {
          case "watch":
            return void this.watch(bb, cb, sb, kb, Wb);
          case "down":
            if (ab.judged++, ab.fpsSum += bb, ab.dropped ||= sb, ab.judged < Xb.judgeWindows) return;
            return void(!ab.dropped || ab.fpsSum / ab.judged >= ab.fromFps * Xb.keepGain ? this.keepDown(ab.from, ab.fpsSum / ab.judged, Wb) : this.noGainFrom(ab.from, ab.fromFps, Wb));
          case "up":
            return cb ? void(++ab.judged >= nb.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: ab.from,
              heldWindows: 0,
              below: ab.fromClimbed
            }, this.record(Wb, bb, "up_kept"))) : (kb ? (this.watchAt(ab.from), this.setStep(ab.from, bb, Wb, "spoiled")) : this.failUp(this.step, ab.from, bb, Wb), void(this.climbed = ab.fromClimbed))
        }
      }
      watch(bb, cb, sb, kb, Wb) {
        const ab = this.climbed;
        if (null !== ab && !sb && !kb && ++ab.heldWindows >= nb.heldWindows && (this.climbed = null, this.record(Wb, bb, "qU"), this.hooks.qU(this.step)), sb ? (this.dropRun++, this.dropRunFpsSum += bb, this.dropRunMasked ||= kb) : this.resetDropRun(), kb && cb || (this.cleanRun = cb ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? Xb.maskedWindows : Xb.dropWindows)) {
          const cb = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const sb = this.climbed;
          return void(null !== sb ? (this.failUp(this.step, sb.from, bb, Wb), this.climbed = sb.below) : this.step < this.lowest && this.downAllowed(Wb) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: cb,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, bb, Wb, "down")))
        }
        const Tb = this.step - 1;
        Tb >= 0 && this.cleanRun >= (this.climbing ? nb.climbWindows : nb.cleanWindows) && this.upAllowed(Tb, Wb) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Tb, bb, Wb, "up"))
      }
      downAllowed(bb) {
        return !(0 === this.step && null !== this.noGain && bb < this.noGain.untilMs) && bb >= this.downUntilMs[this.step]
      }
      upAllowed(bb, cb) {
        return this.upFailures[bb] <= nb.failWaitsMs.length && cb >= this.upUntilMs[bb]
      }
      keepDown(bb, cb, sb) {
        this.watchAt(this.step), this.downBackoffMs[bb] = 0, this.record(sb, cb, "down_kept"), 0 === bb && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.vn(this.step)
      }
      noGainFrom(bb, cb, sb) {
        var kb, Wb;
        const ab = 0 === bb ? null !== (kb = null === (Wb = this.noGain) || void 0 === Wb ? void 0 : Wb.backoffMs) && void 0 !== kb ? kb : 0 : this.downBackoffMs[bb],
          Tb = 0 === ab ? gb : Math.min(2 * ab, Bb);
        this.downBackoffMs[bb] = Tb, this.downUntilMs[bb] = sb + Tb, 0 === bb && (this.noGain = {
          untilMs: sb + Tb,
          backoffMs: Tb
        }, this.hooks.noGain(this.noGain)), this.watchAt(bb), this.setStep(bb, cb, sb, "no_gain")
      }
      failUp(bb, cb, sb, kb) {
        this.climbing = !1;
        const Wb = ++this.upFailures[bb];
        this.upUntilMs[bb] = Wb <= nb.failWaitsMs.length ? kb + nb.failWaitsMs[Wb - 1] : Number.POSITIVE_INFINITY, this.watchAt(cb), this.setStep(cb, sb, kb, "up_failed"), this.hooks.upFailed(bb)
      }
      watchAt(bb) {
        this.phase = {
          kind: "watch"
        }, this.climbed = bb === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(bb, cb, sb, kb) {
        const Wb = bb !== this.step;
        Wb && (this.climbed = null), this.step = bb, this.record(sb, cb, kb), Wb && (this.slowStartMs = -1, this.resized(sb), this.hooks.changed(bb))
      }
      record(bb, cb, sb) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: bb,
          step: this.step,
          fps: Math.round(10 * cb) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: sb
        })
      }
    }
    var yb = sb(8857),
      Pb = sb(2867),
      Db = sb(8862);
    const Eb = "autoGraphics",
      ib = 6048e5,
      Ob = "startScale";

    function Gb() {
      return (0, Ub.K)(kb.d.get("clientEscMenuOptions").pixelScale) * (0, Ub.F)()
    }

    function Kb() {
      return (0, Ub.q)(Gb())
    }

    function Zb() {
      const bb = Hb.h.getItem(Eb);
      return "object" !== typeof bb || null === bb || "string" !== typeof bb.gpu ? null : bb
    }

    function zb(bb) {
      return {
        untilEpochMs: Date.now() + (bb.untilMs - performance.now()),
        backoffMs: bb.backoffMs
      }
    }

    function qb(bb) {
      return bb ? {
        untilMs: performance.now() + (bb.untilEpochMs - Date.now()),
        backoffMs: bb.backoffMs
      } : null
    }
    let db = null;

    function Ab() {
      if (null === db) {
        const bb = new URLSearchParams(window.location.search).get("msaa");
        db = kb.d.get("clientEscMenuOptions").antiAliasing && ("0" === bb || "1" !== bb && !(0, Tb.b)("antiAliasing") && (0, Pb.g)())
      }
      return db
    }

    function wb(bb) {
      const cb = "number" === typeof bb ? Date.now() - bb : -1;
      return cb >= 0 && cb < ib
    }
    let rb = null;

    function ob() {
      return rb ??= (0, Wb.getDeviceDefaultPixelScale)(), Sb(rb)
    }

    function Sb(bb) {
      const cb = kb.d.get("clientEscMenuOptions");
      return cb.pixelSmoothing && !(0, Tb.b)("pixelScale") && cb.pixelScale === bb
    }
    let Rb = null,
      vb = 0;

    function Fb() {
      if (null === Rb || vb !== Gb()) {
        var bb;
        vb = Gb();
        const cb = Number(null !== (bb = new URLSearchParams(window.location.search).get(Ob)) && void 0 !== bb ? bb : ""),
          sb = Kb();
        if (cb > 0 && cb <= 1) Rb = (0, Ub.z)(sb, sb[0] / cb);
        else {
          const bb = Zb(),
            cb = (0, Ub.z)(sb, (0, Ub.D)(Gb())),
            kb = !(0, Pb.n)() && wb(null === bb || void 0 === bb ? void 0 : bb.heldAt) && (null === bb || void 0 === bb ? void 0 : bb.heldTarget) === Gb() ? null === bb || void 0 === bb ? void 0 : bb.heldN : void 0;
          Rb = "number" === typeof kb ? Math.min(cb, (0, Ub.z)(sb, kb)) : cb
        }
      }
      return Rb
    }

    function xb(bb, cb) {
      var sb;
      const kb = cb.indexOf(null !== (sb = bb.failedUpN) && void 0 !== sb ? sb : -1);
      return kb >= 0 && wb(bb.failedUpAt) ? {
        step: kb,
        untilMs: performance.now() + Ib.c.stepUp.failWaitsMs[0]
      } : null
    }
    let jb = null,
      pb = !1,
      bc = "";
    const cc = new Set;

    function sc() {
      for (const bb of cc) bb()
    }

    function kc() {
      return pb ? null : (Mc(), null === jb ? (null !== rb || null !== (0, Wb.peekGpuVendor)() ? ob() : Sb(1)) ? Fb() : null : ob() ? jb.currentStep() : null)
    }

    function Wc() {
      const bb = kc();
      if (null === bb) return null;
      const cb = Kb(),
        sb = cb[Math.min(bb, cb.length - 1)];
      return sb === ac() ? null : sb
    }

    function ac() {
      return (0, Ub.u)(kb.d.get("clientEscMenuOptions").pixelScale, (0, Ub.F)())
    }

    function Tc() {
      return null !== jb && null !== Wc()
    }

    function Uc(bb) {
      return cc.add(bb), () => {
        cc.delete(bb)
      }
    }

    function Ic(bb, cb, sb) {
      var kb;
      if (null !== jb || pb || (0, Pb.n)()) return;
      const Wb = (0, yb.c)(bb, cb, sb);
      null !== Wb && (0, Pb.r)(Wb.vendor), bc = `${bb}:${(null===Wb||void 0===Wb?void 0:Wb.renderer)||(null===Wb||void 0===Wb?void 0:Wb.vendor)||""}`, (null === (kb = Zb()) || void 0 === kb ? void 0 : kb.gpu) !== bc && (Hb.h.setItem(Eb, {
        gpu: bc
      }), Rb = null), fc(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var bb;
          null === (bb = jb) || void 0 === bb || bb.hidden()
        } catch (cb) {
          Vc(), console.error("The quality steps stopped", cb)
        }
      }))
    }
    let Hc = 0;

    function fc() {
      var bb;
      const cb = null !== (bb = Zb()) && void 0 !== bb ? bb : {
          gpu: bc
        },
        sb = Kb();
      Hc = Gb(), jb = new tb({
          changed: sc,
          vn: () => {
            Xc({
              heldN: void 0
            })
          },
          qU: bb => {
            var cb;
            const sb = Kb()[bb],
              kb = {
                heldN: sb,
                heldAt: Date.now(),
                heldTarget: Gb()
              };
            (null === (cb = Zb()) || void 0 === cb ? void 0 : cb.failedUpN) === sb && (kb.failedUpN = void 0), Xc(kb)
          },
          upFailed: bb => {
            Xc({
              failedUpN: Kb()[bb],
              failedUpAt: Date.now()
            })
          },
          noGain: bb => {
            Xc({
              noGain: null === bb ? void 0 : zb(bb)
            })
          }
        }, {
          lowest: sb.length - 1,
          startStep: Fb(),
          noGain: qb(cb.noGain),
          upWait: xb(cb, sb)
        }),
        function(bb) {
          const cb = {
            get step() {
              return bb.currentStep()
            },
            get n() {
              var bb;
              return null !== (bb = Wc()) && void 0 !== bb ? bb : ac()
            },
            get scale() {
              var bb;
              return Kb()[0] / (null !== (bb = Wc()) && void 0 !== bb ? bb : ac())
            },
            get msaaOff() {
              return Ab()
            },
            log: bb.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: cb,
            configurable: !0
          })
        }(jb), sc()
    }

    function Mc() {
      null !== jb && Gb() !== Hc && (Rb = null, fc())
    }

    function Xc(bb) {
      Hb.h.setItem(Eb, {
        ...Zb(),
        ...bb,
        gpu: bc
      })
    }
    let nc = 0,
      mc = 0,
      lc = 0,
      Qc = !1;

    function ec() {
      nc++
    }

    function Cc() {
      return nc
    }

    function Nc(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Mc(), null !== jb && (bb - lc >= 1e3 && (Qc = nc - mc > Ib.c.sceneChange.meshesPerSecond, mc = nc, lc = bb), Db.b.isHeld() ? jb.paused(bb) : jb.frame(bb, cb, sb && !document.hidden && ob(), Qc || kb > 0 || (0, ab.q)()))
    }

    function Vc() {
      if (!pb) {
        pb = !0, null !== jb && (jb = null, Xc({
          noGain: void 0
        }));
        try {
          sc()
        } catch (bb) {
          console.error("The quality steps' resize to the player's n failed", bb)
        }
      }
    }

    function Lc() {
      var bb;
      null === (bb = jb) || void 0 === bb || bb.resized(performance.now())
    }
  },
  8857: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(117),
      Wb = sb(160);

    function ab(bb, cb, sb) {
      if ("webgpu" === bb) return sb ? ((0, kb.seedGpuVendor)(sb), {
        vendor: sb,
        renderer: ""
      }) : null;
      try {
        const sb = "webgl" === bb ? cb.getContext("webgl2") : cb.getContext("webgl"),
          ab = null === sb || void 0 === sb ? void 0 : sb.getExtension("WEBGL_debug_renderer_info");
        if (sb && ab) {
          const bb = String(sb.getParameter(ab.UNMASKED_VENDOR_WEBGL)),
            cb = String(sb.getParameter(ab.UNMASKED_RENDERER_WEBGL));
          return (0, kb.seedGpuVendor)(bb), (0, Wb.s)(bb, cb), {
            vendor: bb,
            renderer: cb
          }
        }
        sb && (0, Wb.s)(String(sb.getParameter(sb.VENDOR)), String(sb.getParameter(sb.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);