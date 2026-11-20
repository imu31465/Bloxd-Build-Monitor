export const id = 282;
export const ids = [282];
export const modules = {
  40884: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      CharacterPreview: () => ru
    });
    var Eu = yu(64),
      Ku = yu(2615),
      Qu = yu(1215),
      mu = yu(8555),
      Ju = yu(9098),
      Nu = yu(3454),
      Xu = yu(1079);
    const Vu = .6 * Math.PI,
      ru = (0, Eu.memo)((0, Eu.forwardRef)((function(uu, Ru) {
        let {
          onReady: yu,
          onDrawn: ru,
          owner: Bu = "other",
          framing: xu = "player",
          forcedCosmetics: Su,
          NJ: pu,
          emotePlaySeq: Tu,
          turntableFromYaw: Wu = null
        } = uu;
        const ju = (0, Eu.useRef)(null),
          {
            width: Hu,
            height: du
          } = (0, Ku.d)(ju),
          bu = (0, Eu.useRef)(null),
          Cu = (0, Eu.useRef)({}),
          ku = (0, Eu.useRef)({}),
          [eu, Au] = (0, Eu.useState)(!1),
          Du = (0, Eu.useRef)(yu);
        Du.current = yu;
        const Mu = (0, Eu.useRef)(ru);
        Mu.current = ru;
        const Iu = (0, Eu.useRef)(null),
          Gu = (0, Eu.useRef)(!1),
          Uu = (0, Eu.useRef)(!1),
          nu = (0, Eu.useCallback)((() => {
            const uu = bu.current;
            if (!uu || !Mu.current || Gu.current || !Uu.current) return;
            const Ru = {};
            Iu.current = Ru, queueMicrotask((() => {
              if (Iu.current !== Ru) return;
              const yu = Promise.all(Qu.w.map((Ru => uu.untilDrawn(Ru)))).catch((uu => {
                  console.error("Failed to draw the character preview", uu)
                })),
                Eu = new Promise((uu => {
                  setTimeout(uu, 1e4)
                }));
              Promise.race([yu, Eu]).then((() => {
                var yu;
                bu.current !== uu || Iu.current !== Ru || Gu.current || (Gu.current = !0, null === (yu = Mu.current) || void 0 === yu || yu.call(Mu))
              }))
            }))
          }), []);
        return (0, Eu.useImperativeHandle)(Ru, (() => {
          const uu = (uu, Ru) => {
            var yu;
            (Cu.current[uu] = Ru, null !== Su && void 0 !== Su && Su[uu]) || (null === (yu = bu.current) || void 0 === yu || yu.setCosmetic(uu, Ru), nu())
          };
          return {
            updateCosmetic: uu,
            setAllCosmetics(Ru) {
              for (const Eu of Qu.w) {
                var yu;
                uu(Eu, null !== (yu = Ru[Eu]) && void 0 !== yu ? yu : (0, mu.b)(Eu))
              }
            },
            isReady() {
              var uu, Ru;
              return null !== (uu = null === (Ru = bu.current) || void 0 === Ru ? void 0 : Ru.isReady()) && void 0 !== uu && uu
            },
            resetCamera() {
              var uu;
              null === (uu = bu.current) || void 0 === uu || uu.resetCamera()
            },
            setOrbit(uu) {
              var Ru;
              null === (Ru = bu.current) || void 0 === Ru || Ru.setOrbit(uu)
            },
            async ensureReadyForCapture(uu) {
              var Ru;
              await (null === (Ru = bu.current) || void 0 === Ru ? void 0 : Ru.untilDrawn(uu))
            },
            getDevTools() {
              var uu;
              return null !== (uu = bu.current) && void 0 !== uu && uu.isReady() ? bu.current.dev : null
            }
          }
        }), [Su, nu]), (0, Eu.useEffect)((() => {
          const uu = Nu.b.register(Bu),
            Ru = Ju.g.openCharacter(ju.current, xu);
          bu.current = Ru;
          let yu = !0;
          return Ru.ready.then((() => {
            yu && (Au(!0), Du.current())
          })).catch((uu => {
            console.error("Failed to set up the character preview", uu)
          })), () => {
            yu = !1, uu(), Ru.resetCamera(), Ru.close(), bu.current = null
          }
        }), []), (0, Eu.useEffect)((() => {
          Hu <= 0 || du <= 0 || bu.current.resize(Hu, du)
        }), [Hu, du]), (0, Eu.useEffect)((() => {
          if (!eu) return;
          const uu = ku.current;
          for (const Ru of Qu.w) {
            const yu = null === Su || void 0 === Su ? void 0 : Su[Ru],
              Eu = uu[Ru];
            yu && yu !== Eu ? bu.current.setCosmetic(Ru, yu) : !yu && Eu && Cu.current[Ru] && bu.current.setCosmetic(Ru, Cu.current[Ru])
          }
          ku.current = {
            ...Su
          }, Uu.current = !0, nu()
        }), [Su, eu, nu]), (0, Eu.useEffect)((() => {
          eu && bu.current.playEmote(null !== pu && void 0 !== pu ? pu : null)
        }), [pu, Tu, eu]), (0, Eu.useEffect)((() => {
          if (!eu || null === Wu) return;
          const uu = bu.current,
            {
              pitch: Ru,
              radius: yu
            } = Ju.b[xu];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return uu.setOrbit({
            yaw: Wu + Vu,
            pitch: Ru,
            radius: yu
          }), () => {
            uu.resetCamera()
          };
          const Eu = performance.now();
          let Ku = 0;
          const Qu = mu => {
            uu.setOrbit({
              yaw: Wu + (mu - Eu) / 6e3 * 2 * Math.PI,
              pitch: Ru,
              radius: yu
            }), Ku = requestAnimationFrame(Qu)
          };
          return Ku = requestAnimationFrame(Qu), () => {
            cancelAnimationFrame(Ku), uu.resetCamera()
          }
        }), [eu, Wu]), (0, Xu.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: ju
        })
      })))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);