export const id = 19;
export const ids = [19];
export const modules = {
  40528: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => SM
    });
    const OM = .4,
      SM = function(MM, rM, iM, SM) {
        let jM, {
            localPlayerId: aM
          } = SM,
          PM = !1,
          nM = null,
          QM = null,
          zM = null,
          LM = 1,
          mM = null,
          HM = 0,
          hM = 0;

        function JM() {
          if (mM) {
            const MM = mM;
            MM.fade(MM.getVolume(), 0, 500), setTimeout((() => {
              MM.stop()
            }), 500), mM = null
          }
          hM = 0
        }

        function dM(MM) {
          var rM;
          if (!nM || PM || null === QM) return void(mM && JM());
          const iM = Date.now();
          if (!mM || iM - HM > 54e3) {
            if (mM) {
              const MM = mM;
              MM.fade(MM.getVolume(), 0, 2e3), setTimeout((() => {
                MM.stop()
              }), 2e3)
            }
            mM = jM.playSound(aM, "crowdAmbience", OM, 1), HM = iM, hM = OM
          }
          const SM = function() {
              if (null === QM || null === zM || !nM) return 0;
              const MM = jM.getPositionView(nM);
              if (!MM) return 0;
              const rM = Math.abs(MM[2] - QM),
                iM = Math.abs(MM[2] - zM),
                OM = Math.min(rM, iM);
              return Math.max(0, 1 - OM / LM)
            }(),
            dM = MM / 1e3;
          hM += (OM + .6 * SM - hM) * Math.min(1, 2 * dM), null === (rM = mM) || void 0 === rM || rM.setRelativeVolume(hM)
        }
        return {
          onCreate: MM => {
            jM = MM
          },
          onReceivedMessageFromServer: (MM, rM) => {
            var iM;
            "ballState" === MM ? (nM = null !== (iM = rM.eId) && void 0 !== iM ? iM : null, nM || JM()) : "frozen" === MM ? PM = rM.frozen : "pitchInfo" === MM && (QM = rM.goalZRed, zM = rM.goalZBlue, LM = Math.abs(zM - QM) / 2)
          },
          bL: MM => {
            dM(MM)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);