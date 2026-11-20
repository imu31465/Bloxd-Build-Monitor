export const id = 10;
export const ids = [10];
export const modules = {
  38806: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => tU
    });
    const tU = function(UU, RU, gU) {
      let tU;
      return {
        onCreate: UU => {
          tU = UU
        },
        onPlayerAltAction: (UU, RU, gU, pU, EU, PU) => {
          PU && "Mesh" === tU.getEntityType(PU) && ("Permanent Upgrades" === tU.getEntityName(PU) ? tU.openShop(UU, !1, "Upgrades") : "Items" === tU.getEntityName(PU) ? tU.openShop(UU, !1, "Items") : "Prestige" === tU.getEntityName(PU) && tU.openShop(UU, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);