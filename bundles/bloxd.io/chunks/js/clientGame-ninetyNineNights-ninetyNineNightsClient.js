export const id = 20;
export const ids = [20];
export const modules = {
  39456: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Tk
    });
    var Xk = Ik(34);
    const Tk = function(kk, Fk, Ik) {
      let Tk;
      return {
        onCreate: kk => {
          Tk = kk
        },
        onPlayerClick: (kk, Fk, Ik, ik, yk, lk) => {
          Fk || "Workbench" !== Tk.getMetaInfo(lk).rootName || Xk.g.GL("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);