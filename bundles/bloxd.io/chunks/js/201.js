export const id = 201;
export const ids = [201];
export const modules = {
  41088: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(60),
      fk = ik(2683);

    function Sk(kk, ek, ik) {
      const Sk = (0, Dk.useRef)(null),
        {
          width: bk,
          height: rk
        } = (0, fk.c)(kk);
      (0, Dk.useEffect)((() => {
        const ik = ek(kk.current);
        return Sk.current = ik, () => {
          ik.close(), Sk.current = null
        }
      }), [kk, ek]), (0, Dk.useEffect)((() => {
        bk <= 0 || rk <= 0 || Sk.current.resize(bk, rk)
      }), [bk, rk]), (0, Dk.useEffect)((() => {
        Sk.current.show(ik)
      }), [ik])
    }
  },
  41093: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => xk,
      c: () => Kk,
      g: () => Pk
    });
    var Dk = ik(36754),
      fk = ik(38226);

    function Sk(kk, ek) {
      let [ik, Dk, fk] = kk;
      return [0, .5, 1].map((kk => ({
        timeFraction: kk,
        rotation: {
          Wi: "catmull-rom-spline",
          point: [ik, Dk, fk + (.5 === kk ? ek : 0)]
        }
      })))
    }

    function bk(kk, ek, ik) {
      return {
        Ii: 3200,
        loop: !0,
        Qi: {
          Root: {
            timeline: [0, .5, 1].map((kk => ({
              timeFraction: kk,
              position: {
                Wi: "catmull-rom-spline",
                point: [0, .5 === kk ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((kk => ({
              timeFraction: kk,
              rotation: {
                Wi: "catmull-rom-spline",
                point: [0, .25 === kk ? .12 : .75 === kk ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Sk(kk, ik)
          },
          ArmRightMesh: {
            timeline: Sk(ek, -ik)
          }
        }
      }
    }
    const rk = bk([0, 0, 0], [0, 0, 0], .07),
      Pk = (0, fk.e)((0, Dk.g)(rk), "mobIdle"),
      mk = bk([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Mk = bk([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Kk = (0, fk.e)((0, Dk.g)(mk), "gunReady"),
      xk = (0, fk.e)((0, Dk.g)(Mk), "gunAimed")
  },
  38226: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      i: () => Sk
    });
    const Dk = new WeakMap;

    function fk(kk, ek) {
      return Dk.set(kk, ek), kk
    }

    function Sk(kk) {
      var ek;
      return null !== (ek = Dk.get(kk)) && void 0 !== ek ? ek : null
    }
  },
  33801: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk,
      e: () => fk,
      f: () => Mk
    });
    var Dk = ik(1537);

    function fk(kk) {
      var ek;
      return {
        ...bk.store,
        yaw: bk.store.yaw + (null !== (ek = Dk.c[kk].previewYaw) && void 0 !== ek ? ek : 0)
      }
    }
    const Sk = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      bk = {
        player: Sk,
        store: {
          ...Sk,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function rk(kk, ek) {
      kk instanceof Promise ? kk.then(ek).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : ek(kk)
    }
    class Pk {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, rk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var ek;
        this.view = kk, null === (ek = this.opened) || void 0 === ek || ek.show(kk)
      }
      resize(kk, ek) {
        var ik;
        this.size = {
          width: kk,
          height: ek
        }, null === (ik = this.opened) || void 0 === ik || ik.resize(kk, ek)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class mk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), rk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var kk, ek;
        return null !== (kk = null === (ek = this.opened) || void 0 === ek ? void 0 : ek.isReady()) && void 0 !== kk && kk
      }
      setCosmetic(kk, ek) {
        var ik;
        null === (ik = this.opened) || void 0 === ik || ik.setCosmetic(kk, ek)
      }
      playEmote(kk) {
        var ek;
        null === (ek = this.opened) || void 0 === ek || ek.playEmote(kk)
      }
      setOrbit(kk) {
        var ek;
        null === (ek = this.opened) || void 0 === ek || ek.setOrbit(kk)
      }
      resetCamera() {
        var kk;
        null === (kk = this.opened) || void 0 === kk || kk.resetCamera()
      }
      async untilDrawn(kk) {
        var ek;
        await this.ready, await (null === (ek = this.opened) || void 0 === ek ? void 0 : ek.untilDrawn(kk))
      }
      resize(kk, ek) {
        var ik;
        this.size = {
          width: kk,
          height: ek
        }, null === (ik = this.opened) || void 0 === ik || ik.resize(kk, ek)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const Mk = new class {
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
        return new Pk(this.current().openMob(kk))
      }
      openPet(kk) {
        return new Pk(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new Pk(this.current().openMobLineup(kk))
      }
      openCharacter(kk, ek) {
        return new mk(this.current().openCharacter(kk, ek))
      }
    }
  },
  33799: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.d,
      g: () => Dk.e,
      h: () => Dk.f
    });
    var Dk = ik(33801);
    class fk {
      constructor(kk) {
        this.load = kk, this.loaded = null, this.loading = null
      }
      run(kk) {
        return null !== this.loaded ? kk(this.loaded) : (this.loading ??= this.load().then((kk => (this.loaded = kk, kk)), (kk => {
          throw this.loading = null, kk
        })), this.loading.then(kk))
      }
    }
    class Sk {
      constructor() {
        this.mobScene = new fk((() => Promise.all([ik.e(72), ik.e(230), ik.e(229), ik.e(250), ik.e(96), ik.e(251), ik.e(75), ik.e(74), ik.e(248), ik.e(73), ik.e(258), ik.e(252), ik.e(257), ik.e(255), ik.e(247), ik.e(272), ik.e(226), ik.e(242), ik.e(253), ik.e(256), ik.e(77), ik.e(188), ik.e(220), ik.e(95), ik.e(223), ik.e(238), ik.e(120), ik.e(239), ik.e(76), ik.e(119), ik.e(159)]).then((() => ik(40671))))), this.characterScene = new fk((() => Promise.all([ik.e(72), ik.e(230), ik.e(229), ik.e(250), ik.e(96), ik.e(251), ik.e(75), ik.e(74), ik.e(248), ik.e(73), ik.e(258), ik.e(252), ik.e(257), ik.e(255), ik.e(247), ik.e(272), ik.e(226), ik.e(242), ik.e(253), ik.e(256), ik.e(77), ik.e(188), ik.e(220), ik.e(95), ik.e(223), ik.e(238), ik.e(120), ik.e(239), ik.e(76), ik.e(119), ik.e(158)]).then((() => ik(40742)))))
      }
      openMob(kk) {
        return this.mobScene.run((ek => ek.openMobPreview(kk)))
      }
      openPet(kk) {
        return this.mobScene.run((ek => ek.openPetPreview(kk)))
      }
      openMobLineup(kk) {
        return this.mobScene.run((ek => ek.openMobLineupPreview(kk)))
      }
      openCharacter(kk, ek) {
        return this.characterScene.run((ik => ik.openCharacterPreview(kk, ek)))
      }
    }
    Dk.f.setDefaultHost((() => new Sk))
  },
  41334: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      FrontlineMvpLineup: () => Kk
    });
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(33799),
      rk = ik(41093),
      Pk = ik(41088),
      mk = ik(1066);

    function Mk(kk) {
      return bk.h.openMobLineup(kk)
    }
    const Kk = (0, Dk.memo)((function(kk) {
      let {
        players: ek,
        className: ik
      } = kk;
      const fk = (0, Dk.useRef)(null),
        bk = (0, Dk.useMemo)((() => ek.map((kk => {
          let {
            cosmetics: ek,
            size: ik,
            heldGun: Dk
          } = kk;
          return {
            cosmetics: ek,
            size: ik,
            JY: Dk.name,
            animation: Dk.aimed ? rk.b : rk.c
          }
        }))), [ek]),
        Kk = function(kk) {
          const [ek, ik] = (0, Dk.useState)([]);
          return (0, Dk.useEffect)((() => {
            ik(kk.map((() => !1)));
            const ek = kk.map(((kk, ek) => {
              let {
                showAfterMs: Dk
              } = kk;
              return window.setTimeout((() => {
                ik((kk => kk.map(((kk, ik) => kk || ik === ek))))
              }), Dk)
            }));
            return () => {
              for (const kk of ek) window.clearTimeout(kk)
            }
          }), [kk]), ek
        }(ek),
        xk = (0, Dk.useMemo)((() => ({
          figures: bk,
          shown: Kk
        })), [bk, Kk]);
      return (0, Pk.b)(fk, Mk, xk), (0, mk.jsx)("div", {
        className: Sk()("MobPreview", ik),
        ref: fk
      })
    }))
  },
  36754: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      g: () => bk
    });
    var Dk = ik(36747),
      fk = ik(314),
      Sk = ik(1850);

    function bk(kk) {
      if ("Ii" in kk) return Ck.createAnimationScript(kk);
      return new mk(kk).createAnimationScript()
    }

    function rk(kk, ek, ik, fk) {
      const Sk = kk.Ii <= 0 ? 1 : ek + ik * Math.max(0, fk) / kk.Ii;
      return kk.zi === Dk.k.LoopOnLastFrame ? Sk % 1 : kk.zi === Dk.k.NoLoop && Sk >= 1 ? null : Math.min(1, Sk)
    }
    class Pk {
      createAnimationScript(kk) {
        const {
          Ii: ek,
          loop: ik,
          Qi: Dk
        } = kk;
        return {
          Ii: Math.round(ek),
          zi: this.createLoopMode(null !== ik && void 0 !== ik && ik),
          Qi: this.createNodeSkeletonAnimationScript(null !== Dk && void 0 !== Dk ? Dk : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Dk.k.NoLoop;
          case !0:
            return Dk.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Dk.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const ek = {};
        for (const ik in kk) {
          const Dk = kk[ik];
          ek[ik] = this.createNodeAnimationScript(Dk)
        }
        return ek
      }
      createNodeAnimationScript(kk) {
        const {
          timeline: ek
        } = kk, ik = ek.filter((kk => Number.isFinite(kk.timeFraction)));
        return ik.sort(((kk, ek) => kk.timeFraction - ek.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(ik, "rotation", xk),
          position: this.createTimelineFromKeyframes(ik, "position", Uk)
        }
      }
      createTimelineFromKeyframes(kk, ek, ik) {
        const Dk = [];
        for (const Pk of kk) {
          const kk = Pk[ek];
          if (kk) {
            const ek = this.createAnimationFrameWithoutPrecomputes(Pk.timeFraction, kk);
            Mk(ek) && Dk.push(ek)
          }
        }
        const fk = [];
        for (let Pk = 0; Pk < Dk.length; Pk++) {
          var Sk, bk, rk;
          const kk = Dk[Pk],
            ek = null !== (Sk = Dk[Pk - 1]) && void 0 !== Sk ? Sk : kk,
            mk = null !== (bk = Dk[Pk + 1]) && void 0 !== bk ? bk : kk,
            Mk = null !== (rk = Dk[Pk + 2]) && void 0 !== rk ? rk : mk;
          fk.push({
            ...kk,
            ...ik(ek.post, ek.timeFraction, kk.post, kk.timeFraction, mk.pre, mk.timeFraction, Mk.pre, Mk.timeFraction)
          })
        }
        return fk
      }
      createAnimationFrameWithoutPrecomputes(kk, ek) {
        let ik, Dk, fk = null;
        var Sk;
        if ("object" === typeof ek && "point" in ek) fk = null !== (Sk = ek.Wi) && void 0 !== Sk ? Sk : null, ik = ek.point, Dk = ek.point;
        else if ("object" === typeof ek && "pre" in ek) {
          var bk;
          fk = null !== (bk = ek.Wi) && void 0 !== bk ? bk : null, ik = ek.pre, Dk = ek.post
        } else ik = ek, Dk = ek;
        return {
          timeFraction: kk,
          Wi: this.createLerpMode(fk),
          pre: ik,
          post: Dk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Dk.h.Linear : Pk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }
    Pk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Dk.h.Linear,
      "catmull-rom-spline": Dk.h.CatmullRomSpline
    };
    class mk {
      constructor(kk) {
        this.animationSchema = kk
      }
      createAnimationScript() {
        const {
          animation_length: kk,
          loop: ek,
          bones: ik
        } = this.animationSchema;
        return {
          Ii: Math.round(1e3 * kk),
          zi: this.createLoopMode(null !== ek && void 0 !== ek && ek),
          Qi: this.createNodeSkeletonAnimationScript(null !== ik && void 0 !== ik ? ik : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Dk.k.NoLoop;
          case !0:
            return Dk.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Dk.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const ek = {};
        for (const ik in kk) {
          const Dk = kk[ik];
          ek[ik] = this.createNodeAnimationScript(Dk)
        }
        return ek
      }
      createNodeAnimationScript(kk) {
        const {
          rotation: ek,
          position: ik
        } = kk;
        return {
          rotation: this.createAnimationTimeline(null !== ek && void 0 !== ek ? ek : null, wk, xk, !0),
          position: this.createAnimationTimeline(null !== ik && void 0 !== ik ? ik : null, pk, Uk, !1)
        }
      }
      createAnimationTimeline(kk, ek, ik, Dk) {
        if (null === kk) return [];
        if (Array.isArray(kk)) {
          kk = {
            "0.0": kk
          }
        }
        const fk = Object.entries(kk).map((kk => {
          let [ik, Dk] = kk;
          const fk = Number(ik) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(fk, Dk, ek)
        })).filter(Mk);
        fk.sort(((kk, ek) => kk.timeFraction - ek.timeFraction)), Dk && function(kk) {
          for (let ek = 1; ek < kk.length; ek++) {
            const ik = kk[ek - 1].post,
              Dk = kk[ek],
              fk = yk(Dk.pre),
              Sk = yk(Dk.post),
              bk = Lk(ik, Dk.pre);
            Lk(ik, fk) < bk && (kk[ek] = {
              ...Dk,
              pre: fk,
              post: Sk
            })
          }
        }(fk);
        const Sk = [];
        for (let mk = 0; mk < fk.length; mk++) {
          var bk, rk, Pk;
          const kk = fk[mk],
            ek = null !== (bk = fk[mk - 1]) && void 0 !== bk ? bk : kk,
            Dk = null !== (rk = fk[mk + 1]) && void 0 !== rk ? rk : kk,
            Mk = null !== (Pk = fk[mk + 2]) && void 0 !== Pk ? Pk : Dk;
          Sk.push({
            ...kk,
            ...ik(ek.post, ek.timeFraction, kk.post, kk.timeFraction, Dk.pre, Dk.timeFraction, Mk.pre, Mk.timeFraction)
          })
        }
        return Sk
      }
      createAnimationFrameWithoutPrecomputes(kk, ek, ik) {
        let Dk, fk, Sk = null;
        if ("object" === typeof ek && "post" in ek) {
          var bk;
          Sk = null !== (bk = ek.lerp_mode) && void 0 !== bk ? bk : null, fk = Hk(ek.post, ik), Dk = ek.pre ? Hk(ek.pre, ik) : fk
        } else {
          const kk = Hk(ek, ik);
          fk = kk, Dk = kk
        }
        return {
          timeFraction: kk,
          Wi: this.createLerpMode(Sk),
          pre: Dk,
          post: fk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Dk.h.Linear : mk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }

    function Mk(kk) {
      return Number.isFinite(kk.timeFraction) && Kk(kk.pre) && Kk(kk.post)
    }

    function Kk(kk) {
      return Number.isFinite(kk[0]) && Number.isFinite(kk[1]) && Number.isFinite(kk[2])
    }

    function xk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
      const Pk = Sk - ek,
        mk = Sk - Dk,
        Mk = rk - Dk,
        Kk = [null, null, null];
      for (let xk = 0; xk < Kk.length; xk++) Kk[xk] = nk(kk[xk], ik[xk], fk[xk], bk[xk], Pk, Mk);
      return {
        Xi: mk,
        Bi: Kk
      }
    }

    function nk(kk, ek, ik, Dk, Sk, bk) {
      return {
        oi: fk.c.computeShortestRotation(kk, ik) / Sk,
        Zi: fk.c.computeShortestRotation(ek, Dk) / bk,
        delta: fk.c.computeShortestRotation(ek, ik)
      }
    }

    function Uk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
      const Pk = Sk - ek,
        mk = Sk - Dk,
        Mk = rk - Dk,
        Kk = [null, null, null];
      for (let xk = 0; xk < Kk.length; xk++) Kk[xk] = {
        oi: (fk[xk] - kk[xk]) / Pk,
        Zi: (bk[xk] - ik[xk]) / Mk,
        delta: fk[xk] - ik[xk]
      };
      return {
        Xi: mk,
        Bi: Kk
      }
    }

    function Hk(kk, ek) {
      return null === ek ? kk : ek(kk)
    }

    function wk(kk) {
      const [ek, ik, Dk] = kk, bk = -(0, Sk.h)(ek), rk = -(0, Sk.h)(ik), Pk = (0, Sk.h)(Dk), mk = fk.c.quaternionFromEulerZYX(bk, rk, Pk);
      return fk.c.eulerYXZFromQuaternion(mk)
    }
    mk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Dk.h.Linear,
      catmullrom: Dk.h.CatmullRomSpline
    };
    const lk = 1 / 16;

    function pk(kk) {
      return [-kk[0] * lk, kk[1] * lk, kk[2] * lk]
    }

    function yk(kk) {
      const [ek, ik, Dk] = kk;
      return [ek >= 0 ? Math.PI - ek : -Math.PI - ek, Yk(ik + Math.PI), Yk(Dk + Math.PI)]
    }

    function Yk(kk) {
      return fk.c.mod(kk + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Lk(kk, ek) {
      return Math.abs(fk.c.computeShortestRotation(kk[0], ek[0])) + Math.abs(fk.c.computeShortestRotation(kk[1], ek[1])) + Math.abs(fk.c.computeShortestRotation(kk[2], ek[2]))
    }
    const Ck = new Pk
  },
  36747: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      g: () => Sk,
      h: () => Dk,
      k: () => fk
    });
    let Dk = function(kk) {
        return kk[kk.Linear = 0] = "Linear", kk[kk.CatmullRomSpline = 1] = "CatmullRomSpline", kk
      }({}),
      fk = function(kk) {
        return kk[kk.NoLoop = 0] = "NoLoop", kk[kk.LoopOnLastFrame = 1] = "LoopOnLastFrame", kk[kk.HoldOnLastFrame = 2] = "HoldOnLastFrame", kk
      }({}),
      Sk = function(kk) {
        return kk[kk.Movement = 0] = "Movement", kk[kk.Action = 1] = "Action", kk[kk.Emote = 2] = "Emote", kk[kk.Custom = 3] = "Custom", kk
      }({}),
      bk = function(kk) {
        return kk[kk.Start = 0] = "Start", kk[kk.Stop = 1] = "Stop", kk
      }({})
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);