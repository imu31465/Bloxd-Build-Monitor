export const id = 223;
export const ids = [223];
export const modules = {
  37546: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => JM,
      e: () => CM
    });
    iM(34999);
    var OM = iM(44),
      SM = iM(1516),
      jM = iM(2039),
      aM = iM(2084),
      PM = iM(19),
      nM = iM(2640),
      QM = iM(37554),
      zM = iM(37559),
      LM = iM(34985),
      mM = iM(34997),
      HM = iM(35006),
      hM = iM(1303);
    const JM = (0, OM.memo)((function() {
      var MM;
      const {
        isTouchScreen: rM,
        clientEscMenuOptions: iM,
        scriptedCameraFacing: jM,
        crosshairShownOverride: JM,
        crosshairGameView: yM
      } = (0, PM.m)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), lM = (0, nM.f)("gunshotOrigin"), EM = (0, OM.useRef)(null), UM = (0, OM.useRef)(!1), [GM, eM] = (0, OM.useState)(dM);
      (0, SM.d)("cameraZoomSet", eM), (0, OM.useEffect)((() => {
        eM(dM())
      }), []);
      const bM = (0, aM.j)("heldItemAim"),
        tM = bM.gun,
        gM = (0, HM.f)(),
        uM = (0, OM.useRef)(gM);
      uM.current = gM;
      const [RM, pM] = (0, OM.useState)(!1);
      (0, OM.useEffect)((() => (0, zM.h)("crosshairAccuracy", CM)), []), (0, SM.d)("mouseState", (MM => {
        let {
          isDown: rM
        } = MM;
        UM.current = rM, EM.current && (EM.current.style.transform = (0, mM.e)(rM, uM.current.growOnClick)), "shapes" === uM.current.style && pM(rM)
      }));
      const WM = (0, LM.c)(rM, iM.touchActionButtons);
      return (null !== (MM = (0, QM.e)(yM, JM)) && void 0 !== MM ? MM : (0, QM.k)(bM, GM > 1, WM, lM)) ? "movement" === jM || "cursor" === jM ? null : (0, hM.jsxs)(hM.Fragment, {
        children: [tM && (0, hM.jsx)(wM, {
          custom: gM.forGuns && "shapes" === gM.style ? gM : null,
          touch: rM
        }), !tM && (0, hM.jsx)(mM.c, {
          settings: gM,
          touch: rM,
          pressRef: EM,
          pressed: "shapes" === gM.style ? RM : UM.current
        })]
      }) : null
    }));

    function dM() {
      return jM.gameBridge.lookup("cameraZoom", null)
    }
    const yM = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      lM = {
        current: null
      },
      EM = {
        current: null
      };
    let UM = 0,
      GM = 0;

    function CM(MM) {
      GM = MM, yM[0].current || lM.current || EM.current ? bM(MM) : UM = MM
    }

    function eM(MM) {
      return ((0, QM.g)(MM) - (0, QM.g)(0)) * window.innerHeight / 100
    }

    function bM(MM) {
      var rM;
      if (null === (rM = EM.current) || void 0 === rM || rM.call(EM, eM(MM)), yM[0].current) {
        const rM = `${(0,QM.g)(MM)}vh`;
        yM[0].current.style.transform = `translateX(calc(0px - ${rM}))`, yM[1].current.style.transform = `translateX(calc(0px + ${rM}))`, yM[2].current.style.transform = `translateY(calc(0px - ${rM}))`, yM[3].current.style.transform = `translateY(calc(0px + ${rM}))`
      }
      lM.current && (lM.current.style.filter = `blur(${Math.round(MM/10)}px)`)
    }

    function wM(MM) {
      let {
        custom: rM,
        touch: iM
      } = MM;
      const jM = (0, SM.e)("aimingOverlay", "none"),
        aM = "1.2vh",
        PM = "0.3vh";
      (0, OM.useEffect)((() => {
        UM && bM(UM)
      }), []);
      const nM = (0, OM.useRef)(null !== rM);
      return (0, OM.useLayoutEffect)((() => {
        var MM;
        rM ? null === (MM = EM.current) || void 0 === MM || MM.call(EM, eM(GM)) : nM.current && bM(GM);
        nM.current = null !== rM
      }), [rM]), (0, hM.jsxs)(hM.Fragment, {
        children: ["sniper" === jM && (0, hM.jsxs)("div", {
          ref: lM,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, hM.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, hM.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, hM.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, hM.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, hM.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === jM ? 0 : 1
          },
          children: [rM && (0, hM.jsx)(mM.c, {
            settings: rM,
            touch: iM,
            spreadRef: EM
          }), !rM && (0, hM.jsxs)(hM.Fragment, {
            children: [(0, hM.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: aM,
                height: PM,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: yM[0]
            }), (0, hM.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: aM,
                height: PM,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: yM[1]
            }), (0, hM.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: PM,
                height: aM,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: yM[2]
            }), (0, hM.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: PM,
                height: aM,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: yM[3]
            })]
          })]
        })]
      })
    }
  },
  34997: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => JM,
      e: () => hM
    });
    iM(34999);
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(44),
      aM = iM(34989);

    function PM(MM, rM) {
      return Math.max(1, Math.round(MM * rM))
    }

    function nM(MM, rM) {
      const iM = rM * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        OM = function(MM, rM) {
          if (MM.lines) return PM(MM.lineThickness, rM) % 2;
          if (MM.dot) return PM(MM.dotSize, rM) % 2;
          return QM(MM, rM) % 2
        }(MM, rM),
        SM = zM(MM.lineThickness * iM, OM),
        jM = PM(MM.lineLength, iM),
        aM = Math.round(MM.gap * iM),
        nM = MM.outline > 0 ? PM(MM.outline, iM) : 0,
        mM = [];
      if (MM.lines && (mM.push({
          x: SM + aM,
          y: 0,
          w: jM,
          h: SM,
          arm: "right"
        }), mM.push({
          x: -aM - jM,
          y: 0,
          w: jM,
          h: SM,
          arm: "left"
        }), mM.push({
          x: 0,
          y: SM + aM,
          w: SM,
          h: jM,
          arm: "down"
        }), MM.tStyle || mM.push({
          x: 0,
          y: -aM - jM,
          w: SM,
          h: jM,
          arm: "up"
        }), 0 === aM && mM.push({
          x: 0,
          y: 0,
          w: SM,
          h: SM
        })), MM.dot) {
        const rM = zM(MM.dotSize * iM, OM),
          jM = MM.lines && 0 === aM && MM.dotSize > MM.lineThickness ? Math.max(rM, SM + 2) : rM,
          PM = (SM - jM) / 2;
        mM.push({
          x: PM,
          y: PM,
          w: jM,
          h: jM
        })
      }
      const HM = mM.map((MM => ({
        ...MM,
        x: MM.x - nM,
        y: MM.y - nM,
        w: MM.w + 2 * nM,
        h: MM.h + 2 * nM
      })));
      let hM = null,
        JM = null;
      if (MM.circle) {
        const rM = PM(MM.circleThickness, iM),
          jM = function(MM, rM) {
            return MM + (MM % 2 === rM ? 0 : 1)
          }(QM(MM, iM), OM),
          aM = (SM - jM) / 2;
        hM = LM(aM, jM, rM), nM > 0 && (JM = LM(aM - nM, jM + 2 * nM, rM + 2 * nM))
      }
      return {
        cell: SM,
        fills: mM,
        outlines: nM > 0 ? HM : [],
        ring: hM,
        ringOutline: JM
      }
    }

    function QM(MM, rM) {
      return Math.round(MM.circleRadius * rM * 2 + PM(MM.circleThickness, rM))
    }

    function zM(MM, rM) {
      return Math.max(2 - rM, 2 * Math.round((MM - rM) / 2) + rM)
    }

    function LM(MM, rM, iM) {
      const OM = 2 * iM >= rM - 1;
      return {
        x: MM,
        y: MM,
        size: rM,
        border: Math.min(iM, Math.floor(rM / 2)),
        filled: OM
      }
    }
    var mM = iM(1303);
    const HM = 1.4;

    function hM(MM, rM) {
      return MM && rM ? `scale(${HM})` : "scale(1)"
    }

    function JM(MM) {
      return "classic" === MM.settings.style ? (0, mM.jsx)(lM, {
        ...MM
      }) : (0, mM.jsx)(wM, {
        ...MM
      })
    }
    const dM = .125;

    function yM(MM, rM) {
      const iM = {};
      if (MM.color !== aM.e.color && (iM.color = (0, aM.i)(MM.color)), MM.opacity !== aM.e.opacity && (iM.opacity = MM.opacity / 100), MM.outline !== aM.e.outline || MM.outlineColor !== aM.e.outlineColor) {
        const rM = MM.outline,
          OM = (0, aM.i)(MM.outlineColor);
        iM.textShadow = rM > 0 ? `-${rM}px 0 ${OM}, 0 ${rM}px ${OM}, ${rM}px 0 ${OM}, 0 -${rM}px ${OM}` : "none"
      }
      if (MM.size !== aM.e.size) {
        const OM = MM.size / 100;
        iM.fontSize = rM ? `calc(max(1.3rem, 18px) * ${OM})` : `calc(1.3rem * ${OM})`, iM.marginTop = `-${dM}em`, iM.transformOrigin = `50% calc(50% + ${dM}em)`
      }
      return iM
    }

    function lM(MM) {
      let {
        settings: rM,
        touch: iM,
        inPreview: OM,
        inEditor: jM,
        pressed: aM = !1,
        pressRef: PM
      } = MM;
      return (0, mM.jsx)("div", {
        className: SM()("Crosshair", {
          Touch: iM,
          CrosshairInPreview: OM,
          CrosshairInEditor: jM || OM
        }),
        ref: PM,
        style: {
          transform: hM(aM, rM.growOnClick),
          ...yM(rM, iM)
        },
        children: "+"
      })
    }

    function EM(MM, rM) {
      return MM / rM + "px"
    }

    function UM(MM, rM, iM, OM) {
      return {
        ...eM(MM, rM, iM),
        width: EM(MM.w, iM),
        height: EM(MM.h, iM),
        background: OM
      }
    }

    function GM(MM, rM, iM) {
      return {
        left: EM(MM.x, rM),
        top: EM(MM.y, rM),
        width: EM(MM.size, rM),
        height: EM(MM.size, rM),
        borderWidth: EM(MM.border, rM),
        borderColor: iM,
        background: MM.filled ? iM : void 0
      }
    }
    const CM = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function eM(MM, rM, iM) {
      const [OM, SM] = MM.arm ? CM[MM.arm] : [0, 0], jM = Math.round(rM * iM);
      return {
        left: EM(MM.x + OM * jM, iM),
        top: EM(MM.y + SM * jM, iM)
      }
    }

    function bM(MM) {
      return MM.arm ? {
        "data-arm": MM.arm,
        "data-x": MM.x,
        "data-y": MM.y
      } : {}
    }

    function wM(MM) {
      let {
        settings: rM,
        inPreview: iM,
        inEditor: OM,
        pressed: PM = !1,
        spread: QM,
        spreadRef: zM
      } = MM;
      const LM = (0, jM.useRef)(null),
        {
          box: hM,
          dpr: JM
        } = function(MM) {
          const [rM, iM] = (0, jM.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, jM.useLayoutEffect)((() => {
            const rM = MM.current;
            if (!rM) return;
            const OM = () => {
              const MM = rM.getBoundingClientRect(),
                OM = window.devicePixelRatio || 1;
              iM((rM => rM.dpr === OM && rM.box.left === MM.left && rM.box.top === MM.top && rM.box.width === MM.width && rM.box.height === MM.height ? rM : {
                box: {
                  left: MM.left,
                  top: MM.top,
                  width: MM.width,
                  height: MM.height
                },
                dpr: OM
              }))
            };
            OM();
            const SM = new ResizeObserver(OM);
            return SM.observe(rM), window.addEventListener("resize", OM), window.addEventListener("scroll", OM, !0), () => {
              SM.disconnect(), window.removeEventListener("resize", OM), window.removeEventListener("scroll", OM, !0)
            }
          }), [MM]), rM
        }(LM),
        dM = (0, jM.useRef)(JM);
      dM.current = JM;
      const yM = nM(rM, JM, PM && rM.growOnClick ? HM : 1),
        lM = function(MM, rM, iM) {
          const OM = Math.round((MM.left + MM.width / 2) * iM - rM / 2),
            SM = Math.round((MM.top + MM.height / 2) * iM - rM / 2);
          return {
            x: OM / iM - MM.left,
            y: SM / iM - MM.top
          }
        }(hM, yM.cell, JM),
        EM = (0, aM.i)(rM.color),
        CM = (0, aM.i)(rM.outlineColor),
        wM = (0, jM.useRef)(0);
      (0, jM.useLayoutEffect)((() => {
        if (zM) return zM.current = MM => {
          var rM;
          wM.current = MM, null === (rM = LM.current) || void 0 === rM || rM.querySelectorAll("[data-arm]").forEach((rM => {
            Object.assign(rM.style, eM(function(MM) {
              return {
                x: Number(MM.dataset.x),
                y: Number(MM.dataset.y),
                arm: MM.dataset.arm
              }
            }(rM), MM, dM.current))
          }))
        }, () => {
          zM.current = null
        }
      }), [zM]);
      const tM = null !== QM && void 0 !== QM ? QM : wM.current;
      return (0, mM.jsx)("div", {
        ref: LM,
        className: SM()("CrosshairShapes", {
          CrosshairInPreview: iM,
          CrosshairInEditor: OM || iM,
          CrosshairSpreads: void 0 !== zM
        }),
        children: (0, mM.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: lM.x,
            top: lM.y,
            opacity: rM.opacity / 100
          },
          children: (0, mM.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [yM.ringOutline && (0, mM.jsx)("div", {
              className: "CrosshairRing",
              style: GM(yM.ringOutline, JM, CM)
            }), yM.outlines.map(((MM, rM) => (0, mM.jsx)("div", {
              className: "CrosshairPart",
              ...bM(MM),
              style: UM(MM, tM, JM, CM)
            }, `o${rM}`))), yM.ring && (0, mM.jsx)("div", {
              className: "CrosshairRing",
              style: GM(yM.ring, JM, EM)
            }), yM.fills.map(((MM, rM) => (0, mM.jsx)("div", {
              className: "CrosshairPart",
              ...bM(MM),
              style: UM(MM, tM, JM, EM)
            }, `f${rM}`)))]
          })
        })
      })
    }
  },
  35003: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM,
      f: () => dM,
      i: () => JM
    });
    var OM = iM(34989);
    const SM = "XH1-",
      jM = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      aM = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      PM = ["color", "outlineColor"],
      nM = 1 + 3 * PM.length + aM.length + 1,
      QM = Math.ceil(8 * nM / Math.log2(62)),
      zM = SM.length + QM;

    function LM(MM) {
      let rM = 90;
      for (const iM of MM) rM = 31 * rM + iM & 255;
      return rM
    }
    const mM = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      HM = BigInt(mM.length);

    function hM(MM, rM) {
      let iM = 0n;
      for (const SM of MM) {
        const MM = mM.indexOf(SM);
        if (MM < 0) return null;
        iM = iM * HM + BigInt(MM)
      }
      if (iM >> BigInt(8 * rM) !== 0n) return null;
      const OM = [];
      for (let SM = 0; SM < rM; SM++) OM.unshift(Number(0xffn & iM)), iM >>= 8n;
      return OM
    }

    function JM(MM) {
      let rM = "shapes" === MM.style ? 1 : 0;
      jM.forEach(((iM, OM) => {
        MM[iM] && (rM |= 1 << OM + 1)
      }));
      const iM = [rM];
      for (const SM of PM) {
        const rM = (0, OM.f)(SM, MM[SM]);
        iM.push(rM >> 16 & 255, rM >> 8 & 255, 255 & rM)
      }
      for (const SM of aM) {
        const {
          min: rM,
          step: jM
        } = OM.d[SM];
        iM.push(Math.round(((0, OM.f)(SM, MM[SM]) - rM) / jM))
      }
      return iM.push(LM(iM)), SM + function(MM, rM) {
        let iM = 0n;
        for (const SM of MM) iM = iM << 8n | BigInt(SM);
        let OM = "";
        for (let SM = 0; SM < rM; SM++) OM = mM[Number(iM % HM)] + OM, iM /= HM;
        return OM
      }(iM, QM)
    }

    function dM(MM) {
      for (const rM of MM.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${QM}})`, "gi"))) {
        const MM = yM(hM(rM[1], nM));
        if (MM) return MM
      }
      return null
    }

    function yM(MM) {
      if (!MM || MM.length !== nM || LM(MM.slice(0, -1)) !== MM[MM.length - 1]) return null;
      const rM = MM[0],
        iM = {
          ...OM.e,
          style: 1 & rM ? "shapes" : "classic"
        };
      jM.forEach(((MM, OM) => {
        iM[MM] = 0 !== (rM & 1 << OM + 1)
      }));
      let SM = 1;
      for (const OM of PM) iM[OM] = MM[SM] << 16 | MM[SM + 1] << 8 | MM[SM + 2], SM += 3;
      for (const jM of aM) {
        const {
          min: rM,
          step: aM
        } = OM.d[jM];
        iM[jM] = (0, OM.f)(jM, rM + MM[SM] * aM), SM++
      }
      return iM
    }
  },
  34989: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM,
      e: () => SM,
      f: () => jM,
      i: () => QM,
      j: () => nM,
      m: () => zM,
      p: () => PM,
      t: () => aM
    });
    const OM = {
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
      SM = Object.freeze({
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

    function jM(MM, rM) {
      var iM;
      const {
        min: jM,
        max: aM,
        step: PM
      } = OM[MM];
      if (!Number.isFinite(rM)) return SM[MM];
      const nM = (null !== (iM = String(PM).split(".")[1]) && void 0 !== iM ? iM : "").length,
        QM = Number((Math.round(rM / PM) * PM).toFixed(nM));
      return Math.min(aM, Math.max(jM, QM))
    }

    function aM(MM, rM, iM) {
      const OM = "number" === typeof iM ? jM(rM, iM) : iM;
      return {
        ...MM,
        [rM]: OM
      }
    }

    function PM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(SM).every((OM => iM.includes(OM) || MM[OM] === rM[OM]))
    }

    function nM(MM) {
      return PM(MM, SM)
    }

    function QM(MM) {
      return `#${MM.toString(16).padStart(6,"0")}`
    }

    function zM(MM) {
      const rM = /^#?([0-9a-f]{6})$/i.exec(MM.trim());
      return rM ? parseInt(rM[1], 16) : null
    }
  },
  35006: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM,
      f: () => mM
    });
    var OM = iM(44),
      SM = iM(30),
      jM = iM(35003),
      aM = iM(34989);
    const PM = "crosshairCode";
    let nM = null;
    const QM = new Set;

    function zM() {
      if (null === nM) {
        var MM;
        const rM = SM.g.getItem(PM);
        nM = null !== (MM = "string" === typeof rM ? (0, jM.f)(rM) : null) && void 0 !== MM ? MM : aM.e
      }
      return nM
    }

    function LM(MM) {
      nM = MM, (0, aM.j)(MM) ? SM.g.removeItem(PM) : SM.g.setItem(PM, (0, jM.i)(MM));
      for (const rM of QM) rM()
    }

    function mM() {
      const [MM, rM] = (0, OM.useState)(zM);
      return (0, OM.useEffect)((() => {
        const MM = () => {
          rM(zM())
        };
        return MM(), iM = MM, QM.add(iM), () => {
          QM.delete(iM)
        };
        var iM
      }), []), MM
    }
  },
  37722: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      i: () => nM,
      m: () => aM
    });
    var OM = iM(625),
      SM = iM(3063);

    function jM(MM) {
      return MM === (0, SM.f)().IMM ? (0, SM.f)().eD : MM
    }

    function aM(MM) {
      return !(0, OM.J)(MM) && jM(MM) === (0, SM.f)().eD
    }
    const PM = "gravity";

    function nM() {
      return (0, SM.f)().physics[PM][1]
    }
  },
  37699: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => eM
    });
    var OM = iM(37705),
      SM = iM(181),
      jM = iM(5265),
      aM = iM(37713),
      PM = iM(37390),
      nM = iM(37761),
      QM = iM(37722),
      zM = iM(347),
      LM = iM.n(zM),
      mM = iM(3063),
      HM = iM(37758),
      hM = iM(22),
      JM = iM(19),
      dM = iM(37730),
      yM = iM(37737),
      lM = iM(37741),
      EM = iM(37744);
    const UM = new Set(["note"]);
    const GM = {
      stop: () => GM,
      fade: () => GM,
      rate: () => GM,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => GM,
      setPannerAttr: () => GM,
      setPosition: () => GM
    };
    class CM {
      constructor(MM) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new nM.h, this._howl = (0, PM.countDecodesAs)(new jM.Howl({
          src: [...(0, OM.r)(MM).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = this._howl.play(aM.e);
        MM && this._howl.loop(!0, rM);
        let iM = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), rM);
        const OM = {
          stop: () => {
            var MM;
            return null === (MM = this.liveHowl()) || void 0 === MM || MM.stop(rM), OM
          },
          fade: (MM, iM, SM) => {
            var jM;
            return null === (jM = this.liveHowl()) || void 0 === jM || jM.fade(MM, iM, SM, rM), OM
          },
          rate: MM => {
            var iM;
            return null === (iM = this.liveHowl()) || void 0 === iM || iM.rate(MM, rM), OM
          },
          stopsAtOnce: () => this._howl.playing(rM) && !this._howl._playLock,
          isAlive: () => {
            const MM = this._howl._soundById(rM);
            return !this._loadFailed && !!MM && !MM._ended
          },
          getDurationMs: () => this._howl._soundById(rM) ? 1e3 * this._howl.duration(rM) / this._howl.rate(rM) : 0,
          getVolume: () => iM * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => iM,
          setRelativeVolume: MM => {
            var SM;
            if (MM > 1) throw new Error("Volume should be <= 1");
            return iM = JM.d.get("soundOnFromAd") ? MM : 0, null === (SM = this.liveHowl()) || void 0 === SM || SM.volume(Math.min(1, iM * this._volumeMultiplier.getTotalMultipliedVal()), rM), OM
          },
          setPannerAttr: MM => {
            let {
              coneInnerAngle: iM,
              coneOuterAngle: SM = 360,
              coneOuterGain: jM,
              distanceModel: aM,
              maxDistance: PM,
              panningModel: nM,
              refDistance: QM,
              rolloffFactor: zM
            } = MM;
            return this._setPannerAttr({
              id: rM,
              coneInnerAngle: iM,
              coneOuterAngle: SM,
              coneOuterGain: jM,
              distanceModel: aM,
              maxDistance: PM,
              panningModel: nM,
              refDistance: QM,
              rolloffFactor: zM
            }), OM
          },
          setPosition: MM => {
            var iM;
            return null === (iM = this.liveHowl()) || void 0 === iM || iM.pos(MM[2], MM[1], MM[0], rM), OM
          }
        };
        return OM
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, aM.i)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(MM) {
        this._volumeMultiplier.setMultiplierType("globalVolume", MM), this._howl.volume(MM)
      }
      _setPannerAttr(MM) {
        let {
          id: rM,
          coneInnerAngle: iM = 360,
          coneOuterAngle: OM = 360,
          coneOuterGain: SM = 0,
          distanceModel: jM = "inverse",
          maxDistance: aM = 1e3,
          panningModel: PM = "HRTF",
          refDistance: nM = HM.l,
          rolloffFactor: QM = 1
        } = MM;
        const zM = this.liveHowl();
        if (null === zM) return;
        zM.pannerAttr({
          coneOuterAngle: OM
        }, rM);
        const LM = {
          coneInnerAngle: iM,
          coneOuterAngle: OM,
          coneOuterGain: SM,
          distanceModel: jM,
          maxDistance: aM,
          panningModel: PM,
          refDistance: nM,
          rolloffFactor: QM
        };
        zM.pannerAttr(LM, rM)
      }
    }
    const eM = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new dM.e, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, hM.i.subscribe("appManagerUpdated|soundVolume", (MM => {
          const rM = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const iM of rM) iM.setGlobalVolume(MM)
        }))
      }
      play(MM, rM) {
        var iM;
        let jM, aM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (iM = (0, mM.f)()) || void 0 === iM ? void 0 : iM.eD,
          PM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HM.i,
          nM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HM.l,
          zM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var hM;
        (0, mM.f)() ? jM = !!Array.isArray(aM) || (0, QM.e)(aM) !== (null === (hM = (0, mM.f)()) || void 0 === hM ? void 0 : hM.eD): jM = !1;
        const JM = (0, OM.j)(MM),
          yM = this.loadSound(jM ? this.spatialSounds : this.stereoSounds, MM);
        if (!jM) {
          const MM = yM.play(zM);
          return MM.setRelativeVolume(rM), MM
        }
        const lM = (0, mM.f)(),
          EM = Array.isArray(aM) ? aM : lM.hU.XE(aM),
          CM = lM.hU.XE(lM.eD);
        if (!EM || LM().sqrDist(EM, CM) > PM * PM) return GM;
        let eM;
        if (!zM) {
          if (!this.spatialVoices.admit({
              group: UM.has(JM) ? null : (0, dM.i)(MM),
              loudness: (0, dM.f)(rM, LM().RQ(EM, CM), nM),
              startMs: performance.now(),
              getDurationMs: () => {
                var MM, rM;
                return null !== (MM = null === (rM = eM) || void 0 === rM ? void 0 : rM.getDurationMs()) && void 0 !== MM ? MM : 0
              },
              isAlive: () => {
                var MM, rM;
                return null !== (MM = null === (rM = eM) || void 0 === rM ? void 0 : rM.isAlive()) && void 0 !== MM && MM
              },
              canStop: () => {
                var MM, rM;
                return null !== (MM = null === (rM = eM) || void 0 === rM ? void 0 : rM.stopsAtOnce()) && void 0 !== MM && MM
              },
              stop: () => {
                var MM;
                null === (MM = eM) || void 0 === MM || MM.stop()
              }
            })) return GM
        }
        return eM = yM.play(zM), eM.setRelativeVolume(rM), eM.setPannerAttr({
          refDistance: nM
        }), eM.setPosition([EM[0], EM[1] + SM.f.jy * SM.f.playerEyeToHeightRatio, EM[2]]), eM
      }
      preload(MM) {
        const rM = (0, OM.p)(MM) ? [MM] : (0, OM.v)(MM);
        if (0 === rM.length) throw new Error(`Invalid sound name ${MM} (no sound has it or starts with it)`);
        for (const iM of rM) this.loadSound(this.stereoSounds, iM)
      }
      preloadAtIdle(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EM.b;
        const iM = MM.filter((MM => !this.idlePreloads.has(MM)));
        for (const SM of iM) this.idlePreloads.add(SM);
        const OM = this.idlePreloadGeneration;
        (0, lM.c)(iM, {
          ...rM,
          Ti: () => OM !== this.idlePreloadGeneration,
          fetchFile: MM => {
            this.idlePreloads.delete(MM);
            try {
              return this.preload(MM), Promise.resolve()
            } catch (rM) {
              return Promise.reject(rM)
            }
          }
        })
      }
      loadSound(MM, rM) {
        const iM = MM[rM];
        if (iM) return iM;
        const SM = this.makeSound(MM, rM);
        for (const aM of null !== (jM = (0, OM.q)(rM)) && void 0 !== jM ? jM : []) {
          var jM;
          MM[aM] || this.makeSound(MM, aM)
        }
        return SM
      }
      makeSound(MM, rM) {
        (0, EM.c)(rM);
        const iM = new CM(rM);
        return iM.setGlobalVolume(JM.d.get("soundVolume")), MM[rM] = iM, iM
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const MM of [this.stereoSounds, this.spatialSounds])
          for (const [rM, iM] of Object.entries(MM)) !yM.b.has((0, OM.j)(rM)) && iM.loaded() && (iM.unloadOnceIdle(), delete MM[rM])
      }
    }
  },
  37787: (MM, rM, iM) => {
    function OM(MM, rM) {
      var iM, OM, SM, jM, aM, PM, nM, QM;
      return MM.name === rM.name && ((null === (iM = MM.attributes) || void 0 === iM || null === (OM = iM.customAttributes) || void 0 === OM ? void 0 : OM.stackKey) === (null === (SM = rM.attributes) || void 0 === SM || null === (jM = SM.customAttributes) || void 0 === jM ? void 0 : jM.stackKey) && (!0 !== (null === (aM = MM.attributes) || void 0 === aM || null === (PM = aM.customAttributes) || void 0 === PM ? void 0 : PM.unstackable) && !0 !== (null === (nM = rM.attributes) || void 0 === nM || null === (QM = nM.customAttributes) || void 0 === QM ? void 0 : QM.unstackable)))
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  37858: (MM, rM, iM) => {
    function OM(MM) {
      return MM.includes("Leaf Bed")
    }

    function SM(MM) {
      return / Bed(?: Head)?(?:\||$)/.test(MM) && !OM(MM)
    }

    function jM(MM) {
      return MM.includes(" Strongbed")
    }

    function aM(MM) {
      return OM(MM) || SM(MM) || jM(MM)
    }
    iM.d(rM, {
      e: () => aM,
      g: () => OM,
      h: () => jM,
      l: () => SM
    })
  },
  37855: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM
    });
    var OM = iM(37858),
      SM = iM(9816);
    const jM = [],
      aM = [],
      PM = [],
      nM = [];
    for (const zM of Object.keys(SM.p))(0, OM.g)(zM) ? jM.push(zM) : (0, OM.l)(zM) && aM.push(zM), (0, OM.h)(zM) && PM.push(zM), (zM.includes(" Bed Head") || zM.includes(" Strongbed Head")) && nM.push(zM);
    const QM = {
      leafBeds: jM,
      woolBeds: aM,
      strongBeds: PM,
      beds: [...jM, ...aM, ...PM],
      bedHeads: nM,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  34999: () => {}
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);