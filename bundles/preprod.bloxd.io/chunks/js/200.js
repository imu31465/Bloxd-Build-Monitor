export const id = 200;
export const ids = [200];
export const modules = {
  38482: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    class Ez {
      constructor(zz, uz) {
        this.read = zz, this.apply = uz, this.release = null
      }
      turn(zz, uz) {
        const bz = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: uz,
          forcedCameraDirection: [zz[0], zz[1], zz[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), uz + 100),
          transitionMs: bz
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
  38026: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      h: () => nz
    });
    const Ez = new Map;

    function nz(zz, uz) {
      Ez.set(zz, uz)
    }

    function iz(zz) {
      return zz ? Ez.get(zz) : void 0
    }
  },
  38955: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz
    });
    var Ez = bz(37630);

    function nz(zz, uz, bz) {
      var nz, iz, lz, Mz, tz, Hz, Oz;
      const pz = (0, Ez.b)(zz, uz, bz[0], bz[1], bz[2]),
        dz = pz ? null !== (nz = pz.textCell) && void 0 !== nz ? nz : pz.rect.anchor : bz,
        Fz = uz(dz[0], dz[1], dz[2]);
      return {
        pos: [bz[0], bz[1], bz[2]],
        noticeboardSpan: pz && {
          width: pz.rect.width,
          height: pz.rect.height
        },
        text: null !== (iz = null === Fz || void 0 === Fz || null === (lz = Fz.persisted) || void 0 === lz || null === (Mz = lz.shared) || void 0 === Mz ? void 0 : Mz.text) && void 0 !== iz ? iz : "",
        textSize: null !== (tz = null === Fz || void 0 === Fz || null === (Hz = Fz.persisted) || void 0 === Hz || null === (Oz = Hz.shared) || void 0 === Oz ? void 0 : Oz.textSize) && void 0 !== tz ? tz : null
      }
    }
  },
  37890: (zz, uz, bz) => {
    function Ez(zz) {
      switch (zz.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    bz.d(uz, {
      d: () => nz,
      h: () => iz,
      l: () => Ez
    });
    const nz = 4,
      iz = 3
  },
  38498: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      g: () => iz
    });
    var Ez = bz(328);
    const nz = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class iz {
      constructor(zz) {
        this.importGame = zz, this.loads = new Map, this.loaded = new Map
      }
      load(zz) {
        const uz = (0, Ez.Sb)(zz);
        if (!nz.has(uz)) return Promise.resolve(void 0);
        let bz = this.loads.get(uz);
        return bz || (bz = this.importGame(uz).then((zz => {
          const bz = zz.default;
          if ("function" !== typeof bz) throw new Error(`${uz}'s client code has no default-exported factory`);
          return this.loaded.set(uz, bz), bz
        })).catch((zz => {
          throw this.loads.delete(uz), zz
        })), this.loads.set(uz, bz)), bz
      }
      loadedFactory(zz) {
        const uz = (0, Ez.Sb)(zz);
        if (!nz.has(uz)) return;
        const bz = this.loaded.get(uz);
        if (!bz) throw new Error(`${uz}'s client code started before it loaded`);
        return bz
      }
    }
  },
  38961: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(9165),
      nz = bz(9007),
      iz = bz(3043);

    function lz(zz) {
      if (zz === Ez.b) return 0;
      const uz = (0, iz.e)(zz);
      if (void 0 !== uz && uz <= nz.MAX_BLOCK_ID) return uz;
      const bz = (0, iz.e)(zz.split("|")[0]);
      if (void 0 !== bz && bz <= nz.MAX_BLOCK_ID && (0, nz.rootMetaDescOf)(bz) === zz) return bz;
      throw new Error(`Invalid block name. You sent ${zz}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38560: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = bz(20);
    class nz {
      constructor(zz) {
        this.screen = zz, this.hidesHud = !1
      }
      show(zz, uz) {
        this.screen.setFade(zz.colour, zz.alpha), this.screen.setLetterbox(!0 === uz.letterbox, zz.alpha < 1), this.setHudHidden(!0 === uz.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(zz) {
        this.hidesHud !== zz && (this.hidesHud = zz, Ez.e.set({
          isUiHiddenByCamera: zz
        }))
      }
    }
  },
  38518: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      f: () => dz,
      i: () => pz,
      j: () => lz,
      m: () => Zz,
      o: () => tz,
      s: () => Rz,
      t: () => Hz,
      x: () => Mz,
      y: () => Oz
    });
    const Ez = Math.PI / 2 - .001,
      nz = 2 * Math.PI,
      iz = 1e-9;

    function lz(zz, uz) {
      uz.heading = zz.heading, uz.pitch = zz.pitch
    }

    function Mz(zz, uz) {
      const bz = uz - zz;
      return bz - nz * Math.floor((bz + Math.PI) / nz)
    }

    function tz(zz, uz, bz) {
      return zz + Mz(zz, uz) * bz
    }

    function Hz(zz) {
      if (!Number.isFinite(zz)) return zz;
      const uz = zz - nz * Math.floor(zz / nz);
      return uz < nz ? uz : 0
    }

    function Oz(zz, uz) {
      return zz + Mz(zz, uz)
    }

    function pz(zz) {
      return Math.max(-Ez, Math.min(Ez, zz))
    }

    function dz(zz, uz, bz) {
      const Ez = Math.cos(uz);
      return bz[0] = Ez * Math.sin(zz), bz[1] = -Math.sin(uz), bz[2] = Ez * Math.cos(zz), bz
    }

    function Fz(zz, uz, bz, Ez) {
      const nz = Math.sqrt(zz * zz + bz * bz);
      return nz < iz && Math.abs(uz) < iz || (nz >= iz && (Ez.heading = Math.atan2(zz, bz)), Ez.pitch = pz(Math.atan2(-uz, nz) + 0)), Ez
    }

    function Zz(zz, uz) {
      return Fz(zz[0], zz[1], zz[2], uz)
    }

    function Rz(zz, uz, bz) {
      return Fz(uz[0] - zz[0], uz[1] - zz[1], uz[2] - zz[2], bz)
    }
  },
  38553: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      e: () => nz
    });
    var Ez = bz(38518);

    function nz(zz) {
      var uz;
      const bz = "default" === zz.mode ? "movement" : null !== (uz = zz.playerFacing) && void 0 !== uz ? uz : "movement";
      return "cursor" === bz ? {
        facing: bz,
        mouseTurns: null
      } : {
        facing: bz,
        mouseTurns: "default" !== zz.mode && void 0 !== zz.playerLook ? "look" : "view"
      }
    }

    function iz(zz, uz, bz, nz, iz, lz) {
      return lz.QJ = 0, lz.eJ = 0, lz.pointedAt = void 0, void 0 !== nz ? iz ? (lz.pointedAt = nz, zz) : (0, Ez.t)(nz.heading) : iz ? (lz.QJ = uz, lz.eJ = bz, zz) : (0, Ez.t)(zz + uz)
    }
  },
  38531: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => yz
    });
    var Ez = bz(38540),
      nz = bz(38518),
      iz = bz(36427);

    function lz(zz, uz, bz, Ez) {
      if (!(Ez > 0)) return uz;
      const nz = uz > zz ? Math.min(uz, zz + bz / Ez) : Math.max(uz, zz - bz / Ez);
      return Math.abs(uz - nz) < 1e-9 ? uz : nz
    }
    class Mz {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Ez.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(zz) {
        !this.isGoingOut() && this.sinceTurnMs < Ez.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: zz
        } : (this.waiting = null, this.startOut(zz))
      }
      fadeIn(zz) {
        this.isGoingOut() ? this.sinceTurnMs < Ez.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: zz
        } : (this.waiting = null, this.startIn(zz)) : this.waiting = null
      }
      advance(zz) {
        const uz = this.waiting;
        if (null === uz) return this.step(zz);
        const bz = Ez.m.minFadeTurnMs - this.sinceTurnMs;
        if (bz > zz) return this.step(zz);
        const nz = this.step(bz);
        return this.waiting = null, "out" === uz.turn ? this.startOut(uz.transition) : this.startIn(uz.minMs), this.step(zz - bz) || nz
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(zz) {
        ("in" === this.phase || null === this.phase && this.clearMs < Ez.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = zz.colour), this.outMs = zz.outMs, this.holdMs = zz.holdMs, this.inMs = zz.inMs
      }
      startIn(zz) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(zz, this.inMs)
      }
      step(zz) {
        const uz = this.screen;
        this.sinceTurnMs += zz, null === this.phase && (this.clearMs += zz);
        let bz = !1,
          nz = zz;
        if ("out" === this.phase) {
          const Ez = (1 - uz.alpha) * this.outMs;
          if (uz.alpha = lz(uz.alpha, 1, zz, this.outMs), uz.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, nz = Math.max(0, zz - Ez), bz = !0
        }
        let iz = zz;
        if ("hold" === this.phase) {
          this.heldMs += nz;
          const zz = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Ez.m.minFadeTurnMs);
          if (zz < 0 || bz) return bz;
          this.phase = "in", this.sinceTurnMs = zz, iz = zz
        }
        return "in" === this.phase && (uz.alpha = lz(uz.alpha, 0, iz, this.inMs), uz.alpha <= 0 && (this.phase = null, this.clearMs = 0)), bz
      }
    }
    var tz = bz(38510),
      Hz = bz(38549),
      Oz = bz(1840),
      pz = bz(36041);

    function dz(zz, uz) {
      for (let bz = 0; bz < uz.length; bz++) uz[bz] = zz[bz]
    }

    function Fz(zz, uz) {
      var bz;
      return null !== (bz = zz.fov) && void 0 !== bz ? bz : uz.getDefaultFov()
    }

    function Zz(zz, uz, bz, Ez, nz) {
      const iz = 2 / Ez,
        lz = Math.exp(-iz * nz);
      for (let Mz = 0; Mz < zz.length; Mz++) {
        const Ez = zz[Mz] - bz[Mz],
          tz = (uz[Mz] + iz * Ez) * nz;
        zz[Mz] = bz[Mz] + (Ez + tz) * lz, uz[Mz] = (uz[Mz] - iz * tz) * lz
      }
    }
    class Rz {
      constructor(zz, uz, bz, Ez) {
        var iz, lz, Mz, tz, Hz;
        this.settings = zz, this.xd = uz, this.targets = bz, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.ht = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, nz.t)((0, Oz.j)(null !== (iz = zz.viewHeading) && void 0 !== iz ? iz : 0)),
          pitch: (0, nz.i)((0, Oz.j)(null !== (lz = zz.viewElevation) && void 0 !== lz ? lz : 45))
        }, this.closestDistance = null !== (Mz = zz.closestDistance) && void 0 !== Mz ? Mz : Math.min(6, null !== (tz = zz.furthestDistance) && void 0 !== tz ? tz : 1 / 0), this.furthestDistance = null !== (Hz = zz.furthestDistance) && void 0 !== Hz ? Hz : Math.max(64, this.closestDistance);
        const pz = (0, nz.f)(this.base.heading, this.base.pitch, this.forward),
          dz = Ez.position,
          Fz = this.closestDistance;
        this.goal = [dz[0] + pz[0] * Fz, dz[1] + pz[1] * Fz, dz[2] + pz[2] * Fz, Fz, this.base.heading, this.base.pitch]
      }
      update(zz, uz, bz) {
        var Ez, iz;
        this.placeGoal(null !== (Ez = this.settings.fov) && void 0 !== Ez ? Ez : this.xd.getBaseFov()), this.goal[4] = (0, nz.y)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const lz = null !== (iz = this.settings.smoothMs) && void 0 !== iz ? iz : 400;
        !this.started || lz < 1 ? (dz(this.goal, this.smoothed), this.ht.fill(0), this.started = !0) : Zz(this.smoothed, this.ht, this.goal, lz, zz), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, nz.i)(this.smoothed[5]), uz.apply(this.angles, bz);
        const Mz = (0, nz.f)(bz.heading, bz.pitch, this.forward);
        for (let nz = 0; nz < 3; nz++) bz.position[nz] = this.smoothed[nz] - Mz[nz] * this.smoothed[3];
        bz.fov = Fz(this.settings, this.xd)
      }
      continueFrom(zz) {
        zz instanceof Rz && (dz(zz.goal, this.goal), dz(zz.smoothed, this.smoothed), dz(zz.ht, this.ht), this.framedTargets = zz.framedTargets, this.started = zz.started)
      }
      reset() {
        this.ht.fill(0), this.started = !1
      }
      placeGoal(zz) {
        var uz;
        let bz = 0;
        for (const Oz of this.settings.targets) {
          const zz = this.targets.currentAimPoint(Oz);
          zz && (0, tz.i)(zz, this.pointAt(bz++))
        }
        if (bz > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const zz = this.targets.aimPoint(this.xd.localPlayerId);
          zz && (0, tz.i)(zz, this.pointAt(bz++))
        }
        const Ez = this.goal;
        if (0 === bz) return void(Ez[3] = this.withinDistances(Ez[3]));
        for (let tz = 0; tz < 3; tz++) {
          let zz = 1 / 0,
            uz = -1 / 0;
          for (let Ez = 0; Ez < bz; Ez++) zz = Math.min(zz, this.points[Ez][tz]), uz = Math.max(uz, this.points[Ez][tz]);
          Ez[tz] = (zz + uz) / 2
        }
        let nz = 0;
        for (let tz = 0; tz < bz; tz++) {
          const zz = this.points[tz];
          nz = Math.max(nz, Math.hypot(zz[0] - Ez[0], zz[1] - Ez[1], zz[2] - Ez[2]))
        }
        const iz = Math.tan((0, Oz.j)(zz) / 2),
          lz = Math.atan(iz * (!0 === this.settings.letterbox ? pz.d : 1)),
          Mz = Math.atan(iz * this.xd.getAspectRatio()),
          Hz = (nz + (null !== (uz = this.settings.padding) && void 0 !== uz ? uz : 2)) / Math.sin(Math.min(lz, Mz));
        Ez[3] = this.withinDistances(Hz)
      }
      withinDistances(zz) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, zz))
      }
      pointAt(zz) {
        return zz === this.points.length && this.points.push([0, 0, 0]), this.points[zz]
      }
    }
    class Kz {
      constructor(zz) {
        this.limits = zz, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(zz) {
        this.limits && (this.yawOffset = zz.yawOffset, this.pitchOffset = zz.pitchOffset, this.idleMs = zz.idleMs)
      }
      update(zz, uz) {
        const bz = this.limits;
        if (!bz) return;
        const Ez = Number.isFinite(uz.QJ) ? uz.QJ : 0,
          nz = Number.isFinite(uz.eJ) ? uz.eJ : 0;
        if (uz.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: uz.pointedAt.heading,
          pitch: uz.pointedAt.pitch
        };
        else if (0 !== Ez || 0 !== nz) this.idleMs = 0, this.yawOffset += Ez, this.pitchOffset += nz;
        else {
          const uz = Math.max(0, this.idleMs + zz - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += zz, void 0 !== bz.returnMs && uz > 0) {
            const zz = bz.returnMs > 0 ? Math.exp(-3 * uz / bz.returnMs) : 0;
            this.yawOffset *= zz, this.pitchOffset *= zz
          }
        }
        this.clampOffsets(bz)
      }
      clampOffsets(zz) {
        if (zz.maxYaw >= 180) this.yawOffset = (0, nz.x)(0, this.yawOffset);
        else {
          const uz = (0, Oz.j)(zz.maxYaw);
          this.yawOffset = Math.max(-uz, Math.min(uz, this.yawOffset))
        }
        const uz = (0, Oz.j)(zz.maxPitch);
        this.pitchOffset = Math.max(-uz, Math.min(uz, this.pitchOffset))
      }
      apply(zz, uz) {
        this.pointedAt && this.limits && (this.yawOffset = (0, nz.x)(zz.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - zz.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const bz = (0, nz.i)(zz.pitch + this.pitchOffset);
        this.pitchOffset = bz - zz.pitch, uz.heading = (0, nz.t)(zz.heading + this.yawOffset), uz.pitch = bz
      }
      unapply(zz, uz) {
        uz.heading = (0, nz.t)(zz.heading - this.yawOffset), uz.pitch = (0, nz.i)(zz.pitch - this.pitchOffset)
      }
    }
    const wz = 1e-6;

    function Xz(zz) {
      return Math.sqrt(zz[0] * zz[0] + zz[1] * zz[1] + zz[2] * zz[2])
    }

    function fz(zz, uz, bz, Ez, nz) {
      const iz = nz * nz,
        lz = iz * nz;
      return (2 * lz - 3 * iz + 1) * zz + (lz - 2 * iz + nz) * uz + (-2 * lz + 3 * iz) * bz + (lz - iz) * Ez
    }

    function sz(zz, uz, bz, Ez, nz) {
      const iz = nz * nz;
      return (6 * iz - 6 * nz) * zz + (3 * iz - 4 * nz + 1) * uz + (-6 * iz + 6 * nz) * bz + (3 * iz - 2 * nz) * Ez
    }

    function rz(zz, uz) {
      const bz = uz[0] - zz[0],
        Ez = uz[1] - zz[1],
        nz = uz[2] - zz[2];
      return Math.sqrt(bz * bz + Ez * Ez + nz * nz)
    }

    function oz(zz, uz, bz, Ez, nz, iz) {
      for (let lz = 0; lz < 3; lz++) iz[lz] = nz ? zz[lz] * Ez : bz[lz] - uz[lz];
      return nz && function(zz, uz) {
        const bz = Xz(zz);
        if (bz > uz) {
          const Ez = uz / bz;
          zz[0] *= Ez, zz[1] *= Ez, zz[2] *= Ez
        }
      }(iz, 3 * rz(uz, bz)), iz
    }

    function Nz(zz, uz, bz, Ez) {
      for (let nz = 0; nz < 3; nz++) Ez[nz] = 6 * (uz[nz] - zz[nz]) - 2 * bz[nz];
      if (Xz(Ez) < wz)
        for (let nz = 0; nz < 3; nz++) Ez[nz] = uz[nz] - zz[nz];
      return Ez
    }

    function vz(zz, uz) {
      return [2 * uz[0] - zz[0], 2 * uz[1] - zz[1], 2 * uz[2] - zz[2]]
    }

    function xz(zz, uz, bz, Ez, nz, iz, lz) {
      if (!iz && !lz) return 0;
      const Mz = iz ? zz : 2 * uz - bz,
        tz = lz ? bz : 2 * uz - zz,
        Hz = iz ? Ez : nz,
        Oz = lz ? nz : Ez,
        pz = (uz - Mz) / Hz,
        dz = (tz - uz) / Oz;
      if (pz * dz <= 0) return 0;
      const Fz = (tz - Mz) / (Hz + Oz),
        Zz = 3 * Math.min(Math.abs(pz), Math.abs(dz));
      return Math.max(-Zz, Math.min(Zz, Fz))
    }

    function Jz(zz, uz, bz, Ez, nz, iz, lz) {
      const {
        u: Mz,
        segmentMs: tz
      } = zz;
      if (!zz.curved) return bz + (Ez - bz) * Mz;
      return fz(bz, xz(uz, bz, Ez, zz.beforeMs, tz, iz, !0) * tz, Ez, xz(bz, Ez, nz, tz, zz.afterMs, !0, lz) * tz, Mz)
    }

    function Az(zz) {
      return Math.abs(zz.pitch) >= nz.e
    }
    class Tz {
      constructor(zz, uz, bz, Ez, nz) {
        this.nodes = zz, this.prevNodes = bz, this.nextNodes = Ez, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = zz.map(((zz, bz) => this.nodeTangent(uz, nz, bz)))
      }
      sample(zz, uz, bz) {
        const {
          index: Ez,
          toIndex: iz,
          segmentMs: lz,
          curved: Mz
        } = zz, tz = this.fromAngles, Hz = this.toAngles, Oz = this.nodeAngles(Ez, bz.position, uz, tz), pz = this.nodeAngles(iz, bz.position, uz, Hz);
        if (lz > 0 && "aim" !== Oz && "aim" !== pz && this.liveTangent(zz, tz)) return bz.heading = (0, nz.t)(tz.heading), void(bz.pitch = tz.pitch);
        if ("none" === Oz && "none" === pz) return;
        !Mz && lz > 0 && ("tangent" === Oz && this.liveTangent(zz, tz), "tangent" === pz && this.liveTangent(zz, Hz)), "none" === Oz ? (0, nz.j)(Hz, tz) : "none" === pz && (0, nz.j)(tz, Hz);
        const dz = Mz && zz.beforeIndex >= 0 && "none" !== this.nodeAngles(zz.beforeIndex, bz.position, uz, this.beforeAngles),
          Fz = Mz && zz.afterIndex >= 0 && "none" !== this.nodeAngles(zz.afterIndex, bz.position, uz, this.afterAngles),
          Zz = (0, nz.y)(tz.heading, Hz.heading),
          Rz = Jz(zz, dz ? (0, nz.y)(tz.heading, this.beforeAngles.heading) : 0, tz.heading, Zz, Fz ? (0, nz.y)(Zz, this.afterAngles.heading) : 0, dz, Fz);
        bz.heading = (0, nz.t)(Rz), bz.pitch = (0, nz.i)(Jz(zz, this.beforeAngles.pitch, tz.pitch, Hz.pitch, this.afterAngles.pitch, dz, Fz))
      }
      nodeAngles(zz, uz, bz, Ez) {
        const nz = this.rawNodeAngles(zz, uz, bz, Ez);
        return "none" !== nz && Az(Ez) && !this.borrowHeading(this.prevNodes[zz], uz, bz, Ez) && this.borrowHeading(this.nextNodes[zz], uz, bz, Ez), nz
      }
      borrowHeading(zz, uz, bz, Ez) {
        const nz = this.borrowedAngles;
        return !(zz < 0 || "none" === this.rawNodeAngles(zz, uz, bz, nz) || Az(nz)) && (Ez.heading = nz.heading, !0)
      }
      rawNodeAngles(zz, uz, bz, Ez) {
        const iz = this.nodes[zz].keyframe;
        if (iz.lookDirection) return (0, nz.m)(iz.lookDirection, Ez), "aim";
        if (void 0 !== iz.lookAt) {
          const zz = bz(iz.lookAt);
          if (zz) return (0, nz.s)(uz, zz, Ez), "aim"
        }
        const lz = this.tangents[zz];
        return lz ? ((0, nz.j)(lz, Ez), "tangent") : "none"
      }
      liveTangent(zz, uz) {
        const bz = this.nodes[zz.index].position,
          Ez = this.nodes[zz.toIndex].position,
          iz = this.derivative;
        for (let nz = 0; nz < 3; nz++) iz[nz] = sz(bz[nz], zz.fromTangent[nz], Ez[nz], zz.toTangent[nz], zz.u);
        return Xz(iz) > 1e-9 ? ((0, nz.m)(iz, uz), !0) : !(rz(bz, Ez) < wz) && ((0, nz.m)(Nz(bz, Ez, zz.u < .5 ? zz.toTangent : zz.fromTangent, iz), uz), !0)
      }
      nodeTangent(zz, uz, bz) {
        var Ez;
        const iz = zz[bz];
        if (Xz(iz) > 1e-9) return (0, nz.m)(iz, {
          heading: 0,
          pitch: 0
        });
        const lz = null !== (Ez = this.restDirectionTo(bz, bz + 1, zz, uz)) && void 0 !== Ez ? Ez : this.restDirectionTo(bz, bz - 1, zz, uz);
        return lz ? (0, nz.m)(lz, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(zz, uz, bz, Ez) {
        const nz = this.nodes[zz],
          iz = this.nodes[uz];
        if (!iz || rz(nz.position, iz.position) < wz) return null;
        const [lz, Mz] = uz > zz ? [nz, iz] : [iz, nz], tz = oz(bz[uz], lz.position, Mz.position, Mz.timeMs - lz.timeMs, Ez, [0, 0, 0]);
        return Nz(lz.position, Mz.position, tz, [0, 0, 0])
      }
    }

    function Lz(zz, uz) {
      const bz = zz.lookDirection || uz.lookDirection ? function(zz, uz) {
        if (!zz || !uz) return zz === uz;
        const bz = Xz(zz),
          Ez = Xz(uz);
        return Math.hypot(zz[0] / bz - uz[0] / Ez, zz[1] / bz - uz[1] / Ez, zz[2] / bz - uz[2] / Ez) < wz
      }(zz.lookDirection, uz.lookDirection) : (Ez = zz.lookAt, nz = uz.lookAt, "object" !== typeof Ez || "object" !== typeof nz ? Ez === nz : rz(Ez, nz) < wz);
      var Ez, nz;
      return rz(zz.position, uz.position) < wz && zz.fov === uz.fov && bz
    }
    class Pz {
      constructor(zz, uz, bz) {
        if (this.smooth = uz, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let iz = 1; iz < zz.length; iz++)
          if (!(zz[iz].timeMs > zz[iz - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = zz.map((zz => {
          var uz;
          return {
            timeMs: zz.timeMs,
            position: [...zz.position],
            keyframe: zz,
            easing: (0, iz.m)(null !== (uz = zz.easing) && void 0 !== uz ? uz : "linear")
          }
        }));
        const Ez = this.nodes[0],
          nz = this.nodes[this.nodes.length - 1],
          lz = bz && this.nodes.length > 1;
        lz && !Lz(Ez.keyframe, nz.keyframe) && this.nodes.push({
          ...Ez,
          timeMs: nz.timeMs + (nz.timeMs - Ez.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = lz ? this.nodes[this.nodes.length - 1].timeMs - Ez.timeMs : 0, this.prevNodes = this.nodes.map(((zz, uz) => this.neighbour(uz, -1))), this.nextNodes = this.nodes.map(((zz, uz) => this.neighbour(uz, 1))), this.prevGaps = this.prevNodes.map(((zz, uz) => zz >= 0 ? this.gapMs(uz, -1) : 0)), this.nextGaps = this.nextNodes.map(((zz, uz) => zz >= 0 ? this.gapMs(uz, 1) : 0)), this.velocities = this.nodes.map(((zz, uz) => {
          const bz = this.prevNodes[uz],
            Ez = this.nextNodes[uz];
          return function(zz, uz, bz, Ez, nz, iz) {
            if (iz[0] = 0, iz[1] = 0, iz[2] = 0, !zz && !bz) return iz;
            const lz = null !== zz && void 0 !== zz ? zz : vz(null !== bz && void 0 !== bz ? bz : uz, uz),
              Mz = null !== bz && void 0 !== bz ? bz : vz(null !== zz && void 0 !== zz ? zz : uz, uz),
              tz = zz ? Ez : nz,
              Hz = bz ? nz : Ez,
              Oz = rz(lz, uz),
              pz = rz(uz, Mz);
            if (Oz < wz || pz < wz) return iz;
            const dz = Math.sqrt(Oz),
              Fz = Math.sqrt(pz),
              Zz = (dz + Fz) / (tz + Hz);
            for (let Rz = 0; Rz < 3; Rz++) {
              const zz = (uz[Rz] - lz[Rz]) / dz - (Mz[Rz] - lz[Rz]) / (dz + Fz) + (Mz[Rz] - uz[Rz]) / Fz;
              iz[Rz] = zz * Zz
            }
            return iz
          }(bz >= 0 ? this.nodes[bz].position : null, zz.position, Ez >= 0 ? this.nodes[Ez].position : null, this.prevGaps[uz], this.nextGaps[uz], [0, 0, 0])
        })), this.aim = new Tz(this.nodes, this.velocities, this.prevNodes, this.nextNodes, uz)
      }
      sample(zz, uz, bz, Ez) {
        const nz = this.findSegment(this.pathTime(zz));
        this.samplePosition(nz, Ez.position), this.aim.sample(nz, uz, Ez);
        const {
          beforeIndex: iz,
          afterIndex: lz
        } = nz;
        Ez.fov = Jz(nz, iz >= 0 ? this.fovAt(iz, bz) : 0, this.fovAt(nz.index, bz), this.fovAt(nz.toIndex, bz), lz >= 0 ? this.fovAt(lz, bz) : 0, iz >= 0, lz >= 0)
      }
      pathTime(zz) {
        const uz = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || zz <= uz) return zz;
        const bz = zz - uz;
        return uz + bz - this.loopMs * Math.floor(bz / this.loopMs)
      }
      findSegment(zz) {
        const uz = this.nodes,
          bz = this.segment;
        let Ez = bz.index;
        for (zz < uz[Ez].timeMs && (Ez = 0); Ez < uz.length - 2 && uz[Ez + 1].timeMs <= zz;) Ez++;
        const nz = Math.min(Ez + 1, uz.length - 1),
          lz = uz[nz].timeMs - uz[Ez].timeMs;
        return bz.index = Ez, bz.toIndex = nz, bz.segmentMs = lz, bz.u = lz > 0 ? (0, iz.k)((zz - uz[Ez].timeMs) / lz, uz[Ez].easing) : 1, bz.curved = this.smooth && lz > 0, bz.beforeIndex = this.prevNodes[Ez], bz.afterIndex = this.nextNodes[nz], bz.beforeMs = this.prevGaps[Ez], bz.afterMs = this.nextGaps[nz], bz
      }
      samplePosition(zz, uz) {
        const {
          fromTangent: bz,
          toTangent: Ez,
          curved: nz
        } = zz, iz = this.nodes[zz.index].position, lz = this.nodes[zz.toIndex].position;
        oz(this.velocities[zz.index], iz, lz, zz.segmentMs, nz, bz), oz(this.velocities[zz.toIndex], iz, lz, zz.segmentMs, nz, Ez);
        const Mz = zz.u;
        for (let tz = 0; tz < 3; tz++) uz[tz] = nz ? fz(iz[tz], bz[tz], lz[tz], Ez[tz], Mz) : iz[tz] + (lz[tz] - iz[tz]) * Mz
      }
      fovAt(zz, uz) {
        var bz;
        return null !== (bz = this.nodes[zz].keyframe.fov) && void 0 !== bz ? bz : uz
      }
      neighbour(zz, uz) {
        const bz = this.nodes.length - 1,
          Ez = zz + uz;
        return Ez >= 0 && Ez <= bz ? Ez : this.loopMs <= 0 || bz < 2 ? -1 : Ez < 0 ? bz - 1 : 1
      }
      gapMs(zz, uz) {
        const bz = this.nodes.length - 1;
        if (1 === uz) {
          const uz = zz === bz ? 0 : zz;
          return this.nodes[uz + 1].timeMs - this.nodes[uz].timeMs
        }
        const Ez = 0 === zz ? bz : zz;
        return this.nodes[Ez].timeMs - this.nodes[Ez - 1].timeMs
      }
    }
    class Gz {
      constructor(zz) {
        this.xd = zz, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = uz => zz.getEntityPosition(uz), this.readAimPoint = uz => zz.getEntityAimPoint(uz)
      }
      aimPoint(zz) {
        return "string" !== typeof zz ? (0, tz.r)(zz, 3) ? zz : null : this.resolve(zz, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(zz) {
        const uz = "string" === typeof zz ? this.xd.getEntityAimPoint(zz) : zz;
        return uz && (0, tz.r)(uz, 3) ? uz : null
      }
      feetPosition(zz) {
        return this.resolve(zz, this.readFeet, this.lastFeet)
      }
      heading(zz) {
        const uz = this.xd.getEntityHeading(zz);
        if (null !== uz && Number.isFinite(uz)) return this.lastHeadings.set(zz, uz), uz;
        const bz = this.lastHeadings.get(zz);
        return void 0 !== bz ? bz : zz === this.xd.localPlayerId ? 0 : this.heading(this.xd.localPlayerId)
      }
      resolve(zz, uz, bz) {
        const Ez = uz(zz);
        let nz = bz.get(zz);
        return Ez && (0, tz.r)(Ez, 3) ? (nz || (nz = [0, 0, 0], bz.set(zz, nz)), nz[0] = Ez[0], nz[1] = Ez[1], nz[2] = Ez[2], nz) : nz || (zz === this.xd.localPlayerId ? null : this.resolve(this.xd.localPlayerId, uz, bz))
      }
    }

    function az(zz) {
      return {
        heading: zz.heading,
        pitch: zz.pitch
      }
    }

    function Vz(zz, uz) {
      Number.isFinite(zz.heading) && Number.isFinite(zz.pitch) || (0, nz.j)(uz, zz)
    }

    function mz(zz, uz, bz, Ez, iz) {
      if (uz) return void(0, nz.m)(uz, iz);
      const lz = Ez.aimPoint(bz);
      lz && (0, nz.s)(zz, lz, iz)
    }
    class qz {
      constructor(zz, uz, bz, Ez) {
        this.settings = zz, this.xd = uz, this.targets = bz, this.base = void 0, this.base = az(Ez)
      }
      update(zz, uz, bz) {
        var Ez;
        const nz = this.settings;
        (0, tz.i)(nz.position, bz.position), mz(nz.position, nz.lookDirection, null !== (Ez = nz.lookAt) && void 0 !== Ez ? Ez : this.xd.localPlayerId, this.targets, this.base), uz.apply(this.base, bz), bz.fov = Fz(nz, this.xd)
      }
      continueFrom(zz) {
        zz instanceof qz && (0, nz.j)(zz.base, this.base)
      }
      reset(zz) {
        Vz(this.base, zz)
      }
    }
    class hz {
      constructor(zz, uz, bz, Ez) {
        this.settings = zz, this.xd = uz, this.targets = bz, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.ht = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = az(Ez), this.goal = [...Ez.position]
      }
      update(zz, uz, bz) {
        var Ez, nz, iz;
        const lz = this.settings,
          Mz = null !== (Ez = lz.target) && void 0 !== Ez ? Ez : this.xd.localPlayerId,
          Hz = this.targets.feetPosition(Mz);
        let Oz = !1;
        Hz && (Oz = this.foundFeet && rz(this.lastFeet, Hz) > 32 + .1 * zz, (0, tz.i)(Hz, this.lastFeet), this.foundFeet = !0, this.placeGoal(Hz, Mz));
        const pz = null !== (nz = lz.smoothMs) && void 0 !== nz ? nz : 0;
        !this.started || pz < 1 || Oz ? ((0, tz.i)(this.goal, this.smoothed), this.ht.fill(0), this.started = !0) : Zz(this.smoothed, this.ht, this.goal, pz, zz), Oz && (this.distance = -1), (0, tz.i)(this.smoothed, bz.position);
        const dz = !0 === lz.avoidTerrain ? this.pullIn(Mz, zz, bz) : 1;
        let Rz = this.goal;
        if ("target" === lz.offsetSpace) Rz = bz.position;
        else if (dz < 1) {
          Rz = this.aimOrigin;
          for (let zz = 0; zz < 3; zz++) Rz[zz] = bz.position[zz] + (this.goal[zz] - this.smoothed[zz]) * dz
        }
        mz(Rz, lz.lookDirection, null !== (iz = lz.lookAt) && void 0 !== iz ? iz : Mz, this.targets, this.base), uz.apply(this.base, bz), bz.fov = Fz(lz, this.xd)
      }
      continueFrom(zz) {
        zz instanceof hz && (0, Ez.w)(zz.settings.target, this.settings.target) && ((0, nz.j)(zz.base, this.base), (0, tz.i)(zz.goal, this.goal), (0, tz.i)(zz.lastFeet, this.lastFeet), this.foundFeet = zz.foundFeet, (0, tz.i)(zz.smoothed, this.smoothed), (0, tz.i)(zz.ht, this.ht), this.started = zz.started, !0 === zz.settings.avoidTerrain && (this.distance = zz.distance))
      }
      reset(zz) {
        Vz(this.base, zz), this.ht.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(zz, uz, bz) {
        const Ez = this.targets.aimPoint(zz);
        if (!Ez) return 1;
        const nz = bz.position,
          iz = rz(Ez, nz);
        if (!(iz > 0)) return 1;
        const lz = this.toCamera;
        for (let tz = 0; tz < 3; tz++) lz[tz] = (nz[tz] - Ez[tz]) / iz;
        const Mz = function(zz, uz, bz) {
          return zz < 0 || uz < zz ? uz : uz + (zz - uz) * Math.exp(-bz / 150)
        }(this.distance, function(zz, uz, bz, Ez) {
          const nz = zz.raycastTerrain(uz, bz, Ez);
          return null !== nz && Number.isFinite(nz) ? Math.min(Ez, Math.max(0, nz - .2)) : Ez
        }(this.xd, Ez, lz, iz), uz);
        if (iz - Mz < .001) return this.distance = -1, 1;
        this.distance = Mz;
        for (let tz = 0; tz < 3; tz++) nz[tz] = Ez[tz] + lz[tz] * Mz;
        return Mz / iz
      }
      placeGoal(zz, uz) {
        const bz = this.settings.offset;
        let Ez = bz[0],
          nz = bz[2];
        if ("target" === this.settings.offsetSpace) {
          const zz = this.targets.heading(uz),
            iz = Math.cos(zz),
            lz = Math.sin(zz);
          Ez = bz[0] * iz + bz[2] * lz, nz = -bz[0] * lz + bz[2] * iz
        }
        this.goal[0] = zz[0] + Ez, this.goal[1] = zz[1] + bz[1], this.goal[2] = zz[2] + nz
      }
    }
    class Uz {
      constructor(zz, uz, bz, Ez) {
        var nz, iz;
        this.settings = zz, this.xd = uz, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = zz.keyframes.length > 0 ? new Pz(zz.keyframes, null === (nz = zz.smooth) || void 0 === nz || nz, null !== (iz = zz.loop) && void 0 !== iz && iz) : null, this.base = (0, tz.g)(Ez, (0, tz.m)()), this.resolveTarget = zz => bz.aimPoint(zz)
      }
      update(zz, uz, bz) {
        this.elapsedMs += zz;
        const Ez = Fz(this.settings, this.xd);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Ez, this.base) : this.base.fov = Ez, (0, tz.i)(this.base.position, bz.position), bz.fov = this.base.fov, uz.apply(this.base, bz)
      }
      continueFrom(zz) {
        zz instanceof Uz && (0, Ez.w)(zz.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = zz.elapsedMs, (0, tz.g)(zz.base, this.base))
      }
      reset(zz) {
        Vz(this.base, zz), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function cz(zz, uz) {
      return (0, Ez.x)(zz, uz)
    }
    class gz {
      constructor(zz, uz, bz) {
        var Ez;
        this.settings = zz, this.xd = uz, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const nz = null !== bz && bz.settings.mode === zz.mode,
          iz = nz ? bz.pose : uz.getDefaultPose();
        this.pose = (0, tz.g)(iz, (0, tz.m)()), this.lastGoodPose = (0, tz.g)(nz ? bz.lastGoodPose : iz, (0, tz.m)()), this.look = new Kz(zz.playerLook), this.targets = null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.targets) && void 0 !== Ez ? Ez : new Gz(uz);
        const lz = (0, tz.g)(iz, (0, tz.m)());
        nz && bz.look.unapply(lz, lz), this.mode = function(zz, uz, bz, Ez) {
          switch (zz.mode) {
            case "fixed":
              return new qz(zz, uz, bz, Ez);
            case "follow":
              return new hz(zz, uz, bz, Ez);
            case "path":
              return new Uz(zz, uz, bz, Ez);
            case "frame":
              return new Rz(zz, uz, bz, Ez)
          }
        }(zz, uz, this.targets, lz), nz && (this.look.continueFrom(bz.look), this.mode.continueFrom(bz.mode))
      }
      update(zz, uz) {
        return this.look.update(zz, uz), this.mode.update(zz, this.look, this.pose), (0, tz.n)(this.pose) ? (0, tz.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, tz.g)(this.lastGoodPose, this.pose), this.mode.reset((0, tz.n)(this.lastGoodPose) ? this.lastGoodPose : this.xd.getDefaultPose())), this.pose
      }
    }

    function Sz(zz) {
      return [0, 0, zz[2], zz[3]]
    }
    class yz {
      constructor(zz) {
        this.xd = zz, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new Mz, this.shot = null, this.blend = null, this.mixed = (0, tz.m)(), this.output = (0, tz.m)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(zz) {
        const uz = (0, Hz.d)(zz);
        if ((0, Ez.w)(uz, this.pending ? this.pending.settings : this.settings)) return;
        const bz = cz(this.settings, uz);
        if (void 0 !== uz.transition && !bz) return this.pending = {
          settings: uz,
          shot: "default" === uz.mode ? null : new gz(uz, this.xd, null)
        }, void this.fade.fadeOut(uz.transition);
        const nz = null !== this.pending;
        this.pending = null, !nz && bz || this.fade.fadeIn(Ez.m.minTransitionFadeMs), this.show(uz, !1)
      }
      show(zz, uz) {
        var bz, nz;
        if ((0, Ez.w)(zz, this.settings)) return;
        const lz = !uz && cz(this.settings, zz);
        this.settings = zz;
        const Mz = null !== this.blend && this.blend.elapsedMs > 0,
          Hz = (0, tz.g)(this.hasOutput ? this.output : this.xd.getDefaultPose(), (0, tz.m)());
        if (this.shot = "default" === zz.mode ? null : new gz(zz, this.xd, uz ? null : this.shot), lz) return;
        const Oz = uz || !this.shot && !this.hasOutput ? 0 : null !== (bz = zz.blendInMs) && void 0 !== bz ? bz : 0;
        if (Oz <= 0) return void(this.blend = null);
        const pz = (0, iz.m)(null !== (nz = zz.blendEasing) && void 0 !== nz ? nz : "easeInOut");
        this.blend = {
          from: Hz,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Oz,
          easing: Mz ? Sz(pz) : pz
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
      update(zz, uz) {
        const bz = Number.isFinite(zz) && zz > 0 ? zz : 0;
        if (this.fade.advance(bz) && null !== this.pending) {
          const {
            settings: zz
          } = this.pending;
          this.pending = null, this.show(zz, !0)
        }
        this.loadingPositions.length = 0;
        const Ez = this.pending;
        if (null !== Ez && void 0 !== Ez && Ez.shot) {
          const zz = "path" === Ez.settings.mode ? 0 : bz;
          this.noteLoadingPosition(Ez.shot.update(zz, tz.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const lz = this.shot ? this.shot.update(bz, uz) : this.xd.getDefaultPose();
        this.shot && this.noteLoadingPosition(lz.position);
        const Mz = this.blend;
        if (!Mz) return this.writeOutput(lz);
        Mz.elapsedMs += bz;
        const Hz = Math.min(1, Mz.elapsedMs / Mz.durationMs);
        if (Mz.headingDelta = Number.isFinite(Mz.headingDelta) ? (0, nz.y)(Mz.headingDelta, lz.heading - Mz.from.heading) : (0, nz.x)(Mz.from.heading, lz.heading), (0, tz.s)(Mz.from, lz, Mz.headingDelta, (0, iz.k)(Hz, Mz.easing), this.mixed), Hz >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else Mz.fromScripted && this.noteLoadingPosition(Mz.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(zz) {
        if (zz.every(Number.isFinite)) {
          const uz = this.loadingPositions;
          uz.push((0, tz.i)(zz, this.loadingSlots[uz.length]))
        }
      }
      writeOutput(zz) {
        const uz = this.output;
        (0, tz.n)(zz) ? (0, tz.g)(zz, uz) : this.hasOutput || (0, tz.g)(this.xd.getDefaultPose(), uz), uz.pitch = (0, nz.i)(uz.pitch);
        const bz = this.xd.getDefaultFov(),
          iz = Number.isFinite(bz) && bz > 0 && bz < 180,
          lz = iz ? Math.min(Ez.m.minFov, bz) : Ez.m.minFov,
          Mz = iz ? Math.max(Ez.m.maxFov, bz) : Ez.m.maxFov;
        return uz.fov = Number.isFinite(uz.fov) ? Math.min(Mz, Math.max(lz, uz.fov)) : Mz, this.hasOutput = !0, uz
      }
    }
  },
  38510: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      g: () => Mz,
      i: () => lz,
      m: () => iz,
      n: () => Hz,
      r: () => tz,
      s: () => Oz
    });
    var Ez = bz(38518);
    const nz = {
      QJ: 0,
      eJ: 0
    };

    function iz() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function lz(zz, uz) {
      return uz[0] = zz[0], uz[1] = zz[1], uz[2] = zz[2], uz
    }

    function Mz(zz, uz) {
      return lz(zz.position, uz.position), uz.heading = zz.heading, uz.pitch = zz.pitch, uz.fov = zz.fov, uz
    }

    function tz(zz, uz) {
      return Array.isArray(zz) && zz.length === uz && zz.every(Number.isFinite)
    }

    function Hz(zz) {
      return tz(zz.position, 3) && Number.isFinite(zz.heading) && Number.isFinite(zz.pitch) && Number.isFinite(zz.fov)
    }

    function Oz(zz, uz, bz, nz, iz) {
      for (let Ez = 0; Ez < 3; Ez++) iz.position[Ez] = zz.position[Ez] + (uz.position[Ez] - zz.position[Ez]) * nz;
      return iz.heading = (0, Ez.t)(zz.heading + bz * nz), iz.pitch = zz.pitch + (uz.pitch - zz.pitch) * nz, iz.fov = zz.fov + (uz.fov - zz.fov) * nz, iz
    }
  },
  38549: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Nz,
      f: () => dz
    });
    var Ez = bz(38540),
      nz = bz(38510);
    const iz = Ez.i,
      lz = Ez.q;

    function Mz(zz, uz, bz, Ez) {
      return Number.isFinite(zz) ? Math.min(bz, Math.max(uz, zz)) : Ez
    }

    function tz(zz, uz, bz) {
      return void 0 !== zz && Number.isFinite(zz) ? Math.min(bz, Math.max(uz, zz)) : void 0
    }

    function Hz(zz) {
      const uz = Ez.m.maxCoordinate;
      return [Math.min(uz, Math.max(-uz, zz[0])), Math.min(uz, Math.max(-uz, zz[1])), Math.min(uz, Math.max(-uz, zz[2]))]
    }

    function Oz(zz) {
      return "string" === typeof zz ? zz : (0, nz.r)(zz, 3) ? Hz(zz) : void 0
    }
    const pz = new RegExp(Ez.u);

    function dz(zz) {
      return "string" === typeof zz && pz.test(zz)
    }

    function Fz(zz) {
      const uz = [];
      if (!Array.isArray(zz)) return uz;
      for (const bz of zz.slice(0, Ez.m.maxFrameTargets)) {
        const zz = Oz(bz);
        void 0 === zz || "string" === typeof zz && !dz(zz) || uz.push(zz)
      }
      return uz
    }

    function Zz(zz) {
      if (!(0, nz.r)(zz, 3)) return;
      const uz = Math.max(Math.abs(zz[0]), Math.abs(zz[1]), Math.abs(zz[2])),
        bz = Math.hypot(zz[0] / uz, zz[1] / uz, zz[2] / uz);
      return 0 === uz || uz * bz < Ez.m.minDirectionLength ? void 0 : [zz[0] / uz / bz, zz[1] / uz / bz, zz[2] / uz / bz]
    }

    function Rz(zz) {
      if (void 0 !== zz) return "string" === typeof zz ? iz.includes(zz) ? zz : void 0 : (0, nz.r)(zz, 4) ? [Mz(zz[0], 0, 1, 0), Mz(zz[1], Ez.m.minEasingY, Ez.m.maxEasingY, 0), Mz(zz[2], 0, 1, 1), Mz(zz[3], Ez.m.minEasingY, Ez.m.maxEasingY, 1)] : "linear"
    }

    function Kz(zz) {
      if (zz) return {
        maxYaw: Mz(zz.maxYaw, 0, Ez.m.maxPlayerLook, 0),
        maxPitch: Mz(zz.maxPitch, 0, Ez.m.maxPlayerLook, 0),
        returnMs: tz(zz.returnMs, 0, Ez.m.maxReturnMs)
      }
    }
    const wz = new RegExp(Ez.b);

    function Xz(zz) {
      var uz;
      if ("object" !== typeof zz || null === zz) return;
      const bz = Ez.m.maxTransitionMs,
        nz = Ez.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof zz.colour && wz.test(zz.colour) ? zz.colour : Ez.f,
        outMs: Mz(zz.outMs, nz, bz, nz),
        holdMs: Mz(null !== (uz = zz.holdMs) && void 0 !== uz ? uz : 0, 0, bz, 0),
        inMs: Mz(zz.inMs, nz, bz, nz)
      }
    }

    function fz(zz) {
      return !0 === zz || void 0
    }

    function sz(zz) {
      if ("object" !== typeof zz || null === zz) return !1;
      const uz = zz.lookAt;
      return Number.isFinite(zz.timeMs) && (0, nz.r)(zz.position, 3) && (void 0 === uz || "string" === typeof uz || (0, nz.r)(uz, 3))
    }

    function rz(zz) {
      return {
        ...zz,
        timeMs: Mz(zz.timeMs, 0, Ez.m.maxPathMs, 0),
        position: Hz(zz.position),
        lookAt: Oz(zz.lookAt),
        lookDirection: Zz(zz.lookDirection),
        fov: tz(zz.fov, Ez.m.minFov, Ez.m.maxFov),
        easing: Rz(zz.easing)
      }
    }

    function oz(zz) {
      const uz = [];
      if (!Array.isArray(zz)) return uz;
      for (const bz of zz.slice(0, Ez.m.maxKeyframes)) {
        if (!sz(bz)) continue;
        const zz = rz(bz);
        (0 === uz.length || zz.timeMs > uz[uz.length - 1].timeMs) && uz.push(zz)
      }
      return uz
    }

    function Nz(zz) {
      if ("object" !== typeof zz || null === zz) return {
        mode: "default"
      };
      const uz = {
          blendInMs: tz(zz.blendInMs, 0, Ez.m.maxBlendInMs),
          blendEasing: Rz(zz.blendEasing),
          transition: Xz(zz.transition),
          letterbox: fz(zz.letterbox),
          hideHud: fz(zz.hideHud)
        },
        bz = {
          mode: "default",
          ...uz
        };
      if ("default" === zz.mode || "fixed" === zz.mode && !(0, nz.r)(zz.position, 3)) return bz;
      const iz = {
        ...uz,
        fov: tz(zz.fov, Ez.m.minFov, Ez.m.maxFov),
        playerFacing: (pz = zz.playerFacing, lz.includes(pz) ? pz : void 0),
        playerLook: Kz(zz.playerLook)
      };
      var pz, dz;
      switch (zz.mode) {
        case "fixed":
          return {
            ...zz, ...iz, position: Hz(zz.position), lookAt: Oz(zz.lookAt), lookDirection: Zz(zz.lookDirection)
          };
        case "follow":
          return {
            ...zz, ...iz, target: "string" === typeof zz.target ? zz.target : void 0, lookAt: Oz(zz.lookAt), offset: (dz = zz.offset, Array.isArray(dz) ? [Mz(dz[0], -Ez.m.maxOffset, Ez.m.maxOffset, 0), Mz(dz[1], -Ez.m.maxOffset, Ez.m.maxOffset, 0), Mz(dz[2], -Ez.m.maxOffset, Ez.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: Zz(zz.lookDirection), smoothMs: tz(zz.smoothMs, 0, Ez.m.maxSmoothMs)
          };
        case "path":
          return {
            ...zz, ...iz, keyframes: oz(zz.keyframes)
          };
        case "frame":
          return {
            ...zz, ...iz, targets: Fz(zz.targets), viewHeading: tz(zz.viewHeading, -Ez.m.maxFrameHeading, Ez.m.maxFrameHeading), viewElevation: tz(zz.viewElevation, 0, Ez.m.maxFrameElevation), padding: tz(zz.padding, 0, Ez.m.maxFrameDistance), closestDistance: tz(zz.closestDistance, 0, Ez.m.maxFrameDistance), furthestDistance: tz(zz.furthestDistance, 0, Ez.m.maxFrameDistance), smoothMs: tz(zz.smoothMs, 0, Ez.m.maxSmoothMs)
          };
        default:
          return bz
      }
    }
  },
  38036: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz
    });
    var Ez = bz(1212);

    function nz(zz) {
      const uz = /(\d*\.?\d+)px/.exec(zz);
      return uz ? Number(uz[1]) : null
    }

    function iz(zz) {
      return zz.split(/[\s,]+/).pop()
    }
    let lz = !1;
    const Mz = {
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
      drawText: function(zz, uz, Ez, Mz, tz, Hz) {
        if (tz <= 0 || Hz <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Oz,
          fontVariant: pz,
          fontWeight: dz,
          fontSize: Fz,
          font: Zz
        } = this, Rz = [Oz, pz, dz, `${Fz}px`, Zz].filter(Boolean).join(" "), Kz = [
          [dz, `${Fz}px`, iz(Zz)].filter(Boolean).join(" "), `${Fz}px sans-serif`
        ], wz = zz.font, Xz = function(zz, uz, bz) {
          for (const Ez of uz) {
            zz.font = Ez;
            const uz = nz(zz.font),
              lz = iz(Ez);
            if (null !== uz && Math.abs(uz - bz) <= .5 && zz.font.toLowerCase().includes(lz.toLowerCase())) return Ez
          }
          return null
        }(zz, [Rz, ...Kz], Fz);
        Xz !== Rz && function(zz, uz, Ez) {
          lz || (lz = !0, Promise.resolve().then((() => bz(1068))).then((bz => {
            let {
              WR: nz
            } = bz;
            nz(new Error("A canvas didn't take canvasTxt's font"), {
              font: zz,
              MZ: uz,
              drawnWith: null !== Ez && void 0 !== Ez ? Ez : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Rz, wz, Xz);
        const fz = nz(zz.font);
        if (null === Xz && null !== fz && fz > 0) {
          const bz = Fz / fz;
          zz.save();
          try {
            return zz.scale(bz, bz), {
              height: this.drawLines(zz, uz, Ez / bz, Mz / bz, tz / bz, Hz / bz, fz).height * bz
            }
          } finally {
            zz.restore()
          }
        }
        return this.drawLines(zz, uz, Ez, Mz, tz, Hz, Fz)
      },
      drawLines: function(zz, uz, bz, nz, iz, lz, Mz) {
        const tz = bz + iz,
          Hz = nz + lz;
        let Oz, pz = nz + lz / 2 + Mz / 2;
        "right" === this.align ? (Oz = tz, zz.textAlign = "right") : "left" === this.align ? (Oz = bz, zz.textAlign = "left") : (Oz = bz + iz / 2, zz.textAlign = "center");
        for (const Ez of uz) {
          zz.measureText(Ez).width >= iz && (uz = uz.replace(Ez, ""))
        }
        uz = (0, Ez.W)(uz);
        const dz = [],
          Fz = uz.split("\n"),
          Zz = this.justify ? zz.measureText("\u200a").width : 0;
        Fz.forEach((uz => {
          let bz = zz.measureText(uz).width;
          if (bz <= iz) dz.push(uz);
          else {
            let Ez = uz;
            const nz = iz;
            let lz, Mz, tz;
            for (bz = zz.measureText(Ez).width; bz > nz;) {
              for (lz = 0, Mz = 0, tz = ""; Mz < nz;) lz++, tz = Ez.substr(0, lz), Mz = zz.measureText(tz).width;
              lz--, tz = tz.substr(0, lz);
              const uz = lz;
              if (" " !== Ez.substr(lz, 1)) {
                for (;
                  " " !== Ez.substr(lz, 1) && 0 !== lz;) lz--;
                0 === lz && (lz = uz), tz = Ez.substr(0, lz)
              }
              tz = this.justify ? this.justifyLine(zz, tz, Zz, "\u200a", iz) : tz, Ez = Ez.substr(lz), bz = zz.measureText(Ez).width, dz.push(tz)
            }
            bz > 0 && dz.push(Ez)
          }
        }));
        const Rz = this.lineHeight ? this.lineHeight : this.getTextHeight(zz, uz),
          Kz = Rz * (dz.length - 1),
          wz = Kz / 2;
        let Xz = nz;
        "top" === this.vAlign ? pz = nz + Mz : "bottom" === this.vAlign ? (pz = Hz - Kz, Xz = Hz) : (Xz = nz + lz / 2, pz -= wz), dz.forEach((uz => {
          uz = uz.trim(), zz.fillText(uz, Oz, pz), pz += Rz
        })), this.debug && (zz.lineWidth = 3, zz.strokeStyle = "#00909e", zz.strokeRect(bz, nz, iz, lz), zz.lineWidth = 2, zz.strokeStyle = "#f6d743", zz.beginPath(), zz.moveTo(Oz, nz), zz.lineTo(Oz, Hz), zz.stroke(), zz.strokeStyle = "#ff6363", zz.beginPath(), zz.moveTo(bz, Xz), zz.lineTo(tz, Xz), zz.stroke());
        return {
          height: Kz + Rz
        }
      },
      getTextHeight: function(zz, uz) {
        const bz = zz.textBaseline;
        zz.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Ez
        } = zz.measureText(uz);
        return zz.textBaseline = bz, Ez
      },
      justifyLine: function(zz, uz, bz, Ez, nz) {
        const iz = uz.trim(),
          lz = zz.measureText(iz).width,
          Mz = iz.split(/\s+/).length - 1,
          tz = Math.floor((nz - lz) / bz);
        if (Mz <= 0 || tz <= 0) return iz;
        const Hz = Math.floor(tz / Mz);
        let Oz = tz - Mz * Hz,
          pz = [];
        for (let dz = 0; dz < Hz; dz++) pz.push(Ez);
        pz = pz.join("");
        return iz.replace(/\s+/g, (zz => {
          const uz = Oz > 0 ? pz + Ez : pz;
          return Oz--, zz + uz
        }))
      }
    }
  },
  38474: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return uz.set(zz), uz
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  38040: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Rz,
      h: () => Zz,
      k: () => dz,
      l: () => Oz,
      n: () => pz
    });
    var Ez = bz(4035),
      nz = bz(328);
    const iz = 1024,
      lz = 1536,
      Mz = 2 * Ez.i + 1,
      tz = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Hz = 1.5;

    function Oz(zz, uz, bz) {
      if ("string" !== typeof zz) return uz;
      try {
        const bz = JSON.parse(zz);
        return bz && "object" === typeof bz ? bz : uz
      } catch (Ez) {
        return void 0 !== bz && console.error(`Couldn't parse ${bz}`, Ez), uz
      }
    }

    function pz(zz) {
      return Oz(zz, null, "a leaderboard's rows")
    }

    function dz(zz, uz) {
      var bz, Ez;
      return null !== uz && void 0 !== uz ? uz : {
        status: null !== (bz = zz.status) && void 0 !== bz ? bz : "loading",
        entries: null !== (Ez = zz.entries) && void 0 !== Ez ? Ez : []
      }
    }

    function Fz(zz, uz) {
      return "number" === typeof zz && Number.isFinite(zz) && zz > 0 ? zz : uz
    }

    function Zz(zz, uz) {
      const bz = Fz(zz.size, 1);
      let Ez = Fz(zz.width, Fz(2.5 * bz, 2.5)),
        nz = Fz(zz.height, Fz(3.75 * bz, 3.75));
      Number.isFinite(iz * nz / Ez) && Number.isFinite(lz * Ez / nz) || (Ez = 2.5, nz = 3.75);
      const Mz = nz / Ez,
        tz = Math.max(1, Math.min(iz, uz / Mz));
      return {
        width: Ez,
        height: nz,
        layoutWidth: Math.max(iz, lz / Mz),
        layoutHeight: Math.max(lz, iz * Mz),
        pixelWidth: Math.round(tz),
        pixelHeight: Math.round(Math.max(1, Math.min(uz, tz * Mz)))
      }
    }

    function Rz(zz, uz, bz, lz, Oz, pz) {
      zz.setTransform(1, 0, 0, 1, 0, 0), zz.fillStyle = nz.N.defaultNameTagBackground, zz.fillRect(0, 0, uz, bz), zz.scale(uz / lz.layoutWidth, bz / lz.layoutHeight), zz.translate((lz.layoutWidth - iz) / 2, 0),
        function(zz, uz, bz, iz) {
          var lz, Oz, pz, dz;
          const {
            top: Fz,
            around: Zz,
            showPlayerText: Rz,
            localPlayerDbId: Xz
          } = bz, {
            whiteUiText: fz,
            grayUiText: sz,
            yellowUiText: rz
          } = nz.N;
          zz.textBaseline = "middle";
          const oz = function(uz, bz, Ez, nz, iz, lz) {
              let Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              zz.font = `bold ${nz}px 'Jetbrains Mono', monospace`, zz.fillStyle = iz, zz.textAlign = Mz;
              let tz = uz.replace(/[\r\n\t]/g, " ");
              if (zz.measureText(tz).width > lz) {
                for (; tz.length > 0 && zz.measureText(`${tz}\u2026`).width > lz;) tz = tz.slice(0, -1);
                tz += "\u2026"
              }
              zz.fillText(tz, bz, Ez)
            },
            Nz = uz => {
              zz.fillStyle = fz, zz.globalAlpha = .15, zz.fillRect(24, uz, 976, 2), zz.globalAlpha = 1
            },
            vz = null === Xz ? null : (0, nz.oc)(Xz),
            xz = zz => null !== vz && zz.playerHash === vz,
            Jz = Kz(Fz.entries, Ez.j),
            Az = "ready" === Fz.status && Jz.length > 0,
            Tz = null === Zz ? [] : Kz(Zz.entries, Mz),
            Lz = Jz.some(xz),
            Pz = null === Zz ? null : function(zz) {
              const uz = zz;
              if (!uz || !Number.isFinite(uz.rank) || !Number.isFinite(uz.tied) || !Number.isFinite(uz.total)) return null;
              return uz
            }(Zz.standing),
            Gz = Tz.find(xz),
            az = Jz.find(xz),
            Vz = null === Pz || void 0 === Gz ? null : {
              value: Gz.value,
              rank: Pz.rank
            },
            mz = wz(Jz, void 0 === az || az.value === (null === Vz || void 0 === Vz ? void 0 : Vz.value) ? Vz : null),
            qz = wz(Tz, Vz),
            hz = (zz, uz) => {
              const bz = zz.findIndex(xz);
              return bz >= 0 ? uz[bz] : null
            },
            Uz = null !== (lz = null !== (Oz = null === Pz || void 0 === Pz ? void 0 : Pz.rank) && void 0 !== Oz ? Oz : hz(Tz, qz)) && void 0 !== lz ? lz : hz(Jz, mz);
          zz.font = "bold 34px 'Jetbrains Mono', monospace";
          const cz = [...Az ? mz : [], ...Lz ? [] : qz],
            gz = Math.min(280, Math.max(0, ...cz.map((uz => zz.measureText(tz.format(uz)).width)))),
            Sz = gz <= 80,
            yz = Sz ? 80 : 32 + gz,
            Dz = Sz ? 148 : yz + 28,
            Qz = 660 - Dz;
          oz(`TOP ${Ez.j}  /  ALL TIME`, 24, 52, 28, sz, 976), oz(Rz ? String(null !== (pz = uz.title) && void 0 !== pz ? pz : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, fz, 976), oz("RANK", 32, 174, 28, sz, Dz - 40), oz("PLAYER", Dz, 174, 28, sz, Qz), oz(Rz ? String(null !== (dz = uz.scoreLabel) && void 0 !== dz ? dz : "Score").slice(0, 24) : "Score", 992, 174, 28, sz, 304, "right"), Nz(202);
          const Wz = (iz - 232) / (Ez.j + Hz + Mz),
            ez = 208 + Ez.j * Wz,
            jz = ez + Hz * Wz,
            Iz = (uz, bz, Ez, nz) => {
              const iz = xz(uz);
              zz.fillStyle = iz ? rz : fz, zz.globalAlpha = iz ? .15 : nz ? .035 : 0, zz.fillRect(24, Ez - Wz / 2 + 1, 976, Wz - 2), zz.globalAlpha = 1;
              const lz = iz ? rz : fz;
              oz(tz.format(bz), yz, Ez, 34, lz, Sz ? 80 : gz, Sz ? "center" : "right"), oz(Rz ? String(uz.name).slice(0, 64) : "Player", Dz, Ez, 34, lz, Qz);
              const Mz = tz.format(uz.value);
              oz(zz.measureText(Mz).width > 304 ? uz.value.toExponential(6) : Mz, 992, Ez, 34, lz, 304, "right")
            };
          if (Az)
            for (const [Ez, nz] of Jz.entries()) Iz(nz, mz[Ez], 208 + (Ez + .5) * Wz, Ez % 2 === 0);
          else {
            const zz = "error" === Fz.status,
              uz = zz ? "Couldn't load leaderboard" : "ready" === Fz.status ? "No scores yet" : "Loading leaderboard\u2026",
              bz = zz ? "Trying again shortly" : "ready" === Fz.status ? "Be the first on the board!" : "Fetching the top players",
              Ez = (208 + ez) / 2;
            oz(uz, 512, Ez - 28, 40, zz ? nz.N.redUiText : fz, 960, "center"), oz(bz, 512, Ez + 27, 30, sz, 960, "center")
          }
          const Bz = ez + Hz * Wz / 2;
          if (null === Uz) Nz(Bz);
          else {
            const uz = null === Pz ? 0 : Pz.tied - 1,
              bz = `YOUR RANK #${tz.format(Uz)}${null===Pz?"":` of ${tz.format(Pz.total)}`}`;
            zz.font = "bold 36px 'Jetbrains Mono', monospace";
            const Ez = Math.max(20, Math.min(36, Math.floor(34560 / zz.measureText(bz).width)));
            oz(bz, 512, Bz - (uz > 0 ? 15 : 0), Ez, rz, 960, "center"), uz > 0 && oz(`Tied with ${tz.format(uz)} other${1===uz?"":"s"}`, 512, Bz + 24, 24, sz, 960, "center")
          }
          if (null === Zz) return;
          const Cz = jz + Mz * Wz / 2;
          if (Lz) oz(`You're in the top ${Ez.j}!`, 512, Cz, 40, rz, 960, "center");
          else if (0 === Tz.length) oz("You're not on this board yet", 512, Cz, 34, sz, 960, "center");
          else
            for (const [Ez, nz] of Tz.entries()) Iz(nz, qz[Ez], jz + (Ez + .5) * Wz, Ez % 2 === 0)
        }(zz, Oz, pz, lz.layoutHeight)
    }

    function Kz(zz, uz) {
      return Array.isArray(zz) ? zz.slice(0, uz).filter((zz => zz && Number.isFinite(zz.rank) && Number.isFinite(zz.value))) : []
    }

    function wz(zz, uz) {
      const bz = [];
      let Ez = !1;
      return zz.forEach(((nz, iz) => {
        if (null !== uz && nz.value === uz.value) return void bz.push(uz.rank);
        const lz = iz > 0 && nz.value === zz[iz - 1].value;
        lz || (Ez = 0 === iz && 1 !== nz.rank), bz.push(lz && !Ez ? bz[iz - 1] : nz.rank)
      })), bz
    }
  },
  38239: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      e: () => iz
    });
    const Ez = 32;

    function nz(zz) {
      return Array.from(zz).length
    }

    function iz(zz) {
      const uz = [""];
      let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        nz = "";
      const iz = () => {
        uz.push(""), bz = 0, nz = ""
      };
      for (const lz of zz.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(lz)) iz();
        else if (/^\s+$/.test(lz)) nz += lz;
      else if (lz.length > 0) {
        const zz = Array.from(lz);
        bz > 0 && bz + nz.length + zz.length > Ez && iz(), uz[uz.length - 1] += nz, bz += nz.length, nz = "";
        for (const nz of zz) bz >= Ez && iz(), uz[uz.length - 1] += nz, bz++
      }
      return uz[uz.length - 1] += nz, uz
    }
  },
  38467: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(36106),
      nz = bz.n(Ez);
    const iz = [1, 1, 1];

    function lz(zz) {
      if (!zz) return [...iz];
      try {
        const [uz, bz, Ez] = nz()(zz).rgb().array();
        return [uz / 255, bz / 255, Ez / 255]
      } catch (uz) {
        return console.warn(`Invalid groundArrowPath colour "${zz}":`, uz), [...iz]
      }
    }
  },
  33745: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      f: () => Mz,
      i: () => lz,
      k: () => nz,
      o: () => Ez
    });
    const Ez = {
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
      nz = "/textures/dayNight/sun.png",
      iz = "/textures/dayNight/moon.png",
      lz = "/textures/dayNight/stars",
      Mz = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38540: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Oz,
      f: () => pz,
      i: () => Ez,
      m: () => tz,
      q: () => nz,
      u: () => Hz,
      w: () => Mz,
      x: () => lz
    });
    const Ez = ["linear", "easeIn", "easeOut", "easeInOut"],
      nz = ["movement", "camera", "cursor"],
      iz = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function lz(zz, uz) {
      return Mz(zz, uz, iz)
    }

    function Mz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (zz === uz || Number.isNaN(zz) && Number.isNaN(uz)) return !0;
      if ("object" !== typeof zz || "object" !== typeof uz || null === zz || null === uz || Array.isArray(zz) !== Array.isArray(uz)) return !1;
      const Ez = zz,
        nz = uz;
      for (const iz of new Set([...Object.keys(Ez), ...Object.keys(nz)]))
        if (!bz.includes(iz) && !Mz(Ez[iz], nz[iz])) return !1;
      return !0
    }
    const tz = {
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
      Hz = "^-[1-9][0-9]*$",
      Oz = "^#[0-9a-fA-F]{6}$",
      pz = "#000000"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);