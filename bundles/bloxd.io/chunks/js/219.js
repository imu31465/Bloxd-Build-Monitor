export const id = 219;
export const ids = [219];
export const modules = {
  37436: (ee, ie, He) => {
    He.d(ie, {
      b: () => Te,
      d: () => Oe
    });
    He(34844);
    var ye = He(59),
      be = He(1432),
      Me = He(1983),
      Ke = He(2029),
      Ue = He(18),
      Fe = He(2532),
      Je = He(37440),
      oe = He(37447),
      Re = He(34824),
      ke = He(34836),
      qe = He(34859),
      fe = He(1228);
    const Te = (0, ye.memo)((function() {
      var ee;
      const {
        isTouchScreen: ie,
        clientEscMenuOptions: He,
        scriptedCameraFacing: Me,
        crosshairShownOverride: Te,
        crosshairGameView: Xe
      } = (0, Ue.m)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), ze = (0, Fe.i)("gunshotOrigin"), Be = (0, ye.useRef)(null), Ee = (0, ye.useRef)(!1), [ge, de] = (0, ye.useState)(pe);
      (0, be.f)("cameraZoomSet", de), (0, ye.useEffect)((() => {
        de(pe())
      }), []);
      const We = (0, Ke.k)("heldItemAim"),
        Ze = We.gun,
        we = (0, qe.f)(),
        De = (0, ye.useRef)(we);
      De.current = we;
      const [Pe, Ae] = (0, ye.useState)(!1);
      (0, ye.useEffect)((() => (0, oe.e)("crosshairAccuracy", Oe)), []), (0, be.f)("mouseState", (ee => {
        let {
          isDown: ie
        } = ee;
        Ee.current = ie, Be.current && (Be.current.style.transform = (0, ke.f)(ie, De.current.growOnClick)), "shapes" === De.current.style && Ae(ie)
      }));
      const Ye = (0, Re.e)(ie, He.touchActionButtons);
      return (null !== (ee = (0, Je.b)(Xe, Te)) && void 0 !== ee ? ee : (0, Je.e)(We, ge > 1, Ye, ze)) ? "movement" === Me || "cursor" === Me ? null : (0, fe.jsxs)(fe.Fragment, {
        children: [Ze && (0, fe.jsx)(te, {
          custom: we.forGuns && "shapes" === we.style ? we : null,
          touch: ie
        }), !Ze && (0, fe.jsx)(ke.b, {
          settings: we,
          touch: ie,
          pressRef: Be,
          pressed: "shapes" === we.style ? Pe : Ee.current
        })]
      }) : null
    }));

    function pe() {
      return Me.gameBridge.lookup("cameraZoom", null)
    }
    const Xe = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      ze = {
        current: null
      },
      Be = {
        current: null
      };
    let Ee = 0,
      ge = 0;

    function Oe(ee) {
      ge = ee, Xe[0].current || ze.current || Be.current ? We(ee) : Ee = ee
    }

    function de(ee) {
      return ((0, Je.d)(ee) - (0, Je.d)(0)) * window.innerHeight / 100
    }

    function We(ee) {
      var ie;
      if (null === (ie = Be.current) || void 0 === ie || ie.call(Be, de(ee)), Xe[0].current) {
        const ie = `${(0,Je.d)(ee)}vh`;
        Xe[0].current.style.transform = `translateX(calc(0px - ${ie}))`, Xe[1].current.style.transform = `translateX(calc(0px + ${ie}))`, Xe[2].current.style.transform = `translateY(calc(0px - ${ie}))`, Xe[3].current.style.transform = `translateY(calc(0px + ${ie}))`
      }
      ze.current && (ze.current.style.filter = `blur(${Math.round(ee/10)}px)`)
    }

    function te(ee) {
      let {
        custom: ie,
        touch: He
      } = ee;
      const Me = (0, be.j)("aimingOverlay", "none"),
        Ke = "1.2vh",
        Ue = "0.3vh";
      (0, ye.useEffect)((() => {
        Ee && We(Ee)
      }), []);
      const Fe = (0, ye.useRef)(null !== ie);
      return (0, ye.useLayoutEffect)((() => {
        var ee;
        ie ? null === (ee = Be.current) || void 0 === ee || ee.call(Be, de(ge)) : Fe.current && We(ge);
        Fe.current = null !== ie
      }), [ie]), (0, fe.jsxs)(fe.Fragment, {
        children: ["sniper" === Me && (0, fe.jsxs)("div", {
          ref: ze,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, fe.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, fe.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, fe.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, fe.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, fe.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Me ? 0 : 1
          },
          children: [ie && (0, fe.jsx)(ke.b, {
            settings: ie,
            touch: He,
            spreadRef: Be
          }), !ie && (0, fe.jsxs)(fe.Fragment, {
            children: [(0, fe.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ke,
                height: Ue,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Xe[0]
            }), (0, fe.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ke,
                height: Ue,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Xe[1]
            }), (0, fe.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ue,
                height: Ke,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Xe[2]
            }), (0, fe.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Ue,
                height: Ke,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Xe[3]
            })]
          })]
        })]
      })
    }
  },
  34836: (ee, ie, He) => {
    He.d(ie, {
      b: () => Te,
      f: () => fe
    });
    He(34844);
    var ye = He(1053),
      be = He.n(ye),
      Me = He(59),
      Ke = He(34829);

    function Ue(ee, ie) {
      return Math.max(1, Math.round(ee * ie))
    }

    function Fe(ee, ie) {
      const He = ie * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        ye = function(ee, ie) {
          if (ee.lines) return Ue(ee.lineThickness, ie) % 2;
          if (ee.dot) return Ue(ee.dotSize, ie) % 2;
          return Je(ee, ie) % 2
        }(ee, ie),
        be = oe(ee.lineThickness * He, ye),
        Me = Ue(ee.lineLength, He),
        Ke = Math.round(ee.gap * He),
        Fe = ee.outline > 0 ? Ue(ee.outline, He) : 0,
        ke = [];
      if (ee.lines && (ke.push({
          x: be + Ke,
          y: 0,
          w: Me,
          h: be,
          arm: "right"
        }), ke.push({
          x: -Ke - Me,
          y: 0,
          w: Me,
          h: be,
          arm: "left"
        }), ke.push({
          x: 0,
          y: be + Ke,
          w: be,
          h: Me,
          arm: "down"
        }), ee.tStyle || ke.push({
          x: 0,
          y: -Ke - Me,
          w: be,
          h: Me,
          arm: "up"
        }), 0 === Ke && ke.push({
          x: 0,
          y: 0,
          w: be,
          h: be
        })), ee.dot) {
        const ie = oe(ee.dotSize * He, ye),
          Me = ee.lines && 0 === Ke && ee.dotSize > ee.lineThickness ? Math.max(ie, be + 2) : ie,
          Ue = (be - Me) / 2;
        ke.push({
          x: Ue,
          y: Ue,
          w: Me,
          h: Me
        })
      }
      const qe = ke.map((ee => ({
        ...ee,
        x: ee.x - Fe,
        y: ee.y - Fe,
        w: ee.w + 2 * Fe,
        h: ee.h + 2 * Fe
      })));
      let fe = null,
        Te = null;
      if (ee.circle) {
        const ie = Ue(ee.circleThickness, He),
          Me = function(ee, ie) {
            return ee + (ee % 2 === ie ? 0 : 1)
          }(Je(ee, He), ye),
          Ke = (be - Me) / 2;
        fe = Re(Ke, Me, ie), Fe > 0 && (Te = Re(Ke - Fe, Me + 2 * Fe, ie + 2 * Fe))
      }
      return {
        cell: be,
        fills: ke,
        outlines: Fe > 0 ? qe : [],
        ring: fe,
        ringOutline: Te
      }
    }

    function Je(ee, ie) {
      return Math.round(ee.circleRadius * ie * 2 + Ue(ee.circleThickness, ie))
    }

    function oe(ee, ie) {
      return Math.max(2 - ie, 2 * Math.round((ee - ie) / 2) + ie)
    }

    function Re(ee, ie, He) {
      const ye = 2 * He >= ie - 1;
      return {
        x: ee,
        y: ee,
        size: ie,
        border: Math.min(He, Math.floor(ie / 2)),
        filled: ye
      }
    }
    var ke = He(1228);
    const qe = 1.4;

    function fe(ee, ie) {
      return ee && ie ? `scale(${qe})` : "scale(1)"
    }

    function Te(ee) {
      return "classic" === ee.settings.style ? (0, ke.jsx)(ze, {
        ...ee
      }) : (0, ke.jsx)(te, {
        ...ee
      })
    }
    const pe = .125;

    function Xe(ee, ie) {
      const He = {};
      if (ee.color !== Ke.e.color && (He.color = (0, Ke.j)(ee.color)), ee.opacity !== Ke.e.opacity && (He.opacity = ee.opacity / 100), ee.outline !== Ke.e.outline || ee.outlineColor !== Ke.e.outlineColor) {
        const ie = ee.outline,
          ye = (0, Ke.j)(ee.outlineColor);
        He.textShadow = ie > 0 ? `-${ie}px 0 ${ye}, 0 ${ie}px ${ye}, ${ie}px 0 ${ye}, 0 -${ie}px ${ye}` : "none"
      }
      if (ee.size !== Ke.e.size) {
        const ye = ee.size / 100;
        He.fontSize = ie ? `calc(max(1.3rem, 18px) * ${ye})` : `calc(1.3rem * ${ye})`, He.marginTop = `-${pe}em`, He.transformOrigin = `50% calc(50% + ${pe}em)`
      }
      return He
    }

    function ze(ee) {
      let {
        settings: ie,
        touch: He,
        inPreview: ye,
        inEditor: Me,
        pressed: Ke = !1,
        pressRef: Ue
      } = ee;
      return (0, ke.jsx)("div", {
        className: be()("Crosshair", {
          Touch: He,
          CrosshairInPreview: ye,
          CrosshairInEditor: Me || ye
        }),
        ref: Ue,
        style: {
          transform: fe(Ke, ie.growOnClick),
          ...Xe(ie, He)
        },
        children: "+"
      })
    }

    function Be(ee, ie) {
      return ee / ie + "px"
    }

    function Ee(ee, ie, He, ye) {
      return {
        ...de(ee, ie, He),
        width: Be(ee.w, He),
        height: Be(ee.h, He),
        background: ye
      }
    }

    function ge(ee, ie, He) {
      return {
        left: Be(ee.x, ie),
        top: Be(ee.y, ie),
        width: Be(ee.size, ie),
        height: Be(ee.size, ie),
        borderWidth: Be(ee.border, ie),
        borderColor: He,
        background: ee.filled ? He : void 0
      }
    }
    const Oe = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function de(ee, ie, He) {
      const [ye, be] = ee.arm ? Oe[ee.arm] : [0, 0], Me = Math.round(ie * He);
      return {
        left: Be(ee.x + ye * Me, He),
        top: Be(ee.y + be * Me, He)
      }
    }

    function We(ee) {
      return ee.arm ? {
        "data-arm": ee.arm,
        "data-x": ee.x,
        "data-y": ee.y
      } : {}
    }

    function te(ee) {
      let {
        settings: ie,
        inPreview: He,
        inEditor: ye,
        pressed: Ue = !1,
        spread: Je,
        spreadRef: oe
      } = ee;
      const Re = (0, Me.useRef)(null),
        {
          box: fe,
          dpr: Te
        } = function(ee) {
          const [ie, He] = (0, Me.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Me.useLayoutEffect)((() => {
            const ie = ee.current;
            if (!ie) return;
            const ye = () => {
              const ee = ie.getBoundingClientRect(),
                ye = window.devicePixelRatio || 1;
              He((ie => ie.dpr === ye && ie.box.left === ee.left && ie.box.top === ee.top && ie.box.width === ee.width && ie.box.height === ee.height ? ie : {
                box: {
                  left: ee.left,
                  top: ee.top,
                  width: ee.width,
                  height: ee.height
                },
                dpr: ye
              }))
            };
            ye();
            const be = new ResizeObserver(ye);
            return be.observe(ie), window.addEventListener("resize", ye), window.addEventListener("scroll", ye, !0), () => {
              be.disconnect(), window.removeEventListener("resize", ye), window.removeEventListener("scroll", ye, !0)
            }
          }), [ee]), ie
        }(Re),
        pe = (0, Me.useRef)(Te);
      pe.current = Te;
      const Xe = Fe(ie, Te, Ue && ie.growOnClick ? qe : 1),
        ze = function(ee, ie, He) {
          const ye = Math.round((ee.left + ee.width / 2) * He - ie / 2),
            be = Math.round((ee.top + ee.height / 2) * He - ie / 2);
          return {
            x: ye / He - ee.left,
            y: be / He - ee.top
          }
        }(fe, Xe.cell, Te),
        Be = (0, Ke.j)(ie.color),
        Oe = (0, Ke.j)(ie.outlineColor),
        te = (0, Me.useRef)(0);
      (0, Me.useLayoutEffect)((() => {
        if (oe) return oe.current = ee => {
          var ie;
          te.current = ee, null === (ie = Re.current) || void 0 === ie || ie.querySelectorAll("[data-arm]").forEach((ie => {
            Object.assign(ie.style, de(function(ee) {
              return {
                x: Number(ee.dataset.x),
                y: Number(ee.dataset.y),
                arm: ee.dataset.arm
              }
            }(ie), ee, pe.current))
          }))
        }, () => {
          oe.current = null
        }
      }), [oe]);
      const Ze = null !== Je && void 0 !== Je ? Je : te.current;
      return (0, ke.jsx)("div", {
        ref: Re,
        className: be()("CrosshairShapes", {
          CrosshairInPreview: He,
          CrosshairInEditor: ye || He,
          CrosshairSpreads: void 0 !== oe
        }),
        children: (0, ke.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: ze.x,
            top: ze.y,
            opacity: ie.opacity / 100
          },
          children: (0, ke.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Xe.ringOutline && (0, ke.jsx)("div", {
              className: "CrosshairRing",
              style: ge(Xe.ringOutline, Te, Oe)
            }), Xe.outlines.map(((ee, ie) => (0, ke.jsx)("div", {
              className: "CrosshairPart",
              ...We(ee),
              style: Ee(ee, Ze, Te, Oe)
            }, `o${ie}`))), Xe.ring && (0, ke.jsx)("div", {
              className: "CrosshairRing",
              style: ge(Xe.ring, Te, Be)
            }), Xe.fills.map(((ee, ie) => (0, ke.jsx)("div", {
              className: "CrosshairPart",
              ...We(ee),
              style: Ee(ee, Ze, Te, Be)
            }, `f${ie}`)))]
          })
        })
      })
    }
  },
  34851: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      h: () => pe,
      j: () => Te
    });
    var ye = He(34829);
    const be = "XH1-",
      Me = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Ke = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Ue = ["color", "outlineColor"],
      Fe = 1 + 3 * Ue.length + Ke.length + 1,
      Je = Math.ceil(8 * Fe / Math.log2(62)),
      oe = be.length + Je;

    function Re(ee) {
      let ie = 90;
      for (const He of ee) ie = 31 * ie + He & 255;
      return ie
    }
    const ke = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      qe = BigInt(ke.length);

    function fe(ee, ie) {
      let He = 0n;
      for (const be of ee) {
        const ee = ke.indexOf(be);
        if (ee < 0) return null;
        He = He * qe + BigInt(ee)
      }
      if (He >> BigInt(8 * ie) !== 0n) return null;
      const ye = [];
      for (let be = 0; be < ie; be++) ye.unshift(Number(0xffn & He)), He >>= 8n;
      return ye
    }

    function Te(ee) {
      let ie = "shapes" === ee.style ? 1 : 0;
      Me.forEach(((He, ye) => {
        ee[He] && (ie |= 1 << ye + 1)
      }));
      const He = [ie];
      for (const be of Ue) {
        const ie = (0, ye.f)(be, ee[be]);
        He.push(ie >> 16 & 255, ie >> 8 & 255, 255 & ie)
      }
      for (const be of Ke) {
        const {
          min: ie,
          step: Me
        } = ye.d[be];
        He.push(Math.round(((0, ye.f)(be, ee[be]) - ie) / Me))
      }
      return He.push(Re(He)), be + function(ee, ie) {
        let He = 0n;
        for (const be of ee) He = He << 8n | BigInt(be);
        let ye = "";
        for (let be = 0; be < ie; be++) ye = ke[Number(He % qe)] + ye, He /= qe;
        return ye
      }(He, Je)
    }

    function pe(ee) {
      for (const ie of ee.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Je}})`, "gi"))) {
        const ee = Xe(fe(ie[1], Fe));
        if (ee) return ee
      }
      return null
    }

    function Xe(ee) {
      if (!ee || ee.length !== Fe || Re(ee.slice(0, -1)) !== ee[ee.length - 1]) return null;
      const ie = ee[0],
        He = {
          ...ye.e,
          style: 1 & ie ? "shapes" : "classic"
        };
      Me.forEach(((ee, ye) => {
        He[ee] = 0 !== (ie & 1 << ye + 1)
      }));
      let be = 1;
      for (const ye of Ue) He[ye] = ee[be] << 16 | ee[be + 1] << 8 | ee[be + 2], be += 3;
      for (const Me of Ke) {
        const {
          min: ie,
          step: Ke
        } = ye.d[Me];
        He[Me] = (0, ye.f)(Me, ie + ee[be] * Ke), be++
      }
      return He
    }
  },
  34829: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      e: () => be,
      f: () => Me,
      j: () => Je,
      k: () => Fe,
      l: () => oe,
      n: () => Ue,
      o: () => Ke
    });
    const ye = {
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
      be = Object.freeze({
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

    function Me(ee, ie) {
      var He;
      const {
        min: Me,
        max: Ke,
        step: Ue
      } = ye[ee];
      if (!Number.isFinite(ie)) return be[ee];
      const Fe = (null !== (He = String(Ue).split(".")[1]) && void 0 !== He ? He : "").length,
        Je = Number((Math.round(ie / Ue) * Ue).toFixed(Fe));
      return Math.min(Ke, Math.max(Me, Je))
    }

    function Ke(ee, ie, He) {
      const ye = "number" === typeof He ? Me(ie, He) : He;
      return {
        ...ee,
        [ie]: ye
      }
    }

    function Ue(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(be).every((ye => He.includes(ye) || ee[ye] === ie[ye]))
    }

    function Fe(ee) {
      return Ue(ee, be)
    }

    function Je(ee) {
      return `#${ee.toString(16).padStart(6,"0")}`
    }

    function oe(ee) {
      const ie = /^#?([0-9a-f]{6})$/i.exec(ee.trim());
      return ie ? parseInt(ie[1], 16) : null
    }
  },
  34859: (ee, ie, He) => {
    He.d(ie, {
      b: () => Re,
      f: () => ke
    });
    var ye = He(59),
      be = He(35),
      Me = He(34851),
      Ke = He(34829);
    const Ue = "crosshairCode";
    let Fe = null;
    const Je = new Set;

    function oe() {
      if (null === Fe) {
        var ee;
        const ie = be.i.getItem(Ue);
        Fe = null !== (ee = "string" === typeof ie ? (0, Me.h)(ie) : null) && void 0 !== ee ? ee : Ke.e
      }
      return Fe
    }

    function Re(ee) {
      Fe = ee, (0, Ke.k)(ee) ? be.i.removeItem(Ue) : be.i.setItem(Ue, (0, Me.j)(ee));
      for (const ie of Je) ie()
    }

    function ke() {
      const [ee, ie] = (0, ye.useState)(oe);
      return (0, ye.useEffect)((() => {
        const ee = () => {
          ie(oe())
        };
        return ee(), He = ee, Je.add(He), () => {
          Je.delete(He)
        };
        var He
      }), []), ee
    }
  },
  37590: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      e: () => Fe,
      f: () => Ke
    });
    var ye = He(610),
      be = He(2969);

    function Me(ee) {
      return ee === (0, be.h)().dHe ? (0, be.h)().gC : ee
    }

    function Ke(ee) {
      return !(0, ye.P)(ee) && Me(ee) === (0, be.h)().gC
    }
    const Ue = "gravity";

    function Fe() {
      return (0, be.h)().physics[Ue][1]
    }
  },
  37574: (ee, ie, He) => {
    He.d(ie, {
      d: () => de
    });
    var ye = He(37578),
      be = He(186),
      Me = He(5338),
      Ke = He(37584),
      Ue = He(37224),
      Fe = He(37627),
      Je = He(37590),
      oe = He(352),
      Re = He.n(oe),
      ke = He(2969),
      qe = He(37620),
      fe = He(27),
      Te = He(18),
      pe = He(37596),
      Xe = He(37601),
      ze = He(37605),
      Be = He(37612);
    const Ee = new Set(["note"]);
    const ge = {
      stop: () => ge,
      fade: () => ge,
      rate: () => ge,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => ge,
      setPannerAttr: () => ge,
      setPosition: () => ge
    };
    class Oe {
      constructor(ee) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new Fe.i, this._howl = (0, Ue.countDecodesAs)(new Me.Howl({
          src: [...(0, ye.s)(ee).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = this._howl.play(Ke.b);
        ee && this._howl.loop(!0, ie);
        let He = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), ie);
        const ye = {
          stop: () => {
            var ee;
            return null === (ee = this.liveHowl()) || void 0 === ee || ee.stop(ie), ye
          },
          fade: (ee, He, be) => {
            var Me;
            return null === (Me = this.liveHowl()) || void 0 === Me || Me.fade(ee, He, be, ie), ye
          },
          rate: ee => {
            var He;
            return null === (He = this.liveHowl()) || void 0 === He || He.rate(ee, ie), ye
          },
          stopsAtOnce: () => this._howl.playing(ie) && !this._howl._playLock,
          isAlive: () => {
            const ee = this._howl._soundById(ie);
            return !this._loadFailed && !!ee && !ee._ended
          },
          getDurationMs: () => this._howl._soundById(ie) ? 1e3 * this._howl.duration(ie) / this._howl.rate(ie) : 0,
          getVolume: () => He * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => He,
          setRelativeVolume: ee => {
            var be;
            if (ee > 1) throw new Error("Volume should be <= 1");
            return He = Te.e.get("soundOnFromAd") ? ee : 0, null === (be = this.liveHowl()) || void 0 === be || be.volume(Math.min(1, He * this._volumeMultiplier.getTotalMultipliedVal()), ie), ye
          },
          setPannerAttr: ee => {
            let {
              coneInnerAngle: He,
              coneOuterAngle: be = 360,
              coneOuterGain: Me,
              distanceModel: Ke,
              maxDistance: Ue,
              panningModel: Fe,
              refDistance: Je,
              rolloffFactor: oe
            } = ee;
            return this._setPannerAttr({
              id: ie,
              coneInnerAngle: He,
              coneOuterAngle: be,
              coneOuterGain: Me,
              distanceModel: Ke,
              maxDistance: Ue,
              panningModel: Fe,
              refDistance: Je,
              rolloffFactor: oe
            }), ye
          },
          setPosition: ee => {
            var He;
            return null === (He = this.liveHowl()) || void 0 === He || He.pos(ee[2], ee[1], ee[0], ie), ye
          }
        };
        return ye
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, Ke.f)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(ee) {
        this._volumeMultiplier.setMultiplierType("globalVolume", ee), this._howl.volume(ee)
      }
      _setPannerAttr(ee) {
        let {
          id: ie,
          coneInnerAngle: He = 360,
          coneOuterAngle: ye = 360,
          coneOuterGain: be = 0,
          distanceModel: Me = "inverse",
          maxDistance: Ke = 1e3,
          panningModel: Ue = "HRTF",
          refDistance: Fe = qe.j,
          rolloffFactor: Je = 1
        } = ee;
        const oe = this.liveHowl();
        if (null === oe) return;
        oe.pannerAttr({
          coneOuterAngle: ye
        }, ie);
        const Re = {
          coneInnerAngle: He,
          coneOuterAngle: ye,
          coneOuterGain: be,
          distanceModel: Me,
          maxDistance: Ke,
          panningModel: Ue,
          refDistance: Fe,
          rolloffFactor: Je
        };
        oe.pannerAttr(Re, ie)
      }
    }
    const de = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new pe.c, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, fe.h.subscribe("appManagerUpdated|soundVolume", (ee => {
          const ie = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const He of ie) He.setGlobalVolume(ee)
        }))
      }
      play(ee, ie) {
        var He;
        let Me, Ke = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (He = (0, ke.h)()) || void 0 === He ? void 0 : He.gC,
          Ue = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qe.f,
          Fe = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : qe.j,
          oe = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var fe;
        (0, ke.h)() ? Me = !!Array.isArray(Ke) || (0, Je.b)(Ke) !== (null === (fe = (0, ke.h)()) || void 0 === fe ? void 0 : fe.gC): Me = !1;
        const Te = (0, ye.j)(ee),
          Xe = this.loadSound(Me ? this.spatialSounds : this.stereoSounds, ee);
        if (!Me) {
          const ee = Xe.play(oe);
          return ee.setRelativeVolume(ie), ee
        }
        const ze = (0, ke.h)(),
          Be = Array.isArray(Ke) ? Ke : ze.sE.pE(Ke),
          Oe = ze.sE.pE(ze.gC);
        if (!Be || Re().sqrDist(Be, Oe) > Ue * Ue) return ge;
        let de;
        if (!oe) {
          if (!this.spatialVoices.admit({
              group: Ee.has(Te) ? null : (0, pe.i)(ee),
              loudness: (0, pe.f)(ie, Re().Po(Be, Oe), Fe),
              startMs: performance.now(),
              getDurationMs: () => {
                var ee, ie;
                return null !== (ee = null === (ie = de) || void 0 === ie ? void 0 : ie.getDurationMs()) && void 0 !== ee ? ee : 0
              },
              isAlive: () => {
                var ee, ie;
                return null !== (ee = null === (ie = de) || void 0 === ie ? void 0 : ie.isAlive()) && void 0 !== ee && ee
              },
              canStop: () => {
                var ee, ie;
                return null !== (ee = null === (ie = de) || void 0 === ie ? void 0 : ie.stopsAtOnce()) && void 0 !== ee && ee
              },
              stop: () => {
                var ee;
                null === (ee = de) || void 0 === ee || ee.stop()
              }
            })) return ge
        }
        return de = Xe.play(oe), de.setRelativeVolume(ie), de.setPannerAttr({
          refDistance: Fe
        }), de.setPosition([Be[0], Be[1] + be.g.UX * be.g.playerEyeToHeightRatio, Be[2]]), de
      }
      preload(ee) {
        const ie = (0, ye.o)(ee) ? [ee] : (0, ye.w)(ee);
        if (0 === ie.length) throw new Error(`Invalid sound name ${ee} (no sound has it or starts with it)`);
        for (const He of ie) this.loadSound(this.stereoSounds, He)
      }
      preloadAtIdle(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Be.e;
        const He = ee.filter((ee => !this.idlePreloads.has(ee)));
        for (const be of He) this.idlePreloads.add(be);
        const ye = this.idlePreloadGeneration;
        (0, ze.c)(He, {
          ...ie,
          Ce: () => ye !== this.idlePreloadGeneration,
          fetchFile: ee => {
            this.idlePreloads.delete(ee);
            try {
              return this.preload(ee), Promise.resolve()
            } catch (ie) {
              return Promise.reject(ie)
            }
          }
        })
      }
      loadSound(ee, ie) {
        const He = ee[ie];
        if (He) return He;
        const be = this.makeSound(ee, ie);
        for (const Ke of null !== (Me = (0, ye.r)(ie)) && void 0 !== Me ? Me : []) {
          var Me;
          ee[Ke] || this.makeSound(ee, Ke)
        }
        return be
      }
      makeSound(ee, ie) {
        (0, Be.h)(ie);
        const He = new Oe(ie);
        return He.setGlobalVolume(Te.e.get("soundVolume")), ee[ie] = He, He
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const ee of [this.stereoSounds, this.spatialSounds])
          for (const [ie, He] of Object.entries(ee)) !Xe.b.has((0, ye.j)(ie)) && He.loaded() && (He.unloadOnceIdle(), delete ee[ie])
      }
    }
  },
  37666: (ee, ie, He) => {
    function ye(ee, ie) {
      var He, ye, be, Me, Ke, Ue, Fe, Je;
      return ee.name === ie.name && ((null === (He = ee.attributes) || void 0 === He || null === (ye = He.customAttributes) || void 0 === ye ? void 0 : ye.stackKey) === (null === (be = ie.attributes) || void 0 === be || null === (Me = be.customAttributes) || void 0 === Me ? void 0 : Me.stackKey) && (!0 !== (null === (Ke = ee.attributes) || void 0 === Ke || null === (Ue = Ke.customAttributes) || void 0 === Ue ? void 0 : Ue.unstackable) && !0 !== (null === (Fe = ie.attributes) || void 0 === Fe || null === (Je = Fe.customAttributes) || void 0 === Je ? void 0 : Je.unstackable)))
    }
    He.d(ie, {
      d: () => ye
    })
  },
  37770: (ee, ie, He) => {
    function ye(ee) {
      return ee.includes("Leaf Bed")
    }

    function be(ee) {
      return / Bed(?: Head)?(?:\||$)/.test(ee) && !ye(ee)
    }

    function Me(ee) {
      return ee.includes(" Strongbed")
    }

    function Ke(ee) {
      return ye(ee) || be(ee) || Me(ee)
    }
    He.d(ie, {
      e: () => Ke,
      i: () => ye,
      k: () => Me,
      m: () => be
    })
  },
  37765: (ee, ie, He) => {
    He.d(ie, {
      d: () => Je
    });
    var ye = He(37770),
      be = He(9961);
    const Me = [],
      Ke = [],
      Ue = [],
      Fe = [];
    for (const oe of Object.keys(be.m))(0, ye.i)(oe) ? Me.push(oe) : (0, ye.m)(oe) && Ke.push(oe), (0, ye.k)(oe) && Ue.push(oe), (oe.includes(" Bed Head") || oe.includes(" Strongbed Head")) && Fe.push(oe);
    const Je = {
      leafBeds: Me,
      woolBeds: Ke,
      strongBeds: Ue,
      beds: [...Me, ...Ke, ...Ue],
      bedHeads: Fe,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  34844: () => {}
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);