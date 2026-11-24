export const id = 120;
export const ids = [120];
export const modules = {
  36610: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => wk,
      e: () => sk
    });
    Ik(34139);
    var Xk = Ik(58),
      Tk = Ik(1402),
      ik = Ik(1875),
      yk = Ik(1907),
      lk = Ik(25),
      ak = Ik(2349),
      qk = Ik(36618),
      Lk = Ik(36620),
      tk = Ik(34119),
      Zk = Ik(34131),
      jk = Ik(34148),
      ek = Ik(1096);
    const wk = (0, Xk.memo)((function() {
      var kk;
      const {
        isTouchScreen: Fk,
        clientEscMenuOptions: Ik,
        scriptedCameraFacing: ik,
        crosshairShownOverride: wk,
        crosshairGameView: Jk
      } = (0, lk.j)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), xk = (0, ak.j)("gunshotOrigin"), Pk = (0, Xk.useRef)(null), Kk = (0, Xk.useRef)(!1), [Qk, Vk] = (0, Xk.useState)(Hk);
      (0, Tk.d)("cameraZoomSet", Vk), (0, Xk.useEffect)((() => {
        Vk(Hk())
      }), []);
      const zk = (0, yk.k)("heldItemAim"),
        vk = zk.gun,
        Ek = (0, jk.f)(),
        Ok = (0, Xk.useRef)(Ek);
      Ok.current = Ek;
      const [nk, Gk] = (0, Xk.useState)(!1);
      (0, Xk.useEffect)((() => (0, Lk.g)("crosshairAccuracy", sk)), []), (0, Tk.d)("mouseState", (kk => {
        let {
          isDown: Fk
        } = kk;
        Kk.current = Fk, Pk.current && (Pk.current.style.transform = (0, Zk.e)(Fk, Ok.current.growOnClick)), "shapes" === Ok.current.style && Gk(Fk)
      }));
      const pk = (0, tk.d)(Fk, Ik.touchActionButtons);
      return (null !== (kk = (0, qk.e)(Jk, wk)) && void 0 !== kk ? kk : (0, qk.k)(zk, Qk > 1, pk, xk)) ? "movement" === ik || "cursor" === ik ? null : (0, ek.jsxs)(ek.Fragment, {
        children: [vk && (0, ek.jsx)(Sk, {
          custom: Ek.forGuns && "shapes" === Ek.style ? Ek : null,
          touch: Fk
        }), !vk && (0, ek.jsx)(Zk.c, {
          settings: Ek,
          touch: Fk,
          pressRef: Pk,
          pressed: "shapes" === Ek.style ? nk : Kk.current
        })]
      }) : null
    }));

    function Hk() {
      return ik.gameBridge.lookup("cameraZoom", null)
    }
    const Jk = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      xk = {
        current: null
      },
      Pk = {
        current: null
      };
    let Kk = 0,
      Qk = 0;

    function sk(kk) {
      Qk = kk, Jk[0].current || xk.current || Pk.current ? zk(kk) : Kk = kk
    }

    function Vk(kk) {
      return ((0, qk.h)(kk) - (0, qk.h)(0)) * window.innerHeight / 100
    }

    function zk(kk) {
      var Fk;
      if (null === (Fk = Pk.current) || void 0 === Fk || Fk.call(Pk, Vk(kk)), Jk[0].current) {
        const Fk = `${(0,qk.h)(kk)}vh`;
        Jk[0].current.style.transform = `translateX(calc(0px - ${Fk}))`, Jk[1].current.style.transform = `translateX(calc(0px + ${Fk}))`, Jk[2].current.style.transform = `translateY(calc(0px - ${Fk}))`, Jk[3].current.style.transform = `translateY(calc(0px + ${Fk}))`
      }
      xk.current && (xk.current.style.filter = `blur(${Math.round(kk/10)}px)`)
    }

    function Sk(kk) {
      let {
        custom: Fk,
        touch: Ik
      } = kk;
      const ik = (0, Tk.f)("aimingOverlay", "none"),
        yk = "1.2vh",
        lk = "0.3vh";
      (0, Xk.useEffect)((() => {
        Kk && zk(Kk)
      }), []);
      const ak = (0, Xk.useRef)(null !== Fk);
      return (0, Xk.useLayoutEffect)((() => {
        var kk;
        Fk ? null === (kk = Pk.current) || void 0 === kk || kk.call(Pk, Vk(Qk)) : ak.current && zk(Qk);
        ak.current = null !== Fk
      }), [Fk]), (0, ek.jsxs)(ek.Fragment, {
        children: ["sniper" === ik && (0, ek.jsxs)("div", {
          ref: xk,
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
            opacity: "sniper" === ik ? 0 : 1
          },
          children: [Fk && (0, ek.jsx)(Zk.c, {
            settings: Fk,
            touch: Ik,
            spreadRef: Pk
          }), !Fk && (0, ek.jsxs)(ek.Fragment, {
            children: [(0, ek.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: yk,
                height: lk,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Jk[0]
            }), (0, ek.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: yk,
                height: lk,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Jk[1]
            }), (0, ek.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: lk,
                height: yk,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Jk[2]
            }), (0, ek.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: lk,
                height: yk,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Jk[3]
            })]
          })]
        })]
      })
    }
  },
  34131: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => wk,
      e: () => ek
    });
    Ik(34139);
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(58),
      yk = Ik(34122);

    function lk(kk, Fk) {
      return Math.max(1, Math.round(kk * Fk))
    }

    function ak(kk, Fk) {
      const Ik = Fk * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Xk = function(kk, Fk) {
          if (kk.lines) return lk(kk.lineThickness, Fk) % 2;
          if (kk.dot) return lk(kk.dotSize, Fk) % 2;
          return qk(kk, Fk) % 2
        }(kk, Fk),
        Tk = Lk(kk.lineThickness * Ik, Xk),
        ik = lk(kk.lineLength, Ik),
        yk = Math.round(kk.gap * Ik),
        ak = kk.outline > 0 ? lk(kk.outline, Ik) : 0,
        Zk = [];
      if (kk.lines && (Zk.push({
          x: Tk + yk,
          y: 0,
          w: ik,
          h: Tk,
          arm: "right"
        }), Zk.push({
          x: -yk - ik,
          y: 0,
          w: ik,
          h: Tk,
          arm: "left"
        }), Zk.push({
          x: 0,
          y: Tk + yk,
          w: Tk,
          h: ik,
          arm: "down"
        }), kk.tStyle || Zk.push({
          x: 0,
          y: -yk - ik,
          w: Tk,
          h: ik,
          arm: "up"
        }), 0 === yk && Zk.push({
          x: 0,
          y: 0,
          w: Tk,
          h: Tk
        })), kk.dot) {
        const Fk = Lk(kk.dotSize * Ik, Xk),
          ik = kk.lines && 0 === yk && kk.dotSize > kk.lineThickness ? Math.max(Fk, Tk + 2) : Fk,
          lk = (Tk - ik) / 2;
        Zk.push({
          x: lk,
          y: lk,
          w: ik,
          h: ik
        })
      }
      const jk = Zk.map((kk => ({
        ...kk,
        x: kk.x - ak,
        y: kk.y - ak,
        w: kk.w + 2 * ak,
        h: kk.h + 2 * ak
      })));
      let ek = null,
        wk = null;
      if (kk.circle) {
        const Fk = lk(kk.circleThickness, Ik),
          ik = function(kk, Fk) {
            return kk + (kk % 2 === Fk ? 0 : 1)
          }(qk(kk, Ik), Xk),
          yk = (Tk - ik) / 2;
        ek = tk(yk, ik, Fk), ak > 0 && (wk = tk(yk - ak, ik + 2 * ak, Fk + 2 * ak))
      }
      return {
        cell: Tk,
        fills: Zk,
        outlines: ak > 0 ? jk : [],
        ring: ek,
        ringOutline: wk
      }
    }

    function qk(kk, Fk) {
      return Math.round(kk.circleRadius * Fk * 2 + lk(kk.circleThickness, Fk))
    }

    function Lk(kk, Fk) {
      return Math.max(2 - Fk, 2 * Math.round((kk - Fk) / 2) + Fk)
    }

    function tk(kk, Fk, Ik) {
      const Xk = 2 * Ik >= Fk - 1;
      return {
        x: kk,
        y: kk,
        size: Fk,
        border: Math.min(Ik, Math.floor(Fk / 2)),
        filled: Xk
      }
    }
    var Zk = Ik(1096);
    const jk = 1.4;

    function ek(kk, Fk) {
      return kk && Fk ? `scale(${jk})` : "scale(1)"
    }

    function wk(kk) {
      return "classic" === kk.settings.style ? (0, Zk.jsx)(xk, {
        ...kk
      }) : (0, Zk.jsx)(Sk, {
        ...kk
      })
    }
    const Hk = .125;

    function Jk(kk, Fk) {
      const Ik = {};
      if (kk.color !== yk.f.color && (Ik.color = (0, yk.k)(kk.color)), kk.opacity !== yk.f.opacity && (Ik.opacity = kk.opacity / 100), kk.outline !== yk.f.outline || kk.outlineColor !== yk.f.outlineColor) {
        const Fk = kk.outline,
          Xk = (0, yk.k)(kk.outlineColor);
        Ik.textShadow = Fk > 0 ? `-${Fk}px 0 ${Xk}, 0 ${Fk}px ${Xk}, ${Fk}px 0 ${Xk}, 0 -${Fk}px ${Xk}` : "none"
      }
      if (kk.size !== yk.f.size) {
        const Xk = kk.size / 100;
        Ik.fontSize = Fk ? `calc(max(1.3rem, 18px) * ${Xk})` : `calc(1.3rem * ${Xk})`, Ik.marginTop = `-${Hk}em`, Ik.transformOrigin = `50% calc(50% + ${Hk}em)`
      }
      return Ik
    }

    function xk(kk) {
      let {
        settings: Fk,
        touch: Ik,
        inPreview: Xk,
        inEditor: ik,
        pressed: yk = !1,
        pressRef: lk
      } = kk;
      return (0, Zk.jsx)("div", {
        className: Tk()("Crosshair", {
          Touch: Ik,
          CrosshairInPreview: Xk,
          CrosshairInEditor: ik || Xk
        }),
        ref: lk,
        style: {
          transform: ek(yk, Fk.growOnClick),
          ...Jk(Fk, Ik)
        },
        children: "+"
      })
    }

    function Pk(kk, Fk) {
      return kk / Fk + "px"
    }

    function Kk(kk, Fk, Ik, Xk) {
      return {
        ...Vk(kk, Fk, Ik),
        width: Pk(kk.w, Ik),
        height: Pk(kk.h, Ik),
        background: Xk
      }
    }

    function Qk(kk, Fk, Ik) {
      return {
        left: Pk(kk.x, Fk),
        top: Pk(kk.y, Fk),
        width: Pk(kk.size, Fk),
        height: Pk(kk.size, Fk),
        borderWidth: Pk(kk.border, Fk),
        borderColor: Ik,
        background: kk.filled ? Ik : void 0
      }
    }
    const sk = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Vk(kk, Fk, Ik) {
      const [Xk, Tk] = kk.arm ? sk[kk.arm] : [0, 0], ik = Math.round(Fk * Ik);
      return {
        left: Pk(kk.x + Xk * ik, Ik),
        top: Pk(kk.y + Tk * ik, Ik)
      }
    }

    function zk(kk) {
      return kk.arm ? {
        "data-arm": kk.arm,
        "data-x": kk.x,
        "data-y": kk.y
      } : {}
    }

    function Sk(kk) {
      let {
        settings: Fk,
        inPreview: Ik,
        inEditor: Xk,
        pressed: lk = !1,
        spread: qk,
        spreadRef: Lk
      } = kk;
      const tk = (0, ik.useRef)(null),
        {
          box: ek,
          dpr: wk
        } = function(kk) {
          const [Fk, Ik] = (0, ik.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ik.useLayoutEffect)((() => {
            const Fk = kk.current;
            if (!Fk) return;
            const Xk = () => {
              const kk = Fk.getBoundingClientRect(),
                Xk = window.devicePixelRatio || 1;
              Ik((Fk => Fk.dpr === Xk && Fk.box.left === kk.left && Fk.box.top === kk.top && Fk.box.width === kk.width && Fk.box.height === kk.height ? Fk : {
                box: {
                  left: kk.left,
                  top: kk.top,
                  width: kk.width,
                  height: kk.height
                },
                dpr: Xk
              }))
            };
            Xk();
            const Tk = new ResizeObserver(Xk);
            return Tk.observe(Fk), window.addEventListener("resize", Xk), window.addEventListener("scroll", Xk, !0), () => {
              Tk.disconnect(), window.removeEventListener("resize", Xk), window.removeEventListener("scroll", Xk, !0)
            }
          }), [kk]), Fk
        }(tk),
        Hk = (0, ik.useRef)(wk);
      Hk.current = wk;
      const Jk = ak(Fk, wk, lk && Fk.growOnClick ? jk : 1),
        xk = function(kk, Fk, Ik) {
          const Xk = Math.round((kk.left + kk.width / 2) * Ik - Fk / 2),
            Tk = Math.round((kk.top + kk.height / 2) * Ik - Fk / 2);
          return {
            x: Xk / Ik - kk.left,
            y: Tk / Ik - kk.top
          }
        }(ek, Jk.cell, wk),
        Pk = (0, yk.k)(Fk.color),
        sk = (0, yk.k)(Fk.outlineColor),
        Sk = (0, ik.useRef)(0);
      (0, ik.useLayoutEffect)((() => {
        if (Lk) return Lk.current = kk => {
          var Fk;
          Sk.current = kk, null === (Fk = tk.current) || void 0 === Fk || Fk.querySelectorAll("[data-arm]").forEach((Fk => {
            Object.assign(Fk.style, Vk(function(kk) {
              return {
                x: Number(kk.dataset.x),
                y: Number(kk.dataset.y),
                arm: kk.dataset.arm
              }
            }(Fk), kk, Hk.current))
          }))
        }, () => {
          Lk.current = null
        }
      }), [Lk]);
      const vk = null !== qk && void 0 !== qk ? qk : Sk.current;
      return (0, Zk.jsx)("div", {
        ref: tk,
        className: Tk()("CrosshairShapes", {
          CrosshairInPreview: Ik,
          CrosshairInEditor: Xk || Ik,
          CrosshairSpreads: void 0 !== Lk
        }),
        children: (0, Zk.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: xk.x,
            top: xk.y,
            opacity: Fk.opacity / 100
          },
          children: (0, Zk.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Jk.ringOutline && (0, Zk.jsx)("div", {
              className: "CrosshairRing",
              style: Qk(Jk.ringOutline, wk, sk)
            }), Jk.outlines.map(((kk, Fk) => (0, Zk.jsx)("div", {
              className: "CrosshairPart",
              ...zk(kk),
              style: Kk(kk, vk, wk, sk)
            }, `o${Fk}`))), Jk.ring && (0, Zk.jsx)("div", {
              className: "CrosshairRing",
              style: Qk(Jk.ring, wk, Pk)
            }), Jk.fills.map(((kk, Fk) => (0, Zk.jsx)("div", {
              className: "CrosshairPart",
              ...zk(kk),
              style: Kk(kk, vk, wk, Pk)
            }, `f${Fk}`)))]
          })
        })
      })
    }
  },
  34143: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Lk,
      f: () => Hk,
      h: () => wk
    });
    var Xk = Ik(34122);
    const Tk = "XH1-",
      ik = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      yk = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      lk = ["color", "outlineColor"],
      ak = 1 + 3 * lk.length + yk.length + 1,
      qk = Math.ceil(8 * ak / Math.log2(62)),
      Lk = Tk.length + qk;

    function tk(kk) {
      let Fk = 90;
      for (const Ik of kk) Fk = 31 * Fk + Ik & 255;
      return Fk
    }
    const Zk = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      jk = BigInt(Zk.length);

    function ek(kk, Fk) {
      let Ik = 0n;
      for (const Tk of kk) {
        const kk = Zk.indexOf(Tk);
        if (kk < 0) return null;
        Ik = Ik * jk + BigInt(kk)
      }
      if (Ik >> BigInt(8 * Fk) !== 0n) return null;
      const Xk = [];
      for (let Tk = 0; Tk < Fk; Tk++) Xk.unshift(Number(0xffn & Ik)), Ik >>= 8n;
      return Xk
    }

    function wk(kk) {
      let Fk = "shapes" === kk.style ? 1 : 0;
      ik.forEach(((Ik, Xk) => {
        kk[Ik] && (Fk |= 1 << Xk + 1)
      }));
      const Ik = [Fk];
      for (const Tk of lk) {
        const Fk = (0, Xk.g)(Tk, kk[Tk]);
        Ik.push(Fk >> 16 & 255, Fk >> 8 & 255, 255 & Fk)
      }
      for (const Tk of yk) {
        const {
          min: Fk,
          step: ik
        } = Xk.d[Tk];
        Ik.push(Math.round(((0, Xk.g)(Tk, kk[Tk]) - Fk) / ik))
      }
      return Ik.push(tk(Ik)), Tk + function(kk, Fk) {
        let Ik = 0n;
        for (const Tk of kk) Ik = Ik << 8n | BigInt(Tk);
        let Xk = "";
        for (let Tk = 0; Tk < Fk; Tk++) Xk = Zk[Number(Ik % jk)] + Xk, Ik /= jk;
        return Xk
      }(Ik, qk)
    }

    function Hk(kk) {
      for (const Fk of kk.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${qk}})`, "gi"))) {
        const kk = Jk(ek(Fk[1], ak));
        if (kk) return kk
      }
      return null
    }

    function Jk(kk) {
      if (!kk || kk.length !== ak || tk(kk.slice(0, -1)) !== kk[kk.length - 1]) return null;
      const Fk = kk[0],
        Ik = {
          ...Xk.f,
          style: 1 & Fk ? "shapes" : "classic"
        };
      ik.forEach(((kk, Xk) => {
        Ik[kk] = 0 !== (Fk & 1 << Xk + 1)
      }));
      let Tk = 1;
      for (const Xk of lk) Ik[Xk] = kk[Tk] << 16 | kk[Tk + 1] << 8 | kk[Tk + 2], Tk += 3;
      for (const ik of yk) {
        const {
          min: Fk,
          step: yk
        } = Xk.d[ik];
        Ik[ik] = (0, Xk.g)(ik, Fk + kk[Tk] * yk), Tk++
      }
      return Ik
    }
  },
  34122: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk,
      f: () => Tk,
      g: () => ik,
      k: () => qk,
      n: () => ak,
      q: () => Lk,
      t: () => lk,
      u: () => yk
    });
    const Xk = {
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
      Tk = Object.freeze({
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

    function ik(kk, Fk) {
      var Ik;
      const {
        min: ik,
        max: yk,
        step: lk
      } = Xk[kk];
      if (!Number.isFinite(Fk)) return Tk[kk];
      const ak = (null !== (Ik = String(lk).split(".")[1]) && void 0 !== Ik ? Ik : "").length,
        qk = Number((Math.round(Fk / lk) * lk).toFixed(ak));
      return Math.min(yk, Math.max(ik, qk))
    }

    function yk(kk, Fk, Ik) {
      const Xk = "number" === typeof Ik ? ik(Fk, Ik) : Ik;
      return {
        ...kk,
        [Fk]: Xk
      }
    }

    function lk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Tk).every((Xk => Ik.includes(Xk) || kk[Xk] === Fk[Xk]))
    }

    function ak(kk) {
      return lk(kk, Tk)
    }

    function qk(kk) {
      return `#${kk.toString(16).padStart(6,"0")}`
    }

    function Lk(kk) {
      const Fk = /^#?([0-9a-f]{6})$/i.exec(kk.trim());
      return Fk ? parseInt(Fk[1], 16) : null
    }
  },
  34148: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => tk,
      f: () => Zk
    });
    var Xk = Ik(58),
      Tk = Ik(41),
      ik = Ik(34143),
      yk = Ik(34122);
    const lk = "crosshairCode";
    let ak = null;
    const qk = new Set;

    function Lk() {
      if (null === ak) {
        var kk;
        const Fk = Tk.j.getItem(lk);
        ak = null !== (kk = "string" === typeof Fk ? (0, ik.f)(Fk) : null) && void 0 !== kk ? kk : yk.f
      }
      return ak
    }

    function tk(kk) {
      ak = kk, (0, yk.n)(kk) ? Tk.j.removeItem(lk) : Tk.j.setItem(lk, (0, ik.h)(kk));
      for (const Fk of qk) Fk()
    }

    function Zk() {
      const [kk, Fk] = (0, Xk.useState)(Lk);
      return (0, Xk.useEffect)((() => {
        const kk = () => {
          Fk(Lk())
        };
        return kk(), Ik = kk, qk.add(Ik), () => {
          qk.delete(Ik)
        };
        var Ik
      }), []), kk
    }
  },
  36783: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      e: () => ak,
      f: () => yk
    });
    var Xk = Ik(628),
      Tk = Ik(2700);

    function ik(kk) {
      return kk === (0, Tk.e)().Nkk ? (0, Tk.e)().oR : kk
    }

    function yk(kk) {
      return !(0, Xk.Q)(kk) && ik(kk) === (0, Tk.e)().oR
    }
    const lk = "gravity";

    function ak() {
      return (0, Tk.e)().physics[lk][1]
    }
  },
  36764: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Vk
    });
    var Xk = Ik(36772),
      Tk = Ik(187),
      ik = Ik(4857),
      yk = Ik(36777),
      lk = Ik(36432),
      ak = Ik(36824),
      qk = Ik(36783),
      Lk = Ik(354),
      tk = Ik.n(Lk),
      Zk = Ik(1194),
      jk = Ik(2700),
      ek = Ik(36816),
      wk = Ik(34),
      Hk = Ik(25),
      Jk = Ik(36789),
      xk = Ik(36796),
      Pk = Ik(36803);
    const Kk = new Set(["note"]);
    const Qk = {
      stop: () => Qk,
      fade: () => Qk,
      rate: () => Qk,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Qk,
      setPannerAttr: () => Qk,
      setPosition: () => Qk
    };
    class sk {
      constructor(kk) {
        let Fk, {
          src: Ik,
          volumeScalar: Tk,
          isSoundSprite: yk
        } = kk;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, yk ? (Fk = (0, Xk.g)(Ik), this._spriteTrackSrc = Fk) : Fk = {
          src: Zk.clientSideServerUrls.staticUrl + Ik
        }, this._volumeMultiplier = new ak.i, this._volumeMultiplier.setMultiplierType("persistentScalar", Tk), this._howl = (0, lk.countDecodesAs)(new ik.Howl({
          ...Fk,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          Ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Fk) {
          var Xk;
          if (null === (Xk = this._spriteTrackSrc) || void 0 === Xk || !Xk.sprite[Fk]) throw new Error("No such sprite in your spritetrack");
          kk = this._howl.play(Fk)
        } else kk = this._howl.play();
        Ik && this._howl.loop(!0, kk);
        let Tk = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), kk);
        const ik = {
          stop: () => {
            var Fk;
            return null === (Fk = this.liveHowl()) || void 0 === Fk || Fk.stop(kk), ik
          },
          fade: (Fk, Ik, Xk) => {
            var Tk;
            return null === (Tk = this.liveHowl()) || void 0 === Tk || Tk.fade(Fk, Ik, Xk, kk), ik
          },
          rate: Fk => {
            var Ik;
            return null === (Ik = this.liveHowl()) || void 0 === Ik || Ik.rate(Fk, kk), ik
          },
          stopsAtOnce: () => this._howl.playing(kk) && !this._howl._playLock,
          isAlive: () => {
            const Fk = this._howl._soundById(kk);
            return !this._loadFailed && !!Fk && !Fk._ended
          },
          getDurationMs: () => this._howl._soundById(kk) ? 1e3 * this._howl.duration(kk) / this._howl.rate(kk) : 0,
          getVolume: () => Tk * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Tk,
          setRelativeVolume: Fk => {
            var Ik;
            if (Fk > 1) throw new Error("Volume should be <= 1");
            return Tk = Hk.d.get("soundOnFromAd") ? Fk : 0, null === (Ik = this.liveHowl()) || void 0 === Ik || Ik.volume(Math.min(1, Tk * this._volumeMultiplier.getTotalMultipliedVal()), kk), ik
          },
          setPannerAttr: Fk => {
            let {
              coneInnerAngle: Ik,
              coneOuterAngle: Xk = 360,
              coneOuterGain: Tk,
              distanceModel: yk,
              maxDistance: lk,
              panningModel: ak,
              refDistance: qk,
              rolloffFactor: Lk
            } = Fk;
            return this._setPannerAttr({
              id: kk,
              coneInnerAngle: Ik,
              coneOuterAngle: Xk,
              coneOuterGain: Tk,
              distanceModel: yk,
              maxDistance: lk,
              panningModel: ak,
              refDistance: qk,
              rolloffFactor: Lk
            }), ik
          },
          setPosition: Fk => {
            var Ik;
            return null === (Ik = this.liveHowl()) || void 0 === Ik || Ik.pos(Fk[2], Fk[1], Fk[0], kk), ik
          }
        };
        return ik
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, yk.c)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(kk) {
        this._volumeMultiplier.setMultiplierType("globalVolume", kk), this._howl.volume(kk)
      }
      _setPannerAttr(kk) {
        let {
          id: Fk,
          coneInnerAngle: Ik = 360,
          coneOuterAngle: Xk = 360,
          coneOuterGain: Tk = 0,
          distanceModel: ik = "inverse",
          maxDistance: yk = 1e3,
          panningModel: lk = "HRTF",
          refDistance: ak = ek.f,
          rolloffFactor: qk = 1
        } = kk;
        const Lk = this.liveHowl();
        if (null === Lk) return;
        Lk.pannerAttr({
          coneOuterAngle: Xk
        }, Fk);
        const tk = {
          coneInnerAngle: Ik,
          coneOuterAngle: Xk,
          coneOuterGain: Tk,
          distanceModel: ik,
          maxDistance: yk,
          panningModel: lk,
          refDistance: ak,
          rolloffFactor: qk
        };
        Lk.pannerAttr(tk, Fk)
      }
    }
    const Vk = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new Jk.e, wk.g.subscribe("appManagerUpdated|soundVolume", (kk => {
          const Fk = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const Ik of Fk) Ik.setGlobalVolume(kk)
        }))
      }
      play(kk, Fk) {
        var Ik;
        let ik, yk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Ik = (0, jk.e)()) || void 0 === Ik ? void 0 : Ik.oR,
          lk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ek.e,
          ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ek.f,
          Lk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Zk;
        (0, jk.e)() ? ik = !!Array.isArray(yk) || (0, qk.c)(yk) !== (null === (Zk = (0, jk.e)()) || void 0 === Zk ? void 0 : Zk.oR): ik = !1;
        const wk = (0, Xk.j)(kk),
          Hk = this.loadSheet(ik ? this.spatialSheets : this.stereoSheets, wk);
        if (!ik) {
          const Ik = Hk.play(kk, Lk);
          return Ik.setRelativeVolume(Fk), Ik
        }
        const xk = (0, jk.e)(),
          Pk = Array.isArray(yk) ? yk : xk.MJ.OJ(yk),
          sk = xk.MJ.OJ(xk.oR);
        if (!Pk || tk().sqrDist(Pk, sk) > lk * lk) return Qk;
        let Vk;
        if (!Lk) {
          if (!this.spatialVoices.admit({
              group: Kk.has(wk) ? null : (0, Jk.k)(kk),
              loudness: (0, Jk.g)(Fk, tk().BL(Pk, sk), ak),
              startMs: performance.now(),
              getDurationMs: () => {
                var kk, Fk;
                return null !== (kk = null === (Fk = Vk) || void 0 === Fk ? void 0 : Fk.getDurationMs()) && void 0 !== kk ? kk : 0
              },
              isAlive: () => {
                var kk, Fk;
                return null !== (kk = null === (Fk = Vk) || void 0 === Fk ? void 0 : Fk.isAlive()) && void 0 !== kk && kk
              },
              canStop: () => {
                var kk, Fk;
                return null !== (kk = null === (Fk = Vk) || void 0 === Fk ? void 0 : Fk.stopsAtOnce()) && void 0 !== kk && kk
              },
              stop: () => {
                var kk;
                null === (kk = Vk) || void 0 === kk || kk.stop()
              }
            })) return Qk
        }
        return Vk = Hk.play(kk, Lk), Vk.setRelativeVolume(Fk), Vk.setPannerAttr({
          refDistance: ak
        }), Vk.setPosition([Pk[0], Pk[1] + Tk.f.NH * Tk.f.playerEyeToHeightRatio, Pk[2]]), Vk
      }
      preload(kk) {
        this.loadSheet(this.stereoSheets, (0, Xk.j)(kk))
      }
      loadSheet(kk, Fk) {
        let Ik = kk[Fk];
        return Ik || ((0, Pk.e)(Fk), Ik = new sk({
          src: Fk,
          isSoundSprite: !0,
          volumeScalar: 1
        }), Ik.setGlobalVolume(Hk.d.get("soundVolume")), kk[Fk] = Ik), Ik
      }
      freeSheetsAfterGame() {
        for (const kk of [this.stereoSheets, this.spatialSheets])
          for (const [Fk, Ik] of Object.entries(kk)) !xk.e.has(Fk) && Ik.loaded() && (Ik.unloadOnceIdle(), delete kk[Fk])
      }
    }
  },
  36877: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      var Ik, Xk, Tk, ik, yk, lk, ak, qk;
      return kk.name === Fk.name && ((null === (Ik = kk.attributes) || void 0 === Ik || null === (Xk = Ik.customAttributes) || void 0 === Xk ? void 0 : Xk.stackKey) === (null === (Tk = Fk.attributes) || void 0 === Tk || null === (ik = Tk.customAttributes) || void 0 === ik ? void 0 : ik.stackKey) && (!0 !== (null === (yk = kk.attributes) || void 0 === yk || null === (lk = yk.customAttributes) || void 0 === lk ? void 0 : lk.unstackable) && !0 !== (null === (ak = Fk.attributes) || void 0 === ak || null === (qk = ak.customAttributes) || void 0 === qk ? void 0 : qk.unstackable)))
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  },
  36976: (kk, Fk, Ik) => {
    function Xk(kk) {
      return kk.includes("Leaf Bed")
    }

    function Tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Xk(kk)
    }

    function ik(kk) {
      return kk.includes(" Strongbed")
    }

    function yk(kk) {
      return Xk(kk) || Tk(kk) || ik(kk)
    }
    Ik.d(Fk, {
      e: () => yk,
      h: () => Xk,
      i: () => ik,
      l: () => Tk
    })
  },
  36969: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk
    });
    var Xk = Ik(36976),
      Tk = Ik(9183);
    const ik = [],
      yk = [],
      lk = [],
      ak = [];
    for (const Lk of Object.keys(Tk.n))(0, Xk.h)(Lk) ? ik.push(Lk) : (0, Xk.l)(Lk) && yk.push(Lk), (0, Xk.i)(Lk) && lk.push(Lk), (Lk.includes(" Bed Head") || Lk.includes(" Strongbed Head")) && ak.push(Lk);
    const qk = {
      leafBeds: ik,
      woolBeds: yk,
      strongBeds: lk,
      beds: [...ik, ...yk, ...lk],
      bedHeads: ak,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6475: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      f: () => Tk,
      g: () => ak,
      j: () => ik,
      m: () => qk,
      n: () => Xk,
      o: () => lk
    });
    let Xk = function(kk) {
        return kk[kk.DEFAULT = 0] = "DEFAULT", kk[kk.BOAT = 1] = "BOAT", kk[kk.GLIDER = 2] = "GLIDER", kk[kk.BALLOON = 3] = "BALLOON", kk[kk.SLEEPING = 4] = "SLEEPING", kk[kk.RIDING_MOB = 5] = "RIDING_MOB", kk[kk.CAR = 6] = "CAR", kk[kk.HOVERCRAFT = 7] = "HOVERCRAFT", kk
      }({}),
      Tk = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.OBSIDIAN = 1] = "OBSIDIAN", kk[kk.SPEED = 2] = "SPEED", kk
      }({}),
      ik = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.IRON = 1] = "IRON", kk[kk.GOLD = 2] = "GOLD", kk[kk.DIAMOND = 3] = "DIAMOND", kk
      }({}),
      yk = function(kk) {
        return kk[kk.YELLOW = 0] = "YELLOW", kk[kk.WHITE = 1] = "WHITE", kk[kk.RED = 2] = "RED", kk[kk.PURPLE = 3] = "PURPLE", kk[kk.PINK = 4] = "PINK", kk[kk.ORANGE = 5] = "ORANGE", kk[kk.MAGENTA = 6] = "MAGENTA", kk[kk.LIME = 7] = "LIME", kk[kk.LIGHT_GRAY = 8] = "LIGHT_GRAY", kk[kk.LIGHT_BLUE = 9] = "LIGHT_BLUE", kk[kk.GREEN = 10] = "GREEN", kk[kk.GRAY = 11] = "GRAY", kk[kk.CYAN = 12] = "CYAN", kk[kk.BROWN = 13] = "BROWN", kk[kk.BLUE = 14] = "BLUE", kk[kk.BLACK = 15] = "BLACK", kk
      }({}),
      lk = function(kk) {
        return kk[kk.ROTATION_1 = 0] = "ROTATION_1", kk[kk.ROTATION_2 = 1] = "ROTATION_2", kk[kk.ROTATION_3 = 2] = "ROTATION_3", kk[kk.ROTATION_4 = 3] = "ROTATION_4", kk
      }({}),
      ak = function(kk) {
        return kk[kk.KART = 0] = "KART", kk[kk.OFF_ROADER = 1] = "OFF_ROADER", kk[kk.CAR = 2] = "CAR", kk[kk.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", kk[kk.ARMORED_CAR = 4] = "ARMORED_CAR", kk[kk.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", kk[kk.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", kk[kk.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", kk
      }({});
    Xk.DEFAULT, Xk.BOAT, Tk.SPEED, Xk.GLIDER, ik.DIAMOND, Xk.BALLOON, yk.BLACK, Xk.SLEEPING, lk.ROTATION_4, Xk.RIDING_MOB, Xk.CAR, ak.MOONSTONE_MINING_DRILL, Xk.HOVERCRAFT;
    let qk = function(kk) {
      return kk[kk.NORMAL = 0] = "NORMAL", kk[kk.GLIDING = 1] = "GLIDING", kk[kk.FLOATING = 2] = "FLOATING", kk
    }({})
  },
  34139: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);