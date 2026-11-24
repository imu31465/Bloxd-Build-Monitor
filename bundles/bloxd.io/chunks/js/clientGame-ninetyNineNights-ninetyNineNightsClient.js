export const id = 20;
export const ids = [20];
export const modules = {
  39529: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => nB
    });
    var QB = zB(31);
    const nB = function(BB, jB, zB) {
      let nB;
      return {
        onCreate: BB => {
          nB = BB
        },
        onPlayerClick: (BB, jB, zB, dB, IB, NB) => {
          jB || "Workbench" !== nB.getMetaInfo(NB).rootName || QB.n.Ly("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);