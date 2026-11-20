export const id = 10;
export const ids = [10];
export const modules = {
  38873: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => Rk
    });
    const Rk = function(kk, Fk, Bk) {
      let Rk;
      return {
        onCreate: kk => {
          Rk = kk
        },
        onPlayerAltAction: (kk, Fk, Bk, tk, ak, Xk) => {
          Xk && "Mesh" === Rk.getEntityType(Xk) && ("Permanent Upgrades" === Rk.getEntityName(Xk) ? Rk.openShop(kk, !1, "Upgrades") : "Items" === Rk.getEntityName(Xk) ? Rk.openShop(kk, !1, "Items") : "Prestige" === Rk.getEntityName(Xk) && Rk.openShop(kk, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);