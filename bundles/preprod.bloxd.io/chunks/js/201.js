export const id = 201;
export const ids = [201];
export const modules = {
  39973: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(55),
      hy = Wy(2214);

    function fy(yb, bb, Wy) {
      const fy = (0, Uy.useRef)(null),
        {
          width: Zy,
          height: cb
        } = (0, hy.e)(yb);
      (0, Uy.useEffect)((() => {
        const Wy = bb(yb.current);
        return fy.current = Wy, () => {
          Wy.close(), fy.current = null
        }
      }), [yb, bb]), (0, Uy.useEffect)((() => {
        Zy <= 0 || cb <= 0 || fy.current.resize(Zy, cb)
      }), [Zy, cb]), (0, Uy.useEffect)((() => {
        fy.current.show(Wy)
      }), [Wy])
    }
  },
  39982: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => ey,
      c: () => Ky,
      d: () => Py
    });
    var Uy = Wy(36237),
      hy = Wy(37302);

    function fy(yb, bb) {
      let [Wy, Uy, hy] = yb;
      return [0, .5, 1].map((yb => ({
        timeFraction: yb,
        rotation: {
          Kyy: "catmull-rom-spline",
          point: [Wy, Uy, hy + (.5 === yb ? bb : 0)]
        }
      })))
    }

    function Zy(yb, bb, Wy) {
      return {
        cby: 3200,
        loop: !0,
        oyy: {
          Root: {
            timeline: [0, .5, 1].map((yb => ({
              timeFraction: yb,
              position: {
                Kyy: "catmull-rom-spline",
                point: [0, .5 === yb ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((yb => ({
              timeFraction: yb,
              rotation: {
                Kyy: "catmull-rom-spline",
                point: [0, .25 === yb ? .12 : .75 === yb ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: fy(yb, Wy)
          },
          ArmRightMesh: {
            timeline: fy(bb, -Wy)
          }
        }
      }
    }
    const cb = Zy([0, 0, 0], [0, 0, 0], .07),
      Py = (0, hy.e)((0, Uy.d)(cb), "mobIdle"),
      oy = Zy([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      By = Zy([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Ky = (0, hy.e)((0, Uy.d)(oy), "gunReady"),
      ey = (0, hy.e)((0, Uy.d)(By), "gunAimed")
  },
  37302: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      f: () => fy
    });
    const Uy = new WeakMap;

    function hy(yb, bb) {
      return Uy.set(yb, bb), yb
    }

    function fy(yb) {
      var bb;
      return null !== (bb = Uy.get(yb)) && void 0 !== bb ? bb : null
    }
  },
  35580: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      f: () => cb
    });
    const Uy = {
      yaw: .61 * Math.PI,
      pitch: Math.PI / 2.05,
      radius: 30
    };

    function hy(yb, bb) {
      yb instanceof Promise ? yb.then(bb).catch((yb => {
        console.error("Couldn't open the preview", yb)
      })) : bb(yb)
    }
    class fy {
      constructor(yb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, hy(yb, (yb => {
          this.closed ? yb.close() : (this.opened = yb, null !== this.size && yb.resize(this.size.width, this.size.height), null !== this.view && yb.show(this.view))
        }))
      }
      show(yb) {
        var bb;
        this.view = yb, null === (bb = this.opened) || void 0 === bb || bb.show(yb)
      }
      resize(yb, bb) {
        var Wy;
        this.size = {
          width: yb,
          height: bb
        }, null === (Wy = this.opened) || void 0 === Wy || Wy.resize(yb, bb)
      }
      close() {
        var yb;
        this.closed = !0, null === (yb = this.opened) || void 0 === yb || yb.close(), this.opened = null
      }
    }
    class Zy {
      constructor(yb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(yb).then((yb => yb.ready)), hy(yb, (yb => {
          this.closed ? yb.close() : (this.opened = yb, null !== this.size && yb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var yb, bb;
        return null !== (yb = null === (bb = this.opened) || void 0 === bb ? void 0 : bb.isReady()) && void 0 !== yb && yb
      }
      setCosmetic(yb, bb) {
        var Wy;
        null === (Wy = this.opened) || void 0 === Wy || Wy.setCosmetic(yb, bb)
      }
      playEmote(yb) {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.playEmote(yb)
      }
      resetCamera() {
        var yb;
        null === (yb = this.opened) || void 0 === yb || yb.resetCamera()
      }
      async untilDrawn(yb) {
        var bb;
        await this.ready, await (null === (bb = this.opened) || void 0 === bb ? void 0 : bb.untilDrawn(yb))
      }
      resize(yb, bb) {
        var Wy;
        this.size = {
          width: yb,
          height: bb
        }, null === (Wy = this.opened) || void 0 === Wy || Wy.resize(yb, bb)
      }
      close() {
        var yb;
        this.closed = !0, null === (yb = this.opened) || void 0 === yb || yb.close(), this.opened = null
      }
    }
    const cb = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(yb) {
        this.host = yb
      }
      setDefaultHost(yb) {
        this.makeDefault = yb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(yb) {
        return new fy(this.current().openMob(yb))
      }
      openPet(yb) {
        return new fy(this.current().openPet(yb))
      }
      openMobLineup(yb) {
        return new fy(this.current().openMobLineup(yb))
      }
      openCharacter(yb) {
        return new Zy(this.current().openCharacter(yb))
      }
    }
  },
  35578: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy.e,
      f: () => Uy.f
    });
    var Uy = Wy(35580);
    class hy {
      constructor(yb) {
        this.load = yb, this.loaded = null, this.loading = null
      }
      run(yb) {
        return null !== this.loaded ? yb(this.loaded) : (this.loading ??= this.load().then((yb => (this.loaded = yb, yb)), (yb => {
          throw this.loading = null, yb
        })), this.loading.then(yb))
      }
    }
    class fy {
      constructor() {
        this.mobScene = new hy((() => Promise.all([Wy.e(214), Wy.e(213), Wy.e(233), Wy.e(234), Wy.e(66), Wy.e(65), Wy.e(231), Wy.e(64), Wy.e(241), Wy.e(235), Wy.e(240), Wy.e(238), Wy.e(230), Wy.e(205), Wy.e(269), Wy.e(210), Wy.e(223), Wy.e(236), Wy.e(239), Wy.e(126), Wy.e(182), Wy.e(206), Wy.e(221), Wy.e(204), Wy.e(104), Wy.e(102), Wy.e(270), Wy.e(146)]).then((() => Wy(39662))))), this.characterScene = new hy((() => Promise.all([Wy.e(214), Wy.e(213), Wy.e(233), Wy.e(234), Wy.e(66), Wy.e(65), Wy.e(231), Wy.e(64), Wy.e(241), Wy.e(235), Wy.e(240), Wy.e(238), Wy.e(230), Wy.e(205), Wy.e(269), Wy.e(210), Wy.e(223), Wy.e(236), Wy.e(239), Wy.e(126), Wy.e(182), Wy.e(206), Wy.e(221), Wy.e(204), Wy.e(104), Wy.e(102), Wy.e(270), Wy.e(145)]).then((() => Wy(39743)))))
      }
      openMob(yb) {
        return this.mobScene.run((bb => bb.openMobPreview(yb)))
      }
      openPet(yb) {
        return this.mobScene.run((bb => bb.openPetPreview(yb)))
      }
      openMobLineup(yb) {
        return this.mobScene.run((bb => bb.openMobLineupPreview(yb)))
      }
      openCharacter(yb) {
        return this.characterScene.run((bb => bb.openCharacterPreview(yb)))
      }
    }
    Uy.f.setDefaultHost((() => new fy))
  },
  40234: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      FrontlineMvpLineup: () => Ky
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(35578),
      cb = Wy(39982),
      Py = Wy(39973),
      oy = Wy(952);

    function By(yb) {
      return Zy.f.openMobLineup(yb)
    }
    const Ky = (0, Uy.memo)((function(yb) {
      let {
        players: bb,
        className: Wy
      } = yb;
      const hy = (0, Uy.useRef)(null),
        Zy = (0, Uy.useMemo)((() => bb.map((yb => {
          let {
            cosmetics: bb,
            size: Wy,
            heldGun: Uy
          } = yb;
          return {
            cosmetics: bb,
            size: Wy,
            OJ: Uy.name,
            animation: Uy.aimed ? cb.b : cb.c
          }
        }))), [bb]),
        Ky = function(yb) {
          const [bb, Wy] = (0, Uy.useState)([]);
          return (0, Uy.useEffect)((() => {
            Wy(yb.map((() => !1)));
            const bb = yb.map(((yb, bb) => {
              let {
                showAfterMs: Uy
              } = yb;
              return window.setTimeout((() => {
                Wy((yb => yb.map(((yb, Wy) => yb || Wy === bb))))
              }), Uy)
            }));
            return () => {
              for (const yb of bb) window.clearTimeout(yb)
            }
          }), [yb]), bb
        }(bb),
        ey = (0, Uy.useMemo)((() => ({
          figures: Zy,
          shown: Ky
        })), [Zy, Ky]);
      return (0, Py.d)(hy, By, ey), (0, oy.jsx)("div", {
        className: fy()("MobPreview", Wy),
        ref: hy
      })
    }))
  },
  36237: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      d: () => Zy
    });
    var Uy = Wy(36235),
      hy = Wy(258),
      fy = Wy(1541);

    function Zy(yb) {
      if ("cby" in yb) return Jy.createAnimationScript(yb);
      return new oy(yb).createAnimationScript()
    }

    function cb(yb, bb, Wy, hy) {
      const fy = yb.cby <= 0 ? 1 : bb + Wy * Math.max(0, hy) / yb.cby;
      return yb.Pyy === Uy.k.LoopOnLastFrame ? fy % 1 : yb.Pyy === Uy.k.NoLoop && fy >= 1 ? null : Math.min(1, fy)
    }
    class Py {
      createAnimationScript(yb) {
        const {
          cby: bb,
          loop: Wy,
          oyy: Uy
        } = yb;
        return {
          cby: Math.round(bb),
          Pyy: this.createLoopMode(null !== Wy && void 0 !== Wy && Wy),
          oyy: this.createNodeSkeletonAnimationScript(null !== Uy && void 0 !== Uy ? Uy : null)
        }
      }
      createLoopMode(yb) {
        switch (yb) {
          case !1:
            return Uy.k.NoLoop;
          case !0:
            return Uy.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Uy.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${yb}`)
      }
      createNodeSkeletonAnimationScript(yb) {
        if (null === yb) return null;
        const bb = {};
        for (const Wy in yb) {
          const Uy = yb[Wy];
          bb[Wy] = this.createNodeAnimationScript(Uy)
        }
        return bb
      }
      createNodeAnimationScript(yb) {
        const {
          timeline: bb
        } = yb, Wy = bb.filter((yb => Number.isFinite(yb.timeFraction)));
        return Wy.sort(((yb, bb) => yb.timeFraction - bb.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Wy, "rotation", ey),
          position: this.createTimelineFromKeyframes(Wy, "position", sy)
        }
      }
      createTimelineFromKeyframes(yb, bb, Wy) {
        const Uy = [];
        for (const Py of yb) {
          const yb = Py[bb];
          if (yb) {
            const bb = this.createAnimationFrameWithoutPrecomputes(Py.timeFraction, yb);
            By(bb) && Uy.push(bb)
          }
        }
        const hy = [];
        for (let Py = 0; Py < Uy.length; Py++) {
          var fy, Zy, cb;
          const yb = Uy[Py],
            bb = null !== (fy = Uy[Py - 1]) && void 0 !== fy ? fy : yb,
            oy = null !== (Zy = Uy[Py + 1]) && void 0 !== Zy ? Zy : yb,
            By = null !== (cb = Uy[Py + 2]) && void 0 !== cb ? cb : oy;
          hy.push({
            ...yb,
            ...Wy(bb.post, bb.timeFraction, yb.post, yb.timeFraction, oy.pre, oy.timeFraction, By.pre, By.timeFraction)
          })
        }
        return hy
      }
      createAnimationFrameWithoutPrecomputes(yb, bb) {
        let Wy, Uy, hy = null;
        var fy;
        if ("object" === typeof bb && "point" in bb) hy = null !== (fy = bb.Kyy) && void 0 !== fy ? fy : null, Wy = bb.point, Uy = bb.point;
        else if ("object" === typeof bb && "pre" in bb) {
          var Zy;
          hy = null !== (Zy = bb.Kyy) && void 0 !== Zy ? Zy : null, Wy = bb.pre, Uy = bb.post
        } else Wy = bb, Uy = bb;
        return {
          timeFraction: yb,
          Kyy: this.createLerpMode(hy),
          pre: Wy,
          post: Uy
        }
      }
      createLerpMode(yb) {
        return null === yb ? Uy.i.Linear : Py.LERP_MODE_SCHEMA_MAPPING[yb]
      }
    }
    Py.LERP_MODE_SCHEMA_MAPPING = {
      linear: Uy.i.Linear,
      "catmull-rom-spline": Uy.i.CatmullRomSpline
    };
    class oy {
      constructor(yb) {
        this.animationSchema = yb
      }
      createAnimationScript() {
        const {
          animation_length: yb,
          loop: bb,
          bones: Wy
        } = this.animationSchema;
        return {
          cby: Math.round(1e3 * yb),
          Pyy: this.createLoopMode(null !== bb && void 0 !== bb && bb),
          oyy: this.createNodeSkeletonAnimationScript(null !== Wy && void 0 !== Wy ? Wy : null)
        }
      }
      createLoopMode(yb) {
        switch (yb) {
          case !1:
            return Uy.k.NoLoop;
          case !0:
            return Uy.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Uy.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${yb}`)
      }
      createNodeSkeletonAnimationScript(yb) {
        if (null === yb) return null;
        const bb = {};
        for (const Wy in yb) {
          const Uy = yb[Wy];
          bb[Wy] = this.createNodeAnimationScript(Uy)
        }
        return bb
      }
      createNodeAnimationScript(yb) {
        const {
          rotation: bb,
          position: Wy
        } = yb;
        return {
          rotation: this.createAnimationTimeline(null !== bb && void 0 !== bb ? bb : null, Ey, ey, !0),
          position: this.createAnimationTimeline(null !== Wy && void 0 !== Wy ? Wy : null, mb, sy, !1)
        }
      }
      createAnimationTimeline(yb, bb, Wy, Uy) {
        if (null === yb) return [];
        if (Array.isArray(yb)) {
          yb = {
            "0.0": yb
          }
        }
        const hy = Object.entries(yb).map((yb => {
          let [Wy, Uy] = yb;
          const hy = Number(Wy) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(hy, Uy, bb)
        })).filter(By);
        hy.sort(((yb, bb) => yb.timeFraction - bb.timeFraction)), Uy && function(yb) {
          for (let bb = 1; bb < yb.length; bb++) {
            const Wy = yb[bb - 1].post,
              Uy = yb[bb],
              hy = Cy(Uy.pre),
              fy = Cy(Uy.post),
              Zy = Vy(Wy, Uy.pre);
            Vy(Wy, hy) < Zy && (yb[bb] = {
              ...Uy,
              pre: hy,
              post: fy
            })
          }
        }(hy);
        const fy = [];
        for (let oy = 0; oy < hy.length; oy++) {
          var Zy, cb, Py;
          const yb = hy[oy],
            bb = null !== (Zy = hy[oy - 1]) && void 0 !== Zy ? Zy : yb,
            Uy = null !== (cb = hy[oy + 1]) && void 0 !== cb ? cb : yb,
            By = null !== (Py = hy[oy + 2]) && void 0 !== Py ? Py : Uy;
          fy.push({
            ...yb,
            ...Wy(bb.post, bb.timeFraction, yb.post, yb.timeFraction, Uy.pre, Uy.timeFraction, By.pre, By.timeFraction)
          })
        }
        return fy
      }
      createAnimationFrameWithoutPrecomputes(yb, bb, Wy) {
        let Uy, hy, fy = null;
        if ("object" === typeof bb && "post" in bb) {
          var Zy;
          fy = null !== (Zy = bb.lerp_mode) && void 0 !== Zy ? Zy : null, hy = Sy(bb.post, Wy), Uy = bb.pre ? Sy(bb.pre, Wy) : hy
        } else {
          const yb = Sy(bb, Wy);
          hy = yb, Uy = yb
        }
        return {
          timeFraction: yb,
          Kyy: this.createLerpMode(fy),
          pre: Uy,
          post: hy
        }
      }
      createLerpMode(yb) {
        return null === yb ? Uy.i.Linear : oy.LERP_MODE_SCHEMA_MAPPING[yb]
      }
    }

    function By(yb) {
      return Number.isFinite(yb.timeFraction) && Ky(yb.pre) && Ky(yb.post)
    }

    function Ky(yb) {
      return Number.isFinite(yb[0]) && Number.isFinite(yb[1]) && Number.isFinite(yb[2])
    }

    function ey(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
      const Py = fy - bb,
        oy = fy - Uy,
        By = cb - Uy,
        Ky = [null, null, null];
      for (let ey = 0; ey < Ky.length; ey++) Ky[ey] = qb(yb[ey], Wy[ey], hy[ey], Zy[ey], Py, By);
      return {
        eyy: oy,
        qby: Ky
      }
    }

    function qb(yb, bb, Wy, Uy, fy, Zy) {
      return {
        Syy: hy.c.computeShortestRotation(yb, Wy) / fy,
        Eyy: hy.c.computeShortestRotation(bb, Uy) / Zy,
        delta: hy.c.computeShortestRotation(bb, Wy)
      }
    }

    function sy(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
      const Py = fy - bb,
        oy = fy - Uy,
        By = cb - Uy,
        Ky = [null, null, null];
      for (let ey = 0; ey < Ky.length; ey++) Ky[ey] = {
        Syy: (hy[ey] - yb[ey]) / Py,
        Eyy: (Zy[ey] - Wy[ey]) / By,
        delta: hy[ey] - Wy[ey]
      };
      return {
        eyy: oy,
        qby: Ky
      }
    }

    function Sy(yb, bb) {
      return null === bb ? yb : bb(yb)
    }

    function Ey(yb) {
      const [bb, Wy, Uy] = yb, Zy = -(0, fy.j)(bb), cb = -(0, fy.j)(Wy), Py = (0, fy.j)(Uy), oy = hy.c.quaternionFromEulerZYX(Zy, cb, Py);
      return hy.c.eulerYXZFromQuaternion(oy)
    }
    oy.LERP_MODE_SCHEMA_MAPPING = {
      linear: Uy.i.Linear,
      catmullrom: Uy.i.CatmullRomSpline
    };
    const ly = 1 / 16;

    function mb(yb) {
      return [-yb[0] * ly, yb[1] * ly, yb[2] * ly]
    }

    function Cy(yb) {
      const [bb, Wy, Uy] = yb;
      return [bb >= 0 ? Math.PI - bb : -Math.PI - bb, Ty(Wy + Math.PI), Ty(Uy + Math.PI)]
    }

    function Ty(yb) {
      return hy.c.mod(yb + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Vy(yb, bb) {
      return Math.abs(hy.c.computeShortestRotation(yb[0], bb[0])) + Math.abs(hy.c.computeShortestRotation(yb[1], bb[1])) + Math.abs(hy.c.computeShortestRotation(yb[2], bb[2]))
    }
    const Jy = new Py
  },
  36235: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      h: () => fy,
      i: () => Uy,
      k: () => hy
    });
    let Uy = function(yb) {
        return yb[yb.Linear = 0] = "Linear", yb[yb.CatmullRomSpline = 1] = "CatmullRomSpline", yb
      }({}),
      hy = function(yb) {
        return yb[yb.NoLoop = 0] = "NoLoop", yb[yb.LoopOnLastFrame = 1] = "LoopOnLastFrame", yb[yb.HoldOnLastFrame = 2] = "HoldOnLastFrame", yb
      }({}),
      fy = function(yb) {
        return yb[yb.Movement = 0] = "Movement", yb[yb.Action = 1] = "Action", yb[yb.Emote = 2] = "Emote", yb[yb.Custom = 3] = "Custom", yb
      }({}),
      Zy = function(yb) {
        return yb[yb.Start = 0] = "Start", yb[yb.Stop = 1] = "Stop", yb
      }({})
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);