export const id = 10;
export const ids = [10];
export const modules = {
  39346: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => TB
    });
    const TB = function(BB, IB, ZB) {
      let TB;
      return {
        onCreate: BB => {
          TB = BB
        },
        onPlayerAltAction: (BB, IB, ZB, JB, oB, GB) => {
          GB && "Mesh" === TB.getEntityType(GB) && ("Permanent Upgrades" === TB.getEntityName(GB) ? TB.openShop(BB, !1, "Upgrades") : "Items" === TB.getEntityName(GB) ? TB.openShop(BB, !1, "Items") : "Prestige" === TB.getEntityName(GB) && TB.openShop(BB, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);