export const id = 203;
export const ids = [203];
export const modules = {
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
  37598: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      c: () => pB
    });
    const VB = new WeakMap;

    function yB(BB, TB) {
      return VB.set(BB, TB), BB
    }

    function pB(BB) {
      var TB;
      return null !== (TB = VB.get(BB)) && void 0 !== TB ? TB : null
    }
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
  },
  40454: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      FrontlineMvpLineup: () => kB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(35817),
      JB = dB(40266),
      YB = dB(40263),
      gB = dB(980);

    function oB(BB) {
      return lB.e.openMobLineup(BB)
    }
    const kB = (0, VB.memo)((function(BB) {
      let {
        players: TB,
        className: dB
      } = BB;
      const yB = (0, VB.useRef)(null),
        lB = (0, VB.useMemo)((() => TB.map((BB => {
          let {
            cosmetics: TB,
            size: dB,
            heldGun: VB
          } = BB;
          return {
            cosmetics: TB,
            size: dB,
            mN: VB.name,
            animation: VB.aimed ? JB.c : JB.d
          }
        }))), [TB]),
        kB = function(BB) {
          const [TB, dB] = (0, VB.useState)([]);
          return (0, VB.useEffect)((() => {
            dB(BB.map((() => !1)));
            const TB = BB.map(((BB, TB) => {
              let {
                showAfterMs: VB
              } = BB;
              return window.setTimeout((() => {
                dB((BB => BB.map(((BB, dB) => BB || dB === TB))))
              }), VB)
            }));
            return () => {
              for (const BB of TB) window.clearTimeout(BB)
            }
          }), [BB]), TB
        }(TB),
        LB = (0, VB.useMemo)((() => ({
          figures: lB,
          shown: kB
        })), [lB, kB]);
      return (0, YB.c)(yB, oB, LB), (0, gB.jsx)("div", {
        className: pB()("MobPreview", dB),
        ref: yB
      })
    }))
  },
  36496: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB,
      h: () => lB
    });
    var VB = dB(36491),
      yB = dB(279),
      pB = dB(1652);

    function lB(BB) {
      if ("Sy" in BB) return tB.createAnimationScript(BB);
      return new gB(BB).createAnimationScript()
    }

    function JB(BB, TB, dB, yB) {
      const pB = BB.Sy <= 0 ? 1 : TB + dB * Math.max(0, yB) / BB.Sy;
      return BB.Py === VB.n.LoopOnLastFrame ? pB % 1 : BB.Py === VB.n.NoLoop && pB >= 1 ? null : Math.min(1, pB)
    }
    class YB {
      createAnimationScript(BB) {
        const {
          Sy: TB,
          loop: dB,
          Qy: VB
        } = BB;
        return {
          Sy: Math.round(TB),
          Py: this.createLoopMode(null !== dB && void 0 !== dB && dB),
          Qy: this.createNodeSkeletonAnimationScript(null !== VB && void 0 !== VB ? VB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return VB.n.NoLoop;
          case !0:
            return VB.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return VB.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const TB = {};
        for (const dB in BB) {
          const VB = BB[dB];
          TB[dB] = this.createNodeAnimationScript(VB)
        }
        return TB
      }
      createNodeAnimationScript(BB) {
        const {
          timeline: TB
        } = BB, dB = TB.filter((BB => Number.isFinite(BB.timeFraction)));
        return dB.sort(((BB, TB) => BB.timeFraction - TB.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(dB, "rotation", LB),
          position: this.createTimelineFromKeyframes(dB, "position", DB)
        }
      }
      createTimelineFromKeyframes(BB, TB, dB) {
        const VB = [];
        for (const YB of BB) {
          const BB = YB[TB];
          if (BB) {
            const TB = this.createAnimationFrameWithoutPrecomputes(YB.timeFraction, BB);
            oB(TB) && VB.push(TB)
          }
        }
        const yB = [];
        for (let YB = 0; YB < VB.length; YB++) {
          var pB, lB, JB;
          const BB = VB[YB],
            TB = null !== (pB = VB[YB - 1]) && void 0 !== pB ? pB : BB,
            gB = null !== (lB = VB[YB + 1]) && void 0 !== lB ? lB : BB,
            oB = null !== (JB = VB[YB + 2]) && void 0 !== JB ? JB : gB;
          yB.push({
            ...BB,
            ...dB(TB.post, TB.timeFraction, BB.post, BB.timeFraction, gB.pre, gB.timeFraction, oB.pre, oB.timeFraction)
          })
        }
        return yB
      }
      createAnimationFrameWithoutPrecomputes(BB, TB) {
        let dB, VB, yB = null;
        var pB;
        if ("object" === typeof TB && "point" in TB) yB = null !== (pB = TB.Xy) && void 0 !== pB ? pB : null, dB = TB.point, VB = TB.point;
        else if ("object" === typeof TB && "pre" in TB) {
          var lB;
          yB = null !== (lB = TB.Xy) && void 0 !== lB ? lB : null, dB = TB.pre, VB = TB.post
        } else dB = TB, VB = TB;
        return {
          timeFraction: BB,
          Xy: this.createLerpMode(yB),
          pre: dB,
          post: VB
        }
      }
      createLerpMode(BB) {
        return null === BB ? VB.j.Linear : YB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }
    YB.LERP_MODE_SCHEMA_MAPPING = {
      linear: VB.j.Linear,
      "catmull-rom-spline": VB.j.CatmullRomSpline
    };
    class gB {
      constructor(BB) {
        this.animationSchema = BB
      }
      createAnimationScript() {
        const {
          animation_length: BB,
          loop: TB,
          bones: dB
        } = this.animationSchema;
        return {
          Sy: Math.round(1e3 * BB),
          Py: this.createLoopMode(null !== TB && void 0 !== TB && TB),
          Qy: this.createNodeSkeletonAnimationScript(null !== dB && void 0 !== dB ? dB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return VB.n.NoLoop;
          case !0:
            return VB.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return VB.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const TB = {};
        for (const dB in BB) {
          const VB = BB[dB];
          TB[dB] = this.createNodeAnimationScript(VB)
        }
        return TB
      }
      createNodeAnimationScript(BB) {
        const {
          rotation: TB,
          position: dB
        } = BB;
        return {
          rotation: this.createAnimationTimeline(null !== TB && void 0 !== TB ? TB : null, HB, LB, !0),
          position: this.createAnimationTimeline(null !== dB && void 0 !== dB ? dB : null, vB, DB, !1)
        }
      }
      createAnimationTimeline(BB, TB, dB, VB) {
        if (null === BB) return [];
        if (Array.isArray(BB)) {
          BB = {
            "0.0": BB
          }
        }
        const yB = Object.entries(BB).map((BB => {
          let [dB, VB] = BB;
          const yB = Number(dB) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(yB, VB, TB)
        })).filter(oB);
        yB.sort(((BB, TB) => BB.timeFraction - TB.timeFraction)), VB && function(BB) {
          for (let TB = 1; TB < BB.length; TB++) {
            const dB = BB[TB - 1].post,
              VB = BB[TB],
              yB = mB(VB.pre),
              pB = mB(VB.post),
              lB = NB(dB, VB.pre);
            NB(dB, yB) < lB && (BB[TB] = {
              ...VB,
              pre: yB,
              post: pB
            })
          }
        }(yB);
        const pB = [];
        for (let gB = 0; gB < yB.length; gB++) {
          var lB, JB, YB;
          const BB = yB[gB],
            TB = null !== (lB = yB[gB - 1]) && void 0 !== lB ? lB : BB,
            VB = null !== (JB = yB[gB + 1]) && void 0 !== JB ? JB : BB,
            oB = null !== (YB = yB[gB + 2]) && void 0 !== YB ? YB : VB;
          pB.push({
            ...BB,
            ...dB(TB.post, TB.timeFraction, BB.post, BB.timeFraction, VB.pre, VB.timeFraction, oB.pre, oB.timeFraction)
          })
        }
        return pB
      }
      createAnimationFrameWithoutPrecomputes(BB, TB, dB) {
        let VB, yB, pB = null;
        if ("object" === typeof TB && "post" in TB) {
          var lB;
          pB = null !== (lB = TB.lerp_mode) && void 0 !== lB ? lB : null, yB = uB(TB.post, dB), VB = TB.pre ? uB(TB.pre, dB) : yB
        } else {
          const BB = uB(TB, dB);
          yB = BB, VB = BB
        }
        return {
          timeFraction: BB,
          Xy: this.createLerpMode(pB),
          pre: VB,
          post: yB
        }
      }
      createLerpMode(BB) {
        return null === BB ? VB.j.Linear : gB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }

    function oB(BB) {
      return Number.isFinite(BB.timeFraction) && kB(BB.pre) && kB(BB.post)
    }

    function kB(BB) {
      return Number.isFinite(BB[0]) && Number.isFinite(BB[1]) && Number.isFinite(BB[2])
    }

    function LB(BB, TB, dB, VB, yB, pB, lB, JB) {
      const YB = pB - TB,
        gB = pB - VB,
        oB = JB - VB,
        kB = [null, null, null];
      for (let LB = 0; LB < kB.length; LB++) kB[LB] = OB(BB[LB], dB[LB], yB[LB], lB[LB], YB, oB);
      return {
        Wy: gB,
        hy: kB
      }
    }

    function OB(BB, TB, dB, VB, pB, lB) {
      return {
        Gy: yB.e.computeShortestRotation(BB, dB) / pB,
        qy: yB.e.computeShortestRotation(TB, VB) / lB,
        delta: yB.e.computeShortestRotation(TB, dB)
      }
    }

    function DB(BB, TB, dB, VB, yB, pB, lB, JB) {
      const YB = pB - TB,
        gB = pB - VB,
        oB = JB - VB,
        kB = [null, null, null];
      for (let LB = 0; LB < kB.length; LB++) kB[LB] = {
        Gy: (yB[LB] - BB[LB]) / YB,
        qy: (lB[LB] - dB[LB]) / oB,
        delta: yB[LB] - dB[LB]
      };
      return {
        Wy: gB,
        hy: kB
      }
    }

    function uB(BB, TB) {
      return null === TB ? BB : TB(BB)
    }

    function HB(BB) {
      const [TB, dB, VB] = BB, lB = -(0, pB.j)(TB), JB = -(0, pB.j)(dB), YB = (0, pB.j)(VB), gB = yB.e.quaternionFromEulerZYX(lB, JB, YB);
      return yB.e.eulerYXZFromQuaternion(gB)
    }
    gB.LERP_MODE_SCHEMA_MAPPING = {
      linear: VB.j.Linear,
      catmullrom: VB.j.CatmullRomSpline
    };
    const EB = 1 / 16;

    function vB(BB) {
      return [-BB[0] * EB, BB[1] * EB, BB[2] * EB]
    }

    function mB(BB) {
      const [TB, dB, VB] = BB;
      return [TB >= 0 ? Math.PI - TB : -Math.PI - TB, iB(dB + Math.PI), iB(VB + Math.PI)]
    }

    function iB(BB) {
      return yB.e.mod(BB + Math.PI, 2 * Math.PI) - Math.PI
    }

    function NB(BB, TB) {
      return Math.abs(yB.e.computeShortestRotation(BB[0], TB[0])) + Math.abs(yB.e.computeShortestRotation(BB[1], TB[1])) + Math.abs(yB.e.computeShortestRotation(BB[2], TB[2]))
    }
    const tB = new YB
  },
  36491: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      f: () => pB,
      j: () => VB,
      n: () => yB
    });
    let VB = function(BB) {
        return BB[BB.Linear = 0] = "Linear", BB[BB.CatmullRomSpline = 1] = "CatmullRomSpline", BB
      }({}),
      yB = function(BB) {
        return BB[BB.NoLoop = 0] = "NoLoop", BB[BB.LoopOnLastFrame = 1] = "LoopOnLastFrame", BB[BB.HoldOnLastFrame = 2] = "HoldOnLastFrame", BB
      }({}),
      pB = function(BB) {
        return BB[BB.Movement = 0] = "Movement", BB[BB.Action = 1] = "Action", BB[BB.Emote = 2] = "Emote", BB[BB.Custom = 3] = "Custom", BB
      }({}),
      lB = function(BB) {
        return BB[BB.Start = 0] = "Start", BB[BB.Stop = 1] = "Stop", BB
      }({})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);