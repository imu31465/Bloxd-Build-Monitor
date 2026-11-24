export const id = 16;
export const ids = [16];
export const modules = {
  39492: (BB, IB, ZB) => {
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
          GB && "Mesh" === TB.getEntityType(GB) && TB.openShop(BB, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);