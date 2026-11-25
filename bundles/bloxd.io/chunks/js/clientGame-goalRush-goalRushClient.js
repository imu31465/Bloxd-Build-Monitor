export const id = 18;
export const ids = [18];
export const modules = {
  39655: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => qt
    });
    const Ot = .4,
      qt = function(tt, et, Vt, qt) {
        let Dt, {
            localPlayerId: mt
          } = qt,
          dt = !1,
          jt = null,
          Ht = null,
          Xt = null,
          Qt = 1,
          lt = null,
          Et = 0,
          ft = 0;

        function wt() {
          if (lt) {
            const tt = lt;
            tt.fade(tt.getVolume(), 0, 500), setTimeout((() => {
              tt.stop()
            }), 500), lt = null
          }
          ft = 0
        }

        function yt(tt) {
          var et;
          if (!jt || dt || null === Ht) return void(lt && wt());
          const Vt = Date.now();
          if (!lt || Vt - Et > 54e3) {
            if (lt) {
              const tt = lt;
              tt.fade(tt.getVolume(), 0, 2e3), setTimeout((() => {
                tt.stop()
              }), 2e3)
            }
            lt = Dt.playSound(mt, "crowdAmbience", Ot, 1), Et = Vt, ft = Ot
          }
          const qt = function() {
              if (null === Ht || null === Xt || !jt) return 0;
              const tt = Dt.getPositionView(jt);
              if (!tt) return 0;
              const et = Math.abs(tt[2] - Ht),
                Vt = Math.abs(tt[2] - Xt),
                Ot = Math.min(et, Vt);
              return Math.max(0, 1 - Ot / Qt)
            }(),
            yt = tt / 1e3;
          ft += (Ot + .6 * qt - ft) * Math.min(1, 2 * yt), null === (et = lt) || void 0 === et || et.setRelativeVolume(ft)
        }
        return {
          onCreate: tt => {
            Dt = tt
          },
          onReceivedMessageFromServer: (tt, et) => {
            var Vt;
            "ballState" === tt ? (jt = null !== (Vt = et.eId) && void 0 !== Vt ? Vt : null, jt || wt()) : "frozen" === tt ? dt = et.frozen : "pitchInfo" === tt && (Ht = et.goalZRed, Xt = et.goalZBlue, Qt = Math.abs(Xt - Ht) / 2)
          },
          BQ: tt => {
            yt(tt)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);