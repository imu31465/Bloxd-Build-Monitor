export const id = 226;
export const ids = [226];
export const modules = {
  37317: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      capturePreviewPicture: () => UW,
      holdPreviewsLow: () => PW.d,
      openLiveFigure: () => jW,
      rasterNametag: () => KW
    });
    var mW = OW(1230),
      EW = OW(3540),
      NW = OW(35264),
      PW = OW(37325),
      LW = OW(37327),
      cW = OW(37336),
      wW = OW(37432),
      tW = OW(4681);
    const ZW = 480,
      xW = 16,
      lW = {
        minGapMs: 250,
        now: () => performance.now(),
        skip: PW.t
      },
      AW = 30,
      bW = 1e4;

    function jW(WW, iW, OW, cW) {
      const wW = NW.f.openCharacter(WW, "player");
      let tW = !1,
        ZW = !1,
        AW = null;
      const jW = async () => {
        const WW = wW.dev.canvas(),
          iW = await (mW = () => WW.isConnected && function(WW) {
            const {
              x: iW,
              width: OW
            } = kW(WW);
            if (0 === OW || 0 === WW.height) return !1;
            if (sW ??= document.createElement("canvas").getContext("2d", {
                willReadFrequently: !0
              }), null === sW) return !1;
            const mW = sW.canvas;
            mW.height = Math.min(WW.height, xW), mW.width = Math.max(1, Math.round(OW * mW.height / WW.height));
            const EW = sW;
            return EW.imageSmoothingQuality = "high", EW.drawImage(WW, iW, 0, OW, WW.height, 0, 0, mW.width, mW.height), MW(EW.getImageData(0, 0, mW.width, mW.height).data)
          }(WW), EW = PW.b, NW = () => !tW && wW.isReady(), LW = lW, new Promise((WW => {
            let iW = Number.NEGATIVE_INFINITY;
            const OW = () => {
              EW((() => {
                try {
                  if (!NW()) return void WW(!1);
                  if (LW.skip()) return void WW(!0);
                  const EW = LW.now();
                  if (EW - iW >= LW.minGapMs && (iW = EW, mW())) return void WW(!0);
                  OW()
                } catch (EW) {
                  console.warn("[loading-character] couldn't read a figure's frame", EW), WW(!1)
                }
              }))
            };
            OW()
          })));
        var mW, EW, NW, LW;
        return !iW || tW || ZW || (ZW = !0, OW(!0)), iW
      };
      return wW.ready.then((() => {
        if (tW) return !1;
        for (const PW of mW.p) {
          var WW;
          wW.setCosmetic(PW, null !== (WW = iW.cosmetics[PW]) && void 0 !== WW ? WW : (0, EW.d)(PW))
        }
        const OW = Promise.all(mW.p.map((WW => wW.untilDrawn(WW)))).then((() => !0)),
          NW = new Promise((WW => {
            setTimeout((() => {
              (0, PW.b)((() => {
                WW(!1)
              }))
            }), bW)
          }));
        return Promise.race([OW, NW])
      })).then((async WW => {
        if (!tW && wW.isReady() && await jW() && WW) return UW(wW.dev.canvas(), (() => !tW && wW.isReady())).then((WW => {
          null === WW || tW || cW(WW)
        }))
      })).catch((WW => {
        console.warn("[loading-character] a figure couldn't draw", WW)
      })), {
        resize: (WW, iW) => {
          const mW = (0, LW.b)(WW, iW, window.devicePixelRatio),
            EW = null !== AW && (AW[0] !== mW[0] || AW[1] !== mW[1]);
          AW = mW, wW.resize(WW, iW), EW && ZW && (ZW = !1, OW(!1), jW())
        },
        close: () => {
          tW = !0, wW.close()
        }
      }
    }

    function UW(WW, iW) {
      return new Promise((OW => {
        const mW = EW => {
          (0, PW.b)((() => {
            if (!iW()) return void OW(null);
            const NW = WW.isConnected ? function(WW) {
              let {
                canvas: iW,
                x: OW,
                width: mW
              } = WW;
              if (0 === mW || 0 === iW.height) return null;
              const EW = Math.min(1, ZW / iW.height),
                NW = document.createElement("canvas");
              NW.width = Math.max(1, Math.round(mW * EW)), NW.height = Math.max(1, Math.round(iW.height * EW));
              const PW = NW.getContext("2d", {
                willReadFrequently: !0
              });
              if (!PW) return null;
              if (PW.drawImage(iW, OW, 0, mW, iW.height, 0, 0, NW.width, NW.height), !MW(PW.getImageData(0, 0, NW.width, NW.height).data)) return null;
              return NW.toDataURL("image/webp", .85)
            }(kW(WW)) : null;
            null !== NW || EW <= 1 || !WW.isConnected ? OW(NW) : mW(EW - 1)
          }))
        };
        mW(AW)
      }))
    }

    function kW(WW) {
      const iW = Math.min(WW.width, Math.round(WW.height * tW.c));
      return {
        canvas: WW,
        x: Math.round((WW.width - iW) / 2),
        width: iW
      }
    }
    let sW = null;

    function MW(WW) {
      for (let iW = 3; iW < WW.length; iW += 4)
        if (0 !== WW[iW]) return !0;
      return !1
    }
    async function KW(WW) {
      var iW;
      await wW.k.load();
      const OW = {
          name: WW.name,
          info: null,
          colour: null !== (iW = WW.nameColour) && void 0 !== iW ? iW : "default",
          ranks: WW.ranks,
          effects: [],
          health: null,
          TP: null,
          hideNameSeed: null,
          player: !WW.isYou
        },
        mW = document.createElement("canvas"),
        [EW, NW] = (0, cW.h)((0, cW.i)(cW.d.Nametag, OW), mW, !0);
      return 0 === EW || 0 === NW ? null : {
        src: mW.toDataURL("image/png"),
        width: EW,
        height: NW
      }
    }
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
  },
  37343: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(WW, iW).getContext("2d", OW);
      const mW = document.createElement("canvas");
      return mW.width = WW, mW.height = iW, mW.getContext("2d", OW)
    }

    function EW(WW, iW) {
      return WW.getContext("2d", iW)
    }
    OW.d(iW, {
      c: () => EW,
      g: () => mW
    })
  },
  37327: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    const mW = 4e5,
      EW = 2;

    function NW(WW, iW, OW) {
      let [NW, PW] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [WW, iW], LW = Math.min(Number.isFinite(OW) && OW > 0 ? OW : 1, EW);
      const cW = Math.max(0, NW, WW) * Math.max(0, PW, iW) * LW * LW;
      return cW > mW && (LW *= Math.sqrt(mW / cW)), [Math.max(1, Math.floor(Math.max(0, WW) * LW)), Math.max(1, Math.floor(Math.max(0, iW) * LW))]
    }
  },
  37325: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => jW,
      d: () => tW,
      g: () => lW,
      j: () => ZW,
      l: () => UW,
      o: () => AW,
      r: () => bW,
      t: () => xW
    });
    const mW = 30,
      EW = 4;
    let NW = 0,
      PW = !1,
      LW = !1,
      cW = Number.NEGATIVE_INFINITY,
      wW = [];

    function tW() {
      0 === NW && (PW = !1, LW = !1), NW++;
      let WW = !1;
      return () => {
        WW || (WW = !0, NW--)
      }
    }

    function ZW(WW) {
      WW && (LW = !0)
    }

    function xW() {
      return LW
    }

    function lW(WW) {
      PW = WW
    }

    function AW() {
      return NW > 0
    }

    function bW(WW) {
      return !(NW > 0 && (PW || WW - cW < 1e3 / mW - EW)) && (cW = WW, !0)
    }

    function jW(WW) {
      return wW.push(WW), () => {
        wW = wW.filter((iW => iW !== WW))
      }
    }

    function UW() {
      if (0 === wW.length) return;
      const WW = wW;
      wW = [];
      for (const OW of WW) try {
        OW()
      } catch (iW) {
        console.warn("[bloxd-previews] an after-draw callback threw", iW)
      }
    }
  },
  37446: (WW, iW, OW) => {
    function mW() {
      return OW(37453)
    }

    function EW() {
      return OW(37460)
    }

    function NW(WW) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(WW)
    }
    OW.d(iW, {
      b: () => NW,
      d: () => mW,
      h: () => EW
    })
  },
  37453: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37460: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);