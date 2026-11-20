export const id = 113;
export const ids = [113];
export const modules = {
  36200: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => hU,
      g: () => IU
    });
    gU(8962);
    var tU = gU(56),
      pU = gU(1410),
      EU = gU(1800),
      PU = gU(1834),
      TU = gU(21),
      qU = gU(2254),
      KU = gU(36203),
      cU = gU(36209),
      GU = gU(8925),
      jU = gU(8953),
      uU = gU(8969),
      CU = gU(1090);
    const hU = (0, tU.memo)((function() {
      var UU;
      const {
        isTouchScreen: RU,
        clientEscMenuOptions: gU,
        scriptedCameraFacing: EU,
        crosshairShownOverride: hU,
        crosshairGameView: eU
      } = (0, TU.l)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), WU = (0, qU.g)("gunshotOrigin"), fU = (0, tU.useRef)(null), xU = (0, tU.useRef)(!1), [mU, JU] = (0, tU.useState)(QU);
      (0, pU.e)("cameraZoomSet", JU), (0, tU.useEffect)((() => {
        JU(QU())
      }), []);
      const wU = (0, PU.k)("heldItemAim"),
        bU = wU.gun,
        oU = (0, uU.h)(),
        ZU = (0, tU.useRef)(oU);
      ZU.current = oU;
      const [aU, YU] = (0, tU.useState)(!1);
      (0, tU.useEffect)((() => (0, cU.f)("crosshairAccuracy", IU)), []), (0, pU.e)("mouseState", (UU => {
        let {
          isDown: RU
        } = UU;
        xU.current = RU, fU.current && (fU.current.style.transform = (0, jU.i)(RU, ZU.current.growOnClick)), "shapes" === ZU.current.style && YU(RU)
      }));
      const BU = (0, GU.h)(RU, gU.touchActionButtons);
      return (null !== (UU = (0, KU.b)(eU, hU)) && void 0 !== UU ? UU : (0, KU.e)(wU, mU > 1, BU, WU)) ? "movement" === EU || "cursor" === EU ? null : (0, CU.jsxs)(CU.Fragment, {
        children: [bU && (0, CU.jsx)(nU, {
          custom: oU.forGuns && "shapes" === oU.style ? oU : null,
          touch: RU
        }), !bU && (0, CU.jsx)(jU.e, {
          settings: oU,
          touch: RU,
          pressRef: fU,
          pressed: "shapes" === oU.style ? aU : xU.current
        })]
      }) : null
    }));

    function QU() {
      return EU.gameBridge.lookup("cameraZoom", null)
    }
    const eU = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      WU = {
        current: null
      },
      fU = {
        current: null
      };
    let xU = 0,
      mU = 0;

    function IU(UU) {
      mU = UU, eU[0].current || WU.current || fU.current ? wU(UU) : xU = UU
    }

    function JU(UU) {
      return ((0, KU.d)(UU) - (0, KU.d)(0)) * window.innerHeight / 100
    }

    function wU(UU) {
      var RU;
      if (null === (RU = fU.current) || void 0 === RU || RU.call(fU, JU(UU)), eU[0].current) {
        const RU = `${(0,KU.d)(UU)}vh`;
        eU[0].current.style.transform = `translateX(calc(0px - ${RU}))`, eU[1].current.style.transform = `translateX(calc(0px + ${RU}))`, eU[2].current.style.transform = `translateY(calc(0px - ${RU}))`, eU[3].current.style.transform = `translateY(calc(0px + ${RU}))`
      }
      WU.current && (WU.current.style.filter = `blur(${Math.round(UU/10)}px)`)
    }

    function nU(UU) {
      let {
        custom: RU,
        touch: gU
      } = UU;
      const EU = (0, pU.h)("aimingOverlay", "none"),
        PU = "1.2vh",
        TU = "0.3vh";
      (0, tU.useEffect)((() => {
        xU && wU(xU)
      }), []);
      const qU = (0, tU.useRef)(null !== RU);
      return (0, tU.useLayoutEffect)((() => {
        var UU;
        RU ? null === (UU = fU.current) || void 0 === UU || UU.call(fU, JU(mU)) : qU.current && wU(mU);
        qU.current = null !== RU
      }), [RU]), (0, CU.jsxs)(CU.Fragment, {
        children: ["sniper" === EU && (0, CU.jsxs)("div", {
          ref: WU,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, CU.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, CU.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, CU.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, CU.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, CU.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === EU ? 0 : 1
          },
          children: [RU && (0, CU.jsx)(jU.e, {
            settings: RU,
            touch: gU,
            spreadRef: fU
          }), !RU && (0, CU.jsxs)(CU.Fragment, {
            children: [(0, CU.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: PU,
                height: TU,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: eU[0]
            }), (0, CU.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: PU,
                height: TU,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: eU[1]
            }), (0, CU.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: TU,
                height: PU,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: eU[2]
            }), (0, CU.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: TU,
                height: PU,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: eU[3]
            })]
          })]
        })]
      })
    }
  },
  8953: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU,
      i: () => GU
    });
    gU(8962);
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(56),
      PU = gU(8927);

    function TU(UU, RU) {
      return Math.max(1, Math.round(UU * RU))
    }

    function qU(UU, RU, gU) {
      const tU = 2 * gU >= RU - 1;
      return {
        x: UU,
        y: UU,
        size: RU,
        border: Math.min(gU, Math.floor(RU / 2)),
        filled: tU
      }
    }
    var KU = gU(1090);
    const cU = 1.4;

    function GU(UU, RU) {
      return UU && RU ? `scale(${cU})` : "scale(1)"
    }

    function jU(UU) {
      return "classic" === UU.settings.style ? (0, KU.jsx)(hU, {
        ...UU
      }) : (0, KU.jsx)(IU, {
        ...UU
      })
    }
    const uU = .125;

    function CU(UU, RU) {
      const gU = {};
      if (UU.color !== PU.d.color && (gU.color = (0, PU.j)(UU.color)), UU.opacity !== PU.d.opacity && (gU.opacity = UU.opacity / 100), UU.outline !== PU.d.outline || UU.outlineColor !== PU.d.outlineColor) {
        const RU = UU.outline,
          tU = (0, PU.j)(UU.outlineColor);
        gU.textShadow = RU > 0 ? `-${RU}px 0 ${tU}, 0 ${RU}px ${tU}, ${RU}px 0 ${tU}, 0 -${RU}px ${tU}` : "none"
      }
      if (UU.size !== PU.d.size) {
        const tU = UU.size / 100;
        gU.fontSize = RU ? `calc(max(1.3rem, 18px) * ${tU})` : `calc(1.3rem * ${tU})`, gU.marginTop = `-${uU}em`, gU.transformOrigin = `50% calc(50% + ${uU}em)`
      }
      return gU
    }

    function hU(UU) {
      let {
        settings: RU,
        touch: gU,
        inPreview: tU,
        inEditor: EU,
        pressed: PU = !1,
        pressRef: TU
      } = UU;
      return (0, KU.jsx)("div", {
        className: pU()("Crosshair", {
          Touch: gU,
          CrosshairInPreview: tU,
          CrosshairInEditor: EU || tU
        }),
        ref: TU,
        style: {
          transform: GU(PU, RU.growOnClick),
          ...CU(RU, gU)
        },
        children: "+"
      })
    }

    function QU(UU, RU) {
      return UU / RU + "px"
    }

    function eU(UU, RU, gU, tU) {
      return {
        ...xU(UU, RU, gU),
        width: QU(UU.w, gU),
        height: QU(UU.h, gU),
        background: tU
      }
    }

    function WU(UU, RU, gU) {
      return {
        left: QU(UU.x, RU),
        top: QU(UU.y, RU),
        width: QU(UU.size, RU),
        height: QU(UU.size, RU),
        borderWidth: QU(UU.border, RU),
        borderColor: gU,
        background: UU.filled ? gU : void 0
      }
    }
    const fU = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function xU(UU, RU, gU) {
      const [tU, pU] = UU.arm ? fU[UU.arm] : [0, 0], EU = Math.round(RU * gU);
      return {
        left: QU(UU.x + tU * EU, gU),
        top: QU(UU.y + pU * EU, gU)
      }
    }

    function mU(UU) {
      return UU.arm ? {
        "data-arm": UU.arm,
        "data-x": UU.x,
        "data-y": UU.y
      } : {}
    }

    function IU(UU) {
      let {
        settings: RU,
        inPreview: gU,
        inEditor: tU,
        pressed: GU = !1,
        spread: jU,
        spreadRef: uU
      } = UU;
      const CU = (0, EU.useRef)(null),
        {
          box: hU,
          dpr: QU
        } = function(UU) {
          const [RU, gU] = (0, EU.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, EU.useLayoutEffect)((() => {
            const RU = UU.current;
            if (!RU) return;
            const tU = () => {
              const UU = RU.getBoundingClientRect(),
                tU = window.devicePixelRatio || 1;
              gU((RU => RU.dpr === tU && RU.box.left === UU.left && RU.box.top === UU.top && RU.box.width === UU.width && RU.box.height === UU.height ? RU : {
                box: {
                  left: UU.left,
                  top: UU.top,
                  width: UU.width,
                  height: UU.height
                },
                dpr: tU
              }))
            };
            tU();
            const pU = new ResizeObserver(tU);
            return pU.observe(RU), window.addEventListener("resize", tU), window.addEventListener("scroll", tU, !0), () => {
              pU.disconnect(), window.removeEventListener("resize", tU), window.removeEventListener("scroll", tU, !0)
            }
          }), [UU]), RU
        }(CU),
        fU = (0, EU.useRef)(QU);
      fU.current = QU;
      const IU = function(UU, RU) {
          const gU = TU(UU.lineThickness, RU),
            tU = TU(UU.lineLength, RU),
            pU = Math.round(UU.gap * RU),
            EU = TU(UU.dotSize, RU),
            PU = UU.outline > 0 ? TU(UU.outline, RU) : 0,
            KU = TU(UU.circleThickness, RU),
            cU = UU.circle ? Math.round(UU.circleRadius * RU * 2 + KU) : 0,
            GU = function(UU, RU, gU, tU) {
              return UU.lines ? RU : UU.dot ? gU : UU.circle && tU % 2 === 0 ? 2 : 1
            }(UU, gU, EU, cU),
            jU = [];
          if (UU.lines && (jU.push({
              x: GU + pU,
              y: 0,
              w: tU,
              h: gU,
              arm: "right"
            }), jU.push({
              x: -pU - tU,
              y: 0,
              w: tU,
              h: gU,
              arm: "left"
            }), jU.push({
              x: 0,
              y: GU + pU,
              w: gU,
              h: tU,
              arm: "down"
            }), UU.tStyle || jU.push({
              x: 0,
              y: -pU - tU,
              w: gU,
              h: tU,
              arm: "up"
            }), 0 === pU && jU.push({
              x: 0,
              y: 0,
              w: gU,
              h: gU
            })), UU.dot) {
            const UU = Math.floor((GU - EU) / 2);
            jU.push({
              x: UU,
              y: UU,
              w: EU,
              h: EU
            })
          }
          const uU = jU.map((UU => ({
            ...UU,
            x: UU.x - PU,
            y: UU.y - PU,
            w: UU.w + 2 * PU,
            h: UU.h + 2 * PU
          })));
          let CU = null,
            hU = null;
          if (UU.circle) {
            const UU = cU + ((cU - GU) % 2 === 0 ? 0 : 1),
              RU = (GU - UU) / 2;
            CU = qU(RU, UU, KU), PU > 0 && (hU = qU(RU - PU, UU + 2 * PU, KU + 2 * PU))
          }
          return {
            cell: GU,
            fills: jU,
            outlines: PU > 0 ? uU : [],
            ring: CU,
            ringOutline: hU
          }
        }(GU && RU.growOnClick ? function(UU, RU) {
          return {
            ...UU,
            outline: UU.outline * RU,
            lineLength: UU.lineLength * RU,
            lineThickness: UU.lineThickness * RU,
            gap: UU.gap * RU,
            dotSize: UU.dotSize * RU,
            circleRadius: UU.circleRadius * RU,
            circleThickness: UU.circleThickness * RU
          }
        }(RU, cU) : RU, QU),
        JU = function(UU, RU, gU) {
          const tU = Math.round((UU.left + UU.width / 2) * gU - RU / 2),
            pU = Math.round((UU.top + UU.height / 2) * gU - RU / 2);
          return {
            x: tU / gU - UU.left,
            y: pU / gU - UU.top
          }
        }(hU, IU.cell, QU),
        wU = (0, PU.j)(RU.color),
        nU = (0, PU.j)(RU.outlineColor),
        bU = (0, EU.useRef)(0);
      (0, EU.useLayoutEffect)((() => {
        if (uU) return uU.current = UU => {
          var RU;
          bU.current = UU, null === (RU = CU.current) || void 0 === RU || RU.querySelectorAll("[data-arm]").forEach((RU => {
            Object.assign(RU.style, xU(function(UU) {
              return {
                x: Number(UU.dataset.x),
                y: Number(UU.dataset.y),
                arm: UU.dataset.arm
              }
            }(RU), UU, fU.current))
          }))
        }, () => {
          uU.current = null
        }
      }), [uU]);
      const oU = null !== jU && void 0 !== jU ? jU : bU.current;
      return (0, KU.jsx)("div", {
        ref: CU,
        className: pU()("CrosshairShapes", {
          CrosshairInPreview: gU,
          CrosshairInEditor: tU || gU,
          CrosshairSpreads: void 0 !== uU
        }),
        children: (0, KU.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: JU.x,
            top: JU.y,
            opacity: RU.opacity / 100
          },
          children: (0, KU.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [IU.ringOutline && (0, KU.jsx)("div", {
              className: "CrosshairRing",
              style: WU(IU.ringOutline, QU, nU)
            }), IU.outlines.map(((UU, RU) => (0, KU.jsx)("div", {
              className: "CrosshairPart",
              ...mU(UU),
              style: eU(UU, oU, QU, nU)
            }, `o${RU}`))), IU.ring && (0, KU.jsx)("div", {
              className: "CrosshairRing",
              style: WU(IU.ring, QU, wU)
            }), IU.fills.map(((UU, RU) => (0, KU.jsx)("div", {
              className: "CrosshairPart",
              ...mU(UU),
              style: eU(UU, oU, QU, wU)
            }, `f${RU}`)))]
          })
        })
      })
    }
  },
  8966: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => cU,
      d: () => QU,
      g: () => hU
    });
    var tU = gU(8927);
    const pU = "XH1-",
      EU = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      PU = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      TU = ["color", "outlineColor"],
      qU = 1 + 3 * TU.length + PU.length + 1,
      KU = Math.ceil(8 * qU / Math.log2(62)),
      cU = pU.length + KU;

    function GU(UU) {
      let RU = 90;
      for (const gU of UU) RU = 31 * RU + gU & 255;
      return RU
    }
    const jU = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      uU = BigInt(jU.length);

    function CU(UU, RU) {
      let gU = 0n;
      for (const pU of UU) {
        const UU = jU.indexOf(pU);
        if (UU < 0) return null;
        gU = gU * uU + BigInt(UU)
      }
      if (gU >> BigInt(8 * RU) !== 0n) return null;
      const tU = [];
      for (let pU = 0; pU < RU; pU++) tU.unshift(Number(0xffn & gU)), gU >>= 8n;
      return tU
    }

    function hU(UU) {
      let RU = "shapes" === UU.style ? 1 : 0;
      EU.forEach(((gU, tU) => {
        UU[gU] && (RU |= 1 << tU + 1)
      }));
      const gU = [RU];
      for (const pU of TU) {
        const RU = (0, tU.g)(pU, UU[pU]);
        gU.push(RU >> 16 & 255, RU >> 8 & 255, 255 & RU)
      }
      for (const pU of PU) {
        const {
          min: RU,
          step: EU
        } = tU.c[pU];
        gU.push(Math.round(((0, tU.g)(pU, UU[pU]) - RU) / EU))
      }
      return gU.push(GU(gU)), pU + function(UU, RU) {
        let gU = 0n;
        for (const pU of UU) gU = gU << 8n | BigInt(pU);
        let tU = "";
        for (let pU = 0; pU < RU; pU++) tU = jU[Number(gU % uU)] + tU, gU /= uU;
        return tU
      }(gU, KU)
    }

    function QU(UU) {
      for (const RU of UU.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${KU}})`, "gi"))) {
        const UU = eU(CU(RU[1], qU));
        if (UU) return UU
      }
      return null
    }

    function eU(UU) {
      if (!UU || UU.length !== qU || GU(UU.slice(0, -1)) !== UU[UU.length - 1]) return null;
      const RU = UU[0],
        gU = {
          ...tU.d,
          style: 1 & RU ? "shapes" : "classic"
        };
      EU.forEach(((UU, tU) => {
        gU[UU] = 0 !== (RU & 1 << tU + 1)
      }));
      let pU = 1;
      for (const tU of TU) gU[tU] = UU[pU] << 16 | UU[pU + 1] << 8 | UU[pU + 2], pU += 3;
      for (const EU of PU) {
        const {
          min: RU,
          step: PU
        } = tU.c[EU];
        gU[EU] = (0, tU.g)(EU, RU + UU[pU] * PU), pU++
      }
      return gU
    }
  },
  8927: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU,
      d: () => pU,
      g: () => EU,
      j: () => KU,
      k: () => qU,
      n: () => cU,
      r: () => TU,
      s: () => PU
    });
    const tU = {
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
      pU = Object.freeze({
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

    function EU(UU, RU) {
      var gU;
      const {
        min: EU,
        max: PU,
        step: TU
      } = tU[UU];
      if (!Number.isFinite(RU)) return pU[UU];
      const qU = (null !== (gU = String(TU).split(".")[1]) && void 0 !== gU ? gU : "").length,
        KU = Number((Math.round(RU / TU) * TU).toFixed(qU));
      return Math.min(PU, Math.max(EU, KU))
    }

    function PU(UU, RU, gU) {
      const tU = "number" === typeof gU ? EU(RU, gU) : gU;
      return {
        ...UU,
        [RU]: tU
      }
    }

    function TU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(pU).every((tU => gU.includes(tU) || UU[tU] === RU[tU]))
    }

    function qU(UU) {
      return TU(UU, pU)
    }

    function KU(UU) {
      return `#${UU.toString(16).padStart(6,"0")}`
    }

    function cU(UU) {
      const RU = /^#?([0-9a-f]{6})$/i.exec(UU.trim());
      return RU ? parseInt(RU[1], 16) : null
    }
  },
  8969: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU,
      h: () => jU
    });
    var tU = gU(56),
      pU = gU(34),
      EU = gU(8966),
      PU = gU(8927);
    const TU = "crosshairCode";
    let qU = null;
    const KU = new Set;

    function cU() {
      if (null === qU) {
        var UU;
        const RU = pU.k.getItem(TU);
        qU = null !== (UU = "string" === typeof RU ? (0, EU.d)(RU) : null) && void 0 !== UU ? UU : PU.d
      }
      return qU
    }

    function GU(UU) {
      qU = UU, (0, PU.k)(UU) ? pU.k.removeItem(TU) : pU.k.setItem(TU, (0, EU.g)(UU));
      for (const RU of KU) RU()
    }

    function jU() {
      const [UU, RU] = (0, tU.useState)(cU);
      return (0, tU.useEffect)((() => {
        const UU = () => {
          RU(cU())
        };
        return UU(), gU = UU, KU.add(gU), () => {
          KU.delete(gU)
        };
        var gU
      }), []), UU
    }
  },
  36313: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      g: () => qU,
      i: () => PU
    });
    var tU = gU(581),
      pU = gU(2551);

    function EU(UU) {
      return UU === (0, pU.g)().jUU ? (0, pU.g)().AY : UU
    }

    function PU(UU) {
      return !(0, tU.E)(UU) && EU(UU) === (0, pU.g)().AY
    }
    const TU = "gravity";

    function qU() {
      return (0, pU.g)().physics[TU][1]
    }
  },
  36015: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      countDecodesAs: () => cU,
      decodedAudio: () => GU
    });
    var tU = gU(4512);
    const pU = tU.Howler,
      EU = new Map;
    let PU = 0;
    const TU = {
        song: 0,
        sheet: 0
      },
      qU = new WeakMap,
      KU = new WeakSet;

    function cU(UU, RU) {
      return qU.set(UU, RU), UU
    }

    function GU() {
      return {
        bytes: PU,
        songsDecoded: TU.song,
        sheetsDecoded: TU.sheet
      }
    }

    function jU(UU) {
      if (KU.has(UU)) return;
      KU.add(UU);
      const RU = 1 === UU.decodeAudioData.length,
        gU = UU.decodeAudioData.bind(UU);
      UU.decodeAudioData = (UU, tU, KU) => {
        const cU = UU => {
          const RU = pU._howls.filter((UU => "loaded" !== UU._state));
          try {
            null === tU || void 0 === tU || tU(UU)
          } finally {
            const gU = RU.find((UU => "loaded" === UU._state));
            void 0 !== gU && "string" === typeof gU._src && function(UU, RU, gU) {
              var tU;
              PU += gU - (null !== (tU = EU.get(RU)) && void 0 !== tU ? tU : 0), EU.set(RU, gU);
              const pU = qU.get(UU);
              void 0 !== pU && TU[pU]++
            }(gU, gU._src, UU.length * UU.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return UU
        };
        if (!RU) return gU(UU, cU, KU);
        const GU = gU(UU).then(cU);
        return GU.catch((UU => {
          null === KU || void 0 === KU || KU(UU)
        })), GU
      }
    }
    const uU = tU.Howl.prototype,
      CU = uU.init;
    uU.init = function(UU) {
      return tU.Howler.volume(), pU.ctx && jU(pU.ctx), CU.call(this, UU)
    };
    const hU = uU.unload;
    uU.unload = function() {
      const UU = this._src,
        RU = hU.call(this);
      if ("string" !== typeof UU) return RU;
      const gU = EU.get(UU);
      return void 0 !== gU && function(UU) {
        return !pU._howls.some((RU => RU._src === UU || "string" === typeof RU._src && UU.indexOf(RU._src) >= 0))
      }(UU) && (EU.delete(UU), PU -= gU), RU
    }
  },
  36307: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => xU
    });
    var tU = gU(36311),
      pU = gU(189),
      EU = gU(4512),
      PU = gU(36015),
      TU = gU(36329),
      qU = gU(36313),
      KU = gU(316),
      cU = gU.n(KU),
      GU = gU(1196),
      jU = gU(2551),
      uU = gU(36324),
      CU = gU(24),
      hU = gU(21),
      QU = gU(36319);
    const eU = new Set(["note"]);
    const WU = {
      stop: () => WU,
      fade: () => WU,
      rate: () => WU,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => WU,
      setPannerAttr: () => WU,
      setPosition: () => WU
    };
    class fU {
      constructor(UU) {
        let RU, {
          src: gU,
          volumeScalar: pU,
          isSoundSprite: qU
        } = UU;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, qU ? (RU = (0, tU.e)(gU), this._spriteTrackSrc = RU) : RU = {
          src: GU.clientSideServerUrls.staticUrl + gU
        }, this._volumeMultiplier = new TU.e, this._volumeMultiplier.setMultiplierType("persistentScalar", pU), this._howl = (0, PU.countDecodesAs)(new EU.Howl({
          ...RU,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let UU, RU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          gU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (RU) {
          var tU;
          if (null === (tU = this._spriteTrackSrc) || void 0 === tU || !tU.sprite[RU]) throw new Error("No such sprite in your spritetrack");
          UU = this._howl.play(RU)
        } else UU = this._howl.play();
        gU && this._howl.loop(!0, UU);
        let pU = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), UU);
        const EU = {
          stop: () => (this._howl.stop(UU), EU),
          fade: (RU, gU, tU) => (this._howl.fade(RU, gU, tU, UU), EU),
          rate: RU => (this._howl.rate(RU, UU), EU),
          stopsAtOnce: () => this._howl.playing(UU) && !this._howl._playLock,
          isAlive: () => {
            const RU = this._howl._soundById(UU);
            return !this._loadFailed && !!RU && !RU._ended
          },
          getDurationMs: () => this._howl._soundById(UU) ? 1e3 * this._howl.duration(UU) / this._howl.rate(UU) : 0,
          getVolume: () => pU * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => pU,
          setRelativeVolume: RU => {
            if (RU > 1) throw new Error("Volume should be <= 1");
            return pU = hU.b.get("soundOnFromAd") ? RU : 0, this._howl.volume(Math.min(1, pU * this._volumeMultiplier.getTotalMultipliedVal()), UU), EU
          },
          setPannerAttr: RU => {
            let {
              coneInnerAngle: gU,
              coneOuterAngle: tU = 360,
              coneOuterGain: pU,
              distanceModel: PU,
              maxDistance: TU,
              panningModel: qU,
              refDistance: KU,
              rolloffFactor: cU
            } = RU;
            return this._setPannerAttr({
              id: UU,
              coneInnerAngle: gU,
              coneOuterAngle: tU,
              coneOuterGain: pU,
              distanceModel: PU,
              maxDistance: TU,
              panningModel: qU,
              refDistance: KU,
              rolloffFactor: cU
            }), EU
          },
          setPosition: RU => (this._howl.pos(RU[2], RU[1], RU[0], UU), EU)
        };
        return EU
      }
      setGlobalVolume(UU) {
        this._volumeMultiplier.setMultiplierType("globalVolume", UU), this._howl.volume(UU)
      }
      _setPannerAttr(UU) {
        let {
          id: RU,
          coneInnerAngle: gU = 360,
          coneOuterAngle: tU = 360,
          coneOuterGain: pU = 0,
          distanceModel: EU = "inverse",
          maxDistance: PU = 1e3,
          panningModel: TU = "HRTF",
          refDistance: qU = uU.e,
          rolloffFactor: KU = 1
        } = UU;
        this._howl.pannerAttr({
          coneOuterAngle: tU
        }, RU);
        const cU = {
          coneInnerAngle: gU,
          coneOuterAngle: tU,
          coneOuterGain: pU,
          distanceModel: EU,
          maxDistance: PU,
          panningModel: TU,
          refDistance: qU,
          rolloffFactor: KU
        };
        this._howl.pannerAttr(cU, RU)
      }
    }
    const xU = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new QU.b, CU.p.subscribe("appManagerUpdated|soundVolume", (UU => {
          const RU = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const gU of RU) gU.setGlobalVolume(UU)
        }))
      }
      play(UU, RU) {
        var gU;
        let EU, PU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (gU = (0, jU.g)()) || void 0 === gU ? void 0 : gU.AY,
          TU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uU.d,
          KU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uU.e,
          GU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var CU;
        (0, jU.g)() ? EU = !!Array.isArray(PU) || (0, qU.c)(PU) !== (null === (CU = (0, jU.g)()) || void 0 === CU ? void 0 : CU.AY): EU = !1;
        const xU = EU ? this.spatialSheets : this.stereoSheets,
          mU = (0, tU.g)(UU);
        if (!xU[mU]) {
          const UU = new fU({
            src: mU,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          UU.setGlobalVolume(hU.b.get("soundVolume")), xU[mU] = UU
        }
        const IU = xU[mU];
        if (!EU) {
          const gU = IU.play(UU, GU);
          return gU.setRelativeVolume(RU), gU
        }
        const JU = (0, jU.g)(),
          wU = Array.isArray(PU) ? PU : JU.Im.Hx(PU),
          nU = JU.Im.Hx(JU.AY);
        if (!wU || cU().sqrDist(wU, nU) > TU * TU) return WU;
        let bU;
        if (!GU) {
          if (!this.spatialVoices.admit({
              group: eU.has(mU) ? null : (0, QU.g)(UU),
              loudness: (0, QU.f)(RU, cU().OP(wU, nU), KU),
              startMs: performance.now(),
              getDurationMs: () => {
                var UU, RU;
                return null !== (UU = null === (RU = bU) || void 0 === RU ? void 0 : RU.getDurationMs()) && void 0 !== UU ? UU : 0
              },
              isAlive: () => {
                var UU, RU;
                return null !== (UU = null === (RU = bU) || void 0 === RU ? void 0 : RU.isAlive()) && void 0 !== UU && UU
              },
              canStop: () => {
                var UU, RU;
                return null !== (UU = null === (RU = bU) || void 0 === RU ? void 0 : RU.stopsAtOnce()) && void 0 !== UU && UU
              },
              stop: () => {
                var UU;
                null === (UU = bU) || void 0 === UU || UU.stop()
              }
            })) return WU
        }
        return bU = IU.play(UU, GU), bU.setRelativeVolume(RU), bU.setPannerAttr({
          refDistance: KU
        }), bU.setPosition([wU[0], wU[1] + pU.e.FW * pU.e.playerEyeToHeightRatio, wU[2]]), bU
      }
    }
  },
  36386: (UU, RU, gU) => {
    function tU(UU, RU) {
      var gU, tU, pU, EU, PU, TU, qU, KU;
      return UU.name === RU.name && ((null === (gU = UU.attributes) || void 0 === gU || null === (tU = gU.customAttributes) || void 0 === tU ? void 0 : tU.stackKey) === (null === (pU = RU.attributes) || void 0 === pU || null === (EU = pU.customAttributes) || void 0 === EU ? void 0 : EU.stackKey) && (!0 !== (null === (PU = UU.attributes) || void 0 === PU || null === (TU = PU.customAttributes) || void 0 === TU ? void 0 : TU.unstackable) && !0 !== (null === (qU = RU.attributes) || void 0 === qU || null === (KU = qU.customAttributes) || void 0 === KU ? void 0 : KU.unstackable)))
    }
    gU.d(RU, {
      c: () => tU
    })
  },
  36470: (UU, RU, gU) => {
    function tU(UU) {
      return UU.includes("Leaf Bed")
    }

    function pU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !tU(UU)
    }

    function EU(UU) {
      return UU.includes(" Strongbed")
    }

    function PU(UU) {
      return tU(UU) || pU(UU) || EU(UU)
    }
    gU.d(RU, {
      d: () => PU,
      e: () => tU,
      i: () => EU,
      m: () => pU
    })
  },
  36467: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU
    });
    var tU = gU(36470),
      pU = gU(9078);
    const EU = [],
      PU = [],
      TU = [],
      qU = [];
    for (const cU of Object.keys(pU.k))(0, tU.e)(cU) ? EU.push(cU) : (0, tU.m)(cU) && PU.push(cU), (0, tU.i)(cU) && TU.push(cU), (cU.includes(" Bed Head") || cU.includes(" Strongbed Head")) && qU.push(cU);
    const KU = {
      leafBeds: EU,
      woolBeds: PU,
      strongBeds: TU,
      beds: [...EU, ...PU, ...TU],
      bedHeads: qU,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6152: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      h: () => pU,
      l: () => qU,
      p: () => EU,
      r: () => KU,
      u: () => tU,
      y: () => TU
    });
    let tU = function(UU) {
        return UU[UU.DEFAULT = 0] = "DEFAULT", UU[UU.BOAT = 1] = "BOAT", UU[UU.GLIDER = 2] = "GLIDER", UU[UU.BALLOON = 3] = "BALLOON", UU[UU.SLEEPING = 4] = "SLEEPING", UU[UU.RIDING_MOB = 5] = "RIDING_MOB", UU[UU.CAR = 6] = "CAR", UU[UU.HOVERCRAFT = 7] = "HOVERCRAFT", UU
      }({}),
      pU = function(UU) {
        return UU[UU.WOOD = 0] = "WOOD", UU[UU.OBSIDIAN = 1] = "OBSIDIAN", UU[UU.SPEED = 2] = "SPEED", UU
      }({}),
      EU = function(UU) {
        return UU[UU.WOOD = 0] = "WOOD", UU[UU.IRON = 1] = "IRON", UU[UU.GOLD = 2] = "GOLD", UU[UU.DIAMOND = 3] = "DIAMOND", UU
      }({}),
      PU = function(UU) {
        return UU[UU.YELLOW = 0] = "YELLOW", UU[UU.WHITE = 1] = "WHITE", UU[UU.RED = 2] = "RED", UU[UU.PURPLE = 3] = "PURPLE", UU[UU.PINK = 4] = "PINK", UU[UU.ORANGE = 5] = "ORANGE", UU[UU.MAGENTA = 6] = "MAGENTA", UU[UU.LIME = 7] = "LIME", UU[UU.LIGHT_GRAY = 8] = "LIGHT_GRAY", UU[UU.LIGHT_BLUE = 9] = "LIGHT_BLUE", UU[UU.GREEN = 10] = "GREEN", UU[UU.GRAY = 11] = "GRAY", UU[UU.CYAN = 12] = "CYAN", UU[UU.BROWN = 13] = "BROWN", UU[UU.BLUE = 14] = "BLUE", UU[UU.BLACK = 15] = "BLACK", UU
      }({}),
      TU = function(UU) {
        return UU[UU.ROTATION_1 = 0] = "ROTATION_1", UU[UU.ROTATION_2 = 1] = "ROTATION_2", UU[UU.ROTATION_3 = 2] = "ROTATION_3", UU[UU.ROTATION_4 = 3] = "ROTATION_4", UU
      }({}),
      qU = function(UU) {
        return UU[UU.KART = 0] = "KART", UU[UU.OFF_ROADER = 1] = "OFF_ROADER", UU[UU.CAR = 2] = "CAR", UU[UU.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", UU[UU.ARMORED_CAR = 4] = "ARMORED_CAR", UU[UU.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", UU[UU.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", UU[UU.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", UU
      }({});
    tU.DEFAULT, tU.BOAT, pU.SPEED, tU.GLIDER, EU.DIAMOND, tU.BALLOON, PU.BLACK, tU.SLEEPING, TU.ROTATION_4, tU.RIDING_MOB, tU.CAR, qU.MOONSTONE_MINING_DRILL, tU.HOVERCRAFT;
    let KU = function(UU) {
      return UU[UU.NORMAL = 0] = "NORMAL", UU[UU.GLIDING = 1] = "GLIDING", UU[UU.FLOATING = 2] = "FLOATING", UU
    }({})
  },
  8962: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);