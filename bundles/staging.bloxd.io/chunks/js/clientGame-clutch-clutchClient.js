export const id = 13;
export const ids = [13];
export const modules = {
  39294: (kk, Fk, Ik) => {
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
          yk && "Mesh" === Xk.getEntityType(yk) && "Quartermaster" === Xk.getEntityName(yk) && Xk.openShop(kk, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);