export const id = 14;
export const ids = [14];
export const modules = {
  40263: (HH, BH, LH) => {
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
          hH && "Mesh" === AH.getEntityType(hH) && "Quartermaster" === AH.getEntityName(hH) && AH.openShop(HH, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);