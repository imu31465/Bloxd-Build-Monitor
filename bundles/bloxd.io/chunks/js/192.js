export const id = 192;
export const ids = [192];
export const modules = {
  40649: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      MobPreview: () => Lb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(40656),
      Yb = Ub(8945),
      Bb = Ub(40664),
      eb = Ub(1023);

    function vb(bb) {
      return Yb.l.openMob(bb)
    }
    const Lb = (0, Ab.memo)((function(bb) {
      let {
        mobType: ab,
        variation: Ub = null,
        animation: Mb = Bb.h,
        className: Yb
      } = bb;
      const Lb = (0, Ab.useRef)(null),
        Pb = (0, Ab.useMemo)((() => ({
          mobType: ab,
          variation: Ub,
          animation: Mb
        })), [ab, Ub, Mb]);
      return (0, Eb.b)(Lb, vb, Pb), (0, eb.jsx)("div", {
        className: Tb()("MobPreview", Yb),
        ref: Lb
      })
    }))
  },
  40656: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(52),
      Mb = Ub(2531);

    function Tb(bb, ab, Ub) {
      const Tb = (0, Ab.useRef)(null),
        {
          width: Eb,
          height: Yb
        } = (0, Mb.e)(bb);
      (0, Ab.useEffect)((() => {
        const Ub = ab(bb.current);
        return Tb.current = Ub, () => {
          Ub.close(), Tb.current = null
        }
      }), [bb, ab]), (0, Ab.useEffect)((() => {
        Eb <= 0 || Yb <= 0 || Tb.current.resize(Eb, Yb)
      }), [Eb, Yb]), (0, Ab.useEffect)((() => {
        Tb.current.show(Ub)
      }), [Ub])
    }
  },
  40664: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Pb,
      f: () => Lb,
      h: () => Bb
    });
    var Ab = Ub(36471),
      Mb = Ub(37946);

    function Tb(bb, ab) {
      let [Ub, Ab, Mb] = bb;
      return [0, .5, 1].map((bb => ({
        timeFraction: bb,
        rotation: {
          DT: "catmull-rom-spline",
          point: [Ub, Ab, Mb + (.5 === bb ? ab : 0)]
        }
      })))
    }

    function Eb(bb, ab, Ub) {
      return {
        jT: 3200,
        loop: !0,
        kT: {
          Root: {
            timeline: [0, .5, 1].map((bb => ({
              timeFraction: bb,
              position: {
                DT: "catmull-rom-spline",
                point: [0, .5 === bb ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((bb => ({
              timeFraction: bb,
              rotation: {
                DT: "catmull-rom-spline",
                point: [0, .25 === bb ? .12 : .75 === bb ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Tb(bb, Ub)
          },
          ArmRightMesh: {
            timeline: Tb(ab, -Ub)
          }
        }
      }
    }
    const Yb = Eb([0, 0, 0], [0, 0, 0], .07),
      Bb = (0, Mb.e)((0, Ab.e)(Yb), "mobIdle"),
      eb = Eb([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      vb = Eb([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Lb = (0, Mb.e)((0, Ab.e)(eb), "gunReady"),
      Pb = (0, Mb.e)((0, Ab.e)(vb), "gunAimed")
  },
  8951: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      h: () => Mb,
      l: () => vb
    });
    var Ab = Ub(1485);

    function Mb(bb) {
      var ab;
      return {
        ...Eb.store,
        yaw: Eb.store.yaw + (null !== (ab = Ab.d[bb].previewYaw) && void 0 !== ab ? ab : 0)
      }
    }
    const Tb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Eb = {
        player: Tb,
        store: {
          ...Tb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Yb(bb, ab) {
      bb instanceof Promise ? bb.then(ab).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ab(bb)
    }
    class Bb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ab;
        this.view = bb, null === (ab = this.opened) || void 0 === ab || ab.show(bb)
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class eb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ab;
        return null !== (bb = null === (ab = this.opened) || void 0 === ab ? void 0 : ab.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ab) {
        var Ub;
        null === (Ub = this.opened) || void 0 === Ub || Ub.setCosmetic(bb, ab)
      }
      playEmote(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.playEmote(bb)
      }
      setOrbit(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ab;
        await this.ready, await (null === (ab = this.opened) || void 0 === ab ? void 0 : ab.untilDrawn(bb))
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const vb = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Bb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Bb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Bb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ab) {
        return new eb(this.current().openCharacter(bb, ab))
      }
    }
  },
  8945: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab.d,
      h: () => Ab.h,
      l: () => Ab.l
    });
    var Ab = Ub(8951);
    class Mb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class Tb {
      constructor() {
        this.mobScene = new Mb((() => Promise.all([Ub.e(69), Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(94), Ub.e(245), Ub.e(72), Ub.e(71), Ub.e(242), Ub.e(70), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(218), Ub.e(264), Ub.e(222), Ub.e(236), Ub.e(247), Ub.e(250), Ub.e(74), Ub.e(196), Ub.e(215), Ub.e(219), Ub.e(93), Ub.e(113), Ub.e(234), Ub.e(73), Ub.e(112), Ub.e(153)]).then((() => Ub(40179))))), this.characterScene = new Mb((() => Promise.all([Ub.e(69), Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(94), Ub.e(245), Ub.e(72), Ub.e(71), Ub.e(242), Ub.e(70), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(218), Ub.e(264), Ub.e(222), Ub.e(236), Ub.e(247), Ub.e(250), Ub.e(74), Ub.e(196), Ub.e(215), Ub.e(219), Ub.e(93), Ub.e(113), Ub.e(234), Ub.e(73), Ub.e(112), Ub.e(152)]).then((() => Ub(40271)))))
      }
      openMob(bb) {
        return this.mobScene.run((ab => ab.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((ab => ab.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((ab => ab.openMobLineupPreview(bb)))
      }
      openCharacter(bb, ab) {
        return this.characterScene.run((Ub => Ub.openCharacterPreview(bb, ab)))
      }
    }
    Ab.l.setDefaultHost((() => new Tb))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);