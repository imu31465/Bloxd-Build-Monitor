export const id = 204;
export const ids = [204];
export const modules = {
  40261: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      MobPreview: () => kB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(40263),
      JB = dB(35817),
      YB = dB(40266),
      gB = dB(980);

    function oB(BB) {
      return JB.e.openMob(BB)
    }
    const kB = (0, VB.memo)((function(BB) {
      let {
        mobType: TB,
        variation: dB = null,
        animation: yB = YB.f,
        className: JB
      } = BB;
      const kB = (0, VB.useRef)(null),
        LB = (0, VB.useMemo)((() => ({
          mobType: TB,
          variation: dB,
          animation: yB
        })), [TB, dB, yB]);
      return (0, lB.c)(kB, oB, LB), (0, gB.jsx)("div", {
        className: pB()("MobPreview", JB),
        ref: kB
      })
    }))
  },
  40263: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB
    });
    var VB = dB(62),
      yB = dB(2368);

    function pB(BB, TB, dB) {
      const pB = (0, VB.useRef)(null),
        {
          width: lB,
          height: JB
        } = (0, yB.b)(BB);
      (0, VB.useEffect)((() => {
        const dB = TB(BB.current);
        return pB.current = dB, () => {
          dB.close(), pB.current = null
        }
      }), [BB, TB]), (0, VB.useEffect)((() => {
        lB <= 0 || JB <= 0 || pB.current.resize(lB, JB)
      }), [lB, JB]), (0, VB.useEffect)((() => {
        pB.current.show(dB)
      }), [dB])
    }
  },
  40266: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => LB,
      d: () => kB,
      f: () => YB
    });
    var VB = dB(36496),
      yB = dB(37598);

    function pB(BB, TB) {
      let [dB, VB, yB] = BB;
      return [0, .5, 1].map((BB => ({
        timeFraction: BB,
        rotation: {
          Xy: "catmull-rom-spline",
          point: [dB, VB, yB + (.5 === BB ? TB : 0)]
        }
      })))
    }

    function lB(BB, TB, dB) {
      return {
        Sy: 3200,
        loop: !0,
        Qy: {
          Root: {
            timeline: [0, .5, 1].map((BB => ({
              timeFraction: BB,
              position: {
                Xy: "catmull-rom-spline",
                point: [0, .5 === BB ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((BB => ({
              timeFraction: BB,
              rotation: {
                Xy: "catmull-rom-spline",
                point: [0, .25 === BB ? .12 : .75 === BB ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: pB(BB, dB)
          },
          ArmRightMesh: {
            timeline: pB(TB, -dB)
          }
        }
      }
    }
    const JB = lB([0, 0, 0], [0, 0, 0], .07),
      YB = (0, yB.b)((0, VB.h)(JB), "mobIdle"),
      gB = lB([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      oB = lB([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      kB = (0, yB.b)((0, VB.h)(gB), "gunReady"),
      LB = (0, yB.b)((0, VB.h)(oB), "gunAimed")
  },
  35819: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      e: () => YB
    });
    const VB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yB = {
        player: VB,
        store: {
          ...VB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pB(BB, TB) {
      BB instanceof Promise ? BB.then(TB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : TB(BB)
    }
    class lB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var TB;
        this.view = BB, null === (TB = this.opened) || void 0 === TB || TB.show(BB)
      }
      resize(BB, TB) {
        var dB;
        this.size = {
          width: BB,
          height: TB
        }, null === (dB = this.opened) || void 0 === dB || dB.resize(BB, TB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class JB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), pB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, TB;
        return null !== (BB = null === (TB = this.opened) || void 0 === TB ? void 0 : TB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, TB) {
        var dB;
        null === (dB = this.opened) || void 0 === dB || dB.setCosmetic(BB, TB)
      }
      playEmote(BB) {
        var TB;
        null === (TB = this.opened) || void 0 === TB || TB.playEmote(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var TB;
        await this.ready, await (null === (TB = this.opened) || void 0 === TB ? void 0 : TB.untilDrawn(BB))
      }
      resize(BB, TB) {
        var dB;
        this.size = {
          width: BB,
          height: TB
        }, null === (dB = this.opened) || void 0 === dB || dB.resize(BB, TB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const YB = new class {
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
        return new lB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new lB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new lB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, TB) {
        return new JB(this.current().openCharacter(BB, TB))
      }
    }
  },
  35817: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB.e
    });
    var VB = dB(35819);
    class yB {
      constructor(BB) {
        this.load = BB, this.loaded = null, this.loading = null
      }
      run(BB) {
        return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
          throw this.loading = null, BB
        })), this.loading.then(BB))
      }
    }
    class pB {
      constructor() {
        this.mobScene = new yB((() => Promise.all([dB.e(215), dB.e(214), dB.e(234), dB.e(235), dB.e(67), dB.e(66), dB.e(232), dB.e(65), dB.e(242), dB.e(236), dB.e(241), dB.e(239), dB.e(231), dB.e(206), dB.e(271), dB.e(211), dB.e(225), dB.e(237), dB.e(240), dB.e(126), dB.e(185), dB.e(207), dB.e(222), dB.e(205), dB.e(106), dB.e(68), dB.e(272), dB.e(146)]).then((() => dB(39925))))), this.characterScene = new yB((() => Promise.all([dB.e(215), dB.e(214), dB.e(234), dB.e(235), dB.e(67), dB.e(66), dB.e(232), dB.e(65), dB.e(242), dB.e(236), dB.e(241), dB.e(239), dB.e(231), dB.e(206), dB.e(271), dB.e(211), dB.e(225), dB.e(237), dB.e(240), dB.e(126), dB.e(185), dB.e(207), dB.e(222), dB.e(205), dB.e(106), dB.e(68), dB.e(272), dB.e(145)]).then((() => dB(40024)))))
      }
      openMob(BB) {
        return this.mobScene.run((TB => TB.openMobPreview(BB)))
      }
      openPet(BB) {
        return this.mobScene.run((TB => TB.openPetPreview(BB)))
      }
      openMobLineup(BB) {
        return this.mobScene.run((TB => TB.openMobLineupPreview(BB)))
      }
      openCharacter(BB, TB) {
        return this.characterScene.run((dB => dB.openCharacterPreview(BB, TB)))
      }
    }
    VB.e.setDefaultHost((() => new pB))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);