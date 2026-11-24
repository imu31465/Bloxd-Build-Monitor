export const id = 20;
export const ids = [20];
export const modules = {
  39580: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Am
    });
    var hm = fm(31);
    const Am = function(mm, Tm, fm) {
      let Am;
      return {
        onCreate: mm => {
          Am = mm
        },
        onPlayerClick: (mm, Tm, fm, am, xm, wm) => {
          Tm || "Workbench" !== Am.getMetaInfo(wm).rootName || hm.j.gp("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);