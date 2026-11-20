export const id = 191;
export const ids = [191];
export const modules = {
  40944: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(64),
      Wb = sb(2598);

    function ab(bb, cb, sb) {
      const ab = (0, kb.useRef)(null),
        {
          width: Tb,
          height: Ub
        } = (0, Wb.b)(bb);
      (0, kb.useEffect)((() => {
        const sb = cb(bb.current);
        return ab.current = sb, () => {
          sb.close(), ab.current = null
        }
      }), [bb, cb]), (0, kb.useEffect)((() => {
        Tb <= 0 || Ub <= 0 || ab.current.resize(Tb, Ub)
      }), [Tb, Ub]), (0, kb.useEffect)((() => {
        ab.current.show(sb)
      }), [sb])
    }
  },
  40948: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Xb,
      f: () => Mb,
      j: () => Ib
    });
    var kb = sb(36717),
      Wb = sb(38240);

    function ab(bb, cb) {
      let [sb, kb, Wb] = bb;
      return [0, .5, 1].map((bb => ({
        timeFraction: bb,
        rotation: {
          Ra: "catmull-rom-spline",
          point: [sb, kb, Wb + (.5 === bb ? cb : 0)]
        }
      })))
    }

    function Tb(bb, cb, sb) {
      return {
        da: 3200,
        loop: !0,
        ra: {
          Root: {
            timeline: [0, .5, 1].map((bb => ({
              timeFraction: bb,
              position: {
                Ra: "catmull-rom-spline",
                point: [0, .5 === bb ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((bb => ({
              timeFraction: bb,
              rotation: {
                Ra: "catmull-rom-spline",
                point: [0, .25 === bb ? .12 : .75 === bb ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: ab(bb, sb)
          },
          ArmRightMesh: {
            timeline: ab(cb, -sb)
          }
        }
      }
    }
    const Ub = Tb([0, 0, 0], [0, 0, 0], .07),
      Ib = (0, Wb.c)((0, kb.g)(Ub), "mobIdle"),
      Hb = Tb([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      fb = Tb([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Mb = (0, Wb.c)((0, kb.g)(Hb), "gunReady"),
      Xb = (0, Wb.c)((0, kb.g)(fb), "gunAimed")
  },
  38240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => ab
    });
    const kb = new WeakMap;

    function Wb(bb, cb) {
      return kb.set(bb, cb), bb
    }

    function ab(bb) {
      var cb;
      return null !== (cb = kb.get(bb)) && void 0 !== cb ? cb : null
    }
  },
  8960: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      e: () => Wb,
      h: () => fb
    });
    var kb = sb(1544);

    function Wb(bb) {
      var cb;
      return {
        ...Tb.store,
        yaw: Tb.store.yaw + (null !== (cb = kb.b[bb].previewYaw) && void 0 !== cb ? cb : 0)
      }
    }
    const ab = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Tb = {
        player: ab,
        store: {
          ...ab,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ub(bb, cb) {
      bb instanceof Promise ? bb.then(cb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : cb(bb)
    }
    class Ib {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var cb;
        this.view = bb, null === (cb = this.opened) || void 0 === cb || cb.show(bb)
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Hb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, cb;
        return null !== (bb = null === (cb = this.opened) || void 0 === cb ? void 0 : cb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, cb) {
        var sb;
        null === (sb = this.opened) || void 0 === sb || sb.setCosmetic(bb, cb)
      }
      playEmote(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.playEmote(bb)
      }
      setOrbit(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var cb;
        await this.ready, await (null === (cb = this.opened) || void 0 === cb ? void 0 : cb.untilDrawn(bb))
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const fb = new class {
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
        return new Ib(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Ib(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Ib(this.current().openMobLineup(bb))
      }
      openCharacter(bb, cb) {
        return new Hb(this.current().openCharacter(bb, cb))
      }
    }
  },
  8956: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.c,
      g: () => kb.e,
      h: () => kb.h
    });
    var kb = sb(8960);
    class Wb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class ab {
      constructor() {
        this.mobScene = new Wb((() => Promise.all([sb.e(69), sb.e(226), sb.e(225), sb.e(244), sb.e(94), sb.e(245), sb.e(72), sb.e(71), sb.e(242), sb.e(70), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(218), sb.e(264), sb.e(222), sb.e(236), sb.e(247), sb.e(250), sb.e(74), sb.e(196), sb.e(215), sb.e(219), sb.e(93), sb.e(113), sb.e(234), sb.e(73), sb.e(112), sb.e(153)]).then((() => sb(40505))))), this.characterScene = new Wb((() => Promise.all([sb.e(69), sb.e(226), sb.e(225), sb.e(244), sb.e(94), sb.e(245), sb.e(72), sb.e(71), sb.e(242), sb.e(70), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(218), sb.e(264), sb.e(222), sb.e(236), sb.e(247), sb.e(250), sb.e(74), sb.e(196), sb.e(215), sb.e(219), sb.e(93), sb.e(113), sb.e(234), sb.e(73), sb.e(112), sb.e(152)]).then((() => sb(40593)))))
      }
      openMob(bb) {
        return this.mobScene.run((cb => cb.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((cb => cb.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((cb => cb.openMobLineupPreview(bb)))
      }
      openCharacter(bb, cb) {
        return this.characterScene.run((sb => sb.openCharacterPreview(bb, cb)))
      }
    }
    kb.h.setDefaultHost((() => new ab))
  },
  41149: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      FrontlineMvpLineup: () => Mb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(8956),
      Ub = sb(40948),
      Ib = sb(40944),
      Hb = sb(1087);

    function fb(bb) {
      return Tb.h.openMobLineup(bb)
    }
    const Mb = (0, kb.memo)((function(bb) {
      let {
        players: cb,
        className: sb
      } = bb;
      const Wb = (0, kb.useRef)(null),
        Tb = (0, kb.useMemo)((() => cb.map((bb => {
          let {
            cosmetics: cb,
            size: sb,
            heldGun: kb
          } = bb;
          return {
            cosmetics: cb,
            size: sb,
            VV: kb.name,
            animation: kb.aimed ? Ub.d : Ub.f
          }
        }))), [cb]),
        Mb = function(bb) {
          const [cb, sb] = (0, kb.useState)([]);
          return (0, kb.useEffect)((() => {
            sb(bb.map((() => !1)));
            const cb = bb.map(((bb, cb) => {
              let {
                showAfterMs: kb
              } = bb;
              return window.setTimeout((() => {
                sb((bb => bb.map(((bb, sb) => bb || sb === cb))))
              }), kb)
            }));
            return () => {
              for (const bb of cb) window.clearTimeout(bb)
            }
          }), [bb]), cb
        }(cb),
        Xb = (0, kb.useMemo)((() => ({
          figures: Tb,
          shown: Mb
        })), [Tb, Mb]);
      return (0, Ib.b)(Wb, fb, Xb), (0, Hb.jsx)("div", {
        className: ab()("MobPreview", sb),
        ref: Wb
      })
    }))
  },
  36717: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      g: () => Tb
    });
    var kb = sb(36705),
      Wb = sb(344),
      ab = sb(1832);

    function Tb(bb) {
      if ("da" in bb) return ub.createAnimationScript(bb);
      return new Hb(bb).createAnimationScript()
    }

    function Ub(bb, cb, sb, Wb) {
      const ab = bb.da <= 0 ? 1 : cb + sb * Math.max(0, Wb) / bb.da;
      return bb.Aa === kb.m.LoopOnLastFrame ? ab % 1 : bb.Aa === kb.m.NoLoop && ab >= 1 ? null : Math.min(1, ab)
    }
    class Ib {
      createAnimationScript(bb) {
        const {
          da: cb,
          loop: sb,
          ra: kb
        } = bb;
        return {
          da: Math.round(cb),
          Aa: this.createLoopMode(null !== sb && void 0 !== sb && sb),
          ra: this.createNodeSkeletonAnimationScript(null !== kb && void 0 !== kb ? kb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return kb.m.NoLoop;
          case !0:
            return kb.m.LoopOnLastFrame;
          case "hold-on-last-frame":
            return kb.m.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const cb = {};
        for (const sb in bb) {
          const kb = bb[sb];
          cb[sb] = this.createNodeAnimationScript(kb)
        }
        return cb
      }
      createNodeAnimationScript(bb) {
        const {
          timeline: cb
        } = bb, sb = cb.filter((bb => Number.isFinite(bb.timeFraction)));
        return sb.sort(((bb, cb) => bb.timeFraction - cb.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(sb, "rotation", Xb),
          position: this.createTimelineFromKeyframes(sb, "position", mb)
        }
      }
      createTimelineFromKeyframes(bb, cb, sb) {
        const kb = [];
        for (const Ib of bb) {
          const bb = Ib[cb];
          if (bb) {
            const cb = this.createAnimationFrameWithoutPrecomputes(Ib.timeFraction, bb);
            fb(cb) && kb.push(cb)
          }
        }
        const Wb = [];
        for (let Ib = 0; Ib < kb.length; Ib++) {
          var ab, Tb, Ub;
          const bb = kb[Ib],
            cb = null !== (ab = kb[Ib - 1]) && void 0 !== ab ? ab : bb,
            Hb = null !== (Tb = kb[Ib + 1]) && void 0 !== Tb ? Tb : bb,
            fb = null !== (Ub = kb[Ib + 2]) && void 0 !== Ub ? Ub : Hb;
          Wb.push({
            ...bb,
            ...sb(cb.post, cb.timeFraction, bb.post, bb.timeFraction, Hb.pre, Hb.timeFraction, fb.pre, fb.timeFraction)
          })
        }
        return Wb
      }
      createAnimationFrameWithoutPrecomputes(bb, cb) {
        let sb, kb, Wb = null;
        var ab;
        if ("object" === typeof cb && "point" in cb) Wb = null !== (ab = cb.Ra) && void 0 !== ab ? ab : null, sb = cb.point, kb = cb.point;
        else if ("object" === typeof cb && "pre" in cb) {
          var Tb;
          Wb = null !== (Tb = cb.Ra) && void 0 !== Tb ? Tb : null, sb = cb.pre, kb = cb.post
        } else sb = cb, kb = cb;
        return {
          timeFraction: bb,
          Ra: this.createLerpMode(Wb),
          pre: sb,
          post: kb
        }
      }
      createLerpMode(bb) {
        return null === bb ? kb.i.Linear : Ib.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }
    Ib.LERP_MODE_SCHEMA_MAPPING = {
      linear: kb.i.Linear,
      "catmull-rom-spline": kb.i.CatmullRomSpline
    };
    class Hb {
      constructor(bb) {
        this.animationSchema = bb
      }
      createAnimationScript() {
        const {
          animation_length: bb,
          loop: cb,
          bones: sb
        } = this.animationSchema;
        return {
          da: Math.round(1e3 * bb),
          Aa: this.createLoopMode(null !== cb && void 0 !== cb && cb),
          ra: this.createNodeSkeletonAnimationScript(null !== sb && void 0 !== sb ? sb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return kb.m.NoLoop;
          case !0:
            return kb.m.LoopOnLastFrame;
          case "hold_on_last_frame":
            return kb.m.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const cb = {};
        for (const sb in bb) {
          const kb = bb[sb];
          cb[sb] = this.createNodeAnimationScript(kb)
        }
        return cb
      }
      createNodeAnimationScript(bb) {
        const {
          rotation: cb,
          position: sb
        } = bb;
        return {
          rotation: this.createAnimationTimeline(null !== cb && void 0 !== cb ? cb : null, Qb, Xb, !0),
          position: this.createAnimationTimeline(null !== sb && void 0 !== sb ? sb : null, Cb, mb, !1)
        }
      }
      createAnimationTimeline(bb, cb, sb, kb) {
        if (null === bb) return [];
        if (Array.isArray(bb)) {
          bb = {
            "0.0": bb
          }
        }
        const Wb = Object.entries(bb).map((bb => {
          let [sb, kb] = bb;
          const Wb = Number(sb) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Wb, kb, cb)
        })).filter(fb);
        Wb.sort(((bb, cb) => bb.timeFraction - cb.timeFraction)), kb && function(bb) {
          for (let cb = 1; cb < bb.length; cb++) {
            const sb = bb[cb - 1].post,
              kb = bb[cb],
              Wb = Nb(kb.pre),
              ab = Nb(kb.post),
              Tb = Lb(sb, kb.pre);
            Lb(sb, Wb) < Tb && (bb[cb] = {
              ...kb,
              pre: Wb,
              post: ab
            })
          }
        }(Wb);
        const ab = [];
        for (let Hb = 0; Hb < Wb.length; Hb++) {
          var Tb, Ub, Ib;
          const bb = Wb[Hb],
            cb = null !== (Tb = Wb[Hb - 1]) && void 0 !== Tb ? Tb : bb,
            kb = null !== (Ub = Wb[Hb + 1]) && void 0 !== Ub ? Ub : bb,
            fb = null !== (Ib = Wb[Hb + 2]) && void 0 !== Ib ? Ib : kb;
          ab.push({
            ...bb,
            ...sb(cb.post, cb.timeFraction, bb.post, bb.timeFraction, kb.pre, kb.timeFraction, fb.pre, fb.timeFraction)
          })
        }
        return ab
      }
      createAnimationFrameWithoutPrecomputes(bb, cb, sb) {
        let kb, Wb, ab = null;
        if ("object" === typeof cb && "post" in cb) {
          var Tb;
          ab = null !== (Tb = cb.lerp_mode) && void 0 !== Tb ? Tb : null, Wb = lb(cb.post, sb), kb = cb.pre ? lb(cb.pre, sb) : Wb
        } else {
          const bb = lb(cb, sb);
          Wb = bb, kb = bb
        }
        return {
          timeFraction: bb,
          Ra: this.createLerpMode(ab),
          pre: kb,
          post: Wb
        }
      }
      createLerpMode(bb) {
        return null === bb ? kb.i.Linear : Hb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }

    function fb(bb) {
      return Number.isFinite(bb.timeFraction) && Mb(bb.pre) && Mb(bb.post)
    }

    function Mb(bb) {
      return Number.isFinite(bb[0]) && Number.isFinite(bb[1]) && Number.isFinite(bb[2])
    }

    function Xb(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
      const Ib = ab - cb,
        Hb = ab - kb,
        fb = Ub - kb,
        Mb = [null, null, null];
      for (let Xb = 0; Xb < Mb.length; Xb++) Mb[Xb] = nb(bb[Xb], sb[Xb], Wb[Xb], Tb[Xb], Ib, fb);
      return {
        va: Hb,
        Fa: Mb
      }
    }

    function nb(bb, cb, sb, kb, ab, Tb) {
      return {
        ja: Wb.d.computeShortestRotation(bb, sb) / ab,
        bT: Wb.d.computeShortestRotation(cb, kb) / Tb,
        delta: Wb.d.computeShortestRotation(cb, sb)
      }
    }

    function mb(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
      const Ib = ab - cb,
        Hb = ab - kb,
        fb = Ub - kb,
        Mb = [null, null, null];
      for (let Xb = 0; Xb < Mb.length; Xb++) Mb[Xb] = {
        ja: (Wb[Xb] - bb[Xb]) / Ib,
        bT: (Tb[Xb] - sb[Xb]) / fb,
        delta: Wb[Xb] - sb[Xb]
      };
      return {
        va: Hb,
        Fa: Mb
      }
    }

    function lb(bb, cb) {
      return null === cb ? bb : cb(bb)
    }

    function Qb(bb) {
      const [cb, sb, kb] = bb, Tb = -(0, ab.i)(cb), Ub = -(0, ab.i)(sb), Ib = (0, ab.i)(kb), Hb = Wb.d.quaternionFromEulerZYX(Tb, Ub, Ib);
      return Wb.d.eulerYXZFromQuaternion(Hb)
    }
    Hb.LERP_MODE_SCHEMA_MAPPING = {
      linear: kb.i.Linear,
      catmullrom: kb.i.CatmullRomSpline
    };
    const eb = 1 / 16;

    function Cb(bb) {
      return [-bb[0] * eb, bb[1] * eb, bb[2] * eb]
    }

    function Nb(bb) {
      const [cb, sb, kb] = bb;
      return [cb >= 0 ? Math.PI - cb : -Math.PI - cb, Vb(sb + Math.PI), Vb(kb + Math.PI)]
    }

    function Vb(bb) {
      return Wb.d.mod(bb + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Lb(bb, cb) {
      return Math.abs(Wb.d.computeShortestRotation(bb[0], cb[0])) + Math.abs(Wb.d.computeShortestRotation(bb[1], cb[1])) + Math.abs(Wb.d.computeShortestRotation(bb[2], cb[2]))
    }
    const ub = new Ib
  },
  36705: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      f: () => ab,
      i: () => kb,
      m: () => Wb
    });
    let kb = function(bb) {
        return bb[bb.Linear = 0] = "Linear", bb[bb.CatmullRomSpline = 1] = "CatmullRomSpline", bb
      }({}),
      Wb = function(bb) {
        return bb[bb.NoLoop = 0] = "NoLoop", bb[bb.LoopOnLastFrame = 1] = "LoopOnLastFrame", bb[bb.HoldOnLastFrame = 2] = "HoldOnLastFrame", bb
      }({}),
      ab = function(bb) {
        return bb[bb.Movement = 0] = "Movement", bb[bb.Action = 1] = "Action", bb[bb.Emote = 2] = "Emote", bb[bb.Custom = 3] = "Custom", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.Start = 0] = "Start", bb[bb.Stop = 1] = "Stop", bb
      }({})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);