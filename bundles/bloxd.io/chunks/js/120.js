export const id = 120;
export const ids = [120];
export const modules = {
  36160: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Hk,
      e: () => Ck
    });
    ik(33737);
    var Dk = ik(60),
      fk = ik(1406),
      Sk = ik(1893),
      bk = ik(1922),
      rk = ik(22),
      Pk = ik(2414),
      mk = ik(36164),
      Mk = ik(36167),
      Kk = ik(33723),
      xk = ik(33735),
      nk = ik(33750),
      Uk = ik(1066);
    const Hk = (0, Dk.memo)((function() {
      var kk;
      const {
        isTouchScreen: ek,
        clientEscMenuOptions: ik,
        scriptedCameraFacing: Sk,
        crosshairShownOverride: Hk,
        crosshairGameView: lk
      } = (0, rk.n)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), pk = (0, Pk.e)("gunshotOrigin"), yk = (0, Dk.useRef)(null), Yk = (0, Dk.useRef)(!1), [Lk, Ak] = (0, Dk.useState)(wk);
      (0, fk.c)("cameraZoomSet", Ak), (0, Dk.useEffect)((() => {
        Ak(wk())
      }), []);
      const jk = (0, bk.h)("heldItemAim"),
        dk = jk.gun,
        Vk = (0, nk.d)(),
        Fk = (0, Dk.useRef)(Vk);
      Fk.current = Vk;
      const [uk, qk] = (0, Dk.useState)(!1);
      (0, Dk.useEffect)((() => (0, Mk.g)("crosshairAccuracy", Ck)), []), (0, fk.c)("mouseState", (kk => {
        let {
          isDown: ek
        } = kk;
        Yk.current = ek, yk.current && (yk.current.style.transform = (0, xk.h)(ek, Fk.current.growOnClick)), "shapes" === Fk.current.style && qk(ek)
      }));
      const Ik = (0, Kk.h)(ek, ik.touchActionButtons);
      return (null !== (kk = (0, mk.b)(lk, Hk)) && void 0 !== kk ? kk : (0, mk.f)(jk, Lk > 1, Ik, pk)) ? "movement" === Sk || "cursor" === Sk ? null : (0, Uk.jsxs)(Uk.Fragment, {
        children: [dk && (0, Uk.jsx)(sk, {
          custom: Vk.forGuns && "shapes" === Vk.style ? Vk : null,
          touch: ek
        }), !dk && (0, Uk.jsx)(xk.d, {
          settings: Vk,
          touch: ek,
          pressRef: yk,
          pressed: "shapes" === Vk.style ? uk : Yk.current
        })]
      }) : null
    }));

    function wk() {
      return Sk.gameBridge.lookup("cameraZoom", null)
    }
    const lk = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      pk = {
        current: null
      },
      yk = {
        current: null
      };
    let Yk = 0,
      Lk = 0;

    function Ck(kk) {
      Lk = kk, lk[0].current || pk.current || yk.current ? jk(kk) : Yk = kk
    }

    function Ak(kk) {
      return ((0, mk.d)(kk) - (0, mk.d)(0)) * window.innerHeight / 100
    }

    function jk(kk) {
      var ek;
      if (null === (ek = yk.current) || void 0 === ek || ek.call(yk, Ak(kk)), lk[0].current) {
        const ek = `${(0,mk.d)(kk)}vh`;
        lk[0].current.style.transform = `translateX(calc(0px - ${ek}))`, lk[1].current.style.transform = `translateX(calc(0px + ${ek}))`, lk[2].current.style.transform = `translateY(calc(0px - ${ek}))`, lk[3].current.style.transform = `translateY(calc(0px + ${ek}))`
      }
      pk.current && (pk.current.style.filter = `blur(${Math.round(kk/10)}px)`)
    }

    function sk(kk) {
      let {
        custom: ek,
        touch: ik
      } = kk;
      const Sk = (0, fk.e)("aimingOverlay", "none"),
        bk = "1.2vh",
        rk = "0.3vh";
      (0, Dk.useEffect)((() => {
        Yk && jk(Yk)
      }), []);
      const Pk = (0, Dk.useRef)(null !== ek);
      return (0, Dk.useLayoutEffect)((() => {
        var kk;
        ek ? null === (kk = yk.current) || void 0 === kk || kk.call(yk, Ak(Lk)) : Pk.current && jk(Lk);
        Pk.current = null !== ek
      }), [ek]), (0, Uk.jsxs)(Uk.Fragment, {
        children: ["sniper" === Sk && (0, Uk.jsxs)("div", {
          ref: pk,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, Uk.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, Uk.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, Uk.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, Uk.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, Uk.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Sk ? 0 : 1
          },
          children: [ek && (0, Uk.jsx)(xk.d, {
            settings: ek,
            touch: ik,
            spreadRef: yk
          }), !ek && (0, Uk.jsxs)(Uk.Fragment, {
            children: [(0, Uk.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: bk,
                height: rk,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: lk[0]
            }), (0, Uk.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: bk,
                height: rk,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: lk[1]
            }), (0, Uk.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: rk,
                height: bk,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: lk[2]
            }), (0, Uk.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: rk,
                height: bk,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: lk[3]
            })]
          })]
        })]
      })
    }
  },
  33735: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Hk,
      h: () => Uk
    });
    ik(33737);
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(60),
      bk = ik(33727);

    function rk(kk, ek) {
      return Math.max(1, Math.round(kk * ek))
    }

    function Pk(kk, ek) {
      const ik = ek * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Dk = function(kk, ek) {
          if (kk.lines) return rk(kk.lineThickness, ek) % 2;
          if (kk.dot) return rk(kk.dotSize, ek) % 2;
          return mk(kk, ek) % 2
        }(kk, ek),
        fk = Mk(kk.lineThickness * ik, Dk),
        Sk = rk(kk.lineLength, ik),
        bk = Math.round(kk.gap * ik),
        Pk = kk.outline > 0 ? rk(kk.outline, ik) : 0,
        xk = [];
      if (kk.lines && (xk.push({
          x: fk + bk,
          y: 0,
          w: Sk,
          h: fk,
          arm: "right"
        }), xk.push({
          x: -bk - Sk,
          y: 0,
          w: Sk,
          h: fk,
          arm: "left"
        }), xk.push({
          x: 0,
          y: fk + bk,
          w: fk,
          h: Sk,
          arm: "down"
        }), kk.tStyle || xk.push({
          x: 0,
          y: -bk - Sk,
          w: fk,
          h: Sk,
          arm: "up"
        }), 0 === bk && xk.push({
          x: 0,
          y: 0,
          w: fk,
          h: fk
        })), kk.dot) {
        const ek = Mk(kk.dotSize * ik, Dk),
          Sk = kk.lines && 0 === bk && kk.dotSize > kk.lineThickness ? Math.max(ek, fk + 2) : ek,
          rk = (fk - Sk) / 2;
        xk.push({
          x: rk,
          y: rk,
          w: Sk,
          h: Sk
        })
      }
      const nk = xk.map((kk => ({
        ...kk,
        x: kk.x - Pk,
        y: kk.y - Pk,
        w: kk.w + 2 * Pk,
        h: kk.h + 2 * Pk
      })));
      let Uk = null,
        Hk = null;
      if (kk.circle) {
        const ek = rk(kk.circleThickness, ik),
          Sk = function(kk, ek) {
            return kk + (kk % 2 === ek ? 0 : 1)
          }(mk(kk, ik), Dk),
          bk = (fk - Sk) / 2;
        Uk = Kk(bk, Sk, ek), Pk > 0 && (Hk = Kk(bk - Pk, Sk + 2 * Pk, ek + 2 * Pk))
      }
      return {
        cell: fk,
        fills: xk,
        outlines: Pk > 0 ? nk : [],
        ring: Uk,
        ringOutline: Hk
      }
    }

    function mk(kk, ek) {
      return Math.round(kk.circleRadius * ek * 2 + rk(kk.circleThickness, ek))
    }

    function Mk(kk, ek) {
      return Math.max(2 - ek, 2 * Math.round((kk - ek) / 2) + ek)
    }

    function Kk(kk, ek, ik) {
      const Dk = 2 * ik >= ek - 1;
      return {
        x: kk,
        y: kk,
        size: ek,
        border: Math.min(ik, Math.floor(ek / 2)),
        filled: Dk
      }
    }
    var xk = ik(1066);
    const nk = 1.4;

    function Uk(kk, ek) {
      return kk && ek ? `scale(${nk})` : "scale(1)"
    }

    function Hk(kk) {
      return "classic" === kk.settings.style ? (0, xk.jsx)(pk, {
        ...kk
      }) : (0, xk.jsx)(sk, {
        ...kk
      })
    }
    const wk = .125;

    function lk(kk, ek) {
      const ik = {};
      if (kk.color !== bk.h.color && (ik.color = (0, bk.j)(kk.color)), kk.opacity !== bk.h.opacity && (ik.opacity = kk.opacity / 100), kk.outline !== bk.h.outline || kk.outlineColor !== bk.h.outlineColor) {
        const ek = kk.outline,
          Dk = (0, bk.j)(kk.outlineColor);
        ik.textShadow = ek > 0 ? `-${ek}px 0 ${Dk}, 0 ${ek}px ${Dk}, ${ek}px 0 ${Dk}, 0 -${ek}px ${Dk}` : "none"
      }
      if (kk.size !== bk.h.size) {
        const Dk = kk.size / 100;
        ik.fontSize = ek ? `calc(max(1.3rem, 18px) * ${Dk})` : `calc(1.3rem * ${Dk})`, ik.marginTop = `-${wk}em`, ik.transformOrigin = `50% calc(50% + ${wk}em)`
      }
      return ik
    }

    function pk(kk) {
      let {
        settings: ek,
        touch: ik,
        inPreview: Dk,
        inEditor: Sk,
        pressed: bk = !1,
        pressRef: rk
      } = kk;
      return (0, xk.jsx)("div", {
        className: fk()("Crosshair", {
          Touch: ik,
          CrosshairInPreview: Dk,
          CrosshairInEditor: Sk || Dk
        }),
        ref: rk,
        style: {
          transform: Uk(bk, ek.growOnClick),
          ...lk(ek, ik)
        },
        children: "+"
      })
    }

    function yk(kk, ek) {
      return kk / ek + "px"
    }

    function Yk(kk, ek, ik, Dk) {
      return {
        ...Ak(kk, ek, ik),
        width: yk(kk.w, ik),
        height: yk(kk.h, ik),
        background: Dk
      }
    }

    function Lk(kk, ek, ik) {
      return {
        left: yk(kk.x, ek),
        top: yk(kk.y, ek),
        width: yk(kk.size, ek),
        height: yk(kk.size, ek),
        borderWidth: yk(kk.border, ek),
        borderColor: ik,
        background: kk.filled ? ik : void 0
      }
    }
    const Ck = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Ak(kk, ek, ik) {
      const [Dk, fk] = kk.arm ? Ck[kk.arm] : [0, 0], Sk = Math.round(ek * ik);
      return {
        left: yk(kk.x + Dk * Sk, ik),
        top: yk(kk.y + fk * Sk, ik)
      }
    }

    function jk(kk) {
      return kk.arm ? {
        "data-arm": kk.arm,
        "data-x": kk.x,
        "data-y": kk.y
      } : {}
    }

    function sk(kk) {
      let {
        settings: ek,
        inPreview: ik,
        inEditor: Dk,
        pressed: rk = !1,
        spread: mk,
        spreadRef: Mk
      } = kk;
      const Kk = (0, Sk.useRef)(null),
        {
          box: Uk,
          dpr: Hk
        } = function(kk) {
          const [ek, ik] = (0, Sk.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Sk.useLayoutEffect)((() => {
            const ek = kk.current;
            if (!ek) return;
            const Dk = () => {
              const kk = ek.getBoundingClientRect(),
                Dk = window.devicePixelRatio || 1;
              ik((ek => ek.dpr === Dk && ek.box.left === kk.left && ek.box.top === kk.top && ek.box.width === kk.width && ek.box.height === kk.height ? ek : {
                box: {
                  left: kk.left,
                  top: kk.top,
                  width: kk.width,
                  height: kk.height
                },
                dpr: Dk
              }))
            };
            Dk();
            const fk = new ResizeObserver(Dk);
            return fk.observe(ek), window.addEventListener("resize", Dk), window.addEventListener("scroll", Dk, !0), () => {
              fk.disconnect(), window.removeEventListener("resize", Dk), window.removeEventListener("scroll", Dk, !0)
            }
          }), [kk]), ek
        }(Kk),
        wk = (0, Sk.useRef)(Hk);
      wk.current = Hk;
      const lk = Pk(ek, Hk, rk && ek.growOnClick ? nk : 1),
        pk = function(kk, ek, ik) {
          const Dk = Math.round((kk.left + kk.width / 2) * ik - ek / 2),
            fk = Math.round((kk.top + kk.height / 2) * ik - ek / 2);
          return {
            x: Dk / ik - kk.left,
            y: fk / ik - kk.top
          }
        }(Uk, lk.cell, Hk),
        yk = (0, bk.j)(ek.color),
        Ck = (0, bk.j)(ek.outlineColor),
        sk = (0, Sk.useRef)(0);
      (0, Sk.useLayoutEffect)((() => {
        if (Mk) return Mk.current = kk => {
          var ek;
          sk.current = kk, null === (ek = Kk.current) || void 0 === ek || ek.querySelectorAll("[data-arm]").forEach((ek => {
            Object.assign(ek.style, Ak(function(kk) {
              return {
                x: Number(kk.dataset.x),
                y: Number(kk.dataset.y),
                arm: kk.dataset.arm
              }
            }(ek), kk, wk.current))
          }))
        }, () => {
          Mk.current = null
        }
      }), [Mk]);
      const dk = null !== mk && void 0 !== mk ? mk : sk.current;
      return (0, xk.jsx)("div", {
        ref: Kk,
        className: fk()("CrosshairShapes", {
          CrosshairInPreview: ik,
          CrosshairInEditor: Dk || ik,
          CrosshairSpreads: void 0 !== Mk
        }),
        children: (0, xk.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: pk.x,
            top: pk.y,
            opacity: ek.opacity / 100
          },
          children: (0, xk.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [lk.ringOutline && (0, xk.jsx)("div", {
              className: "CrosshairRing",
              style: Lk(lk.ringOutline, Hk, Ck)
            }), lk.outlines.map(((kk, ek) => (0, xk.jsx)("div", {
              className: "CrosshairPart",
              ...jk(kk),
              style: Yk(kk, dk, Hk, Ck)
            }, `o${ek}`))), lk.ring && (0, xk.jsx)("div", {
              className: "CrosshairRing",
              style: Lk(lk.ring, Hk, yk)
            }), lk.fills.map(((kk, ek) => (0, xk.jsx)("div", {
              className: "CrosshairPart",
              ...jk(kk),
              style: Yk(kk, dk, Hk, yk)
            }, `f${ek}`)))]
          })
        })
      })
    }
  },
  33743: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Mk,
      f: () => wk,
      h: () => Hk
    });
    var Dk = ik(33727);
    const fk = "XH1-",
      Sk = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      bk = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      rk = ["color", "outlineColor"],
      Pk = 1 + 3 * rk.length + bk.length + 1,
      mk = Math.ceil(8 * Pk / Math.log2(62)),
      Mk = fk.length + mk;

    function Kk(kk) {
      let ek = 90;
      for (const ik of kk) ek = 31 * ek + ik & 255;
      return ek
    }
    const xk = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      nk = BigInt(xk.length);

    function Uk(kk, ek) {
      let ik = 0n;
      for (const fk of kk) {
        const kk = xk.indexOf(fk);
        if (kk < 0) return null;
        ik = ik * nk + BigInt(kk)
      }
      if (ik >> BigInt(8 * ek) !== 0n) return null;
      const Dk = [];
      for (let fk = 0; fk < ek; fk++) Dk.unshift(Number(0xffn & ik)), ik >>= 8n;
      return Dk
    }

    function Hk(kk) {
      let ek = "shapes" === kk.style ? 1 : 0;
      Sk.forEach(((ik, Dk) => {
        kk[ik] && (ek |= 1 << Dk + 1)
      }));
      const ik = [ek];
      for (const fk of rk) {
        const ek = (0, Dk.i)(fk, kk[fk]);
        ik.push(ek >> 16 & 255, ek >> 8 & 255, 255 & ek)
      }
      for (const fk of bk) {
        const {
          min: ek,
          step: Sk
        } = Dk.d[fk];
        ik.push(Math.round(((0, Dk.i)(fk, kk[fk]) - ek) / Sk))
      }
      return ik.push(Kk(ik)), fk + function(kk, ek) {
        let ik = 0n;
        for (const fk of kk) ik = ik << 8n | BigInt(fk);
        let Dk = "";
        for (let fk = 0; fk < ek; fk++) Dk = xk[Number(ik % nk)] + Dk, ik /= nk;
        return Dk
      }(ik, mk)
    }

    function wk(kk) {
      for (const ek of kk.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${mk}})`, "gi"))) {
        const kk = lk(Uk(ek[1], Pk));
        if (kk) return kk
      }
      return null
    }

    function lk(kk) {
      if (!kk || kk.length !== Pk || Kk(kk.slice(0, -1)) !== kk[kk.length - 1]) return null;
      const ek = kk[0],
        ik = {
          ...Dk.h,
          style: 1 & ek ? "shapes" : "classic"
        };
      Sk.forEach(((kk, Dk) => {
        ik[kk] = 0 !== (ek & 1 << Dk + 1)
      }));
      let fk = 1;
      for (const Dk of rk) ik[Dk] = kk[fk] << 16 | kk[fk + 1] << 8 | kk[fk + 2], fk += 3;
      for (const Sk of bk) {
        const {
          min: ek,
          step: bk
        } = Dk.d[Sk];
        ik[Sk] = (0, Dk.i)(Sk, ek + kk[fk] * bk), fk++
      }
      return ik
    }
  },
  33727: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      h: () => fk,
      i: () => Sk,
      j: () => mk,
      l: () => Pk,
      p: () => Mk,
      q: () => rk,
      t: () => bk
    });
    const Dk = {
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
      fk = Object.freeze({
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

    function Sk(kk, ek) {
      var ik;
      const {
        min: Sk,
        max: bk,
        step: rk
      } = Dk[kk];
      if (!Number.isFinite(ek)) return fk[kk];
      const Pk = (null !== (ik = String(rk).split(".")[1]) && void 0 !== ik ? ik : "").length,
        mk = Number((Math.round(ek / rk) * rk).toFixed(Pk));
      return Math.min(bk, Math.max(Sk, mk))
    }

    function bk(kk, ek, ik) {
      const Dk = "number" === typeof ik ? Sk(ek, ik) : ik;
      return {
        ...kk,
        [ek]: Dk
      }
    }

    function rk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(fk).every((Dk => ik.includes(Dk) || kk[Dk] === ek[Dk]))
    }

    function Pk(kk) {
      return rk(kk, fk)
    }

    function mk(kk) {
      return `#${kk.toString(16).padStart(6,"0")}`
    }

    function Mk(kk) {
      const ek = /^#?([0-9a-f]{6})$/i.exec(kk.trim());
      return ek ? parseInt(ek[1], 16) : null
    }
  },
  33750: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk,
      d: () => xk
    });
    var Dk = ik(60),
      fk = ik(38),
      Sk = ik(33743),
      bk = ik(33727);
    const rk = "crosshairCode";
    let Pk = null;
    const mk = new Set;

    function Mk() {
      if (null === Pk) {
        var kk;
        const ek = fk.f.getItem(rk);
        Pk = null !== (kk = "string" === typeof ek ? (0, Sk.f)(ek) : null) && void 0 !== kk ? kk : bk.h
      }
      return Pk
    }

    function Kk(kk) {
      Pk = kk, (0, bk.l)(kk) ? fk.f.removeItem(rk) : fk.f.setItem(rk, (0, Sk.h)(kk));
      for (const ek of mk) ek()
    }

    function xk() {
      const [kk, ek] = (0, Dk.useState)(Mk);
      return (0, Dk.useEffect)((() => {
        const kk = () => {
          ek(Mk())
        };
        return kk(), ik = kk, mk.add(ik), () => {
          mk.delete(ik)
        };
        var ik
      }), []), kk
    }
  },
  36348: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk,
      c: () => Pk,
      f: () => bk
    });
    var Dk = ik(594),
      fk = ik(2704);

    function Sk(kk) {
      return kk === (0, fk.e)().ykk ? (0, fk.e)().Qq : kk
    }

    function bk(kk) {
      return !(0, Dk.F)(kk) && Sk(kk) === (0, fk.e)().Qq
    }
    const rk = "gravity";

    function Pk() {
      return (0, fk.e)().physics[rk][1]
    }
  },
  36335: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Ak
    });
    var Dk = ik(36341),
      fk = ik(189),
      Sk = ik(4799),
      bk = ik(36346),
      rk = ik(35966),
      Pk = ik(36376),
      mk = ik(36348),
      Mk = ik(330),
      Kk = ik.n(Mk),
      xk = ik(1177),
      nk = ik(2704),
      Uk = ik(36370),
      Hk = ik(26),
      wk = ik(22),
      lk = ik(36351),
      pk = ik(36354),
      yk = ik(36361);
    const Yk = new Set(["note"]);
    const Lk = {
      stop: () => Lk,
      fade: () => Lk,
      rate: () => Lk,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Lk,
      setPannerAttr: () => Lk,
      setPosition: () => Lk
    };
    class Ck {
      constructor(kk) {
        let ek, {
          src: ik,
          volumeScalar: fk,
          isSoundSprite: bk
        } = kk;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, bk ? (ek = (0, Dk.j)(ik), this._spriteTrackSrc = ek) : ek = {
          src: xk.clientSideServerUrls.staticUrl + ik
        }, this._volumeMultiplier = new Pk.j, this._volumeMultiplier.setMultiplierType("persistentScalar", fk), this._howl = (0, rk.countDecodesAs)(new Sk.Howl({
          ...ek,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let kk, ek = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (ek) {
          var Dk;
          if (null === (Dk = this._spriteTrackSrc) || void 0 === Dk || !Dk.sprite[ek]) throw new Error("No such sprite in your spritetrack");
          kk = this._howl.play(ek)
        } else kk = this._howl.play();
        ik && this._howl.loop(!0, kk);
        let fk = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), kk);
        const Sk = {
          stop: () => {
            var ek;
            return null === (ek = this.liveHowl()) || void 0 === ek || ek.stop(kk), Sk
          },
          fade: (ek, ik, Dk) => {
            var fk;
            return null === (fk = this.liveHowl()) || void 0 === fk || fk.fade(ek, ik, Dk, kk), Sk
          },
          rate: ek => {
            var ik;
            return null === (ik = this.liveHowl()) || void 0 === ik || ik.rate(ek, kk), Sk
          },
          stopsAtOnce: () => this._howl.playing(kk) && !this._howl._playLock,
          isAlive: () => {
            const ek = this._howl._soundById(kk);
            return !this._loadFailed && !!ek && !ek._ended
          },
          getDurationMs: () => this._howl._soundById(kk) ? 1e3 * this._howl.duration(kk) / this._howl.rate(kk) : 0,
          getVolume: () => fk * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => fk,
          setRelativeVolume: ek => {
            var ik;
            if (ek > 1) throw new Error("Volume should be <= 1");
            return fk = wk.b.get("soundOnFromAd") ? ek : 0, null === (ik = this.liveHowl()) || void 0 === ik || ik.volume(Math.min(1, fk * this._volumeMultiplier.getTotalMultipliedVal()), kk), Sk
          },
          setPannerAttr: ek => {
            let {
              coneInnerAngle: ik,
              coneOuterAngle: Dk = 360,
              coneOuterGain: fk,
              distanceModel: bk,
              maxDistance: rk,
              panningModel: Pk,
              refDistance: mk,
              rolloffFactor: Mk
            } = ek;
            return this._setPannerAttr({
              id: kk,
              coneInnerAngle: ik,
              coneOuterAngle: Dk,
              coneOuterGain: fk,
              distanceModel: bk,
              maxDistance: rk,
              panningModel: Pk,
              refDistance: mk,
              rolloffFactor: Mk
            }), Sk
          },
          setPosition: ek => {
            var ik;
            return null === (ik = this.liveHowl()) || void 0 === ik || ik.pos(ek[2], ek[1], ek[0], kk), Sk
          }
        };
        return Sk
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, bk.b)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(kk) {
        this._volumeMultiplier.setMultiplierType("globalVolume", kk), this._howl.volume(kk)
      }
      _setPannerAttr(kk) {
        let {
          id: ek,
          coneInnerAngle: ik = 360,
          coneOuterAngle: Dk = 360,
          coneOuterGain: fk = 0,
          distanceModel: Sk = "inverse",
          maxDistance: bk = 1e3,
          panningModel: rk = "HRTF",
          refDistance: Pk = Uk.k,
          rolloffFactor: mk = 1
        } = kk;
        const Mk = this.liveHowl();
        if (null === Mk) return;
        Mk.pannerAttr({
          coneOuterAngle: Dk
        }, ek);
        const Kk = {
          coneInnerAngle: ik,
          coneOuterAngle: Dk,
          coneOuterGain: fk,
          distanceModel: Sk,
          maxDistance: bk,
          panningModel: rk,
          refDistance: Pk,
          rolloffFactor: mk
        };
        Mk.pannerAttr(Kk, ek)
      }
    }
    const Ak = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new lk.b, Hk.j.subscribe("appManagerUpdated|soundVolume", (kk => {
          const ek = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const ik of ek) ik.setGlobalVolume(kk)
        }))
      }
      play(kk, ek) {
        var ik;
        let Sk, bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (ik = (0, nk.e)()) || void 0 === ik ? void 0 : ik.Qq,
          rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Uk.h,
          Pk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Uk.k,
          Mk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var xk;
        (0, nk.e)() ? Sk = !!Array.isArray(bk) || (0, mk.b)(bk) !== (null === (xk = (0, nk.e)()) || void 0 === xk ? void 0 : xk.Qq): Sk = !1;
        const Hk = (0, Dk.n)(kk),
          wk = this.loadSheet(Sk ? this.spatialSheets : this.stereoSheets, Hk);
        if (!Sk) {
          const ik = wk.play(kk, Mk);
          return ik.setRelativeVolume(ek), ik
        }
        const pk = (0, nk.e)(),
          yk = Array.isArray(bk) ? bk : pk.mY.vy(bk),
          Ck = pk.mY.vy(pk.Qq);
        if (!yk || Kk().sqrDist(yk, Ck) > rk * rk) return Lk;
        let Ak;
        if (!Mk) {
          if (!this.spatialVoices.admit({
              group: Yk.has(Hk) ? null : (0, lk.e)(kk),
              loudness: (0, lk.d)(ek, Kk().Vb(yk, Ck), Pk),
              startMs: performance.now(),
              getDurationMs: () => {
                var kk, ek;
                return null !== (kk = null === (ek = Ak) || void 0 === ek ? void 0 : ek.getDurationMs()) && void 0 !== kk ? kk : 0
              },
              isAlive: () => {
                var kk, ek;
                return null !== (kk = null === (ek = Ak) || void 0 === ek ? void 0 : ek.isAlive()) && void 0 !== kk && kk
              },
              canStop: () => {
                var kk, ek;
                return null !== (kk = null === (ek = Ak) || void 0 === ek ? void 0 : ek.stopsAtOnce()) && void 0 !== kk && kk
              },
              stop: () => {
                var kk;
                null === (kk = Ak) || void 0 === kk || kk.stop()
              }
            })) return Lk
        }
        return Ak = wk.play(kk, Mk), Ak.setRelativeVolume(ek), Ak.setPannerAttr({
          refDistance: Pk
        }), Ak.setPosition([yk[0], yk[1] + fk.g.Qp * fk.g.playerEyeToHeightRatio, yk[2]]), Ak
      }
      preload(kk) {
        this.loadSheet(this.stereoSheets, (0, Dk.n)(kk))
      }
      loadSheet(kk, ek) {
        let ik = kk[ek];
        return ik || ((0, yk.c)(ek), ik = new Ck({
          src: ek,
          isSoundSprite: !0,
          volumeScalar: 1
        }), ik.setGlobalVolume(wk.b.get("soundVolume")), kk[ek] = ik), ik
      }
      freeSheetsAfterGame() {
        for (const kk of [this.stereoSheets, this.spatialSheets])
          for (const [ek, ik] of Object.entries(kk)) !pk.c.has(ek) && ik.loaded() && (ik.unloadOnceIdle(), delete kk[ek])
      }
    }
  },
  36435: (kk, ek, ik) => {
    function Dk(kk, ek) {
      var ik, Dk, fk, Sk, bk, rk, Pk, mk;
      return kk.name === ek.name && ((null === (ik = kk.attributes) || void 0 === ik || null === (Dk = ik.customAttributes) || void 0 === Dk ? void 0 : Dk.stackKey) === (null === (fk = ek.attributes) || void 0 === fk || null === (Sk = fk.customAttributes) || void 0 === Sk ? void 0 : Sk.stackKey) && (!0 !== (null === (bk = kk.attributes) || void 0 === bk || null === (rk = bk.customAttributes) || void 0 === rk ? void 0 : rk.unstackable) && !0 !== (null === (Pk = ek.attributes) || void 0 === Pk || null === (mk = Pk.customAttributes) || void 0 === mk ? void 0 : mk.unstackable)))
    }
    ik.d(ek, {
      b: () => Dk
    })
  },
  36530: (kk, ek, ik) => {
    function Dk(kk) {
      return kk.includes("Leaf Bed")
    }

    function fk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Dk(kk)
    }

    function Sk(kk) {
      return kk.includes(" Strongbed")
    }

    function bk(kk) {
      return Dk(kk) || fk(kk) || Sk(kk)
    }
    ik.d(ek, {
      d: () => bk,
      h: () => Dk,
      i: () => Sk,
      l: () => fk
    })
  },
  36528: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk
    });
    var Dk = ik(36530),
      fk = ik(9020);
    const Sk = [],
      bk = [],
      rk = [],
      Pk = [];
    for (const Mk of Object.keys(fk.j))(0, Dk.h)(Mk) ? Sk.push(Mk) : (0, Dk.l)(Mk) && bk.push(Mk), (0, Dk.i)(Mk) && rk.push(Mk), (Mk.includes(" Bed Head") || Mk.includes(" Strongbed Head")) && Pk.push(Mk);
    const mk = {
      leafBeds: Sk,
      woolBeds: bk,
      strongBeds: rk,
      beds: [...Sk, ...bk, ...rk],
      bedHeads: Pk,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6328: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      f: () => fk,
      g: () => Pk,
      h: () => Sk,
      l: () => mk,
      o: () => Dk,
      r: () => rk
    });
    let Dk = function(kk) {
        return kk[kk.DEFAULT = 0] = "DEFAULT", kk[kk.BOAT = 1] = "BOAT", kk[kk.GLIDER = 2] = "GLIDER", kk[kk.BALLOON = 3] = "BALLOON", kk[kk.SLEEPING = 4] = "SLEEPING", kk[kk.RIDING_MOB = 5] = "RIDING_MOB", kk[kk.CAR = 6] = "CAR", kk[kk.HOVERCRAFT = 7] = "HOVERCRAFT", kk
      }({}),
      fk = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.OBSIDIAN = 1] = "OBSIDIAN", kk[kk.SPEED = 2] = "SPEED", kk
      }({}),
      Sk = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.IRON = 1] = "IRON", kk[kk.GOLD = 2] = "GOLD", kk[kk.DIAMOND = 3] = "DIAMOND", kk
      }({}),
      bk = function(kk) {
        return kk[kk.YELLOW = 0] = "YELLOW", kk[kk.WHITE = 1] = "WHITE", kk[kk.RED = 2] = "RED", kk[kk.PURPLE = 3] = "PURPLE", kk[kk.PINK = 4] = "PINK", kk[kk.ORANGE = 5] = "ORANGE", kk[kk.MAGENTA = 6] = "MAGENTA", kk[kk.LIME = 7] = "LIME", kk[kk.LIGHT_GRAY = 8] = "LIGHT_GRAY", kk[kk.LIGHT_BLUE = 9] = "LIGHT_BLUE", kk[kk.GREEN = 10] = "GREEN", kk[kk.GRAY = 11] = "GRAY", kk[kk.CYAN = 12] = "CYAN", kk[kk.BROWN = 13] = "BROWN", kk[kk.BLUE = 14] = "BLUE", kk[kk.BLACK = 15] = "BLACK", kk
      }({}),
      rk = function(kk) {
        return kk[kk.ROTATION_1 = 0] = "ROTATION_1", kk[kk.ROTATION_2 = 1] = "ROTATION_2", kk[kk.ROTATION_3 = 2] = "ROTATION_3", kk[kk.ROTATION_4 = 3] = "ROTATION_4", kk
      }({}),
      Pk = function(kk) {
        return kk[kk.KART = 0] = "KART", kk[kk.OFF_ROADER = 1] = "OFF_ROADER", kk[kk.CAR = 2] = "CAR", kk[kk.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", kk[kk.ARMORED_CAR = 4] = "ARMORED_CAR", kk[kk.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", kk[kk.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", kk[kk.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", kk
      }({});
    Dk.DEFAULT, Dk.BOAT, fk.SPEED, Dk.GLIDER, Sk.DIAMOND, Dk.BALLOON, bk.BLACK, Dk.SLEEPING, rk.ROTATION_4, Dk.RIDING_MOB, Dk.CAR, Pk.MOONSTONE_MINING_DRILL, Dk.HOVERCRAFT;
    let mk = function(kk) {
      return kk[kk.NORMAL = 0] = "NORMAL", kk[kk.GLIDING = 1] = "GLIDING", kk[kk.FLOATING = 2] = "FLOATING", kk
    }({})
  },
  33737: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);