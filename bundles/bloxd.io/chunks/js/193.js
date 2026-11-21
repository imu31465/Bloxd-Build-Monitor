export const id = 193;
export const ids = [193];
export const modules = {
  41485: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      MobPreview: () => od
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(41493),
      Zd = kd(9272),
      gd = kd(41498),
      Cd = kd(1103);

    function Kd(dd) {
      return Zd.j.openMob(dd)
    }
    const od = (0, pd.memo)((function(dd) {
      let {
        mobType: Jd,
        variation: kd = null,
        animation: Nd = gd.h,
        className: Zd
      } = dd;
      const od = (0, pd.useRef)(null),
        ld = (0, pd.useMemo)((() => ({
          mobType: Jd,
          variation: kd,
          animation: Nd
        })), [Jd, kd, Nd]);
      return (0, Pd.b)(od, Kd, ld), (0, Cd.jsx)("div", {
        className: Wd()("MobPreview", Zd),
        ref: od
      })
    }))
  },
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
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);