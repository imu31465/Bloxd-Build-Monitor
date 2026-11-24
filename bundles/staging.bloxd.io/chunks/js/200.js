export const id = 200;
export const ids = [200];
export const modules = {
  41520: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      MobPreview: () => tk
    });
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(41529),
      lk = Ik(34218),
      ak = Ik(41534),
      qk = Ik(1096);

    function Lk(kk) {
      return lk.h.openMob(kk)
    }
    const tk = (0, Xk.memo)((function(kk) {
      let {
        mobType: Fk,
        variation: Ik = null,
        animation: Tk = ak.g,
        className: lk
      } = kk;
      const tk = (0, Xk.useRef)(null),
        Zk = (0, Xk.useMemo)((() => ({
          mobType: Fk,
          variation: Ik,
          animation: Tk
        })), [Fk, Ik, Tk]);
      return (0, yk.d)(tk, Lk, Zk), (0, qk.jsx)("div", {
        className: ik()("MobPreview", lk),
        ref: tk
      })
    }))
  },
  41529: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik
    });
    var Xk = Ik(58),
      Tk = Ik(2679);

    function ik(kk, Fk, Ik) {
      const ik = (0, Xk.useRef)(null),
        {
          width: yk,
          height: lk
        } = (0, Tk.b)(kk);
      (0, Xk.useEffect)((() => {
        const Ik = Fk(kk.current);
        return ik.current = Ik, () => {
          Ik.close(), ik.current = null
        }
      }), [kk, Fk]), (0, Xk.useEffect)((() => {
        yk <= 0 || lk <= 0 || ik.current.resize(yk, lk)
      }), [yk, lk]), (0, Xk.useEffect)((() => {
        ik.current.show(Ik)
      }), [Ik])
    }
  },
  41534: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Zk,
      e: () => tk,
      g: () => ak
    });
    var Xk = Ik(37224),
      Tk = Ik(38621);

    function ik(kk, Fk) {
      let [Ik, Xk, Tk] = kk;
      return [0, .5, 1].map((kk => ({
        timeFraction: kk,
        rotation: {
          ii: "catmull-rom-spline",
          point: [Ik, Xk, Tk + (.5 === kk ? Fk : 0)]
        }
      })))
    }

    function yk(kk, Fk, Ik) {
      return {
        ki: 3200,
        loop: !0,
        Ii: {
          Root: {
            timeline: [0, .5, 1].map((kk => ({
              timeFraction: kk,
              position: {
                ii: "catmull-rom-spline",
                point: [0, .5 === kk ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((kk => ({
              timeFraction: kk,
              rotation: {
                ii: "catmull-rom-spline",
                point: [0, .25 === kk ? .12 : .75 === kk ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: ik(kk, Ik)
          },
          ArmRightMesh: {
            timeline: ik(Fk, -Ik)
          }
        }
      }
    }
    const lk = yk([0, 0, 0], [0, 0, 0], .07),
      ak = (0, Tk.d)((0, Xk.i)(lk), "mobIdle"),
      qk = yk([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Lk = yk([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      tk = (0, Tk.d)((0, Xk.i)(qk), "gunReady"),
      Zk = (0, Tk.d)((0, Xk.i)(Lk), "gunAimed")
  },
  34222: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      f: () => Tk,
      h: () => Lk
    });
    var Xk = Ik(1518);

    function Tk(kk) {
      var Fk;
      return {
        ...yk.store,
        yaw: yk.store.yaw + (null !== (Fk = Xk.c[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
      }
    }
    const ik = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yk = {
        player: ik,
        store: {
          ...ik,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function lk(kk, Fk) {
      kk instanceof Promise ? kk.then(Fk).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : Fk(kk)
    }
    class ak {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var Fk;
        this.view = kk, null === (Fk = this.opened) || void 0 === Fk || Fk.show(kk)
      }
      resize(kk, Fk) {
        var Ik;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Ik = this.opened) || void 0 === Ik || Ik.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class qk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), lk(kk, (kk => {
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
        var Ik;
        null === (Ik = this.opened) || void 0 === Ik || Ik.setCosmetic(kk, Fk)
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
        var Ik;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Ik = this.opened) || void 0 === Ik || Ik.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const Lk = new class {
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
        return new ak(this.current().openMob(kk))
      }
      openPet(kk) {
        return new ak(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new ak(this.current().openMobLineup(kk))
      }
      openCharacter(kk, Fk) {
        return new qk(this.current().openCharacter(kk, Fk))
      }
    }
  },
  34218: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.c,
      f: () => Xk.f,
      h: () => Xk.h
    });
    var Xk = Ik(34222);
    class Tk {
      constructor(kk) {
        this.load = kk, this.loaded = null, this.loading = null
      }
      run(kk) {
        return null !== this.loaded ? kk(this.loaded) : (this.loading ??= this.load().then((kk => (this.loaded = kk, kk)), (kk => {
          throw this.loading = null, kk
        })), this.loading.then(kk))
      }
    }
    class ik {
      constructor() {
        this.mobScene = new Tk((() => Promise.all([Ik.e(72), Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(96), Ik.e(255), Ik.e(75), Ik.e(74), Ik.e(252), Ik.e(73), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(274), Ik.e(228), Ik.e(244), Ik.e(257), Ik.e(260), Ik.e(77), Ik.e(186), Ik.e(222), Ik.e(95), Ik.e(225), Ik.e(240), Ik.e(120), Ik.e(241), Ik.e(76), Ik.e(119), Ik.e(246)]).then((() => Ik(41091))))), this.characterScene = new Tk((() => Promise.all([Ik.e(72), Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(96), Ik.e(255), Ik.e(75), Ik.e(74), Ik.e(252), Ik.e(73), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(274), Ik.e(228), Ik.e(244), Ik.e(257), Ik.e(260), Ik.e(77), Ik.e(186), Ik.e(222), Ik.e(95), Ik.e(225), Ik.e(240), Ik.e(120), Ik.e(241), Ik.e(76), Ik.e(119), Ik.e(245)]).then((() => Ik(41185)))))
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
        return this.characterScene.run((Ik => Ik.openCharacterPreview(kk, Fk)))
      }
    }
    Xk.h.setDefaultHost((() => new ik))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);