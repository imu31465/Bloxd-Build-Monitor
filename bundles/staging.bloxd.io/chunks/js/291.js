export const id = 291;
export const ids = [291];
export const modules = {
  41287: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      CharacterPreview: () => tk
    });
    var Xk = Ik(58),
      Tk = Ik(2679),
      ik = Ik(1231),
      yk = Ik(2492),
      lk = Ik(34218),
      ak = Ik(3586),
      qk = Ik(1096);
    const Lk = .6 * Math.PI,
      tk = (0, Xk.memo)((0, Xk.forwardRef)((function(kk, Fk) {
        let {
          onReady: Ik,
          onDrawn: tk,
          owner: Zk = "other",
          framing: jk = "player",
          forcedCosmetics: ek,
          Il: wk,
          emotePlaySeq: Hk,
          turntableFromYaw: Jk = null
        } = kk;
        const xk = (0, Xk.useRef)(null),
          {
            width: Pk,
            height: Kk
          } = (0, Tk.b)(xk),
          Qk = (0, Xk.useRef)(null),
          sk = (0, Xk.useRef)({}),
          Vk = (0, Xk.useRef)({}),
          [zk, Sk] = (0, Xk.useState)(!1),
          vk = (0, Xk.useRef)(Ik);
        vk.current = Ik;
        const Ek = (0, Xk.useRef)(tk);
        Ek.current = tk;
        const Ok = (0, Xk.useRef)(null),
          nk = (0, Xk.useRef)(!1),
          Gk = (0, Xk.useRef)(!1),
          pk = (0, Xk.useCallback)((() => {
            const kk = Qk.current;
            if (!kk || !Ek.current || nk.current || !Gk.current) return;
            const Fk = {};
            Ok.current = Fk, queueMicrotask((() => {
              if (Ok.current !== Fk) return;
              const Ik = Promise.all(ik.w.map((Fk => kk.untilDrawn(Fk)))).catch((kk => {
                  console.error("Failed to draw the character preview", kk)
                })),
                Xk = new Promise((kk => {
                  setTimeout(kk, 1e4)
                }));
              Promise.race([Ik, Xk]).then((() => {
                var Ik;
                Qk.current !== kk || Ok.current !== Fk || nk.current || (nk.current = !0, null === (Ik = Ek.current) || void 0 === Ik || Ik.call(Ek))
              }))
            }))
          }), []);
        return (0, Xk.useImperativeHandle)(Fk, (() => {
          const kk = (kk, Fk) => {
            var Ik;
            (sk.current[kk] = Fk, null !== ek && void 0 !== ek && ek[kk]) || (null === (Ik = Qk.current) || void 0 === Ik || Ik.setCosmetic(kk, Fk), pk())
          };
          return {
            updateCosmetic: kk,
            setAllCosmetics(Fk) {
              for (const Xk of ik.w) {
                var Ik;
                kk(Xk, null !== (Ik = Fk[Xk]) && void 0 !== Ik ? Ik : (0, yk.c)(Xk))
              }
            },
            isReady() {
              var kk, Fk;
              return null !== (kk = null === (Fk = Qk.current) || void 0 === Fk ? void 0 : Fk.isReady()) && void 0 !== kk && kk
            },
            resetCamera() {
              var kk;
              null === (kk = Qk.current) || void 0 === kk || kk.resetCamera()
            },
            setOrbit(kk) {
              var Fk;
              null === (Fk = Qk.current) || void 0 === Fk || Fk.setOrbit(kk)
            },
            async ensureReadyForCapture(kk) {
              var Fk;
              await (null === (Fk = Qk.current) || void 0 === Fk ? void 0 : Fk.untilDrawn(kk))
            },
            getDevTools() {
              var kk;
              return null !== (kk = Qk.current) && void 0 !== kk && kk.isReady() ? Qk.current.dev : null
            }
          }
        }), [ek, pk]), (0, Xk.useEffect)((() => {
          const kk = ak.d.register(Zk),
            Fk = lk.h.openCharacter(xk.current, jk);
          Qk.current = Fk;
          let Ik = !0;
          return Fk.ready.then((() => {
            Ik && (Sk(!0), vk.current())
          })).catch((kk => {
            console.error("Failed to set up the character preview", kk)
          })), () => {
            Ik = !1, kk(), Fk.resetCamera(), Fk.close(), Qk.current = null
          }
        }), []), (0, Xk.useEffect)((() => {
          Pk <= 0 || Kk <= 0 || Qk.current.resize(Pk, Kk)
        }), [Pk, Kk]), (0, Xk.useEffect)((() => {
          if (!zk) return;
          const kk = Vk.current;
          for (const Fk of ik.w) {
            const Ik = null === ek || void 0 === ek ? void 0 : ek[Fk],
              Xk = kk[Fk];
            Ik && Ik !== Xk ? Qk.current.setCosmetic(Fk, Ik) : !Ik && Xk && sk.current[Fk] && Qk.current.setCosmetic(Fk, sk.current[Fk])
          }
          Vk.current = {
            ...ek
          }, Gk.current = !0, pk()
        }), [ek, zk, pk]), (0, Xk.useEffect)((() => {
          zk && Qk.current.playEmote(null !== wk && void 0 !== wk ? wk : null)
        }), [wk, Hk, zk]), (0, Xk.useEffect)((() => {
          if (!zk || null === Jk) return;
          const kk = Qk.current,
            {
              pitch: Fk,
              radius: Ik
            } = lk.c[jk];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return kk.setOrbit({
            yaw: Jk + Lk,
            pitch: Fk,
            radius: Ik
          }), () => {
            kk.resetCamera()
          };
          const Xk = performance.now();
          let Tk = 0;
          const ik = yk => {
            kk.setOrbit({
              yaw: Jk + (yk - Xk) / 6e3 * 2 * Math.PI,
              pitch: Fk,
              radius: Ik
            }), Tk = requestAnimationFrame(ik)
          };
          return Tk = requestAnimationFrame(ik), () => {
            cancelAnimationFrame(Tk), kk.resetCamera()
          }
        }), [zk, Jk]), (0, qk.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: xk
        })
      })))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);