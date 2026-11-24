export const id = 121;
export const ids = [121];
export const modules = {
  36629: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => gB,
      h: () => QB
    });
    ZB(34158);
    var TB = ZB(63),
      JB = ZB(1507),
      oB = ZB(1995),
      GB = ZB(2054),
      vB = ZB(20),
      kB = ZB(2526),
      cB = ZB(36636),
      nB = ZB(36642),
      hB = ZB(34143),
      zB = ZB(34152),
      FB = ZB(34173),
      NB = ZB(1153);
    const gB = (0, TB.memo)((function() {
      var BB;
      const {
        isTouchScreen: IB,
        clientEscMenuOptions: ZB,
        scriptedCameraFacing: oB,
        crosshairShownOverride: gB,
        crosshairGameView: yB
      } = (0, vB.o)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), UB = (0, kB.d)("gunshotOrigin"), WB = (0, TB.useRef)(null), dB = (0, TB.useRef)(!1), [CB, sB] = (0, TB.useState)(qB);
      (0, JB.d)("cameraZoomSet", sB), (0, TB.useEffect)((() => {
        sB(qB())
      }), []);
      const wB = (0, GB.j)("heldItemAim"),
        YB = wB.gun,
        iB = (0, FB.h)(),
        pB = (0, TB.useRef)(iB);
      pB.current = iB;
      const [aB, HB] = (0, TB.useState)(!1);
      (0, TB.useEffect)((() => (0, nB.d)("crosshairAccuracy", QB)), []), (0, JB.d)("mouseState", (BB => {
        let {
          isDown: IB
        } = BB;
        dB.current = IB, WB.current && (WB.current.style.transform = (0, zB.f)(IB, pB.current.growOnClick)), "shapes" === pB.current.style && HB(IB)
      }));
      const MB = (0, hB.d)(IB, ZB.touchActionButtons);
      return (null !== (BB = (0, cB.d)(yB, gB)) && void 0 !== BB ? BB : (0, cB.g)(wB, CB > 1, MB, UB)) ? "movement" === oB || "cursor" === oB ? null : (0, NB.jsxs)(NB.Fragment, {
        children: [YB && (0, NB.jsx)(OB, {
          custom: iB.forGuns && "shapes" === iB.style ? iB : null,
          touch: IB
        }), !YB && (0, NB.jsx)(zB.b, {
          settings: iB,
          touch: IB,
          pressRef: WB,
          pressed: "shapes" === iB.style ? aB : dB.current
        })]
      }) : null
    }));

    function qB() {
      return oB.gameBridge.lookup("cameraZoom", null)
    }
    const yB = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      UB = {
        current: null
      },
      WB = {
        current: null
      };
    let dB = 0,
      CB = 0;

    function QB(BB) {
      CB = BB, yB[0].current || UB.current || WB.current ? wB(BB) : dB = BB
    }

    function sB(BB) {
      return ((0, cB.f)(BB) - (0, cB.f)(0)) * window.innerHeight / 100
    }

    function wB(BB) {
      var IB;
      if (null === (IB = WB.current) || void 0 === IB || IB.call(WB, sB(BB)), yB[0].current) {
        const IB = `${(0,cB.f)(BB)}vh`;
        yB[0].current.style.transform = `translateX(calc(0px - ${IB}))`, yB[1].current.style.transform = `translateX(calc(0px + ${IB}))`, yB[2].current.style.transform = `translateY(calc(0px - ${IB}))`, yB[3].current.style.transform = `translateY(calc(0px + ${IB}))`
      }
      UB.current && (UB.current.style.filter = `blur(${Math.round(BB/10)}px)`)
    }

    function OB(BB) {
      let {
        custom: IB,
        touch: ZB
      } = BB;
      const oB = (0, JB.h)("aimingOverlay", "none"),
        GB = "1.2vh",
        vB = "0.3vh";
      (0, TB.useEffect)((() => {
        dB && wB(dB)
      }), []);
      const kB = (0, TB.useRef)(null !== IB);
      return (0, TB.useLayoutEffect)((() => {
        var BB;
        IB ? null === (BB = WB.current) || void 0 === BB || BB.call(WB, sB(CB)) : kB.current && wB(CB);
        kB.current = null !== IB
      }), [IB]), (0, NB.jsxs)(NB.Fragment, {
        children: ["sniper" === oB && (0, NB.jsxs)("div", {
          ref: UB,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, NB.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, NB.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, NB.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, NB.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, NB.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === oB ? 0 : 1
          },
          children: [IB && (0, NB.jsx)(zB.b, {
            settings: IB,
            touch: ZB,
            spreadRef: WB
          }), !IB && (0, NB.jsxs)(NB.Fragment, {
            children: [(0, NB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: GB,
                height: vB,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: yB[0]
            }), (0, NB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: GB,
                height: vB,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: yB[1]
            }), (0, NB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: vB,
                height: GB,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: yB[2]
            }), (0, NB.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: vB,
                height: GB,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: yB[3]
            })]
          })]
        })]
      })
    }
  },
  34152: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => gB,
      f: () => NB
    });
    ZB(34158);
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(63),
      GB = ZB(34146);

    function vB(BB, IB) {
      return Math.max(1, Math.round(BB * IB))
    }

    function kB(BB, IB) {
      const ZB = IB * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        TB = function(BB, IB) {
          if (BB.lines) return vB(BB.lineThickness, IB) % 2;
          if (BB.dot) return vB(BB.dotSize, IB) % 2;
          return cB(BB, IB) % 2
        }(BB, IB),
        JB = nB(BB.lineThickness * ZB, TB),
        oB = vB(BB.lineLength, ZB),
        GB = Math.round(BB.gap * ZB),
        kB = BB.outline > 0 ? vB(BB.outline, ZB) : 0,
        zB = [];
      if (BB.lines && (zB.push({
          x: JB + GB,
          y: 0,
          w: oB,
          h: JB,
          arm: "right"
        }), zB.push({
          x: -GB - oB,
          y: 0,
          w: oB,
          h: JB,
          arm: "left"
        }), zB.push({
          x: 0,
          y: JB + GB,
          w: JB,
          h: oB,
          arm: "down"
        }), BB.tStyle || zB.push({
          x: 0,
          y: -GB - oB,
          w: JB,
          h: oB,
          arm: "up"
        }), 0 === GB && zB.push({
          x: 0,
          y: 0,
          w: JB,
          h: JB
        })), BB.dot) {
        const IB = nB(BB.dotSize * ZB, TB),
          oB = BB.lines && 0 === GB && BB.dotSize > BB.lineThickness ? Math.max(IB, JB + 2) : IB,
          vB = (JB - oB) / 2;
        zB.push({
          x: vB,
          y: vB,
          w: oB,
          h: oB
        })
      }
      const FB = zB.map((BB => ({
        ...BB,
        x: BB.x - kB,
        y: BB.y - kB,
        w: BB.w + 2 * kB,
        h: BB.h + 2 * kB
      })));
      let NB = null,
        gB = null;
      if (BB.circle) {
        const IB = vB(BB.circleThickness, ZB),
          oB = function(BB, IB) {
            return BB + (BB % 2 === IB ? 0 : 1)
          }(cB(BB, ZB), TB),
          GB = (JB - oB) / 2;
        NB = hB(GB, oB, IB), kB > 0 && (gB = hB(GB - kB, oB + 2 * kB, IB + 2 * kB))
      }
      return {
        cell: JB,
        fills: zB,
        outlines: kB > 0 ? FB : [],
        ring: NB,
        ringOutline: gB
      }
    }

    function cB(BB, IB) {
      return Math.round(BB.circleRadius * IB * 2 + vB(BB.circleThickness, IB))
    }

    function nB(BB, IB) {
      return Math.max(2 - IB, 2 * Math.round((BB - IB) / 2) + IB)
    }

    function hB(BB, IB, ZB) {
      const TB = 2 * ZB >= IB - 1;
      return {
        x: BB,
        y: BB,
        size: IB,
        border: Math.min(ZB, Math.floor(IB / 2)),
        filled: TB
      }
    }
    var zB = ZB(1153);
    const FB = 1.4;

    function NB(BB, IB) {
      return BB && IB ? `scale(${FB})` : "scale(1)"
    }

    function gB(BB) {
      return "classic" === BB.settings.style ? (0, zB.jsx)(UB, {
        ...BB
      }) : (0, zB.jsx)(OB, {
        ...BB
      })
    }
    const qB = .125;

    function yB(BB, IB) {
      const ZB = {};
      if (BB.color !== GB.h.color && (ZB.color = (0, GB.n)(BB.color)), BB.opacity !== GB.h.opacity && (ZB.opacity = BB.opacity / 100), BB.outline !== GB.h.outline || BB.outlineColor !== GB.h.outlineColor) {
        const IB = BB.outline,
          TB = (0, GB.n)(BB.outlineColor);
        ZB.textShadow = IB > 0 ? `-${IB}px 0 ${TB}, 0 ${IB}px ${TB}, ${IB}px 0 ${TB}, 0 -${IB}px ${TB}` : "none"
      }
      if (BB.size !== GB.h.size) {
        const TB = BB.size / 100;
        ZB.fontSize = IB ? `calc(max(1.3rem, 18px) * ${TB})` : `calc(1.3rem * ${TB})`, ZB.marginTop = `-${qB}em`, ZB.transformOrigin = `50% calc(50% + ${qB}em)`
      }
      return ZB
    }

    function UB(BB) {
      let {
        settings: IB,
        touch: ZB,
        inPreview: TB,
        inEditor: oB,
        pressed: GB = !1,
        pressRef: vB
      } = BB;
      return (0, zB.jsx)("div", {
        className: JB()("Crosshair", {
          Touch: ZB,
          CrosshairInPreview: TB,
          CrosshairInEditor: oB || TB
        }),
        ref: vB,
        style: {
          transform: NB(GB, IB.growOnClick),
          ...yB(IB, ZB)
        },
        children: "+"
      })
    }

    function WB(BB, IB) {
      return BB / IB + "px"
    }

    function dB(BB, IB, ZB, TB) {
      return {
        ...sB(BB, IB, ZB),
        width: WB(BB.w, ZB),
        height: WB(BB.h, ZB),
        background: TB
      }
    }

    function CB(BB, IB, ZB) {
      return {
        left: WB(BB.x, IB),
        top: WB(BB.y, IB),
        width: WB(BB.size, IB),
        height: WB(BB.size, IB),
        borderWidth: WB(BB.border, IB),
        borderColor: ZB,
        background: BB.filled ? ZB : void 0
      }
    }
    const QB = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function sB(BB, IB, ZB) {
      const [TB, JB] = BB.arm ? QB[BB.arm] : [0, 0], oB = Math.round(IB * ZB);
      return {
        left: WB(BB.x + TB * oB, ZB),
        top: WB(BB.y + JB * oB, ZB)
      }
    }

    function wB(BB) {
      return BB.arm ? {
        "data-arm": BB.arm,
        "data-x": BB.x,
        "data-y": BB.y
      } : {}
    }

    function OB(BB) {
      let {
        settings: IB,
        inPreview: ZB,
        inEditor: TB,
        pressed: vB = !1,
        spread: cB,
        spreadRef: nB
      } = BB;
      const hB = (0, oB.useRef)(null),
        {
          box: NB,
          dpr: gB
        } = function(BB) {
          const [IB, ZB] = (0, oB.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, oB.useLayoutEffect)((() => {
            const IB = BB.current;
            if (!IB) return;
            const TB = () => {
              const BB = IB.getBoundingClientRect(),
                TB = window.devicePixelRatio || 1;
              ZB((IB => IB.dpr === TB && IB.box.left === BB.left && IB.box.top === BB.top && IB.box.width === BB.width && IB.box.height === BB.height ? IB : {
                box: {
                  left: BB.left,
                  top: BB.top,
                  width: BB.width,
                  height: BB.height
                },
                dpr: TB
              }))
            };
            TB();
            const JB = new ResizeObserver(TB);
            return JB.observe(IB), window.addEventListener("resize", TB), window.addEventListener("scroll", TB, !0), () => {
              JB.disconnect(), window.removeEventListener("resize", TB), window.removeEventListener("scroll", TB, !0)
            }
          }), [BB]), IB
        }(hB),
        qB = (0, oB.useRef)(gB);
      qB.current = gB;
      const yB = kB(IB, gB, vB && IB.growOnClick ? FB : 1),
        UB = function(BB, IB, ZB) {
          const TB = Math.round((BB.left + BB.width / 2) * ZB - IB / 2),
            JB = Math.round((BB.top + BB.height / 2) * ZB - IB / 2);
          return {
            x: TB / ZB - BB.left,
            y: JB / ZB - BB.top
          }
        }(NB, yB.cell, gB),
        WB = (0, GB.n)(IB.color),
        QB = (0, GB.n)(IB.outlineColor),
        OB = (0, oB.useRef)(0);
      (0, oB.useLayoutEffect)((() => {
        if (nB) return nB.current = BB => {
          var IB;
          OB.current = BB, null === (IB = hB.current) || void 0 === IB || IB.querySelectorAll("[data-arm]").forEach((IB => {
            Object.assign(IB.style, sB(function(BB) {
              return {
                x: Number(BB.dataset.x),
                y: Number(BB.dataset.y),
                arm: BB.dataset.arm
              }
            }(IB), BB, qB.current))
          }))
        }, () => {
          nB.current = null
        }
      }), [nB]);
      const YB = null !== cB && void 0 !== cB ? cB : OB.current;
      return (0, zB.jsx)("div", {
        ref: hB,
        className: JB()("CrosshairShapes", {
          CrosshairInPreview: ZB,
          CrosshairInEditor: TB || ZB,
          CrosshairSpreads: void 0 !== nB
        }),
        children: (0, zB.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: UB.x,
            top: UB.y,
            opacity: IB.opacity / 100
          },
          children: (0, zB.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [yB.ringOutline && (0, zB.jsx)("div", {
              className: "CrosshairRing",
              style: CB(yB.ringOutline, gB, QB)
            }), yB.outlines.map(((BB, IB) => (0, zB.jsx)("div", {
              className: "CrosshairPart",
              ...wB(BB),
              style: dB(BB, YB, gB, QB)
            }, `o${IB}`))), yB.ring && (0, zB.jsx)("div", {
              className: "CrosshairRing",
              style: CB(yB.ring, gB, WB)
            }), yB.fills.map(((BB, IB) => (0, zB.jsx)("div", {
              className: "CrosshairPart",
              ...wB(BB),
              style: dB(BB, YB, gB, WB)
            }, `f${IB}`)))]
          })
        })
      })
    }
  },
  34167: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      g: () => qB,
      h: () => gB
    });
    var TB = ZB(34146);
    const JB = "XH1-",
      oB = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      GB = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      vB = ["color", "outlineColor"],
      kB = 1 + 3 * vB.length + GB.length + 1,
      cB = Math.ceil(8 * kB / Math.log2(62)),
      nB = JB.length + cB;

    function hB(BB) {
      let IB = 90;
      for (const ZB of BB) IB = 31 * IB + ZB & 255;
      return IB
    }
    const zB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      FB = BigInt(zB.length);

    function NB(BB, IB) {
      let ZB = 0n;
      for (const JB of BB) {
        const BB = zB.indexOf(JB);
        if (BB < 0) return null;
        ZB = ZB * FB + BigInt(BB)
      }
      if (ZB >> BigInt(8 * IB) !== 0n) return null;
      const TB = [];
      for (let JB = 0; JB < IB; JB++) TB.unshift(Number(0xffn & ZB)), ZB >>= 8n;
      return TB
    }

    function gB(BB) {
      let IB = "shapes" === BB.style ? 1 : 0;
      oB.forEach(((ZB, TB) => {
        BB[ZB] && (IB |= 1 << TB + 1)
      }));
      const ZB = [IB];
      for (const JB of vB) {
        const IB = (0, TB.k)(JB, BB[JB]);
        ZB.push(IB >> 16 & 255, IB >> 8 & 255, 255 & IB)
      }
      for (const JB of GB) {
        const {
          min: IB,
          step: oB
        } = TB.d[JB];
        ZB.push(Math.round(((0, TB.k)(JB, BB[JB]) - IB) / oB))
      }
      return ZB.push(hB(ZB)), JB + function(BB, IB) {
        let ZB = 0n;
        for (const JB of BB) ZB = ZB << 8n | BigInt(JB);
        let TB = "";
        for (let JB = 0; JB < IB; JB++) TB = zB[Number(ZB % FB)] + TB, ZB /= FB;
        return TB
      }(ZB, cB)
    }

    function qB(BB) {
      for (const IB of BB.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${cB}})`, "gi"))) {
        const BB = yB(NB(IB[1], kB));
        if (BB) return BB
      }
      return null
    }

    function yB(BB) {
      if (!BB || BB.length !== kB || hB(BB.slice(0, -1)) !== BB[BB.length - 1]) return null;
      const IB = BB[0],
        ZB = {
          ...TB.h,
          style: 1 & IB ? "shapes" : "classic"
        };
      oB.forEach(((BB, TB) => {
        ZB[BB] = 0 !== (IB & 1 << TB + 1)
      }));
      let JB = 1;
      for (const TB of vB) ZB[TB] = BB[JB] << 16 | BB[JB + 1] << 8 | BB[JB + 2], JB += 3;
      for (const oB of GB) {
        const {
          min: IB,
          step: GB
        } = TB.d[oB];
        ZB[oB] = (0, TB.k)(oB, IB + BB[JB] * GB), JB++
      }
      return ZB
    }
  },
  34146: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      h: () => JB,
      k: () => oB,
      n: () => cB,
      p: () => kB,
      r: () => nB,
      t: () => vB,
      x: () => GB
    });
    const TB = {
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
      JB = Object.freeze({
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

    function oB(BB, IB) {
      var ZB;
      const {
        min: oB,
        max: GB,
        step: vB
      } = TB[BB];
      if (!Number.isFinite(IB)) return JB[BB];
      const kB = (null !== (ZB = String(vB).split(".")[1]) && void 0 !== ZB ? ZB : "").length,
        cB = Number((Math.round(IB / vB) * vB).toFixed(kB));
      return Math.min(GB, Math.max(oB, cB))
    }

    function GB(BB, IB, ZB) {
      const TB = "number" === typeof ZB ? oB(IB, ZB) : ZB;
      return {
        ...BB,
        [IB]: TB
      }
    }

    function vB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(JB).every((TB => ZB.includes(TB) || BB[TB] === IB[TB]))
    }

    function kB(BB) {
      return vB(BB, JB)
    }

    function cB(BB) {
      return `#${BB.toString(16).padStart(6,"0")}`
    }

    function nB(BB) {
      const IB = /^#?([0-9a-f]{6})$/i.exec(BB.trim());
      return IB ? parseInt(IB[1], 16) : null
    }
  },
  34173: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB,
      h: () => zB
    });
    var TB = ZB(63),
      JB = ZB(36),
      oB = ZB(34167),
      GB = ZB(34146);
    const vB = "crosshairCode";
    let kB = null;
    const cB = new Set;

    function nB() {
      if (null === kB) {
        var BB;
        const IB = JB.m.getItem(vB);
        kB = null !== (BB = "string" === typeof IB ? (0, oB.g)(IB) : null) && void 0 !== BB ? BB : GB.h
      }
      return kB
    }

    function hB(BB) {
      kB = BB, (0, GB.p)(BB) ? JB.m.removeItem(vB) : JB.m.setItem(vB, (0, oB.h)(BB));
      for (const IB of cB) IB()
    }

    function zB() {
      const [BB, IB] = (0, TB.useState)(nB);
      return (0, TB.useEffect)((() => {
        const BB = () => {
          IB(nB())
        };
        return BB(), ZB = BB, cB.add(ZB), () => {
          cB.delete(ZB)
        };
        var ZB
      }), []), BB
    }
  },
  36794: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      f: () => kB,
      i: () => GB
    });
    var TB = ZB(665),
      JB = ZB(2912);

    function oB(BB) {
      return BB === (0, JB.h)().oIB ? (0, JB.h)().Jm : BB
    }

    function GB(BB) {
      return !(0, TB.L)(BB) && oB(BB) === (0, JB.h)().Jm
    }
    const vB = "gravity";

    function kB() {
      return (0, JB.h)().physics[vB][1]
    }
  },
  36780: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => sB
    });
    var TB = ZB(36783),
      JB = ZB(201),
      oB = ZB(5028),
      GB = ZB(36789),
      vB = ZB(36464),
      kB = ZB(36829),
      cB = ZB(36794),
      nB = ZB(364),
      hB = ZB.n(nB),
      zB = ZB(1258),
      FB = ZB(2912),
      NB = ZB(36827),
      gB = ZB(24),
      qB = ZB(20),
      yB = ZB(36800),
      UB = ZB(36807),
      WB = ZB(36812);
    const dB = new Set(["note"]);
    const CB = {
      stop: () => CB,
      fade: () => CB,
      rate: () => CB,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => CB,
      setPannerAttr: () => CB,
      setPosition: () => CB
    };
    class QB {
      constructor(BB) {
        let IB, {
          src: ZB,
          volumeScalar: JB,
          isSoundSprite: GB
        } = BB;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, GB ? (IB = (0, TB.g)(ZB), this._spriteTrackSrc = IB) : IB = {
          src: zB.clientSideServerUrls.staticUrl + ZB
        }, this._volumeMultiplier = new kB.k, this._volumeMultiplier.setMultiplierType("persistentScalar", JB), this._howl = (0, vB.countDecodesAs)(new oB.Howl({
          ...IB,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let BB, IB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          ZB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (IB) {
          var TB;
          if (null === (TB = this._spriteTrackSrc) || void 0 === TB || !TB.sprite[IB]) throw new Error("No such sprite in your spritetrack");
          BB = this._howl.play(IB)
        } else BB = this._howl.play();
        ZB && this._howl.loop(!0, BB);
        let JB = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), BB);
        const oB = {
          stop: () => {
            var IB;
            return null === (IB = this.liveHowl()) || void 0 === IB || IB.stop(BB), oB
          },
          fade: (IB, ZB, TB) => {
            var JB;
            return null === (JB = this.liveHowl()) || void 0 === JB || JB.fade(IB, ZB, TB, BB), oB
          },
          rate: IB => {
            var ZB;
            return null === (ZB = this.liveHowl()) || void 0 === ZB || ZB.rate(IB, BB), oB
          },
          stopsAtOnce: () => this._howl.playing(BB) && !this._howl._playLock,
          isAlive: () => {
            const IB = this._howl._soundById(BB);
            return !this._loadFailed && !!IB && !IB._ended
          },
          getDurationMs: () => this._howl._soundById(BB) ? 1e3 * this._howl.duration(BB) / this._howl.rate(BB) : 0,
          getVolume: () => JB * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => JB,
          setRelativeVolume: IB => {
            var ZB;
            if (IB > 1) throw new Error("Volume should be <= 1");
            return JB = qB.d.get("soundOnFromAd") ? IB : 0, null === (ZB = this.liveHowl()) || void 0 === ZB || ZB.volume(Math.min(1, JB * this._volumeMultiplier.getTotalMultipliedVal()), BB), oB
          },
          setPannerAttr: IB => {
            let {
              coneInnerAngle: ZB,
              coneOuterAngle: TB = 360,
              coneOuterGain: JB,
              distanceModel: GB,
              maxDistance: vB,
              panningModel: kB,
              refDistance: cB,
              rolloffFactor: nB
            } = IB;
            return this._setPannerAttr({
              id: BB,
              coneInnerAngle: ZB,
              coneOuterAngle: TB,
              coneOuterGain: JB,
              distanceModel: GB,
              maxDistance: vB,
              panningModel: kB,
              refDistance: cB,
              rolloffFactor: nB
            }), oB
          },
          setPosition: IB => {
            var ZB;
            return null === (ZB = this.liveHowl()) || void 0 === ZB || ZB.pos(IB[2], IB[1], IB[0], BB), oB
          }
        };
        return oB
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, GB.e)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(BB) {
        this._volumeMultiplier.setMultiplierType("globalVolume", BB), this._howl.volume(BB)
      }
      _setPannerAttr(BB) {
        let {
          id: IB,
          coneInnerAngle: ZB = 360,
          coneOuterAngle: TB = 360,
          coneOuterGain: JB = 0,
          distanceModel: oB = "inverse",
          maxDistance: GB = 1e3,
          panningModel: vB = "HRTF",
          refDistance: kB = NB.h,
          rolloffFactor: cB = 1
        } = BB;
        const nB = this.liveHowl();
        if (null === nB) return;
        nB.pannerAttr({
          coneOuterAngle: TB
        }, IB);
        const hB = {
          coneInnerAngle: ZB,
          coneOuterAngle: TB,
          coneOuterGain: JB,
          distanceModel: oB,
          maxDistance: GB,
          panningModel: vB,
          refDistance: kB,
          rolloffFactor: cB
        };
        nB.pannerAttr(hB, IB)
      }
    }
    const sB = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new yB.b, gB.l.subscribe("appManagerUpdated|soundVolume", (BB => {
          const IB = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const ZB of IB) ZB.setGlobalVolume(BB)
        }))
      }
      play(BB, IB) {
        var ZB;
        let oB, GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (ZB = (0, FB.h)()) || void 0 === ZB ? void 0 : ZB.Jm,
          vB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NB.g,
          kB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : NB.h,
          nB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var zB;
        (0, FB.h)() ? oB = !!Array.isArray(GB) || (0, cB.e)(GB) !== (null === (zB = (0, FB.h)()) || void 0 === zB ? void 0 : zB.Jm): oB = !1;
        const gB = (0, TB.j)(BB),
          qB = this.loadSheet(oB ? this.spatialSheets : this.stereoSheets, gB);
        if (!oB) {
          const ZB = qB.play(BB, nB);
          return ZB.setRelativeVolume(IB), ZB
        }
        const UB = (0, FB.h)(),
          WB = Array.isArray(GB) ? GB : UB.zW.aU(GB),
          QB = UB.zW.aU(UB.Jm);
        if (!WB || hB().sqrDist(WB, QB) > vB * vB) return CB;
        let sB;
        if (!nB) {
          if (!this.spatialVoices.admit({
              group: dB.has(gB) ? null : (0, yB.j)(BB),
              loudness: (0, yB.f)(IB, hB().uG(WB, QB), kB),
              startMs: performance.now(),
              getDurationMs: () => {
                var BB, IB;
                return null !== (BB = null === (IB = sB) || void 0 === IB ? void 0 : IB.getDurationMs()) && void 0 !== BB ? BB : 0
              },
              isAlive: () => {
                var BB, IB;
                return null !== (BB = null === (IB = sB) || void 0 === IB ? void 0 : IB.isAlive()) && void 0 !== BB && BB
              },
              canStop: () => {
                var BB, IB;
                return null !== (BB = null === (IB = sB) || void 0 === IB ? void 0 : IB.stopsAtOnce()) && void 0 !== BB && BB
              },
              stop: () => {
                var BB;
                null === (BB = sB) || void 0 === BB || BB.stop()
              }
            })) return CB
        }
        return sB = qB.play(BB, nB), sB.setRelativeVolume(IB), sB.setPannerAttr({
          refDistance: kB
        }), sB.setPosition([WB[0], WB[1] + JB.f.fq * JB.f.playerEyeToHeightRatio, WB[2]]), sB
      }
      preload(BB) {
        this.loadSheet(this.stereoSheets, (0, TB.j)(BB))
      }
      loadSheet(BB, IB) {
        let ZB = BB[IB];
        return ZB || ((0, WB.b)(IB), ZB = new QB({
          src: IB,
          isSoundSprite: !0,
          volumeScalar: 1
        }), ZB.setGlobalVolume(qB.d.get("soundVolume")), BB[IB] = ZB), ZB
      }
      freeSheetsAfterGame() {
        for (const BB of [this.stereoSheets, this.spatialSheets])
          for (const [IB, ZB] of Object.entries(BB)) !UB.e.has(IB) && ZB.loaded() && (ZB.unloadOnceIdle(), delete BB[IB])
      }
    }
  },
  36867: (BB, IB, ZB) => {
    function TB(BB, IB) {
      var ZB, TB, JB, oB, GB, vB, kB, cB;
      return BB.name === IB.name && ((null === (ZB = BB.attributes) || void 0 === ZB || null === (TB = ZB.customAttributes) || void 0 === TB ? void 0 : TB.stackKey) === (null === (JB = IB.attributes) || void 0 === JB || null === (oB = JB.customAttributes) || void 0 === oB ? void 0 : oB.stackKey) && (!0 !== (null === (GB = BB.attributes) || void 0 === GB || null === (vB = GB.customAttributes) || void 0 === vB ? void 0 : vB.unstackable) && !0 !== (null === (kB = IB.attributes) || void 0 === kB || null === (cB = kB.customAttributes) || void 0 === cB ? void 0 : cB.unstackable)))
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  36964: (BB, IB, ZB) => {
    function TB(BB) {
      return BB.includes("Leaf Bed")
    }

    function JB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !TB(BB)
    }

    function oB(BB) {
      return BB.includes(" Strongbed")
    }

    function GB(BB) {
      return TB(BB) || JB(BB) || oB(BB)
    }
    ZB.d(IB, {
      d: () => GB,
      h: () => TB,
      i: () => oB,
      k: () => JB
    })
  },
  36958: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB
    });
    var TB = ZB(36964),
      JB = ZB(9296);
    const oB = [],
      GB = [],
      vB = [],
      kB = [];
    for (const nB of Object.keys(JB.h))(0, TB.h)(nB) ? oB.push(nB) : (0, TB.k)(nB) && GB.push(nB), (0, TB.i)(nB) && vB.push(nB), (nB.includes(" Bed Head") || nB.includes(" Strongbed Head")) && kB.push(nB);
    const cB = {
      leafBeds: oB,
      woolBeds: GB,
      strongBeds: vB,
      beds: [...oB, ...GB, ...vB],
      bedHeads: kB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6635: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      e: () => JB,
      g: () => kB,
      h: () => oB,
      l: () => cB,
      o: () => TB,
      p: () => vB
    });
    let TB = function(BB) {
        return BB[BB.DEFAULT = 0] = "DEFAULT", BB[BB.BOAT = 1] = "BOAT", BB[BB.GLIDER = 2] = "GLIDER", BB[BB.BALLOON = 3] = "BALLOON", BB[BB.SLEEPING = 4] = "SLEEPING", BB[BB.RIDING_MOB = 5] = "RIDING_MOB", BB[BB.CAR = 6] = "CAR", BB[BB.HOVERCRAFT = 7] = "HOVERCRAFT", BB
      }({}),
      JB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.OBSIDIAN = 1] = "OBSIDIAN", BB[BB.SPEED = 2] = "SPEED", BB
      }({}),
      oB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.IRON = 1] = "IRON", BB[BB.GOLD = 2] = "GOLD", BB[BB.DIAMOND = 3] = "DIAMOND", BB
      }({}),
      GB = function(BB) {
        return BB[BB.YELLOW = 0] = "YELLOW", BB[BB.WHITE = 1] = "WHITE", BB[BB.RED = 2] = "RED", BB[BB.PURPLE = 3] = "PURPLE", BB[BB.PINK = 4] = "PINK", BB[BB.ORANGE = 5] = "ORANGE", BB[BB.MAGENTA = 6] = "MAGENTA", BB[BB.LIME = 7] = "LIME", BB[BB.LIGHT_GRAY = 8] = "LIGHT_GRAY", BB[BB.LIGHT_BLUE = 9] = "LIGHT_BLUE", BB[BB.GREEN = 10] = "GREEN", BB[BB.GRAY = 11] = "GRAY", BB[BB.CYAN = 12] = "CYAN", BB[BB.BROWN = 13] = "BROWN", BB[BB.BLUE = 14] = "BLUE", BB[BB.BLACK = 15] = "BLACK", BB
      }({}),
      vB = function(BB) {
        return BB[BB.ROTATION_1 = 0] = "ROTATION_1", BB[BB.ROTATION_2 = 1] = "ROTATION_2", BB[BB.ROTATION_3 = 2] = "ROTATION_3", BB[BB.ROTATION_4 = 3] = "ROTATION_4", BB
      }({}),
      kB = function(BB) {
        return BB[BB.KART = 0] = "KART", BB[BB.OFF_ROADER = 1] = "OFF_ROADER", BB[BB.CAR = 2] = "CAR", BB[BB.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", BB[BB.ARMORED_CAR = 4] = "ARMORED_CAR", BB[BB.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", BB[BB.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", BB[BB.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", BB
      }({});
    TB.DEFAULT, TB.BOAT, JB.SPEED, TB.GLIDER, oB.DIAMOND, TB.BALLOON, GB.BLACK, TB.SLEEPING, vB.ROTATION_4, TB.RIDING_MOB, TB.CAR, kB.MOONSTONE_MINING_DRILL, TB.HOVERCRAFT;
    let cB = function(BB) {
      return BB[BB.NORMAL = 0] = "NORMAL", BB[BB.GLIDING = 1] = "GLIDING", BB[BB.FLOATING = 2] = "FLOATING", BB
    }({})
  },
  34158: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);