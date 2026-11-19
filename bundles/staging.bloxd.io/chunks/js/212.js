export const id = 212;
export const ids = [212];
export const modules = {
  40587: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY
    });
    var FY = DY(61),
      AY = DY(2486);

    function IY(YY, rY, DY) {
      const IY = (0, FY.useRef)(null),
        {
          width: RY,
          height: OY
        } = (0, AY.d)(YY);
      (0, FY.useEffect)((() => {
        const DY = rY(YY.current);
        return IY.current = DY, () => {
          DY.close(), IY.current = null
        }
      }), [YY, rY]), (0, FY.useEffect)((() => {
        RY <= 0 || OY <= 0 || IY.current.resize(RY, OY)
      }), [RY, OY]), (0, FY.useEffect)((() => {
        IY.current.show(DY)
      }), [DY])
    }
  },
  40593: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      f: () => uY,
      j: () => gY
    });
    var FY = DY(36896),
      AY = DY(38003);

    function IY(YY, rY) {
      let [DY, FY, AY] = YY;
      return [0, .5, 1].map((YY => ({
        timeFraction: YY,
        rotation: {
          AA: "catmull-rom-spline",
          point: [DY, FY, AY + (.5 === YY ? rY : 0)]
        }
      })))
    }

    function RY(YY, rY, DY) {
      return {
        tF: 3200,
        loop: !0,
        rA: {
          Root: {
            timeline: [0, .5, 1].map((YY => ({
              timeFraction: YY,
              position: {
                AA: "catmull-rom-spline",
                point: [0, .5 === YY ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((YY => ({
              timeFraction: YY,
              rotation: {
                AA: "catmull-rom-spline",
                point: [0, .25 === YY ? .12 : .75 === YY ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: IY(YY, DY)
          },
          ArmRightMesh: {
            timeline: IY(rY, -DY)
          }
        }
      }
    }
    const OY = RY([0, 0, 0], [0, 0, 0], .07),
      gY = (0, AY.c)((0, FY.f)(OY), "mobIdle"),
      aY = RY([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      vY = RY([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      uY = (0, AY.c)((0, FY.f)(aY), "gunReady"),
      sY = (0, AY.c)((0, FY.f)(vY), "gunAimed")
  },
  38003: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      e: () => IY
    });
    const FY = new WeakMap;

    function AY(YY, rY) {
      return FY.set(YY, rY), YY
    }

    function IY(YY) {
      var rY;
      return null !== (rY = FY.get(YY)) && void 0 !== rY ? rY : null
    }
  },
  36231: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      c: () => gY
    });
    const FY = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      AY = {
        player: FY,
        store: {
          ...FY,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function IY(YY, rY) {
      YY instanceof Promise ? YY.then(rY).catch((YY => {
        console.error("Couldn't open the preview", YY)
      })) : rY(YY)
    }
    class RY {
      constructor(YY) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, IY(YY, (YY => {
          this.closed ? YY.close() : (this.opened = YY, null !== this.size && YY.resize(this.size.width, this.size.height), null !== this.view && YY.show(this.view))
        }))
      }
      show(YY) {
        var rY;
        this.view = YY, null === (rY = this.opened) || void 0 === rY || rY.show(YY)
      }
      resize(YY, rY) {
        var DY;
        this.size = {
          width: YY,
          height: rY
        }, null === (DY = this.opened) || void 0 === DY || DY.resize(YY, rY)
      }
      close() {
        var YY;
        this.closed = !0, null === (YY = this.opened) || void 0 === YY || YY.close(), this.opened = null
      }
    }
    class OY {
      constructor(YY) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(YY).then((YY => YY.ready)), IY(YY, (YY => {
          this.closed ? YY.close() : (this.opened = YY, null !== this.size && YY.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var YY, rY;
        return null !== (YY = null === (rY = this.opened) || void 0 === rY ? void 0 : rY.isReady()) && void 0 !== YY && YY
      }
      setCosmetic(YY, rY) {
        var DY;
        null === (DY = this.opened) || void 0 === DY || DY.setCosmetic(YY, rY)
      }
      playEmote(YY) {
        var rY;
        null === (rY = this.opened) || void 0 === rY || rY.playEmote(YY)
      }
      resetCamera() {
        var YY;
        null === (YY = this.opened) || void 0 === YY || YY.resetCamera()
      }
      async untilDrawn(YY) {
        var rY;
        await this.ready, await (null === (rY = this.opened) || void 0 === rY ? void 0 : rY.untilDrawn(YY))
      }
      resize(YY, rY) {
        var DY;
        this.size = {
          width: YY,
          height: rY
        }, null === (DY = this.opened) || void 0 === DY || DY.resize(YY, rY)
      }
      close() {
        var YY;
        this.closed = !0, null === (YY = this.opened) || void 0 === YY || YY.close(), this.opened = null
      }
    }
    const gY = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(YY) {
        this.host = YY
      }
      setDefaultHost(YY) {
        this.makeDefault = YY
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(YY) {
        return new RY(this.current().openMob(YY))
      }
      openPet(YY) {
        return new RY(this.current().openPet(YY))
      }
      openMobLineup(YY) {
        return new RY(this.current().openMobLineup(YY))
      }
      openCharacter(YY, rY) {
        return new OY(this.current().openCharacter(YY, rY))
      }
    }
  },
  36228: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY.c
    });
    var FY = DY(36231);
    class AY {
      constructor(YY) {
        this.load = YY, this.loaded = null, this.loading = null
      }
      run(YY) {
        return null !== this.loaded ? YY(this.loaded) : (this.loading ??= this.load().then((YY => (this.loaded = YY, YY)), (YY => {
          throw this.loading = null, YY
        })), this.loading.then(YY))
      }
    }
    class IY {
      constructor() {
        this.mobScene = new AY((() => Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(72), DY.e(71), DY.e(241), DY.e(70), DY.e(251), DY.e(245), DY.e(250), DY.e(248), DY.e(240), DY.e(214), DY.e(281), DY.e(219), DY.e(234), DY.e(246), DY.e(249), DY.e(74), DY.e(194), DY.e(215), DY.e(230), DY.e(114), DY.e(231), DY.e(73), DY.e(113), DY.e(282), DY.e(154)]).then((() => DY(40289))))), this.characterScene = new AY((() => Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(72), DY.e(71), DY.e(241), DY.e(70), DY.e(251), DY.e(245), DY.e(250), DY.e(248), DY.e(240), DY.e(214), DY.e(281), DY.e(219), DY.e(234), DY.e(246), DY.e(249), DY.e(74), DY.e(194), DY.e(215), DY.e(230), DY.e(114), DY.e(231), DY.e(73), DY.e(113), DY.e(282), DY.e(153)]).then((() => DY(40376)))))
      }
      openMob(YY) {
        return this.mobScene.run((rY => rY.openMobPreview(YY)))
      }
      openPet(YY) {
        return this.mobScene.run((rY => rY.openPetPreview(YY)))
      }
      openMobLineup(YY) {
        return this.mobScene.run((rY => rY.openMobLineupPreview(YY)))
      }
      openCharacter(YY, rY) {
        return this.characterScene.run((DY => DY.openCharacterPreview(YY, rY)))
      }
    }
    FY.c.setDefaultHost((() => new IY))
  },
  40815: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      FrontlineMvpLineup: () => uY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(36228),
      OY = DY(40593),
      gY = DY(40587),
      aY = DY(1125);

    function vY(YY) {
      return RY.b.openMobLineup(YY)
    }
    const uY = (0, FY.memo)((function(YY) {
      let {
        players: rY,
        className: DY
      } = YY;
      const AY = (0, FY.useRef)(null),
        RY = (0, FY.useMemo)((() => rY.map((YY => {
          let {
            cosmetics: rY,
            size: DY,
            heldGun: FY
          } = YY;
          return {
            cosmetics: rY,
            size: DY,
            RV: FY.name,
            animation: FY.aimed ? OY.d : OY.f
          }
        }))), [rY]),
        uY = function(YY) {
          const [rY, DY] = (0, FY.useState)([]);
          return (0, FY.useEffect)((() => {
            DY(YY.map((() => !1)));
            const rY = YY.map(((YY, rY) => {
              let {
                showAfterMs: FY
              } = YY;
              return window.setTimeout((() => {
                DY((YY => YY.map(((YY, DY) => YY || DY === rY))))
              }), FY)
            }));
            return () => {
              for (const YY of rY) window.clearTimeout(YY)
            }
          }), [YY]), rY
        }(rY),
        sY = (0, FY.useMemo)((() => ({
          figures: RY,
          shown: uY
        })), [RY, uY]);
      return (0, gY.b)(AY, vY, sY), (0, aY.jsx)("div", {
        className: IY()("MobPreview", DY),
        ref: AY
      })
    }))
  },
  36896: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY,
      f: () => RY
    });
    var FY = DY(36894),
      AY = DY(341),
      IY = DY(1774);

    function RY(YY) {
      if ("tF" in YY) return lY.createAnimationScript(YY);
      return new aY(YY).createAnimationScript()
    }

    function OY(YY, rY, DY, AY) {
      const IY = YY.tF <= 0 ? 1 : rY + DY * Math.max(0, AY) / YY.tF;
      return YY.YA === FY.l.LoopOnLastFrame ? IY % 1 : YY.YA === FY.l.NoLoop && IY >= 1 ? null : Math.min(1, IY)
    }
    class gY {
      createAnimationScript(YY) {
        const {
          tF: rY,
          loop: DY,
          rA: FY
        } = YY;
        return {
          tF: Math.round(rY),
          YA: this.createLoopMode(null !== DY && void 0 !== DY && DY),
          rA: this.createNodeSkeletonAnimationScript(null !== FY && void 0 !== FY ? FY : null)
        }
      }
      createLoopMode(YY) {
        switch (YY) {
          case !1:
            return FY.l.NoLoop;
          case !0:
            return FY.l.LoopOnLastFrame;
          case "hold-on-last-frame":
            return FY.l.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${YY}`)
      }
      createNodeSkeletonAnimationScript(YY) {
        if (null === YY) return null;
        const rY = {};
        for (const DY in YY) {
          const FY = YY[DY];
          rY[DY] = this.createNodeAnimationScript(FY)
        }
        return rY
      }
      createNodeAnimationScript(YY) {
        const {
          timeline: rY
        } = YY, DY = rY.filter((YY => Number.isFinite(YY.timeFraction)));
        return DY.sort(((YY, rY) => YY.timeFraction - rY.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(DY, "rotation", sY),
          position: this.createTimelineFromKeyframes(DY, "position", yY)
        }
      }
      createTimelineFromKeyframes(YY, rY, DY) {
        const FY = [];
        for (const gY of YY) {
          const YY = gY[rY];
          if (YY) {
            const rY = this.createAnimationFrameWithoutPrecomputes(gY.timeFraction, YY);
            vY(rY) && FY.push(rY)
          }
        }
        const AY = [];
        for (let gY = 0; gY < FY.length; gY++) {
          var IY, RY, OY;
          const YY = FY[gY],
            rY = null !== (IY = FY[gY - 1]) && void 0 !== IY ? IY : YY,
            aY = null !== (RY = FY[gY + 1]) && void 0 !== RY ? RY : YY,
            vY = null !== (OY = FY[gY + 2]) && void 0 !== OY ? OY : aY;
          AY.push({
            ...YY,
            ...DY(rY.post, rY.timeFraction, YY.post, YY.timeFraction, aY.pre, aY.timeFraction, vY.pre, vY.timeFraction)
          })
        }
        return AY
      }
      createAnimationFrameWithoutPrecomputes(YY, rY) {
        let DY, FY, AY = null;
        var IY;
        if ("object" === typeof rY && "point" in rY) AY = null !== (IY = rY.AA) && void 0 !== IY ? IY : null, DY = rY.point, FY = rY.point;
        else if ("object" === typeof rY && "pre" in rY) {
          var RY;
          AY = null !== (RY = rY.AA) && void 0 !== RY ? RY : null, DY = rY.pre, FY = rY.post
        } else DY = rY, FY = rY;
        return {
          timeFraction: YY,
          AA: this.createLerpMode(AY),
          pre: DY,
          post: FY
        }
      }
      createLerpMode(YY) {
        return null === YY ? FY.h.Linear : gY.LERP_MODE_SCHEMA_MAPPING[YY]
      }
    }
    gY.LERP_MODE_SCHEMA_MAPPING = {
      linear: FY.h.Linear,
      "catmull-rom-spline": FY.h.CatmullRomSpline
    };
    class aY {
      constructor(YY) {
        this.animationSchema = YY
      }
      createAnimationScript() {
        const {
          animation_length: YY,
          loop: rY,
          bones: DY
        } = this.animationSchema;
        return {
          tF: Math.round(1e3 * YY),
          YA: this.createLoopMode(null !== rY && void 0 !== rY && rY),
          rA: this.createNodeSkeletonAnimationScript(null !== DY && void 0 !== DY ? DY : null)
        }
      }
      createLoopMode(YY) {
        switch (YY) {
          case !1:
            return FY.l.NoLoop;
          case !0:
            return FY.l.LoopOnLastFrame;
          case "hold_on_last_frame":
            return FY.l.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${YY}`)
      }
      createNodeSkeletonAnimationScript(YY) {
        if (null === YY) return null;
        const rY = {};
        for (const DY in YY) {
          const FY = YY[DY];
          rY[DY] = this.createNodeAnimationScript(FY)
        }
        return rY
      }
      createNodeAnimationScript(YY) {
        const {
          rotation: rY,
          position: DY
        } = YY;
        return {
          rotation: this.createAnimationTimeline(null !== rY && void 0 !== rY ? rY : null, oY, sY, !0),
          position: this.createAnimationTimeline(null !== DY && void 0 !== DY ? DY : null, EY, yY, !1)
        }
      }
      createAnimationTimeline(YY, rY, DY, FY) {
        if (null === YY) return [];
        if (Array.isArray(YY)) {
          YY = {
            "0.0": YY
          }
        }
        const AY = Object.entries(YY).map((YY => {
          let [DY, FY] = YY;
          const AY = Number(DY) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(AY, FY, rY)
        })).filter(vY);
        AY.sort(((YY, rY) => YY.timeFraction - rY.timeFraction)), FY && function(YY) {
          for (let rY = 1; rY < YY.length; rY++) {
            const DY = YY[rY - 1].post,
              FY = YY[rY],
              AY = mY(FY.pre),
              IY = mY(FY.post),
              RY = SY(DY, FY.pre);
            SY(DY, AY) < RY && (YY[rY] = {
              ...FY,
              pre: AY,
              post: IY
            })
          }
        }(AY);
        const IY = [];
        for (let aY = 0; aY < AY.length; aY++) {
          var RY, OY, gY;
          const YY = AY[aY],
            rY = null !== (RY = AY[aY - 1]) && void 0 !== RY ? RY : YY,
            FY = null !== (OY = AY[aY + 1]) && void 0 !== OY ? OY : YY,
            vY = null !== (gY = AY[aY + 2]) && void 0 !== gY ? gY : FY;
          IY.push({
            ...YY,
            ...DY(rY.post, rY.timeFraction, YY.post, YY.timeFraction, FY.pre, FY.timeFraction, vY.pre, vY.timeFraction)
          })
        }
        return IY
      }
      createAnimationFrameWithoutPrecomputes(YY, rY, DY) {
        let FY, AY, IY = null;
        if ("object" === typeof rY && "post" in rY) {
          var RY;
          IY = null !== (RY = rY.lerp_mode) && void 0 !== RY ? RY : null, AY = QY(rY.post, DY), FY = rY.pre ? QY(rY.pre, DY) : AY
        } else {
          const YY = QY(rY, DY);
          AY = YY, FY = YY
        }
        return {
          timeFraction: YY,
          AA: this.createLerpMode(IY),
          pre: FY,
          post: AY
        }
      }
      createLerpMode(YY) {
        return null === YY ? FY.h.Linear : aY.LERP_MODE_SCHEMA_MAPPING[YY]
      }
    }

    function vY(YY) {
      return Number.isFinite(YY.timeFraction) && uY(YY.pre) && uY(YY.post)
    }

    function uY(YY) {
      return Number.isFinite(YY[0]) && Number.isFinite(YY[1]) && Number.isFinite(YY[2])
    }

    function sY(YY, rY, DY, FY, AY, IY, RY, OY) {
      const gY = IY - rY,
        aY = IY - FY,
        vY = OY - FY,
        uY = [null, null, null];
      for (let sY = 0; sY < uY.length; sY++) uY[sY] = iY(YY[sY], DY[sY], AY[sY], RY[sY], gY, vY);
      return {
        IA: aY,
        RA: uY
      }
    }

    function iY(YY, rY, DY, FY, IY, RY) {
      return {
        gA: AY.c.computeShortestRotation(YY, DY) / IY,
        aA: AY.c.computeShortestRotation(rY, FY) / RY,
        delta: AY.c.computeShortestRotation(rY, DY)
      }
    }

    function yY(YY, rY, DY, FY, AY, IY, RY, OY) {
      const gY = IY - rY,
        aY = IY - FY,
        vY = OY - FY,
        uY = [null, null, null];
      for (let sY = 0; sY < uY.length; sY++) uY[sY] = {
        gA: (AY[sY] - YY[sY]) / gY,
        aA: (RY[sY] - DY[sY]) / vY,
        delta: AY[sY] - DY[sY]
      };
      return {
        IA: aY,
        RA: uY
      }
    }

    function QY(YY, rY) {
      return null === rY ? YY : rY(YY)
    }

    function oY(YY) {
      const [rY, DY, FY] = YY, RY = -(0, IY.q)(rY), OY = -(0, IY.q)(DY), gY = (0, IY.q)(FY), aY = AY.c.quaternionFromEulerZYX(RY, OY, gY);
      return AY.c.eulerYXZFromQuaternion(aY)
    }
    aY.LERP_MODE_SCHEMA_MAPPING = {
      linear: FY.h.Linear,
      catmullrom: FY.h.CatmullRomSpline
    };
    const WY = 1 / 16;

    function EY(YY) {
      return [-YY[0] * WY, YY[1] * WY, YY[2] * WY]
    }

    function mY(YY) {
      const [rY, DY, FY] = YY;
      return [rY >= 0 ? Math.PI - rY : -Math.PI - rY, VY(DY + Math.PI), VY(FY + Math.PI)]
    }

    function VY(YY) {
      return AY.c.mod(YY + Math.PI, 2 * Math.PI) - Math.PI
    }

    function SY(YY, rY) {
      return Math.abs(AY.c.computeShortestRotation(YY[0], rY[0])) + Math.abs(AY.c.computeShortestRotation(YY[1], rY[1])) + Math.abs(AY.c.computeShortestRotation(YY[2], rY[2]))
    }
    const lY = new gY
  },
  36894: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      d: () => IY,
      h: () => FY,
      l: () => AY
    });
    let FY = function(YY) {
        return YY[YY.Linear = 0] = "Linear", YY[YY.CatmullRomSpline = 1] = "CatmullRomSpline", YY
      }({}),
      AY = function(YY) {
        return YY[YY.NoLoop = 0] = "NoLoop", YY[YY.LoopOnLastFrame = 1] = "LoopOnLastFrame", YY[YY.HoldOnLastFrame = 2] = "HoldOnLastFrame", YY
      }({}),
      IY = function(YY) {
        return YY[YY.Movement = 0] = "Movement", YY[YY.Action = 1] = "Action", YY[YY.Emote = 2] = "Emote", YY[YY.Custom = 3] = "Custom", YY
      }({}),
      RY = function(YY) {
        return YY[YY.Start = 0] = "Start", YY[YY.Stop = 1] = "Stop", YY
      }({})
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);