export const id = 20;
export const ids = [20];
export const modules = {
  38371: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => zT
    });
    var iT = IT(16);
    const zT = function(TT, oT, IT) {
      let zT;
      return {
        onCreate: TT => {
          zT = TT
        },
        onPlayerClick: (TT, oT, IT, kT, WT, XT) => {
          oT || "Workbench" !== zT.getMetaInfo(XT).rootName || iT.h.XM("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);