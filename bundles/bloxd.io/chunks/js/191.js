export const id = 191;
export const ids = [191];
export const modules = {
  41120: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(71),
      MT = cT(2770);

    function KT(TT, kT, cT) {
      const KT = (0, lT.useRef)(null),
        {
          width: OT,
          height: yT
        } = (0, MT.e)(TT);
      (0, lT.useEffect)((() => {
        const cT = kT(TT.current);
        return KT.current = cT, () => {
          cT.close(), KT.current = null
        }
      }), [TT, kT]), (0, lT.useEffect)((() => {
        OT <= 0 || yT <= 0 || KT.current.resize(OT, yT)
      }), [OT, yT]), (0, lT.useEffect)((() => {
        KT.current.show(cT)
      }), [cT])
    }
  },
  41128: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => CT,
      c: () => AT,
      g: () => fT
    });
    var lT = cT(36971),
      MT = cT(38478);

    function KT(TT, kT) {
      let [cT, lT, MT] = TT;
      return [0, .5, 1].map((TT => ({
        timeFraction: TT,
        rotation: {
          SM: "catmull-rom-spline",
          point: [cT, lT, MT + (.5 === TT ? kT : 0)]
        }
      })))
    }

    function OT(TT, kT, cT) {
      return {
        vM: 3200,
        loop: !0,
        hM: {
          Root: {
            timeline: [0, .5, 1].map((TT => ({
              timeFraction: TT,
              position: {
                SM: "catmull-rom-spline",
                point: [0, .5 === TT ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((TT => ({
              timeFraction: TT,
              rotation: {
                SM: "catmull-rom-spline",
                point: [0, .25 === TT ? .12 : .75 === TT ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: KT(TT, cT)
          },
          ArmRightMesh: {
            timeline: KT(kT, -cT)
          }
        }
      }
    }
    const yT = OT([0, 0, 0], [0, 0, 0], .07),
      fT = (0, MT.e)((0, lT.g)(yT), "mobIdle"),
      xT = OT([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      IT = OT([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      AT = (0, MT.e)((0, lT.g)(xT), "gunReady"),
      CT = (0, MT.e)((0, lT.g)(IT), "gunAimed")
  },
  38478: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      f: () => KT
    });
    const lT = new WeakMap;

    function MT(TT, kT) {
      return lT.set(TT, kT), TT
    }

    function KT(TT) {
      var kT;
      return null !== (kT = lT.get(TT)) && void 0 !== kT ? kT : null
    }
  },
  9403: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      d: () => MT,
      f: () => IT
    });
    var lT = cT(1578);

    function MT(TT) {
      var kT;
      return {
        ...OT.store,
        yaw: OT.store.yaw + (null !== (kT = lT.c[TT].previewYaw) && void 0 !== kT ? kT : 0)
      }
    }
    const KT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      OT = {
        player: KT,
        store: {
          ...KT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function yT(TT, kT) {
      TT instanceof Promise ? TT.then(kT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : kT(TT)
    }
    class fT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var kT;
        this.view = TT, null === (kT = this.opened) || void 0 === kT || kT.show(TT)
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class xT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, kT;
        return null !== (TT = null === (kT = this.opened) || void 0 === kT ? void 0 : kT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, kT) {
        var cT;
        null === (cT = this.opened) || void 0 === cT || cT.setCosmetic(TT, kT)
      }
      playEmote(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.playEmote(TT)
      }
      setOrbit(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.setOrbit(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var kT;
        await this.ready, await (null === (kT = this.opened) || void 0 === kT ? void 0 : kT.untilDrawn(TT))
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const IT = new class {
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
        return new fT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new fT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new fT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, kT) {
        return new xT(this.current().openCharacter(TT, kT))
      }
    }
  },
  9395: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.c,
      e: () => lT.d,
      f: () => lT.f
    });
    var lT = cT(9403);
    class MT {
      constructor(TT) {
        this.load = TT, this.loaded = null, this.loading = null
      }
      run(TT) {
        return null !== this.loaded ? TT(this.loaded) : (this.loading ??= this.load().then((TT => (this.loaded = TT, TT)), (TT => {
          throw this.loading = null, TT
        })), this.loading.then(TT))
      }
    }
    class KT {
      constructor() {
        this.mobScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT.e(75), cT.e(196), cT.e(216), cT.e(94), cT.e(220), cT.e(235), cT.e(113), cT.e(236), cT.e(74), cT.e(154)]).then((() => cT(40701))))), this.characterScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT.e(75), cT.e(196), cT.e(216), cT.e(94), cT.e(220), cT.e(235), cT.e(113), cT.e(236), cT.e(74), cT.e(153)]).then((() => cT(40795)))))
      }
      openMob(TT) {
        return this.mobScene.run((kT => kT.openMobPreview(TT)))
      }
      openPet(TT) {
        return this.mobScene.run((kT => kT.openPetPreview(TT)))
      }
      openMobLineup(TT) {
        return this.mobScene.run((kT => kT.openMobLineupPreview(TT)))
      }
      openCharacter(TT, kT) {
        return this.characterScene.run((cT => cT.openCharacterPreview(TT, kT)))
      }
    }
    lT.f.setDefaultHost((() => new KT))
  },
  41323: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      FrontlineMvpLineup: () => AT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(9395),
      yT = cT(41128),
      fT = cT(41120),
      xT = cT(1099);

    function IT(TT) {
      return OT.f.openMobLineup(TT)
    }
    const AT = (0, lT.memo)((function(TT) {
      let {
        players: kT,
        className: cT
      } = TT;
      const MT = (0, lT.useRef)(null),
        OT = (0, lT.useMemo)((() => kT.map((TT => {
          let {
            cosmetics: kT,
            size: cT,
            heldGun: lT
          } = TT;
          return {
            cosmetics: kT,
            size: cT,
            Gw: lT.name,
            animation: lT.aimed ? yT.b : yT.c
          }
        }))), [kT]),
        AT = function(TT) {
          const [kT, cT] = (0, lT.useState)([]);
          return (0, lT.useEffect)((() => {
            cT(TT.map((() => !1)));
            const kT = TT.map(((TT, kT) => {
              let {
                showAfterMs: lT
              } = TT;
              return window.setTimeout((() => {
                cT((TT => TT.map(((TT, cT) => TT || cT === kT))))
              }), lT)
            }));
            return () => {
              for (const TT of kT) window.clearTimeout(TT)
            }
          }), [TT]), kT
        }(kT),
        CT = (0, lT.useMemo)((() => ({
          figures: OT,
          shown: AT
        })), [OT, AT]);
      return (0, fT.d)(MT, IT, CT), (0, xT.jsx)("div", {
        className: KT()("MobPreview", cT),
        ref: MT
      })
    }))
  },
  36971: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      g: () => OT
    });
    var lT = cT(36955),
      MT = cT(339),
      KT = cT(1915);

    function OT(TT) {
      if ("vM" in TT) return FT.createAnimationScript(TT);
      return new xT(TT).createAnimationScript()
    }

    function yT(TT, kT, cT, MT) {
      const KT = TT.vM <= 0 ? 1 : kT + cT * Math.max(0, MT) / TT.vM;
      return TT.tM === lT.k.LoopOnLastFrame ? KT % 1 : TT.tM === lT.k.NoLoop && KT >= 1 ? null : Math.min(1, KT)
    }
    class fT {
      createAnimationScript(TT) {
        const {
          vM: kT,
          loop: cT,
          hM: lT
        } = TT;
        return {
          vM: Math.round(kT),
          tM: this.createLoopMode(null !== cT && void 0 !== cT && cT),
          hM: this.createNodeSkeletonAnimationScript(null !== lT && void 0 !== lT ? lT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return lT.k.NoLoop;
          case !0:
            return lT.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return lT.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const kT = {};
        for (const cT in TT) {
          const lT = TT[cT];
          kT[cT] = this.createNodeAnimationScript(lT)
        }
        return kT
      }
      createNodeAnimationScript(TT) {
        const {
          timeline: kT
        } = TT, cT = kT.filter((TT => Number.isFinite(TT.timeFraction)));
        return cT.sort(((TT, kT) => TT.timeFraction - kT.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(cT, "rotation", CT),
          position: this.createTimelineFromKeyframes(cT, "position", vT)
        }
      }
      createTimelineFromKeyframes(TT, kT, cT) {
        const lT = [];
        for (const fT of TT) {
          const TT = fT[kT];
          if (TT) {
            const kT = this.createAnimationFrameWithoutPrecomputes(fT.timeFraction, TT);
            IT(kT) && lT.push(kT)
          }
        }
        const MT = [];
        for (let fT = 0; fT < lT.length; fT++) {
          var KT, OT, yT;
          const TT = lT[fT],
            kT = null !== (KT = lT[fT - 1]) && void 0 !== KT ? KT : TT,
            xT = null !== (OT = lT[fT + 1]) && void 0 !== OT ? OT : TT,
            IT = null !== (yT = lT[fT + 2]) && void 0 !== yT ? yT : xT;
          MT.push({
            ...TT,
            ...cT(kT.post, kT.timeFraction, TT.post, TT.timeFraction, xT.pre, xT.timeFraction, IT.pre, IT.timeFraction)
          })
        }
        return MT
      }
      createAnimationFrameWithoutPrecomputes(TT, kT) {
        let cT, lT, MT = null;
        var KT;
        if ("object" === typeof kT && "point" in kT) MT = null !== (KT = kT.SM) && void 0 !== KT ? KT : null, cT = kT.point, lT = kT.point;
        else if ("object" === typeof kT && "pre" in kT) {
          var OT;
          MT = null !== (OT = kT.SM) && void 0 !== OT ? OT : null, cT = kT.pre, lT = kT.post
        } else cT = kT, lT = kT;
        return {
          timeFraction: TT,
          SM: this.createLerpMode(MT),
          pre: cT,
          post: lT
        }
      }
      createLerpMode(TT) {
        return null === TT ? lT.j.Linear : fT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }
    fT.LERP_MODE_SCHEMA_MAPPING = {
      linear: lT.j.Linear,
      "catmull-rom-spline": lT.j.CatmullRomSpline
    };
    class xT {
      constructor(TT) {
        this.animationSchema = TT
      }
      createAnimationScript() {
        const {
          animation_length: TT,
          loop: kT,
          bones: cT
        } = this.animationSchema;
        return {
          vM: Math.round(1e3 * TT),
          tM: this.createLoopMode(null !== kT && void 0 !== kT && kT),
          hM: this.createNodeSkeletonAnimationScript(null !== cT && void 0 !== cT ? cT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return lT.k.NoLoop;
          case !0:
            return lT.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return lT.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const kT = {};
        for (const cT in TT) {
          const lT = TT[cT];
          kT[cT] = this.createNodeAnimationScript(lT)
        }
        return kT
      }
      createNodeAnimationScript(TT) {
        const {
          rotation: kT,
          position: cT
        } = TT;
        return {
          rotation: this.createAnimationTimeline(null !== kT && void 0 !== kT ? kT : null, hT, CT, !0),
          position: this.createAnimationTimeline(null !== cT && void 0 !== cT ? cT : null, QT, vT, !1)
        }
      }
      createAnimationTimeline(TT, kT, cT, lT) {
        if (null === TT) return [];
        if (Array.isArray(TT)) {
          TT = {
            "0.0": TT
          }
        }
        const MT = Object.entries(TT).map((TT => {
          let [cT, lT] = TT;
          const MT = Number(cT) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(MT, lT, kT)
        })).filter(IT);
        MT.sort(((TT, kT) => TT.timeFraction - kT.timeFraction)), lT && function(TT) {
          for (let kT = 1; kT < TT.length; kT++) {
            const cT = TT[kT - 1].post,
              lT = TT[kT],
              MT = ST(lT.pre),
              KT = ST(lT.post),
              OT = aT(cT, lT.pre);
            aT(cT, MT) < OT && (TT[kT] = {
              ...lT,
              pre: MT,
              post: KT
            })
          }
        }(MT);
        const KT = [];
        for (let xT = 0; xT < MT.length; xT++) {
          var OT, yT, fT;
          const TT = MT[xT],
            kT = null !== (OT = MT[xT - 1]) && void 0 !== OT ? OT : TT,
            lT = null !== (yT = MT[xT + 1]) && void 0 !== yT ? yT : TT,
            IT = null !== (fT = MT[xT + 2]) && void 0 !== fT ? fT : lT;
          KT.push({
            ...TT,
            ...cT(kT.post, kT.timeFraction, TT.post, TT.timeFraction, lT.pre, lT.timeFraction, IT.pre, IT.timeFraction)
          })
        }
        return KT
      }
      createAnimationFrameWithoutPrecomputes(TT, kT, cT) {
        let lT, MT, KT = null;
        if ("object" === typeof kT && "post" in kT) {
          var OT;
          KT = null !== (OT = kT.lerp_mode) && void 0 !== OT ? OT : null, MT = tT(kT.post, cT), lT = kT.pre ? tT(kT.pre, cT) : MT
        } else {
          const TT = tT(kT, cT);
          MT = TT, lT = TT
        }
        return {
          timeFraction: TT,
          SM: this.createLerpMode(KT),
          pre: lT,
          post: MT
        }
      }
      createLerpMode(TT) {
        return null === TT ? lT.j.Linear : xT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }

    function IT(TT) {
      return Number.isFinite(TT.timeFraction) && AT(TT.pre) && AT(TT.post)
    }

    function AT(TT) {
      return Number.isFinite(TT[0]) && Number.isFinite(TT[1]) && Number.isFinite(TT[2])
    }

    function CT(TT, kT, cT, lT, MT, KT, OT, yT) {
      const fT = KT - kT,
        xT = KT - lT,
        IT = yT - lT,
        AT = [null, null, null];
      for (let CT = 0; CT < AT.length; CT++) AT[CT] = jT(TT[CT], cT[CT], MT[CT], OT[CT], fT, IT);
      return {
        DM: xT,
        aM: AT
      }
    }

    function jT(TT, kT, cT, lT, KT, OT) {
      return {
        rM: MT.d.computeShortestRotation(TT, cT) / KT,
        PM: MT.d.computeShortestRotation(kT, lT) / OT,
        delta: MT.d.computeShortestRotation(kT, cT)
      }
    }

    function vT(TT, kT, cT, lT, MT, KT, OT, yT) {
      const fT = KT - kT,
        xT = KT - lT,
        IT = yT - lT,
        AT = [null, null, null];
      for (let CT = 0; CT < AT.length; CT++) AT[CT] = {
        rM: (MT[CT] - TT[CT]) / fT,
        PM: (OT[CT] - cT[CT]) / IT,
        delta: MT[CT] - cT[CT]
      };
      return {
        DM: xT,
        aM: AT
      }
    }

    function tT(TT, kT) {
      return null === kT ? TT : kT(TT)
    }

    function hT(TT) {
      const [kT, cT, lT] = TT, OT = -(0, KT.k)(kT), yT = -(0, KT.k)(cT), fT = (0, KT.k)(lT), xT = MT.d.quaternionFromEulerZYX(OT, yT, fT);
      return MT.d.eulerYXZFromQuaternion(xT)
    }
    xT.LERP_MODE_SCHEMA_MAPPING = {
      linear: lT.j.Linear,
      catmullrom: lT.j.CatmullRomSpline
    };
    const NT = 1 / 16;

    function QT(TT) {
      return [-TT[0] * NT, TT[1] * NT, TT[2] * NT]
    }

    function ST(TT) {
      const [kT, cT, lT] = TT;
      return [kT >= 0 ? Math.PI - kT : -Math.PI - kT, DT(cT + Math.PI), DT(lT + Math.PI)]
    }

    function DT(TT) {
      return MT.d.mod(TT + Math.PI, 2 * Math.PI) - Math.PI
    }

    function aT(TT, kT) {
      return Math.abs(MT.d.computeShortestRotation(TT[0], kT[0])) + Math.abs(MT.d.computeShortestRotation(TT[1], kT[1])) + Math.abs(MT.d.computeShortestRotation(TT[2], kT[2]))
    }
    const FT = new fT
  },
  36955: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      g: () => KT,
      j: () => lT,
      k: () => MT
    });
    let lT = function(TT) {
        return TT[TT.Linear = 0] = "Linear", TT[TT.CatmullRomSpline = 1] = "CatmullRomSpline", TT
      }({}),
      MT = function(TT) {
        return TT[TT.NoLoop = 0] = "NoLoop", TT[TT.LoopOnLastFrame = 1] = "LoopOnLastFrame", TT[TT.HoldOnLastFrame = 2] = "HoldOnLastFrame", TT
      }({}),
      KT = function(TT) {
        return TT[TT.Movement = 0] = "Movement", TT[TT.Action = 1] = "Action", TT[TT.Emote = 2] = "Emote", TT[TT.Custom = 3] = "Custom", TT
      }({}),
      OT = function(TT) {
        return TT[TT.Start = 0] = "Start", TT[TT.Stop = 1] = "Stop", TT
      }({})
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);