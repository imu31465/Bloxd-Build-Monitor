export const id = 282;
export const ids = [282];
export const modules = {
  40720: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      CharacterPreview: () => Vk
    });
    var Rk = Bk(61),
      tk = Bk(2607),
      ak = Bk(1192),
      Xk = Bk(8500),
      bk = Bk(9039),
      wk = Bk(3434),
      dk = Bk(1069);
    const sk = .6 * Math.PI,
      Vk = (0, Rk.memo)((0, Rk.forwardRef)((function(kk, Fk) {
        let {
          onReady: Bk,
          onDrawn: Vk,
          owner: Jk = "other",
          framing: Ak = "player",
          forcedCosmetics: ek,
          fb: yk,
          emotePlaySeq: fk,
          turntableFromYaw: mk = null
        } = kk;
        const Wk = (0, Rk.useRef)(null),
          {
            width: vk,
            height: ik
          } = (0, tk.e)(Wk),
          Yk = (0, Rk.useRef)(null),
          Lk = (0, Rk.useRef)({}),
          Ok = (0, Rk.useRef)({}),
          [Ek, Sk] = (0, Rk.useState)(!1),
          Nk = (0, Rk.useRef)(Bk);
        Nk.current = Bk;
        const Hk = (0, Rk.useRef)(Vk);
        Hk.current = Vk;
        const uk = (0, Rk.useRef)(null),
          Mk = (0, Rk.useRef)(!1),
          gk = (0, Rk.useRef)(!1),
          Uk = (0, Rk.useCallback)((() => {
            const kk = Yk.current;
            if (!kk || !Hk.current || Mk.current || !gk.current) return;
            const Fk = {};
            uk.current = Fk, queueMicrotask((() => {
              if (uk.current !== Fk) return;
              const Bk = Promise.all(ak.t.map((Fk => kk.untilDrawn(Fk)))).catch((kk => {
                  console.error("Failed to draw the character preview", kk)
                })),
                Rk = new Promise((kk => {
                  setTimeout(kk, 1e4)
                }));
              Promise.race([Bk, Rk]).then((() => {
                var Bk;
                Yk.current !== kk || uk.current !== Fk || Mk.current || (Mk.current = !0, null === (Bk = Hk.current) || void 0 === Bk || Bk.call(Hk))
              }))
            }))
          }), []);
        return (0, Rk.useImperativeHandle)(Fk, (() => {
          const kk = (kk, Fk) => {
            var Bk;
            (Lk.current[kk] = Fk, null !== ek && void 0 !== ek && ek[kk]) || (null === (Bk = Yk.current) || void 0 === Bk || Bk.setCosmetic(kk, Fk), Uk())
          };
          return {
            updateCosmetic: kk,
            setAllCosmetics(Fk) {
              for (const Rk of ak.t) {
                var Bk;
                kk(Rk, null !== (Bk = Fk[Rk]) && void 0 !== Bk ? Bk : (0, Xk.c)(Rk))
              }
            },
            isReady() {
              var kk, Fk;
              return null !== (kk = null === (Fk = Yk.current) || void 0 === Fk ? void 0 : Fk.isReady()) && void 0 !== kk && kk
            },
            resetCamera() {
              var kk;
              null === (kk = Yk.current) || void 0 === kk || kk.resetCamera()
            },
            setOrbit(kk) {
              var Fk;
              null === (Fk = Yk.current) || void 0 === Fk || Fk.setOrbit(kk)
            },
            async ensureReadyForCapture(kk) {
              var Fk;
              await (null === (Fk = Yk.current) || void 0 === Fk ? void 0 : Fk.untilDrawn(kk))
            },
            getDevTools() {
              var kk;
              return null !== (kk = Yk.current) && void 0 !== kk && kk.isReady() ? Yk.current.dev : null
            }
          }
        }), [ek, Uk]), (0, Rk.useEffect)((() => {
          const kk = wk.b.register(Jk),
            Fk = bk.h.openCharacter(Wk.current, Ak);
          Yk.current = Fk;
          let Bk = !0;
          return Fk.ready.then((() => {
            Bk && (Sk(!0), Nk.current())
          })).catch((kk => {
            console.error("Failed to set up the character preview", kk)
          })), () => {
            Bk = !1, kk(), Fk.resetCamera(), Fk.close(), Yk.current = null
          }
        }), []), (0, Rk.useEffect)((() => {
          vk <= 0 || ik <= 0 || Yk.current.resize(vk, ik)
        }), [vk, ik]), (0, Rk.useEffect)((() => {
          if (!Ek) return;
          const kk = Ok.current;
          for (const Fk of ak.t) {
            const Bk = null === ek || void 0 === ek ? void 0 : ek[Fk],
              Rk = kk[Fk];
            Bk && Bk !== Rk ? Yk.current.setCosmetic(Fk, Bk) : !Bk && Rk && Lk.current[Fk] && Yk.current.setCosmetic(Fk, Lk.current[Fk])
          }
          Ok.current = {
            ...ek
          }, gk.current = !0, Uk()
        }), [ek, Ek, Uk]), (0, Rk.useEffect)((() => {
          Ek && Yk.current.playEmote(null !== yk && void 0 !== yk ? yk : null)
        }), [yk, fk, Ek]), (0, Rk.useEffect)((() => {
          if (!Ek || null === mk) return;
          const kk = Yk.current,
            {
              pitch: Fk,
              radius: Bk
            } = bk.e[Ak];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return kk.setOrbit({
            yaw: mk + sk,
            pitch: Fk,
            radius: Bk
          }), () => {
            kk.resetCamera()
          };
          const Rk = performance.now();
          let tk = 0;
          const ak = Xk => {
            kk.setOrbit({
              yaw: mk + (Xk - Rk) / 6e3 * 2 * Math.PI,
              pitch: Fk,
              radius: Bk
            }), tk = requestAnimationFrame(ak)
          };
          return tk = requestAnimationFrame(ak), () => {
            cancelAnimationFrame(tk), kk.resetCamera()
          }
        }), [Ek, mk]), (0, dk.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Wk
        })
      })))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);