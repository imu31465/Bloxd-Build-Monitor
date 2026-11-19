export const id = 280;
export const ids = [280];
export const modules = {
  39976: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      CharacterPreview: () => ST
    });
    var iT = IT(46),
      zT = IT(2451),
      kT = IT(1214),
      WT = IT(8248),
      XT = IT(35795),
      BT = IT(3186),
      FT = IT(1083);
    const ST = (0, iT.memo)((0, iT.forwardRef)((function(TT, oT) {
      let {
        onReady: IT,
        onDrawn: ST,
        owner: DT = "other",
        framing: LT = "player",
        forcedCosmetics: xT,
        wX: cT,
        emotePlaySeq: KT
      } = TT;
      const MT = (0, iT.useRef)(null),
        {
          width: rT,
          height: AT
        } = (0, zT.d)(MT),
        gT = (0, iT.useRef)(null),
        hT = (0, iT.useRef)({}),
        wT = (0, iT.useRef)({}),
        [mT, eT] = (0, iT.useState)(!1),
        RT = (0, iT.useRef)(IT);
      RT.current = IT;
      const uT = (0, iT.useRef)(ST);
      uT.current = ST;
      const vT = (0, iT.useRef)(null),
        ET = (0, iT.useRef)(!1),
        fT = (0, iT.useRef)(!1),
        CT = (0, iT.useCallback)((() => {
          const TT = gT.current;
          if (!TT || !uT.current || ET.current || !fT.current) return;
          const oT = {};
          vT.current = oT, queueMicrotask((() => {
            if (vT.current !== oT) return;
            const IT = Promise.all(kT.v.map((oT => TT.untilDrawn(oT)))).catch((TT => {
                console.error("Failed to draw the character preview", TT)
              })),
              iT = new Promise((TT => {
                setTimeout(TT, 1e4)
              }));
            Promise.race([IT, iT]).then((() => {
              var IT;
              gT.current !== TT || vT.current !== oT || ET.current || (ET.current = !0, null === (IT = uT.current) || void 0 === IT || IT.call(uT))
            }))
          }))
        }), []);
      return (0, iT.useImperativeHandle)(oT, (() => {
        const TT = (TT, oT) => {
          var IT;
          (hT.current[TT] = oT, null !== xT && void 0 !== xT && xT[TT]) || (null === (IT = gT.current) || void 0 === IT || IT.setCosmetic(TT, oT), CT())
        };
        return {
          updateCosmetic: TT,
          setAllCosmetics(oT) {
            for (const iT of kT.v) {
              var IT;
              TT(iT, null !== (IT = oT[iT]) && void 0 !== IT ? IT : (0, WT.d)(iT))
            }
          },
          isReady() {
            var TT, oT;
            return null !== (TT = null === (oT = gT.current) || void 0 === oT ? void 0 : oT.isReady()) && void 0 !== TT && TT
          },
          resetCamera() {
            var TT;
            null === (TT = gT.current) || void 0 === TT || TT.resetCamera()
          },
          async ensureReadyForCapture(TT) {
            var oT;
            await (null === (oT = gT.current) || void 0 === oT ? void 0 : oT.untilDrawn(TT))
          },
          getDevTools() {
            var TT;
            return null !== (TT = gT.current) && void 0 !== TT && TT.isReady() ? gT.current.dev : null
          }
        }
      }), [xT, CT]), (0, iT.useEffect)((() => {
        const TT = BT.b.register(DT),
          oT = XT.b.openCharacter(MT.current, LT);
        gT.current = oT;
        let IT = !0;
        return oT.ready.then((() => {
          IT && (eT(!0), RT.current())
        })).catch((TT => {
          console.error("Failed to set up the character preview", TT)
        })), () => {
          IT = !1, TT(), oT.close(), gT.current = null
        }
      }), []), (0, iT.useEffect)((() => {
        rT <= 0 || AT <= 0 || gT.current.resize(rT, AT)
      }), [rT, AT]), (0, iT.useEffect)((() => {
        if (!mT) return;
        const TT = wT.current;
        for (const oT of kT.v) {
          const IT = null === xT || void 0 === xT ? void 0 : xT[oT],
            iT = TT[oT];
          IT && IT !== iT ? gT.current.setCosmetic(oT, IT) : !IT && iT && hT.current[oT] && gT.current.setCosmetic(oT, hT.current[oT])
        }
        wT.current = {
          ...xT
        }, fT.current = !0, CT()
      }), [xT, mT, CT]), (0, iT.useEffect)((() => {
        mT && gT.current.playEmote(null !== cT && void 0 !== cT ? cT : null)
      }), [cT, KT, mT]), (0, FT.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: MT
      })
    })))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);