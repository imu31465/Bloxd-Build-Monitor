export const id = 291;
export const ids = [291];
export const modules = {
  41339: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CharacterPreview: () => pm
    });
    var hm = fm(59),
      Am = fm(2743),
      am = fm(1247),
      xm = fm(2543),
      wm = fm(34319),
      Dm = fm(3615),
      im = fm(1135);
    const Rm = .6 * Math.PI,
      pm = (0, hm.memo)((0, hm.forwardRef)((function(mm, Tm) {
        let {
          onReady: fm,
          onDrawn: pm,
          owner: Em = "other",
          framing: om = "player",
          forcedCosmetics: Om,
          xw: Ym,
          emotePlaySeq: qm,
          turntableFromYaw: jm = null
        } = mm;
        const Vm = (0, hm.useRef)(null),
          {
            width: Im,
            height: Km
          } = (0, Am.d)(Vm),
          Qm = (0, hm.useRef)(null),
          nm = (0, hm.useRef)({}),
          Jm = (0, hm.useRef)({}),
          [cm, zm] = (0, hm.useState)(!1),
          Zm = (0, hm.useRef)(fm);
        Zm.current = fm;
        const km = (0, hm.useRef)(pm);
        km.current = pm;
        const bm = (0, hm.useRef)(null),
          Sm = (0, hm.useRef)(!1),
          em = (0, hm.useRef)(!1),
          Nm = (0, hm.useCallback)((() => {
            const mm = Qm.current;
            if (!mm || !km.current || Sm.current || !em.current) return;
            const Tm = {};
            bm.current = Tm, queueMicrotask((() => {
              if (bm.current !== Tm) return;
              const fm = Promise.all(am.r.map((Tm => mm.untilDrawn(Tm)))).catch((mm => {
                  console.error("Failed to draw the character preview", mm)
                })),
                hm = new Promise((mm => {
                  setTimeout(mm, 1e4)
                }));
              Promise.race([fm, hm]).then((() => {
                var fm;
                Qm.current !== mm || bm.current !== Tm || Sm.current || (Sm.current = !0, null === (fm = km.current) || void 0 === fm || fm.call(km))
              }))
            }))
          }), []);
        return (0, hm.useImperativeHandle)(Tm, (() => {
          const mm = (mm, Tm) => {
            var fm;
            (nm.current[mm] = Tm, null !== Om && void 0 !== Om && Om[mm]) || (null === (fm = Qm.current) || void 0 === fm || fm.setCosmetic(mm, Tm), Nm())
          };
          return {
            updateCosmetic: mm,
            setAllCosmetics(Tm) {
              for (const hm of am.r) {
                var fm;
                mm(hm, null !== (fm = Tm[hm]) && void 0 !== fm ? fm : (0, xm.c)(hm))
              }
            },
            isReady() {
              var mm, Tm;
              return null !== (mm = null === (Tm = Qm.current) || void 0 === Tm ? void 0 : Tm.isReady()) && void 0 !== mm && mm
            },
            resetCamera() {
              var mm;
              null === (mm = Qm.current) || void 0 === mm || mm.resetCamera()
            },
            setOrbit(mm) {
              var Tm;
              null === (Tm = Qm.current) || void 0 === Tm || Tm.setOrbit(mm)
            },
            async ensureReadyForCapture(mm) {
              var Tm;
              await (null === (Tm = Qm.current) || void 0 === Tm ? void 0 : Tm.untilDrawn(mm))
            },
            getDevTools() {
              var mm;
              return null !== (mm = Qm.current) && void 0 !== mm && mm.isReady() ? Qm.current.dev : null
            }
          }
        }), [Om, Nm]), (0, hm.useEffect)((() => {
          const mm = Dm.c.register(Em),
            Tm = wm.j.openCharacter(Vm.current, om);
          Qm.current = Tm;
          let fm = !0;
          return Tm.ready.then((() => {
            fm && (zm(!0), Zm.current())
          })).catch((mm => {
            console.error("Failed to set up the character preview", mm)
          })), () => {
            fm = !1, mm(), Tm.resetCamera(), Tm.close(), Qm.current = null
          }
        }), []), (0, hm.useEffect)((() => {
          Im <= 0 || Km <= 0 || Qm.current.resize(Im, Km)
        }), [Im, Km]), (0, hm.useEffect)((() => {
          if (!cm) return;
          const mm = Jm.current;
          for (const Tm of am.r) {
            const fm = null === Om || void 0 === Om ? void 0 : Om[Tm],
              hm = mm[Tm];
            fm && fm !== hm ? Qm.current.setCosmetic(Tm, fm) : !fm && hm && nm.current[Tm] && Qm.current.setCosmetic(Tm, nm.current[Tm])
          }
          Jm.current = {
            ...Om
          }, em.current = !0, Nm()
        }), [Om, cm, Nm]), (0, hm.useEffect)((() => {
          cm && Qm.current.playEmote(null !== Ym && void 0 !== Ym ? Ym : null)
        }), [Ym, qm, cm]), (0, hm.useEffect)((() => {
          if (!cm || null === jm) return;
          const mm = Qm.current,
            {
              pitch: Tm,
              radius: fm
            } = wm.e[om];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return mm.setOrbit({
            yaw: jm + Rm,
            pitch: Tm,
            radius: fm
          }), () => {
            mm.resetCamera()
          };
          const hm = performance.now();
          let Am = 0;
          const am = xm => {
            mm.setOrbit({
              yaw: jm + (xm - hm) / 6e3 * 2 * Math.PI,
              pitch: Tm,
              radius: fm
            }), Am = requestAnimationFrame(am)
          };
          return Am = requestAnimationFrame(am), () => {
            cancelAnimationFrame(Am), mm.resetCamera()
          }
        }), [cm, jm]), (0, im.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Vm
        })
      })))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);