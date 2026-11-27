export const id = 228;
export const ids = [228];
export const modules = {
  53305: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR
    });
    var yR = GR(66),
      tR = GR(3909);

    function uR(RR, JR, GR) {
      const uR = (0, yR.useRef)(null),
        {
          width: ZR,
          height: qR
        } = (0, tR.b)(RR);
      (0, yR.useEffect)((() => {
        const GR = JR(RR.current);
        return uR.current = GR, () => {
          GR.close(), uR.current = null
        }
      }), [RR, JR]), (0, yR.useEffect)((() => {
        ZR <= 0 || qR <= 0 || uR.current.resize(ZR, qR)
      }), [ZR, qR]), (0, yR.useEffect)((() => {
        uR.current.show(GR)
      }), [GR])
    }
  },
  53299: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => wR,
      e: () => KR,
      g: () => iR
    });
    var yR = GR(38275),
      tR = GR(39862);

    function uR(RR, JR) {
      let [GR, yR, tR] = RR;
      return [0, .5, 1].map((RR => ({
        timeFraction: RR,
        rotation: {
          CG: "catmull-rom-spline",
          point: [GR, yR, tR + (.5 === RR ? JR : 0)]
        }
      })))
    }

    function ZR(RR, JR, GR) {
      return {
        LG: 3200,
        loop: !0,
        UG: {
          Root: {
            timeline: [0, .5, 1].map((RR => ({
              timeFraction: RR,
              position: {
                CG: "catmull-rom-spline",
                point: [0, .5 === RR ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((RR => ({
              timeFraction: RR,
              rotation: {
                CG: "catmull-rom-spline",
                point: [0, .25 === RR ? .12 : .75 === RR ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: uR(RR, GR)
          },
          ArmRightMesh: {
            timeline: uR(JR, -GR)
          }
        }
      }
    }
    const qR = ZR([0, 0, 0], [0, 0, 0], .07),
      iR = (0, tR.c)((0, yR.h)(qR), "mobIdle"),
      fR = ZR([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      VR = ZR([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      KR = (0, tR.c)((0, yR.h)(fR), "gunReady"),
      wR = (0, tR.c)((0, yR.h)(VR), "gunAimed")
  },
  39862: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      f: () => uR
    });
    const yR = new WeakMap;

    function tR(RR, JR) {
      return yR.set(RR, JR), RR
    }

    function uR(RR) {
      var JR;
      return null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : null
    }
  },
  35195: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      i: () => tR,
      l: () => KR
    });
    var yR = GR(1718);

    function tR(RR) {
      var JR;
      return {
        ...qR.store,
        yaw: qR.store.yaw + (null !== (JR = yR.b[RR].previewYaw) && void 0 !== JR ? JR : 0)
      }
    }
    const uR = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      ZR = {
        ...uR,
        radius: 33,
        target: [0, 3.9, 0]
      },
      qR = {
        player: uR,
        store: ZR,
        showcase: {
          ...ZR,
          target: [0, 1.9, 0]
        }
      };

    function iR(RR, JR) {
      RR instanceof Promise ? RR.then(JR).catch((RR => {
        console.error("Couldn't open the preview", RR)
      })) : JR(RR)
    }
    class fR {
      constructor(RR) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height), null !== this.view && RR.show(this.view))
        }))
      }
      show(RR) {
        var JR;
        this.view = RR, null === (JR = this.opened) || void 0 === JR || JR.show(RR)
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    class VR {
      constructor(RR) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(RR).then((RR => RR.ready)), iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var RR, JR;
        return null !== (RR = null === (JR = this.opened) || void 0 === JR ? void 0 : JR.isReady()) && void 0 !== RR && RR
      }
      setCosmetic(RR, JR) {
        var GR;
        null === (GR = this.opened) || void 0 === GR || GR.setCosmetic(RR, JR)
      }
      setNametag(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setNametag(RR)
      }
      playEmote(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.playEmote(RR)
      }
      setOrbit(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setOrbit(RR)
      }
      resetCamera() {
        var RR;
        null === (RR = this.opened) || void 0 === RR || RR.resetCamera()
      }
      async untilDrawn(RR) {
        var JR;
        await this.ready, await (null === (JR = this.opened) || void 0 === JR ? void 0 : JR.untilDrawn(RR))
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    const KR = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(RR) {
        this.host = RR
      }
      setDefaultHost(RR) {
        this.makeDefault = RR
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(RR) {
        return new fR(this.current().openMob(RR))
      }
      openPet(RR) {
        return new fR(this.current().openPet(RR))
      }
      openMobLineup(RR) {
        return new fR(this.current().openMobLineup(RR))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(RR, JR) {
        return new VR(this.current().openCharacter(RR, JR))
      }
    }
  },
  35193: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR.e,
      e: () => yR.i,
      g: () => yR.l
    });
    var yR = GR(35195);
    class tR {
      constructor(RR) {
        this.load = RR, this.loaded = null, this.loading = null
      }
      run(RR) {
        return null !== this.loaded ? RR(this.loaded) : (this.loading ??= this.load().then((RR => (this.loaded = RR, RR)), (RR => {
          throw this.loading = null, RR
        })), this.loading.then(RR))
      }
    }
    class uR {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new tR((() => Promise.all([GR.e(85), GR.e(264), GR.e(263), GR.e(289), GR.e(113), GR.e(290), GR.e(89), GR.e(86), GR.e(287), GR.e(87), GR.e(88), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(311), GR.e(260), GR.e(278), GR.e(292), GR.e(295), GR.e(91), GR.e(252), GR.e(266), GR.e(112), GR.e(124), GR.e(257), GR.e(142), GR.e(90), GR.e(122), GR.e(310)]).then((() => GR(42616))))), this.characterScene = new tR((() => Promise.all([GR.e(85), GR.e(264), GR.e(263), GR.e(289), GR.e(113), GR.e(290), GR.e(89), GR.e(86), GR.e(287), GR.e(87), GR.e(88), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(311), GR.e(177), GR.e(260), GR.e(278), GR.e(292), GR.e(295), GR.e(91), GR.e(224), GR.e(252), GR.e(266), GR.e(112), GR.e(124), GR.e(257), GR.e(142), GR.e(90), GR.e(122), GR.e(279), GR.e(184)]).then((() => GR(42729)))))
      }
      openMob(RR) {
        return this.mobScene.run((JR => JR.openMobPreview(RR)))
      }
      openPet(RR) {
        return this.mobScene.run((JR => JR.openPetPreview(RR)))
      }
      openMobLineup(RR) {
        return this.mobScene.run((JR => JR.openMobLineupPreview(RR)))
      }
      openCharacter(RR, JR) {
        return this.characterScene.run((GR => GR.openCharacterPreview(RR, JR)))
      }
    }
    yR.l.setDefaultHost((() => new uR))
  },
  53785: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      FrontlineMvpLineup: () => KR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(35193),
      qR = GR(53299),
      iR = GR(53305),
      fR = GR(1378);

    function VR(RR) {
      return ZR.g.openMobLineup(RR)
    }
    const KR = (0, yR.memo)((function(RR) {
      let {
        players: JR,
        className: GR
      } = RR;
      const tR = (0, yR.useRef)(null),
        ZR = (0, yR.useMemo)((() => JR.map((RR => {
          let {
            cosmetics: JR,
            size: GR,
            heldGun: yR
          } = RR;
          return {
            cosmetics: JR,
            size: GR,
            gC: yR.name,
            animation: yR.aimed ? qR.b : qR.e
          }
        }))), [JR]),
        KR = function(RR) {
          const [JR, GR] = (0, yR.useState)([]);
          return (0, yR.useEffect)((() => {
            GR(RR.map((() => !1)));
            const JR = RR.map(((RR, JR) => {
              let {
                showAfterMs: yR
              } = RR;
              return window.setTimeout((() => {
                GR((RR => RR.map(((RR, GR) => RR || GR === JR))))
              }), yR)
            }));
            return () => {
              for (const RR of JR) window.clearTimeout(RR)
            }
          }), [RR]), JR
        }(JR),
        wR = (0, yR.useMemo)((() => ({
          figures: ZR,
          shown: KR
        })), [ZR, KR]);
      return (0, iR.d)(tR, VR, wR), (0, fR.jsx)("div", {
        className: uR()("MobPreview", GR),
        ref: tR
      })
    }))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);