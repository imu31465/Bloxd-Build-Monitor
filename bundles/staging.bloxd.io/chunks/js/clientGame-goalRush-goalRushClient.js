export const id = 18;
export const ids = [18];
export const modules = {
  39016: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => tk
    });
    const Rk = .4,
      tk = function(kk, Fk, Bk, tk) {
        let ak, {
            localPlayerId: Xk
          } = tk,
          bk = !1,
          wk = null,
          dk = null,
          sk = null,
          Vk = 1,
          Jk = null,
          Ak = 0,
          ek = 0;

        function yk() {
          if (Jk) {
            const kk = Jk;
            kk.fade(kk.getVolume(), 0, 500), setTimeout((() => {
              kk.stop()
            }), 500), Jk = null
          }
          ek = 0
        }

        function fk(kk) {
          var Fk;
          if (!wk || bk || null === dk) return void(Jk && yk());
          const Bk = Date.now();
          if (!Jk || Bk - Ak > 54e3) {
            if (Jk) {
              const kk = Jk;
              kk.fade(kk.getVolume(), 0, 2e3), setTimeout((() => {
                kk.stop()
              }), 2e3)
            }
            Jk = ak.playSound(Xk, "crowdAmbience", Rk, 1), Ak = Bk, ek = Rk
          }
          const tk = function() {
              if (null === dk || null === sk || !wk) return 0;
              const kk = ak.getPositionView(wk);
              if (!kk) return 0;
              const Fk = Math.abs(kk[2] - dk),
                Bk = Math.abs(kk[2] - sk),
                Rk = Math.min(Fk, Bk);
              return Math.max(0, 1 - Rk / Vk)
            }(),
            fk = kk / 1e3;
          ek += (Rk + .6 * tk - ek) * Math.min(1, 2 * fk), null === (Fk = Jk) || void 0 === Fk || Fk.setRelativeVolume(ek)
        }
        return {
          onCreate: kk => {
            ak = kk
          },
          onReceivedMessageFromServer: (kk, Fk) => {
            var Bk;
            "ballState" === kk ? (wk = null !== (Bk = Fk.eId) && void 0 !== Bk ? Bk : null, wk || yk()) : "frozen" === kk ? bk = Fk.frozen : "pitchInfo" === kk && (dk = Fk.goalZRed, sk = Fk.goalZBlue, Vk = Math.abs(sk - dk) / 2)
          },
          yJ: kk => {
            fk(kk)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);