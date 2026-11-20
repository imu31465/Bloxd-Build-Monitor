export const id = 113;
export const ids = [113];
export const modules = {
  36148: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => sv,
      d: () => fv
    });
    Pv(8975);
    var hv = Pv(52),
      Sv = Pv(1439),
      ev = Pv(1876),
      gv = Pv(1923),
      pv = Pv(22),
      dv = Pv(2324),
      Nv = Pv(36151),
      lv = Pv(36153),
      Tv = Pv(8931),
      Wv = Pv(8970),
      wv = Pv(8987),
      av = Pv(1082);
    const sv = (0, hv.memo)((function() {
      var vv;
      const {
        isTouchScreen: zv,
        clientEscMenuOptions: Pv,
        scriptedCameraFacing: ev,
        crosshairShownOverride: sv,
        crosshairGameView: iv
      } = (0, pv.i)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), cv = (0, dv.i)("gunshotOrigin"), Gv = (0, hv.useRef)(null), mv = (0, hv.useRef)(!1), [jv, Fv] = (0, hv.useState)(Cv);
      (0, Sv.g)("cameraZoomSet", Fv), (0, hv.useEffect)((() => {
        Fv(Cv())
      }), []);
      const Yv = (0, gv.h)("heldItemAim"),
        Ov = Yv.gun,
        Dv = (0, wv.f)(),
        Kv = (0, hv.useRef)(Dv);
      Kv.current = Dv;
      const [Vv, Uv] = (0, hv.useState)(!1);
      (0, hv.useEffect)((() => (0, lv.c)("crosshairAccuracy", fv)), []), (0, Sv.g)("mouseState", (vv => {
        let {
          isDown: zv
        } = vv;
        mv.current = zv, Gv.current && (Gv.current.style.transform = (0, Wv.c)(zv, Kv.current.growOnClick)), "shapes" === Kv.current.style && Uv(zv)
      }));
      const Rv = (0, Tv.f)(zv, Pv.touchActionButtons);
      return (null !== (vv = (0, Nv.b)(iv, sv)) && void 0 !== vv ? vv : (0, Nv.e)(Yv, jv > 1, Rv, cv)) ? "movement" === ev || "cursor" === ev ? null : (0, av.jsxs)(av.Fragment, {
        children: [Ov && (0, av.jsx)(nv, {
          custom: Dv.forGuns && "shapes" === Dv.style ? Dv : null,
          touch: zv
        }), !Ov && (0, av.jsx)(Wv.b, {
          settings: Dv,
          touch: zv,
          pressRef: Gv,
          pressed: "shapes" === Dv.style ? Vv : mv.current
        })]
      }) : null
    }));

    function Cv() {
      return ev.gameBridge.lookup("cameraZoom", null)
    }
    const iv = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      cv = {
        current: null
      },
      Gv = {
        current: null
      };
    let mv = 0,
      jv = 0;

    function fv(vv) {
      jv = vv, iv[0].current || cv.current || Gv.current ? Yv(vv) : mv = vv
    }

    function Fv(vv) {
      return ((0, Nv.d)(vv) - (0, Nv.d)(0)) * window.innerHeight / 100
    }

    function Yv(vv) {
      var zv;
      if (null === (zv = Gv.current) || void 0 === zv || zv.call(Gv, Fv(vv)), iv[0].current) {
        const zv = `${(0,Nv.d)(vv)}vh`;
        iv[0].current.style.transform = `translateX(calc(0px - ${zv}))`, iv[1].current.style.transform = `translateX(calc(0px + ${zv}))`, iv[2].current.style.transform = `translateY(calc(0px - ${zv}))`, iv[3].current.style.transform = `translateY(calc(0px + ${zv}))`
      }
      cv.current && (cv.current.style.filter = `blur(${Math.round(vv/10)}px)`)
    }

    function nv(vv) {
      let {
        custom: zv,
        touch: Pv
      } = vv;
      const ev = (0, Sv.j)("aimingOverlay", "none"),
        gv = "1.2vh",
        pv = "0.3vh";
      (0, hv.useEffect)((() => {
        mv && Yv(mv)
      }), []);
      const dv = (0, hv.useRef)(null !== zv);
      return (0, hv.useLayoutEffect)((() => {
        var vv;
        zv ? null === (vv = Gv.current) || void 0 === vv || vv.call(Gv, Fv(jv)) : dv.current && Yv(jv);
        dv.current = null !== zv
      }), [zv]), (0, av.jsxs)(av.Fragment, {
        children: ["sniper" === ev && (0, av.jsxs)("div", {
          ref: cv,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, av.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, av.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, av.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, av.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, av.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === ev ? 0 : 1
          },
          children: [zv && (0, av.jsx)(Wv.b, {
            settings: zv,
            touch: Pv,
            spreadRef: Gv
          }), !zv && (0, av.jsxs)(av.Fragment, {
            children: [(0, av.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: gv,
                height: pv,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: iv[0]
            }), (0, av.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: gv,
                height: pv,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: iv[1]
            }), (0, av.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: pv,
                height: gv,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: iv[2]
            }), (0, av.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: pv,
                height: gv,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: iv[3]
            })]
          })]
        })]
      })
    }
  },
  8970: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => sv,
      c: () => av
    });
    Pv(8975);
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(52),
      gv = Pv(8940);

    function pv(vv, zv) {
      return Math.max(1, Math.round(vv * zv))
    }

    function dv(vv, zv) {
      const Pv = zv * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        hv = function(vv, zv) {
          if (vv.lines) return pv(vv.lineThickness, zv) % 2;
          if (vv.dot) return pv(vv.dotSize, zv) % 2;
          return Nv(vv, zv) % 2
        }(vv, zv),
        Sv = lv(vv.lineThickness * Pv, hv),
        ev = pv(vv.lineLength, Pv),
        gv = Math.round(vv.gap * Pv),
        dv = vv.outline > 0 ? pv(vv.outline, Pv) : 0,
        Wv = [];
      if (vv.lines && (Wv.push({
          x: Sv + gv,
          y: 0,
          w: ev,
          h: Sv,
          arm: "right"
        }), Wv.push({
          x: -gv - ev,
          y: 0,
          w: ev,
          h: Sv,
          arm: "left"
        }), Wv.push({
          x: 0,
          y: Sv + gv,
          w: Sv,
          h: ev,
          arm: "down"
        }), vv.tStyle || Wv.push({
          x: 0,
          y: -gv - ev,
          w: Sv,
          h: ev,
          arm: "up"
        }), 0 === gv && Wv.push({
          x: 0,
          y: 0,
          w: Sv,
          h: Sv
        })), vv.dot) {
        const zv = lv(vv.dotSize * Pv, hv),
          ev = vv.lines && 0 === gv && vv.dotSize > vv.lineThickness ? Math.max(zv, Sv + 2) : zv,
          pv = (Sv - ev) / 2;
        Wv.push({
          x: pv,
          y: pv,
          w: ev,
          h: ev
        })
      }
      const wv = Wv.map((vv => ({
        ...vv,
        x: vv.x - dv,
        y: vv.y - dv,
        w: vv.w + 2 * dv,
        h: vv.h + 2 * dv
      })));
      let av = null,
        sv = null;
      if (vv.circle) {
        const zv = pv(vv.circleThickness, Pv),
          ev = function(vv, zv) {
            return vv + (vv % 2 === zv ? 0 : 1)
          }(Nv(vv, Pv), hv),
          gv = (Sv - ev) / 2;
        av = Tv(gv, ev, zv), dv > 0 && (sv = Tv(gv - dv, ev + 2 * dv, zv + 2 * dv))
      }
      return {
        cell: Sv,
        fills: Wv,
        outlines: dv > 0 ? wv : [],
        ring: av,
        ringOutline: sv
      }
    }

    function Nv(vv, zv) {
      return Math.round(vv.circleRadius * zv * 2 + pv(vv.circleThickness, zv))
    }

    function lv(vv, zv) {
      return Math.max(2 - zv, 2 * Math.round((vv - zv) / 2) + zv)
    }

    function Tv(vv, zv, Pv) {
      const hv = 2 * Pv >= zv - 1;
      return {
        x: vv,
        y: vv,
        size: zv,
        border: Math.min(Pv, Math.floor(zv / 2)),
        filled: hv
      }
    }
    var Wv = Pv(1082);
    const wv = 1.4;

    function av(vv, zv) {
      return vv && zv ? `scale(${wv})` : "scale(1)"
    }

    function sv(vv) {
      return "classic" === vv.settings.style ? (0, Wv.jsx)(cv, {
        ...vv
      }) : (0, Wv.jsx)(nv, {
        ...vv
      })
    }
    const Cv = .125;

    function iv(vv, zv) {
      const Pv = {};
      if (vv.color !== gv.f.color && (Pv.color = (0, gv.m)(vv.color)), vv.opacity !== gv.f.opacity && (Pv.opacity = vv.opacity / 100), vv.outline !== gv.f.outline || vv.outlineColor !== gv.f.outlineColor) {
        const zv = vv.outline,
          hv = (0, gv.m)(vv.outlineColor);
        Pv.textShadow = zv > 0 ? `-${zv}px 0 ${hv}, 0 ${zv}px ${hv}, ${zv}px 0 ${hv}, 0 -${zv}px ${hv}` : "none"
      }
      if (vv.size !== gv.f.size) {
        const hv = vv.size / 100;
        Pv.fontSize = zv ? `calc(max(1.3rem, 18px) * ${hv})` : `calc(1.3rem * ${hv})`, Pv.marginTop = `-${Cv}em`, Pv.transformOrigin = `50% calc(50% + ${Cv}em)`
      }
      return Pv
    }

    function cv(vv) {
      let {
        settings: zv,
        touch: Pv,
        inPreview: hv,
        inEditor: ev,
        pressed: gv = !1,
        pressRef: pv
      } = vv;
      return (0, Wv.jsx)("div", {
        className: Sv()("Crosshair", {
          Touch: Pv,
          CrosshairInPreview: hv,
          CrosshairInEditor: ev || hv
        }),
        ref: pv,
        style: {
          transform: av(gv, zv.growOnClick),
          ...iv(zv, Pv)
        },
        children: "+"
      })
    }

    function Gv(vv, zv) {
      return vv / zv + "px"
    }

    function mv(vv, zv, Pv, hv) {
      return {
        ...Fv(vv, zv, Pv),
        width: Gv(vv.w, Pv),
        height: Gv(vv.h, Pv),
        background: hv
      }
    }

    function jv(vv, zv, Pv) {
      return {
        left: Gv(vv.x, zv),
        top: Gv(vv.y, zv),
        width: Gv(vv.size, zv),
        height: Gv(vv.size, zv),
        borderWidth: Gv(vv.border, zv),
        borderColor: Pv,
        background: vv.filled ? Pv : void 0
      }
    }
    const fv = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Fv(vv, zv, Pv) {
      const [hv, Sv] = vv.arm ? fv[vv.arm] : [0, 0], ev = Math.round(zv * Pv);
      return {
        left: Gv(vv.x + hv * ev, Pv),
        top: Gv(vv.y + Sv * ev, Pv)
      }
    }

    function Yv(vv) {
      return vv.arm ? {
        "data-arm": vv.arm,
        "data-x": vv.x,
        "data-y": vv.y
      } : {}
    }

    function nv(vv) {
      let {
        settings: zv,
        inPreview: Pv,
        inEditor: hv,
        pressed: pv = !1,
        spread: Nv,
        spreadRef: lv
      } = vv;
      const Tv = (0, ev.useRef)(null),
        {
          box: av,
          dpr: sv
        } = function(vv) {
          const [zv, Pv] = (0, ev.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ev.useLayoutEffect)((() => {
            const zv = vv.current;
            if (!zv) return;
            const hv = () => {
              const vv = zv.getBoundingClientRect(),
                hv = window.devicePixelRatio || 1;
              Pv((zv => zv.dpr === hv && zv.box.left === vv.left && zv.box.top === vv.top && zv.box.width === vv.width && zv.box.height === vv.height ? zv : {
                box: {
                  left: vv.left,
                  top: vv.top,
                  width: vv.width,
                  height: vv.height
                },
                dpr: hv
              }))
            };
            hv();
            const Sv = new ResizeObserver(hv);
            return Sv.observe(zv), window.addEventListener("resize", hv), window.addEventListener("scroll", hv, !0), () => {
              Sv.disconnect(), window.removeEventListener("resize", hv), window.removeEventListener("scroll", hv, !0)
            }
          }), [vv]), zv
        }(Tv),
        Cv = (0, ev.useRef)(sv);
      Cv.current = sv;
      const iv = dv(zv, sv, pv && zv.growOnClick ? wv : 1),
        cv = function(vv, zv, Pv) {
          const hv = Math.round((vv.left + vv.width / 2) * Pv - zv / 2),
            Sv = Math.round((vv.top + vv.height / 2) * Pv - zv / 2);
          return {
            x: hv / Pv - vv.left,
            y: Sv / Pv - vv.top
          }
        }(av, iv.cell, sv),
        Gv = (0, gv.m)(zv.color),
        fv = (0, gv.m)(zv.outlineColor),
        nv = (0, ev.useRef)(0);
      (0, ev.useLayoutEffect)((() => {
        if (lv) return lv.current = vv => {
          var zv;
          nv.current = vv, null === (zv = Tv.current) || void 0 === zv || zv.querySelectorAll("[data-arm]").forEach((zv => {
            Object.assign(zv.style, Fv(function(vv) {
              return {
                x: Number(vv.dataset.x),
                y: Number(vv.dataset.y),
                arm: vv.dataset.arm
              }
            }(zv), vv, Cv.current))
          }))
        }, () => {
          lv.current = null
        }
      }), [lv]);
      const Ov = null !== Nv && void 0 !== Nv ? Nv : nv.current;
      return (0, Wv.jsx)("div", {
        ref: Tv,
        className: Sv()("CrosshairShapes", {
          CrosshairInPreview: Pv,
          CrosshairInEditor: hv || Pv,
          CrosshairSpreads: void 0 !== lv
        }),
        children: (0, Wv.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: cv.x,
            top: cv.y,
            opacity: zv.opacity / 100
          },
          children: (0, Wv.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [iv.ringOutline && (0, Wv.jsx)("div", {
              className: "CrosshairRing",
              style: jv(iv.ringOutline, sv, fv)
            }), iv.outlines.map(((vv, zv) => (0, Wv.jsx)("div", {
              className: "CrosshairPart",
              ...Yv(vv),
              style: mv(vv, Ov, sv, fv)
            }, `o${zv}`))), iv.ring && (0, Wv.jsx)("div", {
              className: "CrosshairRing",
              style: jv(iv.ring, sv, Gv)
            }), iv.fills.map(((vv, zv) => (0, Wv.jsx)("div", {
              className: "CrosshairPart",
              ...Yv(vv),
              style: mv(vv, Ov, sv, Gv)
            }, `f${zv}`)))]
          })
        })
      })
    }
  },
  8983: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      h: () => Cv,
      k: () => sv
    });
    var hv = Pv(8940);
    const Sv = "XH1-",
      ev = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      gv = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      pv = ["color", "outlineColor"],
      dv = 1 + 3 * pv.length + gv.length + 1,
      Nv = Math.ceil(8 * dv / Math.log2(62)),
      lv = Sv.length + Nv;

    function Tv(vv) {
      let zv = 90;
      for (const Pv of vv) zv = 31 * zv + Pv & 255;
      return zv
    }
    const Wv = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      wv = BigInt(Wv.length);

    function av(vv, zv) {
      let Pv = 0n;
      for (const Sv of vv) {
        const vv = Wv.indexOf(Sv);
        if (vv < 0) return null;
        Pv = Pv * wv + BigInt(vv)
      }
      if (Pv >> BigInt(8 * zv) !== 0n) return null;
      const hv = [];
      for (let Sv = 0; Sv < zv; Sv++) hv.unshift(Number(0xffn & Pv)), Pv >>= 8n;
      return hv
    }

    function sv(vv) {
      let zv = "shapes" === vv.style ? 1 : 0;
      ev.forEach(((Pv, hv) => {
        vv[Pv] && (zv |= 1 << hv + 1)
      }));
      const Pv = [zv];
      for (const Sv of pv) {
        const zv = (0, hv.i)(Sv, vv[Sv]);
        Pv.push(zv >> 16 & 255, zv >> 8 & 255, 255 & zv)
      }
      for (const Sv of gv) {
        const {
          min: zv,
          step: ev
        } = hv.e[Sv];
        Pv.push(Math.round(((0, hv.i)(Sv, vv[Sv]) - zv) / ev))
      }
      return Pv.push(Tv(Pv)), Sv + function(vv, zv) {
        let Pv = 0n;
        for (const Sv of vv) Pv = Pv << 8n | BigInt(Sv);
        let hv = "";
        for (let Sv = 0; Sv < zv; Sv++) hv = Wv[Number(Pv % wv)] + hv, Pv /= wv;
        return hv
      }(Pv, Nv)
    }

    function Cv(vv) {
      for (const zv of vv.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Nv}})`, "gi"))) {
        const vv = iv(av(zv[1], dv));
        if (vv) return vv
      }
      return null
    }

    function iv(vv) {
      if (!vv || vv.length !== dv || Tv(vv.slice(0, -1)) !== vv[vv.length - 1]) return null;
      const zv = vv[0],
        Pv = {
          ...hv.f,
          style: 1 & zv ? "shapes" : "classic"
        };
      ev.forEach(((vv, hv) => {
        Pv[vv] = 0 !== (zv & 1 << hv + 1)
      }));
      let Sv = 1;
      for (const hv of pv) Pv[hv] = vv[Sv] << 16 | vv[Sv + 1] << 8 | vv[Sv + 2], Sv += 3;
      for (const ev of gv) {
        const {
          min: zv,
          step: gv
        } = hv.e[ev];
        Pv[ev] = (0, hv.i)(ev, zv + vv[Sv] * gv), Sv++
      }
      return Pv
    }
  },
  8940: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      f: () => Sv,
      i: () => ev,
      m: () => Nv,
      p: () => dv,
      t: () => lv,
      v: () => pv,
      x: () => gv
    });
    const hv = {
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
      Sv = Object.freeze({
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

    function ev(vv, zv) {
      var Pv;
      const {
        min: ev,
        max: gv,
        step: pv
      } = hv[vv];
      if (!Number.isFinite(zv)) return Sv[vv];
      const dv = (null !== (Pv = String(pv).split(".")[1]) && void 0 !== Pv ? Pv : "").length,
        Nv = Number((Math.round(zv / pv) * pv).toFixed(dv));
      return Math.min(gv, Math.max(ev, Nv))
    }

    function gv(vv, zv, Pv) {
      const hv = "number" === typeof Pv ? ev(zv, Pv) : Pv;
      return {
        ...vv,
        [zv]: hv
      }
    }

    function pv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Sv).every((hv => Pv.includes(hv) || vv[hv] === zv[hv]))
    }

    function dv(vv) {
      return pv(vv, Sv)
    }

    function Nv(vv) {
      return `#${vv.toString(16).padStart(6,"0")}`
    }

    function lv(vv) {
      const zv = /^#?([0-9a-f]{6})$/i.exec(vv.trim());
      return zv ? parseInt(zv[1], 16) : null
    }
  },
  8987: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Tv,
      f: () => Wv
    });
    var hv = Pv(52),
      Sv = Pv(39),
      ev = Pv(8983),
      gv = Pv(8940);
    const pv = "crosshairCode";
    let dv = null;
    const Nv = new Set;

    function lv() {
      if (null === dv) {
        var vv;
        const zv = Sv.h.getItem(pv);
        dv = null !== (vv = "string" === typeof zv ? (0, ev.h)(zv) : null) && void 0 !== vv ? vv : gv.f
      }
      return dv
    }

    function Tv(vv) {
      dv = vv, (0, gv.p)(vv) ? Sv.h.removeItem(pv) : Sv.h.setItem(pv, (0, ev.k)(vv));
      for (const zv of Nv) zv()
    }

    function Wv() {
      const [vv, zv] = (0, hv.useState)(lv);
      return (0, hv.useEffect)((() => {
        const vv = () => {
          zv(lv())
        };
        return vv(), Pv = vv, Nv.add(Pv), () => {
          Nv.delete(Pv)
        };
        var Pv
      }), []), vv
    }
  },
  36284: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      e: () => dv,
      g: () => gv
    });
    var hv = Pv(626),
      Sv = Pv(2599);

    function ev(vv) {
      return vv === (0, Sv.g)().W8 ? (0, Sv.g)().sV : vv
    }

    function gv(vv) {
      return !(0, hv.N)(vv) && ev(vv) === (0, Sv.g)().sV
    }
    const pv = "gravity";

    function dv() {
      return (0, Sv.g)().physics[pv][1]
    }
  },
  36269: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Fv
    });
    var hv = Pv(36271),
      Sv = Pv(185),
      ev = Pv(4603),
      gv = Pv(36279),
      pv = Pv(35980),
      dv = Pv(36314),
      Nv = Pv(36284),
      lv = Pv(327),
      Tv = Pv.n(lv),
      Wv = Pv(1184),
      wv = Pv(2599),
      av = Pv(36310),
      sv = Pv(26),
      Cv = Pv(22),
      iv = Pv(36290),
      cv = Pv(36292),
      Gv = Pv(36299);
    const mv = new Set(["note"]);
    const jv = {
      stop: () => jv,
      fade: () => jv,
      rate: () => jv,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => jv,
      setPannerAttr: () => jv,
      setPosition: () => jv
    };
    class fv {
      constructor(vv) {
        let zv, {
          src: Pv,
          volumeScalar: Sv,
          isSoundSprite: gv
        } = vv;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, gv ? (zv = (0, hv.f)(Pv), this._spriteTrackSrc = zv) : zv = {
          src: Wv.clientSideServerUrls.staticUrl + Pv
        }, this._volumeMultiplier = new dv.j, this._volumeMultiplier.setMultiplierType("persistentScalar", Sv), this._howl = (0, pv.countDecodesAs)(new ev.Howl({
          ...zv,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let vv, zv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          Pv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (zv) {
          var hv;
          if (null === (hv = this._spriteTrackSrc) || void 0 === hv || !hv.sprite[zv]) throw new Error("No such sprite in your spritetrack");
          vv = this._howl.play(zv)
        } else vv = this._howl.play();
        Pv && this._howl.loop(!0, vv);
        let Sv = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), vv);
        const ev = {
          stop: () => {
            var zv;
            return null === (zv = this.liveHowl()) || void 0 === zv || zv.stop(vv), ev
          },
          fade: (zv, Pv, hv) => {
            var Sv;
            return null === (Sv = this.liveHowl()) || void 0 === Sv || Sv.fade(zv, Pv, hv, vv), ev
          },
          rate: zv => {
            var Pv;
            return null === (Pv = this.liveHowl()) || void 0 === Pv || Pv.rate(zv, vv), ev
          },
          stopsAtOnce: () => this._howl.playing(vv) && !this._howl._playLock,
          isAlive: () => {
            const zv = this._howl._soundById(vv);
            return !this._loadFailed && !!zv && !zv._ended
          },
          getDurationMs: () => this._howl._soundById(vv) ? 1e3 * this._howl.duration(vv) / this._howl.rate(vv) : 0,
          getVolume: () => Sv * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Sv,
          setRelativeVolume: zv => {
            var Pv;
            if (zv > 1) throw new Error("Volume should be <= 1");
            return Sv = Cv.c.get("soundOnFromAd") ? zv : 0, null === (Pv = this.liveHowl()) || void 0 === Pv || Pv.volume(Math.min(1, Sv * this._volumeMultiplier.getTotalMultipliedVal()), vv), ev
          },
          setPannerAttr: zv => {
            let {
              coneInnerAngle: Pv,
              coneOuterAngle: hv = 360,
              coneOuterGain: Sv,
              distanceModel: gv,
              maxDistance: pv,
              panningModel: dv,
              refDistance: Nv,
              rolloffFactor: lv
            } = zv;
            return this._setPannerAttr({
              id: vv,
              coneInnerAngle: Pv,
              coneOuterAngle: hv,
              coneOuterGain: Sv,
              distanceModel: gv,
              maxDistance: pv,
              panningModel: dv,
              refDistance: Nv,
              rolloffFactor: lv
            }), ev
          },
          setPosition: zv => {
            var Pv;
            return null === (Pv = this.liveHowl()) || void 0 === Pv || Pv.pos(zv[2], zv[1], zv[0], vv), ev
          }
        };
        return ev
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, gv.b)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(vv) {
        this._volumeMultiplier.setMultiplierType("globalVolume", vv), this._howl.volume(vv)
      }
      _setPannerAttr(vv) {
        let {
          id: zv,
          coneInnerAngle: Pv = 360,
          coneOuterAngle: hv = 360,
          coneOuterGain: Sv = 0,
          distanceModel: ev = "inverse",
          maxDistance: gv = 1e3,
          panningModel: pv = "HRTF",
          refDistance: dv = av.e,
          rolloffFactor: Nv = 1
        } = vv;
        const lv = this.liveHowl();
        if (null === lv) return;
        lv.pannerAttr({
          coneOuterAngle: hv
        }, zv);
        const Tv = {
          coneInnerAngle: Pv,
          coneOuterAngle: hv,
          coneOuterGain: Sv,
          distanceModel: ev,
          maxDistance: gv,
          panningModel: pv,
          refDistance: dv,
          rolloffFactor: Nv
        };
        lv.pannerAttr(Tv, zv)
      }
    }
    const Fv = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new iv.d, sv.j.subscribe("appManagerUpdated|soundVolume", (vv => {
          const zv = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const Pv of zv) Pv.setGlobalVolume(vv)
        }))
      }
      play(vv, zv) {
        var Pv;
        let ev, gv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Pv = (0, wv.g)()) || void 0 === Pv ? void 0 : Pv.sV,
          pv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : av.d,
          dv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : av.e,
          lv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Wv;
        (0, wv.g)() ? ev = !!Array.isArray(gv) || (0, Nv.b)(gv) !== (null === (Wv = (0, wv.g)()) || void 0 === Wv ? void 0 : Wv.sV): ev = !1;
        const sv = (0, hv.i)(vv),
          Cv = this.loadSheet(ev ? this.spatialSheets : this.stereoSheets, sv);
        if (!ev) {
          const Pv = Cv.play(vv, lv);
          return Pv.setRelativeVolume(zv), Pv
        }
        const cv = (0, wv.g)(),
          Gv = Array.isArray(gv) ? gv : cv.Rm.yG(gv),
          fv = cv.Rm.yG(cv.sV);
        if (!Gv || Tv().sqrDist(Gv, fv) > pv * pv) return jv;
        let Fv;
        if (!lv) {
          if (!this.spatialVoices.admit({
              group: mv.has(sv) ? null : (0, iv.k)(vv),
              loudness: (0, iv.g)(zv, Tv().Mg(Gv, fv), dv),
              startMs: performance.now(),
              getDurationMs: () => {
                var vv, zv;
                return null !== (vv = null === (zv = Fv) || void 0 === zv ? void 0 : zv.getDurationMs()) && void 0 !== vv ? vv : 0
              },
              isAlive: () => {
                var vv, zv;
                return null !== (vv = null === (zv = Fv) || void 0 === zv ? void 0 : zv.isAlive()) && void 0 !== vv && vv
              },
              canStop: () => {
                var vv, zv;
                return null !== (vv = null === (zv = Fv) || void 0 === zv ? void 0 : zv.stopsAtOnce()) && void 0 !== vv && vv
              },
              stop: () => {
                var vv;
                null === (vv = Fv) || void 0 === vv || vv.stop()
              }
            })) return jv
        }
        return Fv = Cv.play(vv, lv), Fv.setRelativeVolume(zv), Fv.setPannerAttr({
          refDistance: dv
        }), Fv.setPosition([Gv[0], Gv[1] + Sv.f.lG * Sv.f.playerEyeToHeightRatio, Gv[2]]), Fv
      }
      preload(vv) {
        this.loadSheet(this.stereoSheets, (0, hv.i)(vv))
      }
      loadSheet(vv, zv) {
        let Pv = vv[zv];
        return Pv || ((0, Gv.d)(zv), Pv = new fv({
          src: zv,
          isSoundSprite: !0,
          volumeScalar: 1
        }), Pv.setGlobalVolume(Cv.c.get("soundVolume")), vv[zv] = Pv), Pv
      }
      freeSheetsAfterGame() {
        for (const vv of [this.stereoSheets, this.spatialSheets])
          for (const [zv, Pv] of Object.entries(vv)) !cv.b.has(zv) && Pv.loaded() && (Pv.unloadOnceIdle(), delete vv[zv])
      }
    }
  },
  36357: (vv, zv, Pv) => {
    function hv(vv, zv) {
      var Pv, hv, Sv, ev, gv, pv, dv, Nv;
      return vv.name === zv.name && ((null === (Pv = vv.attributes) || void 0 === Pv || null === (hv = Pv.customAttributes) || void 0 === hv ? void 0 : hv.stackKey) === (null === (Sv = zv.attributes) || void 0 === Sv || null === (ev = Sv.customAttributes) || void 0 === ev ? void 0 : ev.stackKey) && (!0 !== (null === (gv = vv.attributes) || void 0 === gv || null === (pv = gv.customAttributes) || void 0 === pv ? void 0 : pv.unstackable) && !0 !== (null === (dv = zv.attributes) || void 0 === dv || null === (Nv = dv.customAttributes) || void 0 === Nv ? void 0 : Nv.unstackable)))
    }
    Pv.d(zv, {
      c: () => hv
    })
  },
  36443: (vv, zv, Pv) => {
    function hv(vv) {
      return vv.includes("Leaf Bed")
    }

    function Sv(vv) {
      return / Bed(?: Head)?(?:\||$)/.test(vv) && !hv(vv)
    }

    function ev(vv) {
      return vv.includes(" Strongbed")
    }

    function gv(vv) {
      return hv(vv) || Sv(vv) || ev(vv)
    }
    Pv.d(zv, {
      e: () => gv,
      h: () => hv,
      k: () => ev,
      n: () => Sv
    })
  },
  36434: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Nv
    });
    var hv = Pv(36443),
      Sv = Pv(9101);
    const ev = [],
      gv = [],
      pv = [],
      dv = [];
    for (const lv of Object.keys(Sv.k))(0, hv.h)(lv) ? ev.push(lv) : (0, hv.n)(lv) && gv.push(lv), (0, hv.k)(lv) && pv.push(lv), (lv.includes(" Bed Head") || lv.includes(" Strongbed Head")) && dv.push(lv);
    const Nv = {
      leafBeds: ev,
      woolBeds: gv,
      strongBeds: pv,
      beds: [...ev, ...gv, ...pv],
      bedHeads: dv,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6192: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      h: () => Sv,
      l: () => dv,
      n: () => ev,
      p: () => Nv,
      s: () => hv,
      u: () => pv
    });
    let hv = function(vv) {
        return vv[vv.DEFAULT = 0] = "DEFAULT", vv[vv.BOAT = 1] = "BOAT", vv[vv.GLIDER = 2] = "GLIDER", vv[vv.BALLOON = 3] = "BALLOON", vv[vv.SLEEPING = 4] = "SLEEPING", vv[vv.RIDING_MOB = 5] = "RIDING_MOB", vv[vv.CAR = 6] = "CAR", vv[vv.HOVERCRAFT = 7] = "HOVERCRAFT", vv
      }({}),
      Sv = function(vv) {
        return vv[vv.WOOD = 0] = "WOOD", vv[vv.OBSIDIAN = 1] = "OBSIDIAN", vv[vv.SPEED = 2] = "SPEED", vv
      }({}),
      ev = function(vv) {
        return vv[vv.WOOD = 0] = "WOOD", vv[vv.IRON = 1] = "IRON", vv[vv.GOLD = 2] = "GOLD", vv[vv.DIAMOND = 3] = "DIAMOND", vv
      }({}),
      gv = function(vv) {
        return vv[vv.YELLOW = 0] = "YELLOW", vv[vv.WHITE = 1] = "WHITE", vv[vv.RED = 2] = "RED", vv[vv.PURPLE = 3] = "PURPLE", vv[vv.PINK = 4] = "PINK", vv[vv.ORANGE = 5] = "ORANGE", vv[vv.MAGENTA = 6] = "MAGENTA", vv[vv.LIME = 7] = "LIME", vv[vv.LIGHT_GRAY = 8] = "LIGHT_GRAY", vv[vv.LIGHT_BLUE = 9] = "LIGHT_BLUE", vv[vv.GREEN = 10] = "GREEN", vv[vv.GRAY = 11] = "GRAY", vv[vv.CYAN = 12] = "CYAN", vv[vv.BROWN = 13] = "BROWN", vv[vv.BLUE = 14] = "BLUE", vv[vv.BLACK = 15] = "BLACK", vv
      }({}),
      pv = function(vv) {
        return vv[vv.ROTATION_1 = 0] = "ROTATION_1", vv[vv.ROTATION_2 = 1] = "ROTATION_2", vv[vv.ROTATION_3 = 2] = "ROTATION_3", vv[vv.ROTATION_4 = 3] = "ROTATION_4", vv
      }({}),
      dv = function(vv) {
        return vv[vv.KART = 0] = "KART", vv[vv.OFF_ROADER = 1] = "OFF_ROADER", vv[vv.CAR = 2] = "CAR", vv[vv.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", vv[vv.ARMORED_CAR = 4] = "ARMORED_CAR", vv[vv.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", vv[vv.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", vv[vv.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", vv
      }({});
    hv.DEFAULT, hv.BOAT, Sv.SPEED, hv.GLIDER, ev.DIAMOND, hv.BALLOON, gv.BLACK, hv.SLEEPING, pv.ROTATION_4, hv.RIDING_MOB, hv.CAR, dv.MOONSTONE_MINING_DRILL, hv.HOVERCRAFT;
    let Nv = function(vv) {
      return vv[vv.NORMAL = 0] = "NORMAL", vv[vv.GLIDING = 1] = "GLIDING", vv[vv.FLOATING = 2] = "FLOATING", vv
    }({})
  },
  8975: () => {}
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);