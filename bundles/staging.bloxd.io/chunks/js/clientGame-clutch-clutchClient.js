export const id = 13;
export const ids = [13];
export const modules = {
  38216: (BB, TB, dB) => {
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
          lB && "Mesh" === VB.getEntityType(lB) && "Quartermaster" === VB.getEntityName(lB) && VB.openShop(BB, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);