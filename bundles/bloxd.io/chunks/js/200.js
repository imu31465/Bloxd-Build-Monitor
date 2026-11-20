export const id = 200;
export const ids = [200];
export const modules = {
  38538: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    class Fz {
      constructor(zz, tz) {
        this.read = zz, this.apply = tz, this.release = null
      }
      turn(zz, tz) {
        const sz = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: tz,
          forcedCameraDirection: [zz[0], zz[1], zz[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), tz + 100),
          transitionMs: sz
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(zz) {
        null !== this.release && (clearTimeout(this.release.timer), zz && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38057: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      f: () => Wz
    });
    const Fz = new Map;

    function Wz(zz, tz) {
      Fz.set(zz, tz)
    }

    function Xz(zz) {
      return zz ? Fz.get(zz) : void 0
    }
  },
  38947: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(37660);

    function Wz(zz, tz, sz) {
      var Wz, Xz, Oz, oz, vz, Uz, Kz;
      const uz = (0, Fz.c)(zz, tz, sz[0], sz[1], sz[2]),
        Nz = uz ? null !== (Wz = uz.textCell) && void 0 !== Wz ? Wz : uz.rect.anchor : sz,
        bz = tz(Nz[0], Nz[1], Nz[2]);
      return {
        pos: [sz[0], sz[1], sz[2]],
        noticeboardSpan: uz && {
          width: uz.rect.width,
          height: uz.rect.height
        },
        text: null !== (Xz = null === bz || void 0 === bz || null === (Oz = bz.persisted) || void 0 === Oz || null === (oz = Oz.shared) || void 0 === oz ? void 0 : oz.text) && void 0 !== Xz ? Xz : "",
        textSize: null !== (vz = null === bz || void 0 === bz || null === (Uz = bz.persisted) || void 0 === Uz || null === (Kz = Uz.shared) || void 0 === Kz ? void 0 : Kz.textSize) && void 0 !== vz ? vz : null
      }
    }
  },
  37927: (zz, tz, sz) => {
    function Fz(zz) {
      switch (zz.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    sz.d(tz, {
      c: () => Wz,
      g: () => Xz,
      k: () => Fz
    });
    const Wz = 4,
      Xz = 3
  },
  38558: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      g: () => Xz
    });
    var Fz = sz(321);
    const Wz = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Xz {
      constructor(zz) {
        this.importGame = zz, this.loads = new Map, this.loaded = new Map
      }
      load(zz) {
        const tz = (0, Fz.Tb)(zz);
        if (!Wz.has(tz)) return Promise.resolve(void 0);
        let sz = this.loads.get(tz);
        return sz || (sz = this.importGame(tz).then((zz => {
          const sz = zz.default;
          if ("function" !== typeof sz) throw new Error(`${tz}'s client code has no default-exported factory`);
          return this.loaded.set(tz, sz), sz
        })).catch((zz => {
          throw this.loads.delete(tz), zz
        })), this.loads.set(tz, sz)), sz
      }
      loadedFactory(zz) {
        const tz = (0, Fz.Tb)(zz);
        if (!Wz.has(tz)) return;
        const sz = this.loaded.get(tz);
        if (!sz) throw new Error(`${tz}'s client code started before it loaded`);
        return sz
      }
    }
  },
  38950: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz
    });
    var Fz = sz(9023),
      Wz = sz(8866),
      Xz = sz(2965);

    function Oz(zz) {
      if (zz === Fz.c) return 0;
      const tz = (0, Xz.b)(zz);
      if (void 0 !== tz && tz <= Wz.MAX_BLOCK_ID) return tz;
      const sz = (0, Xz.b)(zz.split("|")[0]);
      if (void 0 !== sz && sz <= Wz.MAX_BLOCK_ID && (0, Wz.rootMetaDescOf)(sz) === zz) return sz;
      throw new Error(`Invalid block name. You sent ${zz}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38601: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(30);
    class Wz {
      constructor(zz) {
        this.screen = zz, this.hidesHud = !1
      }
      show(zz, tz) {
        this.screen.setFade(zz.colour, zz.alpha), this.screen.setLetterbox(!0 === tz.letterbox, zz.alpha < 1), this.setHudHidden(!0 === tz.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(zz) {
        this.hidesHud !== zz && (this.hidesHud = zz, Fz.b.set({
          isUiHiddenByCamera: zz
        }))
      }
    }
  },
  38569: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      d: () => Nz,
      h: () => uz,
      k: () => Oz,
      l: () => wz,
      o: () => vz,
      r: () => Dz,
      s: () => Uz,
      v: () => oz,
      w: () => Kz
    });
    const Fz = Math.PI / 2 - .001,
      Wz = 2 * Math.PI,
      Xz = 1e-9;

    function Oz(zz, tz) {
      tz.heading = zz.heading, tz.pitch = zz.pitch
    }

    function oz(zz, tz) {
      const sz = tz - zz;
      return sz - Wz * Math.floor((sz + Math.PI) / Wz)
    }

    function vz(zz, tz, sz) {
      return zz + oz(zz, tz) * sz
    }

    function Uz(zz) {
      if (!Number.isFinite(zz)) return zz;
      const tz = zz - Wz * Math.floor(zz / Wz);
      return tz < Wz ? tz : 0
    }

    function Kz(zz, tz) {
      return zz + oz(zz, tz)
    }

    function uz(zz) {
      return Math.max(-Fz, Math.min(Fz, zz))
    }

    function Nz(zz, tz, sz) {
      const Fz = Math.cos(tz);
      return sz[0] = Fz * Math.sin(zz), sz[1] = -Math.sin(tz), sz[2] = Fz * Math.cos(zz), sz
    }

    function bz(zz, tz, sz, Fz) {
      const Wz = Math.sqrt(zz * zz + sz * sz);
      return Wz < Xz && Math.abs(tz) < Xz || (Wz >= Xz && (Fz.heading = Math.atan2(zz, sz)), Fz.pitch = uz(Math.atan2(-tz, Wz) + 0)), Fz
    }

    function wz(zz, tz) {
      return bz(zz[0], zz[1], zz[2], tz)
    }

    function Dz(zz, tz, sz) {
      return bz(tz[0] - zz[0], tz[1] - zz[1], tz[2] - zz[2], sz)
    }
  },
  38594: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      g: () => Wz
    });
    var Fz = sz(38569);

    function Wz(zz) {
      var tz;
      const sz = "default" === zz.mode ? "movement" : null !== (tz = zz.playerFacing) && void 0 !== tz ? tz : "movement";
      return "cursor" === sz ? {
        facing: sz,
        mouseTurns: null
      } : {
        facing: sz,
        mouseTurns: "default" !== zz.mode && void 0 !== zz.playerLook ? "look" : "view"
      }
    }

    function Xz(zz, tz, sz, Wz, Xz, Oz) {
      return Oz.mJ = 0, Oz.eJ = 0, Oz.pointedAt = void 0, void 0 !== Wz ? Xz ? (Oz.pointedAt = Wz, zz) : (0, Fz.s)(Wz.heading) : Xz ? (Oz.mJ = tz, Oz.eJ = sz, zz) : (0, Fz.s)(zz + tz)
    }
  },
  38580: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Lz
    });
    var Fz = sz(38589),
      Wz = sz(38569),
      Xz = sz(36396);

    function Oz(zz, tz, sz, Fz) {
      if (!(Fz > 0)) return tz;
      const Wz = tz > zz ? Math.min(tz, zz + sz / Fz) : Math.max(tz, zz - sz / Fz);
      return Math.abs(tz - Wz) < 1e-9 ? tz : Wz
    }
    class oz {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Fz.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(zz) {
        !this.isGoingOut() && this.sinceTurnMs < Fz.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: zz
        } : (this.waiting = null, this.startOut(zz))
      }
      fadeIn(zz) {
        this.isGoingOut() ? this.sinceTurnMs < Fz.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: zz
        } : (this.waiting = null, this.startIn(zz)) : this.waiting = null
      }
      advance(zz) {
        const tz = this.waiting;
        if (null === tz) return this.step(zz);
        const sz = Fz.k.minFadeTurnMs - this.sinceTurnMs;
        if (sz > zz) return this.step(zz);
        const Wz = this.step(sz);
        return this.waiting = null, "out" === tz.turn ? this.startOut(tz.transition) : this.startIn(tz.minMs), this.step(zz - sz) || Wz
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(zz) {
        ("in" === this.phase || null === this.phase && this.clearMs < Fz.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = zz.colour), this.outMs = zz.outMs, this.holdMs = zz.holdMs, this.inMs = zz.inMs
      }
      startIn(zz) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(zz, this.inMs)
      }
      step(zz) {
        const tz = this.screen;
        this.sinceTurnMs += zz, null === this.phase && (this.clearMs += zz);
        let sz = !1,
          Wz = zz;
        if ("out" === this.phase) {
          const Fz = (1 - tz.alpha) * this.outMs;
          if (tz.alpha = Oz(tz.alpha, 1, zz, this.outMs), tz.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Wz = Math.max(0, zz - Fz), sz = !0
        }
        let Xz = zz;
        if ("hold" === this.phase) {
          this.heldMs += Wz;
          const zz = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Fz.k.minFadeTurnMs);
          if (zz < 0 || sz) return sz;
          this.phase = "in", this.sinceTurnMs = zz, Xz = zz
        }
        return "in" === this.phase && (tz.alpha = Oz(tz.alpha, 0, Xz, this.inMs), tz.alpha <= 0 && (this.phase = null, this.clearMs = 0)), sz
      }
    }
    var vz = sz(38567),
      Uz = sz(38591),
      Kz = sz(1824),
      uz = sz(36056);

    function Nz(zz, tz) {
      for (let sz = 0; sz < tz.length; sz++) tz[sz] = zz[sz]
    }

    function bz(zz, tz) {
      var sz;
      return null !== (sz = zz.fov) && void 0 !== sz ? sz : tz.getDefaultFov()
    }

    function wz(zz, tz, sz, Fz, Wz) {
      const Xz = 2 / Fz,
        Oz = Math.exp(-Xz * Wz);
      for (let oz = 0; oz < zz.length; oz++) {
        const Fz = zz[oz] - sz[oz],
          vz = (tz[oz] + Xz * Fz) * Wz;
        zz[oz] = sz[oz] + (Fz + vz) * Oz, tz[oz] = (tz[oz] - Xz * vz) * Oz
      }
    }
    class Dz {
      constructor(zz, tz, sz, Fz) {
        var Xz, Oz, oz, vz, Uz;
        this.settings = zz, this.PN = tz, this.targets = sz, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.hb = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Wz.s)((0, Kz.h)(null !== (Xz = zz.viewHeading) && void 0 !== Xz ? Xz : 0)),
          pitch: (0, Wz.h)((0, Kz.h)(null !== (Oz = zz.viewElevation) && void 0 !== Oz ? Oz : 45))
        }, this.closestDistance = null !== (oz = zz.closestDistance) && void 0 !== oz ? oz : Math.min(6, null !== (vz = zz.furthestDistance) && void 0 !== vz ? vz : 1 / 0), this.furthestDistance = null !== (Uz = zz.furthestDistance) && void 0 !== Uz ? Uz : Math.max(64, this.closestDistance);
        const uz = (0, Wz.d)(this.base.heading, this.base.pitch, this.forward),
          Nz = Fz.position,
          bz = this.closestDistance;
        this.goal = [Nz[0] + uz[0] * bz, Nz[1] + uz[1] * bz, Nz[2] + uz[2] * bz, bz, this.base.heading, this.base.pitch]
      }
      update(zz, tz, sz) {
        var Fz, Xz;
        this.placeGoal(null !== (Fz = this.settings.fov) && void 0 !== Fz ? Fz : this.PN.getBaseFov()), this.goal[4] = (0, Wz.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Oz = null !== (Xz = this.settings.smoothMs) && void 0 !== Xz ? Xz : 400;
        !this.started || Oz < 1 ? (Nz(this.goal, this.smoothed), this.hb.fill(0), this.started = !0) : wz(this.smoothed, this.hb, this.goal, Oz, zz), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Wz.h)(this.smoothed[5]), tz.apply(this.angles, sz);
        const oz = (0, Wz.d)(sz.heading, sz.pitch, this.forward);
        for (let Wz = 0; Wz < 3; Wz++) sz.position[Wz] = this.smoothed[Wz] - oz[Wz] * this.smoothed[3];
        sz.fov = bz(this.settings, this.PN)
      }
      continueFrom(zz) {
        zz instanceof Dz && (Nz(zz.goal, this.goal), Nz(zz.smoothed, this.smoothed), Nz(zz.hb, this.hb), this.framedTargets = zz.framedTargets, this.started = zz.started)
      }
      reset() {
        this.hb.fill(0), this.started = !1
      }
      placeGoal(zz) {
        var tz;
        let sz = 0;
        for (const Kz of this.settings.targets) {
          const zz = this.targets.currentAimPoint(Kz);
          zz && (0, vz.g)(zz, this.pointAt(sz++))
        }
        if (sz > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const zz = this.targets.aimPoint(this.PN.localPlayerId);
          zz && (0, vz.g)(zz, this.pointAt(sz++))
        }
        const Fz = this.goal;
        if (0 === sz) return void(Fz[3] = this.withinDistances(Fz[3]));
        for (let vz = 0; vz < 3; vz++) {
          let zz = 1 / 0,
            tz = -1 / 0;
          for (let Fz = 0; Fz < sz; Fz++) zz = Math.min(zz, this.points[Fz][vz]), tz = Math.max(tz, this.points[Fz][vz]);
          Fz[vz] = (zz + tz) / 2
        }
        let Wz = 0;
        for (let vz = 0; vz < sz; vz++) {
          const zz = this.points[vz];
          Wz = Math.max(Wz, Math.hypot(zz[0] - Fz[0], zz[1] - Fz[1], zz[2] - Fz[2]))
        }
        const Xz = Math.tan((0, Kz.h)(zz) / 2),
          Oz = Math.atan(Xz * (!0 === this.settings.letterbox ? uz.h : 1)),
          oz = Math.atan(Xz * this.PN.getAspectRatio()),
          Uz = (Wz + (null !== (tz = this.settings.padding) && void 0 !== tz ? tz : 2)) / Math.sin(Math.min(Oz, oz));
        Fz[3] = this.withinDistances(Uz)
      }
      withinDistances(zz) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, zz))
      }
      pointAt(zz) {
        return zz === this.points.length && this.points.push([0, 0, 0]), this.points[zz]
      }
    }
    class gz {
      constructor(zz) {
        this.limits = zz, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(zz) {
        this.limits && (this.yawOffset = zz.yawOffset, this.pitchOffset = zz.pitchOffset, this.idleMs = zz.idleMs)
      }
      update(zz, tz) {
        const sz = this.limits;
        if (!sz) return;
        const Fz = Number.isFinite(tz.mJ) ? tz.mJ : 0,
          Wz = Number.isFinite(tz.eJ) ? tz.eJ : 0;
        if (tz.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: tz.pointedAt.heading,
          pitch: tz.pointedAt.pitch
        };
        else if (0 !== Fz || 0 !== Wz) this.idleMs = 0, this.yawOffset += Fz, this.pitchOffset += Wz;
        else {
          const tz = Math.max(0, this.idleMs + zz - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += zz, void 0 !== sz.returnMs && tz > 0) {
            const zz = sz.returnMs > 0 ? Math.exp(-3 * tz / sz.returnMs) : 0;
            this.yawOffset *= zz, this.pitchOffset *= zz
          }
        }
        this.clampOffsets(sz)
      }
      clampOffsets(zz) {
        if (zz.maxYaw >= 180) this.yawOffset = (0, Wz.v)(0, this.yawOffset);
        else {
          const tz = (0, Kz.h)(zz.maxYaw);
          this.yawOffset = Math.max(-tz, Math.min(tz, this.yawOffset))
        }
        const tz = (0, Kz.h)(zz.maxPitch);
        this.pitchOffset = Math.max(-tz, Math.min(tz, this.pitchOffset))
      }
      apply(zz, tz) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Wz.v)(zz.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - zz.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const sz = (0, Wz.h)(zz.pitch + this.pitchOffset);
        this.pitchOffset = sz - zz.pitch, tz.heading = (0, Wz.s)(zz.heading + this.yawOffset), tz.pitch = sz
      }
      unapply(zz, tz) {
        tz.heading = (0, Wz.s)(zz.heading - this.yawOffset), tz.pitch = (0, Wz.h)(zz.pitch - this.pitchOffset)
      }
    }
    const Hz = 1e-6;

    function Bz(zz) {
      return Math.sqrt(zz[0] * zz[0] + zz[1] * zz[1] + zz[2] * zz[2])
    }

    function Pz(zz, tz, sz, Fz, Wz) {
      const Xz = Wz * Wz,
        Oz = Xz * Wz;
      return (2 * Oz - 3 * Xz + 1) * zz + (Oz - 2 * Xz + Wz) * tz + (-2 * Oz + 3 * Xz) * sz + (Oz - Xz) * Fz
    }

    function rz(zz, tz, sz, Fz, Wz) {
      const Xz = Wz * Wz;
      return (6 * Xz - 6 * Wz) * zz + (3 * Xz - 4 * Wz + 1) * tz + (-6 * Xz + 6 * Wz) * sz + (3 * Xz - 2 * Wz) * Fz
    }

    function Yz(zz, tz) {
      const sz = tz[0] - zz[0],
        Fz = tz[1] - zz[1],
        Wz = tz[2] - zz[2];
      return Math.sqrt(sz * sz + Fz * Fz + Wz * Wz)
    }

    function xz(zz, tz, sz, Fz, Wz, Xz) {
      for (let Oz = 0; Oz < 3; Oz++) Xz[Oz] = Wz ? zz[Oz] * Fz : sz[Oz] - tz[Oz];
      return Wz && function(zz, tz) {
        const sz = Bz(zz);
        if (sz > tz) {
          const Fz = tz / sz;
          zz[0] *= Fz, zz[1] *= Fz, zz[2] *= Fz
        }
      }(Xz, 3 * Yz(tz, sz)), Xz
    }

    function mz(zz, tz, sz, Fz) {
      for (let Wz = 0; Wz < 3; Wz++) Fz[Wz] = 6 * (tz[Wz] - zz[Wz]) - 2 * sz[Wz];
      if (Bz(Fz) < Hz)
        for (let Wz = 0; Wz < 3; Wz++) Fz[Wz] = tz[Wz] - zz[Wz];
      return Fz
    }

    function Jz(zz, tz) {
      return [2 * tz[0] - zz[0], 2 * tz[1] - zz[1], 2 * tz[2] - zz[2]]
    }

    function Iz(zz, tz, sz, Fz, Wz, Xz, Oz) {
      if (!Xz && !Oz) return 0;
      const oz = Xz ? zz : 2 * tz - sz,
        vz = Oz ? sz : 2 * tz - zz,
        Uz = Xz ? Fz : Wz,
        Kz = Oz ? Wz : Fz,
        uz = (tz - oz) / Uz,
        Nz = (vz - tz) / Kz;
      if (uz * Nz <= 0) return 0;
      const bz = (vz - oz) / (Uz + Kz),
        wz = 3 * Math.min(Math.abs(uz), Math.abs(Nz));
      return Math.max(-wz, Math.min(wz, bz))
    }

    function Cz(zz, tz, sz, Fz, Wz, Xz, Oz) {
      const {
        u: oz,
        segmentMs: vz
      } = zz;
      if (!zz.curved) return sz + (Fz - sz) * oz;
      return Pz(sz, Iz(tz, sz, Fz, zz.beforeMs, vz, Xz, !0) * vz, Fz, Iz(sz, Fz, Wz, vz, zz.afterMs, !0, Oz) * vz, oz)
    }

    function ez(zz) {
      return Math.abs(zz.pitch) >= Wz.c
    }
    class Zz {
      constructor(zz, tz, sz, Fz, Wz) {
        this.nodes = zz, this.prevNodes = sz, this.nextNodes = Fz, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
          heading: 0,
          pitch: 0
        }, this.fromAngles = {
          heading: 0,
          pitch: 0
        }, this.toAngles = {
          heading: 0,
          pitch: 0
        }, this.afterAngles = {
          heading: 0,
          pitch: 0
        }, this.borrowedAngles = {
          heading: 0,
          pitch: 0
        }, this.tangents = zz.map(((zz, sz) => this.nodeTangent(tz, Wz, sz)))
      }
      sample(zz, tz, sz) {
        const {
          index: Fz,
          toIndex: Xz,
          segmentMs: Oz,
          curved: oz
        } = zz, vz = this.fromAngles, Uz = this.toAngles, Kz = this.nodeAngles(Fz, sz.position, tz, vz), uz = this.nodeAngles(Xz, sz.position, tz, Uz);
        if (Oz > 0 && "aim" !== Kz && "aim" !== uz && this.liveTangent(zz, vz)) return sz.heading = (0, Wz.s)(vz.heading), void(sz.pitch = vz.pitch);
        if ("none" === Kz && "none" === uz) return;
        !oz && Oz > 0 && ("tangent" === Kz && this.liveTangent(zz, vz), "tangent" === uz && this.liveTangent(zz, Uz)), "none" === Kz ? (0, Wz.k)(Uz, vz) : "none" === uz && (0, Wz.k)(vz, Uz);
        const Nz = oz && zz.beforeIndex >= 0 && "none" !== this.nodeAngles(zz.beforeIndex, sz.position, tz, this.beforeAngles),
          bz = oz && zz.afterIndex >= 0 && "none" !== this.nodeAngles(zz.afterIndex, sz.position, tz, this.afterAngles),
          wz = (0, Wz.w)(vz.heading, Uz.heading),
          Dz = Cz(zz, Nz ? (0, Wz.w)(vz.heading, this.beforeAngles.heading) : 0, vz.heading, wz, bz ? (0, Wz.w)(wz, this.afterAngles.heading) : 0, Nz, bz);
        sz.heading = (0, Wz.s)(Dz), sz.pitch = (0, Wz.h)(Cz(zz, this.beforeAngles.pitch, vz.pitch, Uz.pitch, this.afterAngles.pitch, Nz, bz))
      }
      nodeAngles(zz, tz, sz, Fz) {
        const Wz = this.rawNodeAngles(zz, tz, sz, Fz);
        return "none" !== Wz && ez(Fz) && !this.borrowHeading(this.prevNodes[zz], tz, sz, Fz) && this.borrowHeading(this.nextNodes[zz], tz, sz, Fz), Wz
      }
      borrowHeading(zz, tz, sz, Fz) {
        const Wz = this.borrowedAngles;
        return !(zz < 0 || "none" === this.rawNodeAngles(zz, tz, sz, Wz) || ez(Wz)) && (Fz.heading = Wz.heading, !0)
      }
      rawNodeAngles(zz, tz, sz, Fz) {
        const Xz = this.nodes[zz].keyframe;
        if (Xz.lookDirection) return (0, Wz.l)(Xz.lookDirection, Fz), "aim";
        if (void 0 !== Xz.lookAt) {
          const zz = sz(Xz.lookAt);
          if (zz) return (0, Wz.r)(tz, zz, Fz), "aim"
        }
        const Oz = this.tangents[zz];
        return Oz ? ((0, Wz.k)(Oz, Fz), "tangent") : "none"
      }
      liveTangent(zz, tz) {
        const sz = this.nodes[zz.index].position,
          Fz = this.nodes[zz.toIndex].position,
          Xz = this.derivative;
        for (let Wz = 0; Wz < 3; Wz++) Xz[Wz] = rz(sz[Wz], zz.fromTangent[Wz], Fz[Wz], zz.toTangent[Wz], zz.u);
        return Bz(Xz) > 1e-9 ? ((0, Wz.l)(Xz, tz), !0) : !(Yz(sz, Fz) < Hz) && ((0, Wz.l)(mz(sz, Fz, zz.u < .5 ? zz.toTangent : zz.fromTangent, Xz), tz), !0)
      }
      nodeTangent(zz, tz, sz) {
        var Fz;
        const Xz = zz[sz];
        if (Bz(Xz) > 1e-9) return (0, Wz.l)(Xz, {
          heading: 0,
          pitch: 0
        });
        const Oz = null !== (Fz = this.restDirectionTo(sz, sz + 1, zz, tz)) && void 0 !== Fz ? Fz : this.restDirectionTo(sz, sz - 1, zz, tz);
        return Oz ? (0, Wz.l)(Oz, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(zz, tz, sz, Fz) {
        const Wz = this.nodes[zz],
          Xz = this.nodes[tz];
        if (!Xz || Yz(Wz.position, Xz.position) < Hz) return null;
        const [Oz, oz] = tz > zz ? [Wz, Xz] : [Xz, Wz], vz = xz(sz[tz], Oz.position, oz.position, oz.timeMs - Oz.timeMs, Fz, [0, 0, 0]);
        return mz(Oz.position, oz.position, vz, [0, 0, 0])
      }
    }

    function Gz(zz, tz) {
      const sz = zz.lookDirection || tz.lookDirection ? function(zz, tz) {
        if (!zz || !tz) return zz === tz;
        const sz = Bz(zz),
          Fz = Bz(tz);
        return Math.hypot(zz[0] / sz - tz[0] / Fz, zz[1] / sz - tz[1] / Fz, zz[2] / sz - tz[2] / Fz) < Hz
      }(zz.lookDirection, tz.lookDirection) : (Fz = zz.lookAt, Wz = tz.lookAt, "object" !== typeof Fz || "object" !== typeof Wz ? Fz === Wz : Yz(Fz, Wz) < Hz);
      var Fz, Wz;
      return Yz(zz.position, tz.position) < Hz && zz.fov === tz.fov && sz
    }
    class Tz {
      constructor(zz, tz, sz) {
        if (this.smooth = tz, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
            index: 0,
            toIndex: 0,
            u: 0,
            segmentMs: 0,
            curved: !1,
            beforeIndex: -1,
            afterIndex: -1,
            beforeMs: 0,
            afterMs: 0,
            fromTangent: [0, 0, 0],
            toTangent: [0, 0, 0]
          }, 0 === zz.length) throw new Error("A camera path needs at least one keyframe");
        for (let Xz = 1; Xz < zz.length; Xz++)
          if (!(zz[Xz].timeMs > zz[Xz - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = zz.map((zz => {
          var tz;
          return {
            timeMs: zz.timeMs,
            position: [...zz.position],
            keyframe: zz,
            easing: (0, Xz.q)(null !== (tz = zz.easing) && void 0 !== tz ? tz : "linear")
          }
        }));
        const Fz = this.nodes[0],
          Wz = this.nodes[this.nodes.length - 1],
          Oz = sz && this.nodes.length > 1;
        Oz && !Gz(Fz.keyframe, Wz.keyframe) && this.nodes.push({
          ...Fz,
          timeMs: Wz.timeMs + (Wz.timeMs - Fz.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Oz ? this.nodes[this.nodes.length - 1].timeMs - Fz.timeMs : 0, this.prevNodes = this.nodes.map(((zz, tz) => this.neighbour(tz, -1))), this.nextNodes = this.nodes.map(((zz, tz) => this.neighbour(tz, 1))), this.prevGaps = this.prevNodes.map(((zz, tz) => zz >= 0 ? this.gapMs(tz, -1) : 0)), this.nextGaps = this.nextNodes.map(((zz, tz) => zz >= 0 ? this.gapMs(tz, 1) : 0)), this.velocities = this.nodes.map(((zz, tz) => {
          const sz = this.prevNodes[tz],
            Fz = this.nextNodes[tz];
          return function(zz, tz, sz, Fz, Wz, Xz) {
            if (Xz[0] = 0, Xz[1] = 0, Xz[2] = 0, !zz && !sz) return Xz;
            const Oz = null !== zz && void 0 !== zz ? zz : Jz(null !== sz && void 0 !== sz ? sz : tz, tz),
              oz = null !== sz && void 0 !== sz ? sz : Jz(null !== zz && void 0 !== zz ? zz : tz, tz),
              vz = zz ? Fz : Wz,
              Uz = sz ? Wz : Fz,
              Kz = Yz(Oz, tz),
              uz = Yz(tz, oz);
            if (Kz < Hz || uz < Hz) return Xz;
            const Nz = Math.sqrt(Kz),
              bz = Math.sqrt(uz),
              wz = (Nz + bz) / (vz + Uz);
            for (let Dz = 0; Dz < 3; Dz++) {
              const zz = (tz[Dz] - Oz[Dz]) / Nz - (oz[Dz] - Oz[Dz]) / (Nz + bz) + (oz[Dz] - tz[Dz]) / bz;
              Xz[Dz] = zz * wz
            }
            return Xz
          }(sz >= 0 ? this.nodes[sz].position : null, zz.position, Fz >= 0 ? this.nodes[Fz].position : null, this.prevGaps[tz], this.nextGaps[tz], [0, 0, 0])
        })), this.aim = new Zz(this.nodes, this.velocities, this.prevNodes, this.nextNodes, tz)
      }
      sample(zz, tz, sz, Fz) {
        const Wz = this.findSegment(this.pathTime(zz));
        this.samplePosition(Wz, Fz.position), this.aim.sample(Wz, tz, Fz);
        const {
          beforeIndex: Xz,
          afterIndex: Oz
        } = Wz;
        Fz.fov = Cz(Wz, Xz >= 0 ? this.fovAt(Xz, sz) : 0, this.fovAt(Wz.index, sz), this.fovAt(Wz.toIndex, sz), Oz >= 0 ? this.fovAt(Oz, sz) : 0, Xz >= 0, Oz >= 0)
      }
      pathTime(zz) {
        const tz = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || zz <= tz) return zz;
        const sz = zz - tz;
        return tz + sz - this.loopMs * Math.floor(sz / this.loopMs)
      }
      findSegment(zz) {
        const tz = this.nodes,
          sz = this.segment;
        let Fz = sz.index;
        for (zz < tz[Fz].timeMs && (Fz = 0); Fz < tz.length - 2 && tz[Fz + 1].timeMs <= zz;) Fz++;
        const Wz = Math.min(Fz + 1, tz.length - 1),
          Oz = tz[Wz].timeMs - tz[Fz].timeMs;
        return sz.index = Fz, sz.toIndex = Wz, sz.segmentMs = Oz, sz.u = Oz > 0 ? (0, Xz.o)((zz - tz[Fz].timeMs) / Oz, tz[Fz].easing) : 1, sz.curved = this.smooth && Oz > 0, sz.beforeIndex = this.prevNodes[Fz], sz.afterIndex = this.nextNodes[Wz], sz.beforeMs = this.prevGaps[Fz], sz.afterMs = this.nextGaps[Wz], sz
      }
      samplePosition(zz, tz) {
        const {
          fromTangent: sz,
          toTangent: Fz,
          curved: Wz
        } = zz, Xz = this.nodes[zz.index].position, Oz = this.nodes[zz.toIndex].position;
        xz(this.velocities[zz.index], Xz, Oz, zz.segmentMs, Wz, sz), xz(this.velocities[zz.toIndex], Xz, Oz, zz.segmentMs, Wz, Fz);
        const oz = zz.u;
        for (let vz = 0; vz < 3; vz++) tz[vz] = Wz ? Pz(Xz[vz], sz[vz], Oz[vz], Fz[vz], oz) : Xz[vz] + (Oz[vz] - Xz[vz]) * oz
      }
      fovAt(zz, tz) {
        var sz;
        return null !== (sz = this.nodes[zz].keyframe.fov) && void 0 !== sz ? sz : tz
      }
      neighbour(zz, tz) {
        const sz = this.nodes.length - 1,
          Fz = zz + tz;
        return Fz >= 0 && Fz <= sz ? Fz : this.loopMs <= 0 || sz < 2 ? -1 : Fz < 0 ? sz - 1 : 1
      }
      gapMs(zz, tz) {
        const sz = this.nodes.length - 1;
        if (1 === tz) {
          const tz = zz === sz ? 0 : zz;
          return this.nodes[tz + 1].timeMs - this.nodes[tz].timeMs
        }
        const Fz = 0 === zz ? sz : zz;
        return this.nodes[Fz].timeMs - this.nodes[Fz - 1].timeMs
      }
    }
    class cz {
      constructor(zz) {
        this.PN = zz, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = tz => zz.getEntityPosition(tz), this.readAimPoint = tz => zz.getEntityAimPoint(tz)
      }
      aimPoint(zz) {
        return "string" !== typeof zz ? (0, vz.m)(zz, 3) ? zz : null : this.resolve(zz, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(zz) {
        const tz = "string" === typeof zz ? this.PN.getEntityAimPoint(zz) : zz;
        return tz && (0, vz.m)(tz, 3) ? tz : null
      }
      feetPosition(zz) {
        return this.resolve(zz, this.readFeet, this.lastFeet)
      }
      heading(zz) {
        const tz = this.PN.getEntityHeading(zz);
        if (null !== tz && Number.isFinite(tz)) return this.lastHeadings.set(zz, tz), tz;
        const sz = this.lastHeadings.get(zz);
        return void 0 !== sz ? sz : zz === this.PN.localPlayerId ? 0 : this.heading(this.PN.localPlayerId)
      }
      resolve(zz, tz, sz) {
        const Fz = tz(zz);
        let Wz = sz.get(zz);
        return Fz && (0, vz.m)(Fz, 3) ? (Wz || (Wz = [0, 0, 0], sz.set(zz, Wz)), Wz[0] = Fz[0], Wz[1] = Fz[1], Wz[2] = Fz[2], Wz) : Wz || (zz === this.PN.localPlayerId ? null : this.resolve(this.PN.localPlayerId, tz, sz))
      }
    }

    function jz(zz) {
      return {
        heading: zz.heading,
        pitch: zz.pitch
      }
    }

    function Az(zz, tz) {
      Number.isFinite(zz.heading) && Number.isFinite(zz.pitch) || (0, Wz.k)(tz, zz)
    }

    function yz(zz, tz, sz, Fz, Xz) {
      if (tz) return void(0, Wz.l)(tz, Xz);
      const Oz = Fz.aimPoint(sz);
      Oz && (0, Wz.r)(zz, Oz, Xz)
    }
    class Mz {
      constructor(zz, tz, sz, Fz) {
        this.settings = zz, this.PN = tz, this.targets = sz, this.base = void 0, this.base = jz(Fz)
      }
      update(zz, tz, sz) {
        var Fz;
        const Wz = this.settings;
        (0, vz.g)(Wz.position, sz.position), yz(Wz.position, Wz.lookDirection, null !== (Fz = Wz.lookAt) && void 0 !== Fz ? Fz : this.PN.localPlayerId, this.targets, this.base), tz.apply(this.base, sz), sz.fov = bz(Wz, this.PN)
      }
      continueFrom(zz) {
        zz instanceof Mz && (0, Wz.k)(zz.base, this.base)
      }
      reset(zz) {
        Az(this.base, zz)
      }
    }
    class dz {
      constructor(zz, tz, sz, Fz) {
        this.settings = zz, this.PN = tz, this.targets = sz, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.hb = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = jz(Fz), this.goal = [...Fz.position]
      }
      update(zz, tz, sz) {
        var Fz, Wz, Xz;
        const Oz = this.settings,
          oz = null !== (Fz = Oz.target) && void 0 !== Fz ? Fz : this.PN.localPlayerId,
          Uz = this.targets.feetPosition(oz);
        let Kz = !1;
        Uz && (Kz = this.foundFeet && Yz(this.lastFeet, Uz) > 32 + .1 * zz, (0, vz.g)(Uz, this.lastFeet), this.foundFeet = !0, this.placeGoal(Uz, oz));
        const uz = null !== (Wz = Oz.smoothMs) && void 0 !== Wz ? Wz : 0;
        !this.started || uz < 1 || Kz ? ((0, vz.g)(this.goal, this.smoothed), this.hb.fill(0), this.started = !0) : wz(this.smoothed, this.hb, this.goal, uz, zz), Kz && (this.distance = -1), (0, vz.g)(this.smoothed, sz.position);
        const Nz = !0 === Oz.avoidTerrain ? this.pullIn(oz, zz, sz) : 1;
        let Dz = this.goal;
        if ("target" === Oz.offsetSpace) Dz = sz.position;
        else if (Nz < 1) {
          Dz = this.aimOrigin;
          for (let zz = 0; zz < 3; zz++) Dz[zz] = sz.position[zz] + (this.goal[zz] - this.smoothed[zz]) * Nz
        }
        yz(Dz, Oz.lookDirection, null !== (Xz = Oz.lookAt) && void 0 !== Xz ? Xz : oz, this.targets, this.base), tz.apply(this.base, sz), sz.fov = bz(Oz, this.PN)
      }
      continueFrom(zz) {
        zz instanceof dz && (0, Fz.u)(zz.settings.target, this.settings.target) && ((0, Wz.k)(zz.base, this.base), (0, vz.g)(zz.goal, this.goal), (0, vz.g)(zz.lastFeet, this.lastFeet), this.foundFeet = zz.foundFeet, (0, vz.g)(zz.smoothed, this.smoothed), (0, vz.g)(zz.hb, this.hb), this.started = zz.started, !0 === zz.settings.avoidTerrain && (this.distance = zz.distance))
      }
      reset(zz) {
        Az(this.base, zz), this.hb.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(zz, tz, sz) {
        const Fz = this.targets.aimPoint(zz);
        if (!Fz) return 1;
        const Wz = sz.position,
          Xz = Yz(Fz, Wz);
        if (!(Xz > 0)) return 1;
        const Oz = this.toCamera;
        for (let vz = 0; vz < 3; vz++) Oz[vz] = (Wz[vz] - Fz[vz]) / Xz;
        const oz = function(zz, tz, sz) {
          return zz < 0 || tz < zz ? tz : tz + (zz - tz) * Math.exp(-sz / 150)
        }(this.distance, function(zz, tz, sz, Fz) {
          const Wz = zz.raycastTerrain(tz, sz, Fz);
          return null !== Wz && Number.isFinite(Wz) ? Math.min(Fz, Math.max(0, Wz - .2)) : Fz
        }(this.PN, Fz, Oz, Xz), tz);
        if (Xz - oz < .001) return this.distance = -1, 1;
        this.distance = oz;
        for (let vz = 0; vz < 3; vz++) Wz[vz] = Fz[vz] + Oz[vz] * oz;
        return oz / Xz
      }
      placeGoal(zz, tz) {
        const sz = this.settings.offset;
        let Fz = sz[0],
          Wz = sz[2];
        if ("target" === this.settings.offsetSpace) {
          const zz = this.targets.heading(tz),
            Xz = Math.cos(zz),
            Oz = Math.sin(zz);
          Fz = sz[0] * Xz + sz[2] * Oz, Wz = -sz[0] * Oz + sz[2] * Xz
        }
        this.goal[0] = zz[0] + Fz, this.goal[1] = zz[1] + sz[1], this.goal[2] = zz[2] + Wz
      }
    }
    class hz {
      constructor(zz, tz, sz, Fz) {
        var Wz, Xz;
        this.settings = zz, this.PN = tz, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = zz.keyframes.length > 0 ? new Tz(zz.keyframes, null === (Wz = zz.smooth) || void 0 === Wz || Wz, null !== (Xz = zz.loop) && void 0 !== Xz && Xz) : null, this.base = (0, vz.f)(Fz, (0, vz.h)()), this.resolveTarget = zz => sz.aimPoint(zz)
      }
      update(zz, tz, sz) {
        this.elapsedMs += zz;
        const Fz = bz(this.settings, this.PN);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Fz, this.base) : this.base.fov = Fz, (0, vz.g)(this.base.position, sz.position), sz.fov = this.base.fov, tz.apply(this.base, sz)
      }
      continueFrom(zz) {
        zz instanceof hz && (0, Fz.u)(zz.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = zz.elapsedMs, (0, vz.f)(zz.base, this.base))
      }
      reset(zz) {
        Az(this.base, zz), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Qz(zz, tz) {
      return (0, Fz.w)(zz, tz)
    }
    class kz {
      constructor(zz, tz, sz) {
        var Fz;
        this.settings = zz, this.PN = tz, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Wz = null !== sz && sz.settings.mode === zz.mode,
          Xz = Wz ? sz.pose : tz.getDefaultPose();
        this.pose = (0, vz.f)(Xz, (0, vz.h)()), this.lastGoodPose = (0, vz.f)(Wz ? sz.lastGoodPose : Xz, (0, vz.h)()), this.look = new gz(zz.playerLook), this.targets = null !== (Fz = null === sz || void 0 === sz ? void 0 : sz.targets) && void 0 !== Fz ? Fz : new cz(tz);
        const Oz = (0, vz.f)(Xz, (0, vz.h)());
        Wz && sz.look.unapply(Oz, Oz), this.mode = function(zz, tz, sz, Fz) {
          switch (zz.mode) {
            case "fixed":
              return new Mz(zz, tz, sz, Fz);
            case "follow":
              return new dz(zz, tz, sz, Fz);
            case "path":
              return new hz(zz, tz, sz, Fz);
            case "frame":
              return new Dz(zz, tz, sz, Fz)
          }
        }(zz, tz, this.targets, Oz), Wz && (this.look.continueFrom(sz.look), this.mode.continueFrom(sz.mode))
      }
      update(zz, tz) {
        return this.look.update(zz, tz), this.mode.update(zz, this.look, this.pose), (0, vz.k)(this.pose) ? (0, vz.f)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, vz.f)(this.lastGoodPose, this.pose), this.mode.reset((0, vz.k)(this.lastGoodPose) ? this.lastGoodPose : this.PN.getDefaultPose())), this.pose
      }
    }

    function iz(zz) {
      return [0, 0, zz[2], zz[3]]
    }
    class Lz {
      constructor(zz) {
        this.PN = zz, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new oz, this.shot = null, this.blend = null, this.mixed = (0, vz.h)(), this.output = (0, vz.h)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(zz) {
        const tz = (0, Uz.e)(zz);
        if ((0, Fz.u)(tz, this.pending ? this.pending.settings : this.settings)) return;
        const sz = Qz(this.settings, tz);
        if (void 0 !== tz.transition && !sz) return this.pending = {
          settings: tz,
          shot: "default" === tz.mode ? null : new kz(tz, this.PN, null)
        }, void this.fade.fadeOut(tz.transition);
        const Wz = null !== this.pending;
        this.pending = null, !Wz && sz || this.fade.fadeIn(Fz.k.minTransitionFadeMs), this.show(tz, !1)
      }
      show(zz, tz) {
        var sz, Wz;
        if ((0, Fz.u)(zz, this.settings)) return;
        const Oz = !tz && Qz(this.settings, zz);
        this.settings = zz;
        const oz = null !== this.blend && this.blend.elapsedMs > 0,
          Uz = (0, vz.f)(this.hasOutput ? this.output : this.PN.getDefaultPose(), (0, vz.h)());
        if (this.shot = "default" === zz.mode ? null : new kz(zz, this.PN, tz ? null : this.shot), Oz) return;
        const Kz = tz || !this.shot && !this.hasOutput ? 0 : null !== (sz = zz.blendInMs) && void 0 !== sz ? sz : 0;
        if (Kz <= 0) return void(this.blend = null);
        const uz = (0, Xz.q)(null !== (Wz = zz.blendEasing) && void 0 !== Wz ? Wz : "easeInOut");
        this.blend = {
          from: Uz,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Kz,
          easing: oz ? iz(uz) : uz
        }
      }
      getSettings() {
        return this.settings
      }
      getScreenFade() {
        return this.fade.getScreen()
      }
      getLoadingPositions() {
        return this.loadingPositions
      }
      isActive() {
        return null !== this.shot || null !== this.blend
      }
      update(zz, tz) {
        const sz = Number.isFinite(zz) && zz > 0 ? zz : 0;
        if (this.fade.advance(sz) && null !== this.pending) {
          const {
            settings: zz
          } = this.pending;
          this.pending = null, this.show(zz, !0)
        }
        this.loadingPositions.length = 0;
        const Fz = this.pending;
        if (null !== Fz && void 0 !== Fz && Fz.shot) {
          const zz = "path" === Fz.settings.mode ? 0 : sz;
          this.noteLoadingPosition(Fz.shot.update(zz, vz.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Oz = this.shot ? this.shot.update(sz, tz) : this.PN.getDefaultPose();
        this.shot && this.noteLoadingPosition(Oz.position);
        const oz = this.blend;
        if (!oz) return this.writeOutput(Oz);
        oz.elapsedMs += sz;
        const Uz = Math.min(1, oz.elapsedMs / oz.durationMs);
        if (oz.headingDelta = Number.isFinite(oz.headingDelta) ? (0, Wz.w)(oz.headingDelta, Oz.heading - oz.from.heading) : (0, Wz.v)(oz.from.heading, Oz.heading), (0, vz.p)(oz.from, Oz, oz.headingDelta, (0, Xz.o)(Uz, oz.easing), this.mixed), Uz >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else oz.fromScripted && this.noteLoadingPosition(oz.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(zz) {
        if (zz.every(Number.isFinite)) {
          const tz = this.loadingPositions;
          tz.push((0, vz.g)(zz, this.loadingSlots[tz.length]))
        }
      }
      writeOutput(zz) {
        const tz = this.output;
        (0, vz.k)(zz) ? (0, vz.f)(zz, tz) : this.hasOutput || (0, vz.f)(this.PN.getDefaultPose(), tz), tz.pitch = (0, Wz.h)(tz.pitch);
        const sz = this.PN.getDefaultFov(),
          Xz = Number.isFinite(sz) && sz > 0 && sz < 180,
          Oz = Xz ? Math.min(Fz.k.minFov, sz) : Fz.k.minFov,
          oz = Xz ? Math.max(Fz.k.maxFov, sz) : Fz.k.maxFov;
        return tz.fov = Number.isFinite(tz.fov) ? Math.min(oz, Math.max(Oz, tz.fov)) : oz, this.hasOutput = !0, tz
      }
    }
  },
  38567: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      f: () => oz,
      g: () => Oz,
      h: () => Xz,
      k: () => Uz,
      m: () => vz,
      p: () => Kz
    });
    var Fz = sz(38569);
    const Wz = {
      mJ: 0,
      eJ: 0
    };

    function Xz() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Oz(zz, tz) {
      return tz[0] = zz[0], tz[1] = zz[1], tz[2] = zz[2], tz
    }

    function oz(zz, tz) {
      return Oz(zz.position, tz.position), tz.heading = zz.heading, tz.pitch = zz.pitch, tz.fov = zz.fov, tz
    }

    function vz(zz, tz) {
      return Array.isArray(zz) && zz.length === tz && zz.every(Number.isFinite)
    }

    function Uz(zz) {
      return vz(zz.position, 3) && Number.isFinite(zz.heading) && Number.isFinite(zz.pitch) && Number.isFinite(zz.fov)
    }

    function Kz(zz, tz, sz, Wz, Xz) {
      for (let Fz = 0; Fz < 3; Fz++) Xz.position[Fz] = zz.position[Fz] + (tz.position[Fz] - zz.position[Fz]) * Wz;
      return Xz.heading = (0, Fz.s)(zz.heading + sz * Wz), Xz.pitch = zz.pitch + (tz.pitch - zz.pitch) * Wz, Xz.fov = zz.fov + (tz.fov - zz.fov) * Wz, Xz
    }
  },
  38591: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => mz,
      g: () => Nz
    });
    var Fz = sz(38589),
      Wz = sz(38567);
    const Xz = Fz.g,
      Oz = Fz.m;

    function oz(zz, tz, sz, Fz) {
      return Number.isFinite(zz) ? Math.min(sz, Math.max(tz, zz)) : Fz
    }

    function vz(zz, tz, sz) {
      return void 0 !== zz && Number.isFinite(zz) ? Math.min(sz, Math.max(tz, zz)) : void 0
    }

    function Uz(zz) {
      const tz = Fz.k.maxCoordinate;
      return [Math.min(tz, Math.max(-tz, zz[0])), Math.min(tz, Math.max(-tz, zz[1])), Math.min(tz, Math.max(-tz, zz[2]))]
    }

    function Kz(zz) {
      return "string" === typeof zz ? zz : (0, Wz.m)(zz, 3) ? Uz(zz) : void 0
    }
    const uz = new RegExp(Fz.q);

    function Nz(zz) {
      return "string" === typeof zz && uz.test(zz)
    }

    function bz(zz) {
      const tz = [];
      if (!Array.isArray(zz)) return tz;
      for (const sz of zz.slice(0, Fz.k.maxFrameTargets)) {
        const zz = Kz(sz);
        void 0 === zz || "string" === typeof zz && !Nz(zz) || tz.push(zz)
      }
      return tz
    }

    function wz(zz) {
      if (!(0, Wz.m)(zz, 3)) return;
      const tz = Math.max(Math.abs(zz[0]), Math.abs(zz[1]), Math.abs(zz[2])),
        sz = Math.hypot(zz[0] / tz, zz[1] / tz, zz[2] / tz);
      return 0 === tz || tz * sz < Fz.k.minDirectionLength ? void 0 : [zz[0] / tz / sz, zz[1] / tz / sz, zz[2] / tz / sz]
    }

    function Dz(zz) {
      if (void 0 !== zz) return "string" === typeof zz ? Xz.includes(zz) ? zz : void 0 : (0, Wz.m)(zz, 4) ? [oz(zz[0], 0, 1, 0), oz(zz[1], Fz.k.minEasingY, Fz.k.maxEasingY, 0), oz(zz[2], 0, 1, 1), oz(zz[3], Fz.k.minEasingY, Fz.k.maxEasingY, 1)] : "linear"
    }

    function gz(zz) {
      if (zz) return {
        maxYaw: oz(zz.maxYaw, 0, Fz.k.maxPlayerLook, 0),
        maxPitch: oz(zz.maxPitch, 0, Fz.k.maxPlayerLook, 0),
        returnMs: vz(zz.returnMs, 0, Fz.k.maxReturnMs)
      }
    }
    const Hz = new RegExp(Fz.c);

    function Bz(zz) {
      var tz;
      if ("object" !== typeof zz || null === zz) return;
      const sz = Fz.k.maxTransitionMs,
        Wz = Fz.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof zz.colour && Hz.test(zz.colour) ? zz.colour : Fz.d,
        outMs: oz(zz.outMs, Wz, sz, Wz),
        holdMs: oz(null !== (tz = zz.holdMs) && void 0 !== tz ? tz : 0, 0, sz, 0),
        inMs: oz(zz.inMs, Wz, sz, Wz)
      }
    }

    function Pz(zz) {
      return !0 === zz || void 0
    }

    function rz(zz) {
      if ("object" !== typeof zz || null === zz) return !1;
      const tz = zz.lookAt;
      return Number.isFinite(zz.timeMs) && (0, Wz.m)(zz.position, 3) && (void 0 === tz || "string" === typeof tz || (0, Wz.m)(tz, 3))
    }

    function Yz(zz) {
      return {
        ...zz,
        timeMs: oz(zz.timeMs, 0, Fz.k.maxPathMs, 0),
        position: Uz(zz.position),
        lookAt: Kz(zz.lookAt),
        lookDirection: wz(zz.lookDirection),
        fov: vz(zz.fov, Fz.k.minFov, Fz.k.maxFov),
        easing: Dz(zz.easing)
      }
    }

    function xz(zz) {
      const tz = [];
      if (!Array.isArray(zz)) return tz;
      for (const sz of zz.slice(0, Fz.k.maxKeyframes)) {
        if (!rz(sz)) continue;
        const zz = Yz(sz);
        (0 === tz.length || zz.timeMs > tz[tz.length - 1].timeMs) && tz.push(zz)
      }
      return tz
    }

    function mz(zz) {
      if ("object" !== typeof zz || null === zz) return {
        mode: "default"
      };
      const tz = {
          blendInMs: vz(zz.blendInMs, 0, Fz.k.maxBlendInMs),
          blendEasing: Dz(zz.blendEasing),
          transition: Bz(zz.transition),
          letterbox: Pz(zz.letterbox),
          hideHud: Pz(zz.hideHud)
        },
        sz = {
          mode: "default",
          ...tz
        };
      if ("default" === zz.mode || "fixed" === zz.mode && !(0, Wz.m)(zz.position, 3)) return sz;
      const Xz = {
        ...tz,
        fov: vz(zz.fov, Fz.k.minFov, Fz.k.maxFov),
        playerFacing: (uz = zz.playerFacing, Oz.includes(uz) ? uz : void 0),
        playerLook: gz(zz.playerLook)
      };
      var uz, Nz;
      switch (zz.mode) {
        case "fixed":
          return {
            ...zz, ...Xz, position: Uz(zz.position), lookAt: Kz(zz.lookAt), lookDirection: wz(zz.lookDirection)
          };
        case "follow":
          return {
            ...zz, ...Xz, target: "string" === typeof zz.target ? zz.target : void 0, lookAt: Kz(zz.lookAt), offset: (Nz = zz.offset, Array.isArray(Nz) ? [oz(Nz[0], -Fz.k.maxOffset, Fz.k.maxOffset, 0), oz(Nz[1], -Fz.k.maxOffset, Fz.k.maxOffset, 0), oz(Nz[2], -Fz.k.maxOffset, Fz.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: wz(zz.lookDirection), smoothMs: vz(zz.smoothMs, 0, Fz.k.maxSmoothMs)
          };
        case "path":
          return {
            ...zz, ...Xz, keyframes: xz(zz.keyframes)
          };
        case "frame":
          return {
            ...zz, ...Xz, targets: bz(zz.targets), viewHeading: vz(zz.viewHeading, -Fz.k.maxFrameHeading, Fz.k.maxFrameHeading), viewElevation: vz(zz.viewElevation, 0, Fz.k.maxFrameElevation), padding: vz(zz.padding, 0, Fz.k.maxFrameDistance), closestDistance: vz(zz.closestDistance, 0, Fz.k.maxFrameDistance), furthestDistance: vz(zz.furthestDistance, 0, Fz.k.maxFrameDistance), smoothMs: vz(zz.smoothMs, 0, Fz.k.maxSmoothMs)
          };
        default:
          return sz
      }
    }
  },
  38073: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz
    });
    var Fz = sz(1213);

    function Wz(zz) {
      const tz = /(\d*\.?\d+)px/.exec(zz);
      return tz ? Number(tz[1]) : null
    }

    function Xz(zz) {
      return zz.split(/[\s,]+/).pop()
    }
    let Oz = !1;
    const oz = {
      debug: !1,
      align: "center",
      vAlign: "middle",
      fontSize: 14,
      fontWeight: "",
      fontStyle: "",
      fontVariant: "",
      font: "Arial",
      lineHeight: null,
      justify: !1,
      drawText: function(zz, tz, Fz, oz, vz, Uz) {
        if (vz <= 0 || Uz <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Kz,
          fontVariant: uz,
          fontWeight: Nz,
          fontSize: bz,
          font: wz
        } = this, Dz = [Kz, uz, Nz, `${bz}px`, wz].filter(Boolean).join(" "), gz = [
          [Nz, `${bz}px`, Xz(wz)].filter(Boolean).join(" "), `${bz}px sans-serif`
        ], Hz = zz.font, Bz = function(zz, tz, sz) {
          for (const Fz of tz) {
            zz.font = Fz;
            const tz = Wz(zz.font),
              Oz = Xz(Fz);
            if (null !== tz && Math.abs(tz - sz) <= .5 && zz.font.toLowerCase().includes(Oz.toLowerCase())) return Fz
          }
          return null
        }(zz, [Dz, ...gz], bz);
        Bz !== Dz && function(zz, tz, Fz) {
          Oz || (Oz = !0, Promise.resolve().then((() => sz(1060))).then((sz => {
            let {
              SD: Wz
            } = sz;
            Wz(new Error("A canvas didn't take canvasTxt's font"), {
              font: zz,
              Ow: tz,
              drawnWith: null !== Fz && void 0 !== Fz ? Fz : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Dz, Hz, Bz);
        const Pz = Wz(zz.font);
        if (null === Bz && null !== Pz && Pz > 0) {
          const sz = bz / Pz;
          zz.save();
          try {
            return zz.scale(sz, sz), {
              height: this.drawLines(zz, tz, Fz / sz, oz / sz, vz / sz, Uz / sz, Pz).height * sz
            }
          } finally {
            zz.restore()
          }
        }
        return this.drawLines(zz, tz, Fz, oz, vz, Uz, bz)
      },
      drawLines: function(zz, tz, sz, Wz, Xz, Oz, oz) {
        const vz = sz + Xz,
          Uz = Wz + Oz;
        let Kz, uz = Wz + Oz / 2 + oz / 2;
        "right" === this.align ? (Kz = vz, zz.textAlign = "right") : "left" === this.align ? (Kz = sz, zz.textAlign = "left") : (Kz = sz + Xz / 2, zz.textAlign = "center");
        for (const Fz of tz) {
          zz.measureText(Fz).width >= Xz && (tz = tz.replace(Fz, ""))
        }
        tz = (0, Fz.T)(tz);
        const Nz = [],
          bz = tz.split("\n"),
          wz = this.justify ? zz.measureText("\u200a").width : 0;
        bz.forEach((tz => {
          let sz = zz.measureText(tz).width;
          if (sz <= Xz) Nz.push(tz);
          else {
            let Fz = tz;
            const Wz = Xz;
            let Oz, oz, vz;
            for (sz = zz.measureText(Fz).width; sz > Wz;) {
              for (Oz = 0, oz = 0, vz = ""; oz < Wz;) Oz++, vz = Fz.substr(0, Oz), oz = zz.measureText(vz).width;
              Oz--, vz = vz.substr(0, Oz);
              const tz = Oz;
              if (" " !== Fz.substr(Oz, 1)) {
                for (;
                  " " !== Fz.substr(Oz, 1) && 0 !== Oz;) Oz--;
                0 === Oz && (Oz = tz), vz = Fz.substr(0, Oz)
              }
              vz = this.justify ? this.justifyLine(zz, vz, wz, "\u200a", Xz) : vz, Fz = Fz.substr(Oz), sz = zz.measureText(Fz).width, Nz.push(vz)
            }
            sz > 0 && Nz.push(Fz)
          }
        }));
        const Dz = this.lineHeight ? this.lineHeight : this.getTextHeight(zz, tz),
          gz = Dz * (Nz.length - 1),
          Hz = gz / 2;
        let Bz = Wz;
        "top" === this.vAlign ? uz = Wz + oz : "bottom" === this.vAlign ? (uz = Uz - gz, Bz = Uz) : (Bz = Wz + Oz / 2, uz -= Hz), Nz.forEach((tz => {
          tz = tz.trim(), zz.fillText(tz, Kz, uz), uz += Dz
        })), this.debug && (zz.lineWidth = 3, zz.strokeStyle = "#00909e", zz.strokeRect(sz, Wz, Xz, Oz), zz.lineWidth = 2, zz.strokeStyle = "#f6d743", zz.beginPath(), zz.moveTo(Kz, Wz), zz.lineTo(Kz, Uz), zz.stroke(), zz.strokeStyle = "#ff6363", zz.beginPath(), zz.moveTo(sz, Bz), zz.lineTo(vz, Bz), zz.stroke());
        return {
          height: gz + Dz
        }
      },
      getTextHeight: function(zz, tz) {
        const sz = zz.textBaseline;
        zz.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Fz
        } = zz.measureText(tz);
        return zz.textBaseline = sz, Fz
      },
      justifyLine: function(zz, tz, sz, Fz, Wz) {
        const Xz = tz.trim(),
          Oz = zz.measureText(Xz).width,
          oz = Xz.split(/\s+/).length - 1,
          vz = Math.floor((Wz - Oz) / sz);
        if (oz <= 0 || vz <= 0) return Xz;
        const Uz = Math.floor(vz / oz);
        let Kz = vz - oz * Uz,
          uz = [];
        for (let Nz = 0; Nz < Uz; Nz++) uz.push(Fz);
        uz = uz.join("");
        return Xz.replace(/\s+/g, (zz => {
          const tz = Kz > 0 ? uz + Fz : uz;
          return Kz--, zz + tz
        }))
      }
    }
  },
  38535: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return tz.set(zz), tz
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  38076: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Dz,
      d: () => wz,
      e: () => Nz,
      i: () => Kz,
      m: () => uz
    });
    var Fz = sz(3926),
      Wz = sz(321);
    const Xz = 1024,
      Oz = 1536,
      oz = 2 * Fz.k + 1,
      vz = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Uz = 1.5;

    function Kz(zz, tz, sz) {
      if ("string" !== typeof zz) return tz;
      try {
        const sz = JSON.parse(zz);
        return sz && "object" === typeof sz ? sz : tz
      } catch (Fz) {
        return void 0 !== sz && console.error(`Couldn't parse ${sz}`, Fz), tz
      }
    }

    function uz(zz) {
      return Kz(zz, null, "a leaderboard's rows")
    }

    function Nz(zz, tz) {
      var sz, Fz;
      return null !== tz && void 0 !== tz ? tz : {
        status: null !== (sz = zz.status) && void 0 !== sz ? sz : "loading",
        entries: null !== (Fz = zz.entries) && void 0 !== Fz ? Fz : []
      }
    }

    function bz(zz, tz) {
      return "number" === typeof zz && Number.isFinite(zz) && zz > 0 ? zz : tz
    }

    function wz(zz, tz) {
      const sz = bz(zz.size, 1);
      let Fz = bz(zz.width, bz(2.5 * sz, 2.5)),
        Wz = bz(zz.height, bz(3.75 * sz, 3.75));
      Number.isFinite(Xz * Wz / Fz) && Number.isFinite(Oz * Fz / Wz) || (Fz = 2.5, Wz = 3.75);
      const oz = Wz / Fz,
        vz = Math.max(1, Math.min(Xz, tz / oz));
      return {
        width: Fz,
        height: Wz,
        layoutWidth: Math.max(Xz, Oz / oz),
        layoutHeight: Math.max(Oz, Xz * oz),
        pixelWidth: Math.round(vz),
        pixelHeight: Math.round(Math.max(1, Math.min(tz, vz * oz)))
      }
    }

    function Dz(zz, tz, sz, Oz, Kz, uz) {
      zz.setTransform(1, 0, 0, 1, 0, 0), zz.fillStyle = Wz.N.defaultNameTagBackground, zz.fillRect(0, 0, tz, sz), zz.scale(tz / Oz.layoutWidth, sz / Oz.layoutHeight), zz.translate((Oz.layoutWidth - Xz) / 2, 0),
        function(zz, tz, sz, Xz) {
          var Oz, Kz, uz, Nz;
          const {
            top: bz,
            around: wz,
            showPlayerText: Dz,
            localPlayerDbId: Bz
          } = sz, {
            whiteUiText: Pz,
            grayUiText: rz,
            yellowUiText: Yz
          } = Wz.N;
          zz.textBaseline = "middle";
          const xz = function(tz, sz, Fz, Wz, Xz, Oz) {
              let oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              zz.font = `bold ${Wz}px 'Jetbrains Mono', monospace`, zz.fillStyle = Xz, zz.textAlign = oz;
              let vz = tz.replace(/[\r\n\t]/g, " ");
              if (zz.measureText(vz).width > Oz) {
                for (; vz.length > 0 && zz.measureText(`${vz}\u2026`).width > Oz;) vz = vz.slice(0, -1);
                vz += "\u2026"
              }
              zz.fillText(vz, sz, Fz)
            },
            mz = tz => {
              zz.fillStyle = Pz, zz.globalAlpha = .15, zz.fillRect(24, tz, 976, 2), zz.globalAlpha = 1
            },
            Jz = null === Bz ? null : (0, Wz.lc)(Bz),
            Iz = zz => null !== Jz && zz.playerHash === Jz,
            Cz = gz(bz.entries, Fz.o),
            ez = "ready" === bz.status && Cz.length > 0,
            Zz = null === wz ? [] : gz(wz.entries, oz),
            Gz = Cz.some(Iz),
            Tz = null === wz ? null : function(zz) {
              const tz = zz;
              if (!tz || !Number.isFinite(tz.rank) || !Number.isFinite(tz.tied) || !Number.isFinite(tz.total)) return null;
              return tz
            }(wz.standing),
            cz = Zz.find(Iz),
            jz = Cz.find(Iz),
            Az = null === Tz || void 0 === cz ? null : {
              value: cz.value,
              rank: Tz.rank
            },
            yz = Hz(Cz, void 0 === jz || jz.value === (null === Az || void 0 === Az ? void 0 : Az.value) ? Az : null),
            Mz = Hz(Zz, Az),
            dz = (zz, tz) => {
              const sz = zz.findIndex(Iz);
              return sz >= 0 ? tz[sz] : null
            },
            hz = null !== (Oz = null !== (Kz = null === Tz || void 0 === Tz ? void 0 : Tz.rank) && void 0 !== Kz ? Kz : dz(Zz, Mz)) && void 0 !== Oz ? Oz : dz(Cz, yz);
          zz.font = "bold 34px 'Jetbrains Mono', monospace";
          const Qz = [...ez ? yz : [], ...Gz ? [] : Mz],
            kz = Math.min(280, Math.max(0, ...Qz.map((tz => zz.measureText(vz.format(tz)).width)))),
            iz = kz <= 80,
            Lz = iz ? 80 : 32 + kz,
            lz = iz ? 148 : Lz + 28,
            nz = 660 - lz;
          xz(`TOP ${Fz.o}  /  ALL TIME`, 24, 52, 28, rz, 976), xz(Dz ? String(null !== (uz = tz.title) && void 0 !== uz ? uz : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Pz, 976), xz("RANK", 32, 174, 28, rz, lz - 40), xz("PLAYER", lz, 174, 28, rz, nz), xz(Dz ? String(null !== (Nz = tz.scoreLabel) && void 0 !== Nz ? Nz : "Score").slice(0, 24) : "Score", 992, 174, 28, rz, 304, "right"), mz(202);
          const az = (Xz - 232) / (Fz.o + Uz + oz),
            qz = 208 + Fz.o * az,
            Sz = qz + Uz * az,
            Vz = (tz, sz, Fz, Wz) => {
              const Xz = Iz(tz);
              zz.fillStyle = Xz ? Yz : Pz, zz.globalAlpha = Xz ? .15 : Wz ? .035 : 0, zz.fillRect(24, Fz - az / 2 + 1, 976, az - 2), zz.globalAlpha = 1;
              const Oz = Xz ? Yz : Pz;
              xz(vz.format(sz), Lz, Fz, 34, Oz, iz ? 80 : kz, iz ? "center" : "right"), xz(Dz ? String(tz.name).slice(0, 64) : "Player", lz, Fz, 34, Oz, nz);
              const oz = vz.format(tz.value);
              xz(zz.measureText(oz).width > 304 ? tz.value.toExponential(6) : oz, 992, Fz, 34, Oz, 304, "right")
            };
          if (ez)
            for (const [Fz, Wz] of Cz.entries()) Vz(Wz, yz[Fz], 208 + (Fz + .5) * az, Fz % 2 === 0);
          else {
            const zz = "error" === bz.status,
              tz = zz ? "Couldn't load leaderboard" : "ready" === bz.status ? "No scores yet" : "Loading leaderboard\u2026",
              sz = zz ? "Trying again shortly" : "ready" === bz.status ? "Be the first on the board!" : "Fetching the top players",
              Fz = (208 + qz) / 2;
            xz(tz, 512, Fz - 28, 40, zz ? Wz.N.redUiText : Pz, 960, "center"), xz(sz, 512, Fz + 27, 30, rz, 960, "center")
          }
          const Rz = qz + Uz * az / 2;
          if (null === hz) mz(Rz);
          else {
            const tz = null === Tz ? 0 : Tz.tied - 1,
              sz = `YOUR RANK #${vz.format(hz)}${null===Tz?"":` of ${vz.format(Tz.total)}`}`;
            zz.font = "bold 36px 'Jetbrains Mono', monospace";
            const Fz = Math.max(20, Math.min(36, Math.floor(34560 / zz.measureText(sz).width)));
            xz(sz, 512, Rz - (tz > 0 ? 15 : 0), Fz, Yz, 960, "center"), tz > 0 && xz(`Tied with ${vz.format(tz)} other${1===tz?"":"s"}`, 512, Rz + 24, 24, rz, 960, "center")
          }
          if (null === wz) return;
          const pz = Sz + oz * az / 2;
          if (Gz) xz(`You're in the top ${Fz.o}!`, 512, pz, 40, Yz, 960, "center");
          else if (0 === Zz.length) xz("You're not on this board yet", 512, pz, 34, rz, 960, "center");
          else
            for (const [Fz, Wz] of Zz.entries()) Vz(Wz, Mz[Fz], Sz + (Fz + .5) * az, Fz % 2 === 0)
        }(zz, Kz, uz, Oz.layoutHeight)
    }

    function gz(zz, tz) {
      return Array.isArray(zz) ? zz.slice(0, tz).filter((zz => zz && Number.isFinite(zz.rank) && Number.isFinite(zz.value))) : []
    }

    function Hz(zz, tz) {
      const sz = [];
      let Fz = !1;
      return zz.forEach(((Wz, Xz) => {
        if (null !== tz && Wz.value === tz.value) return void sz.push(tz.rank);
        const Oz = Xz > 0 && Wz.value === zz[Xz - 1].value;
        Oz || (Fz = 0 === Xz && 1 !== Wz.rank), sz.push(Oz && !Fz ? sz[Xz - 1] : Wz.rank)
      })), sz
    }
  },
  38279: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      d: () => Xz
    });
    const Fz = 32;

    function Wz(zz) {
      return Array.from(zz).length
    }

    function Xz(zz) {
      const tz = [""];
      let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wz = "";
      const Xz = () => {
        tz.push(""), sz = 0, Wz = ""
      };
      for (const Oz of zz.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Oz)) Xz();
        else if (/^\s+$/.test(Oz)) Wz += Oz;
      else if (Oz.length > 0) {
        const zz = Array.from(Oz);
        sz > 0 && sz + Wz.length + zz.length > Fz && Xz(), tz[tz.length - 1] += Wz, sz += Wz.length, Wz = "";
        for (const Wz of zz) sz >= Fz && Xz(), tz[tz.length - 1] += Wz, sz++
      }
      return tz[tz.length - 1] += Wz, tz
    }
  },
  38532: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(36116),
      Wz = sz.n(Fz);
    const Xz = [1, 1, 1];

    function Oz(zz) {
      if (!zz) return [...Xz];
      try {
        const [tz, sz, Fz] = Wz()(zz).rgb().array();
        return [tz / 255, sz / 255, Fz / 255]
      } catch (tz) {
        return console.warn(`Invalid groundArrowPath colour "${zz}":`, tz), [...Xz]
      }
    }
  },
  33840: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      f: () => oz,
      h: () => Oz,
      i: () => Wz,
      j: () => Fz
    });
    const Fz = {
        default: {
          type: "earth",
          vertexTint: [137, 207, 240]
        },
        gloomy: {
          type: "custom",
          nx: "/textures/skyBoxes/gloomy/_nx.jpg",
          ny: "/textures/skyBoxes/gloomy/_ny.jpg",
          nz: "/textures/skyBoxes/gloomy/_nz.jpg",
          px: "/textures/skyBoxes/gloomy/_px.jpg",
          py: "/textures/skyBoxes/gloomy/_py.jpg",
          pz: "/textures/skyBoxes/gloomy/_pz.jpg"
        },
        interstellar: {
          type: "custom",
          nx: "/textures/skyBoxes/interstellar/_nx.jpg",
          ny: "/textures/skyBoxes/interstellar/_ny.jpg",
          nz: "/textures/skyBoxes/interstellar/_nz.jpg",
          px: "/textures/skyBoxes/interstellar/_px.jpg",
          py: "/textures/skyBoxes/interstellar/_py.jpg",
          pz: "/textures/skyBoxes/interstellar/_pz.jpg"
        },
        space_blue: {
          type: "custom",
          nx: "/textures/skyBoxes/space_blue/_nx.jpg",
          ny: "/textures/skyBoxes/space_blue/_ny.jpg",
          nz: "/textures/skyBoxes/space_blue/_nz.jpg",
          px: "/textures/skyBoxes/space_blue/_px.jpg",
          py: "/textures/skyBoxes/space_blue/_py.jpg",
          pz: "/textures/skyBoxes/space_blue/_pz.jpg"
        },
        space_lightblue: {
          type: "custom",
          nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
          ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
          nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
          px: "/textures/skyBoxes/space_lightblue/_px.jpg",
          py: "/textures/skyBoxes/space_lightblue/_py.jpg",
          pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
        },
        space_red: {
          type: "custom",
          nx: "/textures/skyBoxes/space_red/_nx.jpg",
          ny: "/textures/skyBoxes/space_red/_ny.jpg",
          nz: "/textures/skyBoxes/space_red/_nz.jpg",
          px: "/textures/skyBoxes/space_red/_px.jpg",
          py: "/textures/skyBoxes/space_red/_py.jpg",
          pz: "/textures/skyBoxes/space_red/_pz.jpg"
        },
        underwater: {
          type: "custom",
          nx: "/textures/skyBoxes/underwater/water.jpg",
          ny: "/textures/skyBoxes/underwater/water.jpg",
          nz: "/textures/skyBoxes/underwater/water.jpg",
          px: "/textures/skyBoxes/underwater/water.jpg",
          py: "/textures/skyBoxes/underwater/water.jpg",
          pz: "/textures/skyBoxes/underwater/water.jpg"
        },
        starry: {
          type: "custom",
          nx: "/textures/skyBoxes/starry/_nx.jpg",
          ny: "/textures/skyBoxes/starry/_ny.jpg",
          nz: "/textures/skyBoxes/starry/_nz.jpg",
          px: "/textures/skyBoxes/starry/_px.jpg",
          py: "/textures/skyBoxes/starry/_py.jpg",
          pz: "/textures/skyBoxes/starry/_pz.jpg"
        },
        space_red_2: {
          type: "custom",
          nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
          ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
          nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
          px: "/textures/skyBoxes/space_red_2/_px.jpg",
          py: "/textures/skyBoxes/space_red_2/_py.jpg",
          pz: "/textures/skyBoxes/space_red_2/_pz.jpg"
        },
        space_white: {
          type: "custom",
          nx: "/textures/skyBoxes/space_white/_nx.jpg",
          ny: "/textures/skyBoxes/space_white/_ny.jpg",
          nz: "/textures/skyBoxes/space_white/_nz.jpg",
          px: "/textures/skyBoxes/space_white/_px.jpg",
          py: "/textures/skyBoxes/space_white/_py.jpg",
          pz: "/textures/skyBoxes/space_white/_pz.jpg"
        }
      },
      Wz = "/textures/dayNight/sun.png",
      Xz = "/textures/dayNight/moon.png",
      Oz = "/textures/dayNight/stars",
      oz = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38589: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      d: () => uz,
      g: () => Fz,
      k: () => vz,
      m: () => Wz,
      q: () => Uz,
      u: () => oz,
      w: () => Oz
    });
    const Fz = ["linear", "easeIn", "easeOut", "easeInOut"],
      Wz = ["movement", "camera", "cursor"],
      Xz = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Oz(zz, tz) {
      return oz(zz, tz, Xz)
    }

    function oz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (zz === tz || Number.isNaN(zz) && Number.isNaN(tz)) return !0;
      if ("object" !== typeof zz || "object" !== typeof tz || null === zz || null === tz || Array.isArray(zz) !== Array.isArray(tz)) return !1;
      const Fz = zz,
        Wz = tz;
      for (const Xz of new Set([...Object.keys(Fz), ...Object.keys(Wz)]))
        if (!sz.includes(Xz) && !oz(Fz[Xz], Wz[Xz])) return !1;
      return !0
    }
    const vz = {
        maxBlendInMs: 1e4,
        minFov: 10,
        maxFov: 120,
        maxOffset: 128,
        maxSmoothMs: 5e3,
        maxReturnMs: 1e4,
        maxTransitionMs: 5e3,
        minTransitionFadeMs: 200,
        minFadeTurnMs: 333,
        maxPlayerLook: 180,
        maxKeyframes: 64,
        maxPathMs: 6e5,
        maxFrameTargets: 64,
        maxFrameDistance: 128,
        maxFrameHeading: 360,
        maxFrameElevation: 90,
        maxCoordinate: 1e6,
        minDirectionLength: 1e-6,
        minEasingY: -1,
        maxEasingY: 2
      },
      Uz = "^-[1-9][0-9]*$",
      Kz = "^#[0-9a-fA-F]{6}$",
      uz = "#000000"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);