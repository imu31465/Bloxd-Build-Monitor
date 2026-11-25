export const id = 203;
export const ids = [203];
export const modules = {
  41948: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      MobPreview: () => pG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(41956),
      kG = ZG(34515),
      UG = ZG(41960),
      YG = ZG(1067);

    function VG(GG) {
      return kG.d.openMob(GG)
    }
    const pG = (0, wG.memo)((function(GG) {
      let {
        mobType: bG,
        variation: ZG = null,
        animation: SG = UG.g,
        className: kG
      } = GG;
      const pG = (0, wG.useRef)(null),
        fG = (0, wG.useMemo)((() => ({
          mobType: bG,
          variation: ZG,
          animation: SG
        })), [bG, ZG, SG]);
      return (0, yG.b)(pG, VG, fG), (0, YG.jsx)("div", {
        className: LG()("MobPreview", kG),
        ref: pG
      })
    }))
  },
  41956: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(51),
      SG = ZG(2732);

    function LG(GG, bG, ZG) {
      const LG = (0, wG.useRef)(null),
        {
          width: yG,
          height: kG
        } = (0, SG.d)(GG);
      (0, wG.useEffect)((() => {
        const ZG = bG(GG.current);
        return LG.current = ZG, () => {
          ZG.close(), LG.current = null
        }
      }), [GG, bG]), (0, wG.useEffect)((() => {
        yG <= 0 || kG <= 0 || LG.current.resize(yG, kG)
      }), [yG, kG]), (0, wG.useEffect)((() => {
        LG.current.show(ZG)
      }), [ZG])
    }
  },
  41960: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => fG,
      e: () => pG,
      g: () => UG
    });
    var wG = ZG(37503),
      SG = ZG(39061);

    function LG(GG, bG) {
      let [ZG, wG, SG] = GG;
      return [0, .5, 1].map((GG => ({
        timeFraction: GG,
        rotation: {
          Bw: "catmull-rom-spline",
          point: [ZG, wG, SG + (.5 === GG ? bG : 0)]
        }
      })))
    }

    function yG(GG, bG, ZG) {
      return {
        tw: 3200,
        loop: !0,
        Nw: {
          Root: {
            timeline: [0, .5, 1].map((GG => ({
              timeFraction: GG,
              position: {
                Bw: "catmull-rom-spline",
                point: [0, .5 === GG ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((GG => ({
              timeFraction: GG,
              rotation: {
                Bw: "catmull-rom-spline",
                point: [0, .25 === GG ? .12 : .75 === GG ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: LG(GG, ZG)
          },
          ArmRightMesh: {
            timeline: LG(bG, -ZG)
          }
        }
      }
    }
    const kG = yG([0, 0, 0], [0, 0, 0], .07),
      UG = (0, SG.c)((0, wG.i)(kG), "mobIdle"),
      YG = yG([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      VG = yG([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      pG = (0, SG.c)((0, wG.i)(YG), "gunReady"),
      fG = (0, SG.c)((0, wG.i)(VG), "gunAimed")
  },
  34519: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG,
      e: () => SG,
      f: () => VG
    });
    var wG = ZG(1509);

    function SG(GG) {
      var bG;
      return {
        ...yG.store,
        yaw: yG.store.yaw + (null !== (bG = wG.d[GG].previewYaw) && void 0 !== bG ? bG : 0)
      }
    }
    const LG = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yG = {
        player: LG,
        store: {
          ...LG,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kG(GG, bG) {
      GG instanceof Promise ? GG.then(bG).catch((GG => {
        console.error("Couldn't open the preview", GG)
      })) : bG(GG)
    }
    class UG {
      constructor(GG) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kG(GG, (GG => {
          this.closed ? GG.close() : (this.opened = GG, null !== this.size && GG.resize(this.size.width, this.size.height), null !== this.view && GG.show(this.view))
        }))
      }
      show(GG) {
        var bG;
        this.view = GG, null === (bG = this.opened) || void 0 === bG || bG.show(GG)
      }
      resize(GG, bG) {
        var ZG;
        this.size = {
          width: GG,
          height: bG
        }, null === (ZG = this.opened) || void 0 === ZG || ZG.resize(GG, bG)
      }
      close() {
        var GG;
        this.closed = !0, null === (GG = this.opened) || void 0 === GG || GG.close(), this.opened = null
      }
    }
    class YG {
      constructor(GG) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(GG).then((GG => GG.ready)), kG(GG, (GG => {
          this.closed ? GG.close() : (this.opened = GG, null !== this.size && GG.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var GG, bG;
        return null !== (GG = null === (bG = this.opened) || void 0 === bG ? void 0 : bG.isReady()) && void 0 !== GG && GG
      }
      setCosmetic(GG, bG) {
        var ZG;
        null === (ZG = this.opened) || void 0 === ZG || ZG.setCosmetic(GG, bG)
      }
      playEmote(GG) {
        var bG;
        null === (bG = this.opened) || void 0 === bG || bG.playEmote(GG)
      }
      setOrbit(GG) {
        var bG;
        null === (bG = this.opened) || void 0 === bG || bG.setOrbit(GG)
      }
      resetCamera() {
        var GG;
        null === (GG = this.opened) || void 0 === GG || GG.resetCamera()
      }
      async untilDrawn(GG) {
        var bG;
        await this.ready, await (null === (bG = this.opened) || void 0 === bG ? void 0 : bG.untilDrawn(GG))
      }
      resize(GG, bG) {
        var ZG;
        this.size = {
          width: GG,
          height: bG
        }, null === (ZG = this.opened) || void 0 === ZG || ZG.resize(GG, bG)
      }
      close() {
        var GG;
        this.closed = !0, null === (GG = this.opened) || void 0 === GG || GG.close(), this.opened = null
      }
    }
    const VG = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(GG) {
        this.host = GG
      }
      setDefaultHost(GG) {
        this.makeDefault = GG
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(GG) {
        return new UG(this.current().openMob(GG))
      }
      openPet(GG) {
        return new UG(this.current().openPet(GG))
      }
      openMobLineup(GG) {
        return new UG(this.current().openMobLineup(GG))
      }
      openCharacter(GG, bG) {
        return new YG(this.current().openCharacter(GG, bG))
      }
    }
  },
  34515: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG.b,
      c: () => wG.e,
      d: () => wG.f
    });
    var wG = ZG(34519);
    class SG {
      constructor(GG) {
        this.load = GG, this.loaded = null, this.loading = null
      }
      run(GG) {
        return null !== this.loaded ? GG(this.loaded) : (this.loading ??= this.load().then((GG => (this.loaded = GG, GG)), (GG => {
          throw this.loading = null, GG
        })), this.loading.then(GG))
      }
    }
    class LG {
      constructor() {
        this.mobScene = new SG((() => Promise.all([ZG.e(73), ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(98), ZG.e(259), ZG.e(76), ZG.e(75), ZG.e(256), ZG.e(74), ZG.e(266), ZG.e(260), ZG.e(265), ZG.e(263), ZG.e(255), ZG.e(279), ZG.e(233), ZG.e(249), ZG.e(261), ZG.e(264), ZG.e(78), ZG.e(188), ZG.e(227), ZG.e(97), ZG.e(239), ZG.e(230), ZG.e(246), ZG.e(121), ZG.e(247), ZG.e(77), ZG.e(251)]).then((() => ZG(41472))))), this.characterScene = new SG((() => Promise.all([ZG.e(73), ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(98), ZG.e(259), ZG.e(76), ZG.e(75), ZG.e(256), ZG.e(74), ZG.e(266), ZG.e(260), ZG.e(265), ZG.e(263), ZG.e(255), ZG.e(279), ZG.e(233), ZG.e(249), ZG.e(261), ZG.e(264), ZG.e(78), ZG.e(188), ZG.e(227), ZG.e(97), ZG.e(239), ZG.e(230), ZG.e(246), ZG.e(121), ZG.e(247), ZG.e(77), ZG.e(250)]).then((() => ZG(41579)))))
      }
      openMob(GG) {
        return this.mobScene.run((bG => bG.openMobPreview(GG)))
      }
      openPet(GG) {
        return this.mobScene.run((bG => bG.openPetPreview(GG)))
      }
      openMobLineup(GG) {
        return this.mobScene.run((bG => bG.openMobLineupPreview(GG)))
      }
      openCharacter(GG, bG) {
        return this.characterScene.run((ZG => ZG.openCharacterPreview(GG, bG)))
      }
    }
    wG.f.setDefaultHost((() => new LG))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);