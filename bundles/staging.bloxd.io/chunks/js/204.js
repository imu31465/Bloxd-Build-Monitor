export const id = 204;
export const ids = [204];
export const modules = {
  40254: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      MobPreview: () => hJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(40259),
      AJ = ZJ(35860),
      qJ = ZJ(40265),
      jJ = ZJ(990);

    function YJ(JJ) {
      return AJ.d.openMob(JJ)
    }
    const hJ = (0, FJ.memo)((function(JJ) {
      let {
        mobType: cJ,
        variation: ZJ = null,
        animation: UJ = qJ.g,
        className: AJ
      } = JJ;
      const hJ = (0, FJ.useRef)(null),
        DJ = (0, FJ.useMemo)((() => ({
          mobType: cJ,
          variation: ZJ,
          animation: UJ
        })), [cJ, ZJ, UJ]);
      return (0, XJ.e)(hJ, YJ, DJ), (0, jJ.jsx)("div", {
        className: eJ()("MobPreview", AJ),
        ref: hJ
      })
    }))
  },
  40259: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(2383);

    function eJ(JJ, cJ, ZJ) {
      const eJ = (0, FJ.useRef)(null),
        {
          width: XJ,
          height: AJ
        } = (0, UJ.d)(JJ);
      (0, FJ.useEffect)((() => {
        const ZJ = cJ(JJ.current);
        return eJ.current = ZJ, () => {
          ZJ.close(), eJ.current = null
        }
      }), [JJ, cJ]), (0, FJ.useEffect)((() => {
        XJ <= 0 || AJ <= 0 || eJ.current.resize(XJ, AJ)
      }), [XJ, AJ]), (0, FJ.useEffect)((() => {
        eJ.current.show(ZJ)
      }), [ZJ])
    }
  },
  40265: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => DJ,
      d: () => hJ,
      g: () => qJ
    });
    var FJ = ZJ(36562),
      UJ = ZJ(37623);

    function eJ(JJ, cJ) {
      let [ZJ, FJ, UJ] = JJ;
      return [0, .5, 1].map((JJ => ({
        timeFraction: JJ,
        rotation: {
          Hc: "catmull-rom-spline",
          point: [ZJ, FJ, UJ + (.5 === JJ ? cJ : 0)]
        }
      })))
    }

    function XJ(JJ, cJ, ZJ) {
      return {
        Ic: 3200,
        loop: !0,
        bc: {
          Root: {
            timeline: [0, .5, 1].map((JJ => ({
              timeFraction: JJ,
              position: {
                Hc: "catmull-rom-spline",
                point: [0, .5 === JJ ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((JJ => ({
              timeFraction: JJ,
              rotation: {
                Hc: "catmull-rom-spline",
                point: [0, .25 === JJ ? .12 : .75 === JJ ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: eJ(JJ, ZJ)
          },
          ArmRightMesh: {
            timeline: eJ(cJ, -ZJ)
          }
        }
      }
    }
    const AJ = XJ([0, 0, 0], [0, 0, 0], .07),
      qJ = (0, UJ.b)((0, FJ.g)(AJ), "mobIdle"),
      jJ = XJ([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      YJ = XJ([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      hJ = (0, UJ.b)((0, FJ.g)(jJ), "gunReady"),
      DJ = (0, UJ.b)((0, FJ.g)(YJ), "gunAimed")
  },
  35868: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      g: () => qJ
    });
    const FJ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      UJ = {
        player: FJ,
        store: {
          ...FJ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function eJ(JJ, cJ) {
      JJ instanceof Promise ? JJ.then(cJ).catch((JJ => {
        console.error("Couldn't open the preview", JJ)
      })) : cJ(JJ)
    }
    class XJ {
      constructor(JJ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, eJ(JJ, (JJ => {
          this.closed ? JJ.close() : (this.opened = JJ, null !== this.size && JJ.resize(this.size.width, this.size.height), null !== this.view && JJ.show(this.view))
        }))
      }
      show(JJ) {
        var cJ;
        this.view = JJ, null === (cJ = this.opened) || void 0 === cJ || cJ.show(JJ)
      }
      resize(JJ, cJ) {
        var ZJ;
        this.size = {
          width: JJ,
          height: cJ
        }, null === (ZJ = this.opened) || void 0 === ZJ || ZJ.resize(JJ, cJ)
      }
      close() {
        var JJ;
        this.closed = !0, null === (JJ = this.opened) || void 0 === JJ || JJ.close(), this.opened = null
      }
    }
    class AJ {
      constructor(JJ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(JJ).then((JJ => JJ.ready)), eJ(JJ, (JJ => {
          this.closed ? JJ.close() : (this.opened = JJ, null !== this.size && JJ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.opened) || void 0 === cJ ? void 0 : cJ.isReady()) && void 0 !== JJ && JJ
      }
      setCosmetic(JJ, cJ) {
        var ZJ;
        null === (ZJ = this.opened) || void 0 === ZJ || ZJ.setCosmetic(JJ, cJ)
      }
      playEmote(JJ) {
        var cJ;
        null === (cJ = this.opened) || void 0 === cJ || cJ.playEmote(JJ)
      }
      resetCamera() {
        var JJ;
        null === (JJ = this.opened) || void 0 === JJ || JJ.resetCamera()
      }
      async untilDrawn(JJ) {
        var cJ;
        await this.ready, await (null === (cJ = this.opened) || void 0 === cJ ? void 0 : cJ.untilDrawn(JJ))
      }
      resize(JJ, cJ) {
        var ZJ;
        this.size = {
          width: JJ,
          height: cJ
        }, null === (ZJ = this.opened) || void 0 === ZJ || ZJ.resize(JJ, cJ)
      }
      close() {
        var JJ;
        this.closed = !0, null === (JJ = this.opened) || void 0 === JJ || JJ.close(), this.opened = null
      }
    }
    const qJ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(JJ) {
        this.host = JJ
      }
      setDefaultHost(JJ) {
        this.makeDefault = JJ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(JJ) {
        return new XJ(this.current().openMob(JJ))
      }
      openPet(JJ) {
        return new XJ(this.current().openPet(JJ))
      }
      openMobLineup(JJ) {
        return new XJ(this.current().openMobLineup(JJ))
      }
      openCharacter(JJ, cJ) {
        return new AJ(this.current().openCharacter(JJ, cJ))
      }
    }
  },
  35860: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ.g
    });
    var FJ = ZJ(35868);
    class UJ {
      constructor(JJ) {
        this.load = JJ, this.loaded = null, this.loading = null
      }
      run(JJ) {
        return null !== this.loaded ? JJ(this.loaded) : (this.loading ??= this.load().then((JJ => (this.loaded = JJ, JJ)), (JJ => {
          throw this.loading = null, JJ
        })), this.loading.then(JJ))
      }
    }
    class eJ {
      constructor() {
        this.mobScene = new UJ((() => Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(67), ZJ.e(66), ZJ.e(232), ZJ.e(65), ZJ.e(242), ZJ.e(236), ZJ.e(241), ZJ.e(239), ZJ.e(231), ZJ.e(206), ZJ.e(271), ZJ.e(211), ZJ.e(225), ZJ.e(237), ZJ.e(240), ZJ.e(126), ZJ.e(185), ZJ.e(207), ZJ.e(222), ZJ.e(205), ZJ.e(106), ZJ.e(68), ZJ.e(272), ZJ.e(146)]).then((() => ZJ(39946))))), this.characterScene = new UJ((() => Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(67), ZJ.e(66), ZJ.e(232), ZJ.e(65), ZJ.e(242), ZJ.e(236), ZJ.e(241), ZJ.e(239), ZJ.e(231), ZJ.e(206), ZJ.e(271), ZJ.e(211), ZJ.e(225), ZJ.e(237), ZJ.e(240), ZJ.e(126), ZJ.e(185), ZJ.e(207), ZJ.e(222), ZJ.e(205), ZJ.e(106), ZJ.e(68), ZJ.e(272), ZJ.e(145)]).then((() => ZJ(40040)))))
      }
      openMob(JJ) {
        return this.mobScene.run((cJ => cJ.openMobPreview(JJ)))
      }
      openPet(JJ) {
        return this.mobScene.run((cJ => cJ.openPetPreview(JJ)))
      }
      openMobLineup(JJ) {
        return this.mobScene.run((cJ => cJ.openMobLineupPreview(JJ)))
      }
      openCharacter(JJ, cJ) {
        return this.characterScene.run((ZJ => ZJ.openCharacterPreview(JJ, cJ)))
      }
    }
    FJ.g.setDefaultHost((() => new eJ))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);