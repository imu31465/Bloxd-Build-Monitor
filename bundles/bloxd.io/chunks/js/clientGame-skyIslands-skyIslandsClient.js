export const id = 24;
export const ids = [24];
export const modules = {
  39667: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => hm
    });
    const hm = function() {
      let mm;
      return {
        onCreate: Tm => {
          mm = Tm
        },
        onPlayerAltAction: (Tm, fm, hm, Am, am, xm) => {
          if (!xm || "Mesh" !== mm.getEntityType(xm)) return;
          const wm = mm.getEntityName(xm);
          "Perks" === wm ? mm.openShop(Tm, !1, "Perks") : "Returning Bonus" === wm && mm.openShop(Tm, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);