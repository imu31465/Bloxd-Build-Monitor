export const id = 18;
export const ids = [18];
export const modules = {
  39854: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => SG
    });
    const wG = .4,
      SG = function(GG, bG, ZG, SG) {
        let LG, {
            localPlayerId: yG
          } = SG,
          kG = !1,
          UG = null,
          YG = null,
          VG = null,
          pG = 1,
          fG = null,
          QG = 0,
          KG = 0;

        function hG() {
          if (fG) {
            const GG = fG;
            GG.fade(GG.getVolume(), 0, 500), setTimeout((() => {
              GG.stop()
            }), 500), fG = null
          }
          KG = 0
        }

        function dG(GG) {
          var bG;
          if (!UG || kG || null === YG) return void(fG && hG());
          const ZG = Date.now();
          if (!fG || ZG - QG > 54e3) {
            if (fG) {
              const GG = fG;
              GG.fade(GG.getVolume(), 0, 2e3), setTimeout((() => {
                GG.stop()
              }), 2e3)
            }
            fG = LG.playSound(yG, "crowdAmbience", wG, 1), QG = ZG, KG = wG
          }
          const SG = function() {
              if (null === YG || null === VG || !UG) return 0;
              const GG = LG.getPositionView(UG);
              if (!GG) return 0;
              const bG = Math.abs(GG[2] - YG),
                ZG = Math.abs(GG[2] - VG),
                wG = Math.min(bG, ZG);
              return Math.max(0, 1 - wG / pG)
            }(),
            dG = GG / 1e3;
          KG += (wG + .6 * SG - KG) * Math.min(1, 2 * dG), null === (bG = fG) || void 0 === bG || bG.setRelativeVolume(KG)
        }
        return {
          onCreate: GG => {
            LG = GG
          },
          onReceivedMessageFromServer: (GG, bG) => {
            var ZG;
            "ballState" === GG ? (UG = null !== (ZG = bG.eId) && void 0 !== ZG ? ZG : null, UG || hG()) : "frozen" === GG ? kG = bG.frozen : "pitchInfo" === GG && (YG = bG.goalZRed, VG = bG.goalZBlue, pG = Math.abs(VG - YG) / 2)
          },
          Tp: GG => {
            dG(GG)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);