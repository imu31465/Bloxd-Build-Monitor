export const id = 13;
export const ids = [13];
export const modules = {
  38850: (kk, ek, ik) => {
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
          bk && "Mesh" === Dk.getEntityType(bk) && "Quartermaster" === Dk.getEntityName(bk) && Dk.openShop(kk, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);