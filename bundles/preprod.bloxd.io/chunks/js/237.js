export const id = 237;
export const ids = [237];
export const modules = {
  44796: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CharacterPreview: () => WH
    });
    var AH = LH(45),
      rH = LH(3018),
      SH = LH(1182),
      hH = LH(2760),
      tH = LH(35016),
      zH = LH(3991),
      CH = LH(37112),
      EH = LH(37135),
      XH = LH(37157),
      GH = LH(1225);

    function YH(HH) {
      let {
        nametag: BH
      } = HH;
      const LH = (0, AH.useRef)(null),
        {
          height: SH
        } = (0, rH.c)(LH),
        [hH, tH] = (0, AH.useState)(!1),
        {
          name: zH,
          ranks: YH,
          nameColour: uH
        } = BH;
      return (0, AH.useEffect)((() => {
        let HH = !0;
        return XH.h.untilLoadedFor(zH).then((() => {
          HH && tH(!0)
        })), () => {
          HH = !1
        }
      }), [zH]), (0, AH.useEffect)((() => {
        if (!hH || SH <= 0) return;
        const HH = LH.current,
          BH = (0, CH.d)(HH),
          AH = () => {
            const LH = (0, EH.e)({
              name: zH,
              ranks: YH,
              colour: uH,
              player: !1
            }, BH, XH.o, {
              nameAsGiven: !0
            });
            if (null === LH) return HH.width = 0, void(HH.height = 0);
            const AH = SH * devicePixelRatio / LH.height;
            HH.width = Math.ceil(LH.width * AH), HH.height = Math.ceil(LH.height * AH), BH.scale(AH, AH), LH.draw(BH)
          };
        return AH(), (0, XH.g)(AH)
      }), [hH, SH, zH, YH, uH]), (0, GH.jsx)("canvas", {
        ref: LH,
        className: "CharacterPreviewNametag",
        role: "img",
        "aria-label": zH,
        style: {
          visibility: hH ? void 0 : "hidden"
        }
      })
    }
    let uH = null;
    const QH = .6 * Math.PI,
      WH = (0, AH.memo)((0, AH.forwardRef)((function(HH, BH) {
        let {
          onReady: LH,
          onDrawn: CH,
          owner: EH = "other",
          framing: XH = "player",
          forcedCosmetics: WH,
          zE: MH,
          emotePlaySeq: xH,
          turntableFromYaw: vH = null,
          nametag: PH
        } = HH;
        const TH = (0, AH.useRef)(null),
          {
            width: UH,
            height: VH
          } = (0, rH.c)(TH),
          OH = (0, AH.useRef)(null),
          bH = (0, AH.useRef)({}),
          kH = (0, AH.useRef)({}),
          [mH, oH] = (0, AH.useState)(!1),
          IH = (0, AH.useRef)(LH);
        IH.current = LH;
        const fH = (0, AH.useRef)(CH);
        fH.current = CH;
        const lH = (0, AH.useRef)(null),
          KH = (0, AH.useRef)(!1),
          cH = (0, AH.useRef)(!1),
          eH = (0, AH.useCallback)((() => {
            const HH = OH.current;
            if (!HH || !fH.current || KH.current || !cH.current) return;
            const BH = {};
            lH.current = BH, queueMicrotask((() => {
              if (lH.current !== BH) return;
              const LH = Promise.all(SH.r.map((BH => HH.untilDrawn(BH)))).then((() => !0), (HH => (console.error("Failed to draw the character preview", HH), !1))),
                AH = new Promise((HH => {
                  setTimeout((() => {
                    HH(!1)
                  }), 1e4)
                }));
              Promise.race([LH, AH]).then((LH => {
                var AH;
                OH.current !== HH || lH.current !== BH || KH.current || (KH.current = !0, null === (AH = fH.current) || void 0 === AH || AH.call(fH, LH))
              }))
            }))
          }), []);
        return (0, AH.useImperativeHandle)(BH, (() => {
          const HH = (HH, BH) => {
            var LH;
            (bH.current[HH] = BH, null !== WH && void 0 !== WH && WH[HH]) || (null === (LH = OH.current) || void 0 === LH || LH.setCosmetic(HH, BH), eH())
          };
          return {
            updateCosmetic: HH,
            setAllCosmetics(BH) {
              for (const AH of SH.r) {
                var LH;
                HH(AH, null !== (LH = BH[AH]) && void 0 !== LH ? LH : (0, hH.d)(AH))
              }
            },
            isReady() {
              var HH, BH;
              return null !== (HH = null === (BH = OH.current) || void 0 === BH ? void 0 : BH.isReady()) && void 0 !== HH && HH
            },
            resetCamera() {
              var HH;
              null === (HH = OH.current) || void 0 === HH || HH.resetCamera()
            },
            setOrbit(HH) {
              var BH;
              null === (BH = OH.current) || void 0 === BH || BH.setOrbit(HH)
            },
            turnCamera(HH) {
              var BH;
              const LH = tH.e[XH];
              null === (BH = OH.current) || void 0 === BH || BH.setOrbit({
                ...LH,
                yaw: LH.yaw + HH
              })
            },
            async ensureReadyForCapture(HH) {
              var BH;
              await (null === (BH = OH.current) || void 0 === BH ? void 0 : BH.untilDrawn(HH))
            },
            getDevTools() {
              var HH;
              return null !== (HH = OH.current) && void 0 !== HH && HH.isReady() ? OH.current.dev : null
            }
          }
        }), [WH, XH, eH]), (0, AH.useEffect)((() => {
          const HH = zH.d.register(EH),
            BH = tH.h.openCharacter(TH.current, XH);
          OH.current = BH, uH = BH;
          let LH = !0;
          return BH.ready.then((() => {
            LH && (oH(!0), IH.current())
          })).catch((HH => {
            console.error("Failed to set up the character preview", HH)
          })), () => {
            LH = !1, HH(), uH === BH && (BH.resetCamera(), uH = null), BH.close(), OH.current = null
          }
        }), []), (0, AH.useEffect)((() => {
          UH <= 0 || VH <= 0 || OH.current.resize(UH, VH)
        }), [UH, VH]), (0, AH.useEffect)((() => {
          if (!mH) return;
          const HH = kH.current;
          for (const BH of SH.r) {
            const LH = null === WH || void 0 === WH ? void 0 : WH[BH],
              AH = HH[BH];
            LH && LH !== AH ? OH.current.setCosmetic(BH, LH) : !LH && AH && bH.current[BH] && OH.current.setCosmetic(BH, bH.current[BH])
          }
          kH.current = {
            ...WH
          }, cH.current = !0, eH()
        }), [WH, mH, eH]), (0, AH.useEffect)((() => {
          mH && OH.current.playEmote(null !== MH && void 0 !== MH ? MH : null)
        }), [MH, xH, mH]), (0, AH.useEffect)((() => {
          if (!mH || null === vH) return;
          const HH = OH.current,
            {
              pitch: BH,
              radius: LH
            } = tH.e[XH];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return HH.setOrbit({
            yaw: vH + QH,
            pitch: BH,
            radius: LH
          }), () => {
            uH === HH && HH.resetCamera()
          };
          const AH = performance.now();
          let rH = 0;
          const SH = hH => {
            HH.setOrbit({
              yaw: vH + (hH - AH) / 6e3 * 2 * Math.PI,
              pitch: BH,
              radius: LH
            }), rH = requestAnimationFrame(SH)
          };
          return rH = requestAnimationFrame(SH), () => {
            cancelAnimationFrame(rH), uH === HH && HH.resetCamera()
          }
        }), [mH, vH]), (0, GH.jsxs)(GH.Fragment, {
          children: [(0, GH.jsx)("div", {
            className: "CharCustomisationPreview",
            ref: TH
          }), PH && (0, GH.jsx)(YH, {
            nametag: PH
          })]
        })
      })))
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
  37184: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37187: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);