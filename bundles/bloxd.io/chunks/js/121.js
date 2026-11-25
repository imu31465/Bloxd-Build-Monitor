export const id = 121;
export const ids = [121];
export const modules = {
  36870: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => wt,
      g: () => ut
    });
    Vt(34351);
    var Ot = Vt(63),
      qt = Vt(1554),
      Dt = Vt(2024),
      mt = Vt(2063),
      dt = Vt(26),
      jt = Vt(2498),
      Ht = Vt(36872),
      Xt = Vt(36880),
      Qt = Vt(34333),
      lt = Vt(34349),
      Et = Vt(34363),
      ft = Vt(1188);
    const wt = (0, Ot.memo)((function() {
      var tt;
      const {
        isTouchScreen: et,
        clientEscMenuOptions: Vt,
        scriptedCameraFacing: Dt,
        crosshairShownOverride: wt,
        crosshairGameView: Nt
      } = (0, dt.k)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Mt = (0, jt.i)("gunshotOrigin"), bt = (0, Ot.useRef)(null), Jt = (0, Ot.useRef)(!1), [Ct, Kt] = (0, Ot.useState)(yt);
      (0, qt.f)("cameraZoomSet", Kt), (0, Ot.useEffect)((() => {
        Kt(yt())
      }), []);
      const ht = (0, mt.h)("heldItemAim"),
        Wt = ht.gun,
        St = (0, Et.g)(),
        ct = (0, Ot.useRef)(St);
      ct.current = St;
      const [Rt, It] = (0, Ot.useState)(!1);
      (0, Ot.useEffect)((() => (0, Xt.h)("crosshairAccuracy", ut)), []), (0, qt.f)("mouseState", (tt => {
        let {
          isDown: et
        } = tt;
        Jt.current = et, bt.current && (bt.current.style.transform = (0, lt.i)(et, ct.current.growOnClick)), "shapes" === ct.current.style && It(et)
      }));
      const Pt = (0, Qt.h)(et, Vt.touchActionButtons);
      return (null !== (tt = (0, Ht.b)(Nt, wt)) && void 0 !== tt ? tt : (0, Ht.d)(ht, Ct > 1, Pt, Mt)) ? "movement" === Dt || "cursor" === Dt ? null : (0, ft.jsxs)(ft.Fragment, {
        children: [Wt && (0, ft.jsx)(vt, {
          custom: St.forGuns && "shapes" === St.style ? St : null,
          touch: et
        }), !Wt && (0, ft.jsx)(lt.e, {
          settings: St,
          touch: et,
          pressRef: bt,
          pressed: "shapes" === St.style ? Rt : Jt.current
        })]
      }) : null
    }));

    function yt() {
      return Dt.gameBridge.lookup("cameraZoom", null)
    }
    const Nt = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Mt = {
        current: null
      },
      bt = {
        current: null
      };
    let Jt = 0,
      Ct = 0;

    function ut(tt) {
      Ct = tt, Nt[0].current || Mt.current || bt.current ? ht(tt) : Jt = tt
    }

    function Kt(tt) {
      return ((0, Ht.c)(tt) - (0, Ht.c)(0)) * window.innerHeight / 100
    }

    function ht(tt) {
      var et;
      if (null === (et = bt.current) || void 0 === et || et.call(bt, Kt(tt)), Nt[0].current) {
        const et = `${(0,Ht.c)(tt)}vh`;
        Nt[0].current.style.transform = `translateX(calc(0px - ${et}))`, Nt[1].current.style.transform = `translateX(calc(0px + ${et}))`, Nt[2].current.style.transform = `translateY(calc(0px - ${et}))`, Nt[3].current.style.transform = `translateY(calc(0px + ${et}))`
      }
      Mt.current && (Mt.current.style.filter = `blur(${Math.round(tt/10)}px)`)
    }

    function vt(tt) {
      let {
        custom: et,
        touch: Vt
      } = tt;
      const Dt = (0, qt.h)("aimingOverlay", "none"),
        mt = "1.2vh",
        dt = "0.3vh";
      (0, Ot.useEffect)((() => {
        Jt && ht(Jt)
      }), []);
      const jt = (0, Ot.useRef)(null !== et);
      return (0, Ot.useLayoutEffect)((() => {
        var tt;
        et ? null === (tt = bt.current) || void 0 === tt || tt.call(bt, Kt(Ct)) : jt.current && ht(Ct);
        jt.current = null !== et
      }), [et]), (0, ft.jsxs)(ft.Fragment, {
        children: ["sniper" === Dt && (0, ft.jsxs)("div", {
          ref: Mt,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, ft.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, ft.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, ft.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, ft.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, ft.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Dt ? 0 : 1
          },
          children: [et && (0, ft.jsx)(lt.e, {
            settings: et,
            touch: Vt,
            spreadRef: bt
          }), !et && (0, ft.jsxs)(ft.Fragment, {
            children: [(0, ft.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: mt,
                height: dt,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Nt[0]
            }), (0, ft.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: mt,
                height: dt,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Nt[1]
            }), (0, ft.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: dt,
                height: mt,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Nt[2]
            }), (0, ft.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: dt,
                height: mt,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Nt[3]
            })]
          })]
        })]
      })
    }
  },
  34349: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => wt,
      i: () => ft
    });
    Vt(34351);
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(63),
      mt = Vt(34342);

    function dt(tt, et) {
      return Math.max(1, Math.round(tt * et))
    }

    function jt(tt, et) {
      const Vt = et * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Ot = function(tt, et) {
          if (tt.lines) return dt(tt.lineThickness, et) % 2;
          if (tt.dot) return dt(tt.dotSize, et) % 2;
          return Ht(tt, et) % 2
        }(tt, et),
        qt = Xt(tt.lineThickness * Vt, Ot),
        Dt = dt(tt.lineLength, Vt),
        mt = Math.round(tt.gap * Vt),
        jt = tt.outline > 0 ? dt(tt.outline, Vt) : 0,
        lt = [];
      if (tt.lines && (lt.push({
          x: qt + mt,
          y: 0,
          w: Dt,
          h: qt,
          arm: "right"
        }), lt.push({
          x: -mt - Dt,
          y: 0,
          w: Dt,
          h: qt,
          arm: "left"
        }), lt.push({
          x: 0,
          y: qt + mt,
          w: qt,
          h: Dt,
          arm: "down"
        }), tt.tStyle || lt.push({
          x: 0,
          y: -mt - Dt,
          w: qt,
          h: Dt,
          arm: "up"
        }), 0 === mt && lt.push({
          x: 0,
          y: 0,
          w: qt,
          h: qt
        })), tt.dot) {
        const et = Xt(tt.dotSize * Vt, Ot),
          Dt = tt.lines && 0 === mt && tt.dotSize > tt.lineThickness ? Math.max(et, qt + 2) : et,
          dt = (qt - Dt) / 2;
        lt.push({
          x: dt,
          y: dt,
          w: Dt,
          h: Dt
        })
      }
      const Et = lt.map((tt => ({
        ...tt,
        x: tt.x - jt,
        y: tt.y - jt,
        w: tt.w + 2 * jt,
        h: tt.h + 2 * jt
      })));
      let ft = null,
        wt = null;
      if (tt.circle) {
        const et = dt(tt.circleThickness, Vt),
          Dt = function(tt, et) {
            return tt + (tt % 2 === et ? 0 : 1)
          }(Ht(tt, Vt), Ot),
          mt = (qt - Dt) / 2;
        ft = Qt(mt, Dt, et), jt > 0 && (wt = Qt(mt - jt, Dt + 2 * jt, et + 2 * jt))
      }
      return {
        cell: qt,
        fills: lt,
        outlines: jt > 0 ? Et : [],
        ring: ft,
        ringOutline: wt
      }
    }

    function Ht(tt, et) {
      return Math.round(tt.circleRadius * et * 2 + dt(tt.circleThickness, et))
    }

    function Xt(tt, et) {
      return Math.max(2 - et, 2 * Math.round((tt - et) / 2) + et)
    }

    function Qt(tt, et, Vt) {
      const Ot = 2 * Vt >= et - 1;
      return {
        x: tt,
        y: tt,
        size: et,
        border: Math.min(Vt, Math.floor(et / 2)),
        filled: Ot
      }
    }
    var lt = Vt(1188);
    const Et = 1.4;

    function ft(tt, et) {
      return tt && et ? `scale(${Et})` : "scale(1)"
    }

    function wt(tt) {
      return "classic" === tt.settings.style ? (0, lt.jsx)(Mt, {
        ...tt
      }) : (0, lt.jsx)(vt, {
        ...tt
      })
    }
    const yt = .125;

    function Nt(tt, et) {
      const Vt = {};
      if (tt.color !== mt.g.color && (Vt.color = (0, mt.l)(tt.color)), tt.opacity !== mt.g.opacity && (Vt.opacity = tt.opacity / 100), tt.outline !== mt.g.outline || tt.outlineColor !== mt.g.outlineColor) {
        const et = tt.outline,
          Ot = (0, mt.l)(tt.outlineColor);
        Vt.textShadow = et > 0 ? `-${et}px 0 ${Ot}, 0 ${et}px ${Ot}, ${et}px 0 ${Ot}, 0 -${et}px ${Ot}` : "none"
      }
      if (tt.size !== mt.g.size) {
        const Ot = tt.size / 100;
        Vt.fontSize = et ? `calc(max(1.3rem, 18px) * ${Ot})` : `calc(1.3rem * ${Ot})`, Vt.marginTop = `-${yt}em`, Vt.transformOrigin = `50% calc(50% + ${yt}em)`
      }
      return Vt
    }

    function Mt(tt) {
      let {
        settings: et,
        touch: Vt,
        inPreview: Ot,
        inEditor: Dt,
        pressed: mt = !1,
        pressRef: dt
      } = tt;
      return (0, lt.jsx)("div", {
        className: qt()("Crosshair", {
          Touch: Vt,
          CrosshairInPreview: Ot,
          CrosshairInEditor: Dt || Ot
        }),
        ref: dt,
        style: {
          transform: ft(mt, et.growOnClick),
          ...Nt(et, Vt)
        },
        children: "+"
      })
    }

    function bt(tt, et) {
      return tt / et + "px"
    }

    function Jt(tt, et, Vt, Ot) {
      return {
        ...Kt(tt, et, Vt),
        width: bt(tt.w, Vt),
        height: bt(tt.h, Vt),
        background: Ot
      }
    }

    function Ct(tt, et, Vt) {
      return {
        left: bt(tt.x, et),
        top: bt(tt.y, et),
        width: bt(tt.size, et),
        height: bt(tt.size, et),
        borderWidth: bt(tt.border, et),
        borderColor: Vt,
        background: tt.filled ? Vt : void 0
      }
    }
    const ut = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Kt(tt, et, Vt) {
      const [Ot, qt] = tt.arm ? ut[tt.arm] : [0, 0], Dt = Math.round(et * Vt);
      return {
        left: bt(tt.x + Ot * Dt, Vt),
        top: bt(tt.y + qt * Dt, Vt)
      }
    }

    function ht(tt) {
      return tt.arm ? {
        "data-arm": tt.arm,
        "data-x": tt.x,
        "data-y": tt.y
      } : {}
    }

    function vt(tt) {
      let {
        settings: et,
        inPreview: Vt,
        inEditor: Ot,
        pressed: dt = !1,
        spread: Ht,
        spreadRef: Xt
      } = tt;
      const Qt = (0, Dt.useRef)(null),
        {
          box: ft,
          dpr: wt
        } = function(tt) {
          const [et, Vt] = (0, Dt.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Dt.useLayoutEffect)((() => {
            const et = tt.current;
            if (!et) return;
            const Ot = () => {
              const tt = et.getBoundingClientRect(),
                Ot = window.devicePixelRatio || 1;
              Vt((et => et.dpr === Ot && et.box.left === tt.left && et.box.top === tt.top && et.box.width === tt.width && et.box.height === tt.height ? et : {
                box: {
                  left: tt.left,
                  top: tt.top,
                  width: tt.width,
                  height: tt.height
                },
                dpr: Ot
              }))
            };
            Ot();
            const qt = new ResizeObserver(Ot);
            return qt.observe(et), window.addEventListener("resize", Ot), window.addEventListener("scroll", Ot, !0), () => {
              qt.disconnect(), window.removeEventListener("resize", Ot), window.removeEventListener("scroll", Ot, !0)
            }
          }), [tt]), et
        }(Qt),
        yt = (0, Dt.useRef)(wt);
      yt.current = wt;
      const Nt = jt(et, wt, dt && et.growOnClick ? Et : 1),
        Mt = function(tt, et, Vt) {
          const Ot = Math.round((tt.left + tt.width / 2) * Vt - et / 2),
            qt = Math.round((tt.top + tt.height / 2) * Vt - et / 2);
          return {
            x: Ot / Vt - tt.left,
            y: qt / Vt - tt.top
          }
        }(ft, Nt.cell, wt),
        bt = (0, mt.l)(et.color),
        ut = (0, mt.l)(et.outlineColor),
        vt = (0, Dt.useRef)(0);
      (0, Dt.useLayoutEffect)((() => {
        if (Xt) return Xt.current = tt => {
          var et;
          vt.current = tt, null === (et = Qt.current) || void 0 === et || et.querySelectorAll("[data-arm]").forEach((et => {
            Object.assign(et.style, Kt(function(tt) {
              return {
                x: Number(tt.dataset.x),
                y: Number(tt.dataset.y),
                arm: tt.dataset.arm
              }
            }(et), tt, yt.current))
          }))
        }, () => {
          Xt.current = null
        }
      }), [Xt]);
      const Wt = null !== Ht && void 0 !== Ht ? Ht : vt.current;
      return (0, lt.jsx)("div", {
        ref: Qt,
        className: qt()("CrosshairShapes", {
          CrosshairInPreview: Vt,
          CrosshairInEditor: Ot || Vt,
          CrosshairSpreads: void 0 !== Xt
        }),
        children: (0, lt.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Mt.x,
            top: Mt.y,
            opacity: et.opacity / 100
          },
          children: (0, lt.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Nt.ringOutline && (0, lt.jsx)("div", {
              className: "CrosshairRing",
              style: Ct(Nt.ringOutline, wt, ut)
            }), Nt.outlines.map(((tt, et) => (0, lt.jsx)("div", {
              className: "CrosshairPart",
              ...ht(tt),
              style: Jt(tt, Wt, wt, ut)
            }, `o${et}`))), Nt.ring && (0, lt.jsx)("div", {
              className: "CrosshairRing",
              style: Ct(Nt.ring, wt, bt)
            }), Nt.fills.map(((tt, et) => (0, lt.jsx)("div", {
              className: "CrosshairPart",
              ...ht(tt),
              style: Jt(tt, Wt, wt, bt)
            }, `f${et}`)))]
          })
        })
      })
    }
  },
  34354: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Xt,
      g: () => yt,
      k: () => wt
    });
    var Ot = Vt(34342);
    const qt = "XH1-",
      Dt = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      mt = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      dt = ["color", "outlineColor"],
      jt = 1 + 3 * dt.length + mt.length + 1,
      Ht = Math.ceil(8 * jt / Math.log2(62)),
      Xt = qt.length + Ht;

    function Qt(tt) {
      let et = 90;
      for (const Vt of tt) et = 31 * et + Vt & 255;
      return et
    }
    const lt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Et = BigInt(lt.length);

    function ft(tt, et) {
      let Vt = 0n;
      for (const qt of tt) {
        const tt = lt.indexOf(qt);
        if (tt < 0) return null;
        Vt = Vt * Et + BigInt(tt)
      }
      if (Vt >> BigInt(8 * et) !== 0n) return null;
      const Ot = [];
      for (let qt = 0; qt < et; qt++) Ot.unshift(Number(0xffn & Vt)), Vt >>= 8n;
      return Ot
    }

    function wt(tt) {
      let et = "shapes" === tt.style ? 1 : 0;
      Dt.forEach(((Vt, Ot) => {
        tt[Vt] && (et |= 1 << Ot + 1)
      }));
      const Vt = [et];
      for (const qt of dt) {
        const et = (0, Ot.i)(qt, tt[qt]);
        Vt.push(et >> 16 & 255, et >> 8 & 255, 255 & et)
      }
      for (const qt of mt) {
        const {
          min: et,
          step: Dt
        } = Ot.e[qt];
        Vt.push(Math.round(((0, Ot.i)(qt, tt[qt]) - et) / Dt))
      }
      return Vt.push(Qt(Vt)), qt + function(tt, et) {
        let Vt = 0n;
        for (const qt of tt) Vt = Vt << 8n | BigInt(qt);
        let Ot = "";
        for (let qt = 0; qt < et; qt++) Ot = lt[Number(Vt % Et)] + Ot, Vt /= Et;
        return Ot
      }(Vt, Ht)
    }

    function yt(tt) {
      for (const et of tt.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Ht}})`, "gi"))) {
        const tt = Nt(ft(et[1], jt));
        if (tt) return tt
      }
      return null
    }

    function Nt(tt) {
      if (!tt || tt.length !== jt || Qt(tt.slice(0, -1)) !== tt[tt.length - 1]) return null;
      const et = tt[0],
        Vt = {
          ...Ot.g,
          style: 1 & et ? "shapes" : "classic"
        };
      Dt.forEach(((tt, Ot) => {
        Vt[tt] = 0 !== (et & 1 << Ot + 1)
      }));
      let qt = 1;
      for (const Ot of dt) Vt[Ot] = tt[qt] << 16 | tt[qt + 1] << 8 | tt[qt + 2], qt += 3;
      for (const Dt of mt) {
        const {
          min: et,
          step: mt
        } = Ot.e[Dt];
        Vt[Dt] = (0, Ot.i)(Dt, et + tt[qt] * mt), qt++
      }
      return Vt
    }
  },
  34342: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      g: () => qt,
      i: () => Dt,
      l: () => Ht,
      o: () => jt,
      q: () => Xt,
      t: () => dt,
      v: () => mt
    });
    const Ot = {
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
      qt = Object.freeze({
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

    function Dt(tt, et) {
      var Vt;
      const {
        min: Dt,
        max: mt,
        step: dt
      } = Ot[tt];
      if (!Number.isFinite(et)) return qt[tt];
      const jt = (null !== (Vt = String(dt).split(".")[1]) && void 0 !== Vt ? Vt : "").length,
        Ht = Number((Math.round(et / dt) * dt).toFixed(jt));
      return Math.min(mt, Math.max(Dt, Ht))
    }

    function mt(tt, et, Vt) {
      const Ot = "number" === typeof Vt ? Dt(et, Vt) : Vt;
      return {
        ...tt,
        [et]: Ot
      }
    }

    function dt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(qt).every((Ot => Vt.includes(Ot) || tt[Ot] === et[Ot]))
    }

    function jt(tt) {
      return dt(tt, qt)
    }

    function Ht(tt) {
      return `#${tt.toString(16).padStart(6,"0")}`
    }

    function Xt(tt) {
      const et = /^#?([0-9a-f]{6})$/i.exec(tt.trim());
      return et ? parseInt(et[1], 16) : null
    }
  },
  34363: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt,
      g: () => lt
    });
    var Ot = Vt(63),
      qt = Vt(39),
      Dt = Vt(34354),
      mt = Vt(34342);
    const dt = "crosshairCode";
    let jt = null;
    const Ht = new Set;

    function Xt() {
      if (null === jt) {
        var tt;
        const et = qt.e.getItem(dt);
        jt = null !== (tt = "string" === typeof et ? (0, Dt.g)(et) : null) && void 0 !== tt ? tt : mt.g
      }
      return jt
    }

    function Qt(tt) {
      jt = tt, (0, mt.o)(tt) ? qt.e.removeItem(dt) : qt.e.setItem(dt, (0, Dt.k)(tt));
      for (const et of Ht) et()
    }

    function lt() {
      const [tt, et] = (0, Ot.useState)(Xt);
      return (0, Ot.useEffect)((() => {
        const tt = () => {
          et(Xt())
        };
        return tt(), Vt = tt, Ht.add(Vt), () => {
          Ht.delete(Vt)
        };
        var Vt
      }), []), tt
    }
  },
  37002: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      e: () => jt,
      i: () => mt
    });
    var Ot = Vt(710),
      qt = Vt(2848);

    function Dt(tt) {
      return tt === (0, qt.e)().Ttt ? (0, qt.e)().lL : tt
    }

    function mt(tt) {
      return !(0, Ot.B)(tt) && Dt(tt) === (0, qt.e)().lL
    }
    const dt = "gravity";

    function jt() {
      return (0, qt.e)().physics[dt][1]
    }
  },
  36992: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Kt
    });
    var Ot = Vt(36996),
      qt = Vt(229),
      Dt = Vt(5030),
      mt = Vt(36999),
      dt = Vt(36685),
      jt = Vt(37032),
      Ht = Vt(37002),
      Xt = Vt(404),
      Qt = Vt.n(Xt),
      lt = Vt(1293),
      Et = Vt(2848),
      ft = Vt(37028),
      wt = Vt(31),
      yt = Vt(26),
      Nt = Vt(37004),
      Mt = Vt(37008),
      bt = Vt(37014);
    const Jt = new Set(["note"]);
    const Ct = {
      stop: () => Ct,
      fade: () => Ct,
      rate: () => Ct,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Ct,
      setPannerAttr: () => Ct,
      setPosition: () => Ct
    };
    class ut {
      constructor(tt) {
        let et, {
          src: Vt,
          volumeScalar: qt,
          isSoundSprite: mt
        } = tt;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, mt ? (et = (0, Ot.k)(Vt), this._spriteTrackSrc = et) : et = {
          src: lt.clientSideServerUrls.staticUrl + Vt
        }, this._volumeMultiplier = new jt.g, this._volumeMultiplier.setMultiplierType("persistentScalar", qt), this._howl = (0, dt.countDecodesAs)(new Dt.Howl({
          ...et,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let tt, et = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          Vt = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (et) {
          var Ot;
          if (null === (Ot = this._spriteTrackSrc) || void 0 === Ot || !Ot.sprite[et]) throw new Error("No such sprite in your spritetrack");
          tt = this._howl.play(et)
        } else tt = this._howl.play();
        Vt && this._howl.loop(!0, tt);
        let qt = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), tt);
        const Dt = {
          stop: () => {
            var et;
            return null === (et = this.liveHowl()) || void 0 === et || et.stop(tt), Dt
          },
          fade: (et, Vt, Ot) => {
            var qt;
            return null === (qt = this.liveHowl()) || void 0 === qt || qt.fade(et, Vt, Ot, tt), Dt
          },
          rate: et => {
            var Vt;
            return null === (Vt = this.liveHowl()) || void 0 === Vt || Vt.rate(et, tt), Dt
          },
          stopsAtOnce: () => this._howl.playing(tt) && !this._howl._playLock,
          isAlive: () => {
            const et = this._howl._soundById(tt);
            return !this._loadFailed && !!et && !et._ended
          },
          getDurationMs: () => this._howl._soundById(tt) ? 1e3 * this._howl.duration(tt) / this._howl.rate(tt) : 0,
          getVolume: () => qt * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => qt,
          setRelativeVolume: et => {
            var Vt;
            if (et > 1) throw new Error("Volume should be <= 1");
            return qt = yt.b.get("soundOnFromAd") ? et : 0, null === (Vt = this.liveHowl()) || void 0 === Vt || Vt.volume(Math.min(1, qt * this._volumeMultiplier.getTotalMultipliedVal()), tt), Dt
          },
          setPannerAttr: et => {
            let {
              coneInnerAngle: Vt,
              coneOuterAngle: Ot = 360,
              coneOuterGain: qt,
              distanceModel: mt,
              maxDistance: dt,
              panningModel: jt,
              refDistance: Ht,
              rolloffFactor: Xt
            } = et;
            return this._setPannerAttr({
              id: tt,
              coneInnerAngle: Vt,
              coneOuterAngle: Ot,
              coneOuterGain: qt,
              distanceModel: mt,
              maxDistance: dt,
              panningModel: jt,
              refDistance: Ht,
              rolloffFactor: Xt
            }), Dt
          },
          setPosition: et => {
            var Vt;
            return null === (Vt = this.liveHowl()) || void 0 === Vt || Vt.pos(et[2], et[1], et[0], tt), Dt
          }
        };
        return Dt
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, mt.c)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(tt) {
        this._volumeMultiplier.setMultiplierType("globalVolume", tt), this._howl.volume(tt)
      }
      _setPannerAttr(tt) {
        let {
          id: et,
          coneInnerAngle: Vt = 360,
          coneOuterAngle: Ot = 360,
          coneOuterGain: qt = 0,
          distanceModel: Dt = "inverse",
          maxDistance: mt = 1e3,
          panningModel: dt = "HRTF",
          refDistance: jt = ft.f,
          rolloffFactor: Ht = 1
        } = tt;
        const Xt = this.liveHowl();
        if (null === Xt) return;
        Xt.pannerAttr({
          coneOuterAngle: Ot
        }, et);
        const Qt = {
          coneInnerAngle: Vt,
          coneOuterAngle: Ot,
          coneOuterGain: qt,
          distanceModel: Dt,
          maxDistance: mt,
          panningModel: dt,
          refDistance: jt,
          rolloffFactor: Ht
        };
        Xt.pannerAttr(Qt, et)
      }
    }
    const Kt = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new Nt.d, wt.j.subscribe("appManagerUpdated|soundVolume", (tt => {
          const et = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const Vt of et) Vt.setGlobalVolume(tt)
        }))
      }
      play(tt, et) {
        var Vt;
        let Dt, mt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Vt = (0, Et.e)()) || void 0 === Vt ? void 0 : Vt.lL,
          dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ft.c,
          jt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ft.f,
          Xt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var lt;
        (0, Et.e)() ? Dt = !!Array.isArray(mt) || (0, Ht.c)(mt) !== (null === (lt = (0, Et.e)()) || void 0 === lt ? void 0 : lt.lL): Dt = !1;
        const wt = (0, Ot.o)(tt),
          yt = this.loadSheet(Dt ? this.spatialSheets : this.stereoSheets, wt);
        if (!Dt) {
          const Vt = yt.play(tt, Xt);
          return Vt.setRelativeVolume(et), Vt
        }
        const Mt = (0, Et.e)(),
          bt = Array.isArray(mt) ? mt : Mt.mJ.YM(mt),
          ut = Mt.mJ.YM(Mt.lL);
        if (!bt || Qt().sqrDist(bt, ut) > dt * dt) return Ct;
        let Kt;
        if (!Xt) {
          if (!this.spatialVoices.admit({
              group: Jt.has(wt) ? null : (0, Nt.i)(tt),
              loudness: (0, Nt.e)(et, Qt().pm(bt, ut), jt),
              startMs: performance.now(),
              getDurationMs: () => {
                var tt, et;
                return null !== (tt = null === (et = Kt) || void 0 === et ? void 0 : et.getDurationMs()) && void 0 !== tt ? tt : 0
              },
              isAlive: () => {
                var tt, et;
                return null !== (tt = null === (et = Kt) || void 0 === et ? void 0 : et.isAlive()) && void 0 !== tt && tt
              },
              canStop: () => {
                var tt, et;
                return null !== (tt = null === (et = Kt) || void 0 === et ? void 0 : et.stopsAtOnce()) && void 0 !== tt && tt
              },
              stop: () => {
                var tt;
                null === (tt = Kt) || void 0 === tt || tt.stop()
              }
            })) return Ct
        }
        return Kt = yt.play(tt, Xt), Kt.setRelativeVolume(et), Kt.setPannerAttr({
          refDistance: jt
        }), Kt.setPosition([bt[0], bt[1] + qt.e.Yy * qt.e.playerEyeToHeightRatio, bt[2]]), Kt
      }
      preload(tt) {
        this.loadSheet(this.stereoSheets, (0, Ot.o)(tt))
      }
      loadSheet(tt, et) {
        let Vt = tt[et];
        return Vt || ((0, bt.d)(et), Vt = new ut({
          src: et,
          isSoundSprite: !0,
          volumeScalar: 1
        }), Vt.setGlobalVolume(yt.b.get("soundVolume")), tt[et] = Vt), Vt
      }
      freeSheetsAfterGame() {
        for (const tt of [this.stereoSheets, this.spatialSheets])
          for (const [et, Vt] of Object.entries(tt)) !Mt.c.has(et) && Vt.loaded() && (Vt.unloadOnceIdle(), delete tt[et])
      }
    }
  },
  37073: (tt, et, Vt) => {
    function Ot(tt, et) {
      var Vt, Ot, qt, Dt, mt, dt, jt, Ht;
      return tt.name === et.name && ((null === (Vt = tt.attributes) || void 0 === Vt || null === (Ot = Vt.customAttributes) || void 0 === Ot ? void 0 : Ot.stackKey) === (null === (qt = et.attributes) || void 0 === qt || null === (Dt = qt.customAttributes) || void 0 === Dt ? void 0 : Dt.stackKey) && (!0 !== (null === (mt = tt.attributes) || void 0 === mt || null === (dt = mt.customAttributes) || void 0 === dt ? void 0 : dt.unstackable) && !0 !== (null === (jt = et.attributes) || void 0 === jt || null === (Ht = jt.customAttributes) || void 0 === Ht ? void 0 : Ht.unstackable)))
    }
    Vt.d(et, {
      d: () => Ot
    })
  },
  37172: (tt, et, Vt) => {
    function Ot(tt) {
      return tt.includes("Leaf Bed")
    }

    function qt(tt) {
      return / Bed(?: Head)?(?:\||$)/.test(tt) && !Ot(tt)
    }

    function Dt(tt) {
      return tt.includes(" Strongbed")
    }

    function mt(tt) {
      return Ot(tt) || qt(tt) || Dt(tt)
    }
    Vt.d(et, {
      e: () => mt,
      i: () => Ot,
      l: () => Dt,
      o: () => qt
    })
  },
  37164: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht
    });
    var Ot = Vt(37172),
      qt = Vt(9425);
    const Dt = [],
      mt = [],
      dt = [],
      jt = [];
    for (const Xt of Object.keys(qt.l))(0, Ot.i)(Xt) ? Dt.push(Xt) : (0, Ot.o)(Xt) && mt.push(Xt), (0, Ot.l)(Xt) && dt.push(Xt), (Xt.includes(" Bed Head") || Xt.includes(" Strongbed Head")) && jt.push(Xt);
    const Ht = {
      leafBeds: Dt,
      woolBeds: mt,
      strongBeds: dt,
      beds: [...Dt, ...mt, ...dt],
      bedHeads: jt,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6667: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      e: () => qt,
      i: () => jt,
      j: () => Dt,
      m: () => Ht,
      n: () => Ot,
      q: () => dt
    });
    let Ot = function(tt) {
        return tt[tt.DEFAULT = 0] = "DEFAULT", tt[tt.BOAT = 1] = "BOAT", tt[tt.GLIDER = 2] = "GLIDER", tt[tt.BALLOON = 3] = "BALLOON", tt[tt.SLEEPING = 4] = "SLEEPING", tt[tt.RIDING_MOB = 5] = "RIDING_MOB", tt[tt.CAR = 6] = "CAR", tt[tt.HOVERCRAFT = 7] = "HOVERCRAFT", tt
      }({}),
      qt = function(tt) {
        return tt[tt.WOOD = 0] = "WOOD", tt[tt.OBSIDIAN = 1] = "OBSIDIAN", tt[tt.SPEED = 2] = "SPEED", tt
      }({}),
      Dt = function(tt) {
        return tt[tt.WOOD = 0] = "WOOD", tt[tt.IRON = 1] = "IRON", tt[tt.GOLD = 2] = "GOLD", tt[tt.DIAMOND = 3] = "DIAMOND", tt
      }({}),
      mt = function(tt) {
        return tt[tt.YELLOW = 0] = "YELLOW", tt[tt.WHITE = 1] = "WHITE", tt[tt.RED = 2] = "RED", tt[tt.PURPLE = 3] = "PURPLE", tt[tt.PINK = 4] = "PINK", tt[tt.ORANGE = 5] = "ORANGE", tt[tt.MAGENTA = 6] = "MAGENTA", tt[tt.LIME = 7] = "LIME", tt[tt.LIGHT_GRAY = 8] = "LIGHT_GRAY", tt[tt.LIGHT_BLUE = 9] = "LIGHT_BLUE", tt[tt.GREEN = 10] = "GREEN", tt[tt.GRAY = 11] = "GRAY", tt[tt.CYAN = 12] = "CYAN", tt[tt.BROWN = 13] = "BROWN", tt[tt.BLUE = 14] = "BLUE", tt[tt.BLACK = 15] = "BLACK", tt
      }({}),
      dt = function(tt) {
        return tt[tt.ROTATION_1 = 0] = "ROTATION_1", tt[tt.ROTATION_2 = 1] = "ROTATION_2", tt[tt.ROTATION_3 = 2] = "ROTATION_3", tt[tt.ROTATION_4 = 3] = "ROTATION_4", tt
      }({}),
      jt = function(tt) {
        return tt[tt.KART = 0] = "KART", tt[tt.OFF_ROADER = 1] = "OFF_ROADER", tt[tt.CAR = 2] = "CAR", tt[tt.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", tt[tt.ARMORED_CAR = 4] = "ARMORED_CAR", tt[tt.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", tt[tt.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", tt[tt.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", tt
      }({});
    Ot.DEFAULT, Ot.BOAT, qt.SPEED, Ot.GLIDER, Dt.DIAMOND, Ot.BALLOON, mt.BLACK, Ot.SLEEPING, dt.ROTATION_4, Ot.RIDING_MOB, Ot.CAR, jt.MOONSTONE_MINING_DRILL, Ot.HOVERCRAFT;
    let Ht = function(tt) {
      return tt[tt.NORMAL = 0] = "NORMAL", tt[tt.GLIDING = 1] = "GLIDING", tt[tt.FLOATING = 2] = "FLOATING", tt
    }({})
  },
  34351: () => {}
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);