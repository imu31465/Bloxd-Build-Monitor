export const id = 20;
export const ids = [20];
export const modules = {
  39012: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => fk
    });
    var Dk = ik(26);
    const fk = function(kk, ek, ik) {
      let fk;
      return {
        onCreate: kk => {
          fk = kk
        },
        onPlayerClick: (kk, ek, ik, Sk, bk, rk) => {
          ek || "Workbench" !== fk.getMetaInfo(rk).rootName || Dk.j.tm("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);