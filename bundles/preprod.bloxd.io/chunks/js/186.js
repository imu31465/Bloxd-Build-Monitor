export const id = 186;
export const ids = [186];
export const modules = {
  8911: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => yz,
      e: () => Xu,
      i: () => fu,
      j: () => wu,
      m: () => ru,
      n: () => nu,
      q: () => lu,
      r: () => tu,
      v: () => su,
      y: () => Mu
    });
    var Ez = bz(20),
      nz = bz(96),
      iz = bz(1595),
      lz = bz(4193),
      Mz = bz(2646),
      tz = bz(2663),
      Hz = bz(33);
    const {
      windows: Oz,
      target: pz,
      stepDown: dz,
      stepUp: Fz,
      noGain: Zz
    } = tz.e, Rz = 1e3 / 60 * 1.08, Kz = 1e3 / 55, wz = 1e3 / 45, Xz = 1e3 / 30 * .92, fz = 1e3 / 30 * 1.08;
    class sz {
      constructor() {
        this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0
      }
      frame(zz) {
        const uz = zz - this.lastMs;
        this.lastMs = zz;
        const bz = function(zz) {
          if (zz <= 0 || zz > 100) return -1;
          if (zz <= Rz) return 0;
          if (zz >= Kz && zz <= wz) return 1;
          return zz >= Xz && zz <= fz ? 2 : -1
        }(uz);
        bz !== this.runBand && (this.runBand = bz, this.runLength = 0), bz < 0 || ++this.runLength < 3 || (0 === bz ? this.votes60++ : 1 === bz ? (this.votesMid++, this.sumMidMs += uz) : this.votes30++)
      }
      hz() {
        return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 ? 30 : 60
      }
    }
    const rz = Oz.windowMs,
      oz = Oz.settleMs,
      Nz = Oz.graceMs,
      vz = Oz.minIntervals,
      xz = 1e3 * vz / rz,
      Jz = Zz.backoffMs,
      Az = Zz.maxMs;
    class Tz {
      constructor(zz, uz) {
        let {
          lowest: bz,
          startStep: Ez = 0,
          noGain: nz = null,
          upWait: iz = null
        } = uz;
        this.hooks = zz, this.step = void 0, this.lowest = void 0, this.phase = {
          kind: "watch"
        }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbed = null, this.cleanRun = 0, this.dropRun = 0, this.dropRunMasked = !1, this.dropRunFpsSum = 0, this.refresh = new sz, this.wasMeasuring = !1, this.lastFrameMs = -1, this.resizedMs = Number.NEGATIVE_INFINITY, this.quietUntilMs = 0, this.graceUntilMs = 0, this.windowStartMs = -1, this.lastDrawnMs = 0, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = !1, this.slowStartMs = -1, this.slowIntervals = 0, this.log = [], this.lastTargetFps = pz.maxFps, this.lowest = bz, this.step = Math.min(Ez, bz), this.noGain = nz, this.climbing = this.step > 0;
        const lz = bz + 1;
        this.downUntilMs = new Array(lz).fill(0), this.downBackoffMs = new Array(lz).fill(0), this.upFailures = new Array(lz).fill(0), this.upUntilMs = new Array(lz).fill(0), null !== iz && iz.step >= 0 && iz.step < lz && (this.upUntilMs[iz.step] = iz.untilMs)
      }
      currentStep() {
        return this.step
      }
      frame(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this.refresh.frame(zz), !bz) return void this.leave(zz);
        const nz = zz - this.lastFrameMs,
          iz = this.resizeStall(zz);
        if (nz > 2e3 && !iz && this.leave(this.lastFrameMs), !this.wasMeasuring) return this.wasMeasuring = !0, this.lastFrameMs = zz, this.quietUntilMs = Math.max(this.quietUntilMs, zz + Nz), this.graceUntilMs = zz + Nz, this.windowStartMs = -1, void(this.slowStartMs = -1);
        nz > 500 && (this.hitch(zz), iz && (this.slowStartMs = -1)), this.lastFrameMs = zz, zz >= this.quietUntilMs && this.countWindow(zz, uz, Ez) || uz && zz >= this.graceUntilMs && this.countSlow(zz)
      }
      countWindow(zz, uz, bz) {
        if (this.windowStartMs < 0) return !!uz && (this.windowStartMs = zz, this.lastDrawnMs = zz, this.windowIntervals = 0, this.windowHeld = 0, this.windowMaxIntervalMs = 0, this.windowMasked = bz, !1);
        if (this.windowMasked ||= bz, !uz) return this.windowHeld++, !1;
        this.windowIntervals++, this.windowMaxIntervalMs = Math.max(this.windowMaxIntervalMs, zz - this.lastDrawnMs), this.lastDrawnMs = zz;
        const Ez = zz - this.windowStartMs;
        if (Ez < rz) return !1;
        const nz = this.windowIntervals,
          iz = 1e3 * nz / Ez,
          lz = this.windowHeld,
          Mz = this.windowMaxIntervalMs,
          tz = this.windowMasked;
        if (this.windowStartMs = -1, nz < vz) return !1;
        this.slowStartMs = -1;
        const Hz = this.targetFps(),
          Oz = iz >= Hz * pz.cleanShare && Mz <= pz.cleanMaxIntervalMs && (0 === lz || iz >= Hz);
        return this.decide(iz, Oz, iz < Hz * pz.dropShare, tz, zz), !0
      }
      targetFps() {
        return this.lastTargetFps = Math.min(pz.maxFps, this.refresh.hz()), this.lastTargetFps
      }
      countSlow(zz) {
        if (this.slowStartMs < 0) return this.slowStartMs = zz, void(this.slowIntervals = 0);
        this.slowIntervals++;
        const uz = zz - this.slowStartMs;
        if (uz < 1e4) return;
        const bz = 1e3 * this.slowIntervals / uz;
        this.slowStartMs = -1, this.countSlow(zz), bz < xz && (this.windowStartMs = -1, this.decide(bz, !1, !0, !1, zz))
      }
      resizeStall(zz) {
        return this.lastFrameMs - this.resizedMs <= oz && zz - this.lastFrameMs <= 15e3
      }
      paused(zz) {
        this.refresh.frame(zz), zz - this.lastFrameMs > 2e3 && (this.quietUntilMs = Math.max(this.quietUntilMs, zz + Nz), this.graceUntilMs = zz + Nz), this.lastFrameMs = zz, this.slowStartMs = -1, this.hitch(zz)
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
        this.windowStartMs = -1, this.quietUntilMs = Math.max(this.quietUntilMs, zz + oz)
      }
      left(zz) {
        this.windowStartMs = -1, this.slowStartMs = -1, this.cleanRun = 0, this.resetDropRun();
        const uz = this.phase;
        "watch" !== uz.kind && (this.phase = {
          kind: "watch"
        }, "down" === uz.kind && (this.downUntilMs[uz.from] = Math.max(this.downUntilMs[uz.from], zz + Jz)), this.setStep(uz.from, 0, zz, "left"), "up" === uz.kind && (this.climbed = uz.fromClimbed))
      }
      decide(zz, uz, bz, Ez, nz) {
        const iz = this.phase;
        switch (iz.kind) {
          case "watch":
            return void this.watch(zz, uz, bz, Ez, nz);
          case "down":
            if (iz.judged++, iz.fpsSum += zz, iz.dropped ||= bz, iz.judged < dz.judgeWindows) return;
            return void(!iz.dropped || iz.fpsSum / iz.judged >= iz.fromFps * dz.keepGain ? this.keepDown(iz.from, iz.fpsSum / iz.judged, nz) : this.noGainFrom(iz.from, iz.fromFps, nz));
          case "up":
            return uz ? void(++iz.judged >= Fz.trialWindows && (this.watchAt(this.step), this.climbed = {
              from: iz.from,
              heldWindows: 0,
              below: iz.fromClimbed
            }, this.record(nz, zz, "up_kept"))) : (Ez ? (this.watchAt(iz.from), this.setStep(iz.from, zz, nz, "spoiled")) : this.failUp(this.step, iz.from, zz, nz), void(this.climbed = iz.fromClimbed))
        }
      }
      watch(zz, uz, bz, Ez, nz) {
        const iz = this.climbed;
        if (null !== iz && !bz && !Ez && ++iz.heldWindows >= Fz.heldWindows && (this.climbed = null, this.record(nz, zz, "yM"), this.hooks.yM(this.step)), bz ? (this.dropRun++, this.dropRunFpsSum += zz, this.dropRunMasked ||= Ez) : this.resetDropRun(), Ez && uz || (this.cleanRun = uz ? this.cleanRun + 1 : 0), this.dropRun >= (this.dropRunMasked ? dz.maskedWindows : dz.dropWindows)) {
          const uz = this.dropRunFpsSum / this.dropRun;
          this.resetDropRun();
          const bz = this.climbed;
          return void(null !== bz ? (this.failUp(this.step, bz.from, zz, nz), this.climbed = bz.below) : this.step < this.lowest && this.downAllowed(nz) && (this.climbing = !1, this.phase = {
            kind: "down",
            from: this.step,
            fromFps: uz,
            judged: 0,
            fpsSum: 0,
            dropped: !1
          }, this.setStep(this.step + 1, zz, nz, "down")))
        }
        const lz = this.step - 1;
        lz >= 0 && this.cleanRun >= (this.climbing ? Fz.climbWindows : Fz.cleanWindows) && this.upAllowed(lz, nz) && (this.phase = {
          kind: "up",
          from: this.step,
          judged: 0,
          fromClimbed: this.climbed
        }, this.setStep(lz, zz, nz, "up"))
      }
      downAllowed(zz) {
        return !(0 === this.step && null !== this.noGain && zz < this.noGain.untilMs) && zz >= this.downUntilMs[this.step]
      }
      upAllowed(zz, uz) {
        return this.upFailures[zz] <= Fz.failWaitsMs.length && uz >= this.upUntilMs[zz]
      }
      keepDown(zz, uz, bz) {
        this.watchAt(this.step), this.downBackoffMs[zz] = 0, this.record(bz, uz, "down_kept"), 0 === zz && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.MZ(this.step)
      }
      noGainFrom(zz, uz, bz) {
        var Ez, nz;
        const iz = 0 === zz ? null !== (Ez = null === (nz = this.noGain) || void 0 === nz ? void 0 : nz.backoffMs) && void 0 !== Ez ? Ez : 0 : this.downBackoffMs[zz],
          lz = 0 === iz ? Jz : Math.min(2 * iz, Az);
        this.downBackoffMs[zz] = lz, this.downUntilMs[zz] = bz + lz, 0 === zz && (this.noGain = {
          untilMs: bz + lz,
          backoffMs: lz
        }, this.hooks.noGain(this.noGain)), this.watchAt(zz), this.setStep(zz, uz, bz, "no_gain")
      }
      failUp(zz, uz, bz, Ez) {
        this.climbing = !1;
        const nz = ++this.upFailures[zz];
        this.upUntilMs[zz] = nz <= Fz.failWaitsMs.length ? Ez + Fz.failWaitsMs[nz - 1] : Number.POSITIVE_INFINITY, this.watchAt(uz), this.setStep(uz, bz, Ez, "up_failed"), this.hooks.upFailed(zz)
      }
      watchAt(zz) {
        this.phase = {
          kind: "watch"
        }, this.climbed = zz === this.step ? this.climbed : null, this.cleanRun = 0, this.resetDropRun()
      }
      resetDropRun() {
        this.dropRun = 0, this.dropRunFpsSum = 0, this.dropRunMasked = !1
      }
      setStep(zz, uz, bz, Ez) {
        const nz = zz !== this.step;
        nz && (this.climbed = null), this.step = zz, this.record(bz, uz, Ez), nz && (this.slowStartMs = -1, this.resized(bz), this.hooks.changed(zz))
      }
      record(zz, uz, bz) {
        64 === this.log.length && this.log.shift(), this.log.push({
          atMs: zz,
          step: this.step,
          fps: Math.round(10 * uz) / 10,
          targetFps: Math.round(10 * this.lastTargetFps) / 10,
          why: bz
        })
      }
    }
    var Lz = bz(8913),
      Pz = bz(2866),
      Gz = bz(8915);
    const az = "autoGraphics",
      Vz = 6048e5,
      mz = "startScale";

    function qz() {
      return (0, Mz.F)(Ez.e.get("clientEscMenuOptions").pixelScale) * (0, Mz.C)()
    }

    function hz() {
      return (0, Mz.n)(qz())
    }

    function Uz() {
      const zz = Hz.g.getItem(az);
      return "object" !== typeof zz || null === zz || "string" !== typeof zz.gpu ? null : zz
    }

    function cz(zz) {
      return {
        untilEpochMs: Date.now() + (zz.untilMs - performance.now()),
        backoffMs: zz.backoffMs
      }
    }

    function gz(zz) {
      return zz ? {
        untilMs: performance.now() + (zz.untilEpochMs - Date.now()),
        backoffMs: zz.backoffMs
      } : null
    }
    let Sz = null;

    function yz() {
      if (null === Sz) {
        const zz = new URLSearchParams(window.location.search).get("msaa");
        Sz = Ez.e.get("clientEscMenuOptions").antiAliasing && ("0" === zz || "1" !== zz && !(0, lz.e)("antiAliasing") && (0, Pz.c)())
      }
      return Sz
    }

    function Dz(zz) {
      const uz = "number" === typeof zz ? Date.now() - zz : -1;
      return uz >= 0 && uz < Vz
    }
    let Qz = null;

    function Wz() {
      return Qz ??= (0, nz.getDeviceDefaultPixelScale)(), ez(Qz)
    }

    function ez(zz) {
      const uz = Ez.e.get("clientEscMenuOptions");
      return uz.pixelSmoothing && !(0, lz.e)("pixelScale") && uz.pixelScale === zz
    }
    let jz = null,
      Iz = 0;

    function Bz() {
      if (null === jz || Iz !== qz()) {
        var zz;
        Iz = qz();
        const uz = Number(null !== (zz = new URLSearchParams(window.location.search).get(mz)) && void 0 !== zz ? zz : ""),
          bz = hz();
        if (uz > 0 && uz <= 1) jz = (0, Mz.y)(bz, bz[0] / uz);
        else {
          const zz = Uz(),
            uz = (0, Mz.y)(bz, (0, Mz.A)(qz())),
            Ez = !(0, Pz.g)() && Dz(null === zz || void 0 === zz ? void 0 : zz.heldAt) && (null === zz || void 0 === zz ? void 0 : zz.heldTarget) === qz() ? null === zz || void 0 === zz ? void 0 : zz.heldN : void 0;
          jz = "number" === typeof Ez ? Math.min(uz, (0, Mz.y)(bz, Ez)) : uz
        }
      }
      return jz
    }

    function Cz(zz, uz) {
      var bz;
      const Ez = uz.indexOf(null !== (bz = zz.failedUpN) && void 0 !== bz ? bz : -1);
      return Ez >= 0 && Dz(zz.failedUpAt) ? {
        step: Ez,
        untilMs: performance.now() + tz.e.stepUp.failWaitsMs[0]
      } : null
    }
    let Yz = null,
      kz = !1,
      zu = "";
    const uu = new Set;

    function bu() {
      for (const zz of uu) zz()
    }

    function Eu() {
      return kz ? null : (pu(), null === Yz ? (null !== Qz || null !== (0, nz.peekGpuVendor)() ? Wz() : ez(1)) ? Bz() : null : Wz() ? Yz.currentStep() : null)
    }

    function nu() {
      const zz = Eu();
      if (null === zz) return null;
      const uz = hz(),
        bz = uz[Math.min(zz, uz.length - 1)];
      return bz === iu() ? null : bz
    }

    function iu() {
      return (0, Mz.s)(Ez.e.get("clientEscMenuOptions").pixelScale, (0, Mz.C)())
    }

    function lu() {
      return null !== Yz && null !== nu()
    }

    function Mu(zz) {
      return uu.add(zz), () => {
        uu.delete(zz)
      }
    }

    function tu(zz, uz, bz) {
      var Ez;
      if (null !== Yz || kz || (0, Pz.g)()) return;
      const nz = (0, Lz.d)(zz, uz, bz);
      null !== nz && (0, Pz.h)(nz.vendor), zu = `${zz}:${(null===nz||void 0===nz?void 0:nz.renderer)||(null===nz||void 0===nz?void 0:nz.vendor)||""}`, (null === (Ez = Uz()) || void 0 === Ez ? void 0 : Ez.gpu) !== zu && (Hz.g.setItem(az, {
        gpu: zu
      }), jz = null), Ou(), document.addEventListener("visibilitychange", (() => {
        if (document.hidden) try {
          var zz;
          null === (zz = Yz) || void 0 === zz || zz.hidden()
        } catch (uz) {
          su(), console.error("The quality steps stopped", uz)
        }
      }))
    }
    let Hu = 0;

    function Ou() {
      var zz;
      const uz = null !== (zz = Uz()) && void 0 !== zz ? zz : {
          gpu: zu
        },
        bz = hz();
      Hu = qz(), Yz = new Tz({
          changed: bu,
          MZ: () => {
            du({
              heldN: void 0
            })
          },
          yM: zz => {
            var uz;
            const bz = hz()[zz],
              Ez = {
                heldN: bz,
                heldAt: Date.now(),
                heldTarget: qz()
              };
            (null === (uz = Uz()) || void 0 === uz ? void 0 : uz.failedUpN) === bz && (Ez.failedUpN = void 0), du(Ez)
          },
          upFailed: zz => {
            du({
              failedUpN: hz()[zz],
              failedUpAt: Date.now()
            })
          },
          noGain: zz => {
            du({
              noGain: null === zz ? void 0 : cz(zz)
            })
          }
        }, {
          lowest: bz.length - 1,
          startStep: Bz(),
          noGain: gz(uz.noGain),
          upWait: Cz(uz, bz)
        }),
        function(zz) {
          const uz = {
            get step() {
              return zz.currentStep()
            },
            get n() {
              var zz;
              return null !== (zz = nu()) && void 0 !== zz ? zz : iu()
            },
            get scale() {
              var zz;
              return hz()[0] / (null !== (zz = nu()) && void 0 !== zz ? zz : iu())
            },
            get msaaOff() {
              return yz()
            },
            log: zz.log
          };
          Object.defineProperty(window, "__qualitySteps", {
            value: uz,
            configurable: !0
          })
        }(Yz), bu()
    }

    function pu() {
      null !== Yz && qz() !== Hu && (jz = null, Ou())
    }

    function du(zz) {
      Hz.g.setItem(az, {
        ...Uz(),
        ...zz,
        gpu: zu
      })
    }
    let Fu = 0,
      Zu = 0,
      Ru = 0,
      Ku = !1;

    function wu() {
      Fu++
    }

    function Xu() {
      return Fu
    }

    function fu(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      pu(), null !== Yz && (zz - Ru >= 1e3 && (Ku = Fu - Zu > tz.e.sceneChange.meshesPerSecond, Zu = Fu, Ru = zz), Gz.d.isHeld() ? Yz.paused(zz) : Yz.frame(zz, uz, bz && !document.hidden && Wz(), Ku || Ez > 0 || (0, iz.l)()))
    }

    function su() {
      if (!kz) {
        kz = !0, null !== Yz && (Yz = null, du({
          noGain: void 0
        }));
        try {
          bu()
        } catch (zz) {
          console.error("The quality steps' resize to the player's n failed", zz)
        }
      }
    }

    function ru() {
      var zz;
      null === (zz = Yz) || void 0 === zz || zz.resized(performance.now())
    }
  },
  8913: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(96),
      nz = bz(125);

    function iz(zz, uz, bz) {
      if ("webgpu" === zz) return bz ? ((0, Ez.seedGpuVendor)(bz), {
        vendor: bz,
        renderer: ""
      }) : null;
      try {
        const bz = "webgl" === zz ? uz.getContext("webgl2") : uz.getContext("webgl"),
          iz = null === bz || void 0 === bz ? void 0 : bz.getExtension("WEBGL_debug_renderer_info");
        if (bz && iz) {
          const zz = String(bz.getParameter(iz.UNMASKED_VENDOR_WEBGL)),
            uz = String(bz.getParameter(iz.UNMASKED_RENDERER_WEBGL));
          return (0, Ez.seedGpuVendor)(zz), (0, nz.t)(zz, uz), {
            vendor: zz,
            renderer: uz
          }
        }
        bz && (0, nz.t)(String(bz.getParameter(bz.VENDOR)), String(bz.getParameter(bz.RENDERER)))
      } catch {}
      return null
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);