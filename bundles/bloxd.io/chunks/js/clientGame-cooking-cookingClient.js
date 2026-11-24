export const id = 15;
export const ids = [15];
export const modules = {
  39543: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => zT
    });
    const WT = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      zT = function(TT, UT, mT) {
        let zT;
        return {
          onCreate: TT => {
            zT = TT
          },
          onPlayerAltAction: (TT, UT, mT, MT, gT, nT) => {
            WT.some((TT => TT[0] === UT && TT[2] === MT)) && zT.openShop(TT, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);