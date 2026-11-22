export const id = 197;
export const ids = [197];
export const modules = {
  33707: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => ck,
      e: () => Ye,
      g: () => ye,
      k: () => Ce,
      m: () => be,
      o: () => Pe,
      q: () => Me,
      r: () => Le,
      t: () => me
    });
    var Dk = ik(22),
      fk = ik(99),
      Sk = ik(1614),
      bk = ik(4376),
      rk = ik(2727),
      Pk = ik(2730),
      mk = ik(38);
    const {
      windows: Mk,
      target: Kk,
      stepDown: xk,
      stepUp: nk,
      noGain: Uk
    } = Pk.b, Hk = 1e3 / 60 * 1.08, wk = 1e3 / 55, lk = 1e3 / 45, pk = 1e3 / 30 * .92, yk = 1e3 / 30 * 1.08;
    class Yk {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(kk, ek) {
        const ik = kk - this.lastMs;
        this.lastMs = kk;
        const Dk = function(kk) {
          if (kk <= 0 || kk > 100) return -1;
          if (kk <= Hk) return 0;
          if (kk >= wk && kk <= lk) return 1;
          return kk >= pk && kk <= yk ? 2 : -1
        }(ik);
        0 === Dk && 2 === this.runBand && ek && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), Dk !== this.runBand && (this.runBand = Dk, this.runLength = 0), Dk < 0 || ++this.runLength < 3 || (0 === Dk ? this.votes60++ : 1 === Dk ? (this.votesMid++, this.sumMidMs += ik) : (this.votes30++, ek && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const Lk = Mk.windowMs,
      Ck = Mk.settleMs,
      Ak = Mk.graceMs,
      jk = Mk.minIntervals,
      sk = 1e3 * jk / Lk,
      dk = Math.floor(1e4 / Lk),
      Vk = Uk.backoffMs,
      Fk = Uk.maxMs;
    class uk {
      constructor(kk, ek) {
        let {
          lowest: ik,
          startStep: Dk = 0,
          noGain: fk = null,
          upWait: Sk = null
        } = ek;
        this.hooks = kk, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new Yk, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = Kk.maxFps, this.lowest = ik, this.step = Math.min(Dk, ik), this.noGain = fk, this.climbing = this.step > 0;
        const bk = ik + 1;
        this.downUntilMs = new Array(bk).fill(0), this.downBackoffMs = new Array(bk).fill(0), this.noGainFps = new Array(bk).fill(0), this.noGainFps[0] = null === fk ? 0 : fk.fps, this.upFailures = new Array(bk).fill(0), this.upUntilMs = new Array(bk).fill(0), null !== Sk && Sk.step >= 0 && Sk.step < bk && (this.upUntilMs[Sk.step] = Sk.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(kk, ik && !Dk), !ik) return void this.leave(kk);
        const fk = kk - this.lastFrameMs,
          Sk = this.resizeStall(kk);
        if (fk > 2e3 && !Sk && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = kk, this.quietUntilMs = Math.max(this.quietUntilMs, kk + Ak), this.graceUntilMs = kk + Ak, this.windowStartMs = -1, void(this.slowStartMs = -1);
        fk > 500 && (this.hitch(kk), Sk && (this.slowStartMs = -1)), this.lastFrameMs = kk, kk >= this.quietUntilMs && this.countWindow(kk, ek, Dk) || ek && kk >= this.graceUntilMs && this.countSlow(kk, Dk)
      }
      countWindow(kk, ek, ik) {
        if (this.windowStartMs < 0) return !!ek && (this.windowStartMs = kk, this.lastDrawnMs = kk, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = ik, !1);
        if (this.windowMasked ||= ik, !ek) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, kk - this.lastDrawnMs), this.lastDrawnMs = kk;
        const Dk = kk - this.windowStartMs;
        if (Dk < Lk) return !1;
        const fk = this.windowIntervals,
          Sk = 1e3 * fk / Dk,
          bk = this.windowHeld,
          rk = this.windowMaxIntervalMs,
          Pk = this.windowMasked;
        if (this.windowStartMs = -1, fk < jk) return !1;
        this.slowStartMs = -1;
        const mk = this.targetFps(),
          Mk = Sk >= mk * Kk.cleanShare && rk <= Kk.cleanMaxIntervalMs && (0 === bk || Sk >= mk);
        return this.decide(Sk, 1, Mk, Sk < mk * Kk.dropShare, Pk, kk), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(Kk.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(kk, ek) {
        if (this.slowStartMs < 0) return this.slowStartMs = kk, this.slowIntervals = 0, void(this.slowMasked = ek);
        this.slowMasked ||= ek, this.slowIntervals++;
        const ik = kk - this.slowStartMs;
        if (ik < 1e4) return;
        const Dk = 1e3 * this.slowIntervals / ik,
          fk = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(kk, ek), Dk < sk && (this.windowStartMs = -1, this.decide(Dk, dk, !1, !0, fk, kk))
      }
      resizeStall(kk) {
        return this.lastFrameMs - this.resizedMs <= Ck && kk - this.lastFrameMs <= 15e3
      }
      paused(kk) {
        this.refresh.frame(kk, !1), kk - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, kk + Ak), this.graceUntilMs = kk + Ak), this.lastFrameMs = kk, this.slowStartMs = -1, this.hitch(kk)
      }
      resized(kk) {
        this.resizedMs = kk, this.hitch(kk)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(kk) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(kk))
      }
      hitch(kk) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, kk + Ck)
      }
      left(kk) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const ek = this.phase;
        "watch" !== ek.kind && (this.phase = {
          kind: "watch"
        }, "down" === ek.kind && (this.downUntilMs[ek.from] = kk + Vk, this.noGainFps[ek.from] = 0, 0 === ek.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, kk + Vk)
        })), this.setStep(ek.from, 0, kk, "left"), "up" === ek.kind && (this.climbed = ek.fromClimbed))
      }
      decide(kk, ek, ik, Dk, fk, Sk) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: Sk,
          step: this.step,
          fps: Math.round(10 * kk) / 10,
          windows: ek,
          masked: fk,
          dropping: Dk
        });
        const bk = this.phase;
        switch (bk.kind) {
          case "watch":
            return void this.watch(kk, ek, ik, Dk, fk, Sk);
          case "down": {
            if (bk.judged += ek, bk.fpsSum += kk * ek, bk.dropped ||= Dk, fk || (bk.clean += ek, bk.cleanFpsSum += kk * ek, bk.cleanDropped ||= Dk), bk.judged < xk.judgeWindows) return;
            const ik = bk.clean > 0 ? bk.cleanFpsSum / bk.clean : bk.fpsSum / bk.judged;
            return void(!(bk.clean > 0 ? bk.cleanDropped : bk.dropped) || ik >= bk.fromFps * xk.keepGain ? this.keepDown(bk.from, ik, Sk) : this.noGainFrom(bk, ik, Sk))
          }
          case "up":
            return ik ? void(++bk.judged >= nk.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: bk.from,
              heldWindows: 0,
              below: bk.fromClimbed
            }, this.record(Sk, kk, "up_kept"))) : (fk ? (this.watchAt(bk.from), this.setStep(bk.from, kk, Sk, "spoiled")) : this.failUp(this.step, bk.from, kk, Sk), void(this.climbed = bk.fromClimbed))
        }
      }
      watch(kk, ek, ik, Dk, fk, Sk) {
        const bk = this.climbed;
        null !== bk && !Dk && !fk && ++bk.heldWindows >= nk.heldWindows && (this.climbed = null, this.record(Sk, kk, "XM"), this.hooks.XM(this.step)), Dk ? (this.dropRun += ek, this.dropRunFpsSum += kk * ek, this.dropRunMasked ||= fk, fk || (this.dropRunClean += ek, this.dropRunCleanFpsSum += kk * ek)) : this.resetDropRun(), fk && ik || (this.cleanRun = ik ? this.cleanRun + 1 : 0);
        const rk = null !== this.climbed ? nk : xk;
        if (this.dropRun >= (this.dropRunMasked ? rk.maskedWindows : rk.dropWindows)) {
          const ek = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            ik = this.dropRunClean >= xk.dropWindows && ek < this.noGainFps[this.step] * Uk.heavierShare;
          this.resetDropRun();
          const Dk = this.climbed;
          return void(null !== Dk ? (this.failUp(this.step, Dk.from, kk, Sk), this.climbed = Dk.below) : this.step < this.lowest && (ik || this.waitOver(Sk)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: ek,
            early: !this.waitOver(Sk),
            judged: 0,
            fpsSum: 0,
            dropped: !1,
            clean: 0,
            cleanFpsSum: 0,
            cleanDropped: !1
          }, this.setStep(this.step + 1, ek, Sk, "down")))
        }
        const Pk = this.step - 1;
        Pk >= 0 && this.cleanRun >= (this.climbing ? nk.climbWindows : nk.cleanWindows) && this.upAllowed(Pk, Sk) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Pk, kk, Sk, "up"))
      }
      waitOver(kk) {
        return !(0 === this.step && null !== this.noGain && kk < this.noGain.untilMs) && kk >= this.downUntilMs[this.step]
      }
      upAllowed(kk, ek) {
        return this.upFailures[kk] <= nk.failWaitsMs.length && ek >= this.upUntilMs[kk]
      }
      keepDown(kk, ek, ik) {
        this.watchAt(this.step), this.downBackoffMs[kk] = 0, this.noGainFps[kk] = 0, this.record(ik, ek, "down_kept"), 0 === kk && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.fU(this.step)
      }
      noGainFrom(kk, ek, ik) {
        var Dk, fk;
        let {
          from: Sk,
          fromFps: bk,
          early: rk
        } = kk;
        const Pk = 0 === Sk ? null !== (Dk = null === (fk = this.noGain) || void 0 === fk ? void 0 : fk.backoffMs) && void 0 !== Dk ? Dk : 0 : this.downBackoffMs[Sk],
          mk = 0 === Pk ? Vk : rk ? Pk : Math.min(2 * Pk, Fk),
          Mk = Math.max(bk, ek);
        this.downBackoffMs[Sk] = mk, this.downUntilMs[Sk] = ik + mk, this.noGainFps[Sk] = Mk, 0 === Sk && (this.noGain = {
          untilMs: ik + mk,
          backoffMs: mk,
          fps: Mk
        }, this.hooks.noGain(this.noGain)), this.watchAt(Sk), this.setStep(Sk, ek, ik, "no_gain")
      }
      failUp(kk, ek, ik, Dk) {
        this.climbing = !1;
        const fk = ++this.upFailures[kk];
        this.upUntilMs[kk] = fk <= nk.failWaitsMs.length ? Dk + nk.failWaitsMs[fk - 1] : Number.POSITIVE_INFINITY, this.watchAt(ek), this.setStep(ek, ik, Dk, "up_failed"), this.hooks.upFailed(kk)
      }
      watchAt(kk) {
        this.phase = {
          kind: "watch"
        }, this.climbed = kk === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(kk, ek, ik, Dk) {
        const fk = kk !== this.step;
        fk && (this.climbed = null), this.step = kk, this.record(ik, ek, Dk), fk && (this.slowStartMs = -1, this.resized(ik), this.hooks.changed(kk))
      }
      record(kk, ek, ik) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: kk,
          step: this.step,
          fps: Math.round(10 * ek) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: ik
        })
      }
    }
    var qk = ik(33714),
      Ik = ik(3082),
      zk = ik(33721);
    const Qk = "autoGraphics",
      vk = 6048e5,
      Ek = "startScale";

    function hk() {
      return (0, rk.O)(Dk.b.get("clientEscMenuOptions").pixelScale) * (0, rk.K)()
    }

    function ak() {
      return (0, rk.y)(hk())
    }

    function Wk() {
      const kk = mk.f.getItem(Qk);
      return "object" !== typeof kk || null === kk || "string" !== typeof kk.gpu ? null : kk
    }

    function tk(kk) {
      return {
        untilEpochMs: Date.now() + (kk.untilMs - performance.now()),
        backoffMs: kk.backoffMs,
        fps: kk.fps
      }
    }

    function Xk(kk) {
      return void 0 === kk || "number" !== typeof kk.fps ? null : {
        untilMs: performance.now() + (kk.untilEpochMs - Date.now()),
        backoffMs: kk.backoffMs,
        fps: kk.fps
      }
    }
    let Bk = null;

    function ck() {
      if (null === Bk) {
        const kk = new URLSearchParams(window.location.search).get("msaa");
        Bk = Dk.b.get("clientEscMenuOptions").antiAliasing && ("0" === kk || "1" !== kk && !(0, bk.d)("antiAliasing") && (0, Ik.g)())
      }
      return Bk
    }

    function Tk(kk) {
      const ek = "number" === typeof kk ? Date.now() - kk : -1;
      return ek >= 0 && ek < vk
    }
    let Zk = null;

    function Ok() {
      return Zk ??= (0, fk.getDeviceDefaultPixelScale)(), gk(Zk)
    }

    function gk(kk) {
      const ek = Dk.b.get("clientEscMenuOptions");
      return ek.pixelSmoothing && !(0, bk.d)("pixelScale") && ek.pixelScale === kk
    }
    let Gk = null,
      Nk = 0;

    function Rk() {
      if (null === Gk || Nk !== hk()) {
        var kk;
        Nk = hk();
        const ek = Number(null !== (kk = new URLSearchParams(window.location.search).get(Ek)) && void 0 !== kk ? kk : ""),
          ik = ak();
        if (ek > 0 && ek <= 1) Gk = (0, rk.F)(ik, ik[0] / ek);
        else {
          const kk = Wk(),
            ek = (0, rk.F)(ik, (0, rk.G)(hk())),
            Dk = !(0, Ik.l)() && Tk(null === kk || void 0 === kk ? void 0 : kk.heldAt) && (null === kk || void 0 === kk ? void 0 : kk.heldTarget) === hk() ? null === kk || void 0 === kk ? void 0 : kk.heldN : void 0;
          Gk = "number" === typeof Dk ? Math.min(ek, (0, rk.F)(ik, Dk)) : ek
        }
      }
      return Gk
    }

    function Jk(kk, ek) {
      var ik;
      const Dk = ek.indexOf(null !== (ik = kk.failedUpN) && void 0 !== ik ? ik : -1);
      return Dk >= 0 && Tk(kk.failedUpAt) ? {
        step: Dk,
        untilMs: performance.now() + Pk.b.stepUp.failWaitsMs[0]
      } : null
    }
    let ke = null,
      ee = !1,
      ie = "";
    const De = new Set;

    function fe() {
      for (const kk of De) kk()
    }

    function Se() {
      return ee ? null : (ne(), null === ke ? (null !== Zk || null !== (0, fk.peekGpuVendor)() ? Ok() : gk(1)) ? Rk() : null : Ok() ? ke.currentStep() : null)
    }

    function be() {
      const kk = Se();
      if (null === kk) return null;
      const ek = ak(),
        ik = ek[Math.min(kk, ek.length - 1)];
      return ik === re() ? null : ik
    }

    function re() {
      return (0, rk.B)(Dk.b.get("clientEscMenuOptions").pixelScale, (0, rk.K)())
    }

    function Pe() {
      return null !== ke && null !== be()
    }

    function me(kk) {
      return De.add(kk), () => {
        De.delete(kk)
      }
    }

    function Me(kk, ek, ik) {
      var Dk;
      if (null !== ke || ee || (0, Ik.l)()) return;
      const fk = (0, qk.b)(kk, ek, ik);
      null !== fk && (0, Ik.p)(fk.vendor), ie = `${kk}:${(null===fk||void 0===fk?void 0:fk.renderer)||(null===fk||void 0===fk?void 0:fk.vendor)||""}`, (null === (Dk = Wk()) || void 0 === Dk ? void 0 : Dk.gpu) !== ie && (mk.f.setItem(Qk, {
        gpu: ie
      }), Gk = null), xe(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var kk;
          null === (kk = ke) || void 0 === kk || kk.hidden()
        } catch (ek) {
          Le(), console.error("The quality steps stopped", ek)
        }
      }))
    }
    let Ke = 0;

    function xe() {
      var kk;
      const ek = null !== (kk = Wk()) && void 0 !== kk ? kk : {
          gpu: ie
        },
        ik = ak();
      Ke = hk(), ke = new uk({
          changed: fe,
          fU: () => {
            Ue({
              heldN: void 0
            })
          },
          XM: kk => {
            var ek;
            const ik = ak()[kk],
              Dk = {
                heldN: ik,
                heldAt: Date.now(),
                heldTarget: hk()
              };
            (null === (ek = Wk()) || void 0 === ek ? void 0 : ek.failedUpN) === ik && (Dk.failedUpN = void 0), Ue(Dk)
          },
          upFailed: kk => {
            Ue({
              failedUpN: ak()[kk],
              failedUpAt: Date.now()
            })
          },
          noGain: kk => {
            Ue({
              noGain: null === kk ? void 0 : tk(kk)
            })
          }
        }, {
          lowest: ik.length - 1,
          startStep: Rk(),
          noGain: Xk(ek.noGain),
          upWait: Jk(ek, ik)
        }),
        function(kk) {
          const ek = {
            get step() {
              return kk.currentStep()
            },
            get n() {
              var kk;
              return null !== (kk = be()) && void 0 !== kk ? kk : re()
            },
            get scale() {
              var kk;
              return ak()[0] / (null !== (kk = be()) && void 0 !== kk ? kk : re())
            },
            get msaaOff() {
              return ck()
            },
            log: kk.log,
            windows: kk.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: ek,
            configurable: !0
          })
        }(ke), fe()
    }

    function ne() {
      null !== ke && hk() !== Ke && (Gk = null, xe())
    }

    function Ue(kk) {
      mk.f.setItem(Qk, {
        ...Wk(),
        ...kk,
        gpu: ie
      })
    }
    let He = 0,
      we = 0,
      le = 0,
      pe = !1;

    function ye() {
      He++
    }

    function Ye(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ne(), null !== ke && (kk - le >= 1e3 && (pe = He - we > Pk.b.sceneChange.meshesPerSecond, we = He, le = kk), zk.e.isHeld() ? ke.paused(kk) : ke.frame(kk, ek, ik && !document.hidden && Ok(), pe || Dk > 0 || (0, Sk.s)()))
    }

    function Le() {
      if (!ee) {
        ee = !0, null !== ke && (ke = null, Ue({
          noGain: void 0
        }));
        try {
          fe()
        } catch (kk) {
          console.error("The quality steps' resize to the player's n failed", kk)
        }
      }
    }

    function Ce() {
      var kk;
      null === (kk = ke) || void 0 === kk || kk.resized(performance.now())
    }
  },
  33714: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(99),
      fk = ik(129);

    function Sk(kk, ek, ik) {
      if ("webgpu" === kk) return ik ? ((0, Dk.seedGpuVendor)(ik), {
        vendor: ik,
        renderer: ""
      }) : null;
      try {
        const ik = "webgl" === kk ? ek.getContext("webgl2") : ek.getContext("webgl");
        "webgl" === kk && ik && (0, fk.w)(ik);
        const Sk = null === ik || void 0 === ik ? void 0 : ik.getExtension("WEBGL_debug_renderer_info");
        if (ik && Sk) {
          const kk = String(ik.getParameter(Sk.UNMASKED_VENDOR_WEBGL)),
            ek = String(ik.getParameter(Sk.UNMASKED_RENDERER_WEBGL));
          return (0, Dk.seedGpuVendor)(kk), (0, fk.D)(kk, ek), {
            vendor: kk,
            renderer: ek
          }
        }
        ik && (0, fk.D)(String(ik.getParameter(ik.VENDOR)), String(ik.getParameter(ik.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);