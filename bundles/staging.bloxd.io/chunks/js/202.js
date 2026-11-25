export const id = 202;
export const ids = [202];
export const modules = {
  41772: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(63),
      qt = Vt(2821);

    function Dt(tt, et, Vt) {
      const Dt = (0, Ot.useRef)(null),
        {
          width: mt,
          height: dt
        } = (0, qt.d)(tt);
      (0, Ot.useEffect)((() => {
        const Vt = et(tt.current);
        return Dt.current = Vt, () => {
          Vt.close(), Dt.current = null
        }
      }), [tt, et]), (0, Ot.useEffect)((() => {
        mt <= 0 || dt <= 0 || Dt.current.resize(mt, dt)
      }), [mt, dt]), (0, Ot.useEffect)((() => {
        Dt.current.show(Vt)
      }), [Vt])
    }
  },
  41778: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt,
      c: () => Qt,
      g: () => jt
    });
    var Ot = Vt(37403),
      qt = Vt(38855);

    function Dt(tt, et) {
      let [Vt, Ot, qt] = tt;
      return [0, .5, 1].map((tt => ({
        timeFraction: tt,
        rotation: {
          mq: "catmull-rom-spline",
          point: [Vt, Ot, qt + (.5 === tt ? et : 0)]
        }
      })))
    }

    function mt(tt, et, Vt) {
      return {
        eq: 3200,
        loop: !0,
        Oq: {
          Root: {
            timeline: [0, .5, 1].map((tt => ({
              timeFraction: tt,
              position: {
                mq: "catmull-rom-spline",
                point: [0, .5 === tt ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((tt => ({
              timeFraction: tt,
              rotation: {
                mq: "catmull-rom-spline",
                point: [0, .25 === tt ? .12 : .75 === tt ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Dt(tt, Vt)
          },
          ArmRightMesh: {
            timeline: Dt(et, -Vt)
          }
        }
      }
    }
    const dt = mt([0, 0, 0], [0, 0, 0], .07),
      jt = (0, qt.e)((0, Ot.e)(dt), "mobIdle"),
      Ht = mt([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Xt = mt([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Qt = (0, qt.e)((0, Ot.e)(Ht), "gunReady"),
      lt = (0, qt.e)((0, Ot.e)(Xt), "gunAimed")
  },
  38855: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      f: () => Dt
    });
    const Ot = new WeakMap;

    function qt(tt, et) {
      return Ot.set(tt, et), tt
    }

    function Dt(tt) {
      var et;
      return null !== (et = Ot.get(tt)) && void 0 !== et ? et : null
    }
  },
  34414: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt,
      e: () => qt,
      h: () => Xt
    });
    var Ot = Vt(1657);

    function qt(tt) {
      var et;
      return {
        ...mt.store,
        yaw: mt.store.yaw + (null !== (et = Ot.d[tt].previewYaw) && void 0 !== et ? et : 0)
      }
    }
    const Dt = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mt = {
        player: Dt,
        store: {
          ...Dt,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function dt(tt, et) {
      tt instanceof Promise ? tt.then(et).catch((tt => {
        console.error("Couldn't open the preview", tt)
      })) : et(tt)
    }
    class jt {
      constructor(tt) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, dt(tt, (tt => {
          this.closed ? tt.close() : (this.opened = tt, null !== this.size && tt.resize(this.size.width, this.size.height), null !== this.view && tt.show(this.view))
        }))
      }
      show(tt) {
        var et;
        this.view = tt, null === (et = this.opened) || void 0 === et || et.show(tt)
      }
      resize(tt, et) {
        var Vt;
        this.size = {
          width: tt,
          height: et
        }, null === (Vt = this.opened) || void 0 === Vt || Vt.resize(tt, et)
      }
      close() {
        var tt;
        this.closed = !0, null === (tt = this.opened) || void 0 === tt || tt.close(), this.opened = null
      }
    }
    class Ht {
      constructor(tt) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(tt).then((tt => tt.ready)), dt(tt, (tt => {
          this.closed ? tt.close() : (this.opened = tt, null !== this.size && tt.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var tt, et;
        return null !== (tt = null === (et = this.opened) || void 0 === et ? void 0 : et.isReady()) && void 0 !== tt && tt
      }
      setCosmetic(tt, et) {
        var Vt;
        null === (Vt = this.opened) || void 0 === Vt || Vt.setCosmetic(tt, et)
      }
      playEmote(tt) {
        var et;
        null === (et = this.opened) || void 0 === et || et.playEmote(tt)
      }
      setOrbit(tt) {
        var et;
        null === (et = this.opened) || void 0 === et || et.setOrbit(tt)
      }
      resetCamera() {
        var tt;
        null === (tt = this.opened) || void 0 === tt || tt.resetCamera()
      }
      async untilDrawn(tt) {
        var et;
        await this.ready, await (null === (et = this.opened) || void 0 === et ? void 0 : et.untilDrawn(tt))
      }
      resize(tt, et) {
        var Vt;
        this.size = {
          width: tt,
          height: et
        }, null === (Vt = this.opened) || void 0 === Vt || Vt.resize(tt, et)
      }
      close() {
        var tt;
        this.closed = !0, null === (tt = this.opened) || void 0 === tt || tt.close(), this.opened = null
      }
    }
    const Xt = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(tt) {
        this.host = tt
      }
      setDefaultHost(tt) {
        this.makeDefault = tt
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(tt) {
        return new jt(this.current().openMob(tt))
      }
      openPet(tt) {
        return new jt(this.current().openPet(tt))
      }
      openMobLineup(tt) {
        return new jt(this.current().openMobLineup(tt))
      }
      openCharacter(tt, et) {
        return new Ht(this.current().openCharacter(tt, et))
      }
    }
  },
  34412: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot.b,
      h: () => Ot.e,
      l: () => Ot.h
    });
    var Ot = Vt(34414);
    class qt {
      constructor(tt) {
        this.load = tt, this.loaded = null, this.loading = null
      }
      run(tt) {
        return null !== this.loaded ? tt(this.loaded) : (this.loading ??= this.load().then((tt => (this.loaded = tt, tt)), (tt => {
          throw this.loading = null, tt
        })), this.loading.then(tt))
      }
    }
    class Dt {
      constructor() {
        this.mobScene = new qt((() => Promise.all([Vt.e(73), Vt.e(237), Vt.e(236), Vt.e(258), Vt.e(98), Vt.e(259), Vt.e(76), Vt.e(75), Vt.e(256), Vt.e(74), Vt.e(266), Vt.e(260), Vt.e(265), Vt.e(263), Vt.e(255), Vt.e(279), Vt.e(233), Vt.e(249), Vt.e(261), Vt.e(264), Vt.e(78), Vt.e(188), Vt.e(227), Vt.e(97), Vt.e(239), Vt.e(230), Vt.e(246), Vt.e(121), Vt.e(247), Vt.e(77), Vt.e(251)]).then((() => Vt(41282))))), this.characterScene = new qt((() => Promise.all([Vt.e(73), Vt.e(237), Vt.e(236), Vt.e(258), Vt.e(98), Vt.e(259), Vt.e(76), Vt.e(75), Vt.e(256), Vt.e(74), Vt.e(266), Vt.e(260), Vt.e(265), Vt.e(263), Vt.e(255), Vt.e(279), Vt.e(233), Vt.e(249), Vt.e(261), Vt.e(264), Vt.e(78), Vt.e(188), Vt.e(227), Vt.e(97), Vt.e(239), Vt.e(230), Vt.e(246), Vt.e(121), Vt.e(247), Vt.e(77), Vt.e(250)]).then((() => Vt(41396)))))
      }
      openMob(tt) {
        return this.mobScene.run((et => et.openMobPreview(tt)))
      }
      openPet(tt) {
        return this.mobScene.run((et => et.openPetPreview(tt)))
      }
      openMobLineup(tt) {
        return this.mobScene.run((et => et.openMobLineupPreview(tt)))
      }
      openCharacter(tt, et) {
        return this.characterScene.run((Vt => Vt.openCharacterPreview(tt, et)))
      }
    }
    Ot.h.setDefaultHost((() => new Dt))
  },
  42021: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      FrontlineMvpLineup: () => Qt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(34412),
      dt = Vt(41778),
      jt = Vt(41772),
      Ht = Vt(1188);

    function Xt(tt) {
      return mt.l.openMobLineup(tt)
    }
    const Qt = (0, Ot.memo)((function(tt) {
      let {
        players: et,
        className: Vt
      } = tt;
      const qt = (0, Ot.useRef)(null),
        mt = (0, Ot.useMemo)((() => et.map((tt => {
          let {
            cosmetics: et,
            size: Vt,
            heldGun: Ot
          } = tt;
          return {
            cosmetics: et,
            size: Vt,
            LJ: Ot.name,
            animation: Ot.aimed ? dt.b : dt.c
          }
        }))), [et]),
        Qt = function(tt) {
          const [et, Vt] = (0, Ot.useState)([]);
          return (0, Ot.useEffect)((() => {
            Vt(tt.map((() => !1)));
            const et = tt.map(((tt, et) => {
              let {
                showAfterMs: Ot
              } = tt;
              return window.setTimeout((() => {
                Vt((tt => tt.map(((tt, Vt) => tt || Vt === et))))
              }), Ot)
            }));
            return () => {
              for (const tt of et) window.clearTimeout(tt)
            }
          }), [tt]), et
        }(et),
        lt = (0, Ot.useMemo)((() => ({
          figures: mt,
          shown: Qt
        })), [mt, Qt]);
      return (0, jt.b)(qt, Xt, lt), (0, Ht.jsx)("div", {
        className: Dt()("MobPreview", Vt),
        ref: qt
      })
    }))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);