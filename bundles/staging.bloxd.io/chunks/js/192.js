export const id = 192;
export const ids = [192];
export const modules = {
  41098: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      MobPreview: () => ru
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(41103),
      Ju = yu(9098),
      Nu = yu(41110),
      Xu = yu(1079);

    function Vu(uu) {
      return Ju.g.openMob(uu)
    }
    const ru = (0, Eu.memo)((function(uu) {
      let {
        mobType: Ru,
        variation: yu = null,
        animation: Ku = Nu.k,
        className: Ju
      } = uu;
      const ru = (0, Eu.useRef)(null),
        Bu = (0, Eu.useMemo)((() => ({
          mobType: Ru,
          variation: yu,
          animation: Ku
        })), [Ru, yu, Ku]);
      return (0, mu.c)(ru, Vu, Bu), (0, Xu.jsx)("div", {
        className: Qu()("MobPreview", Ju),
        ref: ru
      })
    }))
  },
  41103: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(64),
      Ku = yu(2615);

    function Qu(uu, Ru, yu) {
      const Qu = (0, Eu.useRef)(null),
        {
          width: mu,
          height: Ju
        } = (0, Ku.d)(uu);
      (0, Eu.useEffect)((() => {
        const yu = Ru(uu.current);
        return Qu.current = yu, () => {
          yu.close(), Qu.current = null
        }
      }), [uu, Ru]), (0, Eu.useEffect)((() => {
        mu <= 0 || Ju <= 0 || Qu.current.resize(mu, Ju)
      }), [mu, Ju]), (0, Eu.useEffect)((() => {
        Qu.current.show(yu)
      }), [yu])
    }
  },
  41110: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Bu,
      g: () => ru,
      k: () => Nu
    });
    var Eu = yu(36889),
      Ku = yu(38401);

    function Qu(uu, Ru) {
      let [yu, Eu, Ku] = uu;
      return [0, .5, 1].map((uu => ({
        timeFraction: uu,
        rotation: {
          bQ: "catmull-rom-spline",
          point: [yu, Eu, Ku + (.5 === uu ? Ru : 0)]
        }
      })))
    }

    function mu(uu, Ru, yu) {
      return {
        TQ: 3200,
        loop: !0,
        jQ: {
          Root: {
            timeline: [0, .5, 1].map((uu => ({
              timeFraction: uu,
              position: {
                bQ: "catmull-rom-spline",
                point: [0, .5 === uu ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((uu => ({
              timeFraction: uu,
              rotation: {
                bQ: "catmull-rom-spline",
                point: [0, .25 === uu ? .12 : .75 === uu ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Qu(uu, yu)
          },
          ArmRightMesh: {
            timeline: Qu(Ru, -yu)
          }
        }
      }
    }
    const Ju = mu([0, 0, 0], [0, 0, 0], .07),
      Nu = (0, Ku.c)((0, Eu.e)(Ju), "mobIdle"),
      Xu = mu([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Vu = mu([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      ru = (0, Ku.c)((0, Eu.e)(Xu), "gunReady"),
      Bu = (0, Ku.c)((0, Eu.e)(Vu), "gunAimed")
  },
  9100: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      c: () => Ku,
      e: () => Vu
    });
    var Eu = yu(1517);

    function Ku(uu) {
      var Ru;
      return {
        ...mu.store,
        yaw: mu.store.yaw + (null !== (Ru = Eu.b[uu].previewYaw) && void 0 !== Ru ? Ru : 0)
      }
    }
    const Qu = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mu = {
        player: Qu,
        store: {
          ...Qu,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ju(uu, Ru) {
      uu instanceof Promise ? uu.then(Ru).catch((uu => {
        console.error("Couldn't open the preview", uu)
      })) : Ru(uu)
    }
    class Nu {
      constructor(uu) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height), null !== this.view && uu.show(this.view))
        }))
      }
      show(uu) {
        var Ru;
        this.view = uu, null === (Ru = this.opened) || void 0 === Ru || Ru.show(uu)
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    class Xu {
      constructor(uu) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(uu).then((uu => uu.ready)), Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.isReady()) && void 0 !== uu && uu
      }
      setCosmetic(uu, Ru) {
        var yu;
        null === (yu = this.opened) || void 0 === yu || yu.setCosmetic(uu, Ru)
      }
      playEmote(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.playEmote(uu)
      }
      setOrbit(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.setOrbit(uu)
      }
      resetCamera() {
        var uu;
        null === (uu = this.opened) || void 0 === uu || uu.resetCamera()
      }
      async untilDrawn(uu) {
        var Ru;
        await this.ready, await (null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.untilDrawn(uu))
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    const Vu = new class {
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
        return new Nu(this.current().openMob(uu))
      }
      openPet(uu) {
        return new Nu(this.current().openPet(uu))
      }
      openMobLineup(uu) {
        return new Nu(this.current().openMobLineup(uu))
      }
      openCharacter(uu, Ru) {
        return new Xu(this.current().openCharacter(uu, Ru))
      }
    }
  },
  9098: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.b,
      f: () => Eu.c,
      g: () => Eu.e
    });
    var Eu = yu(9100);
    class Ku {
      constructor(uu) {
        this.load = uu, this.loaded = null, this.loading = null
      }
      run(uu) {
        return null !== this.loaded ? uu(this.loaded) : (this.loading ??= this.load().then((uu => (this.loaded = uu, uu)), (uu => {
          throw this.loading = null, uu
        })), this.loading.then(uu))
      }
    }
    class Qu {
      constructor() {
        this.mobScene = new Ku((() => Promise.all([yu.e(69), yu.e(226), yu.e(225), yu.e(244), yu.e(94), yu.e(245), yu.e(72), yu.e(71), yu.e(242), yu.e(70), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(218), yu.e(264), yu.e(222), yu.e(236), yu.e(247), yu.e(250), yu.e(74), yu.e(196), yu.e(215), yu.e(219), yu.e(93), yu.e(113), yu.e(234), yu.e(73), yu.e(112), yu.e(153)]).then((() => yu(40647))))), this.characterScene = new Ku((() => Promise.all([yu.e(69), yu.e(226), yu.e(225), yu.e(244), yu.e(94), yu.e(245), yu.e(72), yu.e(71), yu.e(242), yu.e(70), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(218), yu.e(264), yu.e(222), yu.e(236), yu.e(247), yu.e(250), yu.e(74), yu.e(196), yu.e(215), yu.e(219), yu.e(93), yu.e(113), yu.e(234), yu.e(73), yu.e(112), yu.e(152)]).then((() => yu(40755)))))
      }
      openMob(uu) {
        return this.mobScene.run((Ru => Ru.openMobPreview(uu)))
      }
      openPet(uu) {
        return this.mobScene.run((Ru => Ru.openPetPreview(uu)))
      }
      openMobLineup(uu) {
        return this.mobScene.run((Ru => Ru.openMobLineupPreview(uu)))
      }
      openCharacter(uu, Ru) {
        return this.characterScene.run((yu => yu.openCharacterPreview(uu, Ru)))
      }
    }
    Eu.e.setDefaultHost((() => new Qu))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);