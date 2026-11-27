export const id = 230;
export const ids = [230];
export const modules = {
  54078: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      MobPreview: () => xr
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(53849),
      Ir = Qr(35505),
      fr = Qr(53844),
      Er = Qr(1338);

    function pr(rr) {
      return Ir.j.openMob(rr)
    }
    const xr = (0, Zr.memo)((function(rr) {
      let {
        mobType: Sr,
        variation: Qr = null,
        animation: Wr = fr.g,
        className: Ir
      } = rr;
      const xr = (0, Zr.useRef)(null),
        mr = (0, Zr.useMemo)((() => ({
          mobType: Sr,
          variation: Qr,
          animation: Wr
        })), [Sr, Qr, Wr]);
      return (0, jr.e)(xr, pr, mr), (0, Er.jsx)("div", {
        className: ar()("MobPreview", Ir),
        ref: xr
      })
    }))
  },
  53849: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    var Zr = Qr(72),
      Wr = Qr(3855);

    function ar(rr, Sr, Qr) {
      const ar = (0, Zr.useRef)(null),
        {
          width: jr,
          height: Ir
        } = (0, Wr.b)(rr);
      (0, Zr.useEffect)((() => {
        const Qr = Sr(rr.current);
        return ar.current = Qr, () => {
          Qr.close(), ar.current = null
        }
      }), [rr, Sr]), (0, Zr.useEffect)((() => {
        jr <= 0 || Ir <= 0 || ar.current.resize(jr, Ir)
      }), [jr, Ir]), (0, Zr.useEffect)((() => {
        ar.current.show(Qr)
      }), [Qr])
    }
  },
  53844: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => mr,
      f: () => xr,
      g: () => fr
    });
    var Zr = Qr(38638),
      Wr = Qr(40197);

    function ar(rr, Sr) {
      let [Qr, Zr, Wr] = rr;
      return [0, .5, 1].map((rr => ({
        timeFraction: rr,
        rotation: {
          lQ: "catmull-rom-spline",
          point: [Qr, Zr, Wr + (.5 === rr ? Sr : 0)]
        }
      })))
    }

    function jr(rr, Sr, Qr) {
      return {
        BQ: 3200,
        loop: !0,
        vQ: {
          Root: {
            timeline: [0, .5, 1].map((rr => ({
              timeFraction: rr,
              position: {
                lQ: "catmull-rom-spline",
                point: [0, .5 === rr ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((rr => ({
              timeFraction: rr,
              rotation: {
                lQ: "catmull-rom-spline",
                point: [0, .25 === rr ? .12 : .75 === rr ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: ar(rr, Qr)
          },
          ArmRightMesh: {
            timeline: ar(Sr, -Qr)
          }
        }
      }
    }
    const Ir = jr([0, 0, 0], [0, 0, 0], .07),
      fr = (0, Wr.c)((0, Zr.d)(Ir), "mobIdle"),
      Er = jr([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      pr = jr([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      xr = (0, Wr.c)((0, Zr.d)(Er), "gunReady"),
      mr = (0, Wr.c)((0, Zr.d)(pr), "gunAimed")
  },
  35509: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      e: () => Wr,
      i: () => xr
    });
    var Zr = Qr(1686);

    function Wr(rr) {
      var Sr;
      return {
        ...Ir.store,
        yaw: Ir.store.yaw + (null !== (Sr = Zr.e[rr].previewYaw) && void 0 !== Sr ? Sr : 0)
      }
    }
    const ar = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      jr = {
        ...ar,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Ir = {
        player: ar,
        store: jr,
        showcase: {
          ...jr,
          target: [0, 1.9, 0]
        }
      };

    function fr(rr, Sr) {
      rr instanceof Promise ? rr.then(Sr).catch((rr => {
        console.error("Couldn't open the preview", rr)
      })) : Sr(rr)
    }
    class Er {
      constructor(rr) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height), null !== this.view && rr.show(this.view))
        }))
      }
      show(rr) {
        var Sr;
        this.view = rr, null === (Sr = this.opened) || void 0 === Sr || Sr.show(rr)
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    class pr {
      constructor(rr) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(rr).then((rr => rr.ready)), fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.isReady()) && void 0 !== rr && rr
      }
      setCosmetic(rr, Sr) {
        var Qr;
        null === (Qr = this.opened) || void 0 === Qr || Qr.setCosmetic(rr, Sr)
      }
      setNametag(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setNametag(rr)
      }
      playEmote(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.playEmote(rr)
      }
      setOrbit(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setOrbit(rr)
      }
      resetCamera() {
        var rr;
        null === (rr = this.opened) || void 0 === rr || rr.resetCamera()
      }
      async untilDrawn(rr) {
        var Sr;
        await this.ready, await (null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.untilDrawn(rr))
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    const xr = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(rr) {
        this.host = rr
      }
      setDefaultHost(rr) {
        this.makeDefault = rr
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(rr) {
        return new Er(this.current().openMob(rr))
      }
      openPet(rr) {
        return new Er(this.current().openPet(rr))
      }
      openMobLineup(rr) {
        return new Er(this.current().openMobLineup(rr))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(rr, Sr) {
        return new pr(this.current().openCharacter(rr, Sr))
      }
    }
  },
  35505: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr.d,
      f: () => Zr.e,
      j: () => Zr.i
    });
    var Zr = Qr(35509);
    class Wr {
      constructor(rr) {
        this.load = rr, this.loaded = null, this.loading = null
      }
      run(rr) {
        return null !== this.loaded ? rr(this.loaded) : (this.loading ??= this.load().then((rr => (this.loaded = rr, rr)), (rr => {
          throw this.loading = null, rr
        })), this.loading.then(rr))
      }
    }
    class ar {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Wr((() => Promise.all([Qr.e(85), Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(113), Qr.e(291), Qr.e(89), Qr.e(86), Qr.e(288), Qr.e(87), Qr.e(88), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(312), Qr.e(261), Qr.e(279), Qr.e(293), Qr.e(296), Qr.e(91), Qr.e(253), Qr.e(267), Qr.e(112), Qr.e(124), Qr.e(258), Qr.e(142), Qr.e(90), Qr.e(122), Qr.e(311)]).then((() => Qr(42945))))), this.characterScene = new Wr((() => Promise.all([Qr.e(85), Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(113), Qr.e(291), Qr.e(89), Qr.e(86), Qr.e(288), Qr.e(87), Qr.e(88), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(312), Qr.e(177), Qr.e(261), Qr.e(279), Qr.e(293), Qr.e(296), Qr.e(91), Qr.e(225), Qr.e(253), Qr.e(267), Qr.e(112), Qr.e(124), Qr.e(258), Qr.e(142), Qr.e(90), Qr.e(122), Qr.e(280), Qr.e(184)]).then((() => Qr(43048)))))
      }
      openMob(rr) {
        return this.mobScene.run((Sr => Sr.openMobPreview(rr)))
      }
      openPet(rr) {
        return this.mobScene.run((Sr => Sr.openPetPreview(rr)))
      }
      openMobLineup(rr) {
        return this.mobScene.run((Sr => Sr.openMobLineupPreview(rr)))
      }
      openCharacter(rr, Sr) {
        return this.characterScene.run((Qr => Qr.openCharacterPreview(rr, Sr)))
      }
    }
    Zr.i.setDefaultHost((() => new ar))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);