export const id = 203;
export const ids = [203];
export const modules = {
  41550: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      MobPreview: () => hB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(41555),
      vB = ZB(34230),
      kB = ZB(41560),
      cB = ZB(1153);

    function nB(BB) {
      return vB.i.openMob(BB)
    }
    const hB = (0, TB.memo)((function(BB) {
      let {
        mobType: IB,
        variation: ZB = null,
        animation: JB = kB.h,
        className: vB
      } = BB;
      const hB = (0, TB.useRef)(null),
        zB = (0, TB.useMemo)((() => ({
          mobType: IB,
          variation: ZB,
          animation: JB
        })), [IB, ZB, JB]);
      return (0, GB.e)(hB, nB, zB), (0, cB.jsx)("div", {
        className: oB()("MobPreview", vB),
        ref: hB
      })
    }))
  },
  41555: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(63),
      JB = ZB(2896);

    function oB(BB, IB, ZB) {
      const oB = (0, TB.useRef)(null),
        {
          width: GB,
          height: vB
        } = (0, JB.e)(BB);
      (0, TB.useEffect)((() => {
        const ZB = IB(BB.current);
        return oB.current = ZB, () => {
          ZB.close(), oB.current = null
        }
      }), [BB, IB]), (0, TB.useEffect)((() => {
        GB <= 0 || vB <= 0 || oB.current.resize(GB, vB)
      }), [GB, vB]), (0, TB.useEffect)((() => {
        oB.current.show(ZB)
      }), [ZB])
    }
  },
  41560: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB,
      f: () => hB,
      h: () => kB
    });
    var TB = ZB(37194),
      JB = ZB(38677);

    function oB(BB, IB) {
      let [ZB, TB, JB] = BB;
      return [0, .5, 1].map((BB => ({
        timeFraction: BB,
        rotation: {
          ET: "catmull-rom-spline",
          point: [ZB, TB, JB + (.5 === BB ? IB : 0)]
        }
      })))
    }

    function GB(BB, IB, ZB) {
      return {
        lT: 3200,
        loop: !0,
        tT: {
          Root: {
            timeline: [0, .5, 1].map((BB => ({
              timeFraction: BB,
              position: {
                ET: "catmull-rom-spline",
                point: [0, .5 === BB ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((BB => ({
              timeFraction: BB,
              rotation: {
                ET: "catmull-rom-spline",
                point: [0, .25 === BB ? .12 : .75 === BB ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: oB(BB, ZB)
          },
          ArmRightMesh: {
            timeline: oB(IB, -ZB)
          }
        }
      }
    }
    const vB = GB([0, 0, 0], [0, 0, 0], .07),
      kB = (0, JB.e)((0, TB.d)(vB), "mobIdle"),
      cB = GB([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      nB = GB([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      hB = (0, JB.e)((0, TB.d)(cB), "gunReady"),
      zB = (0, JB.e)((0, TB.d)(nB), "gunAimed")
  },
  34235: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      d: () => JB,
      e: () => nB
    });
    var TB = ZB(1630);

    function JB(BB) {
      var IB;
      return {
        ...GB.store,
        yaw: GB.store.yaw + (null !== (IB = TB.d[BB].previewYaw) && void 0 !== IB ? IB : 0)
      }
    }
    const oB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      GB = {
        player: oB,
        store: {
          ...oB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function vB(BB, IB) {
      BB instanceof Promise ? BB.then(IB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : IB(BB)
    }
    class kB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, vB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var IB;
        this.view = BB, null === (IB = this.opened) || void 0 === IB || IB.show(BB)
      }
      resize(BB, IB) {
        var ZB;
        this.size = {
          width: BB,
          height: IB
        }, null === (ZB = this.opened) || void 0 === ZB || ZB.resize(BB, IB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class cB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), vB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, IB;
        return null !== (BB = null === (IB = this.opened) || void 0 === IB ? void 0 : IB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, IB) {
        var ZB;
        null === (ZB = this.opened) || void 0 === ZB || ZB.setCosmetic(BB, IB)
      }
      playEmote(BB) {
        var IB;
        null === (IB = this.opened) || void 0 === IB || IB.playEmote(BB)
      }
      setOrbit(BB) {
        var IB;
        null === (IB = this.opened) || void 0 === IB || IB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var IB;
        await this.ready, await (null === (IB = this.opened) || void 0 === IB ? void 0 : IB.untilDrawn(BB))
      }
      resize(BB, IB) {
        var ZB;
        this.size = {
          width: BB,
          height: IB
        }, null === (ZB = this.opened) || void 0 === ZB || ZB.resize(BB, IB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const nB = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(BB) {
        this.host = BB
      }
      setDefaultHost(BB) {
        this.makeDefault = BB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(BB) {
        return new kB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new kB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new kB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, IB) {
        return new cB(this.current().openCharacter(BB, IB))
      }
    }
  },
  34230: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.b,
      f: () => TB.d,
      i: () => TB.e
    });
    var TB = ZB(34235);
    class JB {
      constructor(BB) {
        this.load = BB, this.loaded = null, this.loading = null
      }
      run(BB) {
        return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
          throw this.loading = null, BB
        })), this.loading.then(BB))
      }
    }
    class oB {
      constructor() {
        this.mobScene = new JB((() => Promise.all([ZB.e(73), ZB.e(237), ZB.e(236), ZB.e(258), ZB.e(98), ZB.e(259), ZB.e(76), ZB.e(75), ZB.e(256), ZB.e(74), ZB.e(266), ZB.e(260), ZB.e(265), ZB.e(263), ZB.e(255), ZB.e(279), ZB.e(233), ZB.e(249), ZB.e(261), ZB.e(264), ZB.e(78), ZB.e(188), ZB.e(227), ZB.e(97), ZB.e(239), ZB.e(230), ZB.e(246), ZB.e(121), ZB.e(247), ZB.e(77), ZB.e(251)]).then((() => ZB(41108))))), this.characterScene = new JB((() => Promise.all([ZB.e(73), ZB.e(237), ZB.e(236), ZB.e(258), ZB.e(98), ZB.e(259), ZB.e(76), ZB.e(75), ZB.e(256), ZB.e(74), ZB.e(266), ZB.e(260), ZB.e(265), ZB.e(263), ZB.e(255), ZB.e(279), ZB.e(233), ZB.e(249), ZB.e(261), ZB.e(264), ZB.e(78), ZB.e(188), ZB.e(227), ZB.e(97), ZB.e(239), ZB.e(230), ZB.e(246), ZB.e(121), ZB.e(247), ZB.e(77), ZB.e(250)]).then((() => ZB(41208)))))
      }
      openMob(BB) {
        return this.mobScene.run((IB => IB.openMobPreview(BB)))
      }
      openPet(BB) {
        return this.mobScene.run((IB => IB.openPetPreview(BB)))
      }
      openMobLineup(BB) {
        return this.mobScene.run((IB => IB.openMobLineupPreview(BB)))
      }
      openCharacter(BB, IB) {
        return this.characterScene.run((ZB => ZB.openCharacterPreview(BB, IB)))
      }
    }
    TB.e.setDefaultHost((() => new oB))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);