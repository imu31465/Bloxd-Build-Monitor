export const id = 18;
export const ids = [18];
export const modules = {
  38394: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => UJ
    });
    const FJ = .4,
      UJ = function(JJ, cJ, ZJ, UJ) {
        let eJ, {
            localPlayerId: XJ
          } = UJ,
          AJ = !1,
          qJ = null,
          jJ = null,
          YJ = null,
          hJ = 1,
          DJ = null,
          sJ = 0,
          nJ = 0;

        function GJ() {
          if (DJ) {
            const JJ = DJ;
            JJ.fade(JJ.getVolume(), 0, 500), setTimeout((() => {
              JJ.stop()
            }), 500), DJ = null
          }
          nJ = 0
        }

        function fJ(JJ) {
          var cJ;
          if (!qJ || AJ || null === jJ) return void(DJ && GJ());
          const ZJ = Date.now();
          if (!DJ || ZJ - sJ > 54e3) {
            if (DJ) {
              const JJ = DJ;
              JJ.fade(JJ.getVolume(), 0, 2e3), setTimeout((() => {
                JJ.stop()
              }), 2e3)
            }
            DJ = eJ.playSound(XJ, "crowdAmbience", FJ, 1), sJ = ZJ, nJ = FJ
          }
          const UJ = function() {
              if (null === jJ || null === YJ || !qJ) return 0;
              const JJ = eJ.getPositionView(qJ);
              if (!JJ) return 0;
              const cJ = Math.abs(JJ[2] - jJ),
                ZJ = Math.abs(JJ[2] - YJ),
                FJ = Math.min(cJ, ZJ);
              return Math.max(0, 1 - FJ / hJ)
            }(),
            fJ = JJ / 1e3;
          nJ += (FJ + .6 * UJ - nJ) * Math.min(1, 2 * fJ), null === (cJ = DJ) || void 0 === cJ || cJ.setRelativeVolume(nJ)
        }
        return {
          onCreate: JJ => {
            eJ = JJ
          },
          onReceivedMessageFromServer: (JJ, cJ) => {
            var ZJ;
            "ballState" === JJ ? (qJ = null !== (ZJ = cJ.eId) && void 0 !== ZJ ? ZJ : null, qJ || GJ()) : "frozen" === JJ ? AJ = cJ.frozen : "pitchInfo" === JJ && (jJ = cJ.goalZRed, YJ = cJ.goalZBlue, hJ = Math.abs(YJ - jJ) / 2)
          },
          Hh: JJ => {
            fJ(JJ)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);