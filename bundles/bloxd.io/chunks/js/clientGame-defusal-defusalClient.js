export const id = 16;
export const ids = [16];
export const modules = {
  39139: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Eu
    });
    const Eu = function(uu, Ru, yu) {
      let Eu;
      return {
        onCreate: uu => {
          Eu = uu
        },
        onPlayerAltAction: (uu, Ru, yu, Ku, Qu, mu) => {
          mu && "Mesh" === Eu.getEntityType(mu) && Eu.openShop(uu, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);