export const id = 16;
export const ids = [16];
export const modules = {
  38996: (kk, ek, ik) => {
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
          bk && "Mesh" === Dk.getEntityType(bk) && Dk.openShop(kk, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);