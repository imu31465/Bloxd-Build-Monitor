export const id = 23;
export const ids = [23];
export const modules = {
  39828: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => su
    });
    const su = function(uu, Eu, ju) {
      let su;
      return {
        onCreate: uu => {
          su = uu
        },
        onPlayerAltAction: (uu, Eu, ju, Uu, Zu, Xu) => {
          null !== Xu && "Mesh" === su.getEntityType(Xu) && "Weaponmaster" === su.getEntityName(Xu) && su.openShop(uu, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);