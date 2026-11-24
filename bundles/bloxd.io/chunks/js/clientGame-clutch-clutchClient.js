export const id = 13;
export const ids = [13];
export const modules = {
  39354: (BB, IB, ZB) => {
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
          GB && "Mesh" === TB.getEntityType(GB) && "Quartermaster" === TB.getEntityName(GB) && TB.openShop(BB, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);