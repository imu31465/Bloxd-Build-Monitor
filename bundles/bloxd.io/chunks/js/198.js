export const id = 198;
export const ids = [198];
export const modules = {
  34490: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => tu,
      f: () => eE,
      j: () => ME,
      m: () => pE,
      o: () => XE,
      p: () => qE,
      q: () => CE,
      r: () => GE,
      s: () => fE
    });
    var su = ju(274),
      Uu = ju(22),
      Zu = ju(91),
      Xu = ju(1687),
      lu = ju(4602),
      qu = ju(3061),
      fu = ju(3067),
      Cu = ju(31);
    const {
      windows: bu,
      target: cu,
      stepDown: Nu,
      stepUp: Ou,
      noGain: Yu
    } = fu.c, hu = 1e3 / 60 * 1.08, Du = 1e3 / 55, gu = 1e3 / 45, Mu = 1e3 / 30 * .92, eu = 1e3 / 30 * 1.08;
    class Gu {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(uu, Eu) {
        const ju = uu - this.lastMs;
        this.lastMs = uu;
        const su = function(uu) {
          if (uu <= 0 || uu > 100) return -1;
          if (uu <= hu) return 0;
          if (uu >= Du && uu <= gu) return 1;
          return uu >= Mu && uu <= eu ? 2 : -1
        }(ju);
        0 === su && 2 === this.runBand && Eu && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), su !== this.runBand && (this.runBand = su, this.runLength = 0), su < 0 || ++this.runLength < 3 || (0 === su ? this.votes60++ : 1 === su ? (this.votesMid++, this.sumMidMs += ju) : (this.votes30++, Eu && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const pu = bu.windowMs,
      wu = bu.settleMs,
      Ju = bu.graceMs,
      du = bu.minIntervals,
      au = 1e3 * du / pu,
      Pu = Math.floor(1e4 / pu),
      ou = Yu.backoffMs,
      ku = Yu.maxMs;
    class mu {
      constructor(uu, Eu) {
        let {
          lowest: ju,
          startStep: su = 0,
          noGain: Uu = null,
          upWait: Zu = null
        } = Eu;
        this.hooks = uu, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new Gu, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = cu.maxFps, this.lowest = ju, this.step = Math.min(su, ju), this.noGain = Uu, this.climbing = this.step > 0;
        const Xu = ju + 1;
        this.downUntilMs = new Array(Xu).fill(0), this.downBackoffMs = new Array(Xu).fill(0), this.noGainFps = new Array(Xu).fill(0), this.noGainFps[0] = null === Uu ? 0 : Uu.fps, this.upFailures = new Array(Xu).fill(0), this.upUntilMs = new Array(Xu).fill(0), null !== Zu && Zu.step >= 0 && Zu.step < Xu && (this.upUntilMs[Zu.step] = Zu.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(uu, ju && !su), !ju) return void this.leave(uu);
        const Uu = uu - this.lastFrameMs,
          Zu = this.resizeStall(uu);
        if (Uu > 2e3 && !Zu && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = uu, this.quietUntilMs = Math.max(this.quietUntilMs, uu + Ju), this.graceUntilMs = uu + Ju, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Uu > 500 && (this.hitch(uu), Zu && (this.slowStartMs = -1)), this.lastFrameMs = uu, uu >= this.quietUntilMs && this.countWindow(uu, Eu, su) || Eu && uu >= this.graceUntilMs && this.countSlow(uu, su)
      }
      countWindow(uu, Eu, ju) {
        if (this.windowStartMs < 0) return !!Eu && (this.windowStartMs = uu, this.lastDrawnMs = uu, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = ju, !1);
        if (this.windowMasked ||= ju, !Eu) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, uu - this.lastDrawnMs), this.lastDrawnMs = uu;
        const su = uu - this.windowStartMs;
        if (su < pu) return !1;
        const Uu = this.windowIntervals,
          Zu = 1e3 * Uu / su,
          Xu = this.windowHeld,
          lu = this.windowMaxIntervalMs,
          qu = this.windowMasked;
        if (this.windowStartMs = -1, Uu < du) return !1;
        this.slowStartMs = -1;
        const fu = this.targetFps(),
          Cu = Zu >= fu * cu.cleanShare && lu <= cu.cleanMaxIntervalMs && (0 === Xu || Zu >= fu);
        return this.decide(Zu, 1, Cu, Zu < fu * cu.dropShare, qu, uu), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(cu.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(uu, Eu) {
        if (this.slowStartMs < 0) return this.slowStartMs = uu, this.slowIntervals = 0, void(this.slowMasked = Eu);
        this.slowMasked ||= Eu, this.slowIntervals++;
        const ju = uu - this.slowStartMs;
        if (ju < 1e4) return;
        const su = 1e3 * this.slowIntervals / ju,
          Uu = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(uu, Eu), su < au && (this.windowStartMs = -1, this.decide(su, Pu, !1, !0, Uu, uu))
      }
      resizeStall(uu) {
        return this.lastFrameMs - this.resizedMs <= wu && uu - this.lastFrameMs <= 15e3
      }
      paused(uu) {
        this.refresh.frame(uu, !1), uu - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, uu + Ju), this.graceUntilMs = uu + Ju), this.lastFrameMs = uu, this.slowStartMs = -1, this.hitch(uu)
      }
      resized(uu) {
        this.resizedMs = uu, this.hitch(uu)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(uu) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(uu))
      }
      hitch(uu) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, uu + wu)
      }
      left(uu) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const Eu = this.phase;
        "watch" !== Eu.kind && (this.phase = {
          kind: "watch"
        }, "down" === Eu.kind && (this.downUntilMs[Eu.from] = uu + ou, this.noGainFps[Eu.from] = 0, 0 === Eu.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, uu + ou)
        })), this.setStep(Eu.from, 0, uu, "left"), "up" === Eu.kind && (this.climbed = Eu.fromClimbed))
      }
      decide(uu, Eu, ju, su, Uu, Zu) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: Zu,
          step: this.step,
          fps: Math.round(10 * uu) / 10,
          windows: Eu,
          masked: Uu,
          dropping: su
        });
        const Xu = this.phase;
        switch (Xu.kind) {
          case "watch":
            return void this.watch(uu, Eu, ju, su, Uu, Zu);
          case "down": {
            if (Xu.judged += Eu, Xu.fpsSum += uu * Eu, Uu || (Xu.clean += Eu, Xu.cleanFpsSum += uu * Eu), Xu.judged < Nu.judgeWindows) return;
            const ju = Xu.clean > 0 ? Xu.cleanFpsSum / Xu.clean : Xu.fpsSum / Xu.judged;
            return void(ju >= Xu.fromFps * Nu.keepGain ? this.keepDown(Xu.from, ju, Zu) : this.noGainFrom(Xu, ju, Zu))
          }
          case "up":
            return ju ? void(++Xu.judged >= Ou.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: Xu.from,
              heldWindows: 0,
              below: Xu.fromClimbed
            }, this.record(Zu, uu, "up_kept"))) : (Uu ? (this.watchAt(Xu.from), this.setStep(Xu.from, uu, Zu, "spoiled")) : this.failUp(this.step, Xu.from, uu, Zu), void(this.climbed = Xu.fromClimbed))
        }
      }
      watch(uu, Eu, ju, su, Uu, Zu) {
        const Xu = this.climbed;
        null !== Xu && !su && !Uu && ++Xu.heldWindows >= Ou.heldWindows && (this.climbed = null, this.record(Zu, uu, "dl"), this.hooks.dl(this.step)), su ? (this.dropRun += Eu, this.dropRunFpsSum += uu * Eu, this.dropRunMasked ||= Uu, Uu || (this.dropRunClean += Eu, this.dropRunCleanFpsSum += uu * Eu)) : this.resetDropRun(), Uu && ju || (this.cleanRun = ju ? this.cleanRun + 1 : 0);
        const lu = null !== this.climbed ? Ou : Nu;
        if (this.dropRun >= (this.dropRunMasked ? lu.maskedWindows : lu.dropWindows)) {
          const Eu = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            ju = this.dropRunClean >= Nu.dropWindows && Eu < this.noGainFps[this.step] * Yu.heavierShare;
          this.resetDropRun();
          const su = this.climbed;
          return void(null !== su ? (this.failUp(this.step, su.from, uu, Zu), this.climbed = su.below) : this.step < this.lowest && (ju || this.waitOver(Zu)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: Eu,
            early: !this.waitOver(Zu),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, Eu, Zu, "down")))
        }
        const qu = this.step - 1;
        qu >= 0 && this.cleanRun >= (this.climbing ? Ou.climbWindows : Ou.cleanWindows) && Zu >= this.upUntilMs[qu] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(qu, uu, Zu, "up"))
      }
      waitOver(uu) {
        return !(0 === this.step && null !== this.noGain && uu < this.noGain.untilMs) && uu >= this.downUntilMs[this.step]
      }
      keepDown(uu, Eu, ju) {
        this.watchAt(this.step), this.downBackoffMs[uu] = 0, this.noGainFps[uu] = 0, this.record(ju, Eu, "down_kept"), 0 === uu && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.oN(this.step)
      }
      noGainFrom(uu, Eu, ju) {
        var su, Uu;
        let {
          from: Zu,
          fromFps: Xu,
          early: lu
        } = uu;
        const qu = 0 === Zu ? null !== (su = null === (Uu = this.noGain) || void 0 === Uu ? void 0 : Uu.backoffMs) && void 0 !== su ? su : 0 : this.downBackoffMs[Zu],
          fu = 0 === qu ? ou : lu ? qu : Math.min(2 * qu, ku),
          Cu = Math.max(Xu, Eu);
        this.downBackoffMs[Zu] = fu, this.downUntilMs[Zu] = ju + fu, this.noGainFps[Zu] = Cu, 0 === Zu && (this.noGain = {
          untilMs: ju + fu,
          backoffMs: fu,
          fps: Cu
        }, this.hooks.noGain(this.noGain)), this.watchAt(Zu), this.setStep(Zu, Eu, ju, "no_gain")
      }
      failUp(uu, Eu, ju, su) {
        this.climbing = !1;
        const Uu = ++this.upFailures[uu],
          Zu = Ou.failWaitsMs;
        this.upUntilMs[uu] = su + Zu[Math.min(Uu, Zu.length) - 1], this.watchAt(Eu), this.setStep(Eu, ju, su, "up_failed"), this.hooks.upFailed(uu)
      }
      watchAt(uu) {
        this.phase = {
          kind: "watch"
        }, this.climbed = uu === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(uu, Eu, ju, su) {
        const Uu = uu !== this.step;
        Uu && (this.climbed = null), this.step = uu, this.record(ju, Eu, su), Uu && (this.slowStartMs = -1, this.resized(ju), this.hooks.changed(uu))
      }
      record(uu, Eu, ju) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: uu,
          step: this.step,
          fps: Math.round(10 * Eu) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: ju
        })
      }
    }
    var vu = ju(34499),
      Ku = ju(3290),
      Vu = ju(34501);
    const ru = "autoGraphics",
      Qu = 6048e5,
      iu = "startScale";

    function Wu() {
      return (0, qu.A)(Uu.d.get("clientEscMenuOptions").pixelScale) * (0, qu.x)()
    }

    function Su() {
      return (0, qu.n)(Wu())
    }

    function Iu() {
      const uu = Cu.k.getItem(ru);
      return "object" !== typeof uu || null === uu || "string" !== typeof uu.gpu ? null : uu
    }

    function Fu(uu) {
      return {
        untilEpochMs: Date.now() + (uu.untilMs - performance.now()),
        backoffMs: uu.backoffMs,
        fps: uu.fps
      }
    }

    function Bu(uu) {
      return void 0 === uu || "number" !== typeof uu.fps ? null : {
        untilMs: performance.now() + (uu.untilEpochMs - Date.now()),
        backoffMs: uu.backoffMs,
        fps: uu.fps
      }
    }
    let Lu = null;

    function tu() {
      if (null === Lu) {
        const uu = new URLSearchParams(window.location.search).get("msaa");
        Lu = Uu.d.get("clientEscMenuOptions").antiAliasing && ("0" === uu || "1" !== uu && !(0, lu.c)("antiAliasing") && (0, Ku.d)())
      }
      return Lu
    }

    function xu(uu) {
      const Eu = "number" === typeof uu ? Date.now() - uu : -1;
      return Eu >= 0 && Eu < Qu
    }
    let Tu = null;

    function Hu() {
      return Tu ??= (0, Zu.getDeviceDefaultPixelScale)(), Au(Tu)
    }

    function Au(uu) {
      const Eu = Uu.d.get("clientEscMenuOptions");
      return Eu.pixelSmoothing && !(0, lu.c)("pixelScale") && Eu.pixelScale === uu
    }
    let nu = null,
      yu = 0;

    function zu() {
      if (null === nu || yu !== Wu()) {
        var uu;
        yu = Wu();
        const Eu = Number(null !== (uu = new URLSearchParams(window.location.search).get(iu)) && void 0 !== uu ? uu : ""),
          ju = Su();
        if (Eu > 0 && Eu <= 1) nu = (0, qu.v)(ju, ju[0] / Eu);
        else {
          const uu = Iu(),
            Eu = (0, qu.v)(ju, (0, qu.w)(Wu())),
            su = !(0, Ku.l)() && xu(null === uu || void 0 === uu ? void 0 : uu.heldAt) && (null === uu || void 0 === uu ? void 0 : uu.heldTarget) === Wu() ? null === uu || void 0 === uu ? void 0 : uu.heldN : void 0;
          nu = "number" === typeof su ? Math.min(Eu, (0, qu.v)(ju, su)) : Eu
        }
      }
      return nu
    }

    function Ru(uu, Eu) {
      var ju;
      const su = Eu.indexOf(null !== (ju = uu.failedUpN) && void 0 !== ju ? ju : -1);
      return su >= 0 && xu(uu.failedUpAt) ? {
        step: su,
        untilMs: performance.now() + fu.c.stepUp.failWaitsMs[0]
      } : null
    }
    let uE = null,
      EE = !1,
      jE = "";
    const sE = new Set;

    function UE() {
      for (const uu of sE) uu()
    }

    function ZE() {
      return EE ? null : (NE(), null === uE ? (null !== Tu || null !== (0, Zu.peekGpuVendor)() ? Hu() : Au(1)) ? zu() : null : Hu() ? uE.currentStep() : null)
    }

    function XE() {
      const uu = ZE();
      if (null === uu) return null;
      const Eu = Su(),
        ju = Eu[Math.min(uu, Eu.length - 1)];
      return ju === lE() ? null : ju
    }

    function lE() {
      return (0, qu.s)(Uu.d.get("clientEscMenuOptions").pixelScale, (0, qu.x)())
    }

    function qE() {
      return null !== uE && null !== XE()
    }

    function fE(uu) {
      return sE.add(uu), () => {
        sE.delete(uu)
      }
    }

    function CE(uu, Eu, ju) {
      var Uu;
      if (null !== uE || EE || (0, Ku.l)()) return;
      const Zu = (0, vu.e)(uu, Eu, ju);
      null !== Zu && ((0, Ku.o)(Zu.vendor), "" !== Zu.renderer && (0, su.m)(Zu.vendor, Zu.renderer)), jE = `${uu}:${(null===Zu||void 0===Zu?void 0:Zu.renderer)||(null===Zu||void 0===Zu?void 0:Zu.vendor)||""}`, (null === (Uu = Iu()) || void 0 === Uu ? void 0 : Uu.gpu) !== jE && (Cu.k.setItem(ru, {
        gpu: jE
      }), nu = null), cE(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var uu;
          null === (uu = uE) || void 0 === uu || uu.hidden()
        } catch (Eu) {
          GE(), console.error("The quality steps stopped", Eu)
        }
      }))
    }
    let bE = 0;

    function cE() {
      var uu;
      const Eu = null !== (uu = Iu()) && void 0 !== uu ? uu : {
          gpu: jE
        },
        ju = Su();
      bE = Wu(), uE = new mu({
          changed: UE,
          oN: () => {
            OE({
              heldN: void 0
            })
          },
          dl: uu => {
            var Eu;
            const ju = Su()[uu],
              su = {
                heldN: ju,
                heldAt: Date.now(),
                heldTarget: Wu()
              };
            (null === (Eu = Iu()) || void 0 === Eu ? void 0 : Eu.failedUpN) === ju && (su.failedUpN = void 0), OE(su)
          },
          upFailed: uu => {
            OE({
              failedUpN: Su()[uu],
              failedUpAt: Date.now()
            })
          },
          noGain: uu => {
            OE({
              noGain: null === uu ? void 0 : Fu(uu)
            })
          }
        }, {
          lowest: ju.length - 1,
          startStep: zu(),
          noGain: Bu(Eu.noGain),
          upWait: Ru(Eu, ju)
        }),
        function(uu) {
          const Eu = {
            get step() {
              return uu.currentStep()
            },
            get n() {
              var uu;
              return null !== (uu = XE()) && void 0 !== uu ? uu : lE()
            },
            get scale() {
              var uu;
              return Su()[0] / (null !== (uu = XE()) && void 0 !== uu ? uu : lE())
            },
            get msaaOff() {
              return tu()
            },
            log: uu.log,
            windows: uu.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: Eu,
            configurable: !0
          })
        }(uE), UE()
    }

    function NE() {
      null !== uE && Wu() !== bE && (nu = null, cE())
    }

    function OE(uu) {
      Cu.k.setItem(ru, {
        ...Iu(),
        ...uu,
        gpu: jE
      })
    }
    let YE = 0,
      hE = 0,
      DE = 0,
      gE = !1;

    function ME() {
      YE++
    }

    function eE(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      NE(), null !== uE && (uu - DE >= 1e3 && (gE = YE - hE > fu.c.sceneChange.meshesPerSecond, hE = YE, DE = uu), Vu.c.isHeld() ? uE.paused(uu) : uE.frame(uu, Eu, ju && !document.hidden && Hu(), gE || su > 0 || (0, Xu.s)()))
    }

    function GE() {
      if (!EE) {
        EE = !0, null !== uE && (uE = null, OE({
          noGain: void 0
        }));
        try {
          UE()
        } catch (uu) {
          console.error("The quality steps' resize to the player's n failed", uu)
        }
      }
    }

    function pE() {
      var uu;
      null === (uu = uE) || void 0 === uu || uu.resized(performance.now())
    }
  },
  34499: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu
    });
    var su = ju(91),
      Uu = ju(124);

    function Zu(uu, Eu, ju) {
      if ("webgpu" === uu) return ju ? ((0, su.seedGpuVendor)(ju), {
        vendor: ju,
        renderer: ""
      }) : null;
      try {
        const ju = "webgl" === uu ? Eu.getContext("webgl2") : Eu.getContext("webgl");
        "webgl" === uu && ju && (0, Uu.w)(ju);
        const Zu = null === ju || void 0 === ju ? void 0 : ju.getExtension("WEBGL_debug_renderer_info");
        if (ju && Zu) {
          const uu = String(ju.getParameter(Zu.UNMASKED_VENDOR_WEBGL)),
            Eu = String(ju.getParameter(Zu.UNMASKED_RENDERER_WEBGL));
          return (0, su.seedGpuVendor)(uu), (0, Uu.C)(uu, Eu), {
            vendor: uu,
            renderer: Eu
          }
        }
        ju && (0, Uu.C)(String(ju.getParameter(ju.VENDOR)), String(ju.getParameter(ju.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);