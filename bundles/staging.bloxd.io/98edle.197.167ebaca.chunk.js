export const id = 197;
export const ids = [197];
export const modules = {
  38998: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      MobPreview: () => BW
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(39006),
      bR = MW(35025),
      yR = MW(39013),
      NW = MW(940);

    function eW(WW) {
      return bR.e.openMob(WW)
    }
    const BW = (0, wW.memo)((function(WW) {
      let {
        mobType: RW,
        variation: MW = null,
        animation: CW = yR.l,
        className: bR
      } = WW;
      const BW = (0, wW.useRef)(null),
        tR = (0, wW.useMemo)((() => ({
          mobType: RW,
          variation: MW,
          animation: CW
        })), [RW, MW, CW]);
      return (0, AW.d)(BW, eW, tR), (0, NW.jsx)("div", {
        className: zR()("MobPreview", bR),
        ref: BW
      })
    }))
  },
  39006: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR
    });
    var wW = MW(75),
      CW = MW(2135);

    function zR(WW, RW, MW) {
      const zR = (0, wW.useRef)(null),
        {
          width: AW,
          height: bR
        } = (0, CW.c)(WW);
      (0, wW.useEffect)((() => {
        const MW = RW(WW.current);
        return zR.current = MW, () => {
          MW.close(), zR.current = null
        }
      }), [WW, RW]), (0, wW.useEffect)((() => {
        AW <= 0 || bR <= 0 || zR.current.resize(AW, bR)
      }), [AW, bR]), (0, wW.useEffect)((() => {
        zR.current.show(MW)
      }), [MW])
    }
  },
  39013: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => tR,
      h: () => BW,
      l: () => yR
    });
    var wW = MW(35678),
      CW = MW(36680);

    function zR(WW, RW) {
      let [MW, wW, CW] = WW;
      return [0, .5, 1].map((WW => ({
        timeFraction: WW,
        rotation: {
          bRW: "catmull-rom-spline",
          point: [MW, wW, CW + (.5 === WW ? RW : 0)]
        }
      })))
    }

    function AW(WW, RW, MW) {
      return {
        wWW: 3200,
        loop: !0,
        zRW: {
          Root: {
            timeline: [0, .5, 1].map((WW => ({
              timeFraction: WW,
              position: {
                bRW: "catmull-rom-spline",
                point: [0, .5 === WW ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((WW => ({
              timeFraction: WW,
              rotation: {
                bRW: "catmull-rom-spline",
                point: [0, .25 === WW ? .12 : .75 === WW ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: zR(WW, MW)
          },
          ArmRightMesh: {
            timeline: zR(RW, -MW)
          }
        }
      }
    }
    const bR = AW([0, 0, 0], [0, 0, 0], .07),
      yR = (0, CW.e)((0, wW.h)(bR), "mobIdle"),
      NW = AW([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      eW = AW([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      BW = (0, CW.e)((0, wW.h)(NW), "gunReady"),
      tR = (0, CW.e)((0, wW.h)(eW), "gunAimed")
  },
  35034: (WW, RW, MW) => {
    function wW(WW, RW) {
      WW instanceof Promise ? WW.then(RW).catch((WW => {
        console.error("Couldn't open the preview", WW)
      })) : RW(WW)
    }
    MW.d(RW, {
      b: () => AW
    });
    class CW {
      constructor(WW) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, wW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
        }))
      }
      show(WW) {
        var RW;
        this.view = WW, null === (RW = this.opened) || void 0 === RW || RW.show(WW)
      }
      resize(WW, RW) {
        var MW;
        this.size = {
          width: WW,
          height: RW
        }, null === (MW = this.opened) || void 0 === MW || MW.resize(WW, RW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    class zR {
      constructor(WW) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), wW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var WW, RW;
        return null !== (WW = null === (RW = this.opened) || void 0 === RW ? void 0 : RW.isReady()) && void 0 !== WW && WW
      }
      setCosmetic(WW, RW) {
        var MW;
        null === (MW = this.opened) || void 0 === MW || MW.setCosmetic(WW, RW)
      }
      playEmote(WW) {
        var RW;
        null === (RW = this.opened) || void 0 === RW || RW.playEmote(WW)
      }
      async untilDrawn(WW) {
        var RW;
        await this.ready, await (null === (RW = this.opened) || void 0 === RW ? void 0 : RW.untilDrawn(WW))
      }
      resize(WW, RW) {
        var MW;
        this.size = {
          width: WW,
          height: RW
        }, null === (MW = this.opened) || void 0 === MW || MW.resize(WW, RW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    const AW = new class {
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
        return new CW(this.current().openMob(WW))
      }
      openPet(WW) {
        return new CW(this.current().openPet(WW))
      }
      openMobLineup(WW) {
        return new CW(this.current().openMobLineup(WW))
      }
      openCharacter(WW) {
        return new zR(this.current().openCharacter(WW))
      }
    }
  },
  35025: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW.b
    });
    var wW = MW(35034);
    class CW {
      constructor(WW) {
        this.load = WW, this.loaded = null, this.loading = null
      }
      run(WW) {
        return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
          throw this.loading = null, WW
        })), this.loading.then(WW))
      }
    }
    class zR {
      constructor() {
        this.mobScene = new CW((() => Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(62), MW.e(222), MW.e(60), MW.e(232), MW.e(226), MW.e(61), MW.e(231), MW.e(229), MW.e(221), MW.e(198), MW.e(261), MW.e(203), MW.e(216), MW.e(227), MW.e(230), MW.e(120), MW.e(178), MW.e(214), MW.e(199), MW.e(98), MW.e(97), MW.e(262), MW.e(142)]).then((() => MW(38676))))), this.characterScene = new CW((() => Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(62), MW.e(222), MW.e(60), MW.e(232), MW.e(226), MW.e(61), MW.e(231), MW.e(229), MW.e(221), MW.e(198), MW.e(261), MW.e(203), MW.e(216), MW.e(227), MW.e(230), MW.e(120), MW.e(178), MW.e(214), MW.e(199), MW.e(98), MW.e(97), MW.e(262), MW.e(141)]).then((() => MW(38768)))))
      }
      openMob(WW) {
        return this.mobScene.run((RW => RW.openMobPreview(WW)))
      }
      openPet(WW) {
        return this.mobScene.run((RW => RW.openPetPreview(WW)))
      }
      openMobLineup(WW) {
        return this.mobScene.run((RW => RW.openMobLineupPreview(WW)))
      }
      openCharacter(WW) {
        return this.characterScene.run((RW => RW.openCharacterPreview(WW)))
      }
    }
    wW.b.setDefaultHost((() => new zR))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);