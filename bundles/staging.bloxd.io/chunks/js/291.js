export const id = 291;
export const ids = [291];
export const modules = {
  41290: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      CharacterPreview: () => fS
    });
    var tS = gS(64),
      bS = gS(2890),
      XS = gS(1327),
      xS = gS(2692),
      NS = gS(34267),
      qS = gS(3760),
      uS = gS(1181);
    const IS = .6 * Math.PI,
      fS = (0, tS.memo)((0, tS.forwardRef)((function(SS, HS) {
        let {
          onReady: gS,
          onDrawn: fS,
          owner: kS = "other",
          framing: aS = "player",
          forcedCosmetics: KS,
          gN: jS,
          emotePlaySeq: GS,
          turntableFromYaw: CS = null
        } = SS;
        const nS = (0, tS.useRef)(null),
          {
            width: PS,
            height: QS
          } = (0, bS.d)(nS),
          DS = (0, tS.useRef)(null),
          wS = (0, tS.useRef)({}),
          hS = (0, tS.useRef)({}),
          [ZS, JS] = (0, tS.useState)(!1),
          OS = (0, tS.useRef)(gS);
        OS.current = gS;
        const dS = (0, tS.useRef)(fS);
        dS.current = fS;
        const cS = (0, tS.useRef)(null),
          vS = (0, tS.useRef)(!1),
          ES = (0, tS.useRef)(!1),
          LS = (0, tS.useCallback)((() => {
            const SS = DS.current;
            if (!SS || !dS.current || vS.current || !ES.current) return;
            const HS = {};
            cS.current = HS, queueMicrotask((() => {
              if (cS.current !== HS) return;
              const gS = Promise.all(XS.r.map((HS => SS.untilDrawn(HS)))).catch((SS => {
                  console.error("Failed to draw the character preview", SS)
                })),
                tS = new Promise((SS => {
                  setTimeout(SS, 1e4)
                }));
              Promise.race([gS, tS]).then((() => {
                var gS;
                DS.current !== SS || cS.current !== HS || vS.current || (vS.current = !0, null === (gS = dS.current) || void 0 === gS || gS.call(dS))
              }))
            }))
          }), []);
        return (0, tS.useImperativeHandle)(HS, (() => {
          const SS = (SS, HS) => {
            var gS;
            (wS.current[SS] = HS, null !== KS && void 0 !== KS && KS[SS]) || (null === (gS = DS.current) || void 0 === gS || gS.setCosmetic(SS, HS), LS())
          };
          return {
            updateCosmetic: SS,
            setAllCosmetics(HS) {
              for (const tS of XS.r) {
                var gS;
                SS(tS, null !== (gS = HS[tS]) && void 0 !== gS ? gS : (0, xS.b)(tS))
              }
            },
            isReady() {
              var SS, HS;
              return null !== (SS = null === (HS = DS.current) || void 0 === HS ? void 0 : HS.isReady()) && void 0 !== SS && SS
            },
            resetCamera() {
              var SS;
              null === (SS = DS.current) || void 0 === SS || SS.resetCamera()
            },
            setOrbit(SS) {
              var HS;
              null === (HS = DS.current) || void 0 === HS || HS.setOrbit(SS)
            },
            async ensureReadyForCapture(SS) {
              var HS;
              await (null === (HS = DS.current) || void 0 === HS ? void 0 : HS.untilDrawn(SS))
            },
            getDevTools() {
              var SS;
              return null !== (SS = DS.current) && void 0 !== SS && SS.isReady() ? DS.current.dev : null
            }
          }
        }), [KS, LS]), (0, tS.useEffect)((() => {
          const SS = qS.b.register(kS),
            HS = NS.g.openCharacter(nS.current, aS);
          DS.current = HS;
          let gS = !0;
          return HS.ready.then((() => {
            gS && (JS(!0), OS.current())
          })).catch((SS => {
            console.error("Failed to set up the character preview", SS)
          })), () => {
            gS = !1, SS(), HS.resetCamera(), HS.close(), DS.current = null
          }
        }), []), (0, tS.useEffect)((() => {
          PS <= 0 || QS <= 0 || DS.current.resize(PS, QS)
        }), [PS, QS]), (0, tS.useEffect)((() => {
          if (!ZS) return;
          const SS = hS.current;
          for (const HS of XS.r) {
            const gS = null === KS || void 0 === KS ? void 0 : KS[HS],
              tS = SS[HS];
            gS && gS !== tS ? DS.current.setCosmetic(HS, gS) : !gS && tS && wS.current[HS] && DS.current.setCosmetic(HS, wS.current[HS])
          }
          hS.current = {
            ...KS
          }, ES.current = !0, LS()
        }), [KS, ZS, LS]), (0, tS.useEffect)((() => {
          ZS && DS.current.playEmote(null !== jS && void 0 !== jS ? jS : null)
        }), [jS, GS, ZS]), (0, tS.useEffect)((() => {
          if (!ZS || null === CS) return;
          const SS = DS.current,
            {
              pitch: HS,
              radius: gS
            } = NS.b[aS];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return SS.setOrbit({
            yaw: CS + IS,
            pitch: HS,
            radius: gS
          }), () => {
            SS.resetCamera()
          };
          const tS = performance.now();
          let bS = 0;
          const XS = xS => {
            SS.setOrbit({
              yaw: CS + (xS - tS) / 6e3 * 2 * Math.PI,
              pitch: HS,
              radius: gS
            }), bS = requestAnimationFrame(XS)
          };
          return bS = requestAnimationFrame(XS), () => {
            cancelAnimationFrame(bS), SS.resetCamera()
          }
        }), [ZS, CS]), (0, uS.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: nS
        })
      })))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);