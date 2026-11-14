export const id = 13;
export const ids = [13];
export const modules = {
  37718: (cB, Bc, nc) => {
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
          uc && "Mesh" === Vc.getEntityType(uc) && "Quartermaster" === Vc.getEntityName(uc) && Vc.openShop(cB, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);