export const id = 120;
export const ids = [120];
export const modules = {
  36496: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => SC,
      c: () => JC
    });
    ZC(34125);
    var QC = ZC(48),
      wC = ZC(1383),
      bC = ZC(1840),
      nC = ZC(1877),
      fC = ZC(20),
      oC = ZC(2369),
      qC = ZC(36502),
      FC = ZC(36508),
      WC = ZC(34107),
      NC = ZC(34118),
      MC = ZC(34141),
      gC = ZC(1056);
    const SC = (0, QC.memo)((function() {
      var CC;
      const {
        isTouchScreen: zC,
        clientEscMenuOptions: ZC,
        scriptedCameraFacing: bC,
        crosshairShownOverride: SC,
        crosshairGameView: PC
      } = (0, fC.k)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), GC = (0, oC.h)("gunshotOrigin"), RC = (0, QC.useRef)(null), AC = (0, QC.useRef)(!1), [xC, IC] = (0, QC.useState)(pC);
      (0, wC.c)("cameraZoomSet", IC), (0, QC.useEffect)((() => {
        IC(pC())
      }), []);
      const iC = (0, nC.f)("heldItemAim"),
        eC = iC.gun,
        hC = (0, MC.f)(),
        KC = (0, QC.useRef)(hC);
      KC.current = hC;
      const [YC, dC] = (0, QC.useState)(!1);
      (0, QC.useEffect)((() => (0, FC.g)("crosshairAccuracy", JC)), []), (0, wC.c)("mouseState", (CC => {
        let {
          isDown: zC
        } = CC;
        AC.current = zC, RC.current && (RC.current.style.transform = (0, NC.g)(zC, KC.current.growOnClick)), "shapes" === KC.current.style && dC(zC)
      }));
      const mC = (0, WC.h)(zC, ZC.touchActionButtons);
      return (null !== (CC = (0, qC.c)(PC, SC)) && void 0 !== CC ? CC : (0, qC.g)(iC, xC > 1, mC, GC)) ? "movement" === bC || "cursor" === bC ? null : (0, gC.jsxs)(gC.Fragment, {
        children: [eC && (0, gC.jsx)(vC, {
          custom: hC.forGuns && "shapes" === hC.style ? hC : null,
          touch: zC
        }), !eC && (0, gC.jsx)(NC.d, {
          settings: hC,
          touch: zC,
          pressRef: RC,
          pressed: "shapes" === hC.style ? YC : AC.current
        })]
      }) : null
    }));

    function pC() {
      return bC.gameBridge.lookup("cameraZoom", null)
    }
    const PC = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      GC = {
        current: null
      },
      RC = {
        current: null
      };
    let AC = 0,
      xC = 0;

    function JC(CC) {
      xC = CC, PC[0].current || GC.current || RC.current ? iC(CC) : AC = CC
    }

    function IC(CC) {
      return ((0, qC.e)(CC) - (0, qC.e)(0)) * window.innerHeight / 100
    }

    function iC(CC) {
      var zC;
      if (null === (zC = RC.current) || void 0 === zC || zC.call(RC, IC(CC)), PC[0].current) {
        const zC = `${(0,qC.e)(CC)}vh`;
        PC[0].current.style.transform = `translateX(calc(0px - ${zC}))`, PC[1].current.style.transform = `translateX(calc(0px + ${zC}))`, PC[2].current.style.transform = `translateY(calc(0px - ${zC}))`, PC[3].current.style.transform = `translateY(calc(0px + ${zC}))`
      }
      GC.current && (GC.current.style.filter = `blur(${Math.round(CC/10)}px)`)
    }

    function vC(CC) {
      let {
        custom: zC,
        touch: ZC
      } = CC;
      const bC = (0, wC.f)("aimingOverlay", "none"),
        nC = "1.2vh",
        fC = "0.3vh";
      (0, QC.useEffect)((() => {
        AC && iC(AC)
      }), []);
      const oC = (0, QC.useRef)(null !== zC);
      return (0, QC.useLayoutEffect)((() => {
        var CC;
        zC ? null === (CC = RC.current) || void 0 === CC || CC.call(RC, IC(xC)) : oC.current && iC(xC);
        oC.current = null !== zC
      }), [zC]), (0, gC.jsxs)(gC.Fragment, {
        children: ["sniper" === bC && (0, gC.jsxs)("div", {
          ref: GC,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, gC.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, gC.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, gC.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, gC.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, gC.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === bC ? 0 : 1
          },
          children: [zC && (0, gC.jsx)(NC.d, {
            settings: zC,
            touch: ZC,
            spreadRef: RC
          }), !zC && (0, gC.jsxs)(gC.Fragment, {
            children: [(0, gC.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: nC,
                height: fC,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: PC[0]
            }), (0, gC.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: nC,
                height: fC,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: PC[1]
            }), (0, gC.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: fC,
                height: nC,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: PC[2]
            }), (0, gC.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: fC,
                height: nC,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: PC[3]
            })]
          })]
        })]
      })
    }
  },
  34118: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => SC,
      g: () => gC
    });
    ZC(34125);
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(48),
      nC = ZC(34116);

    function fC(CC, zC) {
      return Math.max(1, Math.round(CC * zC))
    }

    function oC(CC, zC) {
      const ZC = zC * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        QC = function(CC, zC) {
          if (CC.lines) return fC(CC.lineThickness, zC) % 2;
          if (CC.dot) return fC(CC.dotSize, zC) % 2;
          return qC(CC, zC) % 2
        }(CC, zC),
        wC = FC(CC.lineThickness * ZC, QC),
        bC = fC(CC.lineLength, ZC),
        nC = Math.round(CC.gap * ZC),
        oC = CC.outline > 0 ? fC(CC.outline, ZC) : 0,
        NC = [];
      if (CC.lines && (NC.push({
          x: wC + nC,
          y: 0,
          w: bC,
          h: wC,
          arm: "right"
        }), NC.push({
          x: -nC - bC,
          y: 0,
          w: bC,
          h: wC,
          arm: "left"
        }), NC.push({
          x: 0,
          y: wC + nC,
          w: wC,
          h: bC,
          arm: "down"
        }), CC.tStyle || NC.push({
          x: 0,
          y: -nC - bC,
          w: wC,
          h: bC,
          arm: "up"
        }), 0 === nC && NC.push({
          x: 0,
          y: 0,
          w: wC,
          h: wC
        })), CC.dot) {
        const zC = FC(CC.dotSize * ZC, QC),
          bC = CC.lines && 0 === nC && CC.dotSize > CC.lineThickness ? Math.max(zC, wC + 2) : zC,
          fC = (wC - bC) / 2;
        NC.push({
          x: fC,
          y: fC,
          w: bC,
          h: bC
        })
      }
      const MC = NC.map((CC => ({
        ...CC,
        x: CC.x - oC,
        y: CC.y - oC,
        w: CC.w + 2 * oC,
        h: CC.h + 2 * oC
      })));
      let gC = null,
        SC = null;
      if (CC.circle) {
        const zC = fC(CC.circleThickness, ZC),
          bC = function(CC, zC) {
            return CC + (CC % 2 === zC ? 0 : 1)
          }(qC(CC, ZC), QC),
          nC = (wC - bC) / 2;
        gC = WC(nC, bC, zC), oC > 0 && (SC = WC(nC - oC, bC + 2 * oC, zC + 2 * oC))
      }
      return {
        cell: wC,
        fills: NC,
        outlines: oC > 0 ? MC : [],
        ring: gC,
        ringOutline: SC
      }
    }

    function qC(CC, zC) {
      return Math.round(CC.circleRadius * zC * 2 + fC(CC.circleThickness, zC))
    }

    function FC(CC, zC) {
      return Math.max(2 - zC, 2 * Math.round((CC - zC) / 2) + zC)
    }

    function WC(CC, zC, ZC) {
      const QC = 2 * ZC >= zC - 1;
      return {
        x: CC,
        y: CC,
        size: zC,
        border: Math.min(ZC, Math.floor(zC / 2)),
        filled: QC
      }
    }
    var NC = ZC(1056);
    const MC = 1.4;

    function gC(CC, zC) {
      return CC && zC ? `scale(${MC})` : "scale(1)"
    }

    function SC(CC) {
      return "classic" === CC.settings.style ? (0, NC.jsx)(GC, {
        ...CC
      }) : (0, NC.jsx)(vC, {
        ...CC
      })
    }
    const pC = .125;

    function PC(CC, zC) {
      const ZC = {};
      if (CC.color !== nC.f.color && (ZC.color = (0, nC.i)(CC.color)), CC.opacity !== nC.f.opacity && (ZC.opacity = CC.opacity / 100), CC.outline !== nC.f.outline || CC.outlineColor !== nC.f.outlineColor) {
        const zC = CC.outline,
          QC = (0, nC.i)(CC.outlineColor);
        ZC.textShadow = zC > 0 ? `-${zC}px 0 ${QC}, 0 ${zC}px ${QC}, ${zC}px 0 ${QC}, 0 -${zC}px ${QC}` : "none"
      }
      if (CC.size !== nC.f.size) {
        const QC = CC.size / 100;
        ZC.fontSize = zC ? `calc(max(1.3rem, 18px) * ${QC})` : `calc(1.3rem * ${QC})`, ZC.marginTop = `-${pC}em`, ZC.transformOrigin = `50% calc(50% + ${pC}em)`
      }
      return ZC
    }

    function GC(CC) {
      let {
        settings: zC,
        touch: ZC,
        inPreview: QC,
        inEditor: bC,
        pressed: nC = !1,
        pressRef: fC
      } = CC;
      return (0, NC.jsx)("div", {
        className: wC()("Crosshair", {
          Touch: ZC,
          CrosshairInPreview: QC,
          CrosshairInEditor: bC || QC
        }),
        ref: fC,
        style: {
          transform: gC(nC, zC.growOnClick),
          ...PC(zC, ZC)
        },
        children: "+"
      })
    }

    function RC(CC, zC) {
      return CC / zC + "px"
    }

    function AC(CC, zC, ZC, QC) {
      return {
        ...IC(CC, zC, ZC),
        width: RC(CC.w, ZC),
        height: RC(CC.h, ZC),
        background: QC
      }
    }

    function xC(CC, zC, ZC) {
      return {
        left: RC(CC.x, zC),
        top: RC(CC.y, zC),
        width: RC(CC.size, zC),
        height: RC(CC.size, zC),
        borderWidth: RC(CC.border, zC),
        borderColor: ZC,
        background: CC.filled ? ZC : void 0
      }
    }
    const JC = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function IC(CC, zC, ZC) {
      const [QC, wC] = CC.arm ? JC[CC.arm] : [0, 0], bC = Math.round(zC * ZC);
      return {
        left: RC(CC.x + QC * bC, ZC),
        top: RC(CC.y + wC * bC, ZC)
      }
    }

    function iC(CC) {
      return CC.arm ? {
        "data-arm": CC.arm,
        "data-x": CC.x,
        "data-y": CC.y
      } : {}
    }

    function vC(CC) {
      let {
        settings: zC,
        inPreview: ZC,
        inEditor: QC,
        pressed: fC = !1,
        spread: qC,
        spreadRef: FC
      } = CC;
      const WC = (0, bC.useRef)(null),
        {
          box: gC,
          dpr: SC
        } = function(CC) {
          const [zC, ZC] = (0, bC.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, bC.useLayoutEffect)((() => {
            const zC = CC.current;
            if (!zC) return;
            const QC = () => {
              const CC = zC.getBoundingClientRect(),
                QC = window.devicePixelRatio || 1;
              ZC((zC => zC.dpr === QC && zC.box.left === CC.left && zC.box.top === CC.top && zC.box.width === CC.width && zC.box.height === CC.height ? zC : {
                box: {
                  left: CC.left,
                  top: CC.top,
                  width: CC.width,
                  height: CC.height
                },
                dpr: QC
              }))
            };
            QC();
            const wC = new ResizeObserver(QC);
            return wC.observe(zC), window.addEventListener("resize", QC), window.addEventListener("scroll", QC, !0), () => {
              wC.disconnect(), window.removeEventListener("resize", QC), window.removeEventListener("scroll", QC, !0)
            }
          }), [CC]), zC
        }(WC),
        pC = (0, bC.useRef)(SC);
      pC.current = SC;
      const PC = oC(zC, SC, fC && zC.growOnClick ? MC : 1),
        GC = function(CC, zC, ZC) {
          const QC = Math.round((CC.left + CC.width / 2) * ZC - zC / 2),
            wC = Math.round((CC.top + CC.height / 2) * ZC - zC / 2);
          return {
            x: QC / ZC - CC.left,
            y: wC / ZC - CC.top
          }
        }(gC, PC.cell, SC),
        RC = (0, nC.i)(zC.color),
        JC = (0, nC.i)(zC.outlineColor),
        vC = (0, bC.useRef)(0);
      (0, bC.useLayoutEffect)((() => {
        if (FC) return FC.current = CC => {
          var zC;
          vC.current = CC, null === (zC = WC.current) || void 0 === zC || zC.querySelectorAll("[data-arm]").forEach((zC => {
            Object.assign(zC.style, IC(function(CC) {
              return {
                x: Number(CC.dataset.x),
                y: Number(CC.dataset.y),
                arm: CC.dataset.arm
              }
            }(zC), CC, pC.current))
          }))
        }, () => {
          FC.current = null
        }
      }), [FC]);
      const eC = null !== qC && void 0 !== qC ? qC : vC.current;
      return (0, NC.jsx)("div", {
        ref: WC,
        className: wC()("CrosshairShapes", {
          CrosshairInPreview: ZC,
          CrosshairInEditor: QC || ZC,
          CrosshairSpreads: void 0 !== FC
        }),
        children: (0, NC.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: GC.x,
            top: GC.y,
            opacity: zC.opacity / 100
          },
          children: (0, NC.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [PC.ringOutline && (0, NC.jsx)("div", {
              className: "CrosshairRing",
              style: xC(PC.ringOutline, SC, JC)
            }), PC.outlines.map(((CC, zC) => (0, NC.jsx)("div", {
              className: "CrosshairPart",
              ...iC(CC),
              style: AC(CC, eC, SC, JC)
            }, `o${zC}`))), PC.ring && (0, NC.jsx)("div", {
              className: "CrosshairRing",
              style: xC(PC.ring, SC, RC)
            }), PC.fills.map(((CC, zC) => (0, NC.jsx)("div", {
              className: "CrosshairPart",
              ...iC(CC),
              style: AC(CC, eC, SC, RC)
            }, `f${zC}`)))]
          })
        })
      })
    }
  },
  34134: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      c: () => pC,
      g: () => SC
    });
    var QC = ZC(34116);
    const wC = "XH1-",
      bC = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      nC = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      fC = ["color", "outlineColor"],
      oC = 1 + 3 * fC.length + nC.length + 1,
      qC = Math.ceil(8 * oC / Math.log2(62)),
      FC = wC.length + qC;

    function WC(CC) {
      let zC = 90;
      for (const ZC of CC) zC = 31 * zC + ZC & 255;
      return zC
    }
    const NC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      MC = BigInt(NC.length);

    function gC(CC, zC) {
      let ZC = 0n;
      for (const wC of CC) {
        const CC = NC.indexOf(wC);
        if (CC < 0) return null;
        ZC = ZC * MC + BigInt(CC)
      }
      if (ZC >> BigInt(8 * zC) !== 0n) return null;
      const QC = [];
      for (let wC = 0; wC < zC; wC++) QC.unshift(Number(0xffn & ZC)), ZC >>= 8n;
      return QC
    }

    function SC(CC) {
      let zC = "shapes" === CC.style ? 1 : 0;
      bC.forEach(((ZC, QC) => {
        CC[ZC] && (zC |= 1 << QC + 1)
      }));
      const ZC = [zC];
      for (const wC of fC) {
        const zC = (0, QC.g)(wC, CC[wC]);
        ZC.push(zC >> 16 & 255, zC >> 8 & 255, 255 & zC)
      }
      for (const wC of nC) {
        const {
          min: zC,
          step: bC
        } = QC.c[wC];
        ZC.push(Math.round(((0, QC.g)(wC, CC[wC]) - zC) / bC))
      }
      return ZC.push(WC(ZC)), wC + function(CC, zC) {
        let ZC = 0n;
        for (const wC of CC) ZC = ZC << 8n | BigInt(wC);
        let QC = "";
        for (let wC = 0; wC < zC; wC++) QC = NC[Number(ZC % MC)] + QC, ZC /= MC;
        return QC
      }(ZC, qC)
    }

    function pC(CC) {
      for (const zC of CC.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${qC}})`, "gi"))) {
        const CC = PC(gC(zC[1], oC));
        if (CC) return CC
      }
      return null
    }

    function PC(CC) {
      if (!CC || CC.length !== oC || WC(CC.slice(0, -1)) !== CC[CC.length - 1]) return null;
      const zC = CC[0],
        ZC = {
          ...QC.f,
          style: 1 & zC ? "shapes" : "classic"
        };
      bC.forEach(((CC, QC) => {
        ZC[CC] = 0 !== (zC & 1 << QC + 1)
      }));
      let wC = 1;
      for (const QC of fC) ZC[QC] = CC[wC] << 16 | CC[wC + 1] << 8 | CC[wC + 2], wC += 3;
      for (const bC of nC) {
        const {
          min: zC,
          step: nC
        } = QC.c[bC];
        ZC[bC] = (0, QC.g)(bC, zC + CC[wC] * nC), wC++
      }
      return ZC
    }
  },
  34116: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      f: () => wC,
      g: () => bC,
      i: () => qC,
      m: () => oC,
      n: () => FC,
      q: () => fC,
      u: () => nC
    });
    const QC = {
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
      wC = Object.freeze({
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

    function bC(CC, zC) {
      var ZC;
      const {
        min: bC,
        max: nC,
        step: fC
      } = QC[CC];
      if (!Number.isFinite(zC)) return wC[CC];
      const oC = (null !== (ZC = String(fC).split(".")[1]) && void 0 !== ZC ? ZC : "").length,
        qC = Number((Math.round(zC / fC) * fC).toFixed(oC));
      return Math.min(nC, Math.max(bC, qC))
    }

    function nC(CC, zC, ZC) {
      const QC = "number" === typeof ZC ? bC(zC, ZC) : ZC;
      return {
        ...CC,
        [zC]: QC
      }
    }

    function fC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(wC).every((QC => ZC.includes(QC) || CC[QC] === zC[QC]))
    }

    function oC(CC) {
      return fC(CC, wC)
    }

    function qC(CC) {
      return `#${CC.toString(16).padStart(6,"0")}`
    }

    function FC(CC) {
      const zC = /^#?([0-9a-f]{6})$/i.exec(CC.trim());
      return zC ? parseInt(zC[1], 16) : null
    }
  },
  34141: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => WC,
      f: () => NC
    });
    var QC = ZC(48),
      wC = ZC(38),
      bC = ZC(34134),
      nC = ZC(34116);
    const fC = "crosshairCode";
    let oC = null;
    const qC = new Set;

    function FC() {
      if (null === oC) {
        var CC;
        const zC = wC.i.getItem(fC);
        oC = null !== (CC = "string" === typeof zC ? (0, bC.c)(zC) : null) && void 0 !== CC ? CC : nC.f
      }
      return oC
    }

    function WC(CC) {
      oC = CC, (0, nC.m)(CC) ? wC.i.removeItem(fC) : wC.i.setItem(fC, (0, bC.g)(CC));
      for (const zC of qC) zC()
    }

    function NC() {
      const [CC, zC] = (0, QC.useState)(FC);
      return (0, QC.useEffect)((() => {
        const CC = () => {
          zC(FC())
        };
        return CC(), ZC = CC, qC.add(ZC), () => {
          qC.delete(ZC)
        };
        var ZC
      }), []), CC
    }
  },
  36647: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      e: () => oC,
      h: () => nC
    });
    var QC = ZC(600),
      wC = ZC(2753);

    function bC(CC) {
      return CC === (0, wC.e)().mCC ? (0, wC.e)().qE : CC
    }

    function nC(CC) {
      return !(0, QC.H)(CC) && bC(CC) === (0, wC.e)().qE
    }
    const fC = "gravity";

    function oC() {
      return (0, wC.e)().physics[fC][1]
    }
  },
  36637: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => IC
    });
    var QC = ZC(36641),
      wC = ZC(184),
      bC = ZC(4797),
      nC = ZC(36643),
      fC = ZC(36318),
      oC = ZC(36673),
      qC = ZC(36647),
      FC = ZC(338),
      WC = ZC.n(FC),
      NC = ZC(1149),
      MC = ZC(2753),
      gC = ZC(36667),
      SC = ZC(28),
      pC = ZC(20),
      PC = ZC(36650),
      GC = ZC(36657),
      RC = ZC(36659);
    const AC = new Set(["note"]);
    const xC = {
      stop: () => xC,
      fade: () => xC,
      rate: () => xC,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => xC,
      setPannerAttr: () => xC,
      setPosition: () => xC
    };
    class JC {
      constructor(CC) {
        let zC, {
          src: ZC,
          volumeScalar: wC,
          isSoundSprite: nC
        } = CC;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, nC ? (zC = (0, QC.j)(ZC), this._spriteTrackSrc = zC) : zC = {
          src: NC.clientSideServerUrls.staticUrl + ZC
        }, this._volumeMultiplier = new oC.i, this._volumeMultiplier.setMultiplierType("persistentScalar", wC), this._howl = (0, fC.countDecodesAs)(new bC.Howl({
          ...zC,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let CC, zC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (zC) {
          var QC;
          if (null === (QC = this._spriteTrackSrc) || void 0 === QC || !QC.sprite[zC]) throw new Error("No such sprite in your spritetrack");
          CC = this._howl.play(zC)
        } else CC = this._howl.play();
        ZC && this._howl.loop(!0, CC);
        let wC = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), CC);
        const bC = {
          stop: () => {
            var zC;
            return null === (zC = this.liveHowl()) || void 0 === zC || zC.stop(CC), bC
          },
          fade: (zC, ZC, QC) => {
            var wC;
            return null === (wC = this.liveHowl()) || void 0 === wC || wC.fade(zC, ZC, QC, CC), bC
          },
          rate: zC => {
            var ZC;
            return null === (ZC = this.liveHowl()) || void 0 === ZC || ZC.rate(zC, CC), bC
          },
          stopsAtOnce: () => this._howl.playing(CC) && !this._howl._playLock,
          isAlive: () => {
            const zC = this._howl._soundById(CC);
            return !this._loadFailed && !!zC && !zC._ended
          },
          getDurationMs: () => this._howl._soundById(CC) ? 1e3 * this._howl.duration(CC) / this._howl.rate(CC) : 0,
          getVolume: () => wC * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => wC,
          setRelativeVolume: zC => {
            var ZC;
            if (zC > 1) throw new Error("Volume should be <= 1");
            return wC = pC.b.get("soundOnFromAd") ? zC : 0, null === (ZC = this.liveHowl()) || void 0 === ZC || ZC.volume(Math.min(1, wC * this._volumeMultiplier.getTotalMultipliedVal()), CC), bC
          },
          setPannerAttr: zC => {
            let {
              coneInnerAngle: ZC,
              coneOuterAngle: QC = 360,
              coneOuterGain: wC,
              distanceModel: nC,
              maxDistance: fC,
              panningModel: oC,
              refDistance: qC,
              rolloffFactor: FC
            } = zC;
            return this._setPannerAttr({
              id: CC,
              coneInnerAngle: ZC,
              coneOuterAngle: QC,
              coneOuterGain: wC,
              distanceModel: nC,
              maxDistance: fC,
              panningModel: oC,
              refDistance: qC,
              rolloffFactor: FC
            }), bC
          },
          setPosition: zC => {
            var ZC;
            return null === (ZC = this.liveHowl()) || void 0 === ZC || ZC.pos(zC[2], zC[1], zC[0], CC), bC
          }
        };
        return bC
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, nC.b)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(CC) {
        this._volumeMultiplier.setMultiplierType("globalVolume", CC), this._howl.volume(CC)
      }
      _setPannerAttr(CC) {
        let {
          id: zC,
          coneInnerAngle: ZC = 360,
          coneOuterAngle: QC = 360,
          coneOuterGain: wC = 0,
          distanceModel: bC = "inverse",
          maxDistance: nC = 1e3,
          panningModel: fC = "HRTF",
          refDistance: oC = gC.j,
          rolloffFactor: qC = 1
        } = CC;
        const FC = this.liveHowl();
        if (null === FC) return;
        FC.pannerAttr({
          coneOuterAngle: QC
        }, zC);
        const WC = {
          coneInnerAngle: ZC,
          coneOuterAngle: QC,
          coneOuterGain: wC,
          distanceModel: bC,
          maxDistance: nC,
          panningModel: fC,
          refDistance: oC,
          rolloffFactor: qC
        };
        FC.pannerAttr(WC, zC)
      }
    }
    const IC = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new PC.c, SC.o.subscribe("appManagerUpdated|soundVolume", (CC => {
          const zC = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const ZC of zC) ZC.setGlobalVolume(CC)
        }))
      }
      play(CC, zC) {
        var ZC;
        let bC, nC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (ZC = (0, MC.e)()) || void 0 === ZC ? void 0 : ZC.qE,
          fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gC.g,
          oC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : gC.j,
          FC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var NC;
        (0, MC.e)() ? bC = !!Array.isArray(nC) || (0, qC.c)(nC) !== (null === (NC = (0, MC.e)()) || void 0 === NC ? void 0 : NC.qE): bC = !1;
        const SC = (0, QC.k)(CC),
          pC = this.loadSheet(bC ? this.spatialSheets : this.stereoSheets, SC);
        if (!bC) {
          const ZC = pC.play(CC, FC);
          return ZC.setRelativeVolume(zC), ZC
        }
        const GC = (0, MC.e)(),
          RC = Array.isArray(nC) ? nC : GC.JR.yG(nC),
          JC = GC.JR.yG(GC.qE);
        if (!RC || WC().sqrDist(RC, JC) > fC * fC) return xC;
        let IC;
        if (!FC) {
          if (!this.spatialVoices.admit({
              group: AC.has(SC) ? null : (0, PC.g)(CC),
              loudness: (0, PC.d)(zC, WC().zW(RC, JC), oC),
              startMs: performance.now(),
              getDurationMs: () => {
                var CC, zC;
                return null !== (CC = null === (zC = IC) || void 0 === zC ? void 0 : zC.getDurationMs()) && void 0 !== CC ? CC : 0
              },
              isAlive: () => {
                var CC, zC;
                return null !== (CC = null === (zC = IC) || void 0 === zC ? void 0 : zC.isAlive()) && void 0 !== CC && CC
              },
              canStop: () => {
                var CC, zC;
                return null !== (CC = null === (zC = IC) || void 0 === zC ? void 0 : zC.stopsAtOnce()) && void 0 !== CC && CC
              },
              stop: () => {
                var CC;
                null === (CC = IC) || void 0 === CC || CC.stop()
              }
            })) return xC
        }
        return IC = pC.play(CC, FC), IC.setRelativeVolume(zC), IC.setPannerAttr({
          refDistance: oC
        }), IC.setPosition([RC[0], RC[1] + wC.f.Dp * wC.f.playerEyeToHeightRatio, RC[2]]), IC
      }
      preload(CC) {
        this.loadSheet(this.stereoSheets, (0, QC.k)(CC))
      }
      loadSheet(CC, zC) {
        let ZC = CC[zC];
        return ZC || ((0, RC.d)(zC), ZC = new JC({
          src: zC,
          isSoundSprite: !0,
          volumeScalar: 1
        }), ZC.setGlobalVolume(pC.b.get("soundVolume")), CC[zC] = ZC), ZC
      }
      freeSheetsAfterGame() {
        for (const CC of [this.stereoSheets, this.spatialSheets])
          for (const [zC, ZC] of Object.entries(CC)) !GC.c.has(zC) && ZC.loaded() && (ZC.unloadOnceIdle(), delete CC[zC])
      }
    }
  },
  36708: (CC, zC, ZC) => {
    function QC(CC, zC) {
      var ZC, QC, wC, bC, nC, fC, oC, qC;
      return CC.name === zC.name && ((null === (ZC = CC.attributes) || void 0 === ZC || null === (QC = ZC.customAttributes) || void 0 === QC ? void 0 : QC.stackKey) === (null === (wC = zC.attributes) || void 0 === wC || null === (bC = wC.customAttributes) || void 0 === bC ? void 0 : bC.stackKey) && (!0 !== (null === (nC = CC.attributes) || void 0 === nC || null === (fC = nC.customAttributes) || void 0 === fC ? void 0 : fC.unstackable) && !0 !== (null === (oC = zC.attributes) || void 0 === oC || null === (qC = oC.customAttributes) || void 0 === qC ? void 0 : qC.unstackable)))
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  36796: (CC, zC, ZC) => {
    function QC(CC) {
      return CC.includes("Leaf Bed")
    }

    function wC(CC) {
      return / Bed(?: Head)?(?:\||$)/.test(CC) && !QC(CC)
    }

    function bC(CC) {
      return CC.includes(" Strongbed")
    }

    function nC(CC) {
      return QC(CC) || wC(CC) || bC(CC)
    }
    ZC.d(zC, {
      d: () => nC,
      g: () => QC,
      i: () => bC,
      l: () => wC
    })
  },
  36794: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC
    });
    var QC = ZC(36796),
      wC = ZC(9194);
    const bC = [],
      nC = [],
      fC = [],
      oC = [];
    for (const FC of Object.keys(wC.n))(0, QC.g)(FC) ? bC.push(FC) : (0, QC.l)(FC) && nC.push(FC), (0, QC.i)(FC) && fC.push(FC), (FC.includes(" Bed Head") || FC.includes(" Strongbed Head")) && oC.push(FC);
    const qC = {
      leafBeds: bC,
      woolBeds: nC,
      strongBeds: fC,
      beds: [...bC, ...nC, ...fC],
      bedHeads: oC,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6484: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      e: () => wC,
      g: () => oC,
      k: () => bC,
      o: () => qC,
      r: () => QC,
      t: () => fC
    });
    let QC = function(CC) {
        return CC[CC.DEFAULT = 0] = "DEFAULT", CC[CC.BOAT = 1] = "BOAT", CC[CC.GLIDER = 2] = "GLIDER", CC[CC.BALLOON = 3] = "BALLOON", CC[CC.SLEEPING = 4] = "SLEEPING", CC[CC.RIDING_MOB = 5] = "RIDING_MOB", CC[CC.CAR = 6] = "CAR", CC[CC.HOVERCRAFT = 7] = "HOVERCRAFT", CC
      }({}),
      wC = function(CC) {
        return CC[CC.WOOD = 0] = "WOOD", CC[CC.OBSIDIAN = 1] = "OBSIDIAN", CC[CC.SPEED = 2] = "SPEED", CC
      }({}),
      bC = function(CC) {
        return CC[CC.WOOD = 0] = "WOOD", CC[CC.IRON = 1] = "IRON", CC[CC.GOLD = 2] = "GOLD", CC[CC.DIAMOND = 3] = "DIAMOND", CC
      }({}),
      nC = function(CC) {
        return CC[CC.YELLOW = 0] = "YELLOW", CC[CC.WHITE = 1] = "WHITE", CC[CC.RED = 2] = "RED", CC[CC.PURPLE = 3] = "PURPLE", CC[CC.PINK = 4] = "PINK", CC[CC.ORANGE = 5] = "ORANGE", CC[CC.MAGENTA = 6] = "MAGENTA", CC[CC.LIME = 7] = "LIME", CC[CC.LIGHT_GRAY = 8] = "LIGHT_GRAY", CC[CC.LIGHT_BLUE = 9] = "LIGHT_BLUE", CC[CC.GREEN = 10] = "GREEN", CC[CC.GRAY = 11] = "GRAY", CC[CC.CYAN = 12] = "CYAN", CC[CC.BROWN = 13] = "BROWN", CC[CC.BLUE = 14] = "BLUE", CC[CC.BLACK = 15] = "BLACK", CC
      }({}),
      fC = function(CC) {
        return CC[CC.ROTATION_1 = 0] = "ROTATION_1", CC[CC.ROTATION_2 = 1] = "ROTATION_2", CC[CC.ROTATION_3 = 2] = "ROTATION_3", CC[CC.ROTATION_4 = 3] = "ROTATION_4", CC
      }({}),
      oC = function(CC) {
        return CC[CC.KART = 0] = "KART", CC[CC.OFF_ROADER = 1] = "OFF_ROADER", CC[CC.CAR = 2] = "CAR", CC[CC.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", CC[CC.ARMORED_CAR = 4] = "ARMORED_CAR", CC[CC.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", CC[CC.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", CC[CC.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", CC
      }({});
    QC.DEFAULT, QC.BOAT, wC.SPEED, QC.GLIDER, bC.DIAMOND, QC.BALLOON, nC.BLACK, QC.SLEEPING, fC.ROTATION_4, QC.RIDING_MOB, QC.CAR, oC.MOONSTONE_MINING_DRILL, QC.HOVERCRAFT;
    let qC = function(CC) {
      return CC[CC.NORMAL = 0] = "NORMAL", CC[CC.GLIDING = 1] = "GLIDING", CC[CC.FLOATING = 2] = "FLOATING", CC
    }({})
  },
  34125: () => {}
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);