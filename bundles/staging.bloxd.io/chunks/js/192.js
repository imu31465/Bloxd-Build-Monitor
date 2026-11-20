export const id = 192;
export const ids = [192];
export const modules = {
  40976: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(49),
      Ob = hb(2548);

    function Gb(bb, ub, hb) {
      const Gb = (0, Bb.useRef)(null),
        {
          width: Ub,
          height: Lb
        } = (0, Ob.b)(bb);
      (0, Bb.useEffect)((() => {
        const hb = ub(bb.current);
        return Gb.current = hb, () => {
          hb.close(), Gb.current = null
        }
      }), [bb, ub]), (0, Bb.useEffect)((() => {
        Ub <= 0 || Lb <= 0 || Gb.current.resize(Ub, Lb)
      }), [Ub, Lb]), (0, Bb.useEffect)((() => {
        Gb.current.show(hb)
      }), [hb])
    }
  },
  40982: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      c: () => Hb,
      g: () => Yb
    });
    var Bb = hb(36787),
      Ob = hb(38250);

    function Gb(bb, ub) {
      let [hb, Bb, Ob] = bb;
      return [0, .5, 1].map((bb => ({
        timeFraction: bb,
        rotation: {
          Kb: "catmull-rom-spline",
          point: [hb, Bb, Ob + (.5 === bb ? ub : 0)]
        }
      })))
    }

    function Ub(bb, ub, hb) {
      return {
        Xb: 3200,
        loop: !0,
        ob: {
          Root: {
            timeline: [0, .5, 1].map((bb => ({
              timeFraction: bb,
              position: {
                Kb: "catmull-rom-spline",
                point: [0, .5 === bb ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((bb => ({
              timeFraction: bb,
              rotation: {
                Kb: "catmull-rom-spline",
                point: [0, .25 === bb ? .12 : .75 === bb ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Gb(bb, hb)
          },
          ArmRightMesh: {
            timeline: Gb(ub, -hb)
          }
        }
      }
    }
    const Lb = Ub([0, 0, 0], [0, 0, 0], .07),
      Yb = (0, Ob.b)((0, Bb.f)(Lb), "mobIdle"),
      Sb = Ub([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      ab = Ub([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Hb = (0, Ob.b)((0, Bb.f)(Sb), "gunReady"),
      wb = (0, Ob.b)((0, Bb.f)(ab), "gunAimed")
  },
  38250: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      e: () => Gb
    });
    const Bb = new WeakMap;

    function Ob(bb, ub) {
      return Bb.set(bb, ub), bb
    }

    function Gb(bb) {
      var ub;
      return null !== (ub = Bb.get(bb)) && void 0 !== ub ? ub : null
    }
  },
  9124: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      c: () => Ob,
      g: () => ab
    });
    var Bb = hb(1463);

    function Ob(bb) {
      var ub;
      return {
        ...Ub.store,
        yaw: Ub.store.yaw + (null !== (ub = Bb.e[bb].previewYaw) && void 0 !== ub ? ub : 0)
      }
    }
    const Gb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Ub = {
        player: Gb,
        store: {
          ...Gb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Lb(bb, ub) {
      bb instanceof Promise ? bb.then(ub).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ub(bb)
    }
    class Yb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ub;
        this.view = bb, null === (ub = this.opened) || void 0 === ub || ub.show(bb)
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Sb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ub;
        return null !== (bb = null === (ub = this.opened) || void 0 === ub ? void 0 : ub.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ub) {
        var hb;
        null === (hb = this.opened) || void 0 === hb || hb.setCosmetic(bb, ub)
      }
      playEmote(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.playEmote(bb)
      }
      setOrbit(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ub;
        await this.ready, await (null === (ub = this.opened) || void 0 === ub ? void 0 : ub.untilDrawn(bb))
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const ab = new class {
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
        return new Yb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Yb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Yb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ub) {
        return new Sb(this.current().openCharacter(bb, ub))
      }
    }
  },
  9122: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb.b,
      f: () => Bb.c,
      j: () => Bb.g
    });
    var Bb = hb(9124);
    class Ob {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class Gb {
      constructor() {
        this.mobScene = new Ob((() => Promise.all([hb.e(70), hb.e(227), hb.e(226), hb.e(246), hb.e(95), hb.e(247), hb.e(73), hb.e(72), hb.e(244), hb.e(71), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(265), hb.e(223), hb.e(238), hb.e(249), hb.e(252), hb.e(75), hb.e(197), hb.e(217), hb.e(94), hb.e(220), hb.e(235), hb.e(114), hb.e(236), hb.e(74), hb.e(113), hb.e(155)]).then((() => hb(40524))))), this.characterScene = new Ob((() => Promise.all([hb.e(70), hb.e(227), hb.e(226), hb.e(246), hb.e(95), hb.e(247), hb.e(73), hb.e(72), hb.e(244), hb.e(71), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(265), hb.e(223), hb.e(238), hb.e(249), hb.e(252), hb.e(75), hb.e(197), hb.e(217), hb.e(94), hb.e(220), hb.e(235), hb.e(114), hb.e(236), hb.e(74), hb.e(113), hb.e(154)]).then((() => hb(40617)))))
      }
      openMob(bb) {
        return this.mobScene.run((ub => ub.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((ub => ub.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((ub => ub.openMobLineupPreview(bb)))
      }
      openCharacter(bb, ub) {
        return this.characterScene.run((hb => hb.openCharacterPreview(bb, ub)))
      }
    }
    Bb.g.setDefaultHost((() => new Gb))
  },
  41210: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      FrontlineMvpLineup: () => Hb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(9122),
      Lb = hb(40982),
      Yb = hb(40976),
      Sb = hb(1007);

    function ab(bb) {
      return Ub.j.openMobLineup(bb)
    }
    const Hb = (0, Bb.memo)((function(bb) {
      let {
        players: ub,
        className: hb
      } = bb;
      const Ob = (0, Bb.useRef)(null),
        Ub = (0, Bb.useMemo)((() => ub.map((bb => {
          let {
            cosmetics: ub,
            size: hb,
            heldGun: Bb
          } = bb;
          return {
            cosmetics: ub,
            size: hb,
            bC: Bb.name,
            animation: Bb.aimed ? Lb.b : Lb.c
          }
        }))), [ub]),
        Hb = function(bb) {
          const [ub, hb] = (0, Bb.useState)([]);
          return (0, Bb.useEffect)((() => {
            hb(bb.map((() => !1)));
            const ub = bb.map(((bb, ub) => {
              let {
                showAfterMs: Bb
              } = bb;
              return window.setTimeout((() => {
                hb((bb => bb.map(((bb, hb) => bb || hb === ub))))
              }), Bb)
            }));
            return () => {
              for (const bb of ub) window.clearTimeout(bb)
            }
          }), [bb]), ub
        }(ub),
        wb = (0, Bb.useMemo)((() => ({
          figures: Ub,
          shown: Hb
        })), [Ub, Hb]);
      return (0, Yb.d)(Ob, ab, wb), (0, Sb.jsx)("div", {
        className: Gb()("MobPreview", hb),
        ref: Ob
      })
    }))
  },
  36787: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      f: () => Ub
    });
    var Bb = hb(36772),
      Ob = hb(314),
      Gb = hb(1784);

    function Ub(bb) {
      if ("Xb" in bb) return db.createAnimationScript(bb);
      return new Sb(bb).createAnimationScript()
    }

    function Lb(bb, ub, hb, Ob) {
      const Gb = bb.Xb <= 0 ? 1 : ub + hb * Math.max(0, Ob) / bb.Xb;
      return bb.pb === Bb.k.LoopOnLastFrame ? Gb % 1 : bb.pb === Bb.k.NoLoop && Gb >= 1 ? null : Math.min(1, Gb)
    }
    class Yb {
      createAnimationScript(bb) {
        const {
          Xb: ub,
          loop: hb,
          ob: Bb
        } = bb;
        return {
          Xb: Math.round(ub),
          pb: this.createLoopMode(null !== hb && void 0 !== hb && hb),
          ob: this.createNodeSkeletonAnimationScript(null !== Bb && void 0 !== Bb ? Bb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return Bb.k.NoLoop;
          case !0:
            return Bb.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Bb.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const ub = {};
        for (const hb in bb) {
          const Bb = bb[hb];
          ub[hb] = this.createNodeAnimationScript(Bb)
        }
        return ub
      }
      createNodeAnimationScript(bb) {
        const {
          timeline: ub
        } = bb, hb = ub.filter((bb => Number.isFinite(bb.timeFraction)));
        return hb.sort(((bb, ub) => bb.timeFraction - ub.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(hb, "rotation", wb),
          position: this.createTimelineFromKeyframes(hb, "position", Xb)
        }
      }
      createTimelineFromKeyframes(bb, ub, hb) {
        const Bb = [];
        for (const Yb of bb) {
          const bb = Yb[ub];
          if (bb) {
            const ub = this.createAnimationFrameWithoutPrecomputes(Yb.timeFraction, bb);
            ab(ub) && Bb.push(ub)
          }
        }
        const Ob = [];
        for (let Yb = 0; Yb < Bb.length; Yb++) {
          var Gb, Ub, Lb;
          const bb = Bb[Yb],
            ub = null !== (Gb = Bb[Yb - 1]) && void 0 !== Gb ? Gb : bb,
            Sb = null !== (Ub = Bb[Yb + 1]) && void 0 !== Ub ? Ub : bb,
            ab = null !== (Lb = Bb[Yb + 2]) && void 0 !== Lb ? Lb : Sb;
          Ob.push({
            ...bb,
            ...hb(ub.post, ub.timeFraction, bb.post, bb.timeFraction, Sb.pre, Sb.timeFraction, ab.pre, ab.timeFraction)
          })
        }
        return Ob
      }
      createAnimationFrameWithoutPrecomputes(bb, ub) {
        let hb, Bb, Ob = null;
        var Gb;
        if ("object" === typeof ub && "point" in ub) Ob = null !== (Gb = ub.Kb) && void 0 !== Gb ? Gb : null, hb = ub.point, Bb = ub.point;
        else if ("object" === typeof ub && "pre" in ub) {
          var Ub;
          Ob = null !== (Ub = ub.Kb) && void 0 !== Ub ? Ub : null, hb = ub.pre, Bb = ub.post
        } else hb = ub, Bb = ub;
        return {
          timeFraction: bb,
          Kb: this.createLerpMode(Ob),
          pre: hb,
          post: Bb
        }
      }
      createLerpMode(bb) {
        return null === bb ? Bb.h.Linear : Yb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }
    Yb.LERP_MODE_SCHEMA_MAPPING = {
      linear: Bb.h.Linear,
      "catmull-rom-spline": Bb.h.CatmullRomSpline
    };
    class Sb {
      constructor(bb) {
        this.animationSchema = bb
      }
      createAnimationScript() {
        const {
          animation_length: bb,
          loop: ub,
          bones: hb
        } = this.animationSchema;
        return {
          Xb: Math.round(1e3 * bb),
          pb: this.createLoopMode(null !== ub && void 0 !== ub && ub),
          ob: this.createNodeSkeletonAnimationScript(null !== hb && void 0 !== hb ? hb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return Bb.k.NoLoop;
          case !0:
            return Bb.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Bb.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const ub = {};
        for (const hb in bb) {
          const Bb = bb[hb];
          ub[hb] = this.createNodeAnimationScript(Bb)
        }
        return ub
      }
      createNodeAnimationScript(bb) {
        const {
          rotation: ub,
          position: hb
        } = bb;
        return {
          rotation: this.createAnimationTimeline(null !== ub && void 0 !== ub ? ub : null, ob, wb, !0),
          position: this.createAnimationTimeline(null !== hb && void 0 !== hb ? hb : null, lb, Xb, !1)
        }
      }
      createAnimationTimeline(bb, ub, hb, Bb) {
        if (null === bb) return [];
        if (Array.isArray(bb)) {
          bb = {
            "0.0": bb
          }
        }
        const Ob = Object.entries(bb).map((bb => {
          let [hb, Bb] = bb;
          const Ob = Number(hb) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Ob, Bb, ub)
        })).filter(ab);
        Ob.sort(((bb, ub) => bb.timeFraction - ub.timeFraction)), Bb && function(bb) {
          for (let ub = 1; ub < bb.length; ub++) {
            const hb = bb[ub - 1].post,
              Bb = bb[ub],
              Ob = Kb(Bb.pre),
              Gb = Kb(Bb.post),
              Ub = Cb(hb, Bb.pre);
            Cb(hb, Ob) < Ub && (bb[ub] = {
              ...Bb,
              pre: Ob,
              post: Gb
            })
          }
        }(Ob);
        const Gb = [];
        for (let Sb = 0; Sb < Ob.length; Sb++) {
          var Ub, Lb, Yb;
          const bb = Ob[Sb],
            ub = null !== (Ub = Ob[Sb - 1]) && void 0 !== Ub ? Ub : bb,
            Bb = null !== (Lb = Ob[Sb + 1]) && void 0 !== Lb ? Lb : bb,
            ab = null !== (Yb = Ob[Sb + 2]) && void 0 !== Yb ? Yb : Bb;
          Gb.push({
            ...bb,
            ...hb(ub.post, ub.timeFraction, bb.post, bb.timeFraction, Bb.pre, Bb.timeFraction, ab.pre, ab.timeFraction)
          })
        }
        return Gb
      }
      createAnimationFrameWithoutPrecomputes(bb, ub, hb) {
        let Bb, Ob, Gb = null;
        if ("object" === typeof ub && "post" in ub) {
          var Ub;
          Gb = null !== (Ub = ub.lerp_mode) && void 0 !== Ub ? Ub : null, Ob = pb(ub.post, hb), Bb = ub.pre ? pb(ub.pre, hb) : Ob
        } else {
          const bb = pb(ub, hb);
          Ob = bb, Bb = bb
        }
        return {
          timeFraction: bb,
          Kb: this.createLerpMode(Gb),
          pre: Bb,
          post: Ob
        }
      }
      createLerpMode(bb) {
        return null === bb ? Bb.h.Linear : Sb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }

    function ab(bb) {
      return Number.isFinite(bb.timeFraction) && Hb(bb.pre) && Hb(bb.post)
    }

    function Hb(bb) {
      return Number.isFinite(bb[0]) && Number.isFinite(bb[1]) && Number.isFinite(bb[2])
    }

    function wb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
      const Yb = Gb - ub,
        Sb = Gb - Bb,
        ab = Lb - Bb,
        Hb = [null, null, null];
      for (let wb = 0; wb < Hb.length; wb++) Hb[wb] = Zb(bb[wb], hb[wb], Ob[wb], Ub[wb], Yb, ab);
      return {
        Wb: Sb,
        Cb: Hb
      }
    }

    function Zb(bb, ub, hb, Bb, Gb, Ub) {
      return {
        jb: Ob.d.computeShortestRotation(bb, hb) / Gb,
        nb: Ob.d.computeShortestRotation(ub, Bb) / Ub,
        delta: Ob.d.computeShortestRotation(ub, hb)
      }
    }

    function Xb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
      const Yb = Gb - ub,
        Sb = Gb - Bb,
        ab = Lb - Bb,
        Hb = [null, null, null];
      for (let wb = 0; wb < Hb.length; wb++) Hb[wb] = {
        jb: (Ob[wb] - bb[wb]) / Yb,
        nb: (Ub[wb] - hb[wb]) / ab,
        delta: Ob[wb] - hb[wb]
      };
      return {
        Wb: Sb,
        Cb: Hb
      }
    }

    function pb(bb, ub) {
      return null === ub ? bb : ub(bb)
    }

    function ob(bb) {
      const [ub, hb, Bb] = bb, Ub = -(0, Gb.k)(ub), Lb = -(0, Gb.k)(hb), Yb = (0, Gb.k)(Bb), Sb = Ob.d.quaternionFromEulerZYX(Ub, Lb, Yb);
      return Ob.d.eulerYXZFromQuaternion(Sb)
    }
    Sb.LERP_MODE_SCHEMA_MAPPING = {
      linear: Bb.h.Linear,
      catmullrom: Bb.h.CatmullRomSpline
    };
    const Ab = 1 / 16;

    function lb(bb) {
      return [-bb[0] * Ab, bb[1] * Ab, bb[2] * Ab]
    }

    function Kb(bb) {
      const [ub, hb, Bb] = bb;
      return [ub >= 0 ? Math.PI - ub : -Math.PI - ub, Wb(hb + Math.PI), Wb(Bb + Math.PI)]
    }

    function Wb(bb) {
      return Ob.d.mod(bb + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Cb(bb, ub) {
      return Math.abs(Ob.d.computeShortestRotation(bb[0], ub[0])) + Math.abs(Ob.d.computeShortestRotation(bb[1], ub[1])) + Math.abs(Ob.d.computeShortestRotation(bb[2], ub[2]))
    }
    const db = new Yb
  },
  36772: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      f: () => Gb,
      h: () => Bb,
      k: () => Ob
    });
    let Bb = function(bb) {
        return bb[bb.Linear = 0] = "Linear", bb[bb.CatmullRomSpline = 1] = "CatmullRomSpline", bb
      }({}),
      Ob = function(bb) {
        return bb[bb.NoLoop = 0] = "NoLoop", bb[bb.LoopOnLastFrame = 1] = "LoopOnLastFrame", bb[bb.HoldOnLastFrame = 2] = "HoldOnLastFrame", bb
      }({}),
      Gb = function(bb) {
        return bb[bb.Movement = 0] = "Movement", bb[bb.Action = 1] = "Action", bb[bb.Emote = 2] = "Emote", bb[bb.Custom = 3] = "Custom", bb
      }({}),
      Ub = function(bb) {
        return bb[bb.Start = 0] = "Start", bb[bb.Stop = 1] = "Stop", bb
      }({})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);