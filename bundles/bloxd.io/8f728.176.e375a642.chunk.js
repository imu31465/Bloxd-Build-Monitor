export const id = 176;
export const ids = [176];
export const modules = {
  8147: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => uc
    });
    var Vc = nc(51);
    const Ic = new Map,
      rB = cB => `${cB}Chosen`;

    function uc(cB) {
      Ic.set(cB, !0), Vc.h.setItem(rB(cB), !0)
    }

    function sc(cB) {
      let Bc = Ic.get(cB);
      return void 0 === Bc && (Bc = !0 === Vc.h.getItem(rB(cB)), Ic.set(cB, Bc)), Bc
    }
  },
  8157: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Hc,
      f: () => zn,
      h: () => yn,
      k: () => hB,
      m: () => rn,
      o: () => sB,
      q: () => PB,
      t: () => pB,
      w: () => MB
    });
    var Vc = nc(27),
      Ic = nc(222),
      rB = nc(107),
      uc = nc(1464),
      sc = nc(8147),
      Mc = nc(2208),
      Pc = nc(2215),
      qB = nc(51);
    const {
      windows: Oc,
      target: Tc,
      stepDown: fc,
      stepUp: mB,
      noGain: ec
    } = Pc.d, tB = 1e3 / 60 * 1.08, Sc = 1e3 / 55, yB = 1e3 / 45, zB = 1e3 / 30 * .92, pc = 1e3 / 30 * 1.08;
    class hc {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(cB) {
        const Bc = cB - this.lastMs;
        this.lastMs = cB;
        const nc = function(cB) {
          if (cB <= 0 || cB > 100) return -1;
          if (cB <= tB) return 0;
          if (cB >= Sc && cB <= yB) return 1;
          return cB >= zB && cB <= pc ? 2 : -1
        }(Bc);
        nc !== this.runBand && (this.runBand = nc, this.runLength = 0), nc < 0 || ++this.runLength < 3 || (0 === nc ? this.votes60++ : 1 === nc ? (this.votesMid++, this.sumMidMs += Bc) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const aB = Oc.windowMs,
      lc = Oc.settleMs,
      Yc = Oc.graceMs,
      Lc = Oc.minIntervals,
      gB = 1e3 * Lc / aB,
      Uc = ec.backoffMs,
      bB = ec.maxMs;
    class Zc {
      constructor(cB, Bc) {
        let {
          lowest: nc,
          startStep: Vc = 0,
          noGain: Ic = null,
          upWait: rB = null
        } = Bc;
        this.hooks = cB, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new hc, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = Tc.maxFps, this.lowest = nc, this.step = Math.min(Vc, nc), this.noGain = Ic, this.climbing = this.step > 0;
        const uc = nc + 1;
        this.downUntilMs = new Array(uc).fill(0), this.downBackoffMs = new Array(uc).fill(0), this.upFailures = new Array(uc).fill(0), this.upUntilMs = new Array(uc).fill(0), null !== rB && rB.step >= 0 && rB.step < uc && (this.upUntilMs[rB.step] = rB.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(cB), !nc) return void this.OV(cB);
        const Ic = cB - this.lastFrameMs,
          rB = this.resizeStall(cB);
        if (Ic > 2e3 && !rB && this.OV(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = cB, this.quietUntilMs = Math.max(this.quietUntilMs, cB + Yc), this.graceUntilMs = cB + Yc, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Ic > 500 && (this.hitch(cB), rB && (this.slowStartMs = -1)), this.lastFrameMs = cB, cB >= this.quietUntilMs && this.countWindow(cB, Bc, Vc) || Bc && cB >= this.graceUntilMs && this.countSlow(cB)
      }
      countWindow(cB, Bc, nc) {
        if (this.windowStartMs < 0) return !!Bc && (this.windowStartMs = cB, this.lastDrawnMs = cB, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = nc, !1);
        if (this.windowMasked ||= nc, !Bc) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, cB - this.lastDrawnMs), this.lastDrawnMs = cB;
        const Vc = cB - this.windowStartMs;
        if (Vc < aB) return !1;
        const Ic = this.windowIntervals,
          rB = 1e3 * Ic / Vc,
          uc = this.windowHeld,
          sc = this.windowMaxIntervalMs,
          Mc = this.windowMasked;
        if (this.windowStartMs = -1, Ic < Lc) return !1;
        this.slowStartMs = -1;
        const Pc = this.targetFps(),
          qB = rB >= Pc * Tc.cleanShare && sc <= Tc.cleanMaxIntervalMs && (0 === uc || rB >= Pc);
        return this.decide(rB, qB, rB < Pc * Tc.dropShare, Mc, cB), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Tc.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(cB) {
        if (this.slowStartMs < 0) return this.slowStartMs = cB, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const Bc = cB - this.slowStartMs;
        if (Bc < 1e4) return;
        const nc = 1e3 * this.slowIntervals / Bc;
        this.slowStartMs = -1, this.countSlow(cB), nc < gB && (this.windowStartMs = -1, this.decide(nc, !1, !0, !1, cB))
      }
      resizeStall(cB) {
        return this.lastFrameMs - this.resizedMs <= lc && cB - this.lastFrameMs <= 15e3
      }
      resized(cB) {
        this.resizedMs = cB, this.hitch(cB)
      }
      hidden() {
        this.OV(this.lastFrameMs)
      }
      OV(cB) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(cB))
      }
      hitch(cB) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, cB + lc)
      }
      left(cB) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const Bc = this.phase;
        "watch" !== Bc.kind && (this.phase = {
          kind: "watch"
        }, "down" === Bc.kind && (this.downUntilMs[Bc.from] = Math.max(this.downUntilMs[Bc.from], cB + Uc)), this.setStep(Bc.from, 0, cB, "left"), "up" === Bc.kind && (this.climbed = Bc.fromClimbed))
      }
      decide(cB, Bc, nc, Vc, Ic) {
        const rB = this.phase;
        switch (rB.kind) {
          case "watch":
            return void this.watch(cB, Bc, nc, Vc, Ic);
          case "down":
            if (rB.judged++, rB.fpsSum += cB, rB.dropped ||= nc, rB.judged < fc.judgeWindows) return;
            return void(!rB.dropped || rB.fpsSum / rB.judged >= rB.fromFps * fc.keepGain ? this.keepDown(rB.from, rB.fpsSum / rB.judged, Ic) : this.noGainFrom(rB.from, rB.fromFps, Ic));
          case "up":
            return Bc ? void(++rB.judged >= mB.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: rB.from,
              heldWindows: 0,
              below: rB.fromClimbed
            }, this.record(Ic, cB, "up_kept"))) : (Vc ? (this.watchAt(rB.from), this.setStep(rB.from, cB, Ic, "spoiled")) : this.failUp(this.step, rB.from, cB, Ic), void(this.climbed = rB.fromClimbed))
        }
      }
      watch(cB, Bc, nc, Vc, Ic) {
        const rB = this.climbed;
        if (null !== rB && !nc && !Vc && ++rB.heldWindows >= mB.heldWindows && (this.climbed = null, this.record(Ic, cB, "XB"), this.hooks.XB(this.step)), nc ? (this.dropRun++, this.dropRunFpsSum += cB, this.dropRunMasked ||= Vc) : this.resetDropRun(), Vc && Bc || (this.cleanRun = Bc ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? fc.maskedWindows : fc.dropWindows)) {
          const Bc = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const nc = this.climbed;
          return void(null !== nc ? (this.failUp(this.step, nc.from, cB, Ic), this.climbed = nc.below) : this.step < this.lowest && this.downAllowed(Ic) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Bc,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, cB, Ic, "down")))
        }
        const uc = this.step - 1;
        uc >= 0 && this.cleanRun >= (this.climbing ? mB.climbWindows : mB.cleanWindows) && this.upAllowed(uc, Ic) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(uc, cB, Ic, "up"))
      }
      downAllowed(cB) {
        return !(0 === this.step && null !== this.noGain && cB < this.noGain.untilMs) && cB >= this.downUntilMs[this.step]
      }
      upAllowed(cB, Bc) {
        return this.upFailures[cB] <= mB.failWaitsMs.length && Bc >= this.upUntilMs[cB]
      }
      keepDown(cB, Bc, nc) {
        this.watchAt(this.step), this.downBackoffMs[cB] = 0, this.record(nc, Bc, "down_kept"), 0 === cB && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.kept(this.step)
      }
      noGainFrom(cB, Bc, nc) {
        var Vc, Ic;
        const rB = 0 === cB ? null !== (Vc = null === (Ic = this.noGain) || void 0 === Ic ? void 0 : Ic.backoffMs) && void 0 !== Vc ? Vc : 0 : this.downBackoffMs[cB],
          uc = 0 === rB ? Uc : Math.min(2 * rB, bB);
        this.downBackoffMs[cB] = uc, this.downUntilMs[cB] = nc + uc, 0 === cB && (this.noGain = {
          untilMs: nc + uc,
          backoffMs: uc
        }, this.hooks.noGain(this.noGain)), this.watchAt(cB), this.setStep(cB, Bc, nc, "no_gain")
      }
      failUp(cB, Bc, nc, Vc) {
        this.climbing = !1;
        const Ic = ++this.upFailures[cB];
        this.upUntilMs[cB] = Ic <= mB.failWaitsMs.length ? Vc + mB.failWaitsMs[Ic - 1] : Number.POSITIVE_INFINITY, this.watchAt(Bc), this.setStep(Bc, nc, Vc, "up_failed"), this.hooks.upFailed(cB)
      }
      watchAt(cB) {
        this.phase = {
          kind: "watch"
        }, this.climbed = cB === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(cB, Bc, nc, Vc) {
        const Ic = cB !== this.step;
        Ic && (this.climbed = null), this.step = cB, this.record(nc, Bc, Vc), Ic && (this.slowStartMs = -1, this.resized(nc), this.hooks.changed(cB))
      }
      record(cB, Bc, nc) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: cB,
          step: this.step,
          fps: Math.round(10 * Bc) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: nc
        })
      }
    }
    var Qc = nc(8160),
      Cc = nc(8166);
    const vB = "autoGraphics",
      Dc = 6048e5,
      Nc = "startScale";

    function Ec() {
      return (0, Mc.D)(Vc.d.get("clientEscMenuOptions").pixelScale) * (0, Mc.j)()
    }

    function oc() {
      return (0, Mc.n)(Ec())
    }

    function Wc() {
      const cB = qB.h.getItem(vB);
      return "object" !== typeof cB || null === cB || "string" !== typeof cB.gpu ? null : cB
    }

    function wc(cB) {
      return {
        untilEpochMs: Date.now() + (cB.untilMs - performance.now()),
        backoffMs: cB.backoffMs
      }
    }

    function kB(cB) {
      return cB ? {
        untilMs: performance.now() + (cB.untilEpochMs - Date.now()),
        backoffMs: cB.backoffMs
      } : null
    }
    let Xc = null;

    function Hc() {
      if (null === Xc) {
        const cB = new URLSearchParams(window.location.search).get("msaa");
        Xc = Vc.d.get("clientEscMenuOptions").antiAliasing && ("0" === cB || "1" !== cB && (!(0, sc.d)("antiAliasing") && (0, Cc.e)() || function() {
          var cB;
          return Fc(null === (cB = Wc()) || void 0 === cB ? void 0 : cB.msaaOffAt) && !(0, Cc.m)() && Jc() && Rc()
        }()))
      }
      return Xc
    }

    function Fc(cB) {
      const Bc = "number" === typeof cB ? Date.now() - cB : -1;
      return Bc >= 0 && Bc < Dc
    }

    function Jc() {
      return Vc.d.get("clientEscMenuOptions").antiAliasing && (0, Ic.j)() && !(0, sc.d)("antiAliasing")
    }
    let jB = null;

    function Rc() {
      return jB ??= (0, rB.getDeviceDefaultPixelScale)(), iB(jB)
    }

    function iB(cB) {
      const Bc = Vc.d.get("clientEscMenuOptions");
      return Bc.pixelSmoothing && !(0, sc.d)("pixelScale") && Bc.pixelScale === cB
    }
    let Kc = null,
      xB = 0;

    function dc() {
      if (null === Kc || xB !== Ec()) {
        var cB;
        xB = Ec();
        const Bc = Number(null !== (cB = new URLSearchParams(window.location.search).get(Nc)) && void 0 !== cB ? cB : ""),
          nc = oc();
        if (Bc > 0 && Bc <= 1) Kc = (0, Mc.u)(nc, nc[0] / Bc);
        else {
          const cB = Wc(),
            Bc = (0, Mc.u)(nc, (0, Mc.v)(Ec())),
            Vc = !(0, Cc.m)() && Fc(null === cB || void 0 === cB ? void 0 : cB.heldAt) && (null === cB || void 0 === cB ? void 0 : cB.heldTarget) === Ec() ? null === cB || void 0 === cB ? void 0 : cB.heldN : void 0;
          Kc = "number" === typeof Vc ? Math.min(Bc, (0, Mc.u)(nc, Vc)) : Bc
        }
      }
      return Kc
    }

    function Ac(cB, Bc) {
      var nc;
      const Vc = Bc.indexOf(null !== (nc = cB.failedUpN) && void 0 !== nc ? nc : -1);
      return Vc >= 0 && Fc(cB.failedUpAt) ? {
        step: Vc,
        untilMs: performance.now() + Pc.d.stepUp.failWaitsMs[0]
      } : null
    }
    let Gc = null,
      cn = !1,
      BB = "";
    const nB = new Set;

    function VB() {
      for (const cB of nB) cB()
    }

    function IB() {
      return cn ? null : (fB(), null === Gc ? (null !== jB || null !== (0, rB.peekGpuVendor)() ? Rc() : iB(1)) ? dc() : null : Rc() ? Gc.currentStep() : null)
    }

    function rn() {
      const cB = IB();
      if (null === cB) return null;
      const Bc = oc(),
        nc = Bc[Math.min(cB, Bc.length - 1)];
      return nc === uB() ? null : nc
    }

    function uB() {
      return (0, Mc.s)(Vc.d.get("clientEscMenuOptions").pixelScale, (0, Mc.j)())
    }

    function sB() {
      return null !== Gc && null !== rn()
    }

    function MB(cB) {
      return nB.add(cB), () => {
        nB.delete(cB)
      }
    }

    function PB(cB, Bc, nc) {
      var Vc;
      if (null !== Gc || cn || (0, Cc.m)()) return;
      qn = Hc();
      const Ic = (0, Qc.e)(cB, Bc, nc);
      null !== Ic && (0, Cc.o)(Ic.vendor), BB = `${cB}:${(null===Ic||void 0===Ic?void 0:Ic.renderer)||(null===Ic||void 0===Ic?void 0:Ic.vendor)||""}`, (null === (Vc = Wc()) || void 0 === Vc ? void 0 : Vc.gpu) !== BB && (qB.h.setItem(vB, {
        gpu: BB
      }), Kc = null), TB(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var cB;
          null === (cB = Gc) || void 0 === cB || cB.hidden()
        } catch (Bc) {
          pB(), console.error("The quality steps stopped", Bc)
        }
      }))
    }
    let qn = !1,
      OB = 0;

    function TB() {
      var cB;
      const Bc = null !== (cB = Wc()) && void 0 !== cB ? cB : {
          gpu: BB
        },
        nc = oc();
      OB = Ec(), Gc = new Zc({
          changed: VB,
          kept: cB => {
            mn(oc()[cB] > uB() && Jc() ? {
              msaaOffAt: Date.now(),
              heldN: void 0
            } : {
              heldN: void 0
            })
          },
          XB: cB => {
            var Bc;
            const nc = oc()[cB],
              Vc = {
                heldN: nc,
                heldAt: Date.now(),
                heldTarget: Ec()
              };
            (null === (Bc = Wc()) || void 0 === Bc ? void 0 : Bc.failedUpN) === nc && (Vc.failedUpN = void 0), mn(nc > uB() || qn ? Vc : {
              ...Vc,
              msaaOffAt: void 0
            })
          },
          upFailed: cB => {
            mn({
              failedUpN: oc()[cB],
              failedUpAt: Date.now()
            })
          },
          noGain: cB => {
            mn({
              noGain: null === cB ? void 0 : wc(cB)
            })
          }
        }, {
          lowest: nc.length - 1,
          startStep: dc(),
          noGain: kB(Bc.noGain),
          upWait: Ac(Bc, nc)
        }),
        function(cB) {
          const Bc = {
            get step() {
              return cB.currentStep()
            },
            get n() {
              var cB;
              return null !== (cB = rn()) && void 0 !== cB ? cB : uB()
            },
            get scale() {
              var cB;
              return oc()[0] / (null !== (cB = rn()) && void 0 !== cB ? cB : uB())
            },
            get msaaOff() {
              return Hc()
            },
            log: cB.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Bc,
            configurable: !0
          })
        }(Gc), VB()
    }

    function fB() {
      null !== Gc && Ec() !== OB && (Kc = null, TB())
    }

    function mn(cB) {
      qB.h.setItem(vB, {
        ...Wc(),
        ...cB,
        gpu: BB
      })
    }
    let eB = 0,
      tn = 0,
      SB = !1;

    function yn() {
      eB++
    }

    function zn(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      fB(), null !== Gc && (cB - tn >= 1e3 && (SB = eB > Pc.d.sceneChange.meshesPerSecond, eB = 0, tn = cB), Gc.frame(cB, Bc, nc && !document.hidden && Rc(), SB || Vc > 0 || (0, uc.p)()))
    }

    function pB() {
      if (!cn) {
        cn = !0, null !== Gc && (Gc = null, mn({
          msaaOffAt: void 0,
          noGain: void 0
        }));
        try {
          VB()
        } catch (cB) {
          console.error("The quality steps' resize to the player's n failed", cB)
        }
      }
    }

    function hB() {
      var cB;
      null === (cB = Gc) || void 0 === cB || cB.resized(performance.now())
    }
  },
  8160: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB
    });
    var Vc = nc(107),
      Ic = nc(142);

    function rB(cB, Bc, nc) {
      if ("webgpu" === cB) return nc ? ((0, Vc.seedGpuVendor)(nc), {
        vendor: nc,
        renderer: ""
      }) : null;
      try {
        const nc = "webgl" === cB ? Bc.getContext("webgl2") : Bc.getContext("webgl"),
          rB = null === nc || void 0 === nc ? void 0 : nc.getExtension("WEBGL_debug_renderer_info");
        if (nc && rB) {
          const cB = String(nc.getParameter(rB.UNMASKED_VENDOR_WEBGL)),
            Bc = String(nc.getParameter(rB.UNMASKED_RENDERER_WEBGL));
          return (0, Vc.seedGpuVendor)(cB), (0, Ic.s)(cB, Bc), {
            vendor: cB,
            renderer: Bc
          }
        }
        nc && (0, Ic.s)(String(nc.getParameter(nc.VENDOR)), String(nc.getParameter(nc.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);