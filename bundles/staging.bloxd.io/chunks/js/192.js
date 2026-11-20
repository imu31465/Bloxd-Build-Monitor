export const id = 192;
export const ids = [192];
export const modules = {
  40630: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      MobPreview: () => uz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(40633),
      oz = sz(8891),
      vz = sz(40636),
      Uz = sz(1087);

    function Kz(zz) {
      return oz.f.openMob(zz)
    }
    const uz = (0, Fz.memo)((function(zz) {
      let {
        mobType: tz,
        variation: sz = null,
        animation: Wz = vz.l,
        className: oz
      } = zz;
      const uz = (0, Fz.useRef)(null),
        Nz = (0, Fz.useMemo)((() => ({
          mobType: tz,
          variation: sz,
          animation: Wz
        })), [tz, sz, Wz]);
      return (0, Oz.b)(uz, Kz, Nz), (0, Uz.jsx)("div", {
        className: Xz()("MobPreview", oz),
        ref: uz
      })
    }))
  },
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
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);