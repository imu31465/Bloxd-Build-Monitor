export const id = 23;
export const ids = [23];
export const modules = {
  39536: (kk, Fk, Ik) => {
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
          null !== yk && "Mesh" === Xk.getEntityType(yk) && "Weaponmaster" === Xk.getEntityName(yk) && Xk.openShop(kk, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);