export const id = 15;
export const ids = [15];
export const modules = {
  39186: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => MT
    });
    const lT = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      MT = function(TT, kT, cT) {
        let MT;
        return {
          onCreate: TT => {
            MT = TT
          },
          onPlayerAltAction: (TT, kT, cT, KT, OT, yT) => {
            lT.some((TT => TT[0] === kT && TT[2] === KT)) && MT.openShop(TT, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);