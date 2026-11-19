export const id = 212;
export const ids = [212];
export const modules = {
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
  37629: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      g: () => kT
    });
    const iT = new WeakMap;

    function zT(TT, oT) {
      return iT.set(TT, oT), TT
    }

    function kT(TT) {
      var oT;
      return null !== (oT = iT.get(TT)) && void 0 !== oT ? oT : null
    }
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
  },
  40583: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      FrontlineMvpLineup: () => DT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(35795),
      XT = IT(40352),
      BT = IT(40345),
      FT = IT(1083);

    function ST(TT) {
      return WT.b.openMobLineup(TT)
    }
    const DT = (0, iT.memo)((function(TT) {
      let {
        players: oT,
        className: IT
      } = TT;
      const zT = (0, iT.useRef)(null),
        WT = (0, iT.useMemo)((() => oT.map((TT => {
          let {
            cosmetics: oT,
            size: IT,
            heldGun: iT
          } = TT;
          return {
            cosmetics: oT,
            size: IT,
            Tu: iT.name,
            animation: iT.aimed ? XT.c : XT.e
          }
        }))), [oT]),
        DT = function(TT) {
          const [oT, IT] = (0, iT.useState)([]);
          return (0, iT.useEffect)((() => {
            IT(TT.map((() => !1)));
            const oT = TT.map(((TT, oT) => {
              let {
                showAfterMs: iT
              } = TT;
              return window.setTimeout((() => {
                IT((TT => TT.map(((TT, IT) => TT || IT === oT))))
              }), iT)
            }));
            return () => {
              for (const TT of oT) window.clearTimeout(TT)
            }
          }), [TT]), oT
        }(oT),
        LT = (0, iT.useMemo)((() => ({
          figures: WT,
          shown: DT
        })), [WT, DT]);
      return (0, BT.c)(zT, ST, LT), (0, FT.jsx)("div", {
        className: kT()("MobPreview", IT),
        ref: zT
      })
    }))
  },
  36510: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      e: () => WT
    });
    var iT = IT(36501),
      zT = IT(314),
      kT = IT(1724);

    function WT(TT) {
      if ("xz" in TT) return mT.createAnimationScript(TT);
      return new FT(TT).createAnimationScript()
    }

    function XT(TT, oT, IT, zT) {
      const kT = TT.xz <= 0 ? 1 : oT + IT * Math.max(0, zT) / TT.xz;
      return TT.Kz === iT.i.LoopOnLastFrame ? kT % 1 : TT.Kz === iT.i.NoLoop && kT >= 1 ? null : Math.min(1, kT)
    }
    class BT {
      createAnimationScript(TT) {
        const {
          xz: oT,
          loop: IT,
          Mz: iT
        } = TT;
        return {
          xz: Math.round(oT),
          Kz: this.createLoopMode(null !== IT && void 0 !== IT && IT),
          Mz: this.createNodeSkeletonAnimationScript(null !== iT && void 0 !== iT ? iT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return iT.i.NoLoop;
          case !0:
            return iT.i.LoopOnLastFrame;
          case "hold-on-last-frame":
            return iT.i.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const oT = {};
        for (const IT in TT) {
          const iT = TT[IT];
          oT[IT] = this.createNodeAnimationScript(iT)
        }
        return oT
      }
      createNodeAnimationScript(TT) {
        const {
          timeline: oT
        } = TT, IT = oT.filter((TT => Number.isFinite(TT.timeFraction)));
        return IT.sort(((TT, oT) => TT.timeFraction - oT.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(IT, "rotation", LT),
          position: this.createTimelineFromKeyframes(IT, "position", cT)
        }
      }
      createTimelineFromKeyframes(TT, oT, IT) {
        const iT = [];
        for (const BT of TT) {
          const TT = BT[oT];
          if (TT) {
            const oT = this.createAnimationFrameWithoutPrecomputes(BT.timeFraction, TT);
            ST(oT) && iT.push(oT)
          }
        }
        const zT = [];
        for (let BT = 0; BT < iT.length; BT++) {
          var kT, WT, XT;
          const TT = iT[BT],
            oT = null !== (kT = iT[BT - 1]) && void 0 !== kT ? kT : TT,
            FT = null !== (WT = iT[BT + 1]) && void 0 !== WT ? WT : TT,
            ST = null !== (XT = iT[BT + 2]) && void 0 !== XT ? XT : FT;
          zT.push({
            ...TT,
            ...IT(oT.post, oT.timeFraction, TT.post, TT.timeFraction, FT.pre, FT.timeFraction, ST.pre, ST.timeFraction)
          })
        }
        return zT
      }
      createAnimationFrameWithoutPrecomputes(TT, oT) {
        let IT, iT, zT = null;
        var kT;
        if ("object" === typeof oT && "point" in oT) zT = null !== (kT = oT.gz) && void 0 !== kT ? kT : null, IT = oT.point, iT = oT.point;
        else if ("object" === typeof oT && "pre" in oT) {
          var WT;
          zT = null !== (WT = oT.gz) && void 0 !== WT ? WT : null, IT = oT.pre, iT = oT.post
        } else IT = oT, iT = oT;
        return {
          timeFraction: TT,
          gz: this.createLerpMode(zT),
          pre: IT,
          post: iT
        }
      }
      createLerpMode(TT) {
        return null === TT ? iT.h.Linear : BT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }
    BT.LERP_MODE_SCHEMA_MAPPING = {
      linear: iT.h.Linear,
      "catmull-rom-spline": iT.h.CatmullRomSpline
    };
    class FT {
      constructor(TT) {
        this.animationSchema = TT
      }
      createAnimationScript() {
        const {
          animation_length: TT,
          loop: oT,
          bones: IT
        } = this.animationSchema;
        return {
          xz: Math.round(1e3 * TT),
          Kz: this.createLoopMode(null !== oT && void 0 !== oT && oT),
          Mz: this.createNodeSkeletonAnimationScript(null !== IT && void 0 !== IT ? IT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return iT.i.NoLoop;
          case !0:
            return iT.i.LoopOnLastFrame;
          case "hold_on_last_frame":
            return iT.i.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const oT = {};
        for (const IT in TT) {
          const iT = TT[IT];
          oT[IT] = this.createNodeAnimationScript(iT)
        }
        return oT
      }
      createNodeAnimationScript(TT) {
        const {
          rotation: oT,
          position: IT
        } = TT;
        return {
          rotation: this.createAnimationTimeline(null !== oT && void 0 !== oT ? oT : null, MT, LT, !0),
          position: this.createAnimationTimeline(null !== IT && void 0 !== IT ? IT : null, AT, cT, !1)
        }
      }
      createAnimationTimeline(TT, oT, IT, iT) {
        if (null === TT) return [];
        if (Array.isArray(TT)) {
          TT = {
            "0.0": TT
          }
        }
        const zT = Object.entries(TT).map((TT => {
          let [IT, iT] = TT;
          const zT = Number(IT) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(zT, iT, oT)
        })).filter(ST);
        zT.sort(((TT, oT) => TT.timeFraction - oT.timeFraction)), iT && function(TT) {
          for (let oT = 1; oT < TT.length; oT++) {
            const IT = TT[oT - 1].post,
              iT = TT[oT],
              zT = gT(iT.pre),
              kT = gT(iT.post),
              WT = wT(IT, iT.pre);
            wT(IT, zT) < WT && (TT[oT] = {
              ...iT,
              pre: zT,
              post: kT
            })
          }
        }(zT);
        const kT = [];
        for (let FT = 0; FT < zT.length; FT++) {
          var WT, XT, BT;
          const TT = zT[FT],
            oT = null !== (WT = zT[FT - 1]) && void 0 !== WT ? WT : TT,
            iT = null !== (XT = zT[FT + 1]) && void 0 !== XT ? XT : TT,
            ST = null !== (BT = zT[FT + 2]) && void 0 !== BT ? BT : iT;
          kT.push({
            ...TT,
            ...IT(oT.post, oT.timeFraction, TT.post, TT.timeFraction, iT.pre, iT.timeFraction, ST.pre, ST.timeFraction)
          })
        }
        return kT
      }
      createAnimationFrameWithoutPrecomputes(TT, oT, IT) {
        let iT, zT, kT = null;
        if ("object" === typeof oT && "post" in oT) {
          var WT;
          kT = null !== (WT = oT.lerp_mode) && void 0 !== WT ? WT : null, zT = KT(oT.post, IT), iT = oT.pre ? KT(oT.pre, IT) : zT
        } else {
          const TT = KT(oT, IT);
          zT = TT, iT = TT
        }
        return {
          timeFraction: TT,
          gz: this.createLerpMode(kT),
          pre: iT,
          post: zT
        }
      }
      createLerpMode(TT) {
        return null === TT ? iT.h.Linear : FT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }

    function ST(TT) {
      return Number.isFinite(TT.timeFraction) && DT(TT.pre) && DT(TT.post)
    }

    function DT(TT) {
      return Number.isFinite(TT[0]) && Number.isFinite(TT[1]) && Number.isFinite(TT[2])
    }

    function LT(TT, oT, IT, iT, zT, kT, WT, XT) {
      const BT = kT - oT,
        FT = kT - iT,
        ST = XT - iT,
        DT = [null, null, null];
      for (let LT = 0; LT < DT.length; LT++) DT[LT] = xT(TT[LT], IT[LT], zT[LT], WT[LT], BT, ST);
      return {
        hz: FT,
        wz: DT
      }
    }

    function xT(TT, oT, IT, iT, kT, WT) {
      return {
        ez: zT.e.computeShortestRotation(TT, IT) / kT,
        Rz: zT.e.computeShortestRotation(oT, iT) / WT,
        delta: zT.e.computeShortestRotation(oT, IT)
      }
    }

    function cT(TT, oT, IT, iT, zT, kT, WT, XT) {
      const BT = kT - oT,
        FT = kT - iT,
        ST = XT - iT,
        DT = [null, null, null];
      for (let LT = 0; LT < DT.length; LT++) DT[LT] = {
        ez: (zT[LT] - TT[LT]) / BT,
        Rz: (WT[LT] - IT[LT]) / ST,
        delta: zT[LT] - IT[LT]
      };
      return {
        hz: FT,
        wz: DT
      }
    }

    function KT(TT, oT) {
      return null === oT ? TT : oT(TT)
    }

    function MT(TT) {
      const [oT, IT, iT] = TT, WT = -(0, kT.m)(oT), XT = -(0, kT.m)(IT), BT = (0, kT.m)(iT), FT = zT.e.quaternionFromEulerZYX(WT, XT, BT);
      return zT.e.eulerYXZFromQuaternion(FT)
    }
    FT.LERP_MODE_SCHEMA_MAPPING = {
      linear: iT.h.Linear,
      catmullrom: iT.h.CatmullRomSpline
    };
    const rT = 1 / 16;

    function AT(TT) {
      return [-TT[0] * rT, TT[1] * rT, TT[2] * rT]
    }

    function gT(TT) {
      const [oT, IT, iT] = TT;
      return [oT >= 0 ? Math.PI - oT : -Math.PI - oT, hT(IT + Math.PI), hT(iT + Math.PI)]
    }

    function hT(TT) {
      return zT.e.mod(TT + Math.PI, 2 * Math.PI) - Math.PI
    }

    function wT(TT, oT) {
      return Math.abs(zT.e.computeShortestRotation(TT[0], oT[0])) + Math.abs(zT.e.computeShortestRotation(TT[1], oT[1])) + Math.abs(zT.e.computeShortestRotation(TT[2], oT[2]))
    }
    const mT = new BT
  },
  36501: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      e: () => kT,
      h: () => iT,
      i: () => zT
    });
    let iT = function(TT) {
        return TT[TT.Linear = 0] = "Linear", TT[TT.CatmullRomSpline = 1] = "CatmullRomSpline", TT
      }({}),
      zT = function(TT) {
        return TT[TT.NoLoop = 0] = "NoLoop", TT[TT.LoopOnLastFrame = 1] = "LoopOnLastFrame", TT[TT.HoldOnLastFrame = 2] = "HoldOnLastFrame", TT
      }({}),
      kT = function(TT) {
        return TT[TT.Movement = 0] = "Movement", TT[TT.Action = 1] = "Action", TT[TT.Emote = 2] = "Emote", TT[TT.Custom = 3] = "Custom", TT
      }({}),
      WT = function(TT) {
        return TT[TT.Start = 0] = "Start", TT[TT.Stop = 1] = "Stop", TT
      }({})
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);