export const id = 192;
export const ids = [192];
export const modules = {
  41279: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(57),
      lq = gq(2660);

    function Oq(qq, Eq, gq) {
      const Oq = (0, Yq.useRef)(null),
        {
          width: mq,
          height: xq
        } = (0, lq.e)(qq);
      (0, Yq.useEffect)((() => {
        const gq = Eq(qq.current);
        return Oq.current = gq, () => {
          gq.close(), Oq.current = null
        }
      }), [qq, Eq]), (0, Yq.useEffect)((() => {
        mq <= 0 || xq <= 0 || Oq.current.resize(mq, xq)
      }), [mq, xq]), (0, Yq.useEffect)((() => {
        Oq.current.show(gq)
      }), [gq])
    }
  },
  41285: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Wq,
      f: () => Bq,
      j: () => Aq
    });
    var Yq = gq(37195),
      lq = gq(38611);

    function Oq(qq, Eq) {
      let [gq, Yq, lq] = qq;
      return [0, .5, 1].map((qq => ({
        timeFraction: qq,
        rotation: {
          oq: "catmull-rom-spline",
          point: [gq, Yq, lq + (.5 === qq ? Eq : 0)]
        }
      })))
    }

    function mq(qq, Eq, gq) {
      return {
        aq: 3200,
        loop: !0,
        dq: {
          Root: {
            timeline: [0, .5, 1].map((qq => ({
              timeFraction: qq,
              position: {
                oq: "catmull-rom-spline",
                point: [0, .5 === qq ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((qq => ({
              timeFraction: qq,
              rotation: {
                oq: "catmull-rom-spline",
                point: [0, .25 === qq ? .12 : .75 === qq ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Oq(qq, gq)
          },
          ArmRightMesh: {
            timeline: Oq(Eq, -gq)
          }
        }
      }
    }
    const xq = mq([0, 0, 0], [0, 0, 0], .07),
      Aq = (0, lq.b)((0, Yq.g)(xq), "mobIdle"),
      cq = mq([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      uq = mq([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Bq = (0, lq.b)((0, Yq.g)(cq), "gunReady"),
      Wq = (0, lq.b)((0, Yq.g)(uq), "gunAimed")
  },
  38611: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      f: () => Oq
    });
    const Yq = new WeakMap;

    function lq(qq, Eq) {
      return Yq.set(qq, Eq), qq
    }

    function Oq(qq) {
      var Eq;
      return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
    }
  },
  9321: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      d: () => lq,
      f: () => uq
    });
    var Yq = gq(1547);

    function lq(qq) {
      var Eq;
      return {
        ...mq.store,
        yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
      }
    }
    const Oq = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mq = {
        player: Oq,
        store: {
          ...Oq,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function xq(qq, Eq) {
      qq instanceof Promise ? qq.then(Eq).catch((qq => {
        console.error("Couldn't open the preview", qq)
      })) : Eq(qq)
    }
    class Aq {
      constructor(qq) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height), null !== this.view && qq.show(this.view))
        }))
      }
      show(qq) {
        var Eq;
        this.view = qq, null === (Eq = this.opened) || void 0 === Eq || Eq.show(qq)
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    class cq {
      constructor(qq) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(qq).then((qq => qq.ready)), xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.isReady()) && void 0 !== qq && qq
      }
      setCosmetic(qq, Eq) {
        var gq;
        null === (gq = this.opened) || void 0 === gq || gq.setCosmetic(qq, Eq)
      }
      playEmote(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.playEmote(qq)
      }
      setOrbit(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.setOrbit(qq)
      }
      resetCamera() {
        var qq;
        null === (qq = this.opened) || void 0 === qq || qq.resetCamera()
      }
      async untilDrawn(qq) {
        var Eq;
        await this.ready, await (null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.untilDrawn(qq))
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    const uq = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(qq) {
        this.host = qq
      }
      setDefaultHost(qq) {
        this.makeDefault = qq
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(qq) {
        return new Aq(this.current().openMob(qq))
      }
      openPet(qq) {
        return new Aq(this.current().openPet(qq))
      }
      openMobLineup(qq) {
        return new Aq(this.current().openMobLineup(qq))
      }
      openCharacter(qq, Eq) {
        return new cq(this.current().openCharacter(qq, Eq))
      }
    }
  },
  9313: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq.c,
      f: () => Yq.d,
      i: () => Yq.f
    });
    var Yq = gq(9321);
    class lq {
      constructor(qq) {
        this.load = qq, this.loaded = null, this.loading = null
      }
      run(qq) {
        return null !== this.loaded ? qq(this.loaded) : (this.loading ??= this.load().then((qq => (this.loaded = qq, qq)), (qq => {
          throw this.loading = null, qq
        })), this.loading.then(qq))
      }
    }
    class Oq {
      constructor() {
        this.mobScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e(197), gq.e(217), gq.e(94), gq.e(220), gq.e(235), gq.e(114), gq.e(236), gq.e(74), gq.e(113), gq.e(155)]).then((() => gq(40829))))), this.characterScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e(197), gq.e(217), gq.e(94), gq.e(220), gq.e(235), gq.e(114), gq.e(236), gq.e(74), gq.e(113), gq.e(154)]).then((() => gq(40917)))))
      }
      openMob(qq) {
        return this.mobScene.run((Eq => Eq.openMobPreview(qq)))
      }
      openPet(qq) {
        return this.mobScene.run((Eq => Eq.openPetPreview(qq)))
      }
      openMobLineup(qq) {
        return this.mobScene.run((Eq => Eq.openMobLineupPreview(qq)))
      }
      openCharacter(qq, Eq) {
        return this.characterScene.run((gq => gq.openCharacterPreview(qq, Eq)))
      }
    }
    Yq.f.setDefaultHost((() => new Oq))
  },
  41509: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      FrontlineMvpLineup: () => Bq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(9313),
      xq = gq(41285),
      Aq = gq(41279),
      cq = gq(1070);

    function uq(qq) {
      return mq.i.openMobLineup(qq)
    }
    const Bq = (0, Yq.memo)((function(qq) {
      let {
        players: Eq,
        className: gq
      } = qq;
      const lq = (0, Yq.useRef)(null),
        mq = (0, Yq.useMemo)((() => Eq.map((qq => {
          let {
            cosmetics: Eq,
            size: gq,
            heldGun: Yq
          } = qq;
          return {
            cosmetics: Eq,
            size: gq,
            aZ: Yq.name,
            animation: Yq.aimed ? xq.d : xq.f
          }
        }))), [Eq]),
        Bq = function(qq) {
          const [Eq, gq] = (0, Yq.useState)([]);
          return (0, Yq.useEffect)((() => {
            gq(qq.map((() => !1)));
            const Eq = qq.map(((qq, Eq) => {
              let {
                showAfterMs: Yq
              } = qq;
              return window.setTimeout((() => {
                gq((qq => qq.map(((qq, gq) => qq || gq === Eq))))
              }), Yq)
            }));
            return () => {
              for (const qq of Eq) window.clearTimeout(qq)
            }
          }), [qq]), Eq
        }(Eq),
        Wq = (0, Yq.useMemo)((() => ({
          figures: mq,
          shown: Bq
        })), [mq, Bq]);
      return (0, Aq.d)(lq, uq, Wq), (0, cq.jsx)("div", {
        className: Oq()("MobPreview", gq),
        ref: lq
      })
    }))
  },
  37195: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      g: () => mq
    });
    var Yq = gq(37183),
      lq = gq(307),
      Oq = gq(1870);

    function mq(qq) {
      if ("aq" in qq) return yq.createAnimationScript(qq);
      return new cq(qq).createAnimationScript()
    }

    function xq(qq, Eq, gq, lq) {
      const Oq = qq.aq <= 0 ? 1 : Eq + gq * Math.max(0, lq) / qq.aq;
      return qq.Vq === Yq.l.LoopOnLastFrame ? Oq % 1 : qq.Vq === Yq.l.NoLoop && Oq >= 1 ? null : Math.min(1, Oq)
    }
    class Aq {
      createAnimationScript(qq) {
        const {
          aq: Eq,
          loop: gq,
          dq: Yq
        } = qq;
        return {
          aq: Math.round(Eq),
          Vq: this.createLoopMode(null !== gq && void 0 !== gq && gq),
          dq: this.createNodeSkeletonAnimationScript(null !== Yq && void 0 !== Yq ? Yq : null)
        }
      }
      createLoopMode(qq) {
        switch (qq) {
          case !1:
            return Yq.l.NoLoop;
          case !0:
            return Yq.l.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Yq.l.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${qq}`)
      }
      createNodeSkeletonAnimationScript(qq) {
        if (null === qq) return null;
        const Eq = {};
        for (const gq in qq) {
          const Yq = qq[gq];
          Eq[gq] = this.createNodeAnimationScript(Yq)
        }
        return Eq
      }
      createNodeAnimationScript(qq) {
        const {
          timeline: Eq
        } = qq, gq = Eq.filter((qq => Number.isFinite(qq.timeFraction)));
        return gq.sort(((qq, Eq) => qq.timeFraction - Eq.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(gq, "rotation", Wq),
          position: this.createTimelineFromKeyframes(gq, "position", aq)
        }
      }
      createTimelineFromKeyframes(qq, Eq, gq) {
        const Yq = [];
        for (const Aq of qq) {
          const qq = Aq[Eq];
          if (qq) {
            const Eq = this.createAnimationFrameWithoutPrecomputes(Aq.timeFraction, qq);
            uq(Eq) && Yq.push(Eq)
          }
        }
        const lq = [];
        for (let Aq = 0; Aq < Yq.length; Aq++) {
          var Oq, mq, xq;
          const qq = Yq[Aq],
            Eq = null !== (Oq = Yq[Aq - 1]) && void 0 !== Oq ? Oq : qq,
            cq = null !== (mq = Yq[Aq + 1]) && void 0 !== mq ? mq : qq,
            uq = null !== (xq = Yq[Aq + 2]) && void 0 !== xq ? xq : cq;
          lq.push({
            ...qq,
            ...gq(Eq.post, Eq.timeFraction, qq.post, qq.timeFraction, cq.pre, cq.timeFraction, uq.pre, uq.timeFraction)
          })
        }
        return lq
      }
      createAnimationFrameWithoutPrecomputes(qq, Eq) {
        let gq, Yq, lq = null;
        var Oq;
        if ("object" === typeof Eq && "point" in Eq) lq = null !== (Oq = Eq.oq) && void 0 !== Oq ? Oq : null, gq = Eq.point, Yq = Eq.point;
        else if ("object" === typeof Eq && "pre" in Eq) {
          var mq;
          lq = null !== (mq = Eq.oq) && void 0 !== mq ? mq : null, gq = Eq.pre, Yq = Eq.post
        } else gq = Eq, Yq = Eq;
        return {
          timeFraction: qq,
          oq: this.createLerpMode(lq),
          pre: gq,
          post: Yq
        }
      }
      createLerpMode(qq) {
        return null === qq ? Yq.k.Linear : Aq.LERP_MODE_SCHEMA_MAPPING[qq]
      }
    }
    Aq.LERP_MODE_SCHEMA_MAPPING = {
      linear: Yq.k.Linear,
      "catmull-rom-spline": Yq.k.CatmullRomSpline
    };
    class cq {
      constructor(qq) {
        this.animationSchema = qq
      }
      createAnimationScript() {
        const {
          animation_length: qq,
          loop: Eq,
          bones: gq
        } = this.animationSchema;
        return {
          aq: Math.round(1e3 * qq),
          Vq: this.createLoopMode(null !== Eq && void 0 !== Eq && Eq),
          dq: this.createNodeSkeletonAnimationScript(null !== gq && void 0 !== gq ? gq : null)
        }
      }
      createLoopMode(qq) {
        switch (qq) {
          case !1:
            return Yq.l.NoLoop;
          case !0:
            return Yq.l.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Yq.l.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${qq}`)
      }
      createNodeSkeletonAnimationScript(qq) {
        if (null === qq) return null;
        const Eq = {};
        for (const gq in qq) {
          const Yq = qq[gq];
          Eq[gq] = this.createNodeAnimationScript(Yq)
        }
        return Eq
      }
      createNodeAnimationScript(qq) {
        const {
          rotation: Eq,
          position: gq
        } = qq;
        return {
          rotation: this.createAnimationTimeline(null !== Eq && void 0 !== Eq ? Eq : null, dq, Wq, !0),
          position: this.createAnimationTimeline(null !== gq && void 0 !== gq ? gq : null, Hq, aq, !1)
        }
      }
      createAnimationTimeline(qq, Eq, gq, Yq) {
        if (null === qq) return [];
        if (Array.isArray(qq)) {
          qq = {
            "0.0": qq
          }
        }
        const lq = Object.entries(qq).map((qq => {
          let [gq, Yq] = qq;
          const lq = Number(gq) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(lq, Yq, Eq)
        })).filter(uq);
        lq.sort(((qq, Eq) => qq.timeFraction - Eq.timeFraction)), Yq && function(qq) {
          for (let Eq = 1; Eq < qq.length; Eq++) {
            const gq = qq[Eq - 1].post,
              Yq = qq[Eq],
              lq = oq(Yq.pre),
              Oq = oq(Yq.post),
              mq = Qq(gq, Yq.pre);
            Qq(gq, lq) < mq && (qq[Eq] = {
              ...Yq,
              pre: lq,
              post: Oq
            })
          }
        }(lq);
        const Oq = [];
        for (let cq = 0; cq < lq.length; cq++) {
          var mq, xq, Aq;
          const qq = lq[cq],
            Eq = null !== (mq = lq[cq - 1]) && void 0 !== mq ? mq : qq,
            Yq = null !== (xq = lq[cq + 1]) && void 0 !== xq ? xq : qq,
            uq = null !== (Aq = lq[cq + 2]) && void 0 !== Aq ? Aq : Yq;
          Oq.push({
            ...qq,
            ...gq(Eq.post, Eq.timeFraction, qq.post, qq.timeFraction, Yq.pre, Yq.timeFraction, uq.pre, uq.timeFraction)
          })
        }
        return Oq
      }
      createAnimationFrameWithoutPrecomputes(qq, Eq, gq) {
        let Yq, lq, Oq = null;
        if ("object" === typeof Eq && "post" in Eq) {
          var mq;
          Oq = null !== (mq = Eq.lerp_mode) && void 0 !== mq ? mq : null, lq = Vq(Eq.post, gq), Yq = Eq.pre ? Vq(Eq.pre, gq) : lq
        } else {
          const qq = Vq(Eq, gq);
          lq = qq, Yq = qq
        }
        return {
          timeFraction: qq,
          oq: this.createLerpMode(Oq),
          pre: Yq,
          post: lq
        }
      }
      createLerpMode(qq) {
        return null === qq ? Yq.k.Linear : cq.LERP_MODE_SCHEMA_MAPPING[qq]
      }
    }

    function uq(qq) {
      return Number.isFinite(qq.timeFraction) && Bq(qq.pre) && Bq(qq.post)
    }

    function Bq(qq) {
      return Number.isFinite(qq[0]) && Number.isFinite(qq[1]) && Number.isFinite(qq[2])
    }

    function Wq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
      const Aq = Oq - Eq,
        cq = Oq - Yq,
        uq = xq - Yq,
        Bq = [null, null, null];
      for (let Wq = 0; Wq < Bq.length; Wq++) Bq[Wq] = Nq(qq[Wq], gq[Wq], lq[Wq], mq[Wq], Aq, uq);
      return {
        Pq: cq,
        Qq: Bq
      }
    }

    function Nq(qq, Eq, gq, Yq, Oq, mq) {
      return {
        tq: lq.c.computeShortestRotation(qq, gq) / Oq,
        rq: lq.c.computeShortestRotation(Eq, Yq) / mq,
        delta: lq.c.computeShortestRotation(Eq, gq)
      }
    }

    function aq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
      const Aq = Oq - Eq,
        cq = Oq - Yq,
        uq = xq - Yq,
        Bq = [null, null, null];
      for (let Wq = 0; Wq < Bq.length; Wq++) Bq[Wq] = {
        tq: (lq[Wq] - qq[Wq]) / Aq,
        rq: (mq[Wq] - gq[Wq]) / uq,
        delta: lq[Wq] - gq[Wq]
      };
      return {
        Pq: cq,
        Qq: Bq
      }
    }

    function Vq(qq, Eq) {
      return null === Eq ? qq : Eq(qq)
    }

    function dq(qq) {
      const [Eq, gq, Yq] = qq, mq = -(0, Oq.j)(Eq), xq = -(0, Oq.j)(gq), Aq = (0, Oq.j)(Yq), cq = lq.c.quaternionFromEulerZYX(mq, xq, Aq);
      return lq.c.eulerYXZFromQuaternion(cq)
    }
    cq.LERP_MODE_SCHEMA_MAPPING = {
      linear: Yq.k.Linear,
      catmullrom: Yq.k.CatmullRomSpline
    };
    const jq = 1 / 16;

    function Hq(qq) {
      return [-qq[0] * jq, qq[1] * jq, qq[2] * jq]
    }

    function oq(qq) {
      const [Eq, gq, Yq] = qq;
      return [Eq >= 0 ? Math.PI - Eq : -Math.PI - Eq, Pq(gq + Math.PI), Pq(Yq + Math.PI)]
    }

    function Pq(qq) {
      return lq.c.mod(qq + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Qq(qq, Eq) {
      return Math.abs(lq.c.computeShortestRotation(qq[0], Eq[0])) + Math.abs(lq.c.computeShortestRotation(qq[1], Eq[1])) + Math.abs(lq.c.computeShortestRotation(qq[2], Eq[2]))
    }
    const yq = new Aq
  },
  37183: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      g: () => Oq,
      k: () => Yq,
      l: () => lq
    });
    let Yq = function(qq) {
        return qq[qq.Linear = 0] = "Linear", qq[qq.CatmullRomSpline = 1] = "CatmullRomSpline", qq
      }({}),
      lq = function(qq) {
        return qq[qq.NoLoop = 0] = "NoLoop", qq[qq.LoopOnLastFrame = 1] = "LoopOnLastFrame", qq[qq.HoldOnLastFrame = 2] = "HoldOnLastFrame", qq
      }({}),
      Oq = function(qq) {
        return qq[qq.Movement = 0] = "Movement", qq[qq.Action = 1] = "Action", qq[qq.Emote = 2] = "Emote", qq[qq.Custom = 3] = "Custom", qq
      }({}),
      mq = function(qq) {
        return qq[qq.Start = 0] = "Start", qq[qq.Stop = 1] = "Stop", qq
      }({})
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);