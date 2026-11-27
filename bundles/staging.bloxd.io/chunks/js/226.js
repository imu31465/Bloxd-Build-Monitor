export const id = 226;
export const ids = [226];
export const modules = {
  37224: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      capturePreviewPicture: () => nR,
      holdPreviewsLow: () => ZR.i,
      openLiveFigure: () => LR,
      rasterNametag: () => CR
    });
    var yR = GR(1336),
      tR = GR(3644),
      uR = GR(35193),
      ZR = GR(37232),
      qR = GR(37238),
      iR = GR(37247),
      fR = GR(37341),
      VR = GR(4790);
    const KR = 480,
      wR = 16,
      rR = {
        minGapMs: 250,
        now: () => performance.now(),
        skip: ZR.u
      },
      eR = 30,
      aR = 1e4;

    function LR(RR, JR, GR, iR) {
      const fR = uR.g.openCharacter(RR, "player");
      let VR = !1,
        KR = !1,
        eR = null;
      const LR = async () => {
        const RR = fR.dev.canvas(),
          JR = await (yR = () => RR.isConnected && function(RR) {
            const {
              x: JR,
              width: GR
            } = UR(RR);
            if (0 === GR || 0 === RR.height) return !1;
            if (WR ??= document.createElement("canvas").getContext("2d", {
                willReadFrequently: !0
              }), null === WR) return !1;
            const yR = WR.canvas;
            yR.height = Math.min(RR.height, wR), yR.width = Math.max(1, Math.round(GR * yR.height / RR.height));
            const tR = WR;
            return tR.imageSmoothingQuality = "high", tR.drawImage(RR, JR, 0, GR, RR.height, 0, 0, yR.width, yR.height), AR(tR.getImageData(0, 0, yR.width, yR.height).data)
          }(RR), tR = ZR.e, uR = () => !VR && fR.isReady(), qR = rR, new Promise((RR => {
            let JR = Number.NEGATIVE_INFINITY;
            const GR = () => {
              tR((() => {
                try {
                  if (!uR()) return void RR(!1);
                  if (qR.skip()) return void RR(!0);
                  const tR = qR.now();
                  if (tR - JR >= qR.minGapMs && (JR = tR, yR())) return void RR(!0);
                  GR()
                } catch (tR) {
                  console.warn("[loading-character] couldn't read a figure's frame", tR), RR(!1)
                }
              }))
            };
            GR()
          })));
        var yR, tR, uR, qR;
        return !JR || VR || KR || (KR = !0, GR(!0)), JR
      };
      return fR.ready.then((() => {
        if (VR) return !1;
        for (const ZR of yR.w) {
          var RR;
          fR.setCosmetic(ZR, null !== (RR = JR.cosmetics[ZR]) && void 0 !== RR ? RR : (0, tR.c)(ZR))
        }
        const GR = Promise.all(yR.w.map((RR => fR.untilDrawn(RR)))).then((() => !0)),
          uR = new Promise((RR => {
            setTimeout((() => {
              (0, ZR.e)((() => {
                RR(!1)
              }))
            }), aR)
          }));
        return Promise.race([GR, uR])
      })).then((async RR => {
        if (!VR && fR.isReady() && await LR() && RR) return nR(fR.dev.canvas(), (() => !VR && fR.isReady())).then((RR => {
          null === RR || VR || iR(RR)
        }))
      })).catch((RR => {
        console.warn("[loading-character] a figure couldn't draw", RR)
      })), {
        resize: (RR, JR) => {
          const yR = (0, qR.e)(RR, JR, window.devicePixelRatio),
            tR = null !== eR && (eR[0] !== yR[0] || eR[1] !== yR[1]);
          eR = yR, fR.resize(RR, JR), tR && KR && (KR = !1, GR(!1), LR())
        },
        close: () => {
          VR = !0, fR.close()
        }
      }
    }

    function nR(RR, JR) {
      return new Promise((GR => {
        const yR = tR => {
          (0, ZR.e)((() => {
            if (!JR()) return void GR(null);
            const uR = RR.isConnected ? function(RR) {
              let {
                canvas: JR,
                x: GR,
                width: yR
              } = RR;
              if (0 === yR || 0 === JR.height) return null;
              const tR = Math.min(1, KR / JR.height),
                uR = document.createElement("canvas");
              uR.width = Math.max(1, Math.round(yR * tR)), uR.height = Math.max(1, Math.round(JR.height * tR));
              const ZR = uR.getContext("2d", {
                willReadFrequently: !0
              });
              if (!ZR) return null;
              if (ZR.drawImage(JR, GR, 0, yR, JR.height, 0, 0, uR.width, uR.height), !AR(ZR.getImageData(0, 0, uR.width, uR.height).data)) return null;
              return uR.toDataURL("image/webp", .85)
            }(UR(RR)) : null;
            null !== uR || tR <= 1 || !RR.isConnected ? GR(uR) : yR(tR - 1)
          }))
        };
        yR(eR)
      }))
    }

    function UR(RR) {
      const JR = Math.min(RR.width, Math.round(RR.height * VR.e));
      return {
        canvas: RR,
        x: Math.round((RR.width - JR) / 2),
        width: JR
      }
    }
    let WR = null;

    function AR(RR) {
      for (let JR = 3; JR < RR.length; JR += 4)
        if (0 !== RR[JR]) return !0;
      return !1
    }
    async function CR(RR) {
      var JR;
      await fR.i.load();
      const GR = {
          name: RR.name,
          info: null,
          colour: null !== (JR = RR.nameColour) && void 0 !== JR ? JR : "default",
          ranks: RR.ranks,
          effects: [],
          health: null,
          xZ: null,
          hideNameSeed: null,
          player: !RR.isYou
        },
        yR = document.createElement("canvas"),
        [tR, uR] = (0, iR.f)((0, iR.h)(iR.b.Nametag, GR), yR, !0);
      return 0 === tR || 0 === uR ? null : {
        src: yR.toDataURL("image/png"),
        width: tR,
        height: uR
      }
    }
  },
  35195: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      i: () => tR,
      l: () => KR
    });
    var yR = GR(1718);

    function tR(RR) {
      var JR;
      return {
        ...qR.store,
        yaw: qR.store.yaw + (null !== (JR = yR.b[RR].previewYaw) && void 0 !== JR ? JR : 0)
      }
    }
    const uR = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      ZR = {
        ...uR,
        radius: 33,
        target: [0, 3.9, 0]
      },
      qR = {
        player: uR,
        store: ZR,
        showcase: {
          ...ZR,
          target: [0, 1.9, 0]
        }
      };

    function iR(RR, JR) {
      RR instanceof Promise ? RR.then(JR).catch((RR => {
        console.error("Couldn't open the preview", RR)
      })) : JR(RR)
    }
    class fR {
      constructor(RR) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height), null !== this.view && RR.show(this.view))
        }))
      }
      show(RR) {
        var JR;
        this.view = RR, null === (JR = this.opened) || void 0 === JR || JR.show(RR)
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    class VR {
      constructor(RR) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(RR).then((RR => RR.ready)), iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var RR, JR;
        return null !== (RR = null === (JR = this.opened) || void 0 === JR ? void 0 : JR.isReady()) && void 0 !== RR && RR
      }
      setCosmetic(RR, JR) {
        var GR;
        null === (GR = this.opened) || void 0 === GR || GR.setCosmetic(RR, JR)
      }
      setNametag(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setNametag(RR)
      }
      playEmote(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.playEmote(RR)
      }
      setOrbit(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setOrbit(RR)
      }
      resetCamera() {
        var RR;
        null === (RR = this.opened) || void 0 === RR || RR.resetCamera()
      }
      async untilDrawn(RR) {
        var JR;
        await this.ready, await (null === (JR = this.opened) || void 0 === JR ? void 0 : JR.untilDrawn(RR))
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    const KR = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(RR) {
        this.host = RR
      }
      setDefaultHost(RR) {
        this.makeDefault = RR
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(RR) {
        return new fR(this.current().openMob(RR))
      }
      openPet(RR) {
        return new fR(this.current().openPet(RR))
      }
      openMobLineup(RR) {
        return new fR(this.current().openMobLineup(RR))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(RR, JR) {
        return new VR(this.current().openCharacter(RR, JR))
      }
    }
  },
  35193: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR.e,
      e: () => yR.i,
      g: () => yR.l
    });
    var yR = GR(35195);
    class tR {
      constructor(RR) {
        this.load = RR, this.loaded = null, this.loading = null
      }
      run(RR) {
        return null !== this.loaded ? RR(this.loaded) : (this.loading ??= this.load().then((RR => (this.loaded = RR, RR)), (RR => {
          throw this.loading = null, RR
        })), this.loading.then(RR))
      }
    }
    class uR {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new tR((() => Promise.all([GR.e(85), GR.e(264), GR.e(263), GR.e(289), GR.e(113), GR.e(290), GR.e(89), GR.e(86), GR.e(287), GR.e(87), GR.e(88), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(311), GR.e(260), GR.e(278), GR.e(292), GR.e(295), GR.e(91), GR.e(252), GR.e(266), GR.e(112), GR.e(124), GR.e(257), GR.e(142), GR.e(90), GR.e(122), GR.e(310)]).then((() => GR(42616))))), this.characterScene = new tR((() => Promise.all([GR.e(85), GR.e(264), GR.e(263), GR.e(289), GR.e(113), GR.e(290), GR.e(89), GR.e(86), GR.e(287), GR.e(87), GR.e(88), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(311), GR.e(177), GR.e(260), GR.e(278), GR.e(292), GR.e(295), GR.e(91), GR.e(224), GR.e(252), GR.e(266), GR.e(112), GR.e(124), GR.e(257), GR.e(142), GR.e(90), GR.e(122), GR.e(279), GR.e(184)]).then((() => GR(42729)))))
      }
      openMob(RR) {
        return this.mobScene.run((JR => JR.openMobPreview(RR)))
      }
      openPet(RR) {
        return this.mobScene.run((JR => JR.openPetPreview(RR)))
      }
      openMobLineup(RR) {
        return this.mobScene.run((JR => JR.openMobLineupPreview(RR)))
      }
      openCharacter(RR, JR) {
        return this.characterScene.run((GR => GR.openCharacterPreview(RR, JR)))
      }
    }
    yR.l.setDefaultHost((() => new uR))
  },
  37256: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(RR, JR).getContext("2d", GR);
      const yR = document.createElement("canvas");
      return yR.width = RR, yR.height = JR, yR.getContext("2d", GR)
    }

    function tR(RR, JR) {
      return RR.getContext("2d", JR)
    }
    GR.d(JR, {
      c: () => tR,
      e: () => yR
    })
  },
  37238: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    const yR = 4e5,
      tR = 2;

    function uR(RR, JR, GR) {
      let [uR, ZR] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [RR, JR], qR = Math.min(Number.isFinite(GR) && GR > 0 ? GR : 1, tR);
      const iR = Math.max(0, uR, RR) * Math.max(0, ZR, JR) * qR * qR;
      return iR > yR && (qR *= Math.sqrt(yR / iR)), [Math.max(1, Math.floor(Math.max(0, RR) * qR)), Math.max(1, Math.floor(Math.max(0, JR) * qR))]
    }
  },
  37232: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR,
      i: () => VR,
      m: () => rR,
      o: () => KR,
      q: () => nR,
      r: () => eR,
      s: () => aR,
      u: () => wR
    });
    const yR = 30,
      tR = 4;
    let uR = 0,
      ZR = !1,
      qR = !1,
      iR = Number.NEGATIVE_INFINITY,
      fR = [];

    function VR() {
      0 === uR && (ZR = !1, qR = !1), uR++;
      let RR = !1;
      return () => {
        RR || (RR = !0, uR--)
      }
    }

    function KR(RR) {
      RR && (qR = !0)
    }

    function wR() {
      return qR
    }

    function rR(RR) {
      ZR = RR
    }

    function eR() {
      return uR > 0
    }

    function aR(RR) {
      return !(uR > 0 && (ZR || RR - iR < 1e3 / yR - tR)) && (iR = RR, !0)
    }

    function LR(RR) {
      return fR.push(RR), () => {
        fR = fR.filter((JR => JR !== RR))
      }
    }

    function nR() {
      if (0 === fR.length) return;
      const RR = fR;
      fR = [];
      for (const GR of RR) try {
        GR()
      } catch (JR) {
        console.warn("[bloxd-previews] an after-draw callback threw", JR)
      }
    }
  },
  37362: (RR, JR, GR) => {
    function yR() {
      return GR(37370)
    }

    function tR() {
      return GR(37379)
    }

    function uR(RR) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(RR)
    }
    GR.d(JR, {
      c: () => uR,
      f: () => yR,
      j: () => tR
    })
  },
  37370: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37379: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);