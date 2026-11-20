export const id = 15;
export const ids = [15];
export const modules = {
  39135: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Ku
    });
    const Eu = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Ku = function(uu, Ru, yu) {
        let Ku;
        return {
          onCreate: uu => {
            Ku = uu
          },
          onPlayerAltAction: (uu, Ru, yu, Qu, mu, Ju) => {
            Eu.some((uu => uu[0] === Ru && uu[2] === Qu)) && Ku.openShop(uu, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);