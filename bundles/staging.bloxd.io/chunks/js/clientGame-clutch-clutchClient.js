export const id = 13;
export const ids = [13];
export const modules = {
  39020: (uu, Ru, yu) => {
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
          mu && "Mesh" === Eu.getEntityType(mu) && "Quartermaster" === Eu.getEntityName(mu) && Eu.openShop(uu, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);