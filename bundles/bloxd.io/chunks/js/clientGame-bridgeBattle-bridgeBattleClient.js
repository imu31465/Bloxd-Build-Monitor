export const id = 10;
export const ids = [10];
export const modules = {
  39577: (uu, Eu, ju) => {
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
          Xu && "Mesh" === su.getEntityType(Xu) && ("Permanent Upgrades" === su.getEntityName(Xu) ? su.openShop(uu, !1, "Upgrades") : "Items" === su.getEntityName(Xu) ? su.openShop(uu, !1, "Items") : "Prestige" === su.getEntityName(Xu) && su.openShop(uu, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);