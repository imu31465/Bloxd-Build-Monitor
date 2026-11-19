export const id = 192;
export const ids = [192];
export const modules = {
  40574: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      MobPreview: () => BD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(40582),
      bD = cD(9074),
      QD = cD(40591),
      wD = cD(1093);

    function SD(DD) {
      return bD.f.openMob(DD)
    }
    const BD = (0, ID.memo)((function(DD) {
      let {
        mobType: CD,
        variation: cD = null,
        animation: pD = QD.g,
        className: bD
      } = DD;
      const BD = (0, ID.useRef)(null),
        yD = (0, ID.useMemo)((() => ({
          mobType: CD,
          variation: cD,
          animation: pD
        })), [CD, cD, pD]);
      return (0, fD.e)(BD, SD, yD), (0, wD.jsx)("div", {
        className: iD()("MobPreview", bD),
        ref: BD
      })
    }))
  },
  40582: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(53),
      pD = cD(2621);

    function iD(DD, CD, cD) {
      const iD = (0, ID.useRef)(null),
        {
          width: fD,
          height: bD
        } = (0, pD.e)(DD);
      (0, ID.useEffect)((() => {
        const cD = CD(DD.current);
        return iD.current = cD, () => {
          cD.close(), iD.current = null
        }
      }), [DD, CD]), (0, ID.useEffect)((() => {
        fD <= 0 || bD <= 0 || iD.current.resize(fD, bD)
      }), [fD, bD]), (0, ID.useEffect)((() => {
        iD.current.show(cD)
      }), [cD])
    }
  },
  40591: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => yD,
      e: () => BD,
      g: () => QD
    });
    var ID = cD(36517),
      pD = cD(38009);

    function iD(DD, CD) {
      let [cD, ID, pD] = DD;
      return [0, .5, 1].map((DD => ({
        timeFraction: DD,
        rotation: {
          Ui: "catmull-rom-spline",
          point: [cD, ID, pD + (.5 === DD ? CD : 0)]
        }
      })))
    }

    function fD(DD, CD, cD) {
      return {
        mi: 3200,
        loop: !0,
        Oi: {
          Root: {
            timeline: [0, .5, 1].map((DD => ({
              timeFraction: DD,
              position: {
                Ui: "catmull-rom-spline",
                point: [0, .5 === DD ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((DD => ({
              timeFraction: DD,
              rotation: {
                Ui: "catmull-rom-spline",
                point: [0, .25 === DD ? .12 : .75 === DD ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: iD(DD, cD)
          },
          ArmRightMesh: {
            timeline: iD(CD, -cD)
          }
        }
      }
    }
    const bD = fD([0, 0, 0], [0, 0, 0], .07),
      QD = (0, pD.e)((0, ID.f)(bD), "mobIdle"),
      wD = fD([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      SD = fD([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      BD = (0, pD.e)((0, ID.f)(wD), "gunReady"),
      yD = (0, pD.e)((0, ID.f)(SD), "gunAimed")
  },
  9080: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => pD,
      h: () => SD
    });
    var ID = cD(1562);

    function pD(DD) {
      var CD;
      return {
        ...fD.store,
        yaw: fD.store.yaw + (null !== (CD = ID.c[DD].previewYaw) && void 0 !== CD ? CD : 0)
      }
    }
    const iD = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      fD = {
        player: iD,
        store: {
          ...iD,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function bD(DD, CD) {
      DD instanceof Promise ? DD.then(CD).catch((DD => {
        console.error("Couldn't open the preview", DD)
      })) : CD(DD)
    }
    class QD {
      constructor(DD) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
        }))
      }
      show(DD) {
        var CD;
        this.view = DD, null === (CD = this.opened) || void 0 === CD || CD.show(DD)
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    class wD {
      constructor(DD) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var DD, CD;
        return null !== (DD = null === (CD = this.opened) || void 0 === CD ? void 0 : CD.isReady()) && void 0 !== DD && DD
      }
      setCosmetic(DD, CD) {
        var cD;
        null === (cD = this.opened) || void 0 === cD || cD.setCosmetic(DD, CD)
      }
      playEmote(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.playEmote(DD)
      }
      setOrbit(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.setOrbit(DD)
      }
      resetCamera() {
        var DD;
        null === (DD = this.opened) || void 0 === DD || DD.resetCamera()
      }
      async untilDrawn(DD) {
        var CD;
        await this.ready, await (null === (CD = this.opened) || void 0 === CD ? void 0 : CD.untilDrawn(DD))
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    const SD = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(DD) {
        this.host = DD
      }
      setDefaultHost(DD) {
        this.makeDefault = DD
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(DD) {
        return new QD(this.current().openMob(DD))
      }
      openPet(DD) {
        return new QD(this.current().openPet(DD))
      }
      openMobLineup(DD) {
        return new QD(this.current().openMobLineup(DD))
      }
      openCharacter(DD, CD) {
        return new wD(this.current().openCharacter(DD, CD))
      }
    }
  },
  9074: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.c,
      e: () => ID.g,
      f: () => ID.h
    });
    var ID = cD(9080);
    class pD {
      constructor(DD) {
        this.load = DD, this.loaded = null, this.loading = null
      }
      run(DD) {
        return null !== this.loaded ? DD(this.loaded) : (this.loading ??= this.load().then((DD => (this.loaded = DD, DD)), (DD => {
          throw this.loading = null, DD
        })), this.loading.then(DD))
      }
    }
    class iD {
      constructor() {
        this.mobScene = new pD((() => Promise.all([cD.e(69), cD.e(226), cD.e(225), cD.e(244), cD.e(94), cD.e(245), cD.e(72), cD.e(71), cD.e(242), cD.e(70), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(218), cD.e(264), cD.e(222), cD.e(236), cD.e(247), cD.e(250), cD.e(74), cD.e(196), cD.e(215), cD.e(219), cD.e(93), cD.e(113), cD.e(234), cD.e(73), cD.e(112), cD.e(153)]).then((() => cD(40157))))), this.characterScene = new pD((() => Promise.all([cD.e(69), cD.e(226), cD.e(225), cD.e(244), cD.e(94), cD.e(245), cD.e(72), cD.e(71), cD.e(242), cD.e(70), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(218), cD.e(264), cD.e(222), cD.e(236), cD.e(247), cD.e(250), cD.e(74), cD.e(196), cD.e(215), cD.e(219), cD.e(93), cD.e(113), cD.e(234), cD.e(73), cD.e(112), cD.e(152)]).then((() => cD(40228)))))
      }
      openMob(DD) {
        return this.mobScene.run((CD => CD.openMobPreview(DD)))
      }
      openPet(DD) {
        return this.mobScene.run((CD => CD.openPetPreview(DD)))
      }
      openMobLineup(DD) {
        return this.mobScene.run((CD => CD.openMobLineupPreview(DD)))
      }
      openCharacter(DD, CD) {
        return this.characterScene.run((cD => cD.openCharacterPreview(DD, CD)))
      }
    }
    ID.h.setDefaultHost((() => new iD))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);