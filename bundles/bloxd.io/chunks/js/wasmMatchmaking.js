export const id = 75;
export const ids = [75, 186];
export const modules = {
  37898: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      d: () => Bb,
      e: () => Ub,
      g: () => Ob
    });
    var eb = Mb(35320),
      Hb = Mb(3531),
      pb = Mb(3538),
      Vb = Mb(10064),
      gb = Mb(1611),
      lb = Mb(64),
      Lb = Mb(81),
      Ib = Mb(1364);

    function Ob() {
      var bb;
      return (0, gb.h)(Hb.e, (0, Hb.x)()), (0, Ib.jsx)(Ib.Fragment, {
        children: null === (bb = (0, Hb.x)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Ub(bb) {
      var wb;
      let {
        show: Mb
      } = bb;
      (0, gb.h)(Hb.e, (0, Hb.x)());
      const Lb = null === (wb = (0, Hb.x)()) || void 0 === wb ? void 0 : wb.menu;
      return (0, lb.useEffect)((() => {
        var bb;
        Mb || (null === Lb || void 0 === Lb || null === (bb = Lb.onClose) || void 0 === bb || bb.call(Lb), (0, pb.l)())
      }), [Mb, Lb]), (0, lb.useEffect)((() => Mb ? (0, Vb.g)(pb.u, pb.g) : void 0), [Mb]), (0, Ib.jsx)(eb.c, {
        showing: Mb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Lb || void 0 === Lb ? void 0 : Lb.content
      })
    }
    const tb = new Map,
      Cb = new Set;

    function Eb(bb, wb) {
      wb ? tb.set(bb, wb) : tb.delete(bb);
      for (const Mb of Cb) Mb()
    }

    function Fb(bb) {
      let {
        placement: wb = "bottom"
      } = bb;
      const Mb = (0, lb.useRef)(null);
      return (0, lb.useLayoutEffect)((() => {
        const bb = Mb.current;
        return Eb(wb, bb), () => {
          tb.get(wb) === bb && Eb(wb, null)
        }
      }), [wb]), (0, Ib.jsx)("div", {
        ref: Mb,
        id: `clientGameHud-${wb}`,
        style: {
          display: "contents"
        }
      })
    }

    function Bb(bb) {
      let {
        children: wb,
        placement: Mb = "bottom"
      } = bb;
      const [eb, Hb] = (0, lb.useState)((() => {
        var bb;
        return null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null
      }));
      return (0, lb.useEffect)((() => {
        const bb = () => {
          var bb;
          Hb(null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null)
        };
        return Cb.add(bb), bb(), () => {
          Cb.delete(bb)
        }
      }), [Mb]), eb ? (0, Lb.createPortal)(wb, eb) : null
    }
  },
  37930: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Eb,
      e: () => Xb
    });
    Mb(35298);
    var eb = Mb(64),
      Hb = Mb(1611),
      pb = Mb(2142),
      Vb = Mb(2183),
      gb = Mb(26),
      lb = Mb(3503),
      Lb = Mb(37933),
      Ib = Mb(37936),
      Ob = Mb(35289),
      Ub = Mb(35294),
      tb = Mb(35309),
      Cb = Mb(1364);
    const Eb = (0, eb.memo)((function() {
      var bb;
      const {
        isTouchScreen: wb,
        clientEscMenuOptions: Mb,
        scriptedCameraFacing: pb,
        crosshairShownOverride: Eb,
        crosshairGameView: Bb
      } = (0, gb.o)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), sb = (0, lb.k)("gunshotOrigin"), mb = (0, eb.useRef)(null), hb = (0, eb.useRef)(!1), [zb, xb] = (0, eb.useState)(Fb);
      (0, Hb.e)("cameraZoomSet", xb), (0, eb.useEffect)((() => {
        xb(Fb())
      }), []);
      const jb = (0, Vb.h)("heldItemAim"),
        rb = jb.gun,
        Rb = (0, tb.f)(),
        Db = (0, eb.useRef)(Rb);
      Db.current = Rb;
      const [cb, Yb] = (0, eb.useState)(!1);
      (0, eb.useEffect)((() => (0, Ib.e)("crosshairAccuracy", Xb)), []), (0, Hb.e)("mouseState", (bb => {
        let {
          isDown: wb
        } = bb;
        hb.current = wb, mb.current && (mb.current.style.transform = (0, Ub.c)(wb, Db.current.growOnClick)), "shapes" === Db.current.style && Yb(wb)
      }));
      const Zb = (0, Ob.i)(wb, Mb.touchActionButtons);
      return (null !== (bb = (0, Lb.b)(Bb, Eb)) && void 0 !== bb ? bb : (0, Lb.i)(jb, zb > 1, Zb, sb)) ? "movement" === pb || "cursor" === pb ? null : (0, Cb.jsxs)(Cb.Fragment, {
        children: [rb && (0, Cb.jsx)(Kb, {
          custom: Rb.forGuns && "shapes" === Rb.style ? Rb : null,
          touch: wb
        }), !rb && (0, Cb.jsx)(Ub.b, {
          settings: Rb,
          touch: wb,
          pressRef: mb,
          pressed: "shapes" === Rb.style ? cb : hb.current
        })]
      }) : null
    }));

    function Fb() {
      return pb.gameBridge.lookup("cameraZoom", null)
    }
    const Bb = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      sb = {
        current: null
      },
      mb = {
        current: null
      };
    let hb = 0,
      zb = 0;

    function Xb(bb) {
      zb = bb, Bb[0].current || sb.current || mb.current ? jb(bb) : hb = bb
    }

    function xb(bb) {
      return ((0, Lb.f)(bb) - (0, Lb.f)(0)) * window.innerHeight / 100
    }

    function jb(bb) {
      var wb;
      if (null === (wb = mb.current) || void 0 === wb || wb.call(mb, xb(bb)), Bb[0].current) {
        const wb = `${(0,Lb.f)(bb)}vh`;
        Bb[0].current.style.transform = `translateX(calc(0px - ${wb}))`, Bb[1].current.style.transform = `translateX(calc(0px + ${wb}))`, Bb[2].current.style.transform = `translateY(calc(0px - ${wb}))`, Bb[3].current.style.transform = `translateY(calc(0px + ${wb}))`
      }
      sb.current && (sb.current.style.filter = `blur(${Math.round(bb/10)}px)`)
    }

    function Kb(bb) {
      let {
        custom: wb,
        touch: Mb
      } = bb;
      const pb = (0, Hb.h)("aimingOverlay", "none"),
        Vb = "1.2vh",
        gb = "0.3vh";
      (0, eb.useEffect)((() => {
        hb && jb(hb)
      }), []);
      const lb = (0, eb.useRef)(null !== wb);
      return (0, eb.useLayoutEffect)((() => {
        var bb;
        wb ? null === (bb = mb.current) || void 0 === bb || bb.call(mb, xb(zb)) : lb.current && jb(zb);
        lb.current = null !== wb
      }), [wb]), (0, Cb.jsxs)(Cb.Fragment, {
        children: ["sniper" === pb && (0, Cb.jsxs)("div", {
          ref: sb,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, Cb.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, Cb.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, Cb.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, Cb.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, Cb.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === pb ? 0 : 1
          },
          children: [wb && (0, Cb.jsx)(Ub.b, {
            settings: wb,
            touch: Mb,
            spreadRef: mb
          }), !wb && (0, Cb.jsxs)(Cb.Fragment, {
            children: [(0, Cb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Vb,
                height: gb,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Bb[0]
            }), (0, Cb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Vb,
                height: gb,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Bb[1]
            }), (0, Cb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: gb,
                height: Vb,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Bb[2]
            }), (0, Cb.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: gb,
                height: Vb,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Bb[3]
            })]
          })]
        })]
      })
    }
  },
  35320: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(5387),
      Hb = Mb(5395);

    function pb(bb) {
      let {
        children: wb,
        showing: Mb,
        globallyUniqueKey: pb,
        alwaysMountChildren: Vb = !1,
        doGameplayStartStopOnShow: gb = !0,
        keepsMovement: lb = !1
      } = bb;
      return (0, Hb.d)(!0, Mb, pb, lb), (0, eb.b)(gb, Mb), Mb || Vb ? wb : null
    }
  },
  35294: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Eb,
      c: () => Cb
    });
    Mb(35298);
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(64),
      Vb = Mb(35291);

    function gb(bb, wb) {
      return Math.max(1, Math.round(bb * wb))
    }

    function lb(bb, wb) {
      const Mb = wb * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        eb = function(bb, wb) {
          if (bb.lines) return gb(bb.lineThickness, wb) % 2;
          if (bb.dot) return gb(bb.dotSize, wb) % 2;
          return Lb(bb, wb) % 2
        }(bb, wb),
        Hb = Ib(bb.lineThickness * Mb, eb),
        pb = gb(bb.lineLength, Mb),
        Vb = Math.round(bb.gap * Mb),
        lb = bb.outline > 0 ? gb(bb.outline, Mb) : 0,
        Ub = [];
      if (bb.lines && (Ub.push({
          x: Hb + Vb,
          y: 0,
          w: pb,
          h: Hb,
          arm: "right"
        }), Ub.push({
          x: -Vb - pb,
          y: 0,
          w: pb,
          h: Hb,
          arm: "left"
        }), Ub.push({
          x: 0,
          y: Hb + Vb,
          w: Hb,
          h: pb,
          arm: "down"
        }), bb.tStyle || Ub.push({
          x: 0,
          y: -Vb - pb,
          w: Hb,
          h: pb,
          arm: "up"
        }), 0 === Vb && Ub.push({
          x: 0,
          y: 0,
          w: Hb,
          h: Hb
        })), bb.dot) {
        const wb = Ib(bb.dotSize * Mb, eb),
          pb = bb.lines && 0 === Vb && bb.dotSize > bb.lineThickness ? Math.max(wb, Hb + 2) : wb,
          gb = (Hb - pb) / 2;
        Ub.push({
          x: gb,
          y: gb,
          w: pb,
          h: pb
        })
      }
      const tb = Ub.map((bb => ({
        ...bb,
        x: bb.x - lb,
        y: bb.y - lb,
        w: bb.w + 2 * lb,
        h: bb.h + 2 * lb
      })));
      let Cb = null,
        Eb = null;
      if (bb.circle) {
        const wb = gb(bb.circleThickness, Mb),
          pb = function(bb, wb) {
            return bb + (bb % 2 === wb ? 0 : 1)
          }(Lb(bb, Mb), eb),
          Vb = (Hb - pb) / 2;
        Cb = Ob(Vb, pb, wb), lb > 0 && (Eb = Ob(Vb - lb, pb + 2 * lb, wb + 2 * lb))
      }
      return {
        cell: Hb,
        fills: Ub,
        outlines: lb > 0 ? tb : [],
        ring: Cb,
        ringOutline: Eb
      }
    }

    function Lb(bb, wb) {
      return Math.round(bb.circleRadius * wb * 2 + gb(bb.circleThickness, wb))
    }

    function Ib(bb, wb) {
      return Math.max(2 - wb, 2 * Math.round((bb - wb) / 2) + wb)
    }

    function Ob(bb, wb, Mb) {
      const eb = 2 * Mb >= wb - 1;
      return {
        x: bb,
        y: bb,
        size: wb,
        border: Math.min(Mb, Math.floor(wb / 2)),
        filled: eb
      }
    }
    var Ub = Mb(1364);
    const tb = 1.4;

    function Cb(bb, wb) {
      return bb && wb ? `scale(${tb})` : "scale(1)"
    }

    function Eb(bb) {
      return "classic" === bb.settings.style ? (0, Ub.jsx)(sb, {
        ...bb
      }) : (0, Ub.jsx)(Kb, {
        ...bb
      })
    }
    const Fb = .125;

    function Bb(bb, wb) {
      const Mb = {};
      if (bb.color !== Vb.e.color && (Mb.color = (0, Vb.h)(bb.color)), bb.opacity !== Vb.e.opacity && (Mb.opacity = bb.opacity / 100), bb.outline !== Vb.e.outline || bb.outlineColor !== Vb.e.outlineColor) {
        const wb = bb.outline,
          eb = (0, Vb.h)(bb.outlineColor);
        Mb.textShadow = wb > 0 ? `-${wb}px 0 ${eb}, 0 ${wb}px ${eb}, ${wb}px 0 ${eb}, 0 -${wb}px ${eb}` : "none"
      }
      if (bb.size !== Vb.e.size) {
        const eb = bb.size / 100;
        Mb.fontSize = wb ? `calc(max(1.3rem, 18px) * ${eb})` : `calc(1.3rem * ${eb})`, Mb.marginTop = `-${Fb}em`, Mb.transformOrigin = `50% calc(50% + ${Fb}em)`
      }
      return Mb
    }

    function sb(bb) {
      let {
        settings: wb,
        touch: Mb,
        inPreview: eb,
        inEditor: pb,
        pressed: Vb = !1,
        pressRef: gb
      } = bb;
      return (0, Ub.jsx)("div", {
        className: Hb()("Crosshair", {
          Touch: Mb,
          CrosshairInPreview: eb,
          CrosshairInEditor: pb || eb
        }),
        ref: gb,
        style: {
          transform: Cb(Vb, wb.growOnClick),
          ...Bb(wb, Mb)
        },
        children: "+"
      })
    }

    function mb(bb, wb) {
      return bb / wb + "px"
    }

    function hb(bb, wb, Mb, eb) {
      return {
        ...xb(bb, wb, Mb),
        width: mb(bb.w, Mb),
        height: mb(bb.h, Mb),
        background: eb
      }
    }

    function zb(bb, wb, Mb) {
      return {
        left: mb(bb.x, wb),
        top: mb(bb.y, wb),
        width: mb(bb.size, wb),
        height: mb(bb.size, wb),
        borderWidth: mb(bb.border, wb),
        borderColor: Mb,
        background: bb.filled ? Mb : void 0
      }
    }
    const Xb = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function xb(bb, wb, Mb) {
      const [eb, Hb] = bb.arm ? Xb[bb.arm] : [0, 0], pb = Math.round(wb * Mb);
      return {
        left: mb(bb.x + eb * pb, Mb),
        top: mb(bb.y + Hb * pb, Mb)
      }
    }

    function jb(bb) {
      return bb.arm ? {
        "data-arm": bb.arm,
        "data-x": bb.x,
        "data-y": bb.y
      } : {}
    }

    function Kb(bb) {
      let {
        settings: wb,
        inPreview: Mb,
        inEditor: eb,
        pressed: gb = !1,
        spread: Lb,
        spreadRef: Ib
      } = bb;
      const Ob = (0, pb.useRef)(null),
        {
          box: Cb,
          dpr: Eb
        } = function(bb) {
          const [wb, Mb] = (0, pb.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, pb.useLayoutEffect)((() => {
            const wb = bb.current;
            if (!wb) return;
            const eb = () => {
              const bb = wb.getBoundingClientRect(),
                eb = window.devicePixelRatio || 1;
              Mb((wb => wb.dpr === eb && wb.box.left === bb.left && wb.box.top === bb.top && wb.box.width === bb.width && wb.box.height === bb.height ? wb : {
                box: {
                  left: bb.left,
                  top: bb.top,
                  width: bb.width,
                  height: bb.height
                },
                dpr: eb
              }))
            };
            eb();
            const Hb = new ResizeObserver(eb);
            return Hb.observe(wb), window.addEventListener("resize", eb), window.addEventListener("scroll", eb, !0), () => {
              Hb.disconnect(), window.removeEventListener("resize", eb), window.removeEventListener("scroll", eb, !0)
            }
          }), [bb]), wb
        }(Ob),
        Fb = (0, pb.useRef)(Eb);
      Fb.current = Eb;
      const Bb = lb(wb, Eb, gb && wb.growOnClick ? tb : 1),
        sb = function(bb, wb, Mb) {
          const eb = Math.round((bb.left + bb.width / 2) * Mb - wb / 2),
            Hb = Math.round((bb.top + bb.height / 2) * Mb - wb / 2);
          return {
            x: eb / Mb - bb.left,
            y: Hb / Mb - bb.top
          }
        }(Cb, Bb.cell, Eb),
        mb = (0, Vb.h)(wb.color),
        Xb = (0, Vb.h)(wb.outlineColor),
        Kb = (0, pb.useRef)(0);
      (0, pb.useLayoutEffect)((() => {
        if (Ib) return Ib.current = bb => {
          var wb;
          Kb.current = bb, null === (wb = Ob.current) || void 0 === wb || wb.querySelectorAll("[data-arm]").forEach((wb => {
            Object.assign(wb.style, xb(function(bb) {
              return {
                x: Number(bb.dataset.x),
                y: Number(bb.dataset.y),
                arm: bb.dataset.arm
              }
            }(wb), bb, Fb.current))
          }))
        }, () => {
          Ib.current = null
        }
      }), [Ib]);
      const rb = null !== Lb && void 0 !== Lb ? Lb : Kb.current;
      return (0, Ub.jsx)("div", {
        ref: Ob,
        className: Hb()("CrosshairShapes", {
          CrosshairInPreview: Mb,
          CrosshairInEditor: eb || Mb,
          CrosshairSpreads: void 0 !== Ib
        }),
        children: (0, Ub.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: sb.x,
            top: sb.y,
            opacity: wb.opacity / 100
          },
          children: (0, Ub.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Bb.ringOutline && (0, Ub.jsx)("div", {
              className: "CrosshairRing",
              style: zb(Bb.ringOutline, Eb, Xb)
            }), Bb.outlines.map(((bb, wb) => (0, Ub.jsx)("div", {
              className: "CrosshairPart",
              ...jb(bb),
              style: hb(bb, rb, Eb, Xb)
            }, `o${wb}`))), Bb.ring && (0, Ub.jsx)("div", {
              className: "CrosshairRing",
              style: zb(Bb.ring, Eb, mb)
            }), Bb.fills.map(((bb, wb) => (0, Ub.jsx)("div", {
              className: "CrosshairPart",
              ...jb(bb),
              style: hb(bb, rb, Eb, mb)
            }, `f${wb}`)))]
          })
        })
      })
    }
  },
  35305: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      e: () => Fb,
      g: () => Eb
    });
    var eb = Mb(35291);
    const Hb = "XH1-",
      pb = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Vb = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      gb = ["color", "outlineColor"],
      lb = 1 + 3 * gb.length + Vb.length + 1,
      Lb = Math.ceil(8 * lb / Math.log2(62)),
      Ib = Hb.length + Lb;

    function Ob(bb) {
      let wb = 90;
      for (const Mb of bb) wb = 31 * wb + Mb & 255;
      return wb
    }
    const Ub = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      tb = BigInt(Ub.length);

    function Cb(bb, wb) {
      let Mb = 0n;
      for (const Hb of bb) {
        const bb = Ub.indexOf(Hb);
        if (bb < 0) return null;
        Mb = Mb * tb + BigInt(bb)
      }
      if (Mb >> BigInt(8 * wb) !== 0n) return null;
      const eb = [];
      for (let Hb = 0; Hb < wb; Hb++) eb.unshift(Number(0xffn & Mb)), Mb >>= 8n;
      return eb
    }

    function Eb(bb) {
      let wb = "shapes" === bb.style ? 1 : 0;
      pb.forEach(((Mb, eb) => {
        bb[Mb] && (wb |= 1 << eb + 1)
      }));
      const Mb = [wb];
      for (const Hb of gb) {
        const wb = (0, eb.f)(Hb, bb[Hb]);
        Mb.push(wb >> 16 & 255, wb >> 8 & 255, 255 & wb)
      }
      for (const Hb of Vb) {
        const {
          min: wb,
          step: pb
        } = eb.c[Hb];
        Mb.push(Math.round(((0, eb.f)(Hb, bb[Hb]) - wb) / pb))
      }
      return Mb.push(Ob(Mb)), Hb + function(bb, wb) {
        let Mb = 0n;
        for (const Hb of bb) Mb = Mb << 8n | BigInt(Hb);
        let eb = "";
        for (let Hb = 0; Hb < wb; Hb++) eb = Ub[Number(Mb % tb)] + eb, Mb /= tb;
        return eb
      }(Mb, Lb)
    }

    function Fb(bb) {
      for (const wb of bb.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Lb}})`, "gi"))) {
        const bb = Bb(Cb(wb[1], lb));
        if (bb) return bb
      }
      return null
    }

    function Bb(bb) {
      if (!bb || bb.length !== lb || Ob(bb.slice(0, -1)) !== bb[bb.length - 1]) return null;
      const wb = bb[0],
        Mb = {
          ...eb.e,
          style: 1 & wb ? "shapes" : "classic"
        };
      pb.forEach(((bb, eb) => {
        Mb[bb] = 0 !== (wb & 1 << eb + 1)
      }));
      let Hb = 1;
      for (const eb of gb) Mb[eb] = bb[Hb] << 16 | bb[Hb + 1] << 8 | bb[Hb + 2], Hb += 3;
      for (const pb of Vb) {
        const {
          min: wb,
          step: Vb
        } = eb.c[pb];
        Mb[pb] = (0, eb.f)(pb, wb + bb[Hb] * Vb), Hb++
      }
      return Mb
    }
  },
  35291: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb,
      e: () => Hb,
      f: () => pb,
      h: () => Lb,
      k: () => lb,
      n: () => Ib,
      p: () => gb,
      q: () => Vb
    });
    const eb = {
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
      Hb = Object.freeze({
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

    function pb(bb, wb) {
      var Mb;
      const {
        min: pb,
        max: Vb,
        step: gb
      } = eb[bb];
      if (!Number.isFinite(wb)) return Hb[bb];
      const lb = (null !== (Mb = String(gb).split(".")[1]) && void 0 !== Mb ? Mb : "").length,
        Lb = Number((Math.round(wb / gb) * gb).toFixed(lb));
      return Math.min(Vb, Math.max(pb, Lb))
    }

    function Vb(bb, wb, Mb) {
      const eb = "number" === typeof Mb ? pb(wb, Mb) : Mb;
      return {
        ...bb,
        [wb]: eb
      }
    }

    function gb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Hb).every((eb => Mb.includes(eb) || bb[eb] === wb[eb]))
    }

    function lb(bb) {
      return gb(bb, Hb)
    }

    function Lb(bb) {
      return `#${bb.toString(16).padStart(6,"0")}`
    }

    function Ib(bb) {
      const wb = /^#?([0-9a-f]{6})$/i.exec(bb.trim());
      return wb ? parseInt(wb[1], 16) : null
    }
  },
  35309: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      f: () => Ub
    });
    var eb = Mb(64),
      Hb = Mb(43),
      pb = Mb(35305),
      Vb = Mb(35291);
    const gb = "crosshairCode";
    let lb = null;
    const Lb = new Set;

    function Ib() {
      if (null === lb) {
        var bb;
        const wb = Hb.i.getItem(gb);
        lb = null !== (bb = "string" === typeof wb ? (0, pb.e)(wb) : null) && void 0 !== bb ? bb : Vb.e
      }
      return lb
    }

    function Ob(bb) {
      lb = bb, (0, Vb.k)(bb) ? Hb.i.removeItem(gb) : Hb.i.setItem(gb, (0, pb.g)(bb));
      for (const wb of Lb) wb()
    }

    function Ub() {
      const [bb, wb] = (0, eb.useState)(Ib);
      return (0, eb.useEffect)((() => {
        const bb = () => {
          wb(Ib())
        };
        return bb(), Mb = bb, Lb.add(Mb), () => {
          Lb.delete(Mb)
        };
        var Mb
      }), []), bb
    }
  },
  10292: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      e: () => Vb
    });
    var eb = Mb(214);
    class Hb {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(bb) || this.marks.set(bb, wb)
      }
      marked() {
        return eb.R.flatMap((bb => {
          var wb;
          const Mb = null !== (wb = this.marks.get(bb)) && void 0 !== wb ? wb : pb.marks.get(bb);
          return void 0 === Mb ? [] : [
            [bb, Mb]
          ]
        }))
      }
    }
    const pb = new Hb;

    function Vb(bb) {
      pb.mark(bb)
    }
  },
  37933: (bb, wb, Mb) => {
    function eb(bb, wb, Mb, eb) {
      return !(Mb && !bb.aimable) && (!wb || bb.gun && "head" !== eb)
    }

    function Hb(bb) {
      return Math.max(.1 * bb, 1)
    }

    function pb(bb, wb) {
      return !bb && wb
    }
    Mb.d(wb, {
      b: () => pb,
      f: () => Hb,
      i: () => eb
    })
  },
  37936: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      e: () => Vb
    });
    let eb = null;
    const Hb = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      pb = {
        crosshairAccuracy: bb => {
          const wb = Hb.crosshairAccuracy.at(-1);
          wb ? wb.hook(bb) : eb = bb
        },
        turnDamageIndicators: bb => {
          var wb;
          null === (wb = Hb.turnDamageIndicators.at(-1)) || void 0 === wb || wb.hook(bb)
        },
        turnSoundCues: bb => {
          var wb;
          null === (wb = Hb.turnSoundCues.at(-1)) || void 0 === wb || wb.hook(bb)
        }
      };

    function Vb(bb, wb) {
      const Mb = {
          hook: wb
        },
        Vb = Hb[bb];
      if (Vb.push(Mb), "crosshairAccuracy" === bb && null !== eb) {
        const bb = eb;
        eb = null, pb.crosshairAccuracy(bb)
      }
      return () => {
        const bb = Vb.indexOf(Mb); - 1 !== bb && Vb.splice(bb, 1)
      }
    }

    function gb() {
      return pb
    }
  },
  35289: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      i: () => Hb
    });
    var eb = Mb(26);

    function Hb(bb, wb) {
      return bb && !wb
    }

    function pb() {
      return Hb(eb.c.get("isTouchScreen"), eb.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  10064: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => Hb
    });
    let eb = null;
    const Hb = function(bb) {
        const wb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return eb = wb, () => {
          eb === wb && (eb = null)
        }
      },
      pb = () => {
        var bb;
        return null !== (bb = eb) && void 0 !== bb && bb.canCycle() ? eb.cycle : null
      }
  },
  37646: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      g: () => lb,
      i: () => Vb
    });
    var eb = Mb(661),
      Hb = Mb(2451);

    function pb(bb) {
      return bb === (0, Hb.h)().HJ ? (0, Hb.h)().VJ : bb
    }

    function Vb(bb) {
      return !(0, eb.K)(bb) && pb(bb) === (0, Hb.h)().VJ
    }
    const gb = "gravity";

    function lb() {
      return (0, Hb.h)().physics[gb][1]
    }
  },
  37737: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      InGameUi: () => Kb.e,
      LobbyLeaderboard: () => rb.b,
      loadCharacterCustomisationUI: () => Rb,
      loadCharacterPreview: () => Db,
      matchmakeAndPlay: () => fb,
      matchmakeForAhead: () => gb.c,
      setUpGame: () => cb
    });
    var eb = Mb(1319),
      Hb = Mb(192),
      pb = Mb(26),
      Vb = Mb(37742),
      gb = Mb(37744),
      lb = Mb(2167),
      Lb = Mb(37776);

    function Ib() {
      return !1 !== lb.c.get("canCustomiseChar")
    }
    let Ob = !1;
    var Ub = Mb(1447),
      tb = Mb(5514),
      Cb = Mb(1321),
      Eb = Mb(294),
      Fb = Mb(4967),
      Bb = Mb(5511),
      sb = Mb(10286);

    function mb() {
      return function(bb) {
        var wb;
        return !0 !== (null === bb || void 0 === bb ? void 0 : bb.saveData) && !/2g$/.test(null !== (wb = null === bb || void 0 === bb ? void 0 : bb.effectiveType) && void 0 !== wb ? wb : "")
      }(navigator.connection)
    }

    function hb() {
      return {
        joinStarted: Bb.d,
        language: Cb.g.get().getCurrentLanguageCode()
      }
    }

    function zb() {
      return new Promise((bb => {
        (0, tb.q)(bb)
      }))
    }

    function Xb() {
      (0, Bb.d)() || (0, sb.loadWasmPlayAhead)().catch((bb => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", bb)
      }))
    }
    var xb = Mb(4835),
      jb = Mb(829);
    var Kb = Mb(37788),
      rb = Mb(38207);

    function Rb() {
      return Mb.e(252).then((() => Mb(45145)))
    }

    function Db() {
      return Mb.e(611).then((() => Mb(45153)))
    }
    async function cb() {
      return await async function() {
        if ((0, tb.f)()) {
          if (mb()) try {
            await (0, tb.p)("wasm loads ahead");
            const bb = await (0, sb.importClientLoad)();
            await Promise.race([bb.startLoadAheadOfJoin(hb()), zb()]), await (0, tb.p)("wasm previews");
            const {
              pagePreviews: wb
            } = await Promise.all([Mb.e(177), Mb.e(91), Mb.e(225), Mb.e(158), Mb.e(246), Mb.e(245), Mb.e(244), Mb.e(223), Mb.e(50), Mb.e(161), Mb.e(243), Mb.e(72)]).then((() => Mb(45163)));
            wb().prefetch((0, tb.f)() ? tb.p : void 0)
          } catch (bb) {
            console.warn("[bloxd-wasm-client] the previews' loads ahead of need did not start: the open loads them itself", bb)
          }
          await zb()
        }
      }(), (0, sb.loadWasmPreviews)()
    }
    Ob || (Ob = !0, document.addEventListener("keydown", (bb => {
      (0, Lb.c)(bb, Ib)
    }))), mb() && (0, Fb.e)((() => {
      (0, Bb.d)() || (0, sb.importClientLoad)().then((async bb => {
        if ((0, Bb.d)()) return;
        const wb = bb.startLoadAheadOfJoin(hb());
        (0, Eb.b)((() => {
          (0, Bb.d)() || bb.probeWebgl2AheadOfJoin()
        })), await wb, (0, Eb.b)(Xb)
      }), (bb => {
        console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", bb)
      }))
    }));
    const Yb = pb.c.get("router");
    null === Yb ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function bb(wb) {
      if ((0, jb.c)(wb.state.location.pathname)) return void(0, sb.loadWasmPlay)().catch((() => {}));
      const Mb = wb.subscribe((eb => {
        (0, jb.c)(eb.location.pathname) && (Mb(), (0, xb.e)().then((() => {
          bb(wb)
        })))
      }))
    }(Yb), (0, Vb.b)();
    const Zb = (0, gb.b)((async function(bb, wb) {
      let {
        place: Mb,
        userContext: pb,
        direct: Vb,
        matchedAt: gb,
        rematch: lb
      } = bb;
      const Lb = Vb ? 1 / 0 : gb;
      let Ib;
      try {
        Ib = await (0, sb.loadWasmPlay)()
      } catch (Ob) {
        return console.error("The wasm client did not load:", Ob), (0, Ub.n)({
          websocketUrl: null
        }), eb.d.errorWithCode(String(Ob), Hb.i.CONNECT_TO_GAME_SERVER, {
          error: Ob,
          severity: wb.aborted ? "low" : "medium",
          Yb: wb.aborted
        })
      }
      return Ib.playWasmGame({
        userContext: pb,
        place: Mb,
        matchedAt: Lb,
        rematch: lb
      }, wb)
    }));

    function fb() {
      return (0, sb.loadWasmPlay)().catch((() => {})), Zb(...arguments)
    }
  },
  10286: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      importClientLoad: () => Ob,
      loadWasmPlay: () => Cb,
      loadWasmPlayAhead: () => Eb,
      loadWasmPreviews: () => Fb
    });
    var eb = Mb(4522),
      Hb = Mb(3287),
      pb = Mb(2364),
      Vb = Mb(5498),
      gb = Mb(4896),
      lb = Mb(5511),
      Lb = Mb(10292);
    let Ib = null;

    function Ob() {
      return Promise.all([Mb.e(91), Mb.e(105), Mb.e(241), Mb.e(158), Mb.e(245), Mb.e(161), Mb.e(256), Mb.e(71)]).then((() => Mb(42346)))
    }

    function Ub() {
      return Promise.all([Mb.e(88), Mb.e(91), Mb.e(105), Mb.e(241), Mb.e(158), Mb.e(245), Mb.e(223), Mb.e(161), Mb.e(251), Mb.e(243), Mb.e(103), Mb.e(247), Mb.e(256), Mb.e(76)]).then((() => Mb(42531)))
    }

    function tb() {
      Promise.all([Mb.e(85), Mb.e(89), Mb.e(86), Mb.e(87), Mb.e(88), Mb.e(105), Mb.e(102), Mb.e(307), Mb.e(127), Mb.e(281), Mb.e(255), Mb.e(247), Mb.e(55)]).then((() => Mb(42677))).catch((() => {}))
    }

    function Cb() {
      return Vb.b.cancelDownloadForJoin(), (0, gb.e)(), (0, Hb.f)(), (0, lb.f)(), (0, pb.j)(), tb(), Ob().then((bb => {
        let {
          startJoinLoad: wb
        } = bb;
        wb()
      }), (() => {})), Ib ??= Ub().then((bb => ((0, Lb.e)("phase_chunk"), bb.startWasmPlay(), (0, Lb.e)("phase_start"), bb.followPageUiPack((bb => {
        eb.d.showGamePack(bb)
      })), bb)), (bb => {
        throw Ib = null, bb
      })), Ib
    }

    function Eb() {
      return tb(), Mb.e(132).then((() => Mb(42721))).catch((() => {})), Ub().then((() => {
        (0, Lb.e)("phase_chunk")
      }))
    }

    function Fb() {
      return Ub().then((bb => {
        bb.startWasmPreviews(), bb.prefetchWasmPreviews()
      }))
    }
  },
  37627: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => jb
    });
    var eb = Mb(37630),
      Hb = Mb(225),
      pb = Mb(5766),
      Vb = Mb(37634),
      gb = Mb(37641),
      lb = Mb(37695),
      Lb = Mb(37646),
      Ib = Mb(398),
      Ob = Mb.n(Ib),
      Ub = Mb(2451),
      tb = Mb(37691),
      Cb = Mb(29),
      Eb = Mb(26),
      Fb = Mb(37653),
      Bb = Mb(37659),
      sb = Mb(37668),
      mb = Mb(37677),
      hb = Mb(37687);
    const zb = new Set(["note"]);
    const Xb = {
      stop: () => Xb,
      fade: () => Xb,
      rate: () => Xb,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Xb,
      setPannerAttr: () => Xb,
      setPosition: () => Xb
    };
    class xb {
      constructor(bb) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new lb.f, this._howl = (0, gb.countDecodesAs)(new pb.Howl({
          src: [...(0, eb.v)(bb).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = this._howl.play(Vb.b);
        bb && this._howl.loop(!0, wb);
        let Mb = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), wb);
        const eb = {
          stop: () => {
            var bb;
            return null === (bb = this.liveHowl()) || void 0 === bb || bb.stop(wb), eb
          },
          fade: (bb, Mb, Hb) => {
            var pb;
            return null === (pb = this.liveHowl()) || void 0 === pb || pb.fade(bb, Mb, Hb, wb), eb
          },
          rate: bb => {
            var Mb;
            return null === (Mb = this.liveHowl()) || void 0 === Mb || Mb.rate(bb, wb), eb
          },
          stopsAtOnce: () => this._howl.playing(wb) && !this._howl._playLock,
          isAlive: () => {
            const bb = this._howl._soundById(wb);
            return !this._loadFailed && !!bb && !bb._ended
          },
          getDurationMs: () => this._howl._soundById(wb) ? 1e3 * this._howl.duration(wb) / this._howl.rate(wb) : 0,
          getVolume: () => Mb * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Mb,
          setRelativeVolume: bb => {
            var Hb;
            if (bb > 1) throw new Error("Volume should be <= 1");
            return Mb = Eb.c.get("soundOnFromAd") ? bb : 0, null === (Hb = this.liveHowl()) || void 0 === Hb || Hb.volume(Math.min(1, Mb * this._volumeMultiplier.getTotalMultipliedVal()), wb), eb
          },
          setPannerAttr: bb => {
            let {
              coneInnerAngle: Mb,
              coneOuterAngle: Hb = 360,
              coneOuterGain: pb,
              distanceModel: Vb,
              maxDistance: gb,
              panningModel: lb,
              refDistance: Lb,
              rolloffFactor: Ib
            } = bb;
            return this._setPannerAttr({
              id: wb,
              coneInnerAngle: Mb,
              coneOuterAngle: Hb,
              coneOuterGain: pb,
              distanceModel: Vb,
              maxDistance: gb,
              panningModel: lb,
              refDistance: Lb,
              rolloffFactor: Ib
            }), eb
          },
          setPosition: bb => {
            var Mb;
            return null === (Mb = this.liveHowl()) || void 0 === Mb || Mb.pos(bb[2], bb[1], bb[0], wb), eb
          }
        };
        return eb
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, Vb.d)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(bb) {
        this._volumeMultiplier.setMultiplierType("globalVolume", bb), this._howl.volume(bb)
      }
      _setPannerAttr(bb) {
        let {
          id: wb,
          coneInnerAngle: Mb = 360,
          coneOuterAngle: eb = 360,
          coneOuterGain: Hb = 0,
          distanceModel: pb = "inverse",
          maxDistance: Vb = 1e3,
          panningModel: gb = "HRTF",
          refDistance: lb = tb.j,
          rolloffFactor: Lb = 1
        } = bb;
        const Ib = this.liveHowl();
        if (null === Ib) return;
        Ib.pannerAttr({
          coneOuterAngle: eb
        }, wb);
        const Ob = {
          coneInnerAngle: Mb,
          coneOuterAngle: eb,
          coneOuterGain: Hb,
          distanceModel: pb,
          maxDistance: Vb,
          panningModel: gb,
          refDistance: lb,
          rolloffFactor: Lb
        };
        Ib.pannerAttr(Ob, wb)
      }
    }
    const jb = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new Fb.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, Cb.k.subscribe("appManagerUpdated|soundVolume", (bb => {
          const wb = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const Mb of wb) Mb.setGlobalVolume(bb)
        }))
      }
      play(bb, wb) {
        var Mb;
        let pb, Vb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Mb = (0, Ub.h)()) || void 0 === Mb ? void 0 : Mb.VJ,
          gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tb.f,
          lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tb.j,
          Ib = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Cb;
        (0, Ub.h)() ? pb = !!Array.isArray(Vb) || (0, Lb.e)(Vb) !== (null === (Cb = (0, Ub.h)()) || void 0 === Cb ? void 0 : Cb.VJ): pb = !1;
        const Eb = (0, eb.k)(bb),
          Bb = this.loadSound(pb ? this.spatialSounds : this.stereoSounds, bb);
        if (!pb) {
          const bb = Bb.play(Ib);
          return bb.setRelativeVolume(wb), bb
        }
        const sb = (0, Ub.h)(),
          mb = Array.isArray(Vb) ? Vb : sb.pR.Qm(Vb),
          xb = sb.pR.Qm(sb.VJ);
        if (!mb || Ob().sqrDist(mb, xb) > gb * gb) return Xb;
        let jb;
        if (!Ib) {
          if (!this.spatialVoices.admit({
              group: zb.has(Eb) ? null : (0, Fb.i)(bb),
              loudness: (0, Fb.f)(wb, Ob().DV(mb, xb), lb),
              startMs: performance.now(),
              getDurationMs: () => {
                var bb, wb;
                return null !== (bb = null === (wb = jb) || void 0 === wb ? void 0 : wb.getDurationMs()) && void 0 !== bb ? bb : 0
              },
              isAlive: () => {
                var bb, wb;
                return null !== (bb = null === (wb = jb) || void 0 === wb ? void 0 : wb.isAlive()) && void 0 !== bb && bb
              },
              canStop: () => {
                var bb, wb;
                return null !== (bb = null === (wb = jb) || void 0 === wb ? void 0 : wb.stopsAtOnce()) && void 0 !== bb && bb
              },
              stop: () => {
                var bb;
                null === (bb = jb) || void 0 === bb || bb.stop()
              }
            })) return Xb
        }
        return jb = Bb.play(Ib), jb.setRelativeVolume(wb), jb.setPannerAttr({
          refDistance: lb
        }), jb.setPosition([mb[0], mb[1] + Hb.e.oF * Hb.e.playerEyeToHeightRatio, mb[2]]), !Ib && (0, hb.e)() && (0, hb.d)(Eb, bb, mb[0] - xb[0], mb[2] - xb[2]), jb
      }
      preload(bb) {
        const wb = (0, eb.r)(bb) ? [bb] : (0, eb.w)(bb);
        if (0 === wb.length) throw new Error(`Invalid sound name ${bb} (no sound has it or starts with it)`);
        for (const Mb of wb) this.loadSound(this.stereoSounds, Mb)
      }
      preloadAtIdle(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mb.b;
        const Mb = bb.filter((bb => !this.idlePreloads.has(bb)));
        for (const Hb of Mb) this.idlePreloads.add(Hb);
        const eb = this.idlePreloadGeneration;
        (0, sb.d)(Mb, {
          ...wb,
          Yb: () => eb !== this.idlePreloadGeneration,
          fetchFile: bb => {
            this.idlePreloads.delete(bb);
            try {
              return this.preload(bb), Promise.resolve()
            } catch (wb) {
              return Promise.reject(wb)
            }
          }
        })
      }
      loadSound(bb, wb) {
        const Mb = bb[wb];
        if (Mb) return Mb;
        const Hb = this.makeSound(bb, wb);
        for (const Vb of null !== (pb = (0, eb.t)(wb)) && void 0 !== pb ? pb : []) {
          var pb;
          bb[Vb] || this.makeSound(bb, Vb)
        }
        return Hb
      }
      makeSound(bb, wb) {
        (0, mb.f)(wb);
        const Mb = new xb(wb);
        return Mb.setGlobalVolume(Eb.c.get("soundVolume")), bb[wb] = Mb, Mb
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const bb of [this.stereoSounds, this.spatialSounds])
          for (const [wb, Mb] of Object.entries(bb)) !Bb.d.has((0, eb.k)(wb)) && Mb.loaded() && (Mb.unloadOnceIdle(), delete bb[wb])
      }
    }
  },
  37471: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Xb,
      e: () => Rb,
      h: () => Db,
      j: () => cb
    });
    var eb = Mb(37475),
      Hb = Mb(8107),
      pb = Mb(8175),
      Vb = Mb(37478),
      gb = Mb(37480),
      lb = Mb(37486),
      Lb = Mb(8465),
      Ib = Mb(8583),
      Ob = Mb(37490),
      Ub = Mb(8793),
      tb = Mb(7982),
      Cb = Mb(9065),
      Eb = Mb(37496),
      Fb = Mb(37503),
      Bb = Mb(9091),
      sb = Mb(37507),
      mb = Mb(37509),
      hb = Mb(382);
    const zb = {
        redTeam: pb.c,
        blueTeam: Fb.h,
        greenTeam: mb.e,
        yellowTeam: Bb.d,
        cyanTeam: lb.g,
        whiteTeam: tb.faPlus,
        pinkTeam: Ib.g,
        grayTeam: Ob.d,
        blackTeam: Eb.e,
        orangeTeam: sb.h,
        lilacTeam: Vb.d,
        purpleTeam: Ub.g,
        magentaTeam: gb.f,
        brownTeam: eb.f,
        limeTeam: Hb.faBolt,
        lightGrayTeam: Lb.e,
        lightBlueTeam: Cb.d
      },
      Xb = Object.fromEntries(Object.values(zb).map((bb => [xb(bb), bb])));

    function xb(bb) {
      return `team-${bb.iconName}`
    }
    const jb = new Map;
    for (const [Yb, Zb] of Object.entries(zb)) {
      const bb = xb(Zb),
        wb = hb.O[Yb];
      wb && jb.set(wb.toLowerCase(), {
        icon: bb,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let Kb = !1;
    const rb = new Set;

    function Rb(bb) {
      if (bb !== Kb) {
        Kb = bb;
        for (const bb of rb) bb()
      }
    }

    function Db(bb) {
      var wb;
      return "string" === typeof bb && Kb && null !== (wb = jb.get(bb.toLowerCase())) && void 0 !== wb ? wb : null
    }

    function cb(bb) {
      return rb.add(bb), () => {
        rb.delete(bb)
      }
    }
  },
  37519: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Ib,
      E: () => Ob,
      F: () => Eb,
      J: () => Fb,
      N: () => Bb,
      P: () => mb,
      e: () => Hb,
      f: () => tb,
      j: () => Vb,
      n: () => Cb,
      q: () => sb,
      u: () => Ub,
      w: () => hb,
      z: () => pb
    });
    var eb = Mb(2107);
    const Hb = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];

    function pb(bb) {
      return (0, eb.w)(bb.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function Vb(bb, wb) {
      const {
        numLines: Mb,
        charsPerLine: eb
      } = Hb[wb];
      return zb(bb, Mb, eb, !1)
    }
    const gb = 7 / 8,
      lb = .25,
      Lb = 8;

    function Ib(bb, wb) {
      return {
        width: Math.min(bb, Lb) - 2 * lb,
        height: Math.min(wb, Lb) - 2 * lb
      }
    }

    function Ob(bb, wb, Mb) {
      const eb = Ib(bb, wb),
        {
          numLines: pb,
          charsPerLine: Vb
        } = Hb[Mb];
      return {
        numLines: Math.max(1, Math.floor(pb / gb * eb.height)),
        charsPerLine: Math.max(1, Math.floor(Vb * eb.width))
      }
    }

    function Ub(bb, wb, Mb, eb) {
      const {
        numLines: Hb,
        charsPerLine: pb
      } = Ob(Mb, eb, wb);
      return zb(bb, Hb, pb, !1)
    }
    const tb = 32e3;

    function Cb(bb) {
      return bb.slice(0, tb)
    }
    const Eb = 512e3,
      Fb = 64,
      Bb = Eb;

    function sb(bb, wb) {
      const Mb = Math.max(0, Bb - wb),
        eb = Math.min(Eb, Mb);
      return bb.slice(0, eb)
    }
    const mb = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      UI: {
        numLines: 1,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nameTag: {
        numLines: 1,
        charsPerLine: 13,
        uiFontSize: 4.6
      }
    };

    function hb(bb, wb) {
      const {
        numLines: Mb,
        charsPerLine: eb
      } = mb[wb];
      return zb(bb, Mb, eb, !1)
    }

    function zb(bb, wb, Mb, eb, Hb) {
      (Hb || eb) && (bb = bb.slice(0, null !== Hb && void 0 !== Hb ? Hb : wb * Mb));
      const pb = bb.split("\n");
      if (pb.length > wb && pb.splice(wb, pb.length - wb), !eb)
        for (let Vb = 0; Vb < pb.length; Vb++) {
          const bb = pb[Vb];
          bb.length > Mb && (pb[Vb] = bb.substring(0, Mb), pb.length < wb && pb.splice(Vb + 1, 0, bb.substring(Mb)))
        }
      return pb.join("\n")
    }
  },
  38055: (bb, wb, Mb) => {
    function eb(bb, wb) {
      var Mb, eb, Hb, pb, Vb, gb, lb, Lb;
      return bb.name === wb.name && ((null === (Mb = bb.attributes) || void 0 === Mb || null === (eb = Mb.customAttributes) || void 0 === eb ? void 0 : eb.stackKey) === (null === (Hb = wb.attributes) || void 0 === Hb || null === (pb = Hb.customAttributes) || void 0 === pb ? void 0 : pb.stackKey) && (!0 !== (null === (Vb = bb.attributes) || void 0 === Vb || null === (gb = Vb.customAttributes) || void 0 === gb ? void 0 : gb.unstackable) && !0 !== (null === (lb = wb.attributes) || void 0 === lb || null === (Lb = lb.customAttributes) || void 0 === Lb ? void 0 : Lb.unstackable)))
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  5967: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      g: () => pb
    });
    var eb = Mb(5914);
    const Hb = "Air",
      pb = Object.freeze(new eb.g(Hb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38145: (bb, wb, Mb) => {
    function eb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Hb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !eb(bb)
    }

    function pb(bb) {
      return bb.includes(" Strongbed")
    }

    function Vb(bb) {
      return eb(bb) || Hb(bb) || pb(bb)
    }
    Mb.d(wb, {
      e: () => Vb,
      f: () => eb,
      g: () => pb,
      i: () => Hb
    })
  },
  38139: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb
    });
    var eb = Mb(38145),
      Hb = Mb(5868);
    const pb = [],
      Vb = [],
      gb = [],
      lb = [];
    for (const Ib of Object.keys(Hb.l))(0, eb.f)(Ib) ? pb.push(Ib) : (0, eb.i)(Ib) && Vb.push(Ib), (0, eb.g)(Ib) && gb.push(Ib), (Ib.includes(" Bed Head") || Ib.includes(" Strongbed Head")) && lb.push(Ib);
    const Lb = {
      leafBeds: pb,
      woolBeds: Vb,
      strongBeds: gb,
      beds: [...pb, ...Vb, ...gb],
      bedHeads: lb,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7634: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      h: () => Hb,
      j: () => lb,
      n: () => pb,
      p: () => Lb,
      r: () => eb,
      t: () => gb
    });
    let eb = function(bb) {
        return bb[bb.DEFAULT = 0] = "DEFAULT", bb[bb.BOAT = 1] = "BOAT", bb[bb.GLIDER = 2] = "GLIDER", bb[bb.BALLOON = 3] = "BALLOON", bb[bb.SLEEPING = 4] = "SLEEPING", bb[bb.RIDING_MOB = 5] = "RIDING_MOB", bb[bb.CAR = 6] = "CAR", bb[bb.HOVERCRAFT = 7] = "HOVERCRAFT", bb
      }({}),
      Hb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.OBSIDIAN = 1] = "OBSIDIAN", bb[bb.SPEED = 2] = "SPEED", bb
      }({}),
      pb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.IRON = 1] = "IRON", bb[bb.GOLD = 2] = "GOLD", bb[bb.DIAMOND = 3] = "DIAMOND", bb
      }({}),
      Vb = function(bb) {
        return bb[bb.YELLOW = 0] = "YELLOW", bb[bb.WHITE = 1] = "WHITE", bb[bb.RED = 2] = "RED", bb[bb.PURPLE = 3] = "PURPLE", bb[bb.PINK = 4] = "PINK", bb[bb.ORANGE = 5] = "ORANGE", bb[bb.MAGENTA = 6] = "MAGENTA", bb[bb.LIME = 7] = "LIME", bb[bb.LIGHT_GRAY = 8] = "LIGHT_GRAY", bb[bb.LIGHT_BLUE = 9] = "LIGHT_BLUE", bb[bb.GREEN = 10] = "GREEN", bb[bb.GRAY = 11] = "GRAY", bb[bb.CYAN = 12] = "CYAN", bb[bb.BROWN = 13] = "BROWN", bb[bb.BLUE = 14] = "BLUE", bb[bb.BLACK = 15] = "BLACK", bb
      }({}),
      gb = function(bb) {
        return bb[bb.ROTATION_1 = 0] = "ROTATION_1", bb[bb.ROTATION_2 = 1] = "ROTATION_2", bb[bb.ROTATION_3 = 2] = "ROTATION_3", bb[bb.ROTATION_4 = 3] = "ROTATION_4", bb
      }({}),
      lb = function(bb) {
        return bb[bb.KART = 0] = "KART", bb[bb.OFF_ROADER = 1] = "OFF_ROADER", bb[bb.CAR = 2] = "CAR", bb[bb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", bb[bb.ARMORED_CAR = 4] = "ARMORED_CAR", bb[bb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", bb[bb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", bb[bb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", bb
      }({});
    eb.DEFAULT, eb.BOAT, Hb.SPEED, eb.GLIDER, pb.DIAMOND, eb.BALLOON, Vb.BLACK, eb.SLEEPING, gb.ROTATION_4, eb.RIDING_MOB, eb.CAR, lb.MOONSTONE_MINING_DRILL, eb.HOVERCRAFT;
    let Lb = function(bb) {
      return bb[bb.NORMAL = 0] = "NORMAL", bb[bb.GLIDING = 1] = "GLIDING", bb[bb.FLOATING = 2] = "FLOATING", bb
    }({})
  },
  35298: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);