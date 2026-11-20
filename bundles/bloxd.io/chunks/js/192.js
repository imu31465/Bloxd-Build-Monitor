export const id = 192;
export const ids = [192];
export const modules = {
  40902: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      MobPreview: () => GU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(40909),
      TU = gU(9027),
      qU = gU(40913),
      KU = gU(1090);

    function cU(UU) {
      return TU.g.openMob(UU)
    }
    const GU = (0, tU.memo)((function(UU) {
      let {
        mobType: RU,
        variation: gU = null,
        animation: pU = qU.h,
        className: TU
      } = UU;
      const GU = (0, tU.useRef)(null),
        jU = (0, tU.useMemo)((() => ({
          mobType: RU,
          variation: gU,
          animation: pU
        })), [RU, gU, pU]);
      return (0, PU.c)(GU, cU, jU), (0, KU.jsx)("div", {
        className: EU()("MobPreview", TU),
        ref: GU
      })
    }))
  },
  40909: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(56),
      pU = gU(2533);

    function EU(UU, RU, gU) {
      const EU = (0, tU.useRef)(null),
        {
          width: PU,
          height: TU
        } = (0, pU.d)(UU);
      (0, tU.useEffect)((() => {
        const gU = RU(UU.current);
        return EU.current = gU, () => {
          gU.close(), EU.current = null
        }
      }), [UU, RU]), (0, tU.useEffect)((() => {
        PU <= 0 || TU <= 0 || EU.current.resize(PU, TU)
      }), [PU, TU]), (0, tU.useEffect)((() => {
        EU.current.show(gU)
      }), [gU])
    }
  },
  40913: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => jU,
      f: () => GU,
      h: () => qU
    });
    var tU = gU(36664),
      pU = gU(38186);

    function EU(UU, RU) {
      let [gU, tU, pU] = UU;
      return [0, .5, 1].map((UU => ({
        timeFraction: UU,
        rotation: {
          nE: "catmull-rom-spline",
          point: [gU, tU, pU + (.5 === UU ? RU : 0)]
        }
      })))
    }

    function PU(UU, RU, gU) {
      return {
        xE: 3200,
        loop: !0,
        IE: {
          Root: {
            timeline: [0, .5, 1].map((UU => ({
              timeFraction: UU,
              position: {
                nE: "catmull-rom-spline",
                point: [0, .5 === UU ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((UU => ({
              timeFraction: UU,
              rotation: {
                nE: "catmull-rom-spline",
                point: [0, .25 === UU ? .12 : .75 === UU ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: EU(UU, gU)
          },
          ArmRightMesh: {
            timeline: EU(RU, -gU)
          }
        }
      }
    }
    const TU = PU([0, 0, 0], [0, 0, 0], .07),
      qU = (0, pU.d)((0, tU.f)(TU), "mobIdle"),
      KU = PU([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      cU = PU([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      GU = (0, pU.d)((0, tU.f)(KU), "gunReady"),
      jU = (0, pU.d)((0, tU.f)(cU), "gunAimed")
  },
  9030: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      h: () => pU,
      i: () => cU
    });
    var tU = gU(1517);

    function pU(UU) {
      var RU;
      return {
        ...PU.store,
        yaw: PU.store.yaw + (null !== (RU = tU.d[UU].previewYaw) && void 0 !== RU ? RU : 0)
      }
    }
    const EU = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      PU = {
        player: EU,
        store: {
          ...EU,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function TU(UU, RU) {
      UU instanceof Promise ? UU.then(RU).catch((UU => {
        console.error("Couldn't open the preview", UU)
      })) : RU(UU)
    }
    class qU {
      constructor(UU) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
        }))
      }
      show(UU) {
        var RU;
        this.view = UU, null === (RU = this.opened) || void 0 === RU || RU.show(UU)
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    class KU {
      constructor(UU) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(UU).then((UU => UU.ready)), TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var UU, RU;
        return null !== (UU = null === (RU = this.opened) || void 0 === RU ? void 0 : RU.isReady()) && void 0 !== UU && UU
      }
      setCosmetic(UU, RU) {
        var gU;
        null === (gU = this.opened) || void 0 === gU || gU.setCosmetic(UU, RU)
      }
      playEmote(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.playEmote(UU)
      }
      setOrbit(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.setOrbit(UU)
      }
      resetCamera() {
        var UU;
        null === (UU = this.opened) || void 0 === UU || UU.resetCamera()
      }
      async untilDrawn(UU) {
        var RU;
        await this.ready, await (null === (RU = this.opened) || void 0 === RU ? void 0 : RU.untilDrawn(UU))
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    const cU = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(UU) {
        this.host = UU
      }
      setDefaultHost(UU) {
        this.makeDefault = UU
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(UU) {
        return new qU(this.current().openMob(UU))
      }
      openPet(UU) {
        return new qU(this.current().openPet(UU))
      }
      openMobLineup(UU) {
        return new qU(this.current().openMobLineup(UU))
      }
      openCharacter(UU, RU) {
        return new KU(this.current().openCharacter(UU, RU))
      }
    }
  },
  9027: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU.e,
      f: () => tU.h,
      g: () => tU.i
    });
    var tU = gU(9030);
    class pU {
      constructor(UU) {
        this.load = UU, this.loaded = null, this.loading = null
      }
      run(UU) {
        return null !== this.loaded ? UU(this.loaded) : (this.loading ??= this.load().then((UU => (this.loaded = UU, UU)), (UU => {
          throw this.loading = null, UU
        })), this.loading.then(UU))
      }
    }
    class EU {
      constructor() {
        this.mobScene = new pU((() => Promise.all([gU.e(69), gU.e(226), gU.e(225), gU.e(244), gU.e(94), gU.e(245), gU.e(72), gU.e(71), gU.e(242), gU.e(70), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(218), gU.e(264), gU.e(222), gU.e(236), gU.e(247), gU.e(250), gU.e(74), gU.e(196), gU.e(215), gU.e(219), gU.e(93), gU.e(113), gU.e(234), gU.e(73), gU.e(112), gU.e(153)]).then((() => gU(40461))))), this.characterScene = new pU((() => Promise.all([gU.e(69), gU.e(226), gU.e(225), gU.e(244), gU.e(94), gU.e(245), gU.e(72), gU.e(71), gU.e(242), gU.e(70), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(218), gU.e(264), gU.e(222), gU.e(236), gU.e(247), gU.e(250), gU.e(74), gU.e(196), gU.e(215), gU.e(219), gU.e(93), gU.e(113), gU.e(234), gU.e(73), gU.e(112), gU.e(152)]).then((() => gU(40554)))))
      }
      openMob(UU) {
        return this.mobScene.run((RU => RU.openMobPreview(UU)))
      }
      openPet(UU) {
        return this.mobScene.run((RU => RU.openPetPreview(UU)))
      }
      openMobLineup(UU) {
        return this.mobScene.run((RU => RU.openMobLineupPreview(UU)))
      }
      openCharacter(UU, RU) {
        return this.characterScene.run((gU => gU.openCharacterPreview(UU, RU)))
      }
    }
    tU.i.setDefaultHost((() => new EU))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);