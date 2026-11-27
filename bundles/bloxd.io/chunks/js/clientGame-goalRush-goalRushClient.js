export const id = 19;
export const ids = [19];
export const modules = {
  40737: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => tR
    });
    const yR = .4,
      tR = function(RR, JR, GR, tR) {
        let uR, {
            localPlayerId: ZR
          } = tR,
          qR = !1,
          iR = null,
          fR = null,
          VR = null,
          KR = 1,
          wR = null,
          rR = 0,
          eR = 0;

        function aR() {
          if (wR) {
            const RR = wR;
            RR.fade(RR.getVolume(), 0, 500), setTimeout((() => {
              RR.stop()
            }), 500), wR = null
          }
          eR = 0
        }

        function LR(RR) {
          var JR;
          if (!iR || qR || null === fR) return void(wR && aR());
          const GR = Date.now();
          if (!wR || GR - rR > 54e3) {
            if (wR) {
              const RR = wR;
              RR.fade(RR.getVolume(), 0, 2e3), setTimeout((() => {
                RR.stop()
              }), 2e3)
            }
            wR = uR.playSound(ZR, "crowdAmbience", yR, 1), rR = GR, eR = yR
          }
          const tR = function() {
              if (null === fR || null === VR || !iR) return 0;
              const RR = uR.getPositionView(iR);
              if (!RR) return 0;
              const JR = Math.abs(RR[2] - fR),
                GR = Math.abs(RR[2] - VR),
                yR = Math.min(JR, GR);
              return Math.max(0, 1 - yR / KR)
            }(),
            LR = RR / 1e3;
          eR += (yR + .6 * tR - eR) * Math.min(1, 2 * LR), null === (JR = wR) || void 0 === JR || JR.setRelativeVolume(eR)
        }
        return {
          onCreate: RR => {
            uR = RR
          },
          onReceivedMessageFromServer: (RR, JR) => {
            var GR;
            "ballState" === RR ? (iR = null !== (GR = JR.eId) && void 0 !== GR ? GR : null, iR || aR()) : "frozen" === RR ? qR = JR.frozen : "pitchInfo" === RR && (fR = JR.goalZRed, VR = JR.goalZBlue, KR = Math.abs(VR - fR) / 2)
          },
          gK: RR => {
            LR(RR)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);