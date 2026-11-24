export const id = 121;
export const ids = [121];
export const modules = {
  36694: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => mB,
      f: () => SB
    });
    zB(34219);
    var QB = zB(62),
      nB = zB(1471),
      dB = zB(1982),
      IB = zB(2025),
      NB = zB(28),
      uB = zB(2516),
      UB = zB(36699),
      aB = zB(36703),
      pB = zB(34202),
      rB = zB(34212),
      sB = zB(34229),
      JB = zB(1148);
    const mB = (0, QB.memo)((function() {
      var BB;
      const {
        isTouchScreen: jB,
        clientEscMenuOptions: zB,
        scriptedCameraFacing: dB,
        crosshairShownOverride: mB,
        crosshairGameView: kB
      } = (0, NB.m)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), GB = (0, uB.i)("gunshotOrigin"), LB = (0, QB.useRef)(null), gB = (0, QB.useRef)(!1), [tB, MB] = (0, QB.useState)(yB);
      (0, nB.f)("cameraZoomSet", MB), (0, QB.useEffect)((() => {
        MB(yB())
      }), []);
      const EB = (0, IB.k)("heldItemAim"),
        qB = EB.gun,
        fB = (0, sB.e)(),
        oB = (0, QB.useRef)(fB);
      oB.current = fB;
      const [HB, DB] = (0, QB.useState)(!1);
      (0, QB.useEffect)((() => (0, aB.e)("crosshairAccuracy", SB)), []), (0, nB.f)("mouseState", (BB => {
        let {
          isDown: jB
        } = BB;
        gB.current = jB, LB.current && (LB.current.style.transform = (0, rB.d)(jB, oB.current.growOnClick)), "shapes" === oB.current.style && DB(jB)
      }));
      const FB = (0, pB.d)(jB, zB.touchActionButtons);
      return (null !== (BB = (0, UB.e)(kB, mB)) && void 0 !== BB ? BB : (0, UB.l)(EB, tB > 1, FB, GB)) ? "movement" === dB || "cursor" === dB ? null : (0, JB.jsxs)(JB.Fragment, {
        children: [qB && (0, JB.jsx)(iB, {
          custom: fB.forGuns && "shapes" === fB.style ? fB : null,
          touch: jB
        }), !qB && (0, JB.jsx)(rB.b, {
          settings: fB,
          touch: jB,
          pressRef: LB,
          pressed: "shapes" === fB.style ? HB : gB.current
        })]
      }) : null
    }));

    function yB() {
      return dB.gameBridge.lookup("cameraZoom", null)
    }
    const kB = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      GB = {
        current: null
      },
      LB = {
        current: null
      };
    let gB = 0,
      tB = 0;

    function SB(BB) {
      tB = BB, kB[0].current || GB.current || LB.current ? EB(BB) : gB = BB
    }

    function MB(BB) {
      return ((0, UB.h)(BB) - (0, UB.h)(0)) * window.innerHeight / 100
    }

    function EB(BB) {
      var jB;
      if (null === (jB = LB.current) || void 0 === jB || jB.call(LB, MB(BB)), kB[0].current) {
        const jB = `${(0,UB.h)(BB)}vh`;
        kB[0].current.style.transform = `translateX(calc(0px - ${jB}))`, kB[1].current.style.transform = `translateX(calc(0px + ${jB}))`, kB[2].current.style.transform = `translateY(calc(0px - ${jB}))`, kB[3].current.style.transform = `translateY(calc(0px + ${jB}))`
      }
      GB.current && (GB.current.style.filter = `blur(${Math.round(BB/10)}px)`)
    }

    function iB(BB) {
      let {
        custom: jB,
        touch: zB
      } = BB;
      const dB = (0, nB.h)("aimingOverlay", "none"),
        IB = "1.2vh",
        NB = "0.3vh";
      (0, QB.useEffect)((() => {
        gB && EB(gB)
      }), []);
      const uB = (0, QB.useRef)(null !== jB);
      return (0, QB.useLayoutEffect)((() => {
        var BB;
        jB ? null === (BB = LB.current) || void 0 === BB || BB.call(LB, MB(tB)) : uB.current && EB(tB);
        uB.current = null !== jB
      }), [jB]), (0, JB.jsxs)(JB.Fragment, {
        children: ["sniper" === dB && (0, JB.jsxs)("div", {
          ref: GB,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, JB.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, JB.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, JB.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, JB.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, JB.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === dB ? 0 : 1
          },
          children: [jB && (0, JB.jsx)(rB.b, {
            settings: jB,
            touch: zB,
            spreadRef: LB
          }), !jB && (0, JB.jsxs)(JB.Fragment, {
            children: [(0, JB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: IB,
                height: NB,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: kB[0]
            }), (0, JB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: IB,
                height: NB,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: kB[1]
            }), (0, JB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: NB,
                height: IB,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: kB[2]
            }), (0, JB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: NB,
                height: IB,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: kB[3]
            })]
          })]
        })]
      })
    }
  },
  34212: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => mB,
      d: () => JB
    });
    zB(34219);
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(62),
      IB = zB(34208);

    function NB(BB, jB) {
      return Math.max(1, Math.round(BB * jB))
    }

    function uB(BB, jB) {
      const zB = jB * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        QB = function(BB, jB) {
          if (BB.lines) return NB(BB.lineThickness, jB) % 2;
          if (BB.dot) return NB(BB.dotSize, jB) % 2;
          return UB(BB, jB) % 2
        }(BB, jB),
        nB = aB(BB.lineThickness * zB, QB),
        dB = NB(BB.lineLength, zB),
        IB = Math.round(BB.gap * zB),
        uB = BB.outline > 0 ? NB(BB.outline, zB) : 0,
        rB = [];
      if (BB.lines && (rB.push({
          x: nB + IB,
          y: 0,
          w: dB,
          h: nB,
          arm: "right"
        }), rB.push({
          x: -IB - dB,
          y: 0,
          w: dB,
          h: nB,
          arm: "left"
        }), rB.push({
          x: 0,
          y: nB + IB,
          w: nB,
          h: dB,
          arm: "down"
        }), BB.tStyle || rB.push({
          x: 0,
          y: -IB - dB,
          w: nB,
          h: dB,
          arm: "up"
        }), 0 === IB && rB.push({
          x: 0,
          y: 0,
          w: nB,
          h: nB
        })), BB.dot) {
        const jB = aB(BB.dotSize * zB, QB),
          dB = BB.lines && 0 === IB && BB.dotSize > BB.lineThickness ? Math.max(jB, nB + 2) : jB,
          NB = (nB - dB) / 2;
        rB.push({
          x: NB,
          y: NB,
          w: dB,
          h: dB
        })
      }
      const sB = rB.map((BB => ({
        ...BB,
        x: BB.x - uB,
        y: BB.y - uB,
        w: BB.w + 2 * uB,
        h: BB.h + 2 * uB
      })));
      let JB = null,
        mB = null;
      if (BB.circle) {
        const jB = NB(BB.circleThickness, zB),
          dB = function(BB, jB) {
            return BB + (BB % 2 === jB ? 0 : 1)
          }(UB(BB, zB), QB),
          IB = (nB - dB) / 2;
        JB = pB(IB, dB, jB), uB > 0 && (mB = pB(IB - uB, dB + 2 * uB, jB + 2 * uB))
      }
      return {
        cell: nB,
        fills: rB,
        outlines: uB > 0 ? sB : [],
        ring: JB,
        ringOutline: mB
      }
    }

    function UB(BB, jB) {
      return Math.round(BB.circleRadius * jB * 2 + NB(BB.circleThickness, jB))
    }

    function aB(BB, jB) {
      return Math.max(2 - jB, 2 * Math.round((BB - jB) / 2) + jB)
    }

    function pB(BB, jB, zB) {
      const QB = 2 * zB >= jB - 1;
      return {
        x: BB,
        y: BB,
        size: jB,
        border: Math.min(zB, Math.floor(jB / 2)),
        filled: QB
      }
    }
    var rB = zB(1148);
    const sB = 1.4;

    function JB(BB, jB) {
      return BB && jB ? `scale(${sB})` : "scale(1)"
    }

    function mB(BB) {
      return "classic" === BB.settings.style ? (0, rB.jsx)(GB, {
        ...BB
      }) : (0, rB.jsx)(iB, {
        ...BB
      })
    }
    const yB = .125;

    function kB(BB, jB) {
      const zB = {};
      if (BB.color !== IB.g.color && (zB.color = (0, IB.m)(BB.color)), BB.opacity !== IB.g.opacity && (zB.opacity = BB.opacity / 100), BB.outline !== IB.g.outline || BB.outlineColor !== IB.g.outlineColor) {
        const jB = BB.outline,
          QB = (0, IB.m)(BB.outlineColor);
        zB.textShadow = jB > 0 ? `-${jB}px 0 ${QB}, 0 ${jB}px ${QB}, ${jB}px 0 ${QB}, 0 -${jB}px ${QB}` : "none"
      }
      if (BB.size !== IB.g.size) {
        const QB = BB.size / 100;
        zB.fontSize = jB ? `calc(max(1.3rem, 18px) * ${QB})` : `calc(1.3rem * ${QB})`, zB.marginTop = `-${yB}em`, zB.transformOrigin = `50% calc(50% + ${yB}em)`
      }
      return zB
    }

    function GB(BB) {
      let {
        settings: jB,
        touch: zB,
        inPreview: QB,
        inEditor: dB,
        pressed: IB = !1,
        pressRef: NB
      } = BB;
      return (0, rB.jsx)("div", {
        className: nB()("Crosshair", {
          Touch: zB,
          CrosshairInPreview: QB,
          CrosshairInEditor: dB || QB
        }),
        ref: NB,
        style: {
          transform: JB(IB, jB.growOnClick),
          ...kB(jB, zB)
        },
        children: "+"
      })
    }

    function LB(BB, jB) {
      return BB / jB + "px"
    }

    function gB(BB, jB, zB, QB) {
      return {
        ...MB(BB, jB, zB),
        width: LB(BB.w, zB),
        height: LB(BB.h, zB),
        background: QB
      }
    }

    function tB(BB, jB, zB) {
      return {
        left: LB(BB.x, jB),
        top: LB(BB.y, jB),
        width: LB(BB.size, jB),
        height: LB(BB.size, jB),
        borderWidth: LB(BB.border, jB),
        borderColor: zB,
        background: BB.filled ? zB : void 0
      }
    }
    const SB = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function MB(BB, jB, zB) {
      const [QB, nB] = BB.arm ? SB[BB.arm] : [0, 0], dB = Math.round(jB * zB);
      return {
        left: LB(BB.x + QB * dB, zB),
        top: LB(BB.y + nB * dB, zB)
      }
    }

    function EB(BB) {
      return BB.arm ? {
        "data-arm": BB.arm,
        "data-x": BB.x,
        "data-y": BB.y
      } : {}
    }

    function iB(BB) {
      let {
        settings: jB,
        inPreview: zB,
        inEditor: QB,
        pressed: NB = !1,
        spread: UB,
        spreadRef: aB
      } = BB;
      const pB = (0, dB.useRef)(null),
        {
          box: JB,
          dpr: mB
        } = function(BB) {
          const [jB, zB] = (0, dB.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, dB.useLayoutEffect)((() => {
            const jB = BB.current;
            if (!jB) return;
            const QB = () => {
              const BB = jB.getBoundingClientRect(),
                QB = window.devicePixelRatio || 1;
              zB((jB => jB.dpr === QB && jB.box.left === BB.left && jB.box.top === BB.top && jB.box.width === BB.width && jB.box.height === BB.height ? jB : {
                box: {
                  left: BB.left,
                  top: BB.top,
                  width: BB.width,
                  height: BB.height
                },
                dpr: QB
              }))
            };
            QB();
            const nB = new ResizeObserver(QB);
            return nB.observe(jB), window.addEventListener("resize", QB), window.addEventListener("scroll", QB, !0), () => {
              nB.disconnect(), window.removeEventListener("resize", QB), window.removeEventListener("scroll", QB, !0)
            }
          }), [BB]), jB
        }(pB),
        yB = (0, dB.useRef)(mB);
      yB.current = mB;
      const kB = uB(jB, mB, NB && jB.growOnClick ? sB : 1),
        GB = function(BB, jB, zB) {
          const QB = Math.round((BB.left + BB.width / 2) * zB - jB / 2),
            nB = Math.round((BB.top + BB.height / 2) * zB - jB / 2);
          return {
            x: QB / zB - BB.left,
            y: nB / zB - BB.top
          }
        }(JB, kB.cell, mB),
        LB = (0, IB.m)(jB.color),
        SB = (0, IB.m)(jB.outlineColor),
        iB = (0, dB.useRef)(0);
      (0, dB.useLayoutEffect)((() => {
        if (aB) return aB.current = BB => {
          var jB;
          iB.current = BB, null === (jB = pB.current) || void 0 === jB || jB.querySelectorAll("[data-arm]").forEach((jB => {
            Object.assign(jB.style, MB(function(BB) {
              return {
                x: Number(BB.dataset.x),
                y: Number(BB.dataset.y),
                arm: BB.dataset.arm
              }
            }(jB), BB, yB.current))
          }))
        }, () => {
          aB.current = null
        }
      }), [aB]);
      const qB = null !== UB && void 0 !== UB ? UB : iB.current;
      return (0, rB.jsx)("div", {
        ref: pB,
        className: nB()("CrosshairShapes", {
          CrosshairInPreview: zB,
          CrosshairInEditor: QB || zB,
          CrosshairSpreads: void 0 !== aB
        }),
        children: (0, rB.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: GB.x,
            top: GB.y,
            opacity: jB.opacity / 100
          },
          children: (0, rB.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [kB.ringOutline && (0, rB.jsx)("div", {
              className: "CrosshairRing",
              style: tB(kB.ringOutline, mB, SB)
            }), kB.outlines.map(((BB, jB) => (0, rB.jsx)("div", {
              className: "CrosshairPart",
              ...EB(BB),
              style: gB(BB, qB, mB, SB)
            }, `o${jB}`))), kB.ring && (0, rB.jsx)("div", {
              className: "CrosshairRing",
              style: tB(kB.ring, mB, LB)
            }), kB.fills.map(((BB, jB) => (0, rB.jsx)("div", {
              className: "CrosshairPart",
              ...EB(BB),
              style: gB(BB, qB, mB, LB)
            }, `f${jB}`)))]
          })
        })
      })
    }
  },
  34223: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB,
      e: () => yB,
      g: () => mB
    });
    var QB = zB(34208);
    const nB = "XH1-",
      dB = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      IB = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      NB = ["color", "outlineColor"],
      uB = 1 + 3 * NB.length + IB.length + 1,
      UB = Math.ceil(8 * uB / Math.log2(62)),
      aB = nB.length + UB;

    function pB(BB) {
      let jB = 90;
      for (const zB of BB) jB = 31 * jB + zB & 255;
      return jB
    }
    const rB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      sB = BigInt(rB.length);

    function JB(BB, jB) {
      let zB = 0n;
      for (const nB of BB) {
        const BB = rB.indexOf(nB);
        if (BB < 0) return null;
        zB = zB * sB + BigInt(BB)
      }
      if (zB >> BigInt(8 * jB) !== 0n) return null;
      const QB = [];
      for (let nB = 0; nB < jB; nB++) QB.unshift(Number(0xffn & zB)), zB >>= 8n;
      return QB
    }

    function mB(BB) {
      let jB = "shapes" === BB.style ? 1 : 0;
      dB.forEach(((zB, QB) => {
        BB[zB] && (jB |= 1 << QB + 1)
      }));
      const zB = [jB];
      for (const nB of NB) {
        const jB = (0, QB.i)(nB, BB[nB]);
        zB.push(jB >> 16 & 255, jB >> 8 & 255, 255 & jB)
      }
      for (const nB of IB) {
        const {
          min: jB,
          step: dB
        } = QB.d[nB];
        zB.push(Math.round(((0, QB.i)(nB, BB[nB]) - jB) / dB))
      }
      return zB.push(pB(zB)), nB + function(BB, jB) {
        let zB = 0n;
        for (const nB of BB) zB = zB << 8n | BigInt(nB);
        let QB = "";
        for (let nB = 0; nB < jB; nB++) QB = rB[Number(zB % sB)] + QB, zB /= sB;
        return QB
      }(zB, UB)
    }

    function yB(BB) {
      for (const jB of BB.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${UB}})`, "gi"))) {
        const BB = kB(JB(jB[1], uB));
        if (BB) return BB
      }
      return null
    }

    function kB(BB) {
      if (!BB || BB.length !== uB || pB(BB.slice(0, -1)) !== BB[BB.length - 1]) return null;
      const jB = BB[0],
        zB = {
          ...QB.g,
          style: 1 & jB ? "shapes" : "classic"
        };
      dB.forEach(((BB, QB) => {
        zB[BB] = 0 !== (jB & 1 << QB + 1)
      }));
      let nB = 1;
      for (const QB of NB) zB[QB] = BB[nB] << 16 | BB[nB + 1] << 8 | BB[nB + 2], nB += 3;
      for (const dB of IB) {
        const {
          min: jB,
          step: IB
        } = QB.d[dB];
        zB[dB] = (0, QB.i)(dB, jB + BB[nB] * IB), nB++
      }
      return zB
    }
  },
  34208: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      g: () => nB,
      i: () => dB,
      m: () => UB,
      n: () => uB,
      o: () => aB,
      p: () => NB,
      s: () => IB
    });
    const QB = {
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
      nB = Object.freeze({
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

    function dB(BB, jB) {
      var zB;
      const {
        min: dB,
        max: IB,
        step: NB
      } = QB[BB];
      if (!Number.isFinite(jB)) return nB[BB];
      const uB = (null !== (zB = String(NB).split(".")[1]) && void 0 !== zB ? zB : "").length,
        UB = Number((Math.round(jB / NB) * NB).toFixed(uB));
      return Math.min(IB, Math.max(dB, UB))
    }

    function IB(BB, jB, zB) {
      const QB = "number" === typeof zB ? dB(jB, zB) : zB;
      return {
        ...BB,
        [jB]: QB
      }
    }

    function NB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(nB).every((QB => zB.includes(QB) || BB[QB] === jB[QB]))
    }

    function uB(BB) {
      return NB(BB, nB)
    }

    function UB(BB) {
      return `#${BB.toString(16).padStart(6,"0")}`
    }

    function aB(BB) {
      const jB = /^#?([0-9a-f]{6})$/i.exec(BB.trim());
      return jB ? parseInt(jB[1], 16) : null
    }
  },
  34229: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB,
      e: () => rB
    });
    var QB = zB(62),
      nB = zB(41),
      dB = zB(34223),
      IB = zB(34208);
    const NB = "crosshairCode";
    let uB = null;
    const UB = new Set;

    function aB() {
      if (null === uB) {
        var BB;
        const jB = nB.j.getItem(NB);
        uB = null !== (BB = "string" === typeof jB ? (0, dB.e)(jB) : null) && void 0 !== BB ? BB : IB.g
      }
      return uB
    }

    function pB(BB) {
      uB = BB, (0, IB.n)(BB) ? nB.j.removeItem(NB) : nB.j.setItem(NB, (0, dB.g)(BB));
      for (const jB of UB) jB()
    }

    function rB() {
      const [BB, jB] = (0, QB.useState)(aB);
      return (0, QB.useEffect)((() => {
        const BB = () => {
          jB(aB())
        };
        return BB(), zB = BB, UB.add(zB), () => {
          UB.delete(zB)
        };
        var zB
      }), []), BB
    }
  },
  36843: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      e: () => uB,
      h: () => IB
    });
    var QB = zB(658),
      nB = zB(2863);

    function dB(BB) {
      return BB === (0, nB.g)().FBB ? (0, nB.g)().zV : BB
    }

    function IB(BB) {
      return !(0, QB.I)(BB) && dB(BB) === (0, nB.g)().zV
    }
    const NB = "gravity";

    function uB() {
      return (0, nB.g)().physics[NB][1]
    }
  },
  36828: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => MB
    });
    var QB = zB(36830),
      nB = zB(214),
      dB = zB(4950),
      IB = zB(36838),
      NB = zB(36514),
      uB = zB(36882),
      UB = zB(36843),
      aB = zB(386),
      pB = zB.n(aB),
      rB = zB(1244),
      sB = zB(2863),
      JB = zB(36873),
      mB = zB(31),
      yB = zB(28),
      kB = zB(36848),
      GB = zB(36856),
      LB = zB(36864);
    const gB = new Set(["note"]);
    const tB = {
      stop: () => tB,
      fade: () => tB,
      rate: () => tB,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => tB,
      setPannerAttr: () => tB,
      setPosition: () => tB
    };
    class SB {
      constructor(BB) {
        let jB, {
          src: zB,
          volumeScalar: nB,
          isSoundSprite: IB
        } = BB;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, IB ? (jB = (0, QB.g)(zB), this._spriteTrackSrc = jB) : jB = {
          src: rB.clientSideServerUrls.staticUrl + zB
        }, this._volumeMultiplier = new uB.j, this._volumeMultiplier.setMultiplierType("persistentScalar", nB), this._howl = (0, NB.countDecodesAs)(new dB.Howl({
          ...jB,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let BB, jB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          zB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (jB) {
          var QB;
          if (null === (QB = this._spriteTrackSrc) || void 0 === QB || !QB.sprite[jB]) throw new Error("No such sprite in your spritetrack");
          BB = this._howl.play(jB)
        } else BB = this._howl.play();
        zB && this._howl.loop(!0, BB);
        let nB = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), BB);
        const dB = {
          stop: () => {
            var jB;
            return null === (jB = this.liveHowl()) || void 0 === jB || jB.stop(BB), dB
          },
          fade: (jB, zB, QB) => {
            var nB;
            return null === (nB = this.liveHowl()) || void 0 === nB || nB.fade(jB, zB, QB, BB), dB
          },
          rate: jB => {
            var zB;
            return null === (zB = this.liveHowl()) || void 0 === zB || zB.rate(jB, BB), dB
          },
          stopsAtOnce: () => this._howl.playing(BB) && !this._howl._playLock,
          isAlive: () => {
            const jB = this._howl._soundById(BB);
            return !this._loadFailed && !!jB && !jB._ended
          },
          getDurationMs: () => this._howl._soundById(BB) ? 1e3 * this._howl.duration(BB) / this._howl.rate(BB) : 0,
          getVolume: () => nB * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => nB,
          setRelativeVolume: jB => {
            var zB;
            if (jB > 1) throw new Error("Volume should be <= 1");
            return nB = yB.c.get("soundOnFromAd") ? jB : 0, null === (zB = this.liveHowl()) || void 0 === zB || zB.volume(Math.min(1, nB * this._volumeMultiplier.getTotalMultipliedVal()), BB), dB
          },
          setPannerAttr: jB => {
            let {
              coneInnerAngle: zB,
              coneOuterAngle: QB = 360,
              coneOuterGain: nB,
              distanceModel: IB,
              maxDistance: NB,
              panningModel: uB,
              refDistance: UB,
              rolloffFactor: aB
            } = jB;
            return this._setPannerAttr({
              id: BB,
              coneInnerAngle: zB,
              coneOuterAngle: QB,
              coneOuterGain: nB,
              distanceModel: IB,
              maxDistance: NB,
              panningModel: uB,
              refDistance: UB,
              rolloffFactor: aB
            }), dB
          },
          setPosition: jB => {
            var zB;
            return null === (zB = this.liveHowl()) || void 0 === zB || zB.pos(jB[2], jB[1], jB[0], BB), dB
          }
        };
        return dB
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, IB.c)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(BB) {
        this._volumeMultiplier.setMultiplierType("globalVolume", BB), this._howl.volume(BB)
      }
      _setPannerAttr(BB) {
        let {
          id: jB,
          coneInnerAngle: zB = 360,
          coneOuterAngle: QB = 360,
          coneOuterGain: nB = 0,
          distanceModel: dB = "inverse",
          maxDistance: IB = 1e3,
          panningModel: NB = "HRTF",
          refDistance: uB = JB.k,
          rolloffFactor: UB = 1
        } = BB;
        const aB = this.liveHowl();
        if (null === aB) return;
        aB.pannerAttr({
          coneOuterAngle: QB
        }, jB);
        const pB = {
          coneInnerAngle: zB,
          coneOuterAngle: QB,
          coneOuterGain: nB,
          distanceModel: dB,
          maxDistance: IB,
          panningModel: NB,
          refDistance: uB,
          rolloffFactor: UB
        };
        aB.pannerAttr(pB, jB)
      }
    }
    const MB = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new kB.b, mB.n.subscribe("appManagerUpdated|soundVolume", (BB => {
          const jB = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const zB of jB) zB.setGlobalVolume(BB)
        }))
      }
      play(BB, jB) {
        var zB;
        let dB, IB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (zB = (0, sB.g)()) || void 0 === zB ? void 0 : zB.zV,
          NB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JB.g,
          uB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : JB.k,
          aB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var rB;
        (0, sB.g)() ? dB = !!Array.isArray(IB) || (0, UB.b)(IB) !== (null === (rB = (0, sB.g)()) || void 0 === rB ? void 0 : rB.zV): dB = !1;
        const mB = (0, QB.k)(BB),
          yB = this.loadSheet(dB ? this.spatialSheets : this.stereoSheets, mB);
        if (!dB) {
          const zB = yB.play(BB, aB);
          return zB.setRelativeVolume(jB), zB
        }
        const GB = (0, sB.g)(),
          LB = Array.isArray(IB) ? IB : GB.vG.iG(IB),
          SB = GB.vG.iG(GB.zV);
        if (!LB || pB().sqrDist(LB, SB) > NB * NB) return tB;
        let MB;
        if (!aB) {
          if (!this.spatialVoices.admit({
              group: gB.has(mB) ? null : (0, kB.g)(BB),
              loudness: (0, kB.f)(jB, pB().bI(LB, SB), uB),
              startMs: performance.now(),
              getDurationMs: () => {
                var BB, jB;
                return null !== (BB = null === (jB = MB) || void 0 === jB ? void 0 : jB.getDurationMs()) && void 0 !== BB ? BB : 0
              },
              isAlive: () => {
                var BB, jB;
                return null !== (BB = null === (jB = MB) || void 0 === jB ? void 0 : jB.isAlive()) && void 0 !== BB && BB
              },
              canStop: () => {
                var BB, jB;
                return null !== (BB = null === (jB = MB) || void 0 === jB ? void 0 : jB.stopsAtOnce()) && void 0 !== BB && BB
              },
              stop: () => {
                var BB;
                null === (BB = MB) || void 0 === BB || BB.stop()
              }
            })) return tB
        }
        return MB = yB.play(BB, aB), MB.setRelativeVolume(jB), MB.setPannerAttr({
          refDistance: uB
        }), MB.setPosition([LB[0], LB[1] + nB.e.Bk * nB.e.playerEyeToHeightRatio, LB[2]]), MB
      }
      preload(BB) {
        this.loadSheet(this.stereoSheets, (0, QB.k)(BB))
      }
      loadSheet(BB, jB) {
        let zB = BB[jB];
        return zB || ((0, LB.d)(jB), zB = new SB({
          src: jB,
          isSoundSprite: !0,
          volumeScalar: 1
        }), zB.setGlobalVolume(yB.c.get("soundVolume")), BB[jB] = zB), zB
      }
      freeSheetsAfterGame() {
        for (const BB of [this.stereoSheets, this.spatialSheets])
          for (const [jB, zB] of Object.entries(BB)) !GB.d.has(jB) && zB.loaded() && (zB.unloadOnceIdle(), delete BB[jB])
      }
    }
  },
  36920: (BB, jB, zB) => {
    function QB(BB, jB) {
      var zB, QB, nB, dB, IB, NB, uB, UB;
      return BB.name === jB.name && ((null === (zB = BB.attributes) || void 0 === zB || null === (QB = zB.customAttributes) || void 0 === QB ? void 0 : QB.stackKey) === (null === (nB = jB.attributes) || void 0 === nB || null === (dB = nB.customAttributes) || void 0 === dB ? void 0 : dB.stackKey) && (!0 !== (null === (IB = BB.attributes) || void 0 === IB || null === (NB = IB.customAttributes) || void 0 === NB ? void 0 : NB.unstackable) && !0 !== (null === (uB = jB.attributes) || void 0 === uB || null === (UB = uB.customAttributes) || void 0 === UB ? void 0 : UB.unstackable)))
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  37002: (BB, jB, zB) => {
    function QB(BB) {
      return BB.includes("Leaf Bed")
    }

    function nB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !QB(BB)
    }

    function dB(BB) {
      return BB.includes(" Strongbed")
    }

    function IB(BB) {
      return QB(BB) || nB(BB) || dB(BB)
    }
    zB.d(jB, {
      b: () => IB,
      f: () => QB,
      h: () => dB,
      i: () => nB
    })
  },
  36998: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB
    });
    var QB = zB(37002),
      nB = zB(9266);
    const dB = [],
      IB = [],
      NB = [],
      uB = [];
    for (const aB of Object.keys(nB.l))(0, QB.f)(aB) ? dB.push(aB) : (0, QB.i)(aB) && IB.push(aB), (0, QB.h)(aB) && NB.push(aB), (aB.includes(" Bed Head") || aB.includes(" Strongbed Head")) && uB.push(aB);
    const UB = {
      leafBeds: dB,
      woolBeds: IB,
      strongBeds: NB,
      beds: [...dB, ...IB, ...NB],
      bedHeads: uB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6428: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB,
      i: () => nB,
      l: () => uB,
      o: () => dB,
      r: () => UB,
      t: () => QB,
      u: () => NB
    });
    let QB = function(BB) {
        return BB[BB.DEFAULT = 0] = "DEFAULT", BB[BB.BOAT = 1] = "BOAT", BB[BB.GLIDER = 2] = "GLIDER", BB[BB.BALLOON = 3] = "BALLOON", BB[BB.SLEEPING = 4] = "SLEEPING", BB[BB.RIDING_MOB = 5] = "RIDING_MOB", BB[BB.CAR = 6] = "CAR", BB[BB.HOVERCRAFT = 7] = "HOVERCRAFT", BB
      }({}),
      nB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.OBSIDIAN = 1] = "OBSIDIAN", BB[BB.SPEED = 2] = "SPEED", BB
      }({}),
      dB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.IRON = 1] = "IRON", BB[BB.GOLD = 2] = "GOLD", BB[BB.DIAMOND = 3] = "DIAMOND", BB
      }({}),
      IB = function(BB) {
        return BB[BB.YELLOW = 0] = "YELLOW", BB[BB.WHITE = 1] = "WHITE", BB[BB.RED = 2] = "RED", BB[BB.PURPLE = 3] = "PURPLE", BB[BB.PINK = 4] = "PINK", BB[BB.ORANGE = 5] = "ORANGE", BB[BB.MAGENTA = 6] = "MAGENTA", BB[BB.LIME = 7] = "LIME", BB[BB.LIGHT_GRAY = 8] = "LIGHT_GRAY", BB[BB.LIGHT_BLUE = 9] = "LIGHT_BLUE", BB[BB.GREEN = 10] = "GREEN", BB[BB.GRAY = 11] = "GRAY", BB[BB.CYAN = 12] = "CYAN", BB[BB.BROWN = 13] = "BROWN", BB[BB.BLUE = 14] = "BLUE", BB[BB.BLACK = 15] = "BLACK", BB
      }({}),
      NB = function(BB) {
        return BB[BB.ROTATION_1 = 0] = "ROTATION_1", BB[BB.ROTATION_2 = 1] = "ROTATION_2", BB[BB.ROTATION_3 = 2] = "ROTATION_3", BB[BB.ROTATION_4 = 3] = "ROTATION_4", BB
      }({}),
      uB = function(BB) {
        return BB[BB.KART = 0] = "KART", BB[BB.OFF_ROADER = 1] = "OFF_ROADER", BB[BB.CAR = 2] = "CAR", BB[BB.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", BB[BB.ARMORED_CAR = 4] = "ARMORED_CAR", BB[BB.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", BB[BB.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", BB[BB.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", BB
      }({});
    QB.DEFAULT, QB.BOAT, nB.SPEED, QB.GLIDER, dB.DIAMOND, QB.BALLOON, IB.BLACK, QB.SLEEPING, NB.ROTATION_4, QB.RIDING_MOB, QB.CAR, uB.MOONSTONE_MINING_DRILL, QB.HOVERCRAFT;
    let UB = function(BB) {
      return BB[BB.NORMAL = 0] = "NORMAL", BB[BB.GLIDING = 1] = "GLIDING", BB[BB.FLOATING = 2] = "FLOATING", BB
    }({})
  },
  34219: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);