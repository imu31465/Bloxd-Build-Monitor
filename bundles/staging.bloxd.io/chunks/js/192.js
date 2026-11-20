export const id = 192;
export const ids = [192];
export const modules = {
  40939: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      MobPreview: () => Mb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(40944),
      Ub = sb(8956),
      Ib = sb(40948),
      Hb = sb(1087);

    function fb(bb) {
      return Ub.h.openMob(bb)
    }
    const Mb = (0, kb.memo)((function(bb) {
      let {
        mobType: cb,
        variation: sb = null,
        animation: Wb = Ib.j,
        className: Ub
      } = bb;
      const Mb = (0, kb.useRef)(null),
        Xb = (0, kb.useMemo)((() => ({
          mobType: cb,
          variation: sb,
          animation: Wb
        })), [cb, sb, Wb]);
      return (0, Tb.b)(Mb, fb, Xb), (0, Hb.jsx)("div", {
        className: ab()("MobPreview", Ub),
        ref: Mb
      })
    }))
  },
  40944: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(64),
      Wb = sb(2598);

    function ab(bb, cb, sb) {
      const ab = (0, kb.useRef)(null),
        {
          width: Tb,
          height: Ub
        } = (0, Wb.b)(bb);
      (0, kb.useEffect)((() => {
        const sb = cb(bb.current);
        return ab.current = sb, () => {
          sb.close(), ab.current = null
        }
      }), [bb, cb]), (0, kb.useEffect)((() => {
        Tb <= 0 || Ub <= 0 || ab.current.resize(Tb, Ub)
      }), [Tb, Ub]), (0, kb.useEffect)((() => {
        ab.current.show(sb)
      }), [sb])
    }
  },
  40948: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Xb,
      f: () => Mb,
      j: () => Ib
    });
    var kb = sb(36717),
      Wb = sb(38240);

    function ab(bb, cb) {
      let [sb, kb, Wb] = bb;
      return [0, .5, 1].map((bb => ({
        timeFraction: bb,
        rotation: {
          Ra: "catmull-rom-spline",
          point: [sb, kb, Wb + (.5 === bb ? cb : 0)]
        }
      })))
    }

    function Tb(bb, cb, sb) {
      return {
        da: 3200,
        loop: !0,
        ra: {
          Root: {
            timeline: [0, .5, 1].map((bb => ({
              timeFraction: bb,
              position: {
                Ra: "catmull-rom-spline",
                point: [0, .5 === bb ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((bb => ({
              timeFraction: bb,
              rotation: {
                Ra: "catmull-rom-spline",
                point: [0, .25 === bb ? .12 : .75 === bb ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: ab(bb, sb)
          },
          ArmRightMesh: {
            timeline: ab(cb, -sb)
          }
        }
      }
    }
    const Ub = Tb([0, 0, 0], [0, 0, 0], .07),
      Ib = (0, Wb.c)((0, kb.g)(Ub), "mobIdle"),
      Hb = Tb([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      fb = Tb([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Mb = (0, Wb.c)((0, kb.g)(Hb), "gunReady"),
      Xb = (0, Wb.c)((0, kb.g)(fb), "gunAimed")
  },
  8960: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      e: () => Wb,
      h: () => fb
    });
    var kb = sb(1544);

    function Wb(bb) {
      var cb;
      return {
        ...Tb.store,
        yaw: Tb.store.yaw + (null !== (cb = kb.b[bb].previewYaw) && void 0 !== cb ? cb : 0)
      }
    }
    const ab = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Tb = {
        player: ab,
        store: {
          ...ab,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ub(bb, cb) {
      bb instanceof Promise ? bb.then(cb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : cb(bb)
    }
    class Ib {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var cb;
        this.view = bb, null === (cb = this.opened) || void 0 === cb || cb.show(bb)
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Hb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, cb;
        return null !== (bb = null === (cb = this.opened) || void 0 === cb ? void 0 : cb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, cb) {
        var sb;
        null === (sb = this.opened) || void 0 === sb || sb.setCosmetic(bb, cb)
      }
      playEmote(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.playEmote(bb)
      }
      setOrbit(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var cb;
        await this.ready, await (null === (cb = this.opened) || void 0 === cb ? void 0 : cb.untilDrawn(bb))
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const fb = new class {
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
        return new Ib(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Ib(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Ib(this.current().openMobLineup(bb))
      }
      openCharacter(bb, cb) {
        return new Hb(this.current().openCharacter(bb, cb))
      }
    }
  },
  8956: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.c,
      g: () => kb.e,
      h: () => kb.h
    });
    var kb = sb(8960);
    class Wb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class ab {
      constructor() {
        this.mobScene = new Wb((() => Promise.all([sb.e(69), sb.e(226), sb.e(225), sb.e(244), sb.e(94), sb.e(245), sb.e(72), sb.e(71), sb.e(242), sb.e(70), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(218), sb.e(264), sb.e(222), sb.e(236), sb.e(247), sb.e(250), sb.e(74), sb.e(196), sb.e(215), sb.e(219), sb.e(93), sb.e(113), sb.e(234), sb.e(73), sb.e(112), sb.e(153)]).then((() => sb(40505))))), this.characterScene = new Wb((() => Promise.all([sb.e(69), sb.e(226), sb.e(225), sb.e(244), sb.e(94), sb.e(245), sb.e(72), sb.e(71), sb.e(242), sb.e(70), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(218), sb.e(264), sb.e(222), sb.e(236), sb.e(247), sb.e(250), sb.e(74), sb.e(196), sb.e(215), sb.e(219), sb.e(93), sb.e(113), sb.e(234), sb.e(73), sb.e(112), sb.e(152)]).then((() => sb(40593)))))
      }
      openMob(bb) {
        return this.mobScene.run((cb => cb.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((cb => cb.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((cb => cb.openMobLineupPreview(bb)))
      }
      openCharacter(bb, cb) {
        return this.characterScene.run((sb => sb.openCharacterPreview(bb, cb)))
      }
    }
    kb.h.setDefaultHost((() => new ab))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);