export const id = 192;
export const ids = [192];
export const modules = {
  40952: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      MobPreview: () => Vk
    });
    var Rk = Bk(61),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(40954),
      bk = Bk(9039),
      wk = Bk(40957),
      dk = Bk(1069);

    function sk(kk) {
      return bk.h.openMob(kk)
    }
    const Vk = (0, Rk.memo)((function(kk) {
      let {
        mobType: Fk,
        variation: Bk = null,
        animation: tk = wk.i,
        className: bk
      } = kk;
      const Vk = (0, Rk.useRef)(null),
        Jk = (0, Rk.useMemo)((() => ({
          mobType: Fk,
          variation: Bk,
          animation: tk
        })), [Fk, Bk, tk]);
      return (0, Xk.b)(Vk, sk, Jk), (0, dk.jsx)("div", {
        className: ak()("MobPreview", bk),
        ref: Vk
      })
    }))
  },
  40954: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak
    });
    var Rk = Bk(61),
      tk = Bk(2607);

    function ak(kk, Fk, Bk) {
      const ak = (0, Rk.useRef)(null),
        {
          width: Xk,
          height: bk
        } = (0, tk.e)(kk);
      (0, Rk.useEffect)((() => {
        const Bk = Fk(kk.current);
        return ak.current = Bk, () => {
          Bk.close(), ak.current = null
        }
      }), [kk, Fk]), (0, Rk.useEffect)((() => {
        Xk <= 0 || bk <= 0 || ak.current.resize(Xk, bk)
      }), [Xk, bk]), (0, Rk.useEffect)((() => {
        ak.current.show(Bk)
      }), [Bk])
    }
  },
  40957: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Jk,
      e: () => Vk,
      i: () => wk
    });
    var Rk = Bk(36813),
      tk = Bk(38277);

    function ak(kk, Fk) {
      let [Bk, Rk, tk] = kk;
      return [0, .5, 1].map((kk => ({
        timeFraction: kk,
        rotation: {
          Ha: "catmull-rom-spline",
          point: [Bk, Rk, tk + (.5 === kk ? Fk : 0)]
        }
      })))
    }

    function Xk(kk, Fk, Bk) {
      return {
        La: 3200,
        loop: !0,
        Ea: {
          Root: {
            timeline: [0, .5, 1].map((kk => ({
              timeFraction: kk,
              position: {
                Ha: "catmull-rom-spline",
                point: [0, .5 === kk ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((kk => ({
              timeFraction: kk,
              rotation: {
                Ha: "catmull-rom-spline",
                point: [0, .25 === kk ? .12 : .75 === kk ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: ak(kk, Bk)
          },
          ArmRightMesh: {
            timeline: ak(Fk, -Bk)
          }
        }
      }
    }
    const bk = Xk([0, 0, 0], [0, 0, 0], .07),
      wk = (0, tk.b)((0, Rk.c)(bk), "mobIdle"),
      dk = Xk([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      sk = Xk([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Vk = (0, tk.b)((0, Rk.c)(dk), "gunReady"),
      Jk = (0, tk.b)((0, Rk.c)(sk), "gunAimed")
  },
  9045: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      f: () => tk,
      i: () => sk
    });
    var Rk = Bk(1512);

    function tk(kk) {
      var Fk;
      return {
        ...Xk.store,
        yaw: Xk.store.yaw + (null !== (Fk = Rk.d[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
      }
    }
    const ak = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xk = {
        player: ak,
        store: {
          ...ak,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function bk(kk, Fk) {
      kk instanceof Promise ? kk.then(Fk).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : Fk(kk)
    }
    class wk {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, bk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var Fk;
        this.view = kk, null === (Fk = this.opened) || void 0 === Fk || Fk.show(kk)
      }
      resize(kk, Fk) {
        var Bk;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Bk = this.opened) || void 0 === Bk || Bk.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class dk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), bk(kk, (kk => {
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
        var Bk;
        null === (Bk = this.opened) || void 0 === Bk || Bk.setCosmetic(kk, Fk)
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
        var Bk;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Bk = this.opened) || void 0 === Bk || Bk.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const sk = new class {
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
        return new wk(this.current().openMob(kk))
      }
      openPet(kk) {
        return new wk(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new wk(this.current().openMobLineup(kk))
      }
      openCharacter(kk, Fk) {
        return new dk(this.current().openCharacter(kk, Fk))
      }
    }
  },
  9039: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.b,
      f: () => Rk.f,
      h: () => Rk.i
    });
    var Rk = Bk(9045);
    class tk {
      constructor(kk) {
        this.load = kk, this.loaded = null, this.loading = null
      }
      run(kk) {
        return null !== this.loaded ? kk(this.loaded) : (this.loading ??= this.load().then((kk => (this.loaded = kk, kk)), (kk => {
          throw this.loading = null, kk
        })), this.loading.then(kk))
      }
    }
    class ak {
      constructor() {
        this.mobScene = new tk((() => Promise.all([Bk.e(69), Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(94), Bk.e(245), Bk.e(72), Bk.e(71), Bk.e(242), Bk.e(70), Bk.e(252), Bk.e(246), Bk.e(251), Bk.e(249), Bk.e(241), Bk.e(218), Bk.e(264), Bk.e(222), Bk.e(236), Bk.e(247), Bk.e(250), Bk.e(74), Bk.e(196), Bk.e(215), Bk.e(219), Bk.e(93), Bk.e(113), Bk.e(234), Bk.e(73), Bk.e(112), Bk.e(153)]).then((() => Bk(40499))))), this.characterScene = new tk((() => Promise.all([Bk.e(69), Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(94), Bk.e(245), Bk.e(72), Bk.e(71), Bk.e(242), Bk.e(70), Bk.e(252), Bk.e(246), Bk.e(251), Bk.e(249), Bk.e(241), Bk.e(218), Bk.e(264), Bk.e(222), Bk.e(236), Bk.e(247), Bk.e(250), Bk.e(74), Bk.e(196), Bk.e(215), Bk.e(219), Bk.e(93), Bk.e(113), Bk.e(234), Bk.e(73), Bk.e(112), Bk.e(152)]).then((() => Bk(40612)))))
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
        return this.characterScene.run((Bk => Bk.openCharacterPreview(kk, Fk)))
      }
    }
    Rk.i.setDefaultHost((() => new ak))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);