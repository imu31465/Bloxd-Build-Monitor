export const id = 10;
export const ids = [10];
export const modules = {
  39283: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Xk
    });
    const Xk = function(kk, Fk, Ik) {
      let Xk;
      return {
        onCreate: kk => {
          Xk = kk
        },
        onPlayerAltAction: (kk, Fk, Ik, Tk, ik, yk) => {
          yk && "Mesh" === Xk.getEntityType(yk) && ("Permanent Upgrades" === Xk.getEntityName(yk) ? Xk.openShop(kk, !1, "Upgrades") : "Items" === Xk.getEntityName(yk) ? Xk.openShop(kk, !1, "Items") : "Prestige" === Xk.getEntityName(yk) && Xk.openShop(kk, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);