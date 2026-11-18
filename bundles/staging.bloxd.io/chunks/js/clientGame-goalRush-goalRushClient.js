export const id = 18;
export const ids = [18];
export const modules = {
  38354: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => yB
    });
    const VB = .4,
      yB = function(BB, TB, dB, yB) {
        let pB, {
            localPlayerId: lB
          } = yB,
          JB = !1,
          YB = null,
          gB = null,
          oB = null,
          kB = 1,
          LB = null,
          OB = 0,
          DB = 0;

        function uB() {
          if (LB) {
            const BB = LB;
            BB.fade(BB.getVolume(), 0, 500), setTimeout((() => {
              BB.stop()
            }), 500), LB = null
          }
          DB = 0
        }

        function HB(BB) {
          var TB;
          if (!YB || JB || null === gB) return void(LB && uB());
          const dB = Date.now();
          if (!LB || dB - OB > 54e3) {
            if (LB) {
              const BB = LB;
              BB.fade(BB.getVolume(), 0, 2e3), setTimeout((() => {
                BB.stop()
              }), 2e3)
            }
            LB = pB.playSound(lB, "crowdAmbience", VB, 1), OB = dB, DB = VB
          }
          const yB = function() {
              if (null === gB || null === oB || !YB) return 0;
              const BB = pB.getPositionView(YB);
              if (!BB) return 0;
              const TB = Math.abs(BB[2] - gB),
                dB = Math.abs(BB[2] - oB),
                VB = Math.min(TB, dB);
              return Math.max(0, 1 - VB / kB)
            }(),
            HB = BB / 1e3;
          DB += (VB + .6 * yB - DB) * Math.min(1, 2 * HB), null === (TB = LB) || void 0 === TB || TB.setRelativeVolume(DB)
        }
        return {
          onCreate: BB => {
            pB = BB
          },
          onReceivedMessageFromServer: (BB, TB) => {
            var dB;
            "ballState" === BB ? (YB = null !== (dB = TB.eId) && void 0 !== dB ? dB : null, YB || uB()) : "frozen" === BB ? JB = TB.frozen : "pitchInfo" === BB && (gB = TB.goalZRed, oB = TB.goalZBlue, kB = Math.abs(oB - gB) / 2)
          },
          dL: BB => {
            HB(BB)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);