export const id = 202;
export const ids = [202];
export const modules = {
  41620: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB
    });
    var QB = zB(62),
      nB = zB(2853);

    function dB(BB, jB, zB) {
      const dB = (0, QB.useRef)(null),
        {
          width: IB,
          height: NB
        } = (0, nB.b)(BB);
      (0, QB.useEffect)((() => {
        const zB = jB(BB.current);
        return dB.current = zB, () => {
          zB.close(), dB.current = null
        }
      }), [BB, jB]), (0, QB.useEffect)((() => {
        IB <= 0 || NB <= 0 || dB.current.resize(IB, NB)
      }), [IB, NB]), (0, QB.useEffect)((() => {
        dB.current.show(zB)
      }), [zB])
    }
  },
  41626: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB,
      c: () => pB,
      d: () => uB
    });
    var QB = zB(37252),
      nB = zB(38738);

    function dB(BB, jB) {
      let [zB, QB, nB] = BB;
      return [0, .5, 1].map((BB => ({
        timeFraction: BB,
        rotation: {
          OQ: "catmull-rom-spline",
          point: [zB, QB, nB + (.5 === BB ? jB : 0)]
        }
      })))
    }

    function IB(BB, jB, zB) {
      return {
        CQ: 3200,
        loop: !0,
        bQ: {
          Root: {
            timeline: [0, .5, 1].map((BB => ({
              timeFraction: BB,
              position: {
                OQ: "catmull-rom-spline",
                point: [0, .5 === BB ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((BB => ({
              timeFraction: BB,
              rotation: {
                OQ: "catmull-rom-spline",
                point: [0, .25 === BB ? .12 : .75 === BB ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: dB(BB, zB)
          },
          ArmRightMesh: {
            timeline: dB(jB, -zB)
          }
        }
      }
    }
    const NB = IB([0, 0, 0], [0, 0, 0], .07),
      uB = (0, nB.b)((0, QB.e)(NB), "mobIdle"),
      UB = IB([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      aB = IB([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      pB = (0, nB.b)((0, QB.e)(UB), "gunReady"),
      rB = (0, nB.b)((0, QB.e)(aB), "gunAimed")
  },
  38738: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      e: () => dB
    });
    const QB = new WeakMap;

    function nB(BB, jB) {
      return QB.set(BB, jB), BB
    }

    function dB(BB) {
      var jB;
      return null !== (jB = QB.get(BB)) && void 0 !== jB ? jB : null
    }
  },
  34289: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB,
      g: () => nB,
      i: () => aB
    });
    var QB = zB(1585);

    function nB(BB) {
      var jB;
      return {
        ...IB.store,
        yaw: IB.store.yaw + (null !== (jB = QB.d[BB].previewYaw) && void 0 !== jB ? jB : 0)
      }
    }
    const dB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      IB = {
        player: dB,
        store: {
          ...dB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function NB(BB, jB) {
      BB instanceof Promise ? BB.then(jB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : jB(BB)
    }
    class uB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, NB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var jB;
        this.view = BB, null === (jB = this.opened) || void 0 === jB || jB.show(BB)
      }
      resize(BB, jB) {
        var zB;
        this.size = {
          width: BB,
          height: jB
        }, null === (zB = this.opened) || void 0 === zB || zB.resize(BB, jB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class UB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), NB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, jB;
        return null !== (BB = null === (jB = this.opened) || void 0 === jB ? void 0 : jB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, jB) {
        var zB;
        null === (zB = this.opened) || void 0 === zB || zB.setCosmetic(BB, jB)
      }
      playEmote(BB) {
        var jB;
        null === (jB = this.opened) || void 0 === jB || jB.playEmote(BB)
      }
      setOrbit(BB) {
        var jB;
        null === (jB = this.opened) || void 0 === jB || jB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var jB;
        await this.ready, await (null === (jB = this.opened) || void 0 === jB ? void 0 : jB.untilDrawn(BB))
      }
      resize(BB, jB) {
        var zB;
        this.size = {
          width: BB,
          height: jB
        }, null === (zB = this.opened) || void 0 === zB || zB.resize(BB, jB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const aB = new class {
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
        return new uB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new uB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new uB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, jB) {
        return new UB(this.current().openCharacter(BB, jB))
      }
    }
  },
  34283: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB.c,
      e: () => QB.g,
      i: () => QB.i
    });
    var QB = zB(34289);
    class nB {
      constructor(BB) {
        this.load = BB, this.loaded = null, this.loading = null
      }
      run(BB) {
        return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
          throw this.loading = null, BB
        })), this.loading.then(BB))
      }
    }
    class dB {
      constructor() {
        this.mobScene = new nB((() => Promise.all([zB.e(73), zB.e(237), zB.e(236), zB.e(258), zB.e(98), zB.e(259), zB.e(76), zB.e(75), zB.e(256), zB.e(74), zB.e(266), zB.e(260), zB.e(265), zB.e(263), zB.e(255), zB.e(279), zB.e(233), zB.e(249), zB.e(261), zB.e(264), zB.e(78), zB.e(188), zB.e(227), zB.e(97), zB.e(239), zB.e(230), zB.e(246), zB.e(121), zB.e(247), zB.e(77), zB.e(251)]).then((() => zB(41173))))), this.characterScene = new nB((() => Promise.all([zB.e(73), zB.e(237), zB.e(236), zB.e(258), zB.e(98), zB.e(259), zB.e(76), zB.e(75), zB.e(256), zB.e(74), zB.e(266), zB.e(260), zB.e(265), zB.e(263), zB.e(255), zB.e(279), zB.e(233), zB.e(249), zB.e(261), zB.e(264), zB.e(78), zB.e(188), zB.e(227), zB.e(97), zB.e(239), zB.e(230), zB.e(246), zB.e(121), zB.e(247), zB.e(77), zB.e(250)]).then((() => zB(41268)))))
      }
      openMob(BB) {
        return this.mobScene.run((jB => jB.openMobPreview(BB)))
      }
      openPet(BB) {
        return this.mobScene.run((jB => jB.openPetPreview(BB)))
      }
      openMobLineup(BB) {
        return this.mobScene.run((jB => jB.openMobLineupPreview(BB)))
      }
      openCharacter(BB, jB) {
        return this.characterScene.run((zB => zB.openCharacterPreview(BB, jB)))
      }
    }
    QB.i.setDefaultHost((() => new dB))
  },
  41846: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      FrontlineMvpLineup: () => pB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(34283),
      NB = zB(41626),
      uB = zB(41620),
      UB = zB(1148);

    function aB(BB) {
      return IB.i.openMobLineup(BB)
    }
    const pB = (0, QB.memo)((function(BB) {
      let {
        players: jB,
        className: zB
      } = BB;
      const nB = (0, QB.useRef)(null),
        IB = (0, QB.useMemo)((() => jB.map((BB => {
          let {
            cosmetics: jB,
            size: zB,
            heldGun: QB
          } = BB;
          return {
            cosmetics: jB,
            size: zB,
            kS: QB.name,
            animation: QB.aimed ? NB.b : NB.c
          }
        }))), [jB]),
        pB = function(BB) {
          const [jB, zB] = (0, QB.useState)([]);
          return (0, QB.useEffect)((() => {
            zB(BB.map((() => !1)));
            const jB = BB.map(((BB, jB) => {
              let {
                showAfterMs: QB
              } = BB;
              return window.setTimeout((() => {
                zB((BB => BB.map(((BB, zB) => BB || zB === jB))))
              }), QB)
            }));
            return () => {
              for (const BB of jB) window.clearTimeout(BB)
            }
          }), [BB]), jB
        }(jB),
        rB = (0, QB.useMemo)((() => ({
          figures: IB,
          shown: pB
        })), [IB, pB]);
      return (0, uB.c)(nB, aB, rB), (0, UB.jsx)("div", {
        className: dB()("MobPreview", zB),
        ref: nB
      })
    }))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);