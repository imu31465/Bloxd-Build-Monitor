export const id = 193;
export const ids = [193];
export const modules = {
  41277: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      MobPreview: () => Bq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(41279),
      xq = gq(9313),
      Aq = gq(41285),
      cq = gq(1070);

    function uq(qq) {
      return xq.i.openMob(qq)
    }
    const Bq = (0, Yq.memo)((function(qq) {
      let {
        mobType: Eq,
        variation: gq = null,
        animation: lq = Aq.j,
        className: xq
      } = qq;
      const Bq = (0, Yq.useRef)(null),
        Wq = (0, Yq.useMemo)((() => ({
          mobType: Eq,
          variation: gq,
          animation: lq
        })), [Eq, gq, lq]);
      return (0, mq.d)(Bq, uq, Wq), (0, cq.jsx)("div", {
        className: Oq()("MobPreview", xq),
        ref: Bq
      })
    }))
  },
  41279: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(57),
      lq = gq(2660);

    function Oq(qq, Eq, gq) {
      const Oq = (0, Yq.useRef)(null),
        {
          width: mq,
          height: xq
        } = (0, lq.e)(qq);
      (0, Yq.useEffect)((() => {
        const gq = Eq(qq.current);
        return Oq.current = gq, () => {
          gq.close(), Oq.current = null
        }
      }), [qq, Eq]), (0, Yq.useEffect)((() => {
        mq <= 0 || xq <= 0 || Oq.current.resize(mq, xq)
      }), [mq, xq]), (0, Yq.useEffect)((() => {
        Oq.current.show(gq)
      }), [gq])
    }
  },
  41285: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Wq,
      f: () => Bq,
      j: () => Aq
    });
    var Yq = gq(37195),
      lq = gq(38611);

    function Oq(qq, Eq) {
      let [gq, Yq, lq] = qq;
      return [0, .5, 1].map((qq => ({
        timeFraction: qq,
        rotation: {
          oq: "catmull-rom-spline",
          point: [gq, Yq, lq + (.5 === qq ? Eq : 0)]
        }
      })))
    }

    function mq(qq, Eq, gq) {
      return {
        aq: 3200,
        loop: !0,
        dq: {
          Root: {
            timeline: [0, .5, 1].map((qq => ({
              timeFraction: qq,
              position: {
                oq: "catmull-rom-spline",
                point: [0, .5 === qq ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((qq => ({
              timeFraction: qq,
              rotation: {
                oq: "catmull-rom-spline",
                point: [0, .25 === qq ? .12 : .75 === qq ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Oq(qq, gq)
          },
          ArmRightMesh: {
            timeline: Oq(Eq, -gq)
          }
        }
      }
    }
    const xq = mq([0, 0, 0], [0, 0, 0], .07),
      Aq = (0, lq.b)((0, Yq.g)(xq), "mobIdle"),
      cq = mq([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      uq = mq([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Bq = (0, lq.b)((0, Yq.g)(cq), "gunReady"),
      Wq = (0, lq.b)((0, Yq.g)(uq), "gunAimed")
  },
  9321: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      d: () => lq,
      f: () => uq
    });
    var Yq = gq(1547);

    function lq(qq) {
      var Eq;
      return {
        ...mq.store,
        yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
      }
    }
    const Oq = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mq = {
        player: Oq,
        store: {
          ...Oq,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function xq(qq, Eq) {
      qq instanceof Promise ? qq.then(Eq).catch((qq => {
        console.error("Couldn't open the preview", qq)
      })) : Eq(qq)
    }
    class Aq {
      constructor(qq) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height), null !== this.view && qq.show(this.view))
        }))
      }
      show(qq) {
        var Eq;
        this.view = qq, null === (Eq = this.opened) || void 0 === Eq || Eq.show(qq)
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    class cq {
      constructor(qq) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(qq).then((qq => qq.ready)), xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.isReady()) && void 0 !== qq && qq
      }
      setCosmetic(qq, Eq) {
        var gq;
        null === (gq = this.opened) || void 0 === gq || gq.setCosmetic(qq, Eq)
      }
      playEmote(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.playEmote(qq)
      }
      setOrbit(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.setOrbit(qq)
      }
      resetCamera() {
        var qq;
        null === (qq = this.opened) || void 0 === qq || qq.resetCamera()
      }
      async untilDrawn(qq) {
        var Eq;
        await this.ready, await (null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.untilDrawn(qq))
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    const uq = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(qq) {
        this.host = qq
      }
      setDefaultHost(qq) {
        this.makeDefault = qq
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(qq) {
        return new Aq(this.current().openMob(qq))
      }
      openPet(qq) {
        return new Aq(this.current().openPet(qq))
      }
      openMobLineup(qq) {
        return new Aq(this.current().openMobLineup(qq))
      }
      openCharacter(qq, Eq) {
        return new cq(this.current().openCharacter(qq, Eq))
      }
    }
  },
  9313: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq.c,
      f: () => Yq.d,
      i: () => Yq.f
    });
    var Yq = gq(9321);
    class lq {
      constructor(qq) {
        this.load = qq, this.loaded = null, this.loading = null
      }
      run(qq) {
        return null !== this.loaded ? qq(this.loaded) : (this.loading ??= this.load().then((qq => (this.loaded = qq, qq)), (qq => {
          throw this.loading = null, qq
        })), this.loading.then(qq))
      }
    }
    class Oq {
      constructor() {
        this.mobScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e(197), gq.e(217), gq.e(94), gq.e(220), gq.e(235), gq.e(114), gq.e(236), gq.e(74), gq.e(113), gq.e(155)]).then((() => gq(40829))))), this.characterScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e(197), gq.e(217), gq.e(94), gq.e(220), gq.e(235), gq.e(114), gq.e(236), gq.e(74), gq.e(113), gq.e(154)]).then((() => gq(40917)))))
      }
      openMob(qq) {
        return this.mobScene.run((Eq => Eq.openMobPreview(qq)))
      }
      openPet(qq) {
        return this.mobScene.run((Eq => Eq.openPetPreview(qq)))
      }
      openMobLineup(qq) {
        return this.mobScene.run((Eq => Eq.openMobLineupPreview(qq)))
      }
      openCharacter(qq, Eq) {
        return this.characterScene.run((gq => gq.openCharacterPreview(qq, Eq)))
      }
    }
    Yq.f.setDefaultHost((() => new Oq))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);