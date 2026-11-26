export const id = 219;
export const ids = [219];
export const modules = {
  37487: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => QH,
      d: () => UH
    });
    LH(34960);
    var AH = LH(45),
      rH = LH(1450),
      SH = LH(1998),
      hH = LH(2051),
      tH = LH(15),
      zH = LH(2628),
      CH = LH(37496),
      EH = LH(37504),
      XH = LH(34942),
      GH = LH(34951),
      YH = LH(34969),
      uH = LH(1225);
    const QH = (0, AH.memo)((function() {
      var HH;
      const {
        isTouchScreen: BH,
        clientEscMenuOptions: LH,
        scriptedCameraFacing: SH,
        crosshairShownOverride: QH,
        crosshairGameView: MH
      } = (0, tH.m)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), xH = (0, zH.j)("gunshotOrigin"), vH = (0, AH.useRef)(null), PH = (0, AH.useRef)(!1), [TH, VH] = (0, AH.useState)(WH);
      (0, rH.d)("cameraZoomSet", VH), (0, AH.useEffect)((() => {
        VH(WH())
      }), []);
      const OH = (0, hH.e)("heldItemAim"),
        kH = OH.gun,
        mH = (0, YH.g)(),
        oH = (0, AH.useRef)(mH);
      oH.current = mH;
      const [IH, fH] = (0, AH.useState)(!1);
      (0, AH.useEffect)((() => (0, EH.i)("crosshairAccuracy", UH)), []), (0, rH.d)("mouseState", (HH => {
        let {
          isDown: BH
        } = HH;
        PH.current = BH, vH.current && (vH.current.style.transform = (0, GH.c)(BH, oH.current.growOnClick)), "shapes" === oH.current.style && fH(BH)
      }));
      const lH = (0, XH.g)(BH, LH.touchActionButtons);
      return (null !== (HH = (0, CH.b)(MH, QH)) && void 0 !== HH ? HH : (0, CH.f)(OH, TH > 1, lH, xH)) ? "movement" === SH || "cursor" === SH ? null : (0, uH.jsxs)(uH.Fragment, {
        children: [kH && (0, uH.jsx)(bH, {
          custom: mH.forGuns && "shapes" === mH.style ? mH : null,
          touch: BH
        }), !kH && (0, uH.jsx)(GH.b, {
          settings: mH,
          touch: BH,
          pressRef: vH,
          pressed: "shapes" === mH.style ? IH : PH.current
        })]
      }) : null
    }));

    function WH() {
      return SH.gameBridge.lookup("cameraZoom", null)
    }
    const MH = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      xH = {
        current: null
      },
      vH = {
        current: null
      };
    let PH = 0,
      TH = 0;

    function UH(HH) {
      TH = HH, MH[0].current || xH.current || vH.current ? OH(HH) : PH = HH
    }

    function VH(HH) {
      return ((0, CH.d)(HH) - (0, CH.d)(0)) * window.innerHeight / 100
    }

    function OH(HH) {
      var BH;
      if (null === (BH = vH.current) || void 0 === BH || BH.call(vH, VH(HH)), MH[0].current) {
        const BH = `${(0,CH.d)(HH)}vh`;
        MH[0].current.style.transform = `translateX(calc(0px - ${BH}))`, MH[1].current.style.transform = `translateX(calc(0px + ${BH}))`, MH[2].current.style.transform = `translateY(calc(0px - ${BH}))`, MH[3].current.style.transform = `translateY(calc(0px + ${BH}))`
      }
      xH.current && (xH.current.style.filter = `blur(${Math.round(HH/10)}px)`)
    }

    function bH(HH) {
      let {
        custom: BH,
        touch: LH
      } = HH;
      const SH = (0, rH.e)("aimingOverlay", "none"),
        hH = "1.2vh",
        tH = "0.3vh";
      (0, AH.useEffect)((() => {
        PH && OH(PH)
      }), []);
      const zH = (0, AH.useRef)(null !== BH);
      return (0, AH.useLayoutEffect)((() => {
        var HH;
        BH ? null === (HH = vH.current) || void 0 === HH || HH.call(vH, VH(TH)) : zH.current && OH(TH);
        zH.current = null !== BH
      }), [BH]), (0, uH.jsxs)(uH.Fragment, {
        children: ["sniper" === SH && (0, uH.jsxs)("div", {
          ref: xH,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, uH.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, uH.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, uH.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, uH.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, uH.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === SH ? 0 : 1
          },
          children: [BH && (0, uH.jsx)(GH.b, {
            settings: BH,
            touch: LH,
            spreadRef: vH
          }), !BH && (0, uH.jsxs)(uH.Fragment, {
            children: [(0, uH.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: hH,
                height: tH,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: MH[0]
            }), (0, uH.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: hH,
                height: tH,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: MH[1]
            }), (0, uH.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: tH,
                height: hH,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: MH[2]
            }), (0, uH.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: tH,
                height: hH,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: MH[3]
            })]
          })]
        })]
      })
    }
  },
  34951: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => QH,
      c: () => uH
    });
    LH(34960);
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(45),
      hH = LH(34946);

    function tH(HH, BH) {
      return Math.max(1, Math.round(HH * BH))
    }

    function zH(HH, BH) {
      const LH = BH * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        AH = function(HH, BH) {
          if (HH.lines) return tH(HH.lineThickness, BH) % 2;
          if (HH.dot) return tH(HH.dotSize, BH) % 2;
          return CH(HH, BH) % 2
        }(HH, BH),
        rH = EH(HH.lineThickness * LH, AH),
        SH = tH(HH.lineLength, LH),
        hH = Math.round(HH.gap * LH),
        zH = HH.outline > 0 ? tH(HH.outline, LH) : 0,
        GH = [];
      if (HH.lines && (GH.push({
          x: rH + hH,
          y: 0,
          w: SH,
          h: rH,
          arm: "right"
        }), GH.push({
          x: -hH - SH,
          y: 0,
          w: SH,
          h: rH,
          arm: "left"
        }), GH.push({
          x: 0,
          y: rH + hH,
          w: rH,
          h: SH,
          arm: "down"
        }), HH.tStyle || GH.push({
          x: 0,
          y: -hH - SH,
          w: rH,
          h: SH,
          arm: "up"
        }), 0 === hH && GH.push({
          x: 0,
          y: 0,
          w: rH,
          h: rH
        })), HH.dot) {
        const BH = EH(HH.dotSize * LH, AH),
          SH = HH.lines && 0 === hH && HH.dotSize > HH.lineThickness ? Math.max(BH, rH + 2) : BH,
          tH = (rH - SH) / 2;
        GH.push({
          x: tH,
          y: tH,
          w: SH,
          h: SH
        })
      }
      const YH = GH.map((HH => ({
        ...HH,
        x: HH.x - zH,
        y: HH.y - zH,
        w: HH.w + 2 * zH,
        h: HH.h + 2 * zH
      })));
      let uH = null,
        QH = null;
      if (HH.circle) {
        const BH = tH(HH.circleThickness, LH),
          SH = function(HH, BH) {
            return HH + (HH % 2 === BH ? 0 : 1)
          }(CH(HH, LH), AH),
          hH = (rH - SH) / 2;
        uH = XH(hH, SH, BH), zH > 0 && (QH = XH(hH - zH, SH + 2 * zH, BH + 2 * zH))
      }
      return {
        cell: rH,
        fills: GH,
        outlines: zH > 0 ? YH : [],
        ring: uH,
        ringOutline: QH
      }
    }

    function CH(HH, BH) {
      return Math.round(HH.circleRadius * BH * 2 + tH(HH.circleThickness, BH))
    }

    function EH(HH, BH) {
      return Math.max(2 - BH, 2 * Math.round((HH - BH) / 2) + BH)
    }

    function XH(HH, BH, LH) {
      const AH = 2 * LH >= BH - 1;
      return {
        x: HH,
        y: HH,
        size: BH,
        border: Math.min(LH, Math.floor(BH / 2)),
        filled: AH
      }
    }
    var GH = LH(1225);
    const YH = 1.4;

    function uH(HH, BH) {
      return HH && BH ? `scale(${YH})` : "scale(1)"
    }

    function QH(HH) {
      return "classic" === HH.settings.style ? (0, GH.jsx)(xH, {
        ...HH
      }) : (0, GH.jsx)(bH, {
        ...HH
      })
    }
    const WH = .125;

    function MH(HH, BH) {
      const LH = {};
      if (HH.color !== hH.c.color && (LH.color = (0, hH.e)(HH.color)), HH.opacity !== hH.c.opacity && (LH.opacity = HH.opacity / 100), HH.outline !== hH.c.outline || HH.outlineColor !== hH.c.outlineColor) {
        const BH = HH.outline,
          AH = (0, hH.e)(HH.outlineColor);
        LH.textShadow = BH > 0 ? `-${BH}px 0 ${AH}, 0 ${BH}px ${AH}, ${BH}px 0 ${AH}, 0 -${BH}px ${AH}` : "none"
      }
      if (HH.size !== hH.c.size) {
        const AH = HH.size / 100;
        LH.fontSize = BH ? `calc(max(1.3rem, 18px) * ${AH})` : `calc(1.3rem * ${AH})`, LH.marginTop = `-${WH}em`, LH.transformOrigin = `50% calc(50% + ${WH}em)`
      }
      return LH
    }

    function xH(HH) {
      let {
        settings: BH,
        touch: LH,
        inPreview: AH,
        inEditor: SH,
        pressed: hH = !1,
        pressRef: tH
      } = HH;
      return (0, GH.jsx)("div", {
        className: rH()("Crosshair", {
          Touch: LH,
          CrosshairInPreview: AH,
          CrosshairInEditor: SH || AH
        }),
        ref: tH,
        style: {
          transform: uH(hH, BH.growOnClick),
          ...MH(BH, LH)
        },
        children: "+"
      })
    }

    function vH(HH, BH) {
      return HH / BH + "px"
    }

    function PH(HH, BH, LH, AH) {
      return {
        ...VH(HH, BH, LH),
        width: vH(HH.w, LH),
        height: vH(HH.h, LH),
        background: AH
      }
    }

    function TH(HH, BH, LH) {
      return {
        left: vH(HH.x, BH),
        top: vH(HH.y, BH),
        width: vH(HH.size, BH),
        height: vH(HH.size, BH),
        borderWidth: vH(HH.border, BH),
        borderColor: LH,
        background: HH.filled ? LH : void 0
      }
    }
    const UH = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function VH(HH, BH, LH) {
      const [AH, rH] = HH.arm ? UH[HH.arm] : [0, 0], SH = Math.round(BH * LH);
      return {
        left: vH(HH.x + AH * SH, LH),
        top: vH(HH.y + rH * SH, LH)
      }
    }

    function OH(HH) {
      return HH.arm ? {
        "data-arm": HH.arm,
        "data-x": HH.x,
        "data-y": HH.y
      } : {}
    }

    function bH(HH) {
      let {
        settings: BH,
        inPreview: LH,
        inEditor: AH,
        pressed: tH = !1,
        spread: CH,
        spreadRef: EH
      } = HH;
      const XH = (0, SH.useRef)(null),
        {
          box: uH,
          dpr: QH
        } = function(HH) {
          const [BH, LH] = (0, SH.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, SH.useLayoutEffect)((() => {
            const BH = HH.current;
            if (!BH) return;
            const AH = () => {
              const HH = BH.getBoundingClientRect(),
                AH = window.devicePixelRatio || 1;
              LH((BH => BH.dpr === AH && BH.box.left === HH.left && BH.box.top === HH.top && BH.box.width === HH.width && BH.box.height === HH.height ? BH : {
                box: {
                  left: HH.left,
                  top: HH.top,
                  width: HH.width,
                  height: HH.height
                },
                dpr: AH
              }))
            };
            AH();
            const rH = new ResizeObserver(AH);
            return rH.observe(BH), window.addEventListener("resize", AH), window.addEventListener("scroll", AH, !0), () => {
              rH.disconnect(), window.removeEventListener("resize", AH), window.removeEventListener("scroll", AH, !0)
            }
          }), [HH]), BH
        }(XH),
        WH = (0, SH.useRef)(QH);
      WH.current = QH;
      const MH = zH(BH, QH, tH && BH.growOnClick ? YH : 1),
        xH = function(HH, BH, LH) {
          const AH = Math.round((HH.left + HH.width / 2) * LH - BH / 2),
            rH = Math.round((HH.top + HH.height / 2) * LH - BH / 2);
          return {
            x: AH / LH - HH.left,
            y: rH / LH - HH.top
          }
        }(uH, MH.cell, QH),
        vH = (0, hH.e)(BH.color),
        UH = (0, hH.e)(BH.outlineColor),
        bH = (0, SH.useRef)(0);
      (0, SH.useLayoutEffect)((() => {
        if (EH) return EH.current = HH => {
          var BH;
          bH.current = HH, null === (BH = XH.current) || void 0 === BH || BH.querySelectorAll("[data-arm]").forEach((BH => {
            Object.assign(BH.style, VH(function(HH) {
              return {
                x: Number(HH.dataset.x),
                y: Number(HH.dataset.y),
                arm: HH.dataset.arm
              }
            }(BH), HH, WH.current))
          }))
        }, () => {
          EH.current = null
        }
      }), [EH]);
      const kH = null !== CH && void 0 !== CH ? CH : bH.current;
      return (0, GH.jsx)("div", {
        ref: XH,
        className: rH()("CrosshairShapes", {
          CrosshairInPreview: LH,
          CrosshairInEditor: AH || LH,
          CrosshairSpreads: void 0 !== EH
        }),
        children: (0, GH.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: xH.x,
            top: xH.y,
            opacity: BH.opacity / 100
          },
          children: (0, GH.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [MH.ringOutline && (0, GH.jsx)("div", {
              className: "CrosshairRing",
              style: TH(MH.ringOutline, QH, UH)
            }), MH.outlines.map(((HH, BH) => (0, GH.jsx)("div", {
              className: "CrosshairPart",
              ...OH(HH),
              style: PH(HH, kH, QH, UH)
            }, `o${BH}`))), MH.ring && (0, GH.jsx)("div", {
              className: "CrosshairRing",
              style: TH(MH.ring, QH, vH)
            }), MH.fills.map(((HH, BH) => (0, GH.jsx)("div", {
              className: "CrosshairPart",
              ...OH(HH),
              style: PH(HH, kH, QH, vH)
            }, `f${BH}`)))]
          })
        })
      })
    }
  },
  34962: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      f: () => WH,
      g: () => QH
    });
    var AH = LH(34946);
    const rH = "XH1-",
      SH = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      hH = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      tH = ["color", "outlineColor"],
      zH = 1 + 3 * tH.length + hH.length + 1,
      CH = Math.ceil(8 * zH / Math.log2(62)),
      EH = rH.length + CH;

    function XH(HH) {
      let BH = 90;
      for (const LH of HH) BH = 31 * BH + LH & 255;
      return BH
    }
    const GH = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      YH = BigInt(GH.length);

    function uH(HH, BH) {
      let LH = 0n;
      for (const rH of HH) {
        const HH = GH.indexOf(rH);
        if (HH < 0) return null;
        LH = LH * YH + BigInt(HH)
      }
      if (LH >> BigInt(8 * BH) !== 0n) return null;
      const AH = [];
      for (let rH = 0; rH < BH; rH++) AH.unshift(Number(0xffn & LH)), LH >>= 8n;
      return AH
    }

    function QH(HH) {
      let BH = "shapes" === HH.style ? 1 : 0;
      SH.forEach(((LH, AH) => {
        HH[LH] && (BH |= 1 << AH + 1)
      }));
      const LH = [BH];
      for (const rH of tH) {
        const BH = (0, AH.d)(rH, HH[rH]);
        LH.push(BH >> 16 & 255, BH >> 8 & 255, 255 & BH)
      }
      for (const rH of hH) {
        const {
          min: BH,
          step: SH
        } = AH.b[rH];
        LH.push(Math.round(((0, AH.d)(rH, HH[rH]) - BH) / SH))
      }
      return LH.push(XH(LH)), rH + function(HH, BH) {
        let LH = 0n;
        for (const rH of HH) LH = LH << 8n | BigInt(rH);
        let AH = "";
        for (let rH = 0; rH < BH; rH++) AH = GH[Number(LH % YH)] + AH, LH /= YH;
        return AH
      }(LH, CH)
    }

    function WH(HH) {
      for (const BH of HH.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${CH}})`, "gi"))) {
        const HH = MH(uH(BH[1], zH));
        if (HH) return HH
      }
      return null
    }

    function MH(HH) {
      if (!HH || HH.length !== zH || XH(HH.slice(0, -1)) !== HH[HH.length - 1]) return null;
      const BH = HH[0],
        LH = {
          ...AH.c,
          style: 1 & BH ? "shapes" : "classic"
        };
      SH.forEach(((HH, AH) => {
        LH[HH] = 0 !== (BH & 1 << AH + 1)
      }));
      let rH = 1;
      for (const AH of tH) LH[AH] = HH[rH] << 16 | HH[rH + 1] << 8 | HH[rH + 2], rH += 3;
      for (const SH of hH) {
        const {
          min: BH,
          step: hH
        } = AH.b[SH];
        LH[SH] = (0, AH.d)(SH, BH + HH[rH] * hH), rH++
      }
      return LH
    }
  },
  34946: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      c: () => rH,
      d: () => SH,
      e: () => CH,
      f: () => zH,
      i: () => EH,
      j: () => tH,
      k: () => hH
    });
    const AH = {
        opacity: {
          min: 5,
          max: 100,
          step: 1
        },
        outline: {
          min: 0,
          max: 4,
          step: .1
        },
        size: {
          min: 25,
          max: 400,
          step: 5
        },
        lineLength: {
          min: .5,
          max: 40,
          step: .5
        },
        lineThickness: {
          min: .5,
          max: 10,
          step: .5
        },
        gap: {
          min: 0,
          max: 40,
          step: .5
        },
        dotSize: {
          min: .5,
          max: 12,
          step: .5
        },
        circleRadius: {
          min: 1,
          max: 60,
          step: .5
        },
        circleThickness: {
          min: .5,
          max: 6,
          step: .5
        },
        color: {
          min: 0,
          max: 16777215,
          step: 1
        },
        outlineColor: {
          min: 0,
          max: 16777215,
          step: 1
        }
      },
      rH = Object.freeze({
        style: "classic",
        color: 16777215,
        opacity: 100,
        outline: 1.2,
        outlineColor: 0,
        growOnClick: !0,
        size: 100,
        lines: !0,
        lineLength: 6,
        lineThickness: 2,
        gap: 3,
        tStyle: !1,
        dot: !1,
        dotSize: 2,
        circle: !1,
        circleRadius: 10,
        circleThickness: 1,
        forGuns: !1
      });

    function SH(HH, BH) {
      var LH;
      const {
        min: SH,
        max: hH,
        step: tH
      } = AH[HH];
      if (!Number.isFinite(BH)) return rH[HH];
      const zH = (null !== (LH = String(tH).split(".")[1]) && void 0 !== LH ? LH : "").length,
        CH = Number((Math.round(BH / tH) * tH).toFixed(zH));
      return Math.min(hH, Math.max(SH, CH))
    }

    function hH(HH, BH, LH) {
      const AH = "number" === typeof LH ? SH(BH, LH) : LH;
      return {
        ...HH,
        [BH]: AH
      }
    }

    function tH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(rH).every((AH => LH.includes(AH) || HH[AH] === BH[AH]))
    }

    function zH(HH) {
      return tH(HH, rH)
    }

    function CH(HH) {
      return `#${HH.toString(16).padStart(6,"0")}`
    }

    function EH(HH) {
      const BH = /^#?([0-9a-f]{6})$/i.exec(HH.trim());
      return BH ? parseInt(BH[1], 16) : null
    }
  },
  34969: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => XH,
      g: () => GH
    });
    var AH = LH(45),
      rH = LH(30),
      SH = LH(34962),
      hH = LH(34946);
    const tH = "crosshairCode";
    let zH = null;
    const CH = new Set;

    function EH() {
      if (null === zH) {
        var HH;
        const BH = rH.e.getItem(tH);
        zH = null !== (HH = "string" === typeof BH ? (0, SH.f)(BH) : null) && void 0 !== HH ? HH : hH.c
      }
      return zH
    }

    function XH(HH) {
      zH = HH, (0, hH.f)(HH) ? rH.e.removeItem(tH) : rH.e.setItem(tH, (0, SH.g)(HH));
      for (const BH of CH) BH()
    }

    function GH() {
      const [HH, BH] = (0, AH.useState)(EH);
      return (0, AH.useEffect)((() => {
        const HH = () => {
          BH(EH())
        };
        return HH(), LH = HH, CH.add(LH), () => {
          CH.delete(LH)
        };
        var LH
      }), []), HH
    }
  },
  37633: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      f: () => zH,
      g: () => hH
    });
    var AH = LH(619),
      rH = LH(3038);

    function SH(HH) {
      return HH === (0, rH.c)().JBH ? (0, rH.c)().lF : HH
    }

    function hH(HH) {
      return !(0, AH.M)(HH) && SH(HH) === (0, rH.c)().lF
    }
    const tH = "gravity";

    function zH() {
      return (0, rH.c)().physics[tH][1]
    }
  },
  37608: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => VH
    });
    var AH = LH(37617),
      rH = LH(176),
      SH = LH(5335),
      hH = LH(37626),
      tH = LH(37326),
      zH = LH(37656),
      CH = LH(37633),
      EH = LH(330),
      XH = LH.n(EH),
      GH = LH(3038),
      YH = LH(37654),
      uH = LH(18),
      QH = LH(15),
      WH = LH(37640),
      MH = LH(37642),
      xH = LH(37648),
      vH = LH(37650);
    const PH = new Set(["note"]);
    const TH = {
      stop: () => TH,
      fade: () => TH,
      rate: () => TH,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => TH,
      setPannerAttr: () => TH,
      setPosition: () => TH
    };
    class UH {
      constructor(HH) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new zH.f, this._howl = (0, tH.countDecodesAs)(new SH.Howl({
          src: [...(0, AH.v)(HH).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = this._howl.play(hH.b);
        HH && this._howl.loop(!0, BH);
        let LH = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), BH);
        const AH = {
          stop: () => {
            var HH;
            return null === (HH = this.liveHowl()) || void 0 === HH || HH.stop(BH), AH
          },
          fade: (HH, LH, rH) => {
            var SH;
            return null === (SH = this.liveHowl()) || void 0 === SH || SH.fade(HH, LH, rH, BH), AH
          },
          rate: HH => {
            var LH;
            return null === (LH = this.liveHowl()) || void 0 === LH || LH.rate(HH, BH), AH
          },
          stopsAtOnce: () => this._howl.playing(BH) && !this._howl._playLock,
          isAlive: () => {
            const HH = this._howl._soundById(BH);
            return !this._loadFailed && !!HH && !HH._ended
          },
          getDurationMs: () => this._howl._soundById(BH) ? 1e3 * this._howl.duration(BH) / this._howl.rate(BH) : 0,
          getVolume: () => LH * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => LH,
          setRelativeVolume: HH => {
            var rH;
            if (HH > 1) throw new Error("Volume should be <= 1");
            return LH = QH.c.get("soundOnFromAd") ? HH : 0, null === (rH = this.liveHowl()) || void 0 === rH || rH.volume(Math.min(1, LH * this._volumeMultiplier.getTotalMultipliedVal()), BH), AH
          },
          setPannerAttr: HH => {
            let {
              coneInnerAngle: LH,
              coneOuterAngle: rH = 360,
              coneOuterGain: SH,
              distanceModel: hH,
              maxDistance: tH,
              panningModel: zH,
              refDistance: CH,
              rolloffFactor: EH
            } = HH;
            return this._setPannerAttr({
              id: BH,
              coneInnerAngle: LH,
              coneOuterAngle: rH,
              coneOuterGain: SH,
              distanceModel: hH,
              maxDistance: tH,
              panningModel: zH,
              refDistance: CH,
              rolloffFactor: EH
            }), AH
          },
          setPosition: HH => {
            var LH;
            return null === (LH = this.liveHowl()) || void 0 === LH || LH.pos(HH[2], HH[1], HH[0], BH), AH
          }
        };
        return AH
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, hH.d)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(HH) {
        this._volumeMultiplier.setMultiplierType("globalVolume", HH), this._howl.volume(HH)
      }
      _setPannerAttr(HH) {
        let {
          id: BH,
          coneInnerAngle: LH = 360,
          coneOuterAngle: AH = 360,
          coneOuterGain: rH = 0,
          distanceModel: SH = "inverse",
          maxDistance: hH = 1e3,
          panningModel: tH = "HRTF",
          refDistance: zH = YH.i,
          rolloffFactor: CH = 1
        } = HH;
        const EH = this.liveHowl();
        if (null === EH) return;
        EH.pannerAttr({
          coneOuterAngle: AH
        }, BH);
        const XH = {
          coneInnerAngle: LH,
          coneOuterAngle: AH,
          coneOuterGain: rH,
          distanceModel: SH,
          maxDistance: hH,
          panningModel: tH,
          refDistance: zH,
          rolloffFactor: CH
        };
        EH.pannerAttr(XH, BH)
      }
    }
    const VH = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new WH.b, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, uH.k.subscribe("appManagerUpdated|soundVolume", (HH => {
          const BH = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const LH of BH) LH.setGlobalVolume(HH)
        }))
      }
      play(HH, BH) {
        var LH;
        let SH, hH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (LH = (0, GH.c)()) || void 0 === LH ? void 0 : LH.lF,
          tH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YH.f,
          zH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : YH.i,
          EH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var uH;
        (0, GH.c)() ? SH = !!Array.isArray(hH) || (0, CH.b)(hH) !== (null === (uH = (0, GH.c)()) || void 0 === uH ? void 0 : uH.lF): SH = !1;
        const QH = (0, AH.o)(HH),
          MH = this.loadSound(SH ? this.spatialSounds : this.stereoSounds, HH);
        if (!SH) {
          const HH = MH.play(EH);
          return HH.setRelativeVolume(BH), HH
        }
        const xH = (0, GH.c)(),
          vH = Array.isArray(hH) ? hH : xH.pT.hT(hH),
          UH = xH.pT.hT(xH.lF);
        if (!vH || XH().sqrDist(vH, UH) > tH * tH) return TH;
        let VH;
        if (!EH) {
          if (!this.spatialVoices.admit({
              group: PH.has(QH) ? null : (0, WH.e)(HH),
              loudness: (0, WH.d)(BH, XH().Ot(vH, UH), zH),
              startMs: performance.now(),
              getDurationMs: () => {
                var HH, BH;
                return null !== (HH = null === (BH = VH) || void 0 === BH ? void 0 : BH.getDurationMs()) && void 0 !== HH ? HH : 0
              },
              isAlive: () => {
                var HH, BH;
                return null !== (HH = null === (BH = VH) || void 0 === BH ? void 0 : BH.isAlive()) && void 0 !== HH && HH
              },
              canStop: () => {
                var HH, BH;
                return null !== (HH = null === (BH = VH) || void 0 === BH ? void 0 : BH.stopsAtOnce()) && void 0 !== HH && HH
              },
              stop: () => {
                var HH;
                null === (HH = VH) || void 0 === HH || HH.stop()
              }
            })) return TH
        }
        return VH = MH.play(EH), VH.setRelativeVolume(BH), VH.setPannerAttr({
          refDistance: zH
        }), VH.setPosition([vH[0], vH[1] + rH.g.iW * rH.g.playerEyeToHeightRatio, vH[2]]), VH
      }
      preload(HH) {
        const BH = (0, AH.s)(HH) ? [HH] : (0, AH.x)(HH);
        if (0 === BH.length) throw new Error(`Invalid sound name ${HH} (no sound has it or starts with it)`);
        for (const LH of BH) this.loadSound(this.stereoSounds, LH)
      }
      preloadAtIdle(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vH.e;
        const LH = HH.filter((HH => !this.idlePreloads.has(HH)));
        for (const rH of LH) this.idlePreloads.add(rH);
        const AH = this.idlePreloadGeneration;
        (0, xH.b)(LH, {
          ...BH,
          xB: () => AH !== this.idlePreloadGeneration,
          fetchFile: HH => {
            this.idlePreloads.delete(HH);
            try {
              return this.preload(HH), Promise.resolve()
            } catch (BH) {
              return Promise.reject(BH)
            }
          }
        })
      }
      loadSound(HH, BH) {
        const LH = HH[BH];
        if (LH) return LH;
        const rH = this.makeSound(HH, BH);
        for (const hH of null !== (SH = (0, AH.t)(BH)) && void 0 !== SH ? SH : []) {
          var SH;
          HH[hH] || this.makeSound(HH, hH)
        }
        return rH
      }
      makeSound(HH, BH) {
        (0, vH.i)(BH);
        const LH = new UH(BH);
        return LH.setGlobalVolume(QH.c.get("soundVolume")), HH[BH] = LH, LH
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const HH of [this.stereoSounds, this.spatialSounds])
          for (const [BH, LH] of Object.entries(HH)) !MH.d.has((0, AH.o)(BH)) && LH.loaded() && (LH.unloadOnceIdle(), delete HH[BH])
      }
    }
  },
  37694: (HH, BH, LH) => {
    function AH(HH, BH) {
      var LH, AH, rH, SH, hH, tH, zH, CH;
      return HH.name === BH.name && ((null === (LH = HH.attributes) || void 0 === LH || null === (AH = LH.customAttributes) || void 0 === AH ? void 0 : AH.stackKey) === (null === (rH = BH.attributes) || void 0 === rH || null === (SH = rH.customAttributes) || void 0 === SH ? void 0 : SH.stackKey) && (!0 !== (null === (hH = HH.attributes) || void 0 === hH || null === (tH = hH.customAttributes) || void 0 === tH ? void 0 : tH.unstackable) && !0 !== (null === (zH = BH.attributes) || void 0 === zH || null === (CH = zH.customAttributes) || void 0 === CH ? void 0 : CH.unstackable)))
    }
    LH.d(BH, {
      d: () => AH
    })
  },
  37798: (HH, BH, LH) => {
    function AH(HH) {
      return HH.includes("Leaf Bed")
    }

    function rH(HH) {
      return / Bed(?: Head)?(?:\||$)/.test(HH) && !AH(HH)
    }

    function SH(HH) {
      return HH.includes(" Strongbed")
    }

    function hH(HH) {
      return AH(HH) || rH(HH) || SH(HH)
    }
    LH.d(BH, {
      d: () => hH,
      h: () => AH,
      l: () => SH,
      m: () => rH
    })
  },
  37793: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH
    });
    var AH = LH(37798),
      rH = LH(9940);
    const SH = [],
      hH = [],
      tH = [],
      zH = [];
    for (const EH of Object.keys(rH.l))(0, AH.h)(EH) ? SH.push(EH) : (0, AH.m)(EH) && hH.push(EH), (0, AH.l)(EH) && tH.push(EH), (EH.includes(" Bed Head") || EH.includes(" Strongbed Head")) && zH.push(EH);
    const CH = {
      leafBeds: SH,
      woolBeds: hH,
      strongBeds: tH,
      beds: [...SH, ...hH, ...tH],
      bedHeads: zH,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  34960: () => {}
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);