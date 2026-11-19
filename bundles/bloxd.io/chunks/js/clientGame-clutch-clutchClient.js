export const id = 13;
export const ids = [13];
export const modules = {
  38232: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => iT
    });
    const iT = function(TT, oT, IT) {
      let iT;
      return {
        onCreate: TT => {
          iT = TT
        },
        onPlayerAltAction: (TT, oT, IT, zT, kT, WT) => {
          WT && "Mesh" === iT.getEntityType(WT) && "Quartermaster" === iT.getEntityName(WT) && iT.openShop(TT, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);