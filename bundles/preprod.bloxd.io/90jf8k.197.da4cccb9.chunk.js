export const id = 197;
export const ids = [197];
export const modules = {
  39379: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      MobPreview: () => iW
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(39386),
      bW = SF(35327),
      dF = SF(39390),
      PF = SF(971);

    function RF(FF) {
      return bW.c.openMob(FF)
    }
    const iW = (0, CF.memo)((function(FF) {
      let {
        mobType: WF,
        variation: SF = null,
        animation: AF = dF.f,
        className: bW
      } = FF;
      const iW = (0, CF.useRef)(null),
        eF = (0, CF.useMemo)((() => ({
          mobType: WF,
          variation: SF,
          animation: AF
        })), [WF, SF, AF]);
      return (0, hF.b)(iW, RF, eF), (0, PF.jsx)("div", {
        className: uF()("MobPreview", bW),
        ref: iW
      })
    }))
  },
  39386: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF
    });
    var CF = SF(46),
      AF = SF(2161);

    function uF(FF, WF, SF) {
      const uF = (0, CF.useRef)(null),
        {
          width: hF,
          height: bW
        } = (0, AF.c)(FF);
      (0, CF.useEffect)((() => {
        const SF = WF(FF.current);
        return uF.current = SF, () => {
          SF.close(), uF.current = null
        }
      }), [FF, WF]), (0, CF.useEffect)((() => {
        hF <= 0 || bW <= 0 || uF.current.resize(hF, bW)
      }), [hF, bW]), (0, CF.useEffect)((() => {
        uF.current.show(SF)
      }), [SF])
    }
  },
  39390: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => eF,
      e: () => iW,
      f: () => dF
    });
    var CF = SF(35983),
      AF = SF(37038);

    function uF(FF, WF) {
      let [SF, CF, AF] = FF;
      return [0, .5, 1].map((FF => ({
        timeFraction: FF,
        rotation: {
          MFF: "catmull-rom-spline",
          point: [SF, CF, AF + (.5 === FF ? WF : 0)]
        }
      })))
    }

    function hF(FF, WF, SF) {
      return {
        xWF: 3200,
        loop: !0,
        oFF: {
          Root: {
            timeline: [0, .5, 1].map((FF => ({
              timeFraction: FF,
              position: {
                MFF: "catmull-rom-spline",
                point: [0, .5 === FF ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((FF => ({
              timeFraction: FF,
              rotation: {
                MFF: "catmull-rom-spline",
                point: [0, .25 === FF ? .12 : .75 === FF ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: uF(FF, SF)
          },
          ArmRightMesh: {
            timeline: uF(WF, -SF)
          }
        }
      }
    }
    const bW = hF([0, 0, 0], [0, 0, 0], .07),
      dF = (0, AF.c)((0, CF.h)(bW), "mobIdle"),
      PF = hF([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      RF = hF([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      iW = (0, AF.c)((0, CF.h)(PF), "gunReady"),
      eF = (0, AF.c)((0, CF.h)(RF), "gunAimed")
  },
  35334: (FF, WF, SF) => {
    function CF(FF, WF) {
      FF instanceof Promise ? FF.then(WF).catch((FF => {
        console.error("Couldn't open the preview", FF)
      })) : WF(FF)
    }
    SF.d(WF, {
      e: () => hF
    });
    class AF {
      constructor(FF) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, CF(FF, (FF => {
          this.closed ? FF.close() : (this.opened = FF, null !== this.size && FF.resize(this.size.width, this.size.height), null !== this.view && FF.show(this.view))
        }))
      }
      show(FF) {
        var WF;
        this.view = FF, null === (WF = this.opened) || void 0 === WF || WF.show(FF)
      }
      resize(FF, WF) {
        var SF;
        this.size = {
          width: FF,
          height: WF
        }, null === (SF = this.opened) || void 0 === SF || SF.resize(FF, WF)
      }
      close() {
        var FF;
        this.closed = !0, null === (FF = this.opened) || void 0 === FF || FF.close(), this.opened = null
      }
    }
    class uF {
      constructor(FF) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(FF).then((FF => FF.ready)), CF(FF, (FF => {
          this.closed ? FF.close() : (this.opened = FF, null !== this.size && FF.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var FF, WF;
        return null !== (FF = null === (WF = this.opened) || void 0 === WF ? void 0 : WF.isReady()) && void 0 !== FF && FF
      }
      setCosmetic(FF, WF) {
        var SF;
        null === (SF = this.opened) || void 0 === SF || SF.setCosmetic(FF, WF)
      }
      playEmote(FF) {
        var WF;
        null === (WF = this.opened) || void 0 === WF || WF.playEmote(FF)
      }
      async untilDrawn(FF) {
        var WF;
        await this.ready, await (null === (WF = this.opened) || void 0 === WF ? void 0 : WF.untilDrawn(FF))
      }
      resize(FF, WF) {
        var SF;
        this.size = {
          width: FF,
          height: WF
        }, null === (SF = this.opened) || void 0 === SF || SF.resize(FF, WF)
      }
      close() {
        var FF;
        this.closed = !0, null === (FF = this.opened) || void 0 === FF || FF.close(), this.opened = null
      }
    }
    const hF = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(FF) {
        this.host = FF
      }
      setDefaultHost(FF) {
        this.makeDefault = FF
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(FF) {
        return new AF(this.current().openMob(FF))
      }
      openPet(FF) {
        return new AF(this.current().openPet(FF))
      }
      openMobLineup(FF) {
        return new AF(this.current().openMobLineup(FF))
      }
      openCharacter(FF) {
        return new uF(this.current().openCharacter(FF))
      }
    }
  },
  35327: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF.e
    });
    var CF = SF(35334);
    class AF {
      constructor(FF) {
        this.load = FF, this.loaded = null, this.loading = null
      }
      run(FF) {
        return null !== this.loaded ? FF(this.loaded) : (this.loading ??= this.load().then((FF => (this.loaded = FF, FF)), (FF => {
          throw this.loading = null, FF
        })), this.loading.then(FF))
      }
    }
    class uF {
      constructor() {
        this.mobScene = new AF((() => Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(62), SF.e(222), SF.e(60), SF.e(232), SF.e(226), SF.e(61), SF.e(231), SF.e(229), SF.e(221), SF.e(198), SF.e(261), SF.e(203), SF.e(216), SF.e(227), SF.e(230), SF.e(120), SF.e(178), SF.e(214), SF.e(199), SF.e(98), SF.e(97), SF.e(262), SF.e(142)]).then((() => SF(39045))))), this.characterScene = new AF((() => Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(62), SF.e(222), SF.e(60), SF.e(232), SF.e(226), SF.e(61), SF.e(231), SF.e(229), SF.e(221), SF.e(198), SF.e(261), SF.e(203), SF.e(216), SF.e(227), SF.e(230), SF.e(120), SF.e(178), SF.e(214), SF.e(199), SF.e(98), SF.e(97), SF.e(262), SF.e(141)]).then((() => SF(39135)))))
      }
      openMob(FF) {
        return this.mobScene.run((WF => WF.openMobPreview(FF)))
      }
      openPet(FF) {
        return this.mobScene.run((WF => WF.openPetPreview(FF)))
      }
      openMobLineup(FF) {
        return this.mobScene.run((WF => WF.openMobLineupPreview(FF)))
      }
      openCharacter(FF) {
        return this.characterScene.run((WF => WF.openCharacterPreview(FF)))
      }
    }
    CF.e.setDefaultHost((() => new uF))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);