export const id = 270;
export const ids = [270];
export const modules = {
  39938: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      CharacterPreview: () => YJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(2383),
      eJ = ZJ(1137),
      XJ = ZJ(8114),
      AJ = ZJ(35860),
      qJ = ZJ(3111),
      jJ = ZJ(990);
    const YJ = (0, FJ.memo)((0, FJ.forwardRef)((function(JJ, cJ) {
      let {
        onReady: ZJ,
        onDrawn: YJ,
        owner: hJ = "other",
        framing: DJ = "player",
        forcedCosmetics: sJ,
        sj: nJ,
        emotePlaySeq: GJ
      } = JJ;
      const fJ = (0, FJ.useRef)(null),
        {
          width: xJ,
          height: rJ
        } = (0, UJ.d)(fJ),
        vJ = (0, FJ.useRef)(null),
        mJ = (0, FJ.useRef)({}),
        QJ = (0, FJ.useRef)({}),
        [EJ, VJ] = (0, FJ.useState)(!1),
        KJ = (0, FJ.useRef)(ZJ);
      KJ.current = ZJ;
      const yJ = (0, FJ.useRef)(YJ);
      yJ.current = YJ;
      const SJ = (0, FJ.useRef)(null),
        IJ = (0, FJ.useRef)(!1),
        MJ = (0, FJ.useRef)(!1),
        bJ = (0, FJ.useCallback)((() => {
          const JJ = vJ.current;
          if (!JJ || !yJ.current || IJ.current || !MJ.current) return;
          const cJ = {};
          SJ.current = cJ, queueMicrotask((() => {
            if (SJ.current !== cJ) return;
            const ZJ = Promise.all(eJ.s.map((cJ => JJ.untilDrawn(cJ)))).catch((JJ => {
                console.error("Failed to draw the character preview", JJ)
              })),
              FJ = new Promise((JJ => {
                setTimeout(JJ, 1e4)
              }));
            Promise.race([ZJ, FJ]).then((() => {
              var ZJ;
              vJ.current !== JJ || SJ.current !== cJ || IJ.current || (IJ.current = !0, null === (ZJ = yJ.current) || void 0 === ZJ || ZJ.call(yJ))
            }))
          }))
        }), []);
      return (0, FJ.useImperativeHandle)(cJ, (() => {
        const JJ = (JJ, cJ) => {
          var ZJ;
          (mJ.current[JJ] = cJ, null !== sJ && void 0 !== sJ && sJ[JJ]) || (null === (ZJ = vJ.current) || void 0 === ZJ || ZJ.setCosmetic(JJ, cJ), bJ())
        };
        return {
          updateCosmetic: JJ,
          setAllCosmetics(cJ) {
            for (const FJ of eJ.s) {
              var ZJ;
              JJ(FJ, null !== (ZJ = cJ[FJ]) && void 0 !== ZJ ? ZJ : (0, XJ.e)(FJ))
            }
          },
          isReady() {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = vJ.current) || void 0 === cJ ? void 0 : cJ.isReady()) && void 0 !== JJ && JJ
          },
          resetCamera() {
            var JJ;
            null === (JJ = vJ.current) || void 0 === JJ || JJ.resetCamera()
          },
          async ensureReadyForCapture(JJ) {
            var cJ;
            await (null === (cJ = vJ.current) || void 0 === cJ ? void 0 : cJ.untilDrawn(JJ))
          },
          getDevTools() {
            var JJ;
            return null !== (JJ = vJ.current) && void 0 !== JJ && JJ.isReady() ? vJ.current.dev : null
          }
        }
      }), [sJ, bJ]), (0, FJ.useEffect)((() => {
        const JJ = qJ.e.register(hJ),
          cJ = AJ.d.openCharacter(fJ.current, DJ);
        vJ.current = cJ;
        let ZJ = !0;
        return cJ.ready.then((() => {
          ZJ && (VJ(!0), KJ.current())
        })).catch((JJ => {
          console.error("Failed to set up the character preview", JJ)
        })), () => {
          ZJ = !1, JJ(), cJ.close(), vJ.current = null
        }
      }), []), (0, FJ.useEffect)((() => {
        xJ <= 0 || rJ <= 0 || vJ.current.resize(xJ, rJ)
      }), [xJ, rJ]), (0, FJ.useEffect)((() => {
        if (!EJ) return;
        const JJ = QJ.current;
        for (const cJ of eJ.s) {
          const ZJ = null === sJ || void 0 === sJ ? void 0 : sJ[cJ],
            FJ = JJ[cJ];
          ZJ && ZJ !== FJ ? vJ.current.setCosmetic(cJ, ZJ) : !ZJ && FJ && mJ.current[cJ] && vJ.current.setCosmetic(cJ, mJ.current[cJ])
        }
        QJ.current = {
          ...sJ
        }, MJ.current = !0, bJ()
      }), [sJ, EJ, bJ]), (0, FJ.useEffect)((() => {
        EJ && vJ.current.playEmote(null !== nJ && void 0 !== nJ ? nJ : null)
      }), [nJ, GJ, EJ]), (0, jJ.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: fJ
      })
    })))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);