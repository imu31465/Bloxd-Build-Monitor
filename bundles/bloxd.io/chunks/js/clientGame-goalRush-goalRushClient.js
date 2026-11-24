export const id = 18;
export const ids = [18];
export const modules = {
  39450: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Tk
    });
    const Xk = .4,
      Tk = function(kk, Fk, Ik, Tk) {
        let ik, {
            localPlayerId: yk
          } = Tk,
          lk = !1,
          ak = null,
          qk = null,
          Lk = null,
          tk = 1,
          Zk = null,
          jk = 0,
          ek = 0;

        function wk() {
          if (Zk) {
            const kk = Zk;
            kk.fade(kk.getVolume(), 0, 500), setTimeout((() => {
              kk.stop()
            }), 500), Zk = null
          }
          ek = 0
        }

        function Hk(kk) {
          var Fk;
          if (!ak || lk || null === qk) return void(Zk && wk());
          const Ik = Date.now();
          if (!Zk || Ik - jk > 54e3) {
            if (Zk) {
              const kk = Zk;
              kk.fade(kk.getVolume(), 0, 2e3), setTimeout((() => {
                kk.stop()
              }), 2e3)
            }
            Zk = ik.playSound(yk, "crowdAmbience", Xk, 1), jk = Ik, ek = Xk
          }
          const Tk = function() {
              if (null === qk || null === Lk || !ak) return 0;
              const kk = ik.getPositionView(ak);
              if (!kk) return 0;
              const Fk = Math.abs(kk[2] - qk),
                Ik = Math.abs(kk[2] - Lk),
                Xk = Math.min(Fk, Ik);
              return Math.max(0, 1 - Xk / tk)
            }(),
            Hk = kk / 1e3;
          ek += (Xk + .6 * Tk - ek) * Math.min(1, 2 * Hk), null === (Fk = Zk) || void 0 === Fk || Fk.setRelativeVolume(ek)
        }
        return {
          onCreate: kk => {
            ik = kk
          },
          onReceivedMessageFromServer: (kk, Fk) => {
            var Ik;
            "ballState" === kk ? (ak = null !== (Ik = Fk.eId) && void 0 !== Ik ? Ik : null, ak || wk()) : "frozen" === kk ? lk = Fk.frozen : "pitchInfo" === kk && (qk = Fk.goalZRed, Lk = Fk.goalZBlue, tk = Math.abs(Lk - qk) / 2)
          },
          Dt: kk => {
            Hk(kk)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);