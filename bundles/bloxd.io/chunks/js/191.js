export const id = 191;
export const ids = [191];
export const modules = {
  41103: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(64),
      Ku = yu(2615);

    function Qu(uu, Ru, yu) {
      const Qu = (0, Eu.useRef)(null),
        {
          width: mu,
          height: Ju
        } = (0, Ku.d)(uu);
      (0, Eu.useEffect)((() => {
        const yu = Ru(uu.current);
        return Qu.current = yu, () => {
          yu.close(), Qu.current = null
        }
      }), [uu, Ru]), (0, Eu.useEffect)((() => {
        mu <= 0 || Ju <= 0 || Qu.current.resize(mu, Ju)
      }), [mu, Ju]), (0, Eu.useEffect)((() => {
        Qu.current.show(yu)
      }), [yu])
    }
  },
  41110: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Bu,
      g: () => ru,
      k: () => Nu
    });
    var Eu = yu(36889),
      Ku = yu(38401);

    function Qu(uu, Ru) {
      let [yu, Eu, Ku] = uu;
      return [0, .5, 1].map((uu => ({
        timeFraction: uu,
        rotation: {
          bQ: "catmull-rom-spline",
          point: [yu, Eu, Ku + (.5 === uu ? Ru : 0)]
        }
      })))
    }

    function mu(uu, Ru, yu) {
      return {
        TQ: 3200,
        loop: !0,
        jQ: {
          Root: {
            timeline: [0, .5, 1].map((uu => ({
              timeFraction: uu,
              position: {
                bQ: "catmull-rom-spline",
                point: [0, .5 === uu ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((uu => ({
              timeFraction: uu,
              rotation: {
                bQ: "catmull-rom-spline",
                point: [0, .25 === uu ? .12 : .75 === uu ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Qu(uu, yu)
          },
          ArmRightMesh: {
            timeline: Qu(Ru, -yu)
          }
        }
      }
    }
    const Ju = mu([0, 0, 0], [0, 0, 0], .07),
      Nu = (0, Ku.c)((0, Eu.e)(Ju), "mobIdle"),
      Xu = mu([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Vu = mu([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      ru = (0, Ku.c)((0, Eu.e)(Xu), "gunReady"),
      Bu = (0, Ku.c)((0, Eu.e)(Vu), "gunAimed")
  },
  38401: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      f: () => Qu
    });
    const Eu = new WeakMap;

    function Ku(uu, Ru) {
      return Eu.set(uu, Ru), uu
    }

    function Qu(uu) {
      var Ru;
      return null !== (Ru = Eu.get(uu)) && void 0 !== Ru ? Ru : null
    }
  },
  9100: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      c: () => Ku,
      e: () => Vu
    });
    var Eu = yu(1517);

    function Ku(uu) {
      var Ru;
      return {
        ...mu.store,
        yaw: mu.store.yaw + (null !== (Ru = Eu.b[uu].previewYaw) && void 0 !== Ru ? Ru : 0)
      }
    }
    const Qu = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mu = {
        player: Qu,
        store: {
          ...Qu,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ju(uu, Ru) {
      uu instanceof Promise ? uu.then(Ru).catch((uu => {
        console.error("Couldn't open the preview", uu)
      })) : Ru(uu)
    }
    class Nu {
      constructor(uu) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height), null !== this.view && uu.show(this.view))
        }))
      }
      show(uu) {
        var Ru;
        this.view = uu, null === (Ru = this.opened) || void 0 === Ru || Ru.show(uu)
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    class Xu {
      constructor(uu) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(uu).then((uu => uu.ready)), Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.isReady()) && void 0 !== uu && uu
      }
      setCosmetic(uu, Ru) {
        var yu;
        null === (yu = this.opened) || void 0 === yu || yu.setCosmetic(uu, Ru)
      }
      playEmote(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.playEmote(uu)
      }
      setOrbit(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.setOrbit(uu)
      }
      resetCamera() {
        var uu;
        null === (uu = this.opened) || void 0 === uu || uu.resetCamera()
      }
      async untilDrawn(uu) {
        var Ru;
        await this.ready, await (null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.untilDrawn(uu))
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    const Vu = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(uu) {
        this.host = uu
      }
      setDefaultHost(uu) {
        this.makeDefault = uu
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(uu) {
        return new Nu(this.current().openMob(uu))
      }
      openPet(uu) {
        return new Nu(this.current().openPet(uu))
      }
      openMobLineup(uu) {
        return new Nu(this.current().openMobLineup(uu))
      }
      openCharacter(uu, Ru) {
        return new Xu(this.current().openCharacter(uu, Ru))
      }
    }
  },
  9098: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.b,
      f: () => Eu.c,
      g: () => Eu.e
    });
    var Eu = yu(9100);
    class Ku {
      constructor(uu) {
        this.load = uu, this.loaded = null, this.loading = null
      }
      run(uu) {
        return null !== this.loaded ? uu(this.loaded) : (this.loading ??= this.load().then((uu => (this.loaded = uu, uu)), (uu => {
          throw this.loading = null, uu
        })), this.loading.then(uu))
      }
    }
    class Qu {
      constructor() {
        this.mobScene = new Ku((() => Promise.all([yu.e(69), yu.e(226), yu.e(225), yu.e(244), yu.e(94), yu.e(245), yu.e(72), yu.e(71), yu.e(242), yu.e(70), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(218), yu.e(264), yu.e(222), yu.e(236), yu.e(247), yu.e(250), yu.e(74), yu.e(196), yu.e(215), yu.e(219), yu.e(93), yu.e(113), yu.e(234), yu.e(73), yu.e(112), yu.e(153)]).then((() => yu(40647))))), this.characterScene = new Ku((() => Promise.all([yu.e(69), yu.e(226), yu.e(225), yu.e(244), yu.e(94), yu.e(245), yu.e(72), yu.e(71), yu.e(242), yu.e(70), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(218), yu.e(264), yu.e(222), yu.e(236), yu.e(247), yu.e(250), yu.e(74), yu.e(196), yu.e(215), yu.e(219), yu.e(93), yu.e(113), yu.e(234), yu.e(73), yu.e(112), yu.e(152)]).then((() => yu(40755)))))
      }
      openMob(uu) {
        return this.mobScene.run((Ru => Ru.openMobPreview(uu)))
      }
      openPet(uu) {
        return this.mobScene.run((Ru => Ru.openPetPreview(uu)))
      }
      openMobLineup(uu) {
        return this.mobScene.run((Ru => Ru.openMobLineupPreview(uu)))
      }
      openCharacter(uu, Ru) {
        return this.characterScene.run((yu => yu.openCharacterPreview(uu, Ru)))
      }
    }
    Eu.e.setDefaultHost((() => new Qu))
  },
  41334: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      FrontlineMvpLineup: () => ru
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(9098),
      Ju = yu(41110),
      Nu = yu(41103),
      Xu = yu(1079);

    function Vu(uu) {
      return mu.g.openMobLineup(uu)
    }
    const ru = (0, Eu.memo)((function(uu) {
      let {
        players: Ru,
        className: yu
      } = uu;
      const Ku = (0, Eu.useRef)(null),
        mu = (0, Eu.useMemo)((() => Ru.map((uu => {
          let {
            cosmetics: Ru,
            size: yu,
            heldGun: Eu
          } = uu;
          return {
            cosmetics: Ru,
            size: yu,
            pC: Eu.name,
            animation: Eu.aimed ? Ju.d : Ju.g
          }
        }))), [Ru]),
        ru = function(uu) {
          const [Ru, yu] = (0, Eu.useState)([]);
          return (0, Eu.useEffect)((() => {
            yu(uu.map((() => !1)));
            const Ru = uu.map(((uu, Ru) => {
              let {
                showAfterMs: Eu
              } = uu;
              return window.setTimeout((() => {
                yu((uu => uu.map(((uu, yu) => uu || yu === Ru))))
              }), Eu)
            }));
            return () => {
              for (const uu of Ru) window.clearTimeout(uu)
            }
          }), [uu]), Ru
        }(Ru),
        Bu = (0, Eu.useMemo)((() => ({
          figures: mu,
          shown: ru
        })), [mu, ru]);
      return (0, Nu.c)(Ku, Vu, Bu), (0, Xu.jsx)("div", {
        className: Qu()("MobPreview", yu),
        ref: Ku
      })
    }))
  },
  36889: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju,
      e: () => mu
    });
    var Eu = yu(36882),
      Ku = yu(343),
      Qu = yu(1823);

    function mu(uu) {
      if ("TQ" in uu) return Cu.createAnimationScript(uu);
      return new Xu(uu).createAnimationScript()
    }

    function Ju(uu, Ru, yu, Ku) {
      const Qu = uu.TQ <= 0 ? 1 : Ru + yu * Math.max(0, Ku) / uu.TQ;
      return uu.WQ === Eu.j.LoopOnLastFrame ? Qu % 1 : uu.WQ === Eu.j.NoLoop && Qu >= 1 ? null : Math.min(1, Qu)
    }
    class Nu {
      createAnimationScript(uu) {
        const {
          TQ: Ru,
          loop: yu,
          jQ: Eu
        } = uu;
        return {
          TQ: Math.round(Ru),
          WQ: this.createLoopMode(null !== yu && void 0 !== yu && yu),
          jQ: this.createNodeSkeletonAnimationScript(null !== Eu && void 0 !== Eu ? Eu : null)
        }
      }
      createLoopMode(uu) {
        switch (uu) {
          case !1:
            return Eu.j.NoLoop;
          case !0:
            return Eu.j.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Eu.j.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${uu}`)
      }
      createNodeSkeletonAnimationScript(uu) {
        if (null === uu) return null;
        const Ru = {};
        for (const yu in uu) {
          const Eu = uu[yu];
          Ru[yu] = this.createNodeAnimationScript(Eu)
        }
        return Ru
      }
      createNodeAnimationScript(uu) {
        const {
          timeline: Ru
        } = uu, yu = Ru.filter((uu => Number.isFinite(uu.timeFraction)));
        return yu.sort(((uu, Ru) => uu.timeFraction - Ru.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(yu, "rotation", Bu),
          position: this.createTimelineFromKeyframes(yu, "position", Su)
        }
      }
      createTimelineFromKeyframes(uu, Ru, yu) {
        const Eu = [];
        for (const Nu of uu) {
          const uu = Nu[Ru];
          if (uu) {
            const Ru = this.createAnimationFrameWithoutPrecomputes(Nu.timeFraction, uu);
            Vu(Ru) && Eu.push(Ru)
          }
        }
        const Ku = [];
        for (let Nu = 0; Nu < Eu.length; Nu++) {
          var Qu, mu, Ju;
          const uu = Eu[Nu],
            Ru = null !== (Qu = Eu[Nu - 1]) && void 0 !== Qu ? Qu : uu,
            Xu = null !== (mu = Eu[Nu + 1]) && void 0 !== mu ? mu : uu,
            Vu = null !== (Ju = Eu[Nu + 2]) && void 0 !== Ju ? Ju : Xu;
          Ku.push({
            ...uu,
            ...yu(Ru.post, Ru.timeFraction, uu.post, uu.timeFraction, Xu.pre, Xu.timeFraction, Vu.pre, Vu.timeFraction)
          })
        }
        return Ku
      }
      createAnimationFrameWithoutPrecomputes(uu, Ru) {
        let yu, Eu, Ku = null;
        var Qu;
        if ("object" === typeof Ru && "point" in Ru) Ku = null !== (Qu = Ru.bQ) && void 0 !== Qu ? Qu : null, yu = Ru.point, Eu = Ru.point;
        else if ("object" === typeof Ru && "pre" in Ru) {
          var mu;
          Ku = null !== (mu = Ru.bQ) && void 0 !== mu ? mu : null, yu = Ru.pre, Eu = Ru.post
        } else yu = Ru, Eu = Ru;
        return {
          timeFraction: uu,
          bQ: this.createLerpMode(Ku),
          pre: yu,
          post: Eu
        }
      }
      createLerpMode(uu) {
        return null === uu ? Eu.g.Linear : Nu.LERP_MODE_SCHEMA_MAPPING[uu]
      }
    }
    Nu.LERP_MODE_SCHEMA_MAPPING = {
      linear: Eu.g.Linear,
      "catmull-rom-spline": Eu.g.CatmullRomSpline
    };
    class Xu {
      constructor(uu) {
        this.animationSchema = uu
      }
      createAnimationScript() {
        const {
          animation_length: uu,
          loop: Ru,
          bones: yu
        } = this.animationSchema;
        return {
          TQ: Math.round(1e3 * uu),
          WQ: this.createLoopMode(null !== Ru && void 0 !== Ru && Ru),
          jQ: this.createNodeSkeletonAnimationScript(null !== yu && void 0 !== yu ? yu : null)
        }
      }
      createLoopMode(uu) {
        switch (uu) {
          case !1:
            return Eu.j.NoLoop;
          case !0:
            return Eu.j.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Eu.j.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${uu}`)
      }
      createNodeSkeletonAnimationScript(uu) {
        if (null === uu) return null;
        const Ru = {};
        for (const yu in uu) {
          const Eu = uu[yu];
          Ru[yu] = this.createNodeAnimationScript(Eu)
        }
        return Ru
      }
      createNodeAnimationScript(uu) {
        const {
          rotation: Ru,
          position: yu
        } = uu;
        return {
          rotation: this.createAnimationTimeline(null !== Ru && void 0 !== Ru ? Ru : null, Tu, Bu, !0),
          position: this.createAnimationTimeline(null !== yu && void 0 !== yu ? yu : null, ju, Su, !1)
        }
      }
      createAnimationTimeline(uu, Ru, yu, Eu) {
        if (null === uu) return [];
        if (Array.isArray(uu)) {
          uu = {
            "0.0": uu
          }
        }
        const Ku = Object.entries(uu).map((uu => {
          let [yu, Eu] = uu;
          const Ku = Number(yu) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Ku, Eu, Ru)
        })).filter(Vu);
        Ku.sort(((uu, Ru) => uu.timeFraction - Ru.timeFraction)), Eu && function(uu) {
          for (let Ru = 1; Ru < uu.length; Ru++) {
            const yu = uu[Ru - 1].post,
              Eu = uu[Ru],
              Ku = Hu(Eu.pre),
              Qu = Hu(Eu.post),
              mu = bu(yu, Eu.pre);
            bu(yu, Ku) < mu && (uu[Ru] = {
              ...Eu,
              pre: Ku,
              post: Qu
            })
          }
        }(Ku);
        const Qu = [];
        for (let Xu = 0; Xu < Ku.length; Xu++) {
          var mu, Ju, Nu;
          const uu = Ku[Xu],
            Ru = null !== (mu = Ku[Xu - 1]) && void 0 !== mu ? mu : uu,
            Eu = null !== (Ju = Ku[Xu + 1]) && void 0 !== Ju ? Ju : uu,
            Vu = null !== (Nu = Ku[Xu + 2]) && void 0 !== Nu ? Nu : Eu;
          Qu.push({
            ...uu,
            ...yu(Ru.post, Ru.timeFraction, uu.post, uu.timeFraction, Eu.pre, Eu.timeFraction, Vu.pre, Vu.timeFraction)
          })
        }
        return Qu
      }
      createAnimationFrameWithoutPrecomputes(uu, Ru, yu) {
        let Eu, Ku, Qu = null;
        if ("object" === typeof Ru && "post" in Ru) {
          var mu;
          Qu = null !== (mu = Ru.lerp_mode) && void 0 !== mu ? mu : null, Ku = pu(Ru.post, yu), Eu = Ru.pre ? pu(Ru.pre, yu) : Ku
        } else {
          const uu = pu(Ru, yu);
          Ku = uu, Eu = uu
        }
        return {
          timeFraction: uu,
          bQ: this.createLerpMode(Qu),
          pre: Eu,
          post: Ku
        }
      }
      createLerpMode(uu) {
        return null === uu ? Eu.g.Linear : Xu.LERP_MODE_SCHEMA_MAPPING[uu]
      }
    }

    function Vu(uu) {
      return Number.isFinite(uu.timeFraction) && ru(uu.pre) && ru(uu.post)
    }

    function ru(uu) {
      return Number.isFinite(uu[0]) && Number.isFinite(uu[1]) && Number.isFinite(uu[2])
    }

    function Bu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
      const Nu = Qu - Ru,
        Xu = Qu - Eu,
        Vu = Ju - Eu,
        ru = [null, null, null];
      for (let Bu = 0; Bu < ru.length; Bu++) ru[Bu] = xu(uu[Bu], yu[Bu], Ku[Bu], mu[Bu], Nu, Vu);
      return {
        CQ: Xu,
        kQ: ru
      }
    }

    function xu(uu, Ru, yu, Eu, Qu, mu) {
      return {
        AQ: Ku.c.computeShortestRotation(uu, yu) / Qu,
        DQ: Ku.c.computeShortestRotation(Ru, Eu) / mu,
        delta: Ku.c.computeShortestRotation(Ru, yu)
      }
    }

    function Su(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
      const Nu = Qu - Ru,
        Xu = Qu - Eu,
        Vu = Ju - Eu,
        ru = [null, null, null];
      for (let Bu = 0; Bu < ru.length; Bu++) ru[Bu] = {
        AQ: (Ku[Bu] - uu[Bu]) / Nu,
        DQ: (mu[Bu] - yu[Bu]) / Vu,
        delta: Ku[Bu] - yu[Bu]
      };
      return {
        CQ: Xu,
        kQ: ru
      }
    }

    function pu(uu, Ru) {
      return null === Ru ? uu : Ru(uu)
    }

    function Tu(uu) {
      const [Ru, yu, Eu] = uu, mu = -(0, Qu.i)(Ru), Ju = -(0, Qu.i)(yu), Nu = (0, Qu.i)(Eu), Xu = Ku.c.quaternionFromEulerZYX(mu, Ju, Nu);
      return Ku.c.eulerYXZFromQuaternion(Xu)
    }
    Xu.LERP_MODE_SCHEMA_MAPPING = {
      linear: Eu.g.Linear,
      catmullrom: Eu.g.CatmullRomSpline
    };
    const Wu = 1 / 16;

    function ju(uu) {
      return [-uu[0] * Wu, uu[1] * Wu, uu[2] * Wu]
    }

    function Hu(uu) {
      const [Ru, yu, Eu] = uu;
      return [Ru >= 0 ? Math.PI - Ru : -Math.PI - Ru, du(yu + Math.PI), du(Eu + Math.PI)]
    }

    function du(uu) {
      return Ku.c.mod(uu + Math.PI, 2 * Math.PI) - Math.PI
    }

    function bu(uu, Ru) {
      return Math.abs(Ku.c.computeShortestRotation(uu[0], Ru[0])) + Math.abs(Ku.c.computeShortestRotation(uu[1], Ru[1])) + Math.abs(Ku.c.computeShortestRotation(uu[2], Ru[2]))
    }
    const Cu = new Nu
  },
  36882: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      f: () => Qu,
      g: () => Eu,
      j: () => Ku
    });
    let Eu = function(uu) {
        return uu[uu.Linear = 0] = "Linear", uu[uu.CatmullRomSpline = 1] = "CatmullRomSpline", uu
      }({}),
      Ku = function(uu) {
        return uu[uu.NoLoop = 0] = "NoLoop", uu[uu.LoopOnLastFrame = 1] = "LoopOnLastFrame", uu[uu.HoldOnLastFrame = 2] = "HoldOnLastFrame", uu
      }({}),
      Qu = function(uu) {
        return uu[uu.Movement = 0] = "Movement", uu[uu.Action = 1] = "Action", uu[uu.Emote = 2] = "Emote", uu[uu.Custom = 3] = "Custom", uu
      }({}),
      mu = function(uu) {
        return uu[uu.Start = 0] = "Start", uu[uu.Stop = 1] = "Stop", uu
      }({})
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);