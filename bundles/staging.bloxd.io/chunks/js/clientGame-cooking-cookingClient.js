export const id = 15;
export const ids = [15];
export const modules = {
  39551: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Am
    });
    const hm = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Am = function(mm, Tm, fm) {
        let Am;
        return {
          onCreate: mm => {
            Am = mm
          },
          onPlayerAltAction: (mm, Tm, fm, am, xm, wm) => {
            hm.some((mm => mm[0] === Tm && mm[2] === am)) && Am.openShop(mm, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);