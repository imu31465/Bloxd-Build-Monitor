export const id = 121;
export const ids = [121];
export const modules = {
  37001: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Yu,
      e: () => pu
    });
    ju(34528);
    var su = ju(58),
      Uu = ju(1499),
      Zu = ju(1986),
      Xu = ju(2027),
      lu = ju(22),
      qu = ju(2543),
      fu = ju(37007),
      Cu = ju(37011),
      bu = ju(34512),
      cu = ju(34525),
      Nu = ju(34535),
      Ou = ju(1154);
    const Yu = (0, su.memo)((function() {
      var uu;
      const {
        isTouchScreen: Eu,
        clientEscMenuOptions: ju,
        scriptedCameraFacing: Zu,
        crosshairShownOverride: Yu,
        crosshairGameView: Du
      } = (0, lu.l)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), gu = (0, qu.h)("gunshotOrigin"), Mu = (0, su.useRef)(null), eu = (0, su.useRef)(!1), [Gu, wu] = (0, su.useState)(hu);
      (0, Uu.f)("cameraZoomSet", wu), (0, su.useEffect)((() => {
        wu(hu())
      }), []);
      const Ju = (0, Xu.f)("heldItemAim"),
        au = Ju.gun,
        Pu = (0, Nu.e)(),
        ou = (0, su.useRef)(Pu);
      ou.current = Pu;
      const [ku, mu] = (0, su.useState)(!1);
      (0, su.useEffect)((() => (0, Cu.d)("crosshairAccuracy", pu)), []), (0, Uu.f)("mouseState", (uu => {
        let {
          isDown: Eu
        } = uu;
        eu.current = Eu, Mu.current && (Mu.current.style.transform = (0, cu.g)(Eu, ou.current.growOnClick)), "shapes" === ou.current.style && mu(Eu)
      }));
      const vu = (0, bu.d)(Eu, ju.touchActionButtons);
      return (null !== (uu = (0, fu.d)(Du, Yu)) && void 0 !== uu ? uu : (0, fu.i)(Ju, Gu > 1, vu, gu)) ? "movement" === Zu || "cursor" === Zu ? null : (0, Ou.jsxs)(Ou.Fragment, {
        children: [au && (0, Ou.jsx)(du, {
          custom: Pu.forGuns && "shapes" === Pu.style ? Pu : null,
          touch: Eu
        }), !au && (0, Ou.jsx)(cu.c, {
          settings: Pu,
          touch: Eu,
          pressRef: Mu,
          pressed: "shapes" === Pu.style ? ku : eu.current
        })]
      }) : null
    }));

    function hu() {
      return Zu.gameBridge.lookup("cameraZoom", null)
    }
    const Du = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      gu = {
        current: null
      },
      Mu = {
        current: null
      };
    let eu = 0,
      Gu = 0;

    function pu(uu) {
      Gu = uu, Du[0].current || gu.current || Mu.current ? Ju(uu) : eu = uu
    }

    function wu(uu) {
      return ((0, fu.e)(uu) - (0, fu.e)(0)) * window.innerHeight / 100
    }

    function Ju(uu) {
      var Eu;
      if (null === (Eu = Mu.current) || void 0 === Eu || Eu.call(Mu, wu(uu)), Du[0].current) {
        const Eu = `${(0,fu.e)(uu)}vh`;
        Du[0].current.style.transform = `translateX(calc(0px - ${Eu}))`, Du[1].current.style.transform = `translateX(calc(0px + ${Eu}))`, Du[2].current.style.transform = `translateY(calc(0px - ${Eu}))`, Du[3].current.style.transform = `translateY(calc(0px + ${Eu}))`
      }
      gu.current && (gu.current.style.filter = `blur(${Math.round(uu/10)}px)`)
    }

    function du(uu) {
      let {
        custom: Eu,
        touch: ju
      } = uu;
      const Zu = (0, Uu.g)("aimingOverlay", "none"),
        Xu = "1.2vh",
        lu = "0.3vh";
      (0, su.useEffect)((() => {
        eu && Ju(eu)
      }), []);
      const qu = (0, su.useRef)(null !== Eu);
      return (0, su.useLayoutEffect)((() => {
        var uu;
        Eu ? null === (uu = Mu.current) || void 0 === uu || uu.call(Mu, wu(Gu)) : qu.current && Ju(Gu);
        qu.current = null !== Eu
      }), [Eu]), (0, Ou.jsxs)(Ou.Fragment, {
        children: ["sniper" === Zu && (0, Ou.jsxs)("div", {
          ref: gu,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, Ou.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, Ou.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, Ou.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, Ou.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, Ou.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Zu ? 0 : 1
          },
          children: [Eu && (0, Ou.jsx)(cu.c, {
            settings: Eu,
            touch: ju,
            spreadRef: Mu
          }), !Eu && (0, Ou.jsxs)(Ou.Fragment, {
            children: [(0, Ou.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Xu,
                height: lu,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Du[0]
            }), (0, Ou.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Xu,
                height: lu,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Du[1]
            }), (0, Ou.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: lu,
                height: Xu,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Du[2]
            }), (0, Ou.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: lu,
                height: Xu,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Du[3]
            })]
          })]
        })]
      })
    }
  },
  34525: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Yu,
      g: () => Ou
    });
    ju(34528);
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(58),
      Xu = ju(34521);

    function lu(uu, Eu) {
      return Math.max(1, Math.round(uu * Eu))
    }

    function qu(uu, Eu) {
      const ju = Eu * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        su = function(uu, Eu) {
          if (uu.lines) return lu(uu.lineThickness, Eu) % 2;
          if (uu.dot) return lu(uu.dotSize, Eu) % 2;
          return fu(uu, Eu) % 2
        }(uu, Eu),
        Uu = Cu(uu.lineThickness * ju, su),
        Zu = lu(uu.lineLength, ju),
        Xu = Math.round(uu.gap * ju),
        qu = uu.outline > 0 ? lu(uu.outline, ju) : 0,
        cu = [];
      if (uu.lines && (cu.push({
          x: Uu + Xu,
          y: 0,
          w: Zu,
          h: Uu,
          arm: "right"
        }), cu.push({
          x: -Xu - Zu,
          y: 0,
          w: Zu,
          h: Uu,
          arm: "left"
        }), cu.push({
          x: 0,
          y: Uu + Xu,
          w: Uu,
          h: Zu,
          arm: "down"
        }), uu.tStyle || cu.push({
          x: 0,
          y: -Xu - Zu,
          w: Uu,
          h: Zu,
          arm: "up"
        }), 0 === Xu && cu.push({
          x: 0,
          y: 0,
          w: Uu,
          h: Uu
        })), uu.dot) {
        const Eu = Cu(uu.dotSize * ju, su),
          Zu = uu.lines && 0 === Xu && uu.dotSize > uu.lineThickness ? Math.max(Eu, Uu + 2) : Eu,
          lu = (Uu - Zu) / 2;
        cu.push({
          x: lu,
          y: lu,
          w: Zu,
          h: Zu
        })
      }
      const Nu = cu.map((uu => ({
        ...uu,
        x: uu.x - qu,
        y: uu.y - qu,
        w: uu.w + 2 * qu,
        h: uu.h + 2 * qu
      })));
      let Ou = null,
        Yu = null;
      if (uu.circle) {
        const Eu = lu(uu.circleThickness, ju),
          Zu = function(uu, Eu) {
            return uu + (uu % 2 === Eu ? 0 : 1)
          }(fu(uu, ju), su),
          Xu = (Uu - Zu) / 2;
        Ou = bu(Xu, Zu, Eu), qu > 0 && (Yu = bu(Xu - qu, Zu + 2 * qu, Eu + 2 * qu))
      }
      return {
        cell: Uu,
        fills: cu,
        outlines: qu > 0 ? Nu : [],
        ring: Ou,
        ringOutline: Yu
      }
    }

    function fu(uu, Eu) {
      return Math.round(uu.circleRadius * Eu * 2 + lu(uu.circleThickness, Eu))
    }

    function Cu(uu, Eu) {
      return Math.max(2 - Eu, 2 * Math.round((uu - Eu) / 2) + Eu)
    }

    function bu(uu, Eu, ju) {
      const su = 2 * ju >= Eu - 1;
      return {
        x: uu,
        y: uu,
        size: Eu,
        border: Math.min(ju, Math.floor(Eu / 2)),
        filled: su
      }
    }
    var cu = ju(1154);
    const Nu = 1.4;

    function Ou(uu, Eu) {
      return uu && Eu ? `scale(${Nu})` : "scale(1)"
    }

    function Yu(uu) {
      return "classic" === uu.settings.style ? (0, cu.jsx)(gu, {
        ...uu
      }) : (0, cu.jsx)(du, {
        ...uu
      })
    }
    const hu = .125;

    function Du(uu, Eu) {
      const ju = {};
      if (uu.color !== Xu.f.color && (ju.color = (0, Xu.i)(uu.color)), uu.opacity !== Xu.f.opacity && (ju.opacity = uu.opacity / 100), uu.outline !== Xu.f.outline || uu.outlineColor !== Xu.f.outlineColor) {
        const Eu = uu.outline,
          su = (0, Xu.i)(uu.outlineColor);
        ju.textShadow = Eu > 0 ? `-${Eu}px 0 ${su}, 0 ${Eu}px ${su}, ${Eu}px 0 ${su}, 0 -${Eu}px ${su}` : "none"
      }
      if (uu.size !== Xu.f.size) {
        const su = uu.size / 100;
        ju.fontSize = Eu ? `calc(max(1.3rem, 18px) * ${su})` : `calc(1.3rem * ${su})`, ju.marginTop = `-${hu}em`, ju.transformOrigin = `50% calc(50% + ${hu}em)`
      }
      return ju
    }

    function gu(uu) {
      let {
        settings: Eu,
        touch: ju,
        inPreview: su,
        inEditor: Zu,
        pressed: Xu = !1,
        pressRef: lu
      } = uu;
      return (0, cu.jsx)("div", {
        className: Uu()("Crosshair", {
          Touch: ju,
          CrosshairInPreview: su,
          CrosshairInEditor: Zu || su
        }),
        ref: lu,
        style: {
          transform: Ou(Xu, Eu.growOnClick),
          ...Du(Eu, ju)
        },
        children: "+"
      })
    }

    function Mu(uu, Eu) {
      return uu / Eu + "px"
    }

    function eu(uu, Eu, ju, su) {
      return {
        ...wu(uu, Eu, ju),
        width: Mu(uu.w, ju),
        height: Mu(uu.h, ju),
        background: su
      }
    }

    function Gu(uu, Eu, ju) {
      return {
        left: Mu(uu.x, Eu),
        top: Mu(uu.y, Eu),
        width: Mu(uu.size, Eu),
        height: Mu(uu.size, Eu),
        borderWidth: Mu(uu.border, Eu),
        borderColor: ju,
        background: uu.filled ? ju : void 0
      }
    }
    const pu = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function wu(uu, Eu, ju) {
      const [su, Uu] = uu.arm ? pu[uu.arm] : [0, 0], Zu = Math.round(Eu * ju);
      return {
        left: Mu(uu.x + su * Zu, ju),
        top: Mu(uu.y + Uu * Zu, ju)
      }
    }

    function Ju(uu) {
      return uu.arm ? {
        "data-arm": uu.arm,
        "data-x": uu.x,
        "data-y": uu.y
      } : {}
    }

    function du(uu) {
      let {
        settings: Eu,
        inPreview: ju,
        inEditor: su,
        pressed: lu = !1,
        spread: fu,
        spreadRef: Cu
      } = uu;
      const bu = (0, Zu.useRef)(null),
        {
          box: Ou,
          dpr: Yu
        } = function(uu) {
          const [Eu, ju] = (0, Zu.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Zu.useLayoutEffect)((() => {
            const Eu = uu.current;
            if (!Eu) return;
            const su = () => {
              const uu = Eu.getBoundingClientRect(),
                su = window.devicePixelRatio || 1;
              ju((Eu => Eu.dpr === su && Eu.box.left === uu.left && Eu.box.top === uu.top && Eu.box.width === uu.width && Eu.box.height === uu.height ? Eu : {
                box: {
                  left: uu.left,
                  top: uu.top,
                  width: uu.width,
                  height: uu.height
                },
                dpr: su
              }))
            };
            su();
            const Uu = new ResizeObserver(su);
            return Uu.observe(Eu), window.addEventListener("resize", su), window.addEventListener("scroll", su, !0), () => {
              Uu.disconnect(), window.removeEventListener("resize", su), window.removeEventListener("scroll", su, !0)
            }
          }), [uu]), Eu
        }(bu),
        hu = (0, Zu.useRef)(Yu);
      hu.current = Yu;
      const Du = qu(Eu, Yu, lu && Eu.growOnClick ? Nu : 1),
        gu = function(uu, Eu, ju) {
          const su = Math.round((uu.left + uu.width / 2) * ju - Eu / 2),
            Uu = Math.round((uu.top + uu.height / 2) * ju - Eu / 2);
          return {
            x: su / ju - uu.left,
            y: Uu / ju - uu.top
          }
        }(Ou, Du.cell, Yu),
        Mu = (0, Xu.i)(Eu.color),
        pu = (0, Xu.i)(Eu.outlineColor),
        du = (0, Zu.useRef)(0);
      (0, Zu.useLayoutEffect)((() => {
        if (Cu) return Cu.current = uu => {
          var Eu;
          du.current = uu, null === (Eu = bu.current) || void 0 === Eu || Eu.querySelectorAll("[data-arm]").forEach((Eu => {
            Object.assign(Eu.style, wu(function(uu) {
              return {
                x: Number(uu.dataset.x),
                y: Number(uu.dataset.y),
                arm: uu.dataset.arm
              }
            }(Eu), uu, hu.current))
          }))
        }, () => {
          Cu.current = null
        }
      }), [Cu]);
      const au = null !== fu && void 0 !== fu ? fu : du.current;
      return (0, cu.jsx)("div", {
        ref: bu,
        className: Uu()("CrosshairShapes", {
          CrosshairInPreview: ju,
          CrosshairInEditor: su || ju,
          CrosshairSpreads: void 0 !== Cu
        }),
        children: (0, cu.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: gu.x,
            top: gu.y,
            opacity: Eu.opacity / 100
          },
          children: (0, cu.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Du.ringOutline && (0, cu.jsx)("div", {
              className: "CrosshairRing",
              style: Gu(Du.ringOutline, Yu, pu)
            }), Du.outlines.map(((uu, Eu) => (0, cu.jsx)("div", {
              className: "CrosshairPart",
              ...Ju(uu),
              style: eu(uu, au, Yu, pu)
            }, `o${Eu}`))), Du.ring && (0, cu.jsx)("div", {
              className: "CrosshairRing",
              style: Gu(Du.ring, Yu, Mu)
            }), Du.fills.map(((uu, Eu) => (0, cu.jsx)("div", {
              className: "CrosshairPart",
              ...Ju(uu),
              style: eu(uu, au, Yu, Mu)
            }, `f${Eu}`)))]
          })
        })
      })
    }
  },
  34532: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      f: () => hu,
      j: () => Yu
    });
    var su = ju(34521);
    const Uu = "XH1-",
      Zu = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Xu = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      lu = ["color", "outlineColor"],
      qu = 1 + 3 * lu.length + Xu.length + 1,
      fu = Math.ceil(8 * qu / Math.log2(62)),
      Cu = Uu.length + fu;

    function bu(uu) {
      let Eu = 90;
      for (const ju of uu) Eu = 31 * Eu + ju & 255;
      return Eu
    }
    const cu = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Nu = BigInt(cu.length);

    function Ou(uu, Eu) {
      let ju = 0n;
      for (const Uu of uu) {
        const uu = cu.indexOf(Uu);
        if (uu < 0) return null;
        ju = ju * Nu + BigInt(uu)
      }
      if (ju >> BigInt(8 * Eu) !== 0n) return null;
      const su = [];
      for (let Uu = 0; Uu < Eu; Uu++) su.unshift(Number(0xffn & ju)), ju >>= 8n;
      return su
    }

    function Yu(uu) {
      let Eu = "shapes" === uu.style ? 1 : 0;
      Zu.forEach(((ju, su) => {
        uu[ju] && (Eu |= 1 << su + 1)
      }));
      const ju = [Eu];
      for (const Uu of lu) {
        const Eu = (0, su.g)(Uu, uu[Uu]);
        ju.push(Eu >> 16 & 255, Eu >> 8 & 255, 255 & Eu)
      }
      for (const Uu of Xu) {
        const {
          min: Eu,
          step: Zu
        } = su.d[Uu];
        ju.push(Math.round(((0, su.g)(Uu, uu[Uu]) - Eu) / Zu))
      }
      return ju.push(bu(ju)), Uu + function(uu, Eu) {
        let ju = 0n;
        for (const Uu of uu) ju = ju << 8n | BigInt(Uu);
        let su = "";
        for (let Uu = 0; Uu < Eu; Uu++) su = cu[Number(ju % Nu)] + su, ju /= Nu;
        return su
      }(ju, fu)
    }

    function hu(uu) {
      for (const Eu of uu.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${fu}})`, "gi"))) {
        const uu = Du(Ou(Eu[1], qu));
        if (uu) return uu
      }
      return null
    }

    function Du(uu) {
      if (!uu || uu.length !== qu || bu(uu.slice(0, -1)) !== uu[uu.length - 1]) return null;
      const Eu = uu[0],
        ju = {
          ...su.f,
          style: 1 & Eu ? "shapes" : "classic"
        };
      Zu.forEach(((uu, su) => {
        ju[uu] = 0 !== (Eu & 1 << su + 1)
      }));
      let Uu = 1;
      for (const su of lu) ju[su] = uu[Uu] << 16 | uu[Uu + 1] << 8 | uu[Uu + 2], Uu += 3;
      for (const Zu of Xu) {
        const {
          min: Eu,
          step: Xu
        } = su.d[Zu];
        ju[Zu] = (0, su.g)(Zu, Eu + uu[Uu] * Xu), Uu++
      }
      return ju
    }
  },
  34521: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su,
      f: () => Uu,
      g: () => Zu,
      i: () => fu,
      m: () => qu,
      n: () => Cu,
      o: () => lu,
      q: () => Xu
    });
    const su = {
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
      Uu = Object.freeze({
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

    function Zu(uu, Eu) {
      var ju;
      const {
        min: Zu,
        max: Xu,
        step: lu
      } = su[uu];
      if (!Number.isFinite(Eu)) return Uu[uu];
      const qu = (null !== (ju = String(lu).split(".")[1]) && void 0 !== ju ? ju : "").length,
        fu = Number((Math.round(Eu / lu) * lu).toFixed(qu));
      return Math.min(Xu, Math.max(Zu, fu))
    }

    function Xu(uu, Eu, ju) {
      const su = "number" === typeof ju ? Zu(Eu, ju) : ju;
      return {
        ...uu,
        [Eu]: su
      }
    }

    function lu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Uu).every((su => ju.includes(su) || uu[su] === Eu[su]))
    }

    function qu(uu) {
      return lu(uu, Uu)
    }

    function fu(uu) {
      return `#${uu.toString(16).padStart(6,"0")}`
    }

    function Cu(uu) {
      const Eu = /^#?([0-9a-f]{6})$/i.exec(uu.trim());
      return Eu ? parseInt(Eu[1], 16) : null
    }
  },
  34535: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu,
      e: () => cu
    });
    var su = ju(58),
      Uu = ju(31),
      Zu = ju(34532),
      Xu = ju(34521);
    const lu = "crosshairCode";
    let qu = null;
    const fu = new Set;

    function Cu() {
      if (null === qu) {
        var uu;
        const Eu = Uu.k.getItem(lu);
        qu = null !== (uu = "string" === typeof Eu ? (0, Zu.f)(Eu) : null) && void 0 !== uu ? uu : Xu.f
      }
      return qu
    }

    function bu(uu) {
      qu = uu, (0, Xu.m)(uu) ? Uu.k.removeItem(lu) : Uu.k.setItem(lu, (0, Zu.j)(uu));
      for (const Eu of fu) Eu()
    }

    function cu() {
      const [uu, Eu] = (0, su.useState)(Cu);
      return (0, su.useEffect)((() => {
        const uu = () => {
          Eu(Cu())
        };
        return uu(), ju = uu, fu.add(ju), () => {
          fu.delete(ju)
        };
        var ju
      }), []), uu
    }
  },
  37162: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => qu,
      k: () => Xu
    });
    var su = ju(649),
      Uu = ju(2893);

    function Zu(uu) {
      return uu === (0, Uu.c)().Huu ? (0, Uu.c)().FQ : uu
    }

    function Xu(uu) {
      return !(0, su.H)(uu) && Zu(uu) === (0, Uu.c)().FQ
    }
    const lu = "gravity";

    function qu() {
      return (0, Uu.c)().physics[lu][1]
    }
  },
  37145: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => wu
    });
    var su = ju(37151),
      Uu = ju(202),
      Zu = ju(5026),
      Xu = ju(37159),
      lu = ju(36823),
      qu = ju(37194),
      fu = ju(37162),
      Cu = ju(366),
      bu = ju.n(Cu),
      cu = ju(1255),
      Nu = ju(2893),
      Ou = ju(37185),
      Yu = ju(24),
      hu = ju(22),
      Du = ju(37170),
      gu = ju(37172),
      Mu = ju(37181);
    const eu = new Set(["note"]);
    const Gu = {
      stop: () => Gu,
      fade: () => Gu,
      rate: () => Gu,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Gu,
      setPannerAttr: () => Gu,
      setPosition: () => Gu
    };
    class pu {
      constructor(uu) {
        let Eu, {
          src: ju,
          volumeScalar: Uu,
          isSoundSprite: Xu
        } = uu;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, Xu ? (Eu = (0, su.g)(ju), this._spriteTrackSrc = Eu) : Eu = {
          src: cu.clientSideServerUrls.staticUrl + ju
        }, this._volumeMultiplier = new qu.i, this._volumeMultiplier.setMultiplierType("persistentScalar", Uu), this._howl = (0, lu.countDecodesAs)(new Zu.Howl({
          ...Eu,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let uu, Eu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          ju = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Eu) {
          var su;
          if (null === (su = this._spriteTrackSrc) || void 0 === su || !su.sprite[Eu]) throw new Error("No such sprite in your spritetrack");
          uu = this._howl.play(Eu)
        } else uu = this._howl.play();
        ju && this._howl.loop(!0, uu);
        let Uu = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), uu);
        const Zu = {
          stop: () => {
            var Eu;
            return null === (Eu = this.liveHowl()) || void 0 === Eu || Eu.stop(uu), Zu
          },
          fade: (Eu, ju, su) => {
            var Uu;
            return null === (Uu = this.liveHowl()) || void 0 === Uu || Uu.fade(Eu, ju, su, uu), Zu
          },
          rate: Eu => {
            var ju;
            return null === (ju = this.liveHowl()) || void 0 === ju || ju.rate(Eu, uu), Zu
          },
          stopsAtOnce: () => this._howl.playing(uu) && !this._howl._playLock,
          isAlive: () => {
            const Eu = this._howl._soundById(uu);
            return !this._loadFailed && !!Eu && !Eu._ended
          },
          getDurationMs: () => this._howl._soundById(uu) ? 1e3 * this._howl.duration(uu) / this._howl.rate(uu) : 0,
          getVolume: () => Uu * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Uu,
          setRelativeVolume: Eu => {
            var ju;
            if (Eu > 1) throw new Error("Volume should be <= 1");
            return Uu = hu.d.get("soundOnFromAd") ? Eu : 0, null === (ju = this.liveHowl()) || void 0 === ju || ju.volume(Math.min(1, Uu * this._volumeMultiplier.getTotalMultipliedVal()), uu), Zu
          },
          setPannerAttr: Eu => {
            let {
              coneInnerAngle: ju,
              coneOuterAngle: su = 360,
              coneOuterGain: Uu,
              distanceModel: Xu,
              maxDistance: lu,
              panningModel: qu,
              refDistance: fu,
              rolloffFactor: Cu
            } = Eu;
            return this._setPannerAttr({
              id: uu,
              coneInnerAngle: ju,
              coneOuterAngle: su,
              coneOuterGain: Uu,
              distanceModel: Xu,
              maxDistance: lu,
              panningModel: qu,
              refDistance: fu,
              rolloffFactor: Cu
            }), Zu
          },
          setPosition: Eu => {
            var ju;
            return null === (ju = this.liveHowl()) || void 0 === ju || ju.pos(Eu[2], Eu[1], Eu[0], uu), Zu
          }
        };
        return Zu
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, Xu.c)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(uu) {
        this._volumeMultiplier.setMultiplierType("globalVolume", uu), this._howl.volume(uu)
      }
      _setPannerAttr(uu) {
        let {
          id: Eu,
          coneInnerAngle: ju = 360,
          coneOuterAngle: su = 360,
          coneOuterGain: Uu = 0,
          distanceModel: Zu = "inverse",
          maxDistance: Xu = 1e3,
          panningModel: lu = "HRTF",
          refDistance: qu = Ou.j,
          rolloffFactor: fu = 1
        } = uu;
        const Cu = this.liveHowl();
        if (null === Cu) return;
        Cu.pannerAttr({
          coneOuterAngle: su
        }, Eu);
        const bu = {
          coneInnerAngle: ju,
          coneOuterAngle: su,
          coneOuterGain: Uu,
          distanceModel: Zu,
          maxDistance: Xu,
          panningModel: lu,
          refDistance: qu,
          rolloffFactor: fu
        };
        Cu.pannerAttr(bu, Eu)
      }
    }
    const wu = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new Du.d, Yu.h.subscribe("appManagerUpdated|soundVolume", (uu => {
          const Eu = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const ju of Eu) ju.setGlobalVolume(uu)
        }))
      }
      play(uu, Eu) {
        var ju;
        let Zu, Xu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (ju = (0, Nu.c)()) || void 0 === ju ? void 0 : ju.FQ,
          lu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ou.h,
          qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ou.j,
          Cu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var cu;
        (0, Nu.c)() ? Zu = !!Array.isArray(Xu) || (0, fu.d)(Xu) !== (null === (cu = (0, Nu.c)()) || void 0 === cu ? void 0 : cu.FQ): Zu = !1;
        const Yu = (0, su.j)(uu),
          hu = this.loadSheet(Zu ? this.spatialSheets : this.stereoSheets, Yu);
        if (!Zu) {
          const ju = hu.play(uu, Cu);
          return ju.setRelativeVolume(Eu), ju
        }
        const gu = (0, Nu.c)(),
          Mu = Array.isArray(Xu) ? Xu : gu.YG.bM(Xu),
          pu = gu.YG.bM(gu.FQ);
        if (!Mu || bu().sqrDist(Mu, pu) > lu * lu) return Gu;
        let wu;
        if (!Cu) {
          if (!this.spatialVoices.admit({
              group: eu.has(Yu) ? null : (0, Du.i)(uu),
              loudness: (0, Du.g)(Eu, bu().LX(Mu, pu), qu),
              startMs: performance.now(),
              getDurationMs: () => {
                var uu, Eu;
                return null !== (uu = null === (Eu = wu) || void 0 === Eu ? void 0 : Eu.getDurationMs()) && void 0 !== uu ? uu : 0
              },
              isAlive: () => {
                var uu, Eu;
                return null !== (uu = null === (Eu = wu) || void 0 === Eu ? void 0 : Eu.isAlive()) && void 0 !== uu && uu
              },
              canStop: () => {
                var uu, Eu;
                return null !== (uu = null === (Eu = wu) || void 0 === Eu ? void 0 : Eu.stopsAtOnce()) && void 0 !== uu && uu
              },
              stop: () => {
                var uu;
                null === (uu = wu) || void 0 === uu || uu.stop()
              }
            })) return Gu
        }
        return wu = hu.play(uu, Cu), wu.setRelativeVolume(Eu), wu.setPannerAttr({
          refDistance: qu
        }), wu.setPosition([Mu[0], Mu[1] + Uu.e.Ih * Uu.e.playerEyeToHeightRatio, Mu[2]]), wu
      }
      preload(uu) {
        this.loadSheet(this.stereoSheets, (0, su.j)(uu))
      }
      loadSheet(uu, Eu) {
        let ju = uu[Eu];
        return ju || ((0, Mu.d)(Eu), ju = new pu({
          src: Eu,
          isSoundSprite: !0,
          volumeScalar: 1
        }), ju.setGlobalVolume(hu.d.get("soundVolume")), uu[Eu] = ju), ju
      }
      freeSheetsAfterGame() {
        for (const uu of [this.stereoSheets, this.spatialSheets])
          for (const [Eu, ju] of Object.entries(uu)) !gu.b.has(Eu) && ju.loaded() && (ju.unloadOnceIdle(), delete uu[Eu])
      }
    }
  },
  37237: (uu, Eu, ju) => {
    function su(uu, Eu) {
      var ju, su, Uu, Zu, Xu, lu, qu, fu;
      return uu.name === Eu.name && ((null === (ju = uu.attributes) || void 0 === ju || null === (su = ju.customAttributes) || void 0 === su ? void 0 : su.stackKey) === (null === (Uu = Eu.attributes) || void 0 === Uu || null === (Zu = Uu.customAttributes) || void 0 === Zu ? void 0 : Zu.stackKey) && (!0 !== (null === (Xu = uu.attributes) || void 0 === Xu || null === (lu = Xu.customAttributes) || void 0 === lu ? void 0 : lu.unstackable) && !0 !== (null === (qu = Eu.attributes) || void 0 === qu || null === (fu = qu.customAttributes) || void 0 === fu ? void 0 : fu.unstackable)))
    }
    ju.d(Eu, {
      b: () => su
    })
  },
  37332: (uu, Eu, ju) => {
    function su(uu) {
      return uu.includes("Leaf Bed")
    }

    function Uu(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !su(uu)
    }

    function Zu(uu) {
      return uu.includes(" Strongbed")
    }

    function Xu(uu) {
      return su(uu) || Uu(uu) || Zu(uu)
    }
    ju.d(Eu, {
      d: () => Xu,
      f: () => su,
      j: () => Zu,
      n: () => Uu
    })
  },
  37328: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => fu
    });
    var su = ju(37332),
      Uu = ju(9409);
    const Zu = [],
      Xu = [],
      lu = [],
      qu = [];
    for (const Cu of Object.keys(Uu.j))(0, su.f)(Cu) ? Zu.push(Cu) : (0, su.n)(Cu) && Xu.push(Cu), (0, su.j)(Cu) && lu.push(Cu), (Cu.includes(" Bed Head") || Cu.includes(" Strongbed Head")) && qu.push(Cu);
    const fu = {
      leafBeds: Zu,
      woolBeds: Xu,
      strongBeds: lu,
      beds: [...Zu, ...Xu, ...lu],
      bedHeads: qu,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6677: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      i: () => Uu,
      m: () => qu,
      p: () => Zu,
      r: () => fu,
      v: () => su,
      y: () => lu
    });
    let su = function(uu) {
        return uu[uu.DEFAULT = 0] = "DEFAULT", uu[uu.BOAT = 1] = "BOAT", uu[uu.GLIDER = 2] = "GLIDER", uu[uu.BALLOON = 3] = "BALLOON", uu[uu.SLEEPING = 4] = "SLEEPING", uu[uu.RIDING_MOB = 5] = "RIDING_MOB", uu[uu.CAR = 6] = "CAR", uu[uu.HOVERCRAFT = 7] = "HOVERCRAFT", uu
      }({}),
      Uu = function(uu) {
        return uu[uu.WOOD = 0] = "WOOD", uu[uu.OBSIDIAN = 1] = "OBSIDIAN", uu[uu.SPEED = 2] = "SPEED", uu
      }({}),
      Zu = function(uu) {
        return uu[uu.WOOD = 0] = "WOOD", uu[uu.IRON = 1] = "IRON", uu[uu.GOLD = 2] = "GOLD", uu[uu.DIAMOND = 3] = "DIAMOND", uu
      }({}),
      Xu = function(uu) {
        return uu[uu.YELLOW = 0] = "YELLOW", uu[uu.WHITE = 1] = "WHITE", uu[uu.RED = 2] = "RED", uu[uu.PURPLE = 3] = "PURPLE", uu[uu.PINK = 4] = "PINK", uu[uu.ORANGE = 5] = "ORANGE", uu[uu.MAGENTA = 6] = "MAGENTA", uu[uu.LIME = 7] = "LIME", uu[uu.LIGHT_GRAY = 8] = "LIGHT_GRAY", uu[uu.LIGHT_BLUE = 9] = "LIGHT_BLUE", uu[uu.GREEN = 10] = "GREEN", uu[uu.GRAY = 11] = "GRAY", uu[uu.CYAN = 12] = "CYAN", uu[uu.BROWN = 13] = "BROWN", uu[uu.BLUE = 14] = "BLUE", uu[uu.BLACK = 15] = "BLACK", uu
      }({}),
      lu = function(uu) {
        return uu[uu.ROTATION_1 = 0] = "ROTATION_1", uu[uu.ROTATION_2 = 1] = "ROTATION_2", uu[uu.ROTATION_3 = 2] = "ROTATION_3", uu[uu.ROTATION_4 = 3] = "ROTATION_4", uu
      }({}),
      qu = function(uu) {
        return uu[uu.KART = 0] = "KART", uu[uu.OFF_ROADER = 1] = "OFF_ROADER", uu[uu.CAR = 2] = "CAR", uu[uu.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", uu[uu.ARMORED_CAR = 4] = "ARMORED_CAR", uu[uu.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", uu[uu.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", uu[uu.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", uu
      }({});
    su.DEFAULT, su.BOAT, Uu.SPEED, su.GLIDER, Zu.DIAMOND, su.BALLOON, Xu.BLACK, su.SLEEPING, lu.ROTATION_4, su.RIDING_MOB, su.CAR, qu.MOONSTONE_MINING_DRILL, su.HOVERCRAFT;
    let fu = function(uu) {
      return uu[uu.NORMAL = 0] = "NORMAL", uu[uu.GLIDING = 1] = "GLIDING", uu[uu.FLOATING = 2] = "FLOATING", uu
    }({})
  },
  34528: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);