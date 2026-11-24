export const id = 199;
export const ids = [199];
export const modules = {
  41545: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(64),
      bS = gS(2890);

    function XS(SS, HS, gS) {
      const XS = (0, tS.useRef)(null),
        {
          width: xS,
          height: NS
        } = (0, bS.d)(SS);
      (0, tS.useEffect)((() => {
        const gS = HS(SS.current);
        return XS.current = gS, () => {
          gS.close(), XS.current = null
        }
      }), [SS, HS]), (0, tS.useEffect)((() => {
        xS <= 0 || NS <= 0 || XS.current.resize(xS, NS)
      }), [xS, NS]), (0, tS.useEffect)((() => {
        XS.current.show(gS)
      }), [gS])
    }
  },
  41549: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => kS,
      e: () => fS,
      f: () => qS
    });
    var tS = gS(37181),
      bS = gS(38644);

    function XS(SS, HS) {
      let [gS, tS, bS] = SS;
      return [0, .5, 1].map((SS => ({
        timeFraction: SS,
        rotation: {
          kX: "catmull-rom-spline",
          point: [gS, tS, bS + (.5 === SS ? HS : 0)]
        }
      })))
    }

    function xS(SS, HS, gS) {
      return {
        NX: 3200,
        loop: !0,
        uX: {
          Root: {
            timeline: [0, .5, 1].map((SS => ({
              timeFraction: SS,
              position: {
                kX: "catmull-rom-spline",
                point: [0, .5 === SS ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((SS => ({
              timeFraction: SS,
              rotation: {
                kX: "catmull-rom-spline",
                point: [0, .25 === SS ? .12 : .75 === SS ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: XS(SS, gS)
          },
          ArmRightMesh: {
            timeline: XS(HS, -gS)
          }
        }
      }
    }
    const NS = xS([0, 0, 0], [0, 0, 0], .07),
      qS = (0, bS.b)((0, tS.d)(NS), "mobIdle"),
      uS = xS([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      IS = xS([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      fS = (0, bS.b)((0, tS.d)(uS), "gunReady"),
      kS = (0, bS.b)((0, tS.d)(IS), "gunAimed")
  },
  38644: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      f: () => XS
    });
    const tS = new WeakMap;

    function bS(SS, HS) {
      return tS.set(SS, HS), SS
    }

    function XS(SS) {
      var HS;
      return null !== (HS = tS.get(SS)) && void 0 !== HS ? HS : null
    }
  },
  34271: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      h: () => bS,
      i: () => IS
    });
    var tS = gS(1657);

    function bS(SS) {
      var HS;
      return {
        ...xS.store,
        yaw: xS.store.yaw + (null !== (HS = tS.c[SS].previewYaw) && void 0 !== HS ? HS : 0)
      }
    }
    const XS = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      xS = {
        player: XS,
        store: {
          ...XS,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function NS(SS, HS) {
      SS instanceof Promise ? SS.then(HS).catch((SS => {
        console.error("Couldn't open the preview", SS)
      })) : HS(SS)
    }
    class qS {
      constructor(SS) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, NS(SS, (SS => {
          this.closed ? SS.close() : (this.opened = SS, null !== this.size && SS.resize(this.size.width, this.size.height), null !== this.view && SS.show(this.view))
        }))
      }
      show(SS) {
        var HS;
        this.view = SS, null === (HS = this.opened) || void 0 === HS || HS.show(SS)
      }
      resize(SS, HS) {
        var gS;
        this.size = {
          width: SS,
          height: HS
        }, null === (gS = this.opened) || void 0 === gS || gS.resize(SS, HS)
      }
      close() {
        var SS;
        this.closed = !0, null === (SS = this.opened) || void 0 === SS || SS.close(), this.opened = null
      }
    }
    class uS {
      constructor(SS) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(SS).then((SS => SS.ready)), NS(SS, (SS => {
          this.closed ? SS.close() : (this.opened = SS, null !== this.size && SS.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var SS, HS;
        return null !== (SS = null === (HS = this.opened) || void 0 === HS ? void 0 : HS.isReady()) && void 0 !== SS && SS
      }
      setCosmetic(SS, HS) {
        var gS;
        null === (gS = this.opened) || void 0 === gS || gS.setCosmetic(SS, HS)
      }
      playEmote(SS) {
        var HS;
        null === (HS = this.opened) || void 0 === HS || HS.playEmote(SS)
      }
      setOrbit(SS) {
        var HS;
        null === (HS = this.opened) || void 0 === HS || HS.setOrbit(SS)
      }
      resetCamera() {
        var SS;
        null === (SS = this.opened) || void 0 === SS || SS.resetCamera()
      }
      async untilDrawn(SS) {
        var HS;
        await this.ready, await (null === (HS = this.opened) || void 0 === HS ? void 0 : HS.untilDrawn(SS))
      }
      resize(SS, HS) {
        var gS;
        this.size = {
          width: SS,
          height: HS
        }, null === (gS = this.opened) || void 0 === gS || gS.resize(SS, HS)
      }
      close() {
        var SS;
        this.closed = !0, null === (SS = this.opened) || void 0 === SS || SS.close(), this.opened = null
      }
    }
    const IS = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(SS) {
        this.host = SS
      }
      setDefaultHost(SS) {
        this.makeDefault = SS
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(SS) {
        return new qS(this.current().openMob(SS))
      }
      openPet(SS) {
        return new qS(this.current().openPet(SS))
      }
      openMobLineup(SS) {
        return new qS(this.current().openMobLineup(SS))
      }
      openCharacter(SS, HS) {
        return new uS(this.current().openCharacter(SS, HS))
      }
    }
  },
  34267: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS.e,
      f: () => tS.h,
      g: () => tS.i
    });
    var tS = gS(34271);
    class bS {
      constructor(SS) {
        this.load = SS, this.loaded = null, this.loading = null
      }
      run(SS) {
        return null !== this.loaded ? SS(this.loaded) : (this.loading ??= this.load().then((SS => (this.loaded = SS, SS)), (SS => {
          throw this.loading = null, SS
        })), this.loading.then(SS))
      }
    }
    class XS {
      constructor() {
        this.mobScene = new bS((() => Promise.all([gS.e(72), gS.e(232), gS.e(231), gS.e(254), gS.e(96), gS.e(255), gS.e(75), gS.e(74), gS.e(252), gS.e(73), gS.e(262), gS.e(256), gS.e(261), gS.e(259), gS.e(251), gS.e(274), gS.e(228), gS.e(244), gS.e(257), gS.e(260), gS.e(77), gS.e(186), gS.e(222), gS.e(95), gS.e(225), gS.e(240), gS.e(120), gS.e(241), gS.e(76), gS.e(119), gS.e(246)]).then((() => gS(41093))))), this.characterScene = new bS((() => Promise.all([gS.e(72), gS.e(232), gS.e(231), gS.e(254), gS.e(96), gS.e(255), gS.e(75), gS.e(74), gS.e(252), gS.e(73), gS.e(262), gS.e(256), gS.e(261), gS.e(259), gS.e(251), gS.e(274), gS.e(228), gS.e(244), gS.e(257), gS.e(260), gS.e(77), gS.e(186), gS.e(222), gS.e(95), gS.e(225), gS.e(240), gS.e(120), gS.e(241), gS.e(76), gS.e(119), gS.e(245)]).then((() => gS(41184)))))
      }
      openMob(SS) {
        return this.mobScene.run((HS => HS.openMobPreview(SS)))
      }
      openPet(SS) {
        return this.mobScene.run((HS => HS.openPetPreview(SS)))
      }
      openMobLineup(SS) {
        return this.mobScene.run((HS => HS.openMobLineupPreview(SS)))
      }
      openCharacter(SS, HS) {
        return this.characterScene.run((gS => gS.openCharacterPreview(SS, HS)))
      }
    }
    tS.i.setDefaultHost((() => new XS))
  },
  41775: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      FrontlineMvpLineup: () => fS
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(34267),
      NS = gS(41549),
      qS = gS(41545),
      uS = gS(1181);

    function IS(SS) {
      return xS.g.openMobLineup(SS)
    }
    const fS = (0, tS.memo)((function(SS) {
      let {
        players: HS,
        className: gS
      } = SS;
      const bS = (0, tS.useRef)(null),
        xS = (0, tS.useMemo)((() => HS.map((SS => {
          let {
            cosmetics: HS,
            size: gS,
            heldGun: tS
          } = SS;
          return {
            cosmetics: HS,
            size: gS,
            RD: tS.name,
            animation: tS.aimed ? NS.c : NS.e
          }
        }))), [HS]),
        fS = function(SS) {
          const [HS, gS] = (0, tS.useState)([]);
          return (0, tS.useEffect)((() => {
            gS(SS.map((() => !1)));
            const HS = SS.map(((SS, HS) => {
              let {
                showAfterMs: tS
              } = SS;
              return window.setTimeout((() => {
                gS((SS => SS.map(((SS, gS) => SS || gS === HS))))
              }), tS)
            }));
            return () => {
              for (const SS of HS) window.clearTimeout(SS)
            }
          }), [SS]), HS
        }(HS),
        kS = (0, tS.useMemo)((() => ({
          figures: xS,
          shown: fS
        })), [xS, fS]);
      return (0, qS.b)(bS, IS, kS), (0, uS.jsx)("div", {
        className: XS()("MobPreview", gS),
        ref: bS
      })
    }))
  },
  37181: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      d: () => xS
    });
    var tS = gS(37171),
      bS = gS(387),
      XS = gS(2022);

    function xS(SS) {
      if ("NX" in SS) return wS.createAnimationScript(SS);
      return new uS(SS).createAnimationScript()
    }

    function NS(SS, HS, gS, bS) {
      const XS = SS.NX <= 0 ? 1 : HS + gS * Math.max(0, bS) / SS.NX;
      return SS.qX === tS.m.LoopOnLastFrame ? XS % 1 : SS.qX === tS.m.NoLoop && XS >= 1 ? null : Math.min(1, XS)
    }
    class qS {
      createAnimationScript(SS) {
        const {
          NX: HS,
          loop: gS,
          uX: tS
        } = SS;
        return {
          NX: Math.round(HS),
          qX: this.createLoopMode(null !== gS && void 0 !== gS && gS),
          uX: this.createNodeSkeletonAnimationScript(null !== tS && void 0 !== tS ? tS : null)
        }
      }
      createLoopMode(SS) {
        switch (SS) {
          case !1:
            return tS.m.NoLoop;
          case !0:
            return tS.m.LoopOnLastFrame;
          case "hold-on-last-frame":
            return tS.m.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${SS}`)
      }
      createNodeSkeletonAnimationScript(SS) {
        if (null === SS) return null;
        const HS = {};
        for (const gS in SS) {
          const tS = SS[gS];
          HS[gS] = this.createNodeAnimationScript(tS)
        }
        return HS
      }
      createNodeAnimationScript(SS) {
        const {
          timeline: HS
        } = SS, gS = HS.filter((SS => Number.isFinite(SS.timeFraction)));
        return gS.sort(((SS, HS) => SS.timeFraction - HS.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(gS, "rotation", kS),
          position: this.createTimelineFromKeyframes(gS, "position", KS)
        }
      }
      createTimelineFromKeyframes(SS, HS, gS) {
        const tS = [];
        for (const qS of SS) {
          const SS = qS[HS];
          if (SS) {
            const HS = this.createAnimationFrameWithoutPrecomputes(qS.timeFraction, SS);
            IS(HS) && tS.push(HS)
          }
        }
        const bS = [];
        for (let qS = 0; qS < tS.length; qS++) {
          var XS, xS, NS;
          const SS = tS[qS],
            HS = null !== (XS = tS[qS - 1]) && void 0 !== XS ? XS : SS,
            uS = null !== (xS = tS[qS + 1]) && void 0 !== xS ? xS : SS,
            IS = null !== (NS = tS[qS + 2]) && void 0 !== NS ? NS : uS;
          bS.push({
            ...SS,
            ...gS(HS.post, HS.timeFraction, SS.post, SS.timeFraction, uS.pre, uS.timeFraction, IS.pre, IS.timeFraction)
          })
        }
        return bS
      }
      createAnimationFrameWithoutPrecomputes(SS, HS) {
        let gS, tS, bS = null;
        var XS;
        if ("object" === typeof HS && "point" in HS) bS = null !== (XS = HS.kX) && void 0 !== XS ? XS : null, gS = HS.point, tS = HS.point;
        else if ("object" === typeof HS && "pre" in HS) {
          var xS;
          bS = null !== (xS = HS.kX) && void 0 !== xS ? xS : null, gS = HS.pre, tS = HS.post
        } else gS = HS, tS = HS;
        return {
          timeFraction: SS,
          kX: this.createLerpMode(bS),
          pre: gS,
          post: tS
        }
      }
      createLerpMode(SS) {
        return null === SS ? tS.k.Linear : qS.LERP_MODE_SCHEMA_MAPPING[SS]
      }
    }
    qS.LERP_MODE_SCHEMA_MAPPING = {
      linear: tS.k.Linear,
      "catmull-rom-spline": tS.k.CatmullRomSpline
    };
    class uS {
      constructor(SS) {
        this.animationSchema = SS
      }
      createAnimationScript() {
        const {
          animation_length: SS,
          loop: HS,
          bones: gS
        } = this.animationSchema;
        return {
          NX: Math.round(1e3 * SS),
          qX: this.createLoopMode(null !== HS && void 0 !== HS && HS),
          uX: this.createNodeSkeletonAnimationScript(null !== gS && void 0 !== gS ? gS : null)
        }
      }
      createLoopMode(SS) {
        switch (SS) {
          case !1:
            return tS.m.NoLoop;
          case !0:
            return tS.m.LoopOnLastFrame;
          case "hold_on_last_frame":
            return tS.m.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${SS}`)
      }
      createNodeSkeletonAnimationScript(SS) {
        if (null === SS) return null;
        const HS = {};
        for (const gS in SS) {
          const tS = SS[gS];
          HS[gS] = this.createNodeAnimationScript(tS)
        }
        return HS
      }
      createNodeAnimationScript(SS) {
        const {
          rotation: HS,
          position: gS
        } = SS;
        return {
          rotation: this.createAnimationTimeline(null !== HS && void 0 !== HS ? HS : null, GS, kS, !0),
          position: this.createAnimationTimeline(null !== gS && void 0 !== gS ? gS : null, nS, KS, !1)
        }
      }
      createAnimationTimeline(SS, HS, gS, tS) {
        if (null === SS) return [];
        if (Array.isArray(SS)) {
          SS = {
            "0.0": SS
          }
        }
        const bS = Object.entries(SS).map((SS => {
          let [gS, tS] = SS;
          const bS = Number(gS) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(bS, tS, HS)
        })).filter(IS);
        bS.sort(((SS, HS) => SS.timeFraction - HS.timeFraction)), tS && function(SS) {
          for (let HS = 1; HS < SS.length; HS++) {
            const gS = SS[HS - 1].post,
              tS = SS[HS],
              bS = PS(tS.pre),
              XS = PS(tS.post),
              xS = DS(gS, tS.pre);
            DS(gS, bS) < xS && (SS[HS] = {
              ...tS,
              pre: bS,
              post: XS
            })
          }
        }(bS);
        const XS = [];
        for (let uS = 0; uS < bS.length; uS++) {
          var xS, NS, qS;
          const SS = bS[uS],
            HS = null !== (xS = bS[uS - 1]) && void 0 !== xS ? xS : SS,
            tS = null !== (NS = bS[uS + 1]) && void 0 !== NS ? NS : SS,
            IS = null !== (qS = bS[uS + 2]) && void 0 !== qS ? qS : tS;
          XS.push({
            ...SS,
            ...gS(HS.post, HS.timeFraction, SS.post, SS.timeFraction, tS.pre, tS.timeFraction, IS.pre, IS.timeFraction)
          })
        }
        return XS
      }
      createAnimationFrameWithoutPrecomputes(SS, HS, gS) {
        let tS, bS, XS = null;
        if ("object" === typeof HS && "post" in HS) {
          var xS;
          XS = null !== (xS = HS.lerp_mode) && void 0 !== xS ? xS : null, bS = jS(HS.post, gS), tS = HS.pre ? jS(HS.pre, gS) : bS
        } else {
          const SS = jS(HS, gS);
          bS = SS, tS = SS
        }
        return {
          timeFraction: SS,
          kX: this.createLerpMode(XS),
          pre: tS,
          post: bS
        }
      }
      createLerpMode(SS) {
        return null === SS ? tS.k.Linear : uS.LERP_MODE_SCHEMA_MAPPING[SS]
      }
    }

    function IS(SS) {
      return Number.isFinite(SS.timeFraction) && fS(SS.pre) && fS(SS.post)
    }

    function fS(SS) {
      return Number.isFinite(SS[0]) && Number.isFinite(SS[1]) && Number.isFinite(SS[2])
    }

    function kS(SS, HS, gS, tS, bS, XS, xS, NS) {
      const qS = XS - HS,
        uS = XS - tS,
        IS = NS - tS,
        fS = [null, null, null];
      for (let kS = 0; kS < fS.length; kS++) fS[kS] = aS(SS[kS], gS[kS], bS[kS], xS[kS], qS, IS);
      return {
        aX: uS,
        KX: fS
      }
    }

    function aS(SS, HS, gS, tS, XS, xS) {
      return {
        GX: bS.b.computeShortestRotation(SS, gS) / XS,
        CX: bS.b.computeShortestRotation(HS, tS) / xS,
        delta: bS.b.computeShortestRotation(HS, gS)
      }
    }

    function KS(SS, HS, gS, tS, bS, XS, xS, NS) {
      const qS = XS - HS,
        uS = XS - tS,
        IS = NS - tS,
        fS = [null, null, null];
      for (let kS = 0; kS < fS.length; kS++) fS[kS] = {
        GX: (bS[kS] - SS[kS]) / qS,
        CX: (xS[kS] - gS[kS]) / IS,
        delta: bS[kS] - gS[kS]
      };
      return {
        aX: uS,
        KX: fS
      }
    }

    function jS(SS, HS) {
      return null === HS ? SS : HS(SS)
    }

    function GS(SS) {
      const [HS, gS, tS] = SS, xS = -(0, XS.m)(HS), NS = -(0, XS.m)(gS), qS = (0, XS.m)(tS), uS = bS.b.quaternionFromEulerZYX(xS, NS, qS);
      return bS.b.eulerYXZFromQuaternion(uS)
    }
    uS.LERP_MODE_SCHEMA_MAPPING = {
      linear: tS.k.Linear,
      catmullrom: tS.k.CatmullRomSpline
    };
    const CS = 1 / 16;

    function nS(SS) {
      return [-SS[0] * CS, SS[1] * CS, SS[2] * CS]
    }

    function PS(SS) {
      const [HS, gS, tS] = SS;
      return [HS >= 0 ? Math.PI - HS : -Math.PI - HS, QS(gS + Math.PI), QS(tS + Math.PI)]
    }

    function QS(SS) {
      return bS.b.mod(SS + Math.PI, 2 * Math.PI) - Math.PI
    }

    function DS(SS, HS) {
      return Math.abs(bS.b.computeShortestRotation(SS[0], HS[0])) + Math.abs(bS.b.computeShortestRotation(SS[1], HS[1])) + Math.abs(bS.b.computeShortestRotation(SS[2], HS[2]))
    }
    const wS = new qS
  },
  37171: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      g: () => XS,
      k: () => tS,
      m: () => bS
    });
    let tS = function(SS) {
        return SS[SS.Linear = 0] = "Linear", SS[SS.CatmullRomSpline = 1] = "CatmullRomSpline", SS
      }({}),
      bS = function(SS) {
        return SS[SS.NoLoop = 0] = "NoLoop", SS[SS.LoopOnLastFrame = 1] = "LoopOnLastFrame", SS[SS.HoldOnLastFrame = 2] = "HoldOnLastFrame", SS
      }({}),
      XS = function(SS) {
        return SS[SS.Movement = 0] = "Movement", SS[SS.Action = 1] = "Action", SS[SS.Emote = 2] = "Emote", SS[SS.Custom = 3] = "Custom", SS
      }({}),
      xS = function(SS) {
        return SS[SS.Start = 0] = "Start", SS[SS.Stop = 1] = "Stop", SS
      }({})
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);