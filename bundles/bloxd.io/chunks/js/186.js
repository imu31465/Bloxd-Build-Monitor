export const id = 186;
export const ids = [186];
export const modules = {
  8914: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Mv,
      h: () => cz,
      k: () => Gz,
      o: () => iz,
      p: () => jz,
      t: () => Sz,
      x: () => gz,
      y: () => dz,
      A: () => mz,
      C: () => pz
    });
    var hv = Pv(22),
      Sv = Pv(73),
      ev = Pv(1610),
      gv = Pv(4176),
      pv = Pv(2629),
      dv = Pv(2646),
      Nv = Pv(39);
    const {
      windows: lv,
      target: Tv,
      stepDown: Wv,
      stepUp: wv,
      noGain: av
    } = dv.c, sv = 1e3 / 60 * 1.08, Cv = 1e3 / 55, iv = 1e3 / 45, cv = 1e3 / 30 * .92, Gv = 1e3 / 30 * 1.08;
    class mv {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(vv) {
        const zv = vv - this.lastMs;
        this.lastMs = vv;
        const Pv = function(vv) {
          if (vv <= 0 || vv > 100) return -1;
          if (vv <= sv) return 0;
          if (vv >= Cv && vv <= iv) return 1;
          return vv >= cv && vv <= Gv ? 2 : -1
        }(zv);
        Pv !== this.runBand && (this.runBand = Pv, this.runLength = 0), Pv < 0 || ++this.runLength < 3 || (0 === Pv ? this.votes60++ : 1 === Pv ? (this.votesMid++, this.sumMidMs += zv) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const jv = lv.windowMs,
      fv = lv.settleMs,
      Fv = lv.graceMs,
      Yv = lv.minIntervals,
      nv = 1e3 * Yv / jv,
      Ov = av.backoffMs,
      Dv = av.maxMs;
    class Kv {
      constructor(vv, zv) {
        let {
          lowest: Pv,
          startStep: hv = 0,
          noGain: Sv = null,
          upWait: ev = null
        } = zv;
        this.hooks = vv, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new mv, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = Tv.maxFps, this.lowest = Pv, this.step = Math.min(hv, Pv), this.noGain = Sv, this.climbing = this.step > 0;
        const gv = Pv + 1;
        this.downUntilMs = new Array(gv).fill(0), this.downBackoffMs = new Array(gv).fill(0), this.upFailures = new Array(gv).fill(0), this.upUntilMs = new Array(gv).fill(0), null !== ev && ev.step >= 0 && ev.step < gv && (this.upUntilMs[ev.step] = ev.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(vv), !Pv) return void this.leave(vv);
        const Sv = vv - this.lastFrameMs,
          ev = this.resizeStall(vv);
        if (Sv > 2e3 && !ev && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = vv, this.quietUntilMs = Math.max(this.quietUntilMs, vv + Fv), this.graceUntilMs = vv + Fv, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Sv > 500 && (this.hitch(vv), ev && (this.slowStartMs = -1)), this.lastFrameMs = vv, vv >= this.quietUntilMs && this.countWindow(vv, zv, hv) || zv && vv >= this.graceUntilMs && this.countSlow(vv)
      }
      countWindow(vv, zv, Pv) {
        if (this.windowStartMs < 0) return !!zv && (this.windowStartMs = vv, this.lastDrawnMs = vv, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = Pv, !1);
        if (this.windowMasked ||= Pv, !zv) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, vv - this.lastDrawnMs), this.lastDrawnMs = vv;
        const hv = vv - this.windowStartMs;
        if (hv < jv) return !1;
        const Sv = this.windowIntervals,
          ev = 1e3 * Sv / hv,
          gv = this.windowHeld,
          pv = this.windowMaxIntervalMs,
          dv = this.windowMasked;
        if (this.windowStartMs = -1, Sv < Yv) return !1;
        this.slowStartMs = -1;
        const Nv = this.targetFps(),
          lv = ev >= Nv * Tv.cleanShare && pv <= Tv.cleanMaxIntervalMs && (0 === gv || ev >= Nv);
        return this.decide(ev, lv, ev < Nv * Tv.dropShare, dv, vv), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Tv.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(vv) {
        if (this.slowStartMs < 0) return this.slowStartMs = vv, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const zv = vv - this.slowStartMs;
        if (zv < 1e4) return;
        const Pv = 1e3 * this.slowIntervals / zv;
        this.slowStartMs = -1, this.countSlow(vv), Pv < nv && (this.windowStartMs = -1, this.decide(Pv, !1, !0, !1, vv))
      }
      resizeStall(vv) {
        return this.lastFrameMs - this.resizedMs <= fv && vv - this.lastFrameMs <= 15e3
      }
      paused(vv) {
        this.refresh.frame(vv), vv - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, vv + Fv), this.graceUntilMs = vv + Fv), this.lastFrameMs = vv, this.slowStartMs = -1, this.hitch(vv)
      }
      resized(vv) {
        this.resizedMs = vv, this.hitch(vv)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(vv) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(vv))
      }
      hitch(vv) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, vv + fv)
      }
      left(vv) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const zv = this.phase;
        "watch" !== zv.kind && (this.phase = {
          kind: "watch"
        }, "down" === zv.kind && (this.downUntilMs[zv.from] = Math.max(this.downUntilMs[zv.from], vv + Ov)), this.setStep(zv.from, 0, vv, "left"), "up" === zv.kind && (this.climbed = zv.fromClimbed))
      }
      decide(vv, zv, Pv, hv, Sv) {
        const ev = this.phase;
        switch (ev.kind) {
          case "watch":
            return void this.watch(vv, zv, Pv, hv, Sv);
          case "down":
            if (ev.judged++, ev.fpsSum += vv, ev.dropped ||= Pv, ev.judged < Wv.judgeWindows) return;
            return void(!ev.dropped || ev.fpsSum / ev.judged >= ev.fromFps * Wv.keepGain ? this.keepDown(ev.from, ev.fpsSum / ev.judged, Sv) : this.noGainFrom(ev.from, ev.fromFps, Sv));
          case "up":
            return zv ? void(++ev.judged >= wv.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: ev.from,
              heldWindows: 0,
              below: ev.fromClimbed
            }, this.record(Sv, vv, "up_kept"))) : (hv ? (this.watchAt(ev.from), this.setStep(ev.from, vv, Sv, "spoiled")) : this.failUp(this.step, ev.from, vv, Sv), void(this.climbed = ev.fromClimbed))
        }
      }
      watch(vv, zv, Pv, hv, Sv) {
        const ev = this.climbed;
        if (null !== ev && !Pv && !hv && ++ev.heldWindows >= wv.heldWindows && (this.climbed = null, this.record(Sv, vv, "Vp"), this.hooks.Vp(this.step)), Pv ? (this.dropRun++, this.dropRunFpsSum += vv, this.dropRunMasked ||= hv) : this.resetDropRun(), hv && zv || (this.cleanRun = zv ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? Wv.maskedWindows : Wv.dropWindows)) {
          const zv = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const Pv = this.climbed;
          return void(null !== Pv ? (this.failUp(this.step, Pv.from, vv, Sv), this.climbed = Pv.below) : this.step < this.lowest && this.downAllowed(Sv) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: zv,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, vv, Sv, "down")))
        }
        const gv = this.step - 1;
        gv >= 0 && this.cleanRun >= (this.climbing ? wv.climbWindows : wv.cleanWindows) && this.upAllowed(gv, Sv) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(gv, vv, Sv, "up"))
      }
      downAllowed(vv) {
        return !(0 === this.step && null !== this.noGain && vv < this.noGain.untilMs) && vv >= this.downUntilMs[this.step]
      }
      upAllowed(vv, zv) {
        return this.upFailures[vv] <= wv.failWaitsMs.length && zv >= this.upUntilMs[vv]
      }
      keepDown(vv, zv, Pv) {
        this.watchAt(this.step), this.downBackoffMs[vv] = 0, this.record(Pv, zv, "down_kept"), 0 === vv && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.Yw(this.step)
      }
      noGainFrom(vv, zv, Pv) {
        var hv, Sv;
        const ev = 0 === vv ? null !== (hv = null === (Sv = this.noGain) || void 0 === Sv ? void 0 : Sv.backoffMs) && void 0 !== hv ? hv : 0 : this.downBackoffMs[vv],
          gv = 0 === ev ? Ov : Math.min(2 * ev, Dv);
        this.downBackoffMs[vv] = gv, this.downUntilMs[vv] = Pv + gv, 0 === vv && (this.noGain = {
          untilMs: Pv + gv,
          backoffMs: gv
        }, this.hooks.noGain(this.noGain)), this.watchAt(vv), this.setStep(vv, zv, Pv, "no_gain")
      }
      failUp(vv, zv, Pv, hv) {
        this.climbing = !1;
        const Sv = ++this.upFailures[vv];
        this.upUntilMs[vv] = Sv <= wv.failWaitsMs.length ? hv + wv.failWaitsMs[Sv - 1] : Number.POSITIVE_INFINITY, this.watchAt(zv), this.setStep(zv, Pv, hv, "up_failed"), this.hooks.upFailed(vv)
      }
      watchAt(vv) {
        this.phase = {
          kind: "watch"
        }, this.climbed = vv === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(vv, zv, Pv, hv) {
        const Sv = vv !== this.step;
        Sv && (this.climbed = null), this.step = vv, this.record(Pv, zv, hv), Sv && (this.slowStartMs = -1, this.resized(Pv), this.hooks.changed(vv))
      }
      record(vv, zv, Pv) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: vv,
          step: this.step,
          fps: Math.round(10 * zv) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: Pv
        })
      }
    }
    var Vv = Pv(8920),
      Uv = Pv(2904),
      Rv = Pv(8924);
    const xv = "autoGraphics",
      tv = 6048e5,
      qv = "startScale";

    function Iv() {
      return (0, pv.P)(hv.c.get("clientEscMenuOptions").pixelScale) * (0, pv.M)()
    }

    function Qv() {
      return (0, pv.w)(Iv())
    }

    function Zv() {
      const vv = Nv.h.getItem(xv);
      return "object" !== typeof vv || null === vv || "string" !== typeof vv.gpu ? null : vv
    }

    function Av(vv) {
      return {
        untilEpochMs: Date.now() + (vv.untilMs - performance.now()),
        backoffMs: vv.backoffMs
      }
    }

    function Lv(vv) {
      return vv ? {
        untilMs: performance.now() + (vv.untilEpochMs - Date.now()),
        backoffMs: vv.backoffMs
      } : null
    }
    let Hv = null;

    function Mv() {
      if (null === Hv) {
        const vv = new URLSearchParams(window.location.search).get("msaa");
        Hv = hv.c.get("clientEscMenuOptions").antiAliasing && ("0" === vv || "1" !== vv && !(0, gv.c)("antiAliasing") && (0, Uv.h)())
      }
      return Hv
    }

    function yv(vv) {
      const zv = "number" === typeof vv ? Date.now() - vv : -1;
      return zv >= 0 && zv < tv
    }
    let Bv = null;

    function Jv() {
      return Bv ??= (0, Sv.getDeviceDefaultPixelScale)(), Ev(Bv)
    }

    function Ev(vv) {
      const zv = hv.c.get("clientEscMenuOptions");
      return zv.pixelSmoothing && !(0, gv.c)("pixelScale") && zv.pixelScale === vv
    }
    let ov = null,
      bv = 0;

    function rv() {
      if (null === ov || bv !== Iv()) {
        var vv;
        bv = Iv();
        const zv = Number(null !== (vv = new URLSearchParams(window.location.search).get(qv)) && void 0 !== vv ? vv : ""),
          Pv = Qv();
        if (zv > 0 && zv <= 1) ov = (0, pv.H)(Pv, Pv[0] / zv);
        else {
          const vv = Zv(),
            zv = (0, pv.H)(Pv, (0, pv.L)(Iv())),
            hv = !(0, Uv.m)() && yv(null === vv || void 0 === vv ? void 0 : vv.heldAt) && (null === vv || void 0 === vv ? void 0 : vv.heldTarget) === Iv() ? null === vv || void 0 === vv ? void 0 : vv.heldN : void 0;
          ov = "number" === typeof hv ? Math.min(zv, (0, pv.H)(Pv, hv)) : zv
        }
      }
      return ov
    }

    function kv(vv, zv) {
      var Pv;
      const hv = zv.indexOf(null !== (Pv = vv.failedUpN) && void 0 !== Pv ? Pv : -1);
      return hv >= 0 && yv(vv.failedUpAt) ? {
        step: hv,
        untilMs: performance.now() + dv.c.stepUp.failWaitsMs[0]
      } : null
    }
    let Xv = null,
      uv = !1,
      vz = "";
    const zz = new Set;

    function Pz() {
      for (const vv of zz) vv()
    }

    function hz() {
      return uv ? null : (Tz(), null === Xv ? (null !== Bv || null !== (0, Sv.peekGpuVendor)() ? Jv() : Ev(1)) ? rv() : null : Jv() ? Xv.currentStep() : null)
    }

    function Sz() {
      const vv = hz();
      if (null === vv) return null;
      const zv = Qv(),
        Pv = zv[Math.min(vv, zv.length - 1)];
      return Pv === ez() ? null : Pv
    }

    function ez() {
      return (0, pv.C)(hv.c.get("clientEscMenuOptions").pixelScale, (0, pv.M)())
    }

    function gz() {
      return null !== Xv && null !== Sz()
    }

    function pz(vv) {
      return zz.add(vv), () => {
        zz.delete(vv)
      }
    }

    function dz(vv, zv, Pv) {
      var hv;
      if (null !== Xv || uv || (0, Uv.m)()) return;
      const Sv = (0, Vv.d)(vv, zv, Pv);
      null !== Sv && (0, Uv.p)(Sv.vendor), vz = `${vv}:${(null===Sv||void 0===Sv?void 0:Sv.renderer)||(null===Sv||void 0===Sv?void 0:Sv.vendor)||""}`, (null === (hv = Zv()) || void 0 === hv ? void 0 : hv.gpu) !== vz && (Nv.h.setItem(xv, {
        gpu: vz
      }), ov = null), lz(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var vv;
          null === (vv = Xv) || void 0 === vv || vv.hidden()
        } catch (zv) {
          mz(), console.error("The quality steps stopped", zv)
        }
      }))
    }
    let Nz = 0;

    function lz() {
      var vv;
      const zv = null !== (vv = Zv()) && void 0 !== vv ? vv : {
          gpu: vz
        },
        Pv = Qv();
      Nz = Iv(), Xv = new Kv({
          changed: Pz,
          Yw: () => {
            Wz({
              heldN: void 0
            })
          },
          Vp: vv => {
            var zv;
            const Pv = Qv()[vv],
              hv = {
                heldN: Pv,
                heldAt: Date.now(),
                heldTarget: Iv()
              };
            (null === (zv = Zv()) || void 0 === zv ? void 0 : zv.failedUpN) === Pv && (hv.failedUpN = void 0), Wz(hv)
          },
          upFailed: vv => {
            Wz({
              failedUpN: Qv()[vv],
              failedUpAt: Date.now()
            })
          },
          noGain: vv => {
            Wz({
              noGain: null === vv ? void 0 : Av(vv)
            })
          }
        }, {
          lowest: Pv.length - 1,
          startStep: rv(),
          noGain: Lv(zv.noGain),
          upWait: kv(zv, Pv)
        }),
        function(vv) {
          const zv = {
            get step() {
              return vv.currentStep()
            },
            get n() {
              var vv;
              return null !== (vv = Sz()) && void 0 !== vv ? vv : ez()
            },
            get scale() {
              var vv;
              return Qv()[0] / (null !== (vv = Sz()) && void 0 !== vv ? vv : ez())
            },
            get msaaOff() {
              return Mv()
            },
            log: vv.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: zv,
            configurable: !0
          })
        }(Xv), Pz()
    }

    function Tz() {
      null !== Xv && Iv() !== Nz && (ov = null, lz())
    }

    function Wz(vv) {
      Nv.h.setItem(xv, {
        ...Zv(),
        ...vv,
        gpu: vz
      })
    }
    let wz = 0,
      az = 0,
      sz = 0,
      Cz = !1;

    function iz() {
      wz++
    }

    function cz() {
      return wz
    }

    function Gz(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Tz(), null !== Xv && (vv - sz >= 1e3 && (Cz = wz - az > dv.c.sceneChange.meshesPerSecond, az = wz, sz = vv), Rv.b.isHeld() ? Xv.paused(vv) : Xv.frame(vv, zv, Pv && !document.hidden && Jv(), Cz || hv > 0 || (0, ev.o)()))
    }

    function mz() {
      if (!uv) {
        uv = !0, null !== Xv && (Xv = null, Wz({
          noGain: void 0
        }));
        try {
          Pz()
        } catch (vv) {
          console.error("The quality steps' resize to the player's n failed", vv)
        }
      }
    }

    function jz() {
      var vv;
      null === (vv = Xv) || void 0 === vv || vv.resized(performance.now())
    }
  },
  8920: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(73),
      Sv = Pv(101);

    function ev(vv, zv, Pv) {
      if ("webgpu" === vv) return Pv ? ((0, hv.seedGpuVendor)(Pv), {
        vendor: Pv,
        renderer: ""
      }) : null;
      try {
        const Pv = "webgl" === vv ? zv.getContext("webgl2") : zv.getContext("webgl");
        "webgl" === vv && Pv && (0, Sv.w)(Pv);
        const ev = null === Pv || void 0 === Pv ? void 0 : Pv.getExtension("WEBGL_debug_renderer_info");
        if (Pv && ev) {
          const vv = String(Pv.getParameter(ev.UNMASKED_VENDOR_WEBGL)),
            zv = String(Pv.getParameter(ev.UNMASKED_RENDERER_WEBGL));
          return (0, hv.seedGpuVendor)(vv), (0, Sv.B)(vv, zv), {
            vendor: vv,
            renderer: zv
          }
        }
        Pv && (0, Sv.B)(String(Pv.getParameter(Pv.VENDOR)), String(Pv.getParameter(Pv.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);