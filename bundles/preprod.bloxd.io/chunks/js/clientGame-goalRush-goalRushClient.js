export const id = 19;
export const ids = [19];
export const modules = {
  40288: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => yU
    });
    const cU = .4,
      yU = function(UU, XU, zU, yU) {
        let QU, {
            localPlayerId: AU
          } = yU,
          FU = !1,
          oU = null,
          DU = null,
          EU = null,
          YU = 1,
          NU = null,
          IU = 0,
          pU = 0;

        function aU() {
          if (NU) {
            const UU = NU;
            UU.fade(UU.getVolume(), 0, 500), setTimeout((() => {
              UU.stop()
            }), 500), NU = null
          }
          pU = 0
        }

        function tU(UU) {
          var XU;
          if (!oU || FU || null === DU) return void(NU && aU());
          const zU = Date.now();
          if (!NU || zU - IU > 54e3) {
            if (NU) {
              const UU = NU;
              UU.fade(UU.getVolume(), 0, 2e3), setTimeout((() => {
                UU.stop()
              }), 2e3)
            }
            NU = QU.playSound(AU, "crowdAmbience", cU, 1), IU = zU, pU = cU
          }
          const yU = function() {
              if (null === DU || null === EU || !oU) return 0;
              const UU = QU.getPositionView(oU);
              if (!UU) return 0;
              const XU = Math.abs(UU[2] - DU),
                zU = Math.abs(UU[2] - EU),
                cU = Math.min(XU, zU);
              return Math.max(0, 1 - cU / YU)
            }(),
            tU = UU / 1e3;
          pU += (cU + .6 * yU - pU) * Math.min(1, 2 * tU), null === (XU = NU) || void 0 === XU || XU.setRelativeVolume(pU)
        }
        return {
          onCreate: UU => {
            QU = UU
          },
          onReceivedMessageFromServer: (UU, XU) => {
            var zU;
            "ballState" === UU ? (oU = null !== (zU = XU.eId) && void 0 !== zU ? zU : null, oU || aU()) : "frozen" === UU ? FU = XU.frozen : "pitchInfo" === UU && (DU = XU.goalZRed, EU = XU.goalZBlue, YU = Math.abs(EU - DU) / 2)
          },
          LY: UU => {
            tU(UU)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);