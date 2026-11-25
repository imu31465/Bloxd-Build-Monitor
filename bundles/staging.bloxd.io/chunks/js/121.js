export const id = 121;
export const ids = [121];
export const modules = {
  36963: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => hG,
      d: () => XG
    });
    ZG(34454);
    var wG = ZG(51),
      SG = ZG(1389),
      LG = ZG(1895),
      yG = ZG(1945),
      kG = ZG(17),
      UG = ZG(2409),
      YG = ZG(36965),
      VG = ZG(36973),
      pG = ZG(34432),
      fG = ZG(34446),
      QG = ZG(34463),
      KG = ZG(1067);
    const hG = (0, wG.memo)((function() {
      var GG;
      const {
        isTouchScreen: bG,
        clientEscMenuOptions: ZG,
        scriptedCameraFacing: LG,
        crosshairShownOverride: hG,
        crosshairGameView: JG
      } = (0, kG.o)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), rG = (0, UG.i)("gunshotOrigin"), zG = (0, wG.useRef)(null), EG = (0, wG.useRef)(!1), [oG, uG] = (0, wG.useState)(dG);
      (0, SG.g)("cameraZoomSet", uG), (0, wG.useEffect)((() => {
        uG(dG())
      }), []);
      const iG = (0, yG.f)("heldItemAim"),
        WG = iG.gun,
        mG = (0, QG.h)(),
        IG = (0, wG.useRef)(mG);
      IG.current = mG;
      const [FG, vG] = (0, wG.useState)(!1);
      (0, wG.useEffect)((() => (0, VG.c)("crosshairAccuracy", XG)), []), (0, SG.g)("mouseState", (GG => {
        let {
          isDown: bG
        } = GG;
        EG.current = bG, zG.current && (zG.current.style.transform = (0, fG.f)(bG, IG.current.growOnClick)), "shapes" === IG.current.style && vG(bG)
      }));
      const aG = (0, pG.f)(bG, ZG.touchActionButtons);
      return (null !== (GG = (0, YG.d)(JG, hG)) && void 0 !== GG ? GG : (0, YG.h)(iG, oG > 1, aG, rG)) ? "movement" === LG || "cursor" === LG ? null : (0, KG.jsxs)(KG.Fragment, {
        children: [WG && (0, KG.jsx)(CG, {
          custom: mG.forGuns && "shapes" === mG.style ? mG : null,
          touch: bG
        }), !WG && (0, KG.jsx)(fG.d, {
          settings: mG,
          touch: bG,
          pressRef: zG,
          pressed: "shapes" === mG.style ? FG : EG.current
        })]
      }) : null
    }));

    function dG() {
      return LG.gameBridge.lookup("cameraZoom", null)
    }
    const JG = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      rG = {
        current: null
      },
      zG = {
        current: null
      };
    let EG = 0,
      oG = 0;

    function XG(GG) {
      oG = GG, JG[0].current || rG.current || zG.current ? iG(GG) : EG = GG
    }

    function uG(GG) {
      return ((0, YG.g)(GG) - (0, YG.g)(0)) * window.innerHeight / 100
    }

    function iG(GG) {
      var bG;
      if (null === (bG = zG.current) || void 0 === bG || bG.call(zG, uG(GG)), JG[0].current) {
        const bG = `${(0,YG.g)(GG)}vh`;
        JG[0].current.style.transform = `translateX(calc(0px - ${bG}))`, JG[1].current.style.transform = `translateX(calc(0px + ${bG}))`, JG[2].current.style.transform = `translateY(calc(0px - ${bG}))`, JG[3].current.style.transform = `translateY(calc(0px + ${bG}))`
      }
      rG.current && (rG.current.style.filter = `blur(${Math.round(GG/10)}px)`)
    }

    function CG(GG) {
      let {
        custom: bG,
        touch: ZG
      } = GG;
      const LG = (0, SG.j)("aimingOverlay", "none"),
        yG = "1.2vh",
        kG = "0.3vh";
      (0, wG.useEffect)((() => {
        EG && iG(EG)
      }), []);
      const UG = (0, wG.useRef)(null !== bG);
      return (0, wG.useLayoutEffect)((() => {
        var GG;
        bG ? null === (GG = zG.current) || void 0 === GG || GG.call(zG, uG(oG)) : UG.current && iG(oG);
        UG.current = null !== bG
      }), [bG]), (0, KG.jsxs)(KG.Fragment, {
        children: ["sniper" === LG && (0, KG.jsxs)("div", {
          ref: rG,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, KG.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, KG.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, KG.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, KG.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, KG.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === LG ? 0 : 1
          },
          children: [bG && (0, KG.jsx)(fG.d, {
            settings: bG,
            touch: ZG,
            spreadRef: zG
          }), !bG && (0, KG.jsxs)(KG.Fragment, {
            children: [(0, KG.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: yG,
                height: kG,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: JG[0]
            }), (0, KG.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: yG,
                height: kG,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: JG[1]
            }), (0, KG.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: kG,
                height: yG,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: JG[2]
            }), (0, KG.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: kG,
                height: yG,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: JG[3]
            })]
          })]
        })]
      })
    }
  },
  34446: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => hG,
      f: () => KG
    });
    ZG(34454);
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(51),
      yG = ZG(34439);

    function kG(GG, bG) {
      return Math.max(1, Math.round(GG * bG))
    }

    function UG(GG, bG) {
      const ZG = bG * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        wG = function(GG, bG) {
          if (GG.lines) return kG(GG.lineThickness, bG) % 2;
          if (GG.dot) return kG(GG.dotSize, bG) % 2;
          return YG(GG, bG) % 2
        }(GG, bG),
        SG = VG(GG.lineThickness * ZG, wG),
        LG = kG(GG.lineLength, ZG),
        yG = Math.round(GG.gap * ZG),
        UG = GG.outline > 0 ? kG(GG.outline, ZG) : 0,
        fG = [];
      if (GG.lines && (fG.push({
          x: SG + yG,
          y: 0,
          w: LG,
          h: SG,
          arm: "right"
        }), fG.push({
          x: -yG - LG,
          y: 0,
          w: LG,
          h: SG,
          arm: "left"
        }), fG.push({
          x: 0,
          y: SG + yG,
          w: SG,
          h: LG,
          arm: "down"
        }), GG.tStyle || fG.push({
          x: 0,
          y: -yG - LG,
          w: SG,
          h: LG,
          arm: "up"
        }), 0 === yG && fG.push({
          x: 0,
          y: 0,
          w: SG,
          h: SG
        })), GG.dot) {
        const bG = VG(GG.dotSize * ZG, wG),
          LG = GG.lines && 0 === yG && GG.dotSize > GG.lineThickness ? Math.max(bG, SG + 2) : bG,
          kG = (SG - LG) / 2;
        fG.push({
          x: kG,
          y: kG,
          w: LG,
          h: LG
        })
      }
      const QG = fG.map((GG => ({
        ...GG,
        x: GG.x - UG,
        y: GG.y - UG,
        w: GG.w + 2 * UG,
        h: GG.h + 2 * UG
      })));
      let KG = null,
        hG = null;
      if (GG.circle) {
        const bG = kG(GG.circleThickness, ZG),
          LG = function(GG, bG) {
            return GG + (GG % 2 === bG ? 0 : 1)
          }(YG(GG, ZG), wG),
          yG = (SG - LG) / 2;
        KG = pG(yG, LG, bG), UG > 0 && (hG = pG(yG - UG, LG + 2 * UG, bG + 2 * UG))
      }
      return {
        cell: SG,
        fills: fG,
        outlines: UG > 0 ? QG : [],
        ring: KG,
        ringOutline: hG
      }
    }

    function YG(GG, bG) {
      return Math.round(GG.circleRadius * bG * 2 + kG(GG.circleThickness, bG))
    }

    function VG(GG, bG) {
      return Math.max(2 - bG, 2 * Math.round((GG - bG) / 2) + bG)
    }

    function pG(GG, bG, ZG) {
      const wG = 2 * ZG >= bG - 1;
      return {
        x: GG,
        y: GG,
        size: bG,
        border: Math.min(ZG, Math.floor(bG / 2)),
        filled: wG
      }
    }
    var fG = ZG(1067);
    const QG = 1.4;

    function KG(GG, bG) {
      return GG && bG ? `scale(${QG})` : "scale(1)"
    }

    function hG(GG) {
      return "classic" === GG.settings.style ? (0, fG.jsx)(rG, {
        ...GG
      }) : (0, fG.jsx)(CG, {
        ...GG
      })
    }
    const dG = .125;

    function JG(GG, bG) {
      const ZG = {};
      if (GG.color !== yG.f.color && (ZG.color = (0, yG.k)(GG.color)), GG.opacity !== yG.f.opacity && (ZG.opacity = GG.opacity / 100), GG.outline !== yG.f.outline || GG.outlineColor !== yG.f.outlineColor) {
        const bG = GG.outline,
          wG = (0, yG.k)(GG.outlineColor);
        ZG.textShadow = bG > 0 ? `-${bG}px 0 ${wG}, 0 ${bG}px ${wG}, ${bG}px 0 ${wG}, 0 -${bG}px ${wG}` : "none"
      }
      if (GG.size !== yG.f.size) {
        const wG = GG.size / 100;
        ZG.fontSize = bG ? `calc(max(1.3rem, 18px) * ${wG})` : `calc(1.3rem * ${wG})`, ZG.marginTop = `-${dG}em`, ZG.transformOrigin = `50% calc(50% + ${dG}em)`
      }
      return ZG
    }

    function rG(GG) {
      let {
        settings: bG,
        touch: ZG,
        inPreview: wG,
        inEditor: LG,
        pressed: yG = !1,
        pressRef: kG
      } = GG;
      return (0, fG.jsx)("div", {
        className: SG()("Crosshair", {
          Touch: ZG,
          CrosshairInPreview: wG,
          CrosshairInEditor: LG || wG
        }),
        ref: kG,
        style: {
          transform: KG(yG, bG.growOnClick),
          ...JG(bG, ZG)
        },
        children: "+"
      })
    }

    function zG(GG, bG) {
      return GG / bG + "px"
    }

    function EG(GG, bG, ZG, wG) {
      return {
        ...uG(GG, bG, ZG),
        width: zG(GG.w, ZG),
        height: zG(GG.h, ZG),
        background: wG
      }
    }

    function oG(GG, bG, ZG) {
      return {
        left: zG(GG.x, bG),
        top: zG(GG.y, bG),
        width: zG(GG.size, bG),
        height: zG(GG.size, bG),
        borderWidth: zG(GG.border, bG),
        borderColor: ZG,
        background: GG.filled ? ZG : void 0
      }
    }
    const XG = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function uG(GG, bG, ZG) {
      const [wG, SG] = GG.arm ? XG[GG.arm] : [0, 0], LG = Math.round(bG * ZG);
      return {
        left: zG(GG.x + wG * LG, ZG),
        top: zG(GG.y + SG * LG, ZG)
      }
    }

    function iG(GG) {
      return GG.arm ? {
        "data-arm": GG.arm,
        "data-x": GG.x,
        "data-y": GG.y
      } : {}
    }

    function CG(GG) {
      let {
        settings: bG,
        inPreview: ZG,
        inEditor: wG,
        pressed: kG = !1,
        spread: YG,
        spreadRef: VG
      } = GG;
      const pG = (0, LG.useRef)(null),
        {
          box: KG,
          dpr: hG
        } = function(GG) {
          const [bG, ZG] = (0, LG.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, LG.useLayoutEffect)((() => {
            const bG = GG.current;
            if (!bG) return;
            const wG = () => {
              const GG = bG.getBoundingClientRect(),
                wG = window.devicePixelRatio || 1;
              ZG((bG => bG.dpr === wG && bG.box.left === GG.left && bG.box.top === GG.top && bG.box.width === GG.width && bG.box.height === GG.height ? bG : {
                box: {
                  left: GG.left,
                  top: GG.top,
                  width: GG.width,
                  height: GG.height
                },
                dpr: wG
              }))
            };
            wG();
            const SG = new ResizeObserver(wG);
            return SG.observe(bG), window.addEventListener("resize", wG), window.addEventListener("scroll", wG, !0), () => {
              SG.disconnect(), window.removeEventListener("resize", wG), window.removeEventListener("scroll", wG, !0)
            }
          }), [GG]), bG
        }(pG),
        dG = (0, LG.useRef)(hG);
      dG.current = hG;
      const JG = UG(bG, hG, kG && bG.growOnClick ? QG : 1),
        rG = function(GG, bG, ZG) {
          const wG = Math.round((GG.left + GG.width / 2) * ZG - bG / 2),
            SG = Math.round((GG.top + GG.height / 2) * ZG - bG / 2);
          return {
            x: wG / ZG - GG.left,
            y: SG / ZG - GG.top
          }
        }(KG, JG.cell, hG),
        zG = (0, yG.k)(bG.color),
        XG = (0, yG.k)(bG.outlineColor),
        CG = (0, LG.useRef)(0);
      (0, LG.useLayoutEffect)((() => {
        if (VG) return VG.current = GG => {
          var bG;
          CG.current = GG, null === (bG = pG.current) || void 0 === bG || bG.querySelectorAll("[data-arm]").forEach((bG => {
            Object.assign(bG.style, uG(function(GG) {
              return {
                x: Number(GG.dataset.x),
                y: Number(GG.dataset.y),
                arm: GG.dataset.arm
              }
            }(bG), GG, dG.current))
          }))
        }, () => {
          VG.current = null
        }
      }), [VG]);
      const WG = null !== YG && void 0 !== YG ? YG : CG.current;
      return (0, fG.jsx)("div", {
        ref: pG,
        className: SG()("CrosshairShapes", {
          CrosshairInPreview: ZG,
          CrosshairInEditor: wG || ZG,
          CrosshairSpreads: void 0 !== VG
        }),
        children: (0, fG.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: rG.x,
            top: rG.y,
            opacity: bG.opacity / 100
          },
          children: (0, fG.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [JG.ringOutline && (0, fG.jsx)("div", {
              className: "CrosshairRing",
              style: oG(JG.ringOutline, hG, XG)
            }), JG.outlines.map(((GG, bG) => (0, fG.jsx)("div", {
              className: "CrosshairPart",
              ...iG(GG),
              style: EG(GG, WG, hG, XG)
            }, `o${bG}`))), JG.ring && (0, fG.jsx)("div", {
              className: "CrosshairRing",
              style: oG(JG.ring, hG, zG)
            }), JG.fills.map(((GG, bG) => (0, fG.jsx)("div", {
              className: "CrosshairPart",
              ...iG(GG),
              style: EG(GG, WG, hG, zG)
            }, `f${bG}`)))]
          })
        })
      })
    }
  },
  34461: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      g: () => dG,
      j: () => hG
    });
    var wG = ZG(34439);
    const SG = "XH1-",
      LG = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      yG = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      kG = ["color", "outlineColor"],
      UG = 1 + 3 * kG.length + yG.length + 1,
      YG = Math.ceil(8 * UG / Math.log2(62)),
      VG = SG.length + YG;

    function pG(GG) {
      let bG = 90;
      for (const ZG of GG) bG = 31 * bG + ZG & 255;
      return bG
    }
    const fG = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      QG = BigInt(fG.length);

    function KG(GG, bG) {
      let ZG = 0n;
      for (const SG of GG) {
        const GG = fG.indexOf(SG);
        if (GG < 0) return null;
        ZG = ZG * QG + BigInt(GG)
      }
      if (ZG >> BigInt(8 * bG) !== 0n) return null;
      const wG = [];
      for (let SG = 0; SG < bG; SG++) wG.unshift(Number(0xffn & ZG)), ZG >>= 8n;
      return wG
    }

    function hG(GG) {
      let bG = "shapes" === GG.style ? 1 : 0;
      LG.forEach(((ZG, wG) => {
        GG[ZG] && (bG |= 1 << wG + 1)
      }));
      const ZG = [bG];
      for (const SG of kG) {
        const bG = (0, wG.g)(SG, GG[SG]);
        ZG.push(bG >> 16 & 255, bG >> 8 & 255, 255 & bG)
      }
      for (const SG of yG) {
        const {
          min: bG,
          step: LG
        } = wG.b[SG];
        ZG.push(Math.round(((0, wG.g)(SG, GG[SG]) - bG) / LG))
      }
      return ZG.push(pG(ZG)), SG + function(GG, bG) {
        let ZG = 0n;
        for (const SG of GG) ZG = ZG << 8n | BigInt(SG);
        let wG = "";
        for (let SG = 0; SG < bG; SG++) wG = fG[Number(ZG % QG)] + wG, ZG /= QG;
        return wG
      }(ZG, YG)
    }

    function dG(GG) {
      for (const bG of GG.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${YG}})`, "gi"))) {
        const GG = JG(KG(bG[1], UG));
        if (GG) return GG
      }
      return null
    }

    function JG(GG) {
      if (!GG || GG.length !== UG || pG(GG.slice(0, -1)) !== GG[GG.length - 1]) return null;
      const bG = GG[0],
        ZG = {
          ...wG.f,
          style: 1 & bG ? "shapes" : "classic"
        };
      LG.forEach(((GG, wG) => {
        ZG[GG] = 0 !== (bG & 1 << wG + 1)
      }));
      let SG = 1;
      for (const wG of kG) ZG[wG] = GG[SG] << 16 | GG[SG + 1] << 8 | GG[SG + 2], SG += 3;
      for (const LG of yG) {
        const {
          min: bG,
          step: yG
        } = wG.b[LG];
        ZG[LG] = (0, wG.g)(LG, bG + GG[SG] * yG), SG++
      }
      return ZG
    }
  },
  34439: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      f: () => SG,
      g: () => LG,
      k: () => YG,
      l: () => UG,
      m: () => VG,
      n: () => kG,
      o: () => yG
    });
    const wG = {
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
      SG = Object.freeze({
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

    function LG(GG, bG) {
      var ZG;
      const {
        min: LG,
        max: yG,
        step: kG
      } = wG[GG];
      if (!Number.isFinite(bG)) return SG[GG];
      const UG = (null !== (ZG = String(kG).split(".")[1]) && void 0 !== ZG ? ZG : "").length,
        YG = Number((Math.round(bG / kG) * kG).toFixed(UG));
      return Math.min(yG, Math.max(LG, YG))
    }

    function yG(GG, bG, ZG) {
      const wG = "number" === typeof ZG ? LG(bG, ZG) : ZG;
      return {
        ...GG,
        [bG]: wG
      }
    }

    function kG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(SG).every((wG => ZG.includes(wG) || GG[wG] === bG[wG]))
    }

    function UG(GG) {
      return kG(GG, SG)
    }

    function YG(GG) {
      return `#${GG.toString(16).padStart(6,"0")}`
    }

    function VG(GG) {
      const bG = /^#?([0-9a-f]{6})$/i.exec(GG.trim());
      return bG ? parseInt(bG[1], 16) : null
    }
  },
  34463: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG,
      h: () => fG
    });
    var wG = ZG(51),
      SG = ZG(29),
      LG = ZG(34461),
      yG = ZG(34439);
    const kG = "crosshairCode";
    let UG = null;
    const YG = new Set;

    function VG() {
      if (null === UG) {
        var GG;
        const bG = SG.h.getItem(kG);
        UG = null !== (GG = "string" === typeof bG ? (0, LG.g)(bG) : null) && void 0 !== GG ? GG : yG.f
      }
      return UG
    }

    function pG(GG) {
      UG = GG, (0, yG.l)(GG) ? SG.h.removeItem(kG) : SG.h.setItem(kG, (0, LG.j)(GG));
      for (const bG of YG) bG()
    }

    function fG() {
      const [GG, bG] = (0, wG.useState)(VG);
      return (0, wG.useEffect)((() => {
        const GG = () => {
          bG(VG())
        };
        return GG(), ZG = GG, YG.add(ZG), () => {
          YG.delete(ZG)
        };
        var ZG
      }), []), GG
    }
  },
  37122: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      h: () => UG,
      i: () => yG
    });
    var wG = ZG(604),
      SG = ZG(2751);

    function LG(GG) {
      return GG === (0, SG.i)().ybG ? (0, SG.i)().sA : GG
    }

    function yG(GG) {
      return !(0, wG.L)(GG) && LG(GG) === (0, SG.i)().sA
    }
    const kG = "gravity";

    function UG() {
      return (0, SG.i)().physics[kG][1]
    }
  },
  37102: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => uG
    });
    var wG = ZG(37105),
      SG = ZG(188),
      LG = ZG(4883),
      yG = ZG(37114),
      kG = ZG(36778),
      UG = ZG(37154),
      YG = ZG(37122),
      VG = ZG(364),
      pG = ZG.n(VG),
      fG = ZG(1163),
      QG = ZG(2751),
      KG = ZG(37146),
      hG = ZG(19),
      dG = ZG(17),
      JG = ZG(37125),
      rG = ZG(37132),
      zG = ZG(37134);
    const EG = new Set(["note"]);
    const oG = {
      stop: () => oG,
      fade: () => oG,
      rate: () => oG,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => oG,
      setPannerAttr: () => oG,
      setPosition: () => oG
    };
    class XG {
      constructor(GG) {
        let bG, {
          src: ZG,
          volumeScalar: SG,
          isSoundSprite: yG
        } = GG;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, yG ? (bG = (0, wG.i)(ZG), this._spriteTrackSrc = bG) : bG = {
          src: fG.clientSideServerUrls.staticUrl + ZG
        }, this._volumeMultiplier = new UG.i, this._volumeMultiplier.setMultiplierType("persistentScalar", SG), this._howl = (0, kG.countDecodesAs)(new LG.Howl({
          ...bG,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let GG, bG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          ZG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (bG) {
          var wG;
          if (null === (wG = this._spriteTrackSrc) || void 0 === wG || !wG.sprite[bG]) throw new Error("No such sprite in your spritetrack");
          GG = this._howl.play(bG)
        } else GG = this._howl.play();
        ZG && this._howl.loop(!0, GG);
        let SG = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), GG);
        const LG = {
          stop: () => {
            var bG;
            return null === (bG = this.liveHowl()) || void 0 === bG || bG.stop(GG), LG
          },
          fade: (bG, ZG, wG) => {
            var SG;
            return null === (SG = this.liveHowl()) || void 0 === SG || SG.fade(bG, ZG, wG, GG), LG
          },
          rate: bG => {
            var ZG;
            return null === (ZG = this.liveHowl()) || void 0 === ZG || ZG.rate(bG, GG), LG
          },
          stopsAtOnce: () => this._howl.playing(GG) && !this._howl._playLock,
          isAlive: () => {
            const bG = this._howl._soundById(GG);
            return !this._loadFailed && !!bG && !bG._ended
          },
          getDurationMs: () => this._howl._soundById(GG) ? 1e3 * this._howl.duration(GG) / this._howl.rate(GG) : 0,
          getVolume: () => SG * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => SG,
          setRelativeVolume: bG => {
            var ZG;
            if (bG > 1) throw new Error("Volume should be <= 1");
            return SG = dG.e.get("soundOnFromAd") ? bG : 0, null === (ZG = this.liveHowl()) || void 0 === ZG || ZG.volume(Math.min(1, SG * this._volumeMultiplier.getTotalMultipliedVal()), GG), LG
          },
          setPannerAttr: bG => {
            let {
              coneInnerAngle: ZG,
              coneOuterAngle: wG = 360,
              coneOuterGain: SG,
              distanceModel: yG,
              maxDistance: kG,
              panningModel: UG,
              refDistance: YG,
              rolloffFactor: VG
            } = bG;
            return this._setPannerAttr({
              id: GG,
              coneInnerAngle: ZG,
              coneOuterAngle: wG,
              coneOuterGain: SG,
              distanceModel: yG,
              maxDistance: kG,
              panningModel: UG,
              refDistance: YG,
              rolloffFactor: VG
            }), LG
          },
          setPosition: bG => {
            var ZG;
            return null === (ZG = this.liveHowl()) || void 0 === ZG || ZG.pos(bG[2], bG[1], bG[0], GG), LG
          }
        };
        return LG
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, yG.e)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(GG) {
        this._volumeMultiplier.setMultiplierType("globalVolume", GG), this._howl.volume(GG)
      }
      _setPannerAttr(GG) {
        let {
          id: bG,
          coneInnerAngle: ZG = 360,
          coneOuterAngle: wG = 360,
          coneOuterGain: SG = 0,
          distanceModel: LG = "inverse",
          maxDistance: yG = 1e3,
          panningModel: kG = "HRTF",
          refDistance: UG = KG.l,
          rolloffFactor: YG = 1
        } = GG;
        const VG = this.liveHowl();
        if (null === VG) return;
        VG.pannerAttr({
          coneOuterAngle: wG
        }, bG);
        const pG = {
          coneInnerAngle: ZG,
          coneOuterAngle: wG,
          coneOuterGain: SG,
          distanceModel: LG,
          maxDistance: yG,
          panningModel: kG,
          refDistance: UG,
          rolloffFactor: YG
        };
        VG.pannerAttr(pG, bG)
      }
    }
    const uG = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new JG.c, hG.l.subscribe("appManagerUpdated|soundVolume", (GG => {
          const bG = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const ZG of bG) ZG.setGlobalVolume(GG)
        }))
      }
      play(GG, bG) {
        var ZG;
        let LG, yG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (ZG = (0, QG.i)()) || void 0 === ZG ? void 0 : ZG.sA,
          kG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : KG.i,
          UG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : KG.l,
          VG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var fG;
        (0, QG.i)() ? LG = !!Array.isArray(yG) || (0, YG.d)(yG) !== (null === (fG = (0, QG.i)()) || void 0 === fG ? void 0 : fG.sA): LG = !1;
        const hG = (0, wG.j)(GG),
          dG = this.loadSheet(LG ? this.spatialSheets : this.stereoSheets, hG);
        if (!LG) {
          const ZG = dG.play(GG, VG);
          return ZG.setRelativeVolume(bG), ZG
        }
        const rG = (0, QG.i)(),
          zG = Array.isArray(yG) ? yG : rG.Hr.HJ(yG),
          XG = rG.Hr.HJ(rG.sA);
        if (!zG || pG().sqrDist(zG, XG) > kG * kG) return oG;
        let uG;
        if (!VG) {
          if (!this.spatialVoices.admit({
              group: EG.has(hG) ? null : (0, JG.i)(GG),
              loudness: (0, JG.f)(bG, pG().ey(zG, XG), UG),
              startMs: performance.now(),
              getDurationMs: () => {
                var GG, bG;
                return null !== (GG = null === (bG = uG) || void 0 === bG ? void 0 : bG.getDurationMs()) && void 0 !== GG ? GG : 0
              },
              isAlive: () => {
                var GG, bG;
                return null !== (GG = null === (bG = uG) || void 0 === bG ? void 0 : bG.isAlive()) && void 0 !== GG && GG
              },
              canStop: () => {
                var GG, bG;
                return null !== (GG = null === (bG = uG) || void 0 === bG ? void 0 : bG.stopsAtOnce()) && void 0 !== GG && GG
              },
              stop: () => {
                var GG;
                null === (GG = uG) || void 0 === GG || GG.stop()
              }
            })) return oG
        }
        return uG = dG.play(GG, VG), uG.setRelativeVolume(bG), uG.setPannerAttr({
          refDistance: UG
        }), uG.setPosition([zG[0], zG[1] + SG.d.td * SG.d.playerEyeToHeightRatio, zG[2]]), uG
      }
      preload(GG) {
        this.loadSheet(this.stereoSheets, (0, wG.j)(GG))
      }
      loadSheet(GG, bG) {
        let ZG = GG[bG];
        return ZG || ((0, zG.c)(bG), ZG = new XG({
          src: bG,
          isSoundSprite: !0,
          volumeScalar: 1
        }), ZG.setGlobalVolume(dG.e.get("soundVolume")), GG[bG] = ZG), ZG
      }
      freeSheetsAfterGame() {
        for (const GG of [this.stereoSheets, this.spatialSheets])
          for (const [bG, ZG] of Object.entries(GG)) !rG.e.has(bG) && ZG.loaded() && (ZG.unloadOnceIdle(), delete GG[bG])
      }
    }
  },
  37186: (GG, bG, ZG) => {
    function wG(GG, bG) {
      var ZG, wG, SG, LG, yG, kG, UG, YG;
      return GG.name === bG.name && ((null === (ZG = GG.attributes) || void 0 === ZG || null === (wG = ZG.customAttributes) || void 0 === wG ? void 0 : wG.stackKey) === (null === (SG = bG.attributes) || void 0 === SG || null === (LG = SG.customAttributes) || void 0 === LG ? void 0 : LG.stackKey) && (!0 !== (null === (yG = GG.attributes) || void 0 === yG || null === (kG = yG.customAttributes) || void 0 === kG ? void 0 : kG.unstackable) && !0 !== (null === (UG = bG.attributes) || void 0 === UG || null === (YG = UG.customAttributes) || void 0 === YG ? void 0 : YG.unstackable)))
    }
    ZG.d(bG, {
      e: () => wG
    })
  },
  37287: (GG, bG, ZG) => {
    function wG(GG) {
      return GG.includes("Leaf Bed")
    }

    function SG(GG) {
      return / Bed(?: Head)?(?:\||$)/.test(GG) && !wG(GG)
    }

    function LG(GG) {
      return GG.includes(" Strongbed")
    }

    function yG(GG) {
      return wG(GG) || SG(GG) || LG(GG)
    }
    ZG.d(bG, {
      d: () => yG,
      f: () => wG,
      j: () => LG,
      n: () => SG
    })
  },
  37283: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG
    });
    var wG = ZG(37287),
      SG = ZG(9249);
    const LG = [],
      yG = [],
      kG = [],
      UG = [];
    for (const VG of Object.keys(SG.t))(0, wG.f)(VG) ? LG.push(VG) : (0, wG.n)(VG) && yG.push(VG), (0, wG.j)(VG) && kG.push(VG), (VG.includes(" Bed Head") || VG.includes(" Strongbed Head")) && UG.push(VG);
    const YG = {
      leafBeds: LG,
      woolBeds: yG,
      strongBeds: kG,
      beds: [...LG, ...yG, ...kG],
      bedHeads: UG,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6488: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      i: () => SG,
      j: () => UG,
      m: () => LG,
      o: () => YG,
      q: () => wG,
      t: () => kG
    });
    let wG = function(GG) {
        return GG[GG.DEFAULT = 0] = "DEFAULT", GG[GG.BOAT = 1] = "BOAT", GG[GG.GLIDER = 2] = "GLIDER", GG[GG.BALLOON = 3] = "BALLOON", GG[GG.SLEEPING = 4] = "SLEEPING", GG[GG.RIDING_MOB = 5] = "RIDING_MOB", GG[GG.CAR = 6] = "CAR", GG[GG.HOVERCRAFT = 7] = "HOVERCRAFT", GG
      }({}),
      SG = function(GG) {
        return GG[GG.WOOD = 0] = "WOOD", GG[GG.OBSIDIAN = 1] = "OBSIDIAN", GG[GG.SPEED = 2] = "SPEED", GG
      }({}),
      LG = function(GG) {
        return GG[GG.WOOD = 0] = "WOOD", GG[GG.IRON = 1] = "IRON", GG[GG.GOLD = 2] = "GOLD", GG[GG.DIAMOND = 3] = "DIAMOND", GG
      }({}),
      yG = function(GG) {
        return GG[GG.YELLOW = 0] = "YELLOW", GG[GG.WHITE = 1] = "WHITE", GG[GG.RED = 2] = "RED", GG[GG.PURPLE = 3] = "PURPLE", GG[GG.PINK = 4] = "PINK", GG[GG.ORANGE = 5] = "ORANGE", GG[GG.MAGENTA = 6] = "MAGENTA", GG[GG.LIME = 7] = "LIME", GG[GG.LIGHT_GRAY = 8] = "LIGHT_GRAY", GG[GG.LIGHT_BLUE = 9] = "LIGHT_BLUE", GG[GG.GREEN = 10] = "GREEN", GG[GG.GRAY = 11] = "GRAY", GG[GG.CYAN = 12] = "CYAN", GG[GG.BROWN = 13] = "BROWN", GG[GG.BLUE = 14] = "BLUE", GG[GG.BLACK = 15] = "BLACK", GG
      }({}),
      kG = function(GG) {
        return GG[GG.ROTATION_1 = 0] = "ROTATION_1", GG[GG.ROTATION_2 = 1] = "ROTATION_2", GG[GG.ROTATION_3 = 2] = "ROTATION_3", GG[GG.ROTATION_4 = 3] = "ROTATION_4", GG
      }({}),
      UG = function(GG) {
        return GG[GG.KART = 0] = "KART", GG[GG.OFF_ROADER = 1] = "OFF_ROADER", GG[GG.CAR = 2] = "CAR", GG[GG.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", GG[GG.ARMORED_CAR = 4] = "ARMORED_CAR", GG[GG.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", GG[GG.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", GG[GG.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", GG
      }({});
    wG.DEFAULT, wG.BOAT, SG.SPEED, wG.GLIDER, LG.DIAMOND, wG.BALLOON, yG.BLACK, wG.SLEEPING, kG.ROTATION_4, wG.RIDING_MOB, wG.CAR, UG.MOONSTONE_MINING_DRILL, wG.HOVERCRAFT;
    let YG = function(GG) {
      return GG[GG.NORMAL = 0] = "NORMAL", GG[GG.GLIDING = 1] = "GLIDING", GG[GG.FLOATING = 2] = "FLOATING", GG
    }({})
  },
  34454: () => {}
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);