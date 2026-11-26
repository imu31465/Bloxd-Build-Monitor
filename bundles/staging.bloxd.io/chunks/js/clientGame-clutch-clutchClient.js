export const id = 14;
export const ids = [14];
export const modules = {
  40014: (BB, OB, GB) => {
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
          oB && "Mesh" === YB.getEntityType(oB) && "Quartermaster" === YB.getEntityName(oB) && YB.openShop(BB, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);