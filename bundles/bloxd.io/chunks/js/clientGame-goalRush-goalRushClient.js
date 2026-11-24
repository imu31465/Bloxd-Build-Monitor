export const id = 18;
export const ids = [18];
export const modules = {
  39518: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => nB
    });
    const QB = .4,
      nB = function(BB, jB, zB, nB) {
        let dB, {
            localPlayerId: IB
          } = nB,
          NB = !1,
          uB = null,
          UB = null,
          aB = null,
          pB = 1,
          rB = null,
          sB = 0,
          JB = 0;

        function mB() {
          if (rB) {
            const BB = rB;
            BB.fade(BB.getVolume(), 0, 500), setTimeout((() => {
              BB.stop()
            }), 500), rB = null
          }
          JB = 0
        }

        function yB(BB) {
          var jB;
          if (!uB || NB || null === UB) return void(rB && mB());
          const zB = Date.now();
          if (!rB || zB - sB > 54e3) {
            if (rB) {
              const BB = rB;
              BB.fade(BB.getVolume(), 0, 2e3), setTimeout((() => {
                BB.stop()
              }), 2e3)
            }
            rB = dB.playSound(IB, "crowdAmbience", QB, 1), sB = zB, JB = QB
          }
          const nB = function() {
              if (null === UB || null === aB || !uB) return 0;
              const BB = dB.getPositionView(uB);
              if (!BB) return 0;
              const jB = Math.abs(BB[2] - UB),
                zB = Math.abs(BB[2] - aB),
                QB = Math.min(jB, zB);
              return Math.max(0, 1 - QB / pB)
            }(),
            yB = BB / 1e3;
          JB += (QB + .6 * nB - JB) * Math.min(1, 2 * yB), null === (jB = rB) || void 0 === jB || jB.setRelativeVolume(JB)
        }
        return {
          onCreate: BB => {
            dB = BB
          },
          onReceivedMessageFromServer: (BB, jB) => {
            var zB;
            "ballState" === BB ? (uB = null !== (zB = jB.eId) && void 0 !== zB ? zB : null, uB || mB()) : "frozen" === BB ? NB = jB.frozen : "pitchInfo" === BB && (UB = jB.goalZRed, aB = jB.goalZBlue, pB = Math.abs(aB - UB) / 2)
          },
          vp: BB => {
            yB(BB)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);