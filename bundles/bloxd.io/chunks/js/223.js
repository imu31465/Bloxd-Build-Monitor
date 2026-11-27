export const id = 223;
export const ids = [223];
export const modules = {
  44715: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      MobPreview: () => Re
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(44723),
      Ue = He(34919),
      Fe = He(44731),
      Je = He(1228);

    function oe(ee) {
      return Ue.i.openMob(ee)
    }
    const Re = (0, ye.memo)((function(ee) {
      let {
        mobType: ie,
        variation: He = null,
        animation: be = Fe.e,
        className: Ue
      } = ee;
      const Re = (0, ye.useRef)(null),
        ke = (0, ye.useMemo)((() => ({
          mobType: ie,
          variation: He,
          animation: be
        })), [ie, He, be]);
      return (0, Ke.b)(Re, oe, ke), (0, Je.jsx)("div", {
        className: Me()("MobPreview", Ue),
        ref: Re
      })
    }))
  },
  44723: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(59),
      be = He(2957);

    function Me(ee, ie, He) {
      const Me = (0, ye.useRef)(null),
        {
          width: Ke,
          height: Ue
        } = (0, be.e)(ee);
      (0, ye.useEffect)((() => {
        const He = ie(ee.current);
        return Me.current = He, () => {
          He.close(), Me.current = null
        }
      }), [ee, ie]), (0, ye.useEffect)((() => {
        Ke <= 0 || Ue <= 0 || Me.current.resize(Ke, Ue)
      }), [Ke, Ue]), (0, ye.useEffect)((() => {
        Me.current.show(He)
      }), [He])
    }
  },
  44731: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      d: () => Re,
      e: () => Fe
    });
    var ye = He(37971),
      be = He(39440);

    function Me(ee, ie) {
      let [He, ye, be] = ee;
      return [0, .5, 1].map((ee => ({
        timeFraction: ee,
        rotation: {
          PH: "catmull-rom-spline",
          point: [He, ye, be + (.5 === ee ? ie : 0)]
        }
      })))
    }

    function Ke(ee, ie, He) {
      return {
        WH: 3200,
        loop: !0,
        ZH: {
          Root: {
            timeline: [0, .5, 1].map((ee => ({
              timeFraction: ee,
              position: {
                PH: "catmull-rom-spline",
                point: [0, .5 === ee ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((ee => ({
              timeFraction: ee,
              rotation: {
                PH: "catmull-rom-spline",
                point: [0, .25 === ee ? .12 : .75 === ee ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Me(ee, He)
          },
          ArmRightMesh: {
            timeline: Me(ie, -He)
          }
        }
      }
    }
    const Ue = Ke([0, 0, 0], [0, 0, 0], .07),
      Fe = (0, be.c)((0, ye.e)(Ue), "mobIdle"),
      Je = Ke([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      oe = Ke([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Re = (0, be.c)((0, ye.e)(Je), "gunReady"),
      ke = (0, be.c)((0, ye.e)(oe), "gunAimed")
  },
  34927: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      d: () => be,
      h: () => oe
    });
    var ye = He(1557);

    function be(ee) {
      var ie;
      return {
        ...Ke.store,
        yaw: Ke.store.yaw + (null !== (ie = ye.b[ee].previewYaw) && void 0 !== ie ? ie : 0)
      }
    }
    const Me = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Ke = {
        player: Me,
        store: {
          ...Me,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ue(ee, ie) {
      ee instanceof Promise ? ee.then(ie).catch((ee => {
        console.error("Couldn't open the preview", ee)
      })) : ie(ee)
    }
    class Fe {
      constructor(ee) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ue(ee, (ee => {
          this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height), null !== this.view && ee.show(this.view))
        }))
      }
      show(ee) {
        var ie;
        this.view = ee, null === (ie = this.opened) || void 0 === ie || ie.show(ee)
      }
      resize(ee, ie) {
        var He;
        this.size = {
          width: ee,
          height: ie
        }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
      }
      close() {
        var ee;
        this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
      }
    }
    class Je {
      constructor(ee) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(ee).then((ee => ee.ready)), Ue(ee, (ee => {
          this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var ee, ie;
        return null !== (ee = null === (ie = this.opened) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
      }
      setCosmetic(ee, ie) {
        var He;
        null === (He = this.opened) || void 0 === He || He.setCosmetic(ee, ie)
      }
      playEmote(ee) {
        var ie;
        null === (ie = this.opened) || void 0 === ie || ie.playEmote(ee)
      }
      setOrbit(ee) {
        var ie;
        null === (ie = this.opened) || void 0 === ie || ie.setOrbit(ee)
      }
      resetCamera() {
        var ee;
        null === (ee = this.opened) || void 0 === ee || ee.resetCamera()
      }
      async untilDrawn(ee) {
        var ie;
        await this.ready, await (null === (ie = this.opened) || void 0 === ie ? void 0 : ie.untilDrawn(ee))
      }
      resize(ee, ie) {
        var He;
        this.size = {
          width: ee,
          height: ie
        }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
      }
      close() {
        var ee;
        this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
      }
    }
    const oe = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(ee) {
        this.host = ee
      }
      setDefaultHost(ee) {
        this.makeDefault = ee
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(ee) {
        return new Fe(this.current().openMob(ee))
      }
      openPet(ee) {
        return new Fe(this.current().openPet(ee))
      }
      openMobLineup(ee) {
        return new Fe(this.current().openMobLineup(ee))
      }
      openCharacter(ee, ie) {
        return new Je(this.current().openCharacter(ee, ie))
      }
    }
  },
  34919: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye.b,
      f: () => ye.d,
      i: () => ye.h
    });
    var ye = He(34927);
    class be {
      constructor(ee) {
        this.load = ee, this.loaded = null, this.loading = null
      }
      run(ee) {
        return null !== this.loaded ? ee(this.loaded) : (this.loading ??= this.load().then((ee => (this.loaded = ee, ee)), (ee => {
          throw this.loading = null, ee
        })), this.loading.then(ee))
      }
    }
    class Me {
      constructor() {
        this.mobScene = new be((() => Promise.all([He.e(84), He.e(259), He.e(258), He.e(283), He.e(111), He.e(284), He.e(87), He.e(281), He.e(85), He.e(86), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(303), He.e(255), He.e(272), He.e(286), He.e(289), He.e(89), He.e(249), He.e(204), He.e(109), He.e(261), He.e(252), He.e(268), He.e(219), He.e(269), He.e(88), He.e(273)]).then((() => He(42155))))), this.characterScene = new be((() => Promise.all([He.e(84), He.e(259), He.e(258), He.e(283), He.e(111), He.e(284), He.e(87), He.e(281), He.e(85), He.e(86), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(303), He.e(255), He.e(272), He.e(286), He.e(289), He.e(89), He.e(249), He.e(204), He.e(109), He.e(261), He.e(252), He.e(268), He.e(219), He.e(269), He.e(88), He.e(218)]).then((() => He(42256)))))
      }
      openMob(ee) {
        return this.mobScene.run((ie => ie.openMobPreview(ee)))
      }
      openPet(ee) {
        return this.mobScene.run((ie => ie.openPetPreview(ee)))
      }
      openMobLineup(ee) {
        return this.mobScene.run((ie => ie.openMobLineupPreview(ee)))
      }
      openCharacter(ee, ie) {
        return this.characterScene.run((He => He.openCharacterPreview(ee, ie)))
      }
    }
    ye.h.setDefaultHost((() => new Me))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);