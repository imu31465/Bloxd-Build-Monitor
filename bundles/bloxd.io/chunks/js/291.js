export const id = 291;
export const ids = [291];
export const modules = {
  41190: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CharacterPreview: () => AD
    });
    var pD = wD(58),
      sD = wD(2750),
      KD = wD(1245),
      rD = wD(2560),
      LD = wD(34233),
      cD = wD(3643),
      gD = wD(1096);
    const RD = .6 * Math.PI,
      AD = (0, pD.memo)((0, pD.forwardRef)((function(DD, zD) {
        let {
          onReady: wD,
          onDrawn: AD,
          owner: UD = "other",
          framing: fD = "player",
          forcedCosmetics: ID,
          gL: BD,
          emotePlaySeq: GD,
          turntableFromYaw: hD = null
        } = DD;
        const nD = (0, pD.useRef)(null),
          {
            width: MD,
            height: OD
          } = (0, sD.d)(nD),
          JD = (0, pD.useRef)(null),
          ED = (0, pD.useRef)({}),
          QD = (0, pD.useRef)({}),
          [XD, VD] = (0, pD.useState)(!1),
          PD = (0, pD.useRef)(wD);
        PD.current = wD;
        const CD = (0, pD.useRef)(AD);
        CD.current = AD;
        const xD = (0, pD.useRef)(null),
          TD = (0, pD.useRef)(!1),
          bD = (0, pD.useRef)(!1),
          jD = (0, pD.useCallback)((() => {
            const DD = JD.current;
            if (!DD || !CD.current || TD.current || !bD.current) return;
            const zD = {};
            xD.current = zD, queueMicrotask((() => {
              if (xD.current !== zD) return;
              const wD = Promise.all(KD.r.map((zD => DD.untilDrawn(zD)))).catch((DD => {
                  console.error("Failed to draw the character preview", DD)
                })),
                pD = new Promise((DD => {
                  setTimeout(DD, 1e4)
                }));
              Promise.race([wD, pD]).then((() => {
                var wD;
                JD.current !== DD || xD.current !== zD || TD.current || (TD.current = !0, null === (wD = CD.current) || void 0 === wD || wD.call(CD))
              }))
            }))
          }), []);
        return (0, pD.useImperativeHandle)(zD, (() => {
          const DD = (DD, zD) => {
            var wD;
            (ED.current[DD] = zD, null !== ID && void 0 !== ID && ID[DD]) || (null === (wD = JD.current) || void 0 === wD || wD.setCosmetic(DD, zD), jD())
          };
          return {
            updateCosmetic: DD,
            setAllCosmetics(zD) {
              for (const pD of KD.r) {
                var wD;
                DD(pD, null !== (wD = zD[pD]) && void 0 !== wD ? wD : (0, rD.c)(pD))
              }
            },
            isReady() {
              var DD, zD;
              return null !== (DD = null === (zD = JD.current) || void 0 === zD ? void 0 : zD.isReady()) && void 0 !== DD && DD
            },
            resetCamera() {
              var DD;
              null === (DD = JD.current) || void 0 === DD || DD.resetCamera()
            },
            setOrbit(DD) {
              var zD;
              null === (zD = JD.current) || void 0 === zD || zD.setOrbit(DD)
            },
            async ensureReadyForCapture(DD) {
              var zD;
              await (null === (zD = JD.current) || void 0 === zD ? void 0 : zD.untilDrawn(DD))
            },
            getDevTools() {
              var DD;
              return null !== (DD = JD.current) && void 0 !== DD && DD.isReady() ? JD.current.dev : null
            }
          }
        }), [ID, jD]), (0, pD.useEffect)((() => {
          const DD = cD.c.register(UD),
            zD = LD.e.openCharacter(nD.current, fD);
          JD.current = zD;
          let wD = !0;
          return zD.ready.then((() => {
            wD && (VD(!0), PD.current())
          })).catch((DD => {
            console.error("Failed to set up the character preview", DD)
          })), () => {
            wD = !1, DD(), zD.resetCamera(), zD.close(), JD.current = null
          }
        }), []), (0, pD.useEffect)((() => {
          MD <= 0 || OD <= 0 || JD.current.resize(MD, OD)
        }), [MD, OD]), (0, pD.useEffect)((() => {
          if (!XD) return;
          const DD = QD.current;
          for (const zD of KD.r) {
            const wD = null === ID || void 0 === ID ? void 0 : ID[zD],
              pD = DD[zD];
            wD && wD !== pD ? JD.current.setCosmetic(zD, wD) : !wD && pD && ED.current[zD] && JD.current.setCosmetic(zD, ED.current[zD])
          }
          QD.current = {
            ...ID
          }, bD.current = !0, jD()
        }), [ID, XD, jD]), (0, pD.useEffect)((() => {
          XD && JD.current.playEmote(null !== BD && void 0 !== BD ? BD : null)
        }), [BD, GD, XD]), (0, pD.useEffect)((() => {
          if (!XD || null === hD) return;
          const DD = JD.current,
            {
              pitch: zD,
              radius: wD
            } = LD.b[fD];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return DD.setOrbit({
            yaw: hD + RD,
            pitch: zD,
            radius: wD
          }), () => {
            DD.resetCamera()
          };
          const pD = performance.now();
          let sD = 0;
          const KD = rD => {
            DD.setOrbit({
              yaw: hD + (rD - pD) / 6e3 * 2 * Math.PI,
              pitch: zD,
              radius: wD
            }), sD = requestAnimationFrame(KD)
          };
          return sD = requestAnimationFrame(KD), () => {
            cancelAnimationFrame(sD), DD.resetCamera()
          }
        }), [XD, hD]), (0, gD.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: nD
        })
      })))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);