export const id = 198;
export const ids = [198];
export const modules = {
  34414: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => RG,
      e: () => Eb,
      g: () => zb,
      h: () => Xb,
      l: () => yb,
      p: () => Ub,
      q: () => Vb,
      u: () => ob,
      v: () => Yb
    });
    var wG = ZG(273),
      SG = ZG(17),
      LG = ZG(80),
      yG = ZG(1579),
      kG = ZG(4437),
      UG = ZG(2889),
      YG = ZG(2894),
      VG = ZG(29);
    const {
      windows: pG,
      target: fG,
      stepDown: QG,
      stepUp: KG,
      noGain: hG
    } = YG.c, dG = 1e3 / 60 * 1.08, JG = 1e3 / 55, rG = 1e3 / 45, zG = 1e3 / 30 * .92, EG = 1e3 / 30 * 1.08;
    class oG {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
      }
      frame(GG, bG) {
        const ZG = GG - this.lastMs;
        this.lastMs = GG;
        const wG = function(GG) {
          if (GG <= 0 || GG > 100) return -1;
          if (GG <= dG) return 0;
          if (GG >= JG && GG <= rG) return 1;
          return GG >= zG && GG <= EG ? 2 : -1
        }(ZG);
        0 === wG && 2 === this.runBand && bG && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), wG !== this.runBand && (this.runBand = wG, this.runLength = 0), wG < 0 || ++this.runLength < 3 || (0 === wG ? this.votes60++ : 1 === wG ? (this.votesMid++, this.sumMidMs += ZG) : (this.votes30++, bG && this.steadyVotes30++))
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
      }
    }
    const XG = pG.windowMs,
      uG = pG.settleMs,
      iG = pG.graceMs,
      CG = pG.minIntervals,
      WG = 1e3 * CG / XG,
      mG = Math.floor(1e4 / XG),
      IG = hG.backoffMs,
      FG = hG.maxMs;
    class vG {
      constructor(GG, bG) {
        let {
          lowest: ZG,
          startStep: wG = 0,
          noGain: SG = null,
          upWait: LG = null
        } = bG;
        this.hooks = GG, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0, this.refresh = new oG, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.slowMasked = !1, this.log = [], this.windows = [], this.lastTargetFps = fG.maxFps, this.lowest = ZG, this.step = Math.min(wG, ZG), this.noGain = SG, this.climbing = this.step > 0;
        const yG = ZG + 1;
        this.downUntilMs = new Array(yG).fill(0), this.downBackoffMs = new Array(yG).fill(0), this.noGainFps = new Array(yG).fill(0), this.noGainFps[0] = null === SG ? 0 : SG.fps, this.upFailures = new Array(yG).fill(0), this.upUntilMs = new Array(yG).fill(0), null !== LG && LG.step >= 0 && LG.step < yG && (this.upUntilMs[LG.step] = LG.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(GG, ZG && !wG), !ZG) return void this.leave(GG);
        const SG = GG - this.lastFrameMs,
          LG = this.resizeStall(GG);
        if (SG > 2e3 && !LG && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = GG, this.quietUntilMs = Math.max(this.quietUntilMs, GG + iG), this.graceUntilMs = GG + iG, this.windowStartMs = -1, void(this.slowStartMs = -1);
        SG > 500 && (this.hitch(GG), LG && (this.slowStartMs = -1)), this.lastFrameMs = GG, GG >= this.quietUntilMs && this.countWindow(GG, bG, wG) || bG && GG >= this.graceUntilMs && this.countSlow(GG, wG)
      }
      countWindow(GG, bG, ZG) {
        if (this.windowStartMs < 0) return !!bG && (this.windowStartMs = GG, this.lastDrawnMs = GG, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = ZG, !1);
        if (this.windowMasked ||= ZG, !bG) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, GG - this.lastDrawnMs), this.lastDrawnMs = GG;
        const wG = GG - this.windowStartMs;
        if (wG < XG) return !1;
        const SG = this.windowIntervals,
          LG = 1e3 * SG / wG,
          yG = this.windowHeld,
          kG = this.windowMaxIntervalMs,
          UG = this.windowMasked;
        if (this.windowStartMs = -1, SG < CG) return !1;
        this.slowStartMs = -1;
        const YG = this.targetFps(),
          VG = LG >= YG * fG.cleanShare && kG <= fG.cleanMaxIntervalMs && (0 === yG || LG >= YG);
        return this.decide(LG, 1, VG, LG < YG * fG.dropShare, UG, GG), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(fG.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(GG, bG) {
        if (this.slowStartMs < 0) return this.slowStartMs = GG, this.slowIntervals = 0, void(this.slowMasked = bG);
        this.slowMasked ||= bG, this.slowIntervals++;
        const ZG = GG - this.slowStartMs;
        if (ZG < 1e4) return;
        const wG = 1e3 * this.slowIntervals / ZG,
          SG = this.slowMasked;
        this.slowStartMs = -1, this.countSlow(GG, bG), wG < WG && (this.windowStartMs = -1, this.decide(wG, mG, !1, !0, SG, GG))
      }
      resizeStall(GG) {
        return this.lastFrameMs - this.resizedMs <= uG && GG - this.lastFrameMs <= 15e3
      }
      paused(GG) {
        this.refresh.frame(GG, !1), GG - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, GG + iG), this.graceUntilMs = GG + iG), this.lastFrameMs = GG, this.slowStartMs = -1, this.hitch(GG)
      }
      resized(GG) {
        this.resizedMs = GG, this.hitch(GG)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(GG) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(GG))
      }
      hitch(GG) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, GG + uG)
      }
      left(GG) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const bG = this.phase;
        "watch" !== bG.kind && (this.phase = {
          kind: "watch"
        }, "down" === bG.kind && (this.downUntilMs[bG.from] = GG + IG, this.noGainFps[bG.from] = 0, 0 === bG.from && null !== this.noGain && (this.noGain = {
          ...this.noGain,
          untilMs: Math.min(this.noGain.untilMs, GG + IG)
        })), this.setStep(bG.from, 0, GG, "left"), "up" === bG.kind && (this.climbed = bG.fromClimbed))
      }
      decide(GG, bG, ZG, wG, SG, LG) {
        128 === this.windows.length && this.windows.shift(), this.windows.push({
          atMs: LG,
          step: this.step,
          fps: Math.round(10 * GG) / 10,
          windows: bG,
          masked: SG,
          dropping: wG
        });
        const yG = this.phase;
        switch (yG.kind) {
          case "watch":
            return void this.watch(GG, bG, ZG, wG, SG, LG);
          case "down": {
            if (yG.judged += bG, yG.fpsSum += GG * bG, SG || (yG.clean += bG, yG.cleanFpsSum += GG * bG), yG.judged < QG.judgeWindows) return;
            const ZG = yG.clean > 0 ? yG.cleanFpsSum / yG.clean : yG.fpsSum / yG.judged;
            return void(ZG >= yG.fromFps * QG.keepGain ? this.keepDown(yG.from, ZG, LG) : this.noGainFrom(yG, ZG, LG))
          }
          case "up":
            return ZG ? void(++yG.judged >= KG.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: yG.from,
              heldWindows: 0,
              below: yG.fromClimbed
            }, this.record(LG, GG, "up_kept"))) : (SG ? (this.watchAt(yG.from), this.setStep(yG.from, GG, LG, "spoiled")) : this.failUp(this.step, yG.from, GG, LG), void(this.climbed = yG.fromClimbed))
        }
      }
      watch(GG, bG, ZG, wG, SG, LG) {
        const yG = this.climbed;
        null !== yG && !wG && !SG && ++yG.heldWindows >= KG.heldWindows && (this.climbed = null, this.record(LG, GG, "Ik"), this.hooks.Ik(this.step)), wG ? (this.dropRun += bG, this.dropRunFpsSum += GG * bG, this.dropRunMasked ||= SG, SG || (this.dropRunClean += bG, this.dropRunCleanFpsSum += GG * bG)) : this.resetDropRun(), SG && ZG || (this.cleanRun = ZG ? this.cleanRun + 1 : 0);
        const kG = null !== this.climbed ? KG : QG;
        if (this.dropRun >= (this.dropRunMasked ? kG.maskedWindows : kG.dropWindows)) {
          const bG = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
            ZG = this.dropRunClean >= QG.dropWindows && bG < this.noGainFps[this.step] * hG.heavierShare;
          this.resetDropRun();
          const wG = this.climbed;
          return void(null !== wG ? (this.failUp(this.step, wG.from, GG, LG), this.climbed = wG.below) : this.step < this.lowest && (ZG || this.waitOver(LG)) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: bG,
            early: !this.waitOver(LG),
            judged: 0,
            fpsSum: 0,
            clean: 0,
            cleanFpsSum: 0
          }, this.setStep(this.step + 1, bG, LG, "down")))
        }
        const UG = this.step - 1;
        UG >= 0 && this.cleanRun >= (this.climbing ? KG.climbWindows : KG.cleanWindows) && LG >= this.upUntilMs[UG] && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(UG, GG, LG, "up"))
      }
      waitOver(GG) {
        return !(0 === this.step && null !== this.noGain && GG < this.noGain.untilMs) && GG >= this.downUntilMs[this.step]
      }
      keepDown(GG, bG, ZG) {
        this.watchAt(this.step), this.downBackoffMs[GG] = 0, this.noGainFps[GG] = 0, this.record(ZG, bG, "down_kept"), 0 === GG && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.vQ(this.step)
      }
      noGainFrom(GG, bG, ZG) {
        var wG, SG;
        let {
          from: LG,
          fromFps: yG,
          early: kG
        } = GG;
        const UG = 0 === LG ? null !== (wG = null === (SG = this.noGain) || void 0 === SG ? void 0 : SG.backoffMs) && void 0 !== wG ? wG : 0 : this.downBackoffMs[LG],
          YG = 0 === UG ? IG : kG ? UG : Math.min(2 * UG, FG),
          VG = Math.max(yG, bG);
        this.downBackoffMs[LG] = YG, this.downUntilMs[LG] = ZG + YG, this.noGainFps[LG] = VG, 0 === LG && (this.noGain = {
          untilMs: ZG + YG,
          backoffMs: YG,
          fps: VG
        }, this.hooks.noGain(this.noGain)), this.watchAt(LG), this.setStep(LG, bG, ZG, "no_gain")
      }
      failUp(GG, bG, ZG, wG) {
        this.climbing = !1;
        const SG = ++this.upFailures[GG],
          LG = KG.failWaitsMs;
        this.upUntilMs[GG] = wG + LG[Math.min(SG, LG.length) - 1], this.watchAt(bG), this.setStep(bG, ZG, wG, "up_failed"), this.hooks.upFailed(GG)
      }
      watchAt(GG) {
        this.phase = {
          kind: "watch"
        }, this.climbed = GG === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1, this.dropRunClean = 0, this.dropRunCleanFpsSum = 0
      }
      setStep(GG, bG, ZG, wG) {
        const SG = GG !== this.step;
        SG && (this.climbed = null), this.step = GG, this.record(ZG, bG, wG), SG && (this.slowStartMs = -1, this.resized(ZG), this.hooks.changed(GG))
      }
      record(GG, bG, ZG) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: GG,
          step: this.step,
          fps: Math.round(10 * bG) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: ZG
        })
      }
    }
    var aG = ZG(34417),
      cG = ZG(3104),
      lG = ZG(34425);
    const jG = "autoGraphics",
      PG = 6048e5,
      MG = "startScale";

    function AG() {
      return (0, UG.N)(SG.e.get("clientEscMenuOptions").pixelScale) * (0, UG.G)()
    }

    function sG() {
      return (0, UG.t)(AG())
    }

    function qG() {
      const GG = VG.h.getItem(jG);
      return "object" !== typeof GG || null === GG || "string" !== typeof GG.gpu ? null : GG
    }

    function nG(GG) {
      return {
        untilEpochMs: Date.now() + (GG.untilMs - performance.now()),
        backoffMs: GG.backoffMs,
        fps: GG.fps
      }
    }

    function gG(GG) {
      return void 0 === GG || "number" !== typeof GG.fps ? null : {
        untilMs: performance.now() + (GG.untilEpochMs - Date.now()),
        backoffMs: GG.backoffMs,
        fps: GG.fps
      }
    }
    let eG = null;

    function RG() {
      if (null === eG) {
        const GG = new URLSearchParams(window.location.search).get("msaa");
        eG = SG.e.get("clientEscMenuOptions").antiAliasing && ("0" === GG || "1" !== GG && !(0, kG.d)("antiAliasing") && (0, cG.g)())
      }
      return eG
    }

    function TG(GG) {
      const bG = "number" === typeof GG ? Date.now() - GG : -1;
      return bG >= 0 && bG < PG
    }
    let HG = null;

    function tG() {
      return HG ??= (0, LG.getDeviceDefaultPixelScale)(), DG(HG)
    }

    function DG(GG) {
      const bG = SG.e.get("clientEscMenuOptions");
      return bG.pixelSmoothing && !(0, kG.d)("pixelScale") && bG.pixelScale === GG
    }
    let NG = null,
      OG = 0;

    function xG() {
      if (null === NG || OG !== AG()) {
        var GG;
        OG = AG();
        const bG = Number(null !== (GG = new URLSearchParams(window.location.search).get(MG)) && void 0 !== GG ? GG : ""),
          ZG = sG();
        if (bG > 0 && bG <= 1) NG = (0, UG.E)(ZG, ZG[0] / bG);
        else {
          const GG = qG(),
            bG = (0, UG.E)(ZG, (0, UG.F)(AG())),
            wG = !(0, cG.n)() && TG(null === GG || void 0 === GG ? void 0 : GG.heldAt) && (null === GG || void 0 === GG ? void 0 : GG.heldTarget) === AG() ? null === GG || void 0 === GG ? void 0 : GG.heldN : void 0;
          NG = "number" === typeof wG ? Math.min(bG, (0, UG.E)(ZG, wG)) : bG
        }
      }
      return NG
    }

    function BG(GG, bG) {
      var ZG;
      const wG = bG.indexOf(null !== (ZG = GG.failedUpN) && void 0 !== ZG ? ZG : -1);
      return wG >= 0 && TG(GG.failedUpAt) ? {
        step: wG,
        untilMs: performance.now() + YG.c.stepUp.failWaitsMs[0]
      } : null
    }
    let Gb = null,
      bb = !1,
      Zb = "";
    const wb = new Set;

    function Sb() {
      for (const GG of wb) GG()
    }

    function Lb() {
      return bb ? null : (Qb(), null === Gb ? (null !== HG || null !== (0, LG.peekGpuVendor)() ? tG() : DG(1)) ? xG() : null : tG() ? Gb.currentStep() : null)
    }

    function yb() {
      const GG = Lb();
      if (null === GG) return null;
      const bG = sG(),
        ZG = bG[Math.min(GG, bG.length - 1)];
      return ZG === kb() ? null : ZG
    }

    function kb() {
      return (0, UG.A)(SG.e.get("clientEscMenuOptions").pixelScale, (0, UG.G)())
    }

    function Ub() {
      return null !== Gb && null !== yb()
    }

    function Yb(GG) {
      return wb.add(GG), () => {
        wb.delete(GG)
      }
    }

    function Vb(GG, bG, ZG) {
      var SG;
      if (null !== Gb || bb || (0, cG.n)()) return;
      const LG = (0, aG.c)(GG, bG, ZG);
      null !== LG && ((0, cG.o)(LG.vendor), "" !== LG.renderer && (0, wG.p)(LG.vendor, LG.renderer)), Zb = `${GG}:${(null===LG||void 0===LG?void 0:LG.renderer)||(null===LG||void 0===LG?void 0:LG.vendor)||""}`, (null === (SG = qG()) || void 0 === SG ? void 0 : SG.gpu) !== Zb && (VG.h.setItem(jG, {
        gpu: Zb
      }), NG = null), fb(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var GG;
          null === (GG = Gb) || void 0 === GG || GG.hidden()
        } catch (bG) {
          ob(), console.error("The quality steps stopped", bG)
        }
      }))
    }
    let pb = 0;

    function fb() {
      var GG;
      const bG = null !== (GG = qG()) && void 0 !== GG ? GG : {
          gpu: Zb
        },
        ZG = sG();
      pb = AG(), Gb = new vG({
          changed: Sb,
          vQ: () => {
            Kb({
              heldN: void 0
            })
          },
          Ik: GG => {
            var bG;
            const ZG = sG()[GG],
              wG = {
                heldN: ZG,
                heldAt: Date.now(),
                heldTarget: AG()
              };
            (null === (bG = qG()) || void 0 === bG ? void 0 : bG.failedUpN) === ZG && (wG.failedUpN = void 0), Kb(wG)
          },
          upFailed: GG => {
            Kb({
              failedUpN: sG()[GG],
              failedUpAt: Date.now()
            })
          },
          noGain: GG => {
            Kb({
              noGain: null === GG ? void 0 : nG(GG)
            })
          }
        }, {
          lowest: ZG.length - 1,
          startStep: xG(),
          noGain: gG(bG.noGain),
          upWait: BG(bG, ZG)
        }),
        function(GG) {
          const bG = {
            get step() {
              return GG.currentStep()
            },
            get n() {
              var GG;
              return null !== (GG = yb()) && void 0 !== GG ? GG : kb()
            },
            get scale() {
              var GG;
              return sG()[0] / (null !== (GG = yb()) && void 0 !== GG ? GG : kb())
            },
            get msaaOff() {
              return RG()
            },
            log: GG.log,
            windows: GG.windows
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: bG,
            configurable: !0
          })
        }(Gb), Sb()
    }

    function Qb() {
      null !== Gb && AG() !== pb && (NG = null, fb())
    }

    function Kb(GG) {
      VG.h.setItem(jG, {
        ...qG(),
        ...GG,
        gpu: Zb
      })
    }
    let hb = 0,
      db = 0,
      Jb = 0,
      rb = !1;

    function zb() {
      hb++
    }

    function Eb(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Qb(), null !== Gb && (GG - Jb >= 1e3 && (rb = hb - db > YG.c.sceneChange.meshesPerSecond, db = hb, Jb = GG), lG.c.isHeld() ? Gb.paused(GG) : Gb.frame(GG, bG, ZG && !document.hidden && tG(), rb || wG > 0 || (0, yG.t)()))
    }

    function ob() {
      if (!bb) {
        bb = !0, null !== Gb && (Gb = null, Kb({
          noGain: void 0
        }));
        try {
          Sb()
        } catch (GG) {
          console.error("The quality steps' resize to the player's n failed", GG)
        }
      }
    }

    function Xb() {
      var GG;
      null === (GG = Gb) || void 0 === GG || GG.resized(performance.now())
    }
  },
  34417: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(80),
      SG = ZG(111);

    function LG(GG, bG, ZG) {
      if ("webgpu" === GG) return ZG ? ((0, wG.seedGpuVendor)(ZG), {
        vendor: ZG,
        renderer: ""
      }) : null;
      try {
        const ZG = "webgl" === GG ? bG.getContext("webgl2") : bG.getContext("webgl");
        "webgl" === GG && ZG && (0, SG.v)(ZG);
        const LG = null === ZG || void 0 === ZG ? void 0 : ZG.getExtension("WEBGL_debug_renderer_info");
        if (ZG && LG) {
          const GG = String(ZG.getParameter(LG.UNMASKED_VENDOR_WEBGL)),
            bG = String(ZG.getParameter(LG.UNMASKED_RENDERER_WEBGL));
          return (0, wG.seedGpuVendor)(GG), (0, SG.B)(GG, bG), {
            vendor: GG,
            renderer: bG
          }
        }
        ZG && (0, SG.B)(String(ZG.getParameter(ZG.VENDOR)), String(ZG.getParameter(ZG.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);