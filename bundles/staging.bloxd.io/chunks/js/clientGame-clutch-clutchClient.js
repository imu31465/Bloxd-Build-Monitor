export const id = 13;
export const ids = [13];
export const modules = {
  38883: (kk, Fk, Bk) => {
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
          Xk && "Mesh" === Rk.getEntityType(Xk) && "Quartermaster" === Rk.getEntityName(Xk) && Rk.openShop(kk, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);