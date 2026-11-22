export const id = 290;
export const ids = [290];
export const modules = {
  40857: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      CharacterPreview: () => Kk
    });
    var Dk = ik(60),
      fk = ik(2683),
      Sk = ik(1218),
      bk = ik(8658),
      rk = ik(33799),
      Pk = ik(3590),
      mk = ik(1066);
    const Mk = .6 * Math.PI,
      Kk = (0, Dk.memo)((0, Dk.forwardRef)((function(kk, ek) {
        let {
          onReady: ik,
          onDrawn: Kk,
          owner: xk = "other",
          framing: nk = "player",
          forcedCosmetics: Uk,
          gP: Hk,
          emotePlaySeq: wk,
          turntableFromYaw: lk = null
        } = kk;
        const pk = (0, Dk.useRef)(null),
          {
            width: yk,
            height: Yk
          } = (0, fk.c)(pk),
          Lk = (0, Dk.useRef)(null),
          Ck = (0, Dk.useRef)({}),
          Ak = (0, Dk.useRef)({}),
          [jk, sk] = (0, Dk.useState)(!1),
          dk = (0, Dk.useRef)(ik);
        dk.current = ik;
        const Vk = (0, Dk.useRef)(Kk);
        Vk.current = Kk;
        const Fk = (0, Dk.useRef)(null),
          uk = (0, Dk.useRef)(!1),
          qk = (0, Dk.useRef)(!1),
          Ik = (0, Dk.useCallback)((() => {
            const kk = Lk.current;
            if (!kk || !Vk.current || uk.current || !qk.current) return;
            const ek = {};
            Fk.current = ek, queueMicrotask((() => {
              if (Fk.current !== ek) return;
              const ik = Promise.all(Sk.y.map((ek => kk.untilDrawn(ek)))).catch((kk => {
                  console.error("Failed to draw the character preview", kk)
                })),
                Dk = new Promise((kk => {
                  setTimeout(kk, 1e4)
                }));
              Promise.race([ik, Dk]).then((() => {
                var ik;
                Lk.current !== kk || Fk.current !== ek || uk.current || (uk.current = !0, null === (ik = Vk.current) || void 0 === ik || ik.call(Vk))
              }))
            }))
          }), []);
        return (0, Dk.useImperativeHandle)(ek, (() => {
          const kk = (kk, ek) => {
            var ik;
            (Ck.current[kk] = ek, null !== Uk && void 0 !== Uk && Uk[kk]) || (null === (ik = Lk.current) || void 0 === ik || ik.setCosmetic(kk, ek), Ik())
          };
          return {
            updateCosmetic: kk,
            setAllCosmetics(ek) {
              for (const Dk of Sk.y) {
                var ik;
                kk(Dk, null !== (ik = ek[Dk]) && void 0 !== ik ? ik : (0, bk.b)(Dk))
              }
            },
            isReady() {
              var kk, ek;
              return null !== (kk = null === (ek = Lk.current) || void 0 === ek ? void 0 : ek.isReady()) && void 0 !== kk && kk
            },
            resetCamera() {
              var kk;
              null === (kk = Lk.current) || void 0 === kk || kk.resetCamera()
            },
            setOrbit(kk) {
              var ek;
              null === (ek = Lk.current) || void 0 === ek || ek.setOrbit(kk)
            },
            async ensureReadyForCapture(kk) {
              var ek;
              await (null === (ek = Lk.current) || void 0 === ek ? void 0 : ek.untilDrawn(kk))
            },
            getDevTools() {
              var kk;
              return null !== (kk = Lk.current) && void 0 !== kk && kk.isReady() ? Lk.current.dev : null
            }
          }
        }), [Uk, Ik]), (0, Dk.useEffect)((() => {
          const kk = Pk.b.register(xk),
            ek = rk.h.openCharacter(pk.current, nk);
          Lk.current = ek;
          let ik = !0;
          return ek.ready.then((() => {
            ik && (sk(!0), dk.current())
          })).catch((kk => {
            console.error("Failed to set up the character preview", kk)
          })), () => {
            ik = !1, kk(), ek.resetCamera(), ek.close(), Lk.current = null
          }
        }), []), (0, Dk.useEffect)((() => {
          yk <= 0 || Yk <= 0 || Lk.current.resize(yk, Yk)
        }), [yk, Yk]), (0, Dk.useEffect)((() => {
          if (!jk) return;
          const kk = Ak.current;
          for (const ek of Sk.y) {
            const ik = null === Uk || void 0 === Uk ? void 0 : Uk[ek],
              Dk = kk[ek];
            ik && ik !== Dk ? Lk.current.setCosmetic(ek, ik) : !ik && Dk && Ck.current[ek] && Lk.current.setCosmetic(ek, Ck.current[ek])
          }
          Ak.current = {
            ...Uk
          }, qk.current = !0, Ik()
        }), [Uk, jk, Ik]), (0, Dk.useEffect)((() => {
          jk && Lk.current.playEmote(null !== Hk && void 0 !== Hk ? Hk : null)
        }), [Hk, wk, jk]), (0, Dk.useEffect)((() => {
          if (!jk || null === lk) return;
          const kk = Lk.current,
            {
              pitch: ek,
              radius: ik
            } = rk.d[nk];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return kk.setOrbit({
            yaw: lk + Mk,
            pitch: ek,
            radius: ik
          }), () => {
            kk.resetCamera()
          };
          const Dk = performance.now();
          let fk = 0;
          const Sk = bk => {
            kk.setOrbit({
              yaw: lk + (bk - Dk) / 6e3 * 2 * Math.PI,
              pitch: ek,
              radius: ik
            }), fk = requestAnimationFrame(Sk)
          };
          return fk = requestAnimationFrame(Sk), () => {
            cancelAnimationFrame(fk), kk.resetCamera()
          }
        }), [jk, lk]), (0, mk.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: pk
        })
      })))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);