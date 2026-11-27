export const id = 19;
export const ids = [19];
export const modules = {
  40728: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => EW
    });
    const mW = .4,
      EW = function(WW, iW, OW, EW) {
        let NW, {
            localPlayerId: PW
          } = EW,
          LW = !1,
          cW = null,
          wW = null,
          tW = null,
          ZW = 1,
          xW = null,
          lW = 0,
          AW = 0;

        function bW() {
          if (xW) {
            const WW = xW;
            WW.fade(WW.getVolume(), 0, 500), setTimeout((() => {
              WW.stop()
            }), 500), xW = null
          }
          AW = 0
        }

        function jW(WW) {
          var iW;
          if (!cW || LW || null === wW) return void(xW && bW());
          const OW = Date.now();
          if (!xW || OW - lW > 54e3) {
            if (xW) {
              const WW = xW;
              WW.fade(WW.getVolume(), 0, 2e3), setTimeout((() => {
                WW.stop()
              }), 2e3)
            }
            xW = NW.playSound(PW, "crowdAmbience", mW, 1), lW = OW, AW = mW
          }
          const EW = function() {
              if (null === wW || null === tW || !cW) return 0;
              const WW = NW.getPositionView(cW);
              if (!WW) return 0;
              const iW = Math.abs(WW[2] - wW),
                OW = Math.abs(WW[2] - tW),
                mW = Math.min(iW, OW);
              return Math.max(0, 1 - mW / ZW)
            }(),
            jW = WW / 1e3;
          AW += (mW + .6 * EW - AW) * Math.min(1, 2 * jW), null === (iW = xW) || void 0 === iW || iW.setRelativeVolume(AW)
        }
        return {
          onCreate: WW => {
            NW = WW
          },
          onReceivedMessageFromServer: (WW, iW) => {
            var OW;
            "ballState" === WW ? (cW = null !== (OW = iW.eId) && void 0 !== OW ? OW : null, cW || bW()) : "frozen" === WW ? LW = iW.frozen : "pitchInfo" === WW && (wW = iW.goalZRed, tW = iW.goalZBlue, ZW = Math.abs(tW - wW) / 2)
          },
          hZ: WW => {
            jW(WW)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);