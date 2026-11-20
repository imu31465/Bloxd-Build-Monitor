export const id = 10;
export const ids = [10];
export const modules = {
  39012: (uu, Ru, yu) => {
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
          mu && "Mesh" === Eu.getEntityType(mu) && ("Permanent Upgrades" === Eu.getEntityName(mu) ? Eu.openShop(uu, !1, "Upgrades") : "Items" === Eu.getEntityName(mu) ? Eu.openShop(uu, !1, "Items") : "Prestige" === Eu.getEntityName(mu) && Eu.openShop(uu, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);