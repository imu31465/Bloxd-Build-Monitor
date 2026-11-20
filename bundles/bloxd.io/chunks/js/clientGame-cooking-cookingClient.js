export const id = 15;
export const ids = [15];
export const modules = {
  38942: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => pU
    });
    const tU = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      pU = function(UU, RU, gU) {
        let pU;
        return {
          onCreate: UU => {
            pU = UU
          },
          onPlayerAltAction: (UU, RU, gU, EU, PU, TU) => {
            tU.some((UU => UU[0] === RU && UU[2] === EU)) && pU.openShop(UU, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);