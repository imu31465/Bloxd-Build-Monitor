export const id = 114;
export const ids = [114];
export const modules = {
  36788: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Od,
      i: () => qd
    });
    kd(9212);
    var pd = kd(56),
      Nd = kd(1459),
      Wd = kd(1932),
      Pd = kd(1968),
      Zd = kd(22),
      gd = kd(2357),
      Cd = kd(36790),
      Kd = kd(36798),
      od = kd(9176),
      ld = kd(9210),
      Qd = kd(9222),
      Ld = kd(1103);
    const Od = (0, pd.memo)((function() {
      var dd;
      const {
        isTouchScreen: Jd,
        clientEscMenuOptions: kd,
        scriptedCameraFacing: Wd,
        crosshairShownOverride: Od,
        crosshairGameView: Rd
      } = (0, Zd.j)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Id = (0, gd.j)("gunshotOrigin"), Gd = (0, pd.useRef)(null), vd = (0, pd.useRef)(!1), [xd, Bd] = (0, pd.useState)(ed);
      (0, Nd.h)("cameraZoomSet", Bd), (0, pd.useEffect)((() => {
        Bd(ed())
      }), []);
      const sd = (0, Pd.k)("heldItemAim"),
        Md = sd.gun,
        Fd = (0, Qd.h)(),
        Yd = (0, pd.useRef)(Fd);
      Yd.current = Fd;
      const [md, bd] = (0, pd.useState)(!1);
      (0, pd.useEffect)((() => (0, Kd.i)("crosshairAccuracy", qd)), []), (0, Nd.h)("mouseState", (dd => {
        let {
          isDown: Jd
        } = dd;
        vd.current = Jd, Gd.current && (Gd.current.style.transform = (0, ld.i)(Jd, Yd.current.growOnClick)), "shapes" === Yd.current.style && bd(Jd)
      }));
      const Sd = (0, od.i)(Jd, kd.touchActionButtons);
      return (null !== (dd = (0, Cd.e)(Rd, Od)) && void 0 !== dd ? dd : (0, Cd.j)(sd, xd > 1, Sd, Id)) ? "movement" === Wd || "cursor" === Wd ? null : (0, Ld.jsxs)(Ld.Fragment, {
        children: [Md && (0, Ld.jsx)(ad, {
          custom: Fd.forGuns && "shapes" === Fd.style ? Fd : null,
          touch: Jd
        }), !Md && (0, Ld.jsx)(ld.e, {
          settings: Fd,
          touch: Jd,
          pressRef: Gd,
          pressed: "shapes" === Fd.style ? md : vd.current
        })]
      }) : null
    }));

    function ed() {
      return Wd.gameBridge.lookup("cameraZoom", null)
    }
    const Rd = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Id = {
        current: null
      },
      Gd = {
        current: null
      };
    let vd = 0,
      xd = 0;

    function qd(dd) {
      xd = dd, Rd[0].current || Id.current || Gd.current ? sd(dd) : vd = dd
    }

    function Bd(dd) {
      return ((0, Cd.i)(dd) - (0, Cd.i)(0)) * window.innerHeight / 100
    }

    function sd(dd) {
      var Jd;
      if (null === (Jd = Gd.current) || void 0 === Jd || Jd.call(Gd, Bd(dd)), Rd[0].current) {
        const Jd = `${(0,Cd.i)(dd)}vh`;
        Rd[0].current.style.transform = `translateX(calc(0px - ${Jd}))`, Rd[1].current.style.transform = `translateX(calc(0px + ${Jd}))`, Rd[2].current.style.transform = `translateY(calc(0px - ${Jd}))`, Rd[3].current.style.transform = `translateY(calc(0px + ${Jd}))`
      }
      Id.current && (Id.current.style.filter = `blur(${Math.round(dd/10)}px)`)
    }

    function ad(dd) {
      let {
        custom: Jd,
        touch: kd
      } = dd;
      const Wd = (0, Nd.i)("aimingOverlay", "none"),
        Pd = "1.2vh",
        Zd = "0.3vh";
      (0, pd.useEffect)((() => {
        vd && sd(vd)
      }), []);
      const gd = (0, pd.useRef)(null !== Jd);
      return (0, pd.useLayoutEffect)((() => {
        var dd;
        Jd ? null === (dd = Gd.current) || void 0 === dd || dd.call(Gd, Bd(xd)) : gd.current && sd(xd);
        gd.current = null !== Jd
      }), [Jd]), (0, Ld.jsxs)(Ld.Fragment, {
        children: ["sniper" === Wd && (0, Ld.jsxs)("div", {
          ref: Id,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, Ld.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, Ld.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, Ld.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, Ld.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, Ld.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Wd ? 0 : 1
          },
          children: [Jd && (0, Ld.jsx)(ld.e, {
            settings: Jd,
            touch: kd,
            spreadRef: Gd
          }), !Jd && (0, Ld.jsxs)(Ld.Fragment, {
            children: [(0, Ld.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Pd,
                height: Zd,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Rd[0]
            }), (0, Ld.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Pd,
                height: Zd,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Rd[1]
            }), (0, Ld.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Zd,
                height: Pd,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Rd[2]
            }), (0, Ld.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Zd,
                height: Pd,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Rd[3]
            })]
          })]
        })]
      })
    }
  },
  9210: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Od,
      i: () => Ld
    });
    kd(9212);
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(56),
      Pd = kd(9179);

    function Zd(dd, Jd) {
      return Math.max(1, Math.round(dd * Jd))
    }

    function gd(dd, Jd) {
      const kd = Jd * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        pd = function(dd, Jd) {
          if (dd.lines) return Zd(dd.lineThickness, Jd) % 2;
          if (dd.dot) return Zd(dd.dotSize, Jd) % 2;
          return Cd(dd, Jd) % 2
        }(dd, Jd),
        Nd = Kd(dd.lineThickness * kd, pd),
        Wd = Zd(dd.lineLength, kd),
        Pd = Math.round(dd.gap * kd),
        gd = dd.outline > 0 ? Zd(dd.outline, kd) : 0,
        ld = [];
      if (dd.lines && (ld.push({
          x: Nd + Pd,
          y: 0,
          w: Wd,
          h: Nd,
          arm: "right"
        }), ld.push({
          x: -Pd - Wd,
          y: 0,
          w: Wd,
          h: Nd,
          arm: "left"
        }), ld.push({
          x: 0,
          y: Nd + Pd,
          w: Nd,
          h: Wd,
          arm: "down"
        }), dd.tStyle || ld.push({
          x: 0,
          y: -Pd - Wd,
          w: Nd,
          h: Wd,
          arm: "up"
        }), 0 === Pd && ld.push({
          x: 0,
          y: 0,
          w: Nd,
          h: Nd
        })), dd.dot) {
        const Jd = Kd(dd.dotSize * kd, pd),
          Wd = dd.lines && 0 === Pd && dd.dotSize > dd.lineThickness ? Math.max(Jd, Nd + 2) : Jd,
          Zd = (Nd - Wd) / 2;
        ld.push({
          x: Zd,
          y: Zd,
          w: Wd,
          h: Wd
        })
      }
      const Qd = ld.map((dd => ({
        ...dd,
        x: dd.x - gd,
        y: dd.y - gd,
        w: dd.w + 2 * gd,
        h: dd.h + 2 * gd
      })));
      let Ld = null,
        Od = null;
      if (dd.circle) {
        const Jd = Zd(dd.circleThickness, kd),
          Wd = function(dd, Jd) {
            return dd + (dd % 2 === Jd ? 0 : 1)
          }(Cd(dd, kd), pd),
          Pd = (Nd - Wd) / 2;
        Ld = od(Pd, Wd, Jd), gd > 0 && (Od = od(Pd - gd, Wd + 2 * gd, Jd + 2 * gd))
      }
      return {
        cell: Nd,
        fills: ld,
        outlines: gd > 0 ? Qd : [],
        ring: Ld,
        ringOutline: Od
      }
    }

    function Cd(dd, Jd) {
      return Math.round(dd.circleRadius * Jd * 2 + Zd(dd.circleThickness, Jd))
    }

    function Kd(dd, Jd) {
      return Math.max(2 - Jd, 2 * Math.round((dd - Jd) / 2) + Jd)
    }

    function od(dd, Jd, kd) {
      const pd = 2 * kd >= Jd - 1;
      return {
        x: dd,
        y: dd,
        size: Jd,
        border: Math.min(kd, Math.floor(Jd / 2)),
        filled: pd
      }
    }
    var ld = kd(1103);
    const Qd = 1.4;

    function Ld(dd, Jd) {
      return dd && Jd ? `scale(${Qd})` : "scale(1)"
    }

    function Od(dd) {
      return "classic" === dd.settings.style ? (0, ld.jsx)(Id, {
        ...dd
      }) : (0, ld.jsx)(ad, {
        ...dd
      })
    }
    const ed = .125;

    function Rd(dd, Jd) {
      const kd = {};
      if (dd.color !== Pd.g.color && (kd.color = (0, Pd.j)(dd.color)), dd.opacity !== Pd.g.opacity && (kd.opacity = dd.opacity / 100), dd.outline !== Pd.g.outline || dd.outlineColor !== Pd.g.outlineColor) {
        const Jd = dd.outline,
          pd = (0, Pd.j)(dd.outlineColor);
        kd.textShadow = Jd > 0 ? `-${Jd}px 0 ${pd}, 0 ${Jd}px ${pd}, ${Jd}px 0 ${pd}, 0 -${Jd}px ${pd}` : "none"
      }
      if (dd.size !== Pd.g.size) {
        const pd = dd.size / 100;
        kd.fontSize = Jd ? `calc(max(1.3rem, 18px) * ${pd})` : `calc(1.3rem * ${pd})`, kd.marginTop = `-${ed}em`, kd.transformOrigin = `50% calc(50% + ${ed}em)`
      }
      return kd
    }

    function Id(dd) {
      let {
        settings: Jd,
        touch: kd,
        inPreview: pd,
        inEditor: Wd,
        pressed: Pd = !1,
        pressRef: Zd
      } = dd;
      return (0, ld.jsx)("div", {
        className: Nd()("Crosshair", {
          Touch: kd,
          CrosshairInPreview: pd,
          CrosshairInEditor: Wd || pd
        }),
        ref: Zd,
        style: {
          transform: Ld(Pd, Jd.growOnClick),
          ...Rd(Jd, kd)
        },
        children: "+"
      })
    }

    function Gd(dd, Jd) {
      return dd / Jd + "px"
    }

    function vd(dd, Jd, kd, pd) {
      return {
        ...Bd(dd, Jd, kd),
        width: Gd(dd.w, kd),
        height: Gd(dd.h, kd),
        background: pd
      }
    }

    function xd(dd, Jd, kd) {
      return {
        left: Gd(dd.x, Jd),
        top: Gd(dd.y, Jd),
        width: Gd(dd.size, Jd),
        height: Gd(dd.size, Jd),
        borderWidth: Gd(dd.border, Jd),
        borderColor: kd,
        background: dd.filled ? kd : void 0
      }
    }
    const qd = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Bd(dd, Jd, kd) {
      const [pd, Nd] = dd.arm ? qd[dd.arm] : [0, 0], Wd = Math.round(Jd * kd);
      return {
        left: Gd(dd.x + pd * Wd, kd),
        top: Gd(dd.y + Nd * Wd, kd)
      }
    }

    function sd(dd) {
      return dd.arm ? {
        "data-arm": dd.arm,
        "data-x": dd.x,
        "data-y": dd.y
      } : {}
    }

    function ad(dd) {
      let {
        settings: Jd,
        inPreview: kd,
        inEditor: pd,
        pressed: Zd = !1,
        spread: Cd,
        spreadRef: Kd
      } = dd;
      const od = (0, Wd.useRef)(null),
        {
          box: Ld,
          dpr: Od
        } = function(dd) {
          const [Jd, kd] = (0, Wd.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Wd.useLayoutEffect)((() => {
            const Jd = dd.current;
            if (!Jd) return;
            const pd = () => {
              const dd = Jd.getBoundingClientRect(),
                pd = window.devicePixelRatio || 1;
              kd((Jd => Jd.dpr === pd && Jd.box.left === dd.left && Jd.box.top === dd.top && Jd.box.width === dd.width && Jd.box.height === dd.height ? Jd : {
                box: {
                  left: dd.left,
                  top: dd.top,
                  width: dd.width,
                  height: dd.height
                },
                dpr: pd
              }))
            };
            pd();
            const Nd = new ResizeObserver(pd);
            return Nd.observe(Jd), window.addEventListener("resize", pd), window.addEventListener("scroll", pd, !0), () => {
              Nd.disconnect(), window.removeEventListener("resize", pd), window.removeEventListener("scroll", pd, !0)
            }
          }), [dd]), Jd
        }(od),
        ed = (0, Wd.useRef)(Od);
      ed.current = Od;
      const Rd = gd(Jd, Od, Zd && Jd.growOnClick ? Qd : 1),
        Id = function(dd, Jd, kd) {
          const pd = Math.round((dd.left + dd.width / 2) * kd - Jd / 2),
            Nd = Math.round((dd.top + dd.height / 2) * kd - Jd / 2);
          return {
            x: pd / kd - dd.left,
            y: Nd / kd - dd.top
          }
        }(Ld, Rd.cell, Od),
        Gd = (0, Pd.j)(Jd.color),
        qd = (0, Pd.j)(Jd.outlineColor),
        ad = (0, Wd.useRef)(0);
      (0, Wd.useLayoutEffect)((() => {
        if (Kd) return Kd.current = dd => {
          var Jd;
          ad.current = dd, null === (Jd = od.current) || void 0 === Jd || Jd.querySelectorAll("[data-arm]").forEach((Jd => {
            Object.assign(Jd.style, Bd(function(dd) {
              return {
                x: Number(dd.dataset.x),
                y: Number(dd.dataset.y),
                arm: dd.dataset.arm
              }
            }(Jd), dd, ed.current))
          }))
        }, () => {
          Kd.current = null
        }
      }), [Kd]);
      const Md = null !== Cd && void 0 !== Cd ? Cd : ad.current;
      return (0, ld.jsx)("div", {
        ref: od,
        className: Nd()("CrosshairShapes", {
          CrosshairInPreview: kd,
          CrosshairInEditor: pd || kd,
          CrosshairSpreads: void 0 !== Kd
        }),
        children: (0, ld.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Id.x,
            top: Id.y,
            opacity: Jd.opacity / 100
          },
          children: (0, ld.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Rd.ringOutline && (0, ld.jsx)("div", {
              className: "CrosshairRing",
              style: xd(Rd.ringOutline, Od, qd)
            }), Rd.outlines.map(((dd, Jd) => (0, ld.jsx)("div", {
              className: "CrosshairPart",
              ...sd(dd),
              style: vd(dd, Md, Od, qd)
            }, `o${Jd}`))), Rd.ring && (0, ld.jsx)("div", {
              className: "CrosshairRing",
              style: xd(Rd.ring, Od, Gd)
            }), Rd.fills.map(((dd, Jd) => (0, ld.jsx)("div", {
              className: "CrosshairPart",
              ...sd(dd),
              style: vd(dd, Md, Od, Gd)
            }, `f${Jd}`)))]
          })
        })
      })
    }
  },
  9220: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd,
      f: () => ed,
      j: () => Od
    });
    var pd = kd(9179);
    const Nd = "XH1-",
      Wd = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Pd = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Zd = ["color", "outlineColor"],
      gd = 1 + 3 * Zd.length + Pd.length + 1,
      Cd = Math.ceil(8 * gd / Math.log2(62)),
      Kd = Nd.length + Cd;

    function od(dd) {
      let Jd = 90;
      for (const kd of dd) Jd = 31 * Jd + kd & 255;
      return Jd
    }
    const ld = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Qd = BigInt(ld.length);

    function Ld(dd, Jd) {
      let kd = 0n;
      for (const Nd of dd) {
        const dd = ld.indexOf(Nd);
        if (dd < 0) return null;
        kd = kd * Qd + BigInt(dd)
      }
      if (kd >> BigInt(8 * Jd) !== 0n) return null;
      const pd = [];
      for (let Nd = 0; Nd < Jd; Nd++) pd.unshift(Number(0xffn & kd)), kd >>= 8n;
      return pd
    }

    function Od(dd) {
      let Jd = "shapes" === dd.style ? 1 : 0;
      Wd.forEach(((kd, pd) => {
        dd[kd] && (Jd |= 1 << pd + 1)
      }));
      const kd = [Jd];
      for (const Nd of Zd) {
        const Jd = (0, pd.i)(Nd, dd[Nd]);
        kd.push(Jd >> 16 & 255, Jd >> 8 & 255, 255 & Jd)
      }
      for (const Nd of Pd) {
        const {
          min: Jd,
          step: Wd
        } = pd.e[Nd];
        kd.push(Math.round(((0, pd.i)(Nd, dd[Nd]) - Jd) / Wd))
      }
      return kd.push(od(kd)), Nd + function(dd, Jd) {
        let kd = 0n;
        for (const Nd of dd) kd = kd << 8n | BigInt(Nd);
        let pd = "";
        for (let Nd = 0; Nd < Jd; Nd++) pd = ld[Number(kd % Qd)] + pd, kd /= Qd;
        return pd
      }(kd, Cd)
    }

    function ed(dd) {
      for (const Jd of dd.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Cd}})`, "gi"))) {
        const dd = Rd(Ld(Jd[1], gd));
        if (dd) return dd
      }
      return null
    }

    function Rd(dd) {
      if (!dd || dd.length !== gd || od(dd.slice(0, -1)) !== dd[dd.length - 1]) return null;
      const Jd = dd[0],
        kd = {
          ...pd.g,
          style: 1 & Jd ? "shapes" : "classic"
        };
      Wd.forEach(((dd, pd) => {
        kd[dd] = 0 !== (Jd & 1 << pd + 1)
      }));
      let Nd = 1;
      for (const pd of Zd) kd[pd] = dd[Nd] << 16 | dd[Nd + 1] << 8 | dd[Nd + 2], Nd += 3;
      for (const Wd of Pd) {
        const {
          min: Jd,
          step: Pd
        } = pd.e[Wd];
        kd[Wd] = (0, pd.i)(Wd, Jd + dd[Nd] * Pd), Nd++
      }
      return kd
    }
  },
  9179: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      g: () => Nd,
      i: () => Wd,
      j: () => Cd,
      k: () => gd,
      m: () => Kd,
      n: () => Zd,
      o: () => Pd
    });
    const pd = {
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
      Nd = Object.freeze({
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

    function Wd(dd, Jd) {
      var kd;
      const {
        min: Wd,
        max: Pd,
        step: Zd
      } = pd[dd];
      if (!Number.isFinite(Jd)) return Nd[dd];
      const gd = (null !== (kd = String(Zd).split(".")[1]) && void 0 !== kd ? kd : "").length,
        Cd = Number((Math.round(Jd / Zd) * Zd).toFixed(gd));
      return Math.min(Pd, Math.max(Wd, Cd))
    }

    function Pd(dd, Jd, kd) {
      const pd = "number" === typeof kd ? Wd(Jd, kd) : kd;
      return {
        ...dd,
        [Jd]: pd
      }
    }

    function Zd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Nd).every((pd => kd.includes(pd) || dd[pd] === Jd[pd]))
    }

    function gd(dd) {
      return Zd(dd, Nd)
    }

    function Cd(dd) {
      return `#${dd.toString(16).padStart(6,"0")}`
    }

    function Kd(dd) {
      const Jd = /^#?([0-9a-f]{6})$/i.exec(dd.trim());
      return Jd ? parseInt(Jd[1], 16) : null
    }
  },
  9222: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => od,
      h: () => ld
    });
    var pd = kd(56),
      Nd = kd(33),
      Wd = kd(9220),
      Pd = kd(9179);
    const Zd = "crosshairCode";
    let gd = null;
    const Cd = new Set;

    function Kd() {
      if (null === gd) {
        var dd;
        const Jd = Nd.i.getItem(Zd);
        gd = null !== (dd = "string" === typeof Jd ? (0, Wd.f)(Jd) : null) && void 0 !== dd ? dd : Pd.g
      }
      return gd
    }

    function od(dd) {
      gd = dd, (0, Pd.k)(dd) ? Nd.i.removeItem(Zd) : Nd.i.setItem(Zd, (0, Wd.j)(dd));
      for (const Jd of Cd) Jd()
    }

    function ld() {
      const [dd, Jd] = (0, pd.useState)(Kd);
      return (0, pd.useEffect)((() => {
        const dd = () => {
          Jd(Kd())
        };
        return dd(), kd = dd, Cd.add(kd), () => {
          Cd.delete(kd)
        };
        var kd
      }), []), dd
    }
  },
  36942: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      d: () => gd,
      f: () => Pd
    });
    var pd = kd(610),
      Nd = kd(2634);

    function Wd(dd) {
      return dd === (0, Nd.e)().pJd ? (0, Nd.e)().kU : dd
    }

    function Pd(dd) {
      return !(0, pd.I)(dd) && Wd(dd) === (0, Nd.e)().kU
    }
    const Zd = "gravity";

    function gd() {
      return (0, Nd.e)().physics[Zd][1]
    }
  },
  36926: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Bd
    });
    var pd = kd(36933),
      Nd = kd(193),
      Wd = kd(4743),
      Pd = kd(36935),
      Zd = kd(36605),
      gd = kd(36972),
      Cd = kd(36942),
      Kd = kd(325),
      od = kd.n(Kd),
      ld = kd(1220),
      Qd = kd(2634),
      Ld = kd(36965),
      Od = kd(29),
      ed = kd(22),
      Rd = kd(36946),
      Id = kd(36952),
      Gd = kd(36960);
    const vd = new Set(["note"]);
    const xd = {
      stop: () => xd,
      fade: () => xd,
      rate: () => xd,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => xd,
      setPannerAttr: () => xd,
      setPosition: () => xd
    };
    class qd {
      constructor(dd) {
        let Jd, {
          src: kd,
          volumeScalar: Nd,
          isSoundSprite: Pd
        } = dd;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, Pd ? (Jd = (0, pd.k)(kd), this._spriteTrackSrc = Jd) : Jd = {
          src: ld.clientSideServerUrls.staticUrl + kd
        }, this._volumeMultiplier = new gd.j, this._volumeMultiplier.setMultiplierType("persistentScalar", Nd), this._howl = (0, Zd.countDecodesAs)(new Wd.Howl({
          ...Jd,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let dd, Jd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          kd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Jd) {
          var pd;
          if (null === (pd = this._spriteTrackSrc) || void 0 === pd || !pd.sprite[Jd]) throw new Error("No such sprite in your spritetrack");
          dd = this._howl.play(Jd)
        } else dd = this._howl.play();
        kd && this._howl.loop(!0, dd);
        let Nd = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), dd);
        const Wd = {
          stop: () => {
            var Jd;
            return null === (Jd = this.liveHowl()) || void 0 === Jd || Jd.stop(dd), Wd
          },
          fade: (Jd, kd, pd) => {
            var Nd;
            return null === (Nd = this.liveHowl()) || void 0 === Nd || Nd.fade(Jd, kd, pd, dd), Wd
          },
          rate: Jd => {
            var kd;
            return null === (kd = this.liveHowl()) || void 0 === kd || kd.rate(Jd, dd), Wd
          },
          stopsAtOnce: () => this._howl.playing(dd) && !this._howl._playLock,
          isAlive: () => {
            const Jd = this._howl._soundById(dd);
            return !this._loadFailed && !!Jd && !Jd._ended
          },
          getDurationMs: () => this._howl._soundById(dd) ? 1e3 * this._howl.duration(dd) / this._howl.rate(dd) : 0,
          getVolume: () => Nd * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Nd,
          setRelativeVolume: Jd => {
            var kd;
            if (Jd > 1) throw new Error("Volume should be <= 1");
            return Nd = ed.d.get("soundOnFromAd") ? Jd : 0, null === (kd = this.liveHowl()) || void 0 === kd || kd.volume(Math.min(1, Nd * this._volumeMultiplier.getTotalMultipliedVal()), dd), Wd
          },
          setPannerAttr: Jd => {
            let {
              coneInnerAngle: kd,
              coneOuterAngle: pd = 360,
              coneOuterGain: Nd,
              distanceModel: Pd,
              maxDistance: Zd,
              panningModel: gd,
              refDistance: Cd,
              rolloffFactor: Kd
            } = Jd;
            return this._setPannerAttr({
              id: dd,
              coneInnerAngle: kd,
              coneOuterAngle: pd,
              coneOuterGain: Nd,
              distanceModel: Pd,
              maxDistance: Zd,
              panningModel: gd,
              refDistance: Cd,
              rolloffFactor: Kd
            }), Wd
          },
          setPosition: Jd => {
            var kd;
            return null === (kd = this.liveHowl()) || void 0 === kd || kd.pos(Jd[2], Jd[1], Jd[0], dd), Wd
          }
        };
        return Wd
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, Pd.d)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(dd) {
        this._volumeMultiplier.setMultiplierType("globalVolume", dd), this._howl.volume(dd)
      }
      _setPannerAttr(dd) {
        let {
          id: Jd,
          coneInnerAngle: kd = 360,
          coneOuterAngle: pd = 360,
          coneOuterGain: Nd = 0,
          distanceModel: Wd = "inverse",
          maxDistance: Pd = 1e3,
          panningModel: Zd = "HRTF",
          refDistance: gd = Ld.h,
          rolloffFactor: Cd = 1
        } = dd;
        const Kd = this.liveHowl();
        if (null === Kd) return;
        Kd.pannerAttr({
          coneOuterAngle: pd
        }, Jd);
        const od = {
          coneInnerAngle: kd,
          coneOuterAngle: pd,
          coneOuterGain: Nd,
          distanceModel: Wd,
          maxDistance: Pd,
          panningModel: Zd,
          refDistance: gd,
          rolloffFactor: Cd
        };
        Kd.pannerAttr(od, Jd)
      }
    }
    const Bd = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new Rd.d, Od.j.subscribe("appManagerUpdated|soundVolume", (dd => {
          const Jd = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const kd of Jd) kd.setGlobalVolume(dd)
        }))
      }
      play(dd, Jd) {
        var kd;
        let Wd, Pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (kd = (0, Qd.e)()) || void 0 === kd ? void 0 : kd.kU,
          Zd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ld.f,
          gd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ld.h,
          Kd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var ld;
        (0, Qd.e)() ? Wd = !!Array.isArray(Pd) || (0, Cd.b)(Pd) !== (null === (ld = (0, Qd.e)()) || void 0 === ld ? void 0 : ld.kU): Wd = !1;
        const Od = (0, pd.m)(dd),
          ed = this.loadSheet(Wd ? this.spatialSheets : this.stereoSheets, Od);
        if (!Wd) {
          const kd = ed.play(dd, Kd);
          return kd.setRelativeVolume(Jd), kd
        }
        const Id = (0, Qd.e)(),
          Gd = Array.isArray(Pd) ? Pd : Id.vG.yI(Pd),
          qd = Id.vG.yI(Id.kU);
        if (!Gd || od().sqrDist(Gd, qd) > Zd * Zd) return xd;
        let Bd;
        if (!Kd) {
          if (!this.spatialVoices.admit({
              group: vd.has(Od) ? null : (0, Rd.j)(dd),
              loudness: (0, Rd.g)(Jd, od().gP(Gd, qd), gd),
              startMs: performance.now(),
              getDurationMs: () => {
                var dd, Jd;
                return null !== (dd = null === (Jd = Bd) || void 0 === Jd ? void 0 : Jd.getDurationMs()) && void 0 !== dd ? dd : 0
              },
              isAlive: () => {
                var dd, Jd;
                return null !== (dd = null === (Jd = Bd) || void 0 === Jd ? void 0 : Jd.isAlive()) && void 0 !== dd && dd
              },
              canStop: () => {
                var dd, Jd;
                return null !== (dd = null === (Jd = Bd) || void 0 === Jd ? void 0 : Jd.stopsAtOnce()) && void 0 !== dd && dd
              },
              stop: () => {
                var dd;
                null === (dd = Bd) || void 0 === dd || dd.stop()
              }
            })) return xd
        }
        return Bd = ed.play(dd, Kd), Bd.setRelativeVolume(Jd), Bd.setPannerAttr({
          refDistance: gd
        }), Bd.setPosition([Gd[0], Gd[1] + Nd.g.uR * Nd.g.playerEyeToHeightRatio, Gd[2]]), Bd
      }
      preload(dd) {
        this.loadSheet(this.stereoSheets, (0, pd.m)(dd))
      }
      loadSheet(dd, Jd) {
        let kd = dd[Jd];
        return kd || ((0, Gd.e)(Jd), kd = new qd({
          src: Jd,
          isSoundSprite: !0,
          volumeScalar: 1
        }), kd.setGlobalVolume(ed.d.get("soundVolume")), dd[Jd] = kd), kd
      }
      freeSheetsAfterGame() {
        for (const dd of [this.stereoSheets, this.spatialSheets])
          for (const [Jd, kd] of Object.entries(dd)) !Id.b.has(Jd) && kd.loaded() && (kd.unloadOnceIdle(), delete dd[Jd])
      }
    }
  },
  37015: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      var kd, pd, Nd, Wd, Pd, Zd, gd, Cd;
      return dd.name === Jd.name && ((null === (kd = dd.attributes) || void 0 === kd || null === (pd = kd.customAttributes) || void 0 === pd ? void 0 : pd.stackKey) === (null === (Nd = Jd.attributes) || void 0 === Nd || null === (Wd = Nd.customAttributes) || void 0 === Wd ? void 0 : Wd.stackKey) && (!0 !== (null === (Pd = dd.attributes) || void 0 === Pd || null === (Zd = Pd.customAttributes) || void 0 === Zd ? void 0 : Zd.unstackable) && !0 !== (null === (gd = Jd.attributes) || void 0 === gd || null === (Cd = gd.customAttributes) || void 0 === Cd ? void 0 : Cd.unstackable)))
    }
    kd.d(Jd, {
      d: () => pd
    })
  },
  37106: (dd, Jd, kd) => {
    function pd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Nd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !pd(dd)
    }

    function Wd(dd) {
      return dd.includes(" Strongbed")
    }

    function Pd(dd) {
      return pd(dd) || Nd(dd) || Wd(dd)
    }
    kd.d(Jd, {
      c: () => Pd,
      f: () => pd,
      j: () => Wd,
      n: () => Nd
    })
  },
  37101: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd
    });
    var pd = kd(37106),
      Nd = kd(9331);
    const Wd = [],
      Pd = [],
      Zd = [],
      gd = [];
    for (const Kd of Object.keys(Nd.n))(0, pd.f)(Kd) ? Wd.push(Kd) : (0, pd.n)(Kd) && Pd.push(Kd), (0, pd.j)(Kd) && Zd.push(Kd), (Kd.includes(" Bed Head") || Kd.includes(" Strongbed Head")) && gd.push(Kd);
    const Cd = {
      leafBeds: Wd,
      woolBeds: Pd,
      strongBeds: Zd,
      beds: [...Wd, ...Pd, ...Zd],
      bedHeads: gd,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6347: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      c: () => Nd,
      d: () => gd,
      h: () => Wd,
      i: () => Cd,
      k: () => pd,
      o: () => Zd
    });
    let pd = function(dd) {
        return dd[dd.DEFAULT = 0] = "DEFAULT", dd[dd.BOAT = 1] = "BOAT", dd[dd.GLIDER = 2] = "GLIDER", dd[dd.BALLOON = 3] = "BALLOON", dd[dd.SLEEPING = 4] = "SLEEPING", dd[dd.RIDING_MOB = 5] = "RIDING_MOB", dd[dd.CAR = 6] = "CAR", dd[dd.HOVERCRAFT = 7] = "HOVERCRAFT", dd
      }({}),
      Nd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.OBSIDIAN = 1] = "OBSIDIAN", dd[dd.SPEED = 2] = "SPEED", dd
      }({}),
      Wd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.IRON = 1] = "IRON", dd[dd.GOLD = 2] = "GOLD", dd[dd.DIAMOND = 3] = "DIAMOND", dd
      }({}),
      Pd = function(dd) {
        return dd[dd.YELLOW = 0] = "YELLOW", dd[dd.WHITE = 1] = "WHITE", dd[dd.RED = 2] = "RED", dd[dd.PURPLE = 3] = "PURPLE", dd[dd.PINK = 4] = "PINK", dd[dd.ORANGE = 5] = "ORANGE", dd[dd.MAGENTA = 6] = "MAGENTA", dd[dd.LIME = 7] = "LIME", dd[dd.LIGHT_GRAY = 8] = "LIGHT_GRAY", dd[dd.LIGHT_BLUE = 9] = "LIGHT_BLUE", dd[dd.GREEN = 10] = "GREEN", dd[dd.GRAY = 11] = "GRAY", dd[dd.CYAN = 12] = "CYAN", dd[dd.BROWN = 13] = "BROWN", dd[dd.BLUE = 14] = "BLUE", dd[dd.BLACK = 15] = "BLACK", dd
      }({}),
      Zd = function(dd) {
        return dd[dd.ROTATION_1 = 0] = "ROTATION_1", dd[dd.ROTATION_2 = 1] = "ROTATION_2", dd[dd.ROTATION_3 = 2] = "ROTATION_3", dd[dd.ROTATION_4 = 3] = "ROTATION_4", dd
      }({}),
      gd = function(dd) {
        return dd[dd.KART = 0] = "KART", dd[dd.OFF_ROADER = 1] = "OFF_ROADER", dd[dd.CAR = 2] = "CAR", dd[dd.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", dd[dd.ARMORED_CAR = 4] = "ARMORED_CAR", dd[dd.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", dd[dd.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", dd[dd.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", dd
      }({});
    pd.DEFAULT, pd.BOAT, Nd.SPEED, pd.GLIDER, Wd.DIAMOND, pd.BALLOON, Pd.BLACK, pd.SLEEPING, Zd.ROTATION_4, pd.RIDING_MOB, pd.CAR, gd.MOONSTONE_MINING_DRILL, pd.HOVERCRAFT;
    let Cd = function(dd) {
      return dd[dd.NORMAL = 0] = "NORMAL", dd[dd.GLIDING = 1] = "GLIDING", dd[dd.FLOATING = 2] = "FLOATING", dd
    }({})
  },
  9212: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);