export const id = 280;
export const ids = [280];
export const modules = {
  40276: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      CharacterPreview: () => vY
    });
    var FY = DY(61),
      AY = DY(2486),
      IY = DY(1244),
      RY = DY(8236),
      OY = DY(36228),
      gY = DY(3235),
      aY = DY(1125);
    const vY = (0, FY.memo)((0, FY.forwardRef)((function(YY, rY) {
      let {
        onReady: DY,
        onDrawn: vY,
        owner: uY = "other",
        framing: sY = "player",
        forcedCosmetics: iY,
        YO: yY,
        emotePlaySeq: QY
      } = YY;
      const oY = (0, FY.useRef)(null),
        {
          width: WY,
          height: EY
        } = (0, AY.d)(oY),
        mY = (0, FY.useRef)(null),
        VY = (0, FY.useRef)({}),
        SY = (0, FY.useRef)({}),
        [lY, TY] = (0, FY.useState)(!1),
        eY = (0, FY.useRef)(DY);
      eY.current = DY;
      const NY = (0, FY.useRef)(vY);
      NY.current = vY;
      const BY = (0, FY.useRef)(null),
        cY = (0, FY.useRef)(!1),
        KY = (0, FY.useRef)(!1),
        HY = (0, FY.useCallback)((() => {
          const YY = mY.current;
          if (!YY || !NY.current || cY.current || !KY.current) return;
          const rY = {};
          BY.current = rY, queueMicrotask((() => {
            if (BY.current !== rY) return;
            const DY = Promise.all(IY.u.map((rY => YY.untilDrawn(rY)))).catch((YY => {
                console.error("Failed to draw the character preview", YY)
              })),
              FY = new Promise((YY => {
                setTimeout(YY, 1e4)
              }));
            Promise.race([DY, FY]).then((() => {
              var DY;
              mY.current !== YY || BY.current !== rY || cY.current || (cY.current = !0, null === (DY = NY.current) || void 0 === DY || DY.call(NY))
            }))
          }))
        }), []);
      return (0, FY.useImperativeHandle)(rY, (() => {
        const YY = (YY, rY) => {
          var DY;
          (VY.current[YY] = rY, null !== iY && void 0 !== iY && iY[YY]) || (null === (DY = mY.current) || void 0 === DY || DY.setCosmetic(YY, rY), HY())
        };
        return {
          updateCosmetic: YY,
          setAllCosmetics(rY) {
            for (const FY of IY.u) {
              var DY;
              YY(FY, null !== (DY = rY[FY]) && void 0 !== DY ? DY : (0, RY.b)(FY))
            }
          },
          isReady() {
            var YY, rY;
            return null !== (YY = null === (rY = mY.current) || void 0 === rY ? void 0 : rY.isReady()) && void 0 !== YY && YY
          },
          resetCamera() {
            var YY;
            null === (YY = mY.current) || void 0 === YY || YY.resetCamera()
          },
          async ensureReadyForCapture(YY) {
            var rY;
            await (null === (rY = mY.current) || void 0 === rY ? void 0 : rY.untilDrawn(YY))
          },
          getDevTools() {
            var YY;
            return null !== (YY = mY.current) && void 0 !== YY && YY.isReady() ? mY.current.dev : null
          }
        }
      }), [iY, HY]), (0, FY.useEffect)((() => {
        const YY = gY.c.register(uY),
          rY = OY.b.openCharacter(oY.current, sY);
        mY.current = rY;
        let DY = !0;
        return rY.ready.then((() => {
          DY && (TY(!0), eY.current())
        })).catch((YY => {
          console.error("Failed to set up the character preview", YY)
        })), () => {
          DY = !1, YY(), rY.close(), mY.current = null
        }
      }), []), (0, FY.useEffect)((() => {
        WY <= 0 || EY <= 0 || mY.current.resize(WY, EY)
      }), [WY, EY]), (0, FY.useEffect)((() => {
        if (!lY) return;
        const YY = SY.current;
        for (const rY of IY.u) {
          const DY = null === iY || void 0 === iY ? void 0 : iY[rY],
            FY = YY[rY];
          DY && DY !== FY ? mY.current.setCosmetic(rY, DY) : !DY && FY && VY.current[rY] && mY.current.setCosmetic(rY, VY.current[rY])
        }
        SY.current = {
          ...iY
        }, KY.current = !0, HY()
      }), [iY, lY, HY]), (0, FY.useEffect)((() => {
        lY && mY.current.playEmote(null !== yY && void 0 !== yY ? yY : null)
      }), [yY, QY, lY]), (0, aY.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: oY
      })
    })))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);