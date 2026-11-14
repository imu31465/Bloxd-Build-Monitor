export const id = 196;
export const ids = [196];
export const modules = {
  39006: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR
    });
    var wW = MW(75),
      CW = MW(2135);

    function zR(WW, RW, MW) {
      const zR = (0, wW.useRef)(null),
        {
          width: AW,
          height: bR
        } = (0, CW.c)(WW);
      (0, wW.useEffect)((() => {
        const MW = RW(WW.current);
        return zR.current = MW, () => {
          MW.close(), zR.current = null
        }
      }), [WW, RW]), (0, wW.useEffect)((() => {
        AW <= 0 || bR <= 0 || zR.current.resize(AW, bR)
      }), [AW, bR]), (0, wW.useEffect)((() => {
        zR.current.show(MW)
      }), [MW])
    }
  },
  39013: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => tR,
      h: () => BW,
      l: () => yR
    });
    var wW = MW(35678),
      CW = MW(36680);

    function zR(WW, RW) {
      let [MW, wW, CW] = WW;
      return [0, .5, 1].map((WW => ({
        timeFraction: WW,
        rotation: {
          bRW: "catmull-rom-spline",
          point: [MW, wW, CW + (.5 === WW ? RW : 0)]
        }
      })))
    }

    function AW(WW, RW, MW) {
      return {
        wWW: 3200,
        loop: !0,
        zRW: {
          Root: {
            timeline: [0, .5, 1].map((WW => ({
              timeFraction: WW,
              position: {
                bRW: "catmull-rom-spline",
                point: [0, .5 === WW ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((WW => ({
              timeFraction: WW,
              rotation: {
                bRW: "catmull-rom-spline",
                point: [0, .25 === WW ? .12 : .75 === WW ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: zR(WW, MW)
          },
          ArmRightMesh: {
            timeline: zR(RW, -MW)
          }
        }
      }
    }
    const bR = AW([0, 0, 0], [0, 0, 0], .07),
      yR = (0, CW.e)((0, wW.h)(bR), "mobIdle"),
      NW = AW([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      eW = AW([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      BW = (0, CW.e)((0, wW.h)(NW), "gunReady"),
      tR = (0, CW.e)((0, wW.h)(eW), "gunAimed")
  },
  36680: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      h: () => zR
    });
    const wW = new WeakMap;

    function CW(WW, RW) {
      return wW.set(WW, RW), WW
    }

    function zR(WW) {
      var RW;
      return null !== (RW = wW.get(WW)) && void 0 !== RW ? RW : null
    }
  },
  35034: (WW, RW, MW) => {
    function wW(WW, RW) {
      WW instanceof Promise ? WW.then(RW).catch((WW => {
        console.error("Couldn't open the preview", WW)
      })) : RW(WW)
    }
    MW.d(RW, {
      b: () => AW
    });
    class CW {
      constructor(WW) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, wW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
        }))
      }
      show(WW) {
        var RW;
        this.view = WW, null === (RW = this.opened) || void 0 === RW || RW.show(WW)
      }
      resize(WW, RW) {
        var MW;
        this.size = {
          width: WW,
          height: RW
        }, null === (MW = this.opened) || void 0 === MW || MW.resize(WW, RW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    class zR {
      constructor(WW) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), wW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var WW, RW;
        return null !== (WW = null === (RW = this.opened) || void 0 === RW ? void 0 : RW.isReady()) && void 0 !== WW && WW
      }
      setCosmetic(WW, RW) {
        var MW;
        null === (MW = this.opened) || void 0 === MW || MW.setCosmetic(WW, RW)
      }
      playEmote(WW) {
        var RW;
        null === (RW = this.opened) || void 0 === RW || RW.playEmote(WW)
      }
      async untilDrawn(WW) {
        var RW;
        await this.ready, await (null === (RW = this.opened) || void 0 === RW ? void 0 : RW.untilDrawn(WW))
      }
      resize(WW, RW) {
        var MW;
        this.size = {
          width: WW,
          height: RW
        }, null === (MW = this.opened) || void 0 === MW || MW.resize(WW, RW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    const AW = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(WW) {
        this.host = WW
      }
      setDefaultHost(WW) {
        this.makeDefault = WW
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(WW) {
        return new CW(this.current().openMob(WW))
      }
      openPet(WW) {
        return new CW(this.current().openPet(WW))
      }
      openMobLineup(WW) {
        return new CW(this.current().openMobLineup(WW))
      }
      openCharacter(WW) {
        return new zR(this.current().openCharacter(WW))
      }
    }
  },
  35025: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW.b
    });
    var wW = MW(35034);
    class CW {
      constructor(WW) {
        this.load = WW, this.loaded = null, this.loading = null
      }
      run(WW) {
        return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
          throw this.loading = null, WW
        })), this.loading.then(WW))
      }
    }
    class zR {
      constructor() {
        this.mobScene = new CW((() => Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(62), MW.e(222), MW.e(60), MW.e(232), MW.e(226), MW.e(61), MW.e(231), MW.e(229), MW.e(221), MW.e(198), MW.e(261), MW.e(203), MW.e(216), MW.e(227), MW.e(230), MW.e(120), MW.e(178), MW.e(214), MW.e(199), MW.e(98), MW.e(97), MW.e(262), MW.e(142)]).then((() => MW(38676))))), this.characterScene = new CW((() => Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(62), MW.e(222), MW.e(60), MW.e(232), MW.e(226), MW.e(61), MW.e(231), MW.e(229), MW.e(221), MW.e(198), MW.e(261), MW.e(203), MW.e(216), MW.e(227), MW.e(230), MW.e(120), MW.e(178), MW.e(214), MW.e(199), MW.e(98), MW.e(97), MW.e(262), MW.e(141)]).then((() => MW(38768)))))
      }
      openMob(WW) {
        return this.mobScene.run((RW => RW.openMobPreview(WW)))
      }
      openPet(WW) {
        return this.mobScene.run((RW => RW.openPetPreview(WW)))
      }
      openMobLineup(WW) {
        return this.mobScene.run((RW => RW.openMobLineupPreview(WW)))
      }
      openCharacter(WW) {
        return this.characterScene.run((RW => RW.openCharacterPreview(WW)))
      }
    }
    wW.b.setDefaultHost((() => new zR))
  },
  39215: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      FrontlineMvpLineup: () => BW
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(35025),
      bR = MW(39013),
      yR = MW(39006),
      NW = MW(940);

    function eW(WW) {
      return AW.e.openMobLineup(WW)
    }
    const BW = (0, wW.memo)((function(WW) {
      let {
        players: RW,
        className: MW
      } = WW;
      const CW = (0, wW.useRef)(null),
        AW = (0, wW.useMemo)((() => RW.map((WW => {
          let {
            cosmetics: RW,
            size: MW,
            heldGun: wW
          } = WW;
          return {
            cosmetics: RW,
            size: MW,
            WJ: wW.name,
            animation: wW.aimed ? bR.d : bR.h
          }
        }))), [RW]),
        BW = function(WW) {
          const [RW, MW] = (0, wW.useState)([]);
          return (0, wW.useEffect)((() => {
            MW(WW.map((() => !1)));
            const RW = WW.map(((WW, RW) => {
              let {
                showAfterMs: wW
              } = WW;
              return window.setTimeout((() => {
                MW((WW => WW.map(((WW, MW) => WW || MW === RW))))
              }), wW)
            }));
            return () => {
              for (const WW of RW) window.clearTimeout(WW)
            }
          }), [WW]), RW
        }(RW),
        tR = (0, wW.useMemo)((() => ({
          figures: AW,
          shown: BW
        })), [AW, BW]);
      return (0, yR.d)(CW, eW, tR), (0, NW.jsx)("div", {
        className: zR()("MobPreview", MW),
        ref: CW
      })
    }))
  },
  35678: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR,
      h: () => AW
    });
    var wW = MW(35669),
      CW = MW(284),
      zR = MW(1050);

    function AW(WW) {
      if ("wWW" in WW) return FW.createAnimationScript(WW);
      return new NW(WW).createAnimationScript()
    }

    function bR(WW, RW, MW, CW) {
      const zR = WW.wWW <= 0 ? 1 : RW + MW * Math.max(0, CW) / WW.wWW;
      return WW.CWW === wW.h.LoopOnLastFrame ? zR % 1 : WW.CWW === wW.h.NoLoop && zR >= 1 ? null : Math.min(1, zR)
    }
    class yR {
      createAnimationScript(WW) {
        const {
          wWW: RW,
          loop: MW,
          zRW: wW
        } = WW;
        return {
          wWW: Math.round(RW),
          CWW: this.createLoopMode(null !== MW && void 0 !== MW && MW),
          zRW: this.createNodeSkeletonAnimationScript(null !== wW && void 0 !== wW ? wW : null)
        }
      }
      createLoopMode(WW) {
        switch (WW) {
          case !1:
            return wW.h.NoLoop;
          case !0:
            return wW.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return wW.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${WW}`)
      }
      createNodeSkeletonAnimationScript(WW) {
        if (null === WW) return null;
        const RW = {};
        for (const MW in WW) {
          const wW = WW[MW];
          RW[MW] = this.createNodeAnimationScript(wW)
        }
        return RW
      }
      createNodeAnimationScript(WW) {
        const {
          timeline: RW
        } = WW, MW = RW.filter((WW => Number.isFinite(WW.timeFraction)));
        return MW.sort(((WW, RW) => WW.timeFraction - RW.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(MW, "rotation", tR),
          position: this.createTimelineFromKeyframes(MW, "position", gR)
        }
      }
      createTimelineFromKeyframes(WW, RW, MW) {
        const wW = [];
        for (const yR of WW) {
          const WW = yR[RW];
          if (WW) {
            const RW = this.createAnimationFrameWithoutPrecomputes(yR.timeFraction, WW);
            eW(RW) && wW.push(RW)
          }
        }
        const CW = [];
        for (let yR = 0; yR < wW.length; yR++) {
          var zR, AW, bR;
          const WW = wW[yR],
            RW = null !== (zR = wW[yR - 1]) && void 0 !== zR ? zR : WW,
            NW = null !== (AW = wW[yR + 1]) && void 0 !== AW ? AW : WW,
            eW = null !== (bR = wW[yR + 2]) && void 0 !== bR ? bR : NW;
          CW.push({
            ...WW,
            ...MW(RW.post, RW.timeFraction, WW.post, WW.timeFraction, NW.pre, NW.timeFraction, eW.pre, eW.timeFraction)
          })
        }
        return CW
      }
      createAnimationFrameWithoutPrecomputes(WW, RW) {
        let MW, wW, CW = null;
        var zR;
        if ("object" === typeof RW && "point" in RW) CW = null !== (zR = RW.bRW) && void 0 !== zR ? zR : null, MW = RW.point, wW = RW.point;
        else if ("object" === typeof RW && "pre" in RW) {
          var AW;
          CW = null !== (AW = RW.bRW) && void 0 !== AW ? AW : null, MW = RW.pre, wW = RW.post
        } else MW = RW, wW = RW;
        return {
          timeFraction: WW,
          bRW: this.createLerpMode(CW),
          pre: MW,
          post: wW
        }
      }
      createLerpMode(WW) {
        return null === WW ? wW.g.Linear : yR.LERP_MODE_SCHEMA_MAPPING[WW]
      }
    }
    yR.LERP_MODE_SCHEMA_MAPPING = {
      linear: wW.g.Linear,
      "catmull-rom-spline": wW.g.CatmullRomSpline
    };
    class NW {
      constructor(WW) {
        this.animationSchema = WW
      }
      createAnimationScript() {
        const {
          animation_length: WW,
          loop: RW,
          bones: MW
        } = this.animationSchema;
        return {
          wWW: Math.round(1e3 * WW),
          CWW: this.createLoopMode(null !== RW && void 0 !== RW && RW),
          zRW: this.createNodeSkeletonAnimationScript(null !== MW && void 0 !== MW ? MW : null)
        }
      }
      createLoopMode(WW) {
        switch (WW) {
          case !1:
            return wW.h.NoLoop;
          case !0:
            return wW.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return wW.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${WW}`)
      }
      createNodeSkeletonAnimationScript(WW) {
        if (null === WW) return null;
        const RW = {};
        for (const MW in WW) {
          const wW = WW[MW];
          RW[MW] = this.createNodeAnimationScript(wW)
        }
        return RW
      }
      createNodeAnimationScript(WW) {
        const {
          rotation: RW,
          position: MW
        } = WW;
        return {
          rotation: this.createAnimationTimeline(null !== RW && void 0 !== RW ? RW : null, YW, tR, !0),
          position: this.createAnimationTimeline(null !== MW && void 0 !== MW ? MW : null, PW, gR, !1)
        }
      }
      createAnimationTimeline(WW, RW, MW, wW) {
        if (null === WW) return [];
        if (Array.isArray(WW)) {
          WW = {
            "0.0": WW
          }
        }
        const CW = Object.entries(WW).map((WW => {
          let [MW, wW] = WW;
          const CW = Number(MW) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(CW, wW, RW)
        })).filter(eW);
        CW.sort(((WW, RW) => WW.timeFraction - RW.timeFraction)), wW && function(WW) {
          for (let RW = 1; RW < WW.length; RW++) {
            const MW = WW[RW - 1].post,
              wW = WW[RW],
              CW = IW(wW.pre),
              zR = IW(wW.post),
              AW = lW(MW, wW.pre);
            lW(MW, CW) < AW && (WW[RW] = {
              ...wW,
              pre: CW,
              post: zR
            })
          }
        }(CW);
        const zR = [];
        for (let NW = 0; NW < CW.length; NW++) {
          var AW, bR, yR;
          const WW = CW[NW],
            RW = null !== (AW = CW[NW - 1]) && void 0 !== AW ? AW : WW,
            wW = null !== (bR = CW[NW + 1]) && void 0 !== bR ? bR : WW,
            eW = null !== (yR = CW[NW + 2]) && void 0 !== yR ? yR : wW;
          zR.push({
            ...WW,
            ...MW(RW.post, RW.timeFraction, WW.post, WW.timeFraction, wW.pre, wW.timeFraction, eW.pre, eW.timeFraction)
          })
        }
        return zR
      }
      createAnimationFrameWithoutPrecomputes(WW, RW, MW) {
        let wW, CW, zR = null;
        if ("object" === typeof RW && "post" in RW) {
          var AW;
          zR = null !== (AW = RW.lerp_mode) && void 0 !== AW ? AW : null, CW = iR(RW.post, MW), wW = RW.pre ? iR(RW.pre, MW) : CW
        } else {
          const WW = iR(RW, MW);
          CW = WW, wW = WW
        }
        return {
          timeFraction: WW,
          bRW: this.createLerpMode(zR),
          pre: wW,
          post: CW
        }
      }
      createLerpMode(WW) {
        return null === WW ? wW.g.Linear : NW.LERP_MODE_SCHEMA_MAPPING[WW]
      }
    }

    function eW(WW) {
      return Number.isFinite(WW.timeFraction) && BW(WW.pre) && BW(WW.post)
    }

    function BW(WW) {
      return Number.isFinite(WW[0]) && Number.isFinite(WW[1]) && Number.isFinite(WW[2])
    }

    function tR(WW, RW, MW, wW, CW, zR, AW, bR) {
      const yR = zR - RW,
        NW = zR - wW,
        eW = bR - wW,
        BW = [null, null, null];
      for (let tR = 0; tR < BW.length; tR++) BW[tR] = TW(WW[tR], MW[tR], CW[tR], AW[tR], yR, eW);
      return {
        yRW: NW,
        NWW: BW
      }
    }

    function TW(WW, RW, MW, wW, zR, AW) {
      return {
        BWW: CW.d.computeShortestRotation(WW, MW) / zR,
        tRW: CW.d.computeShortestRotation(RW, wW) / AW,
        delta: CW.d.computeShortestRotation(RW, MW)
      }
    }

    function gR(WW, RW, MW, wW, CW, zR, AW, bR) {
      const yR = zR - RW,
        NW = zR - wW,
        eW = bR - wW,
        BW = [null, null, null];
      for (let tR = 0; tR < BW.length; tR++) BW[tR] = {
        BWW: (CW[tR] - WW[tR]) / yR,
        tRW: (AW[tR] - MW[tR]) / eW,
        delta: CW[tR] - MW[tR]
      };
      return {
        yRW: NW,
        NWW: BW
      }
    }

    function iR(WW, RW) {
      return null === RW ? WW : RW(WW)
    }

    function YW(WW) {
      const [RW, MW, wW] = WW, AW = -(0, zR.i)(RW), bR = -(0, zR.i)(MW), yR = (0, zR.i)(wW), NW = CW.d.quaternionFromEulerZYX(AW, bR, yR);
      return CW.d.eulerYXZFromQuaternion(NW)
    }
    NW.LERP_MODE_SCHEMA_MAPPING = {
      linear: wW.g.Linear,
      catmullrom: wW.g.CatmullRomSpline
    };
    const JW = 1 / 16;

    function PW(WW) {
      return [-WW[0] * JW, WW[1] * JW, WW[2] * JW]
    }

    function IW(WW) {
      const [RW, MW, wW] = WW;
      return [RW >= 0 ? Math.PI - RW : -Math.PI - RW, oW(MW + Math.PI), oW(wW + Math.PI)]
    }

    function oW(WW) {
      return CW.d.mod(WW + Math.PI, 2 * Math.PI) - Math.PI
    }

    function lW(WW, RW) {
      return Math.abs(CW.d.computeShortestRotation(WW[0], RW[0])) + Math.abs(CW.d.computeShortestRotation(WW[1], RW[1])) + Math.abs(CW.d.computeShortestRotation(WW[2], RW[2]))
    }
    const FW = new yR
  },
  35669: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW,
      c: () => zR,
      g: () => wW,
      h: () => CW
    });
    let wW = function(WW) {
        return WW[WW.Linear = 0] = "Linear", WW[WW.CatmullRomSpline = 1] = "CatmullRomSpline", WW
      }({}),
      CW = function(WW) {
        return WW[WW.NoLoop = 0] = "NoLoop", WW[WW.LoopOnLastFrame = 1] = "LoopOnLastFrame", WW[WW.HoldOnLastFrame = 2] = "HoldOnLastFrame", WW
      }({}),
      zR = function(WW) {
        return WW[WW.Movement = 0] = "Movement", WW[WW.Action = 1] = "Action", WW[WW.Emote = 2] = "Emote", WW[WW.Custom = 3] = "Custom", WW
      }({}),
      AW = function(WW) {
        return WW[WW.Start = 0] = "Start", WW[WW.Stop = 1] = "Stop", WW
      }({})
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);