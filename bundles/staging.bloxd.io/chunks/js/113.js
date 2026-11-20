export const id = 113;
export const ids = [113];
export const modules = {
  36454: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => pu,
      g: () => Cu
    });
    yu(9025);
    var Eu = yu(64),
      Ku = yu(1400),
      Qu = yu(1855),
      mu = yu(1899),
      Ju = yu(27),
      Nu = yu(2335),
      Xu = yu(36457),
      Vu = yu(36459),
      ru = yu(8991),
      Bu = yu(9023),
      xu = yu(9039),
      Su = yu(1079);
    const pu = (0, Eu.memo)((function() {
      var uu;
      const {
        isTouchScreen: Ru,
        clientEscMenuOptions: yu,
        scriptedCameraFacing: Qu,
        crosshairShownOverride: pu,
        crosshairGameView: Wu
      } = (0, Ju.j)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), ju = (0, Nu.g)("gunshotOrigin"), Hu = (0, Eu.useRef)(null), du = (0, Eu.useRef)(!1), [bu, ku] = (0, Eu.useState)(Tu);
      (0, Ku.e)("cameraZoomSet", ku), (0, Eu.useEffect)((() => {
        ku(Tu())
      }), []);
      const eu = (0, mu.i)("heldItemAim"),
        Du = eu.gun,
        Mu = (0, xu.c)(),
        Iu = (0, Eu.useRef)(Mu);
      Iu.current = Mu;
      const [Gu, Uu] = (0, Eu.useState)(!1);
      (0, Eu.useEffect)((() => (0, Vu.f)("crosshairAccuracy", Cu)), []), (0, Ku.e)("mouseState", (uu => {
        let {
          isDown: Ru
        } = uu;
        du.current = Ru, Hu.current && (Hu.current.style.transform = (0, Bu.e)(Ru, Iu.current.growOnClick)), "shapes" === Iu.current.style && Uu(Ru)
      }));
      const nu = (0, ru.f)(Ru, yu.touchActionButtons);
      return (null !== (uu = (0, Xu.c)(Wu, pu)) && void 0 !== uu ? uu : (0, Xu.g)(eu, bu > 1, nu, ju)) ? "movement" === Qu || "cursor" === Qu ? null : (0, Su.jsxs)(Su.Fragment, {
        children: [Du && (0, Su.jsx)(Au, {
          custom: Mu.forGuns && "shapes" === Mu.style ? Mu : null,
          touch: Ru
        }), !Du && (0, Su.jsx)(Bu.b, {
          settings: Mu,
          touch: Ru,
          pressRef: Hu,
          pressed: "shapes" === Mu.style ? Gu : du.current
        })]
      }) : null
    }));

    function Tu() {
      return Qu.gameBridge.lookup("cameraZoom", null)
    }
    const Wu = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      ju = {
        current: null
      },
      Hu = {
        current: null
      };
    let du = 0,
      bu = 0;

    function Cu(uu) {
      bu = uu, Wu[0].current || ju.current || Hu.current ? eu(uu) : du = uu
    }

    function ku(uu) {
      return ((0, Xu.e)(uu) - (0, Xu.e)(0)) * window.innerHeight / 100
    }

    function eu(uu) {
      var Ru;
      if (null === (Ru = Hu.current) || void 0 === Ru || Ru.call(Hu, ku(uu)), Wu[0].current) {
        const Ru = `${(0,Xu.e)(uu)}vh`;
        Wu[0].current.style.transform = `translateX(calc(0px - ${Ru}))`, Wu[1].current.style.transform = `translateX(calc(0px + ${Ru}))`, Wu[2].current.style.transform = `translateY(calc(0px - ${Ru}))`, Wu[3].current.style.transform = `translateY(calc(0px + ${Ru}))`
      }
      ju.current && (ju.current.style.filter = `blur(${Math.round(uu/10)}px)`)
    }

    function Au(uu) {
      let {
        custom: Ru,
        touch: yu
      } = uu;
      const Qu = (0, Ku.h)("aimingOverlay", "none"),
        mu = "1.2vh",
        Ju = "0.3vh";
      (0, Eu.useEffect)((() => {
        du && eu(du)
      }), []);
      const Nu = (0, Eu.useRef)(null !== Ru);
      return (0, Eu.useLayoutEffect)((() => {
        var uu;
        Ru ? null === (uu = Hu.current) || void 0 === uu || uu.call(Hu, ku(bu)) : Nu.current && eu(bu);
        Nu.current = null !== Ru
      }), [Ru]), (0, Su.jsxs)(Su.Fragment, {
        children: ["sniper" === Qu && (0, Su.jsxs)("div", {
          ref: ju,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, Su.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, Su.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, Su.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, Su.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, Su.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Qu ? 0 : 1
          },
          children: [Ru && (0, Su.jsx)(Bu.b, {
            settings: Ru,
            touch: yu,
            spreadRef: Hu
          }), !Ru && (0, Su.jsxs)(Su.Fragment, {
            children: [(0, Su.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: mu,
                height: Ju,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Wu[0]
            }), (0, Su.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: mu,
                height: Ju,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Wu[1]
            }), (0, Su.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ju,
                height: mu,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Wu[2]
            }), (0, Su.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ju,
                height: mu,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Wu[3]
            })]
          })]
        })]
      })
    }
  },
  9023: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Bu,
      e: () => ru
    });
    yu(9025);
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(64),
      mu = yu(8996);

    function Ju(uu, Ru) {
      return Math.max(1, Math.round(uu * Ru))
    }

    function Nu(uu, Ru, yu) {
      const Eu = 2 * yu >= Ru - 1;
      return {
        x: uu,
        y: uu,
        size: Ru,
        border: Math.min(yu, Math.floor(Ru / 2)),
        filled: Eu
      }
    }
    var Xu = yu(1079);
    const Vu = 1.4;

    function ru(uu, Ru) {
      return uu && Ru ? `scale(${Vu})` : "scale(1)"
    }

    function Bu(uu) {
      return "classic" === uu.settings.style ? (0, Xu.jsx)(pu, {
        ...uu
      }) : (0, Xu.jsx)(Cu, {
        ...uu
      })
    }
    const xu = .125;

    function Su(uu, Ru) {
      const yu = {};
      if (uu.color !== mu.h.color && (yu.color = (0, mu.m)(uu.color)), uu.opacity !== mu.h.opacity && (yu.opacity = uu.opacity / 100), uu.outline !== mu.h.outline || uu.outlineColor !== mu.h.outlineColor) {
        const Ru = uu.outline,
          Eu = (0, mu.m)(uu.outlineColor);
        yu.textShadow = Ru > 0 ? `-${Ru}px 0 ${Eu}, 0 ${Ru}px ${Eu}, ${Ru}px 0 ${Eu}, 0 -${Ru}px ${Eu}` : "none"
      }
      if (uu.size !== mu.h.size) {
        const Eu = uu.size / 100;
        yu.fontSize = Ru ? `calc(max(1.3rem, 18px) * ${Eu})` : `calc(1.3rem * ${Eu})`, yu.marginTop = `-${xu}em`, yu.transformOrigin = `50% calc(50% + ${xu}em)`
      }
      return yu
    }

    function pu(uu) {
      let {
        settings: Ru,
        touch: yu,
        inPreview: Eu,
        inEditor: Qu,
        pressed: mu = !1,
        pressRef: Ju
      } = uu;
      return (0, Xu.jsx)("div", {
        className: Ku()("Crosshair", {
          Touch: yu,
          CrosshairInPreview: Eu,
          CrosshairInEditor: Qu || Eu
        }),
        ref: Ju,
        style: {
          transform: ru(mu, Ru.growOnClick),
          ...Su(Ru, yu)
        },
        children: "+"
      })
    }

    function Tu(uu, Ru) {
      return uu / Ru + "px"
    }

    function Wu(uu, Ru, yu, Eu) {
      return {
        ...du(uu, Ru, yu),
        width: Tu(uu.w, yu),
        height: Tu(uu.h, yu),
        background: Eu
      }
    }

    function ju(uu, Ru, yu) {
      return {
        left: Tu(uu.x, Ru),
        top: Tu(uu.y, Ru),
        width: Tu(uu.size, Ru),
        height: Tu(uu.size, Ru),
        borderWidth: Tu(uu.border, Ru),
        borderColor: yu,
        background: uu.filled ? yu : void 0
      }
    }
    const Hu = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function du(uu, Ru, yu) {
      const [Eu, Ku] = uu.arm ? Hu[uu.arm] : [0, 0], Qu = Math.round(Ru * yu);
      return {
        left: Tu(uu.x + Eu * Qu, yu),
        top: Tu(uu.y + Ku * Qu, yu)
      }
    }

    function bu(uu) {
      return uu.arm ? {
        "data-arm": uu.arm,
        "data-x": uu.x,
        "data-y": uu.y
      } : {}
    }

    function Cu(uu) {
      let {
        settings: Ru,
        inPreview: yu,
        inEditor: Eu,
        pressed: ru = !1,
        spread: Bu,
        spreadRef: xu
      } = uu;
      const Su = (0, Qu.useRef)(null),
        {
          box: pu,
          dpr: Tu
        } = function(uu) {
          const [Ru, yu] = (0, Qu.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Qu.useLayoutEffect)((() => {
            const Ru = uu.current;
            if (!Ru) return;
            const Eu = () => {
              const uu = Ru.getBoundingClientRect(),
                Eu = window.devicePixelRatio || 1;
              yu((Ru => Ru.dpr === Eu && Ru.box.left === uu.left && Ru.box.top === uu.top && Ru.box.width === uu.width && Ru.box.height === uu.height ? Ru : {
                box: {
                  left: uu.left,
                  top: uu.top,
                  width: uu.width,
                  height: uu.height
                },
                dpr: Eu
              }))
            };
            Eu();
            const Ku = new ResizeObserver(Eu);
            return Ku.observe(Ru), window.addEventListener("resize", Eu), window.addEventListener("scroll", Eu, !0), () => {
              Ku.disconnect(), window.removeEventListener("resize", Eu), window.removeEventListener("scroll", Eu, !0)
            }
          }), [uu]), Ru
        }(Su),
        Hu = (0, Qu.useRef)(Tu);
      Hu.current = Tu;
      const Cu = function(uu, Ru) {
          const yu = Ju(uu.lineThickness, Ru),
            Eu = Ju(uu.lineLength, Ru),
            Ku = Math.round(uu.gap * Ru),
            Qu = Ju(uu.dotSize, Ru),
            mu = uu.outline > 0 ? Ju(uu.outline, Ru) : 0,
            Xu = Ju(uu.circleThickness, Ru),
            Vu = uu.circle ? Math.round(uu.circleRadius * Ru * 2 + Xu) : 0,
            ru = function(uu, Ru, yu, Eu) {
              return uu.lines ? Ru : uu.dot ? yu : uu.circle && Eu % 2 === 0 ? 2 : 1
            }(uu, yu, Qu, Vu),
            Bu = [];
          if (uu.lines && (Bu.push({
              x: ru + Ku,
              y: 0,
              w: Eu,
              h: yu,
              arm: "right"
            }), Bu.push({
              x: -Ku - Eu,
              y: 0,
              w: Eu,
              h: yu,
              arm: "left"
            }), Bu.push({
              x: 0,
              y: ru + Ku,
              w: yu,
              h: Eu,
              arm: "down"
            }), uu.tStyle || Bu.push({
              x: 0,
              y: -Ku - Eu,
              w: yu,
              h: Eu,
              arm: "up"
            }), 0 === Ku && Bu.push({
              x: 0,
              y: 0,
              w: yu,
              h: yu
            })), uu.dot) {
            const uu = Math.floor((ru - Qu) / 2);
            Bu.push({
              x: uu,
              y: uu,
              w: Qu,
              h: Qu
            })
          }
          const xu = Bu.map((uu => ({
            ...uu,
            x: uu.x - mu,
            y: uu.y - mu,
            w: uu.w + 2 * mu,
            h: uu.h + 2 * mu
          })));
          let Su = null,
            pu = null;
          if (uu.circle) {
            const uu = Vu + ((Vu - ru) % 2 === 0 ? 0 : 1),
              Ru = (ru - uu) / 2;
            Su = Nu(Ru, uu, Xu), mu > 0 && (pu = Nu(Ru - mu, uu + 2 * mu, Xu + 2 * mu))
          }
          return {
            cell: ru,
            fills: Bu,
            outlines: mu > 0 ? xu : [],
            ring: Su,
            ringOutline: pu
          }
        }(ru && Ru.growOnClick ? function(uu, Ru) {
          return {
            ...uu,
            outline: uu.outline * Ru,
            lineLength: uu.lineLength * Ru,
            lineThickness: uu.lineThickness * Ru,
            gap: uu.gap * Ru,
            dotSize: uu.dotSize * Ru,
            circleRadius: uu.circleRadius * Ru,
            circleThickness: uu.circleThickness * Ru
          }
        }(Ru, Vu) : Ru, Tu),
        ku = function(uu, Ru, yu) {
          const Eu = Math.round((uu.left + uu.width / 2) * yu - Ru / 2),
            Ku = Math.round((uu.top + uu.height / 2) * yu - Ru / 2);
          return {
            x: Eu / yu - uu.left,
            y: Ku / yu - uu.top
          }
        }(pu, Cu.cell, Tu),
        eu = (0, mu.m)(Ru.color),
        Au = (0, mu.m)(Ru.outlineColor),
        Du = (0, Qu.useRef)(0);
      (0, Qu.useLayoutEffect)((() => {
        if (xu) return xu.current = uu => {
          var Ru;
          Du.current = uu, null === (Ru = Su.current) || void 0 === Ru || Ru.querySelectorAll("[data-arm]").forEach((Ru => {
            Object.assign(Ru.style, du(function(uu) {
              return {
                x: Number(uu.dataset.x),
                y: Number(uu.dataset.y),
                arm: uu.dataset.arm
              }
            }(Ru), uu, Hu.current))
          }))
        }, () => {
          xu.current = null
        }
      }), [xu]);
      const Mu = null !== Bu && void 0 !== Bu ? Bu : Du.current;
      return (0, Xu.jsx)("div", {
        ref: Su,
        className: Ku()("CrosshairShapes", {
          CrosshairInPreview: yu,
          CrosshairInEditor: Eu || yu,
          CrosshairSpreads: void 0 !== xu
        }),
        children: (0, Xu.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: ku.x,
            top: ku.y,
            opacity: Ru.opacity / 100
          },
          children: (0, Xu.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Cu.ringOutline && (0, Xu.jsx)("div", {
              className: "CrosshairRing",
              style: ju(Cu.ringOutline, Tu, Au)
            }), Cu.outlines.map(((uu, Ru) => (0, Xu.jsx)("div", {
              className: "CrosshairPart",
              ...bu(uu),
              style: Wu(uu, Mu, Tu, Au)
            }, `o${Ru}`))), Cu.ring && (0, Xu.jsx)("div", {
              className: "CrosshairRing",
              style: ju(Cu.ring, Tu, eu)
            }), Cu.fills.map(((uu, Ru) => (0, Xu.jsx)("div", {
              className: "CrosshairPart",
              ...bu(uu),
              style: Wu(uu, Mu, Tu, eu)
            }, `f${Ru}`)))]
          })
        })
      })
    }
  },
  9030: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Vu,
      e: () => Tu,
      i: () => pu
    });
    var Eu = yu(8996);
    const Ku = "XH1-",
      Qu = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      mu = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Ju = ["color", "outlineColor"],
      Nu = 1 + 3 * Ju.length + mu.length + 1,
      Xu = Math.ceil(8 * Nu / Math.log2(62)),
      Vu = Ku.length + Xu;

    function ru(uu) {
      let Ru = 90;
      for (const yu of uu) Ru = 31 * Ru + yu & 255;
      return Ru
    }
    const Bu = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      xu = BigInt(Bu.length);

    function Su(uu, Ru) {
      let yu = 0n;
      for (const Ku of uu) {
        const uu = Bu.indexOf(Ku);
        if (uu < 0) return null;
        yu = yu * xu + BigInt(uu)
      }
      if (yu >> BigInt(8 * Ru) !== 0n) return null;
      const Eu = [];
      for (let Ku = 0; Ku < Ru; Ku++) Eu.unshift(Number(0xffn & yu)), yu >>= 8n;
      return Eu
    }

    function pu(uu) {
      let Ru = "shapes" === uu.style ? 1 : 0;
      Qu.forEach(((yu, Eu) => {
        uu[yu] && (Ru |= 1 << Eu + 1)
      }));
      const yu = [Ru];
      for (const Ku of Ju) {
        const Ru = (0, Eu.i)(Ku, uu[Ku]);
        yu.push(Ru >> 16 & 255, Ru >> 8 & 255, 255 & Ru)
      }
      for (const Ku of mu) {
        const {
          min: Ru,
          step: Qu
        } = Eu.d[Ku];
        yu.push(Math.round(((0, Eu.i)(Ku, uu[Ku]) - Ru) / Qu))
      }
      return yu.push(ru(yu)), Ku + function(uu, Ru) {
        let yu = 0n;
        for (const Ku of uu) yu = yu << 8n | BigInt(Ku);
        let Eu = "";
        for (let Ku = 0; Ku < Ru; Ku++) Eu = Bu[Number(yu % xu)] + Eu, yu /= xu;
        return Eu
      }(yu, Xu)
    }

    function Tu(uu) {
      for (const Ru of uu.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Xu}})`, "gi"))) {
        const uu = Wu(Su(Ru[1], Nu));
        if (uu) return uu
      }
      return null
    }

    function Wu(uu) {
      if (!uu || uu.length !== Nu || ru(uu.slice(0, -1)) !== uu[uu.length - 1]) return null;
      const Ru = uu[0],
        yu = {
          ...Eu.h,
          style: 1 & Ru ? "shapes" : "classic"
        };
      Qu.forEach(((uu, Eu) => {
        yu[uu] = 0 !== (Ru & 1 << Eu + 1)
      }));
      let Ku = 1;
      for (const Eu of Ju) yu[Eu] = uu[Ku] << 16 | uu[Ku + 1] << 8 | uu[Ku + 2], Ku += 3;
      for (const Qu of mu) {
        const {
          min: Ru,
          step: mu
        } = Eu.d[Qu];
        yu[Qu] = (0, Eu.i)(Qu, Ru + uu[Ku] * mu), Ku++
      }
      return yu
    }
  },
  8996: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      h: () => Ku,
      i: () => Qu,
      m: () => Xu,
      q: () => Nu,
      r: () => Vu,
      s: () => Ju,
      t: () => mu
    });
    const Eu = {
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
      Ku = Object.freeze({
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

    function Qu(uu, Ru) {
      var yu;
      const {
        min: Qu,
        max: mu,
        step: Ju
      } = Eu[uu];
      if (!Number.isFinite(Ru)) return Ku[uu];
      const Nu = (null !== (yu = String(Ju).split(".")[1]) && void 0 !== yu ? yu : "").length,
        Xu = Number((Math.round(Ru / Ju) * Ju).toFixed(Nu));
      return Math.min(mu, Math.max(Qu, Xu))
    }

    function mu(uu, Ru, yu) {
      const Eu = "number" === typeof yu ? Qu(Ru, yu) : yu;
      return {
        ...uu,
        [Ru]: Eu
      }
    }

    function Ju(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Ku).every((Eu => yu.includes(Eu) || uu[Eu] === Ru[Eu]))
    }

    function Nu(uu) {
      return Ju(uu, Ku)
    }

    function Xu(uu) {
      return `#${uu.toString(16).padStart(6,"0")}`
    }

    function Vu(uu) {
      const Ru = /^#?([0-9a-f]{6})$/i.exec(uu.trim());
      return Ru ? parseInt(Ru[1], 16) : null
    }
  },
  9039: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ru,
      c: () => Bu
    });
    var Eu = yu(64),
      Ku = yu(47),
      Qu = yu(9030),
      mu = yu(8996);
    const Ju = "crosshairCode";
    let Nu = null;
    const Xu = new Set;

    function Vu() {
      if (null === Nu) {
        var uu;
        const Ru = Ku.i.getItem(Ju);
        Nu = null !== (uu = "string" === typeof Ru ? (0, Qu.e)(Ru) : null) && void 0 !== uu ? uu : mu.h
      }
      return Nu
    }

    function ru(uu) {
      Nu = uu, (0, mu.q)(uu) ? Ku.i.removeItem(Ju) : Ku.i.setItem(Ju, (0, Qu.i)(uu));
      for (const Ru of Xu) Ru()
    }

    function Bu() {
      const [uu, Ru] = (0, Eu.useState)(Vu);
      return (0, Eu.useEffect)((() => {
        const uu = () => {
          Ru(Vu())
        };
        return uu(), yu = uu, Xu.add(yu), () => {
          Xu.delete(yu)
        };
        var yu
      }), []), uu
    }
  },
  36556: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => Nu,
      e: () => mu
    });
    var Eu = yu(610),
      Ku = yu(2632);

    function Qu(uu) {
      return uu === (0, Ku.h)().ERu ? (0, Ku.h)().ZI : uu
    }

    function mu(uu) {
      return !(0, Eu.E)(uu) && Qu(uu) === (0, Ku.h)().ZI
    }
    const Ju = "gravity";

    function Nu() {
      return (0, Ku.h)().physics[Ju][1]
    }
  },
  36298: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      countDecodesAs: () => Vu,
      decodedAudio: () => ru
    });
    var Eu = yu(4630);
    const Ku = Eu.Howler,
      Qu = new Map;
    let mu = 0;
    const Ju = {
        song: 0,
        sheet: 0
      },
      Nu = new WeakMap,
      Xu = new WeakSet;

    function Vu(uu, Ru) {
      return Nu.set(uu, Ru), uu
    }

    function ru() {
      return {
        bytes: mu,
        songsDecoded: Ju.song,
        sheetsDecoded: Ju.sheet
      }
    }

    function Bu(uu) {
      if (Xu.has(uu)) return;
      Xu.add(uu);
      const Ru = 1 === uu.decodeAudioData.length,
        yu = uu.decodeAudioData.bind(uu);
      uu.decodeAudioData = (uu, Eu, Xu) => {
        const Vu = uu => {
          const Ru = Ku._howls.filter((uu => "loaded" !== uu._state));
          try {
            null === Eu || void 0 === Eu || Eu(uu)
          } finally {
            const yu = Ru.find((uu => "loaded" === uu._state));
            void 0 !== yu && "string" === typeof yu._src && function(uu, Ru, yu) {
              var Eu;
              mu += yu - (null !== (Eu = Qu.get(Ru)) && void 0 !== Eu ? Eu : 0), Qu.set(Ru, yu);
              const Ku = Nu.get(uu);
              void 0 !== Ku && Ju[Ku]++
            }(yu, yu._src, uu.length * uu.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return uu
        };
        if (!Ru) return yu(uu, Vu, Xu);
        const ru = yu(uu).then(Vu);
        return ru.catch((uu => {
          null === Xu || void 0 === Xu || Xu(uu)
        })), ru
      }
    }
    const xu = Eu.Howl.prototype,
      Su = xu.init;
    xu.init = function(uu) {
      return Eu.Howler.volume(), Ku.ctx && Bu(Ku.ctx), Su.call(this, uu)
    };
    const pu = xu.unload;
    xu.unload = function() {
      const uu = this._src,
        Ru = pu.call(this);
      if ("string" !== typeof uu) return Ru;
      const yu = Qu.get(uu);
      return void 0 !== yu && function(uu) {
        return !Ku._howls.some((Ru => Ru._src === uu || "string" === typeof Ru._src && uu.indexOf(Ru._src) >= 0))
      }(uu) && (Qu.delete(uu), mu -= yu), Ru
    }
  },
  36545: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => du
    });
    var Eu = yu(36549),
      Ku = yu(212),
      Qu = yu(4630),
      mu = yu(36298),
      Ju = yu(36571),
      Nu = yu(36556),
      Xu = yu(352),
      Vu = yu.n(Xu),
      ru = yu(1176),
      Bu = yu(2632),
      xu = yu(36565),
      Su = yu(34),
      pu = yu(27),
      Tu = yu(36560);
    const Wu = new Set(["note"]);
    const ju = {
      stop: () => ju,
      fade: () => ju,
      rate: () => ju,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => ju,
      setPannerAttr: () => ju,
      setPosition: () => ju
    };
    class Hu {
      constructor(uu) {
        let Ru, {
          src: yu,
          volumeScalar: Ku,
          isSoundSprite: Nu
        } = uu;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, Nu ? (Ru = (0, Eu.h)(yu), this._spriteTrackSrc = Ru) : Ru = {
          src: ru.clientSideServerUrls.staticUrl + yu
        }, this._volumeMultiplier = new Ju.h, this._volumeMultiplier.setMultiplierType("persistentScalar", Ku), this._howl = (0, mu.countDecodesAs)(new Qu.Howl({
          ...Ru,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let uu, Ru = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          yu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Ru) {
          var Eu;
          if (null === (Eu = this._spriteTrackSrc) || void 0 === Eu || !Eu.sprite[Ru]) throw new Error("No such sprite in your spritetrack");
          uu = this._howl.play(Ru)
        } else uu = this._howl.play();
        yu && this._howl.loop(!0, uu);
        let Ku = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), uu);
        const Qu = {
          stop: () => (this._howl.stop(uu), Qu),
          fade: (Ru, yu, Eu) => (this._howl.fade(Ru, yu, Eu, uu), Qu),
          rate: Ru => (this._howl.rate(Ru, uu), Qu),
          stopsAtOnce: () => this._howl.playing(uu) && !this._howl._playLock,
          isAlive: () => {
            const Ru = this._howl._soundById(uu);
            return !this._loadFailed && !!Ru && !Ru._ended
          },
          getDurationMs: () => this._howl._soundById(uu) ? 1e3 * this._howl.duration(uu) / this._howl.rate(uu) : 0,
          getVolume: () => Ku * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Ku,
          setRelativeVolume: Ru => {
            if (Ru > 1) throw new Error("Volume should be <= 1");
            return Ku = pu.d.get("soundOnFromAd") ? Ru : 0, this._howl.volume(Math.min(1, Ku * this._volumeMultiplier.getTotalMultipliedVal()), uu), Qu
          },
          setPannerAttr: Ru => {
            let {
              coneInnerAngle: yu,
              coneOuterAngle: Eu = 360,
              coneOuterGain: Ku,
              distanceModel: mu,
              maxDistance: Ju,
              panningModel: Nu,
              refDistance: Xu,
              rolloffFactor: Vu
            } = Ru;
            return this._setPannerAttr({
              id: uu,
              coneInnerAngle: yu,
              coneOuterAngle: Eu,
              coneOuterGain: Ku,
              distanceModel: mu,
              maxDistance: Ju,
              panningModel: Nu,
              refDistance: Xu,
              rolloffFactor: Vu
            }), Qu
          },
          setPosition: Ru => (this._howl.pos(Ru[2], Ru[1], Ru[0], uu), Qu)
        };
        return Qu
      }
      setGlobalVolume(uu) {
        this._volumeMultiplier.setMultiplierType("globalVolume", uu), this._howl.volume(uu)
      }
      _setPannerAttr(uu) {
        let {
          id: Ru,
          coneInnerAngle: yu = 360,
          coneOuterAngle: Eu = 360,
          coneOuterGain: Ku = 0,
          distanceModel: Qu = "inverse",
          maxDistance: mu = 1e3,
          panningModel: Ju = "HRTF",
          refDistance: Nu = xu.h,
          rolloffFactor: Xu = 1
        } = uu;
        this._howl.pannerAttr({
          coneOuterAngle: Eu
        }, Ru);
        const Vu = {
          coneInnerAngle: yu,
          coneOuterAngle: Eu,
          coneOuterGain: Ku,
          distanceModel: Qu,
          maxDistance: mu,
          panningModel: Ju,
          refDistance: Nu,
          rolloffFactor: Xu
        };
        this._howl.pannerAttr(Vu, Ru)
      }
    }
    const du = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new Tu.c, Su.k.subscribe("appManagerUpdated|soundVolume", (uu => {
          const Ru = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const yu of Ru) yu.setGlobalVolume(uu)
        }))
      }
      play(uu, Ru) {
        var yu;
        let Qu, mu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (yu = (0, Bu.h)()) || void 0 === yu ? void 0 : yu.ZI,
          Ju = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xu.e,
          Xu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : xu.h,
          ru = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Su;
        (0, Bu.h)() ? Qu = !!Array.isArray(mu) || (0, Nu.b)(mu) !== (null === (Su = (0, Bu.h)()) || void 0 === Su ? void 0 : Su.ZI): Qu = !1;
        const du = Qu ? this.spatialSheets : this.stereoSheets,
          bu = (0, Eu.j)(uu);
        if (!du[bu]) {
          const uu = new Hu({
            src: bu,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          uu.setGlobalVolume(pu.d.get("soundVolume")), du[bu] = uu
        }
        const Cu = du[bu];
        if (!Qu) {
          const yu = Cu.play(uu, ru);
          return yu.setRelativeVolume(Ru), yu
        }
        const ku = (0, Bu.h)(),
          eu = Array.isArray(mu) ? mu : ku.nH.mH(mu),
          Au = ku.nH.mH(ku.ZI);
        if (!eu || Vu().sqrDist(eu, Au) > Ju * Ju) return ju;
        let Du;
        if (!ru) {
          if (!this.spatialVoices.admit({
              group: Wu.has(bu) ? null : (0, Tu.g)(uu),
              loudness: (0, Tu.d)(Ru, Vu().fm(eu, Au), Xu),
              startMs: performance.now(),
              getDurationMs: () => {
                var uu, Ru;
                return null !== (uu = null === (Ru = Du) || void 0 === Ru ? void 0 : Ru.getDurationMs()) && void 0 !== uu ? uu : 0
              },
              isAlive: () => {
                var uu, Ru;
                return null !== (uu = null === (Ru = Du) || void 0 === Ru ? void 0 : Ru.isAlive()) && void 0 !== uu && uu
              },
              canStop: () => {
                var uu, Ru;
                return null !== (uu = null === (Ru = Du) || void 0 === Ru ? void 0 : Ru.stopsAtOnce()) && void 0 !== uu && uu
              },
              stop: () => {
                var uu;
                null === (uu = Du) || void 0 === uu || uu.stop()
              }
            })) return ju
        }
        return Du = Cu.play(uu, ru), Du.setRelativeVolume(Ru), Du.setPannerAttr({
          refDistance: Xu
        }), Du.setPosition([eu[0], eu[1] + Ku.f.UW * Ku.f.playerEyeToHeightRatio, eu[2]]), Du
      }
    }
  },
  36609: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu;
      return uu.name === Ru.name && ((null === (yu = uu.attributes) || void 0 === yu || null === (Eu = yu.customAttributes) || void 0 === Eu ? void 0 : Eu.stackKey) === (null === (Ku = Ru.attributes) || void 0 === Ku || null === (Qu = Ku.customAttributes) || void 0 === Qu ? void 0 : Qu.stackKey) && (!0 !== (null === (mu = uu.attributes) || void 0 === mu || null === (Ju = mu.customAttributes) || void 0 === Ju ? void 0 : Ju.unstackable) && !0 !== (null === (Nu = Ru.attributes) || void 0 === Nu || null === (Xu = Nu.customAttributes) || void 0 === Xu ? void 0 : Xu.unstackable)))
    }
    yu.d(Ru, {
      b: () => Eu
    })
  },
  36707: (uu, Ru, yu) => {
    function Eu(uu) {
      return uu.includes("Leaf Bed")
    }

    function Ku(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !Eu(uu)
    }

    function Qu(uu) {
      return uu.includes(" Strongbed")
    }

    function mu(uu) {
      return Eu(uu) || Ku(uu) || Qu(uu)
    }
    yu.d(Ru, {
      b: () => mu,
      d: () => Eu,
      e: () => Qu,
      f: () => Ku
    })
  },
  36702: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu
    });
    var Eu = yu(36707),
      Ku = yu(9158);
    const Qu = [],
      mu = [],
      Ju = [],
      Nu = [];
    for (const Vu of Object.keys(Ku.q))(0, Eu.d)(Vu) ? Qu.push(Vu) : (0, Eu.f)(Vu) && mu.push(Vu), (0, Eu.e)(Vu) && Ju.push(Vu), (Vu.includes(" Bed Head") || Vu.includes(" Strongbed Head")) && Nu.push(Vu);
    const Xu = {
      leafBeds: Qu,
      woolBeds: mu,
      strongBeds: Ju,
      beds: [...Qu, ...mu, ...Ju],
      bedHeads: Nu,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6268: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      e: () => Ku,
      h: () => Nu,
      i: () => Qu,
      m: () => Xu,
      n: () => Eu,
      r: () => Ju
    });
    let Eu = function(uu) {
        return uu[uu.DEFAULT = 0] = "DEFAULT", uu[uu.BOAT = 1] = "BOAT", uu[uu.GLIDER = 2] = "GLIDER", uu[uu.BALLOON = 3] = "BALLOON", uu[uu.SLEEPING = 4] = "SLEEPING", uu[uu.RIDING_MOB = 5] = "RIDING_MOB", uu[uu.CAR = 6] = "CAR", uu[uu.HOVERCRAFT = 7] = "HOVERCRAFT", uu
      }({}),
      Ku = function(uu) {
        return uu[uu.WOOD = 0] = "WOOD", uu[uu.OBSIDIAN = 1] = "OBSIDIAN", uu[uu.SPEED = 2] = "SPEED", uu
      }({}),
      Qu = function(uu) {
        return uu[uu.WOOD = 0] = "WOOD", uu[uu.IRON = 1] = "IRON", uu[uu.GOLD = 2] = "GOLD", uu[uu.DIAMOND = 3] = "DIAMOND", uu
      }({}),
      mu = function(uu) {
        return uu[uu.YELLOW = 0] = "YELLOW", uu[uu.WHITE = 1] = "WHITE", uu[uu.RED = 2] = "RED", uu[uu.PURPLE = 3] = "PURPLE", uu[uu.PINK = 4] = "PINK", uu[uu.ORANGE = 5] = "ORANGE", uu[uu.MAGENTA = 6] = "MAGENTA", uu[uu.LIME = 7] = "LIME", uu[uu.LIGHT_GRAY = 8] = "LIGHT_GRAY", uu[uu.LIGHT_BLUE = 9] = "LIGHT_BLUE", uu[uu.GREEN = 10] = "GREEN", uu[uu.GRAY = 11] = "GRAY", uu[uu.CYAN = 12] = "CYAN", uu[uu.BROWN = 13] = "BROWN", uu[uu.BLUE = 14] = "BLUE", uu[uu.BLACK = 15] = "BLACK", uu
      }({}),
      Ju = function(uu) {
        return uu[uu.ROTATION_1 = 0] = "ROTATION_1", uu[uu.ROTATION_2 = 1] = "ROTATION_2", uu[uu.ROTATION_3 = 2] = "ROTATION_3", uu[uu.ROTATION_4 = 3] = "ROTATION_4", uu
      }({}),
      Nu = function(uu) {
        return uu[uu.KART = 0] = "KART", uu[uu.OFF_ROADER = 1] = "OFF_ROADER", uu[uu.CAR = 2] = "CAR", uu[uu.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", uu[uu.ARMORED_CAR = 4] = "ARMORED_CAR", uu[uu.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", uu[uu.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", uu[uu.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", uu
      }({});
    Eu.DEFAULT, Eu.BOAT, Ku.SPEED, Eu.GLIDER, Qu.DIAMOND, Eu.BALLOON, mu.BLACK, Eu.SLEEPING, Ju.ROTATION_4, Eu.RIDING_MOB, Eu.CAR, Nu.MOONSTONE_MINING_DRILL, Eu.HOVERCRAFT;
    let Xu = function(uu) {
      return uu[uu.NORMAL = 0] = "NORMAL", uu[uu.GLIDING = 1] = "GLIDING", uu[uu.FLOATING = 2] = "FLOATING", uu
    }({})
  },
  9025: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);