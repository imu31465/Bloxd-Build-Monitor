export const id = 20;
export const ids = [20];
export const modules = {
  39216: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => MT
    });
    var lT = cT(36);
    const MT = function(TT, kT, cT) {
      let MT;
      return {
        onCreate: TT => {
          MT = TT
        },
        onPlayerClick: (TT, kT, cT, KT, OT, yT) => {
          kT || "Workbench" !== MT.getMetaInfo(yT).rootName || lT.k.nt("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);