export const id = 75;
export const ids = [75, 186];
export const modules = {
  37868: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW,
      h: () => UW,
      l: () => xW,
      o: () => ZW
    });
    var mW = OW(35220),
      EW = OW(3361),
      NW = OW(3368),
      PW = OW(9954),
      LW = OW(1526),
      cW = OW(62),
      wW = OW(80),
      tW = OW(1283);

    function ZW() {
      var WW;
      return (0, LW.g)(EW.g, (0, EW.F)()), (0, tW.jsx)(tW.Fragment, {
        children: null === (WW = (0, EW.F)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function xW(WW) {
      var iW;
      let {
        show: OW
      } = WW;
      (0, LW.g)(EW.g, (0, EW.F)());
      const wW = null === (iW = (0, EW.F)()) || void 0 === iW ? void 0 : iW.menu;
      return (0, cW.useEffect)((() => {
        var WW;
        OW || (null === wW || void 0 === wW || null === (WW = wW.onClose) || void 0 === WW || WW.call(wW), (0, NW.s)())
      }), [OW, wW]), (0, cW.useEffect)((() => OW ? (0, PW.e)(NW.C, NW.f) : void 0), [OW]), (0, tW.jsx)(mW.d, {
        showing: OW,
        globallyUniqueKey: "clientGameMenu",
        children: null === wW || void 0 === wW ? void 0 : wW.content
      })
    }
    const lW = new Map,
      AW = new Set;

    function bW(WW, iW) {
      iW ? lW.set(WW, iW) : lW.delete(WW);
      for (const OW of AW) OW()
    }

    function jW(WW) {
      let {
        placement: iW = "bottom"
      } = WW;
      const OW = (0, cW.useRef)(null);
      return (0, cW.useLayoutEffect)((() => {
        const WW = OW.current;
        return bW(iW, WW), () => {
          lW.get(iW) === WW && bW(iW, null)
        }
      }), [iW]), (0, tW.jsx)("div", {
        ref: OW,
        id: `clientGameHud-${iW}`,
        style: {
          display: "contents"
        }
      })
    }

    function UW(WW) {
      let {
        children: iW,
        placement: OW = "bottom"
      } = WW;
      const [mW, EW] = (0, cW.useState)((() => {
        var WW;
        return null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null
      }));
      return (0, cW.useEffect)((() => {
        const WW = () => {
          var WW;
          EW(null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null)
        };
        return AW.add(WW), WW(), () => {
          AW.delete(WW)
        }
      }), [OW]), mW ? (0, wW.createPortal)(iW, mW) : null
    }
  },
  37896: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => bW,
      f: () => SW
    });
    OW(35198);
    var mW = OW(62),
      EW = OW(1526),
      NW = OW(2037),
      PW = OW(2075),
      LW = OW(25),
      cW = OW(3332),
      wW = OW(37898),
      tW = OW(37902),
      ZW = OW(35177),
      xW = OW(35190),
      lW = OW(35209),
      AW = OW(1283);
    const bW = (0, mW.memo)((function() {
      var WW;
      const {
        isTouchScreen: iW,
        clientEscMenuOptions: OW,
        scriptedCameraFacing: NW,
        crosshairShownOverride: bW,
        crosshairGameView: UW
      } = (0, LW.p)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), kW = (0, cW.e)("gunshotOrigin"), sW = (0, mW.useRef)(null), MW = (0, mW.useRef)(!1), [KW, YW] = (0, mW.useState)(jW);
      (0, EW.e)("cameraZoomSet", YW), (0, mW.useEffect)((() => {
        YW(jW())
      }), []);
      const yW = (0, PW.g)("heldItemAim"),
        JW = yW.gun,
        hW = (0, lW.g)(),
        HW = (0, mW.useRef)(hW);
      HW.current = hW;
      const [nW, uW] = (0, mW.useState)(!1);
      (0, mW.useEffect)((() => (0, tW.h)("crosshairAccuracy", SW)), []), (0, EW.e)("mouseState", (WW => {
        let {
          isDown: iW
        } = WW;
        MW.current = iW, sW.current && (sW.current.style.transform = (0, xW.c)(iW, HW.current.growOnClick)), "shapes" === HW.current.style && uW(iW)
      }));
      const oW = (0, ZW.d)(iW, OW.touchActionButtons);
      return (null !== (WW = (0, wW.d)(UW, bW)) && void 0 !== WW ? WW : (0, wW.i)(yW, KW > 1, oW, kW)) ? "movement" === NW || "cursor" === NW ? null : (0, AW.jsxs)(AW.Fragment, {
        children: [JW && (0, AW.jsx)(TW, {
          custom: hW.forGuns && "shapes" === hW.style ? hW : null,
          touch: iW
        }), !JW && (0, AW.jsx)(xW.b, {
          settings: hW,
          touch: iW,
          pressRef: sW,
          pressed: "shapes" === hW.style ? nW : MW.current
        })]
      }) : null
    }));

    function jW() {
      return NW.gameBridge.lookup("cameraZoom", null)
    }
    const UW = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      kW = {
        current: null
      },
      sW = {
        current: null
      };
    let MW = 0,
      KW = 0;

    function SW(WW) {
      KW = WW, UW[0].current || kW.current || sW.current ? yW(WW) : MW = WW
    }

    function YW(WW) {
      return ((0, wW.f)(WW) - (0, wW.f)(0)) * window.innerHeight / 100
    }

    function yW(WW) {
      var iW;
      if (null === (iW = sW.current) || void 0 === iW || iW.call(sW, YW(WW)), UW[0].current) {
        const iW = `${(0,wW.f)(WW)}vh`;
        UW[0].current.style.transform = `translateX(calc(0px - ${iW}))`, UW[1].current.style.transform = `translateX(calc(0px + ${iW}))`, UW[2].current.style.transform = `translateY(calc(0px - ${iW}))`, UW[3].current.style.transform = `translateY(calc(0px + ${iW}))`
      }
      kW.current && (kW.current.style.filter = `blur(${Math.round(WW/10)}px)`)
    }

    function TW(WW) {
      let {
        custom: iW,
        touch: OW
      } = WW;
      const NW = (0, EW.g)("aimingOverlay", "none"),
        PW = "1.2vh",
        LW = "0.3vh";
      (0, mW.useEffect)((() => {
        MW && yW(MW)
      }), []);
      const cW = (0, mW.useRef)(null !== iW);
      return (0, mW.useLayoutEffect)((() => {
        var WW;
        iW ? null === (WW = sW.current) || void 0 === WW || WW.call(sW, YW(KW)) : cW.current && yW(KW);
        cW.current = null !== iW
      }), [iW]), (0, AW.jsxs)(AW.Fragment, {
        children: ["sniper" === NW && (0, AW.jsxs)("div", {
          ref: kW,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, AW.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, AW.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, AW.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, AW.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, AW.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === NW ? 0 : 1
          },
          children: [iW && (0, AW.jsx)(xW.b, {
            settings: iW,
            touch: OW,
            spreadRef: sW
          }), !iW && (0, AW.jsxs)(AW.Fragment, {
            children: [(0, AW.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: PW,
                height: LW,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: UW[0]
            }), (0, AW.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: PW,
                height: LW,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: UW[1]
            }), (0, AW.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: LW,
                height: PW,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: UW[2]
            }), (0, AW.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: LW,
                height: PW,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: UW[3]
            })]
          })]
        })]
      })
    }
  },
  35220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(5243),
      EW = OW(5251);

    function NW(WW) {
      let {
        children: iW,
        showing: OW,
        globallyUniqueKey: NW,
        alwaysMountChildren: PW = !1,
        doGameplayStartStopOnShow: LW = !0,
        keepsMovement: cW = !1
      } = WW;
      return (0, EW.b)(!0, OW, NW, cW), (0, mW.b)(LW, OW), OW || PW ? iW : null
    }
  },
  35190: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => bW,
      c: () => AW
    });
    OW(35198);
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(62),
      PW = OW(35181);

    function LW(WW, iW) {
      return Math.max(1, Math.round(WW * iW))
    }

    function cW(WW, iW) {
      const OW = iW * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        mW = function(WW, iW) {
          if (WW.lines) return LW(WW.lineThickness, iW) % 2;
          if (WW.dot) return LW(WW.dotSize, iW) % 2;
          return wW(WW, iW) % 2
        }(WW, iW),
        EW = tW(WW.lineThickness * OW, mW),
        NW = LW(WW.lineLength, OW),
        PW = Math.round(WW.gap * OW),
        cW = WW.outline > 0 ? LW(WW.outline, OW) : 0,
        xW = [];
      if (WW.lines && (xW.push({
          x: EW + PW,
          y: 0,
          w: NW,
          h: EW,
          arm: "right"
        }), xW.push({
          x: -PW - NW,
          y: 0,
          w: NW,
          h: EW,
          arm: "left"
        }), xW.push({
          x: 0,
          y: EW + PW,
          w: EW,
          h: NW,
          arm: "down"
        }), WW.tStyle || xW.push({
          x: 0,
          y: -PW - NW,
          w: EW,
          h: NW,
          arm: "up"
        }), 0 === PW && xW.push({
          x: 0,
          y: 0,
          w: EW,
          h: EW
        })), WW.dot) {
        const iW = tW(WW.dotSize * OW, mW),
          NW = WW.lines && 0 === PW && WW.dotSize > WW.lineThickness ? Math.max(iW, EW + 2) : iW,
          LW = (EW - NW) / 2;
        xW.push({
          x: LW,
          y: LW,
          w: NW,
          h: NW
        })
      }
      const lW = xW.map((WW => ({
        ...WW,
        x: WW.x - cW,
        y: WW.y - cW,
        w: WW.w + 2 * cW,
        h: WW.h + 2 * cW
      })));
      let AW = null,
        bW = null;
      if (WW.circle) {
        const iW = LW(WW.circleThickness, OW),
          NW = function(WW, iW) {
            return WW + (WW % 2 === iW ? 0 : 1)
          }(wW(WW, OW), mW),
          PW = (EW - NW) / 2;
        AW = ZW(PW, NW, iW), cW > 0 && (bW = ZW(PW - cW, NW + 2 * cW, iW + 2 * cW))
      }
      return {
        cell: EW,
        fills: xW,
        outlines: cW > 0 ? lW : [],
        ring: AW,
        ringOutline: bW
      }
    }

    function wW(WW, iW) {
      return Math.round(WW.circleRadius * iW * 2 + LW(WW.circleThickness, iW))
    }

    function tW(WW, iW) {
      return Math.max(2 - iW, 2 * Math.round((WW - iW) / 2) + iW)
    }

    function ZW(WW, iW, OW) {
      const mW = 2 * OW >= iW - 1;
      return {
        x: WW,
        y: WW,
        size: iW,
        border: Math.min(OW, Math.floor(iW / 2)),
        filled: mW
      }
    }
    var xW = OW(1283);
    const lW = 1.4;

    function AW(WW, iW) {
      return WW && iW ? `scale(${lW})` : "scale(1)"
    }

    function bW(WW) {
      return "classic" === WW.settings.style ? (0, xW.jsx)(kW, {
        ...WW
      }) : (0, xW.jsx)(TW, {
        ...WW
      })
    }
    const jW = .125;

    function UW(WW, iW) {
      const OW = {};
      if (WW.color !== PW.g.color && (OW.color = (0, PW.m)(WW.color)), WW.opacity !== PW.g.opacity && (OW.opacity = WW.opacity / 100), WW.outline !== PW.g.outline || WW.outlineColor !== PW.g.outlineColor) {
        const iW = WW.outline,
          mW = (0, PW.m)(WW.outlineColor);
        OW.textShadow = iW > 0 ? `-${iW}px 0 ${mW}, 0 ${iW}px ${mW}, ${iW}px 0 ${mW}, 0 -${iW}px ${mW}` : "none"
      }
      if (WW.size !== PW.g.size) {
        const mW = WW.size / 100;
        OW.fontSize = iW ? `calc(max(1.3rem, 18px) * ${mW})` : `calc(1.3rem * ${mW})`, OW.marginTop = `-${jW}em`, OW.transformOrigin = `50% calc(50% + ${jW}em)`
      }
      return OW
    }

    function kW(WW) {
      let {
        settings: iW,
        touch: OW,
        inPreview: mW,
        inEditor: NW,
        pressed: PW = !1,
        pressRef: LW
      } = WW;
      return (0, xW.jsx)("div", {
        className: EW()("Crosshair", {
          Touch: OW,
          CrosshairInPreview: mW,
          CrosshairInEditor: NW || mW
        }),
        ref: LW,
        style: {
          transform: AW(PW, iW.growOnClick),
          ...UW(iW, OW)
        },
        children: "+"
      })
    }

    function sW(WW, iW) {
      return WW / iW + "px"
    }

    function MW(WW, iW, OW, mW) {
      return {
        ...YW(WW, iW, OW),
        width: sW(WW.w, OW),
        height: sW(WW.h, OW),
        background: mW
      }
    }

    function KW(WW, iW, OW) {
      return {
        left: sW(WW.x, iW),
        top: sW(WW.y, iW),
        width: sW(WW.size, iW),
        height: sW(WW.size, iW),
        borderWidth: sW(WW.border, iW),
        borderColor: OW,
        background: WW.filled ? OW : void 0
      }
    }
    const SW = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function YW(WW, iW, OW) {
      const [mW, EW] = WW.arm ? SW[WW.arm] : [0, 0], NW = Math.round(iW * OW);
      return {
        left: sW(WW.x + mW * NW, OW),
        top: sW(WW.y + EW * NW, OW)
      }
    }

    function yW(WW) {
      return WW.arm ? {
        "data-arm": WW.arm,
        "data-x": WW.x,
        "data-y": WW.y
      } : {}
    }

    function TW(WW) {
      let {
        settings: iW,
        inPreview: OW,
        inEditor: mW,
        pressed: LW = !1,
        spread: wW,
        spreadRef: tW
      } = WW;
      const ZW = (0, NW.useRef)(null),
        {
          box: AW,
          dpr: bW
        } = function(WW) {
          const [iW, OW] = (0, NW.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, NW.useLayoutEffect)((() => {
            const iW = WW.current;
            if (!iW) return;
            const mW = () => {
              const WW = iW.getBoundingClientRect(),
                mW = window.devicePixelRatio || 1;
              OW((iW => iW.dpr === mW && iW.box.left === WW.left && iW.box.top === WW.top && iW.box.width === WW.width && iW.box.height === WW.height ? iW : {
                box: {
                  left: WW.left,
                  top: WW.top,
                  width: WW.width,
                  height: WW.height
                },
                dpr: mW
              }))
            };
            mW();
            const EW = new ResizeObserver(mW);
            return EW.observe(iW), window.addEventListener("resize", mW), window.addEventListener("scroll", mW, !0), () => {
              EW.disconnect(), window.removeEventListener("resize", mW), window.removeEventListener("scroll", mW, !0)
            }
          }), [WW]), iW
        }(ZW),
        jW = (0, NW.useRef)(bW);
      jW.current = bW;
      const UW = cW(iW, bW, LW && iW.growOnClick ? lW : 1),
        kW = function(WW, iW, OW) {
          const mW = Math.round((WW.left + WW.width / 2) * OW - iW / 2),
            EW = Math.round((WW.top + WW.height / 2) * OW - iW / 2);
          return {
            x: mW / OW - WW.left,
            y: EW / OW - WW.top
          }
        }(AW, UW.cell, bW),
        sW = (0, PW.m)(iW.color),
        SW = (0, PW.m)(iW.outlineColor),
        TW = (0, NW.useRef)(0);
      (0, NW.useLayoutEffect)((() => {
        if (tW) return tW.current = WW => {
          var iW;
          TW.current = WW, null === (iW = ZW.current) || void 0 === iW || iW.querySelectorAll("[data-arm]").forEach((iW => {
            Object.assign(iW.style, YW(function(WW) {
              return {
                x: Number(WW.dataset.x),
                y: Number(WW.dataset.y),
                arm: WW.dataset.arm
              }
            }(iW), WW, jW.current))
          }))
        }, () => {
          tW.current = null
        }
      }), [tW]);
      const JW = null !== wW && void 0 !== wW ? wW : TW.current;
      return (0, xW.jsx)("div", {
        ref: ZW,
        className: EW()("CrosshairShapes", {
          CrosshairInPreview: OW,
          CrosshairInEditor: mW || OW,
          CrosshairSpreads: void 0 !== tW
        }),
        children: (0, xW.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: kW.x,
            top: kW.y,
            opacity: iW.opacity / 100
          },
          children: (0, xW.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [UW.ringOutline && (0, xW.jsx)("div", {
              className: "CrosshairRing",
              style: KW(UW.ringOutline, bW, SW)
            }), UW.outlines.map(((WW, iW) => (0, xW.jsx)("div", {
              className: "CrosshairPart",
              ...yW(WW),
              style: MW(WW, JW, bW, SW)
            }, `o${iW}`))), UW.ring && (0, xW.jsx)("div", {
              className: "CrosshairRing",
              style: KW(UW.ring, bW, sW)
            }), UW.fills.map(((WW, iW) => (0, xW.jsx)("div", {
              className: "CrosshairPart",
              ...yW(WW),
              style: MW(WW, JW, bW, sW)
            }, `f${iW}`)))]
          })
        })
      })
    }
  },
  35205: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      e: () => jW,
      h: () => bW
    });
    var mW = OW(35181);
    const EW = "XH1-",
      NW = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      PW = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      LW = ["color", "outlineColor"],
      cW = 1 + 3 * LW.length + PW.length + 1,
      wW = Math.ceil(8 * cW / Math.log2(62)),
      tW = EW.length + wW;

    function ZW(WW) {
      let iW = 90;
      for (const OW of WW) iW = 31 * iW + OW & 255;
      return iW
    }
    const xW = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      lW = BigInt(xW.length);

    function AW(WW, iW) {
      let OW = 0n;
      for (const EW of WW) {
        const WW = xW.indexOf(EW);
        if (WW < 0) return null;
        OW = OW * lW + BigInt(WW)
      }
      if (OW >> BigInt(8 * iW) !== 0n) return null;
      const mW = [];
      for (let EW = 0; EW < iW; EW++) mW.unshift(Number(0xffn & OW)), OW >>= 8n;
      return mW
    }

    function bW(WW) {
      let iW = "shapes" === WW.style ? 1 : 0;
      NW.forEach(((OW, mW) => {
        WW[OW] && (iW |= 1 << mW + 1)
      }));
      const OW = [iW];
      for (const EW of LW) {
        const iW = (0, mW.i)(EW, WW[EW]);
        OW.push(iW >> 16 & 255, iW >> 8 & 255, 255 & iW)
      }
      for (const EW of PW) {
        const {
          min: iW,
          step: NW
        } = mW.e[EW];
        OW.push(Math.round(((0, mW.i)(EW, WW[EW]) - iW) / NW))
      }
      return OW.push(ZW(OW)), EW + function(WW, iW) {
        let OW = 0n;
        for (const EW of WW) OW = OW << 8n | BigInt(EW);
        let mW = "";
        for (let EW = 0; EW < iW; EW++) mW = xW[Number(OW % lW)] + mW, OW /= lW;
        return mW
      }(OW, wW)
    }

    function jW(WW) {
      for (const iW of WW.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${wW}})`, "gi"))) {
        const WW = UW(AW(iW[1], cW));
        if (WW) return WW
      }
      return null
    }

    function UW(WW) {
      if (!WW || WW.length !== cW || ZW(WW.slice(0, -1)) !== WW[WW.length - 1]) return null;
      const iW = WW[0],
        OW = {
          ...mW.g,
          style: 1 & iW ? "shapes" : "classic"
        };
      NW.forEach(((WW, mW) => {
        OW[WW] = 0 !== (iW & 1 << mW + 1)
      }));
      let EW = 1;
      for (const mW of LW) OW[mW] = WW[EW] << 16 | WW[EW + 1] << 8 | WW[EW + 2], EW += 3;
      for (const NW of PW) {
        const {
          min: iW,
          step: PW
        } = mW.e[NW];
        OW[NW] = (0, mW.i)(NW, iW + WW[EW] * PW), EW++
      }
      return OW
    }
  },
  35181: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => PW,
      e: () => mW,
      g: () => EW,
      i: () => NW,
      m: () => wW,
      q: () => cW,
      t: () => tW,
      w: () => LW
    });
    const mW = {
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
      EW = Object.freeze({
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

    function NW(WW, iW) {
      var OW;
      const {
        min: NW,
        max: PW,
        step: LW
      } = mW[WW];
      if (!Number.isFinite(iW)) return EW[WW];
      const cW = (null !== (OW = String(LW).split(".")[1]) && void 0 !== OW ? OW : "").length,
        wW = Number((Math.round(iW / LW) * LW).toFixed(cW));
      return Math.min(PW, Math.max(NW, wW))
    }

    function PW(WW, iW, OW) {
      const mW = "number" === typeof OW ? NW(iW, OW) : OW;
      return {
        ...WW,
        [iW]: mW
      }
    }

    function LW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(EW).every((mW => OW.includes(mW) || WW[mW] === iW[mW]))
    }

    function cW(WW) {
      return LW(WW, EW)
    }

    function wW(WW) {
      return `#${WW.toString(16).padStart(6,"0")}`
    }

    function tW(WW) {
      const iW = /^#?([0-9a-f]{6})$/i.exec(WW.trim());
      return iW ? parseInt(iW[1], 16) : null
    }
  },
  35209: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ZW,
      g: () => xW
    });
    var mW = OW(62),
      EW = OW(39),
      NW = OW(35205),
      PW = OW(35181);
    const LW = "crosshairCode";
    let cW = null;
    const wW = new Set;

    function tW() {
      if (null === cW) {
        var WW;
        const iW = EW.i.getItem(LW);
        cW = null !== (WW = "string" === typeof iW ? (0, NW.e)(iW) : null) && void 0 !== WW ? WW : PW.g
      }
      return cW
    }

    function ZW(WW) {
      cW = WW, (0, PW.q)(WW) ? EW.i.removeItem(LW) : EW.i.setItem(LW, (0, NW.h)(WW));
      for (const iW of wW) iW()
    }

    function xW() {
      const [WW, iW] = (0, mW.useState)(tW);
      return (0, mW.useEffect)((() => {
        const WW = () => {
          iW(tW())
        };
        return WW(), OW = WW, wW.add(OW), () => {
          wW.delete(OW)
        };
        var OW
      }), []), WW
    }
  },
  10198: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      f: () => PW
    });
    var mW = OW(172);
    class EW {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(WW) || this.marks.set(WW, iW)
      }
      marked() {
        return mW.U.flatMap((WW => {
          var iW;
          const OW = null !== (iW = this.marks.get(WW)) && void 0 !== iW ? iW : NW.marks.get(WW);
          return void 0 === OW ? [] : [
            [WW, OW]
          ]
        }))
      }
    }
    const NW = new EW;

    function PW(WW) {
      NW.mark(WW)
    }
  },
  37898: (WW, iW, OW) => {
    function mW(WW, iW, OW, mW) {
      return !(OW && !WW.aimable) && (!iW || WW.gun && "head" !== mW)
    }

    function EW(WW) {
      return Math.max(.1 * WW, 1)
    }

    function NW(WW, iW) {
      return !WW && iW
    }
    OW.d(iW, {
      d: () => NW,
      f: () => EW,
      i: () => mW
    })
  },
  37902: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      h: () => PW
    });
    let mW = null;
    const EW = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      NW = {
        crosshairAccuracy: WW => {
          const iW = EW.crosshairAccuracy.at(-1);
          iW ? iW.hook(WW) : mW = WW
        },
        turnDamageIndicators: WW => {
          var iW;
          null === (iW = EW.turnDamageIndicators.at(-1)) || void 0 === iW || iW.hook(WW)
        },
        turnSoundCues: WW => {
          var iW;
          null === (iW = EW.turnSoundCues.at(-1)) || void 0 === iW || iW.hook(WW)
        }
      };

    function PW(WW, iW) {
      const OW = {
          hook: iW
        },
        PW = EW[WW];
      if (PW.push(OW), "crosshairAccuracy" === WW && null !== mW) {
        const WW = mW;
        mW = null, NW.crosshairAccuracy(WW)
      }
      return () => {
        const WW = PW.indexOf(OW); - 1 !== WW && PW.splice(WW, 1)
      }
    }

    function LW() {
      return NW
    }
  },
  35177: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      d: () => EW
    });
    var mW = OW(25);

    function EW(WW, iW) {
      return WW && !iW
    }

    function NW() {
      return EW(mW.d.get("isTouchScreen"), mW.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  9954: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => EW
    });
    let mW = null;
    const EW = function(WW) {
        const iW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return mW = iW, () => {
          mW === iW && (mW = null)
        }
      },
      NW = () => {
        var WW;
        return null !== (WW = mW) && void 0 !== WW && WW.canCycle() ? mW.cycle : null
      }
  },
  37575: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      d: () => cW,
      g: () => PW
    });
    var mW = OW(643),
      EW = OW(2365);

    function NW(WW) {
      return WW === (0, EW.h)().Av ? (0, EW.h)().Dv : WW
    }

    function PW(WW) {
      return !(0, mW.K)(WW) && NW(WW) === (0, EW.h)().Dv
    }
    const LW = "gravity";

    function cW() {
      return (0, EW.h)().physics[LW][1]
    }
  },
  37693: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      InGameUi: () => TW.b,
      LobbyLeaderboard: () => JW.e,
      loadCharacterCustomisationUI: () => hW,
      loadCharacterPreview: () => HW,
      matchmakeAndPlay: () => dW,
      matchmakeForAhead: () => LW.g,
      setUpGame: () => nW
    });
    var mW = OW(1239),
      EW = OW(154),
      NW = OW(25),
      PW = OW(37700),
      LW = OW(37705),
      cW = OW(2061),
      wW = OW(37730);

    function tW() {
      return !1 !== cW.d.get("canCustomiseChar")
    }
    let ZW = !1;
    var xW = OW(1351),
      lW = OW(5371),
      AW = OW(1244),
      bW = OW(232),
      jW = OW(4816),
      UW = OW(5368),
      kW = OW(10189);

    function sW() {
      return function(WW) {
        var iW;
        return !0 !== (null === WW || void 0 === WW ? void 0 : WW.saveData) && !/2g$/.test(null !== (iW = null === WW || void 0 === WW ? void 0 : WW.effectiveType) && void 0 !== iW ? iW : "")
      }(navigator.connection)
    }

    function MW() {
      return {
        joinStarted: UW.c,
        language: AW.e.get().getCurrentLanguageCode()
      }
    }

    function KW() {
      return new Promise((WW => {
        (0, lW.o)(WW)
      }))
    }

    function SW() {
      (0, UW.c)() || (0, kW.loadWasmPlayAhead)().catch((WW => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", WW)
      }))
    }
    var YW = OW(4653),
      yW = OW(773);
    var TW = OW(37743),
      JW = OW(38161);

    function hW() {
      return OW.e(251).then((() => OW(44895)))
    }

    function HW() {
      return OW.e(610).then((() => OW(44898)))
    }
    async function nW() {
      return await async function() {
        if ((0, lW.f)()) {
          if (sW()) try {
            await (0, lW.m)("wasm loads ahead");
            const WW = await (0, kW.importClientLoad)();
            await Promise.race([WW.startLoadAheadOfJoin(MW()), KW()]), await (0, lW.m)("wasm previews");
            const {
              pagePreviews: iW
            } = await Promise.all([OW.e(177), OW.e(91), OW.e(224), OW.e(158), OW.e(245), OW.e(244), OW.e(243), OW.e(222), OW.e(50), OW.e(161), OW.e(242), OW.e(72)]).then((() => OW(44911)));
            iW().prefetch((0, lW.f)() ? lW.m : void 0)
          } catch (WW) {
            console.warn("[bloxd-wasm-client] the previews' loads ahead of need did not start: the open loads them itself", WW)
          }
          await KW()
        }
      }(), (0, kW.loadWasmPreviews)()
    }
    ZW || (ZW = !0, document.addEventListener("keydown", (WW => {
      (0, wW.b)(WW, tW)
    }))), sW() && (0, jW.e)((() => {
      (0, UW.c)() || (0, kW.importClientLoad)().then((async WW => {
        if ((0, UW.c)()) return;
        const iW = WW.startLoadAheadOfJoin(MW());
        (0, bW.d)((() => {
          (0, UW.c)() || WW.probeWebgl2AheadOfJoin()
        })), await iW, (0, bW.d)(SW)
      }), (WW => {
        console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", WW)
      }))
    }));
    const uW = NW.d.get("router");
    null === uW ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function WW(iW) {
      if ((0, yW.d)(iW.state.location.pathname)) return void(0, kW.loadWasmPlay)().catch((() => {}));
      const OW = iW.subscribe((mW => {
        (0, yW.d)(mW.location.pathname) && (OW(), (0, YW.c)().then((() => {
          WW(iW)
        })))
      }))
    }(uW), (0, PW.d)();
    const oW = (0, LW.d)((async function(WW, iW) {
      let {
        place: OW,
        userContext: NW,
        direct: PW,
        matchedAt: LW,
        rematch: cW
      } = WW;
      const wW = PW ? 1 / 0 : LW;
      let tW;
      try {
        tW = await (0, kW.loadWasmPlay)()
      } catch (ZW) {
        return console.error("The wasm client did not load:", ZW), (0, xW.r)({
          websocketUrl: null
        }), mW.b.errorWithCode(String(ZW), EW.k.CONNECT_TO_GAME_SERVER, {
          error: ZW,
          severity: iW.aborted ? "low" : "medium",
          uW: iW.aborted
        })
      }
      return tW.playWasmGame({
        userContext: NW,
        place: OW,
        matchedAt: wW,
        rematch: cW
      }, iW)
    }));

    function dW() {
      return (0, kW.loadWasmPlay)().catch((() => {})), oW(...arguments)
    }
  },
  10189: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      importClientLoad: () => ZW,
      loadWasmPlay: () => AW,
      loadWasmPlayAhead: () => bW,
      loadWasmPreviews: () => jW
    });
    var mW = OW(4337),
      EW = OW(3153),
      NW = OW(2283),
      PW = OW(5348),
      LW = OW(4746),
      cW = OW(5368),
      wW = OW(10198);
    let tW = null;

    function ZW() {
      return Promise.all([OW.e(91), OW.e(105), OW.e(240), OW.e(158), OW.e(244), OW.e(161), OW.e(255), OW.e(71)]).then((() => OW(42198)))
    }

    function xW() {
      return Promise.all([OW.e(88), OW.e(91), OW.e(105), OW.e(240), OW.e(158), OW.e(244), OW.e(222), OW.e(161), OW.e(250), OW.e(242), OW.e(103), OW.e(246), OW.e(255), OW.e(76)]).then((() => OW(42371)))
    }

    function lW() {
      Promise.all([OW.e(85), OW.e(89), OW.e(86), OW.e(87), OW.e(88), OW.e(105), OW.e(102), OW.e(306), OW.e(127), OW.e(280), OW.e(254), OW.e(246), OW.e(55)]).then((() => OW(42495))).catch((() => {}))
    }

    function AW() {
      return PW.b.cancelDownloadForJoin(), (0, LW.c)(), (0, EW.c)(), (0, cW.g)(), (0, NW.h)(), lW(), ZW().then((WW => {
        let {
          startJoinLoad: iW
        } = WW;
        iW()
      }), (() => {})), tW ??= xW().then((WW => ((0, wW.f)("phase_chunk"), WW.startWasmPlay(), (0, wW.f)("phase_start"), WW.followPageUiPack((WW => {
        mW.d.showGamePack(WW)
      })), WW)), (WW => {
        throw tW = null, WW
      })), tW
    }

    function bW() {
      return lW(), OW.e(132).then((() => OW(42537))).catch((() => {})), xW().then((() => {
        (0, wW.f)("phase_chunk")
      }))
    }

    function jW() {
      return xW().then((WW => {
        WW.startWasmPreviews(), WW.prefetchWasmPreviews()
      }))
    }
  },
  37555: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => yW
    });
    var mW = OW(37559),
      EW = OW(182),
      NW = OW(5615),
      PW = OW(37563),
      LW = OW(37569),
      cW = OW(37626),
      wW = OW(37575),
      tW = OW(352),
      ZW = OW.n(tW),
      xW = OW(2365),
      lW = OW(37618),
      AW = OW(27),
      bW = OW(25),
      jW = OW(37583),
      UW = OW(37588),
      kW = OW(37590),
      sW = OW(37597),
      MW = OW(37609);
    const KW = new Set(["note"]);
    const SW = {
      stop: () => SW,
      fade: () => SW,
      rate: () => SW,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => SW,
      setPannerAttr: () => SW,
      setPosition: () => SW
    };
    class YW {
      constructor(WW) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new cW.j, this._howl = (0, LW.countDecodesAs)(new NW.Howl({
          src: [...(0, mW.u)(WW).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = this._howl.play(PW.d);
        WW && this._howl.loop(!0, iW);
        let OW = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), iW);
        const mW = {
          stop: () => {
            var WW;
            return null === (WW = this.liveHowl()) || void 0 === WW || WW.stop(iW), mW
          },
          fade: (WW, OW, EW) => {
            var NW;
            return null === (NW = this.liveHowl()) || void 0 === NW || NW.fade(WW, OW, EW, iW), mW
          },
          rate: WW => {
            var OW;
            return null === (OW = this.liveHowl()) || void 0 === OW || OW.rate(WW, iW), mW
          },
          stopsAtOnce: () => this._howl.playing(iW) && !this._howl._playLock,
          isAlive: () => {
            const WW = this._howl._soundById(iW);
            return !this._loadFailed && !!WW && !WW._ended
          },
          getDurationMs: () => this._howl._soundById(iW) ? 1e3 * this._howl.duration(iW) / this._howl.rate(iW) : 0,
          getVolume: () => OW * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => OW,
          setRelativeVolume: WW => {
            var EW;
            if (WW > 1) throw new Error("Volume should be <= 1");
            return OW = bW.d.get("soundOnFromAd") ? WW : 0, null === (EW = this.liveHowl()) || void 0 === EW || EW.volume(Math.min(1, OW * this._volumeMultiplier.getTotalMultipliedVal()), iW), mW
          },
          setPannerAttr: WW => {
            let {
              coneInnerAngle: OW,
              coneOuterAngle: EW = 360,
              coneOuterGain: NW,
              distanceModel: PW,
              maxDistance: LW,
              panningModel: cW,
              refDistance: wW,
              rolloffFactor: tW
            } = WW;
            return this._setPannerAttr({
              id: iW,
              coneInnerAngle: OW,
              coneOuterAngle: EW,
              coneOuterGain: NW,
              distanceModel: PW,
              maxDistance: LW,
              panningModel: cW,
              refDistance: wW,
              rolloffFactor: tW
            }), mW
          },
          setPosition: WW => {
            var OW;
            return null === (OW = this.liveHowl()) || void 0 === OW || OW.pos(WW[2], WW[1], WW[0], iW), mW
          }
        };
        return mW
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, PW.f)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(WW) {
        this._volumeMultiplier.setMultiplierType("globalVolume", WW), this._howl.volume(WW)
      }
      _setPannerAttr(WW) {
        let {
          id: iW,
          coneInnerAngle: OW = 360,
          coneOuterAngle: mW = 360,
          coneOuterGain: EW = 0,
          distanceModel: NW = "inverse",
          maxDistance: PW = 1e3,
          panningModel: LW = "HRTF",
          refDistance: cW = lW.g,
          rolloffFactor: wW = 1
        } = WW;
        const tW = this.liveHowl();
        if (null === tW) return;
        tW.pannerAttr({
          coneOuterAngle: mW
        }, iW);
        const ZW = {
          coneInnerAngle: OW,
          coneOuterAngle: mW,
          coneOuterGain: EW,
          distanceModel: NW,
          maxDistance: PW,
          panningModel: LW,
          refDistance: cW,
          rolloffFactor: wW
        };
        tW.pannerAttr(ZW, iW)
      }
    }
    const yW = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new jW.c, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, AW.l.subscribe("appManagerUpdated|soundVolume", (WW => {
          const iW = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const OW of iW) OW.setGlobalVolume(WW)
        }))
      }
      play(WW, iW) {
        var OW;
        let NW, PW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (OW = (0, xW.h)()) || void 0 === OW ? void 0 : OW.Dv,
          LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lW.f,
          cW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lW.g,
          tW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var AW;
        (0, xW.h)() ? NW = !!Array.isArray(PW) || (0, wW.b)(PW) !== (null === (AW = (0, xW.h)()) || void 0 === AW ? void 0 : AW.Dv): NW = !1;
        const bW = (0, mW.n)(WW),
          UW = this.loadSound(NW ? this.spatialSounds : this.stereoSounds, WW);
        if (!NW) {
          const WW = UW.play(tW);
          return WW.setRelativeVolume(iW), WW
        }
        const kW = (0, xW.h)(),
          sW = Array.isArray(PW) ? PW : kW.EY.Vk(PW),
          YW = kW.EY.Vk(kW.Dv);
        if (!sW || ZW().sqrDist(sW, YW) > LW * LW) return SW;
        let yW;
        if (!tW) {
          if (!this.spatialVoices.admit({
              group: KW.has(bW) ? null : (0, jW.f)(WW),
              loudness: (0, jW.d)(iW, ZW().TP(sW, YW), cW),
              startMs: performance.now(),
              getDurationMs: () => {
                var WW, iW;
                return null !== (WW = null === (iW = yW) || void 0 === iW ? void 0 : iW.getDurationMs()) && void 0 !== WW ? WW : 0
              },
              isAlive: () => {
                var WW, iW;
                return null !== (WW = null === (iW = yW) || void 0 === iW ? void 0 : iW.isAlive()) && void 0 !== WW && WW
              },
              canStop: () => {
                var WW, iW;
                return null !== (WW = null === (iW = yW) || void 0 === iW ? void 0 : iW.stopsAtOnce()) && void 0 !== WW && WW
              },
              stop: () => {
                var WW;
                null === (WW = yW) || void 0 === WW || WW.stop()
              }
            })) return SW
        }
        return yW = UW.play(tW), yW.setRelativeVolume(iW), yW.setPannerAttr({
          refDistance: cW
        }), yW.setPosition([sW[0], sW[1] + EW.f.ZU * EW.f.playerEyeToHeightRatio, sW[2]]), !tW && (0, MW.h)() && (0, MW.e)(bW, WW, sW[0] - YW[0], sW[2] - YW[2]), yW
      }
      preload(WW) {
        const iW = (0, mW.s)(WW) ? [WW] : (0, mW.x)(WW);
        if (0 === iW.length) throw new Error(`Invalid sound name ${WW} (no sound has it or starts with it)`);
        for (const OW of iW) this.loadSound(this.stereoSounds, OW)
      }
      preloadAtIdle(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sW.c;
        const OW = WW.filter((WW => !this.idlePreloads.has(WW)));
        for (const EW of OW) this.idlePreloads.add(EW);
        const mW = this.idlePreloadGeneration;
        (0, kW.c)(OW, {
          ...iW,
          uW: () => mW !== this.idlePreloadGeneration,
          fetchFile: WW => {
            this.idlePreloads.delete(WW);
            try {
              return this.preload(WW), Promise.resolve()
            } catch (iW) {
              return Promise.reject(iW)
            }
          }
        })
      }
      loadSound(WW, iW) {
        const OW = WW[iW];
        if (OW) return OW;
        const EW = this.makeSound(WW, iW);
        for (const PW of null !== (NW = (0, mW.t)(iW)) && void 0 !== NW ? NW : []) {
          var NW;
          WW[PW] || this.makeSound(WW, PW)
        }
        return EW
      }
      makeSound(WW, iW) {
        (0, sW.e)(iW);
        const OW = new YW(iW);
        return OW.setGlobalVolume(bW.d.get("soundVolume")), WW[iW] = OW, OW
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const WW of [this.stereoSounds, this.spatialSounds])
          for (const [iW, OW] of Object.entries(WW)) !UW.e.has((0, mW.n)(iW)) && OW.loaded() && (OW.unloadOnceIdle(), delete WW[iW])
      }
    }
  },
  37369: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => SW,
      h: () => hW,
      k: () => HW,
      o: () => nW
    });
    var mW = OW(37371),
      EW = OW(7912),
      NW = OW(7998),
      PW = OW(37373),
      LW = OW(37375),
      cW = OW(37380),
      wW = OW(8308),
      tW = OW(8437),
      ZW = OW(37383),
      xW = OW(8647),
      lW = OW(7787),
      AW = OW(8930),
      bW = OW(37389),
      jW = OW(37398),
      UW = OW(8956),
      kW = OW(37403),
      sW = OW(37410),
      MW = OW(344);
    const KW = {
        redTeam: NW.d,
        blueTeam: jW.f,
        greenTeam: sW.g,
        yellowTeam: UW.f,
        cyanTeam: cW.e,
        whiteTeam: lW.faPlus,
        pinkTeam: tW.h,
        grayTeam: ZW.f,
        blackTeam: bW.g,
        orangeTeam: kW.g,
        lilacTeam: PW.f,
        purpleTeam: xW.f,
        magentaTeam: LW.g,
        brownTeam: mW.i,
        limeTeam: EW.faBolt,
        lightGrayTeam: wW.d,
        lightBlueTeam: AW.f
      },
      SW = Object.fromEntries(Object.values(KW).map((WW => [YW(WW), WW])));

    function YW(WW) {
      return `team-${WW.iconName}`
    }
    const yW = new Map;
    for (const [uW, oW] of Object.entries(KW)) {
      const WW = YW(oW),
        iW = MW.M[uW];
      iW && yW.set(iW.toLowerCase(), {
        icon: WW,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let TW = !1;
    const JW = new Set;

    function hW(WW) {
      if (WW !== TW) {
        TW = WW;
        for (const WW of JW) WW()
      }
    }

    function HW(WW) {
      var iW;
      return "string" === typeof WW && TW && null !== (iW = yW.get(WW.toLowerCase())) && void 0 !== iW ? iW : null
    }

    function nW(WW) {
      return JW.add(WW), () => {
        JW.delete(WW)
      }
    }
  },
  37423: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => ZW,
      B: () => bW,
      D: () => jW,
      F: () => UW,
      G: () => sW,
      d: () => EW,
      g: () => lW,
      k: () => PW,
      m: () => AW,
      o: () => kW,
      s: () => xW,
      t: () => MW,
      u: () => NW,
      x: () => tW
    });
    var mW = OW(2012);
    const EW = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];

    function NW(WW) {
      return (0, mW.r)(WW.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function PW(WW, iW) {
      const {
        numLines: OW,
        charsPerLine: mW
      } = EW[iW];
      return KW(WW, OW, mW, !1)
    }
    const LW = 7 / 8,
      cW = .25,
      wW = 8;

    function tW(WW, iW) {
      return {
        width: Math.min(WW, wW) - 2 * cW,
        height: Math.min(iW, wW) - 2 * cW
      }
    }

    function ZW(WW, iW, OW) {
      const mW = tW(WW, iW),
        {
          numLines: NW,
          charsPerLine: PW
        } = EW[OW];
      return {
        numLines: Math.max(1, Math.floor(NW / LW * mW.height)),
        charsPerLine: Math.max(1, Math.floor(PW * mW.width))
      }
    }

    function xW(WW, iW, OW, mW) {
      const {
        numLines: EW,
        charsPerLine: NW
      } = ZW(OW, mW, iW);
      return KW(WW, EW, NW, !1)
    }
    const lW = 32e3;

    function AW(WW) {
      return WW.slice(0, lW)
    }
    const bW = 512e3,
      jW = 64,
      UW = bW;

    function kW(WW, iW) {
      const OW = Math.max(0, UW - iW),
        mW = Math.min(bW, OW);
      return WW.slice(0, mW)
    }
    const sW = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      kt: {
        numLines: 1,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nameTag: {
        numLines: 1,
        charsPerLine: 13,
        uiFontSize: 4.6
      }
    };

    function MW(WW, iW) {
      const {
        numLines: OW,
        charsPerLine: mW
      } = sW[iW];
      return KW(WW, OW, mW, !1)
    }

    function KW(WW, iW, OW, mW, EW) {
      (EW || mW) && (WW = WW.slice(0, null !== EW && void 0 !== EW ? EW : iW * OW));
      const NW = WW.split("\n");
      if (NW.length > iW && NW.splice(iW, NW.length - iW), !mW)
        for (let PW = 0; PW < NW.length; PW++) {
          const WW = NW[PW];
          WW.length > OW && (NW[PW] = WW.substring(0, OW), NW.length < iW && NW.splice(PW + 1, 0, WW.substring(OW)))
        }
      return NW.join("\n")
    }
  },
  37992: (WW, iW, OW) => {
    function mW(WW, iW) {
      var OW, mW, EW, NW, PW, LW, cW, wW;
      return WW.name === iW.name && ((null === (OW = WW.attributes) || void 0 === OW || null === (mW = OW.customAttributes) || void 0 === mW ? void 0 : mW.stackKey) === (null === (EW = iW.attributes) || void 0 === EW || null === (NW = EW.customAttributes) || void 0 === NW ? void 0 : NW.stackKey) && (!0 !== (null === (PW = WW.attributes) || void 0 === PW || null === (LW = PW.customAttributes) || void 0 === LW ? void 0 : LW.unstackable) && !0 !== (null === (cW = iW.attributes) || void 0 === cW || null === (wW = cW.customAttributes) || void 0 === wW ? void 0 : wW.unstackable)))
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  5807: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      f: () => NW
    });
    var mW = OW(5766);
    const EW = "Air",
      NW = Object.freeze(new mW.h(EW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38097: (WW, iW, OW) => {
    function mW(WW) {
      return WW.includes("Leaf Bed")
    }

    function EW(WW) {
      return / Bed(?: Head)?(?:\||$)/.test(WW) && !mW(WW)
    }

    function NW(WW) {
      return WW.includes(" Strongbed")
    }

    function PW(WW) {
      return mW(WW) || EW(WW) || NW(WW)
    }
    OW.d(iW, {
      d: () => PW,
      f: () => mW,
      j: () => NW,
      l: () => EW
    })
  },
  38088: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => wW
    });
    var mW = OW(38097),
      EW = OW(5725);
    const NW = [],
      PW = [],
      LW = [],
      cW = [];
    for (const tW of Object.keys(EW.p))(0, mW.f)(tW) ? NW.push(tW) : (0, mW.l)(tW) && PW.push(tW), (0, mW.j)(tW) && LW.push(tW), (tW.includes(" Bed Head") || tW.includes(" Strongbed Head")) && cW.push(tW);
    const wW = {
      leafBeds: NW,
      woolBeds: PW,
      strongBeds: LW,
      beds: [...NW, ...PW, ...LW],
      bedHeads: cW,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7453: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      f: () => EW,
      g: () => cW,
      k: () => NW,
      m: () => wW,
      p: () => mW,
      s: () => LW
    });
    let mW = function(WW) {
        return WW[WW.DEFAULT = 0] = "DEFAULT", WW[WW.BOAT = 1] = "BOAT", WW[WW.GLIDER = 2] = "GLIDER", WW[WW.BALLOON = 3] = "BALLOON", WW[WW.SLEEPING = 4] = "SLEEPING", WW[WW.RIDING_MOB = 5] = "RIDING_MOB", WW[WW.CAR = 6] = "CAR", WW[WW.HOVERCRAFT = 7] = "HOVERCRAFT", WW
      }({}),
      EW = function(WW) {
        return WW[WW.WOOD = 0] = "WOOD", WW[WW.OBSIDIAN = 1] = "OBSIDIAN", WW[WW.SPEED = 2] = "SPEED", WW
      }({}),
      NW = function(WW) {
        return WW[WW.WOOD = 0] = "WOOD", WW[WW.IRON = 1] = "IRON", WW[WW.GOLD = 2] = "GOLD", WW[WW.DIAMOND = 3] = "DIAMOND", WW
      }({}),
      PW = function(WW) {
        return WW[WW.YELLOW = 0] = "YELLOW", WW[WW.WHITE = 1] = "WHITE", WW[WW.RED = 2] = "RED", WW[WW.PURPLE = 3] = "PURPLE", WW[WW.PINK = 4] = "PINK", WW[WW.ORANGE = 5] = "ORANGE", WW[WW.MAGENTA = 6] = "MAGENTA", WW[WW.LIME = 7] = "LIME", WW[WW.LIGHT_GRAY = 8] = "LIGHT_GRAY", WW[WW.LIGHT_BLUE = 9] = "LIGHT_BLUE", WW[WW.GREEN = 10] = "GREEN", WW[WW.GRAY = 11] = "GRAY", WW[WW.CYAN = 12] = "CYAN", WW[WW.BROWN = 13] = "BROWN", WW[WW.BLUE = 14] = "BLUE", WW[WW.BLACK = 15] = "BLACK", WW
      }({}),
      LW = function(WW) {
        return WW[WW.ROTATION_1 = 0] = "ROTATION_1", WW[WW.ROTATION_2 = 1] = "ROTATION_2", WW[WW.ROTATION_3 = 2] = "ROTATION_3", WW[WW.ROTATION_4 = 3] = "ROTATION_4", WW
      }({}),
      cW = function(WW) {
        return WW[WW.KART = 0] = "KART", WW[WW.OFF_ROADER = 1] = "OFF_ROADER", WW[WW.CAR = 2] = "CAR", WW[WW.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", WW[WW.ARMORED_CAR = 4] = "ARMORED_CAR", WW[WW.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", WW[WW.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", WW[WW.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", WW
      }({});
    mW.DEFAULT, mW.BOAT, EW.SPEED, mW.GLIDER, NW.DIAMOND, mW.BALLOON, PW.BLACK, mW.SLEEPING, LW.ROTATION_4, mW.RIDING_MOB, mW.CAR, cW.MOONSTONE_MINING_DRILL, mW.HOVERCRAFT;
    let wW = function(WW) {
      return WW[WW.NORMAL = 0] = "NORMAL", WW[WW.GLIDING = 1] = "GLIDING", WW[WW.FLOATING = 2] = "FLOATING", WW
    }({})
  },
  35198: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);