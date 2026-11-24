export const id = 121;
export const ids = [121];
export const modules = {
  36812: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Up,
      h: () => jp
    });
    cp(34402);
    var Op = cp(62),
      op = cp(1476),
      Ip = cp(1956),
      Sp = cp(2004),
      xp = cp(25),
      Lp = cp(2492),
      Yp = cp(36819),
      Dp = cp(36828),
      Ap = cp(34386),
      Pp = cp(34397),
      Wp = cp(34420),
      yp = cp(1112);
    const Up = (0, Op.memo)((function() {
      var pp;
      const {
        isTouchScreen: ip,
        clientEscMenuOptions: cp,
        scriptedCameraFacing: Ip,
        crosshairShownOverride: Up,
        crosshairGameView: vp
      } = (0, xp.o)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), tp = (0, Lp.i)("gunshotOrigin"), Hp = (0, Op.useRef)(null), dp = (0, Op.useRef)(!1), [ep, kp] = (0, Op.useState)(wp);
      (0, op.f)("cameraZoomSet", kp), (0, Op.useEffect)((() => {
        kp(wp())
      }), []);
      const mp = (0, Sp.g)("heldItemAim"),
        qp = mp.gun,
        Mp = (0, Wp.f)(),
        Cp = (0, Op.useRef)(Mp);
      Cp.current = Mp;
      const [Ep, Xp] = (0, Op.useState)(!1);
      (0, Op.useEffect)((() => (0, Dp.i)("crosshairAccuracy", jp)), []), (0, op.f)("mouseState", (pp => {
        let {
          isDown: ip
        } = pp;
        dp.current = ip, Hp.current && (Hp.current.style.transform = (0, Pp.e)(ip, Cp.current.growOnClick)), "shapes" === Cp.current.style && Xp(ip)
      }));
      const lp = (0, Ap.g)(ip, cp.touchActionButtons);
      return (null !== (pp = (0, Yp.d)(vp, Up)) && void 0 !== pp ? pp : (0, Yp.h)(mp, ep > 1, lp, tp)) ? "movement" === Ip || "cursor" === Ip ? null : (0, yp.jsxs)(yp.Fragment, {
        children: [qp && (0, yp.jsx)(Rp, {
          custom: Mp.forGuns && "shapes" === Mp.style ? Mp : null,
          touch: ip
        }), !qp && (0, yp.jsx)(Pp.b, {
          settings: Mp,
          touch: ip,
          pressRef: Hp,
          pressed: "shapes" === Mp.style ? Ep : dp.current
        })]
      }) : null
    }));

    function wp() {
      return Ip.gameBridge.lookup("cameraZoom", null)
    }
    const vp = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      tp = {
        current: null
      },
      Hp = {
        current: null
      };
    let dp = 0,
      ep = 0;

    function jp(pp) {
      ep = pp, vp[0].current || tp.current || Hp.current ? mp(pp) : dp = pp
    }

    function kp(pp) {
      return ((0, Yp.e)(pp) - (0, Yp.e)(0)) * window.innerHeight / 100
    }

    function mp(pp) {
      var ip;
      if (null === (ip = Hp.current) || void 0 === ip || ip.call(Hp, kp(pp)), vp[0].current) {
        const ip = `${(0,Yp.e)(pp)}vh`;
        vp[0].current.style.transform = `translateX(calc(0px - ${ip}))`, vp[1].current.style.transform = `translateX(calc(0px + ${ip}))`, vp[2].current.style.transform = `translateY(calc(0px - ${ip}))`, vp[3].current.style.transform = `translateY(calc(0px + ${ip}))`
      }
      tp.current && (tp.current.style.filter = `blur(${Math.round(pp/10)}px)`)
    }

    function Rp(pp) {
      let {
        custom: ip,
        touch: cp
      } = pp;
      const Ip = (0, op.i)("aimingOverlay", "none"),
        Sp = "1.2vh",
        xp = "0.3vh";
      (0, Op.useEffect)((() => {
        dp && mp(dp)
      }), []);
      const Lp = (0, Op.useRef)(null !== ip);
      return (0, Op.useLayoutEffect)((() => {
        var pp;
        ip ? null === (pp = Hp.current) || void 0 === pp || pp.call(Hp, kp(ep)) : Lp.current && mp(ep);
        Lp.current = null !== ip
      }), [ip]), (0, yp.jsxs)(yp.Fragment, {
        children: ["sniper" === Ip && (0, yp.jsxs)("div", {
          ref: tp,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, yp.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, yp.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, yp.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, yp.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, yp.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Ip ? 0 : 1
          },
          children: [ip && (0, yp.jsx)(Pp.b, {
            settings: ip,
            touch: cp,
            spreadRef: Hp
          }), !ip && (0, yp.jsxs)(yp.Fragment, {
            children: [(0, yp.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Sp,
                height: xp,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: vp[0]
            }), (0, yp.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Sp,
                height: xp,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: vp[1]
            }), (0, yp.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: xp,
                height: Sp,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: vp[2]
            }), (0, yp.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: xp,
                height: Sp,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: vp[3]
            })]
          })]
        })]
      })
    }
  },
  34397: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Up,
      e: () => yp
    });
    cp(34402);
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(62),
      Sp = cp(34392);

    function xp(pp, ip) {
      return Math.max(1, Math.round(pp * ip))
    }

    function Lp(pp, ip) {
      const cp = ip * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Op = function(pp, ip) {
          if (pp.lines) return xp(pp.lineThickness, ip) % 2;
          if (pp.dot) return xp(pp.dotSize, ip) % 2;
          return Yp(pp, ip) % 2
        }(pp, ip),
        op = Dp(pp.lineThickness * cp, Op),
        Ip = xp(pp.lineLength, cp),
        Sp = Math.round(pp.gap * cp),
        Lp = pp.outline > 0 ? xp(pp.outline, cp) : 0,
        Pp = [];
      if (pp.lines && (Pp.push({
          x: op + Sp,
          y: 0,
          w: Ip,
          h: op,
          arm: "right"
        }), Pp.push({
          x: -Sp - Ip,
          y: 0,
          w: Ip,
          h: op,
          arm: "left"
        }), Pp.push({
          x: 0,
          y: op + Sp,
          w: op,
          h: Ip,
          arm: "down"
        }), pp.tStyle || Pp.push({
          x: 0,
          y: -Sp - Ip,
          w: op,
          h: Ip,
          arm: "up"
        }), 0 === Sp && Pp.push({
          x: 0,
          y: 0,
          w: op,
          h: op
        })), pp.dot) {
        const ip = Dp(pp.dotSize * cp, Op),
          Ip = pp.lines && 0 === Sp && pp.dotSize > pp.lineThickness ? Math.max(ip, op + 2) : ip,
          xp = (op - Ip) / 2;
        Pp.push({
          x: xp,
          y: xp,
          w: Ip,
          h: Ip
        })
      }
      const Wp = Pp.map((pp => ({
        ...pp,
        x: pp.x - Lp,
        y: pp.y - Lp,
        w: pp.w + 2 * Lp,
        h: pp.h + 2 * Lp
      })));
      let yp = null,
        Up = null;
      if (pp.circle) {
        const ip = xp(pp.circleThickness, cp),
          Ip = function(pp, ip) {
            return pp + (pp % 2 === ip ? 0 : 1)
          }(Yp(pp, cp), Op),
          Sp = (op - Ip) / 2;
        yp = Ap(Sp, Ip, ip), Lp > 0 && (Up = Ap(Sp - Lp, Ip + 2 * Lp, ip + 2 * Lp))
      }
      return {
        cell: op,
        fills: Pp,
        outlines: Lp > 0 ? Wp : [],
        ring: yp,
        ringOutline: Up
      }
    }

    function Yp(pp, ip) {
      return Math.round(pp.circleRadius * ip * 2 + xp(pp.circleThickness, ip))
    }

    function Dp(pp, ip) {
      return Math.max(2 - ip, 2 * Math.round((pp - ip) / 2) + ip)
    }

    function Ap(pp, ip, cp) {
      const Op = 2 * cp >= ip - 1;
      return {
        x: pp,
        y: pp,
        size: ip,
        border: Math.min(cp, Math.floor(ip / 2)),
        filled: Op
      }
    }
    var Pp = cp(1112);
    const Wp = 1.4;

    function yp(pp, ip) {
      return pp && ip ? `scale(${Wp})` : "scale(1)"
    }

    function Up(pp) {
      return "classic" === pp.settings.style ? (0, Pp.jsx)(tp, {
        ...pp
      }) : (0, Pp.jsx)(Rp, {
        ...pp
      })
    }
    const wp = .125;

    function vp(pp, ip) {
      const cp = {};
      if (pp.color !== Sp.d.color && (cp.color = (0, Sp.j)(pp.color)), pp.opacity !== Sp.d.opacity && (cp.opacity = pp.opacity / 100), pp.outline !== Sp.d.outline || pp.outlineColor !== Sp.d.outlineColor) {
        const ip = pp.outline,
          Op = (0, Sp.j)(pp.outlineColor);
        cp.textShadow = ip > 0 ? `-${ip}px 0 ${Op}, 0 ${ip}px ${Op}, ${ip}px 0 ${Op}, 0 -${ip}px ${Op}` : "none"
      }
      if (pp.size !== Sp.d.size) {
        const Op = pp.size / 100;
        cp.fontSize = ip ? `calc(max(1.3rem, 18px) * ${Op})` : `calc(1.3rem * ${Op})`, cp.marginTop = `-${wp}em`, cp.transformOrigin = `50% calc(50% + ${wp}em)`
      }
      return cp
    }

    function tp(pp) {
      let {
        settings: ip,
        touch: cp,
        inPreview: Op,
        inEditor: Ip,
        pressed: Sp = !1,
        pressRef: xp
      } = pp;
      return (0, Pp.jsx)("div", {
        className: op()("Crosshair", {
          Touch: cp,
          CrosshairInPreview: Op,
          CrosshairInEditor: Ip || Op
        }),
        ref: xp,
        style: {
          transform: yp(Sp, ip.growOnClick),
          ...vp(ip, cp)
        },
        children: "+"
      })
    }

    function Hp(pp, ip) {
      return pp / ip + "px"
    }

    function dp(pp, ip, cp, Op) {
      return {
        ...kp(pp, ip, cp),
        width: Hp(pp.w, cp),
        height: Hp(pp.h, cp),
        background: Op
      }
    }

    function ep(pp, ip, cp) {
      return {
        left: Hp(pp.x, ip),
        top: Hp(pp.y, ip),
        width: Hp(pp.size, ip),
        height: Hp(pp.size, ip),
        borderWidth: Hp(pp.border, ip),
        borderColor: cp,
        background: pp.filled ? cp : void 0
      }
    }
    const jp = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function kp(pp, ip, cp) {
      const [Op, op] = pp.arm ? jp[pp.arm] : [0, 0], Ip = Math.round(ip * cp);
      return {
        left: Hp(pp.x + Op * Ip, cp),
        top: Hp(pp.y + op * Ip, cp)
      }
    }

    function mp(pp) {
      return pp.arm ? {
        "data-arm": pp.arm,
        "data-x": pp.x,
        "data-y": pp.y
      } : {}
    }

    function Rp(pp) {
      let {
        settings: ip,
        inPreview: cp,
        inEditor: Op,
        pressed: xp = !1,
        spread: Yp,
        spreadRef: Dp
      } = pp;
      const Ap = (0, Ip.useRef)(null),
        {
          box: yp,
          dpr: Up
        } = function(pp) {
          const [ip, cp] = (0, Ip.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Ip.useLayoutEffect)((() => {
            const ip = pp.current;
            if (!ip) return;
            const Op = () => {
              const pp = ip.getBoundingClientRect(),
                Op = window.devicePixelRatio || 1;
              cp((ip => ip.dpr === Op && ip.box.left === pp.left && ip.box.top === pp.top && ip.box.width === pp.width && ip.box.height === pp.height ? ip : {
                box: {
                  left: pp.left,
                  top: pp.top,
                  width: pp.width,
                  height: pp.height
                },
                dpr: Op
              }))
            };
            Op();
            const op = new ResizeObserver(Op);
            return op.observe(ip), window.addEventListener("resize", Op), window.addEventListener("scroll", Op, !0), () => {
              op.disconnect(), window.removeEventListener("resize", Op), window.removeEventListener("scroll", Op, !0)
            }
          }), [pp]), ip
        }(Ap),
        wp = (0, Ip.useRef)(Up);
      wp.current = Up;
      const vp = Lp(ip, Up, xp && ip.growOnClick ? Wp : 1),
        tp = function(pp, ip, cp) {
          const Op = Math.round((pp.left + pp.width / 2) * cp - ip / 2),
            op = Math.round((pp.top + pp.height / 2) * cp - ip / 2);
          return {
            x: Op / cp - pp.left,
            y: op / cp - pp.top
          }
        }(yp, vp.cell, Up),
        Hp = (0, Sp.j)(ip.color),
        jp = (0, Sp.j)(ip.outlineColor),
        Rp = (0, Ip.useRef)(0);
      (0, Ip.useLayoutEffect)((() => {
        if (Dp) return Dp.current = pp => {
          var ip;
          Rp.current = pp, null === (ip = Ap.current) || void 0 === ip || ip.querySelectorAll("[data-arm]").forEach((ip => {
            Object.assign(ip.style, kp(function(pp) {
              return {
                x: Number(pp.dataset.x),
                y: Number(pp.dataset.y),
                arm: pp.dataset.arm
              }
            }(ip), pp, wp.current))
          }))
        }, () => {
          Dp.current = null
        }
      }), [Dp]);
      const qp = null !== Yp && void 0 !== Yp ? Yp : Rp.current;
      return (0, Pp.jsx)("div", {
        ref: Ap,
        className: op()("CrosshairShapes", {
          CrosshairInPreview: cp,
          CrosshairInEditor: Op || cp,
          CrosshairSpreads: void 0 !== Dp
        }),
        children: (0, Pp.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: tp.x,
            top: tp.y,
            opacity: ip.opacity / 100
          },
          children: (0, Pp.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [vp.ringOutline && (0, Pp.jsx)("div", {
              className: "CrosshairRing",
              style: ep(vp.ringOutline, Up, jp)
            }), vp.outlines.map(((pp, ip) => (0, Pp.jsx)("div", {
              className: "CrosshairPart",
              ...mp(pp),
              style: dp(pp, qp, Up, jp)
            }, `o${ip}`))), vp.ring && (0, Pp.jsx)("div", {
              className: "CrosshairRing",
              style: ep(vp.ring, Up, Hp)
            }), vp.fills.map(((pp, ip) => (0, Pp.jsx)("div", {
              className: "CrosshairPart",
              ...mp(pp),
              style: dp(pp, qp, Up, Hp)
            }, `f${ip}`)))]
          })
        })
      })
    }
  },
  34411: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp,
      e: () => wp,
      h: () => Up
    });
    var Op = cp(34392);
    const op = "XH1-",
      Ip = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Sp = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      xp = ["color", "outlineColor"],
      Lp = 1 + 3 * xp.length + Sp.length + 1,
      Yp = Math.ceil(8 * Lp / Math.log2(62)),
      Dp = op.length + Yp;

    function Ap(pp) {
      let ip = 90;
      for (const cp of pp) ip = 31 * ip + cp & 255;
      return ip
    }
    const Pp = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Wp = BigInt(Pp.length);

    function yp(pp, ip) {
      let cp = 0n;
      for (const op of pp) {
        const pp = Pp.indexOf(op);
        if (pp < 0) return null;
        cp = cp * Wp + BigInt(pp)
      }
      if (cp >> BigInt(8 * ip) !== 0n) return null;
      const Op = [];
      for (let op = 0; op < ip; op++) Op.unshift(Number(0xffn & cp)), cp >>= 8n;
      return Op
    }

    function Up(pp) {
      let ip = "shapes" === pp.style ? 1 : 0;
      Ip.forEach(((cp, Op) => {
        pp[cp] && (ip |= 1 << Op + 1)
      }));
      const cp = [ip];
      for (const op of xp) {
        const ip = (0, Op.g)(op, pp[op]);
        cp.push(ip >> 16 & 255, ip >> 8 & 255, 255 & ip)
      }
      for (const op of Sp) {
        const {
          min: ip,
          step: Ip
        } = Op.b[op];
        cp.push(Math.round(((0, Op.g)(op, pp[op]) - ip) / Ip))
      }
      return cp.push(Ap(cp)), op + function(pp, ip) {
        let cp = 0n;
        for (const op of pp) cp = cp << 8n | BigInt(op);
        let Op = "";
        for (let op = 0; op < ip; op++) Op = Pp[Number(cp % Wp)] + Op, cp /= Wp;
        return Op
      }(cp, Yp)
    }

    function wp(pp) {
      for (const ip of pp.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Yp}})`, "gi"))) {
        const pp = vp(yp(ip[1], Lp));
        if (pp) return pp
      }
      return null
    }

    function vp(pp) {
      if (!pp || pp.length !== Lp || Ap(pp.slice(0, -1)) !== pp[pp.length - 1]) return null;
      const ip = pp[0],
        cp = {
          ...Op.d,
          style: 1 & ip ? "shapes" : "classic"
        };
      Ip.forEach(((pp, Op) => {
        cp[pp] = 0 !== (ip & 1 << Op + 1)
      }));
      let op = 1;
      for (const Op of xp) cp[Op] = pp[op] << 16 | pp[op + 1] << 8 | pp[op + 2], op += 3;
      for (const Ip of Sp) {
        const {
          min: ip,
          step: Sp
        } = Op.b[Ip];
        cp[Ip] = (0, Op.g)(Ip, ip + pp[op] * Sp), op++
      }
      return cp
    }
  },
  34392: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      d: () => op,
      g: () => Ip,
      j: () => Yp,
      n: () => Lp,
      o: () => Dp,
      p: () => xp,
      q: () => Sp
    });
    const Op = {
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
      op = Object.freeze({
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

    function Ip(pp, ip) {
      var cp;
      const {
        min: Ip,
        max: Sp,
        step: xp
      } = Op[pp];
      if (!Number.isFinite(ip)) return op[pp];
      const Lp = (null !== (cp = String(xp).split(".")[1]) && void 0 !== cp ? cp : "").length,
        Yp = Number((Math.round(ip / xp) * xp).toFixed(Lp));
      return Math.min(Sp, Math.max(Ip, Yp))
    }

    function Sp(pp, ip, cp) {
      const Op = "number" === typeof cp ? Ip(ip, cp) : cp;
      return {
        ...pp,
        [ip]: Op
      }
    }

    function xp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(op).every((Op => cp.includes(Op) || pp[Op] === ip[Op]))
    }

    function Lp(pp) {
      return xp(pp, op)
    }

    function Yp(pp) {
      return `#${pp.toString(16).padStart(6,"0")}`
    }

    function Dp(pp) {
      const ip = /^#?([0-9a-f]{6})$/i.exec(pp.trim());
      return ip ? parseInt(ip[1], 16) : null
    }
  },
  34420: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap,
      f: () => Pp
    });
    var Op = cp(62),
      op = cp(44),
      Ip = cp(34411),
      Sp = cp(34392);
    const xp = "crosshairCode";
    let Lp = null;
    const Yp = new Set;

    function Dp() {
      if (null === Lp) {
        var pp;
        const ip = op.h.getItem(xp);
        Lp = null !== (pp = "string" === typeof ip ? (0, Ip.e)(ip) : null) && void 0 !== pp ? pp : Sp.d
      }
      return Lp
    }

    function Ap(pp) {
      Lp = pp, (0, Sp.n)(pp) ? op.h.removeItem(xp) : op.h.setItem(xp, (0, Ip.h)(pp));
      for (const ip of Yp) ip()
    }

    function Pp() {
      const [pp, ip] = (0, Op.useState)(Dp);
      return (0, Op.useEffect)((() => {
        const pp = () => {
          ip(Dp())
        };
        return pp(), cp = pp, Yp.add(cp), () => {
          Yp.delete(cp)
        };
        var cp
      }), []), pp
    }
  },
  36959: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      c: () => Lp,
      e: () => Sp
    });
    var Op = cp(640),
      op = cp(2849);

    function Ip(pp) {
      return pp === (0, op.g)().Fpp ? (0, op.g)().NJ : pp
    }

    function Sp(pp) {
      return !(0, Op.G)(pp) && Ip(pp) === (0, op.g)().NJ
    }
    const xp = "gravity";

    function Lp() {
      return (0, op.g)().physics[xp][1]
    }
  },
  36942: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => kp
    });
    var Op = cp(36948),
      op = cp(195),
      Ip = cp(4974),
      Sp = cp(36950),
      xp = cp(36654),
      Lp = cp(37001),
      Yp = cp(36959),
      Dp = cp(343),
      Ap = cp.n(Dp),
      Pp = cp(1211),
      Wp = cp(2849),
      yp = cp(36994),
      Up = cp(34),
      wp = cp(25),
      vp = cp(36965),
      tp = cp(36974),
      Hp = cp(36980);
    const dp = new Set(["note"]);
    const ep = {
      stop: () => ep,
      fade: () => ep,
      rate: () => ep,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => ep,
      setPannerAttr: () => ep,
      setPosition: () => ep
    };
    class jp {
      constructor(pp) {
        let ip, {
          src: cp,
          volumeScalar: op,
          isSoundSprite: Sp
        } = pp;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, Sp ? (ip = (0, Op.e)(cp), this._spriteTrackSrc = ip) : ip = {
          src: Pp.clientSideServerUrls.staticUrl + cp
        }, this._volumeMultiplier = new Lp.g, this._volumeMultiplier.setMultiplierType("persistentScalar", op), this._howl = (0, xp.countDecodesAs)(new Ip.Howl({
          ...ip,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let pp, ip = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (ip) {
          var Op;
          if (null === (Op = this._spriteTrackSrc) || void 0 === Op || !Op.sprite[ip]) throw new Error("No such sprite in your spritetrack");
          pp = this._howl.play(ip)
        } else pp = this._howl.play();
        cp && this._howl.loop(!0, pp);
        let op = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), pp);
        const Ip = {
          stop: () => {
            var ip;
            return null === (ip = this.liveHowl()) || void 0 === ip || ip.stop(pp), Ip
          },
          fade: (ip, cp, Op) => {
            var op;
            return null === (op = this.liveHowl()) || void 0 === op || op.fade(ip, cp, Op, pp), Ip
          },
          rate: ip => {
            var cp;
            return null === (cp = this.liveHowl()) || void 0 === cp || cp.rate(ip, pp), Ip
          },
          stopsAtOnce: () => this._howl.playing(pp) && !this._howl._playLock,
          isAlive: () => {
            const ip = this._howl._soundById(pp);
            return !this._loadFailed && !!ip && !ip._ended
          },
          getDurationMs: () => this._howl._soundById(pp) ? 1e3 * this._howl.duration(pp) / this._howl.rate(pp) : 0,
          getVolume: () => op * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => op,
          setRelativeVolume: ip => {
            var cp;
            if (ip > 1) throw new Error("Volume should be <= 1");
            return op = wp.c.get("soundOnFromAd") ? ip : 0, null === (cp = this.liveHowl()) || void 0 === cp || cp.volume(Math.min(1, op * this._volumeMultiplier.getTotalMultipliedVal()), pp), Ip
          },
          setPannerAttr: ip => {
            let {
              coneInnerAngle: cp,
              coneOuterAngle: Op = 360,
              coneOuterGain: op,
              distanceModel: Sp,
              maxDistance: xp,
              panningModel: Lp,
              refDistance: Yp,
              rolloffFactor: Dp
            } = ip;
            return this._setPannerAttr({
              id: pp,
              coneInnerAngle: cp,
              coneOuterAngle: Op,
              coneOuterGain: op,
              distanceModel: Sp,
              maxDistance: xp,
              panningModel: Lp,
              refDistance: Yp,
              rolloffFactor: Dp
            }), Ip
          },
          setPosition: ip => {
            var cp;
            return null === (cp = this.liveHowl()) || void 0 === cp || cp.pos(ip[2], ip[1], ip[0], pp), Ip
          }
        };
        return Ip
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, Sp.d)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(pp) {
        this._volumeMultiplier.setMultiplierType("globalVolume", pp), this._howl.volume(pp)
      }
      _setPannerAttr(pp) {
        let {
          id: ip,
          coneInnerAngle: cp = 360,
          coneOuterAngle: Op = 360,
          coneOuterGain: op = 0,
          distanceModel: Ip = "inverse",
          maxDistance: Sp = 1e3,
          panningModel: xp = "HRTF",
          refDistance: Lp = yp.k,
          rolloffFactor: Yp = 1
        } = pp;
        const Dp = this.liveHowl();
        if (null === Dp) return;
        Dp.pannerAttr({
          coneOuterAngle: Op
        }, ip);
        const Ap = {
          coneInnerAngle: cp,
          coneOuterAngle: Op,
          coneOuterGain: op,
          distanceModel: Ip,
          maxDistance: Sp,
          panningModel: xp,
          refDistance: Lp,
          rolloffFactor: Yp
        };
        Dp.pannerAttr(Ap, ip)
      }
    }
    const kp = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new vp.b, Up.m.subscribe("appManagerUpdated|soundVolume", (pp => {
          const ip = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const cp of ip) cp.setGlobalVolume(pp)
        }))
      }
      play(pp, ip) {
        var cp;
        let Ip, Sp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (cp = (0, Wp.g)()) || void 0 === cp ? void 0 : cp.NJ,
          xp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yp.g,
          Lp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : yp.k,
          Dp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Pp;
        (0, Wp.g)() ? Ip = !!Array.isArray(Sp) || (0, Yp.b)(Sp) !== (null === (Pp = (0, Wp.g)()) || void 0 === Pp ? void 0 : Pp.NJ): Ip = !1;
        const Up = (0, Op.i)(pp),
          wp = this.loadSheet(Ip ? this.spatialSheets : this.stereoSheets, Up);
        if (!Ip) {
          const cp = wp.play(pp, Dp);
          return cp.setRelativeVolume(ip), cp
        }
        const tp = (0, Wp.g)(),
          Hp = Array.isArray(Sp) ? Sp : tp.Yk.sH(Sp),
          jp = tp.Yk.sH(tp.NJ);
        if (!Hp || Ap().sqrDist(Hp, jp) > xp * xp) return ep;
        let kp;
        if (!Dp) {
          if (!this.spatialVoices.admit({
              group: dp.has(Up) ? null : (0, vp.f)(pp),
              loudness: (0, vp.c)(ip, Ap().Yx(Hp, jp), Lp),
              startMs: performance.now(),
              getDurationMs: () => {
                var pp, ip;
                return null !== (pp = null === (ip = kp) || void 0 === ip ? void 0 : ip.getDurationMs()) && void 0 !== pp ? pp : 0
              },
              isAlive: () => {
                var pp, ip;
                return null !== (pp = null === (ip = kp) || void 0 === ip ? void 0 : ip.isAlive()) && void 0 !== pp && pp
              },
              canStop: () => {
                var pp, ip;
                return null !== (pp = null === (ip = kp) || void 0 === ip ? void 0 : ip.stopsAtOnce()) && void 0 !== pp && pp
              },
              stop: () => {
                var pp;
                null === (pp = kp) || void 0 === pp || pp.stop()
              }
            })) return ep
        }
        return kp = wp.play(pp, Dp), kp.setRelativeVolume(ip), kp.setPannerAttr({
          refDistance: Lp
        }), kp.setPosition([Hp[0], Hp[1] + op.g.Vw * op.g.playerEyeToHeightRatio, Hp[2]]), kp
      }
      preload(pp) {
        this.loadSheet(this.stereoSheets, (0, Op.i)(pp))
      }
      loadSheet(pp, ip) {
        let cp = pp[ip];
        return cp || ((0, Hp.b)(ip), cp = new jp({
          src: ip,
          isSoundSprite: !0,
          volumeScalar: 1
        }), cp.setGlobalVolume(wp.c.get("soundVolume")), pp[ip] = cp), cp
      }
      freeSheetsAfterGame() {
        for (const pp of [this.stereoSheets, this.spatialSheets])
          for (const [ip, cp] of Object.entries(pp)) !tp.b.has(ip) && cp.loaded() && (cp.unloadOnceIdle(), delete pp[ip])
      }
    }
  },
  37039: (pp, ip, cp) => {
    function Op(pp, ip) {
      var cp, Op, op, Ip, Sp, xp, Lp, Yp;
      return pp.name === ip.name && ((null === (cp = pp.attributes) || void 0 === cp || null === (Op = cp.customAttributes) || void 0 === Op ? void 0 : Op.stackKey) === (null === (op = ip.attributes) || void 0 === op || null === (Ip = op.customAttributes) || void 0 === Ip ? void 0 : Ip.stackKey) && (!0 !== (null === (Sp = pp.attributes) || void 0 === Sp || null === (xp = Sp.customAttributes) || void 0 === xp ? void 0 : xp.unstackable) && !0 !== (null === (Lp = ip.attributes) || void 0 === Lp || null === (Yp = Lp.customAttributes) || void 0 === Yp ? void 0 : Yp.unstackable)))
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  37146: (pp, ip, cp) => {
    function Op(pp) {
      return pp.includes("Leaf Bed")
    }

    function op(pp) {
      return / Bed(?: Head)?(?:\||$)/.test(pp) && !Op(pp)
    }

    function Ip(pp) {
      return pp.includes(" Strongbed")
    }

    function Sp(pp) {
      return Op(pp) || op(pp) || Ip(pp)
    }
    cp.d(ip, {
      b: () => Sp,
      f: () => Op,
      g: () => Ip,
      h: () => op
    })
  },
  37142: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp
    });
    var Op = cp(37146),
      op = cp(9338);
    const Ip = [],
      Sp = [],
      xp = [],
      Lp = [];
    for (const Dp of Object.keys(op.h))(0, Op.f)(Dp) ? Ip.push(Dp) : (0, Op.h)(Dp) && Sp.push(Dp), (0, Op.g)(Dp) && xp.push(Dp), (Dp.includes(" Bed Head") || Dp.includes(" Strongbed Head")) && Lp.push(Dp);
    const Yp = {
      leafBeds: Ip,
      woolBeds: Sp,
      strongBeds: xp,
      beds: [...Ip, ...Sp, ...xp],
      bedHeads: Lp,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6605: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      g: () => op,
      h: () => Lp,
      i: () => Ip,
      k: () => Yp,
      l: () => Op,
      m: () => xp
    });
    let Op = function(pp) {
        return pp[pp.DEFAULT = 0] = "DEFAULT", pp[pp.BOAT = 1] = "BOAT", pp[pp.GLIDER = 2] = "GLIDER", pp[pp.BALLOON = 3] = "BALLOON", pp[pp.SLEEPING = 4] = "SLEEPING", pp[pp.RIDING_MOB = 5] = "RIDING_MOB", pp[pp.CAR = 6] = "CAR", pp[pp.HOVERCRAFT = 7] = "HOVERCRAFT", pp
      }({}),
      op = function(pp) {
        return pp[pp.WOOD = 0] = "WOOD", pp[pp.OBSIDIAN = 1] = "OBSIDIAN", pp[pp.SPEED = 2] = "SPEED", pp
      }({}),
      Ip = function(pp) {
        return pp[pp.WOOD = 0] = "WOOD", pp[pp.IRON = 1] = "IRON", pp[pp.GOLD = 2] = "GOLD", pp[pp.DIAMOND = 3] = "DIAMOND", pp
      }({}),
      Sp = function(pp) {
        return pp[pp.YELLOW = 0] = "YELLOW", pp[pp.WHITE = 1] = "WHITE", pp[pp.RED = 2] = "RED", pp[pp.PURPLE = 3] = "PURPLE", pp[pp.PINK = 4] = "PINK", pp[pp.ORANGE = 5] = "ORANGE", pp[pp.MAGENTA = 6] = "MAGENTA", pp[pp.LIME = 7] = "LIME", pp[pp.LIGHT_GRAY = 8] = "LIGHT_GRAY", pp[pp.LIGHT_BLUE = 9] = "LIGHT_BLUE", pp[pp.GREEN = 10] = "GREEN", pp[pp.GRAY = 11] = "GRAY", pp[pp.CYAN = 12] = "CYAN", pp[pp.BROWN = 13] = "BROWN", pp[pp.BLUE = 14] = "BLUE", pp[pp.BLACK = 15] = "BLACK", pp
      }({}),
      xp = function(pp) {
        return pp[pp.ROTATION_1 = 0] = "ROTATION_1", pp[pp.ROTATION_2 = 1] = "ROTATION_2", pp[pp.ROTATION_3 = 2] = "ROTATION_3", pp[pp.ROTATION_4 = 3] = "ROTATION_4", pp
      }({}),
      Lp = function(pp) {
        return pp[pp.KART = 0] = "KART", pp[pp.OFF_ROADER = 1] = "OFF_ROADER", pp[pp.CAR = 2] = "CAR", pp[pp.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", pp[pp.ARMORED_CAR = 4] = "ARMORED_CAR", pp[pp.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", pp[pp.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", pp[pp.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", pp
      }({});
    Op.DEFAULT, Op.BOAT, op.SPEED, Op.GLIDER, Ip.DIAMOND, Op.BALLOON, Sp.BLACK, Op.SLEEPING, xp.ROTATION_4, Op.RIDING_MOB, Op.CAR, Lp.MOONSTONE_MINING_DRILL, Op.HOVERCRAFT;
    let Yp = function(pp) {
      return pp[pp.NORMAL = 0] = "NORMAL", pp[pp.GLIDING = 1] = "GLIDING", pp[pp.FLOATING = 2] = "FLOATING", pp
    }({})
  },
  34402: () => {}
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);