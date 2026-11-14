export const id = 16;
export const ids = [16];
export const modules = {
  37272: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => CW
    });
    const wW = .4,
      CW = function(WW, RW, MW, CW) {
        let zR, {
            localPlayerId: AW
          } = CW,
          bR = !1,
          yR = null,
          NW = null,
          eW = null,
          BW = 1,
          tR = null,
          TW = 0,
          gR = 0;

        function iR() {
          if (tR) {
            const WW = tR;
            WW.fade(WW.getVolume(), 0, 500), setTimeout((() => {
              WW.stop()
            }), 500), tR = null
          }
          gR = 0
        }

        function YW(WW) {
          var RW;
          if (!yR || bR || null === NW) return void(tR && iR());
          const MW = Date.now();
          if (!tR || MW - TW > 54e3) {
            if (tR) {
              const WW = tR;
              WW.fade(WW.getVolume(), 0, 2e3), setTimeout((() => {
                WW.stop()
              }), 2e3)
            }
            tR = zR.playSound(AW, "crowdAmbience", wW, 1), TW = MW, gR = wW
          }
          const CW = function() {
              if (null === NW || null === eW || !yR) return 0;
              const WW = zR.getPositionView(yR);
              if (!WW) return 0;
              const RW = Math.abs(WW[2] - NW),
                MW = Math.abs(WW[2] - eW),
                wW = Math.min(RW, MW);
              return Math.max(0, 1 - wW / BW)
            }(),
            YW = WW / 1e3;
          gR += (wW + .6 * CW - gR) * Math.min(1, 2 * YW), null === (RW = tR) || void 0 === RW || RW.setRelativeVolume(gR)
        }
        return {
          onCreate: WW => {
            zR = WW
          },
          onReceivedMessageFromServer: (WW, RW) => {
            var MW;
            "ballState" === WW ? (yR = null !== (MW = RW.eId) && void 0 !== MW ? MW : null, yR || iR()) : "frozen" === WW ? bR = RW.frozen : "pitchInfo" === WW && (NW = RW.goalZRed, eW = RW.goalZBlue, BW = Math.abs(eW - NW) / 2)
          },
          WR: WW => {
            YW(WW)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);