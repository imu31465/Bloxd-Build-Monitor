export const id = 16;
export const ids = [16];
export const modules = {
  37628: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => AF
    });
    const CF = .4,
      AF = function(FF, WF, SF, AF) {
        let uF, {
            localPlayerId: hF
          } = AF,
          bW = !1,
          dF = null,
          PF = null,
          RF = null,
          iW = 1,
          eF = null,
          EF = 0,
          QF = 0;

        function rW() {
          if (eF) {
            const FF = eF;
            FF.fade(FF.getVolume(), 0, 500), setTimeout((() => {
              FF.stop()
            }), 500), eF = null
          }
          QF = 0
        }

        function gW(FF) {
          var WF;
          if (!dF || bW || null === PF) return void(eF && rW());
          const SF = Date.now();
          if (!eF || SF - EF > 54e3) {
            if (eF) {
              const FF = eF;
              FF.fade(FF.getVolume(), 0, 2e3), setTimeout((() => {
                FF.stop()
              }), 2e3)
            }
            eF = uF.playSound(hF, "crowdAmbience", CF, 1), EF = SF, QF = CF
          }
          const AF = function() {
              if (null === PF || null === RF || !dF) return 0;
              const FF = uF.getPositionView(dF);
              if (!FF) return 0;
              const WF = Math.abs(FF[2] - PF),
                SF = Math.abs(FF[2] - RF),
                CF = Math.min(WF, SF);
              return Math.max(0, 1 - CF / iW)
            }(),
            gW = FF / 1e3;
          QF += (CF + .6 * AF - QF) * Math.min(1, 2 * gW), null === (WF = eF) || void 0 === WF || WF.setRelativeVolume(QF)
        }
        return {
          onCreate: FF => {
            uF = FF
          },
          onReceivedMessageFromServer: (FF, WF) => {
            var SF;
            "ballState" === FF ? (dF = null !== (SF = WF.eId) && void 0 !== SF ? SF : null, dF || rW()) : "frozen" === FF ? bW = WF.frozen : "pitchInfo" === FF && (PF = WF.goalZRed, RF = WF.goalZBlue, iW = Math.abs(RF - PF) / 2)
          },
          lF: FF => {
            gW(FF)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);