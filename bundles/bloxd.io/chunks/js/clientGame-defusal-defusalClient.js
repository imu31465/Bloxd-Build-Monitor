export const id = 16;
export const ids = [16];
export const modules = {
  38348: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => VB
    });
    const VB = function(BB, TB, dB) {
      let VB;
      return {
        onCreate: BB => {
          VB = BB
        },
        onPlayerAltAction: (BB, TB, dB, yB, pB, lB) => {
          lB && "Mesh" === VB.getEntityType(lB) && VB.openShop(BB, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);