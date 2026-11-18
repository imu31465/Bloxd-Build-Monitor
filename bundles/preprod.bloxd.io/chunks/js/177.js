export const id = 177;
export const ids = [177];
export const modules = {
  8369: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      e: () => Zy
    });
    var Uy = Wy(33);
    const hy = new Map,
      fy = yb => `${yb}Chosen`;

    function Zy(yb) {
      hy.set(yb, !0), Uy.e.setItem(fy(yb), !0)
    }

    function cb(yb) {
      let bb = hy.get(yb);
      return void 0 === bb && (bb = !0 === Uy.e.getItem(fy(yb)), hy.set(yb, bb)), bb
    }
  },
  8385: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Qy,
      g: () => Eb,
      j: () => Sb,
      m: () => mW,
      o: () => Ub,
      r: () => fb,
      v: () => cW,
      x: () => lb,
      y: () => Zb
    });
    var Uy = Wy(19),
      hy = Wy(94),
      fy = Wy(1458),
      Zy = Wy(8369),
      cb = Wy(2269),
      Py = Wy(2276),
      oy = Wy(33);
    const {
      windows: By,
      target: Ky,
      stepDown: ey,
      stepUp: qb,
      noGain: sy
    } = Py.c, Sy = 1e3 / 60 * 1.08, Ey = 1e3 / 55, ly = 1e3 / 45, mb = 1e3 / 30 * .92, Cy = 1e3 / 30 * 1.08;
    class Ty {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(yb) {
        const bb = yb - this.lastMs;
        this.lastMs = yb;
        const Wy = function(yb) {
          if (yb <= 0 || yb > 100) return -1;
          if (yb <= Sy) return 0;
          if (yb >= Ey && yb <= ly) return 1;
          return yb >= mb && yb <= Cy ? 2 : -1
        }(bb);
        Wy !== this.runBand && (this.runBand = Wy, this.runLength = 0), Wy < 0 || ++this.runLength < 3 || (0 === Wy ? this.votes60++ : 1 === Wy ? (this.votesMid++, this.sumMidMs += bb) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const Vy = By.windowMs,
      Jy = By.settleMs,
      gb = By.graceMs,
      Gy = By.minIntervals,
      Oy = 1e3 * Gy / Vy,
      Ry = sy.backoffMs,
      vb = sy.maxMs;
    class ib {
      constructor(yb, bb) {
        let {
          lowest: Wy,
          startStep: Uy = 0,
          noGain: hy = null,
          upWait: fy = null
        } = bb;
        this.hooks = yb, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new Ty, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = Ky.maxFps, this.lowest = Wy, this.step = Math.min(Uy, Wy), this.noGain = hy, this.climbing = this.step > 0;
        const Zy = Wy + 1;
        this.downUntilMs = new Array(Zy).fill(0), this.downBackoffMs = new Array(Zy).fill(0), this.upFailures = new Array(Zy).fill(0), this.upUntilMs = new Array(Zy).fill(0), null !== fy && fy.step >= 0 && fy.step < Zy && (this.upUntilMs[fy.step] = fy.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(yb), !Wy) return void this.qh(yb);
        const hy = yb - this.lastFrameMs,
          fy = this.resizeStall(yb);
        if (hy > 2e3 && !fy && this.qh(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = yb, this.quietUntilMs = Math.max(this.quietUntilMs, yb + gb), this.graceUntilMs = yb + gb, this.windowStartMs = -1, void(this.slowStartMs = -1);
        hy > 500 && (this.hitch(yb), fy && (this.slowStartMs = -1)), this.lastFrameMs = yb, yb >= this.quietUntilMs && this.countWindow(yb, bb, Uy) || bb && yb >= this.graceUntilMs && this.countSlow(yb)
      }
      countWindow(yb, bb, Wy) {
        if (this.windowStartMs < 0) return !!bb && (this.windowStartMs = yb, this.lastDrawnMs = yb, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = Wy, !1);
        if (this.windowMasked ||= Wy, !bb) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, yb - this.lastDrawnMs), this.lastDrawnMs = yb;
        const Uy = yb - this.windowStartMs;
        if (Uy < Vy) return !1;
        const hy = this.windowIntervals,
          fy = 1e3 * hy / Uy,
          Zy = this.windowHeld,
          cb = this.windowMaxIntervalMs,
          Py = this.windowMasked;
        if (this.windowStartMs = -1, hy < Gy) return !1;
        this.slowStartMs = -1;
        const oy = this.targetFps(),
          By = fy >= oy * Ky.cleanShare && cb <= Ky.cleanMaxIntervalMs && (0 === Zy || fy >= oy);
        return this.decide(fy, By, fy < oy * Ky.dropShare, Py, yb), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Ky.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(yb) {
        if (this.slowStartMs < 0) return this.slowStartMs = yb, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const bb = yb - this.slowStartMs;
        if (bb < 1e4) return;
        const Wy = 1e3 * this.slowIntervals / bb;
        this.slowStartMs = -1, this.countSlow(yb), Wy < Oy && (this.windowStartMs = -1, this.decide(Wy, !1, !0, !1, yb))
      }
      resizeStall(yb) {
        return this.lastFrameMs - this.resizedMs <= Jy && yb - this.lastFrameMs <= 15e3
      }
      resized(yb) {
        this.resizedMs = yb, this.hitch(yb)
      }
      hidden() {
        this.qh(this.lastFrameMs)
      }
      qh(yb) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(yb))
      }
      hitch(yb) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, yb + Jy)
      }
      left(yb) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const bb = this.phase;
        "watch" !== bb.kind && (this.phase = {
          kind: "watch"
        }, "down" === bb.kind && (this.downUntilMs[bb.from] = Math.max(this.downUntilMs[bb.from], yb + Ry)), this.setStep(bb.from, 0, yb, "left"), "up" === bb.kind && (this.climbed = bb.fromClimbed))
      }
      decide(yb, bb, Wy, Uy, hy) {
        const fy = this.phase;
        switch (fy.kind) {
          case "watch":
            return void this.watch(yb, bb, Wy, Uy, hy);
          case "down":
            if (fy.judged++, fy.fpsSum += yb, fy.dropped ||= Wy, fy.judged < ey.judgeWindows) return;
            return void(!fy.dropped || fy.fpsSum / fy.judged >= fy.fromFps * ey.keepGain ? this.keepDown(fy.from, fy.fpsSum / fy.judged, hy) : this.noGainFrom(fy.from, fy.fromFps, hy));
          case "up":
            return bb ? void(++fy.judged >= qb.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: fy.from,
              heldWindows: 0,
              below: fy.fromClimbed
            }, this.record(hy, yb, "up_kept"))) : (Uy ? (this.watchAt(fy.from), this.setStep(fy.from, yb, hy, "spoiled")) : this.failUp(this.step, fy.from, yb, hy), void(this.climbed = fy.fromClimbed))
        }
      }
      watch(yb, bb, Wy, Uy, hy) {
        const fy = this.climbed;
        if (null !== fy && !Wy && !Uy && ++fy.heldWindows >= qb.heldWindows && (this.climbed = null, this.record(hy, yb, "kW"), this.hooks.kW(this.step)), Wy ? (this.dropRun++, this.dropRunFpsSum += yb, this.dropRunMasked ||= Uy) : this.resetDropRun(), Uy && bb || (this.cleanRun = bb ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? ey.maskedWindows : ey.dropWindows)) {
          const bb = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const Wy = this.climbed;
          return void(null !== Wy ? (this.failUp(this.step, Wy.from, yb, hy), this.climbed = Wy.below) : this.step < this.lowest && this.downAllowed(hy) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: bb,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, yb, hy, "down")))
        }
        const Zy = this.step - 1;
        Zy >= 0 && this.cleanRun >= (this.climbing ? qb.climbWindows : qb.cleanWindows) && this.upAllowed(Zy, hy) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Zy, yb, hy, "up"))
      }
      downAllowed(yb) {
        return !(0 === this.step && null !== this.noGain && yb < this.noGain.untilMs) && yb >= this.downUntilMs[this.step]
      }
      upAllowed(yb, bb) {
        return this.upFailures[yb] <= qb.failWaitsMs.length && bb >= this.upUntilMs[yb]
      }
      keepDown(yb, bb, Wy) {
        this.watchAt(this.step), this.downBackoffMs[yb] = 0, this.record(Wy, bb, "down_kept"), 0 === yb && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.DW(this.step)
      }
      noGainFrom(yb, bb, Wy) {
        var Uy, hy;
        const fy = 0 === yb ? null !== (Uy = null === (hy = this.noGain) || void 0 === hy ? void 0 : hy.backoffMs) && void 0 !== Uy ? Uy : 0 : this.downBackoffMs[yb],
          Zy = 0 === fy ? Ry : Math.min(2 * fy, vb);
        this.downBackoffMs[yb] = Zy, this.downUntilMs[yb] = Wy + Zy, 0 === yb && (this.noGain = {
          untilMs: Wy + Zy,
          backoffMs: Zy
        }, this.hooks.noGain(this.noGain)), this.watchAt(yb), this.setStep(yb, bb, Wy, "no_gain")
      }
      failUp(yb, bb, Wy, Uy) {
        this.climbing = !1;
        const hy = ++this.upFailures[yb];
        this.upUntilMs[yb] = hy <= qb.failWaitsMs.length ? Uy + qb.failWaitsMs[hy - 1] : Number.POSITIVE_INFINITY, this.watchAt(bb), this.setStep(bb, Wy, Uy, "up_failed"), this.hooks.upFailed(yb)
      }
      watchAt(yb) {
        this.phase = {
          kind: "watch"
        }, this.climbed = yb === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(yb, bb, Wy, Uy) {
        const hy = yb !== this.step;
        hy && (this.climbed = null), this.step = yb, this.record(Wy, bb, Uy), hy && (this.slowStartMs = -1, this.resized(Wy), this.hooks.changed(yb))
      }
      record(yb, bb, Wy) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: yb,
          step: this.step,
          fps: Math.round(10 * bb) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: Wy
        })
      }
    }
    var My = Wy(8390),
      Yy = Wy(2435);
    const Xy = "autoGraphics",
      ny = 6048e5,
      uy = "startScale";

    function rb() {
      return (0, cb.D)(Uy.d.get("clientEscMenuOptions").pixelScale) * (0, cb.j)()
    }

    function Hy() {
      return (0, cb.l)(rb())
    }

    function ab() {
      const yb = oy.e.getItem(Xy);
      return "object" !== typeof yb || null === yb || "string" !== typeof yb.gpu ? null : yb
    }

    function Fy(yb) {
      return {
        untilEpochMs: Date.now() + (yb.untilMs - performance.now()),
        backoffMs: yb.backoffMs
      }
    }

    function py(yb) {
      return yb ? {
        untilMs: performance.now() + (yb.untilEpochMs - Date.now()),
        backoffMs: yb.backoffMs
      } : null
    }
    let Ly = null;

    function Qy() {
      if (null === Ly) {
        const yb = new URLSearchParams(window.location.search).get("msaa");
        Ly = Uy.d.get("clientEscMenuOptions").antiAliasing && ("0" === yb || "1" !== yb && !(0, Zy.c)("antiAliasing") && (0, Yy.g)())
      }
      return Ly
    }

    function jb(yb) {
      const bb = "number" === typeof yb ? Date.now() - yb : -1;
      return bb >= 0 && bb < ny
    }
    let Dy = null;

    function tb() {
      return Dy ??= (0, hy.getDeviceDefaultPixelScale)(), wy(Dy)
    }

    function wy(yb) {
      const bb = Uy.d.get("clientEscMenuOptions");
      return bb.pixelSmoothing && !(0, Zy.c)("pixelScale") && bb.pixelScale === yb
    }
    let kb = null,
      Ny = 0;

    function zb() {
      if (null === kb || Ny !== rb()) {
        var yb;
        Ny = rb();
        const bb = Number(null !== (yb = new URLSearchParams(window.location.search).get(uy)) && void 0 !== yb ? yb : ""),
          Wy = Hy();
        if (bb > 0 && bb <= 1) kb = (0, cb.w)(Wy, Wy[0] / bb);
        else {
          const yb = ab(),
            bb = (0, cb.w)(Wy, (0, cb.x)(rb())),
            Uy = !(0, Yy.l)() && jb(null === yb || void 0 === yb ? void 0 : yb.heldAt) && (null === yb || void 0 === yb ? void 0 : yb.heldTarget) === rb() ? null === yb || void 0 === yb ? void 0 : yb.heldN : void 0;
          kb = "number" === typeof Uy ? Math.min(bb, (0, cb.w)(Wy, Uy)) : bb
        }
      }
      return kb
    }

    function Iy(yb, bb) {
      var Wy;
      const Uy = bb.indexOf(null !== (Wy = yb.failedUpN) && void 0 !== Wy ? Wy : -1);
      return Uy >= 0 && jb(yb.failedUpAt) ? {
        step: Uy,
        untilMs: performance.now() + Py.c.stepUp.failWaitsMs[0]
      } : null
    }
    let xb = null,
      Ay = !1,
      dy = "";
    const yW = new Set;

    function bW() {
      for (const yb of yW) yb()
    }

    function Wb() {
      return Ay ? null : (Bb(), null === xb ? (null !== Dy || null !== (0, hy.peekGpuVendor)() ? tb() : wy(1)) ? zb() : null : tb() ? xb.currentStep() : null)
    }

    function Ub() {
      const yb = Wb();
      if (null === yb) return null;
      const bb = Hy(),
        Wy = bb[Math.min(yb, bb.length - 1)];
      return Wy === hb() ? null : Wy
    }

    function hb() {
      return (0, cb.q)(Uy.d.get("clientEscMenuOptions").pixelScale, (0, cb.j)())
    }

    function fb() {
      return null !== xb && null !== Ub()
    }

    function Zb(yb) {
      return yW.add(yb), () => {
        yW.delete(yb)
      }
    }

    function cW(yb, bb, Wy) {
      var Uy;
      if (null !== xb || Ay || (0, Yy.l)()) return;
      const hy = (0, My.b)(yb, bb, Wy);
      null !== hy && (0, Yy.p)(hy.vendor), dy = `${yb}:${(null===hy||void 0===hy?void 0:hy.renderer)||(null===hy||void 0===hy?void 0:hy.vendor)||""}`, (null === (Uy = ab()) || void 0 === Uy ? void 0 : Uy.gpu) !== dy && (oy.e.setItem(Xy, {
        gpu: dy
      }), kb = null), ob(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var yb;
          null === (yb = xb) || void 0 === yb || yb.hidden()
        } catch (bb) {
          lb(), console.error("The quality steps stopped", bb)
        }
      }))
    }
    let Pb = 0;

    function ob() {
      var yb;
      const bb = null !== (yb = ab()) && void 0 !== yb ? yb : {
          gpu: dy
        },
        Wy = Hy();
      Pb = rb(), xb = new ib({
          changed: bW,
          DW: () => {
            Kb({
              heldN: void 0
            })
          },
          kW: yb => {
            var bb;
            const Wy = Hy()[yb],
              Uy = {
                heldN: Wy,
                heldAt: Date.now(),
                heldTarget: rb()
              };
            (null === (bb = ab()) || void 0 === bb ? void 0 : bb.failedUpN) === Wy && (Uy.failedUpN = void 0), Kb(Uy)
          },
          upFailed: yb => {
            Kb({
              failedUpN: Hy()[yb],
              failedUpAt: Date.now()
            })
          },
          noGain: yb => {
            Kb({
              noGain: null === yb ? void 0 : Fy(yb)
            })
          }
        }, {
          lowest: Wy.length - 1,
          startStep: zb(),
          noGain: py(bb.noGain),
          upWait: Iy(bb, Wy)
        }),
        function(yb) {
          const bb = {
            get step() {
              return yb.currentStep()
            },
            get n() {
              var yb;
              return null !== (yb = Ub()) && void 0 !== yb ? yb : hb()
            },
            get scale() {
              var yb;
              return Hy()[0] / (null !== (yb = Ub()) && void 0 !== yb ? yb : hb())
            },
            get msaaOff() {
              return Qy()
            },
            log: yb.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: bb,
            configurable: !0
          })
        }(xb), bW()
    }

    function Bb() {
      null !== xb && rb() !== Pb && (kb = null, ob())
    }

    function Kb(yb) {
      oy.e.setItem(Xy, {
        ...ab(),
        ...yb,
        gpu: dy
      })
    }
    let eb = 0,
      qW = 0,
      sb = !1;

    function Sb() {
      eb++
    }

    function Eb(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Bb(), null !== xb && (yb - qW >= 1e3 && (sb = eb > Py.c.sceneChange.meshesPerSecond, eb = 0, qW = yb), xb.frame(yb, bb, Wy && !document.hidden && tb(), sb || Uy > 0 || (0, fy.n)()))
    }

    function lb() {
      if (!Ay) {
        Ay = !0, null !== xb && (xb = null, Kb({
          noGain: void 0
        }));
        try {
          bW()
        } catch (yb) {
          console.error("The quality steps' resize to the player's n failed", yb)
        }
      }
    }

    function mW() {
      var yb;
      null === (yb = xb) || void 0 === yb || yb.resized(performance.now())
    }
  },
  8390: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(94),
      hy = Wy(121);

    function fy(yb, bb, Wy) {
      if ("webgpu" === yb) return Wy ? ((0, Uy.seedGpuVendor)(Wy), {
        vendor: Wy,
        renderer: ""
      }) : null;
      try {
        const Wy = "webgl" === yb ? bb.getContext("webgl2") : bb.getContext("webgl"),
          fy = null === Wy || void 0 === Wy ? void 0 : Wy.getExtension("WEBGL_debug_renderer_info");
        if (Wy && fy) {
          const yb = String(Wy.getParameter(fy.UNMASKED_VENDOR_WEBGL)),
            bb = String(Wy.getParameter(fy.UNMASKED_RENDERER_WEBGL));
          return (0, Uy.seedGpuVendor)(yb), (0, hy.s)(yb, bb), {
            vendor: yb,
            renderer: bb
          }
        }
        Wy && (0, hy.s)(String(Wy.getParameter(Wy.VENDOR)), String(Wy.getParameter(Wy.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);