export const id = 199;
export const ids = [199];
export const modules = {
  41529: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik
    });
    var Xk = Ik(58),
      Tk = Ik(2679);

    function ik(kk, Fk, Ik) {
      const ik = (0, Xk.useRef)(null),
        {
          width: yk,
          height: lk
        } = (0, Tk.b)(kk);
      (0, Xk.useEffect)((() => {
        const Ik = Fk(kk.current);
        return ik.current = Ik, () => {
          Ik.close(), ik.current = null
        }
      }), [kk, Fk]), (0, Xk.useEffect)((() => {
        yk <= 0 || lk <= 0 || ik.current.resize(yk, lk)
      }), [yk, lk]), (0, Xk.useEffect)((() => {
        ik.current.show(Ik)
      }), [Ik])
    }
  },
  41534: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Zk,
      e: () => tk,
      g: () => ak
    });
    var Xk = Ik(37224),
      Tk = Ik(38621);

    function ik(kk, Fk) {
      let [Ik, Xk, Tk] = kk;
      return [0, .5, 1].map((kk => ({
        timeFraction: kk,
        rotation: {
          ii: "catmull-rom-spline",
          point: [Ik, Xk, Tk + (.5 === kk ? Fk : 0)]
        }
      })))
    }

    function yk(kk, Fk, Ik) {
      return {
        ki: 3200,
        loop: !0,
        Ii: {
          Root: {
            timeline: [0, .5, 1].map((kk => ({
              timeFraction: kk,
              position: {
                ii: "catmull-rom-spline",
                point: [0, .5 === kk ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((kk => ({
              timeFraction: kk,
              rotation: {
                ii: "catmull-rom-spline",
                point: [0, .25 === kk ? .12 : .75 === kk ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: ik(kk, Ik)
          },
          ArmRightMesh: {
            timeline: ik(Fk, -Ik)
          }
        }
      }
    }
    const lk = yk([0, 0, 0], [0, 0, 0], .07),
      ak = (0, Tk.d)((0, Xk.i)(lk), "mobIdle"),
      qk = yk([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Lk = yk([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      tk = (0, Tk.d)((0, Xk.i)(qk), "gunReady"),
      Zk = (0, Tk.d)((0, Xk.i)(Lk), "gunAimed")
  },
  38621: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      f: () => ik
    });
    const Xk = new WeakMap;

    function Tk(kk, Fk) {
      return Xk.set(kk, Fk), kk
    }

    function ik(kk) {
      var Fk;
      return null !== (Fk = Xk.get(kk)) && void 0 !== Fk ? Fk : null
    }
  },
  34222: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      f: () => Tk,
      h: () => Lk
    });
    var Xk = Ik(1518);

    function Tk(kk) {
      var Fk;
      return {
        ...yk.store,
        yaw: yk.store.yaw + (null !== (Fk = Xk.c[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
      }
    }
    const ik = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yk = {
        player: ik,
        store: {
          ...ik,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function lk(kk, Fk) {
      kk instanceof Promise ? kk.then(Fk).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : Fk(kk)
    }
    class ak {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var Fk;
        this.view = kk, null === (Fk = this.opened) || void 0 === Fk || Fk.show(kk)
      }
      resize(kk, Fk) {
        var Ik;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Ik = this.opened) || void 0 === Ik || Ik.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class qk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), lk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.opened) || void 0 === Fk ? void 0 : Fk.isReady()) && void 0 !== kk && kk
      }
      setCosmetic(kk, Fk) {
        var Ik;
        null === (Ik = this.opened) || void 0 === Ik || Ik.setCosmetic(kk, Fk)
      }
      playEmote(kk) {
        var Fk;
        null === (Fk = this.opened) || void 0 === Fk || Fk.playEmote(kk)
      }
      setOrbit(kk) {
        var Fk;
        null === (Fk = this.opened) || void 0 === Fk || Fk.setOrbit(kk)
      }
      resetCamera() {
        var kk;
        null === (kk = this.opened) || void 0 === kk || kk.resetCamera()
      }
      async untilDrawn(kk) {
        var Fk;
        await this.ready, await (null === (Fk = this.opened) || void 0 === Fk ? void 0 : Fk.untilDrawn(kk))
      }
      resize(kk, Fk) {
        var Ik;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Ik = this.opened) || void 0 === Ik || Ik.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const Lk = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(kk) {
        this.host = kk
      }
      setDefaultHost(kk) {
        this.makeDefault = kk
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(kk) {
        return new ak(this.current().openMob(kk))
      }
      openPet(kk) {
        return new ak(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new ak(this.current().openMobLineup(kk))
      }
      openCharacter(kk, Fk) {
        return new qk(this.current().openCharacter(kk, Fk))
      }
    }
  },
  34218: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.c,
      f: () => Xk.f,
      h: () => Xk.h
    });
    var Xk = Ik(34222);
    class Tk {
      constructor(kk) {
        this.load = kk, this.loaded = null, this.loading = null
      }
      run(kk) {
        return null !== this.loaded ? kk(this.loaded) : (this.loading ??= this.load().then((kk => (this.loaded = kk, kk)), (kk => {
          throw this.loading = null, kk
        })), this.loading.then(kk))
      }
    }
    class ik {
      constructor() {
        this.mobScene = new Tk((() => Promise.all([Ik.e(72), Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(96), Ik.e(255), Ik.e(75), Ik.e(74), Ik.e(252), Ik.e(73), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(274), Ik.e(228), Ik.e(244), Ik.e(257), Ik.e(260), Ik.e(77), Ik.e(186), Ik.e(222), Ik.e(95), Ik.e(225), Ik.e(240), Ik.e(120), Ik.e(241), Ik.e(76), Ik.e(119), Ik.e(246)]).then((() => Ik(41091))))), this.characterScene = new Tk((() => Promise.all([Ik.e(72), Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(96), Ik.e(255), Ik.e(75), Ik.e(74), Ik.e(252), Ik.e(73), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(274), Ik.e(228), Ik.e(244), Ik.e(257), Ik.e(260), Ik.e(77), Ik.e(186), Ik.e(222), Ik.e(95), Ik.e(225), Ik.e(240), Ik.e(120), Ik.e(241), Ik.e(76), Ik.e(119), Ik.e(245)]).then((() => Ik(41185)))))
      }
      openMob(kk) {
        return this.mobScene.run((Fk => Fk.openMobPreview(kk)))
      }
      openPet(kk) {
        return this.mobScene.run((Fk => Fk.openPetPreview(kk)))
      }
      openMobLineup(kk) {
        return this.mobScene.run((Fk => Fk.openMobLineupPreview(kk)))
      }
      openCharacter(kk, Fk) {
        return this.characterScene.run((Ik => Ik.openCharacterPreview(kk, Fk)))
      }
    }
    Xk.h.setDefaultHost((() => new ik))
  },
  41748: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      FrontlineMvpLineup: () => tk
    });
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(34218),
      lk = Ik(41534),
      ak = Ik(41529),
      qk = Ik(1096);

    function Lk(kk) {
      return yk.h.openMobLineup(kk)
    }
    const tk = (0, Xk.memo)((function(kk) {
      let {
        players: Fk,
        className: Ik
      } = kk;
      const Tk = (0, Xk.useRef)(null),
        yk = (0, Xk.useMemo)((() => Fk.map((kk => {
          let {
            cosmetics: Fk,
            size: Ik,
            heldGun: Xk
          } = kk;
          return {
            cosmetics: Fk,
            size: Ik,
            VK: Xk.name,
            animation: Xk.aimed ? lk.d : lk.e
          }
        }))), [Fk]),
        tk = function(kk) {
          const [Fk, Ik] = (0, Xk.useState)([]);
          return (0, Xk.useEffect)((() => {
            Ik(kk.map((() => !1)));
            const Fk = kk.map(((kk, Fk) => {
              let {
                showAfterMs: Xk
              } = kk;
              return window.setTimeout((() => {
                Ik((kk => kk.map(((kk, Ik) => kk || Ik === Fk))))
              }), Xk)
            }));
            return () => {
              for (const kk of Fk) window.clearTimeout(kk)
            }
          }), [kk]), Fk
        }(Fk),
        Zk = (0, Xk.useMemo)((() => ({
          figures: yk,
          shown: tk
        })), [yk, tk]);
      return (0, ak.d)(Tk, Lk, Zk), (0, qk.jsx)("div", {
        className: ik()("MobPreview", Ik),
        ref: Tk
      })
    }))
  },
  37224: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      i: () => yk
    });
    var Xk = Ik(37215),
      Tk = Ik(337),
      ik = Ik(1844);

    function yk(kk) {
      if ("ki" in kk) return sk.createAnimationScript(kk);
      return new qk(kk).createAnimationScript()
    }

    function lk(kk, Fk, Ik, Tk) {
      const ik = kk.ki <= 0 ? 1 : Fk + Ik * Math.max(0, Tk) / kk.ki;
      return kk.Fi === Xk.k.LoopOnLastFrame ? ik % 1 : kk.Fi === Xk.k.NoLoop && ik >= 1 ? null : Math.min(1, ik)
    }
    class ak {
      createAnimationScript(kk) {
        const {
          ki: Fk,
          loop: Ik,
          Ii: Xk
        } = kk;
        return {
          ki: Math.round(Fk),
          Fi: this.createLoopMode(null !== Ik && void 0 !== Ik && Ik),
          Ii: this.createNodeSkeletonAnimationScript(null !== Xk && void 0 !== Xk ? Xk : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Xk.k.NoLoop;
          case !0:
            return Xk.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Xk.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const Fk = {};
        for (const Ik in kk) {
          const Xk = kk[Ik];
          Fk[Ik] = this.createNodeAnimationScript(Xk)
        }
        return Fk
      }
      createNodeAnimationScript(kk) {
        const {
          timeline: Fk
        } = kk, Ik = Fk.filter((kk => Number.isFinite(kk.timeFraction)));
        return Ik.sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Ik, "rotation", Zk),
          position: this.createTimelineFromKeyframes(Ik, "position", ek)
        }
      }
      createTimelineFromKeyframes(kk, Fk, Ik) {
        const Xk = [];
        for (const ak of kk) {
          const kk = ak[Fk];
          if (kk) {
            const Fk = this.createAnimationFrameWithoutPrecomputes(ak.timeFraction, kk);
            Lk(Fk) && Xk.push(Fk)
          }
        }
        const Tk = [];
        for (let ak = 0; ak < Xk.length; ak++) {
          var ik, yk, lk;
          const kk = Xk[ak],
            Fk = null !== (ik = Xk[ak - 1]) && void 0 !== ik ? ik : kk,
            qk = null !== (yk = Xk[ak + 1]) && void 0 !== yk ? yk : kk,
            Lk = null !== (lk = Xk[ak + 2]) && void 0 !== lk ? lk : qk;
          Tk.push({
            ...kk,
            ...Ik(Fk.post, Fk.timeFraction, kk.post, kk.timeFraction, qk.pre, qk.timeFraction, Lk.pre, Lk.timeFraction)
          })
        }
        return Tk
      }
      createAnimationFrameWithoutPrecomputes(kk, Fk) {
        let Ik, Xk, Tk = null;
        var ik;
        if ("object" === typeof Fk && "point" in Fk) Tk = null !== (ik = Fk.ii) && void 0 !== ik ? ik : null, Ik = Fk.point, Xk = Fk.point;
        else if ("object" === typeof Fk && "pre" in Fk) {
          var yk;
          Tk = null !== (yk = Fk.ii) && void 0 !== yk ? yk : null, Ik = Fk.pre, Xk = Fk.post
        } else Ik = Fk, Xk = Fk;
        return {
          timeFraction: kk,
          ii: this.createLerpMode(Tk),
          pre: Ik,
          post: Xk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Xk.g.Linear : ak.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }
    ak.LERP_MODE_SCHEMA_MAPPING = {
      linear: Xk.g.Linear,
      "catmull-rom-spline": Xk.g.CatmullRomSpline
    };
    class qk {
      constructor(kk) {
        this.animationSchema = kk
      }
      createAnimationScript() {
        const {
          animation_length: kk,
          loop: Fk,
          bones: Ik
        } = this.animationSchema;
        return {
          ki: Math.round(1e3 * kk),
          Fi: this.createLoopMode(null !== Fk && void 0 !== Fk && Fk),
          Ii: this.createNodeSkeletonAnimationScript(null !== Ik && void 0 !== Ik ? Ik : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Xk.k.NoLoop;
          case !0:
            return Xk.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Xk.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const Fk = {};
        for (const Ik in kk) {
          const Xk = kk[Ik];
          Fk[Ik] = this.createNodeAnimationScript(Xk)
        }
        return Fk
      }
      createNodeAnimationScript(kk) {
        const {
          rotation: Fk,
          position: Ik
        } = kk;
        return {
          rotation: this.createAnimationTimeline(null !== Fk && void 0 !== Fk ? Fk : null, Hk, Zk, !0),
          position: this.createAnimationTimeline(null !== Ik && void 0 !== Ik ? Ik : null, xk, ek, !1)
        }
      }
      createAnimationTimeline(kk, Fk, Ik, Xk) {
        if (null === kk) return [];
        if (Array.isArray(kk)) {
          kk = {
            "0.0": kk
          }
        }
        const Tk = Object.entries(kk).map((kk => {
          let [Ik, Xk] = kk;
          const Tk = Number(Ik) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Tk, Xk, Fk)
        })).filter(Lk);
        Tk.sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)), Xk && function(kk) {
          for (let Fk = 1; Fk < kk.length; Fk++) {
            const Ik = kk[Fk - 1].post,
              Xk = kk[Fk],
              Tk = Pk(Xk.pre),
              ik = Pk(Xk.post),
              yk = Qk(Ik, Xk.pre);
            Qk(Ik, Tk) < yk && (kk[Fk] = {
              ...Xk,
              pre: Tk,
              post: ik
            })
          }
        }(Tk);
        const ik = [];
        for (let qk = 0; qk < Tk.length; qk++) {
          var yk, lk, ak;
          const kk = Tk[qk],
            Fk = null !== (yk = Tk[qk - 1]) && void 0 !== yk ? yk : kk,
            Xk = null !== (lk = Tk[qk + 1]) && void 0 !== lk ? lk : kk,
            Lk = null !== (ak = Tk[qk + 2]) && void 0 !== ak ? ak : Xk;
          ik.push({
            ...kk,
            ...Ik(Fk.post, Fk.timeFraction, kk.post, kk.timeFraction, Xk.pre, Xk.timeFraction, Lk.pre, Lk.timeFraction)
          })
        }
        return ik
      }
      createAnimationFrameWithoutPrecomputes(kk, Fk, Ik) {
        let Xk, Tk, ik = null;
        if ("object" === typeof Fk && "post" in Fk) {
          var yk;
          ik = null !== (yk = Fk.lerp_mode) && void 0 !== yk ? yk : null, Tk = wk(Fk.post, Ik), Xk = Fk.pre ? wk(Fk.pre, Ik) : Tk
        } else {
          const kk = wk(Fk, Ik);
          Tk = kk, Xk = kk
        }
        return {
          timeFraction: kk,
          ii: this.createLerpMode(ik),
          pre: Xk,
          post: Tk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Xk.g.Linear : qk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }

    function Lk(kk) {
      return Number.isFinite(kk.timeFraction) && tk(kk.pre) && tk(kk.post)
    }

    function tk(kk) {
      return Number.isFinite(kk[0]) && Number.isFinite(kk[1]) && Number.isFinite(kk[2])
    }

    function Zk(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
      const ak = ik - Fk,
        qk = ik - Xk,
        Lk = lk - Xk,
        tk = [null, null, null];
      for (let Zk = 0; Zk < tk.length; Zk++) tk[Zk] = jk(kk[Zk], Ik[Zk], Tk[Zk], yk[Zk], ak, Lk);
      return {
        yi: qk,
        li: tk
      }
    }

    function jk(kk, Fk, Ik, Xk, ik, yk) {
      return {
        qi: Tk.e.computeShortestRotation(kk, Ik) / ik,
        Li: Tk.e.computeShortestRotation(Fk, Xk) / yk,
        delta: Tk.e.computeShortestRotation(Fk, Ik)
      }
    }

    function ek(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
      const ak = ik - Fk,
        qk = ik - Xk,
        Lk = lk - Xk,
        tk = [null, null, null];
      for (let Zk = 0; Zk < tk.length; Zk++) tk[Zk] = {
        qi: (Tk[Zk] - kk[Zk]) / ak,
        Li: (yk[Zk] - Ik[Zk]) / Lk,
        delta: Tk[Zk] - Ik[Zk]
      };
      return {
        yi: qk,
        li: tk
      }
    }

    function wk(kk, Fk) {
      return null === Fk ? kk : Fk(kk)
    }

    function Hk(kk) {
      const [Fk, Ik, Xk] = kk, yk = -(0, ik.k)(Fk), lk = -(0, ik.k)(Ik), ak = (0, ik.k)(Xk), qk = Tk.e.quaternionFromEulerZYX(yk, lk, ak);
      return Tk.e.eulerYXZFromQuaternion(qk)
    }
    qk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Xk.g.Linear,
      catmullrom: Xk.g.CatmullRomSpline
    };
    const Jk = 1 / 16;

    function xk(kk) {
      return [-kk[0] * Jk, kk[1] * Jk, kk[2] * Jk]
    }

    function Pk(kk) {
      const [Fk, Ik, Xk] = kk;
      return [Fk >= 0 ? Math.PI - Fk : -Math.PI - Fk, Kk(Ik + Math.PI), Kk(Xk + Math.PI)]
    }

    function Kk(kk) {
      return Tk.e.mod(kk + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Qk(kk, Fk) {
      return Math.abs(Tk.e.computeShortestRotation(kk[0], Fk[0])) + Math.abs(Tk.e.computeShortestRotation(kk[1], Fk[1])) + Math.abs(Tk.e.computeShortestRotation(kk[2], Fk[2]))
    }
    const sk = new ak
  },
  37215: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk,
      c: () => ik,
      g: () => Xk,
      k: () => Tk
    });
    let Xk = function(kk) {
        return kk[kk.Linear = 0] = "Linear", kk[kk.CatmullRomSpline = 1] = "CatmullRomSpline", kk
      }({}),
      Tk = function(kk) {
        return kk[kk.NoLoop = 0] = "NoLoop", kk[kk.LoopOnLastFrame = 1] = "LoopOnLastFrame", kk[kk.HoldOnLastFrame = 2] = "HoldOnLastFrame", kk
      }({}),
      ik = function(kk) {
        return kk[kk.Movement = 0] = "Movement", kk[kk.Action = 1] = "Action", kk[kk.Emote = 2] = "Emote", kk[kk.Custom = 3] = "Custom", kk
      }({}),
      yk = function(kk) {
        return kk[kk.Start = 0] = "Start", kk[kk.Stop = 1] = "Stop", kk
      }({})
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);