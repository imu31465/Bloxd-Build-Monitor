export const id = 10;
export const ids = [10];
export const modules = {
  38214: (TT, oT, IT) => {
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
          WT && "Mesh" === iT.getEntityType(WT) && ("Permanent Upgrades" === iT.getEntityName(WT) ? iT.openShop(TT, !1, "Upgrades") : "Items" === iT.getEntityName(WT) ? iT.openShop(TT, !1, "Items") : "Prestige" === iT.getEntityName(WT) && iT.openShop(TT, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);