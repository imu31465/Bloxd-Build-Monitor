export const id = 27;
export const ids = [27];
export const modules = {
  40571: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => AH
    });
    const AH = function(HH, BH, LH) {
      let AH;
      return {
        onCreate: HH => {
          AH = HH
        },
        onPlayerAltAction: (HH, BH, LH, rH, SH, hH) => {
          null !== hH && "Mesh" === AH.getEntityType(hH) && "Weaponmaster" === AH.getEntityName(hH) && AH.openShop(HH, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);