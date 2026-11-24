export const id = 18;
export const ids = [18];
export const modules = {
  39458: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => bS
    });
    const tS = .4,
      bS = function(SS, HS, gS, bS) {
        let XS, {
            localPlayerId: xS
          } = bS,
          NS = !1,
          qS = null,
          uS = null,
          IS = null,
          fS = 1,
          kS = null,
          aS = 0,
          KS = 0;

        function jS() {
          if (kS) {
            const SS = kS;
            SS.fade(SS.getVolume(), 0, 500), setTimeout((() => {
              SS.stop()
            }), 500), kS = null
          }
          KS = 0
        }

        function GS(SS) {
          var HS;
          if (!qS || NS || null === uS) return void(kS && jS());
          const gS = Date.now();
          if (!kS || gS - aS > 54e3) {
            if (kS) {
              const SS = kS;
              SS.fade(SS.getVolume(), 0, 2e3), setTimeout((() => {
                SS.stop()
              }), 2e3)
            }
            kS = XS.playSound(xS, "crowdAmbience", tS, 1), aS = gS, KS = tS
          }
          const bS = function() {
              if (null === uS || null === IS || !qS) return 0;
              const SS = XS.getPositionView(qS);
              if (!SS) return 0;
              const HS = Math.abs(SS[2] - uS),
                gS = Math.abs(SS[2] - IS),
                tS = Math.min(HS, gS);
              return Math.max(0, 1 - tS / fS)
            }(),
            GS = SS / 1e3;
          KS += (tS + .6 * bS - KS) * Math.min(1, 2 * GS), null === (HS = kS) || void 0 === HS || HS.setRelativeVolume(KS)
        }
        return {
          onCreate: SS => {
            XS = SS
          },
          onReceivedMessageFromServer: (SS, HS) => {
            var gS;
            "ballState" === SS ? (qS = null !== (gS = HS.eId) && void 0 !== gS ? gS : null, qS || jS()) : "frozen" === SS ? NS = HS.frozen : "pitchInfo" === SS && (uS = HS.goalZRed, IS = HS.goalZBlue, fS = Math.abs(IS - uS) / 2)
          },
          mf: SS => {
            GS(SS)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);