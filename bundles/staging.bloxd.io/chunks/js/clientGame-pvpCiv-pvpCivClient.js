export const id = 23;
export const ids = [23];
export const modules = {
  39106: (kk, Fk, Bk) => {
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
          null !== Xk && "Mesh" === Rk.getEntityType(Xk) && "Weaponmaster" === Rk.getEntityName(Xk) && Rk.openShop(kk, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);