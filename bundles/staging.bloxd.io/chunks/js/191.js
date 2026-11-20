export const id = 191;
export const ids = [191];
export const modules = {
  40633: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz
    });
    var Fz = sz(65),
      Wz = sz(2537);

    function Xz(zz, tz, sz) {
      const Xz = (0, Fz.useRef)(null),
        {
          width: Oz,
          height: oz
        } = (0, Wz.d)(zz);
      (0, Fz.useEffect)((() => {
        const sz = tz(zz.current);
        return Xz.current = sz, () => {
          sz.close(), Xz.current = null
        }
      }), [zz, tz]), (0, Fz.useEffect)((() => {
        Oz <= 0 || oz <= 0 || Xz.current.resize(Oz, oz)
      }), [Oz, oz]), (0, Fz.useEffect)((() => {
        Xz.current.show(sz)
      }), [sz])
    }
  },
  40636: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      h: () => uz,
      l: () => vz
    });
    var Fz = sz(36547),
      Wz = sz(38046);

    function Xz(zz, tz) {
      let [sz, Fz, Wz] = zz;
      return [0, .5, 1].map((zz => ({
        timeFraction: zz,
        rotation: {
          LX: "catmull-rom-spline",
          point: [sz, Fz, Wz + (.5 === zz ? tz : 0)]
        }
      })))
    }

    function Oz(zz, tz, sz) {
      return {
        dX: 3200,
        loop: !0,
        QX: {
          Root: {
            timeline: [0, .5, 1].map((zz => ({
              timeFraction: zz,
              position: {
                LX: "catmull-rom-spline",
                point: [0, .5 === zz ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((zz => ({
              timeFraction: zz,
              rotation: {
                LX: "catmull-rom-spline",
                point: [0, .25 === zz ? .12 : .75 === zz ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Xz(zz, sz)
          },
          ArmRightMesh: {
            timeline: Xz(tz, -sz)
          }
        }
      }
    }
    const oz = Oz([0, 0, 0], [0, 0, 0], .07),
      vz = (0, Wz.b)((0, Fz.f)(oz), "mobIdle"),
      Uz = Oz([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Kz = Oz([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      uz = (0, Wz.b)((0, Fz.f)(Uz), "gunReady"),
      Nz = (0, Wz.b)((0, Fz.f)(Kz), "gunAimed")
  },
  38046: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      c: () => Xz
    });
    const Fz = new WeakMap;

    function Wz(zz, tz) {
      return Fz.set(zz, tz), zz
    }

    function Xz(zz) {
      var tz;
      return null !== (tz = Fz.get(zz)) && void 0 !== tz ? tz : null
    }
  },
  8897: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      d: () => Wz,
      e: () => Kz
    });
    var Fz = sz(1521);

    function Wz(zz) {
      var tz;
      return {
        ...Oz.store,
        yaw: Oz.store.yaw + (null !== (tz = Fz.d[zz].previewYaw) && void 0 !== tz ? tz : 0)
      }
    }
    const Xz = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Oz = {
        player: Xz,
        store: {
          ...Xz,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function oz(zz, tz) {
      zz instanceof Promise ? zz.then(tz).catch((zz => {
        console.error("Couldn't open the preview", zz)
      })) : tz(zz)
    }
    class vz {
      constructor(zz) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, oz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height), null !== this.view && zz.show(this.view))
        }))
      }
      show(zz) {
        var tz;
        this.view = zz, null === (tz = this.opened) || void 0 === tz || tz.show(zz)
      }
      resize(zz, tz) {
        var sz;
        this.size = {
          width: zz,
          height: tz
        }, null === (sz = this.opened) || void 0 === sz || sz.resize(zz, tz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    class Uz {
      constructor(zz) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(zz).then((zz => zz.ready)), oz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var zz, tz;
        return null !== (zz = null === (tz = this.opened) || void 0 === tz ? void 0 : tz.isReady()) && void 0 !== zz && zz
      }
      setCosmetic(zz, tz) {
        var sz;
        null === (sz = this.opened) || void 0 === sz || sz.setCosmetic(zz, tz)
      }
      playEmote(zz) {
        var tz;
        null === (tz = this.opened) || void 0 === tz || tz.playEmote(zz)
      }
      setOrbit(zz) {
        var tz;
        null === (tz = this.opened) || void 0 === tz || tz.setOrbit(zz)
      }
      resetCamera() {
        var zz;
        null === (zz = this.opened) || void 0 === zz || zz.resetCamera()
      }
      async untilDrawn(zz) {
        var tz;
        await this.ready, await (null === (tz = this.opened) || void 0 === tz ? void 0 : tz.untilDrawn(zz))
      }
      resize(zz, tz) {
        var sz;
        this.size = {
          width: zz,
          height: tz
        }, null === (sz = this.opened) || void 0 === sz || sz.resize(zz, tz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    const Kz = new class {
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
        return new vz(this.current().openMob(zz))
      }
      openPet(zz) {
        return new vz(this.current().openPet(zz))
      }
      openMobLineup(zz) {
        return new vz(this.current().openMobLineup(zz))
      }
      openCharacter(zz, tz) {
        return new Uz(this.current().openCharacter(zz, tz))
      }
    }
  },
  8891: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.b,
      c: () => Fz.d,
      f: () => Fz.e
    });
    var Fz = sz(8897);
    class Wz {
      constructor(zz) {
        this.load = zz, this.loaded = null, this.loading = null
      }
      run(zz) {
        return null !== this.loaded ? zz(this.loaded) : (this.loading ??= this.load().then((zz => (this.loaded = zz, zz)), (zz => {
          throw this.loading = null, zz
        })), this.loading.then(zz))
      }
    }
    class Xz {
      constructor() {
        this.mobScene = new Wz((() => Promise.all([sz.e(69), sz.e(226), sz.e(225), sz.e(244), sz.e(94), sz.e(245), sz.e(72), sz.e(71), sz.e(242), sz.e(70), sz.e(252), sz.e(246), sz.e(251), sz.e(249), sz.e(241), sz.e(218), sz.e(264), sz.e(222), sz.e(236), sz.e(247), sz.e(250), sz.e(74), sz.e(196), sz.e(215), sz.e(219), sz.e(93), sz.e(113), sz.e(234), sz.e(73), sz.e(112), sz.e(153)]).then((() => sz(40173))))), this.characterScene = new Wz((() => Promise.all([sz.e(69), sz.e(226), sz.e(225), sz.e(244), sz.e(94), sz.e(245), sz.e(72), sz.e(71), sz.e(242), sz.e(70), sz.e(252), sz.e(246), sz.e(251), sz.e(249), sz.e(241), sz.e(218), sz.e(264), sz.e(222), sz.e(236), sz.e(247), sz.e(250), sz.e(74), sz.e(196), sz.e(215), sz.e(219), sz.e(93), sz.e(113), sz.e(234), sz.e(73), sz.e(112), sz.e(152)]).then((() => sz(40255)))))
      }
      openMob(zz) {
        return this.mobScene.run((tz => tz.openMobPreview(zz)))
      }
      openPet(zz) {
        return this.mobScene.run((tz => tz.openPetPreview(zz)))
      }
      openMobLineup(zz) {
        return this.mobScene.run((tz => tz.openMobLineupPreview(zz)))
      }
      openCharacter(zz, tz) {
        return this.characterScene.run((sz => sz.openCharacterPreview(zz, tz)))
      }
    }
    Fz.e.setDefaultHost((() => new Xz))
  },
  40861: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      FrontlineMvpLineup: () => uz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(8891),
      oz = sz(40636),
      vz = sz(40633),
      Uz = sz(1087);

    function Kz(zz) {
      return Oz.f.openMobLineup(zz)
    }
    const uz = (0, Fz.memo)((function(zz) {
      let {
        players: tz,
        className: sz
      } = zz;
      const Wz = (0, Fz.useRef)(null),
        Oz = (0, Fz.useMemo)((() => tz.map((zz => {
          let {
            cosmetics: tz,
            size: sz,
            heldGun: Fz
          } = zz;
          return {
            cosmetics: tz,
            size: sz,
            qY: Fz.name,
            animation: Fz.aimed ? oz.d : oz.h
          }
        }))), [tz]),
        uz = function(zz) {
          const [tz, sz] = (0, Fz.useState)([]);
          return (0, Fz.useEffect)((() => {
            sz(zz.map((() => !1)));
            const tz = zz.map(((zz, tz) => {
              let {
                showAfterMs: Fz
              } = zz;
              return window.setTimeout((() => {
                sz((zz => zz.map(((zz, sz) => zz || sz === tz))))
              }), Fz)
            }));
            return () => {
              for (const zz of tz) window.clearTimeout(zz)
            }
          }), [zz]), tz
        }(tz),
        Nz = (0, Fz.useMemo)((() => ({
          figures: Oz,
          shown: uz
        })), [Oz, uz]);
      return (0, vz.b)(Wz, Kz, Nz), (0, Uz.jsx)("div", {
        className: Xz()("MobPreview", sz),
        ref: Wz
      })
    }))
  },
  36547: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      f: () => Oz
    });
    var Fz = sz(36531),
      Wz = sz(321),
      Xz = sz(1824);

    function Oz(zz) {
      if ("dX" in zz) return xz.createAnimationScript(zz);
      return new Uz(zz).createAnimationScript()
    }

    function oz(zz, tz, sz, Wz) {
      const Xz = zz.dX <= 0 ? 1 : tz + sz * Math.max(0, Wz) / zz.dX;
      return zz.hX === Fz.g.LoopOnLastFrame ? Xz % 1 : zz.hX === Fz.g.NoLoop && Xz >= 1 ? null : Math.min(1, Xz)
    }
    class vz {
      createAnimationScript(zz) {
        const {
          dX: tz,
          loop: sz,
          QX: Fz
        } = zz;
        return {
          dX: Math.round(tz),
          hX: this.createLoopMode(null !== sz && void 0 !== sz && sz),
          QX: this.createNodeSkeletonAnimationScript(null !== Fz && void 0 !== Fz ? Fz : null)
        }
      }
      createLoopMode(zz) {
        switch (zz) {
          case !1:
            return Fz.g.NoLoop;
          case !0:
            return Fz.g.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Fz.g.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${zz}`)
      }
      createNodeSkeletonAnimationScript(zz) {
        if (null === zz) return null;
        const tz = {};
        for (const sz in zz) {
          const Fz = zz[sz];
          tz[sz] = this.createNodeAnimationScript(Fz)
        }
        return tz
      }
      createNodeAnimationScript(zz) {
        const {
          timeline: tz
        } = zz, sz = tz.filter((zz => Number.isFinite(zz.timeFraction)));
        return sz.sort(((zz, tz) => zz.timeFraction - tz.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(sz, "rotation", Nz),
          position: this.createTimelineFromKeyframes(sz, "position", wz)
        }
      }
      createTimelineFromKeyframes(zz, tz, sz) {
        const Fz = [];
        for (const vz of zz) {
          const zz = vz[tz];
          if (zz) {
            const tz = this.createAnimationFrameWithoutPrecomputes(vz.timeFraction, zz);
            Kz(tz) && Fz.push(tz)
          }
        }
        const Wz = [];
        for (let vz = 0; vz < Fz.length; vz++) {
          var Xz, Oz, oz;
          const zz = Fz[vz],
            tz = null !== (Xz = Fz[vz - 1]) && void 0 !== Xz ? Xz : zz,
            Uz = null !== (Oz = Fz[vz + 1]) && void 0 !== Oz ? Oz : zz,
            Kz = null !== (oz = Fz[vz + 2]) && void 0 !== oz ? oz : Uz;
          Wz.push({
            ...zz,
            ...sz(tz.post, tz.timeFraction, zz.post, zz.timeFraction, Uz.pre, Uz.timeFraction, Kz.pre, Kz.timeFraction)
          })
        }
        return Wz
      }
      createAnimationFrameWithoutPrecomputes(zz, tz) {
        let sz, Fz, Wz = null;
        var Xz;
        if ("object" === typeof tz && "point" in tz) Wz = null !== (Xz = tz.LX) && void 0 !== Xz ? Xz : null, sz = tz.point, Fz = tz.point;
        else if ("object" === typeof tz && "pre" in tz) {
          var Oz;
          Wz = null !== (Oz = tz.LX) && void 0 !== Oz ? Oz : null, sz = tz.pre, Fz = tz.post
        } else sz = tz, Fz = tz;
        return {
          timeFraction: zz,
          LX: this.createLerpMode(Wz),
          pre: sz,
          post: Fz
        }
      }
      createLerpMode(zz) {
        return null === zz ? Fz.f.Linear : vz.LERP_MODE_SCHEMA_MAPPING[zz]
      }
    }
    vz.LERP_MODE_SCHEMA_MAPPING = {
      linear: Fz.f.Linear,
      "catmull-rom-spline": Fz.f.CatmullRomSpline
    };
    class Uz {
      constructor(zz) {
        this.animationSchema = zz
      }
      createAnimationScript() {
        const {
          animation_length: zz,
          loop: tz,
          bones: sz
        } = this.animationSchema;
        return {
          dX: Math.round(1e3 * zz),
          hX: this.createLoopMode(null !== tz && void 0 !== tz && tz),
          QX: this.createNodeSkeletonAnimationScript(null !== sz && void 0 !== sz ? sz : null)
        }
      }
      createLoopMode(zz) {
        switch (zz) {
          case !1:
            return Fz.g.NoLoop;
          case !0:
            return Fz.g.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Fz.g.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${zz}`)
      }
      createNodeSkeletonAnimationScript(zz) {
        if (null === zz) return null;
        const tz = {};
        for (const sz in zz) {
          const Fz = zz[sz];
          tz[sz] = this.createNodeAnimationScript(Fz)
        }
        return tz
      }
      createNodeAnimationScript(zz) {
        const {
          rotation: tz,
          position: sz
        } = zz;
        return {
          rotation: this.createAnimationTimeline(null !== tz && void 0 !== tz ? tz : null, gz, Nz, !0),
          position: this.createAnimationTimeline(null !== sz && void 0 !== sz ? sz : null, Bz, wz, !1)
        }
      }
      createAnimationTimeline(zz, tz, sz, Fz) {
        if (null === zz) return [];
        if (Array.isArray(zz)) {
          zz = {
            "0.0": zz
          }
        }
        const Wz = Object.entries(zz).map((zz => {
          let [sz, Fz] = zz;
          const Wz = Number(sz) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Wz, Fz, tz)
        })).filter(Kz);
        Wz.sort(((zz, tz) => zz.timeFraction - tz.timeFraction)), Fz && function(zz) {
          for (let tz = 1; tz < zz.length; tz++) {
            const sz = zz[tz - 1].post,
              Fz = zz[tz],
              Wz = Pz(Fz.pre),
              Xz = Pz(Fz.post),
              Oz = Yz(sz, Fz.pre);
            Yz(sz, Wz) < Oz && (zz[tz] = {
              ...Fz,
              pre: Wz,
              post: Xz
            })
          }
        }(Wz);
        const Xz = [];
        for (let Uz = 0; Uz < Wz.length; Uz++) {
          var Oz, oz, vz;
          const zz = Wz[Uz],
            tz = null !== (Oz = Wz[Uz - 1]) && void 0 !== Oz ? Oz : zz,
            Fz = null !== (oz = Wz[Uz + 1]) && void 0 !== oz ? oz : zz,
            Kz = null !== (vz = Wz[Uz + 2]) && void 0 !== vz ? vz : Fz;
          Xz.push({
            ...zz,
            ...sz(tz.post, tz.timeFraction, zz.post, zz.timeFraction, Fz.pre, Fz.timeFraction, Kz.pre, Kz.timeFraction)
          })
        }
        return Xz
      }
      createAnimationFrameWithoutPrecomputes(zz, tz, sz) {
        let Fz, Wz, Xz = null;
        if ("object" === typeof tz && "post" in tz) {
          var Oz;
          Xz = null !== (Oz = tz.lerp_mode) && void 0 !== Oz ? Oz : null, Wz = Dz(tz.post, sz), Fz = tz.pre ? Dz(tz.pre, sz) : Wz
        } else {
          const zz = Dz(tz, sz);
          Wz = zz, Fz = zz
        }
        return {
          timeFraction: zz,
          LX: this.createLerpMode(Xz),
          pre: Fz,
          post: Wz
        }
      }
      createLerpMode(zz) {
        return null === zz ? Fz.f.Linear : Uz.LERP_MODE_SCHEMA_MAPPING[zz]
      }
    }

    function Kz(zz) {
      return Number.isFinite(zz.timeFraction) && uz(zz.pre) && uz(zz.post)
    }

    function uz(zz) {
      return Number.isFinite(zz[0]) && Number.isFinite(zz[1]) && Number.isFinite(zz[2])
    }

    function Nz(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
      const vz = Xz - tz,
        Uz = Xz - Fz,
        Kz = oz - Fz,
        uz = [null, null, null];
      for (let Nz = 0; Nz < uz.length; Nz++) uz[Nz] = bz(zz[Nz], sz[Nz], Wz[Nz], Oz[Nz], vz, Kz);
      return {
        lX: Uz,
        aX: uz
      }
    }

    function bz(zz, tz, sz, Fz, Xz, Oz) {
      return {
        SX: Wz.c.computeShortestRotation(zz, sz) / Xz,
        VX: Wz.c.computeShortestRotation(tz, Fz) / Oz,
        delta: Wz.c.computeShortestRotation(tz, sz)
      }
    }

    function wz(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
      const vz = Xz - tz,
        Uz = Xz - Fz,
        Kz = oz - Fz,
        uz = [null, null, null];
      for (let Nz = 0; Nz < uz.length; Nz++) uz[Nz] = {
        SX: (Wz[Nz] - zz[Nz]) / vz,
        VX: (Oz[Nz] - sz[Nz]) / Kz,
        delta: Wz[Nz] - sz[Nz]
      };
      return {
        lX: Uz,
        aX: uz
      }
    }

    function Dz(zz, tz) {
      return null === tz ? zz : tz(zz)
    }

    function gz(zz) {
      const [tz, sz, Fz] = zz, Oz = -(0, Xz.h)(tz), oz = -(0, Xz.h)(sz), vz = (0, Xz.h)(Fz), Uz = Wz.c.quaternionFromEulerZYX(Oz, oz, vz);
      return Wz.c.eulerYXZFromQuaternion(Uz)
    }
    Uz.LERP_MODE_SCHEMA_MAPPING = {
      linear: Fz.f.Linear,
      catmullrom: Fz.f.CatmullRomSpline
    };
    const Hz = 1 / 16;

    function Bz(zz) {
      return [-zz[0] * Hz, zz[1] * Hz, zz[2] * Hz]
    }

    function Pz(zz) {
      const [tz, sz, Fz] = zz;
      return [tz >= 0 ? Math.PI - tz : -Math.PI - tz, rz(sz + Math.PI), rz(Fz + Math.PI)]
    }

    function rz(zz) {
      return Wz.c.mod(zz + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Yz(zz, tz) {
      return Math.abs(Wz.c.computeShortestRotation(zz[0], tz[0])) + Math.abs(Wz.c.computeShortestRotation(zz[1], tz[1])) + Math.abs(Wz.c.computeShortestRotation(zz[2], tz[2]))
    }
    const xz = new vz
  },
  36531: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      c: () => Xz,
      f: () => Fz,
      g: () => Wz
    });
    let Fz = function(zz) {
        return zz[zz.Linear = 0] = "Linear", zz[zz.CatmullRomSpline = 1] = "CatmullRomSpline", zz
      }({}),
      Wz = function(zz) {
        return zz[zz.NoLoop = 0] = "NoLoop", zz[zz.LoopOnLastFrame = 1] = "LoopOnLastFrame", zz[zz.HoldOnLastFrame = 2] = "HoldOnLastFrame", zz
      }({}),
      Xz = function(zz) {
        return zz[zz.Movement = 0] = "Movement", zz[zz.Action = 1] = "Action", zz[zz.Emote = 2] = "Emote", zz[zz.Custom = 3] = "Custom", zz
      }({}),
      Oz = function(zz) {
        return zz[zz.Start = 0] = "Start", zz[zz.Stop = 1] = "Stop", zz
      }({})
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);