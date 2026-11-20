export const id = 24;
export const ids = [24];
export const modules = {
  39063: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => tU
    });
    const tU = function() {
      let UU;
      return {
        onCreate: RU => {
          UU = RU
        },
        onPlayerAltAction: (RU, gU, tU, pU, EU, PU) => {
          if (!PU || "Mesh" !== UU.getEntityType(PU)) return;
          const TU = UU.getEntityName(PU);
          "Perks" === TU ? UU.openShop(RU, !1, "Perks") : "Returning Bonus" === TU && UU.openShop(RU, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);