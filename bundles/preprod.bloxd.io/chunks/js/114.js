export const id = 114;
export const ids = [114];
export const modules = {
  36669: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Vq,
      f: () => yq
    });
    gq(9251);
    var Yq = gq(57),
      lq = gq(1416),
      Oq = gq(1904),
      mq = gq(1942),
      xq = gq(24),
      Aq = gq(2383),
      cq = gq(36674),
      uq = gq(36681),
      Bq = gq(9207),
      Wq = gq(9246),
      Nq = gq(9263),
      aq = gq(1070);
    const Vq = (0, Yq.memo)((function() {
      var qq;
      const {
        isTouchScreen: Eq,
        clientEscMenuOptions: gq,
        scriptedCameraFacing: Oq,
        crosshairShownOverride: Vq,
        crosshairGameView: jq
      } = (0, xq.j)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Hq = (0, Aq.h)("gunshotOrigin"), oq = (0, Yq.useRef)(null), Pq = (0, Yq.useRef)(!1), [Qq, tq] = (0, Yq.useState)(dq);
      (0, lq.f)("cameraZoomSet", tq), (0, Yq.useEffect)((() => {
        tq(dq())
      }), []);
      const rq = (0, mq.g)("heldItemAim"),
        hq = rq.gun,
        nq = (0, Nq.f)(),
        bq = (0, Yq.useRef)(nq);
      bq.current = nq;
      const [iq, Zq] = (0, Yq.useState)(!1);
      (0, Yq.useEffect)((() => (0, uq.h)("crosshairAccuracy", yq)), []), (0, lq.f)("mouseState", (qq => {
        let {
          isDown: Eq
        } = qq;
        Pq.current = Eq, oq.current && (oq.current.style.transform = (0, Wq.g)(Eq, bq.current.growOnClick)), "shapes" === bq.current.style && Zq(Eq)
      }));
      const fq = (0, Bq.d)(Eq, gq.touchActionButtons);
      return (null !== (qq = (0, cq.b)(jq, Vq)) && void 0 !== qq ? qq : (0, cq.j)(rq, Qq > 1, fq, Hq)) ? "movement" === Oq || "cursor" === Oq ? null : (0, aq.jsxs)(aq.Fragment, {
        children: [hq && (0, aq.jsx)(vq, {
          custom: nq.forGuns && "shapes" === nq.style ? nq : null,
          touch: Eq
        }), !hq && (0, aq.jsx)(Wq.c, {
          settings: nq,
          touch: Eq,
          pressRef: oq,
          pressed: "shapes" === nq.style ? iq : Pq.current
        })]
      }) : null
    }));

    function dq() {
      return Oq.gameBridge.lookup("cameraZoom", null)
    }
    const jq = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Hq = {
        current: null
      },
      oq = {
        current: null
      };
    let Pq = 0,
      Qq = 0;

    function yq(qq) {
      Qq = qq, jq[0].current || Hq.current || oq.current ? rq(qq) : Pq = qq
    }

    function tq(qq) {
      return ((0, cq.f)(qq) - (0, cq.f)(0)) * window.innerHeight / 100
    }

    function rq(qq) {
      var Eq;
      if (null === (Eq = oq.current) || void 0 === Eq || Eq.call(oq, tq(qq)), jq[0].current) {
        const Eq = `${(0,cq.f)(qq)}vh`;
        jq[0].current.style.transform = `translateX(calc(0px - ${Eq}))`, jq[1].current.style.transform = `translateX(calc(0px + ${Eq}))`, jq[2].current.style.transform = `translateY(calc(0px - ${Eq}))`, jq[3].current.style.transform = `translateY(calc(0px + ${Eq}))`
      }
      Hq.current && (Hq.current.style.filter = `blur(${Math.round(qq/10)}px)`)
    }

    function vq(qq) {
      let {
        custom: Eq,
        touch: gq
      } = qq;
      const Oq = (0, lq.h)("aimingOverlay", "none"),
        mq = "1.2vh",
        xq = "0.3vh";
      (0, Yq.useEffect)((() => {
        Pq && rq(Pq)
      }), []);
      const Aq = (0, Yq.useRef)(null !== Eq);
      return (0, Yq.useLayoutEffect)((() => {
        var qq;
        Eq ? null === (qq = oq.current) || void 0 === qq || qq.call(oq, tq(Qq)) : Aq.current && rq(Qq);
        Aq.current = null !== Eq
      }), [Eq]), (0, aq.jsxs)(aq.Fragment, {
        children: ["sniper" === Oq && (0, aq.jsxs)("div", {
          ref: Hq,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, aq.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, aq.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, aq.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, aq.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, aq.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Oq ? 0 : 1
          },
          children: [Eq && (0, aq.jsx)(Wq.c, {
            settings: Eq,
            touch: gq,
            spreadRef: oq
          }), !Eq && (0, aq.jsxs)(aq.Fragment, {
            children: [(0, aq.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: mq,
                height: xq,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: jq[0]
            }), (0, aq.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: mq,
                height: xq,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: jq[1]
            }), (0, aq.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: xq,
                height: mq,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: jq[2]
            }), (0, aq.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: xq,
                height: mq,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: jq[3]
            })]
          })]
        })]
      })
    }
  },
  9246: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Vq,
      g: () => aq
    });
    gq(9251);
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(57),
      mq = gq(9216);

    function xq(qq, Eq) {
      return Math.max(1, Math.round(qq * Eq))
    }

    function Aq(qq, Eq) {
      const gq = Eq * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Yq = function(qq, Eq) {
          if (qq.lines) return xq(qq.lineThickness, Eq) % 2;
          if (qq.dot) return xq(qq.dotSize, Eq) % 2;
          return cq(qq, Eq) % 2
        }(qq, Eq),
        lq = uq(qq.lineThickness * gq, Yq),
        Oq = xq(qq.lineLength, gq),
        mq = Math.round(qq.gap * gq),
        Aq = qq.outline > 0 ? xq(qq.outline, gq) : 0,
        Wq = [];
      if (qq.lines && (Wq.push({
          x: lq + mq,
          y: 0,
          w: Oq,
          h: lq,
          arm: "right"
        }), Wq.push({
          x: -mq - Oq,
          y: 0,
          w: Oq,
          h: lq,
          arm: "left"
        }), Wq.push({
          x: 0,
          y: lq + mq,
          w: lq,
          h: Oq,
          arm: "down"
        }), qq.tStyle || Wq.push({
          x: 0,
          y: -mq - Oq,
          w: lq,
          h: Oq,
          arm: "up"
        }), 0 === mq && Wq.push({
          x: 0,
          y: 0,
          w: lq,
          h: lq
        })), qq.dot) {
        const Eq = uq(qq.dotSize * gq, Yq),
          Oq = qq.lines && 0 === mq && qq.dotSize > qq.lineThickness ? Math.max(Eq, lq + 2) : Eq,
          xq = (lq - Oq) / 2;
        Wq.push({
          x: xq,
          y: xq,
          w: Oq,
          h: Oq
        })
      }
      const Nq = Wq.map((qq => ({
        ...qq,
        x: qq.x - Aq,
        y: qq.y - Aq,
        w: qq.w + 2 * Aq,
        h: qq.h + 2 * Aq
      })));
      let aq = null,
        Vq = null;
      if (qq.circle) {
        const Eq = xq(qq.circleThickness, gq),
          Oq = function(qq, Eq) {
            return qq + (qq % 2 === Eq ? 0 : 1)
          }(cq(qq, gq), Yq),
          mq = (lq - Oq) / 2;
        aq = Bq(mq, Oq, Eq), Aq > 0 && (Vq = Bq(mq - Aq, Oq + 2 * Aq, Eq + 2 * Aq))
      }
      return {
        cell: lq,
        fills: Wq,
        outlines: Aq > 0 ? Nq : [],
        ring: aq,
        ringOutline: Vq
      }
    }

    function cq(qq, Eq) {
      return Math.round(qq.circleRadius * Eq * 2 + xq(qq.circleThickness, Eq))
    }

    function uq(qq, Eq) {
      return Math.max(2 - Eq, 2 * Math.round((qq - Eq) / 2) + Eq)
    }

    function Bq(qq, Eq, gq) {
      const Yq = 2 * gq >= Eq - 1;
      return {
        x: qq,
        y: qq,
        size: Eq,
        border: Math.min(gq, Math.floor(Eq / 2)),
        filled: Yq
      }
    }
    var Wq = gq(1070);
    const Nq = 1.4;

    function aq(qq, Eq) {
      return qq && Eq ? `scale(${Nq})` : "scale(1)"
    }

    function Vq(qq) {
      return "classic" === qq.settings.style ? (0, Wq.jsx)(Hq, {
        ...qq
      }) : (0, Wq.jsx)(vq, {
        ...qq
      })
    }
    const dq = .125;

    function jq(qq, Eq) {
      const gq = {};
      if (qq.color !== mq.f.color && (gq.color = (0, mq.k)(qq.color)), qq.opacity !== mq.f.opacity && (gq.opacity = qq.opacity / 100), qq.outline !== mq.f.outline || qq.outlineColor !== mq.f.outlineColor) {
        const Eq = qq.outline,
          Yq = (0, mq.k)(qq.outlineColor);
        gq.textShadow = Eq > 0 ? `-${Eq}px 0 ${Yq}, 0 ${Eq}px ${Yq}, ${Eq}px 0 ${Yq}, 0 -${Eq}px ${Yq}` : "none"
      }
      if (qq.size !== mq.f.size) {
        const Yq = qq.size / 100;
        gq.fontSize = Eq ? `calc(max(1.3rem, 18px) * ${Yq})` : `calc(1.3rem * ${Yq})`, gq.marginTop = `-${dq}em`, gq.transformOrigin = `50% calc(50% + ${dq}em)`
      }
      return gq
    }

    function Hq(qq) {
      let {
        settings: Eq,
        touch: gq,
        inPreview: Yq,
        inEditor: Oq,
        pressed: mq = !1,
        pressRef: xq
      } = qq;
      return (0, Wq.jsx)("div", {
        className: lq()("Crosshair", {
          Touch: gq,
          CrosshairInPreview: Yq,
          CrosshairInEditor: Oq || Yq
        }),
        ref: xq,
        style: {
          transform: aq(mq, Eq.growOnClick),
          ...jq(Eq, gq)
        },
        children: "+"
      })
    }

    function oq(qq, Eq) {
      return qq / Eq + "px"
    }

    function Pq(qq, Eq, gq, Yq) {
      return {
        ...tq(qq, Eq, gq),
        width: oq(qq.w, gq),
        height: oq(qq.h, gq),
        background: Yq
      }
    }

    function Qq(qq, Eq, gq) {
      return {
        left: oq(qq.x, Eq),
        top: oq(qq.y, Eq),
        width: oq(qq.size, Eq),
        height: oq(qq.size, Eq),
        borderWidth: oq(qq.border, Eq),
        borderColor: gq,
        background: qq.filled ? gq : void 0
      }
    }
    const yq = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function tq(qq, Eq, gq) {
      const [Yq, lq] = qq.arm ? yq[qq.arm] : [0, 0], Oq = Math.round(Eq * gq);
      return {
        left: oq(qq.x + Yq * Oq, gq),
        top: oq(qq.y + lq * Oq, gq)
      }
    }

    function rq(qq) {
      return qq.arm ? {
        "data-arm": qq.arm,
        "data-x": qq.x,
        "data-y": qq.y
      } : {}
    }

    function vq(qq) {
      let {
        settings: Eq,
        inPreview: gq,
        inEditor: Yq,
        pressed: xq = !1,
        spread: cq,
        spreadRef: uq
      } = qq;
      const Bq = (0, Oq.useRef)(null),
        {
          box: aq,
          dpr: Vq
        } = function(qq) {
          const [Eq, gq] = (0, Oq.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Oq.useLayoutEffect)((() => {
            const Eq = qq.current;
            if (!Eq) return;
            const Yq = () => {
              const qq = Eq.getBoundingClientRect(),
                Yq = window.devicePixelRatio || 1;
              gq((Eq => Eq.dpr === Yq && Eq.box.left === qq.left && Eq.box.top === qq.top && Eq.box.width === qq.width && Eq.box.height === qq.height ? Eq : {
                box: {
                  left: qq.left,
                  top: qq.top,
                  width: qq.width,
                  height: qq.height
                },
                dpr: Yq
              }))
            };
            Yq();
            const lq = new ResizeObserver(Yq);
            return lq.observe(Eq), window.addEventListener("resize", Yq), window.addEventListener("scroll", Yq, !0), () => {
              lq.disconnect(), window.removeEventListener("resize", Yq), window.removeEventListener("scroll", Yq, !0)
            }
          }), [qq]), Eq
        }(Bq),
        dq = (0, Oq.useRef)(Vq);
      dq.current = Vq;
      const jq = Aq(Eq, Vq, xq && Eq.growOnClick ? Nq : 1),
        Hq = function(qq, Eq, gq) {
          const Yq = Math.round((qq.left + qq.width / 2) * gq - Eq / 2),
            lq = Math.round((qq.top + qq.height / 2) * gq - Eq / 2);
          return {
            x: Yq / gq - qq.left,
            y: lq / gq - qq.top
          }
        }(aq, jq.cell, Vq),
        oq = (0, mq.k)(Eq.color),
        yq = (0, mq.k)(Eq.outlineColor),
        vq = (0, Oq.useRef)(0);
      (0, Oq.useLayoutEffect)((() => {
        if (uq) return uq.current = qq => {
          var Eq;
          vq.current = qq, null === (Eq = Bq.current) || void 0 === Eq || Eq.querySelectorAll("[data-arm]").forEach((Eq => {
            Object.assign(Eq.style, tq(function(qq) {
              return {
                x: Number(qq.dataset.x),
                y: Number(qq.dataset.y),
                arm: qq.dataset.arm
              }
            }(Eq), qq, dq.current))
          }))
        }, () => {
          uq.current = null
        }
      }), [uq]);
      const hq = null !== cq && void 0 !== cq ? cq : vq.current;
      return (0, Wq.jsx)("div", {
        ref: Bq,
        className: lq()("CrosshairShapes", {
          CrosshairInPreview: gq,
          CrosshairInEditor: Yq || gq,
          CrosshairSpreads: void 0 !== uq
        }),
        children: (0, Wq.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Hq.x,
            top: Hq.y,
            opacity: Eq.opacity / 100
          },
          children: (0, Wq.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [jq.ringOutline && (0, Wq.jsx)("div", {
              className: "CrosshairRing",
              style: Qq(jq.ringOutline, Vq, yq)
            }), jq.outlines.map(((qq, Eq) => (0, Wq.jsx)("div", {
              className: "CrosshairPart",
              ...rq(qq),
              style: Pq(qq, hq, Vq, yq)
            }, `o${Eq}`))), jq.ring && (0, Wq.jsx)("div", {
              className: "CrosshairRing",
              style: Qq(jq.ring, Vq, oq)
            }), jq.fills.map(((qq, Eq) => (0, Wq.jsx)("div", {
              className: "CrosshairPart",
              ...rq(qq),
              style: Pq(qq, hq, Vq, oq)
            }, `f${Eq}`)))]
          })
        })
      })
    }
  },
  9254: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => uq,
      e: () => dq,
      i: () => Vq
    });
    var Yq = gq(9216);
    const lq = "XH1-",
      Oq = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      mq = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      xq = ["color", "outlineColor"],
      Aq = 1 + 3 * xq.length + mq.length + 1,
      cq = Math.ceil(8 * Aq / Math.log2(62)),
      uq = lq.length + cq;

    function Bq(qq) {
      let Eq = 90;
      for (const gq of qq) Eq = 31 * Eq + gq & 255;
      return Eq
    }
    const Wq = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Nq = BigInt(Wq.length);

    function aq(qq, Eq) {
      let gq = 0n;
      for (const lq of qq) {
        const qq = Wq.indexOf(lq);
        if (qq < 0) return null;
        gq = gq * Nq + BigInt(qq)
      }
      if (gq >> BigInt(8 * Eq) !== 0n) return null;
      const Yq = [];
      for (let lq = 0; lq < Eq; lq++) Yq.unshift(Number(0xffn & gq)), gq >>= 8n;
      return Yq
    }

    function Vq(qq) {
      let Eq = "shapes" === qq.style ? 1 : 0;
      Oq.forEach(((gq, Yq) => {
        qq[gq] && (Eq |= 1 << Yq + 1)
      }));
      const gq = [Eq];
      for (const lq of xq) {
        const Eq = (0, Yq.j)(lq, qq[lq]);
        gq.push(Eq >> 16 & 255, Eq >> 8 & 255, 255 & Eq)
      }
      for (const lq of mq) {
        const {
          min: Eq,
          step: Oq
        } = Yq.e[lq];
        gq.push(Math.round(((0, Yq.j)(lq, qq[lq]) - Eq) / Oq))
      }
      return gq.push(Bq(gq)), lq + function(qq, Eq) {
        let gq = 0n;
        for (const lq of qq) gq = gq << 8n | BigInt(lq);
        let Yq = "";
        for (let lq = 0; lq < Eq; lq++) Yq = Wq[Number(gq % Nq)] + Yq, gq /= Nq;
        return Yq
      }(gq, cq)
    }

    function dq(qq) {
      for (const Eq of qq.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${cq}})`, "gi"))) {
        const qq = jq(aq(Eq[1], Aq));
        if (qq) return qq
      }
      return null
    }

    function jq(qq) {
      if (!qq || qq.length !== Aq || Bq(qq.slice(0, -1)) !== qq[qq.length - 1]) return null;
      const Eq = qq[0],
        gq = {
          ...Yq.f,
          style: 1 & Eq ? "shapes" : "classic"
        };
      Oq.forEach(((qq, Yq) => {
        gq[qq] = 0 !== (Eq & 1 << Yq + 1)
      }));
      let lq = 1;
      for (const Yq of xq) gq[Yq] = qq[lq] << 16 | qq[lq + 1] << 8 | qq[lq + 2], lq += 3;
      for (const Oq of mq) {
        const {
          min: Eq,
          step: mq
        } = Yq.e[Oq];
        gq[Oq] = (0, Yq.j)(Oq, Eq + qq[lq] * mq), lq++
      }
      return gq
    }
  },
  9216: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      f: () => lq,
      j: () => Oq,
      k: () => cq,
      n: () => Aq,
      q: () => uq,
      u: () => xq,
      v: () => mq
    });
    const Yq = {
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
      lq = Object.freeze({
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

    function Oq(qq, Eq) {
      var gq;
      const {
        min: Oq,
        max: mq,
        step: xq
      } = Yq[qq];
      if (!Number.isFinite(Eq)) return lq[qq];
      const Aq = (null !== (gq = String(xq).split(".")[1]) && void 0 !== gq ? gq : "").length,
        cq = Number((Math.round(Eq / xq) * xq).toFixed(Aq));
      return Math.min(mq, Math.max(Oq, cq))
    }

    function mq(qq, Eq, gq) {
      const Yq = "number" === typeof gq ? Oq(Eq, gq) : gq;
      return {
        ...qq,
        [Eq]: Yq
      }
    }

    function xq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(lq).every((Yq => gq.includes(Yq) || qq[Yq] === Eq[Yq]))
    }

    function Aq(qq) {
      return xq(qq, lq)
    }

    function cq(qq) {
      return `#${qq.toString(16).padStart(6,"0")}`
    }

    function uq(qq) {
      const Eq = /^#?([0-9a-f]{6})$/i.exec(qq.trim());
      return Eq ? parseInt(Eq[1], 16) : null
    }
  },
  9263: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq,
      f: () => Wq
    });
    var Yq = gq(57),
      lq = gq(38),
      Oq = gq(9254),
      mq = gq(9216);
    const xq = "crosshairCode";
    let Aq = null;
    const cq = new Set;

    function uq() {
      if (null === Aq) {
        var qq;
        const Eq = lq.i.getItem(xq);
        Aq = null !== (qq = "string" === typeof Eq ? (0, Oq.e)(Eq) : null) && void 0 !== qq ? qq : mq.f
      }
      return Aq
    }

    function Bq(qq) {
      Aq = qq, (0, mq.n)(qq) ? lq.i.removeItem(xq) : lq.i.setItem(xq, (0, Oq.i)(qq));
      for (const Eq of cq) Eq()
    }

    function Wq() {
      const [qq, Eq] = (0, Yq.useState)(uq);
      return (0, Yq.useEffect)((() => {
        const qq = () => {
          Eq(uq())
        };
        return qq(), gq = qq, cq.add(gq), () => {
          cq.delete(gq)
        };
        var gq
      }), []), qq
    }
  },
  36808: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      f: () => Aq,
      j: () => mq
    });
    var Yq = gq(598),
      lq = gq(2668);

    function Oq(qq) {
      return qq === (0, lq.e)().AEq ? (0, lq.e)().oR : qq
    }

    function mq(qq) {
      return !(0, Yq.H)(qq) && Oq(qq) === (0, lq.e)().oR
    }
    const xq = "gravity";

    function Aq() {
      return (0, lq.e)().physics[xq][1]
    }
  },
  36789: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => tq
    });
    var Yq = gq(36796),
      lq = gq(190),
      Oq = gq(4684),
      mq = gq(36802),
      xq = gq(36493),
      Aq = gq(36841),
      cq = gq(36808),
      uq = gq(317),
      Bq = gq.n(uq),
      Wq = gq(1195),
      Nq = gq(2668),
      aq = gq(36832),
      Vq = gq(31),
      dq = gq(24),
      jq = gq(36813),
      Hq = gq(36815),
      oq = gq(36821);
    const Pq = new Set(["note"]);
    const Qq = {
      stop: () => Qq,
      fade: () => Qq,
      rate: () => Qq,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Qq,
      setPannerAttr: () => Qq,
      setPosition: () => Qq
    };
    class yq {
      constructor(qq) {
        let Eq, {
          src: gq,
          volumeScalar: lq,
          isSoundSprite: mq
        } = qq;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, mq ? (Eq = (0, Yq.g)(gq), this._spriteTrackSrc = Eq) : Eq = {
          src: Wq.clientSideServerUrls.staticUrl + gq
        }, this._volumeMultiplier = new Aq.g, this._volumeMultiplier.setMultiplierType("persistentScalar", lq), this._howl = (0, xq.countDecodesAs)(new Oq.Howl({
          ...Eq,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let qq, Eq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Eq) {
          var Yq;
          if (null === (Yq = this._spriteTrackSrc) || void 0 === Yq || !Yq.sprite[Eq]) throw new Error("No such sprite in your spritetrack");
          qq = this._howl.play(Eq)
        } else qq = this._howl.play();
        gq && this._howl.loop(!0, qq);
        let lq = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), qq);
        const Oq = {
          stop: () => {
            var Eq;
            return null === (Eq = this.liveHowl()) || void 0 === Eq || Eq.stop(qq), Oq
          },
          fade: (Eq, gq, Yq) => {
            var lq;
            return null === (lq = this.liveHowl()) || void 0 === lq || lq.fade(Eq, gq, Yq, qq), Oq
          },
          rate: Eq => {
            var gq;
            return null === (gq = this.liveHowl()) || void 0 === gq || gq.rate(Eq, qq), Oq
          },
          stopsAtOnce: () => this._howl.playing(qq) && !this._howl._playLock,
          isAlive: () => {
            const Eq = this._howl._soundById(qq);
            return !this._loadFailed && !!Eq && !Eq._ended
          },
          getDurationMs: () => this._howl._soundById(qq) ? 1e3 * this._howl.duration(qq) / this._howl.rate(qq) : 0,
          getVolume: () => lq * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => lq,
          setRelativeVolume: Eq => {
            var gq;
            if (Eq > 1) throw new Error("Volume should be <= 1");
            return lq = dq.b.get("soundOnFromAd") ? Eq : 0, null === (gq = this.liveHowl()) || void 0 === gq || gq.volume(Math.min(1, lq * this._volumeMultiplier.getTotalMultipliedVal()), qq), Oq
          },
          setPannerAttr: Eq => {
            let {
              coneInnerAngle: gq,
              coneOuterAngle: Yq = 360,
              coneOuterGain: lq,
              distanceModel: mq,
              maxDistance: xq,
              panningModel: Aq,
              refDistance: cq,
              rolloffFactor: uq
            } = Eq;
            return this._setPannerAttr({
              id: qq,
              coneInnerAngle: gq,
              coneOuterAngle: Yq,
              coneOuterGain: lq,
              distanceModel: mq,
              maxDistance: xq,
              panningModel: Aq,
              refDistance: cq,
              rolloffFactor: uq
            }), Oq
          },
          setPosition: Eq => {
            var gq;
            return null === (gq = this.liveHowl()) || void 0 === gq || gq.pos(Eq[2], Eq[1], Eq[0], qq), Oq
          }
        };
        return Oq
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, mq.d)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(qq) {
        this._volumeMultiplier.setMultiplierType("globalVolume", qq), this._howl.volume(qq)
      }
      _setPannerAttr(qq) {
        let {
          id: Eq,
          coneInnerAngle: gq = 360,
          coneOuterAngle: Yq = 360,
          coneOuterGain: lq = 0,
          distanceModel: Oq = "inverse",
          maxDistance: mq = 1e3,
          panningModel: xq = "HRTF",
          refDistance: Aq = aq.f,
          rolloffFactor: cq = 1
        } = qq;
        const uq = this.liveHowl();
        if (null === uq) return;
        uq.pannerAttr({
          coneOuterAngle: Yq
        }, Eq);
        const Bq = {
          coneInnerAngle: gq,
          coneOuterAngle: Yq,
          coneOuterGain: lq,
          distanceModel: Oq,
          maxDistance: mq,
          panningModel: xq,
          refDistance: Aq,
          rolloffFactor: cq
        };
        uq.pannerAttr(Bq, Eq)
      }
    }
    const tq = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new jq.c, Vq.i.subscribe("appManagerUpdated|soundVolume", (qq => {
          const Eq = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const gq of Eq) gq.setGlobalVolume(qq)
        }))
      }
      play(qq, Eq) {
        var gq;
        let Oq, mq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (gq = (0, Nq.e)()) || void 0 === gq ? void 0 : gq.oR,
          xq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : aq.c,
          Aq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : aq.f,
          uq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Wq;
        (0, Nq.e)() ? Oq = !!Array.isArray(mq) || (0, cq.b)(mq) !== (null === (Wq = (0, Nq.e)()) || void 0 === Wq ? void 0 : Wq.oR): Oq = !1;
        const Vq = (0, Yq.k)(qq),
          dq = this.loadSheet(Oq ? this.spatialSheets : this.stereoSheets, Vq);
        if (!Oq) {
          const gq = dq.play(qq, uq);
          return gq.setRelativeVolume(Eq), gq
        }
        const Hq = (0, Nq.e)(),
          oq = Array.isArray(mq) ? mq : Hq.Iy.Py(mq),
          yq = Hq.Iy.Py(Hq.oR);
        if (!oq || Bq().sqrDist(oq, yq) > xq * xq) return Qq;
        let tq;
        if (!uq) {
          if (!this.spatialVoices.admit({
              group: Pq.has(Vq) ? null : (0, jq.g)(qq),
              loudness: (0, jq.f)(Eq, Bq().KO(oq, yq), Aq),
              startMs: performance.now(),
              getDurationMs: () => {
                var qq, Eq;
                return null !== (qq = null === (Eq = tq) || void 0 === Eq ? void 0 : Eq.getDurationMs()) && void 0 !== qq ? qq : 0
              },
              isAlive: () => {
                var qq, Eq;
                return null !== (qq = null === (Eq = tq) || void 0 === Eq ? void 0 : Eq.isAlive()) && void 0 !== qq && qq
              },
              canStop: () => {
                var qq, Eq;
                return null !== (qq = null === (Eq = tq) || void 0 === Eq ? void 0 : Eq.stopsAtOnce()) && void 0 !== qq && qq
              },
              stop: () => {
                var qq;
                null === (qq = tq) || void 0 === qq || qq.stop()
              }
            })) return Qq
        }
        return tq = dq.play(qq, uq), tq.setRelativeVolume(Eq), tq.setPannerAttr({
          refDistance: Aq
        }), tq.setPosition([oq[0], oq[1] + lq.c.UH * lq.c.playerEyeToHeightRatio, oq[2]]), tq
      }
      preload(qq) {
        this.loadSheet(this.stereoSheets, (0, Yq.k)(qq))
      }
      loadSheet(qq, Eq) {
        let gq = qq[Eq];
        return gq || ((0, oq.c)(Eq), gq = new yq({
          src: Eq,
          isSoundSprite: !0,
          volumeScalar: 1
        }), gq.setGlobalVolume(dq.b.get("soundVolume")), qq[Eq] = gq), gq
      }
      freeSheetsAfterGame() {
        for (const qq of [this.stereoSheets, this.spatialSheets])
          for (const [Eq, gq] of Object.entries(qq)) !Hq.e.has(Eq) && gq.loaded() && (gq.unloadOnceIdle(), delete qq[Eq])
      }
    }
  },
  36892: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      var gq, Yq, lq, Oq, mq, xq, Aq, cq;
      return qq.name === Eq.name && ((null === (gq = qq.attributes) || void 0 === gq || null === (Yq = gq.customAttributes) || void 0 === Yq ? void 0 : Yq.stackKey) === (null === (lq = Eq.attributes) || void 0 === lq || null === (Oq = lq.customAttributes) || void 0 === Oq ? void 0 : Oq.stackKey) && (!0 !== (null === (mq = qq.attributes) || void 0 === mq || null === (xq = mq.customAttributes) || void 0 === xq ? void 0 : xq.unstackable) && !0 !== (null === (Aq = Eq.attributes) || void 0 === Aq || null === (cq = Aq.customAttributes) || void 0 === cq ? void 0 : cq.unstackable)))
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  36985: (qq, Eq, gq) => {
    function Yq(qq) {
      return qq.includes("Leaf Bed")
    }

    function lq(qq) {
      return / Bed(?: Head)?(?:\||$)/.test(qq) && !Yq(qq)
    }

    function Oq(qq) {
      return qq.includes(" Strongbed")
    }

    function mq(qq) {
      return Yq(qq) || lq(qq) || Oq(qq)
    }
    gq.d(Eq, {
      b: () => mq,
      c: () => Yq,
      d: () => Oq,
      f: () => lq
    })
  },
  36979: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq
    });
    var Yq = gq(36985),
      lq = gq(9379);
    const Oq = [],
      mq = [],
      xq = [],
      Aq = [];
    for (const uq of Object.keys(lq.o))(0, Yq.c)(uq) ? Oq.push(uq) : (0, Yq.f)(uq) && mq.push(uq), (0, Yq.d)(uq) && xq.push(uq), (uq.includes(" Bed Head") || uq.includes(" Strongbed Head")) && Aq.push(uq);
    const cq = {
      leafBeds: Oq,
      woolBeds: mq,
      strongBeds: xq,
      beds: [...Oq, ...mq, ...xq],
      bedHeads: Aq,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6348: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      i: () => lq,
      l: () => Aq,
      m: () => Oq,
      p: () => cq,
      t: () => Yq,
      w: () => xq
    });
    let Yq = function(qq) {
        return qq[qq.DEFAULT = 0] = "DEFAULT", qq[qq.BOAT = 1] = "BOAT", qq[qq.GLIDER = 2] = "GLIDER", qq[qq.BALLOON = 3] = "BALLOON", qq[qq.SLEEPING = 4] = "SLEEPING", qq[qq.RIDING_MOB = 5] = "RIDING_MOB", qq[qq.CAR = 6] = "CAR", qq[qq.HOVERCRAFT = 7] = "HOVERCRAFT", qq
      }({}),
      lq = function(qq) {
        return qq[qq.WOOD = 0] = "WOOD", qq[qq.OBSIDIAN = 1] = "OBSIDIAN", qq[qq.SPEED = 2] = "SPEED", qq
      }({}),
      Oq = function(qq) {
        return qq[qq.WOOD = 0] = "WOOD", qq[qq.IRON = 1] = "IRON", qq[qq.GOLD = 2] = "GOLD", qq[qq.DIAMOND = 3] = "DIAMOND", qq
      }({}),
      mq = function(qq) {
        return qq[qq.YELLOW = 0] = "YELLOW", qq[qq.WHITE = 1] = "WHITE", qq[qq.RED = 2] = "RED", qq[qq.PURPLE = 3] = "PURPLE", qq[qq.PINK = 4] = "PINK", qq[qq.ORANGE = 5] = "ORANGE", qq[qq.MAGENTA = 6] = "MAGENTA", qq[qq.LIME = 7] = "LIME", qq[qq.LIGHT_GRAY = 8] = "LIGHT_GRAY", qq[qq.LIGHT_BLUE = 9] = "LIGHT_BLUE", qq[qq.GREEN = 10] = "GREEN", qq[qq.GRAY = 11] = "GRAY", qq[qq.CYAN = 12] = "CYAN", qq[qq.BROWN = 13] = "BROWN", qq[qq.BLUE = 14] = "BLUE", qq[qq.BLACK = 15] = "BLACK", qq
      }({}),
      xq = function(qq) {
        return qq[qq.ROTATION_1 = 0] = "ROTATION_1", qq[qq.ROTATION_2 = 1] = "ROTATION_2", qq[qq.ROTATION_3 = 2] = "ROTATION_3", qq[qq.ROTATION_4 = 3] = "ROTATION_4", qq
      }({}),
      Aq = function(qq) {
        return qq[qq.KART = 0] = "KART", qq[qq.OFF_ROADER = 1] = "OFF_ROADER", qq[qq.CAR = 2] = "CAR", qq[qq.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", qq[qq.ARMORED_CAR = 4] = "ARMORED_CAR", qq[qq.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", qq[qq.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", qq[qq.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", qq
      }({});
    Yq.DEFAULT, Yq.BOAT, lq.SPEED, Yq.GLIDER, Oq.DIAMOND, Yq.BALLOON, mq.BLACK, Yq.SLEEPING, xq.ROTATION_4, Yq.RIDING_MOB, Yq.CAR, Aq.MOONSTONE_MINING_DRILL, Yq.HOVERCRAFT;
    let cq = function(qq) {
      return qq[qq.NORMAL = 0] = "NORMAL", qq[qq.GLIDING = 1] = "GLIDING", qq[qq.FLOATING = 2] = "FLOATING", qq
    }({})
  },
  9251: () => {}
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);