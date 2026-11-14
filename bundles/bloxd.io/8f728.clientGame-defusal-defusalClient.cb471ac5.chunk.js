export const id = 15;
export const ids = [15];
export const modules = {
  37724: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Vc
    });
    const Vc = function(cB, Bc, nc) {
      let Vc;
      return {
        onCreate: cB => {
          Vc = cB
        },
        onPlayerAltAction: (cB, Bc, nc, Ic, rB, uc) => {
          uc && "Mesh" === Vc.getEntityType(uc) && Vc.openShop(cB, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);