export const id = 23;
export const ids = [23];
export const modules = {
  39661: (mm, Tm, fm) => {
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
          null !== xm && "Mesh" === hm.getEntityType(xm) && "Weaponmaster" === hm.getEntityName(xm) && hm.openShop(mm, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);