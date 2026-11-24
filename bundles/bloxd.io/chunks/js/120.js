export const id = 120;
export const ids = [120];
export const modules = {
  36588: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => BD,
      h: () => ED
    });
    wD(34191);
    var pD = wD(58),
      sD = wD(1442),
      KD = wD(1925),
      rD = wD(1973),
      LD = wD(20),
      cD = wD(2402),
      gD = wD(36591),
      RD = wD(36593),
      AD = wD(34174),
      UD = wD(34188),
      fD = wD(34197),
      ID = wD(1096);
    const BD = (0, pD.memo)((function() {
      var DD;
      const {
        isTouchScreen: zD,
        clientEscMenuOptions: wD,
        scriptedCameraFacing: KD,
        crosshairShownOverride: BD,
        crosshairGameView: hD
      } = (0, LD.n)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), nD = (0, cD.h)("gunshotOrigin"), MD = (0, pD.useRef)(null), OD = (0, pD.useRef)(!1), [JD, QD] = (0, pD.useState)(GD);
      (0, sD.g)("cameraZoomSet", QD), (0, pD.useEffect)((() => {
        QD(GD())
      }), []);
      const XD = (0, rD.i)("heldItemAim"),
        PD = XD.gun,
        CD = (0, fD.g)(),
        xD = (0, pD.useRef)(CD);
      xD.current = CD;
      const [TD, bD] = (0, pD.useState)(!1);
      (0, pD.useEffect)((() => (0, RD.h)("crosshairAccuracy", ED)), []), (0, sD.g)("mouseState", (DD => {
        let {
          isDown: zD
        } = DD;
        OD.current = zD, MD.current && (MD.current.style.transform = (0, UD.h)(zD, xD.current.growOnClick)), "shapes" === xD.current.style && bD(zD)
      }));
      const jD = (0, AD.h)(zD, wD.touchActionButtons);
      return (null !== (DD = (0, gD.d)(hD, BD)) && void 0 !== DD ? DD : (0, gD.i)(XD, JD > 1, jD, nD)) ? "movement" === KD || "cursor" === KD ? null : (0, ID.jsxs)(ID.Fragment, {
        children: [PD && (0, ID.jsx)(VD, {
          custom: CD.forGuns && "shapes" === CD.style ? CD : null,
          touch: zD
        }), !PD && (0, ID.jsx)(UD.d, {
          settings: CD,
          touch: zD,
          pressRef: MD,
          pressed: "shapes" === CD.style ? TD : OD.current
        })]
      }) : null
    }));

    function GD() {
      return KD.gameBridge.lookup("cameraZoom", null)
    }
    const hD = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      nD = {
        current: null
      },
      MD = {
        current: null
      };
    let OD = 0,
      JD = 0;

    function ED(DD) {
      JD = DD, hD[0].current || nD.current || MD.current ? XD(DD) : OD = DD
    }

    function QD(DD) {
      return ((0, gD.g)(DD) - (0, gD.g)(0)) * window.innerHeight / 100
    }

    function XD(DD) {
      var zD;
      if (null === (zD = MD.current) || void 0 === zD || zD.call(MD, QD(DD)), hD[0].current) {
        const zD = `${(0,gD.g)(DD)}vh`;
        hD[0].current.style.transform = `translateX(calc(0px - ${zD}))`, hD[1].current.style.transform = `translateX(calc(0px + ${zD}))`, hD[2].current.style.transform = `translateY(calc(0px - ${zD}))`, hD[3].current.style.transform = `translateY(calc(0px + ${zD}))`
      }
      nD.current && (nD.current.style.filter = `blur(${Math.round(DD/10)}px)`)
    }

    function VD(DD) {
      let {
        custom: zD,
        touch: wD
      } = DD;
      const KD = (0, sD.k)("aimingOverlay", "none"),
        rD = "1.2vh",
        LD = "0.3vh";
      (0, pD.useEffect)((() => {
        OD && XD(OD)
      }), []);
      const cD = (0, pD.useRef)(null !== zD);
      return (0, pD.useLayoutEffect)((() => {
        var DD;
        zD ? null === (DD = MD.current) || void 0 === DD || DD.call(MD, QD(JD)) : cD.current && XD(JD);
        cD.current = null !== zD
      }), [zD]), (0, ID.jsxs)(ID.Fragment, {
        children: ["sniper" === KD && (0, ID.jsxs)("div", {
          ref: nD,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, ID.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, ID.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, ID.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, ID.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, ID.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === KD ? 0 : 1
          },
          children: [zD && (0, ID.jsx)(UD.d, {
            settings: zD,
            touch: wD,
            spreadRef: MD
          }), !zD && (0, ID.jsxs)(ID.Fragment, {
            children: [(0, ID.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: rD,
                height: LD,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: hD[0]
            }), (0, ID.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: rD,
                height: LD,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: hD[1]
            }), (0, ID.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: LD,
                height: rD,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: hD[2]
            }), (0, ID.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: LD,
                height: rD,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: hD[3]
            })]
          })]
        })]
      })
    }
  },
  34188: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => BD,
      h: () => ID
    });
    wD(34191);
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(58),
      rD = wD(34181);

    function LD(DD, zD) {
      return Math.max(1, Math.round(DD * zD))
    }

    function cD(DD, zD) {
      const wD = zD * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        pD = function(DD, zD) {
          if (DD.lines) return LD(DD.lineThickness, zD) % 2;
          if (DD.dot) return LD(DD.dotSize, zD) % 2;
          return gD(DD, zD) % 2
        }(DD, zD),
        sD = RD(DD.lineThickness * wD, pD),
        KD = LD(DD.lineLength, wD),
        rD = Math.round(DD.gap * wD),
        cD = DD.outline > 0 ? LD(DD.outline, wD) : 0,
        UD = [];
      if (DD.lines && (UD.push({
          x: sD + rD,
          y: 0,
          w: KD,
          h: sD,
          arm: "right"
        }), UD.push({
          x: -rD - KD,
          y: 0,
          w: KD,
          h: sD,
          arm: "left"
        }), UD.push({
          x: 0,
          y: sD + rD,
          w: sD,
          h: KD,
          arm: "down"
        }), DD.tStyle || UD.push({
          x: 0,
          y: -rD - KD,
          w: sD,
          h: KD,
          arm: "up"
        }), 0 === rD && UD.push({
          x: 0,
          y: 0,
          w: sD,
          h: sD
        })), DD.dot) {
        const zD = RD(DD.dotSize * wD, pD),
          KD = DD.lines && 0 === rD && DD.dotSize > DD.lineThickness ? Math.max(zD, sD + 2) : zD,
          LD = (sD - KD) / 2;
        UD.push({
          x: LD,
          y: LD,
          w: KD,
          h: KD
        })
      }
      const fD = UD.map((DD => ({
        ...DD,
        x: DD.x - cD,
        y: DD.y - cD,
        w: DD.w + 2 * cD,
        h: DD.h + 2 * cD
      })));
      let ID = null,
        BD = null;
      if (DD.circle) {
        const zD = LD(DD.circleThickness, wD),
          KD = function(DD, zD) {
            return DD + (DD % 2 === zD ? 0 : 1)
          }(gD(DD, wD), pD),
          rD = (sD - KD) / 2;
        ID = AD(rD, KD, zD), cD > 0 && (BD = AD(rD - cD, KD + 2 * cD, zD + 2 * cD))
      }
      return {
        cell: sD,
        fills: UD,
        outlines: cD > 0 ? fD : [],
        ring: ID,
        ringOutline: BD
      }
    }

    function gD(DD, zD) {
      return Math.round(DD.circleRadius * zD * 2 + LD(DD.circleThickness, zD))
    }

    function RD(DD, zD) {
      return Math.max(2 - zD, 2 * Math.round((DD - zD) / 2) + zD)
    }

    function AD(DD, zD, wD) {
      const pD = 2 * wD >= zD - 1;
      return {
        x: DD,
        y: DD,
        size: zD,
        border: Math.min(wD, Math.floor(zD / 2)),
        filled: pD
      }
    }
    var UD = wD(1096);
    const fD = 1.4;

    function ID(DD, zD) {
      return DD && zD ? `scale(${fD})` : "scale(1)"
    }

    function BD(DD) {
      return "classic" === DD.settings.style ? (0, UD.jsx)(nD, {
        ...DD
      }) : (0, UD.jsx)(VD, {
        ...DD
      })
    }
    const GD = .125;

    function hD(DD, zD) {
      const wD = {};
      if (DD.color !== rD.e.color && (wD.color = (0, rD.k)(DD.color)), DD.opacity !== rD.e.opacity && (wD.opacity = DD.opacity / 100), DD.outline !== rD.e.outline || DD.outlineColor !== rD.e.outlineColor) {
        const zD = DD.outline,
          pD = (0, rD.k)(DD.outlineColor);
        wD.textShadow = zD > 0 ? `-${zD}px 0 ${pD}, 0 ${zD}px ${pD}, ${zD}px 0 ${pD}, 0 -${zD}px ${pD}` : "none"
      }
      if (DD.size !== rD.e.size) {
        const pD = DD.size / 100;
        wD.fontSize = zD ? `calc(max(1.3rem, 18px) * ${pD})` : `calc(1.3rem * ${pD})`, wD.marginTop = `-${GD}em`, wD.transformOrigin = `50% calc(50% + ${GD}em)`
      }
      return wD
    }

    function nD(DD) {
      let {
        settings: zD,
        touch: wD,
        inPreview: pD,
        inEditor: KD,
        pressed: rD = !1,
        pressRef: LD
      } = DD;
      return (0, UD.jsx)("div", {
        className: sD()("Crosshair", {
          Touch: wD,
          CrosshairInPreview: pD,
          CrosshairInEditor: KD || pD
        }),
        ref: LD,
        style: {
          transform: ID(rD, zD.growOnClick),
          ...hD(zD, wD)
        },
        children: "+"
      })
    }

    function MD(DD, zD) {
      return DD / zD + "px"
    }

    function OD(DD, zD, wD, pD) {
      return {
        ...QD(DD, zD, wD),
        width: MD(DD.w, wD),
        height: MD(DD.h, wD),
        background: pD
      }
    }

    function JD(DD, zD, wD) {
      return {
        left: MD(DD.x, zD),
        top: MD(DD.y, zD),
        width: MD(DD.size, zD),
        height: MD(DD.size, zD),
        borderWidth: MD(DD.border, zD),
        borderColor: wD,
        background: DD.filled ? wD : void 0
      }
    }
    const ED = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function QD(DD, zD, wD) {
      const [pD, sD] = DD.arm ? ED[DD.arm] : [0, 0], KD = Math.round(zD * wD);
      return {
        left: MD(DD.x + pD * KD, wD),
        top: MD(DD.y + sD * KD, wD)
      }
    }

    function XD(DD) {
      return DD.arm ? {
        "data-arm": DD.arm,
        "data-x": DD.x,
        "data-y": DD.y
      } : {}
    }

    function VD(DD) {
      let {
        settings: zD,
        inPreview: wD,
        inEditor: pD,
        pressed: LD = !1,
        spread: gD,
        spreadRef: RD
      } = DD;
      const AD = (0, KD.useRef)(null),
        {
          box: ID,
          dpr: BD
        } = function(DD) {
          const [zD, wD] = (0, KD.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, KD.useLayoutEffect)((() => {
            const zD = DD.current;
            if (!zD) return;
            const pD = () => {
              const DD = zD.getBoundingClientRect(),
                pD = window.devicePixelRatio || 1;
              wD((zD => zD.dpr === pD && zD.box.left === DD.left && zD.box.top === DD.top && zD.box.width === DD.width && zD.box.height === DD.height ? zD : {
                box: {
                  left: DD.left,
                  top: DD.top,
                  width: DD.width,
                  height: DD.height
                },
                dpr: pD
              }))
            };
            pD();
            const sD = new ResizeObserver(pD);
            return sD.observe(zD), window.addEventListener("resize", pD), window.addEventListener("scroll", pD, !0), () => {
              sD.disconnect(), window.removeEventListener("resize", pD), window.removeEventListener("scroll", pD, !0)
            }
          }), [DD]), zD
        }(AD),
        GD = (0, KD.useRef)(BD);
      GD.current = BD;
      const hD = cD(zD, BD, LD && zD.growOnClick ? fD : 1),
        nD = function(DD, zD, wD) {
          const pD = Math.round((DD.left + DD.width / 2) * wD - zD / 2),
            sD = Math.round((DD.top + DD.height / 2) * wD - zD / 2);
          return {
            x: pD / wD - DD.left,
            y: sD / wD - DD.top
          }
        }(ID, hD.cell, BD),
        MD = (0, rD.k)(zD.color),
        ED = (0, rD.k)(zD.outlineColor),
        VD = (0, KD.useRef)(0);
      (0, KD.useLayoutEffect)((() => {
        if (RD) return RD.current = DD => {
          var zD;
          VD.current = DD, null === (zD = AD.current) || void 0 === zD || zD.querySelectorAll("[data-arm]").forEach((zD => {
            Object.assign(zD.style, QD(function(DD) {
              return {
                x: Number(DD.dataset.x),
                y: Number(DD.dataset.y),
                arm: DD.dataset.arm
              }
            }(zD), DD, GD.current))
          }))
        }, () => {
          RD.current = null
        }
      }), [RD]);
      const PD = null !== gD && void 0 !== gD ? gD : VD.current;
      return (0, UD.jsx)("div", {
        ref: AD,
        className: sD()("CrosshairShapes", {
          CrosshairInPreview: wD,
          CrosshairInEditor: pD || wD,
          CrosshairSpreads: void 0 !== RD
        }),
        children: (0, UD.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: nD.x,
            top: nD.y,
            opacity: zD.opacity / 100
          },
          children: (0, UD.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [hD.ringOutline && (0, UD.jsx)("div", {
              className: "CrosshairRing",
              style: JD(hD.ringOutline, BD, ED)
            }), hD.outlines.map(((DD, zD) => (0, UD.jsx)("div", {
              className: "CrosshairPart",
              ...XD(DD),
              style: OD(DD, PD, BD, ED)
            }, `o${zD}`))), hD.ring && (0, UD.jsx)("div", {
              className: "CrosshairRing",
              style: JD(hD.ring, BD, MD)
            }), hD.fills.map(((DD, zD) => (0, UD.jsx)("div", {
              className: "CrosshairPart",
              ...XD(DD),
              style: OD(DD, PD, BD, MD)
            }, `f${zD}`)))]
          })
        })
      })
    }
  },
  34193: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD,
      d: () => GD,
      h: () => BD
    });
    var pD = wD(34181);
    const sD = "XH1-",
      KD = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      rD = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      LD = ["color", "outlineColor"],
      cD = 1 + 3 * LD.length + rD.length + 1,
      gD = Math.ceil(8 * cD / Math.log2(62)),
      RD = sD.length + gD;

    function AD(DD) {
      let zD = 90;
      for (const wD of DD) zD = 31 * zD + wD & 255;
      return zD
    }
    const UD = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      fD = BigInt(UD.length);

    function ID(DD, zD) {
      let wD = 0n;
      for (const sD of DD) {
        const DD = UD.indexOf(sD);
        if (DD < 0) return null;
        wD = wD * fD + BigInt(DD)
      }
      if (wD >> BigInt(8 * zD) !== 0n) return null;
      const pD = [];
      for (let sD = 0; sD < zD; sD++) pD.unshift(Number(0xffn & wD)), wD >>= 8n;
      return pD
    }

    function BD(DD) {
      let zD = "shapes" === DD.style ? 1 : 0;
      KD.forEach(((wD, pD) => {
        DD[wD] && (zD |= 1 << pD + 1)
      }));
      const wD = [zD];
      for (const sD of LD) {
        const zD = (0, pD.h)(sD, DD[sD]);
        wD.push(zD >> 16 & 255, zD >> 8 & 255, 255 & zD)
      }
      for (const sD of rD) {
        const {
          min: zD,
          step: KD
        } = pD.b[sD];
        wD.push(Math.round(((0, pD.h)(sD, DD[sD]) - zD) / KD))
      }
      return wD.push(AD(wD)), sD + function(DD, zD) {
        let wD = 0n;
        for (const sD of DD) wD = wD << 8n | BigInt(sD);
        let pD = "";
        for (let sD = 0; sD < zD; sD++) pD = UD[Number(wD % fD)] + pD, wD /= fD;
        return pD
      }(wD, gD)
    }

    function GD(DD) {
      for (const zD of DD.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${gD}})`, "gi"))) {
        const DD = hD(ID(zD[1], cD));
        if (DD) return DD
      }
      return null
    }

    function hD(DD) {
      if (!DD || DD.length !== cD || AD(DD.slice(0, -1)) !== DD[DD.length - 1]) return null;
      const zD = DD[0],
        wD = {
          ...pD.e,
          style: 1 & zD ? "shapes" : "classic"
        };
      KD.forEach(((DD, pD) => {
        wD[DD] = 0 !== (zD & 1 << pD + 1)
      }));
      let sD = 1;
      for (const pD of LD) wD[pD] = DD[sD] << 16 | DD[sD + 1] << 8 | DD[sD + 2], sD += 3;
      for (const KD of rD) {
        const {
          min: zD,
          step: rD
        } = pD.b[KD];
        wD[KD] = (0, pD.h)(KD, zD + DD[sD] * rD), sD++
      }
      return wD
    }
  },
  34181: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD,
      e: () => sD,
      h: () => KD,
      k: () => gD,
      m: () => cD,
      q: () => RD,
      u: () => LD,
      y: () => rD
    });
    const pD = {
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
      sD = Object.freeze({
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

    function KD(DD, zD) {
      var wD;
      const {
        min: KD,
        max: rD,
        step: LD
      } = pD[DD];
      if (!Number.isFinite(zD)) return sD[DD];
      const cD = (null !== (wD = String(LD).split(".")[1]) && void 0 !== wD ? wD : "").length,
        gD = Number((Math.round(zD / LD) * LD).toFixed(cD));
      return Math.min(rD, Math.max(KD, gD))
    }

    function rD(DD, zD, wD) {
      const pD = "number" === typeof wD ? KD(zD, wD) : wD;
      return {
        ...DD,
        [zD]: pD
      }
    }

    function LD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(sD).every((pD => wD.includes(pD) || DD[pD] === zD[pD]))
    }

    function cD(DD) {
      return LD(DD, sD)
    }

    function gD(DD) {
      return `#${DD.toString(16).padStart(6,"0")}`
    }

    function RD(DD) {
      const zD = /^#?([0-9a-f]{6})$/i.exec(DD.trim());
      return zD ? parseInt(zD[1], 16) : null
    }
  },
  34197: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => AD,
      g: () => UD
    });
    var pD = wD(58),
      sD = wD(35),
      KD = wD(34193),
      rD = wD(34181);
    const LD = "crosshairCode";
    let cD = null;
    const gD = new Set;

    function RD() {
      if (null === cD) {
        var DD;
        const zD = sD.h.getItem(LD);
        cD = null !== (DD = "string" === typeof zD ? (0, KD.d)(zD) : null) && void 0 !== DD ? DD : rD.e
      }
      return cD
    }

    function AD(DD) {
      cD = DD, (0, rD.m)(DD) ? sD.h.removeItem(LD) : sD.h.setItem(LD, (0, KD.h)(DD));
      for (const zD of gD) zD()
    }

    function UD() {
      const [DD, zD] = (0, pD.useState)(RD);
      return (0, pD.useEffect)((() => {
        const DD = () => {
          zD(RD())
        };
        return DD(), wD = DD, gD.add(wD), () => {
          gD.delete(wD)
        };
        var wD
      }), []), DD
    }
  },
  36726: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      f: () => cD,
      h: () => rD
    });
    var pD = wD(619),
      sD = wD(2769);

    function KD(DD) {
      return DD === (0, sD.e)().vDD ? (0, sD.e)().vW : DD
    }

    function rD(DD) {
      return !(0, pD.B)(DD) && KD(DD) === (0, sD.e)().vW
    }
    const LD = "gravity";

    function cD() {
      return (0, sD.e)().physics[LD][1]
    }
  },
  36711: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => QD
    });
    var pD = wD(36719),
      sD = wD(197),
      KD = wD(4875),
      rD = wD(36723),
      LD = wD(36432),
      cD = wD(36751),
      gD = wD(36726),
      RD = wD(358),
      AD = wD.n(RD),
      UD = wD(1211),
      fD = wD(2769),
      ID = wD(36749),
      BD = wD(25),
      GD = wD(20),
      hD = wD(36733),
      nD = wD(36738),
      MD = wD(36742);
    const OD = new Set(["note"]);
    const JD = {
      stop: () => JD,
      fade: () => JD,
      rate: () => JD,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => JD,
      setPannerAttr: () => JD,
      setPosition: () => JD
    };
    class ED {
      constructor(DD) {
        let zD, {
          src: wD,
          volumeScalar: sD,
          isSoundSprite: rD
        } = DD;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, rD ? (zD = (0, pD.i)(wD), this._spriteTrackSrc = zD) : zD = {
          src: UD.clientSideServerUrls.staticUrl + wD
        }, this._volumeMultiplier = new cD.g, this._volumeMultiplier.setMultiplierType("persistentScalar", sD), this._howl = (0, LD.countDecodesAs)(new KD.Howl({
          ...zD,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let DD, zD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          wD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (zD) {
          var pD;
          if (null === (pD = this._spriteTrackSrc) || void 0 === pD || !pD.sprite[zD]) throw new Error("No such sprite in your spritetrack");
          DD = this._howl.play(zD)
        } else DD = this._howl.play();
        wD && this._howl.loop(!0, DD);
        let sD = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), DD);
        const KD = {
          stop: () => {
            var zD;
            return null === (zD = this.liveHowl()) || void 0 === zD || zD.stop(DD), KD
          },
          fade: (zD, wD, pD) => {
            var sD;
            return null === (sD = this.liveHowl()) || void 0 === sD || sD.fade(zD, wD, pD, DD), KD
          },
          rate: zD => {
            var wD;
            return null === (wD = this.liveHowl()) || void 0 === wD || wD.rate(zD, DD), KD
          },
          stopsAtOnce: () => this._howl.playing(DD) && !this._howl._playLock,
          isAlive: () => {
            const zD = this._howl._soundById(DD);
            return !this._loadFailed && !!zD && !zD._ended
          },
          getDurationMs: () => this._howl._soundById(DD) ? 1e3 * this._howl.duration(DD) / this._howl.rate(DD) : 0,
          getVolume: () => sD * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => sD,
          setRelativeVolume: zD => {
            var wD;
            if (zD > 1) throw new Error("Volume should be <= 1");
            return sD = GD.e.get("soundOnFromAd") ? zD : 0, null === (wD = this.liveHowl()) || void 0 === wD || wD.volume(Math.min(1, sD * this._volumeMultiplier.getTotalMultipliedVal()), DD), KD
          },
          setPannerAttr: zD => {
            let {
              coneInnerAngle: wD,
              coneOuterAngle: pD = 360,
              coneOuterGain: sD,
              distanceModel: rD,
              maxDistance: LD,
              panningModel: cD,
              refDistance: gD,
              rolloffFactor: RD
            } = zD;
            return this._setPannerAttr({
              id: DD,
              coneInnerAngle: wD,
              coneOuterAngle: pD,
              coneOuterGain: sD,
              distanceModel: rD,
              maxDistance: LD,
              panningModel: cD,
              refDistance: gD,
              rolloffFactor: RD
            }), KD
          },
          setPosition: zD => {
            var wD;
            return null === (wD = this.liveHowl()) || void 0 === wD || wD.pos(zD[2], zD[1], zD[0], DD), KD
          }
        };
        return KD
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, rD.c)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(DD) {
        this._volumeMultiplier.setMultiplierType("globalVolume", DD), this._howl.volume(DD)
      }
      _setPannerAttr(DD) {
        let {
          id: zD,
          coneInnerAngle: wD = 360,
          coneOuterAngle: pD = 360,
          coneOuterGain: sD = 0,
          distanceModel: KD = "inverse",
          maxDistance: rD = 1e3,
          panningModel: LD = "HRTF",
          refDistance: cD = ID.g,
          rolloffFactor: gD = 1
        } = DD;
        const RD = this.liveHowl();
        if (null === RD) return;
        RD.pannerAttr({
          coneOuterAngle: pD
        }, zD);
        const AD = {
          coneInnerAngle: wD,
          coneOuterAngle: pD,
          coneOuterGain: sD,
          distanceModel: KD,
          maxDistance: rD,
          panningModel: LD,
          refDistance: cD,
          rolloffFactor: gD
        };
        RD.pannerAttr(AD, zD)
      }
    }
    const QD = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new hD.d, BD.l.subscribe("appManagerUpdated|soundVolume", (DD => {
          const zD = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const wD of zD) wD.setGlobalVolume(DD)
        }))
      }
      play(DD, zD) {
        var wD;
        let KD, rD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (wD = (0, fD.e)()) || void 0 === wD ? void 0 : wD.vW,
          LD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ID.f,
          cD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ID.g,
          RD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var UD;
        (0, fD.e)() ? KD = !!Array.isArray(rD) || (0, gD.b)(rD) !== (null === (UD = (0, fD.e)()) || void 0 === UD ? void 0 : UD.vW): KD = !1;
        const BD = (0, pD.l)(DD),
          GD = this.loadSheet(KD ? this.spatialSheets : this.stereoSheets, BD);
        if (!KD) {
          const wD = GD.play(DD, RD);
          return wD.setRelativeVolume(zD), wD
        }
        const nD = (0, fD.e)(),
          MD = Array.isArray(rD) ? rD : nD.yJ.PJ(rD),
          ED = nD.yJ.PJ(nD.vW);
        if (!MD || AD().sqrDist(MD, ED) > LD * LD) return JD;
        let QD;
        if (!RD) {
          if (!this.spatialVoices.admit({
              group: OD.has(BD) ? null : (0, hD.j)(DD),
              loudness: (0, hD.g)(zD, AD().HR(MD, ED), cD),
              startMs: performance.now(),
              getDurationMs: () => {
                var DD, zD;
                return null !== (DD = null === (zD = QD) || void 0 === zD ? void 0 : zD.getDurationMs()) && void 0 !== DD ? DD : 0
              },
              isAlive: () => {
                var DD, zD;
                return null !== (DD = null === (zD = QD) || void 0 === zD ? void 0 : zD.isAlive()) && void 0 !== DD && DD
              },
              canStop: () => {
                var DD, zD;
                return null !== (DD = null === (zD = QD) || void 0 === zD ? void 0 : zD.stopsAtOnce()) && void 0 !== DD && DD
              },
              stop: () => {
                var DD;
                null === (DD = QD) || void 0 === DD || DD.stop()
              }
            })) return JD
        }
        return QD = GD.play(DD, RD), QD.setRelativeVolume(zD), QD.setPannerAttr({
          refDistance: cD
        }), QD.setPosition([MD[0], MD[1] + sD.f.eG * sD.f.playerEyeToHeightRatio, MD[2]]), QD
      }
      preload(DD) {
        this.loadSheet(this.stereoSheets, (0, pD.l)(DD))
      }
      loadSheet(DD, zD) {
        let wD = DD[zD];
        return wD || ((0, MD.c)(zD), wD = new ED({
          src: zD,
          isSoundSprite: !0,
          volumeScalar: 1
        }), wD.setGlobalVolume(GD.e.get("soundVolume")), DD[zD] = wD), wD
      }
      freeSheetsAfterGame() {
        for (const DD of [this.stereoSheets, this.spatialSheets])
          for (const [zD, wD] of Object.entries(DD)) !nD.e.has(zD) && wD.loaded() && (wD.unloadOnceIdle(), delete DD[zD])
      }
    }
  },
  36804: (DD, zD, wD) => {
    function pD(DD, zD) {
      var wD, pD, sD, KD, rD, LD, cD, gD;
      return DD.name === zD.name && ((null === (wD = DD.attributes) || void 0 === wD || null === (pD = wD.customAttributes) || void 0 === pD ? void 0 : pD.stackKey) === (null === (sD = zD.attributes) || void 0 === sD || null === (KD = sD.customAttributes) || void 0 === KD ? void 0 : KD.stackKey) && (!0 !== (null === (rD = DD.attributes) || void 0 === rD || null === (LD = rD.customAttributes) || void 0 === LD ? void 0 : LD.unstackable) && !0 !== (null === (cD = zD.attributes) || void 0 === cD || null === (gD = cD.customAttributes) || void 0 === gD ? void 0 : gD.unstackable)))
    }
    wD.d(zD, {
      d: () => pD
    })
  },
  36897: (DD, zD, wD) => {
    function pD(DD) {
      return DD.includes("Leaf Bed")
    }

    function sD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !pD(DD)
    }

    function KD(DD) {
      return DD.includes(" Strongbed")
    }

    function rD(DD) {
      return pD(DD) || sD(DD) || KD(DD)
    }
    wD.d(zD, {
      b: () => rD,
      d: () => pD,
      e: () => KD,
      f: () => sD
    })
  },
  36891: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(36897),
      sD = wD(9198);
    const KD = [],
      rD = [],
      LD = [],
      cD = [];
    for (const RD of Object.keys(sD.q))(0, pD.d)(RD) ? KD.push(RD) : (0, pD.f)(RD) && rD.push(RD), (0, pD.e)(RD) && LD.push(RD), (RD.includes(" Bed Head") || RD.includes(" Strongbed Head")) && cD.push(RD);
    const gD = {
      leafBeds: KD,
      woolBeds: rD,
      strongBeds: LD,
      beds: [...KD, ...rD, ...LD],
      bedHeads: cD,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6520: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      i: () => sD,
      j: () => cD,
      k: () => KD,
      o: () => gD,
      q: () => pD,
      t: () => LD
    });
    let pD = function(DD) {
        return DD[DD.DEFAULT = 0] = "DEFAULT", DD[DD.BOAT = 1] = "BOAT", DD[DD.GLIDER = 2] = "GLIDER", DD[DD.BALLOON = 3] = "BALLOON", DD[DD.SLEEPING = 4] = "SLEEPING", DD[DD.RIDING_MOB = 5] = "RIDING_MOB", DD[DD.CAR = 6] = "CAR", DD[DD.HOVERCRAFT = 7] = "HOVERCRAFT", DD
      }({}),
      sD = function(DD) {
        return DD[DD.WOOD = 0] = "WOOD", DD[DD.OBSIDIAN = 1] = "OBSIDIAN", DD[DD.SPEED = 2] = "SPEED", DD
      }({}),
      KD = function(DD) {
        return DD[DD.WOOD = 0] = "WOOD", DD[DD.IRON = 1] = "IRON", DD[DD.GOLD = 2] = "GOLD", DD[DD.DIAMOND = 3] = "DIAMOND", DD
      }({}),
      rD = function(DD) {
        return DD[DD.YELLOW = 0] = "YELLOW", DD[DD.WHITE = 1] = "WHITE", DD[DD.RED = 2] = "RED", DD[DD.PURPLE = 3] = "PURPLE", DD[DD.PINK = 4] = "PINK", DD[DD.ORANGE = 5] = "ORANGE", DD[DD.MAGENTA = 6] = "MAGENTA", DD[DD.LIME = 7] = "LIME", DD[DD.LIGHT_GRAY = 8] = "LIGHT_GRAY", DD[DD.LIGHT_BLUE = 9] = "LIGHT_BLUE", DD[DD.GREEN = 10] = "GREEN", DD[DD.GRAY = 11] = "GRAY", DD[DD.CYAN = 12] = "CYAN", DD[DD.BROWN = 13] = "BROWN", DD[DD.BLUE = 14] = "BLUE", DD[DD.BLACK = 15] = "BLACK", DD
      }({}),
      LD = function(DD) {
        return DD[DD.ROTATION_1 = 0] = "ROTATION_1", DD[DD.ROTATION_2 = 1] = "ROTATION_2", DD[DD.ROTATION_3 = 2] = "ROTATION_3", DD[DD.ROTATION_4 = 3] = "ROTATION_4", DD
      }({}),
      cD = function(DD) {
        return DD[DD.KART = 0] = "KART", DD[DD.OFF_ROADER = 1] = "OFF_ROADER", DD[DD.CAR = 2] = "CAR", DD[DD.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", DD[DD.ARMORED_CAR = 4] = "ARMORED_CAR", DD[DD.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", DD[DD.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", DD[DD.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", DD
      }({});
    pD.DEFAULT, pD.BOAT, sD.SPEED, pD.GLIDER, KD.DIAMOND, pD.BALLOON, rD.BLACK, pD.SLEEPING, LD.ROTATION_4, pD.RIDING_MOB, pD.CAR, cD.MOONSTONE_MINING_DRILL, pD.HOVERCRAFT;
    let gD = function(DD) {
      return DD[DD.NORMAL = 0] = "NORMAL", DD[DD.GLIDING = 1] = "GLIDING", DD[DD.FLOATING = 2] = "FLOATING", DD
    }({})
  },
  34191: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);