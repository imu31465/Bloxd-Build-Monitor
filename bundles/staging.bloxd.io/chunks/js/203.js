export const id = 203;
export const ids = [203];
export const modules = {
  41783: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      MobPreview: () => bu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(41785),
      lu = ju(34583),
      qu = ju(41787),
      fu = ju(1154);

    function Cu(uu) {
      return lu.k.openMob(uu)
    }
    const bu = (0, su.memo)((function(uu) {
      let {
        mobType: Eu,
        variation: ju = null,
        animation: Uu = qu.h,
        className: lu
      } = uu;
      const bu = (0, su.useRef)(null),
        cu = (0, su.useMemo)((() => ({
          mobType: Eu,
          variation: ju,
          animation: Uu
        })), [Eu, ju, Uu]);
      return (0, Xu.e)(bu, Cu, cu), (0, fu.jsx)("div", {
        className: Zu()("MobPreview", lu),
        ref: bu
      })
    }))
  },
  41785: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu
    });
    var su = ju(58),
      Uu = ju(2876);

    function Zu(uu, Eu, ju) {
      const Zu = (0, su.useRef)(null),
        {
          width: Xu,
          height: lu
        } = (0, Uu.d)(uu);
      (0, su.useEffect)((() => {
        const ju = Eu(uu.current);
        return Zu.current = ju, () => {
          ju.close(), Zu.current = null
        }
      }), [uu, Eu]), (0, su.useEffect)((() => {
        Xu <= 0 || lu <= 0 || Zu.current.resize(Xu, lu)
      }), [Xu, lu]), (0, su.useEffect)((() => {
        Zu.current.show(ju)
      }), [ju])
    }
  },
  41787: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => cu,
      f: () => bu,
      h: () => qu
    });
    var su = ju(37554),
      Uu = ju(38982);

    function Zu(uu, Eu) {
      let [ju, su, Uu] = uu;
      return [0, .5, 1].map((uu => ({
        timeFraction: uu,
        rotation: {
          fU: "catmull-rom-spline",
          point: [ju, su, Uu + (.5 === uu ? Eu : 0)]
        }
      })))
    }

    function Xu(uu, Eu, ju) {
      return {
        UU: 3200,
        loop: !0,
        XU: {
          Root: {
            timeline: [0, .5, 1].map((uu => ({
              timeFraction: uu,
              position: {
                fU: "catmull-rom-spline",
                point: [0, .5 === uu ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((uu => ({
              timeFraction: uu,
              rotation: {
                fU: "catmull-rom-spline",
                point: [0, .25 === uu ? .12 : .75 === uu ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Zu(uu, ju)
          },
          ArmRightMesh: {
            timeline: Zu(Eu, -ju)
          }
        }
      }
    }
    const lu = Xu([0, 0, 0], [0, 0, 0], .07),
      qu = (0, Uu.c)((0, su.d)(lu), "mobIdle"),
      fu = Xu([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Cu = Xu([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      bu = (0, Uu.c)((0, su.d)(fu), "gunReady"),
      cu = (0, Uu.c)((0, su.d)(Cu), "gunAimed")
  },
  34588: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => Uu,
      i: () => Cu
    });
    var su = ju(1614);

    function Uu(uu) {
      var Eu;
      return {
        ...Xu.store,
        yaw: Xu.store.yaw + (null !== (Eu = su.d[uu].previewYaw) && void 0 !== Eu ? Eu : 0)
      }
    }
    const Zu = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xu = {
        player: Zu,
        store: {
          ...Zu,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function lu(uu, Eu) {
      uu instanceof Promise ? uu.then(Eu).catch((uu => {
        console.error("Couldn't open the preview", uu)
      })) : Eu(uu)
    }
    class qu {
      constructor(uu) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lu(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height), null !== this.view && uu.show(this.view))
        }))
      }
      show(uu) {
        var Eu;
        this.view = uu, null === (Eu = this.opened) || void 0 === Eu || Eu.show(uu)
      }
      resize(uu, Eu) {
        var ju;
        this.size = {
          width: uu,
          height: Eu
        }, null === (ju = this.opened) || void 0 === ju || ju.resize(uu, Eu)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    class fu {
      constructor(uu) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(uu).then((uu => uu.ready)), lu(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.opened) || void 0 === Eu ? void 0 : Eu.isReady()) && void 0 !== uu && uu
      }
      setCosmetic(uu, Eu) {
        var ju;
        null === (ju = this.opened) || void 0 === ju || ju.setCosmetic(uu, Eu)
      }
      playEmote(uu) {
        var Eu;
        null === (Eu = this.opened) || void 0 === Eu || Eu.playEmote(uu)
      }
      setOrbit(uu) {
        var Eu;
        null === (Eu = this.opened) || void 0 === Eu || Eu.setOrbit(uu)
      }
      resetCamera() {
        var uu;
        null === (uu = this.opened) || void 0 === uu || uu.resetCamera()
      }
      async untilDrawn(uu) {
        var Eu;
        await this.ready, await (null === (Eu = this.opened) || void 0 === Eu ? void 0 : Eu.untilDrawn(uu))
      }
      resize(uu, Eu) {
        var ju;
        this.size = {
          width: uu,
          height: Eu
        }, null === (ju = this.opened) || void 0 === ju || ju.resize(uu, Eu)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    const Cu = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(uu) {
        this.host = uu
      }
      setDefaultHost(uu) {
        this.makeDefault = uu
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(uu) {
        return new qu(this.current().openMob(uu))
      }
      openPet(uu) {
        return new qu(this.current().openPet(uu))
      }
      openMobLineup(uu) {
        return new qu(this.current().openMobLineup(uu))
      }
      openCharacter(uu, Eu) {
        return new fu(this.current().openCharacter(uu, Eu))
      }
    }
  },
  34583: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su.b,
      g: () => su.e,
      k: () => su.i
    });
    var su = ju(34588);
    class Uu {
      constructor(uu) {
        this.load = uu, this.loaded = null, this.loading = null
      }
      run(uu) {
        return null !== this.loaded ? uu(this.loaded) : (this.loading ??= this.load().then((uu => (this.loaded = uu, uu)), (uu => {
          throw this.loading = null, uu
        })), this.loading.then(uu))
      }
    }
    class Zu {
      constructor() {
        this.mobScene = new Uu((() => Promise.all([ju.e(73), ju.e(237), ju.e(236), ju.e(258), ju.e(98), ju.e(259), ju.e(76), ju.e(75), ju.e(256), ju.e(74), ju.e(266), ju.e(260), ju.e(265), ju.e(263), ju.e(255), ju.e(279), ju.e(233), ju.e(249), ju.e(261), ju.e(264), ju.e(78), ju.e(188), ju.e(227), ju.e(97), ju.e(239), ju.e(230), ju.e(246), ju.e(121), ju.e(247), ju.e(77), ju.e(251)]).then((() => ju(41307))))), this.characterScene = new Uu((() => Promise.all([ju.e(73), ju.e(237), ju.e(236), ju.e(258), ju.e(98), ju.e(259), ju.e(76), ju.e(75), ju.e(256), ju.e(74), ju.e(266), ju.e(260), ju.e(265), ju.e(263), ju.e(255), ju.e(279), ju.e(233), ju.e(249), ju.e(261), ju.e(264), ju.e(78), ju.e(188), ju.e(227), ju.e(97), ju.e(239), ju.e(230), ju.e(246), ju.e(121), ju.e(247), ju.e(77), ju.e(250)]).then((() => ju(41402)))))
      }
      openMob(uu) {
        return this.mobScene.run((Eu => Eu.openMobPreview(uu)))
      }
      openPet(uu) {
        return this.mobScene.run((Eu => Eu.openPetPreview(uu)))
      }
      openMobLineup(uu) {
        return this.mobScene.run((Eu => Eu.openMobLineupPreview(uu)))
      }
      openCharacter(uu, Eu) {
        return this.characterScene.run((ju => ju.openCharacterPreview(uu, Eu)))
      }
    }
    su.i.setDefaultHost((() => new Zu))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);