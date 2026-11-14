export const id = 201;
export const ids = [201];
export const modules = {
  39475: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      MobPreview: () => Oc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(39481),
      sc = nc(35460),
      Mc = nc(39486),
      Pc = nc(957);

    function qB(cB) {
      return sc.d.openMob(cB)
    }
    const Oc = (0, Vc.memo)((function(cB) {
      let {
        mobType: Bc,
        variation: nc = null,
        animation: Ic = Mc.i,
        className: sc
      } = cB;
      const Oc = (0, Vc.useRef)(null),
        Tc = (0, Vc.useMemo)((() => ({
          mobType: Bc,
          variation: nc,
          animation: Ic
        })), [Bc, nc, Ic]);
      return (0, uc.b)(Oc, qB, Tc), (0, Pc.jsx)("div", {
        className: rB()("MobPreview", sc),
        ref: Oc
      })
    }))
  },
  39481: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(73),
      Ic = nc(2175);

    function rB(cB, Bc, nc) {
      const rB = (0, Vc.useRef)(null),
        {
          width: uc,
          height: sc
        } = (0, Ic.c)(cB);
      (0, Vc.useEffect)((() => {
        const nc = Bc(cB.current);
        return rB.current = nc, () => {
          nc.close(), rB.current = null
        }
      }), [cB, Bc]), (0, Vc.useEffect)((() => {
        uc <= 0 || sc <= 0 || rB.current.resize(uc, sc)
      }), [uc, sc]), (0, Vc.useEffect)((() => {
        rB.current.show(nc)
      }), [nc])
    }
  },
  39486: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      f: () => Oc,
      i: () => Mc
    });
    var Vc = nc(36138),
      Ic = nc(37145);

    function rB(cB, Bc) {
      let [nc, Vc, Ic] = cB;
      return [0, .5, 1].map((cB => ({
        timeFraction: cB,
        rotation: {
          P_: "catmull-rom-spline",
          point: [nc, Vc, Ic + (.5 === cB ? Bc : 0)]
        }
      })))
    }

    function uc(cB, Bc, nc) {
      return {
        A4: 3200,
        loop: !0,
        n_: {
          Root: {
            timeline: [0, .5, 1].map((cB => ({
              timeFraction: cB,
              position: {
                P_: "catmull-rom-spline",
                point: [0, .5 === cB ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((cB => ({
              timeFraction: cB,
              rotation: {
                P_: "catmull-rom-spline",
                point: [0, .25 === cB ? .12 : .75 === cB ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: rB(cB, nc)
          },
          ArmRightMesh: {
            timeline: rB(Bc, -nc)
          }
        }
      }
    }
    const sc = uc([0, 0, 0], [0, 0, 0], .07),
      Mc = (0, Ic.e)((0, Vc.g)(sc), "mobIdle"),
      Pc = uc([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      qB = uc([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Oc = (0, Ic.e)((0, Vc.g)(Pc), "gunReady"),
      Tc = (0, Ic.e)((0, Vc.g)(qB), "gunAimed")
  },
  35463: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      cB instanceof Promise ? cB.then(Bc).catch((cB => {
        console.error("Couldn't open the preview", cB)
      })) : Bc(cB)
    }
    nc.d(Bc, {
      c: () => uc
    });
    class Ic {
      constructor(cB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Vc(cB, (cB => {
          this.closed ? cB.close() : (this.opened = cB, null !== this.size && cB.resize(this.size.width, this.size.height), null !== this.view && cB.show(this.view))
        }))
      }
      show(cB) {
        var Bc;
        this.view = cB, null === (Bc = this.opened) || void 0 === Bc || Bc.show(cB)
      }
      resize(cB, Bc) {
        var nc;
        this.size = {
          width: cB,
          height: Bc
        }, null === (nc = this.opened) || void 0 === nc || nc.resize(cB, Bc)
      }
      close() {
        var cB;
        this.closed = !0, null === (cB = this.opened) || void 0 === cB || cB.close(), this.opened = null
      }
    }
    class rB {
      constructor(cB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(cB).then((cB => cB.ready)), Vc(cB, (cB => {
          this.closed ? cB.close() : (this.opened = cB, null !== this.size && cB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.opened) || void 0 === Bc ? void 0 : Bc.isReady()) && void 0 !== cB && cB
      }
      setCosmetic(cB, Bc) {
        var nc;
        null === (nc = this.opened) || void 0 === nc || nc.setCosmetic(cB, Bc)
      }
      playEmote(cB) {
        var Bc;
        null === (Bc = this.opened) || void 0 === Bc || Bc.playEmote(cB)
      }
      async untilDrawn(cB) {
        var Bc;
        await this.ready, await (null === (Bc = this.opened) || void 0 === Bc ? void 0 : Bc.untilDrawn(cB))
      }
      resize(cB, Bc) {
        var nc;
        this.size = {
          width: cB,
          height: Bc
        }, null === (nc = this.opened) || void 0 === nc || nc.resize(cB, Bc)
      }
      close() {
        var cB;
        this.closed = !0, null === (cB = this.opened) || void 0 === cB || cB.close(), this.opened = null
      }
    }
    const uc = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(cB) {
        this.host = cB
      }
      setDefaultHost(cB) {
        this.makeDefault = cB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(cB) {
        return new Ic(this.current().openMob(cB))
      }
      openPet(cB) {
        return new Ic(this.current().openPet(cB))
      }
      openMobLineup(cB) {
        return new Ic(this.current().openMobLineup(cB))
      }
      openCharacter(cB) {
        return new rB(this.current().openCharacter(cB))
      }
    }
  },
  35460: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc.c
    });
    var Vc = nc(35463);
    class Ic {
      constructor(cB) {
        this.load = cB, this.loaded = null, this.loading = null
      }
      run(cB) {
        return null !== this.loaded ? cB(this.loaded) : (this.loading ??= this.load().then((cB => (this.loaded = cB, cB)), (cB => {
          throw this.loading = null, cB
        })), this.loading.then(cB))
      }
    }
    class rB {
      constructor() {
        this.mobScene = new Ic((() => Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(63), nc.e(62), nc.e(228), nc.e(61), nc.e(238), nc.e(232), nc.e(237), nc.e(235), nc.e(227), nc.e(203), nc.e(266), nc.e(208), nc.e(221), nc.e(233), nc.e(236), nc.e(123), nc.e(181), nc.e(219), nc.e(204), nc.e(101), nc.e(99), nc.e(267), nc.e(145)]).then((() => nc(39167))))), this.characterScene = new Ic((() => Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(63), nc.e(62), nc.e(228), nc.e(61), nc.e(238), nc.e(232), nc.e(237), nc.e(235), nc.e(227), nc.e(203), nc.e(266), nc.e(208), nc.e(221), nc.e(233), nc.e(236), nc.e(123), nc.e(181), nc.e(219), nc.e(204), nc.e(101), nc.e(99), nc.e(267), nc.e(144)]).then((() => nc(39259)))))
      }
      openMob(cB) {
        return this.mobScene.run((Bc => Bc.openMobPreview(cB)))
      }
      openPet(cB) {
        return this.mobScene.run((Bc => Bc.openPetPreview(cB)))
      }
      openMobLineup(cB) {
        return this.mobScene.run((Bc => Bc.openMobLineupPreview(cB)))
      }
      openCharacter(cB) {
        return this.characterScene.run((Bc => Bc.openCharacterPreview(cB)))
      }
    }
    Vc.c.setDefaultHost((() => new rB))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);