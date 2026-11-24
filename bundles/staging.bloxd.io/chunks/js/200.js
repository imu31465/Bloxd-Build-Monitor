export const id = 200;
export const ids = [200];
export const modules = {
  41542: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      MobPreview: () => fS
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(41545),
      NS = gS(34267),
      qS = gS(41549),
      uS = gS(1181);

    function IS(SS) {
      return NS.g.openMob(SS)
    }
    const fS = (0, tS.memo)((function(SS) {
      let {
        mobType: HS,
        variation: gS = null,
        animation: bS = qS.f,
        className: NS
      } = SS;
      const fS = (0, tS.useRef)(null),
        kS = (0, tS.useMemo)((() => ({
          mobType: HS,
          variation: gS,
          animation: bS
        })), [HS, gS, bS]);
      return (0, xS.b)(fS, IS, kS), (0, uS.jsx)("div", {
        className: XS()("MobPreview", NS),
        ref: fS
      })
    }))
  },
  41545: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(64),
      bS = gS(2890);

    function XS(SS, HS, gS) {
      const XS = (0, tS.useRef)(null),
        {
          width: xS,
          height: NS
        } = (0, bS.d)(SS);
      (0, tS.useEffect)((() => {
        const gS = HS(SS.current);
        return XS.current = gS, () => {
          gS.close(), XS.current = null
        }
      }), [SS, HS]), (0, tS.useEffect)((() => {
        xS <= 0 || NS <= 0 || XS.current.resize(xS, NS)
      }), [xS, NS]), (0, tS.useEffect)((() => {
        XS.current.show(gS)
      }), [gS])
    }
  },
  41549: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => kS,
      e: () => fS,
      f: () => qS
    });
    var tS = gS(37181),
      bS = gS(38644);

    function XS(SS, HS) {
      let [gS, tS, bS] = SS;
      return [0, .5, 1].map((SS => ({
        timeFraction: SS,
        rotation: {
          kX: "catmull-rom-spline",
          point: [gS, tS, bS + (.5 === SS ? HS : 0)]
        }
      })))
    }

    function xS(SS, HS, gS) {
      return {
        NX: 3200,
        loop: !0,
        uX: {
          Root: {
            timeline: [0, .5, 1].map((SS => ({
              timeFraction: SS,
              position: {
                kX: "catmull-rom-spline",
                point: [0, .5 === SS ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((SS => ({
              timeFraction: SS,
              rotation: {
                kX: "catmull-rom-spline",
                point: [0, .25 === SS ? .12 : .75 === SS ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: XS(SS, gS)
          },
          ArmRightMesh: {
            timeline: XS(HS, -gS)
          }
        }
      }
    }
    const NS = xS([0, 0, 0], [0, 0, 0], .07),
      qS = (0, bS.b)((0, tS.d)(NS), "mobIdle"),
      uS = xS([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      IS = xS([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      fS = (0, bS.b)((0, tS.d)(uS), "gunReady"),
      kS = (0, bS.b)((0, tS.d)(IS), "gunAimed")
  },
  34271: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      h: () => bS,
      i: () => IS
    });
    var tS = gS(1657);

    function bS(SS) {
      var HS;
      return {
        ...xS.store,
        yaw: xS.store.yaw + (null !== (HS = tS.c[SS].previewYaw) && void 0 !== HS ? HS : 0)
      }
    }
    const XS = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      xS = {
        player: XS,
        store: {
          ...XS,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function NS(SS, HS) {
      SS instanceof Promise ? SS.then(HS).catch((SS => {
        console.error("Couldn't open the preview", SS)
      })) : HS(SS)
    }
    class qS {
      constructor(SS) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, NS(SS, (SS => {
          this.closed ? SS.close() : (this.opened = SS, null !== this.size && SS.resize(this.size.width, this.size.height), null !== this.view && SS.show(this.view))
        }))
      }
      show(SS) {
        var HS;
        this.view = SS, null === (HS = this.opened) || void 0 === HS || HS.show(SS)
      }
      resize(SS, HS) {
        var gS;
        this.size = {
          width: SS,
          height: HS
        }, null === (gS = this.opened) || void 0 === gS || gS.resize(SS, HS)
      }
      close() {
        var SS;
        this.closed = !0, null === (SS = this.opened) || void 0 === SS || SS.close(), this.opened = null
      }
    }
    class uS {
      constructor(SS) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(SS).then((SS => SS.ready)), NS(SS, (SS => {
          this.closed ? SS.close() : (this.opened = SS, null !== this.size && SS.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var SS, HS;
        return null !== (SS = null === (HS = this.opened) || void 0 === HS ? void 0 : HS.isReady()) && void 0 !== SS && SS
      }
      setCosmetic(SS, HS) {
        var gS;
        null === (gS = this.opened) || void 0 === gS || gS.setCosmetic(SS, HS)
      }
      playEmote(SS) {
        var HS;
        null === (HS = this.opened) || void 0 === HS || HS.playEmote(SS)
      }
      setOrbit(SS) {
        var HS;
        null === (HS = this.opened) || void 0 === HS || HS.setOrbit(SS)
      }
      resetCamera() {
        var SS;
        null === (SS = this.opened) || void 0 === SS || SS.resetCamera()
      }
      async untilDrawn(SS) {
        var HS;
        await this.ready, await (null === (HS = this.opened) || void 0 === HS ? void 0 : HS.untilDrawn(SS))
      }
      resize(SS, HS) {
        var gS;
        this.size = {
          width: SS,
          height: HS
        }, null === (gS = this.opened) || void 0 === gS || gS.resize(SS, HS)
      }
      close() {
        var SS;
        this.closed = !0, null === (SS = this.opened) || void 0 === SS || SS.close(), this.opened = null
      }
    }
    const IS = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(SS) {
        this.host = SS
      }
      setDefaultHost(SS) {
        this.makeDefault = SS
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(SS) {
        return new qS(this.current().openMob(SS))
      }
      openPet(SS) {
        return new qS(this.current().openPet(SS))
      }
      openMobLineup(SS) {
        return new qS(this.current().openMobLineup(SS))
      }
      openCharacter(SS, HS) {
        return new uS(this.current().openCharacter(SS, HS))
      }
    }
  },
  34267: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS.e,
      f: () => tS.h,
      g: () => tS.i
    });
    var tS = gS(34271);
    class bS {
      constructor(SS) {
        this.load = SS, this.loaded = null, this.loading = null
      }
      run(SS) {
        return null !== this.loaded ? SS(this.loaded) : (this.loading ??= this.load().then((SS => (this.loaded = SS, SS)), (SS => {
          throw this.loading = null, SS
        })), this.loading.then(SS))
      }
    }
    class XS {
      constructor() {
        this.mobScene = new bS((() => Promise.all([gS.e(72), gS.e(232), gS.e(231), gS.e(254), gS.e(96), gS.e(255), gS.e(75), gS.e(74), gS.e(252), gS.e(73), gS.e(262), gS.e(256), gS.e(261), gS.e(259), gS.e(251), gS.e(274), gS.e(228), gS.e(244), gS.e(257), gS.e(260), gS.e(77), gS.e(186), gS.e(222), gS.e(95), gS.e(225), gS.e(240), gS.e(120), gS.e(241), gS.e(76), gS.e(119), gS.e(246)]).then((() => gS(41093))))), this.characterScene = new bS((() => Promise.all([gS.e(72), gS.e(232), gS.e(231), gS.e(254), gS.e(96), gS.e(255), gS.e(75), gS.e(74), gS.e(252), gS.e(73), gS.e(262), gS.e(256), gS.e(261), gS.e(259), gS.e(251), gS.e(274), gS.e(228), gS.e(244), gS.e(257), gS.e(260), gS.e(77), gS.e(186), gS.e(222), gS.e(95), gS.e(225), gS.e(240), gS.e(120), gS.e(241), gS.e(76), gS.e(119), gS.e(245)]).then((() => gS(41184)))))
      }
      openMob(SS) {
        return this.mobScene.run((HS => HS.openMobPreview(SS)))
      }
      openPet(SS) {
        return this.mobScene.run((HS => HS.openPetPreview(SS)))
      }
      openMobLineup(SS) {
        return this.mobScene.run((HS => HS.openMobLineupPreview(SS)))
      }
      openCharacter(SS, HS) {
        return this.characterScene.run((gS => gS.openCharacterPreview(SS, HS)))
      }
    }
    tS.i.setDefaultHost((() => new XS))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);