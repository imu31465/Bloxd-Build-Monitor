export const id = 296;
export const ids = [296];
export const modules = {
  41520: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      CharacterPreview: () => bu
    });
    var su = ju(58),
      Uu = ju(2876),
      Zu = ju(1298),
      Xu = ju(2690),
      lu = ju(34583),
      qu = ju(3834),
      fu = ju(1154);
    const Cu = .6 * Math.PI,
      bu = (0, su.memo)((0, su.forwardRef)((function(uu, Eu) {
        let {
          onReady: ju,
          onDrawn: bu,
          owner: cu = "other",
          framing: Nu = "player",
          forcedCosmetics: Ou,
          Vl: Yu,
          emotePlaySeq: hu,
          turntableFromYaw: Du = null
        } = uu;
        const gu = (0, su.useRef)(null),
          {
            width: Mu,
            height: eu
          } = (0, Uu.d)(gu),
          Gu = (0, su.useRef)(null),
          pu = (0, su.useRef)({}),
          wu = (0, su.useRef)({}),
          [Ju, du] = (0, su.useState)(!1),
          au = (0, su.useRef)(ju);
        au.current = ju;
        const Pu = (0, su.useRef)(bu);
        Pu.current = bu;
        const ou = (0, su.useRef)(null),
          ku = (0, su.useRef)(!1),
          mu = (0, su.useRef)(!1),
          vu = (0, su.useCallback)((() => {
            const uu = Gu.current;
            if (!uu || !Pu.current || ku.current || !mu.current) return;
            const Eu = {};
            ou.current = Eu, queueMicrotask((() => {
              if (ou.current !== Eu) return;
              const ju = Promise.all(Zu.u.map((Eu => uu.untilDrawn(Eu)))).catch((uu => {
                  console.error("Failed to draw the character preview", uu)
                })),
                su = new Promise((uu => {
                  setTimeout(uu, 1e4)
                }));
              Promise.race([ju, su]).then((() => {
                var ju;
                Gu.current !== uu || ou.current !== Eu || ku.current || (ku.current = !0, null === (ju = Pu.current) || void 0 === ju || ju.call(Pu))
              }))
            }))
          }), []);
        return (0, su.useImperativeHandle)(Eu, (() => {
          const uu = (uu, Eu) => {
            var ju;
            (pu.current[uu] = Eu, null !== Ou && void 0 !== Ou && Ou[uu]) || (null === (ju = Gu.current) || void 0 === ju || ju.setCosmetic(uu, Eu), vu())
          };
          return {
            updateCosmetic: uu,
            setAllCosmetics(Eu) {
              for (const su of Zu.u) {
                var ju;
                uu(su, null !== (ju = Eu[su]) && void 0 !== ju ? ju : (0, Xu.b)(su))
              }
            },
            isReady() {
              var uu, Eu;
              return null !== (uu = null === (Eu = Gu.current) || void 0 === Eu ? void 0 : Eu.isReady()) && void 0 !== uu && uu
            },
            resetCamera() {
              var uu;
              null === (uu = Gu.current) || void 0 === uu || uu.resetCamera()
            },
            setOrbit(uu) {
              var Eu;
              null === (Eu = Gu.current) || void 0 === Eu || Eu.setOrbit(uu)
            },
            async ensureReadyForCapture(uu) {
              var Eu;
              await (null === (Eu = Gu.current) || void 0 === Eu ? void 0 : Eu.untilDrawn(uu))
            },
            getDevTools() {
              var uu;
              return null !== (uu = Gu.current) && void 0 !== uu && uu.isReady() ? Gu.current.dev : null
            }
          }
        }), [Ou, vu]), (0, su.useEffect)((() => {
          const uu = qu.b.register(cu),
            Eu = lu.k.openCharacter(gu.current, Nu);
          Gu.current = Eu;
          let ju = !0;
          return Eu.ready.then((() => {
            ju && (du(!0), au.current())
          })).catch((uu => {
            console.error("Failed to set up the character preview", uu)
          })), () => {
            ju = !1, uu(), Eu.resetCamera(), Eu.close(), Gu.current = null
          }
        }), []), (0, su.useEffect)((() => {
          Mu <= 0 || eu <= 0 || Gu.current.resize(Mu, eu)
        }), [Mu, eu]), (0, su.useEffect)((() => {
          if (!Ju) return;
          const uu = wu.current;
          for (const Eu of Zu.u) {
            const ju = null === Ou || void 0 === Ou ? void 0 : Ou[Eu],
              su = uu[Eu];
            ju && ju !== su ? Gu.current.setCosmetic(Eu, ju) : !ju && su && pu.current[Eu] && Gu.current.setCosmetic(Eu, pu.current[Eu])
          }
          wu.current = {
            ...Ou
          }, mu.current = !0, vu()
        }), [Ou, Ju, vu]), (0, su.useEffect)((() => {
          Ju && Gu.current.playEmote(null !== Yu && void 0 !== Yu ? Yu : null)
        }), [Yu, hu, Ju]), (0, su.useEffect)((() => {
          if (!Ju || null === Du) return;
          const uu = Gu.current,
            {
              pitch: Eu,
              radius: ju
            } = lu.e[Nu];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return uu.setOrbit({
            yaw: Du + Cu,
            pitch: Eu,
            radius: ju
          }), () => {
            uu.resetCamera()
          };
          const su = performance.now();
          let Uu = 0;
          const Zu = Xu => {
            uu.setOrbit({
              yaw: Du + (Xu - su) / 6e3 * 2 * Math.PI,
              pitch: Eu,
              radius: ju
            }), Uu = requestAnimationFrame(Zu)
          };
          return Uu = requestAnimationFrame(Zu), () => {
            cancelAnimationFrame(Uu), uu.resetCamera()
          }
        }), [Ju, Du]), (0, fu.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: gu
        })
      })))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);