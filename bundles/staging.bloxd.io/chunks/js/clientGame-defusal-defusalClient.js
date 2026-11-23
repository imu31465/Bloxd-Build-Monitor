export const id = 16;
export const ids = [16];
export const modules = {
  39438: (kk, Fk, Ik) => {
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
          yk && "Mesh" === Xk.getEntityType(yk) && Xk.openShop(kk, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);