export const id = 192;
export const ids = [192];
export const modules = {
  41493: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(56),
      Nd = kd(2615);

    function Wd(dd, Jd, kd) {
      const Wd = (0, pd.useRef)(null),
        {
          width: Pd,
          height: Zd
        } = (0, Nd.c)(dd);
      (0, pd.useEffect)((() => {
        const kd = Jd(dd.current);
        return Wd.current = kd, () => {
          kd.close(), Wd.current = null
        }
      }), [dd, Jd]), (0, pd.useEffect)((() => {
        Pd <= 0 || Zd <= 0 || Wd.current.resize(Pd, Zd)
      }), [Pd, Zd]), (0, pd.useEffect)((() => {
        Wd.current.show(kd)
      }), [kd])
    }
  },
  41498: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld,
      f: () => od,
      h: () => gd
    });
    var pd = kd(37329),
      Nd = kd(38776);

    function Wd(dd, Jd) {
      let [kd, pd, Nd] = dd;
      return [0, .5, 1].map((dd => ({
        timeFraction: dd,
        rotation: {
          vd: "catmull-rom-spline",
          point: [kd, pd, Nd + (.5 === dd ? Jd : 0)]
        }
      })))
    }

    function Pd(dd, Jd, kd) {
      return {
        Ld: 3200,
        loop: !0,
        Rd: {
          Root: {
            timeline: [0, .5, 1].map((dd => ({
              timeFraction: dd,
              position: {
                vd: "catmull-rom-spline",
                point: [0, .5 === dd ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((dd => ({
              timeFraction: dd,
              rotation: {
                vd: "catmull-rom-spline",
                point: [0, .25 === dd ? .12 : .75 === dd ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Wd(dd, kd)
          },
          ArmRightMesh: {
            timeline: Wd(Jd, -kd)
          }
        }
      }
    }
    const Zd = Pd([0, 0, 0], [0, 0, 0], .07),
      gd = (0, Nd.b)((0, pd.h)(Zd), "mobIdle"),
      Cd = Pd([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Kd = Pd([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      od = (0, Nd.b)((0, pd.h)(Cd), "gunReady"),
      ld = (0, Nd.b)((0, pd.h)(Kd), "gunAimed")
  },
  38776: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      c: () => Wd
    });
    const pd = new WeakMap;

    function Nd(dd, Jd) {
      return pd.set(dd, Jd), dd
    }

    function Wd(dd) {
      var Jd;
      return null !== (Jd = pd.get(dd)) && void 0 !== Jd ? Jd : null
    }
  },
  9274: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      d: () => Nd,
      e: () => Kd
    });
    var pd = kd(1598);

    function Nd(dd) {
      var Jd;
      return {
        ...Pd.store,
        yaw: Pd.store.yaw + (null !== (Jd = pd.c[dd].previewYaw) && void 0 !== Jd ? Jd : 0)
      }
    }
    const Wd = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Pd = {
        player: Wd,
        store: {
          ...Wd,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Zd(dd, Jd) {
      dd instanceof Promise ? dd.then(Jd).catch((dd => {
        console.error("Couldn't open the preview", dd)
      })) : Jd(dd)
    }
    class gd {
      constructor(dd) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Zd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height), null !== this.view && dd.show(this.view))
        }))
      }
      show(dd) {
        var Jd;
        this.view = dd, null === (Jd = this.opened) || void 0 === Jd || Jd.show(dd)
      }
      resize(dd, Jd) {
        var kd;
        this.size = {
          width: dd,
          height: Jd
        }, null === (kd = this.opened) || void 0 === kd || kd.resize(dd, Jd)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    class Cd {
      constructor(dd) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(dd).then((dd => dd.ready)), Zd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.opened) || void 0 === Jd ? void 0 : Jd.isReady()) && void 0 !== dd && dd
      }
      setCosmetic(dd, Jd) {
        var kd;
        null === (kd = this.opened) || void 0 === kd || kd.setCosmetic(dd, Jd)
      }
      playEmote(dd) {
        var Jd;
        null === (Jd = this.opened) || void 0 === Jd || Jd.playEmote(dd)
      }
      setOrbit(dd) {
        var Jd;
        null === (Jd = this.opened) || void 0 === Jd || Jd.setOrbit(dd)
      }
      resetCamera() {
        var dd;
        null === (dd = this.opened) || void 0 === dd || dd.resetCamera()
      }
      async untilDrawn(dd) {
        var Jd;
        await this.ready, await (null === (Jd = this.opened) || void 0 === Jd ? void 0 : Jd.untilDrawn(dd))
      }
      resize(dd, Jd) {
        var kd;
        this.size = {
          width: dd,
          height: Jd
        }, null === (kd = this.opened) || void 0 === kd || kd.resize(dd, Jd)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    const Kd = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(dd) {
        this.host = dd
      }
      setDefaultHost(dd) {
        this.makeDefault = dd
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(dd) {
        return new gd(this.current().openMob(dd))
      }
      openPet(dd) {
        return new gd(this.current().openPet(dd))
      }
      openMobLineup(dd) {
        return new gd(this.current().openMobLineup(dd))
      }
      openCharacter(dd, Jd) {
        return new Cd(this.current().openCharacter(dd, Jd))
      }
    }
  },
  9272: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd.c,
      f: () => pd.d,
      j: () => pd.e
    });
    var pd = kd(9274);
    class Nd {
      constructor(dd) {
        this.load = dd, this.loaded = null, this.loading = null
      }
      run(dd) {
        return null !== this.loaded ? dd(this.loaded) : (this.loading ??= this.load().then((dd => (this.loaded = dd, dd)), (dd => {
          throw this.loading = null, dd
        })), this.loading.then(dd))
      }
    }
    class Wd {
      constructor() {
        this.mobScene = new Nd((() => Promise.all([kd.e(70), kd.e(227), kd.e(226), kd.e(246), kd.e(95), kd.e(247), kd.e(73), kd.e(72), kd.e(244), kd.e(71), kd.e(254), kd.e(248), kd.e(253), kd.e(251), kd.e(243), kd.e(265), kd.e(223), kd.e(238), kd.e(249), kd.e(252), kd.e(75), kd.e(197), kd.e(217), kd.e(94), kd.e(220), kd.e(235), kd.e(114), kd.e(236), kd.e(74), kd.e(113), kd.e(155)]).then((() => kd(41071))))), this.characterScene = new Nd((() => Promise.all([kd.e(70), kd.e(227), kd.e(226), kd.e(246), kd.e(95), kd.e(247), kd.e(73), kd.e(72), kd.e(244), kd.e(71), kd.e(254), kd.e(248), kd.e(253), kd.e(251), kd.e(243), kd.e(265), kd.e(223), kd.e(238), kd.e(249), kd.e(252), kd.e(75), kd.e(197), kd.e(217), kd.e(94), kd.e(220), kd.e(235), kd.e(114), kd.e(236), kd.e(74), kd.e(113), kd.e(154)]).then((() => kd(41150)))))
      }
      openMob(dd) {
        return this.mobScene.run((Jd => Jd.openMobPreview(dd)))
      }
      openPet(dd) {
        return this.mobScene.run((Jd => Jd.openPetPreview(dd)))
      }
      openMobLineup(dd) {
        return this.mobScene.run((Jd => Jd.openMobLineupPreview(dd)))
      }
      openCharacter(dd, Jd) {
        return this.characterScene.run((kd => kd.openCharacterPreview(dd, Jd)))
      }
    }
    pd.e.setDefaultHost((() => new Wd))
  },
  41715: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      FrontlineMvpLineup: () => od
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(9272),
      Zd = kd(41498),
      gd = kd(41493),
      Cd = kd(1103);

    function Kd(dd) {
      return Pd.j.openMobLineup(dd)
    }
    const od = (0, pd.memo)((function(dd) {
      let {
        players: Jd,
        className: kd
      } = dd;
      const Nd = (0, pd.useRef)(null),
        Pd = (0, pd.useMemo)((() => Jd.map((dd => {
          let {
            cosmetics: Jd,
            size: kd,
            heldGun: pd
          } = dd;
          return {
            cosmetics: Jd,
            size: kd,
            Dv: pd.name,
            animation: pd.aimed ? Zd.c : Zd.f
          }
        }))), [Jd]),
        od = function(dd) {
          const [Jd, kd] = (0, pd.useState)([]);
          return (0, pd.useEffect)((() => {
            kd(dd.map((() => !1)));
            const Jd = dd.map(((dd, Jd) => {
              let {
                showAfterMs: pd
              } = dd;
              return window.setTimeout((() => {
                kd((dd => dd.map(((dd, kd) => dd || kd === Jd))))
              }), pd)
            }));
            return () => {
              for (const dd of Jd) window.clearTimeout(dd)
            }
          }), [dd]), Jd
        }(Jd),
        ld = (0, pd.useMemo)((() => ({
          figures: Pd,
          shown: od
        })), [Pd, od]);
      return (0, gd.b)(Nd, Kd, ld), (0, Cd.jsx)("div", {
        className: Wd()("MobPreview", kd),
        ref: Nd
      })
    }))
  },
  37329: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd,
      h: () => Pd
    });
    var pd = kd(37314),
      Nd = kd(313),
      Wd = kd(1901);

    function Pd(dd) {
      if ("Ld" in dd) return qd.createAnimationScript(dd);
      return new Cd(dd).createAnimationScript()
    }

    function Zd(dd, Jd, kd, Nd) {
      const Wd = dd.Ld <= 0 ? 1 : Jd + kd * Math.max(0, Nd) / dd.Ld;
      return dd.Od === pd.k.LoopOnLastFrame ? Wd % 1 : dd.Od === pd.k.NoLoop && Wd >= 1 ? null : Math.min(1, Wd)
    }
    class gd {
      createAnimationScript(dd) {
        const {
          Ld: Jd,
          loop: kd,
          Rd: pd
        } = dd;
        return {
          Ld: Math.round(Jd),
          Od: this.createLoopMode(null !== kd && void 0 !== kd && kd),
          Rd: this.createNodeSkeletonAnimationScript(null !== pd && void 0 !== pd ? pd : null)
        }
      }
      createLoopMode(dd) {
        switch (dd) {
          case !1:
            return pd.k.NoLoop;
          case !0:
            return pd.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return pd.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${dd}`)
      }
      createNodeSkeletonAnimationScript(dd) {
        if (null === dd) return null;
        const Jd = {};
        for (const kd in dd) {
          const pd = dd[kd];
          Jd[kd] = this.createNodeAnimationScript(pd)
        }
        return Jd
      }
      createNodeAnimationScript(dd) {
        const {
          timeline: Jd
        } = dd, kd = Jd.filter((dd => Number.isFinite(dd.timeFraction)));
        return kd.sort(((dd, Jd) => dd.timeFraction - Jd.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(kd, "rotation", ld),
          position: this.createTimelineFromKeyframes(kd, "position", Ld)
        }
      }
      createTimelineFromKeyframes(dd, Jd, kd) {
        const pd = [];
        for (const gd of dd) {
          const dd = gd[Jd];
          if (dd) {
            const Jd = this.createAnimationFrameWithoutPrecomputes(gd.timeFraction, dd);
            Kd(Jd) && pd.push(Jd)
          }
        }
        const Nd = [];
        for (let gd = 0; gd < pd.length; gd++) {
          var Wd, Pd, Zd;
          const dd = pd[gd],
            Jd = null !== (Wd = pd[gd - 1]) && void 0 !== Wd ? Wd : dd,
            Cd = null !== (Pd = pd[gd + 1]) && void 0 !== Pd ? Pd : dd,
            Kd = null !== (Zd = pd[gd + 2]) && void 0 !== Zd ? Zd : Cd;
          Nd.push({
            ...dd,
            ...kd(Jd.post, Jd.timeFraction, dd.post, dd.timeFraction, Cd.pre, Cd.timeFraction, Kd.pre, Kd.timeFraction)
          })
        }
        return Nd
      }
      createAnimationFrameWithoutPrecomputes(dd, Jd) {
        let kd, pd, Nd = null;
        var Wd;
        if ("object" === typeof Jd && "point" in Jd) Nd = null !== (Wd = Jd.vd) && void 0 !== Wd ? Wd : null, kd = Jd.point, pd = Jd.point;
        else if ("object" === typeof Jd && "pre" in Jd) {
          var Pd;
          Nd = null !== (Pd = Jd.vd) && void 0 !== Pd ? Pd : null, kd = Jd.pre, pd = Jd.post
        } else kd = Jd, pd = Jd;
        return {
          timeFraction: dd,
          vd: this.createLerpMode(Nd),
          pre: kd,
          post: pd
        }
      }
      createLerpMode(dd) {
        return null === dd ? pd.j.Linear : gd.LERP_MODE_SCHEMA_MAPPING[dd]
      }
    }
    gd.LERP_MODE_SCHEMA_MAPPING = {
      linear: pd.j.Linear,
      "catmull-rom-spline": pd.j.CatmullRomSpline
    };
    class Cd {
      constructor(dd) {
        this.animationSchema = dd
      }
      createAnimationScript() {
        const {
          animation_length: dd,
          loop: Jd,
          bones: kd
        } = this.animationSchema;
        return {
          Ld: Math.round(1e3 * dd),
          Od: this.createLoopMode(null !== Jd && void 0 !== Jd && Jd),
          Rd: this.createNodeSkeletonAnimationScript(null !== kd && void 0 !== kd ? kd : null)
        }
      }
      createLoopMode(dd) {
        switch (dd) {
          case !1:
            return pd.k.NoLoop;
          case !0:
            return pd.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return pd.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${dd}`)
      }
      createNodeSkeletonAnimationScript(dd) {
        if (null === dd) return null;
        const Jd = {};
        for (const kd in dd) {
          const pd = dd[kd];
          Jd[kd] = this.createNodeAnimationScript(pd)
        }
        return Jd
      }
      createNodeAnimationScript(dd) {
        const {
          rotation: Jd,
          position: kd
        } = dd;
        return {
          rotation: this.createAnimationTimeline(null !== Jd && void 0 !== Jd ? Jd : null, ed, ld, !0),
          position: this.createAnimationTimeline(null !== kd && void 0 !== kd ? kd : null, Id, Ld, !1)
        }
      }
      createAnimationTimeline(dd, Jd, kd, pd) {
        if (null === dd) return [];
        if (Array.isArray(dd)) {
          dd = {
            "0.0": dd
          }
        }
        const Nd = Object.entries(dd).map((dd => {
          let [kd, pd] = dd;
          const Nd = Number(kd) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Nd, pd, Jd)
        })).filter(Kd);
        Nd.sort(((dd, Jd) => dd.timeFraction - Jd.timeFraction)), pd && function(dd) {
          for (let Jd = 1; Jd < dd.length; Jd++) {
            const kd = dd[Jd - 1].post,
              pd = dd[Jd],
              Nd = Gd(pd.pre),
              Wd = Gd(pd.post),
              Pd = xd(kd, pd.pre);
            xd(kd, Nd) < Pd && (dd[Jd] = {
              ...pd,
              pre: Nd,
              post: Wd
            })
          }
        }(Nd);
        const Wd = [];
        for (let Cd = 0; Cd < Nd.length; Cd++) {
          var Pd, Zd, gd;
          const dd = Nd[Cd],
            Jd = null !== (Pd = Nd[Cd - 1]) && void 0 !== Pd ? Pd : dd,
            pd = null !== (Zd = Nd[Cd + 1]) && void 0 !== Zd ? Zd : dd,
            Kd = null !== (gd = Nd[Cd + 2]) && void 0 !== gd ? gd : pd;
          Wd.push({
            ...dd,
            ...kd(Jd.post, Jd.timeFraction, dd.post, dd.timeFraction, pd.pre, pd.timeFraction, Kd.pre, Kd.timeFraction)
          })
        }
        return Wd
      }
      createAnimationFrameWithoutPrecomputes(dd, Jd, kd) {
        let pd, Nd, Wd = null;
        if ("object" === typeof Jd && "post" in Jd) {
          var Pd;
          Wd = null !== (Pd = Jd.lerp_mode) && void 0 !== Pd ? Pd : null, Nd = Od(Jd.post, kd), pd = Jd.pre ? Od(Jd.pre, kd) : Nd
        } else {
          const dd = Od(Jd, kd);
          Nd = dd, pd = dd
        }
        return {
          timeFraction: dd,
          vd: this.createLerpMode(Wd),
          pre: pd,
          post: Nd
        }
      }
      createLerpMode(dd) {
        return null === dd ? pd.j.Linear : Cd.LERP_MODE_SCHEMA_MAPPING[dd]
      }
    }

    function Kd(dd) {
      return Number.isFinite(dd.timeFraction) && od(dd.pre) && od(dd.post)
    }

    function od(dd) {
      return Number.isFinite(dd[0]) && Number.isFinite(dd[1]) && Number.isFinite(dd[2])
    }

    function ld(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
      const gd = Wd - Jd,
        Cd = Wd - pd,
        Kd = Zd - pd,
        od = [null, null, null];
      for (let ld = 0; ld < od.length; ld++) od[ld] = Qd(dd[ld], kd[ld], Nd[ld], Pd[ld], gd, Kd);
      return {
        xd: Cd,
        qd: od
      }
    }

    function Qd(dd, Jd, kd, pd, Wd, Pd) {
      return {
        sd: Nd.b.computeShortestRotation(dd, kd) / Wd,
        Md: Nd.b.computeShortestRotation(Jd, pd) / Pd,
        delta: Nd.b.computeShortestRotation(Jd, kd)
      }
    }

    function Ld(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
      const gd = Wd - Jd,
        Cd = Wd - pd,
        Kd = Zd - pd,
        od = [null, null, null];
      for (let ld = 0; ld < od.length; ld++) od[ld] = {
        sd: (Nd[ld] - dd[ld]) / gd,
        Md: (Pd[ld] - kd[ld]) / Kd,
        delta: Nd[ld] - kd[ld]
      };
      return {
        xd: Cd,
        qd: od
      }
    }

    function Od(dd, Jd) {
      return null === Jd ? dd : Jd(dd)
    }

    function ed(dd) {
      const [Jd, kd, pd] = dd, Pd = -(0, Wd.p)(Jd), Zd = -(0, Wd.p)(kd), gd = (0, Wd.p)(pd), Cd = Nd.b.quaternionFromEulerZYX(Pd, Zd, gd);
      return Nd.b.eulerYXZFromQuaternion(Cd)
    }
    Cd.LERP_MODE_SCHEMA_MAPPING = {
      linear: pd.j.Linear,
      catmullrom: pd.j.CatmullRomSpline
    };
    const Rd = 1 / 16;

    function Id(dd) {
      return [-dd[0] * Rd, dd[1] * Rd, dd[2] * Rd]
    }

    function Gd(dd) {
      const [Jd, kd, pd] = dd;
      return [Jd >= 0 ? Math.PI - Jd : -Math.PI - Jd, vd(kd + Math.PI), vd(pd + Math.PI)]
    }

    function vd(dd) {
      return Nd.b.mod(dd + Math.PI, 2 * Math.PI) - Math.PI
    }

    function xd(dd, Jd) {
      return Math.abs(Nd.b.computeShortestRotation(dd[0], Jd[0])) + Math.abs(Nd.b.computeShortestRotation(dd[1], Jd[1])) + Math.abs(Nd.b.computeShortestRotation(dd[2], Jd[2]))
    }
    const qd = new gd
  },
  37314: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      h: () => Wd,
      j: () => pd,
      k: () => Nd
    });
    let pd = function(dd) {
        return dd[dd.Linear = 0] = "Linear", dd[dd.CatmullRomSpline = 1] = "CatmullRomSpline", dd
      }({}),
      Nd = function(dd) {
        return dd[dd.NoLoop = 0] = "NoLoop", dd[dd.LoopOnLastFrame = 1] = "LoopOnLastFrame", dd[dd.HoldOnLastFrame = 2] = "HoldOnLastFrame", dd
      }({}),
      Wd = function(dd) {
        return dd[dd.Movement = 0] = "Movement", dd[dd.Action = 1] = "Action", dd[dd.Emote = 2] = "Emote", dd[dd.Custom = 3] = "Custom", dd
      }({}),
      Pd = function(dd) {
        return dd[dd.Start = 0] = "Start", dd[dd.Stop = 1] = "Stop", dd
      }({})
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);