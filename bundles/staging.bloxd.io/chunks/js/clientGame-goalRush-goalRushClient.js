export const id = 19;
export const ids = [19];
export const modules = {
  41077: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Fd
    });
    const Wd = .4,
      Fd = function(dd, Od, md, Fd) {
        let Rd, {
            localPlayerId: Xd
          } = Fd,
          Kd = !1,
          hd = null,
          vd = null,
          Qd = null,
          td = 1,
          od = null,
          Nd = 0,
          qd = 0;

        function Hd() {
          if (od) {
            const dd = od;
            dd.fade(dd.getVolume(), 0, 500), setTimeout((() => {
              dd.stop()
            }), 500), od = null
          }
          qd = 0
        }

        function yd(dd) {
          var Od;
          if (!hd || Kd || null === vd) return void(od && Hd());
          const md = Date.now();
          if (!od || md - Nd > 54e3) {
            if (od) {
              const dd = od;
              dd.fade(dd.getVolume(), 0, 2e3), setTimeout((() => {
                dd.stop()
              }), 2e3)
            }
            od = Rd.playSound(Xd, "crowdAmbience", Wd, 1), Nd = md, qd = Wd
          }
          const Fd = function() {
              if (null === vd || null === Qd || !hd) return 0;
              const dd = Rd.getPositionView(hd);
              if (!dd) return 0;
              const Od = Math.abs(dd[2] - vd),
                md = Math.abs(dd[2] - Qd),
                Wd = Math.min(Od, md);
              return Math.max(0, 1 - Wd / td)
            }(),
            yd = dd / 1e3;
          qd += (Wd + .6 * Fd - qd) * Math.min(1, 2 * yd), null === (Od = od) || void 0 === Od || Od.setRelativeVolume(qd)
        }
        return {
          onCreate: dd => {
            Rd = dd
          },
          onReceivedMessageFromServer: (dd, Od) => {
            var md;
            "ballState" === dd ? (hd = null !== (md = Od.eId) && void 0 !== md ? md : null, hd || Hd()) : "frozen" === dd ? Kd = Od.frozen : "pitchInfo" === dd && (vd = Od.goalZRed, Qd = Od.goalZBlue, td = Math.abs(Qd - vd) / 2)
          },
          Et: dd => {
            yd(dd)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);