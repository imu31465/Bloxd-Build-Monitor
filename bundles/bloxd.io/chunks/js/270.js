export const id = 270;
export const ids = [270];
export const modules = {
  39911: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      CharacterPreview: () => oB
    });
    var VB = dB(62),
      yB = dB(2368),
      pB = dB(1117),
      lB = dB(8155),
      JB = dB(35817),
      YB = dB(3121),
      gB = dB(980);
    const oB = (0, VB.memo)((0, VB.forwardRef)((function(BB, TB) {
      let {
        onReady: dB,
        onDrawn: oB,
        owner: kB = "other",
        framing: LB = "player",
        forcedCosmetics: OB,
        Eo: DB,
        emotePlaySeq: uB
      } = BB;
      const HB = (0, VB.useRef)(null),
        {
          width: EB,
          height: vB
        } = (0, yB.b)(HB),
        mB = (0, VB.useRef)(null),
        iB = (0, VB.useRef)({}),
        NB = (0, VB.useRef)({}),
        [tB, fB] = (0, VB.useState)(!1),
        sB = (0, VB.useRef)(dB);
      sB.current = dB;
      const MB = (0, VB.useRef)(oB);
      MB.current = oB;
      const zB = (0, VB.useRef)(null),
        wB = (0, VB.useRef)(!1),
        UB = (0, VB.useRef)(!1),
        FB = (0, VB.useCallback)((() => {
          const BB = mB.current;
          if (!BB || !MB.current || wB.current || !UB.current) return;
          const TB = {};
          zB.current = TB, queueMicrotask((() => {
            if (zB.current !== TB) return;
            const dB = Promise.all(pB.q.map((TB => BB.untilDrawn(TB)))).catch((BB => {
                console.error("Failed to draw the character preview", BB)
              })),
              VB = new Promise((BB => {
                setTimeout(BB, 1e4)
              }));
            Promise.race([dB, VB]).then((() => {
              var dB;
              mB.current !== BB || zB.current !== TB || wB.current || (wB.current = !0, null === (dB = MB.current) || void 0 === dB || dB.call(MB))
            }))
          }))
        }), []);
      return (0, VB.useImperativeHandle)(TB, (() => {
        const BB = (BB, TB) => {
          var dB;
          (iB.current[BB] = TB, null !== OB && void 0 !== OB && OB[BB]) || (null === (dB = mB.current) || void 0 === dB || dB.setCosmetic(BB, TB), FB())
        };
        return {
          updateCosmetic: BB,
          setAllCosmetics(TB) {
            for (const VB of pB.q) {
              var dB;
              BB(VB, null !== (dB = TB[VB]) && void 0 !== dB ? dB : (0, lB.d)(VB))
            }
          },
          isReady() {
            var BB, TB;
            return null !== (BB = null === (TB = mB.current) || void 0 === TB ? void 0 : TB.isReady()) && void 0 !== BB && BB
          },
          resetCamera() {
            var BB;
            null === (BB = mB.current) || void 0 === BB || BB.resetCamera()
          },
          async ensureReadyForCapture(BB) {
            var TB;
            await (null === (TB = mB.current) || void 0 === TB ? void 0 : TB.untilDrawn(BB))
          },
          getDevTools() {
            var BB;
            return null !== (BB = mB.current) && void 0 !== BB && BB.isReady() ? mB.current.dev : null
          }
        }
      }), [OB, FB]), (0, VB.useEffect)((() => {
        const BB = YB.b.register(kB),
          TB = JB.e.openCharacter(HB.current, LB);
        mB.current = TB;
        let dB = !0;
        return TB.ready.then((() => {
          dB && (fB(!0), sB.current())
        })).catch((BB => {
          console.error("Failed to set up the character preview", BB)
        })), () => {
          dB = !1, BB(), TB.close(), mB.current = null
        }
      }), []), (0, VB.useEffect)((() => {
        EB <= 0 || vB <= 0 || mB.current.resize(EB, vB)
      }), [EB, vB]), (0, VB.useEffect)((() => {
        if (!tB) return;
        const BB = NB.current;
        for (const TB of pB.q) {
          const dB = null === OB || void 0 === OB ? void 0 : OB[TB],
            VB = BB[TB];
          dB && dB !== VB ? mB.current.setCosmetic(TB, dB) : !dB && VB && iB.current[TB] && mB.current.setCosmetic(TB, iB.current[TB])
        }
        NB.current = {
          ...OB
        }, UB.current = !0, FB()
      }), [OB, tB, FB]), (0, VB.useEffect)((() => {
        tB && mB.current.playEmote(null !== DB && void 0 !== DB ? DB : null)
      }), [DB, uB, tB]), (0, gB.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: HB
      })
    })))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);