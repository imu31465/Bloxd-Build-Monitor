export const id = 18;
export const ids = [18];
export const modules = {
  39737: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Uu
    });
    const su = .4,
      Uu = function(uu, Eu, ju, Uu) {
        let Zu, {
            localPlayerId: Xu
          } = Uu,
          lu = !1,
          qu = null,
          fu = null,
          Cu = null,
          bu = 1,
          cu = null,
          Nu = 0,
          Ou = 0;

        function Yu() {
          if (cu) {
            const uu = cu;
            uu.fade(uu.getVolume(), 0, 500), setTimeout((() => {
              uu.stop()
            }), 500), cu = null
          }
          Ou = 0
        }

        function hu(uu) {
          var Eu;
          if (!qu || lu || null === fu) return void(cu && Yu());
          const ju = Date.now();
          if (!cu || ju - Nu > 54e3) {
            if (cu) {
              const uu = cu;
              uu.fade(uu.getVolume(), 0, 2e3), setTimeout((() => {
                uu.stop()
              }), 2e3)
            }
            cu = Zu.playSound(Xu, "crowdAmbience", su, 1), Nu = ju, Ou = su
          }
          const Uu = function() {
              if (null === fu || null === Cu || !qu) return 0;
              const uu = Zu.getPositionView(qu);
              if (!uu) return 0;
              const Eu = Math.abs(uu[2] - fu),
                ju = Math.abs(uu[2] - Cu),
                su = Math.min(Eu, ju);
              return Math.max(0, 1 - su / bu)
            }(),
            hu = uu / 1e3;
          Ou += (su + .6 * Uu - Ou) * Math.min(1, 2 * hu), null === (Eu = cu) || void 0 === Eu || Eu.setRelativeVolume(Ou)
        }
        return {
          onCreate: uu => {
            Zu = uu
          },
          onReceivedMessageFromServer: (uu, Eu) => {
            var ju;
            "ballState" === uu ? (qu = null !== (ju = Eu.eId) && void 0 !== ju ? ju : null, qu || Yu()) : "frozen" === uu ? lu = Eu.frozen : "pitchInfo" === uu && (fu = Eu.goalZRed, Cu = Eu.goalZBlue, bu = Math.abs(Cu - fu) / 2)
          },
          Tb: uu => {
            hu(uu)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);