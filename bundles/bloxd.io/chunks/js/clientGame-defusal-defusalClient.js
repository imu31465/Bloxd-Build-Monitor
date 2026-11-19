export const id = 16;
export const ids = [16];
export const modules = {
  38347: (TT, oT, IT) => {
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
          WT && "Mesh" === iT.getEntityType(WT) && iT.openShop(TT, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);