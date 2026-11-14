export const id = 14;
export const ids = [14];
export const modules = {
  37720: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Ic
    });
    const Vc = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Ic = function(cB, Bc, nc) {
        let Ic;
        return {
          onCreate: cB => {
            Ic = cB
          },
          onPlayerAltAction: (cB, Bc, nc, rB, uc, sc) => {
            Vc.some((cB => cB[0] === Bc && cB[2] === rB)) && Ic.openShop(cB, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);