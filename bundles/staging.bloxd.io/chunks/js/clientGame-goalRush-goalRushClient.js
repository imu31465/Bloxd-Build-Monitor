export const id = 18;
export const ids = [18];
export const modules = {
  39152: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Ku
    });
    const Eu = .4,
      Ku = function(uu, Ru, yu, Ku) {
        let Qu, {
            localPlayerId: mu
          } = Ku,
          Ju = !1,
          Nu = null,
          Xu = null,
          Vu = null,
          ru = 1,
          Bu = null,
          xu = 0,
          Su = 0;

        function pu() {
          if (Bu) {
            const uu = Bu;
            uu.fade(uu.getVolume(), 0, 500), setTimeout((() => {
              uu.stop()
            }), 500), Bu = null
          }
          Su = 0
        }

        function Tu(uu) {
          var Ru;
          if (!Nu || Ju || null === Xu) return void(Bu && pu());
          const yu = Date.now();
          if (!Bu || yu - xu > 54e3) {
            if (Bu) {
              const uu = Bu;
              uu.fade(uu.getVolume(), 0, 2e3), setTimeout((() => {
                uu.stop()
              }), 2e3)
            }
            Bu = Qu.playSound(mu, "crowdAmbience", Eu, 1), xu = yu, Su = Eu
          }
          const Ku = function() {
              if (null === Xu || null === Vu || !Nu) return 0;
              const uu = Qu.getPositionView(Nu);
              if (!uu) return 0;
              const Ru = Math.abs(uu[2] - Xu),
                yu = Math.abs(uu[2] - Vu),
                Eu = Math.min(Ru, yu);
              return Math.max(0, 1 - Eu / ru)
            }(),
            Tu = uu / 1e3;
          Su += (Eu + .6 * Ku - Su) * Math.min(1, 2 * Tu), null === (Ru = Bu) || void 0 === Ru || Ru.setRelativeVolume(Su)
        }
        return {
          onCreate: uu => {
            Qu = uu
          },
          onReceivedMessageFromServer: (uu, Ru) => {
            var yu;
            "ballState" === uu ? (Nu = null !== (yu = Ru.eId) && void 0 !== yu ? yu : null, Nu || pu()) : "frozen" === uu ? Ju = Ru.frozen : "pitchInfo" === uu && (Xu = Ru.goalZRed, Vu = Ru.goalZBlue, ru = Math.abs(Vu - Xu) / 2)
          },
          sr: uu => {
            Tu(uu)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);