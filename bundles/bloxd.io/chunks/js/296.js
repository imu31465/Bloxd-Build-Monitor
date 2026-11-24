export const id = 296;
export const ids = [296];
export const modules = {
  41379: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CharacterPreview: () => pB
    });
    var QB = zB(62),
      nB = zB(2853),
      dB = zB(1270),
      IB = zB(2667),
      NB = zB(34283),
      uB = zB(3742),
      UB = zB(1148);
    const aB = .6 * Math.PI,
      pB = (0, QB.memo)((0, QB.forwardRef)((function(BB, jB) {
        let {
          onReady: zB,
          onDrawn: pB,
          owner: rB = "other",
          framing: sB = "player",
          forcedCosmetics: JB,
          TN: mB,
          emotePlaySeq: yB,
          turntableFromYaw: kB = null
        } = BB;
        const GB = (0, QB.useRef)(null),
          {
            width: LB,
            height: gB
          } = (0, nB.b)(GB),
          tB = (0, QB.useRef)(null),
          SB = (0, QB.useRef)({}),
          MB = (0, QB.useRef)({}),
          [EB, iB] = (0, QB.useState)(!1),
          qB = (0, QB.useRef)(zB);
        qB.current = zB;
        const fB = (0, QB.useRef)(pB);
        fB.current = pB;
        const oB = (0, QB.useRef)(null),
          HB = (0, QB.useRef)(!1),
          DB = (0, QB.useRef)(!1),
          FB = (0, QB.useCallback)((() => {
            const BB = tB.current;
            if (!BB || !fB.current || HB.current || !DB.current) return;
            const jB = {};
            oB.current = jB, queueMicrotask((() => {
              if (oB.current !== jB) return;
              const zB = Promise.all(dB.v.map((jB => BB.untilDrawn(jB)))).catch((BB => {
                  console.error("Failed to draw the character preview", BB)
                })),
                QB = new Promise((BB => {
                  setTimeout(BB, 1e4)
                }));
              Promise.race([zB, QB]).then((() => {
                var zB;
                tB.current !== BB || oB.current !== jB || HB.current || (HB.current = !0, null === (zB = fB.current) || void 0 === zB || zB.call(fB))
              }))
            }))
          }), []);
        return (0, QB.useImperativeHandle)(jB, (() => {
          const BB = (BB, jB) => {
            var zB;
            (SB.current[BB] = jB, null !== JB && void 0 !== JB && JB[BB]) || (null === (zB = tB.current) || void 0 === zB || zB.setCosmetic(BB, jB), FB())
          };
          return {
            updateCosmetic: BB,
            setAllCosmetics(jB) {
              for (const QB of dB.v) {
                var zB;
                BB(QB, null !== (zB = jB[QB]) && void 0 !== zB ? zB : (0, IB.d)(QB))
              }
            },
            isReady() {
              var BB, jB;
              return null !== (BB = null === (jB = tB.current) || void 0 === jB ? void 0 : jB.isReady()) && void 0 !== BB && BB
            },
            resetCamera() {
              var BB;
              null === (BB = tB.current) || void 0 === BB || BB.resetCamera()
            },
            setOrbit(BB) {
              var jB;
              null === (jB = tB.current) || void 0 === jB || jB.setOrbit(BB)
            },
            async ensureReadyForCapture(BB) {
              var jB;
              await (null === (jB = tB.current) || void 0 === jB ? void 0 : jB.untilDrawn(BB))
            },
            getDevTools() {
              var BB;
              return null !== (BB = tB.current) && void 0 !== BB && BB.isReady() ? tB.current.dev : null
            }
          }
        }), [JB, FB]), (0, QB.useEffect)((() => {
          const BB = uB.e.register(rB),
            jB = NB.i.openCharacter(GB.current, sB);
          tB.current = jB;
          let zB = !0;
          return jB.ready.then((() => {
            zB && (iB(!0), qB.current())
          })).catch((BB => {
            console.error("Failed to set up the character preview", BB)
          })), () => {
            zB = !1, BB(), jB.resetCamera(), jB.close(), tB.current = null
          }
        }), []), (0, QB.useEffect)((() => {
          LB <= 0 || gB <= 0 || tB.current.resize(LB, gB)
        }), [LB, gB]), (0, QB.useEffect)((() => {
          if (!EB) return;
          const BB = MB.current;
          for (const jB of dB.v) {
            const zB = null === JB || void 0 === JB ? void 0 : JB[jB],
              QB = BB[jB];
            zB && zB !== QB ? tB.current.setCosmetic(jB, zB) : !zB && QB && SB.current[jB] && tB.current.setCosmetic(jB, SB.current[jB])
          }
          MB.current = {
            ...JB
          }, DB.current = !0, FB()
        }), [JB, EB, FB]), (0, QB.useEffect)((() => {
          EB && tB.current.playEmote(null !== mB && void 0 !== mB ? mB : null)
        }), [mB, yB, EB]), (0, QB.useEffect)((() => {
          if (!EB || null === kB) return;
          const BB = tB.current,
            {
              pitch: jB,
              radius: zB
            } = NB.d[sB];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return BB.setOrbit({
            yaw: kB + aB,
            pitch: jB,
            radius: zB
          }), () => {
            BB.resetCamera()
          };
          const QB = performance.now();
          let nB = 0;
          const dB = IB => {
            BB.setOrbit({
              yaw: kB + (IB - QB) / 6e3 * 2 * Math.PI,
              pitch: jB,
              radius: zB
            }), nB = requestAnimationFrame(dB)
          };
          return nB = requestAnimationFrame(dB), () => {
            cancelAnimationFrame(nB), BB.resetCamera()
          }
        }), [EB, kB]), (0, UB.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: GB
        })
      })))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);