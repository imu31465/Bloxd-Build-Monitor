export const id = 113;
export const ids = [113];
export const modules = {
  36434: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => tT,
      h: () => FT
    });
    cT(9332);
    var lT = cT(71),
      MT = cT(1461),
      KT = cT(1953),
      OT = cT(1996),
      yT = cT(31),
      fT = cT(2462),
      xT = cT(36440),
      IT = cT(36445),
      AT = cT(9298),
      CT = cT(9329),
      jT = cT(9346),
      vT = cT(1099);
    const tT = (0, lT.memo)((function() {
      var TT;
      const {
        isTouchScreen: kT,
        clientEscMenuOptions: cT,
        scriptedCameraFacing: KT,
        crosshairShownOverride: tT,
        crosshairGameView: NT
      } = (0, yT.n)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), QT = (0, fT.f)("gunshotOrigin"), ST = (0, lT.useRef)(null), DT = (0, lT.useRef)(!1), [aT, rT] = (0, lT.useState)(hT);
      (0, MT.g)("cameraZoomSet", rT), (0, lT.useEffect)((() => {
        rT(hT())
      }), []);
      const PT = (0, OT.h)("heldItemAim"),
        mT = PT.gun,
        bT = (0, jT.e)(),
        zT = (0, lT.useRef)(bT);
      zT.current = bT;
      const [JT, oT] = (0, lT.useState)(!1);
      (0, lT.useEffect)((() => (0, IT.f)("crosshairAccuracy", FT)), []), (0, MT.g)("mouseState", (TT => {
        let {
          isDown: kT
        } = TT;
        DT.current = kT, ST.current && (ST.current.style.transform = (0, CT.f)(kT, zT.current.growOnClick)), "shapes" === zT.current.style && oT(kT)
      }));
      const HT = (0, AT.c)(kT, cT.touchActionButtons);
      return (null !== (TT = (0, xT.d)(NT, tT)) && void 0 !== TT ? TT : (0, xT.g)(PT, aT > 1, HT, QT)) ? "movement" === KT || "cursor" === KT ? null : (0, vT.jsxs)(vT.Fragment, {
        children: [mT && (0, vT.jsx)(wT, {
          custom: bT.forGuns && "shapes" === bT.style ? bT : null,
          touch: kT
        }), !mT && (0, vT.jsx)(CT.e, {
          settings: bT,
          touch: kT,
          pressRef: ST,
          pressed: "shapes" === bT.style ? JT : DT.current
        })]
      }) : null
    }));

    function hT() {
      return KT.gameBridge.lookup("cameraZoom", null)
    }
    const NT = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      QT = {
        current: null
      },
      ST = {
        current: null
      };
    let DT = 0,
      aT = 0;

    function FT(TT) {
      aT = TT, NT[0].current || QT.current || ST.current ? PT(TT) : DT = TT
    }

    function rT(TT) {
      return ((0, xT.f)(TT) - (0, xT.f)(0)) * window.innerHeight / 100
    }

    function PT(TT) {
      var kT;
      if (null === (kT = ST.current) || void 0 === kT || kT.call(ST, rT(TT)), NT[0].current) {
        const kT = `${(0,xT.f)(TT)}vh`;
        NT[0].current.style.transform = `translateX(calc(0px - ${kT}))`, NT[1].current.style.transform = `translateX(calc(0px + ${kT}))`, NT[2].current.style.transform = `translateY(calc(0px - ${kT}))`, NT[3].current.style.transform = `translateY(calc(0px + ${kT}))`
      }
      QT.current && (QT.current.style.filter = `blur(${Math.round(TT/10)}px)`)
    }

    function wT(TT) {
      let {
        custom: kT,
        touch: cT
      } = TT;
      const KT = (0, MT.i)("aimingOverlay", "none"),
        OT = "1.2vh",
        yT = "0.3vh";
      (0, lT.useEffect)((() => {
        DT && PT(DT)
      }), []);
      const fT = (0, lT.useRef)(null !== kT);
      return (0, lT.useLayoutEffect)((() => {
        var TT;
        kT ? null === (TT = ST.current) || void 0 === TT || TT.call(ST, rT(aT)) : fT.current && PT(aT);
        fT.current = null !== kT
      }), [kT]), (0, vT.jsxs)(vT.Fragment, {
        children: ["sniper" === KT && (0, vT.jsxs)("div", {
          ref: QT,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, vT.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, vT.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, vT.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, vT.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, vT.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === KT ? 0 : 1
          },
          children: [kT && (0, vT.jsx)(CT.e, {
            settings: kT,
            touch: cT,
            spreadRef: ST
          }), !kT && (0, vT.jsxs)(vT.Fragment, {
            children: [(0, vT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: OT,
                height: yT,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: NT[0]
            }), (0, vT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: OT,
                height: yT,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: NT[1]
            }), (0, vT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: yT,
                height: OT,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: NT[2]
            }), (0, vT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: yT,
                height: OT,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: NT[3]
            })]
          })]
        })]
      })
    }
  },
  9329: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => tT,
      f: () => vT
    });
    cT(9332);
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(71),
      OT = cT(9302);

    function yT(TT, kT) {
      return Math.max(1, Math.round(TT * kT))
    }

    function fT(TT, kT) {
      const cT = kT * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        lT = function(TT, kT) {
          if (TT.lines) return yT(TT.lineThickness, kT) % 2;
          if (TT.dot) return yT(TT.dotSize, kT) % 2;
          return xT(TT, kT) % 2
        }(TT, kT),
        MT = IT(TT.lineThickness * cT, lT),
        KT = yT(TT.lineLength, cT),
        OT = Math.round(TT.gap * cT),
        fT = TT.outline > 0 ? yT(TT.outline, cT) : 0,
        CT = [];
      if (TT.lines && (CT.push({
          x: MT + OT,
          y: 0,
          w: KT,
          h: MT,
          arm: "right"
        }), CT.push({
          x: -OT - KT,
          y: 0,
          w: KT,
          h: MT,
          arm: "left"
        }), CT.push({
          x: 0,
          y: MT + OT,
          w: MT,
          h: KT,
          arm: "down"
        }), TT.tStyle || CT.push({
          x: 0,
          y: -OT - KT,
          w: MT,
          h: KT,
          arm: "up"
        }), 0 === OT && CT.push({
          x: 0,
          y: 0,
          w: MT,
          h: MT
        })), TT.dot) {
        const kT = IT(TT.dotSize * cT, lT),
          KT = TT.lines && 0 === OT && TT.dotSize > TT.lineThickness ? Math.max(kT, MT + 2) : kT,
          yT = (MT - KT) / 2;
        CT.push({
          x: yT,
          y: yT,
          w: KT,
          h: KT
        })
      }
      const jT = CT.map((TT => ({
        ...TT,
        x: TT.x - fT,
        y: TT.y - fT,
        w: TT.w + 2 * fT,
        h: TT.h + 2 * fT
      })));
      let vT = null,
        tT = null;
      if (TT.circle) {
        const kT = yT(TT.circleThickness, cT),
          KT = function(TT, kT) {
            return TT + (TT % 2 === kT ? 0 : 1)
          }(xT(TT, cT), lT),
          OT = (MT - KT) / 2;
        vT = AT(OT, KT, kT), fT > 0 && (tT = AT(OT - fT, KT + 2 * fT, kT + 2 * fT))
      }
      return {
        cell: MT,
        fills: CT,
        outlines: fT > 0 ? jT : [],
        ring: vT,
        ringOutline: tT
      }
    }

    function xT(TT, kT) {
      return Math.round(TT.circleRadius * kT * 2 + yT(TT.circleThickness, kT))
    }

    function IT(TT, kT) {
      return Math.max(2 - kT, 2 * Math.round((TT - kT) / 2) + kT)
    }

    function AT(TT, kT, cT) {
      const lT = 2 * cT >= kT - 1;
      return {
        x: TT,
        y: TT,
        size: kT,
        border: Math.min(cT, Math.floor(kT / 2)),
        filled: lT
      }
    }
    var CT = cT(1099);
    const jT = 1.4;

    function vT(TT, kT) {
      return TT && kT ? `scale(${jT})` : "scale(1)"
    }

    function tT(TT) {
      return "classic" === TT.settings.style ? (0, CT.jsx)(QT, {
        ...TT
      }) : (0, CT.jsx)(wT, {
        ...TT
      })
    }
    const hT = .125;

    function NT(TT, kT) {
      const cT = {};
      if (TT.color !== OT.g.color && (cT.color = (0, OT.m)(TT.color)), TT.opacity !== OT.g.opacity && (cT.opacity = TT.opacity / 100), TT.outline !== OT.g.outline || TT.outlineColor !== OT.g.outlineColor) {
        const kT = TT.outline,
          lT = (0, OT.m)(TT.outlineColor);
        cT.textShadow = kT > 0 ? `-${kT}px 0 ${lT}, 0 ${kT}px ${lT}, ${kT}px 0 ${lT}, 0 -${kT}px ${lT}` : "none"
      }
      if (TT.size !== OT.g.size) {
        const lT = TT.size / 100;
        cT.fontSize = kT ? `calc(max(1.3rem, 18px) * ${lT})` : `calc(1.3rem * ${lT})`, cT.marginTop = `-${hT}em`, cT.transformOrigin = `50% calc(50% + ${hT}em)`
      }
      return cT
    }

    function QT(TT) {
      let {
        settings: kT,
        touch: cT,
        inPreview: lT,
        inEditor: KT,
        pressed: OT = !1,
        pressRef: yT
      } = TT;
      return (0, CT.jsx)("div", {
        className: MT()("Crosshair", {
          Touch: cT,
          CrosshairInPreview: lT,
          CrosshairInEditor: KT || lT
        }),
        ref: yT,
        style: {
          transform: vT(OT, kT.growOnClick),
          ...NT(kT, cT)
        },
        children: "+"
      })
    }

    function ST(TT, kT) {
      return TT / kT + "px"
    }

    function DT(TT, kT, cT, lT) {
      return {
        ...rT(TT, kT, cT),
        width: ST(TT.w, cT),
        height: ST(TT.h, cT),
        background: lT
      }
    }

    function aT(TT, kT, cT) {
      return {
        left: ST(TT.x, kT),
        top: ST(TT.y, kT),
        width: ST(TT.size, kT),
        height: ST(TT.size, kT),
        borderWidth: ST(TT.border, kT),
        borderColor: cT,
        background: TT.filled ? cT : void 0
      }
    }
    const FT = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function rT(TT, kT, cT) {
      const [lT, MT] = TT.arm ? FT[TT.arm] : [0, 0], KT = Math.round(kT * cT);
      return {
        left: ST(TT.x + lT * KT, cT),
        top: ST(TT.y + MT * KT, cT)
      }
    }

    function PT(TT) {
      return TT.arm ? {
        "data-arm": TT.arm,
        "data-x": TT.x,
        "data-y": TT.y
      } : {}
    }

    function wT(TT) {
      let {
        settings: kT,
        inPreview: cT,
        inEditor: lT,
        pressed: yT = !1,
        spread: xT,
        spreadRef: IT
      } = TT;
      const AT = (0, KT.useRef)(null),
        {
          box: vT,
          dpr: tT
        } = function(TT) {
          const [kT, cT] = (0, KT.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, KT.useLayoutEffect)((() => {
            const kT = TT.current;
            if (!kT) return;
            const lT = () => {
              const TT = kT.getBoundingClientRect(),
                lT = window.devicePixelRatio || 1;
              cT((kT => kT.dpr === lT && kT.box.left === TT.left && kT.box.top === TT.top && kT.box.width === TT.width && kT.box.height === TT.height ? kT : {
                box: {
                  left: TT.left,
                  top: TT.top,
                  width: TT.width,
                  height: TT.height
                },
                dpr: lT
              }))
            };
            lT();
            const MT = new ResizeObserver(lT);
            return MT.observe(kT), window.addEventListener("resize", lT), window.addEventListener("scroll", lT, !0), () => {
              MT.disconnect(), window.removeEventListener("resize", lT), window.removeEventListener("scroll", lT, !0)
            }
          }), [TT]), kT
        }(AT),
        hT = (0, KT.useRef)(tT);
      hT.current = tT;
      const NT = fT(kT, tT, yT && kT.growOnClick ? jT : 1),
        QT = function(TT, kT, cT) {
          const lT = Math.round((TT.left + TT.width / 2) * cT - kT / 2),
            MT = Math.round((TT.top + TT.height / 2) * cT - kT / 2);
          return {
            x: lT / cT - TT.left,
            y: MT / cT - TT.top
          }
        }(vT, NT.cell, tT),
        ST = (0, OT.m)(kT.color),
        FT = (0, OT.m)(kT.outlineColor),
        wT = (0, KT.useRef)(0);
      (0, KT.useLayoutEffect)((() => {
        if (IT) return IT.current = TT => {
          var kT;
          wT.current = TT, null === (kT = AT.current) || void 0 === kT || kT.querySelectorAll("[data-arm]").forEach((kT => {
            Object.assign(kT.style, rT(function(TT) {
              return {
                x: Number(TT.dataset.x),
                y: Number(TT.dataset.y),
                arm: TT.dataset.arm
              }
            }(kT), TT, hT.current))
          }))
        }, () => {
          IT.current = null
        }
      }), [IT]);
      const mT = null !== xT && void 0 !== xT ? xT : wT.current;
      return (0, CT.jsx)("div", {
        ref: AT,
        className: MT()("CrosshairShapes", {
          CrosshairInPreview: cT,
          CrosshairInEditor: lT || cT,
          CrosshairSpreads: void 0 !== IT
        }),
        children: (0, CT.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: QT.x,
            top: QT.y,
            opacity: kT.opacity / 100
          },
          children: (0, CT.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [NT.ringOutline && (0, CT.jsx)("div", {
              className: "CrosshairRing",
              style: aT(NT.ringOutline, tT, FT)
            }), NT.outlines.map(((TT, kT) => (0, CT.jsx)("div", {
              className: "CrosshairPart",
              ...PT(TT),
              style: DT(TT, mT, tT, FT)
            }, `o${kT}`))), NT.ring && (0, CT.jsx)("div", {
              className: "CrosshairRing",
              style: aT(NT.ring, tT, ST)
            }), NT.fills.map(((TT, kT) => (0, CT.jsx)("div", {
              className: "CrosshairPart",
              ...PT(TT),
              style: DT(TT, mT, tT, ST)
            }, `f${kT}`)))]
          })
        })
      })
    }
  },
  9337: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => IT,
      e: () => hT,
      i: () => tT
    });
    var lT = cT(9302);
    const MT = "XH1-",
      KT = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      OT = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      yT = ["color", "outlineColor"],
      fT = 1 + 3 * yT.length + OT.length + 1,
      xT = Math.ceil(8 * fT / Math.log2(62)),
      IT = MT.length + xT;

    function AT(TT) {
      let kT = 90;
      for (const cT of TT) kT = 31 * kT + cT & 255;
      return kT
    }
    const CT = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      jT = BigInt(CT.length);

    function vT(TT, kT) {
      let cT = 0n;
      for (const MT of TT) {
        const TT = CT.indexOf(MT);
        if (TT < 0) return null;
        cT = cT * jT + BigInt(TT)
      }
      if (cT >> BigInt(8 * kT) !== 0n) return null;
      const lT = [];
      for (let MT = 0; MT < kT; MT++) lT.unshift(Number(0xffn & cT)), cT >>= 8n;
      return lT
    }

    function tT(TT) {
      let kT = "shapes" === TT.style ? 1 : 0;
      KT.forEach(((cT, lT) => {
        TT[cT] && (kT |= 1 << lT + 1)
      }));
      const cT = [kT];
      for (const MT of yT) {
        const kT = (0, lT.k)(MT, TT[MT]);
        cT.push(kT >> 16 & 255, kT >> 8 & 255, 255 & kT)
      }
      for (const MT of OT) {
        const {
          min: kT,
          step: KT
        } = lT.c[MT];
        cT.push(Math.round(((0, lT.k)(MT, TT[MT]) - kT) / KT))
      }
      return cT.push(AT(cT)), MT + function(TT, kT) {
        let cT = 0n;
        for (const MT of TT) cT = cT << 8n | BigInt(MT);
        let lT = "";
        for (let MT = 0; MT < kT; MT++) lT = CT[Number(cT % jT)] + lT, cT /= jT;
        return lT
      }(cT, xT)
    }

    function hT(TT) {
      for (const kT of TT.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${xT}})`, "gi"))) {
        const TT = NT(vT(kT[1], fT));
        if (TT) return TT
      }
      return null
    }

    function NT(TT) {
      if (!TT || TT.length !== fT || AT(TT.slice(0, -1)) !== TT[TT.length - 1]) return null;
      const kT = TT[0],
        cT = {
          ...lT.g,
          style: 1 & kT ? "shapes" : "classic"
        };
      KT.forEach(((TT, lT) => {
        cT[TT] = 0 !== (kT & 1 << lT + 1)
      }));
      let MT = 1;
      for (const lT of yT) cT[lT] = TT[MT] << 16 | TT[MT + 1] << 8 | TT[MT + 2], MT += 3;
      for (const KT of OT) {
        const {
          min: kT,
          step: OT
        } = lT.c[KT];
        cT[KT] = (0, lT.k)(KT, kT + TT[MT] * OT), MT++
      }
      return cT
    }
  },
  9302: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT,
      g: () => MT,
      k: () => KT,
      m: () => xT,
      o: () => fT,
      r: () => IT,
      u: () => yT,
      x: () => OT
    });
    const lT = {
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
      MT = Object.freeze({
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

    function KT(TT, kT) {
      var cT;
      const {
        min: KT,
        max: OT,
        step: yT
      } = lT[TT];
      if (!Number.isFinite(kT)) return MT[TT];
      const fT = (null !== (cT = String(yT).split(".")[1]) && void 0 !== cT ? cT : "").length,
        xT = Number((Math.round(kT / yT) * yT).toFixed(fT));
      return Math.min(OT, Math.max(KT, xT))
    }

    function OT(TT, kT, cT) {
      const lT = "number" === typeof cT ? KT(kT, cT) : cT;
      return {
        ...TT,
        [kT]: lT
      }
    }

    function yT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(MT).every((lT => cT.includes(lT) || TT[lT] === kT[lT]))
    }

    function fT(TT) {
      return yT(TT, MT)
    }

    function xT(TT) {
      return `#${TT.toString(16).padStart(6,"0")}`
    }

    function IT(TT) {
      const kT = /^#?([0-9a-f]{6})$/i.exec(TT.trim());
      return kT ? parseInt(kT[1], 16) : null
    }
  },
  9346: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => AT,
      e: () => CT
    });
    var lT = cT(71),
      MT = cT(47),
      KT = cT(9337),
      OT = cT(9302);
    const yT = "crosshairCode";
    let fT = null;
    const xT = new Set;

    function IT() {
      if (null === fT) {
        var TT;
        const kT = MT.e.getItem(yT);
        fT = null !== (TT = "string" === typeof kT ? (0, KT.e)(kT) : null) && void 0 !== TT ? TT : OT.g
      }
      return fT
    }

    function AT(TT) {
      fT = TT, (0, OT.o)(TT) ? MT.e.removeItem(yT) : MT.e.setItem(yT, (0, KT.i)(TT));
      for (const kT of xT) kT()
    }

    function CT() {
      const [TT, kT] = (0, lT.useState)(IT);
      return (0, lT.useEffect)((() => {
        const TT = () => {
          kT(IT())
        };
        return TT(), cT = TT, xT.add(cT), () => {
          xT.delete(cT)
        };
        var cT
      }), []), TT
    }
  },
  36591: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      e: () => fT,
      h: () => OT
    });
    var lT = cT(617),
      MT = cT(2790);

    function KT(TT) {
      return TT === (0, MT.f)().W9 ? (0, MT.f)().jH : TT
    }

    function OT(TT) {
      return !(0, lT.R)(TT) && KT(TT) === (0, MT.f)().jH
    }
    const yT = "gravity";

    function fT() {
      return (0, MT.f)().physics[yT][1]
    }
  },
  36573: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => rT
    });
    var lT = cT(36580),
      MT = cT(218),
      KT = cT(4820),
      OT = cT(36584),
      yT = cT(36242),
      fT = cT(36619),
      xT = cT(36591),
      IT = cT(350),
      AT = cT.n(IT),
      CT = cT(1202),
      jT = cT(2790),
      vT = cT(36614),
      tT = cT(36),
      hT = cT(31),
      NT = cT(36593),
      QT = cT(36595),
      ST = cT(36602);
    const DT = new Set(["note"]);
    const aT = {
      stop: () => aT,
      fade: () => aT,
      rate: () => aT,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => aT,
      setPannerAttr: () => aT,
      setPosition: () => aT
    };
    class FT {
      constructor(TT) {
        let kT, {
          src: cT,
          volumeScalar: MT,
          isSoundSprite: OT
        } = TT;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, OT ? (kT = (0, lT.l)(cT), this._spriteTrackSrc = kT) : kT = {
          src: CT.clientSideServerUrls.staticUrl + cT
        }, this._volumeMultiplier = new fT.h, this._volumeMultiplier.setMultiplierType("persistentScalar", MT), this._howl = (0, yT.countDecodesAs)(new KT.Howl({
          ...kT,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let TT, kT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          cT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (kT) {
          var lT;
          if (null === (lT = this._spriteTrackSrc) || void 0 === lT || !lT.sprite[kT]) throw new Error("No such sprite in your spritetrack");
          TT = this._howl.play(kT)
        } else TT = this._howl.play();
        cT && this._howl.loop(!0, TT);
        let MT = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), TT);
        const KT = {
          stop: () => {
            var kT;
            return null === (kT = this.liveHowl()) || void 0 === kT || kT.stop(TT), KT
          },
          fade: (kT, cT, lT) => {
            var MT;
            return null === (MT = this.liveHowl()) || void 0 === MT || MT.fade(kT, cT, lT, TT), KT
          },
          rate: kT => {
            var cT;
            return null === (cT = this.liveHowl()) || void 0 === cT || cT.rate(kT, TT), KT
          },
          stopsAtOnce: () => this._howl.playing(TT) && !this._howl._playLock,
          isAlive: () => {
            const kT = this._howl._soundById(TT);
            return !this._loadFailed && !!kT && !kT._ended
          },
          getDurationMs: () => this._howl._soundById(TT) ? 1e3 * this._howl.duration(TT) / this._howl.rate(TT) : 0,
          getVolume: () => MT * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => MT,
          setRelativeVolume: kT => {
            var cT;
            if (kT > 1) throw new Error("Volume should be <= 1");
            return MT = hT.e.get("soundOnFromAd") ? kT : 0, null === (cT = this.liveHowl()) || void 0 === cT || cT.volume(Math.min(1, MT * this._volumeMultiplier.getTotalMultipliedVal()), TT), KT
          },
          setPannerAttr: kT => {
            let {
              coneInnerAngle: cT,
              coneOuterAngle: lT = 360,
              coneOuterGain: MT,
              distanceModel: OT,
              maxDistance: yT,
              panningModel: fT,
              refDistance: xT,
              rolloffFactor: IT
            } = kT;
            return this._setPannerAttr({
              id: TT,
              coneInnerAngle: cT,
              coneOuterAngle: lT,
              coneOuterGain: MT,
              distanceModel: OT,
              maxDistance: yT,
              panningModel: fT,
              refDistance: xT,
              rolloffFactor: IT
            }), KT
          },
          setPosition: kT => {
            var cT;
            return null === (cT = this.liveHowl()) || void 0 === cT || cT.pos(kT[2], kT[1], kT[0], TT), KT
          }
        };
        return KT
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, OT.c)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(TT) {
        this._volumeMultiplier.setMultiplierType("globalVolume", TT), this._howl.volume(TT)
      }
      _setPannerAttr(TT) {
        let {
          id: kT,
          coneInnerAngle: cT = 360,
          coneOuterAngle: lT = 360,
          coneOuterGain: MT = 0,
          distanceModel: KT = "inverse",
          maxDistance: OT = 1e3,
          panningModel: yT = "HRTF",
          refDistance: fT = vT.g,
          rolloffFactor: xT = 1
        } = TT;
        const IT = this.liveHowl();
        if (null === IT) return;
        IT.pannerAttr({
          coneOuterAngle: lT
        }, kT);
        const AT = {
          coneInnerAngle: cT,
          coneOuterAngle: lT,
          coneOuterGain: MT,
          distanceModel: KT,
          maxDistance: OT,
          panningModel: yT,
          refDistance: fT,
          rolloffFactor: xT
        };
        IT.pannerAttr(AT, kT)
      }
    }
    const rT = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new NT.c, tT.k.subscribe("appManagerUpdated|soundVolume", (TT => {
          const kT = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const cT of kT) cT.setGlobalVolume(TT)
        }))
      }
      play(TT, kT) {
        var cT;
        let KT, OT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (cT = (0, jT.f)()) || void 0 === cT ? void 0 : cT.jH,
          yT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vT.f,
          fT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : vT.g,
          IT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var CT;
        (0, jT.f)() ? KT = !!Array.isArray(OT) || (0, xT.b)(OT) !== (null === (CT = (0, jT.f)()) || void 0 === CT ? void 0 : CT.jH): KT = !1;
        const tT = (0, lT.m)(TT),
          hT = this.loadSheet(KT ? this.spatialSheets : this.stereoSheets, tT);
        if (!KT) {
          const cT = hT.play(TT, IT);
          return cT.setRelativeVolume(kT), cT
        }
        const QT = (0, jT.f)(),
          ST = Array.isArray(OT) ? OT : QT.oN.kN(OT),
          FT = QT.oN.kN(QT.jH);
        if (!ST || AT().sqrDist(ST, FT) > yT * yT) return aT;
        let rT;
        if (!IT) {
          if (!this.spatialVoices.admit({
              group: DT.has(tT) ? null : (0, NT.h)(TT),
              loudness: (0, NT.f)(kT, AT().JO(ST, FT), fT),
              startMs: performance.now(),
              getDurationMs: () => {
                var TT, kT;
                return null !== (TT = null === (kT = rT) || void 0 === kT ? void 0 : kT.getDurationMs()) && void 0 !== TT ? TT : 0
              },
              isAlive: () => {
                var TT, kT;
                return null !== (TT = null === (kT = rT) || void 0 === kT ? void 0 : kT.isAlive()) && void 0 !== TT && TT
              },
              canStop: () => {
                var TT, kT;
                return null !== (TT = null === (kT = rT) || void 0 === kT ? void 0 : kT.stopsAtOnce()) && void 0 !== TT && TT
              },
              stop: () => {
                var TT;
                null === (TT = rT) || void 0 === TT || TT.stop()
              }
            })) return aT
        }
        return rT = hT.play(TT, IT), rT.setRelativeVolume(kT), rT.setPannerAttr({
          refDistance: fT
        }), rT.setPosition([ST[0], ST[1] + MT.f.Iw * MT.f.playerEyeToHeightRatio, ST[2]]), rT
      }
      preload(TT) {
        this.loadSheet(this.stereoSheets, (0, lT.m)(TT))
      }
      loadSheet(TT, kT) {
        let cT = TT[kT];
        return cT || ((0, ST.e)(kT), cT = new FT({
          src: kT,
          isSoundSprite: !0,
          volumeScalar: 1
        }), cT.setGlobalVolume(hT.e.get("soundVolume")), TT[kT] = cT), cT
      }
      freeSheetsAfterGame() {
        for (const TT of [this.stereoSheets, this.spatialSheets])
          for (const [kT, cT] of Object.entries(TT)) !QT.c.has(kT) && cT.loaded() && (cT.unloadOnceIdle(), delete TT[kT])
      }
    }
  },
  36669: (TT, kT, cT) => {
    function lT(TT, kT) {
      var cT, lT, MT, KT, OT, yT, fT, xT;
      return TT.name === kT.name && ((null === (cT = TT.attributes) || void 0 === cT || null === (lT = cT.customAttributes) || void 0 === lT ? void 0 : lT.stackKey) === (null === (MT = kT.attributes) || void 0 === MT || null === (KT = MT.customAttributes) || void 0 === KT ? void 0 : KT.stackKey) && (!0 !== (null === (OT = TT.attributes) || void 0 === OT || null === (yT = OT.customAttributes) || void 0 === yT ? void 0 : yT.unstackable) && !0 !== (null === (fT = kT.attributes) || void 0 === fT || null === (xT = fT.customAttributes) || void 0 === xT ? void 0 : xT.unstackable)))
    }
    cT.d(kT, {
      c: () => lT
    })
  },
  36761: (TT, kT, cT) => {
    function lT(TT) {
      return TT.includes("Leaf Bed")
    }

    function MT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !lT(TT)
    }

    function KT(TT) {
      return TT.includes(" Strongbed")
    }

    function OT(TT) {
      return lT(TT) || MT(TT) || KT(TT)
    }
    cT.d(kT, {
      c: () => OT,
      d: () => lT,
      e: () => KT,
      g: () => MT
    })
  },
  36756: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT
    });
    var lT = cT(36761),
      MT = cT(9447);
    const KT = [],
      OT = [],
      yT = [],
      fT = [];
    for (const IT of Object.keys(MT.n))(0, lT.d)(IT) ? KT.push(IT) : (0, lT.g)(IT) && OT.push(IT), (0, lT.e)(IT) && yT.push(IT), (IT.includes(" Bed Head") || IT.includes(" Strongbed Head")) && fT.push(IT);
    const xT = {
      leafBeds: KT,
      woolBeds: OT,
      strongBeds: yT,
      beds: [...KT, ...OT, ...yT],
      bedHeads: fT,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6486: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      i: () => MT,
      m: () => fT,
      q: () => KT,
      s: () => xT,
      v: () => lT,
      w: () => yT
    });
    let lT = function(TT) {
        return TT[TT.DEFAULT = 0] = "DEFAULT", TT[TT.BOAT = 1] = "BOAT", TT[TT.GLIDER = 2] = "GLIDER", TT[TT.BALLOON = 3] = "BALLOON", TT[TT.SLEEPING = 4] = "SLEEPING", TT[TT.RIDING_MOB = 5] = "RIDING_MOB", TT[TT.CAR = 6] = "CAR", TT[TT.HOVERCRAFT = 7] = "HOVERCRAFT", TT
      }({}),
      MT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.OBSIDIAN = 1] = "OBSIDIAN", TT[TT.SPEED = 2] = "SPEED", TT
      }({}),
      KT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.IRON = 1] = "IRON", TT[TT.GOLD = 2] = "GOLD", TT[TT.DIAMOND = 3] = "DIAMOND", TT
      }({}),
      OT = function(TT) {
        return TT[TT.YELLOW = 0] = "YELLOW", TT[TT.WHITE = 1] = "WHITE", TT[TT.RED = 2] = "RED", TT[TT.PURPLE = 3] = "PURPLE", TT[TT.PINK = 4] = "PINK", TT[TT.ORANGE = 5] = "ORANGE", TT[TT.MAGENTA = 6] = "MAGENTA", TT[TT.LIME = 7] = "LIME", TT[TT.LIGHT_GRAY = 8] = "LIGHT_GRAY", TT[TT.LIGHT_BLUE = 9] = "LIGHT_BLUE", TT[TT.GREEN = 10] = "GREEN", TT[TT.GRAY = 11] = "GRAY", TT[TT.CYAN = 12] = "CYAN", TT[TT.BROWN = 13] = "BROWN", TT[TT.BLUE = 14] = "BLUE", TT[TT.BLACK = 15] = "BLACK", TT
      }({}),
      yT = function(TT) {
        return TT[TT.ROTATION_1 = 0] = "ROTATION_1", TT[TT.ROTATION_2 = 1] = "ROTATION_2", TT[TT.ROTATION_3 = 2] = "ROTATION_3", TT[TT.ROTATION_4 = 3] = "ROTATION_4", TT
      }({}),
      fT = function(TT) {
        return TT[TT.KART = 0] = "KART", TT[TT.OFF_ROADER = 1] = "OFF_ROADER", TT[TT.CAR = 2] = "CAR", TT[TT.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", TT[TT.ARMORED_CAR = 4] = "ARMORED_CAR", TT[TT.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", TT[TT.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", TT[TT.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", TT
      }({});
    lT.DEFAULT, lT.BOAT, MT.SPEED, lT.GLIDER, KT.DIAMOND, lT.BALLOON, OT.BLACK, lT.SLEEPING, yT.ROTATION_4, lT.RIDING_MOB, lT.CAR, fT.MOONSTONE_MINING_DRILL, lT.HOVERCRAFT;
    let xT = function(TT) {
      return TT[TT.NORMAL = 0] = "NORMAL", TT[TT.GLIDING = 1] = "GLIDING", TT[TT.FLOATING = 2] = "FLOATING", TT
    }({})
  },
  9332: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);