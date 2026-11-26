export const id = 225;
export const ids = [225];
export const modules = {
  44429: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(62),
      YV = xV(3080);

    function UV(VV, eV, xV) {
      const UV = (0, JV.useRef)(null),
        {
          width: yV,
          height: pV
        } = (0, YV.d)(VV);
      (0, JV.useEffect)((() => {
        const xV = eV(VV.current);
        return UV.current = xV, () => {
          xV.close(), UV.current = null
        }
      }), [VV, eV]), (0, JV.useEffect)((() => {
        yV <= 0 || pV <= 0 || UV.current.resize(yV, pV)
      }), [yV, pV]), (0, JV.useEffect)((() => {
        UV.current.show(xV)
      }), [xV])
    }
  },
  44438: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => vV,
      g: () => ZV,
      h: () => QV
    });
    var JV = xV(38340),
      YV = xV(39828);

    function UV(VV, eV) {
      let [xV, JV, YV] = VV;
      return [0, .5, 1].map((VV => ({
        timeFraction: VV,
        rotation: {
          zY: "catmull-rom-spline",
          point: [xV, JV, YV + (.5 === VV ? eV : 0)]
        }
      })))
    }

    function yV(VV, eV, xV) {
      return {
        PY: 3200,
        loop: !0,
        NY: {
          Root: {
            timeline: [0, .5, 1].map((VV => ({
              timeFraction: VV,
              position: {
                zY: "catmull-rom-spline",
                point: [0, .5 === VV ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((VV => ({
              timeFraction: VV,
              rotation: {
                zY: "catmull-rom-spline",
                point: [0, .25 === VV ? .12 : .75 === VV ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: UV(VV, xV)
          },
          ArmRightMesh: {
            timeline: UV(eV, -xV)
          }
        }
      }
    }
    const pV = yV([0, 0, 0], [0, 0, 0], .07),
      QV = (0, YV.b)((0, JV.e)(pV), "mobIdle"),
      nV = yV([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      wV = yV([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      ZV = (0, YV.b)((0, JV.e)(nV), "gunReady"),
      vV = (0, YV.b)((0, JV.e)(wV), "gunAimed")
  },
  39828: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      c: () => UV
    });
    const JV = new WeakMap;

    function YV(VV, eV) {
      return JV.set(VV, eV), VV
    }

    function UV(VV) {
      var eV;
      return null !== (eV = JV.get(VV)) && void 0 !== eV ? eV : null
    }
  },
  35343: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      c: () => YV,
      g: () => wV
    });
    var JV = xV(1656);

    function YV(VV) {
      var eV;
      return {
        ...yV.store,
        yaw: yV.store.yaw + (null !== (eV = JV.c[VV].previewYaw) && void 0 !== eV ? eV : 0)
      }
    }
    const UV = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yV = {
        player: UV,
        store: {
          ...UV,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pV(VV, eV) {
      VV instanceof Promise ? VV.then(eV).catch((VV => {
        console.error("Couldn't open the preview", VV)
      })) : eV(VV)
    }
    class QV {
      constructor(VV) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pV(VV, (VV => {
          this.closed ? VV.close() : (this.opened = VV, null !== this.size && VV.resize(this.size.width, this.size.height), null !== this.view && VV.show(this.view))
        }))
      }
      show(VV) {
        var eV;
        this.view = VV, null === (eV = this.opened) || void 0 === eV || eV.show(VV)
      }
      resize(VV, eV) {
        var xV;
        this.size = {
          width: VV,
          height: eV
        }, null === (xV = this.opened) || void 0 === xV || xV.resize(VV, eV)
      }
      close() {
        var VV;
        this.closed = !0, null === (VV = this.opened) || void 0 === VV || VV.close(), this.opened = null
      }
    }
    class nV {
      constructor(VV) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(VV).then((VV => VV.ready)), pV(VV, (VV => {
          this.closed ? VV.close() : (this.opened = VV, null !== this.size && VV.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var VV, eV;
        return null !== (VV = null === (eV = this.opened) || void 0 === eV ? void 0 : eV.isReady()) && void 0 !== VV && VV
      }
      setCosmetic(VV, eV) {
        var xV;
        null === (xV = this.opened) || void 0 === xV || xV.setCosmetic(VV, eV)
      }
      playEmote(VV) {
        var eV;
        null === (eV = this.opened) || void 0 === eV || eV.playEmote(VV)
      }
      setOrbit(VV) {
        var eV;
        null === (eV = this.opened) || void 0 === eV || eV.setOrbit(VV)
      }
      resetCamera() {
        var VV;
        null === (VV = this.opened) || void 0 === VV || VV.resetCamera()
      }
      async untilDrawn(VV) {
        var eV;
        await this.ready, await (null === (eV = this.opened) || void 0 === eV ? void 0 : eV.untilDrawn(VV))
      }
      resize(VV, eV) {
        var xV;
        this.size = {
          width: VV,
          height: eV
        }, null === (xV = this.opened) || void 0 === xV || xV.resize(VV, eV)
      }
      close() {
        var VV;
        this.closed = !0, null === (VV = this.opened) || void 0 === VV || VV.close(), this.opened = null
      }
    }
    const wV = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(VV) {
        this.host = VV
      }
      setDefaultHost(VV) {
        this.makeDefault = VV
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(VV) {
        return new QV(this.current().openMob(VV))
      }
      openPet(VV) {
        return new QV(this.current().openPet(VV))
      }
      openMobLineup(VV) {
        return new QV(this.current().openMobLineup(VV))
      }
      openCharacter(VV, eV) {
        return new nV(this.current().openCharacter(VV, eV))
      }
    }
  },
  35337: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV.b,
      f: () => JV.c,
      h: () => JV.g
    });
    var JV = xV(35343);
    class YV {
      constructor(VV) {
        this.load = VV, this.loaded = null, this.loading = null
      }
      run(VV) {
        return null !== this.loaded ? VV(this.loaded) : (this.loading ??= this.load().then((VV => (this.loaded = VV, VV)), (VV => {
          throw this.loading = null, VV
        })), this.loading.then(VV))
      }
    }
    class UV {
      constructor() {
        this.mobScene = new YV((() => Promise.all([xV.e(84), xV.e(255), xV.e(254), xV.e(279), xV.e(111), xV.e(280), xV.e(87), xV.e(277), xV.e(85), xV.e(86), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(302), xV.e(251), xV.e(269), xV.e(282), xV.e(285), xV.e(89), xV.e(202), xV.e(245), xV.e(109), xV.e(257), xV.e(248), xV.e(264), xV.e(223), xV.e(265), xV.e(88), xV.e(271)]).then((() => xV(42411))))), this.characterScene = new YV((() => Promise.all([xV.e(84), xV.e(255), xV.e(254), xV.e(279), xV.e(111), xV.e(280), xV.e(87), xV.e(277), xV.e(85), xV.e(86), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(302), xV.e(251), xV.e(269), xV.e(282), xV.e(285), xV.e(89), xV.e(202), xV.e(245), xV.e(109), xV.e(257), xV.e(248), xV.e(264), xV.e(223), xV.e(265), xV.e(88), xV.e(270)]).then((() => xV(42518)))))
      }
      openMob(VV) {
        return this.mobScene.run((eV => eV.openMobPreview(VV)))
      }
      openPet(VV) {
        return this.mobScene.run((eV => eV.openPetPreview(VV)))
      }
      openMobLineup(VV) {
        return this.mobScene.run((eV => eV.openMobLineupPreview(VV)))
      }
      openCharacter(VV, eV) {
        return this.characterScene.run((xV => xV.openCharacterPreview(VV, eV)))
      }
    }
    JV.g.setDefaultHost((() => new UV))
  },
  44648: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      FrontlineMvpLineup: () => ZV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(35337),
      pV = xV(44438),
      QV = xV(44429),
      nV = xV(1321);

    function wV(VV) {
      return yV.h.openMobLineup(VV)
    }
    const ZV = (0, JV.memo)((function(VV) {
      let {
        players: eV,
        className: xV
      } = VV;
      const YV = (0, JV.useRef)(null),
        yV = (0, JV.useMemo)((() => eV.map((VV => {
          let {
            cosmetics: eV,
            size: xV,
            heldGun: JV
          } = VV;
          return {
            cosmetics: eV,
            size: xV,
            JA: JV.name,
            animation: JV.aimed ? pV.d : pV.g
          }
        }))), [eV]),
        ZV = function(VV) {
          const [eV, xV] = (0, JV.useState)([]);
          return (0, JV.useEffect)((() => {
            xV(VV.map((() => !1)));
            const eV = VV.map(((VV, eV) => {
              let {
                showAfterMs: JV
              } = VV;
              return window.setTimeout((() => {
                xV((VV => VV.map(((VV, xV) => VV || xV === eV))))
              }), JV)
            }));
            return () => {
              for (const VV of eV) window.clearTimeout(VV)
            }
          }), [VV]), eV
        }(eV),
        vV = (0, JV.useMemo)((() => ({
          figures: yV,
          shown: ZV
        })), [yV, ZV]);
      return (0, QV.c)(YV, wV, vV), (0, nV.jsx)("div", {
        className: UV()("MobPreview", xV),
        ref: YV
      })
    }))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);