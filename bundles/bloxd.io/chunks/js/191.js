export const id = 191;
export const ids = [191];
export const modules = {
  40823: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev
    });
    var hv = Pv(52),
      Sv = Pv(2584);

    function ev(vv, zv, Pv) {
      const ev = (0, hv.useRef)(null),
        {
          width: gv,
          height: pv
        } = (0, Sv.d)(vv);
      (0, hv.useEffect)((() => {
        const Pv = zv(vv.current);
        return ev.current = Pv, () => {
          Pv.close(), ev.current = null
        }
      }), [vv, zv]), (0, hv.useEffect)((() => {
        gv <= 0 || pv <= 0 || ev.current.resize(gv, pv)
      }), [gv, pv]), (0, hv.useEffect)((() => {
        ev.current.show(Pv)
      }), [Pv])
    }
  },
  40828: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Wv,
      g: () => Tv,
      k: () => dv
    });
    var hv = Pv(36647),
      Sv = Pv(38164);

    function ev(vv, zv) {
      let [Pv, hv, Sv] = vv;
      return [0, .5, 1].map((vv => ({
        timeFraction: vv,
        rotation: {
          FS: "catmull-rom-spline",
          point: [Pv, hv, Sv + (.5 === vv ? zv : 0)]
        }
      })))
    }

    function gv(vv, zv, Pv) {
      return {
        cS: 3200,
        loop: !0,
        mS: {
          Root: {
            timeline: [0, .5, 1].map((vv => ({
              timeFraction: vv,
              position: {
                FS: "catmull-rom-spline",
                point: [0, .5 === vv ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((vv => ({
              timeFraction: vv,
              rotation: {
                FS: "catmull-rom-spline",
                point: [0, .25 === vv ? .12 : .75 === vv ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: ev(vv, Pv)
          },
          ArmRightMesh: {
            timeline: ev(zv, -Pv)
          }
        }
      }
    }
    const pv = gv([0, 0, 0], [0, 0, 0], .07),
      dv = (0, Sv.b)((0, hv.g)(pv), "mobIdle"),
      Nv = gv([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      lv = gv([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Tv = (0, Sv.b)((0, hv.g)(Nv), "gunReady"),
      Wv = (0, Sv.b)((0, hv.g)(lv), "gunAimed")
  },
  38164: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      d: () => ev
    });
    const hv = new WeakMap;

    function Sv(vv, zv) {
      return hv.set(vv, zv), vv
    }

    function ev(vv) {
      var zv;
      return null !== (zv = hv.get(vv)) && void 0 !== zv ? zv : null
    }
  },
  9049: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      g: () => Sv,
      k: () => lv
    });
    var hv = Pv(1548);

    function Sv(vv) {
      var zv;
      return {
        ...gv.store,
        yaw: gv.store.yaw + (null !== (zv = hv.b[vv].previewYaw) && void 0 !== zv ? zv : 0)
      }
    }
    const ev = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      gv = {
        player: ev,
        store: {
          ...ev,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pv(vv, zv) {
      vv instanceof Promise ? vv.then(zv).catch((vv => {
        console.error("Couldn't open the preview", vv)
      })) : zv(vv)
    }
    class dv {
      constructor(vv) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pv(vv, (vv => {
          this.closed ? vv.close() : (this.opened = vv, null !== this.size && vv.resize(this.size.width, this.size.height), null !== this.view && vv.show(this.view))
        }))
      }
      show(vv) {
        var zv;
        this.view = vv, null === (zv = this.opened) || void 0 === zv || zv.show(vv)
      }
      resize(vv, zv) {
        var Pv;
        this.size = {
          width: vv,
          height: zv
        }, null === (Pv = this.opened) || void 0 === Pv || Pv.resize(vv, zv)
      }
      close() {
        var vv;
        this.closed = !0, null === (vv = this.opened) || void 0 === vv || vv.close(), this.opened = null
      }
    }
    class Nv {
      constructor(vv) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(vv).then((vv => vv.ready)), pv(vv, (vv => {
          this.closed ? vv.close() : (this.opened = vv, null !== this.size && vv.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var vv, zv;
        return null !== (vv = null === (zv = this.opened) || void 0 === zv ? void 0 : zv.isReady()) && void 0 !== vv && vv
      }
      setCosmetic(vv, zv) {
        var Pv;
        null === (Pv = this.opened) || void 0 === Pv || Pv.setCosmetic(vv, zv)
      }
      playEmote(vv) {
        var zv;
        null === (zv = this.opened) || void 0 === zv || zv.playEmote(vv)
      }
      setOrbit(vv) {
        var zv;
        null === (zv = this.opened) || void 0 === zv || zv.setOrbit(vv)
      }
      resetCamera() {
        var vv;
        null === (vv = this.opened) || void 0 === vv || vv.resetCamera()
      }
      async untilDrawn(vv) {
        var zv;
        await this.ready, await (null === (zv = this.opened) || void 0 === zv ? void 0 : zv.untilDrawn(vv))
      }
      resize(vv, zv) {
        var Pv;
        this.size = {
          width: vv,
          height: zv
        }, null === (Pv = this.opened) || void 0 === Pv || Pv.resize(vv, zv)
      }
      close() {
        var vv;
        this.closed = !0, null === (vv = this.opened) || void 0 === vv || vv.close(), this.opened = null
      }
    }
    const lv = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(vv) {
        this.host = vv
      }
      setDefaultHost(vv) {
        this.makeDefault = vv
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(vv) {
        return new dv(this.current().openMob(vv))
      }
      openPet(vv) {
        return new dv(this.current().openPet(vv))
      }
      openMobLineup(vv) {
        return new dv(this.current().openMobLineup(vv))
      }
      openCharacter(vv, zv) {
        return new Nv(this.current().openCharacter(vv, zv))
      }
    }
  },
  9044: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv.e,
      i: () => hv.g,
      j: () => hv.k
    });
    var hv = Pv(9049);
    class Sv {
      constructor(vv) {
        this.load = vv, this.loaded = null, this.loading = null
      }
      run(vv) {
        return null !== this.loaded ? vv(this.loaded) : (this.loading ??= this.load().then((vv => (this.loaded = vv, vv)), (vv => {
          throw this.loading = null, vv
        })), this.loading.then(vv))
      }
    }
    class ev {
      constructor() {
        this.mobScene = new Sv((() => Promise.all([Pv.e(70), Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(95), Pv.e(247), Pv.e(73), Pv.e(72), Pv.e(244), Pv.e(71), Pv.e(254), Pv.e(248), Pv.e(253), Pv.e(251), Pv.e(243), Pv.e(219), Pv.e(265), Pv.e(223), Pv.e(238), Pv.e(249), Pv.e(252), Pv.e(75), Pv.e(196), Pv.e(216), Pv.e(94), Pv.e(220), Pv.e(235), Pv.e(113), Pv.e(236), Pv.e(74), Pv.e(154)]).then((() => Pv(40376))))), this.characterScene = new Sv((() => Promise.all([Pv.e(70), Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(95), Pv.e(247), Pv.e(73), Pv.e(72), Pv.e(244), Pv.e(71), Pv.e(254), Pv.e(248), Pv.e(253), Pv.e(251), Pv.e(243), Pv.e(219), Pv.e(265), Pv.e(223), Pv.e(238), Pv.e(249), Pv.e(252), Pv.e(75), Pv.e(196), Pv.e(216), Pv.e(94), Pv.e(220), Pv.e(235), Pv.e(113), Pv.e(236), Pv.e(74), Pv.e(153)]).then((() => Pv(40476)))))
      }
      openMob(vv) {
        return this.mobScene.run((zv => zv.openMobPreview(vv)))
      }
      openPet(vv) {
        return this.mobScene.run((zv => zv.openPetPreview(vv)))
      }
      openMobLineup(vv) {
        return this.mobScene.run((zv => zv.openMobLineupPreview(vv)))
      }
      openCharacter(vv, zv) {
        return this.characterScene.run((Pv => Pv.openCharacterPreview(vv, zv)))
      }
    }
    hv.k.setDefaultHost((() => new ev))
  },
  41056: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      FrontlineMvpLineup: () => Tv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(9044),
      pv = Pv(40828),
      dv = Pv(40823),
      Nv = Pv(1082);

    function lv(vv) {
      return gv.j.openMobLineup(vv)
    }
    const Tv = (0, hv.memo)((function(vv) {
      let {
        players: zv,
        className: Pv
      } = vv;
      const Sv = (0, hv.useRef)(null),
        gv = (0, hv.useMemo)((() => zv.map((vv => {
          let {
            cosmetics: zv,
            size: Pv,
            heldGun: hv
          } = vv;
          return {
            cosmetics: zv,
            size: Pv,
            YF: hv.name,
            animation: hv.aimed ? pv.c : pv.g
          }
        }))), [zv]),
        Tv = function(vv) {
          const [zv, Pv] = (0, hv.useState)([]);
          return (0, hv.useEffect)((() => {
            Pv(vv.map((() => !1)));
            const zv = vv.map(((vv, zv) => {
              let {
                showAfterMs: hv
              } = vv;
              return window.setTimeout((() => {
                Pv((vv => vv.map(((vv, Pv) => vv || Pv === zv))))
              }), hv)
            }));
            return () => {
              for (const vv of zv) window.clearTimeout(vv)
            }
          }), [vv]), zv
        }(zv),
        Wv = (0, hv.useMemo)((() => ({
          figures: gv,
          shown: Tv
        })), [gv, Tv]);
      return (0, dv.c)(Sv, lv, Wv), (0, Nv.jsx)("div", {
        className: ev()("MobPreview", Pv),
        ref: Sv
      })
    }))
  },
  36647: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv,
      g: () => gv
    });
    var hv = Pv(36639),
      Sv = Pv(312),
      ev = Pv(1855);

    function gv(vv) {
      if ("cS" in vv) return fv.createAnimationScript(vv);
      return new Nv(vv).createAnimationScript()
    }

    function pv(vv, zv, Pv, Sv) {
      const ev = vv.cS <= 0 ? 1 : zv + Pv * Math.max(0, Sv) / vv.cS;
      return vv.GS === hv.l.LoopOnLastFrame ? ev % 1 : vv.GS === hv.l.NoLoop && ev >= 1 ? null : Math.min(1, ev)
    }
    class dv {
      createAnimationScript(vv) {
        const {
          cS: zv,
          loop: Pv,
          mS: hv
        } = vv;
        return {
          cS: Math.round(zv),
          GS: this.createLoopMode(null !== Pv && void 0 !== Pv && Pv),
          mS: this.createNodeSkeletonAnimationScript(null !== hv && void 0 !== hv ? hv : null)
        }
      }
      createLoopMode(vv) {
        switch (vv) {
          case !1:
            return hv.l.NoLoop;
          case !0:
            return hv.l.LoopOnLastFrame;
          case "hold-on-last-frame":
            return hv.l.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${vv}`)
      }
      createNodeSkeletonAnimationScript(vv) {
        if (null === vv) return null;
        const zv = {};
        for (const Pv in vv) {
          const hv = vv[Pv];
          zv[Pv] = this.createNodeAnimationScript(hv)
        }
        return zv
      }
      createNodeAnimationScript(vv) {
        const {
          timeline: zv
        } = vv, Pv = zv.filter((vv => Number.isFinite(vv.timeFraction)));
        return Pv.sort(((vv, zv) => vv.timeFraction - zv.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Pv, "rotation", Wv),
          position: this.createTimelineFromKeyframes(Pv, "position", av)
        }
      }
      createTimelineFromKeyframes(vv, zv, Pv) {
        const hv = [];
        for (const dv of vv) {
          const vv = dv[zv];
          if (vv) {
            const zv = this.createAnimationFrameWithoutPrecomputes(dv.timeFraction, vv);
            lv(zv) && hv.push(zv)
          }
        }
        const Sv = [];
        for (let dv = 0; dv < hv.length; dv++) {
          var ev, gv, pv;
          const vv = hv[dv],
            zv = null !== (ev = hv[dv - 1]) && void 0 !== ev ? ev : vv,
            Nv = null !== (gv = hv[dv + 1]) && void 0 !== gv ? gv : vv,
            lv = null !== (pv = hv[dv + 2]) && void 0 !== pv ? pv : Nv;
          Sv.push({
            ...vv,
            ...Pv(zv.post, zv.timeFraction, vv.post, vv.timeFraction, Nv.pre, Nv.timeFraction, lv.pre, lv.timeFraction)
          })
        }
        return Sv
      }
      createAnimationFrameWithoutPrecomputes(vv, zv) {
        let Pv, hv, Sv = null;
        var ev;
        if ("object" === typeof zv && "point" in zv) Sv = null !== (ev = zv.FS) && void 0 !== ev ? ev : null, Pv = zv.point, hv = zv.point;
        else if ("object" === typeof zv && "pre" in zv) {
          var gv;
          Sv = null !== (gv = zv.FS) && void 0 !== gv ? gv : null, Pv = zv.pre, hv = zv.post
        } else Pv = zv, hv = zv;
        return {
          timeFraction: vv,
          FS: this.createLerpMode(Sv),
          pre: Pv,
          post: hv
        }
      }
      createLerpMode(vv) {
        return null === vv ? hv.h.Linear : dv.LERP_MODE_SCHEMA_MAPPING[vv]
      }
    }
    dv.LERP_MODE_SCHEMA_MAPPING = {
      linear: hv.h.Linear,
      "catmull-rom-spline": hv.h.CatmullRomSpline
    };
    class Nv {
      constructor(vv) {
        this.animationSchema = vv
      }
      createAnimationScript() {
        const {
          animation_length: vv,
          loop: zv,
          bones: Pv
        } = this.animationSchema;
        return {
          cS: Math.round(1e3 * vv),
          GS: this.createLoopMode(null !== zv && void 0 !== zv && zv),
          mS: this.createNodeSkeletonAnimationScript(null !== Pv && void 0 !== Pv ? Pv : null)
        }
      }
      createLoopMode(vv) {
        switch (vv) {
          case !1:
            return hv.l.NoLoop;
          case !0:
            return hv.l.LoopOnLastFrame;
          case "hold_on_last_frame":
            return hv.l.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${vv}`)
      }
      createNodeSkeletonAnimationScript(vv) {
        if (null === vv) return null;
        const zv = {};
        for (const Pv in vv) {
          const hv = vv[Pv];
          zv[Pv] = this.createNodeAnimationScript(hv)
        }
        return zv
      }
      createNodeAnimationScript(vv) {
        const {
          rotation: zv,
          position: Pv
        } = vv;
        return {
          rotation: this.createAnimationTimeline(null !== zv && void 0 !== zv ? zv : null, Cv, Wv, !0),
          position: this.createAnimationTimeline(null !== Pv && void 0 !== Pv ? Pv : null, cv, av, !1)
        }
      }
      createAnimationTimeline(vv, zv, Pv, hv) {
        if (null === vv) return [];
        if (Array.isArray(vv)) {
          vv = {
            "0.0": vv
          }
        }
        const Sv = Object.entries(vv).map((vv => {
          let [Pv, hv] = vv;
          const Sv = Number(Pv) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Sv, hv, zv)
        })).filter(lv);
        Sv.sort(((vv, zv) => vv.timeFraction - zv.timeFraction)), hv && function(vv) {
          for (let zv = 1; zv < vv.length; zv++) {
            const Pv = vv[zv - 1].post,
              hv = vv[zv],
              Sv = Gv(hv.pre),
              ev = Gv(hv.post),
              gv = jv(Pv, hv.pre);
            jv(Pv, Sv) < gv && (vv[zv] = {
              ...hv,
              pre: Sv,
              post: ev
            })
          }
        }(Sv);
        const ev = [];
        for (let Nv = 0; Nv < Sv.length; Nv++) {
          var gv, pv, dv;
          const vv = Sv[Nv],
            zv = null !== (gv = Sv[Nv - 1]) && void 0 !== gv ? gv : vv,
            hv = null !== (pv = Sv[Nv + 1]) && void 0 !== pv ? pv : vv,
            lv = null !== (dv = Sv[Nv + 2]) && void 0 !== dv ? dv : hv;
          ev.push({
            ...vv,
            ...Pv(zv.post, zv.timeFraction, vv.post, vv.timeFraction, hv.pre, hv.timeFraction, lv.pre, lv.timeFraction)
          })
        }
        return ev
      }
      createAnimationFrameWithoutPrecomputes(vv, zv, Pv) {
        let hv, Sv, ev = null;
        if ("object" === typeof zv && "post" in zv) {
          var gv;
          ev = null !== (gv = zv.lerp_mode) && void 0 !== gv ? gv : null, Sv = sv(zv.post, Pv), hv = zv.pre ? sv(zv.pre, Pv) : Sv
        } else {
          const vv = sv(zv, Pv);
          Sv = vv, hv = vv
        }
        return {
          timeFraction: vv,
          FS: this.createLerpMode(ev),
          pre: hv,
          post: Sv
        }
      }
      createLerpMode(vv) {
        return null === vv ? hv.h.Linear : Nv.LERP_MODE_SCHEMA_MAPPING[vv]
      }
    }

    function lv(vv) {
      return Number.isFinite(vv.timeFraction) && Tv(vv.pre) && Tv(vv.post)
    }

    function Tv(vv) {
      return Number.isFinite(vv[0]) && Number.isFinite(vv[1]) && Number.isFinite(vv[2])
    }

    function Wv(vv, zv, Pv, hv, Sv, ev, gv, pv) {
      const dv = ev - zv,
        Nv = ev - hv,
        lv = pv - hv,
        Tv = [null, null, null];
      for (let Wv = 0; Wv < Tv.length; Wv++) Tv[Wv] = wv(vv[Wv], Pv[Wv], Sv[Wv], gv[Wv], dv, lv);
      return {
        YS: Nv,
        nS: Tv
      }
    }

    function wv(vv, zv, Pv, hv, ev, gv) {
      return {
        DS: Sv.d.computeShortestRotation(vv, Pv) / ev,
        KS: Sv.d.computeShortestRotation(zv, hv) / gv,
        delta: Sv.d.computeShortestRotation(zv, Pv)
      }
    }

    function av(vv, zv, Pv, hv, Sv, ev, gv, pv) {
      const dv = ev - zv,
        Nv = ev - hv,
        lv = pv - hv,
        Tv = [null, null, null];
      for (let Wv = 0; Wv < Tv.length; Wv++) Tv[Wv] = {
        DS: (Sv[Wv] - vv[Wv]) / dv,
        KS: (gv[Wv] - Pv[Wv]) / lv,
        delta: Sv[Wv] - Pv[Wv]
      };
      return {
        YS: Nv,
        nS: Tv
      }
    }

    function sv(vv, zv) {
      return null === zv ? vv : zv(vv)
    }

    function Cv(vv) {
      const [zv, Pv, hv] = vv, gv = -(0, ev.k)(zv), pv = -(0, ev.k)(Pv), dv = (0, ev.k)(hv), Nv = Sv.d.quaternionFromEulerZYX(gv, pv, dv);
      return Sv.d.eulerYXZFromQuaternion(Nv)
    }
    Nv.LERP_MODE_SCHEMA_MAPPING = {
      linear: hv.h.Linear,
      catmullrom: hv.h.CatmullRomSpline
    };
    const iv = 1 / 16;

    function cv(vv) {
      return [-vv[0] * iv, vv[1] * iv, vv[2] * iv]
    }

    function Gv(vv) {
      const [zv, Pv, hv] = vv;
      return [zv >= 0 ? Math.PI - zv : -Math.PI - zv, mv(Pv + Math.PI), mv(hv + Math.PI)]
    }

    function mv(vv) {
      return Sv.d.mod(vv + Math.PI, 2 * Math.PI) - Math.PI
    }

    function jv(vv, zv) {
      return Math.abs(Sv.d.computeShortestRotation(vv[0], zv[0])) + Math.abs(Sv.d.computeShortestRotation(vv[1], zv[1])) + Math.abs(Sv.d.computeShortestRotation(vv[2], zv[2]))
    }
    const fv = new dv
  },
  36639: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      f: () => ev,
      h: () => hv,
      l: () => Sv
    });
    let hv = function(vv) {
        return vv[vv.Linear = 0] = "Linear", vv[vv.CatmullRomSpline = 1] = "CatmullRomSpline", vv
      }({}),
      Sv = function(vv) {
        return vv[vv.NoLoop = 0] = "NoLoop", vv[vv.LoopOnLastFrame = 1] = "LoopOnLastFrame", vv[vv.HoldOnLastFrame = 2] = "HoldOnLastFrame", vv
      }({}),
      ev = function(vv) {
        return vv[vv.Movement = 0] = "Movement", vv[vv.Action = 1] = "Action", vv[vv.Emote = 2] = "Emote", vv[vv.Custom = 3] = "Custom", vv
      }({}),
      gv = function(vv) {
        return vv[vv.Start = 0] = "Start", vv[vv.Stop = 1] = "Stop", vv
      }({})
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);