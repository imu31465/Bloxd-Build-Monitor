export const id = 222;
export const ids = [222];
export const modules = {
  44670: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(56),
      DB = GB(3072);

    function QB(BB, OB, GB) {
      const QB = (0, YB.useRef)(null),
        {
          width: oB,
          height: jB
        } = (0, DB.e)(BB);
      (0, YB.useEffect)((() => {
        const GB = OB(BB.current);
        return QB.current = GB, () => {
          GB.close(), QB.current = null
        }
      }), [BB, OB]), (0, YB.useEffect)((() => {
        oB <= 0 || jB <= 0 || QB.current.resize(oB, jB)
      }), [oB, jB]), (0, YB.useEffect)((() => {
        QB.current.show(GB)
      }), [GB])
    }
  },
  44673: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => zB,
      h: () => PB,
      j: () => yB
    });
    var YB = GB(37841),
      DB = GB(39331);

    function QB(BB, OB) {
      let [GB, YB, DB] = BB;
      return [0, .5, 1].map((BB => ({
        timeFraction: BB,
        rotation: {
          nG: "catmull-rom-spline",
          point: [GB, YB, DB + (.5 === BB ? OB : 0)]
        }
      })))
    }

    function oB(BB, OB, GB) {
      return {
        NG: 3200,
        loop: !0,
        AG: {
          Root: {
            timeline: [0, .5, 1].map((BB => ({
              timeFraction: BB,
              position: {
                nG: "catmull-rom-spline",
                point: [0, .5 === BB ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((BB => ({
              timeFraction: BB,
              rotation: {
                nG: "catmull-rom-spline",
                point: [0, .25 === BB ? .12 : .75 === BB ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: QB(BB, GB)
          },
          ArmRightMesh: {
            timeline: QB(OB, -GB)
          }
        }
      }
    }
    const jB = oB([0, 0, 0], [0, 0, 0], .07),
      yB = (0, DB.d)((0, YB.e)(jB), "mobIdle"),
      JB = oB([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      MB = oB([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      PB = (0, DB.d)((0, YB.e)(JB), "gunReady"),
      zB = (0, DB.d)((0, YB.e)(MB), "gunAimed")
  },
  39331: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      f: () => QB
    });
    const YB = new WeakMap;

    function DB(BB, OB) {
      return YB.set(BB, OB), BB
    }

    function QB(BB) {
      var OB;
      return null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : null
    }
  },
  34832: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      h: () => DB,
      i: () => MB
    });
    var YB = GB(1611);

    function DB(BB) {
      var OB;
      return {
        ...oB.store,
        yaw: oB.store.yaw + (null !== (OB = YB.d[BB].previewYaw) && void 0 !== OB ? OB : 0)
      }
    }
    const QB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      oB = {
        player: QB,
        store: {
          ...QB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function jB(BB, OB) {
      BB instanceof Promise ? BB.then(OB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : OB(BB)
    }
    class yB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, jB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var OB;
        this.view = BB, null === (OB = this.opened) || void 0 === OB || OB.show(BB)
      }
      resize(BB, OB) {
        var GB;
        this.size = {
          width: BB,
          height: OB
        }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class JB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), jB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, OB;
        return null !== (BB = null === (OB = this.opened) || void 0 === OB ? void 0 : OB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, OB) {
        var GB;
        null === (GB = this.opened) || void 0 === GB || GB.setCosmetic(BB, OB)
      }
      playEmote(BB) {
        var OB;
        null === (OB = this.opened) || void 0 === OB || OB.playEmote(BB)
      }
      setOrbit(BB) {
        var OB;
        null === (OB = this.opened) || void 0 === OB || OB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var OB;
        await this.ready, await (null === (OB = this.opened) || void 0 === OB ? void 0 : OB.untilDrawn(BB))
      }
      resize(BB, OB) {
        var GB;
        this.size = {
          width: BB,
          height: OB
        }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const MB = new class {
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
        return new yB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new yB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new yB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, OB) {
        return new JB(this.current().openCharacter(BB, OB))
      }
    }
  },
  34828: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.d,
      e: () => YB.h,
      g: () => YB.i
    });
    var YB = GB(34832);
    class DB {
      constructor(BB) {
        this.load = BB, this.loaded = null, this.loading = null
      }
      run(BB) {
        return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
          throw this.loading = null, BB
        })), this.loading.then(BB))
      }
    }
    class QB {
      constructor() {
        this.mobScene = new DB((() => Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(283), GB.e(111), GB.e(284), GB.e(87), GB.e(281), GB.e(85), GB.e(86), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(303), GB.e(255), GB.e(272), GB.e(286), GB.e(289), GB.e(89), GB.e(249), GB.e(204), GB.e(109), GB.e(261), GB.e(252), GB.e(268), GB.e(219), GB.e(269), GB.e(88), GB.e(273)]).then((() => GB(42079))))), this.characterScene = new DB((() => Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(283), GB.e(111), GB.e(284), GB.e(87), GB.e(281), GB.e(85), GB.e(86), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(303), GB.e(255), GB.e(272), GB.e(286), GB.e(289), GB.e(89), GB.e(249), GB.e(204), GB.e(109), GB.e(261), GB.e(252), GB.e(268), GB.e(219), GB.e(269), GB.e(88), GB.e(218)]).then((() => GB(42186)))))
      }
      openMob(BB) {
        return this.mobScene.run((OB => OB.openMobPreview(BB)))
      }
      openPet(BB) {
        return this.mobScene.run((OB => OB.openPetPreview(BB)))
      }
      openMobLineup(BB) {
        return this.mobScene.run((OB => OB.openMobLineupPreview(BB)))
      }
      openCharacter(BB, OB) {
        return this.characterScene.run((GB => GB.openCharacterPreview(BB, OB)))
      }
    }
    YB.i.setDefaultHost((() => new QB))
  },
  44896: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      FrontlineMvpLineup: () => PB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(34828),
      jB = GB(44673),
      yB = GB(44670),
      JB = GB(1282);

    function MB(BB) {
      return oB.g.openMobLineup(BB)
    }
    const PB = (0, YB.memo)((function(BB) {
      let {
        players: OB,
        className: GB
      } = BB;
      const DB = (0, YB.useRef)(null),
        oB = (0, YB.useMemo)((() => OB.map((BB => {
          let {
            cosmetics: OB,
            size: GB,
            heldGun: YB
          } = BB;
          return {
            cosmetics: OB,
            size: GB,
            cW: YB.name,
            animation: YB.aimed ? jB.e : jB.h
          }
        }))), [OB]),
        PB = function(BB) {
          const [OB, GB] = (0, YB.useState)([]);
          return (0, YB.useEffect)((() => {
            GB(BB.map((() => !1)));
            const OB = BB.map(((BB, OB) => {
              let {
                showAfterMs: YB
              } = BB;
              return window.setTimeout((() => {
                GB((BB => BB.map(((BB, GB) => BB || GB === OB))))
              }), YB)
            }));
            return () => {
              for (const BB of OB) window.clearTimeout(BB)
            }
          }), [BB]), OB
        }(OB),
        zB = (0, YB.useMemo)((() => ({
          figures: oB,
          shown: PB
        })), [oB, PB]);
      return (0, yB.d)(DB, MB, zB), (0, JB.jsx)("div", {
        className: QB()("MobPreview", GB),
        ref: DB
      })
    }))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);