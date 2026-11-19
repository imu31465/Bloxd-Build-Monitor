export const id = 15;
export const ids = [15];
export const modules = {
  38340: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => zT
    });
    const iT = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      zT = function(TT, oT, IT) {
        let zT;
        return {
          onCreate: TT => {
            zT = TT
          },
          onPlayerAltAction: (TT, oT, IT, kT, WT, XT) => {
            iT.some((TT => TT[0] === oT && TT[2] === kT)) && zT.openShop(TT, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);