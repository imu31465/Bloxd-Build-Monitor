export const id = 27;
export const ids = [27];
export const modules = {
  40308: (BB, OB, GB) => {
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
          null !== oB && "Mesh" === YB.getEntityType(oB) && "Weaponmaster" === YB.getEntityName(oB) && YB.openShop(BB, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);