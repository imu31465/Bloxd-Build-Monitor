export const id = 213;
export const ids = [213];
export const modules = {
  40578: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      MobPreview: () => uY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(40587),
      OY = DY(36228),
      gY = DY(40593),
      aY = DY(1125);

    function vY(YY) {
      return OY.b.openMob(YY)
    }
    const uY = (0, FY.memo)((function(YY) {
      let {
        mobType: rY,
        variation: DY = null,
        animation: AY = gY.j,
        className: OY
      } = YY;
      const uY = (0, FY.useRef)(null),
        sY = (0, FY.useMemo)((() => ({
          mobType: rY,
          variation: DY,
          animation: AY
        })), [rY, DY, AY]);
      return (0, RY.b)(uY, vY, sY), (0, aY.jsx)("div", {
        className: IY()("MobPreview", OY),
        ref: uY
      })
    }))
  },
  40587: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY
    });
    var FY = DY(61),
      AY = DY(2486);

    function IY(YY, rY, DY) {
      const IY = (0, FY.useRef)(null),
        {
          width: RY,
          height: OY
        } = (0, AY.d)(YY);
      (0, FY.useEffect)((() => {
        const DY = rY(YY.current);
        return IY.current = DY, () => {
          DY.close(), IY.current = null
        }
      }), [YY, rY]), (0, FY.useEffect)((() => {
        RY <= 0 || OY <= 0 || IY.current.resize(RY, OY)
      }), [RY, OY]), (0, FY.useEffect)((() => {
        IY.current.show(DY)
      }), [DY])
    }
  },
  40593: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      f: () => uY,
      j: () => gY
    });
    var FY = DY(36896),
      AY = DY(38003);

    function IY(YY, rY) {
      let [DY, FY, AY] = YY;
      return [0, .5, 1].map((YY => ({
        timeFraction: YY,
        rotation: {
          AA: "catmull-rom-spline",
          point: [DY, FY, AY + (.5 === YY ? rY : 0)]
        }
      })))
    }

    function RY(YY, rY, DY) {
      return {
        tF: 3200,
        loop: !0,
        rA: {
          Root: {
            timeline: [0, .5, 1].map((YY => ({
              timeFraction: YY,
              position: {
                AA: "catmull-rom-spline",
                point: [0, .5 === YY ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((YY => ({
              timeFraction: YY,
              rotation: {
                AA: "catmull-rom-spline",
                point: [0, .25 === YY ? .12 : .75 === YY ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: IY(YY, DY)
          },
          ArmRightMesh: {
            timeline: IY(rY, -DY)
          }
        }
      }
    }
    const OY = RY([0, 0, 0], [0, 0, 0], .07),
      gY = (0, AY.c)((0, FY.f)(OY), "mobIdle"),
      aY = RY([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      vY = RY([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      uY = (0, AY.c)((0, FY.f)(aY), "gunReady"),
      sY = (0, AY.c)((0, FY.f)(vY), "gunAimed")
  },
  36231: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      c: () => gY
    });
    const FY = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      AY = {
        player: FY,
        store: {
          ...FY,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function IY(YY, rY) {
      YY instanceof Promise ? YY.then(rY).catch((YY => {
        console.error("Couldn't open the preview", YY)
      })) : rY(YY)
    }
    class RY {
      constructor(YY) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, IY(YY, (YY => {
          this.closed ? YY.close() : (this.opened = YY, null !== this.size && YY.resize(this.size.width, this.size.height), null !== this.view && YY.show(this.view))
        }))
      }
      show(YY) {
        var rY;
        this.view = YY, null === (rY = this.opened) || void 0 === rY || rY.show(YY)
      }
      resize(YY, rY) {
        var DY;
        this.size = {
          width: YY,
          height: rY
        }, null === (DY = this.opened) || void 0 === DY || DY.resize(YY, rY)
      }
      close() {
        var YY;
        this.closed = !0, null === (YY = this.opened) || void 0 === YY || YY.close(), this.opened = null
      }
    }
    class OY {
      constructor(YY) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(YY).then((YY => YY.ready)), IY(YY, (YY => {
          this.closed ? YY.close() : (this.opened = YY, null !== this.size && YY.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var YY, rY;
        return null !== (YY = null === (rY = this.opened) || void 0 === rY ? void 0 : rY.isReady()) && void 0 !== YY && YY
      }
      setCosmetic(YY, rY) {
        var DY;
        null === (DY = this.opened) || void 0 === DY || DY.setCosmetic(YY, rY)
      }
      playEmote(YY) {
        var rY;
        null === (rY = this.opened) || void 0 === rY || rY.playEmote(YY)
      }
      resetCamera() {
        var YY;
        null === (YY = this.opened) || void 0 === YY || YY.resetCamera()
      }
      async untilDrawn(YY) {
        var rY;
        await this.ready, await (null === (rY = this.opened) || void 0 === rY ? void 0 : rY.untilDrawn(YY))
      }
      resize(YY, rY) {
        var DY;
        this.size = {
          width: YY,
          height: rY
        }, null === (DY = this.opened) || void 0 === DY || DY.resize(YY, rY)
      }
      close() {
        var YY;
        this.closed = !0, null === (YY = this.opened) || void 0 === YY || YY.close(), this.opened = null
      }
    }
    const gY = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(YY) {
        this.host = YY
      }
      setDefaultHost(YY) {
        this.makeDefault = YY
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(YY) {
        return new RY(this.current().openMob(YY))
      }
      openPet(YY) {
        return new RY(this.current().openPet(YY))
      }
      openMobLineup(YY) {
        return new RY(this.current().openMobLineup(YY))
      }
      openCharacter(YY, rY) {
        return new OY(this.current().openCharacter(YY, rY))
      }
    }
  },
  36228: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY.c
    });
    var FY = DY(36231);
    class AY {
      constructor(YY) {
        this.load = YY, this.loaded = null, this.loading = null
      }
      run(YY) {
        return null !== this.loaded ? YY(this.loaded) : (this.loading ??= this.load().then((YY => (this.loaded = YY, YY)), (YY => {
          throw this.loading = null, YY
        })), this.loading.then(YY))
      }
    }
    class IY {
      constructor() {
        this.mobScene = new AY((() => Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(72), DY.e(71), DY.e(241), DY.e(70), DY.e(251), DY.e(245), DY.e(250), DY.e(248), DY.e(240), DY.e(214), DY.e(281), DY.e(219), DY.e(234), DY.e(246), DY.e(249), DY.e(74), DY.e(194), DY.e(215), DY.e(230), DY.e(114), DY.e(231), DY.e(73), DY.e(113), DY.e(282), DY.e(154)]).then((() => DY(40289))))), this.characterScene = new AY((() => Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(72), DY.e(71), DY.e(241), DY.e(70), DY.e(251), DY.e(245), DY.e(250), DY.e(248), DY.e(240), DY.e(214), DY.e(281), DY.e(219), DY.e(234), DY.e(246), DY.e(249), DY.e(74), DY.e(194), DY.e(215), DY.e(230), DY.e(114), DY.e(231), DY.e(73), DY.e(113), DY.e(282), DY.e(153)]).then((() => DY(40376)))))
      }
      openMob(YY) {
        return this.mobScene.run((rY => rY.openMobPreview(YY)))
      }
      openPet(YY) {
        return this.mobScene.run((rY => rY.openPetPreview(YY)))
      }
      openMobLineup(YY) {
        return this.mobScene.run((rY => rY.openMobLineupPreview(YY)))
      }
      openCharacter(YY, rY) {
        return this.characterScene.run((DY => DY.openCharacterPreview(YY, rY)))
      }
    }
    FY.c.setDefaultHost((() => new IY))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);