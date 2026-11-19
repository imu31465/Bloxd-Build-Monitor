export const id = 113;
export const ids = [113];
export const modules = {
  36006: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ZD,
      c: () => nD
    });
    cD(9026);
    var ID = cD(53),
      pD = cD(1440),
      iD = cD(1905),
      fD = cD(1954),
      bD = cD(16),
      QD = cD(2358),
      wD = cD(36010),
      SD = cD(36018),
      BD = cD(8986),
      yD = cD(9021),
      MD = cD(9037),
      tD = cD(1093);
    const ZD = (0, ID.memo)((function() {
      var DD;
      const {
        isTouchScreen: CD,
        clientEscMenuOptions: cD,
        scriptedCameraFacing: iD,
        crosshairShownOverride: ZD,
        crosshairGameView: vD
      } = (0, bD.o)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), ND = (0, QD.h)("gunshotOrigin"), gD = (0, ID.useRef)(null), XD = (0, ID.useRef)(!1), [mD, OD] = (0, ID.useState)(oD);
      (0, pD.f)("cameraZoomSet", OD), (0, ID.useEffect)((() => {
        OD(oD())
      }), []);
      const PD = (0, fD.h)("heldItemAim"),
        UD = PD.gun,
        xD = (0, MD.h)(),
        qD = (0, ID.useRef)(xD);
      qD.current = xD;
      const [JD, KD] = (0, ID.useState)(!1);
      (0, ID.useEffect)((() => (0, SD.c)("crosshairAccuracy", nD)), []), (0, pD.f)("mouseState", (DD => {
        let {
          isDown: CD
        } = DD;
        XD.current = CD, gD.current && (gD.current.style.transform = (0, yD.h)(CD, qD.current.growOnClick)), "shapes" === qD.current.style && KD(CD)
      }));
      const aD = (0, BD.g)(CD, cD.touchActionButtons);
      return (null !== (DD = (0, wD.e)(vD, ZD)) && void 0 !== DD ? DD : (0, wD.i)(PD, mD > 1, aD, ND)) ? "movement" === iD || "cursor" === iD ? null : (0, tD.jsxs)(tD.Fragment, {
        children: [UD && (0, tD.jsx)(HD, {
          custom: xD.forGuns && "shapes" === xD.style ? xD : null,
          touch: CD
        }), !UD && (0, tD.jsx)(yD.e, {
          settings: xD,
          touch: CD,
          pressRef: gD,
          pressed: "shapes" === xD.style ? JD : XD.current
        })]
      }) : null
    }));

    function oD() {
      return iD.gameBridge.lookup("cameraZoom", null)
    }
    const vD = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      ND = {
        current: null
      },
      gD = {
        current: null
      };
    let XD = 0,
      mD = 0;

    function nD(DD) {
      mD = DD, vD[0].current || ND.current || gD.current ? PD(DD) : XD = DD
    }

    function OD(DD) {
      return ((0, wD.g)(DD) - (0, wD.g)(0)) * window.innerHeight / 100
    }

    function PD(DD) {
      var CD;
      if (null === (CD = gD.current) || void 0 === CD || CD.call(gD, OD(DD)), vD[0].current) {
        const CD = `${(0,wD.g)(DD)}vh`;
        vD[0].current.style.transform = `translateX(calc(0px - ${CD}))`, vD[1].current.style.transform = `translateX(calc(0px + ${CD}))`, vD[2].current.style.transform = `translateY(calc(0px - ${CD}))`, vD[3].current.style.transform = `translateY(calc(0px + ${CD}))`
      }
      ND.current && (ND.current.style.filter = `blur(${Math.round(DD/10)}px)`)
    }

    function HD(DD) {
      let {
        custom: CD,
        touch: cD
      } = DD;
      const iD = (0, pD.g)("aimingOverlay", "none"),
        fD = "1.2vh",
        bD = "0.3vh";
      (0, ID.useEffect)((() => {
        XD && PD(XD)
      }), []);
      const QD = (0, ID.useRef)(null !== CD);
      return (0, ID.useLayoutEffect)((() => {
        var DD;
        CD ? null === (DD = gD.current) || void 0 === DD || DD.call(gD, OD(mD)) : QD.current && PD(mD);
        QD.current = null !== CD
      }), [CD]), (0, tD.jsxs)(tD.Fragment, {
        children: ["sniper" === iD && (0, tD.jsxs)("div", {
          ref: ND,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, tD.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, tD.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, tD.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, tD.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, tD.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === iD ? 0 : 1
          },
          children: [CD && (0, tD.jsx)(yD.e, {
            settings: CD,
            touch: cD,
            spreadRef: gD
          }), !CD && (0, tD.jsxs)(tD.Fragment, {
            children: [(0, tD.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: fD,
                height: bD,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: vD[0]
            }), (0, tD.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: fD,
                height: bD,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: vD[1]
            }), (0, tD.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: bD,
                height: fD,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: vD[2]
            }), (0, tD.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: bD,
                height: fD,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: vD[3]
            })]
          })]
        })]
      })
    }
  },
  9021: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD,
      h: () => BD
    });
    cD(9026);
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(53),
      fD = cD(8991);

    function bD(DD, CD) {
      return Math.max(1, Math.round(DD * CD))
    }

    function QD(DD, CD, cD) {
      const ID = 2 * cD >= CD - 1;
      return {
        x: DD,
        y: DD,
        size: CD,
        border: Math.min(cD, Math.floor(CD / 2)),
        filled: ID
      }
    }
    var wD = cD(1093);
    const SD = 1.4;

    function BD(DD, CD) {
      return DD && CD ? `scale(${SD})` : "scale(1)"
    }

    function yD(DD) {
      return "classic" === DD.settings.style ? (0, wD.jsx)(ZD, {
        ...DD
      }) : (0, wD.jsx)(nD, {
        ...DD
      })
    }
    const MD = .125;

    function tD(DD, CD) {
      const cD = {};
      if (DD.color !== fD.h.color && (cD.color = (0, fD.o)(DD.color)), DD.opacity !== fD.h.opacity && (cD.opacity = DD.opacity / 100), DD.outline !== fD.h.outline || DD.outlineColor !== fD.h.outlineColor) {
        const CD = DD.outline,
          ID = (0, fD.o)(DD.outlineColor);
        cD.textShadow = CD > 0 ? `-${CD}px 0 ${ID}, 0 ${CD}px ${ID}, ${CD}px 0 ${ID}, 0 -${CD}px ${ID}` : "none"
      }
      if (DD.size !== fD.h.size) {
        const ID = DD.size / 100;
        cD.fontSize = CD ? `calc(max(1.3rem, 18px) * ${ID})` : `calc(1.3rem * ${ID})`, cD.marginTop = `-${MD}em`, cD.transformOrigin = `50% calc(50% + ${MD}em)`
      }
      return cD
    }

    function ZD(DD) {
      let {
        settings: CD,
        touch: cD,
        inPreview: ID,
        inEditor: iD,
        pressed: fD = !1,
        pressRef: bD
      } = DD;
      return (0, wD.jsx)("div", {
        className: pD()("Crosshair", {
          Touch: cD,
          CrosshairInPreview: ID,
          CrosshairInEditor: iD || ID
        }),
        ref: bD,
        style: {
          transform: BD(fD, CD.growOnClick),
          ...tD(CD, cD)
        },
        children: "+"
      })
    }

    function oD(DD, CD) {
      return DD / CD + "px"
    }

    function vD(DD, CD, cD, ID) {
      return {
        ...XD(DD, CD, cD),
        width: oD(DD.w, cD),
        height: oD(DD.h, cD),
        background: ID
      }
    }

    function ND(DD, CD, cD) {
      return {
        left: oD(DD.x, CD),
        top: oD(DD.y, CD),
        width: oD(DD.size, CD),
        height: oD(DD.size, CD),
        borderWidth: oD(DD.border, CD),
        borderColor: cD,
        background: DD.filled ? cD : void 0
      }
    }
    const gD = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function XD(DD, CD, cD) {
      const [ID, pD] = DD.arm ? gD[DD.arm] : [0, 0], iD = Math.round(CD * cD);
      return {
        left: oD(DD.x + ID * iD, cD),
        top: oD(DD.y + pD * iD, cD)
      }
    }

    function mD(DD) {
      return DD.arm ? {
        "data-arm": DD.arm,
        "data-x": DD.x,
        "data-y": DD.y
      } : {}
    }

    function nD(DD) {
      let {
        settings: CD,
        inPreview: cD,
        inEditor: ID,
        pressed: BD = !1,
        spread: yD,
        spreadRef: MD
      } = DD;
      const tD = (0, iD.useRef)(null),
        {
          box: ZD,
          dpr: oD
        } = function(DD) {
          const [CD, cD] = (0, iD.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, iD.useLayoutEffect)((() => {
            const CD = DD.current;
            if (!CD) return;
            const ID = () => {
              const DD = CD.getBoundingClientRect(),
                ID = window.devicePixelRatio || 1;
              cD((CD => CD.dpr === ID && CD.box.left === DD.left && CD.box.top === DD.top && CD.box.width === DD.width && CD.box.height === DD.height ? CD : {
                box: {
                  left: DD.left,
                  top: DD.top,
                  width: DD.width,
                  height: DD.height
                },
                dpr: ID
              }))
            };
            ID();
            const pD = new ResizeObserver(ID);
            return pD.observe(CD), window.addEventListener("resize", ID), window.addEventListener("scroll", ID, !0), () => {
              pD.disconnect(), window.removeEventListener("resize", ID), window.removeEventListener("scroll", ID, !0)
            }
          }), [DD]), CD
        }(tD),
        gD = (0, iD.useRef)(oD);
      gD.current = oD;
      const nD = function(DD, CD) {
          const cD = bD(DD.lineThickness, CD),
            ID = bD(DD.lineLength, CD),
            pD = Math.round(DD.gap * CD),
            iD = bD(DD.dotSize, CD),
            fD = DD.outline > 0 ? bD(DD.outline, CD) : 0,
            wD = bD(DD.circleThickness, CD),
            SD = DD.circle ? Math.round(DD.circleRadius * CD * 2 + wD) : 0,
            BD = function(DD, CD, cD, ID) {
              return DD.lines ? CD : DD.dot ? cD : DD.circle && ID % 2 === 0 ? 2 : 1
            }(DD, cD, iD, SD),
            yD = [];
          if (DD.lines && (yD.push({
              x: BD + pD,
              y: 0,
              w: ID,
              h: cD,
              arm: "right"
            }), yD.push({
              x: -pD - ID,
              y: 0,
              w: ID,
              h: cD,
              arm: "left"
            }), yD.push({
              x: 0,
              y: BD + pD,
              w: cD,
              h: ID,
              arm: "down"
            }), DD.tStyle || yD.push({
              x: 0,
              y: -pD - ID,
              w: cD,
              h: ID,
              arm: "up"
            }), 0 === pD && yD.push({
              x: 0,
              y: 0,
              w: cD,
              h: cD
            })), DD.dot) {
            const DD = Math.floor((BD - iD) / 2);
            yD.push({
              x: DD,
              y: DD,
              w: iD,
              h: iD
            })
          }
          const MD = yD.map((DD => ({
            ...DD,
            x: DD.x - fD,
            y: DD.y - fD,
            w: DD.w + 2 * fD,
            h: DD.h + 2 * fD
          })));
          let tD = null,
            ZD = null;
          if (DD.circle) {
            const DD = SD + ((SD - BD) % 2 === 0 ? 0 : 1),
              CD = (BD - DD) / 2;
            tD = QD(CD, DD, wD), fD > 0 && (ZD = QD(CD - fD, DD + 2 * fD, wD + 2 * fD))
          }
          return {
            cell: BD,
            fills: yD,
            outlines: fD > 0 ? MD : [],
            ring: tD,
            ringOutline: ZD
          }
        }(BD && CD.growOnClick ? function(DD, CD) {
          return {
            ...DD,
            outline: DD.outline * CD,
            lineLength: DD.lineLength * CD,
            lineThickness: DD.lineThickness * CD,
            gap: DD.gap * CD,
            dotSize: DD.dotSize * CD,
            circleRadius: DD.circleRadius * CD,
            circleThickness: DD.circleThickness * CD
          }
        }(CD, SD) : CD, oD),
        OD = function(DD, CD, cD) {
          const ID = Math.round((DD.left + DD.width / 2) * cD - CD / 2),
            pD = Math.round((DD.top + DD.height / 2) * cD - CD / 2);
          return {
            x: ID / cD - DD.left,
            y: pD / cD - DD.top
          }
        }(ZD, nD.cell, oD),
        PD = (0, fD.o)(CD.color),
        HD = (0, fD.o)(CD.outlineColor),
        UD = (0, iD.useRef)(0);
      (0, iD.useLayoutEffect)((() => {
        if (MD) return MD.current = DD => {
          var CD;
          UD.current = DD, null === (CD = tD.current) || void 0 === CD || CD.querySelectorAll("[data-arm]").forEach((CD => {
            Object.assign(CD.style, XD(function(DD) {
              return {
                x: Number(DD.dataset.x),
                y: Number(DD.dataset.y),
                arm: DD.dataset.arm
              }
            }(CD), DD, gD.current))
          }))
        }, () => {
          MD.current = null
        }
      }), [MD]);
      const xD = null !== yD && void 0 !== yD ? yD : UD.current;
      return (0, wD.jsx)("div", {
        ref: tD,
        className: pD()("CrosshairShapes", {
          CrosshairInPreview: cD,
          CrosshairInEditor: ID || cD,
          CrosshairSpreads: void 0 !== MD
        }),
        children: (0, wD.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: OD.x,
            top: OD.y,
            opacity: CD.opacity / 100
          },
          children: (0, wD.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [nD.ringOutline && (0, wD.jsx)("div", {
              className: "CrosshairRing",
              style: ND(nD.ringOutline, oD, HD)
            }), nD.outlines.map(((DD, CD) => (0, wD.jsx)("div", {
              className: "CrosshairPart",
              ...mD(DD),
              style: vD(DD, xD, oD, HD)
            }, `o${CD}`))), nD.ring && (0, wD.jsx)("div", {
              className: "CrosshairRing",
              style: ND(nD.ring, oD, PD)
            }), nD.fills.map(((DD, CD) => (0, wD.jsx)("div", {
              className: "CrosshairPart",
              ...mD(DD),
              style: vD(DD, xD, oD, PD)
            }, `f${CD}`)))]
          })
        })
      })
    }
  },
  9028: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD,
      e: () => oD,
      g: () => ZD
    });
    var ID = cD(8991);
    const pD = "XH1-",
      iD = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      fD = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      bD = ["color", "outlineColor"],
      QD = 1 + 3 * bD.length + fD.length + 1,
      wD = Math.ceil(8 * QD / Math.log2(62)),
      SD = pD.length + wD;

    function BD(DD) {
      let CD = 90;
      for (const cD of DD) CD = 31 * CD + cD & 255;
      return CD
    }
    const yD = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      MD = BigInt(yD.length);

    function tD(DD, CD) {
      let cD = 0n;
      for (const pD of DD) {
        const DD = yD.indexOf(pD);
        if (DD < 0) return null;
        cD = cD * MD + BigInt(DD)
      }
      if (cD >> BigInt(8 * CD) !== 0n) return null;
      const ID = [];
      for (let pD = 0; pD < CD; pD++) ID.unshift(Number(0xffn & cD)), cD >>= 8n;
      return ID
    }

    function ZD(DD) {
      let CD = "shapes" === DD.style ? 1 : 0;
      iD.forEach(((cD, ID) => {
        DD[cD] && (CD |= 1 << ID + 1)
      }));
      const cD = [CD];
      for (const pD of bD) {
        const CD = (0, ID.l)(pD, DD[pD]);
        cD.push(CD >> 16 & 255, CD >> 8 & 255, 255 & CD)
      }
      for (const pD of fD) {
        const {
          min: CD,
          step: iD
        } = ID.e[pD];
        cD.push(Math.round(((0, ID.l)(pD, DD[pD]) - CD) / iD))
      }
      return cD.push(BD(cD)), pD + function(DD, CD) {
        let cD = 0n;
        for (const pD of DD) cD = cD << 8n | BigInt(pD);
        let ID = "";
        for (let pD = 0; pD < CD; pD++) ID = yD[Number(cD % MD)] + ID, cD /= MD;
        return ID
      }(cD, wD)
    }

    function oD(DD) {
      for (const CD of DD.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${wD}})`, "gi"))) {
        const DD = vD(tD(CD[1], QD));
        if (DD) return DD
      }
      return null
    }

    function vD(DD) {
      if (!DD || DD.length !== QD || BD(DD.slice(0, -1)) !== DD[DD.length - 1]) return null;
      const CD = DD[0],
        cD = {
          ...ID.h,
          style: 1 & CD ? "shapes" : "classic"
        };
      iD.forEach(((DD, ID) => {
        cD[DD] = 0 !== (CD & 1 << ID + 1)
      }));
      let pD = 1;
      for (const ID of bD) cD[ID] = DD[pD] << 16 | DD[pD + 1] << 8 | DD[pD + 2], pD += 3;
      for (const iD of fD) {
        const {
          min: CD,
          step: fD
        } = ID.e[iD];
        cD[iD] = (0, ID.l)(iD, CD + DD[pD] * fD), pD++
      }
      return cD
    }
  },
  8991: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => fD,
      e: () => ID,
      h: () => pD,
      l: () => iD,
      o: () => wD,
      s: () => QD,
      u: () => SD,
      w: () => bD
    });
    const ID = {
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
      pD = Object.freeze({
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

    function iD(DD, CD) {
      var cD;
      const {
        min: iD,
        max: fD,
        step: bD
      } = ID[DD];
      if (!Number.isFinite(CD)) return pD[DD];
      const QD = (null !== (cD = String(bD).split(".")[1]) && void 0 !== cD ? cD : "").length,
        wD = Number((Math.round(CD / bD) * bD).toFixed(QD));
      return Math.min(fD, Math.max(iD, wD))
    }

    function fD(DD, CD, cD) {
      const ID = "number" === typeof cD ? iD(CD, cD) : cD;
      return {
        ...DD,
        [CD]: ID
      }
    }

    function bD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(pD).every((ID => cD.includes(ID) || DD[ID] === CD[ID]))
    }

    function QD(DD) {
      return bD(DD, pD)
    }

    function wD(DD) {
      return `#${DD.toString(16).padStart(6,"0")}`
    }

    function SD(DD) {
      const CD = /^#?([0-9a-f]{6})$/i.exec(DD.trim());
      return CD ? parseInt(CD[1], 16) : null
    }
  },
  9037: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => BD,
      h: () => yD
    });
    var ID = cD(53),
      pD = cD(36),
      iD = cD(9028),
      fD = cD(8991);
    const bD = "crosshairCode";
    let QD = null;
    const wD = new Set;

    function SD() {
      if (null === QD) {
        var DD;
        const CD = pD.h.getItem(bD);
        QD = null !== (DD = "string" === typeof CD ? (0, iD.e)(CD) : null) && void 0 !== DD ? DD : fD.h
      }
      return QD
    }

    function BD(DD) {
      QD = DD, (0, fD.s)(DD) ? pD.h.removeItem(bD) : pD.h.setItem(bD, (0, iD.g)(DD));
      for (const CD of wD) CD()
    }

    function yD() {
      const [DD, CD] = (0, ID.useState)(SD);
      return (0, ID.useEffect)((() => {
        const DD = () => {
          CD(SD())
        };
        return DD(), cD = DD, wD.add(cD), () => {
          wD.delete(cD)
        };
        var cD
      }), []), DD
    }
  },
  36125: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      d: () => QD,
      h: () => fD
    });
    var ID = cD(624),
      pD = cD(2642);

    function iD(DD) {
      return DD === (0, pD.i)().o9 ? (0, pD.i)().aJ : DD
    }

    function fD(DD) {
      return !(0, ID.C)(DD) && iD(DD) === (0, pD.i)().aJ
    }
    const bD = "gravity";

    function QD() {
      return (0, pD.i)().physics[bD][1]
    }
  },
  35866: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      countDecodesAs: () => SD,
      decodedAudio: () => BD
    });
    var ID = cD(4621);
    const pD = ID.Howler,
      iD = new Map;
    let fD = 0;
    const bD = {
        song: 0,
        sheet: 0
      },
      QD = new WeakMap,
      wD = new WeakSet;

    function SD(DD, CD) {
      return QD.set(DD, CD), DD
    }

    function BD() {
      return {
        bytes: fD,
        songsDecoded: bD.song,
        sheetsDecoded: bD.sheet
      }
    }

    function yD(DD) {
      if (wD.has(DD)) return;
      wD.add(DD);
      const CD = 1 === DD.decodeAudioData.length,
        cD = DD.decodeAudioData.bind(DD);
      DD.decodeAudioData = (DD, ID, wD) => {
        const SD = DD => {
          const CD = pD._howls.filter((DD => "loaded" !== DD._state));
          try {
            null === ID || void 0 === ID || ID(DD)
          } finally {
            const cD = CD.find((DD => "loaded" === DD._state));
            void 0 !== cD && "string" === typeof cD._src && function(DD, CD, cD) {
              var ID;
              fD += cD - (null !== (ID = iD.get(CD)) && void 0 !== ID ? ID : 0), iD.set(CD, cD);
              const pD = QD.get(DD);
              void 0 !== pD && bD[pD]++
            }(cD, cD._src, DD.length * DD.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return DD
        };
        if (!CD) return cD(DD, SD, wD);
        const BD = cD(DD).then(SD);
        return BD.catch((DD => {
          null === wD || void 0 === wD || wD(DD)
        })), BD
      }
    }
    const MD = ID.Howl.prototype,
      tD = MD.init;
    MD.init = function(DD) {
      return ID.Howler.volume(), pD.ctx && yD(pD.ctx), tD.call(this, DD)
    };
    const ZD = MD.unload;
    MD.unload = function() {
      const DD = this._src,
        CD = ZD.call(this);
      if ("string" !== typeof DD) return CD;
      const cD = iD.get(DD);
      return void 0 !== cD && function(DD) {
        return !pD._howls.some((CD => CD._src === DD || "string" === typeof CD._src && DD.indexOf(CD._src) >= 0))
      }(DD) && (iD.delete(DD), fD -= cD), CD
    }
  },
  36113: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => XD
    });
    var ID = cD(36122),
      pD = cD(194),
      iD = cD(4621),
      fD = cD(35866),
      bD = cD(36144),
      QD = cD(36125),
      wD = cD(335),
      SD = cD.n(wD),
      BD = cD(1199),
      yD = cD(2642),
      MD = cD(36139),
      tD = cD(20),
      ZD = cD(16),
      oD = cD(36133);
    const vD = new Set(["note"]);
    const ND = {
      stop: () => ND,
      fade: () => ND,
      rate: () => ND,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => ND,
      setPannerAttr: () => ND,
      setPosition: () => ND
    };
    class gD {
      constructor(DD) {
        let CD, {
          src: cD,
          volumeScalar: pD,
          isSoundSprite: QD
        } = DD;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, QD ? (CD = (0, ID.g)(cD), this._spriteTrackSrc = CD) : CD = {
          src: BD.clientSideServerUrls.staticUrl + cD
        }, this._volumeMultiplier = new bD.i, this._volumeMultiplier.setMultiplierType("persistentScalar", pD), this._howl = (0, fD.countDecodesAs)(new iD.Howl({
          ...CD,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let DD, CD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          cD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (CD) {
          var ID;
          if (null === (ID = this._spriteTrackSrc) || void 0 === ID || !ID.sprite[CD]) throw new Error("No such sprite in your spritetrack");
          DD = this._howl.play(CD)
        } else DD = this._howl.play();
        cD && this._howl.loop(!0, DD);
        let pD = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), DD);
        const iD = {
          stop: () => (this._howl.stop(DD), iD),
          fade: (CD, cD, ID) => (this._howl.fade(CD, cD, ID, DD), iD),
          rate: CD => (this._howl.rate(CD, DD), iD),
          stopsAtOnce: () => this._howl.playing(DD) && !this._howl._playLock,
          isAlive: () => {
            const CD = this._howl._soundById(DD);
            return !this._loadFailed && !!CD && !CD._ended
          },
          getDurationMs: () => this._howl._soundById(DD) ? 1e3 * this._howl.duration(DD) / this._howl.rate(DD) : 0,
          getVolume: () => pD * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => pD,
          setRelativeVolume: CD => {
            if (CD > 1) throw new Error("Volume should be <= 1");
            return pD = ZD.d.get("soundOnFromAd") ? CD : 0, this._howl.volume(Math.min(1, pD * this._volumeMultiplier.getTotalMultipliedVal()), DD), iD
          },
          setPannerAttr: CD => {
            let {
              coneInnerAngle: cD,
              coneOuterAngle: ID = 360,
              coneOuterGain: pD,
              distanceModel: fD,
              maxDistance: bD,
              panningModel: QD,
              refDistance: wD,
              rolloffFactor: SD
            } = CD;
            return this._setPannerAttr({
              id: DD,
              coneInnerAngle: cD,
              coneOuterAngle: ID,
              coneOuterGain: pD,
              distanceModel: fD,
              maxDistance: bD,
              panningModel: QD,
              refDistance: wD,
              rolloffFactor: SD
            }), iD
          },
          setPosition: CD => (this._howl.pos(CD[2], CD[1], CD[0], DD), iD)
        };
        return iD
      }
      setGlobalVolume(DD) {
        this._volumeMultiplier.setMultiplierType("globalVolume", DD), this._howl.volume(DD)
      }
      _setPannerAttr(DD) {
        let {
          id: CD,
          coneInnerAngle: cD = 360,
          coneOuterAngle: ID = 360,
          coneOuterGain: pD = 0,
          distanceModel: iD = "inverse",
          maxDistance: fD = 1e3,
          panningModel: bD = "HRTF",
          refDistance: QD = MD.h,
          rolloffFactor: wD = 1
        } = DD;
        this._howl.pannerAttr({
          coneOuterAngle: ID
        }, CD);
        const SD = {
          coneInnerAngle: cD,
          coneOuterAngle: ID,
          coneOuterGain: pD,
          distanceModel: iD,
          maxDistance: fD,
          panningModel: bD,
          refDistance: QD,
          rolloffFactor: wD
        };
        this._howl.pannerAttr(SD, CD)
      }
    }
    const XD = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new oD.c, tD.i.subscribe("appManagerUpdated|soundVolume", (DD => {
          const CD = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const cD of CD) cD.setGlobalVolume(DD)
        }))
      }
      play(DD, CD) {
        var cD;
        let iD, fD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (cD = (0, yD.i)()) || void 0 === cD ? void 0 : cD.aJ,
          bD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MD.f,
          wD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : MD.h,
          BD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var tD;
        (0, yD.i)() ? iD = !!Array.isArray(fD) || (0, QD.b)(fD) !== (null === (tD = (0, yD.i)()) || void 0 === tD ? void 0 : tD.aJ): iD = !1;
        const XD = iD ? this.spatialSheets : this.stereoSheets,
          mD = (0, ID.i)(DD);
        if (!XD[mD]) {
          const DD = new gD({
            src: mD,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          DD.setGlobalVolume(ZD.d.get("soundVolume")), XD[mD] = DD
        }
        const nD = XD[mD];
        if (!iD) {
          const cD = nD.play(DD, BD);
          return cD.setRelativeVolume(CD), cD
        }
        const OD = (0, yD.i)(),
          PD = Array.isArray(fD) ? fD : OD.Km.FX(fD),
          HD = OD.Km.FX(OD.aJ);
        if (!PD || SD().sqrDist(PD, HD) > bD * bD) return ND;
        let UD;
        if (!BD) {
          if (!this.spatialVoices.admit({
              group: vD.has(mD) ? null : (0, oD.g)(DD),
              loudness: (0, oD.e)(CD, SD().yb(PD, HD), wD),
              startMs: performance.now(),
              getDurationMs: () => {
                var DD, CD;
                return null !== (DD = null === (CD = UD) || void 0 === CD ? void 0 : CD.getDurationMs()) && void 0 !== DD ? DD : 0
              },
              isAlive: () => {
                var DD, CD;
                return null !== (DD = null === (CD = UD) || void 0 === CD ? void 0 : CD.isAlive()) && void 0 !== DD && DD
              },
              canStop: () => {
                var DD, CD;
                return null !== (DD = null === (CD = UD) || void 0 === CD ? void 0 : CD.stopsAtOnce()) && void 0 !== DD && DD
              },
              stop: () => {
                var DD;
                null === (DD = UD) || void 0 === DD || DD.stop()
              }
            })) return ND
        }
        return UD = nD.play(DD, BD), UD.setRelativeVolume(CD), UD.setPannerAttr({
          refDistance: wD
        }), UD.setPosition([PD[0], PD[1] + pD.h.XN * pD.h.playerEyeToHeightRatio, PD[2]]), UD
      }
    }
  },
  36193: (DD, CD, cD) => {
    function ID(DD, CD) {
      var cD, ID, pD, iD, fD, bD, QD, wD;
      return DD.name === CD.name && ((null === (cD = DD.attributes) || void 0 === cD || null === (ID = cD.customAttributes) || void 0 === ID ? void 0 : ID.stackKey) === (null === (pD = CD.attributes) || void 0 === pD || null === (iD = pD.customAttributes) || void 0 === iD ? void 0 : iD.stackKey) && (!0 !== (null === (fD = DD.attributes) || void 0 === fD || null === (bD = fD.customAttributes) || void 0 === bD ? void 0 : bD.unstackable) && !0 !== (null === (QD = CD.attributes) || void 0 === QD || null === (wD = QD.customAttributes) || void 0 === wD ? void 0 : wD.unstackable)))
    }
    cD.d(CD, {
      b: () => ID
    })
  },
  36300: (DD, CD, cD) => {
    function ID(DD) {
      return DD.includes("Leaf Bed")
    }

    function pD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !ID(DD)
    }

    function iD(DD) {
      return DD.includes(" Strongbed")
    }

    function fD(DD) {
      return ID(DD) || pD(DD) || iD(DD)
    }
    cD.d(CD, {
      b: () => fD,
      e: () => ID,
      h: () => iD,
      i: () => pD
    })
  },
  36292: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => wD
    });
    var ID = cD(36300),
      pD = cD(9141);
    const iD = [],
      fD = [],
      bD = [],
      QD = [];
    for (const SD of Object.keys(pD.n))(0, ID.e)(SD) ? iD.push(SD) : (0, ID.i)(SD) && fD.push(SD), (0, ID.h)(SD) && bD.push(SD), (SD.includes(" Bed Head") || SD.includes(" Strongbed Head")) && QD.push(SD);
    const wD = {
      leafBeds: iD,
      woolBeds: fD,
      strongBeds: bD,
      beds: [...iD, ...fD, ...bD],
      bedHeads: QD,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6212: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD,
      e: () => pD,
      i: () => QD,
      l: () => iD,
      n: () => wD,
      p: () => ID,
      q: () => bD
    });
    let ID = function(DD) {
        return DD[DD.DEFAULT = 0] = "DEFAULT", DD[DD.BOAT = 1] = "BOAT", DD[DD.GLIDER = 2] = "GLIDER", DD[DD.BALLOON = 3] = "BALLOON", DD[DD.SLEEPING = 4] = "SLEEPING", DD[DD.RIDING_MOB = 5] = "RIDING_MOB", DD[DD.CAR = 6] = "CAR", DD[DD.HOVERCRAFT = 7] = "HOVERCRAFT", DD
      }({}),
      pD = function(DD) {
        return DD[DD.WOOD = 0] = "WOOD", DD[DD.OBSIDIAN = 1] = "OBSIDIAN", DD[DD.SPEED = 2] = "SPEED", DD
      }({}),
      iD = function(DD) {
        return DD[DD.WOOD = 0] = "WOOD", DD[DD.IRON = 1] = "IRON", DD[DD.GOLD = 2] = "GOLD", DD[DD.DIAMOND = 3] = "DIAMOND", DD
      }({}),
      fD = function(DD) {
        return DD[DD.YELLOW = 0] = "YELLOW", DD[DD.WHITE = 1] = "WHITE", DD[DD.RED = 2] = "RED", DD[DD.PURPLE = 3] = "PURPLE", DD[DD.PINK = 4] = "PINK", DD[DD.ORANGE = 5] = "ORANGE", DD[DD.MAGENTA = 6] = "MAGENTA", DD[DD.LIME = 7] = "LIME", DD[DD.LIGHT_GRAY = 8] = "LIGHT_GRAY", DD[DD.LIGHT_BLUE = 9] = "LIGHT_BLUE", DD[DD.GREEN = 10] = "GREEN", DD[DD.GRAY = 11] = "GRAY", DD[DD.CYAN = 12] = "CYAN", DD[DD.BROWN = 13] = "BROWN", DD[DD.BLUE = 14] = "BLUE", DD[DD.BLACK = 15] = "BLACK", DD
      }({}),
      bD = function(DD) {
        return DD[DD.ROTATION_1 = 0] = "ROTATION_1", DD[DD.ROTATION_2 = 1] = "ROTATION_2", DD[DD.ROTATION_3 = 2] = "ROTATION_3", DD[DD.ROTATION_4 = 3] = "ROTATION_4", DD
      }({}),
      QD = function(DD) {
        return DD[DD.KART = 0] = "KART", DD[DD.OFF_ROADER = 1] = "OFF_ROADER", DD[DD.CAR = 2] = "CAR", DD[DD.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", DD[DD.ARMORED_CAR = 4] = "ARMORED_CAR", DD[DD.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", DD[DD.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", DD[DD.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", DD
      }({});
    ID.DEFAULT, ID.BOAT, pD.SPEED, ID.GLIDER, iD.DIAMOND, ID.BALLOON, fD.BLACK, ID.SLEEPING, bD.ROTATION_4, ID.RIDING_MOB, ID.CAR, QD.MOONSTONE_MINING_DRILL, ID.HOVERCRAFT;
    let wD = function(DD) {
      return DD[DD.NORMAL = 0] = "NORMAL", DD[DD.GLIDING = 1] = "GLIDING", DD[DD.FLOATING = 2] = "FLOATING", DD
    }({})
  },
  9026: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);