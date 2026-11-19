export const id = 114;
export const ids = [114];
export const modules = {
  35610: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => KT,
      f: () => mT
    });
    IT(8715);
    var iT = IT(46),
      zT = IT(1403),
      kT = IT(1751),
      WT = IT(1784),
      XT = IT(12),
      BT = IT(2227),
      FT = IT(35618),
      ST = IT(35627),
      DT = IT(8682),
      LT = IT(8713),
      xT = IT(8731),
      cT = IT(1083);
    const KT = (0, iT.memo)((function() {
      var TT;
      const {
        isTouchScreen: oT,
        clientEscMenuOptions: IT,
        scriptedCameraFacing: kT,
        crosshairShownOverride: KT,
        crosshairGameView: rT
      } = (0, XT.k)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), AT = (0, BT.g)("gunshotOrigin"), gT = (0, iT.useRef)(null), hT = (0, iT.useRef)(!1), [wT, eT] = (0, iT.useState)(MT);
      (0, zT.g)("cameraZoomSet", eT), (0, iT.useEffect)((() => {
        eT(MT())
      }), []);
      const RT = (0, WT.f)("heldItemAim"),
        vT = RT.gun,
        ET = (0, xT.g)(),
        fT = (0, iT.useRef)(ET);
      fT.current = ET;
      const [CT, jT] = (0, iT.useState)(!1);
      (0, iT.useEffect)((() => (0, ST.f)("crosshairAccuracy", mT)), []), (0, zT.g)("mouseState", (TT => {
        let {
          isDown: oT
        } = TT;
        hT.current = oT, gT.current && (gT.current.style.transform = (0, LT.i)(oT, fT.current.growOnClick)), "shapes" === fT.current.style && jT(oT)
      }));
      const JT = (0, DT.e)(oT, IT.touchActionButtons);
      return (null !== (TT = (0, FT.b)(rT, KT)) && void 0 !== TT ? TT : (0, FT.g)(RT, wT > 1, JT, AT)) ? "movement" === kT || "cursor" === kT ? null : (0, cT.jsxs)(cT.Fragment, {
        children: [vT && (0, cT.jsx)(uT, {
          custom: ET.forGuns && "shapes" === ET.style ? ET : null,
          touch: oT
        }), !vT && (0, cT.jsx)(LT.e, {
          settings: ET,
          touch: oT,
          pressRef: gT,
          pressed: "shapes" === ET.style ? CT : hT.current
        })]
      }) : null
    }));

    function MT() {
      return kT.gameBridge.lookup("cameraZoom", null)
    }
    const rT = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      AT = {
        current: null
      },
      gT = {
        current: null
      };
    let hT = 0,
      wT = 0;

    function mT(TT) {
      wT = TT, rT[0].current || AT.current || gT.current ? RT(TT) : hT = TT
    }

    function eT(TT) {
      return ((0, FT.c)(TT) - (0, FT.c)(0)) * window.innerHeight / 100
    }

    function RT(TT) {
      var oT;
      if (null === (oT = gT.current) || void 0 === oT || oT.call(gT, eT(TT)), rT[0].current) {
        const oT = `${(0,FT.c)(TT)}vh`;
        rT[0].current.style.transform = `translateX(calc(0px - ${oT}))`, rT[1].current.style.transform = `translateX(calc(0px + ${oT}))`, rT[2].current.style.transform = `translateY(calc(0px - ${oT}))`, rT[3].current.style.transform = `translateY(calc(0px + ${oT}))`
      }
      AT.current && (AT.current.style.filter = `blur(${Math.round(TT/10)}px)`)
    }

    function uT(TT) {
      let {
        custom: oT,
        touch: IT
      } = TT;
      const kT = (0, zT.i)("aimingOverlay", "none"),
        WT = "1.2vh",
        XT = "0.3vh";
      (0, iT.useEffect)((() => {
        hT && RT(hT)
      }), []);
      const BT = (0, iT.useRef)(null !== oT);
      return (0, iT.useLayoutEffect)((() => {
        var TT;
        oT ? null === (TT = gT.current) || void 0 === TT || TT.call(gT, eT(wT)) : BT.current && RT(wT);
        BT.current = null !== oT
      }), [oT]), (0, cT.jsxs)(cT.Fragment, {
        children: ["sniper" === kT && (0, cT.jsxs)("div", {
          ref: AT,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, cT.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, cT.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, cT.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, cT.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, cT.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === kT ? 0 : 1
          },
          children: [oT && (0, cT.jsx)(LT.e, {
            settings: oT,
            touch: IT,
            spreadRef: gT
          }), !oT && (0, cT.jsxs)(cT.Fragment, {
            children: [(0, cT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: WT,
                height: XT,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: rT[0]
            }), (0, cT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: WT,
                height: XT,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: rT[1]
            }), (0, cT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: XT,
                height: WT,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: rT[2]
            }), (0, cT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: XT,
                height: WT,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: rT[3]
            })]
          })]
        })]
      })
    }
  },
  8713: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT,
      i: () => DT
    });
    IT(8715);
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(46),
      WT = IT(8684);

    function XT(TT, oT) {
      return Math.max(1, Math.round(TT * oT))
    }

    function BT(TT, oT, IT) {
      const iT = 2 * IT >= oT - 1;
      return {
        x: TT,
        y: TT,
        size: oT,
        border: Math.min(IT, Math.floor(oT / 2)),
        filled: iT
      }
    }
    var FT = IT(1083);
    const ST = 1.4;

    function DT(TT, oT) {
      return TT && oT ? `scale(${ST})` : "scale(1)"
    }

    function LT(TT) {
      return "classic" === TT.settings.style ? (0, FT.jsx)(KT, {
        ...TT
      }) : (0, FT.jsx)(mT, {
        ...TT
      })
    }
    const xT = .125;

    function cT(TT, oT) {
      const IT = {};
      if (TT.color !== WT.f.color && (IT.color = (0, WT.k)(TT.color)), TT.opacity !== WT.f.opacity && (IT.opacity = TT.opacity / 100), TT.outline !== WT.f.outline || TT.outlineColor !== WT.f.outlineColor) {
        const oT = TT.outline,
          iT = (0, WT.k)(TT.outlineColor);
        IT.textShadow = oT > 0 ? `-${oT}px 0 ${iT}, 0 ${oT}px ${iT}, ${oT}px 0 ${iT}, 0 -${oT}px ${iT}` : "none"
      }
      if (TT.size !== WT.f.size) {
        const iT = TT.size / 100;
        IT.fontSize = oT ? `calc(max(1.3rem, 18px) * ${iT})` : `calc(1.3rem * ${iT})`, IT.marginTop = `-${xT}em`, IT.transformOrigin = `50% calc(50% + ${xT}em)`
      }
      return IT
    }

    function KT(TT) {
      let {
        settings: oT,
        touch: IT,
        inPreview: iT,
        inEditor: kT,
        pressed: WT = !1,
        pressRef: XT
      } = TT;
      return (0, FT.jsx)("div", {
        className: zT()("Crosshair", {
          Touch: IT,
          CrosshairInPreview: iT,
          CrosshairInEditor: kT || iT
        }),
        ref: XT,
        style: {
          transform: DT(WT, oT.growOnClick),
          ...cT(oT, IT)
        },
        children: "+"
      })
    }

    function MT(TT, oT) {
      return TT / oT + "px"
    }

    function rT(TT, oT, IT, iT) {
      return {
        ...hT(TT, oT, IT),
        width: MT(TT.w, IT),
        height: MT(TT.h, IT),
        background: iT
      }
    }

    function AT(TT, oT, IT) {
      return {
        left: MT(TT.x, oT),
        top: MT(TT.y, oT),
        width: MT(TT.size, oT),
        height: MT(TT.size, oT),
        borderWidth: MT(TT.border, oT),
        borderColor: IT,
        background: TT.filled ? IT : void 0
      }
    }
    const gT = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function hT(TT, oT, IT) {
      const [iT, zT] = TT.arm ? gT[TT.arm] : [0, 0], kT = Math.round(oT * IT);
      return {
        left: MT(TT.x + iT * kT, IT),
        top: MT(TT.y + zT * kT, IT)
      }
    }

    function wT(TT) {
      return TT.arm ? {
        "data-arm": TT.arm,
        "data-x": TT.x,
        "data-y": TT.y
      } : {}
    }

    function mT(TT) {
      let {
        settings: oT,
        inPreview: IT,
        inEditor: iT,
        pressed: DT = !1,
        spread: LT,
        spreadRef: xT
      } = TT;
      const cT = (0, kT.useRef)(null),
        {
          box: KT,
          dpr: MT
        } = function(TT) {
          const [oT, IT] = (0, kT.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, kT.useLayoutEffect)((() => {
            const oT = TT.current;
            if (!oT) return;
            const iT = () => {
              const TT = oT.getBoundingClientRect(),
                iT = window.devicePixelRatio || 1;
              IT((oT => oT.dpr === iT && oT.box.left === TT.left && oT.box.top === TT.top && oT.box.width === TT.width && oT.box.height === TT.height ? oT : {
                box: {
                  left: TT.left,
                  top: TT.top,
                  width: TT.width,
                  height: TT.height
                },
                dpr: iT
              }))
            };
            iT();
            const zT = new ResizeObserver(iT);
            return zT.observe(oT), window.addEventListener("resize", iT), window.addEventListener("scroll", iT, !0), () => {
              zT.disconnect(), window.removeEventListener("resize", iT), window.removeEventListener("scroll", iT, !0)
            }
          }), [TT]), oT
        }(cT),
        gT = (0, kT.useRef)(MT);
      gT.current = MT;
      const mT = function(TT, oT) {
          const IT = XT(TT.lineThickness, oT),
            iT = XT(TT.lineLength, oT),
            zT = Math.round(TT.gap * oT),
            kT = XT(TT.dotSize, oT),
            WT = TT.outline > 0 ? XT(TT.outline, oT) : 0,
            FT = XT(TT.circleThickness, oT),
            ST = TT.circle ? Math.round(TT.circleRadius * oT * 2 + FT) : 0,
            DT = function(TT, oT, IT, iT) {
              return TT.lines ? oT : TT.dot ? IT : TT.circle && iT % 2 === 0 ? 2 : 1
            }(TT, IT, kT, ST),
            LT = [];
          if (TT.lines && (LT.push({
              x: DT + zT,
              y: 0,
              w: iT,
              h: IT,
              arm: "right"
            }), LT.push({
              x: -zT - iT,
              y: 0,
              w: iT,
              h: IT,
              arm: "left"
            }), LT.push({
              x: 0,
              y: DT + zT,
              w: IT,
              h: iT,
              arm: "down"
            }), TT.tStyle || LT.push({
              x: 0,
              y: -zT - iT,
              w: IT,
              h: iT,
              arm: "up"
            }), 0 === zT && LT.push({
              x: 0,
              y: 0,
              w: IT,
              h: IT
            })), TT.dot) {
            const TT = Math.floor((DT - kT) / 2);
            LT.push({
              x: TT,
              y: TT,
              w: kT,
              h: kT
            })
          }
          const xT = LT.map((TT => ({
            ...TT,
            x: TT.x - WT,
            y: TT.y - WT,
            w: TT.w + 2 * WT,
            h: TT.h + 2 * WT
          })));
          let cT = null,
            KT = null;
          if (TT.circle) {
            const TT = ST + ((ST - DT) % 2 === 0 ? 0 : 1),
              oT = (DT - TT) / 2;
            cT = BT(oT, TT, FT), WT > 0 && (KT = BT(oT - WT, TT + 2 * WT, FT + 2 * WT))
          }
          return {
            cell: DT,
            fills: LT,
            outlines: WT > 0 ? xT : [],
            ring: cT,
            ringOutline: KT
          }
        }(DT && oT.growOnClick ? function(TT, oT) {
          return {
            ...TT,
            outline: TT.outline * oT,
            lineLength: TT.lineLength * oT,
            lineThickness: TT.lineThickness * oT,
            gap: TT.gap * oT,
            dotSize: TT.dotSize * oT,
            circleRadius: TT.circleRadius * oT,
            circleThickness: TT.circleThickness * oT
          }
        }(oT, ST) : oT, MT),
        eT = function(TT, oT, IT) {
          const iT = Math.round((TT.left + TT.width / 2) * IT - oT / 2),
            zT = Math.round((TT.top + TT.height / 2) * IT - oT / 2);
          return {
            x: iT / IT - TT.left,
            y: zT / IT - TT.top
          }
        }(KT, mT.cell, MT),
        RT = (0, WT.k)(oT.color),
        uT = (0, WT.k)(oT.outlineColor),
        vT = (0, kT.useRef)(0);
      (0, kT.useLayoutEffect)((() => {
        if (xT) return xT.current = TT => {
          var oT;
          vT.current = TT, null === (oT = cT.current) || void 0 === oT || oT.querySelectorAll("[data-arm]").forEach((oT => {
            Object.assign(oT.style, hT(function(TT) {
              return {
                x: Number(TT.dataset.x),
                y: Number(TT.dataset.y),
                arm: TT.dataset.arm
              }
            }(oT), TT, gT.current))
          }))
        }, () => {
          xT.current = null
        }
      }), [xT]);
      const ET = null !== LT && void 0 !== LT ? LT : vT.current;
      return (0, FT.jsx)("div", {
        ref: cT,
        className: zT()("CrosshairShapes", {
          CrosshairInPreview: IT,
          CrosshairInEditor: iT || IT,
          CrosshairSpreads: void 0 !== xT
        }),
        children: (0, FT.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: eT.x,
            top: eT.y,
            opacity: oT.opacity / 100
          },
          children: (0, FT.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [mT.ringOutline && (0, FT.jsx)("div", {
              className: "CrosshairRing",
              style: AT(mT.ringOutline, MT, uT)
            }), mT.outlines.map(((TT, oT) => (0, FT.jsx)("div", {
              className: "CrosshairPart",
              ...wT(TT),
              style: rT(TT, ET, MT, uT)
            }, `o${oT}`))), mT.ring && (0, FT.jsx)("div", {
              className: "CrosshairRing",
              style: AT(mT.ring, MT, RT)
            }), mT.fills.map(((TT, oT) => (0, FT.jsx)("div", {
              className: "CrosshairPart",
              ...wT(TT),
              style: rT(TT, ET, MT, RT)
            }, `f${oT}`)))]
          })
        })
      })
    }
  },
  8724: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST,
      g: () => MT,
      k: () => KT
    });
    var iT = IT(8684);
    const zT = "XH1-",
      kT = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      WT = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      XT = ["color", "outlineColor"],
      BT = 1 + 3 * XT.length + WT.length + 1,
      FT = Math.ceil(8 * BT / Math.log2(62)),
      ST = zT.length + FT;

    function DT(TT) {
      let oT = 90;
      for (const IT of TT) oT = 31 * oT + IT & 255;
      return oT
    }
    const LT = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      xT = BigInt(LT.length);

    function cT(TT, oT) {
      let IT = 0n;
      for (const zT of TT) {
        const TT = LT.indexOf(zT);
        if (TT < 0) return null;
        IT = IT * xT + BigInt(TT)
      }
      if (IT >> BigInt(8 * oT) !== 0n) return null;
      const iT = [];
      for (let zT = 0; zT < oT; zT++) iT.unshift(Number(0xffn & IT)), IT >>= 8n;
      return iT
    }

    function KT(TT) {
      let oT = "shapes" === TT.style ? 1 : 0;
      kT.forEach(((IT, iT) => {
        TT[IT] && (oT |= 1 << iT + 1)
      }));
      const IT = [oT];
      for (const zT of XT) {
        const oT = (0, iT.h)(zT, TT[zT]);
        IT.push(oT >> 16 & 255, oT >> 8 & 255, 255 & oT)
      }
      for (const zT of WT) {
        const {
          min: oT,
          step: kT
        } = iT.e[zT];
        IT.push(Math.round(((0, iT.h)(zT, TT[zT]) - oT) / kT))
      }
      return IT.push(DT(IT)), zT + function(TT, oT) {
        let IT = 0n;
        for (const zT of TT) IT = IT << 8n | BigInt(zT);
        let iT = "";
        for (let zT = 0; zT < oT; zT++) iT = LT[Number(IT % xT)] + iT, IT /= xT;
        return iT
      }(IT, FT)
    }

    function MT(TT) {
      for (const oT of TT.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${FT}})`, "gi"))) {
        const TT = rT(cT(oT[1], BT));
        if (TT) return TT
      }
      return null
    }

    function rT(TT) {
      if (!TT || TT.length !== BT || DT(TT.slice(0, -1)) !== TT[TT.length - 1]) return null;
      const oT = TT[0],
        IT = {
          ...iT.f,
          style: 1 & oT ? "shapes" : "classic"
        };
      kT.forEach(((TT, iT) => {
        IT[TT] = 0 !== (oT & 1 << iT + 1)
      }));
      let zT = 1;
      for (const iT of XT) IT[iT] = TT[zT] << 16 | TT[zT + 1] << 8 | TT[zT + 2], zT += 3;
      for (const kT of WT) {
        const {
          min: oT,
          step: WT
        } = iT.e[kT];
        IT[kT] = (0, iT.h)(kT, oT + TT[zT] * WT), zT++
      }
      return IT
    }
  },
  8684: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      f: () => zT,
      h: () => kT,
      k: () => FT,
      o: () => BT,
      q: () => ST,
      u: () => XT,
      w: () => WT
    });
    const iT = {
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
      zT = Object.freeze({
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

    function kT(TT, oT) {
      var IT;
      const {
        min: kT,
        max: WT,
        step: XT
      } = iT[TT];
      if (!Number.isFinite(oT)) return zT[TT];
      const BT = (null !== (IT = String(XT).split(".")[1]) && void 0 !== IT ? IT : "").length,
        FT = Number((Math.round(oT / XT) * XT).toFixed(BT));
      return Math.min(WT, Math.max(kT, FT))
    }

    function WT(TT, oT, IT) {
      const iT = "number" === typeof IT ? kT(oT, IT) : IT;
      return {
        ...TT,
        [oT]: iT
      }
    }

    function XT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(zT).every((iT => IT.includes(iT) || TT[iT] === oT[iT]))
    }

    function BT(TT) {
      return XT(TT, zT)
    }

    function FT(TT) {
      return `#${TT.toString(16).padStart(6,"0")}`
    }

    function ST(TT) {
      const oT = /^#?([0-9a-f]{6})$/i.exec(TT.trim());
      return oT ? parseInt(oT[1], 16) : null
    }
  },
  8731: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => DT,
      g: () => LT
    });
    var iT = IT(46),
      zT = IT(26),
      kT = IT(8724),
      WT = IT(8684);
    const XT = "crosshairCode";
    let BT = null;
    const FT = new Set;

    function ST() {
      if (null === BT) {
        var TT;
        const oT = zT.e.getItem(XT);
        BT = null !== (TT = "string" === typeof oT ? (0, kT.g)(oT) : null) && void 0 !== TT ? TT : WT.f
      }
      return BT
    }

    function DT(TT) {
      BT = TT, (0, WT.o)(TT) ? zT.e.removeItem(XT) : zT.e.setItem(XT, (0, kT.k)(TT));
      for (const oT of FT) oT()
    }

    function LT() {
      const [TT, oT] = (0, iT.useState)(ST);
      return (0, iT.useEffect)((() => {
        const TT = () => {
          oT(ST())
        };
        return TT(), IT = TT, FT.add(IT), () => {
          FT.delete(IT)
        };
        var IT
      }), []), TT
    }
  },
  35722: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      e: () => BT,
      g: () => WT
    });
    var iT = IT(618),
      zT = IT(2465);

    function kT(TT) {
      return TT === (0, zT.i)().KTT ? (0, zT.i)().ZJ : TT
    }

    function WT(TT) {
      return !(0, iT.K)(TT) && kT(TT) === (0, zT.i)().ZJ
    }
    const XT = "gravity";

    function BT() {
      return (0, zT.i)().physics[XT][1]
    }
  },
  35444: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      countDecodesAs: () => ST,
      decodedAudio: () => DT
    });
    var iT = IT(4341);
    const zT = iT.Howler,
      kT = new Map;
    let WT = 0;
    const XT = {
        song: 0,
        sheet: 0
      },
      BT = new WeakMap,
      FT = new WeakSet;

    function ST(TT, oT) {
      return BT.set(TT, oT), TT
    }

    function DT() {
      return {
        bytes: WT,
        songsDecoded: XT.song,
        sheetsDecoded: XT.sheet
      }
    }

    function LT(TT) {
      if (FT.has(TT)) return;
      FT.add(TT);
      const oT = 1 === TT.decodeAudioData.length,
        IT = TT.decodeAudioData.bind(TT);
      TT.decodeAudioData = (TT, iT, FT) => {
        const ST = TT => {
          const oT = zT._howls.filter((TT => "loaded" !== TT._state));
          try {
            null === iT || void 0 === iT || iT(TT)
          } finally {
            const IT = oT.find((TT => "loaded" === TT._state));
            void 0 !== IT && "string" === typeof IT._src && function(TT, oT, IT) {
              var iT;
              WT += IT - (null !== (iT = kT.get(oT)) && void 0 !== iT ? iT : 0), kT.set(oT, IT);
              const zT = BT.get(TT);
              void 0 !== zT && XT[zT]++
            }(IT, IT._src, TT.length * TT.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return TT
        };
        if (!oT) return IT(TT, ST, FT);
        const DT = IT(TT).then(ST);
        return DT.catch((TT => {
          null === FT || void 0 === FT || FT(TT)
        })), DT
      }
    }
    const xT = iT.Howl.prototype,
      cT = xT.init;
    xT.init = function(TT) {
      return iT.Howler.volume(), zT.ctx && LT(zT.ctx), cT.call(this, TT)
    };
    const KT = xT.unload;
    xT.unload = function() {
      const TT = this._src,
        oT = KT.call(this);
      if ("string" !== typeof TT) return oT;
      const IT = kT.get(TT);
      return void 0 !== IT && function(TT) {
        return !zT._howls.some((oT => oT._src === TT || "string" === typeof oT._src && TT.indexOf(oT._src) >= 0))
      }(TT) && (kT.delete(TT), WT -= IT), oT
    }
  },
  35706: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => hT
    });
    var iT = IT(35713),
      zT = IT(193),
      kT = IT(4341),
      WT = IT(35444),
      XT = IT(35737),
      BT = IT(35722),
      FT = IT(319),
      ST = IT.n(FT),
      DT = IT(1183),
      LT = IT(2465),
      xT = IT(35732),
      cT = IT(16),
      KT = IT(12),
      MT = IT(35729);
    const rT = new Set(["note"]);
    const AT = {
      stop: () => AT,
      fade: () => AT,
      rate: () => AT,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => AT,
      setPannerAttr: () => AT,
      setPosition: () => AT
    };
    class gT {
      constructor(TT) {
        let oT, {
          src: IT,
          volumeScalar: zT,
          isSoundSprite: BT
        } = TT;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, BT ? (oT = (0, iT.f)(IT), this._spriteTrackSrc = oT) : oT = {
          src: DT.clientSideServerUrls.staticUrl + IT
        }, this._volumeMultiplier = new XT.i, this._volumeMultiplier.setMultiplierType("persistentScalar", zT), this._howl = (0, WT.countDecodesAs)(new kT.Howl({
          ...oT,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let TT, oT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          IT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (oT) {
          var iT;
          if (null === (iT = this._spriteTrackSrc) || void 0 === iT || !iT.sprite[oT]) throw new Error("No such sprite in your spritetrack");
          TT = this._howl.play(oT)
        } else TT = this._howl.play();
        IT && this._howl.loop(!0, TT);
        let zT = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), TT);
        const kT = {
          stop: () => (this._howl.stop(TT), kT),
          fade: (oT, IT, iT) => (this._howl.fade(oT, IT, iT, TT), kT),
          rate: oT => (this._howl.rate(oT, TT), kT),
          stopsAtOnce: () => this._howl.playing(TT) && !this._howl._playLock,
          isAlive: () => {
            const oT = this._howl._soundById(TT);
            return !this._loadFailed && !!oT && !oT._ended
          },
          getDurationMs: () => this._howl._soundById(TT) ? 1e3 * this._howl.duration(TT) / this._howl.rate(TT) : 0,
          getVolume: () => zT * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => zT,
          setRelativeVolume: oT => {
            if (oT > 1) throw new Error("Volume should be <= 1");
            return zT = KT.c.get("soundOnFromAd") ? oT : 0, this._howl.volume(Math.min(1, zT * this._volumeMultiplier.getTotalMultipliedVal()), TT), kT
          },
          setPannerAttr: oT => {
            let {
              coneInnerAngle: IT,
              coneOuterAngle: iT = 360,
              coneOuterGain: zT,
              distanceModel: WT,
              maxDistance: XT,
              panningModel: BT,
              refDistance: FT,
              rolloffFactor: ST
            } = oT;
            return this._setPannerAttr({
              id: TT,
              coneInnerAngle: IT,
              coneOuterAngle: iT,
              coneOuterGain: zT,
              distanceModel: WT,
              maxDistance: XT,
              panningModel: BT,
              refDistance: FT,
              rolloffFactor: ST
            }), kT
          },
          setPosition: oT => (this._howl.pos(oT[2], oT[1], oT[0], TT), kT)
        };
        return kT
      }
      setGlobalVolume(TT) {
        this._volumeMultiplier.setMultiplierType("globalVolume", TT), this._howl.volume(TT)
      }
      _setPannerAttr(TT) {
        let {
          id: oT,
          coneInnerAngle: IT = 360,
          coneOuterAngle: iT = 360,
          coneOuterGain: zT = 0,
          distanceModel: kT = "inverse",
          maxDistance: WT = 1e3,
          panningModel: XT = "HRTF",
          refDistance: BT = xT.k,
          rolloffFactor: FT = 1
        } = TT;
        this._howl.pannerAttr({
          coneOuterAngle: iT
        }, oT);
        const ST = {
          coneInnerAngle: IT,
          coneOuterAngle: iT,
          coneOuterGain: zT,
          distanceModel: kT,
          maxDistance: WT,
          panningModel: XT,
          refDistance: BT,
          rolloffFactor: FT
        };
        this._howl.pannerAttr(ST, oT)
      }
    }
    const hT = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new MT.d, cT.h.subscribe("appManagerUpdated|soundVolume", (TT => {
          const oT = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const IT of oT) IT.setGlobalVolume(TT)
        }))
      }
      play(TT, oT) {
        var IT;
        let kT, WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (IT = (0, LT.i)()) || void 0 === IT ? void 0 : IT.ZJ,
          XT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xT.g,
          FT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : xT.k,
          DT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var cT;
        (0, LT.i)() ? kT = !!Array.isArray(WT) || (0, BT.d)(WT) !== (null === (cT = (0, LT.i)()) || void 0 === cT ? void 0 : cT.ZJ): kT = !1;
        const hT = kT ? this.spatialSheets : this.stereoSheets,
          wT = (0, iT.h)(TT);
        if (!hT[wT]) {
          const TT = new gT({
            src: wT,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          TT.setGlobalVolume(KT.c.get("soundVolume")), hT[wT] = TT
        }
        const mT = hT[wT];
        if (!kT) {
          const IT = mT.play(TT, DT);
          return IT.setRelativeVolume(oT), IT
        }
        const eT = (0, LT.i)(),
          RT = Array.isArray(WT) ? WT : eT.qm.Wm(WT),
          uT = eT.qm.Wm(eT.ZJ);
        if (!RT || ST().sqrDist(RT, uT) > XT * XT) return AT;
        let vT;
        if (!DT) {
          if (!this.spatialVoices.admit({
              group: rT.has(wT) ? null : (0, MT.j)(TT),
              loudness: (0, MT.f)(oT, ST().gS(RT, uT), FT),
              startMs: performance.now(),
              getDurationMs: () => {
                var TT, oT;
                return null !== (TT = null === (oT = vT) || void 0 === oT ? void 0 : oT.getDurationMs()) && void 0 !== TT ? TT : 0
              },
              isAlive: () => {
                var TT, oT;
                return null !== (TT = null === (oT = vT) || void 0 === oT ? void 0 : oT.isAlive()) && void 0 !== TT && TT
              },
              canStop: () => {
                var TT, oT;
                return null !== (TT = null === (oT = vT) || void 0 === oT ? void 0 : oT.stopsAtOnce()) && void 0 !== TT && TT
              },
              stop: () => {
                var TT;
                null === (TT = vT) || void 0 === TT || TT.stop()
              }
            })) return AT
        }
        return vT = mT.play(TT, DT), vT.setRelativeVolume(oT), vT.setPannerAttr({
          refDistance: FT
        }), vT.setPosition([RT[0], RT[1] + zT.c.Xw * zT.c.playerEyeToHeightRatio, RT[2]]), vT
      }
    }
  },
  35788: (TT, oT, IT) => {
    function iT(TT, oT) {
      var IT, iT, zT, kT, WT, XT, BT, FT;
      return TT.name === oT.name && ((null === (IT = TT.attributes) || void 0 === IT || null === (iT = IT.customAttributes) || void 0 === iT ? void 0 : iT.stackKey) === (null === (zT = oT.attributes) || void 0 === zT || null === (kT = zT.customAttributes) || void 0 === kT ? void 0 : kT.stackKey) && (!0 !== (null === (WT = TT.attributes) || void 0 === WT || null === (XT = WT.customAttributes) || void 0 === XT ? void 0 : XT.unstackable) && !0 !== (null === (BT = oT.attributes) || void 0 === BT || null === (FT = BT.customAttributes) || void 0 === FT ? void 0 : FT.unstackable)))
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  35882: (TT, oT, IT) => {
    function iT(TT) {
      return TT.includes("Leaf Bed")
    }

    function zT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !iT(TT)
    }

    function kT(TT) {
      return TT.includes(" Strongbed")
    }

    function WT(TT) {
      return iT(TT) || zT(TT) || kT(TT)
    }
    IT.d(oT, {
      d: () => WT,
      f: () => iT,
      g: () => kT,
      i: () => zT
    })
  },
  35877: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT
    });
    var iT = IT(35882),
      zT = IT(8829);
    const kT = [],
      WT = [],
      XT = [],
      BT = [];
    for (const ST of Object.keys(zT.o))(0, iT.f)(ST) ? kT.push(ST) : (0, iT.i)(ST) && WT.push(ST), (0, iT.g)(ST) && XT.push(ST), (ST.includes(" Bed Head") || ST.includes(" Strongbed Head")) && BT.push(ST);
    const FT = {
      leafBeds: kT,
      woolBeds: WT,
      strongBeds: XT,
      beds: [...kT, ...WT, ...XT],
      bedHeads: BT,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  5975: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      h: () => zT,
      i: () => BT,
      l: () => kT,
      o: () => FT,
      r: () => iT,
      v: () => XT
    });
    let iT = function(TT) {
        return TT[TT.DEFAULT = 0] = "DEFAULT", TT[TT.BOAT = 1] = "BOAT", TT[TT.GLIDER = 2] = "GLIDER", TT[TT.BALLOON = 3] = "BALLOON", TT[TT.SLEEPING = 4] = "SLEEPING", TT[TT.RIDING_MOB = 5] = "RIDING_MOB", TT[TT.CAR = 6] = "CAR", TT[TT.HOVERCRAFT = 7] = "HOVERCRAFT", TT
      }({}),
      zT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.OBSIDIAN = 1] = "OBSIDIAN", TT[TT.SPEED = 2] = "SPEED", TT
      }({}),
      kT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.IRON = 1] = "IRON", TT[TT.GOLD = 2] = "GOLD", TT[TT.DIAMOND = 3] = "DIAMOND", TT
      }({}),
      WT = function(TT) {
        return TT[TT.YELLOW = 0] = "YELLOW", TT[TT.WHITE = 1] = "WHITE", TT[TT.RED = 2] = "RED", TT[TT.PURPLE = 3] = "PURPLE", TT[TT.PINK = 4] = "PINK", TT[TT.ORANGE = 5] = "ORANGE", TT[TT.MAGENTA = 6] = "MAGENTA", TT[TT.LIME = 7] = "LIME", TT[TT.LIGHT_GRAY = 8] = "LIGHT_GRAY", TT[TT.LIGHT_BLUE = 9] = "LIGHT_BLUE", TT[TT.GREEN = 10] = "GREEN", TT[TT.GRAY = 11] = "GRAY", TT[TT.CYAN = 12] = "CYAN", TT[TT.BROWN = 13] = "BROWN", TT[TT.BLUE = 14] = "BLUE", TT[TT.BLACK = 15] = "BLACK", TT
      }({}),
      XT = function(TT) {
        return TT[TT.ROTATION_1 = 0] = "ROTATION_1", TT[TT.ROTATION_2 = 1] = "ROTATION_2", TT[TT.ROTATION_3 = 2] = "ROTATION_3", TT[TT.ROTATION_4 = 3] = "ROTATION_4", TT
      }({}),
      BT = function(TT) {
        return TT[TT.KART = 0] = "KART", TT[TT.OFF_ROADER = 1] = "OFF_ROADER", TT[TT.CAR = 2] = "CAR", TT[TT.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", TT[TT.ARMORED_CAR = 4] = "ARMORED_CAR", TT[TT.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", TT[TT.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", TT[TT.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", TT
      }({});
    iT.DEFAULT, iT.BOAT, zT.SPEED, iT.GLIDER, kT.DIAMOND, iT.BALLOON, WT.BLACK, iT.SLEEPING, XT.ROTATION_4, iT.RIDING_MOB, iT.CAR, BT.MOONSTONE_MINING_DRILL, iT.HOVERCRAFT;
    let FT = function(TT) {
      return TT[TT.NORMAL = 0] = "NORMAL", TT[TT.GLIDING = 1] = "GLIDING", TT[TT.FLOATING = 2] = "FLOATING", TT
    }({})
  },
  8715: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);