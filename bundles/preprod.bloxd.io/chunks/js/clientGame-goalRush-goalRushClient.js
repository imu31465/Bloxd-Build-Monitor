export const id = 19;
export const ids = [19];
export const modules = {
  40177: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => DB
    });
    const YB = .4,
      DB = function(BB, OB, GB, DB) {
        let QB, {
            localPlayerId: oB
          } = DB,
          jB = !1,
          yB = null,
          JB = null,
          MB = null,
          PB = 1,
          zB = null,
          lB = 0,
          pB = 0;

        function qB() {
          if (zB) {
            const BB = zB;
            BB.fade(BB.getVolume(), 0, 500), setTimeout((() => {
              BB.stop()
            }), 500), zB = null
          }
          pB = 0
        }

        function ZB(BB) {
          var OB;
          if (!yB || jB || null === JB) return void(zB && qB());
          const GB = Date.now();
          if (!zB || GB - lB > 54e3) {
            if (zB) {
              const BB = zB;
              BB.fade(BB.getVolume(), 0, 2e3), setTimeout((() => {
                BB.stop()
              }), 2e3)
            }
            zB = QB.playSound(oB, "crowdAmbience", YB, 1), lB = GB, pB = YB
          }
          const DB = function() {
              if (null === JB || null === MB || !yB) return 0;
              const BB = QB.getPositionView(yB);
              if (!BB) return 0;
              const OB = Math.abs(BB[2] - JB),
                GB = Math.abs(BB[2] - MB),
                YB = Math.min(OB, GB);
              return Math.max(0, 1 - YB / PB)
            }(),
            ZB = BB / 1e3;
          pB += (YB + .6 * DB - pB) * Math.min(1, 2 * ZB), null === (OB = zB) || void 0 === OB || OB.setRelativeVolume(pB)
        }
        return {
          onCreate: BB => {
            QB = BB
          },
          onReceivedMessageFromServer: (BB, OB) => {
            var GB;
            "ballState" === BB ? (yB = null !== (GB = OB.eId) && void 0 !== GB ? GB : null, yB || qB()) : "frozen" === BB ? jB = OB.frozen : "pitchInfo" === BB && (JB = OB.goalZRed, MB = OB.goalZBlue, PB = Math.abs(MB - JB) / 2)
          },
          kP: BB => {
            ZB(BB)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);