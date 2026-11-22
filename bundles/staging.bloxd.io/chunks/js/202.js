export const id = 202;
export const ids = [202];
export const modules = {
  41082: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      MobPreview: () => Kk
    });
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(41088),
      rk = ik(33799),
      Pk = ik(41093),
      mk = ik(1066);

    function Mk(kk) {
      return rk.h.openMob(kk)
    }
    const Kk = (0, Dk.memo)((function(kk) {
      let {
        mobType: ek,
        variation: ik = null,
        animation: fk = Pk.g,
        className: rk
      } = kk;
      const Kk = (0, Dk.useRef)(null),
        xk = (0, Dk.useMemo)((() => ({
          mobType: ek,
          variation: ik,
          animation: fk
        })), [ek, ik, fk]);
      return (0, bk.b)(Kk, Mk, xk), (0, mk.jsx)("div", {
        className: Sk()("MobPreview", rk),
        ref: Kk
      })
    }))
  },
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
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);