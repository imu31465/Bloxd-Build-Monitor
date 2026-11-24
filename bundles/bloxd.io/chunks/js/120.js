export const id = 120;
export const ids = [120];
export const modules = {
  36698: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Ym,
      c: () => nm
    });
    fm(34264);
    var hm = fm(59),
      Am = fm(1449),
      am = fm(1905),
      xm = fm(1946),
      wm = fm(23),
      Dm = fm(2391),
      im = fm(36705),
      Rm = fm(36708),
      pm = fm(34245),
      Em = fm(34256),
      om = fm(34273),
      Om = fm(1135);
    const Ym = (0, hm.memo)((function() {
      var mm;
      const {
        isTouchScreen: Tm,
        clientEscMenuOptions: fm,
        scriptedCameraFacing: am,
        crosshairShownOverride: Ym,
        crosshairGameView: jm
      } = (0, wm.m)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Vm = (0, Dm.g)("gunshotOrigin"), Im = (0, hm.useRef)(null), Km = (0, hm.useRef)(!1), [Qm, Jm] = (0, hm.useState)(qm);
      (0, Am.g)("cameraZoomSet", Jm), (0, hm.useEffect)((() => {
        Jm(qm())
      }), []);
      const cm = (0, xm.k)("heldItemAim"),
        Zm = cm.gun,
        km = (0, om.g)(),
        bm = (0, hm.useRef)(km);
      bm.current = km;
      const [Sm, em] = (0, hm.useState)(!1);
      (0, hm.useEffect)((() => (0, Rm.c)("crosshairAccuracy", nm)), []), (0, Am.g)("mouseState", (mm => {
        let {
          isDown: Tm
        } = mm;
        Km.current = Tm, Im.current && (Im.current.style.transform = (0, Em.f)(Tm, bm.current.growOnClick)), "shapes" === bm.current.style && em(Tm)
      }));
      const Nm = (0, pm.i)(Tm, fm.touchActionButtons);
      return (null !== (mm = (0, im.e)(jm, Ym)) && void 0 !== mm ? mm : (0, im.h)(cm, Qm > 1, Nm, Vm)) ? "movement" === am || "cursor" === am ? null : (0, Om.jsxs)(Om.Fragment, {
        children: [Zm && (0, Om.jsx)(zm, {
          custom: km.forGuns && "shapes" === km.style ? km : null,
          touch: Tm
        }), !Zm && (0, Om.jsx)(Em.d, {
          settings: km,
          touch: Tm,
          pressRef: Im,
          pressed: "shapes" === km.style ? Sm : Km.current
        })]
      }) : null
    }));

    function qm() {
      return am.gameBridge.lookup("cameraZoom", null)
    }
    const jm = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Vm = {
        current: null
      },
      Im = {
        current: null
      };
    let Km = 0,
      Qm = 0;

    function nm(mm) {
      Qm = mm, jm[0].current || Vm.current || Im.current ? cm(mm) : Km = mm
    }

    function Jm(mm) {
      return ((0, im.g)(mm) - (0, im.g)(0)) * window.innerHeight / 100
    }

    function cm(mm) {
      var Tm;
      if (null === (Tm = Im.current) || void 0 === Tm || Tm.call(Im, Jm(mm)), jm[0].current) {
        const Tm = `${(0,im.g)(mm)}vh`;
        jm[0].current.style.transform = `translateX(calc(0px - ${Tm}))`, jm[1].current.style.transform = `translateX(calc(0px + ${Tm}))`, jm[2].current.style.transform = `translateY(calc(0px - ${Tm}))`, jm[3].current.style.transform = `translateY(calc(0px + ${Tm}))`
      }
      Vm.current && (Vm.current.style.filter = `blur(${Math.round(mm/10)}px)`)
    }

    function zm(mm) {
      let {
        custom: Tm,
        touch: fm
      } = mm;
      const am = (0, Am.i)("aimingOverlay", "none"),
        xm = "1.2vh",
        wm = "0.3vh";
      (0, hm.useEffect)((() => {
        Km && cm(Km)
      }), []);
      const Dm = (0, hm.useRef)(null !== Tm);
      return (0, hm.useLayoutEffect)((() => {
        var mm;
        Tm ? null === (mm = Im.current) || void 0 === mm || mm.call(Im, Jm(Qm)) : Dm.current && cm(Qm);
        Dm.current = null !== Tm
      }), [Tm]), (0, Om.jsxs)(Om.Fragment, {
        children: ["sniper" === am && (0, Om.jsxs)("div", {
          ref: Vm,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, Om.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, Om.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, Om.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, Om.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, Om.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === am ? 0 : 1
          },
          children: [Tm && (0, Om.jsx)(Em.d, {
            settings: Tm,
            touch: fm,
            spreadRef: Im
          }), !Tm && (0, Om.jsxs)(Om.Fragment, {
            children: [(0, Om.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: xm,
                height: wm,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: jm[0]
            }), (0, Om.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: xm,
                height: wm,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: jm[1]
            }), (0, Om.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: wm,
                height: xm,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: jm[2]
            }), (0, Om.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: wm,
                height: xm,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: jm[3]
            })]
          })]
        })]
      })
    }
  },
  34256: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Ym,
      f: () => Om
    });
    fm(34264);
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(59),
      xm = fm(34251);

    function wm(mm, Tm) {
      return Math.max(1, Math.round(mm * Tm))
    }

    function Dm(mm, Tm) {
      const fm = Tm * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        hm = function(mm, Tm) {
          if (mm.lines) return wm(mm.lineThickness, Tm) % 2;
          if (mm.dot) return wm(mm.dotSize, Tm) % 2;
          return im(mm, Tm) % 2
        }(mm, Tm),
        Am = Rm(mm.lineThickness * fm, hm),
        am = wm(mm.lineLength, fm),
        xm = Math.round(mm.gap * fm),
        Dm = mm.outline > 0 ? wm(mm.outline, fm) : 0,
        Em = [];
      if (mm.lines && (Em.push({
          x: Am + xm,
          y: 0,
          w: am,
          h: Am,
          arm: "right"
        }), Em.push({
          x: -xm - am,
          y: 0,
          w: am,
          h: Am,
          arm: "left"
        }), Em.push({
          x: 0,
          y: Am + xm,
          w: Am,
          h: am,
          arm: "down"
        }), mm.tStyle || Em.push({
          x: 0,
          y: -xm - am,
          w: Am,
          h: am,
          arm: "up"
        }), 0 === xm && Em.push({
          x: 0,
          y: 0,
          w: Am,
          h: Am
        })), mm.dot) {
        const Tm = Rm(mm.dotSize * fm, hm),
          am = mm.lines && 0 === xm && mm.dotSize > mm.lineThickness ? Math.max(Tm, Am + 2) : Tm,
          wm = (Am - am) / 2;
        Em.push({
          x: wm,
          y: wm,
          w: am,
          h: am
        })
      }
      const om = Em.map((mm => ({
        ...mm,
        x: mm.x - Dm,
        y: mm.y - Dm,
        w: mm.w + 2 * Dm,
        h: mm.h + 2 * Dm
      })));
      let Om = null,
        Ym = null;
      if (mm.circle) {
        const Tm = wm(mm.circleThickness, fm),
          am = function(mm, Tm) {
            return mm + (mm % 2 === Tm ? 0 : 1)
          }(im(mm, fm), hm),
          xm = (Am - am) / 2;
        Om = pm(xm, am, Tm), Dm > 0 && (Ym = pm(xm - Dm, am + 2 * Dm, Tm + 2 * Dm))
      }
      return {
        cell: Am,
        fills: Em,
        outlines: Dm > 0 ? om : [],
        ring: Om,
        ringOutline: Ym
      }
    }

    function im(mm, Tm) {
      return Math.round(mm.circleRadius * Tm * 2 + wm(mm.circleThickness, Tm))
    }

    function Rm(mm, Tm) {
      return Math.max(2 - Tm, 2 * Math.round((mm - Tm) / 2) + Tm)
    }

    function pm(mm, Tm, fm) {
      const hm = 2 * fm >= Tm - 1;
      return {
        x: mm,
        y: mm,
        size: Tm,
        border: Math.min(fm, Math.floor(Tm / 2)),
        filled: hm
      }
    }
    var Em = fm(1135);
    const om = 1.4;

    function Om(mm, Tm) {
      return mm && Tm ? `scale(${om})` : "scale(1)"
    }

    function Ym(mm) {
      return "classic" === mm.settings.style ? (0, Em.jsx)(Vm, {
        ...mm
      }) : (0, Em.jsx)(zm, {
        ...mm
      })
    }
    const qm = .125;

    function jm(mm, Tm) {
      const fm = {};
      if (mm.color !== xm.h.color && (fm.color = (0, xm.m)(mm.color)), mm.opacity !== xm.h.opacity && (fm.opacity = mm.opacity / 100), mm.outline !== xm.h.outline || mm.outlineColor !== xm.h.outlineColor) {
        const Tm = mm.outline,
          hm = (0, xm.m)(mm.outlineColor);
        fm.textShadow = Tm > 0 ? `-${Tm}px 0 ${hm}, 0 ${Tm}px ${hm}, ${Tm}px 0 ${hm}, 0 -${Tm}px ${hm}` : "none"
      }
      if (mm.size !== xm.h.size) {
        const hm = mm.size / 100;
        fm.fontSize = Tm ? `calc(max(1.3rem, 18px) * ${hm})` : `calc(1.3rem * ${hm})`, fm.marginTop = `-${qm}em`, fm.transformOrigin = `50% calc(50% + ${qm}em)`
      }
      return fm
    }

    function Vm(mm) {
      let {
        settings: Tm,
        touch: fm,
        inPreview: hm,
        inEditor: am,
        pressed: xm = !1,
        pressRef: wm
      } = mm;
      return (0, Em.jsx)("div", {
        className: Am()("Crosshair", {
          Touch: fm,
          CrosshairInPreview: hm,
          CrosshairInEditor: am || hm
        }),
        ref: wm,
        style: {
          transform: Om(xm, Tm.growOnClick),
          ...jm(Tm, fm)
        },
        children: "+"
      })
    }

    function Im(mm, Tm) {
      return mm / Tm + "px"
    }

    function Km(mm, Tm, fm, hm) {
      return {
        ...Jm(mm, Tm, fm),
        width: Im(mm.w, fm),
        height: Im(mm.h, fm),
        background: hm
      }
    }

    function Qm(mm, Tm, fm) {
      return {
        left: Im(mm.x, Tm),
        top: Im(mm.y, Tm),
        width: Im(mm.size, Tm),
        height: Im(mm.size, Tm),
        borderWidth: Im(mm.border, Tm),
        borderColor: fm,
        background: mm.filled ? fm : void 0
      }
    }
    const nm = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Jm(mm, Tm, fm) {
      const [hm, Am] = mm.arm ? nm[mm.arm] : [0, 0], am = Math.round(Tm * fm);
      return {
        left: Im(mm.x + hm * am, fm),
        top: Im(mm.y + Am * am, fm)
      }
    }

    function cm(mm) {
      return mm.arm ? {
        "data-arm": mm.arm,
        "data-x": mm.x,
        "data-y": mm.y
      } : {}
    }

    function zm(mm) {
      let {
        settings: Tm,
        inPreview: fm,
        inEditor: hm,
        pressed: wm = !1,
        spread: im,
        spreadRef: Rm
      } = mm;
      const pm = (0, am.useRef)(null),
        {
          box: Om,
          dpr: Ym
        } = function(mm) {
          const [Tm, fm] = (0, am.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, am.useLayoutEffect)((() => {
            const Tm = mm.current;
            if (!Tm) return;
            const hm = () => {
              const mm = Tm.getBoundingClientRect(),
                hm = window.devicePixelRatio || 1;
              fm((Tm => Tm.dpr === hm && Tm.box.left === mm.left && Tm.box.top === mm.top && Tm.box.width === mm.width && Tm.box.height === mm.height ? Tm : {
                box: {
                  left: mm.left,
                  top: mm.top,
                  width: mm.width,
                  height: mm.height
                },
                dpr: hm
              }))
            };
            hm();
            const Am = new ResizeObserver(hm);
            return Am.observe(Tm), window.addEventListener("resize", hm), window.addEventListener("scroll", hm, !0), () => {
              Am.disconnect(), window.removeEventListener("resize", hm), window.removeEventListener("scroll", hm, !0)
            }
          }), [mm]), Tm
        }(pm),
        qm = (0, am.useRef)(Ym);
      qm.current = Ym;
      const jm = Dm(Tm, Ym, wm && Tm.growOnClick ? om : 1),
        Vm = function(mm, Tm, fm) {
          const hm = Math.round((mm.left + mm.width / 2) * fm - Tm / 2),
            Am = Math.round((mm.top + mm.height / 2) * fm - Tm / 2);
          return {
            x: hm / fm - mm.left,
            y: Am / fm - mm.top
          }
        }(Om, jm.cell, Ym),
        Im = (0, xm.m)(Tm.color),
        nm = (0, xm.m)(Tm.outlineColor),
        zm = (0, am.useRef)(0);
      (0, am.useLayoutEffect)((() => {
        if (Rm) return Rm.current = mm => {
          var Tm;
          zm.current = mm, null === (Tm = pm.current) || void 0 === Tm || Tm.querySelectorAll("[data-arm]").forEach((Tm => {
            Object.assign(Tm.style, Jm(function(mm) {
              return {
                x: Number(mm.dataset.x),
                y: Number(mm.dataset.y),
                arm: mm.dataset.arm
              }
            }(Tm), mm, qm.current))
          }))
        }, () => {
          Rm.current = null
        }
      }), [Rm]);
      const Zm = null !== im && void 0 !== im ? im : zm.current;
      return (0, Em.jsx)("div", {
        ref: pm,
        className: Am()("CrosshairShapes", {
          CrosshairInPreview: fm,
          CrosshairInEditor: hm || fm,
          CrosshairSpreads: void 0 !== Rm
        }),
        children: (0, Em.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Vm.x,
            top: Vm.y,
            opacity: Tm.opacity / 100
          },
          children: (0, Em.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [jm.ringOutline && (0, Em.jsx)("div", {
              className: "CrosshairRing",
              style: Qm(jm.ringOutline, Ym, nm)
            }), jm.outlines.map(((mm, Tm) => (0, Em.jsx)("div", {
              className: "CrosshairPart",
              ...cm(mm),
              style: Km(mm, Zm, Ym, nm)
            }, `o${Tm}`))), jm.ring && (0, Em.jsx)("div", {
              className: "CrosshairRing",
              style: Qm(jm.ring, Ym, Im)
            }), jm.fills.map(((mm, Tm) => (0, Em.jsx)("div", {
              className: "CrosshairPart",
              ...cm(mm),
              style: Km(mm, Zm, Ym, Im)
            }, `f${Tm}`)))]
          })
        })
      })
    }
  },
  34268: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      f: () => qm,
      g: () => Ym
    });
    var hm = fm(34251);
    const Am = "XH1-",
      am = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      xm = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      wm = ["color", "outlineColor"],
      Dm = 1 + 3 * wm.length + xm.length + 1,
      im = Math.ceil(8 * Dm / Math.log2(62)),
      Rm = Am.length + im;

    function pm(mm) {
      let Tm = 90;
      for (const fm of mm) Tm = 31 * Tm + fm & 255;
      return Tm
    }
    const Em = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      om = BigInt(Em.length);

    function Om(mm, Tm) {
      let fm = 0n;
      for (const Am of mm) {
        const mm = Em.indexOf(Am);
        if (mm < 0) return null;
        fm = fm * om + BigInt(mm)
      }
      if (fm >> BigInt(8 * Tm) !== 0n) return null;
      const hm = [];
      for (let Am = 0; Am < Tm; Am++) hm.unshift(Number(0xffn & fm)), fm >>= 8n;
      return hm
    }

    function Ym(mm) {
      let Tm = "shapes" === mm.style ? 1 : 0;
      am.forEach(((fm, hm) => {
        mm[fm] && (Tm |= 1 << hm + 1)
      }));
      const fm = [Tm];
      for (const Am of wm) {
        const Tm = (0, hm.k)(Am, mm[Am]);
        fm.push(Tm >> 16 & 255, Tm >> 8 & 255, 255 & Tm)
      }
      for (const Am of xm) {
        const {
          min: Tm,
          step: am
        } = hm.d[Am];
        fm.push(Math.round(((0, hm.k)(Am, mm[Am]) - Tm) / am))
      }
      return fm.push(pm(fm)), Am + function(mm, Tm) {
        let fm = 0n;
        for (const Am of mm) fm = fm << 8n | BigInt(Am);
        let hm = "";
        for (let Am = 0; Am < Tm; Am++) hm = Em[Number(fm % om)] + hm, fm /= om;
        return hm
      }(fm, im)
    }

    function qm(mm) {
      for (const Tm of mm.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${im}})`, "gi"))) {
        const mm = jm(Om(Tm[1], Dm));
        if (mm) return mm
      }
      return null
    }

    function jm(mm) {
      if (!mm || mm.length !== Dm || pm(mm.slice(0, -1)) !== mm[mm.length - 1]) return null;
      const Tm = mm[0],
        fm = {
          ...hm.h,
          style: 1 & Tm ? "shapes" : "classic"
        };
      am.forEach(((mm, hm) => {
        fm[mm] = 0 !== (Tm & 1 << hm + 1)
      }));
      let Am = 1;
      for (const hm of wm) fm[hm] = mm[Am] << 16 | mm[Am + 1] << 8 | mm[Am + 2], Am += 3;
      for (const am of xm) {
        const {
          min: Tm,
          step: xm
        } = hm.d[am];
        fm[am] = (0, hm.k)(am, Tm + mm[Am] * xm), Am++
      }
      return fm
    }
  },
  34251: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      h: () => Am,
      k: () => am,
      m: () => im,
      o: () => Dm,
      p: () => Rm,
      t: () => wm,
      u: () => xm
    });
    const hm = {
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
      Am = Object.freeze({
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

    function am(mm, Tm) {
      var fm;
      const {
        min: am,
        max: xm,
        step: wm
      } = hm[mm];
      if (!Number.isFinite(Tm)) return Am[mm];
      const Dm = (null !== (fm = String(wm).split(".")[1]) && void 0 !== fm ? fm : "").length,
        im = Number((Math.round(Tm / wm) * wm).toFixed(Dm));
      return Math.min(xm, Math.max(am, im))
    }

    function xm(mm, Tm, fm) {
      const hm = "number" === typeof fm ? am(Tm, fm) : fm;
      return {
        ...mm,
        [Tm]: hm
      }
    }

    function wm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Am).every((hm => fm.includes(hm) || mm[hm] === Tm[hm]))
    }

    function Dm(mm) {
      return wm(mm, Am)
    }

    function im(mm) {
      return `#${mm.toString(16).padStart(6,"0")}`
    }

    function Rm(mm) {
      const Tm = /^#?([0-9a-f]{6})$/i.exec(mm.trim());
      return Tm ? parseInt(Tm[1], 16) : null
    }
  },
  34273: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => pm,
      g: () => Em
    });
    var hm = fm(59),
      Am = fm(37),
      am = fm(34268),
      xm = fm(34251);
    const wm = "crosshairCode";
    let Dm = null;
    const im = new Set;

    function Rm() {
      if (null === Dm) {
        var mm;
        const Tm = Am.g.getItem(wm);
        Dm = null !== (mm = "string" === typeof Tm ? (0, am.f)(Tm) : null) && void 0 !== mm ? mm : xm.h
      }
      return Dm
    }

    function pm(mm) {
      Dm = mm, (0, xm.o)(mm) ? Am.g.removeItem(wm) : Am.g.setItem(wm, (0, am.g)(mm));
      for (const Tm of im) Tm()
    }

    function Em() {
      const [mm, Tm] = (0, hm.useState)(Rm);
      return (0, hm.useEffect)((() => {
        const mm = () => {
          Tm(Rm())
        };
        return mm(), fm = mm, im.add(fm), () => {
          im.delete(fm)
        };
        var fm
      }), []), mm
    }
  },
  36861: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      h: () => Dm,
      i: () => xm
    });
    var hm = fm(653),
      Am = fm(2760);

    function am(mm) {
      return mm === (0, Am.d)().Cmm ? (0, Am.d)().xH : mm
    }

    function xm(mm) {
      return !(0, hm.H)(mm) && am(mm) === (0, Am.d)().xH
    }
    const wm = "gravity";

    function Dm() {
      return (0, Am.d)().physics[wm][1]
    }
  },
  36843: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Jm
    });
    var hm = fm(36846),
      Am = fm(198),
      am = fm(4800),
      xm = fm(36853),
      wm = fm(36516),
      Dm = fm(36895),
      im = fm(36861),
      Rm = fm(362),
      pm = fm.n(Rm),
      Em = fm(1214),
      om = fm(2760),
      Om = fm(36886),
      Ym = fm(31),
      qm = fm(23),
      jm = fm(36863),
      Vm = fm(36868),
      Im = fm(36871);
    const Km = new Set(["note"]);
    const Qm = {
      stop: () => Qm,
      fade: () => Qm,
      rate: () => Qm,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Qm,
      setPannerAttr: () => Qm,
      setPosition: () => Qm
    };
    class nm {
      constructor(mm) {
        let Tm, {
          src: fm,
          volumeScalar: Am,
          isSoundSprite: xm
        } = mm;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, xm ? (Tm = (0, hm.h)(fm), this._spriteTrackSrc = Tm) : Tm = {
          src: Em.clientSideServerUrls.staticUrl + fm
        }, this._volumeMultiplier = new Dm.k, this._volumeMultiplier.setMultiplierType("persistentScalar", Am), this._howl = (0, wm.countDecodesAs)(new am.Howl({
          ...Tm,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let mm, Tm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          fm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Tm) {
          var hm;
          if (null === (hm = this._spriteTrackSrc) || void 0 === hm || !hm.sprite[Tm]) throw new Error("No such sprite in your spritetrack");
          mm = this._howl.play(Tm)
        } else mm = this._howl.play();
        fm && this._howl.loop(!0, mm);
        let Am = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), mm);
        const am = {
          stop: () => {
            var Tm;
            return null === (Tm = this.liveHowl()) || void 0 === Tm || Tm.stop(mm), am
          },
          fade: (Tm, fm, hm) => {
            var Am;
            return null === (Am = this.liveHowl()) || void 0 === Am || Am.fade(Tm, fm, hm, mm), am
          },
          rate: Tm => {
            var fm;
            return null === (fm = this.liveHowl()) || void 0 === fm || fm.rate(Tm, mm), am
          },
          stopsAtOnce: () => this._howl.playing(mm) && !this._howl._playLock,
          isAlive: () => {
            const Tm = this._howl._soundById(mm);
            return !this._loadFailed && !!Tm && !Tm._ended
          },
          getDurationMs: () => this._howl._soundById(mm) ? 1e3 * this._howl.duration(mm) / this._howl.rate(mm) : 0,
          getVolume: () => Am * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Am,
          setRelativeVolume: Tm => {
            var fm;
            if (Tm > 1) throw new Error("Volume should be <= 1");
            return Am = qm.c.get("soundOnFromAd") ? Tm : 0, null === (fm = this.liveHowl()) || void 0 === fm || fm.volume(Math.min(1, Am * this._volumeMultiplier.getTotalMultipliedVal()), mm), am
          },
          setPannerAttr: Tm => {
            let {
              coneInnerAngle: fm,
              coneOuterAngle: hm = 360,
              coneOuterGain: Am,
              distanceModel: xm,
              maxDistance: wm,
              panningModel: Dm,
              refDistance: im,
              rolloffFactor: Rm
            } = Tm;
            return this._setPannerAttr({
              id: mm,
              coneInnerAngle: fm,
              coneOuterAngle: hm,
              coneOuterGain: Am,
              distanceModel: xm,
              maxDistance: wm,
              panningModel: Dm,
              refDistance: im,
              rolloffFactor: Rm
            }), am
          },
          setPosition: Tm => {
            var fm;
            return null === (fm = this.liveHowl()) || void 0 === fm || fm.pos(Tm[2], Tm[1], Tm[0], mm), am
          }
        };
        return am
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, xm.b)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(mm) {
        this._volumeMultiplier.setMultiplierType("globalVolume", mm), this._howl.volume(mm)
      }
      _setPannerAttr(mm) {
        let {
          id: Tm,
          coneInnerAngle: fm = 360,
          coneOuterAngle: hm = 360,
          coneOuterGain: Am = 0,
          distanceModel: am = "inverse",
          maxDistance: xm = 1e3,
          panningModel: wm = "HRTF",
          refDistance: Dm = Om.f,
          rolloffFactor: im = 1
        } = mm;
        const Rm = this.liveHowl();
        if (null === Rm) return;
        Rm.pannerAttr({
          coneOuterAngle: hm
        }, Tm);
        const pm = {
          coneInnerAngle: fm,
          coneOuterAngle: hm,
          coneOuterGain: Am,
          distanceModel: am,
          maxDistance: xm,
          panningModel: wm,
          refDistance: Dm,
          rolloffFactor: im
        };
        Rm.pannerAttr(pm, Tm)
      }
    }
    const Jm = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new jm.c, Ym.j.subscribe("appManagerUpdated|soundVolume", (mm => {
          const Tm = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const fm of Tm) fm.setGlobalVolume(mm)
        }))
      }
      play(mm, Tm) {
        var fm;
        let am, xm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (fm = (0, om.d)()) || void 0 === fm ? void 0 : fm.xH,
          wm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Om.e,
          Dm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Om.f,
          Rm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Em;
        (0, om.d)() ? am = !!Array.isArray(xm) || (0, im.d)(xm) !== (null === (Em = (0, om.d)()) || void 0 === Em ? void 0 : Em.xH): am = !1;
        const Ym = (0, hm.j)(mm),
          qm = this.loadSheet(am ? this.spatialSheets : this.stereoSheets, Ym);
        if (!am) {
          const fm = qm.play(mm, Rm);
          return fm.setRelativeVolume(Tm), fm
        }
        const Vm = (0, om.d)(),
          Im = Array.isArray(xm) ? xm : Vm.qI.rV(xm),
          nm = Vm.qI.rV(Vm.xH);
        if (!Im || pm().sqrDist(Im, nm) > wm * wm) return Qm;
        let Jm;
        if (!Rm) {
          if (!this.spatialVoices.admit({
              group: Km.has(Ym) ? null : (0, jm.h)(mm),
              loudness: (0, jm.f)(Tm, pm().Tp(Im, nm), Dm),
              startMs: performance.now(),
              getDurationMs: () => {
                var mm, Tm;
                return null !== (mm = null === (Tm = Jm) || void 0 === Tm ? void 0 : Tm.getDurationMs()) && void 0 !== mm ? mm : 0
              },
              isAlive: () => {
                var mm, Tm;
                return null !== (mm = null === (Tm = Jm) || void 0 === Tm ? void 0 : Tm.isAlive()) && void 0 !== mm && mm
              },
              canStop: () => {
                var mm, Tm;
                return null !== (mm = null === (Tm = Jm) || void 0 === Tm ? void 0 : Tm.stopsAtOnce()) && void 0 !== mm && mm
              },
              stop: () => {
                var mm;
                null === (mm = Jm) || void 0 === mm || mm.stop()
              }
            })) return Qm
        }
        return Jm = qm.play(mm, Rm), Jm.setRelativeVolume(Tm), Jm.setPannerAttr({
          refDistance: Dm
        }), Jm.setPosition([Im[0], Im[1] + Am.f.gq * Am.f.playerEyeToHeightRatio, Im[2]]), Jm
      }
      preload(mm) {
        this.loadSheet(this.stereoSheets, (0, hm.j)(mm))
      }
      loadSheet(mm, Tm) {
        let fm = mm[Tm];
        return fm || ((0, Im.e)(Tm), fm = new nm({
          src: Tm,
          isSoundSprite: !0,
          volumeScalar: 1
        }), fm.setGlobalVolume(qm.c.get("soundVolume")), mm[Tm] = fm), fm
      }
      freeSheetsAfterGame() {
        for (const mm of [this.stereoSheets, this.spatialSheets])
          for (const [Tm, fm] of Object.entries(mm)) !Vm.c.has(Tm) && fm.loaded() && (fm.unloadOnceIdle(), delete mm[Tm])
      }
    }
  },
  36941: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      var fm, hm, Am, am, xm, wm, Dm, im;
      return mm.name === Tm.name && ((null === (fm = mm.attributes) || void 0 === fm || null === (hm = fm.customAttributes) || void 0 === hm ? void 0 : hm.stackKey) === (null === (Am = Tm.attributes) || void 0 === Am || null === (am = Am.customAttributes) || void 0 === am ? void 0 : am.stackKey) && (!0 !== (null === (xm = mm.attributes) || void 0 === xm || null === (wm = xm.customAttributes) || void 0 === wm ? void 0 : wm.unstackable) && !0 !== (null === (Dm = Tm.attributes) || void 0 === Dm || null === (im = Dm.customAttributes) || void 0 === im ? void 0 : im.unstackable)))
    }
    fm.d(Tm, {
      b: () => hm
    })
  },
  37039: (mm, Tm, fm) => {
    function hm(mm) {
      return mm.includes("Leaf Bed")
    }

    function Am(mm) {
      return / Bed(?: Head)?(?:\||$)/.test(mm) && !hm(mm)
    }

    function am(mm) {
      return mm.includes(" Strongbed")
    }

    function xm(mm) {
      return hm(mm) || Am(mm) || am(mm)
    }
    fm.d(Tm, {
      b: () => xm,
      f: () => hm,
      j: () => am,
      l: () => Am
    })
  },
  37032: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im
    });
    var hm = fm(37039),
      Am = fm(9141);
    const am = [],
      xm = [],
      wm = [],
      Dm = [];
    for (const Rm of Object.keys(Am.m))(0, hm.f)(Rm) ? am.push(Rm) : (0, hm.l)(Rm) && xm.push(Rm), (0, hm.j)(Rm) && wm.push(Rm), (Rm.includes(" Bed Head") || Rm.includes(" Strongbed Head")) && Dm.push(Rm);
    const im = {
      leafBeds: am,
      woolBeds: xm,
      strongBeds: wm,
      beds: [...am, ...xm, ...wm],
      bedHeads: Dm,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6451: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      c: () => Am,
      g: () => Dm,
      i: () => am,
      l: () => im,
      m: () => hm,
      n: () => wm
    });
    let hm = function(mm) {
        return mm[mm.DEFAULT = 0] = "DEFAULT", mm[mm.BOAT = 1] = "BOAT", mm[mm.GLIDER = 2] = "GLIDER", mm[mm.BALLOON = 3] = "BALLOON", mm[mm.SLEEPING = 4] = "SLEEPING", mm[mm.RIDING_MOB = 5] = "RIDING_MOB", mm[mm.CAR = 6] = "CAR", mm[mm.HOVERCRAFT = 7] = "HOVERCRAFT", mm
      }({}),
      Am = function(mm) {
        return mm[mm.WOOD = 0] = "WOOD", mm[mm.OBSIDIAN = 1] = "OBSIDIAN", mm[mm.SPEED = 2] = "SPEED", mm
      }({}),
      am = function(mm) {
        return mm[mm.WOOD = 0] = "WOOD", mm[mm.IRON = 1] = "IRON", mm[mm.GOLD = 2] = "GOLD", mm[mm.DIAMOND = 3] = "DIAMOND", mm
      }({}),
      xm = function(mm) {
        return mm[mm.YELLOW = 0] = "YELLOW", mm[mm.WHITE = 1] = "WHITE", mm[mm.RED = 2] = "RED", mm[mm.PURPLE = 3] = "PURPLE", mm[mm.PINK = 4] = "PINK", mm[mm.ORANGE = 5] = "ORANGE", mm[mm.MAGENTA = 6] = "MAGENTA", mm[mm.LIME = 7] = "LIME", mm[mm.LIGHT_GRAY = 8] = "LIGHT_GRAY", mm[mm.LIGHT_BLUE = 9] = "LIGHT_BLUE", mm[mm.GREEN = 10] = "GREEN", mm[mm.GRAY = 11] = "GRAY", mm[mm.CYAN = 12] = "CYAN", mm[mm.BROWN = 13] = "BROWN", mm[mm.BLUE = 14] = "BLUE", mm[mm.BLACK = 15] = "BLACK", mm
      }({}),
      wm = function(mm) {
        return mm[mm.ROTATION_1 = 0] = "ROTATION_1", mm[mm.ROTATION_2 = 1] = "ROTATION_2", mm[mm.ROTATION_3 = 2] = "ROTATION_3", mm[mm.ROTATION_4 = 3] = "ROTATION_4", mm
      }({}),
      Dm = function(mm) {
        return mm[mm.KART = 0] = "KART", mm[mm.OFF_ROADER = 1] = "OFF_ROADER", mm[mm.CAR = 2] = "CAR", mm[mm.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", mm[mm.ARMORED_CAR = 4] = "ARMORED_CAR", mm[mm.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", mm[mm.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", mm[mm.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", mm
      }({});
    hm.DEFAULT, hm.BOAT, Am.SPEED, hm.GLIDER, am.DIAMOND, hm.BALLOON, xm.BLACK, hm.SLEEPING, wm.ROTATION_4, hm.RIDING_MOB, hm.CAR, Dm.MOONSTONE_MINING_DRILL, hm.HOVERCRAFT;
    let im = function(mm) {
      return mm[mm.NORMAL = 0] = "NORMAL", mm[mm.GLIDING = 1] = "GLIDING", mm[mm.FLOATING = 2] = "FLOATING", mm
    }({})
  },
  34264: () => {}
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);