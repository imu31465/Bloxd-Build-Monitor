export const id = 16;
export const ids = [16];
export const modules = {
  39505: (BB, jB, zB) => {
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
          IB && "Mesh" === QB.getEntityType(IB) && QB.openShop(BB, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);