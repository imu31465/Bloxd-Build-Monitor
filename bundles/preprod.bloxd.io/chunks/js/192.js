export const id = 192;
export const ids = [192];
export const modules = {
  40739: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      MobPreview: () => pz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(40742),
      Mz = bz(9020),
      tz = bz(40744),
      Hz = bz(1089);

    function Oz(zz) {
      return Mz.j.openMob(zz)
    }
    const pz = (0, Ez.memo)((function(zz) {
      let {
        mobType: uz,
        variation: bz = null,
        animation: nz = tz.h,
        className: Mz
      } = zz;
      const pz = (0, Ez.useRef)(null),
        dz = (0, Ez.useMemo)((() => ({
          mobType: uz,
          variation: bz,
          animation: nz
        })), [uz, bz, nz]);
      return (0, lz.d)(pz, Oz, dz), (0, Hz.jsx)("div", {
        className: iz()("MobPreview", Mz),
        ref: pz
      })
    }))
  },
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
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);