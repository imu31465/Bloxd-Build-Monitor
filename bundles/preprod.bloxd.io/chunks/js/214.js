export const id = 214;
export const ids = [214];
export const modules = {
  37342: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => aU,
      g: () => RU
    });
    zU(34837);
    var cU = zU(61),
      yU = zU(1492),
      QU = zU(2005),
      AU = zU(2047),
      FU = zU(27),
      oU = zU(2616),
      DU = zU(37345),
      EU = zU(37354),
      YU = zU(34824),
      NU = zU(34835),
      IU = zU(34853),
      pU = zU(1305);
    const aU = (0, cU.memo)((function() {
      var UU;
      const {
        isTouchScreen: XU,
        clientEscMenuOptions: zU,
        scriptedCameraFacing: QU,
        crosshairShownOverride: aU,
        crosshairGameView: gU
      } = (0, FU.q)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), kU = (0, oU.f)("gunshotOrigin"), GU = (0, cU.useRef)(null), BU = (0, cU.useRef)(!1), [ZU, PU] = (0, cU.useState)(tU);
      (0, yU.f)("cameraZoomSet", PU), (0, cU.useEffect)((() => {
        PU(tU())
      }), []);
      const WU = (0, AU.i)("heldItemAim"),
        LU = WU.gun,
        eU = (0, IU.f)(),
        CU = (0, cU.useRef)(eU);
      CU.current = eU;
      const [wU, qU] = (0, cU.useState)(!1);
      (0, cU.useEffect)((() => (0, EU.d)("crosshairAccuracy", RU)), []), (0, yU.f)("mouseState", (UU => {
        let {
          isDown: XU
        } = UU;
        BU.current = XU, GU.current && (GU.current.style.transform = (0, NU.f)(XU, CU.current.growOnClick)), "shapes" === CU.current.style && qU(XU)
      }));
      const OU = (0, YU.g)(XU, zU.touchActionButtons);
      return (null !== (UU = (0, DU.c)(gU, aU)) && void 0 !== UU ? UU : (0, DU.h)(WU, ZU > 1, OU, kU)) ? "movement" === QU || "cursor" === QU ? null : (0, pU.jsxs)(pU.Fragment, {
        children: [LU && (0, pU.jsx)(dU, {
          custom: eU.forGuns && "shapes" === eU.style ? eU : null,
          touch: XU
        }), !LU && (0, pU.jsx)(NU.e, {
          settings: eU,
          touch: XU,
          pressRef: GU,
          pressed: "shapes" === eU.style ? wU : BU.current
        })]
      }) : null
    }));

    function tU() {
      return QU.gameBridge.lookup("cameraZoom", null)
    }
    const gU = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      kU = {
        current: null
      },
      GU = {
        current: null
      };
    let BU = 0,
      ZU = 0;

    function RU(UU) {
      ZU = UU, gU[0].current || kU.current || GU.current ? WU(UU) : BU = UU
    }

    function PU(UU) {
      return ((0, DU.e)(UU) - (0, DU.e)(0)) * window.innerHeight / 100
    }

    function WU(UU) {
      var XU;
      if (null === (XU = GU.current) || void 0 === XU || XU.call(GU, PU(UU)), gU[0].current) {
        const XU = `${(0,DU.e)(UU)}vh`;
        gU[0].current.style.transform = `translateX(calc(0px - ${XU}))`, gU[1].current.style.transform = `translateX(calc(0px + ${XU}))`, gU[2].current.style.transform = `translateY(calc(0px - ${XU}))`, gU[3].current.style.transform = `translateY(calc(0px + ${XU}))`
      }
      kU.current && (kU.current.style.filter = `blur(${Math.round(UU/10)}px)`)
    }

    function dU(UU) {
      let {
        custom: XU,
        touch: zU
      } = UU;
      const QU = (0, yU.j)("aimingOverlay", "none"),
        AU = "1.2vh",
        FU = "0.3vh";
      (0, cU.useEffect)((() => {
        BU && WU(BU)
      }), []);
      const oU = (0, cU.useRef)(null !== XU);
      return (0, cU.useLayoutEffect)((() => {
        var UU;
        XU ? null === (UU = GU.current) || void 0 === UU || UU.call(GU, PU(ZU)) : oU.current && WU(ZU);
        oU.current = null !== XU
      }), [XU]), (0, pU.jsxs)(pU.Fragment, {
        children: ["sniper" === QU && (0, pU.jsxs)("div", {
          ref: kU,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, pU.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, pU.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, pU.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, pU.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, pU.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === QU ? 0 : 1
          },
          children: [XU && (0, pU.jsx)(NU.e, {
            settings: XU,
            touch: zU,
            spreadRef: GU
          }), !XU && (0, pU.jsxs)(pU.Fragment, {
            children: [(0, pU.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: AU,
                height: FU,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: gU[0]
            }), (0, pU.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: AU,
                height: FU,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: gU[1]
            }), (0, pU.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: FU,
                height: AU,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: gU[2]
            }), (0, pU.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: FU,
                height: AU,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: gU[3]
            })]
          })]
        })]
      })
    }
  },
  34835: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => aU,
      f: () => pU
    });
    zU(34837);
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(61),
      AU = zU(34827);

    function FU(UU, XU) {
      return Math.max(1, Math.round(UU * XU))
    }

    function oU(UU, XU) {
      const zU = XU * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        cU = function(UU, XU) {
          if (UU.lines) return FU(UU.lineThickness, XU) % 2;
          if (UU.dot) return FU(UU.dotSize, XU) % 2;
          return DU(UU, XU) % 2
        }(UU, XU),
        yU = EU(UU.lineThickness * zU, cU),
        QU = FU(UU.lineLength, zU),
        AU = Math.round(UU.gap * zU),
        oU = UU.outline > 0 ? FU(UU.outline, zU) : 0,
        NU = [];
      if (UU.lines && (NU.push({
          x: yU + AU,
          y: 0,
          w: QU,
          h: yU,
          arm: "right"
        }), NU.push({
          x: -AU - QU,
          y: 0,
          w: QU,
          h: yU,
          arm: "left"
        }), NU.push({
          x: 0,
          y: yU + AU,
          w: yU,
          h: QU,
          arm: "down"
        }), UU.tStyle || NU.push({
          x: 0,
          y: -AU - QU,
          w: yU,
          h: QU,
          arm: "up"
        }), 0 === AU && NU.push({
          x: 0,
          y: 0,
          w: yU,
          h: yU
        })), UU.dot) {
        const XU = EU(UU.dotSize * zU, cU),
          QU = UU.lines && 0 === AU && UU.dotSize > UU.lineThickness ? Math.max(XU, yU + 2) : XU,
          FU = (yU - QU) / 2;
        NU.push({
          x: FU,
          y: FU,
          w: QU,
          h: QU
        })
      }
      const IU = NU.map((UU => ({
        ...UU,
        x: UU.x - oU,
        y: UU.y - oU,
        w: UU.w + 2 * oU,
        h: UU.h + 2 * oU
      })));
      let pU = null,
        aU = null;
      if (UU.circle) {
        const XU = FU(UU.circleThickness, zU),
          QU = function(UU, XU) {
            return UU + (UU % 2 === XU ? 0 : 1)
          }(DU(UU, zU), cU),
          AU = (yU - QU) / 2;
        pU = YU(AU, QU, XU), oU > 0 && (aU = YU(AU - oU, QU + 2 * oU, XU + 2 * oU))
      }
      return {
        cell: yU,
        fills: NU,
        outlines: oU > 0 ? IU : [],
        ring: pU,
        ringOutline: aU
      }
    }

    function DU(UU, XU) {
      return Math.round(UU.circleRadius * XU * 2 + FU(UU.circleThickness, XU))
    }

    function EU(UU, XU) {
      return Math.max(2 - XU, 2 * Math.round((UU - XU) / 2) + XU)
    }

    function YU(UU, XU, zU) {
      const cU = 2 * zU >= XU - 1;
      return {
        x: UU,
        y: UU,
        size: XU,
        border: Math.min(zU, Math.floor(XU / 2)),
        filled: cU
      }
    }
    var NU = zU(1305);
    const IU = 1.4;

    function pU(UU, XU) {
      return UU && XU ? `scale(${IU})` : "scale(1)"
    }

    function aU(UU) {
      return "classic" === UU.settings.style ? (0, NU.jsx)(kU, {
        ...UU
      }) : (0, NU.jsx)(dU, {
        ...UU
      })
    }
    const tU = .125;

    function gU(UU, XU) {
      const zU = {};
      if (UU.color !== AU.g.color && (zU.color = (0, AU.i)(UU.color)), UU.opacity !== AU.g.opacity && (zU.opacity = UU.opacity / 100), UU.outline !== AU.g.outline || UU.outlineColor !== AU.g.outlineColor) {
        const XU = UU.outline,
          cU = (0, AU.i)(UU.outlineColor);
        zU.textShadow = XU > 0 ? `-${XU}px 0 ${cU}, 0 ${XU}px ${cU}, ${XU}px 0 ${cU}, 0 -${XU}px ${cU}` : "none"
      }
      if (UU.size !== AU.g.size) {
        const cU = UU.size / 100;
        zU.fontSize = XU ? `calc(max(1.3rem, 18px) * ${cU})` : `calc(1.3rem * ${cU})`, zU.marginTop = `-${tU}em`, zU.transformOrigin = `50% calc(50% + ${tU}em)`
      }
      return zU
    }

    function kU(UU) {
      let {
        settings: XU,
        touch: zU,
        inPreview: cU,
        inEditor: QU,
        pressed: AU = !1,
        pressRef: FU
      } = UU;
      return (0, NU.jsx)("div", {
        className: yU()("Crosshair", {
          Touch: zU,
          CrosshairInPreview: cU,
          CrosshairInEditor: QU || cU
        }),
        ref: FU,
        style: {
          transform: pU(AU, XU.growOnClick),
          ...gU(XU, zU)
        },
        children: "+"
      })
    }

    function GU(UU, XU) {
      return UU / XU + "px"
    }

    function BU(UU, XU, zU, cU) {
      return {
        ...PU(UU, XU, zU),
        width: GU(UU.w, zU),
        height: GU(UU.h, zU),
        background: cU
      }
    }

    function ZU(UU, XU, zU) {
      return {
        left: GU(UU.x, XU),
        top: GU(UU.y, XU),
        width: GU(UU.size, XU),
        height: GU(UU.size, XU),
        borderWidth: GU(UU.border, XU),
        borderColor: zU,
        background: UU.filled ? zU : void 0
      }
    }
    const RU = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function PU(UU, XU, zU) {
      const [cU, yU] = UU.arm ? RU[UU.arm] : [0, 0], QU = Math.round(XU * zU);
      return {
        left: GU(UU.x + cU * QU, zU),
        top: GU(UU.y + yU * QU, zU)
      }
    }

    function WU(UU) {
      return UU.arm ? {
        "data-arm": UU.arm,
        "data-x": UU.x,
        "data-y": UU.y
      } : {}
    }

    function dU(UU) {
      let {
        settings: XU,
        inPreview: zU,
        inEditor: cU,
        pressed: FU = !1,
        spread: DU,
        spreadRef: EU
      } = UU;
      const YU = (0, QU.useRef)(null),
        {
          box: pU,
          dpr: aU
        } = function(UU) {
          const [XU, zU] = (0, QU.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, QU.useLayoutEffect)((() => {
            const XU = UU.current;
            if (!XU) return;
            const cU = () => {
              const UU = XU.getBoundingClientRect(),
                cU = window.devicePixelRatio || 1;
              zU((XU => XU.dpr === cU && XU.box.left === UU.left && XU.box.top === UU.top && XU.box.width === UU.width && XU.box.height === UU.height ? XU : {
                box: {
                  left: UU.left,
                  top: UU.top,
                  width: UU.width,
                  height: UU.height
                },
                dpr: cU
              }))
            };
            cU();
            const yU = new ResizeObserver(cU);
            return yU.observe(XU), window.addEventListener("resize", cU), window.addEventListener("scroll", cU, !0), () => {
              yU.disconnect(), window.removeEventListener("resize", cU), window.removeEventListener("scroll", cU, !0)
            }
          }), [UU]), XU
        }(YU),
        tU = (0, QU.useRef)(aU);
      tU.current = aU;
      const gU = oU(XU, aU, FU && XU.growOnClick ? IU : 1),
        kU = function(UU, XU, zU) {
          const cU = Math.round((UU.left + UU.width / 2) * zU - XU / 2),
            yU = Math.round((UU.top + UU.height / 2) * zU - XU / 2);
          return {
            x: cU / zU - UU.left,
            y: yU / zU - UU.top
          }
        }(pU, gU.cell, aU),
        GU = (0, AU.i)(XU.color),
        RU = (0, AU.i)(XU.outlineColor),
        dU = (0, QU.useRef)(0);
      (0, QU.useLayoutEffect)((() => {
        if (EU) return EU.current = UU => {
          var XU;
          dU.current = UU, null === (XU = YU.current) || void 0 === XU || XU.querySelectorAll("[data-arm]").forEach((XU => {
            Object.assign(XU.style, PU(function(UU) {
              return {
                x: Number(UU.dataset.x),
                y: Number(UU.dataset.y),
                arm: UU.dataset.arm
              }
            }(XU), UU, tU.current))
          }))
        }, () => {
          EU.current = null
        }
      }), [EU]);
      const LU = null !== DU && void 0 !== DU ? DU : dU.current;
      return (0, NU.jsx)("div", {
        ref: YU,
        className: yU()("CrosshairShapes", {
          CrosshairInPreview: zU,
          CrosshairInEditor: cU || zU,
          CrosshairSpreads: void 0 !== EU
        }),
        children: (0, NU.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: kU.x,
            top: kU.y,
            opacity: XU.opacity / 100
          },
          children: (0, NU.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [gU.ringOutline && (0, NU.jsx)("div", {
              className: "CrosshairRing",
              style: ZU(gU.ringOutline, aU, RU)
            }), gU.outlines.map(((UU, XU) => (0, NU.jsx)("div", {
              className: "CrosshairPart",
              ...WU(UU),
              style: BU(UU, LU, aU, RU)
            }, `o${XU}`))), gU.ring && (0, NU.jsx)("div", {
              className: "CrosshairRing",
              style: ZU(gU.ring, aU, GU)
            }), gU.fills.map(((UU, XU) => (0, NU.jsx)("div", {
              className: "CrosshairPart",
              ...WU(UU),
              style: BU(UU, LU, aU, GU)
            }, `f${XU}`)))]
          })
        })
      })
    }
  },
  34845: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => EU,
      g: () => tU,
      i: () => aU
    });
    var cU = zU(34827);
    const yU = "XH1-",
      QU = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      AU = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      FU = ["color", "outlineColor"],
      oU = 1 + 3 * FU.length + AU.length + 1,
      DU = Math.ceil(8 * oU / Math.log2(62)),
      EU = yU.length + DU;

    function YU(UU) {
      let XU = 90;
      for (const zU of UU) XU = 31 * XU + zU & 255;
      return XU
    }
    const NU = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      IU = BigInt(NU.length);

    function pU(UU, XU) {
      let zU = 0n;
      for (const yU of UU) {
        const UU = NU.indexOf(yU);
        if (UU < 0) return null;
        zU = zU * IU + BigInt(UU)
      }
      if (zU >> BigInt(8 * XU) !== 0n) return null;
      const cU = [];
      for (let yU = 0; yU < XU; yU++) cU.unshift(Number(0xffn & zU)), zU >>= 8n;
      return cU
    }

    function aU(UU) {
      let XU = "shapes" === UU.style ? 1 : 0;
      QU.forEach(((zU, cU) => {
        UU[zU] && (XU |= 1 << cU + 1)
      }));
      const zU = [XU];
      for (const yU of FU) {
        const XU = (0, cU.h)(yU, UU[yU]);
        zU.push(XU >> 16 & 255, XU >> 8 & 255, 255 & XU)
      }
      for (const yU of AU) {
        const {
          min: XU,
          step: QU
        } = cU.e[yU];
        zU.push(Math.round(((0, cU.h)(yU, UU[yU]) - XU) / QU))
      }
      return zU.push(YU(zU)), yU + function(UU, XU) {
        let zU = 0n;
        for (const yU of UU) zU = zU << 8n | BigInt(yU);
        let cU = "";
        for (let yU = 0; yU < XU; yU++) cU = NU[Number(zU % IU)] + cU, zU /= IU;
        return cU
      }(zU, DU)
    }

    function tU(UU) {
      for (const XU of UU.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${DU}})`, "gi"))) {
        const UU = gU(pU(XU[1], oU));
        if (UU) return UU
      }
      return null
    }

    function gU(UU) {
      if (!UU || UU.length !== oU || YU(UU.slice(0, -1)) !== UU[UU.length - 1]) return null;
      const XU = UU[0],
        zU = {
          ...cU.g,
          style: 1 & XU ? "shapes" : "classic"
        };
      QU.forEach(((UU, cU) => {
        zU[UU] = 0 !== (XU & 1 << cU + 1)
      }));
      let yU = 1;
      for (const cU of FU) zU[cU] = UU[yU] << 16 | UU[yU + 1] << 8 | UU[yU + 2], yU += 3;
      for (const QU of AU) {
        const {
          min: XU,
          step: AU
        } = cU.e[QU];
        zU[QU] = (0, cU.h)(QU, XU + UU[yU] * AU), yU++
      }
      return zU
    }
  },
  34827: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU,
      g: () => yU,
      h: () => QU,
      i: () => DU,
      l: () => oU,
      p: () => EU,
      q: () => FU,
      s: () => AU
    });
    const cU = {
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
      yU = Object.freeze({
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

    function QU(UU, XU) {
      var zU;
      const {
        min: QU,
        max: AU,
        step: FU
      } = cU[UU];
      if (!Number.isFinite(XU)) return yU[UU];
      const oU = (null !== (zU = String(FU).split(".")[1]) && void 0 !== zU ? zU : "").length,
        DU = Number((Math.round(XU / FU) * FU).toFixed(oU));
      return Math.min(AU, Math.max(QU, DU))
    }

    function AU(UU, XU, zU) {
      const cU = "number" === typeof zU ? QU(XU, zU) : zU;
      return {
        ...UU,
        [XU]: cU
      }
    }

    function FU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(yU).every((cU => zU.includes(cU) || UU[cU] === XU[cU]))
    }

    function oU(UU) {
      return FU(UU, yU)
    }

    function DU(UU) {
      return `#${UU.toString(16).padStart(6,"0")}`
    }

    function EU(UU) {
      const XU = /^#?([0-9a-f]{6})$/i.exec(UU.trim());
      return XU ? parseInt(XU[1], 16) : null
    }
  },
  34853: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => YU,
      f: () => NU
    });
    var cU = zU(61),
      yU = zU(42),
      QU = zU(34845),
      AU = zU(34827);
    const FU = "crosshairCode";
    let oU = null;
    const DU = new Set;

    function EU() {
      if (null === oU) {
        var UU;
        const XU = yU.k.getItem(FU);
        oU = null !== (UU = "string" === typeof XU ? (0, QU.g)(XU) : null) && void 0 !== UU ? UU : AU.g
      }
      return oU
    }

    function YU(UU) {
      oU = UU, (0, AU.l)(UU) ? yU.k.removeItem(FU) : yU.k.setItem(FU, (0, QU.i)(UU));
      for (const XU of DU) XU()
    }

    function NU() {
      const [UU, XU] = (0, cU.useState)(EU);
      return (0, cU.useEffect)((() => {
        const UU = () => {
          XU(EU())
        };
        return UU(), zU = UU, DU.add(zU), () => {
          DU.delete(zU)
        };
        var zU
      }), []), UU
    }
  },
  37487: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      f: () => oU,
      g: () => AU
    });
    var cU = zU(646),
      yU = zU(3043);

    function QU(UU) {
      return UU === (0, yU.e)().SXU ? (0, yU.e)().pM : UU
    }

    function AU(UU) {
      return !(0, cU.P)(UU) && QU(UU) === (0, yU.e)().pM
    }
    const FU = "gravity";

    function oU() {
      return (0, yU.e)().physics[FU][1]
    }
  },
  37478: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => PU
    });
    var cU = zU(37480),
      yU = zU(212),
      QU = zU(5378),
      AU = zU(37484),
      FU = zU(37148),
      oU = zU(37532),
      DU = zU(37487),
      EU = zU(352),
      YU = zU.n(EU),
      NU = zU(3043),
      IU = zU(37523),
      pU = zU(31),
      aU = zU(27),
      tU = zU(37492),
      gU = zU(37495),
      kU = zU(37502),
      GU = zU(37507);
    const BU = new Set(["note"]);
    const ZU = {
      stop: () => ZU,
      fade: () => ZU,
      rate: () => ZU,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => ZU,
      setPannerAttr: () => ZU,
      setPosition: () => ZU
    };
    class RU {
      constructor(UU) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new oU.i, this._howl = (0, FU.countDecodesAs)(new QU.Howl({
          src: [...(0, cU.y)(UU).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = this._howl.play(AU.d);
        UU && this._howl.loop(!0, XU);
        let zU = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), XU);
        const cU = {
          stop: () => {
            var UU;
            return null === (UU = this.liveHowl()) || void 0 === UU || UU.stop(XU), cU
          },
          fade: (UU, zU, yU) => {
            var QU;
            return null === (QU = this.liveHowl()) || void 0 === QU || QU.fade(UU, zU, yU, XU), cU
          },
          rate: UU => {
            var zU;
            return null === (zU = this.liveHowl()) || void 0 === zU || zU.rate(UU, XU), cU
          },
          stopsAtOnce: () => this._howl.playing(XU) && !this._howl._playLock,
          isAlive: () => {
            const UU = this._howl._soundById(XU);
            return !this._loadFailed && !!UU && !UU._ended
          },
          getDurationMs: () => this._howl._soundById(XU) ? 1e3 * this._howl.duration(XU) / this._howl.rate(XU) : 0,
          getVolume: () => zU * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => zU,
          setRelativeVolume: UU => {
            var yU;
            if (UU > 1) throw new Error("Volume should be <= 1");
            return zU = aU.e.get("soundOnFromAd") ? UU : 0, null === (yU = this.liveHowl()) || void 0 === yU || yU.volume(Math.min(1, zU * this._volumeMultiplier.getTotalMultipliedVal()), XU), cU
          },
          setPannerAttr: UU => {
            let {
              coneInnerAngle: zU,
              coneOuterAngle: yU = 360,
              coneOuterGain: QU,
              distanceModel: AU,
              maxDistance: FU,
              panningModel: oU,
              refDistance: DU,
              rolloffFactor: EU
            } = UU;
            return this._setPannerAttr({
              id: XU,
              coneInnerAngle: zU,
              coneOuterAngle: yU,
              coneOuterGain: QU,
              distanceModel: AU,
              maxDistance: FU,
              panningModel: oU,
              refDistance: DU,
              rolloffFactor: EU
            }), cU
          },
          setPosition: UU => {
            var zU;
            return null === (zU = this.liveHowl()) || void 0 === zU || zU.pos(UU[2], UU[1], UU[0], XU), cU
          }
        };
        return cU
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, AU.h)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(UU) {
        this._volumeMultiplier.setMultiplierType("globalVolume", UU), this._howl.volume(UU)
      }
      _setPannerAttr(UU) {
        let {
          id: XU,
          coneInnerAngle: zU = 360,
          coneOuterAngle: cU = 360,
          coneOuterGain: yU = 0,
          distanceModel: QU = "inverse",
          maxDistance: AU = 1e3,
          panningModel: FU = "HRTF",
          refDistance: oU = IU.g,
          rolloffFactor: DU = 1
        } = UU;
        const EU = this.liveHowl();
        if (null === EU) return;
        EU.pannerAttr({
          coneOuterAngle: cU
        }, XU);
        const YU = {
          coneInnerAngle: zU,
          coneOuterAngle: cU,
          coneOuterGain: yU,
          distanceModel: QU,
          maxDistance: AU,
          panningModel: FU,
          refDistance: oU,
          rolloffFactor: DU
        };
        EU.pannerAttr(YU, XU)
      }
    }
    const PU = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new tU.b, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, pU.k.subscribe("appManagerUpdated|soundVolume", (UU => {
          const XU = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const zU of XU) zU.setGlobalVolume(UU)
        }))
      }
      play(UU, XU) {
        var zU;
        let QU, AU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (zU = (0, NU.e)()) || void 0 === zU ? void 0 : zU.pM,
          FU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IU.f,
          oU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : IU.g,
          EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var pU;
        (0, NU.e)() ? QU = !!Array.isArray(AU) || (0, DU.c)(AU) !== (null === (pU = (0, NU.e)()) || void 0 === pU ? void 0 : pU.pM): QU = !1;
        const aU = (0, cU.n)(UU),
          gU = this.loadSound(QU ? this.spatialSounds : this.stereoSounds, UU);
        if (!QU) {
          const UU = gU.play(EU);
          return UU.setRelativeVolume(XU), UU
        }
        const kU = (0, NU.e)(),
          GU = Array.isArray(AU) ? AU : kU.xG.wG(AU),
          RU = kU.xG.wG(kU.pM);
        if (!GU || YU().sqrDist(GU, RU) > FU * FU) return ZU;
        let PU;
        if (!EU) {
          if (!this.spatialVoices.admit({
              group: BU.has(aU) ? null : (0, tU.e)(UU),
              loudness: (0, tU.d)(XU, YU().OD(GU, RU), oU),
              startMs: performance.now(),
              getDurationMs: () => {
                var UU, XU;
                return null !== (UU = null === (XU = PU) || void 0 === XU ? void 0 : XU.getDurationMs()) && void 0 !== UU ? UU : 0
              },
              isAlive: () => {
                var UU, XU;
                return null !== (UU = null === (XU = PU) || void 0 === XU ? void 0 : XU.isAlive()) && void 0 !== UU && UU
              },
              canStop: () => {
                var UU, XU;
                return null !== (UU = null === (XU = PU) || void 0 === XU ? void 0 : XU.stopsAtOnce()) && void 0 !== UU && UU
              },
              stop: () => {
                var UU;
                null === (UU = PU) || void 0 === UU || UU.stop()
              }
            })) return ZU
        }
        return PU = gU.play(EU), PU.setRelativeVolume(XU), PU.setPannerAttr({
          refDistance: oU
        }), PU.setPosition([GU[0], GU[1] + yU.f.cg * yU.f.playerEyeToHeightRatio, GU[2]]), PU
      }
      preload(UU) {
        const XU = (0, cU.t)(UU) ? [UU] : (0, cU.B)(UU);
        if (0 === XU.length) throw new Error(`Invalid sound name ${UU} (no sound has it or starts with it)`);
        for (const zU of XU) this.loadSound(this.stereoSounds, zU)
      }
      preloadAtIdle(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GU.c;
        const zU = UU.filter((UU => !this.idlePreloads.has(UU)));
        for (const yU of zU) this.idlePreloads.add(yU);
        const cU = this.idlePreloadGeneration;
        (0, kU.d)(zU, {
          ...XU,
          QU: () => cU !== this.idlePreloadGeneration,
          fetchFile: UU => {
            this.idlePreloads.delete(UU);
            try {
              return this.preload(UU), Promise.resolve()
            } catch (XU) {
              return Promise.reject(XU)
            }
          }
        })
      }
      loadSound(UU, XU) {
        const zU = UU[XU];
        if (zU) return zU;
        const yU = this.makeSound(UU, XU);
        for (const AU of null !== (QU = (0, cU.v)(XU)) && void 0 !== QU ? QU : []) {
          var QU;
          UU[AU] || this.makeSound(UU, AU)
        }
        return yU
      }
      makeSound(UU, XU) {
        (0, GU.e)(XU);
        const zU = new RU(XU);
        return zU.setGlobalVolume(aU.e.get("soundVolume")), UU[XU] = zU, zU
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const UU of [this.stereoSounds, this.spatialSounds])
          for (const [XU, zU] of Object.entries(UU)) !gU.d.has((0, cU.n)(XU)) && zU.loaded() && (zU.unloadOnceIdle(), delete UU[XU])
      }
    }
  },
  37562: (UU, XU, zU) => {
    function cU(UU, XU) {
      var zU, cU, yU, QU, AU, FU, oU, DU;
      return UU.name === XU.name && ((null === (zU = UU.attributes) || void 0 === zU || null === (cU = zU.customAttributes) || void 0 === cU ? void 0 : cU.stackKey) === (null === (yU = XU.attributes) || void 0 === yU || null === (QU = yU.customAttributes) || void 0 === QU ? void 0 : QU.stackKey) && (!0 !== (null === (AU = UU.attributes) || void 0 === AU || null === (FU = AU.customAttributes) || void 0 === FU ? void 0 : FU.unstackable) && !0 !== (null === (oU = XU.attributes) || void 0 === oU || null === (DU = oU.customAttributes) || void 0 === DU ? void 0 : DU.unstackable)))
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  37662: (UU, XU, zU) => {
    function cU(UU) {
      return UU.includes("Leaf Bed")
    }

    function yU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !cU(UU)
    }

    function QU(UU) {
      return UU.includes(" Strongbed")
    }

    function AU(UU) {
      return cU(UU) || yU(UU) || QU(UU)
    }
    zU.d(XU, {
      b: () => AU,
      c: () => cU,
      g: () => QU,
      j: () => yU
    })
  },
  37659: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU
    });
    var cU = zU(37662),
      yU = zU(9782);
    const QU = [],
      AU = [],
      FU = [],
      oU = [];
    for (const EU of Object.keys(yU.l))(0, cU.c)(EU) ? QU.push(EU) : (0, cU.j)(EU) && AU.push(EU), (0, cU.g)(EU) && FU.push(EU), (EU.includes(" Bed Head") || EU.includes(" Strongbed Head")) && oU.push(EU);
    const DU = {
      leafBeds: QU,
      woolBeds: AU,
      strongBeds: FU,
      beds: [...QU, ...AU, ...FU],
      bedHeads: oU,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  34837: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);