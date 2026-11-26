export const id = 223;
export const ids = [223];
export const modules = {
  45006: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      MobPreview: () => XH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(45011),
      tH = LH(35016),
      zH = LH(45013),
      CH = LH(1225);

    function EH(HH) {
      return tH.h.openMob(HH)
    }
    const XH = (0, AH.memo)((function(HH) {
      let {
        mobType: BH,
        variation: LH = null,
        animation: rH = zH.i,
        className: tH
      } = HH;
      const XH = (0, AH.useRef)(null),
        GH = (0, AH.useMemo)((() => ({
          mobType: BH,
          variation: LH,
          animation: rH
        })), [BH, LH, rH]);
      return (0, hH.c)(XH, EH, GH), (0, CH.jsx)("div", {
        className: SH()("MobPreview", tH),
        ref: XH
      })
    }))
  },
  45011: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(45),
      rH = LH(3018);

    function SH(HH, BH, LH) {
      const SH = (0, AH.useRef)(null),
        {
          width: hH,
          height: tH
        } = (0, rH.c)(HH);
      (0, AH.useEffect)((() => {
        const LH = BH(HH.current);
        return SH.current = LH, () => {
          LH.close(), SH.current = null
        }
      }), [HH, BH]), (0, AH.useEffect)((() => {
        hH <= 0 || tH <= 0 || SH.current.resize(hH, tH)
      }), [hH, tH]), (0, AH.useEffect)((() => {
        SH.current.show(LH)
      }), [LH])
    }
  },
  45013: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => GH,
      h: () => XH,
      i: () => zH
    });
    var AH = LH(38029),
      rH = LH(39550);

    function SH(HH, BH) {
      let [LH, AH, rH] = HH;
      return [0, .5, 1].map((HH => ({
        timeFraction: HH,
        rotation: {
          lB: "catmull-rom-spline",
          point: [LH, AH, rH + (.5 === HH ? BH : 0)]
        }
      })))
    }

    function hH(HH, BH, LH) {
      return {
        kB: 3200,
        loop: !0,
        oB: {
          Root: {
            timeline: [0, .5, 1].map((HH => ({
              timeFraction: HH,
              position: {
                lB: "catmull-rom-spline",
                point: [0, .5 === HH ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((HH => ({
              timeFraction: HH,
              rotation: {
                lB: "catmull-rom-spline",
                point: [0, .25 === HH ? .12 : .75 === HH ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: SH(HH, LH)
          },
          ArmRightMesh: {
            timeline: SH(BH, -LH)
          }
        }
      }
    }
    const tH = hH([0, 0, 0], [0, 0, 0], .07),
      zH = (0, rH.d)((0, AH.h)(tH), "mobIdle"),
      CH = hH([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      EH = hH([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      XH = (0, rH.d)((0, AH.h)(CH), "gunReady"),
      GH = (0, rH.d)((0, AH.h)(EH), "gunAimed")
  },
  35018: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => rH,
      j: () => EH
    });
    var AH = LH(1565);

    function rH(HH) {
      var BH;
      return {
        ...hH.store,
        yaw: hH.store.yaw + (null !== (BH = AH.c[HH].previewYaw) && void 0 !== BH ? BH : 0)
      }
    }
    const SH = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      hH = {
        player: SH,
        store: {
          ...SH,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function tH(HH, BH) {
      HH instanceof Promise ? HH.then(BH).catch((HH => {
        console.error("Couldn't open the preview", HH)
      })) : BH(HH)
    }
    class zH {
      constructor(HH) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, tH(HH, (HH => {
          this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height), null !== this.view && HH.show(this.view))
        }))
      }
      show(HH) {
        var BH;
        this.view = HH, null === (BH = this.opened) || void 0 === BH || BH.show(HH)
      }
      resize(HH, BH) {
        var LH;
        this.size = {
          width: HH,
          height: BH
        }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
      }
      close() {
        var HH;
        this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
      }
    }
    class CH {
      constructor(HH) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(HH).then((HH => HH.ready)), tH(HH, (HH => {
          this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var HH, BH;
        return null !== (HH = null === (BH = this.opened) || void 0 === BH ? void 0 : BH.isReady()) && void 0 !== HH && HH
      }
      setCosmetic(HH, BH) {
        var LH;
        null === (LH = this.opened) || void 0 === LH || LH.setCosmetic(HH, BH)
      }
      playEmote(HH) {
        var BH;
        null === (BH = this.opened) || void 0 === BH || BH.playEmote(HH)
      }
      setOrbit(HH) {
        var BH;
        null === (BH = this.opened) || void 0 === BH || BH.setOrbit(HH)
      }
      resetCamera() {
        var HH;
        null === (HH = this.opened) || void 0 === HH || HH.resetCamera()
      }
      async untilDrawn(HH) {
        var BH;
        await this.ready, await (null === (BH = this.opened) || void 0 === BH ? void 0 : BH.untilDrawn(HH))
      }
      resize(HH, BH) {
        var LH;
        this.size = {
          width: HH,
          height: BH
        }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
      }
      close() {
        var HH;
        this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
      }
    }
    const EH = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(HH) {
        this.host = HH
      }
      setDefaultHost(HH) {
        this.makeDefault = HH
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(HH) {
        return new zH(this.current().openMob(HH))
      }
      openPet(HH) {
        return new zH(this.current().openPet(HH))
      }
      openMobLineup(HH) {
        return new zH(this.current().openMobLineup(HH))
      }
      openCharacter(HH, BH) {
        return new CH(this.current().openCharacter(HH, BH))
      }
    }
  },
  35016: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH.d,
      g: () => AH.h,
      h: () => AH.j
    });
    var AH = LH(35018);
    class rH {
      constructor(HH) {
        this.load = HH, this.loaded = null, this.loading = null
      }
      run(HH) {
        return null !== this.loaded ? HH(this.loaded) : (this.loading ??= this.load().then((HH => (this.loaded = HH, HH)), (HH => {
          throw this.loading = null, HH
        })), this.loading.then(HH))
      }
    }
    class SH {
      constructor() {
        this.mobScene = new rH((() => Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(283), LH.e(111), LH.e(284), LH.e(87), LH.e(281), LH.e(85), LH.e(86), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(303), LH.e(255), LH.e(272), LH.e(286), LH.e(289), LH.e(89), LH.e(249), LH.e(204), LH.e(109), LH.e(261), LH.e(252), LH.e(268), LH.e(219), LH.e(269), LH.e(88), LH.e(273)]).then((() => LH(42386))))), this.characterScene = new rH((() => Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(283), LH.e(111), LH.e(284), LH.e(87), LH.e(281), LH.e(85), LH.e(86), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(303), LH.e(255), LH.e(272), LH.e(286), LH.e(289), LH.e(89), LH.e(249), LH.e(204), LH.e(109), LH.e(261), LH.e(252), LH.e(268), LH.e(219), LH.e(269), LH.e(88), LH.e(218)]).then((() => LH(42476)))))
      }
      openMob(HH) {
        return this.mobScene.run((BH => BH.openMobPreview(HH)))
      }
      openPet(HH) {
        return this.mobScene.run((BH => BH.openPetPreview(HH)))
      }
      openMobLineup(HH) {
        return this.mobScene.run((BH => BH.openMobLineupPreview(HH)))
      }
      openCharacter(HH, BH) {
        return this.characterScene.run((LH => LH.openCharacterPreview(HH, BH)))
      }
    }
    AH.j.setDefaultHost((() => new SH))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);