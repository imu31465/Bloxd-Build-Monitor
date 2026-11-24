export const id = 10;
export const ids = [10];
export const modules = {
  39402: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => hm
    });
    const hm = function(mm, Tm, fm) {
      let hm;
      return {
        onCreate: mm => {
          hm = mm
        },
        onPlayerAltAction: (mm, Tm, fm, Am, am, xm) => {
          xm && "Mesh" === hm.getEntityType(xm) && ("Permanent Upgrades" === hm.getEntityName(xm) ? hm.openShop(mm, !1, "Upgrades") : "Items" === hm.getEntityName(xm) ? hm.openShop(mm, !1, "Items") : "Prestige" === hm.getEntityName(xm) && hm.openShop(mm, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);