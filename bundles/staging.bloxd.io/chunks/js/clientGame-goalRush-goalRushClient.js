export const id = 18;
export const ids = [18];
export const modules = {
  39497: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => JB
    });
    const TB = .4,
      JB = function(BB, IB, ZB, JB) {
        let oB, {
            localPlayerId: GB
          } = JB,
          vB = !1,
          kB = null,
          cB = null,
          nB = null,
          hB = 1,
          zB = null,
          FB = 0,
          NB = 0;

        function gB() {
          if (zB) {
            const BB = zB;
            BB.fade(BB.getVolume(), 0, 500), setTimeout((() => {
              BB.stop()
            }), 500), zB = null
          }
          NB = 0
        }

        function qB(BB) {
          var IB;
          if (!kB || vB || null === cB) return void(zB && gB());
          const ZB = Date.now();
          if (!zB || ZB - FB > 54e3) {
            if (zB) {
              const BB = zB;
              BB.fade(BB.getVolume(), 0, 2e3), setTimeout((() => {
                BB.stop()
              }), 2e3)
            }
            zB = oB.playSound(GB, "crowdAmbience", TB, 1), FB = ZB, NB = TB
          }
          const JB = function() {
              if (null === cB || null === nB || !kB) return 0;
              const BB = oB.getPositionView(kB);
              if (!BB) return 0;
              const IB = Math.abs(BB[2] - cB),
                ZB = Math.abs(BB[2] - nB),
                TB = Math.min(IB, ZB);
              return Math.max(0, 1 - TB / hB)
            }(),
            qB = BB / 1e3;
          NB += (TB + .6 * JB - NB) * Math.min(1, 2 * qB), null === (IB = zB) || void 0 === IB || IB.setRelativeVolume(NB)
        }
        return {
          onCreate: BB => {
            oB = BB
          },
          onReceivedMessageFromServer: (BB, IB) => {
            var ZB;
            "ballState" === BB ? (kB = null !== (ZB = IB.eId) && void 0 !== ZB ? ZB : null, kB || gB()) : "frozen" === BB ? vB = IB.frozen : "pitchInfo" === BB && (cB = IB.goalZRed, nB = IB.goalZBlue, hB = Math.abs(nB - cB) / 2)
          },
          Iz: BB => {
            qB(BB)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);