export const id = 23;
export const ids = [23];
export const modules = {
  39102: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Dk
    });
    const Dk = function(kk, ek, ik) {
      let Dk;
      return {
        onCreate: kk => {
          Dk = kk
        },
        onPlayerAltAction: (kk, ek, ik, fk, Sk, bk) => {
          null !== bk && "Mesh" === Dk.getEntityType(bk) && "Weaponmaster" === Dk.getEntityName(bk) && Dk.openShop(kk, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);