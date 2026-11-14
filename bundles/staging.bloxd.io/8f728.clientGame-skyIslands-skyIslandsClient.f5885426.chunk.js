export const id = 22;
export const ids = [22];
export const modules = {
  37757: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Vc
    });
    const Vc = function() {
      let cB;
      return {
        onCreate: Bc => {
          cB = Bc
        },
        onPlayerAltAction: (Bc, nc, Vc, Ic, rB, uc) => {
          if (!uc || "Mesh" !== cB.getEntityType(uc)) return;
          const sc = cB.getEntityName(uc);
          "Perks" === sc ? cB.openShop(Bc, !1, "Perks") : "Returning Bonus" === sc && cB.openShop(Bc, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);