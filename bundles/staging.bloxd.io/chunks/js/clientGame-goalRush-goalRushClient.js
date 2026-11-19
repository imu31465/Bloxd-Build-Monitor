export const id = 18;
export const ids = [18];
export const modules = {
  38738: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => pD
    });
    const ID = .4,
      pD = function(DD, CD, cD, pD) {
        let iD, {
            localPlayerId: fD
          } = pD,
          bD = !1,
          QD = null,
          wD = null,
          SD = null,
          BD = 1,
          yD = null,
          MD = 0,
          tD = 0;

        function ZD() {
          if (yD) {
            const DD = yD;
            DD.fade(DD.getVolume(), 0, 500), setTimeout((() => {
              DD.stop()
            }), 500), yD = null
          }
          tD = 0
        }

        function oD(DD) {
          var CD;
          if (!QD || bD || null === wD) return void(yD && ZD());
          const cD = Date.now();
          if (!yD || cD - MD > 54e3) {
            if (yD) {
              const DD = yD;
              DD.fade(DD.getVolume(), 0, 2e3), setTimeout((() => {
                DD.stop()
              }), 2e3)
            }
            yD = iD.playSound(fD, "crowdAmbience", ID, 1), MD = cD, tD = ID
          }
          const pD = function() {
              if (null === wD || null === SD || !QD) return 0;
              const DD = iD.getPositionView(QD);
              if (!DD) return 0;
              const CD = Math.abs(DD[2] - wD),
                cD = Math.abs(DD[2] - SD),
                ID = Math.min(CD, cD);
              return Math.max(0, 1 - ID / BD)
            }(),
            oD = DD / 1e3;
          tD += (ID + .6 * pD - tD) * Math.min(1, 2 * oD), null === (CD = yD) || void 0 === CD || CD.setRelativeVolume(tD)
        }
        return {
          onCreate: DD => {
            iD = DD
          },
          onReceivedMessageFromServer: (DD, CD) => {
            var cD;
            "ballState" === DD ? (QD = null !== (cD = CD.eId) && void 0 !== cD ? cD : null, QD || ZD()) : "frozen" === DD ? bD = CD.frozen : "pitchInfo" === DD && (wD = CD.goalZRed, SD = CD.goalZBlue, BD = Math.abs(SD - wD) / 2)
          },
          wy: DD => {
            oD(DD)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);