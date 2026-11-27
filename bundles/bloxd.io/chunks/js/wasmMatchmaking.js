export const id = 75;
export const ids = [75, 186];
export const modules = {
  38154: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => zr,
      h: () => mr,
      l: () => xr
    });
    var Zr = Qr(35448),
      Wr = Qr(3425),
      ar = Qr(3429),
      jr = Qr(9818),
      Ir = Qr(1573),
      fr = Qr(72),
      Er = Qr(92),
      pr = Qr(1338);

    function xr() {
      var rr;
      return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
        children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
      })
    }

    function mr(rr) {
      var Sr;
      let {
        show: Qr
      } = rr;
      (0, Ir.g)(Wr.e, (0, Wr.w)());
      const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
      return (0, fr.useEffect)((() => {
        var rr;
        Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
      }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
        showing: Qr,
        globallyUniqueKey: "clientGameMenu",
        children: null === Er || void 0 === Er ? void 0 : Er.content
      })
    }
    const Nr = new Map,
      Ur = new Set;

    function tr(rr, Sr) {
      Sr ? Nr.set(rr, Sr) : Nr.delete(rr);
      for (const Qr of Ur) Qr()
    }

    function hr(rr) {
      let {
        placement: Sr = "bottom"
      } = rr;
      const Qr = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        const rr = Qr.current;
        return tr(Sr, rr), () => {
          Nr.get(Sr) === rr && tr(Sr, null)
        }
      }), [Sr]), (0, pr.jsx)("div", {
        ref: Qr,
        id: `clientGameHud-${Sr}`,
        style: {
          display: "contents"
        }
      })
    }

    function zr(rr) {
      let {
        children: Sr,
        placement: Qr = "bottom"
      } = rr;
      const [Zr, Wr] = (0, fr.useState)((() => {
        var rr;
        return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
      }));
      return (0, fr.useEffect)((() => {
        const rr = () => {
          var rr;
          Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
        };
        return Ur.add(rr), rr(), () => {
          Ur.delete(rr)
        }
      }), [Qr]), Zr ? (0, Er.createPortal)(Sr, Zr) : null
    }
  },
  38183: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => tr,
      f: () => yr
    });
    Qr(35432);
    var Zr = Qr(72),
      Wr = Qr(1573),
      ar = Qr(2089),
      jr = Qr(2128),
      Ir = Qr(26),
      fr = Qr(3404),
      Er = Qr(38191),
      pr = Qr(38193),
      xr = Qr(35416),
      mr = Qr(35426),
      Nr = Qr(35437),
      Ur = Qr(1338);
    const tr = (0, Zr.memo)((function() {
      var rr;
      const {
        isTouchScreen: Sr,
        clientEscMenuOptions: Qr,
        scriptedCameraFacing: ar,
        crosshairShownOverride: tr,
        crosshairGameView: zr
      } = (0, Ir.n)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Yr = (0, fr.l)("gunshotOrigin"), nr = (0, Zr.useRef)(null), er = (0, Zr.useRef)(!1), [Kr, Br] = (0, Zr.useState)(hr);
      (0, Wr.c)("cameraZoomSet", Br), (0, Zr.useEffect)((() => {
        Br(hr())
      }), []);
      const Tr = (0, jr.j)("heldItemAim"),
        Or = Tr.gun,
        Lr = (0, Nr.f)(),
        lr = (0, Zr.useRef)(Lr);
      lr.current = Lr;
      const [Xr, Pr] = (0, Zr.useState)(!1);
      (0, Zr.useEffect)((() => (0, pr.e)("crosshairAccuracy", yr)), []), (0, Wr.c)("mouseState", (rr => {
        let {
          isDown: Sr
        } = rr;
        er.current = Sr, nr.current && (nr.current.style.transform = (0, mr.f)(Sr, lr.current.growOnClick)), "shapes" === lr.current.style && Pr(Sr)
      }));
      const Hr = (0, xr.d)(Sr, Qr.touchActionButtons);
      return (null !== (rr = (0, Er.c)(zr, tr)) && void 0 !== rr ? rr : (0, Er.g)(Tr, Kr > 1, Hr, Yr)) ? "movement" === ar || "cursor" === ar ? null : (0, Ur.jsxs)(Ur.Fragment, {
        children: [Or && (0, Ur.jsx)(vr, {
          custom: Lr.forGuns && "shapes" === Lr.style ? Lr : null,
          touch: Sr
        }), !Or && (0, Ur.jsx)(mr.b, {
          settings: Lr,
          touch: Sr,
          pressRef: nr,
          pressed: "shapes" === Lr.style ? Xr : er.current
        })]
      }) : null
    }));

    function hr() {
      return ar.gameBridge.lookup("cameraZoom", null)
    }
    const zr = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Yr = {
        current: null
      },
      nr = {
        current: null
      };
    let er = 0,
      Kr = 0;

    function yr(rr) {
      Kr = rr, zr[0].current || Yr.current || nr.current ? Tr(rr) : er = rr
    }

    function Br(rr) {
      return ((0, Er.d)(rr) - (0, Er.d)(0)) * window.innerHeight / 100
    }

    function Tr(rr) {
      var Sr;
      if (null === (Sr = nr.current) || void 0 === Sr || Sr.call(nr, Br(rr)), zr[0].current) {
        const Sr = `${(0,Er.d)(rr)}vh`;
        zr[0].current.style.transform = `translateX(calc(0px - ${Sr}))`, zr[1].current.style.transform = `translateX(calc(0px + ${Sr}))`, zr[2].current.style.transform = `translateY(calc(0px - ${Sr}))`, zr[3].current.style.transform = `translateY(calc(0px + ${Sr}))`
      }
      Yr.current && (Yr.current.style.filter = `blur(${Math.round(rr/10)}px)`)
    }

    function vr(rr) {
      let {
        custom: Sr,
        touch: Qr
      } = rr;
      const ar = (0, Wr.g)("aimingOverlay", "none"),
        jr = "1.2vh",
        Ir = "0.3vh";
      (0, Zr.useEffect)((() => {
        er && Tr(er)
      }), []);
      const fr = (0, Zr.useRef)(null !== Sr);
      return (0, Zr.useLayoutEffect)((() => {
        var rr;
        Sr ? null === (rr = nr.current) || void 0 === rr || rr.call(nr, Br(Kr)) : fr.current && Tr(Kr);
        fr.current = null !== Sr
      }), [Sr]), (0, Ur.jsxs)(Ur.Fragment, {
        children: ["sniper" === ar && (0, Ur.jsxs)("div", {
          ref: Yr,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, Ur.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, Ur.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, Ur.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, Ur.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, Ur.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === ar ? 0 : 1
          },
          children: [Sr && (0, Ur.jsx)(mr.b, {
            settings: Sr,
            touch: Qr,
            spreadRef: nr
          }), !Sr && (0, Ur.jsxs)(Ur.Fragment, {
            children: [(0, Ur.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: jr,
                height: Ir,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: zr[0]
            }), (0, Ur.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: jr,
                height: Ir,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: zr[1]
            }), (0, Ur.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ir,
                height: jr,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: zr[2]
            }), (0, Ur.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ir,
                height: jr,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: zr[3]
            })]
          })]
        })]
      })
    }
  },
  35448: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(5301),
      Wr = Qr(5308);

    function ar(rr) {
      let {
        children: Sr,
        showing: Qr,
        globallyUniqueKey: ar,
        alwaysMountChildren: jr = !1,
        doGameplayStartStopOnShow: Ir = !0,
        keepsMovement: fr = !1
      } = rr;
      return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
    }
  },
  35426: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => tr,
      f: () => Ur
    });
    Qr(35432);
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(72),
      jr = Qr(35422);

    function Ir(rr, Sr) {
      return Math.max(1, Math.round(rr * Sr))
    }

    function fr(rr, Sr) {
      const Qr = Sr * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Zr = function(rr, Sr) {
          if (rr.lines) return Ir(rr.lineThickness, Sr) % 2;
          if (rr.dot) return Ir(rr.dotSize, Sr) % 2;
          return Er(rr, Sr) % 2
        }(rr, Sr),
        Wr = pr(rr.lineThickness * Qr, Zr),
        ar = Ir(rr.lineLength, Qr),
        jr = Math.round(rr.gap * Qr),
        fr = rr.outline > 0 ? Ir(rr.outline, Qr) : 0,
        mr = [];
      if (rr.lines && (mr.push({
          x: Wr + jr,
          y: 0,
          w: ar,
          h: Wr,
          arm: "right"
        }), mr.push({
          x: -jr - ar,
          y: 0,
          w: ar,
          h: Wr,
          arm: "left"
        }), mr.push({
          x: 0,
          y: Wr + jr,
          w: Wr,
          h: ar,
          arm: "down"
        }), rr.tStyle || mr.push({
          x: 0,
          y: -jr - ar,
          w: Wr,
          h: ar,
          arm: "up"
        }), 0 === jr && mr.push({
          x: 0,
          y: 0,
          w: Wr,
          h: Wr
        })), rr.dot) {
        const Sr = pr(rr.dotSize * Qr, Zr),
          ar = rr.lines && 0 === jr && rr.dotSize > rr.lineThickness ? Math.max(Sr, Wr + 2) : Sr,
          Ir = (Wr - ar) / 2;
        mr.push({
          x: Ir,
          y: Ir,
          w: ar,
          h: ar
        })
      }
      const Nr = mr.map((rr => ({
        ...rr,
        x: rr.x - fr,
        y: rr.y - fr,
        w: rr.w + 2 * fr,
        h: rr.h + 2 * fr
      })));
      let Ur = null,
        tr = null;
      if (rr.circle) {
        const Sr = Ir(rr.circleThickness, Qr),
          ar = function(rr, Sr) {
            return rr + (rr % 2 === Sr ? 0 : 1)
          }(Er(rr, Qr), Zr),
          jr = (Wr - ar) / 2;
        Ur = xr(jr, ar, Sr), fr > 0 && (tr = xr(jr - fr, ar + 2 * fr, Sr + 2 * fr))
      }
      return {
        cell: Wr,
        fills: mr,
        outlines: fr > 0 ? Nr : [],
        ring: Ur,
        ringOutline: tr
      }
    }

    function Er(rr, Sr) {
      return Math.round(rr.circleRadius * Sr * 2 + Ir(rr.circleThickness, Sr))
    }

    function pr(rr, Sr) {
      return Math.max(2 - Sr, 2 * Math.round((rr - Sr) / 2) + Sr)
    }

    function xr(rr, Sr, Qr) {
      const Zr = 2 * Qr >= Sr - 1;
      return {
        x: rr,
        y: rr,
        size: Sr,
        border: Math.min(Qr, Math.floor(Sr / 2)),
        filled: Zr
      }
    }
    var mr = Qr(1338);
    const Nr = 1.4;

    function Ur(rr, Sr) {
      return rr && Sr ? `scale(${Nr})` : "scale(1)"
    }

    function tr(rr) {
      return "classic" === rr.settings.style ? (0, mr.jsx)(Yr, {
        ...rr
      }) : (0, mr.jsx)(vr, {
        ...rr
      })
    }
    const hr = .125;

    function zr(rr, Sr) {
      const Qr = {};
      if (rr.color !== jr.f.color && (Qr.color = (0, jr.l)(rr.color)), rr.opacity !== jr.f.opacity && (Qr.opacity = rr.opacity / 100), rr.outline !== jr.f.outline || rr.outlineColor !== jr.f.outlineColor) {
        const Sr = rr.outline,
          Zr = (0, jr.l)(rr.outlineColor);
        Qr.textShadow = Sr > 0 ? `-${Sr}px 0 ${Zr}, 0 ${Sr}px ${Zr}, ${Sr}px 0 ${Zr}, 0 -${Sr}px ${Zr}` : "none"
      }
      if (rr.size !== jr.f.size) {
        const Zr = rr.size / 100;
        Qr.fontSize = Sr ? `calc(max(1.3rem, 18px) * ${Zr})` : `calc(1.3rem * ${Zr})`, Qr.marginTop = `-${hr}em`, Qr.transformOrigin = `50% calc(50% + ${hr}em)`
      }
      return Qr
    }

    function Yr(rr) {
      let {
        settings: Sr,
        touch: Qr,
        inPreview: Zr,
        inEditor: ar,
        pressed: jr = !1,
        pressRef: Ir
      } = rr;
      return (0, mr.jsx)("div", {
        className: Wr()("Crosshair", {
          Touch: Qr,
          CrosshairInPreview: Zr,
          CrosshairInEditor: ar || Zr
        }),
        ref: Ir,
        style: {
          transform: Ur(jr, Sr.growOnClick),
          ...zr(Sr, Qr)
        },
        children: "+"
      })
    }

    function nr(rr, Sr) {
      return rr / Sr + "px"
    }

    function er(rr, Sr, Qr, Zr) {
      return {
        ...Br(rr, Sr, Qr),
        width: nr(rr.w, Qr),
        height: nr(rr.h, Qr),
        background: Zr
      }
    }

    function Kr(rr, Sr, Qr) {
      return {
        left: nr(rr.x, Sr),
        top: nr(rr.y, Sr),
        width: nr(rr.size, Sr),
        height: nr(rr.size, Sr),
        borderWidth: nr(rr.border, Sr),
        borderColor: Qr,
        background: rr.filled ? Qr : void 0
      }
    }
    const yr = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Br(rr, Sr, Qr) {
      const [Zr, Wr] = rr.arm ? yr[rr.arm] : [0, 0], ar = Math.round(Sr * Qr);
      return {
        left: nr(rr.x + Zr * ar, Qr),
        top: nr(rr.y + Wr * ar, Qr)
      }
    }

    function Tr(rr) {
      return rr.arm ? {
        "data-arm": rr.arm,
        "data-x": rr.x,
        "data-y": rr.y
      } : {}
    }

    function vr(rr) {
      let {
        settings: Sr,
        inPreview: Qr,
        inEditor: Zr,
        pressed: Ir = !1,
        spread: Er,
        spreadRef: pr
      } = rr;
      const xr = (0, ar.useRef)(null),
        {
          box: Ur,
          dpr: tr
        } = function(rr) {
          const [Sr, Qr] = (0, ar.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ar.useLayoutEffect)((() => {
            const Sr = rr.current;
            if (!Sr) return;
            const Zr = () => {
              const rr = Sr.getBoundingClientRect(),
                Zr = window.devicePixelRatio || 1;
              Qr((Sr => Sr.dpr === Zr && Sr.box.left === rr.left && Sr.box.top === rr.top && Sr.box.width === rr.width && Sr.box.height === rr.height ? Sr : {
                box: {
                  left: rr.left,
                  top: rr.top,
                  width: rr.width,
                  height: rr.height
                },
                dpr: Zr
              }))
            };
            Zr();
            const Wr = new ResizeObserver(Zr);
            return Wr.observe(Sr), window.addEventListener("resize", Zr), window.addEventListener("scroll", Zr, !0), () => {
              Wr.disconnect(), window.removeEventListener("resize", Zr), window.removeEventListener("scroll", Zr, !0)
            }
          }), [rr]), Sr
        }(xr),
        hr = (0, ar.useRef)(tr);
      hr.current = tr;
      const zr = fr(Sr, tr, Ir && Sr.growOnClick ? Nr : 1),
        Yr = function(rr, Sr, Qr) {
          const Zr = Math.round((rr.left + rr.width / 2) * Qr - Sr / 2),
            Wr = Math.round((rr.top + rr.height / 2) * Qr - Sr / 2);
          return {
            x: Zr / Qr - rr.left,
            y: Wr / Qr - rr.top
          }
        }(Ur, zr.cell, tr),
        nr = (0, jr.l)(Sr.color),
        yr = (0, jr.l)(Sr.outlineColor),
        vr = (0, ar.useRef)(0);
      (0, ar.useLayoutEffect)((() => {
        if (pr) return pr.current = rr => {
          var Sr;
          vr.current = rr, null === (Sr = xr.current) || void 0 === Sr || Sr.querySelectorAll("[data-arm]").forEach((Sr => {
            Object.assign(Sr.style, Br(function(rr) {
              return {
                x: Number(rr.dataset.x),
                y: Number(rr.dataset.y),
                arm: rr.dataset.arm
              }
            }(Sr), rr, hr.current))
          }))
        }, () => {
          pr.current = null
        }
      }), [pr]);
      const Or = null !== Er && void 0 !== Er ? Er : vr.current;
      return (0, mr.jsx)("div", {
        ref: xr,
        className: Wr()("CrosshairShapes", {
          CrosshairInPreview: Qr,
          CrosshairInEditor: Zr || Qr,
          CrosshairSpreads: void 0 !== pr
        }),
        children: (0, mr.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Yr.x,
            top: Yr.y,
            opacity: Sr.opacity / 100
          },
          children: (0, mr.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [zr.ringOutline && (0, mr.jsx)("div", {
              className: "CrosshairRing",
              style: Kr(zr.ringOutline, tr, yr)
            }), zr.outlines.map(((rr, Sr) => (0, mr.jsx)("div", {
              className: "CrosshairPart",
              ...Tr(rr),
              style: er(rr, Or, tr, yr)
            }, `o${Sr}`))), zr.ring && (0, mr.jsx)("div", {
              className: "CrosshairRing",
              style: Kr(zr.ring, tr, nr)
            }), zr.fills.map(((rr, Sr) => (0, mr.jsx)("div", {
              className: "CrosshairPart",
              ...Tr(rr),
              style: er(rr, Or, tr, nr)
            }, `f${Sr}`)))]
          })
        })
      })
    }
  },
  35435: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => pr,
      i: () => hr,
      m: () => tr
    });
    var Zr = Qr(35422);
    const Wr = "XH1-",
      ar = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      jr = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Ir = ["color", "outlineColor"],
      fr = 1 + 3 * Ir.length + jr.length + 1,
      Er = Math.ceil(8 * fr / Math.log2(62)),
      pr = Wr.length + Er;

    function xr(rr) {
      let Sr = 90;
      for (const Qr of rr) Sr = 31 * Sr + Qr & 255;
      return Sr
    }
    const mr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Nr = BigInt(mr.length);

    function Ur(rr, Sr) {
      let Qr = 0n;
      for (const Wr of rr) {
        const rr = mr.indexOf(Wr);
        if (rr < 0) return null;
        Qr = Qr * Nr + BigInt(rr)
      }
      if (Qr >> BigInt(8 * Sr) !== 0n) return null;
      const Zr = [];
      for (let Wr = 0; Wr < Sr; Wr++) Zr.unshift(Number(0xffn & Qr)), Qr >>= 8n;
      return Zr
    }

    function tr(rr) {
      let Sr = "shapes" === rr.style ? 1 : 0;
      ar.forEach(((Qr, Zr) => {
        rr[Qr] && (Sr |= 1 << Zr + 1)
      }));
      const Qr = [Sr];
      for (const Wr of Ir) {
        const Sr = (0, Zr.j)(Wr, rr[Wr]);
        Qr.push(Sr >> 16 & 255, Sr >> 8 & 255, 255 & Sr)
      }
      for (const Wr of jr) {
        const {
          min: Sr,
          step: ar
        } = Zr.b[Wr];
        Qr.push(Math.round(((0, Zr.j)(Wr, rr[Wr]) - Sr) / ar))
      }
      return Qr.push(xr(Qr)), Wr + function(rr, Sr) {
        let Qr = 0n;
        for (const Wr of rr) Qr = Qr << 8n | BigInt(Wr);
        let Zr = "";
        for (let Wr = 0; Wr < Sr; Wr++) Zr = mr[Number(Qr % Nr)] + Zr, Qr /= Nr;
        return Zr
      }(Qr, Er)
    }

    function hr(rr) {
      for (const Sr of rr.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Er}})`, "gi"))) {
        const rr = zr(Ur(Sr[1], fr));
        if (rr) return rr
      }
      return null
    }

    function zr(rr) {
      if (!rr || rr.length !== fr || xr(rr.slice(0, -1)) !== rr[rr.length - 1]) return null;
      const Sr = rr[0],
        Qr = {
          ...Zr.f,
          style: 1 & Sr ? "shapes" : "classic"
        };
      ar.forEach(((rr, Zr) => {
        Qr[rr] = 0 !== (Sr & 1 << Zr + 1)
      }));
      let Wr = 1;
      for (const Zr of Ir) Qr[Zr] = rr[Wr] << 16 | rr[Wr + 1] << 8 | rr[Wr + 2], Wr += 3;
      for (const ar of jr) {
        const {
          min: Sr,
          step: jr
        } = Zr.b[ar];
        Qr[ar] = (0, Zr.j)(ar, Sr + rr[Wr] * jr), Wr++
      }
      return Qr
    }
  },
  35422: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      f: () => Wr,
      j: () => ar,
      l: () => Er,
      o: () => fr,
      r: () => pr,
      t: () => Ir,
      u: () => jr
    });
    const Zr = {
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
      Wr = Object.freeze({
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

    function ar(rr, Sr) {
      var Qr;
      const {
        min: ar,
        max: jr,
        step: Ir
      } = Zr[rr];
      if (!Number.isFinite(Sr)) return Wr[rr];
      const fr = (null !== (Qr = String(Ir).split(".")[1]) && void 0 !== Qr ? Qr : "").length,
        Er = Number((Math.round(Sr / Ir) * Ir).toFixed(fr));
      return Math.min(jr, Math.max(ar, Er))
    }

    function jr(rr, Sr, Qr) {
      const Zr = "number" === typeof Qr ? ar(Sr, Qr) : Qr;
      return {
        ...rr,
        [Sr]: Zr
      }
    }

    function Ir(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Wr).every((Zr => Qr.includes(Zr) || rr[Zr] === Sr[Zr]))
    }

    function fr(rr) {
      return Ir(rr, Wr)
    }

    function Er(rr) {
      return `#${rr.toString(16).padStart(6,"0")}`
    }

    function pr(rr) {
      const Sr = /^#?([0-9a-f]{6})$/i.exec(rr.trim());
      return Sr ? parseInt(Sr[1], 16) : null
    }
  },
  35437: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => xr,
      f: () => mr
    });
    var Zr = Qr(72),
      Wr = Qr(43),
      ar = Qr(35435),
      jr = Qr(35422);
    const Ir = "crosshairCode";
    let fr = null;
    const Er = new Set;

    function pr() {
      if (null === fr) {
        var rr;
        const Sr = Wr.j.getItem(Ir);
        fr = null !== (rr = "string" === typeof Sr ? (0, ar.i)(Sr) : null) && void 0 !== rr ? rr : jr.f
      }
      return fr
    }

    function xr(rr) {
      fr = rr, (0, jr.o)(rr) ? Wr.j.removeItem(Ir) : Wr.j.setItem(Ir, (0, ar.m)(rr));
      for (const Sr of Er) Sr()
    }

    function mr() {
      const [rr, Sr] = (0, Zr.useState)(pr);
      return (0, Zr.useEffect)((() => {
        const rr = () => {
          Sr(pr())
        };
        return rr(), Qr = rr, Er.add(Qr), () => {
          Er.delete(Qr)
        };
        var Qr
      }), []), rr
    }
  },
  10070: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      c: () => jr
    });
    var Zr = Qr(194);
    class Wr {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(rr) || this.marks.set(rr, Sr)
      }
      marked() {
        return Zr.Z.flatMap((rr => {
          var Sr;
          const Qr = null !== (Sr = this.marks.get(rr)) && void 0 !== Sr ? Sr : ar.marks.get(rr);
          return void 0 === Qr ? [] : [
            [rr, Qr]
          ]
        }))
      }
    }
    const ar = new Wr;

    function jr(rr) {
      ar.mark(rr)
    }
  },
  38191: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr, Zr) {
      return !(Qr && !rr.aimable) && (!Sr || rr.gun && "head" !== Zr)
    }

    function Wr(rr) {
      return Math.max(.1 * rr, 1)
    }

    function ar(rr, Sr) {
      return !rr && Sr
    }
    Qr.d(Sr, {
      c: () => ar,
      d: () => Wr,
      g: () => Zr
    })
  },
  38193: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      e: () => jr
    });
    let Zr = null;
    const Wr = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      ar = {
        crosshairAccuracy: rr => {
          const Sr = Wr.crosshairAccuracy.at(-1);
          Sr ? Sr.hook(rr) : Zr = rr
        },
        turnDamageIndicators: rr => {
          var Sr;
          null === (Sr = Wr.turnDamageIndicators.at(-1)) || void 0 === Sr || Sr.hook(rr)
        },
        turnSoundCues: rr => {
          var Sr;
          null === (Sr = Wr.turnSoundCues.at(-1)) || void 0 === Sr || Sr.hook(rr)
        }
      };

    function jr(rr, Sr) {
      const Qr = {
          hook: Sr
        },
        jr = Wr[rr];
      if (jr.push(Qr), "crosshairAccuracy" === rr && null !== Zr) {
        const rr = Zr;
        Zr = null, ar.crosshairAccuracy(rr)
      }
      return () => {
        const rr = jr.indexOf(Qr); - 1 !== rr && jr.splice(rr, 1)
      }
    }

    function Ir() {
      return ar
    }
  },
  35416: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      d: () => Wr
    });
    var Zr = Qr(26);

    function Wr(rr, Sr) {
      return rr && !Sr
    }

    function ar() {
      return Wr(Zr.c.get("isTouchScreen"), Zr.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  9818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    let Zr = null;
    const Wr = function(rr) {
        const Sr = {
          cycle: rr,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Zr = Sr, () => {
          Zr === Sr && (Zr = null)
        }
      },
      ar = () => {
        var rr;
        return null !== (rr = Zr) && void 0 !== rr && rr.canCycle() ? Zr.cycle : null
      }
  },
  37866: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      i: () => fr,
      j: () => jr
    });
    var Zr = Qr(688),
      Wr = Qr(2383);

    function ar(rr) {
      return rr === (0, Wr.e)().WC ? (0, Wr.e)().fC : rr
    }

    function jr(rr) {
      return !(0, Zr.L)(rr) && ar(rr) === (0, Wr.e)().fC
    }
    const Ir = "gravity";

    function fr() {
      return (0, Wr.e)().physics[Ir][1]
    }
  },
  37975: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      InGameUi: () => vr.e,
      LobbyLeaderboard: () => Or.b,
      loadCharacterCustomisationUI: () => Lr,
      loadCharacterPreview: () => lr,
      matchmakeAndPlay: () => qr,
      matchmakeForAhead: () => Ir.d,
      setUpGame: () => Xr
    });
    var Zr = Qr(1295),
      Wr = Qr(161),
      ar = Qr(26),
      jr = Qr(37977),
      Ir = Qr(37985),
      fr = Qr(2114),
      Er = Qr(38026);

    function pr() {
      return !1 !== fr.d.get("canCustomiseChar")
    }
    let xr = !1;
    var mr = Qr(1422),
      Nr = Qr(5433),
      Ur = Qr(1304),
      tr = Qr(272),
      hr = Qr(4832),
      zr = Qr(5428),
      Yr = Qr(10068);

    function nr() {
      return function(rr) {
        var Sr;
        return !0 !== (null === rr || void 0 === rr ? void 0 : rr.saveData) && !/2g$/.test(null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.effectiveType) && void 0 !== Sr ? Sr : "")
      }(navigator.connection)
    }

    function er() {
      return {
        joinStarted: zr.d,
        language: Ur.f.get().getCurrentLanguageCode()
      }
    }

    function Kr() {
      return new Promise((rr => {
        (0, Nr.u)(rr)
      }))
    }

    function yr() {
      (0, zr.d)() || (0, Yr.loadWasmPlayAhead)().catch((rr => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", rr)
      }))
    }
    var Br = Qr(4681),
      Tr = Qr(829);
    var vr = Qr(38039),
      Or = Qr(38468);

    function Lr() {
      return Qr.e(252).then((() => Qr(45287)))
    }

    function lr() {
      return Qr.e(611).then((() => Qr(45289)))
    }
    async function Xr() {
      return await async function() {
        if ((0, Nr.f)()) {
          if (nr()) try {
            await (0, Nr.t)("wasm loads ahead");
            const rr = await (0, Yr.importClientLoad)();
            await Promise.race([rr.startLoadAheadOfJoin(er()), Kr()]), await (0, Nr.t)("wasm previews");
            const {
              pagePreviews: Sr
            } = await Promise.all([Qr.e(177), Qr.e(91), Qr.e(225), Qr.e(158), Qr.e(246), Qr.e(245), Qr.e(244), Qr.e(223), Qr.e(50), Qr.e(161), Qr.e(243), Qr.e(72)]).then((() => Qr(45305)));
            Sr().prefetch((0, Nr.f)() ? Nr.t : void 0)
          } catch (rr) {
            console.warn("[bloxd-wasm-client] the previews' loads ahead of need did not start: the open loads them itself", rr)
          }
          await Kr()
        }
      }(), (0, Yr.loadWasmPreviews)()
    }
    xr || (xr = !0, document.addEventListener("keydown", (rr => {
      (0, Er.b)(rr, pr)
    }))), nr() && (0, hr.g)((() => {
      (0, zr.d)() || (0, Yr.importClientLoad)().then((async rr => {
        if ((0, zr.d)()) return;
        const Sr = rr.startLoadAheadOfJoin(er());
        (0, tr.c)((() => {
          (0, zr.d)() || rr.probeWebgl2AheadOfJoin()
        })), await Sr, (0, tr.c)(yr)
      }), (rr => {
        console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", rr)
      }))
    }));
    const Pr = ar.c.get("router");
    null === Pr ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function rr(Sr) {
      if ((0, Tr.b)(Sr.state.location.pathname)) return void(0, Yr.loadWasmPlay)().catch((() => {}));
      const Qr = Sr.subscribe((Zr => {
        (0, Tr.b)(Zr.location.pathname) && (Qr(), (0, Br.i)().then((() => {
          rr(Sr)
        })))
      }))
    }(Pr), (0, jr.e)();
    const Hr = (0, Ir.c)((async function(rr, Sr) {
      let {
        place: Qr,
        userContext: ar,
        direct: jr,
        matchedAt: Ir,
        rematch: fr
      } = rr;
      const Er = jr ? 1 / 0 : Ir;
      let pr;
      try {
        pr = await (0, Yr.loadWasmPlay)()
      } catch (xr) {
        return console.error("The wasm client did not load:", xr), (0, mr.m)({
          websocketUrl: null
        }), Zr.e.errorWithCode(String(xr), Wr.i.CONNECT_TO_GAME_SERVER, {
          error: xr,
          severity: Sr.aborted ? "low" : "medium",
          Rr: Sr.aborted
        })
      }
      return pr.playWasmGame({
        userContext: ar,
        place: Qr,
        matchedAt: Er,
        rematch: fr
      }, Sr)
    }));

    function qr() {
      return (0, Yr.loadWasmPlay)().catch((() => {})), Hr(...arguments)
    }
  },
  10068: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      importClientLoad: () => xr,
      loadWasmPlay: () => Ur,
      loadWasmPlayAhead: () => tr,
      loadWasmPreviews: () => hr
    });
    var Zr = Qr(4354),
      Wr = Qr(3216),
      ar = Qr(2304),
      jr = Qr(5411),
      Ir = Qr(4759),
      fr = Qr(5428),
      Er = Qr(10070);
    let pr = null;

    function xr() {
      return Promise.all([Qr.e(91), Qr.e(105), Qr.e(241), Qr.e(158), Qr.e(245), Qr.e(161), Qr.e(256), Qr.e(71)]).then((() => Qr(42541)))
    }

    function mr() {
      return Promise.all([Qr.e(88), Qr.e(91), Qr.e(105), Qr.e(241), Qr.e(158), Qr.e(245), Qr.e(223), Qr.e(161), Qr.e(251), Qr.e(243), Qr.e(103), Qr.e(247), Qr.e(256), Qr.e(76)]).then((() => Qr(42720)))
    }

    function Nr() {
      Promise.all([Qr.e(85), Qr.e(89), Qr.e(86), Qr.e(87), Qr.e(88), Qr.e(105), Qr.e(102), Qr.e(307), Qr.e(127), Qr.e(281), Qr.e(255), Qr.e(247), Qr.e(55)]).then((() => Qr(42871))).catch((() => {}))
    }

    function Ur() {
      return jr.e.cancelDownloadForJoin(), (0, Ir.d)(), (0, Wr.g)(), (0, fr.e)(), (0, ar.j)(), Nr(), xr().then((rr => {
        let {
          startJoinLoad: Sr
        } = rr;
        Sr()
      }), (() => {})), pr ??= mr().then((rr => ((0, Er.c)("phase_chunk"), rr.startWasmPlay(), (0, Er.c)("phase_start"), rr.followPageUiPack((rr => {
        Zr.d.showGamePack(rr)
      })), rr)), (rr => {
        throw pr = null, rr
      })), pr
    }

    function tr() {
      return Nr(), Qr.e(132).then((() => Qr(42906))).catch((() => {})), mr().then((() => {
        (0, Er.c)("phase_chunk")
      }))
    }

    function hr() {
      return mr().then((rr => {
        rr.startWasmPreviews(), rr.prefetchWasmPreviews()
      }))
    }
  },
  37843: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Tr
    });
    var Zr = Qr(37851),
      Wr = Qr(208),
      ar = Qr(5681),
      jr = Qr(37853),
      Ir = Qr(37859),
      fr = Qr(37927),
      Er = Qr(37866),
      pr = Qr(388),
      xr = Qr.n(pr),
      mr = Qr(2383),
      Nr = Qr(37924),
      Ur = Qr(34),
      tr = Qr(26),
      hr = Qr(37875),
      zr = Qr(37884),
      Yr = Qr(37893),
      nr = Qr(37902),
      er = Qr(37915);
    const Kr = new Set(["note"]);
    const yr = {
      stop: () => yr,
      fade: () => yr,
      rate: () => yr,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => yr,
      setPannerAttr: () => yr,
      setPosition: () => yr
    };
    class Br {
      constructor(rr) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new fr.k, this._howl = (0, Ir.countDecodesAs)(new ar.Howl({
          src: [...(0, Zr.r)(rr).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = this._howl.play(jr.e);
        rr && this._howl.loop(!0, Sr);
        let Qr = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), Sr);
        const Zr = {
          stop: () => {
            var rr;
            return null === (rr = this.liveHowl()) || void 0 === rr || rr.stop(Sr), Zr
          },
          fade: (rr, Qr, Wr) => {
            var ar;
            return null === (ar = this.liveHowl()) || void 0 === ar || ar.fade(rr, Qr, Wr, Sr), Zr
          },
          rate: rr => {
            var Qr;
            return null === (Qr = this.liveHowl()) || void 0 === Qr || Qr.rate(rr, Sr), Zr
          },
          stopsAtOnce: () => this._howl.playing(Sr) && !this._howl._playLock,
          isAlive: () => {
            const rr = this._howl._soundById(Sr);
            return !this._loadFailed && !!rr && !rr._ended
          },
          getDurationMs: () => this._howl._soundById(Sr) ? 1e3 * this._howl.duration(Sr) / this._howl.rate(Sr) : 0,
          getVolume: () => Qr * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Qr,
          setRelativeVolume: rr => {
            var Wr;
            if (rr > 1) throw new Error("Volume should be <= 1");
            return Qr = tr.c.get("soundOnFromAd") ? rr : 0, null === (Wr = this.liveHowl()) || void 0 === Wr || Wr.volume(Math.min(1, Qr * this._volumeMultiplier.getTotalMultipliedVal()), Sr), Zr
          },
          setPannerAttr: rr => {
            let {
              coneInnerAngle: Qr,
              coneOuterAngle: Wr = 360,
              coneOuterGain: ar,
              distanceModel: jr,
              maxDistance: Ir,
              panningModel: fr,
              refDistance: Er,
              rolloffFactor: pr
            } = rr;
            return this._setPannerAttr({
              id: Sr,
              coneInnerAngle: Qr,
              coneOuterAngle: Wr,
              coneOuterGain: ar,
              distanceModel: jr,
              maxDistance: Ir,
              panningModel: fr,
              refDistance: Er,
              rolloffFactor: pr
            }), Zr
          },
          setPosition: rr => {
            var Qr;
            return null === (Qr = this.liveHowl()) || void 0 === Qr || Qr.pos(rr[2], rr[1], rr[0], Sr), Zr
          }
        };
        return Zr
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, jr.g)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(rr) {
        this._volumeMultiplier.setMultiplierType("globalVolume", rr), this._howl.volume(rr)
      }
      _setPannerAttr(rr) {
        let {
          id: Sr,
          coneInnerAngle: Qr = 360,
          coneOuterAngle: Zr = 360,
          coneOuterGain: Wr = 0,
          distanceModel: ar = "inverse",
          maxDistance: jr = 1e3,
          panningModel: Ir = "HRTF",
          refDistance: fr = Nr.h,
          rolloffFactor: Er = 1
        } = rr;
        const pr = this.liveHowl();
        if (null === pr) return;
        pr.pannerAttr({
          coneOuterAngle: Zr
        }, Sr);
        const xr = {
          coneInnerAngle: Qr,
          coneOuterAngle: Zr,
          coneOuterGain: Wr,
          distanceModel: ar,
          maxDistance: jr,
          panningModel: Ir,
          refDistance: fr,
          rolloffFactor: Er
        };
        pr.pannerAttr(xr, Sr)
      }
    }
    const Tr = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new hr.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, Ur.i.subscribe("appManagerUpdated|soundVolume", (rr => {
          const Sr = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const Qr of Sr) Qr.setGlobalVolume(rr)
        }))
      }
      play(rr, Sr) {
        var Qr;
        let ar, jr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Qr = (0, mr.e)()) || void 0 === Qr ? void 0 : Qr.fC,
          Ir = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nr.e,
          fr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nr.h,
          pr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Ur;
        (0, mr.e)() ? ar = !!Array.isArray(jr) || (0, Er.e)(jr) !== (null === (Ur = (0, mr.e)()) || void 0 === Ur ? void 0 : Ur.fC): ar = !1;
        const tr = (0, Zr.g)(rr),
          zr = this.loadSound(ar ? this.spatialSounds : this.stereoSounds, rr);
        if (!ar) {
          const rr = zr.play(pr);
          return rr.setRelativeVolume(Sr), rr
        }
        const Yr = (0, mr.e)(),
          nr = Array.isArray(jr) ? jr : Yr.YB.JY(jr),
          Br = Yr.YB.JY(Yr.fC);
        if (!nr || xr().sqrDist(nr, Br) > Ir * Ir) return yr;
        let Tr;
        if (!pr) {
          if (!this.spatialVoices.admit({
              group: Kr.has(tr) ? null : (0, hr.l)(rr),
              loudness: (0, hr.h)(Sr, xr().Oj(nr, Br), fr),
              startMs: performance.now(),
              getDurationMs: () => {
                var rr, Sr;
                return null !== (rr = null === (Sr = Tr) || void 0 === Sr ? void 0 : Sr.getDurationMs()) && void 0 !== rr ? rr : 0
              },
              isAlive: () => {
                var rr, Sr;
                return null !== (rr = null === (Sr = Tr) || void 0 === Sr ? void 0 : Sr.isAlive()) && void 0 !== rr && rr
              },
              canStop: () => {
                var rr, Sr;
                return null !== (rr = null === (Sr = Tr) || void 0 === Sr ? void 0 : Sr.stopsAtOnce()) && void 0 !== rr && rr
              },
              stop: () => {
                var rr;
                null === (rr = Tr) || void 0 === rr || rr.stop()
              }
            })) return yr
        }
        return Tr = zr.play(pr), Tr.setRelativeVolume(Sr), Tr.setPannerAttr({
          refDistance: fr
        }), Tr.setPosition([nr[0], nr[1] + Wr.i.Uz * Wr.i.playerEyeToHeightRatio, nr[2]]), !pr && (0, er.l)() && (0, er.i)(tr, rr, nr[0] - Br[0], nr[2] - Br[2]), Tr
      }
      preload(rr) {
        const Sr = (0, Zr.l)(rr) ? [rr] : (0, Zr.t)(rr);
        if (0 === Sr.length) throw new Error(`Invalid sound name ${rr} (no sound has it or starts with it)`);
        for (const Qr of Sr) this.loadSound(this.stereoSounds, Qr)
      }
      preloadAtIdle(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nr.c;
        const Qr = rr.filter((rr => !this.idlePreloads.has(rr)));
        for (const Wr of Qr) this.idlePreloads.add(Wr);
        const Zr = this.idlePreloadGeneration;
        (0, Yr.d)(Qr, {
          ...Sr,
          Rr: () => Zr !== this.idlePreloadGeneration,
          fetchFile: rr => {
            this.idlePreloads.delete(rr);
            try {
              return this.preload(rr), Promise.resolve()
            } catch (Sr) {
              return Promise.reject(Sr)
            }
          }
        })
      }
      loadSound(rr, Sr) {
        const Qr = rr[Sr];
        if (Qr) return Qr;
        const Wr = this.makeSound(rr, Sr);
        for (const jr of null !== (ar = (0, Zr.n)(Sr)) && void 0 !== ar ? ar : []) {
          var ar;
          rr[jr] || this.makeSound(rr, jr)
        }
        return Wr
      }
      makeSound(rr, Sr) {
        (0, nr.f)(Sr);
        const Qr = new Br(Sr);
        return Qr.setGlobalVolume(tr.c.get("soundVolume")), rr[Sr] = Qr, Qr
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const rr of [this.stereoSounds, this.spatialSounds])
          for (const [Sr, Qr] of Object.entries(rr)) !zr.b.has((0, Zr.g)(Sr)) && Qr.loaded() && (Qr.unloadOnceIdle(), delete rr[Sr])
      }
    }
  },
  37642: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => yr,
      g: () => Lr,
      i: () => lr,
      m: () => Xr
    });
    var Zr = Qr(37644),
      Wr = Qr(7878),
      ar = Qr(7947),
      jr = Qr(37653),
      Ir = Qr(37661),
      fr = Qr(37667),
      Er = Qr(8285),
      pr = Qr(8418),
      xr = Qr(37671),
      mr = Qr(8637),
      Nr = Qr(7733),
      Ur = Qr(8913),
      tr = Qr(37679),
      hr = Qr(37684),
      zr = Qr(8942),
      Yr = Qr(37689),
      nr = Qr(37697),
      er = Qr(379);
    const Kr = {
        redTeam: ar.h,
        blueTeam: hr.c,
        greenTeam: nr.f,
        yellowTeam: zr.g,
        cyanTeam: fr.e,
        whiteTeam: Nr.faPlus,
        pinkTeam: pr.d,
        grayTeam: xr.c,
        blackTeam: tr.d,
        orangeTeam: Yr.g,
        lilacTeam: jr.f,
        purpleTeam: mr.c,
        magentaTeam: Ir.f,
        brownTeam: Zr.d,
        limeTeam: Wr.faBolt,
        lightGrayTeam: Er.f,
        lightBlueTeam: Ur.g
      },
      yr = Object.fromEntries(Object.values(Kr).map((rr => [Br(rr), rr])));

    function Br(rr) {
      return `team-${rr.iconName}`
    }
    const Tr = new Map;
    for (const [Pr, Hr] of Object.entries(Kr)) {
      const rr = Br(Hr),
        Sr = er.K[Pr];
      Sr && Tr.set(Sr.toLowerCase(), {
        icon: rr,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let vr = !1;
    const Or = new Set;

    function Lr(rr) {
      if (rr !== vr) {
        vr = rr;
        for (const rr of Or) rr()
      }
    }

    function lr(rr) {
      var Sr;
      return "string" === typeof rr && vr && null !== (Sr = Tr.get(rr.toLowerCase())) && void 0 !== Sr ? Sr : null
    }

    function Xr(rr) {
      return Or.add(rr), () => {
        Or.delete(rr)
      }
    }
  },
  37701: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => zr,
      D: () => nr,
      c: () => Wr,
      e: () => Nr,
      g: () => jr,
      h: () => Ur,
      k: () => Yr,
      n: () => mr,
      r: () => er,
      s: () => ar,
      t: () => pr,
      u: () => xr,
      x: () => tr,
      z: () => hr
    });
    var Zr = Qr(2049);
    const Wr = [{
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

    function ar(rr) {
      return (0, Zr.r)(rr.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function jr(rr, Sr) {
      const {
        numLines: Qr,
        charsPerLine: Zr
      } = Wr[Sr];
      return Kr(rr, Qr, Zr, !1)
    }
    const Ir = 7 / 8,
      fr = .25,
      Er = 8;

    function pr(rr, Sr) {
      return {
        width: Math.min(rr, Er) - 2 * fr,
        height: Math.min(Sr, Er) - 2 * fr
      }
    }

    function xr(rr, Sr, Qr) {
      const Zr = pr(rr, Sr),
        {
          numLines: ar,
          charsPerLine: jr
        } = Wr[Qr];
      return {
        numLines: Math.max(1, Math.floor(ar / Ir * Zr.height)),
        charsPerLine: Math.max(1, Math.floor(jr * Zr.width))
      }
    }

    function mr(rr, Sr, Qr, Zr) {
      const {
        numLines: Wr,
        charsPerLine: ar
      } = xr(Qr, Zr, Sr);
      return Kr(rr, Wr, ar, !1)
    }
    const Nr = 32e3;

    function Ur(rr) {
      return rr.slice(0, Nr)
    }
    const tr = 512e3,
      hr = 64,
      zr = tr;

    function Yr(rr, Sr) {
      const Qr = Math.max(0, zr - Sr),
        Zr = Math.min(tr, Qr);
      return rr.slice(0, Zr)
    }
    const nr = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Up: {
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

    function er(rr, Sr) {
      const {
        numLines: Qr,
        charsPerLine: Zr
      } = nr[Sr];
      return Kr(rr, Qr, Zr, !1)
    }

    function Kr(rr, Sr, Qr, Zr, Wr) {
      (Wr || Zr) && (rr = rr.slice(0, null !== Wr && void 0 !== Wr ? Wr : Sr * Qr));
      const ar = rr.split("\n");
      if (ar.length > Sr && ar.splice(Sr, ar.length - Sr), !Zr)
        for (let jr = 0; jr < ar.length; jr++) {
          const rr = ar[jr];
          rr.length > Qr && (ar[jr] = rr.substring(0, Qr), ar.length < Sr && ar.splice(jr + 1, 0, rr.substring(Qr)))
        }
      return ar.join("\n")
    }
  },
  38315: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      var Qr, Zr, Wr, ar, jr, Ir, fr, Er;
      return rr.name === Sr.name && ((null === (Qr = rr.attributes) || void 0 === Qr || null === (Zr = Qr.customAttributes) || void 0 === Zr ? void 0 : Zr.stackKey) === (null === (Wr = Sr.attributes) || void 0 === Wr || null === (ar = Wr.customAttributes) || void 0 === ar ? void 0 : ar.stackKey) && (!0 !== (null === (jr = rr.attributes) || void 0 === jr || null === (Ir = jr.customAttributes) || void 0 === Ir ? void 0 : Ir.unstackable) && !0 !== (null === (fr = Sr.attributes) || void 0 === fr || null === (Er = fr.customAttributes) || void 0 === Er ? void 0 : Er.unstackable)))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  5878: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      h: () => ar
    });
    var Zr = Qr(5830);
    const Wr = "Air",
      ar = Object.freeze(new Zr.e(Wr, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38397: (rr, Sr, Qr) => {
    function Zr(rr) {
      return rr.includes("Leaf Bed")
    }

    function Wr(rr) {
      return / Bed(?: Head)?(?:\||$)/.test(rr) && !Zr(rr)
    }

    function ar(rr) {
      return rr.includes(" Strongbed")
    }

    function jr(rr) {
      return Zr(rr) || Wr(rr) || ar(rr)
    }
    Qr.d(Sr, {
      c: () => jr,
      f: () => Zr,
      h: () => ar,
      i: () => Wr
    })
  },
  38390: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er
    });
    var Zr = Qr(38397),
      Wr = Qr(5779);
    const ar = [],
      jr = [],
      Ir = [],
      fr = [];
    for (const pr of Object.keys(Wr.n))(0, Zr.f)(pr) ? ar.push(pr) : (0, Zr.i)(pr) && jr.push(pr), (0, Zr.h)(pr) && Ir.push(pr), (pr.includes(" Bed Head") || pr.includes(" Strongbed Head")) && fr.push(pr);
    const Er = {
      leafBeds: ar,
      woolBeds: jr,
      strongBeds: Ir,
      beds: [...ar, ...jr, ...Ir],
      bedHeads: fr,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7424: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      e: () => Wr,
      f: () => fr,
      j: () => ar,
      k: () => Er,
      n: () => Zr,
      p: () => Ir
    });
    let Zr = function(rr) {
        return rr[rr.DEFAULT = 0] = "DEFAULT", rr[rr.BOAT = 1] = "BOAT", rr[rr.GLIDER = 2] = "GLIDER", rr[rr.BALLOON = 3] = "BALLOON", rr[rr.SLEEPING = 4] = "SLEEPING", rr[rr.RIDING_MOB = 5] = "RIDING_MOB", rr[rr.CAR = 6] = "CAR", rr[rr.HOVERCRAFT = 7] = "HOVERCRAFT", rr
      }({}),
      Wr = function(rr) {
        return rr[rr.WOOD = 0] = "WOOD", rr[rr.OBSIDIAN = 1] = "OBSIDIAN", rr[rr.SPEED = 2] = "SPEED", rr
      }({}),
      ar = function(rr) {
        return rr[rr.WOOD = 0] = "WOOD", rr[rr.IRON = 1] = "IRON", rr[rr.GOLD = 2] = "GOLD", rr[rr.DIAMOND = 3] = "DIAMOND", rr
      }({}),
      jr = function(rr) {
        return rr[rr.YELLOW = 0] = "YELLOW", rr[rr.WHITE = 1] = "WHITE", rr[rr.RED = 2] = "RED", rr[rr.PURPLE = 3] = "PURPLE", rr[rr.PINK = 4] = "PINK", rr[rr.ORANGE = 5] = "ORANGE", rr[rr.MAGENTA = 6] = "MAGENTA", rr[rr.LIME = 7] = "LIME", rr[rr.LIGHT_GRAY = 8] = "LIGHT_GRAY", rr[rr.LIGHT_BLUE = 9] = "LIGHT_BLUE", rr[rr.GREEN = 10] = "GREEN", rr[rr.GRAY = 11] = "GRAY", rr[rr.CYAN = 12] = "CYAN", rr[rr.BROWN = 13] = "BROWN", rr[rr.BLUE = 14] = "BLUE", rr[rr.BLACK = 15] = "BLACK", rr
      }({}),
      Ir = function(rr) {
        return rr[rr.ROTATION_1 = 0] = "ROTATION_1", rr[rr.ROTATION_2 = 1] = "ROTATION_2", rr[rr.ROTATION_3 = 2] = "ROTATION_3", rr[rr.ROTATION_4 = 3] = "ROTATION_4", rr
      }({}),
      fr = function(rr) {
        return rr[rr.KART = 0] = "KART", rr[rr.OFF_ROADER = 1] = "OFF_ROADER", rr[rr.CAR = 2] = "CAR", rr[rr.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", rr[rr.ARMORED_CAR = 4] = "ARMORED_CAR", rr[rr.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", rr[rr.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", rr[rr.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", rr
      }({});
    Zr.DEFAULT, Zr.BOAT, Wr.SPEED, Zr.GLIDER, ar.DIAMOND, Zr.BALLOON, jr.BLACK, Zr.SLEEPING, Ir.ROTATION_4, Zr.RIDING_MOB, Zr.CAR, fr.MOONSTONE_MINING_DRILL, Zr.HOVERCRAFT;
    let Er = function(rr) {
      return rr[rr.NORMAL = 0] = "NORMAL", rr[rr.GLIDING = 1] = "GLIDING", rr[rr.FLOATING = 2] = "FLOATING", rr
    }({})
  },
  35432: () => {}
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);