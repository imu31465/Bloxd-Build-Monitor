export const id = 202;
export const ids = [202];
export const modules = {
  39965: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      MobPreview: () => Ky
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(39973),
      cb = Wy(35578),
      Py = Wy(39982),
      oy = Wy(952);

    function By(yb) {
      return cb.f.openMob(yb)
    }
    const Ky = (0, Uy.memo)((function(yb) {
      let {
        mobType: bb,
        variation: Wy = null,
        animation: hy = Py.d,
        className: cb
      } = yb;
      const Ky = (0, Uy.useRef)(null),
        ey = (0, Uy.useMemo)((() => ({
          mobType: bb,
          variation: Wy,
          animation: hy
        })), [bb, Wy, hy]);
      return (0, Zy.d)(Ky, By, ey), (0, oy.jsx)("div", {
        className: fy()("MobPreview", cb),
        ref: Ky
      })
    }))
  },
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
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);