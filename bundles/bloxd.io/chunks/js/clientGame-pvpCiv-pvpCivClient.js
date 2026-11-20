export const id = 23;
export const ids = [23];
export const modules = {
  39245: (uu, Ru, yu) => {
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
          null !== mu && "Mesh" === Eu.getEntityType(mu) && "Weaponmaster" === Eu.getEntityName(mu) && Eu.openShop(uu, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);