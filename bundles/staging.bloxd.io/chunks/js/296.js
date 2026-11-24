export const id = 296;
export const ids = [296];
export const modules = {
  41439: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CharacterPreview: () => lT
    });
    var WT = mT(63),
      zT = mT(2856),
      MT = mT(1336),
      gT = mT(2685),
      nT = mT(34311),
      HT = mT(3746),
      kT = mT(1188);
    const jT = .6 * Math.PI,
      lT = (0, WT.memo)((0, WT.forwardRef)((function(TT, UT) {
        let {
          onReady: mT,
          onDrawn: lT,
          owner: LT = "other",
          framing: pT = "player",
          forcedCosmetics: BT,
          tn: ZT,
          emotePlaySeq: cT,
          turntableFromYaw: vT = null
        } = TT;
        const fT = (0, WT.useRef)(null),
          {
            width: qT,
            height: iT
          } = (0, zT.b)(fT),
          bT = (0, WT.useRef)(null),
          OT = (0, WT.useRef)({}),
          eT = (0, WT.useRef)({}),
          [YT, JT] = (0, WT.useState)(!1),
          xT = (0, WT.useRef)(mT);
        xT.current = mT;
        const dT = (0, WT.useRef)(lT);
        dT.current = lT;
        const wT = (0, WT.useRef)(null),
          tT = (0, WT.useRef)(!1),
          aT = (0, WT.useRef)(!1),
          yT = (0, WT.useCallback)((() => {
            const TT = bT.current;
            if (!TT || !dT.current || tT.current || !aT.current) return;
            const UT = {};
            wT.current = UT, queueMicrotask((() => {
              if (wT.current !== UT) return;
              const mT = Promise.all(MT.t.map((UT => TT.untilDrawn(UT)))).catch((TT => {
                  console.error("Failed to draw the character preview", TT)
                })),
                WT = new Promise((TT => {
                  setTimeout(TT, 1e4)
                }));
              Promise.race([mT, WT]).then((() => {
                var mT;
                bT.current !== TT || wT.current !== UT || tT.current || (tT.current = !0, null === (mT = dT.current) || void 0 === mT || mT.call(dT))
              }))
            }))
          }), []);
        return (0, WT.useImperativeHandle)(UT, (() => {
          const TT = (TT, UT) => {
            var mT;
            (OT.current[TT] = UT, null !== BT && void 0 !== BT && BT[TT]) || (null === (mT = bT.current) || void 0 === mT || mT.setCosmetic(TT, UT), yT())
          };
          return {
            updateCosmetic: TT,
            setAllCosmetics(UT) {
              for (const WT of MT.t) {
                var mT;
                TT(WT, null !== (mT = UT[WT]) && void 0 !== mT ? mT : (0, gT.e)(WT))
              }
            },
            isReady() {
              var TT, UT;
              return null !== (TT = null === (UT = bT.current) || void 0 === UT ? void 0 : UT.isReady()) && void 0 !== TT && TT
            },
            resetCamera() {
              var TT;
              null === (TT = bT.current) || void 0 === TT || TT.resetCamera()
            },
            setOrbit(TT) {
              var UT;
              null === (UT = bT.current) || void 0 === UT || UT.setOrbit(TT)
            },
            async ensureReadyForCapture(TT) {
              var UT;
              await (null === (UT = bT.current) || void 0 === UT ? void 0 : UT.untilDrawn(TT))
            },
            getDevTools() {
              var TT;
              return null !== (TT = bT.current) && void 0 !== TT && TT.isReady() ? bT.current.dev : null
            }
          }
        }), [BT, yT]), (0, WT.useEffect)((() => {
          const TT = HT.c.register(LT),
            UT = nT.g.openCharacter(fT.current, pT);
          bT.current = UT;
          let mT = !0;
          return UT.ready.then((() => {
            mT && (JT(!0), xT.current())
          })).catch((TT => {
            console.error("Failed to set up the character preview", TT)
          })), () => {
            mT = !1, TT(), UT.resetCamera(), UT.close(), bT.current = null
          }
        }), []), (0, WT.useEffect)((() => {
          qT <= 0 || iT <= 0 || bT.current.resize(qT, iT)
        }), [qT, iT]), (0, WT.useEffect)((() => {
          if (!YT) return;
          const TT = eT.current;
          for (const UT of MT.t) {
            const mT = null === BT || void 0 === BT ? void 0 : BT[UT],
              WT = TT[UT];
            mT && mT !== WT ? bT.current.setCosmetic(UT, mT) : !mT && WT && OT.current[UT] && bT.current.setCosmetic(UT, OT.current[UT])
          }
          eT.current = {
            ...BT
          }, aT.current = !0, yT()
        }), [BT, YT, yT]), (0, WT.useEffect)((() => {
          YT && bT.current.playEmote(null !== ZT && void 0 !== ZT ? ZT : null)
        }), [ZT, cT, YT]), (0, WT.useEffect)((() => {
          if (!YT || null === vT) return;
          const TT = bT.current,
            {
              pitch: UT,
              radius: mT
            } = nT.c[pT];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return TT.setOrbit({
            yaw: vT + jT,
            pitch: UT,
            radius: mT
          }), () => {
            TT.resetCamera()
          };
          const WT = performance.now();
          let zT = 0;
          const MT = gT => {
            TT.setOrbit({
              yaw: vT + (gT - WT) / 6e3 * 2 * Math.PI,
              pitch: UT,
              radius: mT
            }), zT = requestAnimationFrame(MT)
          };
          return zT = requestAnimationFrame(MT), () => {
            cancelAnimationFrame(zT), TT.resetCamera()
          }
        }), [YT, vT]), (0, kT.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: fT
        })
      })))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);