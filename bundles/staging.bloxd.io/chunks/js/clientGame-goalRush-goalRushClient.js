export const id = 19;
export const ids = [19];
export const modules = {
  41071: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Wr
    });
    const Zr = .4,
      Wr = function(rr, Sr, Qr, Wr) {
        let ar, {
            localPlayerId: jr
          } = Wr,
          Ir = !1,
          fr = null,
          Er = null,
          pr = null,
          xr = 1,
          mr = null,
          Nr = 0,
          Ur = 0;

        function tr() {
          if (mr) {
            const rr = mr;
            rr.fade(rr.getVolume(), 0, 500), setTimeout((() => {
              rr.stop()
            }), 500), mr = null
          }
          Ur = 0
        }

        function hr(rr) {
          var Sr;
          if (!fr || Ir || null === Er) return void(mr && tr());
          const Qr = Date.now();
          if (!mr || Qr - Nr > 54e3) {
            if (mr) {
              const rr = mr;
              rr.fade(rr.getVolume(), 0, 2e3), setTimeout((() => {
                rr.stop()
              }), 2e3)
            }
            mr = ar.playSound(jr, "crowdAmbience", Zr, 1), Nr = Qr, Ur = Zr
          }
          const Wr = function() {
              if (null === Er || null === pr || !fr) return 0;
              const rr = ar.getPositionView(fr);
              if (!rr) return 0;
              const Sr = Math.abs(rr[2] - Er),
                Qr = Math.abs(rr[2] - pr),
                Zr = Math.min(Sr, Qr);
              return Math.max(0, 1 - Zr / xr)
            }(),
            hr = rr / 1e3;
          Ur += (Zr + .6 * Wr - Ur) * Math.min(1, 2 * hr), null === (Sr = mr) || void 0 === Sr || Sr.setRelativeVolume(Ur)
        }
        return {
          onCreate: rr => {
            ar = rr
          },
          onReceivedMessageFromServer: (rr, Sr) => {
            var Qr;
            "ballState" === rr ? (fr = null !== (Qr = Sr.eId) && void 0 !== Qr ? Qr : null, fr || tr()) : "frozen" === rr ? Ir = Sr.frozen : "pitchInfo" === rr && (Er = Sr.goalZRed, pr = Sr.goalZBlue, xr = Math.abs(pr - Er) / 2)
          },
          lx: rr => {
            hr(rr)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);