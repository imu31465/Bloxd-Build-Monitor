export const id = 225;
export const ids = [225];
export const modules = {
  44184: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(44),
      SM = iM(3047);

    function jM(MM, rM, iM) {
      const jM = (0, OM.useRef)(null),
        {
          width: aM,
          height: PM
        } = (0, SM.d)(MM);
      (0, OM.useEffect)((() => {
        const iM = rM(MM.current);
        return jM.current = iM, () => {
          iM.close(), jM.current = null
        }
      }), [MM, rM]), (0, OM.useEffect)((() => {
        aM <= 0 || PM <= 0 || jM.current.resize(aM, PM)
      }), [aM, PM]), (0, OM.useEffect)((() => {
        jM.current.show(iM)
      }), [iM])
    }
  },
  44187: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => mM,
      c: () => LM,
      d: () => nM
    });
    var OM = iM(38111),
      SM = iM(39673);

    function jM(MM, rM) {
      let [iM, OM, SM] = MM;
      return [0, .5, 1].map((MM => ({
        timeFraction: MM,
        rotation: {
          bS: "catmull-rom-spline",
          point: [iM, OM, SM + (.5 === MM ? rM : 0)]
        }
      })))
    }

    function aM(MM, rM, iM) {
      return {
        yS: 3200,
        loop: !0,
        GS: {
          Root: {
            timeline: [0, .5, 1].map((MM => ({
              timeFraction: MM,
              position: {
                bS: "catmull-rom-spline",
                point: [0, .5 === MM ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((MM => ({
              timeFraction: MM,
              rotation: {
                bS: "catmull-rom-spline",
                point: [0, .25 === MM ? .12 : .75 === MM ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: jM(MM, iM)
          },
          ArmRightMesh: {
            timeline: jM(rM, -iM)
          }
        }
      }
    }
    const PM = aM([0, 0, 0], [0, 0, 0], .07),
      nM = (0, SM.d)((0, OM.f)(PM), "mobIdle"),
      QM = aM([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      zM = aM([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      LM = (0, SM.d)((0, OM.f)(QM), "gunReady"),
      mM = (0, SM.d)((0, OM.f)(zM), "gunAimed")
  },
  39673: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      g: () => jM
    });
    const OM = new WeakMap;

    function SM(MM, rM) {
      return OM.set(MM, rM), MM
    }

    function jM(MM) {
      var rM;
      return null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : null
    }
  },
  35055: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      e: () => SM,
      i: () => zM
    });
    var OM = iM(1645);

    function SM(MM) {
      var rM;
      return {
        ...aM.store,
        yaw: aM.store.yaw + (null !== (rM = OM.d[MM].previewYaw) && void 0 !== rM ? rM : 0)
      }
    }
    const jM = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      aM = {
        player: jM,
        store: {
          ...jM,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function PM(MM, rM) {
      MM instanceof Promise ? MM.then(rM).catch((MM => {
        console.error("Couldn't open the preview", MM)
      })) : rM(MM)
    }
    class nM {
      constructor(MM) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, PM(MM, (MM => {
          this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height), null !== this.view && MM.show(this.view))
        }))
      }
      show(MM) {
        var rM;
        this.view = MM, null === (rM = this.opened) || void 0 === rM || rM.show(MM)
      }
      resize(MM, rM) {
        var iM;
        this.size = {
          width: MM,
          height: rM
        }, null === (iM = this.opened) || void 0 === iM || iM.resize(MM, rM)
      }
      close() {
        var MM;
        this.closed = !0, null === (MM = this.opened) || void 0 === MM || MM.close(), this.opened = null
      }
    }
    class QM {
      constructor(MM) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(MM).then((MM => MM.ready)), PM(MM, (MM => {
          this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var MM, rM;
        return null !== (MM = null === (rM = this.opened) || void 0 === rM ? void 0 : rM.isReady()) && void 0 !== MM && MM
      }
      setCosmetic(MM, rM) {
        var iM;
        null === (iM = this.opened) || void 0 === iM || iM.setCosmetic(MM, rM)
      }
      playEmote(MM) {
        var rM;
        null === (rM = this.opened) || void 0 === rM || rM.playEmote(MM)
      }
      setOrbit(MM) {
        var rM;
        null === (rM = this.opened) || void 0 === rM || rM.setOrbit(MM)
      }
      resetCamera() {
        var MM;
        null === (MM = this.opened) || void 0 === MM || MM.resetCamera()
      }
      async untilDrawn(MM) {
        var rM;
        await this.ready, await (null === (rM = this.opened) || void 0 === rM ? void 0 : rM.untilDrawn(MM))
      }
      resize(MM, rM) {
        var iM;
        this.size = {
          width: MM,
          height: rM
        }, null === (iM = this.opened) || void 0 === iM || iM.resize(MM, rM)
      }
      close() {
        var MM;
        this.closed = !0, null === (MM = this.opened) || void 0 === MM || MM.close(), this.opened = null
      }
    }
    const zM = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(MM) {
        this.host = MM
      }
      setDefaultHost(MM) {
        this.makeDefault = MM
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(MM) {
        return new nM(this.current().openMob(MM))
      }
      openPet(MM) {
        return new nM(this.current().openPet(MM))
      }
      openMobLineup(MM) {
        return new nM(this.current().openMobLineup(MM))
      }
      openCharacter(MM, rM) {
        return new QM(this.current().openCharacter(MM, rM))
      }
    }
  },
  35051: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM.d,
      h: () => OM.e,
      l: () => OM.i
    });
    var OM = iM(35055);
    class SM {
      constructor(MM) {
        this.load = MM, this.loaded = null, this.loading = null
      }
      run(MM) {
        return null !== this.loaded ? MM(this.loaded) : (this.loading ??= this.load().then((MM => (this.loaded = MM, MM)), (MM => {
          throw this.loading = null, MM
        })), this.loading.then(MM))
      }
    }
    class jM {
      constructor() {
        this.mobScene = new SM((() => Promise.all([iM.e(84), iM.e(255), iM.e(254), iM.e(279), iM.e(111), iM.e(280), iM.e(87), iM.e(277), iM.e(85), iM.e(86), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(302), iM.e(251), iM.e(269), iM.e(282), iM.e(285), iM.e(89), iM.e(202), iM.e(245), iM.e(109), iM.e(257), iM.e(248), iM.e(264), iM.e(223), iM.e(265), iM.e(88), iM.e(271)]).then((() => iM(42188))))), this.characterScene = new SM((() => Promise.all([iM.e(84), iM.e(255), iM.e(254), iM.e(279), iM.e(111), iM.e(280), iM.e(87), iM.e(277), iM.e(85), iM.e(86), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(302), iM.e(251), iM.e(269), iM.e(282), iM.e(285), iM.e(89), iM.e(202), iM.e(245), iM.e(109), iM.e(257), iM.e(248), iM.e(264), iM.e(223), iM.e(265), iM.e(88), iM.e(270)]).then((() => iM(42285)))))
      }
      openMob(MM) {
        return this.mobScene.run((rM => rM.openMobPreview(MM)))
      }
      openPet(MM) {
        return this.mobScene.run((rM => rM.openPetPreview(MM)))
      }
      openMobLineup(MM) {
        return this.mobScene.run((rM => rM.openMobLineupPreview(MM)))
      }
      openCharacter(MM, rM) {
        return this.characterScene.run((iM => iM.openCharacterPreview(MM, rM)))
      }
    }
    OM.i.setDefaultHost((() => new jM))
  },
  44401: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      FrontlineMvpLineup: () => LM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(35051),
      PM = iM(44187),
      nM = iM(44184),
      QM = iM(1303);

    function zM(MM) {
      return aM.l.openMobLineup(MM)
    }
    const LM = (0, OM.memo)((function(MM) {
      let {
        players: rM,
        className: iM
      } = MM;
      const SM = (0, OM.useRef)(null),
        aM = (0, OM.useMemo)((() => rM.map((MM => {
          let {
            cosmetics: rM,
            size: iM,
            heldGun: OM
          } = MM;
          return {
            cosmetics: rM,
            size: iM,
            QG: OM.name,
            animation: OM.aimed ? PM.b : PM.c
          }
        }))), [rM]),
        LM = function(MM) {
          const [rM, iM] = (0, OM.useState)([]);
          return (0, OM.useEffect)((() => {
            iM(MM.map((() => !1)));
            const rM = MM.map(((MM, rM) => {
              let {
                showAfterMs: OM
              } = MM;
              return window.setTimeout((() => {
                iM((MM => MM.map(((MM, iM) => MM || iM === rM))))
              }), OM)
            }));
            return () => {
              for (const MM of rM) window.clearTimeout(MM)
            }
          }), [MM]), rM
        }(rM),
        mM = (0, OM.useMemo)((() => ({
          figures: aM,
          shown: LM
        })), [aM, LM]);
      return (0, nM.e)(SM, zM, mM), (0, QM.jsx)("div", {
        className: jM()("MobPreview", iM),
        ref: SM
      })
    }))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);