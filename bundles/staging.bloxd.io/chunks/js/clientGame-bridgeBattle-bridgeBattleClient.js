export const id = 10;
export const ids = [10];
export const modules = {
  39362: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => QB
    });
    const QB = function(BB, jB, zB) {
      let QB;
      return {
        onCreate: BB => {
          QB = BB
        },
        onPlayerAltAction: (BB, jB, zB, nB, dB, IB) => {
          IB && "Mesh" === QB.getEntityType(IB) && ("Permanent Upgrades" === QB.getEntityName(IB) ? QB.openShop(BB, !1, "Upgrades") : "Items" === QB.getEntityName(IB) ? QB.openShop(BB, !1, "Items") : "Prestige" === QB.getEntityName(IB) && QB.openShop(BB, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);