export const id = 230;
export const ids = [230];
export const modules = {
  53730: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      MobPreview: () => Ob
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(53490),
      gb = Mb(35366),
      lb = Mb(53482),
      Lb = Mb(1364);

    function Ib(bb) {
      return gb.i.openMob(bb)
    }
    const Ob = (0, eb.memo)((function(bb) {
      let {
        mobType: wb,
        variation: Mb = null,
        animation: Hb = lb.h,
        className: gb
      } = bb;
      const Ob = (0, eb.useRef)(null),
        Ub = (0, eb.useMemo)((() => ({
          mobType: wb,
          variation: Mb,
          animation: Hb
        })), [wb, Mb, Hb]);
      return (0, Vb.b)(Ob, Ib, Ub), (0, Lb.jsx)("div", {
        className: pb()("MobPreview", gb),
        ref: Ob
      })
    }))
  },
  53490: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    var eb = Mb(64),
      Hb = Mb(4005);

    function pb(bb, wb, Mb) {
      const pb = (0, eb.useRef)(null),
        {
          width: Vb,
          height: gb
        } = (0, Hb.b)(bb);
      (0, eb.useEffect)((() => {
        const Mb = wb(bb.current);
        return pb.current = Mb, () => {
          Mb.close(), pb.current = null
        }
      }), [bb, wb]), (0, eb.useEffect)((() => {
        Vb <= 0 || gb <= 0 || pb.current.resize(Vb, gb)
      }), [Vb, gb]), (0, eb.useEffect)((() => {
        pb.current.show(Mb)
      }), [Mb])
    }
  },
  53482: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ub,
      e: () => Ob,
      h: () => lb
    });
    var eb = Mb(38356),
      Hb = Mb(39927);

    function pb(bb, wb) {
      let [Mb, eb, Hb] = bb;
      return [0, .5, 1].map((bb => ({
        timeFraction: bb,
        rotation: {
          XM: "catmull-rom-spline",
          point: [Mb, eb, Hb + (.5 === bb ? wb : 0)]
        }
      })))
    }

    function Vb(bb, wb, Mb) {
      return {
        BM: 3200,
        loop: !0,
        mM: {
          Root: {
            timeline: [0, .5, 1].map((bb => ({
              timeFraction: bb,
              position: {
                XM: "catmull-rom-spline",
                point: [0, .5 === bb ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((bb => ({
              timeFraction: bb,
              rotation: {
                XM: "catmull-rom-spline",
                point: [0, .25 === bb ? .12 : .75 === bb ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: pb(bb, Mb)
          },
          ArmRightMesh: {
            timeline: pb(wb, -Mb)
          }
        }
      }
    }
    const gb = Vb([0, 0, 0], [0, 0, 0], .07),
      lb = (0, Hb.c)((0, eb.h)(gb), "mobIdle"),
      Lb = Vb([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Ib = Vb([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Ob = (0, Hb.c)((0, eb.h)(Lb), "gunReady"),
      Ub = (0, Hb.c)((0, eb.h)(Ib), "gunAimed")
  },
  35370: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      c: () => Hb,
      f: () => Ob
    });
    var eb = Mb(1735);

    function Hb(bb) {
      var wb;
      return {
        ...gb.store,
        yaw: gb.store.yaw + (null !== (wb = eb.d[bb].previewYaw) && void 0 !== wb ? wb : 0)
      }
    }
    const pb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Vb = {
        ...pb,
        radius: 33,
        target: [0, 3.9, 0]
      },
      gb = {
        player: pb,
        store: Vb,
        showcase: {
          ...Vb,
          target: [0, 1.9, 0]
        }
      };

    function lb(bb, wb) {
      bb instanceof Promise ? bb.then(wb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : wb(bb)
    }
    class Lb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var wb;
        this.view = bb, null === (wb = this.opened) || void 0 === wb || wb.show(bb)
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Ib {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, wb;
        return null !== (bb = null === (wb = this.opened) || void 0 === wb ? void 0 : wb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, wb) {
        var Mb;
        null === (Mb = this.opened) || void 0 === Mb || Mb.setCosmetic(bb, wb)
      }
      setNametag(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setNametag(bb)
      }
      playEmote(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.playEmote(bb)
      }
      setOrbit(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var wb;
        await this.ready, await (null === (wb = this.opened) || void 0 === wb ? void 0 : wb.untilDrawn(bb))
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const Ob = new class {
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
        return new Lb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Lb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Lb(this.current().openMobLineup(bb))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(bb, wb) {
        return new Ib(this.current().openCharacter(bb, wb))
      }
    }
  },
  35366: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb.b,
      f: () => eb.c,
      i: () => eb.f
    });
    var eb = Mb(35370);
    class Hb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class pb {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Hb((() => Promise.all([Mb.e(85), Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(113), Mb.e(291), Mb.e(89), Mb.e(86), Mb.e(288), Mb.e(87), Mb.e(88), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(312), Mb.e(261), Mb.e(279), Mb.e(293), Mb.e(296), Mb.e(91), Mb.e(253), Mb.e(267), Mb.e(112), Mb.e(124), Mb.e(258), Mb.e(142), Mb.e(90), Mb.e(122), Mb.e(311)]).then((() => Mb(42755))))), this.characterScene = new Hb((() => Promise.all([Mb.e(85), Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(113), Mb.e(291), Mb.e(89), Mb.e(86), Mb.e(288), Mb.e(87), Mb.e(88), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(312), Mb.e(177), Mb.e(261), Mb.e(279), Mb.e(293), Mb.e(296), Mb.e(91), Mb.e(225), Mb.e(253), Mb.e(267), Mb.e(112), Mb.e(124), Mb.e(258), Mb.e(142), Mb.e(90), Mb.e(122), Mb.e(280), Mb.e(184)]).then((() => Mb(42854)))))
      }
      openMob(bb) {
        return this.mobScene.run((wb => wb.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((wb => wb.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((wb => wb.openMobLineupPreview(bb)))
      }
      openCharacter(bb, wb) {
        return this.characterScene.run((Mb => Mb.openCharacterPreview(bb, wb)))
      }
    }
    eb.f.setDefaultHost((() => new pb))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);