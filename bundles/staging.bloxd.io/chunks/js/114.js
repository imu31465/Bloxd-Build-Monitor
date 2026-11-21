export const id = 114;
export const ids = [114];
export const modules = {
  36240: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ,
      f: () => CQ
    });
    wQ(9074);
    var LQ = wQ(53),
      qQ = wQ(1447),
      oQ = wQ(1897),
      DQ = wQ(1927),
      kQ = wQ(17),
      vQ = wQ(2345),
      mQ = wQ(36242),
      uQ = wQ(36248),
      HQ = wQ(9030),
      bQ = wQ(9067),
      YQ = wQ(9082),
      xQ = wQ(1107);
    const AQ = (0, LQ.memo)((function() {
      var QQ;
      const {
        isTouchScreen: FQ,
        clientEscMenuOptions: wQ,
        scriptedCameraFacing: oQ,
        crosshairShownOverride: AQ,
        crosshairGameView: eQ
      } = (0, kQ.l)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), MQ = (0, vQ.l)("gunshotOrigin"), GQ = (0, LQ.useRef)(null), pQ = (0, LQ.useRef)(!1), [cQ, SQ] = (0, LQ.useState)(tQ);
      (0, qQ.g)("cameraZoomSet", SQ), (0, LQ.useEffect)((() => {
        SQ(tQ())
      }), []);
      const iQ = (0, DQ.k)("heldItemAim"),
        RQ = iQ.gun,
        OQ = (0, YQ.d)(),
        sQ = (0, LQ.useRef)(OQ);
      sQ.current = OQ;
      const [rQ, IQ] = (0, LQ.useState)(!1);
      (0, LQ.useEffect)((() => (0, uQ.g)("crosshairAccuracy", CQ)), []), (0, qQ.g)("mouseState", (QQ => {
        let {
          isDown: FQ
        } = QQ;
        pQ.current = FQ, GQ.current && (GQ.current.style.transform = (0, bQ.c)(FQ, sQ.current.growOnClick)), "shapes" === sQ.current.style && IQ(FQ)
      }));
      const UQ = (0, HQ.d)(FQ, wQ.touchActionButtons);
      return (null !== (QQ = (0, mQ.c)(eQ, AQ)) && void 0 !== QQ ? QQ : (0, mQ.j)(iQ, cQ > 1, UQ, MQ)) ? "movement" === oQ || "cursor" === oQ ? null : (0, xQ.jsxs)(xQ.Fragment, {
        children: [RQ && (0, xQ.jsx)(WQ, {
          custom: OQ.forGuns && "shapes" === OQ.style ? OQ : null,
          touch: FQ
        }), !RQ && (0, xQ.jsx)(bQ.b, {
          settings: OQ,
          touch: FQ,
          pressRef: GQ,
          pressed: "shapes" === OQ.style ? rQ : pQ.current
        })]
      }) : null
    }));

    function tQ() {
      return oQ.gameBridge.lookup("cameraZoom", null)
    }
    const eQ = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      MQ = {
        current: null
      },
      GQ = {
        current: null
      };
    let pQ = 0,
      cQ = 0;

    function CQ(QQ) {
      cQ = QQ, eQ[0].current || MQ.current || GQ.current ? iQ(QQ) : pQ = QQ
    }

    function SQ(QQ) {
      return ((0, mQ.f)(QQ) - (0, mQ.f)(0)) * window.innerHeight / 100
    }

    function iQ(QQ) {
      var FQ;
      if (null === (FQ = GQ.current) || void 0 === FQ || FQ.call(GQ, SQ(QQ)), eQ[0].current) {
        const FQ = `${(0,mQ.f)(QQ)}vh`;
        eQ[0].current.style.transform = `translateX(calc(0px - ${FQ}))`, eQ[1].current.style.transform = `translateX(calc(0px + ${FQ}))`, eQ[2].current.style.transform = `translateY(calc(0px - ${FQ}))`, eQ[3].current.style.transform = `translateY(calc(0px + ${FQ}))`
      }
      MQ.current && (MQ.current.style.filter = `blur(${Math.round(QQ/10)}px)`)
    }

    function WQ(QQ) {
      let {
        custom: FQ,
        touch: wQ
      } = QQ;
      const oQ = (0, qQ.i)("aimingOverlay", "none"),
        DQ = "1.2vh",
        kQ = "0.3vh";
      (0, LQ.useEffect)((() => {
        pQ && iQ(pQ)
      }), []);
      const vQ = (0, LQ.useRef)(null !== FQ);
      return (0, LQ.useLayoutEffect)((() => {
        var QQ;
        FQ ? null === (QQ = GQ.current) || void 0 === QQ || QQ.call(GQ, SQ(cQ)) : vQ.current && iQ(cQ);
        vQ.current = null !== FQ
      }), [FQ]), (0, xQ.jsxs)(xQ.Fragment, {
        children: ["sniper" === oQ && (0, xQ.jsxs)("div", {
          ref: MQ,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, xQ.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, xQ.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, xQ.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, xQ.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, xQ.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === oQ ? 0 : 1
          },
          children: [FQ && (0, xQ.jsx)(bQ.b, {
            settings: FQ,
            touch: wQ,
            spreadRef: GQ
          }), !FQ && (0, xQ.jsxs)(xQ.Fragment, {
            children: [(0, xQ.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: DQ,
                height: kQ,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: eQ[0]
            }), (0, xQ.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: DQ,
                height: kQ,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: eQ[1]
            }), (0, xQ.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: kQ,
                height: DQ,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: eQ[2]
            }), (0, xQ.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: kQ,
                height: DQ,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: eQ[3]
            })]
          })]
        })]
      })
    }
  },
  9067: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ,
      c: () => xQ
    });
    wQ(9074);
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(53),
      DQ = wQ(9037);

    function kQ(QQ, FQ) {
      return Math.max(1, Math.round(QQ * FQ))
    }

    function vQ(QQ, FQ) {
      const wQ = FQ * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        LQ = function(QQ, FQ) {
          if (QQ.lines) return kQ(QQ.lineThickness, FQ) % 2;
          if (QQ.dot) return kQ(QQ.dotSize, FQ) % 2;
          return mQ(QQ, FQ) % 2
        }(QQ, FQ),
        qQ = uQ(QQ.lineThickness * wQ, LQ),
        oQ = kQ(QQ.lineLength, wQ),
        DQ = Math.round(QQ.gap * wQ),
        vQ = QQ.outline > 0 ? kQ(QQ.outline, wQ) : 0,
        bQ = [];
      if (QQ.lines && (bQ.push({
          x: qQ + DQ,
          y: 0,
          w: oQ,
          h: qQ,
          arm: "right"
        }), bQ.push({
          x: -DQ - oQ,
          y: 0,
          w: oQ,
          h: qQ,
          arm: "left"
        }), bQ.push({
          x: 0,
          y: qQ + DQ,
          w: qQ,
          h: oQ,
          arm: "down"
        }), QQ.tStyle || bQ.push({
          x: 0,
          y: -DQ - oQ,
          w: qQ,
          h: oQ,
          arm: "up"
        }), 0 === DQ && bQ.push({
          x: 0,
          y: 0,
          w: qQ,
          h: qQ
        })), QQ.dot) {
        const FQ = uQ(QQ.dotSize * wQ, LQ),
          oQ = QQ.lines && 0 === DQ && QQ.dotSize > QQ.lineThickness ? Math.max(FQ, qQ + 2) : FQ,
          kQ = (qQ - oQ) / 2;
        bQ.push({
          x: kQ,
          y: kQ,
          w: oQ,
          h: oQ
        })
      }
      const YQ = bQ.map((QQ => ({
        ...QQ,
        x: QQ.x - vQ,
        y: QQ.y - vQ,
        w: QQ.w + 2 * vQ,
        h: QQ.h + 2 * vQ
      })));
      let xQ = null,
        AQ = null;
      if (QQ.circle) {
        const FQ = kQ(QQ.circleThickness, wQ),
          oQ = function(QQ, FQ) {
            return QQ + (QQ % 2 === FQ ? 0 : 1)
          }(mQ(QQ, wQ), LQ),
          DQ = (qQ - oQ) / 2;
        xQ = HQ(DQ, oQ, FQ), vQ > 0 && (AQ = HQ(DQ - vQ, oQ + 2 * vQ, FQ + 2 * vQ))
      }
      return {
        cell: qQ,
        fills: bQ,
        outlines: vQ > 0 ? YQ : [],
        ring: xQ,
        ringOutline: AQ
      }
    }

    function mQ(QQ, FQ) {
      return Math.round(QQ.circleRadius * FQ * 2 + kQ(QQ.circleThickness, FQ))
    }

    function uQ(QQ, FQ) {
      return Math.max(2 - FQ, 2 * Math.round((QQ - FQ) / 2) + FQ)
    }

    function HQ(QQ, FQ, wQ) {
      const LQ = 2 * wQ >= FQ - 1;
      return {
        x: QQ,
        y: QQ,
        size: FQ,
        border: Math.min(wQ, Math.floor(FQ / 2)),
        filled: LQ
      }
    }
    var bQ = wQ(1107);
    const YQ = 1.4;

    function xQ(QQ, FQ) {
      return QQ && FQ ? `scale(${YQ})` : "scale(1)"
    }

    function AQ(QQ) {
      return "classic" === QQ.settings.style ? (0, bQ.jsx)(MQ, {
        ...QQ
      }) : (0, bQ.jsx)(WQ, {
        ...QQ
      })
    }
    const tQ = .125;

    function eQ(QQ, FQ) {
      const wQ = {};
      if (QQ.color !== DQ.e.color && (wQ.color = (0, DQ.k)(QQ.color)), QQ.opacity !== DQ.e.opacity && (wQ.opacity = QQ.opacity / 100), QQ.outline !== DQ.e.outline || QQ.outlineColor !== DQ.e.outlineColor) {
        const FQ = QQ.outline,
          LQ = (0, DQ.k)(QQ.outlineColor);
        wQ.textShadow = FQ > 0 ? `-${FQ}px 0 ${LQ}, 0 ${FQ}px ${LQ}, ${FQ}px 0 ${LQ}, 0 -${FQ}px ${LQ}` : "none"
      }
      if (QQ.size !== DQ.e.size) {
        const LQ = QQ.size / 100;
        wQ.fontSize = FQ ? `calc(max(1.3rem, 18px) * ${LQ})` : `calc(1.3rem * ${LQ})`, wQ.marginTop = `-${tQ}em`, wQ.transformOrigin = `50% calc(50% + ${tQ}em)`
      }
      return wQ
    }

    function MQ(QQ) {
      let {
        settings: FQ,
        touch: wQ,
        inPreview: LQ,
        inEditor: oQ,
        pressed: DQ = !1,
        pressRef: kQ
      } = QQ;
      return (0, bQ.jsx)("div", {
        className: qQ()("Crosshair", {
          Touch: wQ,
          CrosshairInPreview: LQ,
          CrosshairInEditor: oQ || LQ
        }),
        ref: kQ,
        style: {
          transform: xQ(DQ, FQ.growOnClick),
          ...eQ(FQ, wQ)
        },
        children: "+"
      })
    }

    function GQ(QQ, FQ) {
      return QQ / FQ + "px"
    }

    function pQ(QQ, FQ, wQ, LQ) {
      return {
        ...SQ(QQ, FQ, wQ),
        width: GQ(QQ.w, wQ),
        height: GQ(QQ.h, wQ),
        background: LQ
      }
    }

    function cQ(QQ, FQ, wQ) {
      return {
        left: GQ(QQ.x, FQ),
        top: GQ(QQ.y, FQ),
        width: GQ(QQ.size, FQ),
        height: GQ(QQ.size, FQ),
        borderWidth: GQ(QQ.border, FQ),
        borderColor: wQ,
        background: QQ.filled ? wQ : void 0
      }
    }
    const CQ = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function SQ(QQ, FQ, wQ) {
      const [LQ, qQ] = QQ.arm ? CQ[QQ.arm] : [0, 0], oQ = Math.round(FQ * wQ);
      return {
        left: GQ(QQ.x + LQ * oQ, wQ),
        top: GQ(QQ.y + qQ * oQ, wQ)
      }
    }

    function iQ(QQ) {
      return QQ.arm ? {
        "data-arm": QQ.arm,
        "data-x": QQ.x,
        "data-y": QQ.y
      } : {}
    }

    function WQ(QQ) {
      let {
        settings: FQ,
        inPreview: wQ,
        inEditor: LQ,
        pressed: kQ = !1,
        spread: mQ,
        spreadRef: uQ
      } = QQ;
      const HQ = (0, oQ.useRef)(null),
        {
          box: xQ,
          dpr: AQ
        } = function(QQ) {
          const [FQ, wQ] = (0, oQ.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, oQ.useLayoutEffect)((() => {
            const FQ = QQ.current;
            if (!FQ) return;
            const LQ = () => {
              const QQ = FQ.getBoundingClientRect(),
                LQ = window.devicePixelRatio || 1;
              wQ((FQ => FQ.dpr === LQ && FQ.box.left === QQ.left && FQ.box.top === QQ.top && FQ.box.width === QQ.width && FQ.box.height === QQ.height ? FQ : {
                box: {
                  left: QQ.left,
                  top: QQ.top,
                  width: QQ.width,
                  height: QQ.height
                },
                dpr: LQ
              }))
            };
            LQ();
            const qQ = new ResizeObserver(LQ);
            return qQ.observe(FQ), window.addEventListener("resize", LQ), window.addEventListener("scroll", LQ, !0), () => {
              qQ.disconnect(), window.removeEventListener("resize", LQ), window.removeEventListener("scroll", LQ, !0)
            }
          }), [QQ]), FQ
        }(HQ),
        tQ = (0, oQ.useRef)(AQ);
      tQ.current = AQ;
      const eQ = vQ(FQ, AQ, kQ && FQ.growOnClick ? YQ : 1),
        MQ = function(QQ, FQ, wQ) {
          const LQ = Math.round((QQ.left + QQ.width / 2) * wQ - FQ / 2),
            qQ = Math.round((QQ.top + QQ.height / 2) * wQ - FQ / 2);
          return {
            x: LQ / wQ - QQ.left,
            y: qQ / wQ - QQ.top
          }
        }(xQ, eQ.cell, AQ),
        GQ = (0, DQ.k)(FQ.color),
        CQ = (0, DQ.k)(FQ.outlineColor),
        WQ = (0, oQ.useRef)(0);
      (0, oQ.useLayoutEffect)((() => {
        if (uQ) return uQ.current = QQ => {
          var FQ;
          WQ.current = QQ, null === (FQ = HQ.current) || void 0 === FQ || FQ.querySelectorAll("[data-arm]").forEach((FQ => {
            Object.assign(FQ.style, SQ(function(QQ) {
              return {
                x: Number(QQ.dataset.x),
                y: Number(QQ.dataset.y),
                arm: QQ.dataset.arm
              }
            }(FQ), QQ, tQ.current))
          }))
        }, () => {
          uQ.current = null
        }
      }), [uQ]);
      const RQ = null !== mQ && void 0 !== mQ ? mQ : WQ.current;
      return (0, bQ.jsx)("div", {
        ref: HQ,
        className: qQ()("CrosshairShapes", {
          CrosshairInPreview: wQ,
          CrosshairInEditor: LQ || wQ,
          CrosshairSpreads: void 0 !== uQ
        }),
        children: (0, bQ.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: MQ.x,
            top: MQ.y,
            opacity: FQ.opacity / 100
          },
          children: (0, bQ.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [eQ.ringOutline && (0, bQ.jsx)("div", {
              className: "CrosshairRing",
              style: cQ(eQ.ringOutline, AQ, CQ)
            }), eQ.outlines.map(((QQ, FQ) => (0, bQ.jsx)("div", {
              className: "CrosshairPart",
              ...iQ(QQ),
              style: pQ(QQ, RQ, AQ, CQ)
            }, `o${FQ}`))), eQ.ring && (0, bQ.jsx)("div", {
              className: "CrosshairRing",
              style: cQ(eQ.ring, AQ, GQ)
            }), eQ.fills.map(((QQ, FQ) => (0, bQ.jsx)("div", {
              className: "CrosshairPart",
              ...iQ(QQ),
              style: pQ(QQ, RQ, AQ, GQ)
            }, `f${FQ}`)))]
          })
        })
      })
    }
  },
  9078: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => uQ,
      h: () => tQ,
      k: () => AQ
    });
    var LQ = wQ(9037);
    const qQ = "XH1-",
      oQ = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      DQ = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      kQ = ["color", "outlineColor"],
      vQ = 1 + 3 * kQ.length + DQ.length + 1,
      mQ = Math.ceil(8 * vQ / Math.log2(62)),
      uQ = qQ.length + mQ;

    function HQ(QQ) {
      let FQ = 90;
      for (const wQ of QQ) FQ = 31 * FQ + wQ & 255;
      return FQ
    }
    const bQ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      YQ = BigInt(bQ.length);

    function xQ(QQ, FQ) {
      let wQ = 0n;
      for (const qQ of QQ) {
        const QQ = bQ.indexOf(qQ);
        if (QQ < 0) return null;
        wQ = wQ * YQ + BigInt(QQ)
      }
      if (wQ >> BigInt(8 * FQ) !== 0n) return null;
      const LQ = [];
      for (let qQ = 0; qQ < FQ; qQ++) LQ.unshift(Number(0xffn & wQ)), wQ >>= 8n;
      return LQ
    }

    function AQ(QQ) {
      let FQ = "shapes" === QQ.style ? 1 : 0;
      oQ.forEach(((wQ, LQ) => {
        QQ[wQ] && (FQ |= 1 << LQ + 1)
      }));
      const wQ = [FQ];
      for (const qQ of kQ) {
        const FQ = (0, LQ.g)(qQ, QQ[qQ]);
        wQ.push(FQ >> 16 & 255, FQ >> 8 & 255, 255 & FQ)
      }
      for (const qQ of DQ) {
        const {
          min: FQ,
          step: oQ
        } = LQ.b[qQ];
        wQ.push(Math.round(((0, LQ.g)(qQ, QQ[qQ]) - FQ) / oQ))
      }
      return wQ.push(HQ(wQ)), qQ + function(QQ, FQ) {
        let wQ = 0n;
        for (const qQ of QQ) wQ = wQ << 8n | BigInt(qQ);
        let LQ = "";
        for (let qQ = 0; qQ < FQ; qQ++) LQ = bQ[Number(wQ % YQ)] + LQ, wQ /= YQ;
        return LQ
      }(wQ, mQ)
    }

    function tQ(QQ) {
      for (const FQ of QQ.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${mQ}})`, "gi"))) {
        const QQ = eQ(xQ(FQ[1], vQ));
        if (QQ) return QQ
      }
      return null
    }

    function eQ(QQ) {
      if (!QQ || QQ.length !== vQ || HQ(QQ.slice(0, -1)) !== QQ[QQ.length - 1]) return null;
      const FQ = QQ[0],
        wQ = {
          ...LQ.e,
          style: 1 & FQ ? "shapes" : "classic"
        };
      oQ.forEach(((QQ, LQ) => {
        wQ[QQ] = 0 !== (FQ & 1 << LQ + 1)
      }));
      let qQ = 1;
      for (const LQ of kQ) wQ[LQ] = QQ[qQ] << 16 | QQ[qQ + 1] << 8 | QQ[qQ + 2], qQ += 3;
      for (const oQ of DQ) {
        const {
          min: FQ,
          step: DQ
        } = LQ.b[oQ];
        wQ[oQ] = (0, LQ.g)(oQ, FQ + QQ[qQ] * DQ), qQ++
      }
      return wQ
    }
  },
  9037: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      e: () => qQ,
      g: () => oQ,
      k: () => mQ,
      l: () => vQ,
      m: () => uQ,
      n: () => kQ,
      p: () => DQ
    });
    const LQ = {
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

    function oQ(QQ, FQ) {
      var wQ;
      const {
        min: oQ,
        max: DQ,
        step: kQ
      } = LQ[QQ];
      if (!Number.isFinite(FQ)) return qQ[QQ];
      const vQ = (null !== (wQ = String(kQ).split(".")[1]) && void 0 !== wQ ? wQ : "").length,
        mQ = Number((Math.round(FQ / kQ) * kQ).toFixed(vQ));
      return Math.min(DQ, Math.max(oQ, mQ))
    }

    function DQ(QQ, FQ, wQ) {
      const LQ = "number" === typeof wQ ? oQ(FQ, wQ) : wQ;
      return {
        ...QQ,
        [FQ]: LQ
      }
    }

    function kQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(qQ).every((LQ => wQ.includes(LQ) || QQ[LQ] === FQ[LQ]))
    }

    function vQ(QQ) {
      return kQ(QQ, qQ)
    }

    function mQ(QQ) {
      return `#${QQ.toString(16).padStart(6,"0")}`
    }

    function uQ(QQ) {
      const FQ = /^#?([0-9a-f]{6})$/i.exec(QQ.trim());
      return FQ ? parseInt(FQ[1], 16) : null
    }
  },
  9082: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ,
      d: () => bQ
    });
    var LQ = wQ(53),
      qQ = wQ(27),
      oQ = wQ(9078),
      DQ = wQ(9037);
    const kQ = "crosshairCode";
    let vQ = null;
    const mQ = new Set;

    function uQ() {
      if (null === vQ) {
        var QQ;
        const FQ = qQ.i.getItem(kQ);
        vQ = null !== (QQ = "string" === typeof FQ ? (0, oQ.h)(FQ) : null) && void 0 !== QQ ? QQ : DQ.e
      }
      return vQ
    }

    function HQ(QQ) {
      vQ = QQ, (0, DQ.l)(QQ) ? qQ.i.removeItem(kQ) : qQ.i.setItem(kQ, (0, oQ.k)(QQ));
      for (const FQ of mQ) FQ()
    }

    function bQ() {
      const [QQ, FQ] = (0, LQ.useState)(uQ);
      return (0, LQ.useEffect)((() => {
        const QQ = () => {
          FQ(uQ())
        };
        return QQ(), wQ = QQ, mQ.add(wQ), () => {
          mQ.delete(wQ)
        };
        var wQ
      }), []), QQ
    }
  },
  36395: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      f: () => vQ,
      i: () => DQ
    });
    var LQ = wQ(619),
      qQ = wQ(2676);

    function oQ(QQ) {
      return QQ === (0, qQ.d)().FFQ ? (0, qQ.d)().WK : QQ
    }

    function DQ(QQ) {
      return !(0, LQ.F)(QQ) && oQ(QQ) === (0, qQ.d)().WK
    }
    const kQ = "gravity";

    function vQ() {
      return (0, qQ.d)().physics[kQ][1]
    }
  },
  36382: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => SQ
    });
    var LQ = wQ(36388),
      qQ = wQ(201),
      oQ = wQ(4694),
      DQ = wQ(36390),
      kQ = wQ(36082),
      vQ = wQ(36422),
      mQ = wQ(36395),
      uQ = wQ(334),
      HQ = wQ.n(uQ),
      bQ = wQ(1213),
      YQ = wQ(2676),
      xQ = wQ(36419),
      AQ = wQ(22),
      tQ = wQ(17),
      eQ = wQ(36404),
      MQ = wQ(36410),
      GQ = wQ(36415);
    const pQ = new Set(["note"]);
    const cQ = {
      stop: () => cQ,
      fade: () => cQ,
      rate: () => cQ,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => cQ,
      setPannerAttr: () => cQ,
      setPosition: () => cQ
    };
    class CQ {
      constructor(QQ) {
        let FQ, {
          src: wQ,
          volumeScalar: qQ,
          isSoundSprite: DQ
        } = QQ;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, DQ ? (FQ = (0, LQ.e)(wQ), this._spriteTrackSrc = FQ) : FQ = {
          src: bQ.clientSideServerUrls.staticUrl + wQ
        }, this._volumeMultiplier = new vQ.j, this._volumeMultiplier.setMultiplierType("persistentScalar", qQ), this._howl = (0, kQ.countDecodesAs)(new oQ.Howl({
          ...FQ,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let QQ, FQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (FQ) {
          var LQ;
          if (null === (LQ = this._spriteTrackSrc) || void 0 === LQ || !LQ.sprite[FQ]) throw new Error("No such sprite in your spritetrack");
          QQ = this._howl.play(FQ)
        } else QQ = this._howl.play();
        wQ && this._howl.loop(!0, QQ);
        let qQ = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), QQ);
        const oQ = {
          stop: () => {
            var FQ;
            return null === (FQ = this.liveHowl()) || void 0 === FQ || FQ.stop(QQ), oQ
          },
          fade: (FQ, wQ, LQ) => {
            var qQ;
            return null === (qQ = this.liveHowl()) || void 0 === qQ || qQ.fade(FQ, wQ, LQ, QQ), oQ
          },
          rate: FQ => {
            var wQ;
            return null === (wQ = this.liveHowl()) || void 0 === wQ || wQ.rate(FQ, QQ), oQ
          },
          stopsAtOnce: () => this._howl.playing(QQ) && !this._howl._playLock,
          isAlive: () => {
            const FQ = this._howl._soundById(QQ);
            return !this._loadFailed && !!FQ && !FQ._ended
          },
          getDurationMs: () => this._howl._soundById(QQ) ? 1e3 * this._howl.duration(QQ) / this._howl.rate(QQ) : 0,
          getVolume: () => qQ * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => qQ,
          setRelativeVolume: FQ => {
            var wQ;
            if (FQ > 1) throw new Error("Volume should be <= 1");
            return qQ = tQ.c.get("soundOnFromAd") ? FQ : 0, null === (wQ = this.liveHowl()) || void 0 === wQ || wQ.volume(Math.min(1, qQ * this._volumeMultiplier.getTotalMultipliedVal()), QQ), oQ
          },
          setPannerAttr: FQ => {
            let {
              coneInnerAngle: wQ,
              coneOuterAngle: LQ = 360,
              coneOuterGain: qQ,
              distanceModel: DQ,
              maxDistance: kQ,
              panningModel: vQ,
              refDistance: mQ,
              rolloffFactor: uQ
            } = FQ;
            return this._setPannerAttr({
              id: QQ,
              coneInnerAngle: wQ,
              coneOuterAngle: LQ,
              coneOuterGain: qQ,
              distanceModel: DQ,
              maxDistance: kQ,
              panningModel: vQ,
              refDistance: mQ,
              rolloffFactor: uQ
            }), oQ
          },
          setPosition: FQ => {
            var wQ;
            return null === (wQ = this.liveHowl()) || void 0 === wQ || wQ.pos(FQ[2], FQ[1], FQ[0], QQ), oQ
          }
        };
        return oQ
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, DQ.c)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(QQ) {
        this._volumeMultiplier.setMultiplierType("globalVolume", QQ), this._howl.volume(QQ)
      }
      _setPannerAttr(QQ) {
        let {
          id: FQ,
          coneInnerAngle: wQ = 360,
          coneOuterAngle: LQ = 360,
          coneOuterGain: qQ = 0,
          distanceModel: oQ = "inverse",
          maxDistance: DQ = 1e3,
          panningModel: kQ = "HRTF",
          refDistance: vQ = xQ.h,
          rolloffFactor: mQ = 1
        } = QQ;
        const uQ = this.liveHowl();
        if (null === uQ) return;
        uQ.pannerAttr({
          coneOuterAngle: LQ
        }, FQ);
        const HQ = {
          coneInnerAngle: wQ,
          coneOuterAngle: LQ,
          coneOuterGain: qQ,
          distanceModel: oQ,
          maxDistance: DQ,
          panningModel: kQ,
          refDistance: vQ,
          rolloffFactor: mQ
        };
        uQ.pannerAttr(HQ, FQ)
      }
    }
    const SQ = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new eQ.e, AQ.l.subscribe("appManagerUpdated|soundVolume", (QQ => {
          const FQ = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const wQ of FQ) wQ.setGlobalVolume(QQ)
        }))
      }
      play(QQ, FQ) {
        var wQ;
        let oQ, DQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (wQ = (0, YQ.d)()) || void 0 === wQ ? void 0 : wQ.WK,
          kQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xQ.d,
          vQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : xQ.h,
          uQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var bQ;
        (0, YQ.d)() ? oQ = !!Array.isArray(DQ) || (0, mQ.c)(DQ) !== (null === (bQ = (0, YQ.d)()) || void 0 === bQ ? void 0 : bQ.WK): oQ = !1;
        const AQ = (0, LQ.h)(QQ),
          tQ = this.loadSheet(oQ ? this.spatialSheets : this.stereoSheets, AQ);
        if (!oQ) {
          const wQ = tQ.play(QQ, uQ);
          return wQ.setRelativeVolume(FQ), wQ
        }
        const MQ = (0, YQ.d)(),
          GQ = Array.isArray(DQ) ? DQ : MQ.bC.Qp(DQ),
          CQ = MQ.bC.Qp(MQ.WK);
        if (!GQ || HQ().sqrDist(GQ, CQ) > kQ * kQ) return cQ;
        let SQ;
        if (!uQ) {
          if (!this.spatialVoices.admit({
              group: pQ.has(AQ) ? null : (0, eQ.k)(QQ),
              loudness: (0, eQ.h)(FQ, HQ().kD(GQ, CQ), vQ),
              startMs: performance.now(),
              getDurationMs: () => {
                var QQ, FQ;
                return null !== (QQ = null === (FQ = SQ) || void 0 === FQ ? void 0 : FQ.getDurationMs()) && void 0 !== QQ ? QQ : 0
              },
              isAlive: () => {
                var QQ, FQ;
                return null !== (QQ = null === (FQ = SQ) || void 0 === FQ ? void 0 : FQ.isAlive()) && void 0 !== QQ && QQ
              },
              canStop: () => {
                var QQ, FQ;
                return null !== (QQ = null === (FQ = SQ) || void 0 === FQ ? void 0 : FQ.stopsAtOnce()) && void 0 !== QQ && QQ
              },
              stop: () => {
                var QQ;
                null === (QQ = SQ) || void 0 === QQ || QQ.stop()
              }
            })) return cQ
        }
        return SQ = tQ.play(QQ, uQ), SQ.setRelativeVolume(FQ), SQ.setPannerAttr({
          refDistance: vQ
        }), SQ.setPosition([GQ[0], GQ[1] + qQ.e.iG * qQ.e.playerEyeToHeightRatio, GQ[2]]), SQ
      }
      preload(QQ) {
        this.loadSheet(this.stereoSheets, (0, LQ.h)(QQ))
      }
      loadSheet(QQ, FQ) {
        let wQ = QQ[FQ];
        return wQ || ((0, GQ.c)(FQ), wQ = new CQ({
          src: FQ,
          isSoundSprite: !0,
          volumeScalar: 1
        }), wQ.setGlobalVolume(tQ.c.get("soundVolume")), QQ[FQ] = wQ), wQ
      }
      freeSheetsAfterGame() {
        for (const QQ of [this.stereoSheets, this.spatialSheets])
          for (const [FQ, wQ] of Object.entries(QQ)) !MQ.d.has(FQ) && wQ.loaded() && (wQ.unloadOnceIdle(), delete QQ[FQ])
      }
    }
  },
  36468: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      var wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ;
      return QQ.name === FQ.name && ((null === (wQ = QQ.attributes) || void 0 === wQ || null === (LQ = wQ.customAttributes) || void 0 === LQ ? void 0 : LQ.stackKey) === (null === (qQ = FQ.attributes) || void 0 === qQ || null === (oQ = qQ.customAttributes) || void 0 === oQ ? void 0 : oQ.stackKey) && (!0 !== (null === (DQ = QQ.attributes) || void 0 === DQ || null === (kQ = DQ.customAttributes) || void 0 === kQ ? void 0 : kQ.unstackable) && !0 !== (null === (vQ = FQ.attributes) || void 0 === vQ || null === (mQ = vQ.customAttributes) || void 0 === mQ ? void 0 : mQ.unstackable)))
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  },
  36561: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !LQ(QQ)
    }

    function oQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function DQ(QQ) {
      return LQ(QQ) || qQ(QQ) || oQ(QQ)
    }
    wQ.d(FQ, {
      e: () => DQ,
      i: () => LQ,
      m: () => oQ,
      q: () => qQ
    })
  },
  36554: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ
    });
    var LQ = wQ(36561),
      qQ = wQ(9195);
    const oQ = [],
      DQ = [],
      kQ = [],
      vQ = [];
    for (const uQ of Object.keys(qQ.k))(0, LQ.i)(uQ) ? oQ.push(uQ) : (0, LQ.q)(uQ) && DQ.push(uQ), (0, LQ.m)(uQ) && kQ.push(uQ), (uQ.includes(" Bed Head") || uQ.includes(" Strongbed Head")) && vQ.push(uQ);
    const mQ = {
      leafBeds: oQ,
      woolBeds: DQ,
      strongBeds: kQ,
      beds: [...oQ, ...DQ, ...kQ],
      bedHeads: vQ,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6314: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      h: () => qQ,
      l: () => vQ,
      o: () => oQ,
      q: () => mQ,
      r: () => LQ,
      s: () => kQ
    });
    let LQ = function(QQ) {
        return QQ[QQ.DEFAULT = 0] = "DEFAULT", QQ[QQ.BOAT = 1] = "BOAT", QQ[QQ.GLIDER = 2] = "GLIDER", QQ[QQ.BALLOON = 3] = "BALLOON", QQ[QQ.SLEEPING = 4] = "SLEEPING", QQ[QQ.RIDING_MOB = 5] = "RIDING_MOB", QQ[QQ.CAR = 6] = "CAR", QQ[QQ.HOVERCRAFT = 7] = "HOVERCRAFT", QQ
      }({}),
      qQ = function(QQ) {
        return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.OBSIDIAN = 1] = "OBSIDIAN", QQ[QQ.SPEED = 2] = "SPEED", QQ
      }({}),
      oQ = function(QQ) {
        return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.IRON = 1] = "IRON", QQ[QQ.GOLD = 2] = "GOLD", QQ[QQ.DIAMOND = 3] = "DIAMOND", QQ
      }({}),
      DQ = function(QQ) {
        return QQ[QQ.YELLOW = 0] = "YELLOW", QQ[QQ.WHITE = 1] = "WHITE", QQ[QQ.RED = 2] = "RED", QQ[QQ.PURPLE = 3] = "PURPLE", QQ[QQ.PINK = 4] = "PINK", QQ[QQ.ORANGE = 5] = "ORANGE", QQ[QQ.MAGENTA = 6] = "MAGENTA", QQ[QQ.LIME = 7] = "LIME", QQ[QQ.LIGHT_GRAY = 8] = "LIGHT_GRAY", QQ[QQ.LIGHT_BLUE = 9] = "LIGHT_BLUE", QQ[QQ.GREEN = 10] = "GREEN", QQ[QQ.GRAY = 11] = "GRAY", QQ[QQ.CYAN = 12] = "CYAN", QQ[QQ.BROWN = 13] = "BROWN", QQ[QQ.BLUE = 14] = "BLUE", QQ[QQ.BLACK = 15] = "BLACK", QQ
      }({}),
      kQ = function(QQ) {
        return QQ[QQ.ROTATION_1 = 0] = "ROTATION_1", QQ[QQ.ROTATION_2 = 1] = "ROTATION_2", QQ[QQ.ROTATION_3 = 2] = "ROTATION_3", QQ[QQ.ROTATION_4 = 3] = "ROTATION_4", QQ
      }({}),
      vQ = function(QQ) {
        return QQ[QQ.KART = 0] = "KART", QQ[QQ.OFF_ROADER = 1] = "OFF_ROADER", QQ[QQ.CAR = 2] = "CAR", QQ[QQ.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", QQ[QQ.ARMORED_CAR = 4] = "ARMORED_CAR", QQ[QQ.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", QQ[QQ.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", QQ[QQ.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", QQ
      }({});
    LQ.DEFAULT, LQ.BOAT, qQ.SPEED, LQ.GLIDER, oQ.DIAMOND, LQ.BALLOON, DQ.BLACK, LQ.SLEEPING, kQ.ROTATION_4, LQ.RIDING_MOB, LQ.CAR, vQ.MOONSTONE_MINING_DRILL, LQ.HOVERCRAFT;
    let mQ = function(QQ) {
      return QQ[QQ.NORMAL = 0] = "NORMAL", QQ[QQ.GLIDING = 1] = "GLIDING", QQ[QQ.FLOATING = 2] = "FLOATING", QQ
    }({})
  },
  9074: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);