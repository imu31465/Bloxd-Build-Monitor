export const id = 75;
export const ids = [75, 186];
export const modules = {
  37796: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => LR,
      d: () => nR,
      g: () => wR,
      j: () => KR
    });
    var yR = GR(35140),
      tR = GR(3494),
      uR = GR(3498),
      ZR = GR(10048),
      qR = GR(1581),
      iR = GR(66),
      fR = GR(83),
      VR = GR(1378);

    function KR() {
      var RR;
      return (0, qR.h)(tR.e, (0, tR.r)()), (0, VR.jsx)(VR.Fragment, {
        children: null === (RR = (0, tR.r)()) || void 0 === RR ? void 0 : RR.content
      })
    }

    function wR(RR) {
      var JR;
      let {
        show: GR
      } = RR;
      (0, qR.h)(tR.e, (0, tR.r)());
      const fR = null === (JR = (0, tR.r)()) || void 0 === JR ? void 0 : JR.menu;
      return (0, iR.useEffect)((() => {
        var RR;
        GR || (null === fR || void 0 === fR || null === (RR = fR.onClose) || void 0 === RR || RR.call(fR), (0, uR.m)())
      }), [GR, fR]), (0, iR.useEffect)((() => GR ? (0, ZR.e)(uR.q, uR.e) : void 0), [GR]), (0, VR.jsx)(yR.b, {
        showing: GR,
        globallyUniqueKey: "clientGameMenu",
        children: null === fR || void 0 === fR ? void 0 : fR.content
      })
    }
    const rR = new Map,
      eR = new Set;

    function aR(RR, JR) {
      JR ? rR.set(RR, JR) : rR.delete(RR);
      for (const GR of eR) GR()
    }

    function LR(RR) {
      let {
        placement: JR = "bottom"
      } = RR;
      const GR = (0, iR.useRef)(null);
      return (0, iR.useLayoutEffect)((() => {
        const RR = GR.current;
        return aR(JR, RR), () => {
          rR.get(JR) === RR && aR(JR, null)
        }
      }), [JR]), (0, VR.jsx)("div", {
        ref: GR,
        id: `clientGameHud-${JR}`,
        style: {
          display: "contents"
        }
      })
    }

    function nR(RR) {
      let {
        children: JR,
        placement: GR = "bottom"
      } = RR;
      const [yR, tR] = (0, iR.useState)((() => {
        var RR;
        return null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null
      }));
      return (0, iR.useEffect)((() => {
        const RR = () => {
          var RR;
          tR(null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null)
        };
        return eR.add(RR), RR(), () => {
          eR.delete(RR)
        }
      }), [GR]), yR ? (0, fR.createPortal)(JR, yR) : null
    }
  },
  37817: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => aR,
      f: () => XR
    });
    GR(35113);
    var yR = GR(66),
      tR = GR(1581),
      uR = GR(2134),
      ZR = GR(2173),
      qR = GR(25),
      iR = GR(3465),
      fR = GR(37820),
      VR = GR(37829),
      KR = GR(35099),
      wR = GR(35111),
      rR = GR(35124),
      eR = GR(1378);
    const aR = (0, yR.memo)((function() {
      var RR;
      const {
        isTouchScreen: JR,
        clientEscMenuOptions: GR,
        scriptedCameraFacing: uR,
        crosshairShownOverride: aR,
        crosshairGameView: nR
      } = (0, qR.o)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), UR = (0, iR.f)("gunshotOrigin"), WR = (0, yR.useRef)(null), AR = (0, yR.useRef)(!1), [CR, MR] = (0, yR.useState)(LR);
      (0, tR.f)("cameraZoomSet", MR), (0, yR.useEffect)((() => {
        MR(LR())
      }), []);
      const BR = (0, ZR.i)("heldItemAim"),
        pR = BR.gun,
        gR = (0, rR.f)(),
        bR = (0, yR.useRef)(gR);
      bR.current = gR;
      const [vR, OR] = (0, yR.useState)(!1);
      (0, yR.useEffect)((() => (0, VR.e)("crosshairAccuracy", XR)), []), (0, tR.f)("mouseState", (RR => {
        let {
          isDown: JR
        } = RR;
        AR.current = JR, WR.current && (WR.current.style.transform = (0, wR.e)(JR, bR.current.growOnClick)), "shapes" === bR.current.style && OR(JR)
      }));
      const xR = (0, KR.i)(JR, GR.touchActionButtons);
      return (null !== (RR = (0, fR.e)(nR, aR)) && void 0 !== RR ? RR : (0, fR.h)(BR, CR > 1, xR, UR)) ? "movement" === uR || "cursor" === uR ? null : (0, eR.jsxs)(eR.Fragment, {
        children: [pR && (0, eR.jsx)(lR, {
          custom: gR.forGuns && "shapes" === gR.style ? gR : null,
          touch: JR
        }), !pR && (0, eR.jsx)(wR.d, {
          settings: gR,
          touch: JR,
          pressRef: WR,
          pressed: "shapes" === gR.style ? vR : AR.current
        })]
      }) : null
    }));

    function LR() {
      return uR.gameBridge.lookup("cameraZoom", null)
    }
    const nR = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      UR = {
        current: null
      },
      WR = {
        current: null
      };
    let AR = 0,
      CR = 0;

    function XR(RR) {
      CR = RR, nR[0].current || UR.current || WR.current ? BR(RR) : AR = RR
    }

    function MR(RR) {
      return ((0, fR.g)(RR) - (0, fR.g)(0)) * window.innerHeight / 100
    }

    function BR(RR) {
      var JR;
      if (null === (JR = WR.current) || void 0 === JR || JR.call(WR, MR(RR)), nR[0].current) {
        const JR = `${(0,fR.g)(RR)}vh`;
        nR[0].current.style.transform = `translateX(calc(0px - ${JR}))`, nR[1].current.style.transform = `translateX(calc(0px + ${JR}))`, nR[2].current.style.transform = `translateY(calc(0px - ${JR}))`, nR[3].current.style.transform = `translateY(calc(0px + ${JR}))`
      }
      UR.current && (UR.current.style.filter = `blur(${Math.round(RR/10)}px)`)
    }

    function lR(RR) {
      let {
        custom: JR,
        touch: GR
      } = RR;
      const uR = (0, tR.h)("aimingOverlay", "none"),
        ZR = "1.2vh",
        qR = "0.3vh";
      (0, yR.useEffect)((() => {
        AR && BR(AR)
      }), []);
      const iR = (0, yR.useRef)(null !== JR);
      return (0, yR.useLayoutEffect)((() => {
        var RR;
        JR ? null === (RR = WR.current) || void 0 === RR || RR.call(WR, MR(CR)) : iR.current && BR(CR);
        iR.current = null !== JR
      }), [JR]), (0, eR.jsxs)(eR.Fragment, {
        children: ["sniper" === uR && (0, eR.jsxs)("div", {
          ref: UR,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, eR.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, eR.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, eR.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, eR.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, eR.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === uR ? 0 : 1
          },
          children: [JR && (0, eR.jsx)(wR.d, {
            settings: JR,
            touch: GR,
            spreadRef: WR
          }), !JR && (0, eR.jsxs)(eR.Fragment, {
            children: [(0, eR.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: ZR,
                height: qR,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: nR[0]
            }), (0, eR.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: ZR,
                height: qR,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: nR[1]
            }), (0, eR.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: qR,
                height: ZR,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: nR[2]
            }), (0, eR.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: qR,
                height: ZR,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: nR[3]
            })]
          })]
        })]
      })
    }
  },
  35140: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(5343),
      tR = GR(5347);

    function uR(RR) {
      let {
        children: JR,
        showing: GR,
        globallyUniqueKey: uR,
        alwaysMountChildren: ZR = !1,
        doGameplayStartStopOnShow: qR = !0,
        keepsMovement: iR = !1
      } = RR;
      return (0, tR.d)(!0, GR, uR, iR), (0, yR.d)(qR, GR), GR || ZR ? JR : null
    }
  },
  35111: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => aR,
      e: () => eR
    });
    GR(35113);
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(66),
      ZR = GR(35106);

    function qR(RR, JR) {
      return Math.max(1, Math.round(RR * JR))
    }

    function iR(RR, JR) {
      const GR = JR * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        yR = function(RR, JR) {
          if (RR.lines) return qR(RR.lineThickness, JR) % 2;
          if (RR.dot) return qR(RR.dotSize, JR) % 2;
          return fR(RR, JR) % 2
        }(RR, JR),
        tR = VR(RR.lineThickness * GR, yR),
        uR = qR(RR.lineLength, GR),
        ZR = Math.round(RR.gap * GR),
        iR = RR.outline > 0 ? qR(RR.outline, GR) : 0,
        wR = [];
      if (RR.lines && (wR.push({
          x: tR + ZR,
          y: 0,
          w: uR,
          h: tR,
          arm: "right"
        }), wR.push({
          x: -ZR - uR,
          y: 0,
          w: uR,
          h: tR,
          arm: "left"
        }), wR.push({
          x: 0,
          y: tR + ZR,
          w: tR,
          h: uR,
          arm: "down"
        }), RR.tStyle || wR.push({
          x: 0,
          y: -ZR - uR,
          w: tR,
          h: uR,
          arm: "up"
        }), 0 === ZR && wR.push({
          x: 0,
          y: 0,
          w: tR,
          h: tR
        })), RR.dot) {
        const JR = VR(RR.dotSize * GR, yR),
          uR = RR.lines && 0 === ZR && RR.dotSize > RR.lineThickness ? Math.max(JR, tR + 2) : JR,
          qR = (tR - uR) / 2;
        wR.push({
          x: qR,
          y: qR,
          w: uR,
          h: uR
        })
      }
      const rR = wR.map((RR => ({
        ...RR,
        x: RR.x - iR,
        y: RR.y - iR,
        w: RR.w + 2 * iR,
        h: RR.h + 2 * iR
      })));
      let eR = null,
        aR = null;
      if (RR.circle) {
        const JR = qR(RR.circleThickness, GR),
          uR = function(RR, JR) {
            return RR + (RR % 2 === JR ? 0 : 1)
          }(fR(RR, GR), yR),
          ZR = (tR - uR) / 2;
        eR = KR(ZR, uR, JR), iR > 0 && (aR = KR(ZR - iR, uR + 2 * iR, JR + 2 * iR))
      }
      return {
        cell: tR,
        fills: wR,
        outlines: iR > 0 ? rR : [],
        ring: eR,
        ringOutline: aR
      }
    }

    function fR(RR, JR) {
      return Math.round(RR.circleRadius * JR * 2 + qR(RR.circleThickness, JR))
    }

    function VR(RR, JR) {
      return Math.max(2 - JR, 2 * Math.round((RR - JR) / 2) + JR)
    }

    function KR(RR, JR, GR) {
      const yR = 2 * GR >= JR - 1;
      return {
        x: RR,
        y: RR,
        size: JR,
        border: Math.min(GR, Math.floor(JR / 2)),
        filled: yR
      }
    }
    var wR = GR(1378);
    const rR = 1.4;

    function eR(RR, JR) {
      return RR && JR ? `scale(${rR})` : "scale(1)"
    }

    function aR(RR) {
      return "classic" === RR.settings.style ? (0, wR.jsx)(UR, {
        ...RR
      }) : (0, wR.jsx)(lR, {
        ...RR
      })
    }
    const LR = .125;

    function nR(RR, JR) {
      const GR = {};
      if (RR.color !== ZR.e.color && (GR.color = (0, ZR.j)(RR.color)), RR.opacity !== ZR.e.opacity && (GR.opacity = RR.opacity / 100), RR.outline !== ZR.e.outline || RR.outlineColor !== ZR.e.outlineColor) {
        const JR = RR.outline,
          yR = (0, ZR.j)(RR.outlineColor);
        GR.textShadow = JR > 0 ? `-${JR}px 0 ${yR}, 0 ${JR}px ${yR}, ${JR}px 0 ${yR}, 0 -${JR}px ${yR}` : "none"
      }
      if (RR.size !== ZR.e.size) {
        const yR = RR.size / 100;
        GR.fontSize = JR ? `calc(max(1.3rem, 18px) * ${yR})` : `calc(1.3rem * ${yR})`, GR.marginTop = `-${LR}em`, GR.transformOrigin = `50% calc(50% + ${LR}em)`
      }
      return GR
    }

    function UR(RR) {
      let {
        settings: JR,
        touch: GR,
        inPreview: yR,
        inEditor: uR,
        pressed: ZR = !1,
        pressRef: qR
      } = RR;
      return (0, wR.jsx)("div", {
        className: tR()("Crosshair", {
          Touch: GR,
          CrosshairInPreview: yR,
          CrosshairInEditor: uR || yR
        }),
        ref: qR,
        style: {
          transform: eR(ZR, JR.growOnClick),
          ...nR(JR, GR)
        },
        children: "+"
      })
    }

    function WR(RR, JR) {
      return RR / JR + "px"
    }

    function AR(RR, JR, GR, yR) {
      return {
        ...MR(RR, JR, GR),
        width: WR(RR.w, GR),
        height: WR(RR.h, GR),
        background: yR
      }
    }

    function CR(RR, JR, GR) {
      return {
        left: WR(RR.x, JR),
        top: WR(RR.y, JR),
        width: WR(RR.size, JR),
        height: WR(RR.size, JR),
        borderWidth: WR(RR.border, JR),
        borderColor: GR,
        background: RR.filled ? GR : void 0
      }
    }
    const XR = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function MR(RR, JR, GR) {
      const [yR, tR] = RR.arm ? XR[RR.arm] : [0, 0], uR = Math.round(JR * GR);
      return {
        left: WR(RR.x + yR * uR, GR),
        top: WR(RR.y + tR * uR, GR)
      }
    }

    function BR(RR) {
      return RR.arm ? {
        "data-arm": RR.arm,
        "data-x": RR.x,
        "data-y": RR.y
      } : {}
    }

    function lR(RR) {
      let {
        settings: JR,
        inPreview: GR,
        inEditor: yR,
        pressed: qR = !1,
        spread: fR,
        spreadRef: VR
      } = RR;
      const KR = (0, uR.useRef)(null),
        {
          box: eR,
          dpr: aR
        } = function(RR) {
          const [JR, GR] = (0, uR.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, uR.useLayoutEffect)((() => {
            const JR = RR.current;
            if (!JR) return;
            const yR = () => {
              const RR = JR.getBoundingClientRect(),
                yR = window.devicePixelRatio || 1;
              GR((JR => JR.dpr === yR && JR.box.left === RR.left && JR.box.top === RR.top && JR.box.width === RR.width && JR.box.height === RR.height ? JR : {
                box: {
                  left: RR.left,
                  top: RR.top,
                  width: RR.width,
                  height: RR.height
                },
                dpr: yR
              }))
            };
            yR();
            const tR = new ResizeObserver(yR);
            return tR.observe(JR), window.addEventListener("resize", yR), window.addEventListener("scroll", yR, !0), () => {
              tR.disconnect(), window.removeEventListener("resize", yR), window.removeEventListener("scroll", yR, !0)
            }
          }), [RR]), JR
        }(KR),
        LR = (0, uR.useRef)(aR);
      LR.current = aR;
      const nR = iR(JR, aR, qR && JR.growOnClick ? rR : 1),
        UR = function(RR, JR, GR) {
          const yR = Math.round((RR.left + RR.width / 2) * GR - JR / 2),
            tR = Math.round((RR.top + RR.height / 2) * GR - JR / 2);
          return {
            x: yR / GR - RR.left,
            y: tR / GR - RR.top
          }
        }(eR, nR.cell, aR),
        WR = (0, ZR.j)(JR.color),
        XR = (0, ZR.j)(JR.outlineColor),
        lR = (0, uR.useRef)(0);
      (0, uR.useLayoutEffect)((() => {
        if (VR) return VR.current = RR => {
          var JR;
          lR.current = RR, null === (JR = KR.current) || void 0 === JR || JR.querySelectorAll("[data-arm]").forEach((JR => {
            Object.assign(JR.style, MR(function(RR) {
              return {
                x: Number(RR.dataset.x),
                y: Number(RR.dataset.y),
                arm: RR.dataset.arm
              }
            }(JR), RR, LR.current))
          }))
        }, () => {
          VR.current = null
        }
      }), [VR]);
      const pR = null !== fR && void 0 !== fR ? fR : lR.current;
      return (0, wR.jsx)("div", {
        ref: KR,
        className: tR()("CrosshairShapes", {
          CrosshairInPreview: GR,
          CrosshairInEditor: yR || GR,
          CrosshairSpreads: void 0 !== VR
        }),
        children: (0, wR.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: UR.x,
            top: UR.y,
            opacity: JR.opacity / 100
          },
          children: (0, wR.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [nR.ringOutline && (0, wR.jsx)("div", {
              className: "CrosshairRing",
              style: CR(nR.ringOutline, aR, XR)
            }), nR.outlines.map(((RR, JR) => (0, wR.jsx)("div", {
              className: "CrosshairPart",
              ...BR(RR),
              style: AR(RR, pR, aR, XR)
            }, `o${JR}`))), nR.ring && (0, wR.jsx)("div", {
              className: "CrosshairRing",
              style: CR(nR.ring, aR, WR)
            }), nR.fills.map(((RR, JR) => (0, wR.jsx)("div", {
              className: "CrosshairPart",
              ...BR(RR),
              style: AR(RR, pR, aR, WR)
            }, `f${JR}`)))]
          })
        })
      })
    }
  },
  35122: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR,
      f: () => LR,
      h: () => aR
    });
    var yR = GR(35106);
    const tR = "XH1-",
      uR = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      ZR = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      qR = ["color", "outlineColor"],
      iR = 1 + 3 * qR.length + ZR.length + 1,
      fR = Math.ceil(8 * iR / Math.log2(62)),
      VR = tR.length + fR;

    function KR(RR) {
      let JR = 90;
      for (const GR of RR) JR = 31 * JR + GR & 255;
      return JR
    }
    const wR = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      rR = BigInt(wR.length);

    function eR(RR, JR) {
      let GR = 0n;
      for (const tR of RR) {
        const RR = wR.indexOf(tR);
        if (RR < 0) return null;
        GR = GR * rR + BigInt(RR)
      }
      if (GR >> BigInt(8 * JR) !== 0n) return null;
      const yR = [];
      for (let tR = 0; tR < JR; tR++) yR.unshift(Number(0xffn & GR)), GR >>= 8n;
      return yR
    }

    function aR(RR) {
      let JR = "shapes" === RR.style ? 1 : 0;
      uR.forEach(((GR, yR) => {
        RR[GR] && (JR |= 1 << yR + 1)
      }));
      const GR = [JR];
      for (const tR of qR) {
        const JR = (0, yR.f)(tR, RR[tR]);
        GR.push(JR >> 16 & 255, JR >> 8 & 255, 255 & JR)
      }
      for (const tR of ZR) {
        const {
          min: JR,
          step: uR
        } = yR.d[tR];
        GR.push(Math.round(((0, yR.f)(tR, RR[tR]) - JR) / uR))
      }
      return GR.push(KR(GR)), tR + function(RR, JR) {
        let GR = 0n;
        for (const tR of RR) GR = GR << 8n | BigInt(tR);
        let yR = "";
        for (let tR = 0; tR < JR; tR++) yR = wR[Number(GR % rR)] + yR, GR /= rR;
        return yR
      }(GR, fR)
    }

    function LR(RR) {
      for (const JR of RR.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${fR}})`, "gi"))) {
        const RR = nR(eR(JR[1], iR));
        if (RR) return RR
      }
      return null
    }

    function nR(RR) {
      if (!RR || RR.length !== iR || KR(RR.slice(0, -1)) !== RR[RR.length - 1]) return null;
      const JR = RR[0],
        GR = {
          ...yR.e,
          style: 1 & JR ? "shapes" : "classic"
        };
      uR.forEach(((RR, yR) => {
        GR[RR] = 0 !== (JR & 1 << yR + 1)
      }));
      let tR = 1;
      for (const yR of qR) GR[yR] = RR[tR] << 16 | RR[tR + 1] << 8 | RR[tR + 2], tR += 3;
      for (const uR of ZR) {
        const {
          min: JR,
          step: ZR
        } = yR.d[uR];
        GR[uR] = (0, yR.f)(uR, JR + RR[tR] * ZR), tR++
      }
      return GR
    }
  },
  35106: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      e: () => tR,
      f: () => uR,
      j: () => fR,
      m: () => iR,
      p: () => VR,
      t: () => qR,
      w: () => ZR
    });
    const yR = {
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
      tR = Object.freeze({
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

    function uR(RR, JR) {
      var GR;
      const {
        min: uR,
        max: ZR,
        step: qR
      } = yR[RR];
      if (!Number.isFinite(JR)) return tR[RR];
      const iR = (null !== (GR = String(qR).split(".")[1]) && void 0 !== GR ? GR : "").length,
        fR = Number((Math.round(JR / qR) * qR).toFixed(iR));
      return Math.min(ZR, Math.max(uR, fR))
    }

    function ZR(RR, JR, GR) {
      const yR = "number" === typeof GR ? uR(JR, GR) : GR;
      return {
        ...RR,
        [JR]: yR
      }
    }

    function qR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(tR).every((yR => GR.includes(yR) || RR[yR] === JR[yR]))
    }

    function iR(RR) {
      return qR(RR, tR)
    }

    function fR(RR) {
      return `#${RR.toString(16).padStart(6,"0")}`
    }

    function VR(RR) {
      const JR = /^#?([0-9a-f]{6})$/i.exec(RR.trim());
      return JR ? parseInt(JR[1], 16) : null
    }
  },
  35124: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => KR,
      f: () => wR
    });
    var yR = GR(66),
      tR = GR(46),
      uR = GR(35122),
      ZR = GR(35106);
    const qR = "crosshairCode";
    let iR = null;
    const fR = new Set;

    function VR() {
      if (null === iR) {
        var RR;
        const JR = tR.i.getItem(qR);
        iR = null !== (RR = "string" === typeof JR ? (0, uR.f)(JR) : null) && void 0 !== RR ? RR : ZR.e
      }
      return iR
    }

    function KR(RR) {
      iR = RR, (0, ZR.m)(RR) ? tR.i.removeItem(qR) : tR.i.setItem(qR, (0, uR.h)(RR));
      for (const JR of fR) JR()
    }

    function wR() {
      const [RR, JR] = (0, yR.useState)(VR);
      return (0, yR.useEffect)((() => {
        const RR = () => {
          JR(VR())
        };
        return RR(), GR = RR, fR.add(GR), () => {
          fR.delete(GR)
        };
        var GR
      }), []), RR
    }
  },
  10311: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      f: () => ZR
    });
    var yR = GR(188);
    class tR {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(RR) || this.marks.set(RR, JR)
      }
      marked() {
        return yR.T.flatMap((RR => {
          var JR;
          const GR = null !== (JR = this.marks.get(RR)) && void 0 !== JR ? JR : uR.marks.get(RR);
          return void 0 === GR ? [] : [
            [RR, GR]
          ]
        }))
      }
    }
    const uR = new tR;

    function ZR(RR) {
      uR.mark(RR)
    }
  },
  37820: (RR, JR, GR) => {
    function yR(RR, JR, GR, yR) {
      return !(GR && !RR.aimable) && (!JR || RR.gun && "head" !== yR)
    }

    function tR(RR) {
      return Math.max(.1 * RR, 1)
    }

    function uR(RR, JR) {
      return !RR && JR
    }
    GR.d(JR, {
      e: () => uR,
      g: () => tR,
      h: () => yR
    })
  },
  37829: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => ZR
    });
    let yR = null;
    const tR = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      uR = {
        crosshairAccuracy: RR => {
          const JR = tR.crosshairAccuracy.at(-1);
          JR ? JR.hook(RR) : yR = RR
        },
        turnDamageIndicators: RR => {
          var JR;
          null === (JR = tR.turnDamageIndicators.at(-1)) || void 0 === JR || JR.hook(RR)
        },
        turnSoundCues: RR => {
          var JR;
          null === (JR = tR.turnSoundCues.at(-1)) || void 0 === JR || JR.hook(RR)
        }
      };

    function ZR(RR, JR) {
      const GR = {
          hook: JR
        },
        ZR = tR[RR];
      if (ZR.push(GR), "crosshairAccuracy" === RR && null !== yR) {
        const RR = yR;
        yR = null, uR.crosshairAccuracy(RR)
      }
      return () => {
        const RR = ZR.indexOf(GR); - 1 !== RR && ZR.splice(RR, 1)
      }
    }

    function qR() {
      return uR
    }
  },
  35099: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      i: () => tR
    });
    var yR = GR(25);

    function tR(RR, JR) {
      return RR && !JR
    }

    function uR() {
      return tR(yR.d.get("isTouchScreen"), yR.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  10048: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    let yR = null;
    const tR = function(RR) {
        const JR = {
          cycle: RR,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return yR = JR, () => {
          yR === JR && (yR = null)
        }
      },
      uR = () => {
        var RR;
        return null !== (RR = yR) && void 0 !== RR && RR.canCycle() ? yR.cycle : null
      }
  },
  37494: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => iR,
      l: () => ZR
    });
    var yR = GR(679),
      tR = GR(2435);

    function uR(RR) {
      return RR === (0, tR.i)().UH ? (0, tR.i)().WH : RR
    }

    function ZR(RR) {
      return !(0, yR.I)(RR) && uR(RR) === (0, tR.i)().WH
    }
    const qR = "gravity";

    function iR() {
      return (0, tR.i)().physics[qR][1]
    }
  },
  37600: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      InGameUi: () => lR.d,
      LobbyLeaderboard: () => pR.b,
      loadCharacterCustomisationUI: () => gR,
      loadCharacterPreview: () => bR,
      matchmakeAndPlay: () => NR,
      matchmakeForAhead: () => qR.f,
      setUpGame: () => vR
    });
    var yR = GR(1341),
      tR = GR(163),
      uR = GR(25),
      ZR = GR(37605),
      qR = GR(37612),
      iR = GR(2163),
      fR = GR(37644);

    function VR() {
      return !1 !== iR.c.get("canCustomiseChar")
    }
    let KR = !1;
    var wR = GR(1449),
      rR = GR(5474),
      eR = GR(1343),
      aR = GR(271),
      LR = GR(4928),
      nR = GR(5467),
      UR = GR(10303);

    function WR() {
      return function(RR) {
        var JR;
        return !0 !== (null === RR || void 0 === RR ? void 0 : RR.saveData) && !/2g$/.test(null !== (JR = null === RR || void 0 === RR ? void 0 : RR.effectiveType) && void 0 !== JR ? JR : "")
      }(navigator.connection)
    }

    function AR() {
      return {
        joinStarted: nR.e,
        language: eR.g.get().getCurrentLanguageCode()
      }
    }

    function CR() {
      return new Promise((RR => {
        (0, rR.r)(RR)
      }))
    }

    function XR() {
      (0, nR.e)() || (0, UR.loadWasmPlayAhead)().catch((RR => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", RR)
      }))
    }
    var MR = GR(4757),
      BR = GR(820);
    var lR = GR(37660),
      pR = GR(38125);

    function gR() {
      return GR.e(251).then((() => GR(44991)))
    }

    function bR() {
      return GR.e(610).then((() => GR(44996)))
    }
    async function vR() {
      return await async function() {
        if ((0, rR.h)()) {
          if (WR()) try {
            await (0, rR.q)("wasm loads ahead");
            const RR = await (0, UR.importClientLoad)();
            await Promise.race([RR.startLoadAheadOfJoin(AR()), CR()]), await (0, rR.q)("wasm previews");
            const {
              pagePreviews: JR
            } = await Promise.all([GR.e(177), GR.e(91), GR.e(224), GR.e(158), GR.e(245), GR.e(244), GR.e(243), GR.e(222), GR.e(50), GR.e(161), GR.e(242), GR.e(72)]).then((() => GR(45007)));
            JR().prefetch((0, rR.h)() ? rR.q : void 0)
          } catch (RR) {
            console.warn("[bloxd-wasm-client] the previews' loads ahead of need did not start: the open loads them itself", RR)
          }
          await CR()
        }
      }(), (0, UR.loadWasmPreviews)()
    }
    KR || (KR = !0, document.addEventListener("keydown", (RR => {
      (0, fR.e)(RR, VR)
    }))), WR() && (0, LR.e)((() => {
      (0, nR.e)() || (0, UR.importClientLoad)().then((async RR => {
        if ((0, nR.e)()) return;
        const JR = RR.startLoadAheadOfJoin(AR());
        (0, aR.e)((() => {
          (0, nR.e)() || RR.probeWebgl2AheadOfJoin()
        })), await JR, (0, aR.e)(XR)
      }), (RR => {
        console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", RR)
      }))
    }));
    const OR = uR.d.get("router");
    null === OR ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function RR(JR) {
      if ((0, BR.e)(JR.state.location.pathname)) return void(0, UR.loadWasmPlay)().catch((() => {}));
      const GR = JR.subscribe((yR => {
        (0, BR.e)(yR.location.pathname) && (GR(), (0, MR.h)().then((() => {
          RR(JR)
        })))
      }))
    }(OR), (0, ZR.e)();
    const xR = (0, qR.e)((async function(RR, JR) {
      let {
        place: GR,
        userContext: uR,
        direct: ZR,
        matchedAt: qR,
        rematch: iR
      } = RR;
      const fR = ZR ? 1 / 0 : qR;
      let VR;
      try {
        VR = await (0, UR.loadWasmPlay)()
      } catch (KR) {
        return console.error("The wasm client did not load:", KR), (0, wR.s)({
          websocketUrl: null
        }), yR.e.errorWithCode(String(KR), tR.j.CONNECT_TO_GAME_SERVER, {
          error: KR,
          severity: JR.aborted ? "low" : "medium",
          xR: JR.aborted
        })
      }
      return VR.playWasmGame({
        userContext: uR,
        place: GR,
        matchedAt: fR,
        rematch: iR
      }, JR)
    }));

    function NR() {
      return (0, UR.loadWasmPlay)().catch((() => {})), xR(...arguments)
    }
  },
  10303: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      importClientLoad: () => KR,
      loadWasmPlay: () => eR,
      loadWasmPlayAhead: () => aR,
      loadWasmPreviews: () => LR
    });
    var yR = GR(4422),
      tR = GR(3243),
      uR = GR(2363),
      ZR = GR(5452),
      qR = GR(4850),
      iR = GR(5467),
      fR = GR(10311);
    let VR = null;

    function KR() {
      return Promise.all([GR.e(91), GR.e(105), GR.e(240), GR.e(158), GR.e(244), GR.e(161), GR.e(255), GR.e(71)]).then((() => GR(42208)))
    }

    function wR() {
      return Promise.all([GR.e(88), GR.e(91), GR.e(105), GR.e(240), GR.e(158), GR.e(244), GR.e(222), GR.e(161), GR.e(250), GR.e(242), GR.e(103), GR.e(246), GR.e(255), GR.e(76)]).then((() => GR(42387)))
    }

    function rR() {
      Promise.all([GR.e(85), GR.e(89), GR.e(86), GR.e(87), GR.e(88), GR.e(105), GR.e(102), GR.e(306), GR.e(127), GR.e(280), GR.e(254), GR.e(246), GR.e(55)]).then((() => GR(42538))).catch((() => {}))
    }

    function eR() {
      return ZR.e.cancelDownloadForJoin(), (0, qR.e)(), (0, tR.d)(), (0, iR.h)(), (0, uR.i)(), rR(), KR().then((RR => {
        let {
          startJoinLoad: JR
        } = RR;
        JR()
      }), (() => {})), VR ??= wR().then((RR => ((0, fR.f)("phase_chunk"), RR.startWasmPlay(), (0, fR.f)("phase_start"), RR.followPageUiPack((RR => {
        yR.b.showGamePack(RR)
      })), RR)), (RR => {
        throw VR = null, RR
      })), VR
    }

    function aR() {
      return rR(), GR.e(132).then((() => GR(42579))).catch((() => {})), wR().then((() => {
        (0, fR.f)("phase_chunk")
      }))
    }

    function LR() {
      return wR().then((RR => {
        RR.startWasmPreviews(), RR.prefetchWasmPreviews()
      }))
    }
  },
  37466: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => BR
    });
    var yR = GR(37470),
      tR = GR(203),
      uR = GR(5742),
      ZR = GR(37479),
      qR = GR(37485),
      iR = GR(37537),
      fR = GR(37494),
      VR = GR(385),
      KR = GR.n(VR),
      wR = GR(2435),
      rR = GR(37534),
      eR = GR(32),
      aR = GR(25),
      LR = GR(37498),
      nR = GR(37507),
      UR = GR(37516),
      WR = GR(37518),
      AR = GR(37528);
    const CR = new Set(["note"]);
    const XR = {
      stop: () => XR,
      fade: () => XR,
      rate: () => XR,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => XR,
      setPannerAttr: () => XR,
      setPosition: () => XR
    };
    class MR {
      constructor(RR) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new iR.k, this._howl = (0, qR.countDecodesAs)(new uR.Howl({
          src: [...(0, yR.v)(RR).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = this._howl.play(ZR.d);
        RR && this._howl.loop(!0, JR);
        let GR = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), JR);
        const yR = {
          stop: () => {
            var RR;
            return null === (RR = this.liveHowl()) || void 0 === RR || RR.stop(JR), yR
          },
          fade: (RR, GR, tR) => {
            var uR;
            return null === (uR = this.liveHowl()) || void 0 === uR || uR.fade(RR, GR, tR, JR), yR
          },
          rate: RR => {
            var GR;
            return null === (GR = this.liveHowl()) || void 0 === GR || GR.rate(RR, JR), yR
          },
          stopsAtOnce: () => this._howl.playing(JR) && !this._howl._playLock,
          isAlive: () => {
            const RR = this._howl._soundById(JR);
            return !this._loadFailed && !!RR && !RR._ended
          },
          getDurationMs: () => this._howl._soundById(JR) ? 1e3 * this._howl.duration(JR) / this._howl.rate(JR) : 0,
          getVolume: () => GR * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => GR,
          setRelativeVolume: RR => {
            var tR;
            if (RR > 1) throw new Error("Volume should be <= 1");
            return GR = aR.d.get("soundOnFromAd") ? RR : 0, null === (tR = this.liveHowl()) || void 0 === tR || tR.volume(Math.min(1, GR * this._volumeMultiplier.getTotalMultipliedVal()), JR), yR
          },
          setPannerAttr: RR => {
            let {
              coneInnerAngle: GR,
              coneOuterAngle: tR = 360,
              coneOuterGain: uR,
              distanceModel: ZR,
              maxDistance: qR,
              panningModel: iR,
              refDistance: fR,
              rolloffFactor: VR
            } = RR;
            return this._setPannerAttr({
              id: JR,
              coneInnerAngle: GR,
              coneOuterAngle: tR,
              coneOuterGain: uR,
              distanceModel: ZR,
              maxDistance: qR,
              panningModel: iR,
              refDistance: fR,
              rolloffFactor: VR
            }), yR
          },
          setPosition: RR => {
            var GR;
            return null === (GR = this.liveHowl()) || void 0 === GR || GR.pos(RR[2], RR[1], RR[0], JR), yR
          }
        };
        return yR
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, ZR.e)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(RR) {
        this._volumeMultiplier.setMultiplierType("globalVolume", RR), this._howl.volume(RR)
      }
      _setPannerAttr(RR) {
        let {
          id: JR,
          coneInnerAngle: GR = 360,
          coneOuterAngle: yR = 360,
          coneOuterGain: tR = 0,
          distanceModel: uR = "inverse",
          maxDistance: ZR = 1e3,
          panningModel: qR = "HRTF",
          refDistance: iR = rR.f,
          rolloffFactor: fR = 1
        } = RR;
        const VR = this.liveHowl();
        if (null === VR) return;
        VR.pannerAttr({
          coneOuterAngle: yR
        }, JR);
        const KR = {
          coneInnerAngle: GR,
          coneOuterAngle: yR,
          coneOuterGain: tR,
          distanceModel: uR,
          maxDistance: ZR,
          panningModel: qR,
          refDistance: iR,
          rolloffFactor: fR
        };
        VR.pannerAttr(KR, JR)
      }
    }
    const BR = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new LR.b, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, eR.n.subscribe("appManagerUpdated|soundVolume", (RR => {
          const JR = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const GR of JR) GR.setGlobalVolume(RR)
        }))
      }
      play(RR, JR) {
        var GR;
        let uR, ZR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (GR = (0, wR.i)()) || void 0 === GR ? void 0 : GR.WH,
          qR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rR.d,
          iR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rR.f,
          VR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var eR;
        (0, wR.i)() ? uR = !!Array.isArray(ZR) || (0, fR.d)(ZR) !== (null === (eR = (0, wR.i)()) || void 0 === eR ? void 0 : eR.WH): uR = !1;
        const aR = (0, yR.m)(RR),
          nR = this.loadSound(uR ? this.spatialSounds : this.stereoSounds, RR);
        if (!uR) {
          const RR = nR.play(VR);
          return RR.setRelativeVolume(JR), RR
        }
        const UR = (0, wR.i)(),
          WR = Array.isArray(ZR) ? ZR : UR.zC.vW(ZR),
          MR = UR.zC.vW(UR.WH);
        if (!WR || KR().sqrDist(WR, MR) > qR * qR) return XR;
        let BR;
        if (!VR) {
          if (!this.spatialVoices.admit({
              group: CR.has(aR) ? null : (0, LR.f)(RR),
              loudness: (0, LR.e)(JR, KR().xZ(WR, MR), iR),
              startMs: performance.now(),
              getDurationMs: () => {
                var RR, JR;
                return null !== (RR = null === (JR = BR) || void 0 === JR ? void 0 : JR.getDurationMs()) && void 0 !== RR ? RR : 0
              },
              isAlive: () => {
                var RR, JR;
                return null !== (RR = null === (JR = BR) || void 0 === JR ? void 0 : JR.isAlive()) && void 0 !== RR && RR
              },
              canStop: () => {
                var RR, JR;
                return null !== (RR = null === (JR = BR) || void 0 === JR ? void 0 : JR.stopsAtOnce()) && void 0 !== RR && RR
              },
              stop: () => {
                var RR;
                null === (RR = BR) || void 0 === RR || RR.stop()
              }
            })) return XR
        }
        return BR = nR.play(VR), BR.setRelativeVolume(JR), BR.setPannerAttr({
          refDistance: iR
        }), BR.setPosition([WR[0], WR[1] + tR.g.Kn * tR.g.playerEyeToHeightRatio, WR[2]]), !VR && (0, AR.k)() && (0, AR.h)(aR, RR, WR[0] - MR[0], WR[2] - MR[2]), BR
      }
      preload(RR) {
        const JR = (0, yR.q)(RR) ? [RR] : (0, yR.x)(RR);
        if (0 === JR.length) throw new Error(`Invalid sound name ${RR} (no sound has it or starts with it)`);
        for (const GR of JR) this.loadSound(this.stereoSounds, GR)
      }
      preloadAtIdle(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WR.c;
        const GR = RR.filter((RR => !this.idlePreloads.has(RR)));
        for (const tR of GR) this.idlePreloads.add(tR);
        const yR = this.idlePreloadGeneration;
        (0, UR.c)(GR, {
          ...JR,
          xR: () => yR !== this.idlePreloadGeneration,
          fetchFile: RR => {
            this.idlePreloads.delete(RR);
            try {
              return this.preload(RR), Promise.resolve()
            } catch (JR) {
              return Promise.reject(JR)
            }
          }
        })
      }
      loadSound(RR, JR) {
        const GR = RR[JR];
        if (GR) return GR;
        const tR = this.makeSound(RR, JR);
        for (const ZR of null !== (uR = (0, yR.t)(JR)) && void 0 !== uR ? uR : []) {
          var uR;
          RR[ZR] || this.makeSound(RR, ZR)
        }
        return tR
      }
      makeSound(RR, JR) {
        (0, WR.e)(JR);
        const GR = new MR(JR);
        return GR.setGlobalVolume(aR.d.get("soundVolume")), RR[JR] = GR, GR
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const RR of [this.stereoSounds, this.spatialSounds])
          for (const [JR, GR] of Object.entries(RR)) !nR.e.has((0, yR.m)(JR)) && GR.loaded() && (GR.unloadOnceIdle(), delete RR[JR])
      }
    }
  },
  37278: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => XR,
      e: () => gR,
      i: () => bR,
      m: () => vR
    });
    var yR = GR(37287),
      tR = GR(8059),
      uR = GR(8132),
      ZR = GR(37293),
      qR = GR(37298),
      iR = GR(37301),
      fR = GR(8461),
      VR = GR(8583),
      KR = GR(37303),
      wR = GR(8784),
      rR = GR(7934),
      eR = GR(9048),
      aR = GR(37309),
      LR = GR(37312),
      nR = GR(9074),
      UR = GR(37314),
      WR = GR(37323),
      AR = GR(377);
    const CR = {
        redTeam: uR.c,
        blueTeam: LR.g,
        greenTeam: WR.f,
        yellowTeam: nR.f,
        cyanTeam: iR.f,
        whiteTeam: rR.faPlus,
        pinkTeam: VR.d,
        grayTeam: KR.e,
        blackTeam: aR.h,
        orangeTeam: UR.h,
        lilacTeam: ZR.e,
        purpleTeam: wR.f,
        magentaTeam: qR.e,
        brownTeam: yR.g,
        limeTeam: tR.faBolt,
        lightGrayTeam: fR.h,
        lightBlueTeam: eR.h
      },
      XR = Object.fromEntries(Object.values(CR).map((RR => [MR(RR), RR])));

    function MR(RR) {
      return `team-${RR.iconName}`
    }
    const BR = new Map;
    for (const [OR, xR] of Object.entries(CR)) {
      const RR = MR(xR),
        JR = AR.C[OR];
      JR && BR.set(JR.toLowerCase(), {
        icon: RR,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let lR = !1;
    const pR = new Set;

    function gR(RR) {
      if (RR !== lR) {
        lR = RR;
        for (const RR of pR) RR()
      }
    }

    function bR(RR) {
      var JR;
      return "string" === typeof RR && lR && null !== (JR = BR.get(RR.toLowerCase())) && void 0 !== JR ? JR : null
    }

    function vR(RR) {
      return pR.add(RR), () => {
        pR.delete(RR)
      }
    }
  },
  37329: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => nR,
      E: () => WR,
      d: () => tR,
      g: () => rR,
      i: () => ZR,
      k: () => eR,
      n: () => UR,
      o: () => wR,
      p: () => AR,
      r: () => uR,
      s: () => VR,
      t: () => KR,
      u: () => aR,
      w: () => LR
    });
    var yR = GR(2102);
    const tR = [{
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

    function uR(RR) {
      return (0, yR.q)(RR.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function ZR(RR, JR) {
      const {
        numLines: GR,
        charsPerLine: yR
      } = tR[JR];
      return CR(RR, GR, yR, !1)
    }
    const qR = 7 / 8,
      iR = .25,
      fR = 8;

    function VR(RR, JR) {
      return {
        width: Math.min(RR, fR) - 2 * iR,
        height: Math.min(JR, fR) - 2 * iR
      }
    }

    function KR(RR, JR, GR) {
      const yR = VR(RR, JR),
        {
          numLines: uR,
          charsPerLine: ZR
        } = tR[GR];
      return {
        numLines: Math.max(1, Math.floor(uR / qR * yR.height)),
        charsPerLine: Math.max(1, Math.floor(ZR * yR.width))
      }
    }

    function wR(RR, JR, GR, yR) {
      const {
        numLines: tR,
        charsPerLine: uR
      } = KR(GR, yR, JR);
      return CR(RR, tR, uR, !1)
    }
    const rR = 32e3;

    function eR(RR) {
      return RR.slice(0, rR)
    }
    const aR = 512e3,
      LR = 64,
      nR = aR;

    function UR(RR, JR) {
      const GR = Math.max(0, nR - JR),
        yR = Math.min(aR, GR);
      return RR.slice(0, yR)
    }
    const WR = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      XV: {
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

    function AR(RR, JR) {
      const {
        numLines: GR,
        charsPerLine: yR
      } = WR[JR];
      return CR(RR, GR, yR, !1)
    }

    function CR(RR, JR, GR, yR, tR) {
      (tR || yR) && (RR = RR.slice(0, null !== tR && void 0 !== tR ? tR : JR * GR));
      const uR = RR.split("\n");
      if (uR.length > JR && uR.splice(JR, uR.length - JR), !yR)
        for (let ZR = 0; ZR < uR.length; ZR++) {
          const RR = uR[ZR];
          RR.length > GR && (uR[ZR] = RR.substring(0, GR), uR.length < JR && uR.splice(ZR + 1, 0, RR.substring(GR)))
        }
      return uR.join("\n")
    }
  },
  37949: (RR, JR, GR) => {
    function yR(RR, JR) {
      var GR, yR, tR, uR, ZR, qR, iR, fR;
      return RR.name === JR.name && ((null === (GR = RR.attributes) || void 0 === GR || null === (yR = GR.customAttributes) || void 0 === yR ? void 0 : yR.stackKey) === (null === (tR = JR.attributes) || void 0 === tR || null === (uR = tR.customAttributes) || void 0 === uR ? void 0 : uR.stackKey) && (!0 !== (null === (ZR = RR.attributes) || void 0 === ZR || null === (qR = ZR.customAttributes) || void 0 === qR ? void 0 : qR.unstackable) && !0 !== (null === (iR = JR.attributes) || void 0 === iR || null === (fR = iR.customAttributes) || void 0 === fR ? void 0 : fR.unstackable)))
    }
    GR.d(JR, {
      d: () => yR
    })
  },
  5953: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR,
      d: () => uR
    });
    var yR = GR(5898);
    const tR = "Air",
      uR = Object.freeze(new yR.h(tR, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38040: (RR, JR, GR) => {
    function yR(RR) {
      return RR.includes("Leaf Bed")
    }

    function tR(RR) {
      return / Bed(?: Head)?(?:\||$)/.test(RR) && !yR(RR)
    }

    function uR(RR) {
      return RR.includes(" Strongbed")
    }

    function ZR(RR) {
      return yR(RR) || tR(RR) || uR(RR)
    }
    GR.d(JR, {
      d: () => ZR,
      f: () => yR,
      h: () => uR,
      k: () => tR
    })
  },
  38034: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR
    });
    var yR = GR(38040),
      tR = GR(5844);
    const uR = [],
      ZR = [],
      qR = [],
      iR = [];
    for (const VR of Object.keys(tR.q))(0, yR.f)(VR) ? uR.push(VR) : (0, yR.k)(VR) && ZR.push(VR), (0, yR.h)(VR) && qR.push(VR), (VR.includes(" Bed Head") || VR.includes(" Strongbed Head")) && iR.push(VR);
    const fR = {
      leafBeds: uR,
      woolBeds: ZR,
      strongBeds: qR,
      beds: [...uR, ...ZR, ...qR],
      bedHeads: iR,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7588: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => tR,
      d: () => iR,
      g: () => uR,
      j: () => fR,
      k: () => yR,
      n: () => qR
    });
    let yR = function(RR) {
        return RR[RR.DEFAULT = 0] = "DEFAULT", RR[RR.BOAT = 1] = "BOAT", RR[RR.GLIDER = 2] = "GLIDER", RR[RR.BALLOON = 3] = "BALLOON", RR[RR.SLEEPING = 4] = "SLEEPING", RR[RR.RIDING_MOB = 5] = "RIDING_MOB", RR[RR.CAR = 6] = "CAR", RR[RR.HOVERCRAFT = 7] = "HOVERCRAFT", RR
      }({}),
      tR = function(RR) {
        return RR[RR.WOOD = 0] = "WOOD", RR[RR.OBSIDIAN = 1] = "OBSIDIAN", RR[RR.SPEED = 2] = "SPEED", RR
      }({}),
      uR = function(RR) {
        return RR[RR.WOOD = 0] = "WOOD", RR[RR.IRON = 1] = "IRON", RR[RR.GOLD = 2] = "GOLD", RR[RR.DIAMOND = 3] = "DIAMOND", RR
      }({}),
      ZR = function(RR) {
        return RR[RR.YELLOW = 0] = "YELLOW", RR[RR.WHITE = 1] = "WHITE", RR[RR.RED = 2] = "RED", RR[RR.PURPLE = 3] = "PURPLE", RR[RR.PINK = 4] = "PINK", RR[RR.ORANGE = 5] = "ORANGE", RR[RR.MAGENTA = 6] = "MAGENTA", RR[RR.LIME = 7] = "LIME", RR[RR.LIGHT_GRAY = 8] = "LIGHT_GRAY", RR[RR.LIGHT_BLUE = 9] = "LIGHT_BLUE", RR[RR.GREEN = 10] = "GREEN", RR[RR.GRAY = 11] = "GRAY", RR[RR.CYAN = 12] = "CYAN", RR[RR.BROWN = 13] = "BROWN", RR[RR.BLUE = 14] = "BLUE", RR[RR.BLACK = 15] = "BLACK", RR
      }({}),
      qR = function(RR) {
        return RR[RR.ROTATION_1 = 0] = "ROTATION_1", RR[RR.ROTATION_2 = 1] = "ROTATION_2", RR[RR.ROTATION_3 = 2] = "ROTATION_3", RR[RR.ROTATION_4 = 3] = "ROTATION_4", RR
      }({}),
      iR = function(RR) {
        return RR[RR.KART = 0] = "KART", RR[RR.OFF_ROADER = 1] = "OFF_ROADER", RR[RR.CAR = 2] = "CAR", RR[RR.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", RR[RR.ARMORED_CAR = 4] = "ARMORED_CAR", RR[RR.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", RR[RR.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", RR[RR.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", RR
      }({});
    yR.DEFAULT, yR.BOAT, tR.SPEED, yR.GLIDER, uR.DIAMOND, yR.BALLOON, ZR.BLACK, yR.SLEEPING, qR.ROTATION_4, yR.RIDING_MOB, yR.CAR, iR.MOONSTONE_MINING_DRILL, yR.HOVERCRAFT;
    let fR = function(RR) {
      return RR[RR.NORMAL = 0] = "NORMAL", RR[RR.GLIDING = 1] = "GLIDING", RR[RR.FLOATING = 2] = "FLOATING", RR
    }({})
  },
  35113: () => {}
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);