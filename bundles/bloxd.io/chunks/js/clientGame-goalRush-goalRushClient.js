export const id = 18;
export const ids = [18];
export const modules = {
  38745: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => AY
    });
    const FY = .4,
      AY = function(YY, rY, DY, AY) {
        let IY, {
            localPlayerId: RY
          } = AY,
          OY = !1,
          gY = null,
          aY = null,
          vY = null,
          uY = 1,
          sY = null,
          iY = 0,
          yY = 0;

        function QY() {
          if (sY) {
            const YY = sY;
            YY.fade(YY.getVolume(), 0, 500), setTimeout((() => {
              YY.stop()
            }), 500), sY = null
          }
          yY = 0
        }

        function oY(YY) {
          var rY;
          if (!gY || OY || null === aY) return void(sY && QY());
          const DY = Date.now();
          if (!sY || DY - iY > 54e3) {
            if (sY) {
              const YY = sY;
              YY.fade(YY.getVolume(), 0, 2e3), setTimeout((() => {
                YY.stop()
              }), 2e3)
            }
            sY = IY.playSound(RY, "crowdAmbience", FY, 1), iY = DY, yY = FY
          }
          const AY = function() {
              if (null === aY || null === vY || !gY) return 0;
              const YY = IY.getPositionView(gY);
              if (!YY) return 0;
              const rY = Math.abs(YY[2] - aY),
                DY = Math.abs(YY[2] - vY),
                FY = Math.min(rY, DY);
              return Math.max(0, 1 - FY / uY)
            }(),
            oY = YY / 1e3;
          yY += (FY + .6 * AY - yY) * Math.min(1, 2 * oY), null === (rY = sY) || void 0 === rY || rY.setRelativeVolume(yY)
        }
        return {
          onCreate: YY => {
            IY = YY
          },
          onReceivedMessageFromServer: (YY, rY) => {
            var DY;
            "ballState" === YY ? (gY = null !== (DY = rY.eId) && void 0 !== DY ? DY : null, gY || QY()) : "frozen" === YY ? OY = rY.frozen : "pitchInfo" === YY && (aY = rY.goalZRed, vY = rY.goalZBlue, uY = Math.abs(vY - aY) / 2)
          },
          Zu: YY => {
            oY(YY)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);