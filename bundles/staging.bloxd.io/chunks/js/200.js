export const id = 200;
export const ids = [200];
export const modules = {
  41560: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      MobPreview: () => pm
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(41564),
      wm = fm(34319),
      Dm = fm(41573),
      im = fm(1135);

    function Rm(mm) {
      return wm.j.openMob(mm)
    }
    const pm = (0, hm.memo)((function(mm) {
      let {
        mobType: Tm,
        variation: fm = null,
        animation: Am = Dm.g,
        className: wm
      } = mm;
      const pm = (0, hm.useRef)(null),
        Em = (0, hm.useMemo)((() => ({
          mobType: Tm,
          variation: fm,
          animation: Am
        })), [Tm, fm, Am]);
      return (0, xm.c)(pm, Rm, Em), (0, im.jsx)("div", {
        className: am()("MobPreview", wm),
        ref: pm
      })
    }))
  },
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
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);