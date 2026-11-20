export const id = 282;
export const ids = [282];
export const modules = {
  40406: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      CharacterPreview: () => uz
    });
    var Fz = sz(65),
      Wz = sz(2537),
      Xz = sz(1223),
      Oz = sz(8318),
      oz = sz(8891),
      vz = sz(3307),
      Uz = sz(1087);
    const Kz = .6 * Math.PI,
      uz = (0, Fz.memo)((0, Fz.forwardRef)((function(zz, tz) {
        let {
          onReady: sz,
          onDrawn: uz,
          owner: Nz = "other",
          framing: bz = "player",
          forcedCosmetics: wz,
          yo: Dz,
          emotePlaySeq: gz,
          turntableFromYaw: Hz = null
        } = zz;
        const Bz = (0, Fz.useRef)(null),
          {
            width: Pz,
            height: rz
          } = (0, Wz.d)(Bz),
          Yz = (0, Fz.useRef)(null),
          xz = (0, Fz.useRef)({}),
          mz = (0, Fz.useRef)({}),
          [Jz, Iz] = (0, Fz.useState)(!1),
          Cz = (0, Fz.useRef)(sz);
        Cz.current = sz;
        const ez = (0, Fz.useRef)(uz);
        ez.current = uz;
        const Zz = (0, Fz.useRef)(null),
          Gz = (0, Fz.useRef)(!1),
          Tz = (0, Fz.useRef)(!1),
          cz = (0, Fz.useCallback)((() => {
            const zz = Yz.current;
            if (!zz || !ez.current || Gz.current || !Tz.current) return;
            const tz = {};
            Zz.current = tz, queueMicrotask((() => {
              if (Zz.current !== tz) return;
              const sz = Promise.all(Xz.u.map((tz => zz.untilDrawn(tz)))).catch((zz => {
                  console.error("Failed to draw the character preview", zz)
                })),
                Fz = new Promise((zz => {
                  setTimeout(zz, 1e4)
                }));
              Promise.race([sz, Fz]).then((() => {
                var sz;
                Yz.current !== zz || Zz.current !== tz || Gz.current || (Gz.current = !0, null === (sz = ez.current) || void 0 === sz || sz.call(ez))
              }))
            }))
          }), []);
        return (0, Fz.useImperativeHandle)(tz, (() => {
          const zz = (zz, tz) => {
            var sz;
            (xz.current[zz] = tz, null !== wz && void 0 !== wz && wz[zz]) || (null === (sz = Yz.current) || void 0 === sz || sz.setCosmetic(zz, tz), cz())
          };
          return {
            updateCosmetic: zz,
            setAllCosmetics(tz) {
              for (const Fz of Xz.u) {
                var sz;
                zz(Fz, null !== (sz = tz[Fz]) && void 0 !== sz ? sz : (0, Oz.c)(Fz))
              }
            },
            isReady() {
              var zz, tz;
              return null !== (zz = null === (tz = Yz.current) || void 0 === tz ? void 0 : tz.isReady()) && void 0 !== zz && zz
            },
            resetCamera() {
              var zz;
              null === (zz = Yz.current) || void 0 === zz || zz.resetCamera()
            },
            setOrbit(zz) {
              var tz;
              null === (tz = Yz.current) || void 0 === tz || tz.setOrbit(zz)
            },
            async ensureReadyForCapture(zz) {
              var tz;
              await (null === (tz = Yz.current) || void 0 === tz ? void 0 : tz.untilDrawn(zz))
            },
            getDevTools() {
              var zz;
              return null !== (zz = Yz.current) && void 0 !== zz && zz.isReady() ? Yz.current.dev : null
            }
          }
        }), [wz, cz]), (0, Fz.useEffect)((() => {
          const zz = vz.d.register(Nz),
            tz = oz.f.openCharacter(Bz.current, bz);
          Yz.current = tz;
          let sz = !0;
          return tz.ready.then((() => {
            sz && (Iz(!0), Cz.current())
          })).catch((zz => {
            console.error("Failed to set up the character preview", zz)
          })), () => {
            sz = !1, zz(), tz.resetCamera(), tz.close(), Yz.current = null
          }
        }), []), (0, Fz.useEffect)((() => {
          Pz <= 0 || rz <= 0 || Yz.current.resize(Pz, rz)
        }), [Pz, rz]), (0, Fz.useEffect)((() => {
          if (!Jz) return;
          const zz = mz.current;
          for (const tz of Xz.u) {
            const sz = null === wz || void 0 === wz ? void 0 : wz[tz],
              Fz = zz[tz];
            sz && sz !== Fz ? Yz.current.setCosmetic(tz, sz) : !sz && Fz && xz.current[tz] && Yz.current.setCosmetic(tz, xz.current[tz])
          }
          mz.current = {
            ...wz
          }, Tz.current = !0, cz()
        }), [wz, Jz, cz]), (0, Fz.useEffect)((() => {
          Jz && Yz.current.playEmote(null !== Dz && void 0 !== Dz ? Dz : null)
        }), [Dz, gz, Jz]), (0, Fz.useEffect)((() => {
          if (!Jz || null === Hz) return;
          const zz = Yz.current,
            {
              pitch: tz,
              radius: sz
            } = oz.b[bz];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return zz.setOrbit({
            yaw: Hz + Kz,
            pitch: tz,
            radius: sz
          }), () => {
            zz.resetCamera()
          };
          const Fz = performance.now();
          let Wz = 0;
          const Xz = Oz => {
            zz.setOrbit({
              yaw: Hz + (Oz - Fz) / 6e3 * 2 * Math.PI,
              pitch: tz,
              radius: sz
            }), Wz = requestAnimationFrame(Xz)
          };
          return Wz = requestAnimationFrame(Xz), () => {
            cancelAnimationFrame(Wz), zz.resetCamera()
          }
        }), [Jz, Hz]), (0, Uz.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Bz
        })
      })))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);