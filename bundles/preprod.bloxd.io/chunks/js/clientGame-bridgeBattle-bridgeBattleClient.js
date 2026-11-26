export const id = 10;
export const ids = [10];
export const modules = {
  40143: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => cU
    });
    const cU = function(UU, XU, zU) {
      let cU;
      return {
        onCreate: UU => {
          cU = UU
        },
        onPlayerAltAction: (UU, XU, zU, yU, QU, AU) => {
          AU && "Mesh" === cU.getEntityType(AU) && ("Permanent Upgrades" === cU.getEntityName(AU) ? cU.openShop(UU, !1, "Upgrades") : "Items" === cU.getEntityName(AU) ? cU.openShop(UU, !1, "Items") : "Prestige" === cU.getEntityName(AU) && cU.openShop(UU, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);