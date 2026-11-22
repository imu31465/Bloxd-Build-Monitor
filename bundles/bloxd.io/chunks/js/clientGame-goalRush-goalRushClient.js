export const id = 18;
export const ids = [18];
export const modules = {
  39006: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => fk
    });
    const Dk = .4,
      fk = function(kk, ek, ik, fk) {
        let Sk, {
            localPlayerId: bk
          } = fk,
          rk = !1,
          Pk = null,
          mk = null,
          Mk = null,
          Kk = 1,
          xk = null,
          nk = 0,
          Uk = 0;

        function Hk() {
          if (xk) {
            const kk = xk;
            kk.fade(kk.getVolume(), 0, 500), setTimeout((() => {
              kk.stop()
            }), 500), xk = null
          }
          Uk = 0
        }

        function wk(kk) {
          var ek;
          if (!Pk || rk || null === mk) return void(xk && Hk());
          const ik = Date.now();
          if (!xk || ik - nk > 54e3) {
            if (xk) {
              const kk = xk;
              kk.fade(kk.getVolume(), 0, 2e3), setTimeout((() => {
                kk.stop()
              }), 2e3)
            }
            xk = Sk.playSound(bk, "crowdAmbience", Dk, 1), nk = ik, Uk = Dk
          }
          const fk = function() {
              if (null === mk || null === Mk || !Pk) return 0;
              const kk = Sk.getPositionView(Pk);
              if (!kk) return 0;
              const ek = Math.abs(kk[2] - mk),
                ik = Math.abs(kk[2] - Mk),
                Dk = Math.min(ek, ik);
              return Math.max(0, 1 - Dk / Kk)
            }(),
            wk = kk / 1e3;
          Uk += (Dk + .6 * fk - Uk) * Math.min(1, 2 * wk), null === (ek = xk) || void 0 === ek || ek.setRelativeVolume(Uk)
        }
        return {
          onCreate: kk => {
            Sk = kk
          },
          onReceivedMessageFromServer: (kk, ek) => {
            var ik;
            "ballState" === kk ? (Pk = null !== (ik = ek.eId) && void 0 !== ik ? ik : null, Pk || Hk()) : "frozen" === kk ? rk = ek.frozen : "pitchInfo" === kk && (mk = ek.goalZRed, Mk = ek.goalZBlue, Kk = Math.abs(Mk - mk) / 2)
          },
          Px: kk => {
            wk(kk)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);