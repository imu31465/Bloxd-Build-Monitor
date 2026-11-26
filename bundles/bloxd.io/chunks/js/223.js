export const id = 223;
export const ids = [223];
export const modules = {
  37777: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => bV,
      i: () => TV
    });
    xV(35278);
    var JV = xV(62),
      YV = xV(1542),
      UV = xV(2051),
      yV = xV(2100),
      pV = xV(27),
      QV = xV(2693),
      nV = xV(37786),
      wV = xV(37790),
      ZV = xV(35268),
      vV = xV(35275),
      rV = xV(35292),
      kV = xV(1321);
    const bV = (0, JV.memo)((function() {
      var VV;
      const {
        isTouchScreen: eV,
        clientEscMenuOptions: xV,
        scriptedCameraFacing: UV,
        crosshairShownOverride: bV,
        crosshairGameView: BV
      } = (0, pV.l)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), jV = (0, QV.j)("gunshotOrigin"), qV = (0, JV.useRef)(null), tV = (0, JV.useRef)(!1), [FV, PV] = (0, JV.useState)(EV);
      (0, YV.g)("cameraZoomSet", PV), (0, JV.useEffect)((() => {
        PV(EV())
      }), []);
      const AV = (0, yV.h)("heldItemAim"),
        XV = AV.gun,
        MV = (0, rV.h)(),
        zV = (0, JV.useRef)(MV);
      zV.current = MV;
      const [GV, WV] = (0, JV.useState)(!1);
      (0, JV.useEffect)((() => (0, wV.g)("crosshairAccuracy", TV)), []), (0, YV.g)("mouseState", (VV => {
        let {
          isDown: eV
        } = VV;
        tV.current = eV, qV.current && (qV.current.style.transform = (0, vV.e)(eV, zV.current.growOnClick)), "shapes" === zV.current.style && WV(eV)
      }));
      const RV = (0, ZV.e)(eV, xV.touchActionButtons);
      return (null !== (VV = (0, nV.c)(BV, bV)) && void 0 !== VV ? VV : (0, nV.g)(AV, FV > 1, RV, jV)) ? "movement" === UV || "cursor" === UV ? null : (0, kV.jsxs)(kV.Fragment, {
        children: [XV && (0, kV.jsx)(NV, {
          custom: MV.forGuns && "shapes" === MV.style ? MV : null,
          touch: eV
        }), !XV && (0, kV.jsx)(vV.c, {
          settings: MV,
          touch: eV,
          pressRef: qV,
          pressed: "shapes" === MV.style ? GV : tV.current
        })]
      }) : null
    }));

    function EV() {
      return UV.gameBridge.lookup("cameraZoom", null)
    }
    const BV = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      jV = {
        current: null
      },
      qV = {
        current: null
      };
    let tV = 0,
      FV = 0;

    function TV(VV) {
      FV = VV, BV[0].current || jV.current || qV.current ? AV(VV) : tV = VV
    }

    function PV(VV) {
      return ((0, nV.d)(VV) - (0, nV.d)(0)) * window.innerHeight / 100
    }

    function AV(VV) {
      var eV;
      if (null === (eV = qV.current) || void 0 === eV || eV.call(qV, PV(VV)), BV[0].current) {
        const eV = `${(0,nV.d)(VV)}vh`;
        BV[0].current.style.transform = `translateX(calc(0px - ${eV}))`, BV[1].current.style.transform = `translateX(calc(0px + ${eV}))`, BV[2].current.style.transform = `translateY(calc(0px - ${eV}))`, BV[3].current.style.transform = `translateY(calc(0px + ${eV}))`
      }
      jV.current && (jV.current.style.filter = `blur(${Math.round(VV/10)}px)`)
    }

    function NV(VV) {
      let {
        custom: eV,
        touch: xV
      } = VV;
      const UV = (0, YV.j)("aimingOverlay", "none"),
        yV = "1.2vh",
        pV = "0.3vh";
      (0, JV.useEffect)((() => {
        tV && AV(tV)
      }), []);
      const QV = (0, JV.useRef)(null !== eV);
      return (0, JV.useLayoutEffect)((() => {
        var VV;
        eV ? null === (VV = qV.current) || void 0 === VV || VV.call(qV, PV(FV)) : QV.current && AV(FV);
        QV.current = null !== eV
      }), [eV]), (0, kV.jsxs)(kV.Fragment, {
        children: ["sniper" === UV && (0, kV.jsxs)("div", {
          ref: jV,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, kV.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, kV.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, kV.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, kV.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, kV.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === UV ? 0 : 1
          },
          children: [eV && (0, kV.jsx)(vV.c, {
            settings: eV,
            touch: xV,
            spreadRef: qV
          }), !eV && (0, kV.jsxs)(kV.Fragment, {
            children: [(0, kV.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: yV,
                height: pV,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: BV[0]
            }), (0, kV.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: yV,
                height: pV,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: BV[1]
            }), (0, kV.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: pV,
                height: yV,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: BV[2]
            }), (0, kV.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: pV,
                height: yV,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: BV[3]
            })]
          })]
        })]
      })
    }
  },
  35275: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => bV,
      e: () => kV
    });
    xV(35278);
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(62),
      yV = xV(35272);

    function pV(VV, eV) {
      return Math.max(1, Math.round(VV * eV))
    }

    function QV(VV, eV) {
      const xV = eV * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        JV = function(VV, eV) {
          if (VV.lines) return pV(VV.lineThickness, eV) % 2;
          if (VV.dot) return pV(VV.dotSize, eV) % 2;
          return nV(VV, eV) % 2
        }(VV, eV),
        YV = wV(VV.lineThickness * xV, JV),
        UV = pV(VV.lineLength, xV),
        yV = Math.round(VV.gap * xV),
        QV = VV.outline > 0 ? pV(VV.outline, xV) : 0,
        vV = [];
      if (VV.lines && (vV.push({
          x: YV + yV,
          y: 0,
          w: UV,
          h: YV,
          arm: "right"
        }), vV.push({
          x: -yV - UV,
          y: 0,
          w: UV,
          h: YV,
          arm: "left"
        }), vV.push({
          x: 0,
          y: YV + yV,
          w: YV,
          h: UV,
          arm: "down"
        }), VV.tStyle || vV.push({
          x: 0,
          y: -yV - UV,
          w: YV,
          h: UV,
          arm: "up"
        }), 0 === yV && vV.push({
          x: 0,
          y: 0,
          w: YV,
          h: YV
        })), VV.dot) {
        const eV = wV(VV.dotSize * xV, JV),
          UV = VV.lines && 0 === yV && VV.dotSize > VV.lineThickness ? Math.max(eV, YV + 2) : eV,
          pV = (YV - UV) / 2;
        vV.push({
          x: pV,
          y: pV,
          w: UV,
          h: UV
        })
      }
      const rV = vV.map((VV => ({
        ...VV,
        x: VV.x - QV,
        y: VV.y - QV,
        w: VV.w + 2 * QV,
        h: VV.h + 2 * QV
      })));
      let kV = null,
        bV = null;
      if (VV.circle) {
        const eV = pV(VV.circleThickness, xV),
          UV = function(VV, eV) {
            return VV + (VV % 2 === eV ? 0 : 1)
          }(nV(VV, xV), JV),
          yV = (YV - UV) / 2;
        kV = ZV(yV, UV, eV), QV > 0 && (bV = ZV(yV - QV, UV + 2 * QV, eV + 2 * QV))
      }
      return {
        cell: YV,
        fills: vV,
        outlines: QV > 0 ? rV : [],
        ring: kV,
        ringOutline: bV
      }
    }

    function nV(VV, eV) {
      return Math.round(VV.circleRadius * eV * 2 + pV(VV.circleThickness, eV))
    }

    function wV(VV, eV) {
      return Math.max(2 - eV, 2 * Math.round((VV - eV) / 2) + eV)
    }

    function ZV(VV, eV, xV) {
      const JV = 2 * xV >= eV - 1;
      return {
        x: VV,
        y: VV,
        size: eV,
        border: Math.min(xV, Math.floor(eV / 2)),
        filled: JV
      }
    }
    var vV = xV(1321);
    const rV = 1.4;

    function kV(VV, eV) {
      return VV && eV ? `scale(${rV})` : "scale(1)"
    }

    function bV(VV) {
      return "classic" === VV.settings.style ? (0, vV.jsx)(jV, {
        ...VV
      }) : (0, vV.jsx)(NV, {
        ...VV
      })
    }
    const EV = .125;

    function BV(VV, eV) {
      const xV = {};
      if (VV.color !== yV.f.color && (xV.color = (0, yV.l)(VV.color)), VV.opacity !== yV.f.opacity && (xV.opacity = VV.opacity / 100), VV.outline !== yV.f.outline || VV.outlineColor !== yV.f.outlineColor) {
        const eV = VV.outline,
          JV = (0, yV.l)(VV.outlineColor);
        xV.textShadow = eV > 0 ? `-${eV}px 0 ${JV}, 0 ${eV}px ${JV}, ${eV}px 0 ${JV}, 0 -${eV}px ${JV}` : "none"
      }
      if (VV.size !== yV.f.size) {
        const JV = VV.size / 100;
        xV.fontSize = eV ? `calc(max(1.3rem, 18px) * ${JV})` : `calc(1.3rem * ${JV})`, xV.marginTop = `-${EV}em`, xV.transformOrigin = `50% calc(50% + ${EV}em)`
      }
      return xV
    }

    function jV(VV) {
      let {
        settings: eV,
        touch: xV,
        inPreview: JV,
        inEditor: UV,
        pressed: yV = !1,
        pressRef: pV
      } = VV;
      return (0, vV.jsx)("div", {
        className: YV()("Crosshair", {
          Touch: xV,
          CrosshairInPreview: JV,
          CrosshairInEditor: UV || JV
        }),
        ref: pV,
        style: {
          transform: kV(yV, eV.growOnClick),
          ...BV(eV, xV)
        },
        children: "+"
      })
    }

    function qV(VV, eV) {
      return VV / eV + "px"
    }

    function tV(VV, eV, xV, JV) {
      return {
        ...PV(VV, eV, xV),
        width: qV(VV.w, xV),
        height: qV(VV.h, xV),
        background: JV
      }
    }

    function FV(VV, eV, xV) {
      return {
        left: qV(VV.x, eV),
        top: qV(VV.y, eV),
        width: qV(VV.size, eV),
        height: qV(VV.size, eV),
        borderWidth: qV(VV.border, eV),
        borderColor: xV,
        background: VV.filled ? xV : void 0
      }
    }
    const TV = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function PV(VV, eV, xV) {
      const [JV, YV] = VV.arm ? TV[VV.arm] : [0, 0], UV = Math.round(eV * xV);
      return {
        left: qV(VV.x + JV * UV, xV),
        top: qV(VV.y + YV * UV, xV)
      }
    }

    function AV(VV) {
      return VV.arm ? {
        "data-arm": VV.arm,
        "data-x": VV.x,
        "data-y": VV.y
      } : {}
    }

    function NV(VV) {
      let {
        settings: eV,
        inPreview: xV,
        inEditor: JV,
        pressed: pV = !1,
        spread: nV,
        spreadRef: wV
      } = VV;
      const ZV = (0, UV.useRef)(null),
        {
          box: kV,
          dpr: bV
        } = function(VV) {
          const [eV, xV] = (0, UV.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, UV.useLayoutEffect)((() => {
            const eV = VV.current;
            if (!eV) return;
            const JV = () => {
              const VV = eV.getBoundingClientRect(),
                JV = window.devicePixelRatio || 1;
              xV((eV => eV.dpr === JV && eV.box.left === VV.left && eV.box.top === VV.top && eV.box.width === VV.width && eV.box.height === VV.height ? eV : {
                box: {
                  left: VV.left,
                  top: VV.top,
                  width: VV.width,
                  height: VV.height
                },
                dpr: JV
              }))
            };
            JV();
            const YV = new ResizeObserver(JV);
            return YV.observe(eV), window.addEventListener("resize", JV), window.addEventListener("scroll", JV, !0), () => {
              YV.disconnect(), window.removeEventListener("resize", JV), window.removeEventListener("scroll", JV, !0)
            }
          }), [VV]), eV
        }(ZV),
        EV = (0, UV.useRef)(bV);
      EV.current = bV;
      const BV = QV(eV, bV, pV && eV.growOnClick ? rV : 1),
        jV = function(VV, eV, xV) {
          const JV = Math.round((VV.left + VV.width / 2) * xV - eV / 2),
            YV = Math.round((VV.top + VV.height / 2) * xV - eV / 2);
          return {
            x: JV / xV - VV.left,
            y: YV / xV - VV.top
          }
        }(kV, BV.cell, bV),
        qV = (0, yV.l)(eV.color),
        TV = (0, yV.l)(eV.outlineColor),
        NV = (0, UV.useRef)(0);
      (0, UV.useLayoutEffect)((() => {
        if (wV) return wV.current = VV => {
          var eV;
          NV.current = VV, null === (eV = ZV.current) || void 0 === eV || eV.querySelectorAll("[data-arm]").forEach((eV => {
            Object.assign(eV.style, PV(function(VV) {
              return {
                x: Number(VV.dataset.x),
                y: Number(VV.dataset.y),
                arm: VV.dataset.arm
              }
            }(eV), VV, EV.current))
          }))
        }, () => {
          wV.current = null
        }
      }), [wV]);
      const XV = null !== nV && void 0 !== nV ? nV : NV.current;
      return (0, vV.jsx)("div", {
        ref: ZV,
        className: YV()("CrosshairShapes", {
          CrosshairInPreview: xV,
          CrosshairInEditor: JV || xV,
          CrosshairSpreads: void 0 !== wV
        }),
        children: (0, vV.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: jV.x,
            top: jV.y,
            opacity: eV.opacity / 100
          },
          children: (0, vV.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [BV.ringOutline && (0, vV.jsx)("div", {
              className: "CrosshairRing",
              style: FV(BV.ringOutline, bV, TV)
            }), BV.outlines.map(((VV, eV) => (0, vV.jsx)("div", {
              className: "CrosshairPart",
              ...AV(VV),
              style: tV(VV, XV, bV, TV)
            }, `o${eV}`))), BV.ring && (0, vV.jsx)("div", {
              className: "CrosshairRing",
              style: FV(BV.ring, bV, qV)
            }), BV.fills.map(((VV, eV) => (0, vV.jsx)("div", {
              className: "CrosshairPart",
              ...AV(VV),
              style: tV(VV, XV, bV, qV)
            }, `f${eV}`)))]
          })
        })
      })
    }
  },
  35285: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV,
      h: () => EV,
      j: () => bV
    });
    var JV = xV(35272);
    const YV = "XH1-",
      UV = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      yV = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      pV = ["color", "outlineColor"],
      QV = 1 + 3 * pV.length + yV.length + 1,
      nV = Math.ceil(8 * QV / Math.log2(62)),
      wV = YV.length + nV;

    function ZV(VV) {
      let eV = 90;
      for (const xV of VV) eV = 31 * eV + xV & 255;
      return eV
    }
    const vV = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      rV = BigInt(vV.length);

    function kV(VV, eV) {
      let xV = 0n;
      for (const YV of VV) {
        const VV = vV.indexOf(YV);
        if (VV < 0) return null;
        xV = xV * rV + BigInt(VV)
      }
      if (xV >> BigInt(8 * eV) !== 0n) return null;
      const JV = [];
      for (let YV = 0; YV < eV; YV++) JV.unshift(Number(0xffn & xV)), xV >>= 8n;
      return JV
    }

    function bV(VV) {
      let eV = "shapes" === VV.style ? 1 : 0;
      UV.forEach(((xV, JV) => {
        VV[xV] && (eV |= 1 << JV + 1)
      }));
      const xV = [eV];
      for (const YV of pV) {
        const eV = (0, JV.i)(YV, VV[YV]);
        xV.push(eV >> 16 & 255, eV >> 8 & 255, 255 & eV)
      }
      for (const YV of yV) {
        const {
          min: eV,
          step: UV
        } = JV.b[YV];
        xV.push(Math.round(((0, JV.i)(YV, VV[YV]) - eV) / UV))
      }
      return xV.push(ZV(xV)), YV + function(VV, eV) {
        let xV = 0n;
        for (const YV of VV) xV = xV << 8n | BigInt(YV);
        let JV = "";
        for (let YV = 0; YV < eV; YV++) JV = vV[Number(xV % rV)] + JV, xV /= rV;
        return JV
      }(xV, nV)
    }

    function EV(VV) {
      for (const eV of VV.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${nV}})`, "gi"))) {
        const VV = BV(kV(eV[1], QV));
        if (VV) return VV
      }
      return null
    }

    function BV(VV) {
      if (!VV || VV.length !== QV || ZV(VV.slice(0, -1)) !== VV[VV.length - 1]) return null;
      const eV = VV[0],
        xV = {
          ...JV.f,
          style: 1 & eV ? "shapes" : "classic"
        };
      UV.forEach(((VV, JV) => {
        xV[VV] = 0 !== (eV & 1 << JV + 1)
      }));
      let YV = 1;
      for (const JV of pV) xV[JV] = VV[YV] << 16 | VV[YV + 1] << 8 | VV[YV + 2], YV += 3;
      for (const UV of yV) {
        const {
          min: eV,
          step: yV
        } = JV.b[UV];
        xV[UV] = (0, JV.i)(UV, eV + VV[YV] * yV), YV++
      }
      return xV
    }
  },
  35272: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      f: () => YV,
      i: () => UV,
      l: () => nV,
      o: () => QV,
      q: () => wV,
      u: () => pV,
      w: () => yV
    });
    const JV = {
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
      YV = Object.freeze({
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

    function UV(VV, eV) {
      var xV;
      const {
        min: UV,
        max: yV,
        step: pV
      } = JV[VV];
      if (!Number.isFinite(eV)) return YV[VV];
      const QV = (null !== (xV = String(pV).split(".")[1]) && void 0 !== xV ? xV : "").length,
        nV = Number((Math.round(eV / pV) * pV).toFixed(QV));
      return Math.min(yV, Math.max(UV, nV))
    }

    function yV(VV, eV, xV) {
      const JV = "number" === typeof xV ? UV(eV, xV) : xV;
      return {
        ...VV,
        [eV]: JV
      }
    }

    function pV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(YV).every((JV => xV.includes(JV) || VV[JV] === eV[JV]))
    }

    function QV(VV) {
      return pV(VV, YV)
    }

    function nV(VV) {
      return `#${VV.toString(16).padStart(6,"0")}`
    }

    function wV(VV) {
      const eV = /^#?([0-9a-f]{6})$/i.exec(VV.trim());
      return eV ? parseInt(eV[1], 16) : null
    }
  },
  35292: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => ZV,
      h: () => vV
    });
    var JV = xV(62),
      YV = xV(40),
      UV = xV(35285),
      yV = xV(35272);
    const pV = "crosshairCode";
    let QV = null;
    const nV = new Set;

    function wV() {
      if (null === QV) {
        var VV;
        const eV = YV.m.getItem(pV);
        QV = null !== (VV = "string" === typeof eV ? (0, UV.h)(eV) : null) && void 0 !== VV ? VV : yV.f
      }
      return QV
    }

    function ZV(VV) {
      QV = VV, (0, yV.o)(VV) ? YV.m.removeItem(pV) : YV.m.setItem(pV, (0, UV.j)(VV));
      for (const eV of nV) eV()
    }

    function vV() {
      const [VV, eV] = (0, JV.useState)(wV);
      return (0, JV.useEffect)((() => {
        const VV = () => {
          eV(wV())
        };
        return VV(), xV = VV, nV.add(xV), () => {
          nV.delete(xV)
        };
        var xV
      }), []), VV
    }
  },
  37943: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      e: () => QV,
      h: () => yV
    });
    var JV = xV(657),
      YV = xV(3093);

    function UV(VV) {
      return VV === (0, YV.d)().vxV ? (0, YV.d)().bD : VV
    }

    function yV(VV) {
      return !(0, JV.J)(VV) && UV(VV) === (0, YV.d)().bD
    }
    const pV = "gravity";

    function QV() {
      return (0, YV.d)().physics[pV][1]
    }
  },
  37925: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => PV
    });
    var JV = xV(37930),
      YV = xV(206),
      UV = xV(5353),
      yV = xV(37935),
      pV = xV(37593),
      QV = xV(37985),
      nV = xV(37943),
      wV = xV(380),
      ZV = xV.n(wV),
      vV = xV(3093),
      rV = xV(37977),
      kV = xV(32),
      bV = xV(27),
      EV = xV(37950),
      BV = xV(37952),
      jV = xV(37959),
      qV = xV(37964);
    const tV = new Set(["note"]);
    const FV = {
      stop: () => FV,
      fade: () => FV,
      rate: () => FV,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => FV,
      setPannerAttr: () => FV,
      setPosition: () => FV
    };
    class TV {
      constructor(VV) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new QV.i, this._howl = (0, pV.countDecodesAs)(new UV.Howl({
          src: [...(0, JV.w)(VV).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = this._howl.play(yV.e);
        VV && this._howl.loop(!0, eV);
        let xV = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), eV);
        const JV = {
          stop: () => {
            var VV;
            return null === (VV = this.liveHowl()) || void 0 === VV || VV.stop(eV), JV
          },
          fade: (VV, xV, YV) => {
            var UV;
            return null === (UV = this.liveHowl()) || void 0 === UV || UV.fade(VV, xV, YV, eV), JV
          },
          rate: VV => {
            var xV;
            return null === (xV = this.liveHowl()) || void 0 === xV || xV.rate(VV, eV), JV
          },
          stopsAtOnce: () => this._howl.playing(eV) && !this._howl._playLock,
          isAlive: () => {
            const VV = this._howl._soundById(eV);
            return !this._loadFailed && !!VV && !VV._ended
          },
          getDurationMs: () => this._howl._soundById(eV) ? 1e3 * this._howl.duration(eV) / this._howl.rate(eV) : 0,
          getVolume: () => xV * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => xV,
          setRelativeVolume: VV => {
            var YV;
            if (VV > 1) throw new Error("Volume should be <= 1");
            return xV = bV.b.get("soundOnFromAd") ? VV : 0, null === (YV = this.liveHowl()) || void 0 === YV || YV.volume(Math.min(1, xV * this._volumeMultiplier.getTotalMultipliedVal()), eV), JV
          },
          setPannerAttr: VV => {
            let {
              coneInnerAngle: xV,
              coneOuterAngle: YV = 360,
              coneOuterGain: UV,
              distanceModel: yV,
              maxDistance: pV,
              panningModel: QV,
              refDistance: nV,
              rolloffFactor: wV
            } = VV;
            return this._setPannerAttr({
              id: eV,
              coneInnerAngle: xV,
              coneOuterAngle: YV,
              coneOuterGain: UV,
              distanceModel: yV,
              maxDistance: pV,
              panningModel: QV,
              refDistance: nV,
              rolloffFactor: wV
            }), JV
          },
          setPosition: VV => {
            var xV;
            return null === (xV = this.liveHowl()) || void 0 === xV || xV.pos(VV[2], VV[1], VV[0], eV), JV
          }
        };
        return JV
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, yV.i)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(VV) {
        this._volumeMultiplier.setMultiplierType("globalVolume", VV), this._howl.volume(VV)
      }
      _setPannerAttr(VV) {
        let {
          id: eV,
          coneInnerAngle: xV = 360,
          coneOuterAngle: JV = 360,
          coneOuterGain: YV = 0,
          distanceModel: UV = "inverse",
          maxDistance: yV = 1e3,
          panningModel: pV = "HRTF",
          refDistance: QV = rV.h,
          rolloffFactor: nV = 1
        } = VV;
        const wV = this.liveHowl();
        if (null === wV) return;
        wV.pannerAttr({
          coneOuterAngle: JV
        }, eV);
        const ZV = {
          coneInnerAngle: xV,
          coneOuterAngle: JV,
          coneOuterGain: YV,
          distanceModel: UV,
          maxDistance: yV,
          panningModel: pV,
          refDistance: QV,
          rolloffFactor: nV
        };
        wV.pannerAttr(ZV, eV)
      }
    }
    const PV = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new EV.b, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, kV.h.subscribe("appManagerUpdated|soundVolume", (VV => {
          const eV = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const xV of eV) xV.setGlobalVolume(VV)
        }))
      }
      play(VV, eV) {
        var xV;
        let UV, yV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (xV = (0, vV.d)()) || void 0 === xV ? void 0 : xV.bD,
          pV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rV.f,
          QV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rV.h,
          wV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var kV;
        (0, vV.d)() ? UV = !!Array.isArray(yV) || (0, nV.c)(yV) !== (null === (kV = (0, vV.d)()) || void 0 === kV ? void 0 : kV.bD): UV = !1;
        const bV = (0, JV.n)(VV),
          BV = this.loadSound(UV ? this.spatialSounds : this.stereoSounds, VV);
        if (!UV) {
          const VV = BV.play(wV);
          return VV.setRelativeVolume(eV), VV
        }
        const jV = (0, vV.d)(),
          qV = Array.isArray(yV) ? yV : jV.sF.YF(yV),
          TV = jV.sF.YF(jV.bD);
        if (!qV || ZV().sqrDist(qV, TV) > pV * pV) return FV;
        let PV;
        if (!wV) {
          if (!this.spatialVoices.admit({
              group: tV.has(bV) ? null : (0, EV.e)(VV),
              loudness: (0, EV.d)(eV, ZV().Dn(qV, TV), QV),
              startMs: performance.now(),
              getDurationMs: () => {
                var VV, eV;
                return null !== (VV = null === (eV = PV) || void 0 === eV ? void 0 : eV.getDurationMs()) && void 0 !== VV ? VV : 0
              },
              isAlive: () => {
                var VV, eV;
                return null !== (VV = null === (eV = PV) || void 0 === eV ? void 0 : eV.isAlive()) && void 0 !== VV && VV
              },
              canStop: () => {
                var VV, eV;
                return null !== (VV = null === (eV = PV) || void 0 === eV ? void 0 : eV.stopsAtOnce()) && void 0 !== VV && VV
              },
              stop: () => {
                var VV;
                null === (VV = PV) || void 0 === VV || VV.stop()
              }
            })) return FV
        }
        return PV = BV.play(wV), PV.setRelativeVolume(eV), PV.setPannerAttr({
          refDistance: QV
        }), PV.setPosition([qV[0], qV[1] + YV.f.nB * YV.f.playerEyeToHeightRatio, qV[2]]), PV
      }
      preload(VV) {
        const eV = (0, JV.r)(VV) ? [VV] : (0, JV.y)(VV);
        if (0 === eV.length) throw new Error(`Invalid sound name ${VV} (no sound has it or starts with it)`);
        for (const xV of eV) this.loadSound(this.stereoSounds, xV)
      }
      preloadAtIdle(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qV.b;
        const xV = VV.filter((VV => !this.idlePreloads.has(VV)));
        for (const YV of xV) this.idlePreloads.add(YV);
        const JV = this.idlePreloadGeneration;
        (0, jV.d)(xV, {
          ...eV,
          pJ: () => JV !== this.idlePreloadGeneration,
          fetchFile: VV => {
            this.idlePreloads.delete(VV);
            try {
              return this.preload(VV), Promise.resolve()
            } catch (eV) {
              return Promise.reject(eV)
            }
          }
        })
      }
      loadSound(VV, eV) {
        const xV = VV[eV];
        if (xV) return xV;
        const YV = this.makeSound(VV, eV);
        for (const yV of null !== (UV = (0, JV.s)(eV)) && void 0 !== UV ? UV : []) {
          var UV;
          VV[yV] || this.makeSound(VV, yV)
        }
        return YV
      }
      makeSound(VV, eV) {
        (0, qV.d)(eV);
        const xV = new TV(eV);
        return xV.setGlobalVolume(bV.b.get("soundVolume")), VV[eV] = xV, xV
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const VV of [this.stereoSounds, this.spatialSounds])
          for (const [eV, xV] of Object.entries(VV)) !BV.e.has((0, JV.n)(eV)) && xV.loaded() && (xV.unloadOnceIdle(), delete VV[eV])
      }
    }
  },
  38028: (VV, eV, xV) => {
    function JV(VV, eV) {
      var xV, JV, YV, UV, yV, pV, QV, nV;
      return VV.name === eV.name && ((null === (xV = VV.attributes) || void 0 === xV || null === (JV = xV.customAttributes) || void 0 === JV ? void 0 : JV.stackKey) === (null === (YV = eV.attributes) || void 0 === YV || null === (UV = YV.customAttributes) || void 0 === UV ? void 0 : UV.stackKey) && (!0 !== (null === (yV = VV.attributes) || void 0 === yV || null === (pV = yV.customAttributes) || void 0 === pV ? void 0 : pV.unstackable) && !0 !== (null === (QV = eV.attributes) || void 0 === QV || null === (nV = QV.customAttributes) || void 0 === nV ? void 0 : nV.unstackable)))
    }
    xV.d(eV, {
      c: () => JV
    })
  },
  38114: (VV, eV, xV) => {
    function JV(VV) {
      return VV.includes("Leaf Bed")
    }

    function YV(VV) {
      return / Bed(?: Head)?(?:\||$)/.test(VV) && !JV(VV)
    }

    function UV(VV) {
      return VV.includes(" Strongbed")
    }

    function yV(VV) {
      return JV(VV) || YV(VV) || UV(VV)
    }
    xV.d(eV, {
      d: () => yV,
      e: () => JV,
      f: () => UV,
      j: () => YV
    })
  },
  38112: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    var JV = xV(38114),
      YV = xV(9820);
    const UV = [],
      yV = [],
      pV = [],
      QV = [];
    for (const wV of Object.keys(YV.p))(0, JV.e)(wV) ? UV.push(wV) : (0, JV.j)(wV) && yV.push(wV), (0, JV.f)(wV) && pV.push(wV), (wV.includes(" Bed Head") || wV.includes(" Strongbed Head")) && QV.push(wV);
    const nV = {
      leafBeds: UV,
      woolBeds: yV,
      strongBeds: pV,
      beds: [...UV, ...yV, ...pV],
      bedHeads: QV,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  35278: () => {}
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);