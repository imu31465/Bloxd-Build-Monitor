export const id = 283;
export const ids = [283];
export const modules = {
  40922: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      CharacterPreview: () => AT
    });
    var lT = cT(71),
      MT = cT(2770),
      KT = cT(1244),
      OT = cT(8855),
      yT = cT(9395),
      fT = cT(3595),
      xT = cT(1099);
    const IT = .6 * Math.PI,
      AT = (0, lT.memo)((0, lT.forwardRef)((function(TT, kT) {
        let {
          onReady: cT,
          onDrawn: AT,
          owner: CT = "other",
          framing: jT = "player",
          forcedCosmetics: vT,
          xy: tT,
          emotePlaySeq: hT,
          turntableFromYaw: NT = null
        } = TT;
        const QT = (0, lT.useRef)(null),
          {
            width: ST,
            height: DT
          } = (0, MT.e)(QT),
          aT = (0, lT.useRef)(null),
          FT = (0, lT.useRef)({}),
          rT = (0, lT.useRef)({}),
          [PT, wT] = (0, lT.useState)(!1),
          mT = (0, lT.useRef)(cT);
        mT.current = cT;
        const bT = (0, lT.useRef)(AT);
        bT.current = AT;
        const zT = (0, lT.useRef)(null),
          JT = (0, lT.useRef)(!1),
          oT = (0, lT.useRef)(!1),
          HT = (0, lT.useCallback)((() => {
            const TT = aT.current;
            if (!TT || !bT.current || JT.current || !oT.current) return;
            const kT = {};
            zT.current = kT, queueMicrotask((() => {
              if (zT.current !== kT) return;
              const cT = Promise.all(KT.u.map((kT => TT.untilDrawn(kT)))).catch((TT => {
                  console.error("Failed to draw the character preview", TT)
                })),
                lT = new Promise((TT => {
                  setTimeout(TT, 1e4)
                }));
              Promise.race([cT, lT]).then((() => {
                var cT;
                aT.current !== TT || zT.current !== kT || JT.current || (JT.current = !0, null === (cT = bT.current) || void 0 === cT || cT.call(bT))
              }))
            }))
          }), []);
        return (0, lT.useImperativeHandle)(kT, (() => {
          const TT = (TT, kT) => {
            var cT;
            (FT.current[TT] = kT, null !== vT && void 0 !== vT && vT[TT]) || (null === (cT = aT.current) || void 0 === cT || cT.setCosmetic(TT, kT), HT())
          };
          return {
            updateCosmetic: TT,
            setAllCosmetics(kT) {
              for (const lT of KT.u) {
                var cT;
                TT(lT, null !== (cT = kT[lT]) && void 0 !== cT ? cT : (0, OT.e)(lT))
              }
            },
            isReady() {
              var TT, kT;
              return null !== (TT = null === (kT = aT.current) || void 0 === kT ? void 0 : kT.isReady()) && void 0 !== TT && TT
            },
            resetCamera() {
              var TT;
              null === (TT = aT.current) || void 0 === TT || TT.resetCamera()
            },
            setOrbit(TT) {
              var kT;
              null === (kT = aT.current) || void 0 === kT || kT.setOrbit(TT)
            },
            async ensureReadyForCapture(TT) {
              var kT;
              await (null === (kT = aT.current) || void 0 === kT ? void 0 : kT.untilDrawn(TT))
            },
            getDevTools() {
              var TT;
              return null !== (TT = aT.current) && void 0 !== TT && TT.isReady() ? aT.current.dev : null
            }
          }
        }), [vT, HT]), (0, lT.useEffect)((() => {
          const TT = fT.d.register(CT),
            kT = yT.f.openCharacter(QT.current, jT);
          aT.current = kT;
          let cT = !0;
          return kT.ready.then((() => {
            cT && (wT(!0), mT.current())
          })).catch((TT => {
            console.error("Failed to set up the character preview", TT)
          })), () => {
            cT = !1, TT(), kT.resetCamera(), kT.close(), aT.current = null
          }
        }), []), (0, lT.useEffect)((() => {
          ST <= 0 || DT <= 0 || aT.current.resize(ST, DT)
        }), [ST, DT]), (0, lT.useEffect)((() => {
          if (!PT) return;
          const TT = rT.current;
          for (const kT of KT.u) {
            const cT = null === vT || void 0 === vT ? void 0 : vT[kT],
              lT = TT[kT];
            cT && cT !== lT ? aT.current.setCosmetic(kT, cT) : !cT && lT && FT.current[kT] && aT.current.setCosmetic(kT, FT.current[kT])
          }
          rT.current = {
            ...vT
          }, oT.current = !0, HT()
        }), [vT, PT, HT]), (0, lT.useEffect)((() => {
          PT && aT.current.playEmote(null !== tT && void 0 !== tT ? tT : null)
        }), [tT, hT, PT]), (0, lT.useEffect)((() => {
          if (!PT || null === NT) return;
          const TT = aT.current,
            {
              pitch: kT,
              radius: cT
            } = yT.c[jT];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return TT.setOrbit({
            yaw: NT + IT,
            pitch: kT,
            radius: cT
          }), () => {
            TT.resetCamera()
          };
          const lT = performance.now();
          let MT = 0;
          const KT = OT => {
            TT.setOrbit({
              yaw: NT + (OT - lT) / 6e3 * 2 * Math.PI,
              pitch: kT,
              radius: cT
            }), MT = requestAnimationFrame(KT)
          };
          return MT = requestAnimationFrame(KT), () => {
            cancelAnimationFrame(MT), TT.resetCamera()
          }
        }), [PT, NT]), (0, xT.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: QT
        })
      })))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);