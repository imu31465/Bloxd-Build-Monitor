export const id = 282;
export const ids = [282];
export const modules = {
  40500: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      CharacterPreview: () => pz
    });
    var Ez = bz(56),
      nz = bz(2602),
      iz = bz(1226),
      lz = bz(8494),
      Mz = bz(9020),
      tz = bz(3382),
      Hz = bz(1089);
    const Oz = .6 * Math.PI,
      pz = (0, Ez.memo)((0, Ez.forwardRef)((function(zz, uz) {
        let {
          onReady: bz,
          onDrawn: pz,
          owner: dz = "other",
          framing: Fz = "player",
          forcedCosmetics: Zz,
          GM: Rz,
          emotePlaySeq: Kz,
          turntableFromYaw: wz = null
        } = zz;
        const Xz = (0, Ez.useRef)(null),
          {
            width: fz,
            height: sz
          } = (0, nz.e)(Xz),
          rz = (0, Ez.useRef)(null),
          oz = (0, Ez.useRef)({}),
          Nz = (0, Ez.useRef)({}),
          [vz, xz] = (0, Ez.useState)(!1),
          Jz = (0, Ez.useRef)(bz);
        Jz.current = bz;
        const Az = (0, Ez.useRef)(pz);
        Az.current = pz;
        const Tz = (0, Ez.useRef)(null),
          Lz = (0, Ez.useRef)(!1),
          Pz = (0, Ez.useRef)(!1),
          Gz = (0, Ez.useCallback)((() => {
            const zz = rz.current;
            if (!zz || !Az.current || Lz.current || !Pz.current) return;
            const uz = {};
            Tz.current = uz, queueMicrotask((() => {
              if (Tz.current !== uz) return;
              const bz = Promise.all(iz.u.map((uz => zz.untilDrawn(uz)))).catch((zz => {
                  console.error("Failed to draw the character preview", zz)
                })),
                Ez = new Promise((zz => {
                  setTimeout(zz, 1e4)
                }));
              Promise.race([bz, Ez]).then((() => {
                var bz;
                rz.current !== zz || Tz.current !== uz || Lz.current || (Lz.current = !0, null === (bz = Az.current) || void 0 === bz || bz.call(Az))
              }))
            }))
          }), []);
        return (0, Ez.useImperativeHandle)(uz, (() => {
          const zz = (zz, uz) => {
            var bz;
            (oz.current[zz] = uz, null !== Zz && void 0 !== Zz && Zz[zz]) || (null === (bz = rz.current) || void 0 === bz || bz.setCosmetic(zz, uz), Gz())
          };
          return {
            updateCosmetic: zz,
            setAllCosmetics(uz) {
              for (const Ez of iz.u) {
                var bz;
                zz(Ez, null !== (bz = uz[Ez]) && void 0 !== bz ? bz : (0, lz.b)(Ez))
              }
            },
            isReady() {
              var zz, uz;
              return null !== (zz = null === (uz = rz.current) || void 0 === uz ? void 0 : uz.isReady()) && void 0 !== zz && zz
            },
            resetCamera() {
              var zz;
              null === (zz = rz.current) || void 0 === zz || zz.resetCamera()
            },
            setOrbit(zz) {
              var uz;
              null === (uz = rz.current) || void 0 === uz || uz.setOrbit(zz)
            },
            async ensureReadyForCapture(zz) {
              var uz;
              await (null === (uz = rz.current) || void 0 === uz ? void 0 : uz.untilDrawn(zz))
            },
            getDevTools() {
              var zz;
              return null !== (zz = rz.current) && void 0 !== zz && zz.isReady() ? rz.current.dev : null
            }
          }
        }), [Zz, Gz]), (0, Ez.useEffect)((() => {
          const zz = tz.c.register(dz),
            uz = Mz.j.openCharacter(Xz.current, Fz);
          rz.current = uz;
          let bz = !0;
          return uz.ready.then((() => {
            bz && (xz(!0), Jz.current())
          })).catch((zz => {
            console.error("Failed to set up the character preview", zz)
          })), () => {
            bz = !1, zz(), uz.resetCamera(), uz.close(), rz.current = null
          }
        }), []), (0, Ez.useEffect)((() => {
          fz <= 0 || sz <= 0 || rz.current.resize(fz, sz)
        }), [fz, sz]), (0, Ez.useEffect)((() => {
          if (!vz) return;
          const zz = Nz.current;
          for (const uz of iz.u) {
            const bz = null === Zz || void 0 === Zz ? void 0 : Zz[uz],
              Ez = zz[uz];
            bz && bz !== Ez ? rz.current.setCosmetic(uz, bz) : !bz && Ez && oz.current[uz] && rz.current.setCosmetic(uz, oz.current[uz])
          }
          Nz.current = {
            ...Zz
          }, Pz.current = !0, Gz()
        }), [Zz, vz, Gz]), (0, Ez.useEffect)((() => {
          vz && rz.current.playEmote(null !== Rz && void 0 !== Rz ? Rz : null)
        }), [Rz, Kz, vz]), (0, Ez.useEffect)((() => {
          if (!vz || null === wz) return;
          const zz = rz.current,
            {
              pitch: uz,
              radius: bz
            } = Mz.c[Fz];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return zz.setOrbit({
            yaw: wz + Oz,
            pitch: uz,
            radius: bz
          }), () => {
            zz.resetCamera()
          };
          const Ez = performance.now();
          let nz = 0;
          const iz = lz => {
            zz.setOrbit({
              yaw: wz + (lz - Ez) / 6e3 * 2 * Math.PI,
              pitch: uz,
              radius: bz
            }), nz = requestAnimationFrame(iz)
          };
          return nz = requestAnimationFrame(iz), () => {
            cancelAnimationFrame(nz), zz.resetCamera()
          }
        }), [vz, wz]), (0, Hz.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Xz
        })
      })))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);