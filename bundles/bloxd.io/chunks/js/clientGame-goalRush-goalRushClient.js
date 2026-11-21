export const id = 18;
export const ids = [18];
export const modules = {
  39547: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Nd
    });
    const pd = .4,
      Nd = function(dd, Jd, kd, Nd) {
        let Wd, {
            localPlayerId: Pd
          } = Nd,
          Zd = !1,
          gd = null,
          Cd = null,
          Kd = null,
          od = 1,
          ld = null,
          Qd = 0,
          Ld = 0;

        function Od() {
          if (ld) {
            const dd = ld;
            dd.fade(dd.getVolume(), 0, 500), setTimeout((() => {
              dd.stop()
            }), 500), ld = null
          }
          Ld = 0
        }

        function ed(dd) {
          var Jd;
          if (!gd || Zd || null === Cd) return void(ld && Od());
          const kd = Date.now();
          if (!ld || kd - Qd > 54e3) {
            if (ld) {
              const dd = ld;
              dd.fade(dd.getVolume(), 0, 2e3), setTimeout((() => {
                dd.stop()
              }), 2e3)
            }
            ld = Wd.playSound(Pd, "crowdAmbience", pd, 1), Qd = kd, Ld = pd
          }
          const Nd = function() {
              if (null === Cd || null === Kd || !gd) return 0;
              const dd = Wd.getPositionView(gd);
              if (!dd) return 0;
              const Jd = Math.abs(dd[2] - Cd),
                kd = Math.abs(dd[2] - Kd),
                pd = Math.min(Jd, kd);
              return Math.max(0, 1 - pd / od)
            }(),
            ed = dd / 1e3;
          Ld += (pd + .6 * Nd - Ld) * Math.min(1, 2 * ed), null === (Jd = ld) || void 0 === Jd || Jd.setRelativeVolume(Ld)
        }
        return {
          onCreate: dd => {
            Wd = dd
          },
          onReceivedMessageFromServer: (dd, Jd) => {
            var kd;
            "ballState" === dd ? (gd = null !== (kd = Jd.eId) && void 0 !== kd ? kd : null, gd || Od()) : "frozen" === dd ? Zd = Jd.frozen : "pitchInfo" === dd && (Cd = Jd.goalZRed, Kd = Jd.goalZBlue, od = Math.abs(Kd - Cd) / 2)
          },
          Do: dd => {
            ed(dd)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);