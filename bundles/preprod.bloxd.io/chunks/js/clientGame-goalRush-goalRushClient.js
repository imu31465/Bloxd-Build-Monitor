export const id = 18;
export const ids = [18];
export const modules = {
  39262: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => wC
    });
    const QC = .4,
      wC = function(CC, zC, ZC, wC) {
        let bC, {
            localPlayerId: nC
          } = wC,
          fC = !1,
          oC = null,
          qC = null,
          FC = null,
          WC = 1,
          NC = null,
          MC = 0,
          gC = 0;

        function SC() {
          if (NC) {
            const CC = NC;
            CC.fade(CC.getVolume(), 0, 500), setTimeout((() => {
              CC.stop()
            }), 500), NC = null
          }
          gC = 0
        }

        function pC(CC) {
          var zC;
          if (!oC || fC || null === qC) return void(NC && SC());
          const ZC = Date.now();
          if (!NC || ZC - MC > 54e3) {
            if (NC) {
              const CC = NC;
              CC.fade(CC.getVolume(), 0, 2e3), setTimeout((() => {
                CC.stop()
              }), 2e3)
            }
            NC = bC.playSound(nC, "crowdAmbience", QC, 1), MC = ZC, gC = QC
          }
          const wC = function() {
              if (null === qC || null === FC || !oC) return 0;
              const CC = bC.getPositionView(oC);
              if (!CC) return 0;
              const zC = Math.abs(CC[2] - qC),
                ZC = Math.abs(CC[2] - FC),
                QC = Math.min(zC, ZC);
              return Math.max(0, 1 - QC / WC)
            }(),
            pC = CC / 1e3;
          gC += (QC + .6 * wC - gC) * Math.min(1, 2 * pC), null === (zC = NC) || void 0 === zC || zC.setRelativeVolume(gC)
        }
        return {
          onCreate: CC => {
            bC = CC
          },
          onReceivedMessageFromServer: (CC, zC) => {
            var ZC;
            "ballState" === CC ? (oC = null !== (ZC = zC.eId) && void 0 !== ZC ? ZC : null, oC || SC()) : "frozen" === CC ? fC = zC.frozen : "pitchInfo" === CC && (qC = zC.goalZRed, FC = zC.goalZBlue, WC = Math.abs(FC - qC) / 2)
          },
          ZN: CC => {
            pC(CC)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);