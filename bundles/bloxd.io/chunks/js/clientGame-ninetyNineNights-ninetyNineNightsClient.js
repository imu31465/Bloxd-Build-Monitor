export const id = 20;
export const ids = [20];
export const modules = {
  38368: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => yB
    });
    var VB = dB(24);
    const yB = function(BB, TB, dB) {
      let yB;
      return {
        onCreate: BB => {
          yB = BB
        },
        onPlayerClick: (BB, TB, dB, pB, lB, JB) => {
          TB || "Workbench" !== yB.getMetaInfo(JB).rootName || VB.h.yH("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);