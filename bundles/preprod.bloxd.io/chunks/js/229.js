export const id = 229;
export const ids = [229];
export const modules = {
  53703: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      MobPreview: () => ZW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(53489),
      LW = OW(35264),
      cW = OW(53483),
      wW = OW(1283);

    function tW(WW) {
      return LW.f.openMob(WW)
    }
    const ZW = (0, mW.memo)((function(WW) {
      let {
        mobType: iW,
        variation: OW = null,
        animation: EW = cW.h,
        className: LW
      } = WW;
      const ZW = (0, mW.useRef)(null),
        xW = (0, mW.useMemo)((() => ({
          mobType: iW,
          variation: OW,
          animation: EW
        })), [iW, OW, EW]);
      return (0, PW.c)(ZW, tW, xW), (0, wW.jsx)("div", {
        className: NW()("MobPreview", LW),
        ref: ZW
      })
    }))
  },
  53489: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(62),
      EW = OW(3809);

    function NW(WW, iW, OW) {
      const NW = (0, mW.useRef)(null),
        {
          width: PW,
          height: LW
        } = (0, EW.d)(WW);
      (0, mW.useEffect)((() => {
        const OW = iW(WW.current);
        return NW.current = OW, () => {
          OW.close(), NW.current = null
        }
      }), [WW, iW]), (0, mW.useEffect)((() => {
        PW <= 0 || LW <= 0 || NW.current.resize(PW, LW)
      }), [PW, LW]), (0, mW.useEffect)((() => {
        NW.current.show(OW)
      }), [OW])
    }
  },
  53483: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => xW,
      d: () => ZW,
      h: () => cW
    });
    var mW = OW(38320),
      EW = OW(39881);

    function NW(WW, iW) {
      let [OW, mW, EW] = WW;
      return [0, .5, 1].map((WW => ({
        timeFraction: WW,
        rotation: {
          YO: "catmull-rom-spline",
          point: [OW, mW, EW + (.5 === WW ? iW : 0)]
        }
      })))
    }

    function PW(WW, iW, OW) {
      return {
        kO: 3200,
        loop: !0,
        MO: {
          Root: {
            timeline: [0, .5, 1].map((WW => ({
              timeFraction: WW,
              position: {
                YO: "catmull-rom-spline",
                point: [0, .5 === WW ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((WW => ({
              timeFraction: WW,
              rotation: {
                YO: "catmull-rom-spline",
                point: [0, .25 === WW ? .12 : .75 === WW ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: NW(WW, OW)
          },
          ArmRightMesh: {
            timeline: NW(iW, -OW)
          }
        }
      }
    }
    const LW = PW([0, 0, 0], [0, 0, 0], .07),
      cW = (0, EW.e)((0, mW.h)(LW), "mobIdle"),
      wW = PW([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      tW = PW([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      ZW = (0, EW.e)((0, mW.h)(wW), "gunReady"),
      xW = (0, EW.e)((0, mW.h)(tW), "gunAimed")
  },
  35270: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => EW,
      f: () => ZW
    });
    var mW = OW(1659);

    function EW(WW) {
      var iW;
      return {
        ...LW.store,
        yaw: LW.store.yaw + (null !== (iW = mW.e[WW].previewYaw) && void 0 !== iW ? iW : 0)
      }
    }
    const NW = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      PW = {
        ...NW,
        radius: 33,
        target: [0, 3.9, 0]
      },
      LW = {
        player: NW,
        store: PW,
        showcase: {
          ...PW,
          target: [0, 1.9, 0]
        }
      };

    function cW(WW, iW) {
      WW instanceof Promise ? WW.then(iW).catch((WW => {
        console.error("Couldn't open the preview", WW)
      })) : iW(WW)
    }
    class wW {
      constructor(WW) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
        }))
      }
      show(WW) {
        var iW;
        this.view = WW, null === (iW = this.opened) || void 0 === iW || iW.show(WW)
      }
      resize(WW, iW) {
        var OW;
        this.size = {
          width: WW,
          height: iW
        }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    class tW {
      constructor(WW) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), cW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var WW, iW;
        return null !== (WW = null === (iW = this.opened) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
      }
      setCosmetic(WW, iW) {
        var OW;
        null === (OW = this.opened) || void 0 === OW || OW.setCosmetic(WW, iW)
      }
      setNametag(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.setNametag(WW)
      }
      playEmote(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.playEmote(WW)
      }
      setOrbit(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.setOrbit(WW)
      }
      resetCamera() {
        var WW;
        null === (WW = this.opened) || void 0 === WW || WW.resetCamera()
      }
      async untilDrawn(WW) {
        var iW;
        await this.ready, await (null === (iW = this.opened) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
      }
      resize(WW, iW) {
        var OW;
        this.size = {
          width: WW,
          height: iW
        }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    const ZW = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(WW) {
        this.host = WW
      }
      setDefaultHost(WW) {
        this.makeDefault = WW
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(WW) {
        return new wW(this.current().openMob(WW))
      }
      openPet(WW) {
        return new wW(this.current().openPet(WW))
      }
      openMobLineup(WW) {
        return new wW(this.current().openMobLineup(WW))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(WW, iW) {
        return new tW(this.current().openCharacter(WW, iW))
      }
    }
  },
  35264: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW.d,
      e: () => mW.e,
      f: () => mW.f
    });
    var mW = OW(35270);
    class EW {
      constructor(WW) {
        this.load = WW, this.loaded = null, this.loading = null
      }
      run(WW) {
        return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
          throw this.loading = null, WW
        })), this.loading.then(WW))
      }
    }
    class NW {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(260), OW.e(278), OW.e(292), OW.e(295), OW.e(91), OW.e(252), OW.e(266), OW.e(112), OW.e(124), OW.e(257), OW.e(142), OW.e(90), OW.e(122), OW.e(310)]).then((() => OW(42563))))), this.characterScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(177), OW.e(260), OW.e(278), OW.e(292), OW.e(295), OW.e(91), OW.e(224), OW.e(252), OW.e(266), OW.e(112), OW.e(124), OW.e(257), OW.e(142), OW.e(90), OW.e(122), OW.e(279), OW.e(184)]).then((() => OW(42656)))))
      }
      openMob(WW) {
        return this.mobScene.run((iW => iW.openMobPreview(WW)))
      }
      openPet(WW) {
        return this.mobScene.run((iW => iW.openPetPreview(WW)))
      }
      openMobLineup(WW) {
        return this.mobScene.run((iW => iW.openMobLineupPreview(WW)))
      }
      openCharacter(WW, iW) {
        return this.characterScene.run((OW => OW.openCharacterPreview(WW, iW)))
      }
    }
    mW.f.setDefaultHost((() => new NW))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);