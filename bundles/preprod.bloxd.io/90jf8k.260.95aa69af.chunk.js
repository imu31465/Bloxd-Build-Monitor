export const id = 260;
export const ids = [260];
export const modules = {
  39032: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      CharacterPreview: () => RF
    });
    var CF = SF(46),
      AF = SF(2161),
      uF = SF(1101),
      hF = SF(7744),
      bW = SF(35327),
      dF = SF(2823),
      PF = SF(971);
    const RF = (0, CF.memo)((0, CF.forwardRef)((function(FF, WF) {
      let {
        onReady: SF,
        owner: RF = "other",
        forcedCosmetics: iW,
        RL: eF,
        emotePlaySeq: EF
      } = FF;
      const QF = (0, CF.useRef)(null),
        {
          width: rW,
          height: gW
        } = (0, AF.c)(QF),
        tW = (0, CF.useRef)(null),
        TF = (0, CF.useRef)({}),
        aW = (0, CF.useRef)({}),
        [kW, qW] = (0, CF.useState)(!1),
        VF = (0, CF.useRef)(SF);
      return VF.current = SF, (0, CF.useImperativeHandle)(WF, (() => {
        const FF = (FF, WF) => {
          var SF;
          (TF.current[FF] = WF, null !== iW && void 0 !== iW && iW[FF]) || (null === (SF = tW.current) || void 0 === SF || SF.setCosmetic(FF, WF))
        };
        return {
          updateCosmetic: FF,
          setAllCosmetics(WF) {
            for (const CF of uF.v) {
              var SF;
              FF(CF, null !== (SF = WF[CF]) && void 0 !== SF ? SF : (0, hF.e)(CF))
            }
          },
          isReady() {
            var FF, WF;
            return null !== (FF = null === (WF = tW.current) || void 0 === WF ? void 0 : WF.isReady()) && void 0 !== FF && FF
          },
          async ensureReadyForCapture(FF) {
            var WF;
            await (null === (WF = tW.current) || void 0 === WF ? void 0 : WF.untilDrawn(FF))
          },
          getDevTools() {
            var FF;
            return null !== (FF = tW.current) && void 0 !== FF && FF.isReady() ? tW.current.dev : null
          }
        }
      }), [iW]), (0, CF.useEffect)((() => {
        const FF = dF.e.register(RF),
          WF = bW.c.openCharacter(QF.current);
        tW.current = WF;
        let SF = !0;
        return WF.ready.then((() => {
          SF && (qW(!0), VF.current())
        })).catch((FF => {
          console.error("Failed to set up the character preview", FF)
        })), () => {
          SF = !1, FF(), WF.close(), tW.current = null
        }
      }), []), (0, CF.useEffect)((() => {
        rW <= 0 || gW <= 0 || tW.current.resize(rW, gW)
      }), [rW, gW]), (0, CF.useEffect)((() => {
        if (!kW) return;
        const FF = aW.current;
        for (const WF of uF.v) {
          const SF = null === iW || void 0 === iW ? void 0 : iW[WF],
            CF = FF[WF];
          SF && SF !== CF ? tW.current.setCosmetic(WF, SF) : !SF && CF && TF.current[WF] && tW.current.setCosmetic(WF, TF.current[WF])
        }
        aW.current = {
          ...iW
        }
      }), [iW, kW]), (0, CF.useEffect)((() => {
        kW && tW.current.playEmote(null !== eF && void 0 !== eF ? eF : null)
      }), [eF, EF, kW]), (0, PF.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: QF
      })
    })))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);