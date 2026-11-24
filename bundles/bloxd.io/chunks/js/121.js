export const id = 121;
export const ids = [121];
export const modules = {
  36707: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => ZT,
      d: () => OT
    });
    mT(34243);
    var WT = mT(63),
      zT = mT(1567),
      MT = mT(2046),
      gT = mT(2089),
      nT = mT(25),
      HT = mT(2552),
      kT = mT(36710),
      jT = mT(36716),
      lT = mT(34227),
      LT = mT(34237),
      pT = mT(34253),
      BT = mT(1188);
    const ZT = (0, WT.memo)((function() {
      var TT;
      const {
        isTouchScreen: UT,
        clientEscMenuOptions: mT,
        scriptedCameraFacing: MT,
        crosshairShownOverride: ZT,
        crosshairGameView: vT
      } = (0, nT.h)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), fT = (0, HT.f)("gunshotOrigin"), qT = (0, WT.useRef)(null), iT = (0, WT.useRef)(!1), [bT, eT] = (0, WT.useState)(cT);
      (0, zT.g)("cameraZoomSet", eT), (0, WT.useEffect)((() => {
        eT(cT())
      }), []);
      const YT = (0, gT.i)("heldItemAim"),
        xT = YT.gun,
        dT = (0, pT.g)(),
        wT = (0, WT.useRef)(dT);
      wT.current = dT;
      const [tT, aT] = (0, WT.useState)(!1);
      (0, WT.useEffect)((() => (0, jT.e)("crosshairAccuracy", OT)), []), (0, zT.g)("mouseState", (TT => {
        let {
          isDown: UT
        } = TT;
        iT.current = UT, qT.current && (qT.current.style.transform = (0, LT.c)(UT, wT.current.growOnClick)), "shapes" === wT.current.style && aT(UT)
      }));
      const yT = (0, lT.h)(UT, mT.touchActionButtons);
      return (null !== (TT = (0, kT.e)(vT, ZT)) && void 0 !== TT ? TT : (0, kT.i)(YT, bT > 1, yT, fT)) ? "movement" === MT || "cursor" === MT ? null : (0, BT.jsxs)(BT.Fragment, {
        children: [xT && (0, BT.jsx)(JT, {
          custom: dT.forGuns && "shapes" === dT.style ? dT : null,
          touch: UT
        }), !xT && (0, BT.jsx)(LT.b, {
          settings: dT,
          touch: UT,
          pressRef: qT,
          pressed: "shapes" === dT.style ? tT : iT.current
        })]
      }) : null
    }));

    function cT() {
      return MT.gameBridge.lookup("cameraZoom", null)
    }
    const vT = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      fT = {
        current: null
      },
      qT = {
        current: null
      };
    let iT = 0,
      bT = 0;

    function OT(TT) {
      bT = TT, vT[0].current || fT.current || qT.current ? YT(TT) : iT = TT
    }

    function eT(TT) {
      return ((0, kT.h)(TT) - (0, kT.h)(0)) * window.innerHeight / 100
    }

    function YT(TT) {
      var UT;
      if (null === (UT = qT.current) || void 0 === UT || UT.call(qT, eT(TT)), vT[0].current) {
        const UT = `${(0,kT.h)(TT)}vh`;
        vT[0].current.style.transform = `translateX(calc(0px - ${UT}))`, vT[1].current.style.transform = `translateX(calc(0px + ${UT}))`, vT[2].current.style.transform = `translateY(calc(0px - ${UT}))`, vT[3].current.style.transform = `translateY(calc(0px + ${UT}))`
      }
      fT.current && (fT.current.style.filter = `blur(${Math.round(TT/10)}px)`)
    }

    function JT(TT) {
      let {
        custom: UT,
        touch: mT
      } = TT;
      const MT = (0, zT.j)("aimingOverlay", "none"),
        gT = "1.2vh",
        nT = "0.3vh";
      (0, WT.useEffect)((() => {
        iT && YT(iT)
      }), []);
      const HT = (0, WT.useRef)(null !== UT);
      return (0, WT.useLayoutEffect)((() => {
        var TT;
        UT ? null === (TT = qT.current) || void 0 === TT || TT.call(qT, eT(bT)) : HT.current && YT(bT);
        HT.current = null !== UT
      }), [UT]), (0, BT.jsxs)(BT.Fragment, {
        children: ["sniper" === MT && (0, BT.jsxs)("div", {
          ref: fT,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, BT.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, BT.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, BT.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, BT.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, BT.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === MT ? 0 : 1
          },
          children: [UT && (0, BT.jsx)(LT.b, {
            settings: UT,
            touch: mT,
            spreadRef: qT
          }), !UT && (0, BT.jsxs)(BT.Fragment, {
            children: [(0, BT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: gT,
                height: nT,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: vT[0]
            }), (0, BT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: gT,
                height: nT,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: vT[1]
            }), (0, BT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: nT,
                height: gT,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: vT[2]
            }), (0, BT.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: nT,
                height: gT,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: vT[3]
            })]
          })]
        })]
      })
    }
  },
  34237: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => ZT,
      c: () => BT
    });
    mT(34243);
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(63),
      gT = mT(34233);

    function nT(TT, UT) {
      return Math.max(1, Math.round(TT * UT))
    }

    function HT(TT, UT) {
      const mT = UT * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        WT = function(TT, UT) {
          if (TT.lines) return nT(TT.lineThickness, UT) % 2;
          if (TT.dot) return nT(TT.dotSize, UT) % 2;
          return kT(TT, UT) % 2
        }(TT, UT),
        zT = jT(TT.lineThickness * mT, WT),
        MT = nT(TT.lineLength, mT),
        gT = Math.round(TT.gap * mT),
        HT = TT.outline > 0 ? nT(TT.outline, mT) : 0,
        LT = [];
      if (TT.lines && (LT.push({
          x: zT + gT,
          y: 0,
          w: MT,
          h: zT,
          arm: "right"
        }), LT.push({
          x: -gT - MT,
          y: 0,
          w: MT,
          h: zT,
          arm: "left"
        }), LT.push({
          x: 0,
          y: zT + gT,
          w: zT,
          h: MT,
          arm: "down"
        }), TT.tStyle || LT.push({
          x: 0,
          y: -gT - MT,
          w: zT,
          h: MT,
          arm: "up"
        }), 0 === gT && LT.push({
          x: 0,
          y: 0,
          w: zT,
          h: zT
        })), TT.dot) {
        const UT = jT(TT.dotSize * mT, WT),
          MT = TT.lines && 0 === gT && TT.dotSize > TT.lineThickness ? Math.max(UT, zT + 2) : UT,
          nT = (zT - MT) / 2;
        LT.push({
          x: nT,
          y: nT,
          w: MT,
          h: MT
        })
      }
      const pT = LT.map((TT => ({
        ...TT,
        x: TT.x - HT,
        y: TT.y - HT,
        w: TT.w + 2 * HT,
        h: TT.h + 2 * HT
      })));
      let BT = null,
        ZT = null;
      if (TT.circle) {
        const UT = nT(TT.circleThickness, mT),
          MT = function(TT, UT) {
            return TT + (TT % 2 === UT ? 0 : 1)
          }(kT(TT, mT), WT),
          gT = (zT - MT) / 2;
        BT = lT(gT, MT, UT), HT > 0 && (ZT = lT(gT - HT, MT + 2 * HT, UT + 2 * HT))
      }
      return {
        cell: zT,
        fills: LT,
        outlines: HT > 0 ? pT : [],
        ring: BT,
        ringOutline: ZT
      }
    }

    function kT(TT, UT) {
      return Math.round(TT.circleRadius * UT * 2 + nT(TT.circleThickness, UT))
    }

    function jT(TT, UT) {
      return Math.max(2 - UT, 2 * Math.round((TT - UT) / 2) + UT)
    }

    function lT(TT, UT, mT) {
      const WT = 2 * mT >= UT - 1;
      return {
        x: TT,
        y: TT,
        size: UT,
        border: Math.min(mT, Math.floor(UT / 2)),
        filled: WT
      }
    }
    var LT = mT(1188);
    const pT = 1.4;

    function BT(TT, UT) {
      return TT && UT ? `scale(${pT})` : "scale(1)"
    }

    function ZT(TT) {
      return "classic" === TT.settings.style ? (0, LT.jsx)(fT, {
        ...TT
      }) : (0, LT.jsx)(JT, {
        ...TT
      })
    }
    const cT = .125;

    function vT(TT, UT) {
      const mT = {};
      if (TT.color !== gT.e.color && (mT.color = (0, gT.i)(TT.color)), TT.opacity !== gT.e.opacity && (mT.opacity = TT.opacity / 100), TT.outline !== gT.e.outline || TT.outlineColor !== gT.e.outlineColor) {
        const UT = TT.outline,
          WT = (0, gT.i)(TT.outlineColor);
        mT.textShadow = UT > 0 ? `-${UT}px 0 ${WT}, 0 ${UT}px ${WT}, ${UT}px 0 ${WT}, 0 -${UT}px ${WT}` : "none"
      }
      if (TT.size !== gT.e.size) {
        const WT = TT.size / 100;
        mT.fontSize = UT ? `calc(max(1.3rem, 18px) * ${WT})` : `calc(1.3rem * ${WT})`, mT.marginTop = `-${cT}em`, mT.transformOrigin = `50% calc(50% + ${cT}em)`
      }
      return mT
    }

    function fT(TT) {
      let {
        settings: UT,
        touch: mT,
        inPreview: WT,
        inEditor: MT,
        pressed: gT = !1,
        pressRef: nT
      } = TT;
      return (0, LT.jsx)("div", {
        className: zT()("Crosshair", {
          Touch: mT,
          CrosshairInPreview: WT,
          CrosshairInEditor: MT || WT
        }),
        ref: nT,
        style: {
          transform: BT(gT, UT.growOnClick),
          ...vT(UT, mT)
        },
        children: "+"
      })
    }

    function qT(TT, UT) {
      return TT / UT + "px"
    }

    function iT(TT, UT, mT, WT) {
      return {
        ...eT(TT, UT, mT),
        width: qT(TT.w, mT),
        height: qT(TT.h, mT),
        background: WT
      }
    }

    function bT(TT, UT, mT) {
      return {
        left: qT(TT.x, UT),
        top: qT(TT.y, UT),
        width: qT(TT.size, UT),
        height: qT(TT.size, UT),
        borderWidth: qT(TT.border, UT),
        borderColor: mT,
        background: TT.filled ? mT : void 0
      }
    }
    const OT = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function eT(TT, UT, mT) {
      const [WT, zT] = TT.arm ? OT[TT.arm] : [0, 0], MT = Math.round(UT * mT);
      return {
        left: qT(TT.x + WT * MT, mT),
        top: qT(TT.y + zT * MT, mT)
      }
    }

    function YT(TT) {
      return TT.arm ? {
        "data-arm": TT.arm,
        "data-x": TT.x,
        "data-y": TT.y
      } : {}
    }

    function JT(TT) {
      let {
        settings: UT,
        inPreview: mT,
        inEditor: WT,
        pressed: nT = !1,
        spread: kT,
        spreadRef: jT
      } = TT;
      const lT = (0, MT.useRef)(null),
        {
          box: BT,
          dpr: ZT
        } = function(TT) {
          const [UT, mT] = (0, MT.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, MT.useLayoutEffect)((() => {
            const UT = TT.current;
            if (!UT) return;
            const WT = () => {
              const TT = UT.getBoundingClientRect(),
                WT = window.devicePixelRatio || 1;
              mT((UT => UT.dpr === WT && UT.box.left === TT.left && UT.box.top === TT.top && UT.box.width === TT.width && UT.box.height === TT.height ? UT : {
                box: {
                  left: TT.left,
                  top: TT.top,
                  width: TT.width,
                  height: TT.height
                },
                dpr: WT
              }))
            };
            WT();
            const zT = new ResizeObserver(WT);
            return zT.observe(UT), window.addEventListener("resize", WT), window.addEventListener("scroll", WT, !0), () => {
              zT.disconnect(), window.removeEventListener("resize", WT), window.removeEventListener("scroll", WT, !0)
            }
          }), [TT]), UT
        }(lT),
        cT = (0, MT.useRef)(ZT);
      cT.current = ZT;
      const vT = HT(UT, ZT, nT && UT.growOnClick ? pT : 1),
        fT = function(TT, UT, mT) {
          const WT = Math.round((TT.left + TT.width / 2) * mT - UT / 2),
            zT = Math.round((TT.top + TT.height / 2) * mT - UT / 2);
          return {
            x: WT / mT - TT.left,
            y: zT / mT - TT.top
          }
        }(BT, vT.cell, ZT),
        qT = (0, gT.i)(UT.color),
        OT = (0, gT.i)(UT.outlineColor),
        JT = (0, MT.useRef)(0);
      (0, MT.useLayoutEffect)((() => {
        if (jT) return jT.current = TT => {
          var UT;
          JT.current = TT, null === (UT = lT.current) || void 0 === UT || UT.querySelectorAll("[data-arm]").forEach((UT => {
            Object.assign(UT.style, eT(function(TT) {
              return {
                x: Number(TT.dataset.x),
                y: Number(TT.dataset.y),
                arm: TT.dataset.arm
              }
            }(UT), TT, cT.current))
          }))
        }, () => {
          jT.current = null
        }
      }), [jT]);
      const xT = null !== kT && void 0 !== kT ? kT : JT.current;
      return (0, LT.jsx)("div", {
        ref: lT,
        className: zT()("CrosshairShapes", {
          CrosshairInPreview: mT,
          CrosshairInEditor: WT || mT,
          CrosshairSpreads: void 0 !== jT
        }),
        children: (0, LT.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: fT.x,
            top: fT.y,
            opacity: UT.opacity / 100
          },
          children: (0, LT.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [vT.ringOutline && (0, LT.jsx)("div", {
              className: "CrosshairRing",
              style: bT(vT.ringOutline, ZT, OT)
            }), vT.outlines.map(((TT, UT) => (0, LT.jsx)("div", {
              className: "CrosshairPart",
              ...YT(TT),
              style: iT(TT, xT, ZT, OT)
            }, `o${UT}`))), vT.ring && (0, LT.jsx)("div", {
              className: "CrosshairRing",
              style: bT(vT.ring, ZT, qT)
            }), vT.fills.map(((TT, UT) => (0, LT.jsx)("div", {
              className: "CrosshairPart",
              ...YT(TT),
              style: iT(TT, xT, ZT, qT)
            }, `f${UT}`)))]
          })
        })
      })
    }
  },
  34245: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      f: () => cT,
      h: () => ZT
    });
    var WT = mT(34233);
    const zT = "XH1-",
      MT = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      gT = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      nT = ["color", "outlineColor"],
      HT = 1 + 3 * nT.length + gT.length + 1,
      kT = Math.ceil(8 * HT / Math.log2(62)),
      jT = zT.length + kT;

    function lT(TT) {
      let UT = 90;
      for (const mT of TT) UT = 31 * UT + mT & 255;
      return UT
    }
    const LT = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      pT = BigInt(LT.length);

    function BT(TT, UT) {
      let mT = 0n;
      for (const zT of TT) {
        const TT = LT.indexOf(zT);
        if (TT < 0) return null;
        mT = mT * pT + BigInt(TT)
      }
      if (mT >> BigInt(8 * UT) !== 0n) return null;
      const WT = [];
      for (let zT = 0; zT < UT; zT++) WT.unshift(Number(0xffn & mT)), mT >>= 8n;
      return WT
    }

    function ZT(TT) {
      let UT = "shapes" === TT.style ? 1 : 0;
      MT.forEach(((mT, WT) => {
        TT[mT] && (UT |= 1 << WT + 1)
      }));
      const mT = [UT];
      for (const zT of nT) {
        const UT = (0, WT.g)(zT, TT[zT]);
        mT.push(UT >> 16 & 255, UT >> 8 & 255, 255 & UT)
      }
      for (const zT of gT) {
        const {
          min: UT,
          step: MT
        } = WT.b[zT];
        mT.push(Math.round(((0, WT.g)(zT, TT[zT]) - UT) / MT))
      }
      return mT.push(lT(mT)), zT + function(TT, UT) {
        let mT = 0n;
        for (const zT of TT) mT = mT << 8n | BigInt(zT);
        let WT = "";
        for (let zT = 0; zT < UT; zT++) WT = LT[Number(mT % pT)] + WT, mT /= pT;
        return WT
      }(mT, kT)
    }

    function cT(TT) {
      for (const UT of TT.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${kT}})`, "gi"))) {
        const TT = vT(BT(UT[1], HT));
        if (TT) return TT
      }
      return null
    }

    function vT(TT) {
      if (!TT || TT.length !== HT || lT(TT.slice(0, -1)) !== TT[TT.length - 1]) return null;
      const UT = TT[0],
        mT = {
          ...WT.e,
          style: 1 & UT ? "shapes" : "classic"
        };
      MT.forEach(((TT, WT) => {
        mT[TT] = 0 !== (UT & 1 << WT + 1)
      }));
      let zT = 1;
      for (const WT of nT) mT[WT] = TT[zT] << 16 | TT[zT + 1] << 8 | TT[zT + 2], zT += 3;
      for (const MT of gT) {
        const {
          min: UT,
          step: gT
        } = WT.b[MT];
        mT[MT] = (0, WT.g)(MT, UT + TT[zT] * gT), zT++
      }
      return mT
    }
  },
  34233: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      e: () => zT,
      g: () => MT,
      i: () => kT,
      m: () => HT,
      n: () => jT,
      o: () => nT,
      s: () => gT
    });
    const WT = {
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

    function MT(TT, UT) {
      var mT;
      const {
        min: MT,
        max: gT,
        step: nT
      } = WT[TT];
      if (!Number.isFinite(UT)) return zT[TT];
      const HT = (null !== (mT = String(nT).split(".")[1]) && void 0 !== mT ? mT : "").length,
        kT = Number((Math.round(UT / nT) * nT).toFixed(HT));
      return Math.min(gT, Math.max(MT, kT))
    }

    function gT(TT, UT, mT) {
      const WT = "number" === typeof mT ? MT(UT, mT) : mT;
      return {
        ...TT,
        [UT]: WT
      }
    }

    function nT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(zT).every((WT => mT.includes(WT) || TT[WT] === UT[WT]))
    }

    function HT(TT) {
      return nT(TT, zT)
    }

    function kT(TT) {
      return `#${TT.toString(16).padStart(6,"0")}`
    }

    function jT(TT) {
      const UT = /^#?([0-9a-f]{6})$/i.exec(TT.trim());
      return UT ? parseInt(UT[1], 16) : null
    }
  },
  34253: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      g: () => LT
    });
    var WT = mT(63),
      zT = mT(44),
      MT = mT(34245),
      gT = mT(34233);
    const nT = "crosshairCode";
    let HT = null;
    const kT = new Set;

    function jT() {
      if (null === HT) {
        var TT;
        const UT = zT.l.getItem(nT);
        HT = null !== (TT = "string" === typeof UT ? (0, MT.f)(UT) : null) && void 0 !== TT ? TT : gT.e
      }
      return HT
    }

    function lT(TT) {
      HT = TT, (0, gT.m)(TT) ? zT.l.removeItem(nT) : zT.l.setItem(nT, (0, MT.h)(TT));
      for (const UT of kT) UT()
    }

    function LT() {
      const [TT, UT] = (0, WT.useState)(jT);
      return (0, WT.useEffect)((() => {
        const TT = () => {
          UT(jT())
        };
        return TT(), mT = TT, kT.add(mT), () => {
          kT.delete(mT)
        };
        var mT
      }), []), TT
    }
  },
  36866: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      h: () => HT,
      l: () => gT
    });
    var WT = mT(653),
      zT = mT(2875);

    function MT(TT) {
      return TT === (0, zT.h)().rTT ? (0, zT.h)().VV : TT
    }

    function gT(TT) {
      return !(0, WT.E)(TT) && MT(TT) === (0, zT.h)().VV
    }
    const nT = "gravity";

    function HT() {
      return (0, zT.h)().physics[nT][1]
    }
  },
  36851: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => eT
    });
    var WT = mT(36855),
      zT = mT(208),
      MT = mT(4959),
      gT = mT(36862),
      nT = mT(36513),
      HT = mT(36904),
      kT = mT(36866),
      jT = mT(375),
      lT = mT.n(jT),
      LT = mT(1302),
      pT = mT(2875),
      BT = mT(36901),
      ZT = mT(31),
      cT = mT(25),
      vT = mT(36875),
      fT = mT(36882),
      qT = mT(36889);
    const iT = new Set(["note"]);
    const bT = {
      stop: () => bT,
      fade: () => bT,
      rate: () => bT,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => bT,
      setPannerAttr: () => bT,
      setPosition: () => bT
    };
    class OT {
      constructor(TT) {
        let UT, {
          src: mT,
          volumeScalar: zT,
          isSoundSprite: gT
        } = TT;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, gT ? (UT = (0, WT.h)(mT), this._spriteTrackSrc = UT) : UT = {
          src: LT.clientSideServerUrls.staticUrl + mT
        }, this._volumeMultiplier = new HT.f, this._volumeMultiplier.setMultiplierType("persistentScalar", zT), this._howl = (0, nT.countDecodesAs)(new MT.Howl({
          ...UT,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let TT, UT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          mT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (UT) {
          var WT;
          if (null === (WT = this._spriteTrackSrc) || void 0 === WT || !WT.sprite[UT]) throw new Error("No such sprite in your spritetrack");
          TT = this._howl.play(UT)
        } else TT = this._howl.play();
        mT && this._howl.loop(!0, TT);
        let zT = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), TT);
        const MT = {
          stop: () => {
            var UT;
            return null === (UT = this.liveHowl()) || void 0 === UT || UT.stop(TT), MT
          },
          fade: (UT, mT, WT) => {
            var zT;
            return null === (zT = this.liveHowl()) || void 0 === zT || zT.fade(UT, mT, WT, TT), MT
          },
          rate: UT => {
            var mT;
            return null === (mT = this.liveHowl()) || void 0 === mT || mT.rate(UT, TT), MT
          },
          stopsAtOnce: () => this._howl.playing(TT) && !this._howl._playLock,
          isAlive: () => {
            const UT = this._howl._soundById(TT);
            return !this._loadFailed && !!UT && !UT._ended
          },
          getDurationMs: () => this._howl._soundById(TT) ? 1e3 * this._howl.duration(TT) / this._howl.rate(TT) : 0,
          getVolume: () => zT * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => zT,
          setRelativeVolume: UT => {
            var mT;
            if (UT > 1) throw new Error("Volume should be <= 1");
            return zT = cT.b.get("soundOnFromAd") ? UT : 0, null === (mT = this.liveHowl()) || void 0 === mT || mT.volume(Math.min(1, zT * this._volumeMultiplier.getTotalMultipliedVal()), TT), MT
          },
          setPannerAttr: UT => {
            let {
              coneInnerAngle: mT,
              coneOuterAngle: WT = 360,
              coneOuterGain: zT,
              distanceModel: gT,
              maxDistance: nT,
              panningModel: HT,
              refDistance: kT,
              rolloffFactor: jT
            } = UT;
            return this._setPannerAttr({
              id: TT,
              coneInnerAngle: mT,
              coneOuterAngle: WT,
              coneOuterGain: zT,
              distanceModel: gT,
              maxDistance: nT,
              panningModel: HT,
              refDistance: kT,
              rolloffFactor: jT
            }), MT
          },
          setPosition: UT => {
            var mT;
            return null === (mT = this.liveHowl()) || void 0 === mT || mT.pos(UT[2], UT[1], UT[0], TT), MT
          }
        };
        return MT
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, gT.d)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(TT) {
        this._volumeMultiplier.setMultiplierType("globalVolume", TT), this._howl.volume(TT)
      }
      _setPannerAttr(TT) {
        let {
          id: UT,
          coneInnerAngle: mT = 360,
          coneOuterAngle: WT = 360,
          coneOuterGain: zT = 0,
          distanceModel: MT = "inverse",
          maxDistance: gT = 1e3,
          panningModel: nT = "HRTF",
          refDistance: HT = BT.k,
          rolloffFactor: kT = 1
        } = TT;
        const jT = this.liveHowl();
        if (null === jT) return;
        jT.pannerAttr({
          coneOuterAngle: WT
        }, UT);
        const lT = {
          coneInnerAngle: mT,
          coneOuterAngle: WT,
          coneOuterGain: zT,
          distanceModel: MT,
          maxDistance: gT,
          panningModel: nT,
          refDistance: HT,
          rolloffFactor: kT
        };
        jT.pannerAttr(lT, UT)
      }
    }
    const eT = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new vT.b, ZT.j.subscribe("appManagerUpdated|soundVolume", (TT => {
          const UT = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const mT of UT) mT.setGlobalVolume(TT)
        }))
      }
      play(TT, UT) {
        var mT;
        let MT, gT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (mT = (0, pT.h)()) || void 0 === mT ? void 0 : mT.VV,
          nT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BT.g,
          HT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BT.k,
          jT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var LT;
        (0, pT.h)() ? MT = !!Array.isArray(gT) || (0, kT.e)(gT) !== (null === (LT = (0, pT.h)()) || void 0 === LT ? void 0 : LT.VV): MT = !1;
        const ZT = (0, WT.i)(TT),
          cT = this.loadSheet(MT ? this.spatialSheets : this.stereoSheets, ZT);
        if (!MT) {
          const mT = cT.play(TT, jT);
          return mT.setRelativeVolume(UT), mT
        }
        const fT = (0, pT.h)(),
          qT = Array.isArray(gT) ? gT : fT.pY.Aq(gT),
          OT = fT.pY.Aq(fT.VV);
        if (!qT || lT().sqrDist(qT, OT) > nT * nT) return bT;
        let eT;
        if (!jT) {
          if (!this.spatialVoices.admit({
              group: iT.has(ZT) ? null : (0, vT.h)(TT),
              loudness: (0, vT.e)(UT, lT().sg(qT, OT), HT),
              startMs: performance.now(),
              getDurationMs: () => {
                var TT, UT;
                return null !== (TT = null === (UT = eT) || void 0 === UT ? void 0 : UT.getDurationMs()) && void 0 !== TT ? TT : 0
              },
              isAlive: () => {
                var TT, UT;
                return null !== (TT = null === (UT = eT) || void 0 === UT ? void 0 : UT.isAlive()) && void 0 !== TT && TT
              },
              canStop: () => {
                var TT, UT;
                return null !== (TT = null === (UT = eT) || void 0 === UT ? void 0 : UT.stopsAtOnce()) && void 0 !== TT && TT
              },
              stop: () => {
                var TT;
                null === (TT = eT) || void 0 === TT || TT.stop()
              }
            })) return bT
        }
        return eT = cT.play(TT, jT), eT.setRelativeVolume(UT), eT.setPannerAttr({
          refDistance: HT
        }), eT.setPosition([qT[0], qT[1] + zT.f.Fc * zT.f.playerEyeToHeightRatio, qT[2]]), eT
      }
      preload(TT) {
        this.loadSheet(this.stereoSheets, (0, WT.i)(TT))
      }
      loadSheet(TT, UT) {
        let mT = TT[UT];
        return mT || ((0, qT.d)(UT), mT = new OT({
          src: UT,
          isSoundSprite: !0,
          volumeScalar: 1
        }), mT.setGlobalVolume(cT.b.get("soundVolume")), TT[UT] = mT), mT
      }
      freeSheetsAfterGame() {
        for (const TT of [this.stereoSheets, this.spatialSheets])
          for (const [UT, mT] of Object.entries(TT)) !fT.c.has(UT) && mT.loaded() && (mT.unloadOnceIdle(), delete TT[UT])
      }
    }
  },
  36937: (TT, UT, mT) => {
    function WT(TT, UT) {
      var mT, WT, zT, MT, gT, nT, HT, kT;
      return TT.name === UT.name && ((null === (mT = TT.attributes) || void 0 === mT || null === (WT = mT.customAttributes) || void 0 === WT ? void 0 : WT.stackKey) === (null === (zT = UT.attributes) || void 0 === zT || null === (MT = zT.customAttributes) || void 0 === MT ? void 0 : MT.stackKey) && (!0 !== (null === (gT = TT.attributes) || void 0 === gT || null === (nT = gT.customAttributes) || void 0 === nT ? void 0 : nT.unstackable) && !0 !== (null === (HT = UT.attributes) || void 0 === HT || null === (kT = HT.customAttributes) || void 0 === kT ? void 0 : kT.unstackable)))
    }
    mT.d(UT, {
      d: () => WT
    })
  },
  37032: (TT, UT, mT) => {
    function WT(TT) {
      return TT.includes("Leaf Bed")
    }

    function zT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !WT(TT)
    }

    function MT(TT) {
      return TT.includes(" Strongbed")
    }

    function gT(TT) {
      return WT(TT) || zT(TT) || MT(TT)
    }
    mT.d(UT, {
      c: () => gT,
      g: () => WT,
      j: () => MT,
      l: () => zT
    })
  },
  37030: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT
    });
    var WT = mT(37032),
      zT = mT(9330);
    const MT = [],
      gT = [],
      nT = [],
      HT = [];
    for (const jT of Object.keys(zT.k))(0, WT.g)(jT) ? MT.push(jT) : (0, WT.l)(jT) && gT.push(jT), (0, WT.j)(jT) && nT.push(jT), (jT.includes(" Bed Head") || jT.includes(" Strongbed Head")) && HT.push(jT);
    const kT = {
      leafBeds: MT,
      woolBeds: gT,
      strongBeds: nT,
      beds: [...MT, ...gT, ...nT],
      bedHeads: HT,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6542: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      g: () => zT,
      i: () => HT,
      l: () => MT,
      p: () => kT,
      q: () => WT,
      u: () => nT
    });
    let WT = function(TT) {
        return TT[TT.DEFAULT = 0] = "DEFAULT", TT[TT.BOAT = 1] = "BOAT", TT[TT.GLIDER = 2] = "GLIDER", TT[TT.BALLOON = 3] = "BALLOON", TT[TT.SLEEPING = 4] = "SLEEPING", TT[TT.RIDING_MOB = 5] = "RIDING_MOB", TT[TT.CAR = 6] = "CAR", TT[TT.HOVERCRAFT = 7] = "HOVERCRAFT", TT
      }({}),
      zT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.OBSIDIAN = 1] = "OBSIDIAN", TT[TT.SPEED = 2] = "SPEED", TT
      }({}),
      MT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.IRON = 1] = "IRON", TT[TT.GOLD = 2] = "GOLD", TT[TT.DIAMOND = 3] = "DIAMOND", TT
      }({}),
      gT = function(TT) {
        return TT[TT.YELLOW = 0] = "YELLOW", TT[TT.WHITE = 1] = "WHITE", TT[TT.RED = 2] = "RED", TT[TT.PURPLE = 3] = "PURPLE", TT[TT.PINK = 4] = "PINK", TT[TT.ORANGE = 5] = "ORANGE", TT[TT.MAGENTA = 6] = "MAGENTA", TT[TT.LIME = 7] = "LIME", TT[TT.LIGHT_GRAY = 8] = "LIGHT_GRAY", TT[TT.LIGHT_BLUE = 9] = "LIGHT_BLUE", TT[TT.GREEN = 10] = "GREEN", TT[TT.GRAY = 11] = "GRAY", TT[TT.CYAN = 12] = "CYAN", TT[TT.BROWN = 13] = "BROWN", TT[TT.BLUE = 14] = "BLUE", TT[TT.BLACK = 15] = "BLACK", TT
      }({}),
      nT = function(TT) {
        return TT[TT.ROTATION_1 = 0] = "ROTATION_1", TT[TT.ROTATION_2 = 1] = "ROTATION_2", TT[TT.ROTATION_3 = 2] = "ROTATION_3", TT[TT.ROTATION_4 = 3] = "ROTATION_4", TT
      }({}),
      HT = function(TT) {
        return TT[TT.KART = 0] = "KART", TT[TT.OFF_ROADER = 1] = "OFF_ROADER", TT[TT.CAR = 2] = "CAR", TT[TT.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", TT[TT.ARMORED_CAR = 4] = "ARMORED_CAR", TT[TT.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", TT[TT.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", TT[TT.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", TT
      }({});
    WT.DEFAULT, WT.BOAT, zT.SPEED, WT.GLIDER, MT.DIAMOND, WT.BALLOON, gT.BLACK, WT.SLEEPING, nT.ROTATION_4, WT.RIDING_MOB, WT.CAR, HT.MOONSTONE_MINING_DRILL, WT.HOVERCRAFT;
    let kT = function(TT) {
      return TT[TT.NORMAL = 0] = "NORMAL", TT[TT.GLIDING = 1] = "GLIDING", TT[TT.FLOATING = 2] = "FLOATING", TT
    }({})
  },
  34243: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);