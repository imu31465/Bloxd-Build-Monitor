export const id = 199;
export const ids = [199];
export const modules = {
  41564: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(59),
      Am = fm(2743);

    function am(mm, Tm, fm) {
      const am = (0, hm.useRef)(null),
        {
          width: xm,
          height: wm
        } = (0, Am.d)(mm);
      (0, hm.useEffect)((() => {
        const fm = Tm(mm.current);
        return am.current = fm, () => {
          fm.close(), am.current = null
        }
      }), [mm, Tm]), (0, hm.useEffect)((() => {
        xm <= 0 || wm <= 0 || am.current.resize(xm, wm)
      }), [xm, wm]), (0, hm.useEffect)((() => {
        am.current.show(fm)
      }), [fm])
    }
  },
  41573: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Em,
      f: () => pm,
      g: () => Dm
    });
    var hm = fm(37243),
      Am = fm(38730);

    function am(mm, Tm) {
      let [fm, hm, Am] = mm;
      return [0, .5, 1].map((mm => ({
        timeFraction: mm,
        rotation: {
          qa: "catmull-rom-spline",
          point: [fm, hm, Am + (.5 === mm ? Tm : 0)]
        }
      })))
    }

    function xm(mm, Tm, fm) {
      return {
        Ra: 3200,
        loop: !0,
        oa: {
          Root: {
            timeline: [0, .5, 1].map((mm => ({
              timeFraction: mm,
              position: {
                qa: "catmull-rom-spline",
                point: [0, .5 === mm ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((mm => ({
              timeFraction: mm,
              rotation: {
                qa: "catmull-rom-spline",
                point: [0, .25 === mm ? .12 : .75 === mm ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: am(mm, fm)
          },
          ArmRightMesh: {
            timeline: am(Tm, -fm)
          }
        }
      }
    }
    const wm = xm([0, 0, 0], [0, 0, 0], .07),
      Dm = (0, Am.e)((0, hm.c)(wm), "mobIdle"),
      im = xm([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Rm = xm([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      pm = (0, Am.e)((0, hm.c)(im), "gunReady"),
      Em = (0, Am.e)((0, hm.c)(Rm), "gunAimed")
  },
  38730: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am
    });
    const hm = new WeakMap;

    function Am(mm, Tm) {
      return hm.set(mm, Tm), mm
    }

    function am(mm) {
      var Tm;
      return null !== (Tm = hm.get(mm)) && void 0 !== Tm ? Tm : null
    }
  },
  34322: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      e: () => Am,
      h: () => Rm
    });
    var hm = fm(1572);

    function Am(mm) {
      var Tm;
      return {
        ...xm.store,
        yaw: xm.store.yaw + (null !== (Tm = hm.e[mm].previewYaw) && void 0 !== Tm ? Tm : 0)
      }
    }
    const am = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      xm = {
        player: am,
        store: {
          ...am,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function wm(mm, Tm) {
      mm instanceof Promise ? mm.then(Tm).catch((mm => {
        console.error("Couldn't open the preview", mm)
      })) : Tm(mm)
    }
    class Dm {
      constructor(mm) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, wm(mm, (mm => {
          this.closed ? mm.close() : (this.opened = mm, null !== this.size && mm.resize(this.size.width, this.size.height), null !== this.view && mm.show(this.view))
        }))
      }
      show(mm) {
        var Tm;
        this.view = mm, null === (Tm = this.opened) || void 0 === Tm || Tm.show(mm)
      }
      resize(mm, Tm) {
        var fm;
        this.size = {
          width: mm,
          height: Tm
        }, null === (fm = this.opened) || void 0 === fm || fm.resize(mm, Tm)
      }
      close() {
        var mm;
        this.closed = !0, null === (mm = this.opened) || void 0 === mm || mm.close(), this.opened = null
      }
    }
    class im {
      constructor(mm) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(mm).then((mm => mm.ready)), wm(mm, (mm => {
          this.closed ? mm.close() : (this.opened = mm, null !== this.size && mm.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.opened) || void 0 === Tm ? void 0 : Tm.isReady()) && void 0 !== mm && mm
      }
      setCosmetic(mm, Tm) {
        var fm;
        null === (fm = this.opened) || void 0 === fm || fm.setCosmetic(mm, Tm)
      }
      playEmote(mm) {
        var Tm;
        null === (Tm = this.opened) || void 0 === Tm || Tm.playEmote(mm)
      }
      setOrbit(mm) {
        var Tm;
        null === (Tm = this.opened) || void 0 === Tm || Tm.setOrbit(mm)
      }
      resetCamera() {
        var mm;
        null === (mm = this.opened) || void 0 === mm || mm.resetCamera()
      }
      async untilDrawn(mm) {
        var Tm;
        await this.ready, await (null === (Tm = this.opened) || void 0 === Tm ? void 0 : Tm.untilDrawn(mm))
      }
      resize(mm, Tm) {
        var fm;
        this.size = {
          width: mm,
          height: Tm
        }, null === (fm = this.opened) || void 0 === fm || fm.resize(mm, Tm)
      }
      close() {
        var mm;
        this.closed = !0, null === (mm = this.opened) || void 0 === mm || mm.close(), this.opened = null
      }
    }
    const Rm = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(mm) {
        this.host = mm
      }
      setDefaultHost(mm) {
        this.makeDefault = mm
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(mm) {
        return new Dm(this.current().openMob(mm))
      }
      openPet(mm) {
        return new Dm(this.current().openPet(mm))
      }
      openMobLineup(mm) {
        return new Dm(this.current().openMobLineup(mm))
      }
      openCharacter(mm, Tm) {
        return new im(this.current().openCharacter(mm, Tm))
      }
    }
  },
  34319: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm.c,
      f: () => hm.e,
      j: () => hm.h
    });
    var hm = fm(34322);
    class Am {
      constructor(mm) {
        this.load = mm, this.loaded = null, this.loading = null
      }
      run(mm) {
        return null !== this.loaded ? mm(this.loaded) : (this.loading ??= this.load().then((mm => (this.loaded = mm, mm)), (mm => {
          throw this.loading = null, mm
        })), this.loading.then(mm))
      }
    }
    class am {
      constructor() {
        this.mobScene = new Am((() => Promise.all([fm.e(72), fm.e(232), fm.e(231), fm.e(254), fm.e(96), fm.e(255), fm.e(75), fm.e(74), fm.e(252), fm.e(73), fm.e(262), fm.e(256), fm.e(261), fm.e(259), fm.e(251), fm.e(274), fm.e(228), fm.e(244), fm.e(257), fm.e(260), fm.e(77), fm.e(186), fm.e(222), fm.e(95), fm.e(225), fm.e(240), fm.e(120), fm.e(241), fm.e(76), fm.e(119), fm.e(246)]).then((() => fm(41140))))), this.characterScene = new Am((() => Promise.all([fm.e(72), fm.e(232), fm.e(231), fm.e(254), fm.e(96), fm.e(255), fm.e(75), fm.e(74), fm.e(252), fm.e(73), fm.e(262), fm.e(256), fm.e(261), fm.e(259), fm.e(251), fm.e(274), fm.e(228), fm.e(244), fm.e(257), fm.e(260), fm.e(77), fm.e(186), fm.e(222), fm.e(95), fm.e(225), fm.e(240), fm.e(120), fm.e(241), fm.e(76), fm.e(119), fm.e(245)]).then((() => fm(41223)))))
      }
      openMob(mm) {
        return this.mobScene.run((Tm => Tm.openMobPreview(mm)))
      }
      openPet(mm) {
        return this.mobScene.run((Tm => Tm.openPetPreview(mm)))
      }
      openMobLineup(mm) {
        return this.mobScene.run((Tm => Tm.openMobLineupPreview(mm)))
      }
      openCharacter(mm, Tm) {
        return this.characterScene.run((fm => fm.openCharacterPreview(mm, Tm)))
      }
    }
    hm.h.setDefaultHost((() => new am))
  },
  41775: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      FrontlineMvpLineup: () => pm
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(34319),
      wm = fm(41573),
      Dm = fm(41564),
      im = fm(1135);

    function Rm(mm) {
      return xm.j.openMobLineup(mm)
    }
    const pm = (0, hm.memo)((function(mm) {
      let {
        players: Tm,
        className: fm
      } = mm;
      const Am = (0, hm.useRef)(null),
        xm = (0, hm.useMemo)((() => Tm.map((mm => {
          let {
            cosmetics: Tm,
            size: fm,
            heldGun: hm
          } = mm;
          return {
            cosmetics: Tm,
            size: fm,
            zK: hm.name,
            animation: hm.aimed ? wm.c : wm.f
          }
        }))), [Tm]),
        pm = function(mm) {
          const [Tm, fm] = (0, hm.useState)([]);
          return (0, hm.useEffect)((() => {
            fm(mm.map((() => !1)));
            const Tm = mm.map(((mm, Tm) => {
              let {
                showAfterMs: hm
              } = mm;
              return window.setTimeout((() => {
                fm((mm => mm.map(((mm, fm) => mm || fm === Tm))))
              }), hm)
            }));
            return () => {
              for (const mm of Tm) window.clearTimeout(mm)
            }
          }), [mm]), Tm
        }(Tm),
        Em = (0, hm.useMemo)((() => ({
          figures: xm,
          shown: pm
        })), [xm, pm]);
      return (0, Dm.c)(Am, Rm, Em), (0, im.jsx)("div", {
        className: am()("MobPreview", fm),
        ref: Am
      })
    }))
  },
  37243: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      c: () => xm
    });
    var hm = fm(37233),
      Am = fm(354),
      am = fm(1877);

    function xm(mm) {
      if ("Ra" in mm) return nm.createAnimationScript(mm);
      return new im(mm).createAnimationScript()
    }

    function wm(mm, Tm, fm, Am) {
      const am = mm.Ra <= 0 ? 1 : Tm + fm * Math.max(0, Am) / mm.Ra;
      return mm.Ea === hm.k.LoopOnLastFrame ? am % 1 : mm.Ea === hm.k.NoLoop && am >= 1 ? null : Math.min(1, am)
    }
    class Dm {
      createAnimationScript(mm) {
        const {
          Ra: Tm,
          loop: fm,
          oa: hm
        } = mm;
        return {
          Ra: Math.round(Tm),
          Ea: this.createLoopMode(null !== fm && void 0 !== fm && fm),
          oa: this.createNodeSkeletonAnimationScript(null !== hm && void 0 !== hm ? hm : null)
        }
      }
      createLoopMode(mm) {
        switch (mm) {
          case !1:
            return hm.k.NoLoop;
          case !0:
            return hm.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return hm.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${mm}`)
      }
      createNodeSkeletonAnimationScript(mm) {
        if (null === mm) return null;
        const Tm = {};
        for (const fm in mm) {
          const hm = mm[fm];
          Tm[fm] = this.createNodeAnimationScript(hm)
        }
        return Tm
      }
      createNodeAnimationScript(mm) {
        const {
          timeline: Tm
        } = mm, fm = Tm.filter((mm => Number.isFinite(mm.timeFraction)));
        return fm.sort(((mm, Tm) => mm.timeFraction - Tm.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(fm, "rotation", Em),
          position: this.createTimelineFromKeyframes(fm, "position", Om)
        }
      }
      createTimelineFromKeyframes(mm, Tm, fm) {
        const hm = [];
        for (const Dm of mm) {
          const mm = Dm[Tm];
          if (mm) {
            const Tm = this.createAnimationFrameWithoutPrecomputes(Dm.timeFraction, mm);
            Rm(Tm) && hm.push(Tm)
          }
        }
        const Am = [];
        for (let Dm = 0; Dm < hm.length; Dm++) {
          var am, xm, wm;
          const mm = hm[Dm],
            Tm = null !== (am = hm[Dm - 1]) && void 0 !== am ? am : mm,
            im = null !== (xm = hm[Dm + 1]) && void 0 !== xm ? xm : mm,
            Rm = null !== (wm = hm[Dm + 2]) && void 0 !== wm ? wm : im;
          Am.push({
            ...mm,
            ...fm(Tm.post, Tm.timeFraction, mm.post, mm.timeFraction, im.pre, im.timeFraction, Rm.pre, Rm.timeFraction)
          })
        }
        return Am
      }
      createAnimationFrameWithoutPrecomputes(mm, Tm) {
        let fm, hm, Am = null;
        var am;
        if ("object" === typeof Tm && "point" in Tm) Am = null !== (am = Tm.qa) && void 0 !== am ? am : null, fm = Tm.point, hm = Tm.point;
        else if ("object" === typeof Tm && "pre" in Tm) {
          var xm;
          Am = null !== (xm = Tm.qa) && void 0 !== xm ? xm : null, fm = Tm.pre, hm = Tm.post
        } else fm = Tm, hm = Tm;
        return {
          timeFraction: mm,
          qa: this.createLerpMode(Am),
          pre: fm,
          post: hm
        }
      }
      createLerpMode(mm) {
        return null === mm ? hm.i.Linear : Dm.LERP_MODE_SCHEMA_MAPPING[mm]
      }
    }
    Dm.LERP_MODE_SCHEMA_MAPPING = {
      linear: hm.i.Linear,
      "catmull-rom-spline": hm.i.CatmullRomSpline
    };
    class im {
      constructor(mm) {
        this.animationSchema = mm
      }
      createAnimationScript() {
        const {
          animation_length: mm,
          loop: Tm,
          bones: fm
        } = this.animationSchema;
        return {
          Ra: Math.round(1e3 * mm),
          Ea: this.createLoopMode(null !== Tm && void 0 !== Tm && Tm),
          oa: this.createNodeSkeletonAnimationScript(null !== fm && void 0 !== fm ? fm : null)
        }
      }
      createLoopMode(mm) {
        switch (mm) {
          case !1:
            return hm.k.NoLoop;
          case !0:
            return hm.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return hm.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${mm}`)
      }
      createNodeSkeletonAnimationScript(mm) {
        if (null === mm) return null;
        const Tm = {};
        for (const fm in mm) {
          const hm = mm[fm];
          Tm[fm] = this.createNodeAnimationScript(hm)
        }
        return Tm
      }
      createNodeAnimationScript(mm) {
        const {
          rotation: Tm,
          position: fm
        } = mm;
        return {
          rotation: this.createAnimationTimeline(null !== Tm && void 0 !== Tm ? Tm : null, qm, Em, !0),
          position: this.createAnimationTimeline(null !== fm && void 0 !== fm ? fm : null, Vm, Om, !1)
        }
      }
      createAnimationTimeline(mm, Tm, fm, hm) {
        if (null === mm) return [];
        if (Array.isArray(mm)) {
          mm = {
            "0.0": mm
          }
        }
        const Am = Object.entries(mm).map((mm => {
          let [fm, hm] = mm;
          const Am = Number(fm) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Am, hm, Tm)
        })).filter(Rm);
        Am.sort(((mm, Tm) => mm.timeFraction - Tm.timeFraction)), hm && function(mm) {
          for (let Tm = 1; Tm < mm.length; Tm++) {
            const fm = mm[Tm - 1].post,
              hm = mm[Tm],
              Am = Im(hm.pre),
              am = Im(hm.post),
              xm = Qm(fm, hm.pre);
            Qm(fm, Am) < xm && (mm[Tm] = {
              ...hm,
              pre: Am,
              post: am
            })
          }
        }(Am);
        const am = [];
        for (let im = 0; im < Am.length; im++) {
          var xm, wm, Dm;
          const mm = Am[im],
            Tm = null !== (xm = Am[im - 1]) && void 0 !== xm ? xm : mm,
            hm = null !== (wm = Am[im + 1]) && void 0 !== wm ? wm : mm,
            Rm = null !== (Dm = Am[im + 2]) && void 0 !== Dm ? Dm : hm;
          am.push({
            ...mm,
            ...fm(Tm.post, Tm.timeFraction, mm.post, mm.timeFraction, hm.pre, hm.timeFraction, Rm.pre, Rm.timeFraction)
          })
        }
        return am
      }
      createAnimationFrameWithoutPrecomputes(mm, Tm, fm) {
        let hm, Am, am = null;
        if ("object" === typeof Tm && "post" in Tm) {
          var xm;
          am = null !== (xm = Tm.lerp_mode) && void 0 !== xm ? xm : null, Am = Ym(Tm.post, fm), hm = Tm.pre ? Ym(Tm.pre, fm) : Am
        } else {
          const mm = Ym(Tm, fm);
          Am = mm, hm = mm
        }
        return {
          timeFraction: mm,
          qa: this.createLerpMode(am),
          pre: hm,
          post: Am
        }
      }
      createLerpMode(mm) {
        return null === mm ? hm.i.Linear : im.LERP_MODE_SCHEMA_MAPPING[mm]
      }
    }

    function Rm(mm) {
      return Number.isFinite(mm.timeFraction) && pm(mm.pre) && pm(mm.post)
    }

    function pm(mm) {
      return Number.isFinite(mm[0]) && Number.isFinite(mm[1]) && Number.isFinite(mm[2])
    }

    function Em(mm, Tm, fm, hm, Am, am, xm, wm) {
      const Dm = am - Tm,
        im = am - hm,
        Rm = wm - hm,
        pm = [null, null, null];
      for (let Em = 0; Em < pm.length; Em++) pm[Em] = om(mm[Em], fm[Em], Am[Em], xm[Em], Dm, Rm);
      return {
        ja: im,
        Va: pm
      }
    }

    function om(mm, Tm, fm, hm, am, xm) {
      return {
        Ka: Am.c.computeShortestRotation(mm, fm) / am,
        Qa: Am.c.computeShortestRotation(Tm, hm) / xm,
        delta: Am.c.computeShortestRotation(Tm, fm)
      }
    }

    function Om(mm, Tm, fm, hm, Am, am, xm, wm) {
      const Dm = am - Tm,
        im = am - hm,
        Rm = wm - hm,
        pm = [null, null, null];
      for (let Em = 0; Em < pm.length; Em++) pm[Em] = {
        Ka: (Am[Em] - mm[Em]) / Dm,
        Qa: (xm[Em] - fm[Em]) / Rm,
        delta: Am[Em] - fm[Em]
      };
      return {
        ja: im,
        Va: pm
      }
    }

    function Ym(mm, Tm) {
      return null === Tm ? mm : Tm(mm)
    }

    function qm(mm) {
      const [Tm, fm, hm] = mm, xm = -(0, am.j)(Tm), wm = -(0, am.j)(fm), Dm = (0, am.j)(hm), im = Am.c.quaternionFromEulerZYX(xm, wm, Dm);
      return Am.c.eulerYXZFromQuaternion(im)
    }
    im.LERP_MODE_SCHEMA_MAPPING = {
      linear: hm.i.Linear,
      catmullrom: hm.i.CatmullRomSpline
    };
    const jm = 1 / 16;

    function Vm(mm) {
      return [-mm[0] * jm, mm[1] * jm, mm[2] * jm]
    }

    function Im(mm) {
      const [Tm, fm, hm] = mm;
      return [Tm >= 0 ? Math.PI - Tm : -Math.PI - Tm, Km(fm + Math.PI), Km(hm + Math.PI)]
    }

    function Km(mm) {
      return Am.c.mod(mm + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Qm(mm, Tm) {
      return Math.abs(Am.c.computeShortestRotation(mm[0], Tm[0])) + Math.abs(Am.c.computeShortestRotation(mm[1], Tm[1])) + Math.abs(Am.c.computeShortestRotation(mm[2], Tm[2]))
    }
    const nm = new Dm
  },
  37233: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      h: () => am,
      i: () => hm,
      k: () => Am
    });
    let hm = function(mm) {
        return mm[mm.Linear = 0] = "Linear", mm[mm.CatmullRomSpline = 1] = "CatmullRomSpline", mm
      }({}),
      Am = function(mm) {
        return mm[mm.NoLoop = 0] = "NoLoop", mm[mm.LoopOnLastFrame = 1] = "LoopOnLastFrame", mm[mm.HoldOnLastFrame = 2] = "HoldOnLastFrame", mm
      }({}),
      am = function(mm) {
        return mm[mm.Movement = 0] = "Movement", mm[mm.Action = 1] = "Action", mm[mm.Emote = 2] = "Emote", mm[mm.Custom = 3] = "Custom", mm
      }({}),
      xm = function(mm) {
        return mm[mm.Start = 0] = "Start", mm[mm.Stop = 1] = "Stop", mm
      }({})
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);