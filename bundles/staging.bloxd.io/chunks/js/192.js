export const id = 192;
export const ids = [192];
export const modules = {
  41113: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      MobPreview: () => AT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(41120),
      yT = cT(9395),
      fT = cT(41128),
      xT = cT(1099);

    function IT(TT) {
      return yT.f.openMob(TT)
    }
    const AT = (0, lT.memo)((function(TT) {
      let {
        mobType: kT,
        variation: cT = null,
        animation: MT = fT.g,
        className: yT
      } = TT;
      const AT = (0, lT.useRef)(null),
        CT = (0, lT.useMemo)((() => ({
          mobType: kT,
          variation: cT,
          animation: MT
        })), [kT, cT, MT]);
      return (0, OT.d)(AT, IT, CT), (0, xT.jsx)("div", {
        className: KT()("MobPreview", yT),
        ref: AT
      })
    }))
  },
  41120: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(71),
      MT = cT(2770);

    function KT(TT, kT, cT) {
      const KT = (0, lT.useRef)(null),
        {
          width: OT,
          height: yT
        } = (0, MT.e)(TT);
      (0, lT.useEffect)((() => {
        const cT = kT(TT.current);
        return KT.current = cT, () => {
          cT.close(), KT.current = null
        }
      }), [TT, kT]), (0, lT.useEffect)((() => {
        OT <= 0 || yT <= 0 || KT.current.resize(OT, yT)
      }), [OT, yT]), (0, lT.useEffect)((() => {
        KT.current.show(cT)
      }), [cT])
    }
  },
  41128: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => CT,
      c: () => AT,
      g: () => fT
    });
    var lT = cT(36971),
      MT = cT(38478);

    function KT(TT, kT) {
      let [cT, lT, MT] = TT;
      return [0, .5, 1].map((TT => ({
        timeFraction: TT,
        rotation: {
          SM: "catmull-rom-spline",
          point: [cT, lT, MT + (.5 === TT ? kT : 0)]
        }
      })))
    }

    function OT(TT, kT, cT) {
      return {
        vM: 3200,
        loop: !0,
        hM: {
          Root: {
            timeline: [0, .5, 1].map((TT => ({
              timeFraction: TT,
              position: {
                SM: "catmull-rom-spline",
                point: [0, .5 === TT ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((TT => ({
              timeFraction: TT,
              rotation: {
                SM: "catmull-rom-spline",
                point: [0, .25 === TT ? .12 : .75 === TT ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: KT(TT, cT)
          },
          ArmRightMesh: {
            timeline: KT(kT, -cT)
          }
        }
      }
    }
    const yT = OT([0, 0, 0], [0, 0, 0], .07),
      fT = (0, MT.e)((0, lT.g)(yT), "mobIdle"),
      xT = OT([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      IT = OT([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      AT = (0, MT.e)((0, lT.g)(xT), "gunReady"),
      CT = (0, MT.e)((0, lT.g)(IT), "gunAimed")
  },
  9403: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      d: () => MT,
      f: () => IT
    });
    var lT = cT(1578);

    function MT(TT) {
      var kT;
      return {
        ...OT.store,
        yaw: OT.store.yaw + (null !== (kT = lT.c[TT].previewYaw) && void 0 !== kT ? kT : 0)
      }
    }
    const KT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      OT = {
        player: KT,
        store: {
          ...KT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function yT(TT, kT) {
      TT instanceof Promise ? TT.then(kT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : kT(TT)
    }
    class fT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var kT;
        this.view = TT, null === (kT = this.opened) || void 0 === kT || kT.show(TT)
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class xT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, kT;
        return null !== (TT = null === (kT = this.opened) || void 0 === kT ? void 0 : kT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, kT) {
        var cT;
        null === (cT = this.opened) || void 0 === cT || cT.setCosmetic(TT, kT)
      }
      playEmote(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.playEmote(TT)
      }
      setOrbit(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.setOrbit(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var kT;
        await this.ready, await (null === (kT = this.opened) || void 0 === kT ? void 0 : kT.untilDrawn(TT))
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const IT = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(TT) {
        this.host = TT
      }
      setDefaultHost(TT) {
        this.makeDefault = TT
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(TT) {
        return new fT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new fT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new fT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, kT) {
        return new xT(this.current().openCharacter(TT, kT))
      }
    }
  },
  9395: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.c,
      e: () => lT.d,
      f: () => lT.f
    });
    var lT = cT(9403);
    class MT {
      constructor(TT) {
        this.load = TT, this.loaded = null, this.loading = null
      }
      run(TT) {
        return null !== this.loaded ? TT(this.loaded) : (this.loading ??= this.load().then((TT => (this.loaded = TT, TT)), (TT => {
          throw this.loading = null, TT
        })), this.loading.then(TT))
      }
    }
    class KT {
      constructor() {
        this.mobScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT.e(75), cT.e(196), cT.e(216), cT.e(94), cT.e(220), cT.e(235), cT.e(113), cT.e(236), cT.e(74), cT.e(154)]).then((() => cT(40701))))), this.characterScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT.e(75), cT.e(196), cT.e(216), cT.e(94), cT.e(220), cT.e(235), cT.e(113), cT.e(236), cT.e(74), cT.e(153)]).then((() => cT(40795)))))
      }
      openMob(TT) {
        return this.mobScene.run((kT => kT.openMobPreview(TT)))
      }
      openPet(TT) {
        return this.mobScene.run((kT => kT.openPetPreview(TT)))
      }
      openMobLineup(TT) {
        return this.mobScene.run((kT => kT.openMobLineupPreview(TT)))
      }
      openCharacter(TT, kT) {
        return this.characterScene.run((cT => cT.openCharacterPreview(TT, kT)))
      }
    }
    lT.f.setDefaultHost((() => new KT))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);