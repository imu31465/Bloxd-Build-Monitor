export const id = 213;
export const ids = [213];
export const modules = {
  40338: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      MobPreview: () => DT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(40345),
      XT = IT(35795),
      BT = IT(40352),
      FT = IT(1083);

    function ST(TT) {
      return XT.b.openMob(TT)
    }
    const DT = (0, iT.memo)((function(TT) {
      let {
        mobType: oT,
        variation: IT = null,
        animation: zT = BT.g,
        className: XT
      } = TT;
      const DT = (0, iT.useRef)(null),
        LT = (0, iT.useMemo)((() => ({
          mobType: oT,
          variation: IT,
          animation: zT
        })), [oT, IT, zT]);
      return (0, WT.c)(DT, ST, LT), (0, FT.jsx)("div", {
        className: kT()("MobPreview", XT),
        ref: DT
      })
    }))
  },
  40345: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(46),
      zT = IT(2451);

    function kT(TT, oT, IT) {
      const kT = (0, iT.useRef)(null),
        {
          width: WT,
          height: XT
        } = (0, zT.d)(TT);
      (0, iT.useEffect)((() => {
        const IT = oT(TT.current);
        return kT.current = IT, () => {
          IT.close(), kT.current = null
        }
      }), [TT, oT]), (0, iT.useEffect)((() => {
        WT <= 0 || XT <= 0 || kT.current.resize(WT, XT)
      }), [WT, XT]), (0, iT.useEffect)((() => {
        kT.current.show(IT)
      }), [IT])
    }
  },
  40352: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => LT,
      e: () => DT,
      g: () => BT
    });
    var iT = IT(36510),
      zT = IT(37629);

    function kT(TT, oT) {
      let [IT, iT, zT] = TT;
      return [0, .5, 1].map((TT => ({
        timeFraction: TT,
        rotation: {
          gz: "catmull-rom-spline",
          point: [IT, iT, zT + (.5 === TT ? oT : 0)]
        }
      })))
    }

    function WT(TT, oT, IT) {
      return {
        xz: 3200,
        loop: !0,
        Mz: {
          Root: {
            timeline: [0, .5, 1].map((TT => ({
              timeFraction: TT,
              position: {
                gz: "catmull-rom-spline",
                point: [0, .5 === TT ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((TT => ({
              timeFraction: TT,
              rotation: {
                gz: "catmull-rom-spline",
                point: [0, .25 === TT ? .12 : .75 === TT ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: kT(TT, IT)
          },
          ArmRightMesh: {
            timeline: kT(oT, -IT)
          }
        }
      }
    }
    const XT = WT([0, 0, 0], [0, 0, 0], .07),
      BT = (0, zT.e)((0, iT.e)(XT), "mobIdle"),
      FT = WT([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      ST = WT([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      DT = (0, zT.e)((0, iT.e)(FT), "gunReady"),
      LT = (0, zT.e)((0, iT.e)(ST), "gunAimed")
  },
  35801: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      f: () => BT
    });
    const iT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      zT = {
        player: iT,
        store: {
          ...iT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kT(TT, oT) {
      TT instanceof Promise ? TT.then(oT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : oT(TT)
    }
    class WT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var oT;
        this.view = TT, null === (oT = this.opened) || void 0 === oT || oT.show(TT)
      }
      resize(TT, oT) {
        var IT;
        this.size = {
          width: TT,
          height: oT
        }, null === (IT = this.opened) || void 0 === IT || IT.resize(TT, oT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class XT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), kT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, oT;
        return null !== (TT = null === (oT = this.opened) || void 0 === oT ? void 0 : oT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, oT) {
        var IT;
        null === (IT = this.opened) || void 0 === IT || IT.setCosmetic(TT, oT)
      }
      playEmote(TT) {
        var oT;
        null === (oT = this.opened) || void 0 === oT || oT.playEmote(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var oT;
        await this.ready, await (null === (oT = this.opened) || void 0 === oT ? void 0 : oT.untilDrawn(TT))
      }
      resize(TT, oT) {
        var IT;
        this.size = {
          width: TT,
          height: oT
        }, null === (IT = this.opened) || void 0 === IT || IT.resize(TT, oT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const BT = new class {
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
        return new WT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new WT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new WT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, oT) {
        return new XT(this.current().openCharacter(TT, oT))
      }
    }
  },
  35795: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT.f
    });
    var iT = IT(35801);
    class zT {
      constructor(TT) {
        this.load = TT, this.loaded = null, this.loading = null
      }
      run(TT) {
        return null !== this.loaded ? TT(this.loaded) : (this.loading ??= this.load().then((TT => (this.loaded = TT, TT)), (TT => {
          throw this.loading = null, TT
        })), this.loading.then(TT))
      }
    }
    class kT {
      constructor() {
        this.mobScene = new zT((() => Promise.all([IT.e(223), IT.e(222), IT.e(243), IT.e(244), IT.e(72), IT.e(71), IT.e(241), IT.e(70), IT.e(251), IT.e(245), IT.e(250), IT.e(248), IT.e(240), IT.e(214), IT.e(281), IT.e(219), IT.e(234), IT.e(246), IT.e(249), IT.e(74), IT.e(194), IT.e(215), IT.e(230), IT.e(114), IT.e(231), IT.e(73), IT.e(113), IT.e(282), IT.e(154)]).then((() => IT(39992))))), this.characterScene = new zT((() => Promise.all([IT.e(223), IT.e(222), IT.e(243), IT.e(244), IT.e(72), IT.e(71), IT.e(241), IT.e(70), IT.e(251), IT.e(245), IT.e(250), IT.e(248), IT.e(240), IT.e(214), IT.e(281), IT.e(219), IT.e(234), IT.e(246), IT.e(249), IT.e(74), IT.e(194), IT.e(215), IT.e(230), IT.e(114), IT.e(231), IT.e(73), IT.e(113), IT.e(282), IT.e(153)]).then((() => IT(40089)))))
      }
      openMob(TT) {
        return this.mobScene.run((oT => oT.openMobPreview(TT)))
      }
      openPet(TT) {
        return this.mobScene.run((oT => oT.openPetPreview(TT)))
      }
      openMobLineup(TT) {
        return this.mobScene.run((oT => oT.openMobLineupPreview(TT)))
      }
      openCharacter(TT, oT) {
        return this.characterScene.run((IT => IT.openCharacterPreview(TT, oT)))
      }
    }
    iT.f.setDefaultHost((() => new kT))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);