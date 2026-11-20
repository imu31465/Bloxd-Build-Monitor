export const id = 191;
export const ids = [191];
export const modules = {
  40954: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak
    });
    var Rk = Bk(61),
      tk = Bk(2607);

    function ak(kk, Fk, Bk) {
      const ak = (0, Rk.useRef)(null),
        {
          width: Xk,
          height: bk
        } = (0, tk.e)(kk);
      (0, Rk.useEffect)((() => {
        const Bk = Fk(kk.current);
        return ak.current = Bk, () => {
          Bk.close(), ak.current = null
        }
      }), [kk, Fk]), (0, Rk.useEffect)((() => {
        Xk <= 0 || bk <= 0 || ak.current.resize(Xk, bk)
      }), [Xk, bk]), (0, Rk.useEffect)((() => {
        ak.current.show(Bk)
      }), [Bk])
    }
  },
  40957: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Jk,
      e: () => Vk,
      i: () => wk
    });
    var Rk = Bk(36813),
      tk = Bk(38277);

    function ak(kk, Fk) {
      let [Bk, Rk, tk] = kk;
      return [0, .5, 1].map((kk => ({
        timeFraction: kk,
        rotation: {
          Ha: "catmull-rom-spline",
          point: [Bk, Rk, tk + (.5 === kk ? Fk : 0)]
        }
      })))
    }

    function Xk(kk, Fk, Bk) {
      return {
        La: 3200,
        loop: !0,
        Ea: {
          Root: {
            timeline: [0, .5, 1].map((kk => ({
              timeFraction: kk,
              position: {
                Ha: "catmull-rom-spline",
                point: [0, .5 === kk ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((kk => ({
              timeFraction: kk,
              rotation: {
                Ha: "catmull-rom-spline",
                point: [0, .25 === kk ? .12 : .75 === kk ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: ak(kk, Bk)
          },
          ArmRightMesh: {
            timeline: ak(Fk, -Bk)
          }
        }
      }
    }
    const bk = Xk([0, 0, 0], [0, 0, 0], .07),
      wk = (0, tk.b)((0, Rk.c)(bk), "mobIdle"),
      dk = Xk([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      sk = Xk([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Vk = (0, tk.b)((0, Rk.c)(dk), "gunReady"),
      Jk = (0, tk.b)((0, Rk.c)(sk), "gunAimed")
  },
  38277: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      e: () => ak
    });
    const Rk = new WeakMap;

    function tk(kk, Fk) {
      return Rk.set(kk, Fk), kk
    }

    function ak(kk) {
      var Fk;
      return null !== (Fk = Rk.get(kk)) && void 0 !== Fk ? Fk : null
    }
  },
  9045: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      f: () => tk,
      i: () => sk
    });
    var Rk = Bk(1512);

    function tk(kk) {
      var Fk;
      return {
        ...Xk.store,
        yaw: Xk.store.yaw + (null !== (Fk = Rk.d[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
      }
    }
    const ak = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xk = {
        player: ak,
        store: {
          ...ak,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function bk(kk, Fk) {
      kk instanceof Promise ? kk.then(Fk).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : Fk(kk)
    }
    class wk {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, bk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var Fk;
        this.view = kk, null === (Fk = this.opened) || void 0 === Fk || Fk.show(kk)
      }
      resize(kk, Fk) {
        var Bk;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Bk = this.opened) || void 0 === Bk || Bk.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class dk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), bk(kk, (kk => {
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
        var Bk;
        null === (Bk = this.opened) || void 0 === Bk || Bk.setCosmetic(kk, Fk)
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
        var Bk;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Bk = this.opened) || void 0 === Bk || Bk.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const sk = new class {
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
        return new wk(this.current().openMob(kk))
      }
      openPet(kk) {
        return new wk(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new wk(this.current().openMobLineup(kk))
      }
      openCharacter(kk, Fk) {
        return new dk(this.current().openCharacter(kk, Fk))
      }
    }
  },
  9039: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.b,
      f: () => Rk.f,
      h: () => Rk.i
    });
    var Rk = Bk(9045);
    class tk {
      constructor(kk) {
        this.load = kk, this.loaded = null, this.loading = null
      }
      run(kk) {
        return null !== this.loaded ? kk(this.loaded) : (this.loading ??= this.load().then((kk => (this.loaded = kk, kk)), (kk => {
          throw this.loading = null, kk
        })), this.loading.then(kk))
      }
    }
    class ak {
      constructor() {
        this.mobScene = new tk((() => Promise.all([Bk.e(69), Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(94), Bk.e(245), Bk.e(72), Bk.e(71), Bk.e(242), Bk.e(70), Bk.e(252), Bk.e(246), Bk.e(251), Bk.e(249), Bk.e(241), Bk.e(218), Bk.e(264), Bk.e(222), Bk.e(236), Bk.e(247), Bk.e(250), Bk.e(74), Bk.e(196), Bk.e(215), Bk.e(219), Bk.e(93), Bk.e(113), Bk.e(234), Bk.e(73), Bk.e(112), Bk.e(153)]).then((() => Bk(40499))))), this.characterScene = new tk((() => Promise.all([Bk.e(69), Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(94), Bk.e(245), Bk.e(72), Bk.e(71), Bk.e(242), Bk.e(70), Bk.e(252), Bk.e(246), Bk.e(251), Bk.e(249), Bk.e(241), Bk.e(218), Bk.e(264), Bk.e(222), Bk.e(236), Bk.e(247), Bk.e(250), Bk.e(74), Bk.e(196), Bk.e(215), Bk.e(219), Bk.e(93), Bk.e(113), Bk.e(234), Bk.e(73), Bk.e(112), Bk.e(152)]).then((() => Bk(40612)))))
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
        return this.characterScene.run((Bk => Bk.openCharacterPreview(kk, Fk)))
      }
    }
    Rk.i.setDefaultHost((() => new ak))
  },
  41169: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      FrontlineMvpLineup: () => Vk
    });
    var Rk = Bk(61),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(9039),
      bk = Bk(40957),
      wk = Bk(40954),
      dk = Bk(1069);

    function sk(kk) {
      return Xk.h.openMobLineup(kk)
    }
    const Vk = (0, Rk.memo)((function(kk) {
      let {
        players: Fk,
        className: Bk
      } = kk;
      const tk = (0, Rk.useRef)(null),
        Xk = (0, Rk.useMemo)((() => Fk.map((kk => {
          let {
            cosmetics: Fk,
            size: Bk,
            heldGun: Rk
          } = kk;
          return {
            cosmetics: Fk,
            size: Bk,
            TY: Rk.name,
            animation: Rk.aimed ? bk.d : bk.e
          }
        }))), [Fk]),
        Vk = function(kk) {
          const [Fk, Bk] = (0, Rk.useState)([]);
          return (0, Rk.useEffect)((() => {
            Bk(kk.map((() => !1)));
            const Fk = kk.map(((kk, Fk) => {
              let {
                showAfterMs: Rk
              } = kk;
              return window.setTimeout((() => {
                Bk((kk => kk.map(((kk, Bk) => kk || Bk === Fk))))
              }), Rk)
            }));
            return () => {
              for (const kk of Fk) window.clearTimeout(kk)
            }
          }), [kk]), Fk
        }(Fk),
        Jk = (0, Rk.useMemo)((() => ({
          figures: Xk,
          shown: Vk
        })), [Xk, Vk]);
      return (0, wk.b)(tk, sk, Jk), (0, dk.jsx)("div", {
        className: ak()("MobPreview", Bk),
        ref: tk
      })
    }))
  },
  36813: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk,
      c: () => Xk
    });
    var Rk = Bk(36805),
      tk = Bk(291),
      ak = Bk(1808);

    function Xk(kk) {
      if ("La" in kk) return Lk.createAnimationScript(kk);
      return new dk(kk).createAnimationScript()
    }

    function bk(kk, Fk, Bk, tk) {
      const ak = kk.La <= 0 ? 1 : Fk + Bk * Math.max(0, tk) / kk.La;
      return kk.Oa === Rk.n.LoopOnLastFrame ? ak % 1 : kk.Oa === Rk.n.NoLoop && ak >= 1 ? null : Math.min(1, ak)
    }
    class wk {
      createAnimationScript(kk) {
        const {
          La: Fk,
          loop: Bk,
          Ea: Rk
        } = kk;
        return {
          La: Math.round(Fk),
          Oa: this.createLoopMode(null !== Bk && void 0 !== Bk && Bk),
          Ea: this.createNodeSkeletonAnimationScript(null !== Rk && void 0 !== Rk ? Rk : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Rk.n.NoLoop;
          case !0:
            return Rk.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Rk.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const Fk = {};
        for (const Bk in kk) {
          const Rk = kk[Bk];
          Fk[Bk] = this.createNodeAnimationScript(Rk)
        }
        return Fk
      }
      createNodeAnimationScript(kk) {
        const {
          timeline: Fk
        } = kk, Bk = Fk.filter((kk => Number.isFinite(kk.timeFraction)));
        return Bk.sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Bk, "rotation", Jk),
          position: this.createTimelineFromKeyframes(Bk, "position", ek)
        }
      }
      createTimelineFromKeyframes(kk, Fk, Bk) {
        const Rk = [];
        for (const wk of kk) {
          const kk = wk[Fk];
          if (kk) {
            const Fk = this.createAnimationFrameWithoutPrecomputes(wk.timeFraction, kk);
            sk(Fk) && Rk.push(Fk)
          }
        }
        const tk = [];
        for (let wk = 0; wk < Rk.length; wk++) {
          var ak, Xk, bk;
          const kk = Rk[wk],
            Fk = null !== (ak = Rk[wk - 1]) && void 0 !== ak ? ak : kk,
            dk = null !== (Xk = Rk[wk + 1]) && void 0 !== Xk ? Xk : kk,
            sk = null !== (bk = Rk[wk + 2]) && void 0 !== bk ? bk : dk;
          tk.push({
            ...kk,
            ...Bk(Fk.post, Fk.timeFraction, kk.post, kk.timeFraction, dk.pre, dk.timeFraction, sk.pre, sk.timeFraction)
          })
        }
        return tk
      }
      createAnimationFrameWithoutPrecomputes(kk, Fk) {
        let Bk, Rk, tk = null;
        var ak;
        if ("object" === typeof Fk && "point" in Fk) tk = null !== (ak = Fk.Ha) && void 0 !== ak ? ak : null, Bk = Fk.point, Rk = Fk.point;
        else if ("object" === typeof Fk && "pre" in Fk) {
          var Xk;
          tk = null !== (Xk = Fk.Ha) && void 0 !== Xk ? Xk : null, Bk = Fk.pre, Rk = Fk.post
        } else Bk = Fk, Rk = Fk;
        return {
          timeFraction: kk,
          Ha: this.createLerpMode(tk),
          pre: Bk,
          post: Rk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Rk.l.Linear : wk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }
    wk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Rk.l.Linear,
      "catmull-rom-spline": Rk.l.CatmullRomSpline
    };
    class dk {
      constructor(kk) {
        this.animationSchema = kk
      }
      createAnimationScript() {
        const {
          animation_length: kk,
          loop: Fk,
          bones: Bk
        } = this.animationSchema;
        return {
          La: Math.round(1e3 * kk),
          Oa: this.createLoopMode(null !== Fk && void 0 !== Fk && Fk),
          Ea: this.createNodeSkeletonAnimationScript(null !== Bk && void 0 !== Bk ? Bk : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Rk.n.NoLoop;
          case !0:
            return Rk.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Rk.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const Fk = {};
        for (const Bk in kk) {
          const Rk = kk[Bk];
          Fk[Bk] = this.createNodeAnimationScript(Rk)
        }
        return Fk
      }
      createNodeAnimationScript(kk) {
        const {
          rotation: Fk,
          position: Bk
        } = kk;
        return {
          rotation: this.createAnimationTimeline(null !== Fk && void 0 !== Fk ? Fk : null, fk, Jk, !0),
          position: this.createAnimationTimeline(null !== Bk && void 0 !== Bk ? Bk : null, Wk, ek, !1)
        }
      }
      createAnimationTimeline(kk, Fk, Bk, Rk) {
        if (null === kk) return [];
        if (Array.isArray(kk)) {
          kk = {
            "0.0": kk
          }
        }
        const tk = Object.entries(kk).map((kk => {
          let [Bk, Rk] = kk;
          const tk = Number(Bk) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(tk, Rk, Fk)
        })).filter(sk);
        tk.sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)), Rk && function(kk) {
          for (let Fk = 1; Fk < kk.length; Fk++) {
            const Bk = kk[Fk - 1].post,
              Rk = kk[Fk],
              tk = vk(Rk.pre),
              ak = vk(Rk.post),
              Xk = Yk(Bk, Rk.pre);
            Yk(Bk, tk) < Xk && (kk[Fk] = {
              ...Rk,
              pre: tk,
              post: ak
            })
          }
        }(tk);
        const ak = [];
        for (let dk = 0; dk < tk.length; dk++) {
          var Xk, bk, wk;
          const kk = tk[dk],
            Fk = null !== (Xk = tk[dk - 1]) && void 0 !== Xk ? Xk : kk,
            Rk = null !== (bk = tk[dk + 1]) && void 0 !== bk ? bk : kk,
            sk = null !== (wk = tk[dk + 2]) && void 0 !== wk ? wk : Rk;
          ak.push({
            ...kk,
            ...Bk(Fk.post, Fk.timeFraction, kk.post, kk.timeFraction, Rk.pre, Rk.timeFraction, sk.pre, sk.timeFraction)
          })
        }
        return ak
      }
      createAnimationFrameWithoutPrecomputes(kk, Fk, Bk) {
        let Rk, tk, ak = null;
        if ("object" === typeof Fk && "post" in Fk) {
          var Xk;
          ak = null !== (Xk = Fk.lerp_mode) && void 0 !== Xk ? Xk : null, tk = yk(Fk.post, Bk), Rk = Fk.pre ? yk(Fk.pre, Bk) : tk
        } else {
          const kk = yk(Fk, Bk);
          tk = kk, Rk = kk
        }
        return {
          timeFraction: kk,
          Ha: this.createLerpMode(ak),
          pre: Rk,
          post: tk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Rk.l.Linear : dk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }

    function sk(kk) {
      return Number.isFinite(kk.timeFraction) && Vk(kk.pre) && Vk(kk.post)
    }

    function Vk(kk) {
      return Number.isFinite(kk[0]) && Number.isFinite(kk[1]) && Number.isFinite(kk[2])
    }

    function Jk(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
      const wk = ak - Fk,
        dk = ak - Rk,
        sk = bk - Rk,
        Vk = [null, null, null];
      for (let Jk = 0; Jk < Vk.length; Jk++) Vk[Jk] = Ak(kk[Jk], Bk[Jk], tk[Jk], Xk[Jk], wk, sk);
      return {
        ua: dk,
        Ma: Vk
      }
    }

    function Ak(kk, Fk, Bk, Rk, ak, Xk) {
      return {
        Ua: tk.b.computeShortestRotation(kk, Bk) / ak,
        ca: tk.b.computeShortestRotation(Fk, Rk) / Xk,
        delta: tk.b.computeShortestRotation(Fk, Bk)
      }
    }

    function ek(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
      const wk = ak - Fk,
        dk = ak - Rk,
        sk = bk - Rk,
        Vk = [null, null, null];
      for (let Jk = 0; Jk < Vk.length; Jk++) Vk[Jk] = {
        Ua: (tk[Jk] - kk[Jk]) / wk,
        ca: (Xk[Jk] - Bk[Jk]) / sk,
        delta: tk[Jk] - Bk[Jk]
      };
      return {
        ua: dk,
        Ma: Vk
      }
    }

    function yk(kk, Fk) {
      return null === Fk ? kk : Fk(kk)
    }

    function fk(kk) {
      const [Fk, Bk, Rk] = kk, Xk = -(0, ak.k)(Fk), bk = -(0, ak.k)(Bk), wk = (0, ak.k)(Rk), dk = tk.b.quaternionFromEulerZYX(Xk, bk, wk);
      return tk.b.eulerYXZFromQuaternion(dk)
    }
    dk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Rk.l.Linear,
      catmullrom: Rk.l.CatmullRomSpline
    };
    const mk = 1 / 16;

    function Wk(kk) {
      return [-kk[0] * mk, kk[1] * mk, kk[2] * mk]
    }

    function vk(kk) {
      const [Fk, Bk, Rk] = kk;
      return [Fk >= 0 ? Math.PI - Fk : -Math.PI - Fk, ik(Bk + Math.PI), ik(Rk + Math.PI)]
    }

    function ik(kk) {
      return tk.b.mod(kk + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Yk(kk, Fk) {
      return Math.abs(tk.b.computeShortestRotation(kk[0], Fk[0])) + Math.abs(tk.b.computeShortestRotation(kk[1], Fk[1])) + Math.abs(tk.b.computeShortestRotation(kk[2], Fk[2]))
    }
    const Lk = new wk
  },
  36805: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      h: () => ak,
      l: () => Rk,
      n: () => tk
    });
    let Rk = function(kk) {
        return kk[kk.Linear = 0] = "Linear", kk[kk.CatmullRomSpline = 1] = "CatmullRomSpline", kk
      }({}),
      tk = function(kk) {
        return kk[kk.NoLoop = 0] = "NoLoop", kk[kk.LoopOnLastFrame = 1] = "LoopOnLastFrame", kk[kk.HoldOnLastFrame = 2] = "HoldOnLastFrame", kk
      }({}),
      ak = function(kk) {
        return kk[kk.Movement = 0] = "Movement", kk[kk.Action = 1] = "Action", kk[kk.Emote = 2] = "Emote", kk[kk.Custom = 3] = "Custom", kk
      }({}),
      Xk = function(kk) {
        return kk[kk.Start = 0] = "Start", kk[kk.Stop = 1] = "Stop", kk
      }({})
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);