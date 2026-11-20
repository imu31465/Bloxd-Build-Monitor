export const id = 13;
export const ids = [13];
export const modules = {
  38816: (UU, RU, gU) => {
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
          PU && "Mesh" === tU.getEntityType(PU) && "Quartermaster" === tU.getEntityName(PU) && tU.openShop(UU, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);