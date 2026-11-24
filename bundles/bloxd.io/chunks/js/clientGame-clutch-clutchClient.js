export const id = 13;
export const ids = [13];
export const modules = {
  39417: (mm, Tm, fm) => {
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
          xm && "Mesh" === hm.getEntityType(xm) && "Quartermaster" === hm.getEntityName(xm) && hm.openShop(mm, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);