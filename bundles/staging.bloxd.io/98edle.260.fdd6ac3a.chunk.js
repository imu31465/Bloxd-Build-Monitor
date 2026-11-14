export const id = 260;
export const ids = [260];
export const modules = {
  38662: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      CharacterPreview: () => eW
    });
    var wW = MW(75),
      CW = MW(2135),
      zR = MW(1066),
      AW = MW(7714),
      bR = MW(35025),
      yR = MW(2713),
      NW = MW(940);
    const eW = (0, wW.memo)((0, wW.forwardRef)((function(WW, RW) {
      let {
        onReady: MW,
        owner: eW = "other",
        forcedCosmetics: BW,
        Nk: tR,
        emotePlaySeq: TW
      } = WW;
      const gR = (0, wW.useRef)(null),
        {
          width: iR,
          height: YW
        } = (0, CW.c)(gR),
        JW = (0, wW.useRef)(null),
        PW = (0, wW.useRef)({}),
        IW = (0, wW.useRef)({}),
        [oW, lW] = (0, wW.useState)(!1),
        FW = (0, wW.useRef)(MW);
      return FW.current = MW, (0, wW.useImperativeHandle)(RW, (() => {
        const WW = (WW, RW) => {
          var MW;
          (PW.current[WW] = RW, null !== BW && void 0 !== BW && BW[WW]) || (null === (MW = JW.current) || void 0 === MW || MW.setCosmetic(WW, RW))
        };
        return {
          updateCosmetic: WW,
          setAllCosmetics(RW) {
            for (const wW of zR.y) {
              var MW;
              WW(wW, null !== (MW = RW[wW]) && void 0 !== MW ? MW : (0, AW.c)(wW))
            }
          },
          isReady() {
            var WW, RW;
            return null !== (WW = null === (RW = JW.current) || void 0 === RW ? void 0 : RW.isReady()) && void 0 !== WW && WW
          },
          async ensureReadyForCapture(WW) {
            var RW;
            await (null === (RW = JW.current) || void 0 === RW ? void 0 : RW.untilDrawn(WW))
          },
          getDevTools() {
            var WW;
            return null !== (WW = JW.current) && void 0 !== WW && WW.isReady() ? JW.current.dev : null
          }
        }
      }), [BW]), (0, wW.useEffect)((() => {
        const WW = yR.d.register(eW),
          RW = bR.e.openCharacter(gR.current);
        JW.current = RW;
        let MW = !0;
        return RW.ready.then((() => {
          MW && (lW(!0), FW.current())
        })).catch((WW => {
          console.error("Failed to set up the character preview", WW)
        })), () => {
          MW = !1, WW(), RW.close(), JW.current = null
        }
      }), []), (0, wW.useEffect)((() => {
        iR <= 0 || YW <= 0 || JW.current.resize(iR, YW)
      }), [iR, YW]), (0, wW.useEffect)((() => {
        if (!oW) return;
        const WW = IW.current;
        for (const RW of zR.y) {
          const MW = null === BW || void 0 === BW ? void 0 : BW[RW],
            wW = WW[RW];
          MW && MW !== wW ? JW.current.setCosmetic(RW, MW) : !MW && wW && PW.current[RW] && JW.current.setCosmetic(RW, PW.current[RW])
        }
        IW.current = {
          ...BW
        }
      }), [BW, oW]), (0, wW.useEffect)((() => {
        oW && JW.current.playEmote(null !== tR && void 0 !== tR ? tR : null)
      }), [tR, TW, oW]), (0, NW.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: gR
      })
    })))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);