export const id = 10;
export const ids = [10];
export const modules = {
  38838: (kk, ek, ik) => {
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
          bk && "Mesh" === Dk.getEntityType(bk) && ("Permanent Upgrades" === Dk.getEntityName(bk) ? Dk.openShop(kk, !1, "Upgrades") : "Items" === Dk.getEntityName(bk) ? Dk.openShop(kk, !1, "Items") : "Prestige" === Dk.getEntityName(bk) && Dk.openShop(kk, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);