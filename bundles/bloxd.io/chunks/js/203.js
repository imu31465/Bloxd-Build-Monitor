export const id = 203;
export const ids = [203];
export const modules = {
  40259: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(2383);

    function eJ(JJ, cJ, ZJ) {
      const eJ = (0, FJ.useRef)(null),
        {
          width: XJ,
          height: AJ
        } = (0, UJ.d)(JJ);
      (0, FJ.useEffect)((() => {
        const ZJ = cJ(JJ.current);
        return eJ.current = ZJ, () => {
          ZJ.close(), eJ.current = null
        }
      }), [JJ, cJ]), (0, FJ.useEffect)((() => {
        XJ <= 0 || AJ <= 0 || eJ.current.resize(XJ, AJ)
      }), [XJ, AJ]), (0, FJ.useEffect)((() => {
        eJ.current.show(ZJ)
      }), [ZJ])
    }
  },
  40265: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => DJ,
      d: () => hJ,
      g: () => qJ
    });
    var FJ = ZJ(36562),
      UJ = ZJ(37623);

    function eJ(JJ, cJ) {
      let [ZJ, FJ, UJ] = JJ;
      return [0, .5, 1].map((JJ => ({
        timeFraction: JJ,
        rotation: {
          Hc: "catmull-rom-spline",
          point: [ZJ, FJ, UJ + (.5 === JJ ? cJ : 0)]
        }
      })))
    }

    function XJ(JJ, cJ, ZJ) {
      return {
        Ic: 3200,
        loop: !0,
        bc: {
          Root: {
            timeline: [0, .5, 1].map((JJ => ({
              timeFraction: JJ,
              position: {
                Hc: "catmull-rom-spline",
                point: [0, .5 === JJ ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((JJ => ({
              timeFraction: JJ,
              rotation: {
                Hc: "catmull-rom-spline",
                point: [0, .25 === JJ ? .12 : .75 === JJ ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: eJ(JJ, ZJ)
          },
          ArmRightMesh: {
            timeline: eJ(cJ, -ZJ)
          }
        }
      }
    }
    const AJ = XJ([0, 0, 0], [0, 0, 0], .07),
      qJ = (0, UJ.b)((0, FJ.g)(AJ), "mobIdle"),
      jJ = XJ([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      YJ = XJ([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      hJ = (0, UJ.b)((0, FJ.g)(jJ), "gunReady"),
      DJ = (0, UJ.b)((0, FJ.g)(YJ), "gunAimed")
  },
  37623: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      c: () => eJ
    });
    const FJ = new WeakMap;

    function UJ(JJ, cJ) {
      return FJ.set(JJ, cJ), JJ
    }

    function eJ(JJ) {
      var cJ;
      return null !== (cJ = FJ.get(JJ)) && void 0 !== cJ ? cJ : null
    }
  },
  35868: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      g: () => qJ
    });
    const FJ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      UJ = {
        player: FJ,
        store: {
          ...FJ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function eJ(JJ, cJ) {
      JJ instanceof Promise ? JJ.then(cJ).catch((JJ => {
        console.error("Couldn't open the preview", JJ)
      })) : cJ(JJ)
    }
    class XJ {
      constructor(JJ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, eJ(JJ, (JJ => {
          this.closed ? JJ.close() : (this.opened = JJ, null !== this.size && JJ.resize(this.size.width, this.size.height), null !== this.view && JJ.show(this.view))
        }))
      }
      show(JJ) {
        var cJ;
        this.view = JJ, null === (cJ = this.opened) || void 0 === cJ || cJ.show(JJ)
      }
      resize(JJ, cJ) {
        var ZJ;
        this.size = {
          width: JJ,
          height: cJ
        }, null === (ZJ = this.opened) || void 0 === ZJ || ZJ.resize(JJ, cJ)
      }
      close() {
        var JJ;
        this.closed = !0, null === (JJ = this.opened) || void 0 === JJ || JJ.close(), this.opened = null
      }
    }
    class AJ {
      constructor(JJ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(JJ).then((JJ => JJ.ready)), eJ(JJ, (JJ => {
          this.closed ? JJ.close() : (this.opened = JJ, null !== this.size && JJ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.opened) || void 0 === cJ ? void 0 : cJ.isReady()) && void 0 !== JJ && JJ
      }
      setCosmetic(JJ, cJ) {
        var ZJ;
        null === (ZJ = this.opened) || void 0 === ZJ || ZJ.setCosmetic(JJ, cJ)
      }
      playEmote(JJ) {
        var cJ;
        null === (cJ = this.opened) || void 0 === cJ || cJ.playEmote(JJ)
      }
      resetCamera() {
        var JJ;
        null === (JJ = this.opened) || void 0 === JJ || JJ.resetCamera()
      }
      async untilDrawn(JJ) {
        var cJ;
        await this.ready, await (null === (cJ = this.opened) || void 0 === cJ ? void 0 : cJ.untilDrawn(JJ))
      }
      resize(JJ, cJ) {
        var ZJ;
        this.size = {
          width: JJ,
          height: cJ
        }, null === (ZJ = this.opened) || void 0 === ZJ || ZJ.resize(JJ, cJ)
      }
      close() {
        var JJ;
        this.closed = !0, null === (JJ = this.opened) || void 0 === JJ || JJ.close(), this.opened = null
      }
    }
    const qJ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(JJ) {
        this.host = JJ
      }
      setDefaultHost(JJ) {
        this.makeDefault = JJ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(JJ) {
        return new XJ(this.current().openMob(JJ))
      }
      openPet(JJ) {
        return new XJ(this.current().openPet(JJ))
      }
      openMobLineup(JJ) {
        return new XJ(this.current().openMobLineup(JJ))
      }
      openCharacter(JJ, cJ) {
        return new AJ(this.current().openCharacter(JJ, cJ))
      }
    }
  },
  35860: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ.g
    });
    var FJ = ZJ(35868);
    class UJ {
      constructor(JJ) {
        this.load = JJ, this.loaded = null, this.loading = null
      }
      run(JJ) {
        return null !== this.loaded ? JJ(this.loaded) : (this.loading ??= this.load().then((JJ => (this.loaded = JJ, JJ)), (JJ => {
          throw this.loading = null, JJ
        })), this.loading.then(JJ))
      }
    }
    class eJ {
      constructor() {
        this.mobScene = new UJ((() => Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(67), ZJ.e(66), ZJ.e(232), ZJ.e(65), ZJ.e(242), ZJ.e(236), ZJ.e(241), ZJ.e(239), ZJ.e(231), ZJ.e(206), ZJ.e(271), ZJ.e(211), ZJ.e(225), ZJ.e(237), ZJ.e(240), ZJ.e(126), ZJ.e(185), ZJ.e(207), ZJ.e(222), ZJ.e(205), ZJ.e(106), ZJ.e(68), ZJ.e(272), ZJ.e(146)]).then((() => ZJ(39946))))), this.characterScene = new UJ((() => Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(67), ZJ.e(66), ZJ.e(232), ZJ.e(65), ZJ.e(242), ZJ.e(236), ZJ.e(241), ZJ.e(239), ZJ.e(231), ZJ.e(206), ZJ.e(271), ZJ.e(211), ZJ.e(225), ZJ.e(237), ZJ.e(240), ZJ.e(126), ZJ.e(185), ZJ.e(207), ZJ.e(222), ZJ.e(205), ZJ.e(106), ZJ.e(68), ZJ.e(272), ZJ.e(145)]).then((() => ZJ(40040)))))
      }
      openMob(JJ) {
        return this.mobScene.run((cJ => cJ.openMobPreview(JJ)))
      }
      openPet(JJ) {
        return this.mobScene.run((cJ => cJ.openPetPreview(JJ)))
      }
      openMobLineup(JJ) {
        return this.mobScene.run((cJ => cJ.openMobLineupPreview(JJ)))
      }
      openCharacter(JJ, cJ) {
        return this.characterScene.run((ZJ => ZJ.openCharacterPreview(JJ, cJ)))
      }
    }
    FJ.g.setDefaultHost((() => new eJ))
  },
  40464: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      FrontlineMvpLineup: () => hJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(35860),
      AJ = ZJ(40265),
      qJ = ZJ(40259),
      jJ = ZJ(990);

    function YJ(JJ) {
      return XJ.d.openMobLineup(JJ)
    }
    const hJ = (0, FJ.memo)((function(JJ) {
      let {
        players: cJ,
        className: ZJ
      } = JJ;
      const UJ = (0, FJ.useRef)(null),
        XJ = (0, FJ.useMemo)((() => cJ.map((JJ => {
          let {
            cosmetics: cJ,
            size: ZJ,
            heldGun: FJ
          } = JJ;
          return {
            cosmetics: cJ,
            size: ZJ,
            cV: FJ.name,
            animation: FJ.aimed ? AJ.c : AJ.d
          }
        }))), [cJ]),
        hJ = function(JJ) {
          const [cJ, ZJ] = (0, FJ.useState)([]);
          return (0, FJ.useEffect)((() => {
            ZJ(JJ.map((() => !1)));
            const cJ = JJ.map(((JJ, cJ) => {
              let {
                showAfterMs: FJ
              } = JJ;
              return window.setTimeout((() => {
                ZJ((JJ => JJ.map(((JJ, ZJ) => JJ || ZJ === cJ))))
              }), FJ)
            }));
            return () => {
              for (const JJ of cJ) window.clearTimeout(JJ)
            }
          }), [JJ]), cJ
        }(cJ),
        DJ = (0, FJ.useMemo)((() => ({
          figures: XJ,
          shown: hJ
        })), [XJ, hJ]);
      return (0, qJ.e)(UJ, YJ, DJ), (0, jJ.jsx)("div", {
        className: eJ()("MobPreview", ZJ),
        ref: UJ
      })
    }))
  },
  36562: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => AJ,
      g: () => XJ
    });
    var FJ = ZJ(36555),
      UJ = ZJ(235),
      eJ = ZJ(1671);

    function XJ(JJ) {
      if ("Ic" in JJ) return EJ.createAnimationScript(JJ);
      return new jJ(JJ).createAnimationScript()
    }

    function AJ(JJ, cJ, ZJ, UJ) {
      const eJ = JJ.Ic <= 0 ? 1 : cJ + ZJ * Math.max(0, UJ) / JJ.Ic;
      return JJ.Mc === FJ.n.LoopOnLastFrame ? eJ % 1 : JJ.Mc === FJ.n.NoLoop && eJ >= 1 ? null : Math.min(1, eJ)
    }
    class qJ {
      createAnimationScript(JJ) {
        const {
          Ic: cJ,
          loop: ZJ,
          bc: FJ
        } = JJ;
        return {
          Ic: Math.round(cJ),
          Mc: this.createLoopMode(null !== ZJ && void 0 !== ZJ && ZJ),
          bc: this.createNodeSkeletonAnimationScript(null !== FJ && void 0 !== FJ ? FJ : null)
        }
      }
      createLoopMode(JJ) {
        switch (JJ) {
          case !1:
            return FJ.n.NoLoop;
          case !0:
            return FJ.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return FJ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${JJ}`)
      }
      createNodeSkeletonAnimationScript(JJ) {
        if (null === JJ) return null;
        const cJ = {};
        for (const ZJ in JJ) {
          const FJ = JJ[ZJ];
          cJ[ZJ] = this.createNodeAnimationScript(FJ)
        }
        return cJ
      }
      createNodeAnimationScript(JJ) {
        const {
          timeline: cJ
        } = JJ, ZJ = cJ.filter((JJ => Number.isFinite(JJ.timeFraction)));
        return ZJ.sort(((JJ, cJ) => JJ.timeFraction - cJ.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(ZJ, "rotation", DJ),
          position: this.createTimelineFromKeyframes(ZJ, "position", nJ)
        }
      }
      createTimelineFromKeyframes(JJ, cJ, ZJ) {
        const FJ = [];
        for (const qJ of JJ) {
          const JJ = qJ[cJ];
          if (JJ) {
            const cJ = this.createAnimationFrameWithoutPrecomputes(qJ.timeFraction, JJ);
            YJ(cJ) && FJ.push(cJ)
          }
        }
        const UJ = [];
        for (let qJ = 0; qJ < FJ.length; qJ++) {
          var eJ, XJ, AJ;
          const JJ = FJ[qJ],
            cJ = null !== (eJ = FJ[qJ - 1]) && void 0 !== eJ ? eJ : JJ,
            jJ = null !== (XJ = FJ[qJ + 1]) && void 0 !== XJ ? XJ : JJ,
            YJ = null !== (AJ = FJ[qJ + 2]) && void 0 !== AJ ? AJ : jJ;
          UJ.push({
            ...JJ,
            ...ZJ(cJ.post, cJ.timeFraction, JJ.post, JJ.timeFraction, jJ.pre, jJ.timeFraction, YJ.pre, YJ.timeFraction)
          })
        }
        return UJ
      }
      createAnimationFrameWithoutPrecomputes(JJ, cJ) {
        let ZJ, FJ, UJ = null;
        var eJ;
        if ("object" === typeof cJ && "point" in cJ) UJ = null !== (eJ = cJ.Hc) && void 0 !== eJ ? eJ : null, ZJ = cJ.point, FJ = cJ.point;
        else if ("object" === typeof cJ && "pre" in cJ) {
          var XJ;
          UJ = null !== (XJ = cJ.Hc) && void 0 !== XJ ? XJ : null, ZJ = cJ.pre, FJ = cJ.post
        } else ZJ = cJ, FJ = cJ;
        return {
          timeFraction: JJ,
          Hc: this.createLerpMode(UJ),
          pre: ZJ,
          post: FJ
        }
      }
      createLerpMode(JJ) {
        return null === JJ ? FJ.j.Linear : qJ.LERP_MODE_SCHEMA_MAPPING[JJ]
      }
    }
    qJ.LERP_MODE_SCHEMA_MAPPING = {
      linear: FJ.j.Linear,
      "catmull-rom-spline": FJ.j.CatmullRomSpline
    };
    class jJ {
      constructor(JJ) {
        this.animationSchema = JJ
      }
      createAnimationScript() {
        const {
          animation_length: JJ,
          loop: cJ,
          bones: ZJ
        } = this.animationSchema;
        return {
          Ic: Math.round(1e3 * JJ),
          Mc: this.createLoopMode(null !== cJ && void 0 !== cJ && cJ),
          bc: this.createNodeSkeletonAnimationScript(null !== ZJ && void 0 !== ZJ ? ZJ : null)
        }
      }
      createLoopMode(JJ) {
        switch (JJ) {
          case !1:
            return FJ.n.NoLoop;
          case !0:
            return FJ.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return FJ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${JJ}`)
      }
      createNodeSkeletonAnimationScript(JJ) {
        if (null === JJ) return null;
        const cJ = {};
        for (const ZJ in JJ) {
          const FJ = JJ[ZJ];
          cJ[ZJ] = this.createNodeAnimationScript(FJ)
        }
        return cJ
      }
      createNodeAnimationScript(JJ) {
        const {
          rotation: cJ,
          position: ZJ
        } = JJ;
        return {
          rotation: this.createAnimationTimeline(null !== cJ && void 0 !== cJ ? cJ : null, fJ, DJ, !0),
          position: this.createAnimationTimeline(null !== ZJ && void 0 !== ZJ ? ZJ : null, rJ, nJ, !1)
        }
      }
      createAnimationTimeline(JJ, cJ, ZJ, FJ) {
        if (null === JJ) return [];
        if (Array.isArray(JJ)) {
          JJ = {
            "0.0": JJ
          }
        }
        const UJ = Object.entries(JJ).map((JJ => {
          let [ZJ, FJ] = JJ;
          const UJ = Number(ZJ) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(UJ, FJ, cJ)
        })).filter(YJ);
        UJ.sort(((JJ, cJ) => JJ.timeFraction - cJ.timeFraction)), FJ && function(JJ) {
          for (let cJ = 1; cJ < JJ.length; cJ++) {
            const ZJ = JJ[cJ - 1].post,
              FJ = JJ[cJ],
              UJ = vJ(FJ.pre),
              eJ = vJ(FJ.post),
              XJ = QJ(ZJ, FJ.pre);
            QJ(ZJ, UJ) < XJ && (JJ[cJ] = {
              ...FJ,
              pre: UJ,
              post: eJ
            })
          }
        }(UJ);
        const eJ = [];
        for (let jJ = 0; jJ < UJ.length; jJ++) {
          var XJ, AJ, qJ;
          const JJ = UJ[jJ],
            cJ = null !== (XJ = UJ[jJ - 1]) && void 0 !== XJ ? XJ : JJ,
            FJ = null !== (AJ = UJ[jJ + 1]) && void 0 !== AJ ? AJ : JJ,
            YJ = null !== (qJ = UJ[jJ + 2]) && void 0 !== qJ ? qJ : FJ;
          eJ.push({
            ...JJ,
            ...ZJ(cJ.post, cJ.timeFraction, JJ.post, JJ.timeFraction, FJ.pre, FJ.timeFraction, YJ.pre, YJ.timeFraction)
          })
        }
        return eJ
      }
      createAnimationFrameWithoutPrecomputes(JJ, cJ, ZJ) {
        let FJ, UJ, eJ = null;
        if ("object" === typeof cJ && "post" in cJ) {
          var XJ;
          eJ = null !== (XJ = cJ.lerp_mode) && void 0 !== XJ ? XJ : null, UJ = GJ(cJ.post, ZJ), FJ = cJ.pre ? GJ(cJ.pre, ZJ) : UJ
        } else {
          const JJ = GJ(cJ, ZJ);
          UJ = JJ, FJ = JJ
        }
        return {
          timeFraction: JJ,
          Hc: this.createLerpMode(eJ),
          pre: FJ,
          post: UJ
        }
      }
      createLerpMode(JJ) {
        return null === JJ ? FJ.j.Linear : jJ.LERP_MODE_SCHEMA_MAPPING[JJ]
      }
    }

    function YJ(JJ) {
      return Number.isFinite(JJ.timeFraction) && hJ(JJ.pre) && hJ(JJ.post)
    }

    function hJ(JJ) {
      return Number.isFinite(JJ[0]) && Number.isFinite(JJ[1]) && Number.isFinite(JJ[2])
    }

    function DJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
      const qJ = eJ - cJ,
        jJ = eJ - FJ,
        YJ = AJ - FJ,
        hJ = [null, null, null];
      for (let DJ = 0; DJ < hJ.length; DJ++) hJ[DJ] = sJ(JJ[DJ], ZJ[DJ], UJ[DJ], XJ[DJ], qJ, YJ);
      return {
        Pc: jJ,
        kc: hJ
      }
    }

    function sJ(JJ, cJ, ZJ, FJ, eJ, XJ) {
      return {
        zc: UJ.c.computeShortestRotation(JJ, ZJ) / eJ,
        Nc: UJ.c.computeShortestRotation(cJ, FJ) / XJ,
        delta: UJ.c.computeShortestRotation(cJ, ZJ)
      }
    }

    function nJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
      const qJ = eJ - cJ,
        jJ = eJ - FJ,
        YJ = AJ - FJ,
        hJ = [null, null, null];
      for (let DJ = 0; DJ < hJ.length; DJ++) hJ[DJ] = {
        zc: (UJ[DJ] - JJ[DJ]) / qJ,
        Nc: (XJ[DJ] - ZJ[DJ]) / YJ,
        delta: UJ[DJ] - ZJ[DJ]
      };
      return {
        Pc: jJ,
        kc: hJ
      }
    }

    function GJ(JJ, cJ) {
      return null === cJ ? JJ : cJ(JJ)
    }

    function fJ(JJ) {
      const [cJ, ZJ, FJ] = JJ, XJ = -(0, eJ.k)(cJ), AJ = -(0, eJ.k)(ZJ), qJ = (0, eJ.k)(FJ), jJ = UJ.c.quaternionFromEulerZYX(XJ, AJ, qJ);
      return UJ.c.eulerYXZFromQuaternion(jJ)
    }
    jJ.LERP_MODE_SCHEMA_MAPPING = {
      linear: FJ.j.Linear,
      catmullrom: FJ.j.CatmullRomSpline
    };
    const xJ = 1 / 16;

    function rJ(JJ) {
      return [-JJ[0] * xJ, JJ[1] * xJ, JJ[2] * xJ]
    }

    function vJ(JJ) {
      const [cJ, ZJ, FJ] = JJ;
      return [cJ >= 0 ? Math.PI - cJ : -Math.PI - cJ, mJ(ZJ + Math.PI), mJ(FJ + Math.PI)]
    }

    function mJ(JJ) {
      return UJ.c.mod(JJ + Math.PI, 2 * Math.PI) - Math.PI
    }

    function QJ(JJ, cJ) {
      return Math.abs(UJ.c.computeShortestRotation(JJ[0], cJ[0])) + Math.abs(UJ.c.computeShortestRotation(JJ[1], cJ[1])) + Math.abs(UJ.c.computeShortestRotation(JJ[2], cJ[2]))
    }
    const EJ = new qJ
  },
  36555: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      f: () => eJ,
      j: () => FJ,
      n: () => UJ
    });
    let FJ = function(JJ) {
        return JJ[JJ.Linear = 0] = "Linear", JJ[JJ.CatmullRomSpline = 1] = "CatmullRomSpline", JJ
      }({}),
      UJ = function(JJ) {
        return JJ[JJ.NoLoop = 0] = "NoLoop", JJ[JJ.LoopOnLastFrame = 1] = "LoopOnLastFrame", JJ[JJ.HoldOnLastFrame = 2] = "HoldOnLastFrame", JJ
      }({}),
      eJ = function(JJ) {
        return JJ[JJ.Movement = 0] = "Movement", JJ[JJ.Action = 1] = "Action", JJ[JJ.Emote = 2] = "Emote", JJ[JJ.Custom = 3] = "Custom", JJ
      }({}),
      XJ = function(JJ) {
        return JJ[JJ.Start = 0] = "Start", JJ[JJ.Stop = 1] = "Stop", JJ
      }({})
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);