export const id = 200;
export const ids = [200];
export const modules = {
  41416: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      MobPreview: () => AD
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(41421),
      LD = wD(34233),
      cD = wD(41423),
      gD = wD(1096);

    function RD(DD) {
      return LD.e.openMob(DD)
    }
    const AD = (0, pD.memo)((function(DD) {
      let {
        mobType: zD,
        variation: wD = null,
        animation: sD = cD.e,
        className: LD
      } = DD;
      const AD = (0, pD.useRef)(null),
        UD = (0, pD.useMemo)((() => ({
          mobType: zD,
          variation: wD,
          animation: sD
        })), [zD, wD, sD]);
      return (0, rD.c)(AD, RD, UD), (0, gD.jsx)("div", {
        className: KD()("MobPreview", LD),
        ref: AD
      })
    }))
  },
  41421: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD
    });
    var pD = wD(58),
      sD = wD(2750);

    function KD(DD, zD, wD) {
      const KD = (0, pD.useRef)(null),
        {
          width: rD,
          height: LD
        } = (0, sD.d)(DD);
      (0, pD.useEffect)((() => {
        const wD = zD(DD.current);
        return KD.current = wD, () => {
          wD.close(), KD.current = null
        }
      }), [DD, zD]), (0, pD.useEffect)((() => {
        rD <= 0 || LD <= 0 || KD.current.resize(rD, LD)
      }), [rD, LD]), (0, pD.useEffect)((() => {
        KD.current.show(wD)
      }), [wD])
    }
  },
  41423: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => UD,
      d: () => AD,
      e: () => cD
    });
    var pD = wD(37164),
      sD = wD(38621);

    function KD(DD, zD) {
      let [wD, pD, sD] = DD;
      return [0, .5, 1].map((DD => ({
        timeFraction: DD,
        rotation: {
          XK: "catmull-rom-spline",
          point: [wD, pD, sD + (.5 === DD ? zD : 0)]
        }
      })))
    }

    function rD(DD, zD, wD) {
      return {
        nK: 3200,
        loop: !0,
        JK: {
          Root: {
            timeline: [0, .5, 1].map((DD => ({
              timeFraction: DD,
              position: {
                XK: "catmull-rom-spline",
                point: [0, .5 === DD ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((DD => ({
              timeFraction: DD,
              rotation: {
                XK: "catmull-rom-spline",
                point: [0, .25 === DD ? .12 : .75 === DD ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: KD(DD, wD)
          },
          ArmRightMesh: {
            timeline: KD(zD, -wD)
          }
        }
      }
    }
    const LD = rD([0, 0, 0], [0, 0, 0], .07),
      cD = (0, sD.d)((0, pD.f)(LD), "mobIdle"),
      gD = rD([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      RD = rD([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      AD = (0, sD.d)((0, pD.f)(gD), "gunReady"),
      UD = (0, sD.d)((0, pD.f)(RD), "gunAimed")
  },
  34238: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      h: () => sD,
      j: () => RD
    });
    var pD = wD(1570);

    function sD(DD) {
      var zD;
      return {
        ...rD.store,
        yaw: rD.store.yaw + (null !== (zD = pD.b[DD].previewYaw) && void 0 !== zD ? zD : 0)
      }
    }
    const KD = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      rD = {
        player: KD,
        store: {
          ...KD,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function LD(DD, zD) {
      DD instanceof Promise ? DD.then(zD).catch((DD => {
        console.error("Couldn't open the preview", DD)
      })) : zD(DD)
    }
    class cD {
      constructor(DD) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, LD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
        }))
      }
      show(DD) {
        var zD;
        this.view = DD, null === (zD = this.opened) || void 0 === zD || zD.show(DD)
      }
      resize(DD, zD) {
        var wD;
        this.size = {
          width: DD,
          height: zD
        }, null === (wD = this.opened) || void 0 === wD || wD.resize(DD, zD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    class gD {
      constructor(DD) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), LD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var DD, zD;
        return null !== (DD = null === (zD = this.opened) || void 0 === zD ? void 0 : zD.isReady()) && void 0 !== DD && DD
      }
      setCosmetic(DD, zD) {
        var wD;
        null === (wD = this.opened) || void 0 === wD || wD.setCosmetic(DD, zD)
      }
      playEmote(DD) {
        var zD;
        null === (zD = this.opened) || void 0 === zD || zD.playEmote(DD)
      }
      setOrbit(DD) {
        var zD;
        null === (zD = this.opened) || void 0 === zD || zD.setOrbit(DD)
      }
      resetCamera() {
        var DD;
        null === (DD = this.opened) || void 0 === DD || DD.resetCamera()
      }
      async untilDrawn(DD) {
        var zD;
        await this.ready, await (null === (zD = this.opened) || void 0 === zD ? void 0 : zD.untilDrawn(DD))
      }
      resize(DD, zD) {
        var wD;
        this.size = {
          width: DD,
          height: zD
        }, null === (wD = this.opened) || void 0 === wD || wD.resize(DD, zD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    const RD = new class {
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
        return new cD(this.current().openMob(DD))
      }
      openPet(DD) {
        return new cD(this.current().openPet(DD))
      }
      openMobLineup(DD) {
        return new cD(this.current().openMobLineup(DD))
      }
      openCharacter(DD, zD) {
        return new gD(this.current().openCharacter(DD, zD))
      }
    }
  },
  34233: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.d,
      c: () => pD.h,
      e: () => pD.j
    });
    var pD = wD(34238);
    class sD {
      constructor(DD) {
        this.load = DD, this.loaded = null, this.loading = null
      }
      run(DD) {
        return null !== this.loaded ? DD(this.loaded) : (this.loading ??= this.load().then((DD => (this.loaded = DD, DD)), (DD => {
          throw this.loading = null, DD
        })), this.loading.then(DD))
      }
    }
    class KD {
      constructor() {
        this.mobScene = new sD((() => Promise.all([wD.e(72), wD.e(232), wD.e(231), wD.e(254), wD.e(96), wD.e(255), wD.e(75), wD.e(74), wD.e(252), wD.e(73), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(274), wD.e(228), wD.e(244), wD.e(257), wD.e(260), wD.e(77), wD.e(186), wD.e(222), wD.e(95), wD.e(225), wD.e(240), wD.e(120), wD.e(241), wD.e(76), wD.e(119), wD.e(246)]).then((() => wD(40998))))), this.characterScene = new sD((() => Promise.all([wD.e(72), wD.e(232), wD.e(231), wD.e(254), wD.e(96), wD.e(255), wD.e(75), wD.e(74), wD.e(252), wD.e(73), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(274), wD.e(228), wD.e(244), wD.e(257), wD.e(260), wD.e(77), wD.e(186), wD.e(222), wD.e(95), wD.e(225), wD.e(240), wD.e(120), wD.e(241), wD.e(76), wD.e(119), wD.e(245)]).then((() => wD(41087)))))
      }
      openMob(DD) {
        return this.mobScene.run((zD => zD.openMobPreview(DD)))
      }
      openPet(DD) {
        return this.mobScene.run((zD => zD.openPetPreview(DD)))
      }
      openMobLineup(DD) {
        return this.mobScene.run((zD => zD.openMobLineupPreview(DD)))
      }
      openCharacter(DD, zD) {
        return this.characterScene.run((wD => wD.openCharacterPreview(DD, zD)))
      }
    }
    pD.j.setDefaultHost((() => new KD))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);