export const id = 21;
export const ids = [21];
export const modules = {
  37753: (cB, Bc, nc) => {
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
          null !== uc && "Mesh" === Vc.getEntityType(uc) && "Weaponmaster" === Vc.getEntityName(uc) && Vc.openShop(cB, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);