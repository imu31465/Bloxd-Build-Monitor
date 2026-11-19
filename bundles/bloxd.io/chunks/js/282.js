export const id = 282;
export const ids = [282];
export const modules = {
  40352: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      CharacterPreview: () => BD
    });
    var ID = cD(53),
      pD = cD(2621),
      iD = cD(1240),
      fD = cD(8520),
      bD = cD(9074),
      QD = cD(3447),
      wD = cD(1093);
    const SD = .6 * Math.PI,
      BD = (0, ID.memo)((0, ID.forwardRef)((function(DD, CD) {
        let {
          onReady: cD,
          onDrawn: BD,
          owner: yD = "other",
          framing: MD = "player",
          forcedCosmetics: tD,
          Pb: ZD,
          emotePlaySeq: oD,
          turntableFromYaw: vD = null
        } = DD;
        const ND = (0, ID.useRef)(null),
          {
            width: gD,
            height: XD
          } = (0, pD.e)(ND),
          mD = (0, ID.useRef)(null),
          nD = (0, ID.useRef)({}),
          OD = (0, ID.useRef)({}),
          [PD, HD] = (0, ID.useState)(!1),
          UD = (0, ID.useRef)(cD);
        UD.current = cD;
        const xD = (0, ID.useRef)(BD);
        xD.current = BD;
        const qD = (0, ID.useRef)(null),
          JD = (0, ID.useRef)(!1),
          KD = (0, ID.useRef)(!1),
          aD = (0, ID.useCallback)((() => {
            const DD = mD.current;
            if (!DD || !xD.current || JD.current || !KD.current) return;
            const CD = {};
            qD.current = CD, queueMicrotask((() => {
              if (qD.current !== CD) return;
              const cD = Promise.all(iD.u.map((CD => DD.untilDrawn(CD)))).catch((DD => {
                  console.error("Failed to draw the character preview", DD)
                })),
                ID = new Promise((DD => {
                  setTimeout(DD, 1e4)
                }));
              Promise.race([cD, ID]).then((() => {
                var cD;
                mD.current !== DD || qD.current !== CD || JD.current || (JD.current = !0, null === (cD = xD.current) || void 0 === cD || cD.call(xD))
              }))
            }))
          }), []);
        return (0, ID.useImperativeHandle)(CD, (() => {
          const DD = (DD, CD) => {
            var cD;
            (nD.current[DD] = CD, null !== tD && void 0 !== tD && tD[DD]) || (null === (cD = mD.current) || void 0 === cD || cD.setCosmetic(DD, CD), aD())
          };
          return {
            updateCosmetic: DD,
            setAllCosmetics(CD) {
              for (const ID of iD.u) {
                var cD;
                DD(ID, null !== (cD = CD[ID]) && void 0 !== cD ? cD : (0, fD.b)(ID))
              }
            },
            isReady() {
              var DD, CD;
              return null !== (DD = null === (CD = mD.current) || void 0 === CD ? void 0 : CD.isReady()) && void 0 !== DD && DD
            },
            resetCamera() {
              var DD;
              null === (DD = mD.current) || void 0 === DD || DD.resetCamera()
            },
            setOrbit(DD) {
              var CD;
              null === (CD = mD.current) || void 0 === CD || CD.setOrbit(DD)
            },
            async ensureReadyForCapture(DD) {
              var CD;
              await (null === (CD = mD.current) || void 0 === CD ? void 0 : CD.untilDrawn(DD))
            },
            getDevTools() {
              var DD;
              return null !== (DD = mD.current) && void 0 !== DD && DD.isReady() ? mD.current.dev : null
            }
          }
        }), [tD, aD]), (0, ID.useEffect)((() => {
          const DD = QD.e.register(yD),
            CD = bD.f.openCharacter(ND.current, MD);
          mD.current = CD;
          let cD = !0;
          return CD.ready.then((() => {
            cD && (HD(!0), UD.current())
          })).catch((DD => {
            console.error("Failed to set up the character preview", DD)
          })), () => {
            cD = !1, DD(), CD.resetCamera(), CD.close(), mD.current = null
          }
        }), []), (0, ID.useEffect)((() => {
          gD <= 0 || XD <= 0 || mD.current.resize(gD, XD)
        }), [gD, XD]), (0, ID.useEffect)((() => {
          if (!PD) return;
          const DD = OD.current;
          for (const CD of iD.u) {
            const cD = null === tD || void 0 === tD ? void 0 : tD[CD],
              ID = DD[CD];
            cD && cD !== ID ? mD.current.setCosmetic(CD, cD) : !cD && ID && nD.current[CD] && mD.current.setCosmetic(CD, nD.current[CD])
          }
          OD.current = {
            ...tD
          }, KD.current = !0, aD()
        }), [tD, PD, aD]), (0, ID.useEffect)((() => {
          PD && mD.current.playEmote(null !== ZD && void 0 !== ZD ? ZD : null)
        }), [ZD, oD, PD]), (0, ID.useEffect)((() => {
          if (!PD || null === vD) return;
          const DD = mD.current,
            {
              pitch: CD,
              radius: cD
            } = bD.c[MD];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return DD.setOrbit({
            yaw: vD + SD,
            pitch: CD,
            radius: cD
          }), () => {
            DD.resetCamera()
          };
          const ID = performance.now();
          let pD = 0;
          const iD = fD => {
            DD.setOrbit({
              yaw: vD + (fD - ID) / 6e3 * 2 * Math.PI,
              pitch: CD,
              radius: cD
            }), pD = requestAnimationFrame(iD)
          };
          return pD = requestAnimationFrame(iD), () => {
            cancelAnimationFrame(pD), DD.resetCamera()
          }
        }), [PD, vD]), (0, wD.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: ND
        })
      })))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);