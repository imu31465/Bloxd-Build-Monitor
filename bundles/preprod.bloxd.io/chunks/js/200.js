export const id = 200;
export const ids = [200];
export const modules = {
  41321: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      MobPreview: () => WC
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(41330),
      fC = ZC(34185),
      oC = ZC(41336),
      qC = ZC(1056);

    function FC(CC) {
      return fC.k.openMob(CC)
    }
    const WC = (0, QC.memo)((function(CC) {
      let {
        mobType: zC,
        variation: ZC = null,
        animation: wC = oC.e,
        className: fC
      } = CC;
      const WC = (0, QC.useRef)(null),
        NC = (0, QC.useMemo)((() => ({
          mobType: zC,
          variation: ZC,
          animation: wC
        })), [zC, ZC, wC]);
      return (0, nC.c)(WC, FC, NC), (0, qC.jsx)("div", {
        className: bC()("MobPreview", fC),
        ref: WC
      })
    }))
  },
  41330: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC
    });
    var QC = ZC(48),
      wC = ZC(2734);

    function bC(CC, zC, ZC) {
      const bC = (0, QC.useRef)(null),
        {
          width: nC,
          height: fC
        } = (0, wC.e)(CC);
      (0, QC.useEffect)((() => {
        const ZC = zC(CC.current);
        return bC.current = ZC, () => {
          ZC.close(), bC.current = null
        }
      }), [CC, zC]), (0, QC.useEffect)((() => {
        nC <= 0 || fC <= 0 || bC.current.resize(nC, fC)
      }), [nC, fC]), (0, QC.useEffect)((() => {
        bC.current.show(ZC)
      }), [ZC])
    }
  },
  41336: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      d: () => WC,
      e: () => oC
    });
    var QC = ZC(37023),
      wC = ZC(38454);

    function bC(CC, zC) {
      let [ZC, QC, wC] = CC;
      return [0, .5, 1].map((CC => ({
        timeFraction: CC,
        rotation: {
          nb: "catmull-rom-spline",
          point: [ZC, QC, wC + (.5 === CC ? zC : 0)]
        }
      })))
    }

    function nC(CC, zC, ZC) {
      return {
        Cb: 3200,
        loop: !0,
        Zb: {
          Root: {
            timeline: [0, .5, 1].map((CC => ({
              timeFraction: CC,
              position: {
                nb: "catmull-rom-spline",
                point: [0, .5 === CC ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((CC => ({
              timeFraction: CC,
              rotation: {
                nb: "catmull-rom-spline",
                point: [0, .25 === CC ? .12 : .75 === CC ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: bC(CC, ZC)
          },
          ArmRightMesh: {
            timeline: bC(zC, -ZC)
          }
        }
      }
    }
    const fC = nC([0, 0, 0], [0, 0, 0], .07),
      oC = (0, wC.b)((0, QC.f)(fC), "mobIdle"),
      qC = nC([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      FC = nC([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      WC = (0, wC.b)((0, QC.f)(qC), "gunReady"),
      NC = (0, wC.b)((0, QC.f)(FC), "gunAimed")
  },
  34194: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      g: () => wC,
      i: () => FC
    });
    var QC = ZC(1501);

    function wC(CC) {
      var zC;
      return {
        ...nC.store,
        yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
      }
    }
    const bC = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      nC = {
        player: bC,
        store: {
          ...bC,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function fC(CC, zC) {
      CC instanceof Promise ? CC.then(zC).catch((CC => {
        console.error("Couldn't open the preview", CC)
      })) : zC(CC)
    }
    class oC {
      constructor(CC) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, fC(CC, (CC => {
          this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height), null !== this.view && CC.show(this.view))
        }))
      }
      show(CC) {
        var zC;
        this.view = CC, null === (zC = this.opened) || void 0 === zC || zC.show(CC)
      }
      resize(CC, zC) {
        var ZC;
        this.size = {
          width: CC,
          height: zC
        }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
      }
      close() {
        var CC;
        this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
      }
    }
    class qC {
      constructor(CC) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(CC).then((CC => CC.ready)), fC(CC, (CC => {
          this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var CC, zC;
        return null !== (CC = null === (zC = this.opened) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
      }
      setCosmetic(CC, zC) {
        var ZC;
        null === (ZC = this.opened) || void 0 === ZC || ZC.setCosmetic(CC, zC)
      }
      playEmote(CC) {
        var zC;
        null === (zC = this.opened) || void 0 === zC || zC.playEmote(CC)
      }
      setOrbit(CC) {
        var zC;
        null === (zC = this.opened) || void 0 === zC || zC.setOrbit(CC)
      }
      resetCamera() {
        var CC;
        null === (CC = this.opened) || void 0 === CC || CC.resetCamera()
      }
      async untilDrawn(CC) {
        var zC;
        await this.ready, await (null === (zC = this.opened) || void 0 === zC ? void 0 : zC.untilDrawn(CC))
      }
      resize(CC, zC) {
        var ZC;
        this.size = {
          width: CC,
          height: zC
        }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
      }
      close() {
        var CC;
        this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
      }
    }
    const FC = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(CC) {
        this.host = CC
      }
      setDefaultHost(CC) {
        this.makeDefault = CC
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(CC) {
        return new oC(this.current().openMob(CC))
      }
      openPet(CC) {
        return new oC(this.current().openPet(CC))
      }
      openMobLineup(CC) {
        return new oC(this.current().openMobLineup(CC))
      }
      openCharacter(CC, zC) {
        return new qC(this.current().openCharacter(CC, zC))
      }
    }
  },
  34185: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC.d,
      g: () => QC.g,
      k: () => QC.i
    });
    var QC = ZC(34194);
    class wC {
      constructor(CC) {
        this.load = CC, this.loaded = null, this.loading = null
      }
      run(CC) {
        return null !== this.loaded ? CC(this.loaded) : (this.loading ??= this.load().then((CC => (this.loaded = CC, CC)), (CC => {
          throw this.loading = null, CC
        })), this.loading.then(CC))
      }
    }
    class bC {
      constructor() {
        this.mobScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e(186), ZC.e(222), ZC.e(95), ZC.e(225), ZC.e(240), ZC.e(120), ZC.e(241), ZC.e(76), ZC.e(119), ZC.e(246)]).then((() => ZC(40923))))), this.characterScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e(186), ZC.e(222), ZC.e(95), ZC.e(225), ZC.e(240), ZC.e(120), ZC.e(241), ZC.e(76), ZC.e(119), ZC.e(245)]).then((() => ZC(41e3)))))
      }
      openMob(CC) {
        return this.mobScene.run((zC => zC.openMobPreview(CC)))
      }
      openPet(CC) {
        return this.mobScene.run((zC => zC.openPetPreview(CC)))
      }
      openMobLineup(CC) {
        return this.mobScene.run((zC => zC.openMobLineupPreview(CC)))
      }
      openCharacter(CC, zC) {
        return this.characterScene.run((ZC => ZC.openCharacterPreview(CC, zC)))
      }
    }
    QC.i.setDefaultHost((() => new bC))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);