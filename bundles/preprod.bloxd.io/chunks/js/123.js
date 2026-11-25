export const id = 123;
export const ids = [123];
export const modules = {
  36912: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => BQ,
      d: () => bQ
    });
    XQ(34485);
    var wQ = XQ(61),
      qQ = XQ(1498),
      TQ = XQ(2003),
      zQ = XQ(2052),
      sQ = XQ(26),
      FQ = XQ(2535),
      PQ = XQ(36920),
      gQ = XQ(36926),
      JQ = XQ(34469),
      rQ = XQ(34480),
      IQ = XQ(34491),
      jQ = XQ(1145);
    const BQ = (0, wQ.memo)((function() {
      var QQ;
      const {
        isTouchScreen: WQ,
        clientEscMenuOptions: XQ,
        scriptedCameraFacing: TQ,
        crosshairShownOverride: BQ,
        crosshairGameView: VQ
      } = (0, sQ.n)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), DQ = (0, FQ.g)("gunshotOrigin"), pQ = (0, wQ.useRef)(null), GQ = (0, wQ.useRef)(!1), [UQ, vQ] = (0, wQ.useState)(yQ);
      (0, qQ.f)("cameraZoomSet", vQ), (0, wQ.useEffect)((() => {
        vQ(yQ())
      }), []);
      const dQ = (0, zQ.e)("heldItemAim"),
        aQ = dQ.gun,
        lQ = (0, IQ.e)(),
        hQ = (0, wQ.useRef)(lQ);
      hQ.current = lQ;
      const [iQ, cQ] = (0, wQ.useState)(!1);
      (0, wQ.useEffect)((() => (0, gQ.f)("crosshairAccuracy", bQ)), []), (0, qQ.f)("mouseState", (QQ => {
        let {
          isDown: WQ
        } = QQ;
        GQ.current = WQ, pQ.current && (pQ.current.style.transform = (0, rQ.f)(WQ, hQ.current.growOnClick)), "shapes" === hQ.current.style && cQ(WQ)
      }));
      const AQ = (0, JQ.d)(WQ, XQ.touchActionButtons);
      return (null !== (QQ = (0, PQ.e)(VQ, BQ)) && void 0 !== QQ ? QQ : (0, PQ.l)(dQ, UQ > 1, AQ, DQ)) ? "movement" === TQ || "cursor" === TQ ? null : (0, jQ.jsxs)(jQ.Fragment, {
        children: [aQ && (0, jQ.jsx)(HQ, {
          custom: lQ.forGuns && "shapes" === lQ.style ? lQ : null,
          touch: WQ
        }), !aQ && (0, jQ.jsx)(rQ.c, {
          settings: lQ,
          touch: WQ,
          pressRef: pQ,
          pressed: "shapes" === lQ.style ? iQ : GQ.current
        })]
      }) : null
    }));

    function yQ() {
      return TQ.gameBridge.lookup("cameraZoom", null)
    }
    const VQ = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      DQ = {
        current: null
      },
      pQ = {
        current: null
      };
    let GQ = 0,
      UQ = 0;

    function bQ(QQ) {
      UQ = QQ, VQ[0].current || DQ.current || pQ.current ? dQ(QQ) : GQ = QQ
    }

    function vQ(QQ) {
      return ((0, PQ.i)(QQ) - (0, PQ.i)(0)) * window.innerHeight / 100
    }

    function dQ(QQ) {
      var WQ;
      if (null === (WQ = pQ.current) || void 0 === WQ || WQ.call(pQ, vQ(QQ)), VQ[0].current) {
        const WQ = `${(0,PQ.i)(QQ)}vh`;
        VQ[0].current.style.transform = `translateX(calc(0px - ${WQ}))`, VQ[1].current.style.transform = `translateX(calc(0px + ${WQ}))`, VQ[2].current.style.transform = `translateY(calc(0px - ${WQ}))`, VQ[3].current.style.transform = `translateY(calc(0px + ${WQ}))`
      }
      DQ.current && (DQ.current.style.filter = `blur(${Math.round(QQ/10)}px)`)
    }

    function HQ(QQ) {
      let {
        custom: WQ,
        touch: XQ
      } = QQ;
      const TQ = (0, qQ.j)("aimingOverlay", "none"),
        zQ = "1.2vh",
        sQ = "0.3vh";
      (0, wQ.useEffect)((() => {
        GQ && dQ(GQ)
      }), []);
      const FQ = (0, wQ.useRef)(null !== WQ);
      return (0, wQ.useLayoutEffect)((() => {
        var QQ;
        WQ ? null === (QQ = pQ.current) || void 0 === QQ || QQ.call(pQ, vQ(UQ)) : FQ.current && dQ(UQ);
        FQ.current = null !== WQ
      }), [WQ]), (0, jQ.jsxs)(jQ.Fragment, {
        children: ["sniper" === TQ && (0, jQ.jsxs)("div", {
          ref: DQ,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, jQ.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, jQ.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, jQ.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, jQ.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, jQ.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === TQ ? 0 : 1
          },
          children: [WQ && (0, jQ.jsx)(rQ.c, {
            settings: WQ,
            touch: XQ,
            spreadRef: pQ
          }), !WQ && (0, jQ.jsxs)(jQ.Fragment, {
            children: [(0, jQ.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: zQ,
                height: sQ,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: VQ[0]
            }), (0, jQ.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: zQ,
                height: sQ,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: VQ[1]
            }), (0, jQ.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: sQ,
                height: zQ,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: VQ[2]
            }), (0, jQ.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: sQ,
                height: zQ,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: VQ[3]
            })]
          })]
        })]
      })
    }
  },
  34480: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => BQ,
      f: () => jQ
    });
    XQ(34485);
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(61),
      zQ = XQ(34471);

    function sQ(QQ, WQ) {
      return Math.max(1, Math.round(QQ * WQ))
    }

    function FQ(QQ, WQ) {
      const XQ = WQ * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        wQ = function(QQ, WQ) {
          if (QQ.lines) return sQ(QQ.lineThickness, WQ) % 2;
          if (QQ.dot) return sQ(QQ.dotSize, WQ) % 2;
          return PQ(QQ, WQ) % 2
        }(QQ, WQ),
        qQ = gQ(QQ.lineThickness * XQ, wQ),
        TQ = sQ(QQ.lineLength, XQ),
        zQ = Math.round(QQ.gap * XQ),
        FQ = QQ.outline > 0 ? sQ(QQ.outline, XQ) : 0,
        rQ = [];
      if (QQ.lines && (rQ.push({
          x: qQ + zQ,
          y: 0,
          w: TQ,
          h: qQ,
          arm: "right"
        }), rQ.push({
          x: -zQ - TQ,
          y: 0,
          w: TQ,
          h: qQ,
          arm: "left"
        }), rQ.push({
          x: 0,
          y: qQ + zQ,
          w: qQ,
          h: TQ,
          arm: "down"
        }), QQ.tStyle || rQ.push({
          x: 0,
          y: -zQ - TQ,
          w: qQ,
          h: TQ,
          arm: "up"
        }), 0 === zQ && rQ.push({
          x: 0,
          y: 0,
          w: qQ,
          h: qQ
        })), QQ.dot) {
        const WQ = gQ(QQ.dotSize * XQ, wQ),
          TQ = QQ.lines && 0 === zQ && QQ.dotSize > QQ.lineThickness ? Math.max(WQ, qQ + 2) : WQ,
          sQ = (qQ - TQ) / 2;
        rQ.push({
          x: sQ,
          y: sQ,
          w: TQ,
          h: TQ
        })
      }
      const IQ = rQ.map((QQ => ({
        ...QQ,
        x: QQ.x - FQ,
        y: QQ.y - FQ,
        w: QQ.w + 2 * FQ,
        h: QQ.h + 2 * FQ
      })));
      let jQ = null,
        BQ = null;
      if (QQ.circle) {
        const WQ = sQ(QQ.circleThickness, XQ),
          TQ = function(QQ, WQ) {
            return QQ + (QQ % 2 === WQ ? 0 : 1)
          }(PQ(QQ, XQ), wQ),
          zQ = (qQ - TQ) / 2;
        jQ = JQ(zQ, TQ, WQ), FQ > 0 && (BQ = JQ(zQ - FQ, TQ + 2 * FQ, WQ + 2 * FQ))
      }
      return {
        cell: qQ,
        fills: rQ,
        outlines: FQ > 0 ? IQ : [],
        ring: jQ,
        ringOutline: BQ
      }
    }

    function PQ(QQ, WQ) {
      return Math.round(QQ.circleRadius * WQ * 2 + sQ(QQ.circleThickness, WQ))
    }

    function gQ(QQ, WQ) {
      return Math.max(2 - WQ, 2 * Math.round((QQ - WQ) / 2) + WQ)
    }

    function JQ(QQ, WQ, XQ) {
      const wQ = 2 * XQ >= WQ - 1;
      return {
        x: QQ,
        y: QQ,
        size: WQ,
        border: Math.min(XQ, Math.floor(WQ / 2)),
        filled: wQ
      }
    }
    var rQ = XQ(1145);
    const IQ = 1.4;

    function jQ(QQ, WQ) {
      return QQ && WQ ? `scale(${IQ})` : "scale(1)"
    }

    function BQ(QQ) {
      return "classic" === QQ.settings.style ? (0, rQ.jsx)(DQ, {
        ...QQ
      }) : (0, rQ.jsx)(HQ, {
        ...QQ
      })
    }
    const yQ = .125;

    function VQ(QQ, WQ) {
      const XQ = {};
      if (QQ.color !== zQ.h.color && (XQ.color = (0, zQ.l)(QQ.color)), QQ.opacity !== zQ.h.opacity && (XQ.opacity = QQ.opacity / 100), QQ.outline !== zQ.h.outline || QQ.outlineColor !== zQ.h.outlineColor) {
        const WQ = QQ.outline,
          wQ = (0, zQ.l)(QQ.outlineColor);
        XQ.textShadow = WQ > 0 ? `-${WQ}px 0 ${wQ}, 0 ${WQ}px ${wQ}, ${WQ}px 0 ${wQ}, 0 -${WQ}px ${wQ}` : "none"
      }
      if (QQ.size !== zQ.h.size) {
        const wQ = QQ.size / 100;
        XQ.fontSize = WQ ? `calc(max(1.3rem, 18px) * ${wQ})` : `calc(1.3rem * ${wQ})`, XQ.marginTop = `-${yQ}em`, XQ.transformOrigin = `50% calc(50% + ${yQ}em)`
      }
      return XQ
    }

    function DQ(QQ) {
      let {
        settings: WQ,
        touch: XQ,
        inPreview: wQ,
        inEditor: TQ,
        pressed: zQ = !1,
        pressRef: sQ
      } = QQ;
      return (0, rQ.jsx)("div", {
        className: qQ()("Crosshair", {
          Touch: XQ,
          CrosshairInPreview: wQ,
          CrosshairInEditor: TQ || wQ
        }),
        ref: sQ,
        style: {
          transform: jQ(zQ, WQ.growOnClick),
          ...VQ(WQ, XQ)
        },
        children: "+"
      })
    }

    function pQ(QQ, WQ) {
      return QQ / WQ + "px"
    }

    function GQ(QQ, WQ, XQ, wQ) {
      return {
        ...vQ(QQ, WQ, XQ),
        width: pQ(QQ.w, XQ),
        height: pQ(QQ.h, XQ),
        background: wQ
      }
    }

    function UQ(QQ, WQ, XQ) {
      return {
        left: pQ(QQ.x, WQ),
        top: pQ(QQ.y, WQ),
        width: pQ(QQ.size, WQ),
        height: pQ(QQ.size, WQ),
        borderWidth: pQ(QQ.border, WQ),
        borderColor: XQ,
        background: QQ.filled ? XQ : void 0
      }
    }
    const bQ = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function vQ(QQ, WQ, XQ) {
      const [wQ, qQ] = QQ.arm ? bQ[QQ.arm] : [0, 0], TQ = Math.round(WQ * XQ);
      return {
        left: pQ(QQ.x + wQ * TQ, XQ),
        top: pQ(QQ.y + qQ * TQ, XQ)
      }
    }

    function dQ(QQ) {
      return QQ.arm ? {
        "data-arm": QQ.arm,
        "data-x": QQ.x,
        "data-y": QQ.y
      } : {}
    }

    function HQ(QQ) {
      let {
        settings: WQ,
        inPreview: XQ,
        inEditor: wQ,
        pressed: sQ = !1,
        spread: PQ,
        spreadRef: gQ
      } = QQ;
      const JQ = (0, TQ.useRef)(null),
        {
          box: jQ,
          dpr: BQ
        } = function(QQ) {
          const [WQ, XQ] = (0, TQ.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, TQ.useLayoutEffect)((() => {
            const WQ = QQ.current;
            if (!WQ) return;
            const wQ = () => {
              const QQ = WQ.getBoundingClientRect(),
                wQ = window.devicePixelRatio || 1;
              XQ((WQ => WQ.dpr === wQ && WQ.box.left === QQ.left && WQ.box.top === QQ.top && WQ.box.width === QQ.width && WQ.box.height === QQ.height ? WQ : {
                box: {
                  left: QQ.left,
                  top: QQ.top,
                  width: QQ.width,
                  height: QQ.height
                },
                dpr: wQ
              }))
            };
            wQ();
            const qQ = new ResizeObserver(wQ);
            return qQ.observe(WQ), window.addEventListener("resize", wQ), window.addEventListener("scroll", wQ, !0), () => {
              qQ.disconnect(), window.removeEventListener("resize", wQ), window.removeEventListener("scroll", wQ, !0)
            }
          }), [QQ]), WQ
        }(JQ),
        yQ = (0, TQ.useRef)(BQ);
      yQ.current = BQ;
      const VQ = FQ(WQ, BQ, sQ && WQ.growOnClick ? IQ : 1),
        DQ = function(QQ, WQ, XQ) {
          const wQ = Math.round((QQ.left + QQ.width / 2) * XQ - WQ / 2),
            qQ = Math.round((QQ.top + QQ.height / 2) * XQ - WQ / 2);
          return {
            x: wQ / XQ - QQ.left,
            y: qQ / XQ - QQ.top
          }
        }(jQ, VQ.cell, BQ),
        pQ = (0, zQ.l)(WQ.color),
        bQ = (0, zQ.l)(WQ.outlineColor),
        HQ = (0, TQ.useRef)(0);
      (0, TQ.useLayoutEffect)((() => {
        if (gQ) return gQ.current = QQ => {
          var WQ;
          HQ.current = QQ, null === (WQ = JQ.current) || void 0 === WQ || WQ.querySelectorAll("[data-arm]").forEach((WQ => {
            Object.assign(WQ.style, vQ(function(QQ) {
              return {
                x: Number(QQ.dataset.x),
                y: Number(QQ.dataset.y),
                arm: QQ.dataset.arm
              }
            }(WQ), QQ, yQ.current))
          }))
        }, () => {
          gQ.current = null
        }
      }), [gQ]);
      const aQ = null !== PQ && void 0 !== PQ ? PQ : HQ.current;
      return (0, rQ.jsx)("div", {
        ref: JQ,
        className: qQ()("CrosshairShapes", {
          CrosshairInPreview: XQ,
          CrosshairInEditor: wQ || XQ,
          CrosshairSpreads: void 0 !== gQ
        }),
        children: (0, rQ.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: DQ.x,
            top: DQ.y,
            opacity: WQ.opacity / 100
          },
          children: (0, rQ.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [VQ.ringOutline && (0, rQ.jsx)("div", {
              className: "CrosshairRing",
              style: UQ(VQ.ringOutline, BQ, bQ)
            }), VQ.outlines.map(((QQ, WQ) => (0, rQ.jsx)("div", {
              className: "CrosshairPart",
              ...dQ(QQ),
              style: GQ(QQ, aQ, BQ, bQ)
            }, `o${WQ}`))), VQ.ring && (0, rQ.jsx)("div", {
              className: "CrosshairRing",
              style: UQ(VQ.ring, BQ, pQ)
            }), VQ.fills.map(((QQ, WQ) => (0, rQ.jsx)("div", {
              className: "CrosshairPart",
              ...dQ(QQ),
              style: GQ(QQ, aQ, BQ, pQ)
            }, `f${WQ}`)))]
          })
        })
      })
    }
  },
  34488: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      h: () => yQ,
      j: () => BQ
    });
    var wQ = XQ(34471);
    const qQ = "XH1-",
      TQ = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      zQ = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      sQ = ["color", "outlineColor"],
      FQ = 1 + 3 * sQ.length + zQ.length + 1,
      PQ = Math.ceil(8 * FQ / Math.log2(62)),
      gQ = qQ.length + PQ;

    function JQ(QQ) {
      let WQ = 90;
      for (const XQ of QQ) WQ = 31 * WQ + XQ & 255;
      return WQ
    }
    const rQ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      IQ = BigInt(rQ.length);

    function jQ(QQ, WQ) {
      let XQ = 0n;
      for (const qQ of QQ) {
        const QQ = rQ.indexOf(qQ);
        if (QQ < 0) return null;
        XQ = XQ * IQ + BigInt(QQ)
      }
      if (XQ >> BigInt(8 * WQ) !== 0n) return null;
      const wQ = [];
      for (let qQ = 0; qQ < WQ; qQ++) wQ.unshift(Number(0xffn & XQ)), XQ >>= 8n;
      return wQ
    }

    function BQ(QQ) {
      let WQ = "shapes" === QQ.style ? 1 : 0;
      TQ.forEach(((XQ, wQ) => {
        QQ[XQ] && (WQ |= 1 << wQ + 1)
      }));
      const XQ = [WQ];
      for (const qQ of sQ) {
        const WQ = (0, wQ.i)(qQ, QQ[qQ]);
        XQ.push(WQ >> 16 & 255, WQ >> 8 & 255, 255 & WQ)
      }
      for (const qQ of zQ) {
        const {
          min: WQ,
          step: TQ
        } = wQ.e[qQ];
        XQ.push(Math.round(((0, wQ.i)(qQ, QQ[qQ]) - WQ) / TQ))
      }
      return XQ.push(JQ(XQ)), qQ + function(QQ, WQ) {
        let XQ = 0n;
        for (const qQ of QQ) XQ = XQ << 8n | BigInt(qQ);
        let wQ = "";
        for (let qQ = 0; qQ < WQ; qQ++) wQ = rQ[Number(XQ % IQ)] + wQ, XQ /= IQ;
        return wQ
      }(XQ, PQ)
    }

    function yQ(QQ) {
      for (const WQ of QQ.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${PQ}})`, "gi"))) {
        const QQ = VQ(jQ(WQ[1], FQ));
        if (QQ) return QQ
      }
      return null
    }

    function VQ(QQ) {
      if (!QQ || QQ.length !== FQ || JQ(QQ.slice(0, -1)) !== QQ[QQ.length - 1]) return null;
      const WQ = QQ[0],
        XQ = {
          ...wQ.h,
          style: 1 & WQ ? "shapes" : "classic"
        };
      TQ.forEach(((QQ, wQ) => {
        XQ[QQ] = 0 !== (WQ & 1 << wQ + 1)
      }));
      let qQ = 1;
      for (const wQ of sQ) XQ[wQ] = QQ[qQ] << 16 | QQ[qQ + 1] << 8 | QQ[qQ + 2], qQ += 3;
      for (const TQ of zQ) {
        const {
          min: WQ,
          step: zQ
        } = wQ.e[TQ];
        XQ[TQ] = (0, wQ.i)(TQ, WQ + QQ[qQ] * zQ), qQ++
      }
      return XQ
    }
  },
  34471: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      h: () => qQ,
      i: () => TQ,
      l: () => PQ,
      o: () => FQ,
      q: () => gQ,
      u: () => sQ,
      x: () => zQ
    });
    const wQ = {
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
      qQ = Object.freeze({
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

    function TQ(QQ, WQ) {
      var XQ;
      const {
        min: TQ,
        max: zQ,
        step: sQ
      } = wQ[QQ];
      if (!Number.isFinite(WQ)) return qQ[QQ];
      const FQ = (null !== (XQ = String(sQ).split(".")[1]) && void 0 !== XQ ? XQ : "").length,
        PQ = Number((Math.round(WQ / sQ) * sQ).toFixed(FQ));
      return Math.min(zQ, Math.max(TQ, PQ))
    }

    function zQ(QQ, WQ, XQ) {
      const wQ = "number" === typeof XQ ? TQ(WQ, XQ) : XQ;
      return {
        ...QQ,
        [WQ]: wQ
      }
    }

    function sQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(qQ).every((wQ => XQ.includes(wQ) || QQ[wQ] === WQ[wQ]))
    }

    function FQ(QQ) {
      return sQ(QQ, qQ)
    }

    function PQ(QQ) {
      return `#${QQ.toString(16).padStart(6,"0")}`
    }

    function gQ(QQ) {
      const WQ = /^#?([0-9a-f]{6})$/i.exec(QQ.trim());
      return WQ ? parseInt(WQ[1], 16) : null
    }
  },
  34491: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ,
      e: () => rQ
    });
    var wQ = XQ(61),
      qQ = XQ(43),
      TQ = XQ(34488),
      zQ = XQ(34471);
    const sQ = "crosshairCode";
    let FQ = null;
    const PQ = new Set;

    function gQ() {
      if (null === FQ) {
        var QQ;
        const WQ = qQ.i.getItem(sQ);
        FQ = null !== (QQ = "string" === typeof WQ ? (0, TQ.h)(WQ) : null) && void 0 !== QQ ? QQ : zQ.h
      }
      return FQ
    }

    function JQ(QQ) {
      FQ = QQ, (0, zQ.o)(QQ) ? qQ.i.removeItem(sQ) : qQ.i.setItem(sQ, (0, TQ.j)(QQ));
      for (const WQ of PQ) WQ()
    }

    function rQ() {
      const [QQ, WQ] = (0, wQ.useState)(gQ);
      return (0, wQ.useEffect)((() => {
        const QQ = () => {
          WQ(gQ())
        };
        return QQ(), XQ = QQ, PQ.add(XQ), () => {
          PQ.delete(XQ)
        };
        var XQ
      }), []), QQ
    }
  },
  37060: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      d: () => FQ,
      g: () => zQ
    });
    var wQ = XQ(663),
      qQ = XQ(2997);

    function TQ(QQ) {
      return QQ === (0, qQ.f)().mQQ ? (0, qQ.f)().RC : QQ
    }

    function zQ(QQ) {
      return !(0, wQ.G)(QQ) && TQ(QQ) === (0, qQ.f)().RC
    }
    const sQ = "gravity";

    function FQ() {
      return (0, qQ.f)().physics[sQ][1]
    }
  },
  37047: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => vQ
    });
    var wQ = XQ(37049),
      qQ = XQ(231),
      TQ = XQ(5212),
      zQ = XQ(37052),
      sQ = XQ(36750),
      FQ = XQ(37098),
      PQ = XQ(37060),
      gQ = XQ(416),
      JQ = XQ.n(gQ),
      rQ = XQ(1238),
      IQ = XQ(2997),
      jQ = XQ(37091),
      BQ = XQ(31),
      yQ = XQ(26),
      VQ = XQ(37067),
      DQ = XQ(37074),
      pQ = XQ(37081);
    const GQ = new Set(["note"]);
    const UQ = {
      stop: () => UQ,
      fade: () => UQ,
      rate: () => UQ,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => UQ,
      setPannerAttr: () => UQ,
      setPosition: () => UQ
    };
    class bQ {
      constructor(QQ) {
        let WQ, {
          src: XQ,
          volumeScalar: qQ,
          isSoundSprite: zQ
        } = QQ;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, zQ ? (WQ = (0, wQ.h)(XQ), this._spriteTrackSrc = WQ) : WQ = {
          src: rQ.clientSideServerUrls.staticUrl + XQ
        }, this._volumeMultiplier = new FQ.j, this._volumeMultiplier.setMultiplierType("persistentScalar", qQ), this._howl = (0, sQ.countDecodesAs)(new TQ.Howl({
          ...WQ,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let QQ, WQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          XQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (WQ) {
          var wQ;
          if (null === (wQ = this._spriteTrackSrc) || void 0 === wQ || !wQ.sprite[WQ]) throw new Error("No such sprite in your spritetrack");
          QQ = this._howl.play(WQ)
        } else QQ = this._howl.play();
        XQ && this._howl.loop(!0, QQ);
        let qQ = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), QQ);
        const TQ = {
          stop: () => {
            var WQ;
            return null === (WQ = this.liveHowl()) || void 0 === WQ || WQ.stop(QQ), TQ
          },
          fade: (WQ, XQ, wQ) => {
            var qQ;
            return null === (qQ = this.liveHowl()) || void 0 === qQ || qQ.fade(WQ, XQ, wQ, QQ), TQ
          },
          rate: WQ => {
            var XQ;
            return null === (XQ = this.liveHowl()) || void 0 === XQ || XQ.rate(WQ, QQ), TQ
          },
          stopsAtOnce: () => this._howl.playing(QQ) && !this._howl._playLock,
          isAlive: () => {
            const WQ = this._howl._soundById(QQ);
            return !this._loadFailed && !!WQ && !WQ._ended
          },
          getDurationMs: () => this._howl._soundById(QQ) ? 1e3 * this._howl.duration(QQ) / this._howl.rate(QQ) : 0,
          getVolume: () => qQ * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => qQ,
          setRelativeVolume: WQ => {
            var XQ;
            if (WQ > 1) throw new Error("Volume should be <= 1");
            return qQ = yQ.b.get("soundOnFromAd") ? WQ : 0, null === (XQ = this.liveHowl()) || void 0 === XQ || XQ.volume(Math.min(1, qQ * this._volumeMultiplier.getTotalMultipliedVal()), QQ), TQ
          },
          setPannerAttr: WQ => {
            let {
              coneInnerAngle: XQ,
              coneOuterAngle: wQ = 360,
              coneOuterGain: qQ,
              distanceModel: zQ,
              maxDistance: sQ,
              panningModel: FQ,
              refDistance: PQ,
              rolloffFactor: gQ
            } = WQ;
            return this._setPannerAttr({
              id: QQ,
              coneInnerAngle: XQ,
              coneOuterAngle: wQ,
              coneOuterGain: qQ,
              distanceModel: zQ,
              maxDistance: sQ,
              panningModel: FQ,
              refDistance: PQ,
              rolloffFactor: gQ
            }), TQ
          },
          setPosition: WQ => {
            var XQ;
            return null === (XQ = this.liveHowl()) || void 0 === XQ || XQ.pos(WQ[2], WQ[1], WQ[0], QQ), TQ
          }
        };
        return TQ
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, zQ.e)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(QQ) {
        this._volumeMultiplier.setMultiplierType("globalVolume", QQ), this._howl.volume(QQ)
      }
      _setPannerAttr(QQ) {
        let {
          id: WQ,
          coneInnerAngle: XQ = 360,
          coneOuterAngle: wQ = 360,
          coneOuterGain: qQ = 0,
          distanceModel: TQ = "inverse",
          maxDistance: zQ = 1e3,
          panningModel: sQ = "HRTF",
          refDistance: FQ = jQ.h,
          rolloffFactor: PQ = 1
        } = QQ;
        const gQ = this.liveHowl();
        if (null === gQ) return;
        gQ.pannerAttr({
          coneOuterAngle: wQ
        }, WQ);
        const JQ = {
          coneInnerAngle: XQ,
          coneOuterAngle: wQ,
          coneOuterGain: qQ,
          distanceModel: TQ,
          maxDistance: zQ,
          panningModel: sQ,
          refDistance: FQ,
          rolloffFactor: PQ
        };
        gQ.pannerAttr(JQ, WQ)
      }
    }
    const vQ = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new VQ.b, BQ.k.subscribe("appManagerUpdated|soundVolume", (QQ => {
          const WQ = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const XQ of WQ) XQ.setGlobalVolume(QQ)
        }))
      }
      play(QQ, WQ) {
        var XQ;
        let TQ, zQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (XQ = (0, IQ.f)()) || void 0 === XQ ? void 0 : XQ.RC,
          sQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jQ.e,
          FQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : jQ.h,
          gQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var rQ;
        (0, IQ.f)() ? TQ = !!Array.isArray(zQ) || (0, PQ.b)(zQ) !== (null === (rQ = (0, IQ.f)()) || void 0 === rQ ? void 0 : rQ.RC): TQ = !1;
        const BQ = (0, wQ.l)(QQ),
          yQ = this.loadSheet(TQ ? this.spatialSheets : this.stereoSheets, BQ);
        if (!TQ) {
          const XQ = yQ.play(QQ, gQ);
          return XQ.setRelativeVolume(WQ), XQ
        }
        const DQ = (0, IQ.f)(),
          pQ = Array.isArray(zQ) ? zQ : DQ.rD.xV(zQ),
          bQ = DQ.rD.xV(DQ.RC);
        if (!pQ || JQ().sqrDist(pQ, bQ) > sQ * sQ) return UQ;
        let vQ;
        if (!gQ) {
          if (!this.spatialVoices.admit({
              group: GQ.has(BQ) ? null : (0, VQ.f)(QQ),
              loudness: (0, VQ.e)(WQ, JQ().Az(pQ, bQ), FQ),
              startMs: performance.now(),
              getDurationMs: () => {
                var QQ, WQ;
                return null !== (QQ = null === (WQ = vQ) || void 0 === WQ ? void 0 : WQ.getDurationMs()) && void 0 !== QQ ? QQ : 0
              },
              isAlive: () => {
                var QQ, WQ;
                return null !== (QQ = null === (WQ = vQ) || void 0 === WQ ? void 0 : WQ.isAlive()) && void 0 !== QQ && QQ
              },
              canStop: () => {
                var QQ, WQ;
                return null !== (QQ = null === (WQ = vQ) || void 0 === WQ ? void 0 : WQ.stopsAtOnce()) && void 0 !== QQ && QQ
              },
              stop: () => {
                var QQ;
                null === (QQ = vQ) || void 0 === QQ || QQ.stop()
              }
            })) return UQ
        }
        return vQ = yQ.play(QQ, gQ), vQ.setRelativeVolume(WQ), vQ.setPannerAttr({
          refDistance: FQ
        }), vQ.setPosition([pQ[0], pQ[1] + qQ.h.xy * qQ.h.playerEyeToHeightRatio, pQ[2]]), vQ
      }
      preload(QQ) {
        this.loadSheet(this.stereoSheets, (0, wQ.l)(QQ))
      }
      loadSheet(QQ, WQ) {
        let XQ = QQ[WQ];
        return XQ || ((0, pQ.e)(WQ), XQ = new bQ({
          src: WQ,
          isSoundSprite: !0,
          volumeScalar: 1
        }), XQ.setGlobalVolume(yQ.b.get("soundVolume")), QQ[WQ] = XQ), XQ
      }
      freeSheetsAfterGame() {
        for (const QQ of [this.stereoSheets, this.spatialSheets])
          for (const [WQ, XQ] of Object.entries(QQ)) !DQ.b.has(WQ) && XQ.loaded() && (XQ.unloadOnceIdle(), delete QQ[WQ])
      }
    }
  },
  37143: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
      return QQ.name === WQ.name && ((null === (XQ = QQ.attributes) || void 0 === XQ || null === (wQ = XQ.customAttributes) || void 0 === wQ ? void 0 : wQ.stackKey) === (null === (qQ = WQ.attributes) || void 0 === qQ || null === (TQ = qQ.customAttributes) || void 0 === TQ ? void 0 : TQ.stackKey) && (!0 !== (null === (zQ = QQ.attributes) || void 0 === zQ || null === (sQ = zQ.customAttributes) || void 0 === sQ ? void 0 : sQ.unstackable) && !0 !== (null === (FQ = WQ.attributes) || void 0 === FQ || null === (PQ = FQ.customAttributes) || void 0 === PQ ? void 0 : PQ.unstackable)))
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  37217: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !wQ(QQ)
    }

    function TQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function zQ(QQ) {
      return wQ(QQ) || qQ(QQ) || TQ(QQ)
    }
    XQ.d(WQ, {
      e: () => zQ,
      f: () => wQ,
      h: () => TQ,
      l: () => qQ
    })
  },
  37212: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ
    });
    var wQ = XQ(37217),
      qQ = XQ(9580);
    const TQ = [],
      zQ = [],
      sQ = [],
      FQ = [];
    for (const gQ of Object.keys(qQ.o))(0, wQ.f)(gQ) ? TQ.push(gQ) : (0, wQ.l)(gQ) && zQ.push(gQ), (0, wQ.h)(gQ) && sQ.push(gQ), (gQ.includes(" Bed Head") || gQ.includes(" Strongbed Head")) && FQ.push(gQ);
    const PQ = {
      leafBeds: TQ,
      woolBeds: zQ,
      strongBeds: sQ,
      beds: [...TQ, ...zQ, ...sQ],
      bedHeads: FQ,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6873: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      g: () => qQ,
      j: () => FQ,
      n: () => TQ,
      q: () => PQ,
      s: () => wQ,
      u: () => sQ
    });
    let wQ = function(QQ) {
        return QQ[QQ.DEFAULT = 0] = "DEFAULT", QQ[QQ.BOAT = 1] = "BOAT", QQ[QQ.GLIDER = 2] = "GLIDER", QQ[QQ.BALLOON = 3] = "BALLOON", QQ[QQ.SLEEPING = 4] = "SLEEPING", QQ[QQ.RIDING_MOB = 5] = "RIDING_MOB", QQ[QQ.CAR = 6] = "CAR", QQ[QQ.HOVERCRAFT = 7] = "HOVERCRAFT", QQ
      }({}),
      qQ = function(QQ) {
        return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.OBSIDIAN = 1] = "OBSIDIAN", QQ[QQ.SPEED = 2] = "SPEED", QQ
      }({}),
      TQ = function(QQ) {
        return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.IRON = 1] = "IRON", QQ[QQ.GOLD = 2] = "GOLD", QQ[QQ.DIAMOND = 3] = "DIAMOND", QQ
      }({}),
      zQ = function(QQ) {
        return QQ[QQ.YELLOW = 0] = "YELLOW", QQ[QQ.WHITE = 1] = "WHITE", QQ[QQ.RED = 2] = "RED", QQ[QQ.PURPLE = 3] = "PURPLE", QQ[QQ.PINK = 4] = "PINK", QQ[QQ.ORANGE = 5] = "ORANGE", QQ[QQ.MAGENTA = 6] = "MAGENTA", QQ[QQ.LIME = 7] = "LIME", QQ[QQ.LIGHT_GRAY = 8] = "LIGHT_GRAY", QQ[QQ.LIGHT_BLUE = 9] = "LIGHT_BLUE", QQ[QQ.GREEN = 10] = "GREEN", QQ[QQ.GRAY = 11] = "GRAY", QQ[QQ.CYAN = 12] = "CYAN", QQ[QQ.BROWN = 13] = "BROWN", QQ[QQ.BLUE = 14] = "BLUE", QQ[QQ.BLACK = 15] = "BLACK", QQ
      }({}),
      sQ = function(QQ) {
        return QQ[QQ.ROTATION_1 = 0] = "ROTATION_1", QQ[QQ.ROTATION_2 = 1] = "ROTATION_2", QQ[QQ.ROTATION_3 = 2] = "ROTATION_3", QQ[QQ.ROTATION_4 = 3] = "ROTATION_4", QQ
      }({}),
      FQ = function(QQ) {
        return QQ[QQ.KART = 0] = "KART", QQ[QQ.OFF_ROADER = 1] = "OFF_ROADER", QQ[QQ.CAR = 2] = "CAR", QQ[QQ.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", QQ[QQ.ARMORED_CAR = 4] = "ARMORED_CAR", QQ[QQ.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", QQ[QQ.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", QQ[QQ.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", QQ
      }({});
    wQ.DEFAULT, wQ.BOAT, qQ.SPEED, wQ.GLIDER, TQ.DIAMOND, wQ.BALLOON, zQ.BLACK, wQ.SLEEPING, sQ.ROTATION_4, wQ.RIDING_MOB, wQ.CAR, FQ.MOONSTONE_MINING_DRILL, wQ.HOVERCRAFT;
    let PQ = function(QQ) {
      return QQ[QQ.NORMAL = 0] = "NORMAL", QQ[QQ.GLIDING = 1] = "GLIDING", QQ[QQ.FLOATING = 2] = "FLOATING", QQ
    }({})
  },
  34485: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);