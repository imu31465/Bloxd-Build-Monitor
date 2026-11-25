export const id = 601;
export const ids = [601];
export const modules = {
  43956: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CharacterPreview: () => LM
    });
    var OM = iM(44),
      SM = iM(3047),
      jM = iM(1242),
      aM = iM(2762),
      PM = iM(35051),
      nM = iM(3997),
      QM = iM(1303);
    const zM = .6 * Math.PI,
      LM = (0, OM.memo)((0, OM.forwardRef)((function(MM, rM) {
        let {
          onReady: iM,
          onDrawn: LM,
          owner: mM = "other",
          framing: HM = "player",
          forcedCosmetics: hM,
          Ua: JM,
          emotePlaySeq: dM,
          turntableFromYaw: yM = null
        } = MM;
        const lM = (0, OM.useRef)(null),
          {
            width: EM,
            height: UM
          } = (0, SM.d)(lM),
          GM = (0, OM.useRef)(null),
          CM = (0, OM.useRef)({}),
          eM = (0, OM.useRef)({}),
          [bM, wM] = (0, OM.useState)(!1),
          tM = (0, OM.useRef)(iM);
        tM.current = iM;
        const gM = (0, OM.useRef)(LM);
        gM.current = LM;
        const uM = (0, OM.useRef)(null),
          RM = (0, OM.useRef)(!1),
          pM = (0, OM.useRef)(!1),
          WM = (0, OM.useCallback)((() => {
            const MM = GM.current;
            if (!MM || !gM.current || RM.current || !pM.current) return;
            const rM = {};
            uM.current = rM, queueMicrotask((() => {
              if (uM.current !== rM) return;
              const iM = Promise.all(jM.u.map((rM => MM.untilDrawn(rM)))).catch((MM => {
                  console.error("Failed to draw the character preview", MM)
                })),
                OM = new Promise((MM => {
                  setTimeout(MM, 1e4)
                }));
              Promise.race([iM, OM]).then((() => {
                var iM;
                GM.current !== MM || uM.current !== rM || RM.current || (RM.current = !0, null === (iM = gM.current) || void 0 === iM || iM.call(gM))
              }))
            }))
          }), []);
        return (0, OM.useImperativeHandle)(rM, (() => {
          const MM = (MM, rM) => {
            var iM;
            (CM.current[MM] = rM, null !== hM && void 0 !== hM && hM[MM]) || (null === (iM = GM.current) || void 0 === iM || iM.setCosmetic(MM, rM), WM())
          };
          return {
            updateCosmetic: MM,
            setAllCosmetics(rM) {
              for (const OM of jM.u) {
                var iM;
                MM(OM, null !== (iM = rM[OM]) && void 0 !== iM ? iM : (0, aM.c)(OM))
              }
            },
            isReady() {
              var MM, rM;
              return null !== (MM = null === (rM = GM.current) || void 0 === rM ? void 0 : rM.isReady()) && void 0 !== MM && MM
            },
            resetCamera() {
              var MM;
              null === (MM = GM.current) || void 0 === MM || MM.resetCamera()
            },
            setOrbit(MM) {
              var rM;
              null === (rM = GM.current) || void 0 === rM || rM.setOrbit(MM)
            },
            turnCamera(MM) {
              var rM;
              const iM = PM.d[HM];
              null === (rM = GM.current) || void 0 === rM || rM.setOrbit({
                ...iM,
                yaw: iM.yaw + MM
              })
            },
            async ensureReadyForCapture(MM) {
              var rM;
              await (null === (rM = GM.current) || void 0 === rM ? void 0 : rM.untilDrawn(MM))
            },
            getDevTools() {
              var MM;
              return null !== (MM = GM.current) && void 0 !== MM && MM.isReady() ? GM.current.dev : null
            }
          }
        }), [hM, HM, WM]), (0, OM.useEffect)((() => {
          const MM = nM.d.register(mM),
            rM = PM.l.openCharacter(lM.current, HM);
          GM.current = rM;
          let iM = !0;
          return rM.ready.then((() => {
            iM && (wM(!0), tM.current())
          })).catch((MM => {
            console.error("Failed to set up the character preview", MM)
          })), () => {
            iM = !1, MM(), rM.resetCamera(), rM.close(), GM.current = null
          }
        }), []), (0, OM.useEffect)((() => {
          EM <= 0 || UM <= 0 || GM.current.resize(EM, UM)
        }), [EM, UM]), (0, OM.useEffect)((() => {
          if (!bM) return;
          const MM = eM.current;
          for (const rM of jM.u) {
            const iM = null === hM || void 0 === hM ? void 0 : hM[rM],
              OM = MM[rM];
            iM && iM !== OM ? GM.current.setCosmetic(rM, iM) : !iM && OM && CM.current[rM] && GM.current.setCosmetic(rM, CM.current[rM])
          }
          eM.current = {
            ...hM
          }, pM.current = !0, WM()
        }), [hM, bM, WM]), (0, OM.useEffect)((() => {
          bM && GM.current.playEmote(null !== JM && void 0 !== JM ? JM : null)
        }), [JM, dM, bM]), (0, OM.useEffect)((() => {
          if (!bM || null === yM) return;
          const MM = GM.current,
            {
              pitch: rM,
              radius: iM
            } = PM.d[HM];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return MM.setOrbit({
            yaw: yM + zM,
            pitch: rM,
            radius: iM
          }), () => {
            MM.resetCamera()
          };
          const OM = performance.now();
          let SM = 0;
          const jM = aM => {
            MM.setOrbit({
              yaw: yM + (aM - OM) / 6e3 * 2 * Math.PI,
              pitch: rM,
              radius: iM
            }), SM = requestAnimationFrame(jM)
          };
          return SM = requestAnimationFrame(jM), () => {
            cancelAnimationFrame(SM), MM.resetCamera()
          }
        }), [bM, yM]), (0, QM.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: lM
        })
      })))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);