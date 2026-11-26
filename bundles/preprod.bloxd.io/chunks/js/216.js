export const id = 216;
export const ids = [216];
export const modules = {
  44209: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU
    });
    var cU = zU(61),
      yU = zU(3021);

    function QU(UU, XU, zU) {
      const QU = (0, cU.useRef)(null),
        {
          width: AU,
          height: FU
        } = (0, yU.d)(UU);
      (0, cU.useEffect)((() => {
        const zU = XU(UU.current);
        return QU.current = zU, () => {
          zU.close(), QU.current = null
        }
      }), [UU, XU]), (0, cU.useEffect)((() => {
        AU <= 0 || FU <= 0 || QU.current.resize(AU, FU)
      }), [AU, FU]), (0, cU.useEffect)((() => {
        QU.current.show(zU)
      }), [zU])
    }
  },
  44212: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => NU,
      f: () => YU,
      j: () => oU
    });
    var cU = zU(37876),
      yU = zU(39453);

    function QU(UU, XU) {
      let [zU, cU, yU] = UU;
      return [0, .5, 1].map((UU => ({
        timeFraction: UU,
        rotation: {
          GX: "catmull-rom-spline",
          point: [zU, cU, yU + (.5 === UU ? XU : 0)]
        }
      })))
    }

    function AU(UU, XU, zU) {
      return {
        pX: 3200,
        loop: !0,
        tX: {
          Root: {
            timeline: [0, .5, 1].map((UU => ({
              timeFraction: UU,
              position: {
                GX: "catmull-rom-spline",
                point: [0, .5 === UU ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((UU => ({
              timeFraction: UU,
              rotation: {
                GX: "catmull-rom-spline",
                point: [0, .25 === UU ? .12 : .75 === UU ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: QU(UU, zU)
          },
          ArmRightMesh: {
            timeline: QU(XU, -zU)
          }
        }
      }
    }
    const FU = AU([0, 0, 0], [0, 0, 0], .07),
      oU = (0, yU.d)((0, cU.g)(FU), "mobIdle"),
      DU = AU([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      EU = AU([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      YU = (0, yU.d)((0, cU.g)(DU), "gunReady"),
      NU = (0, yU.d)((0, cU.g)(EU), "gunAimed")
  },
  39453: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU,
      g: () => QU
    });
    const cU = new WeakMap;

    function yU(UU, XU) {
      return cU.set(UU, XU), UU
    }

    function QU(UU) {
      var XU;
      return null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : null
    }
  },
  34904: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      h: () => yU,
      i: () => EU
    });
    var cU = zU(1613);

    function yU(UU) {
      var XU;
      return {
        ...AU.store,
        yaw: AU.store.yaw + (null !== (XU = cU.d[UU].previewYaw) && void 0 !== XU ? XU : 0)
      }
    }
    const QU = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      AU = {
        player: QU,
        store: {
          ...QU,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function FU(UU, XU) {
      UU instanceof Promise ? UU.then(XU).catch((UU => {
        console.error("Couldn't open the preview", UU)
      })) : XU(UU)
    }
    class oU {
      constructor(UU) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, FU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
        }))
      }
      show(UU) {
        var XU;
        this.view = UU, null === (XU = this.opened) || void 0 === XU || XU.show(UU)
      }
      resize(UU, XU) {
        var zU;
        this.size = {
          width: UU,
          height: XU
        }, null === (zU = this.opened) || void 0 === zU || zU.resize(UU, XU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    class DU {
      constructor(UU) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(UU).then((UU => UU.ready)), FU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var UU, XU;
        return null !== (UU = null === (XU = this.opened) || void 0 === XU ? void 0 : XU.isReady()) && void 0 !== UU && UU
      }
      setCosmetic(UU, XU) {
        var zU;
        null === (zU = this.opened) || void 0 === zU || zU.setCosmetic(UU, XU)
      }
      playEmote(UU) {
        var XU;
        null === (XU = this.opened) || void 0 === XU || XU.playEmote(UU)
      }
      setOrbit(UU) {
        var XU;
        null === (XU = this.opened) || void 0 === XU || XU.setOrbit(UU)
      }
      resetCamera() {
        var UU;
        null === (UU = this.opened) || void 0 === UU || UU.resetCamera()
      }
      async untilDrawn(UU) {
        var XU;
        await this.ready, await (null === (XU = this.opened) || void 0 === XU ? void 0 : XU.untilDrawn(UU))
      }
      resize(UU, XU) {
        var zU;
        this.size = {
          width: UU,
          height: XU
        }, null === (zU = this.opened) || void 0 === zU || zU.resize(UU, XU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    const EU = new class {
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
        return new oU(this.current().openMob(UU))
      }
      openPet(UU) {
        return new oU(this.current().openPet(UU))
      }
      openMobLineup(UU) {
        return new oU(this.current().openMobLineup(UU))
      }
      openCharacter(UU, XU) {
        return new DU(this.current().openCharacter(UU, XU))
      }
    }
  },
  34900: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU.e,
      d: () => cU.h,
      h: () => cU.i
    });
    var cU = zU(34904);
    class yU {
      constructor(UU) {
        this.load = UU, this.loaded = null, this.loading = null
      }
      run(UU) {
        return null !== this.loaded ? UU(this.loaded) : (this.loading ??= this.load().then((UU => (this.loaded = UU, UU)), (UU => {
          throw this.loading = null, UU
        })), this.loading.then(UU))
      }
    }
    class QU {
      constructor() {
        this.mobScene = new yU((() => Promise.all([zU.e(84), zU.e(251), zU.e(250), zU.e(277), zU.e(111), zU.e(278), zU.e(87), zU.e(275), zU.e(85), zU.e(86), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(299), zU.e(247), zU.e(265), zU.e(280), zU.e(283), zU.e(89), zU.e(241), zU.e(200), zU.e(109), zU.e(253), zU.e(244), zU.e(260), zU.e(214), zU.e(261), zU.e(88), zU.e(267)]).then((() => zU(42180))))), this.characterScene = new yU((() => Promise.all([zU.e(84), zU.e(251), zU.e(250), zU.e(277), zU.e(111), zU.e(278), zU.e(87), zU.e(275), zU.e(85), zU.e(86), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(299), zU.e(247), zU.e(265), zU.e(280), zU.e(283), zU.e(89), zU.e(241), zU.e(200), zU.e(109), zU.e(253), zU.e(244), zU.e(260), zU.e(214), zU.e(261), zU.e(88), zU.e(266)]).then((() => zU(42288)))))
      }
      openMob(UU) {
        return this.mobScene.run((XU => XU.openMobPreview(UU)))
      }
      openPet(UU) {
        return this.mobScene.run((XU => XU.openPetPreview(UU)))
      }
      openMobLineup(UU) {
        return this.mobScene.run((XU => XU.openMobLineupPreview(UU)))
      }
      openCharacter(UU, XU) {
        return this.characterScene.run((zU => zU.openCharacterPreview(UU, XU)))
      }
    }
    cU.i.setDefaultHost((() => new QU))
  },
  44450: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      FrontlineMvpLineup: () => YU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(34900),
      FU = zU(44212),
      oU = zU(44209),
      DU = zU(1305);

    function EU(UU) {
      return AU.h.openMobLineup(UU)
    }
    const YU = (0, cU.memo)((function(UU) {
      let {
        players: XU,
        className: zU
      } = UU;
      const yU = (0, cU.useRef)(null),
        AU = (0, cU.useMemo)((() => XU.map((UU => {
          let {
            cosmetics: XU,
            size: zU,
            heldGun: cU
          } = UU;
          return {
            cosmetics: XU,
            size: zU,
            jB: cU.name,
            animation: cU.aimed ? FU.c : FU.f
          }
        }))), [XU]),
        YU = function(UU) {
          const [XU, zU] = (0, cU.useState)([]);
          return (0, cU.useEffect)((() => {
            zU(UU.map((() => !1)));
            const XU = UU.map(((UU, XU) => {
              let {
                showAfterMs: cU
              } = UU;
              return window.setTimeout((() => {
                zU((UU => UU.map(((UU, zU) => UU || zU === XU))))
              }), cU)
            }));
            return () => {
              for (const UU of XU) window.clearTimeout(UU)
            }
          }), [UU]), XU
        }(XU),
        NU = (0, cU.useMemo)((() => ({
          figures: AU,
          shown: YU
        })), [AU, YU]);
      return (0, oU.b)(yU, EU, NU), (0, DU.jsx)("div", {
        className: QU()("MobPreview", zU),
        ref: yU
      })
    }))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);