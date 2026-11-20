export const id = 18;
export const ids = [18];
export const modules = {
  38962: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => pU
    });
    const tU = .4,
      pU = function(UU, RU, gU, pU) {
        let EU, {
            localPlayerId: PU
          } = pU,
          TU = !1,
          qU = null,
          KU = null,
          cU = null,
          GU = 1,
          jU = null,
          uU = 0,
          CU = 0;

        function hU() {
          if (jU) {
            const UU = jU;
            UU.fade(UU.getVolume(), 0, 500), setTimeout((() => {
              UU.stop()
            }), 500), jU = null
          }
          CU = 0
        }

        function QU(UU) {
          var RU;
          if (!qU || TU || null === KU) return void(jU && hU());
          const gU = Date.now();
          if (!jU || gU - uU > 54e3) {
            if (jU) {
              const UU = jU;
              UU.fade(UU.getVolume(), 0, 2e3), setTimeout((() => {
                UU.stop()
              }), 2e3)
            }
            jU = EU.playSound(PU, "crowdAmbience", tU, 1), uU = gU, CU = tU
          }
          const pU = function() {
              if (null === KU || null === cU || !qU) return 0;
              const UU = EU.getPositionView(qU);
              if (!UU) return 0;
              const RU = Math.abs(UU[2] - KU),
                gU = Math.abs(UU[2] - cU),
                tU = Math.min(RU, gU);
              return Math.max(0, 1 - tU / GU)
            }(),
            QU = UU / 1e3;
          CU += (tU + .6 * pU - CU) * Math.min(1, 2 * QU), null === (RU = jU) || void 0 === RU || RU.setRelativeVolume(CU)
        }
        return {
          onCreate: UU => {
            EU = UU
          },
          onReceivedMessageFromServer: (UU, RU) => {
            var gU;
            "ballState" === UU ? (qU = null !== (gU = RU.eId) && void 0 !== gU ? gU : null, qU || hU()) : "frozen" === UU ? TU = RU.frozen : "pitchInfo" === UU && (KU = RU.goalZRed, cU = RU.goalZBlue, GU = Math.abs(cU - KU) / 2)
          },
          HG: UU => {
            QU(UU)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);