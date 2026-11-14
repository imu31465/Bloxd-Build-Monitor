export const id = 196;
export const ids = [196];
export const modules = {
  39386: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF
    });
    var CF = SF(46),
      AF = SF(2161);

    function uF(FF, WF, SF) {
      const uF = (0, CF.useRef)(null),
        {
          width: hF,
          height: bW
        } = (0, AF.c)(FF);
      (0, CF.useEffect)((() => {
        const SF = WF(FF.current);
        return uF.current = SF, () => {
          SF.close(), uF.current = null
        }
      }), [FF, WF]), (0, CF.useEffect)((() => {
        hF <= 0 || bW <= 0 || uF.current.resize(hF, bW)
      }), [hF, bW]), (0, CF.useEffect)((() => {
        uF.current.show(SF)
      }), [SF])
    }
  },
  39390: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => eF,
      e: () => iW,
      f: () => dF
    });
    var CF = SF(35983),
      AF = SF(37038);

    function uF(FF, WF) {
      let [SF, CF, AF] = FF;
      return [0, .5, 1].map((FF => ({
        timeFraction: FF,
        rotation: {
          MFF: "catmull-rom-spline",
          point: [SF, CF, AF + (.5 === FF ? WF : 0)]
        }
      })))
    }

    function hF(FF, WF, SF) {
      return {
        xWF: 3200,
        loop: !0,
        oFF: {
          Root: {
            timeline: [0, .5, 1].map((FF => ({
              timeFraction: FF,
              position: {
                MFF: "catmull-rom-spline",
                point: [0, .5 === FF ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((FF => ({
              timeFraction: FF,
              rotation: {
                MFF: "catmull-rom-spline",
                point: [0, .25 === FF ? .12 : .75 === FF ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: uF(FF, SF)
          },
          ArmRightMesh: {
            timeline: uF(WF, -SF)
          }
        }
      }
    }
    const bW = hF([0, 0, 0], [0, 0, 0], .07),
      dF = (0, AF.c)((0, CF.h)(bW), "mobIdle"),
      PF = hF([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      RF = hF([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      iW = (0, AF.c)((0, CF.h)(PF), "gunReady"),
      eF = (0, AF.c)((0, CF.h)(RF), "gunAimed")
  },
  37038: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF,
      f: () => uF
    });
    const CF = new WeakMap;

    function AF(FF, WF) {
      return CF.set(FF, WF), FF
    }

    function uF(FF) {
      var WF;
      return null !== (WF = CF.get(FF)) && void 0 !== WF ? WF : null
    }
  },
  35334: (FF, WF, SF) => {
    function CF(FF, WF) {
      FF instanceof Promise ? FF.then(WF).catch((FF => {
        console.error("Couldn't open the preview", FF)
      })) : WF(FF)
    }
    SF.d(WF, {
      e: () => hF
    });
    class AF {
      constructor(FF) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, CF(FF, (FF => {
          this.closed ? FF.close() : (this.opened = FF, null !== this.size && FF.resize(this.size.width, this.size.height), null !== this.view && FF.show(this.view))
        }))
      }
      show(FF) {
        var WF;
        this.view = FF, null === (WF = this.opened) || void 0 === WF || WF.show(FF)
      }
      resize(FF, WF) {
        var SF;
        this.size = {
          width: FF,
          height: WF
        }, null === (SF = this.opened) || void 0 === SF || SF.resize(FF, WF)
      }
      close() {
        var FF;
        this.closed = !0, null === (FF = this.opened) || void 0 === FF || FF.close(), this.opened = null
      }
    }
    class uF {
      constructor(FF) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(FF).then((FF => FF.ready)), CF(FF, (FF => {
          this.closed ? FF.close() : (this.opened = FF, null !== this.size && FF.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var FF, WF;
        return null !== (FF = null === (WF = this.opened) || void 0 === WF ? void 0 : WF.isReady()) && void 0 !== FF && FF
      }
      setCosmetic(FF, WF) {
        var SF;
        null === (SF = this.opened) || void 0 === SF || SF.setCosmetic(FF, WF)
      }
      playEmote(FF) {
        var WF;
        null === (WF = this.opened) || void 0 === WF || WF.playEmote(FF)
      }
      async untilDrawn(FF) {
        var WF;
        await this.ready, await (null === (WF = this.opened) || void 0 === WF ? void 0 : WF.untilDrawn(FF))
      }
      resize(FF, WF) {
        var SF;
        this.size = {
          width: FF,
          height: WF
        }, null === (SF = this.opened) || void 0 === SF || SF.resize(FF, WF)
      }
      close() {
        var FF;
        this.closed = !0, null === (FF = this.opened) || void 0 === FF || FF.close(), this.opened = null
      }
    }
    const hF = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(FF) {
        this.host = FF
      }
      setDefaultHost(FF) {
        this.makeDefault = FF
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(FF) {
        return new AF(this.current().openMob(FF))
      }
      openPet(FF) {
        return new AF(this.current().openPet(FF))
      }
      openMobLineup(FF) {
        return new AF(this.current().openMobLineup(FF))
      }
      openCharacter(FF) {
        return new uF(this.current().openCharacter(FF))
      }
    }
  },
  35327: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF.e
    });
    var CF = SF(35334);
    class AF {
      constructor(FF) {
        this.load = FF, this.loaded = null, this.loading = null
      }
      run(FF) {
        return null !== this.loaded ? FF(this.loaded) : (this.loading ??= this.load().then((FF => (this.loaded = FF, FF)), (FF => {
          throw this.loading = null, FF
        })), this.loading.then(FF))
      }
    }
    class uF {
      constructor() {
        this.mobScene = new AF((() => Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(62), SF.e(222), SF.e(60), SF.e(232), SF.e(226), SF.e(61), SF.e(231), SF.e(229), SF.e(221), SF.e(198), SF.e(261), SF.e(203), SF.e(216), SF.e(227), SF.e(230), SF.e(120), SF.e(178), SF.e(214), SF.e(199), SF.e(98), SF.e(97), SF.e(262), SF.e(142)]).then((() => SF(39045))))), this.characterScene = new AF((() => Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(62), SF.e(222), SF.e(60), SF.e(232), SF.e(226), SF.e(61), SF.e(231), SF.e(229), SF.e(221), SF.e(198), SF.e(261), SF.e(203), SF.e(216), SF.e(227), SF.e(230), SF.e(120), SF.e(178), SF.e(214), SF.e(199), SF.e(98), SF.e(97), SF.e(262), SF.e(141)]).then((() => SF(39135)))))
      }
      openMob(FF) {
        return this.mobScene.run((WF => WF.openMobPreview(FF)))
      }
      openPet(FF) {
        return this.mobScene.run((WF => WF.openPetPreview(FF)))
      }
      openMobLineup(FF) {
        return this.mobScene.run((WF => WF.openMobLineupPreview(FF)))
      }
      openCharacter(FF) {
        return this.characterScene.run((WF => WF.openCharacterPreview(FF)))
      }
    }
    CF.e.setDefaultHost((() => new uF))
  },
  39613: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      FrontlineMvpLineup: () => iW
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(35327),
      bW = SF(39390),
      dF = SF(39386),
      PF = SF(971);

    function RF(FF) {
      return hF.c.openMobLineup(FF)
    }
    const iW = (0, CF.memo)((function(FF) {
      let {
        players: WF,
        className: SF
      } = FF;
      const AF = (0, CF.useRef)(null),
        hF = (0, CF.useMemo)((() => WF.map((FF => {
          let {
            cosmetics: WF,
            size: SF,
            heldGun: CF
          } = FF;
          return {
            cosmetics: WF,
            size: SF,
            qV: CF.name,
            animation: CF.aimed ? bW.b : bW.e
          }
        }))), [WF]),
        iW = function(FF) {
          const [WF, SF] = (0, CF.useState)([]);
          return (0, CF.useEffect)((() => {
            SF(FF.map((() => !1)));
            const WF = FF.map(((FF, WF) => {
              let {
                showAfterMs: CF
              } = FF;
              return window.setTimeout((() => {
                SF((FF => FF.map(((FF, SF) => FF || SF === WF))))
              }), CF)
            }));
            return () => {
              for (const FF of WF) window.clearTimeout(FF)
            }
          }), [FF]), WF
        }(WF),
        eF = (0, CF.useMemo)((() => ({
          figures: hF,
          shown: iW
        })), [hF, iW]);
      return (0, dF.b)(AF, RF, eF), (0, PF.jsx)("div", {
        className: uF()("MobPreview", SF),
        ref: AF
      })
    }))
  },
  35983: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => bW,
      h: () => hF
    });
    var CF = SF(35977),
      AF = SF(271),
      uF = SF(1079);

    function hF(FF) {
      if ("xWF" in FF) return VF.createAnimationScript(FF);
      return new PF(FF).createAnimationScript()
    }

    function bW(FF, WF, SF, AF) {
      const uF = FF.xWF <= 0 ? 1 : WF + SF * Math.max(0, AF) / FF.xWF;
      return FF.ZFF === CF.h.LoopOnLastFrame ? uF % 1 : FF.ZFF === CF.h.NoLoop && uF >= 1 ? null : Math.min(1, uF)
    }
    class dF {
      createAnimationScript(FF) {
        const {
          xWF: WF,
          loop: SF,
          oFF: CF
        } = FF;
        return {
          xWF: Math.round(WF),
          ZFF: this.createLoopMode(null !== SF && void 0 !== SF && SF),
          oFF: this.createNodeSkeletonAnimationScript(null !== CF && void 0 !== CF ? CF : null)
        }
      }
      createLoopMode(FF) {
        switch (FF) {
          case !1:
            return CF.h.NoLoop;
          case !0:
            return CF.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return CF.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${FF}`)
      }
      createNodeSkeletonAnimationScript(FF) {
        if (null === FF) return null;
        const WF = {};
        for (const SF in FF) {
          const CF = FF[SF];
          WF[SF] = this.createNodeAnimationScript(CF)
        }
        return WF
      }
      createNodeAnimationScript(FF) {
        const {
          timeline: WF
        } = FF, SF = WF.filter((FF => Number.isFinite(FF.timeFraction)));
        return SF.sort(((FF, WF) => FF.timeFraction - WF.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(SF, "rotation", eF),
          position: this.createTimelineFromKeyframes(SF, "position", QF)
        }
      }
      createTimelineFromKeyframes(FF, WF, SF) {
        const CF = [];
        for (const dF of FF) {
          const FF = dF[WF];
          if (FF) {
            const WF = this.createAnimationFrameWithoutPrecomputes(dF.timeFraction, FF);
            RF(WF) && CF.push(WF)
          }
        }
        const AF = [];
        for (let dF = 0; dF < CF.length; dF++) {
          var uF, hF, bW;
          const FF = CF[dF],
            WF = null !== (uF = CF[dF - 1]) && void 0 !== uF ? uF : FF,
            PF = null !== (hF = CF[dF + 1]) && void 0 !== hF ? hF : FF,
            RF = null !== (bW = CF[dF + 2]) && void 0 !== bW ? bW : PF;
          AF.push({
            ...FF,
            ...SF(WF.post, WF.timeFraction, FF.post, FF.timeFraction, PF.pre, PF.timeFraction, RF.pre, RF.timeFraction)
          })
        }
        return AF
      }
      createAnimationFrameWithoutPrecomputes(FF, WF) {
        let SF, CF, AF = null;
        var uF;
        if ("object" === typeof WF && "point" in WF) AF = null !== (uF = WF.MFF) && void 0 !== uF ? uF : null, SF = WF.point, CF = WF.point;
        else if ("object" === typeof WF && "pre" in WF) {
          var hF;
          AF = null !== (hF = WF.MFF) && void 0 !== hF ? hF : null, SF = WF.pre, CF = WF.post
        } else SF = WF, CF = WF;
        return {
          timeFraction: FF,
          MFF: this.createLerpMode(AF),
          pre: SF,
          post: CF
        }
      }
      createLerpMode(FF) {
        return null === FF ? CF.f.Linear : dF.LERP_MODE_SCHEMA_MAPPING[FF]
      }
    }
    dF.LERP_MODE_SCHEMA_MAPPING = {
      linear: CF.f.Linear,
      "catmull-rom-spline": CF.f.CatmullRomSpline
    };
    class PF {
      constructor(FF) {
        this.animationSchema = FF
      }
      createAnimationScript() {
        const {
          animation_length: FF,
          loop: WF,
          bones: SF
        } = this.animationSchema;
        return {
          xWF: Math.round(1e3 * FF),
          ZFF: this.createLoopMode(null !== WF && void 0 !== WF && WF),
          oFF: this.createNodeSkeletonAnimationScript(null !== SF && void 0 !== SF ? SF : null)
        }
      }
      createLoopMode(FF) {
        switch (FF) {
          case !1:
            return CF.h.NoLoop;
          case !0:
            return CF.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return CF.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${FF}`)
      }
      createNodeSkeletonAnimationScript(FF) {
        if (null === FF) return null;
        const WF = {};
        for (const SF in FF) {
          const CF = FF[SF];
          WF[SF] = this.createNodeAnimationScript(CF)
        }
        return WF
      }
      createNodeAnimationScript(FF) {
        const {
          rotation: WF,
          position: SF
        } = FF;
        return {
          rotation: this.createAnimationTimeline(null !== WF && void 0 !== WF ? WF : null, gW, eF, !0),
          position: this.createAnimationTimeline(null !== SF && void 0 !== SF ? SF : null, TF, QF, !1)
        }
      }
      createAnimationTimeline(FF, WF, SF, CF) {
        if (null === FF) return [];
        if (Array.isArray(FF)) {
          FF = {
            "0.0": FF
          }
        }
        const AF = Object.entries(FF).map((FF => {
          let [SF, CF] = FF;
          const AF = Number(SF) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(AF, CF, WF)
        })).filter(RF);
        AF.sort(((FF, WF) => FF.timeFraction - WF.timeFraction)), CF && function(FF) {
          for (let WF = 1; WF < FF.length; WF++) {
            const SF = FF[WF - 1].post,
              CF = FF[WF],
              AF = aW(CF.pre),
              uF = aW(CF.post),
              hF = qW(SF, CF.pre);
            qW(SF, AF) < hF && (FF[WF] = {
              ...CF,
              pre: AF,
              post: uF
            })
          }
        }(AF);
        const uF = [];
        for (let PF = 0; PF < AF.length; PF++) {
          var hF, bW, dF;
          const FF = AF[PF],
            WF = null !== (hF = AF[PF - 1]) && void 0 !== hF ? hF : FF,
            CF = null !== (bW = AF[PF + 1]) && void 0 !== bW ? bW : FF,
            RF = null !== (dF = AF[PF + 2]) && void 0 !== dF ? dF : CF;
          uF.push({
            ...FF,
            ...SF(WF.post, WF.timeFraction, FF.post, FF.timeFraction, CF.pre, CF.timeFraction, RF.pre, RF.timeFraction)
          })
        }
        return uF
      }
      createAnimationFrameWithoutPrecomputes(FF, WF, SF) {
        let CF, AF, uF = null;
        if ("object" === typeof WF && "post" in WF) {
          var hF;
          uF = null !== (hF = WF.lerp_mode) && void 0 !== hF ? hF : null, AF = rW(WF.post, SF), CF = WF.pre ? rW(WF.pre, SF) : AF
        } else {
          const FF = rW(WF, SF);
          AF = FF, CF = FF
        }
        return {
          timeFraction: FF,
          MFF: this.createLerpMode(uF),
          pre: CF,
          post: AF
        }
      }
      createLerpMode(FF) {
        return null === FF ? CF.f.Linear : PF.LERP_MODE_SCHEMA_MAPPING[FF]
      }
    }

    function RF(FF) {
      return Number.isFinite(FF.timeFraction) && iW(FF.pre) && iW(FF.post)
    }

    function iW(FF) {
      return Number.isFinite(FF[0]) && Number.isFinite(FF[1]) && Number.isFinite(FF[2])
    }

    function eF(FF, WF, SF, CF, AF, uF, hF, bW) {
      const dF = uF - WF,
        PF = uF - CF,
        RF = bW - CF,
        iW = [null, null, null];
      for (let eF = 0; eF < iW.length; eF++) iW[eF] = EF(FF[eF], SF[eF], AF[eF], hF[eF], dF, RF);
      return {
        cWF: PF,
        GFF: iW
      }
    }

    function EF(FF, WF, SF, CF, uF, hF) {
      return {
        IFF: AF.c.computeShortestRotation(FF, SF) / uF,
        fFF: AF.c.computeShortestRotation(WF, CF) / hF,
        delta: AF.c.computeShortestRotation(WF, SF)
      }
    }

    function QF(FF, WF, SF, CF, AF, uF, hF, bW) {
      const dF = uF - WF,
        PF = uF - CF,
        RF = bW - CF,
        iW = [null, null, null];
      for (let eF = 0; eF < iW.length; eF++) iW[eF] = {
        IFF: (AF[eF] - FF[eF]) / dF,
        fFF: (hF[eF] - SF[eF]) / RF,
        delta: AF[eF] - SF[eF]
      };
      return {
        cWF: PF,
        GFF: iW
      }
    }

    function rW(FF, WF) {
      return null === WF ? FF : WF(FF)
    }

    function gW(FF) {
      const [WF, SF, CF] = FF, hF = -(0, uF.l)(WF), bW = -(0, uF.l)(SF), dF = (0, uF.l)(CF), PF = AF.c.quaternionFromEulerZYX(hF, bW, dF);
      return AF.c.eulerYXZFromQuaternion(PF)
    }
    PF.LERP_MODE_SCHEMA_MAPPING = {
      linear: CF.f.Linear,
      catmullrom: CF.f.CatmullRomSpline
    };
    const tW = 1 / 16;

    function TF(FF) {
      return [-FF[0] * tW, FF[1] * tW, FF[2] * tW]
    }

    function aW(FF) {
      const [WF, SF, CF] = FF;
      return [WF >= 0 ? Math.PI - WF : -Math.PI - WF, kW(SF + Math.PI), kW(CF + Math.PI)]
    }

    function kW(FF) {
      return AF.c.mod(FF + Math.PI, 2 * Math.PI) - Math.PI
    }

    function qW(FF, WF) {
      return Math.abs(AF.c.computeShortestRotation(FF[0], WF[0])) + Math.abs(AF.c.computeShortestRotation(FF[1], WF[1])) + Math.abs(AF.c.computeShortestRotation(FF[2], WF[2]))
    }
    const VF = new dF
  },
  35977: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      d: () => uF,
      f: () => CF,
      h: () => AF
    });
    let CF = function(FF) {
        return FF[FF.Linear = 0] = "Linear", FF[FF.CatmullRomSpline = 1] = "CatmullRomSpline", FF
      }({}),
      AF = function(FF) {
        return FF[FF.NoLoop = 0] = "NoLoop", FF[FF.LoopOnLastFrame = 1] = "LoopOnLastFrame", FF[FF.HoldOnLastFrame = 2] = "HoldOnLastFrame", FF
      }({}),
      uF = function(FF) {
        return FF[FF.Movement = 0] = "Movement", FF[FF.Action = 1] = "Action", FF[FF.Emote = 2] = "Emote", FF[FF.Custom = 3] = "Custom", FF
      }({}),
      hF = function(FF) {
        return FF[FF.Start = 0] = "Start", FF[FF.Stop = 1] = "Stop", FF
      }({})
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);