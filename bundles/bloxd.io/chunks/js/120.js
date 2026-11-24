export const id = 120;
export const ids = [120];
export const modules = {
  36640: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => jS,
      c: () => wS
    });
    gS(34204);
    var tS = gS(64),
      bS = gS(1522),
      XS = gS(2060),
      xS = gS(2100),
      NS = gS(24),
      qS = gS(2537),
      uS = gS(36647),
      IS = gS(36650),
      fS = gS(34185),
      kS = gS(34196),
      aS = gS(34217),
      KS = gS(1181);
    const jS = (0, tS.memo)((function() {
      var SS;
      const {
        isTouchScreen: HS,
        clientEscMenuOptions: gS,
        scriptedCameraFacing: XS,
        crosshairShownOverride: jS,
        crosshairGameView: CS
      } = (0, NS.m)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), nS = (0, qS.i)("gunshotOrigin"), PS = (0, tS.useRef)(null), QS = (0, tS.useRef)(!1), [DS, hS] = (0, tS.useState)(GS);
      (0, bS.g)("cameraZoomSet", hS), (0, tS.useEffect)((() => {
        hS(GS())
      }), []);
      const ZS = (0, xS.h)("heldItemAim"),
        OS = ZS.gun,
        dS = (0, aS.f)(),
        cS = (0, tS.useRef)(dS);
      cS.current = dS;
      const [vS, ES] = (0, tS.useState)(!1);
      (0, tS.useEffect)((() => (0, IS.f)("crosshairAccuracy", wS)), []), (0, bS.g)("mouseState", (SS => {
        let {
          isDown: HS
        } = SS;
        QS.current = HS, PS.current && (PS.current.style.transform = (0, kS.h)(HS, cS.current.growOnClick)), "shapes" === cS.current.style && ES(HS)
      }));
      const LS = (0, fS.f)(HS, gS.touchActionButtons);
      return (null !== (SS = (0, uS.d)(CS, jS)) && void 0 !== SS ? SS : (0, uS.g)(ZS, DS > 1, LS, nS)) ? "movement" === XS || "cursor" === XS ? null : (0, KS.jsxs)(KS.Fragment, {
        children: [OS && (0, KS.jsx)(JS, {
          custom: dS.forGuns && "shapes" === dS.style ? dS : null,
          touch: HS
        }), !OS && (0, KS.jsx)(kS.e, {
          settings: dS,
          touch: HS,
          pressRef: PS,
          pressed: "shapes" === dS.style ? vS : QS.current
        })]
      }) : null
    }));

    function GS() {
      return XS.gameBridge.lookup("cameraZoom", null)
    }
    const CS = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      nS = {
        current: null
      },
      PS = {
        current: null
      };
    let QS = 0,
      DS = 0;

    function wS(SS) {
      DS = SS, CS[0].current || nS.current || PS.current ? ZS(SS) : QS = SS
    }

    function hS(SS) {
      return ((0, uS.e)(SS) - (0, uS.e)(0)) * window.innerHeight / 100
    }

    function ZS(SS) {
      var HS;
      if (null === (HS = PS.current) || void 0 === HS || HS.call(PS, hS(SS)), CS[0].current) {
        const HS = `${(0,uS.e)(SS)}vh`;
        CS[0].current.style.transform = `translateX(calc(0px - ${HS}))`, CS[1].current.style.transform = `translateX(calc(0px + ${HS}))`, CS[2].current.style.transform = `translateY(calc(0px - ${HS}))`, CS[3].current.style.transform = `translateY(calc(0px + ${HS}))`
      }
      nS.current && (nS.current.style.filter = `blur(${Math.round(SS/10)}px)`)
    }

    function JS(SS) {
      let {
        custom: HS,
        touch: gS
      } = SS;
      const XS = (0, bS.i)("aimingOverlay", "none"),
        xS = "1.2vh",
        NS = "0.3vh";
      (0, tS.useEffect)((() => {
        QS && ZS(QS)
      }), []);
      const qS = (0, tS.useRef)(null !== HS);
      return (0, tS.useLayoutEffect)((() => {
        var SS;
        HS ? null === (SS = PS.current) || void 0 === SS || SS.call(PS, hS(DS)) : qS.current && ZS(DS);
        qS.current = null !== HS
      }), [HS]), (0, KS.jsxs)(KS.Fragment, {
        children: ["sniper" === XS && (0, KS.jsxs)("div", {
          ref: nS,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, KS.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, KS.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, KS.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, KS.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, KS.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === XS ? 0 : 1
          },
          children: [HS && (0, KS.jsx)(kS.e, {
            settings: HS,
            touch: gS,
            spreadRef: PS
          }), !HS && (0, KS.jsxs)(KS.Fragment, {
            children: [(0, KS.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: xS,
                height: NS,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: CS[0]
            }), (0, KS.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: xS,
                height: NS,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: CS[1]
            }), (0, KS.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: NS,
                height: xS,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: CS[2]
            }), (0, KS.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: NS,
                height: xS,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: CS[3]
            })]
          })]
        })]
      })
    }
  },
  34196: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => jS,
      h: () => KS
    });
    gS(34204);
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(64),
      xS = gS(34189);

    function NS(SS, HS) {
      return Math.max(1, Math.round(SS * HS))
    }

    function qS(SS, HS) {
      const gS = HS * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        tS = function(SS, HS) {
          if (SS.lines) return NS(SS.lineThickness, HS) % 2;
          if (SS.dot) return NS(SS.dotSize, HS) % 2;
          return uS(SS, HS) % 2
        }(SS, HS),
        bS = IS(SS.lineThickness * gS, tS),
        XS = NS(SS.lineLength, gS),
        xS = Math.round(SS.gap * gS),
        qS = SS.outline > 0 ? NS(SS.outline, gS) : 0,
        kS = [];
      if (SS.lines && (kS.push({
          x: bS + xS,
          y: 0,
          w: XS,
          h: bS,
          arm: "right"
        }), kS.push({
          x: -xS - XS,
          y: 0,
          w: XS,
          h: bS,
          arm: "left"
        }), kS.push({
          x: 0,
          y: bS + xS,
          w: bS,
          h: XS,
          arm: "down"
        }), SS.tStyle || kS.push({
          x: 0,
          y: -xS - XS,
          w: bS,
          h: XS,
          arm: "up"
        }), 0 === xS && kS.push({
          x: 0,
          y: 0,
          w: bS,
          h: bS
        })), SS.dot) {
        const HS = IS(SS.dotSize * gS, tS),
          XS = SS.lines && 0 === xS && SS.dotSize > SS.lineThickness ? Math.max(HS, bS + 2) : HS,
          NS = (bS - XS) / 2;
        kS.push({
          x: NS,
          y: NS,
          w: XS,
          h: XS
        })
      }
      const aS = kS.map((SS => ({
        ...SS,
        x: SS.x - qS,
        y: SS.y - qS,
        w: SS.w + 2 * qS,
        h: SS.h + 2 * qS
      })));
      let KS = null,
        jS = null;
      if (SS.circle) {
        const HS = NS(SS.circleThickness, gS),
          XS = function(SS, HS) {
            return SS + (SS % 2 === HS ? 0 : 1)
          }(uS(SS, gS), tS),
          xS = (bS - XS) / 2;
        KS = fS(xS, XS, HS), qS > 0 && (jS = fS(xS - qS, XS + 2 * qS, HS + 2 * qS))
      }
      return {
        cell: bS,
        fills: kS,
        outlines: qS > 0 ? aS : [],
        ring: KS,
        ringOutline: jS
      }
    }

    function uS(SS, HS) {
      return Math.round(SS.circleRadius * HS * 2 + NS(SS.circleThickness, HS))
    }

    function IS(SS, HS) {
      return Math.max(2 - HS, 2 * Math.round((SS - HS) / 2) + HS)
    }

    function fS(SS, HS, gS) {
      const tS = 2 * gS >= HS - 1;
      return {
        x: SS,
        y: SS,
        size: HS,
        border: Math.min(gS, Math.floor(HS / 2)),
        filled: tS
      }
    }
    var kS = gS(1181);
    const aS = 1.4;

    function KS(SS, HS) {
      return SS && HS ? `scale(${aS})` : "scale(1)"
    }

    function jS(SS) {
      return "classic" === SS.settings.style ? (0, kS.jsx)(nS, {
        ...SS
      }) : (0, kS.jsx)(JS, {
        ...SS
      })
    }
    const GS = .125;

    function CS(SS, HS) {
      const gS = {};
      if (SS.color !== xS.d.color && (gS.color = (0, xS.i)(SS.color)), SS.opacity !== xS.d.opacity && (gS.opacity = SS.opacity / 100), SS.outline !== xS.d.outline || SS.outlineColor !== xS.d.outlineColor) {
        const HS = SS.outline,
          tS = (0, xS.i)(SS.outlineColor);
        gS.textShadow = HS > 0 ? `-${HS}px 0 ${tS}, 0 ${HS}px ${tS}, ${HS}px 0 ${tS}, 0 -${HS}px ${tS}` : "none"
      }
      if (SS.size !== xS.d.size) {
        const tS = SS.size / 100;
        gS.fontSize = HS ? `calc(max(1.3rem, 18px) * ${tS})` : `calc(1.3rem * ${tS})`, gS.marginTop = `-${GS}em`, gS.transformOrigin = `50% calc(50% + ${GS}em)`
      }
      return gS
    }

    function nS(SS) {
      let {
        settings: HS,
        touch: gS,
        inPreview: tS,
        inEditor: XS,
        pressed: xS = !1,
        pressRef: NS
      } = SS;
      return (0, kS.jsx)("div", {
        className: bS()("Crosshair", {
          Touch: gS,
          CrosshairInPreview: tS,
          CrosshairInEditor: XS || tS
        }),
        ref: NS,
        style: {
          transform: KS(xS, HS.growOnClick),
          ...CS(HS, gS)
        },
        children: "+"
      })
    }

    function PS(SS, HS) {
      return SS / HS + "px"
    }

    function QS(SS, HS, gS, tS) {
      return {
        ...hS(SS, HS, gS),
        width: PS(SS.w, gS),
        height: PS(SS.h, gS),
        background: tS
      }
    }

    function DS(SS, HS, gS) {
      return {
        left: PS(SS.x, HS),
        top: PS(SS.y, HS),
        width: PS(SS.size, HS),
        height: PS(SS.size, HS),
        borderWidth: PS(SS.border, HS),
        borderColor: gS,
        background: SS.filled ? gS : void 0
      }
    }
    const wS = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function hS(SS, HS, gS) {
      const [tS, bS] = SS.arm ? wS[SS.arm] : [0, 0], XS = Math.round(HS * gS);
      return {
        left: PS(SS.x + tS * XS, gS),
        top: PS(SS.y + bS * XS, gS)
      }
    }

    function ZS(SS) {
      return SS.arm ? {
        "data-arm": SS.arm,
        "data-x": SS.x,
        "data-y": SS.y
      } : {}
    }

    function JS(SS) {
      let {
        settings: HS,
        inPreview: gS,
        inEditor: tS,
        pressed: NS = !1,
        spread: uS,
        spreadRef: IS
      } = SS;
      const fS = (0, XS.useRef)(null),
        {
          box: KS,
          dpr: jS
        } = function(SS) {
          const [HS, gS] = (0, XS.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, XS.useLayoutEffect)((() => {
            const HS = SS.current;
            if (!HS) return;
            const tS = () => {
              const SS = HS.getBoundingClientRect(),
                tS = window.devicePixelRatio || 1;
              gS((HS => HS.dpr === tS && HS.box.left === SS.left && HS.box.top === SS.top && HS.box.width === SS.width && HS.box.height === SS.height ? HS : {
                box: {
                  left: SS.left,
                  top: SS.top,
                  width: SS.width,
                  height: SS.height
                },
                dpr: tS
              }))
            };
            tS();
            const bS = new ResizeObserver(tS);
            return bS.observe(HS), window.addEventListener("resize", tS), window.addEventListener("scroll", tS, !0), () => {
              bS.disconnect(), window.removeEventListener("resize", tS), window.removeEventListener("scroll", tS, !0)
            }
          }), [SS]), HS
        }(fS),
        GS = (0, XS.useRef)(jS);
      GS.current = jS;
      const CS = qS(HS, jS, NS && HS.growOnClick ? aS : 1),
        nS = function(SS, HS, gS) {
          const tS = Math.round((SS.left + SS.width / 2) * gS - HS / 2),
            bS = Math.round((SS.top + SS.height / 2) * gS - HS / 2);
          return {
            x: tS / gS - SS.left,
            y: bS / gS - SS.top
          }
        }(KS, CS.cell, jS),
        PS = (0, xS.i)(HS.color),
        wS = (0, xS.i)(HS.outlineColor),
        JS = (0, XS.useRef)(0);
      (0, XS.useLayoutEffect)((() => {
        if (IS) return IS.current = SS => {
          var HS;
          JS.current = SS, null === (HS = fS.current) || void 0 === HS || HS.querySelectorAll("[data-arm]").forEach((HS => {
            Object.assign(HS.style, hS(function(SS) {
              return {
                x: Number(SS.dataset.x),
                y: Number(SS.dataset.y),
                arm: SS.dataset.arm
              }
            }(HS), SS, GS.current))
          }))
        }, () => {
          IS.current = null
        }
      }), [IS]);
      const OS = null !== uS && void 0 !== uS ? uS : JS.current;
      return (0, kS.jsx)("div", {
        ref: fS,
        className: bS()("CrosshairShapes", {
          CrosshairInPreview: gS,
          CrosshairInEditor: tS || gS,
          CrosshairSpreads: void 0 !== IS
        }),
        children: (0, kS.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: nS.x,
            top: nS.y,
            opacity: HS.opacity / 100
          },
          children: (0, kS.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [CS.ringOutline && (0, kS.jsx)("div", {
              className: "CrosshairRing",
              style: DS(CS.ringOutline, jS, wS)
            }), CS.outlines.map(((SS, HS) => (0, kS.jsx)("div", {
              className: "CrosshairPart",
              ...ZS(SS),
              style: QS(SS, OS, jS, wS)
            }, `o${HS}`))), CS.ring && (0, kS.jsx)("div", {
              className: "CrosshairRing",
              style: DS(CS.ring, jS, PS)
            }), CS.fills.map(((SS, HS) => (0, kS.jsx)("div", {
              className: "CrosshairPart",
              ...ZS(SS),
              style: QS(SS, OS, jS, PS)
            }, `f${HS}`)))]
          })
        })
      })
    }
  },
  34212: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => IS,
      g: () => GS,
      i: () => jS
    });
    var tS = gS(34189);
    const bS = "XH1-",
      XS = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      xS = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      NS = ["color", "outlineColor"],
      qS = 1 + 3 * NS.length + xS.length + 1,
      uS = Math.ceil(8 * qS / Math.log2(62)),
      IS = bS.length + uS;

    function fS(SS) {
      let HS = 90;
      for (const gS of SS) HS = 31 * HS + gS & 255;
      return HS
    }
    const kS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      aS = BigInt(kS.length);

    function KS(SS, HS) {
      let gS = 0n;
      for (const bS of SS) {
        const SS = kS.indexOf(bS);
        if (SS < 0) return null;
        gS = gS * aS + BigInt(SS)
      }
      if (gS >> BigInt(8 * HS) !== 0n) return null;
      const tS = [];
      for (let bS = 0; bS < HS; bS++) tS.unshift(Number(0xffn & gS)), gS >>= 8n;
      return tS
    }

    function jS(SS) {
      let HS = "shapes" === SS.style ? 1 : 0;
      XS.forEach(((gS, tS) => {
        SS[gS] && (HS |= 1 << tS + 1)
      }));
      const gS = [HS];
      for (const bS of NS) {
        const HS = (0, tS.e)(bS, SS[bS]);
        gS.push(HS >> 16 & 255, HS >> 8 & 255, 255 & HS)
      }
      for (const bS of xS) {
        const {
          min: HS,
          step: XS
        } = tS.c[bS];
        gS.push(Math.round(((0, tS.e)(bS, SS[bS]) - HS) / XS))
      }
      return gS.push(fS(gS)), bS + function(SS, HS) {
        let gS = 0n;
        for (const bS of SS) gS = gS << 8n | BigInt(bS);
        let tS = "";
        for (let bS = 0; bS < HS; bS++) tS = kS[Number(gS % aS)] + tS, gS /= aS;
        return tS
      }(gS, uS)
    }

    function GS(SS) {
      for (const HS of SS.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${uS}})`, "gi"))) {
        const SS = CS(KS(HS[1], qS));
        if (SS) return SS
      }
      return null
    }

    function CS(SS) {
      if (!SS || SS.length !== qS || fS(SS.slice(0, -1)) !== SS[SS.length - 1]) return null;
      const HS = SS[0],
        gS = {
          ...tS.d,
          style: 1 & HS ? "shapes" : "classic"
        };
      XS.forEach(((SS, tS) => {
        gS[SS] = 0 !== (HS & 1 << tS + 1)
      }));
      let bS = 1;
      for (const tS of NS) gS[tS] = SS[bS] << 16 | SS[bS + 1] << 8 | SS[bS + 2], bS += 3;
      for (const XS of xS) {
        const {
          min: HS,
          step: xS
        } = tS.c[XS];
        gS[XS] = (0, tS.e)(XS, HS + SS[bS] * xS), bS++
      }
      return gS
    }
  },
  34189: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      d: () => bS,
      e: () => XS,
      i: () => uS,
      l: () => qS,
      n: () => IS,
      q: () => NS,
      r: () => xS
    });
    const tS = {
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
      bS = Object.freeze({
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

    function XS(SS, HS) {
      var gS;
      const {
        min: XS,
        max: xS,
        step: NS
      } = tS[SS];
      if (!Number.isFinite(HS)) return bS[SS];
      const qS = (null !== (gS = String(NS).split(".")[1]) && void 0 !== gS ? gS : "").length,
        uS = Number((Math.round(HS / NS) * NS).toFixed(qS));
      return Math.min(xS, Math.max(XS, uS))
    }

    function xS(SS, HS, gS) {
      const tS = "number" === typeof gS ? XS(HS, gS) : gS;
      return {
        ...SS,
        [HS]: tS
      }
    }

    function NS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(bS).every((tS => gS.includes(tS) || SS[tS] === HS[tS]))
    }

    function qS(SS) {
      return NS(SS, bS)
    }

    function uS(SS) {
      return `#${SS.toString(16).padStart(6,"0")}`
    }

    function IS(SS) {
      const HS = /^#?([0-9a-f]{6})$/i.exec(SS.trim());
      return HS ? parseInt(HS[1], 16) : null
    }
  },
  34217: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => fS,
      f: () => kS
    });
    var tS = gS(64),
      bS = gS(45),
      XS = gS(34212),
      xS = gS(34189);
    const NS = "crosshairCode";
    let qS = null;
    const uS = new Set;

    function IS() {
      if (null === qS) {
        var SS;
        const HS = bS.g.getItem(NS);
        qS = null !== (SS = "string" === typeof HS ? (0, XS.g)(HS) : null) && void 0 !== SS ? SS : xS.d
      }
      return qS
    }

    function fS(SS) {
      qS = SS, (0, xS.l)(SS) ? bS.g.removeItem(NS) : bS.g.setItem(NS, (0, XS.i)(SS));
      for (const HS of uS) HS()
    }

    function kS() {
      const [SS, HS] = (0, tS.useState)(IS);
      return (0, tS.useEffect)((() => {
        const SS = () => {
          HS(IS())
        };
        return SS(), gS = SS, uS.add(gS), () => {
          uS.delete(gS)
        };
        var gS
      }), []), SS
    }
  },
  36785: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      f: () => qS,
      g: () => xS
    });
    var tS = gS(680),
      bS = gS(2910);

    function XS(SS) {
      return SS === (0, bS.e)().OSS ? (0, bS.e)().HA : SS
    }

    function xS(SS) {
      return !(0, tS.K)(SS) && XS(SS) === (0, bS.e)().HA
    }
    const NS = "gravity";

    function qS() {
      return (0, bS.e)().physics[NS][1]
    }
  },
  36771: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => hS
    });
    var tS = gS(36773),
      bS = gS(198),
      XS = gS(5005),
      xS = gS(36780),
      NS = gS(36448),
      qS = gS(36822),
      uS = gS(36785),
      IS = gS(402),
      fS = gS.n(IS),
      kS = gS(1286),
      aS = gS(2910),
      KS = gS(36820),
      jS = gS(31),
      GS = gS(24),
      CS = gS(36793),
      nS = gS(36801),
      PS = gS(36808);
    const QS = new Set(["note"]);
    const DS = {
      stop: () => DS,
      fade: () => DS,
      rate: () => DS,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => DS,
      setPannerAttr: () => DS,
      setPosition: () => DS
    };
    class wS {
      constructor(SS) {
        let HS, {
          src: gS,
          volumeScalar: bS,
          isSoundSprite: xS
        } = SS;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, xS ? (HS = (0, tS.i)(gS), this._spriteTrackSrc = HS) : HS = {
          src: kS.clientSideServerUrls.staticUrl + gS
        }, this._volumeMultiplier = new qS.h, this._volumeMultiplier.setMultiplierType("persistentScalar", bS), this._howl = (0, NS.countDecodesAs)(new XS.Howl({
          ...HS,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let SS, HS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          gS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (HS) {
          var tS;
          if (null === (tS = this._spriteTrackSrc) || void 0 === tS || !tS.sprite[HS]) throw new Error("No such sprite in your spritetrack");
          SS = this._howl.play(HS)
        } else SS = this._howl.play();
        gS && this._howl.loop(!0, SS);
        let bS = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), SS);
        const XS = {
          stop: () => {
            var HS;
            return null === (HS = this.liveHowl()) || void 0 === HS || HS.stop(SS), XS
          },
          fade: (HS, gS, tS) => {
            var bS;
            return null === (bS = this.liveHowl()) || void 0 === bS || bS.fade(HS, gS, tS, SS), XS
          },
          rate: HS => {
            var gS;
            return null === (gS = this.liveHowl()) || void 0 === gS || gS.rate(HS, SS), XS
          },
          stopsAtOnce: () => this._howl.playing(SS) && !this._howl._playLock,
          isAlive: () => {
            const HS = this._howl._soundById(SS);
            return !this._loadFailed && !!HS && !HS._ended
          },
          getDurationMs: () => this._howl._soundById(SS) ? 1e3 * this._howl.duration(SS) / this._howl.rate(SS) : 0,
          getVolume: () => bS * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => bS,
          setRelativeVolume: HS => {
            var gS;
            if (HS > 1) throw new Error("Volume should be <= 1");
            return bS = GS.b.get("soundOnFromAd") ? HS : 0, null === (gS = this.liveHowl()) || void 0 === gS || gS.volume(Math.min(1, bS * this._volumeMultiplier.getTotalMultipliedVal()), SS), XS
          },
          setPannerAttr: HS => {
            let {
              coneInnerAngle: gS,
              coneOuterAngle: tS = 360,
              coneOuterGain: bS,
              distanceModel: xS,
              maxDistance: NS,
              panningModel: qS,
              refDistance: uS,
              rolloffFactor: IS
            } = HS;
            return this._setPannerAttr({
              id: SS,
              coneInnerAngle: gS,
              coneOuterAngle: tS,
              coneOuterGain: bS,
              distanceModel: xS,
              maxDistance: NS,
              panningModel: qS,
              refDistance: uS,
              rolloffFactor: IS
            }), XS
          },
          setPosition: HS => {
            var gS;
            return null === (gS = this.liveHowl()) || void 0 === gS || gS.pos(HS[2], HS[1], HS[0], SS), XS
          }
        };
        return XS
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, xS.b)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(SS) {
        this._volumeMultiplier.setMultiplierType("globalVolume", SS), this._howl.volume(SS)
      }
      _setPannerAttr(SS) {
        let {
          id: HS,
          coneInnerAngle: gS = 360,
          coneOuterAngle: tS = 360,
          coneOuterGain: bS = 0,
          distanceModel: XS = "inverse",
          maxDistance: xS = 1e3,
          panningModel: NS = "HRTF",
          refDistance: qS = KS.f,
          rolloffFactor: uS = 1
        } = SS;
        const IS = this.liveHowl();
        if (null === IS) return;
        IS.pannerAttr({
          coneOuterAngle: tS
        }, HS);
        const fS = {
          coneInnerAngle: gS,
          coneOuterAngle: tS,
          coneOuterGain: bS,
          distanceModel: XS,
          maxDistance: xS,
          panningModel: NS,
          refDistance: qS,
          rolloffFactor: uS
        };
        IS.pannerAttr(fS, HS)
      }
    }
    const hS = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new CS.b, jS.k.subscribe("appManagerUpdated|soundVolume", (SS => {
          const HS = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const gS of HS) gS.setGlobalVolume(SS)
        }))
      }
      play(SS, HS) {
        var gS;
        let XS, xS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (gS = (0, aS.e)()) || void 0 === gS ? void 0 : gS.HA,
          NS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : KS.e,
          qS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : KS.f,
          IS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var kS;
        (0, aS.e)() ? XS = !!Array.isArray(xS) || (0, uS.e)(xS) !== (null === (kS = (0, aS.e)()) || void 0 === kS ? void 0 : kS.HA): XS = !1;
        const jS = (0, tS.l)(SS),
          GS = this.loadSheet(XS ? this.spatialSheets : this.stereoSheets, jS);
        if (!XS) {
          const gS = GS.play(SS, IS);
          return gS.setRelativeVolume(HS), gS
        }
        const nS = (0, aS.e)(),
          PS = Array.isArray(xS) ? xS : nS.FQ.lC(xS),
          wS = nS.FQ.lC(nS.HA);
        if (!PS || fS().sqrDist(PS, wS) > NS * NS) return DS;
        let hS;
        if (!IS) {
          if (!this.spatialVoices.admit({
              group: QS.has(jS) ? null : (0, CS.g)(SS),
              loudness: (0, CS.d)(HS, fS().BI(PS, wS), qS),
              startMs: performance.now(),
              getDurationMs: () => {
                var SS, HS;
                return null !== (SS = null === (HS = hS) || void 0 === HS ? void 0 : HS.getDurationMs()) && void 0 !== SS ? SS : 0
              },
              isAlive: () => {
                var SS, HS;
                return null !== (SS = null === (HS = hS) || void 0 === HS ? void 0 : HS.isAlive()) && void 0 !== SS && SS
              },
              canStop: () => {
                var SS, HS;
                return null !== (SS = null === (HS = hS) || void 0 === HS ? void 0 : HS.stopsAtOnce()) && void 0 !== SS && SS
              },
              stop: () => {
                var SS;
                null === (SS = hS) || void 0 === SS || SS.stop()
              }
            })) return DS
        }
        return hS = GS.play(SS, IS), hS.setRelativeVolume(HS), hS.setPannerAttr({
          refDistance: qS
        }), hS.setPosition([PS[0], PS[1] + bS.e.pG * bS.e.playerEyeToHeightRatio, PS[2]]), hS
      }
      preload(SS) {
        this.loadSheet(this.stereoSheets, (0, tS.l)(SS))
      }
      loadSheet(SS, HS) {
        let gS = SS[HS];
        return gS || ((0, PS.b)(HS), gS = new wS({
          src: HS,
          isSoundSprite: !0,
          volumeScalar: 1
        }), gS.setGlobalVolume(GS.b.get("soundVolume")), SS[HS] = gS), gS
      }
      freeSheetsAfterGame() {
        for (const SS of [this.stereoSheets, this.spatialSheets])
          for (const [HS, gS] of Object.entries(SS)) !nS.e.has(HS) && gS.loaded() && (gS.unloadOnceIdle(), delete SS[HS])
      }
    }
  },
  36871: (SS, HS, gS) => {
    function tS(SS, HS) {
      var gS, tS, bS, XS, xS, NS, qS, uS;
      return SS.name === HS.name && ((null === (gS = SS.attributes) || void 0 === gS || null === (tS = gS.customAttributes) || void 0 === tS ? void 0 : tS.stackKey) === (null === (bS = HS.attributes) || void 0 === bS || null === (XS = bS.customAttributes) || void 0 === XS ? void 0 : XS.stackKey) && (!0 !== (null === (xS = SS.attributes) || void 0 === xS || null === (NS = xS.customAttributes) || void 0 === NS ? void 0 : NS.unstackable) && !0 !== (null === (qS = HS.attributes) || void 0 === qS || null === (uS = qS.customAttributes) || void 0 === uS ? void 0 : uS.unstackable)))
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  36961: (SS, HS, gS) => {
    function tS(SS) {
      return SS.includes("Leaf Bed")
    }

    function bS(SS) {
      return / Bed(?: Head)?(?:\||$)/.test(SS) && !tS(SS)
    }

    function XS(SS) {
      return SS.includes(" Strongbed")
    }

    function xS(SS) {
      return tS(SS) || bS(SS) || XS(SS)
    }
    gS.d(HS, {
      e: () => xS,
      g: () => tS,
      k: () => XS,
      l: () => bS
    })
  },
  36959: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS
    });
    var tS = gS(36961),
      bS = gS(9361);
    const XS = [],
      xS = [],
      NS = [],
      qS = [];
    for (const IS of Object.keys(bS.o))(0, tS.g)(IS) ? XS.push(IS) : (0, tS.l)(IS) && xS.push(IS), (0, tS.k)(IS) && NS.push(IS), (IS.includes(" Bed Head") || IS.includes(" Strongbed Head")) && qS.push(IS);
    const uS = {
      leafBeds: XS,
      woolBeds: xS,
      strongBeds: NS,
      beds: [...XS, ...xS, ...NS],
      bedHeads: qS,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6672: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      c: () => bS,
      g: () => qS,
      i: () => XS,
      l: () => uS,
      o: () => tS,
      r: () => NS
    });
    let tS = function(SS) {
        return SS[SS.DEFAULT = 0] = "DEFAULT", SS[SS.BOAT = 1] = "BOAT", SS[SS.GLIDER = 2] = "GLIDER", SS[SS.BALLOON = 3] = "BALLOON", SS[SS.SLEEPING = 4] = "SLEEPING", SS[SS.RIDING_MOB = 5] = "RIDING_MOB", SS[SS.CAR = 6] = "CAR", SS[SS.HOVERCRAFT = 7] = "HOVERCRAFT", SS
      }({}),
      bS = function(SS) {
        return SS[SS.WOOD = 0] = "WOOD", SS[SS.OBSIDIAN = 1] = "OBSIDIAN", SS[SS.SPEED = 2] = "SPEED", SS
      }({}),
      XS = function(SS) {
        return SS[SS.WOOD = 0] = "WOOD", SS[SS.IRON = 1] = "IRON", SS[SS.GOLD = 2] = "GOLD", SS[SS.DIAMOND = 3] = "DIAMOND", SS
      }({}),
      xS = function(SS) {
        return SS[SS.YELLOW = 0] = "YELLOW", SS[SS.WHITE = 1] = "WHITE", SS[SS.RED = 2] = "RED", SS[SS.PURPLE = 3] = "PURPLE", SS[SS.PINK = 4] = "PINK", SS[SS.ORANGE = 5] = "ORANGE", SS[SS.MAGENTA = 6] = "MAGENTA", SS[SS.LIME = 7] = "LIME", SS[SS.LIGHT_GRAY = 8] = "LIGHT_GRAY", SS[SS.LIGHT_BLUE = 9] = "LIGHT_BLUE", SS[SS.GREEN = 10] = "GREEN", SS[SS.GRAY = 11] = "GRAY", SS[SS.CYAN = 12] = "CYAN", SS[SS.BROWN = 13] = "BROWN", SS[SS.BLUE = 14] = "BLUE", SS[SS.BLACK = 15] = "BLACK", SS
      }({}),
      NS = function(SS) {
        return SS[SS.ROTATION_1 = 0] = "ROTATION_1", SS[SS.ROTATION_2 = 1] = "ROTATION_2", SS[SS.ROTATION_3 = 2] = "ROTATION_3", SS[SS.ROTATION_4 = 3] = "ROTATION_4", SS
      }({}),
      qS = function(SS) {
        return SS[SS.KART = 0] = "KART", SS[SS.OFF_ROADER = 1] = "OFF_ROADER", SS[SS.CAR = 2] = "CAR", SS[SS.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", SS[SS.ARMORED_CAR = 4] = "ARMORED_CAR", SS[SS.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", SS[SS.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", SS[SS.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", SS
      }({});
    tS.DEFAULT, tS.BOAT, bS.SPEED, tS.GLIDER, XS.DIAMOND, tS.BALLOON, xS.BLACK, tS.SLEEPING, NS.ROTATION_4, tS.RIDING_MOB, tS.CAR, qS.MOONSTONE_MINING_DRILL, tS.HOVERCRAFT;
    let uS = function(SS) {
      return SS[SS.NORMAL = 0] = "NORMAL", SS[SS.GLIDING = 1] = "GLIDING", SS[SS.FLOATING = 2] = "FLOATING", SS
    }({})
  },
  34204: () => {}
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);