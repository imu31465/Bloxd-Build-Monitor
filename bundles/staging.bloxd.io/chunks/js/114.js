export const id = 114;
export const ids = [114];
export const modules = {
  36226: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => pb,
      f: () => db
    });
    hb(9062);
    var Bb = hb(49),
      Ob = hb(1348),
      Gb = hb(1811),
      Ub = hb(1857),
      Lb = hb(13),
      Yb = hb(2288),
      Sb = hb(36231),
      ab = hb(36234),
      Hb = hb(9023),
      wb = hb(9057),
      Zb = hb(9073),
      Xb = hb(1007);
    const pb = (0, Bb.memo)((function() {
      var bb;
      const {
        isTouchScreen: ub,
        clientEscMenuOptions: hb,
        scriptedCameraFacing: Gb,
        crosshairShownOverride: pb,
        crosshairGameView: Ab
      } = (0, Lb.j)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), lb = (0, Yb.f)("gunshotOrigin"), Kb = (0, Bb.useRef)(null), Wb = (0, Bb.useRef)(!1), [Cb, rb] = (0, Bb.useState)(ob);
      (0, Ob.h)("cameraZoomSet", rb), (0, Bb.useEffect)((() => {
        rb(ob())
      }), []);
      const jb = (0, Ub.i)("heldItemAim"),
        Db = jb.gun,
        xb = (0, Zb.e)(),
        zb = (0, Bb.useRef)(xb);
      zb.current = xb;
      const [gb, ib] = (0, Bb.useState)(!1);
      (0, Bb.useEffect)((() => (0, ab.d)("crosshairAccuracy", db)), []), (0, Ob.h)("mouseState", (bb => {
        let {
          isDown: ub
        } = bb;
        Wb.current = ub, Kb.current && (Kb.current.style.transform = (0, wb.e)(ub, zb.current.growOnClick)), "shapes" === zb.current.style && ib(ub)
      }));
      const vb = (0, Hb.g)(ub, hb.touchActionButtons);
      return (null !== (bb = (0, Sb.e)(Ab, pb)) && void 0 !== bb ? bb : (0, Sb.j)(jb, Cb > 1, vb, lb)) ? "movement" === Gb || "cursor" === Gb ? null : (0, Xb.jsxs)(Xb.Fragment, {
        children: [Db && (0, Xb.jsx)(nb, {
          custom: xb.forGuns && "shapes" === xb.style ? xb : null,
          touch: ub
        }), !Db && (0, Xb.jsx)(wb.d, {
          settings: xb,
          touch: ub,
          pressRef: Kb,
          pressed: "shapes" === xb.style ? gb : Wb.current
        })]
      }) : null
    }));

    function ob() {
      return Gb.gameBridge.lookup("cameraZoom", null)
    }
    const Ab = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      lb = {
        current: null
      },
      Kb = {
        current: null
      };
    let Wb = 0,
      Cb = 0;

    function db(bb) {
      Cb = bb, Ab[0].current || lb.current || Kb.current ? jb(bb) : Wb = bb
    }

    function rb(bb) {
      return ((0, Sb.g)(bb) - (0, Sb.g)(0)) * window.innerHeight / 100
    }

    function jb(bb) {
      var ub;
      if (null === (ub = Kb.current) || void 0 === ub || ub.call(Kb, rb(bb)), Ab[0].current) {
        const ub = `${(0,Sb.g)(bb)}vh`;
        Ab[0].current.style.transform = `translateX(calc(0px - ${ub}))`, Ab[1].current.style.transform = `translateX(calc(0px + ${ub}))`, Ab[2].current.style.transform = `translateY(calc(0px - ${ub}))`, Ab[3].current.style.transform = `translateY(calc(0px + ${ub}))`
      }
      lb.current && (lb.current.style.filter = `blur(${Math.round(bb/10)}px)`)
    }

    function nb(bb) {
      let {
        custom: ub,
        touch: hb
      } = bb;
      const Gb = (0, Ob.k)("aimingOverlay", "none"),
        Ub = "1.2vh",
        Lb = "0.3vh";
      (0, Bb.useEffect)((() => {
        Wb && jb(Wb)
      }), []);
      const Yb = (0, Bb.useRef)(null !== ub);
      return (0, Bb.useLayoutEffect)((() => {
        var bb;
        ub ? null === (bb = Kb.current) || void 0 === bb || bb.call(Kb, rb(Cb)) : Yb.current && jb(Cb);
        Yb.current = null !== ub
      }), [ub]), (0, Xb.jsxs)(Xb.Fragment, {
        children: ["sniper" === Gb && (0, Xb.jsxs)("div", {
          ref: lb,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, Xb.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, Xb.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, Xb.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, Xb.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, Xb.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Gb ? 0 : 1
          },
          children: [ub && (0, Xb.jsx)(wb.d, {
            settings: ub,
            touch: hb,
            spreadRef: Kb
          }), !ub && (0, Xb.jsxs)(Xb.Fragment, {
            children: [(0, Xb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ub,
                height: Lb,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Ab[0]
            }), (0, Xb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ub,
                height: Lb,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Ab[1]
            }), (0, Xb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Lb,
                height: Ub,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Ab[2]
            }), (0, Xb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Lb,
                height: Ub,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Ab[3]
            })]
          })]
        })]
      })
    }
  },
  9057: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => pb,
      e: () => Xb
    });
    hb(9062);
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(49),
      Ub = hb(9031);

    function Lb(bb, ub) {
      return Math.max(1, Math.round(bb * ub))
    }

    function Yb(bb, ub) {
      const hb = ub * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Bb = function(bb, ub) {
          if (bb.lines) return Lb(bb.lineThickness, ub) % 2;
          if (bb.dot) return Lb(bb.dotSize, ub) % 2;
          return Sb(bb, ub) % 2
        }(bb, ub),
        Ob = ab(bb.lineThickness * hb, Bb),
        Gb = Lb(bb.lineLength, hb),
        Ub = Math.round(bb.gap * hb),
        Yb = bb.outline > 0 ? Lb(bb.outline, hb) : 0,
        wb = [];
      if (bb.lines && (wb.push({
          x: Ob + Ub,
          y: 0,
          w: Gb,
          h: Ob,
          arm: "right"
        }), wb.push({
          x: -Ub - Gb,
          y: 0,
          w: Gb,
          h: Ob,
          arm: "left"
        }), wb.push({
          x: 0,
          y: Ob + Ub,
          w: Ob,
          h: Gb,
          arm: "down"
        }), bb.tStyle || wb.push({
          x: 0,
          y: -Ub - Gb,
          w: Ob,
          h: Gb,
          arm: "up"
        }), 0 === Ub && wb.push({
          x: 0,
          y: 0,
          w: Ob,
          h: Ob
        })), bb.dot) {
        const ub = ab(bb.dotSize * hb, Bb),
          Gb = bb.lines && 0 === Ub && bb.dotSize > bb.lineThickness ? Math.max(ub, Ob + 2) : ub,
          Lb = (Ob - Gb) / 2;
        wb.push({
          x: Lb,
          y: Lb,
          w: Gb,
          h: Gb
        })
      }
      const Zb = wb.map((bb => ({
        ...bb,
        x: bb.x - Yb,
        y: bb.y - Yb,
        w: bb.w + 2 * Yb,
        h: bb.h + 2 * Yb
      })));
      let Xb = null,
        pb = null;
      if (bb.circle) {
        const ub = Lb(bb.circleThickness, hb),
          Gb = function(bb, ub) {
            return bb + (bb % 2 === ub ? 0 : 1)
          }(Sb(bb, hb), Bb),
          Ub = (Ob - Gb) / 2;
        Xb = Hb(Ub, Gb, ub), Yb > 0 && (pb = Hb(Ub - Yb, Gb + 2 * Yb, ub + 2 * Yb))
      }
      return {
        cell: Ob,
        fills: wb,
        outlines: Yb > 0 ? Zb : [],
        ring: Xb,
        ringOutline: pb
      }
    }

    function Sb(bb, ub) {
      return Math.round(bb.circleRadius * ub * 2 + Lb(bb.circleThickness, ub))
    }

    function ab(bb, ub) {
      return Math.max(2 - ub, 2 * Math.round((bb - ub) / 2) + ub)
    }

    function Hb(bb, ub, hb) {
      const Bb = 2 * hb >= ub - 1;
      return {
        x: bb,
        y: bb,
        size: ub,
        border: Math.min(hb, Math.floor(ub / 2)),
        filled: Bb
      }
    }
    var wb = hb(1007);
    const Zb = 1.4;

    function Xb(bb, ub) {
      return bb && ub ? `scale(${Zb})` : "scale(1)"
    }

    function pb(bb) {
      return "classic" === bb.settings.style ? (0, wb.jsx)(lb, {
        ...bb
      }) : (0, wb.jsx)(nb, {
        ...bb
      })
    }
    const ob = .125;

    function Ab(bb, ub) {
      const hb = {};
      if (bb.color !== Ub.e.color && (hb.color = (0, Ub.h)(bb.color)), bb.opacity !== Ub.e.opacity && (hb.opacity = bb.opacity / 100), bb.outline !== Ub.e.outline || bb.outlineColor !== Ub.e.outlineColor) {
        const ub = bb.outline,
          Bb = (0, Ub.h)(bb.outlineColor);
        hb.textShadow = ub > 0 ? `-${ub}px 0 ${Bb}, 0 ${ub}px ${Bb}, ${ub}px 0 ${Bb}, 0 -${ub}px ${Bb}` : "none"
      }
      if (bb.size !== Ub.e.size) {
        const Bb = bb.size / 100;
        hb.fontSize = ub ? `calc(max(1.3rem, 18px) * ${Bb})` : `calc(1.3rem * ${Bb})`, hb.marginTop = `-${ob}em`, hb.transformOrigin = `50% calc(50% + ${ob}em)`
      }
      return hb
    }

    function lb(bb) {
      let {
        settings: ub,
        touch: hb,
        inPreview: Bb,
        inEditor: Gb,
        pressed: Ub = !1,
        pressRef: Lb
      } = bb;
      return (0, wb.jsx)("div", {
        className: Ob()("Crosshair", {
          Touch: hb,
          CrosshairInPreview: Bb,
          CrosshairInEditor: Gb || Bb
        }),
        ref: Lb,
        style: {
          transform: Xb(Ub, ub.growOnClick),
          ...Ab(ub, hb)
        },
        children: "+"
      })
    }

    function Kb(bb, ub) {
      return bb / ub + "px"
    }

    function Wb(bb, ub, hb, Bb) {
      return {
        ...rb(bb, ub, hb),
        width: Kb(bb.w, hb),
        height: Kb(bb.h, hb),
        background: Bb
      }
    }

    function Cb(bb, ub, hb) {
      return {
        left: Kb(bb.x, ub),
        top: Kb(bb.y, ub),
        width: Kb(bb.size, ub),
        height: Kb(bb.size, ub),
        borderWidth: Kb(bb.border, ub),
        borderColor: hb,
        background: bb.filled ? hb : void 0
      }
    }
    const db = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function rb(bb, ub, hb) {
      const [Bb, Ob] = bb.arm ? db[bb.arm] : [0, 0], Gb = Math.round(ub * hb);
      return {
        left: Kb(bb.x + Bb * Gb, hb),
        top: Kb(bb.y + Ob * Gb, hb)
      }
    }

    function jb(bb) {
      return bb.arm ? {
        "data-arm": bb.arm,
        "data-x": bb.x,
        "data-y": bb.y
      } : {}
    }

    function nb(bb) {
      let {
        settings: ub,
        inPreview: hb,
        inEditor: Bb,
        pressed: Lb = !1,
        spread: Sb,
        spreadRef: ab
      } = bb;
      const Hb = (0, Gb.useRef)(null),
        {
          box: Xb,
          dpr: pb
        } = function(bb) {
          const [ub, hb] = (0, Gb.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Gb.useLayoutEffect)((() => {
            const ub = bb.current;
            if (!ub) return;
            const Bb = () => {
              const bb = ub.getBoundingClientRect(),
                Bb = window.devicePixelRatio || 1;
              hb((ub => ub.dpr === Bb && ub.box.left === bb.left && ub.box.top === bb.top && ub.box.width === bb.width && ub.box.height === bb.height ? ub : {
                box: {
                  left: bb.left,
                  top: bb.top,
                  width: bb.width,
                  height: bb.height
                },
                dpr: Bb
              }))
            };
            Bb();
            const Ob = new ResizeObserver(Bb);
            return Ob.observe(ub), window.addEventListener("resize", Bb), window.addEventListener("scroll", Bb, !0), () => {
              Ob.disconnect(), window.removeEventListener("resize", Bb), window.removeEventListener("scroll", Bb, !0)
            }
          }), [bb]), ub
        }(Hb),
        ob = (0, Gb.useRef)(pb);
      ob.current = pb;
      const Ab = Yb(ub, pb, Lb && ub.growOnClick ? Zb : 1),
        lb = function(bb, ub, hb) {
          const Bb = Math.round((bb.left + bb.width / 2) * hb - ub / 2),
            Ob = Math.round((bb.top + bb.height / 2) * hb - ub / 2);
          return {
            x: Bb / hb - bb.left,
            y: Ob / hb - bb.top
          }
        }(Xb, Ab.cell, pb),
        Kb = (0, Ub.h)(ub.color),
        db = (0, Ub.h)(ub.outlineColor),
        nb = (0, Gb.useRef)(0);
      (0, Gb.useLayoutEffect)((() => {
        if (ab) return ab.current = bb => {
          var ub;
          nb.current = bb, null === (ub = Hb.current) || void 0 === ub || ub.querySelectorAll("[data-arm]").forEach((ub => {
            Object.assign(ub.style, rb(function(bb) {
              return {
                x: Number(bb.dataset.x),
                y: Number(bb.dataset.y),
                arm: bb.dataset.arm
              }
            }(ub), bb, ob.current))
          }))
        }, () => {
          ab.current = null
        }
      }), [ab]);
      const Db = null !== Sb && void 0 !== Sb ? Sb : nb.current;
      return (0, wb.jsx)("div", {
        ref: Hb,
        className: Ob()("CrosshairShapes", {
          CrosshairInPreview: hb,
          CrosshairInEditor: Bb || hb,
          CrosshairSpreads: void 0 !== ab
        }),
        children: (0, wb.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: lb.x,
            top: lb.y,
            opacity: ub.opacity / 100
          },
          children: (0, wb.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Ab.ringOutline && (0, wb.jsx)("div", {
              className: "CrosshairRing",
              style: Cb(Ab.ringOutline, pb, db)
            }), Ab.outlines.map(((bb, ub) => (0, wb.jsx)("div", {
              className: "CrosshairPart",
              ...jb(bb),
              style: Wb(bb, Db, pb, db)
            }, `o${ub}`))), Ab.ring && (0, wb.jsx)("div", {
              className: "CrosshairRing",
              style: Cb(Ab.ring, pb, Kb)
            }), Ab.fills.map(((bb, ub) => (0, wb.jsx)("div", {
              className: "CrosshairPart",
              ...jb(bb),
              style: Wb(bb, Db, pb, Kb)
            }, `f${ub}`)))]
          })
        })
      })
    }
  },
  9071: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      e: () => ob,
      f: () => pb
    });
    var Bb = hb(9031);
    const Ob = "XH1-",
      Gb = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Ub = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Lb = ["color", "outlineColor"],
      Yb = 1 + 3 * Lb.length + Ub.length + 1,
      Sb = Math.ceil(8 * Yb / Math.log2(62)),
      ab = Ob.length + Sb;

    function Hb(bb) {
      let ub = 90;
      for (const hb of bb) ub = 31 * ub + hb & 255;
      return ub
    }
    const wb = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Zb = BigInt(wb.length);

    function Xb(bb, ub) {
      let hb = 0n;
      for (const Ob of bb) {
        const bb = wb.indexOf(Ob);
        if (bb < 0) return null;
        hb = hb * Zb + BigInt(bb)
      }
      if (hb >> BigInt(8 * ub) !== 0n) return null;
      const Bb = [];
      for (let Ob = 0; Ob < ub; Ob++) Bb.unshift(Number(0xffn & hb)), hb >>= 8n;
      return Bb
    }

    function pb(bb) {
      let ub = "shapes" === bb.style ? 1 : 0;
      Gb.forEach(((hb, Bb) => {
        bb[hb] && (ub |= 1 << Bb + 1)
      }));
      const hb = [ub];
      for (const Ob of Lb) {
        const ub = (0, Bb.g)(Ob, bb[Ob]);
        hb.push(ub >> 16 & 255, ub >> 8 & 255, 255 & ub)
      }
      for (const Ob of Ub) {
        const {
          min: ub,
          step: Gb
        } = Bb.b[Ob];
        hb.push(Math.round(((0, Bb.g)(Ob, bb[Ob]) - ub) / Gb))
      }
      return hb.push(Hb(hb)), Ob + function(bb, ub) {
        let hb = 0n;
        for (const Ob of bb) hb = hb << 8n | BigInt(Ob);
        let Bb = "";
        for (let Ob = 0; Ob < ub; Ob++) Bb = wb[Number(hb % Zb)] + Bb, hb /= Zb;
        return Bb
      }(hb, Sb)
    }

    function ob(bb) {
      for (const ub of bb.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Sb}})`, "gi"))) {
        const bb = Ab(Xb(ub[1], Yb));
        if (bb) return bb
      }
      return null
    }

    function Ab(bb) {
      if (!bb || bb.length !== Yb || Hb(bb.slice(0, -1)) !== bb[bb.length - 1]) return null;
      const ub = bb[0],
        hb = {
          ...Bb.e,
          style: 1 & ub ? "shapes" : "classic"
        };
      Gb.forEach(((bb, Bb) => {
        hb[bb] = 0 !== (ub & 1 << Bb + 1)
      }));
      let Ob = 1;
      for (const Bb of Lb) hb[Bb] = bb[Ob] << 16 | bb[Ob + 1] << 8 | bb[Ob + 2], Ob += 3;
      for (const Gb of Ub) {
        const {
          min: ub,
          step: Ub
        } = Bb.b[Gb];
        hb[Gb] = (0, Bb.g)(Gb, ub + bb[Ob] * Ub), Ob++
      }
      return hb
    }
  },
  9031: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      e: () => Ob,
      g: () => Gb,
      h: () => Sb,
      j: () => Yb,
      m: () => ab,
      o: () => Lb,
      p: () => Ub
    });
    const Bb = {
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
      Ob = Object.freeze({
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

    function Gb(bb, ub) {
      var hb;
      const {
        min: Gb,
        max: Ub,
        step: Lb
      } = Bb[bb];
      if (!Number.isFinite(ub)) return Ob[bb];
      const Yb = (null !== (hb = String(Lb).split(".")[1]) && void 0 !== hb ? hb : "").length,
        Sb = Number((Math.round(ub / Lb) * Lb).toFixed(Yb));
      return Math.min(Ub, Math.max(Gb, Sb))
    }

    function Ub(bb, ub, hb) {
      const Bb = "number" === typeof hb ? Gb(ub, hb) : hb;
      return {
        ...bb,
        [ub]: Bb
      }
    }

    function Lb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Ob).every((Bb => hb.includes(Bb) || bb[Bb] === ub[Bb]))
    }

    function Yb(bb) {
      return Lb(bb, Ob)
    }

    function Sb(bb) {
      return `#${bb.toString(16).padStart(6,"0")}`
    }

    function ab(bb) {
      const ub = /^#?([0-9a-f]{6})$/i.exec(bb.trim());
      return ub ? parseInt(ub[1], 16) : null
    }
  },
  9073: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb,
      e: () => wb
    });
    var Bb = hb(49),
      Ob = hb(29),
      Gb = hb(9071),
      Ub = hb(9031);
    const Lb = "crosshairCode";
    let Yb = null;
    const Sb = new Set;

    function ab() {
      if (null === Yb) {
        var bb;
        const ub = Ob.j.getItem(Lb);
        Yb = null !== (bb = "string" === typeof ub ? (0, Gb.e)(ub) : null) && void 0 !== bb ? bb : Ub.e
      }
      return Yb
    }

    function Hb(bb) {
      Yb = bb, (0, Ub.j)(bb) ? Ob.j.removeItem(Lb) : Ob.j.setItem(Lb, (0, Gb.f)(bb));
      for (const ub of Sb) ub()
    }

    function wb() {
      const [bb, ub] = (0, Bb.useState)(ab);
      return (0, Bb.useEffect)((() => {
        const bb = () => {
          ub(ab())
        };
        return bb(), hb = bb, Sb.add(hb), () => {
          Sb.delete(hb)
        };
        var hb
      }), []), bb
    }
  },
  36404: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      e: () => Yb,
      i: () => Ub
    });
    var Bb = hb(588),
      Ob = hb(2560);

    function Gb(bb) {
      return bb === (0, Ob.g)().Mbb ? (0, Ob.g)().bM : bb
    }

    function Ub(bb) {
      return !(0, Bb.J)(bb) && Gb(bb) === (0, Ob.g)().bM
    }
    const Lb = "gravity";

    function Yb() {
      return (0, Ob.g)().physics[Lb][1]
    }
  },
  36386: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => rb
    });
    var Bb = hb(36393),
      Ob = hb(191),
      Gb = hb(4626),
      Ub = hb(36396),
      Lb = hb(36044),
      Yb = hb(36437),
      Sb = hb(36404),
      ab = hb(324),
      Hb = hb.n(ab),
      wb = hb(1103),
      Zb = hb(2560),
      Xb = hb(36430),
      pb = hb(16),
      ob = hb(13),
      Ab = hb(36411),
      lb = hb(36418),
      Kb = hb(36423);
    const Wb = new Set(["note"]);
    const Cb = {
      stop: () => Cb,
      fade: () => Cb,
      rate: () => Cb,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Cb,
      setPannerAttr: () => Cb,
      setPosition: () => Cb
    };
    class db {
      constructor(bb) {
        let ub, {
          src: hb,
          volumeScalar: Ob,
          isSoundSprite: Ub
        } = bb;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, Ub ? (ub = (0, Bb.k)(hb), this._spriteTrackSrc = ub) : ub = {
          src: wb.clientSideServerUrls.staticUrl + hb
        }, this._volumeMultiplier = new Yb.e, this._volumeMultiplier.setMultiplierType("persistentScalar", Ob), this._howl = (0, Lb.countDecodesAs)(new Gb.Howl({
          ...ub,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let bb, ub = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          hb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (ub) {
          var Bb;
          if (null === (Bb = this._spriteTrackSrc) || void 0 === Bb || !Bb.sprite[ub]) throw new Error("No such sprite in your spritetrack");
          bb = this._howl.play(ub)
        } else bb = this._howl.play();
        hb && this._howl.loop(!0, bb);
        let Ob = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), bb);
        const Gb = {
          stop: () => {
            var ub;
            return null === (ub = this.liveHowl()) || void 0 === ub || ub.stop(bb), Gb
          },
          fade: (ub, hb, Bb) => {
            var Ob;
            return null === (Ob = this.liveHowl()) || void 0 === Ob || Ob.fade(ub, hb, Bb, bb), Gb
          },
          rate: ub => {
            var hb;
            return null === (hb = this.liveHowl()) || void 0 === hb || hb.rate(ub, bb), Gb
          },
          stopsAtOnce: () => this._howl.playing(bb) && !this._howl._playLock,
          isAlive: () => {
            const ub = this._howl._soundById(bb);
            return !this._loadFailed && !!ub && !ub._ended
          },
          getDurationMs: () => this._howl._soundById(bb) ? 1e3 * this._howl.duration(bb) / this._howl.rate(bb) : 0,
          getVolume: () => Ob * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Ob,
          setRelativeVolume: ub => {
            var hb;
            if (ub > 1) throw new Error("Volume should be <= 1");
            return Ob = ob.d.get("soundOnFromAd") ? ub : 0, null === (hb = this.liveHowl()) || void 0 === hb || hb.volume(Math.min(1, Ob * this._volumeMultiplier.getTotalMultipliedVal()), bb), Gb
          },
          setPannerAttr: ub => {
            let {
              coneInnerAngle: hb,
              coneOuterAngle: Bb = 360,
              coneOuterGain: Ob,
              distanceModel: Ub,
              maxDistance: Lb,
              panningModel: Yb,
              refDistance: Sb,
              rolloffFactor: ab
            } = ub;
            return this._setPannerAttr({
              id: bb,
              coneInnerAngle: hb,
              coneOuterAngle: Bb,
              coneOuterGain: Ob,
              distanceModel: Ub,
              maxDistance: Lb,
              panningModel: Yb,
              refDistance: Sb,
              rolloffFactor: ab
            }), Gb
          },
          setPosition: ub => {
            var hb;
            return null === (hb = this.liveHowl()) || void 0 === hb || hb.pos(ub[2], ub[1], ub[0], bb), Gb
          }
        };
        return Gb
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, Ub.d)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(bb) {
        this._volumeMultiplier.setMultiplierType("globalVolume", bb), this._howl.volume(bb)
      }
      _setPannerAttr(bb) {
        let {
          id: ub,
          coneInnerAngle: hb = 360,
          coneOuterAngle: Bb = 360,
          coneOuterGain: Ob = 0,
          distanceModel: Gb = "inverse",
          maxDistance: Ub = 1e3,
          panningModel: Lb = "HRTF",
          refDistance: Yb = Xb.d,
          rolloffFactor: Sb = 1
        } = bb;
        const ab = this.liveHowl();
        if (null === ab) return;
        ab.pannerAttr({
          coneOuterAngle: Bb
        }, ub);
        const Hb = {
          coneInnerAngle: hb,
          coneOuterAngle: Bb,
          coneOuterGain: Ob,
          distanceModel: Gb,
          maxDistance: Ub,
          panningModel: Lb,
          refDistance: Yb,
          rolloffFactor: Sb
        };
        ab.pannerAttr(Hb, ub)
      }
    }
    const rb = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new Ab.d, pb.i.subscribe("appManagerUpdated|soundVolume", (bb => {
          const ub = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const hb of ub) hb.setGlobalVolume(bb)
        }))
      }
      play(bb, ub) {
        var hb;
        let Gb, Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (hb = (0, Zb.g)()) || void 0 === hb ? void 0 : hb.bM,
          Lb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xb.c,
          Yb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Xb.d,
          ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var wb;
        (0, Zb.g)() ? Gb = !!Array.isArray(Ub) || (0, Sb.d)(Ub) !== (null === (wb = (0, Zb.g)()) || void 0 === wb ? void 0 : wb.bM): Gb = !1;
        const pb = (0, Bb.m)(bb),
          ob = this.loadSheet(Gb ? this.spatialSheets : this.stereoSheets, pb);
        if (!Gb) {
          const hb = ob.play(bb, ab);
          return hb.setRelativeVolume(ub), hb
        }
        const lb = (0, Zb.g)(),
          Kb = Array.isArray(Ub) ? Ub : lb.pW.iK(Ub),
          db = lb.pW.iK(lb.bM);
        if (!Kb || Hb().sqrDist(Kb, db) > Lb * Lb) return Cb;
        let rb;
        if (!ab) {
          if (!this.spatialVoices.admit({
              group: Wb.has(pb) ? null : (0, Ab.h)(bb),
              loudness: (0, Ab.f)(ub, Hb().GU(Kb, db), Yb),
              startMs: performance.now(),
              getDurationMs: () => {
                var bb, ub;
                return null !== (bb = null === (ub = rb) || void 0 === ub ? void 0 : ub.getDurationMs()) && void 0 !== bb ? bb : 0
              },
              isAlive: () => {
                var bb, ub;
                return null !== (bb = null === (ub = rb) || void 0 === ub ? void 0 : ub.isAlive()) && void 0 !== bb && bb
              },
              canStop: () => {
                var bb, ub;
                return null !== (bb = null === (ub = rb) || void 0 === ub ? void 0 : ub.stopsAtOnce()) && void 0 !== bb && bb
              },
              stop: () => {
                var bb;
                null === (bb = rb) || void 0 === bb || bb.stop()
              }
            })) return Cb
        }
        return rb = ob.play(bb, ab), rb.setRelativeVolume(ub), rb.setPannerAttr({
          refDistance: Yb
        }), rb.setPosition([Kb[0], Kb[1] + Ob.e.Tl * Ob.e.playerEyeToHeightRatio, Kb[2]]), rb
      }
      preload(bb) {
        this.loadSheet(this.stereoSheets, (0, Bb.m)(bb))
      }
      loadSheet(bb, ub) {
        let hb = bb[ub];
        return hb || ((0, Kb.b)(ub), hb = new db({
          src: ub,
          isSoundSprite: !0,
          volumeScalar: 1
        }), hb.setGlobalVolume(ob.d.get("soundVolume")), bb[ub] = hb), hb
      }
      freeSheetsAfterGame() {
        for (const bb of [this.stereoSheets, this.spatialSheets])
          for (const [ub, hb] of Object.entries(bb)) !lb.b.has(ub) && hb.loaded() && (hb.unloadOnceIdle(), delete bb[ub])
      }
    }
  },
  36485: (bb, ub, hb) => {
    function Bb(bb, ub) {
      var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb;
      return bb.name === ub.name && ((null === (hb = bb.attributes) || void 0 === hb || null === (Bb = hb.customAttributes) || void 0 === Bb ? void 0 : Bb.stackKey) === (null === (Ob = ub.attributes) || void 0 === Ob || null === (Gb = Ob.customAttributes) || void 0 === Gb ? void 0 : Gb.stackKey) && (!0 !== (null === (Ub = bb.attributes) || void 0 === Ub || null === (Lb = Ub.customAttributes) || void 0 === Lb ? void 0 : Lb.unstackable) && !0 !== (null === (Yb = ub.attributes) || void 0 === Yb || null === (Sb = Yb.customAttributes) || void 0 === Sb ? void 0 : Sb.unstackable)))
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  36591: (bb, ub, hb) => {
    function Bb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Ob(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Bb(bb)
    }

    function Gb(bb) {
      return bb.includes(" Strongbed")
    }

    function Ub(bb) {
      return Bb(bb) || Ob(bb) || Gb(bb)
    }
    hb.d(ub, {
      b: () => Ub,
      f: () => Bb,
      g: () => Gb,
      i: () => Ob
    })
  },
  36584: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb
    });
    var Bb = hb(36591),
      Ob = hb(9181);
    const Gb = [],
      Ub = [],
      Lb = [],
      Yb = [];
    for (const ab of Object.keys(Ob.l))(0, Bb.f)(ab) ? Gb.push(ab) : (0, Bb.i)(ab) && Ub.push(ab), (0, Bb.g)(ab) && Lb.push(ab), (ab.includes(" Bed Head") || ab.includes(" Strongbed Head")) && Yb.push(ab);
    const Sb = {
      leafBeds: Gb,
      woolBeds: Ub,
      strongBeds: Lb,
      beds: [...Gb, ...Ub, ...Lb],
      bedHeads: Yb,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6213: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      f: () => Ob,
      i: () => Yb,
      l: () => Gb,
      m: () => Sb,
      n: () => Bb,
      o: () => Lb
    });
    let Bb = function(bb) {
        return bb[bb.DEFAULT = 0] = "DEFAULT", bb[bb.BOAT = 1] = "BOAT", bb[bb.GLIDER = 2] = "GLIDER", bb[bb.BALLOON = 3] = "BALLOON", bb[bb.SLEEPING = 4] = "SLEEPING", bb[bb.RIDING_MOB = 5] = "RIDING_MOB", bb[bb.CAR = 6] = "CAR", bb[bb.HOVERCRAFT = 7] = "HOVERCRAFT", bb
      }({}),
      Ob = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.OBSIDIAN = 1] = "OBSIDIAN", bb[bb.SPEED = 2] = "SPEED", bb
      }({}),
      Gb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.IRON = 1] = "IRON", bb[bb.GOLD = 2] = "GOLD", bb[bb.DIAMOND = 3] = "DIAMOND", bb
      }({}),
      Ub = function(bb) {
        return bb[bb.YELLOW = 0] = "YELLOW", bb[bb.WHITE = 1] = "WHITE", bb[bb.RED = 2] = "RED", bb[bb.PURPLE = 3] = "PURPLE", bb[bb.PINK = 4] = "PINK", bb[bb.ORANGE = 5] = "ORANGE", bb[bb.MAGENTA = 6] = "MAGENTA", bb[bb.LIME = 7] = "LIME", bb[bb.LIGHT_GRAY = 8] = "LIGHT_GRAY", bb[bb.LIGHT_BLUE = 9] = "LIGHT_BLUE", bb[bb.GREEN = 10] = "GREEN", bb[bb.GRAY = 11] = "GRAY", bb[bb.CYAN = 12] = "CYAN", bb[bb.BROWN = 13] = "BROWN", bb[bb.BLUE = 14] = "BLUE", bb[bb.BLACK = 15] = "BLACK", bb
      }({}),
      Lb = function(bb) {
        return bb[bb.ROTATION_1 = 0] = "ROTATION_1", bb[bb.ROTATION_2 = 1] = "ROTATION_2", bb[bb.ROTATION_3 = 2] = "ROTATION_3", bb[bb.ROTATION_4 = 3] = "ROTATION_4", bb
      }({}),
      Yb = function(bb) {
        return bb[bb.KART = 0] = "KART", bb[bb.OFF_ROADER = 1] = "OFF_ROADER", bb[bb.CAR = 2] = "CAR", bb[bb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", bb[bb.ARMORED_CAR = 4] = "ARMORED_CAR", bb[bb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", bb[bb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", bb[bb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", bb
      }({});
    Bb.DEFAULT, Bb.BOAT, Ob.SPEED, Bb.GLIDER, Gb.DIAMOND, Bb.BALLOON, Ub.BLACK, Bb.SLEEPING, Lb.ROTATION_4, Bb.RIDING_MOB, Bb.CAR, Yb.MOONSTONE_MINING_DRILL, Bb.HOVERCRAFT;
    let Sb = function(bb) {
      return bb[bb.NORMAL = 0] = "NORMAL", bb[bb.GLIDING = 1] = "GLIDING", bb[bb.FLOATING = 2] = "FLOATING", bb
    }({})
  },
  9062: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);