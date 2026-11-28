export const id = 75;
export const ids = [75, 186];
export const modules = {
  38243: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => bd,
      i: () => od,
      k: () => td
    });
    var Wd = md(35535),
      Fd = md(3428),
      Rd = md(3432),
      Xd = md(9850),
      Kd = md(1566),
      hd = md(66),
      vd = md(86),
      Qd = md(1341);

    function td() {
      var dd;
      return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
        children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function od(dd) {
      var Od;
      let {
        show: md
      } = dd;
      (0, Kd.i)(Fd.d, (0, Fd.n)());
      const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
      return (0, hd.useEffect)((() => {
        var dd;
        md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
      }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
        showing: md,
        globallyUniqueKey: "clientGameMenu",
        children: null === vd || void 0 === vd ? void 0 : vd.content
      })
    }
    const Nd = new Map,
      qd = new Set;

    function Hd(dd, Od) {
      Od ? Nd.set(dd, Od) : Nd.delete(dd);
      for (const md of qd) md()
    }

    function yd(dd) {
      let {
        placement: Od = "bottom"
      } = dd;
      const md = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        const dd = md.current;
        return Hd(Od, dd), () => {
          Nd.get(Od) === dd && Hd(Od, null)
        }
      }), [Od]), (0, Qd.jsx)("div", {
        ref: md,
        id: `clientGameHud-${Od}`,
        style: {
          display: "contents"
        }
      })
    }

    function bd(dd) {
      let {
        children: Od,
        placement: md = "bottom"
      } = dd;
      const [Wd, Fd] = (0, hd.useState)((() => {
        var dd;
        return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
      }));
      return (0, hd.useEffect)((() => {
        const dd = () => {
          var dd;
          Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
        };
        return qd.add(dd), dd(), () => {
          qd.delete(dd)
        }
      }), [md]), Wd ? (0, vd.createPortal)(Od, Wd) : null
    }
  },
  38264: (dd, Od, md) => {
    md.d(Od, {
      e: () => Hd,
      f: () => wd
    });
    md(35513);
    var Wd = md(66),
      Fd = md(1566),
      Rd = md(2092),
      Xd = md(2125),
      Kd = md(29),
      hd = md(3403),
      vd = md(38273),
      Qd = md(38280),
      td = md(35499),
      od = md(35511),
      Nd = md(35524),
      qd = md(1341);
    const Hd = (0, Wd.memo)((function() {
      var dd;
      const {
        isTouchScreen: Od,
        clientEscMenuOptions: md,
        scriptedCameraFacing: Rd,
        crosshairShownOverride: Hd,
        crosshairGameView: bd
      } = (0, Kd.p)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Td = (0, hd.j)("gunshotOrigin"), pd = (0, Wd.useRef)(null), Yd = (0, Wd.useRef)(!1), [gd, Ed] = (0, Wd.useState)(yd);
      (0, Fd.f)("cameraZoomSet", Ed), (0, Wd.useEffect)((() => {
        Ed(yd())
      }), []);
      const Jd = (0, Xd.h)("heldItemAim"),
        xd = Jd.gun,
        Bd = (0, Nd.g)(),
        Sd = (0, Wd.useRef)(Bd);
      Sd.current = Bd;
      const [sd, ud] = (0, Wd.useState)(!1);
      (0, Wd.useEffect)((() => (0, Qd.h)("crosshairAccuracy", wd)), []), (0, Fd.f)("mouseState", (dd => {
        let {
          isDown: Od
        } = dd;
        Yd.current = Od, pd.current && (pd.current.style.transform = (0, od.g)(Od, Sd.current.growOnClick)), "shapes" === Sd.current.style && ud(Od)
      }));
      const Vd = (0, td.f)(Od, md.touchActionButtons);
      return (null !== (dd = (0, vd.c)(bd, Hd)) && void 0 !== dd ? dd : (0, vd.j)(Jd, gd > 1, Vd, Td)) ? "movement" === Rd || "cursor" === Rd ? null : (0, qd.jsxs)(qd.Fragment, {
        children: [xd && (0, qd.jsx)(Ud, {
          custom: Bd.forGuns && "shapes" === Bd.style ? Bd : null,
          touch: Od
        }), !xd && (0, qd.jsx)(od.d, {
          settings: Bd,
          touch: Od,
          pressRef: pd,
          pressed: "shapes" === Bd.style ? sd : Yd.current
        })]
      }) : null
    }));

    function yd() {
      return Rd.gameBridge.lookup("cameraZoom", null)
    }
    const bd = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Td = {
        current: null
      },
      pd = {
        current: null
      };
    let Yd = 0,
      gd = 0;

    function wd(dd) {
      gd = dd, bd[0].current || Td.current || pd.current ? Jd(dd) : Yd = dd
    }

    function Ed(dd) {
      return ((0, vd.g)(dd) - (0, vd.g)(0)) * window.innerHeight / 100
    }

    function Jd(dd) {
      var Od;
      if (null === (Od = pd.current) || void 0 === Od || Od.call(pd, Ed(dd)), bd[0].current) {
        const Od = `${(0,vd.g)(dd)}vh`;
        bd[0].current.style.transform = `translateX(calc(0px - ${Od}))`, bd[1].current.style.transform = `translateX(calc(0px + ${Od}))`, bd[2].current.style.transform = `translateY(calc(0px - ${Od}))`, bd[3].current.style.transform = `translateY(calc(0px + ${Od}))`
      }
      Td.current && (Td.current.style.filter = `blur(${Math.round(dd/10)}px)`)
    }

    function Ud(dd) {
      let {
        custom: Od,
        touch: md
      } = dd;
      const Rd = (0, Fd.i)("aimingOverlay", "none"),
        Xd = "1.2vh",
        Kd = "0.3vh";
      (0, Wd.useEffect)((() => {
        Yd && Jd(Yd)
      }), []);
      const hd = (0, Wd.useRef)(null !== Od);
      return (0, Wd.useLayoutEffect)((() => {
        var dd;
        Od ? null === (dd = pd.current) || void 0 === dd || dd.call(pd, Ed(gd)) : hd.current && Jd(gd);
        hd.current = null !== Od
      }), [Od]), (0, qd.jsxs)(qd.Fragment, {
        children: ["sniper" === Rd && (0, qd.jsxs)("div", {
          ref: Td,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, qd.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, qd.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, qd.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, qd.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, qd.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Rd ? 0 : 1
          },
          children: [Od && (0, qd.jsx)(od.d, {
            settings: Od,
            touch: md,
            spreadRef: pd
          }), !Od && (0, qd.jsxs)(qd.Fragment, {
            children: [(0, qd.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Xd,
                height: Kd,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: bd[0]
            }), (0, qd.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Xd,
                height: Kd,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: bd[1]
            }), (0, qd.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Kd,
                height: Xd,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: bd[2]
            }), (0, qd.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Kd,
                height: Xd,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: bd[3]
            })]
          })]
        })]
      })
    }
  },
  35535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(5197),
      Fd = md(5206);

    function Rd(dd) {
      let {
        children: Od,
        showing: md,
        globallyUniqueKey: Rd,
        alwaysMountChildren: Xd = !1,
        doGameplayStartStopOnShow: Kd = !0,
        keepsMovement: hd = !1
      } = dd;
      return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
    }
  },
  35511: (dd, Od, md) => {
    md.d(Od, {
      d: () => Hd,
      g: () => qd
    });
    md(35513);
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(66),
      Xd = md(35508);

    function Kd(dd, Od) {
      return Math.max(1, Math.round(dd * Od))
    }

    function hd(dd, Od) {
      const md = Od * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Wd = function(dd, Od) {
          if (dd.lines) return Kd(dd.lineThickness, Od) % 2;
          if (dd.dot) return Kd(dd.dotSize, Od) % 2;
          return vd(dd, Od) % 2
        }(dd, Od),
        Fd = Qd(dd.lineThickness * md, Wd),
        Rd = Kd(dd.lineLength, md),
        Xd = Math.round(dd.gap * md),
        hd = dd.outline > 0 ? Kd(dd.outline, md) : 0,
        od = [];
      if (dd.lines && (od.push({
          x: Fd + Xd,
          y: 0,
          w: Rd,
          h: Fd,
          arm: "right"
        }), od.push({
          x: -Xd - Rd,
          y: 0,
          w: Rd,
          h: Fd,
          arm: "left"
        }), od.push({
          x: 0,
          y: Fd + Xd,
          w: Fd,
          h: Rd,
          arm: "down"
        }), dd.tStyle || od.push({
          x: 0,
          y: -Xd - Rd,
          w: Fd,
          h: Rd,
          arm: "up"
        }), 0 === Xd && od.push({
          x: 0,
          y: 0,
          w: Fd,
          h: Fd
        })), dd.dot) {
        const Od = Qd(dd.dotSize * md, Wd),
          Rd = dd.lines && 0 === Xd && dd.dotSize > dd.lineThickness ? Math.max(Od, Fd + 2) : Od,
          Kd = (Fd - Rd) / 2;
        od.push({
          x: Kd,
          y: Kd,
          w: Rd,
          h: Rd
        })
      }
      const Nd = od.map((dd => ({
        ...dd,
        x: dd.x - hd,
        y: dd.y - hd,
        w: dd.w + 2 * hd,
        h: dd.h + 2 * hd
      })));
      let qd = null,
        Hd = null;
      if (dd.circle) {
        const Od = Kd(dd.circleThickness, md),
          Rd = function(dd, Od) {
            return dd + (dd % 2 === Od ? 0 : 1)
          }(vd(dd, md), Wd),
          Xd = (Fd - Rd) / 2;
        qd = td(Xd, Rd, Od), hd > 0 && (Hd = td(Xd - hd, Rd + 2 * hd, Od + 2 * hd))
      }
      return {
        cell: Fd,
        fills: od,
        outlines: hd > 0 ? Nd : [],
        ring: qd,
        ringOutline: Hd
      }
    }

    function vd(dd, Od) {
      return Math.round(dd.circleRadius * Od * 2 + Kd(dd.circleThickness, Od))
    }

    function Qd(dd, Od) {
      return Math.max(2 - Od, 2 * Math.round((dd - Od) / 2) + Od)
    }

    function td(dd, Od, md) {
      const Wd = 2 * md >= Od - 1;
      return {
        x: dd,
        y: dd,
        size: Od,
        border: Math.min(md, Math.floor(Od / 2)),
        filled: Wd
      }
    }
    var od = md(1341);
    const Nd = 1.4;

    function qd(dd, Od) {
      return dd && Od ? `scale(${Nd})` : "scale(1)"
    }

    function Hd(dd) {
      return "classic" === dd.settings.style ? (0, od.jsx)(Td, {
        ...dd
      }) : (0, od.jsx)(Ud, {
        ...dd
      })
    }
    const yd = .125;

    function bd(dd, Od) {
      const md = {};
      if (dd.color !== Xd.d.color && (md.color = (0, Xd.j)(dd.color)), dd.opacity !== Xd.d.opacity && (md.opacity = dd.opacity / 100), dd.outline !== Xd.d.outline || dd.outlineColor !== Xd.d.outlineColor) {
        const Od = dd.outline,
          Wd = (0, Xd.j)(dd.outlineColor);
        md.textShadow = Od > 0 ? `-${Od}px 0 ${Wd}, 0 ${Od}px ${Wd}, ${Od}px 0 ${Wd}, 0 -${Od}px ${Wd}` : "none"
      }
      if (dd.size !== Xd.d.size) {
        const Wd = dd.size / 100;
        md.fontSize = Od ? `calc(max(1.3rem, 18px) * ${Wd})` : `calc(1.3rem * ${Wd})`, md.marginTop = `-${yd}em`, md.transformOrigin = `50% calc(50% + ${yd}em)`
      }
      return md
    }

    function Td(dd) {
      let {
        settings: Od,
        touch: md,
        inPreview: Wd,
        inEditor: Rd,
        pressed: Xd = !1,
        pressRef: Kd
      } = dd;
      return (0, od.jsx)("div", {
        className: Fd()("Crosshair", {
          Touch: md,
          CrosshairInPreview: Wd,
          CrosshairInEditor: Rd || Wd
        }),
        ref: Kd,
        style: {
          transform: qd(Xd, Od.growOnClick),
          ...bd(Od, md)
        },
        children: "+"
      })
    }

    function pd(dd, Od) {
      return dd / Od + "px"
    }

    function Yd(dd, Od, md, Wd) {
      return {
        ...Ed(dd, Od, md),
        width: pd(dd.w, md),
        height: pd(dd.h, md),
        background: Wd
      }
    }

    function gd(dd, Od, md) {
      return {
        left: pd(dd.x, Od),
        top: pd(dd.y, Od),
        width: pd(dd.size, Od),
        height: pd(dd.size, Od),
        borderWidth: pd(dd.border, Od),
        borderColor: md,
        background: dd.filled ? md : void 0
      }
    }
    const wd = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Ed(dd, Od, md) {
      const [Wd, Fd] = dd.arm ? wd[dd.arm] : [0, 0], Rd = Math.round(Od * md);
      return {
        left: pd(dd.x + Wd * Rd, md),
        top: pd(dd.y + Fd * Rd, md)
      }
    }

    function Jd(dd) {
      return dd.arm ? {
        "data-arm": dd.arm,
        "data-x": dd.x,
        "data-y": dd.y
      } : {}
    }

    function Ud(dd) {
      let {
        settings: Od,
        inPreview: md,
        inEditor: Wd,
        pressed: Kd = !1,
        spread: vd,
        spreadRef: Qd
      } = dd;
      const td = (0, Rd.useRef)(null),
        {
          box: qd,
          dpr: Hd
        } = function(dd) {
          const [Od, md] = (0, Rd.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Rd.useLayoutEffect)((() => {
            const Od = dd.current;
            if (!Od) return;
            const Wd = () => {
              const dd = Od.getBoundingClientRect(),
                Wd = window.devicePixelRatio || 1;
              md((Od => Od.dpr === Wd && Od.box.left === dd.left && Od.box.top === dd.top && Od.box.width === dd.width && Od.box.height === dd.height ? Od : {
                box: {
                  left: dd.left,
                  top: dd.top,
                  width: dd.width,
                  height: dd.height
                },
                dpr: Wd
              }))
            };
            Wd();
            const Fd = new ResizeObserver(Wd);
            return Fd.observe(Od), window.addEventListener("resize", Wd), window.addEventListener("scroll", Wd, !0), () => {
              Fd.disconnect(), window.removeEventListener("resize", Wd), window.removeEventListener("scroll", Wd, !0)
            }
          }), [dd]), Od
        }(td),
        yd = (0, Rd.useRef)(Hd);
      yd.current = Hd;
      const bd = hd(Od, Hd, Kd && Od.growOnClick ? Nd : 1),
        Td = function(dd, Od, md) {
          const Wd = Math.round((dd.left + dd.width / 2) * md - Od / 2),
            Fd = Math.round((dd.top + dd.height / 2) * md - Od / 2);
          return {
            x: Wd / md - dd.left,
            y: Fd / md - dd.top
          }
        }(qd, bd.cell, Hd),
        pd = (0, Xd.j)(Od.color),
        wd = (0, Xd.j)(Od.outlineColor),
        Ud = (0, Rd.useRef)(0);
      (0, Rd.useLayoutEffect)((() => {
        if (Qd) return Qd.current = dd => {
          var Od;
          Ud.current = dd, null === (Od = td.current) || void 0 === Od || Od.querySelectorAll("[data-arm]").forEach((Od => {
            Object.assign(Od.style, Ed(function(dd) {
              return {
                x: Number(dd.dataset.x),
                y: Number(dd.dataset.y),
                arm: dd.dataset.arm
              }
            }(Od), dd, yd.current))
          }))
        }, () => {
          Qd.current = null
        }
      }), [Qd]);
      const xd = null !== vd && void 0 !== vd ? vd : Ud.current;
      return (0, od.jsx)("div", {
        ref: td,
        className: Fd()("CrosshairShapes", {
          CrosshairInPreview: md,
          CrosshairInEditor: Wd || md,
          CrosshairSpreads: void 0 !== Qd
        }),
        children: (0, od.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Td.x,
            top: Td.y,
            opacity: Od.opacity / 100
          },
          children: (0, od.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [bd.ringOutline && (0, od.jsx)("div", {
              className: "CrosshairRing",
              style: gd(bd.ringOutline, Hd, wd)
            }), bd.outlines.map(((dd, Od) => (0, od.jsx)("div", {
              className: "CrosshairPart",
              ...Jd(dd),
              style: Yd(dd, xd, Hd, wd)
            }, `o${Od}`))), bd.ring && (0, od.jsx)("div", {
              className: "CrosshairRing",
              style: gd(bd.ring, Hd, pd)
            }), bd.fills.map(((dd, Od) => (0, od.jsx)("div", {
              className: "CrosshairPart",
              ...Jd(dd),
              style: Yd(dd, xd, Hd, pd)
            }, `f${Od}`)))]
          })
        })
      })
    }
  },
  35521: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      e: () => yd,
      h: () => Hd
    });
    var Wd = md(35508);
    const Fd = "XH1-",
      Rd = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Xd = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Kd = ["color", "outlineColor"],
      hd = 1 + 3 * Kd.length + Xd.length + 1,
      vd = Math.ceil(8 * hd / Math.log2(62)),
      Qd = Fd.length + vd;

    function td(dd) {
      let Od = 90;
      for (const md of dd) Od = 31 * Od + md & 255;
      return Od
    }
    const od = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Nd = BigInt(od.length);

    function qd(dd, Od) {
      let md = 0n;
      for (const Fd of dd) {
        const dd = od.indexOf(Fd);
        if (dd < 0) return null;
        md = md * Nd + BigInt(dd)
      }
      if (md >> BigInt(8 * Od) !== 0n) return null;
      const Wd = [];
      for (let Fd = 0; Fd < Od; Fd++) Wd.unshift(Number(0xffn & md)), md >>= 8n;
      return Wd
    }

    function Hd(dd) {
      let Od = "shapes" === dd.style ? 1 : 0;
      Rd.forEach(((md, Wd) => {
        dd[md] && (Od |= 1 << Wd + 1)
      }));
      const md = [Od];
      for (const Fd of Kd) {
        const Od = (0, Wd.f)(Fd, dd[Fd]);
        md.push(Od >> 16 & 255, Od >> 8 & 255, 255 & Od)
      }
      for (const Fd of Xd) {
        const {
          min: Od,
          step: Rd
        } = Wd.b[Fd];
        md.push(Math.round(((0, Wd.f)(Fd, dd[Fd]) - Od) / Rd))
      }
      return md.push(td(md)), Fd + function(dd, Od) {
        let md = 0n;
        for (const Fd of dd) md = md << 8n | BigInt(Fd);
        let Wd = "";
        for (let Fd = 0; Fd < Od; Fd++) Wd = od[Number(md % Nd)] + Wd, md /= Nd;
        return Wd
      }(md, vd)
    }

    function yd(dd) {
      for (const Od of dd.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${vd}})`, "gi"))) {
        const dd = bd(qd(Od[1], hd));
        if (dd) return dd
      }
      return null
    }

    function bd(dd) {
      if (!dd || dd.length !== hd || td(dd.slice(0, -1)) !== dd[dd.length - 1]) return null;
      const Od = dd[0],
        md = {
          ...Wd.d,
          style: 1 & Od ? "shapes" : "classic"
        };
      Rd.forEach(((dd, Wd) => {
        md[dd] = 0 !== (Od & 1 << Wd + 1)
      }));
      let Fd = 1;
      for (const Wd of Kd) md[Wd] = dd[Fd] << 16 | dd[Fd + 1] << 8 | dd[Fd + 2], Fd += 3;
      for (const Rd of Xd) {
        const {
          min: Od,
          step: Xd
        } = Wd.b[Rd];
        md[Rd] = (0, Wd.f)(Rd, Od + dd[Fd] * Xd), Fd++
      }
      return md
    }
  },
  35508: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      d: () => Fd,
      f: () => Rd,
      j: () => vd,
      n: () => hd,
      o: () => Qd,
      q: () => Kd,
      u: () => Xd
    });
    const Wd = {
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
      Fd = Object.freeze({
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

    function Rd(dd, Od) {
      var md;
      const {
        min: Rd,
        max: Xd,
        step: Kd
      } = Wd[dd];
      if (!Number.isFinite(Od)) return Fd[dd];
      const hd = (null !== (md = String(Kd).split(".")[1]) && void 0 !== md ? md : "").length,
        vd = Number((Math.round(Od / Kd) * Kd).toFixed(hd));
      return Math.min(Xd, Math.max(Rd, vd))
    }

    function Xd(dd, Od, md) {
      const Wd = "number" === typeof md ? Rd(Od, md) : md;
      return {
        ...dd,
        [Od]: Wd
      }
    }

    function Kd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Fd).every((Wd => md.includes(Wd) || dd[Wd] === Od[Wd]))
    }

    function hd(dd) {
      return Kd(dd, Fd)
    }

    function vd(dd) {
      return `#${dd.toString(16).padStart(6,"0")}`
    }

    function Qd(dd) {
      const Od = /^#?([0-9a-f]{6})$/i.exec(dd.trim());
      return Od ? parseInt(Od[1], 16) : null
    }
  },
  35524: (dd, Od, md) => {
    md.d(Od, {
      c: () => td,
      g: () => od
    });
    var Wd = md(66),
      Fd = md(46),
      Rd = md(35521),
      Xd = md(35508);
    const Kd = "crosshairCode";
    let hd = null;
    const vd = new Set;

    function Qd() {
      if (null === hd) {
        var dd;
        const Od = Fd.k.getItem(Kd);
        hd = null !== (dd = "string" === typeof Od ? (0, Rd.e)(Od) : null) && void 0 !== dd ? dd : Xd.d
      }
      return hd
    }

    function td(dd) {
      hd = dd, (0, Xd.n)(dd) ? Fd.k.removeItem(Kd) : Fd.k.setItem(Kd, (0, Rd.h)(dd));
      for (const Od of vd) Od()
    }

    function od() {
      const [dd, Od] = (0, Wd.useState)(Qd);
      return (0, Wd.useEffect)((() => {
        const dd = () => {
          Od(Qd())
        };
        return dd(), md = dd, vd.add(md), () => {
          vd.delete(md)
        };
        var md
      }), []), dd
    }
  },
  10106: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      f: () => Xd
    });
    var Wd = md(210);
    class Fd {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(dd) || this.marks.set(dd, Od)
      }
      marked() {
        return Wd.V.flatMap((dd => {
          var Od;
          const md = null !== (Od = this.marks.get(dd)) && void 0 !== Od ? Od : Rd.marks.get(dd);
          return void 0 === md ? [] : [
            [dd, md]
          ]
        }))
      }
    }
    const Rd = new Fd;

    function Xd(dd) {
      Rd.mark(dd)
    }
  },
  38273: (dd, Od, md) => {
    function Wd(dd, Od, md, Wd) {
      return !(md && !dd.aimable) && (!Od || dd.gun && "head" !== Wd)
    }

    function Fd(dd) {
      return Math.max(.1 * dd, 1)
    }

    function Rd(dd, Od) {
      return !dd && Od
    }
    md.d(Od, {
      c: () => Rd,
      g: () => Fd,
      j: () => Wd
    })
  },
  38280: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      h: () => Xd
    });
    let Wd = null;
    const Fd = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      Rd = {
        crosshairAccuracy: dd => {
          const Od = Fd.crosshairAccuracy.at(-1);
          Od ? Od.hook(dd) : Wd = dd
        },
        turnDamageIndicators: dd => {
          var Od;
          null === (Od = Fd.turnDamageIndicators.at(-1)) || void 0 === Od || Od.hook(dd)
        },
        turnSoundCues: dd => {
          var Od;
          null === (Od = Fd.turnSoundCues.at(-1)) || void 0 === Od || Od.hook(dd)
        }
      };

    function Xd(dd, Od) {
      const md = {
          hook: Od
        },
        Xd = Fd[dd];
      if (Xd.push(md), "crosshairAccuracy" === dd && null !== Wd) {
        const dd = Wd;
        Wd = null, Rd.crosshairAccuracy(dd)
      }
      return () => {
        const dd = Xd.indexOf(md); - 1 !== dd && Xd.splice(dd, 1)
      }
    }

    function Kd() {
      return Rd
    }
  },
  35499: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      f: () => Fd
    });
    var Wd = md(29);

    function Fd(dd, Od) {
      return dd && !Od
    }

    function Rd() {
      return Fd(Wd.e.get("isTouchScreen"), Wd.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  9850: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;
    const Fd = function(dd) {
        const Od = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Wd = Od, () => {
          Wd === Od && (Wd = null)
        }
      },
      Rd = () => {
        var dd;
        return null !== (dd = Wd) && void 0 !== dd && dd.canCycle() ? Wd.cycle : null
      }
  },
  37958: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => hd,
      e: () => Xd
    });
    var Wd = md(701),
      Fd = md(2402);

    function Rd(dd) {
      return dd === (0, Fd.c)().bV ? (0, Fd.c)().YV : dd
    }

    function Xd(dd) {
      return !(0, Wd.O)(dd) && Rd(dd) === (0, Fd.c)().YV
    }
    const Kd = "gravity";

    function hd() {
      return (0, Fd.c)().physics[Kd][1]
    }
  },
  38063: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      InGameUi: () => Ud.e,
      LobbyLeaderboard: () => xd.c,
      loadCharacterCustomisationUI: () => Bd,
      loadCharacterPreview: () => Sd,
      matchmakeAndPlay: () => Ad,
      matchmakeForAhead: () => Kd.f,
      setUpGame: () => sd
    });
    var Wd = md(1304),
      Fd = md(180),
      Rd = md(29),
      Xd = md(38068),
      Kd = md(38071),
      hd = md(2116),
      vd = md(38112);

    function Qd() {
      return !1 !== hd.e.get("canCustomiseChar")
    }
    let td = !1;
    var od = md(1415),
      Nd = md(5341),
      qd = md(1306),
      Hd = md(285),
      yd = md(4820),
      bd = md(5336),
      Td = md(10097);

    function pd() {
      return function(dd) {
        var Od;
        return !0 !== (null === dd || void 0 === dd ? void 0 : dd.saveData) && !/2g$/.test(null !== (Od = null === dd || void 0 === dd ? void 0 : dd.effectiveType) && void 0 !== Od ? Od : "")
      }(navigator.connection)
    }

    function Yd() {
      return {
        joinStarted: bd.d,
        language: qd.f.get().getCurrentLanguageCode()
      }
    }

    function gd() {
      return new Promise((dd => {
        (0, Nd.y)(dd)
      }))
    }

    function wd() {
      (0, bd.d)() || (0, Td.loadWasmPlayAhead)().catch((dd => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", dd)
      }))
    }
    var Ed = md(4664),
      Jd = md(843);
    var Ud = md(38128),
      xd = md(38540);

    function Bd() {
      return md.e(252).then((() => md(45327)))
    }

    function Sd() {
      return md.e(611).then((() => md(45334)))
    }
    async function sd() {
      return await async function() {
        if ((0, Nd.e)()) {
          if (pd()) try {
            await (0, Nd.u)("wasm loads ahead");
            const dd = await (0, Td.importClientLoad)();
            await Promise.race([dd.startLoadAheadOfJoin(Yd()), gd()]), await (0, Nd.u)("wasm previews");
            const {
              pagePreviews: Od
            } = await Promise.all([md.e(177), md.e(91), md.e(225), md.e(158), md.e(246), md.e(245), md.e(244), md.e(223), md.e(50), md.e(161), md.e(243), md.e(72)]).then((() => md(45347)));
            Od().prefetch((0, Nd.e)() ? Nd.u : void 0)
          } catch (dd) {
            console.warn("[bloxd-wasm-client] the previews' loads ahead of need did not start: the open loads them itself", dd)
          }
          await gd()
        }
      }(), (0, Td.loadWasmPreviews)()
    }
    td || (td = !0, document.addEventListener("keydown", (dd => {
      (0, vd.d)(dd, Qd)
    }))), pd() && (0, yd.e)((() => {
      (0, bd.d)() || (0, Td.importClientLoad)().then((async dd => {
        if ((0, bd.d)()) return;
        const Od = dd.startLoadAheadOfJoin(Yd());
        (0, Hd.e)((() => {
          (0, bd.d)() || dd.probeWebgl2AheadOfJoin()
        })), await Od, (0, Hd.e)(wd)
      }), (dd => {
        console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", dd)
      }))
    }));
    const ud = Rd.e.get("router");
    null === ud ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function dd(Od) {
      if ((0, Jd.e)(Od.state.location.pathname)) return void(0, Td.loadWasmPlay)().catch((() => {}));
      const md = Od.subscribe((Wd => {
        (0, Jd.e)(Wd.location.pathname) && (md(), (0, Ed.e)().then((() => {
          dd(Od)
        })))
      }))
    }(ud), (0, Xd.d)();
    const Vd = (0, Kd.d)((async function(dd, Od) {
      let {
        place: md,
        userContext: Rd,
        direct: Xd,
        matchedAt: Kd,
        rematch: hd
      } = dd;
      const vd = Xd ? 1 / 0 : Kd;
      let Qd;
      try {
        Qd = await (0, Td.loadWasmPlay)()
      } catch (td) {
        return console.error("The wasm client did not load:", td), (0, od.l)({
          websocketUrl: null
        }), Wd.e.errorWithCode(String(td), Fd.l.CONNECT_TO_GAME_SERVER, {
          error: td,
          severity: Od.aborted ? "low" : "medium",
          Ad: Od.aborted
        })
      }
      return Qd.playWasmGame({
        userContext: Rd,
        place: md,
        matchedAt: vd,
        rematch: hd
      }, Od)
    }));

    function Ad() {
      return (0, Td.loadWasmPlay)().catch((() => {})), Vd(...arguments)
    }
  },
  10097: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      importClientLoad: () => td,
      loadWasmPlay: () => qd,
      loadWasmPlayAhead: () => Hd,
      loadWasmPreviews: () => yd
    });
    var Wd = md(4365),
      Fd = md(3206),
      Rd = md(2319),
      Xd = md(5318),
      Kd = md(4734),
      hd = md(5336),
      vd = md(10106);
    let Qd = null;

    function td() {
      return Promise.all([md.e(91), md.e(105), md.e(241), md.e(158), md.e(245), md.e(161), md.e(256), md.e(71)]).then((() => md(42638)))
    }

    function od() {
      return Promise.all([md.e(88), md.e(91), md.e(105), md.e(241), md.e(158), md.e(245), md.e(223), md.e(161), md.e(251), md.e(243), md.e(103), md.e(247), md.e(256), md.e(76)]).then((() => md(42818)))
    }

    function Nd() {
      Promise.all([md.e(85), md.e(89), md.e(86), md.e(87), md.e(88), md.e(105), md.e(102), md.e(307), md.e(127), md.e(281), md.e(255), md.e(247), md.e(55)]).then((() => md(42968))).catch((() => {}))
    }

    function qd() {
      return Xd.b.cancelDownloadForJoin(), (0, Kd.c)(), (0, Fd.f)(), (0, hd.e)(), (0, Rd.g)(), Nd(), td().then((dd => {
        let {
          startJoinLoad: Od
        } = dd;
        Od()
      }), (() => {})), Qd ??= od().then((dd => ((0, vd.f)("phase_chunk"), dd.startWasmPlay(), (0, vd.f)("phase_start"), dd.followPageUiPack((dd => {
        Wd.c.showGamePack(dd)
      })), dd)), (dd => {
        throw Qd = null, dd
      })), Qd
    }

    function Hd() {
      return Nd(), md.e(132).then((() => md(42999))).catch((() => {})), od().then((() => {
        (0, vd.f)("phase_chunk")
      }))
    }

    function yd() {
      return od().then((dd => {
        dd.startWasmPreviews(), dd.prefetchWasmPreviews()
      }))
    }
  },
  37939: (dd, Od, md) => {
    md.d(Od, {
      d: () => Jd
    });
    var Wd = md(37942),
      Fd = md(218),
      Rd = md(5641),
      Xd = md(37948),
      Kd = md(37955),
      hd = md(38006),
      vd = md(37958),
      Qd = md(415),
      td = md.n(Qd),
      od = md(2402),
      Nd = md(38003),
      qd = md(32),
      Hd = md(29),
      yd = md(37965),
      bd = md(37974),
      Td = md(37982),
      pd = md(37989),
      Yd = md(37996);
    const gd = new Set(["note"]);
    const wd = {
      stop: () => wd,
      fade: () => wd,
      rate: () => wd,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => wd,
      setPannerAttr: () => wd,
      setPosition: () => wd
    };
    class Ed {
      constructor(dd) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new hd.h, this._howl = (0, Kd.countDecodesAs)(new Rd.Howl({
          src: [...(0, Wd.t)(dd).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = this._howl.play(Xd.b);
        dd && this._howl.loop(!0, Od);
        let md = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), Od);
        const Wd = {
          stop: () => {
            var dd;
            return null === (dd = this.liveHowl()) || void 0 === dd || dd.stop(Od), Wd
          },
          fade: (dd, md, Fd) => {
            var Rd;
            return null === (Rd = this.liveHowl()) || void 0 === Rd || Rd.fade(dd, md, Fd, Od), Wd
          },
          rate: dd => {
            var md;
            return null === (md = this.liveHowl()) || void 0 === md || md.rate(dd, Od), Wd
          },
          stopsAtOnce: () => this._howl.playing(Od) && !this._howl._playLock,
          isAlive: () => {
            const dd = this._howl._soundById(Od);
            return !this._loadFailed && !!dd && !dd._ended
          },
          getDurationMs: () => this._howl._soundById(Od) ? 1e3 * this._howl.duration(Od) / this._howl.rate(Od) : 0,
          getVolume: () => md * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => md,
          setRelativeVolume: dd => {
            var Fd;
            if (dd > 1) throw new Error("Volume should be <= 1");
            return md = Hd.e.get("soundOnFromAd") ? dd : 0, null === (Fd = this.liveHowl()) || void 0 === Fd || Fd.volume(Math.min(1, md * this._volumeMultiplier.getTotalMultipliedVal()), Od), Wd
          },
          setPannerAttr: dd => {
            let {
              coneInnerAngle: md,
              coneOuterAngle: Fd = 360,
              coneOuterGain: Rd,
              distanceModel: Xd,
              maxDistance: Kd,
              panningModel: hd,
              refDistance: vd,
              rolloffFactor: Qd
            } = dd;
            return this._setPannerAttr({
              id: Od,
              coneInnerAngle: md,
              coneOuterAngle: Fd,
              coneOuterGain: Rd,
              distanceModel: Xd,
              maxDistance: Kd,
              panningModel: hd,
              refDistance: vd,
              rolloffFactor: Qd
            }), Wd
          },
          setPosition: dd => {
            var md;
            return null === (md = this.liveHowl()) || void 0 === md || md.pos(dd[2], dd[1], dd[0], Od), Wd
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
        (0, Xd.e)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(dd) {
        this._volumeMultiplier.setMultiplierType("globalVolume", dd), this._howl.volume(dd)
      }
      _setPannerAttr(dd) {
        let {
          id: Od,
          coneInnerAngle: md = 360,
          coneOuterAngle: Wd = 360,
          coneOuterGain: Fd = 0,
          distanceModel: Rd = "inverse",
          maxDistance: Xd = 1e3,
          panningModel: Kd = "HRTF",
          refDistance: hd = Nd.i,
          rolloffFactor: vd = 1
        } = dd;
        const Qd = this.liveHowl();
        if (null === Qd) return;
        Qd.pannerAttr({
          coneOuterAngle: Wd
        }, Od);
        const td = {
          coneInnerAngle: md,
          coneOuterAngle: Wd,
          coneOuterGain: Fd,
          distanceModel: Rd,
          maxDistance: Xd,
          panningModel: Kd,
          refDistance: hd,
          rolloffFactor: vd
        };
        Qd.pannerAttr(td, Od)
      }
    }
    const Jd = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new yd.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, qd.j.subscribe("appManagerUpdated|soundVolume", (dd => {
          const Od = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const md of Od) md.setGlobalVolume(dd)
        }))
      }
      play(dd, Od) {
        var md;
        let Rd, Xd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (md = (0, od.c)()) || void 0 === md ? void 0 : md.YV,
          Kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nd.f,
          hd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nd.i,
          Qd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var qd;
        (0, od.c)() ? Rd = !!Array.isArray(Xd) || (0, vd.b)(Xd) !== (null === (qd = (0, od.c)()) || void 0 === qd ? void 0 : qd.YV): Rd = !1;
        const Hd = (0, Wd.j)(dd),
          bd = this.loadSound(Rd ? this.spatialSounds : this.stereoSounds, dd);
        if (!Rd) {
          const dd = bd.play(Qd);
          return dd.setRelativeVolume(Od), dd
        }
        const Td = (0, od.c)(),
          pd = Array.isArray(Xd) ? Xd : Td.qE.hY(Xd),
          Ed = Td.qE.hY(Td.YV);
        if (!pd || td().sqrDist(pd, Ed) > Kd * Kd) return wd;
        let Jd;
        if (!Qd) {
          if (!this.spatialVoices.admit({
              group: gd.has(Hd) ? null : (0, yd.i)(dd),
              loudness: (0, yd.e)(Od, td().UX(pd, Ed), hd),
              startMs: performance.now(),
              getDurationMs: () => {
                var dd, Od;
                return null !== (dd = null === (Od = Jd) || void 0 === Od ? void 0 : Od.getDurationMs()) && void 0 !== dd ? dd : 0
              },
              isAlive: () => {
                var dd, Od;
                return null !== (dd = null === (Od = Jd) || void 0 === Od ? void 0 : Od.isAlive()) && void 0 !== dd && dd
              },
              canStop: () => {
                var dd, Od;
                return null !== (dd = null === (Od = Jd) || void 0 === Od ? void 0 : Od.stopsAtOnce()) && void 0 !== dd && dd
              },
              stop: () => {
                var dd;
                null === (dd = Jd) || void 0 === dd || dd.stop()
              }
            })) return wd
        }
        return Jd = bd.play(Qd), Jd.setRelativeVolume(Od), Jd.setPannerAttr({
          refDistance: hd
        }), Jd.setPosition([pd[0], pd[1] + Fd.i.yb * Fd.i.playerEyeToHeightRatio, pd[2]]), !Qd && (0, Yd.g)() && (0, Yd.d)(Hd, dd, pd[0] - Ed[0], pd[2] - Ed[2]), Jd
      }
      preload(dd) {
        const Od = (0, Wd.o)(dd) ? [dd] : (0, Wd.v)(dd);
        if (0 === Od.length) throw new Error(`Invalid sound name ${dd} (no sound has it or starts with it)`);
        for (const md of Od) this.loadSound(this.stereoSounds, md)
      }
      preloadAtIdle(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.c;
        const md = dd.filter((dd => !this.idlePreloads.has(dd)));
        for (const Fd of md) this.idlePreloads.add(Fd);
        const Wd = this.idlePreloadGeneration;
        (0, Td.b)(md, {
          ...Od,
          Ad: () => Wd !== this.idlePreloadGeneration,
          fetchFile: dd => {
            this.idlePreloads.delete(dd);
            try {
              return this.preload(dd), Promise.resolve()
            } catch (Od) {
              return Promise.reject(Od)
            }
          }
        })
      }
      loadSound(dd, Od) {
        const md = dd[Od];
        if (md) return md;
        const Fd = this.makeSound(dd, Od);
        for (const Xd of null !== (Rd = (0, Wd.s)(Od)) && void 0 !== Rd ? Rd : []) {
          var Rd;
          dd[Xd] || this.makeSound(dd, Xd)
        }
        return Fd
      }
      makeSound(dd, Od) {
        (0, pd.g)(Od);
        const md = new Ed(Od);
        return md.setGlobalVolume(Hd.e.get("soundVolume")), dd[Od] = md, md
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const dd of [this.stereoSounds, this.spatialSounds])
          for (const [Od, md] of Object.entries(dd)) !bd.b.has((0, Wd.j)(Od)) && md.loaded() && (md.unloadOnceIdle(), delete dd[Od])
      }
    }
  },
  37755: (dd, Od, md) => {
    md.d(Od, {
      d: () => wd,
      e: () => Bd,
      i: () => Sd,
      m: () => sd
    });
    var Wd = md(37763),
      Fd = md(7874),
      Rd = md(7953),
      Xd = md(37765),
      Kd = md(37772),
      hd = md(37775),
      vd = md(8286),
      Qd = md(8407),
      td = md(37784),
      od = md(8587),
      Nd = md(7723),
      qd = md(8838),
      Hd = md(37787),
      yd = md(37789),
      bd = md(8874),
      Td = md(37796),
      pd = md(37801),
      Yd = md(405);
    const gd = {
        redTeam: Rd.e,
        blueTeam: yd.d,
        greenTeam: pd.f,
        yellowTeam: bd.c,
        cyanTeam: hd.e,
        whiteTeam: Nd.faPlus,
        pinkTeam: Qd.e,
        grayTeam: td.f,
        blackTeam: Hd.d,
        orangeTeam: Td.f,
        lilacTeam: Xd.h,
        purpleTeam: od.g,
        magentaTeam: Kd.h,
        brownTeam: Wd.g,
        limeTeam: Fd.faBolt,
        lightGrayTeam: vd.g,
        lightBlueTeam: qd.e
      },
      wd = Object.fromEntries(Object.values(gd).map((dd => [Ed(dd), dd])));

    function Ed(dd) {
      return `team-${dd.iconName}`
    }
    const Jd = new Map;
    for (const [ud, Vd] of Object.entries(gd)) {
      const dd = Ed(Vd),
        Od = Yd.E[ud];
      Od && Jd.set(Od.toLowerCase(), {
        icon: dd,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let Ud = !1;
    const xd = new Set;

    function Bd(dd) {
      if (dd !== Ud) {
        Ud = dd;
        for (const dd of xd) dd()
      }
    }

    function Sd(dd) {
      var Od;
      return "string" === typeof dd && Ud && null !== (Od = Jd.get(dd.toLowerCase())) && void 0 !== Od ? Od : null
    }

    function sd(dd) {
      return xd.add(dd), () => {
        xd.delete(dd)
      }
    }
  },
  37819: (dd, Od, md) => {
    md.d(Od, {
      A: () => td,
      E: () => Hd,
      F: () => yd,
      J: () => bd,
      K: () => pd,
      c: () => Fd,
      f: () => Nd,
      g: () => Xd,
      k: () => qd,
      o: () => Td,
      p: () => od,
      t: () => Yd,
      w: () => Rd,
      z: () => Qd
    });
    var Wd = md(2057);
    const Fd = [{
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

    function Rd(dd) {
      return (0, Wd.v)(dd.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function Xd(dd, Od) {
      const {
        numLines: md,
        charsPerLine: Wd
      } = Fd[Od];
      return gd(dd, md, Wd, !1)
    }
    const Kd = 7 / 8,
      hd = .25,
      vd = 8;

    function Qd(dd, Od) {
      return {
        width: Math.min(dd, vd) - 2 * hd,
        height: Math.min(Od, vd) - 2 * hd
      }
    }

    function td(dd, Od, md) {
      const Wd = Qd(dd, Od),
        {
          numLines: Rd,
          charsPerLine: Xd
        } = Fd[md];
      return {
        numLines: Math.max(1, Math.floor(Rd / Kd * Wd.height)),
        charsPerLine: Math.max(1, Math.floor(Xd * Wd.width))
      }
    }

    function od(dd, Od, md, Wd) {
      const {
        numLines: Fd,
        charsPerLine: Rd
      } = td(md, Wd, Od);
      return gd(dd, Fd, Rd, !1)
    }
    const Nd = 32e3;

    function qd(dd) {
      return dd.slice(0, Nd)
    }
    const Hd = 512e3,
      yd = 64,
      bd = Hd;

    function Td(dd, Od) {
      const md = Math.max(0, bd - Od),
        Wd = Math.min(Hd, md);
      return dd.slice(0, Wd)
    }
    const pd = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      NQ: {
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

    function Yd(dd, Od) {
      const {
        numLines: md,
        charsPerLine: Wd
      } = pd[Od];
      return gd(dd, md, Wd, !1)
    }

    function gd(dd, Od, md, Wd, Fd) {
      (Fd || Wd) && (dd = dd.slice(0, null !== Fd && void 0 !== Fd ? Fd : Od * md));
      const Rd = dd.split("\n");
      if (Rd.length > Od && Rd.splice(Od, Rd.length - Od), !Wd)
        for (let Xd = 0; Xd < Rd.length; Xd++) {
          const dd = Rd[Xd];
          dd.length > md && (Rd[Xd] = dd.substring(0, md), Rd.length < Od && Rd.splice(Xd + 1, 0, dd.substring(md)))
        }
      return Rd.join("\n")
    }
  },
  38388: (dd, Od, md) => {
    function Wd(dd, Od) {
      var md, Wd, Fd, Rd, Xd, Kd, hd, vd;
      return dd.name === Od.name && ((null === (md = dd.attributes) || void 0 === md || null === (Wd = md.customAttributes) || void 0 === Wd ? void 0 : Wd.stackKey) === (null === (Fd = Od.attributes) || void 0 === Fd || null === (Rd = Fd.customAttributes) || void 0 === Rd ? void 0 : Rd.stackKey) && (!0 !== (null === (Xd = dd.attributes) || void 0 === Xd || null === (Kd = Xd.customAttributes) || void 0 === Kd ? void 0 : Kd.unstackable) && !0 !== (null === (hd = Od.attributes) || void 0 === hd || null === (vd = hd.customAttributes) || void 0 === vd ? void 0 : vd.unstackable)))
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  5819: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      f: () => Rd
    });
    var Wd = md(5769);
    const Fd = "Air",
      Rd = Object.freeze(new Wd.f(Fd, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38474: (dd, Od, md) => {
    function Wd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Fd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !Wd(dd)
    }

    function Rd(dd) {
      return dd.includes(" Strongbed")
    }

    function Xd(dd) {
      return Wd(dd) || Fd(dd) || Rd(dd)
    }
    md.d(Od, {
      e: () => Xd,
      f: () => Wd,
      j: () => Rd,
      l: () => Fd
    })
  },
  38469: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd
    });
    var Wd = md(38474),
      Fd = md(5733);
    const Rd = [],
      Xd = [],
      Kd = [],
      hd = [];
    for (const Qd of Object.keys(Fd.k))(0, Wd.f)(Qd) ? Rd.push(Qd) : (0, Wd.l)(Qd) && Xd.push(Qd), (0, Wd.j)(Qd) && Kd.push(Qd), (Qd.includes(" Bed Head") || Qd.includes(" Strongbed Head")) && hd.push(Qd);
    const vd = {
      leafBeds: Rd,
      woolBeds: Xd,
      strongBeds: Kd,
      beds: [...Rd, ...Xd, ...Kd],
      bedHeads: hd,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7410: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      f: () => Fd,
      g: () => hd,
      k: () => Rd,
      n: () => vd,
      q: () => Wd,
      t: () => Kd
    });
    let Wd = function(dd) {
        return dd[dd.DEFAULT = 0] = "DEFAULT", dd[dd.BOAT = 1] = "BOAT", dd[dd.GLIDER = 2] = "GLIDER", dd[dd.BALLOON = 3] = "BALLOON", dd[dd.SLEEPING = 4] = "SLEEPING", dd[dd.RIDING_MOB = 5] = "RIDING_MOB", dd[dd.CAR = 6] = "CAR", dd[dd.HOVERCRAFT = 7] = "HOVERCRAFT", dd
      }({}),
      Fd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.OBSIDIAN = 1] = "OBSIDIAN", dd[dd.SPEED = 2] = "SPEED", dd
      }({}),
      Rd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.IRON = 1] = "IRON", dd[dd.GOLD = 2] = "GOLD", dd[dd.DIAMOND = 3] = "DIAMOND", dd
      }({}),
      Xd = function(dd) {
        return dd[dd.YELLOW = 0] = "YELLOW", dd[dd.WHITE = 1] = "WHITE", dd[dd.RED = 2] = "RED", dd[dd.PURPLE = 3] = "PURPLE", dd[dd.PINK = 4] = "PINK", dd[dd.ORANGE = 5] = "ORANGE", dd[dd.MAGENTA = 6] = "MAGENTA", dd[dd.LIME = 7] = "LIME", dd[dd.LIGHT_GRAY = 8] = "LIGHT_GRAY", dd[dd.LIGHT_BLUE = 9] = "LIGHT_BLUE", dd[dd.GREEN = 10] = "GREEN", dd[dd.GRAY = 11] = "GRAY", dd[dd.CYAN = 12] = "CYAN", dd[dd.BROWN = 13] = "BROWN", dd[dd.BLUE = 14] = "BLUE", dd[dd.BLACK = 15] = "BLACK", dd
      }({}),
      Kd = function(dd) {
        return dd[dd.ROTATION_1 = 0] = "ROTATION_1", dd[dd.ROTATION_2 = 1] = "ROTATION_2", dd[dd.ROTATION_3 = 2] = "ROTATION_3", dd[dd.ROTATION_4 = 3] = "ROTATION_4", dd
      }({}),
      hd = function(dd) {
        return dd[dd.KART = 0] = "KART", dd[dd.OFF_ROADER = 1] = "OFF_ROADER", dd[dd.CAR = 2] = "CAR", dd[dd.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", dd[dd.ARMORED_CAR = 4] = "ARMORED_CAR", dd[dd.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", dd[dd.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", dd[dd.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", dd
      }({});
    Wd.DEFAULT, Wd.BOAT, Fd.SPEED, Wd.GLIDER, Rd.DIAMOND, Wd.BALLOON, Xd.BLACK, Wd.SLEEPING, Kd.ROTATION_4, Wd.RIDING_MOB, Wd.CAR, hd.MOONSTONE_MINING_DRILL, Wd.HOVERCRAFT;
    let vd = function(dd) {
      return dd[dd.NORMAL = 0] = "NORMAL", dd[dd.GLIDING = 1] = "GLIDING", dd[dd.FLOATING = 2] = "FLOATING", dd
    }({})
  },
  35513: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);