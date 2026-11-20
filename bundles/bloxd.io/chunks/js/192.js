export const id = 192;
export const ids = [192];
export const modules = {
  40816: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      MobPreview: () => Tv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(40823),
      pv = Pv(9044),
      dv = Pv(40828),
      Nv = Pv(1082);

    function lv(vv) {
      return pv.j.openMob(vv)
    }
    const Tv = (0, hv.memo)((function(vv) {
      let {
        mobType: zv,
        variation: Pv = null,
        animation: Sv = dv.k,
        className: pv
      } = vv;
      const Tv = (0, hv.useRef)(null),
        Wv = (0, hv.useMemo)((() => ({
          mobType: zv,
          variation: Pv,
          animation: Sv
        })), [zv, Pv, Sv]);
      return (0, gv.c)(Tv, lv, Wv), (0, Nv.jsx)("div", {
        className: ev()("MobPreview", pv),
        ref: Tv
      })
    }))
  },
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
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);