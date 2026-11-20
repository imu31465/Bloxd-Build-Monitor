export const id = 16;
export const ids = [16];
export const modules = {
  38948: (UU, RU, gU) => {
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
          PU && "Mesh" === tU.getEntityType(PU) && tU.openShop(UU, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);