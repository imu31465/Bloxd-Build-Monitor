export const id = 16;
export const ids = [16];
export const modules = {
  39558: (mm, Tm, fm) => {
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
          xm && "Mesh" === hm.getEntityType(xm) && hm.openShop(mm, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);