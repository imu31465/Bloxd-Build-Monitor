export const id = 20;
export const ids = [20];
export const modules = {
  39026: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => tk
    });
    var Rk = Bk(29);
    const tk = function(kk, Fk, Bk) {
      let tk;
      return {
        onCreate: kk => {
          tk = kk
        },
        onPlayerClick: (kk, Fk, Bk, ak, Xk, bk) => {
          Fk || "Workbench" !== tk.getMetaInfo(bk).rootName || Rk.o.Hf("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);