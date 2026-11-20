export const id = 23;
export const ids = [23];
export const modules = {
  39056: (UU, RU, gU) => {
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
          null !== PU && "Mesh" === tU.getEntityType(PU) && "Weaponmaster" === tU.getEntityName(PU) && tU.openShop(UU, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);