export const id = 18;
export const ids = [18];
export const modules = {
  39387: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => sD
    });
    const pD = .4,
      sD = function(DD, zD, wD, sD) {
        let KD, {
            localPlayerId: rD
          } = sD,
          LD = !1,
          cD = null,
          gD = null,
          RD = null,
          AD = 1,
          UD = null,
          fD = 0,
          ID = 0;

        function BD() {
          if (UD) {
            const DD = UD;
            DD.fade(DD.getVolume(), 0, 500), setTimeout((() => {
              DD.stop()
            }), 500), UD = null
          }
          ID = 0
        }

        function GD(DD) {
          var zD;
          if (!cD || LD || null === gD) return void(UD && BD());
          const wD = Date.now();
          if (!UD || wD - fD > 54e3) {
            if (UD) {
              const DD = UD;
              DD.fade(DD.getVolume(), 0, 2e3), setTimeout((() => {
                DD.stop()
              }), 2e3)
            }
            UD = KD.playSound(rD, "crowdAmbience", pD, 1), fD = wD, ID = pD
          }
          const sD = function() {
              if (null === gD || null === RD || !cD) return 0;
              const DD = KD.getPositionView(cD);
              if (!DD) return 0;
              const zD = Math.abs(DD[2] - gD),
                wD = Math.abs(DD[2] - RD),
                pD = Math.min(zD, wD);
              return Math.max(0, 1 - pD / AD)
            }(),
            GD = DD / 1e3;
          ID += (pD + .6 * sD - ID) * Math.min(1, 2 * GD), null === (zD = UD) || void 0 === zD || zD.setRelativeVolume(ID)
        }
        return {
          onCreate: DD => {
            KD = DD
          },
          onReceivedMessageFromServer: (DD, zD) => {
            var wD;
            "ballState" === DD ? (cD = null !== (wD = zD.eId) && void 0 !== wD ? wD : null, cD || BD()) : "frozen" === DD ? LD = zD.frozen : "pitchInfo" === DD && (gD = zD.goalZRed, RD = zD.goalZBlue, AD = Math.abs(RD - gD) / 2)
          },
          DU: DD => {
            GD(DD)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);