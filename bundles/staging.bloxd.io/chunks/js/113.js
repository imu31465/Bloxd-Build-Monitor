export const id = 113;
export const ids = [113];
export const modules = {
  36348: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => yk,
      e: () => Lk
    });
    Bk(8979);
    var Rk = Bk(61),
      tk = Bk(1387),
      ak = Bk(1847),
      Xk = Bk(1876),
      bk = Bk(22),
      wk = Bk(2320),
      dk = Bk(36355),
      sk = Bk(36359),
      Vk = Bk(8941),
      Jk = Bk(8974),
      Ak = Bk(8990),
      ek = Bk(1069);
    const yk = (0, Rk.memo)((function() {
      var kk;
      const {
        isTouchScreen: Fk,
        clientEscMenuOptions: Bk,
        scriptedCameraFacing: ak,
        crosshairShownOverride: yk,
        crosshairGameView: mk
      } = (0, bk.h)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Wk = (0, wk.j)("gunshotOrigin"), vk = (0, Rk.useRef)(null), ik = (0, Rk.useRef)(!1), [Yk, Ok] = (0, Rk.useState)(fk);
      (0, tk.f)("cameraZoomSet", Ok), (0, Rk.useEffect)((() => {
        Ok(fk())
      }), []);
      const Ek = (0, Xk.h)("heldItemAim"),
        Nk = Ek.gun,
        Hk = (0, Ak.g)(),
        uk = (0, Rk.useRef)(Hk);
      uk.current = Hk;
      const [Mk, gk] = (0, Rk.useState)(!1);
      (0, Rk.useEffect)((() => (0, sk.g)("crosshairAccuracy", Lk)), []), (0, tk.f)("mouseState", (kk => {
        let {
          isDown: Fk
        } = kk;
        ik.current = Fk, vk.current && (vk.current.style.transform = (0, Jk.e)(Fk, uk.current.growOnClick)), "shapes" === uk.current.style && gk(Fk)
      }));
      const Uk = (0, Vk.g)(Fk, Bk.touchActionButtons);
      return (null !== (kk = (0, dk.b)(mk, yk)) && void 0 !== kk ? kk : (0, dk.h)(Ek, Yk > 1, Uk, Wk)) ? "movement" === ak || "cursor" === ak ? null : (0, ek.jsxs)(ek.Fragment, {
        children: [Nk && (0, ek.jsx)(Sk, {
          custom: Hk.forGuns && "shapes" === Hk.style ? Hk : null,
          touch: Fk
        }), !Nk && (0, ek.jsx)(Jk.c, {
          settings: Hk,
          touch: Fk,
          pressRef: vk,
          pressed: "shapes" === Hk.style ? Mk : ik.current
        })]
      }) : null
    }));

    function fk() {
      return ak.gameBridge.lookup("cameraZoom", null)
    }
    const mk = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Wk = {
        current: null
      },
      vk = {
        current: null
      };
    let ik = 0,
      Yk = 0;

    function Lk(kk) {
      Yk = kk, mk[0].current || Wk.current || vk.current ? Ek(kk) : ik = kk
    }

    function Ok(kk) {
      return ((0, dk.e)(kk) - (0, dk.e)(0)) * window.innerHeight / 100
    }

    function Ek(kk) {
      var Fk;
      if (null === (Fk = vk.current) || void 0 === Fk || Fk.call(vk, Ok(kk)), mk[0].current) {
        const Fk = `${(0,dk.e)(kk)}vh`;
        mk[0].current.style.transform = `translateX(calc(0px - ${Fk}))`, mk[1].current.style.transform = `translateX(calc(0px + ${Fk}))`, mk[2].current.style.transform = `translateY(calc(0px - ${Fk}))`, mk[3].current.style.transform = `translateY(calc(0px + ${Fk}))`
      }
      Wk.current && (Wk.current.style.filter = `blur(${Math.round(kk/10)}px)`)
    }

    function Sk(kk) {
      let {
        custom: Fk,
        touch: Bk
      } = kk;
      const ak = (0, tk.g)("aimingOverlay", "none"),
        Xk = "1.2vh",
        bk = "0.3vh";
      (0, Rk.useEffect)((() => {
        ik && Ek(ik)
      }), []);
      const wk = (0, Rk.useRef)(null !== Fk);
      return (0, Rk.useLayoutEffect)((() => {
        var kk;
        Fk ? null === (kk = vk.current) || void 0 === kk || kk.call(vk, Ok(Yk)) : wk.current && Ek(Yk);
        wk.current = null !== Fk
      }), [Fk]), (0, ek.jsxs)(ek.Fragment, {
        children: ["sniper" === ak && (0, ek.jsxs)("div", {
          ref: Wk,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, ek.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, ek.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, ek.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, ek.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, ek.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === ak ? 0 : 1
          },
          children: [Fk && (0, ek.jsx)(Jk.c, {
            settings: Fk,
            touch: Bk,
            spreadRef: vk
          }), !Fk && (0, ek.jsxs)(ek.Fragment, {
            children: [(0, ek.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Xk,
                height: bk,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: mk[0]
            }), (0, ek.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Xk,
                height: bk,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: mk[1]
            }), (0, ek.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: bk,
                height: Xk,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: mk[2]
            }), (0, ek.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: bk,
                height: Xk,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: mk[3]
            })]
          })]
        })]
      })
    }
  },
  8974: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Jk,
      e: () => Vk
    });
    Bk(8979);
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(61),
      Xk = Bk(8949);

    function bk(kk, Fk) {
      return Math.max(1, Math.round(kk * Fk))
    }

    function wk(kk, Fk, Bk) {
      const Rk = 2 * Bk >= Fk - 1;
      return {
        x: kk,
        y: kk,
        size: Fk,
        border: Math.min(Bk, Math.floor(Fk / 2)),
        filled: Rk
      }
    }
    var dk = Bk(1069);
    const sk = 1.4;

    function Vk(kk, Fk) {
      return kk && Fk ? `scale(${sk})` : "scale(1)"
    }

    function Jk(kk) {
      return "classic" === kk.settings.style ? (0, dk.jsx)(yk, {
        ...kk
      }) : (0, dk.jsx)(Lk, {
        ...kk
      })
    }
    const Ak = .125;

    function ek(kk, Fk) {
      const Bk = {};
      if (kk.color !== Xk.f.color && (Bk.color = (0, Xk.j)(kk.color)), kk.opacity !== Xk.f.opacity && (Bk.opacity = kk.opacity / 100), kk.outline !== Xk.f.outline || kk.outlineColor !== Xk.f.outlineColor) {
        const Fk = kk.outline,
          Rk = (0, Xk.j)(kk.outlineColor);
        Bk.textShadow = Fk > 0 ? `-${Fk}px 0 ${Rk}, 0 ${Fk}px ${Rk}, ${Fk}px 0 ${Rk}, 0 -${Fk}px ${Rk}` : "none"
      }
      if (kk.size !== Xk.f.size) {
        const Rk = kk.size / 100;
        Bk.fontSize = Fk ? `calc(max(1.3rem, 18px) * ${Rk})` : `calc(1.3rem * ${Rk})`, Bk.marginTop = `-${Ak}em`, Bk.transformOrigin = `50% calc(50% + ${Ak}em)`
      }
      return Bk
    }

    function yk(kk) {
      let {
        settings: Fk,
        touch: Bk,
        inPreview: Rk,
        inEditor: ak,
        pressed: Xk = !1,
        pressRef: bk
      } = kk;
      return (0, dk.jsx)("div", {
        className: tk()("Crosshair", {
          Touch: Bk,
          CrosshairInPreview: Rk,
          CrosshairInEditor: ak || Rk
        }),
        ref: bk,
        style: {
          transform: Vk(Xk, Fk.growOnClick),
          ...ek(Fk, Bk)
        },
        children: "+"
      })
    }

    function fk(kk, Fk) {
      return kk / Fk + "px"
    }

    function mk(kk, Fk, Bk, Rk) {
      return {
        ...ik(kk, Fk, Bk),
        width: fk(kk.w, Bk),
        height: fk(kk.h, Bk),
        background: Rk
      }
    }

    function Wk(kk, Fk, Bk) {
      return {
        left: fk(kk.x, Fk),
        top: fk(kk.y, Fk),
        width: fk(kk.size, Fk),
        height: fk(kk.size, Fk),
        borderWidth: fk(kk.border, Fk),
        borderColor: Bk,
        background: kk.filled ? Bk : void 0
      }
    }
    const vk = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function ik(kk, Fk, Bk) {
      const [Rk, tk] = kk.arm ? vk[kk.arm] : [0, 0], ak = Math.round(Fk * Bk);
      return {
        left: fk(kk.x + Rk * ak, Bk),
        top: fk(kk.y + tk * ak, Bk)
      }
    }

    function Yk(kk) {
      return kk.arm ? {
        "data-arm": kk.arm,
        "data-x": kk.x,
        "data-y": kk.y
      } : {}
    }

    function Lk(kk) {
      let {
        settings: Fk,
        inPreview: Bk,
        inEditor: Rk,
        pressed: Vk = !1,
        spread: Jk,
        spreadRef: Ak
      } = kk;
      const ek = (0, ak.useRef)(null),
        {
          box: yk,
          dpr: fk
        } = function(kk) {
          const [Fk, Bk] = (0, ak.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ak.useLayoutEffect)((() => {
            const Fk = kk.current;
            if (!Fk) return;
            const Rk = () => {
              const kk = Fk.getBoundingClientRect(),
                Rk = window.devicePixelRatio || 1;
              Bk((Fk => Fk.dpr === Rk && Fk.box.left === kk.left && Fk.box.top === kk.top && Fk.box.width === kk.width && Fk.box.height === kk.height ? Fk : {
                box: {
                  left: kk.left,
                  top: kk.top,
                  width: kk.width,
                  height: kk.height
                },
                dpr: Rk
              }))
            };
            Rk();
            const tk = new ResizeObserver(Rk);
            return tk.observe(Fk), window.addEventListener("resize", Rk), window.addEventListener("scroll", Rk, !0), () => {
              tk.disconnect(), window.removeEventListener("resize", Rk), window.removeEventListener("scroll", Rk, !0)
            }
          }), [kk]), Fk
        }(ek),
        vk = (0, ak.useRef)(fk);
      vk.current = fk;
      const Lk = function(kk, Fk) {
          const Bk = bk(kk.lineThickness, Fk),
            Rk = bk(kk.lineLength, Fk),
            tk = Math.round(kk.gap * Fk),
            ak = bk(kk.dotSize, Fk),
            Xk = kk.outline > 0 ? bk(kk.outline, Fk) : 0,
            dk = bk(kk.circleThickness, Fk),
            sk = kk.circle ? Math.round(kk.circleRadius * Fk * 2 + dk) : 0,
            Vk = function(kk, Fk, Bk, Rk) {
              return kk.lines ? Fk : kk.dot ? Bk : kk.circle && Rk % 2 === 0 ? 2 : 1
            }(kk, Bk, ak, sk),
            Jk = [];
          if (kk.lines && (Jk.push({
              x: Vk + tk,
              y: 0,
              w: Rk,
              h: Bk,
              arm: "right"
            }), Jk.push({
              x: -tk - Rk,
              y: 0,
              w: Rk,
              h: Bk,
              arm: "left"
            }), Jk.push({
              x: 0,
              y: Vk + tk,
              w: Bk,
              h: Rk,
              arm: "down"
            }), kk.tStyle || Jk.push({
              x: 0,
              y: -tk - Rk,
              w: Bk,
              h: Rk,
              arm: "up"
            }), 0 === tk && Jk.push({
              x: 0,
              y: 0,
              w: Bk,
              h: Bk
            })), kk.dot) {
            const kk = Math.floor((Vk - ak) / 2);
            Jk.push({
              x: kk,
              y: kk,
              w: ak,
              h: ak
            })
          }
          const Ak = Jk.map((kk => ({
            ...kk,
            x: kk.x - Xk,
            y: kk.y - Xk,
            w: kk.w + 2 * Xk,
            h: kk.h + 2 * Xk
          })));
          let ek = null,
            yk = null;
          if (kk.circle) {
            const kk = sk + ((sk - Vk) % 2 === 0 ? 0 : 1),
              Fk = (Vk - kk) / 2;
            ek = wk(Fk, kk, dk), Xk > 0 && (yk = wk(Fk - Xk, kk + 2 * Xk, dk + 2 * Xk))
          }
          return {
            cell: Vk,
            fills: Jk,
            outlines: Xk > 0 ? Ak : [],
            ring: ek,
            ringOutline: yk
          }
        }(Vk && Fk.growOnClick ? function(kk, Fk) {
          return {
            ...kk,
            outline: kk.outline * Fk,
            lineLength: kk.lineLength * Fk,
            lineThickness: kk.lineThickness * Fk,
            gap: kk.gap * Fk,
            dotSize: kk.dotSize * Fk,
            circleRadius: kk.circleRadius * Fk,
            circleThickness: kk.circleThickness * Fk
          }
        }(Fk, sk) : Fk, fk),
        Ok = function(kk, Fk, Bk) {
          const Rk = Math.round((kk.left + kk.width / 2) * Bk - Fk / 2),
            tk = Math.round((kk.top + kk.height / 2) * Bk - Fk / 2);
          return {
            x: Rk / Bk - kk.left,
            y: tk / Bk - kk.top
          }
        }(yk, Lk.cell, fk),
        Ek = (0, Xk.j)(Fk.color),
        Sk = (0, Xk.j)(Fk.outlineColor),
        Nk = (0, ak.useRef)(0);
      (0, ak.useLayoutEffect)((() => {
        if (Ak) return Ak.current = kk => {
          var Fk;
          Nk.current = kk, null === (Fk = ek.current) || void 0 === Fk || Fk.querySelectorAll("[data-arm]").forEach((Fk => {
            Object.assign(Fk.style, ik(function(kk) {
              return {
                x: Number(kk.dataset.x),
                y: Number(kk.dataset.y),
                arm: kk.dataset.arm
              }
            }(Fk), kk, vk.current))
          }))
        }, () => {
          Ak.current = null
        }
      }), [Ak]);
      const Hk = null !== Jk && void 0 !== Jk ? Jk : Nk.current;
      return (0, dk.jsx)("div", {
        ref: ek,
        className: tk()("CrosshairShapes", {
          CrosshairInPreview: Bk,
          CrosshairInEditor: Rk || Bk,
          CrosshairSpreads: void 0 !== Ak
        }),
        children: (0, dk.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Ok.x,
            top: Ok.y,
            opacity: Fk.opacity / 100
          },
          children: (0, dk.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Lk.ringOutline && (0, dk.jsx)("div", {
              className: "CrosshairRing",
              style: Wk(Lk.ringOutline, fk, Sk)
            }), Lk.outlines.map(((kk, Fk) => (0, dk.jsx)("div", {
              className: "CrosshairPart",
              ...Yk(kk),
              style: mk(kk, Hk, fk, Sk)
            }, `o${Fk}`))), Lk.ring && (0, dk.jsx)("div", {
              className: "CrosshairRing",
              style: Wk(Lk.ring, fk, Ek)
            }), Lk.fills.map(((kk, Fk) => (0, dk.jsx)("div", {
              className: "CrosshairPart",
              ...Yk(kk),
              style: mk(kk, Hk, fk, Ek)
            }, `f${Fk}`)))]
          })
        })
      })
    }
  },
  8987: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => sk,
      e: () => fk,
      g: () => yk
    });
    var Rk = Bk(8949);
    const tk = "XH1-",
      ak = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Xk = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      bk = ["color", "outlineColor"],
      wk = 1 + 3 * bk.length + Xk.length + 1,
      dk = Math.ceil(8 * wk / Math.log2(62)),
      sk = tk.length + dk;

    function Vk(kk) {
      let Fk = 90;
      for (const Bk of kk) Fk = 31 * Fk + Bk & 255;
      return Fk
    }
    const Jk = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Ak = BigInt(Jk.length);

    function ek(kk, Fk) {
      let Bk = 0n;
      for (const tk of kk) {
        const kk = Jk.indexOf(tk);
        if (kk < 0) return null;
        Bk = Bk * Ak + BigInt(kk)
      }
      if (Bk >> BigInt(8 * Fk) !== 0n) return null;
      const Rk = [];
      for (let tk = 0; tk < Fk; tk++) Rk.unshift(Number(0xffn & Bk)), Bk >>= 8n;
      return Rk
    }

    function yk(kk) {
      let Fk = "shapes" === kk.style ? 1 : 0;
      ak.forEach(((Bk, Rk) => {
        kk[Bk] && (Fk |= 1 << Rk + 1)
      }));
      const Bk = [Fk];
      for (const tk of bk) {
        const Fk = (0, Rk.i)(tk, kk[tk]);
        Bk.push(Fk >> 16 & 255, Fk >> 8 & 255, 255 & Fk)
      }
      for (const tk of Xk) {
        const {
          min: Fk,
          step: ak
        } = Rk.d[tk];
        Bk.push(Math.round(((0, Rk.i)(tk, kk[tk]) - Fk) / ak))
      }
      return Bk.push(Vk(Bk)), tk + function(kk, Fk) {
        let Bk = 0n;
        for (const tk of kk) Bk = Bk << 8n | BigInt(tk);
        let Rk = "";
        for (let tk = 0; tk < Fk; tk++) Rk = Jk[Number(Bk % Ak)] + Rk, Bk /= Ak;
        return Rk
      }(Bk, dk)
    }

    function fk(kk) {
      for (const Fk of kk.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${dk}})`, "gi"))) {
        const kk = mk(ek(Fk[1], wk));
        if (kk) return kk
      }
      return null
    }

    function mk(kk) {
      if (!kk || kk.length !== wk || Vk(kk.slice(0, -1)) !== kk[kk.length - 1]) return null;
      const Fk = kk[0],
        Bk = {
          ...Rk.f,
          style: 1 & Fk ? "shapes" : "classic"
        };
      ak.forEach(((kk, Rk) => {
        Bk[kk] = 0 !== (Fk & 1 << Rk + 1)
      }));
      let tk = 1;
      for (const Rk of bk) Bk[Rk] = kk[tk] << 16 | kk[tk + 1] << 8 | kk[tk + 2], tk += 3;
      for (const ak of Xk) {
        const {
          min: Fk,
          step: Xk
        } = Rk.d[ak];
        Bk[ak] = (0, Rk.i)(ak, Fk + kk[tk] * Xk), tk++
      }
      return Bk
    }
  },
  8949: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      f: () => tk,
      i: () => ak,
      j: () => dk,
      l: () => wk,
      o: () => sk,
      r: () => bk,
      t: () => Xk
    });
    const Rk = {
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
      tk = Object.freeze({
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

    function ak(kk, Fk) {
      var Bk;
      const {
        min: ak,
        max: Xk,
        step: bk
      } = Rk[kk];
      if (!Number.isFinite(Fk)) return tk[kk];
      const wk = (null !== (Bk = String(bk).split(".")[1]) && void 0 !== Bk ? Bk : "").length,
        dk = Number((Math.round(Fk / bk) * bk).toFixed(wk));
      return Math.min(Xk, Math.max(ak, dk))
    }

    function Xk(kk, Fk, Bk) {
      const Rk = "number" === typeof Bk ? ak(Fk, Bk) : Bk;
      return {
        ...kk,
        [Fk]: Rk
      }
    }

    function bk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(tk).every((Rk => Bk.includes(Rk) || kk[Rk] === Fk[Rk]))
    }

    function wk(kk) {
      return bk(kk, tk)
    }

    function dk(kk) {
      return `#${kk.toString(16).padStart(6,"0")}`
    }

    function sk(kk) {
      const Fk = /^#?([0-9a-f]{6})$/i.exec(kk.trim());
      return Fk ? parseInt(Fk[1], 16) : null
    }
  },
  8990: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Vk,
      g: () => Jk
    });
    var Rk = Bk(61),
      tk = Bk(42),
      ak = Bk(8987),
      Xk = Bk(8949);
    const bk = "crosshairCode";
    let wk = null;
    const dk = new Set;

    function sk() {
      if (null === wk) {
        var kk;
        const Fk = tk.i.getItem(bk);
        wk = null !== (kk = "string" === typeof Fk ? (0, ak.e)(Fk) : null) && void 0 !== kk ? kk : Xk.f
      }
      return wk
    }

    function Vk(kk) {
      wk = kk, (0, Xk.l)(kk) ? tk.i.removeItem(bk) : tk.i.setItem(bk, (0, ak.g)(kk));
      for (const Fk of dk) Fk()
    }

    function Jk() {
      const [kk, Fk] = (0, Rk.useState)(sk);
      return (0, Rk.useEffect)((() => {
        const kk = () => {
          Fk(sk())
        };
        return kk(), Bk = kk, dk.add(Bk), () => {
          dk.delete(Bk)
        };
        var Bk
      }), []), kk
    }
  },
  36451: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      f: () => wk,
      j: () => Xk
    });
    var Rk = Bk(606),
      tk = Bk(2626);

    function ak(kk) {
      return kk === (0, tk.d)().Wkk ? (0, tk.d)().DH : kk
    }

    function Xk(kk) {
      return !(0, Rk.F)(kk) && ak(kk) === (0, tk.d)().DH
    }
    const bk = "gravity";

    function wk() {
      return (0, tk.d)().physics[bk][1]
    }
  },
  36170: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      countDecodesAs: () => sk,
      decodedAudio: () => Vk
    });
    var Rk = Bk(4575);
    const tk = Rk.Howler,
      ak = new Map;
    let Xk = 0;
    const bk = {
        song: 0,
        sheet: 0
      },
      wk = new WeakMap,
      dk = new WeakSet;

    function sk(kk, Fk) {
      return wk.set(kk, Fk), kk
    }

    function Vk() {
      return {
        bytes: Xk,
        songsDecoded: bk.song,
        sheetsDecoded: bk.sheet
      }
    }

    function Jk(kk) {
      if (dk.has(kk)) return;
      dk.add(kk);
      const Fk = 1 === kk.decodeAudioData.length,
        Bk = kk.decodeAudioData.bind(kk);
      kk.decodeAudioData = (kk, Rk, dk) => {
        const sk = kk => {
          const Fk = tk._howls.filter((kk => "loaded" !== kk._state));
          try {
            null === Rk || void 0 === Rk || Rk(kk)
          } finally {
            const Bk = Fk.find((kk => "loaded" === kk._state));
            void 0 !== Bk && "string" === typeof Bk._src && function(kk, Fk, Bk) {
              var Rk;
              Xk += Bk - (null !== (Rk = ak.get(Fk)) && void 0 !== Rk ? Rk : 0), ak.set(Fk, Bk);
              const tk = wk.get(kk);
              void 0 !== tk && bk[tk]++
            }(Bk, Bk._src, kk.length * kk.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return kk
        };
        if (!Fk) return Bk(kk, sk, dk);
        const Vk = Bk(kk).then(sk);
        return Vk.catch((kk => {
          null === dk || void 0 === dk || dk(kk)
        })), Vk
      }
    }
    const Ak = Rk.Howl.prototype,
      ek = Ak.init;
    Ak.init = function(kk) {
      return Rk.Howler.volume(), tk.ctx && Jk(tk.ctx), ek.call(this, kk)
    };
    const yk = Ak.unload;
    Ak.unload = function() {
      const kk = this._src,
        Fk = yk.call(this);
      if ("string" !== typeof kk) return Fk;
      const Bk = ak.get(kk);
      return void 0 !== Bk && function(kk) {
        return !tk._howls.some((Fk => Fk._src === kk || "string" === typeof Fk._src && kk.indexOf(Fk._src) >= 0))
      }(kk) && (ak.delete(kk), Xk -= Bk), Fk
    }
  },
  36442: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ik
    });
    var Rk = Bk(36445),
      tk = Bk(182),
      ak = Bk(4575),
      Xk = Bk(36170),
      bk = Bk(36469),
      wk = Bk(36451),
      dk = Bk(302),
      sk = Bk.n(dk),
      Vk = Bk(1154),
      Jk = Bk(2626),
      Ak = Bk(36466),
      ek = Bk(29),
      yk = Bk(22),
      fk = Bk(36460);
    const mk = new Set(["note"]);
    const Wk = {
      stop: () => Wk,
      fade: () => Wk,
      rate: () => Wk,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Wk,
      setPannerAttr: () => Wk,
      setPosition: () => Wk
    };
    class vk {
      constructor(kk) {
        let Fk, {
          src: Bk,
          volumeScalar: tk,
          isSoundSprite: wk
        } = kk;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, wk ? (Fk = (0, Rk.e)(Bk), this._spriteTrackSrc = Fk) : Fk = {
          src: Vk.clientSideServerUrls.staticUrl + Bk
        }, this._volumeMultiplier = new bk.e, this._volumeMultiplier.setMultiplierType("persistentScalar", tk), this._howl = (0, Xk.countDecodesAs)(new ak.Howl({
          ...Fk,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          Bk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Fk) {
          var Rk;
          if (null === (Rk = this._spriteTrackSrc) || void 0 === Rk || !Rk.sprite[Fk]) throw new Error("No such sprite in your spritetrack");
          kk = this._howl.play(Fk)
        } else kk = this._howl.play();
        Bk && this._howl.loop(!0, kk);
        let tk = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), kk);
        const ak = {
          stop: () => (this._howl.stop(kk), ak),
          fade: (Fk, Bk, Rk) => (this._howl.fade(Fk, Bk, Rk, kk), ak),
          rate: Fk => (this._howl.rate(Fk, kk), ak),
          stopsAtOnce: () => this._howl.playing(kk) && !this._howl._playLock,
          isAlive: () => {
            const Fk = this._howl._soundById(kk);
            return !this._loadFailed && !!Fk && !Fk._ended
          },
          getDurationMs: () => this._howl._soundById(kk) ? 1e3 * this._howl.duration(kk) / this._howl.rate(kk) : 0,
          getVolume: () => tk * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => tk,
          setRelativeVolume: Fk => {
            if (Fk > 1) throw new Error("Volume should be <= 1");
            return tk = yk.c.get("soundOnFromAd") ? Fk : 0, this._howl.volume(Math.min(1, tk * this._volumeMultiplier.getTotalMultipliedVal()), kk), ak
          },
          setPannerAttr: Fk => {
            let {
              coneInnerAngle: Bk,
              coneOuterAngle: Rk = 360,
              coneOuterGain: tk,
              distanceModel: Xk,
              maxDistance: bk,
              panningModel: wk,
              refDistance: dk,
              rolloffFactor: sk
            } = Fk;
            return this._setPannerAttr({
              id: kk,
              coneInnerAngle: Bk,
              coneOuterAngle: Rk,
              coneOuterGain: tk,
              distanceModel: Xk,
              maxDistance: bk,
              panningModel: wk,
              refDistance: dk,
              rolloffFactor: sk
            }), ak
          },
          setPosition: Fk => (this._howl.pos(Fk[2], Fk[1], Fk[0], kk), ak)
        };
        return ak
      }
      setGlobalVolume(kk) {
        this._volumeMultiplier.setMultiplierType("globalVolume", kk), this._howl.volume(kk)
      }
      _setPannerAttr(kk) {
        let {
          id: Fk,
          coneInnerAngle: Bk = 360,
          coneOuterAngle: Rk = 360,
          coneOuterGain: tk = 0,
          distanceModel: ak = "inverse",
          maxDistance: Xk = 1e3,
          panningModel: bk = "HRTF",
          refDistance: wk = Ak.g,
          rolloffFactor: dk = 1
        } = kk;
        this._howl.pannerAttr({
          coneOuterAngle: Rk
        }, Fk);
        const sk = {
          coneInnerAngle: Bk,
          coneOuterAngle: Rk,
          coneOuterGain: tk,
          distanceModel: ak,
          maxDistance: Xk,
          panningModel: bk,
          refDistance: wk,
          rolloffFactor: dk
        };
        this._howl.pannerAttr(sk, Fk)
      }
    }
    const ik = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new fk.e, ek.o.subscribe("appManagerUpdated|soundVolume", (kk => {
          const Fk = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const Bk of Fk) Bk.setGlobalVolume(kk)
        }))
      }
      play(kk, Fk) {
        var Bk;
        let ak, Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Bk = (0, Jk.d)()) || void 0 === Bk ? void 0 : Bk.DH,
          bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ak.d,
          dk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ak.g,
          Vk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var ek;
        (0, Jk.d)() ? ak = !!Array.isArray(Xk) || (0, wk.e)(Xk) !== (null === (ek = (0, Jk.d)()) || void 0 === ek ? void 0 : ek.DH): ak = !1;
        const ik = ak ? this.spatialSheets : this.stereoSheets,
          Yk = (0, Rk.g)(kk);
        if (!ik[Yk]) {
          const kk = new vk({
            src: Yk,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          kk.setGlobalVolume(yk.c.get("soundVolume")), ik[Yk] = kk
        }
        const Lk = ik[Yk];
        if (!ak) {
          const Bk = Lk.play(kk, Vk);
          return Bk.setRelativeVolume(Fk), Bk
        }
        const Ok = (0, Jk.d)(),
          Ek = Array.isArray(Xk) ? Xk : Ok.Tv.rW(Xk),
          Sk = Ok.Tv.rW(Ok.DH);
        if (!Ek || sk().sqrDist(Ek, Sk) > bk * bk) return Wk;
        let Nk;
        if (!Vk) {
          if (!this.spatialVoices.admit({
              group: mk.has(Yk) ? null : (0, fk.i)(kk),
              loudness: (0, fk.h)(Fk, sk().Rb(Ek, Sk), dk),
              startMs: performance.now(),
              getDurationMs: () => {
                var kk, Fk;
                return null !== (kk = null === (Fk = Nk) || void 0 === Fk ? void 0 : Fk.getDurationMs()) && void 0 !== kk ? kk : 0
              },
              isAlive: () => {
                var kk, Fk;
                return null !== (kk = null === (Fk = Nk) || void 0 === Fk ? void 0 : Fk.isAlive()) && void 0 !== kk && kk
              },
              canStop: () => {
                var kk, Fk;
                return null !== (kk = null === (Fk = Nk) || void 0 === Fk ? void 0 : Fk.stopsAtOnce()) && void 0 !== kk && kk
              },
              stop: () => {
                var kk;
                null === (kk = Nk) || void 0 === kk || kk.stop()
              }
            })) return Wk
        }
        return Nk = Lk.play(kk, Vk), Nk.setRelativeVolume(Fk), Nk.setPannerAttr({
          refDistance: dk
        }), Nk.setPosition([Ek[0], Ek[1] + tk.h.FW * tk.h.playerEyeToHeightRatio, Ek[2]]), Nk
      }
    }
  },
  36518: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      var Bk, Rk, tk, ak, Xk, bk, wk, dk;
      return kk.name === Fk.name && ((null === (Bk = kk.attributes) || void 0 === Bk || null === (Rk = Bk.customAttributes) || void 0 === Rk ? void 0 : Rk.stackKey) === (null === (tk = Fk.attributes) || void 0 === tk || null === (ak = tk.customAttributes) || void 0 === ak ? void 0 : ak.stackKey) && (!0 !== (null === (Xk = kk.attributes) || void 0 === Xk || null === (bk = Xk.customAttributes) || void 0 === bk ? void 0 : bk.unstackable) && !0 !== (null === (wk = Fk.attributes) || void 0 === wk || null === (dk = wk.customAttributes) || void 0 === dk ? void 0 : dk.unstackable)))
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  36614: (kk, Fk, Bk) => {
    function Rk(kk) {
      return kk.includes("Leaf Bed")
    }

    function tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Rk(kk)
    }

    function ak(kk) {
      return kk.includes(" Strongbed")
    }

    function Xk(kk) {
      return Rk(kk) || tk(kk) || ak(kk)
    }
    Bk.d(Fk, {
      b: () => Xk,
      f: () => Rk,
      i: () => ak,
      l: () => tk
    })
  },
  36605: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk
    });
    var Rk = Bk(36614),
      tk = Bk(9095);
    const ak = [],
      Xk = [],
      bk = [],
      wk = [];
    for (const sk of Object.keys(tk.q))(0, Rk.f)(sk) ? ak.push(sk) : (0, Rk.l)(sk) && Xk.push(sk), (0, Rk.i)(sk) && bk.push(sk), (sk.includes(" Bed Head") || sk.includes(" Strongbed Head")) && wk.push(sk);
    const dk = {
      leafBeds: ak,
      woolBeds: Xk,
      strongBeds: bk,
      beds: [...ak, ...Xk, ...bk],
      bedHeads: wk,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6167: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      c: () => tk,
      f: () => wk,
      h: () => ak,
      j: () => dk,
      l: () => Rk,
      o: () => bk
    });
    let Rk = function(kk) {
        return kk[kk.DEFAULT = 0] = "DEFAULT", kk[kk.BOAT = 1] = "BOAT", kk[kk.GLIDER = 2] = "GLIDER", kk[kk.BALLOON = 3] = "BALLOON", kk[kk.SLEEPING = 4] = "SLEEPING", kk[kk.RIDING_MOB = 5] = "RIDING_MOB", kk[kk.CAR = 6] = "CAR", kk[kk.HOVERCRAFT = 7] = "HOVERCRAFT", kk
      }({}),
      tk = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.OBSIDIAN = 1] = "OBSIDIAN", kk[kk.SPEED = 2] = "SPEED", kk
      }({}),
      ak = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.IRON = 1] = "IRON", kk[kk.GOLD = 2] = "GOLD", kk[kk.DIAMOND = 3] = "DIAMOND", kk
      }({}),
      Xk = function(kk) {
        return kk[kk.YELLOW = 0] = "YELLOW", kk[kk.WHITE = 1] = "WHITE", kk[kk.RED = 2] = "RED", kk[kk.PURPLE = 3] = "PURPLE", kk[kk.PINK = 4] = "PINK", kk[kk.ORANGE = 5] = "ORANGE", kk[kk.MAGENTA = 6] = "MAGENTA", kk[kk.LIME = 7] = "LIME", kk[kk.LIGHT_GRAY = 8] = "LIGHT_GRAY", kk[kk.LIGHT_BLUE = 9] = "LIGHT_BLUE", kk[kk.GREEN = 10] = "GREEN", kk[kk.GRAY = 11] = "GRAY", kk[kk.CYAN = 12] = "CYAN", kk[kk.BROWN = 13] = "BROWN", kk[kk.BLUE = 14] = "BLUE", kk[kk.BLACK = 15] = "BLACK", kk
      }({}),
      bk = function(kk) {
        return kk[kk.ROTATION_1 = 0] = "ROTATION_1", kk[kk.ROTATION_2 = 1] = "ROTATION_2", kk[kk.ROTATION_3 = 2] = "ROTATION_3", kk[kk.ROTATION_4 = 3] = "ROTATION_4", kk
      }({}),
      wk = function(kk) {
        return kk[kk.KART = 0] = "KART", kk[kk.OFF_ROADER = 1] = "OFF_ROADER", kk[kk.CAR = 2] = "CAR", kk[kk.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", kk[kk.ARMORED_CAR = 4] = "ARMORED_CAR", kk[kk.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", kk[kk.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", kk[kk.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", kk
      }({});
    Rk.DEFAULT, Rk.BOAT, tk.SPEED, Rk.GLIDER, ak.DIAMOND, Rk.BALLOON, Xk.BLACK, Rk.SLEEPING, bk.ROTATION_4, Rk.RIDING_MOB, Rk.CAR, wk.MOONSTONE_MINING_DRILL, Rk.HOVERCRAFT;
    let dk = function(kk) {
      return kk[kk.NORMAL = 0] = "NORMAL", kk[kk.GLIDING = 1] = "GLIDING", kk[kk.FLOATING = 2] = "FLOATING", kk
    }({})
  },
  8979: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);