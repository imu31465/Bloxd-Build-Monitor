export const id = 113;
export const ids = [113];
export const modules = {
  36030: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Rb,
      f: () => ib
    });
    Ub(8884);
    var Ab = Ub(52),
      Mb = Ub(1345),
      Tb = Ub(1824),
      Eb = Ub(1858),
      Yb = Ub(19),
      Bb = Ub(2268),
      eb = Ub(36034),
      vb = Ub(36038),
      Lb = Ub(8836),
      Pb = Ub(8879),
      Xb = Ub(8892),
      jb = Ub(1023);
    const Rb = (0, Ab.memo)((function() {
      var bb;
      const {
        isTouchScreen: ab,
        clientEscMenuOptions: Ub,
        scriptedCameraFacing: Tb,
        crosshairShownOverride: Rb,
        crosshairGameView: yb
      } = (0, Yb.n)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Zb = (0, Bb.h)("gunshotOrigin"), Db = (0, Ab.useRef)(null), zb = (0, Ab.useRef)(!1), [xb, fb] = (0, Ab.useState)(kb);
      (0, Mb.f)("cameraZoomSet", fb), (0, Ab.useEffect)((() => {
        fb(kb())
      }), []);
      const mb = (0, Eb.k)("heldItemAim"),
        Nb = mb.gun,
        Wb = (0, Xb.g)(),
        Hb = (0, Ab.useRef)(Wb);
      Hb.current = Wb;
      const [Ib, db] = (0, Ab.useState)(!1);
      (0, Ab.useEffect)((() => (0, vb.g)("crosshairAccuracy", ib)), []), (0, Mb.f)("mouseState", (bb => {
        let {
          isDown: ab
        } = bb;
        zb.current = ab, Db.current && (Db.current.style.transform = (0, Pb.f)(ab, Hb.current.growOnClick)), "shapes" === Hb.current.style && db(ab)
      }));
      const Fb = (0, Lb.f)(ab, Ub.touchActionButtons);
      return (null !== (bb = (0, eb.e)(yb, Rb)) && void 0 !== bb ? bb : (0, eb.k)(mb, xb > 1, Fb, Zb)) ? "movement" === Tb || "cursor" === Tb ? null : (0, jb.jsxs)(jb.Fragment, {
        children: [Nb && (0, jb.jsx)(pb, {
          custom: Wb.forGuns && "shapes" === Wb.style ? Wb : null,
          touch: ab
        }), !Nb && (0, jb.jsx)(Pb.e, {
          settings: Wb,
          touch: ab,
          pressRef: Db,
          pressed: "shapes" === Wb.style ? Ib : zb.current
        })]
      }) : null
    }));

    function kb() {
      return Tb.gameBridge.lookup("cameraZoom", null)
    }
    const yb = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Zb = {
        current: null
      },
      Db = {
        current: null
      };
    let zb = 0,
      xb = 0;

    function ib(bb) {
      xb = bb, yb[0].current || Zb.current || Db.current ? mb(bb) : zb = bb
    }

    function fb(bb) {
      return ((0, eb.i)(bb) - (0, eb.i)(0)) * window.innerHeight / 100
    }

    function mb(bb) {
      var ab;
      if (null === (ab = Db.current) || void 0 === ab || ab.call(Db, fb(bb)), yb[0].current) {
        const ab = `${(0,eb.i)(bb)}vh`;
        yb[0].current.style.transform = `translateX(calc(0px - ${ab}))`, yb[1].current.style.transform = `translateX(calc(0px + ${ab}))`, yb[2].current.style.transform = `translateY(calc(0px - ${ab}))`, yb[3].current.style.transform = `translateY(calc(0px + ${ab}))`
      }
      Zb.current && (Zb.current.style.filter = `blur(${Math.round(bb/10)}px)`)
    }

    function pb(bb) {
      let {
        custom: ab,
        touch: Ub
      } = bb;
      const Tb = (0, Mb.i)("aimingOverlay", "none"),
        Eb = "1.2vh",
        Yb = "0.3vh";
      (0, Ab.useEffect)((() => {
        zb && mb(zb)
      }), []);
      const Bb = (0, Ab.useRef)(null !== ab);
      return (0, Ab.useLayoutEffect)((() => {
        var bb;
        ab ? null === (bb = Db.current) || void 0 === bb || bb.call(Db, fb(xb)) : Bb.current && mb(xb);
        Bb.current = null !== ab
      }), [ab]), (0, jb.jsxs)(jb.Fragment, {
        children: ["sniper" === Tb && (0, jb.jsxs)("div", {
          ref: Zb,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, jb.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, jb.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, jb.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, jb.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, jb.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Tb ? 0 : 1
          },
          children: [ab && (0, jb.jsx)(Pb.e, {
            settings: ab,
            touch: Ub,
            spreadRef: Db
          }), !ab && (0, jb.jsxs)(jb.Fragment, {
            children: [(0, jb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Eb,
                height: Yb,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: yb[0]
            }), (0, jb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Eb,
                height: Yb,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: yb[1]
            }), (0, jb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Yb,
                height: Eb,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: yb[2]
            }), (0, jb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Yb,
                height: Eb,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: yb[3]
            })]
          })]
        })]
      })
    }
  },
  8879: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb,
      f: () => Lb
    });
    Ub(8884);
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(52),
      Eb = Ub(8842);

    function Yb(bb, ab) {
      return Math.max(1, Math.round(bb * ab))
    }

    function Bb(bb, ab, Ub) {
      const Ab = 2 * Ub >= ab - 1;
      return {
        x: bb,
        y: bb,
        size: ab,
        border: Math.min(Ub, Math.floor(ab / 2)),
        filled: Ab
      }
    }
    var eb = Ub(1023);
    const vb = 1.4;

    function Lb(bb, ab) {
      return bb && ab ? `scale(${vb})` : "scale(1)"
    }

    function Pb(bb) {
      return "classic" === bb.settings.style ? (0, eb.jsx)(Rb, {
        ...bb
      }) : (0, eb.jsx)(ib, {
        ...bb
      })
    }
    const Xb = .125;

    function jb(bb, ab) {
      const Ub = {};
      if (bb.color !== Eb.d.color && (Ub.color = (0, Eb.i)(bb.color)), bb.opacity !== Eb.d.opacity && (Ub.opacity = bb.opacity / 100), bb.outline !== Eb.d.outline || bb.outlineColor !== Eb.d.outlineColor) {
        const ab = bb.outline,
          Ab = (0, Eb.i)(bb.outlineColor);
        Ub.textShadow = ab > 0 ? `-${ab}px 0 ${Ab}, 0 ${ab}px ${Ab}, ${ab}px 0 ${Ab}, 0 -${ab}px ${Ab}` : "none"
      }
      if (bb.size !== Eb.d.size) {
        const Ab = bb.size / 100;
        Ub.fontSize = ab ? `calc(max(1.3rem, 18px) * ${Ab})` : `calc(1.3rem * ${Ab})`, Ub.marginTop = `-${Xb}em`, Ub.transformOrigin = `50% calc(50% + ${Xb}em)`
      }
      return Ub
    }

    function Rb(bb) {
      let {
        settings: ab,
        touch: Ub,
        inPreview: Ab,
        inEditor: Tb,
        pressed: Eb = !1,
        pressRef: Yb
      } = bb;
      return (0, eb.jsx)("div", {
        className: Mb()("Crosshair", {
          Touch: Ub,
          CrosshairInPreview: Ab,
          CrosshairInEditor: Tb || Ab
        }),
        ref: Yb,
        style: {
          transform: Lb(Eb, ab.growOnClick),
          ...jb(ab, Ub)
        },
        children: "+"
      })
    }

    function kb(bb, ab) {
      return bb / ab + "px"
    }

    function yb(bb, ab, Ub, Ab) {
      return {
        ...zb(bb, ab, Ub),
        width: kb(bb.w, Ub),
        height: kb(bb.h, Ub),
        background: Ab
      }
    }

    function Zb(bb, ab, Ub) {
      return {
        left: kb(bb.x, ab),
        top: kb(bb.y, ab),
        width: kb(bb.size, ab),
        height: kb(bb.size, ab),
        borderWidth: kb(bb.border, ab),
        borderColor: Ub,
        background: bb.filled ? Ub : void 0
      }
    }
    const Db = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function zb(bb, ab, Ub) {
      const [Ab, Mb] = bb.arm ? Db[bb.arm] : [0, 0], Tb = Math.round(ab * Ub);
      return {
        left: kb(bb.x + Ab * Tb, Ub),
        top: kb(bb.y + Mb * Tb, Ub)
      }
    }

    function xb(bb) {
      return bb.arm ? {
        "data-arm": bb.arm,
        "data-x": bb.x,
        "data-y": bb.y
      } : {}
    }

    function ib(bb) {
      let {
        settings: ab,
        inPreview: Ub,
        inEditor: Ab,
        pressed: Lb = !1,
        spread: Pb,
        spreadRef: Xb
      } = bb;
      const jb = (0, Tb.useRef)(null),
        {
          box: Rb,
          dpr: kb
        } = function(bb) {
          const [ab, Ub] = (0, Tb.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Tb.useLayoutEffect)((() => {
            const ab = bb.current;
            if (!ab) return;
            const Ab = () => {
              const bb = ab.getBoundingClientRect(),
                Ab = window.devicePixelRatio || 1;
              Ub((ab => ab.dpr === Ab && ab.box.left === bb.left && ab.box.top === bb.top && ab.box.width === bb.width && ab.box.height === bb.height ? ab : {
                box: {
                  left: bb.left,
                  top: bb.top,
                  width: bb.width,
                  height: bb.height
                },
                dpr: Ab
              }))
            };
            Ab();
            const Mb = new ResizeObserver(Ab);
            return Mb.observe(ab), window.addEventListener("resize", Ab), window.addEventListener("scroll", Ab, !0), () => {
              Mb.disconnect(), window.removeEventListener("resize", Ab), window.removeEventListener("scroll", Ab, !0)
            }
          }), [bb]), ab
        }(jb),
        Db = (0, Tb.useRef)(kb);
      Db.current = kb;
      const ib = function(bb, ab) {
          const Ub = Yb(bb.lineThickness, ab),
            Ab = Yb(bb.lineLength, ab),
            Mb = Math.round(bb.gap * ab),
            Tb = Yb(bb.dotSize, ab),
            Eb = bb.outline > 0 ? Yb(bb.outline, ab) : 0,
            eb = Yb(bb.circleThickness, ab),
            vb = bb.circle ? Math.round(bb.circleRadius * ab * 2 + eb) : 0,
            Lb = function(bb, ab, Ub, Ab) {
              return bb.lines ? ab : bb.dot ? Ub : bb.circle && Ab % 2 === 0 ? 2 : 1
            }(bb, Ub, Tb, vb),
            Pb = [];
          if (bb.lines && (Pb.push({
              x: Lb + Mb,
              y: 0,
              w: Ab,
              h: Ub,
              arm: "right"
            }), Pb.push({
              x: -Mb - Ab,
              y: 0,
              w: Ab,
              h: Ub,
              arm: "left"
            }), Pb.push({
              x: 0,
              y: Lb + Mb,
              w: Ub,
              h: Ab,
              arm: "down"
            }), bb.tStyle || Pb.push({
              x: 0,
              y: -Mb - Ab,
              w: Ub,
              h: Ab,
              arm: "up"
            }), 0 === Mb && Pb.push({
              x: 0,
              y: 0,
              w: Ub,
              h: Ub
            })), bb.dot) {
            const bb = Math.floor((Lb - Tb) / 2);
            Pb.push({
              x: bb,
              y: bb,
              w: Tb,
              h: Tb
            })
          }
          const Xb = Pb.map((bb => ({
            ...bb,
            x: bb.x - Eb,
            y: bb.y - Eb,
            w: bb.w + 2 * Eb,
            h: bb.h + 2 * Eb
          })));
          let jb = null,
            Rb = null;
          if (bb.circle) {
            const bb = vb + ((vb - Lb) % 2 === 0 ? 0 : 1),
              ab = (Lb - bb) / 2;
            jb = Bb(ab, bb, eb), Eb > 0 && (Rb = Bb(ab - Eb, bb + 2 * Eb, eb + 2 * Eb))
          }
          return {
            cell: Lb,
            fills: Pb,
            outlines: Eb > 0 ? Xb : [],
            ring: jb,
            ringOutline: Rb
          }
        }(Lb && ab.growOnClick ? function(bb, ab) {
          return {
            ...bb,
            outline: bb.outline * ab,
            lineLength: bb.lineLength * ab,
            lineThickness: bb.lineThickness * ab,
            gap: bb.gap * ab,
            dotSize: bb.dotSize * ab,
            circleRadius: bb.circleRadius * ab,
            circleThickness: bb.circleThickness * ab
          }
        }(ab, vb) : ab, kb),
        fb = function(bb, ab, Ub) {
          const Ab = Math.round((bb.left + bb.width / 2) * Ub - ab / 2),
            Mb = Math.round((bb.top + bb.height / 2) * Ub - ab / 2);
          return {
            x: Ab / Ub - bb.left,
            y: Mb / Ub - bb.top
          }
        }(Rb, ib.cell, kb),
        mb = (0, Eb.i)(ab.color),
        pb = (0, Eb.i)(ab.outlineColor),
        Nb = (0, Tb.useRef)(0);
      (0, Tb.useLayoutEffect)((() => {
        if (Xb) return Xb.current = bb => {
          var ab;
          Nb.current = bb, null === (ab = jb.current) || void 0 === ab || ab.querySelectorAll("[data-arm]").forEach((ab => {
            Object.assign(ab.style, zb(function(bb) {
              return {
                x: Number(bb.dataset.x),
                y: Number(bb.dataset.y),
                arm: bb.dataset.arm
              }
            }(ab), bb, Db.current))
          }))
        }, () => {
          Xb.current = null
        }
      }), [Xb]);
      const Wb = null !== Pb && void 0 !== Pb ? Pb : Nb.current;
      return (0, eb.jsx)("div", {
        ref: jb,
        className: Mb()("CrosshairShapes", {
          CrosshairInPreview: Ub,
          CrosshairInEditor: Ab || Ub,
          CrosshairSpreads: void 0 !== Xb
        }),
        children: (0, eb.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: fb.x,
            top: fb.y,
            opacity: ab.opacity / 100
          },
          children: (0, eb.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [ib.ringOutline && (0, eb.jsx)("div", {
              className: "CrosshairRing",
              style: Zb(ib.ringOutline, kb, pb)
            }), ib.outlines.map(((bb, ab) => (0, eb.jsx)("div", {
              className: "CrosshairPart",
              ...xb(bb),
              style: yb(bb, Wb, kb, pb)
            }, `o${ab}`))), ib.ring && (0, eb.jsx)("div", {
              className: "CrosshairRing",
              style: Zb(ib.ring, kb, mb)
            }), ib.fills.map(((bb, ab) => (0, eb.jsx)("div", {
              className: "CrosshairPart",
              ...xb(bb),
              style: yb(bb, Wb, kb, mb)
            }, `f${ab}`)))]
          })
        })
      })
    }
  },
  8889: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb,
      f: () => kb,
      h: () => Rb
    });
    var Ab = Ub(8842);
    const Mb = "XH1-",
      Tb = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Eb = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Yb = ["color", "outlineColor"],
      Bb = 1 + 3 * Yb.length + Eb.length + 1,
      eb = Math.ceil(8 * Bb / Math.log2(62)),
      vb = Mb.length + eb;

    function Lb(bb) {
      let ab = 90;
      for (const Ub of bb) ab = 31 * ab + Ub & 255;
      return ab
    }
    const Pb = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Xb = BigInt(Pb.length);

    function jb(bb, ab) {
      let Ub = 0n;
      for (const Mb of bb) {
        const bb = Pb.indexOf(Mb);
        if (bb < 0) return null;
        Ub = Ub * Xb + BigInt(bb)
      }
      if (Ub >> BigInt(8 * ab) !== 0n) return null;
      const Ab = [];
      for (let Mb = 0; Mb < ab; Mb++) Ab.unshift(Number(0xffn & Ub)), Ub >>= 8n;
      return Ab
    }

    function Rb(bb) {
      let ab = "shapes" === bb.style ? 1 : 0;
      Tb.forEach(((Ub, Ab) => {
        bb[Ub] && (ab |= 1 << Ab + 1)
      }));
      const Ub = [ab];
      for (const Mb of Yb) {
        const ab = (0, Ab.e)(Mb, bb[Mb]);
        Ub.push(ab >> 16 & 255, ab >> 8 & 255, 255 & ab)
      }
      for (const Mb of Eb) {
        const {
          min: ab,
          step: Tb
        } = Ab.b[Mb];
        Ub.push(Math.round(((0, Ab.e)(Mb, bb[Mb]) - ab) / Tb))
      }
      return Ub.push(Lb(Ub)), Mb + function(bb, ab) {
        let Ub = 0n;
        for (const Mb of bb) Ub = Ub << 8n | BigInt(Mb);
        let Ab = "";
        for (let Mb = 0; Mb < ab; Mb++) Ab = Pb[Number(Ub % Xb)] + Ab, Ub /= Xb;
        return Ab
      }(Ub, eb)
    }

    function kb(bb) {
      for (const ab of bb.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${eb}})`, "gi"))) {
        const bb = yb(jb(ab[1], Bb));
        if (bb) return bb
      }
      return null
    }

    function yb(bb) {
      if (!bb || bb.length !== Bb || Lb(bb.slice(0, -1)) !== bb[bb.length - 1]) return null;
      const ab = bb[0],
        Ub = {
          ...Ab.d,
          style: 1 & ab ? "shapes" : "classic"
        };
      Tb.forEach(((bb, Ab) => {
        Ub[bb] = 0 !== (ab & 1 << Ab + 1)
      }));
      let Mb = 1;
      for (const Ab of Yb) Ub[Ab] = bb[Mb] << 16 | bb[Mb + 1] << 8 | bb[Mb + 2], Mb += 3;
      for (const Tb of Eb) {
        const {
          min: ab,
          step: Eb
        } = Ab.b[Tb];
        Ub[Tb] = (0, Ab.e)(Tb, ab + bb[Mb] * Eb), Mb++
      }
      return Ub
    }
  },
  8842: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      d: () => Mb,
      e: () => Tb,
      i: () => eb,
      l: () => Bb,
      n: () => vb,
      o: () => Yb,
      q: () => Eb
    });
    const Ab = {
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
      Mb = Object.freeze({
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

    function Tb(bb, ab) {
      var Ub;
      const {
        min: Tb,
        max: Eb,
        step: Yb
      } = Ab[bb];
      if (!Number.isFinite(ab)) return Mb[bb];
      const Bb = (null !== (Ub = String(Yb).split(".")[1]) && void 0 !== Ub ? Ub : "").length,
        eb = Number((Math.round(ab / Yb) * Yb).toFixed(Bb));
      return Math.min(Eb, Math.max(Tb, eb))
    }

    function Eb(bb, ab, Ub) {
      const Ab = "number" === typeof Ub ? Tb(ab, Ub) : Ub;
      return {
        ...bb,
        [ab]: Ab
      }
    }

    function Yb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Mb).every((Ab => Ub.includes(Ab) || bb[Ab] === ab[Ab]))
    }

    function Bb(bb) {
      return Yb(bb, Mb)
    }

    function eb(bb) {
      return `#${bb.toString(16).padStart(6,"0")}`
    }

    function vb(bb) {
      const ab = /^#?([0-9a-f]{6})$/i.exec(bb.trim());
      return ab ? parseInt(ab[1], 16) : null
    }
  },
  8892: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Lb,
      g: () => Pb
    });
    var Ab = Ub(52),
      Mb = Ub(31),
      Tb = Ub(8889),
      Eb = Ub(8842);
    const Yb = "crosshairCode";
    let Bb = null;
    const eb = new Set;

    function vb() {
      if (null === Bb) {
        var bb;
        const ab = Mb.f.getItem(Yb);
        Bb = null !== (bb = "string" === typeof ab ? (0, Tb.f)(ab) : null) && void 0 !== bb ? bb : Eb.d
      }
      return Bb
    }

    function Lb(bb) {
      Bb = bb, (0, Eb.l)(bb) ? Mb.f.removeItem(Yb) : Mb.f.setItem(Yb, (0, Tb.h)(bb));
      for (const ab of eb) ab()
    }

    function Pb() {
      const [bb, ab] = (0, Ab.useState)(vb);
      return (0, Ab.useEffect)((() => {
        const bb = () => {
          ab(vb())
        };
        return bb(), Ub = bb, eb.add(Ub), () => {
          eb.delete(Ub)
        };
        var Ub
      }), []), bb
    }
  },
  36111: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      e: () => Bb,
      f: () => Eb
    });
    var Ab = Ub(591),
      Mb = Ub(2549);

    function Tb(bb) {
      return bb === (0, Mb.h)().n_ ? (0, Mb.h)().ZH : bb
    }

    function Eb(bb) {
      return !(0, Ab.I)(bb) && Tb(bb) === (0, Mb.h)().ZH
    }
    const Yb = "gravity";

    function Bb() {
      return (0, Mb.h)().physics[Yb][1]
    }
  },
  35880: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      countDecodesAs: () => vb,
      decodedAudio: () => Lb
    });
    var Ab = Ub(4546);
    const Mb = Ab.Howler,
      Tb = new Map;
    let Eb = 0;
    const Yb = {
        song: 0,
        sheet: 0
      },
      Bb = new WeakMap,
      eb = new WeakSet;

    function vb(bb, ab) {
      return Bb.set(bb, ab), bb
    }

    function Lb() {
      return {
        bytes: Eb,
        songsDecoded: Yb.song,
        sheetsDecoded: Yb.sheet
      }
    }

    function Pb(bb) {
      if (eb.has(bb)) return;
      eb.add(bb);
      const ab = 1 === bb.decodeAudioData.length,
        Ub = bb.decodeAudioData.bind(bb);
      bb.decodeAudioData = (bb, Ab, eb) => {
        const vb = bb => {
          const ab = Mb._howls.filter((bb => "loaded" !== bb._state));
          try {
            null === Ab || void 0 === Ab || Ab(bb)
          } finally {
            const Ub = ab.find((bb => "loaded" === bb._state));
            void 0 !== Ub && "string" === typeof Ub._src && function(bb, ab, Ub) {
              var Ab;
              Eb += Ub - (null !== (Ab = Tb.get(ab)) && void 0 !== Ab ? Ab : 0), Tb.set(ab, Ub);
              const Mb = Bb.get(bb);
              void 0 !== Mb && Yb[Mb]++
            }(Ub, Ub._src, bb.length * bb.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return bb
        };
        if (!ab) return Ub(bb, vb, eb);
        const Lb = Ub(bb).then(vb);
        return Lb.catch((bb => {
          null === eb || void 0 === eb || eb(bb)
        })), Lb
      }
    }
    const Xb = Ab.Howl.prototype,
      jb = Xb.init;
    Xb.init = function(bb) {
      return Ab.Howler.volume(), Mb.ctx && Pb(Mb.ctx), jb.call(this, bb)
    };
    const Rb = Xb.unload;
    Xb.unload = function() {
      const bb = this._src,
        ab = Rb.call(this);
      if ("string" !== typeof bb) return ab;
      const Ub = Tb.get(bb);
      return void 0 !== Ub && function(bb) {
        return !Mb._howls.some((ab => ab._src === bb || "string" === typeof ab._src && bb.indexOf(ab._src) >= 0))
      }(bb) && (Tb.delete(bb), Eb -= Ub), ab
    }
  },
  36104: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => zb
    });
    var Ab = Ub(36108),
      Mb = Ub(205),
      Tb = Ub(4546),
      Eb = Ub(35880),
      Yb = Ub(36125),
      Bb = Ub(36111),
      eb = Ub(333),
      vb = Ub.n(eb),
      Lb = Ub(1142),
      Pb = Ub(2549),
      Xb = Ub(36122),
      jb = Ub(22),
      Rb = Ub(19),
      kb = Ub(36117);
    const yb = new Set(["note"]);
    const Zb = {
      stop: () => Zb,
      fade: () => Zb,
      rate: () => Zb,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Zb,
      setPannerAttr: () => Zb,
      setPosition: () => Zb
    };
    class Db {
      constructor(bb) {
        let ab, {
          src: Ub,
          volumeScalar: Mb,
          isSoundSprite: Bb
        } = bb;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, Bb ? (ab = (0, Ab.i)(Ub), this._spriteTrackSrc = ab) : ab = {
          src: Lb.clientSideServerUrls.staticUrl + Ub
        }, this._volumeMultiplier = new Yb.i, this._volumeMultiplier.setMultiplierType("persistentScalar", Mb), this._howl = (0, Eb.countDecodesAs)(new Tb.Howl({
          ...ab,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let bb, ab = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          Ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (ab) {
          var Ab;
          if (null === (Ab = this._spriteTrackSrc) || void 0 === Ab || !Ab.sprite[ab]) throw new Error("No such sprite in your spritetrack");
          bb = this._howl.play(ab)
        } else bb = this._howl.play();
        Ub && this._howl.loop(!0, bb);
        let Mb = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), bb);
        const Tb = {
          stop: () => (this._howl.stop(bb), Tb),
          fade: (ab, Ub, Ab) => (this._howl.fade(ab, Ub, Ab, bb), Tb),
          rate: ab => (this._howl.rate(ab, bb), Tb),
          stopsAtOnce: () => this._howl.playing(bb) && !this._howl._playLock,
          isAlive: () => {
            const ab = this._howl._soundById(bb);
            return !this._loadFailed && !!ab && !ab._ended
          },
          getDurationMs: () => this._howl._soundById(bb) ? 1e3 * this._howl.duration(bb) / this._howl.rate(bb) : 0,
          getVolume: () => Mb * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Mb,
          setRelativeVolume: ab => {
            if (ab > 1) throw new Error("Volume should be <= 1");
            return Mb = Rb.c.get("soundOnFromAd") ? ab : 0, this._howl.volume(Math.min(1, Mb * this._volumeMultiplier.getTotalMultipliedVal()), bb), Tb
          },
          setPannerAttr: ab => {
            let {
              coneInnerAngle: Ub,
              coneOuterAngle: Ab = 360,
              coneOuterGain: Mb,
              distanceModel: Eb,
              maxDistance: Yb,
              panningModel: Bb,
              refDistance: eb,
              rolloffFactor: vb
            } = ab;
            return this._setPannerAttr({
              id: bb,
              coneInnerAngle: Ub,
              coneOuterAngle: Ab,
              coneOuterGain: Mb,
              distanceModel: Eb,
              maxDistance: Yb,
              panningModel: Bb,
              refDistance: eb,
              rolloffFactor: vb
            }), Tb
          },
          setPosition: ab => (this._howl.pos(ab[2], ab[1], ab[0], bb), Tb)
        };
        return Tb
      }
      setGlobalVolume(bb) {
        this._volumeMultiplier.setMultiplierType("globalVolume", bb), this._howl.volume(bb)
      }
      _setPannerAttr(bb) {
        let {
          id: ab,
          coneInnerAngle: Ub = 360,
          coneOuterAngle: Ab = 360,
          coneOuterGain: Mb = 0,
          distanceModel: Tb = "inverse",
          maxDistance: Eb = 1e3,
          panningModel: Yb = "HRTF",
          refDistance: Bb = Xb.i,
          rolloffFactor: eb = 1
        } = bb;
        this._howl.pannerAttr({
          coneOuterAngle: Ab
        }, ab);
        const vb = {
          coneInnerAngle: Ub,
          coneOuterAngle: Ab,
          coneOuterGain: Mb,
          distanceModel: Tb,
          maxDistance: Eb,
          panningModel: Yb,
          refDistance: Bb,
          rolloffFactor: eb
        };
        this._howl.pannerAttr(vb, ab)
      }
    }
    const zb = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new kb.c, jb.m.subscribe("appManagerUpdated|soundVolume", (bb => {
          const ab = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const Ub of ab) Ub.setGlobalVolume(bb)
        }))
      }
      play(bb, ab) {
        var Ub;
        let Tb, Eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Ub = (0, Pb.h)()) || void 0 === Ub ? void 0 : Ub.ZH,
          Yb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xb.g,
          eb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Xb.i,
          Lb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var jb;
        (0, Pb.h)() ? Tb = !!Array.isArray(Eb) || (0, Bb.b)(Eb) !== (null === (jb = (0, Pb.h)()) || void 0 === jb ? void 0 : jb.ZH): Tb = !1;
        const zb = Tb ? this.spatialSheets : this.stereoSheets,
          xb = (0, Ab.k)(bb);
        if (!zb[xb]) {
          const bb = new Db({
            src: xb,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          bb.setGlobalVolume(Rb.c.get("soundVolume")), zb[xb] = bb
        }
        const ib = zb[xb];
        if (!Tb) {
          const Ub = ib.play(bb, Lb);
          return Ub.setRelativeVolume(ab), Ub
        }
        const fb = (0, Pb.h)(),
          mb = Array.isArray(Eb) ? Eb : fb.wZ.eZ(Eb),
          pb = fb.wZ.eZ(fb.ZH);
        if (!mb || vb().sqrDist(mb, pb) > Yb * Yb) return Zb;
        let Nb;
        if (!Lb) {
          if (!this.spatialVoices.admit({
              group: yb.has(xb) ? null : (0, kb.i)(bb),
              loudness: (0, kb.g)(ab, vb().CE(mb, pb), eb),
              startMs: performance.now(),
              getDurationMs: () => {
                var bb, ab;
                return null !== (bb = null === (ab = Nb) || void 0 === ab ? void 0 : ab.getDurationMs()) && void 0 !== bb ? bb : 0
              },
              isAlive: () => {
                var bb, ab;
                return null !== (bb = null === (ab = Nb) || void 0 === ab ? void 0 : ab.isAlive()) && void 0 !== bb && bb
              },
              canStop: () => {
                var bb, ab;
                return null !== (bb = null === (ab = Nb) || void 0 === ab ? void 0 : ab.stopsAtOnce()) && void 0 !== bb && bb
              },
              stop: () => {
                var bb;
                null === (bb = Nb) || void 0 === bb || bb.stop()
              }
            })) return Zb
        }
        return Nb = ib.play(bb, Lb), Nb.setRelativeVolume(ab), Nb.setPannerAttr({
          refDistance: eb
        }), Nb.setPosition([mb[0], mb[1] + Mb.c.Py * Mb.c.playerEyeToHeightRatio, mb[2]]), Nb
      }
    }
  },
  36177: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      var Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb;
      return bb.name === ab.name && ((null === (Ub = bb.attributes) || void 0 === Ub || null === (Ab = Ub.customAttributes) || void 0 === Ab ? void 0 : Ab.stackKey) === (null === (Mb = ab.attributes) || void 0 === Mb || null === (Tb = Mb.customAttributes) || void 0 === Tb ? void 0 : Tb.stackKey) && (!0 !== (null === (Eb = bb.attributes) || void 0 === Eb || null === (Yb = Eb.customAttributes) || void 0 === Yb ? void 0 : Yb.unstackable) && !0 !== (null === (Bb = ab.attributes) || void 0 === Bb || null === (eb = Bb.customAttributes) || void 0 === eb ? void 0 : eb.unstackable)))
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  36263: (bb, ab, Ub) => {
    function Ab(bb) {
      return bb.includes("Leaf Bed")
    }

    function Mb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Ab(bb)
    }

    function Tb(bb) {
      return bb.includes(" Strongbed")
    }

    function Eb(bb) {
      return Ab(bb) || Mb(bb) || Tb(bb)
    }
    Ub.d(ab, {
      d: () => Eb,
      g: () => Ab,
      h: () => Tb,
      i: () => Mb
    })
  },
  36260: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb
    });
    var Ab = Ub(36263),
      Mb = Ub(9007);
    const Tb = [],
      Eb = [],
      Yb = [],
      Bb = [];
    for (const vb of Object.keys(Mb.p))(0, Ab.g)(vb) ? Tb.push(vb) : (0, Ab.i)(vb) && Eb.push(vb), (0, Ab.h)(vb) && Yb.push(vb), (vb.includes(" Bed Head") || vb.includes(" Strongbed Head")) && Bb.push(vb);
    const eb = {
      leafBeds: Tb,
      woolBeds: Eb,
      strongBeds: Yb,
      beds: [...Tb, ...Eb, ...Yb],
      bedHeads: Bb,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6091: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      e: () => Mb,
      i: () => Bb,
      l: () => Tb,
      o: () => eb,
      p: () => Ab,
      r: () => Yb
    });
    let Ab = function(bb) {
        return bb[bb.DEFAULT = 0] = "DEFAULT", bb[bb.BOAT = 1] = "BOAT", bb[bb.GLIDER = 2] = "GLIDER", bb[bb.BALLOON = 3] = "BALLOON", bb[bb.SLEEPING = 4] = "SLEEPING", bb[bb.RIDING_MOB = 5] = "RIDING_MOB", bb[bb.CAR = 6] = "CAR", bb[bb.HOVERCRAFT = 7] = "HOVERCRAFT", bb
      }({}),
      Mb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.OBSIDIAN = 1] = "OBSIDIAN", bb[bb.SPEED = 2] = "SPEED", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.IRON = 1] = "IRON", bb[bb.GOLD = 2] = "GOLD", bb[bb.DIAMOND = 3] = "DIAMOND", bb
      }({}),
      Eb = function(bb) {
        return bb[bb.YELLOW = 0] = "YELLOW", bb[bb.WHITE = 1] = "WHITE", bb[bb.RED = 2] = "RED", bb[bb.PURPLE = 3] = "PURPLE", bb[bb.PINK = 4] = "PINK", bb[bb.ORANGE = 5] = "ORANGE", bb[bb.MAGENTA = 6] = "MAGENTA", bb[bb.LIME = 7] = "LIME", bb[bb.LIGHT_GRAY = 8] = "LIGHT_GRAY", bb[bb.LIGHT_BLUE = 9] = "LIGHT_BLUE", bb[bb.GREEN = 10] = "GREEN", bb[bb.GRAY = 11] = "GRAY", bb[bb.CYAN = 12] = "CYAN", bb[bb.BROWN = 13] = "BROWN", bb[bb.BLUE = 14] = "BLUE", bb[bb.BLACK = 15] = "BLACK", bb
      }({}),
      Yb = function(bb) {
        return bb[bb.ROTATION_1 = 0] = "ROTATION_1", bb[bb.ROTATION_2 = 1] = "ROTATION_2", bb[bb.ROTATION_3 = 2] = "ROTATION_3", bb[bb.ROTATION_4 = 3] = "ROTATION_4", bb
      }({}),
      Bb = function(bb) {
        return bb[bb.KART = 0] = "KART", bb[bb.OFF_ROADER = 1] = "OFF_ROADER", bb[bb.CAR = 2] = "CAR", bb[bb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", bb[bb.ARMORED_CAR = 4] = "ARMORED_CAR", bb[bb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", bb[bb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", bb[bb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", bb
      }({});
    Ab.DEFAULT, Ab.BOAT, Mb.SPEED, Ab.GLIDER, Tb.DIAMOND, Ab.BALLOON, Eb.BLACK, Ab.SLEEPING, Yb.ROTATION_4, Ab.RIDING_MOB, Ab.CAR, Bb.MOONSTONE_MINING_DRILL, Ab.HOVERCRAFT;
    let eb = function(bb) {
      return bb[bb.NORMAL = 0] = "NORMAL", bb[bb.GLIDING = 1] = "GLIDING", bb[bb.FLOATING = 2] = "FLOATING", bb
    }({})
  },
  8884: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);