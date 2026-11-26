export const id = 221;
export const ids = [221];
export const modules = {
  37093: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      capturePreviewPicture: () => MH,
      holdPreviewsLow: () => hH.f,
      openLiveFigure: () => WH,
      rasterNametag: () => TH
    });
    var AH = LH(1182),
      rH = LH(2760),
      SH = LH(35016),
      hH = LH(37100),
      tH = LH(37105),
      zH = LH(37110),
      CH = LH(37157),
      EH = LH(3840);
    const XH = 480,
      GH = 16,
      YH = {
        minGapMs: 250,
        now: () => performance.now(),
        skip: hH.p
      },
      uH = 30,
      QH = 1e4;

    function WH(HH, BH, LH, zH) {
      const CH = SH.h.openCharacter(HH, "player");
      let EH = !1,
        XH = !1,
        uH = null;
      const WH = async () => {
        const HH = CH.dev.canvas(),
          BH = await (AH = () => HH.isConnected && function(HH) {
            const {
              x: BH,
              width: LH
            } = xH(HH);
            if (0 === LH || 0 === HH.height) return !1;
            if (vH ??= document.createElement("canvas").getContext("2d", {
                willReadFrequently: !0
              }), null === vH) return !1;
            const AH = vH.canvas;
            AH.height = Math.min(HH.height, GH), AH.width = Math.max(1, Math.round(LH * AH.height / HH.height));
            const rH = vH;
            return rH.imageSmoothingQuality = "high", rH.drawImage(HH, BH, 0, LH, HH.height, 0, 0, AH.width, AH.height), PH(rH.getImageData(0, 0, AH.width, AH.height).data)
          }(HH), rH = hH.d, SH = () => !EH && CH.isReady(), tH = YH, new Promise((HH => {
            let BH = Number.NEGATIVE_INFINITY;
            const LH = () => {
              rH((() => {
                try {
                  if (!SH()) return void HH(!1);
                  if (tH.skip()) return void HH(!0);
                  const rH = tH.now();
                  if (rH - BH >= tH.minGapMs && (BH = rH, AH())) return void HH(!0);
                  LH()
                } catch (rH) {
                  console.warn("[loading-character] couldn't read a figure's frame", rH), HH(!1)
                }
              }))
            };
            LH()
          })));
        var AH, rH, SH, tH;
        return !BH || EH || XH || (XH = !0, LH(!0)), BH
      };
      return CH.ready.then((() => {
        if (EH) return !1;
        for (const hH of AH.r) {
          var HH;
          CH.setCosmetic(hH, null !== (HH = BH.cosmetics[hH]) && void 0 !== HH ? HH : (0, rH.d)(hH))
        }
        const LH = Promise.all(AH.r.map((HH => CH.untilDrawn(HH)))).then((() => !0)),
          SH = new Promise((HH => {
            setTimeout((() => {
              (0, hH.d)((() => {
                HH(!1)
              }))
            }), QH)
          }));
        return Promise.race([LH, SH])
      })).then((async HH => {
        if (!EH && CH.isReady() && await WH() && HH) return MH(CH.dev.canvas(), (() => !EH && CH.isReady())).then((HH => {
          null === HH || EH || zH(HH)
        }))
      })).catch((HH => {
        console.warn("[loading-character] a figure couldn't draw", HH)
      })), {
        resize: (HH, BH) => {
          const AH = (0, tH.e)(HH, BH, window.devicePixelRatio),
            rH = null !== uH && (uH[0] !== AH[0] || uH[1] !== AH[1]);
          uH = AH, CH.resize(HH, BH), rH && XH && (XH = !1, LH(!1), WH())
        },
        close: () => {
          EH = !0, CH.close()
        }
      }
    }

    function MH(HH, BH) {
      return new Promise((LH => {
        const AH = rH => {
          (0, hH.d)((() => {
            if (!BH()) return void LH(null);
            const SH = HH.isConnected ? function(HH) {
              let {
                canvas: BH,
                x: LH,
                width: AH
              } = HH;
              if (0 === AH || 0 === BH.height) return null;
              const rH = Math.min(1, XH / BH.height),
                SH = document.createElement("canvas");
              SH.width = Math.max(1, Math.round(AH * rH)), SH.height = Math.max(1, Math.round(BH.height * rH));
              const hH = SH.getContext("2d", {
                willReadFrequently: !0
              });
              if (!hH) return null;
              if (hH.drawImage(BH, LH, 0, AH, BH.height, 0, 0, SH.width, SH.height), !PH(hH.getImageData(0, 0, SH.width, SH.height).data)) return null;
              return SH.toDataURL("image/webp", .85)
            }(xH(HH)) : null;
            null !== SH || rH <= 1 || !HH.isConnected ? LH(SH) : AH(rH - 1)
          }))
        };
        AH(uH)
      }))
    }

    function xH(HH) {
      const BH = Math.min(HH.width, Math.round(HH.height * EH.c));
      return {
        canvas: HH,
        x: Math.round((HH.width - BH) / 2),
        width: BH
      }
    }
    let vH = null;

    function PH(HH) {
      for (let BH = 3; BH < HH.length; BH += 4)
        if (0 !== HH[BH]) return !0;
      return !1
    }
    async function TH(HH) {
      var BH;
      await CH.h.load();
      const LH = {
          name: HH.name,
          info: null,
          colour: null !== (BH = HH.nameColour) && void 0 !== BH ? BH : "default",
          ranks: HH.ranks,
          effects: [],
          health: null,
          Ot: null,
          hideNameSeed: null,
          player: !HH.isYou
        },
        AH = document.createElement("canvas"),
        [rH, SH] = (0, zH.i)((0, zH.k)(zH.e.Nametag, LH), AH, !0);
      return 0 === rH || 0 === SH ? null : {
        src: AH.toDataURL("image/png"),
        width: rH,
        height: SH
      }
    }
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
  },
  37112: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(HH, BH).getContext("2d", LH);
      const AH = document.createElement("canvas");
      return AH.width = HH, AH.height = BH, AH.getContext("2d", LH)
    }

    function rH(HH, BH) {
      return HH.getContext("2d", BH)
    }
    LH.d(BH, {
      d: () => rH,
      h: () => AH
    })
  },
  37105: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    const AH = 4e5,
      rH = 2;

    function SH(HH, BH, LH) {
      let [SH, hH] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [HH, BH], tH = Math.min(Number.isFinite(LH) && LH > 0 ? LH : 1, rH);
      const zH = Math.max(0, SH, HH) * Math.max(0, hH, BH) * tH * tH;
      return zH > AH && (tH *= Math.sqrt(AH / zH)), [Math.max(1, Math.floor(Math.max(0, HH) * tH)), Math.max(1, Math.floor(Math.max(0, BH) * tH))]
    }
  },
  37162: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      h: () => zH,
      k: () => tH,
      l: () => CH
    });
    var AH = LH(2010);
    let rH = null,
      SH = 0;
    const hH = new Set;

    function tH() {
      return rH
    }

    function zH() {
      return SH
    }

    function CH(HH) {
      rH = HH, SH++, (0, AH.e)();
      for (const BH of hH) BH()
    }

    function EH(HH) {
      hH.add(HH)
    }
  },
  37100: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => QH,
      f: () => EH,
      i: () => YH,
      j: () => XH,
      k: () => WH,
      l: () => uH,
      p: () => GH
    });
    const AH = 30,
      rH = 4;
    let SH = 0,
      hH = !1,
      tH = !1,
      zH = Number.NEGATIVE_INFINITY,
      CH = [];

    function EH() {
      0 === SH && (hH = !1, tH = !1), SH++;
      let HH = !1;
      return () => {
        HH || (HH = !0, SH--)
      }
    }

    function XH(HH) {
      HH && (tH = !0)
    }

    function GH() {
      return tH
    }

    function YH(HH) {
      hH = HH
    }

    function uH(HH) {
      return !(SH > 0 && (hH || HH - zH < 1e3 / AH - rH)) && (zH = HH, !0)
    }

    function QH(HH) {
      CH.push(HH)
    }

    function WH() {
      if (0 === CH.length) return;
      const HH = CH;
      CH = [];
      for (const LH of HH) try {
        LH()
      } catch (BH) {
        console.warn("[bloxd-previews] an after-draw callback threw", BH)
      }
    }
  },
  37177: (HH, BH, LH) => {
    function AH() {
      return LH(37184)
    }

    function rH() {
      return LH(37187)
    }

    function SH(HH) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(HH)
    }
    LH.d(BH, {
      e: () => SH,
      h: () => AH,
      k: () => rH
    })
  },
  37110: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => WH,
      i: () => jH,
      k: () => IH,
      o: () => KH
    });
    var AH = LH(37146),
      rH = LH(37112),
      SH = LH(37120),
      hH = LH(37127);

    function tH(HH, BH, LH) {
      const AH = "object" === typeof HH && null !== HH ? HH : {},
        rH = function(HH, BH, LH) {
          if (!Array.isArray(HH) || 0 === HH.length) return [];
          const AH = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const tH of (0, hH.i)(HH, hH.e.DEFAULT_FONT_SIZE, LH)) {
            if ("text" !== tH.kind) {
              AH[AH.length - 1].items.push({
                content: tH,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === tH.text.length) continue;
            const HH = AH[AH.length - 1].items.reduce(((HH, BH) => HH + ("text" === BH.content.kind ? (0, SH.b)(BH.content.text) : BH.chars)), 0);
            (0, SH.e)(tH.text, HH).forEach(((HH, BH) => {
              BH > 0 && AH.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), HH.length > 0 && AH[AH.length - 1].items.push({
                content: {
                  ...tH,
                  text: HH
                },
                chars: HH.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let rH = hH.e.VERTICAL_PADDING / 2;
          for (const SH of AH) {
            if (0 === SH.items.length) continue;
            const {
              width: HH,
              height: AH,
              sizes: tH
            } = (0, hH.h)(SH.items.map((HH => HH.content)), BH, LH);
            SH.items.forEach(((HH, BH) => {
              HH.size = tH[BH]
            })), SH.width = HH, SH.height = AH, SH.y = rH, rH += AH + hH.e.LINE_SPACING
          }
          return AH
        }(AH.content, BH, LH);
      let tH = 0,
        zH = hH.e.VERTICAL_PADDING,
        CH = 0;
      for (const SH of rH) {
        tH = Math.max(tH, SH.width + 2 * hH.e.HORIZONTAL_PADDING), zH += SH.height + hH.e.LINE_SPACING;
        for (const HH of SH.items) CH += HH.chars
      }
      const EH = "string" === typeof AH.backgroundColor ? AH.backgroundColor : "#22283b";
      return {
        width: tH,
        height: zH,
        chars: CH,
        draw: (HH, BH) => {
          const AH = [];
          if (HH.fillStyle = EH, HH.fillRect(0, 0, tH, zH), null === BH)
            for (const SH of rH) SH.items.length > 0 && (0, hH.t)(SH.items.map((HH => HH.content)), 0, SH.y, SH.height, HH, LH, AH);
          else {
            let SH = 0;
            for (const tH of rH)
              for (const rH of tH.items) {
                if (SH >= BH) break;
                const zH = "text" === rH.content.kind ? {
                  ...rH.content,
                  text: rH.content.text.substring(0, BH - SH)
                } : rH.content;
                (0, hH.p)(zH, rH.size.x, tH.y, tH.height, HH, LH, AH, rH.size.width), SH += rH.chars
              }
          }(0, hH.m)(AH, HH)
        }
      }
    }
    var zH = LH(37135),
      CH = LH(37139);
    const EH = 256,
      XH = 1024,
      GH = {
        width: 1,
        height: 7 / 8
      };
    var YH = LH(37149);
    const uH = {
      leaderboard: ""
    };
    var QH = LH(37157);
    const WH = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      MH = 2048,
      xH = 256,
      vH = 10,
      PH = 4,
      TH = 65536,
      UH = new TextDecoder;
    let VH = QH.o,
      OH = -1;
    const bH = new Map,
      kH = new Map;
    let mH = 0;
    const oH = new TextEncoder;

    function IH(HH, BH) {
      const LH = oH.encode(JSON.stringify(BH)),
        AH = new Uint8Array(LH.length + 1);
      return AH[0] = HH, AH.set(LH, 1), AH
    }
    const fH = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        Ot: null,
        hideNameSeed: null
      },
      lH = [IH(WH.Nametag, fH), IH(WH.Nametag, {
        ...fH,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), IH(WH.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...AH.c.map(((HH, BH) => IH(WH.Board, {
        shared: {
          text: "Ag",
          textSize: BH
        },
        w: 0,
        h: 0
      })))];

    function KH(HH) {
      QH.h.load().then((() => {
        if (HH()) return;
        const BH = (0, rH.h)(1, 1, {
          willReadFrequently: !0
        });
        var LH;
        BH && (LH = BH.canvas, lH.map((HH => jH(HH, LH))))
      }))
    }
    let cH = QH.q;

    function eH() {
      bH.clear(), kH.clear()
    }

    function qH(HH, BH) {
      const LH = HH.get(BH);
      return void 0 !== LH && (HH.delete(BH), HH.set(BH, LH)), LH
    }

    function gH(HH, BH, LH) {
      HH.set(BH, LH), HH.size > xH && HH.delete(HH.keys().next().value)
    }

    function NH(HH, BH, LH) {
      if (HH === WH.Nametag) {
        let HH = qH(bH, BH);
        return void 0 === HH && (HH = (0, zH.e)(JSON.parse(BH), LH, VH), gH(bH, BH, HH)), HH
      }
      if (HH === WH.MultilineText) {
        var rH;
        const HH = JSON.parse(BH),
          AH = JSON.stringify(null !== (rH = HH.box) && void 0 !== rH ? rH : null),
          SH = "number" === typeof HH.shown ? HH.shown : null;
        let hH = qH(kH, AH);
        void 0 === hH && (hH = tH(HH.box, LH, VH), gH(kH, AH, hH));
        const zH = null === SH ? null : Math.min(Math.max(0, Math.floor(SH)), hH.chars),
          CH = hH;
        return {
          width: CH.width,
          height: CH.height,
          draw: HH => {
            CH.draw(HH, zH)
          }
        }
      }
      if (HH === WH.Board) return function(HH, BH) {
        var LH;
        if (!BH.canSeePlayerWrittenText) return null;
        const {
          shared: rH,
          w: SH = 0,
          h: hH = 0
        } = HH, tH = !SH;
        let zH;
        if (tH) {
          var YH, uH;
          zH = null !== (YH = null === rH || void 0 === rH || null === (uH = rH.text) || void 0 === uH ? void 0 : uH.toString()) && void 0 !== YH ? YH : ""
        } else {
          if ("string" !== typeof(null === rH || void 0 === rH ? void 0 : rH.text)) return null;
          zH = rH.text
        }
        if ("" === zH.trim()) return null;
        const QH = null !== (LH = null === rH || void 0 === rH ? void 0 : rH.textSize) && void 0 !== LH ? LH : 0,
          WH = AH.c[QH].ingameFontSize;
        let MH = GH,
          xH = EH;
        tH || (zH = (0, AH.n)(zH, QH, SH, hH), MH = (0, AH.u)(SH, hH), xH = Math.min(EH, XH / Math.max(MH.width, MH.height)));
        const vH = Math.round(xH * MH.width),
          PH = Math.round(xH * MH.height),
          TH = xH / EH;
        return {
          width: vH,
          height: PH,
          draw: HH => {
            CH.d.fontSize = WH * TH, CH.d.fontWeight = "bold", CH.d.font = "'Jetbrains Mono', monospace", CH.d.drawText(HH, zH, 0, (-10 - 7 * QH) * TH, vH, PH)
          }
        }
      }(JSON.parse(BH), VH);
      if (HH === WH.Leaderboard) return function(HH, BH, LH) {
        var AH;
        const rH = (0, YH.f)(HH.opts, uH),
          SH = (0, YH.d)(rH, LH),
          hH = {
            top: (0, YH.e)(rH, (0, YH.g)(HH.top)),
            around: null !== (AH = HH.around) && void 0 !== AH ? AH : null,
            showPlayerText: BH.canSeePlayerWrittenText,
            localPlayerDbId: BH.localPlayerDbId
          };
        return {
          width: SH.pixelWidth,
          height: SH.pixelHeight,
          draw: HH => {
            const {
              a: BH,
              d: LH
            } = HH.getTransform();
            (0, YH.b)(HH, Math.round(SH.pixelWidth * BH), Math.round(SH.pixelHeight * LH), SH, rH, hH)
          }
        }
      }(JSON.parse(BH), VH, MH);
      throw new Error(`unknown text plane kind ${HH}`)
    }
    const RH = 2 ** Math.floor(Math.log2(MH));

    function jH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (HH.length < 2) return [0, 0];
        const SH = (0, rH.d)(BH);
        if (!SH) return [0, 0];
        const hH = cH();
        hH !== OH && (OH = hH, eH());
        const [tH] = HH, zH = UH.decode(HH.subarray(1));
        let CH;
        tH !== WH.Board && tH !== WH.Leaderboard || !VH.canSeePlayerWrittenText || VH.glyphsShown(zH), SH.save();
        try {
          CH = NH(tH, zH, SH)
        } finally {
          SH.restore()
        }
        if (null === CH || !(CH.width > 0 && CH.height > 0)) return [0, 0];
        const EH = Math.min(1, MH / CH.width, MH / CH.height),
          XH = HH => AH ? function(HH) {
            const BH = 2 ** Math.ceil(Math.log2(HH));
            return Math.min(RH, BH - HH > HH - BH / 2 ? BH / 2 : BH)
          }(HH) : Math.min(MH, Math.ceil(HH * EH)),
          [GH, YH] = [XH(CH.width), XH(CH.height)];
        ! function(HH, BH, LH, AH, rH) {
          const SH = Math.max(HH.width, LH),
            hH = Math.max(HH.height, AH),
            tH = rH || SH * hH > Math.max(PH * LH * AH, TH),
            [zH, CH] = tH ? [LH, AH] : [SH, hH];
          zH === HH.width && CH === HH.height ? BH.clearRect(0, 0, zH, CH) : (HH.width = zH, HH.height = CH)
        }(BH, SH, GH, YH, LH), SH.save();
        try {
          const [HH, BH] = AH ? [GH / CH.width, YH / CH.height] : [EH, EH];
          1 === HH && 1 === BH || SH.scale(HH, BH), CH.draw(SH)
        } finally {
          SH.restore()
        }
        return [GH, YH]
      } catch (SH) {
        ! function(HH, BH) {
          mH < vH && (mH++, console.warn(`[bloxd-wasm-client] ${HH}`, BH))
        }("could not raster a text plane", SH);
        try {
          BH.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  37184: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37187: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);