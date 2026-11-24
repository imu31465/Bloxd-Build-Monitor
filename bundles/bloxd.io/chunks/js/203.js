export const id = 203;
export const ids = [203];
export const modules = {
  41655: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      MobPreview: () => lT
    });
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(41660),
      nT = mT(34311),
      HT = mT(41662),
      kT = mT(1188);

    function jT(TT) {
      return nT.g.openMob(TT)
    }
    const lT = (0, WT.memo)((function(TT) {
      let {
        mobType: UT,
        variation: mT = null,
        animation: zT = HT.g,
        className: nT
      } = TT;
      const lT = (0, WT.useRef)(null),
        LT = (0, WT.useMemo)((() => ({
          mobType: UT,
          variation: mT,
          animation: zT
        })), [UT, mT, zT]);
      return (0, gT.d)(lT, jT, LT), (0, kT.jsx)("div", {
        className: MT()("MobPreview", nT),
        ref: lT
      })
    }))
  },
  41660: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT
    });
    var WT = mT(63),
      zT = mT(2856);

    function MT(TT, UT, mT) {
      const MT = (0, WT.useRef)(null),
        {
          width: gT,
          height: nT
        } = (0, zT.b)(TT);
      (0, WT.useEffect)((() => {
        const mT = UT(TT.current);
        return MT.current = mT, () => {
          mT.close(), MT.current = null
        }
      }), [TT, UT]), (0, WT.useEffect)((() => {
        gT <= 0 || nT <= 0 || MT.current.resize(gT, nT)
      }), [gT, nT]), (0, WT.useEffect)((() => {
        MT.current.show(mT)
      }), [mT])
    }
  },
  41662: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT,
      f: () => lT,
      g: () => HT
    });
    var WT = mT(37266),
      zT = mT(38762);

    function MT(TT, UT) {
      let [mT, WT, zT] = TT;
      return [0, .5, 1].map((TT => ({
        timeFraction: TT,
        rotation: {
          oW: "catmull-rom-spline",
          point: [mT, WT, zT + (.5 === TT ? UT : 0)]
        }
      })))
    }

    function gT(TT, UT, mT) {
      return {
        GW: 3200,
        loop: !0,
        EW: {
          Root: {
            timeline: [0, .5, 1].map((TT => ({
              timeFraction: TT,
              position: {
                oW: "catmull-rom-spline",
                point: [0, .5 === TT ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((TT => ({
              timeFraction: TT,
              rotation: {
                oW: "catmull-rom-spline",
                point: [0, .25 === TT ? .12 : .75 === TT ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: MT(TT, mT)
          },
          ArmRightMesh: {
            timeline: MT(UT, -mT)
          }
        }
      }
    }
    const nT = gT([0, 0, 0], [0, 0, 0], .07),
      HT = (0, zT.c)((0, WT.f)(nT), "mobIdle"),
      kT = gT([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      jT = gT([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      lT = (0, zT.c)((0, WT.f)(kT), "gunReady"),
      LT = (0, zT.c)((0, WT.f)(jT), "gunAimed")
  },
  34315: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      e: () => zT,
      i: () => jT
    });
    var WT = mT(1688);

    function zT(TT) {
      var UT;
      return {
        ...gT.store,
        yaw: gT.store.yaw + (null !== (UT = WT.e[TT].previewYaw) && void 0 !== UT ? UT : 0)
      }
    }
    const MT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      gT = {
        player: MT,
        store: {
          ...MT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function nT(TT, UT) {
      TT instanceof Promise ? TT.then(UT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : UT(TT)
    }
    class HT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, nT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var UT;
        this.view = TT, null === (UT = this.opened) || void 0 === UT || UT.show(TT)
      }
      resize(TT, UT) {
        var mT;
        this.size = {
          width: TT,
          height: UT
        }, null === (mT = this.opened) || void 0 === mT || mT.resize(TT, UT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class kT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), nT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, UT;
        return null !== (TT = null === (UT = this.opened) || void 0 === UT ? void 0 : UT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, UT) {
        var mT;
        null === (mT = this.opened) || void 0 === mT || mT.setCosmetic(TT, UT)
      }
      playEmote(TT) {
        var UT;
        null === (UT = this.opened) || void 0 === UT || UT.playEmote(TT)
      }
      setOrbit(TT) {
        var UT;
        null === (UT = this.opened) || void 0 === UT || UT.setOrbit(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var UT;
        await this.ready, await (null === (UT = this.opened) || void 0 === UT ? void 0 : UT.untilDrawn(TT))
      }
      resize(TT, UT) {
        var mT;
        this.size = {
          width: TT,
          height: UT
        }, null === (mT = this.opened) || void 0 === mT || mT.resize(TT, UT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const jT = new class {
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
        return new HT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new HT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new HT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, UT) {
        return new kT(this.current().openCharacter(TT, UT))
      }
    }
  },
  34311: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT.d,
      d: () => WT.e,
      g: () => WT.i
    });
    var WT = mT(34315);
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
    class MT {
      constructor() {
        this.mobScene = new zT((() => Promise.all([mT.e(73), mT.e(237), mT.e(236), mT.e(258), mT.e(98), mT.e(259), mT.e(76), mT.e(75), mT.e(256), mT.e(74), mT.e(266), mT.e(260), mT.e(265), mT.e(263), mT.e(255), mT.e(279), mT.e(233), mT.e(249), mT.e(261), mT.e(264), mT.e(78), mT.e(188), mT.e(227), mT.e(97), mT.e(239), mT.e(230), mT.e(246), mT.e(121), mT.e(247), mT.e(77), mT.e(251)]).then((() => mT(41227))))), this.characterScene = new zT((() => Promise.all([mT.e(73), mT.e(237), mT.e(236), mT.e(258), mT.e(98), mT.e(259), mT.e(76), mT.e(75), mT.e(256), mT.e(74), mT.e(266), mT.e(260), mT.e(265), mT.e(263), mT.e(255), mT.e(279), mT.e(233), mT.e(249), mT.e(261), mT.e(264), mT.e(78), mT.e(188), mT.e(227), mT.e(97), mT.e(239), mT.e(230), mT.e(246), mT.e(121), mT.e(247), mT.e(77), mT.e(250)]).then((() => mT(41341)))))
      }
      openMob(TT) {
        return this.mobScene.run((UT => UT.openMobPreview(TT)))
      }
      openPet(TT) {
        return this.mobScene.run((UT => UT.openPetPreview(TT)))
      }
      openMobLineup(TT) {
        return this.mobScene.run((UT => UT.openMobLineupPreview(TT)))
      }
      openCharacter(TT, UT) {
        return this.characterScene.run((mT => mT.openCharacterPreview(TT, UT)))
      }
    }
    WT.i.setDefaultHost((() => new MT))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);