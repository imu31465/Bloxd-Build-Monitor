export const id = 191;
export const ids = [191];
export const modules = {
  40742: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(56),
      nz = bz(2602);

    function iz(zz, uz, bz) {
      const iz = (0, Ez.useRef)(null),
        {
          width: lz,
          height: Mz
        } = (0, nz.e)(zz);
      (0, Ez.useEffect)((() => {
        const bz = uz(zz.current);
        return iz.current = bz, () => {
          bz.close(), iz.current = null
        }
      }), [zz, uz]), (0, Ez.useEffect)((() => {
        lz <= 0 || Mz <= 0 || iz.current.resize(lz, Mz)
      }), [lz, Mz]), (0, Ez.useEffect)((() => {
        iz.current.show(bz)
      }), [bz])
    }
  },
  40744: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => dz,
      f: () => pz,
      h: () => tz
    });
    var Ez = bz(36588),
      nz = bz(38017);

    function iz(zz, uz) {
      let [bz, Ez, nz] = zz;
      return [0, .5, 1].map((zz => ({
        timeFraction: zz,
        rotation: {
          Qi: "catmull-rom-spline",
          point: [bz, Ez, nz + (.5 === zz ? uz : 0)]
        }
      })))
    }

    function lz(zz, uz, bz) {
      return {
        Ui: 3200,
        loop: !0,
        Si: {
          Root: {
            timeline: [0, .5, 1].map((zz => ({
              timeFraction: zz,
              position: {
                Qi: "catmull-rom-spline",
                point: [0, .5 === zz ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((zz => ({
              timeFraction: zz,
              rotation: {
                Qi: "catmull-rom-spline",
                point: [0, .25 === zz ? .12 : .75 === zz ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: iz(zz, bz)
          },
          ArmRightMesh: {
            timeline: iz(uz, -bz)
          }
        }
      }
    }
    const Mz = lz([0, 0, 0], [0, 0, 0], .07),
      tz = (0, nz.c)((0, Ez.f)(Mz), "mobIdle"),
      Hz = lz([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Oz = lz([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      pz = (0, nz.c)((0, Ez.f)(Hz), "gunReady"),
      dz = (0, nz.c)((0, Ez.f)(Oz), "gunAimed")
  },
  38017: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      d: () => iz
    });
    const Ez = new WeakMap;

    function nz(zz, uz) {
      return Ez.set(zz, uz), zz
    }

    function iz(zz) {
      var uz;
      return null !== (uz = Ez.get(zz)) && void 0 !== uz ? uz : null
    }
  },
  9028: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      e: () => nz,
      g: () => Oz
    });
    var Ez = bz(1531);

    function nz(zz) {
      var uz;
      return {
        ...lz.store,
        yaw: lz.store.yaw + (null !== (uz = Ez.c[zz].previewYaw) && void 0 !== uz ? uz : 0)
      }
    }
    const iz = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      lz = {
        player: iz,
        store: {
          ...iz,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Mz(zz, uz) {
      zz instanceof Promise ? zz.then(uz).catch((zz => {
        console.error("Couldn't open the preview", zz)
      })) : uz(zz)
    }
    class tz {
      constructor(zz) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Mz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height), null !== this.view && zz.show(this.view))
        }))
      }
      show(zz) {
        var uz;
        this.view = zz, null === (uz = this.opened) || void 0 === uz || uz.show(zz)
      }
      resize(zz, uz) {
        var bz;
        this.size = {
          width: zz,
          height: uz
        }, null === (bz = this.opened) || void 0 === bz || bz.resize(zz, uz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    class Hz {
      constructor(zz) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(zz).then((zz => zz.ready)), Mz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var zz, uz;
        return null !== (zz = null === (uz = this.opened) || void 0 === uz ? void 0 : uz.isReady()) && void 0 !== zz && zz
      }
      setCosmetic(zz, uz) {
        var bz;
        null === (bz = this.opened) || void 0 === bz || bz.setCosmetic(zz, uz)
      }
      playEmote(zz) {
        var uz;
        null === (uz = this.opened) || void 0 === uz || uz.playEmote(zz)
      }
      setOrbit(zz) {
        var uz;
        null === (uz = this.opened) || void 0 === uz || uz.setOrbit(zz)
      }
      resetCamera() {
        var zz;
        null === (zz = this.opened) || void 0 === zz || zz.resetCamera()
      }
      async untilDrawn(zz) {
        var uz;
        await this.ready, await (null === (uz = this.opened) || void 0 === uz ? void 0 : uz.untilDrawn(zz))
      }
      resize(zz, uz) {
        var bz;
        this.size = {
          width: zz,
          height: uz
        }, null === (bz = this.opened) || void 0 === bz || bz.resize(zz, uz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    const Oz = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(zz) {
        this.host = zz
      }
      setDefaultHost(zz) {
        this.makeDefault = zz
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(zz) {
        return new tz(this.current().openMob(zz))
      }
      openPet(zz) {
        return new tz(this.current().openPet(zz))
      }
      openMobLineup(zz) {
        return new tz(this.current().openMobLineup(zz))
      }
      openCharacter(zz, uz) {
        return new Hz(this.current().openCharacter(zz, uz))
      }
    }
  },
  9020: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez.b,
      g: () => Ez.e,
      j: () => Ez.g
    });
    var Ez = bz(9028);
    class nz {
      constructor(zz) {
        this.load = zz, this.loaded = null, this.loading = null
      }
      run(zz) {
        return null !== this.loaded ? zz(this.loaded) : (this.loading ??= this.load().then((zz => (this.loaded = zz, zz)), (zz => {
          throw this.loading = null, zz
        })), this.loading.then(zz))
      }
    }
    class iz {
      constructor() {
        this.mobScene = new nz((() => Promise.all([bz.e(69), bz.e(226), bz.e(225), bz.e(244), bz.e(94), bz.e(245), bz.e(72), bz.e(71), bz.e(242), bz.e(70), bz.e(252), bz.e(246), bz.e(251), bz.e(249), bz.e(241), bz.e(218), bz.e(264), bz.e(222), bz.e(236), bz.e(247), bz.e(250), bz.e(74), bz.e(196), bz.e(215), bz.e(219), bz.e(93), bz.e(113), bz.e(234), bz.e(73), bz.e(112), bz.e(153)]).then((() => bz(40273))))), this.characterScene = new nz((() => Promise.all([bz.e(69), bz.e(226), bz.e(225), bz.e(244), bz.e(94), bz.e(245), bz.e(72), bz.e(71), bz.e(242), bz.e(70), bz.e(252), bz.e(246), bz.e(251), bz.e(249), bz.e(241), bz.e(218), bz.e(264), bz.e(222), bz.e(236), bz.e(247), bz.e(250), bz.e(74), bz.e(196), bz.e(215), bz.e(219), bz.e(93), bz.e(113), bz.e(234), bz.e(73), bz.e(112), bz.e(152)]).then((() => bz(40383)))))
      }
      openMob(zz) {
        return this.mobScene.run((uz => uz.openMobPreview(zz)))
      }
      openPet(zz) {
        return this.mobScene.run((uz => uz.openPetPreview(zz)))
      }
      openMobLineup(zz) {
        return this.mobScene.run((uz => uz.openMobLineupPreview(zz)))
      }
      openCharacter(zz, uz) {
        return this.characterScene.run((bz => bz.openCharacterPreview(zz, uz)))
      }
    }
    Ez.g.setDefaultHost((() => new iz))
  },
  40963: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      FrontlineMvpLineup: () => pz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(9020),
      Mz = bz(40744),
      tz = bz(40742),
      Hz = bz(1089);

    function Oz(zz) {
      return lz.j.openMobLineup(zz)
    }
    const pz = (0, Ez.memo)((function(zz) {
      let {
        players: uz,
        className: bz
      } = zz;
      const nz = (0, Ez.useRef)(null),
        lz = (0, Ez.useMemo)((() => uz.map((zz => {
          let {
            cosmetics: uz,
            size: bz,
            heldGun: Ez
          } = zz;
          return {
            cosmetics: uz,
            size: bz,
            Fv: Ez.name,
            animation: Ez.aimed ? Mz.d : Mz.f
          }
        }))), [uz]),
        pz = function(zz) {
          const [uz, bz] = (0, Ez.useState)([]);
          return (0, Ez.useEffect)((() => {
            bz(zz.map((() => !1)));
            const uz = zz.map(((zz, uz) => {
              let {
                showAfterMs: Ez
              } = zz;
              return window.setTimeout((() => {
                bz((zz => zz.map(((zz, bz) => zz || bz === uz))))
              }), Ez)
            }));
            return () => {
              for (const zz of uz) window.clearTimeout(zz)
            }
          }), [zz]), uz
        }(uz),
        dz = (0, Ez.useMemo)((() => ({
          figures: lz,
          shown: pz
        })), [lz, pz]);
      return (0, tz.d)(nz, Oz, dz), (0, Hz.jsx)("div", {
        className: iz()("MobPreview", bz),
        ref: nz
      })
    }))
  },
  36588: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz,
      f: () => lz
    });
    var Ez = bz(36577),
      nz = bz(328),
      iz = bz(1840);

    function lz(zz) {
      if ("Ui" in zz) return oz.createAnimationScript(zz);
      return new Hz(zz).createAnimationScript()
    }

    function Mz(zz, uz, bz, nz) {
      const iz = zz.Ui <= 0 ? 1 : uz + bz * Math.max(0, nz) / zz.Ui;
      return zz.gi === Ez.m.LoopOnLastFrame ? iz % 1 : zz.gi === Ez.m.NoLoop && iz >= 1 ? null : Math.min(1, iz)
    }
    class tz {
      createAnimationScript(zz) {
        const {
          Ui: uz,
          loop: bz,
          Si: Ez
        } = zz;
        return {
          Ui: Math.round(uz),
          gi: this.createLoopMode(null !== bz && void 0 !== bz && bz),
          Si: this.createNodeSkeletonAnimationScript(null !== Ez && void 0 !== Ez ? Ez : null)
        }
      }
      createLoopMode(zz) {
        switch (zz) {
          case !1:
            return Ez.m.NoLoop;
          case !0:
            return Ez.m.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Ez.m.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${zz}`)
      }
      createNodeSkeletonAnimationScript(zz) {
        if (null === zz) return null;
        const uz = {};
        for (const bz in zz) {
          const Ez = zz[bz];
          uz[bz] = this.createNodeAnimationScript(Ez)
        }
        return uz
      }
      createNodeAnimationScript(zz) {
        const {
          timeline: uz
        } = zz, bz = uz.filter((zz => Number.isFinite(zz.timeFraction)));
        return bz.sort(((zz, uz) => zz.timeFraction - uz.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(bz, "rotation", dz),
          position: this.createTimelineFromKeyframes(bz, "position", Zz)
        }
      }
      createTimelineFromKeyframes(zz, uz, bz) {
        const Ez = [];
        for (const tz of zz) {
          const zz = tz[uz];
          if (zz) {
            const uz = this.createAnimationFrameWithoutPrecomputes(tz.timeFraction, zz);
            Oz(uz) && Ez.push(uz)
          }
        }
        const nz = [];
        for (let tz = 0; tz < Ez.length; tz++) {
          var iz, lz, Mz;
          const zz = Ez[tz],
            uz = null !== (iz = Ez[tz - 1]) && void 0 !== iz ? iz : zz,
            Hz = null !== (lz = Ez[tz + 1]) && void 0 !== lz ? lz : zz,
            Oz = null !== (Mz = Ez[tz + 2]) && void 0 !== Mz ? Mz : Hz;
          nz.push({
            ...zz,
            ...bz(uz.post, uz.timeFraction, zz.post, zz.timeFraction, Hz.pre, Hz.timeFraction, Oz.pre, Oz.timeFraction)
          })
        }
        return nz
      }
      createAnimationFrameWithoutPrecomputes(zz, uz) {
        let bz, Ez, nz = null;
        var iz;
        if ("object" === typeof uz && "point" in uz) nz = null !== (iz = uz.Qi) && void 0 !== iz ? iz : null, bz = uz.point, Ez = uz.point;
        else if ("object" === typeof uz && "pre" in uz) {
          var lz;
          nz = null !== (lz = uz.Qi) && void 0 !== lz ? lz : null, bz = uz.pre, Ez = uz.post
        } else bz = uz, Ez = uz;
        return {
          timeFraction: zz,
          Qi: this.createLerpMode(nz),
          pre: bz,
          post: Ez
        }
      }
      createLerpMode(zz) {
        return null === zz ? Ez.j.Linear : tz.LERP_MODE_SCHEMA_MAPPING[zz]
      }
    }
    tz.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ez.j.Linear,
      "catmull-rom-spline": Ez.j.CatmullRomSpline
    };
    class Hz {
      constructor(zz) {
        this.animationSchema = zz
      }
      createAnimationScript() {
        const {
          animation_length: zz,
          loop: uz,
          bones: bz
        } = this.animationSchema;
        return {
          Ui: Math.round(1e3 * zz),
          gi: this.createLoopMode(null !== uz && void 0 !== uz && uz),
          Si: this.createNodeSkeletonAnimationScript(null !== bz && void 0 !== bz ? bz : null)
        }
      }
      createLoopMode(zz) {
        switch (zz) {
          case !1:
            return Ez.m.NoLoop;
          case !0:
            return Ez.m.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Ez.m.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${zz}`)
      }
      createNodeSkeletonAnimationScript(zz) {
        if (null === zz) return null;
        const uz = {};
        for (const bz in zz) {
          const Ez = zz[bz];
          uz[bz] = this.createNodeAnimationScript(Ez)
        }
        return uz
      }
      createNodeAnimationScript(zz) {
        const {
          rotation: uz,
          position: bz
        } = zz;
        return {
          rotation: this.createAnimationTimeline(null !== uz && void 0 !== uz ? uz : null, Kz, dz, !0),
          position: this.createAnimationTimeline(null !== bz && void 0 !== bz ? bz : null, Xz, Zz, !1)
        }
      }
      createAnimationTimeline(zz, uz, bz, Ez) {
        if (null === zz) return [];
        if (Array.isArray(zz)) {
          zz = {
            "0.0": zz
          }
        }
        const nz = Object.entries(zz).map((zz => {
          let [bz, Ez] = zz;
          const nz = Number(bz) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(nz, Ez, uz)
        })).filter(Oz);
        nz.sort(((zz, uz) => zz.timeFraction - uz.timeFraction)), Ez && function(zz) {
          for (let uz = 1; uz < zz.length; uz++) {
            const bz = zz[uz - 1].post,
              Ez = zz[uz],
              nz = fz(Ez.pre),
              iz = fz(Ez.post),
              lz = rz(bz, Ez.pre);
            rz(bz, nz) < lz && (zz[uz] = {
              ...Ez,
              pre: nz,
              post: iz
            })
          }
        }(nz);
        const iz = [];
        for (let Hz = 0; Hz < nz.length; Hz++) {
          var lz, Mz, tz;
          const zz = nz[Hz],
            uz = null !== (lz = nz[Hz - 1]) && void 0 !== lz ? lz : zz,
            Ez = null !== (Mz = nz[Hz + 1]) && void 0 !== Mz ? Mz : zz,
            Oz = null !== (tz = nz[Hz + 2]) && void 0 !== tz ? tz : Ez;
          iz.push({
            ...zz,
            ...bz(uz.post, uz.timeFraction, zz.post, zz.timeFraction, Ez.pre, Ez.timeFraction, Oz.pre, Oz.timeFraction)
          })
        }
        return iz
      }
      createAnimationFrameWithoutPrecomputes(zz, uz, bz) {
        let Ez, nz, iz = null;
        if ("object" === typeof uz && "post" in uz) {
          var lz;
          iz = null !== (lz = uz.lerp_mode) && void 0 !== lz ? lz : null, nz = Rz(uz.post, bz), Ez = uz.pre ? Rz(uz.pre, bz) : nz
        } else {
          const zz = Rz(uz, bz);
          nz = zz, Ez = zz
        }
        return {
          timeFraction: zz,
          Qi: this.createLerpMode(iz),
          pre: Ez,
          post: nz
        }
      }
      createLerpMode(zz) {
        return null === zz ? Ez.j.Linear : Hz.LERP_MODE_SCHEMA_MAPPING[zz]
      }
    }

    function Oz(zz) {
      return Number.isFinite(zz.timeFraction) && pz(zz.pre) && pz(zz.post)
    }

    function pz(zz) {
      return Number.isFinite(zz[0]) && Number.isFinite(zz[1]) && Number.isFinite(zz[2])
    }

    function dz(zz, uz, bz, Ez, nz, iz, lz, Mz) {
      const tz = iz - uz,
        Hz = iz - Ez,
        Oz = Mz - Ez,
        pz = [null, null, null];
      for (let dz = 0; dz < pz.length; dz++) pz[dz] = Fz(zz[dz], bz[dz], nz[dz], lz[dz], tz, Oz);
      return {
        Wi: Hz,
        ji: pz
      }
    }

    function Fz(zz, uz, bz, Ez, iz, lz) {
      return {
        Bi: nz.d.computeShortestRotation(zz, bz) / iz,
        Ci: nz.d.computeShortestRotation(uz, Ez) / lz,
        delta: nz.d.computeShortestRotation(uz, bz)
      }
    }

    function Zz(zz, uz, bz, Ez, nz, iz, lz, Mz) {
      const tz = iz - uz,
        Hz = iz - Ez,
        Oz = Mz - Ez,
        pz = [null, null, null];
      for (let dz = 0; dz < pz.length; dz++) pz[dz] = {
        Bi: (nz[dz] - zz[dz]) / tz,
        Ci: (lz[dz] - bz[dz]) / Oz,
        delta: nz[dz] - bz[dz]
      };
      return {
        Wi: Hz,
        ji: pz
      }
    }

    function Rz(zz, uz) {
      return null === uz ? zz : uz(zz)
    }

    function Kz(zz) {
      const [uz, bz, Ez] = zz, lz = -(0, iz.j)(uz), Mz = -(0, iz.j)(bz), tz = (0, iz.j)(Ez), Hz = nz.d.quaternionFromEulerZYX(lz, Mz, tz);
      return nz.d.eulerYXZFromQuaternion(Hz)
    }
    Hz.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ez.j.Linear,
      catmullrom: Ez.j.CatmullRomSpline
    };
    const wz = 1 / 16;

    function Xz(zz) {
      return [-zz[0] * wz, zz[1] * wz, zz[2] * wz]
    }

    function fz(zz) {
      const [uz, bz, Ez] = zz;
      return [uz >= 0 ? Math.PI - uz : -Math.PI - uz, sz(bz + Math.PI), sz(Ez + Math.PI)]
    }

    function sz(zz) {
      return nz.d.mod(zz + Math.PI, 2 * Math.PI) - Math.PI
    }

    function rz(zz, uz) {
      return Math.abs(nz.d.computeShortestRotation(zz[0], uz[0])) + Math.abs(nz.d.computeShortestRotation(zz[1], uz[1])) + Math.abs(nz.d.computeShortestRotation(zz[2], uz[2]))
    }
    const oz = new tz
  },
  36577: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      g: () => iz,
      j: () => Ez,
      m: () => nz
    });
    let Ez = function(zz) {
        return zz[zz.Linear = 0] = "Linear", zz[zz.CatmullRomSpline = 1] = "CatmullRomSpline", zz
      }({}),
      nz = function(zz) {
        return zz[zz.NoLoop = 0] = "NoLoop", zz[zz.LoopOnLastFrame = 1] = "LoopOnLastFrame", zz[zz.HoldOnLastFrame = 2] = "HoldOnLastFrame", zz
      }({}),
      iz = function(zz) {
        return zz[zz.Movement = 0] = "Movement", zz[zz.Action = 1] = "Action", zz[zz.Emote = 2] = "Emote", zz[zz.Custom = 3] = "Custom", zz
      }({}),
      lz = function(zz) {
        return zz[zz.Start = 0] = "Start", zz[zz.Stop = 1] = "Stop", zz
      }({})
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);