export const id = 19;
export const ids = [19];
export const modules = {
  40421: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => rH
    });
    const AH = .4,
      rH = function(HH, BH, LH, rH) {
        let SH, {
            localPlayerId: hH
          } = rH,
          tH = !1,
          zH = null,
          CH = null,
          EH = null,
          XH = 1,
          GH = null,
          YH = 0,
          uH = 0;

        function QH() {
          if (GH) {
            const HH = GH;
            HH.fade(HH.getVolume(), 0, 500), setTimeout((() => {
              HH.stop()
            }), 500), GH = null
          }
          uH = 0
        }

        function WH(HH) {
          var BH;
          if (!zH || tH || null === CH) return void(GH && QH());
          const LH = Date.now();
          if (!GH || LH - YH > 54e3) {
            if (GH) {
              const HH = GH;
              HH.fade(HH.getVolume(), 0, 2e3), setTimeout((() => {
                HH.stop()
              }), 2e3)
            }
            GH = SH.playSound(hH, "crowdAmbience", AH, 1), YH = LH, uH = AH
          }
          const rH = function() {
              if (null === CH || null === EH || !zH) return 0;
              const HH = SH.getPositionView(zH);
              if (!HH) return 0;
              const BH = Math.abs(HH[2] - CH),
                LH = Math.abs(HH[2] - EH),
                AH = Math.min(BH, LH);
              return Math.max(0, 1 - AH / XH)
            }(),
            WH = HH / 1e3;
          uH += (AH + .6 * rH - uH) * Math.min(1, 2 * WH), null === (BH = GH) || void 0 === BH || BH.setRelativeVolume(uH)
        }
        return {
          onCreate: HH => {
            SH = HH
          },
          onReceivedMessageFromServer: (HH, BH) => {
            var LH;
            "ballState" === HH ? (zH = null !== (LH = BH.eId) && void 0 !== LH ? LH : null, zH || QH()) : "frozen" === HH ? tH = BH.frozen : "pitchInfo" === HH && (CH = BH.goalZRed, EH = BH.goalZBlue, XH = Math.abs(EH - CH) / 2)
          },
          IX: HH => {
            WH(HH)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);