export const id = 186;
export const ids = [186];
export const modules = {
  8757: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Lz,
      f: () => Bt,
      i: () => Pt,
      m: () => Ht,
      n: () => Yt,
      p: () => Wt,
      r: () => Ot,
      u: () => vt,
      y: () => rt,
      A: () => ot
    });
    var Fz = sz(30),
      Wz = sz(106),
      Xz = sz(1571),
      Oz = sz(4063),
      oz = sz(2588),
      vz = sz(2607),
      Uz = sz(44);
    const {
      windows: Kz,
      target: uz,
      stepDown: Nz,
      stepUp: bz,
      noGain: wz
    } = vz.c, Dz = 1e3 / 60 * 1.08, gz = 1e3 / 55, Hz = 1e3 / 45, Bz = 1e3 / 30 * .92, Pz = 1e3 / 30 * 1.08;
    class rz {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(zz) {
        const tz = zz - this.lastMs;
        this.lastMs = zz;
        const sz = function(zz) {
          if (zz <= 0 || zz > 100) return -1;
          if (zz <= Dz) return 0;
          if (zz >= gz && zz <= Hz) return 1;
          return zz >= Bz && zz <= Pz ? 2 : -1
        }(tz);
        sz !== this.runBand && (this.runBand = sz, this.runLength = 0), sz < 0 || ++this.runLength < 3 || (0 === sz ? this.votes60++ : 1 === sz ? (this.votesMid++, this.sumMidMs += tz) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const Yz = Kz.windowMs,
      xz = Kz.settleMs,
      mz = Kz.graceMs,
      Jz = Kz.minIntervals,
      Iz = 1e3 * Jz / Yz,
      Cz = wz.backoffMs,
      ez = wz.maxMs;
    class Zz {
      constructor(zz, tz) {
        let {
          lowest: sz,
          startStep: Fz = 0,
          noGain: Wz = null,
          upWait: Xz = null
        } = tz;
        this.hooks = zz, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new rz, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = uz.maxFps, this.lowest = sz, this.step = Math.min(Fz, sz), this.noGain = Wz, this.climbing = this.step > 0;
        const Oz = sz + 1;
        this.downUntilMs = new Array(Oz).fill(0), this.downBackoffMs = new Array(Oz).fill(0), this.upFailures = new Array(Oz).fill(0), this.upUntilMs = new Array(Oz).fill(0), null !== Xz && Xz.step >= 0 && Xz.step < Oz && (this.upUntilMs[Xz.step] = Xz.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(zz), !sz) return void this.leave(zz);
        const Wz = zz - this.lastFrameMs,
          Xz = this.resizeStall(zz);
        if (Wz > 2e3 && !Xz && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = zz, this.quietUntilMs = Math.max(this.quietUntilMs, zz + mz), this.graceUntilMs = zz + mz, this.windowStartMs = -1, void(this.slowStartMs = -1);
        Wz > 500 && (this.hitch(zz), Xz && (this.slowStartMs = -1)), this.lastFrameMs = zz, zz >= this.quietUntilMs && this.countWindow(zz, tz, Fz) || tz && zz >= this.graceUntilMs && this.countSlow(zz)
      }
      countWindow(zz, tz, sz) {
        if (this.windowStartMs < 0) return !!tz && (this.windowStartMs = zz, this.lastDrawnMs = zz, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = sz, !1);
        if (this.windowMasked ||= sz, !tz) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, zz - this.lastDrawnMs), this.lastDrawnMs = zz;
        const Fz = zz - this.windowStartMs;
        if (Fz < Yz) return !1;
        const Wz = this.windowIntervals,
          Xz = 1e3 * Wz / Fz,
          Oz = this.windowHeld,
          oz = this.windowMaxIntervalMs,
          vz = this.windowMasked;
        if (this.windowStartMs = -1, Wz < Jz) return !1;
        this.slowStartMs = -1;
        const Uz = this.targetFps(),
          Kz = Xz >= Uz * uz.cleanShare && oz <= uz.cleanMaxIntervalMs && (0 === Oz || Xz >= Uz);
        return this.decide(Xz, Kz, Xz < Uz * uz.dropShare, vz, zz), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(uz.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(zz) {
        if (this.slowStartMs < 0) return this.slowStartMs = zz, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const tz = zz - this.slowStartMs;
        if (tz < 1e4) return;
        const sz = 1e3 * this.slowIntervals / tz;
        this.slowStartMs = -1, this.countSlow(zz), sz < Iz && (this.windowStartMs = -1, this.decide(sz, !1, !0, !1, zz))
      }
      resizeStall(zz) {
        return this.lastFrameMs - this.resizedMs <= xz && zz - this.lastFrameMs <= 15e3
      }
      paused(zz) {
        this.refresh.frame(zz), zz - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, zz + mz), this.graceUntilMs = zz + mz), this.lastFrameMs = zz, this.slowStartMs = -1, this.hitch(zz)
      }
      resized(zz) {
        this.resizedMs = zz, this.hitch(zz)
      }
      hidden() {
        this.leave(this.lastFrameMs)
      }
      leave(zz) {
        this.wasMeasuring && (this.wasMeasuring = !1, this.left(zz))
      }
      hitch(zz) {
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, zz + xz)
      }
      left(zz) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const tz = this.phase;
        "watch" !== tz.kind && (this.phase = {
          kind: "watch"
        }, "down" === tz.kind && (this.downUntilMs[tz.from] = Math.max(this.downUntilMs[tz.from], zz + Cz)), this.setStep(tz.from, 0, zz, "left"), "up" === tz.kind && (this.climbed = tz.fromClimbed))
      }
      decide(zz, tz, sz, Fz, Wz) {
        const Xz = this.phase;
        switch (Xz.kind) {
          case "watch":
            return void this.watch(zz, tz, sz, Fz, Wz);
          case "down":
            if (Xz.judged++, Xz.fpsSum += zz, Xz.dropped ||= sz, Xz.judged < Nz.judgeWindows) return;
            return void(!Xz.dropped || Xz.fpsSum / Xz.judged >= Xz.fromFps * Nz.keepGain ? this.keepDown(Xz.from, Xz.fpsSum / Xz.judged, Wz) : this.noGainFrom(Xz.from, Xz.fromFps, Wz));
          case "up":
            return tz ? void(++Xz.judged >= bz.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: Xz.from,
              heldWindows: 0,
              below: Xz.fromClimbed
            }, this.record(Wz, zz, "up_kept"))) : (Fz ? (this.watchAt(Xz.from), this.setStep(Xz.from, zz, Wz, "spoiled")) : this.failUp(this.step, Xz.from, zz, Wz), void(this.climbed = Xz.fromClimbed))
        }
      }
      watch(zz, tz, sz, Fz, Wz) {
        const Xz = this.climbed;
        if (null !== Xz && !sz && !Fz && ++Xz.heldWindows >= bz.heldWindows && (this.climbed = null, this.record(Wz, zz, "po"), this.hooks.po(this.step)), sz ? (this.dropRun++, this.dropRunFpsSum += zz, this.dropRunMasked ||= Fz) : this.resetDropRun(), Fz && tz || (this.cleanRun = tz ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? Nz.maskedWindows : Nz.dropWindows)) {
          const tz = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const sz = this.climbed;
          return void(null !== sz ? (this.failUp(this.step, sz.from, zz, Wz), this.climbed = sz.below) : this.step < this.lowest && this.downAllowed(Wz) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: tz,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, zz, Wz, "down")))
        }
        const Oz = this.step - 1;
        Oz >= 0 && this.cleanRun >= (this.climbing ? bz.climbWindows : bz.cleanWindows) && this.upAllowed(Oz, Wz) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(Oz, zz, Wz, "up"))
      }
      downAllowed(zz) {
        return !(0 === this.step && null !== this.noGain && zz < this.noGain.untilMs) && zz >= this.downUntilMs[this.step]
      }
      upAllowed(zz, tz) {
        return this.upFailures[zz] <= bz.failWaitsMs.length && tz >= this.upUntilMs[zz]
      }
      keepDown(zz, tz, sz) {
        this.watchAt(this.step), this.downBackoffMs[zz] = 0, this.record(sz, tz, "down_kept"), 0 === zz && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.Ow(this.step)
      }
      noGainFrom(zz, tz, sz) {
        var Fz, Wz;
        const Xz = 0 === zz ? null !== (Fz = null === (Wz = this.noGain) || void 0 === Wz ? void 0 : Wz.backoffMs) && void 0 !== Fz ? Fz : 0 : this.downBackoffMs[zz],
          Oz = 0 === Xz ? Cz : Math.min(2 * Xz, ez);
        this.downBackoffMs[zz] = Oz, this.downUntilMs[zz] = sz + Oz, 0 === zz && (this.noGain = {
          untilMs: sz + Oz,
          backoffMs: Oz
        }, this.hooks.noGain(this.noGain)), this.watchAt(zz), this.setStep(zz, tz, sz, "no_gain")
      }
      failUp(zz, tz, sz, Fz) {
        this.climbing = !1;
        const Wz = ++this.upFailures[zz];
        this.upUntilMs[zz] = Wz <= bz.failWaitsMs.length ? Fz + bz.failWaitsMs[Wz - 1] : Number.POSITIVE_INFINITY, this.watchAt(tz), this.setStep(tz, sz, Fz, "up_failed"), this.hooks.upFailed(zz)
      }
      watchAt(zz) {
        this.phase = {
          kind: "watch"
        }, this.climbed = zz === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(zz, tz, sz, Fz) {
        const Wz = zz !== this.step;
        Wz && (this.climbed = null), this.step = zz, this.record(sz, tz, Fz), Wz && (this.slowStartMs = -1, this.resized(sz), this.hooks.changed(zz))
      }
      record(zz, tz, sz) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: zz,
          step: this.step,
          fps: Math.round(10 * tz) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: sz
        })
      }
    }
    var Gz = sz(8764),
      Tz = sz(2844),
      cz = sz(8771);
    const jz = "autoGraphics",
      Az = 6048e5,
      yz = "startScale";

    function Mz() {
      return (0, oz.J)(Fz.b.get("clientEscMenuOptions").pixelScale) * (0, oz.E)()
    }

    function dz() {
      return (0, oz.p)(Mz())
    }

    function hz() {
      const zz = Uz.f.getItem(jz);
      return "object" !== typeof zz || null === zz || "string" !== typeof zz.gpu ? null : zz
    }

    function Qz(zz) {
      return {
        untilEpochMs: Date.now() + (zz.untilMs - performance.now()),
        backoffMs: zz.backoffMs
      }
    }

    function kz(zz) {
      return zz ? {
        untilMs: performance.now() + (zz.untilEpochMs - Date.now()),
        backoffMs: zz.backoffMs
      } : null
    }
    let iz = null;

    function Lz() {
      if (null === iz) {
        const zz = new URLSearchParams(window.location.search).get("msaa");
        iz = Fz.b.get("clientEscMenuOptions").antiAliasing && ("0" === zz || "1" !== zz && !(0, Oz.d)("antiAliasing") && (0, Tz.c)())
      }
      return iz
    }

    function lz(zz) {
      const tz = "number" === typeof zz ? Date.now() - zz : -1;
      return tz >= 0 && tz < Az
    }
    let nz = null;

    function az() {
      return nz ??= (0, Wz.getDeviceDefaultPixelScale)(), qz(nz)
    }

    function qz(zz) {
      const tz = Fz.b.get("clientEscMenuOptions");
      return tz.pixelSmoothing && !(0, Oz.d)("pixelScale") && tz.pixelScale === zz
    }
    let Sz = null,
      Vz = 0;

    function Rz() {
      if (null === Sz || Vz !== Mz()) {
        var zz;
        Vz = Mz();
        const tz = Number(null !== (zz = new URLSearchParams(window.location.search).get(yz)) && void 0 !== zz ? zz : ""),
          sz = dz();
        if (tz > 0 && tz <= 1) Sz = (0, oz.z)(sz, sz[0] / tz);
        else {
          const zz = hz(),
            tz = (0, oz.z)(sz, (0, oz.C)(Mz())),
            Fz = !(0, Tz.i)() && lz(null === zz || void 0 === zz ? void 0 : zz.heldAt) && (null === zz || void 0 === zz ? void 0 : zz.heldTarget) === Mz() ? null === zz || void 0 === zz ? void 0 : zz.heldN : void 0;
          Sz = "number" === typeof Fz ? Math.min(tz, (0, oz.z)(sz, Fz)) : tz
        }
      }
      return Sz
    }

    function pz(zz, tz) {
      var sz;
      const Fz = tz.indexOf(null !== (sz = zz.failedUpN) && void 0 !== sz ? sz : -1);
      return Fz >= 0 && lz(zz.failedUpAt) ? {
        step: Fz,
        untilMs: performance.now() + vz.c.stepUp.failWaitsMs[0]
      } : null
    }
    let fz = null,
      Ez = !1,
      zt = "";
    const tt = new Set;

    function st() {
      for (const zz of tt) zz()
    }

    function Ft() {
      return Ez ? null : (ut(), null === fz ? (null !== nz || null !== (0, Wz.peekGpuVendor)() ? az() : qz(1)) ? Rz() : null : az() ? fz.currentStep() : null)
    }

    function Wt() {
      const zz = Ft();
      if (null === zz) return null;
      const tz = dz(),
        sz = tz[Math.min(zz, tz.length - 1)];
      return sz === Xt() ? null : sz
    }

    function Xt() {
      return (0, oz.w)(Fz.b.get("clientEscMenuOptions").pixelScale, (0, oz.E)())
    }

    function Ot() {
      return null !== fz && null !== Wt()
    }

    function ot(zz) {
      return tt.add(zz), () => {
        tt.delete(zz)
      }
    }

    function vt(zz, tz, sz) {
      var Fz;
      if (null !== fz || Ez || (0, Tz.i)()) return;
      const Wz = (0, Gz.e)(zz, tz, sz);
      null !== Wz && (0, Tz.j)(Wz.vendor), zt = `${zz}:${(null===Wz||void 0===Wz?void 0:Wz.renderer)||(null===Wz||void 0===Wz?void 0:Wz.vendor)||""}`, (null === (Fz = hz()) || void 0 === Fz ? void 0 : Fz.gpu) !== zt && (Uz.f.setItem(jz, {
        gpu: zt
      }), Sz = null), Kt(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var zz;
          null === (zz = fz) || void 0 === zz || zz.hidden()
        } catch (tz) {
          rt(), console.error("The quality steps stopped", tz)
        }
      }))
    }
    let Ut = 0;

    function Kt() {
      var zz;
      const tz = null !== (zz = hz()) && void 0 !== zz ? zz : {
          gpu: zt
        },
        sz = dz();
      Ut = Mz(), fz = new Zz({
          changed: st,
          Ow: () => {
            Nt({
              heldN: void 0
            })
          },
          po: zz => {
            var tz;
            const sz = dz()[zz],
              Fz = {
                heldN: sz,
                heldAt: Date.now(),
                heldTarget: Mz()
              };
            (null === (tz = hz()) || void 0 === tz ? void 0 : tz.failedUpN) === sz && (Fz.failedUpN = void 0), Nt(Fz)
          },
          upFailed: zz => {
            Nt({
              failedUpN: dz()[zz],
              failedUpAt: Date.now()
            })
          },
          noGain: zz => {
            Nt({
              noGain: null === zz ? void 0 : Qz(zz)
            })
          }
        }, {
          lowest: sz.length - 1,
          startStep: Rz(),
          noGain: kz(tz.noGain),
          upWait: pz(tz, sz)
        }),
        function(zz) {
          const tz = {
            get step() {
              return zz.currentStep()
            },
            get n() {
              var zz;
              return null !== (zz = Wt()) && void 0 !== zz ? zz : Xt()
            },
            get scale() {
              var zz;
              return dz()[0] / (null !== (zz = Wt()) && void 0 !== zz ? zz : Xt())
            },
            get msaaOff() {
              return Lz()
            },
            log: zz.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: tz,
            configurable: !0
          })
        }(fz), st()
    }

    function ut() {
      null !== fz && Mz() !== Ut && (Sz = null, Kt())
    }

    function Nt(zz) {
      Uz.f.setItem(jz, {
        ...hz(),
        ...zz,
        gpu: zt
      })
    }
    let bt = 0,
      wt = 0,
      Dt = 0,
      gt = !1;

    function Ht() {
      bt++
    }

    function Bt() {
      return bt
    }

    function Pt(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ut(), null !== fz && (zz - Dt >= 1e3 && (gt = bt - wt > vz.c.sceneChange.meshesPerSecond, wt = bt, Dt = zz), cz.e.isHeld() ? fz.paused(zz) : fz.frame(zz, tz, sz && !document.hidden && az(), gt || Fz > 0 || (0, Xz.r)()))
    }

    function rt() {
      if (!Ez) {
        Ez = !0, null !== fz && (fz = null, Nt({
          noGain: void 0
        }));
        try {
          st()
        } catch (zz) {
          console.error("The quality steps' resize to the player's n failed", zz)
        }
      }
    }

    function Yt() {
      var zz;
      null === (zz = fz) || void 0 === zz || zz.resized(performance.now())
    }
  },
  8764: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz
    });
    var Fz = sz(106),
      Wz = sz(129);

    function Xz(zz, tz, sz) {
      if ("webgpu" === zz) return sz ? ((0, Fz.seedGpuVendor)(sz), {
        vendor: sz,
        renderer: ""
      }) : null;
      try {
        const sz = "webgl" === zz ? tz.getContext("webgl2") : tz.getContext("webgl"),
          Xz = null === sz || void 0 === sz ? void 0 : sz.getExtension("WEBGL_debug_renderer_info");
        if (sz && Xz) {
          const zz = String(sz.getParameter(Xz.UNMASKED_VENDOR_WEBGL)),
            tz = String(sz.getParameter(Xz.UNMASKED_RENDERER_WEBGL));
          return (0, Fz.seedGpuVendor)(zz), (0, Wz.u)(zz, tz), {
            vendor: zz,
            renderer: tz
          }
        }
        sz && (0, Wz.u)(String(sz.getParameter(sz.VENDOR)), String(sz.getParameter(sz.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);