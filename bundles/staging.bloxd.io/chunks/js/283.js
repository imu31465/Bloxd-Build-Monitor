export const id = 283;
export const ids = [283];
export const modules = {
  40581: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      CharacterPreview: () => Tv
    });
    var hv = Pv(52),
      Sv = Pv(2584),
      ev = Pv(1226),
      gv = Pv(8501),
      pv = Pv(9044),
      dv = Pv(3392),
      Nv = Pv(1082);
    const lv = .6 * Math.PI,
      Tv = (0, hv.memo)((0, hv.forwardRef)((function(vv, zv) {
        let {
          onReady: Pv,
          onDrawn: Tv,
          owner: Wv = "other",
          framing: wv = "player",
          forcedCosmetics: av,
          Fp: sv,
          emotePlaySeq: Cv,
          turntableFromYaw: iv = null
        } = vv;
        const cv = (0, hv.useRef)(null),
          {
            width: Gv,
            height: mv
          } = (0, Sv.d)(cv),
          jv = (0, hv.useRef)(null),
          fv = (0, hv.useRef)({}),
          Fv = (0, hv.useRef)({}),
          [Yv, nv] = (0, hv.useState)(!1),
          Ov = (0, hv.useRef)(Pv);
        Ov.current = Pv;
        const Dv = (0, hv.useRef)(Tv);
        Dv.current = Tv;
        const Kv = (0, hv.useRef)(null),
          Vv = (0, hv.useRef)(!1),
          Uv = (0, hv.useRef)(!1),
          Rv = (0, hv.useCallback)((() => {
            const vv = jv.current;
            if (!vv || !Dv.current || Vv.current || !Uv.current) return;
            const zv = {};
            Kv.current = zv, queueMicrotask((() => {
              if (Kv.current !== zv) return;
              const Pv = Promise.all(ev.u.map((zv => vv.untilDrawn(zv)))).catch((vv => {
                  console.error("Failed to draw the character preview", vv)
                })),
                hv = new Promise((vv => {
                  setTimeout(vv, 1e4)
                }));
              Promise.race([Pv, hv]).then((() => {
                var Pv;
                jv.current !== vv || Kv.current !== zv || Vv.current || (Vv.current = !0, null === (Pv = Dv.current) || void 0 === Pv || Pv.call(Dv))
              }))
            }))
          }), []);
        return (0, hv.useImperativeHandle)(zv, (() => {
          const vv = (vv, zv) => {
            var Pv;
            (fv.current[vv] = zv, null !== av && void 0 !== av && av[vv]) || (null === (Pv = jv.current) || void 0 === Pv || Pv.setCosmetic(vv, zv), Rv())
          };
          return {
            updateCosmetic: vv,
            setAllCosmetics(zv) {
              for (const hv of ev.u) {
                var Pv;
                vv(hv, null !== (Pv = zv[hv]) && void 0 !== Pv ? Pv : (0, gv.b)(hv))
              }
            },
            isReady() {
              var vv, zv;
              return null !== (vv = null === (zv = jv.current) || void 0 === zv ? void 0 : zv.isReady()) && void 0 !== vv && vv
            },
            resetCamera() {
              var vv;
              null === (vv = jv.current) || void 0 === vv || vv.resetCamera()
            },
            setOrbit(vv) {
              var zv;
              null === (zv = jv.current) || void 0 === zv || zv.setOrbit(vv)
            },
            async ensureReadyForCapture(vv) {
              var zv;
              await (null === (zv = jv.current) || void 0 === zv ? void 0 : zv.untilDrawn(vv))
            },
            getDevTools() {
              var vv;
              return null !== (vv = jv.current) && void 0 !== vv && vv.isReady() ? jv.current.dev : null
            }
          }
        }), [av, Rv]), (0, hv.useEffect)((() => {
          const vv = dv.c.register(Wv),
            zv = pv.j.openCharacter(cv.current, wv);
          jv.current = zv;
          let Pv = !0;
          return zv.ready.then((() => {
            Pv && (nv(!0), Ov.current())
          })).catch((vv => {
            console.error("Failed to set up the character preview", vv)
          })), () => {
            Pv = !1, vv(), zv.resetCamera(), zv.close(), jv.current = null
          }
        }), []), (0, hv.useEffect)((() => {
          Gv <= 0 || mv <= 0 || jv.current.resize(Gv, mv)
        }), [Gv, mv]), (0, hv.useEffect)((() => {
          if (!Yv) return;
          const vv = Fv.current;
          for (const zv of ev.u) {
            const Pv = null === av || void 0 === av ? void 0 : av[zv],
              hv = vv[zv];
            Pv && Pv !== hv ? jv.current.setCosmetic(zv, Pv) : !Pv && hv && fv.current[zv] && jv.current.setCosmetic(zv, fv.current[zv])
          }
          Fv.current = {
            ...av
          }, Uv.current = !0, Rv()
        }), [av, Yv, Rv]), (0, hv.useEffect)((() => {
          Yv && jv.current.playEmote(null !== sv && void 0 !== sv ? sv : null)
        }), [sv, Cv, Yv]), (0, hv.useEffect)((() => {
          if (!Yv || null === iv) return;
          const vv = jv.current,
            {
              pitch: zv,
              radius: Pv
            } = pv.e[wv];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return vv.setOrbit({
            yaw: iv + lv,
            pitch: zv,
            radius: Pv
          }), () => {
            vv.resetCamera()
          };
          const hv = performance.now();
          let Sv = 0;
          const ev = gv => {
            vv.setOrbit({
              yaw: iv + (gv - hv) / 6e3 * 2 * Math.PI,
              pitch: zv,
              radius: Pv
            }), Sv = requestAnimationFrame(ev)
          };
          return Sv = requestAnimationFrame(ev), () => {
            cancelAnimationFrame(Sv), vv.resetCamera()
          }
        }), [Yv, iv]), (0, Nv.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: cv
        })
      })))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);