export const id = 191;
export const ids = [191];
export const modules = {
  40656: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(52),
      Mb = Ub(2531);

    function Tb(bb, ab, Ub) {
      const Tb = (0, Ab.useRef)(null),
        {
          width: Eb,
          height: Yb
        } = (0, Mb.e)(bb);
      (0, Ab.useEffect)((() => {
        const Ub = ab(bb.current);
        return Tb.current = Ub, () => {
          Ub.close(), Tb.current = null
        }
      }), [bb, ab]), (0, Ab.useEffect)((() => {
        Eb <= 0 || Yb <= 0 || Tb.current.resize(Eb, Yb)
      }), [Eb, Yb]), (0, Ab.useEffect)((() => {
        Tb.current.show(Ub)
      }), [Ub])
    }
  },
  40664: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Pb,
      f: () => Lb,
      h: () => Bb
    });
    var Ab = Ub(36471),
      Mb = Ub(37946);

    function Tb(bb, ab) {
      let [Ub, Ab, Mb] = bb;
      return [0, .5, 1].map((bb => ({
        timeFraction: bb,
        rotation: {
          DT: "catmull-rom-spline",
          point: [Ub, Ab, Mb + (.5 === bb ? ab : 0)]
        }
      })))
    }

    function Eb(bb, ab, Ub) {
      return {
        jT: 3200,
        loop: !0,
        kT: {
          Root: {
            timeline: [0, .5, 1].map((bb => ({
              timeFraction: bb,
              position: {
                DT: "catmull-rom-spline",
                point: [0, .5 === bb ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((bb => ({
              timeFraction: bb,
              rotation: {
                DT: "catmull-rom-spline",
                point: [0, .25 === bb ? .12 : .75 === bb ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Tb(bb, Ub)
          },
          ArmRightMesh: {
            timeline: Tb(ab, -Ub)
          }
        }
      }
    }
    const Yb = Eb([0, 0, 0], [0, 0, 0], .07),
      Bb = (0, Mb.e)((0, Ab.e)(Yb), "mobIdle"),
      eb = Eb([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      vb = Eb([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Lb = (0, Mb.e)((0, Ab.e)(eb), "gunReady"),
      Pb = (0, Mb.e)((0, Ab.e)(vb), "gunAimed")
  },
  37946: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      g: () => Tb
    });
    const Ab = new WeakMap;

    function Mb(bb, ab) {
      return Ab.set(bb, ab), bb
    }

    function Tb(bb) {
      var ab;
      return null !== (ab = Ab.get(bb)) && void 0 !== ab ? ab : null
    }
  },
  8951: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      h: () => Mb,
      l: () => vb
    });
    var Ab = Ub(1485);

    function Mb(bb) {
      var ab;
      return {
        ...Eb.store,
        yaw: Eb.store.yaw + (null !== (ab = Ab.d[bb].previewYaw) && void 0 !== ab ? ab : 0)
      }
    }
    const Tb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Eb = {
        player: Tb,
        store: {
          ...Tb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Yb(bb, ab) {
      bb instanceof Promise ? bb.then(ab).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ab(bb)
    }
    class Bb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ab;
        this.view = bb, null === (ab = this.opened) || void 0 === ab || ab.show(bb)
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class eb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ab;
        return null !== (bb = null === (ab = this.opened) || void 0 === ab ? void 0 : ab.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ab) {
        var Ub;
        null === (Ub = this.opened) || void 0 === Ub || Ub.setCosmetic(bb, ab)
      }
      playEmote(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.playEmote(bb)
      }
      setOrbit(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ab;
        await this.ready, await (null === (ab = this.opened) || void 0 === ab ? void 0 : ab.untilDrawn(bb))
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const vb = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Bb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Bb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Bb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ab) {
        return new eb(this.current().openCharacter(bb, ab))
      }
    }
  },
  8945: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab.d,
      h: () => Ab.h,
      l: () => Ab.l
    });
    var Ab = Ub(8951);
    class Mb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class Tb {
      constructor() {
        this.mobScene = new Mb((() => Promise.all([Ub.e(69), Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(94), Ub.e(245), Ub.e(72), Ub.e(71), Ub.e(242), Ub.e(70), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(218), Ub.e(264), Ub.e(222), Ub.e(236), Ub.e(247), Ub.e(250), Ub.e(74), Ub.e(196), Ub.e(215), Ub.e(219), Ub.e(93), Ub.e(113), Ub.e(234), Ub.e(73), Ub.e(112), Ub.e(153)]).then((() => Ub(40179))))), this.characterScene = new Mb((() => Promise.all([Ub.e(69), Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(94), Ub.e(245), Ub.e(72), Ub.e(71), Ub.e(242), Ub.e(70), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(218), Ub.e(264), Ub.e(222), Ub.e(236), Ub.e(247), Ub.e(250), Ub.e(74), Ub.e(196), Ub.e(215), Ub.e(219), Ub.e(93), Ub.e(113), Ub.e(234), Ub.e(73), Ub.e(112), Ub.e(152)]).then((() => Ub(40271)))))
      }
      openMob(bb) {
        return this.mobScene.run((ab => ab.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((ab => ab.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((ab => ab.openMobLineupPreview(bb)))
      }
      openCharacter(bb, ab) {
        return this.characterScene.run((Ub => Ub.openCharacterPreview(bb, ab)))
      }
    }
    Ab.l.setDefaultHost((() => new Tb))
  },
  40863: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      FrontlineMvpLineup: () => Lb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(8945),
      Yb = Ub(40664),
      Bb = Ub(40656),
      eb = Ub(1023);

    function vb(bb) {
      return Eb.l.openMobLineup(bb)
    }
    const Lb = (0, Ab.memo)((function(bb) {
      let {
        players: ab,
        className: Ub
      } = bb;
      const Mb = (0, Ab.useRef)(null),
        Eb = (0, Ab.useMemo)((() => ab.map((bb => {
          let {
            cosmetics: ab,
            size: Ub,
            heldGun: Ab
          } = bb;
          return {
            cosmetics: ab,
            size: Ub,
            dD: Ab.name,
            animation: Ab.aimed ? Yb.d : Yb.f
          }
        }))), [ab]),
        Lb = function(bb) {
          const [ab, Ub] = (0, Ab.useState)([]);
          return (0, Ab.useEffect)((() => {
            Ub(bb.map((() => !1)));
            const ab = bb.map(((bb, ab) => {
              let {
                showAfterMs: Ab
              } = bb;
              return window.setTimeout((() => {
                Ub((bb => bb.map(((bb, Ub) => bb || Ub === ab))))
              }), Ab)
            }));
            return () => {
              for (const bb of ab) window.clearTimeout(bb)
            }
          }), [bb]), ab
        }(ab),
        Pb = (0, Ab.useMemo)((() => ({
          figures: Eb,
          shown: Lb
        })), [Eb, Lb]);
      return (0, Bb.b)(Mb, vb, Pb), (0, eb.jsx)("div", {
        className: Tb()("MobPreview", Ub),
        ref: Mb
      })
    }))
  },
  36471: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      e: () => Eb
    });
    var Ab = Ub(36460),
      Mb = Ub(325),
      Tb = Ub(1786);

    function Eb(bb) {
      if ("jT" in bb) return ib.createAnimationScript(bb);
      return new eb(bb).createAnimationScript()
    }

    function Yb(bb, ab, Ub, Mb) {
      const Tb = bb.jT <= 0 ? 1 : ab + Ub * Math.max(0, Mb) / bb.jT;
      return bb.RT === Ab.k.LoopOnLastFrame ? Tb % 1 : bb.RT === Ab.k.NoLoop && Tb >= 1 ? null : Math.min(1, Tb)
    }
    class Bb {
      createAnimationScript(bb) {
        const {
          jT: ab,
          loop: Ub,
          kT: Ab
        } = bb;
        return {
          jT: Math.round(ab),
          RT: this.createLoopMode(null !== Ub && void 0 !== Ub && Ub),
          kT: this.createNodeSkeletonAnimationScript(null !== Ab && void 0 !== Ab ? Ab : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return Ab.k.NoLoop;
          case !0:
            return Ab.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Ab.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const ab = {};
        for (const Ub in bb) {
          const Ab = bb[Ub];
          ab[Ub] = this.createNodeAnimationScript(Ab)
        }
        return ab
      }
      createNodeAnimationScript(bb) {
        const {
          timeline: ab
        } = bb, Ub = ab.filter((bb => Number.isFinite(bb.timeFraction)));
        return Ub.sort(((bb, ab) => bb.timeFraction - ab.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Ub, "rotation", Pb),
          position: this.createTimelineFromKeyframes(Ub, "position", jb)
        }
      }
      createTimelineFromKeyframes(bb, ab, Ub) {
        const Ab = [];
        for (const Bb of bb) {
          const bb = Bb[ab];
          if (bb) {
            const ab = this.createAnimationFrameWithoutPrecomputes(Bb.timeFraction, bb);
            vb(ab) && Ab.push(ab)
          }
        }
        const Mb = [];
        for (let Bb = 0; Bb < Ab.length; Bb++) {
          var Tb, Eb, Yb;
          const bb = Ab[Bb],
            ab = null !== (Tb = Ab[Bb - 1]) && void 0 !== Tb ? Tb : bb,
            eb = null !== (Eb = Ab[Bb + 1]) && void 0 !== Eb ? Eb : bb,
            vb = null !== (Yb = Ab[Bb + 2]) && void 0 !== Yb ? Yb : eb;
          Mb.push({
            ...bb,
            ...Ub(ab.post, ab.timeFraction, bb.post, bb.timeFraction, eb.pre, eb.timeFraction, vb.pre, vb.timeFraction)
          })
        }
        return Mb
      }
      createAnimationFrameWithoutPrecomputes(bb, ab) {
        let Ub, Ab, Mb = null;
        var Tb;
        if ("object" === typeof ab && "point" in ab) Mb = null !== (Tb = ab.DT) && void 0 !== Tb ? Tb : null, Ub = ab.point, Ab = ab.point;
        else if ("object" === typeof ab && "pre" in ab) {
          var Eb;
          Mb = null !== (Eb = ab.DT) && void 0 !== Eb ? Eb : null, Ub = ab.pre, Ab = ab.post
        } else Ub = ab, Ab = ab;
        return {
          timeFraction: bb,
          DT: this.createLerpMode(Mb),
          pre: Ub,
          post: Ab
        }
      }
      createLerpMode(bb) {
        return null === bb ? Ab.h.Linear : Bb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }
    Bb.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ab.h.Linear,
      "catmull-rom-spline": Ab.h.CatmullRomSpline
    };
    class eb {
      constructor(bb) {
        this.animationSchema = bb
      }
      createAnimationScript() {
        const {
          animation_length: bb,
          loop: ab,
          bones: Ub
        } = this.animationSchema;
        return {
          jT: Math.round(1e3 * bb),
          RT: this.createLoopMode(null !== ab && void 0 !== ab && ab),
          kT: this.createNodeSkeletonAnimationScript(null !== Ub && void 0 !== Ub ? Ub : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return Ab.k.NoLoop;
          case !0:
            return Ab.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Ab.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const ab = {};
        for (const Ub in bb) {
          const Ab = bb[Ub];
          ab[Ub] = this.createNodeAnimationScript(Ab)
        }
        return ab
      }
      createNodeAnimationScript(bb) {
        const {
          rotation: ab,
          position: Ub
        } = bb;
        return {
          rotation: this.createAnimationTimeline(null !== ab && void 0 !== ab ? ab : null, kb, Pb, !0),
          position: this.createAnimationTimeline(null !== Ub && void 0 !== Ub ? Ub : null, Zb, jb, !1)
        }
      }
      createAnimationTimeline(bb, ab, Ub, Ab) {
        if (null === bb) return [];
        if (Array.isArray(bb)) {
          bb = {
            "0.0": bb
          }
        }
        const Mb = Object.entries(bb).map((bb => {
          let [Ub, Ab] = bb;
          const Mb = Number(Ub) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Mb, Ab, ab)
        })).filter(vb);
        Mb.sort(((bb, ab) => bb.timeFraction - ab.timeFraction)), Ab && function(bb) {
          for (let ab = 1; ab < bb.length; ab++) {
            const Ub = bb[ab - 1].post,
              Ab = bb[ab],
              Mb = Db(Ab.pre),
              Tb = Db(Ab.post),
              Eb = xb(Ub, Ab.pre);
            xb(Ub, Mb) < Eb && (bb[ab] = {
              ...Ab,
              pre: Mb,
              post: Tb
            })
          }
        }(Mb);
        const Tb = [];
        for (let eb = 0; eb < Mb.length; eb++) {
          var Eb, Yb, Bb;
          const bb = Mb[eb],
            ab = null !== (Eb = Mb[eb - 1]) && void 0 !== Eb ? Eb : bb,
            Ab = null !== (Yb = Mb[eb + 1]) && void 0 !== Yb ? Yb : bb,
            vb = null !== (Bb = Mb[eb + 2]) && void 0 !== Bb ? Bb : Ab;
          Tb.push({
            ...bb,
            ...Ub(ab.post, ab.timeFraction, bb.post, bb.timeFraction, Ab.pre, Ab.timeFraction, vb.pre, vb.timeFraction)
          })
        }
        return Tb
      }
      createAnimationFrameWithoutPrecomputes(bb, ab, Ub) {
        let Ab, Mb, Tb = null;
        if ("object" === typeof ab && "post" in ab) {
          var Eb;
          Tb = null !== (Eb = ab.lerp_mode) && void 0 !== Eb ? Eb : null, Mb = Rb(ab.post, Ub), Ab = ab.pre ? Rb(ab.pre, Ub) : Mb
        } else {
          const bb = Rb(ab, Ub);
          Mb = bb, Ab = bb
        }
        return {
          timeFraction: bb,
          DT: this.createLerpMode(Tb),
          pre: Ab,
          post: Mb
        }
      }
      createLerpMode(bb) {
        return null === bb ? Ab.h.Linear : eb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }

    function vb(bb) {
      return Number.isFinite(bb.timeFraction) && Lb(bb.pre) && Lb(bb.post)
    }

    function Lb(bb) {
      return Number.isFinite(bb[0]) && Number.isFinite(bb[1]) && Number.isFinite(bb[2])
    }

    function Pb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
      const Bb = Tb - ab,
        eb = Tb - Ab,
        vb = Yb - Ab,
        Lb = [null, null, null];
      for (let Pb = 0; Pb < Lb.length; Pb++) Lb[Pb] = Xb(bb[Pb], Ub[Pb], Mb[Pb], Eb[Pb], Bb, vb);
      return {
        zT: eb,
        xT: Lb
      }
    }

    function Xb(bb, ab, Ub, Ab, Tb, Eb) {
      return {
        fT: Mb.d.computeShortestRotation(bb, Ub) / Tb,
        mT: Mb.d.computeShortestRotation(ab, Ab) / Eb,
        delta: Mb.d.computeShortestRotation(ab, Ub)
      }
    }

    function jb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
      const Bb = Tb - ab,
        eb = Tb - Ab,
        vb = Yb - Ab,
        Lb = [null, null, null];
      for (let Pb = 0; Pb < Lb.length; Pb++) Lb[Pb] = {
        fT: (Mb[Pb] - bb[Pb]) / Bb,
        mT: (Eb[Pb] - Ub[Pb]) / vb,
        delta: Mb[Pb] - Ub[Pb]
      };
      return {
        zT: eb,
        xT: Lb
      }
    }

    function Rb(bb, ab) {
      return null === ab ? bb : ab(bb)
    }

    function kb(bb) {
      const [ab, Ub, Ab] = bb, Eb = -(0, Tb.i)(ab), Yb = -(0, Tb.i)(Ub), Bb = (0, Tb.i)(Ab), eb = Mb.d.quaternionFromEulerZYX(Eb, Yb, Bb);
      return Mb.d.eulerYXZFromQuaternion(eb)
    }
    eb.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ab.h.Linear,
      catmullrom: Ab.h.CatmullRomSpline
    };
    const yb = 1 / 16;

    function Zb(bb) {
      return [-bb[0] * yb, bb[1] * yb, bb[2] * yb]
    }

    function Db(bb) {
      const [ab, Ub, Ab] = bb;
      return [ab >= 0 ? Math.PI - ab : -Math.PI - ab, zb(Ub + Math.PI), zb(Ab + Math.PI)]
    }

    function zb(bb) {
      return Mb.d.mod(bb + Math.PI, 2 * Math.PI) - Math.PI
    }

    function xb(bb, ab) {
      return Math.abs(Mb.d.computeShortestRotation(bb[0], ab[0])) + Math.abs(Mb.d.computeShortestRotation(bb[1], ab[1])) + Math.abs(Mb.d.computeShortestRotation(bb[2], ab[2]))
    }
    const ib = new Bb
  },
  36460: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      d: () => Tb,
      h: () => Ab,
      k: () => Mb
    });
    let Ab = function(bb) {
        return bb[bb.Linear = 0] = "Linear", bb[bb.CatmullRomSpline = 1] = "CatmullRomSpline", bb
      }({}),
      Mb = function(bb) {
        return bb[bb.NoLoop = 0] = "NoLoop", bb[bb.LoopOnLastFrame = 1] = "LoopOnLastFrame", bb[bb.HoldOnLastFrame = 2] = "HoldOnLastFrame", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.Movement = 0] = "Movement", bb[bb.Action = 1] = "Action", bb[bb.Emote = 2] = "Emote", bb[bb.Custom = 3] = "Custom", bb
      }({}),
      Eb = function(bb) {
        return bb[bb.Start = 0] = "Start", bb[bb.Stop = 1] = "Stop", bb
      }({})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);