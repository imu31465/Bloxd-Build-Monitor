export const id = 200;
export const ids = [200];
export const modules = {
  39481: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(73),
      Ic = nc(2175);

    function rB(cB, Bc, nc) {
      const rB = (0, Vc.useRef)(null),
        {
          width: uc,
          height: sc
        } = (0, Ic.c)(cB);
      (0, Vc.useEffect)((() => {
        const nc = Bc(cB.current);
        return rB.current = nc, () => {
          nc.close(), rB.current = null
        }
      }), [cB, Bc]), (0, Vc.useEffect)((() => {
        uc <= 0 || sc <= 0 || rB.current.resize(uc, sc)
      }), [uc, sc]), (0, Vc.useEffect)((() => {
        rB.current.show(nc)
      }), [nc])
    }
  },
  39486: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      f: () => Oc,
      i: () => Mc
    });
    var Vc = nc(36138),
      Ic = nc(37145);

    function rB(cB, Bc) {
      let [nc, Vc, Ic] = cB;
      return [0, .5, 1].map((cB => ({
        timeFraction: cB,
        rotation: {
          P_: "catmull-rom-spline",
          point: [nc, Vc, Ic + (.5 === cB ? Bc : 0)]
        }
      })))
    }

    function uc(cB, Bc, nc) {
      return {
        A4: 3200,
        loop: !0,
        n_: {
          Root: {
            timeline: [0, .5, 1].map((cB => ({
              timeFraction: cB,
              position: {
                P_: "catmull-rom-spline",
                point: [0, .5 === cB ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((cB => ({
              timeFraction: cB,
              rotation: {
                P_: "catmull-rom-spline",
                point: [0, .25 === cB ? .12 : .75 === cB ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: rB(cB, nc)
          },
          ArmRightMesh: {
            timeline: rB(Bc, -nc)
          }
        }
      }
    }
    const sc = uc([0, 0, 0], [0, 0, 0], .07),
      Mc = (0, Ic.e)((0, Vc.g)(sc), "mobIdle"),
      Pc = uc([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      qB = uc([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Oc = (0, Ic.e)((0, Vc.g)(Pc), "gunReady"),
      Tc = (0, Ic.e)((0, Vc.g)(qB), "gunAimed")
  },
  37145: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => rB
    });
    const Vc = new WeakMap;

    function Ic(cB, Bc) {
      return Vc.set(cB, Bc), cB
    }

    function rB(cB) {
      var Bc;
      return null !== (Bc = Vc.get(cB)) && void 0 !== Bc ? Bc : null
    }
  },
  35463: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      cB instanceof Promise ? cB.then(Bc).catch((cB => {
        console.error("Couldn't open the preview", cB)
      })) : Bc(cB)
    }
    nc.d(Bc, {
      c: () => uc
    });
    class Ic {
      constructor(cB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Vc(cB, (cB => {
          this.closed ? cB.close() : (this.opened = cB, null !== this.size && cB.resize(this.size.width, this.size.height), null !== this.view && cB.show(this.view))
        }))
      }
      show(cB) {
        var Bc;
        this.view = cB, null === (Bc = this.opened) || void 0 === Bc || Bc.show(cB)
      }
      resize(cB, Bc) {
        var nc;
        this.size = {
          width: cB,
          height: Bc
        }, null === (nc = this.opened) || void 0 === nc || nc.resize(cB, Bc)
      }
      close() {
        var cB;
        this.closed = !0, null === (cB = this.opened) || void 0 === cB || cB.close(), this.opened = null
      }
    }
    class rB {
      constructor(cB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(cB).then((cB => cB.ready)), Vc(cB, (cB => {
          this.closed ? cB.close() : (this.opened = cB, null !== this.size && cB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.opened) || void 0 === Bc ? void 0 : Bc.isReady()) && void 0 !== cB && cB
      }
      setCosmetic(cB, Bc) {
        var nc;
        null === (nc = this.opened) || void 0 === nc || nc.setCosmetic(cB, Bc)
      }
      playEmote(cB) {
        var Bc;
        null === (Bc = this.opened) || void 0 === Bc || Bc.playEmote(cB)
      }
      async untilDrawn(cB) {
        var Bc;
        await this.ready, await (null === (Bc = this.opened) || void 0 === Bc ? void 0 : Bc.untilDrawn(cB))
      }
      resize(cB, Bc) {
        var nc;
        this.size = {
          width: cB,
          height: Bc
        }, null === (nc = this.opened) || void 0 === nc || nc.resize(cB, Bc)
      }
      close() {
        var cB;
        this.closed = !0, null === (cB = this.opened) || void 0 === cB || cB.close(), this.opened = null
      }
    }
    const uc = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(cB) {
        this.host = cB
      }
      setDefaultHost(cB) {
        this.makeDefault = cB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(cB) {
        return new Ic(this.current().openMob(cB))
      }
      openPet(cB) {
        return new Ic(this.current().openPet(cB))
      }
      openMobLineup(cB) {
        return new Ic(this.current().openMobLineup(cB))
      }
      openCharacter(cB) {
        return new rB(this.current().openCharacter(cB))
      }
    }
  },
  35460: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc.c
    });
    var Vc = nc(35463);
    class Ic {
      constructor(cB) {
        this.load = cB, this.loaded = null, this.loading = null
      }
      run(cB) {
        return null !== this.loaded ? cB(this.loaded) : (this.loading ??= this.load().then((cB => (this.loaded = cB, cB)), (cB => {
          throw this.loading = null, cB
        })), this.loading.then(cB))
      }
    }
    class rB {
      constructor() {
        this.mobScene = new Ic((() => Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(63), nc.e(62), nc.e(228), nc.e(61), nc.e(238), nc.e(232), nc.e(237), nc.e(235), nc.e(227), nc.e(203), nc.e(266), nc.e(208), nc.e(221), nc.e(233), nc.e(236), nc.e(123), nc.e(181), nc.e(219), nc.e(204), nc.e(101), nc.e(99), nc.e(267), nc.e(145)]).then((() => nc(39167))))), this.characterScene = new Ic((() => Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(63), nc.e(62), nc.e(228), nc.e(61), nc.e(238), nc.e(232), nc.e(237), nc.e(235), nc.e(227), nc.e(203), nc.e(266), nc.e(208), nc.e(221), nc.e(233), nc.e(236), nc.e(123), nc.e(181), nc.e(219), nc.e(204), nc.e(101), nc.e(99), nc.e(267), nc.e(144)]).then((() => nc(39259)))))
      }
      openMob(cB) {
        return this.mobScene.run((Bc => Bc.openMobPreview(cB)))
      }
      openPet(cB) {
        return this.mobScene.run((Bc => Bc.openPetPreview(cB)))
      }
      openMobLineup(cB) {
        return this.mobScene.run((Bc => Bc.openMobLineupPreview(cB)))
      }
      openCharacter(cB) {
        return this.characterScene.run((Bc => Bc.openCharacterPreview(cB)))
      }
    }
    Vc.c.setDefaultHost((() => new rB))
  },
  39701: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      FrontlineMvpLineup: () => Oc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(35460),
      sc = nc(39486),
      Mc = nc(39481),
      Pc = nc(957);

    function qB(cB) {
      return uc.d.openMobLineup(cB)
    }
    const Oc = (0, Vc.memo)((function(cB) {
      let {
        players: Bc,
        className: nc
      } = cB;
      const Ic = (0, Vc.useRef)(null),
        uc = (0, Vc.useMemo)((() => Bc.map((cB => {
          let {
            cosmetics: Bc,
            size: nc,
            heldGun: Vc
          } = cB;
          return {
            cosmetics: Bc,
            size: nc,
            vY: Vc.name,
            animation: Vc.aimed ? sc.d : sc.f
          }
        }))), [Bc]),
        Oc = function(cB) {
          const [Bc, nc] = (0, Vc.useState)([]);
          return (0, Vc.useEffect)((() => {
            nc(cB.map((() => !1)));
            const Bc = cB.map(((cB, Bc) => {
              let {
                showAfterMs: Vc
              } = cB;
              return window.setTimeout((() => {
                nc((cB => cB.map(((cB, nc) => cB || nc === Bc))))
              }), Vc)
            }));
            return () => {
              for (const cB of Bc) window.clearTimeout(cB)
            }
          }), [cB]), Bc
        }(Bc),
        Tc = (0, Vc.useMemo)((() => ({
          figures: uc,
          shown: Oc
        })), [uc, Oc]);
      return (0, Mc.b)(Ic, qB, Tc), (0, Pc.jsx)("div", {
        className: rB()("MobPreview", nc),
        ref: Ic
      })
    }))
  },
  36138: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc,
      g: () => uc
    });
    var Vc = nc(36130),
      Ic = nc(302),
      rB = nc(1534);

    function uc(cB) {
      if ("A4" in cB) return aB.createAnimationScript(cB);
      return new Pc(cB).createAnimationScript()
    }

    function sc(cB, Bc, nc, Ic) {
      const rB = cB.A4 <= 0 ? 1 : Bc + nc * Math.max(0, Ic) / cB.A4;
      return cB.B_ === Vc.h.LoopOnLastFrame ? rB % 1 : cB.B_ === Vc.h.NoLoop && rB >= 1 ? null : Math.min(1, rB)
    }
    class Mc {
      createAnimationScript(cB) {
        const {
          A4: Bc,
          loop: nc,
          n_: Vc
        } = cB;
        return {
          A4: Math.round(Bc),
          B_: this.createLoopMode(null !== nc && void 0 !== nc && nc),
          n_: this.createNodeSkeletonAnimationScript(null !== Vc && void 0 !== Vc ? Vc : null)
        }
      }
      createLoopMode(cB) {
        switch (cB) {
          case !1:
            return Vc.h.NoLoop;
          case !0:
            return Vc.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Vc.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${cB}`)
      }
      createNodeSkeletonAnimationScript(cB) {
        if (null === cB) return null;
        const Bc = {};
        for (const nc in cB) {
          const Vc = cB[nc];
          Bc[nc] = this.createNodeAnimationScript(Vc)
        }
        return Bc
      }
      createNodeAnimationScript(cB) {
        const {
          timeline: Bc
        } = cB, nc = Bc.filter((cB => Number.isFinite(cB.timeFraction)));
        return nc.sort(((cB, Bc) => cB.timeFraction - Bc.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(nc, "rotation", Tc),
          position: this.createTimelineFromKeyframes(nc, "position", mB)
        }
      }
      createTimelineFromKeyframes(cB, Bc, nc) {
        const Vc = [];
        for (const Mc of cB) {
          const cB = Mc[Bc];
          if (cB) {
            const Bc = this.createAnimationFrameWithoutPrecomputes(Mc.timeFraction, cB);
            qB(Bc) && Vc.push(Bc)
          }
        }
        const Ic = [];
        for (let Mc = 0; Mc < Vc.length; Mc++) {
          var rB, uc, sc;
          const cB = Vc[Mc],
            Bc = null !== (rB = Vc[Mc - 1]) && void 0 !== rB ? rB : cB,
            Pc = null !== (uc = Vc[Mc + 1]) && void 0 !== uc ? uc : cB,
            qB = null !== (sc = Vc[Mc + 2]) && void 0 !== sc ? sc : Pc;
          Ic.push({
            ...cB,
            ...nc(Bc.post, Bc.timeFraction, cB.post, cB.timeFraction, Pc.pre, Pc.timeFraction, qB.pre, qB.timeFraction)
          })
        }
        return Ic
      }
      createAnimationFrameWithoutPrecomputes(cB, Bc) {
        let nc, Vc, Ic = null;
        var rB;
        if ("object" === typeof Bc && "point" in Bc) Ic = null !== (rB = Bc.P_) && void 0 !== rB ? rB : null, nc = Bc.point, Vc = Bc.point;
        else if ("object" === typeof Bc && "pre" in Bc) {
          var uc;
          Ic = null !== (uc = Bc.P_) && void 0 !== uc ? uc : null, nc = Bc.pre, Vc = Bc.post
        } else nc = Bc, Vc = Bc;
        return {
          timeFraction: cB,
          P_: this.createLerpMode(Ic),
          pre: nc,
          post: Vc
        }
      }
      createLerpMode(cB) {
        return null === cB ? Vc.g.Linear : Mc.LERP_MODE_SCHEMA_MAPPING[cB]
      }
    }
    Mc.LERP_MODE_SCHEMA_MAPPING = {
      linear: Vc.g.Linear,
      "catmull-rom-spline": Vc.g.CatmullRomSpline
    };
    class Pc {
      constructor(cB) {
        this.animationSchema = cB
      }
      createAnimationScript() {
        const {
          animation_length: cB,
          loop: Bc,
          bones: nc
        } = this.animationSchema;
        return {
          A4: Math.round(1e3 * cB),
          B_: this.createLoopMode(null !== Bc && void 0 !== Bc && Bc),
          n_: this.createNodeSkeletonAnimationScript(null !== nc && void 0 !== nc ? nc : null)
        }
      }
      createLoopMode(cB) {
        switch (cB) {
          case !1:
            return Vc.h.NoLoop;
          case !0:
            return Vc.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Vc.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${cB}`)
      }
      createNodeSkeletonAnimationScript(cB) {
        if (null === cB) return null;
        const Bc = {};
        for (const nc in cB) {
          const Vc = cB[nc];
          Bc[nc] = this.createNodeAnimationScript(Vc)
        }
        return Bc
      }
      createNodeAnimationScript(cB) {
        const {
          rotation: Bc,
          position: nc
        } = cB;
        return {
          rotation: this.createAnimationTimeline(null !== Bc && void 0 !== Bc ? Bc : null, tB, Tc, !0),
          position: this.createAnimationTimeline(null !== nc && void 0 !== nc ? nc : null, yB, mB, !1)
        }
      }
      createAnimationTimeline(cB, Bc, nc, Vc) {
        if (null === cB) return [];
        if (Array.isArray(cB)) {
          cB = {
            "0.0": cB
          }
        }
        const Ic = Object.entries(cB).map((cB => {
          let [nc, Vc] = cB;
          const Ic = Number(nc) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Ic, Vc, Bc)
        })).filter(qB);
        Ic.sort(((cB, Bc) => cB.timeFraction - Bc.timeFraction)), Vc && function(cB) {
          for (let Bc = 1; Bc < cB.length; Bc++) {
            const nc = cB[Bc - 1].post,
              Vc = cB[Bc],
              Ic = zB(Vc.pre),
              rB = zB(Vc.post),
              uc = hc(nc, Vc.pre);
            hc(nc, Ic) < uc && (cB[Bc] = {
              ...Vc,
              pre: Ic,
              post: rB
            })
          }
        }(Ic);
        const rB = [];
        for (let Pc = 0; Pc < Ic.length; Pc++) {
          var uc, sc, Mc;
          const cB = Ic[Pc],
            Bc = null !== (uc = Ic[Pc - 1]) && void 0 !== uc ? uc : cB,
            Vc = null !== (sc = Ic[Pc + 1]) && void 0 !== sc ? sc : cB,
            qB = null !== (Mc = Ic[Pc + 2]) && void 0 !== Mc ? Mc : Vc;
          rB.push({
            ...cB,
            ...nc(Bc.post, Bc.timeFraction, cB.post, cB.timeFraction, Vc.pre, Vc.timeFraction, qB.pre, qB.timeFraction)
          })
        }
        return rB
      }
      createAnimationFrameWithoutPrecomputes(cB, Bc, nc) {
        let Vc, Ic, rB = null;
        if ("object" === typeof Bc && "post" in Bc) {
          var uc;
          rB = null !== (uc = Bc.lerp_mode) && void 0 !== uc ? uc : null, Ic = ec(Bc.post, nc), Vc = Bc.pre ? ec(Bc.pre, nc) : Ic
        } else {
          const cB = ec(Bc, nc);
          Ic = cB, Vc = cB
        }
        return {
          timeFraction: cB,
          P_: this.createLerpMode(rB),
          pre: Vc,
          post: Ic
        }
      }
      createLerpMode(cB) {
        return null === cB ? Vc.g.Linear : Pc.LERP_MODE_SCHEMA_MAPPING[cB]
      }
    }

    function qB(cB) {
      return Number.isFinite(cB.timeFraction) && Oc(cB.pre) && Oc(cB.post)
    }

    function Oc(cB) {
      return Number.isFinite(cB[0]) && Number.isFinite(cB[1]) && Number.isFinite(cB[2])
    }

    function Tc(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
      const Mc = rB - Bc,
        Pc = rB - Vc,
        qB = sc - Vc,
        Oc = [null, null, null];
      for (let Tc = 0; Tc < Oc.length; Tc++) Oc[Tc] = fc(cB[Tc], nc[Tc], Ic[Tc], uc[Tc], Mc, qB);
      return {
        T_: Pc,
        f_: Oc
      }
    }

    function fc(cB, Bc, nc, Vc, rB, uc) {
      return {
        t5: Ic.b.computeShortestRotation(cB, nc) / rB,
        S_: Ic.b.computeShortestRotation(Bc, Vc) / uc,
        delta: Ic.b.computeShortestRotation(Bc, nc)
      }
    }

    function mB(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
      const Mc = rB - Bc,
        Pc = rB - Vc,
        qB = sc - Vc,
        Oc = [null, null, null];
      for (let Tc = 0; Tc < Oc.length; Tc++) Oc[Tc] = {
        t5: (Ic[Tc] - cB[Tc]) / Mc,
        S_: (uc[Tc] - nc[Tc]) / qB,
        delta: Ic[Tc] - nc[Tc]
      };
      return {
        T_: Pc,
        f_: Oc
      }
    }

    function ec(cB, Bc) {
      return null === Bc ? cB : Bc(cB)
    }

    function tB(cB) {
      const [Bc, nc, Vc] = cB, uc = -(0, rB.m)(Bc), sc = -(0, rB.m)(nc), Mc = (0, rB.m)(Vc), Pc = Ic.b.quaternionFromEulerZYX(uc, sc, Mc);
      return Ic.b.eulerYXZFromQuaternion(Pc)
    }
    Pc.LERP_MODE_SCHEMA_MAPPING = {
      linear: Vc.g.Linear,
      catmullrom: Vc.g.CatmullRomSpline
    };
    const Sc = 1 / 16;

    function yB(cB) {
      return [-cB[0] * Sc, cB[1] * Sc, cB[2] * Sc]
    }

    function zB(cB) {
      const [Bc, nc, Vc] = cB;
      return [Bc >= 0 ? Math.PI - Bc : -Math.PI - Bc, pc(nc + Math.PI), pc(Vc + Math.PI)]
    }

    function pc(cB) {
      return Ic.b.mod(cB + Math.PI, 2 * Math.PI) - Math.PI
    }

    function hc(cB, Bc) {
      return Math.abs(Ic.b.computeShortestRotation(cB[0], Bc[0])) + Math.abs(Ic.b.computeShortestRotation(cB[1], Bc[1])) + Math.abs(Ic.b.computeShortestRotation(cB[2], Bc[2]))
    }
    const aB = new Mc
  },
  36130: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      d: () => rB,
      g: () => Vc,
      h: () => Ic
    });
    let Vc = function(cB) {
        return cB[cB.Linear = 0] = "Linear", cB[cB.CatmullRomSpline = 1] = "CatmullRomSpline", cB
      }({}),
      Ic = function(cB) {
        return cB[cB.NoLoop = 0] = "NoLoop", cB[cB.LoopOnLastFrame = 1] = "LoopOnLastFrame", cB[cB.HoldOnLastFrame = 2] = "HoldOnLastFrame", cB
      }({}),
      rB = function(cB) {
        return cB[cB.Movement = 0] = "Movement", cB[cB.Action = 1] = "Action", cB[cB.Emote = 2] = "Emote", cB[cB.Custom = 3] = "Custom", cB
      }({}),
      uc = function(cB) {
        return cB[cB.Start = 0] = "Start", cB[cB.Stop = 1] = "Stop", cB
      }({})
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);