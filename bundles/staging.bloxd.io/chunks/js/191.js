export const id = 191;
export const ids = [191];
export const modules = {
  40909: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(56),
      pU = gU(2533);

    function EU(UU, RU, gU) {
      const EU = (0, tU.useRef)(null),
        {
          width: PU,
          height: TU
        } = (0, pU.d)(UU);
      (0, tU.useEffect)((() => {
        const gU = RU(UU.current);
        return EU.current = gU, () => {
          gU.close(), EU.current = null
        }
      }), [UU, RU]), (0, tU.useEffect)((() => {
        PU <= 0 || TU <= 0 || EU.current.resize(PU, TU)
      }), [PU, TU]), (0, tU.useEffect)((() => {
        EU.current.show(gU)
      }), [gU])
    }
  },
  40913: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => jU,
      f: () => GU,
      h: () => qU
    });
    var tU = gU(36664),
      pU = gU(38186);

    function EU(UU, RU) {
      let [gU, tU, pU] = UU;
      return [0, .5, 1].map((UU => ({
        timeFraction: UU,
        rotation: {
          nE: "catmull-rom-spline",
          point: [gU, tU, pU + (.5 === UU ? RU : 0)]
        }
      })))
    }

    function PU(UU, RU, gU) {
      return {
        xE: 3200,
        loop: !0,
        IE: {
          Root: {
            timeline: [0, .5, 1].map((UU => ({
              timeFraction: UU,
              position: {
                nE: "catmull-rom-spline",
                point: [0, .5 === UU ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((UU => ({
              timeFraction: UU,
              rotation: {
                nE: "catmull-rom-spline",
                point: [0, .25 === UU ? .12 : .75 === UU ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: EU(UU, gU)
          },
          ArmRightMesh: {
            timeline: EU(RU, -gU)
          }
        }
      }
    }
    const TU = PU([0, 0, 0], [0, 0, 0], .07),
      qU = (0, pU.d)((0, tU.f)(TU), "mobIdle"),
      KU = PU([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      cU = PU([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      GU = (0, pU.d)((0, tU.f)(KU), "gunReady"),
      jU = (0, pU.d)((0, tU.f)(cU), "gunAimed")
  },
  38186: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      e: () => EU
    });
    const tU = new WeakMap;

    function pU(UU, RU) {
      return tU.set(UU, RU), UU
    }

    function EU(UU) {
      var RU;
      return null !== (RU = tU.get(UU)) && void 0 !== RU ? RU : null
    }
  },
  9030: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      h: () => pU,
      i: () => cU
    });
    var tU = gU(1517);

    function pU(UU) {
      var RU;
      return {
        ...PU.store,
        yaw: PU.store.yaw + (null !== (RU = tU.d[UU].previewYaw) && void 0 !== RU ? RU : 0)
      }
    }
    const EU = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      PU = {
        player: EU,
        store: {
          ...EU,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function TU(UU, RU) {
      UU instanceof Promise ? UU.then(RU).catch((UU => {
        console.error("Couldn't open the preview", UU)
      })) : RU(UU)
    }
    class qU {
      constructor(UU) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
        }))
      }
      show(UU) {
        var RU;
        this.view = UU, null === (RU = this.opened) || void 0 === RU || RU.show(UU)
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    class KU {
      constructor(UU) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(UU).then((UU => UU.ready)), TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var UU, RU;
        return null !== (UU = null === (RU = this.opened) || void 0 === RU ? void 0 : RU.isReady()) && void 0 !== UU && UU
      }
      setCosmetic(UU, RU) {
        var gU;
        null === (gU = this.opened) || void 0 === gU || gU.setCosmetic(UU, RU)
      }
      playEmote(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.playEmote(UU)
      }
      setOrbit(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.setOrbit(UU)
      }
      resetCamera() {
        var UU;
        null === (UU = this.opened) || void 0 === UU || UU.resetCamera()
      }
      async untilDrawn(UU) {
        var RU;
        await this.ready, await (null === (RU = this.opened) || void 0 === RU ? void 0 : RU.untilDrawn(UU))
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    const cU = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(UU) {
        this.host = UU
      }
      setDefaultHost(UU) {
        this.makeDefault = UU
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(UU) {
        return new qU(this.current().openMob(UU))
      }
      openPet(UU) {
        return new qU(this.current().openPet(UU))
      }
      openMobLineup(UU) {
        return new qU(this.current().openMobLineup(UU))
      }
      openCharacter(UU, RU) {
        return new KU(this.current().openCharacter(UU, RU))
      }
    }
  },
  9027: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU.e,
      f: () => tU.h,
      g: () => tU.i
    });
    var tU = gU(9030);
    class pU {
      constructor(UU) {
        this.load = UU, this.loaded = null, this.loading = null
      }
      run(UU) {
        return null !== this.loaded ? UU(this.loaded) : (this.loading ??= this.load().then((UU => (this.loaded = UU, UU)), (UU => {
          throw this.loading = null, UU
        })), this.loading.then(UU))
      }
    }
    class EU {
      constructor() {
        this.mobScene = new pU((() => Promise.all([gU.e(69), gU.e(226), gU.e(225), gU.e(244), gU.e(94), gU.e(245), gU.e(72), gU.e(71), gU.e(242), gU.e(70), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(218), gU.e(264), gU.e(222), gU.e(236), gU.e(247), gU.e(250), gU.e(74), gU.e(196), gU.e(215), gU.e(219), gU.e(93), gU.e(113), gU.e(234), gU.e(73), gU.e(112), gU.e(153)]).then((() => gU(40461))))), this.characterScene = new pU((() => Promise.all([gU.e(69), gU.e(226), gU.e(225), gU.e(244), gU.e(94), gU.e(245), gU.e(72), gU.e(71), gU.e(242), gU.e(70), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(218), gU.e(264), gU.e(222), gU.e(236), gU.e(247), gU.e(250), gU.e(74), gU.e(196), gU.e(215), gU.e(219), gU.e(93), gU.e(113), gU.e(234), gU.e(73), gU.e(112), gU.e(152)]).then((() => gU(40554)))))
      }
      openMob(UU) {
        return this.mobScene.run((RU => RU.openMobPreview(UU)))
      }
      openPet(UU) {
        return this.mobScene.run((RU => RU.openPetPreview(UU)))
      }
      openMobLineup(UU) {
        return this.mobScene.run((RU => RU.openMobLineupPreview(UU)))
      }
      openCharacter(UU, RU) {
        return this.characterScene.run((gU => gU.openCharacterPreview(UU, RU)))
      }
    }
    tU.i.setDefaultHost((() => new EU))
  },
  41107: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      FrontlineMvpLineup: () => GU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(9027),
      TU = gU(40913),
      qU = gU(40909),
      KU = gU(1090);

    function cU(UU) {
      return PU.g.openMobLineup(UU)
    }
    const GU = (0, tU.memo)((function(UU) {
      let {
        players: RU,
        className: gU
      } = UU;
      const pU = (0, tU.useRef)(null),
        PU = (0, tU.useMemo)((() => RU.map((UU => {
          let {
            cosmetics: RU,
            size: gU,
            heldGun: tU
          } = UU;
          return {
            cosmetics: RU,
            size: gU,
            yI: tU.name,
            animation: tU.aimed ? TU.c : TU.f
          }
        }))), [RU]),
        GU = function(UU) {
          const [RU, gU] = (0, tU.useState)([]);
          return (0, tU.useEffect)((() => {
            gU(UU.map((() => !1)));
            const RU = UU.map(((UU, RU) => {
              let {
                showAfterMs: tU
              } = UU;
              return window.setTimeout((() => {
                gU((UU => UU.map(((UU, gU) => UU || gU === RU))))
              }), tU)
            }));
            return () => {
              for (const UU of RU) window.clearTimeout(UU)
            }
          }), [UU]), RU
        }(RU),
        jU = (0, tU.useMemo)((() => ({
          figures: PU,
          shown: GU
        })), [PU, GU]);
      return (0, qU.c)(pU, cU, jU), (0, KU.jsx)("div", {
        className: EU()("MobPreview", gU),
        ref: pU
      })
    }))
  },
  36664: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      f: () => PU
    });
    var tU = gU(36651),
      pU = gU(311),
      EU = gU(1771);

    function PU(UU) {
      if ("xE" in UU) return IU.createAnimationScript(UU);
      return new KU(UU).createAnimationScript()
    }

    function TU(UU, RU, gU, pU) {
      const EU = UU.xE <= 0 ? 1 : RU + gU * Math.max(0, pU) / UU.xE;
      return UU.mE === tU.k.LoopOnLastFrame ? EU % 1 : UU.mE === tU.k.NoLoop && EU >= 1 ? null : Math.min(1, EU)
    }
    class qU {
      createAnimationScript(UU) {
        const {
          xE: RU,
          loop: gU,
          IE: tU
        } = UU;
        return {
          xE: Math.round(RU),
          mE: this.createLoopMode(null !== gU && void 0 !== gU && gU),
          IE: this.createNodeSkeletonAnimationScript(null !== tU && void 0 !== tU ? tU : null)
        }
      }
      createLoopMode(UU) {
        switch (UU) {
          case !1:
            return tU.k.NoLoop;
          case !0:
            return tU.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return tU.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${UU}`)
      }
      createNodeSkeletonAnimationScript(UU) {
        if (null === UU) return null;
        const RU = {};
        for (const gU in UU) {
          const tU = UU[gU];
          RU[gU] = this.createNodeAnimationScript(tU)
        }
        return RU
      }
      createNodeAnimationScript(UU) {
        const {
          timeline: RU
        } = UU, gU = RU.filter((UU => Number.isFinite(UU.timeFraction)));
        return gU.sort(((UU, RU) => UU.timeFraction - RU.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(gU, "rotation", jU),
          position: this.createTimelineFromKeyframes(gU, "position", CU)
        }
      }
      createTimelineFromKeyframes(UU, RU, gU) {
        const tU = [];
        for (const qU of UU) {
          const UU = qU[RU];
          if (UU) {
            const RU = this.createAnimationFrameWithoutPrecomputes(qU.timeFraction, UU);
            cU(RU) && tU.push(RU)
          }
        }
        const pU = [];
        for (let qU = 0; qU < tU.length; qU++) {
          var EU, PU, TU;
          const UU = tU[qU],
            RU = null !== (EU = tU[qU - 1]) && void 0 !== EU ? EU : UU,
            KU = null !== (PU = tU[qU + 1]) && void 0 !== PU ? PU : UU,
            cU = null !== (TU = tU[qU + 2]) && void 0 !== TU ? TU : KU;
          pU.push({
            ...UU,
            ...gU(RU.post, RU.timeFraction, UU.post, UU.timeFraction, KU.pre, KU.timeFraction, cU.pre, cU.timeFraction)
          })
        }
        return pU
      }
      createAnimationFrameWithoutPrecomputes(UU, RU) {
        let gU, tU, pU = null;
        var EU;
        if ("object" === typeof RU && "point" in RU) pU = null !== (EU = RU.nE) && void 0 !== EU ? EU : null, gU = RU.point, tU = RU.point;
        else if ("object" === typeof RU && "pre" in RU) {
          var PU;
          pU = null !== (PU = RU.nE) && void 0 !== PU ? PU : null, gU = RU.pre, tU = RU.post
        } else gU = RU, tU = RU;
        return {
          timeFraction: UU,
          nE: this.createLerpMode(pU),
          pre: gU,
          post: tU
        }
      }
      createLerpMode(UU) {
        return null === UU ? tU.h.Linear : qU.LERP_MODE_SCHEMA_MAPPING[UU]
      }
    }
    qU.LERP_MODE_SCHEMA_MAPPING = {
      linear: tU.h.Linear,
      "catmull-rom-spline": tU.h.CatmullRomSpline
    };
    class KU {
      constructor(UU) {
        this.animationSchema = UU
      }
      createAnimationScript() {
        const {
          animation_length: UU,
          loop: RU,
          bones: gU
        } = this.animationSchema;
        return {
          xE: Math.round(1e3 * UU),
          mE: this.createLoopMode(null !== RU && void 0 !== RU && RU),
          IE: this.createNodeSkeletonAnimationScript(null !== gU && void 0 !== gU ? gU : null)
        }
      }
      createLoopMode(UU) {
        switch (UU) {
          case !1:
            return tU.k.NoLoop;
          case !0:
            return tU.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return tU.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${UU}`)
      }
      createNodeSkeletonAnimationScript(UU) {
        if (null === UU) return null;
        const RU = {};
        for (const gU in UU) {
          const tU = UU[gU];
          RU[gU] = this.createNodeAnimationScript(tU)
        }
        return RU
      }
      createNodeAnimationScript(UU) {
        const {
          rotation: RU,
          position: gU
        } = UU;
        return {
          rotation: this.createAnimationTimeline(null !== RU && void 0 !== RU ? RU : null, QU, jU, !0),
          position: this.createAnimationTimeline(null !== gU && void 0 !== gU ? gU : null, WU, CU, !1)
        }
      }
      createAnimationTimeline(UU, RU, gU, tU) {
        if (null === UU) return [];
        if (Array.isArray(UU)) {
          UU = {
            "0.0": UU
          }
        }
        const pU = Object.entries(UU).map((UU => {
          let [gU, tU] = UU;
          const pU = Number(gU) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(pU, tU, RU)
        })).filter(cU);
        pU.sort(((UU, RU) => UU.timeFraction - RU.timeFraction)), tU && function(UU) {
          for (let RU = 1; RU < UU.length; RU++) {
            const gU = UU[RU - 1].post,
              tU = UU[RU],
              pU = fU(tU.pre),
              EU = fU(tU.post),
              PU = mU(gU, tU.pre);
            mU(gU, pU) < PU && (UU[RU] = {
              ...tU,
              pre: pU,
              post: EU
            })
          }
        }(pU);
        const EU = [];
        for (let KU = 0; KU < pU.length; KU++) {
          var PU, TU, qU;
          const UU = pU[KU],
            RU = null !== (PU = pU[KU - 1]) && void 0 !== PU ? PU : UU,
            tU = null !== (TU = pU[KU + 1]) && void 0 !== TU ? TU : UU,
            cU = null !== (qU = pU[KU + 2]) && void 0 !== qU ? qU : tU;
          EU.push({
            ...UU,
            ...gU(RU.post, RU.timeFraction, UU.post, UU.timeFraction, tU.pre, tU.timeFraction, cU.pre, cU.timeFraction)
          })
        }
        return EU
      }
      createAnimationFrameWithoutPrecomputes(UU, RU, gU) {
        let tU, pU, EU = null;
        if ("object" === typeof RU && "post" in RU) {
          var PU;
          EU = null !== (PU = RU.lerp_mode) && void 0 !== PU ? PU : null, pU = hU(RU.post, gU), tU = RU.pre ? hU(RU.pre, gU) : pU
        } else {
          const UU = hU(RU, gU);
          pU = UU, tU = UU
        }
        return {
          timeFraction: UU,
          nE: this.createLerpMode(EU),
          pre: tU,
          post: pU
        }
      }
      createLerpMode(UU) {
        return null === UU ? tU.h.Linear : KU.LERP_MODE_SCHEMA_MAPPING[UU]
      }
    }

    function cU(UU) {
      return Number.isFinite(UU.timeFraction) && GU(UU.pre) && GU(UU.post)
    }

    function GU(UU) {
      return Number.isFinite(UU[0]) && Number.isFinite(UU[1]) && Number.isFinite(UU[2])
    }

    function jU(UU, RU, gU, tU, pU, EU, PU, TU) {
      const qU = EU - RU,
        KU = EU - tU,
        cU = TU - tU,
        GU = [null, null, null];
      for (let jU = 0; jU < GU.length; jU++) GU[jU] = uU(UU[jU], gU[jU], pU[jU], PU[jU], qU, cU);
      return {
        bE: KU,
        oE: GU
      }
    }

    function uU(UU, RU, gU, tU, EU, PU) {
      return {
        aE: pU.c.computeShortestRotation(UU, gU) / EU,
        YE: pU.c.computeShortestRotation(RU, tU) / PU,
        delta: pU.c.computeShortestRotation(RU, gU)
      }
    }

    function CU(UU, RU, gU, tU, pU, EU, PU, TU) {
      const qU = EU - RU,
        KU = EU - tU,
        cU = TU - tU,
        GU = [null, null, null];
      for (let jU = 0; jU < GU.length; jU++) GU[jU] = {
        aE: (pU[jU] - UU[jU]) / qU,
        YE: (PU[jU] - gU[jU]) / cU,
        delta: pU[jU] - gU[jU]
      };
      return {
        bE: KU,
        oE: GU
      }
    }

    function hU(UU, RU) {
      return null === RU ? UU : RU(UU)
    }

    function QU(UU) {
      const [RU, gU, tU] = UU, PU = -(0, EU.j)(RU), TU = -(0, EU.j)(gU), qU = (0, EU.j)(tU), KU = pU.c.quaternionFromEulerZYX(PU, TU, qU);
      return pU.c.eulerYXZFromQuaternion(KU)
    }
    KU.LERP_MODE_SCHEMA_MAPPING = {
      linear: tU.h.Linear,
      catmullrom: tU.h.CatmullRomSpline
    };
    const eU = 1 / 16;

    function WU(UU) {
      return [-UU[0] * eU, UU[1] * eU, UU[2] * eU]
    }

    function fU(UU) {
      const [RU, gU, tU] = UU;
      return [RU >= 0 ? Math.PI - RU : -Math.PI - RU, xU(gU + Math.PI), xU(tU + Math.PI)]
    }

    function xU(UU) {
      return pU.c.mod(UU + Math.PI, 2 * Math.PI) - Math.PI
    }

    function mU(UU, RU) {
      return Math.abs(pU.c.computeShortestRotation(UU[0], RU[0])) + Math.abs(pU.c.computeShortestRotation(UU[1], RU[1])) + Math.abs(pU.c.computeShortestRotation(UU[2], RU[2]))
    }
    const IU = new qU
  },
  36651: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      f: () => EU,
      h: () => tU,
      k: () => pU
    });
    let tU = function(UU) {
        return UU[UU.Linear = 0] = "Linear", UU[UU.CatmullRomSpline = 1] = "CatmullRomSpline", UU
      }({}),
      pU = function(UU) {
        return UU[UU.NoLoop = 0] = "NoLoop", UU[UU.LoopOnLastFrame = 1] = "LoopOnLastFrame", UU[UU.HoldOnLastFrame = 2] = "HoldOnLastFrame", UU
      }({}),
      EU = function(UU) {
        return UU[UU.Movement = 0] = "Movement", UU[UU.Action = 1] = "Action", UU[UU.Emote = 2] = "Emote", UU[UU.Custom = 3] = "Custom", UU
      }({}),
      PU = function(UU) {
        return UU[UU.Start = 0] = "Start", UU[UU.Stop = 1] = "Stop", UU
      }({})
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);