export const id = 219;
export const ids = [219];
export const modules = {
  37279: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => qB,
      g: () => SB
    });
    GB(34769);
    var YB = GB(56),
      DB = GB(1480),
      QB = GB(2023),
      oB = GB(2063),
      jB = GB(16),
      yB = GB(2653),
      JB = GB(37288),
      MB = GB(37292),
      PB = GB(34755),
      zB = GB(34765),
      lB = GB(34777),
      pB = GB(1282);
    const qB = (0, YB.memo)((function() {
      var BB;
      const {
        isTouchScreen: OB,
        clientEscMenuOptions: GB,
        scriptedCameraFacing: QB,
        crosshairShownOverride: qB,
        crosshairGameView: NB
      } = (0, jB.o)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), RB = (0, yB.g)("gunshotOrigin"), WB = (0, YB.useRef)(null), AB = (0, YB.useRef)(!1), [VB, nB] = (0, YB.useState)(ZB);
      (0, DB.f)("cameraZoomSet", nB), (0, YB.useEffect)((() => {
        nB(ZB())
      }), []);
      const UB = (0, oB.g)("heldItemAim"),
        kB = UB.gun,
        dB = (0, lB.f)(),
        KB = (0, YB.useRef)(dB);
      KB.current = dB;
      const [uB, mB] = (0, YB.useState)(!1);
      (0, YB.useEffect)((() => (0, MB.g)("crosshairAccuracy", SB)), []), (0, DB.f)("mouseState", (BB => {
        let {
          isDown: OB
        } = BB;
        AB.current = OB, WB.current && (WB.current.style.transform = (0, zB.g)(OB, KB.current.growOnClick)), "shapes" === KB.current.style && mB(OB)
      }));
      const IB = (0, PB.h)(OB, GB.touchActionButtons);
      return (null !== (BB = (0, JB.e)(NB, qB)) && void 0 !== BB ? BB : (0, JB.h)(UB, VB > 1, IB, RB)) ? "movement" === QB || "cursor" === QB ? null : (0, pB.jsxs)(pB.Fragment, {
        children: [kB && (0, pB.jsx)(fB, {
          custom: dB.forGuns && "shapes" === dB.style ? dB : null,
          touch: OB
        }), !kB && (0, pB.jsx)(zB.c, {
          settings: dB,
          touch: OB,
          pressRef: WB,
          pressed: "shapes" === dB.style ? uB : AB.current
        })]
      }) : null
    }));

    function ZB() {
      return QB.gameBridge.lookup("cameraZoom", null)
    }
    const NB = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      RB = {
        current: null
      },
      WB = {
        current: null
      };
    let AB = 0,
      VB = 0;

    function SB(BB) {
      VB = BB, NB[0].current || RB.current || WB.current ? UB(BB) : AB = BB
    }

    function nB(BB) {
      return ((0, JB.f)(BB) - (0, JB.f)(0)) * window.innerHeight / 100
    }

    function UB(BB) {
      var OB;
      if (null === (OB = WB.current) || void 0 === OB || OB.call(WB, nB(BB)), NB[0].current) {
        const OB = `${(0,JB.f)(BB)}vh`;
        NB[0].current.style.transform = `translateX(calc(0px - ${OB}))`, NB[1].current.style.transform = `translateX(calc(0px + ${OB}))`, NB[2].current.style.transform = `translateY(calc(0px - ${OB}))`, NB[3].current.style.transform = `translateY(calc(0px + ${OB}))`
      }
      RB.current && (RB.current.style.filter = `blur(${Math.round(BB/10)}px)`)
    }

    function fB(BB) {
      let {
        custom: OB,
        touch: GB
      } = BB;
      const QB = (0, DB.i)("aimingOverlay", "none"),
        oB = "1.2vh",
        jB = "0.3vh";
      (0, YB.useEffect)((() => {
        AB && UB(AB)
      }), []);
      const yB = (0, YB.useRef)(null !== OB);
      return (0, YB.useLayoutEffect)((() => {
        var BB;
        OB ? null === (BB = WB.current) || void 0 === BB || BB.call(WB, nB(VB)) : yB.current && UB(VB);
        yB.current = null !== OB
      }), [OB]), (0, pB.jsxs)(pB.Fragment, {
        children: ["sniper" === QB && (0, pB.jsxs)("div", {
          ref: RB,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, pB.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, pB.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, pB.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, pB.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, pB.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === QB ? 0 : 1
          },
          children: [OB && (0, pB.jsx)(zB.c, {
            settings: OB,
            touch: GB,
            spreadRef: WB
          }), !OB && (0, pB.jsxs)(pB.Fragment, {
            children: [(0, pB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: oB,
                height: jB,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: NB[0]
            }), (0, pB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: oB,
                height: jB,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: NB[1]
            }), (0, pB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: jB,
                height: oB,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: NB[2]
            }), (0, pB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: jB,
                height: oB,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: NB[3]
            })]
          })]
        })]
      })
    }
  },
  34765: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => qB,
      g: () => pB
    });
    GB(34769);
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(56),
      oB = GB(34757);

    function jB(BB, OB) {
      return Math.max(1, Math.round(BB * OB))
    }

    function yB(BB, OB) {
      const GB = OB * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        YB = function(BB, OB) {
          if (BB.lines) return jB(BB.lineThickness, OB) % 2;
          if (BB.dot) return jB(BB.dotSize, OB) % 2;
          return JB(BB, OB) % 2
        }(BB, OB),
        DB = MB(BB.lineThickness * GB, YB),
        QB = jB(BB.lineLength, GB),
        oB = Math.round(BB.gap * GB),
        yB = BB.outline > 0 ? jB(BB.outline, GB) : 0,
        zB = [];
      if (BB.lines && (zB.push({
          x: DB + oB,
          y: 0,
          w: QB,
          h: DB,
          arm: "right"
        }), zB.push({
          x: -oB - QB,
          y: 0,
          w: QB,
          h: DB,
          arm: "left"
        }), zB.push({
          x: 0,
          y: DB + oB,
          w: DB,
          h: QB,
          arm: "down"
        }), BB.tStyle || zB.push({
          x: 0,
          y: -oB - QB,
          w: DB,
          h: QB,
          arm: "up"
        }), 0 === oB && zB.push({
          x: 0,
          y: 0,
          w: DB,
          h: DB
        })), BB.dot) {
        const OB = MB(BB.dotSize * GB, YB),
          QB = BB.lines && 0 === oB && BB.dotSize > BB.lineThickness ? Math.max(OB, DB + 2) : OB,
          jB = (DB - QB) / 2;
        zB.push({
          x: jB,
          y: jB,
          w: QB,
          h: QB
        })
      }
      const lB = zB.map((BB => ({
        ...BB,
        x: BB.x - yB,
        y: BB.y - yB,
        w: BB.w + 2 * yB,
        h: BB.h + 2 * yB
      })));
      let pB = null,
        qB = null;
      if (BB.circle) {
        const OB = jB(BB.circleThickness, GB),
          QB = function(BB, OB) {
            return BB + (BB % 2 === OB ? 0 : 1)
          }(JB(BB, GB), YB),
          oB = (DB - QB) / 2;
        pB = PB(oB, QB, OB), yB > 0 && (qB = PB(oB - yB, QB + 2 * yB, OB + 2 * yB))
      }
      return {
        cell: DB,
        fills: zB,
        outlines: yB > 0 ? lB : [],
        ring: pB,
        ringOutline: qB
      }
    }

    function JB(BB, OB) {
      return Math.round(BB.circleRadius * OB * 2 + jB(BB.circleThickness, OB))
    }

    function MB(BB, OB) {
      return Math.max(2 - OB, 2 * Math.round((BB - OB) / 2) + OB)
    }

    function PB(BB, OB, GB) {
      const YB = 2 * GB >= OB - 1;
      return {
        x: BB,
        y: BB,
        size: OB,
        border: Math.min(GB, Math.floor(OB / 2)),
        filled: YB
      }
    }
    var zB = GB(1282);
    const lB = 1.4;

    function pB(BB, OB) {
      return BB && OB ? `scale(${lB})` : "scale(1)"
    }

    function qB(BB) {
      return "classic" === BB.settings.style ? (0, zB.jsx)(RB, {
        ...BB
      }) : (0, zB.jsx)(fB, {
        ...BB
      })
    }
    const ZB = .125;

    function NB(BB, OB) {
      const GB = {};
      if (BB.color !== oB.d.color && (GB.color = (0, oB.l)(BB.color)), BB.opacity !== oB.d.opacity && (GB.opacity = BB.opacity / 100), BB.outline !== oB.d.outline || BB.outlineColor !== oB.d.outlineColor) {
        const OB = BB.outline,
          YB = (0, oB.l)(BB.outlineColor);
        GB.textShadow = OB > 0 ? `-${OB}px 0 ${YB}, 0 ${OB}px ${YB}, ${OB}px 0 ${YB}, 0 -${OB}px ${YB}` : "none"
      }
      if (BB.size !== oB.d.size) {
        const YB = BB.size / 100;
        GB.fontSize = OB ? `calc(max(1.3rem, 18px) * ${YB})` : `calc(1.3rem * ${YB})`, GB.marginTop = `-${ZB}em`, GB.transformOrigin = `50% calc(50% + ${ZB}em)`
      }
      return GB
    }

    function RB(BB) {
      let {
        settings: OB,
        touch: GB,
        inPreview: YB,
        inEditor: QB,
        pressed: oB = !1,
        pressRef: jB
      } = BB;
      return (0, zB.jsx)("div", {
        className: DB()("Crosshair", {
          Touch: GB,
          CrosshairInPreview: YB,
          CrosshairInEditor: QB || YB
        }),
        ref: jB,
        style: {
          transform: pB(oB, OB.growOnClick),
          ...NB(OB, GB)
        },
        children: "+"
      })
    }

    function WB(BB, OB) {
      return BB / OB + "px"
    }

    function AB(BB, OB, GB, YB) {
      return {
        ...nB(BB, OB, GB),
        width: WB(BB.w, GB),
        height: WB(BB.h, GB),
        background: YB
      }
    }

    function VB(BB, OB, GB) {
      return {
        left: WB(BB.x, OB),
        top: WB(BB.y, OB),
        width: WB(BB.size, OB),
        height: WB(BB.size, OB),
        borderWidth: WB(BB.border, OB),
        borderColor: GB,
        background: BB.filled ? GB : void 0
      }
    }
    const SB = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function nB(BB, OB, GB) {
      const [YB, DB] = BB.arm ? SB[BB.arm] : [0, 0], QB = Math.round(OB * GB);
      return {
        left: WB(BB.x + YB * QB, GB),
        top: WB(BB.y + DB * QB, GB)
      }
    }

    function UB(BB) {
      return BB.arm ? {
        "data-arm": BB.arm,
        "data-x": BB.x,
        "data-y": BB.y
      } : {}
    }

    function fB(BB) {
      let {
        settings: OB,
        inPreview: GB,
        inEditor: YB,
        pressed: jB = !1,
        spread: JB,
        spreadRef: MB
      } = BB;
      const PB = (0, QB.useRef)(null),
        {
          box: pB,
          dpr: qB
        } = function(BB) {
          const [OB, GB] = (0, QB.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, QB.useLayoutEffect)((() => {
            const OB = BB.current;
            if (!OB) return;
            const YB = () => {
              const BB = OB.getBoundingClientRect(),
                YB = window.devicePixelRatio || 1;
              GB((OB => OB.dpr === YB && OB.box.left === BB.left && OB.box.top === BB.top && OB.box.width === BB.width && OB.box.height === BB.height ? OB : {
                box: {
                  left: BB.left,
                  top: BB.top,
                  width: BB.width,
                  height: BB.height
                },
                dpr: YB
              }))
            };
            YB();
            const DB = new ResizeObserver(YB);
            return DB.observe(OB), window.addEventListener("resize", YB), window.addEventListener("scroll", YB, !0), () => {
              DB.disconnect(), window.removeEventListener("resize", YB), window.removeEventListener("scroll", YB, !0)
            }
          }), [BB]), OB
        }(PB),
        ZB = (0, QB.useRef)(qB);
      ZB.current = qB;
      const NB = yB(OB, qB, jB && OB.growOnClick ? lB : 1),
        RB = function(BB, OB, GB) {
          const YB = Math.round((BB.left + BB.width / 2) * GB - OB / 2),
            DB = Math.round((BB.top + BB.height / 2) * GB - OB / 2);
          return {
            x: YB / GB - BB.left,
            y: DB / GB - BB.top
          }
        }(pB, NB.cell, qB),
        WB = (0, oB.l)(OB.color),
        SB = (0, oB.l)(OB.outlineColor),
        fB = (0, QB.useRef)(0);
      (0, QB.useLayoutEffect)((() => {
        if (MB) return MB.current = BB => {
          var OB;
          fB.current = BB, null === (OB = PB.current) || void 0 === OB || OB.querySelectorAll("[data-arm]").forEach((OB => {
            Object.assign(OB.style, nB(function(BB) {
              return {
                x: Number(BB.dataset.x),
                y: Number(BB.dataset.y),
                arm: BB.dataset.arm
              }
            }(OB), BB, ZB.current))
          }))
        }, () => {
          MB.current = null
        }
      }), [MB]);
      const kB = null !== JB && void 0 !== JB ? JB : fB.current;
      return (0, zB.jsx)("div", {
        ref: PB,
        className: DB()("CrosshairShapes", {
          CrosshairInPreview: GB,
          CrosshairInEditor: YB || GB,
          CrosshairSpreads: void 0 !== MB
        }),
        children: (0, zB.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: RB.x,
            top: RB.y,
            opacity: OB.opacity / 100
          },
          children: (0, zB.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [NB.ringOutline && (0, zB.jsx)("div", {
              className: "CrosshairRing",
              style: VB(NB.ringOutline, qB, SB)
            }), NB.outlines.map(((BB, OB) => (0, zB.jsx)("div", {
              className: "CrosshairPart",
              ...UB(BB),
              style: AB(BB, kB, qB, SB)
            }, `o${OB}`))), NB.ring && (0, zB.jsx)("div", {
              className: "CrosshairRing",
              style: VB(NB.ring, qB, WB)
            }), NB.fills.map(((BB, OB) => (0, zB.jsx)("div", {
              className: "CrosshairPart",
              ...UB(BB),
              style: AB(BB, kB, qB, WB)
            }, `f${OB}`)))]
          })
        })
      })
    }
  },
  34773: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB,
      d: () => ZB,
      g: () => qB
    });
    var YB = GB(34757);
    const DB = "XH1-",
      QB = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      oB = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      jB = ["color", "outlineColor"],
      yB = 1 + 3 * jB.length + oB.length + 1,
      JB = Math.ceil(8 * yB / Math.log2(62)),
      MB = DB.length + JB;

    function PB(BB) {
      let OB = 90;
      for (const GB of BB) OB = 31 * OB + GB & 255;
      return OB
    }
    const zB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      lB = BigInt(zB.length);

    function pB(BB, OB) {
      let GB = 0n;
      for (const DB of BB) {
        const BB = zB.indexOf(DB);
        if (BB < 0) return null;
        GB = GB * lB + BigInt(BB)
      }
      if (GB >> BigInt(8 * OB) !== 0n) return null;
      const YB = [];
      for (let DB = 0; DB < OB; DB++) YB.unshift(Number(0xffn & GB)), GB >>= 8n;
      return YB
    }

    function qB(BB) {
      let OB = "shapes" === BB.style ? 1 : 0;
      QB.forEach(((GB, YB) => {
        BB[GB] && (OB |= 1 << YB + 1)
      }));
      const GB = [OB];
      for (const DB of jB) {
        const OB = (0, YB.h)(DB, BB[DB]);
        GB.push(OB >> 16 & 255, OB >> 8 & 255, 255 & OB)
      }
      for (const DB of oB) {
        const {
          min: OB,
          step: QB
        } = YB.c[DB];
        GB.push(Math.round(((0, YB.h)(DB, BB[DB]) - OB) / QB))
      }
      return GB.push(PB(GB)), DB + function(BB, OB) {
        let GB = 0n;
        for (const DB of BB) GB = GB << 8n | BigInt(DB);
        let YB = "";
        for (let DB = 0; DB < OB; DB++) YB = zB[Number(GB % lB)] + YB, GB /= lB;
        return YB
      }(GB, JB)
    }

    function ZB(BB) {
      for (const OB of BB.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${JB}})`, "gi"))) {
        const BB = NB(pB(OB[1], yB));
        if (BB) return BB
      }
      return null
    }

    function NB(BB) {
      if (!BB || BB.length !== yB || PB(BB.slice(0, -1)) !== BB[BB.length - 1]) return null;
      const OB = BB[0],
        GB = {
          ...YB.d,
          style: 1 & OB ? "shapes" : "classic"
        };
      QB.forEach(((BB, YB) => {
        GB[BB] = 0 !== (OB & 1 << YB + 1)
      }));
      let DB = 1;
      for (const YB of jB) GB[YB] = BB[DB] << 16 | BB[DB + 1] << 8 | BB[DB + 2], DB += 3;
      for (const QB of oB) {
        const {
          min: OB,
          step: oB
        } = YB.c[QB];
        GB[QB] = (0, YB.h)(QB, OB + BB[DB] * oB), DB++
      }
      return GB
    }
  },
  34757: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB,
      d: () => DB,
      h: () => QB,
      l: () => JB,
      p: () => yB,
      t: () => MB,
      v: () => jB,
      w: () => oB
    });
    const YB = {
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
      DB = Object.freeze({
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

    function QB(BB, OB) {
      var GB;
      const {
        min: QB,
        max: oB,
        step: jB
      } = YB[BB];
      if (!Number.isFinite(OB)) return DB[BB];
      const yB = (null !== (GB = String(jB).split(".")[1]) && void 0 !== GB ? GB : "").length,
        JB = Number((Math.round(OB / jB) * jB).toFixed(yB));
      return Math.min(oB, Math.max(QB, JB))
    }

    function oB(BB, OB, GB) {
      const YB = "number" === typeof GB ? QB(OB, GB) : GB;
      return {
        ...BB,
        [OB]: YB
      }
    }

    function jB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(DB).every((YB => GB.includes(YB) || BB[YB] === OB[YB]))
    }

    function yB(BB) {
      return jB(BB, DB)
    }

    function JB(BB) {
      return `#${BB.toString(16).padStart(6,"0")}`
    }

    function MB(BB) {
      const OB = /^#?([0-9a-f]{6})$/i.exec(BB.trim());
      return OB ? parseInt(OB[1], 16) : null
    }
  },
  34777: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      f: () => zB
    });
    var YB = GB(56),
      DB = GB(31),
      QB = GB(34773),
      oB = GB(34757);
    const jB = "crosshairCode";
    let yB = null;
    const JB = new Set;

    function MB() {
      if (null === yB) {
        var BB;
        const OB = DB.g.getItem(jB);
        yB = null !== (BB = "string" === typeof OB ? (0, QB.d)(OB) : null) && void 0 !== BB ? BB : oB.d
      }
      return yB
    }

    function PB(BB) {
      yB = BB, (0, oB.p)(BB) ? DB.g.removeItem(jB) : DB.g.setItem(jB, (0, QB.g)(BB));
      for (const OB of JB) OB()
    }

    function zB() {
      const [BB, OB] = (0, YB.useState)(MB);
      return (0, YB.useEffect)((() => {
        const BB = () => {
          OB(MB())
        };
        return BB(), GB = BB, JB.add(GB), () => {
          JB.delete(GB)
        };
        var GB
      }), []), BB
    }
  },
  37452: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      d: () => yB,
      g: () => oB
    });
    var YB = GB(641),
      DB = GB(3088);

    function QB(BB) {
      return BB === (0, DB.g)().QGB ? (0, DB.g)().EX : BB
    }

    function oB(BB) {
      return !(0, YB.Q)(BB) && QB(BB) === (0, DB.g)().EX
    }
    const jB = "gravity";

    function yB() {
      return (0, DB.g)().physics[jB][1]
    }
  },
  37434: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => nB
    });
    var YB = GB(37436),
      DB = GB(192),
      QB = GB(5353),
      oB = GB(37443),
      jB = GB(37113),
      yB = GB(37490),
      JB = GB(37452),
      MB = GB(363),
      PB = GB.n(MB),
      zB = GB(3088),
      lB = GB(37486),
      pB = GB(25),
      qB = GB(16),
      ZB = GB(37461),
      NB = GB(37466),
      RB = GB(37475),
      WB = GB(37477);
    const AB = new Set(["note"]);
    const VB = {
      stop: () => VB,
      fade: () => VB,
      rate: () => VB,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => VB,
      setPannerAttr: () => VB,
      setPosition: () => VB
    };
    class SB {
      constructor(BB) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new yB.i, this._howl = (0, jB.countDecodesAs)(new QB.Howl({
          src: [...(0, YB.t)(BB).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = this._howl.play(oB.d);
        BB && this._howl.loop(!0, OB);
        let GB = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), OB);
        const YB = {
          stop: () => {
            var BB;
            return null === (BB = this.liveHowl()) || void 0 === BB || BB.stop(OB), YB
          },
          fade: (BB, GB, DB) => {
            var QB;
            return null === (QB = this.liveHowl()) || void 0 === QB || QB.fade(BB, GB, DB, OB), YB
          },
          rate: BB => {
            var GB;
            return null === (GB = this.liveHowl()) || void 0 === GB || GB.rate(BB, OB), YB
          },
          stopsAtOnce: () => this._howl.playing(OB) && !this._howl._playLock,
          isAlive: () => {
            const BB = this._howl._soundById(OB);
            return !this._loadFailed && !!BB && !BB._ended
          },
          getDurationMs: () => this._howl._soundById(OB) ? 1e3 * this._howl.duration(OB) / this._howl.rate(OB) : 0,
          getVolume: () => GB * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => GB,
          setRelativeVolume: BB => {
            var DB;
            if (BB > 1) throw new Error("Volume should be <= 1");
            return GB = qB.c.get("soundOnFromAd") ? BB : 0, null === (DB = this.liveHowl()) || void 0 === DB || DB.volume(Math.min(1, GB * this._volumeMultiplier.getTotalMultipliedVal()), OB), YB
          },
          setPannerAttr: BB => {
            let {
              coneInnerAngle: GB,
              coneOuterAngle: DB = 360,
              coneOuterGain: QB,
              distanceModel: oB,
              maxDistance: jB,
              panningModel: yB,
              refDistance: JB,
              rolloffFactor: MB
            } = BB;
            return this._setPannerAttr({
              id: OB,
              coneInnerAngle: GB,
              coneOuterAngle: DB,
              coneOuterGain: QB,
              distanceModel: oB,
              maxDistance: jB,
              panningModel: yB,
              refDistance: JB,
              rolloffFactor: MB
            }), YB
          },
          setPosition: BB => {
            var GB;
            return null === (GB = this.liveHowl()) || void 0 === GB || GB.pos(BB[2], BB[1], BB[0], OB), YB
          }
        };
        return YB
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, oB.e)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(BB) {
        this._volumeMultiplier.setMultiplierType("globalVolume", BB), this._howl.volume(BB)
      }
      _setPannerAttr(BB) {
        let {
          id: OB,
          coneInnerAngle: GB = 360,
          coneOuterAngle: YB = 360,
          coneOuterGain: DB = 0,
          distanceModel: QB = "inverse",
          maxDistance: oB = 1e3,
          panningModel: jB = "HRTF",
          refDistance: yB = lB.g,
          rolloffFactor: JB = 1
        } = BB;
        const MB = this.liveHowl();
        if (null === MB) return;
        MB.pannerAttr({
          coneOuterAngle: YB
        }, OB);
        const PB = {
          coneInnerAngle: GB,
          coneOuterAngle: YB,
          coneOuterGain: DB,
          distanceModel: QB,
          maxDistance: oB,
          panningModel: jB,
          refDistance: yB,
          rolloffFactor: JB
        };
        MB.pannerAttr(PB, OB)
      }
    }
    const nB = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new ZB.e, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, pB.o.subscribe("appManagerUpdated|soundVolume", (BB => {
          const OB = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const GB of OB) GB.setGlobalVolume(BB)
        }))
      }
      play(BB, OB) {
        var GB;
        let QB, oB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (GB = (0, zB.g)()) || void 0 === GB ? void 0 : GB.EX,
          jB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lB.f,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lB.g,
          MB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var pB;
        (0, zB.g)() ? QB = !!Array.isArray(oB) || (0, JB.b)(oB) !== (null === (pB = (0, zB.g)()) || void 0 === pB ? void 0 : pB.EX): QB = !1;
        const qB = (0, YB.n)(BB),
          NB = this.loadSound(QB ? this.spatialSounds : this.stereoSounds, BB);
        if (!QB) {
          const BB = NB.play(MB);
          return BB.setRelativeVolume(OB), BB
        }
        const RB = (0, zB.g)(),
          WB = Array.isArray(oB) ? oB : RB.DW.pR(oB),
          SB = RB.DW.pR(RB.EX);
        if (!WB || PB().sqrDist(WB, SB) > jB * jB) return VB;
        let nB;
        if (!MB) {
          if (!this.spatialVoices.admit({
              group: AB.has(qB) ? null : (0, ZB.j)(BB),
              loudness: (0, ZB.f)(OB, PB().IM(WB, SB), yB),
              startMs: performance.now(),
              getDurationMs: () => {
                var BB, OB;
                return null !== (BB = null === (OB = nB) || void 0 === OB ? void 0 : OB.getDurationMs()) && void 0 !== BB ? BB : 0
              },
              isAlive: () => {
                var BB, OB;
                return null !== (BB = null === (OB = nB) || void 0 === OB ? void 0 : OB.isAlive()) && void 0 !== BB && BB
              },
              canStop: () => {
                var BB, OB;
                return null !== (BB = null === (OB = nB) || void 0 === OB ? void 0 : OB.stopsAtOnce()) && void 0 !== BB && BB
              },
              stop: () => {
                var BB;
                null === (BB = nB) || void 0 === BB || BB.stop()
              }
            })) return VB
        }
        return nB = NB.play(MB), nB.setRelativeVolume(OB), nB.setPannerAttr({
          refDistance: yB
        }), nB.setPosition([WB[0], WB[1] + DB.f.xZ * DB.f.playerEyeToHeightRatio, WB[2]]), nB
      }
      preload(BB) {
        const OB = (0, YB.q)(BB) ? [BB] : (0, YB.w)(BB);
        if (0 === OB.length) throw new Error(`Invalid sound name ${BB} (no sound has it or starts with it)`);
        for (const GB of OB) this.loadSound(this.stereoSounds, GB)
      }
      preloadAtIdle(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WB.c;
        const GB = BB.filter((BB => !this.idlePreloads.has(BB)));
        for (const DB of GB) this.idlePreloads.add(DB);
        const YB = this.idlePreloadGeneration;
        (0, RB.b)(GB, {
          ...OB,
          rB: () => YB !== this.idlePreloadGeneration,
          fetchFile: BB => {
            this.idlePreloads.delete(BB);
            try {
              return this.preload(BB), Promise.resolve()
            } catch (OB) {
              return Promise.reject(OB)
            }
          }
        })
      }
      loadSound(BB, OB) {
        const GB = BB[OB];
        if (GB) return GB;
        const DB = this.makeSound(BB, OB);
        for (const oB of null !== (QB = (0, YB.r)(OB)) && void 0 !== QB ? QB : []) {
          var QB;
          BB[oB] || this.makeSound(BB, oB)
        }
        return DB
      }
      makeSound(BB, OB) {
        (0, WB.e)(OB);
        const GB = new SB(OB);
        return GB.setGlobalVolume(qB.c.get("soundVolume")), BB[OB] = GB, GB
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const BB of [this.stereoSounds, this.spatialSounds])
          for (const [OB, GB] of Object.entries(BB)) !NB.b.has((0, YB.n)(OB)) && GB.loaded() && (GB.unloadOnceIdle(), delete BB[OB])
      }
    }
  },
  37533: (BB, OB, GB) => {
    function YB(BB, OB) {
      var GB, YB, DB, QB, oB, jB, yB, JB;
      return BB.name === OB.name && ((null === (GB = BB.attributes) || void 0 === GB || null === (YB = GB.customAttributes) || void 0 === YB ? void 0 : YB.stackKey) === (null === (DB = OB.attributes) || void 0 === DB || null === (QB = DB.customAttributes) || void 0 === QB ? void 0 : QB.stackKey) && (!0 !== (null === (oB = BB.attributes) || void 0 === oB || null === (jB = oB.customAttributes) || void 0 === jB ? void 0 : jB.unstackable) && !0 !== (null === (yB = OB.attributes) || void 0 === yB || null === (JB = yB.customAttributes) || void 0 === JB ? void 0 : JB.unstackable)))
    }
    GB.d(OB, {
      e: () => YB
    })
  },
  37633: (BB, OB, GB) => {
    function YB(BB) {
      return BB.includes("Leaf Bed")
    }

    function DB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !YB(BB)
    }

    function QB(BB) {
      return BB.includes(" Strongbed")
    }

    function oB(BB) {
      return YB(BB) || DB(BB) || QB(BB)
    }
    GB.d(OB, {
      b: () => oB,
      d: () => YB,
      f: () => QB,
      i: () => DB
    })
  },
  37627: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB
    });
    var YB = GB(37633),
      DB = GB(9927);
    const QB = [],
      oB = [],
      jB = [],
      yB = [];
    for (const MB of Object.keys(DB.n))(0, YB.d)(MB) ? QB.push(MB) : (0, YB.i)(MB) && oB.push(MB), (0, YB.f)(MB) && jB.push(MB), (MB.includes(" Bed Head") || MB.includes(" Strongbed Head")) && yB.push(MB);
    const JB = {
      leafBeds: QB,
      woolBeds: oB,
      strongBeds: jB,
      beds: [...QB, ...oB, ...jB],
      bedHeads: yB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  34769: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);