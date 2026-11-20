export const id = 16;
export const ids = [16];
export const modules = {
  39003: (kk, Fk, Bk) => {
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
          Xk && "Mesh" === Rk.getEntityType(Xk) && Rk.openShop(kk, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);