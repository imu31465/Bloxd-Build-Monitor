export const id = 17;
export const ids = [17];
export const modules = {
  40152: (BB, OB, GB) => {
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
          oB && "Mesh" === YB.getEntityType(oB) && YB.openShop(BB, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);