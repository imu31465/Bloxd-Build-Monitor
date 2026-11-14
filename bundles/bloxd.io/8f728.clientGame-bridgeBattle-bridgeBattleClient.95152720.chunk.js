export const id = 10;
export const ids = [10];
export const modules = {
  37711: (cB, Bc, nc) => {
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
          uc && "Mesh" === Vc.getEntityType(uc) && ("Permanent Upgrades" === Vc.getEntityName(uc) ? Vc.openShop(cB, !1, "Upgrades") : "Items" === Vc.getEntityName(uc) ? Vc.openShop(cB, !1, "Items") : "Prestige" === Vc.getEntityName(uc) && Vc.openShop(cB, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);