export const id = 10;
export const ids = [10];
export const modules = {
  39993: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => YB
    });
    const YB = function(BB, OB, GB) {
      let YB;
      return {
        onCreate: BB => {
          YB = BB
        },
        onPlayerAltAction: (BB, OB, GB, DB, QB, oB) => {
          oB && "Mesh" === YB.getEntityType(oB) && ("Permanent Upgrades" === YB.getEntityName(oB) ? YB.openShop(BB, !1, "Upgrades") : "Items" === YB.getEntityName(oB) ? YB.openShop(BB, !1, "Items") : "Prestige" === YB.getEntityName(oB) && YB.openShop(BB, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);