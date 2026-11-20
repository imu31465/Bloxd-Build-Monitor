export const id = 113;
export const ids = [113];
export const modules = {
  36253: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => lb,
      e: () => ub
    });
    sb(8895);
    var kb = sb(64),
      Wb = sb(1423),
      ab = sb(1870),
      Tb = sb(1912),
      Ub = sb(19),
      Ib = sb(2337),
      Hb = sb(36258),
      fb = sb(36263),
      Mb = sb(8867),
      Xb = sb(8888),
      nb = sb(8905),
      mb = sb(1087);
    const lb = (0, kb.memo)((function() {
      var bb;
      const {
        isTouchScreen: cb,
        clientEscMenuOptions: sb,
        scriptedCameraFacing: ab,
        crosshairShownOverride: lb,
        crosshairGameView: eb
      } = (0, Ub.p)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Cb = (0, Ib.d)("gunshotOrigin"), Nb = (0, kb.useRef)(null), Vb = (0, kb.useRef)(!1), [Lb, Yb] = (0, kb.useState)(Qb);
      (0, Wb.f)("cameraZoomSet", Yb), (0, kb.useEffect)((() => {
        Yb(Qb())
      }), []);
      const hb = (0, Tb.f)("heldItemAim"),
        gb = hb.gun,
        Bb = (0, nb.e)(),
        tb = (0, kb.useRef)(Bb);
      tb.current = Bb;
      const [yb, Pb] = (0, kb.useState)(!1);
      (0, kb.useEffect)((() => (0, fb.i)("crosshairAccuracy", ub)), []), (0, Wb.f)("mouseState", (bb => {
        let {
          isDown: cb
        } = bb;
        Vb.current = cb, Nb.current && (Nb.current.style.transform = (0, Xb.f)(cb, tb.current.growOnClick)), "shapes" === tb.current.style && Pb(cb)
      }));
      const Db = (0, Mb.f)(cb, sb.touchActionButtons);
      return (null !== (bb = (0, Hb.e)(eb, lb)) && void 0 !== bb ? bb : (0, Hb.k)(hb, Lb > 1, Db, Cb)) ? "movement" === ab || "cursor" === ab ? null : (0, mb.jsxs)(mb.Fragment, {
        children: [gb && (0, mb.jsx)(Jb, {
          custom: Bb.forGuns && "shapes" === Bb.style ? Bb : null,
          touch: cb
        }), !gb && (0, mb.jsx)(Xb.b, {
          settings: Bb,
          touch: cb,
          pressRef: Nb,
          pressed: "shapes" === Bb.style ? yb : Vb.current
        })]
      }) : null
    }));

    function Qb() {
      return ab.gameBridge.lookup("cameraZoom", null)
    }
    const eb = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Cb = {
        current: null
      },
      Nb = {
        current: null
      };
    let Vb = 0,
      Lb = 0;

    function ub(bb) {
      Lb = bb, eb[0].current || Cb.current || Nb.current ? hb(bb) : Vb = bb
    }

    function Yb(bb) {
      return ((0, Hb.g)(bb) - (0, Hb.g)(0)) * window.innerHeight / 100
    }

    function hb(bb) {
      var cb;
      if (null === (cb = Nb.current) || void 0 === cb || cb.call(Nb, Yb(bb)), eb[0].current) {
        const cb = `${(0,Hb.g)(bb)}vh`;
        eb[0].current.style.transform = `translateX(calc(0px - ${cb}))`, eb[1].current.style.transform = `translateX(calc(0px + ${cb}))`, eb[2].current.style.transform = `translateY(calc(0px - ${cb}))`, eb[3].current.style.transform = `translateY(calc(0px + ${cb}))`
      }
      Cb.current && (Cb.current.style.filter = `blur(${Math.round(bb/10)}px)`)
    }

    function Jb(bb) {
      let {
        custom: cb,
        touch: sb
      } = bb;
      const ab = (0, Wb.h)("aimingOverlay", "none"),
        Tb = "1.2vh",
        Ub = "0.3vh";
      (0, kb.useEffect)((() => {
        Vb && hb(Vb)
      }), []);
      const Ib = (0, kb.useRef)(null !== cb);
      return (0, kb.useLayoutEffect)((() => {
        var bb;
        cb ? null === (bb = Nb.current) || void 0 === bb || bb.call(Nb, Yb(Lb)) : Ib.current && hb(Lb);
        Ib.current = null !== cb
      }), [cb]), (0, mb.jsxs)(mb.Fragment, {
        children: ["sniper" === ab && (0, mb.jsxs)("div", {
          ref: Cb,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, mb.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, mb.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, mb.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, mb.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, mb.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === ab ? 0 : 1
          },
          children: [cb && (0, mb.jsx)(Xb.b, {
            settings: cb,
            touch: sb,
            spreadRef: Nb
          }), !cb && (0, mb.jsxs)(mb.Fragment, {
            children: [(0, mb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Tb,
                height: Ub,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: eb[0]
            }), (0, mb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Tb,
                height: Ub,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: eb[1]
            }), (0, mb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ub,
                height: Tb,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: eb[2]
            }), (0, mb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ub,
                height: Tb,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: eb[3]
            })]
          })]
        })]
      })
    }
  },
  8888: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Xb,
      f: () => Mb
    });
    sb(8895);
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(64),
      Tb = sb(8871);

    function Ub(bb, cb) {
      return Math.max(1, Math.round(bb * cb))
    }

    function Ib(bb, cb, sb) {
      const kb = 2 * sb >= cb - 1;
      return {
        x: bb,
        y: bb,
        size: cb,
        border: Math.min(sb, Math.floor(cb / 2)),
        filled: kb
      }
    }
    var Hb = sb(1087);
    const fb = 1.4;

    function Mb(bb, cb) {
      return bb && cb ? `scale(${fb})` : "scale(1)"
    }

    function Xb(bb) {
      return "classic" === bb.settings.style ? (0, Hb.jsx)(lb, {
        ...bb
      }) : (0, Hb.jsx)(ub, {
        ...bb
      })
    }
    const nb = .125;

    function mb(bb, cb) {
      const sb = {};
      if (bb.color !== Tb.g.color && (sb.color = (0, Tb.n)(bb.color)), bb.opacity !== Tb.g.opacity && (sb.opacity = bb.opacity / 100), bb.outline !== Tb.g.outline || bb.outlineColor !== Tb.g.outlineColor) {
        const cb = bb.outline,
          kb = (0, Tb.n)(bb.outlineColor);
        sb.textShadow = cb > 0 ? `-${cb}px 0 ${kb}, 0 ${cb}px ${kb}, ${cb}px 0 ${kb}, 0 -${cb}px ${kb}` : "none"
      }
      if (bb.size !== Tb.g.size) {
        const kb = bb.size / 100;
        sb.fontSize = cb ? `calc(max(1.3rem, 18px) * ${kb})` : `calc(1.3rem * ${kb})`, sb.marginTop = `-${nb}em`, sb.transformOrigin = `50% calc(50% + ${nb}em)`
      }
      return sb
    }

    function lb(bb) {
      let {
        settings: cb,
        touch: sb,
        inPreview: kb,
        inEditor: ab,
        pressed: Tb = !1,
        pressRef: Ub
      } = bb;
      return (0, Hb.jsx)("div", {
        className: Wb()("Crosshair", {
          Touch: sb,
          CrosshairInPreview: kb,
          CrosshairInEditor: ab || kb
        }),
        ref: Ub,
        style: {
          transform: Mb(Tb, cb.growOnClick),
          ...mb(cb, sb)
        },
        children: "+"
      })
    }

    function Qb(bb, cb) {
      return bb / cb + "px"
    }

    function eb(bb, cb, sb, kb) {
      return {
        ...Vb(bb, cb, sb),
        width: Qb(bb.w, sb),
        height: Qb(bb.h, sb),
        background: kb
      }
    }

    function Cb(bb, cb, sb) {
      return {
        left: Qb(bb.x, cb),
        top: Qb(bb.y, cb),
        width: Qb(bb.size, cb),
        height: Qb(bb.size, cb),
        borderWidth: Qb(bb.border, cb),
        borderColor: sb,
        background: bb.filled ? sb : void 0
      }
    }
    const Nb = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Vb(bb, cb, sb) {
      const [kb, Wb] = bb.arm ? Nb[bb.arm] : [0, 0], ab = Math.round(cb * sb);
      return {
        left: Qb(bb.x + kb * ab, sb),
        top: Qb(bb.y + Wb * ab, sb)
      }
    }

    function Lb(bb) {
      return bb.arm ? {
        "data-arm": bb.arm,
        "data-x": bb.x,
        "data-y": bb.y
      } : {}
    }

    function ub(bb) {
      let {
        settings: cb,
        inPreview: sb,
        inEditor: kb,
        pressed: Mb = !1,
        spread: Xb,
        spreadRef: nb
      } = bb;
      const mb = (0, ab.useRef)(null),
        {
          box: lb,
          dpr: Qb
        } = function(bb) {
          const [cb, sb] = (0, ab.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ab.useLayoutEffect)((() => {
            const cb = bb.current;
            if (!cb) return;
            const kb = () => {
              const bb = cb.getBoundingClientRect(),
                kb = window.devicePixelRatio || 1;
              sb((cb => cb.dpr === kb && cb.box.left === bb.left && cb.box.top === bb.top && cb.box.width === bb.width && cb.box.height === bb.height ? cb : {
                box: {
                  left: bb.left,
                  top: bb.top,
                  width: bb.width,
                  height: bb.height
                },
                dpr: kb
              }))
            };
            kb();
            const Wb = new ResizeObserver(kb);
            return Wb.observe(cb), window.addEventListener("resize", kb), window.addEventListener("scroll", kb, !0), () => {
              Wb.disconnect(), window.removeEventListener("resize", kb), window.removeEventListener("scroll", kb, !0)
            }
          }), [bb]), cb
        }(mb),
        Nb = (0, ab.useRef)(Qb);
      Nb.current = Qb;
      const ub = function(bb, cb) {
          const sb = Ub(bb.lineThickness, cb),
            kb = Ub(bb.lineLength, cb),
            Wb = Math.round(bb.gap * cb),
            ab = Ub(bb.dotSize, cb),
            Tb = bb.outline > 0 ? Ub(bb.outline, cb) : 0,
            Hb = Ub(bb.circleThickness, cb),
            fb = bb.circle ? Math.round(bb.circleRadius * cb * 2 + Hb) : 0,
            Mb = function(bb, cb, sb, kb) {
              return bb.lines ? cb : bb.dot ? sb : bb.circle && kb % 2 === 0 ? 2 : 1
            }(bb, sb, ab, fb),
            Xb = [];
          if (bb.lines && (Xb.push({
              x: Mb + Wb,
              y: 0,
              w: kb,
              h: sb,
              arm: "right"
            }), Xb.push({
              x: -Wb - kb,
              y: 0,
              w: kb,
              h: sb,
              arm: "left"
            }), Xb.push({
              x: 0,
              y: Mb + Wb,
              w: sb,
              h: kb,
              arm: "down"
            }), bb.tStyle || Xb.push({
              x: 0,
              y: -Wb - kb,
              w: sb,
              h: kb,
              arm: "up"
            }), 0 === Wb && Xb.push({
              x: 0,
              y: 0,
              w: sb,
              h: sb
            })), bb.dot) {
            const bb = Math.floor((Mb - ab) / 2);
            Xb.push({
              x: bb,
              y: bb,
              w: ab,
              h: ab
            })
          }
          const nb = Xb.map((bb => ({
            ...bb,
            x: bb.x - Tb,
            y: bb.y - Tb,
            w: bb.w + 2 * Tb,
            h: bb.h + 2 * Tb
          })));
          let mb = null,
            lb = null;
          if (bb.circle) {
            const bb = fb + ((fb - Mb) % 2 === 0 ? 0 : 1),
              cb = (Mb - bb) / 2;
            mb = Ib(cb, bb, Hb), Tb > 0 && (lb = Ib(cb - Tb, bb + 2 * Tb, Hb + 2 * Tb))
          }
          return {
            cell: Mb,
            fills: Xb,
            outlines: Tb > 0 ? nb : [],
            ring: mb,
            ringOutline: lb
          }
        }(Mb && cb.growOnClick ? function(bb, cb) {
          return {
            ...bb,
            outline: bb.outline * cb,
            lineLength: bb.lineLength * cb,
            lineThickness: bb.lineThickness * cb,
            gap: bb.gap * cb,
            dotSize: bb.dotSize * cb,
            circleRadius: bb.circleRadius * cb,
            circleThickness: bb.circleThickness * cb
          }
        }(cb, fb) : cb, Qb),
        Yb = function(bb, cb, sb) {
          const kb = Math.round((bb.left + bb.width / 2) * sb - cb / 2),
            Wb = Math.round((bb.top + bb.height / 2) * sb - cb / 2);
          return {
            x: kb / sb - bb.left,
            y: Wb / sb - bb.top
          }
        }(lb, ub.cell, Qb),
        hb = (0, Tb.n)(cb.color),
        Jb = (0, Tb.n)(cb.outlineColor),
        gb = (0, ab.useRef)(0);
      (0, ab.useLayoutEffect)((() => {
        if (nb) return nb.current = bb => {
          var cb;
          gb.current = bb, null === (cb = mb.current) || void 0 === cb || cb.querySelectorAll("[data-arm]").forEach((cb => {
            Object.assign(cb.style, Vb(function(bb) {
              return {
                x: Number(bb.dataset.x),
                y: Number(bb.dataset.y),
                arm: bb.dataset.arm
              }
            }(cb), bb, Nb.current))
          }))
        }, () => {
          nb.current = null
        }
      }), [nb]);
      const Bb = null !== Xb && void 0 !== Xb ? Xb : gb.current;
      return (0, Hb.jsx)("div", {
        ref: mb,
        className: Wb()("CrosshairShapes", {
          CrosshairInPreview: sb,
          CrosshairInEditor: kb || sb,
          CrosshairSpreads: void 0 !== nb
        }),
        children: (0, Hb.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Yb.x,
            top: Yb.y,
            opacity: cb.opacity / 100
          },
          children: (0, Hb.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [ub.ringOutline && (0, Hb.jsx)("div", {
              className: "CrosshairRing",
              style: Cb(ub.ringOutline, Qb, Jb)
            }), ub.outlines.map(((bb, cb) => (0, Hb.jsx)("div", {
              className: "CrosshairPart",
              ...Lb(bb),
              style: eb(bb, Bb, Qb, Jb)
            }, `o${cb}`))), ub.ring && (0, Hb.jsx)("div", {
              className: "CrosshairRing",
              style: Cb(ub.ring, Qb, hb)
            }), ub.fills.map(((bb, cb) => (0, Hb.jsx)("div", {
              className: "CrosshairPart",
              ...Lb(bb),
              style: eb(bb, Bb, Qb, hb)
            }, `f${cb}`)))]
          })
        })
      })
    }
  },
  8897: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => fb,
      f: () => Qb,
      i: () => lb
    });
    var kb = sb(8871);
    const Wb = "XH1-",
      ab = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Tb = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Ub = ["color", "outlineColor"],
      Ib = 1 + 3 * Ub.length + Tb.length + 1,
      Hb = Math.ceil(8 * Ib / Math.log2(62)),
      fb = Wb.length + Hb;

    function Mb(bb) {
      let cb = 90;
      for (const sb of bb) cb = 31 * cb + sb & 255;
      return cb
    }
    const Xb = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      nb = BigInt(Xb.length);

    function mb(bb, cb) {
      let sb = 0n;
      for (const Wb of bb) {
        const bb = Xb.indexOf(Wb);
        if (bb < 0) return null;
        sb = sb * nb + BigInt(bb)
      }
      if (sb >> BigInt(8 * cb) !== 0n) return null;
      const kb = [];
      for (let Wb = 0; Wb < cb; Wb++) kb.unshift(Number(0xffn & sb)), sb >>= 8n;
      return kb
    }

    function lb(bb) {
      let cb = "shapes" === bb.style ? 1 : 0;
      ab.forEach(((sb, kb) => {
        bb[sb] && (cb |= 1 << kb + 1)
      }));
      const sb = [cb];
      for (const Wb of Ub) {
        const cb = (0, kb.k)(Wb, bb[Wb]);
        sb.push(cb >> 16 & 255, cb >> 8 & 255, 255 & cb)
      }
      for (const Wb of Tb) {
        const {
          min: cb,
          step: ab
        } = kb.c[Wb];
        sb.push(Math.round(((0, kb.k)(Wb, bb[Wb]) - cb) / ab))
      }
      return sb.push(Mb(sb)), Wb + function(bb, cb) {
        let sb = 0n;
        for (const Wb of bb) sb = sb << 8n | BigInt(Wb);
        let kb = "";
        for (let Wb = 0; Wb < cb; Wb++) kb = Xb[Number(sb % nb)] + kb, sb /= nb;
        return kb
      }(sb, Hb)
    }

    function Qb(bb) {
      for (const cb of bb.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Hb}})`, "gi"))) {
        const bb = eb(mb(cb[1], Ib));
        if (bb) return bb
      }
      return null
    }

    function eb(bb) {
      if (!bb || bb.length !== Ib || Mb(bb.slice(0, -1)) !== bb[bb.length - 1]) return null;
      const cb = bb[0],
        sb = {
          ...kb.g,
          style: 1 & cb ? "shapes" : "classic"
        };
      ab.forEach(((bb, kb) => {
        sb[bb] = 0 !== (cb & 1 << kb + 1)
      }));
      let Wb = 1;
      for (const kb of Ub) sb[kb] = bb[Wb] << 16 | bb[Wb + 1] << 8 | bb[Wb + 2], Wb += 3;
      for (const ab of Tb) {
        const {
          min: cb,
          step: Tb
        } = kb.c[ab];
        sb[ab] = (0, kb.k)(ab, cb + bb[Wb] * Tb), Wb++
      }
      return sb
    }
  },
  8871: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb,
      g: () => Wb,
      k: () => ab,
      n: () => Hb,
      p: () => Ib,
      q: () => fb,
      r: () => Ub,
      u: () => Tb
    });
    const kb = {
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
      Wb = Object.freeze({
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

    function ab(bb, cb) {
      var sb;
      const {
        min: ab,
        max: Tb,
        step: Ub
      } = kb[bb];
      if (!Number.isFinite(cb)) return Wb[bb];
      const Ib = (null !== (sb = String(Ub).split(".")[1]) && void 0 !== sb ? sb : "").length,
        Hb = Number((Math.round(cb / Ub) * Ub).toFixed(Ib));
      return Math.min(Tb, Math.max(ab, Hb))
    }

    function Tb(bb, cb, sb) {
      const kb = "number" === typeof sb ? ab(cb, sb) : sb;
      return {
        ...bb,
        [cb]: kb
      }
    }

    function Ub(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Wb).every((kb => sb.includes(kb) || bb[kb] === cb[kb]))
    }

    function Ib(bb) {
      return Ub(bb, Wb)
    }

    function Hb(bb) {
      return `#${bb.toString(16).padStart(6,"0")}`
    }

    function fb(bb) {
      const cb = /^#?([0-9a-f]{6})$/i.exec(bb.trim());
      return cb ? parseInt(cb[1], 16) : null
    }
  },
  8905: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Mb,
      e: () => Xb
    });
    var kb = sb(64),
      Wb = sb(37),
      ab = sb(8897),
      Tb = sb(8871);
    const Ub = "crosshairCode";
    let Ib = null;
    const Hb = new Set;

    function fb() {
      if (null === Ib) {
        var bb;
        const cb = Wb.h.getItem(Ub);
        Ib = null !== (bb = "string" === typeof cb ? (0, ab.f)(cb) : null) && void 0 !== bb ? bb : Tb.g
      }
      return Ib
    }

    function Mb(bb) {
      Ib = bb, (0, Tb.p)(bb) ? Wb.h.removeItem(Ub) : Wb.h.setItem(Ub, (0, ab.i)(bb));
      for (const cb of Hb) cb()
    }

    function Xb() {
      const [bb, cb] = (0, kb.useState)(fb);
      return (0, kb.useEffect)((() => {
        const bb = () => {
          cb(fb())
        };
        return bb(), sb = bb, Hb.add(sb), () => {
          Hb.delete(sb)
        };
        var sb
      }), []), bb
    }
  },
  36365: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      e: () => Ib,
      g: () => Tb
    });
    var kb = sb(628),
      Wb = sb(2612);

    function ab(bb) {
      return bb === (0, Wb.e)().sbb ? (0, Wb.e)().yJ : bb
    }

    function Tb(bb) {
      return !(0, kb.L)(bb) && ab(bb) === (0, Wb.e)().yJ
    }
    const Ub = "gravity";

    function Ib() {
      return (0, Wb.e)().physics[Ub][1]
    }
  },
  36095: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      countDecodesAs: () => fb,
      decodedAudio: () => Mb
    });
    var kb = sb(4579);
    const Wb = kb.Howler,
      ab = new Map;
    let Tb = 0;
    const Ub = {
        song: 0,
        sheet: 0
      },
      Ib = new WeakMap,
      Hb = new WeakSet;

    function fb(bb, cb) {
      return Ib.set(bb, cb), bb
    }

    function Mb() {
      return {
        bytes: Tb,
        songsDecoded: Ub.song,
        sheetsDecoded: Ub.sheet
      }
    }

    function Xb(bb) {
      if (Hb.has(bb)) return;
      Hb.add(bb);
      const cb = 1 === bb.decodeAudioData.length,
        sb = bb.decodeAudioData.bind(bb);
      bb.decodeAudioData = (bb, kb, Hb) => {
        const fb = bb => {
          const cb = Wb._howls.filter((bb => "loaded" !== bb._state));
          try {
            null === kb || void 0 === kb || kb(bb)
          } finally {
            const sb = cb.find((bb => "loaded" === bb._state));
            void 0 !== sb && "string" === typeof sb._src && function(bb, cb, sb) {
              var kb;
              Tb += sb - (null !== (kb = ab.get(cb)) && void 0 !== kb ? kb : 0), ab.set(cb, sb);
              const Wb = Ib.get(bb);
              void 0 !== Wb && Ub[Wb]++
            }(sb, sb._src, bb.length * bb.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return bb
        };
        if (!cb) return sb(bb, fb, Hb);
        const Mb = sb(bb).then(fb);
        return Mb.catch((bb => {
          null === Hb || void 0 === Hb || Hb(bb)
        })), Mb
      }
    }
    const nb = kb.Howl.prototype,
      mb = nb.init;
    nb.init = function(bb) {
      return kb.Howler.volume(), Wb.ctx && Xb(Wb.ctx), mb.call(this, bb)
    };
    const lb = nb.unload;
    nb.unload = function() {
      const bb = this._src,
        cb = lb.call(this);
      if ("string" !== typeof bb) return cb;
      const sb = ab.get(bb);
      return void 0 !== sb && function(bb) {
        return !Wb._howls.some((cb => cb._src === bb || "string" === typeof cb._src && bb.indexOf(cb._src) >= 0))
      }(bb) && (ab.delete(bb), Tb -= sb), cb
    }
  },
  36356: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Vb
    });
    var kb = sb(36359),
      Wb = sb(223),
      ab = sb(4579),
      Tb = sb(36095),
      Ub = sb(36374),
      Ib = sb(36365),
      Hb = sb(356),
      fb = sb.n(Hb),
      Mb = sb(1208),
      Xb = sb(2612),
      nb = sb(36372),
      mb = sb(26),
      lb = sb(19),
      Qb = sb(36367);
    const eb = new Set(["note"]);
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
    class Nb {
      constructor(bb) {
        let cb, {
          src: sb,
          volumeScalar: Wb,
          isSoundSprite: Ib
        } = bb;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, Ib ? (cb = (0, kb.f)(sb), this._spriteTrackSrc = cb) : cb = {
          src: Mb.clientSideServerUrls.staticUrl + sb
        }, this._volumeMultiplier = new Ub.h, this._volumeMultiplier.setMultiplierType("persistentScalar", Wb), this._howl = (0, Tb.countDecodesAs)(new ab.Howl({
          ...cb,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let bb, cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          sb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (cb) {
          var kb;
          if (null === (kb = this._spriteTrackSrc) || void 0 === kb || !kb.sprite[cb]) throw new Error("No such sprite in your spritetrack");
          bb = this._howl.play(cb)
        } else bb = this._howl.play();
        sb && this._howl.loop(!0, bb);
        let Wb = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), bb);
        const ab = {
          stop: () => (this._howl.stop(bb), ab),
          fade: (cb, sb, kb) => (this._howl.fade(cb, sb, kb, bb), ab),
          rate: cb => (this._howl.rate(cb, bb), ab),
          stopsAtOnce: () => this._howl.playing(bb) && !this._howl._playLock,
          isAlive: () => {
            const cb = this._howl._soundById(bb);
            return !this._loadFailed && !!cb && !cb._ended
          },
          getDurationMs: () => this._howl._soundById(bb) ? 1e3 * this._howl.duration(bb) / this._howl.rate(bb) : 0,
          getVolume: () => Wb * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Wb,
          setRelativeVolume: cb => {
            if (cb > 1) throw new Error("Volume should be <= 1");
            return Wb = lb.d.get("soundOnFromAd") ? cb : 0, this._howl.volume(Math.min(1, Wb * this._volumeMultiplier.getTotalMultipliedVal()), bb), ab
          },
          setPannerAttr: cb => {
            let {
              coneInnerAngle: sb,
              coneOuterAngle: kb = 360,
              coneOuterGain: Wb,
              distanceModel: Tb,
              maxDistance: Ub,
              panningModel: Ib,
              refDistance: Hb,
              rolloffFactor: fb
            } = cb;
            return this._setPannerAttr({
              id: bb,
              coneInnerAngle: sb,
              coneOuterAngle: kb,
              coneOuterGain: Wb,
              distanceModel: Tb,
              maxDistance: Ub,
              panningModel: Ib,
              refDistance: Hb,
              rolloffFactor: fb
            }), ab
          },
          setPosition: cb => (this._howl.pos(cb[2], cb[1], cb[0], bb), ab)
        };
        return ab
      }
      setGlobalVolume(bb) {
        this._volumeMultiplier.setMultiplierType("globalVolume", bb), this._howl.volume(bb)
      }
      _setPannerAttr(bb) {
        let {
          id: cb,
          coneInnerAngle: sb = 360,
          coneOuterAngle: kb = 360,
          coneOuterGain: Wb = 0,
          distanceModel: ab = "inverse",
          maxDistance: Tb = 1e3,
          panningModel: Ub = "HRTF",
          refDistance: Ib = nb.l,
          rolloffFactor: Hb = 1
        } = bb;
        this._howl.pannerAttr({
          coneOuterAngle: kb
        }, cb);
        const fb = {
          coneInnerAngle: sb,
          coneOuterAngle: kb,
          coneOuterGain: Wb,
          distanceModel: ab,
          maxDistance: Tb,
          panningModel: Ub,
          refDistance: Ib,
          rolloffFactor: Hb
        };
        this._howl.pannerAttr(fb, cb)
      }
    }
    const Vb = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new Qb.c, mb.j.subscribe("appManagerUpdated|soundVolume", (bb => {
          const cb = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const sb of cb) sb.setGlobalVolume(bb)
        }))
      }
      play(bb, cb) {
        var sb;
        let ab, Tb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (sb = (0, Xb.e)()) || void 0 === sb ? void 0 : sb.yJ,
          Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nb.h,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nb.l,
          Mb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var mb;
        (0, Xb.e)() ? ab = !!Array.isArray(Tb) || (0, Ib.d)(Tb) !== (null === (mb = (0, Xb.e)()) || void 0 === mb ? void 0 : mb.yJ): ab = !1;
        const Vb = ab ? this.spatialSheets : this.stereoSheets,
          Lb = (0, kb.g)(bb);
        if (!Vb[Lb]) {
          const bb = new Nb({
            src: Lb,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          bb.setGlobalVolume(lb.d.get("soundVolume")), Vb[Lb] = bb
        }
        const ub = Vb[Lb];
        if (!ab) {
          const sb = ub.play(bb, Mb);
          return sb.setRelativeVolume(cb), sb
        }
        const Yb = (0, Xb.e)(),
          hb = Array.isArray(Tb) ? Tb : Yb.zN.aN(Tb),
          Jb = Yb.zN.aN(Yb.yJ);
        if (!hb || fb().sqrDist(hb, Jb) > Ub * Ub) return Cb;
        let gb;
        if (!Mb) {
          if (!this.spatialVoices.admit({
              group: eb.has(Lb) ? null : (0, Qb.e)(bb),
              loudness: (0, Qb.d)(cb, fb().VU(hb, Jb), Hb),
              startMs: performance.now(),
              getDurationMs: () => {
                var bb, cb;
                return null !== (bb = null === (cb = gb) || void 0 === cb ? void 0 : cb.getDurationMs()) && void 0 !== bb ? bb : 0
              },
              isAlive: () => {
                var bb, cb;
                return null !== (bb = null === (cb = gb) || void 0 === cb ? void 0 : cb.isAlive()) && void 0 !== bb && bb
              },
              canStop: () => {
                var bb, cb;
                return null !== (bb = null === (cb = gb) || void 0 === cb ? void 0 : cb.stopsAtOnce()) && void 0 !== bb && bb
              },
              stop: () => {
                var bb;
                null === (bb = gb) || void 0 === bb || bb.stop()
              }
            })) return Cb
        }
        return gb = ub.play(bb, Mb), gb.setRelativeVolume(cb), gb.setPannerAttr({
          refDistance: Hb
        }), gb.setPosition([hb[0], hb[1] + Wb.e.JC * Wb.e.playerEyeToHeightRatio, hb[2]]), gb
      }
    }
  },
  36418: (bb, cb, sb) => {
    function kb(bb, cb) {
      var sb, kb, Wb, ab, Tb, Ub, Ib, Hb;
      return bb.name === cb.name && ((null === (sb = bb.attributes) || void 0 === sb || null === (kb = sb.customAttributes) || void 0 === kb ? void 0 : kb.stackKey) === (null === (Wb = cb.attributes) || void 0 === Wb || null === (ab = Wb.customAttributes) || void 0 === ab ? void 0 : ab.stackKey) && (!0 !== (null === (Tb = bb.attributes) || void 0 === Tb || null === (Ub = Tb.customAttributes) || void 0 === Ub ? void 0 : Ub.unstackable) && !0 !== (null === (Ib = cb.attributes) || void 0 === Ib || null === (Hb = Ib.customAttributes) || void 0 === Hb ? void 0 : Hb.unstackable)))
    }
    sb.d(cb, {
      d: () => kb
    })
  },
  36505: (bb, cb, sb) => {
    function kb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Wb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !kb(bb)
    }

    function ab(bb) {
      return bb.includes(" Strongbed")
    }

    function Tb(bb) {
      return kb(bb) || Wb(bb) || ab(bb)
    }
    sb.d(cb, {
      e: () => Tb,
      f: () => kb,
      h: () => ab,
      j: () => Wb
    })
  },
  36502: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb
    });
    var kb = sb(36505),
      Wb = sb(9017);
    const ab = [],
      Tb = [],
      Ub = [],
      Ib = [];
    for (const fb of Object.keys(Wb.k))(0, kb.f)(fb) ? ab.push(fb) : (0, kb.j)(fb) && Tb.push(fb), (0, kb.h)(fb) && Ub.push(fb), (fb.includes(" Bed Head") || fb.includes(" Strongbed Head")) && Ib.push(fb);
    const Hb = {
      leafBeds: ab,
      woolBeds: Tb,
      strongBeds: Ub,
      beds: [...ab, ...Tb, ...Ub],
      bedHeads: Ib,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6134: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      i: () => Wb,
      m: () => Ib,
      q: () => ab,
      r: () => Hb,
      t: () => kb,
      w: () => Ub
    });
    let kb = function(bb) {
        return bb[bb.DEFAULT = 0] = "DEFAULT", bb[bb.BOAT = 1] = "BOAT", bb[bb.GLIDER = 2] = "GLIDER", bb[bb.BALLOON = 3] = "BALLOON", bb[bb.SLEEPING = 4] = "SLEEPING", bb[bb.RIDING_MOB = 5] = "RIDING_MOB", bb[bb.CAR = 6] = "CAR", bb[bb.HOVERCRAFT = 7] = "HOVERCRAFT", bb
      }({}),
      Wb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.OBSIDIAN = 1] = "OBSIDIAN", bb[bb.SPEED = 2] = "SPEED", bb
      }({}),
      ab = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.IRON = 1] = "IRON", bb[bb.GOLD = 2] = "GOLD", bb[bb.DIAMOND = 3] = "DIAMOND", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.YELLOW = 0] = "YELLOW", bb[bb.WHITE = 1] = "WHITE", bb[bb.RED = 2] = "RED", bb[bb.PURPLE = 3] = "PURPLE", bb[bb.PINK = 4] = "PINK", bb[bb.ORANGE = 5] = "ORANGE", bb[bb.MAGENTA = 6] = "MAGENTA", bb[bb.LIME = 7] = "LIME", bb[bb.LIGHT_GRAY = 8] = "LIGHT_GRAY", bb[bb.LIGHT_BLUE = 9] = "LIGHT_BLUE", bb[bb.GREEN = 10] = "GREEN", bb[bb.GRAY = 11] = "GRAY", bb[bb.CYAN = 12] = "CYAN", bb[bb.BROWN = 13] = "BROWN", bb[bb.BLUE = 14] = "BLUE", bb[bb.BLACK = 15] = "BLACK", bb
      }({}),
      Ub = function(bb) {
        return bb[bb.ROTATION_1 = 0] = "ROTATION_1", bb[bb.ROTATION_2 = 1] = "ROTATION_2", bb[bb.ROTATION_3 = 2] = "ROTATION_3", bb[bb.ROTATION_4 = 3] = "ROTATION_4", bb
      }({}),
      Ib = function(bb) {
        return bb[bb.KART = 0] = "KART", bb[bb.OFF_ROADER = 1] = "OFF_ROADER", bb[bb.CAR = 2] = "CAR", bb[bb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", bb[bb.ARMORED_CAR = 4] = "ARMORED_CAR", bb[bb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", bb[bb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", bb[bb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", bb
      }({});
    kb.DEFAULT, kb.BOAT, Wb.SPEED, kb.GLIDER, ab.DIAMOND, kb.BALLOON, Tb.BLACK, kb.SLEEPING, Ub.ROTATION_4, kb.RIDING_MOB, kb.CAR, Ib.MOONSTONE_MINING_DRILL, kb.HOVERCRAFT;
    let Hb = function(bb) {
      return bb[bb.NORMAL = 0] = "NORMAL", bb[bb.GLIDING = 1] = "GLIDING", bb[bb.FLOATING = 2] = "FLOATING", bb
    }({})
  },
  8895: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);