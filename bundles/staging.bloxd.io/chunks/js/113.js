export const id = 113;
export const ids = [113];
export const modules = {
  36088: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Rz,
      f: () => oz
    });
    bz(8957);
    var Ez = bz(56),
      nz = bz(1417),
      iz = bz(1871),
      lz = bz(1912),
      Mz = bz(20),
      tz = bz(2313),
      Hz = bz(36096),
      Oz = bz(36103),
      pz = bz(8920),
      dz = bz(8954),
      Fz = bz(8970),
      Zz = bz(1089);
    const Rz = (0, Ez.memo)((function() {
      var zz;
      const {
        isTouchScreen: uz,
        clientEscMenuOptions: bz,
        scriptedCameraFacing: iz,
        crosshairShownOverride: Rz,
        crosshairGameView: wz
      } = (0, Mz.m)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Xz = (0, tz.g)("gunshotOrigin"), fz = (0, Ez.useRef)(null), sz = (0, Ez.useRef)(!1), [rz, Nz] = (0, Ez.useState)(Kz);
      (0, nz.g)("cameraZoomSet", Nz), (0, Ez.useEffect)((() => {
        Nz(Kz())
      }), []);
      const vz = (0, lz.h)("heldItemAim"),
        Jz = vz.gun,
        Az = (0, Fz.f)(),
        Tz = (0, Ez.useRef)(Az);
      Tz.current = Az;
      const [Lz, Pz] = (0, Ez.useState)(!1);
      (0, Ez.useEffect)((() => (0, Oz.g)("crosshairAccuracy", oz)), []), (0, nz.g)("mouseState", (zz => {
        let {
          isDown: uz
        } = zz;
        sz.current = uz, fz.current && (fz.current.style.transform = (0, dz.g)(uz, Tz.current.growOnClick)), "shapes" === Tz.current.style && Pz(uz)
      }));
      const Gz = (0, pz.g)(uz, bz.touchActionButtons);
      return (null !== (zz = (0, Hz.c)(wz, Rz)) && void 0 !== zz ? zz : (0, Hz.g)(vz, rz > 1, Gz, Xz)) ? "movement" === iz || "cursor" === iz ? null : (0, Zz.jsxs)(Zz.Fragment, {
        children: [Jz && (0, Zz.jsx)(xz, {
          custom: Az.forGuns && "shapes" === Az.style ? Az : null,
          touch: uz
        }), !Jz && (0, Zz.jsx)(dz.c, {
          settings: Az,
          touch: uz,
          pressRef: fz,
          pressed: "shapes" === Az.style ? Lz : sz.current
        })]
      }) : null
    }));

    function Kz() {
      return iz.gameBridge.lookup("cameraZoom", null)
    }
    const wz = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      Xz = {
        current: null
      },
      fz = {
        current: null
      };
    let sz = 0,
      rz = 0;

    function oz(zz) {
      rz = zz, wz[0].current || Xz.current || fz.current ? vz(zz) : sz = zz
    }

    function Nz(zz) {
      return ((0, Hz.e)(zz) - (0, Hz.e)(0)) * window.innerHeight / 100
    }

    function vz(zz) {
      var uz;
      if (null === (uz = fz.current) || void 0 === uz || uz.call(fz, Nz(zz)), wz[0].current) {
        const uz = `${(0,Hz.e)(zz)}vh`;
        wz[0].current.style.transform = `translateX(calc(0px - ${uz}))`, wz[1].current.style.transform = `translateX(calc(0px + ${uz}))`, wz[2].current.style.transform = `translateY(calc(0px - ${uz}))`, wz[3].current.style.transform = `translateY(calc(0px + ${uz}))`
      }
      Xz.current && (Xz.current.style.filter = `blur(${Math.round(zz/10)}px)`)
    }

    function xz(zz) {
      let {
        custom: uz,
        touch: bz
      } = zz;
      const iz = (0, nz.h)("aimingOverlay", "none"),
        lz = "1.2vh",
        Mz = "0.3vh";
      (0, Ez.useEffect)((() => {
        sz && vz(sz)
      }), []);
      const tz = (0, Ez.useRef)(null !== uz);
      return (0, Ez.useLayoutEffect)((() => {
        var zz;
        uz ? null === (zz = fz.current) || void 0 === zz || zz.call(fz, Nz(rz)) : tz.current && vz(rz);
        tz.current = null !== uz
      }), [uz]), (0, Zz.jsxs)(Zz.Fragment, {
        children: ["sniper" === iz && (0, Zz.jsxs)("div", {
          ref: Xz,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, Zz.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, Zz.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, Zz.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, Zz.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, Zz.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === iz ? 0 : 1
          },
          children: [uz && (0, Zz.jsx)(dz.c, {
            settings: uz,
            touch: bz,
            spreadRef: fz
          }), !uz && (0, Zz.jsxs)(Zz.Fragment, {
            children: [(0, Zz.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: lz,
                height: Mz,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: wz[0]
            }), (0, Zz.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: lz,
                height: Mz,
                top: "49.85vh",
                left: "calc(50vw - 0.6vh)"
              },
              ref: wz[1]
            }), (0, Zz.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Mz,
                height: lz,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: wz[2]
            }), (0, Zz.jsx)("div", {
              className: "GunCrosshair",
              style: {
                width: Mz,
                height: lz,
                top: "49.4vh",
                left: "calc(50vw - 0.15vh)"
              },
              ref: wz[3]
            })]
          })]
        })]
      })
    }
  },
  8954: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => dz,
      g: () => pz
    });
    bz(8957);
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(56),
      lz = bz(8928);

    function Mz(zz, uz) {
      return Math.max(1, Math.round(zz * uz))
    }

    function tz(zz, uz, bz) {
      const Ez = 2 * bz >= uz - 1;
      return {
        x: zz,
        y: zz,
        size: uz,
        border: Math.min(bz, Math.floor(uz / 2)),
        filled: Ez
      }
    }
    var Hz = bz(1089);
    const Oz = 1.4;

    function pz(zz, uz) {
      return zz && uz ? `scale(${Oz})` : "scale(1)"
    }

    function dz(zz) {
      return "classic" === zz.settings.style ? (0, Hz.jsx)(Rz, {
        ...zz
      }) : (0, Hz.jsx)(oz, {
        ...zz
      })
    }
    const Fz = .125;

    function Zz(zz, uz) {
      const bz = {};
      if (zz.color !== lz.f.color && (bz.color = (0, lz.m)(zz.color)), zz.opacity !== lz.f.opacity && (bz.opacity = zz.opacity / 100), zz.outline !== lz.f.outline || zz.outlineColor !== lz.f.outlineColor) {
        const uz = zz.outline,
          Ez = (0, lz.m)(zz.outlineColor);
        bz.textShadow = uz > 0 ? `-${uz}px 0 ${Ez}, 0 ${uz}px ${Ez}, ${uz}px 0 ${Ez}, 0 -${uz}px ${Ez}` : "none"
      }
      if (zz.size !== lz.f.size) {
        const Ez = zz.size / 100;
        bz.fontSize = uz ? `calc(max(1.3rem, 18px) * ${Ez})` : `calc(1.3rem * ${Ez})`, bz.marginTop = `-${Fz}em`, bz.transformOrigin = `50% calc(50% + ${Fz}em)`
      }
      return bz
    }

    function Rz(zz) {
      let {
        settings: uz,
        touch: bz,
        inPreview: Ez,
        inEditor: iz,
        pressed: lz = !1,
        pressRef: Mz
      } = zz;
      return (0, Hz.jsx)("div", {
        className: nz()("Crosshair", {
          Touch: bz,
          CrosshairInPreview: Ez,
          CrosshairInEditor: iz || Ez
        }),
        ref: Mz,
        style: {
          transform: pz(lz, uz.growOnClick),
          ...Zz(uz, bz)
        },
        children: "+"
      })
    }

    function Kz(zz, uz) {
      return zz / uz + "px"
    }

    function wz(zz, uz, bz, Ez) {
      return {
        ...sz(zz, uz, bz),
        width: Kz(zz.w, bz),
        height: Kz(zz.h, bz),
        background: Ez
      }
    }

    function Xz(zz, uz, bz) {
      return {
        left: Kz(zz.x, uz),
        top: Kz(zz.y, uz),
        width: Kz(zz.size, uz),
        height: Kz(zz.size, uz),
        borderWidth: Kz(zz.border, uz),
        borderColor: bz,
        background: zz.filled ? bz : void 0
      }
    }
    const fz = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function sz(zz, uz, bz) {
      const [Ez, nz] = zz.arm ? fz[zz.arm] : [0, 0], iz = Math.round(uz * bz);
      return {
        left: Kz(zz.x + Ez * iz, bz),
        top: Kz(zz.y + nz * iz, bz)
      }
    }

    function rz(zz) {
      return zz.arm ? {
        "data-arm": zz.arm,
        "data-x": zz.x,
        "data-y": zz.y
      } : {}
    }

    function oz(zz) {
      let {
        settings: uz,
        inPreview: bz,
        inEditor: Ez,
        pressed: pz = !1,
        spread: dz,
        spreadRef: Fz
      } = zz;
      const Zz = (0, iz.useRef)(null),
        {
          box: Rz,
          dpr: Kz
        } = function(zz) {
          const [uz, bz] = (0, iz.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, iz.useLayoutEffect)((() => {
            const uz = zz.current;
            if (!uz) return;
            const Ez = () => {
              const zz = uz.getBoundingClientRect(),
                Ez = window.devicePixelRatio || 1;
              bz((uz => uz.dpr === Ez && uz.box.left === zz.left && uz.box.top === zz.top && uz.box.width === zz.width && uz.box.height === zz.height ? uz : {
                box: {
                  left: zz.left,
                  top: zz.top,
                  width: zz.width,
                  height: zz.height
                },
                dpr: Ez
              }))
            };
            Ez();
            const nz = new ResizeObserver(Ez);
            return nz.observe(uz), window.addEventListener("resize", Ez), window.addEventListener("scroll", Ez, !0), () => {
              nz.disconnect(), window.removeEventListener("resize", Ez), window.removeEventListener("scroll", Ez, !0)
            }
          }), [zz]), uz
        }(Zz),
        fz = (0, iz.useRef)(Kz);
      fz.current = Kz;
      const oz = function(zz, uz) {
          const bz = Mz(zz.lineThickness, uz),
            Ez = Mz(zz.lineLength, uz),
            nz = Math.round(zz.gap * uz),
            iz = Mz(zz.dotSize, uz),
            lz = zz.outline > 0 ? Mz(zz.outline, uz) : 0,
            Hz = Mz(zz.circleThickness, uz),
            Oz = zz.circle ? Math.round(zz.circleRadius * uz * 2 + Hz) : 0,
            pz = function(zz, uz, bz, Ez) {
              return zz.lines ? uz : zz.dot ? bz : zz.circle && Ez % 2 === 0 ? 2 : 1
            }(zz, bz, iz, Oz),
            dz = [];
          if (zz.lines && (dz.push({
              x: pz + nz,
              y: 0,
              w: Ez,
              h: bz,
              arm: "right"
            }), dz.push({
              x: -nz - Ez,
              y: 0,
              w: Ez,
              h: bz,
              arm: "left"
            }), dz.push({
              x: 0,
              y: pz + nz,
              w: bz,
              h: Ez,
              arm: "down"
            }), zz.tStyle || dz.push({
              x: 0,
              y: -nz - Ez,
              w: bz,
              h: Ez,
              arm: "up"
            }), 0 === nz && dz.push({
              x: 0,
              y: 0,
              w: bz,
              h: bz
            })), zz.dot) {
            const zz = Math.floor((pz - iz) / 2);
            dz.push({
              x: zz,
              y: zz,
              w: iz,
              h: iz
            })
          }
          const Fz = dz.map((zz => ({
            ...zz,
            x: zz.x - lz,
            y: zz.y - lz,
            w: zz.w + 2 * lz,
            h: zz.h + 2 * lz
          })));
          let Zz = null,
            Rz = null;
          if (zz.circle) {
            const zz = Oz + ((Oz - pz) % 2 === 0 ? 0 : 1),
              uz = (pz - zz) / 2;
            Zz = tz(uz, zz, Hz), lz > 0 && (Rz = tz(uz - lz, zz + 2 * lz, Hz + 2 * lz))
          }
          return {
            cell: pz,
            fills: dz,
            outlines: lz > 0 ? Fz : [],
            ring: Zz,
            ringOutline: Rz
          }
        }(pz && uz.growOnClick ? function(zz, uz) {
          return {
            ...zz,
            outline: zz.outline * uz,
            lineLength: zz.lineLength * uz,
            lineThickness: zz.lineThickness * uz,
            gap: zz.gap * uz,
            dotSize: zz.dotSize * uz,
            circleRadius: zz.circleRadius * uz,
            circleThickness: zz.circleThickness * uz
          }
        }(uz, Oz) : uz, Kz),
        Nz = function(zz, uz, bz) {
          const Ez = Math.round((zz.left + zz.width / 2) * bz - uz / 2),
            nz = Math.round((zz.top + zz.height / 2) * bz - uz / 2);
          return {
            x: Ez / bz - zz.left,
            y: nz / bz - zz.top
          }
        }(Rz, oz.cell, Kz),
        vz = (0, lz.m)(uz.color),
        xz = (0, lz.m)(uz.outlineColor),
        Jz = (0, iz.useRef)(0);
      (0, iz.useLayoutEffect)((() => {
        if (Fz) return Fz.current = zz => {
          var uz;
          Jz.current = zz, null === (uz = Zz.current) || void 0 === uz || uz.querySelectorAll("[data-arm]").forEach((uz => {
            Object.assign(uz.style, sz(function(zz) {
              return {
                x: Number(zz.dataset.x),
                y: Number(zz.dataset.y),
                arm: zz.dataset.arm
              }
            }(uz), zz, fz.current))
          }))
        }, () => {
          Fz.current = null
        }
      }), [Fz]);
      const Az = null !== dz && void 0 !== dz ? dz : Jz.current;
      return (0, Hz.jsx)("div", {
        ref: Zz,
        className: nz()("CrosshairShapes", {
          CrosshairInPreview: bz,
          CrosshairInEditor: Ez || bz,
          CrosshairSpreads: void 0 !== Fz
        }),
        children: (0, Hz.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Nz.x,
            top: Nz.y,
            opacity: uz.opacity / 100
          },
          children: (0, Hz.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [oz.ringOutline && (0, Hz.jsx)("div", {
              className: "CrosshairRing",
              style: Xz(oz.ringOutline, Kz, xz)
            }), oz.outlines.map(((zz, uz) => (0, Hz.jsx)("div", {
              className: "CrosshairPart",
              ...rz(zz),
              style: wz(zz, Az, Kz, xz)
            }, `o${uz}`))), oz.ring && (0, Hz.jsx)("div", {
              className: "CrosshairRing",
              style: Xz(oz.ring, Kz, vz)
            }), oz.fills.map(((zz, uz) => (0, Hz.jsx)("div", {
              className: "CrosshairPart",
              ...rz(zz),
              style: wz(zz, Az, Kz, vz)
            }, `f${uz}`)))]
          })
        })
      })
    }
  },
  8962: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Oz,
      g: () => Kz,
      h: () => Rz
    });
    var Ez = bz(8928);
    const nz = "XH1-",
      iz = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      lz = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Mz = ["color", "outlineColor"],
      tz = 1 + 3 * Mz.length + lz.length + 1,
      Hz = Math.ceil(8 * tz / Math.log2(62)),
      Oz = nz.length + Hz;

    function pz(zz) {
      let uz = 90;
      for (const bz of zz) uz = 31 * uz + bz & 255;
      return uz
    }
    const dz = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Fz = BigInt(dz.length);

    function Zz(zz, uz) {
      let bz = 0n;
      for (const nz of zz) {
        const zz = dz.indexOf(nz);
        if (zz < 0) return null;
        bz = bz * Fz + BigInt(zz)
      }
      if (bz >> BigInt(8 * uz) !== 0n) return null;
      const Ez = [];
      for (let nz = 0; nz < uz; nz++) Ez.unshift(Number(0xffn & bz)), bz >>= 8n;
      return Ez
    }

    function Rz(zz) {
      let uz = "shapes" === zz.style ? 1 : 0;
      iz.forEach(((bz, Ez) => {
        zz[bz] && (uz |= 1 << Ez + 1)
      }));
      const bz = [uz];
      for (const nz of Mz) {
        const uz = (0, Ez.j)(nz, zz[nz]);
        bz.push(uz >> 16 & 255, uz >> 8 & 255, 255 & uz)
      }
      for (const nz of lz) {
        const {
          min: uz,
          step: iz
        } = Ez.b[nz];
        bz.push(Math.round(((0, Ez.j)(nz, zz[nz]) - uz) / iz))
      }
      return bz.push(pz(bz)), nz + function(zz, uz) {
        let bz = 0n;
        for (const nz of zz) bz = bz << 8n | BigInt(nz);
        let Ez = "";
        for (let nz = 0; nz < uz; nz++) Ez = dz[Number(bz % Fz)] + Ez, bz /= Fz;
        return Ez
      }(bz, Hz)
    }

    function Kz(zz) {
      for (const uz of zz.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Hz}})`, "gi"))) {
        const zz = wz(Zz(uz[1], tz));
        if (zz) return zz
      }
      return null
    }

    function wz(zz) {
      if (!zz || zz.length !== tz || pz(zz.slice(0, -1)) !== zz[zz.length - 1]) return null;
      const uz = zz[0],
        bz = {
          ...Ez.f,
          style: 1 & uz ? "shapes" : "classic"
        };
      iz.forEach(((zz, Ez) => {
        bz[zz] = 0 !== (uz & 1 << Ez + 1)
      }));
      let nz = 1;
      for (const Ez of Mz) bz[Ez] = zz[nz] << 16 | zz[nz + 1] << 8 | zz[nz + 2], nz += 3;
      for (const iz of lz) {
        const {
          min: uz,
          step: lz
        } = Ez.b[iz];
        bz[iz] = (0, Ez.j)(iz, uz + zz[nz] * lz), nz++
      }
      return bz
    }
  },
  8928: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => nz,
      j: () => iz,
      m: () => Hz,
      n: () => tz,
      p: () => Oz,
      t: () => Mz,
      u: () => lz
    });
    const Ez = {
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
      nz = Object.freeze({
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

    function iz(zz, uz) {
      var bz;
      const {
        min: iz,
        max: lz,
        step: Mz
      } = Ez[zz];
      if (!Number.isFinite(uz)) return nz[zz];
      const tz = (null !== (bz = String(Mz).split(".")[1]) && void 0 !== bz ? bz : "").length,
        Hz = Number((Math.round(uz / Mz) * Mz).toFixed(tz));
      return Math.min(lz, Math.max(iz, Hz))
    }

    function lz(zz, uz, bz) {
      const Ez = "number" === typeof bz ? iz(uz, bz) : bz;
      return {
        ...zz,
        [uz]: Ez
      }
    }

    function Mz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(nz).every((Ez => bz.includes(Ez) || zz[Ez] === uz[Ez]))
    }

    function tz(zz) {
      return Mz(zz, nz)
    }

    function Hz(zz) {
      return `#${zz.toString(16).padStart(6,"0")}`
    }

    function Oz(zz) {
      const uz = /^#?([0-9a-f]{6})$/i.exec(zz.trim());
      return uz ? parseInt(uz[1], 16) : null
    }
  },
  8970: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => pz,
      f: () => dz
    });
    var Ez = bz(56),
      nz = bz(33),
      iz = bz(8962),
      lz = bz(8928);
    const Mz = "crosshairCode";
    let tz = null;
    const Hz = new Set;

    function Oz() {
      if (null === tz) {
        var zz;
        const uz = nz.g.getItem(Mz);
        tz = null !== (zz = "string" === typeof uz ? (0, iz.g)(uz) : null) && void 0 !== zz ? zz : lz.f
      }
      return tz
    }

    function pz(zz) {
      tz = zz, (0, lz.n)(zz) ? nz.g.removeItem(Mz) : nz.g.setItem(Mz, (0, iz.h)(zz));
      for (const uz of Hz) uz()
    }

    function dz() {
      const [zz, uz] = (0, Ez.useState)(Oz);
      return (0, Ez.useEffect)((() => {
        const zz = () => {
          uz(Oz())
        };
        return zz(), bz = zz, Hz.add(bz), () => {
          Hz.delete(bz)
        };
        var bz
      }), []), zz
    }
  },
  36197: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz,
      f: () => tz,
      j: () => lz
    });
    var Ez = bz(588),
      nz = bz(2623);

    function iz(zz) {
      return zz === (0, nz.g)().M6 ? (0, nz.g)().iG : zz
    }

    function lz(zz) {
      return !(0, Ez.F)(zz) && iz(zz) === (0, nz.g)().iG
    }
    const Mz = "gravity";

    function tz() {
      return (0, nz.g)().physics[Mz][1]
    }
  },
  35918: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      countDecodesAs: () => Oz,
      decodedAudio: () => pz
    });
    var Ez = bz(4616);
    const nz = Ez.Howler,
      iz = new Map;
    let lz = 0;
    const Mz = {
        song: 0,
        sheet: 0
      },
      tz = new WeakMap,
      Hz = new WeakSet;

    function Oz(zz, uz) {
      return tz.set(zz, uz), zz
    }

    function pz() {
      return {
        bytes: lz,
        songsDecoded: Mz.song,
        sheetsDecoded: Mz.sheet
      }
    }

    function dz(zz) {
      if (Hz.has(zz)) return;
      Hz.add(zz);
      const uz = 1 === zz.decodeAudioData.length,
        bz = zz.decodeAudioData.bind(zz);
      zz.decodeAudioData = (zz, Ez, Hz) => {
        const Oz = zz => {
          const uz = nz._howls.filter((zz => "loaded" !== zz._state));
          try {
            null === Ez || void 0 === Ez || Ez(zz)
          } finally {
            const bz = uz.find((zz => "loaded" === zz._state));
            void 0 !== bz && "string" === typeof bz._src && function(zz, uz, bz) {
              var Ez;
              lz += bz - (null !== (Ez = iz.get(uz)) && void 0 !== Ez ? Ez : 0), iz.set(uz, bz);
              const nz = tz.get(zz);
              void 0 !== nz && Mz[nz]++
            }(bz, bz._src, zz.length * zz.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return zz
        };
        if (!uz) return bz(zz, Oz, Hz);
        const pz = bz(zz).then(Oz);
        return pz.catch((zz => {
          null === Hz || void 0 === Hz || Hz(zz)
        })), pz
      }
    }
    const Fz = Ez.Howl.prototype,
      Zz = Fz.init;
    Fz.init = function(zz) {
      return Ez.Howler.volume(), nz.ctx && dz(nz.ctx), Zz.call(this, zz)
    };
    const Rz = Fz.unload;
    Fz.unload = function() {
      const zz = this._src,
        uz = Rz.call(this);
      if ("string" !== typeof zz) return uz;
      const bz = iz.get(zz);
      return void 0 !== bz && function(zz) {
        return !nz._howls.some((uz => uz._src === zz || "string" === typeof uz._src && zz.indexOf(uz._src) >= 0))
      }(zz) && (iz.delete(zz), lz -= bz), uz
    }
  },
  36188: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => sz
    });
    var Ez = bz(36191),
      nz = bz(195),
      iz = bz(4616),
      lz = bz(35918),
      Mz = bz(36222),
      tz = bz(36197),
      Hz = bz(332),
      Oz = bz.n(Hz),
      pz = bz(1195),
      dz = bz(2623),
      Fz = bz(36214),
      Zz = bz(22),
      Rz = bz(20),
      Kz = bz(36205);
    const wz = new Set(["note"]);
    const Xz = {
      stop: () => Xz,
      fade: () => Xz,
      rate: () => Xz,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Xz,
      setPannerAttr: () => Xz,
      setPosition: () => Xz
    };
    class fz {
      constructor(zz) {
        let uz, {
          src: bz,
          volumeScalar: nz,
          isSoundSprite: tz
        } = zz;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, tz ? (uz = (0, Ez.e)(bz), this._spriteTrackSrc = uz) : uz = {
          src: pz.clientSideServerUrls.staticUrl + bz
        }, this._volumeMultiplier = new Mz.j, this._volumeMultiplier.setMultiplierType("persistentScalar", nz), this._howl = (0, lz.countDecodesAs)(new iz.Howl({
          ...uz,
          pool: 15
        }), "sheet"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let zz, uz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          bz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (uz) {
          var Ez;
          if (null === (Ez = this._spriteTrackSrc) || void 0 === Ez || !Ez.sprite[uz]) throw new Error("No such sprite in your spritetrack");
          zz = this._howl.play(uz)
        } else zz = this._howl.play();
        bz && this._howl.loop(!0, zz);
        let nz = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), zz);
        const iz = {
          stop: () => (this._howl.stop(zz), iz),
          fade: (uz, bz, Ez) => (this._howl.fade(uz, bz, Ez, zz), iz),
          rate: uz => (this._howl.rate(uz, zz), iz),
          stopsAtOnce: () => this._howl.playing(zz) && !this._howl._playLock,
          isAlive: () => {
            const uz = this._howl._soundById(zz);
            return !this._loadFailed && !!uz && !uz._ended
          },
          getDurationMs: () => this._howl._soundById(zz) ? 1e3 * this._howl.duration(zz) / this._howl.rate(zz) : 0,
          getVolume: () => nz * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => nz,
          setRelativeVolume: uz => {
            if (uz > 1) throw new Error("Volume should be <= 1");
            return nz = Rz.e.get("soundOnFromAd") ? uz : 0, this._howl.volume(Math.min(1, nz * this._volumeMultiplier.getTotalMultipliedVal()), zz), iz
          },
          setPannerAttr: uz => {
            let {
              coneInnerAngle: bz,
              coneOuterAngle: Ez = 360,
              coneOuterGain: nz,
              distanceModel: lz,
              maxDistance: Mz,
              panningModel: tz,
              refDistance: Hz,
              rolloffFactor: Oz
            } = uz;
            return this._setPannerAttr({
              id: zz,
              coneInnerAngle: bz,
              coneOuterAngle: Ez,
              coneOuterGain: nz,
              distanceModel: lz,
              maxDistance: Mz,
              panningModel: tz,
              refDistance: Hz,
              rolloffFactor: Oz
            }), iz
          },
          setPosition: uz => (this._howl.pos(uz[2], uz[1], uz[0], zz), iz)
        };
        return iz
      }
      setGlobalVolume(zz) {
        this._volumeMultiplier.setMultiplierType("globalVolume", zz), this._howl.volume(zz)
      }
      _setPannerAttr(zz) {
        let {
          id: uz,
          coneInnerAngle: bz = 360,
          coneOuterAngle: Ez = 360,
          coneOuterGain: nz = 0,
          distanceModel: iz = "inverse",
          maxDistance: lz = 1e3,
          panningModel: Mz = "HRTF",
          refDistance: tz = Fz.h,
          rolloffFactor: Hz = 1
        } = zz;
        this._howl.pannerAttr({
          coneOuterAngle: Ez
        }, uz);
        const Oz = {
          coneInnerAngle: bz,
          coneOuterAngle: Ez,
          coneOuterGain: nz,
          distanceModel: iz,
          maxDistance: lz,
          panningModel: Mz,
          refDistance: tz,
          rolloffFactor: Hz
        };
        this._howl.pannerAttr(Oz, uz)
      }
    }
    const sz = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new Kz.b, Zz.k.subscribe("appManagerUpdated|soundVolume", (zz => {
          const uz = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const bz of uz) bz.setGlobalVolume(zz)
        }))
      }
      play(zz, uz) {
        var bz;
        let iz, lz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (bz = (0, dz.g)()) || void 0 === bz ? void 0 : bz.iG,
          Mz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fz.e,
          Hz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Fz.h,
          pz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Zz;
        (0, dz.g)() ? iz = !!Array.isArray(lz) || (0, tz.e)(lz) !== (null === (Zz = (0, dz.g)()) || void 0 === Zz ? void 0 : Zz.iG): iz = !1;
        const sz = iz ? this.spatialSheets : this.stereoSheets,
          rz = (0, Ez.f)(zz);
        if (!sz[rz]) {
          const zz = new fz({
            src: rz,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          zz.setGlobalVolume(Rz.e.get("soundVolume")), sz[rz] = zz
        }
        const oz = sz[rz];
        if (!iz) {
          const bz = oz.play(zz, pz);
          return bz.setRelativeVolume(uz), bz
        }
        const Nz = (0, dz.g)(),
          vz = Array.isArray(lz) ? lz : Nz.zN.Gs(lz),
          xz = Nz.zN.Gs(Nz.iG);
        if (!vz || Oz().sqrDist(vz, xz) > Mz * Mz) return Xz;
        let Jz;
        if (!pz) {
          if (!this.spatialVoices.admit({
              group: wz.has(rz) ? null : (0, Kz.h)(zz),
              loudness: (0, Kz.e)(uz, Oz().oM(vz, xz), Hz),
              startMs: performance.now(),
              getDurationMs: () => {
                var zz, uz;
                return null !== (zz = null === (uz = Jz) || void 0 === uz ? void 0 : uz.getDurationMs()) && void 0 !== zz ? zz : 0
              },
              isAlive: () => {
                var zz, uz;
                return null !== (zz = null === (uz = Jz) || void 0 === uz ? void 0 : uz.isAlive()) && void 0 !== zz && zz
              },
              canStop: () => {
                var zz, uz;
                return null !== (zz = null === (uz = Jz) || void 0 === uz ? void 0 : uz.stopsAtOnce()) && void 0 !== zz && zz
              },
              stop: () => {
                var zz;
                null === (zz = Jz) || void 0 === zz || zz.stop()
              }
            })) return Xz
        }
        return Jz = oz.play(zz, pz), Jz.setRelativeVolume(uz), Jz.setPannerAttr({
          refDistance: Hz
        }), Jz.setPosition([vz[0], vz[1] + nz.e.mw * nz.e.playerEyeToHeightRatio, vz[2]]), Jz
      }
    }
  },
  36274: (zz, uz, bz) => {
    function Ez(zz, uz) {
      var bz, Ez, nz, iz, lz, Mz, tz, Hz;
      return zz.name === uz.name && ((null === (bz = zz.attributes) || void 0 === bz || null === (Ez = bz.customAttributes) || void 0 === Ez ? void 0 : Ez.stackKey) === (null === (nz = uz.attributes) || void 0 === nz || null === (iz = nz.customAttributes) || void 0 === iz ? void 0 : iz.stackKey) && (!0 !== (null === (lz = zz.attributes) || void 0 === lz || null === (Mz = lz.customAttributes) || void 0 === Mz ? void 0 : Mz.unstackable) && !0 !== (null === (tz = uz.attributes) || void 0 === tz || null === (Hz = tz.customAttributes) || void 0 === Hz ? void 0 : Hz.unstackable)))
    }
    bz.d(uz, {
      b: () => Ez
    })
  },
  36365: (zz, uz, bz) => {
    function Ez(zz) {
      return zz.includes("Leaf Bed")
    }

    function nz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Ez(zz)
    }

    function iz(zz) {
      return zz.includes(" Strongbed")
    }

    function lz(zz) {
      return Ez(zz) || nz(zz) || iz(zz)
    }
    bz.d(uz, {
      e: () => lz,
      g: () => Ez,
      j: () => iz,
      k: () => nz
    })
  },
  36363: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz
    });
    var Ez = bz(36365),
      nz = bz(9078);
    const iz = [],
      lz = [],
      Mz = [],
      tz = [];
    for (const Oz of Object.keys(nz.p))(0, Ez.g)(Oz) ? iz.push(Oz) : (0, Ez.k)(Oz) && lz.push(Oz), (0, Ez.j)(Oz) && Mz.push(Oz), (Oz.includes(" Bed Head") || Oz.includes(" Strongbed Head")) && tz.push(Oz);
    const Hz = {
      leafBeds: iz,
      woolBeds: lz,
      strongBeds: Mz,
      beds: [...iz, ...lz, ...Mz],
      bedHeads: tz,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6204: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      d: () => nz,
      f: () => tz,
      i: () => iz,
      l: () => Hz,
      m: () => Ez,
      q: () => Mz
    });
    let Ez = function(zz) {
        return zz[zz.DEFAULT = 0] = "DEFAULT", zz[zz.BOAT = 1] = "BOAT", zz[zz.GLIDER = 2] = "GLIDER", zz[zz.BALLOON = 3] = "BALLOON", zz[zz.SLEEPING = 4] = "SLEEPING", zz[zz.RIDING_MOB = 5] = "RIDING_MOB", zz[zz.CAR = 6] = "CAR", zz[zz.HOVERCRAFT = 7] = "HOVERCRAFT", zz
      }({}),
      nz = function(zz) {
        return zz[zz.WOOD = 0] = "WOOD", zz[zz.OBSIDIAN = 1] = "OBSIDIAN", zz[zz.SPEED = 2] = "SPEED", zz
      }({}),
      iz = function(zz) {
        return zz[zz.WOOD = 0] = "WOOD", zz[zz.IRON = 1] = "IRON", zz[zz.GOLD = 2] = "GOLD", zz[zz.DIAMOND = 3] = "DIAMOND", zz
      }({}),
      lz = function(zz) {
        return zz[zz.YELLOW = 0] = "YELLOW", zz[zz.WHITE = 1] = "WHITE", zz[zz.RED = 2] = "RED", zz[zz.PURPLE = 3] = "PURPLE", zz[zz.PINK = 4] = "PINK", zz[zz.ORANGE = 5] = "ORANGE", zz[zz.MAGENTA = 6] = "MAGENTA", zz[zz.LIME = 7] = "LIME", zz[zz.LIGHT_GRAY = 8] = "LIGHT_GRAY", zz[zz.LIGHT_BLUE = 9] = "LIGHT_BLUE", zz[zz.GREEN = 10] = "GREEN", zz[zz.GRAY = 11] = "GRAY", zz[zz.CYAN = 12] = "CYAN", zz[zz.BROWN = 13] = "BROWN", zz[zz.BLUE = 14] = "BLUE", zz[zz.BLACK = 15] = "BLACK", zz
      }({}),
      Mz = function(zz) {
        return zz[zz.ROTATION_1 = 0] = "ROTATION_1", zz[zz.ROTATION_2 = 1] = "ROTATION_2", zz[zz.ROTATION_3 = 2] = "ROTATION_3", zz[zz.ROTATION_4 = 3] = "ROTATION_4", zz
      }({}),
      tz = function(zz) {
        return zz[zz.KART = 0] = "KART", zz[zz.OFF_ROADER = 1] = "OFF_ROADER", zz[zz.CAR = 2] = "CAR", zz[zz.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", zz[zz.ARMORED_CAR = 4] = "ARMORED_CAR", zz[zz.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", zz[zz.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", zz[zz.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", zz
      }({});
    Ez.DEFAULT, Ez.BOAT, nz.SPEED, Ez.GLIDER, iz.DIAMOND, Ez.BALLOON, lz.BLACK, Ez.SLEEPING, Mz.ROTATION_4, Ez.RIDING_MOB, Ez.CAR, tz.MOONSTONE_MINING_DRILL, Ez.HOVERCRAFT;
    let Hz = function(zz) {
      return zz[zz.NORMAL = 0] = "NORMAL", zz[zz.GLIDING = 1] = "GLIDING", zz[zz.FLOATING = 2] = "FLOATING", zz
    }({})
  },
  8957: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);