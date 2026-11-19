export const id = 114;
export const ids = [114];
export const modules = {
  36041: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => QY,
      e: () => lY
    });
    DY(8724);
    var FY = DY(61),
      AY = DY(1430),
      IY = DY(1808),
      RY = DY(1834),
      OY = DY(19),
      gY = DY(2282),
      aY = DY(36048),
      vY = DY(36052),
      uY = DY(8680),
      sY = DY(8718),
      iY = DY(8733),
      yY = DY(1125);
    const QY = (0, FY.memo)((function() {
      var YY;
      const {
        isTouchScreen: rY,
        clientEscMenuOptions: DY,
        scriptedCameraFacing: IY,
        crosshairShownOverride: QY,
        crosshairGameView: WY
      } = (0, OY.j)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), EY = (0, gY.j)("gunshotOrigin"), mY = (0, FY.useRef)(null), VY = (0, FY.useRef)(!1), [SY, TY] = (0, FY.useState)(oY);
      (0, AY.g)("cameraZoomSet", TY), (0, FY.useEffect)((() => {
        TY(oY())
      }), []);
      const eY = (0, RY.h)("heldItemAim"),
        BY = eY.gun,
        cY = (0, iY.e)(),
        KY = (0, FY.useRef)(cY);
      KY.current = cY;
      const [HY, zY] = (0, FY.useState)(!1);
      (0, FY.useEffect)((() => (0, vY.g)("crosshairAccuracy", lY)), []), (0, AY.g)("mouseState", (YY => {
        let {
          isDown: rY
        } = YY;
        VY.current = rY, mY.current && (mY.current.style.transform = (0, sY.g)(rY, KY.current.growOnClick)), "shapes" === KY.current.style && zY(rY)
      }));
      const ZY = (0, uY.g)(rY, DY.touchActionButtons);
      return (null !== (YY = (0, aY.c)(WY, QY)) && void 0 !== YY ? YY : (0, aY.i)(eY, SY > 1, ZY, EY)) ? "movement" === IY || "cursor" === IY ? null : (0, yY.jsxs)(yY.Fragment, {
        children: [BY && (0, yY.jsx)(NY, {
          custom: cY.forGuns && "shapes" === cY.style ? cY : null,
          touch: rY
        }), !BY && (0, yY.jsx)(sY.d, {
          settings: cY,
          touch: rY,
          pressRef: mY,
          pressed: "shapes" === cY.style ? HY : VY.current
        })]
      }) : null
    }));

    function oY() {
      return IY.gameBridge.lookup("cameraZoom", null)
    }
    const WY = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      EY = {
        current: null
      },
      mY = {
        current: null
      };
    let VY = 0,
      SY = 0;

    function lY(YY) {
      SY = YY, WY[0].current || EY.current || mY.current ? eY(YY) : VY = YY
    }

    function TY(YY) {
      return ((0, aY.g)(YY) - (0, aY.g)(0)) * window.innerHeight / 100
    }

    function eY(YY) {
      var rY;
      if (null === (rY = mY.current) || void 0 === rY || rY.call(mY, TY(YY)), WY[0].current) {
        const rY = `${(0,aY.g)(YY)}vh`;
        WY[0].current.style.transform = `translateX(calc(0px - ${rY}))`, WY[1].current.style.transform = `translateX(calc(0px + ${rY}))`, WY[2].current.style.transform = `translateY(calc(0px - ${rY}))`, WY[3].current.style.transform = `translateY(calc(0px + ${rY}))`
      }
      EY.current && (EY.current.style.filter = `blur(${Math.round(YY/10)}px)`)
    }

    function NY(YY) {
      let {
        custom: rY,
        touch: DY
      } = YY;
      const IY = (0, AY.k)("aimingOverlay", "none"),
        RY = "1.2vh",
        OY = "0.3vh";
      (0, FY.useEffect)((() => {
        VY && eY(VY)
      }), []);
      const gY = (0, FY.useRef)(null !== rY);
      return (0, FY.useLayoutEffect)((() => {
        var YY;
        rY ? null === (YY = mY.current) || void 0 === YY || YY.call(mY, TY(SY)) : gY.current && eY(SY);
        gY.current = null !== rY
      }), [rY]), (0, yY.jsxs)(yY.Fragment, {
        children: ["sniper" === IY && (0, yY.jsxs)("div", {
          ref: EY,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, yY.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, yY.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, yY.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, yY.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, yY.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === IY ? 0 : 1
          },
          children: [rY && (0, yY.jsx)(sY.d, {
            settings: rY,
            touch: DY,
            spreadRef: mY
          }), !rY && (0, yY.jsxs)(yY.Fragment, {
            children: [(0, yY.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: RY,
                height: OY,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: WY[0]
            }), (0, yY.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: RY,
                height: OY,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: WY[1]
            }), (0, yY.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: OY,
                height: RY,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: WY[2]
            }), (0, yY.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: OY,
                height: RY,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: WY[3]
            })]
          })]
        })]
      })
    }
  },
  8718: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      g: () => uY
    });
    DY(8724);
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(61),
      RY = DY(8685);

    function OY(YY, rY) {
      return Math.max(1, Math.round(YY * rY))
    }

    function gY(YY, rY, DY) {
      const FY = 2 * DY >= rY - 1;
      return {
        x: YY,
        y: YY,
        size: rY,
        border: Math.min(DY, Math.floor(rY / 2)),
        filled: FY
      }
    }
    var aY = DY(1125);
    const vY = 1.4;

    function uY(YY, rY) {
      return YY && rY ? `scale(${vY})` : "scale(1)"
    }

    function sY(YY) {
      return "classic" === YY.settings.style ? (0, aY.jsx)(QY, {
        ...YY
      }) : (0, aY.jsx)(lY, {
        ...YY
      })
    }
    const iY = .125;

    function yY(YY, rY) {
      const DY = {};
      if (YY.color !== RY.f.color && (DY.color = (0, RY.j)(YY.color)), YY.opacity !== RY.f.opacity && (DY.opacity = YY.opacity / 100), YY.outline !== RY.f.outline || YY.outlineColor !== RY.f.outlineColor) {
        const rY = YY.outline,
          FY = (0, RY.j)(YY.outlineColor);
        DY.textShadow = rY > 0 ? `-${rY}px 0 ${FY}, 0 ${rY}px ${FY}, ${rY}px 0 ${FY}, 0 -${rY}px ${FY}` : "none"
      }
      if (YY.size !== RY.f.size) {
        const FY = YY.size / 100;
        DY.fontSize = rY ? `calc(max(1.3rem, 18px) * ${FY})` : `calc(1.3rem * ${FY})`, DY.marginTop = `-${iY}em`, DY.transformOrigin = `50% calc(50% + ${iY}em)`
      }
      return DY
    }

    function QY(YY) {
      let {
        settings: rY,
        touch: DY,
        inPreview: FY,
        inEditor: IY,
        pressed: RY = !1,
        pressRef: OY
      } = YY;
      return (0, aY.jsx)("div", {
        className: AY()("Crosshair", {
          Touch: DY,
          CrosshairInPreview: FY,
          CrosshairInEditor: IY || FY
        }),
        ref: OY,
        style: {
          transform: uY(RY, rY.growOnClick),
          ...yY(rY, DY)
        },
        children: "+"
      })
    }

    function oY(YY, rY) {
      return YY / rY + "px"
    }

    function WY(YY, rY, DY, FY) {
      return {
        ...VY(YY, rY, DY),
        width: oY(YY.w, DY),
        height: oY(YY.h, DY),
        background: FY
      }
    }

    function EY(YY, rY, DY) {
      return {
        left: oY(YY.x, rY),
        top: oY(YY.y, rY),
        width: oY(YY.size, rY),
        height: oY(YY.size, rY),
        borderWidth: oY(YY.border, rY),
        borderColor: DY,
        background: YY.filled ? DY : void 0
      }
    }
    const mY = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function VY(YY, rY, DY) {
      const [FY, AY] = YY.arm ? mY[YY.arm] : [0, 0], IY = Math.round(rY * DY);
      return {
        left: oY(YY.x + FY * IY, DY),
        top: oY(YY.y + AY * IY, DY)
      }
    }

    function SY(YY) {
      return YY.arm ? {
        "data-arm": YY.arm,
        "data-x": YY.x,
        "data-y": YY.y
      } : {}
    }

    function lY(YY) {
      let {
        settings: rY,
        inPreview: DY,
        inEditor: FY,
        pressed: uY = !1,
        spread: sY,
        spreadRef: iY
      } = YY;
      const yY = (0, IY.useRef)(null),
        {
          box: QY,
          dpr: oY
        } = function(YY) {
          const [rY, DY] = (0, IY.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, IY.useLayoutEffect)((() => {
            const rY = YY.current;
            if (!rY) return;
            const FY = () => {
              const YY = rY.getBoundingClientRect(),
                FY = window.devicePixelRatio || 1;
              DY((rY => rY.dpr === FY && rY.box.left === YY.left && rY.box.top === YY.top && rY.box.width === YY.width && rY.box.height === YY.height ? rY : {
                box: {
                  left: YY.left,
                  top: YY.top,
                  width: YY.width,
                  height: YY.height
                },
                dpr: FY
              }))
            };
            FY();
            const AY = new ResizeObserver(FY);
            return AY.observe(rY), window.addEventListener("resize", FY), window.addEventListener("scroll", FY, !0), () => {
              AY.disconnect(), window.removeEventListener("resize", FY), window.removeEventListener("scroll", FY, !0)
            }
          }), [YY]), rY
        }(yY),
        mY = (0, IY.useRef)(oY);
      mY.current = oY;
      const lY = function(YY, rY) {
          const DY = OY(YY.lineThickness, rY),
            FY = OY(YY.lineLength, rY),
            AY = Math.round(YY.gap * rY),
            IY = OY(YY.dotSize, rY),
            RY = YY.outline > 0 ? OY(YY.outline, rY) : 0,
            aY = OY(YY.circleThickness, rY),
            vY = YY.circle ? Math.round(YY.circleRadius * rY * 2 + aY) : 0,
            uY = function(YY, rY, DY, FY) {
              return YY.lines ? rY : YY.dot ? DY : YY.circle && FY % 2 === 0 ? 2 : 1
            }(YY, DY, IY, vY),
            sY = [];
          if (YY.lines && (sY.push({
              x: uY + AY,
              y: 0,
              w: FY,
              h: DY,
              arm: "right"
            }), sY.push({
              x: -AY - FY,
              y: 0,
              w: FY,
              h: DY,
              arm: "left"
            }), sY.push({
              x: 0,
              y: uY + AY,
              w: DY,
              h: FY,
              arm: "down"
            }), YY.tStyle || sY.push({
              x: 0,
              y: -AY - FY,
              w: DY,
              h: FY,
              arm: "up"
            }), 0 === AY && sY.push({
              x: 0,
              y: 0,
              w: DY,
              h: DY
            })), YY.dot) {
            const YY = Math.floor((uY - IY) / 2);
            sY.push({
              x: YY,
              y: YY,
              w: IY,
              h: IY
            })
          }
          const iY = sY.map((YY => ({
            ...YY,
            x: YY.x - RY,
            y: YY.y - RY,
            w: YY.w + 2 * RY,
            h: YY.h + 2 * RY
          })));
          let yY = null,
            QY = null;
          if (YY.circle) {
            const YY = vY + ((vY - uY) % 2 === 0 ? 0 : 1),
              rY = (uY - YY) / 2;
            yY = gY(rY, YY, aY), RY > 0 && (QY = gY(rY - RY, YY + 2 * RY, aY + 2 * RY))
          }
          return {
            cell: uY,
            fills: sY,
            outlines: RY > 0 ? iY : [],
            ring: yY,
            ringOutline: QY
          }
        }(uY && rY.growOnClick ? function(YY, rY) {
          return {
            ...YY,
            outline: YY.outline * rY,
            lineLength: YY.lineLength * rY,
            lineThickness: YY.lineThickness * rY,
            gap: YY.gap * rY,
            dotSize: YY.dotSize * rY,
            circleRadius: YY.circleRadius * rY,
            circleThickness: YY.circleThickness * rY
          }
        }(rY, vY) : rY, oY),
        TY = function(YY, rY, DY) {
          const FY = Math.round((YY.left + YY.width / 2) * DY - rY / 2),
            AY = Math.round((YY.top + YY.height / 2) * DY - rY / 2);
          return {
            x: FY / DY - YY.left,
            y: AY / DY - YY.top
          }
        }(QY, lY.cell, oY),
        eY = (0, RY.j)(rY.color),
        NY = (0, RY.j)(rY.outlineColor),
        BY = (0, IY.useRef)(0);
      (0, IY.useLayoutEffect)((() => {
        if (iY) return iY.current = YY => {
          var rY;
          BY.current = YY, null === (rY = yY.current) || void 0 === rY || rY.querySelectorAll("[data-arm]").forEach((rY => {
            Object.assign(rY.style, VY(function(YY) {
              return {
                x: Number(YY.dataset.x),
                y: Number(YY.dataset.y),
                arm: YY.dataset.arm
              }
            }(rY), YY, mY.current))
          }))
        }, () => {
          iY.current = null
        }
      }), [iY]);
      const cY = null !== sY && void 0 !== sY ? sY : BY.current;
      return (0, aY.jsx)("div", {
        ref: yY,
        className: AY()("CrosshairShapes", {
          CrosshairInPreview: DY,
          CrosshairInEditor: FY || DY,
          CrosshairSpreads: void 0 !== iY
        }),
        children: (0, aY.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: TY.x,
            top: TY.y,
            opacity: rY.opacity / 100
          },
          children: (0, aY.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [lY.ringOutline && (0, aY.jsx)("div", {
              className: "CrosshairRing",
              style: EY(lY.ringOutline, oY, NY)
            }), lY.outlines.map(((YY, rY) => (0, aY.jsx)("div", {
              className: "CrosshairPart",
              ...SY(YY),
              style: WY(YY, cY, oY, NY)
            }, `o${rY}`))), lY.ring && (0, aY.jsx)("div", {
              className: "CrosshairRing",
              style: EY(lY.ring, oY, eY)
            }), lY.fills.map(((YY, rY) => (0, aY.jsx)("div", {
              className: "CrosshairPart",
              ...SY(YY),
              style: WY(YY, cY, oY, eY)
            }, `f${rY}`)))]
          })
        })
      })
    }
  },
  8729: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY,
      e: () => oY,
      i: () => QY
    });
    var FY = DY(8685);
    const AY = "XH1-",
      IY = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      RY = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      OY = ["color", "outlineColor"],
      gY = 1 + 3 * OY.length + RY.length + 1,
      aY = Math.ceil(8 * gY / Math.log2(62)),
      vY = AY.length + aY;

    function uY(YY) {
      let rY = 90;
      for (const DY of YY) rY = 31 * rY + DY & 255;
      return rY
    }
    const sY = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      iY = BigInt(sY.length);

    function yY(YY, rY) {
      let DY = 0n;
      for (const AY of YY) {
        const YY = sY.indexOf(AY);
        if (YY < 0) return null;
        DY = DY * iY + BigInt(YY)
      }
      if (DY >> BigInt(8 * rY) !== 0n) return null;
      const FY = [];
      for (let AY = 0; AY < rY; AY++) FY.unshift(Number(0xffn & DY)), DY >>= 8n;
      return FY
    }

    function QY(YY) {
      let rY = "shapes" === YY.style ? 1 : 0;
      IY.forEach(((DY, FY) => {
        YY[DY] && (rY |= 1 << FY + 1)
      }));
      const DY = [rY];
      for (const AY of OY) {
        const rY = (0, FY.h)(AY, YY[AY]);
        DY.push(rY >> 16 & 255, rY >> 8 & 255, 255 & rY)
      }
      for (const AY of RY) {
        const {
          min: rY,
          step: IY
        } = FY.b[AY];
        DY.push(Math.round(((0, FY.h)(AY, YY[AY]) - rY) / IY))
      }
      return DY.push(uY(DY)), AY + function(YY, rY) {
        let DY = 0n;
        for (const AY of YY) DY = DY << 8n | BigInt(AY);
        let FY = "";
        for (let AY = 0; AY < rY; AY++) FY = sY[Number(DY % iY)] + FY, DY /= iY;
        return FY
      }(DY, aY)
    }

    function oY(YY) {
      for (const rY of YY.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${aY}})`, "gi"))) {
        const YY = WY(yY(rY[1], gY));
        if (YY) return YY
      }
      return null
    }

    function WY(YY) {
      if (!YY || YY.length !== gY || uY(YY.slice(0, -1)) !== YY[YY.length - 1]) return null;
      const rY = YY[0],
        DY = {
          ...FY.f,
          style: 1 & rY ? "shapes" : "classic"
        };
      IY.forEach(((YY, FY) => {
        DY[YY] = 0 !== (rY & 1 << FY + 1)
      }));
      let AY = 1;
      for (const FY of OY) DY[FY] = YY[AY] << 16 | YY[AY + 1] << 8 | YY[AY + 2], AY += 3;
      for (const IY of RY) {
        const {
          min: rY,
          step: RY
        } = FY.b[IY];
        DY[IY] = (0, FY.h)(IY, rY + YY[AY] * RY), AY++
      }
      return DY
    }
  },
  8685: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      f: () => AY,
      h: () => IY,
      j: () => aY,
      k: () => gY,
      o: () => vY,
      r: () => OY,
      u: () => RY
    });
    const FY = {
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
      AY = Object.freeze({
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

    function IY(YY, rY) {
      var DY;
      const {
        min: IY,
        max: RY,
        step: OY
      } = FY[YY];
      if (!Number.isFinite(rY)) return AY[YY];
      const gY = (null !== (DY = String(OY).split(".")[1]) && void 0 !== DY ? DY : "").length,
        aY = Number((Math.round(rY / OY) * OY).toFixed(gY));
      return Math.min(RY, Math.max(IY, aY))
    }

    function RY(YY, rY, DY) {
      const FY = "number" === typeof DY ? IY(rY, DY) : DY;
      return {
        ...YY,
        [rY]: FY
      }
    }

    function OY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(AY).every((FY => DY.includes(FY) || YY[FY] === rY[FY]))
    }

    function gY(YY) {
      return OY(YY, AY)
    }

    function aY(YY) {
      return `#${YY.toString(16).padStart(6,"0")}`
    }

    function vY(YY) {
      const rY = /^#?([0-9a-f]{6})$/i.exec(YY.trim());
      return rY ? parseInt(rY[1], 16) : null
    }
  },
  8733: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => uY,
      e: () => sY
    });
    var FY = DY(61),
      AY = DY(40),
      IY = DY(8729),
      RY = DY(8685);
    const OY = "crosshairCode";
    let gY = null;
    const aY = new Set;

    function vY() {
      if (null === gY) {
        var YY;
        const rY = AY.m.getItem(OY);
        gY = null !== (YY = "string" === typeof rY ? (0, IY.e)(rY) : null) && void 0 !== YY ? YY : RY.f
      }
      return gY
    }

    function uY(YY) {
      gY = YY, (0, RY.k)(YY) ? AY.m.removeItem(OY) : AY.m.setItem(OY, (0, IY.i)(YY));
      for (const rY of aY) rY()
    }

    function sY() {
      const [YY, rY] = (0, FY.useState)(vY);
      return (0, FY.useEffect)((() => {
        const YY = () => {
          rY(vY())
        };
        return YY(), DY = YY, aY.add(DY), () => {
          aY.delete(DY)
        };
        var DY
      }), []), YY
    }
  },
  36158: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      g: () => gY,
      h: () => RY
    });
    var FY = DY(625),
      AY = DY(2501);

    function IY(YY) {
      return YY === (0, AY.e)().W8 ? (0, AY.e)().yB : YY
    }

    function RY(YY) {
      return !(0, FY.H)(YY) && IY(YY) === (0, AY.e)().yB
    }
    const OY = "gravity";

    function gY() {
      return (0, AY.e)().physics[OY][1]
    }
  },
  35869: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      countDecodesAs: () => vY,
      decodedAudio: () => uY
    });
    var FY = DY(4434);
    const AY = FY.Howler,
      IY = new Map;
    let RY = 0;
    const OY = {
        song: 0,
        sheet: 0
      },
      gY = new WeakMap,
      aY = new WeakSet;

    function vY(YY, rY) {
      return gY.set(YY, rY), YY
    }

    function uY() {
      return {
        bytes: RY,
        songsDecoded: OY.song,
        sheetsDecoded: OY.sheet
      }
    }

    function sY(YY) {
      if (aY.has(YY)) return;
      aY.add(YY);
      const rY = 1 === YY.decodeAudioData.length,
        DY = YY.decodeAudioData.bind(YY);
      YY.decodeAudioData = (YY, FY, aY) => {
        const vY = YY => {
          const rY = AY._howls.filter((YY => "loaded" !== YY._state));
          try {
            null === FY || void 0 === FY || FY(YY)
          } finally {
            const DY = rY.find((YY => "loaded" === YY._state));
            void 0 !== DY && "string" === typeof DY._src && function(YY, rY, DY) {
              var FY;
              RY += DY - (null !== (FY = IY.get(rY)) && void 0 !== FY ? FY : 0), IY.set(rY, DY);
              const AY = gY.get(YY);
              void 0 !== AY && OY[AY]++
            }(DY, DY._src, YY.length * YY.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return YY
        };
        if (!rY) return DY(YY, vY, aY);
        const uY = DY(YY).then(vY);
        return uY.catch((YY => {
          null === aY || void 0 === aY || aY(YY)
        })), uY
      }
    }
    const iY = FY.Howl.prototype,
      yY = iY.init;
    iY.init = function(YY) {
      return FY.Howler.volume(), AY.ctx && sY(AY.ctx), yY.call(this, YY)
    };
    const QY = iY.unload;
    iY.unload = function() {
      const YY = this._src,
        rY = QY.call(this);
      if ("string" !== typeof YY) return rY;
      const DY = IY.get(YY);
      return void 0 !== DY && function(YY) {
        return !AY._howls.some((rY => rY._src === YY || "string" === typeof rY._src && YY.indexOf(rY._src) >= 0))
      }(YY) && (IY.delete(YY), RY -= DY), rY
    }
  },
  36149: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => VY
    });
    var FY = DY(36151),
      AY = DY(213),
      IY = DY(4434),
      RY = DY(35869),
      OY = DY(36178),
      gY = DY(36158),
      aY = DY(358),
      vY = DY.n(aY),
      uY = DY(1222),
      sY = DY(2501),
      iY = DY(36174),
      yY = DY(25),
      QY = DY(19),
      oY = DY(36167);
    const WY = new Set(["note"]);
    const EY = {
      stop: () => EY,
      fade: () => EY,
      rate: () => EY,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => EY,
      setPannerAttr: () => EY,
      setPosition: () => EY
    };
    class mY {
      constructor(YY) {
        let rY, {
          src: DY,
          volumeScalar: AY,
          isSoundSprite: gY
        } = YY;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, gY ? (rY = (0, FY.g)(DY), this._spriteTrackSrc = rY) : rY = {
          src: uY.clientSideServerUrls.staticUrl + DY
        }, this._volumeMultiplier = new OY.j, this._volumeMultiplier.setMultiplierType("persistentScalar", AY), this._howl = (0, RY.countDecodesAs)(new IY.Howl({
          ...rY,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let YY, rY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          DY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (rY) {
          var FY;
          if (null === (FY = this._spriteTrackSrc) || void 0 === FY || !FY.sprite[rY]) throw new Error("No such sprite in your spritetrack");
          YY = this._howl.play(rY)
        } else YY = this._howl.play();
        DY && this._howl.loop(!0, YY);
        let AY = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), YY);
        const IY = {
          stop: () => (this._howl.stop(YY), IY),
          fade: (rY, DY, FY) => (this._howl.fade(rY, DY, FY, YY), IY),
          rate: rY => (this._howl.rate(rY, YY), IY),
          stopsAtOnce: () => this._howl.playing(YY) && !this._howl._playLock,
          isAlive: () => {
            const rY = this._howl._soundById(YY);
            return !this._loadFailed && !!rY && !rY._ended
          },
          getDurationMs: () => this._howl._soundById(YY) ? 1e3 * this._howl.duration(YY) / this._howl.rate(YY) : 0,
          getVolume: () => AY * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => AY,
          setRelativeVolume: rY => {
            if (rY > 1) throw new Error("Volume should be <= 1");
            return AY = QY.b.get("soundOnFromAd") ? rY : 0, this._howl.volume(Math.min(1, AY * this._volumeMultiplier.getTotalMultipliedVal()), YY), IY
          },
          setPannerAttr: rY => {
            let {
              coneInnerAngle: DY,
              coneOuterAngle: FY = 360,
              coneOuterGain: AY,
              distanceModel: RY,
              maxDistance: OY,
              panningModel: gY,
              refDistance: aY,
              rolloffFactor: vY
            } = rY;
            return this._setPannerAttr({
              id: YY,
              coneInnerAngle: DY,
              coneOuterAngle: FY,
              coneOuterGain: AY,
              distanceModel: RY,
              maxDistance: OY,
              panningModel: gY,
              refDistance: aY,
              rolloffFactor: vY
            }), IY
          },
          setPosition: rY => (this._howl.pos(rY[2], rY[1], rY[0], YY), IY)
        };
        return IY
      }
      setGlobalVolume(YY) {
        this._volumeMultiplier.setMultiplierType("globalVolume", YY), this._howl.volume(YY)
      }
      _setPannerAttr(YY) {
        let {
          id: rY,
          coneInnerAngle: DY = 360,
          coneOuterAngle: FY = 360,
          coneOuterGain: AY = 0,
          distanceModel: IY = "inverse",
          maxDistance: RY = 1e3,
          panningModel: OY = "HRTF",
          refDistance: gY = iY.g,
          rolloffFactor: aY = 1
        } = YY;
        this._howl.pannerAttr({
          coneOuterAngle: FY
        }, rY);
        const vY = {
          coneInnerAngle: DY,
          coneOuterAngle: FY,
          coneOuterGain: AY,
          distanceModel: IY,
          maxDistance: RY,
          panningModel: OY,
          refDistance: gY,
          rolloffFactor: aY
        };
        this._howl.pannerAttr(vY, rY)
      }
    }
    const VY = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new oY.c, yY.g.subscribe("appManagerUpdated|soundVolume", (YY => {
          const rY = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const DY of rY) DY.setGlobalVolume(YY)
        }))
      }
      play(YY, rY) {
        var DY;
        let IY, RY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (DY = (0, sY.e)()) || void 0 === DY ? void 0 : DY.yB,
          OY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iY.e,
          aY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : iY.g,
          uY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var yY;
        (0, sY.e)() ? IY = !!Array.isArray(RY) || (0, gY.e)(RY) !== (null === (yY = (0, sY.e)()) || void 0 === yY ? void 0 : yY.yB): IY = !1;
        const VY = IY ? this.spatialSheets : this.stereoSheets,
          SY = (0, FY.k)(YY);
        if (!VY[SY]) {
          const YY = new mY({
            src: SY,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          YY.setGlobalVolume(QY.b.get("soundVolume")), VY[SY] = YY
        }
        const lY = VY[SY];
        if (!IY) {
          const DY = lY.play(YY, uY);
          return DY.setRelativeVolume(rY), DY
        }
        const TY = (0, sY.e)(),
          eY = Array.isArray(RY) ? RY : TY.Am.lE(RY),
          NY = TY.Am.lE(TY.yB);
        if (!eY || vY().sqrDist(eY, NY) > OY * OY) return EY;
        let BY;
        if (!uY) {
          if (!this.spatialVoices.admit({
              group: WY.has(SY) ? null : (0, oY.j)(YY),
              loudness: (0, oY.f)(rY, vY().Ua(eY, NY), aY),
              startMs: performance.now(),
              getDurationMs: () => {
                var YY, rY;
                return null !== (YY = null === (rY = BY) || void 0 === rY ? void 0 : rY.getDurationMs()) && void 0 !== YY ? YY : 0
              },
              isAlive: () => {
                var YY, rY;
                return null !== (YY = null === (rY = BY) || void 0 === rY ? void 0 : rY.isAlive()) && void 0 !== YY && YY
              },
              canStop: () => {
                var YY, rY;
                return null !== (YY = null === (rY = BY) || void 0 === rY ? void 0 : rY.stopsAtOnce()) && void 0 !== YY && YY
              },
              stop: () => {
                var YY;
                null === (YY = BY) || void 0 === YY || YY.stop()
              }
            })) return EY
        }
        return BY = lY.play(YY, uY), BY.setRelativeVolume(rY), BY.setPannerAttr({
          refDistance: aY
        }), BY.setPosition([eY[0], eY[1] + AY.d.jW * AY.d.playerEyeToHeightRatio, eY[2]]), BY
      }
    }
  },
  36221: (YY, rY, DY) => {
    function FY(YY, rY) {
      var DY, FY, AY, IY, RY, OY, gY, aY;
      return YY.name === rY.name && ((null === (DY = YY.attributes) || void 0 === DY || null === (FY = DY.customAttributes) || void 0 === FY ? void 0 : FY.stackKey) === (null === (AY = rY.attributes) || void 0 === AY || null === (IY = AY.customAttributes) || void 0 === IY ? void 0 : IY.stackKey) && (!0 !== (null === (RY = YY.attributes) || void 0 === RY || null === (OY = RY.customAttributes) || void 0 === OY ? void 0 : OY.unstackable) && !0 !== (null === (gY = rY.attributes) || void 0 === gY || null === (aY = gY.customAttributes) || void 0 === aY ? void 0 : aY.unstackable)))
    }
    DY.d(rY, {
      b: () => FY
    })
  },
  36318: (YY, rY, DY) => {
    function FY(YY) {
      return YY.includes("Leaf Bed")
    }

    function AY(YY) {
      return / Bed(?: Head)?(?:\||$)/.test(YY) && !FY(YY)
    }

    function IY(YY) {
      return YY.includes(" Strongbed")
    }

    function RY(YY) {
      return FY(YY) || AY(YY) || IY(YY)
    }
    DY.d(rY, {
      e: () => RY,
      h: () => FY,
      i: () => IY,
      l: () => AY
    })
  },
  36314: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY
    });
    var FY = DY(36318),
      AY = DY(8830);
    const IY = [],
      RY = [],
      OY = [],
      gY = [];
    for (const vY of Object.keys(AY.m))(0, FY.h)(vY) ? IY.push(vY) : (0, FY.l)(vY) && RY.push(vY), (0, FY.i)(vY) && OY.push(vY), (vY.includes(" Bed Head") || vY.includes(" Strongbed Head")) && gY.push(vY);
    const aY = {
      leafBeds: IY,
      woolBeds: RY,
      strongBeds: OY,
      beds: [...IY, ...RY, ...OY],
      bedHeads: gY,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6041: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      e: () => AY,
      h: () => gY,
      j: () => IY,
      m: () => aY,
      n: () => FY,
      p: () => OY
    });
    let FY = function(YY) {
        return YY[YY.DEFAULT = 0] = "DEFAULT", YY[YY.BOAT = 1] = "BOAT", YY[YY.GLIDER = 2] = "GLIDER", YY[YY.BALLOON = 3] = "BALLOON", YY[YY.SLEEPING = 4] = "SLEEPING", YY[YY.RIDING_MOB = 5] = "RIDING_MOB", YY[YY.CAR = 6] = "CAR", YY[YY.HOVERCRAFT = 7] = "HOVERCRAFT", YY
      }({}),
      AY = function(YY) {
        return YY[YY.WOOD = 0] = "WOOD", YY[YY.OBSIDIAN = 1] = "OBSIDIAN", YY[YY.SPEED = 2] = "SPEED", YY
      }({}),
      IY = function(YY) {
        return YY[YY.WOOD = 0] = "WOOD", YY[YY.IRON = 1] = "IRON", YY[YY.GOLD = 2] = "GOLD", YY[YY.DIAMOND = 3] = "DIAMOND", YY
      }({}),
      RY = function(YY) {
        return YY[YY.YELLOW = 0] = "YELLOW", YY[YY.WHITE = 1] = "WHITE", YY[YY.RED = 2] = "RED", YY[YY.PURPLE = 3] = "PURPLE", YY[YY.PINK = 4] = "PINK", YY[YY.ORANGE = 5] = "ORANGE", YY[YY.MAGENTA = 6] = "MAGENTA", YY[YY.LIME = 7] = "LIME", YY[YY.LIGHT_GRAY = 8] = "LIGHT_GRAY", YY[YY.LIGHT_BLUE = 9] = "LIGHT_BLUE", YY[YY.GREEN = 10] = "GREEN", YY[YY.GRAY = 11] = "GRAY", YY[YY.CYAN = 12] = "CYAN", YY[YY.BROWN = 13] = "BROWN", YY[YY.BLUE = 14] = "BLUE", YY[YY.BLACK = 15] = "BLACK", YY
      }({}),
      OY = function(YY) {
        return YY[YY.ROTATION_1 = 0] = "ROTATION_1", YY[YY.ROTATION_2 = 1] = "ROTATION_2", YY[YY.ROTATION_3 = 2] = "ROTATION_3", YY[YY.ROTATION_4 = 3] = "ROTATION_4", YY
      }({}),
      gY = function(YY) {
        return YY[YY.KART = 0] = "KART", YY[YY.OFF_ROADER = 1] = "OFF_ROADER", YY[YY.CAR = 2] = "CAR", YY[YY.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", YY[YY.ARMORED_CAR = 4] = "ARMORED_CAR", YY[YY.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", YY[YY.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", YY[YY.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", YY
      }({});
    FY.DEFAULT, FY.BOAT, AY.SPEED, FY.GLIDER, IY.DIAMOND, FY.BALLOON, RY.BLACK, FY.SLEEPING, OY.ROTATION_4, FY.RIDING_MOB, FY.CAR, gY.MOONSTONE_MINING_DRILL, FY.HOVERCRAFT;
    let aY = function(YY) {
      return YY[YY.NORMAL = 0] = "NORMAL", YY[YY.GLIDING = 1] = "GLIDING", YY[YY.FLOATING = 2] = "FLOATING", YY
    }({})
  },
  8724: () => {}
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);