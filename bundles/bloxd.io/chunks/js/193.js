export const id = 193;
export const ids = [193];
export const modules = {
  40969: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      MobPreview: () => Hb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(40976),
      Lb = hb(9122),
      Yb = hb(40982),
      Sb = hb(1007);

    function ab(bb) {
      return Lb.j.openMob(bb)
    }
    const Hb = (0, Bb.memo)((function(bb) {
      let {
        mobType: ub,
        variation: hb = null,
        animation: Ob = Yb.g,
        className: Lb
      } = bb;
      const Hb = (0, Bb.useRef)(null),
        wb = (0, Bb.useMemo)((() => ({
          mobType: ub,
          variation: hb,
          animation: Ob
        })), [ub, hb, Ob]);
      return (0, Ub.d)(Hb, ab, wb), (0, Sb.jsx)("div", {
        className: Gb()("MobPreview", Lb),
        ref: Hb
      })
    }))
  },
  40976: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(49),
      Ob = hb(2548);

    function Gb(bb, ub, hb) {
      const Gb = (0, Bb.useRef)(null),
        {
          width: Ub,
          height: Lb
        } = (0, Ob.b)(bb);
      (0, Bb.useEffect)((() => {
        const hb = ub(bb.current);
        return Gb.current = hb, () => {
          hb.close(), Gb.current = null
        }
      }), [bb, ub]), (0, Bb.useEffect)((() => {
        Ub <= 0 || Lb <= 0 || Gb.current.resize(Ub, Lb)
      }), [Ub, Lb]), (0, Bb.useEffect)((() => {
        Gb.current.show(hb)
      }), [hb])
    }
  },
  40982: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      c: () => Hb,
      g: () => Yb
    });
    var Bb = hb(36787),
      Ob = hb(38250);

    function Gb(bb, ub) {
      let [hb, Bb, Ob] = bb;
      return [0, .5, 1].map((bb => ({
        timeFraction: bb,
        rotation: {
          Kb: "catmull-rom-spline",
          point: [hb, Bb, Ob + (.5 === bb ? ub : 0)]
        }
      })))
    }

    function Ub(bb, ub, hb) {
      return {
        Xb: 3200,
        loop: !0,
        ob: {
          Root: {
            timeline: [0, .5, 1].map((bb => ({
              timeFraction: bb,
              position: {
                Kb: "catmull-rom-spline",
                point: [0, .5 === bb ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((bb => ({
              timeFraction: bb,
              rotation: {
                Kb: "catmull-rom-spline",
                point: [0, .25 === bb ? .12 : .75 === bb ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Gb(bb, hb)
          },
          ArmRightMesh: {
            timeline: Gb(ub, -hb)
          }
        }
      }
    }
    const Lb = Ub([0, 0, 0], [0, 0, 0], .07),
      Yb = (0, Ob.b)((0, Bb.f)(Lb), "mobIdle"),
      Sb = Ub([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      ab = Ub([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Hb = (0, Ob.b)((0, Bb.f)(Sb), "gunReady"),
      wb = (0, Ob.b)((0, Bb.f)(ab), "gunAimed")
  },
  9124: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      c: () => Ob,
      g: () => ab
    });
    var Bb = hb(1463);

    function Ob(bb) {
      var ub;
      return {
        ...Ub.store,
        yaw: Ub.store.yaw + (null !== (ub = Bb.e[bb].previewYaw) && void 0 !== ub ? ub : 0)
      }
    }
    const Gb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Ub = {
        player: Gb,
        store: {
          ...Gb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Lb(bb, ub) {
      bb instanceof Promise ? bb.then(ub).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ub(bb)
    }
    class Yb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ub;
        this.view = bb, null === (ub = this.opened) || void 0 === ub || ub.show(bb)
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Sb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ub;
        return null !== (bb = null === (ub = this.opened) || void 0 === ub ? void 0 : ub.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ub) {
        var hb;
        null === (hb = this.opened) || void 0 === hb || hb.setCosmetic(bb, ub)
      }
      playEmote(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.playEmote(bb)
      }
      setOrbit(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ub;
        await this.ready, await (null === (ub = this.opened) || void 0 === ub ? void 0 : ub.untilDrawn(bb))
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const ab = new class {
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
        return new Yb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Yb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Yb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ub) {
        return new Sb(this.current().openCharacter(bb, ub))
      }
    }
  },
  9122: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb.b,
      f: () => Bb.c,
      j: () => Bb.g
    });
    var Bb = hb(9124);
    class Ob {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class Gb {
      constructor() {
        this.mobScene = new Ob((() => Promise.all([hb.e(70), hb.e(227), hb.e(226), hb.e(246), hb.e(95), hb.e(247), hb.e(73), hb.e(72), hb.e(244), hb.e(71), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(265), hb.e(223), hb.e(238), hb.e(249), hb.e(252), hb.e(75), hb.e(197), hb.e(217), hb.e(94), hb.e(220), hb.e(235), hb.e(114), hb.e(236), hb.e(74), hb.e(113), hb.e(155)]).then((() => hb(40524))))), this.characterScene = new Ob((() => Promise.all([hb.e(70), hb.e(227), hb.e(226), hb.e(246), hb.e(95), hb.e(247), hb.e(73), hb.e(72), hb.e(244), hb.e(71), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(265), hb.e(223), hb.e(238), hb.e(249), hb.e(252), hb.e(75), hb.e(197), hb.e(217), hb.e(94), hb.e(220), hb.e(235), hb.e(114), hb.e(236), hb.e(74), hb.e(113), hb.e(154)]).then((() => hb(40617)))))
      }
      openMob(bb) {
        return this.mobScene.run((ub => ub.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((ub => ub.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((ub => ub.openMobLineupPreview(bb)))
      }
      openCharacter(bb, ub) {
        return this.characterScene.run((hb => hb.openCharacterPreview(bb, ub)))
      }
    }
    Bb.g.setDefaultHost((() => new Gb))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);