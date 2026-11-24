export const id = 13;
export const ids = [13];
export const modules = {
  39370: (BB, jB, zB) => {
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
          IB && "Mesh" === QB.getEntityType(IB) && "Quartermaster" === QB.getEntityName(IB) && QB.openShop(BB, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);