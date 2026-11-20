export const id = 113;
export const ids = [113];
export const modules = {
  36097: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Dz,
      f: () => xz
    });
    sz(8821);
    var Fz = sz(65),
      Wz = sz(1416),
      Xz = sz(1857),
      Oz = sz(1901),
      oz = sz(30),
      vz = sz(2290),
      Uz = sz(36103),
      Kz = sz(36112),
      uz = sz(8779),
      Nz = sz(8813),
      bz = sz(8826),
      wz = sz(1087);
    const Dz = (0, Fz.memo)((function() {
      var zz;
      const {
        isTouchScreen: tz,
        clientEscMenuOptions: sz,
        scriptedCameraFacing: Xz,
        crosshairShownOverride: Dz,
        crosshairGameView: Hz
      } = (0, oz.h)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Bz = (0, vz.e)("gunshotOrigin"), Pz = (0, Fz.useRef)(null), rz = (0, Fz.useRef)(!1), [Yz, mz] = (0, Fz.useState)(gz);
      (0, Wz.g)("cameraZoomSet", mz), (0, Fz.useEffect)((() => {
        mz(gz())
      }), []);
      const Jz = (0, Oz.l)("heldItemAim"),
        Cz = Jz.gun,
        ez = (0, bz.f)(),
        Zz = (0, Fz.useRef)(ez);
      Zz.current = ez;
      const [Gz, Tz] = (0, Fz.useState)(!1);
      (0, Fz.useEffect)((() => (0, Kz.i)("crosshairAccuracy", xz)), []), (0, Wz.g)("mouseState", (zz => {
        let {
          isDown: tz
        } = zz;
        rz.current = tz, Pz.current && (Pz.current.style.transform = (0, Nz.f)(tz, Zz.current.growOnClick)), "shapes" === Zz.current.style && Tz(tz)
      }));
      const cz = (0, uz.i)(tz, sz.touchActionButtons);
      return (null !== (zz = (0, Uz.c)(Hz, Dz)) && void 0 !== zz ? zz : (0, Uz.h)(Jz, Yz > 1, cz, Bz)) ? "movement" === Xz || "cursor" === Xz ? null : (0, wz.jsxs)(wz.Fragment, {
        children: [Cz && (0, wz.jsx)(Iz, {
          custom: ez.forGuns && "shapes" === ez.style ? ez : null,
          touch: tz
        }), !Cz && (0, wz.jsx)(Nz.d, {
          settings: ez,
          touch: tz,
          pressRef: Pz,
          pressed: "shapes" === ez.style ? Gz : rz.current
        })]
      }) : null
    }));

    function gz() {
      return Xz.gameBridge.lookup("cameraZoom", null)
    }
    const Hz = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Bz = {
        current: null
      },
      Pz = {
        current: null
      };
    let rz = 0,
      Yz = 0;

    function xz(zz) {
      Yz = zz, Hz[0].current || Bz.current || Pz.current ? Jz(zz) : rz = zz
    }

    function mz(zz) {
      return ((0, Uz.g)(zz) - (0, Uz.g)(0)) * window.innerHeight / 100
    }

    function Jz(zz) {
      var tz;
      if (null === (tz = Pz.current) || void 0 === tz || tz.call(Pz, mz(zz)), Hz[0].current) {
        const tz = `${(0,Uz.g)(zz)}vh`;
        Hz[0].current.style.transform = `translateX(calc(0px - ${tz}))`, Hz[1].current.style.transform = `translateX(calc(0px + ${tz}))`, Hz[2].current.style.transform = `translateY(calc(0px - ${tz}))`, Hz[3].current.style.transform = `translateY(calc(0px + ${tz}))`
      }
      Bz.current && (Bz.current.style.filter = `blur(${Math.round(zz/10)}px)`)
    }

    function Iz(zz) {
      let {
        custom: tz,
        touch: sz
      } = zz;
      const Xz = (0, Wz.h)("aimingOverlay", "none"),
        Oz = "1.2vh",
        oz = "0.3vh";
      (0, Fz.useEffect)((() => {
        rz && Jz(rz)
      }), []);
      const vz = (0, Fz.useRef)(null !== tz);
      return (0, Fz.useLayoutEffect)((() => {
        var zz;
        tz ? null === (zz = Pz.current) || void 0 === zz || zz.call(Pz, mz(Yz)) : vz.current && Jz(Yz);
        vz.current = null !== tz
      }), [tz]), (0, wz.jsxs)(wz.Fragment, {
        children: ["sniper" === Xz && (0, wz.jsxs)("div", {
          ref: Bz,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, wz.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, wz.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, wz.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, wz.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, wz.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === Xz ? 0 : 1
          },
          children: [tz && (0, wz.jsx)(Nz.d, {
            settings: tz,
            touch: sz,
            spreadRef: Pz
          }), !tz && (0, wz.jsxs)(wz.Fragment, {
            children: [(0, wz.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Oz,
                height: oz,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Hz[0]
            }), (0, wz.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Oz,
                height: oz,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: Hz[1]
            }), (0, wz.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: oz,
                height: Oz,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Hz[2]
            }), (0, wz.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: oz,
                height: Oz,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: Hz[3]
            })]
          })]
        })]
      })
    }
  },
  8813: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      f: () => uz
    });
    sz(8821);
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(65),
      Oz = sz(8785);

    function oz(zz, tz) {
      return Math.max(1, Math.round(zz * tz))
    }

    function vz(zz, tz, sz) {
      const Fz = 2 * sz >= tz - 1;
      return {
        x: zz,
        y: zz,
        size: tz,
        border: Math.min(sz, Math.floor(tz / 2)),
        filled: Fz
      }
    }
    var Uz = sz(1087);
    const Kz = 1.4;

    function uz(zz, tz) {
      return zz && tz ? `scale(${Kz})` : "scale(1)"
    }

    function Nz(zz) {
      return "classic" === zz.settings.style ? (0, Uz.jsx)(Dz, {
        ...zz
      }) : (0, Uz.jsx)(xz, {
        ...zz
      })
    }
    const bz = .125;

    function wz(zz, tz) {
      const sz = {};
      if (zz.color !== Oz.h.color && (sz.color = (0, Oz.n)(zz.color)), zz.opacity !== Oz.h.opacity && (sz.opacity = zz.opacity / 100), zz.outline !== Oz.h.outline || zz.outlineColor !== Oz.h.outlineColor) {
        const tz = zz.outline,
          Fz = (0, Oz.n)(zz.outlineColor);
        sz.textShadow = tz > 0 ? `-${tz}px 0 ${Fz}, 0 ${tz}px ${Fz}, ${tz}px 0 ${Fz}, 0 -${tz}px ${Fz}` : "none"
      }
      if (zz.size !== Oz.h.size) {
        const Fz = zz.size / 100;
        sz.fontSize = tz ? `calc(max(1.3rem, 18px) * ${Fz})` : `calc(1.3rem * ${Fz})`, sz.marginTop = `-${bz}em`, sz.transformOrigin = `50% calc(50% + ${bz}em)`
      }
      return sz
    }

    function Dz(zz) {
      let {
        settings: tz,
        touch: sz,
        inPreview: Fz,
        inEditor: Xz,
        pressed: Oz = !1,
        pressRef: oz
      } = zz;
      return (0, Uz.jsx)("div", {
        className: Wz()("Crosshair", {
          Touch: sz,
          CrosshairInPreview: Fz,
          CrosshairInEditor: Xz || Fz
        }),
        ref: oz,
        style: {
          transform: uz(Oz, tz.growOnClick),
          ...wz(tz, sz)
        },
        children: "+"
      })
    }

    function gz(zz, tz) {
      return zz / tz + "px"
    }

    function Hz(zz, tz, sz, Fz) {
      return {
        ...rz(zz, tz, sz),
        width: gz(zz.w, sz),
        height: gz(zz.h, sz),
        background: Fz
      }
    }

    function Bz(zz, tz, sz) {
      return {
        left: gz(zz.x, tz),
        top: gz(zz.y, tz),
        width: gz(zz.size, tz),
        height: gz(zz.size, tz),
        borderWidth: gz(zz.border, tz),
        borderColor: sz,
        background: zz.filled ? sz : void 0
      }
    }
    const Pz = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function rz(zz, tz, sz) {
      const [Fz, Wz] = zz.arm ? Pz[zz.arm] : [0, 0], Xz = Math.round(tz * sz);
      return {
        left: gz(zz.x + Fz * Xz, sz),
        top: gz(zz.y + Wz * Xz, sz)
      }
    }

    function Yz(zz) {
      return zz.arm ? {
        "data-arm": zz.arm,
        "data-x": zz.x,
        "data-y": zz.y
      } : {}
    }

    function xz(zz) {
      let {
        settings: tz,
        inPreview: sz,
        inEditor: Fz,
        pressed: uz = !1,
        spread: Nz,
        spreadRef: bz
      } = zz;
      const wz = (0, Xz.useRef)(null),
        {
          box: Dz,
          dpr: gz
        } = function(zz) {
          const [tz, sz] = (0, Xz.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Xz.useLayoutEffect)((() => {
            const tz = zz.current;
            if (!tz) return;
            const Fz = () => {
              const zz = tz.getBoundingClientRect(),
                Fz = window.devicePixelRatio || 1;
              sz((tz => tz.dpr === Fz && tz.box.left === zz.left && tz.box.top === zz.top && tz.box.width === zz.width && tz.box.height === zz.height ? tz : {
                box: {
                  left: zz.left,
                  top: zz.top,
                  width: zz.width,
                  height: zz.height
                },
                dpr: Fz
              }))
            };
            Fz();
            const Wz = new ResizeObserver(Fz);
            return Wz.observe(tz), window.addEventListener("resize", Fz), window.addEventListener("scroll", Fz, !0), () => {
              Wz.disconnect(), window.removeEventListener("resize", Fz), window.removeEventListener("scroll", Fz, !0)
            }
          }), [zz]), tz
        }(wz),
        Pz = (0, Xz.useRef)(gz);
      Pz.current = gz;
      const xz = function(zz, tz) {
          const sz = oz(zz.lineThickness, tz),
            Fz = oz(zz.lineLength, tz),
            Wz = Math.round(zz.gap * tz),
            Xz = oz(zz.dotSize, tz),
            Oz = zz.outline > 0 ? oz(zz.outline, tz) : 0,
            Uz = oz(zz.circleThickness, tz),
            Kz = zz.circle ? Math.round(zz.circleRadius * tz * 2 + Uz) : 0,
            uz = function(zz, tz, sz, Fz) {
              return zz.lines ? tz : zz.dot ? sz : zz.circle && Fz % 2 === 0 ? 2 : 1
            }(zz, sz, Xz, Kz),
            Nz = [];
          if (zz.lines && (Nz.push({
              x: uz + Wz,
              y: 0,
              w: Fz,
              h: sz,
              arm: "right"
            }), Nz.push({
              x: -Wz - Fz,
              y: 0,
              w: Fz,
              h: sz,
              arm: "left"
            }), Nz.push({
              x: 0,
              y: uz + Wz,
              w: sz,
              h: Fz,
              arm: "down"
            }), zz.tStyle || Nz.push({
              x: 0,
              y: -Wz - Fz,
              w: sz,
              h: Fz,
              arm: "up"
            }), 0 === Wz && Nz.push({
              x: 0,
              y: 0,
              w: sz,
              h: sz
            })), zz.dot) {
            const zz = Math.floor((uz - Xz) / 2);
            Nz.push({
              x: zz,
              y: zz,
              w: Xz,
              h: Xz
            })
          }
          const bz = Nz.map((zz => ({
            ...zz,
            x: zz.x - Oz,
            y: zz.y - Oz,
            w: zz.w + 2 * Oz,
            h: zz.h + 2 * Oz
          })));
          let wz = null,
            Dz = null;
          if (zz.circle) {
            const zz = Kz + ((Kz - uz) % 2 === 0 ? 0 : 1),
              tz = (uz - zz) / 2;
            wz = vz(tz, zz, Uz), Oz > 0 && (Dz = vz(tz - Oz, zz + 2 * Oz, Uz + 2 * Oz))
          }
          return {
            cell: uz,
            fills: Nz,
            outlines: Oz > 0 ? bz : [],
            ring: wz,
            ringOutline: Dz
          }
        }(uz && tz.growOnClick ? function(zz, tz) {
          return {
            ...zz,
            outline: zz.outline * tz,
            lineLength: zz.lineLength * tz,
            lineThickness: zz.lineThickness * tz,
            gap: zz.gap * tz,
            dotSize: zz.dotSize * tz,
            circleRadius: zz.circleRadius * tz,
            circleThickness: zz.circleThickness * tz
          }
        }(tz, Kz) : tz, gz),
        mz = function(zz, tz, sz) {
          const Fz = Math.round((zz.left + zz.width / 2) * sz - tz / 2),
            Wz = Math.round((zz.top + zz.height / 2) * sz - tz / 2);
          return {
            x: Fz / sz - zz.left,
            y: Wz / sz - zz.top
          }
        }(Dz, xz.cell, gz),
        Jz = (0, Oz.n)(tz.color),
        Iz = (0, Oz.n)(tz.outlineColor),
        Cz = (0, Xz.useRef)(0);
      (0, Xz.useLayoutEffect)((() => {
        if (bz) return bz.current = zz => {
          var tz;
          Cz.current = zz, null === (tz = wz.current) || void 0 === tz || tz.querySelectorAll("[data-arm]").forEach((tz => {
            Object.assign(tz.style, rz(function(zz) {
              return {
                x: Number(zz.dataset.x),
                y: Number(zz.dataset.y),
                arm: zz.dataset.arm
              }
            }(tz), zz, Pz.current))
          }))
        }, () => {
          bz.current = null
        }
      }), [bz]);
      const ez = null !== Nz && void 0 !== Nz ? Nz : Cz.current;
      return (0, Uz.jsx)("div", {
        ref: wz,
        className: Wz()("CrosshairShapes", {
          CrosshairInPreview: sz,
          CrosshairInEditor: Fz || sz,
          CrosshairSpreads: void 0 !== bz
        }),
        children: (0, Uz.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: mz.x,
            top: mz.y,
            opacity: tz.opacity / 100
          },
          children: (0, Uz.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [xz.ringOutline && (0, Uz.jsx)("div", {
              className: "CrosshairRing",
              style: Bz(xz.ringOutline, gz, Iz)
            }), xz.outlines.map(((zz, tz) => (0, Uz.jsx)("div", {
              className: "CrosshairPart",
              ...Yz(zz),
              style: Hz(zz, ez, gz, Iz)
            }, `o${tz}`))), xz.ring && (0, Uz.jsx)("div", {
              className: "CrosshairRing",
              style: Bz(xz.ring, gz, Jz)
            }), xz.fills.map(((zz, tz) => (0, Uz.jsx)("div", {
              className: "CrosshairPart",
              ...Yz(zz),
              style: Hz(zz, ez, gz, Jz)
            }, `f${tz}`)))]
          })
        })
      })
    }
  },
  8823: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      g: () => gz,
      k: () => Dz
    });
    var Fz = sz(8785);
    const Wz = "XH1-",
      Xz = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Oz = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      oz = ["color", "outlineColor"],
      vz = 1 + 3 * oz.length + Oz.length + 1,
      Uz = Math.ceil(8 * vz / Math.log2(62)),
      Kz = Wz.length + Uz;

    function uz(zz) {
      let tz = 90;
      for (const sz of zz) tz = 31 * tz + sz & 255;
      return tz
    }
    const Nz = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      bz = BigInt(Nz.length);

    function wz(zz, tz) {
      let sz = 0n;
      for (const Wz of zz) {
        const zz = Nz.indexOf(Wz);
        if (zz < 0) return null;
        sz = sz * bz + BigInt(zz)
      }
      if (sz >> BigInt(8 * tz) !== 0n) return null;
      const Fz = [];
      for (let Wz = 0; Wz < tz; Wz++) Fz.unshift(Number(0xffn & sz)), sz >>= 8n;
      return Fz
    }

    function Dz(zz) {
      let tz = "shapes" === zz.style ? 1 : 0;
      Xz.forEach(((sz, Fz) => {
        zz[sz] && (tz |= 1 << Fz + 1)
      }));
      const sz = [tz];
      for (const Wz of oz) {
        const tz = (0, Fz.l)(Wz, zz[Wz]);
        sz.push(tz >> 16 & 255, tz >> 8 & 255, 255 & tz)
      }
      for (const Wz of Oz) {
        const {
          min: tz,
          step: Xz
        } = Fz.e[Wz];
        sz.push(Math.round(((0, Fz.l)(Wz, zz[Wz]) - tz) / Xz))
      }
      return sz.push(uz(sz)), Wz + function(zz, tz) {
        let sz = 0n;
        for (const Wz of zz) sz = sz << 8n | BigInt(Wz);
        let Fz = "";
        for (let Wz = 0; Wz < tz; Wz++) Fz = Nz[Number(sz % bz)] + Fz, sz /= bz;
        return Fz
      }(sz, Uz)
    }

    function gz(zz) {
      for (const tz of zz.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Uz}})`, "gi"))) {
        const zz = Hz(wz(tz[1], vz));
        if (zz) return zz
      }
      return null
    }

    function Hz(zz) {
      if (!zz || zz.length !== vz || uz(zz.slice(0, -1)) !== zz[zz.length - 1]) return null;
      const tz = zz[0],
        sz = {
          ...Fz.h,
          style: 1 & tz ? "shapes" : "classic"
        };
      Xz.forEach(((zz, Fz) => {
        sz[zz] = 0 !== (tz & 1 << Fz + 1)
      }));
      let Wz = 1;
      for (const Fz of oz) sz[Fz] = zz[Wz] << 16 | zz[Wz + 1] << 8 | zz[Wz + 2], Wz += 3;
      for (const Xz of Oz) {
        const {
          min: tz,
          step: Oz
        } = Fz.e[Xz];
        sz[Xz] = (0, Fz.l)(Xz, tz + zz[Wz] * Oz), Wz++
      }
      return sz
    }
  },
  8785: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      h: () => Wz,
      l: () => Xz,
      n: () => Uz,
      q: () => vz,
      u: () => Kz,
      v: () => oz,
      y: () => Oz
    });
    const Fz = {
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
      Wz = Object.freeze({
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

    function Xz(zz, tz) {
      var sz;
      const {
        min: Xz,
        max: Oz,
        step: oz
      } = Fz[zz];
      if (!Number.isFinite(tz)) return Wz[zz];
      const vz = (null !== (sz = String(oz).split(".")[1]) && void 0 !== sz ? sz : "").length,
        Uz = Number((Math.round(tz / oz) * oz).toFixed(vz));
      return Math.min(Oz, Math.max(Xz, Uz))
    }

    function Oz(zz, tz, sz) {
      const Fz = "number" === typeof sz ? Xz(tz, sz) : sz;
      return {
        ...zz,
        [tz]: Fz
      }
    }

    function oz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Wz).every((Fz => sz.includes(Fz) || zz[Fz] === tz[Fz]))
    }

    function vz(zz) {
      return oz(zz, Wz)
    }

    function Uz(zz) {
      return `#${zz.toString(16).padStart(6,"0")}`
    }

    function Kz(zz) {
      const tz = /^#?([0-9a-f]{6})$/i.exec(zz.trim());
      return tz ? parseInt(tz[1], 16) : null
    }
  },
  8826: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => uz,
      f: () => Nz
    });
    var Fz = sz(65),
      Wz = sz(44),
      Xz = sz(8823),
      Oz = sz(8785);
    const oz = "crosshairCode";
    let vz = null;
    const Uz = new Set;

    function Kz() {
      if (null === vz) {
        var zz;
        const tz = Wz.f.getItem(oz);
        vz = null !== (zz = "string" === typeof tz ? (0, Xz.g)(tz) : null) && void 0 !== zz ? zz : Oz.h
      }
      return vz
    }

    function uz(zz) {
      vz = zz, (0, Oz.q)(zz) ? Wz.f.removeItem(oz) : Wz.f.setItem(oz, (0, Xz.k)(zz));
      for (const tz of Uz) tz()
    }

    function Nz() {
      const [zz, tz] = (0, Fz.useState)(Kz);
      return (0, Fz.useEffect)((() => {
        const zz = () => {
          tz(Kz())
        };
        return zz(), sz = zz, Uz.add(sz), () => {
          Uz.delete(sz)
        };
        var sz
      }), []), zz
    }
  },
  36201: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      e: () => vz,
      g: () => Oz
    });
    var Fz = sz(580),
      Wz = sz(2555);

    function Xz(zz) {
      return zz === (0, Wz.e)().Uzz ? (0, Wz.e)().gC : zz
    }

    function Oz(zz) {
      return !(0, Fz.G)(zz) && Xz(zz) === (0, Wz.e)().gC
    }
    const oz = "gravity";

    function vz() {
      return (0, Wz.e)().physics[oz][1]
    }
  },
  35947: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      countDecodesAs: () => Kz,
      decodedAudio: () => uz
    });
    var Fz = sz(4488);
    const Wz = Fz.Howler,
      Xz = new Map;
    let Oz = 0;
    const oz = {
        song: 0,
        sheet: 0
      },
      vz = new WeakMap,
      Uz = new WeakSet;

    function Kz(zz, tz) {
      return vz.set(zz, tz), zz
    }

    function uz() {
      return {
        bytes: Oz,
        songsDecoded: oz.song,
        sheetsDecoded: oz.sheet
      }
    }

    function Nz(zz) {
      if (Uz.has(zz)) return;
      Uz.add(zz);
      const tz = 1 === zz.decodeAudioData.length,
        sz = zz.decodeAudioData.bind(zz);
      zz.decodeAudioData = (zz, Fz, Uz) => {
        const Kz = zz => {
          const tz = Wz._howls.filter((zz => "loaded" !== zz._state));
          try {
            null === Fz || void 0 === Fz || Fz(zz)
          } finally {
            const sz = tz.find((zz => "loaded" === zz._state));
            void 0 !== sz && "string" === typeof sz._src && function(zz, tz, sz) {
              var Fz;
              Oz += sz - (null !== (Fz = Xz.get(tz)) && void 0 !== Fz ? Fz : 0), Xz.set(tz, sz);
              const Wz = vz.get(zz);
              void 0 !== Wz && oz[Wz]++
            }(sz, sz._src, zz.length * zz.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return zz
        };
        if (!tz) return sz(zz, Kz, Uz);
        const uz = sz(zz).then(Kz);
        return uz.catch((zz => {
          null === Uz || void 0 === Uz || Uz(zz)
        })), uz
      }
    }
    const bz = Fz.Howl.prototype,
      wz = bz.init;
    bz.init = function(zz) {
      return Fz.Howler.volume(), Wz.ctx && Nz(Wz.ctx), wz.call(this, zz)
    };
    const Dz = bz.unload;
    bz.unload = function() {
      const zz = this._src,
        tz = Dz.call(this);
      if ("string" !== typeof zz) return tz;
      const sz = Xz.get(zz);
      return void 0 !== sz && function(zz) {
        return !Wz._howls.some((tz => tz._src === zz || "string" === typeof tz._src && zz.indexOf(tz._src) >= 0))
      }(zz) && (Xz.delete(zz), Oz -= sz), tz
    }
  },
  36197: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => rz
    });
    var Fz = sz(36199),
      Wz = sz(201),
      Xz = sz(4488),
      Oz = sz(35947),
      oz = sz(36215),
      vz = sz(36201),
      Uz = sz(330),
      Kz = sz.n(Uz),
      uz = sz(1191),
      Nz = sz(2555),
      bz = sz(36210),
      wz = sz(34),
      Dz = sz(30),
      gz = sz(36204);
    const Hz = new Set(["note"]);
    const Bz = {
      stop: () => Bz,
      fade: () => Bz,
      rate: () => Bz,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Bz,
      setPannerAttr: () => Bz,
      setPosition: () => Bz
    };
    class Pz {
      constructor(zz) {
        let tz, {
          src: sz,
          volumeScalar: Wz,
          isSoundSprite: vz
        } = zz;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, vz ? (tz = (0, Fz.e)(sz), this._spriteTrackSrc = tz) : tz = {
          src: uz.clientSideServerUrls.staticUrl + sz
        }, this._volumeMultiplier = new oz.h, this._volumeMultiplier.setMultiplierType("persistentScalar", Wz), this._howl = (0, Oz.countDecodesAs)(new Xz.Howl({
          ...tz,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let zz, tz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          sz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (tz) {
          var Fz;
          if (null === (Fz = this._spriteTrackSrc) || void 0 === Fz || !Fz.sprite[tz]) throw new Error("No such sprite in your spritetrack");
          zz = this._howl.play(tz)
        } else zz = this._howl.play();
        sz && this._howl.loop(!0, zz);
        let Wz = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), zz);
        const Xz = {
          stop: () => (this._howl.stop(zz), Xz),
          fade: (tz, sz, Fz) => (this._howl.fade(tz, sz, Fz, zz), Xz),
          rate: tz => (this._howl.rate(tz, zz), Xz),
          stopsAtOnce: () => this._howl.playing(zz) && !this._howl._playLock,
          isAlive: () => {
            const tz = this._howl._soundById(zz);
            return !this._loadFailed && !!tz && !tz._ended
          },
          getDurationMs: () => this._howl._soundById(zz) ? 1e3 * this._howl.duration(zz) / this._howl.rate(zz) : 0,
          getVolume: () => Wz * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Wz,
          setRelativeVolume: tz => {
            if (tz > 1) throw new Error("Volume should be <= 1");
            return Wz = Dz.b.get("soundOnFromAd") ? tz : 0, this._howl.volume(Math.min(1, Wz * this._volumeMultiplier.getTotalMultipliedVal()), zz), Xz
          },
          setPannerAttr: tz => {
            let {
              coneInnerAngle: sz,
              coneOuterAngle: Fz = 360,
              coneOuterGain: Wz,
              distanceModel: Oz,
              maxDistance: oz,
              panningModel: vz,
              refDistance: Uz,
              rolloffFactor: Kz
            } = tz;
            return this._setPannerAttr({
              id: zz,
              coneInnerAngle: sz,
              coneOuterAngle: Fz,
              coneOuterGain: Wz,
              distanceModel: Oz,
              maxDistance: oz,
              panningModel: vz,
              refDistance: Uz,
              rolloffFactor: Kz
            }), Xz
          },
          setPosition: tz => (this._howl.pos(tz[2], tz[1], tz[0], zz), Xz)
        };
        return Xz
      }
      setGlobalVolume(zz) {
        this._volumeMultiplier.setMultiplierType("globalVolume", zz), this._howl.volume(zz)
      }
      _setPannerAttr(zz) {
        let {
          id: tz,
          coneInnerAngle: sz = 360,
          coneOuterAngle: Fz = 360,
          coneOuterGain: Wz = 0,
          distanceModel: Xz = "inverse",
          maxDistance: Oz = 1e3,
          panningModel: oz = "HRTF",
          refDistance: vz = bz.f,
          rolloffFactor: Uz = 1
        } = zz;
        this._howl.pannerAttr({
          coneOuterAngle: Fz
        }, tz);
        const Kz = {
          coneInnerAngle: sz,
          coneOuterAngle: Fz,
          coneOuterGain: Wz,
          distanceModel: Xz,
          maxDistance: Oz,
          panningModel: oz,
          refDistance: vz,
          rolloffFactor: Uz
        };
        this._howl.pannerAttr(Kz, tz)
      }
    }
    const rz = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new gz.e, wz.o.subscribe("appManagerUpdated|soundVolume", (zz => {
          const tz = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const sz of tz) sz.setGlobalVolume(zz)
        }))
      }
      play(zz, tz) {
        var sz;
        let Xz, Oz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (sz = (0, Nz.e)()) || void 0 === sz ? void 0 : sz.gC,
          oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bz.d,
          Uz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bz.f,
          uz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var wz;
        (0, Nz.e)() ? Xz = !!Array.isArray(Oz) || (0, vz.d)(Oz) !== (null === (wz = (0, Nz.e)()) || void 0 === wz ? void 0 : wz.gC): Xz = !1;
        const rz = Xz ? this.spatialSheets : this.stereoSheets,
          Yz = (0, Fz.h)(zz);
        if (!rz[Yz]) {
          const zz = new Pz({
            src: Yz,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          zz.setGlobalVolume(Dz.b.get("soundVolume")), rz[Yz] = zz
        }
        const xz = rz[Yz];
        if (!Xz) {
          const sz = xz.play(zz, uz);
          return sz.setRelativeVolume(tz), sz
        }
        const mz = (0, Nz.e)(),
          Jz = Array.isArray(Oz) ? Oz : mz.Qr.yB(Oz),
          Iz = mz.Qr.yB(mz.gC);
        if (!Jz || Kz().sqrDist(Jz, Iz) > oz * oz) return Bz;
        let Cz;
        if (!uz) {
          if (!this.spatialVoices.admit({
              group: Hz.has(Yz) ? null : (0, gz.m)(zz),
              loudness: (0, gz.i)(tz, Kz().xo(Jz, Iz), Uz),
              startMs: performance.now(),
              getDurationMs: () => {
                var zz, tz;
                return null !== (zz = null === (tz = Cz) || void 0 === tz ? void 0 : tz.getDurationMs()) && void 0 !== zz ? zz : 0
              },
              isAlive: () => {
                var zz, tz;
                return null !== (zz = null === (tz = Cz) || void 0 === tz ? void 0 : tz.isAlive()) && void 0 !== zz && zz
              },
              canStop: () => {
                var zz, tz;
                return null !== (zz = null === (tz = Cz) || void 0 === tz ? void 0 : tz.stopsAtOnce()) && void 0 !== zz && zz
              },
              stop: () => {
                var zz;
                null === (zz = Cz) || void 0 === zz || zz.stop()
              }
            })) return Bz
        }
        return Cz = xz.play(zz, uz), Cz.setRelativeVolume(tz), Cz.setPannerAttr({
          refDistance: Uz
        }), Cz.setPosition([Jz[0], Jz[1] + Wz.d.jH * Wz.d.playerEyeToHeightRatio, Jz[2]]), Cz
      }
    }
  },
  36261: (zz, tz, sz) => {
    function Fz(zz, tz) {
      var sz, Fz, Wz, Xz, Oz, oz, vz, Uz;
      return zz.name === tz.name && ((null === (sz = zz.attributes) || void 0 === sz || null === (Fz = sz.customAttributes) || void 0 === Fz ? void 0 : Fz.stackKey) === (null === (Wz = tz.attributes) || void 0 === Wz || null === (Xz = Wz.customAttributes) || void 0 === Xz ? void 0 : Xz.stackKey) && (!0 !== (null === (Oz = zz.attributes) || void 0 === Oz || null === (oz = Oz.customAttributes) || void 0 === oz ? void 0 : oz.unstackable) && !0 !== (null === (vz = tz.attributes) || void 0 === vz || null === (Uz = vz.customAttributes) || void 0 === Uz ? void 0 : Uz.unstackable)))
    }
    sz.d(tz, {
      e: () => Fz
    })
  },
  36339: (zz, tz, sz) => {
    function Fz(zz) {
      return zz.includes("Leaf Bed")
    }

    function Wz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Fz(zz)
    }

    function Xz(zz) {
      return zz.includes(" Strongbed")
    }

    function Oz(zz) {
      return Fz(zz) || Wz(zz) || Xz(zz)
    }
    sz.d(tz, {
      e: () => Oz,
      i: () => Fz,
      l: () => Xz,
      m: () => Wz
    })
  },
  36336: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz
    });
    var Fz = sz(36339),
      Wz = sz(8940);
    const Xz = [],
      Oz = [],
      oz = [],
      vz = [];
    for (const Kz of Object.keys(Wz.l))(0, Fz.i)(Kz) ? Xz.push(Kz) : (0, Fz.m)(Kz) && Oz.push(Kz), (0, Fz.l)(Kz) && oz.push(Kz), (Kz.includes(" Bed Head") || Kz.includes(" Strongbed Head")) && vz.push(Kz);
    const Uz = {
      leafBeds: Xz,
      woolBeds: Oz,
      strongBeds: oz,
      beds: [...Xz, ...Oz, ...oz],
      bedHeads: vz,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6057: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      e: () => Wz,
      h: () => vz,
      l: () => Xz,
      o: () => Uz,
      r: () => Fz,
      u: () => oz
    });
    let Fz = function(zz) {
        return zz[zz.DEFAULT = 0] = "DEFAULT", zz[zz.BOAT = 1] = "BOAT", zz[zz.GLIDER = 2] = "GLIDER", zz[zz.BALLOON = 3] = "BALLOON", zz[zz.SLEEPING = 4] = "SLEEPING", zz[zz.RIDING_MOB = 5] = "RIDING_MOB", zz[zz.CAR = 6] = "CAR", zz[zz.HOVERCRAFT = 7] = "HOVERCRAFT", zz
      }({}),
      Wz = function(zz) {
        return zz[zz.WOOD = 0] = "WOOD", zz[zz.OBSIDIAN = 1] = "OBSIDIAN", zz[zz.SPEED = 2] = "SPEED", zz
      }({}),
      Xz = function(zz) {
        return zz[zz.WOOD = 0] = "WOOD", zz[zz.IRON = 1] = "IRON", zz[zz.GOLD = 2] = "GOLD", zz[zz.DIAMOND = 3] = "DIAMOND", zz
      }({}),
      Oz = function(zz) {
        return zz[zz.YELLOW = 0] = "YELLOW", zz[zz.WHITE = 1] = "WHITE", zz[zz.RED = 2] = "RED", zz[zz.PURPLE = 3] = "PURPLE", zz[zz.PINK = 4] = "PINK", zz[zz.ORANGE = 5] = "ORANGE", zz[zz.MAGENTA = 6] = "MAGENTA", zz[zz.LIME = 7] = "LIME", zz[zz.LIGHT_GRAY = 8] = "LIGHT_GRAY", zz[zz.LIGHT_BLUE = 9] = "LIGHT_BLUE", zz[zz.GREEN = 10] = "GREEN", zz[zz.GRAY = 11] = "GRAY", zz[zz.CYAN = 12] = "CYAN", zz[zz.BROWN = 13] = "BROWN", zz[zz.BLUE = 14] = "BLUE", zz[zz.BLACK = 15] = "BLACK", zz
      }({}),
      oz = function(zz) {
        return zz[zz.ROTATION_1 = 0] = "ROTATION_1", zz[zz.ROTATION_2 = 1] = "ROTATION_2", zz[zz.ROTATION_3 = 2] = "ROTATION_3", zz[zz.ROTATION_4 = 3] = "ROTATION_4", zz
      }({}),
      vz = function(zz) {
        return zz[zz.KART = 0] = "KART", zz[zz.OFF_ROADER = 1] = "OFF_ROADER", zz[zz.CAR = 2] = "CAR", zz[zz.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", zz[zz.ARMORED_CAR = 4] = "ARMORED_CAR", zz[zz.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", zz[zz.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", zz[zz.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", zz
      }({});
    Fz.DEFAULT, Fz.BOAT, Wz.SPEED, Fz.GLIDER, Xz.DIAMOND, Fz.BALLOON, Oz.BLACK, Fz.SLEEPING, oz.ROTATION_4, Fz.RIDING_MOB, Fz.CAR, vz.MOONSTONE_MINING_DRILL, Fz.HOVERCRAFT;
    let Uz = function(zz) {
      return zz[zz.NORMAL = 0] = "NORMAL", zz[zz.GLIDING = 1] = "GLIDING", zz[zz.FLOATING = 2] = "FLOATING", zz
    }({})
  },
  8821: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);