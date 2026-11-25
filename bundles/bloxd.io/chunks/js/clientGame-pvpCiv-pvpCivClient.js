export const id = 23;
export const ids = [23];
export const modules = {
  39929: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => wG
    });
    const wG = function(GG, bG, ZG) {
      let wG;
      return {
        onCreate: GG => {
          wG = GG
        },
        onPlayerAltAction: (GG, bG, ZG, SG, LG, yG) => {
          null !== yG && "Mesh" === wG.getEntityType(yG) && "Weaponmaster" === wG.getEntityName(yG) && wG.openShop(GG, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);